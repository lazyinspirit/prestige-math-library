---
id: prop-hochschild-degree-zero-is-bimodule-coinvariants
kind: proposition
title: Degree-zero Hochschild homology is bimodule coinvariants
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps: [def-hochschild-chain-complex-of-a-bimodule, def-enveloping-algebra-and-bimodule-module-dictionary, def-vector-space, thm-modules-over-a-ring-form-an-abelian-category, def-cycle-and-boundary-subobjects-of-a-complex, def-homology-object-of-a-chain-complex, def-module-homomorphism-kernel-image-and-cokernel, thm-module-kernel-image-and-injectivity, def-tensor-product-of-modules-by-generators-and-relations, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-quotient-module, thm-quotient-module-laws, def-algebra-over-a-commutative-ring, cor-square-matrices-form-a-ring, def-matrix-space, thm-matrix-multiplication-laws, def-matrix-product-and-identity-matrix, def-matrix-units, lem-matrix-unit-multiplication, def-trace-of-a-square-matrix, thm-trace-of-ab-equals-trace-of-ba, prop-trace-is-linear]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 9: Hochschild and Cyclic Homology, §9.1.1"
      url: https://math.mit.edu/~hrm/palestine/weibel/09-hochschild_and_cyclic_homology.pdf
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Hochschild homology section"
      url: https://arxiv.org/pdf/math/0510265
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
---

## Statement

Let $k$ be a field, $A$ a unital associative $k$-algebra, and $M$ a
$k$-central $A$-bimodule. Then there is a canonical $k$-module isomorphism

$$HH_0(A,M)\cong M/D(A,M),\qquad D(A,M):=\operatorname{span}_k\{am-ma:a\in A,\ m\in M\}.$$

The denominator $D(A,M)$ is a $k$-subspace of $M$. It need not be a two-sided
ideal or a sub-bimodule: this failure occurs for the regular bimodule of
$M_2(k)$.

## Facts & Assumptions

**Given:** A field $k$, a unital associative $k$-algebra $A$, and a $k$-central $A$-bimodule $M$.

[F1] The Hochschild chain definition sets $C_0(A,M)=M$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F2] The Hochschild chain definition sets $b_0=0$ and $b_1(m\otimes a)=ma-am$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F3] The Hochschild homology definition sets $HH_n(A,M)=H_n(C_\bullet(A,M))$ ([[def-hochschild-chain-complex-of-a-bimodule]]).

[F4] The degree-$n$ cycle and boundary subobjects are respectively $\ker(d_n)$ and $\operatorname{im}(d_{n+1})$ ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[F5] Homology is the cokernel of the boundary-to-cycle map, equivalently the quotient of cycles by boundaries ([[def-homology-object-of-a-chain-complex]]).

[F6] Every element of $M\otimes_k A$ is a finite sum of elementary tensors ([[def-tensor-product-of-modules-by-generators-and-relations]]).

[F7] The span of a subset of a vector space is a linear subspace and consists of its finite linear combinations, including the empty sum ([[def-linear-combination-and-span]], [[lem-span-is-the-set-of-linear-combinations]]).

[F8] The cokernel of a module homomorphism is the quotient by its image ([[def-module-homomorphism-kernel-image-and-cokernel]]).

[F9] The image of a module homomorphism is a submodule ([[thm-module-kernel-image-and-injectivity]]).

[F10] A quotient by a submodule has the induced module structure ([[def-quotient-module]]).

[F11] The quotient action is well-defined and satisfies the module laws ([[thm-quotient-module-laws]]).

[F12] For every ring $R$, the category of left $R$-modules is abelian ([[thm-modules-over-a-ring-form-an-abelian-category]]).

[F13] $M_n(k)$ is the vector space of $n$ by $n$ matrices with entrywise addition and scalar multiplication ([[def-matrix-space]]).

[F14] $M_n(k)$ is a unital ring with entrywise addition and matrix multiplication ([[cor-square-matrices-form-a-ring]]).

[F15] Matrix multiplication is associative and unital, distributes over addition, and is compatible with scalar multiplication ([[thm-matrix-multiplication-laws]]).

[F16] A $k$-algebra is a unital ring with a unital ring map from $k$ whose image is central ([[def-algebra-over-a-commutative-ring]]).

[F17] Matrix products are defined by row-by-column sums and $I_n$ is the identity matrix ([[def-matrix-product-and-identity-matrix]]).

[F18] The matrix unit $E_{ij}$ has a single $1$ in entry $(i,j)$ and zeros elsewhere ([[def-matrix-units]]).

[F19] Matrix units multiply by $E_{ij}E_{r s}=\delta_{jr}E_{i s}$ ([[lem-matrix-unit-multiplication]]).

[F20] The trace of a square matrix is the sum of its diagonal entries ([[def-trace-of-a-square-matrix]]).

[F21] For square matrices $X,Y$ over $k$, $\operatorname{tr}(XY)=\operatorname{tr}(YX)$ ([[thm-trace-of-ab-equals-trace-of-ba]]).

[F22] Trace is $k$-linear ([[prop-trace-is-linear]]).

