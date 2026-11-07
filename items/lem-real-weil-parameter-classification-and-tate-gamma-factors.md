---
id: lem-real-weil-parameter-classification-and-tate-gamma-factors
kind: lemma
title: Real Weil parameter classification and Tate gamma factors
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - thm-legendre-duplication-formula
sources:
  references:
    - title: Jayce R. Getz, An Introduction to Automorphic Representations
      url: https://sites.duke.edu/jgetz/files/2022/04/Graduate_Text.pdf
      locator: Section 12.2, printed p. 284, Lemma 12.2.1 and Proposition 12.2.2 with equations (12.10)–(12.12); the classification proof and matrix normalizations are given locally below.
    - title: Akshay Venkatesh, Sparse Equidistribution Problems, Period Bounds and Subconvexity
      url: https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf
      locator: Section 2.12.2, printed p. 1014, for the stated alternative complex-gamma convention; the Weil-group classification and comparisons below are proved locally.
---

## Statement

Let $W_{\mathbb R}=\mathbb C^\times\sqcup j\mathbb C^\times$, with $j^2=-1$ and $jzj^{-1}=\bar z$, and $W_{\mathbb C}=\mathbb C^\times$, with their usual topologies. Every finite-dimensional continuous semisimple complex representation of $W_{\mathbb R}$ is a finite direct sum, uniquely up to permutation and isomorphism, of the following irreducibles:

* $\lambda_{\epsilon,u}$, with $\epsilon\in\{0,1\}$ and $u\in\mathbb C$, on which $z\in\mathbb C^\times$ acts as $|z|^{2u}$ and $j$ acts as $(-1)^\epsilon$;
* $\tau_{m,u}$, with integer $m>0$ and $u\in\mathbb C$, on which
$$z\longmapsto |z|^{2u}\begin{pmatrix}(z/|z|)^m&0\\0&(z/|z|)^{-m}\end{pmatrix},\qquad j\longmapsto\begin{pmatrix}0&(-1)^m\\1&0\end{pmatrix}.$$

The two-dimensional representations are precisely the $\tau_{m,u}$ and the direct sums of two one-dimensional representations. Every finite-dimensional continuous semisimple representation of $W_{\mathbb C}$ is a direct sum of characters $\chi_{m,u}(z)=(z/|z|)^m|z|^{2u}$, $m\in\mathbb Z$, $u\in\mathbb C$, uniquely up to permutation.

Write $\Gamma_{\mathbb R}(s)=\pi^{-s/2}\Gamma(s/2)$, $\Gamma_{\mathbb C}^{\rm Tate}(s)=2(2\pi)^{-s}\Gamma(s)$ and $\Gamma_{\mathbb C}^{\rm V}(s)=(2\pi)^{-s}\Gamma(s)$. Define the parameter-side factors by assigning $\Gamma_{\mathbb R}(s+u+\epsilon)$ to $\lambda_{\epsilon,u}$ and $\Gamma_{\mathbb C}^{\rm Tate}(s+u+|m|/2)$ to $\chi_{m,u}$, assigning $\tau_{m,u}$ the factor of $\chi_{m,u}$, and multiplying on direct sums. With this explicit Tate gamma convention the resulting meromorphic factors are
$$L^{\rm Tate}(s,\lambda_{\epsilon,u})=\Gamma_{\mathbb R}(s+u+\epsilon),\qquad L^{\rm Tate}(s,\tau_{m,u})=\Gamma_{\mathbb C}^{\rm Tate}(s+u+m/2)=\Gamma_{\mathbb R}(s+u+m/2)\Gamma_{\mathbb R}(s+u+m/2+1),$$
and for a complex constituent $L^{\rm Tate}(s,\chi_{m,u})=\Gamma_{\mathbb C}^{\rm Tate}(s+u+|m|/2)=2\Gamma_{\mathbb C}^{\rm V}(s+u+|m|/2)$. These are identities under the stated convention; no correspondence from representations of $\mathrm{GL}_2(\mathbb R)$ or $\mathrm{GL}_2(\mathbb C)$ to Weil representations, and no compatibility with a separately defined $\mathrm{GL}_2$ local integral, is asserted.

## Facts & Assumptions

**Given:** The groups, representations and factor convention in the Statement.

[F1] [[thm-legendre-duplication-formula]] gives $\Gamma(z)\Gamma(z+1/2)=2^{1-2z}\sqrt\pi\,\Gamma(2z)$ as a meromorphic identity.

## Proof

1.1 The defining multiplication is associative: the two cosets form the crossed product with $jz=\bar z j$ and $j^2=-1$, and conjugation fixes $-1$. The displayed matrices respect these relations; in the second family the square of the matrix for $j$ is $(-1)^m I$, which is the matrix for $-1$, and conjugation by it interchanges the two diagonal entries. Therefore all displayed formulas give continuous representations. [given, construct, algebra]

