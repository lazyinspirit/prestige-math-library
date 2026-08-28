---
id: def-completely-reducible-representation
kind: definition
title: "A completely reducible representation as a finite direct sum of irreducible subrepresentations"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-dimensional-representation-of-a-group-over-a-field, def-subrepresentation-and-irreducible-representation, cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity, def-semisimple-module]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-28
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 1 Section 1.2"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Chapter 2 Section 2.1"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
pipeline_run: null
---

## Definition

Let $\rho:G \to \operatorname{GL}(V)$ be a finite-dimensional representation of
$G$ over a field $k$. The representation $\rho$ is **completely reducible** if
there are irreducible subrepresentations $V_1,\ldots,V_r \le V$ such that

$$V=V_1\oplus\cdots\oplus V_r.$$

The empty direct sum is allowed, so the zero representation is completely
reducible.

Under the dictionary of
[[cor-subrepresentations-correspond-to-submodules-and-irreducibility-to-simplicity]],
this is exactly the representation-side form of a semisimple left
$k[G]$-module ([[def-semisimple-module]]).
