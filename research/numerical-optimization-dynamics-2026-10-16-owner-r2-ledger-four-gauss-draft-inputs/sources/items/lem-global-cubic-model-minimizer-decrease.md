---
id: lem-global-cubic-model-minimizer-decrease
kind: lemma
title: "A global cubic-model minimizer exists and has a cubic decrease bound"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-adaptive-cubic-regularization-model
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-real-power-continuity-and-derivatives
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-extreme-value-metric
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part I: motivation, convergence and numerical results (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05a.pdf"
      locator: "§3.1, Theorem 3.1 and proof: characterization of a global minimizer of the cubic model in the 38-page preprint."
    - title: "Coralia Cartis, Nicholas I. M. Gould, and Philippe L. Toint, Adaptive cubic overestimation methods for unconstrained optimization. Part II: worst-case iteration complexity (author preprint)"
      url: "https://perso.unamur.be/~phtoint/pubs/TR07-05b.pdf"
      locator: "§§2.1 and 3.1: cubic Cauchy decrease, positive predicted reduction, and ARC model conditions."
---

## Statement

For the cubic model $m_\sigma$ of [[def-adaptive-cubic-regularization-model]],
with $\sigma>0$ and symmetric $B$, a global minimizer exists. If $g\ne0$ and
$s_*$ is any global minimizer, then $s_*\ne0$ and
$$g+Bs_*+\sigma\|s_*\|_2s_*=0,$$
$$m_\sigma(0)-m_\sigma(s_*)\ge\frac{\sigma}{6}\|s_*\|_2^3.$$

## Facts & Assumptions

**Given:** $n\ge1$, $\sigma>0$, $g\in\mathbb R^n$, symmetric
$B\in\mathbb R^{n\times n}$, and the model $m_\sigma$.

[F1] [[def-adaptive-cubic-regularization-model]]:
$m_\sigma(s)=f(x)+\langle g,s\rangle+\tfrac12s^TBs+
\tfrac\sigma3\|s\|_2^3$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]:
$|\langle u,v\rangle|\le\|u\|_2\|v\|_2$.

[F3] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]:
$\|Bs\|_2\le\|B\|_2\|s\|_2$.

[F4] [[cor-euclidean-closed-balls-and-spheres-are-compact]]: every Euclidean
closed ball in $\mathbb R^n$ is compact.

[F5] [[thm-extreme-value-metric]]: a continuous real-valued function on a
nonempty compact metric space attains its minimum.

[F6] [[thm-real-power-continuity-and-derivatives]]: for $u>0$,
$(u^{3/2})'=\tfrac32u^{1/2}$.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $a:=\|g\|_2$ and $M:=\|B\|_2$. For $r:=\|s\|_2$, [F2] and [F3]
give
$$m_\sigma(s)\ge f(x)-ar-\tfrac12Mr^2+\tfrac\sigma3r^3.$$
Choose $R>0$ so that $R^2\ge6a/\sigma$ and $R\ge3M/\sigma$. For every
$r\ge R$, the first negative term is at most $\sigma r^3/6$ and the second
is at most $\sigma r^3/6$; hence $m_\sigma(s)\ge f(x)=m_\sigma(0)$ outside
the closed ball of radius $R$. [given, F1, F2, F3, algebra, choose]

1.2 The model is continuous, and the closed ball from step 1.1 is nonempty
and compact by [F4]. Thus [F5] gives a minimizer on that ball. Since $0$ is
in the ball and every point outside has model value at least $m_\sigma(0)$,
this minimizer is global on $\mathbb R^n$. [step 1.1, F1, F4, F5]

2.1 Now suppose $g\ne0$ and let $s_*$ be a global minimizer. For small
$t>0$,
$$m_\sigma(-tg)-m_\sigma(0)
=-t\|g\|_2^2+\tfrac12t^2g^TBg+\tfrac\sigma3t^3\|g\|_2^3<0,$$
because the negative linear term dominates the quadratic and cubic terms as
$t\downarrow0$. Hence $s_*\ne0$. For any direction $h$, put
$r:=\|s_*\|_2>0$ and
$$\psi(t):=m_\sigma(s_*+th)-m_\sigma(s_*)
=t\langle g+Bs_*,h\rangle+\tfrac12t^2h^TBh
+\tfrac\sigma3\big(r^2+2t\langle s_*,h\rangle+t^2\|h\|_2^2\big)^{3/2}
-\tfrac\sigma3r^3.$$
By [F6], $\psi'(0)=\langle g+Bs_*+\sigma r s_*,h\rangle$. Since $t=0$
minimizes $\psi$, its positive difference quotients are nonnegative and its
negative difference quotients are nonpositive, so this derivative is zero.
Taking $h=g+Bs_*+\sigma r s_*$ gives
$$g+Bs_*+\sigma\|s_*\|_2s_*=0.$$ [given, F1, F6, algebra]

2.2 Global minimality also gives $m_\sigma(s_*)\le m_\sigma(-s_*)$.
The quadratic and cubic terms are even, so this inequality reduces to
$\langle g,s_*\rangle\le0$. Taking the inner product of the stationary
equation in step 2.1 with $s_*$ gives
$s_*^TBs_*+\sigma\|s_*\|_2^3=-\langle g,s_*\rangle\ge0$. Substitution
back into the model decrease yields
$$m_\sigma(0)-m_\sigma(s_*)
=\tfrac12s_*^TBs_*+\tfrac{2\sigma}{3}\|s_*\|_2^3
\ge\tfrac\sigma6\|s_*\|_2^3,$$
as claimed. [step 2.1, given, algebra] ∎
