---
id: lem-directed-progressive-products-have-club-continuous-chains
kind: lemma
title: Directed progressive products have club continuous chains
status: draft
origin: pipeline
deps: [lem-progressive-products-and-true-cofinality-transfers, lem-club-continuity-produces-strongly-increasing-subsequences, lem-strong-increase-gives-bounding-projections, lem-bounding-projections-give-exact-upper-bounds, def-axiom-of-choice, thm-cofinality-basics, thm-regularity-of-the-alephs, thm-transfinite-recursion, lem-cardinal-arithmetic-basic-laws, cor-cardinal-absorption]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Abraham and Magidor, Cardinal Arithmetic, Theorem 2.21 pp. 23–24; Lemma 2.19 pp. 21–23; Theorem 2.15 pp. 18–20"
      url: https://winterschool.eu/files/3-Cardinal_Arithmetic.pdf
---

## Statement

Assume AC. Let $A$ be a set of infinite regular cardinals, $I$ a proper ideal on $A$, and $\lambda$ an infinite regular cardinal such that $\prod A/I$ is $\lambda$-directed: every family of fewer than $\lambda$ elements has a weak upper bound. For any prescribed $(g_\xi)_{\xi<\lambda}$ in $\prod A$ there is a strictly $<_I$ increasing $(f_\xi)_{\xi<\lambda}$ in $\prod A$ such that $g_\xi(a)<f_{\xi+1}(a)$ for every $a\in A$ and $\xi<\lambda$.

For every uncountable regular $\kappa$ satisfying $\kappa^{++}<\lambda$ and $\{a\in A:a\le\kappa^{++}\}\in I$, this same chain has $(*)_\kappa$. If $A$ is infinite and $|A|<\kappa$, it has the corresponding $\kappa$ bounding-projection property. More generally, whenever its $|A|^+$ projection property holds and $\lambda>|A|^+$, it has a unique exact upper bound modulo $I$, with the coordinate-cofinality bounds of the exact-bound lemma for each additional eligible $\kappa\ge|A|^+$. These latter conclusions apply, in particular, whenever an eligible $\kappa\ge|A|^+$ exists.

## Facts & Assumptions

**Given:** The product, proper ideal, regular $\lambda$, directedness and prescribed family in the statement. Coordinate values in $\prod A$ are strictly below their indexing cardinal.

[F1] Reduced-product comparisons compose, including mixed weak/strict comparisons, and coordinate cofinal enumerations preserve true cofinality ([[lem-progressive-products-and-true-cofinality-transfers]]).

[F2] Club continuity at cofinality $\kappa^{++}<\lambda$ gives $(*)_\kappa$ for an arbitrary proper ideal on an infinite set ([[lem-club-continuity-produces-strongly-increasing-subsequences]]).

[F3] For infinite $A$ and regular $|A|<\kappa\le\lambda$, $(*)_\kappa$ implies the $\kappa$ bounding-projection property ([[lem-strong-increase-gives-bounding-projections]]).

[F4] For infinite $A$, regular $\lambda>|A|^+$ and the $|A|^+$ projection property give a unique exact bound; additional regular $\kappa\ge|A|^+$ projection properties give $\{a:\operatorname{cf}(h(a))<\kappa\}\in I$ ([[lem-bounding-projections-give-exact-upper-bounds]]).

[F5] A subset of a limit ordinal smaller than its cofinality is bounded, and a cofinal subset of size its cofinality exists ([[thm-cofinality-basics]], (c)–(d)).

[F6] A specified transfinite rule recurses on a well-order ([[thm-transfinite-recursion]]).

[F7] Under AC $|A|^+$ is regular ([[thm-regularity-of-the-alephs]], (b)).

[A1] AC fixes choices from nonempty witness sets ([[def-axiom-of-choice]]).

## Proof

