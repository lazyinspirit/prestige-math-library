---
id: lem-global-cubic-model-minimizer-decrease
kind: lemma
title: "Global cubic minimizers, admissible inexact steps, and cubic Cauchy decrease"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-adaptive-cubic-regularization-model
  - thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized
  - thm-cauchy-schwarz-and-the-euclidean-norm
  - thm-real-power-continuity-and-derivatives
  - cor-euclidean-closed-balls-and-spheres-are-compact
  - thm-extreme-value-metric
  - cor-mean-value-theorem
  - alg-adaptive-cubic-regularization
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

More generally, every $s$ satisfying
$$g^Ts+s^TBs+\sigma\|s\|_2^3=0,\qquad s^TBs+\sigma\|s\|_2^3\ge0$$
has $m_\sigma(0)-m_\sigma(s)\ge\frac{\sigma}{6}\|s\|_2^3$.
For $g\ne0$, put $a=\|g\|_2$ and $q=g^TBg$. The unique minimizer of
the cubic model on the negative-gradient ray $\{-tg:t\ge0\}$ is
$$s_C=-t_Cg,\qquad t_C=\frac{-q+\sqrt{q^2+4\sigma a^5}}{2\sigma a^3}>0.$$

## Facts & Assumptions

**Given:** $n\ge1$, $\sigma>0$, $g\in\mathbb R^n$, symmetric
$B\in\mathbb R^{n\times n}$, and the model $m_\sigma$.

[F1] [[def-adaptive-cubic-regularization-model]]:
$m_\sigma(s)=f(x)+\langle g,s\rangle+\tfrac12s^TBs+
\tfrac\sigma3\|s\|_2^3$.

[F2] [[thm-cauchy-schwarz-and-the-euclidean-norm]]:
$|\langle u,v\rangle|\le\|u\|_2\|v\|_2$ and the Euclidean norm
satisfies the triangle inequality.

[F3] [[thm-induced-matrix-norms-are-compatible-submultiplicative-and-normalized]]:
$\|Bs\|_2\le\|B\|_2\|s\|_2$.

[F4] [[cor-euclidean-closed-balls-and-spheres-are-compact]]: every Euclidean
closed ball in $\mathbb R^n$ is compact.

[F5] [[thm-extreme-value-metric]]: a continuous real-valued function on a
nonempty compact metric space attains its minimum.

[F6] [[thm-real-power-continuity-and-derivatives]]: for $u>0$,
$(u^{3/2})'=\tfrac32u^{1/2}$.

[F7] [[cor-mean-value-theorem]]: a function continuous on a closed interval
and differentiable in its interior has an interior point where its derivative
equals its endpoint slope.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $a:=\|g\|_2$ and $M:=\|B\|_2$. For $r:=\|s\|_2$, [F2] and [F3] give $$m_\sigma(s)\ge f(x)-ar-\tfrac12Mr^2+\tfrac\sigma3r^3.$$ Choose $R>0$ so that $R^2\ge6a/\sigma$ and $R\ge3M/\sigma$. For every $r\ge R$, the first negative term is at most $\sigma r^3/6$ and the second is at most $\sigma r^3/6$; hence $m_\sigma(s)\ge f(x)=m_\sigma(0)$ outside the closed ball of radius $R$. [given, F1, F2, F3, algebra, choose]

1.2 Now suppose $g\ne0$ and let $s_*$ be a global minimizer. For small $t>0$, $$m_\sigma(-tg)-m_\sigma(0) =-t\|g\|_2^2+\tfrac12t^2g^TBg+\tfrac\sigma3t^3\|g\|_2^3<0,$$ because the negative linear term dominates the quadratic and cubic terms as $t\downarrow0$. Hence $s_*\ne0$. For any direction $h$, put $r:=\|s_*\|_2>0$ and $$\psi(t):=m_\sigma(s_*+th)-m_\sigma(s_*) =t\langle g+Bs_*,h\rangle+\tfrac12t^2h^TBh +\tfrac\sigma3\big(r^2+2t\langle s_*,h\rangle+t^2\|h\|_2^2\big)^{3/2} -\tfrac\sigma3r^3.$$ By [F6], $\psi'(0)=\langle g+Bs_*+\sigma r s_*,h\rangle$. Since $t=0$ minimizes $\psi$, its positive difference quotients are nonnegative and its negative difference quotients are nonpositive, so this derivative is zero. Taking $h=g+Bs_*+\sigma r s_*$ gives $$g+Bs_*+\sigma\|s_*\|_2s_*=0.$$ [given, F1, F6, algebra]

