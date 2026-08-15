---
id: ex-f-eight-as-a-polynomial-quotient
kind: example
title: "$\\mathbb F_8=\\mathbb F_2[t]/(t^3+t+1)$ and its power table"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-quotient-is-a-field-iff-irreducible, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Section 1"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

Let $a$ be the residue class of $t$ in $\mathbb F_2[t]/(t^3+t+1)$. Then

$$a^3=a+1,\quad a^4=a^2+a,\quad a^5=a^2+a+1,\quad a^6=a^2+1,\quad a^7=1.$$

Together with $0$ and the low powers $a^0=1$, $a^1=a$, $a^2$, these are all eight elements.

## Facts & Assumptions

**Given:** The quotient $A=\mathbb F_2[t]/(t^3+t+1)$ and the class $a$ of $t$.

[L1] A polynomial quotient over a field is a field exactly when its modulus is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L2] An irreducible cubic simple extension has power basis $(1,a,a^2)$ and degree $3$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).

## Verification

**Proof technique:** direct.

1.1 A reducible cubic over a field has a linear factor. The polynomial $t^3+t+1$ has value $1$ at both elements of $\mathbb F_2$, so it is irreducible; [L1] and [L3] make $A$ a field. [given, L1, L3]

2.1 By [L2], the eight coefficient triples in the basis $(1,a,a^2)$ are the eight elements of $A$, and $a^3=a+1$. [step 1.1, L2, algebra]

3.1 Successive multiplication by $a$ and reduction by $a^3=a+1$ gives the displayed powers. Together with $a^0=1$, $a^1=a$ and $a^2$, the powers $a^0,\ldots,a^6$ are the seven distinct nonzero basis combinations, and the next product returns $a^7=1$. [step 2.1, algebra] ∎
