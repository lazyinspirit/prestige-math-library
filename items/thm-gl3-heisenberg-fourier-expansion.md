---
dependency_level: 4
id: thm-gl3-heisenberg-fourier-expansion
kind: theorem
title: "Heisenberg Fourier Expansion of a GL3 Automorphic Distribution"
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-full-level-gl3-automorphic-distribution, lem-gl3-heisenberg-periodization-and-schwartz-test-maps, lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients, def-countable-choice]
sources:
  references:
    - title: "Stephen D. Miller and Wilfried Schmid, Automorphic Distributions, L-functions, and Voronoi Summation for GL(3), §§3–4"
      url: "https://arxiv.org/pdf/math/0408100v3"
pipeline_run: number-theory-all-141-2026-10-25
---

## Statement

Assume Countable Choice. Let $N$ be the group of matrices $n(x,y,z)=\begin{pmatrix}1&x&z\\0&1&y\\0&0&1\end{pmatrix}$, with $x,y,z\in\mathbb R$, and let $N_{\mathbb Z}=N\cap\mathrm{GL}_3(\mathbb Z)$. Write $\tau_0(x,y)=\int_0^1\tau(x,y,z)\,dz$ and $c_{r,s}=\langle\tau_0,e(-rx-sy)\rangle$, where $e(t)=\exp(2\pi i t)$. On the compact quotient $X=N_{\mathbb Z}\backslash N$, the strong topology on distributions is defined by the seminorms $T\mapsto\sup_{\phi\in B}|\langle T,\phi\rangle|$ as $B$ ranges over bounded subsets of $C^\infty(X)$; bounded means that every derivative is uniformly bounded in a finite smooth atlas. For the restriction $\tau$ of a full-level GL3 automorphic distribution to $X$, there are unique coefficients $c_{r,s}\in\mathbb C$ and tempered distributions $\sigma_{n,k},\rho_{n,k}\in\mathcal S'(\mathbb R)$, indexed by $r,s\in\mathbb Z$, $n\in\mathbb Z\setminus\{0\}$, and $k\in\mathbb Z/n\mathbb Z$, such that

$$\tau(x,y,z)=\sum_{r,s\in\mathbb Z}c_{r,s}e(rx+sy)+\sum_{n\ne0}\sum_{k\in\mathbb Z/n\mathbb Z}\sum_{\ell\equiv k\pmod n}e(nz+\ell y)\sigma_{n,k}(x+\ell/n).$$

The series converges in the strong topology just defined. With $\widehat f(t)=\int_{\mathbb R}f(u)e(-ut)\,du$ for $f\in\mathcal S(\mathbb R)$, define $\langle\widehat\sigma,f\rangle=\langle\sigma,\widehat f\rangle$ for $\sigma\in\mathcal S'(\mathbb R)$ and define $\widehat a_k=\sum_{\ell\in\mathbb Z/n\mathbb Z}e(k\ell/n)a_\ell$. Then the same distribution has the alternative expansion

$$\tau(x,y,z)=\sum_{r,s\in\mathbb Z}c_{r,s}e(rx+sy)+\sum_{n\ne0}\sum_{k\in\mathbb Z/n\mathbb Z}\sum_{\ell\equiv k\pmod n}e(n(z-xy)+\ell x)\rho_{n,k}(\ell/n-y),$$

where, for every coefficient vector $(a_k)_{k\in\mathbb Z/n\mathbb Z}$,

$$\sum_{k\in\mathbb Z/n\mathbb Z}a_k\rho_{n,k}(y)=\sum_{k\in\mathbb Z/n\mathbb Z}\widehat a_k\,\widehat{\sigma}_{n,k}(ny).$$

Here $\mathcal S(\mathbb R)$ is the space of smooth functions whose derivatives decay faster than every inverse power, and $\mathcal S'(\mathbb R)$ is its continuous dual.

## Statement references

