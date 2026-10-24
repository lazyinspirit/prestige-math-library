## Knot Theory

Completed visual review of **944 items across 108 pages**, with **1907 image tiles**. Findings: 49 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/knot-theory/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/knot-theory/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/knot-theory/category-review-receipt.json).

### Confirmed rendering defects

#### knot-theory / confirmed 001: `cex-knot-kt-40-boundary-case`

- Location: **Statement refuted**; source lines 45, 53.
- Pages: `knot-cobordism-maps-and-functoriality-examples`.
- Visible defect: Standalone tikzcd renders as a red diagram-failed block; corresponding map is already rendered in KaTeX above.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/cex-knot-kt-40-boundary-case--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/cex-knot-kt-40-boundary-case.md).

Exact frozen source lines:

```text
45: ```tikz
53: ```
```

#### knot-theory / confirmed 002: `def-poly-torsion-free-abelian-group`

- Location: **Definition**; source lines 40, 42.
- Pages: `casson-gordon-invariants-and-sliceness-obstructions`.
- Visible defect: ASCII group-series notation and indexed quotient leak as literal text instead of typeset mathematics.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-poly-torsion-free-abelian-group--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-poly-torsion-free-abelian-group.md).

Exact frozen source lines:

```text
40: A group G is poly-torsion-free abelian (PTFA) if it admits a finite subnormal series
42: in which every quotient G_{j+1}/G_j is torsion-free abelian. The trivial group is PTFA, using the length-zero series. The term “subnormal” means each G_j is normal in G_{j+1}; normality in all of G is not required.
```

#### knot-theory / confirmed 003: `ex-knot-kt-14-worked-cases`

- Location: **Diagram**; source lines 92, 104.
- Pages: `three-manifold-surgery-presentations-and-kirby-moves-examples`.
- Visible defect: TikZ picture source is emitted literally in the Diagram section; source uses a tilde-fenced tikz block.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-14-worked-cases--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-14-worked-cases.md).

Exact frozen source lines:

```text
92: ~~~tikz
104: \end{tikzpicture}
```

#### knot-theory / confirmed 004: `ex-knot-kt-24-worked-cases`

- Location: **Diagram**; source lines 115, 128.
- Pages: `casson-gordon-invariants-and-sliceness-obstructions-examples`.
- Visible defect: TikZ picture source is emitted literally in the Diagram section; source uses a tilde-fenced tikz block.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-24-worked-cases--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-24-worked-cases.md).

Exact frozen source lines:

```text
115: ~~~tikz
128: ~~~
```

#### knot-theory / confirmed 005: `lem-amenable-D-R-l2-dimension-estimate`

- Location: **Statement**; source lines 46, 46.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: Statement leaves symbols and indices such as R, F_p, C_*, C_i, and H_i unmarked, exposing literal ASCII math in prose.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-amenable-D-R-l2-dimension-estimate--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-amenable-D-R-l2-dimension-estimate.md).

Exact frozen source lines:

```text
46: Assume the Axiom of Choice. Let R be Q or F_p, let Γ be a countable discrete amenable group in Strebel's class D(R), and let C_* be a bounded-below chain complex of right ZΓ-modules whose C_i are finitely generated free for i≤n. Give R the trivial Γ-action. If H_i(C_*⊗_{ZΓ}R)=0 for every i≤n, then H_i(C_*⊗_{ZΓ}NΓ) has von Neumann dimension zero for every i≤n. This is a dimension-zero conclusion and does not assert that the L²-homology module vanishes.
```

#### knot-theory / confirmed 006: `thm-cheeger-gromov-uniform-rho-bound`

- Location: **Statement**; source lines 38, 38.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: Statement leaves C_M, π₁(M), φ:π₁(M)→Γ, and the rho bound as unmarked inline notation, visibly exposing ASCII subscripts and symbols in prose.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-cheeger-gromov-uniform-rho-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-cheeger-gromov-uniform-rho-bound.md).

Exact frozen source lines:

```text
38: Assume full AC. For every closed oriented 3-manifold M there exists a finite constant C_M such that for every discrete group Γ and every homomorphism φ:π₁(M)→Γ for which the rho invariant is defined, |ρ(M,φ)|≤C_M. The constant may depend on M but not on Γ or φ.
```

#### knot-theory / confirmed 007: `lem-strong-winding-stable-under-companion-insertion`

- Location: **Facts & Assumptions**; source lines 49, 63.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: Facts and proof prose contain unmarked notation including μ_K, λ_K, π₁(S³\K), ST\P, and P(K), so underscores and formula structure render literally.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-strong-winding-stable-under-companion-insertion--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-strong-winding-stable-under-companion-insertion.md).

Exact frozen source lines:

```text
49: [F2] The knot exterior has meridian μ_K and preferred longitude λ_K on its boundary torus ([[def-knot-exterior]], [[def-knot-meridian-and-preferred-longitude]]).
63: 3.1 Under the torus gluing, λ is identified with λ_K and η with μ_K. Since μ_K normally generates the companion-knot group, λ becomes redundant, and η normally generates the entire satellite-complement group. The outer solid-torus meridian for the pattern P(K) is isotopic in the complement to η, so it too normally generates. [F1, F2, step 2.1, algebra]
```

#### knot-theory / confirmed 008: `ex-knot-kt-06-worked-cases`

- Location: **Remarks**; source lines 87, 102.
- Pages: `seifert-matrices-and-the-alexander-module-examples`.
- Visible defect: The Diagram remark emits the literal TikZ environment and commands as rendered text. This is source syntax leaking into the local HTML, not a failed or mismatched mathematical diagram.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-06-worked-cases--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-06-worked-cases.md).

Exact frozen source lines:

```text
87: ~~~tikz
102: ~~~
```

#### knot-theory / confirmed 009: `thm-cochran-davis-ray-strong-winding-injectivity`

- Location: **Statement**; source lines 47, 63.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The theorem statement leaves category notation as literal ASCII TeX-like text (C^{1/n}→C^{1/n}, C_ex→C_ex, C_top→C_top, C_sm→C_sm); line 63 also renders AC_omega literally. Wrap these expressions in math notation.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-cochran-davis-ray-strong-winding-injectivity--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-cochran-davis-ray-strong-winding-injectivity.md).

Exact frozen source lines:

```text
47: Let P be a pattern of nonzero winding number n. Then P induces an injective function C^{1/n}→C^{1/n}. If P has strong winding number ±1, then it induces injective functions C_ex→C_ex and C_top→C_top. If, in addition, the smooth 4-sphere has a unique smooth structure up to diffeomorphism, then P induces an injective function C_sm→C_sm. No sliceness hypothesis on P(U) is required in this theorem; the proof constructs an auxiliary pattern with ribbon closure.
63: [F4] The finite connected-sum/inverse instances for these actual knots and concordances are available without an ambient choice axiom by the compact-input construction in [F3], step 1.1. The general group theorem records these same operations with AC_omega ([[thm-cdr-concordance-categories-form-abelian-groups]]); its stronger choice assumption is not a premise of this unqualified theorem.
```

