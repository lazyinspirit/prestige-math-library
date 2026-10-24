---
id: ex-zero-second-derivative-extremum-trichotomy
kind: example
title: "The functions $x^4$, $-x^4$, and $x^3$ show that $f''(0)=0$ is inconclusive"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-zero-second-derivative-decides-extremum, thm-first-nonzero-derivative-test, lem-derivative-of-a-power, lem-power-monotone, def-integer-power]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "MIT OpenCourseWare 18.100B Real Analysis, Spring 2025 lecture notes"
      url: "https://ocw.mit.edu/courses/18-100b-real-analysis-spring-2025/resources/lecture-notes/"
    - title: "J. Lebl, Basic Analysis I, Taylor's theorem and related calculus"
      url: "https://www.jirka.org/ra/html/sec_taylor.html"
    - title: "University of Minnesota MATH 5615, higher derivative test"
      url: "https://www-users.cse.umn.edu/~voronov/5615-20/pdfs/12-2-1.pdf"
pipeline_run: null
---

## Example

At $0$, the functions $x^4$, $-x^4$, and $x^3$ all have first and second derivative $0$, but respectively have a strict minimum, a strict maximum, and no extremum.

## Facts & Assumptions

**Given:** The three polynomial functions.

[L1] The false second-derivative claim is [[fs-zero-second-derivative-decides-extremum]].

[L2] The first nonzero derivative test is [[thm-first-nonzero-derivative-test]], with power differentiation from [[lem-derivative-of-a-power]].

## Verification

**Proof technique:** direct.

1.1 Direct differentiation gives common first and second derivative data $0,0$ at the origin.  [L2, algebra]

1.2 The fourth derivative is first nonzero for $\pm x^4$, with opposite signs; the third derivative is first nonzero for $x^3$.  [L2, algebra]

2.1 The even and odd cases of [L2] yield the three stated behaviours, explicitly realizing [L1].  [step 1.1, step 1.2, L1, L2] ∎
