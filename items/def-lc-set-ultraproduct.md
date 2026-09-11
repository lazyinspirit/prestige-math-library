---
id: "def-lc-set-ultraproduct"
kind: "definition"
title: "Set ultraproducts and constant-map ultrapowers"
deps: ["def-set-structures-and-variable-assignments", "def-ultrafilter", "def-axiom-of-choice"]
justified_by: ["lem-lc-ultraproduct-quotient-well-defined"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Marks Definition 13.1 p.56 and Definition 13.4 p.57
      url: https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Work in ZFC. Let $(\mathcal M_i)_{i\in I}$ be a set family of nonempty structures in one set signature with finite-arity symbols, as in [[def-set-structures-and-variable-assignments]], and U a proper [[def-ultrafilter]] on nonempty I. [[def-axiom-of-choice]] supplies an element of the product of carriers. For product functions f,g put

$$f\sim_U g\quad\Longleftrightarrow\quad\{i:f(i)=g(i)\}\in U.$$

The **ultraproduct** has carrier $(\prod_i M_i)/\sim_U$. Interpret a constant c by the class of $i\mapsto c^{\mathcal M_i}$, a function symbol F by $([f_1],\ldots,[f_n])\mapsto[i\mapsto F^{\mathcal M_i}(f_1(i),\ldots,f_n(i))]$, and a relation R by

$$R([f_1],\ldots,[f_n])\quad\Longleftrightarrow\quad\{i:\mathcal M_i\models R(f_1(i),\ldots,f_n(i))\}\in U.$$

For zero-arity symbols the tuple is empty. The immediately following quotient lemma verifies equivalence, representative independence and the nonempty carrier. For a constant family write $\operatorname{Ult}(\mathcal M,U)$, and let $c_a(i)=a$; its diagonal map is $a\mapsto[c_a]$. Elementarity is the subsequent Los theorem, not part of this definition.
