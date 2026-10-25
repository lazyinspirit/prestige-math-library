---
id: lem-bergman-metric-determinants-of-ball-and-polydisc
kind: lemma
title: Determinants and kernel quotients of the model Bergman metrics
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 9
proof_strategy: direct
deps:
  - def-bergman-metric-bounded-domain
  - def-countable-choice
  - def-determinant-of-a-square-matrix
  - def-factorial-and-falling-factorial
  - def-matrix-minors-cofactors-and-adjugate
  - def-natural-logarithm
  - def-wirtinger-operators-in-several-complex-variables
  - lem-bergman-determinant-over-kernel-invariant
  - lem-bergman-kernel-smoothness-and-positive-diagonal
  - lem-determinant-rank-one-update-over-a-commutative-ring
  - rem-complex-euclidean-space-dictionary
  - thm-chain-rule-for-total-derivatives
  - thm-determinant-of-a-triangular-matrix
  - thm-logarithm-derivative-and-integral
  - thm-model-domain-bergman-and-szego-kernels
  - thm-natural-logarithm-laws
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Zbigniew Błocki, The Bergman Kernel and Metric (lecture notes)
      url: https://gamma.im.uj.edu.pl/~blocki/publ/ln/bergman.pdf
      locator: >-
        §1, printed pp. 3–6: the model kernels of the ball and polydisc and
        their Bergman metrics. The determinant computations from the explicit
        Hermitian matrices are local; the rank-one update and the matrix
        conventions are the library's.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), let $m\ge1$, and use the one-based coordinate aliases of [[def-bergman-metric-bounded-domain]]. For the unit ball and the unit polydisc in $\mathbb C^m$,

$$\det g_{\mathbb B^m}(z)=\frac{(m+1)^m}{(1-|z|^2)^{m+1}},\qquad \det g_{\mathbb D^m}(z)=2^m\prod_{j=1}^m\frac{1}{(1-|z_j|^2)^2}.$$

Consequently the invariant quotients are the constants

$$\frac{\det g_{\mathbb B^m}}{K_{\mathbb B^m}}=\frac{(m+1)^m\pi^m}{m!},\qquad \frac{\det g_{\mathbb D^m}}{K_{\mathbb D^m}}=2^m\pi^m,$$

and these constants are distinct for every $m\ge2$.

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman metric, kernel and determinant suppliers; no full Axiom of Choice is used.

[F1] The model kernels are $K_{\mathbb B^m}(z,z)=\frac{m!}{\pi^m(1-|z|^2)^{m+1}}$ and $K_{\mathbb D^m}(z,z)=\frac{1}{\pi^m}\prod_{j=1}^m\frac{1}{(1-|z_j|^2)^2}$ ([[thm-model-domain-bergman-and-szego-kernels]]).

[F2] The Bergman metric form is $g_\Omega=\partial\overline\partial\log K_\Omega(z,z)$, its matrix has entries $(g_\Omega)_{j\bar k}=\partial_j\partial_{\bar k}\log K_\Omega(z,z)$, and $\log K_\Omega(z,z)$ is real $C^\infty$ on a bounded domain ([[def-bergman-metric-bounded-domain]], [[lem-bergman-kernel-smoothness-and-positive-diagonal]]).

[F3] For $x>0$, $\log'(x)=1/x$, and the usual product, quotient and chain rules hold; Wirtinger operators are the first-order operators of [[def-wirtinger-operators-in-several-complex-variables]] ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-natural-logarithm-laws]], [[thm-chain-rule-for-total-derivatives]]).

[F4] Under the complex Euclidean dictionary, $|z|^2=\sum_{j=1}^m|z_j|^2=\sum_{j=1}^m z_j\overline{z_j}$, and $\partial_{\overline z_k}\overline{z_j}=\delta_{jk}$ for these first-order operators ([[rem-complex-euclidean-space-dictionary]], [[def-wirtinger-operators-in-several-complex-variables]]).

[F5] For a commutative ring, $A\in M_n(R)$ and columns $u,v$, $\det(A+uv^{\mathsf T})=\det(A)+v^{\mathsf T}\operatorname{adj}(A)u$; the adjugate is the transpose of the cofactor matrix, and a diagonal matrix has determinant the product of its diagonal entries ([[lem-determinant-rank-one-update-over-a-commutative-ring]], [[def-matrix-minors-cofactors-and-adjugate]], [[thm-determinant-of-a-triangular-matrix]]).

[F6] For $A=(1-r)I_m$ with $0\le r<1$, each diagonal cofactor equals $(1-r)^{m-1}$, including the empty minor $1$ when $m=1$. If $i\ne j$, deleting row $i$ and column $j$ leaves the original row $j$ present but zero, so its determinant is zero by the Leibniz formula. Thus $\operatorname{adj}(A)=(1-r)^{m-1}I_m$ ([[def-matrix-minors-cofactors-and-adjugate]], [[def-determinant-of-a-square-matrix]], [[thm-determinant-of-a-triangular-matrix]]).

