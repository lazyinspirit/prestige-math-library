# Batch 11 — authoring and source evidence

Run: fluid-dynamics-all-47-2026-10-23  
Pair: fd-f03  
Output manifest: research/fluid-dynamics-all-47-2026-10-23-batch-11.pages.json

## Authority, design comparison, and scope

- The owner direction names research/plan-fluid-dynamics-refresh-track.md as the current controlling design. Its complete fd-f03 section at lines 342–379 controls over the historical research/plan-fluid-dynamics-track.md section at lines 312–347 because the owner direction explicitly supersedes historical design text.
- The current refresh reserves A fd-f03 and B fd-f03-examples, order 381, fluid-dynamics / physics, with eight A items and two B counterexamples. The B page is a leaf.
- The page-level plan-spec and assigned manifest agree on IDs, titles, category/library, companion, order and direct page prerequisites fd-f01 and fd-mf03. The plan-spec item arrays are pre-authoring placeholders; item inventory is taken from the controlling refresh proposal at research/scaffold-refresh-2026-10-18/fluid-dynamics/proposed-inventory.json.
- The linked FD-F03 reservation in that proposal retains an additional fd-mf02 page prerequisite. The refresh section, current plan-spec, dispatch and batch manifest specify fd-f01 and fd-mf03. We keep those direct edges; fd-mf03 itself requires fd-mf02, so fd-mf02 remains in the transitive page closure.
- The planned acoustic theorem's item row does not list post-fd-local-equilibrium, although the planned math supplier lem-fd-response-acoustic-algebra defines acoustic response from P(rho)=p(1/rho,s_b) using the local state relation. We add post-fd-local-equilibrium as a direct physical-assumption dependency of pthm-fd-acoustic-linearization and state the fixed-entropy interface explicitly. This closes the actual formulation gap without changing the assigned pair or an outside supplier.
- No additional mathematical item is needed: all local derivatives, stress/flux contractions, first variations, ideal-gas formulas and energy identities are defined in the item statements and proved conditionally from inspected suppliers. No claim of measured coefficients, empirical validation, global existence or finite-amplitude error is made.

## Inventory, dependencies, and levels before authoring

The run dependency file gives batch 11 level 3, with page prerequisites from batches 3 and 10. Item levels use only logical suppliers in this run; out-of-run mathematical sources do not raise levels.

| Item | Exact direct deps | In-run item suppliers | Level |
|---|---|---|---:|
| post-fd-newtonian-fourier | def-fd-quantity-and-frame-conventions; lem-fd-isotropic-linear-classification | quantity conventions 1; classification 0 | 2 |
| post-fd-local-equilibrium | def-fd-simple-fluid-state; def-fd-quantity-and-frame-conventions | state definition 0; quantity conventions 1 | 2 |
| def-fd-barotropic-euler-model | post-fd-continuum-balances | continuum balances 2 | 3 |
| def-fd-incompressible-newtonian-model | post-fd-continuum-balances; post-fd-newtonian-fourier | continuum balances 2; Newtonian/Fourier postulate 2 | 3 |
| pthm-fd-acoustic-linearization | def-fd-barotropic-euler-model; post-fd-local-equilibrium; lem-fd-response-acoustic-algebra | barotropic model 3; local-equilibrium postulate 2; response lemma 2 | 4 |
| pthm-fd-perfect-gas-temperature | post-fd-continuum-balances; post-fd-local-equilibrium; lem-fd-gibbs-entropy-residual | continuum balances 2; local-equilibrium postulate 2; Gibbs lemma 3 | 4 |
| pthm-fd-newtonian-kinetic-decay | def-fd-incompressible-newtonian-model; lem-fd-local-balance-equivalence | incompressible model 3; balance lemma 2 | 4 |
| pthm-fd-entropy-production | post-fd-continuum-balances; post-fd-local-equilibrium; post-fd-newtonian-fourier; lem-fd-gibbs-entropy-residual; lem-fd-newtonian-admissibility | continuum 2; local equilibrium 2; closure 2; Gibbs lemma 3; admissibility lemma 4 | 5 |
| cex-fd-negative-response-acoustics | pthm-fd-acoustic-linearization | acoustic theorem 4 | 5 |
| cex-fd-negative-bulk-viscosity | pthm-fd-entropy-production | entropy theorem 5 | 6 |

