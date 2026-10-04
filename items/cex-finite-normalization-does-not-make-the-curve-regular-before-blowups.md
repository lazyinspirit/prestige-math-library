---
id: cex-finite-normalization-does-not-make-the-curve-regular-before-blowups
kind: counterexample
title: Finite normalization alone does not make a curve regular
status: published
origin: pipeline
deps: [thm-regularization-of-finite-normalization-curve-by-point-blowups, lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center, lem-point-blowup-of-integral-curve-is-finite, thm-normalization-reduced-curve-exists-finite, def-embedding-dimension-and-regular-local-ring, thm-one-dimensional-regular-local-rings-are-dvrs, def-axiom-of-choice, thm-polynomial-ring-over-a-field-is-a-ufd, def-normal-noetherian-ring, thm-affine-blowup-standard-charts, def-integral-scheme, cor-dimension-of-a-quotient-as-chains-above-an-ideal, cor-dimension-of-a-finite-polynomial-ring-over-a-field, cor-dimension-preserved-by-integral-extensions]
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
    - title: "The Stacks Project, tag 0BI4 (Lemma 54.15.1)"
      url: https://stacks.math.columbia.edu/tag/0BI4
      locator: "Lemma 54.15.1: the finite-normalization condition is one of the equivalent conditions for the existence of a resolving sequence of point blowups; it does not assert regularity of the curve itself. Retrieved and read 2026-10-03."
---

## Statement refuted

False claim: every reduced curve over a field whose normalization is finite is
already regular.

## Facts & Assumptions

**Given:** AC, a field $k$ of characteristic different from $2$ and $3$, the cuspidal plane curve $Z=V(y^2-x^3)\subseteq\mathbf A^2_k$ and the morphism $\nu:\mathbf A^1_k\to Z$, $t\mapsto(t^2,t^3)$.

[F1] The cusp ring embeds as $k[t^2,t^3]$ in $k[t]$: the unique normal form $a(x)+yb(x)$ maps to $a(t^2)+t^3b(t^2)$, whose even and odd monomial supports are disjoint. It is finite integral over $k[x]$, so its dimension is one ([[cor-dimension-preserved-by-integral-extensions]], [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]). At its closed origin the local ring $R$ is a nonfield local domain of dimension one; its maximal ideal has independent classes $x,y$ modulo its square, since the defining equation has order two. Thus its embedding dimension is two and it is not regular or a DVR ([[def-embedding-dimension-and-regular-local-ring]], [[thm-one-dimensional-regular-local-rings-are-dvrs]]).

[F2] $Z$ is a reduced $k$-scheme of finite type and pure dimension one, so its normalization exists, is finite, and is unique up to a unique $Z$-isomorphism ([[thm-normalization-reduced-curve-exists-finite]]).

[F3] The polynomial ring $k[t]$ is a unique factorization domain, hence an integrally closed domain, so $\mathbf A^1_k$ is normal; a finite birational map from a normal one-dimensional scheme to $Z$ is a normalization of $Z$ ([[thm-polynomial-ring-over-a-field-is-a-ufd]], [[def-normal-noetherian-ring]], [[def-integral-scheme]]).

[F4] The Axiom of Choice is assumed, inherited from the normalization and blowup suppliers ([[def-axiom-of-choice]]).

## Counterexample

1.1 The point $p=(0,0)$ is a singular point of the cusp: at $p$ the local ring $R=\mathcal O_{Z,p}$ has dimension one and embedding dimension two, hence is not regular by [F1]. Therefore $Z$ is not regular. [F1, given]

1.2 The morphism $\nu:\mathbf A^1_k\to Z$, $t\mapsto(t^2,t^3)$, is finite: the image $k[t^2,t^3]\subseteq k[t]$ is a $k$-subalgebra over which $k[t]$ is generated as a module by $1$ and $t$ (because $t^2$ and $t^3$ lie in the subalgebra). It is birational: the induced map of fraction fields is $k(t^2,t^3)\hookrightarrow k(t)$, an equality since $t=t^3/t^2$, and $\nu$ is an isomorphism away from the origin with inverse $(x,y)\mapsto y/x$. It is bijective on scheme points: it is an isomorphism on the complement of the origin by the displayed inverse, and its origin fibre has coordinate ring $k[t]/(t^2,t^3)$, supported at the single point $t=0$. Normality in [F3] follows directly from unique factorization: a reduced fraction $a/b$ satisfying a monic integral equation has $b\mid a^n$ after denominators are cleared, so coprimality makes $b$ a unit. Since $\mathbf A^1_k$ is therefore normal, $\nu$ is a finite normalization of $Z$; by the uniqueness in [F2] the normalization of $Z$ is finite. [F2, F3, given]

2.1 On the blowup chart $y=xt$, the strict transform has equation $t^2-x=0$, hence coordinate ring $k[t]$. On the other chart $x=ys$, its equation is $1-ys^3=0$, which makes $s$ and $y$ invertible; this portion lies in the overlap with the first chart. Thus the whole strict transform is the regular affine line and its map to $Z$ is $t\mapsto(t^2,t^3)$, the normalization of step 1.2 ([[thm-affine-blowup-standard-charts]]). [step 1.2, algebra]

3.1 The curve $Z$ therefore has finite normalization by step 1.2 and is not regular by step 1.1, so the false claim is refuted by the explicit witness $(Z,\nu)$. Moreover $\nu$ is a finite birational morphism which is not an isomorphism over the singular point: if it were an isomorphism at the origin, then $Z$ would be regular at the origin, contradicting step 1.1. Thus finite normalization is not a substitute for the blowup procedure: the regularization theorem requires point blowups, and step 2.1 shows explicitly that one point blowup makes its strict transform regular ([[thm-regularization-of-finite-normalization-curve-by-point-blowups]], [[lem-strict-blowup-increases-finite-normalization-subalgebra-at-singular-center]]). [F4, step 1.1, step 1.2, step 2.1] ∎
