---
id: cor-ext-can-be-computed-from-any-projective-resolution-of-the-first-variable
kind: corollary
title: "Ext can be computed from any projective resolution of the first variable"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-projective-comparison-map-exists, thm-projective-comparison-maps-are-unique-up-to-chain-homotopy, def-balanced-ext-bifunctor, def-ext-via-a-projective-resolution-of-the-first-variable, thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2"
      url: https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf
pipeline_run: frontier-31a
---
## Statement

Assume the Axiom of Dependent Choice and the hypotheses of
[[def-balanced-ext-bifunctor]]. If $Q$ is any other supplied projective
resolution datum on the same class of objects, then for every $M,N$ and
$n\geq0$,
$$\operatorname{Ext}^n_{\mathcal A}(M,N)\cong H^n\operatorname{Hom}(Q_\bullet,N),$$
naturally in $M$ and $N$. In particular, the formula computes Ext from any
individual projective resolution $Q_\bullet(M)\to M$; the resulting
objectwise isomorphism is canonical on cohomology.

## Facts & Assumptions

**Given:** Dependent Choice, the balanced Ext hypotheses, supplied data $P,Q$, objects $M,N$, and $n\geq0$.

[F1] Projective comparison maps lifting any object morphism exist: [[thm-projective-comparison-map-exists]].

[F2] Two comparison maps lifting the same morphism are chain-homotopic: [[thm-projective-comparison-maps-are-unique-up-to-chain-homotopy]].

[F3] Resolutions of the same object are homotopy equivalent: [[thm-projective-resolutions-of-the-same-object-are-homotopy-equivalent-over-that-object]].

## Proof

**Proof technique:** direct.

1.1 Choose $a_M:Q_\bullet(M)\to P_\bullet(M)$ lifting $1_M$. A reverse comparison is its homotopy inverse since both composites lift the identity and [F2] compares them with identity chain maps. [F1, F2, F3, choose]

2.1 Precomposition gives $a_M^*: \operatorname{Hom}(P_\bullet(M),N)\to\operatorname{Hom}(Q_\bullet(M),N)$. A homotopy $a-b=dh+hd$ induces the cochain homotopy $s^n(f)=f\circ h_{n-1}$, with $s^0=0$. Thus $H^n(a_M^*)$ is a choice-independent isomorphism. Its source is $\operatorname{Ext}_P^n(M,N)$ by [[def-ext-via-a-projective-resolution-of-the-first-variable]], hence balanced Ext by [[def-balanced-ext-bifunctor]]. [step 1.1, F2, algebra]

3.1 For $u:M'\to M$, choose lifts $P(u)$ and $Q(u)$ by [F1]. Precomposition defines their cohomology actions independently of the lifts by [F2]. Identities and composition follow because composites lift the object composites. The maps $P(u)a_{M'}$ and $a_MQ(u)$ both lift $u$, so [F2] makes them homotopic. Precomposition and cohomology therefore give the required contravariant naturality square in $M$. [F1, F2, step 2.1, construct]

4.1 Postcomposition by $v:N\to N'$ commutes exactly with precomposition by $a_M$. This gives naturality in $N$ and hence both variables. For a single supplied resolution $Q_\bullet(M)$, steps 1.1–2.1 already give the canonical objectwise isomorphism. No simultaneous class-wide choice of comparison maps is required. [step 2.1, step 3.1, algebra] ∎
