---
id: thm-pcf-cofinality-ideals-have-single-generators
kind: theorem
title: Pcf cofinality ideals have single generators
status: draft
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Lemma 4.7 and Theorem 4.8, pp. 40–41"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. For a nonempty progressive set $A$ of infinite regular cardinals and $\lambda\in\operatorname{pcf}(A)$ there is $B_\lambda\subseteq A$ such that

$$J_{\le\lambda}[A]=J_{<\lambda}[A]+B_\lambda=\{X\subseteq A:X\setminus B_\lambda\in J_{<\lambda}[A]\}.$$

For any $B\subseteq A$, this equality holds if and only if $B\in J_{\le\lambda}[A]$ and every ultrafilter $D$ on $A$ with $\operatorname{cf}(\prod A/D)=\lambda$ contains $B$. Such a generator is positive modulo $J_{<\lambda}[A]$ and unique modulo that ideal. AC gives a simultaneous family $(B_\lambda)_{\lambda\in\operatorname{pcf}(A)}$. Neither smoothness nor transitivity of this family is asserted.

## Facts & Assumptions

**Given:** AC, progressive $A$, $\lambda\in\operatorname{pcf}(A)$; write $I=J_{<\lambda}[A]$ and $K=J_{\le\lambda}[A]$.

[F1] These are increasing ideals, $I$ is proper, and membership of $X$ in either is equivalent to its supported ultrafilter cofinalities satisfying the corresponding bound ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F2] An ultrafilter has product cofinality $\lambda$ exactly when it avoids $I$ and meets $K$; meeting $I$ is equivalent to cofinality below $\lambda$ ([[thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs]]).

[F3] There is a universal strict $\lambda$-sequence with a positive limit-valued exact bound $h(a)\le a$ everywhere, including finite supports ([[lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds]]).

[F4] Exactness passes to larger proper ideals ([[lem-bounding-projections-give-exact-upper-bounds]]).

[F5] Product ultrafilter cofinalities and true cofinalities are regular, and a strict cofinal chain of regular length has that true cofinality ([[lem-progressive-products-and-true-cofinality-transfers]]).

[A1] AC chooses members simultaneously from nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 First prove the criterion. If $K=I+B$, then $B\in K$ because $B\setminus B=\varnothing\in I$. If $D$ has cofinality $\lambda$, F2 gives $X\in D\cap K$ and $D\cap I=\varnothing$. Now $X\setminus B\in I$, so it is not in $D$, and its complement is in $D$. Intersecting with $X$ gives $X\cap B\in D$, hence $B\in D$. Conversely suppose $B\in K$ and every cofinality-$\lambda$ ultrafilter contains $B$. For $X\in K$, any ultrafilter containing $X\setminus B$ contains $X$, so its cofinality is at most $\lambda$ by F1. It cannot equal $\lambda$, since it then contains both $B$ and $X\setminus B$. Thus every such ultrafilter has cofinality below $\lambda$, and F1 gives $X\setminus B\in I$. This proves $K\subseteq I+B$. If $X\setminus B\in I$, then $X\subseteq(X\setminus B)\cup B\in K$ because $I\subseteq K$ and $K$ is an ideal. Thus $I+B\subseteq K$ as well. The complementary-pair rule used here follows directly from maximality of a proper filter: if adjoining a missing set preserved properness it would contradict maximality, so some old member is disjoint from it. [F1, F2, given]

1.2 Take $f,h$ from F3 and put $B=\{a\in A:h(a)=a\}$. Every term satisfies $f_\xi<_Ih$: $f_\xi<_If_{\xi+1}\le_Ih$, and $\xi+1<\lambda$ because $\lambda$ is an infinite cardinal by F5. For an ultrafilter $D$ avoiding $I$, its dual ideal $I_D=\{X\subseteq A:A\setminus X\in D\}$ contains $I$ and is proper. Thus the chain remains strict modulo $D$. Its exactness transfers by F4 if $A$ is infinite. For finite $A$ the same transfer follows directly: for $g<_Dh$, reset $g$ to zero where it fails $g<h$. The reset function is everywhere below positive $h$, so exactness modulo $I$ makes it $<_I$ some $f_\xi$. Returning the old values changes it only on an $I_D$-small set, giving $g<_Df_\xi$. This reset argument works for infinite $A$ too, and explains the transfer without requiring singleton-smallness. [F3, F4, F5]

2.1 Let $D$ contain $B$. If it meets $I$, F2 gives cofinality below $\lambda$. Otherwise step 1.2 applies. For any $g\in\prod A$, $g(a)<a=h(a)$ on $B$, so $g<_Dh$. Transferred exactness supplies $\xi$ with $g<_Df_\xi$. Therefore the strict chain $f$ is cofinal in $\prod A/D$, and F5 makes its cofinality $\lambda$. Both cases give cofinality at most $\lambda$ for every $D$ containing $B$. The supported-ultrafilter test F1 therefore gives $B\in K$. [step 1.2, F1, F2, F5]

2.2 Let $D$ have cofinality $\lambda$. It avoids $I$ by F2. If $B\notin D$, the complement belongs to $D$ by the rule proved in step 1.1. Define $u(a)=h(a)$ off $B$ and $u(a)=0$ on $B$. Off $B$ we have $h(a)<a$, and on $B$ we have $0<a$, so $u\in\prod A$. Step 1.2 gives $f_\xi<_Dh=_Du$ for all $\xi$. But universality from F3 supplies $\eta$ with $u\le_Df_\eta$, contradicting the strict reverse inequality on the nonempty intersection of two $D$-large comparison sets. Hence $B\in D$. [step 1.1, step 1.2, F2, F3]

3.1 Steps 2.1–2.2 meet the criterion of step 1.1, giving $K=I+B$. A cofinality-$\lambda$ ultrafilter exists by the hypothesis $\lambda\in\operatorname{pcf}(A)$; it contains $B$ and avoids $I$, so $B\notin I$ and in particular $B\ne\varnothing$. If $C$ also generates $K$, then $B,C\in K$ and the two generation equalities give $B\setminus C\in I$ and $C\setminus B\in I$. Their union $B\mathbin{\triangle}C$ lies in $I$. Conversely changing $B$ on an $I$-small set does not change the condition $X\setminus B\in I$, by taking the union with that small set in each direction. Finally $\operatorname{pcf}(A)$ is a set: ultrafilters on $A$ form a subset of $\mathcal P(\mathcal P(A))$, and Replacement collects their cofinalities. For each such $\lambda$ the subsets of $A$ generating its ideal form a nonempty set by the proof above. Apply A1 to this indexed family to select all $B_\lambda$. No compatibility condition between distinct selections was used or follows from this choice. QED. [step 1.1, step 2.1, step 2.2, F1, F2, A1]
