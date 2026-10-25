---
id: thm-neyman-pearson-lemma
kind: theorem
title: "Neyman–Pearson lemma with singular alternative mass"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 8
deps:
  - def-axiom-of-choice
  - def-statistical-experiment
  - def-dominated-statistical-experiment
  - def-likelihood-density
  - def-randomized-test
  - def-test-size-and-power
  - def-likelihood-ratio-test-with-boundary-randomization
  - lem-likelihood-ratio-test-is-measurable-and-exact-size
  - lem-likelihood-ratio-threshold-exists
  - lem-integrable-signed-function-integration-against-density
  - def-measure
  - def-probability-measure
  - prop-measure-monotonicity
  - def-measure-with-density
  - thm-integration-against-a-density
  - def-integrable-real-and-complex-functions-and-their-integrals
  - prop-closure-properties-of-measurable-functions-used-by-the-integral
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - def-nonnegative-simple-measurable-function
  - def-integral-of-a-nonnegative-simple-function
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - def-measurable-function-between-measurable-spaces
  - def-sigma-algebra
  - thm-well-ordering-principle
  - cor-archimedean-reciprocal
justified_by: []
strategy: "Compare the candidate and competitor by the sign of (φ*−φ)(p1−cp0) on {p0>0}, and handle {p0=0<p1} separately. Treat α=0 directly because no finite cutoff represents the empty rejection region for an unbounded likelihood ratio."
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-14
sources:
  references:
    - title: "George Deligiannidis, SB2.1 Foundations of Statistical Inference, Chapter 13, §13.1.2, PDF p. 77"
      url: "https://www.stats.ox.ac.uk/~deligian/pdf/sb21/sb21_notes.pdf"
    - title: "Anna Mikusheva, MIT 14.381 Lecture 9: Uniformly Most Powerful Tests, PDF pp. 2–3"
      url: "https://ocw.mit.edu/courses/14-381-statistical-method-in-economics-fall-2018/0427ff2a36e01927fa4b692a6d60a81a_MIT14_381F18_lec9.pdf"
    - title: "Karl B. Gregory, USC STAT 713 Lecture 11: Neyman–Pearson and Karlin–Rubin, PDF pp. 7–9"
      url: "https://people.stat.sc.edu/gregorkb/STAT_713_sp_2023/STAT_713_Lec_11_slides_annotated.pdf"
---

## Statement

Let $\mathsf E=((\mathcal X,\mathcal A),\{0,1\},(P_0,P_1))$ be the
two-law experiment with simple null $P_0$ and simple alternative $P_1$.
Assume both laws are dominated by a common sigma-finite measure $\mu$ and
assume the Axiom of Choice, so finite nonnegative density representatives
$p_0,p_1$ are supplied by [[def-likelihood-density]]. For every
$\alpha\in[0,1]$, let $\varphi_\alpha^*$ be the likelihood-ratio test with
boundary randomization from
[[def-likelihood-ratio-test-with-boundary-randomization]]. Then every
randomized test $\varphi$ satisfying
$E_{P_0}[\varphi(X)]\le\alpha$ also satisfies
$$E_{P_1}[\varphi(X)]\le E_{P_1}[\varphi_\alpha^*(X)].$$
No absolute-continuity assumption $P_1\ll P_0$ is imposed; the test rejects
on $\{p_0=0<p_1\}$.

## Facts & Assumptions

**Given:** The two-law experiment, a common sigma-finite dominator $\mu$,
the Axiom of Choice, $\alpha\in[0,1]$, and a randomized test $\varphi$ of
size at most $\alpha$ under $P_0$.

[A1] [[def-axiom-of-choice]]: AC is assumed only for selecting the finite nonnegative density representatives in [F2].

[F1] [[def-dominated-statistical-experiment]]: $\mu$ is sigma-finite and $P_i\ll\mu$ for $i=0,1$.

[F2] [[def-likelihood-density]]: under AC, $P_i$ has a finite-valued nonnegative measurable density representative $p_i$ with $P_i(A)=\int_Ap_i\,d\mu$.

[F3] [[def-randomized-test]]: a randomized-test function is measurable and takes values in $[0,1]$; its value is the conditional rejection probability.

[F4] [[def-test-size-and-power]]: the competitor has $E_{P_0}\varphi\le\alpha$ and its power under $P_1$ is $E_{P_1}\varphi$.

[F5] [[def-likelihood-ratio-test-with-boundary-randomization]] and [[lem-likelihood-ratio-test-is-measurable-and-exact-size]]: the candidate is a measurable randomized test with exact size $\alpha$; for $\alpha>0$ it rejects on $\{p_0=0<p_1\}$ and above the cutoff $c$, and uses probability $\gamma$ at $R=c$; for $\alpha=0$ it rejects on $\{p_0=0<p_1\}$.

[F6] [[def-measure-with-density]] and [[thm-integration-against-a-density]]: for nonnegative measurable $g$, $E_{P_i}g=\int gp_i\,d\mu$.

[F7] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: the nonnegative integral is monotone and homogeneous for nonnegative scalars.

[F8] [[def-integrable-real-and-complex-functions-and-their-integrals]] and [[thm-linearity-of-the-lebesgue-integral-on-l-one]]: integrable real functions have finite linear integral.

[F9] [[def-measure]]: countable unions of pairwise disjoint measurable sets have measure equal to the sum of their measures.

[F10] [[def-measurable-function-between-measurable-spaces]], [[prop-closure-properties-of-measurable-functions-used-by-the-integral]], and [[thm-arithmetic-and-lattice-operations-preserve-measurability]]: level sets and the finite sums, products, and differences used below are measurable.

