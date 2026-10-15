---
id: cex-qft-qed-negative-auxiliary
kind: counterexample
title: Auxiliary timelike vector has negative form
status: draft
origin: pipeline
domain: mathematics
library: mathematics
physical_scope: null
dependency_level: 3
deps:
  - def-countable-choice
  - lem-qft-photon-null-quotient
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-qft-photon-null-quotient: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: David Tong, Quantum Field Theory, Chapter 6, §6.2.2
      url: https://www.damtp.cam.ac.uk/user/tong/qft/qfthtml/S6.html
      locator: Complete author-hosted HTML chapter 6; negative-norm auxiliary polarization and subsidiary quotient.
    - title: Mark Srednicki, Quantum Field Theory, author-hosted 2006 book draft, §56
      url: https://www.physics.ucsb.edu/~mark/ms-qft-DRAFT.pdf
      locator: Complete 616-page book draft; covariant auxiliary photon polarizations and physical transverse states.
---

## Statement

Assume Countable Choice. Let $E=\{\mathbf k:1<|\mathbf k|<2\}$ and $\epsilon(\mathbf k)=\mathbf1_E(\mathbf k)(1,0,0,0)\in\mathcal K$. Then
$$[\epsilon,\epsilon]_\eta=-|E|<0,$$
but $\epsilon\notin\mathcal K_0$ because $-\epsilon^0+n\cdot\boldsymbol\epsilon=-1$ on $E$. Therefore this negative-form auxiliary vector is not a physical state in the subsidiary quotient.

## Facts & Assumptions

**Given:** Countable Choice, the indefinite auxiliary form and subsidiary space, and the null-quotient interface.

[A1] Assume Countable Choice. [[def-countable-choice]]

[F1] The physical subsidiary space requires $-\epsilon^0+n\cdot\boldsymbol\epsilon=0$ almost everywhere; only its null quotient is positive. [[lem-qft-photon-null-quotient]]

## Proof

**Given:** [A1], [F1], and the annulus $E$ in the statement.

1.1 The annulus has finite positive Lebesgue measure, so $\epsilon\in L^2(\mathbb R^3;\mathbb C^4)$. Its spatial components vanish and its time component equals one on $E$, hence
$$[\epsilon,\epsilon]_\eta=\int_E(-1)\,d^3\mathbf k=-|E|<0.$$
[A1, given, algebra]

2.1 On $E$, $-\epsilon^0+n\cdot\boldsymbol\epsilon=-1$, so the subsidiary condition in [F1] fails on a positive-measure set. The quotient in [F1] is formed only from $\mathcal K_0$; this vector is outside that space and cannot represent a negative-norm physical quotient class. [F1, step 1.1, given] ∎
