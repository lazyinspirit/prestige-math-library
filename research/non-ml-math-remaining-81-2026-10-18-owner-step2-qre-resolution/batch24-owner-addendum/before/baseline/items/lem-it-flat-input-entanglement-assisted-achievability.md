---
id: lem-it-flat-input-entanglement-assisted-achievability
kind: lemma
title: Flat-input entanglement-assisted achievability by Weyl coding
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
- thm-it-hsw-classical-quantum-channel-capacity
- def-it-quantum-channel-complement-and-coherent-information
- lem-it-quantum-coherent-information-complement-identity
- thm-qc-schmidt-decomposition
- def-qc-tensor-register-and-permutation
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; all probabilistic selections are finite, and the stated real/finite-dimensional completeness suppliers suffice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
  - title: John Watrous, The Theory of Quantum Information
    url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
    locator: Sections 5.2 and 8.1–8.2; complete relevant proofs inspected in owner construction evidence.
  - title: Igor Devetak, The private classical capacity and quantum capacity of a quantum channel
    url: https://arxiv.org/pdf/quant-ph/0304127
    locator: Theorems 1 and 5; complete private coding proof and channel reduction inspected.
---

## Statement

Let $\tau=JJ^*/D$ be the flat state of a nonzero $D$-dimensional input subspace of a finite-dimensional channel $\mathcal N$. With prior shared maximally entangled states on that subspace, every $0\le R<S(\tau)+I_c(\tau,\mathcal N)$ is achievable for classical messages with average error tending to zero. The code consists of finite Weyl operations followed by a collective output/reference POVM; it has rate tending to $R$.

## Facts & Assumptions

**Given:** The finite-dimensional spaces, states, channels and explicit scalar hypotheses in the Statement.

[F1] [[thm-it-hsw-classical-quantum-channel-capacity]]: Holevo–Schumacher–Westmoreland capacity theorem for finite cq channels.

[F2] [[def-it-quantum-channel-complement-and-coherent-information]]: Complementary channels and coherent information.

[F3] [[lem-it-quantum-coherent-information-complement-identity]]: Coherent information equals output entropy minus environment entropy.

[F4] [[thm-qc-schmidt-decomposition]]: Schmidt decomposition.

[F5] [[def-qc-tensor-register-and-permutation]]: Ordered tensor registers, their inner product, and wire permutations.

## Proof

1.1 Fix a $D$-dimensional subspace of the input, with embedding $J$ and flat state $\tau=JJ^*/D$. Share $|\Phi_D\rangle$ between the sender's subspace and a receiver reference $R$. On the sender half apply the $D^2$ Weyl unitaries, each uniformly likely, before the input embedding. The Weyl matrices in the fixed ordered basis are $U_{ab}|j\rangle=e^{2\pi i bj/D}|j+a\pmod D\rangle$. Direct summation over $b$ kills off-diagonal matrix units; summation over $a$ gives the maximally mixed diagonal. Consequently their average action on the sender half of $\Phi_D$ gives $I_D/D\otimes I_R/D$. [F1, F2, F3, F4, F5, given, algebra, construct]

2.1 Let $\sigma_{ab}$ be the joint output on $B R$ of this finite cq alphabet through $\mathcal N$. Because $(U_{ab}\otimes I)|\Phi_D\rangle=(I\otimes U_{ab}^T)|\Phi_D\rangle$ in coefficient coordinates, all $\sigma_{ab}$ are related by a unitary on $R$ and have identical entropy $S(\mathcal N^c(\tau))$ by purity of the full Stinespring output. Their average is $\mathcal N(\tau)\otimes I_R/D$. Thus the ensemble Holevo information is exactly $$\chi=\ln D+S(\mathcal N(\tau))-S(\mathcal N^c(\tau))=f_{\mathcal N}(\tau).$$ The HSW theorem applies to this fixed finite cq channel $ab\mapsto\sigma_{ab}$, with output $B R$. Each cq codeword is physically implemented by its sequence of Weyl operations on independent shared maximally entangled pairs. Its collective POVM is a permitted receiver measurement and its rate/error are exactly those of HSW. Therefore every nonnegative rate strictly below $f_{\mathcal N}(\tau)$ is entanglement-assisted achievable. Dimension $D=1$ is included: the one-letter ensemble then has Holevo information zero. [F1, F2, F3, F4, F5, step 1.1, given, algebra, construct] ∎
