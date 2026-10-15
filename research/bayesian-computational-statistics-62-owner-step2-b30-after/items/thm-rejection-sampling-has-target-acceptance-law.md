---
id: thm-rejection-sampling-has-target-acceptance-law
kind: theorem
title: Rejection sampling has the target acceptance law
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - alg-rejection-sampling
  - cor-finite-nonnegative-integral-implies-finite-almost-everywhere
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-identically-distributed-and-iid-random-variables
  - def-law-or-distribution-of-a-random-element
  - def-measure
  - def-measure-with-density
  - def-probability-measure
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - lem-geometric-sequence-null
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-change-of-variables-for-expectation
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-geometric-series
  - thm-independent-random-elements-have-product-joint-law
  - thm-integration-against-a-density
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 4 §4.7
      url: https://artowen.su.domains/mc/Ch-nonunifrng.pdf
    - title: Computational Statistics with R, Chapter 6 §6.1
      url: https://cswr.nrhstat.org/reject-samp.html
verification:
  precheck: pass
---

## Statement

Let $(S,\mathcal S,\mu)$ be a measure space and let
$\tilde f,\tilde g:S\to[0,\infty]$ be measurable with
$0<Z_f:=\int\tilde f\,d\mu<\infty$ and
$0<Z_g:=\int\tilde g\,d\mu<\infty$. Suppose $c>0$ is finite and
$\tilde f\le c\tilde g$ $\mu$-almost everywhere. Apply
[[alg-rejection-sampling]] with proposal law
$G(A)=Z_g^{-1}\int_A\tilde g\,d\mu$. If $N$ is the first accepted proposal,
then $N<\infty$ almost surely, the per-proposal acceptance probability is
$$p=\frac{Z_f}{cZ_g},$$
and for every $A\in\mathcal S$,
$$\mathbb P(Y_N\in A)=\frac1{Z_f}\int_A\tilde f\,d\mu.$$
Thus the accepted law has density $\tilde f/Z_f$. In the normalized case
$Z_f=Z_g=1$, this gives acceptance probability $1/c$ and accepted density
$f$; necessarily $c\ge1$.

## Facts & Assumptions

**Given:** The measure space, nonnegative measurable shapes, positive finite normalizers, a finite envelope constant, and the ideal independent draws in [[alg-rejection-sampling]].

[A1] The common envelope holds outside a measurable $\mu$-null set. The algorithm's ratio is defined to be zero where $\tilde g=0$.

[F1] [[alg-rejection-sampling]] and [[def-identically-distributed-and-iid-random-variables]]: the proposal draws have law $G$, the auxiliary draws have the uniform law on $(0,1)$, and the two IID sequences are independent.

[F2] [[def-measure-with-density]] and [[def-probability-measure]]: a nonnegative measurable density $h$ defines the measure $A\mapsto\int_A h\,d\mu$; if its total mass is $Z\in(0,\infty)$, division by $Z$ gives a probability measure.

[F3] [[cor-finite-nonnegative-integral-implies-finite-almost-everywhere]]: finite nonnegative integral implies the function is finite almost everywhere.

[F4] [[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]: integrable functions equal almost everywhere have equal integrals on every measurable set.

[F5] [[def-expectation-of-a-nonnegative-or-integrable-random-variable]] and [[thm-change-of-variables-for-expectation]]: the expectation of a nonnegative measurable indicator is its probability, and expectations of nonnegative measurable functions equal their integrals against the random element's law.

[F6] [[thm-independent-random-elements-have-product-joint-law]]: independent random elements have joint law equal to the product of their marginal laws.

[F7] [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]: a nonnegative product-measurable function on a product of probability spaces can be integrated in either order.

[F8] [[thm-integration-against-a-density]]: if $\nu=h\,d\mu$, then $\int q\,d\nu=\int qh\,d\mu$ for every nonnegative measurable $q$.

[F9] [[alg-rejection-sampling]], [[def-product-sigma-algebra-and-finite-product-sigma-algebras]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-composition-with-borel-functions-preserves-measurability]], and [[thm-threshold-characterisations-of-real-and-extended-real-measurability]]: the algorithm proves its reciprocal extension Borel and its acceptance function measurable; the coordinate projections on $S\times(0,1)$ are measurable, and $\{(y,u):y\in A,\ u\le a(y)\}$ is a measurable threshold set.

