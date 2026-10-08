import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const run = 'frontier-43-complex-representation-15';
const dir = `research/${run}-step8-owner-d`;
const canonical = v => Array.isArray(v) ? `[${v.map(canonical).join(',')}]` : v && typeof v === 'object' ? `{${Object.keys(v).sort().map(k => `${JSON.stringify(k)}:${canonical(v[k])}`).join(',')}}` : JSON.stringify(v);
const sha = v => createHash('sha256').update(v).digest('hex');
const read = p => readFileSync(p, 'utf8');
const json = p => JSON.parse(read(p));
const plan = json('research/plan-spec.json');
const pages = new Map(plan.pages.map(p => [p.id, p]));
const decisionsPath = `research/${run}-alpha-d-scope-decisions.json`;
const native = json(decisionsPath);
const specs = {
  '320abd48': {
    destination: 'owner-decision',
    reason: 'The compact-surface L2 norm on holomorphic differentials, its dual flat metric on Jac(X), and its pullback to X are retained as an explicit deferred obligation with no approved in-run destination. The bounded-domain Bergman pair constructs the Hessian of log K for A2 domains in C^m, not this compact-surface/Jacobian metric; no hyperbolic comparison is claimed or added.',
    resolution: 'Keep the compact-surface/Jacobian construction deferred; remove the unsupported bounded-domain placement and hyperbolic-comparison assertion. No approved claim requires this extra construction.',
    uses: [['def-bergman-metric-bounded-domain', 'Statement: bounded connected domain in C^m and Hessian of log K'], ['thm-riemann-bilinear-relations', 'Proof 2.1/5.1: local positive area density used for bilinear positivity, not construction of a Jacobian metric']],
    source: 'McMullen Ch.15, Bergman metric remark, printed p.130; full remark at extraction lines 7048–7063.'
  },
  '38aa5d24': {
    reason: 'The pair delivers the disc, ball and polydisc kernels and also the upper-half-plane kernel by Mobius transport. The annulus formula (1.3), including the Laurent monomial of exponent -1 with logarithmic norm, is outside the approved model computations and is not consumed by this pair.',
    resolution: 'The annulus exclusion stands with a corrected model inventory, explicitly preserving the already-delivered half-plane computation.',
    uses: [['ex-half-plane-bergman-kernel-by-mobius-transport', 'Example and Verification 3.1–4.1: K_H(z,w)=-1/(pi(z-conj(w))^2) and positive diagonal']],
    source: 'Blocki §1, annulus example (1.3), printed pp.3–4; complete computation at extraction lines 247–305.'
  },
  '52086856': {
    reason: 'Forster20.6 gives the unique de Rham harmonic one-form representing integration over a closed curve against all closed smooth one-forms. This alternate route is outside the approved Abel proof. The current dbar solvability lemma uses the in-run Dolbeault integration duality with holomorphic differentials; the distinct de Rham curve-functional result is neither asserted as that supplier interface nor counted as delivered.',
    resolution: 'Exclude the unused de Rham curve-functional corollary and remove the unsupported claim that the Dolbeault Hodge interface subsumes it.',
    uses: [['thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology', 'Statement 3 and Proof 4.1: H^{0,1}(X,E) paired with H^0(X,K tensor E*)'], ['lem-dbar-solvability-criterion-for-a-smooth-zero-one-form', 'Statement equivalence 1–3 and Proof 2.1: trivial-bundle Dolbeault duality supplies solvability']],
    source: 'Forster §20.6, printed p.163; complete corollary/proof at extraction lines 9581–9616.'
  },
  '853b8b85': {
    reason: 'Theorem1.6 convergence of kernels, metrics and curvatures under increasing domain exhaustion is outside the approved inventory and is not used. The monomial-completeness proof does use inner dilates t_n Omega increasing to Omega to pass monomial moments by dominated convergence; this local integral exhaustion is retained and does not invoke kernel-domain convergence.',
    resolution: 'Exclude the kernel/metric/curvature convergence theorem while acknowledging and preserving the actual moment exhaustion.',
    uses: [['lem-monomial-bases-of-bergman-spaces-of-disc-ball-and-polydisc', 'Proof 1.3/2.1: inner dilates; Proof 3.1–4.1: t_n=1-1/(n+2), dominated convergence for moments and vanishing Taylor coefficients']],
    source: 'Blocki §1, Theorem1.6, printed p.7; complete theorem/proof at extraction lines 645–728.'
  },
  'c705a92f': {
    reason: 'This grouped source heading has a partial-delivery boundary: normalized a-period basis and period matrix, symmetry and positive imaginary part (Theorems15.18–15.19) are delivered by thm-riemann-bilinear-relations, and degree-g symmetric-product surjectivity is delivered by thm-jacobi-inversion. The exclusion applies only to the further general W_k/projective-fiber geometry, genus-two blow-up description, exponential-sequence/cohomological route, Sp2g moduli action, non-Jacobian examples, and theta-function/divisor theory. Those additional constructions are outside the approved pair.',
    mapping: 'Retained within this grouped harvest: thm-riemann-bilinear-relations Statement1–4 and Proof3.1–6.1 supply normalized basis, symmetric period matrix, Im Pi>0 and lattice; thm-jacobi-inversion Statement final paragraph and Proof4.1–5.1 supply degree-g product and permutation-quotient surjectivity. def-picard-group-of-divisor-classes-and-pic-zero gives the all-degree divisor/line-bundle identification, and thm-abels-theorem-for-divisors plus thm-jacobi-inversion give Pic0/Jacobian identification; none is counted as a new delivery of the exponential-sequence proof or general projective fibers.',
    resolution: 'Preserve the grouped harvest identity but delimit its excluded remainder, and record exact existing deliveries in proof_mapping. No duplicate normalized-period or Picard result is created.',
    uses: [['thm-riemann-bilinear-relations', 'Statement1–4; Proof3.1–6.1'], ['thm-jacobi-inversion', 'Statement final paragraph; Proof4.1–5.1'], ['thm-abels-theorem-for-divisors', 'Statement: kernel on degree-zero divisors is exactly principal divisors'], ['def-picard-group-of-divisor-classes-and-pic-zero', 'Statement all-degree canonical group isomorphism; Proof2.2–4.1']],
    source: 'McMullen Ch.15, Natural subvarieties / Jacobian and X^(g), pp.138–139; exponential sequence pp.139–140; Siegel upper half-space and Theorems15.18–15.19 pp.140–141; non-Jacobian pp.141–142; theta functions pp.143ff. Relevant source blocks re-read from extraction lines 7574–7945.'
  },
  'ce1cce72': {
    destination: 'owner-decision',
    reason: 'The all-degree divisor-class/holomorphic-line-bundle Picard identification is already delivered by def-picard-group-of-divisor-classes-and-pic-zero, not only its degree-zero part. The remaining theorem identifying fibers of X^(d)->Pic^d(X) with projective complete linear systems is explicitly deferred with no approved in-run destination. Batch10 constructs a map from X into a projective section-space dual and large-degree embeddings; those are not the symmetric-product/Picard fiber theorem.',
    mapping: 'Delivered part: def-picard-group-of-divisor-classes-and-pic-zero Statement and Proof2.2–4.1 prove the canonical group isomorphism [D]->[O(D)] in every degree, including injectivity and arbitrary-line-bundle surjectivity. Deferred part: the nonempty effective-divisor fiber over [D] is |D|, a projective space of dimension h0(D)-1; no in-run fiber theorem is asserted.',
    resolution: 'Retain the richer all-degree Picard delivery and place only the absent symmetric-product/projective-fiber theorem in an explicit owner-held future-placement deferral. Remove the false batch10 destination.',
    uses: [['def-picard-group-of-divisor-classes-and-pic-zero', 'Statement canonical all-degree group isomorphism; Proof2.2–4.1'], ['thm-linear-system-map-to-projective-space-is-well-defined', 'Statement X->P(V*) and |V| definition; no symmetric-product/Picard fiber theorem'], ['thm-projective-embedding-compact-riemann-surface', 'Statement deg D>=2g+1; no symmetric-product/Picard fiber theorem']],
    source: 'McMullen Ch.15, Linear systems as fibers, printed p.133; complete paragraph at extraction lines 7264–7282; Theorem15.16 repeats the fiber assertion on printed p.138.'
  },
  'cffac4c1': {
    reason: 'The canonical/Gauss-map identification of Theorem15.6 is outside the approved inventory. The existing Abel-Jacobi embedding proof uses evaluation of holomorphic differentials to establish immersion, without asserting a Gauss-map identification. Batch10 proves projective embedding for deg D>=2g+1; it does not supply a canonical embedding, whose divisor has degree2g-2 and whose map is not generally an embedding.',
    resolution: 'The optional Gauss-map result remains excluded. Remove the unsupported canonical-embedding assignment; preserve the existing Abel-Jacobi immersion and high-degree projective embedding claims.',
    uses: [['thm-abel-jacobi-embedding-positive-genus', 'Statement2 and Proof1.2: nonzero evaluation derivative; no Gauss-map theorem'], ['thm-projective-embedding-compact-riemann-surface', 'Statement deg D>=2g+1; Proof1.1 computes deg K=2g-2']],
    source: 'McMullen Ch.15, derivative calculation and Theorem15.6, printed p.130; complete passage at extraction lines 6990–7004.'
  }
};

