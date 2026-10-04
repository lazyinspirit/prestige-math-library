---
id: lem-nonaffine-rigidity-proper-geometrically-integral-factor
kind: lemma
title: "Rigidity for a proper geometrically integral factor"
status: published
origin: pipeline
deps: [def-axiom-of-choice, thm-global-functions-proper-integral-variety, lem-nonaffine-global-sections-flat-field-base-change, thm-proper-morphism-closed-image, thm-flat-finite-presentation-is-open, def-separated-morphism-schemes, thm-morphisms-into-affine-scheme-global-sections]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Milne, Abelian Varieties (2008), Chapter I, rigidity lemma"
      url: https://www.jmilne.org/math/CourseNotes/AV.pdf
    - title: "Brion, Some structure theorems for algebraic groups, Lemma 3.3.3"
      url: https://arxiv.org/pdf/1509.03059
---

## Statement

Assume the Axiom of Choice. Let $X$ be a proper geometrically integral $k$-scheme of finite type, with $x_0\in X(k)$. Let $Y$ be a connected finite-type $k$-scheme and $Z$ a separated finite-type $k$-scheme. If a $k$-morphism $f:X\times_kY\to Z$ is constant on $X\times_k\{y_0\}$ for some $y_0\in Y(k)$, then
$$f=f(x_0,-)\circ\operatorname{pr}_Y.$$

## Facts & Assumptions

[F1] A proper geometrically integral scheme has global functions equal to the base field, under AC. This applies after every field extension. ([[thm-global-functions-proper-integral-variety]])

[F2] Global sections of a quasi-compact separated $k$-scheme commute with scalar extension to any $k$-algebra. Morphisms into affine schemes correspond to ring maps on global sections. ([[lem-nonaffine-global-sections-flat-field-base-change]], [[thm-morphisms-into-affine-scheme-global-sections]])

[F3] A proper map is closed after base change; a flat map locally of finite presentation is open after base change. The projection $X\times_kY\to Y$ has both properties: properness is stable under base change, and a finite-type scheme over a field is flat and of finite presentation. ([[thm-proper-morphism-closed-image]], [[thm-flat-finite-presentation-is-open]])

[F4] The diagonal of a separated scheme is closed. ([[def-separated-morphism-schemes]])

## Proof

**Given:** $X,x_0,Y,Z,f,y_0$ as in the statement, and AC.

1.1 Let $E$ be the closed equalizer of $f$ and $f(x_0,-)\circ\operatorname{pr}_Y$, obtained by pulling back the diagonal of $Z$. Write $p:X\times_kY\to Y$ and $C=Y\setminus p((X\times_kY)\setminus E)$. By [F3], $p$ is open, so $C$ is closed. A point $y$ belongs to $C$ exactly when the whole topological fibre of $p$ over $y$ lies in $E$. That fibre is geometrically integral and thus reduced, so the two morphisms agree on it scheme theoretically: the ideal of the equalizer vanishes at every point and is zero on a reduced scheme. In particular $y_0\in C$. [F3, F4, given]

2.1 Fix $y\in C$. Its fibre has image the single point $f(x_0,y)$. Choose an affine open $W\subset Z$ containing that point. The closed subset $f^{-1}(Z\setminus W)$ has closed image under the proper projection $p$. Its image omits $y$, so an affine open neighbourhood $U=\operatorname{Spec}R$ of $y$ avoids that image. Consequently $f(X\times_kU)\subset W$. By [F1] and [F2], $\Gamma(X\times_kU,\mathcal O)=k\otimes_kR=R$. The map to the affine $W$ therefore factors through $U$, and evaluating at $x_0$ identifies the factor as $f(x_0,-)|_U$. Thus $U\subset C$, proving that $C$ is open. [F1, F2, F3, step 1.1]

3.1 Since $Y$ is connected and $C$ is nonempty, open, and closed, $C=Y$. The factorization in step 2.1 holds on an open neighbourhood of every point, hence glues to the asserted equality of morphisms on all of $X\times_kY$. AC is carried from the proper global-functions and morphism suppliers; no stronger field or projectivity assumption is used. [step 1.1, step 2.1, given] ∎
