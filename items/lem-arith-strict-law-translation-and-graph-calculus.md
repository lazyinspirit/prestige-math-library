---
id: lem-arith-strict-law-translation-and-graph-calculus
kind: lemma
title: "Strict law graph calculus"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - lem-arith-strictification-of-dvr-birational-group-law
  - def-s-dense-open-and-s-rational-map
  - lem-s-rational-map-descends-along-faithfully-flat-smooth-maps
  - cor-morphisms-equal-on-dense-open-reduced-source
  - lem-scheme-zariski-main-factorization-quasi-finite
  - lem-schematic-closure-and-dense-agreement
  - def-faithfully-flat-morphism-schemes
  - lem-ag-flat-local-regularity-ascent-descent
  - thm-ag-standard-smooth-geometric-regularity
  - thm-regular-local-rings-are-normal
  - lem-arith-projective-weak-model-and-rational-mapping
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 5.2/4 and 5.3/1-4 (graph calculus of a strict law)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied algebra and scheme results. Let $R$ be a discrete valuation ring, $X$ a smooth separated faithfully flat finite-type $R$-scheme, and $m$ a strict $R$-birational group law on $X$ ([[lem-arith-strictification-of-dvr-birational-group-law]]). Then:

(a) $X$ embeds into the functor of relative birational self-maps of $X$, and the closure $\Gamma$ of the multiplication graph in $X\times_RX\times_RX$ has all three two-coordinate projections which are open immersions with both-projection dense images;

(b) for a section $a$ and a point $b$, the section translation $t_a$ is defined at $b$ if and only if the law $m$ is defined at $(a,b)$;

(c) products of section translations are computed by the graph triple: if the law is defined at the relevant pairs, then $t_a t_b=t_c$ where $c$ is the third coordinate of the graph.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$, a smooth separated faithfully flat finite-type $R$-scheme $X$, and a strict $R$-birational group law $m$ on $X$.

[F1] Strictness: on an open $U\subseteq X\times_RX$ dense over both projections, the universal left and right translations are open immersions with both-projection dense images; the law is associative as an $R$-rational map ([[lem-arith-strictification-of-dvr-birational-group-law]]).

[F2] The graph of a rational map has a schematic closure containing it as a schematically dense open; since the graph domain is smooth and reduced, the closure is reduced. Schematic density survives product with the flat $R$-scheme $X$. Fibre-dense opens in smooth finite-presentation schemes remain schematically dense after arbitrary test-scheme base change, and two morphisms into a separated target which agree on a schematically dense open agree everywhere ([[lem-schematic-closure-and-dense-agreement]], [[lem-arith-projective-weak-model-and-rational-mapping]], [[cor-morphisms-equal-on-dense-open-reduced-source]]).

[F3] A finite-type morphism with at most one point in each geometric fibre is quasi-finite. A separated quasi-finite birational morphism from a reduced source to a normal target is an open immersion componentwise: apply Zariski Main locally, then use that a finite birational algebra inside the target's fraction field equals the normal domain ([[lem-scheme-zariski-main-factorization-quasi-finite]], [[lem-ag-flat-local-regularity-ascent-descent]], [[thm-ag-standard-smooth-geometric-regularity]], [[thm-regular-local-rings-are-normal]]).

[F4] Pullback of a faithfully flat morphism is faithfully flat and detects equality of morphisms: if two maps become equal after pullback along a faithfully flat cover, they were equal before pullback ([[def-faithfully-flat-morphism-schemes]]).

## Proof

**Proof technique:** follow BLR 5.2/4 and 5.3/1–4: represent elements by strict translations, prove the graph relation on a dense auxiliary variable, then use normality and Zariski Main.

