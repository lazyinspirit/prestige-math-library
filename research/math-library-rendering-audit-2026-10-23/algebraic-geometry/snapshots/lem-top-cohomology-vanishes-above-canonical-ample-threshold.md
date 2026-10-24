---
id: lem-top-cohomology-vanishes-above-canonical-ample-threshold
kind: lemma
title: "Vanishing of top cohomology past the canonical threshold"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps:
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-canonical-divisor-of-a-smooth-projective-surface
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-euler-characteristic-coherent-sheaf
  - def-invertible-sheaf
  - def-sheaf-tensor-product
  - lem-ample-divisor-positive-intersection-on-smooth-projective-surface
  - lem-global-section-effective-divisor
  - def-section-zero-scheme-invertible-sheaf
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral smooth projective surface over $k$, let $K_X$ be a
canonical divisor ([[def-canonical-divisor-of-a-smooth-projective-surface]]),
let $H$ be an ample invertible $\mathcal O_X$-module
([[def-ample-invertible-sheaf]]) and let $M$ be an invertible
$\mathcal O_X$-module with
$$M\cdot H>K_X\cdot H.$$
Then $H^2(X,M)=0$. Equivalently $H^0(X,\omega_X\otimes M^{\vee})=0$.

## Facts & Assumptions

**Given:** a field $k$, an integral smooth projective surface $X$ over $k$, a canonical divisor $K_X$, an ample invertible sheaf $H$, and an invertible sheaf $M$ with $M\cdot H>K_X\cdot H$.

[F1] Serre duality: for the invertible sheaf $M$ the pairing $H^2(X,M)\times H^0(X,M^{\vee}\otimes\omega_X)\to H^2(X,\omega_X)\xrightarrow{t_X}k$ is perfect and both groups are finite-dimensional ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]]); hence $h^2(X,M)=h^0(X,\omega_X\otimes M^{\vee})$ and $H^2(X,M)=0$ if and only if $H^0(X,\omega_X\otimes M^{\vee})=0$ ([[def-euler-characteristic-coherent-sheaf]], [[def-invertible-sheaf]], [[def-sheaf-tensor-product]]).

[F2] Positivity of ample classes: if $D$ is a nonzero effective Cartier divisor, then $H\cdot D>0$; and if an invertible sheaf $\mathcal N$ has a nonzero global section whose zero scheme is empty, then $\mathcal N\cong\mathcal O_X$ ([[lem-ample-divisor-positive-intersection-on-smooth-projective-surface]]).

[F3] Zero schemes of sections: a nonzero global section of an invertible sheaf on the integral scheme $X$ is regular, its zero scheme $Z(s)$ is an effective Cartier divisor with $\mathcal O_X(Z(s))\cong\mathcal N$, and $Z(s)$ is empty if and only if $s$ is nowhere vanishing ([[lem-global-section-effective-divisor]], [[def-section-zero-scheme-invertible-sheaf]]).

[F4] The intersection numbers $K_X\cdot H$ and $M\cdot H$ are computed through the associated invertible sheaves $\omega_X$ and $M$; they depend only on the linear equivalence classes and are additive, so that $(K_X-M)\cdot H=K_X\cdot H-M\cdot H$ ([[def-canonical-divisor-of-a-smooth-projective-surface]], [[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]]).

[F5] The Axiom of Choice is inherited from the Serre-duality and ample-positivity suppliers of [F1] and [F2]; the section used below, if it exists, is a single object.

## Proof

**Proof technique:** direct: pass to the Serre-dual space, suppose it has a nonzero section, and split into the nowhere-vanishing and effective-divisor cases.

1.1 Duality reduction. Put $\mathcal N:=\omega_X\otimes M^{\vee}$. By [F1] it suffices to prove $H^0(X,\mathcal N)=0$. [F1, F4]

1.2 A nonzero section leads to a contradiction. Suppose $0\ne s\in H^0(X,\mathcal N)$ and let $Z:=Z(s)$ be its zero scheme. By [F3], $Z$ is either empty or an effective Cartier divisor with $\mathcal O_X(Z)\cong\mathcal N$. If $Z=\varnothing$, then $s$ is nowhere vanishing, so $\mathcal N\cong\mathcal O_X$ by [F2]; tensoring with $M$ gives $\omega_X\cong M$, hence $M\cdot H=K_X\cdot H$, contradicting the hypothesis. If $Z\ne\varnothing$, then $Z$ is a nonzero effective Cartier divisor whose sheaf is $\mathcal O_X(Z)\cong\omega_X\otimes M^{\vee}$; by linear-equivalence invariance of the intersection product and positivity [F2], [F4], $$0<Z\cdot H=(K_X-M)\cdot H=K_X\cdot H-M\cdot H,$$ so $M\cdot H<K_X\cdot H$, again contradicting the hypothesis. [F2, F3, F4]

2.1 Conclusion. Both cases of step 1.2 are impossible, so $H^0(X,\omega_X\otimes M^{\vee})=0$ and hence $H^2(X,M)=0$ by step 1.1. The Axiom of Choice is inherited from the suppliers recorded in [F5]; no family of sections is selected. [F5, step 1.1, step 1.2] ∎ 