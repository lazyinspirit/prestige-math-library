---
id: def-irreducible-complex-character
kind: definition
title: "An irreducible complex character"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-of-a-complex-representation, def-subrepresentation-and-irreducible-representation]
justified_by: []
aliases: []
verification:
  audited: 2026-08-29
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Chapter 3"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Pavel Etingof et al., Introduction to Representation Theory, Section 3.5"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf"
---

## Definition

A complex character $\chi$ ([[def-character-of-a-complex-representation]]) is
**irreducible** when $\chi=\chi_V$ for an irreducible representation $V$ of $G$
over $\mathbb C$
([[def-subrepresentation-and-irreducible-representation]]).

The phrase is well defined for characters rather than for individual
representations: if $V$ and $W$ are equivalent, then $\chi_V=\chi_W$ by the
invariance clause of
([[def-character-of-a-complex-representation]]), and equivalence preserves
irreducibility. Throughout the page, "the irreducible characters" means one
representative $\chi_1,\dots,\chi_r$ from each equivalence class of irreducible
complex representations of the finite group $G$; the number $r$ is finite and
equals the number of conjugacy classes of $G$ by the published count
([[thm-number-of-irreducible-representations-equals-the-number-of-conjugacy-classes-when-k-is-algebraically-closed-and-char-k-does-not-divide-group-order]]).
