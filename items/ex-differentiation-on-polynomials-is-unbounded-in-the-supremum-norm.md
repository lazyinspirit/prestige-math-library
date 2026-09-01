---
id: ex-differentiation-on-polynomials-is-unbounded-in-the-supremum-norm
kind: example
title: "Differentiation on polynomials is unbounded for the supremum norm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
pipeline_run: frontier-28
---

## Example

Let $P[0,1]$ be the real polynomial functions on $[0,1]$ with the supremum
norm, and let

$$D:P[0,1]\to P[0,1],\qquad Dp:=p'.$$

Then $D$ is linear but not bounded for the supremum norm.

## Facts & Assumptions

**Given:** The differentiation operator $D$ on $P[0,1]$ and the polynomials
$p_n(x):=x^n$.

[L1] A bounded linear operator requires one constant $C$ such that
$\|Dp\|_\infty \le C\|p\|_\infty$ for every polynomial $p$
([[def-bounded-linear-operator]]).

## Verification

**Proof technique:** direct.

1.1 Differentiation is linear on polynomials. For each $n \ge 1$, $\|p_n\|_\infty=1$ on $[0,1]$, while $Dp_n(x)=nx^{n-1}$ and therefore $\|Dp_n\|_\infty=n$. [given, algebra]

2.1 If $D$ were bounded, [L1] would give a constant $C$ with $n=\|Dp_n\|_\infty \le C\|p_n\|_\infty = C$ for every $n \ge 1$, impossible. Hence $D$ is unbounded. [step 1.1, L1, assume-contra, discharge-contradiction] ∎
