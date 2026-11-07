---
dependency_level: 7
id: thm-maynard-growth-bound-for-hm
kind: theorem
title: "Maynard’s exponential upper bound for H_m"
status: draft
origin: pipeline
deps: [thm-maynard-multidimensional-sieve-dhl-criterion, def-liminf-consecutive-prime-gap-hm, thm-maynard-simplex-growth-bound, thm-chebyshev-prime-counting-bounds, def-natural-logarithm, def-real-exponential-function-and-e, thm-choice-free-bombieri-vinogradov-and-prime-level, def-admissible-prime-tuple, def-prime-counting-function, def-prime, lem-integer-part, thm-logarithm-slower-than-every-positive-power, thm-natural-logarithm-laws, thm-logarithm-derivative-and-integral]
justified_by: []
proof_strategy: direct
axiom_use: "One absolute K and canonical finite prime tuples suffice. Each m fixes its own finite dimension and level before the sieve limit; no choice axiom or simultaneous witness family is assumed."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "James Maynard, “Small gaps between primes” (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
    - title: "Hugh L. Montgomery and Robert C. Vaughan, Multiplicative Number Theory II: Primes and Sieves, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
---

## Statement

There is an absolute constant $C>0$ such that, for every integer $m\ge1$, $H_m\le C m^3e^{4m}$.


## Statement references

[[def-liminf-consecutive-prime-gap-hm|Definition of H_m]]

[[thm-maynard-multidimensional-sieve-dhl-criterion|Maynard sieve criterion]]

[[thm-maynard-simplex-growth-bound|Growth of M_k]]

[[thm-chebyshev-prime-counting-bounds|Chebyshev prime-counting bounds]]


## Facts & Assumptions

**Given:** An integer $m\ge1$; the proof will choose one absolute constant independent of $m$.

[F1] [[thm-chebyshev-prime-counting-bounds]] gives absolute $c_1>0,x_0$ with $\pi(X)\ge c_1X/\log X$ for $X\ge x_0$. [[def-prime-counting-function]] counts positive primes at most its real endpoint.

[F2] [[def-admissible-prime-tuple]] specifies missing residue classes at every prime. [[def-prime]] implies that distinct positive primes do not divide each other.

[F3] [[thm-logarithm-derivative-and-integral]] and [[thm-natural-logarithm-laws]] give monotonicity, product and integral laws for $\log$. [[thm-logarithm-slower-than-every-positive-power]] gives $\log t/t^\delta\to0$ for $\delta>0$. [[def-natural-logarithm]] and [[def-real-exponential-function-and-e]] give $e=\exp(1)$, $\log(\exp u)=u$, and $\exp u\ge1+u$ for $u\ge0$ by its series. Repeated product laws give $\log(e^{4m})=4m$ for integer $m$.

[F4] [[thm-maynard-simplex-growth-bound]] supplies an absolute integer $k_0$ such that $M_k>\log k-2\log\log k-2$ for every integer $k\ge k_0$.

[F5] [[lem-integer-part]] gives the unique floor and thus $\lceil x\rceil=-\lfloor-x\rfloor$, with $x\le\lceil x\rceil<x+1$.

[F6] [[thm-choice-free-bombieri-vinogradov-and-prime-level]] supplies every fixed level $0<\theta<1/2$ without a choice hypothesis, with the full von Mangoldt endpoint convention.

[F7] [[thm-maynard-multidimensional-sieve-dhl-criterion]] gives $H_m$ at most the diameter of an admissible $k$-tuple at a given level whenever $M_k>2m/\theta$, for all fixed integers $k\ge2,m\ge1$. [[def-liminf-consecutive-prime-gap-hm]] defines $H_m$.

## Proof