The closure uses tau = 2 mu D0 + zeta theta I and q = -K grad(T), with zeta = lambda + 2 mu / 3. The test is pointwise in state and permits independent D and grad(T); sym(K), not an unstated symmetry assumption on K, is the matrix constrained by the quadratic entropy residual.

## Current prerequisite inspection and Step 1 readiness

The first authoring-time inspection found missing records, but that snapshot has since changed. A live refresh used `loadStep1Record` and `step1Decision` against the current run immediately before final decisions:

- Batch 2: `def-fd-smooth-motion` and `lem-fd-transport-and-density` are ready.
- Batch 3: `def-fd-quantity-and-frame-conventions`, `post-fd-continuum-balances`, and `lem-fd-c1-domain-jordan-integrals` are ready. The balance postulate remains an adopted physical premise, not a theorem.
- Batch 8: `lem-fd-cauchy-contact` and `lem-fd-local-balance-equivalence` are ready; the latter's direct transport and Cauchy-contact prerequisites are also ready. Its inspected Statement assumes AC_omega, continuity, smooth positive fields, separately stated C1 stress regularity, and separate momentum/angular-momentum/total-energy balances. No full Axiom of Choice is substituted.
- Batch 10: `lem-fd-isotropic-linear-classification`, `def-fd-simple-fluid-state`, `lem-fd-helmholtz-chart`, and `lem-fd-response-acoustic-algebra` are ready. `lem-fd-gibbs-entropy-residual` and `lem-fd-newtonian-admissibility` have current escalated records; both native `owner` flags are false, and the items are outside batch 11's edit scope.

The Gibbs carrier's actual proof step 3.1 translates any nonempty open time interval to one containing zero and preserves its stated balances, so the interval-origin issue named in the stored Gibbs escalation is addressed in the current proof. The local-balance and transport carriers now exist with ready records, and the local-balance proof applies transport componentwise to vector fields. However, `lem-fd-gibbs-entropy-residual` also has a Facts & Assumptions sentence that still says its current local-balance Step 1 record is missing. That sentence is stale: the live local-balance record is ready. The Gibbs and admissibility decisions remain escalated and are outside batch 11's assigned edit scope; I leave those records untouched. The present carrier/proof inspection found no remaining mathematical gap in the stated time-translation application, but the unclosed supplier readiness keeps Gibbs-dependent consumer records open pending reconciliation by their owner.

All consumers use the inspected exact supplier statements, hypotheses and conventions, and are written conditionally. Ready records below mean current authoring readiness only, not independent proof acceptance. The initial item checkpoint statuses and “pending” validation notes record progress at those checkpoints and are superseded by the final live refresh at the end of this file.

## Sources, reading extent, and disposition

Two independent full-text treatments were read for this A page: relevant complete sections of David Tong's fluid-mechanics lecture notes and the relevant complete sections of a continuum-mechanics textbook. Both provide context for adopted formulations; no source replaces the local conditional proofs or mathematical suppliers.

