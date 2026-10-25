## Differential Topology

Completed visual review of **977 items across 68 pages**, with **1832 image tiles**. Findings: 13 confirmed, 1 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/differential-topology/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/differential-topology/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/differential-topology/category-review-receipt.json).

### Confirmed rendering defects

#### differential-topology / confirmed 001: `cor-four-dimensional-signature-formula`

- Location: **Proof**; source lines 61.
- Pages: `the-hirzebruch-signature-theorem`.
- Visible defect: The CSS uppercase technique banner prints the dollar delimiters and k=1 literally. The formula in the statement and proof body renders correctly.
- Future repair: Use math-free wording in the technique label, e.g. “specialise the signature theorem to degree one”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/cor-four-dimensional-signature-formula--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/cor-four-dimensional-signature-formula.md).

Exact frozen source lines:

```text
61: **Proof technique:** direct; specialise the signature theorem to $k=1$.
```

#### differential-topology / confirmed 002: `lem-one-variable-completion-of-the-square-with-a-smooth-parameter`

- Location: **Proof**; source lines 53, 53.
- Pages: `morse-critical-points-hessians-and-indices`.
- Visible defect: The proof step ends with the literal malformed tag [L1, given, assume-case[ positive-parameter], construct]. It is visible verbatim in the original first tile; it reads like an unresolved case-tag placeholder and interrupts the proof text.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-one-variable-completion-of-the-square-with-a-smooth-parameter.md).

Exact frozen source lines:

```text
53: 1.2 Assume $m>0$. Put $G(u,y):=\partial F/\partial u(u,y)$. Since $\partial G/\partial u(0,0)=\partial^2F/\partial u^2(0,0)\ne0$, [L1] gives a smooth function $\phi$ near $0\in\mathbb R^m$ with $\phi(0)=0$ and $G(\phi(y),y)=0$. [L1, given, assume-case[ positive-parameter], construct]
```

#### differential-topology / confirmed 003: `def-limitwise-nullhomotopy-predicate-on-based-loops`

- Location: **Definition**; source lines 36, 36.
- Pages: `codimension-one-foliations-and-secondary-classes`.
- Visible defect: The quantifier is written as plain 0<ε<ε₀ in prose without math delimiters. In the original tile the inequality and indexed threshold render as baseline text rather than mathematical notation; the surrounding quantified definition is otherwise legible.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: ; [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/def-limitwise-nullhomotopy-predicate-on-based-loops.md).

Exact frozen source lines:

```text
36: For clarity, a displacement is obtained by starting at a chosen positive point of the base transversal and continuing the loop plaque by plaque through a finite chart subdivision. Within each chart its transverse label is held fixed; the fence specifies the nearby endpoint in that plaque. Since $[f]\in N_j$, the return map is the identity on a sufficiently short interval on side j, so these displacements are closed loops. The quantifier means: there exists ε₀>0 such that every displacement with 0<ε<ε₀ is nullhomotopic in its own leaf. No uniform bound on the filling disks is part of the definition.
```

#### differential-topology / confirmed 004: `lem-c1-euclidean-maximal-flow-with-c2-upgrade`

- Location: **Statement**; source lines 28.
- Pages: `codimension-one-foliations-and-secondary-classes`.
- Visible defect: The plain-text caret in R^n is visible; the exponent is not typeset as mathematical superscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/research/math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-c1-euclidean-maximal-flow-with-c2-upgrade--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-c1-euclidean-maximal-flow-with-c2-upgrade.md).

Exact frozen source lines:

```text
28: Let U⊂R^n be open and Y:U→R^n be C¹. There is a unique maximal flow Φ on an open domain
```

#### differential-topology / confirmed 005: `lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood`

- Location: **Statement**; source lines 35.
- Pages: `vanishing-cycles-novikov-and-taut-foliations`.
- Visible defect: The underscores in γ_t remain literal in the rendered sentence rather than becoming a subscript.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/research/math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-simple-lifted-caps-avoid-the-original-essential-loop-and-a-fixed-intrinsic-neighborhood.md).

