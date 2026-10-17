import {readFileSync} from 'node:fs';
import {identityPlaceholders} from '../../tools/physics-autopilot/src/doctor.mts';
const bad=identityPlaceholders(readFileSync('physics/briefs/beta-scaffold.md','utf8'));if(bad.length)throw Error(bad.join(', '));console.log('Native dispatch identity-placeholder preflight: pass');
