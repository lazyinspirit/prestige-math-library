---
id: thm-small-dowker-conditional-aleph-one-constructions
kind: theorem
title: Conditional Dowker constructions of cardinality aleph one
status: draft
origin: pipeline
deps: [def-small-dowker-luzin-stick-and-ad-principles, def-small-dowker-tight-strongly-unbounded-coloring, lem-small-dowker-ch-gives-luzin-set, lem-small-dowker-luzin-gives-tight-coloring, lem-small-dowker-coloring-gives-ad-guessing, lem-small-dowker-stick-gives-ad-guessing, def-small-dowker-ladder-topology, lem-small-dowker-ladder-normality, lem-small-dowker-ladder-shrinking-obstruction, thm-balogh-continuum-sized-zfc-dowker-space, thm-small-intersections-of-clubs, def-diamond-on-omega-one, def-ostaszewski-club-principle, prop-diamond-implies-ostaszewski-club, lem-limit-points-of-unbounded-sets, thm-cantor-powerset, def-axiom-of-choice, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, thm-omega-one-is-the-least-uncountable-ordinal]
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
    - title: "Rinot–Shalev–Todorcevic, A new small Dowker space, arXiv v1 (21 September 2022), Theorem 3.3 pp. 6–10 and Theorem 4.3 pp. 11–12; Definitions 1.1, 2.1, 2.10, 4.1"
      url: https://arxiv.org/pdf/2209.10504
    - title: "Rinot–Shalev, A guessing principle from a Souslin tree, with applications to topology, §3 pp. 16–19"
      url: https://www.assafrinot.com/files/paper48.pdf
---

## Statement

Assume AC. Each of the following hypotheses, separately, yields a normal Hausdorff Dowker space of cardinality $\aleph_1$:

- CH, namely $2^{\aleph_0}=\aleph_1$;
- an uncountable classical Luzin set in $\mathbb R$ or in Baire space;
- a set of size $\aleph_1$ with the Luzin cylinder property;
- a tight strongly unbounded coloring $c:\omega\times\omega_1\to\omega$;
- stick at $\omega_1$;
- Ostaszewski's $\clubsuit$;
- ordinary $\diamondsuit$ on $\omega_1$;
- the finite-target AD array on a countably infinite stationary partition of $E=E^{\omega_1}_\omega$, or the single-ladder two-target AD system on countably many stationary levels.

The Luzin, stick, and AD conventions are precisely [[def-small-dowker-luzin-stick-and-ad-principles]], and the coloring convention is [[def-small-dowker-tight-strongly-unbounded-coloring]]. The proof constructs the needed stationary partition locally, proves $\clubsuit\Rightarrow\text{stick}$ and $\diamondsuit\Rightarrow\mathrm{CH}$, and includes $\diamondsuit\Rightarrow\clubsuit$. CH also gives a separate route through Balogh's continuum-sized construction.

Here ordinary diamond means a sequence $D_\alpha\subseteq\alpha$ such that $\{\alpha:D_\alpha=X\cap\alpha\}$ is stationary for every $X\subseteq\omega_1$ ([[def-diamond-on-omega-one]]). Ostaszewski $\clubsuit$ means cofinal $C_\alpha\subseteq\alpha$ at nonzero countable limits, with stationarily many containment guesses $C_\alpha\subseteq X$ for each uncountable $X\subseteq\omega_1$ ([[def-ostaszewski-club-principle]]). The theorem asserts neither a parameterized diamond principle, nor a conclusion from ordinary club guessing alone, nor an unconditional ZFC construction of size $\aleph_1$.

## Facts & Assumptions

**Given:** AC and, for each implication proved, the indicated individual additional hypothesis. Put $\kappa=\omega_1$.

[F1] CH gives a classical Luzin set of size $\aleph_1$ in Baire space, and a classical uncountable Luzin set in either Baire space or $\mathbb R$ gives an $\aleph_1$-sized set with the cylinder property ([[lem-small-dowker-ch-gives-luzin-set]]).

[F2] The cylinder property yields a tight strongly unbounded coloring ([[lem-small-dowker-luzin-gives-tight-coloring]]).

[F3] Such a coloring yields an AD guessing array for every stationary partition of $E$ ([[lem-small-dowker-coloring-gives-ad-guessing]]).

