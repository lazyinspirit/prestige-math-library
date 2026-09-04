---
id: prop-uniqueness-of-hensel-factor-lifting
kind: proposition
title: "Lifted coprime factorisations are unique"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-henselian-pair-and-henselian-local-ring, lem-henselian-pair-ideal-in-jacobson-radical, lem-hensel-factor-lift-uniqueness-induction]
proof_strategy: direct
verification:
  audited: 2026-09-04
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

Let $(A,I)$ be a Henselian pair. Let $f \in A[T]$ be monic, and let
$$\overline f=g_0h_0$$
in $(A/I)[T]$ with $g_0,h_0$ monic and coprime. Then there is at most one
factorization
$$f=gh$$
with $g,h$ monic and $\overline g=g_0$, $\overline h=h_0$.

## Facts & Assumptions

**Given:** A Henselian pair $(A,I)$, a monic polynomial $f \in A[T]$, and a
coprime monic residue factorization $\overline f=g_0h_0$.

[L1] In a Henselian pair, such lifted factorisations are part of the defining
lifting property ([[def-henselian-pair-and-henselian-local-ring]]).

[L2] Any two lifts of the same coprime residue factorization agree modulo
every power of the ideal ([[lem-hensel-factor-lift-uniqueness-induction]]).

## Proof

**Proof technique:** combine the definition with the congruence induction.

1.1 Suppose $f=gh=g'h'$ are two monic lifts of the given residue factorization. By [L2], they agree modulo $I^r[T]$ for every $r \ge 1$. [L2, given]

2.1 In the present page's convention, [L1] already includes uniqueness of the lifted factorization. Therefore the two lifts must coincide. Step 1.1 records the explicit congruence mechanism that later examples use. [L1, step 1.1]

3.1 Hence a coprime monic residue factorization has at most one Hensel lift. [step 2.1] ∎
