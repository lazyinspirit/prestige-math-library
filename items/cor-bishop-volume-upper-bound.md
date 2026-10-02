---
id: cor-bishop-volume-upper-bound
kind: corollary
title: Bishop volume upper bound
status: draft
origin: pipeline
deps:
  - thm-bishop-gromov-volume-comparison
  - def-model-space-radial-area-and-ball-volume
  - def-comparison-sine-cosine-and-cotangent-functions
  - def-countable-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Ved Datar, Lectures on Riemannian Geometry (2025)"
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
      locator: "§§27.2 and 28.1, pp.200–209: the Bishop–Gromov ratio and its value one at the origin"
    - title: "J.-H. Eschenburg, Comparison Theorems in Riemannian Geometry"
      url: https://www.math.toronto.edu/~vtk/eschenburg-comparison.pdf
      locator: "§§4–5, pp.15–20: monotonicity of the volume-density quotient and the ball-volume bound"
---

## Statement

Assume the inherited Axiom of Countable Choice $\mathrm{AC}_\omega$. Let
$(M,g)$ be a complete, connected, boundaryless Riemannian manifold of
dimension $n\ge2$ with $\operatorname{Ric}\ge(n-1)k\,g$ for a real number $k$,
let $p\in M$, let $B(p,r)=\{q\in M:d_g(p,q)<r\}$ be the open metric ball and
let $V^\star_k$ be the saturated model ball volume of
[[def-model-space-radial-area-and-ball-volume]]. Then
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)\le V^\star_k(r)\qquad\text{for every }r>0 .$$
No compactness of $M$ is assumed, and no choice beyond the inherited
$\mathrm{AC}_\omega$ is used.

## Facts & Assumptions

**Given:** The inherited $\mathrm{AC}_\omega$ of [A1]; a complete, connected,
boundaryless Riemannian manifold $(M,g)$ of dimension $n\ge2$ with
$\operatorname{Ric}\ge(n-1)k\,g$; a point $p\in M$; the ball volume function
$r\mapsto\operatorname{vol}_g(B(p,r))$; and the saturated model volume
$V^\star_k$.

[A1] The countable-choice premise is the inherited $\mathrm{AC}_\omega$
([[def-countable-choice]]), carried by the Bishop–Gromov comparison cited
below.

[F1] Bishop–Gromov volume comparison
([[thm-bishop-gromov-volume-comparison]]): under the stated hypotheses the
Bishop–Gromov ratio
$$R_p(r)=\frac{\operatorname{vol}_g\bigl(B(p,r)\bigr)}{V^\star_k(r)},\qquad r>0,$$
is well defined, nonincreasing on $(0,\infty)$ and satisfies
$\lim_{r\downarrow0}R_p(r)=1$; in particular
$\operatorname{vol}_g(B(p,r))\le V^\star_k(r)$ for every $r>0$.

[F2] Positivity of the model volume
([[def-model-space-radial-area-and-ball-volume]],
[[def-comparison-sine-cosine-and-cotangent-functions]]): the model radial
area is $A_k(r)=\omega_{n-1}\operatorname{sn}_k(r)^{n-1}$ and
$V_k(r)=\int_0^rA_k(t)\,dt$; the comparison sine is positive on its positive
domain $(0,\pi/\sqrt k)$ for $k>0$ and $(0,\infty)$ for $k\le0$, and
$\omega_{n-1}>0$, so $A_k$ is positive there and $V^\star_k(r)>0$ for every
$r>0$ (for $k>0$ by saturation at $\pi/\sqrt k$).

## Proof

**Proof technique:** direct: evaluate the Bishop–Gromov ratio against its
limit one at the origin, using monotonicity along a sequence of radii
decreasing to zero.

1.1 The ratio is at most one. [F1, given]
Fix $r>0$. By the monotonicity in [F1], $0<s<r$ implies
$R_p(r)\le R_p(s)$. Choosing any sequence $s_j\downarrow0$ and using
$\lim_{s\downarrow0}R_p(s)=1$ from [F1],
$$R_p(r)\le\lim_{s\downarrow0}R_p(s)=1 .$$
[F1, given]

2.1 Conclusion. [F2, step 1.1]
Multiplying the inequality of step 1.1 by the positive number
$V^\star_k(r)$ [F2] gives
$$\operatorname{vol}_g\bigl(B(p,r)\bigr)=R_p(r)\,V^\star_k(r)\le V^\star_k(r),$$
which is the asserted bound. The value $r=0$ is excluded, where
$B(p,0)=\varnothing$ and $V^\star_k(0)=0$; for $k>0$ the bound is constant
from the model pole onward, and for $k\le0$ it is the genuine model volume.
No step selects a direction, a sequence of directions, or a family of balls
beyond the single radius sequence already carried by the limit in [F1], so no
choice beyond [A1] is used. [F2, step 1.1] ∎

## Source locator

Datar §§27.2 and 28.1, pp.200–209, and Eschenburg §§4–5, pp.15–20, record the
Bishop–Gromov ratio as nonincreasing with limit one at the origin, which is
exactly the statement that the ball volume is bounded by the model volume. The
proof above is the one-line unpacking of the in-run Bishop–Gromov theorem.
