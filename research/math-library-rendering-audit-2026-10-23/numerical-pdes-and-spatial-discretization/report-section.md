## Numerical Pdes and Spatial Discretization

Completed visual review of **1137 items across 110 pages**, with **1759 image tiles**. Findings: 20 confirmed, 1 uncertain, 4 source-parse-blocker. Evidence: [manifest](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/category-review-receipt.json).

Coverage uses recovered body previews for 4 items. Their exact source bytes and parse failures are recorded in [frontmatter parse blockers](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/frontmatter-parse-blockers.json); this is not successful canonical source parsing or native loader coverage.

### Confirmed rendering defects

#### numerical-pdes-and-spatial-discretization / confirmed 001: `thm-second-order-meshfree-convolution-bias`

- Location: **Statement**; source lines 34, 40.
- Pages: `meshfree-kernel-approximation-and-conservative-sph`.
- Visible defect: The Statement uses mathematical notation as plain prose in lines 34 and 40. Line 34 starts “Let f∈C²(R^d)” and continues with S_εf(x)=∫… and x∈R^d without inline-math delimiters; line 40 similarly has “C² function f” and ε>0. In the original-resolution preview those expressions render on the prose baseline as literal text, unlike the properly delimited estimate at line 36. Add math delimiters to the notation in those lines. This is a source formatting defect; no mathematical claim was changed.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/thm-second-order-meshfree-convolution-bias--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-second-order-meshfree-convolution-bias.md).

Exact frozen source lines:

```text
34: Let f∈C²(R^d) have bounded Hessian and define S_εf(x)=∫f(x−z)W_ε(z)dz. Then for every ε>0 and x∈R^d,
40: **Given:** The kernel family, a C² function f with bounded Hessian, and ε>0.
```

#### numerical-pdes-and-spatial-discretization / confirmed 002: `ex-hp-reentrant-corner-h-versus-hp`

- Location: **Example**; source lines 70, 74, 76, 78, 79, 80, 81, 82.
- Pages: `hp-finite-elements-and-spectral-element-methods-examples`.
- Visible defect: The TikZ L-shaped domain has a near-white filled region in the dark local preview; the Γ_D and corner labels placed on/near that fill become faint and hard to read. The standalone original tile and an original-resolution local crop confirm the low contrast. The sector geometry and boundary-edge placement match the stated L-domain and 0<θ<3π/2 convention; no overlap with adjacent prose was seen. Consider a darker muted fill or dark label color while keeping the blue Γ_D boundary visually distinct.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-hp-reentrant-corner-h-versus-hp--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-hp-reentrant-corner-h-versus-hp.md).

Exact frozen source lines:

```text
70: The diagram records the reentrant sector and the two boundary edges in $\Gamma_D$. The proof uses the coordinate description above, not the picture.
74:   \fill[gray!12] (-1,-1) -- (0,-1) -- (0,0) -- (1,0) -- (1,1) -- (-1,1) -- cycle;
76:   \draw[blue,very thick] (0,-1) -- (0,0) -- (1,0);
78:   \node[blue] at (0.47,0.13) {$\Gamma_D$};
79:   \node[above left] at (0,0) {$c=(0,0)$};
80:   \node at (-0.55,0.52) {$u(r,\theta)$};
81:   \node[right] at (1,0) {$\theta=0$};
82:   \node[below] at (0,-1) {$\theta=3\pi/2$};
```

#### numerical-pdes-and-spatial-discretization / confirmed 003: `ex-na-two-triangle-hybrid-static-condensation`

- Location: **Mesh diagram**; source lines 47, 48, 49, 67, 72, 74, 80, 81, 82, 83, 84, 88.
- Pages: `mixed-hdiv-fluxes-and-darcy-discretization-examples`.
- Visible defect: Both arrows are drawn wholly inside their cells and do not show the stated interface flux directions. The K_1 arrow points down-left and the K_2 arrow up-right; evaluating the displayed fields at their arrow tails gives vectors pointing up-left in both cells. If the marks are flux arrows, neither direction agrees with the stated outward flux convention on the shared diagonal. The small crop also shows the lambda label placed over the diagonal, reducing label clarity.
- Future repair: Either remove the arrows or redraw them explicitly as outward facet-flux arrows on the common diagonal, with opposite cell-outward orientations and +1/2 and -1/2 sign labels. Move lambda clear of the diagonal. Keep the caption that the diagram is schematic and the proof supplies exact integrals.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-na-two-triangle-hybrid-static-condensation--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-na-two-triangle-hybrid-static-condensation--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-na-two-triangle-hybrid-static-condensation.md).

Exact frozen source lines:

