---
id: lem-csm-chain-markov-bridge
kind: lemma
title: "Positive Ising transfer matrix Markov bridge"
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 1
deps: ["thm-tdmath-ising-chain-limit", "lem-csm-lattice-product-and-measure-compactness", "def-countable-choice"]
justified_by: []
dependency_roles: {"thm-tdmath-ising-chain-limit": "mathematical-premise", "lem-csm-lattice-product-and-measure-compactness": "mathematical-premise", "def-countable-choice": "mathematical-premise"}
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

Assume Countable Choice. For finite $\beta>0$ and $J,h\in\mathbb R$, set $K=\beta J$, $b=\beta h$, and define the positive symmetric transfer matrix on $\{-1,+1\}$ by
$$T_{s,t}=e^{Kst+b(s+t)/2}.$$
Let $\lambda_+$ be its larger eigenvalue and let $r$ be its strictly positive unit eigenvector, with coordinates $r_s$. Then
$$Q_{s,t}=\frac{T_{s,t}r_t}{\lambda_+r_s},\qquad \pi_s=r_s^2$$
define a stochastic matrix $Q$ and invariant probability vector $\pi$. Their consistent consecutive-block laws $\pi_{s_\ell}\prod_{i=\ell}^{r-1}Q_{s_i,s_{i+1}}$ extend uniquely to a stationary probability measure on $\{-1,+1\}^{\mathbb Z}$.

## Facts & Assumptions

**Given:** A one-dimensional finite-alphabet lattice and the zero-field-or-field nearest-neighbor Ising transfer matrix specified above, with $\beta>0$ and finite real $J,h$.

[A1] Adopt Countable Choice for the consistent-cylinder extension step.

[F1] The finite-alphabet product-measure lemma extends a consistent family of finite-dimensional probabilities uniquely to a probability on the cylinder sigma-algebra, under Countable Choice ([[lem-csm-lattice-product-and-measure-compactness]]).

[F2] The one-dimensional Ising transfer matrix has eigenvalues
$\lambda_\pm=e^K\cosh b\pm\sqrt{e^{2K}\sinh^2b+e^{-2K}}$ with $\lambda_+>|\lambda_-|$ ([[thm-tdmath-ising-chain-limit]]).

## Proof
1.1 The off-diagonal entries of $T$ are positive. For a positive symmetric $2\times2$ matrix, its larger eigenvalue exceeds both diagonal entries; explicitly, if $T=\begin{pmatrix}a&c\\c&d\end{pmatrix}$ with $c>0$, then $\lambda_+-a>0$ and the vector $(c,\lambda_+-a)$ is strictly positive and satisfies $Tr=\lambda_+r$ by the characteristic equation. Normalize it to length one. [A1, F2, algebra]

2.1 Since $Tr=\lambda_+r$, $\sum_tQ_{s,t}=1$ for each $s$. Symmetry of $T$ gives $\sum_s\pi_sQ_{s,t}=r_t\sum_sT_{t,s}r_s/\lambda_+=r_t^2=\pi_t$. Thus $\pi$ is invariant. [step 1.1, algebra]

3.1 The finite block probabilities in the Statement are normalized. Summing over the right endpoint uses the row sums of $Q$; summing over the left endpoint uses invariance of $\pi$. Summing over omitted sites therefore gives a consistent probability family on all finite coordinate sets. [step 2.1, algebra]

4.1 Apply [F1] to that consistent family. The resulting measure is stationary because its cylinder probabilities are shift invariant, and uniqueness on cylinders makes it the unique measure with the stated block laws. [A1, F1, step 3.1] ∎ 