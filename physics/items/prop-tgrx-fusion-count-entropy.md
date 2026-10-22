---
id: prop-tgrx-fusion-count-entropy
kind: proposition
title: Fusion path recursion and entropy
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 3
deps:
  - def-tgrx-finite-fusion-count-model
  - prop-tgrx-code-area-entropy
  - def-tgrx-sector-code
  - def-trace-of-an-endomorphism
  - thm-natural-logarithm-laws
dependency_roles:
  def-tgrx-finite-fusion-count-model: mathematical-premise
  prop-tgrx-code-area-entropy: mathematical-premise
  def-tgrx-sector-code: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
justified_by: []
aliases: []
forward_refs: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction, complete paper, Appendix A.7.2-A.7.3
      url: https://arxiv.org/pdf/1607.03901
      locator: Complete 62-page paper; Appendix A.7.2-A.7.3, PDF pp. 52-54, finite-dimensional sectors and entropy conventions.
    - title: John Watrous, The Theory of Quantum Information, complete author-hosted book manuscript
      url: https://jhwatrous.github.io/TQI.pdf
      locator: Complete 598-page book manuscript; Section 5.2, finite-dimensional entropy and density matrices.
---

## Statement

For a finite fusion transfer count model, let $e_0\in\mathbb R^I$ be the coordinate vector equal to $1$ at label $0$ and $0$ elsewhere, and define $v_n:=N^n e_0$. Then $v_0=e_0$, $v_{n+1}=Nv_n$, and the number of length-$n$ paths from $0$ to a label $a$ is $(v_n)_a=(N^n)_{a0}$. Whenever $D_n>0$, the operator $\rho_n=D_n^{-1}I_{\mathbb C^{D_n}}$ is a density matrix and has von Neumann entropy $s(\rho_n)=\log D_n$ in nats. For the supplied two-label matrix $N=\begin{pmatrix}0&1\\1&1\end{pmatrix}$, with labels ordered $0,1$, one has $D_0=1$, $D_1=0$, $D_2=1$, and $D_{n+2}=D_{n+1}+D_n$ for every $n\geq0$.

## Statement references

[[def-tgrx-finite-fusion-count-model]]

[[prop-tgrx-code-area-entropy]]

[[def-tgrx-sector-code]]

[[def-trace-of-an-endomorphism]]

[[thm-natural-logarithm-laws]]

[Daniel Harlow, The Ryu-Takayanagi Formula from Quantum Error Correction](https://arxiv.org/pdf/1607.03901)

[John Watrous, The Theory of Quantum Information](https://jhwatrous.github.io/TQI.pdf)

## Diagram convention

The diagram displays the two-label matrix only. An arrow $b\to a$ with label $m$ represents $N_{ab}=m$ transitions; the count proof below uses matrix multiplication and does not rely on the drawing.

```tikz
\begin{tikzpicture}[scale=0.9]
  \node[circle,draw] (v0) at (0,0) {$0$};
  \node[circle,draw] (v1) at (2,0) {$1$};
  \draw[->] (v0) .. controls (0.65,0.65) and (1.35,0.65) .. node[above] {$1$} (v1);
  \draw[->] (v1) .. controls (1.35,-0.65) and (0.65,-0.65) .. node[below] {$1$} (v0);
  \draw[->] (v1) .. controls (2.9,0.7) and (2.9,-0.7) .. node[right] {$1$} (v1);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite set $I$, label $0$, matrix $N$, and counts $D_n$ of the Definition, together with the displayed two-label specialization.

[F1] [[def-tgrx-finite-fusion-count-model]]: $N_{ab}$ counts transitions from $b$ to $a$, $(AB)_{ac}=\sum_{b\in I}A_{ab}B_{bc}$, $N^0=I_I$, $N^{n+1}=NN^n$, $D_n=(N^n)_{00}$, and $\rho_n=I_{H_n}/D_n$ is assigned only for $D_n>0$; its coordinate inner product is linear in the first argument and is $\langle x,y\rangle=\sum_jx_j\overline{y_j}$. The Definition verifies the inner-product axioms and defines real matrix addition and vector action by $(A+B)_{ab}=A_{ab}+B_{ab}$ and $(Ax)_a=\sum_bA_{ab}x_b$, using $\mathbb N\subset\mathbb R$ for the entries of $N$; it verifies compatibility of products and actions and distributivity.

[F2] [[def-tgrx-sector-code]]: a density matrix on a finite-dimensional complex inner-product space is self-adjoint, has nonnegative eigenvalues, and has trace one.

[F3] [[prop-tgrx-code-area-entropy]]: for a finite density matrix $\tau$, $s(\tau)=-\sum_{\lambda_j(\tau)>0}\lambda_j(\tau)\log\lambda_j(\tau)$, with $0\log0=0$ and natural logarithms, so entropy is in nats.

[F4] [[def-trace-of-an-endomorphism]]: the trace is the basis-independent sum of diagonal entries of a finite-dimensional endomorphism.

[F5] [[thm-natural-logarithm-laws]]: for $x>0$, $\log(1/x)=-\log x$ and $\log1=0$.

[A1] The two-label matrix is $N=\begin{pmatrix}0&1\\1&1\end{pmatrix}$ in the ordered basis $(0,1)$.

## Proof

1.1 For $n=0$, the unique path of length zero is the empty path from $0$ to $0$, and there is no length-zero path from $0$ to any $a\ne0$. Thus the number of length-zero paths from $0$ to $a$ is $(I_I)_{a0}=(N^0)_{a0}=(e_0)_a$. [given, F1, base]

1.2 If $D_n>0$, then $D_n$ is a positive integer and $\rho_n=D_n^{-1}I_{H_n}$ has eigenvalue $1/D_n$ with multiplicity $D_n$. Its trace is $D_n(1/D_n)=1$, and it is self-adjoint since $\langle\rho_n x,y\rangle=D_n^{-1}\langle x,y\rangle=\langle x,\rho_n y\rangle$ with the real scalar $D_n^{-1}$, and its eigenvalues are nonnegative; hence it is a density matrix by [F2]. Substitution into [F3] gives $s(\rho_n)=-D_n(1/D_n)\log(1/D_n)=\log D_n$ by [F5]. [F1, F2, F3, F4, F5, algebra]

2.1 Suppose for a fixed $n\geq0$ that the number of length-$n$ paths from $0$ to each $b\in I$ is $(N^n)_{b0}$. Every length-$(n+1)$ path from $0$ to $a$ has a unique penultimate label $b$ and a final transition copy from $b$ to $a$, so the number of such paths is $\sum_{b\in I}N_{ab}(N^n)_{b0}=(NN^n)_{a0}=(N^{n+1})_{a0}$ by the stated matrix-product and power conventions. Induction proves $(v_n)_a=(N^n)_{a0}$ for every $n\geq0$ and $a\in I$; in particular $v_0=e_0$ and $v_{n+1}=Nv_n$. [step 1.1, F1, algebra, induction, discharge-induction]

3.1 Under [A1], direct multiplication gives $N^2=\begin{pmatrix}1&1\\1&2\end{pmatrix}=N+I_I$. Therefore $D_0=1$, $D_1=0$, and $D_2=1$. From the power recursion and associativity, $N^{n+2}=N^2N^n=(N+I_I)N^n=N^{n+1}+N^n$ for every $n\geq0$; taking the $(0,0)$ entry proves $D_{n+2}=D_{n+1}+D_n$. [A1, F1, algebra] ∎
