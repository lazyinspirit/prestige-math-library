from pathlib import Path
import json,re,shutil
p=Path('research/physics-td-qft-rpm-62-2026-10-14-owner-step4-td-round1');run='physics-td-qft-rpm-62-2026-10-14'
g=json.loads((p/'expanded-old-proposed-consumer-scope.json').read_text());g['seeds'].append('post-td-stationary-bath-kernel');g['seeds'].sort()
g['cones']['post-td-stationary-bath-kernel']={m:{'direct':['ex-td-finite-quench-work-fluctuation','pthm-td-finite-crooks','pthm-td-finite-jarzynski'],'all':['ex-td-finite-quench-work-fluctuation','pthm-td-finite-crooks','pthm-td-finite-jarzynski','pthm-td-mean-dissipation']} for m in ['before','proposed']}
g['scientific_review_pending']=False;g['scientific_review_scope']='Focused compatibility with exact proposed deltas, not unrelated whole-item proof recertification';(p/'expanded-old-proposed-consumer-scope.json').write_text(json.dumps(g,indent=2)+'\n')
old=json.loads((p/'released-consumer-dispositions.json').read_text());dis={x['id']:x for x in old['items']}
classifications={}
for n in ['released-classification-and-proposals.json','expanded21-initial-release.json','last11-and-pending-release.json']:
 d=json.loads((p/n).read_text());classifications.update(d.get('classifications',{}));classifications.update(d.get('additional_classifications',{}))
