---
id: ex-square-map-sends-a-grid-to-orthogonal-parabolas
kind: example
title: "The square map sends the Cartesian grid lines off the coordinate axes to two orthogonal families of parabolas"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-complex-polynomials-and-rational-functions-are-holomorphic, thm-nonzero-complex-derivative-iff-oriented-conformal]
aliases: []
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "Howell and Mathews, Complex Analysis, §3.6"
      url: "https://complexanalysis.org/web/sec_conformal-mappings.html"
pipeline_run: frontier-12
---

## Example

Under $w=z^2$, the vertical grid lines $x=c$ with $c\ne0$ and the horizontal grid lines $y=d$ with $d\ne0$ become two families of parabolic arcs, opening in opposite directions. The two coordinate axes are the exceptions: each maps onto a ray rather than a parabola. At the image of every grid crossing $z\ne0$, the tangent directions of the two curves through it remain orthogonal. The origin is the critical point where this conformality conclusion is unavailable.

## Facts & Assumptions
**Given:** $z=x+iy$, $w=u+iv=z^2$, and real constants $c,d$ specifying the lines $x=c$ and $y=d$.

[L1] Complex polynomials are entire, and the derivative of $z^2$ is $2z$ ([[thm-complex-polynomials-and-rational-functions-are-holomorphic]]).

[L2] A real-differentiable complex map is orientation-preserving conformal at a point exactly when it is complex differentiable there with nonzero derivative ([[thm-nonzero-complex-derivative-iff-oriented-conformal]]).

## Verification

**Proof technique:** cases and direct computation.

1.1 Expanding gives $u=x^2-y^2$ and $v=2xy$. On $x=c$, $(u,v)=(c^2-y^2,2cy)$. [algebra]

1.2 At a crossing $z=c+id\ne0$, [L1] gives $f'(z)=2z\ne0$. Hence [L2] says the real derivative is an oriented similarity, so it carries the perpendicular vertical and horizontal tangent directions to perpendicular nonzero tangent directions of the two image curves. [L1, L2]

2.1 If $c\ne0$, eliminating $y=v/(2c)$ gives $u=c^2-v^2/(4c^2)$, a left-opening parabola. If $c=0$, the image is $(u,v)=(-y^2,0)$, the nonpositive real ray, which is the degenerate member of that family. [step 1.1, assume-case nonzero, assume-case zero, algebra]

2.2 On $y=d$, $(u,v)=(x^2-d^2,2dx)$. If $d\ne0$, eliminating $x=v/(2d)$ gives $u=v^2/(4d^2)-d^2$, a right-opening parabola. If $d=0$, the image is $(u,v)=(x^2,0)$, the nonnegative real ray. [step 1.1, assume-case nonzero, assume-case zero, algebra]

3.1 At $z=0$, the derivative is zero, so [L2] gives no conformality conclusion; indeed the two degenerate rays meet there. Steps 2.1 and 2.2 cover zero and nonzero grid parameters, and step 1.2 covers exactly the noncritical crossings. [step 2.1, step 2.2, step 1.2, L1, L2, cases-exhaustive] ∎


## Remarks

The illustration shows the image plane for the representative grid parameters $|c|,|d|\in\{1,\sqrt{2}\}$. Blue curves come from vertical lines and orange curves from horizontal lines; opposite signs of a parameter give the same image curve. Only portions of the parabolas and the two axis-image rays are drawn. At $w=2i$, the marked perpendicular tangents are the images of the grid directions at $z=1+i$. The origin is marked as the critical value. The verification above is independent of this illustration.

```tikz
\begin{tikzpicture}[scale=0.85]
\draw[->,gray] (-3.5,0) -- (3.7,0) node[right] {$u$};
\draw[->,gray] (0,-3.5) -- (0,3.8) node[above] {$v$};
\draw[blue,thick,domain=-3.3:3.3,samples=81,variable=\t] plot ({1-\t*\t/4},{\t});
\draw[blue,thick,domain=-3.3:3.3,samples=81,variable=\t] plot ({2-\t*\t/8},{\t});
\draw[orange,thick,domain=-3.3:3.3,samples=81,variable=\t] plot ({\t*\t/4-1},{\t});
\draw[orange,thick,domain=-3.3:3.3,samples=81,variable=\t] plot ({\t*\t/8-2},{\t});
\draw[blue,very thick,->] (0,0) -- (-3.3,0);
\draw[orange,very thick,->] (0,0) -- (3.3,0);
\draw[dashed] (-0.55,1.45) -- (0.55,2.55);
\draw[dashed] (-0.55,2.55) -- (0.55,1.45);
\draw (0.16,2.16) -- (0,2.32) -- (-0.16,2.16);
\fill (0,2) circle (1.7pt);
\node[right] at (0.6,2.6) {$2i$};
\fill (0,0) circle (2pt);
\node[below right] at (0,0) {$0$};
\node[blue] at (-1.7,-4) {$x=c:\quad u=c^2-v^2/(4c^2)$};
\node[orange] at (1.7,-4.7) {$y=d:\quad u=v^2/(4d^2)-d^2$};
\end{tikzpicture}
```
