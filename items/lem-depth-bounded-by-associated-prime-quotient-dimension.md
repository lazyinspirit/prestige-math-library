---
id: lem-depth-bounded-by-associated-prime-quotient-dimension
title: Depth is bounded by the quotient dimension at every associated prime
kind: lemma
status: published
origin: pipeline
deps: [lem-associated-prime-after-power-regular-quotient, lem-regular-element-exists-by-prime-avoidance, lem-depth-quotient-by-regular-element, thm-krull-principal-ideal-theorem]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Depth and Cohen--Macaulay modules source treatment
      url: https://websites.umich.edu/~mmustata/CAnotes.pdf
verification:
  audited: 2026-09-07
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
---
## Statement

Let $(R,\mathfrak m)$ be Noetherian local, let $M\ne0$ be finite, and let
$\mathfrak p\in\operatorname{Ass}_R(M)$. Then
$$\operatorname{depth}(M)\le\dim(R/\mathfrak p).$$

## Facts & Assumptions

**Given:** The data in the statement.

## Proof

**Proof technique:** direct.

1.1 Induct on $d=\operatorname{depth}(M)$. The case $d=0$ is immediate. If $d>0$, choose an $M$-regular $x\in\mathfrak m$. Then $x\notin\mathfrak p$. Choose $\mathfrak q$ minimal over $\mathfrak p+(x)$. The principal ideal theorem and $\mathfrak p\subsetneq\mathfrak q$ give $\dim(R/\mathfrak q)\le\dim(R/\mathfrak p)-1$. [given, choose]

2.1 The power-quotient lemma puts $\mathfrak q$ in $\operatorname{Ass}(M/x^nM)$ for some $n\ge1$. Since $x^n$ is regular, the quotient has depth $d-1$. Induction gives $d-1\le\dim(R/\mathfrak q)\le\dim(R/\mathfrak p)-1$, as required. [step 1.1, algebra] ∎
