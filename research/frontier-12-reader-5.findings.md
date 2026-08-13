# Frontier-12 independent step-6 reader 5 — batch 6

Date: 2026-08-13

Role: independent read-only step-6 reader

Scope: `complex-differentiability-and-cauchy-riemann` and
`complex-differentiability-and-cauchy-riemann-examples` (41 items)

This report is evidence for Alpha's disk adjudication, not a verdict and not a
content repair. I made no edit under `items/` or `library/`.

## Outcome

I found **seven proposed fatal defects**: one title/Example overclaim and six
semantic citation defects. I found **five proposed nonfatal defects**, all
omitted bridges that a competent reader can close within 30 seconds. The six
citation defects are called fatal because they occur in a displayed Fact or use
a dependency for a proposition its on-disk Statement does not make; the short
mathematical derivations available for several of them do not make the displayed
citations faithful.

The strict structural checker reports `36/36` contracts, zero errors and zero
warnings. That result does not clear the semantic defects below: in each
citation case the contract faithfully quotes a source section which visibly
lacks the extra clause attributed to it.

## Fatal findings

### F01 — `ex-square-map-sends-a-grid-to-orthogonal-parabolas`

- **Location:** title; Example, first sentence; boundary disposition for the
  degenerate case.
- **Defect:** the title says a Cartesian grid is sent to two families of
  parabolas, and the Example says all vertical and horizontal grid lines become
  parabolic arcs. This is false for the two axes, even after the critical point
  itself is removed.
