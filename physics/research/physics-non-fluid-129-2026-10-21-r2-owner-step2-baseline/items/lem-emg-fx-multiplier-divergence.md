---
id: lem-emg-fx-multiplier-divergence
kind: lemma
title: Exact potential-wave multiplier identity
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - def-countable-choice
  - def-emg-fx-wave-currents
  - def-gr-smooth-lorentzian-objects
  - def-gr-observer-and-rest-space
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - lem-gr-observer-projection-decomposition
  - thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces
dependency_roles:
  def-countable-choice: mathematical-premise
  def-emg-fx-wave-currents: mathematical-premise
  def-gr-smooth-lorentzian-objects: mathematical-premise
  def-gr-observer-and-rest-space: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
  thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Mihalis Dafermos and Igor Rodnianski, Lectures on black holes and linear waves, arXiv:0811.0354v1 (2008), full lecture notes"
      url: https://arxiv.org/pdf/0811.0354
      locator: "Appendix D, PDF pp. 103–104, derives the massless scalar stress-current divergence identity; Sections 3.2.2–3.2.4, PDF pp. 30–32, apply it to energy flux and identify horizon degeneration. The potential and source terms below are calculated locally."
    - title: "Elena Giorgi, The linear stability of Reissner–Nordström spacetime for small charge, arXiv:1904.04926v2 (2020), full paper"
      url: https://arxiv.org/pdf/1904.04926
      locator: "Section 1.2, PDF pp. 3–6, and Sections 8.1.2 and 8.4, PDF pp. 56–60: coupled wave systems in the Einstein–Maxwell application. The scalar identity below is proved directly and is not used as a substitute for those systems."
verification:
  precheck: pass
---

## Statement

Let $(M,g,N,o)$, $\mathcal U$, $u$, $V$, $s$, and $X$ satisfy the data and definitions of the wave-current definition, including $\Box_g u=Vu+s$. Then
$$\nabla_aJ_X^a=K_X+sX(u)-\frac12X(V)u^2.$$
In particular, if $X$ satisfies the Killing equation $\nabla_{(a}X_{b)}=0$, $X(V)=0$, and $s=0$, then $\nabla_aJ_X^a=0$. At a point where $n$ is a future unit timelike vector (for example, a normalized spacelike-slice normal) and $X$ is timelike with $-g(X,n)>0$, the density $T_{ab}X^a n^b$ is nonnegative whenever $V\ge0$.

## Statement references

[[def-emg-fx-wave-currents]]

## Facts & Assumptions

**Given:** The Lorentzian data, smooth real fields $u,V,s$, a smooth vector field $X$, the equation $\Box_g u=Vu+s$, and the background countable-choice convention inherited from the cited geometry suppliers.

[F1] [[def-emg-fx-wave-currents]]: $T_{ab}=\nabla_a u\nabla_bu-\tfrac12g_{ab}(|du|_g^2+Vu^2)$, $J_X^a=T^a{}_bX^b$, and $K_X=T_{ab}\nabla^{(a}X^{b)}$.

[F2] [[def-gr-smooth-lorentzian-objects]]: the time orientation selects future timelike vectors at each point, and each tangent space has signature $(-,+,+,+)$.

[F3] [[def-countable-choice]]: the background axiom is countable choice $\mathrm{AC}_\omega$; no additional choice principle is assumed.

[F4] [[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]: the metric-selected connection is metric compatible and torsion free, so $\nabla_ag_{bc}=0$ and the Hessian of a scalar is symmetric.

[F5] [[lem-gr-observer-projection-decomposition]]: for a unit future timelike $n$, $T_pM=\mathbb Rn\oplus n^\perp$, the restriction of $g$ to $n^\perp$ is positive definite, and $g(v,v)=-\alpha^2+|w|^2$ when $v=\alpha n+w$.

[F6] [[thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces]]: on the positive-definite rest space $n^\perp$, $|du(w)|\le |w|\,|du|_{n^\perp}$.

[F7] [[def-gr-observer-and-rest-space]]: an observer is a future unit timelike vector, and its rest space is $n^\perp$.

[A1] $\Box_g u=Vu+s$ on $\mathcal U$, with $u,V,s$ smooth and real, as required in the Statement.

[A2] For the positivity conclusion only, $V\ge0$ at the point, $n$ is a future unit timelike vector, and $X$ is timelike with $-g(X,n)>0$.

## Proof

1.1 Metric compatibility and the product rule give
$$\nabla^aT_{ab}=(\Box_g u)\nabla_bu+\nabla^a u\,\nabla_a\nabla_bu-\frac12\nabla_b(|du|_g^2)-\frac12\nabla_b(Vu^2).$$
For a scalar, the Hessian is symmetric and $\nabla_b(|du|_g^2)=2\nabla^a u\,\nabla_b\nabla_a u$, so the middle two terms cancel. Substituting $\Box_g u=Vu+s$ into the remaining terms yields $\nabla^aT_{ab}=s\nabla_bu-\tfrac12u^2\nabla_bV$. [given, F1, F3, F4, A1, algebra]

2.1 By the product rule,
$$\nabla_aJ_X^a=(\nabla^aT_{ab})X^b+T_{ab}\nabla^aX^b.$$
The tensor $T$ is symmetric, so its contraction with $\nabla^aX^b$ equals its contraction with $\nabla^{(a}X^{b)}$, which is $K_X$. Substituting step 1.1 gives the claimed divergence identity. If $\nabla_{(a}X_{b)}=0$, then $K_X=0$, and the stated divergence-free case follows. [step 1.1, F1, algebra]

3.1 Decompose $X=\alpha n+w$ with $w\in n^\perp$ by [F5]. By [A2], $\alpha=-g(X,n)>0$, and timelikeness gives $|w|<\alpha$. Put $A:=n(u)$, and let $|du|_{n^\perp}$ be the norm of the restriction of $du$ to the positive-definite rest space, using its dual metric. By the definition of $T$ and the orthogonal decomposition,
$$T_{ab}n^a n^b=\frac12\bigl(A^2+|du|_{n^\perp}^2+Vu^2\bigr),\qquad T_{ab}w^a n^b=w(u)A.$$
Therefore [F6] and $2|A||du|_{n^\perp}\le A^2+|du|_{n^\perp}^2$ give
$$T_{ab}X^a n^b\ge\frac12(\alpha-|w|)\bigl(A^2+|du|_{n^\perp}^2\bigr)+\frac12\alpha Vu^2\ge0.$$
This is the required pointwise positivity. [given, F2, F5, F6, F7, A2, algebra] ∎

## Remarks

This is a conditional identity for the stated scalar equation. It does not assert that any particular coupled Einstein–Maxwell perturbation has this scalar form.
