---
id: alg-ip-exact-block-hankel-realization
kind: algorithm
title: Exact block-Hankel realization
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - def-rank-and-nullity
  - thm-singular-value-decomposition
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - thm-matrix-multiplication-laws
justified_by: []
aliases: []
axiom_use: No choice principle is used; the algorithm applies finite-dimensional exact linear-algebra operations.
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.4, Theorem 25.3 proof (Hankel factorization and pseudoinverse), PDF pp. 7–8; Exercise 25.4(a)–(e), Markov-parameter construction, PDF p. 12"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, Hankel factorization and realization context; §9.3, PDF pp. 5–8"
verification:
  precheck: n/a
---

## Definition

Fix integers $d\ge0$, $m,p\ge1$, and $q\ge1$. The input is a list of exact
Markov matrices
$$M_0,\ldots,M_{2q-1}\in M_{p\times m}(\mathbb R).$$
Use the exact-real linear-algebra model: an exact rank test returns the rank of
a finite real matrix; a thin rank-$d$ singular-value decomposition of a
rank-$d$ matrix $H_0$ returns $H_0=U_d\Sigma_dV_d^{\mathsf T}$ with
$\Sigma_d$ diagonal and strictly positive, and an exact Moore--Penrose routine
returns a matrix satisfying the four Penrose equations. A routine failure or a
returned object that fails its stated exact identities is reported explicitly.
This specification makes no finite-bit computability or complexity claim for
arbitrary real inputs.

Form the $q$-by-$q$ block Hankel matrices
$$H_0=[M_{i+j}]_{0\le i,j<q},\qquad H_1=[M_{i+j+1}]_{0\le i,j<q},$$
each of shape $qp$ by $qm$. Execute the following steps.

1. Apply the exact rank test to $H_0$. If it fails, return
   `failed-solve`; if its value is not $d$, return `inconsistent-rank-data`.

2. If $d=0$, use the empty factorization $H_0=\widehat O\widehat R$ with
   $\widehat O$ of shape $qp$ by $0$ and $\widehat R$ of shape $0$ by $qm$.
   If $d>0$, obtain the thin rank-$d$ SVD in the declared exact model and set
   $$\widehat O:=U_d\Sigma_d^{1/2},\qquad \widehat R:=\Sigma_d^{1/2}V_d^{\mathsf T}.$$
   Verify $H_0=\widehat O\widehat R$, $\operatorname{rank}\widehat O=d$,
   and $\operatorname{rank}\widehat R=d$; if any operation or verification
   fails, return `failed-solve`.

3. Compute the exact Moore--Penrose inverses $\widehat O^+$ and
   $\widehat R^+$ and verify their four Penrose equations. If a computation or
   verification fails, return `failed-solve`.

4. Set $\widehat A:=\widehat O^+H_1\widehat R^+$, let $\widehat B$ be the first $m$ columns of $\widehat R$, and let $\widehat C$ be the first $p$ rows of $\widehat O$. Return `success` with $(\widehat A,\widehat B,\widehat C)$. For $d=0$,
   these are the corresponding empty matrices.

The routine can report `failed-solve` for a failed or invalid exact-operation
backend. The existence theorems for finite-matrix SVDs and Moore--Penrose
inverses ensure that the exact mathematical operations requested in steps 2–3
exist; this definition alone asserts no noisy rank selection or stable
parameter recovery.

## Definition references

[[def-ip-discrete-linear-input-state-output-experiment|Markov parameter convention $M_k=CA^kB$]]

[[def-rank-and-nullity|Rank of a finite-dimensional linear map]]

[[thm-singular-value-decomposition|Finite-dimensional singular-value decomposition]]

[[def-moore-penrose-pseudoinverse|Four Penrose equations]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique|Existence and uniqueness of the finite-matrix pseudoinverse]]

[[thm-matrix-multiplication-laws|Finite matrix product laws]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, Chapter 25](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, Engr207c lecture notes](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)