```text
47: Split the unit square by its diagonal into $K_1=\{0<y<x<1\}$ and $K_2=\{0<x<y<1\}$. For unit permeability and $f=1$ on $K_1$, $f=-1$ on $K_2$, the hybrid solution has
48: $$u_1=\tfrac12\theta_1,\quad u_2=-\tfrac12\theta_2,\quad p_1=\tfrac1{12},\quad p_2=-\tfrac1{12},\quad\lambda=0,$$
49: where $\theta_1(x,y)=(x-1,y)$ and $\theta_2(x,y)=(x,y-1)$. The local elimination equations reduce to $t_K/6-p_K+\lambda=0$, $t_1=1/2$, $t_2=-1/2$, and $t_1+t_2=0$; changing $\lambda$ shifts both pressures by the same constant and is precisely the gauge.
67: 1.1 Each cell has area $1/2$. The field $\theta_1=(x-1,y)$ has zero normal component on $x=1$ and $y=0$, and unit integrated outward flux on the diagonal from $K_1$; $\theta_2=(x,y-1)$ has zero normal component on $x=0$ and $y=1$, and unit integrated outward flux on the diagonal from $K_2$. Their divergences are both $2$, so $\int_{K_i}\operatorname{div}\theta_i=1$ by [F3]. The two zero-boundary conditions and the single free facet degree of freedom make each $\theta_i$ a basis of its local space by [F4]. Direct integration gives $\int_{K_1}|\theta_1|^2=\int_0^1\int_0^x((x-1)^2+y^2)\,dy\,dx=\tfrac16,$ and reflection symmetry gives $\int_{K_2}|\theta_2|^2=1/6$. [given, F3, F4, algebra]
72: ## Mesh diagram
74: ```tikz
80:   \node at (.72,.25) {$K_1$, $f=1$};
81:   \node at (.25,.72) {$K_2$, $f=-1$};
82:   \node[above right] at (.52,.52) {$\lambda$};
83:   \draw[->,blue] (.72,.38)--(.56,.22) node[below right] {$u_1$};
84:   \draw[->,red] (.28,.62)--(.44,.78) node[above left] {$u_2$};
88: The shared diagonal is the only interior facet. Flux arrows are schematic; the proof computes their exact integrated outward values as $1/2$ and $-1/2$.
```

#### numerical-pdes-and-spatial-discretization / confirmed 004: `ex-crouzeix-raviart-broken-gradient-norm`

- Location: **Example**; source lines 51, 64.
- Pages: `crouzeix-raviart-finite-elements-examples`.
- Visible defect: Display block prints literal TikZ source instead of the unit-square two-triangle split; receipt reports tikz_count 0 and no KaTeX or diagram failures. Source/text geometry (diagonal (0,0) to (1,1), K1 lower/right and K2 upper/left) is consistent. Standalone tile shows no clipping or overlap.
- Future repair: Render supported TikZ or replace it with a supported diagram representation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-crouzeix-raviart-broken-gradient-norm--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-crouzeix-raviart-broken-gradient-norm.md).

Exact frozen source lines:

```text
51: \begin{tikzpicture}[scale=2,line width=0.7pt,every node/.style={font=\small}]
64: \end{tikzpicture}
```

#### numerical-pdes-and-spatial-discretization / confirmed 005: `ex-na-unit-square-mini-mesh-family`

- Location: **Example**; source lines 33, 45.
- Pages: `energy-stable-incompressible-navier-stokes-discretization-examples`.
- Visible defect: Display block prints literal center/TikZ source instead of the n=2 unit-square mesh. The stated lower-left to upper-right cell diagonals agree with the TikZ source. Receipt reports tikz_count 0 and no KaTeX or diagram failures. Standalone tile shows no clipping or overlap.
- Future repair: Render supported TikZ or replace it with a supported diagram representation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-na-unit-square-mini-mesh-family--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-na-unit-square-mini-mesh-family.md).

Exact frozen source lines:

```text
33: \begin{center}
45: \end{center}
```

#### numerical-pdes-and-spatial-discretization / confirmed 006: `ex-periodic-one-dimensional-pic-cic-charge-deposition`

- Location: **Statement**; source lines 38, 52.
- Pages: `particle-in-cell-and-particle-mesh-kinetic-methods-examples`.
- Visible defect: The local CIC stencil display block prints literal TikZ source rather than the diagram. Source annotations are consistent with X=h/3 and weights 2/3,1/3. Receipt reports tikz_count 0 and no KaTeX or diagram failures. Checked both original tiles and local overlap/crop; no clipping or overlap.
- Future repair: Render supported TikZ or replace it with a supported diagram representation.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-periodic-one-dimensional-pic-cic-charge-deposition--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-periodic-one-dimensional-pic-cic-charge-deposition--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-periodic-one-dimensional-pic-cic-charge-deposition.md).

Exact frozen source lines:

```text
38: \begin{tikzpicture}[x=2cm,y=1cm,>=stealth,every node/.style={font=\small}]
52: \end{tikzpicture}
```

#### numerical-pdes-and-spatial-discretization / confirmed 007: `ex-y-junction-metric-graph-kirchhoff-flux`

- Location: **Example diagram**; source lines 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64.
- Pages: `graph-diffusion-and-metric-network-pde-numerics-examples`.
- Visible defect: The title and complete example body render, but the diagram source appears as literal text. The receipt has tikz_count 0, so this is not a rendered TikZ graphic.
- Future repair: Express the drawing in the application-supported fenced ```tikz block, preserving the three oriented edges and their labels.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-y-junction-metric-graph-kirchhoff-flux--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-y-junction-metric-graph-kirchhoff-flux.md).

