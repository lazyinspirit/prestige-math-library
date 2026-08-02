---
id: lem-kernel-basis-extension-gives-image-basis
kind: lemma
title: "Extending a basis of the kernel to a basis of the domain gives a basis of the image"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-linear-kernel-image-and-injectivity, def-kernel-and-image-of-a-linear-map, thm-dimension-of-a-linear-subspace,
       cor-independent-set-is-no-larger-than-a-finite-spanning-set,
       def-dimension, def-linear-map, def-linear-basis,
       thm-unique-coordinates-with-respect-to-an-ordered-basis,
       def-monoid-finite-product, def-nat-addition,
       thm-induction-principle, thm-subset-of-a-finite-set, thm-sum-rule,
       def-finite-cardinality, def-injection-surjection-bijection,
       lem-vector-space-elementary-consequences]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Axler, Linear Algebra Done Right, 4th ed., Chapter 3"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $T:V\to W$ be linear, with $V$ finite-dimensional over $F$. There are a
basis $K$ of $\ker T$ and a basis $B$ of $V$ with $K\subseteq B$. For this
pair, put $C:=B\setminus K$. Then $C$ is finite, the restriction

$$T|_C:C\longrightarrow T[C]$$

is a bijection, and $T[C]$ is a basis of $\operatorname{im}T$.

More explicitly, if $k:\nu\to K$ and $c:r\to C$ are bijections, then the list
obtained by placing $k$ before $c$ is an ordered basis of $V$, while
$T\circ c:r\to\operatorname{im}T$ is an ordered basis of the image.

## Facts & Assumptions

**Given:** Vector spaces $V,W$ over $F$, a linear map $T:V\to W$, and a
finite-dimensional domain $V$.

[L1] The kernel and image of a linear map are linear subspaces, and
$v\in\ker T$ exactly when $T(v)=0_W$
([[thm-linear-kernel-image-and-injectivity]],
[[def-kernel-and-image-of-a-linear-map]]).

[L2] A linear subspace of a finite-dimensional vector space is
finite-dimensional; every linearly independent subset extends to a basis without
a choice principle; and every linearly independent subset of a
finite-dimensional space is finite
([[thm-dimension-of-a-linear-subspace]], claims 1 and 3,
[[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]).

[L3] A basis is a linearly independent spanning subset. An ordered basis is an
injective finite list whose image is a basis, equivalently a linearly
independent finite list that spans ([[def-linear-basis]]).

[L4] Every vector has exactly one coordinate list with respect to an ordered
basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

[L5] Finite sums in an abelian group have empty value zero and append one term
at a successor; induction is valid on their natural-number length. Natural
addition satisfies $p+0=p$ and $p+\sigma(q)=\sigma(p+q)$
([[def-monoid-finite-product]], [[thm-induction-principle]],
[[def-nat-addition]]).

[L6] A linear map satisfies $T(au+bv)=aT(u)+bT(v)$; vector spaces have the usual zero, inverse, and
distributive laws ([[def-linear-map]],
[[lem-vector-space-elementary-consequences]]).

[L7] A subset of a finite set is finite. If two finite sets are disjoint, then
their union has cardinality the sum of their cardinalities; finite cardinality
is transported by a bijection ([[thm-subset-of-a-finite-set]],
[[thm-sum-rule]], clause 1, [[def-finite-cardinality]]).

[L8] A function is bijective exactly when it is injective and surjective
([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\ker T$ is finite-dimensional; choose a basis $K$ of $\ker T$. It is linearly independent in $V$, so [L2] extends it to a basis $B$ of $V$. Put $C:=B\setminus K$. Since $B$ is finite, so is $C$, and $B=K\mathbin{\dot\cup}C$. [L1, L2, L7, given]

1.2 For every finite list $v:n\to V$ and every scalar list $a:n\to F$, linearity gives $T(\sum_{i<n}a_iv_i)=\sum_{i<n}a_iT(v_i)$. This follows by induction on $n$: the empty case follows by applying [L6] to $0_V=0_V+0_V$ and cancelling, and the successor step uses the append recursion and $T(x+a_nv_n)=T(x)+a_nT(v_n)$. The same recursion, now by induction on the length of the second list, splits a spliced sum into its first and second blocks. [L5, L6, discharge-induction]

2.1 Write $\nu:=|K|$ and $r:=|C|$, and choose bijections $k:\nu\to K$ and $c:r\to C$. Splicing the two lists gives $d:\nu+r\to B$, with $d_i=k_i$ for $i<\nu$ and $d_{\nu+j}=c_j$ for $j<r$. The disjointness in step 1.1 makes $d$ injective and its image is $B$, so it is an ordered basis of $V$. [step 1.1, L3, L5, L7, L8, construct]

3.1 The set $T[C]$ spans $\operatorname{im}T$. Indeed, if $y=T(v)$ lies in the image, [L4] gives coordinates $a:\nu+r\to F$ with $v=\sum_{i<\nu+r}a_id_i$. Steps 2.1 and 1.2 split this into the $K$-block and the $C$-block. Applying $T$ kills the first block because every $k_i$ lies in $\ker T$, leaving $y$ as a finite linear combination of $T(c_0),\ldots,T(c_{r-1})$. [step 2.1, step 1.2, L1, L3, L4, L6]

3.2 The list $T\circ c:r\to W$ is linearly independent. Suppose $\sum_{j<r}b_jT(c_j)=0_W$. By step 1.2, $u:=\sum_{j<r}b_jc_j$ lies in $\ker T$, so [L4] supplies $a:\nu\to F$ with $u=\sum_{i<\nu}a_ik_i$. Thus the spliced ordered basis $d$ has a vanishing linear combination whose coefficients are $-a_i$ on the first block and $b_j$ on the second. Its linear independence forces every $b_j=0_F$. [step 2.1, step 1.2, L1, L3, L4, L6]

4.1 Linear independence makes $T\circ c$ injective. It is surjective onto $T[C]$ by that set's definition, so it is a bijection $r\to T[C]$. Together with steps 3.1 and 3.2, this says that it is an ordered basis of $\operatorname{im}T$ and that $T|_C:C\to T[C]$ is bijective. [step 3.1, step 3.2, L3, L8]

5.1 Step 1.1 supplies $K$ and $B$, and step 4.1 proves all the asserted properties of their complement $C$. [step 1.1, step 4.1] ∎

## Remarks

- The construction is valid when $V$ is the zero space: then
  $K=B=\varnothing$, hence $C=T[C]=\varnothing$, and both empty lists are the
  ordered bases of the zero spaces.
- No choice principle is used. Both basis selections occur inside
  finite-dimensional spaces and are licensed by the finite extension clause of
  [[thm-dimension-of-a-linear-subspace]].
