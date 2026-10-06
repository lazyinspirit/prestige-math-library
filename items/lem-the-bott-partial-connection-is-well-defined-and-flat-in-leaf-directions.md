---
id: lem-the-bott-partial-connection-is-well-defined-and-flat-in-leaf-directions
kind: lemma
title: "The Bott partial connection is well defined and flat along leaves"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-bott-partial-connection-on-the-normal-bundle-of-a-foliation, def-involutive-distribution, def-integral-manifold-of-a-distribution, prop-integrable-distributions-are-involutive, prop-sections-of-a-distribution-form-a-locally-free-module, def-quotient-vector-bundle-by-a-subbundle, thm-vector-fields-form-a-lie-algebra, prop-leibniz-rules-for-the-lie-bracket-with-function-multiples, def-countable-choice-principle-for-foliation-pair]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
dependency_level: 1
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Raoul Bott, Lectures on Characteristic Classes and Foliations (Lecture Notes in Mathematics 279; complete scan of the 178-page volume)"
      url: "https://poisson.phc.dm.unipi.it/~lmigliorini/secondo_magistrale/gauge_theory/bott_foliations.pdf"
      locator: "\u00a76, printed pp. 32-34"
---

## Statement

Assume Countable Choice $\mathrm{AC}_\omega$. In the notation of [[def-bott-partial-connection-on-the-normal-bundle-of-a-foliation]],
the Bott partial connection is well defined: $\pi[X,\tilde s]$ depends only on
$X\in\Gamma(E)$ and the section $s\in\Gamma(\nu)$, not on the representative $\tilde s$,
is $C^\infty(M)$-linear in $X$, and satisfies $\nabla^B_X(fs)=X(f)s+f\nabla^B_X s$ for
$f\in C^\infty(M)$. Its curvature vanishes along leaves: for all $X,Y\in\Gamma(E)$ and
$s\in\Gamma(\nu)$, $R^B(X,Y)s:=\nabla^B_X\nabla^B_Y s-\nabla^B_Y\nabla^B_X
s-\nabla^B_{[X,Y]}s=0$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. A codimension-$q$ regular foliation $F$ of a smooth manifold $M$ with tangent distribution $E=TF$, leaf-tangent fields $X,Y\in\Gamma(E)$, a normal-bundle section $s\in\Gamma(\nu)$, and two smooth local representatives $\tilde s,\tilde s'$ of $s$ on a common bundle chart.

[F1] For $X\in\Gamma(E)$ and $s\in\Gamma(\nu)$ the Bott partial connection is $\nabla^B_Xs=\pi[X,\tilde s]$ with $\pi:TM\to\nu$ the quotient map and $\tilde s$ any smooth representative of $s$. ([[def-bott-partial-connection-on-the-normal-bundle-of-a-foliation]]).

[F2] An integrable distribution is involutive: the Lie bracket of two of its sections is again a section. ([[prop-integrable-distributions-are-involutive]]).

[F3] For smooth functions $f$ and vector fields $X,Y$ one has $[fX,Y]=f[X,Y]-Y(f)X$ and $[X,fY]=f[X,Y]+X(f)Y$. ([[prop-leibniz-rules-for-the-lie-bracket-with-function-multiples]]).

[F4] Smooth vector fields on a manifold form a Lie algebra: the bracket is bilinear, alternating and satisfies the Jacobi identity. ([[thm-vector-fields-form-a-lie-algebra]]).

## Proof

**Proof technique:** direct.

1.1 In any quotient-bundle frame a local lift of $s$ is obtained by using the same smooth coefficient functions in lifted frame vectors. Two such local representatives of $s$ differ by a section $\sigma=\tilde s'-\tilde s\in\Gamma(E)$, and since $E$ is integrable it is involutive by [F2], so $[X,\sigma]\in\Gamma(E)$ and $[X,\tilde s']=[X,\tilde s]+[X,\sigma]$; applying the quotient map $\pi$ of [F1] kills $[X,\sigma]$, so $\pi[X,\tilde s']=\pi[X,\tilde s]$ and $\nabla^B_Xs$ is independent of the chosen local representative. Consequently these smooth local sections agree on overlaps and define a global section. [F1, F2, given]

2.1 For $f\in C^\infty(M)$ the first Leibniz rule of [F3] gives $[fX,\tilde s]=f[X,\tilde s]-(\tilde s f)X$, and the correction $(\tilde s f)X$ is a section of $E$, so projecting gives $\nabla^B_{fX}s=f\nabla^B_Xs$, that is, $C^\infty(M)$-linearity in the vector-field variable. [F3, step 1.1]

2.2 The second Leibniz rule of [F3] gives $[X,f\tilde s]=f[X,\tilde s]+X(f)\tilde s$ for the representative $f\tilde s$ of $fs$, so projecting yields $\nabla^B_X(fs)=f\nabla^B_Xs+X(f)s$, the stated Leibniz rule. [F3, step 1.1]

3.1 For flatness, lift $\nabla^B_Ys=\pi[Y,\tilde s]$ locally by $[Y,\tilde s]$ and compute $\nabla^B_X\nabla^B_Ys-\nabla^B_Y\nabla^B_Xs-\nabla^B_{[X,Y]}s=\pi\bigl(\lbrack X,[Y,\tilde s]\rbrack-\lbrack Y,[X,\tilde s]\rbrack-\lbrack\lbrack X,Y\rbrack,\tilde s\rbrack\bigr)$; the bracketed expression is the Jacobi identity of [F4] applied to $X,Y,\tilde s$, hence vanishes, and well-definedness from step 1.1 makes the result independent of all lifts, so $R^B(X,Y)s=0$ and the connection is flat along leaf directions; only the stated bracket and involutivity facts were used, with no additional choice principle. [F4, step 2.1, step 2.2] ∎
