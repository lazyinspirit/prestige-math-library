## Topology

Completed visual review of **940 items across 64 pages**, with **1828 image tiles**. Findings: 7 confirmed, 7 uncertain. Evidence: [manifest](math-library-rendering-audit-2026-10-23/topology/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/topology/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/topology/category-review-receipt.json).

### Confirmed rendering defects

#### topology / confirmed 001: `thm-compactness-is-invariant-under-finite-sheeted-coverings`

- Location: **ItemBody: Facts & Assumptions**; source lines 42, 44, 46.
- Pages: `covering-spaces-and-lifting`.
- Visible defect: The rendered ItemBody visibly exposes prerequisite IDs in parentheses instead of display titles. In the same body, neighboring [[...]] references resolve to readable titles, confirming these bare identifiers are not converted.
- Future repair: Replace the bare parenthetical IDs with the repository’s rendered item-reference syntax, preserving each cited supplier.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-compactness-is-invariant-under-finite-sheeted-coverings--01.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/thm-compactness-is-invariant-under-finite-sheeted-coverings.md).

Exact frozen source lines:

```text
42: [F1] A **covering map** is a continuous surjection $p:E\to B$ such that every $b\in B$ has an open neighbourhood $U$ for which $p^{-1}(U)$ is a disjoint union of open sets $V_j$, called **sheets**, and each restriction $p|_{V_j}:V_j\to U$ is a homeomorphism (def-continuous-map-top, def-homeomorphism-and-open-maps, def-disjoint-union-topology). Such a $U$ is **evenly covered**, and $p^{-1}(b)$ is the **fibre** over $b$. A covering is **trivial** when it is isomorphic over $B$ to a product projection $B\times F\to B$ with $F$ discrete. ([[def-covering-map-and-evenly-covered-neighbourhoods]]).
44: [F2] Let $(X, \mathcal{T})$ be a topological space (def-topological-space). An **open cover** of $(X,\mathcal T)$ is a family $\mathcal U\subseteq\mathcal T$ of open sets with $X=\bigcup\mathcal U$; a **subcover** of $\mathcal U$ is a subfamily that is itself an open cover; and $(X,\mathcal T)$ is **compact** when every open cover of it has a finite subcover. ([[def-compact-space]]).
46: [F3] Let $(X, \mathcal{T}_X)$ and $(Y, \mathcal{T}_Y)$ be topological spaces (def-topological-space), and let $\mathbb{R}$ carry its usual topology, the metric topology of $d_{\mathbb{R}}(s,t) = |s-t|$ (lem-real-line-is-a-metric-space, def-metric-topology, def-metrizable-space). Then: 1. **Continuous images.** If $f : X \to Y$ is continuous (def-continuous-map-top) and $(X, \mathcal{T}_X)$ is compact (def-compact-space), then $f[X]$ is a compact subset of $Y$. More generally, if $K \subseteq X$ is a compact subset of $X$ then $f[K]$ is a compact subset of $Y$. 2. **Extreme values.** If $(X, \mathcal{T}_X)$ is compact and nonempty and $g : X \to \mathbb{R}$ is continuous, then $g[X]$ has a maximum and a minimum (def-max-min): there are $x_{\max}, x_{\min} \in X$ with $$g(x_{\min}) \;\le\; g(x) \;\le\; g(x_{\max}) \qquad \text{for every } x \in X .$$ 3. **Compact to Hausdorff.** If $(X, \mathcal{T}_X)$ is compact, $(Y, \mathcal{T}_Y)$ is Hausdorff (def-hausdorff-space) and $f : X \to Y$ is a continuous bijection, then $f$ is a homeomorphism (def-homeomorphism-and-open-maps). Nonemptiness in claim 2 is a hypothesis and not an oversight: for $X = \varnothing$ the image is empty and has neither a maximum nor a minimum. **No choice principle is used**: the one selection made below is over a finite index set, where lem-finite-choice is a theorem of ZF. ([[thm-compactness-under-continuous-maps]]).
```

#### topology / confirmed 002: `lem-standard-complete-metric-on-a-countable-product`

