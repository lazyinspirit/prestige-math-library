---
id: rem-external-separable-trace-class-fredholm-determinant-theorem
kind: remark
title: Separable trace-class determinant theorem recorded externally
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
proved_here: false
deps: [def-axiom-of-choice, def-trace-class-operator, def-absolute-value-and-singular-values-of-a-compact-operator]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
verification:
  sources_checked:
    date: 2026-09-22
    scope: citations
    by: owner-audit
  precheck: n/a
sources:
  references:
    - title: "Aleksey Kostenko, Trace Ideals with Applications — Section 3.4, printed pp. 34–41"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
external_dependency:
  source_url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
  exact_statement: "Assume AC. For every trace-class operator A on a separable complex Hilbert space K, including K={0}, the nonzero eigenvalues lambda_j(A), listed with finite algebraic multiplicity dim union_m ker(A-lambda I)^m, satisfy sum_j |lambda_j(A)|<=||A||1. There is an entire determinant D_A(z), equal locally uniformly to product_j(1+z lambda_j(A)) and to the locally uniform trace-norm limit of ordinary finite-rank determinants. It has D_A(0)=1, D_A'(0)=tr_K(A), singular-value and minimal-exponential-type growth, the stated trace-norm continuity bound, multiplicativity D_(A+B+AB)(1)=D_A(1)D_B(1), and zeros exactly where I+zA is not invertible, with zero order equal to algebraic multiplicity. Finite and empty eigenvalue lists use empty product 1 and empty sum 0."
  local_proof_attempt: "Current SVD, nuclear trace, trace-ideal and Riesz suppliers establish finite-rank approximation and separable support, but do not establish the exterior-power determinant estimates, nonnormal Weyl eigenvalue summability, determinant zero multiplicities, or minimal-type factorization. A complete local construction would require the separate prescribed determinant module; these precise separable determinant assertions are recorded externally under owner authorization."
  necessity: "Supplies the approximation-independent separable determinant and its spectral product for the local arbitrary-Hilbert-space extension and the general nonnormal Lidskii trace formula. The existing positive/self-adjoint trace theorem is insufficient."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K$ be a separable
complex Hilbert space, including the zero space, and let
$A\in\mathcal S_1(K)$ ([[def-trace-class-operator]]). For every nonzero
eigenvalue $\lambda$ of $A$, its **algebraic multiplicity** is
$$
\dim\left(\bigcup_{r\geq1}\ker(A-\lambda I)^r\right),
$$
where the increasing generalized kernels stabilize and this dimension is
finite. List all nonzero eigenvalues $(\lambda_j(A))$ with those
multiplicities; the list is finite or countable and may be empty. With
$(s_j(A))$ the singular values
([[def-absolute-value-and-singular-values-of-a-compact-operator]]), the
following results are recorded externally.

1. The eigenvalues are absolutely summable and
   $$\sum_j|\lambda_j(A)|\leq\|A\|_1.$$
2. There is an entire function $D_A$ such that, locally uniformly in $z$,
   $$D_A(z)=\prod_j(1+z\lambda_j(A)).$$
   The empty product is $1$ and the empty eigenvalue sum is $0$.
3. If finite-rank $A_n$ satisfy $\|A_n-A\|_1\to0$, then
   $\det(I+zA_n)\to D_A(z)$ locally uniformly. For finite-rank $F$, this is
   the ordinary determinant of $(I+zF)|_E$ for any finite-dimensional
   subspace $E$ containing $\operatorname{ran}F$; it is independent of $E$.
4. One has
   $$ D_A(0)=1,\qquad D_A'(0)=\operatorname{tr}_K(A),\qquad |D_A(z)|\leq\prod_j(1+|z|s_j(A))\leq e^{|z|\|A\|_1}. $$
   For every $\varepsilon>0$ there is $C_\varepsilon$ with
   $|D_A(z)|\leq C_\varepsilon e^{\varepsilon|z|}$.
5. For $A,B\in\mathcal S_1(K)$,
   $$ |D_A(z)-D_B(z)|\leq |z|\|A-B\|_1 e^{1+|z|\|A\|_1+|z|\|B\|_1}, $$
   and $D_{A+B+AB}(1)=D_A(1)D_B(1)$.
6. The value $D_A(z)$ vanishes exactly when $I+zA$ is not boundedly
   invertible. If $\lambda\neq0$ is an eigenvalue, then $-1/\lambda$ is a
   zero of order equal to its algebraic multiplicity.

These assertions include the zero-space conventions: its unique operator has
determinant identically $1$, trace $0$, and an empty eigenvalue list.

## Remarks

This is a source-backed external theorem, not a local exterior-power or
Hadamard-factorization proof. In the cited proof of the zero criterion, the
complementary factor is $I+z(I-P_\lambda)A$; a printed omission of $A$ in one
sentence is not copied here.