notes={
'pthm-td-fixed-tp-reaction-potential-minimum':'The isolated compound extension must itself be a core closed record with declared mass, endpoint COM data and zero excluded kinetic/external changes; the system record alone does not supply this. Candidate adds exact compound hypotheses without changing the potential bound.',
'ex-td-phase-fraction-lever-rule':'One-mole volumes do not determine arbitrary-amount volumes. Candidate explicitly adopts amount-independent molar volumes V_i=n_i v_i at fixed T,p; lever fractions and feasibility conclusions retained.',
'pthm-td-regular-gibbs-phase-rule':'Bilateral pairwise exchange must hold with all other constituent and auxiliary coordinates fixed to justify pairwise intensive equalities. Candidate supplies this exact qualification; phase dimension unchanged.',
'ex-td-finite-two-state-partition-smooth':'Preserve claimed real analyticity with actual analytic-function, exponential-series, log(1+x), algebra/quotient/composition suppliers and a local proof for positive Z; no weakening to C infinity.',
'ex-td-phase-rule-single-component':'Define open full-coordinate amount neighborhood and shrink the full inverse-chart patch. Fixed-amount 2x2 determinant is the full block determinant. Preserve calculated formal coexistence curve.',
'pthm-td-countable-canonical-identities':'Apply numerical supplier to e=E/(1J), b=(1J)beta and g_i=1; use dimensionless moment envelope and explicit derivative factors. Original counted-once physical identities retained.',
'pthm-td-measurable-canonical-identities':'Apply numerical supplier to measurable e=E/(1J), b=(1J)beta under same dimensionless measure/envelope; chain rule converts mean and variance into joules and joules squared. Relative-entropy formula unchanged.',
'ex-td-reactive-phase-rule-three-component':'Separate dimensionless reaction count q_eq from the volume-per-mole coefficient q; define actual positive T,p/composition/amount neighborhood and its full inverse patch. Reactive dimension and example retained.',
'pthm-td-finite-mode-occupation-and-trace-formulas':'Supply exact diagonal sharp observables with square-weight domains and joint rank-one projection-valued measure; Born probabilities then have a defined interface. Existing partition/occupation formulas and NRQM acceptance qualification retained.',
'ex-td-two-site-no-thermalization':'Prove the broad original pure-eigenstate claim, including degenerate eigenspaces: autonomous evolution preserves rank-one density, whereas finite-T Gibbs state has full rank. Retain explicit ground-state calculation.',
'ex-td-macrocell-and-gibbs-entropy':'Declare zero finite numerical energy map for both microstates. Macrocell and Gibbs entropy contrast unchanged; no physical internal-energy identification inferred.',
'post-td-canonical-sampling':'Preserve counted-once g=1 branch and explicitly declare optional positive dimensionless reference weights g_i with normalized g_i exp(-beta E_i); keep measurable reference-measure branch distinct.',
'ex-td-clapeyron-linear-branches':'State exact prerequisite C1 Gibbs/C2 energy chart; explicitly reconstruct local U by solving s/n and V/n relations, prove C2 with reciprocal/algebra/composition suppliers. Branch slope and latent heat unchanged.',
'rem-td-fluctuation-model-hypotheses':'Use dimensionless numerical time duration tau, with physical duration (1s)tau and physical time (1s)t; original finite-state transfer and empirical qualifications retained.',
'ex-td-biased-memory-reset-bound':'Correct supplier restatement to conditional-memory entropy and specialize via singleton reference R, a=1 and q=p. Existing biased-bit reset bound retained.',
'def-td-macro-versus-micro-entropy-claim':'Citation-only correction after genuine current author PDF retrieval and relevant sections read: Likharev 15May2026 sections1.2 pp5-6 and2.2 pp6-8, equations2.24a/2.29; remove wrong Arovas locator. Definition unchanged.',
'rem-td-local-equilibrium-branch':'Replace arbitrary named equilibrium target with explicit state set, entropy, conserved quantities, retained-constraint sets and constrained argmax criterion, together with supplied selection/attainment. Preserve alternative explicit constitutive criteria and no inferred global equilibrium.',
'def-td-regular-elastic-collision-model':'Declare f units s^3 m^-6, Q units f/s and collision measure units m^9 s^-7; explicit v*,n*,t* normalization matches numerical weak identity on both sides. No operator existence assumed.',
'def-td-driven-finite-path-model':'Retain arbitrary row-stochastic formal path class and add detailed-balanced subclass for single-equilibrium-reservoir heat interpretation, or separately supplied transfer model. Preserve all work identities and fixed-chart qualifications.',
'post-td-fourier-conductivity':'Define sigma_Q=-j dot gradT/T^2=gradT^T K_s gradT/T^2, units W m^-3 K^-1 and skew-form cancellation; physical entropy-balance interpretation requires additional caloric/energy postulates.',
'def-td-rectangular-local-equilibrium-fields':'Keep general optional flux fields; classical divergence exists only where specified component derivatives exist. Consumers using it throughout must supply their required regularity, as current balance and theorem consumers already do.',
'ex-td-diffusive-infinite-propagation':'Correct exact supplier hypotheses in Facts: positive lower bound, bounded uniformly continuous initial temperature and derivatives through order2. Stated Gaussian example satisfies them; Example claim unchanged.',
'pthm-td-controlled-thermodynamic-ensemble-duality':'Choose same free cubes Lambda_L, V_L=L^d and fixed-density particle sequence as actual mathematical limits; do not infer arbitrary-shape limit equality. Preserve full closed-concave endpoint duality and unit conversions.',
'ex-td-nonunique-variational-phases':'Proof-only clarify scalar toy singleton condition is analogous to, and does not instantiate/refute, stationary-law continuum phase uniqueness. Original two-minimizer model retained.',
'ex-td-volume-sized-external-field':'Keep finite partition formulas for V>=0, restrict per-volume log rates to V>0 and assign no rate at V=0. Exact volume-filling energy-shift result retained.',
'ex-td-forbidden-pair-beta-zero':'Declare L,a dimensionless and physical lengths ell_0 L, ell_0 a. Retained exclusion and triangle-area calculation unchanged.',
'post-td-grand-variational-phase-uniqueness':'Explicit parameter branches: positive finite T with beta>0, or formal retained beta=0 with no assigned finite T. Both original variational branches retained.',
'def-td-stable-tempered-continuum-preparation':'Declare exact numerical parameter beta_hat=E0 beta matching H_hat=H/E0, including periodic energy. All general finite-region, stability, tempering and superstable qualifications retained.',
'ex-td-local-equilibrium-profile':'Necessary consumer supplies explicit caloric toy cell with U=C_* (1K)theta, S=C_* logtheta and conserved coordinate theta; retained singleton constraint yields actual argmax and identity q. Original nonconstant static field retained.',
'post-td-stationary-bath-kernel':'Necessary consumer retains stationarity on all formal kernels but explicitly separates it from single-reservoir heat consistency, which requires detailed balance or a separately supplied physical transfer model. Jarzynski generality unchanged.',
'pthm-td-finite-pathwise-first-law':'Facts-only clarification: Q is assigned fixed-stage energy increment, physically heat only on reservoir-consistent subclass or separate model; universal telescoping Statement unchanged.',
'def-td-adiabatic-accessibility':'Actual Q domain mismatch closes at process supplier by defining Q on all P_s, while first-law applicability remains core-only. Accessibility Definition itself requires no source edit.',
}
classifications.update(notes)
false=['lem-tdmath-reference-order','pthm-td-universal-mixing-entropy','pthm-td-differentiable-pressure-concentration','rem-td-transport-branch','pthm-td-interacting-three-ensemble-local-limit']
compat={
'def-td-admissible-van-hove-and-tempered-exterior':'Finite regions, van Hove boundary and exterior definitions already select their separate geometric/tail hypotheses; beta_hat conversion matches finite partitions without claiming generic-shape limits from free cubes.',
'def-td-controlled-fixed-n-energy-shell':'Existing shell explicitly uses numerical H/E0 and e, with physical width E0 delta; exact count and chosen free/periodic shapes remain separate. No change from explicit inverse-energy conversion.',
'def-td-retained-hard-core-zero-beta-preparation':'Existing retained-admissibility beta=0 branch expressly excludes infinite-energy configurations; no positive finite temperature is assigned or needed.',
'ex-td-finite-mode-thermal-ensemble':'Bosonic/fermionic occupation probabilities use the exact diagonal number observable now declared in the supplier; finite-mode Gibbs weights and computed marginals unchanged.',
'ex-td-finite-quench-work-fluctuation':'Its identity kernel is detailed balanced with every positive canonical vector, so physical subclass and formal Jarzynski identity both apply; below-free-energy-work event unchanged.',
'ex-td-infinite-mode-trace-divergence':'Only finite-mode partition products and their divergence are used; added diagonal observables do not assert an infinite-mode trace-class state.',
'ex-td-no-automatic-equilibration':'This explicitly stipulates a two-state counted-once g=1 canonical law and identity dynamics. Optional reference weights add no relaxation assumption or change to its counterexample.',
'ex-td-transport-coefficient-model-input':'Only explicitly prescribed positive temperature, C1 spatial gradient and two Fourier coefficient inputs are used; no use of q or an equilibrium existence claim. Added local cell criterion does not determine coefficients.',
'ex-td-two-particle-hard-core-preparation':'Already declares L and exclusion a dimensionless. Hard-core numerical energies are zero/infinity, beta_hat conversion preserves adopted finite-energy weight and 1/2 positional measure.',
'ex-td-two-site-thermal-ensemble':'Both explicit sites and their composite use counted-once g=1 with additive energies; supplier keeps this exact branch and no degeneracy correction changes product probabilities.',
'post-td-boltzmann-molecular-chaos-model':'Current physical post already declares measurable locally integrable collision representative, all absolutely convergent tests, physical f and Q units. Earlier measure normalization now supplies the exact numerical bridge; no independent existence claim.',
'post-td-canonical-protocol-preparation':'Explicit finite microstate counted-once stage-zero canonical preparation remains g=1. This postulate concerns preparation only and imposes no physical heat interpretation on later kernels.',
'post-td-classical-indistinguishable-particle-measure':'Declared 1/N! dimensionless positional reference measure is unchanged by beta_hat energy conversion and free-cube thermodynamic sequence selection.',
'post-td-equilibrium-ensemble-sampling':'Existing finite canonical/grand laws use physical beta H and retained beta=0 admissibility separately; H/E0 with beta_hat yields identical numerical weights on all finite regions.',
'post-td-local-equilibrium-entropy-density':'Depends only on T and C1 caloric u with c>0; does not use unrestricted flux divergence. Existing local caloric postulate remains an additional condition needed to read Fourier quadratic form as entropy production.',
'pthm-td-collision-h-theorem':'Current proof uses dimensionless tests1 and log(f/f_ref) admitted with absolute integrability and physical Q=f/time; normalized weak identity multiplies both sides by same n*/t*, preserving entropy sign and conservation.',
'pthm-td-controlled-continuum-thermodynamic-limit':'Already chooses Lambda_L free cubes and fixed-density sequence, evaluates mathematical energy at H/E0 and parameter E0 beta; general preparation supplier conversion is consistent and no arbitrary-shape inference added.',
'pthm-td-differentiable-pressure-concentration':'Read exact pressure-limit supplier and bounded finite-range model. Same p_L domain is explicit; no new comparison bridge required or claimed.',
'pthm-td-finite-bath-canonical-error':'Statement explicitly fixes counted-once canonical comparison g=1 and separate bath-shell marginal; optional reference weights in supplier do not alter this bound or supply that marginal.',
'pthm-td-finite-canonical-identities':'Statement explicitly selects finite counted-once law exp(-beta E)/Z. Optional g weights do not alter its selected branch, finite derivatives or Shannon entropy identity.',
'pthm-td-finite-crooks':'Statement already imposes stagewise detailed balance and reciprocal support; therefore it meets the supplier physical subclass without strengthening any work-ratio hypotheses.',
'pthm-td-finite-entropy-maximum':'Explicit q=exp(-beta E)/Z selects counted-once g=1; theorem maximizes Shannon entropy at its mean energy only in that branch, not for arbitrary reference weights.',
'pthm-td-finite-jarzynski':'Uses arbitrary row-stochastic kernels plus stage canonical stationarity. Proposal preserves this entire formal class; proof needs no detailed balance and makes only ensemble work identity.',
'pthm-td-independent-factorization':'Explicit subsystem and composite exp(-beta E)/Z laws select g=1 with product state spaces and additive energies. Added optional weights are not invoked or assumed factorized.',
'pthm-td-interacting-three-ensemble-local-limit':'Exact physical L1 names controlled-shell Proof Step2.1, which constructs shell probability tending to1. Current leaf already states AC,UL,DC,HB and exact numerical beta, energy, delta, shapes; mathematical proof owner preserves these interfaces.',
'pthm-td-lattice-bulk-pressure':'Separate bounded finite-range lattice source model; continuum reference-unit conversion and free-cube duality repair make no claim that continuum/lattice models coincide.',
'pthm-td-mean-dissipation':'Uses Jarzynski formal ensemble work identity, finite Jensen and beta>0 only. Arbitrary stationary kernels remain admissible; no per-path heat or universal entropy claim is introduced.',
'pthm-td-qualified-van-hove-and-exterior-limit':'Already explicitly assumes admissible van Hove geometry and uniform exterior tempering plus boundary supplier; conversion of physical beta H to numerical beta_hat H_hat is exact. Free-cube-only duality has no logical role here.',
'pthm-td-stable-tempered-free-cube-grand-pressure':'Already selects free cubes and mathematical beta_hat=E0 beta; same finite partitions and 1/N! normalization retained.',
'rem-td-ensemble-limit-hypotheses':'Full remark retains moment envelope, fixed finite branch, separate lattice/continuum models, finite trace and choice qualifications; added numerical normalization and sharp observables justify current scope without implying equilibration.',
'rem-td-transport-branch':'Exact previous supplier already defines positive T field and regularity. Its only local-cell mention is prospective, so explicit equilibrium criterion is compatible; transport coefficients remain independent model inputs.',
}
for i in g['union_ids']:
 affected=[s for s in g['seeds'] if i==s or any(i in g['cones'][s][m]['all'] for m in ['before','proposed'])]
 if (p/'proposed'/f'{i}.md').exists():
  evidence=classifications.get(i,'Focused candidate retained from genuine initial release; exact proposed carrier and existing classification give the surgical delta.')
  x={'id':i,'disposition':'proposed-focused-repair','evidence':evidence,'whole_item_reaudit':False}
 elif i in compat:x={'id':i,'disposition':'compatible-no-source-change','evidence':compat[i],'whole_item_reaudit':False}
 elif i in dis:x=dict(dis[i]);x['reused_review']='Genuine initial same-owner compatibility review retained; additional changed suppliers examined only at actual uses.'
 else:raise ValueError('Missing genuine consumer disposition '+i)
 x['affected_suppliers']=affected;dis[i]=x
