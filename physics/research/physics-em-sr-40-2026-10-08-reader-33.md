# Reader 33 — batch 33

Run: `physics-em-sr-40-2026-10-08`. Role: independent Step 5a reader. This report records conditional mathematical review and local repairs, not judgment, publication, or empirical confirmation.

## Assigned inventory and page verdicts

Both pages were opened in full:

- `library/classical-electromagnetism/em-vacuum-waves-and-polarization.md` — **sound after the recorded repairs**. The summary now identifies complex amplitudes and real superposition coefficients and correctly allows a vanishing interference term. Its wave equation, constrained smooth Cauchy theory, energy branch, polarization convention, and deterministic interference interpretation match the reviewed items.
- `library/classical-electromagnetism/em-vacuum-waves-and-polarization-examples.md` — **needs the count correction below**. Its four leaf items' field calculations were checked. The B-page prose was not edited; its raw SHA-256 remains `7db60cf95046ab885ace56c62b72d77b12cd3e48c5713425c0593ec62d798be0`, equal to the pre-reader fingerprint.

Every assigned item was opened, including frontmatter, definitions/statements, facts, complete proof/verification, source notes and remarks:

| Item | Review outcome |
|---|---|
| `def-em-plane-wave-definition` | Repaired smoothness justification and supplier attribution. |
| `pthm-em-vacuum-wave-equation` | Repaired derivative-order wording; the implication and explicit nonconverse witness are valid. |
| `pthm-em-plane-wave-maxwell` | Carrier unchanged. Checked the four amplitude equations, both directions, zero/off-dispersion cases, transverse two-dimensional solution family and pointwise field relations. |
| `def-em-polarization-definition` | Made the ellipse definition explicit, supplied the exact Gram criterion for zero cross product, and corrected the source locator. The adopted handedness sign is preserved. |
| `pthm-em-general-wave-ivp` | Repaired cone and endpoint scope, a boundary inequality, and signed substitution justification. The smooth arbitrary-growth construction and finite-energy conservation branch are retained. |
| `pthm-em-wave-energy-average` | Repaired complex norm reasoning. Checked arbitrary complex amplitudes, conjugate-index stress, signed normal momentum flux, zero energy and nonzero-wave box divergence. |
| `pthm-em-classical-interference` | Repaired amplitude shadowing, norm/average definitions and the unconditional nonvanishing wording. Checked the phase sign in the cross term and copropagating specialization. |
| `ex-em-polarization-examples` | Corrected the number of listed amplitudes and the source locator. All six substitutions, including both circular signs, zero, and the dependent-amplitude segment, were checked. |
| `ex-em-plane-wave-infinite-energy` | Qualified the title by nonzero amplitude and repaired the finite-limit wording and compact-support integration argument. The explicit lower bound is preserved. |
| `texp-em-radiation-pressure-example` | Defined finite-patch area, force vector and signed pressure consistently, and corrected two citations. Both stresses and conditional pressures are preserved. |
| `ex-em-two-beam-fringes` | Repaired basis/amplitude symbol collision and the copropagating vector amplitude and polarization conditions. Checked fringe phase, period, extrema, visibility and zero-angle limits. |

The batch manifest, owner authoring direction, reader brief, schema, workflow, content model, mathematical import manifest and assigned proof contracts were opened as evidence. Author decisions and existing contract dispositions were not treated as mathematical verdicts.

## Opened prerequisite inventory

Paths below are `items/<id>.md`. This is the actual substantive reading inventory, not the much larger transitive graph discovered mechanically.

The following local suppliers' definitions/postulates or relevant complete arguments were read:

- `def-em-complex-plane-wave`, `def-em-lab-geometry`, `def-em-si-conventions`, `def-em-fields`, `def-em-sources`, `post-em-vacuum-maxwell`.
- `lem-em-parameter-integrals`, `lem-em-spherical-mean-family-smoothness`, `lem-em-spherical-mean-wave-identity`, `thm-em-wave-cauchy-kirchhoff`.
- `def-em-vacuum-energy-flux`, `pthm-em-poynting-balance`, `def-em-vacuum-stress-momentum`, `lem-em-quadratic-stress-identity`, `pthm-em-momentum-balance`, `lem-em-period-average`, `pthm-em-linear-superposition`.
- `post-em-lorentz-coupling`, specifically its continuum force/power adoption and exclusions. No particle-dynamics audit is claimed.

The following suppliers were opened at their exact Definition or Statement; their complete foundational proofs were not independently audited:

- Algebra and coordinates: `def-euclidean-inner-product`, `def-cross-product-in-r3`, `def-complex-conjugate-real-imaginary-part-and-modulus`, `thm-complex-numbers-form-a-field`, `lem-cross-product-is-bilinear-alternating-and-orthogonal`, `thm-cross-product-norm-is-the-two-vector-gram-determinant`, `def-countable-choice`.
- Exponential and trigonometric calculus: `def-complex-exponential`, `thm-complex-exponential-is-entire-with-derivative-itself`, `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann`, `thm-eulers-formula`, `thm-quarter-turn-values-and-shift-formulas`, `thm-complex-exponential-addition-and-real-extension`, `cor-complex-exponential-cartesian-form-modulus-and-eulers-identity`, `lem-complex-conjugation-and-modulus-laws`, `thm-kernel-and-fibres-of-complex-exponential`.
- Differentiation: `def-ck-euclidean-maps-and-diffeomorphisms`, `def-directional-and-partial-derivatives`, `def-divergence-and-curl-of-a-c1-vector-field`, `def-laplacian-of-a-c2-function`, `thm-clairaut-schwarz-mixed-partials`, `cor-the-curl-of-a-curl-of-a-c2-field`, `thm-chain-rule-for-total-derivatives`, `thm-algebra-of-derivatives`, `thm-ck-euclidean-maps-closed-under-algebra-and-composition`, `thm-continuous-partial-derivatives-imply-total-differentiability`, `thm-total-derivative-computes-directional-and-partial-derivatives`, `thm-ftc-second-part`, `thm-newton-leibniz-with-interior-derivative`, `cor-mean-value-theorem`, `thm-heine-borel-rn`.
- Integration: `def-multidimensional-rectangle-and-volume`, `def-multidimensional-darboux-integral`, `def-riemann-integral-over-a-jordan-set`, `thm-continuous-functions-on-compact-jordan-sets-are-integrable`, `thm-riemann-fubini-on-product-rectangles`, `thm-continuous-on-a-rectangle-is-riemann-integrable`, `def-surface-integral-on-a-compact-c-one-hypersurface`, `lem-surface-integral-is-independent-of-c-one-boundary-charts`, `lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness`, `thm-divergence-theorem-for-bounded-c-one-euclidean-domains`, `thm-divergence-theorem-for-bounded-piecewise-c-one-domains`, `lem-euclidean-balls-are-bounded-c-one-domains`, `lem-unit-sphere-is-lebesgue-null`, `lem-euclidean-chart-measure-agrees-with-polar-surface-measure`, `lem-first-moment-of-the-unit-sphere-vanishes`, `thm-polar-coordinates-formula-for-lebesgue-measure`.
- Cauchy/constraint and geometric interfaces: `pthm-em-gauss-constraint-propagation` (smooth clause), `thm-domain-of-dependence-and-local-uniqueness`, `def-forward-and-backward-wave-cones-domain-of-dependence-and-influence`, `def-inertial-frame-and-inertial-chart`, `def-spatial-euclidean-structure-of-an-inertial-frame`, `def-sr-causal-reachability-in-affine-minkowski-space`, `thm-sr-future-cone-and-flat-domain-of-dependence`.

Core suppliers were used before their consumers: encoding/calculus before plane-wave algebra and polarization; parameter/spherical-mean/Cauchy theory and balance before the Maxwell IVP; stress and averaging before energy/interference and the examples. Follow-up reads resolved exact cited clauses rather than substituting scaffold decisions for arguments.

## Repairs and evidence

1. **Plane-wave definition, Definition (a) and Well-definedness.** The old text said `def-em-complex-plane-wave` proved joint smoothness, while that supplier explicitly says it asserts no regularity beyond well-definedness. Added the local formula for every coordinate-word derivative of the exponential encoding and the three exact exponential/real-differentiability/chain-rule dependencies. This proves smoothness without misattributing it; domains, units, zero waves and phase convention are unchanged.

2. **Vacuum wave equation, Proof 1.1.** Its two displays involve first partial derivatives, not the claimed “second partial derivatives.” Corrected the wording to first derivatives and their $C^1$ regularity under joint $C^2$ hypotheses. The subsequent differentiation, mixed-partial commutation, Gauss use and nonconverse witness remain sound.

3. **Polarization definition, Definition (b)(iii), (c) justification and Griffiths locator.** Defined the centered nondegenerate ellipse as the image of the unit circle under a real-linear isomorphism into its plane. The zero-cross-product equivalence formerly followed from a citation stating only bilinearity, alternation and orthogonality; added `thm-cross-product-norm-is-the-two-vector-gram-determinant`, whose exact statement gives positivity precisely for independent real vectors. Corrected Griffiths §9.1.3 to §9.1.4. The ellipse classes, zero case, rotation identity and retained $H<0$ right-handed convention are unchanged; the assigned polarization example was checked against them.