1. David Tong, Fluid Mechanics, Part I lecture notes, §§1.1.1–1.1.3 and §2.1, printed pp. 5–18, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf. Read the continuity equation, inviscid Euler equation, pressure/density equation-of-state discussion and material-derivative sections. Supports def-fd-barotropic-euler-model and the balance/field vocabulary. These notes use their own pressure/stress sign convention; authored items use the tension-positive traction convention from the inspected fd-f01 definition.
2. David Tong, Fluid Mechanics, Part II lecture notes, §§3.1–3.1.2, printed pp. 55–63, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf. Read the stress/traction discussion, Newtonian viscous form, incompressible specialization and kinetic-energy calculation. Supports post-fd-newtonian-fourier, def-fd-incompressible-newtonian-model, pthm-fd-newtonian-kinetic-decay and cex-fd-negative-bulk-viscosity. The notes focus the derivation on incompressible flow and assert coefficient signs briefly; local item arguments state the compressible convention and prove the exact coefficient test.
3. David Tong, Fluid Mechanics, Part III lecture notes, §§4.4.2–4.4.4, printed pp. 146–151, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf. Read the complete ideal-gas entropy, adiabatic relation, heat-transport discussion and linear sound derivation in §§4.4.2–4.4.4. Supports post-fd-local-equilibrium, pthm-fd-perfect-gas-temperature, pthm-fd-acoustic-linearization and cex-fd-negative-response-acoustics. Tong explicitly says the heat-transport equation is not derived in that section; the authored temperature proof derives its conditional balance from the inspected local Gibbs/balance interface.
4. An Introduction to Continuum Mechanics, Second Edition, Chapter 6, “Constitutive Equations,” §§6.1.1–6.1.4, 6.5.1–6.5.3 and 6.7.2, printed pp. 221–245 and 251–252, https://courses.washington.edu/mengr503/Chapter_6.pdf. Read the constitutive-model status and entropy restriction discussion, compressible and incompressible Newtonian forms, the Fourier tensor law, and its heat-balance context. Supports post-fd-newtonian-fourier, post-fd-local-equilibrium, both model definitions, all four physical theorems and both counterexamples. The source distinguishes constitutive modelling from balance principles; the local proof uses zeta = lambda + 2 mu / 3 and sym(K) >= 0, and does not infer measured coefficients.

The browser could not open Tong's combined 245-page DAMTP PDF because its body exceeded the browser retrieval limit (11,323,490 bytes). Search then located the author's complete chapter PDFs above; the relevant full chapters were opened and read successfully. No claim or result is credited to the failed combined-PDF endpoint, no selected source was dropped, and no proof coverage was waived. Current chapter URLs will receive mechanical fetch stamps in batch-11.coverage.json.

Source-locator correction: Tong Part III support is limited to the fully read §§4.4.2–4.4.4 (printed pp. 146–151); §4.4.5 is not used or claimed as read. The Chapter 6 textbook record distinguishes the inspected relevant sections from the remainder of its 44-page PDF. The metadata search that surfaced a Scribd preview for a related Reddy title was not used; the selected source is identified only by the title printed in the University of Washington-hosted PDF.

## Item checkpoints

Each checkpoint records the claim, conventions, dependencies, sources, decision, validation state, unresolved obligations and next authoring action. The source-resolution object also stores each argument's exact dependencies and computed item level.

### post-fd-newtonian-fourier — authored conditionally

- Exact claim/conventions: at each \((\rho,T)\in\mathcal S\), adopt \(\tau=2\mu D_0+\zeta\theta I\), \(\sigma=-pI+\tau\), and \(q=-K\nabla T\), with \(\mu,\zeta\ge0\), \(\operatorname{sym}K\succeq0\), the tension-positive traction convention, and explicit SI units. The mathematical classification is used only under its stated linearity and proper-rotation equivariance hypotheses; it does not derive a physical law or measured coefficients.
- Dependencies: def-fd-quantity-and-frame-conventions and lem-fd-isotropic-linear-classification; dependency_level 2 because their current in-run levels are 1 and 0.
- Sources: Tong, Part II §§3.1–3.1.1, printed pp. 58–61, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §§6.5.1–6.5.3, printed pp. 242–245, https://courses.washington.edu/mengr503/Chapter_6.pdf. The full relevant text was inspected; both motivate formulations, while the postulate remains an adopted model choice.
- Decision/validation: no proof is supplied for a postulate. Carrier is complete; source-fetch stamp and scoped checks remain pending. Current def-fd-quantity and classification carriers have no Step 1 readiness records, so this item will be escalated.
- Next action: author post-fd-local-equilibrium and then the dependent model definitions.

### post-fd-local-equilibrium — authored conditionally

