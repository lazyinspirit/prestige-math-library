---
id: ex-cotangent-reduction-for-a-principal-bundle-at-zero
kind: example
title: Cotangent reduction for a principal bundle at zero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map, thm-marsden-weinstein-meyer-symplectic-reduction, thm-free-proper-action-quotient-manifold, def-tautological-one-form-on-a-cotangent-bundle, prop-cotangent-lifts-are-symplectomorphisms, def-countable-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Eckhard Meinrenken, Symplectic Geometry
      url: https://www.math.utoronto.ca/mein/teaching/LectureNotes/symplectic.pdf
      locator: §8.1, Example 8.9, printed page 103
    - title: Ana Cannas da Silva, Lectures on Symplectic Geometry
      url: https://www.math.ist.utl.pt/~acannas/Books/symplectic.pdf
      locator: Lecture 24, §24.4, printed page 150
proof_strategy: direct
---

## Example

Let a Lie group $G$ act smoothly, freely and properly on a manifold $Q$, and
let it act on $T^*Q$ by cotangent lifts, with moment map
$\langle\mu(q,p),\xi\rangle=-p(\xi_Q(q))$. If the lifted action is again free
and proper (in particular whenever $G$ is compact), then zero reduction of
$T^*Q$ is canonically symplectomorphic to the cotangent bundle of the quotient:

$$(T^*Q)//G\;\cong\;T^*(Q/G).$$

The zero level consists exactly of the covectors that annihilate the orbit
tangents, and the identification is the tautological one: a covector on the
zero level is the pullback of a unique covector on $Q/G$.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a smooth free proper action of $G$ on $Q$, the lifted action on $T^*Q$, and the assumption that the lifted action is free and proper.

[F1] The tautological moment map of the lifted action has components $\mu^\xi(q,p)=-p(\xi_Q(q))$ and is an equivariant moment map. [[prop-cotangent-lift-is-hamiltonian-with-tautological-moment-map]].

[F2] $Q/G$ is a smooth manifold and the quotient map $\pi_Q:Q\to Q/G$ is a surjective submersion; its differential has kernel the orbit tangents $T_q(G\cdot q)$. [[thm-free-proper-action-quotient-manifold]].

[F3] The tautological one-form on a cotangent bundle is $\lambda_{(q,p)}(v)=p(d\pi_Qv)$, and the canonical form is $-d\lambda$; cotangent lifts preserve $\lambda$. [[def-tautological-one-form-on-a-cotangent-bundle]], [[prop-cotangent-lifts-are-symplectomorphisms]].

[F4] Under the stated hypotheses the zero reduction exists and is characterised by $\pi^*\omega^{\mathrm{red}}=\iota^*\omega_{\mathrm{can}}$. [[thm-marsden-weinstein-meyer-symplectic-reduction]].



## Verification

**Proof technique:** direct.

1.1 Zero level: by [F1], $\mu(q,p)=0$ if and only if $p(\xi_Q(q))=0$ for every $\xi$, that is, if and only if $p$ annihilates the tangent space $T_q(G\cdot q)=\ker d(\pi_Q)_q$ by [F2]. [F1, F2, given]

2.1 Define $\Psi:\mu^{-1}(0)\to T^*(Q/G)$ by $\Psi(q,p)(v):=p(\tilde v)$ for $v\in T_{[q]}(Q/G)$ and any lift $\tilde v\in T_qQ$. This is well defined by step 1.1, is $G$-invariant, and is bijective: a covector on $Q$ killing the vertical directions descends uniquely to $Q/G$, and every covector on $Q/G$ pulls back to such a covector. [step 1.1, F2]

3.1 Form comparison: the projection of $T^*(Q/G)$ satisfies $\pi_{Q/G}\circ\Psi=\pi_Q\circ\pi_{T^*Q}$ on the zero level, and $\Psi(q,p)$ acts on horizontal vectors exactly as $p$ does, so for $v\in T_{(q,p)}T^*Q$ the tautological one-forms correspond: $$(\Psi^*\lambda_{Q/G})_{(q,p)}(v)=\Psi(q,p)\bigl(d\pi_{Q/G}d\Psi\,v\bigr)=p\bigl(d\pi_Qv\bigr)=\lambda_{Q,(q,p)}(v),$$ using [F3]. Applying $-d$ gives $\Psi^*\omega^{Q/G}_{\mathrm{can}}=\iota^*\omega_{\mathrm{can}}$. [step 2.1, F2, F3]

4.1 The reduced form of the zero reduction satisfies the same identity $\pi^*\omega^{\mathrm{red}}=\iota^*\omega_{\mathrm{can}}$ with the same quotient map, so it agrees with the pulled-back canonical form on $T^*(Q/G)$; the two quotient maps differ by the diffeomorphism $\Psi$ of tangent and cotangent bundles induced by the principal bundle, so $\Psi$ is a symplectomorphism. [step 3.1, F4] ∎
