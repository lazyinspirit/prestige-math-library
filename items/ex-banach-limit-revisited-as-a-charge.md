---
id: ex-banach-limit-revisited-as-a-charge
kind: example
title: "A Banach mean revisited as a charge"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-axiom-of-choice, thm-dual-of-ell-infinity-is-ba, thm-existence-of-a-shift-invariant-mean-on-bounded-sequences]
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
    date: 2026-09-14
sources:
  scraped: []
  references:
    - title: "Michael Müger, Introduction to Functional Analysis"
      url: "https://www.math.ru.nl/~mueger/functionalanalysis.pdf"
      locator: "Theorem B.18 and Definition B.20, printed pp.192-194"
pipeline_run: phase-2-next-18
---

## Example

Assume AC. A Banach mean determines a positive charge $\nu$ with

$$\nu(\mathbb N)=1,\qquad \nu(\{n\})=0\quad(n\in\mathbb N),$$

so $\nu$ is not countably additive.

## Facts & Assumptions

[A1] AC holds ([[def-axiom-of-choice]]).

[L1] Under AC there is a positive normalized shift-invariant mean $L$ on real
$\ell^\infty$ ([[thm-existence-of-a-shift-invariant-mean-on-bounded-sequences]]).

[L2] A bounded functional corresponds to the charge
$\nu(A)=L(\mathbf1_A)$ ([[thm-dual-of-ell-infinity-is-ba]]).

## Verification

**Proof technique:** direct.

**Given:** The objects and hypotheses in the Statement.

1.1 Use [A1] exactly through [L1] and define $\nu$ by [L2]. Positivity of $L$ [given, A1, L1, L2]
makes $\nu$ positive, and normalization gives
$\nu(\mathbb N)=L(\mathbf1)=1$. [A1, L1, L2]

2.1 Shift invariance makes all singleton masses equal, say to $c\ge0$. [given, L1, L2, step 1.1]
Finite additivity gives $Nc\le\nu(\mathbb N)=1$ for every positive integer
$N$, hence $c=0$. If $\nu$ were countably additive, the disjoint singleton
decomposition of $\mathbb N$ would give $\nu(\mathbb N)=\sum_n0=0$, a
contradiction. [L1, L2, step 1.1] ∎
