## Scheme Theory

Completed visual review of **1097 items across 54 pages**, with **2429 image tiles**. Findings: 13 confirmed, 12 uncertain, 1 typography. Evidence: [manifest](math-library-rendering-audit-2026-10-23/scheme-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/scheme-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/scheme-theory/category-review-receipt.json).

### Confirmed rendering defects

#### scheme-theory / confirmed 001: `cex-alpha-p-mu-p-rational-points-do-not-detect-scheme`

- Location: **frontmatter title**; source lines 4.
- Pages: `group-schemes-of-finite-type-over-a-field-examples`.
- Visible defect: The title prints alpha_p and mu_p as ordinary baseline text, while the statement correctly uses the math symbols α_p and μ_p.
- Future repair: Use inline math or Unicode subscripts, for example $\alpha_p$ and $\mu_p$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme--02.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/cex-alpha-p-mu-p-rational-points-do-not-detect-scheme.md).

Exact frozen source lines:

```text
4: title: Rational points do not detect the group-scheme structure of alpha_p and mu_p
```

#### scheme-theory / confirmed 002: `cor-h1-line-bundle-dual-sections`

- Location: **frontmatter title**; source lines 4.
- Pages: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.
- Visible defect: The title prints h^1 with the caret and numeral as literal text; this is the cohomological dimension h^1 used in the body.
- Future repair: Format the notation as $h^1$ or use a Unicode superscript.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/cor-h1-line-bundle-dual-sections--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/cor-h1-line-bundle-dual-sections--02.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/cor-h1-line-bundle-dual-sections.md).

Exact frozen source lines:

```text
4: title: "h^1 of a line bundle equals the dimension of the space of dual sections"
```

#### scheme-theory / confirmed 003: `ex-strict-transform-cusp-first-blowup`

- Location: **frontmatter title**; source lines 4.
- Pages: `blowups-exceptional-divisors-and-strict-transforms-examples`.
- Visible defect: The title prints the cusp equation with literal caret characters rather than as mathematical notation.
- Future repair: Format the equation as $y^2=x^3$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/ex-strict-transform-cusp-first-blowup--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/ex-strict-transform-cusp-first-blowup--02.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/ex-strict-transform-cusp-first-blowup.md).

Exact frozen source lines:

```text
4: title: "First blowup of the cusp y^2=x^3"
```

#### scheme-theory / confirmed 004: `lem-e-ideals-and-commutator-trace`

- Location: **frontmatter title**; source lines 4.
- Pages: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.
- Visible defect: The title prints E_i with a literal underscore; the subscripted family notation is used in the item body.
- Future repair: Format the notation as $E_i$ or use a Unicode subscript.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-e-ideals-and-commutator-trace--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-e-ideals-and-commutator-trace--02.png), [tile 03](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-e-ideals-and-commutator-trace--03.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-e-ideals-and-commutator-trace.md).

Exact frozen source lines:

```text
4: title: "E is a k-algebra, the E_i are ideals, and commutator traces vanish"
```

#### scheme-theory / confirmed 005: `thm-obstructions-lie-in-ext-two-cotangent-complex`

- Location: **frontmatter title**; source lines 4.
- Pages: `deformation-theory-of-schemes-and-obstruction-spaces`.
- Visible defect: The title prints Ext^2 with the caret and numeral as literal text, while the statement uses the Ext^2 group.
- Future repair: Format the notation as $\operatorname{Ext}^2$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-obstructions-lie-in-ext-two-cotangent-complex--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-obstructions-lie-in-ext-two-cotangent-complex--02.png), [tile 03](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-obstructions-lie-in-ext-two-cotangent-complex--03.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-obstructions-lie-in-ext-two-cotangent-complex.md).

Exact frozen source lines:

```text
4: title: "Obstructions to deformations lie in Ext^2 of the cotangent complex"
```

#### scheme-theory / confirmed 006: `cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two`

