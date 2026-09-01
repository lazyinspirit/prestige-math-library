---
id: lem-quotient-seminorm-is-representative-independent
kind: lemma
title: "The quotient seminorm is independent of the chosen coset representative"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-seminorm, prop-quotient-vector-space-operations-and-projection]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Statement

Let $X$ be a normed space and let $M \le X$. If $x+M = x'+M$ in $X/M$, then

$$\inf_{m \in M}\|x+m\| = \inf_{m \in M}\|x'+m\|.$$

Therefore the quotient seminorm of [[def-quotient-seminorm]] is well defined.

## Facts & Assumptions

**Given:** A normed space $X$, a linear subspace $M \le X$, and representatives
$x,x' \in X$ with $x+M = x'+M$.

[L1] The quotient seminorm is defined by
$\|x+M\|_{X/M} := \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).

[L2] Two cosets are equal exactly when their representatives differ by an
element of $M$ ([[prop-quotient-vector-space-operations-and-projection]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], there is $m_0 \in M$ with $x' = x+m_0$. For every $m \in M$, $x'+m = x+(m_0+m)$, and $m_0+m$ still lies in $M$. Thus $\{\|x'+m\|:m\in M\} \subseteq \{\|x+n\|:n\in M\}$. [L2]

2.1 The same argument with the roles of $x$ and $x'$ reversed gives the reverse inclusion, so the two sets of admissible norms are equal. Their infima are therefore equal, which is exactly the claim of [L1]. [step 1.1, L1, L2] ∎
