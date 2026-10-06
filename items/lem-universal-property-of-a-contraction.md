---
id: lem-universal-property-of-a-contraction
kind: lemma
title: "Universal property and uniqueness of a contraction"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          cor-blowup-unique-up-to-unique-isomorphism, def-axiom-of-choice,
                    def-exceptional-curve-and-contraction, def-proper-morphism, lem-blowup-isomorphism-off-center,
                    lem-blowup-point-pushforward-vanishing, thm-blowup-projective, thm-proper-morphism-closed-image]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.16 (Contracting exceptional curves)"
      url: "https://stacks.math.columbia.edu/tag/0C2I"
    - title: "The Stacks Project, Resolution of Surfaces, Lemma 54.3.1 (Blowing up a regular surface at a point)"
      url: "https://stacks.math.columbia.edu/tag/0AGQ"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, inherited from the blowup suppliers. Let $X$ be a Noetherian scheme,
$E\subseteq X$ an exceptional curve of the first kind and $b\colon X\to X'$ a contraction of $E$
([[def-exceptional-curve-and-contraction]]). Write $x'=b(E)\in X'$. Then:

1. $b$ is proper, surjective and closed; $b\colon X\to X'$ is a topological quotient map identifying $X'$ with the quotient of $X$ obtained by collapsing $E$ to $x'$; the canonical map $\mathcal O_{X'}\to b_*\mathcal O_X$ is an isomorphism and $R^1b_*\mathcal O_X=0$.
2. (Universal property) For every morphism $\varphi\colon X\to Y$ of schemes with $\varphi(E)$ a single point there is a unique morphism $\varphi'\colon X'\to Y$ with $\varphi=\varphi'\circ b$.
3. (Uniqueness) If $b_i\colon X\to X_i'$, $i=1,2$, are contractions of $E$, there is a unique isomorphism $X_1'\to X_2'$ compatible with $b_1$ and $b_2$.

Consequently a contraction of $E$, when it exists, is unique and is characterized by the universal property.

## Facts & Assumptions

**Given:** A Noetherian scheme $X$, an exceptional curve of the first kind $E\subseteq X$, a contraction $b\colon X\to X'$ of $E$, and a morphism $\varphi\colon X\to Y$ collapsing $E$ to a point.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-exceptional-curve-and-contraction.* Assume the Axiom of Choice where it is inherited from the degree and intersection suppliers below ([[def-axiom-of-choice]]). Let $X$ be a Noetherian scheme. **(a) Exceptional curves of the first kind.** A closed subscheme $E\subseteq X$ (def-closed-immersion-schemes) is an *exceptional curve of the first kind* if: 1. ([[def-exceptional-curve-and-contraction]])

[F3] *def-proper-morphism.* A morphism of schemes $f:X\to S$ is **proper** if and only if it is separated, of finite type, and universally closed. Here separatedness has the meaning of def-separated-morphism-schemes, finite type has the meaning of def-locally-finite-type-and-finite-type-morphism, and universally closed has the meaning of def-universally-closed-morphism. ([[def-proper-morphism]])

[F4] *thm-blowup-projective.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ (def-quasi-coherent-ideal-sheaf) and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of def-blowup-scheme-along-ideal. Then: 1. ([[thm-blowup-projective]])

[F5] *lem-blowup-isomorphism-off-center.* Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type with zero scheme $Z$ and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. ([[lem-blowup-isomorphism-off-center]])

[F6] *lem-blowup-point-pushforward-vanishing.* Assume the Axiom of Choice. Let $S$ be a regular surface over a field $k$ (more generally a locally Noetherian scheme of dimension two whose local rings at the center are regular of dimension two) and let $p$ be a closed point with residue field $\kappa(p)$. Let $\pi\colon S'\to S$ be the blowup of $p$ with exceptional curve $E$. ([[lem-blowup-point-pushforward-vanishing]])

[F7] *thm-proper-morphism-closed-image.* Let $f:X\to S$ be a proper morphism of schemes. Then $f$ is a closed map of topological spaces: for every closed subset $Z\subseteq|X|$ its image $f(Z)$ is closed in $|S|$. In particular $f(X)$ is closed. ([[thm-proper-morphism-closed-image]])

[F8] *cor-blowup-unique-up-to-unique-isomorphism.* Assume the Axiom of Choice. Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type with zero scheme $Z$. If $\pi'\colon Y\to X$ is an $X$-scheme such that $(\pi')^{-1}(Z)$ is an effective Cartier divisor and $Y$ carries the universal property of $\operatorname{Bl}_{\mathcal I}X$ (every $X$-scheme in which the inverse image of $Z$ is an effective Cartier divisor maps un ([[cor-blowup-unique-up-to-unique-isomorphism]])

## Proof

1.1 By definition $b$ is the blowup of $X'$ at the closed point $x'=b(E)$ with regular two-dimensional local ring, so $b$ is proper and an isomorphism off the centre; its image contains that complement and the nonempty exceptional fibre over $x'$, so $b$ is surjective. Properness makes it closed. [F2, F3, F4, F5, F7, given]

2.1 A continuous closed surjection is a quotient map, so $b$ identifies $X'$ with the quotient of $X$ obtained by collapsing $E$ to $x'$ set-theoretically and topologically; moreover for a point blowup the natural map $\mathcal O_{X'}\to b_*\mathcal O_X$ is an isomorphism and $R^1b_*\mathcal O_X=0$. [F6, F7, step 1.1]

3.1 Since $\varphi$ collapses $E$ to a point and $b$ is injective off $E$, the map $\varphi$ is constant on the fibres of $b$; by the quotient property of step 2.1 it factors uniquely as a continuous map $\varphi'\colon X'\to Y$ with $\varphi=\varphi'\circ b$. [F3, F7, step 2.1]

4.1 For the morphism structure, the map of sheaves $\varphi^{\sharp}\colon\varphi^{-1}\mathcal O_Y\to\mathcal O_X$ is adjoint to a map $(\varphi')^{-1}\mathcal O_Y\to b_*\mathcal O_X$ along the quotient, and $b_*\mathcal O_X=\mathcal O_{X'}$ by step 2.1, so it gives a map of sheaves of rings $(\varphi')^{-1}\mathcal O_Y\to\mathcal O_{X'}$; locality is checked at $x'$: a germ vanishing at $\varphi(E)=\varphi'(x')$ pulls back under $\varphi$ to a function vanishing on $E$, hence its image in $(b_*\mathcal O_X)_{x'}=\mathcal O_{X',x'}$ lies in the maximal ideal. Thus $\varphi'$ is a morphism of schemes with $\varphi=\varphi'\circ b$, unique because $b$ is a quotient map. [F5, F6, step 2.1, step 3.1]

5.1 For uniqueness of the contraction, apply the universal property to the two contractions $b_1,b_2$ of $E$: each $b_i$ collapses $E$, so $b_2$ factors uniquely through $b_1$ and vice versa, and the two factorizations are mutually inverse isomorphisms $X_1'\to X_2'$ compatible with the maps from $X$. [F2, F8, step 4.1]

6.1 The Axiom of Choice is inherited from the blowup suppliers; the only uniqueness statement used is the universal property of the blowup up to unique isomorphism. [F1, F8, step 5.1] ∎

## Remarks

- The key sheaf input is $b_*\mathcal O_X=\mathcal O_{X'}$ for a point blowup, which makes the adjunction computation of step 2.2 an honest map of structure sheaves.
- Uniqueness of the contraction follows formally from the universal property and does not use any classification of exceptional curves.
