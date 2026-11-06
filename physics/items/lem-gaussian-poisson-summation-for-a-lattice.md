---
id: lem-gaussian-poisson-summation-for-a-lattice
kind: lemma
title: Gaussian Poisson summation for a full-rank lattice
domain: mathematics
library: physics
category: string-theory
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
deps:
  - def-full-rank-lattice-covolume-and-dual-lattice
  - lem-gaussian-fourier-transform-by-improper-integrals
  - thm-ratio-test
  - thm-change-of-variables-for-compact-jordan-sets
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-heine-cantor-metric
  - thm-uniform-limit-continuous-complex-functions
  - def-improper-multiple-integral-and-absolute-convergence
  - thm-absolute-improper-multiple-integral-by-exhaustion
dependency_roles:
  def-full-rank-lattice-covolume-and-dual-lattice: mathematical-premise
  lem-gaussian-fourier-transform-by-improper-integrals: mathematical-premise
  thm-ratio-test: mathematical-premise
  thm-change-of-variables-for-compact-jordan-sets: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-heine-cantor-metric: mathematical-premise
  thm-uniform-limit-continuous-complex-functions: mathematical-premise
  def-improper-multiple-integral-and-absolute-convergence: mathematical-premise
  thm-absolute-improper-multiple-integral-by-exhaustion: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Noam Elkies, Theta functions and weighted theta functions of Euclidean lattices"
      url: "https://people.math.harvard.edu/~elkies/aws09.pdf"
      locator: "§2, Theorem 2 and proof equations (26)-(31), printed pp. 9-10: periodize a rapidly decaying function over a lattice, compute Fourier coefficients on a fundamental domain, and compare with its dual-lattice Fourier series. The local proof below proves its Gaussian case directly and includes the torus uniqueness step."
---

## Statement

Let $n\ge1$, let $A\in GL_n(\mathbb R)$, and set $\Lambda=A\mathbb Z^n$, $\Lambda^*=A^{-T}\mathbb Z^n$, and $c=|\det A|$. For $t>0$ and $x\in\mathbb R^n$,
$$\sum_{\lambda\in\Lambda}e^{-\pi t|x+\lambda|^2}=c^{-1}t^{-n/2}\sum_{\mu\in\Lambda^*}e^{-\pi|\mu|^2/t}e^{2\pi i\mu\cdot x}.$$
Each lattice sum is defined as the limit of its finite sums over coordinate boxes $[-N,N]^n$ in its integer lattice coordinates; the proof shows absolute convergence of these sums.

## Facts & Assumptions

**Given:** $n\ge1$, an invertible real matrix $A$, $t>0$, the standard Euclidean inner product on $\mathbb R^n$, and the lattice, dual, and covolume conventions in the Statement.

[F1] The dual and covolume of $A\mathbb Z^n$ are $A^{-T}\mathbb Z^n$ and $|\det A|$ ([[def-full-rank-lattice-covolume-and-dual-lattice]]).

[F2] With Fourier convention $e^{-2\pi i x\cdot\xi}$, the absolutely convergent improper Fourier integral of $e^{-\pi t|x|^2}$ is $t^{-n/2}e^{-\pi|\xi|^2/t}$ ([[lem-gaussian-fourier-transform-by-improper-integrals]]).

[F3] A positive series converges when the ratio of successive terms is eventually bounded above by a constant less than $1$ ([[thm-ratio-test]]).

[F4] A $C^1$ diffeomorphism on a neighborhood of a compact Jordan set changes its Riemann integral by the absolute Jacobian ([[thm-change-of-variables-for-compact-jordan-sets]]).

[F5] Continuous functions on compact Jordan sets are Riemann integrable ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[F6] A continuous function on a compact metric space is uniformly continuous ([[thm-heine-cantor-metric]]).

[F7] A uniform limit of continuous complex-valued functions on a metric space is continuous ([[thm-uniform-limit-continuous-complex-functions]]).

[F8] Absolute improper integrability is defined through the improper integral of the modulus, and an absolutely improperly integrable function has the same integral along every compact Jordan exhaustion ([[def-improper-multiple-integral-and-absolute-convergence]], [[thm-absolute-improper-multiple-integral-by-exhaustion]]).

