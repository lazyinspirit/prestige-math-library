---
id: lem-tgrx-finite-matrix-entropy-variation
kind: lemma
title: Finite matrix entropy derivative at a faithful state
status: draft
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - lem-qsm-matrix-state-calculus
  - def-trace-of-an-endomorphism
  - def-operator-norm
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-derivative-and-integral
  - thm-geometric-series
  - thm-termwise-differentiation-of-a-real-power-series
  - cor-zero-derivative-implies-constant
  - def-derivative
dependency_roles:
  lem-qsm-matrix-state-calculus: mathematical-premise
  def-trace-of-an-endomorphism: mathematical-premise
  def-operator-norm: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-geometric-series: mathematical-premise
  thm-termwise-differentiation-of-a-real-power-series: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  def-derivative: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: John Watrous, The Theory of Quantum Information, author-hosted complete book manuscript, §5.2.1
      url: https://jhwatrous.github.io/TQI.pdf
    - title: Mark M. Wilde, From Classical to Quantum Shannon Theory, complete book manuscript, §11.1
      url: https://arxiv.org/pdf/1106.1445v8
---

## Statement

Let $H$ be a nonzero finite-dimensional complex inner-product space with a fixed orthonormal basis, let $J\subseteq\mathbb R$ be an open interval, and let $t_0\in J$. Suppose $A:J\to\operatorname{End}(H)$ has real and imaginary matrix entries in the fixed basis differentiable at $t_0$ and is self-adjoint with strictly positive eigenvalues on a neighborhood of $t_0$. Define $\log A(t)$ by applying the natural logarithm to the eigenvalues of $A(t)$ in its spectral decomposition, let $\operatorname{tr}$ be the finite-dimensional trace, and let $\|T\|_{\mathrm{op}}:=\sup_{\|v\|=1}\|Tv\|$ be the operator norm. Then $G(t):=\operatorname{tr}(A(t)\log A(t))$ is differentiable at $t_0$ and

$$G'(t_0)=\operatorname{tr}\!\left(A'(t_0)(\log A(t_0)+I_H)\right),$$

where $I_H$ is the identity endomorphism of $H$ and $A'(t_0)$ is obtained by differentiating the matrix entries in the fixed basis.

## Statement references

[[lem-qsm-matrix-state-calculus]]

[[def-trace-of-an-endomorphism]]

[[def-operator-norm]]

[[def-natural-logarithm]]

[[thm-natural-logarithm-laws]]

[[thm-logarithm-derivative-and-integral]]

[[thm-geometric-series]]

[[thm-termwise-differentiation-of-a-real-power-series]]

[[cor-zero-derivative-implies-constant]]

[[def-derivative]]

