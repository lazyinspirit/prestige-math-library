---
id: lem-eventual-products-below-aleph-omega-have-a-continuous-long-chain
kind: lemma
title: A long chain with club continuity below aleph omega
status: draft
origin: pipeline
deps: [lem-club-continuity-produces-strongly-increasing-subsequences, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 2.21 pp. 23–24, directedness proof of Theorem 2.23 p. 24, Exercise 2.25 and Theorem 2.26 p. 25"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Put $\mu=\aleph_\omega$, $\lambda=\mu^+=\aleph_{\omega+1}$, $N=\omega\setminus\{0,1\}$ and $P=\prod_{n\in N}\aleph_n$. Every family in $P$ of cardinality less than $\lambda$ has a strict eventual upper bound in $P$.

There is a strictly $<^*$ increasing sequence $(f_\delta)_{\delta<\lambda}$ in $P$ with $(*)_\kappa$ for every uncountable regular $\kappa<\mu$. More precisely, whenever $\delta<\lambda$ and $\operatorname{cf}(\delta)=\kappa^{++}$ for such a $\kappa$, there is a club $E_\delta\subseteq\delta$ for which $\sup_{\xi\in E_\delta}f_\xi<^*f_\delta$, with the supremum taken pointwise. The strong-increase assertion means every unbounded set of indices contains an order-type-$\kappa$ subsequence that is pointwise strictly increasing outside the union of two individual finite exceptional sets.

## Facts & Assumptions

**Given:** AC and the cardinals and product just defined; eventual comparison means comparison at all but finitely many $n\in N$.

[F1] Club continuity at cofinality $\kappa^{++}$ gives $(*)_\kappa$ when $\kappa$ is uncountable regular, $\kappa^{++}<\lambda$ and the sequence has regular length $\lambda$ ([[lem-club-continuity-produces-strongly-increasing-subsequences]]).

[F2] Subsets smaller than a regular cardinal are bounded in it, and each limit ordinal has a cofinal subset of size its cofinality ([[thm-cofinality-basics]], (c)–(d)).

[F3] Under AC all successor alephs are regular; $\aleph_\omega$ has countable cofinality and every smaller infinite cardinal is a finite-index aleph ([[thm-regularity-of-the-alephs]]).

[F4] Specified transfinite rules recurse on well-orders ([[thm-transfinite-recursion]]).

[A1] AC supplies choice functions on nonempty sets of witnesses ([[def-axiom-of-choice]]).

## Proof

1.1 If $\mathcal H\subseteq P$ has size $\rho<\mu$, set $b(n)=\sup\{u(n)+1:u\in\mathcal H\}$ when $\aleph_n>\rho$, and $b(n)=0$ otherwise. At a large coordinate, each successor is below the infinite cardinal $\aleph_n$, and F2–F3 place the supremum below $\aleph_n$. Only finitely many coordinates have $\aleph_n\le\rho$, since $\sup_n\aleph_n=\mu$. Thus $b\in P$ and $u<^*b$ for each $u\in\mathcal H$. The empty family gives $b=0$ and imposes no comparisons. If instead $|\mathcal H|=\mu$, take a bijection $q:\mu\to\mathcal H$ and let $\mathcal H_j=q[\aleph_j]$, so $\mathcal H=\bigcup_{j<\omega}\mathcal H_j$ and each $|\mathcal H_j|<\mu$. The preceding formula gives a bound $b_j$ for each subfamily and a bound $b$ for the countable family $\{b_j:j<\omega\}$. For $u\in\mathcal H_j$, compose $u<^*b_j<^*b$ outside the union of the two finite failure sets. AC ensures these cardinalities and the indicated enumeration; thus every family of size less than $\mu^+$ has a strict bound. [F2, F3, A1]

1.2 For each nonzero limit $\delta<\lambda$, F2 gives a cofinal sequence of length $\theta=\operatorname{cf}(\delta)$. Turn it into a continuous increasing sequence in $\delta$: at successor stages choose a value above both the preceding value and the next cofinal-sequence term, and at nonzero limits take the supremum of earlier values. Each intermediate supremum is below $\delta$ because fewer than $\operatorname{cf}(\delta)$ terms were used, by F2. Successor choices are possible because $\delta$ is a limit. The range is unbounded and closed in $\delta$, hence is a club $E_\delta$ of order type $\theta$; closure follows because every nonzero limit point below $\delta$ occurs at a limit index of the continuous sequence. F4 supplies the recursion, and A1 chooses these clubs simultaneously from their nonempty witness sets. Also fix by A1 a choice function on the nonempty subsets of the set $P$ for use in choosing bounds. [F2, F4, A1]

2.1 Recursively set $f_0=0$. At every $0<\delta<\lambda$, the previous functions form a family of size at most $|\delta|<\lambda$, so step 1.1 and the choice function of step 1.2 specify a strict eventual bound $u_\delta\in P$. If $\operatorname{cf}(\delta)=\kappa^{++}$ for an uncountable regular $\kappa<\mu$, put $v_\delta(n)=\sup_{\xi\in E_\delta}f_\xi(n)$ at coordinates with $\aleph_n>\kappa^{++}$, and put $v_\delta(n)=0$ at the others; then set $f_\delta(n)=\max\{u_\delta(n),v_\delta(n)\}+1$. The large-coordinate supremum is below $\aleph_n$ because $|E_\delta|=\kappa^{++}<\operatorname{cf}(\aleph_n)$ by F2–F3. Its successor is still below that infinite cardinal. At all other stages put $f_\delta=u_\delta$. Distinct cardinals have distinct double successors, so the special rule is unambiguous. Every value lies in $P$, and F4 implements this specified recursion through $\lambda$. For every $\xi<\delta$ we have $f_\xi<^*u_\delta\le f_\delta$, proving strict increase. [step 1.1, step 1.2, F2, F3, F4]

3.1 Fix any uncountable regular $\kappa<\mu$. By F3 it is $\aleph_j$ for some positive finite $j$, so $\kappa^{++}=\aleph_{j+2}<\mu<\lambda$, and $\lambda$ is regular by F3. At each index $\delta$ of that cofinality, step 2.1 used the special rule, giving $\sup_{\xi\in E_\delta}f_\xi(n)=v_\delta(n)<f_\delta(n)$ whenever $n>j+2$. The other coordinates form a finite set. This is the required club-continuity premise with bounding index exactly $\delta$. The countably infinite coordinate set and strict chain from step 2.1 meet F1's remaining hypotheses. F1 gives $(*)_\kappa$ for this same chain. As $\kappa$ was arbitrary, all stated properties hold simultaneously. QED. [step 1.1, step 2.1, F1, F3]
