---
id: lem-csm-stationary-dlr-construction
kind: lemma
title: "Translation-averaged stationary Gibbs state"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 3
deps: ["thm-csm-lattice-dlr-existence", "def-csm-lattice-gibbs-specification", "lem-csm-lattice-specification-consistency", "def-csm-finite-range-lattice-interaction", "lem-csm-lattice-product-and-measure-compactness"]
justified_by: []
dependency_roles: {"thm-csm-lattice-dlr-existence": "mathematical-premise", "def-csm-lattice-gibbs-specification": "mathematical-premise", "lem-csm-lattice-specification-consistency": "mathematical-premise", "def-csm-finite-range-lattice-interaction": "mathematical-premise", "lem-csm-lattice-product-and-measure-compactness": "mathematical-premise"}
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

[F1] Under Countable Choice the DLR set is nonempty, convex and closed under cylinder convergence ([[thm-csm-lattice-dlr-existence]]).

[F2] Every sequence of probabilities on the finite-alphabet product has a cylinder-convergent subsequence whose limit is a probability; two probabilities agreeing on all cylinders are equal ([[lem-csm-lattice-product-and-measure-compactness]]).

[A1] Set $X=A^{\mathbb Z^d}$ and $B_n=[-n,n]^d\cap\mathbb Z^d$. For $j\in\mathbb Z^d$, define the translation $\theta_j:X\to X$ by $(\theta_j\sigma)_x=\sigma_{x+j}$ and its action on measures by push-forward, $(\theta_j\mu)(C)=\mu(\theta_j^{-1}C)$.

## Proof
1.1 Choose a DLR state $\mu$. The translated interaction list gives $(\gamma_\Lambda f)\circ\theta_j=\gamma_{\Lambda+j}(f\circ\theta_j)$ for every bounded measurable $f$, by reindexing each anchor and each local spin in the finite sums. Hence $(\theta_j\mu)\gamma_\Lambda(f)=\mu\gamma_{\Lambda+j}(f\circ\theta_j)=\mu(f\circ\theta_j)=(\theta_j\mu)(f)$, so every translate is DLR; by convexity in [F1], the cube average $\bar\mu_n=|B_n|^{-1}\sum_{j\in B_n}\theta_j\mu$ is DLR. [given, F1, A1, choose]

2.1 For any fixed shift $k=(k_1,\ldots,k_d)\in\mathbb Z^d$ and bounded local $f$, cancellation of terms indexed by $B_n\cap(B_n+k)$ gives $|\bar\mu_n(f)-(\theta_k\bar\mu_n)(f)|\leq2\|f\|_\infty |B_n\triangle(B_n+k)|/|B_n|$. For all sufficiently large $n$, $|B_n|=(2n+1)^d$ and $|B_n\cap(B_n+k)|=\prod_{q=1}^d(2n+1-|k_q|)$, so the ratio equals $2\left(1-\prod_{q=1}^d(1-|k_q|/(2n+1))\right)\to0$. [A1, step 1.1, algebra]

3.1 By [F2], a subsequence of $\bar\mu_n$ converges on cylinders to a probability $\bar\mu$; since each average is DLR, closedness in [F1] makes its limit DLR. Step 2.1 passes to this limit for every local $f$ and fixed $k$, so $\bar\mu$ and $\theta_k\bar\mu$ agree on all cylinders; uniqueness of measures on cylinders in [F2] gives $\theta_k\bar\mu=\bar\mu$. Thus $\bar\mu$ is stationary. [F1, F2, step 1.1, step 2.1] ∎ 
