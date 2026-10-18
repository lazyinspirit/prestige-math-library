---
id: ex-hereditary-a2-heart-product-in-derived-hall
kind: example
title: "The A2 hereditary-heart Hall product inside the derived Hall algebra"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 8
deps:
  - def-finite-field-and-its-order
  - def-hall-finitary-abelian-category
  - def-toen-locally-finite-dg-category
  - def-projective-object
  - prop-morphisms-from-a-homotopically-projective-complex-need-no-roof
  - thm-hereditary-heart-embeds-in-derived-hall-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §§6–7"
      url: "https://arxiv.org/pdf/math/0501343v4"
    - title: "Olivier Schiffmann, Lectures on Hall algebras, arXiv:math/0611617v2, §5.6"
      url: "https://arxiv.org/pdf/math/0611617v2"
---

## Example

Let $k=\mathbb F_q$ and let $Q$ be the quiver with one arrow $1\to2$. A representation is a linear map $V_1\to V_2$ between finite-dimensional $k$-vector spaces. Write $S_1=(k\to0)$, $S_2=(0\to k)$, and $P_1=(k\xrightarrow{\mathrm{id}}k)$. For any supplied locally finite dg-enhancement $\mathcal T$ of $D^b(\mathcal A)$ with the canonical bounded t-structure and its exact heart $\mathcal A$, the derived Hall product is

```tikzcd
1 \arrow[r,"a"] & 2
```

The vertices are numbered $1,2$ and the directed edge $a$ records the representation map $V_1\to V_2$. The diagram specifies the quiver only; all category, orbit and subobject claims are verified below.

$$
\chi_{S_2}*_{\mathcal{DH}}\chi_{S_1} =\chi_{S_1\oplus S_2}+\chi_{P_1}.
$$

## Facts & Assumptions

**Given:** The finite field $k=\mathbb F_q$, the quiver $1\to2$, its finite-dimensional representation category $\mathcal A$, and a supplied locally finite dg-enhancement $\mathcal T$ with $\operatorname{Perf}(\mathcal T)\simeq D^b(\mathcal A)$, the canonical bounded t-structure with heart $\mathcal A$, and the exact realization that short exact sequences in $\mathcal A$ give the corresponding distinguished triangles.

[F1] A small finitary abelian category has finite Hom sets and finite endpoint-fixed Yoneda $\operatorname{Ext}^1$ sets ([[def-hall-finitary-abelian-category]]).

[F2] The locally finite dg-enhancement and its cohomological right-module convention are specified in [[def-toen-locally-finite-dg-category]].

[F3] Projective objects lift maps through epimorphisms ([[def-projective-object]]), and morphisms from a homotopically projective complex are computed without a roof ([[prop-morphisms-from-a-homotopically-projective-complex-need-no-roof]]).

[A1] The supplied enhancement identifies $D^b(\mathcal A)$ with $\operatorname{Perf}(\mathcal T)$, carries the canonical bounded t-structure, and sends short exact sequences in $\mathcal A$ to the associated distinguished triangles.

[F4] The opposite Hall embedding gives $\chi_N*_{\mathcal{DH}}\chi_M=\sum_L g^L_{M,N}\chi_L$ when the heart satisfies the source hypotheses ([[thm-hereditary-heart-embeds-in-derived-hall-algebra]]).

## Verification

1.1 Kernels and cokernels of representation morphisms are formed vertexwise and inherit the arrow map; the coimage-to-image map is an isomorphism at both vertices, so $\mathcal A$ is abelian. Replacing each vertex space by $k^m$ gives a set-sized equivalent category of matrices $k^m\to k^n$. A morphism is a pair of matrices satisfying the arrow-commuting equation, hence each Hom set is finite. [given, F1, algebra]

1.2 The representations $P_1=(k\xrightarrow{\mathrm{id}}k)$ and $P_2=(0\to k)$ are projective because $\operatorname{Hom}(P_1,V)\cong V_1$ and $\operatorname{Hom}(P_2,V)\cong V_2$, and vertex evaluation preserves epimorphisms. For $V=(V_1\xrightarrow{a}V_2)$, the sequence $0\to P_2\otimes_kV_1\xrightarrow{\iota}(P_1\otimes_kV_1)\oplus(P_2\otimes_kV_2)\xrightarrow{\pi}V\to0$ has $\pi_1=\mathrm{id}_{V_1}$, $\pi_2(u,v)=a(u)+v$, and $\iota_2(u)=(u,-a(u))$ with $\iota_1=0$. Its vertexwise kernel equals the image of $\iota$, so this is a length-one projective resolution. The resulting two-term projective complex $P$ is homotopically projective: for any acyclic cochain complex $C$ and chain map $f:P\to C$, projectivity lifts $f^0:P^0\to Z^0(C)$ through $d_C^{-1}:C^{-1}\twoheadrightarrow Z^0(C)$ to $h^0$; then $u^{-1}=f^{-1}-h^0d_P^{-1}$ lands in $Z^{-1}(C)$, and projectivity lifts it through $d_C^{-2}$ to $h^{-1}$. The equations $f^0=d_C^{-1}h^0$ and $f^{-1}=d_C^{-2}h^{-1}+h^0d_P^{-1}$ give a null-homotopy; only two lifts are used. By [F3], $\operatorname{Hom}_{D^b(\mathcal A)}(V,W[i])$ is computed by $\operatorname{Hom}(P,W[i])$, which vanishes for $i>1$. Thus the canonical heart is hereditary in the cohomological-dimension sense of [F4]. [F3, F4, given, construct]

1.3 A middle representation has dimension vector $(1,1)$ and is a scalar map $\lambda:k\to k$. Isomorphisms act by $(g_1,g_2)\cdot\lambda=g_2\lambda g_1^{-1}$ with $g_1,g_2\in k^\times$. The zero scalar is one orbit, and all nonzero scalars form one orbit: for $\lambda,\mu\ne0$, $g_1=1$ and $g_2=\mu\lambda^{-1}$ send $\lambda$ to $\mu$. Hence the only middle classes are $S_1\oplus S_2$ and $P_1$. [given, algebra, choose]

2.1 A short exact sequence with fixed endpoints has middle dimension vector equal to the sum of their dimension vectors. There are finitely many arrow matrices for that dimension vector and finitely many injection and quotient matrices, so there are finitely many short exact sequences; their Yoneda classes are a quotient of this finite set. Thus $\mathcal A$ is small finitary as required by [F1]. [F1, step 1.1, algebra]

2.2 In either middle representation the only subrepresentation isomorphic to $S_2$ has vertex spaces $(0,k)$, and its quotient is $S_1$. The short exact sequence fixes dimension vector $(1,1)$, so no other middle classes contribute. Thus $g^{S_1\oplus S_2}_{S_1,S_2}=1$ and $g^{P_1}_{S_1,S_2}=1$. [given, step 1.3, algebra]

3.1 By steps 1.1–1.2 and [A1], $\mathcal A$ satisfies the finitary, hereditary, boundedness and exact-heart hypotheses of [F4]. Applying [F4] to the two coefficients from step 2.2 gives the displayed derived Hall product; the order is the opposite-heart order, as stated. [F2, F4, A1, step 1.1, step 1.2, step 2.2] ∎