- Location: **ItemBody: Facts & Assumptions**; source lines 47, 49, 51.
- Pages: `complete-metrizability-and-baire`.
- Visible defect: The rendered ItemBody displays the raw supplier IDs in prose, unlike surrounding [[...]] references that render supplier titles.
- Future repair: Use rendered item-reference syntax for the parenthetical supplier citations, retaining the same references.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/lem-standard-complete-metric-on-a-countable-product--01.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/lem-standard-complete-metric-on-a-countable-product.md).

Exact frozen source lines:

```text
47: [F2] Let $(X,d)$ be a metric space (def-metric-space). $(X,d)$ is **complete** if every Cauchy sequence in $(X,d)$ converges to a point of $X$; a subset $A\subseteq X$ is called complete when the metric subspace $(A,d_A)$ is complete. ([[def-complete-metric-space]]).
49: [F3] Throughout, $\mathbb{R}$ is the complete ordered field (def-real-numbers) and a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$ (def-sequence), written $(a_k)$; recall that $\mathbb{N}$ contains $0$. The **sequence of partial sums** of a sequence $(a_k)$ of reals is $s_n:=\sum_{k<n}a_k$, so that $s_0=0$ and $s_{n+1}=s_n+a_n$; the **series** $\sum a_k$ **converges** when $(s_n)$ converges, and its **sum** is then that limit. ([[def-series]]).
51: [F4] Let $r \in \mathbb{R}$ and let $r^k$ be the integer power (def-integer-power), so that $r^0 = 1$ for every $r$, including $r = 0$. 1. If $|r| < 1$ then the series $\sum r^k$ converges (def-series) and $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$ 2. If $|r| \ge 1$ then $\sum r^k$ diverges. The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular $\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to $1$. Which starting index is meant has to be said, and it is said here. ([[thm-geometric-series]]).
```

#### topology / confirmed 003: `thm-covering-maps-inject-fundamental-groups`

- Location: **ItemBody: Facts & Assumptions**; source lines 40, 42.
- Pages: `covering-spaces-and-lifting`.
- Visible defect: The rendered ItemBody exposes these raw prerequisite IDs instead of display titles; adjacent [[...]] references render their titles normally.
- Future repair: Convert the bare parenthetical supplier IDs to rendered item references without changing the cited prerequisites.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-covering-maps-inject-fundamental-groups--01.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/thm-covering-maps-inject-fundamental-groups.md).

Exact frozen source lines:

```text
40: [F2] Let $f:X\to Y$ be continuous and let $x_0\in X$. Composition sends a loop $\alpha$ at $x_0$ to the loop $f\circ\alpha$ at $f(x_0)$. Using the loop classes and fundamental group of def-based-loops-and-fundamental-group, the proposed **induced homomorphism** is $$f_*:\pi_1(X,x_0)\longrightarrow\pi_1(Y,f(x_0)),\qquad f_*([\alpha]):=[f\circ\alpha].$$ The next theorem proves that this value is independent of the representative, that it is a group homomorphism in the sense of def-group-homomorphism, and that induced maps respect identities, composition and homotopies that fix the basepoint. ([[def-induced-homomorphism-on-fundamental-groups]]).
42: [F3] A topological space $X$ is **simply connected** when it is nonempty and path-connected (def-path-connected) and, for every $x_0\in X$, the group $\pi_1(X,x_0)$ has exactly one element. ([[def-simply-connected]]).
```

#### topology / confirmed 004: `ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals`

- Location: **title**; source lines 4.
- Pages: `compactness-examples`.
- Visible defect: The escaped LaTeX accent sequence in the plain-text title is displayed as the literal quote in “Lindel"of” instead of the intended “Lindelöf”.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals--02.png), [tile 03](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals--03.png), [tile 04](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals--04.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/ex-sigma-compactness-and-lindelof-in-the-line-and-the-rationals.md).

Exact frozen source lines:

```text
4: title: "$\\mathbb{R}$ and $\\mathbb{Q}$ are $\\sigma$-compact, and Lindel\\\"of assuming countable choice; $\\mathbb{R}$ is locally compact and $\\mathbb{Q}$ is nowhere locally compact"
```

#### topology / confirmed 005: `thm-compactness-variants-hierarchy`