[F7] The invariant quotient $\det g_\Omega/K_\Omega$ agrees under biholomorphisms, and diagonal kernel values are positive on bounded domains ([[lem-bergman-determinant-over-kernel-invariant]], [[lem-bergman-kernel-smoothness-and-positive-diagonal]]).

[F8] Factorials of naturals are positive and $m!=\prod_{k=1}^m k$ ([[def-factorial-and-falling-factorial]]).

[F9] In the Leibniz determinant formula every term contains exactly $m$ matrix entries, so $\det(cA)=c^m\det A$ for a complex scalar $c$ ([[def-determinant-of-a-square-matrix]]).

## Proof

**Proof technique:** direct differentiation of the explicit model kernels, a rank-one determinant update, and a finite comparison of constants.

**Given:** $\mathrm{AC}_\omega$, $m\ge1$, the unit ball $\mathbb B^m$ and the unit polydisc $\mathbb D^m$ with the model kernels of [F1], and $z$ in the respective domain.

1.1 By [F1], $\log K_{\mathbb B^m}(z,z)=\log\frac{m!}{\pi^m}-(m+1)\log(1-|z|^2)$. Using [F3] and [F4], $\partial_j\log K_{\mathbb B^m}(z,z)=\frac{(m+1)\overline{z_j}}{1-|z|^2}$ and hence $(g_{\mathbb B^m})_{j\bar k}(z)=(m+1)\frac{(1-|z|^2)\delta_{jk}+\overline{z_j}z_k}{(1-|z|^2)^2}$; in matrix form $g_{\mathbb B^m}(z)=\frac{m+1}{(1-|z|^2)^2}\bigl((1-|z|^2)I_m+\overline z\,z^{\mathsf T}\bigr)$, where $\overline z\,z^{\mathsf T}$ has entries $\overline{z_j}z_k$. [A1, F1, F2, F3, F4, algebra]

1.2 By [F1], $\log K_{\mathbb D^m}(z,z)=-m\log\pi-2\sum_{j=1}^m\log(1-|z_j|^2)$. Each summand depends only on its own coordinate, so [F3] and [F4] give $(g_{\mathbb D^m})_{j\bar k}(z)=0$ for $j\ne k$ and $(g_{\mathbb D^m})_{jj}(z)=\frac{2}{(1-|z_j|^2)^2}$; the matrix is diagonal, and [F5] gives $\det g_{\mathbb D^m}(z)=2^m\prod_{j=1}^m(1-|z_j|^2)^{-2}$, the second displayed determinant. [F1, F2, F3, F4, F5, algebra]

2.1 Put $r:=|z|^2\in[0,1)$ and $A:=(1-r)I_m$. By [F6], $\operatorname{adj}(A)=(1-r)^{m-1}I_m$, so the rank-one update [F5] with $u=\overline z$, $v=z$ gives $$\det\bigl((1-r)I_m+\overline z\,z^{\mathsf T}\bigr)=\det(A)+z^{\mathsf T}\operatorname{adj}(A)\overline z=(1-r)^m+(1-r)^{m-1}r=(1-r)^{m-1}.$$ Taking determinants in step 1.1 with [F9] therefore gives $\det g_{\mathbb B^m}(z)=(m+1)^m(1-r)^{m-1}/(1-r)^{2m}=(m+1)^m/(1-|z|^2)^{m+1}$, the first displayed determinant. [F5, F6, F9, step 1.1, algebra]

3.1 Dividing by the model kernel diagonals of [F1] cancels the $(1-|z|^2)$ and coordinate factors and gives $\det g_{\mathbb B^m}/K_{\mathbb B^m}=\frac{(m+1)^m\pi^m}{m!}$ and $\det g_{\mathbb D^m}/K_{\mathbb D^m}=2^m\pi^m$; the divisions use the positive diagonal values, and by [F7] the quotients are the biholomorphic invariants of the two domains. [F1, F7, step 1.2, step 2.1, algebra]

4.1 It remains to compare the two constants. Their quotient is $\frac{(m+1)^m}{2^m m!}=\prod_{k=1}^m\frac{m+1}{2k}$, a product of positive real factors. Pair the factor $k$ with the factor $m+1-k$; the pair contributes $\frac{(m+1)^2}{4k(m+1-k)}\ge1$, because $(m+1)^2-4k(m+1-k)=(2k-m-1)^2\ge0$, with strict inequality unless $2k=m+1$. If $m=2n$ is even, every one of the $n$ pairs has strict inequality, so the product exceeds $1$. If $m=2n+1\ge3$ is odd, the middle factor $k=n+1$ contributes $1$ while the pair $k=1$ with $k=m$ contributes $\frac{(m+1)^2}{4m}>1$ for $m\ge2$, so again the product exceeds $1$. Hence $\frac{(m+1)^m\pi^m}{m!}>2^m\pi^m$ for every $m\ge2$, and the two invariant constants are distinct. [F8, step 3.1, algebra] ∎