1.2 A continuous character of $\mathbb R$ is $t\mapsto e^{ct}$: its positive modulus has a continuous additive logarithm, and its unitary part has a continuous local argument whose homomorphism law makes it locally additive; rational subdivision and continuity extend both linear formulas globally. Pulling back a continuous character of $S^1$ along $t\mapsto e^{it}$ makes its exponent $im t$ for $m\in\mathbb Z$ by $2\pi$-periodicity. On $\mathbb C^\times$ combine the circle and positive radius, and on $\mathbb R^\times$ use the value $\pm1$ at $-1$. This yields exactly the stated $\chi_{m,u}$ and the real characters $x\mapsto\operatorname{sgn}(x)^\epsilon|x|^u$. [given, construct, algebra]

2.1 Let $V$ be a nonzero irreducible finite-dimensional continuous representation of $W_{\mathbb R}$. Every positive real scalar in $\mathbb C^\times$ is central. Each corresponding operator has an eigenvalue over $\mathbb C$, and its eigenspace is a nonzero invariant subspace, so it acts by a scalar. These scalars form a continuous character of $\mathbb R_{>0}$, equal to $r^{2u}$ by step 1.2. Average any Hermitian inner product over the circle by the normalized finite integral $\int_0^{2\pi}d\theta/(2\pi)$; circle operators are then unitary. Commuting unitary operators have a common orthonormal eigenbasis: diagonalize one, split into its orthogonal eigenspaces invariant under all the others, and iterate until each restricted operator is scalar. The resulting circle characters are $e^{im\theta}$ with $m\in\mathbb Z$ by step 1.2. [step 1.2, given, construct, algebra]

3.1 Let $v$ be a nonzero circle weight vector of weight $m$. The identity $jzj^{-1}=\bar z$ makes $jv$ a weight $-m$ vector, while $j^2v=(-1)^m v$. Since the positive reals act by scalars, the span of $v,jv$ is stable under all of $W_{\mathbb R}$, hence equals $V$. If $m\ne0$ the two weights differ and the basis $v,jv$ gives $\tau_{|m|,u}$ after choosing the positive-weight vector. Conversely its two distinct weight spaces are exchanged by $j$, so it is irreducible. If $m=0$, then $j^2=1$ on $V$; a nonzero $j$-eigenvector is invariant under the entire group and hence spans $V$, with $j$-eigenvalue $\pm1$. This gives $\lambda_{\epsilon,u}$. The radial character, circle weights, and in weight zero the eigenvalue of $j$ distinguish the listed irreducibles. [step 2.1, given, algebra]

4.1 For $W_{\mathbb C}$ the same averaging argument gives a circle-weight basis. The commuting positive real operators preserve each circle-weight space. A commuting family of complex matrices has a common eigenvector by successive eigenspace restriction, so an irreducible representation is one-dimensional and its character is $\chi_{m,u}$ by step 1.2. The asserted finite decompositions follow from the semisimplicity hypothesis; multiplicities are unique because the isotypic component for each irreducible has a unique dimension, equivalently by applying $\operatorname{Hom}$ from that irreducible and Schur's lemma, whose finite-dimensional proof follows from the kernel and image of an intertwiner. The two-dimensional alternatives follow by dimension. [step 1.2, step 2.1, step 3.1, given, algebra]

5.1 The stated factor convention gives the first and third displayed Tate expressions. In the two-dimensional real case put $w=s+u+m/2$. Substituting $z=w/2$ into [F1] gives $$\Gamma_{\mathbb R}(w)\Gamma_{\mathbb R}(w+1)=\pi^{-w-1/2}\Gamma(w/2)\Gamma((w+1)/2)=2(2\pi)^{-w}\Gamma(w).$$ The final relation is the definition of $\Gamma_{\mathbb C}^{\rm V}$. These equalities are meromorphic identities; the convention does not assert the missing local Langlands or local-integral compatibility. [F1, given, algebra] ∎

## References

[Getz, *An Introduction to Automorphic Representations*, §12.2](https://sites.duke.edu/jgetz/files/2022/04/Graduate_Text.pdf)

[Venkatesh, *Sparse Equidistribution Problems, Period Bounds and Subconvexity*, §2.12.2](https://annals.math.princeton.edu/wp-content/uploads/annals-v172-n2-p05-p.pdf)

## Remarks

The parameter-side factor for $\tau_{m,u}$ is an explicit convention here. Identifying it with a factor of an actual representation of $\mathrm{GL}_2(\mathbb R)$ requires an independently proved assignment and compatibility. At a complex place the two displayed gamma conventions differ by a constant factor of $2$ per constituent, although their gamma shifts coincide.
