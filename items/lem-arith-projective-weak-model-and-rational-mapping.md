---
id: lem-arith-projective-weak-model-and-rational-mapping
kind: lemma
title: "Projective weak models and rational mapping"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-finite-permissible-smoothening
  - lem-arith-strict-henselization-and-smooth-sections
  - thm-abelian-variety-is-projective
  - thm-valuative-criterion-properness
  - lem-schematic-closure-and-dense-agreement
  - thm-prime-filtration-of-a-finite-module
  - thm-existence-of-associated-primes
  - thm-associated-primes-in-a-short-exact-sequence
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - lem-finite-presentation-image-constructible
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
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 3.1 final paragraph and 3.5/3-4 (projective weak models and rational mapping); proof closure in owner-arithmetic-models/neron-source/closure-supplement.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$, residue field $k$, and strict henselization $R^{\mathrm{sh}}$, and let $A$ be an abelian variety over $K$ of dimension $g$.

(a) There is a smooth separated finite-type $R$-model $V$ of $A$ with $V(R^{\mathrm{sh}})=A(K^{\mathrm{sh}})$; no excellence, bounded-model theorem or flattening hypothesis is used.

(b) A weak model collection for $A$ receives every generic rational map from a smooth $R$-scheme $Z$ with irreducible special fibre as an $R$-rational map into one of its members.

(c) Weak models remain weak after the base change $R\to\mathcal O_{Z,\eta}$ at a generic point $\eta$ of a special fibre.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$, residue field $k$ and strict henselization $R^{\mathrm{sh}}$, an abelian variety $A/K$ of dimension $g$, and a weak model collection for $A$.

[F1] An abelian variety over $K$ is projective, and the schematic closure of $A$ in a projective $R$-space is proper of finite type with generic fibre $A$; proper morphisms satisfy the valuative criterion, and the finite permissible smoothening produces a finite sequence of generically identical special-fibre blowups whose smooth locus contains every $R^{\mathrm{sh}}$-section ([[thm-abelian-variety-is-projective]], [[thm-valuative-criterion-properness]], [[lem-arith-finite-permissible-smoothening]], [[lem-schematic-closure-and-dense-agreement]], [[lem-arith-strict-henselization-and-smooth-sections]]).

[F2] Over a Noetherian base $B$, a fibre-dense open of a smooth $B$-scheme is schematically dense. A prime filtration of $B$ remains a filtration after tensoring with a flat smooth $B$-algebra $C$, with factors $C/\mathfrak pC$. Each factor is flat over the domain $B/\mathfrak p$ and injects into its generic fibre, which is geometrically regular and reduced. Fibre density makes restriction injective on that generic fibre, hence on each factor, and induction makes restriction injective on $C$. This proves density without asserting that the associated primes of $C$ are minimal. Flat tensor products preserve finite kernels and equalizers ([[thm-prime-filtration-of-a-finite-module]], [[lem-filtered-colimits-of-abelian-groups-are-exact]], [[def-s-dense-open-and-s-rational-map]]).

[F3] Domains of $S$-rational maps descend along faithfully flat smooth maps and commute with flat base change, the graph closure being computed by finite kernels of restriction maps; morphisms into a separated target that agree on a schematically dense open are equal ([[def-s-dense-open-and-s-rational-map]], [[lem-s-rational-map-descends-along-faithfully-flat-smooth-maps]], [[lem-nonaffine-fppf-descent-of-scheme-morphisms]], [[cor-morphisms-equal-on-dense-open-reduced-source]]); images of finitely presented morphisms are constructible ([[lem-finite-presentation-image-constructible]]).

## Proof

**Proof technique:** direct: close $A$ projectively, smoothen, then construct the rational map by graph closures and constructibility, with the density and descent facts of [F2] and [F3].

1.1 By [F1] choose a projective embedding of $A$ over $K$, let $X$ be the schematic closure of $A$ in the corresponding projective $R$-space, and note that $X$ is proper of finite type over $R$ with generic fibre $A$. Its chart rings are $\pi$-torsion-free, since schematic closure contracts the generic ideal, so $X$ is flat over the DVR. For every $a\in A(K^{\mathrm{sh}})=X(K^{\mathrm{sh}})$, the valuative criterion of properness extends $a$ uniquely to an $R^{\mathrm{sh}}$-point of $X$; applying the finite permissible smoothening theorem [F1] to $X$ produces a finite sequence of special-fibre blowups, proper and generically identical, whose smooth locus contains every such section. The smooth locus $V$ of the resulting model is therefore a smooth separated finite-type $R$-model of $A$ with $V(R^{\mathrm{sh}})=A(K^{\mathrm{sh}})$, proving (a). [F1, given, construct]

