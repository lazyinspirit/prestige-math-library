---
id: ex-hard-lefschetz-splitting-for-a-three-degree-complex
kind: example
title: "Hard Lefschetz splitting for a three-degree complex"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [lem-hard-lefschetz-splits-a-bounded-t-structure-complex, def-truncation-functors-and-cohomology-of-a-t-structure, lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude, def-canonical-t-structure-on-a-derived-category, thm-the-canonical-pair-is-a-t-structure, def-derived-category-of-an-abelian-category, thm-the-derived-category-inherits-a-triangulated-structure, prop-cohomology-factors-through-the-derived-category, thm-modules-over-a-ring-form-an-abelian-category, thm-rank-nullity, thm-first-isomorphism-theorem-in-an-abelian-category, cor-dimension-of-a-direct-sum, cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension, def-biproduct]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "A. A. Beilinson, J. Bernstein and P. Deligne, «Faisceaux pervers», Astérisque 100 (1982), Société Mathématique de France (complete numdam PDF)"
      url: "https://www.numdam.org/item/AST_1982__100__1_0.pdf"
      locator: "§1.3.1–1.3.9, printed pp. 28–33; §5.4.10–5.4.13, printed pp. 143–147"
    - title: "P. Deligne, «Théorème de Lefschetz et critères de dégénérescence de suites spectrales», Publ. Math. IHÉS 35 (1968) 107–126 (complete numdam PDF)"
      url: "https://www.numdam.org/item/PMIHES_1968__35__107_0.pdf"
      locator: "§1, results (1.1)–(1.13) with proofs, printed pp. 107–110"
---

## Example

Let $k$ be a field and let $\mathcal T=D^b(\mathbf{vect}^{fd}_k)$ be the bounded derived category of finite-dimensional $k$-vector spaces with its canonical t-structure. Take
$$K=k[2]\oplus k\oplus k[-2]\in\mathcal T,$$
and let $L:K\to K[2]$ identify the first summand $k[2]$ with the shifted second summand $k[2]$ of $K[2]$, the second summand $k$ with the shifted third summand $k$ of $K[2]$, and the third summand $k[-2]$ with $0$. Its nonzero t-cohomology objects are
$$H^{-2}_t(K)=k,\qquad H^0_t(K)=k,\qquad H^2_t(K)=k,$$
and for every $j\ge0$ the map $H^{-j}_t(L^j)$ is an isomorphism: $j=0$ and $j=2$ are the two Lefschetz steps, while for $j=1$ and for $j\ge3$ both sides are zero. Consequently the splitting of [[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]] returns exactly
$$K\cong H^{-2}_t(K)[2]\oplus H^0_t(K)\oplus H^2_t(K)[-2]=k[2]\oplus k\oplus k[-2].$$
This example tests the abstract splitting on the simplest complex with two hard Lefschetz steps; it does not test primitive-lift compatibility.

## Facts & Assumptions

**Given:** A field $k$, the category $\mathbf{vect}^{fd}_k$ of finite-dimensional $k$-vector spaces and its bounded derived category $\mathcal T=D^b(\mathbf{vect}^{fd}_k)$ with the canonical t-structure, the object $K=k[2]\oplus k\oplus k[-2]$ and the morphism $L:K\to K[2]$ described in the Example.

[F1] Abelian and size structure of the coefficient category: finite-dimensional $k$-vector spaces form the full subcategory of the abelian category $k\text{-}\mathbf{Mod}$ ([[thm-modules-over-a-ring-form-an-abelian-category]]) closed under kernels, cokernels and finite direct sums, as supplied by rank-nullity ([[thm-rank-nullity]]), the first isomorphism theorem ([[thm-first-isomorphism-theorem-in-an-abelian-category]]) and the dimension of a direct sum ([[cor-dimension-of-a-direct-sum]]); a finite-dimensional space is isomorphic to $k^n$ for $n=\dim_kV$ ([[cor-finite-dimensional-vector-spaces-are-isomorphic-iff-equal-dimension]]), so the category is essentially small and the standing size hypothesis of [[def-derived-category-of-an-abelian-category]] holds. Hence $\mathcal T$ is triangulated ([[thm-the-derived-category-inherits-a-triangulated-structure]]) and carries the canonical t-structure $\mathcal T^{\le0}=\{X:H^i(X)=0\text{ for }i>0\}$, $\mathcal T^{\ge0}=\{X:H^i(X)=0\text{ for }i<0\}$ on $D^b$ ([[def-canonical-t-structure-on-a-derived-category]], [[thm-the-canonical-pair-is-a-t-structure]]), where $H^i$ denotes the cohomology functor on the derived category ([[prop-cohomology-factors-through-the-derived-category]]).

