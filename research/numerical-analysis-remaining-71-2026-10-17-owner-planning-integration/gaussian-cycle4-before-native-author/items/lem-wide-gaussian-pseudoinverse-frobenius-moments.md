---
id: lem-wide-gaussian-pseudoinverse-frobenius-moments
kind: lemma
title: Exact Frobenius moments of wide Gaussian pseudoinverses
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 3
deps: [def-standard-real-and-normalized-complex-gaussian-matrix-law, lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence, lem-wide-gaussian-matrix-has-full-row-rank-almost-surely, thm-real-beta-gamma-identity, def-real-gamma-function-by-the-euler-integral, cor-real-gamma-one-half-is-root-pi, thm-tonelli-theorem-for-sigma-finite-product-spaces, def-moore-penrose-pseudoinverse, thm-moore-penrose-pseudoinverse-exists-and-is-unique, def-countable-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Halko, Martinsson, and Tropp, Finding Structure with Randomness, Proposition 10.2 and Appendix A.1"
      url: "https://users.oden.utexas.edu/~pgm/Pubs/2010_HMT_random_review.pdf"
    - title: "Martinsson and Tropp, Randomized Numerical Linear Algebra: Foundations & Algorithms, §11.4.2"
      url: "https://arxiv.org/pdf/2002.01387"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice for the finite-dimensional Gaussian probability law.
Let $k\ge1$ and let $p$ be a positive integer, with $p\ge2$ over $\mathbb R$
and $p\ge1$ over normalized $\mathbb C$. Let $G\in F^{k\times(k+p)}$ have iid entries as in
[[def-standard-real-and-normalized-complex-gaussian-matrix-law]]. Then $G$
has full row rank almost surely and
$$\mathbb E\|G^\dagger\|_F^2= \begin{cases}k/(p-1),&F=\mathbb R,\\k/p,&F=\mathbb C.\end{cases}$$
The complex entry convention is variance one, $\mathbb E|G_{ij}|^2=1$. Write
$G^\dagger=G^+$ for the Moore–Penrose pseudoinverse of
[[def-moore-penrose-pseudoinverse]]. On the full-row-rank event,
$$G^\dagger=G^*(GG^*)^{-1},\qquad (G^\dagger)^*G^\dagger=(GG^*)^{-1}.$$
Here $U\sim\Gamma(a,\theta)$ means that $U$ has density
$u^{a-1}e^{-u/\theta}/(\theta^a\Gamma(a))$ for $u>0$. For every diagonal
index $i$, $((GG^*)^{-1})_{ii}$ has distribution $1/U$ with
$U\sim\Gamma((p+1)/2,2)$ over $\mathbb R$ and $U\sim\Gamma(p+1,1)$ over
$\mathbb C$.

## Facts & Assumptions

**Given:** A finite iid Gaussian matrix, with Countable Choice for finite-dimensional Lebesgue measure.

[F1] [[def-standard-real-and-normalized-complex-gaussian-matrix-law]]: rows have independent entries with real density $(2\pi)^{-1/2}e^{-x^2/2}$ or normalized complex density $\pi^{-1}e^{-|z|^2}$.

[F2] A $k\times\ell$ Gaussian matrix with $\ell>k$ has full row rank almost surely ([[lem-wide-gaussian-matrix-has-full-row-rank-almost-surely]]).

[F3] For $a,b>0$, $B(a,b)=\Gamma(a)\Gamma(b)/\Gamma(a+b)$ ([[thm-real-beta-gamma-identity]]).

[F4] The Gamma function is the Euler integral $\Gamma(a)=\int_0^\infty t^{a-1}e^{-t}\,dt$ for $a>0$ ([[def-real-gamma-function-by-the-euler-integral]]).

[F5] Nonnegative measurable functions on a sigma-finite product may be integrated in either order ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F6] $\Gamma(1/2)=\sqrt\pi$ ([[cor-real-gamma-one-half-is-root-pi]]).

[F7] Orthogonal/unitary changes preserve the Gaussian density and its product factorization ([[lem-gaussian-matrix-orthogonal-unitary-invariance-and-block-independence]]).

