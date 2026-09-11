---
id: "lem-lc-inaccessible-size-and-rank-bounds"
kind: "lemma"
title: "Size and rank bounds below an inaccessible"
deps: ["def-lc-inaccessible-and-mahlo-cardinals", "def-cumulative-hierarchy-stages", "def-membership-rank-of-a-set", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Theorem 18.16 p.79, prerequisite size estimate; Monk Chapter 17
        pp.356–363
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC let kappa be inaccessible. Then $|V_\alpha|<\kappa$ for every $\alpha<\kappa$, every $x\in V_\kappa$ has size less than kappa, and every set of fewer than kappa elements of $V_\kappa$ belongs to $V_\kappa$. For cardinals $\mu,\nu<\kappa$, $\mu^\nu<\kappa$, with $0^0=1$. The strong-limit cardinals below kappa contain a club subset of kappa.

## Facts & Assumptions

**Given:** ZFC. Supplied the cardinal-square proof and small-union estimate locally, identifying AC for simultaneous injections; then proved the rank, exponent and strong-limit club assertions with all zero and limit cases.

[F1] [[def-lc-inaccessible-and-mahlo-cardinals]]: Kappa is regular uncountable and strong limit; club uses closure at nonzero limit accumulation points.

[F2] [[def-cumulative-hierarchy-stages]]: V grows by power sets at successors and unions at limits.

[F3] [[def-membership-rank-of-a-set]]: Ranks are suprema of member ranks plus one, and rank below kappa means membership in V_kappa.

[F4] [[def-axiom-of-choice]]: AC permits well-ordering sets, cardinal comparisons and simultaneous selection of injections for a set family.

## Proof

1.1 We first justify the small-union estimate used here. For every infinite cardinal theta, $|\theta\times\theta|=\theta$: by induction on infinite cardinals order pairs by their maximum coordinate, then lexicographically. An initial segment ending at coordinates below $\gamma+1<\theta$ has size at most $|(\gamma+1)\times(\gamma+1)|<\theta$, by the induction hypothesis at $|\gamma+1|$ (or by finite counting). This well-order has type at most theta, since otherwise its first theta elements would be a proper initial segment of size theta. The reverse bound uses the injection $\xi\mapsto(\xi,0)$. Consequently for fewer than kappa sets of size below kappa, regularity bounds the set of their cardinalities and the index cardinal below a common infinite cardinal $\eta<\kappa$. Such an eta exists because a strong-limit cardinal is a limit cardinal: if kappa were the successor of eta, Cantor diagonalization would give $2^\eta\ge\kappa$. AC selects injections of the sets into eta, embedding their disjoint union into $\eta\times\eta$. Its size is therefore below kappa. [F1, F4]

2.1 Induct on $\alpha<\kappa$. The empty V_0 is small. At a successor, $|V_{\alpha+1}|=2^{|V_\alpha|}<\kappa$ by strong limit. At a nonzero limit alpha there are fewer than kappa earlier levels, so step 1.1 bounds their union below kappa. If $x\in V_\kappa$, it is a subset of some earlier V level, hence has size below kappa. [F1, F2, step 1.1]

3.1 If $Y\subseteq V_\kappa$ and $|Y|<\kappa$, Replacement collects the ranks of its members; regularity bounds their supremum plus one below kappa. Thus the supremum of their ranks plus one, namely rank(Y), is below kappa, so $Y\in V_\kappa$. For empty Y the rank is zero. [F1, F3, step 2.1]

4.1 For $\mu,\nu<\kappa$, graphs inject the set of functions $\nu\to\mu$ into $\mathcal P(\nu\times\mu)$. Step 1.1 bounds the product size by some infinite $\eta<\kappa$, so $\mu^\nu\le2^\eta<\kappa$. This also covers finite cardinals; more explicitly $\mu^0=1$, $0^\nu=0$ for positive nu and $1^\nu=1$. [F1, F4, step 1.1, step 3.1]

5.1 Let C be the set of infinite strong-limit cardinals below kappa. It is unbounded: above a given bound start with an infinite cardinal $\theta_0<\kappa$ larger than it, put $\theta_{n+1}=2^{\theta_n}$ and $\delta=\sup_n\theta_n<\kappa$ by regularity. Cantor diagonalization makes the sequence strictly increasing. Its supremum is a cardinal: a bijection of delta with a smaller ordinal would inject a larger theta_n into a smaller cardinal. For every cardinal $\mu<\delta$ some theta_n exceeds mu, hence $2^\mu\le\theta_{n+1}<\delta$. Thus delta is in C. If delta<kappa is a nonzero limit accumulation point of C, it is similarly a cardinal, and for every cardinal mu<delta there is $\rho\in C\cap\delta$ above mu, giving $2^\mu<\rho<\delta$. Thus delta is in C, proving closure. No enumeration choices are needed in this last uniquely defined iteration. [F1, F4, step 4.1] ∎
