---
id: thm-bounded-linear-maps-commute-with-bochner-integration
kind: theorem
title: "Bounded linear maps commute with Bochner integration"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-bochner-integrable-function, def-bounded-linear-operator, lem-banach-valued-simple-integral-is-well-defined]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "Section 11.6, Theorem 11.32 and complete bounded-operator proof, printed p. 335"
pipeline_run: phase-2-next-18
---

## Statement

Let $X,Y$ be Banach spaces, let $T:X\to Y$ be bounded and linear, and let $f$
be Bochner integrable. Then $T\circ f$ is Bochner integrable and, for every
measurable $E$,

$$T\left(\int_Ef\,d\mu\right)=\int_E Tf\,d\mu.$$

## Facts & Assumptions

[L1] A bounded linear operator satisfies $\|Tx\|\leq C\|x\|$ for some finite $C$ ([[def-bounded-linear-operator]]).

[L2] A Bochner integral is the norm limit of integrals of an $L^1$-approximating simple sequence ([[def-bochner-integrable-function]]).

[L3] The Banach-valued simple integral is linear and representation-independent ([[lem-banach-valued-simple-integral-is-well-defined]]).

## Proof

**Proof technique:** direct.

**Given:** $T,f,E$ as in the Statement.

1.1 Restrict a defining approximation to the measurable set. Choose integrable simple $s_n$ with $\int\|f-s_n\|\to0$. Then $\mathbf1_ETs_n$ is an integrable $Y$-valued simple function: every nonzero level is a finite union of level sets of $\mathbf1_Es_n$. [given, L2, choose]

2.1 Prove Bochner integrability after applying $T$. By [L1], $\int\|\mathbf1_ETf-\mathbf1_ETs_n\|\leq C\int_E\|f-s_n\|\to0$. Thus [L2] makes $\mathbf1_ETf$ Bochner integrable. [L1, L2, step 1.1]

3.1 Commute $T$ with the defining limit. [L1, L2, L3, step 1.1, step 2.1] For each simple $s_n$, finite linearity in [L3] gives $T(\int_Es_n)=\int_ETs_n$. Boundedness makes $T$ norm-continuous, so taking limits in this equality and using [L2] proves the displayed identity. If $T=0$, $f=0$, or $E=\varnothing$, both sides are explicitly zero. [L1, L2, L3, step 1.1, step 2.1] ∎