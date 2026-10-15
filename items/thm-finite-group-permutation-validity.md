---
id: thm-finite-group-permutation-validity
kind: theorem
title: "Exact finite-group permutation p-values and tests"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - def-independent-random-elements
  - def-uniform-finite-probability-space
  - lem-finite-multiset-randomized-rank-is-uniform
  - def-finite-group-randomization-test
  - def-orbit-rank-p-value
  - thm-finite-group-randomization-validity
  - def-p-value
  - def-randomized-procedure-as-a-markov-kernel
  - def-randomized-test
  - lem-measurable-rejection-function-defines-randomized-test
  - def-test-size-and-power
  - thm-p-value-superuniformity
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, Theorems 1 and 2 and Proposition 3"
      url: "https://arxiv.org/pdf/1411.7565"
    - title: "Eugene Katsevich, STAT 9610 Lecture Notes, §3.2.4.2"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf"
verification:
  precheck: pass
---

## Statement

Let $\mathsf E,\Theta_0,G,T$ be as in
[[def-measurable-finite-group-permutation-setup]], and suppose every null law
$P_\theta$, $\theta\in\Theta_0$, is invariant under the action. Let
$p_{\mathrm{orb}}$ and $p_{\mathrm{tie}}$ be as in
[[def-measurable-finite-group-orbit-pvalues]]. Then, for every
$u\in[0,1]$ and every $\theta\in\Theta_0$,
$$P_\theta(p_{\mathrm{orb}}(X)\le u)\le u,\qquad \mathbb P_\theta(p_{\mathrm{tie}}(X,U)\le u)=u,$$
where $U$ is independent uniform on $[0,1]$. Thus $p_{\mathrm{orb}}$ is a
valid p-value; its cutoff has null rejection probability at most $\alpha$,
and hence size at most $\alpha$ when a nonempty disjoint alternative is
specified. The tie-randomized cutoff is a randomized test with rejection
probability exactly $\alpha$ under each null law. These level and size
statements use [[def-test-size-and-power]].

On finite sample spaces, the first two distributional claims specialize to
[[thm-finite-group-randomization-validity]] and use the same multiplicity
convention as [[def-orbit-rank-p-value]]. The proof below supplies the
measurable-space extension rather than importing it from that finite-space
supplier.

## Facts & Assumptions

**Given:** A statistical experiment, nonempty null set $\Theta_0$, finite
group $G$ acting measurably on its data space, measurable score $T$, invariance
of every null law, and, for the tied assertion, an independent
$U\sim\operatorname{Unif}[0,1]$. Prove the two distributional claims and the
test conclusions.

[F1] [[def-measurable-finite-group-permutation-setup]]: each $g$ acts measurably on the statistical-experiment data space; $T$ is measurable; null invariance means $g\cdot X\overset d=X$ for every null parameter and every $g\in G$.

[F2] [[def-measurable-finite-group-orbit-pvalues]]: $p_{\mathrm{orb}}$ counts all $g$ with $T(g\cdot x)\ge T(x)$ over denominator $|G|$; $p_{\mathrm{tie}}$ replaces the equality block by its fraction $U$.

[F3] [[lem-finite-multiset-randomized-rank-is-uniform]]: for any nonempty finite list of real scores, the inclusive upper rank of a uniform index is superuniform, and filling its tie block with an independent uniform variable gives an exact uniform value.

[F4] [[def-independent-random-elements]]: independent random elements have independent generated event sigma-algebras; in particular the auxiliary uniform $U$ is independent of the data and the finite uniform group index.

[F5] [[def-uniform-finite-probability-space]]: the auxiliary index $H$ is uniform on the nonempty finite set $G$, assigning probability $1/|G|$ to each group element.

[F6] [[def-p-value]]: validity for a nonempty null means $P_\theta(p(X)\le u)\le u$ for every null parameter and every $u\in[0,1]$.

[F7] [[thm-p-value-superuniformity]]: a valid p-value threshold $\mathbf 1\{p\le\alpha\}$ is a level-$\alpha$ test when a nonempty disjoint alternative is supplied.

