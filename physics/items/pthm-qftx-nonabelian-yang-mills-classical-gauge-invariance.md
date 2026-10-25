---
id: pthm-qftx-nonabelian-yang-mills-classical-gauge-invariance
kind: physics-theorem
title: Gauge invariance of the classical pure SU(2) Yang–Mills action
status: draft
origin: session
dependency_level: 3
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-nonabelian-yang-mills-model
axiom_base: "ZF + AC_omega inherited through the declared Lie-group and principal-connection suppliers; no full Axiom of Choice is used."
deps:
  - post-qftx-nonabelian-yang-mills-model
  - lem-qftx-su2-compact-nonabelian-invariant-form
  - def-gauge-group-of-a-smooth-principal-bundle
  - prop-gauge-transformations-act-on-principal-connections
  - def-qftx-principal-connection-form
  - lem-qftx-principal-curvature-cartan-bianchi
  - def-qftx-associated-covariant-derivative
  - thm-the-differential-of-adjoint-is-ad
dependency_roles:
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
  prop-gauge-transformations-act-on-principal-connections: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
  thm-the-differential-of-adjoint-is-ad: mathematical-premise
proof_strategy: direct
physical_scope: "Classical gauge invariance of the adopted source-free pure SU(2) Yang–Mills action on oriented, time-oriented flat Minkowski spacetime, for the selected smooth right-principal bundle sector. No quantum or empirical conclusion is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§1.1.18: every principal bundle over Minkowski spacetime R^4 is trivial; §§1.3.1, 2.1, and 2.6.5: curvature equivariance, gauge transformations as bundle automorphisms, and the classical Yang–Mills action."
    - title: "Dale Husemöller, Fibre Bundles, 3rd ed., Graduate Texts in Mathematics 20"
      url: "https://www.maths.ed.ac.uk/~aar/papers/husemoller.pdf"
      locator: "Chapter 4 §9, Definition 9.2 and its following observation, and §10, Corollary 10.3, printed pp. 50 and 53 (PDF pp. 71 and 74): locally trivial principal bundles over paracompact spaces are numerable, and numerable principal bundles over contractible spaces are trivial."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5 §5.4 and Chapter 6 §6.1, printed pp. 92–101: pullback gauge action, local section transitions, and curvature covariance."
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.2, printed pp. 30–31: local non-Abelian gauge transformations and conjugation of the field strength."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $M=\mathbb R^{1,3}$ have orientation
$dx^0\wedge dx^1\wedge dx^2\wedge dx^3$ and metric
$\eta=\operatorname{diag}(-1,1,1,1)$. Fix the pure $SU(2)$ model with a
smooth right principal bundle $P\to M$, no matter fields, the form
$\kappa(X,Y)=-2\operatorname{Tr}_2(XY)$ on $\mathfrak{su}(2)$, and fixed
$g_{\mathrm{YM}}>0$. For a smooth connection with local curvature $F_i$,
the adopted action density is
$-\kappa(F_i\wedge *_\eta F_i)/(2g_{\mathrm{YM}}^2)$.

For every smooth gauge transformation $\Phi:P\to P$ satisfying
$\pi\circ\Phi=\pi$ and $\Phi(pg)=\Phi(p)g$, let $\Phi_*H=d\Phi(H)$ be its
action on a principal connection $H$. Then the local curvature density is
unchanged in every section, so every defined local action and every
convergent global action are invariant under $H\mapsto\Phi_*H$. More
precisely, for any local section $s_i:U_i\to P$, define the smooth local map
$v_i:U_i\to SU(2)$ by
$\Phi^{-1}\circ s_i=s_i v_i$. The transformed curvature components satisfy
$F_i^{\Phi}=\operatorname{Ad}_{v_i^{-1}}F_i$. The $v_i$ depend on the chosen
local sections. Because $M=\mathbb R^{1,3}\cong\mathbb R^4$, the bundle admits
a global section; relative to any such chosen section, $\Phi$ is represented
by a global map $M\to SU(2)$. No global section is fixed or needed here.

## Statement references

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

[Dale Husemöller, Fibre Bundles, §§9.2 and 10.3](https://www.maths.ed.ac.uk/~aar/papers/husemoller.pdf)

[Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)](https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf)

[David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory](https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf)

## Facts & Assumptions

**Given:** The adopted pure $SU(2)$ model, a smooth principal connection $H$ on its selected bundle $P\to M$, and a smooth gauge transformation $\Phi$.

[A1] [[post-qftx-nonabelian-yang-mills-model]]: $M$ has the fixed Minkowski metric and orientation in the Statement.

[A2] [[post-qftx-nonabelian-yang-mills-model]]: the global group is $SU(2)$, $P$ is the selected right principal bundle, there are no matter fields, and $\kappa$ is the normalized positive $\operatorname{Ad}$-invariant form.

[A3] [[post-qftx-nonabelian-yang-mills-model]]: the adopted action density is $-\kappa(F\wedge *_\eta F)/(2g_{\mathrm{YM}}^2)$ with fixed $g_{\mathrm{YM}}>0$.

