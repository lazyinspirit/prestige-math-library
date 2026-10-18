---
id: ex-independent-nonidentical-source-has-no-information-rate-limit
title: "Independent non-identical finite sources can have no information-rate limit"
kind: example
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-law-self-information-and-entropy
  - lem-finite-alphabet-iid-information-aep
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Thomas M. Cover and Joy A. Thomas, Elements of Information Theory, 2nd ed., Chapter 3, §3.1"
      url: "https://pages.hmc.edu/ruye/book2/ElementsofInformationTheory.pdf"
    - title: "MIT OpenCourseWare 6.441 Information Theory, Spring 2010, Lecture 3: Convergence and Asymptotic Equipartition Property"
      url: "https://ocw.mit.edu/courses/6-441-information-theory-spring-2010/d58c259c32b5d6ccd38548141239d52e_MIT6_441S10_lec03.pdf"
verification:
  precheck: pass
---

## Example

Let $N_0=0$ and $N_k=2^{k^2}$ for $k\ge1$. For
$N_{k-1}<i\le N_k$, let $p_i$ be the fair Bernoulli law when $k$ is even,
and the point mass at $0$ when $k$ is odd. For each $n$, let
$P_n(x^n)=\prod_{i=1}^np_i(x_i)$ be the resulting finite product law on
$\{0,1\}^n$, and on its support put
$I_n(x^n)=-n^{-1}\ln P_n(x^n)$. These block laws are consistent under
coordinate projection. The coordinates are independent within each block
law, but their marginals are not identical. The normalized information
densities have no limit in probability to a constant, where this means that
$\mathbb P_n(|I_n-c|>\varepsilon)\not\to0$ for some $\varepsilon>0$ and
every constant $c$: at even block endpoints they tend to $\ln2$, and at odd
endpoints they tend to $0$. This example uses only finite product laws; no
infinite-product extension is assumed.

## Facts & Assumptions

**Given:** The endpoint sequence and finite product laws in the Example.

[F1] [[def-finite-law-self-information-and-entropy]]: For a finite law
$q$, its self-information on the support is $-\ln q(x)$.

[F2] [[lem-finite-alphabet-iid-information-aep]]: The AEP conclusion is for
an identically distributed independent sequence.

## Verification

**Given:** The block laws $P_n$ in the Example.

1.1 Each $p_i$ is a probability law on $\{0,1\}$. The finite product $P_n(x^n)=\prod_{i=1}^np_i(x_i)$ is nonnegative and sums to $\prod_{i=1}^n\sum_{x_i\in\{0,1\}}p_i(x_i)=1$, so it is a well-defined finite law. Summing over the last coordinate gives $P_{n-1}$, proving consistency. [given, algebra, construct]

2.1 Let $F_n$ be the number of fair coordinates among $1,\ldots,n$. At every positive-probability word, each fair coordinate contributes $\ln2$ to $-\ln P_n(x^n)$ and every point-mass coordinate contributes $0$. Hence $I_n(x^n):=-n^{-1}\ln P_n(x^n)=F_n\ln2/n$ on the entire support, so its law under $P_n$ is a point mass at this value. [F1, step 1.1, algebra]

3.1 If $k$ is even, the newest block is fair and $N_k-N_{k-1}\le F_{N_k}\le N_k$; since $N_{k-1}/N_k=2^{-2k+1}\to0$, $F_{N_k}/N_k\to1$. If $k$ is odd, the newest block is deterministic and $0\le F_{N_k}\le N_{k-1}$, so $F_{N_k}/N_k\to0$. [step 2.1, algebra]

4.1 By step 2.1, $I_{N_k}$ is deterministic under $P_{N_k}$. Step 3.1 gives subsequential limits $\ln2$ and $0$. For any constant $c$, at least one of $|c|$ and $|c-\ln2|$ is at least $\ln2/2$; along that subsequence, for $\varepsilon=\ln2/3$, the probability of $|I_{N_k}-c|>\varepsilon$ is eventually $1$. Thus there is no limit in probability to a constant. The coordinate laws alternate, so the IID hypotheses of [F2] are absent. [F2, step 2.1, step 3.1, algebra] ∎
