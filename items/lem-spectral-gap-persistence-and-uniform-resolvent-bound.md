---
id: lem-spectral-gap-persistence-and-uniform-resolvent-bound
kind: lemma
title: A spectral gap persists on a computable matrix ball with a uniform resolvent bound
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps: [def-rank-r-orthogonal-projector-domain, def-matrix-product-and-identity-matrix, lem-complex-hermitian-eigenvalues-lipschitz, thm-complex-spectral-theorem-for-normal-endomorphisms, def-operator-norm-on-a-finite-dimensional-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Tosio Kato, Perturbation Theory for Linear Operators, 2nd ed., Chapter II §1.3–§1.4
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/kato1.pdf
    - title: Benjamin Texier, Basic matrix perturbation theory, §2
      url: https://ems.press/content/serial-article-files/44369?nt=1
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
---

## Statement

Let $H_0\in\mathbb H_n$ have eigenvalues with multiplicity
$\lambda_1(H_0)\le\cdots\le\lambda_n(H_0)$ and gap
$g=\lambda_{r+1}(H_0)-\lambda_r(H_0)>0$. Put
$$c=\lambda_1(H_0),\qquad R=\frac{\lambda_r(H_0)+\lambda_{r+1}(H_0)}2-c,$$
and let $\Gamma=\{c+Re^{it}:0\le t\le2\pi\}$ be positively oriented.
For Hermitian $H$, write $\sigma(H)=\{\lambda_j(H):1\le j\le n\}$.
Then
$R\ge g/2$. For every Hermitian $H$ with $\|H-H_0\|_{op}\le g/4$, exactly
the $r$ lowest eigenvalues of $H$, counted with multiplicity, lie inside $\Gamma$;
the gap is at least $g/2$, and
$$\operatorname{dist}(\Gamma,\sigma(H))\ge g/4,\qquad \|(zI-H)^{-1}\|_{op}\le4/g\quad(z\in\Gamma).$$

## Facts & Assumptions
**Given:** A Hermitian $H_0\in\mathbb H_n$, integers $n\ge2$ and $1\le r<n$, and $g=\lambda_{r+1}(H_0)-\lambda_r(H_0)>0$.

[F1] Descending ordered Hermitian eigenvalues change by at most the operator norm of the matrix perturbation ([[lem-complex-hermitian-eigenvalues-lipschitz]]); ascending order is obtained by reversing indices, so the same bound holds for the ascending convention used here.

[F2] A finite-dimensional Hermitian matrix has an orthonormal eigenbasis with real eigenvalues ([[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

[F3] The operator norm is the supremum of $\|Tv\|_2$ over unit vectors $v$ ([[def-operator-norm-on-a-finite-dimensional-inner-product-space]]).

## Proof


1.1 Since $\lambda_{r+1}(H_0)=\lambda_r(H_0)+g$, we have $R=\lambda_r(H_0)-\lambda_1(H_0)+g/2\ge g/2>0$. Reversing the descending-index convention in [F1] gives the same perturbation bound for the ascending eigenvalues used here. Thus if $\|H-H_0\|_{op}\le g/4$, then $\lambda_1(H)\ge c-g/4$ and $\lambda_r(H)\le c+R-g/4$. Since $R-g/4\ge g/4$, every first-$r$ eigenvalue therefore satisfies $|\lambda_j(H)-c|\le R-g/4$, so it lies at least $g/4$ inside the circle centered at $c$. [given, F1, algebra]

2.1 The same eigenvalue estimate gives $\lambda_{r+1}(H)\ge c+R+g/4$, so all remaining eigenvalues satisfy $|\lambda_j(H)-c|\ge R+g/4$ and lie at least $g/4$ outside the circle. Also $\lambda_{r+1}(H)-\lambda_r(H)\ge g-2(g/4)=g/2$. Thus the contour separates exactly the occupied cluster and the stated gap persists. [step 1.1, F1, algebra]

3.1 By [F2], the spectrum of $H$ is real and $H$ diagonalizes unitarily. For every $z\in\Gamma$, reverse triangle gives $|z-\lambda_j(H)|\ge||z-c|-|\lambda_j(H)-c||\ge g/4$ by steps 1.1 and 2.1. In the unitary eigenbasis, $(zI-H)^{-1}$ is diagonal with entries of modulus at most $4/g$. Applying [F3] to a unit vector in this basis gives $\|(zI-H)^{-1}\|_{op}\le4/g$. [step 1.1, step 2.1, F2, F3, algebra] ∎