function contextHash(pageId, destination) {
  const page = pages.get(pageId);
  const seen = new Set();
  const visit = id => { if (seen.has(id)) return; seen.add(id); for (const d of pages.get(id)?.requires ?? []) visit(String(d)); };
  visit(pageId);
  const context = { page: { id: pageId, order: page.order, kind: page.kind, category: page.category, title: page.title, requires: [...(page.requires ?? [])].map(String).sort(), closure: [...seen].sort().filter(id => id !== pageId).map(id => { const d=pages.get(id); return {id,order:d?.order,kind:d?.kind,category:d?.category,title:d?.title,requires:[...(d?.requires??[])].map(String).sort(),items:(d?.items??[]).map(i=>String(typeof i==='string'?i:i?.id??'')).filter(Boolean).sort()}; }) } };
  let state = {kind:'none'};
  if (destination === 'owner-decision') state={kind:'owner-decision'};
  else if (destination && pages.has(destination)) { const d=pages.get(destination);state={kind:'page',id:destination,order:d.order,category:d.category,title:d.title,requires:[...(d.requires??[])].map(String).sort(),items:(d.items??[]).map(i=>String(typeof i==='string'?i:i?.id??'')).filter(Boolean).sort()}; }
  return sha(canonical({...context,destination:state}));
}