Exact frozen source lines:

```text
54: \begin{center}
55: \begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
56:   \node[circle,draw] (v) at (0,0) {$v:1$};
57:   \node[circle,draw] (a) at (-2,1.4) {$a:2$};
58:   \node[circle,draw] (b) at (2,1.4) {$b:0$};
59:   \node[circle,draw] (c) at (0,-2) {$c:1$};
60:   \draw[->] (v) -- node[above left] {$u_1(x)=1+x$} (a);
61:   \draw[->] (v) -- node[above right] {$u_2(x)=1-x$} (b);
62:   \draw[->] (v) -- node[right] {$u_3(x)=1$} (c);
63: \end{tikzpicture}
64: \end{center}
```

#### numerical-pdes-and-spatial-discretization / confirmed 008: `cex-density-continuity-fails-unequal-speed-routing`

- Location: **Counterexample model**; source lines 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64.
- Pages: `graph-diffusion-and-metric-network-pde-numerics-examples`.
- Visible defect: The intended one-in/two-out junction TikZ is visible in the page as literal LaTeX source between the counterexample explanation and Facts & Assumptions; no diagram is drawn. Receipt counters report tikz_count=0 with no KaTeX errors, which does not detect this raw environment.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/cex-density-continuity-fails-unequal-speed-routing--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/cex-density-continuity-fails-unequal-speed-routing.md).

Exact frozen source lines:

```text
54: \begin{center}
55: \begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
56:   \node[circle,draw] (v) at (0,0) {junction};
57:   \node[left] (in) at (-2.1,0) {in: $v=1,\ \rho=1,\ q=1$};
58:   \node[right] (out1) at (2.2,1.0) {out: $v_1=1,\ \rho=1,\ q_1=1$};
59:   \node[right] (out2) at (2.2,-1.0) {out: $v_2=2,\ \rho=1,\ q_2=2$};
60:   \draw[->] (in) -- (v);
61:   \draw[->] (v) -- (out1);
62:   \draw[->,dashed] (v) -- (out2);
63: \end{tikzpicture}
64: \end{center}
```

#### numerical-pdes-and-spatial-discretization / confirmed 009: `thm-meshfree-particle-kernel-quadrature-error`

- Location: **Statement**; source lines 30, 34, 42.
- Pages: `meshfree-kernel-approximation-and-conservative-sph`.
- Visible defect: The Statement hypotheses at line 30 and the Given sentence at line 42 contain bare expressions such as h≤ε≤1, f∈C¹(R^d), and ∇f without math delimiters. They print as plain text instead of rendered math; the surrounding display equations render normally. Line 34 also has several un-delimited mathematical symbols and expressions.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/thm-meshfree-particle-kernel-quadrature-error--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/thm-meshfree-particle-kernel-quadrature-error--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-meshfree-particle-kernel-quadrature-error.md).

Exact frozen source lines:

```text
30: Assume the cell rule of [[def-meshfree-cell-quadrature-and-fill-radius]], h≤ε≤1, x is interior, and f∈C¹(R^d) is bounded with bounded first derivative. Define
34: Let S_εf(x)=∫f(y)W_ε(x−y)dy and D_εf(x)=∫f(y)∇W_ε(x−y)dy. There is C=C(d,R,C_L,W), independent of ε,h,x, such that
42: **Given:** An interior point, a cell rule with the fill-radius and local-volume bounds of [[def-meshfree-cell-quadrature-and-fill-radius]], a fixed admissible kernel, ε,h with h≤ε≤1, and f∈C¹ with bounded f and ∇f.
```

#### numerical-pdes-and-spatial-discretization / confirmed 010: `def-pe05-hydrostatic-hll-scheme`

