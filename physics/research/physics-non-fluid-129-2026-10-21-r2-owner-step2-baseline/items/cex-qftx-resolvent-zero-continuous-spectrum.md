---
id: cex-qftx-resolvent-zero-continuous-spectrum
kind: counterexample
domain: mathematics
library: mathematics
title: Injective resolvents need not be bounded below
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-qftx-positive-unbounded-spectral-calculus
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-qftx-positive-unbounded-spectral-calculus: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John Baez, Quantum Theory and Analysis, §5, The Spectral Theorem—Unbounded Case"
      url: "https://math.ucr.edu/home/baez/quantum_theory_and_analysis/Q.pdf"
      locator: "§5, PDF pp.14–20: the distinction between spectral support, point spectrum and the bounded-resolvent reduction."
    - title: "Princeton University MAT520 Functional Analysis Lecture Notes, §11.5"
      url: "https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2023/MAT520_Lecture_Notes.pdf"
      locator: "§11.5, Theorems 11.35–11.39, printed pp.135–137: spectral support and unbounded multiplication operators."
verification:
  precheck: pass
---

## Statement refuted

False assertion: for every densely defined nonnegative self-adjoint operator $A$ on a nonzero complex Hilbert space, if $B=(I+A)^{-1}$ is injective then $0\notin\sigma(B)$.

## Statement references

[Baez, *Quantum Theory and Analysis*, §5](https://math.ucr.edu/home/baez/quantum_theory_and_analysis/Q.pdf)

[Princeton MAT520, §11.5](https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2023/MAT520_Lecture_Notes.pdf)

## Facts & Assumptions

**Given:** the Axiom of Choice, $\ell^2(\mathbb N)$ over $\mathbb C$, and the definitions of $A$ and $B$ in the Counterexample.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[thm-qftx-positive-unbounded-spectral-calculus]]: the bounded resolvent $B=(I+A)^{-1}$ has a spectral PVM $E_B$ and the push-forward under $b\mapsto b^{-1}-1$ has the domain and operator of $A$; the theorem permits $E_B(\{0\})=0$ while $0\in\sigma(B)$.

## Counterexample

**Proof technique:** direct.

**Given:** [A1], [F1], and the false assertion in the Statement.

1.1 On $H=\ell^2(\mathbb N)$ with standard basis $(e_n)_{n\ge1}$ define $D(A)=\{x=(x_n):\sum_{n\ge1}n^2|x_n|^2<\infty\}$ and $(Ax)_n=nx_n$. Finite sequences lie in $D(A)$ and are dense. For $x\in D(A)$, $\langle Ax,x\rangle=\sum n|x_n|^2\ge0$ and the sum converges by Cauchy–Schwarz, so $A$ is nonnegative. [given, algebra]

2.1 The operator is self-adjoint. If $y\in D(A^*)$, there is $z\in\ell^2$ with $\langle Ax,y\rangle=\langle x,z\rangle$ for every finite sequence $x$; choosing $x=e_n$ gives $z_n=ny_n$, so $\sum n^2|y_n|^2=\|z\|^2<\infty$ and $y\in D(A)$. Conversely, if $y\in D(A)$ then $z=(ny_n)\in\ell^2$ satisfies the adjoint identity for every $x\in D(A)$ by convergence of the inner products. Thus $D(A^*)=D(A)$ and $A^*=A$. [step 1.1, algebra]

3.1 The inverse of $I+A$ is the bounded diagonal operator $B e_n=(n+1)^{-1}e_n$. Indeed for any $x\in\ell^2$, $y_n=x_n/(n+1)$ satisfies $\sum n^2|y_n|^2\le\sum|x_n|^2$, and $(I+A)y=x$. The operator $B$ is positive and injective. The vector $y=(1/n)_{n\ge1}$ belongs to $\ell^2$ but not to $\operatorname{Ran}B$, since $Bx=y$ would require $x_n=(n+1)/n$, which is not square-summable. Hence $B$ is not surjective and $0\in\sigma(B)$. [step 1.1, step 2.1, algebra]

4.1 Define $E_B(S)x=\sum_{n:(n+1)^{-1}\in S}x_ne_n$ for Borel $S\subseteq\sigma(B)$. Each value is an orthogonal coordinate projection and $E_B(\sigma(B))=I$. For disjoint Borel $S_k$, each coordinate $n$ occurs in at most one projection, so the partial sums $\sum_{k\le N}E_B(S_k)x$ converge in $\ell^2$ to $E_B(\bigcup_kS_k)x$: the squared norm of the omitted coordinates is a tail of the convergent nonnegative series $\sum_n|x_n|^2$. Thus $E_B$ is strongly countably additive. It integrates the coordinate function to $B$, because its integral acts diagonally by $(n+1)^{-1}$ on each $e_n$. For every $x$, the scalar measure $\langle E_B(\cdot)x,x\rangle=\sum_n|x_n|^2\delta_{(n+1)^{-1}}$ is regular: after retaining the first $N$ atoms its remaining mass is $\sum_{n>N}|x_n|^2\to0$, while the finite atomic measure is regular. Hence [F1] identifies this regular PVM with the bounded-resolvent spectral PVM. Since no atom is at zero, $E_B(\{0\})=0$, although step 3.1 proves $0\in\sigma(B)$. This refutes the asserted implication and shows why a zero spectral projection must be distinguished from a spectral value. [A1, F1, step 3.1, algebra] ∎

