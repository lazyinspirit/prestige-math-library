---
id: ex-noether-normalisation-finite-field-weight-choice
kind: example
title: "Finite-field normalization needs the weight trick"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-noether-normalisation-finite-field-exponent-substitution]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Exercise (15.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $k=\mathbb F_q$ and
$$ f(x,y)=x^qy-xy^q. $$
Then no substitution $x\mapsto x+ay$ with $a\in \mathbb F_q$ makes $f$ monic in
$y$, but the weight substitution $x\mapsto x+y^N$ with $N>q$ does.

## Facts & Assumptions

**Given:** The finite field $\mathbb F_q$ and the polynomial $f(x,y)=x^qy-xy^q$.

[L1] Rapidly increasing exponent substitutions isolate a unique highest $x_n$-term ([[lem-noether-normalisation-finite-field-exponent-substitution]]).

## Verification

**Proof technique:** direct.

1.1 The highest homogeneous part of $f$ is $f$ itself. For any $a\in\mathbb F_q$, $$ f(a,1)=a^q-a=0, $$ so the infinite-field linear-change argument cannot choose a scalar $a\in\mathbb F_q$ with nonzero leading coefficient. [given]

2.1 Now substitute $x\mapsto x+y^N$ with $N>q$. Because $q$ is a power of the characteristic of $\mathbb F_q$, the Frobenius identity gives $(x+y^N)^q=x^q+y^{Nq}$. Hence $$ f(x+y^N,y)=x^qy+y^{Nq+1}-xy^q-y^{N+q}. $$ Because $Nq+1>N+q$, the term $y^{Nq+1}$ is the unique highest power of $y$. Therefore the transformed polynomial is already monic in $y$, exactly as [L1] predicts. [L1, step 1.1] ∎
