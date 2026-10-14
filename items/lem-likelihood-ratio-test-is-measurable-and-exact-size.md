---
id: lem-likelihood-ratio-test-is-measurable-and-exact-size
kind: lemma
title: "The likelihood-ratio rule is a measurable test of exact size"
status: draft
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 7
deps:
  - def-likelihood-ratio-test-with-boundary-randomization
  - def-likelihood-density
  - def-radon-nikodym-derivative
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - lem-common-support-likelihood-ratio-is-measurable
  - lem-measurable-rejection-function-defines-randomized-test
  - def-measurable-function-between-measurable-spaces
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - prop-measure-monotonicity
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-test-size-and-power
  - def-probability-measure
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §13.1.2, PDF p. 77"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 9: Uniformly Most Powerful Tests, PDF pp. 2–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/0427ff2a36e01927fa4b692a6d60a81a_MIT14_381F18_lec9.pdf"
---

## Statement

In the setup of [[def-likelihood-ratio-test-with-boundary-randomization]],
for every $\alpha\in[0,1]$ the candidate rejection function
$\varphi^*_\alpha$ is measurable into $[0,1]$, defines a randomized test,
and has size exactly $\alpha$ for the simple null $P_0$.

## Facts & Assumptions

**Given:** The common-dominator two-law experiment, specified density
representatives $p_0,p_1$, and $\alpha\in[0,1]$. The proof uses only these
fixed representatives.

[F1] [[def-likelihood-ratio-test-with-boundary-randomization]] and
[[def-likelihood-density]]: $p_0,p_1$ are finite, nonnegative measurable
densities; the candidate is $\mathbf1_U$ at $\alpha=0$ and
$\mathbf1_U+\mathbf1_A+\gamma\mathbf1_B$ at $\alpha>0$, where
$U=\{p_0=0<p_1\}$, $A=\{p_0>0,R>c\}$, and
$B=\{p_0>0,R=c\}$; in the latter case $c\ge0$, $0\le\gamma\le1$, and
$P_0(R>c)+\gamma P_0(R=c)=\alpha$.

[F2] [[lem-common-support-likelihood-ratio-is-measurable]]: $R$ is finite,
nonnegative, and measurable.

[F3] [[def-measurable-function-between-measurable-spaces]]: preimages of
Borel sets under $p_0,p_1,R$ are measurable.

[F4] [[prop-closure-properties-of-measurable-functions-used-by-the-integral]]:
finite sums and real scalar multiples of measurable functions are
measurable.

[F5] [[lem-measurable-rejection-function-defines-randomized-test]]: every
measurable $[0,1]$-valued rejection function defines a binary randomized
test.

[F6] [[def-radon-nikodym-derivative]] and
[[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]:
for every measurable $C$, $P_0(C)=\int_Cp_0\,d\mu$.

[F7] [[def-nonnegative-simple-measurable-function]],
[[def-integral-of-a-nonnegative-simple-function]], and
[[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: the
integral of a finite-valued nonnegative simple function is the sum of its
values times the measures of their disjoint level sets.

[F8] [[prop-measure-monotonicity]]: a measurable subset of a measurable $P_0$-null set
is $P_0$-null.

[F9] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and
[[def-probability-measure]]: $E_{P_0}$ is integration under the probability
measure $P_0$.

[F10] [[def-test-size-and-power]]: for the simple null $\{0\}$, size is the
expectation of the rejection function under $P_0$.

## Proof

**Proof technique:** direct.

1.1 The sets $U,A,B$ in [F1] are measurable by [F2] and [F3]. For $\alpha>0$ they are pairwise disjoint, so [F4] makes $\varphi^*_\alpha=\mathbf1_U+\mathbf1_A+\gamma\mathbf1_B$ measurable; for $\alpha=0$, [F4] makes $\mathbf1_U$ measurable. [F1, F2, F3, F4]

1.2 Let $N=\{p_0=0\}$. By [F1], [F6], and the zero-function case of [F7], $P_0(N)=\int_Np_0\,d\mu=0$, since $p_0$ vanishes on $N$. Thus $P_0(U)=0$ by [F8]. [F1, F6, F7, F8, algebra]

2.1 The disjointness and $0\le\gamma\le1$ show that every value of $\varphi^*_\alpha$ lies in $[0,1]$. Hence [F5] makes it a randomized test. [F1, F5, step 1.1, algebra]

2.2 If $\alpha=0$, [F1] gives $\varphi^*_0=\mathbf1_U$. The simple integral identity [F7] and [F9] give $E_{P_0}[\varphi^*_0]=P_0(U)=0$, so [F10] makes its size $0=\alpha$. [F1, F7, F9, F10, step 1.2]

3.1 Suppose $\alpha>0$. Since $R=0$ on $N$ and $c\ge0$, $A=\{R>c\}$. Also $B=\{R=c\}$ when $c>0$; when $c=0$, the two sets differ only by $N$. Step 1.2 makes that difference $P_0$-null. The three disjoint indicator terms in [F1] therefore have expectation $P_0(R>c)+\gamma P_0(R=c)=\alpha$ by [F7], [F9], and the threshold equation in [F1]. By [F10], the test has size $\alpha$. [F1, F7, F9, F10, step 1.2, algebra] ∎
