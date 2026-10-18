# Batch 33 Step-3a adjudication

Run: `numerical-analysis-remaining-71-2026-10-17`; group: `batch-33`.

The scope owes exactly `touched:33:lem-pe03-hll-half-cell-riemann-averages`. Reader findings, refuter flags and page obligations are empty. Five risk-only reviews follow in the generated item order.

## Level 3 — HLL half-cell averages

Verdict: `amended_repair`; repair confidence 1. The pre-reader raw hash is `bcac2e8e8e676c7a8971acda8697aa5dc5116cf5b3916e92c2af6ed2f25e509a`; reader-post/current-at-entry is `d5e4642c10b26a07abbfcc933d47b820128bd78c197354f4610dbe61b02f4447`. The exact pre-reader bytes are recovered from `research/numerical-analysis-remaining-71-2026-10-17-owner-planning-integration/precheck-marker-final-before/items/lem-pe03-hll-half-cell-riemann-averages.md` by replacing only `precheck: pending` with `precheck: pass`; the resulting SHA256 matches the immutable pre snapshot. Thus the historical mathematical delta is known, not inferred solely from hashes.

The reader added the proved middle-state supplier and renumbered the facts. Retain that repair. The current supplier `thm-hll-flux-is-consistent-and-conservative`, Statement and steps 1.1–2.1, explicitly distinguishes the assigned HLL model flux from the physical flux at U*. Amend F2 to preserve that qualification, resolving the batch-30 owner alert; synchronize its exact contract quotation and the missing manifest dependency/provenance mirror. No Statement or Definition changed.

Independently checked the HLL definition, finite-volume update definition, supplier theorem and its Rankine–Hugoniot prerequisite. Direct substitution gives the two assigned-flux balances. Half-cell lengths are nonnegative under the stated one-sided CFL bounds, and their half-sum has exactly the finite-volume update coefficients. At zero timestep the initial step profile gives the original left/right states, avoiding any need to evaluate x/t at t=0; at CFL equality a portion has zero length. Strictly straddling speeds give a positive denominator; equal states give U*=U. No exact-fan speed enclosure, physical-flux equality or state-domain membership of U* is assumed.

