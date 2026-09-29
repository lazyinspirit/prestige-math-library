---
id: ex-localization-etale-open-immersion
kind: example
title: "Open immersions are etale"
status: draft
origin: pipeline
deps:
  - def-etale-morphism-schemes
  - def-standard-etale-algebra
  - def-open-immersion-schemes
  - lem-spectrum-localization-open-immersion
  - cor-principal-localisation-spectrum-is-distinguished-open
  - thm-first-isomorphism-theorem-rings
  - def-affine-scheme-spectrum
  - def-finitely-presented-module-and-algebra
  - def-locally-finite-presentation-morphism
  - def-principal-localisation
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.36.1 (open immersions are etale, tag 02GJ)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (open immersions are etale)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $j\colon U\to X$ be an open immersion of schemes
([[def-open-immersion-schemes]]); the empty immersion $j\colon\varnothing\to X$
is included. Then $j$ is \'etale ([[def-etale-morphism-schemes]]).

More precisely, locally on the source and the target $j$ is, up to
isomorphism, the principal localisation map
$$\operatorname{Spec}A_g\longrightarrow\operatorname{Spec}A,$$
for a ring $A$ and $g\in A$ ([[def-principal-localisation]],
[[lem-spectrum-localization-open-immersion]]), and that map is standard \'etale
over $A$ through the presentation
$$A_g\cong\bigl(A[T]/(T-g)\bigr)_{T},$$
whose defining polynomial $T-g$ is monic with derivative $1$
([[def-standard-etale-algebra]]). The argument is choice-free.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] The morphism $A\to A_g$ exhibits $\operatorname{Spec}A_g$ as the distinguished open $D(g)\subseteq\operatorname{Spec}A$, homeomorphically onto it and with the restricted structure sheaf ([[lem-spectrum-localization-open-immersion]], [[cor-principal-localisation-spectrum-is-distinguished-open]], [[def-affine-scheme-spectrum]]); the basic opens $D(g)$ form a basis of the topology of $\operatorname{Spec}A$.

[F2] If $P\in A[T]$ is monic and the image of $P'$ is a unit of $(A[T]/(P))_h$, then $(A[T]/(P))_h$ is standard \'etale over $A$; the case $h=1$ and the case of a localisation are both allowed, and a standard \'etale algebra is \'etale over $A$ when the structure map is finitely presented, which holds because $A[T]/(P)$ is finitely presented and localisation preserves finite presentation ([[def-standard-etale-algebra]], [[def-finitely-presented-module-and-algebra]], [[def-locally-finite-presentation-morphism]]).

[F3] An open immersion $j:U\to X$ identifies $U$ isomorphically with an open subscheme $j(U)\subseteq X$; hence for every open subscheme $W\subseteq j(U)$ the restriction $j^{-1}(W)\to W$ is an isomorphism ([[def-open-immersion-schemes]]).

[F4] \'Etaleness at a point is a condition on the germ: shrinking the source to an open neighbourhood of the point or the target to an open neighbourhood of its image preserves the condition in both directions, so an isomorphism between open neighbourhoods of the point and its image makes the morphism \'etale there ([[def-etale-morphism-schemes]]).

## Proof

**Proof technique:** direct.

1.1 The local model is standard \'etale. Let $A$ be a ring and $g\in A$; the $A$-algebra map $A[T]\to A$ with $T\mapsto g$ is surjective with kernel $(T-g)$ by the first isomorphism theorem for rings, so $A[T]/(T-g)\cong A$, and localising this isomorphism at the image $\bar T=g$ of $T$ gives $(A[T]/(T-g))_{T}\cong A_g$. The polynomial $T-g$ is monic and its formal derivative is the constant $1$, whose image in $A_g$ is a unit; hence $A_g$ is standard \'etale over $A$ by [F2], and since it is finitely presented over $A$ the map $\operatorname{Spec}A_g\to\operatorname{Spec}A$ is \'etale, and by [F1] it is the open immersion onto $D(g)$. [F1, F2]

2.1 An open immersion is locally the localisation model. Let $j\colon U\to X$ be an open immersion and $u\in U$. By [F3] $j$ identifies $U$ with the open subscheme $j(U)\subseteq X$. Choose an affine chart $\operatorname{Spec}A\subseteq X$ containing $j(u)$; then $V:=j(U)\cap\operatorname{Spec}A$ is an open neighbourhood of $j(u)$ in $\operatorname{Spec}A$, so by [F1] there is $g\in A$ with $j(u)\in D(g)\subseteq V$. Again by [F3] the map $j^{-1}(D(g))\to D(g)$ is an isomorphism, and $D(g)=\operatorname{Spec}A_g$ by [F1]; on these open neighbourhoods the morphism $j$ is therefore the localisation map $\operatorname{Spec}A_g\to\operatorname{Spec}A$ of step 1.1, up to the identifications, and it is \'etale there. By the germ property [F4] $j$ is \'etale at $u$; the same applies to the empty immersion vacuously, since then there is no point $u$. [F1, F3, F4, step 1.1]

3.1 Conclusion. Since every point of $U$ is covered by step 2.1, the open immersion $j$ is \'etale. Steps 1.1 and 2.1 use only the standard \'etale presentation, the localisation identification of spectra, the first isomorphism theorem and the local nature of \'etaleness, so the argument is choice-free and no Axiom of Choice is assumed or used. [F1, F2, F3, F4]

$\square$
