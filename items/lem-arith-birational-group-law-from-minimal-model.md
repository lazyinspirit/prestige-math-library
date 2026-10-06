---
id: lem-arith-birational-group-law-from-minimal-model
kind: lemma
title: "Birational group law"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-separated-minimal-model-and-translations
  - lem-filtered-colimit-fp-scheme-stage
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - cor-morphisms-equal-on-dense-open-reduced-source
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 4.3/5 (birational group law from the minimal model)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$ and residue field $k$, let $R^{\mathrm{sh}}$ be a strict henselization, let $A/K$ be an abelian variety, and let $X$ be the separated minimal model of [[lem-arith-separated-minimal-model-and-translations]]. Then the generic multiplication of $A$ extends to an $R$-birational associative law $m$ on $X$ whose universal left and right translations are birational. Here an $R$-birational group law is an $R$-rational multiplication on $X\times_RX$ which is associative wherever the compositions are defined and whose universal translations $(x,y)\mapsto(x,m(x,y))$ and $(x,y)\mapsto(m(x,y),y)$ are $R$-birational self-maps of $X\times_RX$.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$, an abelian variety $A/K$, the separated minimal model $X$ of $A$ over $R$, and the generic multiplication $m_K:A\times_KA\to A$.

[F1] Over $R'=\mathcal O_{Z,\eta}$, each translation by an $A(K')$-point extends to an $R'$-birational self-map of $X_{R'}$, an open immersion on its $R'$-dense domain ([[lem-arith-separated-minimal-model-and-translations]]).

[F2] Domains of $S$-rational maps, descent of representatives along faithfully flat maps, and equality of morphisms agreeing on a schematically dense open of a reduced source ([[def-s-dense-open-and-s-rational-map]], [[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

## Proof

**Proof technique:** direct: construct the universal translations at special generic points, spread, and compare.

1.1 Let $\xi$ be a generic point of the special fibre of the first copy of $X$, and put $R'=\mathcal O_{X,\xi}$ and $K'=\operatorname{Frac}R'$. The canonical map $\operatorname{Spec}K'\to X_K=A$ is an $A(K')$-point $a$ coming from the **first**, parameter factor. Apply [F1] to $t_a$ and $t_{-a}$ on the second copy $X_{R'}$. Their rational-domain open immersions are inverse on fibre-dense open subsets. By finite-presentation spreading ([[lem-filtered-colimit-fp-scheme-stage]]) their domains, maps and inverse identities spread over a neighbourhood of $\xi$ in the parameter $X$. Thus $(x,y)\mapsto(x,m(x,y))$ and its inverse are defined near all special-fibre generic points of $X\times_RX$ projecting to $\xi$: after localization these are generic points of the special fibre of $X_{R'}$, and the local domains are $R'$-dense. Every special-fibre component of the product projects dominantly onto a special component of the first factor, since both factors are smooth and their fibre components are geometrically regular. Repeating for its finitely many $\xi$, and adjoining the generic translation and its inverse on the open generic fibre, gives fibre-dense domains for a rational map $\Phi$ and its inverse. On overlaps the maps agree on the generic fibre and hence agree by separatedness and flatness. Restricting the two domains to where the compositions are defined gives inverse open immersions; these restrictions remain fibre-dense by the local inverse construction. Hence $\Phi$ is $R$-birational, and its second projection defines an $R$-rational extension of $m_K$. [F1, F2, given, construct]

2.1 Apply the same argument with the second factor as parameter: its canonical $K'$-point, not a point of the variable first factor, supplies the translation. This constructs the other universal map $\Psi(x,y)=(m(x,y),y)$ and its rational inverse. Both are $R$-birational on fibre-dense open domains. [F1, F2, step 1.1, construct]

3.1 The two constructions agree generically on the common dense open where both are defined, because both restrict to the generic multiplication of $A$; by separatedness of $X$ and schematic density of the domain ([F2]) they define a single $R$-rational map $m$. Associativity holds wherever the composed expressions are defined: both sides restrict to the associative law of $A$ on a schematically dense open, so by [F2] they agree; consequently $m$ is an $R$-birational group law with birational universal translations, as claimed. [F2, step 2.1, algebra] ∎ 