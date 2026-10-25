---
id: ex-a-level-two-cyclotomic-polynomial-from-highest-weight-filtration
kind: example
title: "A level-two cyclotomic polynomial from the highest-weight filtration"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 10
deps: [lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient,
       def-degenerate-cyclotomic-hecke-algebra,
       def-arakawa-suzuki-casimir-operators-on-tensor-functors, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, Schur-Weyl duality for higher levels, Selecta Math. (N.S.) 14 (2008) 1-57 (complete 50-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0605217"
      locator: "Lemma 3.3, Lemma 3.4 and Lemma 3.5, printed pp. 13-15: the explicit action of x_1 on V_c^tensor d, its minimal polynomial with roots c_j+q_j-n, and the dimension of the cyclotomic quotient; the computation below specializes these to p=(1,2), q=(2,1), c=(0,0)."
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Section 3.2, (3.7)-(3.8), printed pp. 23-24: the quotient H_d(Λ) with the bounded monomial basis and dimension l^d d!."
verification:
  precheck: pass
---

## Example

Assume the inherited Axiom of Choice. Take source-ordered row lengths $p=(1,2)$, so the column heights are
$q=(2,1)$, and let $N=3$, $n=2$, $c=(0,0)$. Number the boxes down the columns:
$1=(1,1)$, $2=(2,1)$, $3=(2,2)$. The pyramid nilpotent is $e=E_{23}$, and on
the one-step deformed tensor space $V_c^{\otimes1}=V=\mathbb C^3$ the operator
$x_1$ is
$$x_1=E_{23}+\operatorname{diag}(0,0,-1).$$
Its eigenvalue $0$ has multiplicity $2$ and eigenvalue $-1$ has multiplicity
$1$, with $-1$-eigenspace $\mathbb C(v_3-v_2)$; its minimal polynomial is
$x(x+1)$, with roots $a=(0,-1)$, and
$\Lambda=\Lambda_0+\Lambda_{-1}$. For every $d\ge1$ the raw tensor operator
$x_1$ on $V_c^{\otimes d}$ still has exactly this minimal polynomial, by the
column-filtration and leading-string argument. Consequently
$H_d(\Lambda)$ has dimension $2^dd!$, and at $d=1$ its image splits the two
stated eigenspaces.

## Facts & Assumptions

**Given:** The pyramid with columns $q=(2,1)$, $n=2$, $N=3$, origin $c=(0,0)$, the numbers $a=(0,-1)$, and the operator $x_1$ on $V_c^{\otimes d}$.

[F1] On the raw tensor space the operator $x_1$ is $\bigl(e+\sum_j(c_{\mathrm{col}(j)}+q_{\mathrm{col}(j)}-n)e_{j,j}\bigr)\otimes1^{\otimes(d-1)}$ minus its off-diagonal cross-column corrections; its minimal polynomial on $V_c^{\otimes d}$ is exactly $\prod_j(x-a_j)$ with $a_j=c_j+q_j-n$, and the tensor action of $H_d$ factors through $H_d(\mathbf a)$ ([[lem-the-parabolic-highest-weight-truncation-factors-through-the-cyclotomic-quotient]], [[def-arakawa-suzuki-casimir-operators-on-tensor-functors]]).

[F2] The cyclotomic quotient $H_d(\mathbf a)$ of the degenerate affine Hecke algebra at the roots $\mathbf a=(0,-1)$ has the bounded monomial basis $x_1^{r_1}\cdots x_d^{r_d}w$, $0\le r_i<2$, $w\in S_d$, so that $\dim H_d(\mathbf a)=2^dd!$; the pyramid roots are $a_j=c_j+q_j-n$, and the integral-root dictionary gives $\Lambda=\Lambda_0+\Lambda_{-1}$ ([[def-degenerate-cyclotomic-hecke-algebra]]).

## Proof

**Proof technique:** direct.

**Given:** The boxes $1=(1,1)$, $2=(2,1)$, $3=(2,2)$, the nilpotent $e=E_{23}$, and the roots $a_1=0+2-2=0$, $a_2=0+1-2=-1$.

1.1 The operators on $V$. For $d=1$ the cross-column correction in [F1] is absent and $\sum_j(c_{\mathrm{col}(j)}+q_{\mathrm{col}(j)}-n)e_{j,j}=\operatorname{diag}(0,0,-1)$, so $x_1=E_{23}+\operatorname{diag}(0,0,-1)$: explicitly $x_1v_1=0$, $x_1v_2=0$ and $x_1v_3=v_2-v_3$. Hence $x_1(x_1+1)=0$, the eigenspaces of $x_1$ are $\mathbb C v_1\oplus\mathbb C v_2$ for the eigenvalue $0$ and $\mathbb C(v_3-v_2)$ for the eigenvalue $-1$, and the minimal polynomial is exactly $x(x+1)$: $x_1\neq0$ since $x_1v_3=v_2-v_3\neq0$, and $x_1+1\neq0$ since $(x_1+1)v_1=v_1\neq0$. [F1, algebra]

2.1 All degrees and the cyclotomic quotient. By the minimal-polynomial clause of [F1], the operator $x_1$ on $V_c^{\otimes d}$ has minimal polynomial $\prod_j(x-a_j)=x(x+1)$ for every $d\ge1$, so the tensor action factors through $H_d(\mathbf a)$ with $\mathbf a=(0,-1)$, i.e. through $H_d(\Lambda)$ for $\Lambda=\Lambda_0+\Lambda_{-1}$; and by [F2] that quotient has dimension $2^dd!$. At $d=1$ the quotient is $\mathbb C[x]/(x(x+1))\cong\mathbb C\times\mathbb C$, acting on $V$ through $x_1$ as the two-dimensional algebra of operators that are scalar on each of the two eigenspaces of step 1.1; hence the image is semisimple and $V$ is the direct sum of those two eigenspaces. [F1, F2, step 1.1, algebra] ∎

## Remarks

- The two roots $0$ and $-1$ are exactly the column scalars $c_j+q_j-n$ of the two columns; the example shows how the highest-weight (column) filtration of the ground module produces the level-two cyclotomic polynomial $x(x+1)$.
- The ordered-row dictionary matters here: the row lengths are read in the source order $p=(1,2)$ with column heights $q=(2,1)$, so box $3$ is the rightmost box of the second row and $e=E_{23}$; a different box numbering would produce a different matrix for $x_1$.

The numbered shape below fixes the source row order. The labels above the
columns are the diagonal scalars $a_j=c_j+q_j-n$; the arrow shows the
nilpotent $e$, not the full operator $x_1$.

```tikz
\begin{tikzpicture}[x=1.7cm,y=1.25cm,>=stealth]
\node at (0.5,1.55) {$a_1=0$};
\node at (1.5,1.55) {$a_2=-1$};
\node[anchor=east] at (-0.15,0.5) {row $1$};
\node[anchor=east] at (-0.15,-0.5) {row $2$};
\draw (0,0) rectangle (1,1);
\draw (0,-1) rectangle (1,0);
\draw (1,-1) rectangle (2,0);
\node at (0.5,0.5) {$1:\ v_1$};
\node at (0.5,-0.5) {$2:\ v_2$};
\node at (1.5,-0.5) {$3:\ v_3$};
\draw[->] (1.5,-1) .. controls (1.5,-1.75) and (0.5,-1.75) .. (0.5,-1);
\node at (1,-1.85) {$e(v_3)=v_2$};
\end{tikzpicture}
```

Here $e(v_1)=e(v_2)=0$, while the diagonal contribution is $0$ on the
first column and $-1$ on the second. Thus the arrow together with the column
scalars gives $x_1v_3=v_2-v_3$; $v_3$ itself is not a $-1$ eigenvector.
The eigenspaces are $\ker x_1=\mathbb Cv_1\oplus\mathbb Cv_2$ and
$\ker(x_1+1)=\mathbb C(v_3-v_2)$, as computed in step 1.1.
The figure is illustrative; the proof above is independent of it.
