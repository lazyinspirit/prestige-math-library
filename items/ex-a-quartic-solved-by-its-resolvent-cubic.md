---
id: ex-a-quartic-solved-by-its-resolvent-cubic
kind: example
title: "A quartic solved through its resolvent cubic"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-resolvent-cubic-of-a-monic-quartic, prop-resolvent-cubic-formula-and-discriminant]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "J. Ash, Basic Abstract Algebra, quartic examples"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
    - title: "J. S. Milne, Fields and Galois Theory, quartic resolvent examples"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Example

For

$$f(x)=x^4-10x^2+1,$$

the resolvent cubic is

$$R_f(y)=y^3+10y^2-4y-40=(y-2)(y+2)(y+10).$$

Taking the root $y=2$ leads to

$$x^2=5\pm2\sqrt6,$$

so the four roots are

$$\pm(\sqrt2+\sqrt3),\qquad \pm(\sqrt2-\sqrt3).$$

## Facts & Assumptions
**Given:** The quartic $f(x)=x^4-10x^2+1$.

[L1] For $x^4+ax^3+bx^2+cx+d$, the resolvent cubic is $y^3-by^2+(ac-4d)y-(a^2d+c^2-4bd)$ ([[prop-resolvent-cubic-formula-and-discriminant]]).

[L2] The roots of the resolvent are the three sums of products obtained from the three pairings of the four quartic roots ([[def-resolvent-cubic-of-a-monic-quartic]]).

## Verification

**Proof technique:** direct.

1.1 Here $a=0$, $b=-10$, $c=0$, and $d=1$, so [L1] gives $$R_f(y)=y^3+10y^2-4y-40.$$ Direct substitution shows that $y=2$ is a root, and polynomial division yields the displayed factorization. [L1, algebra]

2.1 Use the resolvent root $y=2$ to choose the pairing in [L2]. Seek a factorisation $$f(x)=(x^2+ux+v)(x^2-ux+w).$$ The paired products give $v+w=y=2$, while the constant term gives $vw=1$, so $v=w=1$. Comparing the $x^2$ coefficient gives $v+w-u^2=-10$, hence $u^2=12$. Taking $u=2\sqrt3$ yields $$f(x)=(x^2+2\sqrt3x+1)(x^2-2\sqrt3x+1).$$ [L2, step 1.1, algebra]

3.1 Solving the two quadratic factors in step 2.1 gives $-\sqrt3\pm\sqrt2$ and $\sqrt3\pm\sqrt2$, which are exactly $$\pm(\sqrt2+\sqrt3),\qquad \pm(\sqrt2-\sqrt3).$$ Thus the resolvent root leads to the four displayed quartic roots. [step 2.1, algebra] ∎
