---
id: lem-regular-base-dualizing-traces-compose-on-rational-modifications
kind: lemma
title: Dualizing traces compose and become isomorphisms on rational modifications
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 10
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-finite-closed-immersion-derived-coinduction-adjunction
- lem-local-normal-surface-modification-dimension-and-projective-cohomology
- lem-normal-projective-surface-dualizing-module-over-regular-local-base
- lem-projective-regular-local-base-coherent-duality-by-embedding
- lem-rational-surface-local-rings-propagate-by-point-sequence-spreading
- lem-surface-flat-base-change-coherent-cohomology-by-cech
- thm-proper-pushforward-coherent
- thm-serre-vanishing
- lem-surface-modification-isomorphism-in-codimension-one
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project, Resolution of Surfaces, Sections 54.8–54.9: complete source arguments with local
      prerequisite replacements'
    url: https://stacks.math.columbia.edu/download/resolve.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. There is a canonical trace $Rg_*D_{X'}\to D_X$, and traces compose. If every closed local ring of $X$ is rational, this trace is an isomorphism, giving $g_*\omega_{X'}=\omega_X$, $R^qg_*\omega_{X'}=0$ for $q>0$, and an adjoint evaluation $g^*\omega_X\to\omega_{X'}$. These evaluations compose along rational modifications.

## Facts & Assumptions

**Given:** A regular Noetherian local ring $R$ of dimension two, a finite normal local $R$-domain $A$ in the permitted class, projective normal modifications $X$ and $X'$ over $A$ with a morphism $g\colon X'\to X$ over $A$, and the regular-base dualizing complexes $D_X=\omega_X[2]$, $D_{X'}=\omega_{X'}[2]$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-projective-regular-local-base-coherent-duality-by-embedding.* Assume AC and DC. Let $R$ be regular Noetherian local of dimension $d$, let $X$ be projective over $R$, and fix $i:X\hookrightarrow P=\mathbb P^N_R$. Put $D_X=i^!(\mathcal O_P(-N-1)[N+d])$. Then $D_X$ is a dualizing complex on $X$, with coherent biduality. ([[lem-projective-regular-local-base-coherent-duality-by-embedding]])

[F4] *lem-normal-projective-surface-dualizing-module-over-regular-local-base.* Assume AC and DC. Let $R$ be a regular Noetherian local ring of dimension two, let $A$ be a finite normal local $R$-domain of dimension two, with $R\hookrightarrow A$ local, and let $X$ be a normal integral scheme of dimension two projective over $R$, with a proper birational map $f:X\to\operatorname{Spec}A$. Put $\omega_A=\operatorname{Hom}_R(A,R)$. ([[lem-normal-projective-surface-dualizing-module-over-regular-local-base]])

[F5] *lem-local-normal-surface-modification-dimension-and-projective-cohomology.* Assume AC and DC. Let $(A,\mathfrak m)$ be a normal Noetherian local domain of dimension two and $f:X\to\operatorname{Spec}A$ an integral modification. Then $X$ has dimension two, all closed points have local dimension two, $f$ is an isomorphism off the closed point, $f_*\mathcal O_X=\mathcal O_{\operatorname{Spec}A}$, and its special fibre has dimension at most one. ([[lem-local-normal-surface-modification-dimension-and-projective-cohomology]])

[F6] *lem-surface-modification-isomorphism-in-codimension-one.* Assume AC. Let $f:X\to S$ be a modification of integral Noetherian schemes and let $S$ be normal of dimension two. Then $f$ is an isomorphism over an open subset containing every point of codimension at most one in $S$. The complement is a finite set of closed points. If every fibre is zero-dimensional, $f$ is an isomorphism. ([[lem-surface-modification-isomorphism-in-codimension-one]])

[F7] *lem-surface-flat-base-change-coherent-cohomology-by-cech.* Assume AC and DC. For a quasi-compact separated scheme $X$ over a ring $A$, a quasi-coherent sheaf $F$ and a flat $A$-algebra $C$, the canonical maps $H^q(X,F)\otimes_AC\to H^q(X_C,F_C)$ are isomorphisms for every $q$. No flatness of $F$ over $A$ is required. ([[lem-surface-flat-base-change-coherent-cohomology-by-cech]])

[F8] *thm-proper-pushforward-coherent.* Assume the Axiom of Choice and the Axiom of Dependent Choice, inherited from the affine localization theorem, the Čech comparison and the dévissage lemma cited below ([[def-axiom-of-choice]], [[def-dependent-choice]]). ([[thm-proper-pushforward-coherent]])