- Location: **Definition**; source lines 56, 71.
- Pages: `well-balanced-balance-laws-and-wet-dry-fronts`.
- Visible defect: The paragraph promises a wet/wet step-bed face with a common rest surface and reconstructed depths measured from b*=max(b_i,b_{i+1}); the only tile displays “diagram failed to render” followed by the raw TikZ code. The coordinates describe the intended geometry (b_i<b_i+1, level eta_0 above b*, vertical h_L* and h_R*), so the defect is rendering, not an observed mathematical contradiction. Nearby prose and equations remain visible; no tile-edge clipping or cross-tile seam explains the failure.
- Future repair: Correct the TikZ rendering syntax or replace the drawing with a valid native diagram preserving the bed step, common free-surface level, b* reference, and both reconstructed-depth arrows. The rendered diagram should make the left/right face orientation and shared face i+1/2 clear.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/research/math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/def-pe05-hydrostatic-hll-scheme--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/def-pe05-hydrostatic-hll-scheme.md).

Exact frozen source lines:

```text
56: The diagram is a wet/wet face with $b_i<b_{i+1}$ and a common rest level $\eta_0$. The dotted line marks the free surface, the solid step is the bed, and both reconstructed depths are measured from $b^*=\max(b_i,b_{i+1})$. The displayed equations specify every state and orientation used in proofs.
71: ```
```

#### numerical-pdes-and-spatial-discretization / confirmed 011: `cex-fixed-neighbor-irregular-derivative-not-consistent`

- Location: **Facts & Assumptions; Counterexample**; source lines 36, 38, 40, 42, 44, 46, 50, 54, 56.
- Pages: `meshfree-kernel-approximation-and-conservative-sph-examples`.
- Visible defect: The original-resolution captures show the long Given/F1–F5 prose and counterexample formulas in baseline text; commands including \partial_x and subscripts print literally instead of as math. The arithmetic/proof remains legible, but its notation is not typeset.
- Future repair: Wrap mathematical expressions consistently in math delimiters, including the displayed data and proof formulas; preserve ordinary explanatory prose.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/cex-fixed-neighbor-irregular-derivative-not-consistent--01.png), [tile 02](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/cex-fixed-neighbor-irregular-derivative-not-consistent--02.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/cex-fixed-neighbor-irregular-derivative-not-consistent.md).

Exact frozen source lines:

```text
36: **Given:** In one dimension use W(s)=(35/32)(1−s²)³ for |s|≤1 and zero otherwise, W_ε(s)=ε^(−1)W(s/ε), and the periodic node set P_ε={ε(4k+r): k∈Z, r∈{0,3/5,2,7/2}} with its nearest-node intervals, bounded by midpoints of consecutive nodes (the Voronoi cells), and cell volumes V_j. The rule is used on Ω=R with periodic node pattern.
38: [F1] [[def-scaled-symmetric-compact-kernel-family]]: W_ε is supported on [−ε,ε] and the particle kernel derivative is ∂_xW_ε(x−y).
40: [F2] [[def-meshfree-cell-quadrature-and-fill-radius]]: the particle sum is Q_hg=Σ_jV_jg(x_j), and an integration-compatible rule satisfies ∫_Ωg=Σ_{j:C_j∩supp(g)≠∅}∫_{C_j}g for each compactly supported continuous g.
42: [F3] [[thm-first-derivative-meshfree-convolution-bias]]: if f∈C³ has bounded third derivative, then the continuous kernel-gradient target D_εf differs from f′ by at most (m₃/6)ε²||f‴||∞.
44: [F4] [[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]: a continuous real function on a compact Jordan-measurable set is Riemann integrable there.
46: [F5] [[thm-additivity-over-subintervals]]: the Riemann integral over a closed interval is the sum of its integrals over any finite partition into adjacent closed subintervals.
50: 1.1 The adjacent gaps in one period are 3ε/5, 7ε/5, 3ε/2, and ε/2, so the fill radius is h=3ε/4. The four Voronoi-cell lengths per period are 11ε/20, ε, 29ε/20, and ε; hence every volume is at most 2h. If a cell meets B(x,r), its node lies in B(x,r+h). Nodes are separated by at least ε/2, so at most 1+4(r+h)/ε such nodes can lie in that interval. Each cell volume is at most 29ε/20, and r+h≥3ε/4; therefore the total active volume is at most (29/20)ε+(29/5)(r+h)≤(116/15)(r+h)≤8(r+h). The local-volume bound holds with C_L=8. In particular, the cells at −ε/2 and 3ε/5 are [−5ε/4,−ε/4] and [3ε/10,13ε/10], each of volume ε. [given, F2, algebra]
54: 3.1 On |s|<1, W′(s)=−(105/16)s(1−s²)². For f(y)=y at x=0, set g(y)=y\,\partial_xW_\varepsilon(x-y)|_{x=0}. By [F1], g vanishes outside [−ε,ε], and [F2] defines its particle sum as Q_hg=Σ_jV_jg(x_j). The node at 0 contributes zero; only y=−ε/2 and y=3ε/5 contribute, with values −W′(1/2)/2=945/1024 and −(3/5)W′(3/5)=3024/3125. Thus Q_hg=945/1024+3024/3125, independent of ε. [F1, F2, step 2.1, algebra]
56: 4.1 Here f′(0)=1 and f‴=0, so [F3] gives D_εf(0)=1 exactly. Since each summand in the value from step 3.1 exceeds 1/2, that value is greater than 1 for every ε. The derivative error therefore does not tend to zero although h/ε=3/4 remains fixed. [F3, step 3.1, algebra] ∎
```

#### numerical-pdes-and-spatial-discretization / confirmed 012: `ex-na-periodic-taylor-green-vortex`

- Location: **Example**; source lines 35, 36, 37, 38, 39, 40, 41, 42, 43, 44.
- Pages: `energy-stable-incompressible-navier-stokes-discretization-examples`.
- Visible defect: The captured ItemBody displays the entire \begin{center}/\begin{tikzpicture} block and node/draw commands as literal text; no diagram is produced.
- Future repair: Express this topology schematic using a TikZ form supported by the application ItemBody renderer, or use an authored supported diagram syntax while retaining the paired-edge identifications.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-na-periodic-taylor-green-vortex--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-na-periodic-taylor-green-vortex.md).

Exact frozen source lines:

```text
35: \begin{center}
36: \begin{tikzpicture}[scale=0.85]
37: \draw[thick] (0,0) rectangle (4,2.6);
38: \node at (2,1.3) {fundamental square};
39: \node[blue] at (2,2.82) {$y=0\sim2\pi$};
40: \node[blue] at (2,-0.22) {$y=0\sim2\pi$};
41: \node[red,rotate=90] at (-0.28,1.3) {$x=0\sim2\pi$};
42: \node[red,rotate=90] at (4.28,1.3) {$x=0\sim2\pi$};
43: \end{tikzpicture}
44: \end{center}
```

#### numerical-pdes-and-spatial-discretization / confirmed 013: `lem-na-piola-divergence-and-flux-identities`

- Location: **Commuting diagram**; source lines 61, 63, 65, 66, 67, 68.
- Pages: `mixed-hdiv-fluxes-and-darcy-discretization`.
- Visible defect: The captured preview replaces the diagram with a red “diagram failed to render” box and literal diagram source, so the square and its arrows/labels are absent.
- Future repair: Repair the `tikzcd` input so the renderer accepts the arrow-label and row syntax, then verify the reference/physical spaces, divergence arrows, and Jacobian-weighted scalar pull-forward in the rendered square.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/lem-na-piola-divergence-and-flux-identities--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/lem-na-piola-divergence-and-flux-identities.md).

Exact frozen source lines:

```text
61: ## Commuting diagram
63: For smooth fields, the proved identity is represented by
65: ```tikzcd
66: C^1(\overline{\widehat K};\mathbb R^d) \arrow[r,"\operatorname{div}"] \arrow[d,"\mathcal P_K"'] & C(\widehat K) \arrow[d,"J_K^{-1}(\cdot)\circ F_K^{-1}"] \\
67: C^1(\overline K;\mathbb R^d) \arrow[r,"\operatorname{div}"'] & C(K)
68: ```
```

#### numerical-pdes-and-spatial-discretization / confirmed 014: `lem-sph-pair-forces-antisymmetric-and-central`

- Location: **Statement; Facts & Assumptions; Proof**; source lines 34, 40, 42, 48, 50.
- Pages: `meshfree-kernel-approximation-and-conservative-sph`.
- Visible defect: The captured Statement, supplier facts, and proof show underscores and formulas as ordinary baseline text rather than mathematical notation.
- Future repair: Typeset the force, kernel-gradient, and indexed relations in math mode throughout the Statement, Facts, and Proof.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/lem-sph-pair-forces-antisymmetric-and-central--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/lem-sph-pair-forces-antisymmetric-and-central.md).

Exact frozen source lines:

```text
34: For the system in [[def-regularized-conservative-sph-system]], set g_ij=∇W_ε(q_i−q_j) and define the force contribution F_ij=−m_im_j(A_i+A_j)g_ij. Radial evenness gives g_ji=−g_ij and g_ii=0, so for i≠j, F_ji=−F_ij; also F_ij is parallel to q_i−q_j (the zero vector is allowed).
40: [F1] [[def-regularized-conservative-sph-system]]: A_i=p_i/ρ_i² and the acceleration sum is −Σ_jm_j(A_i+A_j)∇W_ε(q_i−q_j).
42: [F2] [[def-scaled-symmetric-compact-kernel-family]]: W_ε is differentiable and radial, hence even.
48: 1.1 Since W_ε(−r)=W_ε(r), differentiating the identity in r using [F3] gives ∇W_ε(−r)=−∇W_ε(r). The scalar coefficient m_im_j(A_i+A_j) is symmetric in i,j, so F_ji=−F_ij. [F1, F2, F3, algebra]
50: 2.1 If r≠0 and u·r=0, then |r+tu|²=|r|²+t²|u|², so the derivative at t=0 of W_ε(r+tu), which is w_ε(|r+tu|), is zero by the chain rule [F3]. Thus ∇W_ε(r) is orthogonal to every u orthogonal to r and lies in span(r). At r=0, differentiable evenness gives ∇W_ε(0)=0 by [F3]. Hence each F_ij is central. [F2, F3, algebra] ∎
```

#### numerical-pdes-and-spatial-discretization / confirmed 015: `thm-parabolic-theta-scheme-local-truncation-error`

- Location: **Statement**; source lines 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48.
- Pages: `parabolic-finite-difference-methods`.
- Visible defect: Two KaTeX parse errors are visible in the red text: one begins at the PDE display and runs through the first residual bound; the second begins in the following “where τ^n...” sentence. The relevant expressions appear as raw TeX rather than rendered math.
- Future repair: Correct the math delimiter boundaries around the PDE, residual estimates, and following prose so each expression parses as a complete display or inline formula.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/thm-parabolic-theta-scheme-local-truncation-error--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-parabolic-theta-scheme-local-truncation-error.md).

Exact frozen source lines:

```text
38: $$
39: u_t-\kappa_xu_{xx}-\kappa_yu_{yy}=f$$
40: on $\overline\Omega\times[0,T]$, with exact sampled initial and Dirichlet rows in the scheme of [[def-parabolic-theta-finite-difference-scheme]]. Assume $u_{tt},u_{ttt},u_{xxxx},u_{yyyy}$ are continuous on the closed cylinder, and write $M_{tt},M_{ttt},M_{x4},M_{y4}$ for their respective sup norms there. If $r^n$ is the exact grid sample at time $t_n$, the complete interior residual is bounded at every time step by
41: $$
42: \|\tau^n\|_\infty\le \Delta t M_{tt}+\frac{\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4}}{12}\quad(\theta\ne\tfrac12),
43: $$
44: and
45: $$
46: \|\tau^n\|_\infty\le\frac{(\Delta t)^2M_{ttt}}{12}+\frac{\kappa_xh_x^2M_{x4}+\kappa_yh_y^2M_{y4}}{12}\quad(\theta=\tfrac12),
47: $$
48: where $\tau^n$ is defined by substituting the exact samples and the exact boundary rows into the fully discrete equation, including its interior rows adjacent to the boundary.
```

#### numerical-pdes-and-spatial-discretization / confirmed 016: `ex-disconnected-unanchored-network-solve`

- Location: **Example**; source lines 47, 48, 49, 50, 61, 62.
- Pages: `graph-diffusion-and-metric-network-pde-numerics-examples`.
- Visible defect: The frozen body introduces the pictured two-component network, then places an unfenced center/tikzpicture environment at lines 49–62. The original-resolution tile visibly prints the TeX commands instead of showing two disconnected edges and their conductance/load labels. The diagram carries the network topology and values used by the example, so its loss is substantive to the visual explanation. Receipt reports tikz_count=0 and no diagram_failures; this is a renderer/path-handling gap, not a claim of malformed diagram mathematics.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-disconnected-unanchored-network-solve--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-disconnected-unanchored-network-solve.md).

Exact frozen source lines:

```text
47: The two disconnected edges and their conductances are shown below; all vertex masses are one, and the right-hand side is $b=(1,0,0,0)^{\mathsf T}$.
48: 
49: \begin{center}
50: \begin{tikzpicture}[every node/.style={font=\small}]
61: \end{tikzpicture}
62: \end{center}
```

#### numerical-pdes-and-spatial-discretization / confirmed 017: `ex-three-compartment-weighted-migration`

- Location: **Example**; source lines 48, 50, 51, 60, 61.
- Pages: `graph-diffusion-and-metric-network-pde-numerics-examples`.
- Visible defect: The original-resolution tile visibly exposes the unfenced TikZ source after the caption instead of rendering the three-compartment chain. Receipt reports tikz_count=0 and no diagram_failures. The diagram was intended to communicate graph orientation, conductances, masses, and node values; loss is a rendering defect, with no independent mathematical error alleged.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/ex-three-compartment-weighted-migration--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/ex-three-compartment-weighted-migration.md).

Exact frozen source lines:

```text
48: The diagram records the orientation, conductances, and vertex masses; edge lengths are schematic and are not used in the matrix calculation.
50: \begin{center}
51: \begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
60: \end{tikzpicture}
61: \end{center}
```

#### numerical-pdes-and-spatial-discretization / confirmed 018: `thm-pe12-l2-projector-w1p-stability`

- Location: **Remarks**; source lines 158, 159, 160, 161, 162, 164, 165, 178, 179.
- Pages: `nonlinear-parabolic-compactness-and-monotone-evolution`.
- Visible defect: Tile --04 at original resolution shows the alleged drawing as lines of literal TikZ code at the end of the item, rather than a square split into two colored triangles with a shared diagonal. The fenced code block still fails to produce a diagram; receipt reports tikz_count=0 and no diagram_failures. The explanatory caption defines the two cells and their shared edge, so the rendered failure is concrete. No mathematical defect in the intended triangulation was found.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 04](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/thm-pe12-l2-projector-w1p-stability--04.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-pe12-l2-projector-w1p-stability.md).

Exact frozen source lines:

```text
158: The drawing shows only the $d=2$, $N=1$ coordinate-order subdivision. The
159: blue triangle is $K_{(1,2)}=\{0\le x_2\le x_1\le1\}$, the orange triangle is
160: $K_{(2,1)}=\{0\le x_1\le x_2\le1\}$, and their red diagonal is the shared
161: whole edge $x_1=x_2$. The coordinate proof above establishes matching for
162: all $d$ and $N$; no proof uses visual features of this illustration.
164: ~~~tikz
165: \begin{tikzpicture}[scale=3]
178: \end{tikzpicture}
179: ~~~
```

#### numerical-pdes-and-spatial-discretization / confirmed 019: `lem-cellwise-particle-quadrature-oscillation-bound`

- Location: **Statement and Proof**; source lines 30, 46.
- Pages: `meshfree-kernel-approximation-and-conservative-sph`.
- Visible defect: The item shows mathematical expressions as literal ASCII identifiers, underscores, braces, and operators in prose while the adjacent displayed estimate and other body formulas are typeset. The original-resolution tile makes the mismatch clear.
- Future repair: Typeset the definition and proof expressions with inline math delimiters; retain the same mathematical content.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/lem-cellwise-particle-quadrature-oscillation-bound--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/lem-cellwise-particle-quadrature-oscillation-bound.md).

Exact frozen source lines:

```text
30: Let g be compactly supported and Lipschitz with constant L_g, meaning |g(y)−g(x)|≤L_g|y−x|, with supp(g)⊂Ω, and use the cells and nodes of [[def-meshfree-cell-quadrature-and-fill-radius]]. Define osc_C(g)=sup_{y,z∈C}|g(y)−g(z)| and let J_g={j:C_j∩supp(g)≠∅}. Then
46: 1.1 By the integration-compatible partition in [F1] and linearity in [F3], subtracting Q_hg cell by cell gives ∫_Ωg−Q_hg=Σ_{j∈J_g}∫_{C_j}(g(y)−g(x_j))dy, using ∫_{C_j}g(x_j)=V_jg(x_j). On a bounding rectangle for each cell, [F3] gives |∫_{C_j}(g−g(x_j))|≤∫_{C_j}|g−g(x_j)|≤V_j osc_{C_j}(g). Summing proves the first inequality. [F1, F3, algebra]
```

#### numerical-pdes-and-spatial-discretization / confirmed 020: `def-monotone-finite-volume-entropy-scheme`

- Location: **Definition**; source lines 61, 74.
- Pages: `monotone-finite-volume-entropy-convergence`.
- Visible defect: The source-authored stencil drawing is rendered as a red “diagram failed to render” error block in the standalone original-resolution tile and frozen HTML. The error block itself is horizontally scrollable in HTML and preserves the TikZ source; the diagram is unavailable as a rendered visual.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/screenshots/def-monotone-finite-volume-entropy-scheme--01.png); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/def-monotone-finite-volume-entropy-scheme.md).

Exact frozen source lines:

```text
61: ```tikz
74: \end{tikzpicture}
```

