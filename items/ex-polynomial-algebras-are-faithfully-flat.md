---
id: ex-polynomial-algebras-are-faithfully-flat
kind: example
title: "A polynomial algebra is free and therefore faithfully flat over its coefficient ring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-free-modules-are-projective-and-flat, thm-faithfully-flat-ring-map-characterisations]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, Exercise (9.8)"
      url: "https://web.mit.edu/18.705/www/12Nts.pdf"
---

## Example

Assume the Axiom of Choice for the faithfully-flat characterization used below.

For any commutative ring $R$, the polynomial algebra $R[x]$ is a free
$R$-module with basis $1,x,x^2,\ldots$. Hence $R[x]$ is flat over $R$, and the
map $R\to R[x]$ is faithfully flat because the extension of any proper ideal
$I\subsetneq R$ is the proper ideal $IR[x]$.

## Facts & Assumptions

**Given:** The Axiom of Choice and a commutative ring $R$.

[L1] Free modules are flat ([[cor-free-modules-are-projective-and-flat]]).

[L2] A flat ring map is faithfully flat exactly when proper ideals remain proper
([[thm-faithfully-flat-ring-map-characterisations]]).

## Verification

**Proof technique:** direct.


1.1 As an $R$-module, $ R[x]=\bigoplus_{n\ge0} Rx^n, $ so it is free on the monomial basis. By [L1], it is flat over $R$. [L1, given]


1.2 If $I\subsetneq R$, then every polynomial in $IR[x]$ has all coefficients in $I$, so $1\notin IR[x]$. Thus $IR[x]$ is proper. By [L2], the map $R\to R[x]$ is faithfully flat. [L2, algebra]


2.1 Therefore polynomial algebras give basic faithfully flat examples. [algebra] ∎