2.1 For a fibre-dense open $U$ in a smooth scheme over a Noetherian base, apply the filtration argument of [F2] on an affine source chart. More explicitly, a function zero on $U$ maps to zero in the last factor's generic fibre, because that fibre is reduced and $U$ meets every irreducible component. Flatness over the domain $B/\mathfrak p$ injects the factor into its generic fibre. The function therefore lies in the previous filtration submodule, where it still restricts to zero; induction through the finite filtration gives zero. Thus restriction is injective. The same proof applies after any Noetherian base change for which the source remains smooth and $U$ remains fibre-dense, in particular the DVR localizations and strict henselizations used here. Schematic graph closures commute with flat base change because restriction kernels do: compute restriction with a finite affine cover of $U$, use its finite equalizer, and tensor with a flat algebra. No claim that a smooth algebra over an arbitrary Noetherian base has only minimal associated primes is used. [F2, step 1.1, algebra]

3.1 The graph closure of a rational map is computed on a finite affine cover by kernels of restriction maps, so it commutes with flat base change and the domain of definition is the open where the graph projection is an isomorphism; if a faithfully flat pullback of that projection is an isomorphism, affine ring descent gives the isomorphism before pullback by [F3]. Hence domains descend along faithfully flat source maps and commute with flat base changes, and representatives agreeing on a schematically dense open of a separated target are equal. This is the BLR relative-rational-map statement of Chapter 2, Section 5 in the form used below. [F2, F3, step 2.1, algebra]

4.1 For (b), shrink $Z$ fibre-densely so the generic rational map is defined on its whole generic fibre: the closure of the excluded proper generic closed set is nowhere dense in the smooth irreducible special fibre by the DVR dimension argument. Let $\Gamma_i\subseteq Z\times_RV_i$ be its schematic graph closure for each of the finitely many members of the weak collection, with projection $p_i$ to $Z$. After passing to $R^{\mathrm{sh}}$, every rational special point of $Z$ lifts to a section by [F1]; its generic image extends to a section of some $V_i$ by weakness, and the paired section lies in $\Gamma_i$ by schematic closure. These special points are dense. Constructibility [F3] and finiteness of the collection therefore force some image $p_i(\Gamma_i)$ to contain the generic point $\eta$ of the original special fibre (this can be checked after the faithfully flat strict-henselian extension). Choose $q\in\Gamma_i$ over $\eta$. The graph is flat and generically isomorphic to $Z$, so $\mathcal O_{\Gamma_i,q}$ and the DVR $\mathcal O_{Z,\eta}$ lie in the same function field. The former is a local ring dominating that DVR; a proper overring of a DVR in its fraction field inverts the uniformizer and cannot dominate it, so the two rings coincide. Finite-type affine presentations and clearing denominators spread this stalk equality to an isomorphism on neighbourhoods of $q$ and $\eta$. Composing its inverse with the other graph projection extends the generic map on an $R$-dense open of $Z$, proving (b). [F2, F3, step 3.1, construct]

5.1 For (c), put $R'=\mathcal O_{Z,\eta}$ and $K'=\operatorname{Frac}R'$. A point of $A(K'^{\mathrm{sh}})$ uses only finitely many coordinates and relations, so it is defined over the fraction field of a pointed local etale neighbourhood of $R'$. Spread that neighbourhood to an etale scheme $Z'\to Z$ near its special generic point $\eta'$, and spread the point to a generic rational map $Z'_K\dashrightarrow A$. Shrink to the open consisting of the generic fibre and the special component containing $\eta'$, so (b) supplies an $R$-rational map into some $V_i$ defined at $\eta'$. Localizing and then passing to $R'^{\mathrm{sh}}$ extends the given point to an $R'^{\mathrm{sh}}$-section of $(V_i)_{R'}$. Thus the base-changed finite collection is weak. The extension $K'/K$ may have transcendence degree; no finite-separable identification of the two fraction fields is used. [F2, F3, step 4.1, algebra] ∎