[F8] [[def-randomized-procedure-as-a-markov-kernel]], [[def-randomized-test]], and [[lem-measurable-rejection-function-defines-randomized-test]]: a measurable function $\phi:\mathcal X\to[0,1]$ defines a binary randomized-test kernel with rejection probability $\phi(x)$.

[F9] [[def-test-size-and-power]]: test size is the supremum of null rejection probabilities over the nonempty null set.

## Proof

**Proof technique:** randomize the observed index over the finite group, then apply the finite tied-rank lemma to the score list.

1.1 For each $g\in G$, $x\mapsto T(g\cdot x)$ is measurable by [F1]. For measurable real functions $f,h$, $\{f>h\}=\bigcup_{q\in\mathbb Q}\{f>q\}\cap\{h<q\}$, so strict comparisons are measurable; equality sets are complements of the union of the two opposite strict comparisons. Finite sums show that both rank counts are measurable. The identity belongs to $G$, so the tied count is at least one and both p-value formulas take values in $[0,1]$. For the joint tie-rank formula, partition the data space by the finitely many possible integer pairs $(N_>,N_=)$; on each part it is an affine function of $U$, so it is jointly measurable. [F1, F2, given, algebra]

1.2 Fix $\theta\in\Theta_0$ and let $H$ be uniform on $G$, independent of $(X,U)$. For each fixed $h\in G$, invariance gives $h\cdot X\overset d=X$. Averaging over the finite law of $H$ therefore gives $(H\cdot X,U)\overset d=(X,U)$, so replacing $X$ by $H\cdot X$ does not change either p-value distribution. [F1, F4, F5, given]

2.1 Fix $x$ and form the finite list $a_g=T(g\cdot x)$ indexed by $g\in G$, retaining repeated values and repeated orbit points. At $H=h$, the transformed list at $h\cdot x$ is $T((gh)\cdot x)$ as $g$ ranges over $G$. Right multiplication $g\mapsto gh$ is a bijection of $G$, and the observed value $T(h\cdot x)$ is the entry indexed by $h$. Thus $p_{\mathrm{orb}}(h\cdot x)$ is the inclusive upper rank of a uniform index in $(a_g)_{g\in G}$, while $p_{\mathrm{tie}}(h\cdot x,U)$ is its independently tie-randomized rank. [F2, F3, F4, F5, step 1.2, algebra]

3.1 By [F3], conditional on each fixed $x$, the first rank in step 2.1 is superuniform and the second is uniform. Averaging over $X$ preserves these bounds. The distributional equality in step 1.2 transfers them from $H\cdot X$ back to $X$, proving both displayed claims for this $\theta$. Since $\theta$ was arbitrary in $\Theta_0$, the claims hold under every null law. No orbit quotient or freeness assumption is used. [F1, F3, F5, step 1.2, step 2.1]

4.1 By [F6], $p_{\mathrm{orb}}$ is a valid p-value; [F7] gives its level-$\alpha$ cutoff test when an alternative is specified. For the tied test put $N_>(x)=\#\{g:T(g\cdot x)>T(x)\}$ and $N_=(x)=\#\{g:T(g\cdot x)=T(x)\}$. Its conditional rejection probability is $\phi_\alpha(x)=\min\{1,\max\{0,(|G|\alpha-N_>(x))/N_=(x)\}\}$, because $p_{\mathrm{tie}}(x,U)\le\alpha$ exactly when $U\le(|G|\alpha-N_>(x))/N_=(x)$, with the threshold clipped to $[0,1]$. The counts are measurable by step 1.1 and $N_=(x)\ge1$, so [F8] makes $\phi_\alpha$ a randomized test. Its null rejection probability equals $\mathbb P_\theta(p_{\mathrm{tie}}(X,U)\le\alpha)=\alpha$ by step 3.1, and [F9] identifies its size as $\alpha$ when a nonempty disjoint alternative is specified. The argument uses only a finite uniform group index and the stated uniform tie randomizer; it uses no choice axiom. [F2, F3, F6, F7, F8, F9, step 1.1, step 3.1, algebra] ∎
