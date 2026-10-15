# Quantum prerequisite completion track

These four supplementary A/B pairs contain the fourteen missing intermediate suppliers needed by the requested 75-pair build. They are authoring obligations, not accepted proofs. Their four B pages must each contain a genuine checked worked example; B material is never a logical supplier. New items and pages remain draft.

Read the complete current owner proposals in `research/quantum-build-60-2026-10-15-owner/complex/`, `norms/`, and `real-measure/`. Proposed source bodies are review inputs; native authors must examine actual prerequisites, construct complete carriers/contracts, and record honest readiness. Existing published consumer repair is owner-owned and must preserve original source archives.

## Complex Norms and Realification

**Pages:** `complex-norms-and-realification` / `complex-norms-and-realification-examples`. **Orders:** 248.1 / 248.10999999999999. **Requires:** `complexification-realification-and-real-structures`, `rn-as-a-normed-space`.

The following full contracts are the required A inventory. Preserve their richest sound scope, prove every stated property, and add the corresponding B worked example.

### `def-complex-norm-and-complex-normed-space`

```json
{
  "id": "def-complex-norm-and-complex-normed-space",
  "kind": "definition",
  "contract": "For a C-vector space V, N:V->R is a norm when it separates zero, satisfies N(lambda v)=|lambda|_C N(v) for every lambda in C, and satisfies the triangle inequality. Values are finite reals. Complex absolute homogeneity is part of the definition.",
  "deps": [
    "def-vector-space",
    "def-complex-numbers-and-arithmetic",
    "def-complex-conjugate-real-imaginary-part-and-modulus"
  ],
  "proof_route": "Definition only; instantiate the field-parametric vector-space item at C and use the existing complex modulus definition. No remark dependency.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

### `lem-complex-modulus-of-real-embedding-equals-real-absolute-value`

```json
{
  "id": "lem-complex-modulus-of-real-embedding-equals-real-absolute-value",
  "kind": "lemma",
  "contract": "The complex modulus of the canonical embedding of a real r into C equals the real absolute value of r.",
  "deps": [
    "def-complex-numbers-and-arithmetic",
    "def-complex-conjugate-real-imaginary-part-and-modulus",
    "def-abs-value",
    "lem-of-abs-value",
    "thm-of-square-roots"
  ],
  "proof_route": "Write the embedded scalar as r+0i. The complex modulus is the nonnegative square root of r^2; the real absolute value is nonnegative and has square r^2; uniqueness of nonnegative square roots identifies them.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

### `lem-complex-norm-realification-is-a-real-norm`

```json
{
  "id": "lem-complex-norm-realification-is-a-real-norm",
  "kind": "lemma",
  "contract": "For a complex normed (V,N), the realification V_R with the same N is a real normed space with the same underlying set, addition, norm values, and induced metric.",
  "deps": [
    "def-complex-norm-and-complex-normed-space",
    "def-realification-of-a-complex-vector-space",
    "def-norm-and-normed-space",
    "lem-complex-modulus-of-real-embedding-equals-real-absolute-value"
  ],
  "proof_route": "Separation and triangle inequality are inherited. For real r, restriction of scalars and the modulus-restriction lemma give N(rv)=|r|_R N(v). The metric is identical because the underlying addition and N are unchanged. Do not replace full C-homogeneity with real homogeneity.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

### `lem-complex-coordinate-l1-is-a-norm`

```json
{
  "id": "lem-complex-coordinate-l1-is-a-norm",
  "kind": "lemma",
  "contract": "The finite coordinate sum of complex moduli on C^n is a complex norm, including n=0.",
  "deps": [
    "def-complex-norm-and-complex-normed-space",
    "lem-complex-conjugation-and-modulus-laws",
    "def-finite-sum",
    "lem-finite-sum-laws"
  ],
  "proof_route": "Use modulus definiteness, multiplicativity for complex homogeneity, subadditivity for the triangle inequality, and finite-sum monotonicity. Treat C^0 as the singleton zero space.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

### `def-complex-normed-subspace`

```json
{
  "id": "def-complex-normed-subspace",
  "kind": "definition",
  "contract": "A complex-linear subspace of a complex normed space with the restricted complex norm.",
  "deps": [
    "def-complex-norm-and-complex-normed-space",
    "def-linear-subspace"
  ],
  "proof_route": "Definition; the restricted axioms follow by restriction.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

### `def-equivalent-complex-norms`

```json
{
  "id": "def-equivalent-complex-norms",
  "kind": "definition",
  "contract": "Two complex norms on one complex vector space are equivalent when positive real constants c,C bound one by the other in both directions.",
  "deps": [
    "def-complex-norm-and-complex-normed-space",
    "def-complete-ordered-field"
  ],
  "proof_route": "Definition only. Keep def-equivalent-norms real-typed; do not apply it directly to a complex vector space.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

**Example obligation:** Work a concrete finite-input example that exercises the declared interface and its boundary cases, with verification if it asserts a consequence. No external proof fallback, invented source reading, or acceptance stamp.

## Complex Subspace Realification

**Pages:** `complex-subspace-realification` / `complex-subspace-realification-examples`. **Orders:** 479.1 / 479.11. **Requires:** `complex-norms-and-realification`, `normed-and-banach-spaces`.

The following full contracts are the required A inventory. Preserve their richest sound scope, prove every stated property, and add the corresponding B worked example.

### `lem-complex-normed-subspace-realifies-to-real-normed-subspace`

```json
{
  "id": "lem-complex-normed-subspace-realifies-to-real-normed-subspace",
  "kind": "lemma",
  "contract": "A complex normed subspace W of V realifies to a real normed subspace W_R of V_R with identical restricted norm metric. A finite complex basis b_0,...,b_(n-1) induces the finite real basis b_0, ib_0,...,b_(n-1), ib_(n-1).",
  "deps": [
    "def-complex-normed-subspace",
    "def-realification-of-a-complex-vector-space",
    "lem-complex-norm-realification-is-a-real-norm",
    "def-normed-subspace",
    "def-linear-basis"
  ],
  "proof_route": "Restrict scalar multiplication and norm using the norm-realification lemma. Expand complex coefficients into real and imaginary parts for spanning; group a real dependence into a complex dependence for independence. This is a finite supplied-list proof and uses no choice.",
  "source_report": "research/quantum-computing-planning/reports/qc_r6.md"
}
```

**Example obligation:** Work a concrete finite-input example that exercises the declared interface and its boundary cases, with verification if it asserts a consequence. No external proof fallback, invented source reading, or acceptance stamp.

## Complex Coordinate and Path Transport

**Pages:** `complex-coordinate-and-path-transport` / `complex-coordinate-and-path-transport-examples`. **Orders:** 358.1 / 358.11. **Requires:** Use actual supplier homes; exact page edges will be recorded in the canonical plan..

The following full contracts are the required A inventory. Preserve their richest sound scope, prove every stated property, and add the corresponding B worked example.

### `thm-complex-coordinate-map-preserves-real-scalar-multiplication`

```json
{
  "id": "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
  "kind": "theorem",
  "statement_or_definition": "For the coordinate bijection Φ(a+bi)=(a,b), for all r in R and z in C, Φ(rz)=rΦ(z), in addition to coordinatewise addition. Thus the stated identification is an R-linear bijection.",
  "deps": [
    "def-complex-numbers-and-arithmetic",
    "thm-complex-numbers-are-the-real-coordinate-plane"
  ],
  "justified_by": [],
  "proof_obligations": [
    "Write z=a+bi using the unique coordinate form.",
    "Use the canonical real embedding from def-complex-numbers-and-arithmetic and the product coordinate formula to compute (r+0i)(a+bi)=ra+(rb)i.",
    "Apply Φ and compare with scalar multiplication in R²; verify the zero and singleton cases are included."
  ],
  "sources": [
    {
      "url": "https://www.jirka.org/ca/ca.pdf",
      "locator": "Chapter 2 coordinate model of C"
    }
  ],
  "existing_supplier_checks": [
    "thm-complex-numbers-are-the-real-coordinate-plane already proves bijectivity, addition, and the complex multiplication coordinate formula, but its current statement does not explicitly give the real scalar formula."
  ],
  "unresolved_obligations": [],
  "source_report": "research/quantum-computing-planning/reports/qc_r1.md"
}
```

### `thm-complex-coordinate-isometry-and-topology-transport`

```json
{
  "id": "thm-complex-coordinate-isometry-and-topology-transport",
  "kind": "theorem",
  "statement_or_definition": "With d_C(z,w)=|z-w| and d_2 the Euclidean metric, Φ:C→R² is a bijective isometry and hence a homeomorphism. For all z,w∈C and t∈R, Φ((1−t)z+tw)=(1−t)Φ(z)+tΦ(w). For every A⊆C, Φ maps d_C-open/closed sets, interior, closure, and boundary to the corresponding Euclidean notions; A is bounded, compact, or connected exactly when Φ[A] has the corresponding property.",
  "deps": [
    "thm-complex-numbers-are-the-real-coordinate-plane",
    "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
    "def-complex-metric-convergence-and-continuity",
    "def-p-norms-on-rn",
    "def-isometry-and-metric-embedding",
    "def-metric-ball",
    "def-metric-topology",
    "thm-metric-open-set-algebra",
    "def-homeomorphism-and-open-maps",
    "def-metric-interior-closure-boundary",
    "def-metric-compactness",
    "def-metric-bounded-diameter",
    "thm-continuous-image-of-a-connected-space",
    "thm-continuous-image-of-a-compact-space-is-compact"
  ],
  "justified_by": [],
  "proof_obligations": [
    "Use the coordinate bijection and |z-w|=||Φz-Φw||₂ from the complex metric definition to prove distance preservation for every pair.",
    "Use real scalar preservation and addition to prove Φ((1−t)z+tw)=(1−t)Φ(z)+tΦ(w) for arbitrary real t; this supplies the exact affine-segment interface used by complex contours and triangle consumers.",
    "Show directly from equality of distances that Φ and Φ⁻¹ carry open metric balls to open metric balls; this proves continuity and openness and supplies the homeomorphism without relying on any remark.",
    "Transfer closure, interior, boundary, open and closed sets from the homeomorphism and the metric interior/closure/boundary definitions.",
    "Transfer boundedness by equality of all pairwise distances, or equivalently equality of balls around corresponding centers.",
    "Transfer compactness using continuity of Φ and Φ⁻¹ and the metric continuous-image theorem; transfer connectedness using the corresponding topological continuous-image theorem in both directions.",
    "Check the metric topology's open-set algebra and state the ambient metric/topological spaces in every application."
  ],
  "sources": [
    {
      "url": "https://www.jirka.org/ca/ca.pdf",
      "locator": "Chapter 2, complex plane identified with R²"
    }
  ],
  "existing_supplier_checks": [
    "def-complex-metric-convergence-and-continuity already defines d_C(z,w)=||Φz-Φw||₂.",
    "thm-complex-numbers-are-the-real-coordinate-plane supplies the coordinate bijection but does not itself prove topological transport."
  ],
  "unresolved_obligations": [],
  "source_report": "research/quantum-computing-planning/reports/qc_r1.md"
}
```

### `thm-complex-coordinate-map-preserves-real-total-differentiability`

```json
{
  "id": "thm-complex-coordinate-map-preserves-real-total-differentiability",
  "kind": "theorem",
  "statement_or_definition": "For open U⊆C and f:U→C, put f_R=Φ∘f∘Φ⁻¹ on Φ[U]. At z∈U, f_R is totally differentiable at Φ(z) exactly when there is a real-linear L:C_R→C_R and a remainder r(h) with f(z+h)=f(z)+L(h)+r(h) and ||r(h)||₂/|h|→0; then Df_R(Φ(z))=Φ∘L∘Φ⁻¹. This gives the precise real-total-differentiability interface for f.",
  "deps": [
    "thm-complex-coordinate-isometry-and-topology-transport",
    "thm-complex-coordinate-map-preserves-real-scalar-multiplication",
    "def-total-derivative-in-euclidean-space",
    "def-euclidean-linear-map"
  ],
  "justified_by": [],
  "proof_obligations": [
    "Make the realification of the domain and codomain explicit using Φ; do not identify a complex-linear derivative with an arbitrary real-linear derivative.",
    "Use real linearity of Φ to conjugate the candidate real-linear map.",
    "In the Frechet remainder definition, apply the exact norm identity ||Φh||₂=|h| to show the remainder divided by the input norm tends to zero in one coordinate model exactly when it does in the other.",
    "Prove the reverse direction by applying the same argument to Φ⁻¹."
  ],
  "sources": [
    {
      "url": "https://www.jirka.org/ca/ca.pdf",
      "locator": "Section 2.2.2, real-coordinate treatment of Wirtinger derivatives"
    }
  ],
  "existing_supplier_checks": [
    "The complex differentiability/Wirtinger material already uses total differentiability on R², but no direct complex-to-real total-derivative transport theorem was found in the audited closure."
  ],
  "unresolved_obligations": [],
  "source_report": "research/quantum-computing-planning/reports/qc_r1.md"
}
```

### `def-complex-path-polygonal-length-and-rectifiability`

```json
{
  "id": "def-complex-path-polygonal-length-and-rectifiability",
  "kind": "definition",
  "statement_or_definition": "For a≤b and a d_C-continuous path γ:[a,b]→C, define each partition sum by ℓ_P^C(γ)=Σ_i |γ(t_{i+1})−γ(t_i)|, define L_C(γ) as the extended-real supremum over partitions when a<b, and call γ rectifiable iff L_C(γ)<∞. On a singleton interval set L_C=0 and every path is rectifiable.",
  "deps": [
    "def-complex-numbers-and-arithmetic",
    "def-complex-metric-convergence-and-continuity",
    "def-metric-continuity",
    "def-interval",
    "lem-real-line-is-a-metric-space",
    "def-partition-and-refinement",
    "def-complete-ordered-field",
    "def-extended-reals",
    "lem-extended-reals-complete"
  ],
  "justified_by": [],
  "proof_obligations": [
    "Check every partition sum is a finite nonnegative real using the modulus and metric definitions.",
    "Use extended-real completeness for the supremum, and state the finite-length criterion without conflating it with bounded trace.",
    "Specify the singleton convention separately because the partition definition requires distinct interval endpoints."
  ],
  "sources": [
    {
      "url": "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf",
      "locator": "Chapter 1, Section 3"
    },
    {
      "url": "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf",
      "locator": "Chapter 4"
    }
  ],
  "existing_supplier_checks": [
    "def-path-polygonal-length-and-rectifiability-in-rn supplies the R^n analogue but does not type-check as a definition on C."
  ],
  "unresolved_obligations": [],
  "source_report": "research/quantum-computing-planning/reports/qc_r1.md"
}
```

### `thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed`

```json
{
  "id": "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed",
  "kind": "theorem",
  "statement_or_definition": "For a continuous γ:[a,b]→C, put Γ=Φ∘γ=(x,y). Every partition sum for γ under |·| equals the corresponding R² Euclidean polygonal sum for Γ, so L_C(γ)=L_R²(Γ), including singleton intervals. Consequently γ is rectifiable iff x and y have bounded variation. If Γ is continuous piecewise C¹ with derivative continuous on each closed piece, then γ is rectifiable and L_C(γ)=Σ_j ∫ ||Γ'_j(t)||₂ dt = Σ_j ∫ sqrt(x'_j(t)^2+y'_j(t)^2) dt; corners and zero-speed pieces are allowed.",
  "deps": [
    "def-complex-path-polygonal-length-and-rectifiability",
    "thm-complex-coordinate-isometry-and-topology-transport",
    "def-complex-conjugate-real-imaginary-part-and-modulus",
    "def-path-polygonal-length-and-rectifiability-in-rn",
    "thm-rectifiable-iff-coordinate-functions-have-bounded-variation",
    "cor-piecewise-c1-paths-have-additive-speed-integral-length"
  ],
  "justified_by": [],
  "proof_obligations": [
    "Prove continuity of Γ from continuity of γ using the coordinate isometry.",
    "For each partition chord, use |z−w|=||Φz−Φw||₂; sum termwise and then take the same supremum, treating singleton intervals separately.",
    "Apply thm-rectifiable-iff-coordinate-functions-have-bounded-variation to Γ=(x,y), obtaining both directions of the coordinate BV criterion.",
    "For piecewise C¹ Γ, apply the existing R² piecewise-C¹ speed-integral corollary on the same finite subdivision; no matching derivative values are needed at corners.",
    "Use the Euclidean norm formula to write each speed as sqrt(x'²+y'²); do not invoke an untyped complex derivative."
  ],
  "sources": [
    {
      "url": "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf",
      "locator": "Chapter 4, rectifiable paths and arc length"
    },
    {
      "url": "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf",
      "locator": "Section 1.1, piecewise-C¹ arc length"
    },
    {
      "url": "https://www.math.iitb.ac.in/~ars/ma403.pdf",
      "locator": "Section 5, coordinate criterion for rectifiable paths"
    }
  ],
  "existing_supplier_checks": [
    "The R² BV and speed-integral results already exist in the closure; the missing interface is the C-valued path definition and exact coordinate transport."
  ],
  "unresolved_obligations": [],
  "source_report": "research/quantum-computing-planning/reports/qc_r1.md"
}
```

### `thm-complex-path-length-invariant-under-monotone-reparametrization`

```json
{
  "id": "thm-complex-path-length-invariant-under-monotone-reparametrization",
  "kind": "theorem",
  "statement_or_definition": "If γ:[a,b]→C is continuous and φ:[c,d]→[a,b] is continuous, surjective, and monotone in either direction, then L_C(γ∘φ)=L_C(γ), including singleton intervals. Increasing maps preserve orientation and decreasing maps reverse it.",
  "deps": [
    "def-complex-path-polygonal-length-and-rectifiability",
    "thm-complex-path-coordinate-length-rectifiability-and-piecewise-c1-speed",
    "thm-arc-length-is-invariant-under-monotone-reparametrization",
    "def-monotone-function"
  ],
  "justified_by": [],
  "proof_obligations": [
    "Set Γ=Φ∘γ and observe Φ∘(γ∘φ)=Γ∘φ.",
    "Use the complex/R² length equality on both paths and the existing R² monotone-reparametrization theorem; cover increasing and decreasing cases and singleton intervals.",
    "Do not apply the existing R² reparametrization theorem directly to a C-valued path."
  ],
  "sources": [
    {
      "url": "https://zr9558.com/wp-content/uploads/2013/11/complex_analysis-stein-shakarchi.pdf",
      "locator": "Chapter 1, Section 3"
    },
    {
      "url": "https://people.math.ethz.ch/~lang/DG1_9Jan2025.pdf",
      "locator": "Section 1.1, arc-length invariance under monotone reparametrization"
    }
  ],
  "existing_supplier_checks": [
    "thm-arc-length-is-invariant-under-monotone-reparametrization proves the result for R^n paths only; this typed theorem transports it to C via the coordinate length equality."
  ],
  "unresolved_obligations": [],
  "source_report": "research/quantum-computing-planning/reports/qc_r1.md"
}
```

**Example obligation:** Work a concrete finite-input example that exercises the declared interface and its boundary cases, with verification if it asserts a consequence. No external proof fallback, invented source reading, or acceptance stamp.

## Pointwise Extended-Real Function Products

**Pages:** `pointwise-extended-real-function-products` / `pointwise-extended-real-function-products-examples`. **Orders:** 192.1 / 192.10999999999999. **Requires:** `limsup-and-subsequential-limits`.

The following full contracts are the required A inventory. Preserve their richest sound scope, prove every stated property, and add the corresponding B worked example.

### `def-measurable-pointwise-extended-real-product`

```json
{
  "id": "def-measurable-pointwise-extended-real-product",
  "kind": "definition",
  "deps": [
    "def-extended-reals",
    "def-extended-real-valued-measurable-function"
  ],
  "type": "For each measurable space (X,A), define a function-level operation ⊙_X : Meas(X,Rbar) × Meas(X,Rbar) → Rbar^X. Its codomain is all extended-real-valued functions, not a claim that the output is measurable.",
  "pointwise_value_cases": [
    "For x∈X, set (f⊙_X g)(x)=0 if f(x)=0 or g(x)=0. This includes each of 0·(+∞), 0·(−∞), (+∞)·0, and (−∞)·0.",
    "If both values are finite real numbers, set (f⊙_X g)(x)=f(x)g(x) using the real field product.",
    "Otherwise both values are nonzero and at least one is infinite: return +∞ when their signs agree and −∞ when their signs differ, with sign(+∞)=+ and sign(−∞)=−."
  ],
  "separation_from_existing_arithmetic": "This is a total operation on measurable-function inputs, written with distinct ⊙_X notation. It does not define or change a scalar multiplication on Rbar, and does not change the partial product ab of def-extended-reals, which remains undefined when one factor is zero and the other is ±∞. It is a formula convention, not a rule for limits and not a field operation.",
  "remaining_undefined_operations": "The existing pointwise sum f+g remains partial at (+∞,−∞) and (−∞,+∞); statements using it require pointwise definedness. No subtraction, division, exponentiation, or absolute-value operation on Rbar is added. Write a defined difference as u+(-v) only after proving that partial addition is defined.",
  "sources_to_carry_forward": [
    {
      "title": "Sheldon Axler, Measure, Integration and Real Analysis, Section 2B",
      "url": "https://measure.axler.net/MIRA.pdf",
      "locator": "Section 2B, cited by the existing remark for the pointwise product convention"
    },
    {
      "title": "John K. Hunter, Measure Theory, Definition 3.3",
      "url": "https://www.math.ucdavis.edu/~hunter/measure_theory/measure_notes.pdf",
      "locator": "Definition 3.3, cited by the existing remark for the pointwise product convention"
    }
  ],
  "well_definedness_obligations": [
    "Prove the zero, finite-finite, and nonzero-with-an-infinite-factor cases are exhaustive and disjoint, so ⊙_X assigns exactly one value in Rbar at every x.",
    "Check symmetry, agreement with the ordinary real product on finite values, agreement with the existing partial product wherever that product is defined, and all four zero-infinity conventions explicitly.",
    "Do not invoke distributivity, cancellation, or a field law at infinite values; any product identity used by the measurability proof must be verified by a finite sign/zero case analysis."
  ],
  "source_report": "research/quantum-computing-planning/reports/qc_r5.md"
}
```

**Owner refinement:** Define the total pointwise operation on all functions X→Rbar, with deps only `def-extended-reals`; this agrees exactly with the recipe on measurable inputs. No measurability assertion. Keep ordinary partial scalar extended arithmetic distinct. See the fully authored proposed `def-measurable-pointwise-extended-real-product` carrier in the real-measure proposal.

**Example obligation:** Work a concrete finite-input example that exercises the declared interface and its boundary cases, with verification if it asserts a consequence. No external proof fallback, invented source reading, or acceptance stamp.