#### knot-theory / confirmed 010: `cex-knot-kt-43-boundary-case`

- Location: **Diagram**; source lines 66, 84.
- Pages: `knot-floer-genus-and-fiberedness-detection-examples`.
- Visible defect: The described connected-sum sphere and unknot diagram is replaced by a red “diagram failed to render” box. The TikZ source specifies two punctured Poincare summands, a separating sphere, and the unknot in a ball in the left summand.
- Future repair: Correct the TikZ parse error while preserving the two summand boxes, separating sphere, and unknot location.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/cex-knot-kt-43-boundary-case--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/cex-knot-kt-43-boundary-case.md).

Exact frozen source lines:

```text
66: ## Diagram
84: ```
```

#### knot-theory / confirmed 011: `ex-knot-kt-07-worked-cases`

- Location: **Diagram**; source lines 124, 152.
- Pages: `alexander-polynomial-from-seifert-matrices`.
- Visible defect: The Hopf-plumbing schematic is printed as literal TikZ source in the Diagram section; the snapshot uses a tilde-delimited `~~~tikz` fence. The intended two panels distinguish positive-positive trefoil bands from positive-negative figure-eight bands, with core intersection +1.
- Future repair: Use the supported TikZ fence so both square-plumbing panels and their band/sign labels render.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-07-worked-cases--03.png), [tile 04](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-07-worked-cases--04.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-07-worked-cases.md).

Exact frozen source lines:

```text
124: ## Diagram
152: ~~~
```

#### knot-theory / confirmed 012: `lem-link-diagram-upper-region-free-meridians`

- Location: **Remarks**; source lines 92, 109.
- Pages: `milnor-invariants-and-link-peripheral-nilpotent-quotients`.
- Visible defect: The cross-section sketch is printed as literal TikZ source after the Remarks text; the snapshot uses a tilde-delimited `~~~tikz` fence. The intended figure has one strand, a sheet below it, two side collars, and the level-sphere boundary.
- Future repair: Use the supported TikZ fence to render the described strand, sheet, collar, and level sphere.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-link-diagram-upper-region-free-meridians--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-link-diagram-upper-region-free-meridians.md).

Exact frozen source lines:

```text
92: ## Remarks
109: ~~~
```

#### knot-theory / confirmed 013: `lem-seifert-cut-open-cover-alexander-module-presentation`

- Location: **Remarks**; source lines 113, 128.
- Pages: `seifert-matrices-and-the-alexander-module`.
- Visible defect: The seam/stack schematic is replaced by a red “diagram failed to render” box. The surrounding text and TikZ labels specify adjacent copies Y_n and Y_{n+1}, the shared S_- / S_+ seam, and the positive meridian deck map t.
- Future repair: Correct the TikZ parse error while preserving the adjacent-copy seam identification and positive meridian arrow.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-seifert-cut-open-cover-alexander-module-presentation--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-seifert-cut-open-cover-alexander-module-presentation.md).

Exact frozen source lines:

```text
113: ## Remarks
128: Each rectangle is one cut complement. The seam identifies the negative face of copy $n$ with the positive face of copy $n+1$; the induced Mayer–Vietoris relation is $i_- - t i_+$.
```

#### knot-theory / confirmed 014: `thm-knot-slice-iff-zero-trace-embeds-in-s-four`

- Location: **Diagram**; source lines 95, 123.
- Pages: `zero-traces-and-conway-nonsliceness`.
- Visible defect: The three-stage cone-disk / 2-handle-core / slice-disk sketch is emitted as literal TikZ source in the Diagram section. The snapshot uses a tilde-delimited `~~~tikz` fence.
- Future repair: Use the supported TikZ fence so the three construction stages and their common boundary labels render.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-knot-slice-iff-zero-trace-embeds-in-s-four--02.png), [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-knot-slice-iff-zero-trace-embeds-in-s-four--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-knot-slice-iff-zero-trace-embeds-in-s-four.md).

Exact frozen source lines:

```text
95: ## Diagram
123: The schematic identifies the cone disk and the $2$-handle core along their common boundary $K$, and marks the cone point and the small boundary $\Gamma_\epsilon$ created by deleting a cap. The proof uses the local coordinate-ball argument above, not the sketch.
```

#### knot-theory / confirmed 015: `def-kauffman-bracket-skein-module-of-a-three-manifold`

- Location: **Definition**; source lines 47, 75.
- Pages: `skein-modules-for-links-in-three-manifolds`.
- Visible defect: The three schematic labels (“crossing”, “A-smoothing, weight A”, and “B-smoothing, weight A^{-1}”) crowd and overlap beneath their respective diagrams, so the labels are difficult to read.
- Future repair: Increase panel spacing or reposition labels so each tangle and its weight can be read independently.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-kauffman-bracket-skein-module-of-a-three-manifold--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-kauffman-bracket-skein-module-of-a-three-manifold.md).

Exact frozen source lines:

```text
47: For the local crossing relation, choose an orientation-preserving chart from a
75:   \end{scope}
```

#### knot-theory / confirmed 016: `ex-knot-kt-17-worked-cases`

- Location: **Example**; source lines 57, 84.
- Pages: `satellite-knots-and-jsj-tori-examples`.
- Visible defect: Labels in the two-panel cable/JSJ schematic overlap each other and the panel content, obscuring the slope annotations and boundary labels described in the text.
- Future repair: Give the two panels more room and separate slope, boundary, and piece labels while keeping the (2,1) lift and companion-torus cut data.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-17-worked-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-17-worked-cases.md).

Exact frozen source lines:

```text
57: Assume full AC. In the standard solid torus $V=S^1\times D^2$, let $P_{2,1}$ be the oriented curve $s\mapsto(e^{4\pi i s},r e^{2\pi i s})$ on an interior parallel torus, where $0<r<1$. Let $K=T(2,3)$ be the right trefoil and use the companion embedding that matches the product meridian and longitude of $V$ to the positive meridian and preferred longitude of $K$. The outer torus of $X_{P_{2,1}}$ is incompressible, and $X_{P_{2,1}}$ is not a product $T^2\times[0,1]$ with its outer and inner tori as ends. The companion torus $T_c$ is essential; both pieces of $E_{P_{2,1}(K)}$ cut along $T_c$ are Seifert-fibered, while the whole satellite exterior is neither atoroidal nor Seifert-fibered. Every inclusion-minimal JSJ system has one torus ambient isotopic to $T_c$, and cutting along $T_c$ has the trefoil exterior as its outside component.
84: \end{tikzpicture}
```

#### knot-theory / confirmed 017: `lem-signature-additivity-under-gluing`

- Location: **Statement**; source lines 43, 46.
- Pages: `casson-gordon-invariants-and-sliceness-obstructions`.
- Visible defect: The two displayed signature equalities appear as literal ASCII math (`sign(X)=...` and `sign_Γ^(2)(X)=...`) rather than typeset mathematics; the subscript/superscript syntax is visible as raw text.
- Future repair: Wrap both signature equalities in math delimiters and use the intended ordinary and L^2 signature notation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-signature-additivity-under-gluing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-signature-additivity-under-gluing.md).

Exact frozen source lines:

```text
43: Let W₀ and W₁ be compact oriented smooth 4-manifolds with a common identified boundary M, and let Γ be a discrete group. Suppose coefficient homomorphisms ψ_i:π₁(W_i)→Γ agree on π₁(M), and let X=W₀∪_M(−W₁) be the resulting closed oriented 4-manifold with its glued coefficient map. Then
46: sign_Γ^(2)(X)=sign_Γ^(2)(W₀,ψ₀)−sign_Γ^(2)(W₁,ψ₁).
```

#### knot-theory / confirmed 018: `cex-knot-kt-14-boundary-case`

- Location: **Diagram**; source lines 86.
- Pages: `three-manifold-surgery-presentations-and-kirby-moves-examples`.
- Visible defect: The intended empty-diagram / +1-unknot figure is not rendered; literal TikZ source is printed in the ItemBody below the explanatory caption.
- Future repair: Repair the local TikZ rendering or replace the block with a supported diagram representation; preserve the two panels and +1 framing label.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/cex-knot-kt-14-boundary-case--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/cex-knot-kt-14-boundary-case.md).

Exact frozen source lines:

```text
86: \begin{tikzpicture}[>=stealth]
```

#### knot-theory / confirmed 019: `def-generic-movie-of-an-oriented-knot-cobordism`

- Location: **Diagram**; source lines 64.
- Pages: `lee-deformation-and-rasmussen-s-invariant`.
- Visible defect: The renderer displays a red “diagram failed to render” box in place of the intended merge-saddle schematic.
- Future repair: Repair the TikZ syntax or replace with a supported diagram. Draw two incoming level-set circles connected by the saddle band and one outgoing circle; label the arrow “one saddle band”. Keep it explicitly a merge example.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-generic-movie-of-an-oriented-knot-cobordism--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-generic-movie-of-an-oriented-knot-cobordism.md).

Exact frozen source lines:

```text
64: \begin{tikzpicture}[>=stealth, node distance=1.6cm]
```

#### knot-theory / confirmed 020: `def-epsilon-from-filtered-knot-floer-complex`

- Location: **Definition**; source lines 47.
- Pages: `epsilon-and-upsilon-concordance-invariants`.
- Visible defect: The three-case epsilon display visually collides with the following explanatory sentence (“Here zero and nonzero…”), making the cases difficult to read.
- Future repair: Separate the cases into a properly displayed aligned/cases environment with enough vertical spacing before the explanatory sentence.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-epsilon-from-filtered-knot-floer-complex--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-epsilon-from-filtered-knot-floer-complex.md).

Exact frozen source lines:

```text
47: $$ \epsilon(C)=\begin{cases} 1,&F_{\tau(C)}=0,\\ -1,&G_{\tau(C)}=0,\\ 0,&F_{\tau(C)}\ne0\text{ and }G_{\tau(C)}\ne0. \end{cases} $$
```

#### knot-theory / confirmed 021: `def-knot-floer-cobordism-map`

- Location: **Definition**; source lines 45.
- Pages: `knot-cobordism-maps-and-functoriality`.
- Visible defect: The long nested triangle-count formula is rendered in an extremely compressed, crowded display; its index conditions and sum factors are hard to distinguish at the captured width.
- Future repair: Break the triangle-map expression into aligned lines, placing the admissibility conditions below or beside the inner sum without compressing the whole expression.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-knot-floer-cobordism-map--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-knot-floer-cobordism-map.md).

Exact frozen source lines:

```text
45: \mathbf x\longmapsto \sum_{\mathbf y}\ \sum_{\substack{\phi\in\pi_2(\mathbf x,\Theta^+_{\boldsymbol\beta\boldsymbol\gamma},\mathbf y)\\ \mu(\phi)=0,\ \mathfrak s(\phi)=\mathfrak s|_{W_r},\\ n_{w_i}(\phi),n_{z_i}(\phi)\ge0\ \text{for every marked point}}} \#_2\bigl(\mathcal M(\phi)\bigr)U^{\sum_i n_{w_i}(\phi)}V^{\sum_i n_{z_i}(\phi)}\mathbf y,
```

#### knot-theory / confirmed 022: `def-kauffman-bracket-smoothing-and-loop-value`

- Location: **Definition**; source lines 61.
- Pages: `kauffman-bracket-state-sum-and-jones-polynomial`.
- Visible defect: The local crossing and smoothing diagrams render, but the captions/weights at their lower edges overlap one another and the figure is too compressed to distinguish the three labels reliably.
- Future repair: Increase the diagram scale or separate each label from its drawing with more vertical space; keep the crossing, A/B smoothing pairings, and weights A and A^{-1} distinct.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-kauffman-bracket-smoothing-and-loop-value--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-kauffman-bracket-smoothing-and-loop-value.md).

Exact frozen source lines:

```text
61: \begin{tikzpicture}[scale=0.72, line cap=round, line join=round]
```

#### knot-theory / confirmed 023: `lem-cyclic-cover-linking-form-inverse-matrix`

- Location: **Remarks**; source lines 91.
- Pages: `cyclic-branched-covers-and-knot-determinants`.
- Visible defect: A red “diagram failed to render” box replaces the forward-surgery / reverse-surgery correspondence diagram.
- Future repair: Repair the tikzcd block or use a supported simple arrow diagram: S^3 → Y → S^3, labeled forward surgery and reverse surgery.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-cyclic-cover-linking-form-inverse-matrix--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-cyclic-cover-linking-form-inverse-matrix.md).

Exact frozen source lines:

```text
91: \begin{tikzcd}
```

#### knot-theory / confirmed 024: `lem-integral-seifert-form-is-realized-by-a-knot`

- Location: **Diagram**; source lines 89.
- Pages: `algebraic-knot-concordance-and-metabolic-forms`.
- Visible defect: The clasp diagram is not rendered; its literal TikZ commands appear as plain source text in the ItemBody.
- Future repair: Repair the TikZ rendering or replace with a supported diagram. Preserve the two oriented mixed crossings between a_i^+ (blue) and a_j (red), with a_i^+ over at the left and a_j over at the right, both positive.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-integral-seifert-form-is-realized-by-a-knot--02.png), [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-integral-seifert-form-is-realized-by-a-knot--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-integral-seifert-form-is-realized-by-a-knot.md).

Exact frozen source lines:

```text
89: \begin{tikzpicture}[scale=0.9,>=stealth]
```

#### knot-theory / confirmed 025: `ex-knot-kt-19-worked-cases`

- Location: **Diagram**; source lines 59, 69.
- Pages: `hyperbolic-dehn-filling-and-exceptional-slopes-examples`.
- Visible defect: The figure-eight zero-filling diagram is replaced by a red “diagram failed to render” block; the source TikZ is present in the frozen snapshot.
- Future repair: Adjust the TikZ construct to supported renderer syntax while preserving the square edge identifications, monodromy matrix and separate S^1 base.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-19-worked-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-19-worked-cases.md).

Exact frozen source lines:

```text
59: \begin{tikzpicture}[>=stealth,scale=1]
69: \end{tikzpicture}
```

#### knot-theory / confirmed 026: `lem-kontsevich-braid-and-knot-isotopy-invariance`

- Location: **Statement**; source lines 55, 66.
- Pages: `kontsevich-integral-and-universal-finite-type-invariants`.
- Visible defect: The horizontal-deformation TikZ figure is replaced by a red “diagram failed to render” block.
- Future repair: Use locally supported TikZ syntax and retain the Re(z) and t axes, initial/final arcs, fixed critical levels, and deformation label.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-kontsevich-braid-and-knot-isotopy-invariance--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-kontsevich-braid-and-knot-isotopy-invariance.md).

Exact frozen source lines:

```text
55: ```tikz
66: ```
```

#### knot-theory / confirmed 027: `ex-knot-kt-49-worked-cases`

- Location: **Example**; source lines 44, 57.
- Pages: `normal-surface-unknot-recognition-examples`.
- Visible defect: The Diagram section emits the TikZ code literally. The source wraps its tikzpicture in a tilde fence (~~~tikz), which this renderer does not recognize as a diagram fence.
- Future repair: Use the supported triple-backtick tikz fence; preserve the triangular-prism staircase edges, dashed diagonals, red midpoint disk, and vertex labels.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-49-worked-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-49-worked-cases.md).

Exact frozen source lines:

```text
44: ~~~tikz
57: ~~~
```

#### knot-theory / confirmed 028: `lem-ideal-orthoscheme-volume`

- Location: **Diagram**; source lines 50, 68.
- Pages: `hyperbolic-knot-complements-and-volume`.
- Visible defect: The Diagram section emits the literal center and tikzpicture environments and their commands instead of rendering the shaded projection.
- Future repair: Place the existing picture in the supported diagram fence and remove unsupported center wrappers if needed; preserve O, A, B, the unit-circle arc, and zeta labels.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-ideal-orthoscheme-volume--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-ideal-orthoscheme-volume.md).

Exact frozen source lines:

```text
50: \begin{center}
68: \end{center}
```

#### knot-theory / confirmed 029: `def-zero-surgery-on-a-knot`

- Location: **Definition**; source lines 41, 41.
- Pages: `casson-gordon-invariants-and-sliceness-obstructions`.
- Visible defect: The entire definition is set as prose: variables and topology expressions such as E_K, mu_K, lambda_K, D²×S¹ and M(K) appear as raw ASCII/unformatted notation, so inline math is not typeset.
- Future repair: Mark symbolic expressions and map assignments as inline mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-zero-surgery-on-a-knot--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-zero-surgery-on-a-knot.md).

Exact frozen source lines:

```text
41: Assume countable choice as required by the chosen tubular-neighborhood and peripheral-system data. Let K be a smooth oriented knot with compact exterior E_K, positive meridian mu_K, and preferred longitude lambda_K on the boundary torus. The zero-framed surgery manifold M(K) is the closed oriented 3-manifold obtained by gluing D²×S¹ to E_K so that the meridian boundary circle of D²×{1} is identified with lambda_K and a boundary longitude {z₀}×S¹, with z₀∈∂D², is identified with mu_K. This boundary longitude is parallel inside the filling solid torus to its core {0}×S¹. The orientation extends the orientation of E_K across the filling. Thus the filling slope is the preferred zero-linking longitude; the definition asserts no 4-manifold bounded by M(K).
```

#### knot-theory / confirmed 030: `lem-alexander-one-knot-has-trivial-alexander-basis`

- Location: **Proof**; source lines 82, 86.
- Pages: `freedman-theorem-and-topological-sliceness`.
- Visible defect: Several proof formulas are authored as raw ASCII prose, including omega(a_i,b_j)=delta_ij, T_v(z)=z+omega(z,v)v, and indexed vectors/matrices; underscores, superscripts and operators remain untypeset.
- Future repair: Typeset the mathematical expressions in the affected proof steps; retain the prose explanation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-alexander-one-knot-has-trivial-alexander-basis--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-alexander-one-knot-has-trivial-alexander-basis.md).

Exact frozen source lines:

```text
82: 1.3 Fix a standard geometric basis a_i,b_i on the actual compact oriented genus-g surface with one boundary circle. Its existence follows by cutting a finite disk-and-handle model of the surface, not from an arbitrary homology basis. Put omega(a_i,b_j)=delta_ij. An annular Dehn twist about an embedded curve v acts by the transvection T_v(z)=z+omega(z,v)v, choosing the twist sign accordingly. This formula is proved by cutting each transverse arc at the annulus: the twisted arc acquires one oriented copy of its core. Curves representing a_i+a_j, b_i+b_j and a_i+b_j for i≠j are embedded band sums on distinct handles. The joining arc lies in the complement of the other standard handles; the band gives the indicated homology class. Thus these transvections and their inverses are actual boundary-fixed surface homeomorphisms (smooth diffeomorphisms in the smooth model). [F5, construct]
86: 1.5 Taking u=a_i,v=b_j, i≠j, realizes the elementary block-GL operation a_j to a_j+a_i and b_i to b_i−b_j. Its powers realize arbitrary integral elementary additions. Handle permutations and simultaneous sign reversal of a_i,b_i are also realized; the latter is the square of the two-twist rotation on that handle. Euclidean elimination consequently realizes every block action (x,y) to (A x,A^−T y) for A in GL_g(Z). Likewise the a_i and a_i+a_j twists realize every symmetric upper shear, because the diagonal rank-one matrices and the identity (e_i+e_j)(e_i+e_j)^T−E_ii−E_jj=E_ij+E_ji generate all symmetric integral matrices; the b_i analogues realize every symmetric lower shear. [F5, construct]
```

#### knot-theory / confirmed 031: `thm-framed-knot-surgery-trace-boundary`

- Location: **Diagram**; source lines 79, 88.
- Pages: `dehn-surgery-on-knots-and-homology`.
- Visible defect: The rendered boundary-decomposition schematic is too compressed for its labels: the two dashed transition captions and the S^3/partial-X captions overlap the arrows and each other, making the stages difficult to distinguish.
- Future repair: Increase vertical separation between rows and place transition captions in clear whitespace; retain E_K, N(K), D^2×S^1, the attaching torus, and the meridian slope n mu + lambda.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-framed-knot-surgery-trace-boundary--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-framed-knot-surgery-trace-boundary.md).

Exact frozen source lines:

```text
79:   \node[draw,rounded corners,minimum width=2.3cm,minimum height=0.85cm] (e0) at (0,0) {$E_K$};
88:   \draw[->,dashed] (2.9,-1.72) -- (1.0,-0.48) node[midway,below] {insert free face};
```

#### knot-theory / confirmed 032: `def-cdr-satellite-concordance-categories`

- Location: **Definition**; source lines 45.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The definition uses unmarked ASCII notation throughout the displayed prose: underscores, carets, set brackets, and homology subscripts remain baseline text instead of mathematical notation (for example C_sm, S^3, R_n, and H_i).
- Future repair: Mark the mathematical expressions in the definition with the repository’s math delimiters so subscripts, superscripts, and symbols render consistently.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/def-cdr-satellite-concordance-categories--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/def-cdr-satellite-concordance-categories.md).

Exact frozen source lines:

```text
45: Let knots be smooth oriented knots in the standard oriented S³ and let I=[0,1]. Let C_sm be their smooth concordance classes, where equivalence is witnessed by a smooth proper annulus in S³×I. Let C_top be their locally flat topological concordance classes in that product. Let C_ex be their exotic-smooth concordance classes: equivalence is witnessed by a smooth proper annulus in a compact smooth oriented 4-manifold W together with an orientation-preserving homeomorphism of pairs (W,∂W)≅(S³×I,S³×{0,1}) matching the endpoint knots. The annulus is oriented so that its boundary is −K₀ at the lower end and K₁ at the upper end, and it has product collars at both ends agreeing with the ambient boundary collars. For a nonzero integer n set R_n=Z[1/|n|]. Let C^{1/n} be the classes under equivalence witnessed by a smooth proper annulus in a compact smooth oriented 4-manifold W with boundary the two standard endpoint 3-spheres such that each boundary inclusion induces an isomorphism H_i(S³;R_n)→H_i(W;R_n) for every i. The annulus is oriented so that its boundary is −K₀ at the lower end and K₁ at the upper end, with product collars at both ends agreeing with the ambient boundary collars. A knot is pseudo-slice if it bounds a smooth proper disk in a compact smooth oriented 4-manifold homeomorphic to B⁴, with its oriented boundary identified with the standard oriented S³. A knot is Z[1/|n|]-slice if it bounds a smooth proper disk in a compact smooth oriented 4-manifold B with its oriented boundary identified with the standard oriented S³ and with H_i(B;R_n)≅H_i(B⁴;R_n) for every i; such a B is an R_n-homology 4-ball. These are sets of equivalence classes; this definition alone asserts no group structure.
```

#### knot-theory / confirmed 033: `ex-borromean-link-milnor-triple-invariant`

- Location: **Example**; source lines 69, 70, 73, 74, 75, 76, 105, 106.
- Pages: `milnor-invariants-and-link-peripheral-nilpotent-quotients-examples`.
- Visible defect: The local HTML and screenshot expose the full TikZ source as ordinary body text rather than rendering the braid diagram. The following explanatory prose still appears after the source dump.
- Future repair: Use a TikZ block form supported by the renderer, or author an equivalent supported diagram, then confirm the six crossings and pure-braid endpoint labels render.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-borromean-link-milnor-triple-invariant--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-borromean-link-milnor-triple-invariant.md).

Exact frozen source lines:

```text
69: ~~~tikz
70: \begin{tikzpicture}[scale=0.85,>=stealth]
73:   \draw[gray] (0,0) -- (0,1);
74:   \draw[thick,dashed,->] (1,0) .. controls (1.25,0.25) and (1.75,0.75) .. (2,1);
75:   \draw[thick,->] (2,0) .. controls (1.75,0.25) and (1.25,0.75) .. (1,1);
76:   \node at (0.55,0.5) {$\sigma_2$};
105: \end{tikzpicture}
106: ~~~
```

#### knot-theory / confirmed 034: `ex-knot-kt-40-worked-cases`

- Location: **Example**; source lines 51, 52, 53, 58, 59.
- Pages: `knot-cobordism-maps-and-functoriality-examples`.
- Visible defect: The local preview displays a red “diagram failed to render” panel followed by the raw TikZ-cd source, so the movie diagram is absent.
- Future repair: Repair the diagram block so it uses a renderer-supported diagram environment and renders the birth map followed by the merging saddle map.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-40-worked-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-40-worked-cases.md).

Exact frozen source lines:

```text
51: ```tikz
52: \begin{tikzcd}
53: \mathcal A
58: \end{tikzcd}
59: ```
```

#### knot-theory / confirmed 035: `lem-figure-eight-ideal-gluing-and-cusp-completeness`

- Location: **Diagram**; source lines 106, 107, 108, 123, 124, 125, 126, 127.
- Pages: `hyperbolic-knot-complements-and-volume`.
- Visible defect: The second, cusp-strip TikZ diagram fails in the local preview and is replaced by a red error panel containing raw source. The preceding two-tetrahedron drawing does render.
- Future repair: Repair or simplify the cusp-strip TikZ so the eight triangle labels, successive face maps, and alpha/beta paths render; retain the existing explanatory schematic disclaimer.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-figure-eight-ideal-gluing-and-cusp-completeness--01.png), [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-figure-eight-ideal-gluing-and-cusp-completeness--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-figure-eight-ideal-gluing-and-cusp-completeness.md).

Exact frozen source lines:

```text
106: ```tikz
107: \begin{tikzpicture}[>=stealth]
108:   \node[draw,rounded corners,align=center,minimum width=1.75cm,minimum height=0.8cm] (a) at (0,2) {$a:\Delta_0,\ 0$\\ $0|2:\ z_3$};
123:   \draw[red,thick,dashed,->] (e.north east) to[out=90,in=90,looseness=1.15] node[above,black] {$\phi_3$ (strip closure)} (a.north west);
124:   \node[align=left] at (3.3,-1.0) {$\beta$: $a\ (0|3,\ \text{right},\ z_2^{-1})\longrightarrow h\ (0'|1',\ \text{left},\ w_1)$.};
125:   \node[align=center] at (3.3,-1.55) {Red arrows show the successive $\alpha$ side identifications; the diagram is schematic.};
126: \end{tikzpicture}
127: ```
```

#### knot-theory / confirmed 036: `lem-good-linear-size-exterior-triangulation-from-diagram`

- Location: **Statement**; source lines 44, 46, 47, 48, 53, 54.
- Pages: `normal-surface-unknot-recognition`.
- Visible defect: The crossing schematic’s TikZ source appears literally in the rendered body; the preview does not render a crossing picture.
- Future repair: Use the renderer-supported TikZ block syntax or a supported diagram equivalent for the over/under crossing schematic.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-good-linear-size-exterior-triangulation-from-diagram--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-good-linear-size-exterior-triangulation-from-diagram.md).

Exact frozen source lines:

```text
44: A local crossing is lifted by separating the over- and under-strands in the interval direction; the schematic below records only the projected crossing, with the continuous strand passing over the gapped strand.
46: ~~~tikz
47: \begin{tikzpicture}[scale=1.15]
48: \draw[very thick] (-1,-1)--(1,1);
53: \end{tikzpicture}
54: ~~~
```

#### knot-theory / confirmed 037: `lem-alexander-one-knot-produces-a-good-group-disk-obstruction`

- Location: **Proof**; source lines 102, 104, 106, 108, 120.
- Pages: `freedman-theorem-and-topological-sliceness`.
- Visible defect: Several proof paragraphs contain unmarked ASCII mathematical notation, so the local render shows literal forms such as V=[[0,I+U],[U^T,0]], “one0handle,” T_ik, lambda(...), and delta_ij rather than formatted mathematics.
- Future repair: Typeset the algebraic expressions and indexed symbols in the affected proof paragraphs; retain the prose around each construction.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-alexander-one-knot-produces-a-good-group-disk-obstruction--02.png), [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-alexander-one-knot-produces-a-good-group-disk-obstruction--03.png), [tile 04](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-alexander-one-knot-produces-a-good-group-disk-obstruction--04.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-alexander-one-knot-produces-a-good-group-disk-obstruction.md).

Exact frozen source lines:

```text
102: 1.6 Apply the preceding shear to [F1]. We obtain a smooth geometric basis s_i,ell_i with V=[[0,I+U],[U^T,0]], not only the existential lattice statement. The following construction retains the ambient ball and all attaching data. It is stated before invoking any disk-embedding conclusion. [F1, F2, F3, F4, F5, construct]
104: 1.7 Use the literal ball of radius1.5 and its unit sphere. Place the original surface F in that unit sphere and add the exterior collar K times [1,1.5]. Round its junction with F, retaining the outer K product collar; call this proper smooth surface Sigma. Near F its normal coordinates are the radial coordinate x and the positive normal coordinate y of F in S3. Choose its open normal thickening there to be .9<x<1.1, |y|<epsilon, with the compatible product continuation near K. This is an ACTUAL smooth thickening, supplied by the radial product and the normal line of the oriented surface in S3. Put N=the complement of that open thickening, with corners rounded away from the marked circles. It is compact, connected, smooth, and the original ball/surface have not been replaced by an abstract four-manifold. [F1, F2, F3, F4, F5, construct]
106: 1.8 A disk-and-band handle decomposition of F has one disk and2g bands. Make its height increase from that disk across the bands to the boundary, and realize that height as a small radial displacement in the displayed collar. The complement has one0handle, one1handle from the surface minimum and2g2handles from its bands, with no higher handles. This local complement recipe follows by taking the product normal2disk to a surface0handle or1handle: its complement adds respectively the normal meridian1handle or the2handle whose core crosses the band. The product collars identify the attaching pieces; no arbitrary embedded4ball is identified with the standard ball. The resulting complement deformation retracts onto a2complex with one vertex, one1cell and2g2cells. Name the positive normal meridian of its one1handle a. The local2handle at an oriented surface band identifies its endpoint meridians by transport through the band: its attaching relation is m_1 w m_2^−1 w^−1. To see the signs, take the boundary of a normal2disk and transport it along the band core; the two boundary ends of the resulting normal-annulus strip have opposite induced boundary orientations. Both endpoint meridians come from the same original disk and represent a in the one-generator1skeleton. Any winding of a knotted band only changes the transport word w, which is a power of a there. Thus the attaching word is a a^k a^−1 a^−k=1, for every band. Consequently pi1(N)=Z, and the same2complex is homotopy equivalent to a circle wedge2g spheres. This is the actual group/attaching-word computation, not an inference from H1 alone. [F1, F2, F3, F4, F5, construct]
108: 1.9 Choose generic immersed disks Delta(s_i) in the inner unit ball with boundaries s_i-down. Run their boundary collars in the negative-y side of the marked normal strip, bending into the interior of N immediately off each boundary circle. Choose disks Delta(ell_i) bounding the long curves and trim their radial collars to x=.8; they then have boundaries ell_i at x=.8 and lie in the ball x<=.8. The short disks consist of disks in that inner ball and their mutually disjoint negative-y collars. Their union lies in a simply connected part of N: the inner ball together with those product collars retracts onto the inner ball. Thus all their equivariant intersection labels are1. Their ordinary intersections are the boundary linking numbers, which are V(s_i,s_j)=0. To justify this relative4-ball identity, compare one filling disk with a Seifert surface for the same boundary curve pushed into a thin boundary collar. Their difference is a two-cycle, null in the ball. Its intersection with the other proper disk is therefore zero, by the boundary-of-intersection identity for a bounding three-chain. The collar surface counts exactly the linking number on the boundary sphere, with the outward-normal-first orientation. This proves the identity for immersed fillings, rather than assuming disjoint embedded disk fillings. The boundary framings are the prescribed surface pushoffs. A generic filling disk with that zero longitude can be made framed: the parallel-intersection identity gives 0=2mu+e, so its relative normal Euler number e is even; an interior cusp changes e by2. Use finitely many cusps to make e0. The same identity then gives mu0. These changes are local in the inner ball and preserve the boundary circle/frame. Mutual intersection numbers are invariant under those rel-boundary homotopies. Accordingly lambda(Delta(s_i),Delta(s_j))=0 and mu(Delta(s_i))=0 in the precise integral group-ring convention, not merely after augmentation. [F1, F2, F3, F4, F5, construct]
120: 1.15 The displayed disk–sphere matrix is lower unitriangular. Set f_i=g_i−sum_(k<i) T_ik f_k, inductively, using whiskered parallel sphere copies and framed connected sums. For j<i the sum cancels T_ij; for j=i the earlier rows vanish and the diagonal stays1; for j>i both terms vanish. A whisker around t^r left-multiplies the first-variable coefficient by t^r in [F2], so each Laurent coefficient is realized with its stated sign. Its result has lambda(f_i,Delta(s_j))=delta_ij, and the zero lambda/mu conditions among the spheres persist by direct sesquilinearity and the self-sum formula (all cross terms vanish). Taking conjugate transpose gives lambda(Delta(s_i),f_j)=delta_ij in the original disk-data order. The output is therefore the ACTUAL good-group disk problem in this particular N, with exactly the short-circle boundaries and product normal framings needed to compress Sigma. Goodness of Z is [F3]; disjoint embedded replacement disks still require the separate tower/standardness proof. This construction makes no such replacement by definition. [F1, F2, F3, F4, F5, construct]
```

#### knot-theory / confirmed 038: `lem-l2-rho-invariant-bordism-independence`

- Location: **Statement**; source lines 44.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The theorem statement uses literal underscore/caret ASCII for its signature notation; the local HTML and screenshot retain forms such as sign_Γ^(2) instead of rendering them as mathematical operators and superscripts.
- Future repair: Wrap the signature expression in math delimiters and use explicit superscript/subscript markup.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-l2-rho-invariant-bordism-independence--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-l2-rho-invariant-bordism-independence.md).

Exact frozen source lines:

```text
44: Assume full AC. Let M be a closed oriented 3-manifold, Γ a discrete group, and φ:π₁(M)→Γ. If (W₀,ψ₀) and (W₁,ψ₁) are compact oriented 4-manifolds with boundary M over which φ extends, then sign_Γ^(2)(W₀,ψ₀)−sign(W₀)=sign_Γ^(2)(W₁,ψ₁)−sign(W₁). Hence the signature defect depends only on (M,φ).
```

#### knot-theory / confirmed 039: `lem-ni-holomorphic-disk-and-jsj-analytic-inputs`

- Location: **Statement**; source lines 50.
- Pages: `knot-floer-genus-and-fiberedness-detection`.
- Visible defect: The plus/minus subscripts in R_+ and R_- are literal baseline characters in the statement, while the surrounding formula notation is typeset.
- Future repair: Typeset the two sutured-boundary labels as mathematical subscripts.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-ni-holomorphic-disk-and-jsj-analytic-inputs--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-ni-holomorphic-disk-and-jsj-analytic-inputs.md).

Exact frozen source lines:

```text
50: Assume full AC. Let $K$ be a null-homologous knot in a closed connected oriented $3$-manifold $Y$, let $F$ be a genus-$g$ Seifert surface, and let $(M,\gamma)$ be the balanced sutured manifold obtained by cutting the compact exterior of $K$ along $F$. For a surface-adapted admissible sutured Heegaard diagram, the generator correspondence between the top Alexander summand of the knot Floer complex and the sutured Floer disk-count module identifies their disk-count differentials. Under the hypotheses of a horizontal decomposition, the induced chain map realizes Ni's horizontal decomposition formula. For an essential separating product annulus with connected $R_+$ and $R_-$ whose decomposition has two balanced pieces, the induced chain map realizes Ni's product-annulus tensor formula. These assertions use the specified basepoint domains, periodic-domain admissibility, and exact characteristic-product-region hypotheses; they make no claim that generic Heegaard disk existence alone supplies the decomposition maps.
```

#### knot-theory / confirmed 040: `lem-string-link-exterior-homology-and-meridian-maps`

- Location: **Remarks**; source lines 108, 122.
- Pages: `multivariable-alexander-modules-and-chain-models`.
- Visible defect: Confirmed rendering or diagram defect reported by the visual reviewer.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-string-link-exterior-homology-and-meridian-maps--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-string-link-exterior-homology-and-meridian-maps.md).

Exact frozen source lines:

```text
108: ~~~tikz
122: \end{tikzpicture}
```

#### knot-theory / confirmed 041: `ex-unknot-zero-trace-and-dualizable-cancellation`

- Location: **Diagram**; source lines 89, 91, 92, 93, 94, 95, 96, 97, 98, 99.
- Pages: `zero-traces-and-conway-nonsliceness-examples`.
- Visible defect: The Diagram section’s TikZ fence renders the literal source code in the local HTML instead of a diagram. The handlebody cancellation sketch is therefore absent. Confirmed rendering defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 02](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-unknot-zero-trace-and-dualizable-cancellation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-unknot-zero-trace-and-dualizable-cancellation.md).

Exact frozen source lines:

```text
89: ## Diagram
91: ~~~tikz
92: \begin{tikzpicture}[node distance=2.5cm,>=stealth]
93:   \node (x) {$B^4\cup_R h^1\cup_B h^2_0\cup_G h^2_0$};
94:   \node (g) [below left of=x] {$B^4\cup_U h^2_0$};
95:   \node (b) [below right of=x] {$B^4\cup_U h^2_0$};
96:   \draw[->] (x) -- node[left,align=center] {slide $G$ over $B$;\\cancel $(R,B)$} (g);
97:   \draw[->] (x) -- node[right,align=center] {slide $B$ over $G$;\\cancel $(R,G)$} (b);
98: \end{tikzpicture}
99: ~~~
```

#### knot-theory / confirmed 042: `lem-rational-ball-b2-bounds-lens-l4`

- Location: **Remark**; source lines 103, 105, 106, 107, 108, 109, 110.
- Pages: `branched-cover-correction-terms-and-sliceness`.
- Visible defect: The Remark’s TikZ fence renders literal commands and labels instead of the one-component +4 surgery diagram. Confirmed rendering defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-rational-ball-b2-bounds-lens-l4--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-rational-ball-b2-bounds-lens-l4.md).

Exact frozen source lines:

```text
103: The picture is the one-component surgery diagram for the boundary circle bundle. The planar circle has no crossings and represents the unknot; its integer framing is specified by the label $+4$, meaning the chosen parallel has linking number $+4$ with the core. The proof identifies this handle attachment from the normal disk bundle and does not depend on the drawing.
105: ~~~tikz
106: \begin{tikzpicture}
107:   \draw[thick] (0,0) circle (0.7);
108:   \node at (0,1.05) {$+4$};
109:   \node at (0,-1.05) {$U$};
110: \end{tikzpicture}
```

#### knot-theory / confirmed 043: `lem-seifert-matrix-skew-part-is-surface-intersection`

- Location: **Remarks**; source lines 106, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125.
- Pages: `seifert-matrices-and-the-alexander-module`.
- Visible defect: The schematic is shown in a red “diagram failed to render” block containing the complete TikZ source; neither local panel is drawn. This is a confirmed render failure.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-seifert-matrix-skew-part-is-surface-intersection--04.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-seifert-matrix-skew-part-is-surface-intersection.md).

Exact frozen source lines:

```text
106: The orientation sign can be checked in a local oriented chart: when the positive normal is the first vector, the strip orientation $(n,u)$ and the surface intersection orientation $(u,v)$ give the same sign. The proof uses that orientation check in step 2.1; the schematic below is not a proof premise.
108: ```tikz
109: \begin{tikzpicture}[scale=0.82,>=stealth]
110:   \draw[fill=gray!12] (-2,-0.65) -- (1.2,-1.15) -- (2,0.65) -- (-1.2,1.15) -- cycle;
111:   \node at (1.45,0.85) {$F$};
112:   \draw[thick,->] (-1.25,0) -- (1.15,0) node[right] {$u$};
113:   \draw[thick,->] (0,-0.6) -- (0.45,0.65) node[above] {$v$};
114:   \fill (0,0) circle (1.6pt);
115:   \node[red] at (-1.35,0.72) {$\odot\,n$};
116:   \node at (0,-1.55) {$F\text{ tangent plane}$};
117:   \begin{scope}[xshift=5.2cm]
118:     \draw[thick] (0,0) -- (2.8,0) node[right] {$F$};
119:     \draw[->,red,thick] (1.4,-0.9) -- (1.4,0.95) node[above] {$n$};
120:     \draw[blue,thick] (0.55,0.58) -- (2.25,0.58) node[right] {$a_i^+$};
121:     \draw[blue,thick] (0.55,-0.58) -- (2.25,-0.58) node[right] {$a_i^-$};
122:     \draw[thick] (0.55,0) -- (2.25,0) node[right] {$a_i$};
123:     \node at (1.4,-1.3) {$\text{normal coordinate}$};
124:   \end{scope}
125: \end{tikzpicture}
```

