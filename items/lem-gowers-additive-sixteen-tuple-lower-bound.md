---
dependency_level: 0
id: lem-gowers-additive-sixteen-tuple-lower-bound
kind: lemma
title: "Additive quadruples force many graph-additive sixteen-tuples"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-orthogonality-of-characters-on-a-finite-cyclic-group
  - def-unitary-discrete-fourier-transform-on-z-mod-n
  - thm-holder-inequality-for-integrals
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "W. T. Gowers, A new proof of Szemeredi theorem, Lemmas 9.1--9.2, printed pp.515--516"
      url: https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf
---

## Statement

Let $N\ge1$, $G=\mathbb Z/N\mathbb Z$, $B\subseteq G$, and $\phi:B\to G$. Suppose $0<\kappa\le1$ and at least $\kappa N^3$ ordered quadruples in $B^4$ satisfy
$$a_1+a_2=a_3+a_4,\qquad \phi(a_1)+\phi(a_2)=\phi(a_3)+\phi(a_4).$$
Then at least $\kappa^7N^{15}$ ordered tuples in $B^{16}$ satisfy
$$\sum_{j=1}^8a_j=\sum_{j=9}^{16}a_j,\qquad \sum_{j=1}^8\phi(a_j)=\sum_{j=9}^{16}\phi(a_j).$$
The modulus need not be prime.

## Statement references

[Gowers, Lemmas 9.1--9.2, printed pp.515--516](https://www.cs.umd.edu/~gasarch/TOPICS/vdw/sz-thm-gowers-proof.pdf)

## Facts & Assumptions

**Given:** The finite group, subset, map and positive quadruple lower bound in the Statement.

[F1] For $e_N(x)=\exp(2\pi i\widetilde x/N)$ on residue classes, $\sum_{r\in G}e_N(rx)$ is $N$ when $x=0$ and zero otherwise ([[lem-orthogonality-of-characters-on-a-finite-cyclic-group]], [[def-unitary-discrete-fourier-transform-on-z-mod-n]]). The character has modulus one and is additive in its exponent.

[F2] Finite Holder with conjugate exponents $7/6$ and $7$ is [[thm-holder-inequality-for-integrals]] on counting measure.

## Proof

1.1 For $u,r\in G$ set $Z_{u,r}=\sum_{a\in B}e_N(u\phi(a)-ra)$, and write $S_j=\sum_{u,r}|Z_{u,r}|^j$ for $j=2,4,16$. Expanding each even power and applying [F1] in the two independent frequencies gives $S_2=N^2|B|\le N^3$, $S_4=N^2Q$, and $S_{16}=N^2T$, where $Q$ is the number of specified quadruples and $T$ the number of specified sixteen-tuples. All second-half coefficients are complex conjugated, giving exactly the two displayed difference equations. [given, F1, construct, algebra]

2.1 Write $|Z|^4=(|Z|^2)^{6/7}(|Z|^{16})^{1/7}$. Holder [F2] gives $S_4\le S_2^{6/7}S_{16}^{1/7}$. The assumed positive quadruple count makes $S_2>0$, so $S_{16}\ge S_4^7/S_2^6\ge(\kappa N^5)^7/(N^3)^6=\kappa^7N^{17}$. Divide by $N^2$ in step 1.1 to obtain $T\ge\kappa^7N^{15}$. Orthogonality and the finite inequality hold for every $N$, including $N=1$. [F2, step 1.1, algebra] ∎
