---
id: def-quotient-vector-space-and-canonical-projection
kind: definition
title: "The quotient vector space $V/W$ and its canonical projection"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-linear-subspace]
justified_by: [prop-quotient-vector-space-operations-and-projection]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
sources:
  scraped: []
  references:
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Section 3E"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ and let $W$ be a linear subspace of $V$ ([[def-vector-space]], [[def-linear-subspace]]). For $v\in V$, the **coset of $W$ represented by $v$** is
$$v+W:=\{v+w:w\in W\}.$$
The **quotient set** is $V/W:=\{v+W:v\in V\}$. Its addition and scalar multiplication are
$$(v+W)+(u+W):=(v+u)+W,\qquad a(v+W):=(av)+W.$$
The resulting vector space is the **quotient vector space of $V$ by $W$**. The **canonical projection** is
$$\pi:V\longrightarrow V/W,\qquad \pi(v):=v+W.$$
The independence of the displayed operations from their representatives, the vector-space axioms, and the linearity and kernel of $\pi$ are established in [[prop-quotient-vector-space-operations-and-projection]].

## Remarks

Quotient spaces enter this development because the reverse triangularisation argument descends an operator from $V$ to the quotient by an invariant eigenline $\langle v\rangle$. The quotient removes that line while retaining the induced linear action needed for induction.
