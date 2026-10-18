---
id: thm-random-permutation-monte-carlo-validity
kind: theorem
title: "Validity of identity-corrected random-permutation Monte Carlo p-values"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - def-measurable-finite-group-permutation-setup
  - def-measurable-finite-group-orbit-pvalues
  - def-statistical-experiment
  - alg-random-permutation-monte-carlo-pvalue
  - thm-finite-group-permutation-validity
  - def-independent-random-elements
  - def-uniform-finite-probability-space
  - lem-finite-multiset-randomized-rank-is-uniform
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
    - title: "Jesse Hemerik and Jelle Goeman, Exact Testing with Random Permutations, Definition 2 and Theorem 2 with proof"
      url: "https://arxiv.org/pdf/1411.7565"
    - title: "Eugene Katsevich, STAT 9610 Lecture Notes, §3.2.4.2, equations (3.18)–(3.20)"
      url: "https://katsevich-teaching.github.io/stat-9610-fall-2022/assets/lecture-notes.pdf"
verification:
  precheck: pass
---

## Statement

In a setup as in [[def-measurable-finite-group-permutation-setup]], suppose
every null law is invariant. Fix $B\ge0$ and use either design of
[[alg-random-permutation-monte-carlo-pvalue]]. With replacement, let $W$ be
the unordered transformation multiset, with multiplicity, represented by
$(e,g_1,\ldots,g_B)$, where the $g_b$ are independent uniform draws from
$G$. Without replacement, let $W=\{e\}\cup S$,
where $S$ is a uniformly selected $B$-subset of $G\setminus\{e\}$ and
$B\le|G|-1$. In both cases define
$$p_B(X,W):=\frac{\#\{g\in W:T(g\cdot X)\ge T(X)\}}{B+1},$$
counting multiplicity in the with-replacement case.

Let $\mathcal W$ be the finite set of possible transformation multisets for
the with-replacement design or subsets for the without-replacement design,
and let $\nu$ be the induced design law. On $\mathcal X\times\mathcal W$ use the joint experiment whose law at
$\theta$ is
$$\widetilde P_\theta(A):=\sum_{w\in\mathcal W}\nu(w)\,P_\theta(\{x:(x,w)\in A\})$$
for $A$ in the product sigma-algebra. Then
$$\widetilde P_\theta(p_B(X,W)\le u)\le u\qquad(\theta\in\Theta_0,\ 0\le u\le1).$$
Thus $p_B$ is a valid p-value on the joint experiment and its cutoff has null
rejection probability at most $\alpha$. When a nonempty disjoint alternative
is specified, the cutoff test has size at most $\alpha$ and is level
$\alpha$. The proof treats the uniform-subset design separately; the
without-replacement formula is not inferred from the with-replacement case.
If $B=|G|-1$ without replacement, $W=G$ and the formula reduces to the
full-orbit value of [[thm-finite-group-permutation-validity]].

## Facts & Assumptions

**Given:** A finite group acting measurably, a measurable score, invariant null laws, an integer $B\ge0$, and either independent uniform draws with replacement or a uniform $B$-subset of nonidentity transformations without replacement. Prove superuniformity including ties and the test conclusion.

[F1] [[def-measurable-finite-group-permutation-setup]]: each null law is invariant under every group element and the score is measurable.

[F2] [[alg-random-permutation-monte-carlo-pvalue]]: the with-replacement design uses the distinguished identity plus $B$ IID uniform group draws; the without-replacement design adjoins the identity to a uniform subset of $G\setminus\{e\}$.

[F3] [[def-independent-random-elements]]: the simulation design and its auxiliary randomization are independent of the observed data; in the with-replacement proof the selected position is uniform and independent of the list, while in the without-replacement proof the selected element is uniform conditional on the sampled set.

[F4] [[def-uniform-finite-probability-space]]: a uniform law on a nonempty finite set gives each element the same probability.

[F5] [[lem-finite-multiset-randomized-rank-is-uniform]]: the inclusive upper rank of a uniformly selected index from any finite real-valued list is superuniform, with ties counted by index.

[F6] [[thm-finite-group-permutation-validity]]: using all of $G$ gives the full-orbit inclusive upper rank p-value under the same invariant-null premise.

[F7] [[def-p-value]]: a valid p-value is superuniform under each law in the nonempty null.

[F8] [[thm-p-value-superuniformity]]: thresholding a valid p-value gives a level test.

[F9] [[def-randomized-procedure-as-a-markov-kernel]], [[def-randomized-test]], and [[lem-measurable-rejection-function-defines-randomized-test]]: a measurable rejection function in $[0,1]$ defines a binary randomized test.

[F10] [[def-test-size-and-power]]: size is the supremum over the null of the test's rejection probability.

[F11] [[def-statistical-experiment]]: a statistical experiment is a measurable data space together with one probability measure on it for each parameter.

## Proof

**Proof technique:** recenter the transformation list at a uniformly selected position, then use a separate invariant-subset argument for sampling without replacement.

1.1 For the selected design, $\mathcal W$ is finite. Every $A\in\mathcal A\otimes2^{\mathcal W}$ has measurable sections $A_w=\{x:(x,w)\in A\}$. The displayed finite sum $\widetilde P_\theta(A)=\sum_w\nu(w)P_\theta(A_w)$ is nonnegative with total mass one. For disjoint $A_n$, each section $(\bigcup_nA_n)_w$ is the disjoint union of $(A_n)_w$, so countable additivity of $P_\theta$ and the finite sum over $w$ give countable additivity of $\widetilde P_\theta$. Thus [F11] makes this a joint statistical experiment. For measurable real functions $f,h$, $\{f\ge h\}$ is measurable because $\{f<h\}=\bigcup_{q\in\mathbb Q}\{f<q\}\cap\{h>q\}$. Therefore each section $x\mapsto p_B(x,w)$ is measurable. Since $\mathcal W$ is finite, each sublevel set of $p_B$ is a finite union of measurable sections $A_w\times\{w\}$, so $p_B$ is measurable on the joint space. The distinguished identity contributes one tied-or-higher value, so $1/(B+1)\le p_B\le1$; at $B=0$, $W=\{e\}$ and $p_B=1$. [F1, F2, F11, given, algebra]

1.2 First use the with-replacement design. Represent $W$ by its $B+1$ generating positions to choose an independent uniform position $J$, and write $H$ for the entry at that position. The unordered multiset $WH^{-1}$ has the same law as $W$: if $J$ is the identity position it is unchanged; if $J=j>0$, right multiplication by $H^{-1}=g_j^{-1}$ makes position $j$ equal to $e$, makes the former identity position $g_j^{-1}$ uniform on $G$, and leaves the other $B-1$ draws conditionally independent uniform on $G$. Thus, after order is ignored, there is again one distinguished identity and $B$ IID uniform group elements. [F2, F3, F4, given, construct]

1.3 Now use the without-replacement design and put $w=B+1$. The possible sets $W$ are the $w$-element subsets of $G$ containing $e$, all equally likely. Given $W$, choose $H$ uniformly from its $w$ elements. The map $(W,H)\mapsto(WH^{-1},H)$ is a bijection from pairs with $e\in W$, $|W|=w$, $H\in W$ onto pairs $(S,h)$ with $e\in S$, $|S|=w$, $h^{-1}\in S$: its inverse is $(S,h)\mapsto(Sh,h)$. Each fixed $S$ in the image has exactly $w$ possible $h$, so $WH^{-1}$ has the same uniform-subset law as $W$. [F2, F3, F4, construct]

2.1 Since $X$ is independent of $(W,J)$ and each fixed $H\in G$ preserves its null law, conditioning on $(W,J)$ gives $H\cdot X\overset d=X$. By step 1.2, $WH^{-1}$ has the same design law as $W$, so $(H\cdot X,WH^{-1})$ and $(X,W)$ have the same joint law. Now fix $x$ and a labelled presentation of a with-replacement multiset $W$ before drawing $J$. The value $p_B(H\cdot x,WH^{-1})$ counts, with multiplicity, the entries $w\in W$ for which $T(w\cdot x)\ge T(H\cdot x)$, because $(wH^{-1})\cdot(H\cdot x)=w\cdot x$. As $J$ is uniform over the $B+1$ positions, this is the inclusive upper rank of a uniform position in the score multiset $(T(w\cdot x))_{w\in W}$. By [F5] this rank is superuniform conditional on $x,W$; averaging and using the joint-law equality transfers the bound to $p_B(X,W)$. This proves the with-replacement case, with ties and duplicate transformations counted by position. [F1, F3, F5, step 1.2, algebra]

2.2 The auxiliary pair $(W,H)$ is independent of $X$. For each fixed value of that pair, invariance gives $H\cdot X\overset d=X$; step 1.3 gives $WH^{-1}$ the same design law as $W$. Hence $(H\cdot X,WH^{-1})$ and $(X,W)$ have the same joint law. To bound the transformed p-value, fix $x,W$ before drawing $H$. Conditional on $W$, $H$ is uniform over its $B+1$ elements, and $p_B(H\cdot x,WH^{-1})$ is the inclusive upper rank of that selected position in $(T(g\cdot x))_{g\in W}$, since $(gH^{-1})\cdot(H\cdot x)=g\cdot x$. By [F5] this rank is superuniform conditional on $x,W$; averaging and using the joint-law equality transfers the bound to $p_B(X,W)$. This is a separate uniform-subset proof. [F1, F3, F5, step 1.3, algebra]

3.1 By [F7], the superuniform bounds in steps 2.1 and 2.2 make $p_B$ a valid p-value on the joint experiment. For each observed $x$, the probability over the finite simulation design of rejection is $\phi_\alpha(x)=\sum_{w\in\mathcal W}\nu(w)\mathbf1\{p_B(x,w)\le\alpha\}$, a finite average of measurable indicators by step 1.1. By [F9], $\phi_\alpha$ defines a binary randomized test on the original experiment. Its null rejection probability is $E_\theta[\phi_\alpha(X)]=\widetilde P_\theta(p_B\le\alpha)\le\alpha$, the rejection probability of the joint-experiment threshold test covered by [F8]. Thus, when a nonempty disjoint alternative is specified, [F10] gives size at most $\alpha$ and hence level $\alpha$. When $B=|G|-1$ without replacement, the only possible set is $W=G$, so the formula agrees with [F6]. No choice axiom is used. [F6, F7, F8, F9, F10, F11, step 1.1, step 2.1, step 2.2, algebra] ∎
