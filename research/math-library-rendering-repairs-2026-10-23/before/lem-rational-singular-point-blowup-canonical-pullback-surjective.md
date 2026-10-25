---
id: lem-rational-singular-point-blowup-canonical-pullback-surjective
kind: lemma
title: "Canonical pullback is surjective after blowing up a rational singular point"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
deps: [
          cor-degree-additive-proper-curve, def-axiom-of-choice, def-dependent-choice,
                    lem-cm-projective-curve-canonical-positive-twist-vanishing-generation,
                    lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it,
                    lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology,
                    lem-regular-base-dualizing-traces-compose-on-rational-modifications,
                    lem-regular-base-surface-cartier-curve-canonical-adjunction, thm-nakayama-lemma,
                    thm-serre-vanishing]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Sections 54.8\u201354.9: complete source arguments with local prerequisite replacements"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
---

## Statement

Assume AC and DC. For a nonregular rational normal local surface domain in the permitted regular-base dualizing setting, let $f:X\to\operatorname{Spec}A$ be its ordinary point blowup, $E$ its exceptional divisor and $I=O_X(1)$. Then $H^1(X,\omega_X\otimes I^n)=0$ for $n\ge0$ and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. The assertion localizes to closed rational singular points on a projective normal modification of the same regular base.

## Facts & Assumptions

**Given:** A nonregular rational normal local surface domain $(A,\mathfrak m,\kappa)$ in the permitted regular-base dualizing setting, its ordinary point blowup $f\colon X\to\operatorname{Spec}A$, the exceptional divisor $E$ and the tautological ideal $I=\mathcal O_X(1)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology.* Assume AC and DC. For a rational permitted normal local surface domain $(A,\mathfrak m,\kappa)$, its ordinary point blowup $X$ is normal. Its exceptional fibre $E$ is a projective pure CM curve, its tautological conormal line $L=\mathcal O_E(1)$ is very ample, and $H^1(E,L^n)=0$, $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$. ([[lem-rational-normal-surface-point-blowup-normal-and-fibre-cohomology]])

[F4] *lem-cm-projective-curve-canonical-positive-twist-vanishing-generation.* Assume AC and DC. Let $E$ be a projective pure CM curve over a field $\kappa$, with $H^0(E,O_E)=\kappa$ and canonical module $\omega_E$. If $L$ is globally generated and nontrivial, $H^1(E,\omega_E\otimes L)=0$. If $L$ is very ample with $\deg_\kappa L\ge2$, then $\omega_E\otimes L$ is globally generated. These statements allow nonreduced $E$. ([[lem-cm-projective-curve-canonical-positive-twist-vanishing-generation]])

[F5] *lem-regular-base-surface-cartier-curve-canonical-adjunction.* Assume AC and DC. For a normal projective surface modification $X$ over a finite normal local domain $A$ of a regular two-dimensional local ring $R$, let $E$ be a Cartier closed fibre with residue field $\kappa$ and conormal $L=O_X(-E)|_E$. ([[lem-regular-base-surface-cartier-curve-canonical-adjunction]])

[F6] *cor-degree-additive-proper-curve.* Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field and let $C$ be a proper $k$-scheme (def-proper-morphism) whose underlying topological space has dimension at most one (def-dimension-noetherian-topological-space). For all invertible $\mathcal O_C$-modules $\mathcal L$ and $\mathcal M$ (def-invertible-sheaf): 1. ([[cor-degree-additive-proper-curve]])

[F7] *lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it.* Assume AC and DC. Let $R$ be regular local of dimension two and $A$ a finite normal local $R$-domain in the permitted class. For a projective normal modification $X$, put $M=H^1(X,\mathcal O_X)$. ([[lem-normal-surface-trace-cokernel-dualizes-h1-and-bounds-it]])

[F8] *lem-regular-base-dualizing-traces-compose-on-rational-modifications.* Assume AC and DC. Let $R$ be regular local of dimension two, $A$ finite normal local over $R$, and let $g:X'\to X$ be a morphism of projective normal modifications over $A$. Their regular-base dualizing complexes are independent of the chosen projective embeddings up to the unique isomorphism preserving their duality pairings. ([[lem-regular-base-dualizing-traces-compose-on-rational-modifications]])

