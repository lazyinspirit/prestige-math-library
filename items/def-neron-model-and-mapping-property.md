---
id: def-neron-model-and-mapping-property
kind: definition
title: "Neron models, the Neron mapping property and weak Neron models"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-smooth-morphism-schemes
  - def-separated-morphism-schemes
  - def-locally-finite-type-and-finite-type-morphism
  - def-scheme-theoretic-fibre
  - def-dedekind-domain
  - def-etale-morphism-schemes
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models, Ergebnisse der Mathematik und ihrer Grenzgebiete (3) 21, Springer 1990 (1.2/1 Definition 1 and 1.1/1 Definition 1; Chapters 1-6, 7.2, 8.1)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
    - title: "D. Lombardo, Abelian varieties, Luxembourg Summer School on Galois representations lecture notes (2018), Chapter 1 sections 1-7 and Chapter 2 sections 4-5"
      url: "https://people.dm.unipi.it/lombardo/Teaching/VarietaAbeliane1718/Notes.pdf"
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8, 11, 17"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Definition

Let $S$ be a Dedekind scheme ([[def-dedekind-domain]]) with function field $K$, and let $X_K$ be a smooth separated $K$-scheme of finite type. For an $S$-scheme $X$, its **generic fibre** is $X_K=X\times_S\operatorname{Spec}K$, the fibre of $X\to S$ over the generic point of $S$ ([[def-scheme-theoretic-fibre]]); it is a $K$-scheme. An **$S$-model** of $X_K$ is an $S$-scheme $X$ together with a specified isomorphism $X_K\cong X\times_S\operatorname{Spec}K$ of $K$-schemes.

A **Neron model** of $X_K$ over $S$ is an $S$-model $X\to S$ which is smooth ([[def-smooth-morphism-schemes]]), separated ([[def-separated-morphism-schemes]]), of finite type ([[def-locally-finite-type-and-finite-type-morphism]]), and which satisfies the **Neron mapping property**: for every smooth $S$-scheme $Y$ and every $K$-morphism $u_K:Y_K\to X_K$ there is a unique $S$-morphism $u:Y\to X$ extending $u_K$, that is, with $u\times_S\operatorname{Spec}K=u_K$ under the specified identifications.

Equivalently, $X$ represents the functor $Y\mapsto\operatorname{Hom}_K(Y_K,X_K)$ from smooth $S$-schemes to sets, so by the Yoneda lemma a Neron model of $X_K$ is determined up to a unique isomorphism: applying the property to $Y=X$ and to its identity $K$-morphism shows that any two Neron models of $X_K$ admit a unique $S$-isomorphism over $X_K$.

**Local nature.** For a closed point $s\in S$ the local ring $\mathcal O_{S,s}$ is a discrete valuation ring with fraction field $K$, and $X\times_S\operatorname{Spec}\mathcal O_{S,s}$ is a Neron model of $X_K$ over the local Dedekind scheme $\operatorname{Spec}\mathcal O_{S,s}$ whenever $X$ is a Neron model of $X_K$ over $S$; conversely, an $S$-model **of finite type over $S$** is a Neron model if each of its localizations at closed points is. The finite-type hypothesis is essential for this converse. Thus the notion is local on $S$.

**Weak Neron models.** A scheme $X$ over the Dedekind scheme $S$ satisfies the **extension property for etale points** at a closed point $s\in S$ if for each etale local $\mathcal O_{S,s}$-algebra $R'$ (a local ring with a local homomorphism $\mathcal O_{S,s}\to R'$ that is etale, [[def-etale-morphism-schemes]]), with fraction field $K'$, the canonical map $X(R')\to X_K(K')$ is surjective. A **weak Neron model** of $X_K$ is a smooth separated finite-type $S$-model $X$ of $X_K$ satisfying the extension property for etale points at every closed point of $S$. When $X$ is separated over $S$ the displayed map is injective by the valuative criterion of separatedness, so the extension property is then a bijection.

The Neron mapping property applied to $Y=X$ shows that a Neron model of $X_K$ is unique up to a unique isomorphism inducing the specified identity on $X_K$ and, applied to etale $S$-schemes $Y$, shows that a Neron model is in particular a weak Neron model. This definition asserts no existence statement: it describes what it means for a model to be a Neron model, and every existence claim on this page is a theorem with its own hypotheses. The weak Neron property is not asserted here to characterize Neron models.