[F23] The regular bimodule has left and right actions given by multiplication ([[def-enveloping-algebra-and-bimodule-module-dictionary]]).

## Source notes

Weibel, *An Introduction to Homological Algebra*, §9.1.1, printed p.300/PDF p.0, lines 17–19, identifies the image of the degree-one face difference with the commutator submodule and gives the degree-zero quotient. Khovanov, “Triply-graded link homology and Hochschild homology of Soergel bimodules,” “Hochschild homology,” PDF p.1, lines 9–13, defines the coinvariant quotient by the span of commutators and identifies it with $R\otimes_{R^e}M$. These passages confirm the convention up to the harmless sign reversal in our $b_1$; the equality $\operatorname{im}b_1=D(A,M)$ is proved in steps 2.1–2.2.

## Proof

**Proof technique:** direct.

1.1 By [F1], [F2], and [F4], $Z_0(C)=\ker b_0=M$ and $B_0(C)=\operatorname{im}b_1$. Thus [F5] identifies $HH_0(A,M)$ with the cokernel of the inclusion $\operatorname{im}b_1\hookrightarrow M$. [F1, F2, F3, F4, F5, F12, given]

1.2 Let $z\in C_1=M\otimes_k A$. By [F6], write $z=\sum_{i<r}m_i\otimes a_i$. Then [F2] gives $$b_1(z)=\sum_{i<r}(m_i a_i-a_i m_i) =-\sum_{i<r}(a_i m_i-m_i a_i)\in D(A,M).$$ So $\operatorname{im}b_1\subseteq D(A,M)$. [F2, F6, F7, given]

1.3 To verify the asserted failure of ideal and sub-bimodule closure, take $A=M=M_2(k)$ with the regular bimodule. By [F13] and [F14] this is a vector space and a unital ring. Define $\eta:k\to M_2(k)$ by $\eta(\lambda)=\lambda I_2$. Entrywise operations and [F15], [F17] give $$\eta(1)=I_2,\qquad \eta(\lambda+\mu)=\eta(\lambda)+\eta(\mu), \qquad \eta(\lambda\mu)=\eta(\lambda)\eta(\mu),$$ and for every $X\in M_2(k)$, $$\eta(\lambda)X=\lambda X=X\eta(\lambda).$$ Thus [F16] makes $A$ a unital associative $k$-algebra. The regular left and right actions in [F23] commute by associativity, and the displayed centrality shows they agree on $k$, so $M$ is $k$-central. [F13, F14, F15, F16, F17, F23, given]

1.4 For any $X,Y\in M_2(k)$, [F21] and [F22] imply $\operatorname{tr}(XY-YX)=0$. Since every element of $D(A,A)$ is a finite $k$-linear combination of commutators by [F7], [F22] implies $D(A,A)\subseteq\ker(\operatorname{tr})$. [F7, F21, F22, given]

1.5 If $M=0$, then $C_0=0$, $b_1=0$, $D(A,M)=0$, and both sides of the isomorphism are zero. If $A=k$, $k$-centrality gives $am=ma$ for every $a\in k,m\in M$, so $D(k,M)=0$ and [F3] gives $HH_0(k,M)=M$. In both cases the canonical quotient map is the asserted isomorphism. No basis, projectivity, or choice is used; in particular, AC is neither assumed nor invoked. [F1, F2, F3, F7, given]

2.1 Conversely, by [F7] an arbitrary $d\in D(A,M)$ has the form $d=\sum_{i<r}\lambda_i(a_i m_i-m_i a_i)$. The tensor $w=-\sum_{i<r}\lambda_i m_i\otimes a_i$ satisfies $$b_1(w)=-\sum_{i<r}\lambda_i(m_i a_i-a_i m_i)=d$$ by linearity of $b_1$ and [F2]. This also covers the empty sum $r=0$, for which $d=w=0$. Hence $D(A,M)\subseteq\operatorname{im}b_1$, so $\operatorname{im}b_1=D(A,M)$. [F2, F6, F7, step 1.2, given]

2.2 By [F18] and [F19], $$E_{01}E_{11}=E_{01},\qquad E_{11}E_{01}=0,$$ so $E_{01}=E_{01}E_{11}-E_{11}E_{01}\in D(A,A)$. But $$E_{01}E_{10}=E_{00},\qquad \operatorname{tr}(E_{00})=1_k\ne0_k$$ by [F19], [F20], and the field axiom $1_k\ne0_k$. Therefore $E_{00}\notin D(A,A)$ by step 1.4. [F18, F19, F20, step 1.4, given]

3.1 By [F7], $D(A,M)$ is a $k$-subspace. Steps 1.1 and 2.1 therefore identify the homology cokernel with the quotient module $M/D(A,M)$ by [F8], [F9], [F10], and [F11]. The isomorphism is induced by the identity on $M$, so it is canonical. [F7, F8, F9, F10, F11, step 1.1, step 2.1, given]

3.2 Since $E_{01}\in D(A,A)$ while $E_{01}E_{10}\notin D(A,A)$, this subspace is not closed under the right regular action. Hence it is neither a two-sided ideal nor an $A$-sub-bimodule, proving the stated qualification. [step 2.2, F23]

∎