- Location: **Title**; source lines 4.
- Pages: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.
- Visible defect: The HTML heading prints the caret and exponent inline as literal text; it is not typeset as H superscript 1.
- Future repair: Use a prose title such as “First cohomology of a line bundle vanishes above degree 2g − 2”, or otherwise use title markup supported by the heading renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two--01.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/cor-h1-line-bundle-vanishes-degree-over-two-g-minus-two.md).

Exact frozen source lines:

```text
4: title: "H^1 of a line bundle vanishes above degree 2g - 2"
```

#### scheme-theory / confirmed 007: `def-commensurable-subspaces-and-ideals-of-endomorphisms`

- Location: **Title**; source lines 4.
- Pages: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.
- Visible defect: The HTML heading prints literal underscore subscripts E_0, E_1 and E_2.
- Future repair: Use a prose title or title markup supported by the heading renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/def-commensurable-subspaces-and-ideals-of-endomorphisms--01.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/def-commensurable-subspaces-and-ideals-of-endomorphisms.md).

Exact frozen source lines:

```text
4: title: "Commensurable subspaces and the ideals E_0, E_1, E_2 of E"
```

#### scheme-theory / confirmed 008: `ex-strict-transform-node-separates-branches`

- Location: **Title**; source lines 4.
- Pages: `blowups-exceptional-divisors-and-strict-transforms-examples`.
- Visible defect: The HTML heading prints the equation with literal carets and no superscript formatting.
- Future repair: Move the equation into the formatted body and use a prose title, or use title markup supported by the heading renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/ex-strict-transform-node-separates-branches--01.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/ex-strict-transform-node-separates-branches.md).

Exact frozen source lines:

```text
4: title: "First blowup of the node y^2=x^3+x^2 separates its branches"
```

#### scheme-theory / confirmed 009: `thm-stalk-structure-sheaf-prime-localization`

- Location: **Title**; source lines 4.
- Pages: `affine-schemes-and-the-structure-sheaf`.
- Visible defect: The HTML heading prints the literal underscore in A_p instead of a subscript.
- Future repair: Use a prose title or title markup supported by the heading renderer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-stalk-structure-sheaf-prime-localization--01.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-stalk-structure-sheaf-prime-localization.md).

Exact frozen source lines:

```text
4: title: "The stalk of the affine structure sheaf at a prime is A_p"
```

#### scheme-theory / confirmed 010: `thm-abstract-residue-exists-unique`

- Location: **Item body**; source lines 4.
- Pages: `residues-serre-duality-for-curves-and-the-full-riemann-roch-theorem`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Wrap the mathematical title fragment in math delimiters, e.g. $\operatorname{res}_V:\Omega^1_{K/k}\to k$.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-abstract-residue-exists-unique--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-abstract-residue-exists-unique--02.png), [tile 03](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-abstract-residue-exists-unique--03.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-abstract-residue-exists-unique.md).

Exact frozen source lines:

```text
4: title: "Existence and uniqueness of the abstract residue map res_V: Omega^1_{K/k} -> k"
```

#### scheme-theory / confirmed 011: `lem-very-ample-implies-ample`

- Location: **Proof**; source lines 85.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Use the renderer-supported math delimiters for the command or a supported visible end marker.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-very-ample-implies-ample--01.png), [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-very-ample-implies-ample--02.png), [tile 03](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-very-ample-implies-ample--03.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-very-ample-implies-ample.md).

Exact frozen source lines:

```text
85: 5.1 Conclusion. Every affine open $U\subseteq S$ has $L|_{f^{-1}(U)}$ ample on $f^{-1}(U)$, so $L$ is $f$-ample by definition; if $S=\operatorname{Spec}R$ is affine this is absolute ampleness of $L$ on $X$. If in addition the immersion $i$ is a closed immersion, the same argument applies verbatim; the only simplification in that case is that the image is closed, so the shrinking step 1.3 may be replaced by choosing a chart $U_i$ containing $i(x)$, whose preimage $X\cap U_i$ is affine as a closed subscheme of the affine scheme $U_i$. If $X=\varnothing$ or $S=\varnothing$ there is no point to test and the conditions of [F5] and of $f$-ampleness are vacuous, so the conclusion holds. The Axiom of Choice [A1] is inherited from the Proj and associated-sheaf constructions; no choice is made here. [A1, F1, F5, step 4.1, cases: empty and affine base] \qed 
```

