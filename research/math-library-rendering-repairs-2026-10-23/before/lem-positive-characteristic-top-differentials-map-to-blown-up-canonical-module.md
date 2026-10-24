---
id: lem-positive-characteristic-top-differentials-map-to-blown-up-canonical-module
kind: lemma
title: "Top differential lattices map into point-blowup canonical modules"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 12
deps: [
          def-axiom-of-choice, def-dependent-choice, def-kahler-differentials-algebra,
                    def-sheaf-relative-differentials, lem-regular-surface-point-blowup-canonical-transform,
                    lem-regular-surface-reflexive-modules-and-codimension-one-lattices,
                    thm-conormal-exact-sequence-algebra]
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

Assume AC and DC. Let $A$ be a regular local surface of characteristic $p$, and let $A_0\subset A$ have coherent differential module $\Omega_{A/A_0}$ free of finite rank $r$. Choose $\omega_A=\wedge^r\Omega_{A/A_0}$. Every finite sequence of regular point blowups $X\to\operatorname{Spec}A$ has a generic-compatible map $(\wedge^r\Omega_{X/A_0})^{**}\to\omega_X$.

## Facts & Assumptions

**Given:** A regular local surface $A$ of characteristic $p$, a subring $A_0\subseteq A$ with $\Omega_{A/A_0}$ coherent and free of finite rank $r$, the chosen top form $\omega_A=\wedge^r\Omega_{A/A_0}$, and a finite sequence of regular point blowups $X\to\operatorname{Spec}A$.

[F1] *def-axiom-of-choice.* The **Axiom of Choice** (AC) is the following statement. > Every family of nonempty sets has a choice function > (def-choice-function). Written out: for every set $\mathcal{F}$ all of whose members are nonempty, there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for all $S \in \mathcal{F}$. ([[def-axiom-of-choice]])

[F2] *def-dependent-choice.* Let $X$ be a set and let $R \subseteq X \times X$ be a binary relation on $X$. Call $R$ **entire on $X$** when $\text{for every } x \in X \text{ there is } y \in X \text{ with } x \mathbin{R} y .$ The **Axiom of Dependent Choice**, written $\mathrm{DC}$, is the following statement. ([[def-dependent-choice]])

[F3] *def-kahler-differentials-algebra.* Let $A\xrightarrow{\varphi}B$ be a homomorphism of commutative rings and let $\operatorname{Der}_A(B,-)$ be the derivation functor of def-derivation-algebra. ([[def-kahler-differentials-algebra]])

[F4] *def-sheaf-relative-differentials.* Let $f\colon X\to S$ be a morphism of schemes (def-morphism-of-schemes), so that $f$ is in particular a morphism of ringed spaces and comes with a map of sheaves of rings $f^{\sharp}\colon f^{-1}\mathcal O_S\to\mathcal O_X$ (def-inverse-image-presheaf-and-sheaf); the pair $(X,f)$ is an $S$-scheme (def-scheme-over-base). ([[def-sheaf-relative-differentials]])

[F5] *thm-conormal-exact-sequence-algebra.* Let $A\to P$ be a homomorphism of commutative rings, let $I\subseteq P$ be an ideal and let $B=P/I$, with quotient map $\pi\colon P\to B$. ([[thm-conormal-exact-sequence-algebra]])

[F6] *lem-regular-surface-reflexive-modules-and-codimension-one-lattices.* Assume AC and DC. On a regular Noetherian surface a coherent reflexive module is locally free. For a finite module $M$ over a normal Noetherian domain, a generic vector belonging to $M^{**}$ at every height-one localization belongs to $M^{**}$. For a coherent generic-rank-$r$ module on a regular surface, $(\wedge^rM)^{**}$ is the determinant line of $M^{**}$. ([[lem-regular-surface-reflexive-modules-and-codimension-one-lattices]])

[F7] *lem-regular-surface-point-blowup-canonical-transform.* Assume AC and DC. For the point blowup $b:X'\to X$ of a regular Noetherian surface in the fixed regular-base dualizing setting, with exceptional divisor $E$, there is a canonical generic-compatible identification $\omega_{X'}=b^*\omega_X\otimes O_{X'}(E)$. ([[lem-regular-surface-point-blowup-canonical-transform]])

## Proof

1.1 Induct on the number of blowups. For $X=\operatorname{Spec}A$ put $F=\Omega_{X/A_0}$ modulo torsion and $V=F^{**}$; the reflexive-module supplier makes $V$ a vector bundle of rank $r$ on the regular surface, and $D_X=(\wedge^r\Omega_{X/A_0})^{**}=\det V$ is its determinant line, so the base case of the required map is the chosen equality $\omega_A=D_A$. [F6, given]

2.1 Let $b\colon X'\to X$ be one more point blowup. On a standard chart $T[t]/(ut-v)$ of the blowup, the conormal presentation of the relative differentials presents $\Omega_{X'/X}$ with generator $\mathrm dt$ and relation $u\,\mathrm dt=0$ (and $v\,\mathrm dt=t\,u\,\mathrm dt$); hence $\Omega_{X'/X}$ is the exceptional differential line, equal to $\mathcal O_E\,\mathrm dt$ locally, and its stalk at the generic point $\eta$ of $E$ has length one over the exceptional discrete valuation ring. [F3, F4, F5, given, step 1.1]

3.1 At $\eta$ the torsion-free quotient $F'=\Omega_{X'/A_0}/\!\operatorname{torsion}$ is free of rank $r$, and the image $J$ of $b^*F$ in $F'$ has full rank with quotient of length at most one, because that quotient is a quotient of $\Omega_{X'/X}$ of length one; under the generic identification $J$ is also the image lattice of $b^*F$ inside the free lattice $b^*V$, with index $d=\operatorname{length}(b^*V/J)\ge0$. [F4, step 2.1]

4.1 Taking determinants of the lattices $J\subseteq F'$ and $J\subseteq b^*V$ over the valuation ring at $\eta$ gives $\det F'=\det(b^*V)$ multiplied by a scalar of valuation $d-\operatorname{length}(F'/J)\ge-1$; hence the top differential line $D_{X'}=\det F'$ is contained in $b^*D_X(E)$ along $E$ and equals $b^*D_X$ away from $E$, where $b$ is an isomorphism. [F6, step 3.1]

5.1 The codimension-one reflexive-extension criterion promotes this generic containment to a global generic-compatible inclusion $D_{X'}\to b^*D_X(E)$; composing it with the inductively constructed map $b^*D_X(E)\to b^*\omega_X(E)$ and the point-blowup canonical transform $b^*\omega_X(E)=\omega_{X'}$ yields the required generic-compatible map $D_{X'}\to\omega_{X'}$, completing the induction. [F7, step 4.1]

6.1 The Axiom of Choice and the Axiom of Dependent Choice are inherited from the cited suppliers; the lattice bound accommodates torsion in $\Omega_X$ and does not assume a terse either/or determinant formula. [F1, F2, step 5.1] ∎

## Remarks

- The only place where the characteristic enters is that the top-differential line and its determinant are computed by the lattice $\Omega_{X/A_0}$, not by a field trace.
- The bound $d-\operatorname{length}(F'/J)\ge-1$ is exactly the statement that one blowup can lose at most one differential lattice step.
