---
id: lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients
kind: lemma
title: "The nonnegative expansion of a reduced Kronecker coefficient"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [def-reduced-kronecker-coefficient,
       def-iterated-schur-coefficients,
       thm-brion-formula-for-reduced-kronecker-coefficients,
       lem-schur-specialization-coproduct-and-plethysm-identities,
       lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities,
       thm-schur-functions-form-an-orthonormal-integral-basis,
       def-kronecker-coefficient-and-internal-tensor-product,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Lemma 2.1 and equation (8), pp. 7-8 (nonnegative expansion of the reduced coefficients)"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995; Chapter I sections 3 and 5 (Littlewood-Richardson coefficients)"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
---

## Statement

For all partitions $\alpha,\beta,\gamma$ one has the finite nonnegative
expansion
$$\bar g^\gamma_{\alpha,\beta} =\sum_{\mu,\lambda,\eta,\rho,\theta,\pi} c^\gamma_{\mu,\theta,\pi}\,c^\alpha_{\rho,\lambda,\theta}\, c^\beta_{\rho,\eta,\pi}\,g^\mu_{\lambda,\eta},$$
the sum over all six-tuples of partitions (only finitely many summands are
nonzero), where the $c$'s are the threefold Schur coefficients
([[def-iterated-schur-coefficients]]) and the $g$'s are the ordinary Kronecker
coefficients ([[def-kronecker-coefficient-and-internal-tensor-product]]).

Consequences.

1. $\bar g^\gamma_{\alpha,\beta}>0$ if and only if there exist partitions
   $\mu,\lambda,\eta,\rho,\theta,\pi$ with all four coefficients
   $c^\gamma_{\mu,\theta,\pi}$, $c^\alpha_{\rho,\lambda,\theta}$,
   $c^\beta_{\rho,\eta,\pi}$ and $g^\mu_{\lambda,\eta}$ positive.
2. For every nonzero summand the degree equations
   $|\alpha|=|\rho|+|\lambda|+|\theta|$,
   $|\beta|=|\rho|+|\eta|+|\pi|$,
   $|\gamma|=|\mu|+|\theta|+|\pi|$ and $|\mu|=|\lambda|=|\eta|$ hold.
3. For fixed $\alpha,\beta$ the index set is finite: for a nonzero summand
   $\rho,\lambda,\theta$ are contained in $\alpha$, $\rho,\eta,\pi$ are
   contained in $\beta$, and $|\mu|=|\lambda|$.
4. All summands are nonnegative integers, so no cancellation occurs.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma$ and six-tuples of partitions $(\mu,\lambda,\eta,\rho,\theta,\pi)$.

[F1] $\bar g^\gamma_{\alpha,\beta}=\langle s_\alpha[X]s_\beta[Y]\,|\,\sigma[XY]s_\gamma[XY+X+Y]\rangle_{X,Y}$ ([[thm-brion-formula-for-reduced-kronecker-coefficients]]).

[F2] $s_\lambda[U+V]=\sum_{\mu,\nu}c^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]$ and $s_\lambda[UV]=\sum_{\mu,\nu}g^\lambda_{\mu\nu}s_\mu[U]s_\nu[V]$ for all specializations ([[lem-schur-specialization-coproduct-and-plethysm-identities]]), and $\sigma[XY]=\sum_\rho s_\rho[X]s_\rho[Y]$ degreewise ([[lem-sigma-series-cauchy-adjoint-and-reproducing-kernel-identities]]).

[F3] $c^\gamma_{\mu,\theta,\pi}=\langle s_\gamma,s_\mu s_\theta s_\pi\rangle_H=[s_\gamma]s_\mu s_\theta s_\pi$, and $c^\gamma_{\mu,\theta,\pi}=\sum_\nu c^\gamma_{\mu,\nu}c^\nu_{\theta,\pi}$ ([[def-iterated-schur-coefficients]]).

