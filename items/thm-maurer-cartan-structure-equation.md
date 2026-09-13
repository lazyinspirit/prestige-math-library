---
id: thm-maurer-cartan-structure-equation
kind: theorem
title: Maurer--Cartan structure equation
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative", "prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant", "def-lie-bracket-on-the-tangent-space-of-a-lie-group", "thm-the-tangent-space-at-the-identity-is-a-lie-algebra", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity", "def-exterior-derivative-by-the-invariant-vector-field-formula"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 2, Proposition 9 and complete proof, printed pages 27--28
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
proof_strategy: direct
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $\theta$ be the left Maurer--Cartan form of
a Lie group $G$, with values in $\mathfrak g=T_eG$. Write $d\theta$ for its
componentwise exterior derivative from
[[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]].
For vector fields $A,B$, define the bracket-valued wedge by

$$[\theta\wedge\theta](A,B)=[\theta(A),\theta(B)]_G-[\theta(B),\theta(A)]_G=2[\theta(A),\theta(B)]_G.$$

Then the normalized left Maurer--Cartan structure equation is

$$d\theta+\frac12[\theta\wedge\theta]=0.$$

The countable-choice assumption is used exactly through the supplied
Maurer--Cartan, invariant-field, and tangent-bracket results.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ with identity $e$, its left
Maurer--Cartan form $\theta$, and $\mathfrak g=T_eG$ with the transported
left-invariant-field bracket.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] Finite-dimensional vector-valued forms and their componentwise exterior
derivative are defined by scalar dual evaluation.
[[def-finite-dimensional-vector-valued-forms-and-their-exterior-derivative]].

[F3] Every $\theta_p$ is a linear isomorphism with inverse $d(L_p)_e$, and
$\theta(X^L)=X$. [[prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant]].

[F4] The transported tangent bracket satisfies
$[X^L,Y^L]=[X,Y]_G^L$.
[[def-lie-bracket-on-the-tangent-space-of-a-lie-group]].

[F5] The tangent bracket is bilinear and alternating.
[[thm-the-tangent-space-at-the-identity-is-a-lie-algebra]].

[F6] Every $X\in\mathfrak g$ has a unique smooth left-invariant extension.
[[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

[F7] For a scalar one-form $\alpha$,
$d\alpha(A,B)=A(\alpha(B))-B(\alpha(A))-\alpha([A,B])$.
[[def-exterior-derivative-by-the-invariant-vector-field-formula]].

## Proof

**Proof technique:** direct.

1.1 Bilinearity of the bracket [F5] and smoothness of $\theta$ [F3] show in any basis of $\mathfrak g$ that the displayed bracket-wedge has smooth components; alternation follows by exchanging $A$ and $B$. Thus it is a well-defined $\mathfrak g$-valued two-form. Because the bracket is alternating, [F5] also gives $[\theta\wedge\theta](A,B)=2[\theta(A),\theta(B)]_G$. [F3, F5, algebra]

1.2 Let $X,Y\in\mathfrak g$ and use their left-invariant extensions from [F6]. For every $\lambda\in\mathfrak g^*$, [F2], [F7], and [F3] give $$\lambda\bigl(d\theta(X^L,Y^L)\bigr)=X^L\bigl(\lambda(\theta(Y^L))\bigr)-Y^L\bigl(\lambda(\theta(X^L))\bigr)-\lambda\bigl(\theta([X^L,Y^L])\bigr)=-\lambda([X,Y]_G),$$ because the first two functions are the constants $\lambda(Y)$ and $\lambda(X)$ and [F4] identifies the bracket field. Since linear functionals separate points, $d\theta(X^L,Y^L)=-[X,Y]_G$. [F2, F3, F4, F6, F7, algebra]

2.1 On the same fields, step 1.1 and [F3] yield $\frac12[\theta\wedge\theta](X^L,Y^L)=[X,Y]_G$. Adding this to step 1.2 proves the structure equation on every pair of left-invariant fields. [F3, step 1.1, step 1.2, algebra]

3.1 Fix $p\in G$ and $U,V\in T_pG$. Put $X=\theta_p(U)$ and $Y=\theta_p(V)$. By [F3], $\theta_p(X^L_p)=X=\theta_p(U)$ and $\theta_p(Y^L_p)=Y=\theta_p(V)$; injectivity of $\theta_p$ gives $X^L_p=U$ and $Y^L_p=V$. Step 2.1 therefore makes the structure equation vanish on the arbitrary pair $(U,V)$ at $p$, proving it globally. [F3, F6, step 2.1]

4.1 A Lie group is nonempty. If $\dim G=0$, both two-forms are uniquely zero; if $\dim G=1$, every alternating two-form is zero and the equation again holds. Lie groups are boundaryless by convention, and no metric, nondegeneracy, or endpoint is involved. The stated $\mathrm{AC}_\omega$ is inherited through [F3], [F4], [F5], and [F6]; componentwise differentiation and the pointwise spanning argument add no choice. The theorem is one equality, not a biconditional. [F1, F2, F3, F4, F5, F6, F7, step 1.1, step 1.2, step 2.1, step 3.1] ∎
