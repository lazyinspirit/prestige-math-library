---
id: prop-emg-xs-kn-dyonic-flux
kind: proposition
title: Dyonic Kerr-Newman parameters and conserved electric/magnetic flux
status: draft
origin: pipeline
pipeline_run: physics-remaining-80-2026-10-17
domain: mathematics
library: mathematics
dependency_level: 7
deps:
  - def-emg-xs-kn-full-sphere-exterior
  - thm-emg-xs-kn-verification
  - lem-emg-xs-duality
  - lem-emg-maxwell-current-forms
  - lem-emg-gauss-finite-chain
  - def-emg-finite-real-supremum-domain
  - def-emg-real-metric-axiom-convention
  - lem-emg-metric-axioms-imply-nonnegativity
  - def-emg-explicit-power-regimes
  - lem-emg-sequence-limit-criterion-with-choice
  - def-emg-boundaryless-completeness-domain
  - def-emg-set-size-and-class-schema
dependency_roles:
  thm-emg-xs-kn-verification: mathematical-premise
  lem-emg-xs-duality: mathematical-premise
  lem-emg-gauss-finite-chain: mathematical-premise
  def-emg-finite-real-supremum-domain: mathematical-premise
  def-emg-real-metric-axiom-convention: mathematical-premise
  lem-emg-metric-axioms-imply-nonnegativity: mathematical-premise
  def-emg-explicit-power-regimes: mathematical-premise
  lem-emg-sequence-limit-criterion-with-choice: mathematical-premise
  def-emg-boundaryless-completeness-domain: mathematical-premise
  def-emg-set-size-and-class-schema: mathematical-premise
  lem-emg-maxwell-current-forms: mathematical-premise
  def-emg-xs-kn-full-sphere-exterior: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tim Adamo and E. T. Newman, The Kerr-Newman Metric: A Review, arXiv:1410.6626v2"
      url: https://arxiv.org/pdf/1410.6626
      locator: "Sections 2.1-2.2, printed pp. 4-11 (PDF pp. 5-12): the KN metric, Maxwell field and direct Newman-Penrose verification"
    - title: S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1
      url: https://arxiv.org/pdf/gr-qc/9712019
      locator: "Chapter 7, equations (7.106)-(7.113), printed pp. 201-203 (PDF pp. 207-209): the dyonic RN field and finite-charge context"
physical_scope: null
---


## Statement

Let $M,a,q\in\mathbb R$ and use the full-sphere exterior extension
[[def-emg-xs-kn-full-sphere-exterior]] with parameters $(M,a,q)$ on an annulus
$r\in(R_0,R_1)\subset(0,\infty)$ where $\Delta>0$. For example, take
$R_0=4|M|+1$. For every $r>R_0$, $1-2M/r>1/2$ and
$(a^2+q^2)/r^2\ge0$, so $\Delta/r^2>1/2$. For constant
$\beta\in\mathbb R$,
the dual-rotated field $\mathcal F_\beta=\cos\beta\,\mathcal F+
\sin\beta\,\star_g\mathcal F$ has flux parameters
$$q_e=q\cos\beta,\qquad q_m=q\sin\beta.$$
The metric depends on these two parameters only through
$q_e^2+q_m^2=q^2$. The unrotated electric field has zero magnetic sphere flux
and electric sphere flux $4\pi q$. Flux conservation is asserted only between
finite homologous exterior spheres; no quantization or noncompact side-flux
claim is made.

## Facts & Assumptions

**Given:** The electric KN datum, its source-free field equations, a full
sphere $S_r$ in an exterior annulus, and a constant duality angle $\beta$.

[F1] [[thm-emg-xs-kn-verification]]: the electric KN equations hold on every
pole-free chart and on the full-sphere exterior extension.

[F2] [[lem-emg-xs-duality]]: a constant dual rotation preserves the source-free
Maxwell equations and the tensor $Q_{ab}$.

[F3] [[def-emg-xs-kn-full-sphere-exterior]]: on $r>R_0>4|M|$ the metric and
potential extend smoothly across both poles; $\lambda=X\,dY-Y\,dX$ is the
global form agreeing with $\sin^2\theta\,d\phi$ away from the poles.

[L1] [[lem-emg-gauss-finite-chain]] (present batch-3 draft; proof is
AI-generated and not independently accepted): for a finite smooth singular
three-chain $\Sigma$, assuming $dF=0$ and
$\nabla_aF^{ab}=-\mu_0j^b$, it gives
$Q(\Sigma)=(\mu_0c)^{-1}\int_{\partial\Sigma}\star_gF$ with
$Q(\Sigma)=c^{-1}\int_\Sigma\iota_j\mathrm{vol}_g$; a finite four-chain
boundary relation gives the corresponding finite side-flux balance. Its proof
uses the current-forms draft and Stokes on finite chains, and supplies no
noncompact exhaustion claim.

