## Algebraic Geometry

Completed visual review of **1111 items across 74 pages**, with **2312 image tiles**. Findings: 100 confirmed, 2 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/algebraic-geometry/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/algebraic-geometry/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/algebraic-geometry/category-review-receipt.json).

### Confirmed rendering defects

#### algebraic-geometry / confirmed 001: `lem-affine-algebraic-group-faithful-rational-representation`

- Location: **Proof technique**; source lines 71.
- Pages: `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Visible defect: The rendered proof-technique label shows literal dollar delimiters and LaTeX around A and (A,Δ).
- Future repair: Render the proof-technique field with supported math markup or rewrite the formula in plain words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-affine-algebraic-group-faithful-rational-representation--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-affine-algebraic-group-faithful-rational-representation.md).

Exact frozen source lines:

```text
71: **Proof technique:** put each element of $A$ inside a finite-dimensional subspace of the regular comodule $(A,\Delta)$, then read the matrix coefficients of a large such subspace off the counit.
```

#### algebraic-geometry / confirmed 002: `lem-arith-polarization-and-picard-twist-ampleness`

- Location: **Proof technique**; source lines 67.
- Pages: `abelian-varieties-base-change-and-arithmetic-models`.
- Visible defect: The rendered proof-technique label shows literal dollar delimiters and LaTeX for the bundle and Mumford map.
- Future repair: Render the proof-technique field with supported math markup or rewrite the formula in plain words.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-polarization-and-picard-twist-ampleness--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-arith-polarization-and-picard-twist-ampleness.md).

Exact frozen source lines:

```text
67: **Proof technique:** direct: compare the bundle $(\operatorname{id},\varphi_{\mathcal L})^*\mathcal P$ with $\mathcal L^2$, use that both have Mumford map $2\varphi_{\mathcal L}$, and invoke invariance of ampleness under algebraically trivial twists.
```

#### algebraic-geometry / confirmed 003: `lem-k-theory-of-projective-space-and-projections`

- Location: **Proof technique**; source lines 93.
- Pages: `chow-groups-intersection-products-and-grothendieck-riemann-roch`.
- Visible defect: The rendered proof-technique label shows literal dollar delimiters and LaTeX for P×ᵧP.
- Future repair: Render the proof-technique field with supported math markup or rewrite the formula in plain words.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-k-theory-of-projective-space-and-projections--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-k-theory-of-projective-space-and-projections.md).

Exact frozen source lines:

```text
93: **Proof technique:** direct; resolve the diagonal of $P\times_YP$ by the Koszul complex of its defining regular section, push forward, and read generation and independence off the resulting class identity.
```

#### algebraic-geometry / confirmed 004: `lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction`

- Location: **Hyperplane restriction–Gysin composite and its exact normalization**; source lines 96.
- Pages: `projective-perverse-hard-lefschetz-and-decomposition`.
- Visible defect: The local construction text displays formula syntax such as i!k_M and D_D without typesetting the subscripts.
- Future repair: Wrap the local construction formula in renderer-supported math delimiters and typeset its subscripts.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction--04.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-projective-hodge-perverse-package-closes-under-defect-and-image-dimension-induction.md).

Exact frozen source lines:

```text
96: i!k_M = D_D i*D_M k_M = D_D(k_D[2m]) = k_D[-2].
```

#### algebraic-geometry / confirmed 005: `lem-smooth-closed-immersion-regular-conormal-sequence`

- Location: **Proof technique**; source lines 81.
- Pages: `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Visible defect: The rendered proof-technique label shows literal dollar delimiters around H₁.
- Future repair: Render the proof-technique field with supported math markup or rewrite H₁ in plain words.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-smooth-closed-immersion-regular-conormal-sequence--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-smooth-closed-immersion-regular-conormal-sequence.md).

Exact frozen source lines:

```text
81: **Proof technique:** compute the local codimension at every scheme point, obtain a regular sequence from the regular-quotient criterion, identify its conormal basis using Koszul $H_1$, and prove left exactness of the conormal sequence by the ranks of smooth differential modules.
```

#### algebraic-geometry / confirmed 006: `ex-rational-parametrization-circle-conic`

- Location: **Title**; source lines 4.
- Pages: `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`.
- Visible defect: The title renders x^2 and y^2 with literal carets instead of superscripted exponents.
- Future repair: Render the title formula with math markup or spell the equation in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-rational-parametrization-circle-conic--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-rational-parametrization-circle-conic.md).

Exact frozen source lines:

```text
4: title: "When char(k) is not 2, the affine circle x^2 + y^2 = 1 is birational to the affine line"
```

#### algebraic-geometry / confirmed 007: `lem-central-ga-subgroup-of-smooth-connected-unipotent-group`

- Location: **Title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The title renders G_a with a literal underscore instead of a subscript.
- Future repair: Render G_a as inline math in the title, or write “the additive group” in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-central-ga-subgroup-of-smooth-connected-unipotent-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-central-ga-subgroup-of-smooth-connected-unipotent-group.md).

Exact frozen source lines:

```text
4: title: "A nontrivial smooth connected unipotent group with split torus action over a perfect field has a stable central G_a"
```

#### algebraic-geometry / confirmed 008: `thm-affine-variety-product-coordinate-ring`

- Location: **Title**; source lines 4.
- Pages: `products-segre-and-veronese-embeddings-and-grassmannians`.
- Visible defect: The title renders k[X], k[Y], and tensor_k as plain text with a literal underscore.
- Future repair: Render the coordinate-ring formula with math markup in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-affine-variety-product-coordinate-ring--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-affine-variety-product-coordinate-ring.md).

Exact frozen source lines:

```text
4: title: The product of affine varieties has coordinate ring k[X] tensor_k k[Y]
```

#### algebraic-geometry / confirmed 009: `thm-unipotent-group-triangular-criterion`

- Location: **Title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The title renders U_n with a literal underscore instead of a subscript.
- Future repair: Render U_n as inline math in the title, or spell out the upper unitriangular group in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-unipotent-group-triangular-criterion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-unipotent-group-triangular-criterion.md).

Exact frozen source lines:

```text
4: title: Unipotent groups are exactly the subgroups of some U_n, equivalently the groups with coconnected coordinate Hopf algebra
```

#### algebraic-geometry / confirmed 010: `lem-arith-coherent-kunneth-and-proper-image-dual`

- Location: **Proof technique**; source lines 70.
- Pages: `abelian-varieties-base-change-and-arithmetic-models`.
- Visible defect: The rendered proof-technique label exposes literal dollar delimiters around H^1 and the phi subscript formula.
- Future repair: Use renderer-supported math delimiters for the proof-technique field, or replace the formulas with plain words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-coherent-kunneth-and-proper-image-dual--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-arith-coherent-kunneth-and-proper-image-dual.md).

Exact frozen source lines:

```text
70: **Proof technique:** direct: bound $H^1$ by a Hopf-algebra primitivity argument, identify the Picard tangent space, then control the image of $\varphi_{\mathcal L}$ and its kernel.
```

#### algebraic-geometry / confirmed 011: `lem-arith-prime-to-characteristic-multiplication-etale`

- Location: **Proof technique**; source lines 47.
- Pages: `abelian-varieties-base-change-and-arithmetic-models`.
- Visible defect: The rendered proof-technique label exposes literal dollar delimiters around n.
- Future repair: Remove the dollar delimiters or use math markup supported in the proof-technique field.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-prime-to-characteristic-multiplication-etale--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-arith-prime-to-characteristic-multiplication-etale.md).

Exact frozen source lines:

```text
47: **Proof technique:** direct: compute the differential of multiplication by $n$, apply the Jacobian criterion, and specialise.
```

#### algebraic-geometry / confirmed 012: `ex-parabola-is-affine-line`

- Location: **title**; source lines 4.
- Pages: `affine-algebraic-sets-and-coordinate-rings-examples`.
- Visible defect: The title renders inline math markers and formula text literally in the page heading.
- Future repair: Rewrite the title in words without LaTeX math delimiters or formula syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-parabola-is-affine-line--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-parabola-is-affine-line.md).

Exact frozen source lines:

```text
4: title: "The parabola y=x^2 has coordinate ring k[t] and isomorphic intrinsic geometry to the affine line"
```

#### algebraic-geometry / confirmed 013: `lem-homogeneous-curves-and-automorphisms-of-p1`

