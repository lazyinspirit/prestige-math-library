---
id: cex-the-top-square-formula-does-not-define-all-lower-squares
kind: counterexample
title: Top squares do not determine lower squares
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [prop-steenrod-square-normalization-instability-and-top-square, ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space, lem-mod-two-cohomology-ring-of-infinite-real-projective-space, lem-real-projective-space-cellular-homology-and-pinch-map, lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients, thm-cellular-homology-computes-singular-homology, cor-homology-of-spheres, cor-cohomology-over-a-field-is-dual-to-homology-over-that-field, def-axiom-of-choice]
proof_strategy: counterexample
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
  truth_risk: "The suspended projective generator must remain nonzero, its suspended Sq^1 must remain nonzero, and both degree-four cup squares must actually vanish; suspension notation must use the same reduced convention as stability."
  counterexample_search: "Checked the cone-pair suspension isomorphism in the Steenrod stability supplier, the nonzero RP^2 Bockstein calculation, the truncated RP^2 ring, and the homology/cohomology groups of S^2."
sources:
  references:
    - title: May, A Concise Course in Algebraic Topology
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: Chapter 22, Section 5, printed pages 184--186
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
---

## Statement refuted

The identity $Sq^{|z|}(z)=z^2$ does not determine the lower Steenrod
squares, even when the degree and the value of the top square are fixed.

More explicitly, assume AC, base $\mathbb {RP}^2$ at its zero-cell, and let
$a$ be its nonzero class in $H^1(\mathbb {RP}^2;\mathbb F_2)$. If

$$x=\sigma a\in\widetilde H^2(\Sigma\mathbb {RP}^2;\mathbb F_2)$$

under the standard reduced cohomology-suspension isomorphism, and if
$y$ is the nonzero class in $H^2(S^2;\mathbb F_2)$, then

$$x^2=0=y^2,\qquad Sq^1(x)\ne0,\qquad Sq^1(y)=0.$$

## Facts & Assumptions

**Given:** The based projective plane, its class $a$, and the classes $x,y$ specified above.

[F1] [[ex-bockstein-detects-the-integral-two-torsion-of-real-projective-space]] states that, under AC, $Sq^1(a)=a^2$ and that this class is nonzero.

[F2] Under AC, [[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]] gives the infinite polynomial generator and says restriction to $\mathbb {RP}^2$ is an isomorphism through degree two.  The one-cell-per-degree construction and the integral incidence coefficients zero or two come from [[lem-real-projective-space-cellular-homology-and-pinch-map]].  By [[lem-axiomatic-cellular-boundaries-are-integral-incidence-matrices-with-coefficients]], these coefficients act on $\mathbb F_2$, so they all vanish; then [[thm-cellular-homology-computes-singular-homology]] and field duality [F5] give $H^q(\mathbb {RP}^2;\mathbb F_2)=0$ for $q>2$.  In particular $a^2$ is nonzero and $a^3=0$.

[F3] [[prop-steenrod-square-normalization-instability-and-top-square]] gives $Sq^2(z)=z^2$ for every degree-two class, makes $Sq^1$ commute with the standard reduced cohomology suspension.

[F4] [[cor-homology-of-spheres]] computes $H_k(S^2;\mathbb F_2)$ as $\mathbb F_2$ for $k=0,2$ and zero otherwise.

[F5] [[cor-cohomology-over-a-field-is-dual-to-homology-over-that-field]] turns [F4] into the corresponding mod-two cohomology calculation, under AC.

[A1] [[def-axiom-of-choice]] is used exactly through [F1], the infinite-ring and field-duality clauses in [F2], and [F5]. The cone-pair suspension and the Steenrod calculation in [F3] add no use of choice.

## Counterexample

1.1 By definition, the standard reduced cohomology suspension $\sigma:\widetilde H^q(Z;\mathbb F_2)\to \widetilde H^{q+1}(\Sigma Z;\mathbb F_2)$ is an isomorphism; [F3] fixes this same standard suspension in its stability formula. In particular $x=\sigma a$ is nonzero. [F3]

2.1 The first square distinguishes the two classes. Stability and [F1] give [F1, F2, F3, F4, F5, step 1.1]

$$Sq^1(x)=Sq^1(\sigma a)=\sigma Sq^1(a)=\sigma(a^2).$$

The class $a^2$ is nonzero by [F1] (and explicitly by the ring [F2]); the degree-two instance of the isomorphism in step 1.1 therefore makes $Sq^1(x)$ nonzero. On the other hand [F4]--[F5] give $H^3(S^2;\mathbb F_2)=0$, so $Sq^1(y)=0$.

2.2 Both top squares vanish. The degree-three projective group is zero by [F2], so the degree-three instance of the suspension isomorphism gives $\widetilde H^4(\Sigma\mathbb {RP}^2;\mathbb F_2)=0$. Thus [F3] gives [F2, F3, F4, F5, step 1.1]

$$x^2=Sq^2(x)=0.$$

Likewise [F4]--[F5] give $H^4(S^2;\mathbb F_2)=0$, whence $y^2=Sq^2(y)=0$.

3.1 These computations refute determination by the top-square formula. The two nonzero degree-two classes have the same top-square value, namely zero, but different $Sq^1$ values. Therefore knowing only $Sq^{|z|}(z)=z^2$ cannot recover all lower squares. [F3, step 2.1, step 2.2]

4.1 The boundary and choice cases do not hide an exception. Both spaces and both displayed input classes are nonempty and nonzero; the unit and zero classes are not the witnesses. The degree endpoint is exactly $|x|=|y|=2$, so $Sq^1$ is genuinely lower and $Sq^2$ is genuinely top. The vanishing statements come from zero target groups, not from omitting degenerate singular simplices. AC is inherited exactly from the projective and field-duality computations [F1], [F2], and [F5]; suspension and all remaining calculations are choice-free. This is an explicit pair of witnesses, not either direction of a biconditional. [F1, F2, F3, F4, F5, A1, step 1.1, step 2.1, step 2.2, step 3.1] ∎