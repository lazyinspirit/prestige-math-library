---
id: prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms
kind: proposition
title: Canonical associativity, symmetry, and unit maps for smash products
status: published
origin: pipeline
deps: ["def-smash-product-of-based-spaces", "lem-compact-test-exponential-law-and-products-of-quotients", "thm-quotient-universal-property"]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. P. May, A Concise Course in Algebraic Topology
      url: https://web.archive.org/web/20220823180711if_/http://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 2, printed pages 175--179; Chapter 25, Section 3, printed pages 222--223
---

## Statement

For based CGWH spaces $X,Y,Z$, the formulas

$$ (x\wedge y)\wedge z\longmapsto x\wedge(y\wedge z),\qquad x\wedge y\longmapsto y\wedge x, $$

and $S^0\wedge X\to X$, $1\wedge x\mapsto x$, induce natural based
homeomorphisms

$$ (X\wedge Y)\wedge Z\cong X\wedge(Y\wedge Z),\qquad X\wedge Y\cong Y\wedge X,\qquad S^0\wedge X\cong X. $$

These maps satisfy the usual pentagon, triangle, and symmetry coherence
identities.

## Facts & Assumptions

[F1] Every product and quotient is formed with the CGWH convention of [[def-smash-product-of-based-spaces]].

[F2] The published product-of-quotients lemma identifies an iterated quotient product with the corresponding quotient of the product ([[lem-compact-test-exponential-law-and-products-of-quotients]]).

[F3] The coordinate reassociations and permutations of k-products are mutually inverse homeomorphisms.

[F4] Maps constant on quotient classes descend uniquely and continuously ([[thm-quotient-universal-property]]).

## Proof

**Given:** Based CGWH spaces $X,Y,Z$ as in the statement.

1.1 **Put both triple smashes over one quotient.** Let $$ W=(X\times Y\times\{*_Z\})\cup (X\times\{*_Y\}\times Z)\cup (\{*_X\}\times Y\times Z). $$ [F1, F2, F4]

By [F1] and [F2], both $(X\wedge Y)\wedge Z$ and $X\wedge(Y\wedge Z)$ are canonically the kified quotient of $X\times_kY\times_kZ$ by $W$. The identity on triples therefore descends by [F4] to the displayed associator, and the same construction in reverse gives its continuous inverse. [F1, F2, F4]

1.2 **Descend the twist and unit maps.** The transposition $(x,y)\mapsto(y,x)$ takes $X\vee Y$ onto $Y\vee X$, so [F3, F4] give the symmetry homeomorphism and its inverse. Since the nonbasepoint of $S^0$ is an open-and-closed singleton, collapsing $S^0\vee X$ leaves precisely the copy $\{1\}\times X$, giving $S^0\wedge X\cong X$. [F1, F3, F4]

1.3 **Check naturality and coherence.** Naturality follows because every map above is induced by the corresponding coordinate map before quotienting. Each pentagon, triangle, or symmetry composite is induced by the same reassociation or permutation of the same product coordinates. Those maps agree before quotienting, hence their descended maps agree. [F1]

$\square$