- Location: **title**; source lines 4.
- Pages: `compactness`.
- Visible defect: Both escaped LaTeX accent sequences in the plain-text title are displayed as literal quotes in “Lindel"of” instead of the intended “Lindelöf”.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-compactness-variants-hierarchy--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-compactness-variants-hierarchy--02.png), [tile 03](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-compactness-variants-hierarchy--03.png), [tile 04](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-compactness-variants-hierarchy--04.png), [tile 05](math-library-rendering-audit-2026-10-23/topology/screenshots/thm-compactness-variants-hierarchy--05.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/thm-compactness-variants-hierarchy.md).

Exact frozen source lines:

```text
4: title: "Compact implies countably compact, Lindel\\\"of and limit point compact; countably compact together with Lindel\\\"of implies compact; and, at the cost of countable or dependent choice, sequentially compact implies countably compact, countably compact implies limit point compact, and the converse holds when every singleton is closed"
```

#### topology / confirmed 006: `thm-polygonal-normal-form-for-compact-connected-surfaces`

- Location: **Proof**; source lines 101.
- Pages: `classification-of-compact-connected-surfaces`.
- Visible defect: The proof paragraph ends with “∎ ## Remarks” on the same source line; the local HTML and screenshot tile --03 render the heading marker literally inside the proof paragraph instead of as a heading. The following remarks text is separate.
- Future repair: Start “## Remarks” on a new line after the proof paragraph.
- Frozen source: [snapshots/thm-polygonal-normal-form-for-compact-connected-surfaces.md](math-library-rendering-audit-2026-10-23/topology/snapshots/thm-polygonal-normal-form-for-compact-connected-surfaces.md).

Exact frozen source lines:

```text
101: 7.1 After steps 5.1–6.1, the word is a finite product of handle and square blocks. When both kinds occur, cyclically put one square block next to one handle block and apply the mixed move of [L3], replacing that pair by three square blocks. The handle-block count drops by one. Iterate until either all blocks are handles or all are squares. All intermediate cyclic words have a positive even number of sides and remain surface schemas by [L2, L3]. Consequently the terminal form is one of the three forms in the statement. The only AC use is the one inherited from the triangulation in [L1]; the word manipulations and their termination use finite choices. [L1,L2,L3,step 2.1,step 3.1,step 4.1,step 5.1,step 6.1] ∎ ## Remarks
```

#### topology / confirmed 007: `lem-the-diagonal-map-is-an-embedding`

- Location: **Item body**; source lines 4.
- Pages: `hausdorff-via-the-diagonal`.
- Visible defect: The title ends “whenever f and g are” and leaves the condition incomplete; the rendered heading is an unfinished clause.
- Future repair: The diagonal map is a topological embedding of $X$ onto $\Delta_X$, and the pairing of continuous maps into a product is continuous.
- Frozen source: [snapshots/lem-the-diagonal-map-is-an-embedding.md](math-library-rendering-audit-2026-10-23/topology/snapshots/lem-the-diagonal-map-is-an-embedding.md).

Exact frozen source lines:

```text
4: title: "$\\delta_X$ is a topological embedding of $X$ onto $\\Delta_X$, and $\\langle f, g \\rangle$ is continuous whenever $f$ and $g$ are"
```

### Uncertain observations

#### topology / uncertain 001: `ex-projective-plane-polygonal-schema`

- Location: **Example**; source lines 31, 32, 33, 34, 35, 36, 37, 38, 42, 43, 44, 45, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 97, 98, 99, 100.
- Pages: `classification-of-compact-connected-surfaces`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-projective-plane-polygonal-schema--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-projective-plane-polygonal-schema--02.png), [tile 03](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-projective-plane-polygonal-schema--03.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/ex-projective-plane-polygonal-schema.md).

Exact frozen source lines:

```text
31: The digon whose two sides are paired in the same boundary direction — the
32: one-polygon word $a\,a$ — realizes the real projective plane
33: $\mathbb{RP}^2$, taken here as the antipodal quotient $S^2/(x\sim -x)$,
34: equivalently as the closed upper hemisphere with antipodal boundary points
35: identified. It is nonorientable and has $V=1$, $E=1$, $F=1$, so
36: $\chi(\mathbb{RP}^2)=1-1+1=1$
37: ([[def-euler-characteristic-of-a-finite-cw-complex]]). This direct finite
38: quotient uses no choice axiom.
42: **Given:** The closed unit disk $D^2\subset\mathbb R^2$ whose boundary circle is
43: divided into its two closed semicircles, paired by the antipodal map
44: $u\mapsto -u$; the one-polygon schema with boundary word $a\,a$; and the unit
45: sphere $S^2\subset\mathbb R^3$.
82: [L7] The radial map $\varphi(u)=(u,\sqrt{1-\lVert u\rVert^2})$ from $D^2$ onto
83: the closed upper hemisphere is continuous with continuous inverse the
84: coordinate projection: coordinate projections are continuous
85: ([[thm-product-universal-property]]), sums, products and compositions of
86: continuous real maps are continuous
87: ([[lem-algebra-of-continuous-real-maps-on-a-space]],
88: [[lem-continuity-is-local-and-pastes]]). The square map on $[0,\infty)$ is
89: continuous by that algebra, strictly increasing, and onto $[0,\infty)$ by
90: [[thm-of-square-roots]]; its inverse, the square root, is continuous by
91: [[thm-continuous-inverse]].
97: 1.1 On the disk $D^2$ the antipodal pairing $u\mapsto-u$ pairs the two closed semicircles, so there is one edge class with two incident face-sides, and it pairs the two corners $(1,0)$ and $(-1,0)$, so there is one vertex class; the two corner sectors join under the two side-germ pairings in a single cyclic link. Hence the digon is a connected surface schema with $V=1$, $E=1$, $F=1$ whose realization $Y$ is a nonempty compact connected Hausdorff boundaryless surface; traversing the boundary circle once covers the single edge class twice in the same direction, which is the word $a\,a$. [L1]
98: 
99: 1.2 The closed upper hemisphere $H=\{x\in S^2: x_3\ge 0\}$ is closed and bounded in $\mathbb R^3$, hence compact by Heine–Borel; let $P:=H/\!\sim$ be the quotient that identifies $x$ with $-x$ for $x$ in the equator, the standard model of $\mathbb R P^2$; $P$ is compact as the continuous image of $H$ under the quotient map. [L3]
100: 
```

#### topology / uncertain 002: `ex-klein-bottle-polygonal-schema`

