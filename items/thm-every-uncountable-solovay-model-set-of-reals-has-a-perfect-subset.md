---
id: thm-every-uncountable-solovay-model-set-of-reals-has-a-perfect-subset
kind: theorem
title: Every uncountable Solovay-model set of reals has a perfect subset
status: draft
origin: pipeline
deps: [thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability, lem-solovay-collapse-localizes-countable-ordinal-data, def-solovay-levy-collapse-setup, def-forcing-name-valuation-and-generic-extension, lem-solovay-absorption-factorization-and-homogeneity, lem-solovay-inner-model-is-closed-under-ambient-omega-sequences, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, lem-solovay-borel-code-and-regularity-absoluteness, lem-solovay-perfect-tree-of-mutually-generic-name-interpretations]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: perfect-set-construction
sources: {references: [{title: "Solovay 1970, Part III, Lemmas 1.6 and 2.11", url: "https://people.math.ethz.ch/~fdalio/ZKmodel.pdf"}]}
---

## Statement

In $M$, every uncountable subset of $\mathbb R$ contains a nonempty perfect subset.

## Facts & Assumptions

**Given:** Uncountable $A\subseteq\mathbb R$ in $M$.

[F1] [[thm-solovay-inner-model-satisfies-zf-and-real-ordinal-definability]]: gives a definition of $A$ from one real and finitely many ordinals.

[F2] [[lem-solovay-collapse-localizes-countable-ordinal-data]], [[def-solovay-levy-collapse-setup]], and [[def-forcing-name-valuation-and-generic-extension]]: reals localize to bounded collapse stages; the initial stages factor by disjoint coordinates; and an element of a generic extension is the valuation of a ground-model name.

[F3] [[lem-solovay-inner-model-is-closed-under-ambient-omega-sequences]]: an ambient enumeration with values in $M$ belongs to $M$.

[F4] [[thm-forcing-theorem]], [[lem-forcing-monotonicity-density-and-decision]], and [[lem-solovay-absorption-factorization-and-homogeneity]]: the forcing relation is definable, a supplied generic meets each ground dense set, and a true localized membership assertion is forced below a condition and is fixed by the homogeneous tail.

[F5] [[lem-solovay-perfect-tree-of-mutually-generic-name-interpretations]]: a condition forcing a new real in $A$ yields a perfect image.

[F6] [[lem-solovay-borel-code-and-regularity-absoluteness]]: the coded perfect image transfers to $M$.

## Proof

1.1 Use F2 to choose $\xi<\kappa$ such that $N=V[G_\xi]$ contains F1's real parameter; keep the finite ordinal parameters explicit. Fix an ambient enumeration $e:\omega\twoheadrightarrow\mathbb R^N$. If $A\subseteq N$, choose one $a_0\in A$ (available because $A$ is uncountable) and define $e_A(n)=e(n)$ when $e(n)\in A$, and $e_A(n)=a_0$ otherwise. This is an ambient omega-surjection onto $A$ with values in $M$, so F3 puts it in $M$, contradicting internal uncountability. Hence some $x\in A\setminus N$ exists. [F1, F2, F3]

1.2 Use F2 again to choose $\eta$ with $\xi<\eta<\kappa$ and $x\in V[G_\eta]$. Let $Q$ be the finite-condition collapse on $[\xi,\eta)\times\omega$ and $H=G_\eta\restriction([\xi,\eta)\times\omega)$. The disjoint-coordinate projection in F2 gives $V[G_\eta]=N[H]$, with $Q\in N$ and $Q$ small. By the defining valuation formula for $N[H]$ in F2, choose a $Q$-name $\dot\tau\in N$ with $\dot\tau_H=x$.

2.1 In $N$ form the downward-open set $D=\{q\in Q:(\exists y\in\mathbb R^N)\ q\Vdash_Q\dot\tau=\check y\}$. The actual generic $H$ misses $D$, since the truth lemma would otherwise put $x=\dot\tau_H$ in $N$.  The set $D\cup\{q:q\perp D\}$ is dense and belongs to $N$, so genericity gives $p_0\in H$ incompatible with every member of $D$.  Hence no extension of $p_0$ forces $\dot\tau$ equal to a real of $N$.  Separately, the truth lemma and tail homogeneity give $p_1\in H$ forcing the fixed real-membership formula defining $A$ (with its localized real and ordinal parameters).  Directedness of $H$ gives $p\in H$ below $p_0,p_1$.  This $p$ has the exact forcing-newness premise of F5 and forces every branch interpretation to satisfy the definition of $A$; no external class formula “$\dot\tau\notin N$” has been used in the forcing language. [F1, F2, F4, step 1.1, step 1.2]

3.1 Apply F5 below $p$. Every branch interpretation satisfies the same definition, so its compact injective image $P$ lies in $A$. The construction has a real code; since $M$ has all reals, that code lies in $M$, and F6 says internally that $P$ is nonempty perfect. [F5, F6, step 2.1] ∎
