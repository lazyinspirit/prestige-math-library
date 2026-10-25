## Inverse Problems

Completed visual review of **528 items across 110 pages**, with **1012 image tiles**. Findings: 7 confirmed. Evidence: [manifest](math-library-rendering-audit-2026-10-23/inverse-problems/manifest.json), [coverage](math-library-rendering-audit-2026-10-23/inverse-problems/combined-coverage.json), [receipt](math-library-rendering-audit-2026-10-23/inverse-problems/category-review-receipt.json).

### Confirmed rendering defects

#### inverse-problems / confirmed 001: `alg-ip-pnp-ista-with-denoiser`

- Location: **Definition diagram**; source lines 47, 48, 49, 50, 51, 52, 53, 54, 55.
- Pages: `plug-and-play-mmse-regularization`.
- Visible defect: The local HTML renders the entire fenced TikZ source as literal monospace code instead of drawing the update-flow diagram. The screenshot shows the raw node and arrow commands immediately after the intended diagram introduction.
- Future repair: Make this tikz fence use the renderer-supported diagram syntax or teach the renderer to accept the tilde fence; verify the rendered nodes x_{t-1}, z_t=x_{t-1}-gamma nabla g(x_{t-1}), x_t=D_tilde_sigma(z_t), and the two left-to-right arrows.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/alg-ip-pnp-ista-with-denoiser--01.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/alg-ip-pnp-ista-with-denoiser.md).

Exact frozen source lines:

```text
47: ~~~tikz
48: \begin{tikzpicture}[x=1.3cm,y=0.9cm,>=stealth]
49:   \node at (0,0) (old) {$x_{t-1}$};
50:   \node at (3,0) (grad) {$z_t=x_{t-1}-\gamma\nabla g(x_{t-1})$};
51:   \node at (7,0) (den) {$x_t=\widetilde D_\sigma(z_t)$};
52:   \draw[->] (old) -- (grad);
53:   \draw[->] (grad) -- (den);
54: \end{tikzpicture}
55: ~~~
```

#### inverse-problems / confirmed 002: `ex-ip-38-scope-and-boundary-cases`

- Location: **Simple-disk diagram**; source lines 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61.
- Pages: `geodesic-x-ray-transforms-on-simple-manifolds-examples`.
- Visible defect: The captured local HTML contains “diagram failed to render” followed by the raw TikZ source. The disk bump and measured-chord diagram is absent.
- Future repair: Repair the TikZ parse/render failure while preserving the unit disk, radius-1/2 support, and the diameter chord entering at (-1,0), crossing the support, and exiting at (1,0).
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/ex-ip-38-scope-and-boundary-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/ex-ip-38-scope-and-boundary-cases.md).

Exact frozen source lines:

```text
51: ```tikz
52: \begin{tikzpicture}[scale=2]
53:   \draw[thick] (0,0) circle (1);
54:   \fill[blue!18] (0,0) circle (0.5);
55:   \draw[red,very thick,->] (-1,0) -- (0.65,0);
56:   \draw[red,very thick] (0.65,0) -- (1,0);
57:   \node[below] at (-1,0) {$(-1,0)$};
58:   \node[below] at (1,0) {exit};
59:   \node[blue!60!black] at (0,0.72) {$\operatorname{supp}f$};
60: \end{tikzpicture}
61: ```
```

#### inverse-problems / confirmed 003: `ex-ip-38-scope-and-boundary-cases`

- Location: **Trapped-annulus diagram**; source lines 67, 68, 69, 70, 71, 72, 73, 74, 75, 76.
- Pages: `geodesic-x-ray-transforms-on-simple-manifolds-examples`.
- Visible defect: The diagram renders, but all three right-side radius labels share the horizontal axis with the concentric circles; the text crosses or crowds the ring outlines, and “r=1 trapped” is visually compressed against adjacent labels.
- Future repair: Move the three labels to non-overlapping callouts outside the outer circle, with short leaders to the inner r=0.5 reference, the red trapped r=1 circle, and the r=2 boundary. Preserve the red direction arrow on the trapped geodesic.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/ex-ip-38-scope-and-boundary-cases--01.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/ex-ip-38-scope-and-boundary-cases.md).

Exact frozen source lines:

