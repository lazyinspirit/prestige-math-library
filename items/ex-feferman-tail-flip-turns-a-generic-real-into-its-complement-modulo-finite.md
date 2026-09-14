---
id: ex-feferman-tail-flip-turns-a-generic-real-into-its-complement-modulo-finite
kind: example
title: A tail flip turns a generic real into its complement modulo finite
status: draft
origin: pipeline
deps: [lem-feferman-tail-complement-automorphism]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - {title: "Solomon Feferman, Some applications of the notions of forcing and generic sets, complete proof of Theorem 4.12, printed pp. 343–344", url: "https://bibliotekanauki.pl/articles/1381977.pdf"}
---

## Statement

If a finite condition mentions coordinate $S_{n+1}$ only at indices below
$k_0$, then flipping every bit $S_{n+1}(k)$ for $k\geq k_0$ fixes the
condition and changes $S_{n+1}$ into its complement modulo the finite initial
segment $k_0=\{k:k<k_0\}$.

## Facts & Assumptions

**Given:** A finite condition $p$, natural numbers $n,k_0$, and
$(n+1,k)\notin\operatorname{dom}(p)$ whenever $k\geq k_0$.

[F1] [[lem-feferman-tail-complement-automorphism]] defines the relevant
all-bit forcing automorphism and proves that it fixes the condition and all
earlier-coordinate parameters.

## Proof

**Proof technique:** direct coordinate calculation.

1.1 Let $A=\{(n+1,k):k\geq k_0\}$ and let $\pi_A$ toggle the value of a condition exactly on $A$. By the Given hypothesis, $A\cap\operatorname{dom}(p)=\varnothing$, so no value of $p$ is changed and $\pi_Ap=p$. Coordinates other than $n+1$ are fixed pointwise. [F1, given, construct]

2.1 Write $S=S_{n+1}$. For $k<k_0$, the flip does not act and $k\in\pi_AS$ exactly when $k\in S$. For $k\geq k_0$, it toggles the generic bit and $k\in\pi_AS$ exactly when $k\notin S$. Hence $$\pi_AS\mathbin\triangle(\omega\setminus S)=\{k:k<k_0\}=k_0.$$ When $k_0=0$ this is exact complementation; when $k_0=1$ the only possible discrepancy is bit $0$. For every $k_0$, the discrepancy is finite, while the flipped set is an infinite tail. No selection or Choice principle is used. [F1, step 1.1] ∎