- Location: **Example**; source lines 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 45, 46, 47, 48, 49, 70, 71, 72, 73, 74, 75, 76, 92, 93, 94, 95, 96, 97, 98.
- Pages: `classification-of-compact-connected-surfaces-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-klein-bottle-polygonal-schema--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-klein-bottle-polygonal-schema--02.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/ex-klein-bottle-polygonal-schema.md).

Exact frozen source lines:

```text
31: The one-polygon word $a\,a\,b\,b$ of
32: [[def-polygonal-schema-and-edge-pairing]] realizes the Klein bottle $K$ of
33: [[def-klein-bottle]], equivalently the standard square word
34: $a\,b\,a^{-1}b$ under the polygonal cut-and-paste of
35: [[lem-polygonal-schema-reduction-moves]]. It is nonorientable and has $V=1$,
36: $E=2$, $F=1$, hence $\chi(K)=1-2+1=0$
37: ([[def-euler-characteristic-of-a-finite-cw-complex]]). The two
38: equal-exponent pairs are the two crosscap blocks, and the one-letter block
39: $a\,a$ realizes $\mathbb{RP}^2$ by
40: [[ex-projective-plane-polygonal-schema]]. This finite cut-and-paste
41: computation uses no choice axiom.
45: **Given:** The square $Q=[0,1]^2$ with corners $v_0=(0,0)$, $v_1=(1,0)$,
46: $v_2=(1,1)$, $v_3=(0,1)$, the one-polygon schema whose boundary sides read
47: $a$ (bottom $v_0v_1$), $a$ (right $v_1v_2$), $b$ (top $v_2v_3$), $b$ (left
48: $v_3v_0$) with equal-exponent pairs glued with matching parameters, and the
49: quotient $Y$ of $Q$ by these pairings.
70: [L3] The Klein bottle $K$ is the quotient of $Q$ by $(x,0)\sim(x,1)$ and
71: $(0,y)\sim(1,1-y)$, and the one-polygon word of that presentation is
72: $a\,b\,a^{-1}b$ ([[def-klein-bottle]]).
73: 
74: [L4] The one-polygon word $a\,a$, with its two sides paired in the same
75: boundary direction, realizes $\mathbb{RP}^2$ and is nonorientable
76: ([[ex-projective-plane-polygonal-schema]]).
92: 1.1 Both pairs of the word $a\,a\,b\,b$ carry equal exponents: the bottom side $a$ is glued to the right side $a$ with matching parameters, $(t,0)\sim(1,t)$, and the top side $b$ is glued to the left side $b$ with matching parameters, $(1-t,1)\sim(0,1-t)$. The a-pair identifies the corners $v_0\sim v_1$ and $v_1\sim v_2$, and the b-pair identifies $v_2\sim v_3$ and $v_3\sim v_0$; hence all four corners form one vertex class, so the quotient $Y$ has $V=1$ vertex class, $E=2$ paired side classes and $F=1$ face, and these are the cells of its finite CW structure. [L1]
93: 
94: 1.2 Read the word of the Klein-bottle presentation of [L3] cyclically from its middle letter, $b\,a^{-1}\,b\,a$; in the crosscap identity of [L2] with the letter $a$ renamed $b$, the separating arc $X=a^{-1}$ and the complementary arc $Y=a$ give a quotient homeomorphic to that of $b\,b\,Y^{-1}X=b\,b\,a^{-1}a^{-1}$. Cyclically rotating this word and renaming the letter $a^{-1}$ to $a$ turns it into $a\,a\,b\,b$; since the presentation of [L3] realizes the Klein bottle $K$, the quotient $Y$ of the word $a\,a\,b\,b$ is homeomorphic to $K$. [L1, L2, L3]
95: 
96: 2.1 Both equal-exponent pairings preserve boundary direction: their formulas in step 1.1 use matching boundary parameters. Choose collars around paired interior points of the $a$-sides, with $t$ increasing along the boundary and $r\geq0$ pointing inward. These coordinates give the same face orientation on the two collars. A chart across the paired edge uses $(t,r)$ on the first collar and $(t,-r)$ on the second, so its generator has opposite signs relative to the face generators on the two sides. The sign is the local-homology sign of a reflection, which reverses the cyclic orientation of the boundary of a small disk, exactly as in the seam calculation for [L4]. A path through the open face joining the collar interiors, closed by one crossing of the seam, therefore transports its generator to its negative. A continuous orientation is unchanged by loop transport [L5], which is impossible for a generator of an infinite cyclic group. Hence $Y\cong K$ is nonorientable. The two equal-exponent pairs are crosscap blocks, and [L4] identifies the single block with $\mathbb{RP}^2$. [L1, L4, L5, step 1.1, step 1.2]
97: 
98: 3.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=1-2+1=0$ by [L6], and this value is that of the Klein bottle by step 1.2. Together with steps 1.2 and 2.1 the word $a\,a\,b\,b$ realizes the Klein bottle, is nonorientable, and has Euler characteristic $0$. Every construction used is a finite explicit pairing, rotation or crosscap move of polygons, so no choice axiom is used. [L1, L6, step 1.1, step 1.2, step 2.1] ∎
```

#### topology / uncertain 003: `ex-sphere-polygonal-schema`

- Location: **Example**; source lines 31, 32, 33, 34, 35, 36, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 98, 99, 100, 101, 102, 103, 104.
- Pages: `classification-of-compact-connected-surfaces`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sphere-polygonal-schema--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sphere-polygonal-schema--02.png), [tile 03](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-sphere-polygonal-schema--03.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/ex-sphere-polygonal-schema.md).

Exact frozen source lines:

```text
31: The digon with boundary word $a\,a^{-1}$ is a polygonal schema whose
32: realization $Y$ is homeomorphic to the unit sphere $S^2$ of
33: [[def-euclidean-spheres-and-closed-balls]]. It has two vertex classes, one
34: edge class and one face, so $V=2$, $E=1$, $F=1$ and
35: $\chi(S^2)=2-1+1=2$
36: ([[def-euler-characteristic-of-a-finite-cw-complex]]), and it is orientable.
41: **Given:** The digon $D$, a closed disk whose boundary is divided by two
42: corners $v_0,v_1$ into the sides $s_1$ from $v_0$ to $v_1$, labelled $a$, and
43: $s_2$ from $v_1$ to $v_0$, labelled $a^{-1}$, paired by the parameter reversal
44: $s_1(t)\sim s_2(1-t)$, with realization $Y=D/{\sim}$; and the unit sphere
45: $S^2=\{(\alpha,t)\in\mathbb R^2\times\mathbb R:\lVert\alpha\rVert_2^2+t^2=1\}$
46: with its closed upper hemisphere
47: $S^2_+=\{(\alpha,\sqrt{1-\lVert\alpha\rVert_2^2}):\lVert\alpha\rVert_2\le1\}$,
48: its closed lower hemisphere
49: $S^2_-=\{(\alpha,-\sqrt{1-\lVert\alpha\rVert_2^2}):\lVert\alpha\rVert_2\le1\}$,
50: and the common equator $S^2_+\cap S^2_-$.
98: 1.1 The pairing is the parameter reversal $s_1(t)\sim s_2(1-t)$, so the corner $v_0=s_1(0)$ is paired with $s_2(1)=v_0$ and the corner $v_1=s_1(1)$ with $s_2(0)=v_1$: each corner forms its own vertex class, the two sides form one edge class, and the disk interior is the one face. Hence the realization $Y$ has $V=2$, $E=1$, $F=1$, and these are the cells of its finite CW structure. [L1]
99: 
100: 1.2 First replace the bigon by a round-disk representative. A disk homeomorphism takes its two corners to two points of the unit circle; a circle homeomorphism carrying these to antipodal points extends radially, $ru\mapsto r\varphi(u)$, with radial inverse. Composing gives a disk homeomorphism taking the two corners to opposite ends of a diameter. Conjugate the side pairing by this homeomorphism; it induces a quotient homeomorphism by [L2], using the inverse to obtain the inverse quotient map. We may now cut the round representative along that diameter $\gamma$, whose interior lies in the disk interior; the pieces are two bigons, $B_1$ with sides $s_1$ and one copy of $\gamma$, and $B_2$ with sides $s_2$ and the other copy $\gamma'$. By the split identity of [L3] the quotient $Y$ is homeomorphic to the quotient of $B_1\sqcup B_2$ by the pair $s_1\sim s_2$ together with the pair $\gamma\sim\gamma'$; since $\partial B_1=s_1\cup\gamma$ and $\partial B_2=s_2\cup\gamma'$ and the two pairings match at the common endpoints $v_0,v_1$, they combine into a single homeomorphism $h:\partial B_1\to\partial B_2$ that identifies the whole boundary circle of $B_1$ with the whole boundary circle of $B_2$. [L1, L3]
101: 
102: 2.1 Fix homeomorphisms $\alpha_1:B_1\to\overline B_2(0,1)$ and $u_2:B_2\to\overline B_2(0,1)$ onto the closed unit disk, which exist because bigons are closed disks, and let $\varphi=\alpha_1\circ h^{-1}\circ u_2^{-1}$ on the unit circle; extending $\varphi$ radially by $\kappa(tu)=t\,\varphi(u)$ and putting $\alpha_2=\kappa\circ u_2$ gives a homeomorphism $\alpha_2:B_2\to\overline B_2(0,1)$ with $\alpha_2\circ h=\alpha_1$ on $\partial B_1$. Here $\kappa^{-1}(tu)=t\,\varphi^{-1}(u)$ and $\alpha_2^{-1}=u_2^{-1}\circ\kappa^{-1}$. Define $\Phi$ on the class of $x\in B_1$ as $(\alpha_1(x),\sqrt{1-\lVert\alpha_1(x)\rVert_2^2})$ and on the class of $x\in B_2$ as $(\alpha_2(x),-\sqrt{1-\lVert\alpha_2(x)\rVert_2^2})$: the two formulas agree on the glued boundary circle because $\alpha_2\circ h=\alpha_1$ there, so $\Phi$ is a well-defined continuous map out of the quotient by [L2]. It is surjective onto $S^2_+\cup S^2_-=S^2$ and injective because the two formulas are homeomorphisms onto the closed upper and lower hemispheres, which meet exactly in the equator. The quotient is compact as a continuous image of the compact disk $D$ [L2], while $S^2$ is Hausdorff [L4], so $\Phi$ is a homeomorphism by the compact-to-Hausdorff criterion [L4], and $Y\cong S^2$. [L2, L4, step 1.2]
103: 
104: 3.1 The single pair has opposite exponents, so by [L1] it is orientation compatible; by step 2.1 the realization $Y$ is a boundaryless surface, and the generator carried by the oriented face continues unchanged across the single edge class, its locally constant generator classes over face and vertex charts supplying a continuous generating section as in [L6]. Hence $Y$, and by step 2.1 the sphere $S^2$, is orientable. [L1, L6, step 1.1, step 2.1]
```

#### topology / uncertain 004: `ex-torus-polygonal-schema`

- Location: **Example**; source lines 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 88, 89, 90, 91, 92, 93, 94, 95, 96.
- Pages: `classification-of-compact-connected-surfaces`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-torus-polygonal-schema--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-torus-polygonal-schema--02.png), [tile 03](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-torus-polygonal-schema--03.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/ex-torus-polygonal-schema.md).

Exact frozen source lines:

```text
31: The square schema of [[def-polygonal-schema-and-edge-pairing]] with boundary
32: word $a\,b\,a^{-1}b^{-1}$ realizes the torus
33: $T^2=(\mathbb R/\mathbb Z)^2$ of [[def-two-dimensional-torus]]. It is
34: orientable and has $V=1$, $E=2$, $F=1$, hence
35: $\chi(T^2)=1-2+1=0$ ([[def-euler-characteristic-of-a-finite-cw-complex]]).
36: This direct finite quotient uses no choice axiom.
37: 
38: ## Facts & Assumptions
39: 
40: **Given:** The square $Q=[0,1]^2$ with sides paired by $(s,0)\sim(s,1)$ and
41: $(0,t)\sim(1,t)$, the one-polygon schema whose boundary word is
42: $a\,b\,a^{-1}b^{-1}$, and the quotient circle $S^1=\mathbb R/\mathbb Z$ with
43: projection $p$.
88: 1.1 The bottom and top sides of $Q$ form one paired class and the left and right sides form a second; the four corners are all identified, since the horizontal pairing gives $(0,0)\sim(0,1)$ and $(1,0)\sim(1,1)$ while the vertical pairing gives $(0,0)\sim(1,0)$ and $(0,1)\sim(1,1)$, so the four corner sectors join in the single cyclic link $(0,0)$–$(1,0)$–$(1,1)$–$(0,1)$–$(0,0)$. The square schema is therefore a connected surface schema with $V=1$, $E=2$, $F=1$, and its realization $Y$ is a nonempty compact connected boundaryless surface. [L1]
89: 
90: 1.2 The map $f:Q\to T^2$, $f(s,t)=(p(s),p(t))$, is continuous because its two components $p\circ\mathrm{pr}_1$ and $p\circ\mathrm{pr}_2$ are continuous, and $f(s,t)=f(s',t')$ holds exactly when $s-s'\in\mathbb Z$ and $t-t'\in\mathbb Z$; for $s,s'\in[0,1]$ this means $s=s'$ or $\{s,s'\}=\{0,1\}$, and likewise in the second coordinate, so the fibres of $f$ are precisely the classes of the relation on $Q$ generated by the two side pairings. Since $f$ is constant on those classes, it induces a continuous bijection $\bar f:Y\to T^2$ out of the quotient. [given, L2, L3, L4]
91: 
92: 2.1 The realization $Y$ is compact by [L1] and $T^2$ is Hausdorff by [L4], so the continuous bijection $\bar f$ is a homeomorphism by [L5]; hence the word $a\,b\,a^{-1}b^{-1}$ realizes the torus $T^2$. [L1, L4, L5, step 1.2]
93: 
94: 3.1 The cell counts of step 1.1 give $\chi(Y)=V-E+F=1-2+1=0$ by [L6], and this is the Euler characteristic of $T^2$ by step 2.1. [L1, L6, step 1.1, step 2.1]
95: 
96: 4.1 Each of the two letters occurs once with exponent $+1$ and once with exponent $-1$, so by [L1] both pairings are orientation compatible; the generator carried by the oriented face continues unchanged across both edge classes, and its locally constant generator classes supply the continuous generating section of [L7]. Hence $Y\cong T^2$ is orientable. Every ingredient is a finite explicit map or pairing, so no choice axiom is used. [L1, L7, step 1.1, step 2.1] ∎
```

#### topology / uncertain 005: `def-connected-sum-of-compact-surfaces`

- Location: **Definition**; source lines 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53.
- Pages: `classification-of-compact-connected-surfaces`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/def-connected-sum-of-compact-surfaces--01.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/def-connected-sum-of-compact-surfaces.md).

Exact frozen source lines:

```text
33: Let $S$ and $T$ be nonempty compact connected boundaryless topological
34: 2-manifolds ([[def-topological-manifold-without-boundary]]). Choose embedded
35: closed disks $D_S\subset S$ and $D_T\subset T$ whose boundaries lie in the
36: respective coordinate charts, and choose a homeomorphism
37: $\phi:\partial D_S\to\partial D_T$. Define the **connected-sum model**
38: $S\#_\phi T$ to be
39: 
40: $$\bigl((S\setminus\operatorname{int}D_S)\sqcup(T\setminus\operatorname{int}D_T)\bigr)/\!\sim_\phi.$$
41: 
42: with the quotient topology ([[def-quotient-topology]]), where
43: $x\sim_\phi\phi(x)$ for every $x\in\partial D_S$ and all other points are
44: identified only with themselves. When $S$ and $T$ are oriented, we require
45: $\phi$ to reverse the induced orientations of the two boundary circles. For
46: unoriented factors, the homeomorphism $\phi$ is part of the model data.
47: 
48: An iterated connected sum retains the disks, boundary maps, and parentheses
49: used at every binary gluing. In this library, a displayed standard normal form
50: uses the fixed polygonal model obtained by concatenating its indicated handle
51: blocks $aba^{-1}b^{-1}$ or crosscap blocks $aa$. No assertion that changing
52: the disk or gluing choices preserves the homeomorphism type is included in
53: this definition; later proofs use the explicit models they construct.
```

#### topology / uncertain 006: `prop-covering-morphism-subgroup-criterion`

- Location: **Item body**; source lines 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43.
- Pages: `classification-of-covering-spaces`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/prop-covering-morphism-subgroup-criterion--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/prop-covering-morphism-subgroup-criterion--02.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/prop-covering-morphism-subgroup-criterion.md).

Exact frozen source lines:

```text
31:   scraped: []
32:   references:
33:     - title: "Allen Hatcher, Algebraic Topology, Proposition 1.37"
34:       url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
35:     - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 3, Section 7"
36:       url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
37: pipeline_run: null
38: ---
39: 
40: ## Statement
41: 
42: Let $B$ be path-connected and locally path-connected, and let
43: 
```

#### topology / uncertain 007: `ex-genus-two-orientable-surface-polygonal-schema`

- Location: **Example**; source lines 31, 40.
- Pages: `classification-of-compact-connected-surfaces-examples`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-genus-two-orientable-surface-polygonal-schema--01.png), [tile 02](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-genus-two-orientable-surface-polygonal-schema--02.png), [tile 03](math-library-rendering-audit-2026-10-23/topology/screenshots/ex-genus-two-orientable-surface-polygonal-schema--03.png); [frozen source](math-library-rendering-audit-2026-10-23/topology/snapshots/ex-genus-two-orientable-surface-polygonal-schema.md).

Exact frozen source lines:

```text
31: The octagon schema of [[def-polygonal-schema-and-edge-pairing]] with boundary
40: **Given:** The convex octagon $P$ with vertices $v_0,\dots,v_7$ in cyclic order and sides $a=v_0v_1$, $b=v_1v_2$, $a^{-1}=v_2v_3$, $b^{-1}=v_3v_4$, $c=v_4v_5$, $d=v_5v_6$, $c^{-1}=v_6v_7$ and $d^{-1}=v_7v_0$, with each side pair identified by the affine reversal and $Y=P/R$ the realization.
```