- Location: **title**; source lines 4.
- Pages: `split-reductive-root-systems-bruhat-cells-and-parabolics`.
- Visible defect: The title renders P^1 literally instead of typesetting the exponent in the page heading.
- Future repair: Replace P^1 in the title with plain-language wording such as “projective line”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-homogeneous-curves-and-automorphisms-of-p1--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-homogeneous-curves-and-automorphisms-of-p1.md).

Exact frozen source lines:

```text
4: title: Homogeneous curves and automorphisms of P^1
```

#### algebraic-geometry / confirmed 014: `lem-projective-space-top-cohomology-residue-pairing`

- Location: **title**; source lines 4.
- Pages: `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Visible defect: The title renders H^0 literally instead of typesetting the exponent in the page heading.
- Future repair: Rewrite the title in words without inline formula syntax.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-projective-space-top-cohomology-residue-pairing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-projective-space-top-cohomology-residue-pairing.md).

Exact frozen source lines:

```text
4: title: Residue pairing between H^0 and top cohomology of projective space
```

#### algebraic-geometry / confirmed 015: `thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients`

- Location: **title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The title renders G_a literally, including its underscore, in the page heading.
- Future repair: Replace G_a in the title with plain-language wording such as “the additive group”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-unipotent-groups-have-central-series-with-subgroups-of-ga-quotients.md).

Exact frozen source lines:

```text
4: title: "Unipotent groups have central series with quotients embedded in G_a"
```

#### algebraic-geometry / confirmed 016: `lem-double-plus-simple-cubic-rational-surface-branch-terminates`

- Location: **Facts & Assumptions**; source lines 52.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-double-plus-simple-cubic-rational-surface-branch-terminates--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-double-plus-simple-cubic-rational-surface-branch-terminates.md).

Exact frozen source lines:

```text
52: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 017: `lem-finite-normal-surface-cover-completed-local-degree-bound`

- Location: **Facts & Assumptions**; source lines 48.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-finite-normal-surface-cover-completed-local-degree-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-finite-normal-surface-cover-completed-local-degree-bound.md).

Exact frozen source lines:

```text
48: [F4] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 018: `lem-local-normal-surface-modification-dimension-and-projective-cohomology`

- Location: **Facts & Assumptions**; source lines 51.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-local-normal-surface-modification-dimension-and-projective-cohomology--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-local-normal-surface-modification-dimension-and-projective-cohomology.md).

Exact frozen source lines:

```text
51: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 019: `lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate`

- Location: **Facts & Assumptions**; source lines 40.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normal-complete-surface-nonsingular-formal-arc-blowups-terminate.md).

Exact frozen source lines:

```text
40: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 020: `lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it`

- Location: **Facts & Assumptions**; source lines 38.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it.md).

Exact frozen source lines:

```text
38: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 021: `lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module`

- Location: **Facts & Assumptions**; source lines 40.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module.md).

Exact frozen source lines:

```text
40: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 022: `lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function`

- Location: **Facts & Assumptions**; source lines 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-rational-gorenstein-surface-tangent-conic-and-hilbert-function.md).

Exact frozen source lines:

```text
43: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 023: `lem-regular-surface-reflexive-modules-and-codimension-one-lattices`

- Location: **Facts & Assumptions**; source lines 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-regular-surface-reflexive-modules-and-codimension-one-lattices--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-regular-surface-reflexive-modules-and-codimension-one-lattices.md).

Exact frozen source lines:

```text
43: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 024: `lem-surface-generic-power-series-formal-fibres`

- Location: **Facts & Assumptions**; source lines 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-generic-power-series-formal-fibres--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-generic-power-series-formal-fibres.md).

Exact frozen source lines:

```text
43: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 025: `lem-ample-divisor-positive-intersection-on-smooth-projective-surface`

- Location: **Proof technique**; source lines 95.
- Pages: `surface-riemann-roch-and-the-hodge-index-theorem`.
- Visible defect: The proof-technique label is rendered as uppercase prose and exposes literal `$H$`, `$D$`, and `\mathcal` markup instead of typeset mathematics.
- Future repair: Render the proof-technique field with the same inline-math renderer as the item body, or rewrite the field without math delimiters.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-ample-divisor-positive-intersection-on-smooth-projective-surface--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-ample-divisor-positive-intersection-on-smooth-projective-surface.md).

Exact frozen source lines:

```text
95: **Proof technique:** direct: replace $H$ by a very ample power, express its intersection with the curve $D$ as the first difference of the Hilbert polynomial of $\mathcal O_D$, and read positivity off the leading coefficient.
```

#### algebraic-geometry / confirmed 026: `lem-arith-group-model-with-abelian-generic-fibre-quasiprojective`

- Location: **Proof technique**; source lines 59.
- Pages: `abelian-varieties-base-change-and-arithmetic-models`.
- Visible defect: The proof-technique label visibly prints `$\mathcal O(D)$` and `$H$` literally rather than rendering them as mathematics.
- Future repair: Render the proof-technique field with inline math support or remove the raw math delimiters.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-group-model-with-abelian-generic-fibre-quasiprojective--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-arith-group-model-with-abelian-generic-fibre-quasiprojective.md).

Exact frozen source lines:

```text
59: **Proof technique:** direct: fibre-density lets the square produce enough sections of $\mathcal O(D)$ to cover $H$, and the affine-section chart construction embeds the model projectively.
```

#### algebraic-geometry / confirmed 027: `lem-arith-theta-extension-splitting-and-isotropic-descent`

- Location: **Proof technique**; source lines 66.
- Pages: `abelian-varieties-base-change-and-arithmetic-models`.
- Visible defect: The proof-technique label visibly prints the `$\mathbf G_m$` delimiters and command rather than typesetting the group.
- Future repair: Render the proof-technique field with inline math support or rewrite the group name in plain text.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-theta-extension-splitting-and-isotropic-descent--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-arith-theta-extension-splitting-and-isotropic-descent.md).

Exact frozen source lines:

```text
66: **Proof technique:** direct: build the theta group from translation isomorphisms, split commutative $\mathbf G_m$-extensions of finite groups by finite Cartier duality, and conclude descent of isotropic line bundles along the quotient.
```

#### algebraic-geometry / confirmed 028: `ex-root-groups-and-bruhat-cells-for-sl2`

- Location: **Title and Statement**; source lines 4, 31.
- Pages: `split-reductive-root-systems-bruhat-cells-and-parabolics-examples`.
- Visible defect: The item heading and an internal-reference title display literal `_2` subscripts instead of formatted mathematical notation.
- Future repair: Use math-aware title markup or spell out the group name in plain text in both titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-root-groups-and-bruhat-cells-for-sl2--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-root-groups-and-bruhat-cells-for-sl2.md).

Exact frozen source lines:

```text
4: title: Root groups and Bruhat cells for SL_2
31: Assume the Axiom of Choice inherited from the named suppliers. Let $k$ be any field and $G=\mathrm{SL}_2$ over $k$ with diagonal torus $T_2=\{\operatorname{diag}(x,x^{-1})\}$, upper triangular Borel $B$, $U^+=\{\binom{1\ a}{0\ 1}\}$ and $U^-=\{\binom{1\ 0}{a\ 1}\}$ ([[def-root-datum-of-a-split-reductive-group]], [[lem-sl2-structure-and-root-coordinates]], [[thm-bruhat-decomposition-for-split-reductive-group]]). The root datum is $X(T_2)=\mathbb Z\chi$ with $\alpha=2\chi$ and $\alpha^\vee=\chi^\vee$, so $\langle\alpha,\alpha^\vee\rangle=2$ and the group is simply connected; the root groups are $U_{\pm\alpha}=U^\pm$, $n_\alpha=\binom{0\ 1}{-1\ 0}$ represents $s_\alpha$, $tu_\alpha(a)t^{-1}=u_\alpha(\alpha(t)a)$, and $\mathfrak{sl}_2=\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ with $\dim\mathfrak g_{\pm\alpha}=1$. The Weyl group is $W=\{1,s_\alpha\}\cong\mathbb Z/2$; the Bruhat decomposition is $G=B\sqcup Bn_\alpha B$ with $Bn_\alpha B=U^+n_\alpha B$ the open Bruhat cell, parametrized by $U^+\times B\cong\mathbf A^1\times\mathbf G_m\times\mathbf A^1$; separately $U^-T_2U^+$ is the open Gaussian cell; on $k$-points $\mathrm{SL}_2(k)=B(k)\sqcup B(k)n_\alpha B(k)$, while $G/B\cong\mathbf P^1$ with $G(k)$ acting through $\mathrm{PGL}_2(k)$. The cell $B$ has dimension $2$ and the open Bruhat cell has dimension $3$; the unique longest element $w_0=s_\alpha$ gives this dense open cell, and the opposite Borel is $B^-=U^-T$.
```

