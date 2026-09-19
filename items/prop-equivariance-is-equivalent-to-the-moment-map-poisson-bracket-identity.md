---
id: prop-equivariance-is-equivalent-to-the-moment-map-poisson-bracket-identity
kind: proposition
title: For connected groups, equivariance is equivalent to the moment-map Poisson bracket identity
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, prop-moment-map-components-generate-the-negative-infinitesimal-action, def-poisson-bracket-on-a-symplectic-manifold, prop-adjoint-intertwines-the-exponential-map, prop-adjoint-is-a-smooth-lie-group-representation, thm-the-differential-of-adjoint-is-ad, def-coadjoint-representation-of-a-lie-group, def-symplectic-and-hamiltonian-lie-group-action, cor-the-exponential-map-is-a-local-diffeomorphism-at-zero, cor-lipschitz-ode-uniqueness-and-stability-estimate, thm-connectedness-characterisations, def-countable-choice, def-fundamental-vector-field-of-a-left-action]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.3, Lemma 7.14 and its proof, printed page 84
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.1, printed pages 133--135
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let a symplectic left action of $G$ on a symplectic
manifold $(M,\omega)$ be given, and let $\mu:M\to\mathfrak g^*$ satisfy the
component moment equations $d\mu^\xi=-\iota_{\xi_M}\omega$ for every
$\xi\in\mathfrak g$.

1. If $\mu$ is coadjoint equivariant, then
   $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ on all of $M$ for all
   $\xi,\eta\in\mathfrak g$.
2. Conversely, if $G$ is connected and
   $\{\mu^\xi,\mu^\eta\}=\mu^{[\xi,\eta]}$ on all of $M$ for all
   $\xi,\eta$, then $\mu$ is coadjoint equivariant.

Thus, for connected $G$ and connected $M$, coadjoint equivariance of a map
satisfying the component moment equations is equivalent to the moment-map
Poisson bracket identity. For a general group the bracket identity is
equivalent to equivariance under the identity component $G^0$, and
equivariance under all of $G$ requires in addition equivariance under one
representative of each coset of $G/G^0$. Connectivity of $M$ is not used by
either implication; it is used only when the bracket identity is to be checked
at a single point, because the nonequivariance defect is then constant on $M$
by the companion lemma below.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a symplectic action of $G$ on $(M,\omega)$, and a map $\mu:M\to\mathfrak g^*$ satisfying the component moment equations.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and exponential interfaces cited in [F1]--[F7], and no further choice is made.

[F1] The component moment equations read $d\mu^\xi=-\iota_{\xi_M}\omega$. [[def-moment-map-and-component-hamiltonian]].

[F2] $X_{\mu^\xi}=-\xi_M$ for every $\xi$. [[prop-moment-map-components-generate-the-negative-infinitesimal-action]].

[F3] $\{F,G\}=\omega(X_F,X_G)$ and the Poisson bracket is bilinear and alternating, so $\omega(\xi_M,\eta_M)=\{\mu^\xi,\mu^\eta\}$ by [F2]. [[def-poisson-bracket-on-a-symplectic-manifold]].

[F4] The coadjoint action is $(g\cdot\alpha)(\zeta)=\alpha(\operatorname{Ad}_{g^{-1}}\zeta)$, and $\left.\frac d{dt}\right|_0\langle\exp_G(-t\xi)\cdot\alpha,\zeta\rangle=\langle\alpha,[\xi,\zeta]\rangle$. [[def-coadjoint-representation-of-a-lie-group]].

[F5] $\left.\frac d{dt}\right|_0\operatorname{Ad}_{\exp_G(t\xi)}\zeta=[\xi,\zeta]$, and $\operatorname{Ad}_g[\xi,\zeta]=[\operatorname{Ad}_g\xi,\operatorname{Ad}_g\zeta]$. [[thm-the-differential-of-adjoint-is-ad]], [[prop-adjoint-is-a-smooth-lie-group-representation]].

