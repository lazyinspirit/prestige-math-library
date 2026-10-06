---
id: lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
kind: lemma
title: Rational points of smooth finite-type schemes over a separably closed field are schematically dense
dependency_level: 0
deps:
  - lem-regular-local-domain-induction
  - def-axiom-of-choice
  - def-closed-immersion-schemes
  - def-reduction-of-scheme
  - def-smooth-morphism-schemes
  - lem-closed-immersion-affine-quotient-and-base-change
  - lem-field-valued-points-of-schemes
  - lem-nonempty-smooth-scheme-finite-separable-point
  - thm-reduction-universal-property
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Sections 1.9-1.10, printed p. 9; Appendix A.48, printed p. 581 (density of separable-residue-field points in irreducible geometrically reduced schemes)
---
## Statement

Assume the Axiom of Choice. Let $k$ be a field with no nontrivial finite separable extension (for example a separably closed or algebraically closed field), let $X$ be a reduced finite-type $k$-scheme, and let $S\subseteq X(k)$ be a subset. If $S$ is dense in the underlying topological space of $X$, then every closed subscheme $Z\subseteq X$ with $Z(k)\supseteq S$ equals $X$; in other words, $S$ is schematically dense in $X$.

In particular, if $X$ is smooth over $k$, then $X(k)$ is dense in $X$ and hence schematically dense in $X$. The reducedness hypothesis cannot be dropped: for $X=\operatorname{Spec}k[\varepsilon]/(\varepsilon^2)$ the closed subscheme $Z=\operatorname{Spec}k$ has the same underlying space and satisfies $Z(k)=X(k)$, but $Z\ne X$.

The Axiom of Choice is used through the finite-separable-point lemma and the affine description of closed immersions.

## Facts & Assumptions
**Given:** The Axiom of Choice, a field $k$ with no nontrivial finite separable extension, a reduced finite-type $k$-scheme $X$, a dense subset $S\subseteq X(k)$, and a closed subscheme $Z\subseteq X$ with $Z(k)\supseteq S$.

[F1] A closed immersion $i:Z\to X$ has underlying map a homeomorphism onto a closed subset, and for every affine open $U=\operatorname{Spec}A\subseteq X$ there is a unique ideal $I\subseteq A$ with $i^{-1}(U)\cong\operatorname{Spec}(A/I)$ over $U$. ([[def-closed-immersion-schemes]], [[lem-closed-immersion-affine-quotient-and-base-change]])

[F2] The reduction $X_{\mathrm{red}}$ is the closed subscheme defined by the ideal sheaf of nilpotents; $X$ is reduced exactly when $\mathcal N_X=0$, equivalently when every affine chart ring is reduced. ([[def-reduction-of-scheme]])


[F4] Smoothness is preserved by restricting the source to an open subscheme. A smooth scheme over a field is reduced: its local rings are regular by the geometric-regularity clause of smoothness, hence domains and therefore reduced. ([[def-smooth-morphism-schemes]], [[lem-regular-local-domain-induction]])

[F5] Assume AC. Every nonempty smooth finite-type $k$-scheme $U$ has a closed point $P$ with $\kappa(P)$ finite and separable over $k$. ([[lem-nonempty-smooth-scheme-finite-separable-point]])

[F6] For a field $K$ and scheme $X$, morphisms $\operatorname{Spec}K\to X$ correspond bijectively to pairs $(x,\iota)$ with $x\in X$ and a field embedding $\iota:\kappa(x)\to K$; for $K=k$ this identifies $X(k)$ with the points of residue field $k$. ([[lem-field-valued-points-of-schemes]])

## Proof

**Given:** The Axiom of Choice, a field $k$ with no nontrivial finite separable extension, a reduced finite-type $k$-scheme $X$, a dense subset $S\subseteq X(k)$, and a closed subscheme $Z\subseteq X$ with $Z(k)\supseteq S$.

1.1 By [F1] the underlying space $|Z|$ is closed in $X$ and contains $Z(k)\supseteq S$; since $S$ is dense in $|X|$, every closed subset containing $S$ equals $|X|$, so $|Z|=|X|$. [F1, given]

1.2 Assume now that $X$ is smooth over $k$, and let $U\subseteq X$ be a nonempty open subscheme. Then $U$ is smooth over $k$ by [F4], nonempty and of finite type, so by [F5] it has a closed point $P$ with $\kappa(P)$ finite and separable over $k$. By hypothesis on $k$, $\kappa(P)=k$, and [F6] identifies $P$ with a $k$-point of $U$. Hence every nonempty open subscheme of $X$ meets $X(k)$, so $X(k)$ is dense in $X$. [F4, F5, F6]

2.1 I claim that $Z=X$. Let $U=\operatorname{Spec}A\subseteq X$ be an affine open; by [F1] write $Z\cap U=\operatorname{Spec}(A/I)$ for a unique ideal $I\subseteq A$, and by [step 1.1] its underlying space is all of $U$, so $V(I)=\operatorname{Spec}A$ and hence every $f\in I$ lies in every prime ideal of $A$, i.e. $I\subseteq\sqrt{(0)}$. Since $X$ is reduced, $A$ is reduced by [F2], so $\sqrt{(0)}=0$ and $I=0$, giving $Z\cap U=U$. As the affine opens cover $X$ and two closed subschemes of $X$ that agree on an open cover agree, $Z=X$. [F1, F2, step 1.1]

3.1 Combining: the first assertion is [step 1.1] with [step 2.1]; applying it to the reduced smooth scheme $X$ of [F4] with $S=X(k)$, which is dense by [step 1.2], shows that every closed subscheme $Z\subseteq X$ with $Z(k)\supseteq X(k)$ equals $X$, that is, $X(k)$ is schematically dense in $X$. [F4, step 1.1, step 2.1, step 1.2] ∎ 