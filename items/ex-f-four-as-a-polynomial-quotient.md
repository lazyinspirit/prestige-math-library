---
id: ex-f-four-as-a-polynomial-quotient
kind: example
title: "$\\mathbb F_4=\\mathbb F_2[t]/(t^2+t+1)$ with complete addition and multiplication tables"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-quotient-is-a-field-iff-irreducible, thm-z-mod-p-is-a-field, thm-multiplicative-group-of-a-finite-field-is-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "K. Conrad, Finite Fields, Examples 1.2-1.4"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
pipeline_run: null
---

## Example

Let $a$ be the residue class of $t$ in $\mathbb F_2[t]/(t^2+t+1)$. Then $a^2=a+1$, and the field has elements $0,1,a,a+1$ with tables

| $+$ | $0$ | $1$ | $a$ | $a+1$ |
|---|---:|---:|---:|---:|
| $0$ | $0$ | $1$ | $a$ | $a+1$ |
| $1$ | $1$ | $0$ | $a+1$ | $a$ |
| $a$ | $a$ | $a+1$ | $0$ | $1$ |
| $a+1$ | $a+1$ | $a$ | $1$ | $0$ |

| $\cdot$ | $0$ | $1$ | $a$ | $a+1$ |
|---|---:|---:|---:|---:|
| $0$ | $0$ | $0$ | $0$ | $0$ |
| $1$ | $0$ | $1$ | $a$ | $a+1$ |
| $a$ | $0$ | $a$ | $a+1$ | $1$ |
| $a+1$ | $0$ | $a+1$ | $1$ | $a$ |

## Facts & Assumptions

**Given:** The quotient $A=\mathbb F_2[t]/(t^2+t+1)$ and the residue class $a$ of $t$.

[L1] For a field $F$, the quotient $F[t]/(p)$ is a field exactly when the nonconstant polynomial $p$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L2] The ring $\mathbb Z/2$ is a field ([[thm-z-mod-p-is-a-field]]).

[L3] The multiplicative group of a finite field is cyclic ([[thm-multiplicative-group-of-a-finite-field-is-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $t^2+t+1$ has value $1$ at both $0$ and $1$, so it has no root in $\mathbb F_2$ and is irreducible. By [L1] and [L2], $A$ is a field. [given, L1, L2]

2.1 Every residue has the unique form $c+da$ with $c,d\in\mathbb F_2$, and the relation is $a^2+a+1=0$, hence $a^2=a+1$. [step 1.1, algebra]

3.1 Applying characteristic-two addition and the reduction in step 2.1 gives every entry in the two displayed tables. In particular $a(a+1)=1$ and $(a+1)^2=a$, so the three nonzero elements form the cyclic group $1,a,a+1$ predicted by [L3]. [step 2.1, L3, algebra] ∎