#### algebraic-geometry / confirmed 029: `ex-upper-triangular-unipotent-groups`

- Location: **Title and Statement**; source lines 4, 33.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points-examples`.
- Visible defect: The title and internal-reference title show literal `_2` and `_n` subscripts.
- Future repair: Use math-aware title markup or spell out the group notation in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-upper-triangular-unipotent-groups--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-upper-triangular-unipotent-groups.md).

Exact frozen source lines:

```text
4: title: Upper unitriangular groups are unipotent, and the additive group is U_2
33: Let $k$ be a field. The group scheme $U_n$ of upper unitriangular matrices ([[def-upper-unitriangular-group-scheme]]) is a smooth connected unipotent algebraic group over $k$: it is a closed subgroup of $U_n$ trivially, its coordinate ring $k[X_{ij}\mid i<j]$ is coconnected by the weight filtration, and its central series has additive quotients ([[lem-upper-unitriangular-central-series]]).
```

#### algebraic-geometry / confirmed 030: `ex-standard-parabolics-in-gl-n`

- Location: **Title**; source lines 4.
- Pages: `split-reductive-root-systems-bruhat-cells-and-parabolics-examples`.
- Visible defect: The item heading prints the literal `_n` subscript.
- Future repair: Use math-aware title markup or spell out the group name in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-standard-parabolics-in-gl-n--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-standard-parabolics-in-gl-n.md).

Exact frozen source lines:

```text
4: title: Standard parabolics in GL_n
```

#### algebraic-geometry / confirmed 031: `lem-classical-affine-closed-points-are-maximal-ideals`

- Location: **Facts & Assumptions**; source lines 36.
- Pages: `classical-affine-varieties-coordinate-rings-morphisms-and-rational-maps-interface`.
- Visible defect: The rendered internal-reference title reads “Evaluation at a point has kernel (x_1-a_1, …, x_n-a_n)” with literal underscores in the linked title.
- Future repair: Format the linked item title with math-aware notation or rewrite it without raw subscript markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-classical-affine-closed-points-are-maximal-ideals--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-classical-affine-closed-points-are-maximal-ideals.md).

Exact frozen source lines:

```text
36: [F2] Evaluation in the polynomial ring has maximal kernel $(x_i-a_i)_i$ ([[lem-evaluation-ideal-is-maximal]]).
```

#### algebraic-geometry / confirmed 032: `lem-semisimple-borel-root-factorization`

- Location: **Facts & Assumptions**; source lines 90.
- Pages: `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Visible defect: The rendered internal-reference title “The root sl_2 triple” exposes a literal underscore and subscript.
- Future repair: Format the linked theorem title with math-aware notation or spell out the rank-one Lie algebra name.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-semisimple-borel-root-factorization--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-semisimple-borel-root-factorization.md).

Exact frozen source lines:

```text
90: $[h_\alpha,e_\alpha]=2e_\alpha$. ([[thm-root-sl-two-triple]])
```

#### algebraic-geometry / confirmed 033: `prop-module-generated-by-a-primitive-vector`

- Location: **Facts & Assumptions**; source lines 54.
- Pages: `highest-weights-and-rational-representations-of-split-reductive-groups`.
- Visible defect: The rendered internal-reference title “Structure of SL_2 and root coordinates” shows a literal underscore subscript.
- Future repair: Format the linked item title with math-aware notation or spell out the group name in plain text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/prop-module-generated-by-a-primitive-vector--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/prop-module-generated-by-a-primitive-vector.md).

Exact frozen source lines:

```text
54: [F6] *Simple reflections.* For a simple root $\alpha$ the reflection acts on weights by $s_\alpha(\mu)=\mu-\langle\mu,\alpha^\vee\rangle\alpha$, and it is realized by an element of the normalizer of $T$ ([[lem-normalizer-action-permutes-weight-spaces]], [[thm-weyl-group-borel-chambers]], [[lem-sl2-structure-and-root-coordinates]]).
```

#### algebraic-geometry / confirmed 034: `thm-minimal-parabolic-flag-projection-is-p1-bundle`

- Location: **Statement**; source lines 46.
- Pages: `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Visible defect: The linked item title is displayed as “Projective orbit constructions for G/B and G/P_alpha”, leaving `_alpha` literal.
- Future repair: Format the linked item title with math-aware notation or spell out the parabolic label in words.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-minimal-parabolic-flag-projection-is-p1-bundle--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-minimal-parabolic-flag-projection-is-p1-bundle.md).

Exact frozen source lines:

```text
46: [[lem-semisimple-projective-orbit-flag-quotients]]. Then:
```

#### algebraic-geometry / confirmed 035: `lem-positive-conormal-degree-of-a-fibre-divisor`

- Location: **Remarks**; source lines 86, 87.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered remarks contain plain-text formula notation `d_i/e_i` and `O_Z`, with literal underscores and no mathematical formatting.
- Future repair: Wrap these mathematical expressions in inline math or rephrase them as prose.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-positive-conormal-degree-of-a-fibre-divisor--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-positive-conormal-degree-of-a-fibre-divisor.md).

Exact frozen source lines:

```text
86: - The rescaling by d_i/e_i is what makes the section vanish on all of Z while remaining nonzero on the chosen component.
87: - No embedded associated points of Z is used twice: to conclude that u vanishes on Z and that multiplication by g_i is injective on O_Z.
```

#### algebraic-geometry / confirmed 036: `lem-euler-characteristic-finite-support-twist-invariance`

- Location: **Proof technique**; source lines 103.
- Pages: `intersection-products-on-smooth-projective-surfaces`.
- Visible defect: Revision-2 rendering exposes dollar delimiters and a raw LaTeX command in the proof-technique field, and its text differs from the frozen snapshot, suggesting the rendered HTML is stale or mismatched.
- Future repair: Regenerate the item HTML from the frozen source and verify the proof-technique field is the prose on line 103, with no literal LaTeX delimiters.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-euler-characteristic-finite-support-twist-invariance--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-euler-characteristic-finite-support-twist-invariance.md).

Exact frozen source lines:

```text
103: **Proof technique:** direct; identify $Z$ and its sheaves, compute the cohomology of $i_*\kappa(p)$, trivialise the pullback of $\mathcal L$, and apply the projection formula.
```

#### algebraic-geometry / confirmed 037: `lem-positive-square-divisor-has-effective-multiple`

- Location: **Proof technique**; source lines 59.
- Pages: `surface-riemann-roch-and-the-hodge-index-theorem`.
- Visible defect: Revision-2 rendering exposes raw LaTeX delimiters/commands and uppercase text in the proof-technique field, differing from the frozen snapshot.
- Future repair: Regenerate the item HTML from the frozen source and verify the proof-technique field renders as the prose on line 59.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-positive-square-divisor-has-effective-multiple--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-positive-square-divisor-has-effective-multiple--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-positive-square-divisor-has-effective-multiple.md).

Exact frozen source lines:

```text
59: **Proof technique:** direct: for large $n$ the top cohomology of $L^{\otimes n}$ vanishes and Riemann-Roch makes the Euler characteristic positive; the sign in $h^0=\chi+h^1-h^2$ then gives a section.
```

#### algebraic-geometry / confirmed 038: `lem-upper-unitriangular-central-series`

- Location: **Title and Facts & Assumptions**; source lines 4, 41.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The mathematical subscript is shown as a literal underscore in the item title and internal reference title.
- Future repair: Use rendered math for the subscript in the title and linked definition title, or spell the notation in plain text without a raw underscore.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-upper-unitriangular-central-series--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-upper-unitriangular-central-series.md).

Exact frozen source lines:

```text
4: title: The central series of U_n with additive quotients
41: [F1] For every commutative unital $k$-algebra $R$, $U_n(R)$ is the group of upper unitriangular matrices in $\mathrm{GL}_n(R)$ and $T_n(R)$ the group of invertible upper triangular matrices, with $T_n=D_n\ltimes U_n$. ([[def-upper-unitriangular-group-scheme]], [[def-triangular-and-diagonal-matrices-over-a-commutative-ring]])
```

#### algebraic-geometry / confirmed 039: `cex-lie-root-system-does-not-record-full-root-datum`

- Location: **Facts & Assumptions**; source lines 37, 39.
- Pages: `split-reductive-root-systems-bruhat-cells-and-parabolics-examples`.
- Visible defect: The linked title exposes the literal underscore in the mathematical subscript.
- Future repair: Render the subscript in the linked title as math or use a plain-text title that does not contain raw LaTeX-style notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cex-lie-root-system-does-not-record-full-root-datum--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/cex-lie-root-system-does-not-record-full-root-datum.md).

Exact frozen source lines:

```text
37: [F1] The root data of the semisimple rank-one groups: for $\mathrm{SL}_2$ with $X(T_1)=\mathbb Z\chi_1$ one has $\Phi_1=\{\pm2\chi_1\}$, $\alpha_1^\vee=\chi_1^\vee$, and $X_*(T_1)=\mathbb Z\chi_1^\vee$; for $\mathrm{PGL}_2$ with $X(T_2)=\mathbb Z\chi_2$ one has $\Phi_2=\{\pm\chi_2\}$, $\alpha_2^\vee=2\chi_2^\vee$, and $X_*(T_2)=\mathbb Z\chi_2^\vee$ with $\mathbb Z\alpha_2^\vee=2\mathbb Z\chi_2^\vee$ ([[thm-split-rank-one-reductive-classification]], [[def-root-datum-of-a-split-reductive-group]], [[lem-sl2-structure-and-root-coordinates]]).
39: [F2] $\operatorname{Lie}(\mathrm{SL}_2)=\mathfrak{sl}_2$ and $\operatorname{Lie}(\mathrm{PGL}_2)=\mathfrak{sl}_2$ in characteristic $\neq2$: the differential of the central isogeny $\mathrm{SL}_2\to\mathrm{PGL}_2$ is an isomorphism of Lie algebras, both being the $2\times2$ traceless matrices, and the root space decomposition is $\mathfrak{sl}_2=\mathfrak t\oplus\mathfrak g_\alpha\oplus\mathfrak g_{-\alpha}$ ([[lem-sl2-structure-and-root-coordinates]], [[thm-root-subgroups-of-a-split-reductive-group]]).
```

#### algebraic-geometry / confirmed 040: `ex-borel-fixed-point-on-projective-space`

- Location: **Title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points-examples`.
- Visible defect: The rendered title contains the literal underscore in GL_n.
- Future repair: Typeset GL_n as math in the title, for example $\mathrm{GL}_n$, or use a plain-text name.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-borel-fixed-point-on-projective-space--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-borel-fixed-point-on-projective-space.md).

