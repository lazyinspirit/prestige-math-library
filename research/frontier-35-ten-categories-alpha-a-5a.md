# Step 5a adjudication — group a

Run `frontier-35-ten-categories`; owned batches 6 and 7. The companion decisions JSON covers exactly the fifteen routed obligations: eleven touched carriers and four refuter findings.

## Routed scope

Batch 6: six touched items; refuter findings on `def-smooth-relative-dimension-via-differentials` and `thm-valuative-criterion-separatedness`. Batch 7: five touched items; refuter findings on `def-irreducible-component-of-a-topological-space` and `thm-mayer-vietoris-sheaf-cohomology`. Neither scope has a touched page or a reader finding.

## Touched carriers

The eleven touched item carriers matched their post-reader snapshots before this pass. Their proof corrections were retained after checking the current claims, cited dependencies, and changed steps. Each is recorded as `amended_repair` because its contract carrier was enriched for risk review and citation/derivation audit. Each decision cites a closed Step 5a defect-ledger row and has `repair_confidence: 1`.

| Obligation | Current argument checked |
| --- | --- |
| `touched:6:cex-doubled-origin-valuative-nonuniqueness` | Original lift construction conflated chart inclusions with lifts; current step 4.1 defines maps Spec R to the charts via x,y mapped to t, and step 5.1 separates their closed-point images. |
| `touched:6:cex-dvr-only-test-unsafe-without-hypotheses` | Original valuation argument treated every field element as a monomial and checked quasi-separatedness on only two charts; current steps 1.1, 2.1, and 3.1 use compatible valuations, all primes, and the finite affine-cover criterion; steps 4.1-4.3 handle generic and closed images. |
| `touched:6:ex-differentials-hypersurface` | For f=x^2 over a ring with 2 nonzero, current step 2.2 proves 2x is nonzero modulo (x^2) by degree, including when 2 is a zero divisor; the Jacobian presentation remains valid for f=0 and inseparable powers. |
| `touched:6:lem-diagonal-is-immersion` | The former proof assumed all product points lie in equal-chart opens Q_i. Current steps 1.2 and 2.1 cover only the diagonal image with Q_i, which suffices; multiplication B_i tensor B_i to B_i is surjective on each Q_i. |
| `touched:6:lem-diagonal-quasi-compact-iff-quasi-separated` | The former proof inferred closedness of a preimage inside chart unions. Current steps 3.1-5.1 use a finite distinguished-open cover of an affine target open and quasi-compact diagonal preimages of each distinguished open. |
| `touched:6:lem-separated-stable-under-composition` | The original graph pullback square was wrong. Current step 1.3 identifies X times_Y X as the base change of the Y/S diagonal along g times_S g; composition with the X/Y diagonal yields the X/S diagonal. |
| `touched:7:def-cohomological-dimension-space` | The earlier clause inferred an attained finite infimum from nonzero H^0. The current clause allows +infinity when no uniform finite bound exists and asserts attainment only in the finite case. |
| `touched:7:def-tensor-product-of-abelian-sheaves` | The original Definition called sheaf tensor contravariantly natural. Its current arrow F tensor G to F-prime tensor G-prime is covariant in both variables, as the presheaf tensor and sheafification adjunction require. |
| `touched:7:lem-acyclic-rows-and-columns-of-cech-double-complex` | The former proof identified G^q(V) with a product of the stalks of G^q, invalid for infinite products. Current F2 and step 1.1 use Godement coefficients A_x^q directly; step 1.3 kills degrees n-1,n,n+1 in the filtration lemma. |
| `touched:7:lem-sections-on-compact-opens-commute-with-filtered-colimits` | The malformed sheafification notation a=# was corrected to a in the proof, preserving the compact-open finite-gluing argument and statement. |
| `touched:7:thm-long-exact-sequence-sheaf-cohomology` | The prior one-object patch I(F_2):=J did not define a supplied functorial resolution datum. Current steps 1.1-4.1 use the cone triangle and exact R_I Gamma, giving natural connecting maps and resolution independence. |

## Refuter findings and completed repairs

