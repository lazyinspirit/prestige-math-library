---
id: cor-number-of-simple-kg-modules-equals-number-of-p-regular-conjugacy-classes
kind: corollary
title: "The number of simple kG-modules equals the number of p-regular conjugacy classes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "J. Miquel Martinez, Modular Representation Theory of Finite Groups"
      url: "https://www.uv.es/jomimar8/pdfs/course%20notes.pdf"
    - title: "Tudor Ciurca, Representation Theory"
      url: "https://www.scribd.com/document/951548499/ModRep"
---

## Statement

The number of isomorphism classes of simple $kG$-modules equals the number of
$p$-regular conjugacy classes of $G$.

## Facts & Assumptions

**Given:** A finite group $G$ over a splitting field $k$ of characteristic $p$.

[L1] The irreducible Brauer characters form a basis of the class functions on
$G^0$
([[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]).

[A1] A class function on $G^0$ is determined by its values on the $p$-regular
conjugacy classes, so the indicator functions of those classes form a basis.

## Proof

**Proof technique:** direct.

1.1 By [A1], the vector space of class functions on $G^0$ has dimension equal to the number of $p$-regular conjugacy classes. [A1, given]

2.1 By [L1], the irreducible Brauer characters form a basis of that same space. The number of basis vectors is therefore the number of irreducible Brauer characters, equivalently the number of simple $kG$-modules. [L1, step 1.1]

3.1 Hence the number of simple $kG$-modules equals the number of $p$-regular conjugacy classes. [step 2.1] ∎