#### knot-theory / confirmed 044: `lem-cdr-zero-surgery-pattern-homology-cobordism`

- Location: **Statement**; source lines 51, 67.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: Statement and Given text contain unmarked formula notation such as “n≠0”, “P(U)”, “H_i(B;R_n)”, “S³”, “[mu_K]=n[mu_{P(K)}]”, and “Z[1/|n|]”; the HTML displays the ASCII-style indices/variable names literally rather than as math. Confirmed typography/math-markup defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-cdr-zero-surgery-pattern-homology-cobordism--01.png), [tile 03](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-cdr-zero-surgery-pattern-homology-cobordism--03.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-cdr-zero-surgery-pattern-homology-cobordism.md).

Exact frozen source lines:

```text
51: Let P be an oriented pattern of winding n≠0 and K an oriented knot. If P(U) bounds a smooth proper disk in a compact smooth oriented 4-manifold B whose oriented boundary is identified with the standard oriented S³ and H_i(B;R_n)≅H_i(B⁴;R_n) for every i, then for every K the zero surgeries M(P(K)) and M(K) are smoothly R_n-homology cobordant. For the positive meridians determined by the supplied orientations, their images in the cobordism satisfy [mu_K]=n[mu_{P(K)}]; in particular they differ by a unit of R_n. This is a winding-unit meridian comparison, not a claim of literal equality for arbitrary winding. If P has strong winding number ±1 and P(U) is pseudo-slice (respectively locally flat topologically slice), then M(P(K)) and M(K) are smoothly (respectively topologically) homology cobordant through a 4-manifold whose fundamental group is normally generated by the image of the fundamental group of either boundary component. The category and closure hypotheses are separate and cannot be inferred from winding alone.
67: **Given:** A pattern of winding n≠0, a knot K, and the stated Z[1/|n|]-slice disk for P(U) in its compact smooth oriented homology ball, with its boundary orientation matched to the standard S³. The pseudo-slice convention likewise includes this orientation. No orientability is inferred solely from localized homology.
```

