---
id: ex-keyhole-contour-assembly-without-cauchys-theorem
kind: example
title: "Assembling a keyhole contour from two radial segments and two circular arcs"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-complex-contours-reversal-concatenation-and-closedness, prop-reversal-and-concatenation-of-complex-line-integrals, cor-absolute-integral-of-one-is-path-length]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

Let $0<r<R$. A keyhole contour about the positive real axis is the concatenation of the upper radial segment $r\to R$, the outer circle once counterclockwise, the lower radial segment $R\to r$, and the inner circle clockwise. For every continuous integrand on the trace, its integral is the signed sum of the four piece integrals.

## Facts & Assumptions

**Given:** Radii $0<r<R$ and four oriented pieces with matching endpoints.

[L1] Concatenation and reversal of rectifiable complex contours are defined in [[def-complex-contours-reversal-concatenation-and-closedness]].

[L2] Complex line integrals add under concatenation and change sign under reversal ([[prop-reversal-and-concatenation-of-complex-line-integrals]]).

[L3] The absolute integral of $1$ is contour length ([[cor-absolute-integral-of-one-is-path-length]]).

## Verification

**Proof technique:** direct.

1.1 On $[0,1]$, parametrize the pieces by $r+(R-r)t$, $Re^{2\pi it}$, $R-(R-r)t$, and $re^{2\pi i(1-t)}$, respectively. Their endpoints match in this order, so [L1] defines a closed concatenation. [L1, construct]

2.1 Repeated application of [L2] gives the total integral as the sum of the four oriented integrals, with the reversed radial and inner-circle orientations carrying their signs. [step 1.1, L2]

3.1 By [L3], the piece lengths are $R-r$, $2\pi R$, $R-r$, and $2\pi r$. This verifies rectifiability and bookkeeping without evaluating the integral by Cauchy's theorem or choosing a logarithm branch. [step 1.1, L3] ∎


## Remarks

In the illustration, $\gamma_1,\gamma_2,\gamma_3,\gamma_4$ denote the four parametrizations in step 1.1, in traversal order. Their endpoint pairs are $(r,R)$, $(R,R)$, $(R,r)$, and $(r,r)$. The two radial traces coincide on the positive real axis; the opposed arrows on that segment indicate the two traversals. The circles are complete, as in the stated parametrizations; no separation of the upper and lower radial traces is imposed here.

```tikz
\begin{tikzpicture}[scale=1.05,>=stealth]
  \draw[gray,dashed] (0,0) -- (3.05,0);
  \node[below] at (3.1,0) {$\operatorname{Re}z$};
  \fill (0,0) circle (1.3pt);
  \node[below left] at (0,0) {$0$};
  \draw[thick] (0,0) circle (2.5);
  \draw[thick,->] (120:2.5) arc (120:155:2.5);
  \node[left] at (-2.05,1.7) {$\gamma_2$};
  \draw[thick] (0,0) circle (0.9);
  \draw[thick,->] (150:0.9) arc (150:95:0.9);
  \node[left] at (-0.95,0.4) {$\gamma_4$};
  \draw[thick] (0.9,0) -- (2.5,0);
  \draw[thick,->] (1.15,0) -- (1.55,0);
  \draw[thick,->] (2.25,0) -- (1.85,0);
  \node[above] at (1.4,0.18) {$\gamma_1$};
  \node[below] at (2.05,-0.18) {$\gamma_3$};
  \fill (0.9,0) circle (1.6pt);
  \fill (2.5,0) circle (1.6pt);
  \node[below left] at (0.9,-0.08) {$r$};
  \node[above right] at (2.5,0.08) {$R$};
\end{tikzpicture}
```

The increasing argument on $\gamma_2$ gives the counterclockwise arrow, while the decreasing argument on $\gamma_4$ gives the clockwise arrow. The integral identities and rectifiability verification above are independent of this illustration.