- Exact formulation: adopt a C2 specific-energy relation on an open \((v,s)\) state domain, with \(T=e_s>0\), \(p=-e_v\), and \(\rho=1/v\) evaluated pointwise as the local state response. SI units and the separate positive-\(e_{ss}\), convexity, global-inversion, empirical-validity and entropy-postulate boundaries are explicit.
- Dependencies: def-fd-simple-fluid-state and def-fd-quantity-and-frame-conventions; dependency_level 2 from current in-run levels 0 and 1.
- Sources: Tong, Part III §§4.4.2–4.4.3, printed pp. 146–149, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §§6.1.1 and 6.1.4, printed pp. 221–226, https://courses.washington.edu/mengr503/Chapter_6.pdf. These provide thermodynamic and constitutive context; the local-equilibrium use remains an adopted postulate.
- Decision/validation: the postulate has no deductive proof. Its current required batch-10 and batch-3 suppliers have carriers but missing current Step 1 readiness records, so this item will be escalated. Source-fetch stamp and scoped checks remain pending.
- Next action: author the barotropic and incompressible model definitions before their consuming predictions.

### def-fd-barotropic-euler-model — authored conditionally

- Exact definition: a positive-density C2 solution of mass conservation and the unforced Euler momentum equation with a specified P in C1((0,infinity)); stress is -P(rho)I in the tension-positive convention. The definition imposes no sign on P-prime and claims no existence result.
- Dependencies: post-fd-continuum-balances as a physical assumption; dependency_level 3 from its current in-run level 2.
- Sources: Tong, Part I §2.1, printed pp. 14–18, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids1.pdf; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §6.5.2, printed pp. 243–244, https://courses.washington.edu/mengr503/Chapter_6.pdf.
- Decision/validation: the exact current postulate carrier was inspected; its current Step 1 readiness record is missing, so the physical-balance dependency is unresolved. The definition and local pressure closure are fully stated; source-fetch stamp and scoped checks remain pending.
- Next action: author the incompressible Newtonian branch before kinetic-energy use.

### def-fd-incompressible-newtonian-model — authored conditionally

- Exact definition: constant rho0>0, div(u)=0, constant mu>=0, symmetric rate D, pressure multiplier, stress sigma=-pI+2muD and the local unforced momentum equation. The identity div(2muD)=mu Delta(u) is justified in the Definition from constant mu and div(u)=0; nu=mu/rho0 and SI units are stated. No boundary data or existence claim is included.
- Dependencies: post-fd-continuum-balances and post-fd-newtonian-fourier, both physical assumptions; dependency_level 3 from supplier levels 2 and 2.
- Sources: Tong, Part II §3.1.1, printed pp. 60–61, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids2.pdf; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §6.5.3, printed pp. 244–245.
- Decision/validation: the definition is complete. post-fd-continuum-balances has a present carrier with no current Step 1 record; post-fd-newtonian-fourier is authored here but inherits its escalated supplier records. This definition will be escalated. Source-fetch stamp and scoped checks remain pending.
- Next action: author the local entropy-production theorem and acoustic theorem against their exact math suppliers.

### pthm-fd-entropy-production — complete conditional argument

- Exact claim/conventions: under the full smooth Gibbs identity hypotheses, the local residual is \(\tau:D/T-q\cdot\nabla T/T^2\). Substitution of the adopted \(\tau=2\mu D_0+\zeta\theta I\), \(q=-K\nabla T\) gives the exact quadratic form; the independent pointwise coefficient test is iff \(\mu,\zeta\ge0\) and \(\operatorname{sym}K\succeq0\). The physical entropy inequality remains an adopted premise; the theorem checks compatibility and does not derive it.
- Dependencies: post-fd-continuum-balances, post-fd-local-equilibrium, post-fd-newtonian-fourier, lem-fd-gibbs-entropy-residual, lem-fd-newtonian-admissibility; dependency_level 5.
- Sources: Tong Part II §3.1.2 pp. 61–63 and Part III §§4.4.2–4.4.3 pp. 146–149; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §§6.1.4, 6.5.1–6.5.3, 6.7.2. Source formulations are context; the local algebra and supplier conditions are explicit.
- Conditional supplier status: the actual batch-10 Gibbs and admissibility carriers and proofs were inspected. Both current Step 1 records are missing. The Gibbs statement includes AC_omega and the full separate balance/contact assumptions; the localbalance carrier it uses now exists, but its current Step 1 record is missing.
- Validation: proof has steps 1.1–2.1; source-fetch stamp and scoped proof/layout/dependency checks remain pending. Readiness will be escalated on the exact current supplier records.
- Next action: author the acoustic theorem with the fixed-entropy pressure-response interface explicit.

