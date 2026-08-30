---
id: def-conjugate-representation-and-conjugate-character
kind: definition
title: "Conjugate representations and conjugate characters on conjugate subgroups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-character-of-a-complex-representation, def-finite-dimensional-representation-of-a-group-over-a-field, def-subgroup]
justified_by: []
aliases: []
sources:
  scraped: []
  references:
    - title: "Peter Webb, A Course in Finite Group Representation Theory, Section 5.2"
      url: "https://www-users.math.umn.edu/~webb/RepBook/RepBookLatex.pdf"
    - title: "Anupam Singh, Representation Theory of Finite Groups, Section 20.1"
      url: "https://arxiv.org/pdf/1001.0462.pdf"
  audited: 2026-08-30
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
---

## Definition

Let $H\le G$, let $g\in G$, and let $W$ be a finite-dimensional representation
of $H$ over a field $k$
([[def-finite-dimensional-representation-of-a-group-over-a-field]]).

The **conjugate representation** ${}^gW$ is the same vector space, now regarded
as a representation of the conjugate subgroup $gHg^{-1}$ by the rule

$$ (ghg^{-1})\cdot w:=h\cdot w \qquad(h\in H,\ w\in W). $$

If $\chi$ is the complex character of $W$, the **conjugate character**
${}^g\chi$ is the character of ${}^gW$:

$$ {}^g\chi(ghg^{-1})=\chi(h). $$

## Remarks

- Every element of $gHg^{-1}$ has a unique form $ghg^{-1}$ with $h\in H$, so
  the displayed formulas are well defined.

- Restricting ${}^gW$ or ${}^g\chi$ to a subgroup of $gHg^{-1}$ will be used in
  Mackey's formula.