Exact frozen source lines:

```text
35: Let γ be an essential original loop and γ_t its short fixed-flow null fence boundaries. Every Jordan lifted disk cap of γ_t has projected image disjoint from γ and from one fixed intrinsic neighborhood of γ in its original leaf.
```

#### differential-topology / confirmed 006: `ex-framed-links-represent-elements-of-pi-three-of-s-two`

- Location: **Rendered title**; source lines 4.
- Pages: `pontryagin-thom-and-framed-cobordism-examples`.
- Visible defect: The item heading displays the ASCII formula literally as “pi_3 of S^2”, leaving the underscore and caret notation visible instead of a typeset homotopy group.
- Future repair: Typeset the mathematical phrase in the title, for example “a generator of $\pi_3(S^2)$”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/ex-framed-links-represent-elements-of-pi-three-of-s-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/ex-framed-links-represent-elements-of-pi-three-of-s-two.md).

Exact frozen source lines:

```text
4: title: "The framed unknot represents a generator of pi_3 of S^2"
```

#### differential-topology / confirmed 007: `lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three`

- Location: **Rendered title**; source lines 4.
- Pages: `regular-homotopy-and-sphere-eversion`.
- Visible defect: The item heading displays “R^3” literally with a caret rather than typeset ambient-space notation.
- Future repair: Typeset the ambient space in the title, for example “in $\mathbb{R}^3$”.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-standard-and-reflected-two-sphere-immersions-have-homotopic-formal-data-in-r-three.md).

Exact frozen source lines:

```text
4: title: "Standard and reflected two-sphere immersions have homotopic formal data in R^3"
```

#### differential-topology / confirmed 008: `lem-formal-tangent-and-artanh-series-are-compositional-inverses`

- Location: **Proof technique**; source lines 76.
- Pages: `the-hirzebruch-signature-theorem`.
- Visible defect: The technique banner is uppercased by the expected CSS styling but leaves literal dollar delimiters around A and T (`$A$`, `$T$`). The remainder of the sentence is rendered in the banner, so this is a localized raw-math rendering defect, not stale content.
- Future repair: Render inline math in the proof-technique banner before applying its uppercase styling, or express those two variables in plain prose without Markdown delimiters.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-formal-tangent-and-artanh-series-are-compositional-inverses--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-formal-tangent-and-artanh-series-are-compositional-inverses.md).

Exact frozen source lines:

```text
76: **Proof technique:** direct; exponentiate $A$, compare the defining quotient of $T$, then differentiate and expand.
```

#### differential-topology / confirmed 009: `prop-mod-two-self-intersection-needs-no-orientation`

- Location: **Proof technique**; source lines 51.
- Pages: `intersection-pairings-self-intersection-and-euler-classes`.
- Visible defect: The actual ItemBody HTML leaves the inline-math delimiters and TeX command in a text node in the technique banner; the standalone original screenshot visibly shows raw, CSS-uppercased ` $\MATHBB F_2$ ` in the banner. Ordinary body math on this item is KaTeX-rendered, so the leak is confined to technique-banner math.
- Future repair: Keep mathematical notation out of the plain-text proof-technique banner, or render the technique value through MathMarkdown before applying the expected uppercase banner styling. Preserve the explanatory prose in the proof body.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/prop-mod-two-self-intersection-needs-no-orientation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/prop-mod-two-self-intersection-needs-no-orientation.md).

Exact frozen source lines:

```text
51: **Proof technique:** repeat the integral argument in $\mathbb F_2$ coefficients, where every bundle is canonically oriented and every manifold has a mod 2 fundamental class, and identify the mod 2 Euler class with the top Stiefel-Whitney class.
```

#### differential-topology / confirmed 010: `lem-a-smooth-three-manifold-with-h-one-z-two-and-h-two-zero-does-not-embed-in-s-four`