- **Evidence:** the item's own steps 2.1 and 2.2 compute that `c=0` maps to the
  nonpositive real ray and `d=0` maps to the nonnegative real ray. A ray, or a
  ray with the origin deleted, is not a parabola. Calling it a "degenerate
  member" does not make either reader-facing assertion true. The contract marks
  the degenerate case checked by those same steps but never reconciles their
  conclusion with the title or Example. The cited Howell–Mathews source's
  [Example 9.1.7](https://complexanalysis.org/web/sec_conformal-mappings.html)
  treats the unit-square geometry and its two nonzero parabolic sides; it does
  not support the all-grid overstatement.
- **Severity:** **fatal** — the title and Example assert more than the proof
  establishes and are contradicted by an included boundary case.
- **Proposed repair:** say that non-axis vertical and horizontal lines map to
  parabolas while the axes map to the two real rays, and weaken the title
  accordingly. The noncritical orthogonality claim itself is correct.

### F02 — `fs-real-differentiability-implies-complex-differentiability`

- **Location:** Fact [L1], step 1.1, and the [L1] proof-contract citation.
- **Defect:** [L1] attributes both the coordinate identification and the formula
  that conjugation is `(x,y) -> (x,-y)` to
  `thm-complex-numbers-are-the-real-coordinate-plane`.
- **Evidence:** the cited theorem's on-disk Statement gives only the bijection
  `Phi(a+bi)=(a,b)` and the coordinate formulas for addition and
  multiplication. It does not mention conjugation. The contract quote is that
  exact Statement and likewise contains no reflection formula. The reflection
  formula is instead supplied by
  `def-complex-conjugate-real-imaginary-part-and-modulus` (and is recorded in
  `rem-complex-plane-euclidean-dictionary`). Step 1.1 uses the unsupported half
  of [L1].
- **Severity:** **fatal** — inaccurate dependency citation in a load-bearing
  Fact. The counterexample itself is mathematically correct.
- **Proposed repair:** add the conjugation Definition as a dependency and split
  [L1] into exact coordinate-identification and conjugation-definition clauses.

### F03 — `ex-reciprocal-function-from-the-complex-difference-quotient`

- **Location:** Fact [L2], step 1.1, and the [L2] proof-contract citation.
- **Defect:** [L2] says `lem-complex-conjugation-and-modulus-laws` states the
  reverse triangle inequality.
- **Evidence:** the cited lemma's on-disk Statement gives definiteness,
  multiplicativity, and the ordinary triangle inequality
  `|z+w| <= |z|+|w|`; it does not state the reverse triangle inequality. The
  contract quote ends with the ordinary inequality but maps the citation
  directly to step 1.1, which uses `|z+h| >= |z|-|h|`.
- **Severity:** **fatal** — [L2] changes the cited conclusion. The mathematical
  bridge is short, but it must be written rather than inserted into the Fact.
- **Proposed repair:** make [L2] quote the ordinary triangle inequality and
  derive step 1.1 inline from `|z| <= |z+h|+|h|`.

### F04 — `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps`

- **Location:** Fact [L2]; steps 1.1, 2.1, and 4.1; the [L2] proof-contract
  citation.
- **Defect:** [L2] attributes `|bar h|=|h|` to
  `lem-complex-conjugation-and-modulus-laws`.
- **Evidence:** the cited on-disk Statement says that conjugation is an
  involutive real-field automorphism and states `z bar z=|z|^2`, definiteness,
  multiplicativity, and the ordinary triangle inequality. It does not state
  invariance of modulus under conjugation. The contract quotes that exact
  Statement but maps it to all three steps which use the missing equality.
- **Severity:** **fatal** — inaccurate load-bearing Fact citation. The theorem
  and its proof become correct after the equality is derived.
- **Proposed repair:** quote only the lemma's actual clauses and derive
  `|bar h|=|h|` inline (or add the coordinate conjugation/modulus Definition and
  derive it from coordinates).

### F05 — `cex-modulus-squared-is-complex-differentiable-only-at-zero`

- **Location:** Fact [L3], step 1.1, and the [L3] proof-contract citation.
- **Defect:** [L3] again says that
  `lem-complex-conjugation-and-modulus-laws` states `|bar z|=|z|`.
- **Evidence:** that equality is absent from the cited lemma's on-disk
  Statement and from the contract's exact quote. Step 1.1 uses it to replace
  the modulus of `bar h` by `|h|`.
- **Severity:** **fatal** — inaccurate dependency citation in a displayed Fact;
  the counterexample and its differentiability locus are otherwise correct.
- **Proposed repair:** derive conjugation-invariance of modulus from exact
  cited clauses or from the coordinate Definition before using it.

### F06 — `fs-cauchy-riemann-at-a-point-implies-complex-differentiability`

- **Location:** Fact [L3], step 1.1, and the [L3] proof-contract citation.
- **Defect:** [L3] makes the same unsupported attribution
  `|bar z|=|z|` to `lem-complex-conjugation-and-modulus-laws`.
- **Evidence:** the equality is not in the source Statement or the contract
  quote. Step 1.1 uses it in the calculation
  `|bar z|^2/|z|=|z|`.
- **Severity:** **fatal** — inaccurate load-bearing Fact citation. The explicit
  counterexample and the incompatible quotient paths are correct.
- **Proposed repair:** insert the short derivation of modulus invariance from an
  exact dependency before step 1.1.

### F07 — `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy`

- **Location:** Fact [L2]; steps 1.1 and 4.1; the two [L2] proof-contract
  citations.
- **Defect:** [L2] says that "complex powers and reciprocals obey the complex
  derivative rules" while citing `thm-algebra-of-complex-derivatives` and the
  complex chain rule. The wording does not restrict "powers" to integer powers
  and is not the proposition stated by either source.
- **Evidence:** the algebra theorem's on-disk Statement gives the binary linear,
  product, reciprocal, and quotient rules, plus constants and the identity. It
  does not state a general power rule. The chain-rule theorem states only the
  derivative of a composite. Their exact contract quotes contain no power-rule
  clause, but [L2] is used to establish holomorphy of `z -> z^{-4}` and later its
  derivative.
- **Severity:** **fatal** — the Fact is a synthetic strengthening of its cited
  propositions. Interpreted as arbitrary complex powers, it is also overbroad.
- **Proposed repair:** state the exact product, reciprocal, and chain rules, then
  derive the needed integer-power formula for `z^{-4}` by finitely repeated
  products and one reciprocal.

## Nonfatal findings

### N01 — `cor-cartesian-and-polar-cauchy-riemann-equations`

- **Location:** proof steps 1.1–1.2 and their contract inputs.
- **Defect:** the cited total-derivative chain rule requires the inner polar map
  `P(r,theta)=(r cos theta,r sin theta)` to be totally differentiable. [L2]
  gives the one-variable derivatives of sine and cosine, but neither a Fact nor
  an earlier step establishes total differentiability of `P` before [L1] is
  applied.
- **Evidence:** the contract lists only `given, L1, L2` for these steps, so the
  chain rule's inner-map hypothesis is not discharged. The displayed derivative
  of `P` is routine to verify directly.
- **Severity:** **nonfatal** — a sub-30-second regularity bridge.

### N02 — `thm-wirtinger-chain-rule-for-real-differentiable-maps`

- **Location:** proof step 3.1.
- **Defect:** the step invokes the "unique Wirtinger expansion [F1]", but [F1]
  and the cited Definition state the expansion identity, not its uniqueness.
- **Evidence:** the contract maps step 3.1 to `step 2.1, F1, algebra`; no quoted
  clause supplies uniqueness. It follows immediately by evaluating
  `Ah+B bar h` at `h=1` and `h=i`, but that argument is not written.
- **Severity:** **nonfatal** — the missing uniqueness bridge is elementary and
  does not threaten the formulas.

### N03 — `thm-zero-complex-derivative-on-a-domain-implies-constant`

- **Location:** proof steps 2.1–2.2 and their contract inputs.
- **Defect:** step 2.1 passes from continuity of `f` to continuity of
  `f o gamma_j` without establishing continuity of the affine segment map;
  step 2.2 applies the total-derivative chain rule without first establishing
  that `gamma_j` is totally differentiable and computing its derivative.
- **Evidence:** [L4] states only continuity of `f`, and [L3] is conditional on
  differentiability of both maps. The contract supplies no Fact for the affine
  map's regularity. Directly,
  `D gamma_j(t) s = s(v_j-v_{j-1})`, including the zero-length case.
- **Severity:** **nonfatal** — a routine sub-30-second bridge; the domain
  constancy theorem remains correct.

### N04 — `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form`

- **Location:** verification steps 1.2–1.3 and their contract inputs.
- **Defect:** the steps differentiate `e^x`, `sin`, and `cos`, and use product
  and multivariable chain rules, but cite only the Cartesian exponential formula
  [L3] plus `algebra`.
- **Evidence:** [L3]'s cited Statement gives
  `exp(x+iy)=e^x(cos y+i sin y)` but no derivative rules. The contract likewise
  lists only `L3, algebra` for both derivative calculations. The relevant real
  derivative results exist on disk and are used correctly by the preceding
  A-page exponential theorem, but they are not Facts of this item.
- **Severity:** **nonfatal** — all omitted rules are standard and the displayed
  derivatives are correct.

### N05 — `ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere`

- **Location:** Example's final clause and verification step 5.1.
- **Defect:** step 5.1 cites [L1] for the claim that holomorphy at a point means
  complex differentiability throughout some open neighbourhood. [L1]'s cited
  theorem is only the continuous-partials sufficient criterion; it does not
  state that definition.
- **Evidence:** step 4.1 correctly proves that no nonempty open set consists
  entirely of differentiability points, so the conclusion follows immediately
  from `def-complex-differentiability-holomorphic-and-entire`. That Definition
  is not a direct dependency or Fact of the item, and the contract nevertheless
  maps [L1] to step 5.1.
- **Severity:** **nonfatal** — the conclusion is correct and the missing
  definitional bridge is immediate.

## Items read fully with no additional finding

Every item below was read in full, not sampled. "Clean" means I found no
additional concrete false claim, missing hypothesis, unlicensed inference, or
semantic dependency-citation defect after the findings above.

### `complex-differentiability-and-cauchy-riemann` (28/28 read fully)

| Item | Reader result |
|---|---|
| `rem-complex-plane-euclidean-dictionary` | Clean. |
| `def-complex-domain` | Clean. |
| `def-complex-differentiability-holomorphic-and-entire` | Clean. |
| `lem-uniqueness-of-the-complex-derivative` | Clean. |
| `def-wirtinger-derivatives` | Clean. |
| `thm-complex-differentiability-real-linearity-wirtinger-and-cauchy-riemann` | Clean; all four equivalence directions and derivative formulas checked. |
| `cor-complex-differentiability-implies-continuity` | Clean. |
| `thm-continuous-partials-and-cauchy-riemann-imply-holomorphic` | Clean; neighbourhood and pointwise continuity hypotheses checked. |
| `cor-cartesian-and-polar-cauchy-riemann-equations` | Finding N01. |
| `thm-algebra-of-complex-derivatives` | Clean; zero, identity, product, reciprocal, quotient, and local nonvanishing cases checked. |
| `thm-chain-rule-for-complex-derivatives` | Clean. |
| `thm-wirtinger-chain-rule-for-real-differentiable-maps` | Finding N02. |
| `thm-conjugate-difference-quotient-characterizes-antiholomorphic-maps` | Finding F04. |
| `cor-continuous-complex-derivative-gives-c1-components` | Clean. |
| `thm-derivative-of-a-continuous-complex-local-inverse` | Clean; inverse continuity remains an explicit hypothesis. |
| `thm-complex-polynomials-and-rational-functions-are-holomorphic` | Clean; exponent zero, constant/zero polynomials, and empty denominator domain checked. |
| `thm-complex-exponential-is-entire-with-derivative-itself` | Clean. |
| `thm-zero-complex-derivative-on-a-domain-implies-constant` | Finding N03. |
| `cor-real-valued-holomorphic-function-is-constant` | Clean. |
| `cor-constant-modulus-holomorphic-function-is-constant` | Clean; zero and positive modulus cases checked. |
| `cor-holomorphic-function-with-holomorphic-conjugate-is-constant` | Clean. |
| `def-oriented-conformal-map-at-a-point` | Clean; pointwise and noninjectivity scope checked. |
| `lem-oriented-similarities-are-nonzero-complex-multiplications` | Clean; both orientations and mutual exclusivity checked. |
| `thm-nonzero-complex-derivative-iff-oriented-conformal` | Clean; both directions checked. |
| `cor-jacobian-determinant-of-a-holomorphic-map` | Clean; zero/nonzero determinant cases checked. |
| `thm-c2-holomorphic-components-are-harmonic` | Clean; explicit `C^2` hypothesis and both components checked. |
| `thm-c2-holomorphic-function-has-holomorphic-derivative` | Clean. |
| `cor-c2-holomorphic-components-have-nonpositive-hessian-determinant` | Clean; negative and zero determinant cases checked. |

### `complex-differentiability-and-cauchy-riemann-examples` (13/13 read fully)

| Item | Reader result |
|---|---|
| `ex-square-function-from-the-complex-difference-quotient` | Clean. |
| `ex-complex-exponential-cauchy-riemann-in-cartesian-and-polar-form` | Finding N04. |
| `ex-reciprocal-function-from-the-complex-difference-quotient` | Finding F03. |
| `ex-mobius-map-is-conformal-off-its-pole` | Clean; `c=0` and unique-pole cases checked. |
| `ex-square-map-sends-a-grid-to-orthogonal-parabolas` | Finding F01. |
| `fs-real-differentiability-implies-complex-differentiability` | Finding F02. |
| `cex-modulus-squared-is-complex-differentiable-only-at-zero` | Finding F05. |
| `cex-real-part-is-nowhere-complex-differentiable` | Clean. |
| `cex-modulus-is-nowhere-complex-differentiable` | Clean; origin and nonzero cases checked. |
| `ex-complex-differentiable-on-the-coordinate-axes-but-holomorphic-nowhere` | Finding N05. |
| `fs-cauchy-riemann-at-a-point-implies-complex-differentiability` | Finding F06. |
| `fs-cauchy-riemann-on-an-open-set-without-regularity-implies-holomorphy` | Finding F07; witness paths, four partials, discontinuity, and derivative growth checked. |
| `fs-zero-complex-derivative-on-an-open-set-implies-constant` | Clean; openness, both components, and disconnectedness checked. |

## Page, contract, provenance, and coverage statement

- I read both page files in full. The A-page has exactly two nonempty prose
  paragraphs, each under 150 words, and its mathematical summary is accurate.
  The B-page has no authored body.
- I read the batch notes and all 36 proof-contract entries in full, including
  every source quote, derivation row, and boundary disposition. The strict
  checker passed, but findings F01–F07 and N01–N05 are semantic defects it cannot
  detect.
- I opened the actual on-disk Definition or Statement for every direct Fact
  citation before making these calls. I found no forbidden dependency target,
  missing target, direction reversal, forward-reference defect, or additional
  hypothesis mismatch.
- I checked the statement/construction and proof/verification provenance tags
  against the batch notes and item content. I found no provenance-tag defect.
  I also reopened the live source for the one AI-altered claim I found false,
  F01; its narrower unit-square example does not repair the local overclaim.
- **Coverage:** all 41 assigned items were read fully; none was sampled. Every
  numbered proof/verification/refutation step, every direct dependency citation,
  every boundary row, both page files, and every title and reader-facing
  Statement/Definition/Example were checked. Nothing in the dispatched local
  scope was inaccessible or left unchecked.