Exact frozen source lines:

```text
4: title: Borel subgroups of GL_n are flag stabilizers and act on projective space with a fixed line
```

#### algebraic-geometry / confirmed 041: `ex-fundamental-sl2-modules-in-characteristic-p`

- Location: **Title**; source lines 4.
- Pages: `highest-weights-and-rational-representations-of-split-reductive-groups-examples`.
- Visible defect: The rendered title contains the literal underscore in SL_2.
- Future repair: Typeset SL_2 as math in the title, for example $\mathrm{SL}_2$, or use a plain-text name.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-fundamental-sl2-modules-in-characteristic-p--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-fundamental-sl2-modules-in-characteristic-p.md).

Exact frozen source lines:

```text
4: title: "The simple modules of SL_2 and its fundamental representation"
```

#### algebraic-geometry / confirmed 042: `ex-fundamental-sl2-modules-in-characteristic-p`

- Location: **Example**; source lines 35, 36.
- Pages: `highest-weights-and-rational-representations-of-split-reductive-groups-examples`.
- Visible defect: The internal reference title is rendered with a literal underscore as “Structure of SL_2 and root coordinates.”
- Future repair: Typeset the SL_2 notation in the referenced item title or replace it with a plain-text title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-fundamental-sl2-modules-in-characteristic-p--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-fundamental-sl2-modules-in-characteristic-p.md).

Exact frozen source lines:

```text
35: $\alpha^\vee=\chi^\vee$ ([[def-root-datum-of-a-split-reductive-group]],
36: [[lem-sl2-structure-and-root-coordinates]]). The fundamental weight is
```

#### algebraic-geometry / confirmed 043: `lem-trigonalizable-iff-invariant-flags`

- Location: **Title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The rendered title contains the literal underscore in T_n.
- Future repair: Typeset T_n as math in the title or use a plain-text name.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-trigonalizable-iff-invariant-flags--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-trigonalizable-iff-invariant-flags.md).

Exact frozen source lines:

```text
4: title: Trigonalizable groups, invariant flags and embeddings into T_n
```

#### algebraic-geometry / confirmed 044: `lem-upper-unitriangular-coordinate-ring-is-coconnected`

- Location: **Title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The rendered title contains the literal underscore in U_n.
- Future repair: Typeset U_n as math in the title or use a plain-text name.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-upper-unitriangular-coordinate-ring-is-coconnected--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-upper-unitriangular-coordinate-ring-is-coconnected.md).

Exact frozen source lines:

```text
4: title: "Coconnected Hopf algebras: the coordinate ring of U_n and passage to quotients"
```

#### algebraic-geometry / confirmed 045: `lem-euler-characteristic-twist-integral-proper-curve`

- Location: **Proof technique**; source lines 100.
- Pages: `intersection-products-on-smooth-projective-surfaces`.
- Visible defect: The proof-technique label displays the dollar delimiters and LaTeX commands literally (including \mathcal, \chi, and \otimes).
- Future repair: Use math-free wording in the proof-technique field, or render its formula through a field that supports math.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-euler-characteristic-twist-integral-proper-curve--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-euler-characteristic-twist-integral-proper-curve.md).

Exact frozen source lines:

```text
100: **Proof technique:** devissage on the Noetherian scheme $X$ for the property $P(\mathcal G)$: "$\chi(X,\mathcal L\otimes\mathcal G)=r(\mathcal G)\deg_X(\mathcal L)+\chi(X,\mathcal G)$".
```

#### algebraic-geometry / confirmed 046: `lem-zero-section-gysin-and-excess-vector-subbundle`

- Location: **Proof technique**; source lines 55.
- Pages: `chow-groups-intersection-products-and-grothendieck-riemann-roch`.
- Visible defect: The proof-technique label displays the dollar signs around p^* literally.
- Future repair: Use “pull back along the pullback isomorphism” or render p^* as math in a supported field.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-zero-section-gysin-and-excess-vector-subbundle--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-zero-section-gysin-and-excess-vector-subbundle.md).

Exact frozen source lines:

```text
55: **Proof technique:** direct; pull the identity back along the bijection $p^*$, where it becomes the regular-section formula for the universal quotient section.
```

#### algebraic-geometry / confirmed 047: `thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps`

- Location: **Proof technique**; source lines 47.
- Pages: `projective-perverse-hard-lefschetz-and-decomposition`.
- Visible defect: The proof-technique label displays literal dollar delimiters and TeX command \dim.
- Future repair: Replace the pair notation with math-free wording such as “induction on relative dimension and image dimension.”
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-relative-hard-lefschetz-and-perverse-splitting-for-projective-algebraic-maps.md).

Exact frozen source lines:

```text
47: **Proof technique:** lexicographic well-founded induction on the pair $(r(f),\dim f(X))$, with defect the primary integer, using the simultaneous induction step of [F1].
```

#### algebraic-geometry / confirmed 048: `lem-surface-non-pth-power-detected-by-derivation`

- Location: **Remarks**; source lines 72.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The remark displays the caret and braces in g^{pN} as literal text.
- Future repair: Write the exponent in plain text (“g to the pN power”) or place the formula in supported math delimiters.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-non-pth-power-detected-by-derivation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-non-pth-power-detected-by-derivation.md).

Exact frozen source lines:

```text
72: - The multiplier g^{pN} is invisible to derivations and is used only to move f into the finite subalgebra.
```

#### algebraic-geometry / confirmed 049: `def-upper-unitriangular-group-scheme`

- Location: **title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The page heading displays the literal underscore in U_n instead of subscripted notation.
- Future repair: Format U_n as inline mathematics in the title so the n renders as a subscript.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/def-upper-unitriangular-group-scheme--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/def-upper-unitriangular-group-scheme.md).

Exact frozen source lines:

```text
4: title: The upper unitriangular group scheme U_n and its coordinate ring
```

#### algebraic-geometry / confirmed 050: `lem-smooth-trigonalizable-group-normal-series-refinement`

- Location: **title**; source lines 4.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The page heading displays the literal underscore in G_a instead of subscripted notation.
- Future repair: Format G_a as inline mathematics in the title so the a renders as a subscript.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-smooth-trigonalizable-group-normal-series-refinement--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-smooth-trigonalizable-group-normal-series-refinement.md).

Exact frozen source lines:

