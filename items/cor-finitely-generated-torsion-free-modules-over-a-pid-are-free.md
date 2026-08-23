---
id: cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
kind: corollary
title: "Every finitely generated torsion-free module over a PID is free"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-invariant-factor-decomposition-over-a-pid, def-annihilator-and-torsion-of-a-module]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Corollary 2.6"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

Every finitely generated torsion-free module over a principal ideal domain is finite free.

## Facts & Assumptions

**Given:** A finitely generated torsion-free $R$-module $M$, where torsion-free means $\operatorname{Tor}(M)=\{0\}$ ([[def-annihilator-and-torsion-of-a-module]]).

[L1] Every finitely generated PID module is a finite free module direct-summed with cyclic torsion quotients ([[thm-invariant-factor-decomposition-over-a-pid]]).

## Proof

**Proof technique:** direct.

1.1 In the decomposition from [L1], every nonzero quotient $R/(a_i)$ with $a_i\ne0$ consists of torsion elements, whereas the free summand is torsion-free because $R$ is a domain. Torsion-freeness therefore forces every cyclic quotient summand to be zero. [L1, given]

2.1 Only the finite free summand remains, so $M$ is finite free. The zero module is the free module on the empty basis, and unit invariant factors already give zero summands. [step 1.1] ∎