[F8] A Moore–Penrose pseudoinverse satisfies the four Penrose equations ([[def-moore-penrose-pseudoinverse]]).

[F9] The matrix satisfying those equations is unique ([[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]).

[A1] Countable Choice is the axiom used to obtain the repository's finite-dimensional Lebesgue measure ([[def-countable-choice]]).

## Proof

1.1 Write $G=\begin{bmatrix}g\\H\end{bmatrix}$ with first row $g$ and remaining $k-1$ rows $H$. If $k=1$, set $P=I_{k+p}$; then $GG^*=gg^*=gPg^*$ and the inverse-diagonal identity is immediate. If $k>1$, [F2] gives full row rank of $H$, so $P=I-H^*(HH^*)^{-1}H$ is the orthogonal projector onto $\ker H$, of dimension $(k+p)-(k-1)=p+1$. The Schur complement of $HH^*$ in $GG^*$ is $gPg^*$, so the block inverse formula gives $((GG^*)^{-1})_{11}=(gPg^*)^{-1}$. [given, F2, A1, algebra]

2.1 For each fixed $H$, choose orthonormal coordinates in which $P$ is diagonal with $p+1$ ones. Independence of $g$ from $H$ and invariance [F7] show that $gPg^*$ is a sum of $p+1$ independent squared real Gaussians, or squared moduli of normalized complex Gaussians. A change of variables from $x=\pm\sqrt u$ gives the real square density $u^{-1/2}e^{-u/2}/\sqrt{2\pi}=u^{-1/2}e^{-u/2}/(\sqrt2\Gamma(1/2))$ by [F6]; polar coordinates give the normalized complex square density $e^{-u}$. If independent Gamma variables have common scale $\theta$ and shapes $a,b$, their sum has convolution density proportional to $e^{-s/\theta}\int_0^s u^{a-1}(s-u)^{b-1}du$. Substituting $u=st$ and using [F3] makes this $e^{-s/\theta}s^{a+b-1}B(a,b)$, which is the Gamma density of shape $a+b$ and scale $\theta$. Iterating this finite convolution gives $gPg^*\sim\Gamma((p+1)/2,2)$ over $\mathbb R$ and $gPg^*\sim\Gamma(p+1,1)$ over $\mathbb C$. Tonelli [F5] integrates first over $g$ and then over $H$, so the reciprocal law holds unconditionally for the first diagonal entry; row permutation invariance gives the same law for every index. [step 1.1, F1, F3, F5, F6, F7, choose]

3.1 Direct integration of the Gamma density yields $\mathbb E U^{-1}=\theta^{-1}\Gamma(a-1)/\Gamma(a)$ for $U\sim\Gamma(a,\theta)$ and $a>1$. Integration by parts gives $\Gamma(a)=(a-1)\Gamma(a-1)$; the boundary terms vanish since $u^{a-1}\to0$ at zero and $u^{a-1}e^{-u}\to0$ at infinity. Thus step 2.1 gives $\mathbb E((GG^*)^{-1})_{11}=1/(p-1)$ over $\mathbb R$ and $1/p$ over $\mathbb C$. [step 2.1, F4, algebra]

4.1 By step 2.1 all inverse diagonal entries have the same reciprocal-Gamma law and finite mean in the stated ranges, so $\mathbb E\operatorname{tr}(GG^*)^{-1}$ is $k$ times the value in step 3.1. Put $B=G^*(GG^*)^{-1}$. Then $GB=I_k$, $BG$ is self-adjoint and idempotent, so $GBG=G$, $BGB=B$, $(GB)^*=GB$, and $(BG)^*=BG$; these are the four Penrose equations [F8], hence uniqueness [F9] gives $B=G^\dagger$. Also $B^*B=(GG^*)^{-1}$, and therefore $\|G^\dagger\|_F^2=\operatorname{tr}(GG^*)^{-1}$ almost surely. [step 2.1, step 3.1, F2, F8, F9, algebra] ∎
