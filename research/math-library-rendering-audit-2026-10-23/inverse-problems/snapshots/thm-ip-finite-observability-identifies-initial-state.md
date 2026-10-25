---
id: thm-ip-finite-observability-identifies-initial-state
kind: theorem
title: Finite observability identifies the initial state
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 1
deps:
  - def-ip-discrete-linear-input-state-output-experiment
  - def-rank-and-nullity
  - thm-rank-nullity
  - thm-matrix-multiplication-laws
  - thm-singular-value-decomposition
  - cor-rank-equals-number-of-nonzero-singular-values
  - def-moore-penrose-pseudoinverse
  - thm-moore-penrose-pseudoinverse-exists-and-is-unique
  - prop-full-column-rank-pseudoinverse-formula
  - thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces
  - thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution
  - lem-pythagorean-theorem-and-finite-orthogonal-sums
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: No choice principle is used; the proof uses finite-dimensional linear algebra.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.3, observability and realization setup, PDF pp. 5–6"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, output stack and observability matrix, PDF p. 6"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $d\ge0$, $m,p\ge1$, and $q\ge1$ be integers,
and consider a real discrete input-state-output experiment with known matrices
$A,B,C$, known inputs $u_0,\ldots,u_{q-2}$, and unknown initial state $x_0$. For
$0\le k<q$, set
$$f_0:=0,\qquad f_k:=\sum_{j=0}^{k-1}CA^{k-1-j}Bu_j\quad(k\ge1),$$
and define the finite observability matrix $$O_q:=\begin{bmatrix}C\\CA\\ \vdots\\CA^{q-1}\end{bmatrix}.$$ The corrected noiseless output stack is $$z:=\begin{bmatrix}y_0-f_0\\y_1-f_1\\ \vdots\\y_{q-1}-f_{q-1}\end{bmatrix}=O_qx_0.$$
The map $x_0\mapsto z$ is injective if and only if
$\operatorname{rank}O_q=d$. If $d=0$, both injectivity and the rank condition
hold for the singleton state space. If $d\ge1$ and $O_q$ has full column rank,
let $\sigma_{\min}(O_q)>0$ be its least singular value. For any additive stacked
observation error $e\in\mathbb R^{qp}$, the minimum-norm least-squares estimate
of $x_0$ from $z+e$ is $\widehat x_0=O_q^+(z+e)$, and it satisfies
$$\|\widehat x_0-x_0\|_2\le\frac{\|e\|_2}{\sigma_{\min}(O_q)}.$$

## Statement references

[[def-ip-discrete-linear-input-state-output-experiment|Finite-horizon recurrence and exact observation convention]]

[[def-rank-and-nullity|Rank as the dimension of the image]]

[[thm-rank-nullity|Rank-nullity for finite-dimensional domains]]

[[thm-singular-value-decomposition|Finite-dimensional singular-value decomposition]]

[[cor-rank-equals-number-of-nonzero-singular-values|Rank equals the number of positive singular values]]

[[def-moore-penrose-pseudoinverse|Finite-matrix Moore--Penrose pseudoinverse]]

[[thm-moore-penrose-pseudoinverse-exists-and-is-unique|Existence and uniqueness of the pseudoinverse]]

[[prop-full-column-rank-pseudoinverse-formula|Full-column-rank pseudoinverse identity]]

[[thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces|The product $OO^+$ is an orthogonal projection]]

[[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution|The pseudoinverse gives the minimum-norm least-squares solution]]

[[lem-pythagorean-theorem-and-finite-orthogonal-sums|Pythagoras for orthogonal vectors]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, Chapter 25](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, Engr207c lecture notes](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)

## Facts & Assumptions

**Given:** A real discrete experiment of horizon $q$ with known matrices $A,B,C$, known inputs $u_0,\ldots,u_{q-2}$, unknown initial state $x_0$, and a stacked additive error $e\in\mathbb R^{qp}$.

[F1] [[def-ip-discrete-linear-input-state-output-experiment]]: states obey $x_{k+1}=Ax_k+Bu_k$, outputs obey $y_k=Cx_k$, and observation errors are additive deterministic vectors.

[F2] [[thm-matrix-multiplication-laws]]: compatible matrix products are associative, identity matrices act on either side, and multiplication distributes over finite sums.