#### knot-theory / confirmed 045: `lem-satellite-operator-preserves-concordance`

- Location: **Statement**; source lines 47.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The statement displays plain-text notation “P⊂S¹×D²”, “K₀/K₁”, “C_sm”, “C_top”, “C_ex”, and “C^{1/n}” without math markup; category subscripts and exponent syntax remain literal in the local HTML. Confirmed rendering defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/lem-satellite-operator-preserves-concordance--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/lem-satellite-operator-preserves-concordance.md).

Exact frozen source lines:

```text
47: Let P⊂S¹×D² be a smooth oriented pattern. If oriented knots K₀ and K₁ are concordant in one of the four categories C_sm, C_top, C_ex or C^{1/n}, then P(K₀) and P(K₁) are concordant in the same category. Thus P induces a well-defined set map on each of these concordance sets.
```

#### knot-theory / confirmed 046: `thm-cha-kim-winding-zero-iterates-infinite-rank`

- Location: **Statement**; source lines 57.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The statement is a plain-text math run: “P⊂S¹×D²”, “C_top/C_sm”, “Pⁿ”, “⟨Pⁿ(C)⟩/⟨Pⁿ⁺¹(C)⟩”, and “dim_Q(A⊗_Z Q)” retain literal notation and unformatted subscripts/exponents. Confirmed rendering defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-cha-kim-winding-zero-iterates-infinite-rank--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-cha-kim-winding-zero-iterates-infinite-rank.md).

