import {ClusterSettings, Plugin} from '../models';
import requests from './requests';

export class ClusterSettingsService {
    public settings(): Promise<ClusterSettings> {
        return requests.get('/settings').then(res => res.body as ClusterSettings);
    }

    public plugins(): Promise<Plugin[]> {
        return requests.get('/settings/plugins').then(res => (res.body.plugins || []) as Plugin[]);
    }
}
