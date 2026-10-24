---
id: def-coherent-action-of-a-group-on-a-category
kind: definition
title: "Coherent action of a group on a category"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-weak-action-of-a-group-on-a-category, def-rouquier-canonical-comparisons-between-standard-graph-tensors, def-category, def-functor-and-contravariant-functor, def-natural-isomorphism]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.3.1 (the functors $G_v$, the isomorphisms $m_{v,v'}$ and $m_1$, and their compatibility with the $c_{t,u}$), arXiv pp. 10-11"
    - title: "Ben Elias and Daniel Krasner, Rouquier complexes are functorial over braid cobordisms, arXiv:0906.4761v3, §2.5 and §3"
      url: "https://arxiv.org/pdf/0906.4761"
      locator: "§2.5 (the braid group acting on the homotopy category) and §3 (coherence data)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

**Setting.** Let $G$ be a group and let $\mathcal C$ be a category
([[def-category]]); write $\operatorname{End}(\mathcal C)$ for the strict
monoidal category of endofunctors of $\mathcal C$ and natural transformations
between them, with composition of functors as its product
([[def-functor-and-contravariant-functor]],
[[def-natural-isomorphism]]). Composition of endofunctors is strictly
associative and its unit is $\mathrm{id}_{\mathcal C}$, so no associator
constraint of $\mathcal C$ enters anything below.

**Data.** A **coherent action** of $G$ on $\mathcal C$ consists of:

1. a functor $F_g\colon\mathcal C\to\mathcal C$ for every $g\in G$, with
   $F_1=\mathrm{id}_{\mathcal C}$;
2. for all $f,g\in G$ a chosen natural isomorphism
   $\mu_{f,g}\colon F_fF_g\Rightarrow F_{fg}$;
3. a chosen natural isomorphism $u\colon F_1\Rightarrow\mathrm{id}_{\mathcal C}$,
   i.e. (since $F_1=\mathrm{id}_{\mathcal C}$) a natural automorphism of the
   identity functor.

**Pentagon.** For all $f,g,h\in G$ the two composites
$F_fF_gF_h\Rightarrow F_{fgh}$ agree:
$$\mu_{fg,h}\circ(\mu_{f,g}F_h)=\mu_{f,gh}\circ(F_f\mu_{g,h}),$$
where $\mu_{f,g}F_h$ is the whiskered natural transformation with components
$\mu_{f,g,F_hX}$ and $F_f\mu_{g,h}$ the one with components $F_f(\mu_{g,h,X})$.

**Unit triangles.** For all $f,g\in G$,
$$\mu_{f,1}=F_fu,\qquad \mu_{1,g}=uF_g .$$
Here $F_fu$ has components $F_f(u_X)\colon F_fF_1X\to F_fX$, while $uF_g$
has components $u_{F_gX}\colon F_1F_gX\to F_gX$. Since $F_1$ is the identity
functor, these are natural transformations $F_f\Rightarrow F_f$ and
$F_g\Rightarrow F_g$, respectively. They need not agree: for a general
natural automorphism $u$ of $\mathrm{id}_{\mathcal C}$, naturality does not
imply $uF_g=F_gu$, whose components are $u_{F_gX}$ and $F_g(u_X)$. The two
equalities are the left and right unit axioms for a monoidal functor
$G\to\operatorname{End}(\mathcal C)$ with unit constraint
$u^{-1}\colon\mathrm{id}_{\mathcal C}\Rightarrow F_1$ and the discrete
monoidal structure on $G$.

**Relation to a weak action.** The underlying functors form a weak action of
$G$ on $\mathcal C$ in the sense of
[[def-weak-action-of-a-group-on-a-category]]: the chosen $\mu_{f,g}$ in
particular exhibit isomorphisms $F_{fg}\cong F_fF_g$ for all $f,g$. The
converse does not hold: a weak action records no chosen compositors and imposes
no pentagon, and a coherent action is precisely a weak action equipped with
chosen compositors and a chosen unit satisfying the pentagon and the two unit
triangles above. The pentagon is part of the data; it is not a formal
consequence of the existence of isomorphisms $F_{fg}\cong F_fF_g$.

**Rouquier's instance.** In the application of this page,
$\mathcal C=K^b(R\text{-grmod})$. For $g\ne1$, the functor $F_g$ is left
tensoring by the invertible object $G_g$ of Rouquier's rigidification; set
$F_1=\mathrm{id}_{\mathcal C}$ and use the canonical unit identification
$R\otimes_R-\cong\mathrm{id}_{\mathcal C}$ for the empty-word object
$G_1=R$. The isomorphisms $\mu_{f,g}$ are induced by the unique maps
$m_{f,g}:G_f\otimes_RG_g\to G_{fg}$ compatible with the canonical comparisons
$c_{t,u}$ of
[[def-rouquier-canonical-comparisons-between-standard-graph-tensors]] in the
derived category, with the canonical tensor unit identifications when an
index or product is $1$. The map $m_1:G_1\to R$ corresponds, under the unit
identification, to $u=\mathrm{id}_{\mathcal C}$. Rouquier's construction
produces the pentagon and unit triangles by lifting associative graph
multiplication together with the additive internal shifts of signed words:
in this normalization the derived models $R_{\pi(v)}(-e(v))$ are the pullback
of the strict $W\times\mathbb Z$ action along $v\mapsto(\pi(v),e(v))$,
where $\pi$ is the permutation projection and $e$ the signed word exponent;
the lifts are fixed by localization isomorphisms and normalized uniqueness. The
definitions make sense for an arbitrary group and category, and no Hecke
algebra enters.

**Degenerate cases.** If $G$ is the trivial group then $F_1=\mathrm{id}$ and
the data reduce to natural automorphisms $\mu_{1,1}$ and $u$ of
$\mathrm{id}_{\mathcal C}$. The unit axioms give
$\mu_{1,1}=u$; with this value the pentagon is automatic. Thus a coherent
action of the trivial group may still have any invertible natural
automorphism $u$ as its unit; taking $u=\mathrm{id}$ gives the identity
example. If $\mathcal C$ is the one-object category attached to a monoid then
the definition reduces to the usual coherence data on that monoid. For a
$k$-linear category, an invertible scalar multiple of the identity is a
natural automorphism, so $u$ need not be the identity. Once the compositors are fixed, however,
the unit triangle at $f=g=1$ forces $u=\mu_{1,1}$.
