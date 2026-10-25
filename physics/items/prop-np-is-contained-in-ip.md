---
id: prop-np-is-contained-in-ip
kind: proposition
title: "NP is contained in IP"
status: published
origin: session
deps: [def-ip, def-np-by-verifiers]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Arora and Barak, §8.2"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

$\mathrm{NP}\subseteq\mathrm{IP}$.

## Proof

**Given:** a language $L\in\mathrm{NP}$ and its polynomial-time verifier.

1.1 By [[def-np-by-verifiers]], on input $x$ the prover may send a polynomially bounded certificate $w$, and the verifier can test it in polynomial time. [given]

2.1 If $x\in L$, some $w$ is accepted, whereas if $x\notin L$, no $w$ is accepted. This is a one-round protocol with completeness $1$ and soundness $0$, hence is an IP protocol by [[def-ip]]. [step 1.1, given] ∎
