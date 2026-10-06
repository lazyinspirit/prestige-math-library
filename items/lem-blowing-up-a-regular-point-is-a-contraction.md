---
id: lem-blowing-up-a-regular-point-is-a-contraction
kind: lemma
title: "Blowing up a regular point is a contraction"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [
          cor-blowup-birational-integral-scheme, def-axiom-of-choice, def-blowup-scheme-along-ideal,
                    def-exceptional-curve-and-contraction, def-integral-scheme, lem-blowup-isomorphism-off-center,
                    lem-exceptional-curve-normal-bundle-minus-one, thm-blowup-regular-surface-closed-point-regular,
                    thm-pullback-center-ideal-invertible]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Resolution of Surfaces, Lemma 54.3.1 (Blowing up a regular surface at a point)"
      url: "https://stacks.math.columbia.edu/tag/0AGQ"
    - title: "The Stacks Project, Resolution of Surfaces, Section 54.16 (Contracting exceptional curves)"
      url: "https://stacks.math.columbia.edu/tag/0C2I"
    - title: "The Stacks Project, Resolution of Surfaces, Chapter 54 (complete chapter PDF)"
      url: "https://stacks.math.columbia.edu/download/resolve.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $k$ be a field, let $S$ be an integral regular finite-type $k$-scheme of pure dimension two, let $p\in S$ be a closed point, let $\pi\colon S'=\operatorname{Bl}_pS\to S$ be the blowup of $S$ at $p$ and let $E=\pi^{-1}(p)$ be its exceptional curve. Then $S'$ is an integral regular finite-type $k$-scheme of pure dimension two, $E$ is an exceptional curve of the first kind on $S'$ ([[def-exceptional-curve-and-contraction]]), and $\pi$ is a contraction of $E$. Moreover $\pi$ restricts to an isomorphism $S'\setminus E\to S\setminus\{p\}$.

Conversely, if $b\colon X\to X'$ is a contraction of an exceptional curve of the first kind, then $b$ is, up to unique isomorphism over $X$, the blowing up of a closed point of $X'$ with regular two-dimensional local ring.

## Facts & Assumptions

**Given:** A field $k$, an integral regular finite-type $k$-scheme $S$ of pure dimension two, a closed point $p\in S$, the blowup $\pi\colon S'=\operatorname{Bl}_pS\to S$ and the fibre $E=\pi^{-1}(p)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-blowup-scheme-along-ideal.* Assume the Axiom of Choice as inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $X$ be a scheme and let $\mathcal I\subseteq\mathcal O_X$ be a quasi-coherent ideal sheaf of finite type (def-quasi-coherent-ideal-sheaf), with zero scheme $Z=V(\mathcal I)$, the closed subscheme of $X$ cut out by $\mathcal I$. ([[def-blowup-scheme-along-ideal]])

[F3] *def-exceptional-curve-and-contraction.* Assume the Axiom of Choice where it is inherited from the degree and intersection suppliers below ([[def-axiom-of-choice]]). Let $X$ be a Noetherian scheme. **(a) Exceptional curves of the first kind.** A closed subscheme $E\subseteq X$ (def-closed-immersion-schemes) is an *exceptional curve of the first kind* if: 1. ([[def-exceptional-curve-and-contraction]])

[F4] *def-integral-scheme.* An **integral scheme** is a nonempty scheme that is reduced and whose underlying topological space is irreducible. Equivalently, it is nonempty and every nonempty affine open is the spectrum of a domain. The latter criterion is independent of the chosen affine open cover. ([[def-integral-scheme]])

[F5] *thm-blowup-regular-surface-closed-point-regular.* Assume the Axiom of Choice. Let $S$ be a regular finite-type $k$-scheme of pure dimension two, let $p$ be a closed point, put $\kappa=\kappa(p)$ and $r=[\kappa:k]$, and let $\pi\colon S'=\operatorname{Bl}_p S\to S$ be the blowup of $S$ at $p$ with exceptional subscheme $E$. ([[thm-blowup-regular-surface-closed-point-regular]])

[F6] *cor-blowup-birational-integral-scheme.* Assume the Axiom of Choice, inherited from the blowup construction ([[def-axiom-of-choice]]). Let $X$ be an integral scheme ([[def-integral-scheme]]) and let $\mathcal I$ be a nonzero quasi-coherent ideal sheaf of finite type. ([[cor-blowup-birational-integral-scheme]])

[F7] *lem-exceptional-curve-normal-bundle-minus-one.* Assume the Axiom of Choice. Let $p$ be a closed point of a regular surface $S$ over a field $k$, assume $\dim\mathcal O_{S,p}=2$, and let $\pi\colon S'\to S$ be the blowup of $p$ and $E$ its exceptional curve. ([[lem-exceptional-curve-normal-bundle-minus-one]])

[F8] *thm-pullback-center-ideal-invertible.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on a scheme $X$ (def-quasi-coherent-ideal-sheaf), let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be its blowup and let $E=\pi^{-1}(Z)$ be the exceptional subscheme, with the convention that $\mathcal O(1)$  ([[thm-pullback-center-ideal-invertible]])

[F9] *lem-blowup-isomorphism-off-center.* Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type with zero scheme $Z$ and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup. ([[lem-blowup-isomorphism-off-center]])

## Proof

1.1 The blowup $S'$ is integral of pure dimension two and regular, by the regularity of the blowup of a regular surface at a closed point together with the birational integrality of blowups; the structural map $\pi$ is proper and is an isomorphism off the centre $p$. [F4, F5, F6, F9, given]

2.1 The fibre $E=\pi^{-1}(p)$ is an effective Cartier divisor: it is cut out by the pullback of the maximal ideal of $p$, which is invertible because the pullback of the centre ideal of a blowup is invertible, and it is isomorphic to $\mathbb P^1_{\kappa(p)}$ with normal bundle $\mathcal O(-1)$ by the computation for the blowup of a regular surface at a closed point. [F7, F8, given, step 1.1]

3.1 By steps 1.1 and 2.1 the curve $E$ is an exceptional curve of the first kind on $S'$, and $\pi$ is the blowup of $S$ at the closed point $p$ whose local ring is regular of dimension two; hence $\pi$ is a contraction of $E$ in the sense of the definition, and it restricts to an isomorphism $S'\setminus E\to S\setminus\{p\}$. [F2, F3, F9, step 1.1, step 2.1]

4.1 Conversely, if $b\colon X\to X'$ is a contraction of an exceptional curve of the first kind, then by definition $b$ is the blowup of $X'$ at a closed point $x'$ with regular two-dimensional local ring, with $E$ identified with the scheme-theoretic exceptional fibre; this is exactly the statement that $b$ is, up to unique isomorphism over $X$, the blowing up of a closed point of $X'$. [F2, F3, given, step 3.1]

5.1 The Axiom of Choice is inherited from the blowup suppliers; no further choice enters. [F1, step 3.1, step 4.1] ∎

## Remarks

- The two halves of the statement are the definition of contraction read in the two directions; the mathematical content is the regularity and normal-bundle computation for a point blowup.
- Purity of dimension two is preserved by the blowup, which is why the exceptional curve is a divisor rather than a higher-codimensional fibre.
