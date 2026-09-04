---
id: ex-compatible-p-adic-digit-sequences
kind: example
title: "A p-adic integer is encoded by a compatible sequence of residue digits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-adic-integers-as-compatible-residue-classes]
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
    - title: "Jordan Bell, Explicit construction of the p-adic numbers"
      url: "https://jordanbell.info/LaTeX/mathematics/padicfield/"
---

## Example

For fixed digits $a_0,a_1,a_2,\ldots\in\{0,\ldots,p-1\}$, the sequence

$$ x_n:=a_0+a_1p+\cdots+a_{n-1}p^{n-1}\pmod{p^n} $$

defines an element of $\mathbb Z_p$.

## Facts & Assumptions

**Given:** Digits $a_i\in\{0,\ldots,p-1\}$ for $i\ge0$.

[L1] An element of $\mathbb Z_p$ is a compatible residue-class tuple
([[def-p-adic-integers-as-compatible-residue-classes]]).

## Verification

**Proof technique:** direct.

1.1 For each $n\ge1$, reducing $x_{n+1}$ modulo $p^n$ removes only the final term $a_np^n$, so $x_{n+1}\bmod p^n=x_n$. Thus the tuple $(x_n)_{n\ge1}$ is compatible. [given, algebra]

2.1 By [L1], every compatible tuple defines an element of $\mathbb Z_p$. Hence the displayed digit data encodes a $p$-adic integer. [L1, step 1.1] ∎
