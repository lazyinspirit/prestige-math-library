---
id: cex-two-radon-nikodym-derivatives-can-differ-on-a-null-set
kind: counterexample
title: "Two Radon-Nikodym derivatives can differ on a null set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [def-radon-nikodym-derivative, cor-cantor-set-is-an-uncountable-lebesgue-null-set, cor-integral-over-a-null-set-vanishes]
proof_strategy: direct
verification:
  precheck: pass
---

## Statement refuted

Assume the Axiom of Countable Choice. The Radon-Nikodym derivative is a
uniquely determined function.

## Facts & Assumptions

**Given:** Countable choice, the zero measure on
$(\mathbb R,\mathcal B(\mathbb R))$, and the Cantor set $C$.

[L1] The Cantor set is Lebesgue measurable and Lebesgue null. ([[cor-cantor-set-is-an-uncountable-lebesgue-null-set]])

[L2] The integral of a nonnegative function over a null set vanishes. ([[cor-integral-over-a-null-set-vanishes]])

[L3] A Radon-Nikodym derivative is only an almost-everywhere equivalence class of representing functions. ([[def-radon-nikodym-derivative]])

## Counterexample

**Proof technique:** direct.

1.1 Let $h_0:=0$ and $h_1:=\chi_C$. For every measurable set $E$, [L1] and [L2] give $$\int_E h_1\,d\lambda=\lambda(E\cap C)=0=\int_E h_0\,d\lambda.$$ Thus both $h_0$ and $h_1$ represent the zero measure relative to $\lambda$. [L1, L2, construct]

2.1 The functions $h_0$ and $h_1$ are not equal pointwise because $h_1=1$ on $C$, but [L3] says only almost-everywhere equality is required. Hence pointwise uniqueness fails. [step 1.1, L3] ∎
