---
id: ex-specialization-generic-kills-a-tree
kind: example
title: "A specialization generic kills a tree"
status: published
origin: pipeline
deps: [thm-specializing-forcing-kills-a-suslin-tree, def-finite-aronszajn-specialization-poset, lem-specialization-dense-domains-and-union, def-aronszajn-suslin-and-special-tree, thm-countable-union-of-countable, thm-countable-subsets-of-omega-one-are-bounded, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorem 16.38 and complete proof, printed p. 332"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $M$ be a transitive model of ZFC, let $T\in M$ be a Suslin tree there, and
let $G$ be an $M$-generic filter on its finite-specialization forcing $P(T)$,
when such a filter is supplied externally. For

$$D_t=\{p\in P(T):t\in\operatorname{dom}(p)\},\qquad f=\bigcup G,$$

every $D_t$ is dense, $f:T\to\omega$ is total and separates comparable nodes,
and

$$T=\bigcup_{n<\omega}A_n,\qquad A_n=f^{-1}(\{n\}),$$

where every $A_n$ is an antichain and at least one $A_n$ is uncountable. Thus
the unchanged ground tree is special and not Suslin in $M[G]$.

## Facts & Assumptions

**Given:** $M,T,P(T),G$ as in the Statement. AC holds in $M$ and in $M[G]$.

[F1] Finite-specialization forcing of the ground Suslin tree is ccc, preserves
all ground cardinals and cofinalities, and internally forces the ground tree to
be special and non-Suslin. [[thm-specializing-forcing-kills-a-suslin-tree]]

[F2] Its conditions are finite natural-valued maps that give unequal labels to
distinct comparable nodes; stronger conditions extend graphs and the empty
function is greatest. [[def-finite-aronszajn-specialization-poset]]

[F3] Each $D_t$ is dense, and the union of a nonempty directed family meeting
all $D_t$ is a total specializing map. [[lem-specialization-dense-domains-and-union]]

[F4] A Suslin tree has height $\omega_1$ and countable levels, and a total map
separating comparable nodes witnesses specialness.
[[def-aronszajn-suslin-and-special-tree]]

[F5] Under countable choice, a countable union of countable sets is countable.
[[thm-countable-union-of-countable]]

[F6] Under countable choice, no at most countable subset of $\omega_1$ is
cofinal in $\omega_1$. [[thm-countable-subsets-of-omega-one-are-bounded]]

[A1] AC is available in the ground and is inherited by the supplied ZFC
generic extension. [[def-axiom-of-choice]]

## Verification

1.1 Fix $t\in T$ and $p\in P(T)$. If $t\in\operatorname{dom}(p)$, take $q=p$. Otherwise put $$N=\begin{cases}0,&\operatorname{ran}(p)=\varnothing,\\1+\max\operatorname{ran}(p),&\operatorname{ran}(p)\ne\varnothing,\end{cases}\qquad q=p\cup\{(t,N)\}.$$ The finite range has a maximum in the second case, and $N$ differs from every old label. Therefore every new comparable pair involving $t$ has unequal labels, while old pairs still satisfy [F2]. Thus $q\in P(T)$, $q\leq p$, and $q\in D_t$. This calculates the density of every domain requirement, including the empty-condition case where the added label is $0$. [F2, F3, given, construct]

2.1 Since $G$ is a nonempty directed generic filter, it meets every ground dense set $D_t$. If $(t,i),(t,j)\in\bigcup G$, directedness gives a common stronger condition containing both pairs, so [F2] gives $i=j$. Hence $f=\bigcup G$ is a function. Meeting $D_t$ for each $t$ makes its domain all of $T$. If $s<_Tt$, choose conditions in $G$ containing $s$ and $t$ and a common stronger condition; [F2] gives $f(s)\ne f(t)$. This is the total specializing map promised by [F3]. [F2, F3, step 1.1]

3.1 For each $n<\omega$, define $A_n=f^{-1}(\{n\})$. If $s,t\in A_n$ are distinct, then $f(s)=f(t)=n$, so step 2.1 says they cannot be comparable; hence $A_n$ is an antichain. Totality gives $T=\bigcup_{n<\omega}A_n$. The fiber $A_0$ is included but may be empty, and no argument singles out a predetermined uncountable fiber. [F4, step 2.1]

4.1 Suppose for contradiction that every $A_n$ were countable in $M[G]$. Then [F5] would make $T$ countable. The height map sends its nodes onto a cofinal subset of the preserved $\omega_1^M$: [F1] preserves $\omega_1$, and the old tree still has a node at every countable height by [F4]. The image of a countable set is countable, contradicting [F6]. Thus some, but not necessarily the zero, fiber $A_n$ is uncountable. [F1, F4, F5, F6, A1, step 3.1]

5.1 By step 2.1, the restriction of $f$ to any branch is injective into $\omega$. A cofinal branch would therefore have a countable cofinal set of node heights in the preserved $\omega_1$, contrary to [F6]. Hence $T$ remains Aronszajn. Step 3.1 witnesses that it is special, while step 4.1 supplies an actual uncountable antichain, so it is not Suslin. “Kills” refers only to the Suslin property: the tree set, order, height, and countable old levels remain. [F1, F4, F6, step 2.1, step 3.1, step 4.1]

6.1 The calculation was made in a supplied generic extension only to display the objects. By [F1], its dense-set, directed-union, preservation and ZFC arguments are already encoded by the internal forcing relation below the greatest empty condition. No $M$-generic over the universe is asserted to exist. The empty function, singleton extensions, label zero, possibly empty fibers, and absence of a top level at the limit height $\omega_1$ create no exception. The density and union calculations in steps 1.1-3.1 are choice-free; AC is used through preservation and the countable-union and boundedness conclusions in steps 4.1-5.1. [F1, F2, F5, F6, A1, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1] ∎

## Remarks

- Preservation of $\omega_1$ alone does not identify an uncountable fiber.
  The countable-union theorem and the cofinal height map supply the required
  contradiction.
- A total natural-valued specialization cannot create a cofinal branch: its
  restriction to such a branch would inject a cofinal height set into
  $\omega$.
