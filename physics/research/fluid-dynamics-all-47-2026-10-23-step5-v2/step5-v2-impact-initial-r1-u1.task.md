# Step 5 repair: impact-initial, round 1, unit 1

Read briefs/step5-owner-repair.md.

Frozen inputs: /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/impact-initial-1.json.



Write only your assigned frontier item files, their necessary owning contracts/metadata, and /home/lazyinspirit/Projects/prestige-math-library/physics/research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-impact-initial-r1-u1.json.

Do not rewrite other reports, certificates, workflow code, or baselines. Do not launch judges.

SCOPE: repair only assigned draft frontier items. Published repairs have no item gate, rejudge or adjudication obligation; record their findings separately. Outside consumers are handled by consumer maintenance. Record affected uses without turning them into frontier blockers.

You may create, fully author, and register a new item only to meet a genuine unsatisfied prerequisite of an assigned repair; explain its exact consuming proof step. No unrelated additions.

Optional supporting_evidence is reserved for {"research/path/to/file": "64-character SHA-256 of exact file bytes"}. Put narrative evidence, check summaries and repair explanations in repair_notes, not supporting_evidence. Do not use invented paths or hashes.

Use logical validity as ground truth. State uncertainty honestly. Consult authoritative sources when uncertain and check for errors in sources.

Make repairs mathematically sound and cite dependencies accurately. State important caveats when appropriate; write concisely without compromising correctness or completeness; do not repeat arguments or add unnecessary filler.

Repair confirmed defects fully. Only a public-interface change triggers direct-consumer examination: Statement/Definition for mathematics; also Postulate, experimental setup/procedure/observations/uncertainty/interpretation, physical_scope, or empirical qualifications for physics, whether the supplier is published or not. Compare sections directly. Proof-only, citation, dependency and metadata changes with unchanged statements do not propagate. Identify direct consumers and exact affected uses; never pre-expand through unchanged consumer statements.

Examine assigned frontier consumers, not the whole library. Assignment requires examination, not an edit. Leave a sound consumer byte-for-byte unchanged with an item-specific explanation. Repair only an actual logical defect using the smallest sufficient edit; no stylistic or unrelated rewriting. Work supplier-before-consumer and reconcile only metadata actually invalidated. A reference is not automatic repair authority. Report direct downstream effects of statement changes, including outside consumers for separate maintenance.

Return JSON {run:"fluid-dynamics-all-47-2026-10-23",phase:"impact-initial",round:1,unit:"1",input_sha256:"e50da23ea408c0c0988f528f39e094774de414c879841af6bbbef7003dea4af8",decisions:[],reviews:[],created_items:[],downstream:[]}. Copy these exact identity values; a phase such as impact-repeat is not repeat. Each decision includes id,model,context_sha256,outcome,reason,uncertain:false,source_urls:[...],familiar:boolean. Each review includes id,disposition:"repaired"|"unaffected"|"authored",post_sha256,review_context_sha256,reason,uncertain:false,source_urls,familiar. Disposition describes the item carrier: if its itemHashGuard is unchanged from the assignment before hash, use unaffected even when you repaired a contract or page; retain those metadata repairs explicitly in the reason and metadata_repair_only:true. Never claim an item repair without an item change. All assigned and created items require a review; only a newly created item uses authored. Each created_items row includes id,kind,home_page,batch,consumers:[direct consumer IDs],reason,uncertain:false,source_urls,familiar. Reasons must explain actual logical checks (at least 40 characters). familiar:false requires authoritative source URLs actually consulted; never switch it to true merely to pass validation. Unresolved uncertainty blocks completion.

Immediately after completing each mathematical review, before editing another supplier, run node tools/physics-support/step5-workflow.mjs review-contexts --run fluid-dynamics-all-47-2026-10-23 --items ID and copy its post_sha256 and review_context_sha256 into that review. You may batch ids reviewed on the same stable state. Never recompute an old review's context after a supplier edit without actually reviewing its effects again. The controller will schedule unresolved effects before certification.





All three owner lanes run in parallel with disjoint item ownership. Follow the shared metadata lock protocol before necessary shared edits; reread under lock and release promptly. Reconcile assigned frontier ledger evidence, preserve outside findings as separate maintenance proposals, and never turn them into frontier repair or gate obligations. Do not write judge verdicts or shared adjudication JSONL. Record unresolved in-scope obligations honestly.



