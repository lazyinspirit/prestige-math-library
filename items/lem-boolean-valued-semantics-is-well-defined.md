---
id: "lem-boolean-valued-semantics-is-well-defined"
kind: "lemma"
title: "Well-definedness of Boolean-valued semantics"
deps: ["def-boolean-valued-name-semantics", "def-forcing-names-and-name-rank", "thm-recursion-on-well-founded-setlike-relations"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Geschke Definition 6.27 and paragraph following it pp26–27; local set-cone
        repair to recursion explanation
      url: https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF the atomic Boolean recursions and the interpretation of each fixed finite membership formula have unique values in the complete Boolean algebra B, definable from B and their name parameters. When constructed internally in a ground model, only completeness for subsets belonging to that model is used.

## Facts & Assumptions

**Given:** ZF; complete set Boolean algebra. Proved atomic recursion on actual set descendant domains, checked each swapped-coordinate call lowers sorted-rank complexity, proved overlap uniqueness, then constructed each fixed existential value by Separation on B.

[F1] [[def-boolean-valued-name-semantics]]: Atomic equality and membership are the two prescribed joins/meets; connectives and fixed-formula quantifiers use Boolean operations and attained-value subsets of B.

[F2] [[def-forcing-names-and-name-rank]]: Subnames have strictly smaller ordinal name rank, and finitely iterated predecessor closure is a set.

[F3] [[thm-recursion-on-well-founded-setlike-relations]]: Well-founded recursion applies to each set domain, with definable unique set-valued rules.

## Proof

1.1 For input names s,t let C be the union of their descendant cones, including s,t. It is a set: iterate the operation adjoining first coordinates of pair entries through omega and take the union; Replacement and Union suffice. It is closed under subnames. On $C\times C$ assign the complexity $c(u,v)=(\max(\operatorname{rk}_B(u),\operatorname{rk}_B(v)),\min(\operatorname{rk}_B(u),\operatorname{rk}_B(v)))$ and order these ordinal pairs lexicographically. Any nonempty set of them has a least first coordinate and then a least second coordinate. Lowering either name rank strictly while retaining the other strictly lowers this sorted pair. [F2, construct]

2.1 Recurse on the set $\{E,I\}\times C\times C$, with a triple preceding another whenever its complexity is smaller. The relation is well-founded by step 1.1 and setlike because its whole domain is a set. In I(u,v), every requested E(u,w) has w a subname of v; in E(u,v), the requested I(w,v) or I(w,u) lowers respectively the rank of u or v, allowing the coordinate swap. Thus every requested value is at smaller complexity. The sets of requested terms are set images of the pair entries, and completeness supplies their unique joins and meets. F3 gives existence and uniqueness of E and I on this domain. [F1, F3, step 1.1]

3.1 For two descendant-closed sets the intersection is descendant-closed. Induction on the same ordinal-pair complexity shows their recursive values agree for all pairs in the intersection, since the defining clauses request only subname pairs there. The values therefore do not depend on the cone chosen. A single formula saying that a set-domain recursion on the canonical cone has a specified output defines the global atomic values. Any rival satisfies these clauses on each cone and agrees by uniqueness. No order of all pairs of names was claimed to be setlike. [F1, F3, step 2.1]

4.1 Now induct externally through one fixed finite formula. Atomic values are definable by step 3.1. Negation, conjunction and other finite Boolean operations preserve definability and uniqueness. For an existential whose matrix value is already a definable class function, Separation on B forms the set of attained matrix values over all names, and completeness gives its unique supremum. This is a new defining formula for each fixed formula, not a uniform truth predicate. The same construction inside a ground model uses only its internally formed cones, images and subsets of B, so internal completeness suffices and no external completeness is inferred. [F1, step 3.1] ∎
