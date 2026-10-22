# Batch 3 Step 3a adjudication

Run: `physics-non-fluid-129-2026-10-21-r2`; group: `batch-3`.

## Completed items in dependency order

### def-emx-continuous-chain-integral (level 0)

Accepted reader title correction; Definition unchanged. Reviewed all four proof steps and the 21 exact direct supplier statements. The slot coefficient is continuous by finite product estimates; extension independence follows on the affine interior and then its closure. For k=1 endpoints have content zero; for k>=2 the compact face graphs have content zero and finite union yields the Jordan boundary criterion. Compact-Jordan integrability supplies finite values, including zero chains and rank-deficient maps. Integral linearity on Jordan domains follows by zero extension to one common rectangle. No AC or physical assumptions are used. The reader title specifies the existing Euclidean domain without changing the Definition.

Current carrier matched the post-reader SHA256 d7cfb4552c63218bb68ec55d638565ed426495908d77e2fdc72ac7c70668cdf8. The pre-reader hash differs. No diagrams. Risk review complete.

### def-emx-excitation-form (level 1)

Accepted title correction to free-current forms. Reviewed all three steps and every direct prerequisite. The independent F, G and current forms match F0i=-Ei/c with dt=dx0/c; the free/bound decomposition is the supplied C2 material convention. Wedge components carry Wb or C after integration. Continuous coefficients use the level-0 integral; the C1 coordinate derivative is explicitly defined rather than obtained from the smooth-only supplier. No constitutive or current-conservation theorem is asserted by this definition. Title correction removes unsupported conserved; public Definition and scope unchanged. No empirical input or AC.

Post-reader raw SHA256 matched f67e0402d94349168d83f032ea18e6803740be9a83c9cec057c6ba8e8d6475bb. No diagrams. Risk review complete.

### lem-emx-c1-stokes-on-standard-3-simplex (level 1)

Amended reader repair: retain its compact-Jordan justification and add the zero-width section branch. Reviewed all three steps against the eight direct suppliers. Compact Jordan domains are supplied by the level-0 proof; continuous section integrands meet Fubini. Confirmed refuter:3:2 as nonfatal: Newton-Leibniz requires a<b. Added the explicit zero-width singleton case; no claim changes. Lower faces have contributions -f1, -f2, -f3 in increasing remaining coordinates, and the upper (u2,u3) pullback is f1+f2+f3 with positive outward orientation and unit absolute affine Jacobian. All cases, including the collapsed sections, are now covered. No AC or physics premises.

The current pre-edit raw hash matched the post-reader hash 49ae6d05df393875d862204b48fd1e63b6e2655229e2435ad0fafff97ec4f22f. Refuter observed hash differs from that raw hash; the exact quoted defect was present in the independently inspected current step. No claim of matching its undocumented hash convention is made. Statement unchanged, so consumer interfaces remain valid. Risk review complete.

### pthm-emx-exterior-maxwell

Reviewed every coefficient and all four proof phases against all direct suppliers. Both directions use independent spatial and dt coefficients: dF has dt wedge (partial_t B+dE), dG has dt wedge (partial_t D-dH), matching the negative current term. Bound/free algebra yields Maxwell without material closure. Six Hodge basis terms give star F=mu0 c G; C2 alone licenses mixed-partial cancellation in d(dG). The prism uses identical ordered face maps with coefficients +,-,+, so internal faces and then cycle side faces cancel as maps. Smooth extensions into open U exist and pullback naturality follows from the displayed chain rule and six second-derivative cancellations, permitting the repaired C1 Stokes lemma. t0<t1 covers all distinct times in an interval; equality is trivial. No AC, moving-cycle assertion, singular sources or empirical inputs. Accepted reader title and smooth-extension repair; Statement unchanged.

Risk review complete; no diagrams.

### pthm-emx-duality-vacuum

Reviewed both steps and all four prerequisites. The adopted smooth vacuum postulate is carried through the exterior-Maxwell supplier; field-strength here is a Maxwell solution under that postulate. C1 regularity is preserved by the fixed constant-coefficient star. Constant theta permits linearity of d, and star squared=-id gives both rotated equations. For nonzero current dFtheta=sin(theta) mu0 c J; theta with zero sine is correctly excluded from that failure assertion. No material or boundary invariance is inferred, and no empirical inputs or AC occur. Unchanged carrier; risk-only obligation, no decision added.