[John Watrous, The Theory of Quantum Information, §5.2.1](https://jhwatrous.github.io/TQI.pdf)

[Mark M. Wilde, From Classical to Quantum Shannon Theory, §11.1](https://arxiv.org/pdf/1106.1445v8)

## Facts & Assumptions

**Given:** A finite-dimensional complex inner-product space $H$, an open interval $J$ with $t_0\in J$, and an entrywise differentiable path $A(t)$ that is self-adjoint with positive eigenvalues near $t_0$.

[F1] [[lem-qsm-matrix-state-calculus]]: every Hermitian endomorphism has an orthonormal eigenbasis with real eigenvalues; applying any real function to its finite spectrum defines a basis-independent endomorphism, including the logarithm on positive eigenvalues.

[F2] [[def-trace-of-an-endomorphism]]: in any ordered basis, the trace of an endomorphism is the sum of the diagonal entries of its matrix, and this value is basis-independent.

[F3] [[def-natural-logarithm]]: for $x>0$, $\log x$ is the unique real $y$ with $\exp(y)=x$; in particular $\log1=0$.

[F10] [[thm-natural-logarithm-laws]]: for positive $x,y$, $\log(xy)=\log x+\log y$.

[F4] [[thm-logarithm-derivative-and-integral]]: for $x>0$, $\log$ is differentiable and $\log'(x)=1/x$.

[F5] [[thm-geometric-series]]: for real $x$ with $|x|<1$, $\sum_{n=0}^{\infty}x^n=1/(1-x)$.

[F6] [[thm-termwise-differentiation-of-a-real-power-series]]: a real power series can be differentiated term by term at every point strictly inside its radius of convergence.

[F7] [[cor-zero-derivative-implies-constant]]: a continuous function on an interval with zero derivative at every interior point is constant on that interval.

[F8] [[def-derivative]]: differentiability at $t_0$ means the difference quotient has a limit, hence $A(t_0+h)=A(t_0)+hA'(t_0)+o(h)$ entrywise.

[F9] [[def-operator-norm]]: $\|T\|_{\mathrm{op}}$ is the supremum of $\|Tv\|$ over unit vectors, and therefore $\|Tv\|\le\|T\|_{\mathrm{op}}\|v\|$ for every vector $v$ by rescaling.

## Proof

1.1 For $|x|<1$, the power series $P(x):=\sum_{n=1}^{\infty}x^n/n$ converges absolutely because it is termwise bounded in absolute value by the geometric series in [F5]. Its radius is therefore at least $1$, and [F6] gives $P'(x)=\sum_{n=1}^{\infty}x^{n-1}=1/(1-x)$. The difference quotient for $\log$ in [F4], with increment $-h$, gives $\frac{d}{dx}[-\log(1-x)]=1/(1-x)$. Since both functions vanish at $0$ by [F3], [F7] applied to their difference yields $\sum_{n=1}^{\infty}x^n/n=-\log(1-x)$ for every $|x|<1$. [F3, F4, F5, F6, F7, algebra]

2.1 Put $A_0:=A(t_0)$ and let $\lambda_{\max}$ and $\lambda_{\min}$ be its largest and smallest eigenvalues. They satisfy $0<\lambda_{\min}\le\lambda_{\max}$ by [F1] and the hypothesis. Set $c:=2\lambda_{\max}$ and $B:=I_H-A_0/c$. The eigenvalues of $B$ lie in $[1/2,1-\lambda_{\min}/c]$. In an orthonormal eigenbasis of $B$, writing its eigenvalues as $b_j$, the definition [F9] gives $\|B\|_{\mathrm{op}}=\max_j|b_j|$: for $x=\sum_jx_je_j$, $\|Bx\|^2=\sum_j|b_j|^2|x_j|^2\le(\max_j|b_j|)^2\|x\|^2$, with equality on an eigenvector for a largest $|b_j|$. Hence $q:=\|B\|_{\mathrm{op}}<1$ by [F1]. Choose $r$ with $q<r<1$. By [F8], each entry of $A(t)-A_0$ tends to zero. If every entry of a matrix $T$ in the fixed orthonormal basis has magnitude at most $M$, then for a unit vector $x$ $\sum_j|x_j|^2=1$ makes each coordinate magnitude at most $1$, so each coordinate of $Tx$ has magnitude at most $dM$ and $\|Tx\|\le d^{3/2}M$; hence $\|T\|_{\mathrm{op}}\le d^{3/2}M$, where $d=\dim H$. Since the entry bound shows $\|A(t)-A_0\|_{\mathrm{op}}\to0$, choose a neighborhood where $\|A(t)-A_0\|_{\mathrm{op}}/c<(r-q)/2$. For every unit vector $x$, $\|B_tx\|\le\|Bx\|+\|(A(t)-A_0)x\|/c\le q+\|A(t)-A_0\|_{\mathrm{op}}/c<r$; taking the supremum proves $\|B_t\|_{\mathrm{op}}<r$. For such $t$, the scalar identity in step 1.1 applied to each eigenvalue of $B_t$, the product law [F10], and spectral calculus [F1] give $\log A(t)=(\log c)I_H-\sum_{n=1}^{\infty}B_t^n/n$, with convergence in operator norm because $\sum r^n/n\le\sum r^n<\infty$. [given, F1, F8, F9, F10, step 1.1, choose, construct]

3.1 For any endomorphisms $S,T$, the bound in [F9] gives $\|STx\|\le\|S\|_{\mathrm{op}}\|Tx\|\le\|S\|_{\mathrm{op}}\|T\|_{\mathrm{op}}\|x\|$ for every vector $x$; taking the supremum over unit $x$ proves $\|ST\|_{\mathrm{op}}\le\|S\|_{\mathrm{op}}\|T\|_{\mathrm{op}}$. For $t$ sufficiently near $t_0$, put $E:=A(t)-A_0$, $Z:=-E/c$, and $z:=\|Z\|_{\mathrm{op}}$. Then $B_t=B+Z$. The supremum definition gives $z=\|E\|_{\mathrm{op}}/c$, so $z\to0$ as $t\to t_0$; shrink the neighborhood so that $q+z\le r$. Distributivity writes $(B+Z)^n=B^n+S_n+R_n$, where $S_n:=\sum_{j=0}^{n-1}B^j ZB^{n-1-j}$ contains the terms with exactly one $Z$, and $R_n$ contains all terms with at least two $Z$ factors. The just-proved product bound gives $\|S_n\|_{\mathrm{op}}\le nq^{n-1}z$. For $R_n$, each word with exactly $k$ factors $Z$ has norm at most $q^{n-k}z^k$, and there are $\binom nk$ such words, so $\|R_n\|_{\mathrm{op}}\le\sum_{k=2}^n\binom nkq^{n-k}z^k\le\binom n2z^2(q+z)^{n-2}\le\binom n2z^2r^{n-2}$. The middle bound follows from $\binom nk\le\binom n2\binom{n-2}{k-2}$ for $k\ge2$. [given, F9, step 2.1, algebra]

4.1 Substituting the series of step 2.1 into $G(A):=\operatorname{tr}(A\log A)$, and using step 3.1, yields
$$G(A_0+E)-G(A_0)=(\log c)\operatorname{tr}E-\sum_{n=1}^{\infty}\frac{\operatorname{tr}(EB^n)+\operatorname{tr}(A_0S_n)}{n}+R(E),$$
where $|R(E)|\le C\|E\|^2$ for a constant $C$ independent of sufficiently small $E$. Indeed, the omitted terms are $\operatorname{tr}(A_0R_n)$, $\operatorname{tr}(ES_n)$, and $\operatorname{tr}(ER_n)$; for each orthonormal basis vector $e_i$, the $i$th coordinate of $Te_i$ has magnitude at most $\|Te_i\|\le\|T\|_{\mathrm{op}}$ by [F9], so [F2] gives $|\operatorname{tr}T|\le d\|T\|_{\mathrm{op}}$ with $d=\dim H$, and the bounds in step 3.1 make their series after division by $n$ bounded by constants times $z^2\sum_{n\ge2}nr^{n-2}$, $z^2\sum_{n\ge1}q^{n-1}$, and $z^3\sum_{n\ge2}nr^{n-2}$, respectively. Each geometric derivative sum is finite by [F5]–[F6], and step 3.1 gives $z=\|E\|_{\mathrm{op}}/c$. [F2, F5, F6, F9, step 2.1, step 3.1, algebra]

4.2 The linear matrix-log term read from the series in steps 2.1 and 3.1 is
$$L(E):=\frac1c\sum_{n=1}^{\infty}\frac1n\sum_{j=0}^{n-1}B^jEB^{n-1-j}.$$
Its series converges in operator norm because the $n$th summand has norm at most $q^{n-1}\|E\|_{\mathrm{op}}/c$. The remainder in the logarithm series is bounded by $\sum_{n=2}^{\infty}\binom n2 z^2r^{n-2}/n=(z^2/2)\sum_{n=2}^{\infty}(n-1)r^{n-2}=O(\|E\|_{\mathrm{op}}^2)$, so $L(E)$ is the full first-order term of $\log(A_0+E)$. In an orthonormal eigenbasis of $A_0$, write $A_0e_i=\lambda_i e_i$ and $b_i:=1-\lambda_i/c$. Then
$$L(E)_{ik}=\frac{E_{ik}}c\sum_{n=1}^{\infty}\frac1n\sum_{j=0}^{n-1}b_i^jb_k^{n-1-j}.$$
If $b_i\ne b_k$, the inner sum is $(b_i^n-b_k^n)/(b_i-b_k)$, so its coefficient is
$\frac1c\frac{\sum_{n=1}^{\infty}(b_i^n-b_k^n)/n}{b_i-b_k}=\frac{\log(1-b_k)-\log(1-b_i)}{c(b_i-b_k)}=\frac{\log\lambda_i-\log\lambda_k}{\lambda_i-\lambda_k},$
where step 1.1 evaluates the series and [F10] gives $\log\lambda_j=\log c+\log(1-b_j)$, while $\lambda_i-\lambda_k=c(b_k-b_i)$. If $b_i=b_k$, the coefficient is $c^{-1}\sum_{n=1}^{\infty}b_i^{n-1}=1/(c(1-b_i))=1/\lambda_i=\log'(\lambda_i)$ by [F4] and [F5]. Defining $\log^{[1]}(x,y):=(\log x-\log y)/(x-y)$ for $x\ne y$ and $\log^{[1]}(x,x):=1/x$, we have $L(E)_{ik}=\log^{[1]}(\lambda_i,\lambda_k)E_{ik}$: this is the divided-difference derivative of the matrix logarithm. [F4, F5, F9, F10, step 1.1, step 2.1, step 3.1, algebra]

5.1 In a fixed basis, [F2] gives $\operatorname{tr}(XY)=\sum_{i,j}X_{ij}Y_{ji}=\sum_{i,j}Y_{ji}X_{ij}=\operatorname{tr}(YX)$, so trace is cyclic. Since $A_0$ commutes with $B$ and $Z=-E/c$, cycling each term gives $\operatorname{tr}(A_0S_n)=-(n/c)\operatorname{tr}(A_0B^{n-1}E)$. Thus the $A_0S_n$ terms in step 4.1 sum to $\operatorname{tr}(A_0L(E))$. In the eigenbasis used in step 4.2, $L(E)_{ii}=E_{ii}/\lambda_i$, so $\operatorname{tr}(A_0L(E))=\sum_i\lambda_iL(E)_{ii}=\operatorname{tr}E$. The remaining linear terms in step 4.1 are $\operatorname{tr}(E\log A_0)$ by the spectral series in step 2.1. Therefore $G(A_0+E)-G(A_0)=\operatorname{tr}(E(\log A_0+I_H))+O(\|E\|_{\mathrm{op}}^2)$. [F2, step 2.1, step 4.1, step 4.2, algebra]

6.1 By [F8], for $h\to0$ the path increment is $E=A(t_0+h)-A_0=hA'(t_0)+o(h)$ entrywise. The finite-coordinate bound in step 2.1 gives $\|E\|_{\mathrm{op}}=O(|h|)$. Dividing the expansion in step 5.1 by $h$ makes its $O(\|E\|_{\mathrm{op}}^2)$ remainder tend to $0$ and its linear term tend to $\operatorname{tr}(A'(t_0)(\log A(t_0)+I_H))$. This is the stated derivative. [given, F8, step 2.1, step 5.1, algebra] ∎

## Remarks

The matrix logarithm derivative is proved here for finite-dimensional faithful matrices. It makes no assertion about singular reference states or infinite-dimensional operator algebras.
