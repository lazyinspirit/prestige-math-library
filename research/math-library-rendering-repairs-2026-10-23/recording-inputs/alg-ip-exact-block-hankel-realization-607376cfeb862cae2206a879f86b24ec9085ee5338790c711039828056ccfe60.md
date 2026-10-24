---
id: alg-ip-exact-block-hankel-realization
kind: algorithm
title: Exact block-Hankel realization
status: published
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
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
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

## Remarks

On the successful branch, the two diagrams show the factorization in step 2
and the composition defining $\widehat A$ in step 4. Arrow labels denote
linear maps acting on column vectors; consecutive arrows compose from left
to right.

```tikz
\begin{tikzpicture}[>=stealth]
\node (u) at (0,0) {$\mathbb R^{qm}$};
\node (x) at (4,0) {$\mathbb R^d$};
\node (y) at (8,0) {$\mathbb R^{qp}$};
\draw[->] (u) -- node[below] {$\widehat R$} (x);
\draw[->] (x) -- node[below] {$\widehat O$} (y);
\draw[->] (u) to[bend left=30] node[above] {$H_0=\widehat O\widehat R$} (y);
\node (a) at (0,-3) {$\mathbb R^d$};
\node (b) at (3,-3) {$\mathbb R^{qm}$};
\node (c) at (6,-3) {$\mathbb R^{qp}$};
\node (e) at (9,-3) {$\mathbb R^d$};
\draw[->] (a) -- node[above] {$\widehat R^+$} (b);
\draw[->] (b) -- node[above] {$H_1$} (c);
\draw[->] (c) -- node[above] {$\widehat O^+$} (e);
\draw[->] (a) to[bend right=30] node[below] {$\widehat A=\widehat O^+H_1\widehat R^+$} (e);
\end{tikzpicture}
```

Here $\widehat B:\mathbb R^m\to\mathbb R^d$ restricts $\widehat R$ to the
first input block, and $\widehat C:\mathbb R^d\to\mathbb R^p$ takes the
first output block of $\widehat O$, exactly as in step 4. Both diagrams also
apply for $d=0$, using the stated empty-matrix convention. They illustrate
only the specified operations; in particular they do not assert
$H_1=\widehat O\widehat A\widehat R$ for arbitrary input data. The algorithm
specification is independent of the diagrams.