Risk review complete; no diagrams.

### ex-emx-topological-flux-sector (level 3)

Amended reader repair; retained its explicit radial inverse. Confirmed refuter:3:1 as fatal for the pre-repair cycle: distinct reversed simplex maps do not cancel in the free singular chain space. Replaced the all-positive outward parametrizations by the signed boundary of the fixed ordered tetrahedron (determinant -16 a^3), radially mapped facewise; double omissions now cancel identical ordered edge maps. Rechecked radial inverse, differential sign, and smooth extensions away from zero. Added exact affine-change and content-zero suppliers to pass from signed compact-simplex integrals to positive open patches in the finite-parametrization theorem. Scaling gives beta period 4 pi and Phi flux for either sign of nonzero Phi. The smooth closed period obstruction applies to z_t; smooth closed full-space extension is excluded by Poincare plus Stokes. No source value at zero or measured input is introduced. Finite explicit construction uses no AC. The only external reference consumer is the assigned companion page, whose actual flux/potential assertions remain correct without editing.

The pre-edit raw hash matched post-reader 8571eb650337a5a639e4d7a2662baab8fe130500415f811f300d8628d4e6b378. Refuter quoted current defect accurately; its observed hash is not asserted to use the raw-file convention. Public Example changes only the defective cycle construction and preserves the physical claim. `rg -l` across items and library found no item consumer and only `emx-premetric-maxwell-examples`; reviewed that same-batch page and no repair or propagation is necessary. No diagrams. Risk review complete.

### ex-emx-duality-pec-failure (level 4)

Accepted reader title correction. Reviewed both steps against all five direct suppliers. Constant smooth E=0 and B=B0 e1 solve zero-source vacuum Maxwell on the half-space and extend continuously to its plane boundary. The stipulated PEC condition is exactly the tangential-electric projection, not a finite-conductivity law. star(dx2 wedge dx3)=dx0 wedge dx1 and dt=dx0/c give Etheta=-c B0 e1 at the quarter-turn. It is tangential, nonzero by B0!=0 and c>0, with correct V/m units. The duality supplier applies to the source-free interior; boundary invariance is independently disproved. No AC or observations. Reader title correction accurately restricts the claim and leaves the Example unchanged.

Risk review complete. All seven carriers and two context pages contain no TikZ/tikzcd diagrams; the explicit algebra needs no additional diagram.

## Decisions and closed defects

Exactly eight decisions: six touched carriers and two refuter findings; no reader findings or page-only obligations. The untouched duality theorem receives its required risk review only. Nine confirmed defects are recorded as closed `fixed` rows at `3a-adjudicate`, including the accepted reader corrections; both refuter decisions reference exactly one row. All completed repairs have `repair_confidence: 1`.

- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-euclidean-title`: The reader restricted the title to Euclidean domains, the exact open V subset R^n scope already present in the Definition. Reverse title substitution using the old batch manifest reproduces the pre-reader raw hash. Accept the precise title; synchronize the manifest.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-free-current-title`: The former conserved-current title asserted a property not established by this definition. The current definition constructs the free-current form independently of field equations. Reverse old-title substitution reproduces the pre-reader raw hash. Accept free-current title; synchronize the manifest.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-stokes-jordan-domains`: Reader step 1.1 explicitly invokes compact Jordan status of T and each projection D_i before Fubini; level-0 supplier proves precisely this. This was an immediately recoverable omitted domain check. Retain reader compact-Jordan justification.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-stokes-singleton-section`: Refuter:3:2 is correct: Newton-Leibniz has a<b, while upper endpoint 1-sum(u_j) can be zero. The same overbroad application was independently present in current post-reader step 1.1. Apply Newton-Leibniz only to positive-length sections; the singleton integral and endpoint difference are separately zero.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-metric-closure-title`: The item proves metric-free exterior equations and a metric-dependent vacuum star closure; its corrected title distinguishes these claims. Retain title and synchronize manifest.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-prism-extension`: The local C1 Stokes lemma requires a neighborhood form. The reader explicitly constructs smooth extensions of prism composites into open U, using the actual singular-simplex definition; the image can be restricted into U. Retain the reader neighborhood-extension justification in step 4.1.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-radial-face-inverse`: The finite-parametrization supplier requires diffeomorphisms. The reader supplies the exact inverse x -> h x/(n dot x) on each radial face patch with positive denominator; it is smooth and composes to the identity. Retain the explicit inverse.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-ordered-singular-cycle`: Refuter:3:1 is correct for the former all-positive outward-face sum. Reversed shared-edge maps are distinct generators. Independently inspected current post-reader construction retained that defect. Use z=sum_i (-1)^(i+1) q_a sigma_i in fixed vertex order; prove determinant -16 a^3 and identical-edge cancellation, then justify signed patch integration by affine transposition and content-zero boundary suppliers.
- `physics-non-fluid-129-2026-10-21-r2-3a-batch-3-pec-title`: The title now names the exact ideal PEC boundary and quarter-turn calculation, rather than an unrestricted conductor-boundary claim. Reverse old-title substitution reproduces the pre-reader raw hash. Accept title and synchronize manifest.

