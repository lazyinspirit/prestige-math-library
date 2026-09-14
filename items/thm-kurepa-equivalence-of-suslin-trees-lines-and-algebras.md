---
id: thm-kurepa-equivalence-of-suslin-trees-lines-and-algebras
kind: theorem
title: "Kurepa equivalence"
status: published
origin: pipeline
deps: [def-suslin-hypothesis-and-suslin-algebra, lem-suslin-tree-normal-splitting-refinement, thm-suslin-tree-implies-suslin-line, thm-suslin-line-implies-suslin-tree, thm-suslin-tree-regular-open-algebra-is-suslin, lem-suslin-algebra-refining-antichain-tree, def-axiom-of-choice]
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
    - title: "Monk, Set theory following Jech, Theorems 9.13-9.18 and Lemma 15.45, printed pp. 68-75 and 278"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
    - title: "Jech, Set Theory, Definition 30.19 and the Suslin tree/algebra equivalence, printed p. 594"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/30-complete_Boolean_algebras.pdf
justified_by: []
forward_refs: []
---

## Statement

In ZFC the following are equivalent:

1. a Suslin tree exists;
2. a Suslin line exists;
3. a Suslin algebra exists.

Consequently the Suslin Hypothesis is equivalent both to the nonexistence of a Suslin tree and to the nonexistence of a Suslin algebra.

## Facts & Assumptions

**Given:** ZFC, including AC.

[F1] SH says that no Suslin line exists, and the Suslin-line and Suslin-algebra conventions are fixed. [[def-suslin-hypothesis-and-suslin-algebra]]

[F2] A Suslin tree yields a Suslin line. [[thm-suslin-tree-implies-suslin-line]]

[F3] A Suslin line yields a Suslin tree. [[thm-suslin-line-implies-suslin-tree]]

[F4] Every Suslin tree has a normal splitting Suslin refinement. [[lem-suslin-tree-normal-splitting-refinement]]

[F5] The regular-open completion of the reverse order of a normal splitting Suslin tree is a Suslin algebra. [[thm-suslin-tree-regular-open-algebra-is-suslin]]

[F6] Every Suslin algebra yields a normal splitting Suslin tree. [[lem-suslin-algebra-refining-antichain-tree]]

[A1] AC is available and its use in all four constructions is propagated. [[def-axiom-of-choice]]

## Proof

1.1 Write $\mathsf{ST}$, $\mathsf{SL}$, and $\mathsf{SA}$ for the respective existence assertions in clauses 1-3. These are genuine existence statements under the fixed nonempty, nontrivial conventions in F1 and the cited tree interfaces. [F1, construct]

2.1 If $\mathsf{ST}$ holds, F2 constructs a Suslin line, so $\mathsf{ST}\Rightarrow\mathsf{SL}$. Conversely, if $\mathsf{SL}$ holds, F3 constructs a Suslin tree, so $\mathsf{SL}\Rightarrow\mathsf{ST}$. Hence $\mathsf{ST}\Longleftrightarrow\mathsf{SL}$. [F2, F3, A1, step 1.1]

2.2 If $\mathsf{ST}$ holds, first apply F4 to obtain a normal splitting Suslin tree, then apply F5 to its reverse-order regular-open completion. The output is a Suslin algebra, so $\mathsf{ST}\Rightarrow\mathsf{SA}$. [F4, F5, A1, step 1.1]

3.1 Conversely, F6 sends any Suslin algebra to a normal splitting Suslin tree, so $\mathsf{SA}\Rightarrow\mathsf{ST}$. Together with step 2.2 this gives $\mathsf{ST}\Longleftrightarrow\mathsf{SA}$. [F6, A1, step 1.1, step 2.2]

4.1 Steps 2.1, 2.2, and 3.1 prove the three-way equivalence. By F1, SH is $\neg\mathsf{SL}$; negating either proved biconditional gives $\neg\mathsf{SL}\Longleftrightarrow\neg\mathsf{ST}\Longleftrightarrow\neg\mathsf{SA}$. Thus SH is equivalent to either stated nonexistence assertion. This proof uses only the five fully authored construction suppliers and not the earlier Recorded Kurepa remark. [F1, step 2.1, step 2.2, step 3.1] ∎