[F9] *thm-serre-vanishing.* Assume the Axiom of Choice as inherited from the cited suppliers ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring with $1$, let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ factors as a closed immersion  ([[thm-serre-vanishing]])

## Proof

1.1 Evaluation duality on a projective model gives, for every bounded coherent $K$ on $X$ and every $j$, an isomorphism $\operatorname{Hom}_X(K,D_X[j])\cong\operatorname{Hom}_R(R\Gamma(X,K),R[2+j])$ natural in $K$; since the right side is determined by the pair $(R\Gamma(X,\cdot),R)$ alone, the dualizing objects from any two projective embeddings of this fixed $X$ represent the same duality functor on $D^b_{\mathrm{Coh}}(X)$ and Yoneda's lemma gives a unique identification preserving the pairings. [F3, F4, given]

2.1 Taking $K=Rg_*D_{X'}$, the same evaluation on $X$ gives $\operatorname{Hom}_X(Rg_*D_{X'},D_X)\cong\operatorname{Hom}_R(R\Gamma(X',D_{X'}),R[2])$, while evaluation on $X'$ with $K=D_{X'}$ identifies the right side with $\operatorname{Hom}_{X'}(D_{X'},D_{X'})$; the image of the identity under this composite is by definition the canonical trace $\operatorname{tr}\colon Rg_*D_{X'}\to D_X$. [F3, step 1.1]

3.1 For a composable second morphism $h\colon X''\to X'$ the identities of $D_{X''}$, $D_{X'}$ and $D_{X}$ correspond under the same evaluations to $\operatorname{tr}_{gh}$, $\operatorname{tr}_h$ and $\operatorname{tr}_g$, and $R(gh)_*=Rg_*Rh_*$ identifies the two routes; both composites therefore represent the same element of $\operatorname{Hom}_R(R\Gamma(X'',D_{X''}),R[2])$, so traces compose. [F8, step 2.1]

4.1 Assume now every closed local ring of $X$ is rational. At a point of codimension at most one, $g$ is an isomorphism, so $(R^qg_*\mathcal O_{X'})_x=0$ for $q>0$; at a closed point $x$, the localized modification of the rational local ring $\mathcal O_{X,x}$ has vanishing $H^1$, while projective normal modifications of a two-dimensional base have no cohomology above degree one, so again $R^qg_*\mathcal O_{X'}$ vanishes at $x$ for $q>0$; hence $Rg_*\mathcal O_{X'}=\mathcal O_X$ because $g$ is birational and both surfaces are normal. [F5, F6, step 2.1, step 3.1]

5.1 For a locally free $F=\mathcal O_X(m)$ the pullback/direct-image adjunction and $Rg_*\mathcal O_{X'}=\mathcal O_X$ compute $R\Gamma(X',g^*F)=R\Gamma(X,F)$, so the trace induces isomorphisms $\operatorname{Hom}_X(F,Rg_*D_{X'}[j])\to\operatorname{Hom}_X(F,D_X[j])$ for all $j$, by the same evaluation identities; applying the long exact sequence of the cone to negative twists and using Serre vanishing to detect a nonzero highest cohomology sheaf forces that cone to be zero. [F3, F4, F7, F8, F9, step 4.1]

6.1 Thus the trace is an isomorphism $Rg_*\omega_{X'}[2]\cong\omega_X[2]$: extracting cohomology sheaves gives $g_*\omega_{X'}=\omega_X$ and $R^qg_*\omega_{X'}=0$ for $q>0$, and dualizing the inverse trace through the two evaluation pairings produces the adjoint evaluation $g^*\omega_X\to\omega_{X'}$. [F3, F4, step 5.1]

7.1 When $g$ and $h$ are both morphisms between surfaces with rational closed local rings, the evaluations of step 6.1 compose because the traces of step 3.1 do, giving $(gh)^*\omega_X\to\omega_{X''}$ as the composite $(h^*)(g^*)$; the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited duality and modification suppliers. [F1, F2, step 3.1, step 6.1] ∎

## Remarks

- All identifications are fixed by the regular base $R$ and the evaluation pairings, not merely by abstract quasi-isomorphism classes.
- The rationality hypothesis enters only through the vanishing of $R^1g_*\mathcal O_{X'}$ at closed points.