Adjudicator ledger proposals requiring reconciliation:
[
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-fdmath-negative-bulk-residual",
    "action": "record_false_positive",
    "phase": "initial",
    "round": 1,
    "model": "gpt-6-luna",
    "context_sha256": "ec886878bfbb412350197c629353505f36033605b6244b317e53e63253e46df5",
    "reason": "The rejection misclassifies lem-fd-newtonian-admissibility: it is a mathematics lemma, not a physics item. Its Statement defines tau=2mu D+lambda(tr D)I and q=-Kg and gives an algebraic identity for Q; the Gibbs interpretation is explicitly conditional, not an empirical premise. Its proof contracts D=D0+(tr D)I/3 and eliminates the skew part of K. The example itself defines that same quadratic form, so with D=(theta/3)I, tr D=theta, D0=0, g=0 and K=I, direct substitution gives Q=zeta theta^2/T<0. Also sym K=I and x^T x is nonnegative. Countable choice is an explicitly retained assumption; no choice is needed for this finite calculation. No physical hypothesis is used to establish the example.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "id": "def-fd-incompressible-newtonian-model",
        "severity": "nonfatal",
        "status": "fixed",
        "finding": "Inherited inertial frame omitted from the local Definition wording.",
        "resolution": "Confirmed nonfatal explicitness defect: the Definition did not identify its coordinate fields with a defined inertial chart. Both declared physical suppliers already require a Cartesian inertial frame, so the premise is inherited and the alleged fatal omission is overstated. The repair spells out the inherited affine-isometry/constant-velocity chart, fixes all derivatives in it, and records that scope; all equations, domains, regularity and parameter ranges are preserved."
      },
      {
        "id": "def-fd-incompressible-newtonian-model",
        "severity": "nonfatal",
        "status": "fixed",
        "finding": "Owning contract excerpt cited energy/entropy rather than mechanical momentum and dismissed the explicitly asserted equivalence as lacking a biconditional.",
        "resolution": "Replaced only the assigned subject supplier excerpt with exact inertial-chart linear/angular momentum balances, refreshed exact boundary excerpts, and verified both directions of the stress-divergence identity including zero viscosity."
      },
      {
        "id": "pthm-fd-newtonian-kinetic-decay",
        "status": "proposed_owner_followup",
        "finding": "Preexisting Step-4 concern reproduced at current Proof 2.1: bounded-domain divergence integration and differentiation under the integral have no declared supplier; the model definition alone supplies neither.",
        "resolution": "Refer to ordinary frontier owner for independent disposition and sufficient local proof or exact integration suppliers with inherited hypotheses. Not caused by the present frame-interface clarification."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_record",
    "id": "ex-fd-x06-application",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Definition-only F2 citation overstated what its supplier establishes. The exact indexed axiom and explicit inherited assumption now replace that attribution; force, dimensionless ratio and physical qualifications remain unchanged. Controller adoption is required; no shared ledger was edited.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u13.json"
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fd-bingham-monotone-graph",
    "model": "gpt-6-luna",
    "context_sha256": "794cbe92179649cc38b3870e1a543cc3e966ed455b4c265db194bea496f3fe97",
    "status": "false_positive",
    "severity": null,
    "reason": "The actual supplier def-fd-nonnewtonian-laws has domain mathematics and explicitly defines a graph on symmetric trace-free matrices without empirical adoption. Direct checks give convexity of the norm potential, its singleton subgradient at D!=0 and closed-ball subgradient at zero, monotonicity by adding the two supporting inequalities, nonnegative contraction, and orthogonal equivariance. No physics premise occurs.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fd-conformation-storage",
    "model": "gpt-6-luna",
    "context_sha256": "0643989073d250ac0ad7c41fed57c18754b467dd379b6468d734067da25672b1",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "F10 originally cited transformation conclusions requiring a C2 motion, absent from the C1 trajectory hypotheses. This is a nonfatal supplier-applicability/citation defect: the required covariance follows by routine chain/product differentiation from the stated L* and C*, with no missing existence theorem or strengthened hypothesis. Step 1.2 now performs that calculation, including transformed velocity and skew observer spin. The separate uncited FTC use in step 4.1 is replaced by the declared mean value theorem applied to v^T Y(t)v.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fd-generalized-newtonian-dissipation",
    "model": "gpt-6-luna",
    "context_sha256": "78f568dcfcf69aab5db932a1b28ce080b863c266567fede65918ac04a43dec6b",
    "status": "false_positive",
    "severity": null,
    "reason": "Step 1.3 uses delta=rho^(1/n) to prove the intermediate scalar limit gamma^n -> 0, not to assert |tau|<rho for that same tolerance. The exact identity |tau|=sqrt(2)m gamma^n then proves the zero stress limit for fixed m>0. Explicitly, for stress tolerance e>0, set rho=e/(sqrt(2)m) and require |D|<(e/(sqrt(2)m))^(1/n)/sqrt(2). The existing proof is valid; no edit is warranted.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fd-conformation-storage",
    "finding": "Step-4 digest concern: undeclared fundamental-theorem application in proof 4.1.",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "The integral reconstruction is unnecessary for the claimed positivity. The repaired step applies the explicitly declared existing mean value theorem to f_v(t)=v^T Y(t)v and its positive derivative. No uncited FTC invocation remains.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "proposed_updates": [],
    "reason": "No assigned supplier public interface changed and no published carrier was edited. No new potentially defective published consumer was discovered in this scoped review; existing maintenance history remains untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "def-fd-adopted-nonnewtonian-models",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "logic",
    "reason": "The generalized Newtonian and Bingham branches define but do not impose incompressibility. The permitted motion chi(t,a)=exp(alpha*t)*a induces u=alpha*x and D=alpha*I_3; for eta=eta_*>0, tr(tau)=6*eta_*alpha is nonzero, contradicting the declared deviatoric stress. The mathematical supplier defines the Bingham graph only on Sym_0(3). Repaired by requiring div(u)=0 throughout the swept region and explicitly adopting tau in the graph on Sym_0(3)."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "def-fd-adopted-nonnewtonian-models",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Corrected the Reddy source equation/section distinction and missing PDF page 27, verified against the actual linked chapter."
  },
  {
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "id": "def-fd-adopted-nonnewtonian-models",
    "status": "no-update-required",
    "reason": "The only direct item consumer is draft pthm-fd-nonnewtonian-conditional-admissibility; no published or outside-frontier consumer was found. Record the exact focused use check without claiming a published-item audit."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "pthm-fd-nonnewtonian-conditional-admissibility",
    "status": "refer_unassigned_owner",
    "severity": "nonfatal",
    "reason": "The label identifies equation (6.5.15) as a section and omits PDF page 27, which contains both Carreau and Bingham sections. Citation-only correction to equation (6.5.15), §§6.6.1–6.6.2.3, PDF pp. 25–27 (printed pp. 245–247). Mathematical statement and proof need no change for this locator issue."
  },
  {
    "ledger": "canonical-defect-ledger",
    "path": "research/defect-ledger.jsonl",
    "id": "ex-fd-bingham-rest-stress",
    "status": "refer_unassigned_owner",
    "severity": "nonfatal",
    "reason": "The cited Bingham section is on PDF page 27, printed page 247. Change only the citation page locator to PDF p. 27 (printed p. 247); no graph, witness or verification change is required for this locator issue."
  },
  {
    "subject": "def-fd-projected-no-slip-stokes-space",
    "ledger": "canonical-defect-ledger",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed nonfatal citation/proof omission: F4 defines the inner-product axioms, not the Sobolev pairing. Proof 1.1 now proves integrability and representative independence, linearity of weak differentiation, bilinearity, symmetry, definiteness and exact norm equality before finite-product completeness and closed-kernel arguments. The original Definition is byte-unchanged.",
    "id": "def-fd-projected-no-slip-stokes-space",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "post_sha256": "a2f9b7c376456886638f6ba8fbb2663ed80d35a7b9b98284f3d954cc9d6e1720"
  },
  {
    "subject": "lem-fd-periodic-fourier-embedding-products",
    "ledger": "canonical-defect-ledger",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "F2 incorrectly attributed Countable Choice to coefficient completion. Corrected F2 and its owning choice-boundary record to restrict this assumption to the normalized-measure/integral/L2 realization. Checked shell summability, uniform derivative convergence, weighted finite-convolution inequality and completion/product agreement. Statement and thresholds are unchanged.",
    "id": "lem-fd-periodic-fourier-embedding-products",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "post_sha256": "d9f00f9e6e58817280744a3dcd11d70c30819b82647c194a2f90a75beadcc066"
  },
  {
    "subject": "lem-fd-zero-trace-directional-poincare",
    "ledger": "canonical-defect-ledger",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed nonfatal supplier-scope omission: the no-slip Definition covers only nonempty domains. Preserved the entire Statement including empty Omega; added the existing scalar Sobolev supplier, whose Definition explicitly gives the empty zero space, and proved this branch directly before invoking the nonempty vector supplier. Zero extension, the twice-integrated 2R estimate and H1-closure passage remain valid. Manifest dependency and contract updated under lock.",
    "id": "lem-fd-zero-trace-directional-poincare",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "post_sha256": "ce8943fd24a71c6cc2ce4001976b1a0ed33cba4e7d6b85474b5588bbb31640d5"
  },
  {
    "subject": "thm-fd-periodic-pressure-recovery",
    "ledger": "canonical-defect-ledger",
    "proposed_status": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed nonfatal title overstatement: finite s>d/2+1 supplies C1, not Cinfinity. Renamed the title to periodic incompressible Sobolev velocity in carrier and manifest. The full Statement and proof are unchanged. Checked products in Hs and H(s-1), the negative Q sign, periodic product rule and uniqueness from zero Fourier coefficients using smooth-test convergence. No smoothness strengthening or hypothesis restriction was introduced.",
    "id": "thm-fd-periodic-pressure-recovery",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "post_sha256": "96a4577c0e4b8dc4881bae5597bdf176acbd0a02e5076e7b46a8d4adb8b8a11f"
  },
  {
    "subject": "thm-fd-rectangular-no-slip-stokes-velocity-pressure",
    "ledger": "canonical-defect-ledger",
    "proposed_status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "Confirmed essential dependency-interface gap: fixed-support test continuity alone does not license a support-independent H1 bound or identify the recursive witness used by old proof 3.1. The supplier proof does contain the recursion, but its public Statement does not expose it. Repaired entirely inside this assigned theorem: 2.1 explicitly constructs and verifies the inverse; 4.1 proves its uniform H1 bound by primitive, marginal and tensor-product estimates, then extends pressure to H01 dual; 5.1 proves the equation, constant ambiguity, linearity and the inherited H1 product bound using the explicit Poincare dependency. No stronger claim is attributed to the unassigned supplier. Statement unchanged.",
    "id": "thm-fd-rectangular-no-slip-stokes-velocity-pressure",
    "path": "research/defect-ledger.jsonl",
    "uncertain": false,
    "post_sha256": "a43fa8d3c4fc3f203bf6e347fb4ada130c9cb72c001885101445769373cd642b"
  },
  {
    "id": "thm-sobolev-spaces-are-banach-spaces",
    "ledger": "published-consumer-supplier-ledger",
    "path": "research/published-consumer-supplier-ledger.md",
    "proposed_status": "retain-open-mathematics-owner-maintenance",
    "severity": "nonfatal",
    "reason": "Reconfirmed the already recorded inline-link presentation defect in the imported theorem Statement. The exact mathematical completeness interface, including full AC and empty-domain scope, remains adequate for the assigned no-slip-space proof. Retain the existing OPEN mathematics-owner editorial maintenance record; imports and originals are read-only. No Step5 adjudication or gate obligation is added.",
    "location": "items/thm-sobolev-spaces-are-banach-spaces.md, Statement",
    "affected_use": "def-fd-projected-no-slip-stokes-space proof 1.1 invokes complete scalar W1,2 under full AC before finite-product and closed-subspace completeness.",
    "invalidated_claim": "No mathematical claim is invalidated; only the uninterrupted-Statement presentation rule fails.",
    "minimality": "Move the retained supplier wikilink after the complete Statement into Statement references; preserve all hypotheses and mathematical text. Outside mathematics-owner maintenance only.",
    "existing_record": "research/published-consumer-supplier-ledger.md:1978",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-fd-flat-channel-domains",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "The Definition uses u=0 and u=g without declaring either map. Added continuous steady u on the channel closure and g on its two faces, with trace by restriction and continuous time-first analogues. Geometry, periodic differentiation, smoothness and absence of far-field conditions are preserved; arbitrary-data solution existence is not asserted.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-fd-smooth-wall-exterior-solution-domains",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "The prescribed-wall equality contains an undeclared g. Defined continuous g:[0,T]×boundary→R3 and the time-dependent trace by restriction, with compatibility required when it equals a classical C1_t C2_x field. The bounded/exterior regularity and cutoff decay remain unchanged; no arbitrary-data extension or existence is claimed.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "def-fd-polytropic-symmetric-variables",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "The point state q∈R^(d+1) was differentiated and integrated without a field declaration. Added C1 positive density and velocity maps on an open spacetime cylinder or periodic torus, endpoint conventions, integrable spatial coefficient inputs and the distinction from completed coefficient coordinates. A_j is explicitly linear on all real states for Galerkin approximations; the density inverse remains restricted to r>0.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "ex-fd-couette-vorticity",
    "proposed_status": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "F1 wrongly calls both quotient directions streamwise. Corrected it to periodic x,z, with x streamwise and z transverse for this x-directed shear. Direct substitution still gives zero divergence/convection and Laplacian, curl (0,0,-V/h), flux Vh/2, and uniqueness in the stated C2 shear class by the affine endpoint argument. The complete Example and proof steps are unchanged.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-fd-smooth-polytropic-euler-ivp",
    "proposed_status": "fixed",
    "outcome": "confirmed_fatal",
    "reason": "Original 4.1 treats nested subsequence choices as independent Countable Choice, which does not license that recursion. Repaired the missing selection argument by a unique dyadic scalar extraction (1.4), an explicit tuple enumeration and nested index-map recursion with a strictly increasing diagonal (4.1), and finite-grid uniform convergence (5.1). Countable Choice remains only for the analytic suppliers. The Galerkin energy/continuation, high-norm tails, integral passage, positive inverse and difference-energy uniqueness still prove the complete unchanged Statement.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "id": "thm-fd-smooth-periodic-incompressible-ivp",
    "proposed_status": "open",
    "route": "frontier-owner-discovery",
    "reason": "5.1 says repeated scalar extraction is licensed as a diagonal by A1 solely because the mode/rational-time set is countable. Those nested unspecified subsequences depend on preceding choices.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json",
    "original_judge_tuple": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "proposed_action": "record_scoped_no_published_defect",
    "subjects": [
      "def-fd-flat-channel-domains",
      "def-fd-smooth-wall-exterior-solution-domains",
      "def-fd-polytropic-symmetric-variables",
      "ex-fd-couette-vorticity",
      "thm-fd-smooth-polytropic-euler-ivp"
    ],
    "reason": "All assigned carriers and direct consumers of the three changed Definitions are draft frontier items. No published carrier was changed, and no defective use in a published supplier/consumer was discovered in these focused checks. Imported mathematics remained read-only.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u18.json"
  },
  {
    "id": "lem-fd-torus-mean-zero-poincare",
    "status": "fixed",
    "classification": "dependency_citation",
    "reason": "F2 attributed the derivative-coefficient formula to a Parseval statement that contains only Fourier isometry/completeness. New step 1.2 derives it by smooth periodic integration by parts; Parseval then gives both norm sums and the sharp constant one. The original Statement is unchanged.",
    "route": "canonical-defect-ledger"
  },
  {
    "id": "ex-fd-acoustic-energy-mode",
    "status": "fixed",
    "classification": "presentation",
    "reason": "For W nonzero the displayed solution contains a stationary transverse zero mode in addition to the longitudinal acoustic pair. Corrected the title to say so, retaining all A,B,W cases. Direct amplitude differentiation and normalized sine/cosine integrals verify the complete solution and conserved weighted energy.",
    "route": "canonical-defect-ledger"
  },
  {
    "id": "thm-fd-periodic-smooth-stability",
    "status": "fixed",
    "classification": "logic",
    "reason": "The old step 1.1 proved only finite bounds for each fixed viscosity, not the stated uniform family bound. The repaired step derives the Hm transport energy inequality using the exact tame-commutator supplier, discards nonpositive viscous dissipation, and integrates Hs and higher-order inequalities on a common viscosity-independent interval. All difference and interpolation estimates remain valid; Statement unchanged.",
    "route": "canonical-defect-ledger"
  },
  {
    "id": "thm-fd-smooth-sobolev-continuation",
    "status": "fixed",
    "classification": "dependency_citation",
    "reason": "The original proof used quantitative restart and r-change estimates absent from the public IVP statements. Replaced this dependency-citation gap with a local endpoint argument: tame high-order energy bounds, time-Lipschitz convergence in every complete Hm, positive smooth endpoint density, local existence from endpoint data, and matching all time derivatives across the join. No quantitative restart formula is assumed; both original claims are retained.",
    "route": "canonical-defect-ledger"
  },
  {
    "id": "thm-fd-global-two-dimensional-periodic-navier-stokes",
    "status": "fixed",
    "classification": "dependency_citation",
    "reason": "F1 included a specific lifespan formula absent from the cited local theorem statement, but no proof step uses it. Removed that nonfatal overstatement. Checked enstrophy time integration, Fourier-log commutator control, regularized logarithmic differentiation, and the finite-H4 continuation contradiction; all original global and quantitative conclusions remain unchanged.",
    "route": "canonical-defect-ledger"
  },
  {
    "id": "thm-fourier-basis-and-parseval-on-the-n-torus",
    "route": "published-consumer-ledger/owner-maintenance",
    "status": "outside-scope-recorded",
    "classification": "presentation",
    "reason": "The inspected imported published Statement embeds [[def-countable-choice]] in its opening hypothesis and further definition links in its torus character clause. Its mathematical Parseval interface is sufficient for the repaired Poincare proof, but statement-first presentation maintenance belongs to the original mathematics owner; imports remain read-only.",
    "affected_use": "Poincare F2 uses only normalized Fourier isometry, with derivative coefficients now proved locally.",
    "minimality": "Move the original supplier links to an immediately following Statement references section in an authorized mathematics maintenance run; no physics item edit is needed."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-observer-calculus",
    "proposed_action": "record nonfatal citation-scope defect as fixed",
    "severity": "nonfatal",
    "disposition": "fixed",
    "location": "Facts F1 and former proof1.1-1.2,2.2",
    "reason": "F1 incorrectly attributes the generic-chart definitions to def-fd-smooth-motion, whose hypotheses require 0 in I and a nonempty bounded C1 reference body. The Statement already defines every field, so no transformation identity fails: inverse regularity follows directly from the Euclidean inverse theorem for H on I times U. Replaced the inappropriate supplier with that theorem and derived transformed inverse regularity explicitly, retaining the complete Statement. This is a citation-scope defect closed by the given definitions and an existing supplier, not a counterexample to the kinematic result.",
    "correction": "Use the actual inverse theorem on the given general chart, justify transformed inverse regularity, and use given field definitions. Reconcile exact citations, derivations, roles and dependency level in the owning metadata. Preserve Statement.",
    "evidence": {
      "path": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u2.json",
      "unit": "2",
      "decision_index": 0
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-transport-and-density",
    "proposed_action": "retain false-positive adjudication; do not record a determinant defect",
    "disposition": "false_positive",
    "reason": "The supplier uses zero-based finite ordinals: def-natural-numbers explicitly gives 3={0,1,2}; def-matrices-over-a-commutative-ring defines columns i<n; and the determinant definition takes one factor for every such column. Thus i<3 means all three factors. With e(i)=i+1, sigma=e tau e^{-1} and b_ri=m_(r+1,i+1), its polynomial is exactly F4. Increasing relabeling preserves inversion pairs and therefore permutation sign by def-inversions-inversion-number-and-sign. This is a valid change of labels, not an omitted column. Checked the current corollary, determinant definition and indexing suppliers, and the cofactor and column-derivative uses in proof 2.1 and 5.1. The rejected objection is false; no optional notation edit was made.",
    "evidence": {
      "path": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u2.json",
      "unit": "2",
      "decision_index": 1
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-transport-and-density",
    "proposed_action": "record distinct nonfatal F1 scope finding and route native owner repair",
    "severity": "nonfatal",
    "disposition": "open",
    "location": "Facts & Assumptions F1",
    "reason": "F1 cites def-fd-smooth-motion for local fields under a generic bounded open B, although the supplier requires a nonempty C1-boundary B. The transport Statement defines A,u,F,L,theta locally and proof1.1 independently proves C1 inverse regularity from F2.",
    "correction": "Clarify F1 as the given local conventions, with inverse regularity established by F2 in step1.1; remove or explicitly limit the unnecessary scoped definition citation and reconcile owning citation/dependency metadata. Preserve the full Statement and analytic conclusions. No new supplier is required.",
    "scope_note": "Do not convert this distinct discovery into the original determinant rejection; the false-positive carrier remains unchanged."
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-transport-and-density",
    "proposed_action": "record distinct nonfatal interval-application finding and route native owner repair",
    "severity": "nonfatal",
    "disposition": "open",
    "location": "Proof7.1, application of F9",
    "reason": "The uniform derivative-error estimate is proved only near the fixed t, but F9 is then invoked on int T although the originally selected T need not be contained in that neighborhood.",
    "correction": "Choose an open interval V containing the segment [t,t+k], contained in int T and in the finite-subcover time neighborhood; apply F9 to phi_a restricted to V, where its derivative is bounded by 2 epsilon/3. This single domain restriction proves the same bound and leaves the Statement unchanged.",
    "scope_note": "Preserve the unrelated fixed Step3 transport-analytic-justification row and original review evidence."
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-riemann-integral-over-a-jordan-set",
    "proposed_action": "add focused batch-2 consumer-use evidence to existing OPEN mathematics-owner editorial maintenance; no duplicate defect or closure",
    "existing_canonical_defect_id": "fluid-dynamics-all-47-2026-10-23-3a-batch-3-published-links-2",
    "disposition": "nonfatal-recorded; original mathematics maintenance OPEN",
    "affected_use": "items/lem-fd-transport-and-density.md F7 and proof8.1 use the zero extension to a containing rectangle and independence of that rectangle. Both mathematical contents match the current imported Definition and lem-jordan-set-integral-well-defined.",
    "invalidated_claim": "No mathematical integral convention or transport conclusion is invalidated; the published Definition contains inline supplier hyperlinks and lacks a following Definition references section.",
    "minimality": "Mathematics owner can move existing links after the complete Definition, preserving all hypotheses and dependencies. Physics import and original remain read-only; this dispatch performs no published repair."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "pthm-fd-local-momentum-balance-from-continuum",
    "operation": "propose-fixed",
    "classification": "confirmed_nonfatal",
    "location": "Facts & Assumptions, F1",
    "reason": "F1 inaccurately presents the normalized initial-chart dictionary as the complete general motion definition. This is a nonfatal citation-scope defect: the Statement explicitly supplies the local C2 diffeomorphisms and induced velocity; transport requires neither chi(0,a)=a nor extension beyond B for relatively compact material sets. Corrected F1 to distinguish the locally given motion from the dictionary’s inertial-chart and SI conventions, preserving the entire Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "operation": "no-update",
    "reason": "No assigned public interface changed, and this review found no potentially defective published consumer requiring maintenance. Imported mathematical suppliers were read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-negative-space-nonlinear-bound",
    "action": "propose_record_repaired_finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Defined and proved the H^-r distribution embedding and multiplier extension before projecting the L1 tensor divergence; the original exponent and bound are preserved.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-fd-weak-time-continuity",
    "action": "propose_record_repaired_finding",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "Proved periodic separability by projected rational finite Fourier arrays; the abstract Definition and representative uniqueness are unchanged.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-fd-periodic-leray-hopf",
    "action": "propose_record_repaired_finding",
    "outcome": "confirmed_nonfatal",
    "defect_type": null,
    "reason": "Declared the exact periodic-space prerequisite and F3 for normalized L2, V and gradients; the entire Definition is unchanged.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-finite-mode-compactness",
    "action": "propose_record_repaired_finding",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Kept the actual Cw coefficient limit and separated its V-valued Bochner representative; deterministic extraction retains the stated choice hypothesis.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "lem-fd-no-slip-lsix",
    "action": "propose_record_repaired_finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Defined and proved the empty zero-space case directly, preserving every domain and nonlinear measurability estimate; nonempty supplier hypotheses now match.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "thm-fd-bounded-global-weak-existence",
    "action": "propose_record_repaired_finding",
    "outcome": "confirmed_fatal",
    "defect_type": "dependency_citation",
    "reason": "Proved every empty-domain clause using u(t)=0 and S=(0,infinity); the original nonempty Galerkin, variational and energy conclusions are retained.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_published_maintenance_finding",
    "subjects": [],
    "reason": "All six assigned carriers and all five direct item consumers examined here are draft frontier members. No potentially defective published consumer was found; published imports remain unchanged. The preexisting smooth-FTC finding is already fixed and is not relabelled as a new defect.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "cex-fd-weak-products",
    "action": "refer_unassigned_presentation_finding_to_owner",
    "reason": "Counterexample 1.1 leaves the starting index implicit; 2.1 claims the tensor integral is 1/2 for every n, which fails at n=0. Specify n>=1. This preserves the asymptotic witness and is outside this rejected-item repair assignment.",
    "evidence": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u22.json",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-fd-conservation-system",
    "batch": "23",
    "proposal": "confirmed_fatal",
    "status": "fixed",
    "reason": "Interior local integrability does not ensure finite signed entropy integrals for tests reaching t=0. For example U(t,x)=1/t with F=0, eta(z)=z^2 and q=0 has locally integrable compositions on every interior compact set but eta(U)=t^-2 is not integrable on (0,tau) times a spatial compact set of positive measure. The initial entropy clause omitted the corresponding test-support qualification. Added explicit absolute integrability of eta(U) and all q_j(U) on every such boundary slab and specified all nonnegative initial-boundary tests; the sign, compatibility and initial term are preserved.",
    "uncertain": false,
    "native_report": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u23.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "def-fd-lax-pattern",
    "batch": "23",
    "proposal": "false_positive",
    "status": "false-positive",
    "reason": "The Definition supplies the equation, C1 flux, Jacobian, ordered distinct real eigenvalues, Rankine-Hugoniot equality and all Lax inequalities explicitly. These are well-defined on any open state domain: they use only flux values and derivatives at the stated states, with no convex combination or entropy pair. The earlier conservation-system item works on convex domains but its convex-entropy construction is not invoked here. Dafermos section 8.3 equation (8.3.1) was consulted for the characteristic inequalities; his general chapter 7 setting additionally assumes convexity and C3 flux, which are not necessary for this locally explicit definition. Narrowing this sound definition would discard scope without repairing a mathematical defect.",
    "uncertain": false,
    "native_report": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u23.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "cex-fd-shock-point-values",
    "batch": "23",
    "proposal": "false_positive",
    "status": "false-positive",
    "reason": "The exact statement says let I subset R and Omega subset R^d be open, so both sets are open and Q is open. The trace supplier also requires I merely open. All regular-distribution operations used in F3 apply on any open set Q, as explicitly stated in the conservation definition and its regular-distribution supplier; connectedness of I is not used. Under Countable Choice the spacetime normal (-s,n) is nonzero, hence Sigma is null; measurable finite changes there preserve local integrability and every regular pairing, while identical open-side fields have identical C1 traces. No time-boundary assertion is made.",
    "uncertain": false,
    "native_report": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u23.json"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "subject": "prop-fd-viscous-entropy-passage",
    "batch": "23",
    "proposal": "new distinct nonfatal proof-detail finding; refer to frontier owner without modifying historical rows",
    "status": "open",
    "location": "Proof 3.1, final sentence: Passing to the limit yields the stated entropy inequality.",
    "affected_use": "Facts F1; Proof 2.1 and 3.1: initial entropy inequality and passage of its initial-boundary test integral.",
    "invalidated_claim": "The written inference from interior L1_loc convergence directly to the full initial-boundary test integral omits a boundary-strip estimate. The theorem itself remains valid under its existing bound.",
    "minimality": "Proof-only insertion: for support in [0,tau] times K, split into 0<t<delta and delta<=t<=tau. On the latter, use the stated L1_loc convergence and Lipschitz continuity of eta,q on [-M,M]. On the strip, each coefficient difference has absolute value at most twice its sup norm on [-M,M], so its integral against the bounded test derivative is at most 2 delta lambda_d(K) times the corresponding sup norm times the derivative sup norm. Sum over coefficients and then let delta decrease to zero. The initial term already converges by the established common initial bound. No Statement, dependency or hypothesis change is required.",
    "reason": "Current full proof and the rejection-blind digest were both read. The former supplies the common range but does not write this strip argument; the digest identifies precisely that omission. This is distinct from the historically fixed justification of the initial range bound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-regular-distribution-from-a-locally-integrable-function",
    "proposal": "refer imported mathematics presentation to root maintenance; no Step-5 item repair or gate",
    "status": "maintenance-open",
    "affected_use": "The assigned null-set/distribution argument uses this published supplier; its mathematical statement is adequate, but its complete Definition/Statement contains inline supplier links.",
    "observed_excerpt": "This extends [[def-locally-integrable-function-on-r-n]]",
    "invalidated_claim": "No mathematical inference is invalidated; the uninterrupted-statement editorial requirement is violated.",
    "minimality": "Move the existing links to the immediately following Definition references or Statement references section in the original mathematics maintenance route, preserving hypotheses and immutable import bytes here.",
    "reason": "The current relevant supplier section was read directly and this exact inline hyperlink remains. No whole-supplier audit or source-book reading is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "def-distributional-derivative",
    "proposal": "refer imported mathematics presentation to root maintenance; no Step-5 item repair or gate",
    "status": "maintenance-open",
    "affected_use": "The assigned null-set/distribution argument uses this published supplier; its mathematical statement is adequate, but its complete Definition/Statement contains inline supplier links.",
    "observed_excerpt": "in the convention of [[def-distribution]]",
    "invalidated_claim": "No mathematical inference is invalidated; the uninterrupted-statement editorial requirement is violated.",
    "minimality": "Move the existing links to the immediately following Definition references or Statement references section in the original mathematics maintenance route, preserving hypotheses and immutable import bytes here.",
    "reason": "The current relevant supplier section was read directly and this exact inline hyperlink remains. No whole-supplier audit or source-book reading is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "subject": "thm-affine-hyperplanes-and-proper-subspaces-of-rn-are-lebesgue-null",
    "proposal": "refer imported mathematics presentation to root maintenance; no Step-5 item repair or gate",
    "status": "maintenance-open",
    "affected_use": "The assigned null-set/distribution argument uses this published supplier; its mathematical statement is adequate, but its complete Definition/Statement contains inline supplier links.",
    "observed_excerpt": "([[def-countable-choice]])",
    "invalidated_claim": "No mathematical inference is invalidated; the uninterrupted-statement editorial requirement is violated.",
    "minimality": "Move the existing links to the immediately following Definition references or Statement references section in the original mathematics maintenance route, preserving hypotheses and immutable import bytes here.",
    "reason": "The current relevant supplier section was read directly and this exact inline hyperlink remains. No whole-supplier audit or source-book reading is claimed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "rem-fd-thermal-coupling",
    "status": "fixed",
    "outcome": "confirmed_nonfatal",
    "reason": "The local-energy postulate independently adopts the source-free insulated balance d_t e_th(T)+div j_Q=0. The remark body correctly requires additional assumptions only to relate its rectangular thermal fields to the periodic mechanical fields, particularly to identify mechanical dissipation with heating. The original title incorrectly extended that requirement to thermal balance itself. This is a nonfatal presentation defect; only the title and its manifest mirror were corrected.",
    "uncertain": false,
    "source_urls": [
      "https://virtualmath1.stanford.edu/~ryzhik/notes-256B-24.pdf"
    ],
    "familiar": true
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "run": "fluid-dynamics-all-47-2026-10-23",
    "subject": "prop-fd-maxwellian-moments",
    "batch": "25",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "nonfatal",
    "disposition": "fixed",
    "detail": "F6 omits the half-line supplier's explicit Countable Choice and compact-truncation Riemann-integrability hypotheses. The actual dependency def-fd-kinetic-density already adopts AC_omega, so this is an explicit-premise/restatement defect rather than an unavailable mathematical assumption. The Statement, Given, F6 and A1 now expose exactly that inherited premise; continuity supplies compact integrability. All moment conclusions are retained.",
    "evidence": [
      {
        "path": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u25.json",
        "note": "Exact assigned tuple, native current review hashes and focused check results."
      }
    ]
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_append",
    "run": "fluid-dynamics-all-47-2026-10-23",
    "subject": "ex-fd-bgk-initial-layer",
    "batch": "25",
    "caught_at_stage": "5.1-adjudicate",
    "caught_by_role": "alpha-adjudicate",
    "severity": "fatal",
    "disposition": "fixed",
    "detail": "The unrestricted positive-reference wording admits velocity-dependent functions, for which Verification 1.1's quadratic logarithm bound is false. For any constant f_*>0 of density units, the positive measurable reference f_ref(v)=f_0(v) exp(-f_*/f_0(v)) gives f_0|log(f_0/f_ref)|=f_* everywhere, hence infinite integral. Specifying a positive constant reference exactly matches the BGK theorem and repairs this false generalization. Gaussian-mixture moments, non-Maxwellianity and all initial-layer estimates are retained.",
    "evidence": [
      {
        "path": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u25.json",
        "note": "Exact assigned tuple, native current review hashes and focused check results."
      }
    ]
  },
  {
    "target": "canonical-defect-ledger",
    "id": "def-fd-physical-kinetic-observables",
    "action": "record_fixed",
    "severity": "fatal",
    "defect_type": "other",
    "finding": "The nonnegative density domain includes zeros, where signed and absolute logarithmic entropy products were undefined.",
    "resolution": "Both products and their velocity-weighted forms now use zero continuous extensions. All original positive-density expressions, domains, moment restrictions and physical qualifications are preserved.",
    "uncertain": false
  },
  {
    "target": "canonical-defect-ledger",
    "id": "pthm-fd-local-boltzmann-h-balance",
    "action": "record_false_positive",
    "context_sha256": "7b39d139d7cad44fb45931998fc8b6b808dffa63814c67e9c5aea81e774013de",
    "finding": "The objection overlooks the stronger weak-testing clause of the directly adopted physical Boltzmann postulate.",
    "resolution": "No source edit: the postulate licenses both tests under the stated absolute convergence. This disposition concerns only the actual rejected tuple.",
    "uncertain": false
  },
  {
    "target": "canonical-defect-ledger",
    "id": "pthm-fd-local-boltzmann-h-balance",
    "action": "propose_open_owner_discovery",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "Proof 2.1 substitutes the kinetic equation at every (x,t), whereas the adopted postulate states equality only almost everywhere in the product domain. Fubini supplies velocity-a.e. equality for almost every section, not every section. No collision continuity or additional sectionwise equation premise supplies the missing inference.",
    "affected_use": "items/pthm-fd-local-boltzmann-h-balance.md: Statement concludes the local balance throughout I x Omega; Proof 2.1 substitutes the model equation into the fixed-section integral obtained in Proof 1.1.",
    "invalidated_claim": "The written deduction does not justify its throughout-I-x-Omega conclusion on exceptional time-space sections. No complete counterexample to all collision assumptions is claimed.",
    "minimality": "To retain the pointwise conclusion, explicitly require the kinetic equation for almost every velocity at each fixed (x,t), identifying it as an extra conditional solution premise rather than a consequence of the physical postulate; check its direct entropy consumer. Alternatively supply a valid upgrade argument from existing hypotheses. Do not weaken the conclusion merely to close the finding.",
    "route": "Native owner discovery/intake; no edit is authorized by the false-positive original tuple.",
    "uncertain": false
  },
  {
    "target": "canonical-defect-ledger",
    "id": "pthm-fd-boltzmann-entropy",
    "action": "refer_inherited_owner_discovery",
    "severity": "fatal",
    "defect_type": "logic",
    "finding": "F2 and Proof 1.1 invoke the pointwise local-H balance under the same product-a.e. equation convention; this use inherits the unresolved sectionwise-substitution gap.",
    "affected_use": "items/pthm-fd-boltzmann-entropy.md: F2 and Proof 1.1 invoke h_t+div J_H=-D pointwise, then multiply by -k_B. Statement likewise gives the local physical entropy balance without an exceptional-section qualification.",
    "minimality": "If the local-H interface gains the sectionwise equation premise, carry precisely that premise into this consumer and its proof/contract. It is outside the assigned repair list and remains unchanged.",
    "route": "Frontier owner discovery/intake; this is not an invented original judge tuple.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_fixed",
    "id": "def-fd-forced-incompressible-newtonian-model",
    "model": "gpt-6-luna",
    "context_sha256": "521f9b3770d181c38b27034be68ea1a6058f79b7310d317e1218cc01528790c6",
    "outcome": "confirmed_fatal",
    "reason": "The selected classical wall equality is undefined for fields specified only on I x Omega. Interior C2 regularity, even with the forced interior equations, does not yield a boundary restriction: on the unit ball u=(-x_2,x_1,0)/(1-|x|^2) is smooth and divergence-free with no finite extension at (1,0,0); p=0 and b=(u dot grad)u-(mu_0/rho_0)Delta u satisfy the forced equation. Added an explicit continuous extension and defined its unique boundary restriction precisely when classical stationary no-slip is selected.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true,
    "defect_type": "other"
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "proposed_fixed",
    "id": "pthm-fd-no-slip-cfd-observations",
    "model": "gpt-6-luna",
    "context_sha256": "a6e8c39479fb2cbe0f7e55ed4563da6339ae9fa5c8912cc07714f0dca2dd7a24",
    "outcome": "confirmed_nonfatal",
    "reason": "The supplier declares time-first fields while this theorem uses space-first physical fields without specifying their relationship. The local equations and estimates have the intended content, but the explicit model-interface convention is missing. Defined u_phys(x,t)=u(t,x), likewise p and b, with both product domains, including the adopted weak extension. Also replaced the undefined t_m* conversion by t_phys,m=(ell_0/U_0)t_m, preserving every bound.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_change",
    "reason": "No published consumer or published mathematical defect was identified in these assigned uses. The two actual downstream consumers are draft frontier items; imported mathematical suppliers remain untouched.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fd-c1-boundary-surface-integrals",
    "status": "fixed",
    "severity": "nonfatal",
    "reason": "Confirmed nonfatal F3 overstatement. Restated exact support-in-image/zero-extension conditions and verified the actual overlap weight has compact support inside the transition image; Statement unchanged. Owning contract derivation2.2 and F5 uses updated, strict focused contract check passes. No new interface."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-fd-quantity-and-frame-conventions",
    "status": "false_positive",
    "reason": "False positive: actual home library/fluid-dynamics/fd-f01.md lists pthm-fd-smooth-material-kinematics. That theorem states C2 normalized positive-J motion, positive C1 density and adopted no-source mass balance, proves rho(t,chi)J=rho0 in step4.1. The definition explicitly refers to a theorem on the page, not within the item. No edit licensed or needed. The outside kinematics locator diagnosis is not adopted."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "cex-fd-spin-sensitive-stress",
    "status": "fixed",
    "severity": "fatal",
    "defect_type": "dependency_citation",
    "reason": "The original F2 application never constructs a motion inducing u=Omega x, leaving its motion hypotheses unverified. Completed the witness with chi(t,a)=exp(t Omega)a on R x R^3, checked C2 slice diffeomorphisms with inverse exp(-t Omega), determinant 1 and induced velocity, using the exact published bounded-operator exponential and Euclidean suppliers. The refuted universal claim, arbitrary nonzero skew Omega, units and empirical exclusions are unchanged."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "action": "no-update",
    "reason": "No assigned repair changes Statement, Definition, physical_scope or empirical qualifications; no published consumer defect was confirmed and no downstream interface event is created."
  },
  {
    "defect_ledger": [
      {
        "id": "rem-fd-compressible-stability-distinctions",
        "finding": "Missing uniform-mesh hypothesis in conservation summary",
        "severity": "fatal",
        "defect_type": "logic",
        "proposed_status": "fixed",
        "evidence": "Remark now fixes N>=2 periodic cells, a common positive width, a common time-step ratio, and the shared-face balance. The two periodic flux sums are identical by finite reindexing. This is the assigned original judge finding."
      },
      {
        "id": "rem-fd-compressible-stability-distinctions",
        "finding": "Missing closed-target hypothesis for the maximal convex-scaling limiter",
        "severity": "fatal",
        "defect_type": "dependency_citation",
        "proposed_status": "fixed",
        "evidence": "Distinct Step-4 digest finding, verified against alg-pe03-convex-scaling-positivity-limiter Definition. For K=(0,1), equal-weight nodes -1/2 and 3/2 have mean 1/2, but feasible scalings [0,1/2) have no maximum. The repaired Remark requires closed convex K and states why the maximum exists. No additional judge tuple is fabricated."
      }
    ],
    "published_consumer_ledger": []
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "operation": "propose_append",
    "subject": "rem-fd-fluid-sobol-interface",
    "severity": "fatal",
    "disposition": "fixed",
    "defect_type": "logic",
    "location": "Remark: formal plug-in covariance matrix; Proof 4.1",
    "reason": "The original matrix formula had no empirical-denominator guard and its derivative was undefined on the positive-probability zero branch. The repair explicitly returns zero-empirical-variance with no normalized index or matrix at bar D=0; the formula and derivative are restricted to bar D>0. The existing two-row Bernoulli model has failure probability 1/4. This new finding is distinct from the historical fixed Proof 1.3 numerator-expansion finding.",
    "evidence": [
      {
        "path": "items/rem-fd-fluid-sobol-interface.md",
        "note": "Remark, F4 and Proof 3.1/4.1"
      },
      {
        "path": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u33.json",
        "note": "Decision, current repair review and actual focused checks"
      }
    ],
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "action": "record_repaired",
    "id": "pthm-fd-conditional-fluid-filter-law",
    "location": "Facts F6/F9; Proof 1.1/2.1",
    "outcome": "confirmed_nonfatal",
    "reason": "Confirmed a nonfatal proof-step omission: the physical modal list can contain zero or repeated fields, so it cannot simply supply the ordered basis required by the coefficient interface. A competent reader closes this by taking the abstract trial space R^{m_k} with its standard basis and observation map M_k=L_k composed with Phi_k. The repair makes that realization explicit and verifies M_k(e_{k,j})=L_k(phi_{k,j}), leaving the same H_k, coefficient process and Kalman recursion. No new theorem, stronger hypothesis or changed conclusion is needed.",
    "post_sha256": "5f9cad7217c1eb9423329286ffddb8f4ab69a3ea051dfbb735783a8d84092896",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "retain_existing_open_maintenance",
    "id": "thm-kalman-filter-is-exact-posterior",
    "existing_entry": "fluid-dynamics-all-47-2026-10-23-3a-batch-36-kalman-publication-audit",
    "affected_use": "prop-fd-linear-fluid-filter-interface Proof 2.1 supplies the exact Gaussian coefficient kernel invoked as F7 in the assigned theorem Proof 3.1.",
    "reason": "The current pinned published theorem still has precheck and judge only, with no audited, verified or repair record, and its Statement contains inline supplier links. These publication/editorial defects are already recorded; retain mathematics-owner maintenance OPEN. The checked filtering argument permits the singular covariances and positive-definite innovations used here. No imported source, stamp or shared ledger was changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "refer_editorial_maintenance",
    "ids": [
      "def-linear-gaussian-state-space-model-with-independent-noises",
      "alg-kalman-filter",
      "def-state-space-filtering-laws"
    ],
    "affected_use": "The coefficient interface and F7 proposition consume the imported model and Kalman algorithm; assigned F8 uses the imported filtering-kernel definition in Proof 3.1.",
    "reason": "Each inspected complete Definition retains inline supplier wikilinks before its completion. Move links to immediately following Definition references under original mathematics-owner maintenance, preserving every hypothesis and procedure. This is presentation noncompliance, with no defect found in the model, recursion or conditional-law convention used by the assigned proof; imports remain read-only.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "lem-fd-periodic-filter-normalization-and-commutation",
    "status": "fixed",
    "severity": "nonfatal",
    "outcome": "confirmed_nonfatal",
    "location": "Facts & Assumptions F2; Proof 2.1 and 3.1",
    "reason": "F2 omits the supplier’s open domain, support-in-image condition and zero extension. For example, the identity on U=(0,1)^d and a nonnegative unit-mass continuous bump supported in (2,3)^d satisfy the abbreviated hypotheses but give zero transformed integral. This is nonfatal for this lemma: its actual dilation is global on open R^d with image R^d, and the kernel products are compactly supported Riemann integrands. Repaired F2 and made the complete applicability checks explicit in proofs 2.1 and 3.1 without changing the Statement.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [
      {
        "ledger": "research/defect-ledger.jsonl",
        "subject": "post-fd-eddy-viscosity-closure",
        "run": "fluid-dynamics-all-47-2026-10-23",
        "batch": "38",
        "caught_at_stage": "5.1-adjudicate",
        "severity": "fatal",
        "defect_type": "logic",
        "disposition": "fixed",
        "location": "Postulate: filtered specific pressure definition and resolved momentum gradient",
        "detail": "The base dynamic pressure was used unfiltered in the resolved equation. Repaired to pi_ell=overline(p_dyn)_ell/rho0, keeping full modeled stress. Both direct consumers examined and remain sound; no additional consumer interface changes.",
        "evidence_path": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u38.json"
      }
    ],
    "published_consumer_ledger": [],
    "published_ledger_reason": "No published item or published consumer is changed or newly found defective in this assigned pressure repair. The Step-4 digest supplier notation alerts remain attributed evidence outside this unit; no published acceptance or maintenance closure is asserted."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "def-fd-rotating-stratified-shallow-equations",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal dangling referent: no energy integral appears below the Definition. Replaced only that sentence with a conditional reference-density conversion convention. All PDEs, coefficients, regularity, domains, units and AC_omega hypotheses are unchanged."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-fd-shallow-water-smooth-energy",
    "outcome": "false_positive",
    "status": "rejected",
    "reason": "False positive: F1 targets a domain: mathematics Definition of pointwise PDEs, whose actual prerequisites are mathematical. The theorem derives D_t h=-h div v and D_t v=-fJv-g grad h using h>0; v dot Jv=0 and the product rule give the exact local flux, and continuous periodic spatial fluxes integrate to zero. No physical or empirical premise enters."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-fd-stratified-linear-energy",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Confirmed nonfatal ancillary overstatement: N=-1 also gives the positive weight 1/N^2=1. Kept the approved N>0 hypothesis and all equations, energy and identity; corrected only its claimed necessity. Also repaired the digest pressure-regularity gap by cancelling each periodic flux on a fixed-time spatial slice before integrating the continuous energy and dissipation terms in time."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "thm-fd-stratified-linear-energy",
    "origin": "batch-39-step5-context",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Pressure may be shifted by an arbitrary discontinuous function of time without changing grad pi or the PDEs. The old A1/3.1 nevertheless asserted space-time continuity/integrability of each pressure-flux derivative. Revised A1, 1.2 and 3.1 use only fixed-time pressure-flux integrals and continuous e_t,D; hypotheses are preserved."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "def-lebesgue-outer-measure",
    "status": "nonfatal-recorded",
    "route": "root mathematics maintenance; immutable imported physics copy remains untouched",
    "consumer_ids": [
      "def-fd-rotating-stratified-shallow-equations",
      "thm-fd-shallow-water-smooth-energy",
      "thm-fd-stratified-linear-energy"
    ],
    "finding": "Definition still contains inline supplier wikilinks (premeasure, elementary sets, induced outer set function); mandatory uninterrupted-definition presentation is violated.",
    "current_use": "Exact supplier formulas/hypotheses used here remain clear; these presentation defects do not invalidate the assigned conditional energy arguments. No published repair or fresh whole-supplier acceptance is claimed."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "thm-riemann-fubini-on-product-rectangles",
    "status": "nonfatal-recorded",
    "route": "root mathematics maintenance; immutable imported physics copy remains untouched",
    "consumer_ids": [
      "thm-fd-shallow-water-smooth-energy",
      "thm-fd-stratified-linear-energy"
    ],
    "finding": "Statement contains an inline def-sections-and-iterated-riemann-integrals wikilink. Move it after the complete Statement into Statement references.",
    "current_use": "Exact supplier formulas/hypotheses used here remain clear; these presentation defects do not invalidate the assigned conditional energy arguments. No published repair or fresh whole-supplier acceptance is claimed."
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "def-lebesgue-measure-and-the-lebesgue-sigma-algebra",
    "status": "nonfatal-recorded",
    "route": "root mathematics maintenance; immutable imported physics copy remains untouched",
    "consumer_ids": [
      "def-fd-rotating-stratified-shallow-equations",
      "thm-fd-shallow-water-smooth-energy",
      "thm-fd-stratified-linear-energy"
    ],
    "finding": "Definition includes duplicated assumption/title substitutions beginning Under countable choice, Assuming countable choice, and a theorem-title fragment after in. Displayed Caratheodory criterion and measure restriction remain mathematically explicit.",
    "current_use": "Exact supplier formulas/hypotheses used here remain clear; these presentation defects do not invalidate the assigned conditional energy arguments. No published repair or fresh whole-supplier acceptance is claimed."
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "post-fd-geophysical-model-branches",
    "status": "fixed",
    "outcome": "confirmed_fatal",
    "defect_type": "logic",
    "reason": "Confirmed missing equilibrium hypothesis: the original Postulate calls p0 the full pressure of a resting uniformly stratified state, sets pi=(p-p0)/rho0, but explicitly leaves p0 arbitrary. The background force -grad(p0)/rho0+(B0-g)e3 then need not vanish; p0=0 would require B0=g, inconsistent with B0'=N^2>0. This is a logical defect in the stated resting-state linearization, although the separately adopted perturbation PDEs remain meaningful. Repaired by prescribing B0(z)=B_*+N^2 z and grad(p0)/rho0=(B0-g)e3, preserving every displayed equation and the separate shallow-water branch.",
    "source_urls": [
      "https://empslocal.ex.ac.uk/people/staff/gv219/ecmm719/lecnotes18w.pdf"
    ],
    "uncertain": false,
    "familiar": false
  },
  {
    "ledger": "canonical-published-consumer-ledger",
    "id": "post-fd-geophysical-model-branches",
    "action": "no-published-update",
    "reason": "The actual direct item consumers pthm-fd-geophysical-conditional-energy and ex-fd-coriolis-no-work are both draft frontier items. No published direct consumer or defective published use was identified; no published item was edited or adjudicated.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": {
      "path": "research/defect-ledger.jsonl",
      "proposed_updates": [
        {
          "id": "def-fd-x00",
          "status": "fixed",
          "outcome": "confirmed_nonfatal",
          "reason": "The line/flux suppliers accept continuous spatial fields, whereas the original observables passed maps on I x Omega. Fixed t sections now type circulation, flux, traction and componentwise force explicitly; spatial continuity follows from the existing regularity. This is a nonfatal definition omission with the intended integral and all PDE claims preserved.",
          "post_sha256": "8a22720ec31d1738978a25c456470375d592d96d9ea4e8a6b86cf0e2af667a39",
          "native_report": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u5.json"
        },
        {
          "id": "lem-fd-real-trigonometric-derivatives",
          "status": "fixed",
          "outcome": "confirmed_nonfatal",
          "reason": "F3 omitted the supplier hypotheses U open, z in U and f:U to C. They are restored verbatim in mathematical content, and U=C is verified for both entire functions by F2. Restriction of the real total derivative to (h,0) proves the unchanged S and C identities, so the defect was a nonfatal overbroad Fact, not a missing actual differentiability premise.",
          "post_sha256": "81b78859f8e90d63be7b7746dc2632bd92cd0aa8e0b6edda8d64bb6d44a2c1ac",
          "native_report": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u5.json"
        },
        {
          "id": "thm-fd-x01",
          "status": "fixed",
          "outcome": "confirmed_nonfatal",
          "reason": "The cited system definition requires a nonempty time interval and nonempty spatial set, while the theorem allows arbitrary open sets. The coefficient identities remain valid locally and vacuously on empty products. A1/A2 now explicitly define the same equations on that broader scope; step 1.1 checks local interval/ball neighborhoods and chain-rule limit points, and step 3.1 covers disconnected and empty products. All original claims and positive scaling factors are retained.",
          "post_sha256": "1efbc48e1400c8c8b7a035bc1a2a9b6fa744ade387d74819ea8e478f9ea933f1",
          "native_report": "research/fluid-dynamics-all-47-2026-10-23-step5-v2/step5-v2-initial-r1-u5.json"
        }
      ]
    },
    "published_consumer_ledger": {
      "path": "research/published-consumer-supplier-ledger.md",
      "proposed_updates": [],
      "reason": "No published or outside-frontier direct consumer of the changed Definition was found. No published item was edited or adjudicated."
    }
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_record",
    "subject": "thm-fd-x04",
    "model": "gpt-6-luna",
    "context_sha256": "a701004fb21b4e898e931adcc4a3b554292e0b60c190073d7812ee395ed13425",
    "outcome": "false_positive",
    "disposition": "dismissed",
    "reason": "The Statement explicitly imposes stationary pipe walls w(a)=0 and separately arbitrary channel wall speeds V_0,V_1. Its radial ODE excludes the logarithmic mode by full-disk continuity, giving exactly the claimed Poiseuille profile and flux. The title names this combined family; it asserts no additional moving-pipe-wall theorem. Channel ODE, shear signs, ansatz-restricted uniqueness and both coordinate schematics are sound.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_record",
    "subject": "thm-fd-x13",
    "model": "gpt-6-luna",
    "context_sha256": "4beddb9416c7370f579e4be0d5d6528523e610bd64b35e54609f728820d04384",
    "outcome": "confirmed_nonfatal",
    "disposition": "fixed",
    "reason": "F2 requires its surface to lie in the open spatial domain, whereas r=a is outside Omega_a. The pressure integral and antipodal cancellation were already correct; the missing licensing step is nonfatal because the same explicit formulas extend smoothly on D={r>0}. Given/F2/proof 3.1 now specify stationary fields on R x D, fix a time and identify the sphere restriction with the exterior trace. The original Statement, slip condition, orientation, force and diagram remain unchanged.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_record",
    "subject": "ex-fd-x06-formal-verification",
    "model": "gpt-6-luna",
    "context_sha256": "0cc157cc9a5766be8a971b53eaee807e86e9cada59799e47d970c2e7622ba086",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The supplier Statement explicitly assumes AC_omega and its proof 2.2 uses it in the bounded-annulus divergence theorem. The original Example reported this proof hypothesis without adopting it, so the uniqueness invocation lacked a premise. The Example now explicitly assumes the indexed axiom, spells out its full content, carries it into Given/A1 and discharges it in Verification 2.1. Unit positive coefficients, sphere trace, uniform decay class, pressure normalization and exact 6pi e_z resultant are preserved.",
    "uncertain": false
  },
  {
    "ledger": "research/defect-ledger.jsonl",
    "action": "propose_adjudication_record",
    "subject": "ex-fd-x08-formal-verification",
    "model": "gpt-6-luna",
    "context_sha256": "8f8efca133c1505a7c62af20a0135616bfff49e5c9d018542a8696c00dd795a7",
    "outcome": "confirmed_fatal",
    "disposition": "fixed",
    "reason": "The periodic and wall-layer fields are separate parameter choices. Without a periodic nu value, F1 yields 2 C_(pi/2) exp(-nu t), so the claimed exp(-t) cannot follow for arbitrary positive nu. The Example and its A1 now explicitly choose periodic nu=1. Then k=1, Ac=2, c=1<2, b=pi/2<pi and 0<alpha=pi/2<pi verify every supplier hypothesis and retain the exact original circulation and strict decrease.",
    "uncertain": false
  },
  {
    "ledger": "research/published-consumer-supplier-ledger.md",
    "action": "no_update",
    "reason": "No defective published consumer or published mathematical supplier was found in the assigned uses. All source repairs are assigned draft frontier items; no published or imported item was edited.",
    "uncertain": false
  },
  {
    "ledger": "canonical-defect-ledger",
    "id": "ex-fd-x07-formal-verification",
    "outcome": "confirmed_nonfatal",
    "status": "fixed",
    "reason": "Incorrect optimality wording in mathematical scope metadata was corrected in the item and its batch-7 manifest mirror. All original norm identities and the valid channel inequality are preserved; no Statement or Definition changed.",
    "uncertain": false,
    "source_urls": [],
    "familiar": true
  },
  {
    "defect_ledger": [],
    "published_consumer_ledger": []
  },
  {
    "ledger": "canonical-defect-ledger",
    "proposed_updates": [
      {
        "ledger": "canonical-defect",
        "id": "pthm-fd-conservation-jump-laws",
        "status": "fixed",
        "severity": "nonfatal",
        "finding": "Generic momentum flux contraction mistyped as a vector dot product; repaired to row/matrix normal multiplication.",
        "uncertain": false,
        "familiar": true,
        "source_urls": []
      },
      {
        "ledger": "canonical-defect",
        "id": "pthm-fd-cauchy-momentum-angular",
        "status": "fixed",
        "severity": "fatal",
        "defect_type": "dependency_citation",
        "finding": "Removed invocation of full thermal balance interface from mechanical proof; also made same-motion velocity explicit.",
        "uncertain": false,
        "familiar": true,
        "source_urls": []
      },
      {
        "ledger": "canonical-defect",
        "id": "pthm-fd-control-volume-balances",
        "status": "fixed",
        "severity": "fatal",
        "defect_type": "dependency_citation",
        "finding": "Established that every event used by a control integral lies in a balanced material chart, and removed use of a thermal interface from the momentum derivation.",
        "uncertain": false,
        "familiar": true,
        "source_urls": []
      },
      {
        "ledger": "canonical-defect",
        "id": "pthm-fd-energy-decomposition",
        "status": "fixed",
        "severity": "fatal",
        "defect_type": "logic",
        "finding": "Made current density C1 and identified u with the material velocity; completed direct total-energy derivation and preserved all conditional conservation claims.",
        "uncertain": false,
        "familiar": true,
        "source_urls": []
      },
      {
        "id": "pthm-fd-continuous-source-local-balances",
        "status": "open-proposed",
        "severity": "fatal",
        "defect_type": "logic",
        "route": "owner native discovery",
        "reason": "With identity chi, rho=1, steady u=(y,x,0), sigma=b=e=q=r=0, continuity and all static material integrals hold, but D_tu=(x,y,0) and div(ku)=2xy violate the local momentum and energy conclusions.",
        "uncertain": false,
        "familiar": true,
        "source_urls": []
      },
      {
        "id": "lem-fd-weak-jump-consistency",
        "status": "open-proposed",
        "severity": "nonfatal",
        "route": "assigned supplier owner",
        "reason": "Proof 1.2 writes lambda([F] dot n-V_n[U]) and its vanishing condition for a matrix-valued system flux, although its Statement correctly uses [F]n. Replace the two generic dot products in proof 1.2 with matrix-vector multiplication; preserve the already-correct Statement and scalar entropy formula.",
        "uncertain": false,
        "source_urls": [],
        "familiar": true
      }
    ]
  },
  {
    "ledger": "published-consumer-ledger",
    "proposed_updates": []
  }
]

