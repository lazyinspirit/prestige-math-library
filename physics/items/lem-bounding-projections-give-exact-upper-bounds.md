---
id: lem-bounding-projections-give-exact-upper-bounds
kind: lemma
title: Bounding projections produce an exact upper bound with large coordinate cofinalities
status: published
origin: pipeline
deps: [def-strong-increase-and-bounding-projections-for-countable-products, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 2.13 pp. 17–18, Lemma 2.14 p. 18, Theorem 2.15 implication 2 to 3 p. 19; exactness transfers p. 11"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $I$ be a proper ideal on an infinite set $A$, $\tau=|A|$, and $\lambda>\tau^+$ a regular cardinal. A strictly $<_I$ increasing sequence $(f_\alpha)_{\alpha<\lambda}$ with the $\tau^+$ bounding-projection property has an exact upper bound $h$, unique modulo $=_I$. It has a representative with every $h(a)$ a nonzero limit ordinal. If the sequence also has the bounding-projection property for a regular $\kappa$ with $\tau^+\le\kappa\le\lambda$, then

$$\{a\in A:\operatorname{cf}(h(a))<\kappa\}\in I.$$

Exactness restricts to every $I$-positive support and passes to every larger proper ideal. In particular, for countably infinite $A$ and the finite ideal, a regular length $\lambda>\aleph_1$ and the $\aleph_1$ projection property give a unique eventual exact upper bound, with the stated cofinality bound holding outside a finite set.

Every exact bound is also a least upper bound among ordinal-valued functions modulo $I$.

## Facts & Assumptions

**Given:** The sequence, ideal, cardinals, AC and bounding-projection properties of the statement. Upper bounds are taken among all ordinal-valued functions on $A$.

[F1] Projections, strict and weak comparisons, the bounding-projection property and exact upper bounds are as in [[def-strong-increase-and-bounding-projections-for-countable-products]].

[F2] A subset of a regular cardinal with smaller cardinality is bounded; limit ordinals have cofinal subsets of cardinality their cofinality ([[thm-cofinality-basics]], clauses (c)–(d)).

[F3] Successor cardinals, in particular $\tau^+$, are regular under AC ([[thm-regularity-of-the-alephs]], clause (b)).

[F4] A specified transfinite recursion on a well-order determines a function ([[thm-transfinite-recursion]]).

[A1] AC supplies simultaneous witnesses and choice functions on nonempty sets of witnesses ([[def-axiom-of-choice]]).

## Proof

1.1 Set $H(a)=\sup_{\alpha<\lambda}(f_\alpha(a)+1)+1$, a pointwise strict bound. The ordinal functions $u\le H$ form a set. Any weak upper bound $u$ strictly bounds every term: $f_\alpha<_If_{\alpha+1}\le_Iu$, since $\alpha+1<\lambda$. If two functions are upper bounds, their pointwise minimum is also an upper bound, because outside the union of the two small exceptional sets it dominates each fixed $f_\alpha$. Thus, if an upper bound $u\le H$ is not minimal in the weak quotient order, there is an upper bound $v\le u$ pointwise with $\{a:v(a)<u(a)\}$ positive: take its minimum with a smaller quotient bound. [F1, given, algebra]

2.1 Suppose there were no minimal upper bound below $H$. For $\eta<\tau^+$ recursively form increasing nonempty sets $S_\eta(a)\subseteq H(a)+1$, starting with $S_0(a)=\{H(a)\}$, taking unions at limits, and adjoining one value at each successor as follows. Every $S_\eta(a)$ has size at most $|\eta|+1\le\tau$ and contains $H(a)$, so its supremum is $H(a)$ and the $\tau^+$ projection property applies. Let $\alpha_\eta$ be the least index whose projection $h_\eta$ strictly bounds the sequence. For $\beta\ge\alpha_\eta$, its projection onto the same $S_\eta$ equals $h_\eta$ modulo $I$: outside a small set, $f_{\alpha_\eta}\le f_\beta<h_\eta$, and $h_\eta$ is the least $S_\eta$ value at least $f_{\alpha_\eta}$, so it is also the least value at least $f_\beta$. By step 1.1 choose an upper bound $u_\eta\le h_\eta$ pointwise, strictly smaller on a positive set, and put $S_{\eta+1}(a)=S_\eta(a)\cup\{u_\eta(a)\}$. AC fixes a choice function on the nonempty witness subsets of the set of functions below $H$; F4 then implements the recursion. [step 1.1, F1, F4, A1]

2.2 Every exact bound $v$ is a least bound. Its zero coordinates are small by $f_0<_If_1\le_Iv$. If another bound $u$ failed $v\le_Iu$, the set $B=\{a:u(a)<v(a)\}$ would be positive. Define $g=u$ on $B$ and $g=0$ elsewhere. Then $g<_Iv$, the only possible failures being zero coordinates of $v$. Exactness gives $g<_If_\alpha$ for some $\alpha$, while $f_\alpha\le_Iu$. Outside the union of those two small exception sets, a point of positive $B$ would satisfy $u(a)=g(a)<f_\alpha(a)\le u(a)$, impossible. Hence $v\le_Iu$ for every bound $u$. Two exact bounds are mutually weakly below one another and thus $=_I$ equal. [step 1.1, F1]

3.1 Regularity of $\lambda$ and $\tau^+<\lambda$ give a single $\beta<\lambda$ above all $\alpha_\eta$. Put $P_\eta=\operatorname{proj}(f_\beta,S_\eta)$. These functions decrease pointwise because the sets of eligible projection values increase, and $H$ always remains eligible. Step 2.1 gives $P_\eta=_Ih_\eta$. Also $P_{\eta+1}=_Iu_\eta$: outside a small set the old ceiling is $h_\eta$ and $f_\beta<u_\eta\le h_\eta$ by step 1.1; the only new eligible value below the old ceiling is $u_\eta$. Thus $\{a:P_{\eta+1}(a)<P_\eta(a)\}$ is positive for every $\eta$. AC selects a coordinate of strict decrease for each $\eta<\tau^+$. Some coordinate is selected unboundedly often: otherwise each fiber is bounded, and the $\tau<\tau^+$ fiber bounds have bounded supremum by F2–F3, contradicting that all stages have a selected coordinate. Taking an increasing countable sequence of these stages gives an infinite strictly descending sequence of ordinals at that coordinate, since all intervening comparisons are weakly decreasing. This is impossible: the set of values of such a sequence would have a least member followed by a smaller one. Hence a minimal upper bound $h\le H$ exists. [step 1.1, step 2.1, F2, F3, A1]

4.1 This $h$ is a least upper bound among all ordinal bounds. For any other bound $v$, the minimum $\min(h,v)$ is a bound below $h$ by step 1.1; minimality forces it equal to $h$ modulo $I$, hence $h\le_Iv$. The zero coordinates of $h$ form a small set, since $0\le f_0<_If_1\le_Ih$. If the successor-valued coordinates formed a positive set, replacing $h$ by its predecessor on those coordinates would give a strictly smaller bound: each $f_\alpha<_Ih$ by step 1.1, so there $f_\alpha$ is at most that predecessor outside a small set. This contradicts minimality. Change $h$ to $\omega$ on its small set of zero or successor coordinates. It remains $=_I$ the old least bound and is now positive and limit-valued everywhere. [step 1.1, step 3.1, F1]

5.1 Given $g<_Ih$, reset $g$ to zero on its small set of coordinates with $g(a)\ge h(a)$. This preserves its class and makes $g<h$ pointwise. The sets $S(a)=\{g(a),h(a)\}$ have size at most two, hence less than $\tau^+$, and their supremum is $h$. The bounding-projection property gives a projection $p$ of some $f_\alpha$ that bounds the sequence. It satisfies $p\le h$ pointwise, including any fallback, so leastness of $h$ gives $p=_Ih$. Outside the small sets where that equality fails or $f_\alpha\ge h$, the least eligible element of $\{g(a),h(a)\}$ is $h(a)$; thus $g(a)<f_\alpha(a)$ there. Therefore $g<_If_\alpha$, proving exactness. [step 4.1, F1]

5.2 Suppose the additional $\kappa$ projection property holds and $B=\{a:\operatorname{cf}(h(a))<\kappa\}$ is positive. By F2 and AC, choose for each $a\in B$ a cofinal subset $S(a)\subseteq h(a)$ of size less than $\kappa$; off $B$ put $S(a)=\{h(a)\}$. These sets are nonempty and have supremum $h(a)$, since $h(a)$ is a nonzero limit. A bounding projection $p$ is at most $h$ everywhere and strictly less at every coordinate of $B$, since its values, including its fallback, lie in $S(a)$. This contradicts leastness of $h$. Thus $B\in I$. Modifying a representative on a small set does not change this conclusion. [step 4.1, F1, F2, A1]

6.1 Let $B\subseteq A$ be positive and let $g<_ {I\restriction B}h\restriction B$. Reset $g$ to zero on its small failure set, then extend it by zero off $B$. The resulting function is pointwise below positive $h$, so exactness from step 5.1 yields $g<_If_\alpha$ after extension, and restriction gives the desired comparison modulo $I\restriction B$. Upper-boundedness restricts directly, proving restricted exactness. If $J\supseteq I$ is a larger proper ideal and $g<_Jh$, reset $g$ to zero on the $J$-small failure set. The reset function is everywhere below $h$, so it is $<_I$ some $f_\alpha$; restoring $g$ changes it only on a $J$-small set, giving $g<_Jf_\alpha$. Upper-boundedness also passes to $J$, proving exactness there. With $|A|=\aleph_0$ and the finite ideal, all small sets in these conclusions are finite and $\tau^+=\aleph_1$, giving the stated specialization. QED. [step 4.1, step 5.1, F1]
