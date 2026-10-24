---
id: prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map
kind: proposition
title: The cotangent lift of an action is Hamiltonian with the tautological moment map
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-moment-map-and-component-hamiltonian, def-tautological-one-form-on-a-cotangent-bundle, prop-cotangent-lifts-are-symplectomorphisms, prop-cotangent-lift-of-a-vector-field-is-hamiltonian, prop-adjoint-intertwines-the-exponential-map, def-fundamental-vector-field-of-a-left-action, def-smooth-left-action-of-a-lie-group, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.1, cotangent lifts and Exercise 7.17, printed page 86
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.4, cotangent-lift example, printed pages 137--139
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let a smooth left action of $G$ on a smooth
manifold $Q$ be given and let $\mu_0:G\times Q\to Q$ denote it. Define the
**cotangent-lifted action** on $T^*Q$ by

$$\widehat g(q,p):=\bigl(g\cdot q,(d(a_g)_q^{-1})^*p\bigr),$$

where $a_g(q)=g\cdot q$. Then the lifted action is a smooth left action
preserving the canonical symplectic form $\omega_{\mathrm{can}}=-d\lambda$, and
the **tautological moment map**

$$\bigl\langle\mu(q,p),\xi\bigr\rangle:=-p\bigl(\xi_Q(q)\bigr), \qquad \xi\in\mathfrak g,$$

satisfies the component moment equations
$d\mu^\xi=-\iota_{\xi_{T^*Q}}\omega_{\mathrm{can}}$ for the lifted fundamental
fields. Its coadjoint equivariance, which makes $\mu$ an equivariant moment
map, is verified in the companion lemma.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth left action of $G$ on $Q$ and the induced cotangent-lifted action on $T^*Q$.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field and cotangent-bundle interfaces cited below.

[F1] $\lambda_{(q,p)}(v)=p(d\pi v)$ and $\omega_{\mathrm{can}}=-d\lambda$ is the canonical symplectic form on $T^*Q$. [[def-tautological-one-form-on-a-cotangent-bundle]].

[F2] For a diffeomorphism $f:Q\to Q'$ the cotangent lift $\widehat f(q,p)=(f(q),(df_q^{-1})^*p)$ satisfies $\widehat f^*\lambda_{Q'}=\lambda_Q$ and $\widehat f^*\omega_{Q'}=\omega_Q$. [[prop-cotangent-lifts-are-symplectomorphisms]].

[F3] If $Y$ is a vector field on $Q$ and $Y^{\#}$ is the infinitesimal generator of the inverse-transpose cotangent lifts of the local flow of $Y$, then in cotangent coordinates $Y^{\#}=Y^i\partial_{q^i}-p_j(\partial_{q^i}Y^j)\partial_{p_i}$ and $Y^{\#}$ is Hamiltonian for $p(Y_q)$. [[prop-cotangent-lift-of-a-vector-field-is-hamiltonian]].

[F4] The fundamental field of the lifted action is
$\xi_{T^*Q}(q,p)=\left.\frac d{dt}\right|_0\widehat{a_{\exp_G(-t\xi)}}(q,p)$,
and it projects to $\xi_Q(q)$ because $\pi\circ\widehat{a_h}=a_h\circ\pi$. [[def-fundamental-vector-field-of-a-left-action]], [[def-smooth-left-action-of-a-lie-group]].

[F5] $\exp_G(\operatorname{Ad}_g\zeta)=g\exp_G(\zeta)g^{-1}$, hence $(\operatorname{Ad}_g\zeta)_Q(g\cdot q)=d(a_g)_q\zeta_Q(q)$ for the fundamental fields of the action on $Q$. [[prop-adjoint-intertwines-the-exponential-map]], [[def-fundamental-vector-field-of-a-left-action]].

## Proof

**Proof technique:** direct.

1.1 The lifted action is a smooth left action: $\widehat a_g$ is the cotangent lift of the diffeomorphism $a_g$, the formula is smooth in $(g,q,p)$, and $\widehat a_g\circ\widehat a_h=\widehat a_{gh}$ by the chain rule. Each $\widehat a_g$ preserves $\lambda$ and $\omega_{\mathrm{can}}$ by [F2], so the action is symplectic. [F2, given]

1.2 The fundamental field of the lifted action is the infinitesimal generator of the inverse-transpose lifts of the flow of $\xi_Q$: it projects to $\xi_Q$ by [F4], and differentiating the lift formula in cotangent coordinates gives $(\xi_Q)^{\#}=\xi_Q^i\partial_{q^i}-p_j(\partial_{q^i}\xi_Q^j)\partial_{p_i}=\xi_{T^*Q}$. [F3, F4, given]

2.1 By [F3] the field $(\xi_Q)^{\#}=\xi_{T^*Q}$ is Hamiltonian with Hamiltonian function $p(\xi_Q(q))$, that is $\iota_{\xi_{T^*Q}}\omega_{\mathrm{can}}=d\,p(\xi_Q(q))$. Therefore the function $\mu^\xi(q,p):=-p(\xi_Q(q))$ satisfies $d\mu^\xi=-\iota_{\xi_{T^*Q}}\omega_{\mathrm{can}}$, the component moment equation of the library convention. [step 1.2, F1, F3]

3.1 Equivariance holds as well: for $g\in G$ and $\xi\in\mathfrak g$, $$\bigl\langle\mu(\widehat g(q,p)),\xi\bigr\rangle=-\bigl((d(a_g)_q^{-1})^*p\bigr)\bigl(\xi_Q(g\cdot q)\bigr)=-p\bigl((d(a_g)_q^{-1})\xi_Q(g\cdot q)\bigr)=-p\bigl((\operatorname{Ad}_{g^{-1}}\xi)_Q(q)\bigr)=\bigl\langle\mu(q,p),\operatorname{Ad}_{g^{-1}}\xi\bigr\rangle=\bigl\langle g\cdot\mu(q,p),\xi\bigr\rangle,$$ using [F5] with $g$ replaced by $g^{-1}$. Hence $\mu$ is coadjoint equivariant and, with step 2.1, is an equivariant moment map for the lifted action. [step 2.1, F5, A1] ∎