[L2] [[lem-emg-maxwell-current-forms]] (present batch-3 draft; proof is
AI-generated and not independently accepted): for smooth fields,
$d(\star_gF)=-\iota_v\mathrm{vol}_g$ where
$v^b=\nabla_aF^{ab}$; thus with $j=0$, $d(\star_gF)=0$ implies
$\nabla_aF^{ab}=0$. Its hypotheses include the adopted signature, orientation,
and $\mu_0>0$.

[A1] $R_0=4|M|+1$ (or any larger value), so $r>R_0$ implies $\Delta>0$.
The rational Boyer-Lindquist formulas are used only on $0<\theta<\pi$;
the global fields at the poles are those of [F3]. Fix arbitrary $c,\mu_0>0$
for the conditional finite-chain suppliers; no SI value is selected.

## Proof


1.1 On the sphere let $X=\sin\theta\cos\phi$ and $Y=\sin\theta\sin\phi$. Then $\lambda=X\,dY-Y\,dX=\sin^2\theta\,d\phi$ away from the poles, and [F3] proves this is a global smooth one-form. The global potential $\bar{\mathcal A}=-qr\Sigma^{-1}(dx^0-a\lambda)$ is smooth since $\Sigma>0$. Hence $\bar{\mathcal F}=d\bar{\mathcal A}$ and Stokes on the closed sphere gives $\int_{S_r}\bar{\mathcal F}=0$. [F1, F3, A1, algebra]

1.2 In the oriented $(x^0,r,\theta,\phi)$ coordinates, direct raising of $\mathcal F_{r0}=q(r^2-a^2y^2)/\Sigma^2$ and $\mathcal F_{r\phi}=-a\sin^2\theta\,\mathcal F_{r0}$ with the KN inverse metric gives $$(\star_g\mathcal F)_{\theta\phi} =\frac{q(r^2+a^2)(r^2-a^2y^2)\sin\theta}{\Sigma^2} =q\sin\theta+O(r^{-2})\sin\theta,$$ The numerator factor minus $\Sigma^2$ is $a^2r^2(1-3y^2)-a^4y^2(1+y^2)$, whose absolute value is at most $2a^2r^2+2a^4$ for $|y|\le1$. Since $\Sigma^2\ge r^4$, the remainder is uniformly $O(r^{-2})$ on the sphere. Hence $\lim_{r\to\infty}(4\pi)^{-1}\int_{S_r}\star_g\mathcal F=q$. [F1, A1, algebra]

2.1 For $R_0<r_1<r_2$, triangulate $S^2$ by its eight octahedral faces; radial projection of each planar face to $S^2$ is smooth because the face plane stays a positive distance from the origin. The product of each face with $[r_1,r_2]$ is a triangular prism, which splits into three tetrahedra. Their oriented sum is a finite smooth singular three-chain: internal faces cancel and its boundary is $S_{r_2}-S_{r_1}$. By steps 1.1-1.2, $d\mathcal F=0$ and $d(\star_g\mathcal F)=0$. Apply the current-forms equivalence [L2] with $j=0$ to obtain $\nabla_a\mathcal F^{ab}=0$, then apply the actual finite-chain draft [L1] to this chain. Its charge integral is zero, so the two sphere fluxes are equal. Step 1.2 identifies their common value as $4\pi q$. [F1, F3, L1, L2, A1, step 1.1, step 1.2, algebra]

3.1 The fluxes of $\mathcal F_\beta$ satisfy $\star_g\mathcal F_\beta=\cos\beta\,\star_g\mathcal F-\sin\beta\,\mathcal F$ by [F2]. Dividing the two sphere integrals by $4\pi$ and using steps 1.1 and 2.1 gives $q_e=q\cos\beta$ and $q_m=q\sin\beta$. [F2, step 1.1, step 2.1, algebra]

4.1 The metric function $\Delta=r^2-2Mr+a^2+q^2$ is unchanged because $q_e^2+q_m^2=q^2(\cos^2\beta+\sin^2\beta)=q^2$. The stress tensor is unchanged by [F2], so the same metric satisfies the dyonic geometric electrovac equations. This is a classical flux normalization; no integrality condition follows. [F1, F2, step 3.1, algebra] ∎

## Remarks

The asymptotic limit is used only to evaluate the electric flux constant on a
finite exterior sphere. It is not an assertion of charge conservation on an
arbitrary noncompact region.