```text
4: title: "Unipotent radicals of smooth connected trigonalizable groups over perfect fields have normal G_a series"
```

#### algebraic-geometry / confirmed 051: `prop-smooth-commutative-algebraic-groups-are-trigonalizable`

- Location: **Statement**; source lines 37.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The linked reference title renders T_n with a literal underscore in “Trigonalizable groups, invariant flags and embeddings into T_n.”
- Future repair: Format T_n as inline mathematics in the referenced title so n renders as a subscript.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/prop-smooth-commutative-algebraic-groups-are-trigonalizable--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/prop-smooth-commutative-algebraic-groups-are-trigonalizable.md).

Exact frozen source lines:

```text
37: Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a smooth commutative affine algebraic group of finite type over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]]), together with a finite-dimensional rational representation on $V$ ([[def-rational-representation-and-comodule-of-an-affine-group-scheme]]). Then there is a basis of $V$ for which $G$ acts through upper triangular matrices. In particular every smooth commutative affine algebraic group over an algebraically closed field is trigonalizable ([[def-group-scheme-over-a-field]], [[lem-trigonalizable-iff-invariant-flags]]).
```

#### algebraic-geometry / confirmed 052: `thm-lie-kolchin-for-smooth-connected-solvable-groups`

- Location: **Statement**; source lines 44.
- Pages: `unipotent-solvable-groups-and-borel-fixed-points`.
- Visible defect: The linked reference title renders T_n with a literal underscore in “Trigonalizable groups, invariant flags and embeddings into T_n.”
- Future repair: Format T_n as inline mathematics in the referenced title so n renders as a subscript.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-lie-kolchin-for-smooth-connected-solvable-groups--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-lie-kolchin-for-smooth-connected-solvable-groups.md).

Exact frozen source lines:

```text
44: Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a smooth connected solvable affine algebraic group over $k$ ([[def-affine-scheme]], [[def-smooth-morphism-schemes]], [[def-derived-subgroup-and-solvable-algebraic-group]]). Then $G$ is trigonalizable: every simple rational representation of $G$ has dimension one, equivalently every finite-dimensional rational representation of $G$ admits a basis in which $G$ acts through upper triangular matrices ([[def-trigonalizable-algebraic-group]], [[lem-trigonalizable-iff-invariant-flags]]). The hypotheses smooth, connected, solvable and $k$ algebraically closed are all essential, and the theorem is not claimed over non-algebraically-closed fields.
```

#### algebraic-geometry / confirmed 053: `lem-existence-of-a-fibre-cutter`

- Location: **Facts & Assumptions**; source lines 45.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-existence-of-a-fibre-cutter--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-existence-of-a-fibre-cutter.md).

Exact frozen source lines:

```text
45: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 054: `lem-finite-separable-normal-surface-extension-preserves-bounded-h1`

- Location: **Facts & Assumptions**; source lines 42.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-finite-separable-normal-surface-extension-preserves-bounded-h1--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-finite-separable-normal-surface-extension-preserves-bounded-h1.md).

Exact frozen source lines:

```text
42: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 055: `lem-normal-projective-surface-dualizing-module-over-regular-local-base`

- Location: **Facts & Assumptions**; source lines 47.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-projective-surface-dualizing-module-over-regular-local-base--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normal-projective-surface-dualizing-module-over-regular-local-base.md).

Exact frozen source lines:

```text
47: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 056: `lem-projective-normal-surface-grauert-riemenschneider-vanishing`

- Location: **Facts & Assumptions**; source lines 40.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-projective-normal-surface-grauert-riemenschneider-vanishing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-projective-normal-surface-grauert-riemenschneider-vanishing.md).

Exact frozen source lines:

```text
40: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 057: `lem-rational-normal-surface-reduced-to-invertible-canonical-module`

- Location: **Facts & Assumptions**; source lines 44.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-normal-surface-reduced-to-invertible-canonical-module--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-rational-normal-surface-reduced-to-invertible-canonical-module.md).

Exact frozen source lines:

```text
44: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 058: `lem-surface-completion-base-change-preserves-closed-fibre-local-completions`

- Location: **Facts & Assumptions**; source lines 39.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-completion-base-change-preserves-closed-fibre-local-completions--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-completion-base-change-preserves-closed-fibre-local-completions.md).

Exact frozen source lines:

```text
39: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 059: `lem-surface-open-regular-locus`

- Location: **Facts & Assumptions**; source lines 51.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-open-regular-locus--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-open-regular-locus.md).

Exact frozen source lines:

```text
51: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 060: `lem-triple-cubic-rational-surface-branch-reduces-in-two-steps`

- Location: **Facts & Assumptions**; source lines 48.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact exposes literal “>” delimiters and the parenthesized def-choice-function marker in the prose, breaking the Axiom of Choice sentence.
- Future repair: Replace the angle-bracket delimiters and parenthetical def-choice-function marker with ordinary prose; retain the linked definition reference.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-triple-cubic-rational-surface-branch-reduces-in-two-steps--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-triple-cubic-rational-surface-branch-reduces-in-two-steps.md).

Exact frozen source lines:

```text
48: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 061: `cex-nilpotent-polynomial-data-invisible-to-zero-locus`

- Location: **title**; source lines 4.
- Pages: `affine-algebraic-sets-and-coordinate-rings-examples`.
- Visible defect: The rendered title shows the caret in “x^2” literally rather than as a superscript.
- Future repair: Use rendered math or a typographic superscript in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cex-nilpotent-polynomial-data-invisible-to-zero-locus--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/cex-nilpotent-polynomial-data-invisible-to-zero-locus.md).

Exact frozen source lines:

```text
4: title: "The ideals (x) and (x^2) have the same zero locus but different quotient rings"
```

#### algebraic-geometry / confirmed 062: `cex-regular-bijection-not-isomorphism-cusp`

- Location: **title**; source lines 4.
- Pages: `morphisms-local-rings-and-rational-maps-of-affine-varieties-examples`.
- Visible defect: The rendered title shows “mapsto” and the caret exponents literally.
- Future repair: Use rendered math or typographic arrow and superscripts in the title.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cex-regular-bijection-not-isomorphism-cusp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/cex-regular-bijection-not-isomorphism-cusp.md).

Exact frozen source lines:

```text
4: title: "The cusp parametrization t mapsto (t^2,t^3) is bijective but not an isomorphism"
```

#### algebraic-geometry / confirmed 063: `def-algebraic-cycle-and-cycle-group`

- Location: **title**; source lines 4.
- Pages: `chow-groups-intersection-products-and-grothendieck-riemann-roch`.
- Visible defect: The rendered title begins “lgebraic cycles”; the initial “A” in the frozen title is missing.
- Future repair: Preserve the initial title character when rendering the heading.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/def-algebraic-cycle-and-cycle-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/def-algebraic-cycle-and-cycle-group.md).

Exact frozen source lines:

```text
4: title: "Algebraic cycles and the cycle group of a scheme of finite type over a field"
```

#### algebraic-geometry / confirmed 064: `def-split-augmented-simplicial-objects-and-matching-objects`

- Location: **title**; source lines 4.
- Pages: `proper-hyperresolutions-and-mixed-hodge-restriction-images`.
- Visible defect: The rendered title begins “plit augmented”; the initial “S” in the frozen title is missing.
- Future repair: Preserve the initial title character when rendering the heading.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/def-split-augmented-simplicial-objects-and-matching-objects--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/def-split-augmented-simplicial-objects-and-matching-objects.md).

Exact frozen source lines:

```text
4: title: "Split augmented simplicial schemes and matching objects"
```

#### algebraic-geometry / confirmed 065: `lem-nonaffine-group-monomorphism-closed-immersion`

- Location: **title**; source lines 4.
- Pages: `nonaffine-algebraic-groups-barsotti-chevalley-and-abelian-varieties`.
- Visible defect: The rendered title begins “inite-type”; the initial “F” in the frozen title is missing.
- Future repair: Preserve the initial title character when rendering the heading.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-nonaffine-group-monomorphism-closed-immersion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-nonaffine-group-monomorphism-closed-immersion.md).

Exact frozen source lines:

```text
4: title: "Finite-type algebraic group monomorphisms are closed immersions"
```

#### algebraic-geometry / confirmed 066: `cor-degree-additive-proper-curve`

- Location: **Proof technique**; source lines 109.
- Pages: `intersection-products-on-smooth-projective-surfaces`.
- Visible defect: The proof-technique line displays inline math delimiters and LaTeX commands literally.
- Future repair: Render proof-technique text with the inline-math renderer, or rewrite its formulas in supported plain notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cor-degree-additive-proper-curve--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cor-degree-additive-proper-curve--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cor-degree-additive-proper-curve--03.png), [tile 04](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/cor-degree-additive-proper-curve--04.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/cor-degree-additive-proper-curve.md).

