---
id: ex-nested-interval-tree-from-a-suslin-line
kind: example
title: "First stages of the nested-interval tree"
status: published
origin: pipeline
deps: [lem-nowhere-separable-suslin-line-nested-interval-tree, def-axiom-of-choice]
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
    - title: "Monk, Set theory following Jech, Theorem 9.18 and complete proof, printed pp. 74-75"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $L$ be the dense, endpoint-free, nowhere-separable ccc order used in the
line-to-tree construction. The first three recursion stages may be chosen so
that, for $I_i=[a_i,b_i]$,

$$a_0<a_2<b_2<a_1<b_1<b_0.$$

Thus $I_1$ and $I_2$ are both nested strictly inside $I_0$, while $I_1$ and
$I_2$ are disjoint. More generally, at every stage each new closed interval is
strictly nested in or disjoint from every earlier one.

## Facts & Assumptions

**Given:** the order $L$ above and the nested-interval recursion. Work in ZFC.

[F1] The completed line-to-tree supplier recursively chooses closed intervals in the stated dense, endpoint-free, nowhere-separable ccc order and orders them by reverse nesting. [[lem-nowhere-separable-suslin-line-nested-interval-tree]]

[A1] AC supplies the simultaneous witness choices through all $\omega_1$ stages of the full recursion. [[def-axiom-of-choice]]

## Verification

1.1 At stage $0$ there are no earlier endpoints. Choose $$c_0<a_0<b_0<d_0.$$ The interval $I_0=[a_0,b_0]$ is nonempty and nondegenerate. The empty set of old endpoints creates no avoidance condition. [F1, given, choose]

1.2 Fix any later stage $\alpha$. The set $E_\alpha=\{a_\xi,b_\xi:\xi<\alpha\}$ is countable because $\alpha<\omega_1$. It cannot be dense in $L$: if it were, then for any $u<v$ the countable set $E_\alpha\cap(u,v)$ would be dense in the nonempty open interval $(u,v)$, contrary to nowhere-separability. Hence some nonempty open gap $(c,d)$ misses $E_\alpha$, and density lets the recursion choose $c<a_\alpha<b_\alpha<d$. Now fix $\xi<\alpha$ and write $I_\xi=[a_\xi,b_\xi]$. There are exactly three relative positions. If $(c,d)$ meets $(a_\xi,b_\xi)$, order-convexity and endpoint avoidance force $(c,d)\subset(a_\xi,b_\xi)$, hence $I_\alpha\subset(a_\xi,b_\xi)$. If it lies to the left, then $b_\alpha<a_\xi$; if it lies to the right, then $b_\xi<a_\alpha$. In the last two cases the two closed intervals, and therefore their open interiors, are disjoint. Equality at a boundary cannot occur because $I_\alpha$ lies strictly inside $(c,d)$. [F1, given, construct]

2.1 At stage $1$, use the nonempty open interval $(a_0,b_0)$, which contains neither of its endpoint witnesses. Density gives $$a_0<c_1<a_1<b_1<d_1<b_0.$$ Hence $I_1\subset(a_0,b_0)$, so index $0$ is a predecessor of index $1$ in the reverse-nesting tree. [F1, step 1.1, choose]

3.1 At stage $2$, the interval $(a_0,a_1)$ is nonempty and avoids all four earlier endpoints $a_0,b_0,a_1,b_1$. Choose $$a_0<c_2<a_2<b_2<d_2<a_1<b_1<b_0.$$ It follows that $I_2\subset(a_0,b_0)$ but $I_2\cap I_1=\varnothing$. Thus $0$ is a predecessor of $2$, whereas $1$ and $2$ are incomparable. This is the displayed three-stage configuration. [F1, step 1.1, step 2.1, choose]

4.1 Apply step 1.2 to every earlier index. If two earlier indices $\xi,\eta$ both contain a later $I_\alpha$, their own intervals intersect, so the disjoint alternative is impossible and one is nested inside the other according to index order. Therefore predecessor sets are linearly ordered. Conversely, incomparable indices must fall into the disjoint alternative; this is exactly what happens to indices $1$ and $2$ in step 3.1. [F1, step 3.1, step 1.2]

5.1 Stages zero, one, and two respectively treat the empty old-endpoint set, a single old interval, and two earlier intervals. Every chosen interval has two strictly ordered endpoints; no empty or singleton interval is admitted. The finite trace uses only finitely many existential witnesses, while [A1] is retained for the simultaneous $\omega_1$-stage recursion in the supplier. The construction uses order endpoints only as avoided boundary points and assumes that the ambient line itself has no first or last element. [A1, step 1.1, step 2.1, step 3.1, step 1.2] ∎

## Remarks

- The indices $1$ and $2$ are siblings above $0$ only in the order-theoretic sense: the construction does not assert that every node has immediate successors at the next ordinal stage.
- The calculation uses symbolic points of the supplied Suslin-line reduction; replacing $L$ by the real line would destroy the nowhere-separable hypothesis needed for the full $\omega_1$ recursion.
