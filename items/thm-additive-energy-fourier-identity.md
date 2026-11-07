---
id: thm-additive-energy-fourier-identity
kind: theorem
title: "Fourier identity for additive energy"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - def-additive-energy-of-a-subset
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - thm-finite-parseval-and-plancherel
  - lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product
  - def-cyclic-convolution-on-z-mod-n
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao and Van H. Vu, Additive Combinatorics"
      url: "https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf"
      locator: "§4.2, equation (4.14) and Lemma 4.9, printed pp. 157–158: fourth-moment identity for additive energy under the average Fourier convention"
    - title: "Swastik Kopparty, Fourier Analysis, Topics in Finite Fields course notes"
      url: "https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf"
      locator: "§§1.3–1.6.1, PDF pp. 1–4: Fourier transform, Parseval, convolution, and the additive-energy fourth-moment formula"
verification:
  precheck: pass
---

## Statement

Let $N\ge1$, $G=\mathbb Z/N\mathbb Z$, and $A\subseteq G$. For $h:G\to\mathbb C$ use the negative-sign unitary discrete Fourier transform

$$\widehat h(\xi):=N^{-1/2}\sum_{x=0}^{N-1}h([x]_N)e^{-2\pi i\xi x/N},\qquad \xi\in\mathbb Z/N\mathbb Z,$$

where any integer representative of $\xi$ gives the same value. If $E(A)$ is the number of ordered quadruples $(a,b,c,d)\in A^4$ with $a+b=c+d$ in $G$, then

$$E(A)=N\sum_{\xi\in G}|\widehat{1_A}(\xi)|^4.$$

## Statement references

[Tao and Vu, *Additive Combinatorics*, §4.2](https://www.cs.umd.edu/~gasarch/COURSES/752/S22/AddComb.pdf)

[Kopparty, *Fourier Analysis*, §§1.3–1.6.1](https://www.math.toronto.edu/swastik/courses/finitefields-F23/fourier.pdf)

## Facts & Assumptions

**Given:** A positive integer $N$, the cyclic group $G=\mathbb Z/N\mathbb Z$, and a subset $A\subseteq G$.

[A1] $N\ge1$ and $A\subseteq G$.

[F1] For $h:G\to\mathbb C$ and $k\in\mathbb Z$, $(\mathcal F_Nh)(k)=N^{-1/2}\sum_{x=0}^{N-1}h([x]_N)e^{-2\pi ikx/N}$; the transform is periodic in $k$ and hence is indexed by $G$ ([[def-unitary-discrete-fourier-transform-on-z-mod-n]]).

[F2] $E(A)$ is the number of ordered quadruples $(a,b,c,d)\in A^4$ satisfying $a+b=c+d$ in $G$ ([[def-additive-energy-of-a-subset]]).

[F3] For every $u:G\to\mathbb C$, $\sum_{x\in G}|u(x)|^2=\sum_{\xi\in G}|(\mathcal F_Nu)(\xi)|^2$ ([[thm-finite-parseval-and-plancherel]]).

[F4] The unnormalised cyclic convolution is $(u*v)(x)=\sum_{y\in G}u(y)v(x-y)$ ([[def-cyclic-convolution-on-z-mod-n]]).

[F5] For $u,v:G\to\mathbb C$ and $\xi\in G$, $(\mathcal F_N(u*v))(\xi)=\sqrt N\,(\mathcal F_Nu)(\xi)(\mathcal F_Nv)(\xi)$ ([[lem-finite-fourier-transform-converts-cyclic-convolution-to-scaled-product]]).

## Proof

**Given:** $N\ge1$ and $A\subseteq G$ as in [A1].

1.1 Set $f=1_A$ and $r=f*f$. By [F4], $r(x)=\sum_{y\in G}1_A(y)1_A(x-y)$. Each summand is $1$ exactly when $(y,x-y)$ is an ordered pair from $A^2$ with sum $x$, and the map $y\mapsto(y,x-y)$ is a bijection from contributing indices to such pairs. Thus $r(x)$ counts the ordered representations of $x$ as a sum of two elements of $A$. Partitioning the quadruples in [F2] by their common sum gives $E(A)=\sum_{x\in G}r(x)^2=\sum_{x\in G}|r(x)|^2$, since each $r(x)$ is a nonnegative integer. [given, A1, F2, F4, construct]

2.1 Apply [F3] to $r$ and use step 1.1 to obtain $E(A)=\sum_{\xi\in G}|(\mathcal F_Nr)(\xi)|^2$. [F3, step 1.1]

3.1 By [F5] with $u=v=f$, $(\mathcal F_Nr)(\xi)=\sqrt N\,(\mathcal F_Nf)(\xi)^2$ for every $\xi\in G$. The transform in [F5] is the negative-sign unitary transform fixed by [F1], so substitution in step 2.1 gives $E(A)=N\sum_{\xi\in G}|(\mathcal F_Nf)(\xi)|^4=N\sum_{\xi\in G}|\widehat{1_A}(\xi)|^4$. [A1, F1, F5, step 2.1, algebra] ∎

## Remarks

No choice principle is used: the argument uses only finite sums and the published finite-group Fourier identities. The factor $N$ follows from the unitary transform together with the unnormalised cyclic convolution.
