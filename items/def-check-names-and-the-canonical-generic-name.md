---
id: "def-check-names-and-the-canonical-generic-name"
kind: "definition"
title: "Check names without a largest condition"
deps: ["def-forcing-name-valuation-and-generic-extension", "thm-recursion-on-well-founded-setlike-relations"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Karagila Definitions 2.2,2.4 p6; Marks proof of Lemma 24.3 p98; local
        no-top variant
      url: https://karagila.org/files/Forcing-2023.pdf
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For a nonempty forcing preorder P in ZF, define

$$\check x=\{\langle\check y,p\rangle:y\in x,\ p\in P\},\qquad \dot G=\{\langle\check p,p\rangle:p\in P\}.$$

Membership recursion on sets is a well-founded setlike recursion, so [[thm-recursion-on-well-founded-setlike-relations]] supplies the unique class map $x\mapsto\check x$. The rule takes a product of the set of predecessor values with P, hence returns a set. Induction shows each output is a P-name; Replacement on P then shows that dot G is a name. The valuation convention is [[def-forcing-name-valuation-and-generic-extension]].

If M is a transitive ZF model containing P and x, perform the same recursion inside M. Induction on membership identifies its values with the external check names: all members of x and all conditions of P belong to M, and the set products and recursive values agree. Thus check x belongs to M, and internal Replacement on P puts dot G in M.

When P has a largest (weakest) condition 1, one may instead recurse using only pairs with coefficient 1. A nonempty forcing filter contains 1 by upward closure. Membership induction in the valuation equation then gives value x for that top-only check name, just as for the all-conditions version proved next. No largest condition is required for the displayed definition.
