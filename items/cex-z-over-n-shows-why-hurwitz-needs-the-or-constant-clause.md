---
id: cex-z-over-n-shows-why-hurwitz-needs-the-or-constant-clause
kind: counterexample
title: "The sequence z/(n+1) shows why the injective-limit theorem needs the constant escape clause"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-hurwitz-injective-limit]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** a locally uniform limit of injective holomorphic functions is
still injective, with no exception.

## Facts & Assumptions

**Given:** The sequence $f_n(z)=z/(n+1)$ on $\mathbb C$.

[L1] The correct theorem says that such a limit is injective or constant
([[thm-hurwitz-injective-limit]]).

## Counterexample

**Proof technique:** direct.

1.1 Every $f_n(z)=z/(n+1)$ is entire and injective. On each compact set, $|f_n(z)|\le \sup_K |z|/(n+1)\to0$, so $f_n\to0$ locally uniformly. [given, algebra]

2.1 The limit function is the constant $0$, which is not injective. Thus the claim without the constant escape clause is false, exactly as [L1] warns. [step 1.1, L1] ∎