Source checked: [Ketcheson–LeVeque–del Razo, HLL derivation](https://www.clawpack.org/riemann_book/html/Shallow_water_approximate.html), HLL solver / Derivation and implementation, HTML lines 365–424, especially the total-wave conservation equation and middle-state formula at 369–372. This supports the assigned two-wave model; no shallow-water positivity claim is imported. Local algebra supplies the full argument.

Closed defects recorded at `3a-adjudicate`: `na71-b33-3a-hll-middle-state-citation` (nonfatal missing supplier identification) and `na71-b33-3a-hll-model-flux-qualification` (nonfatal inaccurate physical-RH phrasing). The existing calculations already close the algebra; neither is a false half-cell Statement. No judge record is present. Risk tier MODERATE requires no separate high-risk review. Focused checks passed as recorded below.


## Level 4 — convex scaling limiter

Risk review complete, no defect: Read all three proof steps and the actual algorithm, margin-domain definition, convexity/closedness proposition and ideal-gas definition. The finite nonempty node set and admissible mean make 0 feasible; continuous node maps into closed K make the feasible set compact in [0,1], so its maximum is attained, including a boundary mean and theta=0. A common scalar theta preserves the weighted mean exactly; gamma>1 and epsilon>0 give positive density and pressure. Singleton nodes, identical candidates, theta=1 and already admissible nodes are sound. Strict error <delta excludes the complement whenever the target distance is >=delta; this proves inactivity only, without importing a general accuracy theorem or between-node positivity. No AC or iff claim. Reader/refuter have no finding. Zhang–Shu §2.2, (2.4)–(2.11), Lemma 2.5, printed pp.9–10 supplies scaling/convexity context; their pressure floor differs from this internal-energy floor by gamma-1, already reflected locally. No defect or unmet prerequisite.

Source inspected: [Zhang–Shu](https://www.math.purdue.edu/~zhan1966/research/paper/euler.pdf), §2.2, printed pp.9–10, including the full proof of Lemma 2.5; the local theorem proves its own compactness and strict-margin inactivity claims. No general smooth-accuracy theorem is used.


## Level 5 — ideal-gas LLF positivity

Risk review complete, no defect: Read all three steps and all six cited interfaces, including the complete LLF split-state and convexity proofs and the amended half-cell proof. For gamma>1 and positive initial internal energy, c>0 implies a>|u| and positive denominators. Independently expanded e_delta=e*x-delta^2*p^2/(2*rho*x); x>=c/a gives the relative subtractive term <=(gamma-1)/(2*gamma)<1, proving strict positivity for both signs even when a=|u|+c. The symmetric HLL middle state is exactly the average of U_L+F_L/a and U_R-F_R/a; convexity then the half-cell theorem prove the update. Local face-dependent speeds suffice; 2*nu*a<=1 includes equality and nu=0. Equal neighboring states and zero convex weights remain admissible. No exact nonlinear speed enclosure, arbitrary asymmetric HLL branch, necessary CFL, fixed positive floor, or entropy claim is inferred. No AC or iff claim; reader/refuter have no findings. Zhang–Shu Remark 2.4, printed pp.7–8, independently supplies the same splitting mechanism; the local proof fixes its own pressure convention and establishes the full variable-speed claim. No defect or unmet prerequisite.


## Level 5 — conservative positivity rescaling

Risk review complete, no defect: Read both verification steps and all four suppliers, already independently checked in the limiter review. The two equally weighted candidate vectors have mean (1,0,1) in K_(7/5,1/2), although the original node internal energies are -7; the algorithm permits arbitrary candidate vectors. At theta in [0,1], scaled internal energy is 1-8*theta^2 and density is 1, giving exactly [0,1/4] as the feasible set. Theta=0, theta=1/4 and theta=1 checked: the maximum outputs (1,+/-1,1), internal energy 1/2, pressure 1/5, and unchanged mean. The iff calculation is on the declared parameter interval. No claim evaluates physical pressure on the original inadmissible states, no positivity between nodes and no AC. Reader/refuter have no finding; no defect or unmet prerequisite.


## Level 5 — entropy-stable under-resolved shock

Risk review complete, no defect: Read all three verification steps and all four cited suppliers, including the full semidiscrete proof. Quadratic entropy satisfies q_prime=eta_prime*f_prime and gives v=u, psi=u^3/6. The symmetric polynomial EC flux is continuous and diagonal-consistent even at equal/zero states; its jump identity factors the difference of cubes. D=1 is positive definite and the general residual is -(u_R-u_L)^2/2. At 1->0, RH speed 1/2 lies between 0 and 1 and the entropy production is -1/12; the numerical face flux is 2/3 and residual -1/2. On the declared four periodic cells, the two adjacent updates are 11/12 and 1/3; the other periodic interface does not enter these two updates. The supplier cell residual is the half-sum of adjacent face defects divided by mesh width, so semidiscrete stability follows including zero jumps/dissipation. No forward-Euler entropy theorem or convergence/shock-resolution rate is claimed. Tadmor §§4.1–4.3, (24)–(28), printed pp.477–479 independently checked; its stated positive-definite assumption can be weakened to semidefinite by the local quadratic-form argument. No AC, iff obligation, reader/refuter finding, defect or unmet prerequisite.

Source inspected: [Tadmor](https://math.umd.edu/~tadmor/references/files/Tadmor%20entropy%20stable%20schemes-r%20handbook2016.pdf), complete §§4.1–4.3, printed pp.477–479 / PDF pp.11–13. The full local cell-residual derivation was independently checked. The finite Burgers arithmetic is authored locally.


## Level 6 — near-vacuum Euler update

Risk review complete, no defect: Read all three verification steps and all seven actual suppliers; the split, convexity, HLL half-cell and positivity theorem proofs were checked at lower levels. Independently recomputed m=+/-10^-10, kinetic energy 5*10^-13, internal energy (5/2)*10^-12 and total E=3*10^-12 at gamma=7/5. Sound speed squared is 7/50000<(3/250)^2, so |u|+c<11/500 and a>0; nu*a=1/4 and 2*nu*a=1/2. The two states adjacent to the displayed U_L->U_R interface are 3/4 of their original state plus 1/4 of that interface middle state. The other periodic U_R->U_L face has its own middle state; the same theorem applies there since all four inputs obey the identical bound. Exact rational recomputation of all four updates confirms positive density and pressure. Equal-state faces give the original middle state. This finite example does not assert a uniform floor as inputs tend to vacuum, admission of exact vacuum, a nonlinear exact-fan bound, shock accuracy or entropy stability. No AC or iff claim, reader/refuter finding, defect or unmet prerequisite.


## Final checks and disposition

The sole touched obligation is `amended_repair`, with repair confidence 1 and two closed subject-matching nonfatal ledger rows. Exactly one decision is written; risk-only items add no decisions. Reader-findings JSON and refuter JSON SHA256 values match the scope bindings. All five HIGH/CRITICAL risk reviews are complete. Final item raw SHA256: `efe4cf849220892c221b4b4e42127a82411c6d2c10e2155732147700a2ae9330` (local evidence only; engine decision stamps remain engine-owned).

- Reflow: unchanged. Precheck on the changed half-cell item: 1 proof passed, 0 failures.
- `node tools/proof-contract.mjs research/numerical-analysis-remaining-71-2026-10-17-batch-33.proof-contracts.json --strict`: 11/11 items checked, 0 errors, 0 warnings.
- Required initial risk report and final `--require-reviewed` report: 11 items routed, 0 errors; all five required reviews complete.
- Rendercheck on the sole changed item: renderer YAML and every KaTeX expression passed.
- Final required `node tools/proof-layout.mjs items/lem-pe03-hll-half-cell-riemann-averages.md`: 1 item, 3 steps, 0 defects. No item edit followed it.
- Exact rational near-vacuum recomputation: outer two cells have density 49/4400000000 and pressure 13807/10780000000000000; inner two cells have density 39/4400000000 and pressure 2549/2860000000000000. All are positive. This finite computation supplements the proved positivity theorem.
- Ledger append: exactly two rows appended through the locking tool; generated view refreshed. Independent coverage check: 1/1 obligation, two unique fixed rows with correct subject and stage, and five complete risk reviews. An initial local digest assertion compared the narrative reader report against the scope's reader-findings hash; checking the tool's input definition corrected the comparison to the findings JSON, which matches. No source or routing artifact was changed for this diagnostic.

Only the half-cell item was edited. Its contract citation, manifest dependency/provenance and owned cross-batch dependency row were synchronized; the other contract changes are the five required risk reviews. The shared frontier dependency ledger records closure of batch 30's F2 qualification handoff while preserving its historical record. No Statement or Definition changed, no outside consumer needs repair, no published defect was identified, and published content remained read-only. Stable IDs and existing withdrawal proposals are preserved.

No local blocker or uncertainty remains. No agent dispatch, judgment, certification, hash stamping, engine transition, publication, push or commit was performed. The engine owns the ensuing gate battery and decision stamps. Source checks cover the relevant cited sections, not the entire bibliography: Zhang–Shu's relevant Section 2.2 through Lemma 2.5 was extracted with PyMuPDF after `pdftotext` proved unavailable. The source readings and independent local derivations described above are the evidence actually used.
