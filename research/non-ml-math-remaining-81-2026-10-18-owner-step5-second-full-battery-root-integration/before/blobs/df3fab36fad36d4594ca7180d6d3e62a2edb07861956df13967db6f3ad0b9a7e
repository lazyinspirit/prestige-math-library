---
id: ex-qc-tqc-small-model-matrices
kind: example
title: Worked Fibonacci and Ising braid matrices
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps: [ex-qc-tqc-fibonacci-data, ex-qc-tqc-ising-data, def-braid-group-by-the-artin-presentation, def-linear-isometry-and-orthogonal-or-unitary-operator]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Chetan Nayak et al., Non-Abelian Anyons and Topological Quantum Computation"
      url: "https://arxiv.org/pdf/0707.1889"
      locator: "arXiv:0707.1889v2, §III.B.2, Eqs. (50) and (53), PDF pp. 31–32, and §III.C.2, PDF p. 37 (Ising F/R data); §IV.B, PDF pp. 53–57 (Fibonacci braid matrices)."
---

## Example

For the Fibonacci three-$\tau$, total-$\tau$ sector and the Ising
three-$\sigma$, total-$\sigma$ sector, use the F/R data of
[[ex-qc-tqc-fibonacci-data]] and [[ex-qc-tqc-ising-data]]. In each sector the
first generator is $B_1=\operatorname{diag}(R_1,R_2)$ and the second is
$B_2=FB_1F$. We verify both are unitary, satisfy the $B_3$ Artin relation,
and have projective orders $10$ (Fibonacci) and $4$ (Ising).

## Facts & Assumptions

**Given:** the two fixed two-dimensional fusion sectors and their orthonormal
bases, F matrices, and R eigenvalues.

[F1] [[ex-qc-tqc-fibonacci-data]]: in the Fibonacci sector,
$F=\begin{pmatrix}u&v\\v&-u\end{pmatrix}$,
$u=\phi^{-1}$, $v=\phi^{-1/2}$, $R_1=e^{-4\pi i/5}$, and
$R_2=e^{3\pi i/5}$.

[F2] [[ex-qc-tqc-ising-data]]: in the Ising sector,
$F=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$,
$R_1=e^{-i\pi/8}$, and $R_2=e^{3i\pi/8}$.

[F3] [[def-braid-group-by-the-artin-presentation]]: for three strands the
defining adjacent-generator relation is $B_1B_2B_1=B_2B_1B_2$.

[F4] [[def-linear-isometry-and-orthogonal-or-unitary-operator]]: a unitary
operator preserves the inner-product norm; in an orthonormal basis its matrix
satisfies $B^\dagger B=BB^\dagger=I$.

## Verification
**Given:** the data in [F1] and [F2].

1.1 In either sector write $B_1=\operatorname{diag}(x,y)$ and $B_2=FB_1F$. The F matrices in [F1] and [F2] are unitary by their displayed entries and the identities proved for the respective examples. Since $x,y$ are unit complex numbers, $B_1$ is unitary; $B_2$ is a product of unitary matrices and is therefore unitary as well. [F1, F2, F4, algebra]

1.2 A projective class of $\operatorname{diag}(x,y)$ has the same order as $r=y/x$. In the Fibonacci case $r=e^{2\pi i(-3/10)}$ has exact order $10$ because $\gcd(3,10)=1$. In the Ising case $r=i$ has exact order $4$. These orders ignore only the common scalar $x$. [F1, F2, algebra]

2.1 In the Fibonacci case put $r=y/x=e^{-3\pi i/5}$ and $D=\operatorname{diag}(1,r)$. Then $B_1=xD$ and $B_2=xC$, where $C=FDF$. Put $s=r^2+ur+1$. Direct multiplication gives $$DCD-C DC= \begin{pmatrix} u^3(1-r)s&-u^3v(1-r)s\\ -u^3v(1-r)s&u^3(r-1)s \end{pmatrix}.$$ Here $u^2+u=1$, $v^2=u$, and $r+r^{-1}=2\cos(3\pi/5)=-u$, so $s=0$. Thus $DCD=CDC$ and $B_1B_2B_1=x^3DCD=x^3CDC=B_2B_1B_2$. [F1, F3, step 1.1, algebra]

2.2 In the Ising case put $r=y/x=i$ and $D=\operatorname{diag}(1,r)$. Then $B_1=xD$ and $$C=FDF=\frac12\begin{pmatrix}1+r&1-r\\1-r&1+r\end{pmatrix},\qquad B_2=xC.$$ Multiplication yields $$DCD-C DC=\frac{1+r^2}{4} \begin{pmatrix}1-r&-(1-r)\\-(1-r)&-(1-r)\end{pmatrix}=0,$$ because $r^2=-1$. Therefore $B_1B_2B_1=x^3DCD=x^3CDC=B_2B_1B_2$ in the Ising sector as well. [F2, F3, step 1.1, algebra]

3.1 Steps 1.1–1.2 give the explicit unitary braid matrices, verify their Artin relation, and compute their projective generator orders in both stated sectors. No statement about other Ising sectors is used. [F1, F2, F3, F4, step 1.1, step 2.1, step 2.2, step 1.2] ∎