[F9] *thm-nakayama-lemma.* Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$. ([[thm-nakayama-lemma]])

[F10] *thm-serre-vanishing.* Assume the Axiom of Choice as inherited from the cited suppliers ([[def-axiom-of-choice]]). Let $A$ be a Noetherian commutative ring with $1$, let $X$ be a scheme projective over $A$ in the finite-dimensional H-projective convention (def-projective-morphism-pre-proj): the structure morphism $X\to\operatorname{Spec}A$ factors as a closed immersion  ([[thm-serre-vanishing]])

## Proof

1.1 The blowup helper gives that $X$ is normal, that $E$ is a projective pure Cohen--Macaulay curve with $H^0(E,\mathcal O_E)=\kappa$, that $L=I|_E$ is very ample with $H^1(E,L^n)=0$ and $H^0(E,L^n)=\mathfrak m^n/\mathfrak m^{n+1}$ for $n\ge0$, and that $\deg_\kappa L=\dim_\kappa\mathfrak m/\mathfrak m^2-1$, which is at least two because $A$ is not regular. [F3, given]

2.1 The conormal of $E$ is $L$, so Cartier adjunction gives $\omega_E=\omega_X|_E\otimes L^{-1}$, that is $\omega_X|_E=\omega_E\otimes L$; since $I=\mathcal O_X(1)=\mathcal O_X(-E)$, the twist $\omega_X(n)=\omega_X\otimes I^n$ restricts to $\omega_X(n)|_E=\omega_X|_E\otimes L^n=\omega_E\otimes L^{n+1}$. [F5, step 1.1]

3.1 For every $n\ge0$ the twist $L^{n+1}$ is globally generated, and degree additivity gives $\deg_\kappa L^{n+1}=(n+1)\deg_\kappa L>0$, so $L^{n+1}$ is nontrivial; the CM-curve supplier therefore gives $H^1(E,\omega_E\otimes L^{n+1})=0$. [F4, F6, step 1.1, step 2.1]

4.1 Twisting the ideal sequence $0\to\mathcal O_X(-E)\to\mathcal O_X\to\mathcal O_E\to0$ by $\omega_X\otimes I^n$ uses $\mathcal O_X(-E)=I$ to produce $0\to\omega_X(n+1)\to\omega_X(n)\to\omega_X(n)|_E\to0$; its long exact sequence shows that $H^1(\omega_X(n))$ injects into $H^1(E,\omega_X(n)|_E)=0$ whenever $H^1(\omega_X(n+1))=0$, and Serre vanishing makes $H^1(\omega_X(n))=0$ for all large $n$, so downward induction gives $H^1(X,\omega_X\otimes I^n)=0$ for every $n\ge0$. [F10, step 2.1, step 3.1]

5.1 Rationality of $A$ makes the trace $f_*\omega_X\to\omega_A$ an isomorphism and produces the adjoint evaluation $f^*\omega_A\to\omega_X$; the case $n=0$ of the sequence in step 4.1 together with $H^1(\omega_X(1))=0$ shows that $H^0(\omega_X)\to H^0(E,\omega_X|_E)$ is surjective, while $\omega_X|_E=\omega_E\otimes L$ is globally generated, so the global evaluation $H^0(\omega_X)\otimes\mathcal O_X\to\omega_X$ restricts onto $\omega_X|_E$ and its cokernel restricts to zero on $E$. [F4, F7, step 2.1, step 4.1]

6.1 That cokernel is coherent and vanishes away from $E$, where $f$ is an isomorphism and the evaluation is the tautological identification of the localized canonical module; since it also restricts to zero on $E$, the cokernel itself is zero and the canonical evaluation $f^*\omega_A\to\omega_X$ is surjective. [F9, step 5.1]

7.1 At a closed rational singular point of a projective normal modification of the same regular base the identical argument applies to the localized ordinary point blowup, the rational trace identifications being compatible by the composition statement for regular-base traces; the Cartier-curve pairing and its one-dimensional residue normalization are unchanged, and the Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers. [F1, F2, F8, step 6.1] ∎

## Remarks

- Nonregularity is used only to make $\deg_\kappa L\ge2$, which makes every positive power of $L$ nontrivial.
- The surjectivity is proved by Nakayama along the exceptional curve plus the isomorphism away from it.
