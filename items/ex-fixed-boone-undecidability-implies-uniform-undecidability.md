---
id: ex-fixed-boone-undecidability-implies-uniform-undecidability
kind: example
title: "Fixed boone undecidability implies uniform undecidability"
status: published
origin: pipeline
deps: ["thm-novikov-boone-undecidability-of-the-word-problem"]
justified_by: []
landmark: false
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "Rotman, Chapter 12, p.431, Theorem 12.8"
      url: "https://math.uchicago.edu/~shmuel/lg-readings/Joseph%20J.%20Rotman%2C%20The%20Word%20Problem%20.pdf"
---

## Example

Assume AC. Specialize a proposed uniform word-problem algorithm to the single Boone presentation $\mathcal P_{\mathcal B}$. This gives the impossible fixed-presentation decider
$$D(z)=U(\mathcal P_{\mathcal B},z).$$
Consequently no Turing-machine algorithm decides identity for every pair consisting of a finite presentation and a signed word in its generators.

## Facts & Assumptions

**Given:** A proposed algorithm $U$ which terminates and answers correctly on every valid pair $(\mathcal P,z)$. Assume AC as in the theorem supplying the fixed instance.

[F1] There is one fixed finite presentation $\mathcal P_{\mathcal B}$ whose identity language is undecidable. ([[thm-novikov-boone-undecidability-of-the-word-problem]])

## Verification

1.1 Hard-code the finite string describing $\mathcal P_{\mathcal B}$ in a wrapper machine. On input $z$ over its signed generating alphabet, the wrapper writes this constant string and the pair delimiter, copies $z$, and runs $U$. This explicitly computes $D(z)=U(\mathcal P_{\mathcal B},z)$; the preprocessor terminates because the prefix is fixed and $z$ is finite. [F1, given, construct]

2.1 Every such pair is a valid input for $U$, so $D$ halts on every $z$ and satisfies $D(z)=\mathrm{yes}$ exactly when $z=1$ in $\mathcal B$. For instance $D(\varepsilon)=U(\mathcal P_{\mathcal B},\varepsilon)=\mathrm{yes}$, and $D(xx^{-1})=\mathrm{yes}$ by cancellation. The claimed behavior for all words, rather than these two calculations alone, makes $D$ a decider forbidden by [F1]. Thus the proposed uniform algorithm cannot exist. [F1, step 1.1, given] ∎ 