### Uncertain observations

#### numerical-pdes-and-spatial-discretization / uncertain 001: `cex-na-q1-p0-checkerboard-pressure-mode`

- Location: **Facts & Assumptions**; source lines 43, 51, 53, 55.
- Pages: `mixed-finite-elements-and-stokes-stability-examples`.
- Visible defect: The counterexample is explicitly geometric: a four-cell 2×2 square mesh, alternating cellwise P0 values (+1 on the lower-left and upper-right cells, −1 on the other two), and the only interior Q1 node at the center. A compact labeled sketch would make the cancellation and the single-velocity-degree-of-freedom mechanism immediate. The prose and integrations are complete, so this is an editorial aid rather than a defect or a blocker.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Frozen source: [snapshots/cex-na-q1-p0-checkerboard-pressure-mode.md](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/cex-na-q1-p0-checkerboard-pressure-mode.md).

Exact frozen source lines:

```text
43: **Given:** The unit square with its $2\times2$ square mesh; $V_h$ is the continuous bilinear vector space with zero boundary values, $Q_h$ is the cellwise constant zero-mean space, and $b(v,q):=-\int_Dq\operatorname{div}v$. Use $\|v_h\|=\|\nabla v_h\|_2$ and $\|q_h\|=\|q_h\|_2$.
51: 1.1 Define $q=+1$ on the lower-left and upper-right cells and $q=-1$ on the other two. Equal cell areas show $\int_Dq=0$, and $q\ne0$. Let $\eta$ be the one-dimensional hat with values $0,1,0$ at $0,1/2,1$. The only interior Q1 node is the center, so each scalar velocity is a multiple of $\phi(x,y)=\eta(x)\eta(y)$. [given, construct]
53: 2.1 Let $I_L=[0,1/2]$, $I_R=[1/2,1]$, and similarly $J_B,J_T$. Direct integration gives $\int_{I_L}\eta'=1$, $\int_{I_R}\eta'=-1$, and $\int_{J_B}\eta=\int_{J_T}\eta=1/4$. The alternating signs factor, so $\int_Dq\,\partial_x\phi=(1-(-1))(1/4-1/4)=0$. Interchanging $x,y$ gives $\int_Dq\,\partial_y\phi=0$. [algebra, step 1.1]
55: 3.1 Every admissible velocity is $(a\phi,b\phi)$ for constants $a,b$, so step 2.1 gives $b(v,q)=0$ for every velocity while $q$ is a nonzero mean-zero pressure. Its supremum in the discrete inf-sup quotient is zero; nonnegativity of that quotient forces the discrete inf-sup constant to be $0$. Thus this family is not uniformly inf-sup stable. [given, F1, discharge-construct, step 2.1] ∎
```

