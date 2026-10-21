---
id: thm-ip-boundary-fixing-diffeomorphism-preserves-dn-map
kind: theorem
title: A boundary-fixing diffeomorphism preserves the anisotropic DN map
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - def-ip-anisotropic-conductivity-dirichlet-to-neumann-map
  - lem-ip-anisotropic-conductivity-map-wellposedness
  - def-wkp-zero-as-a-sobolev-closure
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-chain-rule-for-total-derivatives
  - thm-smooth-up-to-the-boundary-density-on-smooth-domains
  - thm-lp-trace-operator-on-a-bounded-c-one-domain
  - def-riemannian-metric-and-riemannian-manifold
  - def-pullback-riemannian-metric
  - def-riemannian-volume-density
  - def-axiom-of-choice
  - lem-ac-supplies-countable-and-dependent-choice-for-banach-integration
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikko Salo, The Calderón problem on Riemannian manifolds (2012)"
      url: "https://library.slmath.org/books/Book60/files/30salo.pdf"
    - title: "Thierry Daudé, Niky Kamran, and François Nicoleau, A survey of non-uniqueness results for the anisotropic Calderón problem with disjoint data (2018)"
      url: "https://arxiv.org/pdf/1803.00910"
---

## Statement

Assume the Axiom of Choice, hence Countable Choice. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded connected domain with smooth boundary, and let $\gamma\in C^\infty(\overline\Omega;\operatorname{Sym}_n(\mathbb R))$ be uniformly positive definite. Let $F:\overline\Omega\to\overline\Omega$ be a diffeomorphism smooth through the boundary, with smooth inverse and $F|_{\partial\Omega}=\operatorname{id}$. For $x=F(y)$, put $J_F(y)=|\det DF(y)|$ and define

$$ (F_*\gamma)(x)=\frac{DF(y)\,\gamma(y)\,DF(y)^T}{J_F(y)},\qquad y=F^{-1}(x). $$

Then $F_*\gamma$ is a smooth uniformly positive-definite matrix conductivity and its weak anisotropic Dirichlet-to-Neumann map equals that of $\gamma$. Explicitly, for every pair of boundary trace-data classes $f,h\in\mathcal B_\Omega:=H^1(\Omega)/H_0^1(\Omega)$,

$$\langle\Lambda_{F_*\gamma}f,h\rangle=\langle\Lambda_\gamma f,h\rangle,$$

where each map is the weak energy form $\langle\Lambda_\gamma f,h\rangle=\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\nabla V_h\,dx$, $u_{\gamma,f}$ is the unique weak solution with boundary class $f$, and $V_h$ is any $H^1$ representative of $h$.

The same gauge invariance has a Riemannian form. Let $M$ be a compact smooth manifold with boundary, $g$ a smooth Riemannian metric, $\Gamma\subseteq\partial M$ relatively open, and $\Phi:M\to M$ a smooth diffeomorphism with $\Phi|_\Gamma=\operatorname{id}$. Define $(\Phi^*g)_p(v,w):=g_{\Phi(p)}(D\Phi_pv,D\Phi_pw)$. The cotangent inner product $\langle\cdot,\cdot\rangle_g$ is induced by $g^{-1}$, and in coordinates $dV_g=\sqrt{\det(g_{ij})}|dx^1\cdots dx^n|$. A smooth function $u$ is $g$-harmonic when $\int_M\langle du,d\psi\rangle_g\,dV_g=0$ for every $\psi\in C_c^\infty(M^\circ)$. Then $u\circ\Phi$ is $\Phi^*g$-harmonic; for any two smooth $g$-harmonic functions $u,v$,

$$\int_M\langle d(u\circ\Phi),d(v\circ\Phi)\rangle_{\Phi^*g}\,dV_{\Phi^*g}=\int_M\langle du,dv\rangle_g\,dV_g.$$

If the boundary traces of $u,v$ are supported in $\Gamma$, then composition by $\Phi$ leaves both traces fixed, so the local energy measurement of every such smooth harmonic pair is unchanged. In particular, if for each $f\in C_c^\infty(\Gamma)$ the Dirichlet solutions for $g$ and $\Phi^*g$ with trace $f$ are unique and smooth, then the corresponding local energy DN maps agree.

