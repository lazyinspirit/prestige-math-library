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
  - thm-ftc-first-part
  - thm-smooth-inverse-function-theorem-on-manifolds
  - lem-gr-observer-projection-decomposition
dependency_roles:
  def-emg-strict-charged-barotropic-system: mathematical-premise
  def-countable-choice: mathematical-premise
  thm-ftc-first-part: mathematical-premise
  thm-smooth-inverse-function-theorem-on-manifolds: mathematical-premise
  lem-gr-observer-projection-decomposition: mathematical-premise
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
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

[F2] [[thm-ftc-first-part]]: If the integrand is continuous on the interval between a base point and the variable endpoint, the derivative of its integral function at an interior endpoint is the integrand value.

[F3] [[thm-smooth-inverse-function-theorem-on-manifolds]]: A smooth map whose differential is an isomorphism at a point restricts near that point to a smooth diffeomorphism onto an open neighborhood. In one dimension this applies when $r'(\epsilon)>0$.

[F4] [[lem-gr-observer-projection-decomposition]]: For a future unit observer $u$, $T_xM=\mathbb Ru\oplus u^\perp$, and the restriction of $g$ to the three-dimensional rest space $u^\perp$ is positive definite.

## Proof

**Proof technique:** direct.

1.1 Put $q(\epsilon)=\sqrt{p'(\epsilon)}/(\epsilon+p(\epsilon))$. It is smooth and positive on $J$, and its integral over each compact interval between $\epsilon_*$ and $\epsilon$ is finite. For each $\epsilon\in J$, choose a compact interval contained in $J$ whose interior contains both $\epsilon_*$ and $\epsilon$; [F2] on that interval gives $r'=q>0$. Since $r'=q$ is smooth, $r$ is smooth. For $\epsilon_1<\epsilon_2$, $r(\epsilon_2)-r(\epsilon_1)=\int_{\epsilon_1}^{\epsilon_2}q(z)\,dz>0$, so $r$ is injective; [F3] gives a smooth local inverse and an open image near every point. Continuity and the intermediate value theorem make $r(J)$ an interval, so it is an open interval. The local inverses agree on overlaps by injectivity, giving a smooth global inverse $r(J)\to J$; thus $r:J\to r(J)$ is a smooth diffeomorphism. In particular $\nabla_a r=c_s\nabla_a\epsilon/(\epsilon+p)$ and this change of variables is reversible on its image. [F1, F2, F3, algebra]

1.2 At a point choose local coordinates with $g_{00}<0$ and positive spatial block $(g_{ij})$, with the time direction future. For $y^i=u^i$, the future solution of $g_{ab}u^au^b=-1$ is
$$u^0=\frac{-g_{0i}y^i-\sqrt{(g_{0i}y^i)^2-g_{00}(1+g_{ij}y^iy^j)}}{g_{00}}.$$
The discriminant is positive, so this is smooth on its local state domain. Its three coordinate derivatives $e_A=\partial u/\partial y^A$ are linearly independent and satisfy $g(u,e_A)=0$ by differentiating the normalization with the metric fixed; by [F4] they form a basis of $u^\perp$. In the principal part, $\nabla_a u^b=e_A^b\partial_a y^A$ up to terms involving first derivatives of the metric state, and $\nabla_a r=\partial_a r$. Thus the energy row has coefficients $u^a$ on $\partial_a r$ and $c_s e_A^a$ on $\partial_a y^A$. Projecting the Euler row onto $e_B$ gives coefficients $c_s e_B^a$ on $\partial_a r$ and $u^a g(e_B,e_A)$ on $\partial_a y^A$. Therefore the four principal matrices are symmetric and their covector contraction on $(a,v)$ and $(a',v')$, with $v,v'\in u^\perp$, is exactly $\zeta(u)(aa'+g(v,v'))+c_s(a\zeta(v')+a'\zeta(v))$. The independent equation $u^a\partial_aZ=0$ adds the positive scalar block $\zeta(u)$ and zero cross entries. Connection terms, derivatives of the metric-dependent coordinates, and the Lorentz force are lower order once the metric first derivatives are included as state variables. [F1, F4, algebra]

2.1 Write $h=\epsilon+p(\epsilon)$, $D=u^a\nabla_a$, $\vartheta=\nabla_a u^a$, $a_b=Du_b$, and $f_b=F_{bc}j^c$. The product rule, metric compatibility, and $g(u,u)=-1$ give $\nabla^aT_{m,ab}=u_b(Dh+h\vartheta)+h a_b+\nabla_b p$, with $u^ba_b=0$. Contracting $\nabla^aT_{m,ab}=f_b$ with $u^b$ therefore yields $-Dh-h\vartheta+Dp=-D\epsilon-h\vartheta=0$, since $u^bf_b=0$ by antisymmetry of $F$. Applying $P_b{}^a=\delta_b{}^a+u_bu^a$ to the same balance gives $h a_b+P_b{}^a\nabla_a p=f_b$. Since $u(r)=c_su(\epsilon)/h$, $\nabla_a p=c_s h\nabla_a r$, and $h>0$, these equations are equivalent to the displayed charged enthalpy equations; $u(Z)=0$ is unchanged. The force $f_b$ is algebraic in the state and contributes no principal derivatives. [F1, step 1.1, algebra]

3.1 Apply Gram–Schmidt to the frame in the Statement using the positive inner product $g|_{u^\perp}$ from [F4], and at the point adjoin $u$ as the future time vector of a $g$-orthonormal frame. Write $\alpha=\zeta(u)>0$ and $\xi=\zeta|_{u^\perp}$. Timelike character of $\zeta$ means $|\xi|<\alpha$, since $g^{-1}(\zeta,\zeta)=-\alpha^2+|\xi|^2<0$. For $v\in u^\perp$, the elementary identity $|\xi|^2|v|^2-\xi(v)^2=\sum_{i<j}(\xi_i v_j-\xi_j v_i)^2\ge0$ gives $|\xi(v)|\le|\xi||v|$. Hence $Q_\zeta((a,v,z),(a,v,z))\ge\alpha\bigl((|a|-|v|)^2+2(1-c_s)|a||v|+z^2\bigr)$. Because $0<c_s<1$ and $\alpha>0$, this lower bound is positive for every nonzero $(a,v,z)$. This proves positive definiteness directly, without relying on the separate GR fluid positivity proof. [step 1.2, F4, algebra] ∎
