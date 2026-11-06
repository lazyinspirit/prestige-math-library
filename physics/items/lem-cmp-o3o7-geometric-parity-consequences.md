---
id: lem-cmp-o3o7-geometric-parity-consequences
kind: lemma
title: "Geometric parity consequences of an O3/O7 involution"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: ZF; no choice principle is used.
deps:
  - thm-holomorphic-inverse-function-theorem-several-variables
  - lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary
  - lem-euclidean-stokes-for-a-compactly-supported-form
dependency_roles:
  thm-holomorphic-inverse-function-theorem-several-variables: mathematical-premise
  lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary: mathematical-premise
  lem-euclidean-stokes-for-a-compactly-supported-form: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Thomas W. Grimm and Jan Louis, The effective action of N=1 Calabi-Yau orientifolds, arXiv:hep-th/0403067v3"
      url: "https://arxiv.org/pdf/hep-th/0403067v3"
      locator: "§3 opening and §3.1, PDF pp. 7–10; O3/O7 projection, Hodge eigenspaces, and fixed-locus dimensions."
    - title: "Mariana Graña, Athanasia Ksagoni, Praxitelis Ntokos, and Hagen Triendl, String Theory Compactifications, SpringerBriefs in Physics (2017)"
      url: "https://djvu.online/file/qufswWArYbwIP"
      locator: "§6.1, printed pp. 62–64; holomorphic involution, O3/O7 projection, and even/odd harmonic-form sectors."
---

## Statement

Let $X$ be a compact smooth complex threefold without boundary, with complex structure $I$, a Kähler metric $g$ (a positive Riemannian metric satisfying $g(Iu,Iv)=g(u,v)$ whose fundamental two-form $J(u,v)=g(Iu,v)$ is closed), and a nowhere-zero holomorphic three-form $\Omega$. Give $X$ its complex orientation and interpret integrals as the choice-free finite-chart compact-support integrals (every smooth form on compact $X$ has compact support). Let $\sigma:X\to X$ be a holomorphic isometry with $\sigma^2=\operatorname{id}$, $\sigma^*J=J$, and $\sigma^*\Omega=-\Omega$. Write $\mathcal A^{p,q}(X)=\Gamma^\infty(X,\Lambda^pT^{*1,0}X\otimes\Lambda^qT^{*0,1}X)$ for smooth complex-valued forms of bidegree $(p,q)$, and let $\bar\partial$ be the Dolbeault differential. Define
$$H^{p,q}(X)=\ker(\bar\partial:\mathcal A^{p,q}(X)\to\mathcal A^{p,q+1}(X))/\operatorname{im}(\bar\partial:\mathcal A^{p,q-1}(X)\to\mathcal A^{p,q}(X)),$$
with $\mathcal A^{p,-1}(X)=0$. Let $d_g^*$ be the formal adjoint of the exterior derivative $d$ for the $L^2$ inner product induced by $g$ and the complex orientation, and put $\Delta_g=dd_g^*+d_g^*d$ on smooth complex-valued forms. Define $\mathcal H_g^{p,q}(X)=\{\eta\in\mathcal A^{p,q}(X):\Delta_g\eta=0\}$. The pullback action of $\sigma$ on $H^{p,q}(X)$ is the one induced by its action on Dolbeault classes. Then:

1. Both $H^{p,q}(X)$ and $\mathcal H_g^{p,q}$ split as the direct sum of the $+1$ and $-1$ eigenspaces of $\sigma^*$.
2. For smooth real two-forms $\omega_\alpha,\omega_a\in\Gamma^\infty(X,\Lambda^2T^*X)$ satisfying $\sigma^*\omega_\alpha=\omega_\alpha$ and $\sigma^*\omega_a=-\omega_a$, use Greek indices for the even forms and lowercase Latin indices for the odd forms, and set $\kappa_{ABC}=\int_X\omega_A\wedge\omega_B\wedge\omega_C$. This integral vanishes whenever an odd number of $A,B,C$ are odd; for closed forms this defines the real triple intersection pairing on $H^2_{\mathrm{dR}}(X;\mathbb R):=\ker(d:\mathcal A^2(X;\mathbb R)\to\mathcal A^3(X;\mathbb R))/d\mathcal A^1(X;\mathbb R)$ by $([u],[v],[w])\mapsto\int_Xu\wedge v\wedge w$, independently of representatives. Here $\mathcal A^r(X;\mathbb R)$ denotes smooth real $r$-forms; no integral normalization or integrality is asserted.
3. With $\operatorname{Fix}(\sigma):=\{x\in X:\sigma(x)=x\}$, every connected component of $\operatorname{Fix}(\sigma)$ has complex dimension $0$ or $2$.

## Statement references

[[thm-holomorphic-inverse-function-theorem-several-variables]]