## Statement references

[[def-ip-anisotropic-conductivity-dirichlet-to-neumann-map|Anisotropic conductivity and weak DN map]]

[[lem-ip-anisotropic-conductivity-map-wellposedness|Weak well-posedness for matrix conductivities]]

[[def-riemannian-metric-and-riemannian-manifold|Riemannian metric and Riemannian manifold]]

[[def-pullback-riemannian-metric|Pullback of a Riemannian metric]]

[[def-riemannian-volume-density|Riemannian volume density]]

[Salo, §1, pp. 170–171](https://library.slmath.org/books/Book60/files/30salo.pdf)

[Daudé, Kamran, and Nicoleau, §1, equation (1.6)](https://arxiv.org/pdf/1803.00910)

[[def-axiom-of-choice|Axiom of Choice]]

[[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration|Axiom of Choice implies Countable Choice]]

## Facts & Assumptions

**Given:** The Axiom of Choice; the Euclidean domain, matrix coefficient, and boundary-fixing diffeomorphism $F$ in the first clause; and, for the Riemannian clause, a compact smooth manifold $M$ with boundary, a smooth metric $g$, a relatively open patch $\Gamma$, a diffeomorphism $\Phi$ fixing $\Gamma$, and smooth $g$-harmonic functions $u,v$.

[A1] The Axiom of Choice; it supplies the Choice assumption carried by the Sobolev trace and matrix well-posedness interfaces. ([[def-axiom-of-choice]])

[F1] For $f=[U]\in\mathcal B_\Omega$, $u_{\gamma,f}$ is the unique $H^1$ class with $[u_{\gamma,f}]=f$ and $\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\nabla\varphi=0$ for every $\varphi\in H_0^1$; the DN form is $\langle\Lambda_\gamma f,h\rangle=\int_\Omega\gamma\nabla u_{\gamma,f}\cdot\nabla V_h$ for any representative $V_h$ of $h$. ([[def-ip-anisotropic-conductivity-dirichlet-to-neumann-map]])

[F2] Every boundary class has a unique weak solution for a smooth uniformly positive-definite matrix coefficient, and the energy pairing is independent of the representative and bounded. ([[lem-ip-anisotropic-conductivity-map-wellposedness]])

[F3] For differentiable maps, the derivative of a composition is the composition of derivatives: $D(g\circ f)(a)=Dg(f(a))\circ Df(a)$. On smooth coordinate patches this gives $\nabla(u\circ F^{-1})(F(y))=DF(y)^{-T}\nabla u(y)$. ([[thm-chain-rule-for-total-derivatives]])

[F4] If $T:U\to V$ is a $C^1$ diffeomorphism and $q:V\to[0,\infty]$ is measurable, then $\int_Vq(x)\,dx=\int_Uq(T(y))|\det DT(y)|\,dy$. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]])

[F5] Restrictions of ambient smooth functions are dense in $H^1(\Omega)$. ([[thm-smooth-up-to-the-boundary-density-on-smooth-domains]])

[F6] The trace is bounded from $H^1(\Omega)$ to $L^2(\partial\Omega)$ and agrees with classical boundary restriction on continuous Sobolev functions. ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]])

[F7] $H_0^1(\Omega)$ is the $H^1$-closure of $C_c^\infty(\Omega)$. ([[def-wkp-zero-as-a-sobolev-closure]])

[F8] For a smooth map $\Phi$ and a Riemannian metric $g$, the pullback tensor is $(\Phi^*g)_p(v,w)=g_{\Phi(p)}(D\Phi_pv,D\Phi_pw)$. ([[def-pullback-riemannian-metric]])

[F9] In a coordinate chart, the Riemannian volume density is $dV_g=\sqrt{\det(g_{ij})}|dx^1\cdots dx^n|$. ([[def-riemannian-volume-density]])

[F10] A Riemannian metric is a smooth symmetric positive-definite covariant two-tensor; its inverse induces the inner product on covectors used in the energy. ([[def-riemannian-metric-and-riemannian-manifold]])

[F11] The Axiom of Choice implies Countable Choice, which supplies the Countable-Choice hypothesis of [F4]. ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]])

