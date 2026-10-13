---
id: ex-cm-jordan-block-dichotomy-computed
kind: example
title: "Computed dichotomy constants for a Jordan block and for a diagonal sink-source"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps: [def-complexification-of-a-real-vector-space, def-complexification-of-a-real-linear-map, thm-euclidean-space-complete, thm-monotonicity-from-the-derivative, thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism, lem-exponential-series-of-a-bounded-operator, lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval, def-eigenvalue-eigenvector-eigenspace-and-spectrum, def-euclidean-inner-product, def-matrix-product-and-identity-matrix, thm-cauchy-schwarz-and-the-euclidean-norm, thm-exponential-addition-formula, cor-exponential-reciprocal-and-positivity, lem-exponential-dominates-one-plus-x, thm-exponential-limits-and-range, thm-derivative-of-exponential]
dependency_roles:
  def-complexification-of-a-real-vector-space: mathematical-premise
  def-complexification-of-a-real-linear-map: mathematical-premise
  thm-euclidean-space-complete: mathematical-premise
  thm-monotonicity-from-the-derivative: mathematical-premise
  thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism: mathematical-premise
  lem-exponential-series-of-a-bounded-operator: mathematical-premise
  lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval: mathematical-premise
  def-eigenvalue-eigenvector-eigenspace-and-spectrum: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-matrix-product-and-identity-matrix: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  thm-exponential-addition-formula: mathematical-premise
  cor-exponential-reciprocal-and-positivity: mathematical-premise
  lem-exponential-dominates-one-plus-x: mathematical-premise
  thm-exponential-limits-and-range: mathematical-premise
  thm-derivative-of-exponential: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 9.1, Theorem 9.2 and formula (9.4): exponential dichotomy estimates with the polynomial factor for a Jordan block"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
    - title: "F. Ramponi, Notes on Lyapunov's theorem, Section 3 (the Lyapunov equation solved by the integral of e^{A^T t} e^{A t})"
      url: "https://federico-ramponi.unibs.it/docs/lyapunov.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Use zero-based coordinates and the standard vectors $e_0=(1,0)$ and $e_1=(0,1)$ of $\mathbb R^2$.

1. **A non-diagonalisable Jordan block.** For

$$A=\begin{pmatrix}-1&1\\0&-1\end{pmatrix}$$

the exponential series gives $e^{tA}=e^{-t}\begin{pmatrix}1&t\\0&1\end{pmatrix}$; the only eigenvalue is $-1$, so the dichotomy theorem has $E_s=\mathbb R^2$, $E_u=\{0\}$, and the constants $C=1$, $c=1/2$ are admissible: for every $v\in\mathbb R^2$ and $t\ge0$,

$$\|e^{tA}v\|_2\le e^{-t/2}\|v\|_2 .$$

2. **A diagonal sink-source.** For $B=\operatorname{diag}(1/2,-3/2)$ the vectors $e_0,e_1$ are eigenvectors with eigenvalues $1/2$ and $-3/2$, which have nonzero real part, and the dichotomy theorem gives $E_u=\mathbb R e_0$, $E_s=\mathbb R e_1$ with admissible constants $C=1$, $c=1/4$: for $t\ge0$ one has $\|e^{tB}e_1\|_2=e^{-3t/2}\le e^{-t/4}$ and $\|e^{tB}e_0\|_2=e^{t/2}\ge e^{t/4}$, and for $t\le0$ one has $\|e^{tB}e_0\|_2=e^{t/2}\le e^{t/4}$.

## Facts & Assumptions

**Given:** The matrices $A=\begin{pmatrix}-1&1\\0&-1\end{pmatrix}$ and $B=\operatorname{diag}(1/2,-3/2)$, and the Euclidean norm on $\mathbb R^2$ ([[def-euclidean-inner-product]]).

[L1] Euclidean $\mathbb R^n$ is complete ([[thm-euclidean-space-complete]]), and a finite matrix is bounded: Cauchy-Schwarz row by row gives $\|Av\|_2^2\le(\sum_{i,j<n}A_{ij}^2)\|v\|_2^2$ ([[thm-cauchy-schwarz-and-the-euclidean-norm]]). For $A\in M_n(\mathbb R)$ the exponential series defines $E(t)=e^{tA}$ with $E(0)=I_n$ and $\frac{d}{dt}E(t)=AE(t)=E(t)A$ for all real $t$ ([[lem-exponential-series-of-a-bounded-operator]], [[def-matrix-product-and-identity-matrix]]).

