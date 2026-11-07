---
id: ex-wiles-semistable-elliptic-curve-37a
kind: example
title: The curve 37a1 satisfies the semistability hypothesis
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 39
deps:
  - def-weierstrass-model-and-discriminant-invariants
  - lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal
  - thm-wiles-semistable-elliptic-curves-over-q-are-modular
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
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice. Consider the pointed projective cubic $E_1:y^2+y=x^3-x$ over $\mathbb Q$, with its point at infinity. Its displayed integral equation is minimal at every prime; its reduction is smooth away from $37$ and has a node at $37$, meaning an ordinary double point whose tangent cone splits into two distinct lines over an algebraic closure. Its smooth generic fibre has genus one by the smooth-plane-cubic formula, hence is an elliptic curve; it is semistable, meaning its minimal Weierstrass reduction is smooth or nodal at every prime, so it satisfies Wiles's semistability hypothesis.

## Example references

[[def-weierstrass-model-and-discriminant-invariants]]

[[lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal]]

[[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]

[[cor-genus-degree-smooth-plane-curve]]

[[def-axiom-of-choice]]

[J. S. Milne, *Elliptic Curves*, Chapter II §§2–3 and §6, printed pp. 50–59 and 69–70](https://www.jmilne.org/math/Books/ectext6.pdf)

[Andrew Wiles, *Modular Elliptic Curves and Fermat's Last Theorem*, Introduction Theorem 0.4, printed p. 448](https://sites.math.rutgers.edu/~zeilberg/EM22/AW1995.pdf)

## Facts & Assumptions

**Given:** $E_1:y^2+y=x^3-x$ over $\mathbb Q$ with the point at infinity.

[F1] [[def-weierstrass-model-and-discriminant-invariants]]: for coefficients $a_1,a_2,a_3,a_4,a_6$, $b_2=a_1^2+4a_2$, $b_4=a_1a_3+2a_4$, $b_6=a_3^2+4a_6$, $b_8=a_1^2a_6+4a_2a_6-a_1a_3a_4+a_2a_3^2-a_4^2$, $c_4=b_2^2-24b_4$, and $\Delta=-b_2^2b_8-8b_4^3-27b_6^2+9b_2b_4b_6$.

[F2] [[lem-integral-weierstrass-model-with-discriminant-valuation-under-12-is-minimal]]: an integral model with $0\le v_\ell(\Delta)<12$ is minimal at $\ell$.

[F3] [[thm-wiles-semistable-elliptic-curves-over-q-are-modular]]: its input hypothesis is good or nodal reduction at every prime; the item does not supply a completed modularity proof.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function; AC is assumed in the Statement.

[F4] [[cor-genus-degree-smooth-plane-curve]]: a smooth plane curve of degree three over a field has genus one under AC.

## Verification

1.1 Here $(a_1,a_2,a_3,a_4,a_6)=(0,0,1,-1,0)$, so $(b_2,b_4,b_6,b_8)=(0,-2,1,-1)$, $c_4=48$, and $\Delta=37$. Over $\mathbb Q$, a singular affine point would satisfy $2y+1=0$ and $-3x^2+1=0$, hence $y=-1/2$ and $x^2=1/3$; the curve equation then forces $x=3/8$, whose square $9/64$ is not $1/3$. The point at infinity is smooth because the partial derivative of the homogenized equation with respect to $z$ equals $1$ there. Thus the projective cubic is smooth; by [F4] and [A1] it has genus one, so the pointed cubic is an elliptic curve. [given, F1, F4, A1, algebra]

2.1 For $\ell\ne37$, the reduction is smooth. Since $\Delta=37$, its valuation at each such prime is zero, so [F2] also makes the displayed equation minimal there. At $\ell=2$ its affine equation has partial derivative $1$ with respect to $y$; at $\ell=3$ its partial derivative with respect to $x$ is $1$. For $\ell>3$, completing the square gives $Y^2=g(X)$ with $g(X)=X^3-X+1/4$. A singular affine point would have $Y=0$, $g(X)=0$, and $g'(X)=0$; the last equation gives $X^2=1/3$, and then $g(X)=0$ gives $X=3/8$, which is compatible with $X^2=1/3$ exactly when $37=0$ in the residue field. Thus no such point occurs for $\ell>3$, $\ell\ne37$. The point at infinity is smooth because the partial derivative with respect to $z$ equals $1$ there. At $37$, $v_{37}(\Delta)=1<12$, so [F2] makes the model minimal. The reduced affine equation $f(x,y)=y^2+y-x^3+x=0$ has a singular point $(5,18)$ modulo $37$; in coordinates $u=x-5$, $v=y-18$, its degree-two tangent cone is $v^2-15u^2$, which factors over the algebraic closure into two distinct lines because $15\ne0$ and the characteristic is not $2$. The singularity is a node. [F1, F2, step 1.1, algebra]

3.1 Every prime therefore gives either smooth or nodal minimal reduction. By [F3], this verifies the semistability hypothesis named in Wiles's theorem; this example checks the input condition and does not assert the theorem's modularity conclusion. [F2, F3, step 2.1, algebra] ∎
