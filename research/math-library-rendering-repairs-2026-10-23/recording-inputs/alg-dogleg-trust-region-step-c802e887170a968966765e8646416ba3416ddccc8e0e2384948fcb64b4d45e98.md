---
id: alg-dogleg-trust-region-step
kind: algorithm
title: "Dogleg steps for positive-definite trust-region models"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-trust-region-quadratic-model-and-ratio
  - alg-trust-region-cauchy-step
  - def-definite-and-indefinite-hessian-quadratic-forms
justified_by:
  - lem-positive-definite-model-has-unique-newton-step
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Jorge Nocedal and Stephen J. Wright, Numerical Optimization, second edition"
      url: "https://www.math.kent.edu/~reichel/courses/optimization/Numerical_Optimization.pdf"
      locator: "Chapter 4, §4.1, pp. 73–75 / PDF pp. 93–95: the positive-definite dogleg path and its trust-boundary intersection."
---

## Definition

Input a quadratic trust-region model of
[[def-trust-region-quadratic-model-and-ratio]] with positive-definite $B$
([[def-definite-and-indefinite-hessian-quadratic-forms]]) and radius
$\Delta>0$. If $g=0$, return $p=0$ with status `stationary`. Otherwise
compute the Cauchy step $p_C$ by [[alg-trust-region-cauchy-step]] and the
Newton-model step $p_N$ by solving $Bp_N=-g$.

1. If $\|p_N\|_2\le\Delta$, return $p_N$.
2. If $\|p_C\|_2=\Delta$, return $p_C$.
3. Otherwise put $d:=p_N-p_C$, $a:=\|d\|_2^2$,
   $b:=2\langle p_C,d\rangle$, and $c:=\|p_C\|_2^2-\Delta^2<0$. Compute
   $$t:=\frac{-b+\sqrt{b^2-4ac}}{2a}.$$
   Set $p_D:=p_C+td$, the boundary intersection on the segment from the
   Cauchy step to the Newton-model step.
4. Compare the two model values. Return $p_D$ if $m(p_D)\le m(p_C)$ and
   return $p_C$ otherwise.

The status is `step` in the nonstationary branches.

## Remarks

The dogleg path first follows the negative gradient to $p_C$, then follows
one straight segment toward $p_N$. The figure illustrates the
boundary-intersection branch in two dimensions, with
$g=(-1,0)^T$, $B=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}$ and
$\Delta=3/2$. Here $p_C=(1,0)^T$ is strictly inside the ball,
$p_N=(2,1)^T$ is outside, and
$p_D=p_C+t(p_N-p_C)$ with $t=(\sqrt{14}-2)/4$ lies on its boundary.

```tikz
\begin{tikzpicture}[scale=1.05]
  \coordinate (O) at (0,0);
  \coordinate (C) at (2,0);
  \coordinate (D) at (2.870829,0.870829);
  \coordinate (N) at (4,2);
  \draw[thick] (O) circle (3);
  \node at (0,3.4) {$\|p\|_2=\Delta$};
  \draw[very thick,blue,->] (O) -- (C);
  \node at (0.9,0.35) {$-g$};
  \draw[very thick,blue] (C) -- (D);
  \draw[thick,dashed,->] (D) -- (N);
  \fill (O) circle (2pt);
  \fill[blue] (C) circle (2pt);
  \fill[blue] (D) circle (2pt);
  \fill (N) circle (2pt);
  \node[below left] at (O) {$0$};
  \node[below] at (C) {$p_C$};
  \node[right] at (D) {$p_D$};
  \node[above right] at (N) {$p_N$};
\end{tikzpicture}
```

The dashed continuation is outside the ball; the solid dogleg ends at $p_D$.
Step 4 still compares $m(p_D)$ and $m(p_C)$ before returning a step. The
earlier branches return $p_N$ when it is feasible, or otherwise return
$p_C$ when $p_C$ is already on the boundary; neither case is depicted here.
The construction and its well-definedness do not depend on the figure.