[L2] For a fixed matrix $C\in M_n(\mathbb R)$ the initial value problem $Y'=CY$, $Y(0)=I_n$ has a unique solution on every compact interval containing $0$, so a differentiable matrix curve satisfying these two conditions on $\mathbb R$ equals $e^{tC}$: apply uniqueness on $[-R,R]$ for arbitrary $R>0$ ([[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]]).

[L3] The dichotomy theorem gives $T$-invariant subspaces $E_s,E_u$ with $\mathbb R^n=E_s\oplus E_u$ and constants $C\ge1$, $c>0$ such that clauses 1-3 of the theorem hold, and $E_s=\{v:e^{tT}v\to0\ (t\to+\infty)\}$, $E_u=\{v:e^{tT}v\to0\ (t\to-\infty)\}$, whenever no eigenvalue of its complexification $T_{\mathbb C}:\mathbb C\otimes_{\mathbb R}\mathbb R^n\to\mathbb C\otimes_{\mathbb R}\mathbb R^n$ has real part $0$ ([[thm-cm-exponential-dichotomy-for-a-hyperbolic-endomorphism]]); $T_{\mathbb C}$ is the complex-linear extension of $T$ ([[def-complexification-of-a-real-vector-space]], [[def-complexification-of-a-real-linear-map]]), represented by the same matrix on $\mathbb C^n$ in the standard coordinate identification (the dichotomy theorem, Fact F1); $\lambda\in\mathbb C$ is its eigenvalue when $T_{\mathbb C}v=\lambda v$ for some $0\ne v\in\mathbb C^n$ ([[def-eigenvalue-eigenvector-eigenspace-and-spectrum]]).

[L4] Scalar exponential: $e^{x+y}=e^{x}e^{y}$, $e^{-x}=1/e^{x}>0$ and $1+s\le e^{s}$ for all real $x,y,s$; $e^{x}\to+\infty$ as $x\to+\infty$ and $e^{x}\to0$ as $x\to-\infty$; $(e^{x})'=e^{x}$ ([[thm-exponential-addition-formula]], [[cor-exponential-reciprocal-and-positivity]], [[lem-exponential-dominates-one-plus-x]], [[thm-exponential-limits-and-range]], [[thm-derivative-of-exponential]]).

[L5] A continuous real function on an interval that is differentiable in its interior and has nonpositive derivative is nonincreasing ([[thm-monotonicity-from-the-derivative]]).

## Verification

**Proof technique:** direct; solve the linear matrix initial value problems explicitly and check the dichotomy estimates.

1.1 Write $A=-I_2+N$ with $N=\begin{pmatrix}0&1\\0&0\end{pmatrix}$, so that $N^2=0$ and $N$ commutes with $I_2$. Define $F(t):=e^{-t}(I_2+tN)=e^{-t}\begin{pmatrix}1&t\\0&1\end{pmatrix}$; differentiating entrywise with the product rule and $(e^{-t})'=-e^{-t}$ [L4] gives $F'(t)=-e^{-t}(I_2+tN)+e^{-t}N=e^{-t}(-I_2+N-tN)$ and $AF(t)=(-I_2+N)e^{-t}(I_2+tN)=e^{-t}(-I_2+N-tN+tN^2)=e^{-t}(-I_2+N-tN)$; since $F(0)=I_2$, [L2] gives $e^{tA}=F(t)$ for all $t$. [given, L1, L2, L4, algebra]

1.2 For $B=\operatorname{diag}(1/2,-3/2)$ define $G(t):=\operatorname{diag}(e^{t/2},e^{-3t/2})$; differentiating entrywise gives $G'(t)=\operatorname{diag}(\tfrac12e^{t/2},-\tfrac32e^{-3t/2})=BG(t)$ and $G(0)=I_2$, so [L2] gives $e^{tB}=G(t)$; in particular $e^{tB}e_0=e^{t/2}e_0$ and $e^{tB}e_1=e^{-3t/2}e_1$. No eigenvalue of $B$ is purely imaginary: if $B_{\mathbb C}v=\lambda v$ with $\lambda\in\mathbb C$ and $0\ne v=(v_0,v_1)\in\mathbb C^2$, the two coordinates give $\tfrac12v_0=\lambda v_0$ and $-\tfrac32v_1=\lambda v_1$, so $v_0\ne0$ forces $\lambda=1/2$ while $v_1\ne0$ forces $\lambda=-3/2$. Hence [L3] applies to $B$. [given, L2, L3, L4, algebra]

