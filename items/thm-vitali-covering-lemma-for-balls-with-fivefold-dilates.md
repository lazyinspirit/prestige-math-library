---
id: thm-vitali-covering-lemma-for-balls-with-fivefold-dilates
kind: theorem
title: "Vitali covering lemma for Euclidean balls with fivefold dilates"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-metric-ball, thm-lebesgue-measure-under-dilations-and-reflections, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, def-countable-choice, thm-recursion]
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: codex
    verdict: pass
    date: 2026-09-09
    scope: owner-authorized local covering/interface repair; no independent judge
    delegated_by: owner
sources:
  references:
    - title: "Terence Tao, An Introduction to Measure Theory, Lemma 1.6.22"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-126-tao5-measure-book.pdf"
    - title: "Gerald B. Folland, Real Analysis: Modern Techniques and Their Applications, 2nd ed., Lemma 3.15"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement

For a ball $B(x,r)$, write $5B(x,r):=B(x,5r)$.

1. Let $\{B_1,\dots,B_m\}$ be a finite family of Euclidean balls in
   $\mathbb{R}^n$. Then there is a pairwise disjoint subfamily
   $\{B_{i_1},\dots,B_{i_\ell}\}$ such that
   $$\bigcup_{j=1}^m B_j\subseteq\bigcup_{k=1}^\ell 5B_{i_k}.$$
   Consequently, under the Axiom of Countable Choice,
   $$\lambda\!\left(\bigcup_{j=1}^m B_j\right)\le    5^n\sum_{k=1}^\ell \lambda(B_{i_k}).$$

2. Let $(B_j)_{j\ge1}$ be a countable family of Euclidean balls whose radii are
   bounded above. Then there is a finite or countably infinite index set
   $I\subseteq\mathbb N_{\ge1}$ such that $(B_i)_{i\in I}$ is pairwise disjoint
   and
   $$\bigcup_{j\ge1}B_j\subseteq\bigcup_{i\in I}5B_i.$$

The two geometric covering assertions require no choice principle. Countable
choice is used only for the displayed Lebesgue-measure consequence.

## Facts & Assumptions

**Given:** A family of Euclidean balls in $\mathbb{R}^n$.

[L1] The Euclidean balls are the sets $B(x,r)=\{y:\|y-x\|_2<r\}$. ([[def-metric-ball]])

[L2] Under countable choice, Lebesgue measure scales by $c^n$ under dilation by $c>0$ and is translation invariant. Since $5B(x,r)=x+5(B(x,r)-x)$, this gives $\lambda(5B)=5^n\lambda(B)$. ([[def-countable-choice]], [[thm-lebesgue-measure-under-dilations-and-reflections]], [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]])

[L3] Ordinary recursion defines a unique sequence from a fixed successor rule; stage-dependent rules are obtained by carrying the stage as part of the state. ([[thm-recursion]])

## Proof

**Proof technique:** direct.

1.1 If the finite family is empty, use the empty subfamily. Otherwise retain a ball of maximal radius, breaking ties by least index. Repeat among the remaining balls disjoint from every retained ball, and stop when none remain. There are at most $m$ selections. The retained balls are pairwise disjoint by construction, and the tie rule makes every selection determined. [given, construct]

1.2 For the countable family, fix a positive upper bound $R$ for its radii. Let $I_m=\{j\ge1:2^{-m-1}R<r_j\le2^{-m}R\}$ for $m\ge0$; these partition the positive radii. Given the retained indices in earlier classes, inspect $j=1,2,\ldots$ and retain $j$ exactly when $j\in I_m$ and its ball is disjoint from every earlier retained ball. Inner recursion on $j$ and outer recursion on $m$ define this rule by [L3], taking the union of each inner sequence before the next class. Every decision is determined, so there is no countable choice of balls. The retained subfamily is pairwise disjoint. [given, L3, construct, algebra]

2.1 In the finite family, a chosen ball lies in its own fivefold dilate. For an unchosen $B_j$, take the first chosen ball $B_{i_s}$ meeting it. At that stage $B_j$ was eligible, so $r_j\le r_{i_s}$. For $z\in B_j$ and $w\in B_j\cap B_{i_s}$, the centre distance satisfies $\|c_j-c_{i_s}\|_2\le\|c_j-w\|_2+\|w-c_{i_s}\|_2<r_j+r_{i_s}$. Hence $\|z-c_{i_s}\|_2\le\|z-c_j\|_2+\|c_j-c_{i_s}\|_2<2r_j+r_{i_s}\le3r_{i_s}<5r_{i_s}$. Thus every original ball lies in a chosen fivefold dilate. [step 1.1, L1, choose, algebra]

2.2 Let $B_j$ be any original ball that was not chosen in the countable construction, and let $j\in I_m$. When the algorithm inspected $j$, some previously chosen ball $B_{i_s}$ already met $B_j$; otherwise $B_j$ would have been retained. If $i_s\in I_\ell$ with $\ell<m$, then $$r_j\le 2^{-m}R\le 2^{-\ell-1}R<r_{i_s}.$$ If instead $\ell=m$, then both balls lie in the same dyadic class, so $$r_j\le 2^{-m}R<2r_{i_s}.$$ In either case, $$r_j<2r_{i_s}.$$ Choose $z\in B_j$ and $w\in B_j\cap B_{i_s}$. Then $$\|z-c_{i_s}\|_2 <r_j+r_j+r_{i_s}<2(2r_{i_s})+r_{i_s}=5r_{i_s},$$ so again $B_j\subseteq5B_{i_s}$. Let $I\subseteq\mathbb N_{\ge1}$ be the set of retained indices. This set is finite or countably infinite, and chosen balls are also contained in their own fivefold dilates; hence $$\bigcup_{j\ge1}B_j\subseteq\bigcup_{i\in I}5B_i.$$ [step 1.2, L1, choose, algebra]

3.1 For the measure consequence, assume countable choice as required by [L2]. Finite subadditivity and the established inclusion give $\lambda(\bigcup_{j=1}^mB_j)\le\lambda(\bigcup_{k=1}^\ell5B_{i_k})\le\sum_{k=1}^\ell\lambda(5B_{i_k})=5^n\sum_{k=1}^\ell\lambda(B_{i_k})$. This is the only use of countable choice in this proof. [step 2.1, L2, algebra]

4.1 Steps 3.1 and 2.2 prove the finite and countable forms. [step 3.1, step 2.2] ∎
