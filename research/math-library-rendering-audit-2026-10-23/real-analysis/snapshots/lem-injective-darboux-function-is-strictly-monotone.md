---
id: lem-injective-darboux-function-is-strictly-monotone
kind: lemma
title: "An injective Darboux function on an interval is strictly monotone"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-interval, def-intermediate-value-property, def-monotone-function]
justified_by: []
aliases: []
landmark: false
proof_strategy: contradiction
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
pipeline_run: null
---

## Statement

An injective function $f:I\to\mathbb R$ on an interval $I$ with the intermediate value property is strictly monotone.

## Facts & Assumptions

**Given:** An injective Darboux function $f$ on an interval $I$.

[L1] The pointwise Darboux property in [[def-intermediate-value-property]] attains every value between $f(a)$ and $f(b)$ on $[a,b]$.

[L2] Strict monotonicity has the order formulations in [[def-monotone-function]].

## Proof

**Proof technique:** contradiction.

1.1 For any $a<b<c$ in $I$, $f(b)$ must lie strictly between $f(a)$ and $f(c)$. Indeed, if it lies above both, a value strictly between $\max\{f(a),f(c)\}$ and $f(b)$ is attained once in $(a,b)$ and once in $(b,c)$, contradicting injectivity; the case below both is analogous.  [assume-contra, L1, given]

2.1 Fix $a<b$. If $f(a)<f(b)$, step 1.1 forces $f(x)<f(y)$ for every $x<y$ in $I$; inserting points between or beyond $a,b$ proves all possible placements. If $f(b)<f(a)$, the symmetric argument gives strict decrease.  [step 1.1, L2, cases]

3.1 Injectivity excludes equality, so one of the two alternatives holds and $f$ is strictly monotone.  [step 2.1, discharge-contradiction] ∎