- `refuter:6:1`, `confirmed_fatal`: `def-smooth-relative-dimension-via-differentials` asserted a unique locally free rank on an empty open, where every integer satisfies the condition vacuously. Its Definition now states uniqueness only for nonempty U and describes the empty case.
- `refuter:6:2`, `confirmed_fatal`: the final Statement sentence of `thm-valuative-criterion-separatedness` extended a quasi-separated theorem to all finite-type morphisms. Stacks Example 29.52.2 gives a finite-type non-quasi-separated morphism. The sentence now retains quasi-separatedness. Direct consumer `rem-valuative-criterion-quantifies-all-valuation-rings` already assumes it.
- `refuter:7:1`, `confirmed_fatal`: `def-irreducible-component-of-a-topological-space` asserted unconditional existence, while its cited local existence lemma assumes AC and invokes Zorn in step 1.2. The Definition now states AC for existence, covering, and the finite Noetherian assertion, and declares `def-axiom-of-choice`. Direct consumers `lem-irreducible-components-of-a-topological-space`, `lem-noetherian-space-has-finitely-many-irreducible-components`, and `thm-noetherian-topological-space-dimension-vanishing` already assume AC.
- `refuter:7:2`, `confirmed_nonfatal`: step 3.1 of `thm-mayer-vietoris-sheaf-cohomology` inferred preservation of injectives from exact restriction alone. New F11 uses the exact left adjoint `j_!` from published `thm-extension-by-zero-adjunction-exactness`; step 3.1 now cites F11. Exactness of a left adjoint implies its right adjoint preserves injectives by adjunction applied to monomorphisms.

## Source locations checked

- [Stacks Project, Tag 01L0, Lemma 29.42.1](https://stacks.math.columbia.edu/tag/01L0), lines 24–30: the valuative separatedness criterion assumes quasi-separatedness. [Example 29.52.2, Tag 02NV](https://stacks.math.columbia.edu/tag/02NV), lines 38–39: finite type does not supply quasi-separatedness in general.
- [Stacks Project, Tag 004U, Definition 5.8.1 and Lemma 5.8.3](https://stacks.math.columbia.edu/tag/004U), lines 18–38: maximal irreducible subsets and a maximal-chain existence proof. The local supplier explicitly assumes AC for its Zorn step.
- [Stacks Project, Tag 009Z, Section 6.31](https://stacks.math.columbia.edu/tag/009Z): abelian-sheaf extension by zero is left adjoint to restriction, with zero stalks off the open. Exactness is supplied by published local `thm-extension-by-zero-adjunction-exactness`.
- Other source sections checked for touched arguments: [Tag 090W](https://stacks.math.columbia.edu/tag/090W), finite separable extensions and differentials; [Tag 01ET](https://stacks.math.columbia.edu/tag/01ET), Čech acyclicity on finite intersections; [Tag 079R](https://stacks.math.columbia.edu/tag/079R), K-flat tensor closure; and [Tag 01KH](https://stacks.math.columbia.edu/tag/01KH), separatedness criteria. Exact local citation quotes and proof-step uses are recorded in the owning contracts.

The direct consumer `rem-differentials-detect-infinitesimals-not-all-singularities-alone` does not use rank uniqueness on an empty open. No changed Statement or Definition has an outside-group direct consumer requiring a 5b repair. The Mayer–Vietoris supplier is published, so the frontier dependency ledger needed no new cross-group entry.

## Risk and local checks

The plain risk reports listed 57 HIGH/CRITICAL items in batch 6 and 69 in batch 7. Each listed item has a complete risk review in its owning contract, tied to current proof steps, a checked boundary case, citation evidence, and the reader/refuter artifacts. Touched and flagged items have specific notes. A contract audit also corrected the zero-case explanation for `lem-derived-tensor-product-of-abelian-sheaves`: a flat replacement of zero need not itself be zero; its augmentation to zero is a quasi-isomorphism, and K-flat tensoring yields zero derived tensor. That audit correction changed no item carrier or routed verdict.

- Reflow on the four changed items: unchanged. Focused precheck: the two proof-bearing theorems passed; the two definitions had no proof check.
- Strict proof-contract checks: batch 6, 62/62 items; batch 7, 78/78 items; zero errors or warnings in both.
- Citation-fidelity across both batches: 1,112 citations, zero missing quotes, zero widening. Mechanical contract quote and derivation mismatches from the reader pass were reconciled without defect rows.
- Decision/ledger audit: fifteen unique obligations, each pointing to exactly one unique fixed Step 5a defect row; the three fatal and one nonfatal finding severities match their verdicts.
- Global depcheck exited 0 with no focused warning on the four changed items; it reported 266 unrelated workspace warnings.
- Final `risk-report --require-reviewed` checks passed after the last contract edit: zero errors, 62/62 items routed in batch 6 and 78/78 in batch 7. Strict proof-contract checks were rerun afterward and passed with zero errors or warnings.

The four refuter repairs have updated contracts, manifests, and provenance; every confirmed defect has one closed ledger row owned at `caught_at_stage: "5a-adjudicate"` and referenced from its decision. No defective published item was identified, so no published carrier or published-consumer ledger entry was changed. There is no unresolved local blocker or proposed withdrawal in this routed scope. The engine owns subsequent hash stamping and gate execution.
