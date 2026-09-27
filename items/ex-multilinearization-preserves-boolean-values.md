---
id: ex-multilinearization-preserves-boolean-values
kind: example
title: "A concrete multilinearization calculation"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-multilinearization-operator, lem-multilinearization-preserves-boolean-values, thm-z-mod-p-is-a-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct calculation
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "A. Shen, IP = PSPACE: Simplified Proof, JACM 39(4) 1992, pp. 878–880"
      url: "https://users.cs.fiu.edu/~giri/teach/5420/f01/IP_Pspace2.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, Remark 8.19, author-hosted draft"
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Example

Over $F=\mathbb Z/101$ let
$$P(x,z)=x^3z+2x^2+z.$$
Then $P(0,z)=z$ and $P(1,z)=2z+2$, so the multilinearization in the first variable is
$$R_xP=(1-x)\,z+x\,(2z+2)=z+x(z+2).$$
The polynomial $R_xP$ agrees with $P$ at $x=0$ and at $x=1$ for every value of $z$, its degree in $x$ is at most one, and it is exactly one precisely when $z\ne99$; its degree in $z$ is one, while the original $P$ has degree three in $x$.

## Facts & Assumptions

**Given:** The field $\mathbb Z/101$ and the polynomial $P(x,z)=x^3z+2x^2+z$.

[A1] The multilinearization in one variable is $R_XP=(1-X)(P|_{X=0})+X(P|_{X=1})$; substituting $X=0$ and $X=1$ into the right-hand side returns $P|_{X=0}$ and $P|_{X=1}$ ([[def-multilinearization-operator]]).

[A2] The reduction $R_XP$ agrees with $P$ wherever $x$ is Boolean, has degree at most one in $x$, and has degree in every other variable at most that of $P$ in that variable ([[lem-multilinearization-preserves-boolean-values]]).

[A3] The classes of $\mathbb Z/101$ form a field, so its arithmetic is addition and multiplication modulo $101$ and every nonzero residue is invertible ([[thm-z-mod-p-is-a-field]]).



## Verification

1.1 Substituting $x=0$ gives $P(0,z)=0+0+z=z$, and substituting $x=1$ gives $P(1,z)=z+2+z=2z+2$; both are computed in $\mathbb Z/101$ by [A3]. [A3, given, algebra]

2.1 By [A1] and step 1.1, $R_xP=(1-x)z+x(2z+2)=z-xz+2xz+2x=z+x(z+2)$, a polynomial of degree one in $x$ with $x$-coefficient $z+2$ and of degree one in $z$. [A1, step 1.1, algebra]

3.1 Evaluating the result of step 2.1 at the Boolean points: $R_xP(0,z)=z+0=z=P(0,z)$ and $R_xP(1,z)=z+z+2=2z+2=P(1,z)$, which is the agreement asserted in [A2]. [step 2.1, A2, algebra]

4.1 The coefficient of $x$ in $z+x(z+2)$ is $z+2$, which vanishes exactly when $z=-2\equiv99$ in $\mathbb Z/101$ by [A3]; hence the $x$-degree is one for $z\ne99$ and zero at $z=99$, and in either case it is at most one, as [A2] requires. The degree in $z$ is one, which does not exceed the $z$-degree one of $P$, and the degree in $x$ dropped from three to one while the values at the Boolean points were preserved. [step 3.1, A2, A3, algebra] ∎
