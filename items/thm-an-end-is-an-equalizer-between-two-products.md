---
id: thm-an-end-is-an-equalizer-between-two-products
kind: theorem
title: "An end is the equalizer of two products, and a coend the coequalizer of two coproducts"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-end-and-coend, def-wedge-and-cowedge, def-products-and-coproducts, def-equalizers-and-coequalizers, def-limit-and-colimit-of-a-diagram, def-small-locally-small-and-large-category]
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.2)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Remark 1.2.4"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal C$ be a small category
([[def-small-locally-small-and-large-category]]) and let
$T:\mathcal C^{\mathrm{op}}\times\mathcal C\to\mathcal D$ be a functor. Suppose
the two products

$$\prod_{c\in\operatorname{Ob}(\mathcal C)}T(c,c),\qquad \prod_{(f:c\to c')\in\operatorname{Mor}(\mathcal C)}T(c,c')$$

exist in $\mathcal D$ ([[def-products-and-coproducts]]), and write
$\Lambda,\mathrm P$ for the two morphisms between them determined by
$q_f\circ\Lambda=T(1_c,f)\circ p_c$ and $q_f\circ\mathrm P=T(f,1_{c'})\circ p_{c'}$
for $f:c\to c'$, where $p$ and $q$ are the projections of the first and second
product.

Then an end is the equalizer of two products
([[def-equalizers-and-coequalizers]], [[def-end-and-coend]]): $T$ has an end
exactly when $\Lambda,\mathrm P$ have an equalizer, and then

$$\int_{c}T(c,c)=\operatorname{eq}\Bigl(\prod_{c}T(c,c)\;\substack{\Lambda\\[-2pt]\rightrightarrows\\[-2pt]\mathrm P}\;\prod_{f:c\to c'}T(c,c')\Bigr).$$

Dually, if the coproducts $\coprod_{c}T(c,c)$ and
$\coprod_{(f:c\to c')}T(c',c)$ exist, a coend is the coequalizer of two maps
between coproducts: the two morphisms $\Lambda',\mathrm P'$ determined on the
$f$-summand by $\Lambda'\circ\jmath_f=\iota_c\circ T(f,1_c)$ and
$\mathrm P'\circ\jmath_f=\iota_{c'}\circ T(1_{c'},f)$ have a coequalizer exactly
when $T$ has a coend, and then the coend is that coequalizer. Note that the
$f$-summand of the second coproduct is $T(c',c)$, with the domain and codomain
of $f$ interchanged.

## Facts & Assumptions

**Given:** A small category $\mathcal C$, a functor $T$ on $\mathcal C^{\mathrm{op}}\times\mathcal C$, and the displayed products and coproducts wherever they are assumed to exist.

[F1] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every $f:c\to c'$; a cowedge from $T$ to $d$ is a family $\rho_c:T(c,c)\to d$ with $\rho_c\circ T(f,1_c)=\rho_{c'}\circ T(1_{c'},f)$; a morphism of wedges is a morphism of the vertices commuting with every component ([[def-wedge-and-cowedge]]).

[F2] A product of $(A_i)_{i\in I}$ is an object $P$ with projections $p_i$ such that every family $f_i:X\to A_i$ has a unique pairing $\langle f_i\rangle_{i\in I}:X\to P, \qquad p_i\langle f_i\rangle=f_i\quad(i\in I)$, and dually a coproduct has injections $\iota_i$ with unique copairings ([[def-products-and-coproducts]]).

[F5] A category is **small** when both $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets. ([[def-small-locally-small-and-large-category]]).

[F3] An equalizer of $f,g:A\rightrightarrows B$ is a morphism $e:E\to A$ satisfying $fe=ge$ such that, whenever $h:X\to A$ satisfies $fh=gh$, there is a unique $u:X\to E$ with $eu=h$; a coequalizer is the dual ([[def-equalizers-and-coequalizers]]).

[F6] A limit of $D$ is a terminal cone: explicitly, for every cone $(X,\xi)$ there exists a unique morphism $u:X\to L$ such that $\lambda_j u=\xi_j$ for every $j$ ([[def-limit-and-colimit-of-a-diagram]]).

[F4] An end of $T$ is a terminal object of the category of wedges over $T$ and a coend an initial object of the category of cowedges under $T$; in short, an end is a terminal wedge and a coend an initial cowedge ([[def-end-and-coend]]).

## Proof

**Proof technique:** direct.

1.1 Because $\mathcal C$ is small, $\operatorname{Ob}(\mathcal C)$ and $\operatorname{Mor}(\mathcal C)$ are sets, so the two displayed families are set-indexed and the products named in the hypothesis are products of set-indexed families; no product over a proper class is formed anywhere below. The morphisms $\Lambda$ and $\mathrm P$ exist and are unique because a morphism into a product is determined by its components. [F1, F2, F5, given]

2.1 For an object $X$, the pairing of [F2] is a bijection between morphisms $u:X\to\prod_cT(c,c)$ and families $\alpha_c:X\to T(c,c)$, given by $\alpha_c=p_cu$. Under it, $\Lambda u=\mathrm Pu$ holds exactly when $q_f\Lambda u=q_f\mathrm Pu$ for every $f$, that is exactly when $T(1_c,f)\alpha_c=T(f,1_{c'})\alpha_{c'}$ for every $f:c\to c'$, which is the wedge equation. So the equalising morphisms $X\to\prod_cT(c,c)$ correspond exactly to the wedges with vertex $X$, in both directions. [F1, F2, F3, step 1.1]

3.1 The correspondence of step 2.1 is compatible with precomposition: for $h:X'\to X$ the family attached to $uh$ is $(\alpha_ch)$. So a morphism of wedges $(X,\alpha)\to(X',\alpha')$ is exactly a morphism $h$ with $u'h=u$, and a terminal wedge is exactly a universal equalising morphism. By [F3] and [F4] that says $T$ has an end exactly when $\Lambda,\mathrm P$ have an equalizer, and then the end is the equalizer, with $\omega_c=p_ce$; the same statement read through [F6] identifies both with the limit of the parallel pair. [F3, F4, F6, step 2.1]

4.1 Dually, the copairing of [F2] is a bijection between morphisms $v:\coprod_cT(c,c)\to X$ and families $\rho_c:T(c,c)\to X$, and $v\Lambda'=v\mathrm P'$ holds exactly when $\rho_cT(f,1_c)=\rho_{c'}T(1_{c'},f)$ for every $f:c\to c'$, which is the cowedge equation; the same compatibility with postcomposition then makes an initial cowedge exactly a coequalizer of $\Lambda',\mathrm P'$. The indexing is written out rather than left to duality because the $f$-summand of the second coproduct is $T(c',c)$ and not $T(c,c')$. [F4, step 3.1] ∎

## Remarks

The two index sets are the objects and the morphisms of $\mathcal C$, and they are not the objects and morphisms of $\operatorname{Tw}(\mathcal C)$; this formula is therefore not an instance of the general construction of a limit from products and equalizers applied to [[thm-an-end-is-a-limit-over-the-twisted-arrow-category]], and it is proved here from the wedge universal property directly.

The identity morphisms of $\mathcal C$ contribute components to the second product, and they cost nothing: at $f=1_c$ the equalising condition of step 2.1 reads $\alpha_c=\alpha_c$. Restricting the second product to the non-identity morphisms would give the same equalizer, but the unrestricted indexing is what makes the two morphisms $\Lambda$ and $\mathrm P$ definable by a single formula.
