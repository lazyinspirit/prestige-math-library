import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {gunzipSync} from 'node:zlib';
import {itemHashGuard} from '../../../../tools/item-hash.mjs';
const base='research/quantum-computing-algorithms-60-2026-10-15-owner/native-interface-reconciliation/native-norms';
const read=p=>fs.readFileSync(p,'utf8');const sha=s=>createHash('sha256').update(s).digest('hex');
const m=JSON.parse(read(base+'/effective-manifest.json'));
const reasons={
'cor-finite-dimensional-normed-spaces-are-banach':'L3 already cites actual coordinate l1 and realification-metric lemma. Step 1.3 transports the identical real norm Q isometrically; n=0 is explicit.',
'cor-finite-dimensional-subspaces-are-closed':'L3 uses restriction only, which actual complex-subspace definition proves; L7 already cites actual subspace-realification for metric restriction and supplied interleaved basis. Dimension zero and ZF remain.',
'cor-inner-product-induces-a-norm':'A3 and final Statement require precisely the three complex norm axioms. Nonnegativity is separately supplied by its induced-length supplier A1; no induced-metric attribution occurs.',
'def-bounded-linear-operator':'Definition explicitly dispatches real/complex norms and same-field linearity; only the identical finite real C>=0 bound is used. It asserts no metric theorem.',
 'thm-all-norms-on-a-finite-dimensional-complex-space-are-equivalent':'L2 uses exactly actual equivalent-complex-norms positive real comparison constants. Coordinate maps give the same bounds including zero dimension; no metric premise is attributed to complex norm definition.',
 'thm-bounded-linear-operator-equivalences':'Existing proposal changes only strict-to-nonstrict zero-vector bound; norm-metric interpretation is supplied through bounded-operator and Lipschitz interfaces. All four predicates remain.',
 'thm-coordinate-map-for-a-finite-dimensional-normed-space':'L5 already routes realification norm/metric to actual lemma and full complex homogeneity to actual definition; both coordinate norms are transported to R^(2n). Both dimension-zero branches remain.',
 'lem-real-part-determines-a-complex-linear-functional':'Pure algebra: realification definition and complex coordinate arithmetic supply its scalar operations. No norm or metric supplier is needed.',
 'def-bounded-bilinear-map':'Explicit two-field dispatch and same-field bilinearity with real bounds only. No metric assertion.',
 'def-resolvent-of-a-closed-operator':'Banach domain obtains its two-field norm metric from effective def-banach-space. Extra complex definition is scalar/axiom vocabulary; graph closure and boundedness use named Banach/operator suppliers.',
 'def-compactly-embedded-normed-spaces':'Explicit real/complex norm dispatch; defining bounded-set/compact-closure interface is effective def-compact-linear-operator, whose identical norm metric is now routed. No extra direct metric dependency needed.',
 'thm-meromorphic-continuation-and-intertwining-identity-for-a-nu':'F5 proves scalar norm axioms from modulus laws and explicitly cites def-complex-metric-convergence-and-continuity for d(z,w)=|z-w| and complex-plane completeness separately.',
 'lem-resolvent-identity-and-holomorphy-for-closed-operators':'Banach/resolvent interfaces supply complete norm metric; complex norm definition is domain/scalar vocabulary only.',
 'def-sectorial-operator-with-the-semigroup-sign-convention':'Banach domain and named resolvent interface already supply norm metric. No metric assertion is assigned solely to complex norm definition.',
 'lem-canonical-banach-complexification-of-a-real-banach-space':'Statement explicitly invokes complex norm axioms only; real norm and completeness use separate L1 real norm/Banach suppliers, and local rotation-supremum proof establishes complex homogeneity and completeness.',
 'thm-hahn-banach-norm-preserving-extension':'Real theorem removes redundant inherited remark dependency. Its real norm hypotheses and extension proof remain unchanged.',
 'rem-real-banach-spaces-require-complexification-for-analyticity':'Uses the separate canonical complexification and analytic-semigroup interfaces; removed redundant norm remark is not a logical premise.',
 'def-complex-sector-and-bounded-analytic-semigroup':'Banach/operator vocabulary supplies metric completeness and boundedness. Final complex norm citation identifies complex scalar interpretation of canonical complexification; no independent metric claim there.',
 'def-bounded-coercive-and-symmetric-sesquilinear-forms':'Hilbert and sesquilinear suppliers supply its typed domain; inherited unused norm remark removed only. No complex norm metric attribution.',
 'def-strongly-continuous-semigroup':'Effective Banach definition supplies metric and completeness; complex norm citation is domain/scalar vocabulary. Strong continuity predicate is unchanged.',
 'thm-jordan-von-neumann-polarization':'A3 uses only complex norm axioms, in particular full scalar homogeneity including i; real branch already cites real definition. No missing metric premise.',
 'def-weak-and-strict-separation':'Uses the effective relative-convexity/separation supplier, now explicitly routed; own definitions and formulas unchanged.',
 'def-c-star-algebra':'Complex norm axioms and effective Banach definition supply norm and completeness separately; C*-identity, nonunital/zero-algebra scope and bounds unchanged.',
 'cex-first-resolvent-estimate-does-not-give-hille-yosida-bound':'F1 invokes complex homogeneity only from actual norm definition; F2 uses finite-dimensional Banach supplier for completeness. Matrix bounds and DC assumption unchanged.',
 'def-dual-space-of-a-normed-space':'Definition dispatches R/C explicitly and defines bounded scalar-linear functionals with operator norm. No metric assertion needs an added direct dependency.',
 'ex-fredholm-alternative-for-an-integral-equation':'A2 invokes norm axioms only; scalar coordinate inequalities and local proof 1.1–1.2 establish C([a,b],K) completeness, using effective Banach predicate. AC and alternatives unchanged.',
 'thm-finite-dimensional-compact-group-representations-are-completely-reducible':'F9 actual equivalent-complex-norms gives identical positive-real inequalities on End(V), hence same norm topology by epsilon scaling. All decomposition/AC/dimension-zero clauses remain.'
};
function sections(s){let out={};for(const a of s.matchAll(/^## (Definition|Statement|Example|Statement refuted)\s*\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm))out[a[1]]=a[2];return out;}
const deltas=[];for(const x of m.items){const s=read(x.reviewed_proposal),t=read(x.effective_proposal),before=read(x.before_file),live=read(x.live_published_file);
if(sha(s)!==x.reviewed_proposal_raw_sha256||sha(before)!==x.before_raw_sha256||sha(live)!==sha(before))throw new Error('preimage drift '+x.id);
if(!/^status: published$/m.test(t)||/^verification:/m.test(t))throw new Error('status/verification '+x.id);
x.proposed_content_sha256=itemHashGuard(t);x.reviewed_content_sha256=itemHashGuard(s);x.live_preimage_matches_archived_before=true;
if(reasons[x.id])x.actual_use_justification=reasons[x.id];
x.public_sections_unchanged=JSON.stringify(sections(s))===JSON.stringify(sections(t));
x.downstream_preservation='Identical admissible norm/field data, norm values and d(u,v)=N(u-v); therefore identical metric predicates, same-field linearity, comparison bounds and hypotheses at inherited actual-use contexts. No mathematical premise removed; added references establish the same predicate.';
deltas.push({id:x.id,reviewed_public_sections:sections(s),effective_public_sections:sections(t),public_sections_unchanged:x.public_sections_unchanged,source_diff:x.disposition==='override'?base+'/'+x.id+'.diff':null});}
const ids=['def-complex-norm-and-complex-normed-space','lem-complex-modulus-of-real-embedding-equals-real-absolute-value','lem-complex-norm-realification-is-a-real-norm','lem-complex-coordinate-l1-is-a-norm','def-complex-normed-subspace','lem-complex-normed-subspace-realifies-to-real-normed-subspace','def-equivalent-complex-norms','def-norm-and-normed-space'];
m.actual_supplier_guards=ids.map(id=>({id,file:'items/'+id+'.md',raw_sha256:sha(read('items/'+id+'.md')),content_sha256:itemHashGuard(read('items/'+id+'.md'))}));
const old=JSON.parse(gunzipSync(fs.readFileSync('research/quantum-build-60-2026-10-15-owner/norms/consumer-check-round2/all-use-context-dispositions.json.gz')));
const changed=new Set(m.items.filter(x=>x.disposition==='override').map(x=>x.id));
const uses=[];for(const x of old.items){const sites=x.use_sites.filter(u=>changed.has(u.supplier));if(sites.length) uses.push({id:x.id,path:x.path,exact_public_context:x.exact_public_context,sites});}
fs.writeFileSync(base+'/focused-inherited-downstream-contexts.json',JSON.stringify({basis:'Filtered original sealed actual-use evidence only; no fresh whole-corpus traversal or independent proof audit.',rules:'All overrides preserve identical mathematical contracts; source labels/metric justification are supplied by actual native lemmas. Apply extensional predicate substitution at these preserved use sites; unchanged intermediates retain original C0 reasoning.',consumers:uses},null,2)+'\n');
fs.writeFileSync(base+'/source-public-deltas.json',JSON.stringify(deltas,null,2)+'\n');
m.unresolved_changed_interface_gaps=[];m.deferred_owner_work=['Authentic published ownership/check/before receipts and source integration','Native independent reviews/gates for new draft suppliers; none conferred by this reconciliation'];
fs.writeFileSync(base+'/effective-manifest.json',JSON.stringify(m,null,2)+'\n');console.log({total:m.items.length,overrides:m.override_count,retained:m.items.length-m.override_count,downstream_context_carriers:uses.length,downstream_use_sites:uses.flatMap(x=>x.sites).length});