[F1] [[lem-qftx-su2-compact-nonabelian-invariant-form]]: $\kappa$ is positive definite and satisfies $\kappa(\operatorname{Ad}_gX,\operatorname{Ad}_gY)=\kappa(X,Y)$ for every $g\in SU(2)$.

[F2] [[def-gauge-group-of-a-smooth-principal-bundle]]: a gauge transformation is a smooth diffeomorphism $\Phi$ of $P$ with $\pi\circ\Phi=\pi$ and $\Phi(pg)=\Phi(p)g$.

[F3] [[prop-gauge-transformations-act-on-principal-connections]]: $H^\Phi=d\Phi(H)$ is a principal connection and its vertical-valued curvature obeys $K_{H^\Phi}(d\Phi X,d\Phi Y)=d\Phi(K_H(X,Y))$.

[F4] [[def-qftx-principal-connection-form]]: a connection form reproduces fundamental vertical vectors, has kernel $H$, and converts the vertical-valued curvature to the Lie-algebra-valued curvature.

[F5] [[lem-qftx-principal-curvature-cartan-bianchi]]: the Cartan curvature is horizontal and equivariant, equals $\omega\circ K_H$, and its local components obey the stated section-transition law.

[F7] [[thm-the-differential-of-adjoint-is-ad]]: the derivative of the adjoint representation at the identity is $d(\operatorname{Ad})_e(Z)=\operatorname{ad}_Z$.

[A4] [[post-qftx-nonabelian-yang-mills-model]]: $\operatorname{ad}(P)$ is the real associated bundle $P\times_{\operatorname{Ad}}\mathfrak{su}(2)$ with transition $\eta_j=\operatorname{Ad}_{g_{ij}^{-1}}\eta_i$, and $\kappa(F_i\wedge *_\eta F_i)$ is a global scalar four-form.

[F6] [[def-qftx-associated-covariant-derivative]]: for a finite-dimensional complex representation, the associated local derivative is $d+\rho_*(A_i)$ on sections. Extend it to complexified-adjoint-valued $p$-forms by $d+\rho_*(A_i)\wedge\cdot$. Complexifying the real adjoint representation gives such a representation on $\mathfrak{su}(2)_{\mathbb C}$; by [F7] this extension preserves the real adjoint subbundle and restricts to $D_{A_i}\eta=d\eta+[A_i\wedge\eta]$.

## Proof

1.1 Put $H^\Phi=d\Phi(H)$ and let $\omega^\Phi$ be its connection form. Equivariance of $\Phi$ gives $d\Phi_p(Z_P(p))=Z_P(\Phi(p))$ for every $Z\in\mathfrak{su}(2)$. Since $d\Phi$ transports both the vertical and horizontal summands, their projections commute with $d\Phi$; the defining formula $\omega=\zeta^{-1}v$ therefore gives $\omega^\Phi_{\Phi(p)}(d\Phi_pX)=\omega_p(X)$ for every $X\in T_pP$. [A2, F2, F4, construct]

2.1 By [F3] and [F5], $\Omega_{H^\Phi,\Phi(p)}(d\Phi_pX,d\Phi_pY) =\omega^\Phi_{\Phi(p)}(K_{H^\Phi}(d\Phi_pX,d\Phi_pY)) =\omega_p(K_H(X,Y)) =\Omega_{H,p}(X,Y)$. Thus $\Omega_{H^\Phi}=(\Phi^{-1})^*\Omega_H$. [F3, F4, F5, step 1.1, algebra]

3.1 On a local trivializing set, $\Phi^{-1}\circ s_i$ is another smooth section, so there is a unique smooth $v_i:U_i\to SU(2)$ with $\Phi^{-1}\circ s_i=s_i v_i$. Pulling the curvature identity of step 2.1 back along $s_i$ gives $F_i^\Phi=(\Phi^{-1}\circ s_i)^*\Omega_H$. Apply the section-transition formula in [F5] to the two sections $s_i$ and $s_i v_i$; it yields $F_i^\Phi=\operatorname{Ad}_{v_i^{-1}}F_i$. This computation uses only the local transition function; it neither selects a global section nor uses the global representative. [F2, F5, step 2.1, construct]

4.1 The Hodge operator acts on the spacetime-form factors and commutes pointwise with the adjoint action. By [F1], $\kappa(F_i^\Phi\wedge *_\eta F_i^\Phi) =\kappa(\operatorname{Ad}_{v_i^{-1}}F_i\wedge *_\eta\operatorname{Ad}_{v_i^{-1}}F_i) =\kappa(F_i\wedge *_\eta F_i)$ on every trivializing set. These equal local scalar four-forms define the same global action density by the adjoint-bundle pairing in [A4], so their integrals over every region where the action is defined agree. No boundary term is introduced because the density is unchanged pointwise. [A1, A3, A4, F1, F6, F7, step 3.1, algebra] ∎