[Miller and Schmid, *Automorphic Distributions, L-functions, and Voronoi Summation for GL(3)*, Proposition 3.18 and §4](https://arxiv.org/pdf/math/0408100v3)


## Facts & Assumptions

**Given:** [[def-countable-choice|Countable Choice]] and the restriction $\tau$ of [[def-full-level-gl3-automorphic-distribution]]. In fact the proof applies to every distribution on $X$.

[F1] [[lem-gl3-heisenberg-periodization-and-schwartz-test-maps]] supplies $E_{n,k},J_{n,k}$, their transposed test maps $A_{n,k},B_{n,k}$, polynomial coefficient bounds, rapid test-map bounds, and the finite Poisson identity. All pairings are linear without complex conjugation.

[F2] [[lem-periodic-continuous-functions-are-determined-by-their-fourier-coefficients]] gives uniqueness for periodic continuous functions. For a smooth periodic function, integration by parts gives rapid coefficient decay, so its Fourier series and every derivative converge uniformly; applying uniqueness identifies that sum with the function. The same argument applied successively to each variable gives the two-torus version.

## Proof

**Given:** The stated data, with normalized quotient Haar density.

1.1 Continuity of $\tau$ on the compact quotient gives $|\langle\tau,\Phi\rangle|\le C p_M(\Phi)$ for some finite smooth-atlas seminorm. Define [F1, given]
$$\langle\sigma_{n,k},f\rangle=\langle\tau,E_{-n,-k}f\rangle,\qquad c_{r,s}=\langle\tau,e(-rx-sy)\rangle.$$
The polynomial bound in [F1] proves that $\sigma_{n,k}$ is tempered and, for fixed $L,P,Q$ independent of $n,k$,
$$|\langle\sigma_{n,k},f\rangle|\le C'(1+|n|)^Lq_{P,Q}(f).$$
Likewise the $c_{r,s}$ have polynomial growth. For $c_{r,s}$ the expression is exactly the pairing with $\tau_0$ specified in the statement, since central averaging is transposed integration over its compact circle. [F1, given]


1.2 For a smooth test $\Phi$, use the notation $h_{n,l}$ and $\chi$ from [F1]. If $l_0\equiv k\pmod n$, its covariance gives [F1, F2]
$$A_{n,k}\Phi(x+l_0/n)=\sum_{q\in\mathbb Z}\chi(x-q)h_{n,l_0+nq}(x-q)=h_{n,l_0}(x).$$
Thus the central Fourier component with frequency $-n$ is precisely $\sum_{k\bmod n}E_{-n,-k}(A_{n,k}\Phi)$. Its $y$-Fourier series and all derivatives converge uniformly on compact $x$ strips by the rapid estimates of [F1], and [F2] identifies that series. The central zero component is the ordinary two-torus Fourier series. Consequently $\Phi$ is the sum of that abelian series and these nonzero central components in $C^\infty(X)$: their derivatives converge absolutely by [F1], summing the $|n|$ residue classes, and periodic Fourier uniqueness identifies the sum. [F1, F2]


2.1 Pair the test expansion of step 1.2 with $\tau$. By the definitions in step 1.1 this gives [F1, F2, step 1.1, step 1.2]
$$\langle\tau,\Phi\rangle=\sum_{r,s}c_{r,s}\int_X e(rx+sy)\Phi+\sum_{n\ne0}\sum_{k\bmod n}\langle\sigma_{n,k},A_{n,k}\Phi\rangle.$$
This is the first displayed distribution expansion: the inner $l$-sum is the periodization $E_{n,k}\sigma_{n,k}$ of [F1]. It has its specified distributional meaning, rather than an assertion that each unperiodized summand separately descends to $X$. For the outer sum combine step 1.1 with the rapid test estimate of [F1], choosing its decay exponent greater than $L+3$. The resulting numerical majorant is summable over $n,k$ uniformly for $\Phi$ in any bounded subset of $C^\infty(X)$. For the abelian part, integration by parts in the two torus variables gives the analogous arbitrarily rapid test decay, which beats the polynomial growth of $c_{r,s}$. Both expansions therefore converge in precisely the strong distribution topology stated. [F1, F2, step 1.1, step 1.2]


2.2 To verify uniqueness, integrate $E_{n,k}f\,E_{-m,-j}g$ for Schwartz $f,g$. Orthogonality in $z$ requires $n=m$; orthogonality in $y$ requires matching the two summation indices, hence $k=j$. When they match, unfolding the intervals $x+l/n$, for $l\equiv k$, gives [F1, step 1.1]
$$\int_X E_{n,k}f\,E_{-n,-k}g=\int_{\mathbb R}f(u)g(u)\,du.$$
By the transposed maps in [F1] the same extraction identity holds for tempered coefficients. Pairing an expansion with $E_{-n,-k}g$ therefore forces exactly $\sigma_{n,k}$ from step 1.1; pairing with $e(-rx-sy)$ forces $c_{r,s}$. Terms with nonzero central frequency do not contribute to the latter pairings. [F1, step 1.1]


3.1 Apply the finite Poisson identity in [F1] to each $\sigma_{n,k}$ and define [F1, step 2.1, step 2.2, algebra]
$$\rho_{n,j}(y)=\sum_{k\bmod n}e(jk/n)\widehat\sigma_{n,k}(ny).$$
This proves the second displayed expansion. It also converges strongly: equivalently define its coefficients by pairing $\tau$ with the opposite-frequency $J$ maps, use the $J$ polynomial bound and the rapid bounds for $B$ in [F1], and repeat steps 1.1–2.2 in the coordinates $w=z-xy$. Fourier orthogonality in $x,w$ and unfolding in $y$ give the identical extraction and uniqueness argument. Hence the coefficients just constructed are exactly those uniquely extracted $J$ coefficients. Finally multiply the displayed finite identity by $a_j$ and sum over $j$; the coefficient of $\widehat\sigma_{n,k}(ny)$ is $\sum_j e(kj/n)a_j=\widehat a_k$. This is the asserted finite Fourier relation with the stated scaling, and proves uniqueness of all three coefficient families. [F1, step 2.1, step 2.2, algebra] ∎
