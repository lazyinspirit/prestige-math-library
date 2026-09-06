---
id: cor-nspace-is-closed-under-complement-above-logspace
kind: corollary
title: "Read-only-input nondeterministic work space is closed under complement above logarithmic space"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-immerman-szelepcsenyi-nl-equals-conl]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge: {model: "gpt-5.6-terra", verdict: pass, date: 2026-09-06}
sources:
  references:
    - title: "Arora and Barak, Computational Complexity, Corollary 3.19"
      url: "https://courses.cs.duke.edu/spring07/cps240/books/AB/ABbook.pdf"
---

## Statement

If $s$ is work-space constructible and $\log_2(n+2)=O(s(n))$, then
$$ \mathrm{NWORKSPACE}(s(n))=\mathrm{coNWORKSPACE}(s(n)). $$
This is the read-only-input work-space notation introduced on this page, not
an unqualified assertion about the library's all-tapes NSPACE convention.

## Facts & Assumptions

**Given:** a work-space-constructible $s$ satisfying $\log_2(n+2)=O(s(n))$.

[L1] The general read-only-input $\mathrm{NWORKSPACE}(s)$ complement equality is established by the Immerman--Szelepcsényi theorem ([[thm-immerman-szelepcsenyi-nl-equals-conl]]).

## Proof

**Proof technique:** direct extraction.

1.1 The hypotheses here are exactly the hypotheses of the general clause in [L1]. [L1, given]

2.1 Applying that clause gives $\mathrm{NWORKSPACE}(s(n))=\mathrm{coNWORKSPACE}(s(n))$, which is closure under complement. [L1, step 1.1] ∎
