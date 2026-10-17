---
id: lem-csm-stationary-dlr-construction
kind: lemma
title: "Translation-averaged stationary Gibbs state"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps: ["thm-csm-lattice-dlr-existence"]
justified_by: []
dependency_roles: {"thm-csm-lattice-dlr-existence": "mathematical-premise"}
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Sascha Friedli and Yvan Velenik, Statistical Mechanics of Lattice Systems: A Concrete Mathematical Introduction (complete author PDF, revised 2017)"
      url: "https://www.unige.ch/math/folks/velenik/smbook/Statistical_Mechanics_of_Lattice_Systems.pdf"
      locator: "Chapter 3, PDF pp. 127–132; Chapter 6, PDF pp. 265–289; Appendix, PDF pp. 329–332."
    - title: "Junior Seminar in Mathematical Physics, Proofs from the Book: Ising, DLR, Dobrushin and Peierls sections (complete 99-page seminar notes)"
      url: "https://web.math.princeton.edu/~js129/PDFs/Junior_Seminar_in_Mathematical_Physics__Proofs_from_the_Book.pdf"
      locator: "PDF pp. 20–24, 31–43, and 52–55."
---

## Statement

Assume Countable Choice, a translation-invariant finite-range interaction on $\mathbb Z^d$ with finite alphabet, and a nonempty DLR state set. Then there exists at least one translation-stationary DLR state. This assertion does not imply uniqueness or ergodicity.

## Facts & Assumptions

**Given:** A translation-invariant specification with at least one DLR probability measure and the Countable Choice measure framework.

[F1] Under Countable Choice the set of DLR states is nonempty, convex, closed in cylinder topology, and sequentially compact ([[thm-csm-lattice-dlr-existence]]).

## Proof
1.1 Choose a DLR state $\mu$. Translation covariance of the interaction implies that each translate $\theta_j\mu$ is also DLR; by convexity in [F1], the cube average $\bar\mu_n=|B_n|^{-1}\sum_{j\in B_n}\theta_j\mu$ is DLR. [given, F1, choose]

2.1 For any fixed shift $k$ and bounded local $f$, cancellation of terms indexed by $B_n\cap(B_n+k)$ gives $|\bar\mu_n(f)-(\theta_k\bar\mu_n)(f)|\leq2\|f\|_\infty |B_n\triangle(B_n+k)|/|B_n|$. The symmetric-difference ratio tends to zero by direct boundary counting for cubes. [step 1.1, algebra]

3.1 By sequential compactness in [F1], a subsequence of $\bar\mu_n$ converges on cylinders to a DLR probability $\bar\mu$. Step 2.1 passes to this limit for every local $f$ and fixed $k$, so $\bar\mu$ and $\theta_k\bar\mu$ agree on all cylinders; uniqueness of measures on cylinders in [F1] gives $\theta_k\bar\mu=\bar\mu$. Thus $\bar\mu$ is stationary. [F1, step 2.1] ∎ 