#### scheme-theory / confirmed 012: `cor-riemann-theorem-large-degree`

- Location: **Proof technique**; source lines 70.
- Pages: `riemann-roch-for-curves-via-euler-characteristics`.
- Visible defect: In the proof-technique banner the inline math delimiters and expressions are printed literally (including $h^1$ and $D_0+nA+E$), while the same notation in the proof body is typeset. This makes math formatting depend on which proof section contains the prose. The issue recurs in several assigned items, including ex-adding-point-section-dimension-jump line 127 (\mathbb P^1_k), thm-hilbert-polynomial-coherent-sheaf line 126 (\chi(\mathcal F(m))), and lem-schematic-closure-and-dense-agreement line 218.
- Future repair: Render the proof-technique prose through the same math-aware renderer as other ItemBody prose, while retaining its label styling.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/cor-riemann-theorem-large-degree--02.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/cor-riemann-theorem-large-degree.md).

Exact frozen source lines:

```text
70: **Proof technique:** read the vanishing of $h^1$ off the vanishing theorem, substitute it into the Euler-characteristic form of Riemann-Roch, and record the explicit form $D_0+nA+E$.
```

#### scheme-theory / confirmed 013: `thm-projective-map-line-bundle-data-equivalence`

- Location: **Proof conclusion**; source lines 90.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness`.
- Visible defect: The trailing \qed command appears as literal text at the end of the rendered proof. The same leak is present in ex-proj-quotient-projective-hypersurface line 56 and lem-projective-space-saturation-local-criterion line 82; their final tiles were also individually inspected.
- Future repair: Replace the unsupported text command with the renderer’s supported proof-ending marker or remove it when the card supplies its own end marker.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/thm-projective-map-line-bundle-data-equivalence--03.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-projective-map-line-bundle-data-equivalence.md).

Exact frozen source lines:

```text
90: 3.1 Conclusion. Step 1.1 attaches generating line-bundle data to every morphism, step 1.2 produces a morphism from data, steps 2.1 and 2.2 show the two operations are mutually inverse on isomorphism classes, step 2.3 gives naturality, and step 1.3 covers $n=0$. The Axiom of Choice [A1] is inherited from the projective-space and sheaf constructions; no choice is made here. [A1, step 1.2, step 2.1, step 2.2, step 2.3, step 1.3] \qed 
```

### Optional typography

#### scheme-theory / typography 001: `ex-adding-point-section-dimension-jump`

- Location: **Item body**; source lines 4.
- Pages: `riemann-roch-for-curves-via-euler-characteristics-examples`.
- Visible defect: The title uses plain-text l(D+p) - l(D), while the statement and proof use typeset mathematical notation. This is a title typography observation only.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/ex-adding-point-section-dimension-jump--01.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/ex-adding-point-section-dimension-jump.md).

Exact frozen source lines:

```text
4: title: "The jump l(D+p) - l(D) ranges from zero to the residue degree"
```

### Uncertain observations

#### scheme-theory / uncertain 001: `lem-section-zero-if-all-germs-zero`

- Location: **Statement**; source lines 27.
- Pages: `presheaves-sheaves-stalks-and-sheafification`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Break the equivalence into aligned lines or otherwise choose an intentional line break around the biconditional.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/scheme-theory/screenshots/lem-section-zero-if-all-germs-zero--01.png); [frozen source](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-section-zero-if-all-germs-zero.md).

Exact frozen source lines:

```text
27: $$s=0\text{ in }\mathcal F(U)\qquad\Longleftrightarrow\qquad s_x=0\text{ in }\mathcal F_x\text{ for every }x\in U.$$
```

#### scheme-theory / uncertain 002: `cex-proj-graded-ring-not-faithful`

- Location: **Verification**; source lines 74.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/cex-proj-graded-ring-not-faithful.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/cex-proj-graded-ring-not-faithful.md).

Exact frozen source lines:

```text
74: 3.1 Conclusion. Steps 2.1 and 2.2 exhibit the two graded $k$-algebras $S=k[x,y]$ and $T=k[x^2,xy,y^2]$ with canonically isomorphic Proj but no graded isomorphism between them; steps 2.1 and 1.2 show that the isomorphism matches $\mathcal O_T(1)$ with $\mathcal O_S(2)$ and not with $\mathcal O_S(1)$, so not even the degree-one twists correspond. Since $k[x,y]$ and its Veronese are nonnegatively graded with nonzero degree-one parts, neither Proj is empty and the invariant $\dim_k(-)_1$ is defined; the case $d=1$ of [F1] is excluded here because the two rings are then equal, while $d=2\ge1$ is the smallest regrading for which $S^{(d)}\neq S$ in this example. No choice principle is used beyond the inherited Proj construction. [F1, F2, step 1.1, step 2.1, step 2.2, step 1.2, cases: d=1 excluded and d=2 smallest] \qed 
```

#### scheme-theory / uncertain 003: `ex-proj-empty-irrelevant-nilpotent`

- Location: **Verification**; source lines 59.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/ex-proj-empty-irrelevant-nilpotent.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/ex-proj-empty-irrelevant-nilpotent.md).

Exact frozen source lines:

```text
59: 4.1 Conclusion. Steps 1.1 and 2.1 show that the nilpotent irrelevant ideal produces empty Proj, while step 3.1 shows that the underlying ring still has a point; the two conclusions are consistent because Proj discards exactly the primes containing all of $S_+$. [F1, F2, step 2.1, step 3.1] \qed 
```

#### scheme-theory / uncertain 004: `ex-twisting-sheaf-projective-line-transitions`

- Location: **Verification**; source lines 63.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/ex-twisting-sheaf-projective-line-transitions.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/ex-twisting-sheaf-projective-line-transitions.md).

Exact frozen source lines:

```text
63: 3.1 Conclusion. The frame section $e_i$ is nowhere vanishing on $U_i$, and the transition relation $e_1=t^ne_0$ is exactly the change of frame of the invertible sheaf $\mathcal O(n)$ from the $0$-chart to the $1$-chart: for $n=0$ both frames are the constant function $1$ and the relation is $e_1=e_0$; for $n=1$ it is $e_1=te_0$; for $n=-1$ it is $e_1=t^{-1}e_0$ with $t^{-1}=x_0/x_1$ the coordinate on $U_1$. [F2, F3, step 1.1, step 2.1, cases: n=0 and negative n] \qed [F2, F3, step 1.1, step 2.1, cases: n=0 and negative n]
```

#### scheme-theory / uncertain 005: `lem-relative-proj-affine-local-gluing`

- Location: **Proof**; source lines 83.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/lem-relative-proj-affine-local-gluing.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-relative-proj-affine-local-gluing.md).

Exact frozen source lines:

```text
83: 6.1 Conclusion. Step 3.1 gives the canonical isomorphism $\operatorname{Proj}(B)|_V\cong\operatorname{Proj}\Gamma(V,\mathcal A)$ for every affine open $V\subseteq U$, step 4.1 its compatibility with inclusions, and step 5.1 the triple-overlap cocycle and the gluing conclusion. The Axiom of Choice [A1] is inherited only through the affine quasi-coherence equivalence [F1] and the associated-sheaf restriction [F2]; no additional choice is made. [A1, F1, F2, step 3.1, step 5.1] \qed 
```

#### scheme-theory / uncertain 006: `thm-relative-proj-base-change`

- Location: **Proof**; source lines 84.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/thm-relative-proj-base-change.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-relative-proj-base-change.md).

Exact frozen source lines:

```text
84: 6.1 Conclusion. Step 4.1 gives the canonical base-change isomorphism over $S'$, step 5.1 its compatibility with relative twists and with graded algebra quotients. No flatness or finite generation of $\mathcal A$ was used: only the affine case of tensor products and localisations, as displayed in steps 1.1, 1.2 and 2.1, and the affine-local description of relative Proj. the Axiom of Choice [A1] is inherited through the Proj and pullback constructions. If $S'=\varnothing$ or the affine pieces are empty, the identifications are between empty schemes and the construction is vacuous. [A1, step 4.1, step 5.1, cases: empty base change] \qed 
```

#### scheme-theory / uncertain 007: `lem-relative-proj-affine-local-gluing`

- Location: **Proof**; source lines 71.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/lem-relative-proj-affine-local-gluing.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-relative-proj-affine-local-gluing.md).

Exact frozen source lines:

```text
71: **Proof technique:** direct: compute the local model $\widetilde{B\otimes_RC}$ of $\mathcal A$ on an affine open $V=\operatorname{Spec}C$, match its projective charts with the restrictions of the charts of $\operatorname{Proj}B$, and check the cocycle conditions by locality of the localisation formulas.
```

#### scheme-theory / uncertain 008: `thm-proj-structure-sheaf-scheme`

- Location: **Proof**; source lines 95.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/thm-proj-structure-sheaf-scheme.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-proj-structure-sheaf-scheme.md).

Exact frozen source lines:

```text
95: **Proof technique:** direct: build the charts $\operatorname{Spec}S_{(f)}$ of $D_+(f)$, prove that the two double localisations of a pair of charts are canonically isomorphic to $S_{(fg)}$, glue, then compare the glued space with $\operatorname{Proj}S$ through the prime correspondence.
```

#### scheme-theory / uncertain 009: `thm-cohomological-dimension-noetherian-scheme`

- Location: **Proof**; source lines 77.
- Pages: `cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/thm-cohomological-dimension-noetherian-scheme.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/thm-cohomological-dimension-noetherian-scheme.md).