[F3] [[def-rank-and-nullity]]: $\operatorname{rank}T=\dim(\operatorname{im}T)$ and $\operatorname{nullity}T=\dim(\ker T)$ for finite-dimensional domains.

[F4] [[thm-rank-nullity]]: for a linear map with finite-dimensional domain, $\dim V=\operatorname{nullity}T+\operatorname{rank}T$.

[F5] [[thm-singular-value-decomposition]]: a linear map between finite-dimensional real or complex inner-product spaces has orthonormal left and right singular bases, with its positive singular values ordered nonincreasingly.

[F6] [[cor-rank-equals-number-of-nonzero-singular-values]]: the rank equals the number of positive singular values.

[F7] [[def-moore-penrose-pseudoinverse]]: $O^+$ satisfies $OO^+O=O$, $O^+OO^+=O^+$, and $OO^+$ and $O^+O$ are self-adjoint.

[F8] [[thm-moore-penrose-pseudoinverse-exists-and-is-unique]]: every finite real matrix has a unique Moore--Penrose pseudoinverse.

[F9] [[prop-full-column-rank-pseudoinverse-formula]]: if $O$ has full column rank, then $O^+O=I_d$.

[F10] [[thm-aa-plus-and-a-plus-a-are-orthogonal-projections-onto-the-image-spaces]]: $OO^+$ is the orthogonal projection onto $\operatorname{im}O$.

[F11] [[thm-a-plus-b-is-the-unique-minimum-norm-least-squares-solution]]: for a finite real matrix $O$ and vector $b$, $O^+b$ is the unique least-squares solution of minimum Euclidean norm.

[F12] [[lem-pythagorean-theorem-and-finite-orthogonal-sums]]: if $a$ and $b$ are orthogonal, then $\|a+b\|_2^2=\|a\|_2^2+\|b\|_2^2$.

## Proof

**Proof technique:** direct.

1.1 For each $0\le k<q$, the recurrence gives $x_k=A^kx_0+\sum_{j=0}^{k-1}A^{k-1-j}Bu_j$, with the sum empty at $k=0$. At $k=0$ this is $x_0=A^0x_0$. If it holds at $k<q-1$, substitution into $x_{k+1}=Ax_k+Bu_k$ and the power recursion give the formula at $k+1$, using associativity and distributivity from [F2]. Multiplying by $C$ and subtracting $f_k$ gives $y_k-f_k=CA^kx_0$, so stacking yields $z=O_qx_0$. [given, F1, F2, algebra]

1.2 Suppose $d\ge1$ and $O_q$ has full column rank. By [F5] and [F6], an SVD has exactly $d$ positive singular values $s_1\ge\cdots\ge s_d=\sigma_{\min}(O_q)>0$. Writing $w$ in the right singular basis gives $\|O_qw\|_2^2=\sum_{j=1}^d s_j^2|w_j|^2\ge\sigma_{\min}(O_q)^2\|w\|_2^2$. [given, F5, F6, algebra]

2.1 Two states $x,x'\in\mathbb R^d$ produce the same corrected stack exactly when $O_q(x-x')=0$. Thus injectivity is equivalent to $\ker O_q=\{0\}$. By [F3] and [F4], this is equivalent to $\operatorname{rank}O_q=d$. When $d=0$, the map has a singleton domain and the empty matrix has rank zero, so the same equivalence holds. [given, F3, F4, step 1.1, algebra]

2.2 By [F7] and [F8], $O_q^+$ is the unique Moore--Penrose inverse. Set $\widehat x_0=O_q^+(z+e)$; [F11] identifies it as the minimum-norm least-squares estimate, and [F9] with $z=O_qx_0$ gives $w:=\widehat x_0-x_0=O_q^+e$. Hence $O_qw=O_qO_q^+e$. By [F10], this is an orthogonal projection of $e$; the decomposition $e=O_qO_q^+e+(e-O_qO_q^+e)$ has orthogonal summands, so [F12] gives $\|O_qw\|_2\le\|e\|_2$. [given, F7, F8, F9, F10, F11, F12, step 1.1, algebra]

3.1 Combining steps 1.2 and 2.2 gives $\sigma_{\min}(O_q)\|\widehat x_0-x_0\|_2\le\|O_q(\widehat x_0-x_0)\|_2\le\|e\|_2$. Division by the positive singular value proves the claimed sensitivity bound; step 2.1 proves the injectivity assertion. [step 1.2, step 2.2, step 2.1, algebra] ∎
