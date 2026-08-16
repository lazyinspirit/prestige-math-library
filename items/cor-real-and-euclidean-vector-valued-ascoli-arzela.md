---
id: cor-real-and-euclidean-vector-valued-ascoli-arzela
kind: corollary
title: "Real and finite-dimensional Euclidean Ascoli–Arzelà criteria"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-compact-subsets-of-cx-for-a-proper-metric-target, cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets, thm-heine-borel-rn, thm-compact-subset-is-closed-and-bounded, thm-arzela-ascoli-for-real-ck, cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence, lem-equicontinuity-on-a-compact-domain-is-uniform, lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness, thm-c-k-complete-in-the-sup-metric, def-topology-of-uniform-convergence]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Ascoli–Arzelà Theorem, BBT"
      url: "https://assets.pubpub.org/6d1dqgg9/51597355090422.pdf"
    - title: "Topology, second edition, Corollary 45.5"
      url: "https://djvu.online/file/7PTGeGhMkCAAK"
    - title: "The Arzelà–Ascoli Theorem"
      url: "https://web.archive.org/web/20141114064305if_/http://www.mth.msu.edu/~shapiro/pubvit/Downloads/ArzNotes/ArzNotes.pdf"
    - title: "The Ascoli--Arzelà Theorem (MIT)"
      url: "https://math.mit.edu/~rbm/18.100B/Ascoli-Arzela.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice.** Let $X$ be a nonempty compact metric space and let $n\in\mathbb N$ with $n\geq1$. For $Z=\mathbb R$ and for $Z=\mathbb R^n$ with its Euclidean metric:

1. A family $\mathcal F\subseteq C(X,Z)$ is compact in the uniform topology if and only if it is uniformly closed, equicontinuous, and pointwise bounded.
2. Every pointwise bounded equicontinuous sequence in $C(X,Z)$ has a uniformly convergent subsequence with limit in $C(X,Z)$.

For real-valued families, equicontinuity is uniform over the compact domain, and equicontinuity together with pointwise boundedness gives one bound for all values. The same one-bound conclusion holds for Euclidean-valued families.

## Facts & Assumptions

**Given:** Choice, a nonempty compact metric space $X$, and a natural number $n\geq1$.

[L1] For a proper metric target, a family is uniformly compact exactly when it is uniformly closed, equicontinuous, and pointwise bounded ([[cor-compact-subsets-of-cx-for-a-proper-metric-target]]).

[L2] A pointwise bounded equicontinuous sequence into a proper metric target has a uniformly convergent subsequence ([[cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets]]).

[L3] In $\mathbb R$ and $\mathbb R^n$, closed and bounded subsets are compact ([[thm-heine-borel-rn]]).

[L4] Compact metric subsets are closed and bounded ([[thm-compact-subset-is-closed-and-bounded]]).

[L5] For real-valued functions on a nonempty compact metric space, compactness of the supremum-metric closure is equivalent to equicontinuity and pointwise boundedness ([[thm-arzela-ascoli-for-real-ck]]).

[L6] A real-valued pointwise bounded equicontinuous sequence has a uniformly convergent subsequence ([[cor-equicontinuous-bounded-sequence-has-a-uniformly-convergent-subsequence]]).

[L7] A real-valued equicontinuous family on a nonempty compact metric domain is uniformly equicontinuous ([[lem-equicontinuity-on-a-compact-domain-is-uniform]]).

[L8] A real-valued equicontinuous pointwise bounded family on a nonempty compact metric domain is uniformly bounded ([[lem-equicontinuity-and-pointwise-boundedness-give-uniform-boundedness]]).

[L9] Every member of $C(X,\mathbb R)$ is bounded and the supremum metric $d_\infty(f,g)=\sup_{x\in X}|f(x)-g(x)|$ is defined there ([[thm-c-k-complete-in-the-sup-metric]]).

[L10] The uniform topology is induced by $\bar\rho(f,g)=\sup_{x\in X}\min\{|f(x)-g(x)|,1\}$ ([[def-topology-of-uniform-convergence]]).

## Proof

**Proof technique:** direct.

1.1 By [L3], both $\mathbb R$ and $\mathbb R^n$ are proper metric spaces: a closed bounded subset is compact. [L3]

1.2 By [L9] and [L10], $\bar\rho(f,g)=\min\{d_\infty(f,g),1\}$, so balls of radius below $1$ agree and the supremum-metric topology is the uniform topology. In the real case, compactness then implies uniform closedness by [L4], and [L5] gives equicontinuity and pointwise boundedness. Conversely, uniform closedness plus those two conditions makes the compact closure supplied by [L5] equal to the family. The subsequence conclusion is [L6], and the stated uniform equicontinuity and common value bound are exactly [L7] and [L8]. [L4, L5, L6, L7, L8, L9, L10]

1.3 For the Euclidean common bound, fix an equicontinuous, pointwise bounded family $\mathcal F\subseteq C(X,\mathbb R^n)$ and take the tolerance to be $1$. Equicontinuity of $\mathcal F$ gives, at every $x\in X$, a neighbourhood $U_x$ on which $\lVert f(y)-f(x)\rVert_2<1$ for all $f\in\mathcal F$; Choice, which the Given supplies, licenses the family $(U_x)_{x\in X}$. Compactness of $X$ gives a finite subcover $U_{x_1},\ldots,U_{x_m}$. [given]

2.1 Apply [L1] and [L2] to the proper target $\mathbb R^n$. This proves both numbered vector-valued assertions, including both directions of assertion 1. [L1, L2, step 1.1]

3.1 Pointwise boundedness of the family $\mathcal F$ fixed in step 1.3 gives, for each of the finitely many $i\le m$, a number $M_i$ with $\lVert f(x_i)\rVert_2\leq M_i$ for every $f\in\mathcal F$. For $y\in X$ take $i$ with $y\in U_{x_i}$; then $\lVert f(y)\rVert_2\le\lVert f(y)-f(x_i)\rVert_2+\lVert f(x_i)\rVert_2<1+M_i\leq1+\max_iM_i$. Thus one Euclidean bound serves all $f\in\mathcal F$ and all $y\in X$, and the converse from a common bound to pointwise boundedness is immediate. [step 1.3] ∎
