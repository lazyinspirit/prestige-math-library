---
id: ex-tightness-times-smallness-and-root-n-rate
kind: example
title: "A tight factor times a vanishing factor"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 2
deps: [def-measurable-function-between-measurable-spaces, def-measurable-space, def-measure, def-op-and-little-op-stochastic-bounds, def-probability-measure, def-random-element-and-real-random-variable, def-sigma-algebra, thm-vector-stochastic-order-calculus]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Stat 210B Lecture 16, PDF pp. 9–11"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/16notes.pdf"
    - title: "John Duchi, Theory of Statistics, Stats 300B Lecture 2, Winter 2018, PDF pp. 1–3"
      url: "https://web.stanford.edu/class/stats300b/ScribeNotes/2021/lecture-02.pdf"
---

## Example

Let $(\Omega,\mathcal A,P)$ be the two-point probability space $\Omega=\{-1,1\}$ with the power-set sigma-algebra and equal point masses, and set $Z(\omega)=\omega$. On this same space for each $n\ge1$, put $Z_n=Z$, $a_n=n^{-1/2}$, and $R_n=a_nZ_n$. Then $Z_n=O_P(1)$ and $a_n=o_P(1)$, so the finite-dimensional product rule gives $R_n=o_P(1)$. Moreover $\sqrt n R_n=Z_n=O_P(1)$, the precise root-$n$ boundedness assertion.

## Facts & Assumptions

**Given:** The probability space and sequences in the example.

[F1] [[def-sigma-algebra]]: The power set of a set is a sigma-algebra.

[F2] [[def-measurable-space]]: A measurable space is a set equipped with a sigma-algebra.

[F3] [[def-measure]]: A measure is countably additive on pairwise disjoint measurable sets and assigns measure zero to the empty set.

[F4] [[def-probability-measure]]: A probability measure is a measure with total mass one.

[F5] [[def-measurable-function-between-measurable-spaces]]: A map is measurable when every measurable target set has measurable preimage.

[F6] [[def-random-element-and-real-random-variable]]: A measurable map into the real line with its Borel sigma-algebra is a real random variable.

[F7] [[def-op-and-little-op-stochastic-bounds]]: $U_n=o_P(1)$ means $P_n(|U_n|>\varepsilon)\to0$ for every $\varepsilon>0$; $U_n=O_P(1)$ means that for every $\eta>0$ some $M>0$ has $\limsup_nP_n(|U_n|>M)\le\eta$.

[F8] [[thm-vector-stochastic-order-calculus]]: If $U_n=o_P(1)$ and $V_n=O_P(1)$, then $B(U_n,V_n)=o_P(1)$ for every fixed bilinear map with a global product norm bound.

## Verification

1.1 The power set on $\Omega$ is a sigma-algebra by [F1], hence gives a measurable space by [F2]. Assigning mass $1/2$ to each singleton defines a measure: any pairwise disjoint sequence contains at most two nonempty sets, and the mass of their union is the sum of their masses. Its total mass is one, so it is a probability measure by [F3]–[F4]. The identity map $Z$ is measurable because every preimage of a Borel set is a subset of $\Omega$; thus it is a real random variable by [F5]–[F6]. [F1, F2, F3, F4, F5, F6, given]

1.2 For every $n$, $|Z_n|=1$ everywhere, so choosing $M=1$ makes $P(|Z_n|>M)=0$ and proves $Z_n=O_P(1)$ by [F7]. For each $\varepsilon>0$, $n^{-1/2}\le\varepsilon$ for all sufficiently large $n$, so $P(|a_n|>\varepsilon)=0$ eventually; hence $a_n=o_P(1)$ by [F7]. [F7, given, choose]

2.1 The multiplication map $B(u,v)=uv$ satisfies $|B(u,v)|=|u||v|$ for all real $u,v$, so it has the required bilinear norm bound with constant one. Each $R_n=a_nZ_n$ is measurable because the power-set sigma-algebra on $\Omega$ contains every preimage. Thus [F8] applies to $a_n=o_P(1)$ and $Z_n=O_P(1)$ and gives $R_n=o_P(1)$. The identity $\sqrt nR_n=Z_n$ then gives $\sqrt nR_n=O_P(1)$ from step 1.2. For the finite check $n=4$, $R_4$ takes the values $\pm1/2$ and $\sqrt4R_4$ takes the values $\pm1$. [F1, F7, F8, given, step 1.1, step 1.2, algebra] ∎