pages={x['path']:x for x in old['pages']}
for path in g['pages']:
 if path not in pages:
  shutil.copyfile(path,p/'observed-pages'/Path(path).name)
  pages[path]={'path':path,'disposition':'compatible-no-source-change','evidence':'Full current page prose read. Exact finite counted-once/statistical preparation, free-cube versus other boundary, and formal work/physical-transfer scopes remain conditional; no empirical or equilibration conclusion is asserted. Inventory placement is nonlogical.'}
release={'run':run,'owner':'/root/resolve_step4_td','round':1,'scope':'expanded-old-proposed-consumer-scope.json','before_basis':'Exact observed-current frozen source bytes; authentic Stage3 old graph separately retained, no missing historical bytes reconstructed','items':[dis[i] for i in g['union_ids']],'pages':[pages[path] for path in g['pages']],'consumer_review_complete_for_proposals':True,'whole_unaffected_reaudit':False,'source_writes':False,'shared_writes':False,'tests_run':False,'checks_run':False,'hashes_computed':False,'native_receipt':False}
(p/'expanded-released-consumer-dispositions.json').write_text(json.dumps(release,indent=2)+'\n')
proposed=sorted(f.stem for f in (p/'proposed').glob('*.md'));owned=set(classifications)
rows=[]
for line in Path('research/'+run+'-judge.jsonl').read_text().splitlines():
 if not line:continue
 row=json.loads(line)
 if row.get('id') in owned and row.get('keep') is False:rows.append(row)
