---
id: fs-every-irreducible-quintic-over-q-is-insoluble-by-radicals
kind: false-statement
title: "FALSE: every irreducible quintic over $\\mathbb Q$ is insoluble by radicals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-solvable-by-radicals, thm-eisenstein-irreducibility-criterion, cor-every-nonconstant-polynomial-has-a-root-in-an-extension]
justified_by: []
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
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Section 7"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Section 6.8"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: frontier-20
---

## Statement

**False claim:** every irreducible quintic over $\mathbb Q$ is insoluble by radicals.

## Facts & Assumptions

**Given:** The polynomial $q(x)=x^5-2$.

[L1] Eisenstein's criterion over $\mathbb Z$ ([[thm-eisenstein-irreducibility-criterion]]).

[L2] Every nonconstant polynomial has a root in some extension field ([[cor-every-nonconstant-polynomial-has-a-root-in-an-extension]]).

[L3] A polynomial is solvable by radicals when its splitting field is contained in a radical extension of the base field ([[def-solvable-by-radicals]]).

## Refutation

**Proof technique:** direct.

1.1 Eisenstein at the prime $2$ shows that $q(x)=x^5-2$ is irreducible over $\mathbb Q$, so it is an irreducible quintic. [L1, algebra]

1.2 By [L2], choose $s$ with $s^2=5$, choose $\beta$ over $\mathbb Q(s)$ with $$ \beta^2=\frac{-5-s}{2}, $$ and choose $\alpha$ with $\alpha^5=2$. Put $$ u:=\frac{-1+s}{2} \quad\text{and}\quad \zeta:=\frac{u+\beta}{2}. $$ Then $u^2+u-1=0$, $\zeta^2-u\zeta+1=0$, and therefore $$ \zeta+\zeta^{-1}=u. $$ Using $u^2+u-1=0$, this implies $$ \zeta^4+\zeta^3+\zeta^2+\zeta+1=0. $$ Since $\zeta \ne 1$, we get $\zeta^5=1$, so $\zeta$ is a primitive fifth root of unity. Thus every root of $q$ has the form $\alpha\zeta^k$ with $0 \le k < 5$, and all of them lie in $$ L:=\mathbb Q(s,\beta,\alpha). $$ [L2, construct, algebra]

2.1 The field tower $$ \mathbb Q \subseteq \mathbb Q(s) \subseteq \mathbb Q(s,\beta) \subseteq \mathbb Q(s,\beta,\alpha)=L $$ adjoins successively a square root of $5$, a square root of $(-5-s)/2$, and a fifth root of $2$. So $L/\mathbb Q$ is a radical extension. Step 1.2 shows that the splitting field of $q$ is contained in $L$, and [L3] therefore makes $q$ solvable by radicals. [L3, step 1.2]

3.1 Hence $x^5-2$ is an irreducible quintic over $\mathbb Q$ that is solvable by radicals, so the universal claim is false. [step 1.1, step 2.1] ∎
