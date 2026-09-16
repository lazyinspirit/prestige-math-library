---
id: lem-tautological-cotangent-moment-map-is-equivariant
kind: lemma
title: The tautological cotangent moment map is equivariant
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, prop-cotangent-lifts-are-symplectomorphisms, def-moment-map-and-component-hamiltonian, prop-adjoint-intertwines-the-exponential-map, def-fundamental-vector-field-of-a-left-action, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §7.4.1, naturality of the tautological form and Exercise 7.17, printed page 86
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 22, §22.4, printed pages 137--139
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. For the cotangent-lifted action of $G$ on $T^*Q$
and the tautological moment map
$\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))$, coadjoint equivariance holds:

$$\mu(\widehat g(q,p))=g\cdot\mu(q,p) \qquad(g\in G,\ (q,p)\in T^*Q).$$

Together with the component equations of the companion proposition this makes
$\mu$ an equivariant moment map.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth left action of $G$ on $Q$, the lifted action on $T^*Q$, and the tautological moment map.

[A1] $\mathrm{AC}_\omega$ is [[def-countable-choice|countable choice]]; it is used only through the fundamental-field interface cited in [F2].

[F1] The lifted action is $\widehat g(q,p)=(g\cdot q,(d(a_g)_q^{-1})^*p)$, the tautological moment map is $\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))$, and the lifted action is a smooth left action preserving $\omega_{\mathrm{can}}$. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]], [[prop-cotangent-lifts-are-symplectomorphisms]].

[F2] For every $g\in G$ and $\xi\in\mathfrak g$ the fundamental fields are intertwined by the action: $(\operatorname{Ad}_g\xi)_Q(g\cdot q)=d(a_g)_q\xi_Q(q)$, equivalently $(\operatorname{Ad}_{g^{-1}}\xi)_Q(q)=(d(a_g)_q^{-1})\xi_Q(g\cdot q)$. [[prop-adjoint-intertwines-the-exponential-map]], [[def-fundamental-vector-field-of-a-left-action]], [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$, $\xi\in\mathfrak g$ and $(q,p)\in T^*Q$. The lifted action acts on the fibre over $g\cdot q$ by the inverse transpose of $d(a_g)_q$, so $$\bigl\langle\mu(\widehat g(q,p)),\xi\bigr\rangle=-\bigl((d(a_g)_q^{-1})^*p\bigr)\bigl(\xi_Q(g\cdot q)\bigr)=-p\bigl((d(a_g)_q^{-1})\xi_Q(g\cdot q)\bigr).$$ [F1, given]

2.1 By [F2] the argument of $p$ in step 1.1 is $(\operatorname{Ad}_{g^{-1}}\xi)_Q(q)$, so $\langle\mu(\widehat g(q,p)),\xi\rangle=-p((\operatorname{Ad}_{g^{-1}}\xi)_Q(q))=\langle\mu(q,p),\operatorname{Ad}_{g^{-1}}\xi\rangle$. [step 1.1, F2]

3.1 By the definition of the coadjoint action, $\langle\mu(q,p),\operatorname{Ad}_{g^{-1}}\xi\rangle=\langle g\cdot\mu(q,p),\xi\rangle$; since $\xi$ was arbitrary and $g,(q,p)$ were arbitrary, $\mu(\widehat g(q,p))=g\cdot\mu(q,p)$ for all $g$ and $(q,p)$. Hence $\mu$ is coadjoint equivariant. [step 2.1, F1, A1] ∎