2.1 The only eigenvalue of $A$ is $-1$: if $A_{\mathbb C}v=\lambda v$ with $\lambda\in\mathbb C$ and $0\ne v=(v_0,v_1)\in\mathbb C^2$, the second coordinate gives $-v_1=\lambda v_1$ and the first gives $-v_0+v_1=\lambda v_0$. If $v_1=0$ then $v_0\ne0$ and $\lambda=-1$; if $v_1\ne0$ then $\lambda=-1$ from the second coordinate. So no eigenvalue of $A$ has real part $0$, and $[L3]$ applies to $A$. [step 1.1, L3, algebra]

2.2 Norm estimate for $A$: put $w(t):=e^{tA}v$, so $w'=Aw$ by step 1.1. For $f(t):=\|w(t)\|_2^2=w_0(t)^2+w_1(t)^2$ the product rule gives $$f'(t)=2\langle Aw,w\rangle_1=-2w_0^2+2w_0w_1-2w_1^2\le-w_0^2-w_1^2=-f(t),$$ because $2w_0w_1\le w_0^2+w_1^2$, equivalently $(w_0-w_1)^2\ge0$. Hence $(e^tf(t))'=e^t(f+f')\le0$, and the derivative sign criterion [L5] gives $e^tf(t)\le f(0)=\|v\|_2^2$ for $t\ge0$. Taking nonnegative square roots yields $\|e^{tA}v\|_2\le e^{-t/2}\|v\|_2$ for all $v$ and $t\ge0$, including $v=0$. Thus $C=1$, $c=1/2$ are admissible constants for $A$ in the sense of [L3]. [step 1.1, L3, L4, L5, algebra]

3.1 Identification of the subspaces for $A$: the estimate of step 2.2 holds for every $v\in\mathbb R^2$, so $e^{tA}v\to0$ as $t\to+\infty$ for every $v$ (by $e^{-t/2}\to0$ from [L4]); by the characterisation in [L3] the stable subspace is $E_s=\mathbb R^2$, and since $\mathbb R^2=E_s\oplus E_u$ we get $E_u=\{0\}$. [step 2.1, 2.2, L3, L4]

4.1 Subspaces and constants for $B$: for $v=(v_0,v_1)$ step 1.2 gives $e^{tB}v=(e^{t/2}v_0,\,e^{-3t/2}v_1)$; from the limits in [L4], as $t\to+\infty$ this tends to $0$ exactly when $v_0=0$, and as $t\to-\infty$ exactly when $v_1=0$. By [L3], $E_s=\mathbb R e_1$ and $E_u=\mathbb R e_0$. With $c=1/4$ the estimates hold: for $t\ge0$, $e^{-3t/2}\le e^{-t/4}$ and $e^{t/2}\ge e^{t/4}$; for $t\le0$, $e^{t/2}\le e^{t/4}$. Each follows from $e^{a}\le e^{b}$ whenever $a\le b$, which is a consequence of $e^{b}=e^{a}e^{b-a}$ and $e^{b-a}\ge1$ for $b-a\ge0$ [L4]. Hence $C=1$, $c=1/4$ are admissible constants for $B$. This proves the computed constants. [step 2.1, 1.2, L3, L4, algebra] ∎

## Remarks

- The first matrix shows that the dichotomy does not require diagonalisability: the explicit shear has a polynomial factor in its entries, while the symmetric-part estimate in step 2.2 proves the Euclidean bound with $C=1$, $c=1/2$. The constant $C$ is not claimed to be $1$ for every admissible rate: the computation is a finite check for the displayed rates, not a general bound.

- In both examples the admissible rates are strictly below the spectral gap, and the conclusion of [L3] is realized with $C=1$; no claim is made about optimal constants or about the converse direction of the theorem.