```text
67: ```tikz
68: \begin{tikzpicture}[scale=1.4]
69:   \draw[thick] (0,0) circle (0.5);
70:   \draw[thick] (0,0) circle (1.25);
71:   \draw[thick] (0,0) circle (2);
72:   \draw[red,very thick,->] (30:1.25) arc[start angle=30,end angle=300,radius=1.25];
73:   \node[right] at (0.5,0) {$r=0$};
74:   \node[right] at (1.25,0) {$r=1$ trapped};
75:   \node[right] at (2,0) {$r=2$};
76: \end{tikzpicture}
```

#### inverse-problems / confirmed 004: `def-ip-real-frame-phase-retrieval`

- Location: **Definition diagram**; source lines 58, 60, 61, 62, 63.
- Pages: `real-phase-retrieval-and-complement-property`.
- Visible defect: The local screenshot shows a red “diagram failed to render” box containing the raw tikzcd source, rather than the map square.
- Future repair: Repair the renderer input for this tikzcd block and confirm the four arrows/objects render with the stated labels.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/def-ip-real-frame-phase-retrieval--01.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/def-ip-real-frame-phase-retrieval.md).

Exact frozen source lines:

```text
58: The diagram records the identity $\mathcal I_\Phi\circ q=S\circ T_\Phi$, where $S(y)=(y_i^2)_{i\in[m]}$ is coordinatewise squaring. It distinguishes signed linear measurements, amplitudes, and intensities; no proof relies on the diagram.
60: ```tikzcd
61: \mathbb R^d \arrow[r,"T_\Phi"] \arrow[d,"q"'] & \mathbb R^{[m]} \arrow[d,"S"] \\
62: Q_d \arrow[r,"\mathcal I_\Phi"'] & [0,\infty)^m
63: ```
```

#### inverse-problems / confirmed 005: `alg-ip-solit-parameter-choice`

- Location: **Rule diagram**; source lines 80, 81, 82, 83, 84, 85, 86.
- Pages: `adaptive-spectral-regularization-and-solit`.
- Visible defect: The four long node labels collapse into a narrow, overlapping row in the captured local HTML. The metadata reports tikz_count=1 and no renderer diagram failure, but individual visual review shows the labels are not legible as a flow diagram.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/alg-ip-solit-parameter-choice--01.png), [tile 02](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/alg-ip-solit-parameter-choice--02.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/alg-ip-solit-parameter-choice.md).

Exact frozen source lines:

```text
80:   \node[draw,rounded corners,align=center] (data) at (0,0) {observations $y_j=Y_x(u_j)$};
81:   \node[draw,rounded corners,align=center] (est) at (3,0) {observed-data partial sums $\widehat x_{m,N}$};
82:   \node[draw,rounded corners,align=center] (tests) at (6,0) {all finer-index two-index tests};
83:   \node[draw,rounded corners,align=center] (choose) at (9,0) {smallest accepted index $\widehat m$};
84:   \draw[->] (data) -- (est);
85:   \draw[->] (est) -- (tests);
86:   \draw[->] (tests) -- (choose);
```

#### inverse-problems / confirmed 006: `alg-ip-measurement-guided-diffusion-reconstruction`

- Location: **Definition diagram**; source lines 46, 65.
- Pages: `score-diffusion-inverse-solvers`.
- Visible defect: The local preview displays a red “diagram failed to render” box containing raw TikZ instead of the flowchart. The screenshot manifest records one diagram failure; no KaTeX errors are recorded.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/alg-ip-measurement-guided-diffusion-reconstruction--01.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/alg-ip-measurement-guided-diffusion-reconstruction.md).

Exact frozen source lines:

```text
46: ```tikz
65: \end{tikzpicture}
```

#### inverse-problems / confirmed 007: `ex-ip-approximate-cnn-mmse-denoiser`

- Location: **Network diagram**; source lines 63, 79.
- Pages: `plug-and-play-mmse-regularization-examples`.
- Visible defect: The local preview prints the TikZ commands as ordinary text between the diagram explanation and Facts & Assumptions. The screenshot manifest reports tikz_count 0 and no diagram failure, but visual inspection confirms literal source exposure because this block uses tilde fences.
- Future repair: Repair the reported literal markup or diagram mismatch while preserving the authored mathematics.
- Image evidence: [tile 01](math-library-rendering-audit-2026-10-23/inverse-problems/screenshots/ex-ip-approximate-cnn-mmse-denoiser--01.png); [frozen source](math-library-rendering-audit-2026-10-23/inverse-problems/snapshots/ex-ip-approximate-cnn-mmse-denoiser.md).

Exact frozen source lines:

```text
63: ## Network diagram
79: ~~~
```

