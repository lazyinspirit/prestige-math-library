---
id: cex-qftx-resolvent-zero-continuous-spectrum
kind: counterexample
domain: mathematics
library: mathematics
title: Injective resolvents need not be bounded below
status: published
origin: pipeline
dependency_level: 1
deps:
  - def-axiom-of-choice
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-qftx-positive-unbounded-spectral-calculus
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
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
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement refuted

False assertion: for every densely defined nonnegative self-adjoint operator $A$ on a nonzero complex Hilbert space, if $B=(I+A)^{-1}$ is injective then $0\notin\sigma(B)$.

## Statement references

[Baez, *Quantum Theory and Analysis*, §5](https://math.ucr.edu/home/baez/quantum_theory_and_analysis/Q.pdf)

[Princeton MAT520, §11.5](https://web.math.princeton.edu/~js129/PDFs/teaching/MAT520_fall_2023/MAT520_Lecture_Notes.pdf)

## Facts & Assumptions

**Given:** the Axiom of Choice, $H=\ell^2(\mathbb N_{>0})$ over $\mathbb C$, where $\mathbb N_{>0}:=\{1,2,3,\ldots\}$, and the definitions of $A$ and $B$ in the Counterexample.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F1] [[thm-qftx-positive-unbounded-spectral-calculus]]: under the Axiom of Choice, $B=(I+A)^{-1}$ is bounded positive self-adjoint on a nonzero complex Hilbert space, and its compact spectrum has a unique regular spectral PVM $E_B$ on its Borel sets with $B=\int b\,dE_B(b)$; the push-forward under $b\mapsto b^{-1}-1$ has domain and operator $A$, and the theorem permits $E_B(\{0\})=0$ while $0\in\sigma(B)$.

[F2] [[thm-cauchy-schwarz-in-an-inner-product-space]]: for square-summable complex sequences $x,y$, $|\sum_nx_n\overline{y_n}|\le(\sum_n|x_n|^2)^{1/2}(\sum_n|y_n|^2)^{1/2}$.

## Counterexample

**Proof technique:** direct.

**Given:** [A1], [F1]–[F2], and the false assertion in the Statement.

1.1 On $H=\ell^2(\mathbb N_{>0})=\{x:\mathbb N_{>0}\to\mathbb C:\sum_{n\ge1}|x_n|^2<\infty\}$, with inner product $\langle x,y\rangle=\sum_{n\ge1}x_n\overline{y_n}$ and standard basis $e_n$ given by $(e_n)_m=1$ if $m=n$ and $0$ otherwise, all coordinate indices below range over $\mathbb N_{>0}$. Define $D(A)=\{x=(x_n):\sum_{n\ge1}n^2|x_n|^2<\infty\}$ and $(Ax)_n=nx_n$. Finite sequences lie in $D(A)$ and are dense. For $x\in D(A)$, Cauchy–Schwarz [F2] gives $\sum n|x_n|^2\le(\sum n^2|x_n|^2)^{1/2}(\sum|x_n|^2)^{1/2}<\infty$, so $\langle Ax,x\rangle=\sum n|x_n|^2\ge0$ and $A$ is nonnegative. [given, F2, algebra]

2.1 The operator is self-adjoint. If $y\in D(A^*)$, there is $z\in\ell^2$ with $\langle Ax,y\rangle=\langle x,z\rangle$ for every finite sequence $x$; choosing $x=e_n$ gives $z_n=ny_n$, so $\sum n^2|y_n|^2=\|z\|^2<\infty$ and $y\in D(A)$. Conversely, if $y\in D(A)$ then $z=(ny_n)\in\ell^2$ satisfies the adjoint identity for every $x\in D(A)$: both inner-product series converge by [F2] because $Ax,y,x,z\in\ell^2$, and their terms agree. Thus $D(A^*)=D(A)$ and $A^*=A$. [step 1.1, F2, algebra]

3.1 The inverse of $I+A$ is the bounded diagonal operator $B e_n=(n+1)^{-1}e_n$. Indeed for any $x\in\ell^2$, $y_n=x_n/(n+1)$ satisfies $\sum n^2|y_n|^2\le\sum|x_n|^2$, and $(I+A)y=x$. The operator $B$ is positive and injective, but it is not bounded below because $\|Be_n\|=(n+1)^{-1}\to0$ for unit vectors $e_n$. The vector $y=(1/n)_{n\ge1}$ belongs to $\ell^2$: for $n\ge2$, $n^{-2}\le(n-1)^{-1}-n^{-1}$, so $\sum_{n\ge1}n^{-2}\le2$. It is not in $\operatorname{Ran}B$, since $Bx=y$ would require $x_n=(n+1)/n>1$ for every $n$, which is not square-summable. Hence $B$ is not surjective and $0\in\sigma(B)$. [step 1.1, step 2.1, algebra]

4.1 Define $E_B(S)x=\sum_{n:(n+1)^{-1}\in S}x_ne_n$ for Borel $S\subseteq\sigma(B)$. Its values are orthogonal coordinate projections, and the coordinate definition gives $E_B(\varnothing)=0$, $E_B(\sigma(B))=I$, and $E_B(S)E_B(T)=E_B(S\cap T)$. For disjoint Borel $S_k$, each coordinate $n$ occurs in at most one projection, so the partial sums $\sum_{k\le N}E_B(S_k)x$ converge in $\ell^2$ to $E_B(\bigcup_kS_k)x$: the squared norm of the omitted coordinates is a tail of the convergent nonnegative series $\sum_n|x_n|^2$. Thus $E_B$ is strongly countably additive. It integrates the coordinate function to $B$, because its integral acts diagonally by $(n+1)^{-1}$ on each $e_n$. For every $x$, its finite scalar measure is $\mu_x(S):=\langle E_B(S)x,x\rangle=\sum_{n:(n+1)^{-1}\in S}|x_n|^2$. For any Borel $S\subseteq\sigma(B)$, the finite set $K_N:=\{(n+1)^{-1}:n\le N,\ (n+1)^{-1}\in S\}$ is compact and contained in $S$, and $\mu_x(K_N)\uparrow\mu_x(S)$ because $\sum_n|x_n|^2<\infty$. Hence $\mu_x$ is inner regular on every Borel set. Since $\sigma(B)$ is compact, for any Borel $S$ and $\varepsilon>0$, inner regularity of $S^c$ gives a compact $K\subseteq S^c$ with $\mu_x(S^c\setminus K)<\varepsilon$; then the open set $\sigma(B)\setminus K$ contains $S$ and its excess measure is less than $\varepsilon$. Thus $\mu_x$ is also outer regular, so $E_B$ is a regular PVM. Hence [F1] identifies it with the bounded-resolvent spectral PVM. Since no atom is at zero, $E_B(\{0\})=0$, although step 3.1 proves $0\in\sigma(B)$. This refutes the asserted implication and shows why a zero spectral projection must be distinguished from a spectral value. [A1, F1, step 3.1, algebra] ∎

