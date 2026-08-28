---
id: def-associated-homomorphism-to-the-integers
kind: definition
title: "The associated homomorphism from an HNN extension to the integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-hnn-extension-and-stable-letter, thm-von-dyck]
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
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Definition

Let

$$G=\left\langle A,t \,\middle|\, t\,\alpha(c)\,t^{-1}=\beta(c)\text{ for }c\in C\right\rangle$$

be an HNN extension. The defining relators send every element of $A$ to $0$ and
the stable letter $t$ to $1\in\mathbb Z$, so [[thm-von-dyck]] yields a unique
group homomorphism

$$\chi_G:G\to\mathbb Z$$

with

$$\chi_G(a)=0\quad(a\in A),\qquad \chi_G(t)=1.$$

This is the **associated homomorphism to the integers**, or the
**exponent-sum map** of the stable letter.