4. **Maxwell IVP, Statement (c), Proof 5.1, 6.2, 6.3 and 7.1.** Added $t_0\le v\le t_*$ to the cone, described it as the slab intersection with the model causal past, and confined the no-path assertion to events in that slab. An earlier event outside a truncated cone can still be causally reachable. Constraint propagation is now applied on the open interval $(t_0,T)$, with endpoint continuity carrying the zero initial divergence to the closed slab; the cited theorem does not directly quantify over a closed time interval. Replaced the false strict inequality at a closed-ball boundary by a weak one. For moving-ball differentiation, the substitution supplier is explicitly nonnegative-Borel: signed continuous integrands are handled by separately substituting their positive/negative parts, whose compact-ball integrals are finite. The finite-energy equality, moving-ball estimate and arbitrary-growth data are preserved. The assigned compact-support consumer was checked.

5. **Energy average, Fact F8 and Proof 2.1, 3.3.** The real Gram identity cannot be extended to the Hermitian squared norm just by complex bilinearity. Split $e=a+id$, use the real identity separately for $a,d$, and obtain $|b|^2=(|k\times a|^2+|k\times d|^2)/\omega^2=|e|^2/c^2$. Restricted the norm identity to real vectors while retaining the polynomial triple-product identity for complex entries. Added the actual pointwise Maxwell-field relation F5 to the nonzero-wave density step's tags and contract use map. Stress and momentum formulas and all zero/nonzero cases remain intact; the interference, energy example and pressure consumers were checked.

6. **Interference, Statement, Fact F8 and Proof 3.1–3.2.** Defined the complex norm, normalized wavevectors and period average explicitly. The old proof simultaneously identified $\alpha$ with the statement's $\alpha(x)$ and said a spatial phase had been absorbed into it; its equality for the field was false at a general fixed position. Introduced distinct $A=\alpha(x)e^{ik_1\cdot x}$, $D=\beta(x)e^{ik_1\cdot x}$ and canceled the common phase in the quadratic averages. Replaced the universal claim that the fixed-phase cross term “does not average away” by its valid possibility statement; zero weights or vanishing contraction can make it zero. The exact $W=C e^{-i\delta}$ formula is unchanged.

7. **Polarization example, Given and Remarks.** There are six distinct listed amplitudes for $E_0>0$, including both opposite circular signs, rather than five. Corrected the count and Griffiths §9.1.4 locator. Both signs and the degenerate choices remain present.

8. **Infinite-energy example, title, Example (ii)–(iii) and Verification 3.1.** Added the nonzero qualification to a title contradicted by the admitted zero wave. Replaced “no finite value is attained” by the actual absence of a finite limit of the box integrals. The compact-support comparison now integrates over a nondegenerate bounding closed box; arbitrary compact support is not silently assumed Jordan measurable. The lower bound $\pi\varepsilon_0 E_0^2R^2/K$ and its stated range are unchanged.

9. **Radiation-pressure thought experiment, Statement, assumptions, Proof 3.1–3.2 and citations.** Defined $A>0$ as a finite rectangular patch area, $F\in\mathbb R^3$ as its averaged force, and $p\in\mathbb R$ as its signed pressure, with the adopted law $F=A p e_3$. The old text alternated between scalar and vector $F/A$ and spoke of a total force on the infinite material. The conditional patch pressures remain $I/c$ and $2I/c$. Cited the FTC for the zero mean of the derivative of periodic integrated momentum; the period-product lemma does not state that derivative result. Corrected the Griffiths locator's dimensional error: pressure is the incident momentum flux, equivalently energy flux divided by $c$, not momentum flux divided by $c$. The exterior absorption model, finite vacuum box and reflector stress cancellation remain explicit model deductions.

10. **Two-beam example, Example (i) and (iii).** The expression $e_1\cdot\overline e_2=E_0^2e^{-i\varphi}$ collided with the orthogonal frame vectors $e_1,e_2$; corrected both factors to their amplitude symbols. Wrote the copropagating amplitude as the vector $E_0(1+e^{i\Delta})e_2$ and retained the common transverse linear polarization, with $|k|=K$, $k\cdot e_2=0$. Its proof already uses this vector. Spatial visibility at zero crossing angle remains zero for a positive constant profile and undefined for zero intensity; phase-scan visibility remains a distinct quantity.

11. **Assigned A-page Interference paragraph.** Changed “real amplitudes” to complex amplitudes with real superposition coefficients, matching the actual theorem, and allowed the cross term to vanish. Other A-page summaries were checked and retained.

12. **Assigned proof contracts.** Refreshed all 126 citation quotations to actual current Definition/Statement/Postulate sections, rather than older or truncated text; refreshed the affected derivation claims after reflow. Updated the smoothness, actual helicity biconditional, six-choice count, closed-slab endpoints, zero-cross-term and finite-patch boundary explanations. Corrected the infinite-energy worksheet's choice-free disposition: its compact-support comparison inherits Countable Choice even though its elementary Riemann box computation does not spend it. Added F5's use in energy Proof 3.3. Existing judge records were absent from all changed carriers; no judge/audit/source-check stamp was added.

