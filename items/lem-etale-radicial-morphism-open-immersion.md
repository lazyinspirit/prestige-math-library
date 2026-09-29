---
id: lem-etale-radicial-morphism-open-immersion
kind: lemma
title: An étale universally injective morphism is an open immersion
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-axiom-of-choice
  - def-etale-morphism-schemes
  - def-open-immersion-schemes
  - thm-etale-equivalent-flat-unramified-fp
  - thm-unramified-diagonal-open-immersion
  - thm-flat-finite-presentation-is-open
  - thm-faithfully-flat-ring-map-characterisations
  - cor-faithfully-flat-ring-maps-are-injective
  - thm-faithful-flatness-detected-by-nonzero-modules-and-fibres
  - lem-points-of-scheme-fibre-product-residue-tensors
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Étale Morphisms of Schemes, Section 41.14 (tag 025F), Theorem 41.14.1 (tag 025G)"
      url: https://stacks.math.columbia.edu/tag/025F
      locator: "Theorem 41.14.1 and its proof; the faithfully flat affine descent step is expanded here"
verification:
  precheck: pass
  audited: 2026-09-30
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). If a morphism of schemes
$f:X\to Y$ is étale ([[def-etale-morphism-schemes]]) and universally injective,
then it is an open immersion ([[def-open-immersion-schemes]]). It is enough for
universal injectivity that $f$ be injective on underlying points and induce
an isomorphism $\kappa(f(x))\xrightarrow{\sim}\kappa(x)$ for every $x\in X$.
No separatedness or quasi-compactness of $f$ or $Y$ is assumed.

## Facts & Assumptions

**Given:** An étale morphism $f:X\to Y$ and either of the injectivity hypotheses in the Statement.

[F1] Étale morphisms are flat, locally of finite presentation and unramified ([[thm-etale-equivalent-flat-unramified-fp]], [[def-etale-morphism-schemes]]). An unramified morphism has an open diagonal ([[thm-unramified-diagonal-open-immersion]]). A flat, locally finitely presented morphism is open ([[thm-flat-finite-presentation-is-open]]).

[F2] A flat affine ring map is faithfully flat when its map on spectra is surjective ([[thm-faithfully-flat-ring-map-characterisations]]). Faithful flatness implies injectivity of the ring map and detects a zero module after tensoring ([[cor-faithfully-flat-ring-maps-are-injective]], [[thm-faithful-flatness-detected-by-nonzero-modules-and-fibres]]).

[F3] Points in a fibre product over a pair of points are primes of the tensor product of their residue fields ([[lem-points-of-scheme-fibre-product-residue-tensors]]).

[F4] The Axiom of Choice is assumed ([[def-axiom-of-choice]]); it is inherited through the published flat-openness and faithful-flatness suppliers in [F1] and [F2].

## Proof

**Proof technique:** identify the diagonal, then prove that a surjective flat open monomorphism is an isomorphism on small affine target opens.

1.1 First suppose that $f$ is injective on points and every residue-field map is an isomorphism. After any base change $T\to Y$ and for any $t\in T$ with image $y$, a point of $(X\times_YT)_t$ lies over some $x\in f^{-1}(y)$ and, by [F3], corresponds to a prime of $\kappa(x)\otimes_{\kappa(y)}\kappa(t)$. There is at most one such $x$; if it exists, the tensor product is $\kappa(t)$ and has one prime. Hence every base change of $f$ is injective on points, which is universal injectivity. [F3]

1.2 Now assume universal injectivity. By [F1], $f$ is unramified, so its diagonal $\Delta:X\to X\times_YX$ is an open immersion. Base-change $f$ along itself: the projection $p_1:X\times_YX\to X$ is injective on points by universal injectivity. The diagonal is a section of $p_1$, so it supplies a point in every nonempty fibre of $p_1$; injectivity makes that the only point in each fibre. Hence $\Delta$ is surjective on points. A surjective open immersion is an isomorphism, so $\Delta$ is an isomorphism and $f$ is a monomorphism. [F1]

2.1 By [F1], $f$ is open. Put $U=f(X)\subseteq Y$, an open subscheme; then $f:X\to U$ is surjective, flat, locally of finite presentation and a monomorphism. Fix $y\in U$ and its unique preimage $x$. Choose an affine open $V=\operatorname{Spec}A\subseteq U$ around $y$ and an affine open $W=\operatorname{Spec}B\subseteq f^{-1}(V)$ around $x$. Because $f$ is open, $f(W)$ is an open neighbourhood of $y$ in $V$. Choose a principal open $D(a)\subseteq f(W)$ containing $y$. Since $f$ is injective on points, every point of $f^{-1}(D(a))$ already lies in $W$, so $f^{-1}(D(a))=W\cap f^{-1}(D(a))=\operatorname{Spec}B_{f^\#(a)}$. The induced affine map $A_a\to B_{f^\#(a)}$ is flat and surjective on spectra, hence faithfully flat by [F2]. [F1, F2, step 1.2]

3.1 Abbreviate the rings of step 2.1 by $A'\to B'$. Because $f$ is a monomorphism, its diagonal over $D(a)$ is an isomorphism, so the multiplication map $\mu:B'\otimes_{A'}B'\to B'$ is an isomorphism. By [F2], $A'\to B'$ is injective; let $C=B'/A'$. Tensoring the exact sequence $0\to A'\to B'\to C\to0$ with the flat $A'$-module $B'$ gives $$0\longrightarrow B'\xrightarrow{b\mapsto1\otimes b}B'\otimes_{A'}B'\longrightarrow C\otimes_{A'}B'\longrightarrow0.$$ The first map is inverse to $\mu$, hence an isomorphism. Thus $C\otimes_{A'}B'=0$; faithful flatness detects zero modules by [F2], so $C=0$ and $A'\to B'$ is an isomorphism. The resulting principal opens $D(a)$ cover $U$ as $y$ varies, and $f$ is an isomorphism over each of them. Therefore $f:X\xrightarrow{\sim}U\hookrightarrow Y$ is an open immersion. [F2, step 1.2, step 2.1]

4.1 Step 1.1 proves the residue-field criterion for universal injectivity; steps 1.2--3.1 prove the principal assertion. The proof makes only finitely many local chart choices at each point. The declared Axiom of Choice enters through the published suppliers identified in [F4]. [F1, F2, F3, F4, step 1.1, step 1.2, step 3.1] $\square$