[F2] Boundedness: a bounded complex has cohomology vanishing outside some finite interval of degrees, so it lies in $\mathcal T^{\le n}\cap\mathcal T^{\ge -n}$ for $n$ large; thus the canonical t-structure is bounded ([[def-truncation-functors-and-cohomology-of-a-t-structure]]).

[F3] Heart and shift rules ([[lem-t-cohomology-is-additive-shift-compatible-and-detects-amplitude]]): an object of the heart satisfies $X\cong H^0_t(X)$ and $H^j_t(X)=0$ for $j\ne0$; more generally $H^j_t(X[m])\cong H^{j+m}_t(X)$ naturally, and for a finite biproduct the structure maps identify $H^j_t$ of the sum with the direct sum of the $H^j_t$ of the summands.

[F4] The hard Lefschetz splitting lemma: for a triangulated category with a bounded t-structure and a morphism $L:K\to K[2]$ with every $H^{-j}_t(L^j)$, $j\ge0$, an isomorphism, one has $K\cong\bigoplus_jH^j_t(K)[-j]$ ([[lem-hard-lefschetz-splits-a-bounded-t-structure-complex]]).

## Verification

**Proof technique:** direct.

1.1 By (F1) the category $\mathcal T=D^b(\mathbf{vect}^{fd}_k)$ is triangulated and carries the canonical t-structure, which is bounded by (F2). The complex $k$ concentrated in degree zero lies in the heart, since $H^i(k)=0$ for $i\ne0$; hence $H^0_t(k)\cong k$ and $H^j_t(k)=0$ for $j\ne0$ by (F3). [given, F1, F2, F3]

2.1 Since $k[m]$ satisfies $H^j_t(k[m])\cong H^{j+m}_t(k)$ by the shift rule (F3), it has $H^j_t(k[m])\cong k$ for $j=-m$ and vanishing $H^j_t$ otherwise. The object $K=k[2]\oplus k\oplus k[-2]$ is a finite biproduct in the additive category $\mathcal T$ ([[def-biproduct]]), so additivity of $H^j_t$ gives $H^{-2}_t(K)\cong k$, $H^0_t(K)\cong k$, $H^2_t(K)\cong k$, and $H^j_t(K)=0$ for all other $j$; in particular $H^{-1}_t(K)=0$ and $H^j_t(K)=0$ for $j\ge3$. [step 1.1, F3]

3.1 The description of $L$ is a well-defined morphism: $K[2]=k[4]\oplus k[2]\oplus k$, and $L$ has the canonical isomorphisms $k[2]\xrightarrow{\cong}k[2]$ and $k\xrightarrow{\cong}k$ as its components onto the second and third summands of $K[2]$, all other components being zero, so the third summand $k[-2]$ is carried to $0$. Its iterate $L^2=L[2]\circ L$ maps $K$ to $K[4]=k[6]\oplus k[4]\oplus k[2]$, carrying the first summand $k[2]$ isomorphically onto the third summand $k[2]$ of $K[4]$ (first through the second summand of $K[2]$, then through the third summand of $K[4]$) and killing the other two summands; and $L^0=1_K$. [step 2.1, given]

4.1 Hence $H^{-j}_t(L^j)$ is an isomorphism for every $j\ge0$. For $j=0$ it is the identity of $H^0_t(K)=k$; for $j=1$ its source $H^{-1}_t(K)$ is zero and its target $H^{-1}_t(K[2])\cong H^1_t(K)$ is zero; for $j=2$ it is the isomorphism induced on $H^{-2}_t$ by the nonzero component $k[2]\xrightarrow{\cong}k[2]$ of $L^2$, between $H^{-2}_t(K)\cong k$ and $H^{-2}_t(K[4])\cong H^2_t(K)\cong k$; and for $j\ge3$ the source $H^{-j}_t(K)$ and the target $H^{-j}_t(K[2j])\cong H^j_t(K)$ both vanish. A map between zero objects is an isomorphism, so the hard Lefschetz hypothesis holds in every case. [step 2.1, step 3.1, F3]

5.1 The hypotheses of (F4) are therefore satisfied: $\mathcal T$ is triangulated with a bounded t-structure and $L$ satisfies the hard Lefschetz condition. The lemma yields $K\cong\bigoplus_jH^j_t(K)[-j]=H^{-2}_t(K)[2]\oplus H^0_t(K)\oplus H^2_t(K)[-2]=k[2]\oplus k\oplus k[-2]$, which is the displayed $K$, so the abstract splitting returns exactly the direct sum of the shifted t-cohomology objects and the example checks no more than that. [step 1.1, step 4.1, F4] ∎
