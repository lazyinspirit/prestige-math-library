---
id: lem-rank-one-torsion-free-surface-module-principalized-by-an-ideal-blowup
kind: lemma
title: "A rank-one surface module is principalized by an ideal blowup"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps: [
          def-axiom-of-choice, def-blowup-scheme-along-ideal, def-dependent-choice, thm-blowup-projective,
                    thm-pullback-center-ideal-invertible]
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC and DC. For a finite torsion-free rank-one module $M$ over a Noetherian domain $A$, there is a nonzero ideal $J$ and a blowup $b:Y=\operatorname{Bl}_J\operatorname{Spec}A\to\operatorname{Spec}A$ such that $b^*M$ modulo torsion is invertible; the same holds on every integral model dominating $Y$.

## Facts & Assumptions

**Given:** A finite torsion-free rank-one module $M$ over a Noetherian domain $A$, with an identification $M\otimes_A\operatorname{Frac}(A)=\operatorname{Frac}(A)$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-blowup-scheme-along-ideal.* Assume the Axiom of Choice as inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $X$ be a scheme and let $\mathcal I\subseteq\mathcal O_X$ be a quasi-coherent ideal sheaf of finite type (def-quasi-coherent-ideal-sheaf), with zero scheme $Z=V(\mathcal I)$, the closed subscheme of $X$ cut out by $\mathcal I$. ([[def-blowup-scheme-along-ideal]])

[F4] *thm-blowup-projective.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $X$ be a scheme, let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on $X$ (def-quasi-coherent-ideal-sheaf) and let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be the blowup of [[def-blowup-scheme-along-ideal]]. Then: 1. ([[thm-blowup-projective]])

[F5] *thm-pullback-center-ideal-invertible.* Assume the Axiom of Choice, inherited from the relative Proj construction ([[def-axiom-of-choice]]). Let $\mathcal I$ be a quasi-coherent ideal sheaf of finite type on a scheme $X$ (def-quasi-coherent-ideal-sheaf), let $\pi\colon\operatorname{Bl}_{\mathcal I}X\to X$ be its blowup and let $E=\pi^{-1}(Z)$ be the exceptional subscheme, with the convention that $\mathcal O(1)$  ([[thm-pullback-center-ideal-invertible]])

## Proof

1.1 Torsion-freeness makes the natural map $M\to M\otimes_A\operatorname{Frac}(A)=\operatorname{Frac}(A)$ injective, so $M$ is identified with a nonzero $A$-submodule of the fraction field; choose a finite generating family $m_1,\dots,m_n$ of $M$ over $A$. [F1, given]

2.1 Write $m_i=e_i/d_i$ with $e_i\in A$ and $0\ne d_i\in A$, put $D=d_1\cdots d_n\ne0$, and let $J:=D\cdot M\subseteq A$. Then $J$ is a nonzero ideal of $A$ and multiplication by $D$ is an isomorphism of $A$-modules $M\to J$ with inverse division by $D$, which is well defined because $D\cdot M=J$ and $M$ is torsion-free. [given, step 1.1]

3.1 Let $b\colon Y=\operatorname{Bl}_J\operatorname{Spec}A\to\operatorname{Spec}A$ be the blowup of $A$ along $J$; the scheme $Y$ is integral because $A$ is a domain and $J\ne0$, the morphism $b$ is projective, and the pullback ideal $J\mathcal O_Y$ is invertible on $Y$. [F3, F4, F5, step 2.1]

4.1 The inclusion $J\hookrightarrow A$ of step 2.1 pulls back to a map $b^*J\to\mathcal O_Y$ of $\mathcal O_Y$-modules whose image is the invertible ideal $J\mathcal O_Y$; the map is an isomorphism at the generic point, so its kernel $T$ has zero generic stalk, that is, $T$ is a torsion $\mathcal O_Y$-module. Since $b^*M\cong b^*J$, the module $b^*M/T$ is isomorphic to the invertible sheaf $J\mathcal O_Y$, so $b^*M$ modulo torsion is invertible. [F5, step 3.1]

5.1 On an integral affine chart $\operatorname{Spec}B\subseteq Y$ with fraction field $L$, an element of the kernel of $b^*M\to J\mathcal O_Y$ is an element of the finite $B$-module $M\otimes_AB$ killed after multiplying by some element clearing its zero generic germ, so it is annihilated by a nonzero element of $B$; conversely an element annihilated by a nonzero scalar maps to zero in the torsion-free invertible module $J\mathcal O_Y$. Hence the kernel is exactly the torsion submodule of $b^*M$ and the quotient by it is invertible. [F3, step 3.1, step 4.1]

6.1 If $g\colon Z\to Y$ is an integral model dominating $Y$, then $g^*J\mathcal O_Y=J\mathcal O_Z$ is invertible as the pullback of an invertible sheaf, the pullback of the identification $b^*M/T\cong J\mathcal O_Y$ presents $g^*b^*M$ modulo torsion as the invertible sheaf $J\mathcal O_Z$, and the same argument on integral affine charts applies verbatim. [F3, F5, step 5.1]

7.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the blowup and resolution suppliers; no general flattening or Fitting theorem is used. [F1, F2, step 3.1, step 6.1] ∎

## Remarks

- The ideal $J$ produced here is a fractional-ideal representative of the rank-one module; the normalisation by the denominator $D$ is unique only up to a nonzero scalar, which does not affect the blowup.
- The statement is intrinsic: the torsion of the pullback vanishes exactly when the pullback is already invertible, and the quotient by torsion is the maximal torsion-free quotient.
