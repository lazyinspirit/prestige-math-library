---
id: "lem-bounded-real-ultralimits-and-free-tail-extension"
kind: "lemma"
title: "Free tail ultrafilters and bounded real ultralimit calculus"
status: published
origin: "pipeline"
deps: ["def-rescaled-ultralimit-and-asymptotic-cone", "thm-ultrafilter-lemma", "thm-ultrafilter-characterisation", "def-complete-ordered-field", "def-axiom-of-choice", "cor-cauchy-reals-lub-complete", "lem-cauchy-away-from-zero", "thm-cauchy-ring", "lem-null-ideal", "lem-rat-triangle", "def-null-sequence", "thm-rat-ordered-field"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Drutu–Kapovich, Geometric Group Theory — §10.1 Lemma 10.25 and real ultralimit calculus; local rational reciprocal supplement"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
pipeline_run: "phase-2-hg-prerequisite"
proof_strategy: direct
---

## Statement

Assuming AC, there is a free ultrafilter on $\mathbb N$. For any supplied ultrafilter $\omega$ on $\mathbb N$, every bounded real sequence has a unique ultralimit. For bounded sequences $u_n,v_n$, limits $u,v$, and $c\in\mathbb R$,

$$\lim_\omega(u_n+v_n)=u+v,\quad\lim_\omega cu_n=cu,\quad\lim_\omega u_nv_n=uv,\quad\lim_\omega|u_n|=|u|.$$

An inequality holding on a large set passes to the limits. Altering a sequence off a large set preserves its limit. For a free ultrafilter, an ordinary convergent bounded sequence has the same ultralimit. The supplied-ultrafilter assertions require no new choice.

## Facts & Assumptions

**Given:** A supplied ultrafilter when discussing calculus; bounded real sequences; AC only for free-filter existence.

[F1] A non-null rational Cauchy sequence is eventually bounded away from zero. ([[lem-cauchy-away-from-zero]]).

[F2] Rational ordered-field arithmetic holds. ([[thm-rat-ordered-field]]).

[F3] Absolute value is multiplicative and satisfies the triangle and reverse triangle inequalities, also in any ordered field. ([[lem-rat-triangle]]).

[F4] Rational Cauchy sequences form a ring under termwise operations. ([[thm-cauchy-ring]]).

[F5] Null sequences form an ideal of that ring. ([[lem-null-ideal]]).

[F6] A rational sequence is null when every positive rational tolerance eventually bounds its absolute value. ([[def-null-sequence]]).

[F7] The Cauchy reals have least upper bounds for nonempty bounded-above sets. ([[cor-cauchy-reals-lub-complete]]).

[F8] Under AC every proper filter extends to an ultrafilter. ([[thm-ultrafilter-lemma]]).

[F9] An ultrafilter contains exactly one of any set and its complement. ([[thm-ultrafilter-characterisation]]).

[F10] AC supplies choice functions for families of nonempty sets. ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 We first discharge the reciprocal input underlying the real-field/completeness interface. If $a\in\mathcal C\setminus\mathcal N$, choose rational $\delta>0$ and $N_0\ge1$ with $|a_n|>\delta$ for $n\ge N_0$. Set $b_n=1$ for $n<N_0$ and $b_n=1/a_n$ otherwise; all denominators used are nonzero. [F1, F2]

1.2 The sets containing a tail of $\mathbb N$ form a proper filter: intersections contain the later tail, supersets preserve containment, and no tail is empty. AC and [F8] extend it to an ultrafilter. No finite set belongs to the extension because a disjoint tail belongs; in particular it is not principal. [F8, F10]

1.3 Least-upper-bound completeness implies that the natural multiples of $1$ are unbounded: if their supremum were $s$, then $s-1$ would not be an upper bound, giving a natural $k>s-1$ and $k+1>s$. Consequently $(B-A)2^{-j}\to0$ for $A\le B$, since $2^j\ge j+1$. [F7, algebra]

1.4 For a sequence $u_n\in[A,B]$, repeatedly bisect the current interval $I_j=[a_j,b_j]$, retaining its left half if that half's preimage under $u$ is large, otherwise its right half. The right half is large in the latter case: intersect the large preimage of $I_j$ with the large complement of the left-half preimage. Thus each $I_j$ has large preimage, the intervals nest, and $b_j-a_j=(B-A)2^{-j}$. This is a deterministic recursion. [F9, given]

2.1 For rational $\varepsilon>0$, take $N\ge N_0$ also beyond a Cauchy index of $a$ at tolerance $\varepsilon\delta^2$. For $m,n\ge N$, $|b_m-b_n|=|a_m-a_n|/(|a_m||a_n|)\le |a_m-a_n|/\delta^2<\varepsilon$. The nonstrict comparison includes $a_m=a_n$. Thus $b\in\mathcal C$. [step 1.1, F2, F3, F4]

2.2 Set $u=\sup_j a_j$. All $a_j\le u\le b_j$: for fixed $j$, every later left endpoint lies below $b_j$, and earlier ones lie below $a_j$. For any $\varepsilon>0$, a sufficiently late $I_j$ has length less than $\varepsilon$, so its large preimage lies in $\{n:|u_n-u|<\varepsilon\}$. Thus $u$ is an ultralimit, also when $A=B$. [step 1.3, step 1.4, F7]

3.1 The sequence $ab-1$ is eventually zero, hence null. The ideal $\mathcal N$ is proper since the constant $1$ fails the null test with tolerance $1/2$. Every ideal containing $\mathcal N$ and $a$ contains $ab-(ab-1)=1$, hence all of $\mathcal C$. This proves its maximality and the reciprocal interface directly, without the erroneous strict intermediate comparison in the older maximality proof. The real completeness conclusion of [F7] is used with this corrected input. [step 2.1, F4, F5, F6, F7]

3.2 If $u\ne u'$, their neighbourhoods of radius $|u-u'|/3$ are disjoint by the triangle inequality. Their preimages cannot both belong to a proper filter. Hence the limit is unique. Equality of two sequences on a large set lets every neighbourhood test for one pass to the other by intersection; their limits therefore agree. A free ultrafilter contains no finite set: if a finite set were large but none of its singletons were large, intersecting their large complements from [F9] would contradict its largeness. A large singleton would make the ultrafilter principal by upward closure and the filter intersection axiom. Hence the complement of every finite set is large by [F9], so an ordinary convergent bounded sequence satisfies the same tests. [step 2.2, F3, F9]

4.1 Intersect the two large error sets for $u_n,u$ and $v_n,v$, each at tolerance $\varepsilon/2$. There $|(u_n+v_n)-(u+v)|\le|u_n-u|+|v_n-v|<\varepsilon$. For $c\ne0$ use tolerance $\varepsilon/|c|$ to obtain $|cu_n-cu|<\varepsilon$; for $c=0$ the sequence is constant zero. Uniqueness identifies the stated limits. [step 3.2, F3, algebra]

4.2 If $|u_n|\le H$, intersect the large sets where both errors are less than $\varepsilon/(H+|v|+1)$. Then $|u_nv_n-uv|\le H|v_n-v|+|v||u_n-u|<\varepsilon$. Also $\big||u_n|-|u|\big|\le|u_n-u|$, so absolute values converge to $|u|$. These arguments apply to zero and unit constants as well. [step 3.2, F3, algebra]

5.1 If $u_n\le v_n$ on a large set but $u>v$, intersect that set with the two error sets of radius $(u-v)/3$. It would give $u_n>v_n$, impossible. Thus $u\le v$. All calculus constructions used only deterministic interval bisection and finite intersections once the ultrafilter was supplied; AC was spent only in the free-filter existence step. [step 3.2, step 4.1, step 4.2, algebra] ∎