[Grimm and Louis, §3.1](https://arxiv.org/pdf/hep-th/0403067v3)

[Graña, Ksagoni, Ntokos, and Triendl, §6.1](https://djvu.online/file/qufswWArYbwIP)

[[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]]

[[lem-euclidean-stokes-for-a-compactly-supported-form]]

## Facts & Assumptions

**Given:** The compact complex threefold, Kähler metric, complex orientation, nowhere-zero holomorphic three-form, and holomorphic isometric involution with the pullback conditions in the Statement.

[A1] The pullback of forms and cohomology by $\sigma$ is the ordinary functorial pullback; $\sigma^2=\operatorname{id}$ is assumed in the Given clause.

[F1] [[thm-holomorphic-inverse-function-theorem-several-variables]] gives a biholomorphic local coordinate map for a holomorphic map between open subsets of $\mathbb C^m$ whose complex Jacobian is invertible at the chosen point.

[F2] [[lem-finite-chart-localization-for-compactly-supported-forms-on-manifolds-with-boundary]] supplies, in ZF, a finite smooth chart localization equal to one near any compact set, an intrinsic linear integral of compactly supported top forms, and its invariance under orientation-preserving diffeomorphisms. Its nonnegative integral is strictly positive on a nonzero nonnegative top form.

[F3] [[lem-euclidean-stokes-for-a-compactly-supported-form]] states that $\int_{\mathbb R^n}d\eta=0$ for every smooth compactly supported $(n-1)$-form, $n\ge1$.

## Proof

**Given:** The data and pullback conditions in the Statement.

1.1 At each point, the real determinant of a holomorphic differential is $|\det_{\mathbb C}D\sigma|^2>0$. Therefore $\sigma$ preserves the complex orientation, and the choice-free change-of-variables clause of [F2] gives $\int_X\sigma^*\eta=\int_X\eta$ for every smooth top-degree form $\eta$. [given, A1, F2, algebra]

1.2 Fix $p\in\operatorname{Fix}(\sigma)$ and set $A=D\sigma_p$. Holomorphicity makes $A$ complex-linear and $\sigma^2=\operatorname{id}$ gives $A^2=I$, so $A$ is diagonalizable with eigenvalues $+1$ and $-1$. The pullback condition on the nonzero three-form gives $\det_{\mathbb C}A=-1$; therefore the number $m$ of $-1$ eigenvalues is odd and, in complex dimension three, is either $1$ or $3$. The $+1$ eigenspace has complex dimension $2$ or $0$. [given, A1, algebra]

1.3 For any smooth real five-form $\theta$, take the finite chart localization $(\chi_i)$ of [F2] on compact $X$. Then $d\theta=\sum_i d(\chi_i\theta)$ since $\sum_i\chi_i=1$. In each boundaryless chart, the coordinate form $\chi_i\theta$ extends smoothly by zero to a compactly supported five-form on $\mathbb R^6$; [F3] makes its derivative integral zero. Locality and linearity in [F2] give $\int_Xd\theta=0$. For closed two-forms $u,v,w$, replacing $u$ by $u+d\lambda$ changes the triple integral by $\int_Xd(\lambda\wedge v\wedge w)=0$. Applying this successively in each argument proves representative independence and trilinearity of the stated real pairing. Only a finite family of charts is used, so no choice axiom is added. [given, F2, F3, algebra]

2.1 Pullback is an involution on each $H^{p,q}(X)$ because $\sigma^2=\operatorname{id}$, and holomorphicity preserves bidegree. For any vector $u$ in such a cohomology space, $u_+=(u+\sigma^*u)/2$ and $u_-=(u-\sigma^*u)/2$ satisfy $u=u_++u_-$ and $\sigma^*u_+=u_+$, $\sigma^*u_-=-u_-$. If a vector belongs to both eigenspaces then it equals its own negative, hence is zero. This proves the direct-sum decomposition on cohomology. [given, A1, step 1.1, algebra]

2.2 For three eigenforms, $\sigma^*(\omega_A\wedge\omega_B\wedge\omega_C)=\epsilon_A\epsilon_B\epsilon_C\,\omega_A\wedge\omega_B\wedge\omega_C$, where each $\epsilon$ is $+1$ for an even index and $-1$ for an odd index. By step 1.1 the integral is unchanged by pullback. If an odd number of indices are odd, then $\epsilon_A\epsilon_B\epsilon_C=-1$, so $\kappa_{ABC}=-\kappa_{ABC}$ and hence $\kappa_{ABC}=0$. [given, step 1.1, algebra]


3.1 Put $T=\sigma^*$ and write $(u,v)=\int_X\langle u,v\rangle_g\operatorname{vol}_g$ for the Hermitian $L^2$ product, linear in its first argument. The isometry and step 1.1 give $(Tu,Tv)=(u,v)$; also $T^2=1$ and $Td=dT$. For smooth forms $u,v$ of adjacent degrees, $(du,Tv)=(Tdu,v)=(dTu,v)=(Tu,d_g^*v)=(u,Td_g^*v)$. The defining identity of the formal adjoint also makes the left side $(u,d_g^*Tv)$. Thus $(u,d_g^*Tv-Td_g^*v)=0$ for all $u$, so $d_g^*T=Td_g^*$, by taking $u$ to be that smooth difference and using positive definiteness of the integral from [F2]. Hence $T\Delta_g=\Delta_gT$. Holomorphicity preserves bidegree and commutes with $\bar\partial$ (the $(0,1)$ part of $d$); applying the two projections of step 2.1 to harmonic forms proves their direct-sum decomposition. [given, F2, step 1.1, step 2.1, algebra]

4.1 In a holomorphic chart centered at $p$, write the local involution as $s(z)$ with derivative $A$. Define $w(z)=\tfrac12(z+A s(z))$. Then $Dw(0)=\tfrac12(I+A^2)=I$. The map $w$ is holomorphic on an open neighborhood in $\mathbb C^3$, so [F1] gives a biholomorphic local coordinate map. Shrink the original chart to its intersection with its image under $s$ so that both $z$ and $s(z)$ remain in the coordinate domain. Then $w(s(z))=\tfrac12(s(z)+Az)=A w(z)$. Hence the fixed set in this chart is exactly the $+1$ eigenspace of $A$, a complex submanifold of the dimension found in step 1.2. Every fixed point has such a chart, so each fixed component has complex dimension $0$ or $2$. [given, F1, step 1.2, construct, algebra] ∎

## Remarks

The vanishing intersection statement is purely mathematical. In the Type IIB application, complex fixed components of dimensions $0$ and $2$ give the internal loci of space-filling O3- and O7-planes, respectively; source charges and tadpole conditions are separate physical data.
