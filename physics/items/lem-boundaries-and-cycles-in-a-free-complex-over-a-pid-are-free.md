---
id: lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free
title: "Boundaries and cycles in a free complex over a PID are free"
kind: lemma
status: published
origin: pipeline
deps: ["lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "thm-submodules-of-free-modules-over-a-pid-are-free"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---

## Statement

Assume the Axiom of Choice.
If $R$ is a PID and every $C_n$ is a free $R$-module, then $B_nC\subseteq C_n$ and $Z_nC\subseteq C_n$ are free for every $n$.

## Proof

**Given:** $B_nC=\operatorname{im}d_{n+1}$ and $Z_nC=\ker d_n$ inside the free module $C_n$.

1.1 Both $B_nC$ and $Z_nC$ are $R$-submodules of $C_n$. [given]

2.1 Applying [[thm-submodules-of-free-modules-over-a-pid-are-free]] under the stated Choice hypothesis separately to these two inclusions proves that both modules are free. [step 1.1] ∎