[F4] Stick yields the strong diagonal AD property for every stationary partition of $E$ ([[lem-small-dowker-stick-gives-ad-guessing]]). Clause 4 implies clause 3, whose zeroth-row selection gives the two-target system of clause 5 ([[def-small-dowker-luzin-stick-and-ad-principles]]).

[F5] The two-target system defines the ladder space; it is normal Hausdorff, has size $\aleph_1$, fails countable paracompactness and has nonnormal interval product ([[def-small-dowker-ladder-topology]], [[lem-small-dowker-ladder-normality]], [[lem-small-dowker-ladder-shrinking-obstruction]]).

[F6] Under AC, Balogh's construction is a Hausdorff hereditarily normal Dowker space of size $2^{\aleph_0}$ ([[thm-balogh-continuum-sized-zfc-dowker-space]]).

[F7] On an ordinal of uncountable cofinality, countably many clubs have club intersection when the cofinality exceeds $\omega$; the limit points of an unbounded subset form a club ([[thm-small-intersections-of-clubs]], [[lem-limit-points-of-unbounded-sets]]).

[F8] Below $\omega_1$ every ordinal is countable; countable unions of countable sets are countable and countable subsets of $\omega_1$ are bounded under countable choice ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[thm-countable-union-of-countable]], [[thm-countable-subsets-of-omega-one-are-bounded]]).

[F9] There is no surjection from a set to its power set ([[thm-cantor-powerset]]).

[F10] Ordinary diamond implies Ostaszewski $\clubsuit$ by thinning guessed cofinal sets to increasing $\omega$-ladders ([[prop-diamond-implies-ostaszewski-club]]); both principles use the quantified conventions in the statement.

[A1] AC supplies all simultaneous enumerations of countable ordinals and the countable choices in F7–F8, as well as the explicit AC assumptions of F1–F6 and F10 ([[def-axiom-of-choice]]).

## Proof

1.1 First construct a stationary partition without assuming a coloring. The set $E$ of nonzero countable limits is club: above $\beta<\kappa$ lies the countable limit $\beta+\omega$, and a nonzero limit point of nonzero limit ordinals is again a nonzero countable limit. F8 implies $\operatorname{cf}(\kappa)>\omega$. For each infinite $\beta<\kappa$, AC fixes a surjection $b_\beta:\omega\to\beta$. For $\xi<\kappa$ and $n<\omega$, put $V_{\xi,n}=\{\beta>\max(\xi,\omega):b_\beta(n)=\xi\}$. As $n$ varies these sets cover a tail of $\kappa$. If every $E\cap V_{\xi,n}$ were nonstationary, choose a club avoiding each; their intersection is club by F7, and after intersecting the relevant tail and $E$ it would be a nonempty club avoiding their union, impossible. Let $n(\xi)$ be the least $n$ such that $E\cap V_{\xi,n}$ is stationary. [F7, F8, A1]

1.2 For later use, any supplied AD array on a countably infinite stationary partition gives a two-target system simply by setting $A_\alpha=A_\alpha^0$. Cofinality and bounded cross-index intersections are inherited; applying the array guessing clause to the list of its two uncountable targets gives precisely simultaneous stationary guessing on each part. F5 therefore constructs a normal Hausdorff Dowker space of size $\aleph_1$. A supplied single-ladder two-target system is already the exact input of F5. [F4, F5]

1.3 Suppose $\clubsuit$ holds, with its stated cofinal $C_\alpha$ at $\alpha\in E$. Every $C_\alpha$ is countably infinite: it is contained in a countable ordinal and a finite set cannot be cofinal in a nonzero limit. Define a sequence on all $\xi<\kappa$ by $s_\xi=C_\xi$ if $\xi\in E$, and $s_\xi=\omega$ otherwise. For uncountable $X\subseteq\kappa$, its stationary containment-guess set is nonempty, so some $s_\xi\subseteq X$. Thus this sequence witnesses stick. The arbitrary fallback is the fixed countably infinite subset $\omega$ of $\kappa$ and makes no additional guessing assertion. [F8, given]