## Sources, scope and limitations

The rendered reader report and findings (`reader-3.md`, `reader-findings-3.json`), `refute-3.json`, current scope/order, and pre/post snapshots were read. All seven initial current raw hashes exactly matched the post-reader snapshot. Three title-only preimages were independently reconstructed from the old manifest titles and matched their pre-reader hashes. Reader proof corrections were checked in the current arguments against exact supplier hypotheses; no historical proof preimage was invented. Refuter observations are retained as findings about the defective construction/application, not assertions that the repaired bytes remain defective.

Read the actual published/imported direct supplier Statement/Definition sections used by this batch, and the complete current batch-2 star, square, radial sphere-period and potential-obstruction arguments. Relevant batch-2 manifest and contract derivations were also inspected. Published mathematical suppliers are accepted at their stated proof status; this is no independent audit of every transitive proof. No imported or published bytes were edited and no defective published supplier was identified; no published-ledger entry is required.

Checked the relevant primary PDF text passages independently through the web PDF view: [Beisert, Elektrodynamik](https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf), printed §§5.3–5.4, equation (5.10), §6.3–6.4, equations (6.14)–(6.16), and §8.5, equations (8.28)–(8.29). The displacement convention and vacuum rotation match after alpha=-theta. The exact local star calculation fixes the SI factor. No full-book reading is claimed.

Checked [Hehl–Itin–Obukhov](https://arxiv.org/pdf/physics/0610221), §§2–4, equations (1), (3)–(5), (9)–(11); §6, (25)–(26); and §11, (76)–(85). These support exterior-form context, separate vacuum metric closure, and free/bound splitting. Their unqualified global inference of excitation from closed current is not used: local G is constructed from D and H. Their optional magnetic-source sector is not adopted. Local coordinate proofs, including the repaired cycle, carry the deduction. No source-backed observation, statistical precision or empirical certainty is asserted.

The mathematical helpers' Park/Lebl/Leibman citations are explicitly indirect pointers through inspected local suppliers. This adjudication does not claim independent full-text reading of those sources or attribute the local C1 Stokes construction to them. All claims here remain conditional model deductions with no measured inputs. The assigned pages retain their scope and empirical qualifications.

## Local checks and handoff

- Initial risk-report routed all seven items (five CRITICAL, two HIGH); each received an item-specific complete risk review before proceeding upward. Final `--require-reviewed` succeeds.
- Reflow on the two Alpha-edited items: unchanged. Precheck: 2 checked, 0 failures. Rendercheck: 2 files pass actual YAML/KaTeX parsing.
- Strict proof-contract check: 7/7, 0 errors, 0 warnings.
- Final single batched proof-layout invocation after item edits and reflow: 2 items, 8 steps, 0 defects.
- Batch manifest titles and changed cycle Statement/dependencies synchronized; affected derivations, citations and finite cancellation check updated. No stale judge record was present.
- Frontier dependency input enriched with current proof evidence; refresh completed and deduplicated. Stable IDs and inventory preserved.

No mathematical blocker or outside consumer repair remains. The engine owns decision hashes, the gate battery and stage transition; no judge, stamp, self-certification, dispatch, publication or commit was performed.

Final Alpha-edited raw SHA256 values:
- `lem-emx-c1-stokes-on-standard-3-simplex`: `5aec916df7e7be2e1a17b8c473e61be1a6d8eb0243695826b2361cf8b5ccc129`.
- `ex-emx-topological-flux-sector`: `813b5ae4ea1d6482e8014e6cbf5d05ccc86f74e0153dfbb183d8508ff223accf`.