- Location: **Title**; source lines 4.
- Pages: `characteristic-class-obstructions-to-immersions-and-embeddings`.
- Visible defect: The screenshot title displays the ASCII underscores in H_1 and H_2 literally, while math elsewhere in the item is typeset.
- Future repair: Wrap the homology expressions in the title in supported inline math delimiters.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-a-smooth-three-manifold-with-h-one-z-two-and-h-two-zero-does-not-embed-in-s-four--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-a-smooth-three-manifold-with-h-one-z-two-and-h-two-zero-does-not-embed-in-s-four.md).

Exact frozen source lines:

```text
4: title: "A closed three-manifold with H_1 = Z/2 and H_2 = 0 does not embed in S^4"
```

#### differential-topology / confirmed 011: `lem-paired-regular-disk-sweep-is-open-across-its-base-gluing`

- Location: **Statement**; source lines 32.
- Pages: `vanishing-cycles-novikov-and-taut-foliations`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-paired-regular-disk-sweep-is-open-across-its-base-gluing--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-paired-regular-disk-sweep-is-open-across-its-base-gluing--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-paired-regular-disk-sweep-is-open-across-its-base-gluing.md).

Exact frozen source lines:

```text
32: Let $D$ be an actual compact C² disk region homeomorphic to the closed disk, and let G:D×[a,b]→M be a C² immersed disk sweep, transverse in the time direction with one constant sign. Suppose an interior subdisk U⊂D at the b-base is identified to the whole a-base by a diffeomorphism h:D→U satisfying G(y,a)=G(h(y),b), with their leafwise tangent maps agreeing under h. On the quotient X, the induced map is locally open at every interior seam point; its compact image has boundary contained in the image of ∂X. No global injectivity is required.
```

#### differential-topology / confirmed 012: `lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle`

- Location: **Item body**; source lines 4.
- Pages: `characteristic-class-obstructions-to-immersions-and-embeddings`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-an-immersion-into-r-n-gives-a-rank-n-minus-m-representative-of-the-stable-normal-bundle.md).

Exact frozen source lines:

```text
4: title: "An immersion into R^n gives a rank-(n-m) representative of the stable normal bundle"
```

#### differential-topology / confirmed 013: `thm-index-of-a-nondegenerate-fixed-point`

- Location: **Item body**; source lines 4.
- Pages: `fixed-point-index-and-the-lefschetz-theorem`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/thm-index-of-a-nondegenerate-fixed-point--01.png), [tile 02](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/thm-index-of-a-nondegenerate-fixed-point--02.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/thm-index-of-a-nondegenerate-fixed-point.md).

Exact frozen source lines:

```text
4: title: "The index of a nondegenerate fixed point is the sign of det(I-Df)"
```

### Optional typography

#### differential-topology / typography 001: `lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root`

- Location: **Facts & Assumptions**; source lines 42.
- Pages: `vanishing-cycles-novikov-and-taut-foliations`.
- Visible defect: Two authored internal item IDs are exposed as monospace slugs in the rendered fact instead of linked titles.
- Future repair: Replace the literal IDs with wikilinks using the displayed item titles.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/differential-topology/screenshots/lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root--01.png); [frozen source](math-library-rendering-audit-2026-10-23/differential-topology/snapshots/lem-a-nonzero-pi-class-on-a-torus-has-a-primitive-embedded-pi-root.md).

Exact frozen source lines:

```text
42: [F1] The in-pair item [[lem-a-no-transversal-leaf-is-a-torus-via-the-finite-accessibility-boundary-sum]] identifies the no-transversal leaf $L$ as a torus, and the sibling-pair item `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups` supplies the torus normal form identifying $\pi_1(L)=\mathbb Z^2$, the torsion-freeness of surface groups and the surface-Jordan disk in the leaf; the sibling-pair item `lem-fixed-transverse-fences-have-a-finite-crossing-word` supplies the finite crossing word and the fixed-flow fence data.
```