[F10] [[prop-order-and-scalar-rules-for-the-nonnegative-integral]]: pointwise order of nonnegative functions implies the same order of their integrals.

[F11] [[def-measure]]: a measure is countably additive on disjoint measurable sequences.

[F12] [[thm-geometric-series]] gives $\sum_{j=0}^{\infty}q^j=1/(1-q)$ for $0\le q<1$; [[lem-geometric-sequence-null]], claim 1, gives $q^m\to0$ because $|q|=q<1$, including $q=0$.

[F13] [[def-law-or-distribution-of-a-random-element]]: the law of a random element assigns to each measurable set the probability of its inverse image.

## Proof

**Given:** The objects and hypotheses in the Statement.

1.1 By [F3], both shapes are finite outside null sets. Let $N$ be the union of those sets and the envelope exception from [A1]; it is measurable and null. Replace each shape by its product with $\mathbf 1_{S\setminus N}$. Measurability follows from [F9], and [F4] shows that neither density measure nor any displayed integral changes. In particular $\int_N\tilde g\,d\mu=0$ because $\tilde g\mathbf 1_N=0$ almost everywhere, so the proposal law gives $N$ mass zero. By [F13] and countable additivity [F11], the probability that any proposal hits $N$ is zero; changing the acceptance rule on $N$ leaves the output law unchanged. We may now use finite representatives satisfying $\tilde f\le c\tilde g$ everywhere, so $\tilde g=0$ implies $\tilde f=0$. [A1, F3, F4, F9, F11, F13, given, construct]

1.2 Fix $A\in\mathcal S$ and let $Q(A):=\mathbb P(Y_1\in A,\ U_1\le a(Y_1))$. By [F9] the event is measurable. By [F1] and [F6] the joint law of $(Y_1,U_1)$ is $G\otimes\Lambda$. Hence [F5] and [F13] give $Q(A)=\int_{S\times(0,1)}\mathbf1_A(y)\mathbf1_{\{u\le a(y)\}}\, (G\otimes\Lambda)(d(y,u)).$ [F1, F5, F6, F9, F13, given]

2.1 Tonelli [F7] evaluates the last integral as $Q(A)=\int_A\Lambda((0,a(y)])\,G(dy)=\int_A a(y)\,G(dy),$ including $a(y)=0$ and $a(y)=1$, since $\Lambda((0,t])=t$ on $[0,1]$. [step 1.2, F7, F1]

3.1 Apply [F8] to the proposal density $\tilde g/Z_g$ and the measurable function $\mathbf1_Aa$. Where $\tilde g>0$, the envelope makes $a=\tilde f/(c\tilde g)$; where $\tilde g=0$, [step 1.1] gives $\tilde f=0$. Therefore $Q(A)=\frac1{Z_g}\int_Aa\tilde g\,d\mu =\frac1{cZ_g}\int_A\tilde f\,d\mu.$ [step 2.1, F2, F8, step 1.1, algebra]

4.1 Taking $A=S$ in step 3.1 gives $p=Q(S)=Z_f/(cZ_g)>0$. Integrating the pointwise envelope and using [F10] gives $Z_f\le cZ_g$, so $p\le1$. For normalized densities, $Z_f=Z_g=1$, hence $p=1/c$ and $c\ge1$. [step 3.1, F10, A1, algebra]

5.1 Put $q=1-p$. Independence of the proposal-uniform pairs [F1] gives $\mathbb P(N>m)=q^m$ for every $m\ge1$. Since $0\le q<1$, [F12] gives $q^m\to0$; the event $\{N=\infty\}$ is contained in every $\{N>m\}$, so $\mathbb P(N=\infty)=0$. [step 4.1, F1, F12]

6.1 For each $k\ge1$, independence across trials gives $\mathbb P(N=k,\ Y_k\in A)=q^{k-1}Q(A).$ These events are disjoint, so countable additivity [F11] and the geometric series [F12] yield $\mathbb P(\text{the algorithm outputs a value in }A) =\sum_{k=1}^{\infty}q^{k-1}Q(A) =\frac{Q(A)}p =\frac1{Z_f}\int_A\tilde f\,d\mu.$ The almost-sure termination in step 5.1 makes this the full output law. [step 2.1, step 4.1, step 5.1, F1, F11, F12, algebra] ∎