Exact frozen source lines:

```text
109: **Proof technique:** devissage on the Noetherian scheme $C$ for the defect $D(\mathcal F):=\chi(C,\mathcal F)-\chi(C,\mathcal L\otimes\mathcal F)-\chi(C,\mathcal M\otimes\mathcal F)+\chi(C,\mathcal L\otimes\mathcal M\otimes\mathcal F)$.
```

#### algebraic-geometry / confirmed 067: `lem-arith-mumford-map-degree-is-euler-characteristic-square`

- Location: **Proof technique**; source lines 72.
- Pages: `abelian-varieties-base-change-and-arithmetic-models`.
- Visible defect: The proof-technique line displays inline math delimiters and LaTeX commands literally.
- Future repair: Render proof-technique text with the inline-math renderer, or rewrite its formulas in supported plain notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-mumford-map-degree-is-euler-characteristic-square--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-mumford-map-degree-is-euler-characteristic-square--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-arith-mumford-map-degree-is-euler-characteristic-square--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-arith-mumford-map-degree-is-euler-characteristic-square.md).

Exact frozen source lines:

```text
72: **Proof technique:** direct: pull back the Poincare cohomology theorem along the finite flat isogeny $\varphi_{\mathcal L}$, compute $\chi(\Lambda(\mathcal L))$ twice, and deduce the square-degree formula and its invariance under field extension.
```

#### algebraic-geometry / confirmed 068: `thm-hodge-index-theorem-for-smooth-projective-surfaces`

- Location: **Proof technique**; source lines 67.
- Pages: `surface-riemann-roch-and-the-hodge-index-theorem`.
- Visible defect: The proof-technique line displays inline math delimiters and LaTeX commands literally.
- Future repair: Render proof-technique text with the inline-math renderer, or rewrite its formulas in supported plain notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-hodge-index-theorem-for-smooth-projective-surfaces--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-hodge-index-theorem-for-smooth-projective-surfaces--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-hodge-index-theorem-for-smooth-projective-surfaces.md).

Exact frozen source lines:

```text
67: **Proof technique:** direct: fix an ample reference class and reduce to the ample case, once directly and once through a perturbation $M$ depending on $H$ and $L$.
```

#### algebraic-geometry / confirmed 069: `lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups`

- Location: **Facts & Assumptions**; source lines 50, 52.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-complete-normal-surface-regular-resolution-converts-to-normalized-point-blowups.md).

Exact frozen source lines:

```text
50: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
52: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 070: `lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces`

- Location: **Facts & Assumptions**; source lines 41, 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-degree-p-inseparable-differential-trace-extends-on-normal-surfaces.md).

Exact frozen source lines:

```text
41: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
43: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 071: `lem-normal-surface-fibre-divisor-conormal-degree-positive`

- Location: **Facts & Assumptions**; source lines 43, 45.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-fibre-divisor-conormal-degree-positive--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-fibre-divisor-conormal-degree-positive--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-fibre-divisor-conormal-degree-positive--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normal-surface-fibre-divisor-conormal-degree-positive.md).

Exact frozen source lines:

```text
43: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
45: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 072: `lem-normalized-point-blowups-dominate-local-normal-surface-modifications`

- Location: **Facts & Assumptions**; source lines 42, 44.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normalized-point-blowups-dominate-local-normal-surface-modifications--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normalized-point-blowups-dominate-local-normal-surface-modifications--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normalized-point-blowups-dominate-local-normal-surface-modifications--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normalized-point-blowups-dominate-local-normal-surface-modifications.md).

Exact frozen source lines:

```text
42: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
44: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 073: `lem-projective-normal-surface-modification-h1-injects-off-special-fibre`

- Location: **Facts & Assumptions**; source lines 45, 47.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-projective-normal-surface-modification-h1-injects-off-special-fibre--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-projective-normal-surface-modification-h1-injects-off-special-fibre--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-projective-normal-surface-modification-h1-injects-off-special-fibre.md).

Exact frozen source lines:

```text
45: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
47: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 074: `lem-proper-surface-regularity-transfers-to-and-from-completion`

- Location: **Facts & Assumptions**; source lines 41, 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-proper-surface-regularity-transfers-to-and-from-completion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-proper-surface-regularity-transfers-to-and-from-completion--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-proper-surface-regularity-transfers-to-and-from-completion.md).

Exact frozen source lines:

```text
41: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
43: [F2] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])
```

#### algebraic-geometry / confirmed 075: `lem-rational-singular-point-blowup-canonical-pullback-surjective`

- Location: **Facts & Assumptions**; source lines 39, 41.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-singular-point-blowup-canonical-pullback-surjective--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-singular-point-blowup-canonical-pullback-surjective--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-singular-point-blowup-canonical-pullback-surjective--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-rational-singular-point-blowup-canonical-pullback-surjective.md).

Exact frozen source lines:

```text
39: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
41: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 076: `lem-surface-p-basis-subfield-separation`

- Location: **Facts & Assumptions**; source lines 38, 40.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-p-basis-subfield-separation--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-p-basis-subfield-separation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-p-basis-subfield-separation.md).

Exact frozen source lines:

```text
38: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
40: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 077: `thm-negativity-for-exceptional-curves-on-smooth-surfaces`

- Location: **Facts & Assumptions**; source lines 58, 60.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-negativity-for-exceptional-curves-on-smooth-surfaces--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-negativity-for-exceptional-curves-on-smooth-surfaces--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-negativity-for-exceptional-curves-on-smooth-surfaces--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-negativity-for-exceptional-curves-on-smooth-surfaces.md).

Exact frozen source lines:

```text
58: [F2] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
60: [F3] *def-cartier-divisor.* Let $X$ be a scheme and let $K_X$ be its sheaf of meromorphic functions, with the injective structure map $\mathcal O_X\to K_X$ (def-sheaf-total-quotient-rings, def-sheaf-on-topological-space). ([[def-cartier-divisor]])
```

#### algebraic-geometry / confirmed 078: `thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups`

- Location: **Facts & Assumptions**; source lines 44, 46.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-rational-gorenstein-normal-surface-singularity-resolved-by-point-blowups.md).

Exact frozen source lines:

```text
44: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
46: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 079: `thm-resolution-of-normal-surface-singularities`

- Location: **Facts & Assumptions**; source lines 69, 71.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: The rendered fact text exposes internal item slugs and raw blockquote markers instead of readable referenced prose.
- Future repair: Render linked item titles and format the referenced definition text as prose, removing literal blockquote markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-resolution-of-normal-surface-singularities--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-resolution-of-normal-surface-singularities--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-resolution-of-normal-surface-singularities--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-resolution-of-normal-surface-singularities.md).

Exact frozen source lines:

```text
69: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
71: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 080: `lem-smoothness-stable-under-product-classical`

- Location: **Proof**; source lines 129.
- Pages: `zariski-tangent-spaces-regular-points-smoothness-and-bertini`.
- Visible defect: The rendered proof ends with the literal Markdown marker “## Source qualification” appended to the final proof paragraph.
- Future repair: Separate the source-qualification section as a supported rendered section instead of leaving its heading markup in the proof text.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-smoothness-stable-under-product-classical--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-smoothness-stable-under-product-classical--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-smoothness-stable-under-product-classical--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-smoothness-stable-under-product-classical.md).

Exact frozen source lines:

```text
129: 3.1 The product with the zero-dimensional point $\operatorname{Spec}k$ is the other factor by [F8], and dimensions add as $0+d=d$; its map to $\operatorname{Spec}k$ has the zero-variable, zero-equation standard-smooth presentation allowed by [F11]. The one-dimensional example $\mathbb A^1_k\times_k\mathbb A^1_k=\mathbb A^2_k$ has the standard-smooth presentation with two variables and no equations by [F11], and its component dimension is $1+1=2$ by [F6]. If a factor is the empty scheme $\operatorname{Spec}0$, its tensor-product chart is empty and no point requires a smoothness check [F3]. AC is propagated because the smooth-morphism convention [F1] and the classical component and dimension suppliers [F6, F7] are stated under AC [F9]; the pointwise standard-smooth argument makes no simultaneous chart choice. There is no interval endpoint, and neither smoothness preservation nor the component-dimension assertion is an iff. [F1, F3, F6, F7, F8, F9, F11, step 1.1, step 1.2, step 2.1, given, algebra] ∎ ## Source qualification
```

#### algebraic-geometry / confirmed 081: `lem-chow-groups-of-projective-space`

- Location: **Proof technique**; source lines 75.
- Pages: `chow-groups-intersection-products-and-grothendieck-riemann-roch`.
- Visible defect: Inline math delimiters and the LaTeX command are shown literally in the rendered proof-technique sentence.
- Future repair: Render the proof-technique field with the same inline-math renderer as the proof body, or author the formula in the supported rich-text form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-chow-groups-of-projective-space--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-chow-groups-of-projective-space--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-chow-groups-of-projective-space.md).

Exact frozen source lines:

```text
75: **Proof technique:** direct; use localization and homotopy invariance for the affine and projective decompositions, and the cap operation of $\mathcal O(1)$ followed by degree for independence.
```

#### algebraic-geometry / confirmed 082: `lem-normal-surface-modification-leray-short-exact-sequence`

- Location: **Facts & Assumptions**; source lines 38, 40.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-modification-leray-short-exact-sequence--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-modification-leray-short-exact-sequence--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normal-surface-modification-leray-short-exact-sequence.md).

Exact frozen source lines:

```text
38: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
40: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 083: `lem-normalized-surface-point-blowup-resolution-descends-from-completion`