[F11] [[def-nonnegative-simple-measurable-function]], [[def-integral-of-a-nonnegative-simple-function]], and [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]: for a measurable set $B$, $\int \mathbf1_B\,d\mu=\mu(B)$.

[F12] [[prop-measure-monotonicity]]: a measurable subset of a null set has measure zero.

[F13] [[def-sigma-algebra]]: measurable sets are closed under complements and countable unions, hence under finite set differences.

[F14] [[thm-well-ordering-principle]]: every nonempty subset of the natural numbers has a least member.

[F15] [[lem-integrable-signed-function-integration-against-density]]: for a bounded measurable real $D$, $E_{P_i}D=\int Dp_i\,d\mu$.

[F16] [[cor-archimedean-reciprocal]]: for each positive real $a$, there is a positive integer $n$ with $1/n<a$.

## Proof

**Proof technique:** direct.

1.1 First suppose $\alpha>0$, so the cutoff $c$ in [F5] is finite. Put $D=\varphi_\alpha^*-\varphi$. Then $D$ is measurable and $|D|\le1$. By [F2] and [F6], $\int p_i\,d\mu=P_i(\mathcal X)=1$, so $|Dp_i|\le p_i$ makes $Dp_i$ integrable for $i=0,1$. Since $c$ is finite, $D(p_1-cp_0)$ is also integrable. [A1, F1, F2, F3, F5, F6, F8, F10, given]

2.1 On $\{p_0=0\}$, if $p_1>0$ then [F5] gives $\varphi_\alpha^*=1$, so $D(p_1-cp_0)\ge0$; if $p_1=0$, the product is zero. On $\{p_0>0\}$, write $R=p_1/p_0$. If $R>c$, then $\varphi_\alpha^*=1$ and both $D$ and $p_1-cp_0$ are nonnegative. If $R<c$, then $\varphi_\alpha^*=0$ and both are nonpositive. If $R=c$, the second factor is zero. Thus $D(p_1-cp_0)\ge0$ everywhere. [F2, F3, F5, F10, step 1.1]

2.2 The signed density identity [F15] and linearity [F8] give $\int D(p_1-cp_0)\,d\mu=(E_{P_1}\varphi_\alpha^*-E_{P_1}\varphi)-c(E_{P_0}\varphi_\alpha^*-E_{P_0}\varphi)$. [F8, F15, step 1.1, algebra]

3.1 By monotonicity of the nonnegative integral, the integral in step 2.2 is nonnegative. Hence $E_{P_1}\varphi_\alpha^*-E_{P_1}\varphi\ge c(E_{P_0}\varphi_\alpha^*-E_{P_0}\varphi)$. The candidate has null rejection probability $\alpha$ by [F5], while the competitor has null rejection probability at most $\alpha$ by [F4]. Since $c\ge0$, the right-hand side is nonnegative, proving the desired power inequality for $\alpha>0$. [F4, F5, F7, step 2.2, step 2.1, algebra]

4.1 Now suppose $\alpha=0$. Then $E_{P_0}\varphi=0$, so [F6] gives $\int\varphi p_0\,d\mu=0$. For positive integers $n,m$, set $B_{n,m}=\{\varphi\ge1/n\}\cap\{p_0\ge1/m\}$. On this set, $\varphi p_0\ge1/(nm)$; [F7] and [F11] therefore give $0\ge\int_{B_{n,m}}\varphi p_0\,d\mu\ge\mu(B_{n,m})/(nm)$. Thus $\mu(B_{n,m})=0$, and absolute continuity [F1] gives $P_1(B_{n,m})=0$. For each positive-integer pair $(n,m)$ put $C_{n,m}=\{\varphi\ge1/n\}\cap\{p_0\ge1/m\}$, enumerate these pairs by increasing $n+m$ and then by increasing $n$, and write the resulting sequence of sets as $(C_k)_{k\ge0}$. If $\varphi(x)>0$ and $p_0(x)>0$, [F16] supplies positive integers $n,m$ with $1/n<\varphi(x)$ and $1/m<p_0(x)$, so $x\in\bigcup_k C_k$. Conversely every $C_k$ is contained in $\{\varphi>0,\ p_0>0\}$; hence this union is exactly that set. Put $D_0=C_0$ and $D_k=C_k\setminus\bigcup_{j<k}C_j$ for $k\ge1$. The $D_k$ are measurable by [F13], pairwise disjoint, and each $D_k\subseteq C_k$, so the preceding null-set calculation and [F12] give $P_1(D_k)=0$. Their union equals $\bigcup_k C_k$: if $x$ lies in that union, the nonempty set of indices $k$ with $x\in C_k$ has a least member by [F14], which puts $x$ in the corresponding $D_k$. Countable additivity [F9] makes the union $P_1$-null. On its complement, $\varphi=0$ wherever $p_0>0$; where $p_0=0<p_1$, [F5] gives $\varphi_0^*=1$, and the remaining set $\{p_0=p_1=0\}$ has $P_1$ measure zero because $p_1=0$ there and [F2], [F6] give $P_1(A)=\int_Ap_1\,d\mu$. Therefore $\varphi\le\varphi_0^*$ $P_1$-almost everywhere, and monotonicity of expectation proves the power inequality at $\alpha=0$. [F1, F2, F3, F5, F6, F7, F9, F10, F11, F12, F13, F14, F16, given, construct, algebra] ∎
