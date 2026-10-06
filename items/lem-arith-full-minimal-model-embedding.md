---
id: lem-arith-full-minimal-model-embedding
kind: lemma
title: "Full minimal model embedding"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-effective-ample-pair-and-group-descent
  - lem-arith-separated-minimal-model-and-translations
  - thm-weil-extension-rational-map-into-group-scheme
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-nonaffine-regular-local-ring-is-ufd
  - thm-line-bundle-rational-section-cartier-divisor
  - lem-normal-noetherian-domain-intersection-of-height-one-localizations
  - lem-scheme-zariski-main-factorization-quasi-finite
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - cor-morphisms-equal-on-dense-open-reduced-source
  - lem-arith-dilatations-and-defect-of-smoothness
  - lem-arith-invariant-volume-and-finite-minimal-models
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 5.1/5 final assertion (the completion contains the full minimal model)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring with fraction field $K$, residue field $k$ and a chosen strict henselization $R^{\mathrm{sh}}$, and let $A/K$ be an abelian variety. Let $X$ be the smooth separated finite-type faithfully flat $R$-model of $A$ supplied by [[lem-arith-separated-minimal-model-and-translations]], with strictification $U\subseteq X$, and let $G$ be the descended group completion over $R$ of the strict law on $U_{R^{\mathrm{sh}}}$ ([[lem-arith-effective-ample-pair-and-group-descent]]). Then $G$ contains the full model $X$, not only its strictification $U$, as an $R$-dense open subscheme.

## Facts & Assumptions

**Given:** AC and DC, a discrete valuation ring $R$ with fraction field $K$ and residue field $k$, a strict henselization $R^{\mathrm{sh}}$, an abelian variety $A/K$, the separated minimal model $X/R$ of [[lem-arith-separated-minimal-model-and-translations]] with strictification $U\subseteq X$, and the descended group completion $G/R$ containing $U$ as an $R$-dense open.

[F1] $X$ is smooth, separated, finite type and faithfully flat over the regular Noetherian base $R$, integral with generic fibre $A$, and $U\subseteq X$ is an $R$-dense (fibre-dense) open subscheme carrying a strict $R$-birational group law; $U_{R^{\mathrm{sh}}}$ is an open subscheme of the smooth separated finite-type $R^{\mathrm{sh}}$-group scheme $H$, which descends to the smooth separated finite-type $R$-group scheme $G$ containing $U$ ([[lem-arith-separated-minimal-model-and-translations]], [[lem-arith-effective-ample-pair-and-group-descent]], [[def-s-dense-open-and-s-rational-map]]).

[F2] A rational map from a smooth $S$-scheme to a smooth separated finite-type $S$-group scheme over a regular Noetherian base which is defined at every height-one point extends uniquely to an $S$-morphism ([[thm-weil-extension-rational-map-into-group-scheme]]).

[F3] On a smooth finite-type $R$-scheme the total space is regular, hence normal and locally factorial, and a nonzero rational section of a line bundle has a Cartier divisor of pure codimension one; a Noetherian normal domain is the intersection of its height-one localizations, so a rational function regular at every height-one point is regular ([[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-line-bundle-rational-section-cartier-divisor]], [[lem-normal-noetherian-domain-intersection-of-height-one-localizations]]).

[F4] A smooth $R$-group scheme has translation-invariant top forms; a morphism between smooth models of equal relative dimension is etale where its top differential is an isomorphism ([[lem-arith-invariant-volume-and-finite-minimal-models]], [[lem-arith-dilatations-and-defect-of-smoothness]]). Two morphisms from a reduced source to a separated target agree on the entire source if they agree on a schematically dense open ([[cor-morphisms-equal-on-dense-open-reduced-source]]). Descent additionally requires a faithfully flat cover and equality of the two pullbacks; no descent is inferred from reducedness or separatedness alone.

[F5] Zariski's main factorization: a separated quasi-finite morphism to a quasi-compact base factors as an open immersion followed by a finite morphism, locally on the base ([[lem-scheme-zariski-main-factorization-quasi-finite]]).

## Proof

**Proof technique:** direct: extend the identity rational map $X\dashrightarrow G$ using the codimension-one criterion, show its invariant volume is a unit so that it is etale, and conclude by the scheme Hartogs and Zariski-factorization argument that it is an open immersion.

1.1 The generic fibre of $X$ is $A=X_K$, and $G_K$ is the group completion of the strict law on $U_K=A$; hence the identity of $A$ defines a rational map $\varphi:X\dashrightarrow G$ over $R$ which on $U$ is the given open immersion $U\hookrightarrow G$. Every height-one point of $X$ lies either in the generic fibre (where $\varphi$ is defined, since it is the identity of $A$) or is a generic point of an irreducible component of the special fibre. Since $U$ is $R$-dense, its complement contains no irreducible component of any fibre, so $U$ contains the generic point of every component of the special fibre; therefore $\varphi$ is defined at every height-one point of $X$. [F1, given, construct]

2.1 The base $R$ is a regular Noetherian scheme, $X$ is smooth over $R$ and $G$ is a smooth separated finite-type $R$-group scheme, so the codimension-one extension criterion [F2] applies to $\varphi$ and produces a unique $R$-morphism $\psi:X\to G$ extending $\varphi$. On the generic fibre $\psi_K$ is the identity of $A$, so $\psi$ is birational. [F1, F2, step 1.1, construct]

3.1 We show that $\psi$ is etale. Its top differential is a section of the invertible sheaf $\operatorname{Hom}(\psi^*\bigwedge^g\Omega_{G/R},\bigwedge^g\Omega_{X/R})$. It is a unit on $U$, where $\psi$ is the given open immersion, and on the generic fibre, where it is the identity. Thus it is nonzero generically, and its zero divisor can only be supported in $X\setminus U$. Step 1.1 shows that $U$ contains every height-one point. Since $X$ is regular and integral, the zero locus of a nonzero section of an invertible sheaf is an effective Cartier divisor of pure codimension one, unless empty. There is no possible codimension-one support, so the section is nowhere zero and the top differential is an isomorphism. The differential criterion [F4] makes $\psi$ etale. This argument requires no global trivialization of the canonical bundle of the preliminary model. [F3, F4, step 1.1, step 2.1, algebra]

4.1 The morphism $\psi$ is separated, because $X$ and $G$ are separated over $R$, and it is quasi-finite: it is etale, hence locally quasi-finite, and it is a morphism of finite type between quasi-compact schemes, hence quasi-compact; a quasi-compact locally quasi-finite morphism is quasi-finite. Being etale and birational, and having reduced integral source and normal target (smooth over the DVR), it is an open immersion: apply Zariski's main factorization [F5] locally on $G$ to write $\psi=g\circ j$ with $j:X\hookrightarrow Z$ an open immersion and $g:Z\to G$ finite. Replace $Z$ by the reduced closure of its birational generic component, which still contains $j(X)$. Its coordinate algebra is a finite integral subalgebra of the common function field containing the normal target algebra, so it equals that target algebra. Thus $g$ is an isomorphism on this component and $\psi$ is an open immersion. [F3, F5, step 3.1, algebra]

5.1 Consequently $\psi$ identifies $X$ with an open subscheme of $G$ containing $U$; since the completion already contains $U$ as an $R$-dense open by [F1], the larger image of $X$ is $R$-dense in $G$. This is the assertion that the descended completion contains the full separated minimal model $X$, not only the strictification $U$, as an $R$-dense open. [F1, step 4.1, given, algebra] ∎ 