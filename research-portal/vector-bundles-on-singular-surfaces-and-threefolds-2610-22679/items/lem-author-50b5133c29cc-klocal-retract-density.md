---
id: lem-author-50b5133c29cc-klocal-retract-density
kind: lemma
title: Every open perfect complex is a retract of a restriction
status: draft
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - thm-author-50b5133c29cc-klocal-tt-extension-input
  - lem-author-50b5133c29cc-klocal-quotient-full-faithfulness
  - def-scheme-perfect-complexes
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  thm-author-50b5133c29cc-klocal-tt-extension-input: mathematical-premise
  lem-author-50b5133c29cc-klocal-quotient-full-faithfulness: mathematical-premise
  def-scheme-perfect-complexes: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 12
---

## Statement
Assume the Axiom of Choice and fix the suitable universes of the supplied derived and K-theory constructions. Let $X$ be qcqs and $U\subseteq X$ quasi-compact open with complement $T$. Every perfect object on $U$ is a direct summand of the restriction of a perfect object on $X$. Consequently the functor
$$h\mathrm{Perf}(X)/h\mathrm{Perf}_T(X)\longrightarrow h\mathrm{Perf}(U)$$
is an equivalence after idempotent completion.

## Facts & Assumptions
**Given:** A perfect object $F$ on $U$. Assume the Axiom of Choice and use the universes fixed in the Statement.

**Goal:** Prove density up to retracts with no assertion that $F$ itself extends.

[A1] Choice is inherited when invoking the full-faithfulness and idempotent-completeness interfaces in [F2]. [[math:def-axiom-of-choice]]

[F1] [[thm-author-50b5133c29cc-klocal-tt-extension-input]] gives the classical Euler extension criterion and $[F[1]]=-[F]$.

[F2] [[lem-author-50b5133c29cc-klocal-quotient-full-faithfulness]] gives full faithfulness of the actual quotient functor. [[def-scheme-perfect-complexes]] gives idempotent completeness of the target and its homotopy category.

## Proof
1.1 In the source-side Euler group of [F1], $[F\oplus F[1]]=0$. The zero class belongs to the image of restriction from $X$, so [F1] gives perfect $E$ on $X$ with $j^*E\simeq F\oplus F[1]$ in the ordinary derived category. The canonical inclusion and projection exhibit $F$ as a summand of $j^*E$. No equality with the currently defined $K_0$ is used. [F1, given]

2.1 A fully faithful functor extends fully faithfully to idempotent completions: on a retract of $A$ determined by an idempotent $e$, and a retract of $B$ determined by $f$, its Hom group is the subgroup of maps $u:A\to B$ satisfying $u=fue$, which full faithfulness identifies. By step 1.1 every target object is a retract of an image object, so the extension is essentially surjective. The target is already idempotent complete by [F2]. This proves the stated equivalence after idempotent completion. [A1, F2, step 1.1] ∎
