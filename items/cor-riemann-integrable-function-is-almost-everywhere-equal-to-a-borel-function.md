---
id: cor-riemann-integrable-function-is-almost-everywhere-equal-to-a-borel-function
kind: corollary
title: "A Riemann integrable function on a closed bounded interval is almost everywhere equal to a Borel function"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: direct-corollary
deps: [lem-riemann-integrable-function-has-borel-darboux-envelopes, thm-nonnegative-integral-zero-iff-zero-almost-everywhere]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Richard F. Bass, Real Analysis for Graduate Students, Version 5.0, Section 9.1"
      url: "https://draft-r-bass-scholar.media.uconn.edu/wp-content/uploads/sites/3926/2024/12/real-analysis-for-graduate-students_version-50_accessible.pdf"
---

## Statement

Assume the Axiom of Countable Choice. Let $a<b$ and let $f:[a,b]\to\mathbb R$ be
Riemann integrable. Then there is a Borel function $g:[a,b]\to\mathbb R$ such
that $f=g$ almost everywhere on $[a,b]$.

## Facts & Assumptions

**Given:** The Axiom of Countable Choice, reals $a<b$, and a Riemann integrable
function $f:[a,b]\to\mathbb R$.

[L1] The envelope lemma gives bounded Borel functions $\varphi,\psi:[a,b]\to
\mathbb R$ with $\varphi\le f\le\psi$ and
$$\int_{[a,b]}(\psi-\varphi)\,d\lambda_1=0.$$
([[lem-riemann-integrable-function-has-borel-darboux-envelopes]])

[L2] A nonnegative measurable function has integral $0$ exactly when it
vanishes almost everywhere.
([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]])

## Proof

**Proof technique:** direct.

1.1 By [L1], choose bounded Borel functions $\varphi,\psi$ with [L1, L2]
$\varphi\le f\le\psi$ and
$$\int_{[a,b]}(\psi-\varphi)\,d\lambda_1=0.$$
Since $\psi-\varphi\ge0$, [L2] gives $\psi=\varphi$ almost everywhere on
$[a,b]$.

2.1 On the same full-measure set one has [step 1.1, L1]
$\varphi\le f\le\psi=\varphi$, so $f=\varphi$ almost everywhere. Taking
$g:=\varphi$ proves the claim, and $g$ is Borel by step 1.1. ∎