[L1] For a function $g$ on $\mathbb R^n$, write $\widehat g(m)=\int_{[0,1]^n}g(y)e^{-2\pi i m\cdot y}\,dy$ for its integer Fourier coefficient when $g$ is continuous and $1$-periodic in each coordinate.

## Proof

**Proof technique:** direct.

1.1 For a real matrix $B=(b_{ij})$ and $v\in\mathbb R^n$, each component satisfies $|(Bv)_i|\le(\sum_j|b_{ij}|)|v|$, since $|v_j|\le|v|$; hence $|Bv|\le C_B|v|$ with $C_B:=\sqrt n\max_i\sum_j|b_{ij}|<\infty$. Apply this to $B=A^{-1},A^T,A^{-T}$ and denote their constants by $C_{A^{-1}},C_{A^T},C_{A^{-T}}$. Define $p(y):=\sum_{k\in\mathbb Z^n}e^{-\pi t|A(y+k)|^2}$ for $y\in\mathbb R^n$. On any compact $K\subset\mathbb R^n$, put $M_K:=\sup_{y\in K}|y|<\infty$. If $|k|\ge2(M_K+1)$ then $|y+k|\ge|k|-M_K\ge|k|/2$, and therefore $|A(y+k)|\ge C_{A^{-1}}^{-1}|k|/2$. The summand is bounded uniformly for $y\in K$ by $e^{-a|k|^2}$ with $a=\pi t/(4C_{A^{-1}}^2)>0$. The number of integer vectors with $j\le|k|<j+1$ is at most $(2j+3)^n$, and $\sum_{j\ge1}(2j+3)^ne^{-aj^2}$ converges by [F3], since its successive-term ratio tends to $0$. Thus the series converges absolutely and uniformly on every compact $K$. Its finite partial sums are continuous, so [F7], applied on each compact cube, makes $p$ continuous on $\mathbb R^n$. Reindexing the absolutely convergent series gives $p(y+\ell)=p(y)$ for every $\ell\in\mathbb Z^n$. [F3, F7, algebra]

2.1 For $m\in\mathbb Z^n$, integrate the finite partial sums of [L1] over $[0,1]^n$ and pass to the limit using the uniform convergence of step 1.1. For each $k$, substitution $z=y+k$ gives
$$\int_{[0,1]^n}e^{-\pi t|A(y+k)|^2}e^{-2\pi i m\cdot y}\,dy=\int_{k+[0,1]^n}e^{-\pi t|Az|^2}e^{-2\pi i m\cdot z}\,dz,$$
because $e^{2\pi i m\cdot k}=1$. The cubes for $k\in[-N,N]^n\cap\mathbb Z^n$ have disjoint interiors and union $[-N,N+1]^n$ up to their faces. Their images under $A$ form a nested compact Jordan exhaustion of $\mathbb R^n$. The integrand's modulus after the linear change $w=Az$ is $e^{-\pi t|w|^2}$, which is absolutely improperly integrable by [F2]. Thus [F8] shows that the integrals over these parallelepipeds converge to the full-space integral. Apply [F4] to the real and imaginary parts on each finite box and then take the limit. This gives
$$\widehat p(m)=c^{-1}\int_{\mathbb R^n}e^{-\pi t|w|^2}e^{-2\pi i(A^{-T}m)\cdot w}\,dw=c^{-1}t^{-n/2}e^{-\pi|A^{-T}m|^2/t}$$
by [F2]. [F1, F2, F4, F5, F8, L1, step 1.1, algebra]

3.1 Define $s(y):=c^{-1}t^{-n/2}\sum_{m\in\mathbb Z^n}e^{-\pi|A^{-T}m|^2/t}e^{2\pi i m\cdot y}$. Since $|A^{-T}m|\ge C_{A^T}^{-1}|m|$ by the matrix estimate in step 1.1, the same shell and ratio estimate proves absolute, uniform convergence on $\mathbb R^n$; [F7] makes $s$ continuous, and reindexing proves it is integer-periodic. Integrating its finite partial sums and using $\int_{[0,1]^n}e^{2\pi i(m-r)\cdot y}\,dy=1$ for $m=r$ and $0$ otherwise (factor the integral into one-dimensional finite integrals) shows that $\widehat s(m)=\widehat p(m)$ by step 2.1. [F1, F3, F5, F7, L1, step 1.1, step 2.1, algebra]