1.1 Put $D_0=\max(1,4/c_1)$, using [F1]. Choose an absolute integer $k_*\ge2$ such that for every integer $k\ge k_*$, $X=D_0k\log k\ge x_0$ and $\log X\le2\log k$. This is possible by [F3], since $D_0\log k\le k$ eventually and $k\log k\to\infty$; an integer threshold exists by [F5]. Then [F1, F2, F3, F5, given, construct, algebra]
$$\pi(D_0k\log k)\ge\frac{c_1D_0k\log k}{2\log k}\ge2k,\qquad \pi(k)\le k.$$
Consequently the interval $(k,D_0k\log k]$ contains at least $k$ primes. Let $H_k$ consist of its least $k$ primes. Every prime $p\le k$ misses residue $0$, because all these entries are primes greater than $k$ and distinct from $p$. For every prime $p>k$, at most $k<p$ residue classes are occupied. Thus [F2] makes $H_k$ admissible, with diameter at most $D_0k\log k$. This canonical finite construction works for every $k\ge k_*$. [F1, F2, F3, F5, given, construct, algebra]

2.1 Choose ONE absolute real $K\ge\max(2,k_0,k_*)$ with [F3, F4, F5, step 1.1, given, construct, algebra]
$$\log K-2\log(6+\log(2K))>3. \tag{1}$$
To see existence, put $u=\log K$; for large $u$, $\log(6+\log2+u)\le\log(2u)=\log2+\log u$, whose ratio to $u$ tends to zero by [F3]. Thus $u-2\log(6+\log2+u)\to\infty$. Taking $K=\exp u\ge1+u$ also makes it exceed the finitely many absolute thresholds. For the given $m\ge1$ set
$$k=\lceil Km^2e^{4m}\rceil,\qquad A_K=6+\log(2K).$$
By [F5], $Km^2e^{4m}\le k\le2Km^2e^{4m}$, since the expression inside the ceiling is at least one. In particular $k\ge k_0,k_*,2$. Moreover
$$\log k\ge4m+2\log m+\log K,\qquad \log k\le4m+2\log m+\log(2K)\le mA_K.$$
Here $\log m=\int_1^m dt/t\le m-1\le m$ and $\log(2K)\ge0$ justify the last inequality for EVERY $m\ge1$, not only asymptotically. [F3, F4, F5, step 1.1, given, construct, algebra]

3.1 Since $\log k>0$, step 2.1 gives $\log\log k\le\log m+\log A_K$. Use [F4] and (1) to obtain [F3, F4, step 2.1, algebra, construct]
$$M_k>\log k-2\log\log k-2\ge4m+\log K-2\log A_K-2>4m+1.$$
Put $\theta_m=(2m/(4m+1)+1/2)/2$. Then $0<2m/(4m+1)<\theta_m<1/2$ and $2m/\theta_m<4m+1<M_k$. The dimension and level are now fixed for this $m$. [F3, F4, step 2.1, algebra, construct]

4.1 Apply [F6] at this fixed $\theta_m$ and then [F7] to the tuple $H_k$ from step 1.1, with the dimension and threshold from steps 2.1–3.1. It gives [F6, F7, step 1.1, step 2.1, step 3.1, algebra]
$$H_m\le\operatorname{diam}(H_k)\le D_0k\log k\le2D_0K A_K\,m^3e^{4m}.$$
Thus $C=2D_0K A_K>0$ is one absolute constant for every integer $m\ge1$. The same single $K$ handled every small $m$ and both prerequisite thresholds; no unproved finite-exception branch is used. For each $m$ we fix $k$ and $\theta_m$ before the sieve endpoint tends to infinity in [F7]. Its thresholds may depend on $m$, while $C$ does not. All selections were one absolute witness and explicit finite constructions; no family of prime-translate witnesses is chosen. This proves the entire original unqualified Statement. [F6, F7, step 1.1, step 2.1, step 3.1, algebra] ∎

## Source notes

The variational growth theorem and full abstract sieve criterion now have complete accepted local proofs. This proof constructs the needed ordinary admissible tuples from the literal Chebyshev interface and obtains every fixed level below one half from the separately supplied unqualified distribution route. The older BV and cutoff corollary, with their AC/Countable Choice/Dependent Choice hypotheses, remain unchanged historical providers; they are not active premises here.

The bound is an absolute-constant statement for each integer $m$, with its dimension fixed before the sieve limit. It supplies no growing-dimension-with-endpoint sieve estimate, no enlarged-support or GEH conclusion, and no new numerical certificate. No effectivity of the absolute constant is asserted in the Statement or used in the proof.