Exact frozen source lines:

```text
57: Assume full AC. Let P⊂S¹×D² be a winding-zero pattern. Assume the axis has nonzero classical Blanchfield self-pairing in the Alexander module of P(U), with the convention that the axis defines the class paired with itself. For either the locally flat topological concordance group C_top or the smooth concordance group C_sm, let Pⁿ be the n-fold composition of the induced satellite set map, with P⁰ the identity. For every n≥0, the quotient ⟨Pⁿ(C)⟩/⟨Pⁿ⁺¹(C)⟩ has infinite rank, where ⟨S⟩ denotes the subgroup generated by S and rank means dim_Q(A⊗_Z Q) for an abelian group A. For n≥1, Pⁿ is not a group homomorphism under the same hypotheses. No pairwise-coprime Alexander-polynomial assumption is part of these Theorems A and B.
```

#### knot-theory / confirmed 047: `ex-knot-kt-43-worked-cases`

- Location: **Item body**; source lines 4.
- Pages: `knot-floer-genus-and-fiberedness-detection-examples`.
- Visible defect: The title renders “5_2” literally (“Trefoil and 5_2 knot…”); the knot-table subscript is not typeset in the heading. Confirmed heading typography defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/ex-knot-kt-43-worked-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/ex-knot-kt-43-worked-cases.md).