[F6] $\exp_G(\operatorname{Ad}_g\zeta)=g\exp_G(\zeta)g^{-1}$. Consequently $h\exp_G(s\xi_0)=\exp_G(s\operatorname{Ad}_h\xi_0)h$ and $\left.\frac d{ds}\right|_0\exp_G(s\zeta)\cdot x=-\zeta_M(x)$ for the library fundamental field. [[prop-adjoint-intertwines-the-exponential-map]], [[def-fundamental-vector-field-of-a-left-action]].

[F7] The image of $\exp_G$ contains an open neighborhood of $e$, and a subgroup containing an open neighborhood of the identity is open and closed; a connected space has no clopen subsets other than $\varnothing$ and itself. [[cor-the-exponential-map-is-a-local-diffeomorphism-at-zero]], [[thm-connectedness-characterisations]].

[F8] A curve in $\mathbb R^n$ solving a linear ODE $v'(s)=B(s)v(s)$ with continuous coefficients and vanishing at one point is identically zero on its interval. [[cor-lipschitz-ode-uniqueness-and-stability-estimate]].

## Proof

**Proof technique:** direct.

1.1 Fix $\xi,\zeta\in\mathfrak g$ and $p\in M$. By the moment equation for $\zeta$, the identity $X_{\mu^\zeta}=-\zeta_M$ and the Poisson convention, $$d\mu^\zeta_p(\xi_M(p))=-\omega_p(\zeta_M(p),\xi_M(p))=\omega_p(\xi_M(p),\zeta_M(p))=\{\mu^\xi,\mu^\zeta\}(p).$$ [F1, F2, F3]

1.2 Assume conversely that $G$ is connected and that the bracket identity holds on all of $M$. Fix $m\in M$ and define $u:G\to\mathfrak g^*$ by $u(g):=\mu(g\cdot m)-g\cdot\mu(m)$, the equivariance defect at $m$. Then $u$ is smooth and $u(e)=0$, and equivariance of $\mu$ is exactly the assertion $u\equiv0$. [given, F4]

1.3 Fix $h\in G$ and $\xi_0,\xi\in\mathfrak g$, and put $\Theta:=[\xi_0,\operatorname{Ad}_{h^{-1}}\xi]$. By [F6], $h\exp_G(s\xi_0)=\exp_G(s\operatorname{Ad}_h\xi_0)h$ and therefore the curve $s\mapsto h\exp_G(s\xi_0)\cdot m$ has velocity $-\left(\operatorname{Ad}_h\xi_0\right)_M(h\cdot m)$ at $s=0$; hence $$\left.\frac d{ds}\right|_0\mu^\xi(h\exp_G(s\xi_0)\cdot m)=\omega_{h\cdot m}\bigl(\xi_M,(\operatorname{Ad}_h\xi_0)_M\bigr)=\{\mu^\xi,\mu^{\operatorname{Ad}_h\xi_0}\}(h\cdot m)=\mu^{[\xi,\operatorname{Ad}_h\xi_0]}(h\cdot m),$$ using the moment equation, [F3] and the bracket identity. [F1, F3, F6, given]

2.1 Assume $\mu$ is equivariant, and fix $\xi,\zeta,p$. For all real $t$, equivariance and [F4] give $$\mu^\zeta(\exp_G(-t\xi)\cdot p)=\langle\exp_G(-t\xi)\cdot\mu(p),\zeta\rangle=\langle\mu(p),\operatorname{Ad}_{\exp_G(t\xi)}\zeta\rangle.$$ The $t$-derivative of the left side at $0$ is $d\mu^\zeta_p(\xi_M(p))$, because $t\mapsto\exp_G(-t\xi)\cdot p$ has velocity $\xi_M(p)$ at $t=0$, and step 1.1 identifies it with $\{\mu^\xi,\mu^\zeta\}(p)$. The $t$-derivative of the right side at $0$ is $\langle\mu(p),[\xi,\zeta]\rangle=\mu^{[\xi,\zeta]}(p)$ by [F5]. Since $\xi,\zeta,p$ were arbitrary, claim 1 holds. [step 1.1, F4, F5, given]

