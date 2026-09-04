---
id: ex-a-cauchy-sequence-in-the-additive-p-adic-metric
kind: example
title: "A standard p-adic digit sequence is Cauchy and converges in Zp"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-adic-metric-on-zp, thm-zp-is-compact-hausdorff-totally-disconnected-and-complete]
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

The sequence

$$ t_n:=1+p+\cdots+p^{n-1}\in\mathbb Z\subseteq\mathbb Z_p $$

is Cauchy for the additive $p$-adic metric and converges in $\mathbb Z_p$.

## Facts & Assumptions

**Given:** The sequence $t_n=1+p+\cdots+p^{n-1}$ in $\mathbb Z_p$.

[F1] The $p$-adic metric measures how many initial residue coordinates agree
([[def-p-adic-metric-on-zp]]).

[L1] $\mathbb Z_p$ is complete for that metric
([[thm-zp-is-compact-hausdorff-totally-disconnected-and-complete]]).

## Verification

**Proof technique:** direct.

1.1 If $m>n$, then $t_m-t_n=p^n(1+p+\cdots+p^{m-n-1})$, so the first $n$ residue coordinates of $t_m$ and $t_n$ agree. By [F1], this gives $d_p(t_m,t_n)\le p^{-n}$. Hence $(t_n)$ is Cauchy. [F1, given, algebra]

2.1 Since $\mathbb Z_p$ is complete by [L1], the Cauchy sequence $(t_n)$ converges to some element of $\mathbb Z_p$. [L1, step 1.1] ∎