- Location: **Facts & Assumptions**; source lines 41, 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normalized-surface-point-blowup-resolution-descends-from-completion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normalized-surface-point-blowup-resolution-descends-from-completion--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normalized-surface-point-blowup-resolution-descends-from-completion.md).

Exact frozen source lines:

```text
41: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
43: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 084: `lem-picard-group-of-a-point-blowup-of-the-projective-plane`

- Location: **Proof technique**; source lines 121.
- Pages: `surface-riemann-roch-and-the-hodge-index-theorem-examples`.
- Visible defect: Inline math delimiters and the LaTeX command for Pic are shown literally in the rendered proof-technique sentence.
- Future repair: Render the proof-technique field with the same inline-math renderer as the proof body, or author the formula in the supported rich-text form.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane--03.png), [tile 04](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane--04.png), [tile 05](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane--05.png), [tile 06](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane--06.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-picard-group-of-a-point-blowup-of-the-projective-plane.md).

Exact frozen source lines:

```text
121: **Proof technique:** direct: establish the surface and intersection data of the blowup, reduce $\operatorname{Pic}$ to the class group, exhibit an affine plane as the complement of the two curves $E$ and $m$, and use the excision sequence for class groups and the intersection matrix for injectivity.
```

#### algebraic-geometry / confirmed 085: `lem-rational-surface-exceptional-ideal-powers-and-sections`

- Location: **Facts & Assumptions**; source lines 40, 42.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-surface-exceptional-ideal-powers-and-sections--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-surface-exceptional-ideal-powers-and-sections--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-rational-surface-exceptional-ideal-powers-and-sections.md).

Exact frozen source lines:

```text
40: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
42: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 086: `lem-regular-local-surface-is-rational-by-point-blowup-domination`

- Location: **Facts & Assumptions**; source lines 41, 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-regular-local-surface-is-rational-by-point-blowup-domination--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-regular-local-surface-is-rational-by-point-blowup-domination--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-regular-local-surface-is-rational-by-point-blowup-domination.md).

Exact frozen source lines:

```text
41: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
43: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 087: `lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic`

- Location: **Facts & Assumptions**; source lines 41, 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-square-tangent-conic-blowup-singularities-controlled-by-a-cubic.md).

Exact frozen source lines:

```text
41: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
43: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 088: `lem-surface-finite-completion-factors`

- Location: **Facts & Assumptions**; source lines 38, 40.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-finite-completion-factors--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-finite-completion-factors--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-finite-completion-factors.md).

Exact frozen source lines:

```text
38: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
40: [F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 089: `lem-surface-regular-fibres-preserve-normality`

- Location: **Facts & Assumptions**; source lines 42, 44.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text exposes internal item slugs and raw blockquote markers (“>”) instead of presenting the referenced definitions as readable prose.
- Future repair: Replace slug labels with linked titles and format the definition text as rendered prose/blockquote, removing literal “>” markers.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-regular-fibres-preserve-normality--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-surface-regular-fibres-preserve-normality--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-surface-regular-fibres-preserve-normality.md).

Exact frozen source lines:

```text
42: [F3] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
44: [F4] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])
```

#### algebraic-geometry / confirmed 090: `thm-embedding-dimension-at-least-local-dimension`

- Location: **Facts & Assumptions**; source lines 68.
- Pages: `zariski-tangent-spaces-regular-points-smoothness-and-bertini`.
- Visible defect: The linked item title is rendered with a literal underscore as “A_p” in the fact list.
- Future repair: Change the referenced item title to use rendered math or a readable plain-text form such as “A at p”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-embedding-dimension-at-least-local-dimension--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-embedding-dimension-at-least-local-dimension--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-embedding-dimension-at-least-local-dimension--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-embedding-dimension-at-least-local-dimension.md).

Exact frozen source lines:

```text
68: [F6] [[thm-stalk-structure-sheaf-prime-localization]]: there is a canonical isomorphism $\mathcal O_{\operatorname{Spec}A,\mathfrak p}\cong A_{\mathfrak p}$.
```

#### algebraic-geometry / confirmed 091: `lem-complete-regular-surface-degree-p-extension-has-bounded-h1`

- Location: **Facts & Assumptions**; source lines 42.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text shows internal item identifiers such as `def-axiom-of-choice`/`lem-*` instead of the linked item titles; the displayed Axiom of Choice entry also exposes literal `>` quote delimiters.
- Future repair: Render embedded item references as their titles and move the quoted statement into a supported blockquote or remove the literal `>` delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-complete-regular-surface-degree-p-extension-has-bounded-h1--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-complete-regular-surface-degree-p-extension-has-bounded-h1.md).

Exact frozen source lines:

```text
42: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 092: `lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces`

- Location: **Facts & Assumptions**; source lines 65, 99.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text shows internal item identifiers such as `def-axiom-of-choice`/`lem-*` instead of the linked item titles; the displayed Axiom of Choice entry also exposes literal `>` quote delimiters.
- Future repair: Render embedded item references as their titles and move the quoted statement into a supported blockquote or remove the literal `>` delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces--01.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-fibre-components-of-a-proper-birational-morphism-of-regular-surfaces.md).

Exact frozen source lines:

```text
65: [F1] *lem-proper-fibres-proper.* Assume the Axiom of Choice. Let $f:X\to S$ be a proper morphism of schemes and let $s\in S$ be a point, not necessarily closed. Then the scheme-theoretic fibre $X_s=X\times_S\operatorname{Spec}\kappa(s)$ is proper over $\operatorname{Spec}\kappa(s)$. ([[lem-proper-fibres-proper]])
99: [F17] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 093: `lem-normal-surface-modification-no-derived-residue-map`

- Location: **Facts & Assumptions**; source lines 42.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text shows internal item identifiers such as `def-axiom-of-choice`/`lem-*` instead of the linked item titles; the displayed Axiom of Choice entry also exposes literal `>` quote delimiters.
- Future repair: Render embedded item references as their titles and move the quoted statement into a supported blockquote or remove the literal `>` delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-normal-surface-modification-no-derived-residue-map--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-normal-surface-modification-no-derived-residue-map.md).

Exact frozen source lines:

```text
42: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 094: `lem-rational-surface-local-rings-propagate-by-point-sequence-spreading`

- Location: **Facts & Assumptions**; source lines 43.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text shows internal item identifiers such as `def-axiom-of-choice`/`lem-*` instead of the linked item titles; the displayed Axiom of Choice entry also exposes literal `>` quote delimiters.
- Future repair: Render embedded item references as their titles and move the quoted statement into a supported blockquote or remove the literal `>` delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-rational-surface-local-rings-propagate-by-point-sequence-spreading--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-rational-surface-local-rings-propagate-by-point-sequence-spreading.md).

Exact frozen source lines:

```text
43: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 095: `lem-relative-projective-space-derived-duality-regular-local-base`

- Location: **Facts & Assumptions**; source lines 41.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text shows internal item identifiers such as `def-axiom-of-choice`/`lem-*` instead of the linked item titles; the displayed Axiom of Choice entry also exposes literal `>` quote delimiters.
- Future repair: Render embedded item references as their titles and move the quoted statement into a supported blockquote or remove the literal `>` delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-relative-projective-space-derived-duality-regular-local-base--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-relative-projective-space-derived-duality-regular-local-base.md).

Exact frozen source lines:

```text
41: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 096: `thm-factorization-of-birational-morphisms-of-smooth-surfaces`

