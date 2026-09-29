---
id: lem-internal-hom-fp-qc
kind: lemma
title: Internal Hom from a finitely presented sheaf is quasi-coherent
status: published
origin: pipeline
deps:
  - def-internal-hom-qc-sheaves
  - thm-affine-quasi-coherent-equivalence
  - thm-localisation-of-hom-for-finitely-presented-modules
  - def-axiom-of-choice
  - def-finite-type-finite-presentation-module-sheaf
  - def-quasi-coherent-module-scheme
  - def-associated-sheaf-module-affine-scheme
  - lem-associated-sheaf-restriction-affine-open
  - thm-associated-module-sheaf-exists
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the affine equivalence
([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal F$ be a finitely
presented quasi-coherent $\mathcal O_X$-module and let $\mathcal G$ be a
quasi-coherent $\mathcal O_X$-module
([[def-finite-type-finite-presentation-module-sheaf]],
[[def-quasi-coherent-module-scheme]]). Write
$\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)$ for the internal Hom, the
sheaf $U\mapsto\operatorname{Hom}_{\mathcal O_U}(\mathcal F|_U,\mathcal G|_U)$
([[def-internal-hom-qc-sheaves]]).

Then:

1. $\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)$ is quasi-coherent.
2. If $U=\operatorname{Spec}A$ is an affine open with
   $\mathcal F|_U\cong\widetilde M$, $\mathcal G|_U\cong\widetilde N$ for
   $A$-modules $M,N$ with $M$ finitely presented, then there is a canonical
   isomorphism of $\mathcal O_U$-modules
   $$\mathcal H om_{\mathcal O_X}(\mathcal F,\mathcal G)|_U\;\cong\;\widetilde{\operatorname{Hom}_A(M,N)},$$
   natural in $M$ and $N$; on $D(f)\subseteq U$ it identifies sections with
   $\operatorname{Hom}_{A_f}(M_f,N_f)$ via the natural localisation map
   $\operatorname{Hom}_A(M,N)_f\to\operatorname{Hom}_{A_f}(M_f,N_f)$, which is
   an isomorphism because $M$ is finitely presented.
3. The identifications of (2) are compatible on overlaps of affine charts,
   both sides being given by restriction of morphisms.

The finite presentation hypothesis on $\mathcal F$ is used exactly through the
isomorphism of (2); for arbitrary quasi-coherent $\mathcal F$ no such
conclusion is asserted.

## Facts & Assumptions

**Given:** The Axiom of Choice; a scheme $X$; a finitely presented quasi-coherent
$\mathcal F$; a quasi-coherent $\mathcal G$.

[F1] Sections of the internal Hom are Hom modules: for open $U$,
$\Gamma(U,\mathcal H om(\mathcal F,\mathcal G))=\operatorname{Hom}_{\mathcal O_U}(\mathcal F|_U,\mathcal G|_U)$,
with restriction of a morphism as restriction map; this definition makes no
quasi-coherence claim
([[def-internal-hom-qc-sheaves]]).

[F2] Affine equivalence: for $X=\operatorname{Spec}A$ the functor
$M\mapsto\widetilde M$ is an equivalence onto the quasi-coherent
$\mathcal O_X$-modules, with $M\cong\Gamma(X,\widetilde M)$, and for all
$A$-modules $M,N$ the map
$u\mapsto\widetilde u$ is a bijection
$\operatorname{Hom}_A(M,N)\to\operatorname{Hom}_{\mathcal O_X}(\widetilde M,\widetilde N)$
([[thm-affine-quasi-coherent-equivalence]]).

[F3] Localisation of Hom: for a multiplicative subset $S\subseteq A$ and
$A$-modules $M,N$ the natural map
$S^{-1}\operatorname{Hom}_A(M,N)\to\operatorname{Hom}_{S^{-1}A}(S^{-1}M,S^{-1}N)$
is injective for $M$ finitely generated and an isomorphism for $M$ finitely
presented ([[thm-localisation-of-hom-for-finitely-presented-modules]]).

[F4] Restrictions of associated sheaves: for $D(f)\subseteq\operatorname{Spec}A$
one has $(\widetilde M)|_{D(f)}=\widetilde{(M_f)}$, and sections on $D(f)$ are
$M_f$ with localisation as restriction
([[lem-associated-sheaf-restriction-affine-open]],
[[def-associated-sheaf-module-affine-scheme]],
[[thm-associated-module-sheaf-exists]]).

[F5] The conditions in [F1]–[F4] are local: finite presentation and
quasi-coherence of $\mathcal F$ and quasi-coherence of $\mathcal G$ hold on
some affine open neighbourhood of every point, and on a distinguished open of
an affine chart the modules remain finitely presented respectively arbitrary
([[def-finite-type-finite-presentation-module-sheaf]],
[[def-quasi-coherent-module-scheme]]).