**Choice accounting:** AC is used only through the Euclidean Sobolev trace and forward well-posedness interfaces in [F1]–[F2]; the smooth Riemannian pullback identity in steps 1.2, 2.2, 5.1 is choice-free.

## Proof

1.1 The pushforward coefficient is admissible. Since $F$ and $F^{-1}$ are smooth on the compact closure, $DF$, $DF^{-1}$, $J_F$, and $J_F^{-1}$ are bounded, with $J_F$ positive. The formula in the statement is smooth. For each $\xi\in\mathbb R^n$ and $x=F(y)$, $\xi^T(F_*\gamma)(x)\xi= (DF(y)^T\xi)^T\gamma(y)(DF(y)^T\xi)/J_F(y)$; the ellipticity of $\gamma$ and the uniform upper and lower singular-value bounds for $DF$ and $J_F$ give positive finite uniform ellipticity constants for $F_*\gamma$. [given, construct, algebra]

1.2 In the Riemannian setting of the statement, the chain rule [F3] gives $d(u\circ\Phi)=D\Phi^T(du\circ\Phi)$ in a coordinate chart, while [F8] gives $(\Phi^*g)=D\Phi^T(g\circ\Phi)D\Phi$. Thus $(\Phi^*g)^{-1}=D\Phi^{-1}(g^{-1}\circ\Phi)D\Phi^{-T}$, and multiplication shows $\langle d(u\circ\Phi),d(v\circ\Phi)\rangle_{\Phi^*g}=(\langle du,dv\rangle_g)\circ\Phi$. The determinant formula [F9] gives $dV_{\Phi^*g}=|\det D\Phi|(dV_g\circ\Phi)$, with the absolute Jacobian and no orientation choice. [F3, F8, F9, F10, algebra]

2.1 Composition by $F^{-1}$ and by $F$ is bounded on $H^1(\Omega)$. For ambient smooth $u$, the chain rule [F3] and change of variables [F4], whose choice hypothesis follows from [A1] by [F11], yield $\int_\Omega(|u\circ F^{-1}|^2+|\nabla(u\circ F^{-1})|^2)\,dx\le C_F\int_\Omega(|u|^2+|\nabla u|^2)\,dy$, because $DF^{\pm1}$ and $J_F^{\pm1}$ are bounded; the nonnegative change-of-variables formula applies to the displayed squared terms. By [F5], smooth functions are dense in $H^1$; extending this estimate to limits defines the bounded compositions for every $H^1$ class. For smooth approximants $u_k$, the pointwise boundary identity $(u_k\circ F^{-1})|_{\partial\Omega}=u_k|_{\partial\Omega}$ holds since $F^{-1}$ fixes $\partial\Omega$. Continuity of the trace [F6] and convergence of both compositions in $H^1$ therefore give $T(u\circ F^{-1})=Tu$. The same argument with $F$ in place of $F^{-1}$ gives $T(u\circ F)=Tu$. Finally, if $\phi\in C_c^\infty(\Omega)$, then $\phi\circ F^{-1}$ and $\phi\circ F$ are smooth and compactly supported in $\Omega$, because $F$ maps the interior to itself and maps compact sets to compact sets. Applying bounded composition to sequences converging in [F7] proves that both compositions preserve $H_0^1(\Omega)$. [A1, F3, F4, F5, F6, F7, F11, step 1.1, construct] The weak-gradient chain rule and the energy change-of-variables identity also extend to all $H^1$ classes. Given $u\in H^1(\Omega)$, choose ambient smooth restrictions $u_k\to u$ in $H^1$ by [F5]. For each $k$, the classical chain rule gives $$\nabla(u_k\circ F^{-1})(F(y))=DF(y)^{-T}\nabla u_k(y),\qquad \nabla(u_k\circ F)(y)=DF(y)^T\nabla u_k(F(y)).$$ The composition estimates just established give convergence of the left sides in $L^2$; the uniform bounds on $DF^{\pm1}$ and the Jacobian, together with [F4], give convergence of the right sides in $L^2$. Passing to the limits identifies the weak gradients of $u\circ F^{-1}$ and $u\circ F$ by the same formulas. Applying these identities to $u,v\in H^1(\Omega)$ and using [F4] on the positive and negative parts of the integrable energy density yields $$\int_\Omega(F_*\gamma)(x)\nabla(u\circ F^{-1})(x)\cdot\nabla(v\circ F^{-1})(x)\,dx=\int_\Omega\gamma(y)\nabla u(y)\cdot\nabla v(y)\,dy.$$ Integrability follows from boundedness of the coefficients and Cauchy--Schwarz. [A1, F3, F4, F5, F11, step 1.1, construct]

