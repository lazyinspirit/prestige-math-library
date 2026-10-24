---
id: "def-lc-infinitary-syntax-and-compactness"
kind: "definition"
title: "Infinitary syntax and compactness conventions"
deps: ["def-set-structures-and-variable-assignments", "thm-recursion-on-well-founded-setlike-relations", "def-cardinal", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Monk Theorem 17.24 pp.358–361 and Chapter 20 infinitary syntax
      url: https://euclid.colorado.edu/~monkd/jech.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: published
origin: "pipeline"
---

## Definition

Work in ZFC, with cardinality as in [[def-cardinal]] and [[def-axiom-of-choice]]. Fix a regular uncountable cardinal kappa, a set signature of finite-arity symbols, and variables $v_\xi$ for xi<kappa. Structures have nonempty set carriers and interpretations as in [[def-set-structures-and-variable-assignments]], now with assignments on the kappa variables.

An $L_{\kappa,\kappa}$ formula is a well-founded set syntax tree obtained from finite-term equality and relation atoms by negation, conjunctions or disjunctions of length less than kappa, and existential or universal blocks of fewer than kappa distinct variables. At each node there are fewer than kappa free variables. The empty conjunction is true, the empty disjunction false, and an empty quantifier block does nothing. Bound variables may be renamed to avoid capture. $L_{\kappa,\omega}$ restricts quantifier blocks to finite length. Trees are coded canonically by finite paths through the ordered children, with labels at those paths; different harmless variable or indexing presentations may denote equivalent formulas, without being identified as syntax.

For a set structure M, satisfaction assigns to each syntax node a subset of the set $M^\kappa$ of assignments. Atomic clauses use term evaluation; negation complements, conjunction intersects, and disjunction unions these subsets. At an existential block, an assignment belongs exactly when some replacement tuple in the set of tuples from M on that block puts it in the child subset; universal blocks use every such tuple. These are unique set operations on already computed child values. The proper-subtree relation is well-founded and setlike, so [[thm-recursion-on-well-founded-setlike-relations]] proves existence and uniqueness. Induction on the same trees shows that truth depends only on free variables, since each clause either preserves agreement or modifies only bound variables. Thus satisfaction is well-defined also with assignments specified just on the free variables. This is semantics for set structures, not truth for V.

A theory T is **less-than-kappa satisfiable** if every subset of T of cardinality less than kappa has a model. **Weak logical compactness at kappa** asserts that every such theory of size at most kappa in a language of size at most kappa has a model. **Strong logical compactness at kappa** allows arbitrary set sizes for the theory and language. One specifies whether the assertion concerns $L_{\kappa,\kappa}$ or $L_{\kappa,\omega}$. These define compactness properties; they do not assert any compactness theorem. The empty theory has a one-element model in every signature (all functions constant and relations, for example, empty).
