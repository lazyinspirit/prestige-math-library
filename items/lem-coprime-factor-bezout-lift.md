---
id: lem-coprime-factor-bezout-lift
kind: lemma
title: "Lift a Bezout identity for coprime residue factors"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-over-a-commutative-ring, def-quotient-ring]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Chapter 22"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "The Stacks Project, Section 15.11: Henselian pairs"
      url: "https://stacks.math.columbia.edu/tag/09XD"
pipeline_run: null
---

## Statement

Let $A$ be a commutative ring, let $I \subseteq A$ be an ideal, and let
$g_0,h_0 \in (A/I)[T]$ generate the unit ideal. If $g,h \in A[T]$ lift
$g_0,h_0$, then there exist polynomials $a,b \in A[T]$ such that
$$ag+bh \equiv 1 \pmod I.$$

## Facts & Assumptions

**Given:** A commutative ring $A$, an ideal $I$, residue polynomials
$g_0,h_0 \in (A/I)[T]$ with $(g_0,h_0)=(1)$, and lifts $g,h \in A[T]$.

[L1] The quotient ring $A/I$ and the polynomial ring over a commutative ring
are again commutative rings, so Bezout identities and coefficientwise lifting
make sense in $(A/I)[T]$ and $A[T]$
([[def-quotient-ring]], [[def-polynomial-ring-over-a-commutative-ring]]).

## Proof

**Proof technique:** lift one residue Bezout identity coefficientwise.

1.1 Because $(g_0,h_0)=(1)$ in $(A/I)[T]$, there exist $a_0,b_0 \in (A/I)[T]$ such that $$a_0g_0+b_0h_0=1.$$ [L1, given, choose]

2.1 Lift the coefficients of $a_0$ and $b_0$ to polynomials $a,b \in A[T]$. Reducing coefficientwise modulo $I$ gives $$\overline{ag+bh}=\overline a\,\overline g+\overline b\,\overline h=a_0g_0+b_0h_0=1.$$ Hence $ag+bh \equiv 1 \pmod I$. [step 1.1, L1, choose]

3.1 Thus a coprime residue factorization always admits a lifted Bezout relation modulo $I$. [step 2.1] ∎
