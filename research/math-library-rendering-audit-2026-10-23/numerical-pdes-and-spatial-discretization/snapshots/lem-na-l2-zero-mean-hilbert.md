---
id: lem-na-l2-zero-mean-hilbert
kind: lemma
title: The real zero-mean $L^2$ space is Hilbert
status: published
origin: session
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    lem-l-two-with-the-integral-pairing-is-a-hilbert-space,
    thm-holder-inequality-for-integrals,
    lem-closed-subspace-of-a-banach-space-is-banach,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jean-Luc Guermond, MATH 661 Fall 2025, Part XI Chapter 49:
        Well-posedness for PDEs in mixed form"
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap49.pdf
      locator: "Complete chapter, §49.1 domain and real $L^2$ pressure-space
        conventions; the closed-subspace argument is proved locally here."
    - title: "Daniele Boffi, Franco Brezzi and Michel Fortin, Mixed Finite Element
        Methods and Applications"
      url: https://www.karlin.mff.cuni.cz/~knobloch/FILES/Boffi-Brezzi-Fortin-Mixed_FEMs_and_Applications.pdf
      locator: "Complete textbook, Chapter 2 §2.1 real $L^2$ and mixed pressure-space
        conventions."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. Let $D\subset\mathbb R^d$ be a measurable set of finite measure, and set
$$L^2_0(D):=\left\{q\in L^2(D;\mathbb R):\int_Dq\,dx=0\right\}.$$
With the real $L^2$ inner product $(q,r)=\int_Dqr\,dx$, $L^2_0(D)$ is a closed real Hilbert subspace of $L^2(D;\mathbb R)$.

## Facts & Assumptions

**Given:** Countable Choice, a finite-measure set $D$, and the real Hilbert space $L^2(D;\mathbb R)$ with its integral inner product.

[A1] The published real $L^2$ Hilbert-space result assumes Countable Choice. ([[def-countable-choice]])

[F1] The integral inner product is well-defined, induces the quotient $L^2$ norm, and makes real $L^2(D)$ complete. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]])

[F2] Holder's inequality gives $|\int_Dq\,dx|\le |D|^{1/2}\|q\|_2$ for $q\in L^2(D)$. ([[thm-holder-inequality-for-integrals]])

[F3] A closed linear subspace of a Banach space is complete with the inherited norm. ([[lem-closed-subspace-of-a-banach-space-is-banach]])

## Proof

1.1 Define $\ell(q):=\int_Dq\,dx$. By [F2], $|\ell(q)|\le |D|^{1/2}\|q\|_2$, and linearity of the integral makes $\ell$ a bounded real linear functional. Its kernel is exactly $L^2_0(D)$. [F2, given]

2.1 The kernel of a continuous functional is closed: if $q_n\in L^2_0(D)$ and $q_n\to q$ in $L^2$, then $|\ell(q)|=|\ell(q-q_n)|\le |D|^{1/2}\|q-q_n\|_2\to0$, so $\ell(q)=0$. Thus $L^2_0(D)$ is a closed linear subspace of $L^2(D)$. [step 1.1, algebra]

3.1 The inner product on $L^2(D)$ restricts to an inner product on $L^2_0(D)$ and induces the inherited $L^2$ norm. By [F1], $L^2(D)$ is complete; by [F3] and step 2.1, its closed subspace $L^2_0(D)$ is complete. Therefore it is a real Hilbert space with the restricted inner product. [A1, F1, F3, step 2.1] ∎