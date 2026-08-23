---
id: thm-smith-normal-form-uniqueness-via-determinantal-divisors
kind: theorem
title: "Smith normal form is unique through the gcds of its minors"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-determinantal-divisors-of-a-matrix-over-a-pid, thm-smith-normal-form-existence-over-a-pid, thm-determinant-is-the-unique-normalized-alternating-multilinear-function]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "M. Brussel, Finitely Generated Modules over a PID, Theorem 2.1.6"
      url: "https://content-calpoly-edu.s3.amazonaws.com/math/1/images/FG%20Modules%20Over%20A%20PID.pdf"
    - title: "A. Apisa, Wisconsin Math 542, Theorem 27"
      url: "https://people.math.wisc.edu/~apisa/notes542.pdf"
pipeline_run: null
---

## Statement

Smith normal form is unique and its entries are recovered from successive determinantal divisors. If a matrix has nonzero Smith entries $d_1\mid\cdots\mid d_r$, then, up to associates,

$$\Delta_k=d_1\cdots d_k\quad(0\le k\le r),\qquad \Delta_k=0\quad(k>r),$$

and $d_k$ is the successive quotient $\Delta_k/\Delta_{k-1}$.

## Facts & Assumptions

**Given:** Determinantal ideals and divisors from [[def-determinantal-divisors-of-a-matrix-over-a-pid]], including $D_0=R$; determinant multilinearity and alternation ([[thm-determinant-is-the-unique-normalized-alternating-multilinear-function]]).

[L1] Every rectangular matrix over a PID is equivalent to a Smith diagonal matrix ([[thm-smith-normal-form-existence-over-a-pid]]).

## Proof

**Proof technique:** direct.

1.1 Every $k$-minor of $PA$ is an $R$-linear combination of $k$-minors of $A$ by determinant multilinearity, so $D_k(PA)\subseteq D_k(A)$; applying the same argument to $P^{-1}$ gives equality. Right multiplication is identical. Thus equivalent matrices have the same determinantal ideals. [given, algebra]

1.2 For a Smith diagonal matrix with $d_1\mid\cdots\mid d_r$, every nonzero $k$-minor is a product of $k$ diagonal entries and is divisible by $d_1\cdots d_k$, while the leading $k$-minor equals that product. Hence $\Delta_k$ is associate to $d_1\cdots d_k$ for $k\le r$ and is $0$ for $k>r$. [L1, algebra]

2.1 Step 1.1 makes the $\Delta_k$ invariants of equivalence. Step 1.2 recovers $r$ as the last nonzero index and recovers each $d_k$ up to a unit from successive products, proving uniqueness. It includes $k=0$, zero matrices, one-by-one matrices, and all rectangular ranks. [step 1.1, step 1.2] ∎
