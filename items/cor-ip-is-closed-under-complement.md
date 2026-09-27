---
id: cor-ip-is-closed-under-complement
kind: corollary
title: "IP is closed under complement"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [thm-ip-equals-pspace, cor-pspace-equals-npspace-and-is-closed-under-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §8.5 and the remarks after Theorem 8.17, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
---

## Statement

If $L\in\mathrm{IP}$ then its complement $\overline{L}$ also lies in $\mathrm{IP}$. Consequently $\mathrm{IP}$ is closed under complement.

## Facts & Assumptions

**Given:** A language $L\in\mathrm{IP}$.

[A1] $\mathrm{IP}=\mathrm{PSPACE}$: every language in IP lies in PSPACE and every language in PSPACE lies in IP ([[thm-ip-equals-pspace]]).

[A2] If $L\in\mathrm{PSPACE}$ then its complement lies in PSPACE; this is closure of deterministic polynomial space under complement ([[cor-pspace-equals-npspace-and-is-closed-under-complement]]).



**Proof technique:** direct.

## Proof

1.1 Since $L\in\mathrm{IP}$, the containment $\mathrm{IP}\subseteq\mathrm{PSPACE}$ of [A1] gives $L\in\mathrm{PSPACE}$. [A1, given]

2.1 In particular there is a deterministic polynomial-space machine $M$ deciding $L$: it halts on every input with the correct yes or no answer and uses at most $p(n)$ cells for some polynomial $p$. [step 1.1, given]

3.1 By [A2] the complement of $L$ lies in PSPACE; concretely, flipping the accept and reject states of the machine $M$ of step 2.1 yields a deterministic polynomial-space machine deciding $\overline{L}$, since $M$ is total on all inputs. [step 2.1, A2, construct]

4.1 Applying the containment $\mathrm{PSPACE}\subseteq\mathrm{IP}$ of [A1] to the language $\overline{L}$ gives $\overline{L}\in\mathrm{IP}$, which is the claim. This argument uses complementation of a deterministic space-bounded machine and does not claim that complementing an arbitrary interactive protocol preserves completeness or soundness. [step 3.1, A1, given] ∎