2.2 With the same $h,\xi_0,\xi$ as in step 1.3, the second term of $u$ contributes $$\left.\frac d{ds}\right|_0\langle\mu(m),\operatorname{Ad}_{(h\exp_G(s\xi_0))^{-1}}\xi\rangle=\langle\mu(m),-[\xi_0,\operatorname{Ad}_{h^{-1}}\xi]\rangle=-\langle\mu(m),\Theta\rangle$$ by [F5]. Since $[\xi,\operatorname{Ad}_h\xi_0]=\operatorname{Ad}_h[\operatorname{Ad}_{h^{-1}}\xi,\xi_0]=-\operatorname{Ad}_h\Theta$, step 1.3 can be rewritten as $\mu^{[\xi,\operatorname{Ad}_h\xi_0]}(h\cdot m)=-\langle\mu(h\cdot m),\operatorname{Ad}_h\Theta\rangle$, and the identity $\langle h\cdot\mu(m),\operatorname{Ad}_h\Theta\rangle=\langle\mu(m),\Theta\rangle$ gives $$\left.\frac d{ds}\right|_0\langle u(h\exp_G(s\xi_0)),\xi\rangle=-\langle\mu(h\cdot m),\operatorname{Ad}_h\Theta\rangle+\langle\mu(m),\Theta\rangle=-\langle u(h),\operatorname{Ad}_h\Theta\rangle.$$ [step 1.3, F4, F5]

3.1 Fix $\xi_0\in\mathfrak g$ and consider $v(s):=u(\exp_G(s\xi_0))$ as a curve in the finite-dimensional space $\mathfrak g^*$, with $v(0)=u(e)=0$ by step 1.2. For each fixed $\xi$, step 2.2 applied with $h=\exp_G(s\xi_0)$ expresses $\frac d{ds}\langle v(s),\xi\rangle$ as a linear functional of $v(s)$ with smooth coefficients, so $v$ solves a linear ODE with continuous coefficients on every compact interval; by [F8] and $v(0)=0$ the curve $v$ vanishes identically. Hence $u$ vanishes on the whole exponential image $\exp_G(\mathfrak g)$. [step 1.2, step 2.2, F8]

4.1 If $u(h)=0$ for some $h\in G$, then the same argument applied to the curve $s\mapsto u(h\exp_G(s\xi_0))$ shows $u(h\exp_G(\mathfrak g))=\{0\}$: the defect curve solves the same linear ODE and vanishes at $s=0$. The exponential image contains an open neighborhood $U$ of $e$ by [F7], is closed under inversion because $-\xi$ runs through $\mathfrak g$ with $\xi$, and the subgroup $H$ generated by $U$ is open (a union of translates of $U$) and closed (its complement is a union of cosets, each open). Since $G$ is connected, $H=G$ by [F7]. Every element of $G$ is therefore a finite product of elements of $\exp_G(\mathfrak g)$, and induction over the factors using the vanishing statement proves $u\equiv0$. Thus $\mu$ is coadjoint equivariant, which is claim 2. [step 3.1, F7]

5.1 Finally let $G$ be arbitrary and let $G^0$ be its identity component, a connected Lie group with Lie algebra $\mathfrak g$ and the same fundamental vector fields on $M$. Claims 1 and 2 applied with $G$ replaced by $G^0$ show that the bracket identity is equivalent to equivariance under $G^0$. Writing each $g\in G$ as $g=g_cg^0$ with $g_c$ a representative of $gG^0$ and $g^0\in G^0$, equivariance under all of $G$ is equivalent to equivariance under $G^0$ together with $\mu(g_c\cdot m)=g_c\cdot\mu(m)$ for all representatives $g_c$ and all $m\in M$. [step 2.1, step 4.1, A1] ∎
