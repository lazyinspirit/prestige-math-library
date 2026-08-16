---
id: ex-a-cyclic-companion-operator
kind: example
title: "A companion operator with a visible cyclic vector and equal canonical polynomials"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-cyclic-subspace-power-basis-and-companion-matrix, thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials, lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]
aliases: []
landmark: false
proof_strategy: computation
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

For $f=x^3+x+1$, let
$$C=\begin{pmatrix}0&0&-1\\1&0&-1\\0&1&0\end{pmatrix}.$$
Then $e_1,Ce_1,C^2e_1$ are $e_1,e_2,e_3$, so $e_1$ is cyclic. The matrix is the companion matrix of $f$, and
$$\mu_C=\chi_C=f.$$

## Remarks

Over $\mathbb F_2$, the polynomial $x^3+x+1$ is irreducible and the same column orientation represents multiplication by its residue class in $\mathbb F_8=\mathbb F_2[x]/(x^3+x+1)$. This fixes the convention for a downstream computation of the Frobenius map of $\mathbb F_8/\mathbb F_2$; the present matrix is multiplication by the residue class, not the Frobenius operator, and no forward dependency is used here.

## Facts & Assumptions

**Given:** The displayed companion matrix $C$ and $v=e_1$.

[L1] If $m_{T,v}=x^d+a_{d-1}x^{d-1}+\cdots+a_0$, then $(v,Tv,\ldots,T^{d-1}v)$ is an ordered basis of $Z(v;T)$, and in this basis $T|_{Z(v;T)}$ has the companion matrix with ones on the subdiagonal and last column $(-a_0,\ldots,-a_{d-1})$ ([[thm-cyclic-subspace-power-basis-and-companion-matrix]]).

[L2] An endomorphism of a finite-dimensional vector space has a cyclic vector if and only if $\mu_T=\chi_T$ ([[thm-cyclic-vector-criterion-by-minimal-and-characteristic-polynomials]]).

[L3] For $A\in M_n(F)$, the polynomial $\chi_A(x)$ is monic of degree $n$ ([[lem-characteristic-polynomial-is-monic-and-has-extreme-coefficients]]).

## Verification

**Proof technique:** computation.

1.1 Matrix multiplication gives $Ce_1=e_2$ and $C^2e_1=e_3$, so the three power vectors are the standard basis and $e_1$ is cyclic. [algebra]

2.1 The columns show $Ce_3=-e_1-e_2$, so $C^3e_1=Ce_3=-e_1-e_2=-e_1-Ce_1$ and hence $f(C)e_1=(C^3+C+I)e_1=0$. Since $f(C)$ commutes with $C$, $f(C)C^je_1=C^jf(C)e_1=0$ for $j=0,1,2$, and step 1.1 makes $e_1,Ce_1,C^2e_1$ a basis, so $f(C)=0$. [step 1.1, algebra]

3.1 By step 1.1 the vector $e_1$ is cyclic, so [L2] gives $\mu_C=\chi_C$, and [L3] makes $\chi_C$ monic of degree $3$; thus $\mu_C$ is monic of degree $3$. By step 2.1, $\mu_C$ divides the monic degree-three polynomial $f$, so $\mu_C=f$ and therefore $\mu_C=\chi_C=f$. Since $m_{C,e_1}$ divides $f$ and $(e_1,Ce_1,C^2e_1)$ is a basis of $Z(e_1;C)=F^3$, $m_{C,e_1}=f$, and [L1] in that basis is exactly the displayed matrix, with last column $(-a_0,-a_1,-a_2)=(-1,-1,0)$. [step 1.1, step 2.1, L1, L2, L3, algebra] ∎