### pthm-fd-acoustic-linearization — complete conditional argument

- Exact claim/conventions: the barotropic pressure is explicitly identified with the fixed-entropy restriction P(rho)=p(1/rho,s_b) of the adopted local state relation. The exact first variation at rest and sound speed c_s^2=v_b^2 e_vv are stated; positive c_s^2 yields verified plane waves. No sign is imposed by the base model and no finite-amplitude conclusion follows.
- Dependency adjustment: direct deps are def-fd-barotropic-euler-model, post-fd-local-equilibrium, and lem-fd-response-acoustic-algebra. The local-equilibrium physical assumption was added because the planned response lemma's P(rho) interface requires it. Item dependency_level is 4.
- Sources: Tong, Part III §§4.4.2–4.4.4, printed pp. 146–151, https://davidtong.org/pdfs/teaching/fluid-mechanics/fluids3.pdf; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §§6.5.1–6.5.2, printed pp. 242–244. The source linearization gives context; the item proof supplies the exact conditional derivative and substitutions.
- Conditional suppliers: the actual barotropic definition and response-lemma carriers were inspected. The current batch-3 and batch-10 Step 1 records are missing; post-fd-local-equilibrium is in this batch but its required batch-3/10 records are missing. The theorem therefore remains conditionally authored and will be escalated.
- Validation: proof has steps 1.1–3.1; source-fetch stamp and scoped checks remain pending.
- Next action: author the perfect-gas temperature theorem using the exact Gibbs identity and explicit dimensionless logarithms.

### pthm-fd-perfect-gas-temperature — complete conditional argument

- Exact claim/conventions: an explicit C2 fundamental relation is given on \(v>0,s\in\mathbb R\), with \(R,c_v>0\), dimensionless logarithms, reference temperature/density and explicit units. Under the full Gibbs-balance hypotheses the proof derives the temperature equation with viscous work, conductive flux and heat supply. Only the additional \(\tau=q=r=0\) branch has material entropy constancy; \(p=K(s_0)\rho^\gamma\) is trajectory-specific.
- Dependencies: post-fd-continuum-balances, post-fd-local-equilibrium, lem-fd-gibbs-entropy-residual; dependency_level 4.
- Sources: Tong, Part III §§4.4.2–4.4.3, printed pp. 146–149; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §§6.1.4 and 6.5.2. Tong explicitly does not derive its heat-transport equation there; the complete local temperature proof is supplied here from the exact conditional balance interface.
- Conditional supplier status: current balance and state-relation carriers/proofs were inspected; their batch-3 and batch-10 readiness records are missing. The Gibbs lemma's actual batch-8 local-balance carrier now exists, but it also has no current readiness record. This item remains escalated on those exact fresh record gaps.
- Validation: proof has steps 1.1–3.1; source-fetch stamp and scoped checks remain pending.
- Next action: author the kinetic-energy theorem using the exact current local-balance interface.

Correction to the perfect-gas item dependency inventory: def-fd-quantity-and-frame-conventions is recorded as an explicit formulation prerequisite because the theorem uses its material-derivative and SI conventions. Its level remains 4; the added batch-3 item edge is open pending its current readiness record.

### pthm-fd-newtonian-kinetic-decay — complete conditional argument