1.4 Suppose ordinary diamond holds, with sequence $(D_\alpha)$. For every $r\subseteq\omega$, the set of indices $\alpha\ge\omega$ with $D_\alpha=r$ is stationary and nonempty: diamond guesses $X=r$, and above $\omega$ its intersection with $\alpha$ is just $r$. Let $h(r)$ be its least index. If $h(r)=h(s)=\alpha$, then $r=D_\alpha=s$, so $h$ injects $\mathcal P(\omega)$ into $\omega_1$. F9 makes $\mathcal P(\omega)$ uncountable. An uncountable subset of $\omega_1$ has increasing order type $\omega_1$: its order type is at most $\omega_1$, and cannot be any smaller, countable ordinal. Apply this to the image of $h$ to obtain $|\mathcal P(\omega)|=\aleph_1$, proving CH. The least-index map itself needs no choices. [given, F8, F9]

1.5 The additional diamond-to-$\clubsuit$ route is F10. Its hypothesis is the ordinary sequence in the statement, not a parameterized diamond: at each countable limit with cofinal $D_\alpha$, choose an increasing cofinal $\omega$-sequence inside $D_\alpha$, and otherwise choose one inside $\alpha$. AC fixes the countable ordinal enumerations permitting these minimum recursions. For an uncountable $X$, it is unbounded by F8, and its limit-point set is club by F7. Intersecting that club with the stationary diamond-guess set leaves a stationary set of cofinal guesses, whose chosen ladders lie in $X$. This verifies the hypotheses and conclusion of the already proved F10 construction. [given, F7, F8, F10, A1]

1.6 For the separate CH comparison, F6 constructs a Dowker space of size $2^{\aleph_0}$ under AC. Under CH that cardinal is $\aleph_1$, and its hereditary normality implies normality by taking the whole space as subspace. Thus Balogh's construction also yields the asserted cardinality in the CH case. [given, F6, A1]

2.1 Some $n_*$ is assumed by uncountably many $\xi$: otherwise F8 would make their union $\kappa$ countable. For distinct such $\xi,\eta$, the stationary sets $E\cap V_{\xi,n_*}$ and $E\cap V_{\eta,n_*}$ are disjoint, since $b_\beta(n_*)$ cannot equal both indices. Select distinct indices $\xi_j$, $j\ge1$, by successively taking the least unused member of that uncountable set. Put $T_j=E\cap V_{\xi_j,n_*}$. Set $S_j=T_j$ for $j\ge2$ and $S_1=E\setminus\bigcup_{j\ge2}T_j$. These sets partition $E$ and are stationary, since $S_1$ contains $T_1$ and the others already are stationary. This is the required countably infinite partition. [step 1.1, F8]

3.1 Suppose a tight strongly unbounded coloring is given. Apply F3 to the partition from step 2.1 and then apply step 1.2. If only a cylinder Luzin set is given, F2 first supplies that coloring. If a classical uncountable Luzin set in either indicated space is given, F1 first supplies the cylinder Luzin set. Finally CH supplies the classical Luzin set by F1 and therefore follows the same chain. Each intermediate conclusion matches the next supplier's hypothesis, with AC retained throughout. [step 2.1, step 1.2, F1, F2, F3, A1]

3.2 Suppose stick holds. F4 supplies its strong diagonal AD array on the partition from step 2.1. To see explicitly that finite targets suffice, extend any finite nonempty list to a $\kappa$-sequence by padding with $\kappa$; intersect the stationary diagonal guessing set with the club tail above the list length. All requested finite targets are then guessed by every row. Finite cross-row intersections are bounded at a limit index, so this is the finite-target array. Step 1.2 gives the space. [step 2.1, step 1.2, F4, F7, A1]

4.1 Steps 1.3 and 3.2 give the $\clubsuit$ branch. Steps 1.4 and 3.1 give the ordinary diamond branch; step 1.5 supplies its additional route through $\clubsuit$. Steps 1.2, 3.1 and 3.2 cover all other alternatives, and step 1.6 supplies the separate Balogh comparison. Every output has all properties asserted in F5 or F6. These implications assert no converse between the displayed hypotheses, and in particular do not assert CH implies $\clubsuit$. No construction here starts from ordinary club targets alone, and none removes all the additional hypotheses at cardinality $\aleph_1$. QED. [step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 3.1, step 3.2, F5, F6]
