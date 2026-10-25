---
id: ex-negative-gradient-lines-for-a-quadratic-morse-function
kind: example
title: "Negative-gradient lines for a quadratic Morse function"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: literature-derived
deps: []
justified_by: []
proof_strategy: direct
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, §13.1"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
---

## Example

On $\mathbb R^r\times\mathbb R^s$ with its Euclidean metric, let
$f(u,v)=-|u|^2+|v|^2$. Its negative-gradient equation is

$$ \dot u=2u,\qquad \dot v=-2v. $$

## Verification

**Given:** The quadratic function $f(u,v)=-|u|^2+|v|^2$ on Euclidean space.

1.1 Solving the separated equations gives $u(t)=e^{2t}u_0$ and $v(t)=e^{-2t}v_0$. Thus the forward-stable coordinate disk is $\{u=0\}$ and the backward-unstable disk is $\{v=0\}$. [given, algebra]

2.1 Directly, $\frac d{dt}f(u(t),v(t))=-4|u(t)|^2-4|v(t)|^2$, which is strictly negative away from the origin. [step 1.1, algebra] ∎

## Remarks

For $r=s=1$, the invariant coordinate axes illustrate the saddle flow. Arrows
show increasing time: on $u=0$ the flow approaches the origin, while on $v=0$
it moves away. This is the two-dimensional case of the product flow in step 1.1;
the verification above is independent of the picture.

```tikz
\begin{tikzpicture}[scale=1.1]
\draw[gray] (-2.7,0) -- (2.7,0);
\draw[gray] (0,-2.1) -- (0,2.1);
\node[right] at (2.7,0) {$u$};
\node[above] at (0,2.1) {$v$};
\draw[->,thick] (0.4,0) -- (2.2,0);
\draw[->,thick] (-0.4,0) -- (-2.2,0);
\draw[->,thick] (0,1.8) -- (0,0.4);
\draw[->,thick] (0,-1.8) -- (0,-0.4);
\fill (0,0) circle (1.6pt);
\node[below right] at (0,0) {$0$};
\node[right] at (0.2,1.5) {$u=0$: forward-stable};
\node[below] at (0,-2.45) {$v=0$: unstable manifold};
\end{tikzpicture}
```