## Consumer review

The changed polarization, IVP and interference interfaces were checked against the assigned direct consumers above. Current manifests also identify two direct interference consumers in batch 38:

- `items/rem-em-classical-validity-limits.md`, Remark (e): its deterministic classical-wave and no-framework-proof statements still follow from the revised interference theorem.
- `items/ex-em-ideal-and-measured-fringes.md`, Example (i), the adopted $\alpha,\beta$ formulas and relevant verification steps: its electric-zero/magnetic-nonzero conclusion uses the unchanged amplitude definitions and quadratic energy formula, not the removed unconditional nonzero-cross-term wording.

These were read only for the changed interface and not edited or independently certified as entire items. No other direct current-run consumer of the changed claim formulations was found in the manifest scan. Proof-only smoothness and complex-norm repairs preserve their suppliers' claims; all assigned downstream uses were checked. No withdrawal is proposed.

## Uneditable finding

**`em-vacuum-waves-and-polarization-examples`, Polarization cases paragraph, lines 18–23:** “the example verifies five amplitude choices” is inconsistent with its six distinct amplitudes: one real linear, two opposite circular, one elliptical, zero, and one dependent-amplitude linear choice. The repaired item explicitly lists six. The Step 5b lead should replace “five amplitude choices” by “six amplitude choices,” or explicitly count five grouped cases. This is a factual inventory error in B-page prose, which this reader cannot edit. It is routed as `false-claim`, `fatal` under the dispatch rule that a defective claim is not excused as a short proof omission; it concerns the inventory count, not the correctness of the field calculations.

No uneditable published or other-batch prerequisite defect was confirmed in the reviewed supplier uses.

## Source reading and limitations

[Tong, author-hosted PDF](https://davidtong.org/pdfs/teaching/electromagnetism/electro.pdf): retrieved through the web tool; read the relevant wave-equation, monochromatic, superposition, polarization and energy arguments in §§4.3–4.3.2 and 4.4, printed pp. 82–88 and 92–94. These support the conventions and contextual statements, not the full constrained Maxwell Cauchy theorem. The local source PDF's creation metadata is September 2026; no full-book reading is claimed. Direct URL download returned HTTP 403.

[Griffiths, retained third-edition scan](https://www.hlevkin.com/hlevkin/90MathPhysBioBooks/Physics/Physics/Electrodynamics/David%20J.%20Griffiths%20-%20Introduction%20to%20Electrodynamics-Prentice%20Hall%20(1999).pdf): the web opener failed, but direct retrieval succeeded (596 pages, 13,484,424 bytes). Read printed pp. 373–379 and 381–382 from its text layer; read printed p. 380 as a rendered page because its text extraction was empty, and visually checked eq. (9.64) on p. 382. §9.1.4 and Problem 9.8 are the polarization locators; §§9.2.1–9.2.3 support the vacuum wave and cycle-average conventions. Source-backed scientific observations were not introduced.

No rendered dispatch evidence bundle was found among the current task artifacts; the current carriers, contracts and exact supplier sections were used. The review does not certify every imported supplier's transitive foundations, unrelated portions of batch-38 consumers, the entire source books, or empirical applicability of these ideal fields. Symbolic SI constants remain framework parameters; no measured input, detector dataset, sampling law, p-value, uncertainty estimate or empirical precision was invented. There is no access blocker remaining for the recorded source passages.

## Validation and handoff

- Reflow and precheck were run on each of the ten changed item paths. Eight proof-bearing items passed; the two definition paths have no proof rows to precheck. The last IVP/pressure edits and polarization dependency repair were rechecked.
- `node tools/physics-support/proof-contract.mjs research/physics-em-sr-40-2026-10-08-batch-33.proof-contracts.json --strict` — final result: **0 errors, 0 warnings, 11/11 items checked**. The first attempt exposed two worksheet bookkeeping omissions; both were corrected before the final pass.
- `rendercheck.mjs` on the ten changed items and assigned A page — **11 files clean**, including actual KaTeX and renderer-YAML parsing.
- After all final item edits and formatters, one batched `proof-layout.mjs` command on the ten changed item paths — **10 items, 53 steps, 0 defects**.
- Compared assigned raw carriers with the pre-reader hashes: ten items changed; `pthm-em-plane-wave-maxwell` and the B page remain byte-identical. No imported mathematics, another batch, B-page prose, published carrier, plan or workflow tool was edited.

The assigned findings JSON contains only the unedited B-page count. The next owner action is that prose correction and ordinary Step 5b review of the repaired carriers and their recorded consumer interfaces. Passing local mechanical checks is not an independent judgment stamp.
