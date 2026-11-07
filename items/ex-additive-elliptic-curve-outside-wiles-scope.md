---
id: ex-additive-elliptic-curve-outside-wiles-scope
kind: example
title: An additive elliptic curve lies outside Wiles's semistable input class
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 40
deps:
  - def-weierstrass-model-and-discriminant-invariants
  - lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal
  - thm-wiles-semistable-elliptic-curves-over-q-are-modular
  - thm-bcdt-every-elliptic-curve-over-q-is-modular
  - cor-genus-degree-smooth-plane-curve
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: Axiom of Choice is used through the published smooth-plane-cubic genus formula to identify the verified smooth plane cubic as an elliptic curve; the arithmetic reduction checks are choice-free.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: J. S. Milne, Elliptic Curves, Chapter II §§2–3 and §6
      url: https://www.jmilne.org/math/Books/ectext6.pdf
    - title: Andrew Wiles, Modular Elliptic Curves and Fermat's Last Theorem, Theorem 0.4
      url: https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf
    - title: "Christophe Breuil, Brian Conrad, Fred Diamond, and Richard Taylor, On the Modularity of Elliptic Curves over Q: Wild 3-Adic Exercises, Theorem A"
      url: https://dash.harvard.edu/bitstreams/7312037c-55d6-6bd4-e053-0100007fdf3b/download
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice. Consider the pointed projective cubic $E_2:y^2=x^3+7$ over $\mathbb Q$, with its point at infinity. Its minimal reduction at $7$ is cuspidal (the tangent cone is a repeated line); here additive reduction means that the minimal singular cubic is cuspidal. It is therefore additive and nonsemistable, and it is outside Wiles's input class, which requires good or nodal reduction at every prime. Its verified smooth generic fibre has genus one by the smooth-plane-cubic formula, so $E_2$ is an elliptic curve in BCDT's all-curves input class. This compares the theorem hypotheses only and does not assert either theorem's modularity conclusion.

## Example references

[[def-weierstrass-model-and-discriminant-invariants]]

[[lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal]]

[[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]

[[thm-bcdt-every-elliptic-curve-over-q-is-modular]]

[[cor-genus-degree-smooth-plane-curve]]

[[def-axiom-of-choice]]

[J. S. Milne, *Elliptic Curves*, Chapter II §§2–3 and §6, printed pp. 50–59 and 69–70](https://www.jmilne.org/math/Books/ectext6.pdf)

[Andrew Wiles, *Modular Elliptic Curves and Fermat's Last Theorem*, Introduction Theorem 0.4, printed p. 448](https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf)

[Christophe Breuil, Brian Conrad, Fred Diamond, and Richard Taylor, *On the Modularity of Elliptic Curves over Q: Wild 3-Adic Exercises*, Introduction Theorem A](https://dash.harvard.edu/bitstreams/7312037c-55d6-6bd4-e053-0100007fdf3b/download)

## Facts & Assumptions

**Given:** $E_2:y^2=x^3+7$ over $\mathbb Q$ with the point at infinity.

[F1] [[def-weierstrass-model-and-discriminant-invariants]]: $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$, where $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, and $b_8=a_1^2a_6+4a_2a_6-a_1a_3a_4+a_2a_3^2-a_4^2$.

[F2] [[lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal]]: an integral model with $0\le v_\ell(\Delta)<12$ is minimal at $\ell$.

[F3] [[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]: the stated input requires good or nodal minimal reduction at every prime.

[F4] [[thm-bcdt-every-elliptic-curve-over-q-is-modular]]: its stated input class is all elliptic curves over $\mathbb Q$.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is assumed in the Statement.

[F5] [[cor-genus-degree-smooth-plane-curve]]: a smooth plane curve of degree three over a field has genus one under AC.

## Verification

1.1 For $(a_1,a_2,a_3,a_4,a_6)=(0,0,0,0,7)$, $(b_2,b_4,b_6,b_8)=(0,0,28,0)$ and $\Delta=-27\cdot28^2=-21168$. An affine singular point in characteristic zero would have $y=0$ and $x=0$ by the two partial derivatives, which does not satisfy $y^2=x^3+7$; the point at infinity is smooth. Thus the projective cubic is smooth; by [F5] and [A1] it has genus one, so the pointed cubic is an elliptic curve. [given, F1, F5, A1, algebra]

2.1 At $7$, $v_7(\Delta)=2<12$, so [F2] makes this equation minimal. The reduced equation is $y^2=x^3$; its singular point $(0,0)$ has tangent cone $y^2=0$, a repeated tangent line, so it is cuspidal. Its reduction at $7$ is therefore additive and the curve is not semistable. [F1, F2, step 1.1, algebra]

3.1 The point at infinity and the nonzero discriminant in step 1.1 show that $E_2$ is an elliptic curve over $\mathbb Q$. The cusp from step 2.1 excludes it from the input in [F3], and its field and curve type meet the input class in [F4]. This is a comparison of stated hypotheses only. [F3, F4, step 1.1, step 2.1, given, algebra] ∎
