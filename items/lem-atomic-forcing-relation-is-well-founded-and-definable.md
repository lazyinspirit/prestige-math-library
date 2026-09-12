---
id: "lem-atomic-forcing-relation-is-well-founded-and-definable"
kind: "lemma"
title: "Atomic forcing is well-founded and definable"
deps: ["def-forcing-relation-for-atomic-formulas", "thm-recursion-on-well-founded-setlike-relations", "lem-forcing-names-and-name-ranks-are-absolute"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: "Neeman, Forcing (2011), section 1, Theorem 1.16 and its complete atomic/formula proof, Lemmas 1.17 and 1.25–1.28, pp.4–9; section 2.1, Lemma 2.2 through Theorem 2.6, pp.10–11"
      url: "https://www.math.ucla.edu/~ineeman/223s.1.11s/223s-spring11-lecture-notes-6-5.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF the atomic forcing clauses determine unique relations, uniformly definable from the forcing preorder. For a transitive ZF ground model M containing P, the internal relations agree with the external atomic recursion on names belonging to M. This asserts atomic absoluteness only, not absoluteness of forcing arbitrary quantified formulas.

## Facts & Assumptions

**Given:** ZF and a nonempty set forcing preorder P. In the absoluteness assertion, M is transitive and satisfies ZF.

[F1] [[def-forcing-relation-for-atomic-formulas]] gives the two-direction subset/equality clauses and dense membership clause.

[F2] [[thm-recursion-on-well-founded-setlike-relations]] supplies unique definable set-valued recursion on a well-founded set domain.

[F3] [[lem-forcing-names-and-name-ranks-are-absolute]] identifies internal and external names, subnames and name ranks in a transitive ZF model.

## Proof

1.1 For input names $\sigma,\tau$ form a set C by starting with those names, adjoining all first coordinates of their entries, iterating this operation through omega, and taking the union. Replacement and Union give a set closed under subnames. On $C\times C$ order pairs by the lexicographic order of $(\max(\operatorname{rk}_P(u),\operatorname{rk}_P(v)),\min(\operatorname{rk}_P(u),\operatorname{rk}_P(v)))$. This relation is well-founded: in a nonempty subset take the least first rank, then the least second rank. It is setlike since the domain is a set. Lowering one coordinate strictly lowers its sorted rank pair; swapping coordinates leaves the complexity unchanged. [F3, construct]

2.1 At $(u,v)$ define a subset $E(u,v)$ of P by the equality clause of F1 with both subset clauses expanded. Its only equality calls involve a subname of u and a subname of v, in either order; these have strictly smaller complexity. Thus a supplied predecessor function determines membership of every p in $E(u,v)$ by quantifiers over sets P, u and v. Separation forms the unique subset. F2 supplies all these subsets on $C\times C$. Then the subset and membership relations are uniquely specified by F1 using these E-values; no recursive call to the same equality pair is needed. [F1, F2, step 1.1]

3.1 For any two descendant-closed cones containing an input pair, their intersection remains descendant-closed. Induction on sorted rank pairs shows the E-values agree there, since their defining clauses use identical smaller pairs. The derived subset and membership values agree as well. Accordingly the formula asserting that the canonical cone recursion has p in its designated value defines the atomic relation independently of the cone. Every putative solution restricts to this recursion, so uniqueness follows. [F1, F2, step 2.1]

4.1 Inside transitive M the canonical cone formed in step 1.1 is the same set: first-coordinate extraction, each finite iteration, and its omega-union agree, and M has actual omega. F3 identifies its ranks. Induct on the common rank pairs. Every condition, coefficient and subname quantified over in the expanded equality clauses is in the identical set on both sides; all predecessor E-values agree by induction. Equality therefore agrees, and the derived subset and membership clauses agree for the same reason. All recursions and restricted forcing sets exist inside M by its ZF axioms. This proves atomic absoluteness without comparing power sets of name levels, using AC, or asserting that a class of all names is a set. [F1, F3, step 1.1, step 3.1] ∎