1.3 Let $s$ satisfy the two inexact-step conditions in the Statement and write $r=\|s\|_2$. Substituting $-g^Ts=s^TBs+\sigma r^3$ into the model decrease gives $$m_\sigma(0)-m_\sigma(s)=\tfrac12s^TBs+\tfrac{2\sigma}{3}r^3.$$ The second condition implies $s^TBs\ge-\sigma r^3$, and therefore the right side is at least $\sigma r^3/6$. [given, algebra]

1.4 Suppose $g\ne0$, put $a=\|g\|_2>0$ and $q=g^TBg$, and define $\psi(t)=m_\sigma(-tg)-m_\sigma(0)$ for $t\ge0$. Then $$\psi(t)=-a^2t+\tfrac12qt^2+\tfrac{\sigma}{3}a^3t^3, \qquad \psi'(t)=-a^2+qt+\sigma a^3t^2.$$ The two roots of $\psi'$ are $$t_\pm=\frac{-q\pm\sqrt{q^2+4\sigma a^5}}{2\sigma a^3};$$ their product is $-1/(\sigma a)<0$, so $t_-<0<t_+$. The derivative factors as $\sigma a^3(t-t_-)(t-t_+)$, hence it is negative on $[0,t_+)$ and positive on $(t_+,\infty)$. Applying [F7] on any subinterval of either range shows that $\psi$ strictly decreases before $t_+$ and strictly increases after it. Thus $t_C=t_+$ is the unique global minimizer on $[0,\infty)$, proving the stated Cauchy-ray formula. [given, F7, algebra, choose]

2.1 The model is continuous: for $u,v\in\mathbb R^n$, the triangle inequality gives $|\|u\|_2-\|v\|_2|\le\|u-v\|_2$. If $\|u-v\|_2<1$, then $\|u\|_2\le\|v\|_2+1$, and $$|\|u\|_2^3-\|v\|_2^3| =|\|u\|_2-\|v\|_2|(\|u\|_2^2+\|u\|_2\|v\|_2+\|v\|_2^2)$$ tends to zero with $\|u-v\|_2$; this also holds at $v=0$, where $\|u\|_2^3\le\|u\|_2$ for $\|u-v\|_2<1$. The linear term is continuous by [F2], and $$|u^TBu-v^TBv|\le\|u-v\|_2\|B\|_2(\|u\|_2+\|v\|_2)$$ by [F2] and [F3], so the quadratic term is continuous as well. The closed ball from step 1.1 is nonempty and compact by [F4]. Thus [F5] gives a minimizer on that ball. Since $0$ is in the ball and every point outside has model value at least $m_\sigma(0)$, this minimizer is global on $\mathbb R^n$. [step 1.1, F1, F2, F3, F4, F5]

2.2 Global minimality also gives $m_\sigma(s_*)\le m_\sigma(-s_*)$. The quadratic and cubic terms are even, so this inequality reduces to $\langle g,s_*\rangle\le0$. Taking the inner product of the stationary equation in step 1.2 with $s_*$ gives $s_*^TBs_*+\sigma\|s_*\|_2^3=-\langle g,s_*\rangle\ge0$. Substitution back into the model decrease yields $$m_\sigma(0)-m_\sigma(s_*) =\tfrac12s_*^TBs_*+\tfrac{2\sigma}{3}\|s_*\|_2^3 \ge\tfrac\sigma6\|s_*\|_2^3,$$ as claimed. [step 1.2, given, algebra]

3.1 Steps 1.1, 2.1, 1.2, and 2.2 prove the exact global-minimizer claims, step 1.3 proves the inexact-step decrease, and step 1.4 proves the Cauchy-ray assertion. [step 2.1, step 1.2, step 2.2, step 1.3, step 1.4] ∎

