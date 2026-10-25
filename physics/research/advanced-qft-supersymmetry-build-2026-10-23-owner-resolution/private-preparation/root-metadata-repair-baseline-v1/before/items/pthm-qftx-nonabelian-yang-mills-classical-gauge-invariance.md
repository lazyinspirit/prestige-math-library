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
dependency_roles:
  post-qftx-nonabelian-yang-mills-model: physical-assumption
  lem-qftx-su2-compact-nonabelian-invariant-form: mathematical-premise
  def-gauge-group-of-a-smooth-principal-bundle: mathematical-premise
  prop-gauge-transformations-act-on-principal-connections: mathematical-premise
  def-qftx-principal-connection-form: mathematical-premise
  lem-qftx-principal-curvature-cartan-bianchi: mathematical-premise
  def-qftx-associated-covariant-derivative: mathematical-premise
proof_strategy: direct
physical_scope: "Classical gauge invariance of the adopted source-free pure SU(2) Yang–Mills action on oriented, time-oriented flat Minkowski spacetime, for the selected smooth right-principal bundle sector. No quantum or empirical conclusion is asserted."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/html/2110.06334"
      locator: "§§1.3.1, 2.1, and 2.6.5: curvature equivariance, gauge transformations as bundle automorphisms, and the classical Yang–Mills action."
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (full lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 5 §5.4 and Chapter 6 §6.1, printed pp. 92–101: pullback gauge action, local section transitions, and curvature covariance."
    - title: "David Tong, Gauge Theory, Chapter 2, Yang-Mills Theory"
      url: "https://davidtong.org/pdfs/teaching/gauge-theory/gauge2.pdf"
      locator: "§2.1.2, printed pp. 30–31: local non-Abelian gauge transformations and conjugation of the field strength."
verification:
  precheck: pass
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
$F_i^{\Phi}=\operatorname{Ad}_{v_i^{-1}}F_i$. Each $v_i$ is local data; the
statement assumes no global map $M\to SU(2)$ for a possibly nontrivial
bundle.

## Statement references

[Matthijs Vákár, Principal Bundles and Gauge Theories](https://arxiv.org/html/2110.06334)

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

[F6] [[def-qftx-associated-covariant-derivative]]: the adjoint representation defines the associated bundle $\operatorname{ad}(P)=P\times_{\operatorname{Ad}}\mathfrak{su}(2)$; local adjoint-valued forms with the stated transition law represent global sections of its exterior-power bundles.

## Proof

1.1 Put $H^\Phi=d\Phi(H)$ and let $\omega^\Phi$ be its connection form. Equivariance of $\Phi$ gives $d\Phi_p(Z_P(p))=Z_P(\Phi(p))$ for every $Z\in\mathfrak{su}(2)$. Since $d\Phi$ transports both the vertical and horizontal summands, their projections commute with $d\Phi$; the defining formula $\omega=\zeta^{-1}v$ therefore gives
$\omega^\Phi_{\Phi(p)}(d\Phi_pX)=\omega_p(X)$ for every $X\in T_pP$. [A2, F2, F4, construct]

2.1 By [F3] and [F5],
$\Omega_{H^\Phi,\Phi(p)}(d\Phi_pX,d\Phi_pY)
=\omega^\Phi_{\Phi(p)}(K_{H^\Phi}(d\Phi_pX,d\Phi_pY))
=\omega_p(K_H(X,Y))
=\Omega_{H,p}(X,Y)$.
Thus $\Omega_{H^\Phi}=(\Phi^{-1})^*\Omega_H$. [F3, F4, F5, step 1.1, algebra]

3.1 On a local trivializing set, $\Phi^{-1}\circ s_i$ is another smooth section, so there is a unique smooth $v_i:U_i\to SU(2)$ with $\Phi^{-1}\circ s_i=s_i v_i$. Pulling the curvature identity of step 2.1 back along $s_i$ gives
$F_i^\Phi=(\Phi^{-1}\circ s_i)^*\Omega_H$. Apply the section-transition formula in [F5] to the two sections $s_i$ and $s_i v_i$; it yields
$F_i^\Phi=\operatorname{Ad}_{v_i^{-1}}F_i$. This uses only the local transition function and does not construct a global map $M\to SU(2)$. [F2, F5, step 2.1, construct]

4.1 The Hodge operator acts on the spacetime-form factors and commutes pointwise with the adjoint action. By [F1],
$\kappa(F_i^\Phi\wedge *_\eta F_i^\Phi)
=\kappa(\operatorname{Ad}_{v_i^{-1}}F_i\wedge *_\eta\operatorname{Ad}_{v_i^{-1}}F_i)
=\kappa(F_i\wedge *_\eta F_i)$
on every trivializing set. These equal local scalar four-forms define the same global action density by the adjoint-bundle pairing, so their integrals over every region where the action is defined agree. No boundary term is introduced because the density is unchanged pointwise. [A1, A3, F1, F6, step 3.1, algebra] ∎
