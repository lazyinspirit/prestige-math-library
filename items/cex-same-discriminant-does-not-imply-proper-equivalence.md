---
id: cex-same-discriminant-does-not-imply-proper-equivalence
kind: counterexample
title: "Forms of discriminant $-24$ need not be properly equivalent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-discriminant-of-binary-quadratic-form, thm-proper-equivalence-preserves-representations, def-integer-represented-by-binary-quadratic-form]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "William Stein, Elementary Number Theory and Elliptic Curves, discussion after Proposition 9.2.8"
      url: "https://wstein.org/edu/Fall2002/124/stein/main-05-2003.pdf"
pipeline_run: null
---

## Statement refuted

Two integral binary quadratic forms with the same discriminant need not be
properly equivalent. The forms

$$f=(1,0,6)\qquad\text{and}\qquad g=(2,0,3)$$

both have discriminant $-24$, but they are not properly equivalent.

## Facts & Assumptions

**Given:** The forms $f=(1,0,6)$ and $g=(2,0,3)$.

[F1] The discriminant of $(a,b,c)$ is $b^2-4ac$ ([[def-discriminant-of-binary-quadratic-form]]).

[L1] Properly equivalent forms represent exactly the same integers ([[thm-proper-equivalence-preserves-representations]]).

[L2] A form represents $n$ when it takes the value $n$ at some integer pair ([[def-integer-represented-by-binary-quadratic-form]]).

## Counterexample

**Proof technique:** direct.

1.1 The discriminants are $0^2-4\cdot1\cdot6=-24$ and $0^2-4\cdot2\cdot3=-24$. [F1, given, algebra]

1.2 The form $f$ represents $1$, since $f(1,0)=1$. [L2, given, algebra]

1.3 The form $g$ does not represent $1$: if $g(x,y)=1$, then $2x^2+3y^2=1$, but $y\ne0$ would force the left-hand side to be at least $3$, while $y=0$ would give $2x^2=1$, impossible in integers. [L2, given, algebra]

2.1 Since $f$ and $g$ do not represent the same integers, [L1] shows that they are not properly equivalent. [L1, step 1.2, step 1.3] ∎