Exact frozen source lines:

```text
77: **Proof technique:** direct: pass from the finite affine cover of the Noetherian scheme to Noetherianness of the underlying space, then apply the published topological vanishing theorem to the underlying abelian sheaf of the quasi-coherent module; the empty scheme is covered by the $\dim=-\infty$ convention.
```

#### scheme-theory / uncertain 010: `lem-uniqueness-of-twists-on-the-projective-line`

- Location: **Proof**; source lines 81.
- Pages: `finite-proper-and-projective-morphisms`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/lem-uniqueness-of-twists-on-the-projective-line.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-uniqueness-of-twists-on-the-projective-line.md).

Exact frozen source lines:

```text
81: **Proof technique:** direct: on the two standard charts a morphism of twists is given by its two components, which are units of $k[u]$ and $k[v]$, hence constants; their compatibility on the overlap forces $u^{m-n}$ to be a constant, which by degree reasons happens only for $n=m$.
```

#### scheme-theory / uncertain 011: `lem-closed-immersion-pushout-schemes`

- Location: **Proof**; source lines 113.
- Pages: `finite-proper-and-projective-morphisms`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/lem-closed-immersion-pushout-schemes.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/lem-closed-immersion-pushout-schemes.md).

Exact frozen source lines:

```text
113: **Proof technique:** direct: build the pushout first as a ringed space (quotient topology plus glued structure sheaf), verify that its points have affine charts modelled on $\operatorname{Spec}(A\times_C B)$, and then verify the universal property.
```

#### scheme-theory / uncertain 012: `ex-proj-empty-irrelevant-nilpotent`

- Location: **Verification**; source lines 49.
- Pages: `proj-projective-schemes-twisting-sheaves-and-ampleness-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/ex-proj-empty-irrelevant-nilpotent.md](math-library-rendering-audit-2026-10-23/scheme-theory/snapshots/ex-proj-empty-irrelevant-nilpotent.md).

Exact frozen source lines:

```text
49: **Proof technique:** direct: identify $S_+$, apply the emptiness criterion, and exhibit the point of $\operatorname{Spec}S$.
```