- Location: **Facts & Assumptions**; source lines 67.
- Pages: `birational-morphisms-contractions-and-surface-singularities`.
- Visible defect: Fact text shows internal item identifiers such as `def-axiom-of-choice`/`lem-*` instead of the linked item titles; the displayed Axiom of Choice entry also exposes literal `>` quote delimiters.
- Future repair: Render embedded item references as their titles and move the quoted statement into a supported blockquote or remove the literal `>` delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-factorization-of-birational-morphisms-of-smooth-surfaces--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-factorization-of-birational-morphisms-of-smooth-surfaces.md).

Exact frozen source lines:

```text
67: [F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])
```

#### algebraic-geometry / confirmed 097: `ex-constructible-six-operations-on-a-point-and-an-open-closed-line`

- Location: **Example**; source lines 36.
- Pages: `analytic-constructible-sheaf-foundations-examples`.
- Visible defect: The rendered Example starts with a dangling `)` before “and let k be a field”; the preceding “Assume the Axiom of Choice” clause and its reference are missing from the screenshot.
- Future repair: Restore the full opening clause and render its internal reference without dropping the text before the closing parenthesis.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-constructible-six-operations-on-a-point-and-an-open-closed-line--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-constructible-six-operations-on-a-point-and-an-open-closed-line.md).

Exact frozen source lines:

```text
36: Assume the Axiom of Choice ([[def-axiom-of-choice]]) and let $k$ be a field.
```

#### algebraic-geometry / confirmed 098: `ex-the-logarithmic-class-of-the-punctured-line-has-weight-two`

- Location: **Proof technique**; source lines 55.
- Pages: `logarithmic-hodge-complexes-and-smooth-open-weights-examples`.
- Visible defect: The all-caps rendered proof-technique line shows the inline-math delimiters and LaTeX command literally instead of typesetting the formula.
- Future repair: Render inline math in the proof-technique field before applying its uppercase styling, or move the formula to supported math text.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/ex-the-logarithmic-class-of-the-punctured-line-has-weight-two--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/ex-the-logarithmic-class-of-the-punctured-line-has-weight-two.md).

Exact frozen source lines:

```text
55: **Proof technique:** direct: compute both sides of the weight spectral sequence of the logarithmic complex for $\mathbb P^1$ and identify the surviving degree-one term with the Tate twist.
```

#### algebraic-geometry / confirmed 099: `thm-riemann-roch-for-smooth-projective-surfaces`

- Location: **Proof technique**; source lines 70.
- Pages: `surface-riemann-roch-and-the-hodge-index-theorem`.
- Visible defect: The all-caps rendered proof-technique line shows the inline-math delimiters and LaTeX command literally instead of typesetting the formula.
- Future repair: Render inline math in the proof-technique field before applying its uppercase styling, or move the formula to supported math text.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-riemann-roch-for-smooth-projective-surfaces--02.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-riemann-roch-for-smooth-projective-surfaces.md).

Exact frozen source lines:

```text
70: **Proof technique:** direct: evaluate the defining alternating sum on the pair $(\mathcal L^{\vee},\mathcal L\otimes\omega_X^{\vee})$ and replace two terms by Serre duality.
```

#### algebraic-geometry / confirmed 100: `thm-regular-equals-smooth-over-perfect-field`

- Location: **Proof**; source lines 121.
- Pages: `zariski-tangent-spaces-regular-points-smoothness-and-bertini`.
- Visible defect: The rendered boundary-check paragraph ends with literal `## Source qualification` rather than a new section heading.
- Future repair: Put the source-qualification heading on a separate Markdown block after a blank line.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-regular-equals-smooth-over-perfect-field--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-regular-equals-smooth-over-perfect-field.md).

Exact frozen source lines:

```text
121: 7.1 Boundary and nilpotent checks. For $X=\operatorname{Spec}k$, the local ring is $k$, with maximal ideal zero and both dimension and embedding dimension zero, so it is regular by [F19]. The map $k\to k$ has the standard smooth presentation with $n=c=0$ and $g=1$ by [F17], so $X$ is smooth. For $D_k=\operatorname{Spec}(k[\epsilon]/(\epsilon^2))$, the unique prime is $(\epsilon)$ because every prime contains the nilpotent $\epsilon$ and an element with nonzero constant term is a unit. The ring is two-dimensional over $k$, hence Noetherian; its local dimension is zero, whereas $(\epsilon)/(\epsilon)^2$ is one-dimensional, so its embedding dimension is one and [F19] shows it is not regular. Consequently it is not geometrically regular, since [F12] includes the extension $K=k$. By [F14] its structure map is not locally standard smooth, and [F15] says it is not smooth. Thus nilpotents are retained, and the theorem does not silently replace $D_k$ by its reduced point. Step 6.1 proves regular $\Rightarrow$ smooth, while step 3.2 proves smooth $\Rightarrow$ regular. AC is used only through the stated suppliers [F13]–[F15]; the proof treats one chart or point at a time, and no DC is invoked. [F12, F13, F14, F15, F17, F18, F19, step 6.1, step 3.2, given, algebra] $\square$ ## Source qualification
```

### Optional typography

#### algebraic-geometry / typography 001: `thm-affine-variety-product-coordinate-ring`

- Location: **Proof**; source lines 38.
- Pages: `products-segre-and-veronese-embeddings-and-grassmannians`.
- Visible defect: The proof displays backticked machine identifiers for three cited items instead of readable reference titles.
- Future repair: Replace the inline item slugs with linked references using their display titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/thm-affine-variety-product-coordinate-ring--01.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/thm-affine-variety-product-coordinate-ring.md).

Exact frozen source lines:

```text
38: 2.1 Now `thm-affine-algebraic-sets-coordinate-duality` constructs an affine algebraic set $Z$ with coordinate algebra $C$. It is nonempty, since the empty set has zero coordinate ring, whereas $C\ne0$. Since $C$ is a domain, `thm-affine-variety-prime-coordinate-ring` makes $Z$ a classical affine variety. Only now apply `thm-affine-morphisms-coordinate-ring-anti-equivalence`: the two canonical maps $A\to C$, $B\to C$ give morphisms $p:Z\to X$, $q:Z\to Y$. [step 1.1]
```

#### algebraic-geometry / typography 002: `lem-semisimple-opposite-borel-big-cell`

- Location: **Proof**; source lines 101, 109.
- Pages: `smooth-projective-serre-duality-and-flag-variety-line-bundles`.
- Visible defect: Rendered proof prose exposes internal item identifiers as backticked slugs rather than item titles.
- Future repair: Replace the backticked identifiers with internal links using the referenced items’ titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-semisimple-opposite-borel-big-cell--01.png), [tile 02](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-semisimple-opposite-borel-big-cell--02.png), [tile 03](math-library-rendering-audit-2026-10-23/algebraic-geometry/screenshots/lem-semisimple-opposite-borel-big-cell--03.png); [frozen source](math-library-rendering-audit-2026-10-23/algebraic-geometry/snapshots/lem-semisimple-opposite-borel-big-cell.md).

Exact frozen source lines:

```text
101: 4.1 $m$ is étale, hence open. The morphism $m$ is of finite type over the field $\mathbb C$, and a finitely generated algebra over a Noetherian ring is finitely presented, so $m$ is locally of finite presentation; it is flat by step 3.1 and unramified by step 3.2, hence étale by the in-run item `thm-etale-equivalent-flat-unramified-fp`; therefore $m$ is universally open by the in-run item `thm-etale-morphisms-open-and-quasi-finite`, so the image $\Omega=m(X)$ is an open subscheme of $G$, nonempty because $m(1,1,1)=1$. This proves the openness part of assertion (i); the remaining isomorphism claim is completed after the injectivity argument below. [step 3.1, step 3.2]
109: 7.1 The Axiom of Choice is assumed in the statement and declared as the dependency [[def-axiom-of-choice]]; inside the argument it is used only through the cited suppliers: [F1] inherits it from the root-exponential and Baker-Campbell-Hausdorff constructions, the in-run items `thm-etale-morphisms-open-and-quasi-finite` and `thm-etale-equivalent-flat-unramified-fp` inherit it from the flat and unramified theory, and [F8] uses it to detect maximal ideals. After the group data and the single system of parameters in step 3.1 are fixed, no further arbitrary choice is made. [F1, F8, given, discharge-construct] ∎
```

