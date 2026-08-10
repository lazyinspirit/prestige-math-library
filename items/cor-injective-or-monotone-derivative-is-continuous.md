---
id: cor-injective-or-monotone-derivative-is-continuous
kind: corollary
title: "An injective or monotone derivative on an interval is continuous"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-darboux-theorem-for-derivatives, lem-injective-darboux-function-is-strictly-monotone, lem-monotone-with-interval-image-is-continuous, def-monotone-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "Peer-reviewed article on injective Darboux functions (DOI Serbia)"
      url: "https://doiserbia.nb.rs/Article.aspx?id=1452-86302100024M"
    - title: "J. Lebl, Basic Analysis I, Mean value theorem"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
    - title: "J. Lebl, Basic Analysis I, Monotone functions"
      url: "https://www.jirka.org/ra/html/sec_monotonefunc.html"
pipeline_run: null
---

## Statement

Let $f$ be differentiable on an interval. If $f'$ is injective, or if $f'$ is monotone, then $f'$ is continuous.

## Facts & Assumptions

**Given:** The derivative $f'$ and one of the two stated hypotheses.

[L1] Every derivative has the intermediate value property ([[thm-darboux-theorem-for-derivatives]]).

[L2] An injective Darboux function is strictly monotone ([[lem-injective-darboux-function-is-strictly-monotone]]).

[L3] A nondecreasing function on an interval whose image is an interval is continuous ([[lem-monotone-with-interval-image-is-continuous]]); the increasing, decreasing, nondecreasing, and nonincreasing alternatives are those of [[def-monotone-function]].

## Proof

**Proof technique:** cases.

1.1 If $f'$ is injective, [L1] and [L2] make it strictly monotone. If it is increasing, [L1] and [L3] make it continuous; if it is decreasing, apply [L3] to $-f'$, whose interval images are the negatives of the interval images of $f'$.  [assume-case injective, L1, L2, L3]

1.2 If $f'$ is nondecreasing, [L1] and [L3] make it continuous. If it is nonincreasing, the same argument applied to $-f'$ gives continuity.  [assume-case monotone, L1, L3]

2.1 These are the two stated alternatives.  [step 1.1, step 1.2, cases-exhaustive] ∎
