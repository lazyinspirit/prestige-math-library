---
id: lem-universal-pcf-sequences-have-strong-increase-and-exact-bounds
kind: lemma
title: Universal pcf sequences have strong increase and exact bounds
status: draft
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-pcf-cofinality-ideals-and-cutoff-conventions, lem-directed-progressive-products-have-club-continuous-chains, thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs, thm-progressive-pcf-has-universally-cofinal-sequences, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
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
    - title: "Abraham and Magidor, Cardinal Arithmetic, Lemma 4.6 p. 40, Theorem 4.8 p. 41 and Exercise 2.1 p. 11"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $A$ be a nonempty progressive set of infinite regular cardinals, $\lambda\in\operatorname{pcf}(A)$ and $I=J_{<\lambda}[A]$. Let $\mu$ be the least ordinal with $A\cap\mu\notin I$. There is a universally cofinal $\lambda$-sequence $(f_\xi)_{\xi<\lambda}$ with $(*)_\kappa$ modulo $I$ for every infinite regular $\kappa<\mu$, and an exact upper bound $h$ with $0<h(a)\le a$ a limit ordinal for every $a\in A$.

Either $\mu=\lambda+1$, in which case $\lambda\in A$, $I=\mathcal P(A\cap\lambda)$ and a principal-coordinate construction suffices, or $\mu$ is a singular limit cardinal less than $\lambda$. The latter case has $|A|^+<\mu<\lambda$, so the general exact-bound theorem applies. No finite-support case is inferred from that theorem.

## Facts & Assumptions

**Given:** AC, $A$, $\lambda$, $I$ as in the statement. The property $(*)_\kappa$ means every unbounded subset of the sequence's indices contains a strongly increasing subsequence of order type $\kappa$.

[F1] Product ultrafilter cofinalities are infinite regular cardinals at least the smallest coordinate; restriction to an ultrafilter support preserves them; finite PCF equals the coordinate set ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] $I$ is proper, and $\{a\}\in I$ exactly when $a<\lambda$; its subset criterion tests all supported ultrafilters ([[lem-pcf-cofinality-ideals-and-cutoff-conventions]]).

[F3] The product modulo $I$ is $\lambda$-directed and every cofinality-$\lambda$ ultrafilter avoids $I$ ([[thm-pcf-ideal-directedness-and-ultrafilter-cofinality-cutoffs]]).

[F4] A universal $\lambda$-sequence exists ([[thm-progressive-pcf-has-universally-cofinal-sequences]]).

[F5] Directedness gives one dominating strict chain with $(*)_\kappa$ for every uncountable regular $\kappa$ with $\kappa^{++}<\lambda$ and $\{a:a\le\kappa^{++}\}\in I$; its projection and exact-bound conclusions apply with their stated cardinal inequalities ([[lem-directed-progressive-products-have-club-continuous-chains]]).

[F6] Exact bounds are least bounds and are unique modulo the ideal; the general projection theorem yields positive limit representatives ([[lem-bounding-projections-give-exact-upper-bounds]]).

[F7] Smaller subsets of a regular cardinal are bounded; cofinality of a limit ordinal is regular ([[thm-cofinality-basics]], (c)–(d)).

[F8] Successor cardinals are regular under AC ([[thm-regularity-of-the-alephs]], (b)).

[F9] A specified rule recurses on an ordinal ([[thm-transfinite-recursion]]).

[A1] AC supplies choices from nonempty sets ([[def-axiom-of-choice]]).

## Proof

1.1 Choose a cofinality-$\lambda$ ultrafilter $D$, which exists by the definition of $\operatorname{pcf}(A)$. Put $L=A\cap(\lambda+1)$. If $L\notin D$, its complement belongs to $D$: a maximal proper filter omitting $L$ has a member disjoint from $L$, since otherwise adjoining $L$ would generate a proper larger filter. On that complement every coordinate exceeds $\lambda$; F1 would give product cofinality greater than $\lambda$, a contradiction. Thus $L\in D$, and F3 implies $L\notin I$. The least positive initial segment therefore exists with $\mu\le\lambda+1$. Also $\lambda\ge\min A>|A|$ by F1 and progressiveness. If $\mu=\theta+1$, minimality gives $A\cap\theta\in I$, and positivity of its union with $A\cap\{\theta\}$ forces $\theta\in A$ and $\{\theta\}\notin I$. F2 gives $\theta\ge\lambda$, while $\theta+1\le\lambda+1$ gives $\theta\le\lambda$. Thus $\theta=\lambda$. [F1, F2, F3, given]

