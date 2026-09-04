---
id: ex-convergence-of-partial-p-adic-expansions
kind: example
title: "The partial sums of a p-adic expansion converge in the inverse-limit topology"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-inverse-limit-topology-equals-the-p-adic-metric-topology]
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
    - title: "Jordan Bell, Explicit construction of the p-adic numbers"
      url: "https://jordanbell.info/LaTeX/mathematics/padicfield/"
---

## Example

If $x\in\mathbb Z_p$ is represented by digits $a_0,a_1,\ldots$, then the
partial sums

$$ s_n:=a_0+a_1p+\cdots+a_{n-1}p^{n-1}\in\mathbb Z $$

converge to $x$ in the inverse-limit topology on $\mathbb Z_p$.

## Facts & Assumptions

**Given:** An element $x\in\mathbb Z_p$ with compatible digit truncations $(s_n\bmod p^r)_r$.

[L1] The inverse-limit topology is the $p$-adic metric topology
([[thm-inverse-limit-topology-equals-the-p-adic-metric-topology]]).

## Verification

**Proof technique:** direct.

1.1 For each fixed $r\ge1$, once $n\ge r$ the residue of $s_n$ modulo $p^r$ is already $a_0+a_1p+\cdots+a_{r-1}p^{r-1}$, which is exactly the $r$-th coordinate of $x$. So the first $r$ coordinates of $s_n$ and $x$ agree for all sufficiently large $n$. [given, algebra]

2.1 Step 1.1 says that for every $r$, the sequence eventually lies in the basic neighbourhood of $x$ determined by the first $r$ coordinates. By [L1], that is exactly convergence to $x$ in the inverse-limit topology. [L1, step 1.1] ∎