1.1 For an $R$-scheme $T$, let $\mathrm{Bir}_{X/R}(T)$ be the group of $T$-birational self-maps of $X_T=X\times_RT$. Strictness [F1] makes each section $a\in X(T)$ act by a $T$-birational left translation $\tau_a$, naturally in $T$. This defines $X\to\mathrm{Bir}_{X/R}$. It is a monomorphism: if $\tau_a=\tau_b$, then on the common dense domain the maps $(\tau_a,\operatorname{id})$ and $(\tau_b,\operatorname{id})$ from $T\times_RX$ to $X_T\times_TX_T$ agree. They factor as the universal right translation $(x,y)\mapsto(m(x,y),y)$ after $(a,\operatorname{id})$ and $(b,\operatorname{id})$, respectively. The right translation is an open immersion by [F1], so cancellation gives $(a,\operatorname{id})=(b,\operatorname{id})$ on that dense open; [F2] makes the open schematically dense, hence the equality holds on $T\times_RX$. Since $T\times_RX\to T$ is faithfully flat, [F4] gives $a=b$. Associativity also gives $\tau_a\tau_b=\tau_c$ whenever $m(a,b)=c$ is defined. [F1, F2, F4, given, construct]

2.1 Let $\Gamma\subseteq X^3$ be the schematic closure of the graph of $m|_U$, with coordinates $(x,y,z)$. On the open locus in $X^4$ where $(y,w),(x,m(y,w)),(z,w)\in U$, the maps $m(x,m(y,w))$ and $m(z,w)$ are defined. This locus is dense over the first three coordinates by the two-projection density of $U$ and the open-immersion property of the strict translations in [F1]. On the intersection with the graph over $U$, associativity makes the two morphisms agree on the dense open where the associative identity is represented; as the target $X$ is separated, [F2] gives equality on their common domain. The graph over $U$, after product with the flat scheme $X$, is schematically dense in $\Gamma\times_RX$; hence [F2] extends this equality to the whole common domain in $\Gamma\times_RX$. Pulling back along any $T$-valued triple $(a,b,c):T\to\Gamma$ shows $\tau_a\tau_b=\tau_c$ as $T$-birational maps. In particular, if $m(a,b)=c$ is defined, then $t_at_b=t_c$, proving (c); conversely, for fixed any two coordinates of a triple in $\Gamma(T)$, the third is unique by the monomorphism of step 1.1 and invertibility in $\mathrm{Bir}_{X/R}(T)$. [F1, F2, step 1.1, algebra]

3.1 Each projection $q_{ij}:\Gamma\to X^2$ is a monomorphism: for every $T$, a triple $(a,b,c)\in\Gamma(T)$ satisfies the translation relation of step 2.1, so any two of its coordinates determine the third. It is finite type, hence quasi-finite by [F3]. On the graph over $U$, $q_{12}$ is the identity onto $U$, while $q_{13}$ and $q_{23}$ are the universal left and right translations; these are open immersions with dense images by [F1]. Thus each $q_{ij}$ is birational on every component it meets. The target $X^2$ is normal because it is smooth over the regular DVR $R$. Applying [F3] componentwise shows each $q_{ij}$ is an open immersion. Its image contains respectively $U$, the left-translation image, and the right-translation image, all dense over both projections, so the images are dense over both projections. This proves (a). [F1, F3, step 2.1, construct]

4.1 The open immersion $q_{12}$ identifies $\Gamma$ with an open $W\subseteq X^2$, and the third coordinate defines $m$ on $W$. This is the full domain: any local morphism extending $m$ has graph in the closed $\Gamma$, since it agrees with the graph over $U$ on a schematically dense open. For a section $a:T\to X$ and a $T$-point $b$ of $X_T$, if $m$ is defined at $(a,b)$, pullback along $a\times\operatorname{id}$ shows $t_a$ is defined at $b$. Conversely, if $t_a$ is defined at $b$, choose an open neighbourhood $D$ on which it is a morphism and consider $D\to X^3$, $y\mapsto(a(p_T(y)),y,t_a(y))$, where $p_T:X_T\to T$. On the T-dense open where the strict law defines $t_a$, this graph factors through $\Gamma$; universal schematic density [F2] therefore makes it factor through $\Gamma$ on $D$. Hence $(a,b)\in W$, so the law is defined there. This proves (b) for every test scheme. For an $R$-section $a$, the graph closure $\Gamma_a\subseteq X^2$ of $t_a$ maps into $\Gamma$. Its two projections are finite-type monomorphisms by the monomorphism of $q_{12}$ and $q_{13}$, and are birational because $t_a$ is an $R$-birational map. The target $X$ is normal; [F3] makes both projections open immersions with dense images, as used for translate gluing. [F1, F2, F3, step 3.1, step 2.1, construct] ∎