- Exact claim/conventions: for a smooth unforced constant-density incompressible solution with constant mu>=0, either fixed no-slip boundary or periodic fields, the kinetic-energy balance is \(E_k(t_2)+2\mu\int|D|^2=E_k(t_1)\). The proof uses rowwise stress divergence, \(L_{ij}=\partial_j u_i\), tension-positive stress, and cancellation of either zero boundary velocity flux or periodic opposite-face flux. No existence/global-regularity claim is made.
- Dependencies: def-fd-incompressible-newtonian-model and lem-fd-local-balance-equivalence; dependency_level 4 from item levels 3 and 2.
- Sources: Tong, Part II §3.1.2, printed pp. 61–63; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §6.5.3, printed pp. 244–245. Tong distinguishes kinetic-energy dissipation from total-energy conversion to heat; this item uses the conditional local balance interface and claims only kinetic energy.
- Conditional supplier status: the current batch-8 local-balance carrier and full proof are present; transport-and-density is current-ready. The local-balance and Cauchy-contact Step 1 records are missing. The batch-11 incompressible model definition is complete but escalated on its batch-3/batch-10 prerequisites.
- Validation: proof has steps 1.1–2.2; source-fetch stamp and scoped checks remain pending. Readiness will be escalated on the exact current supplier records.
- Next action: author both B-page counterexamples from these theorem outputs.

### cex-fd-negative-bulk-viscosity — complete conditional counterexample

- Exact refuted claim/witness: nonnegative shear alone guarantees nonnegative residual for arbitrary bulk coefficient. At T>0, mu>0, zeta<0, D=(theta/3)I with theta nonzero, g=0 and K=0, one has D0=0 and residual zeta theta^2/T<0. The witness is explicitly outside the adopted physical zeta>=0 range.
- Dependency: pthm-fd-entropy-production as physical-result; dependency_level 6.
- Sources: Tong, Part II §3.1.1, printed pp. 60–61; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §§6.1.4 and 6.5.3. The exact negative coefficient calculation is local and the source does not establish a material observation.
- Decision/validation: two counterexample steps are complete and the statement contains no inline links. The parent theorem remains escalated on its current mathematical supplier records; this counterexample will be escalated with it. Scoped checks and fetch stamps remain pending.
- Next action: author the negative-response acoustic counterexample.

### cex-fd-negative-response-acoustics — complete conditional counterexample

- Exact refuted claim/witness: a smooth positive-density rest state with negative fixed-entropy pressure derivative has only bounded linearized perturbations. The explicit C2 state function has T_b>0, e_ss=C>0, e_vv=-A<0, so c_s^2=-A v_b^2<0. A nonzero Fourier mode with alpha=sqrt(-c_s^2)|k| solves the exact first-variation system and grows as exp(alpha t) on R.
- Dependency: pthm-fd-acoustic-linearization as physical-result; dependency_level 5.
- Sources: Tong, Part III §4.4.4, printed pp. 150–151; An Introduction to Continuum Mechanics, 2nd ed., Chapter 6 §6.5.2, printed pp. 243–244. Those sources discuss the ordinary positive-response acoustic branch; the negative-response construction is proved locally from the current conditional linearization interface.
- Decision/validation: three counterexample steps verify state regularity, pressure-response sign, both linear equations and exponential growth. The parent acoustic theorem inherits missing batch-3/batch-10 readiness records; this item will be escalated with it. Source-fetch stamp and scoped checks remain pending.

## Final live authoring and verification refresh — 2026-10-23

This section supersedes the earlier item checkpoint readiness and pending-validation sentences. The current item carriers and supplier records were re-read after authoring; all ten owned Step 1 records were created without `--owner`. Ready hashes are current. The table gives every direct dependency and the computed in-run level.

