---
id: ex-shift-operators-on-classical-sequence-spaces
kind: example
title: "Forward and backward shifts on classical sequence spaces and their exact operator norms"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-operator-norm]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Example

On either of the normed spaces

$$c_0:=\{x=(x_n)_{n\ge 0}:x_n\to 0\}\qquad\text{or}\qquad \ell^\infty:=\{x=(x_n)_{n\ge 0}:\sup_n |x_n|<\infty\},$$

equipped with the supremum norm $\|x\|_\infty:=\sup_n |x_n|$, define the
forward and backward shifts by

$$F(x_0,x_1,x_2,\dots):=(0,x_0,x_1,\dots),$$
$$B(x_0,x_1,x_2,\dots):=(x_1,x_2,x_3,\dots).$$

Then $F$ and $B$ are bounded linear operators and

$$\|F\|=\|B\|=1.$$

## Facts & Assumptions

**Given:** One of the normed spaces $c_0$ or $\ell^\infty$ with the supremum norm, and a sequence $x=(x_n)_{n\ge 0}$ in that space.

[L2] A bounded linear operator is a linear map with a uniform norm bound ([[def-bounded-linear-operator]]).

[L3] The operator norm is the least global bound, equivalently the unit-ball supremum ([[def-operator-norm]]).

## Verification

**Proof technique:** direct.

1.1 On either space, $F$ and $B$ are linear by coordinatewise inspection. Also $\|Fx\|_\infty \le \|x\|_\infty$ and $\|Bx\|_\infty \le \|x\|_\infty$, so both operators are bounded with operator norm at most $1$ by [L2] and [L3]. [L2, L3]

2.1 The vectors $e_0=(1,0,0,\dots)$ and $e_1=(0,1,0,\dots)$ lie in both spaces. They satisfy $\|Fe_0\|_\infty=\|e_0\|_\infty=1$ and $\|Be_1\|_\infty=\|e_0\|_\infty=1$, so $\|F\| \ge 1$ and $\|B\| \ge 1$. [step 1.1]

3.1 Combining steps 1.1 and 2.1 gives $\|F\|=\|B\|=1$ on both $c_0$ and $\ell^\infty$. [step 1.1, step 2.1] ∎