1.1 Properness implies $A\ne\varnothing$, and the product is nonempty because it contains the zero function. Every $a\in A$ is a limit ordinal, so $v(a)+1<a$ for $v\in\prod A$. If $v$ weakly bounds a family, $v+1$ strictly bounds it, by the coordinate inequality and F1. AC fixes a choice function on the nonempty subsets of the set $\prod A$, hence specifies one bound whenever directedness supplies a nonempty bound set. For every nonzero limit $\delta<\lambda$ also fix a club $E_\delta\subseteq\delta$ of order type $\operatorname{cf}(\delta)$: continuously enumerate a cofinal subset from F5, keeping successor values increasing and taking suprema at limits, as authorized by F6. Intermediate suprema stay below $\delta$ by F5; its continuous range is the required club. AC selects the initial cofinal enumerations simultaneously. [F1, F5, F6, A1]

2.1 Define $f$ by recursion. Set $f_0=0$. At every $0<\delta<\lambda$, the earlier family has size at most $|\delta|<\lambda$; directedness and step 1.1 provide a specified weak bound $b_\delta\in\prod A$. At a successor $\delta=\xi+1$ set $f_\delta(a)=\max\{b_\delta(a),f_\xi(a),g_\xi(a)\}+1$. At a limit whose cofinality is $\kappa^{++}$ for an eligible uncountable regular $\kappa$, set

$$v_\delta(a)=\begin{cases}\sup_{\xi\in E_\delta}f_\xi(a)&a>\kappa^{++},\\0&a\le\kappa^{++},\end{cases}\qquad f_\delta(a)=\max\{b_\delta(a),v_\delta(a)\}+1.$$

At other nonzero limits put $f_\delta=b_\delta+1$. The special rule is unambiguous because distinct cardinals have distinct double successors. For its large coordinates $|E_\delta|=\kappa^{++}<a=\operatorname{cf}(a)$, so F5 gives $v_\delta(a)<a$. The other coordinates have value zero. Thus each rule gives a member of $\prod A$, and the choices in step 1.1 make it a specified F6 recursion. [step 1.1, F5, F6]

3.1 For every $\xi<\delta<\lambda$, $f_\xi\le_Ib_\delta<_If_\delta$; hence F1 gives $f_\xi<_If_\delta$. At successors the explicit maximum gives $g_\xi(a)<f_{\xi+1}(a)$ at every coordinate, not just modulo $I$. Fix any eligible $\kappa$. At every $\delta<\lambda$ of cofinality $\kappa^{++}$ the special rule was used, and $\sup_{\xi\in E_\delta}f_\xi(a)=v_\delta(a)<f_\delta(a)$ for all $a>\kappa^{++}$. The possible failures lie in the assumed $I$-small set of remaining coordinates. This proves precisely the club-continuity premise, with the bound index equal to $\delta$. If $A$ is infinite, F2 gives $(*)_\kappa$. If $A$ is finite, let $S$ be the union of all sets in $I$; this finite union belongs to $I$, and $S\ne A$. Every strict comparison holds at every $a\notin S$. Thus the entire chain is strongly increasing with the constant witness $S$, and every unbounded subset of regular $\lambda$ has an order-type-$\kappa$ subset by choosing successive least larger indices, using F5–F6 at limits. Hence $(*)_\kappa$ also holds in the finite case. [step 1.1, step 2.1, F1, F2, F5, F6]

4.1 Suppose $A$ is infinite and put $\tau=|A|$. For each eligible $\kappa>\tau$, step 3.1 and F3 give the $\kappa$ projection property. If the $\tau^+$ projection property holds and $\lambda>\tau^+$, F4 gives the stated exact bound and all its coordinate-cofinality conclusions. In particular, if an eligible $\kappa\ge\tau^+$ exists, restrict each strong order-type-$\kappa$ subsequence supplied in step 3.1 to its first $\tau^+$ terms. This proves $(*)_{\tau^+}$; $\tau^+$ is regular by F7, so F3 gives its projection property. Also $\tau^+\le\kappa<\kappa^{++}<\lambda$. Thus every hypothesis of F4 holds. The strict chain and prescribed domination were already proved in step 3.1, with no eligible $\kappa$ needed for that construction. QED. [step 3.1, F3, F4, F7]
