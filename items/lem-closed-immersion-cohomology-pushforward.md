---
id: lem-closed-immersion-cohomology-pushforward
kind: lemma
title: "Closed immersion preserves cohomology and coherent pushforward"
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-affine-morphism-schemes
  - def-closed-immersion-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-affine-morphism-cohomology-pushforward
  - def-direct-image-sheaf
  - lem-direct-image-is-sheaf
  - def-quasi-coherent-module-scheme
  - def-coherent-module-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - thm-affine-quasi-coherent-equivalence
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-sections-basic-open
  - def-finite-type-finite-presentation-module-sheaf
  - def-principal-distinguished-subset-of-spectrum
  - def-sheaf-cohomology-derived-global-sections
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $i:Z\to X$ be a
closed immersion of schemes ([[def-closed-immersion-schemes]]) and let
$\mathcal F$ be a quasi-coherent $\mathcal O_Z$-module
([[def-quasi-coherent-module-scheme]]), with direct image $i_*\mathcal F$
([[def-direct-image-sheaf]], [[lem-direct-image-is-sheaf]]). Then for every
$q\ge0$ there is a canonical isomorphism
$$H^q(Z,\mathcal F)\;\cong\;H^q(X,i_*\mathcal F),$$
where $H^q$ denotes sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]).

If in addition $X$ is locally Noetherian
([[def-locally-noetherian-and-noetherian-scheme]]) and $\mathcal F$ is
coherent ([[def-coherent-module-scheme]]), then $i_*\mathcal F$ is a coherent
$\mathcal O_X$-module. The empty scheme, the zero module and the case
$X=\operatorname{Spec}A$ affine are included.

## Facts & Assumptions
**Given:** The Axiom of Choice, a closed immersion $i:Z\to X$ and a quasi-coherent $\mathcal O_Z$-module $\mathcal F$.

[F1] A closed immersion is affine: for every affine open
$U=\operatorname{Spec}A\subseteq X$ there is an ideal $I\subseteq A$ with
$i^{-1}(U)\cong\operatorname{Spec}(A/I)$, in particular $i^{-1}(U)$ is
affine. ([[lem-closed-immersion-affine-quotient-and-base-change]],
[[def-affine-morphism-schemes]],
[[def-principal-distinguished-subset-of-spectrum]])

[F2] Affine morphisms and cohomology: if $f:Y\to T$ is affine, then the map
$H^q(T,f_*\mathcal G)\to H^q(Y,\mathcal G)$ is an isomorphism for every
$q\ge0$ and every quasi-coherent $\mathcal O_Y$-module $\mathcal G$
([[lem-affine-morphism-cohomology-pushforward]]).

[F3] Affine equivalence: for an affine scheme $\operatorname{Spec}R$ the
quasi-coherent modules are, up to canonical isomorphism, exactly the
associated sheaves $\widetilde M$ of $R$-modules $M$
([[thm-affine-quasi-coherent-equivalence]],
[[def-associated-sheaf-module-affine-scheme]]); a quasi-coherent module is of
finite type if and only if some/every presenting module is finitely generated
([[def-finite-type-finite-presentation-module-sheaf]]); for
$\mathcal F\cong\widetilde M$ one has
$\Gamma(D(f),\mathcal F)\cong M_f$ with restrictions the localisation maps
([[lem-associated-sheaf-sections-basic-open]]). On a locally Noetherian scheme
coherence is local on the scheme, and a finite-type quasi-coherent module
whose presenting modules are finitely generated over Noetherian rings is
coherent ([[def-coherent-module-scheme]],
[[def-locally-noetherian-and-noetherian-scheme]]).



## Proof

**Proof technique:** direct: a closed immersion is affine, apply the affine edge-map isomorphism for cohomology, and identify the pushforward on affine charts with a finitely generated module over a Noetherian ring to get coherence.

1.1 The closed immersion $i$ is an affine morphism: by [F1] the inverse image of every affine open subscheme of $X$ is affine. [F1]

1.2 Apply [F2] to $f=i:Z\to X$ and $\mathcal G=\mathcal F$: the edge map $H^q(X,i_*\mathcal F)\to H^q(Z,\mathcal F)$ is an isomorphism for every $q\ge0$, which is the asserted canonical isomorphism (in degree $0$ it is the identity of $\Gamma(Z,\mathcal F)$ under the canonical identification of $\Gamma(X,i_*\mathcal F)$ with $\Gamma(Z,\mathcal F)$). [F2, 1.1]

1.3 Now assume $X$ locally Noetherian and $\mathcal F$ coherent. Coherence of $i_*\mathcal F$ is local on $X$, so fix an affine open $U=\operatorname{Spec}A\subseteq X$; then $A$ is Noetherian, and by [F1] there is an ideal $I\subseteq A$ with $i^{-1}(U)=\operatorname{Spec}B$, $B=A/I$. By [F3] the coherent module $\mathcal F|_{i^{-1}(U)}$ is the associated sheaf $\widetilde M$ of a finitely generated $B$-module $M=\Gamma(i^{-1}(U),\mathcal F)$, and $B$, being a quotient of the Noetherian ring $A$, is Noetherian. [F1, F3]

1.4 The restriction $(i_*\mathcal F)|_U$ is the associated sheaf $\widetilde M$ of $M$ viewed as an $A$-module through $A\twoheadrightarrow B$: indeed for $f\in A$ with image $\bar f\in B$ one has $\Gamma(D(f),(i_*\mathcal F)|_U)=\mathcal F(i^{-1}D(f))=\Gamma(D(\bar f),\widetilde M)=M_{\bar f}$ by [F1] and [F3], and these isomorphisms are compatible with the restriction maps, which on both sides are the canonical localisations; sheaves are determined by their sections on the basis of principal opens. [F1, F3]

1.5 The $A$-module $M$ is finitely generated, because it is finitely generated over the quotient ring $B$ by 1.3; hence $\widetilde M$ is a coherent $\mathcal O_U$-module by [F3], since $A$ is Noetherian. As $U$ was an arbitrary affine open of the locally Noetherian scheme $X$, coherence of $i_*\mathcal F$ follows. [F3, 1.3, 1.4]

2.1 Boundary and choice accounting. If $Z=\varnothing$ then $\mathcal F=0$, $i_*\mathcal F=0$ and both sides of the isomorphism are the zero group in every degree; if $X=\varnothing$ then also $Z=\varnothing$; if $\mathcal F=0$ the isomorphism is $0\cong0$. Affine $X$ is the case in which the local verification of 1.3-1.5 is already global. The Axiom of Choice is a hypothesis, consumed through the affine edge-map theorem [F2] and the affine equivalence [F3]; the localisation identifications of 1.4 make no further choice. [F2, F3, 1.3, 1.4] ∎