**Proof technique:** direct; compute the distinguished-open sections of the internal Hom on an affine chart, identify them with the localisations of $\operatorname{Hom}_A(M,N)$ by the localisation-of-Hom theorem, and use the basis-determination of associated sheaves.

## Proof

1.1 An affine chart where both sheaves are associated: let $x\in X$. By [F5] and the affine equivalence [F2] applied to an affine neighbourhood of $x$, and shrinking to a distinguished open inside the intersection of a chart for $\mathcal F$ and a chart for $\mathcal G$, there is an affine open $U=\operatorname{Spec}A$ containing $x$ with $\mathcal F|_U\cong\widetilde M$ and $\mathcal G|_U\cong\widetilde N$, where $M$ is finitely presented and $N$ is an arbitrary $A$-module; such charts cover $X$. [F2, F5]

2.1 Sections on distinguished opens: for $f\in A$, [F1] gives $\Gamma(D(f),\mathcal H om(\mathcal F,\mathcal G))=\operatorname{Hom}_{\mathcal O_{D(f)}}(\mathcal F|_{D(f)},\mathcal G|_{D(f)})$, and by [F4] $\mathcal F|_{D(f)}=\widetilde{(M_f)}$ and $\mathcal G|_{D(f)}=\widetilde{(N_f)}$; since $D(f)$ is affine, [F2] identifies this Hom module canonically with $\operatorname{Hom}_{A_f}(M_f,N_f)$. [F1, F2, F4, step 1.1]

3.1 The restriction maps are the localisation maps: for $D(g)\subseteq D(f)$ the restriction of a morphism of $\mathcal O_U$-modules is the map $\psi\mapsto\psi|_{D(g)}$, so under the identifications of step 2.1 the restriction $\Gamma(D(f),\mathcal H om)\to\Gamma(D(g),\mathcal H om)$ corresponds to $\operatorname{Hom}_A(M,N)\to\operatorname{Hom}_{A_f}(M_f,N_f)\to\operatorname{Hom}_{A_g}(M_g,N_g)$ obtained by functoriality of restriction of morphisms, which is exactly the composite of the natural localisation maps for $\operatorname{Hom}$; by [F3] this composite is the canonical localisation $\operatorname{Hom}_A(M,N)_f\to\operatorname{Hom}_A(M,N)_g$ under the identifications $\operatorname{Hom}_A(M,N)_f\cong\operatorname{Hom}_{A_f}(M_f,N_f)$ and $\operatorname{Hom}_A(M,N)_g\cong\operatorname{Hom}_{A_g}(M_g,N_g)$, both isomorphisms because $M$ is finitely presented. [F1, F2, F3, step 2.1]

4.1 The identification with the associated sheaf: by steps 2.1 and 3.1 the distinguished-open data of $\mathcal H om(\mathcal F,\mathcal G)|_U$ are the modules $\operatorname{Hom}_A(M,N)_f$, with restrictions the localisation maps, which are exactly the distinguished-open data of the associated sheaf $\widetilde{\operatorname{Hom}_A(M,N)}$; a morphism of $\mathcal O_U$-modules between these two sheaves is determined by its components on distinguished opens and a compatible family of isomorphisms on the basis extends uniquely, so the identity family assembles to a canonical isomorphism $\mathcal H om(\mathcal F,\mathcal G)|_U\cong\widetilde{\operatorname{Hom}_A(M,N)}$, natural in $M$ and $N$ because all identifications used are the canonical ones of [F1]–[F4]. This proves (2). [F2, F3, F4, step 2.1, step 3.1]

5.1 Claim 1 and claim 3: the charts $U=\operatorname{Spec}A$ of step 1.1 cover $X$ and on each of them $\mathcal H om(\mathcal F,\mathcal G)|_U\cong\widetilde{\operatorname{Hom}_A(M,N)}$ is associated, so by the local form of the definition $\mathcal H om(\mathcal F,\mathcal G)$ is quasi-coherent, proving claim 1. On an overlap $U\cap U'$ of two such charts both isomorphisms are built from the restriction-of-morphisms identifications of the same sheaf $\mathcal H om(\mathcal F,\mathcal G)$, so they agree on the overlap: this is claim 3, and the canonical identifications restrict correctly on distinguished opens. [F1, step 4.1]

6.1 Choice accounting: no choice is used beyond the inherited Axiom of Choice of the affine equivalence [F2], which is used to identify Hom modules with Hom of associated sheaves; the localisation-of-Hom isomorphisms of [F3] are canonical, and all selections in step 1.1 involve finitely many charts around one point at a time. [F2, F3, step 4.1] ∎
