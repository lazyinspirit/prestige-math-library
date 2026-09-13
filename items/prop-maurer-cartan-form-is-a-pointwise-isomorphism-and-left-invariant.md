---
id: prop-maurer-cartan-form-is-a-pointwise-isomorphism-and-left-invariant
kind: proposition
title: Maurer--Cartan form is a pointwise isomorphism and left invariant
status: draft
origin: pipeline
deps: ["def-countable-choice", "def-left-and-right-translations-on-a-lie-group", "def-left-maurer-cartan-form", "thm-chain-rule-for-differentials-of-smooth-maps", "thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity"]
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Robert L. Bryant, An Introduction to Lie Groups and Symplectic Geometry
      url: https://math.duke.edu/~bryant/ParkCityLectures.pdf
      locator: Lecture 2, Definition 9 and the two sentences immediately following it, printed page 27
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
a Lie group $G$. Every fibre map
$\theta_g:T_gG\to\mathfrak g$ is a linear isomorphism, with inverse
$d(L_g)_e$. For $h,g\in G$ and $V\in T_gG$, define the pullback here by

$$(L_h^*\theta)_g(V)=\theta_{hg}\bigl(d(L_h)_gV\bigr).$$

Then $L_h^*\theta=\theta$ for every $h\in G$. Moreover, for every
$X\in\mathfrak g$ and its left-invariant extension $X^L$,

$$\theta_g(X^L_g)=X$$

at every $g\in G$. The countable-choice assumption is used exactly through
the supplied Maurer--Cartan definition and invariant-extension theorem.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, a Lie group $G$ with identity $e$, elements
$g,h\in G$, a vector $V\in T_gG$, and $X\in\mathfrak g=T_eG$.

[F1] $\mathrm{AC}_\omega$ is countable choice. [[def-countable-choice]].

[F2] The left Maurer--Cartan form is
$\theta_g=d(L_{g^{-1}})_g$, and its associated bundle map is the inverse of
smooth left trivialization. [[def-left-maurer-cartan-form]].

[F3] Left translations are $L_a(b)=ab$, with inverse $L_{a^{-1}}$.
[[def-left-and-right-translations-on-a-lie-group]].

[F4] Differentials obey the chain rule.
[[thm-chain-rule-for-differentials-of-smooth-maps]].

[F5] The left-invariant extension of $X\in\mathfrak g$ is
$X^L_g=d(L_g)_eX$. [[thm-left-invariant-vector-fields-evaluate-isomorphically-at-the-identity]].

## Proof

**Proof technique:** direct.

1.1 By [F2], the bundle map $V_g\mapsto(g,\theta_gV_g)$ is inverse to $\Phi_L(g,X)=d(L_g)_eX$. Consequently each $\theta_g$ is a linear isomorphism with inverse $d(L_g)_e$. [F2, algebra]

1.2 The group law in [F3] gives $L_{(hg)^{-1}}\circ L_h=L_{g^{-1}}$. Therefore [F2] and the chain rule [F4] give $$(L_h^*\theta)_g(V)=d(L_{(hg)^{-1}})_{hg}\,d(L_h)_gV=d(L_{g^{-1}})_gV=\theta_g(V).$$ Since $g$ and $V$ were arbitrary, $L_h^*\theta=\theta$. [F2, F3, F4, algebra]

2.1 By [F5], [F2], and step 1.1, $$\theta_g(X^L_g)=\theta_g\bigl(d(L_g)_eX\bigr)=X.$$ Thus the $\mathfrak g$-valued function $\theta(X^L)$ is the constant function with value $X$. [F2, F5, step 1.1]

3.1 A Lie group is nonempty. In dimension zero all tangent spaces are zero and the unique fibre maps give every asserted identity; in dimension one the same proof applies. Lie groups are boundaryless by convention, and no metric, nondegeneracy, or endpoint occurs. The stated $\mathrm{AC}_\omega$ is inherited through [F2] and [F5]; the chain-rule identities are pointwise and add no selection. The proposition asserts equalities and an explicit inverse, not a biconditional. [F1, F2, F3, F4, F5, step 1.1, step 1.2, step 2.1] ∎