(p/'actual-judge-rows.json').write_text(json.dumps(rows,indent=2)+'\n')
master={'run':run,'owner':'/root/resolve_step4_td','round':1,'release_status':'complete private scientific classification/proposal/consumer packet; canonical application awaits exact guarded native root handoff','classifications':classifications,'actual_rejected_ids':sorted({r['id'] for r in rows}),'actual_rows':'actual-judge-rows.json','false_positive_ids':false,'supplier_closed_no_consumer_write':['def-td-adiabatic-accessibility'],'proposed_ids':proposed,'changed_interface_seeds':g['seeds'],'consumer_edits':[i for i in proposed if i not in {r['id'] for r in rows}],'proof_or_citation_only_ids':[i for i in proposed if i not in g['seeds']],'consumer_scope':'expanded-old-proposed-consumer-scope.json','consumer_dispositions':'expanded-released-consumer-dispositions.json','before_sources':'observed-current/','before_pages':'observed-pages/','candidates':'proposed/','primary_source_receipt':'primary-source-reading-receipt.json','cross_owner_coordination':{'math_definition_owner':'Owns chosen equal-formal-mass Q/J/encoding and collision numerical operator/test-space interfaces; explicitly reviewed compatible physical product encoding and collision uses.','math_proof_owner':'Owns choice/conditioning/local-tame transfer changes; physical interacting leaf already declares AC/UL/DC/HB and has genuine full source read.'},'source_writes':False,'shared_writes':False,'checks_run':False,'tests_run':False,'hashes_computed':False,'native_receipt':False,'recertification':False,'maximum_review_repair_cycles':2,'root_owns':'Shared metadata/contracts/ledger/stamps/hashes/certificates/native gate intake and transitions'}
(p/'final-released-classification-and-proposals.json').write_text(json.dumps(master,indent=2)+'\n')
print('Released private candidates',len(proposed),'actual rejected IDs',len(master['actual_rejected_ids']),'changed-interface seeds',len(g['seeds']),'focused consumers',len(dis),'pages',len(pages))