4.1 Put $h=p-s$. It is continuous, integer-periodic, and has every Fourier coefficient zero by step 3.1. For $N\ge0$ define the one-dimensional Fejér kernel
$$F_N(u):=\frac1{N+1}\left|\sum_{j=0}^N e^{2\pi iju}\right|^2=\sum_{|r|\le N}\left(1-\frac{|r|}{N+1}\right)e^{2\pi iru},$$
and the product kernel $K_N(z):=\prod_{j=1}^nF_N(z_j)$. Expanding the square shows $F_N\ge0$ and gives the displayed finite Fourier sum; its integral on $[0,1]$ is its constant coefficient $1$, so $K_N\ge0$ and its integral on $[0,1]^n$ is $1$. Write $K_N(z)=\sum_{m\in[-N,N]^n}w_m e^{2\pi i m\cdot z}$. For each term, the substitution $u=y-z$ gives
$$\int_{[0,1]^n}h(y-z)e^{2\pi i m\cdot z}\,dz=e^{2\pi i m\cdot y}\int_{y-[0,1]^n}h(u)e^{-2\pi i m\cdot u}\,du=e^{2\pi i m\cdot y}\widehat h(m).$$
The last equality holds because $u\mapsto h(u)e^{-2\pi i m\cdot u}$ is continuous and $1$-periodic in each coordinate; its integral is unchanged when a unit interval is translated, by splitting the translated interval at an integer and using periodicity, and applying this one-coordinate identity successively to the rectangular integral. Hence $\sigma_Nh(y):=\int_{[0,1]^n}h(y-z)K_N(z)\,dz=\sum_mw_me^{2\pi i m\cdot y}\widehat h(m)=0$. To see that $\sigma_Nh\to h$ uniformly, first use periodicity to take $y\in[0,1]^n$. Apply [F6] to $h$ on the compact cube $[-1,2]^n$ to choose $0<\delta<1/2$ such that $|h(y-w)-h(y)|<\varepsilon$ whenever $|w|_\infty<\delta$ and both points lie in that cube. If every coordinate of $z$ has distance less than $\delta$ from $\mathbb Z$, choose $k\in\mathbb Z^n$ with $w=z-k$ and $|w|_\infty<\delta$; periodicity gives $h(y-z)=h(y-w)$. On the complement, the geometric-sum formula $\sum_{j=0}^Ne^{2\pi iju}=(1-e^{2\pi i(N+1)u})/(1-e^{2\pi iu})$ and $|1-e^{2\pi iu}|=2|\sin\pi u|$ give $F_N(u)\le((N+1)\sin^2(\pi\delta))^{-1}$. The complement is a union of $n$ coordinate-tail sets; integrating the product kernel, using nonnegativity and the unit integral of each other coordinate factor, bounds its mass by $n/((N+1)\sin^2(\pi\delta))$. The uniform majorants in steps 1.1 and 3.1 bound $|h|$ by some finite $M$, so
$$\sup_y|\sigma_Nh(y)-h(y)|\le\varepsilon+2\|h\|_\infty\frac{n}{(N+1)\sin^2(\pi\delta)},$$
which tends to at most $\varepsilon$. Since $\varepsilon$ is arbitrary and every $\sigma_Nh=0$, $h=0$ and $p=s$. [F5, F6, L1, step 1.1, step 3.1, algebra]

5.1 For arbitrary $x\in\mathbb R^n$ set $y=A^{-1}x$. Then $p(y)=\sum_{k\in\mathbb Z^n}e^{-\pi t|x+Ak|^2}$. In the series for $s(y)$ put $\mu=A^{-T}m$; then $m\cdot y=(A^{-T}m)\cdot x=\mu\cdot x$. The equality $p=s$ from step 4.1 is therefore exactly the identity in the Statement. The uniform absolute convergence proved in steps 1.1 and 3.1 establishes the convergence of both coordinate-box sums. [F1, step 1.1, step 3.1, step 4.1, algebra] ∎
