---
id: "lem-k-flat-abelian-sheaf-complexes-preserve-quasi-isomorphisms"
kind: "lemma"
title: "K-flat sheaf complexes preserve quasi-isomorphisms"
status: draft
origin: pipeline
deps: [def-k-flat-complex-of-abelian-sheaves, def-tensor-product-of-abelian-sheaves, def-derived-category-of-an-abelian-category, cor-the-cone-criterion-from-the-general-long-exact-sequence, def-bounded-bounded-below-and-bounded-above-complex, def-quasi-isomorphism, def-exactness-of-a-complex-at-a-degree-and-acyclic-complex, def-cochain-map, def-cochain-complex-in-an-abelian-category, lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "The Stacks Project, Cohomology of Sheaves"
      url: https://stacks.math.columbia.edu/download/cohomology.pdf
      locator: "Lemmas 26.1 and 26.3; sign conventions of Section 26"
---

## Statement

Let $X$ be a topological space, let $\mathcal K^\bullet$ be a
K-flat bounded-above complex of abelian sheaves on $X$
([[def-k-flat-complex-of-abelian-sheaves]]), and let
$s:\mathcal A^\bullet\to\mathcal B^\bullet$ be a quasi-isomorphism of
bounded-above complexes of abelian sheaves ([[def-quasi-isomorphism]]).

1. The induced morphism of tensor-product total complexes
   $$\operatorname{Tot}(s\otimes\operatorname{id}_{\mathcal K}):\operatorname{Tot}(\mathcal A^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)\longrightarrow\operatorname{Tot}(\mathcal B^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$$
   of [[def-tensor-product-of-abelian-sheaves]] is a quasi-isomorphism.
2. The same holds with the K-flat factor on the left: if $\mathcal K^\bullet$ is
   K-flat and $s$ is a quasi-isomorphism, then
   $\operatorname{Tot}(\operatorname{id}_{\mathcal K}\otimes s)$ is a
   quasi-isomorphism, through the canonical isomorphism
   $\operatorname{Tot}(\mathcal K^\bullet\otimes_{\mathbb Z}\mathcal A^\bullet)\cong\operatorname{Tot}(\mathcal A^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$
   which on $\mathcal K^j\otimes_{\mathbb Z}\mathcal A^i$ is
   $y\otimes x\mapsto(-1)^{ij}x\otimes y$.

## Facts & Assumptions

[F1] A bounded-above complex $\mathcal K^\bullet$ is K-flat when for every acyclic bounded-above complex $\mathcal F^\bullet$ the tensor-product total complex $\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ is acyclic ([[def-k-flat-complex-of-abelian-sheaves]]).

[F2] For a cochain map $f$ the cone $\operatorname{Cone}(f)$ is acyclic if and only if $f$ is a quasi-isomorphism ([[cor-the-cone-criterion-from-the-general-long-exact-sequence]], [[def-quasi-isomorphism]]).

[F3] The cone convention is $\operatorname{Cone}(f)^n=Y^n\oplus X^{n+1}$ with $d(y,x)=(d_Yy+fx,-d_Xx)$ ([[def-derived-category-of-an-abelian-category]]).

[F4] The tensor-product total complex has degree-$n$ term $\bigoplus_{i+j=n}\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ and differential $d_{\mathcal F}^i\otimes\operatorname{id}+(-1)^i\operatorname{id}\otimes d_{\mathcal G}^j$ on the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ ([[def-tensor-product-of-abelian-sheaves]]).

[F5] A complex is bounded above when $\mathcal F^n=0$ for all sufficiently large $n$, so a complex whose terms are built from finitely many bounded-above complexes is again bounded above ([[def-bounded-bounded-below-and-bounded-above-complex]]).

[F6] A complex is acyclic when it is exact at every degree ([[def-exactness-of-a-complex-at-a-degree-and-acyclic-complex]]).

[F7] A cochain map $f:C^\bullet\to D^\bullet$ satisfies $d_D^nf^n=f^{n+1}d_C^n$ in every degree ([[def-cochain-map]]).

[F8] The tensor total complex of bounded-above complexes is defined with finite diagonals, and the Koszul signs of clause 3 of the stalk computation match the module-level convention ([[lem-stalks-and-colimits-of-the-abelian-sheaf-tensor-product]]).

## Proof

**Given:** Bounded-above complexes $\mathcal A^\bullet,\mathcal B^\bullet,\mathcal K^\bullet$ of abelian sheaves on $X$ with $\mathcal K^\bullet$ K-flat and $s:\mathcal A^\bullet\to\mathcal B^\bullet$ a quasi-isomorphism, and bounded-above complexes $\mathcal F^\bullet,\mathcal G^\bullet$ for the swap computation.

1.1 For each $i$ the map $s^i\otimes\operatorname{id}_{\mathcal K^j}$ is defined on the summands $\mathcal A^i\otimes_{\mathbb Z}\mathcal K^j$ of $\operatorname{Tot}(\mathcal A^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ and is compatible with the coproduct injections, so it induces a degree-zero morphism $\operatorname{Tot}(s\otimes\operatorname{id})$; it is a cochain map because $s$ is a cochain map [F7] and the Koszul differential [F4] has the same shape on both sides, the sign factor $(-1)^i$ being unchanged by $s^i$. [F4, F7]

1.2 Assume the cone convention of [F3]. Define $$\varphi:\operatorname{Tot}(\operatorname{Cone}(s)\otimes_{\mathbb Z}\mathcal K^\bullet)\longrightarrow\operatorname{Cone}\bigl(\operatorname{Tot}(s\otimes\operatorname{id}_{\mathcal K})\bigr)$$ to be the identity on the summands $\mathcal B^p\otimes_{\mathbb Z}\mathcal K^j$ and the identity, after the identification of the $\mathcal A$-part of $\operatorname{Cone}(s)^p$ with $\mathcal A^{p+1}$, on the summands $\mathcal A^{p+1}\otimes_{\mathbb Z}\mathcal K^j$. Then $\varphi$ is an isomorphism of graded groups, both sides having degree-$n$ term $\bigoplus_{p+j=n}\bigl(\mathcal B^p\otimes_{\mathbb Z}\mathcal K^j\bigr)\oplus\bigoplus_{p+j=n}\bigl(\mathcal A^{p+1}\otimes_{\mathbb Z}\mathcal K^j\bigr)$, and a direct check on generators shows that it commutes with the differentials: for $b\in\mathcal B^p$ the element $b\otimes y$ of $\operatorname{Cone}(s)^p\otimes\mathcal K^j$ has $d_{\operatorname{Cone}(s)}(b,0)=(d_{\mathcal B}b,0)$, so both sides give $d_{\mathcal B}b\otimes y+(-1)^pb\otimes d_{\mathcal K}y$; for $a\in\mathcal A^{p+1}$ the element $(0,a)\otimes y$ has $d_{\operatorname{Cone}(s)}(0,a)=(s(a),-d_{\mathcal A}a)$, so the left side is $s(a)\otimes y-d_{\mathcal A}a\otimes y+(-1)^pa\otimes d_{\mathcal K}y$, while the right side, by [F3] with $f=\operatorname{Tot}(s\otimes\operatorname{id})$ and by the Koszul differential of $\operatorname{Tot}(\mathcal A^\bullet\otimes_{\mathbb Z}\mathcal K^\bullet)$ [F4], is $\bigl(s(a)\otimes y,\ -d_{\mathcal A}a\otimes y+(-1)^pa\otimes d_{\mathcal K}y\bigr)$, the same element. Hence $\varphi$ is an isomorphism of complexes. [F3, F4]

2.1 Since $s$ is a quasi-isomorphism, $\operatorname{Cone}(s)$ is acyclic [F2, F6]; it is a bounded-above complex of abelian sheaves because its terms $\mathcal B^n\oplus\mathcal A^{n+1}$ vanish for all sufficiently large $n$ by [F5], and $\mathcal K^\bullet$ is bounded above, so the tensor-product total complex $\operatorname{Tot}(\operatorname{Cone}(s)\otimes_{\mathbb Z}\mathcal K^\bullet)$ is acyclic by the K-flatness of $\mathcal K^\bullet$ [F1]. By the isomorphism of step 1.2 the cone $\operatorname{Cone}(\operatorname{Tot}(s\otimes\operatorname{id}_{\mathcal K}))$ of step 1.1 is acyclic, and therefore $\operatorname{Tot}(s\otimes\operatorname{id}_{\mathcal K})$ is a quasi-isomorphism by the cone criterion [F2]. This is clause 1. [F1, F2, F5, step 1.1, step 1.2]

3.1 For bounded-above $\mathcal F^\bullet,\mathcal G^\bullet$ define $T:\operatorname{Tot}(\mathcal F^\bullet\otimes_{\mathbb Z}\mathcal G^\bullet)\to\operatorname{Tot}(\mathcal G^\bullet\otimes_{\mathbb Z}\mathcal F^\bullet)$ on the summand $\mathcal F^i\otimes_{\mathbb Z}\mathcal G^j$ by $T(x\otimes y):=(-1)^{ij}y\otimes x$. This is an isomorphism of graded groups, and it commutes with the differentials: by [F4] the differential applied first gives $T\bigl(d_{\mathcal F}x\otimes y+(-1)^ix\otimes d_{\mathcal G}y\bigr)=(-1)^{(i+1)j}y\otimes d_{\mathcal F}x+(-1)^{i+i(j+1)}d_{\mathcal G}y\otimes x$, while applying the differential of $\operatorname{Tot}(\mathcal G^\bullet\otimes_{\mathbb Z}\mathcal F^\bullet)$ first gives $(-1)^{ij}\bigl(d_{\mathcal G}y\otimes x+(-1)^jy\otimes d_{\mathcal F}x\bigr)$; the two expressions agree because $(-1)^{(i+1)j}=(-1)^{ij}(-1)^j$ and $(-1)^{i+i(j+1)}=(-1)^{ij}$; the Koszul signs used are those of the sheaf-level total complex, consistent with the module-level convention on stalks [F8]. Applying step 1.1 and step 2.1 to the swap of $s$ gives clause 2. [F4, step 1.1, step 2.1]

4.1 Clause 1 is step 2.1 and clause 2 is step 3.1. Both isomorphisms are canonical: the cone is the canonical cone of [F3], the identification of step 1.2 is the identity on the canonical summands, and the swap sign $(-1)^{ij}$ is forced by the Koszul convention [F4] through the computation of step 3.1; no selection is made beyond the hypotheses, and the K-flatness input [F1] is a universal statement about all acyclic bounded-above complexes. ∎ [F1, F3, F4, step 1.1, step 1.2, step 2.1, step 3.1]
