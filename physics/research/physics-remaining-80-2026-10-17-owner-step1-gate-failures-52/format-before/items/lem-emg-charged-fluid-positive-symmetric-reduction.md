---
id: lem-emg-charged-fluid-positive-symmetric-reduction
kind: lemma
title: "Strict charged-fluid symmetric reduction"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps:
  - def-emg-strict-charged-barotropic-system
  - def-countable-choice
  - def-gr-barotropic-enthalpy-variable
  - lem-gr-barotropic-fluid-symmetric-hyperbolic-system
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  lem-gr-barotropic-fluid-symmetric-hyperbolic-system: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Yvonne Choquet-Bruhat, Introduction to General Relativity, Black Holes, and Cosmology (Oxford, 2015), Chapter IX: Relativistic fluids"
      url: "https://inspirehep.net/files/b6b9e25e70e9a80e6aa13c2611ae4a76"
    - title: "Daniela Pugliese and Juan A. Valiente Kroon, On the evolution equations for ideal magnetohydrodynamics in curved spacetime, arXiv:1112.1525v1 (2011)"
      url: "https://arxiv.org/pdf/1112.1525"
verification:
  precheck: pending
---

## Statement

Assume Countable Choice for the enthalpy integral. Let smooth fields satisfy [[def-emg-strict-charged-barotropic-system]], with $\epsilon\in J$, $u$ future unit timelike, and $0<p'(\epsilon)<1$. Put $c_s=\sqrt{p'(\epsilon)}$ and use the enthalpy coordinate

$$r(\epsilon)=\int_{\epsilon_*}^{\epsilon}\frac{\sqrt{p'(z)}}{z+p(z)}\,dz.$$

On a local chart with a smooth frame $e_1,e_2,e_3$ for the positive-definite subbundle $u^\perp$, the energy and momentum equations are equivalent to

$$u^a\nabla_a r+c_s\nabla_a u^a=0,\qquad u^a\nabla_a u_b+c_s(\delta_b{}^a+u_bu^a)\nabla_a r=\frac{F_{bc}j^c}{\epsilon+p},\qquad u^a\nabla_aZ=0.$$

In smooth local coordinates on the unit-velocity hyperboloid, the principal bilinear form on fluid variations $(a,v,z)$ and $(a',v',z')$, with $v,v'\in u^\perp$, is

$$Q_\zeta((a,v,z),(a',v',z'))=\zeta(u)\bigl(aa'+g(v,v')+zz'\bigr)+c_s\bigl(a\zeta(v')+a'\zeta(v)\bigr).$$

It is symmetric and positive definite for every timelike covector $\zeta$ with $\zeta(u)>0$. The Lorentz-force term is algebraic in $(g,F,\epsilon,u,Z)$ and therefore changes only the lower-order term. The transport equation for $Z$ contributes the positive scalar block $\zeta(u)$ and has no principal cross terms.

## Facts & Assumptions

**Given:** Countable Choice, the EOS and current of [[def-emg-strict-charged-barotropic-system]], a Lorentzian metric with signature $(-,+,+,+)$, and a future unit velocity $u$.

[F1] [[def-emg-strict-charged-barotropic-system]]: $\epsilon\in J$, $\epsilon+p>0$, $0<p'<1$, $g(u,u)=-1$, $j^a=cNZu^a$, and $\nabla^aT_{m,ab}=F_{bc}j^c$.

[F2] [[def-gr-barotropic-enthalpy-variable]]: Under Countable Choice, $r(\epsilon)=\int_{\epsilon_*}^{\epsilon}\sqrt{p'(z)}/(z+p(z))\,dz$ is a smooth increasing coordinate on $J$ with $r'=c_s/(\epsilon+p)>0$, and the unforced barotropic equations in $(r,u)$ are equivalent to the enthalpy equations.

[F3] [[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]]: For $0<c_s<1$ and a future unit velocity, the uncharged $(r,u)$ block has symmetric principal bilinear form $\zeta(u)(aa'+g(v,v'))+c_s(a\zeta(v')+a'\zeta(v))$ on $u^\perp$ variations; for future-positive timelike $\zeta$, it is positive definite.

## Proof

**Proof technique:** direct.

1.1 The change of variable and derivative formula in [F2] give $\nabla_a r=c_s\nabla_a\epsilon/(\epsilon+p)$. Contracting the matter balance of [F1] with $u^b$ eliminates $u^bF_{bc}j^c$ by antisymmetry and gives $u\epsilon+(\epsilon+p)\nabla_a u^a=0$. Orthogonally projecting the same balance gives $(\epsilon+p)u^a\nabla_a u_b+(\delta_b{}^a+u_bu^a)\nabla_a p=F_{bc}j^c$. Since $\nabla_a p=p'\nabla_a\epsilon=(\epsilon+p)c_s\nabla_a r$, division by $\epsilon+p>0$ yields the displayed charged enthalpy equations reversibly; the $Z$ equation is unchanged. The extra force is algebraic, so this has the same principal $(r,u)$ equations as the uncharged system in [F3]. [F1, F2, F3, algebra]

2.1 Choose smooth local coordinates $y^A$ on the future unit-velocity hyperboloid and write $e_A=\partial u/\partial y^A$. Differentiating $g(u,u)=-1$ with the metric fixed gives $g(u,e_A)=0$, so $(e_A)$ spans $u^\perp$. By [F3], the four $(r,y^A)$ principal matrices are symmetric with covector contraction equal to its stated bilinear form. The independent equation $u^\mu\partial_\mu Z=0$ adds $A^\mu_{ZZ}=u^\mu$ and zero cross entries; hence the combined matrices remain symmetric. In the coupled metric reduction, metric derivatives in the connection and in the local velocity coordinates are lower-order state terms once the first metric derivatives are included as state variables. [F1, F3, algebra]

3.1 For a future-positive timelike covector $\zeta$, the $(r,u)$ block in [F3] is positive definite. Its orthogonal direct sum with the $Z$ block has quadratic form $Q_\zeta((a,v,z),(a,v,z))=Q^{(r,u)}_\zeta((a,v),(a,v))+\zeta(u)z^2$, with $\zeta(u)>0$. It is therefore positive definite. This proves the symmetric reduction and positivity; the Lorentz force remains a lower-order source. [step 2.1, F3, algebra] ∎