[F4] The Schur basis is orthonormal ([[thm-schur-functions-form-an-orthonormal-integral-basis]]), the coefficients $c$ and $g$ are nonnegative integers, and $c^\lambda_{\mu\nu}=0$ unless $\mu\subseteq\lambda$ and $|\lambda|=|\mu|+|\nu|$, while $g^\lambda_{\mu\nu}=0$ unless $|\lambda|=|\mu|=|\nu|$ ([[def-littlewood-richardson-tableau-and-coefficient]], [[thm-littlewood-richardson-schur-product-expansion]], [[def-kronecker-coefficient-and-internal-tensor-product]]).

## Proof

**Proof technique:** direct.

1.1 *Expanding Brion's pairing.* Insert the four expansions of [F2] into the pairing of [F1]: $\sigma[XY]=\sum_\rho s_\rho[X]s_\rho[Y]$, and by the coproduct identity at the sum $XY+(X+Y)$, $s_\gamma[XY+X+Y]=\sum_{\mu,\nu}c^\gamma_{\mu\nu}s_\mu[XY]s_\nu[X+Y]$, with $s_\mu[XY]=\sum_{\lambda,\eta}g^\mu_{\lambda\eta}s_\lambda[X]s_\eta[Y]$ and $s_\nu[X+Y]=\sum_{\theta,\pi}c^\nu_{\theta\pi}s_\theta[X]s_\pi[Y]$. Multiplying out and pairing with $s_\alpha[X]s_\beta[Y]$ using orthonormality [F4] extracts $\langle s_\alpha,s_\rho s_\lambda s_\theta\rangle_H=c^\alpha_{\rho,\lambda,\theta}$ and $\langle s_\beta,s_\rho s_\eta s_\pi\rangle_H=c^\beta_{\rho,\eta,\pi}$ by [F3], so $\bar g^\gamma_{\alpha,\beta}=\sum_{\mu,\nu,\lambda,\eta,\rho,\theta,\pi}c^\gamma_{\mu\nu}c^\nu_{\theta\pi}g^\mu_{\lambda\eta}c^\alpha_{\rho\lambda\theta}c^\beta_{\rho\eta\pi}$. [F1, F2, F3, F4]

2.1 *Collapsing the middle index.* By the iterated identity of [F3], $\sum_\nu c^\gamma_{\mu\nu}c^\nu_{\theta\pi}=c^\gamma_{\mu,\theta,\pi}$; substituting into step 1.1 and relabelling the summation indices gives the displayed expansion. The threefold coefficients are symmetric in their three subscripts by their definition as coefficients of the commutative product $s_\mu s_\theta s_\pi$, so the displayed index pattern is the same as the source's equation (8) with the four factors assigned to the four faces of the index tetrahedron in a different order. All coefficients are nonnegative integers, so no cancellation occurs in the sum. [F2, F3, step 1.1]

3.1 *Consequences (2) and (4).* A nonzero summand has all four coefficients positive (they are nonnegative integers), and then the degree equations of (2) follow from the size constraints in [F4]: $|\gamma|=|\mu|+|\theta|+|\pi|$, $|\alpha|=|\rho|+|\lambda|+|\theta|$, $|\beta|=|\rho|+|\eta|+|\pi|$ and $|\mu|=|\lambda|=|\eta|$; conversely, any summand with all four coefficients positive contributes positively, giving the criterion (1) since the total is a sum of nonnegative integers. [F4, step 2.1]

4.1 *Consequence (3), finiteness.* If $c^\alpha_{\rho,\lambda,\theta}>0$ then, by the iterated form of [F3], there is a partition $\phi$ with $c^\phi_{\rho,\lambda}>0$ and $c^\alpha_{\phi,\theta}>0$; by [F4] this forces $\rho\subseteq\phi\subseteq\alpha$, $\lambda\subseteq\phi\subseteq\alpha$ and $\theta\subseteq\alpha$, so $\rho,\lambda,\theta$ range over the finitely many subpartitions of $\alpha$. Similarly $c^\beta_{\rho,\eta,\pi}>0$ forces $\rho,\eta,\pi\subseteq\beta$, and $g^\mu_{\lambda,\eta}>0$ forces $|\mu|=|\lambda|$, so $\mu$ ranges over the finitely many partitions of the bounded number $|\lambda|$. Hence only finitely many six-tuples contribute, and the expansion is a finite sum; the proof uses finite expansions and no choice principle. [F3, F4, step 3.1] ∎
