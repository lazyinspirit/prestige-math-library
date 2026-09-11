---
id: "thm-lc-los-for-set-ultraproducts"
kind: "theorem"
title: "Los theorem for set ultraproducts"
deps: ["lem-lc-ultraproduct-quotient-well-defined", "thm-set-structure-satisfaction-recursion", "thm-ultrafilter-characterisation", "def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Theorem 13.2 pp.56–57
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZFC, for every first-order formula phi and product representatives $f_1,\ldots,f_n$,

$$\prod_i\mathcal M_i/U\models\phi([f_1],\ldots,[f_n])\quad\Longleftrightarrow\quad\{i:\mathcal M_i\models\phi(f_1(i),\ldots,f_n(i))\}\in U.$$

In particular the diagonal map into an ultrapower of a nonempty set structure is elementary.

## Facts & Assumptions

**Given:** ZFC. Term induction gives atomic compatibility, ultrafilter operations handle Booleans, and both existential directions are proved with AC spent on coordinate witnesses/defaults; constant truth sets prove elementarity.

[F1] [[lem-lc-ultraproduct-quotient-well-defined]]: The quotient symbols are independent of representatives and coordinatewise.

[F2] [[thm-set-structure-satisfaction-recursion]]: First-order satisfaction follows its atomic, Boolean and existential clauses.

[F3] [[thm-ultrafilter-characterisation]]: Complement decisions and finite intersections match Boolean truth operations.

[F4] [[def-axiom-of-choice]]: AC selects coordinate witnesses and default elements from the nonempty carriers.

## Proof

1.1 Induction on terms shows the value of a term on classes [f_j] is represented by its coordinate values. Constants and variables give the base cases and function symbols give the induction step by F1. Thus equality and relation atoms satisfy the asserted equivalence. Negation uses the complementary truth set and F3; conjunction uses intersection, which is in U exactly when both factors are (finite closure and upward closure). [F1, F2, F3]

2.1 At an existential formula, a witness [g] in the quotient gives, by the induction hypothesis on its matrix, a U-large set of coordinates where g(i) witnesses that matrix. The coordinate existential truth set contains it, hence is in U. Conversely suppose that truth set E is in U. For each i in E, choose a matrix witness in M_i; outside E choose a default element of M_i. These choices are from a set family of nonempty subsets of the supplied carriers, so F4 applies and gives a product function g. Its matrix truth set contains E, and induction makes [g] a quotient witness. This proves both existential directions and completes formula induction. [F2, F3, F4, step 1.1]

3.1 In a constant family with constant parameter functions, each coordinate has the same formula truth value. Its truth set is I when the original structure satisfies the formula, and empty otherwise. Properness and step 2.1 show precisely that the diagonal map preserves and reflects each formula; F1 already gives injectivity. [F1, F3, step 2.1] ∎
