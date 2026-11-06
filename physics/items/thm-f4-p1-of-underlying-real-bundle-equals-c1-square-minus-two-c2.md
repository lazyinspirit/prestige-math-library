---
id: thm-f4-p1-of-underlying-real-bundle-equals-c1-square-minus-two-c2
kind: theorem
title: First Pontryagin class of an underlying real complex bundle
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
deps:
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - thm-integral-complex-projective-bundle-theorem
  - def-axiom-of-choice
  - def-pontryagin-classes-by-complexification
  - prop-complexification-is-conjugation-invariant
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
dependency_roles:
  thm-homotopic-maps-induce-equal-maps-in-singular-cohomology: mathematical-premise
  thm-integral-complex-projective-bundle-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-pontryagin-classes-by-complexification: mathematical-premise
  prop-complexification-is-conjugation-invariant: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
axiom_strength: Full AC, as in the characteristic-class suppliers.
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory, section 3.2"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "§3.2, printed pp. 88–95, especially the definition of p_i(E)=(-1)^i c_{2i}(E_C), printed p. 94. The local proof derives the complex-bundle identity from the imported conjugation and Whitney suppliers."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume the Axiom of Choice. Let $B$ be a nonempty path-connected paracompact Hausdorff compactly generated weak Hausdorff space of CW homotopy type, and let $E\to B$ be a numerable complex vector bundle of finite rank. These are the extended-base hypotheses in the integral complex projective bundle theorem used to define the characteristic classes here. Write $E_{\mathbb R}$ for its underlying real bundle. With the normalization $p_1(V)=-c_2(V\otimes_{\mathbb R}\mathbb C)$ for a real bundle $V$, one has
$$p_1(E_{\mathbb R})=c_1(E)^2-2c_2(E)\quad\text{in }H^4(B;\mathbb Z).$$

## Facts & Assumptions

**Given:** The stated bundle over $B$ and integral Chern and Pontryagin classes with the supplier conventions.

[F1] [[def-pontryagin-classes-by-complexification]] defines $p_i(V)=(-1)^i c_{2i}(V\otimes_{\mathbb R}\mathbb C)$ for a real bundle over a path-connected CW-type base; in particular $p_1(V)=-c_2(V\otimes_{\mathbb R}\mathbb C)$.

[F2] [[prop-complexification-is-conjugation-invariant]] gives $c_i(\overline E)=(-1)^ic_i(E)$ for numerable complex bundles under AC.

[F3] [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]] gives naturality and $c(E\oplus F)=c(E)c(F)$ for numerable complex bundles over a path-connected CW base.

[A1] Full AC is assumed as in [[def-axiom-of-choice]].

[F4] [[thm-integral-complex-projective-bundle-theorem]] extends the projective-bundle basis and unique monic relation to paracompact Hausdorff compactly generated weak Hausdorff spaces of CW homotopy type, the exact base class imposed in the Statement. Pullback of the projective bundle and its tautological line pulls this relation back; uniqueness makes the Chern coefficients natural for the CW-model map.

[F5] [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]] states that homotopic maps induce equal pullbacks on singular cohomology. Since the map $f$ in step 1.1 is a homotopy equivalence, its pullback $f^*$ is injective.

## Proof

**Proof technique:** Direct calculation from the defining characteristic classes.

1.1 If $E$ has rank zero, then $E_{\mathbb R}$ is the zero bundle and the zero-rank conventions in [F1] and [F3] make both sides vanish. Assume henceforth that $E$ has positive rank. Choose a homotopy equivalence $f:C\to B$ from a nonempty path-connected CW complex. Pull the numeration of $E$ back to $f^*E$. The projective-bundle relation and its tautological class pull back, so uniqueness in [F4] gives $c_i(f^*E)=f^*c_i(E)$; the same argument applies to complexification and its Chern classes. Also $f^*$ is injective by [F5]. Thus it suffices to prove the identity on $C$, where [F2] and [F3] apply. Work on $C$ for the characteristic-class calculation below. [A1, F1, F3, F4, F5, given]

2.1 The complexification $(E_{\mathbb R})_{\mathbb C}$ has the complex-linear endomorphism induced by the complex structure $J$ on $E_{\mathbb R}$. Its $+i$ and $-i$ eigensubbundles are respectively $E$ and its conjugate bundle $\overline E$: the projections $(1-iJ)/2$ and $(1+iJ)/2$ are continuous and commute with all complexified transition functions. Hence $(E_{\mathbb R})_{\mathbb C}\cong E\oplus\overline E$. [step 1.1, given, algebra]

3.1 Put $a=c_1(E)$ and $b=c_2(E)$. By [F2], $c_1(\overline E)=-a$ and $c_2(\overline E)=b$. By [F3] and step 2.1, the degree-four part of $c(E)c(\overline E)$ is $b+a(-a)+b=2b-a^2$, so $c_2((E_{\mathbb R})_{\mathbb C})=2c_2(E)-c_1(E)^2$. [F2, F3, step 2.1, algebra]

4.1 Apply [F1] to $E_{\mathbb R}$ and negate the equality in step 3.1. This gives $p_1(E_{\mathbb R})=c_1(E)^2-2c_2(E)$. Naturality and injectivity of $f^*$ from step 1.1 descend this equality to the original base $B$; the rank-zero case was discharged separately in step 1.1. [F1, F5, step 1.1, step 3.1, algebra] ∎

## Statement references

[[def-pontryagin-classes-by-complexification]]; [[prop-complexification-is-conjugation-invariant]]; [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]].