### Source metadata parse blockers

#### numerical-pdes-and-spatial-discretization / source-parse-blocker 001: `thm-chebyshev-weighted-orthogonal-projection-rate`

- Location: frontmatter lines 17, 18, 19, 20.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: All mapping items must start at the same column; the indented judge mapping follows the root-level axiom_use scalar.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-chebyshev-weighted-orthogonal-projection-rate.md).

Exact frozen source lines:

```text
17:   judge:
18:     model: "gpt-6-luna"
19:     verdict: pass
20:     date: 2026-10-17
```

#### numerical-pdes-and-spatial-discretization / source-parse-blocker 002: `thm-chebyshev-lobatto-interpolation-near-best-weighted-error`

- Location: frontmatter lines 17, 18, 19, 20.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: All mapping items must start at the same column; the indented judge mapping follows the root-level axiom_use scalar.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-chebyshev-lobatto-interpolation-near-best-weighted-error.md).

Exact frozen source lines:

```text
17:   judge:
18:     model: "gpt-6-luna"
19:     verdict: pass
20:     date: 2026-10-17
```

#### numerical-pdes-and-spatial-discretization / source-parse-blocker 003: `thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix`

- Location: frontmatter lines 17, 18, 19, 20.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: All mapping items must start at the same column; the indented judge mapping follows the root-level axiom_use scalar.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-composite-simpson-error-for-chebyshev-weighted-mass-matrix.md).

Exact frozen source lines:

```text
17:   judge:
18:     model: "gpt-6-luna"
19:     verdict: pass
20:     date: 2026-10-17
```

#### numerical-pdes-and-spatial-discretization / source-parse-blocker 004: `thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined`

- Location: frontmatter lines 17, 18, 19, 20.
- Strict parse failure: Strict YAML parsing of the frozen source frontmatter fails: All mapping items must start at the same column; the indented judge mapping follows the root-level axiom_use scalar.. This blocks canonical metadata parsing and is separate from the recovered title/body preview.
- Recovered preview metadata transform: Recorded in blocker file.
- Evidence: [parse-blocker record](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/frontmatter-parse-blockers.json); [frozen source](math-library-rendering-audit-2026-10-23/numerical-pdes-and-spatial-discretization/snapshots/thm-weighted-orthogonal-polynomial-galerkin-projection-is-well-defined.md).

Exact frozen source lines:

```text
17:   judge:
18:     model: "gpt-6-luna"
19:     verdict: pass
20:     date: 2026-10-17
```

