---
id: thm-rouquier-complexes-form-a-coherent-braid-group-action
kind: theorem
title: "Rouquier complexes form a coherent braid group action"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps: [def-coherent-action-of-a-group-on-a-category, lem-rouquier-normalized-comparison-isomorphisms-are-transitive, thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility, lem-opposite-rouquier-generator-complexes-are-homotopy-inverse, lem-rouquier-complexes-satisfy-far-commutativity, lem-rouquier-complexes-satisfy-the-three-term-braid-relation, def-rouquier-complex-of-a-braid-word, lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "Theorem 3.5 and the preceding construction of $G_v$ and $m_{v,v'}$, arXiv pp. 10-11"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "Theorem 3.10 and the paragraph after Lemma 3.11, printed pp. 544-545"
verification:
  precheck: pass
---

## Statement

For every braid $v\in B_n$ choose a signed word $t(v)$ representing it, taking
$t(1)$ to be the empty word, and put $G_v:=F(t(v))$, with $G_1:=R$. For
the action on $K^b(R\text{-grmod})$, set $F_1=\operatorname{Id}$ and, for
$v\ne1$, set $F_v:=G_v\otimes_R-$. For
$v,w\in B_n$ let
$$m_{v,w}\colon G_v\otimes_RG_w\longrightarrow G_{vw}$$
be the unique homotopy class whose derived image is the graph-multiplication
comparison, transported through the associativity and unit isomorphisms of
[[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]];
equivalently $m_{v,w}$ is $\gamma_{t(v)t(w),\,t(vw)}$ in the normalization of
[[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]]. Let
$m_1\colon G_1\to R$ be the identity of the unit complex. For $v,w\ne1$, the
compositor $\mu_{v,w}:F_vF_w\Rightarrow F_{vw}$ is induced by associating
$G_v\otimes_R(G_w\otimes_R-)$ to $(G_v\otimes_RG_w)\otimes_R-$ and then
applying $m_{v,w}\otimes_R-$, followed by the left-unit identification
$R\otimes_R-\cong\operatorname{Id}$ when $vw=1$. If either index is $1$, use
the canonical tensor unit identifications, so the compositor is the identity
after those identifications; set $u:F_1\Rightarrow\operatorname{Id}$ to the
identity.
Then $(F_v,\mu_{v,w},u)$ is a coherent action of $B_n$ on
$K^b(R\text{-grmod})$ in the sense of
[[def-coherent-action-of-a-group-on-a-category]]: the functors are the exact
left tensor functors $G_v\otimes_R-$ for $v\ne1$, with the identity functor at
$1$, and both composites of every pentagon have the same derived image,
namely the same associative graph multiplication, so the pentagon commutes by
uniqueness in degree $0$; both unit triangles hold by the canonical tensor
unit identifications. Equivalently, $v\mapsto(F_v,\mu_{v,w},u)$ is a monoidal
functor from the discrete strict monoidal category $(B_n,\cdot)$ to the strict
monoidal category of endofunctors of $K^b(R\text{-grmod})$. The construction
uses one chosen word per braid and no other choice; no choice principle is
needed.

## Facts & Assumptions

**Given:** A choice $v\mapsto t(v)$ of signed word for each braid $v\in B_n$, the word complexes $G_v=F(t(v))$, and the maps $\gamma$ of [[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]].

[F1] *Well-definedness of the $m_{v,w}$.* For any two choices of words for the same braid the normalized maps agree up to the transitive system, and for the concatenated words $t(v)t(w)$ and $t(vw)$ the class $\gamma_{t(v)t(w),t(vw)}$ is the unique homotopy class with the prescribed derived image; hence $m_{v,w}$ is independent of the auxiliary choices of the words used to define the concatenation, by transitivity. ([[lem-rouquier-normalized-comparison-isomorphisms-are-transitive]], [[lem-rouquier-derived-comparisons-give-unique-normalized-homotopy-maps]])

[F2] *The relations.* The generator complexes satisfy $F_i\otimes_RF_i^{-1}\simeq R$, the three-term relation and far commutativity, so the word complex attached to any two words for the same braid is independent of the word up to the canonical comparisons. ([[lem-opposite-rouquier-generator-complexes-are-homotopy-inverse]], [[lem-rouquier-complexes-satisfy-far-commutativity]], [[lem-rouquier-complexes-satisfy-the-three-term-braid-relation]])

[F3] *Associativity and units of the tensor.* The balanced tensor totalization is associative and unital up to canonical chain isomorphisms satisfying the pentagon and unit triangles, and compatible with cones. ([[thm-bounded-bimodule-tensor-associativity-unit-and-cone-compatibility]])

[F4] *The model of a coherent action.* A coherent action consists of functors $F_g$ with $F_1=\mathrm{id}$, chosen compositors $\mu_{f,g}:F_fF_g\Rightarrow F_{fg}$ and a unit $u$ satisfying the pentagon and the two unit triangles. ([[def-coherent-action-of-a-group-on-a-category]])

## Proof

**Proof technique:** direct.

1.1 For $v,w\in B_n$ the composite $G_v\otimes_RG_w=F(t(v))\otimes_RF(t(w))$ is a word complex for the concatenated word $t(v)t(w)$, which represents $vw$; by [F2] it is canonically compared to $G_{vw}=F(t(vw))$, so the class $m_{v,w}$ of the statement exists as the normalized comparison and is a homotopy equivalence. If $v,w\ne1$, associativity identifies $F_vF_w$ with $(G_v\otimes_RG_w)\otimes_R-$; tensoring $m_{v,w}$ with the input complex gives the compositor, followed by the left-unit identification when $vw=1$. If an index is $1$, the canonical unit identification gives the identity compositor. [F1, F2, F3]

2.1 The maps $m_{v,w}$ are compatible with replacing the representatives: if $a_v:G_v\to\widetilde G_v$ are their normalized comparisons, then $a_{vw}m_{v,w}=\widetilde m_{v,w}(a_v\otimes a_w)$, after canonical reassociation. Both sides have the same derived graph multiplication, so normalized uniqueness proves this equality in the correctly typed Hom space. [F1, F2, step 1.1]

3.1 Pentagon: after the associativity and unit identifications in [F3], the two composites from $F_vF_wF_u$ to $F_{vwu}$ are induced by the two composites of normalized maps $m$ from $G_v\otimes_RG_w\otimes_RG_u$ to $G_{vwu}$. Their derived images are both the triple graph multiplication, so uniqueness in internal degree $0$ makes them agree. This also covers unit indices, where the compositor is the canonical unit identification. [F1, F3, step 2.1]

3.2 Unit triangles: since $t(1)$ is empty, the normalized comparisons $m_{v,1}$ and $m_{1,v}$ are the identity under the right and left tensor unit isomorphisms, respectively. With $F_1=\operatorname{Id}$ and $u=\mathrm{id}$, these identifications give separately $\mu_{v,1}=F_vu$ and $\mu_{1,v}=uF_v$, including $v=1$. Thus both unit axioms of [F4] hold. [F3, F4, step 2.1]

4.1 By steps 1.1, 2.1, 3.1 and 3.2 the functors $F_v$ and compositors $\mu_{v,w}$ satisfy the pentagon and both unit triangles of [F4]. Since each $G_v$ has finite free terms on both sides, $G_v\otimes_R-$ is exact on bounded complexes of finite graded projectives and descends to the derived category; the identity functor at $1$ is exact as well. Thus these data define the asserted coherent braid group action. The representative system can be specified without a choice axiom: order the finite signed alphabet and take the shortest, then lexicographically least word in each nonempty braid class. The construction uses this system or any given representative system. [F2, F4, step 1.1, step 2.1, step 3.1, step 3.2] ∎ 