2.1 In this successor case let $N=A\cap\lambda$. Then $N\in I$. No member of $I$ contains a coordinate $a\ge\lambda$, by its singleton subset and F2; hence $I=\mathcal P(N)$. Define $f_\xi(a)=0$ on $N$ and $f_\xi(a)=\xi$ off $N$. Since $a\ge\lambda>\xi$ off $N$, these are product functions. For $\xi<\eta$, $f_\xi(a)<f_\eta(a)$ everywhere off $N$, so the whole sequence is strongly increasing with constant exceptional set $N$. Every unbounded $U\subseteq\lambda$ has an increasing sequence of indices of order type any infinite $\kappa\le\lambda$: recursively take its least member above previous indices, using regularity from F1 and boundedness from F7 at stages below $\lambda$, and F9 for the recursion. Restriction proves each required $(*)_\kappa$. Every cofinality-$\lambda$ ultrafilter contains $\{\lambda\}$: it avoids $N$ by F3 and cannot concentrate on the coordinates greater than $\lambda$ by F1; the finite intersection rule forces that singleton. At that coordinate the values $\xi$ enumerate $\lambda$, so the sequence is universal. [step 1.1, F1, F2, F3, F7, F9]

2.2 Otherwise $\mu$ is a limit ordinal and $A\cap\mu$ is unbounded in $\mu$. Indeed, a bound $\beta<\mu$ would give $A\cap\mu=A\cap(\beta+1)\in I$. An unbounded set of infinite cardinals has a cardinal supremum: for each $\gamma<\mu$ some cardinal $a$ satisfies $\gamma<a<\mu$, ruling out any bijection of $\mu$ with a smaller ordinal $\gamma$ by restriction to $a$. Thus $\mu$ is a limit cardinal. Also $\operatorname{cf}(\mu)\le|A\cap\mu|\le|A|<\min A<\mu$ by F7 and progressiveness. It is singular; since $\lambda$ is regular and $\mu\le\lambda+1$, it follows that $\mu<\lambda$. The support $A$ is infinite, and, as $\mu$ is a limit cardinal above $|A|$, $|A|^+<\mu$. For every infinite regular $\kappa<\mu$ its double successor and the ordinal $\kappa^{++}+1$ are below $\mu$. Minimality therefore gives $\{a\in A:a\le\kappa^{++}\}\in I$. [step 1.1, F1, F2, F7]

3.1 In the successor case of step 2.1, set $h(a)=a$ on $N$ and $h(a)=\lambda$ off $N$. These are positive limit ordinals and $h(a)\le a$. Every $f_\xi<_Ih$. Given $g<_Ih$, its failure set is a subset of $N$, so $g(a)<\lambda$ for every $a\notin N$. There are at most $|A|<\lambda$ such values, so F7 bounds their successors by some $\xi<\lambda$; if their supremum is zero, take $\xi=1$. Then $g(a)<\xi=f_\xi(a)$ off $N$, proving exactness. This proves the complete conclusion in the successor case. In particular it covers finite $A$: the finitely many initial segments change only at successors, so a least positive one cannot first occur at a limit. [step 1.1, step 2.1, F7]

3.2 In the limit case of step 2.2, AC in A1 supplies the choice hypothesis of the following two existence results. Apply F4 to obtain a universal sequence $g$, and F5 using F3's directedness to obtain a strict chain $f$ with $g_\xi(a)<f_{\xi+1}(a)$ everywhere. For every uncountable regular $\kappa<\mu$, step 2.2 checks both eligibility inequalities and the small-coordinate condition, so this one chain has $(*)_\kappa$. It also has $(*)_\omega$: $\omega_1<\mu$ because $\mu$ is a limit cardinal greater than the infinite cardinal $|A|$, and $\omega_1$ is regular by F8; restrict each strong $\omega_1$ subsequence to its first $\omega$ terms. If $D$ has cofinality $\lambda$, F3 transfers every $I$ comparison to $D$. Given a product function $u$, universality of $g$ supplies $\xi$ with $u\le_Dg_\xi<_Df_{\xi+1}$, proving universality of $f$. [step 2.2, F3, F4, F5, F8, A1]

4.1 Put $\tau=|A|$. By F8 $\tau^+$ is regular and uncountable; step 2.2 gives $\tau^+<\mu<\lambda$ and makes it eligible in F5. Thus F5's projection and exact-bound clauses supply an exact bound $v$ with positive limit values. Let $e(a)=a$, a pointwise bound for every product function. Leastness in F6 gives $v\le_Ie$. Set $h(a)=\min\{v(a),a\}$; it is positive and limit-valued, lies below $a$ everywhere, and differs from $v$ only on the small set $\{a:v(a)>a\}$. Consequently each upper-bound comparison and each comparison $g<_Ih$ is unchanged from $v$, so exactness is preserved. Together with the successor-case construction in step 3.1 and universality in step 3.2 this proves all the assertions. QED. [step 2.1, step 3.1, step 2.2, step 3.2, F5, F6, F8]