const replacements = [];
for (const before of native.decisions.filter(r=>r.decision==='owner-decision')) {
  const spec = specs[before.decline_id.slice(0,8)];
  if (!spec) throw Error(`Unassigned owner row ${before.decline_id}`);
  const file = `research/${run}-batch-${before.batch}.coverage.json`;
  const coverage = json(file);
  let found;
  coverage.pages.forEach((p,pi)=>p.sources?.forEach((s,si)=>s.contents?.forEach((r,ci)=>{ if(p.page===before.page&&s.url===before.source_url&&r.name===before.name) { if(found) throw Error('duplicate'); found={row:r,path:`/pages/${pi}/sources/${si}/contents/${ci}`,source:s}; }})));
  if (!found || sha(canonical(found.row))!==before.row_sha256 || contextHash(before.page,before.destination)!==before.context_sha256) throw Error(`Stale before guard ${before.decline_id}`);
  const after = structuredClone(found.row);
  after.reason=spec.reason;
  if ('destination' in spec) after.destination=spec.destination;
  if (spec.mapping) after.proof_mapping=spec.mapping;
  const decisionAfter={...before,destination:after.destination??null,reason:after.reason,row_sha256:sha(canonical(after)),context_sha256:contextHash(before.page,after.destination??null),decision:'stands',evidence:`Historical Step-8 reviewer evidence (retained verbatim): ${before.evidence}\n\nCurrent delegated owner resolution: ${spec.resolution} Exact current interfaces: ${spec.uses.map(([id,loc])=>`${id}: ${loc}`).join('; ')}. Source check: ${spec.source} No content, prerequisite, page, order or approved-scope change is proposed. The stands decision approves this corrected exclusion/explicit deferral; an owner-decision destination remains a future-placement marker and does not claim delivered content.`};
  replacements.push({decline_id:before.decline_id,coverage_file:file,coverage_file_before_sha256:sha(read(file)),coverage_json_pointer:found.path,coverage_row_before_sha256:sha(canonical(found.row)),coverage_row_before:found.row,coverage_row_after:after,coverage_row_after_sha256:sha(canonical(after)),decision_before:before,decision_after:decisionAfter,owner_resolution:{status:'resolved-within-approved-scope',reason:spec.resolution,deferred_obligation:after.disposition==='deferred',destination_claim:after.destination??null},source_guard:{url:before.source_url,title:found.source.title,locator:found.source.locator,source_record_without_contents_sha256:sha(canonical(Object.fromEntries(Object.entries(found.source).filter(([k])=>k!=='contents'))))},current_interface_guards:spec.uses.map(([id,locator])=>({item:id,path:`items/${id}.md`,sha256:sha(read(`items/${id}.md`)),locator}))});
}
if (replacements.length!==7) throw Error('Expected seven owner rows');
const proposed=structuredClone(native);
proposed.decisions=proposed.decisions.map(r=>replacements.find(x=>x.decline_id===r.decline_id)?.decision_after??r);
const output={version:1,run,group:'d',proposal_only:true,authority:'Delegated routine owner choices within approved 15 pairs; no content/scope expansion',native_decisions_path:decisionsPath,native_decisions_before_sha256:sha(read(decisionsPath)),canonical_plan_guard:{path:'research/plan-spec.json',sha256:sha(read('research/plan-spec.json')),purpose:'Read-only contextHash input; refresh after all writers drain'},preservation:{native_before_rows_and_hashes:'Retained exactly in every decision_before; immutable report and original delta untouched',unchanged_decision_rows:native.decisions.length-replacements.length,changed_items:[],changed_pages:[],canonical_or_engine_writes:[]},replacements,source_read_guards:[['/tmp/src/mcmullen.txt','/tmp/src/mcmullen.pdf'],['/tmp/src/forster.txt','/tmp/src/forster.pdf'],['/tmp/blocki.txt','/tmp/blocki.pdf']].map(([text,pdf])=>({text,sha256:sha(readFileSync(text)),pdf,pdf_sha256:sha(readFileSync(pdf)),reading:'Existing full-original-source extraction re-read at complete relevant result/argument passages; not a new fetch claim'})),integration:'Apply each exact JSON-pointer replacement only if its row equals coverage_row_before and guards still hold. Whole-file hashes are baseline context only because group a legitimately edits disjoint batch11 rows. Recompute current scope context/row hashes at lead drain, merge only these seven replacement decisions, preserve all other native decision rows and report attribution.'};
writeFileSync(`${dir}/proposal.json`,JSON.stringify(output,null,2)+'\n');
writeFileSync(`${dir}/proposed-alpha-d-scope-decisions.json`,JSON.stringify(proposed,null,2)+'\n');
console.log(JSON.stringify({replacements:replacements.length,preserved_stands:output.preservation.unchanged_decision_rows,private_directory:dir}));
