---
id: lem-surface-derivations-and-regular-hypersurfaces
kind: lemma
title: Surface derivations and regular hypersurfaces
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
- def-axiom-of-choice
- def-derivation-algebra
- lem-regular-local-quotient-by-parameter-is-regular
- lem-regular-system-of-parameters-equivalent-basis
- thm-localisation-and-polynomial-extension-of-regular-rings
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: 'The Stacks Project: full proof imports for normal-surface resolution, lemma-derivation-extends, lemma-quotient-regular,
      lemma-degree-p-extension-regular'
    url: https://stacks.math.columbia.edu/download/more-algebra.pdf
  - title: Stacks Lemma 15.49.2 (07PF), derivative-unit regular quotient criterion
    url: https://stacks.math.columbia.edu/tag/07PF
verification:
  precheck: pass
---

## Statement

Assume AC. Derivations of Noetherian rings extend uniquely through localization and adic completion. If $T$ is regular Noetherian, $D:T\to T$ a derivation and $D(f)$ a unit, then $T[z]/(z^r-f)$ is regular for every $r\ge1$. More generally, if $h\in T$ and $D(h)$ is a unit of $T/(h)$, then $T/(h)$ is regular.

## Facts & Assumptions

**Given:** A regular Noetherian ring $T$, a derivation $D\colon T\to T$, an element $f\in T$ with $D(f)$ a unit of $T$, and an integer $r\ge1$.

[F1] [[def-axiom-of-choice]]: The Axiom of Choice is assumed, as required by the cited regular-local suppliers.

[F2] [[lem-regular-local-quotient-by-parameter-is-regular]]: If $(R,\mathfrak m,k)$ is regular local and $x\in\mathfrak m\smallsetminus\mathfrak m^2$, then $R/(x)$ is regular local of dimension $\dim R-1$.

[F3] [[lem-regular-system-of-parameters-equivalent-basis]]: In a Noetherian local ring, a list of $d=\dim R$ elements is a regular system of parameters exactly when its classes form a basis of $\mathfrak m/\mathfrak m^2$.

[F4] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: Finite polynomial extensions and localizations of a regular Noetherian ring are regular.

[F5] [[def-derivation-algebra]]: A derivation is additive and satisfies the Leibniz rule; these laws are preserved by the quotient-rule extension through localization.

## Proof

1.1 The derivation extends uniquely through localization. For a multiplicative set $S\subset T$, define $D(a/s)=(sD(a)-aD(s))/s^2$. The quotient rule is independent of the representative and satisfies the Leibniz rule, so it gives the unique extension to $S^{-1}T$. [F5, given]

2.1 Let $I\subseteq T$ be any ideal. The Leibniz rule gives $D(I^{n+1})\subseteq I^n$: differentiating a product of $n+1$ factors from $I$ leaves at least $n$ such factors in every term. For a compatible system $a=(a_n)\in\widehat T=\varprojlim T/I^n$, define $\widehat D(a)_n$ to be $D(\widetilde a_{n+1})\bmod I^n$, where $\widetilde a_{n+1}\in T$ lifts $a_{n+1}$. The containment just proved makes this independent of the lift and compatible in $n$. Applying the Leibniz rule modulo each $I^n$ shows that $\widehat D$ is a derivation; the defining formula also proves uniqueness. [F5, step 1.1]

2.2 Extend $D$ to $T[z]$ by setting $D(z)=0$. Let $h=z^r-f$ and let $\mathfrak q\subset T[z]$ be any prime containing $(h)$. The ambient local ring $B=T[z]_{\mathfrak q}$ is regular by [F4]. By step 1.1, the derivation extends from $T[z]$ to $B$, and in $B$ it satisfies $D(h)=-D(f)$, a unit. We keep this derivation on the ambient ring $B$; it is not asserted to descend to $B/(h)$. [F4, F5, given, step 1.1]

2.3 For the general criterion, localize $T$ at any prime containing $h$. If $h$ were in the square of that local maximal ideal, Leibniz would put $D(h)$ in the maximal ideal, contradicting its unit image modulo $h$. Thus $h$ is a parameter of the regular local ring, and [F2] makes its quotient regular. This holds at every prime of $T/(h)$. [F2, F4, F5, step 1.1]

3.1 In the regular local ring $B$ of step 2.2, let $\mathfrak n$ be its maximal ideal. Since $h\in\mathfrak n$, suppose toward a contradiction that $h\in\mathfrak n^2$. Write $h$ as a finite sum of products of elements of $\mathfrak n$. The Leibniz rule then gives $D(h)\in\mathfrak n$, because in each differentiated product the undifferentiated factor lies in $\mathfrak n$. This contradicts the unit $D(h)=-D(f)$ from step 2.2. Thus $h\notin\mathfrak n^2$; its class in $\mathfrak n/\mathfrak n^2$ is nonzero and it is part of a regular system of parameters of $B$. [F3, F5, step 2.2]

4.1 The local ring of $S=T[z]/(h)$ at the prime corresponding to $\mathfrak q$ is $B/(h)$. By step 3.1, $h$ is a member of a regular system of parameters of the regular local ring $B$, so [F2] makes $B/(h)$ regular. As this holds at every prime of $S$, the scheme $S$ is regular. [F2, step 3.1]

5.1 Hence $T[z]/(z^r-f)$ is regular as a scheme; the sole choice hypothesis is AC, already included in the regular-quotient and parameter suppliers. [F1, step 4.1] ∎

## Remarks

- The unit hypothesis $D(f)\in T^\times$ is exactly what rules out $z^r-f\in\mathfrak n^2$; without it the quotient can be singular.
- The criterion proves regularity of the total scheme, and does not by itself imply smoothness over $T$. For example, with $T=\mathbb F_p[t]$, $D=d/dt$, $f=t$ and $r=p$, the quotient is the regular ring $\mathbb F_p[z]$, whereas its geometric fibres over $T$ are nonreduced, so the morphism is nowhere smooth.
