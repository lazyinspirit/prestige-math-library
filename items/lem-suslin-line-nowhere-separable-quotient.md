---
id: lem-suslin-line-nowhere-separable-quotient
kind: lemma
title: "Nowhere-separable quotient of a Suslin line"
status: draft
origin: pipeline
deps: [def-suslin-line-order-interface, lem-linear-order-completion-existence-uniqueness-and-density, thm-countable-union-of-countable, def-axiom-of-choice, thm-zorn]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Monk, Set theory following Jech, Theorem 9.17 and complete proof, printed pp. 72-74"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $S$ be a Suslin line. Declare $x\sim y$ when the closed interval with endpoints $x,y$ is separable in its order topology. Then $\sim$ is a convex equivalence relation, every equivalence class is separable, and the ordered quotient is dense, ccc, and has no separable nonempty open interval. After deleting possible quotient endpoints, taking its exact completion, and deleting the possible completion endpoints, one obtains a dense, Dedekind-complete, no-endpoint ccc line in which no nonempty open interval is separable.

## Facts & Assumptions

**Given:** A Suslin line $S$. Assume AC.

[F1] The published Suslin-line convention gives a nonempty dense no-endpoint linear order with the interval ccc and no countable order-dense subset. [[def-suslin-line-order-interface]]

[F2] An endpointless dense ccc order with no separable nonempty interval has an exact completion whose endpoint-deleted core retains ccc and nowhere separability and is boundedly complete. [[lem-linear-order-completion-existence-uniqueness-and-density]]

[F3] Under countable choice, a countable union of countable sets is countable. [[thm-countable-union-of-countable]]

[F4] Under AC, a nonempty poset in which every chain has an upper bound has a maximal element. [[thm-zorn]]

[A1] AC supplies the maximal disjoint families and the simultaneous dense-set and representative choices below. [[def-axiom-of-choice]]

## Proof

1.1 Reflexivity and symmetry of $\sim$ are immediate. For transitivity, the closed interval between $x$ and $z$ is contained in the union of the closed intervals between $x,y$ and $y,z$, regardless of their order; dense sets for those two intervals, together with their finitely many endpoints, restrict to a countable dense set in the first interval. F3 therefore proves transitivity. If $x<z<y$ and $x\sim y$, a dense set for $[x,y]$, restricted to $[x,z]$ and augmented by $x,z$, makes $[x,z]$ separable; hence $x\sim z$. Thus every equivalence class is convex. [F1, F3, A1, given]

2.1 Fix an equivalence class $K$. If $K$ has at most two points it is separable. Otherwise let $\mathbb P_K$ be the inclusion poset of pairwise disjoint nonempty intervals $(a,b)$ with $a,b\in K$. It is nonempty, and the union of a chain in $\mathbb P_K$ is again such a disjoint family, so F4 gives a maximal family $\mathcal M$. The intervals in $\mathcal M$ are pairwise disjoint open intervals of $S$, hence F1 makes $\mathcal M$ countable. For each $(a_n,b_n)\in\mathcal M$, the definition of $\sim$ makes $[a_n,b_n]$ separable; choose a countable dense $D_n$ there. Then $D=\bigcup_nD_n$, augmented by the first and last points of $K$ when they exist, is countable by F3. If $c<d$ in $K$ and $(c,d)$ is nonempty, maximality makes $(c,d)$ meet some $(a_n,b_n)$, and $D_n$ meets that open intersection. Endpoint rays meet $D$ by the same argument unless they end at an included endpoint. Hence $D$ is dense in $K$, so every class is separable. [F1, F3, F4, A1, step 1.1]

3.1 Let $Q=S/{\sim}$ and order its classes by $I<J$ when one, equivalently every, member of $I$ is below one, equivalently every, member of $J$. Convexity makes this well defined and gives a linear order. If $I<J$ had no class strictly between them, then for $a\in I$ and $b\in J$ the interval $[a,b]$ would lie in $I\cup J$; step 2.1 and F3 would make it separable, forcing $a\sim b$, a contradiction. Thus $Q$ is dense. [F1, F3, A1, step 1.1, step 2.1]

4.1 Fix $I<J$ in $Q$ and suppose the nonempty quotient interval $(I,J)$ had a countable dense set $\mathcal A$. Let $\mathcal B$ be the classes $K$ strictly between $I,J$ having more than two points. For each $K\in\mathcal B$, convexity supplies a nonempty open interval of $S$ contained in $K$; these intervals are pairwise disjoint, so F1 and A1 make $\mathcal B$ countable. Put $\mathcal C=\mathcal A\cup\mathcal B\cup\{I,J\}$. By step 2.1 choose a countable dense set $D_K\subseteq K$ for every $K\in\mathcal C$, and let $E=\bigcup_{K\in\mathcal C}D_K$, countable by F3. Choose $a\in I$ and $b\in J$. If $a\le c<d\le b$ and $(c,d)$ is nonempty, then either $c,d$ lie in the same endpoint class, in the same member of $\mathcal B$, or in distinct classes; in the last case quotient density and density of $\mathcal A$ put a class of $\mathcal A$ strictly between them. In every case $E\cap(c,d)$ is nonempty. Thus $E\cap(a,b)$ together with $a,b$ is countable and dense in $[a,b]$, so $a\sim b$, contradicting $I<J$. No nonempty quotient interval is separable. [F1, F3, A1, step 2.1, step 3.1]

4.2 Suppose $Q$ had an uncountable pairwise disjoint family of nonempty open intervals $(I_\xi,J_\xi)$. Choose one representative $s_K\in K$ for every endpoint class $K$ that occurs. By density of $Q$, $(s_{I_\xi},s_{J_\xi})$ is a nonempty open interval of $S$. The resulting original intervals are pairwise disjoint because the quotient intervals are, contradicting the ccc of $S$. Hence $Q$ is ccc. [F1, A1, step 3.1]

5.1 The quotient $Q$ is not a singleton, since otherwise step 2.1 would make all of $S$ separable, contrary to F1. Nor can $Q$ have exactly two classes: then $S=I\cup J$ is the union of the two separable classes, and countable dense subsets $D_I\subseteq I$ and $D_J\subseteq J$ meet every nonempty open interval of $S$, because such an interval is infinite, lies in $I\cup J$, and therefore has one part that is infinite, hence contains a nonempty interval of that dense class. That would make $S$ separable, again contradicting F1. So $Q$ has at least three classes, and since $Q$ is dense, deleting its possible first and last classes leaves a nonempty dense no-endpoint order $Q^\circ$; steps 4.1-4.2 persist under this deletion. Apply F2 to $Q^\circ$, take its exact completion, and delete the possible completion endpoints. The resulting order is nonempty, dense, has no endpoints, is boundedly complete, is ccc, and has no separable nonempty open interval. This is the asserted nowhere-separable complete line. The only choice costs are F4 and the simultaneous selections explicitly charged to A1; no ZF claim is made. [F1, F2, F4, A1, step 2.1, step 3.1, step 4.1, step 4.2] ∎