For gate repair, also return gate_resolutions:[{index,reason,uncertain:false,source_urls:[],familiar:true}] for every diagnostic assigned to your unit, even when it names no item. Diagnose and repair its metadata or tool failure; an empty item assignment does not excuse a gate failure.

Empty assignments return empty arrays. For every changed public interface (including physical scope and empirical qualifications), put every direct dependency/reference consumer in downstream, including consumers whose examined uses remain sound and consumers already covered by an assigned review. The array is an examination inventory, not a list of items to edit. Record each exact affected use and disposition in the report; proof-only intermediate repairs do not restart propagation. For a consumer absent from the dependency/reference graph, include downstream_uses:{ID:"exact affected mathematical use, at least 40 characters"}. Outside consumers go to separate maintenance.

Assigned input:
[
  "def-fd-piecewise-traces",
  "thm-fd-rankine-hugoniot",
  "prop-fd-entropy-jump",
  "def-fd-lax-pattern",
  "thm-fd-convex-scalar-riemann",
  "cex-fd-expansion-shock",
  "cex-fd-shock-point-values",
  "def-fd-conserving-bgk",
  "def-fd-forced-incompressible-newtonian-model",
  "def-fd-incompressible-euler-system",
  "def-fd-incompressible-euler-model",
  "def-fd-rotating-stratified-shallow-equations",
  "def-fd-wall-defect-capillary-models",
  "thm-fd-homogeneous-bgk-limit",
  "ex-fd-bgk-initial-layer",
  "ex-fd-burgers-fan",
  "ex-fd-burgers-shock",
  "pthm-fd-no-slip-cfd-observations",
  "ex-fd-cfd-density-pressure-conversion",
  "ex-fd-compressible-constant-state",
  "pthm-fd-energy-decomposition",
  "ex-fd-conduction-energy-entropy",
  "post-fd-geophysical-model-branches",
  "ex-fd-coriolis-no-work",
  "ex-fd-couette-vorticity",
  "post-fd-eddy-viscosity-closure",
  "ex-fd-eddy-shear-production"
]


