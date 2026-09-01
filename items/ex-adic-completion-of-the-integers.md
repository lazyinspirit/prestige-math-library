---
id: ex-adic-completion-of-the-integers
kind: example
title: "The $p$-adic completion map of the integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adic-completion-of-a-module, thm-kernel-and-universal-property-of-adic-completion]
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "J. S. Milne, A Primer of Commutative Algebra, Aside 24.7"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
pipeline_run: null
---

## Example

Let $p$ be a prime integer. The $(p)$-adic completion map of $\mathbb Z$ is
$$\kappa_{\mathbb Z}\colon \mathbb Z \to \widehat{\mathbb Z}^{\,(p)}, \qquad n \mapsto (n \bmod p^r)_{r \ge 1}.$$
It is injective, and its image consists of the ordinary integers viewed as
compatible residue systems.

## Facts & Assumptions

**Given:** A prime integer $p$.

[L1] The completion map for the $(p)$-adic filtration sends an element to its
compatible residue classes modulo $p^r$ ([[def-adic-completion-of-a-module]]).

[L2] The kernel of the completion map is the intersection of the powers of the
defining ideal ([[thm-kernel-and-universal-property-of-adic-completion]]).

## Verification

**Proof technique:** direct.

1.1 Applying [L1] to $M=\mathbb Z$ and $I=(p)$ gives the displayed formula for $\kappa_{\mathbb Z}$. Compatibility is automatic because reduction modulo $p^r$ followed by reduction modulo $p^s$ agrees with direct reduction modulo $p^s$ whenever $r \ge s$. [L1, algebra]

1.2 By [L2], $$\ker(\kappa_{\mathbb Z})=\bigcap_{r \ge 1} p^r\mathbb Z.$$ If $n \ne 0$, then for sufficiently large $r$ one has $p^r > |n|$, so $p^r$ cannot divide $n$. Thus the intersection is $0$, and $\kappa_{\mathbb Z}$ is injective. [L2, algebra]

2.1 The image of $\kappa_{\mathbb Z}$ is therefore exactly the copy of ordinary integers inside the completion, written componentwise as their residue systems modulo $p^r$. [step 1.1, step 1.2] ∎
