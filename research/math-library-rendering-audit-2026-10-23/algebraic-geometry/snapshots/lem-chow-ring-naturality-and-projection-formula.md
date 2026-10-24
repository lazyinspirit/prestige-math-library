---
id: lem-chow-ring-naturality-and-projection-formula
kind: lemma
title: "Naturality of the Chow ring and the projection formula"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 13
deps:
  - def-axiom-of-choice
  - lem-flat-pullback-chow-groups
  - lem-proper-pushforward-of-cycles-well-defined
  - lem-refined-gysin-commutation-and-composition
  - thm-intersection-product-and-chow-ring-of-a-smooth-scheme
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "The Stacks Project, Chow Homology and Chern Classes, Sections 42.60-42.62"
      url: "https://stacks.math.columbia.edu/download/chow.pdf"
      locator: "Chapter 42, Sections 42.60-42.62: naturality of the intersection product and the projection formula"
    - title: "William Fulton, Intersection Theory, Chapter 8 — bibliographical comparison, not retrieved"
      url: "https://link.springer.com/book/10.1007/978-1-4612-1700-8"
      locator: "Chapter 8: functoriality of the intersection product"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) inherited from the
smooth-immersion and homological suppliers. For every morphism $f:X\to Y$ of
smooth equidimensional finite type schemes over $k$, $f^*:A^*(Y)\to A^*(X)$ is
the graph Gysin pullback, preserves codimension and the unit, is a ring
homomorphism, and obeys $(gf)^*=f^*g^*$. If $f$ is flat it is precisely the
previously defined flat pullback. For proper $f$, proper pushforward shifts
codimension by $\dim Y-\dim X$, obeys $(gf)_*=g_*f_*$ for proper composites, and
$f_*(f^*\alpha\cdot\beta)=\alpha\cdot f_*\beta$. Flat/proper composition laws
are asserted under their respective hypotheses, not by identifying the two
kinds of operation.

## Facts & Assumptions

**Given:** the Axiom of Choice; smooth equidimensional finite type $k$-schemes $X,Y$ and a morphism $f:X\to Y$; for the last assertions a composable morphism $g:Y\to Z$.

[L1] The Chow ring structure: $A^p(X)=A_{\dim X-p}(X)$ is a commutative graded ring with product $\Delta_X^!(\alpha\times\beta)$, unit $[X]$, graph pullback $f^*=\Gamma_f^!\operatorname{pr}_Y^*$, and for proper $f$ the projection formula $f_*(f^*\alpha\,\beta)=\alpha f_*\beta$ ([[thm-intersection-product-and-chow-ring-of-a-smooth-scheme]]).

[L2] Graph Gysin pullback is a regular-section Gysin, hence commutes with flat pullback and composes; the graph is a regular immersion and a section of the smooth projection to the source. When $f$ is flat, the regular-immersion-followed-by-smooth-projection identity applied to $\Gamma_f:X\hookrightarrow X\times_kY$ and $\operatorname{pr}_Y$ gives $\Gamma_f^!\operatorname{pr}_Y^*=f^*$ for the flat pullback ([[lem-refined-gysin-commutation-and-composition]]).

[L3] Proper pushforward of cycles is functorial under composition and shifts degrees by the dimension difference; flat pullback is functorial and preserves codimension ([[lem-proper-pushforward-of-cycles-well-defined]], [[lem-flat-pullback-chow-groups]]).

## Proof

**Proof technique:** direct; translate each statement into the operational description of the pullback and apply the composition and commutation theorems for refined Gysin.

1.1 Pullback is a unital ring homomorphism. By [L1] the graph pullback $f^*=\Gamma_f^!\operatorname{pr}_Y^*$ is a composite of refined Gysin operations, which preserve codimension by [L2]; it is unital because $\Gamma_f^!\operatorname{pr}_Y^*[Y]=[\Gamma_f]=[X]$ up to the canonical identification of the graph with $X$, and the smooth-section identity gives $\Gamma_f^!\operatorname{pr}_X^*=1$. To see that $f^*$ is multiplicative, write $\alpha=c[Y]$ and $\beta=d[Y]$ in the operational description of [L1]: restriction of operational classes is a ring map by [L2], so $f^*(\alpha\beta)=f^*(cd[Y])=cd[X]=f^*\alpha\,f^*\beta$. Composition $(gf)^*=f^*g^*$ follows from the composition theorem for refined Gysin applied to the composable graphs, with the projection identity of [L2]. [L1, L2, given, algebra]

2.1 Agreement with flat pullback. If $f$ is flat, apply the regular-immersion/smooth-projection identity of [L2] to $\Gamma_f:X\hookrightarrow X\times_kY$ followed by $\operatorname{pr}_Y:X\times_kY\to Y$. Its composite is $f$, flat of relative dimension $\dim X-\dim Y$, so the identity gives $\Gamma_f^!\operatorname{pr}_Y^*=f^*$ for the flat pullback; hence $f^*$ agrees with the flat pullback of [L3] on classes of the stated dimensions. [L2, L3, step 1.1, algebra]

3.1 Proper pushforward. If $f$ is proper, [L3] gives functoriality $(gf)_*=g_*f_*$ and the codimension shift $\dim Y-\dim X$ on nonzero cycle classes, since a proper pushforward of a $p$-dimensional class is supported on images of dimension at most $p$ and the norm-degree formula is multiplicative in towers. The projection formula is the corresponding statement of [L1], with the identification $A^p=A_{\dim-p}$: writing $\alpha=c[Y]$ in operational form, $f_*(c\beta)=c\,f_*\beta$ is the proper axiom of bivariant classes, which is exactly $f_*(f^*\alpha\,\beta)=\alpha\,f_*\beta$. [L1, L3, step 1.1, algebra] ∎ 