2.2 The pointwise density identity in step 1.2 makes the left density the pullback of $\langle du,dv\rangle_g\,dV_g$. The boundary has zero Riemannian volume: in each boundary chart it is contained in a coordinate hyperplane, which has Lebesgue measure zero by Fubini, and the smooth volume density is locally bounded. Cover $M$ by finitely many source neighborhoods each lying in a chart and mapped by $\Phi$ into another chart; such neighborhoods exist by continuity and compactness. Partition their interiors into finitely many disjoint measurable pieces subordinate to this cover. On each piece apply the Euclidean change-of-variables formula [F4], whose choice hypothesis follows from [A1] by [F11], to the positive and negative parts of the smooth integrand, extended by zero within the corresponding chart. Summing the finitely many equalities and ignoring the null boundary gives $\int_M\langle d(u\circ\Phi),d(v\circ\Phi)\rangle_{\Phi^*g}\,dV_{\Phi^*g}=\int_M\langle du,dv\rangle_g\,dV_g$. [A1, F4, F8, F9, F11, step 1.2, construct]

3.1 Let $f\in\mathcal B_\Omega$ and let $u=u_{\gamma,f}$. Set $v=u\circ F^{-1}$. By step 2.1 its boundary class is $f$. For any $\varphi\in H_0^1(\Omega)$, $\varphi\circ F\in H_0^1(\Omega)$ by step 2.1. The energy identity of step 2.1, with second input $\varphi\circ F$, gives $\int_\Omega(F_*\gamma)(x)\nabla v(x)\cdot\nabla\varphi(x)\,dx=\int_\Omega\gamma(y)\nabla u(y)\cdot\nabla(\varphi\circ F)(y)\,dy=0$. The matrix factors cancel because $DF^TDF^{-T}=I$, and the Jacobian $J_F$ in $dx$ cancels the denominator in $F_*\gamma$. Thus $v$ is the weak solution with coefficient $F_*\gamma$ and boundary class $f$; uniqueness [F2] identifies $v=u_{F_*\gamma,f}$. [A1, F1, F2, F3, F4, F11, step 2.1, algebra]

4.1 Fix any $h\in\mathcal B_\Omega$ and a representative $V_h\in H^1(\Omega)$. Since $F$ fixes the boundary, step 2.1 gives $V_h\circ F$ the same boundary class $h$. The energy identity of step 2.1, with second input $V_h\circ F$, and the solution identification in step 3.1 give $\langle\Lambda_{F_*\gamma}f,h\rangle=\int_\Omega(F_*\gamma)\nabla(u\circ F^{-1})\cdot\nabla V_h\,dx=\int_\Omega\gamma\nabla u\cdot\nabla(V_h\circ F)\,dy=\langle\Lambda_\gamma f,h\rangle$. This holds for every $f,h$, so the bounded bilinear maps are equal. [A1, F1, F2, F3, F4, F11, step 2.1, step 3.1, algebra]

5.1 If $u$ is smooth and $g$-harmonic, then for any $\psi\in C_c^\infty(M^\circ)$, $\psi\circ\Phi^{-1}$ is also smooth and compactly supported in $M^\circ$. Applying the identity of step 2.2 to $u$ and $\psi\circ\Phi^{-1}$ yields $\int_M\langle d(u\circ\Phi),d\psi\rangle_{\Phi^*g}\,dV_{\Phi^*g}=0$, so $u\circ\Phi$ is $\Phi^*g$-harmonic. Because $\Phi$ fixes $\Gamma$ and is bijective, it maps $\partial M\setminus\Gamma$ to itself; therefore it leaves unchanged every boundary function supported in $\Gamma$. Step 2.2 gives equality of the local measurements for every such pair. When the stated Dirichlet solutions are unique, these harmonicity and trace facts identify the solution for $\Phi^*g$ with the pullback of the solution for $g$, so their local energy maps agree. [F3, step 2.2, algebra, given] ∎

