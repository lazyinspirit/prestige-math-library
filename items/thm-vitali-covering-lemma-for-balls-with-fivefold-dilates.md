---
id: thm-vitali-covering-lemma-for-balls-with-fivefold-dilates
kind: theorem
title: "Vitali covering lemma for Euclidean balls with fivefold dilates"
status: published
origin: session
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-metric-ball, thm-lebesgue-measure-under-dilations-and-reflections]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
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
   Consequently,
   $$\lambda\!\left(\bigcup_{j=1}^m B_j\right)\le    5^n\sum_{k=1}^\ell \lambda(B_{i_k}).$$

2. Let $(B_j)_{j\ge1}$ be a countable family of Euclidean balls whose radii are
   bounded above. Then there is a finite or countably infinite index set
   $I\subseteq\mathbb N_{\ge1}$ such that $(B_i)_{i\in I}$ is pairwise disjoint
   and
   $$\bigcup_{j\ge1}B_j\subseteq\bigcup_{i\in I}5B_i.$$

## Facts & Assumptions

**Given:** A family of Euclidean balls in $\mathbb{R}^n$.

[L1] The Euclidean balls are the sets $B(x,r)=\{y:\|y-x\|_2<r\}$. ([[def-metric-ball]])

[L2] Lebesgue measure scales by $c^n$ under dilation by $c>0$. In particular, for every ball $B$, $$\lambda(5B)=5^n\lambda(B).$$ ([[thm-lebesgue-measure-under-dilations-and-reflections]])

## Proof

**Proof technique:** direct.

1.1 For the finite family, choose $B_{i_1}$ with maximal radius among [given, choose] $B_1,\dots,B_m$. Having chosen disjoint balls $B_{i_1},\dots,B_{i_{s-1}}$, choose $B_{i_s}$ with maximal radius among the remaining balls disjoint from all earlier choices, and stop when none remain. The chosen subfamily is pairwise disjoint by construction. [given, choose]

1.2 Now let $(B_j)_{j\ge1}$ be countable with radii bounded above, and put $$R:=\sup_{j\ge1}r_j.$$ For each integer $m\ge0$, let $$I_m:=\left\{j\ge1:2^{-m-1}R<r_j\le2^{-m}R\right\}.$$ Process the classes $I_0,I_1,\dots$ in this order, and within each class inspect the indices in increasing order. Retain $B_j$ exactly when it is disjoint from every ball already retained. The retained subfamily is pairwise disjoint by construction. [given, construct, algebra]

2.1 Let $B_j$ be one of the original balls. If it was chosen, then [step 1.1, L1, choose, algebra] $B_j\subseteq5B_j$. If it was not chosen, let $B_{i_s}$ be the first chosen ball that meets it. Since the choice at stage $s$ had maximal radius among the remaining disjoint balls, the radius of $B_j$ is at most that of $B_{i_s}$. Pick $z\in B_j$ and choose $w\in B_j\cap B_{i_s}$. Then $$\|z-c_{i_s}\|_2\le\|z-w\|_2+\|w-c_j\|_2+\|c_j-c_{i_s}\|_2 <r_j+r_j+r_{i_s}\le5r_{i_s},$$ so $z\in5B_{i_s}$. Therefore every original ball lies in the union of the fivefold dilates of the chosen balls. [step 1.1, L1, choose, algebra]

2.2 Let $B_j$ be any original ball that was not chosen in the countable construction, and let $j\in I_m$. When the algorithm inspected $j$, some previously chosen ball $B_{i_s}$ already met $B_j$; otherwise $B_j$ would have been retained. If $i_s\in I_\ell$ with $\ell<m$, then $$r_j\le 2^{-m}R\le 2^{-\ell-1}R<r_{i_s}.$$ If instead $\ell=m$, then both balls lie in the same dyadic class, so $$r_j\le 2^{-m}R<2r_{i_s}.$$ In either case, $$r_j<2r_{i_s}.$$ Choose $z\in B_j$ and $w\in B_j\cap B_{i_s}$. Then $$\|z-c_{i_s}\|_2 <r_j+r_j+r_{i_s}<2(2r_{i_s})+r_{i_s}=5r_{i_s},$$ so again $B_j\subseteq5B_{i_s}$. Let $I\subseteq\mathbb N_{\ge1}$ be the set of retained indices. This set is finite or countably infinite, and chosen balls are also contained in their own fivefold dilates; hence $$\bigcup_{j\ge1}B_j\subseteq\bigcup_{i\in I}5B_i.$$ [step 1.2, L1, choose, algebra]

3.1 Since the chosen balls are pairwise disjoint, [step 2.1, L2, algebra] $$\lambda\!\left(\bigcup_{j=1}^m B_j\right) \le\lambda\!\left(\bigcup_{k=1}^\ell5B_{i_k}\right) \le\sum_{k=1}^\ell\lambda(5B_{i_k}) =5^n\sum_{k=1}^\ell\lambda(B_{i_k}).$$ This proves part 1. [step 2.1, L2, algebra]

4.1 Steps 3.1 and 2.2 prove the finite and countable forms. [step 3.1, step 2.2] ∎