| Item | Direct dependencies | Level | Final readiness |
|---|---|---:|---|
| post-fd-newtonian-fourier | def-fd-quantity-and-frame-conventions; lem-fd-isotropic-linear-classification | 2 | ready |
| post-fd-local-equilibrium | def-fd-simple-fluid-state; def-fd-quantity-and-frame-conventions | 2 | ready |
| def-fd-barotropic-euler-model | post-fd-continuum-balances | 3 | ready |
| def-fd-incompressible-newtonian-model | post-fd-continuum-balances; post-fd-newtonian-fourier | 3 | ready |
| pthm-fd-acoustic-linearization | def-fd-barotropic-euler-model; post-fd-local-equilibrium; lem-fd-response-acoustic-algebra | 4 | ready |
| pthm-fd-perfect-gas-temperature | post-fd-continuum-balances; post-fd-local-equilibrium; def-fd-quantity-and-frame-conventions; lem-fd-gibbs-entropy-residual | 4 | escalated |
| pthm-fd-newtonian-kinetic-decay | def-fd-incompressible-newtonian-model; lem-fd-local-balance-equivalence | 4 | ready |
| pthm-fd-entropy-production | post-fd-continuum-balances; post-fd-local-equilibrium; post-fd-newtonian-fourier; lem-fd-gibbs-entropy-residual; lem-fd-newtonian-admissibility | 5 | escalated |
| cex-fd-negative-response-acoustics | pthm-fd-acoustic-linearization | 5 | ready |
| cex-fd-negative-bulk-viscosity | pthm-fd-entropy-production | 6 | escalated |

The three escalations are readiness-only blockers inherited from current batch-10 escalation records. Their native `owner` flags are false; references to owner reconciliation mean those external items are outside batch 11's edit scope and are for their owner to resolve. The Gibbs carrier's proof step 3.1 explicitly translates an arbitrary nonempty open interval to one containing zero, and the current `lem-fd-local-balance-equivalence` and its direct transport/contact prerequisites have ready records. The Gibbs Facts & Assumptions [L1] still says the local-balance record is missing, which is now false; its stored escalation reason also describes absent transport, unexpanded componentwise application, and missing recentering that are contradicted by the present carriers/proof. I found no remaining mathematical gap in the current time-translation argument, but do not overwrite either out-of-scope escalation. `lem-fd-newtonian-admissibility` remains escalated through Gibbs. The perfect-gas and entropy items therefore remain explicitly conditional, and the bulk-viscosity counterexample inherits the entropy item escalation.

The source ledger now records four full-text sources, locators and 22 harvested results with dispositions. Tong's Part I–III chapter PDFs and the University of Washington-hosted *An Introduction to Continuum Mechanics*, Chapter 6, were fetched and inspected over the listed sections; the notes above preserve the complete read extents and the source-specific limitations. The oversized combined Tong PDF remained a failed candidate and was recovered using the author's complete chapter PDFs. `source-fetch-check --stamp` verified all four selected sources (Part I 58 pages; Part II 56; Part III 70; Chapter 6 44), with no documented drops.

Final scoped checks after item edits:

- `source-fetch-check`: 4/4 sources fetch-verified and resolved; 0 newly stamped on the final pass.
- `coverage-checklist`: 1 A page, 22 harvested results, 0 errors and 0 warnings.
- `proof-contract --strict`: all 10 item contracts checked, 0 errors and 0 warnings.
- `proof-layout` on the ten changed items: 18 numbered steps, 0 defects.
- `rendercheck` on the ten item files and both page files: 12 files checked, 0 errors and 0 warnings. Both pages remain YAML-frontmatter-only with empty bodies.
- Uninterrupted-statement audit: all 10 complete statement/definition/formulation sections have no hyperlinks, and each is immediately followed by its matching references section.
- Focused `depcheck`: 10 assigned items and their dependency closure checked, 0 errors and 0 warnings.
- Scoped dependency-level check: 23-item transitive closure across 6 pages, no errors; each assigned item's stored level matches the computed level.
- Cross-batch dependency evidence: JSON array with 16 exact edges (2 page, 14 item), all required edges present, nonempty evidence, and valid statuses. `fd-f01` is verified; `fd-mf03` remains open because its Gibbs and admissibility items have current escalated records.

The shared run-wide `batch-dependency-levels.mjs check` still reports `Stale batch dependency levels for fluid-dynamics-all-47-2026-10-23; recompute before authoring`; that shared record was not changed. The run-wide item-level check now reports one unrelated empty inventory, `fd-ples01-examples`; it is outside batch 11 and was left to its owner. The scoped batch-11 dependency-level check passes, and the assigned page-level plan remains batch level 3 with prerequisite batches 3, 8, and 10. No tests were run.