Exact frozen source lines:

```text
4: title: "Trefoil and 5_2 knot Floer genus and fibering cases"
```

#### knot-theory / confirmed 048: `thm-amenable-von-neumann-l2-flatness`

- Location: **Statement**; source lines 47.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The statement contains unmarked plain-text algebra notation “CG”, “q>0”, “N G”, and “Tor_q^{CG}(M,N G)”; the rendered HTML leaves the group-ring and Tor indices as literal ASCII. Confirmed math-markup defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-amenable-von-neumann-l2-flatness--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-amenable-von-neumann-l2-flatness.md).

Exact frozen source lines:

```text
47: Assume the Axiom of Choice. Let G be a countable discrete amenable group. For every right CG-module M and every integer q>0, the N G-von Neumann dimension of Tor_q^{CG}(M,N G) is zero. This dimension-flatness statement does not say that the Tor module itself is zero.
```

#### knot-theory / confirmed 049: `thm-l2-signature-theorem-for-closed-four-manifolds`

- Location: **Statement**; source lines 38.
- Pages: `satellite-operators-and-knot-concordance-filtrations`.
- Visible defect: The equality is typed as plain text “sign_Γ^(2)(X,φ)=sign(X)” and displays with literal underscore/caret syntax. Confirmed math-markup defect.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/knot-theory/screenshots/thm-l2-signature-theorem-for-closed-four-manifolds--01.png); [frozen source](math-library-rendering-audit-2026-10-23/knot-theory/snapshots/thm-l2-signature-theorem-for-closed-four-manifolds.md).

Exact frozen source lines:

```text
38: sign_Γ^(2)(X,φ)=sign(X).
```

