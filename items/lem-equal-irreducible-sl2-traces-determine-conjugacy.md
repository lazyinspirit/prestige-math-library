---
id: lem-equal-irreducible-sl2-traces-determine-conjugacy
kind: lemma
title: Equal irreducible SL2 trace characters determine conjugacy
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: []
justified_by: []
proof_strategy: direct
axiom_use: The proof uses finite-dimensional linear algebra and complex square
  roots only; no choice axiom is required.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Cooper, Culler, Gillet, Long and Shalen, Plane Curves Associated to
        Character Varieties of 3-Manifolds
      url: https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf
      locator: Section2.1 uses the trace character model. The rank-two matrix-algebra
        and conjugacy proofs are supplied explicitly below.
dependency_level: 0
---

## Statement

Let $G$ be any group and $\rho,\rho':G\to SL_2(\mathbb C)$ be representations with $$\operatorname{tr}\rho(g)=\operatorname{tr}\rho'(g)\qquad(g\in G).$$ If $\rho$ is irreducible, then $\rho'$ is irreducible and there is $P\in SL_2(\mathbb C)$ such that $\rho'(g)=P\rho(g)P^{-1}$ for every $g$. If $\rho$ is reducible, it has the same trace character as its diagonal semisimplification $g\mapsto\operatorname{diag}(\chi(g),\chi(g)^{-1})$, where $\chi:G\to\mathbb C^*$ is the character on a common invariant line. The two diagonal characters $\chi,\chi^{-1}$ determine the same semisimple conjugacy class. This is a pointwise statement; it does not assert that an irreducible character component admits a tautological representation over its function field or prove rational quotient descent.

## Statement references

[Cooper, Culler, Gillet, Long and Shalen, §2.1](https://homepages.math.uic.edu/~culler/papers/PlaneCurves/curves.pdf)

## Facts & Assumptions

**Given:** The group and two representations with the stated equal traces. A representation is irreducible if it has no common invariant complex line in $\mathbb C^2$.

[F1] The complex span of the matrices in a group representation is a unital matrix algebra, since products of image matrices are image matrices. Every complex $2\times2$ characteristic polynomial splits, by its explicit quadratic formula and existence of complex square roots.

## Proof

1.1 **The actual rank-two matrix-algebra argument.** Let $A\subseteq M_2(\mathbb C)$ be a unital subalgebra acting irreducibly. It contains a nonscalar element, since scalar matrices preserve every line. If some $T\in A$ has distinct eigenvalues, conjugate to an eigenbasis. Its two rank-one spectral projections belong to $A$, being degree-one polynomials in $T$, so $E_{11},E_{22}\in A$. Irreducibility forces an element $B\in A$ with $b_{12}\ne0$, since otherwise every element preserves the second coordinate line; it also forces $C\in A$ with $c_{21}\ne0$, since otherwise every element preserves the first coordinate line. Thus $E_{11}BE_{22}=b_{12}E_{12}$ and $E_{22}CE_{11}=c_{21}E_{21}$ put all four matrix units in $A$. If no element initially has distinct eigenvalues, take a nonscalar $T$ and subtract its repeated eigenvalue. The resulting nonzero nilpotent is conjugate, after scaling one basis vector, to $N=E_{12}$. Irreducibility again supplies $B$ with $b_{21}\ne0$. Then $NB=\left(\begin{smallmatrix}b_{21}&b_{22}\\0&0\end{smallmatrix}\right)$ has distinct eigenvalues $b_{21},0$ and reduces to the previous case. Hence every such algebra is $M_2(\mathbb C)$. In particular an irreducible group image spans the full matrix algebra by [F1]. [F1, given, cases, construct, algebra]

2.1 **Irreducibility is detected by the trace character.** Choose four group elements $g_i$ whose images under an irreducible $\rho$ are a basis of $M_2$; such a finite basis can be extracted from its spanning image in step 1.1. The trace pairing $\langle A,B\rangle=\operatorname{tr}(AB)$ is nondegenerate: pairing with $E_{ij}$ reads the $(j,i)$ matrix entry. Therefore its Gram matrix $\bigl(\operatorname{tr}\rho(g_ig_j)\bigr)_{i,j=1}^4$ is invertible. The equal character gives the identical Gram matrix for the four $\rho'(g_i)$. Those four matrices are independent, because a dependence would give a kernel vector of that Gram matrix. A reducible representation is triangular in an invariant-line basis and its image spans at most the three-dimensional upper-triangular algebra. Thus $\rho'$ cannot be reducible. [given, step 1.1, construct, algebra]

3.1 **Trace equality defines an algebra isomorphism.** Both images now span $M_2$. Define on finite linear combinations $$\Phi\Bigl(\sum_i c_i\rho(g_i)\Bigr)=\sum_i c_i\rho'(g_i).$$ This is well defined. Indeed if the source combination is zero, its proposed image pairs to zero with every $\rho'(h)$, since $$\sum_i c_i\operatorname{tr}\rho'(g_ih)=\sum_i c_i\operatorname{tr}\rho(g_ih)=0.$$ The second image spans $M_2$ and its trace pairing is nondegenerate, so that proposed image is zero. The inverse construction with the representations exchanged proves bijectivity. Multiplication on the group image, then bilinearity, proves that $\Phi$ is a unital algebra isomorphism and $\Phi(\rho(g))=\rho'(g)$. [given, step 1.1, step 2.1, construct, algebra]

4.1 **The algebra isomorphism is explicitly inner.** Put $Q_{ij}=\Phi(E_{ij})$. The nonzero proper idempotent $Q_{11}$ has rank one, because $Q_{11}^2=Q_{11}$ and $Q_{22}=I-Q_{11}$ is also nonzero. Choose $v_1\ne0$ in its image and put $v_2=Q_{21}v_1$. The identity $Q_{12}Q_{21}=Q_{11}$ implies $v_2\ne0$ and $Q_{12}v_2=v_1$. Also $Q_{11}v_1=v_1$ and $Q_{11}v_2=0$, so $v_1,v_2$ are independent. The matrix-unit identities now show $Q_{ij}v_k=\delta_{jk}v_i$. Hence, for the invertible matrix $P_0$ with these columns, $\Phi(A)=P_0AP_0^{-1}$ for every $A$. Multiplying $P_0$ by a scalar whose square is $(\det P_0)^{-1}$ makes its determinant one without changing conjugation; a nonzero complex number has such a square root. Thus the asserted $P\in SL_2(\mathbb C)$ exists. These selections involve only finitely many nonempty sets. [F1, step 3.1, construct, algebra]

5.1 **The reducible character is its diagonal one.** In a basis beginning with a common invariant-line vector, write $$\rho(g)=\begin{pmatrix}\chi(g)&c(g)\\0&\chi(g)^{-1}\end{pmatrix}.$$ The product law makes $\chi$ a multiplicative map to $\mathbb C^*$, and the trace of every group word is $\chi(g)+\chi(g)^{-1}$, exactly the trace of the diagonal representation. Conjugation by $\left(\begin{smallmatrix}0&1\\-1&0\end{smallmatrix}\right)\in SL_2$ exchanges its two diagonal characters. This proves the semisimplification assertions, not conjugacy of every triangular representative to its diagonal part. Steps 1.1–4.1 prove the irreducible conclusion. All spans, bases, roots and matrix operations used are finite, so no choice axiom is introduced. [given, step 1.1, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
