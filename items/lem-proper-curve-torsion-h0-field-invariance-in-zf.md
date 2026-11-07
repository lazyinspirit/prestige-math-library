---
id: lem-proper-curve-torsion-h0-field-invariance-in-zf
kind: lemma
title: Proper curve torsion H⁰ is invariant under separably closed extension in ZF
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-small-etale-site-of-a-scheme
  - lem-proper-finite-type-field-schemes-have-finite-integer-models-in-zf
  - lem-torsion-h0-has-finite-constructible-witnesses-on-curves-in-zf
  - lem-finite-presented-curve-torsion-h0-model-transfer-in-zf
proof_strategy: direct
axiom_use: No ambient choice is assumed. The finite-presented transfer invokes AC only internally to L and transports finite witnesses.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Étale Cohomology, proper base change context
      url: https://stacks.math.columbia.edu/tag/095S
      locator: Background only; the finite-witness and internal-model H⁰ reconstruction below is locally supplied and does not import proper base change.
---

## Statement

In ZF, let $k\subseteq K$ be specified separably closed fields, let $C/k$ be proper of finite type and dimension at most one, and let $F$ be an arbitrary torsion abelian sheaf on the small étale site of $C$. The natural scalar-extension map
$$\Gamma(C,F)\longrightarrow\Gamma(C_K,F_K)$$
is a bijection. This is a degree-zero sheaf assertion; it does not assert higher cohomology, injective resolutions, arbitrary algebraic closures, or proper base change in other degrees.

## Statement references

[[def-small-etale-site-of-a-scheme]]

## Facts & Assumptions

**Given:** The specified separably closed fields, proper finite-type curve, and torsion étale abelian sheaf.

[F1] A proper finite-type field scheme and any specified finite étale diagram descend to a proper finite integer-coded field model in ZF. [[lem-proper-finite-type-field-schemes-have-finite-integer-models-in-zf]]

[F2] One finite family of torsion $H^0$ sections and equalities has a witness in a finite constructible sheaf $G\to F$ presented by a finite diagram of étale generators and relations. [[lem-torsion-h0-has-finite-constructible-witnesses-on-curves-in-zf]]

[F3] For such a finite algebraically presented diagram over a proper finite-type curve over a finitely generated field, $H^0$ is invariant between specified separably closed overfields. Its proof uses AC only inside $L$ and transports finite witnesses. [[lem-finite-presented-curve-torsion-h0-model-transfer-in-zf]]

## Proof

**Proof technique:** replace one arbitrary section by a finite constructible presentation and transfer only that presentation.

1.1 For surjectivity take one specified $s\in\Gamma(C_K,F_K)$. By [F2], choose a finite generator-relation presentation $G$ on $C$, a map $G\to F$, and $t\in\Gamma(C_K,G_K)$ mapping to $s$. Apply [F1] to the finitely many affine presentations, étale objects, relation maps and equations defining $G$: they descend with $C$ to a proper finite-type $C_0$ over a finitely generated subfield $k_0\subseteq k$, and define the same finite presentation $G_0$ there. The dimension of $C_0$ is at most one: on each finite-type affine field algebra, finite Noether normalization shows Krull dimension is unchanged by field extension. [F1, F2, given, construct, algebra]

2.1 Apply [F3] to the specified extension $k_0\subseteq k\subseteq K$, the proper $C_0$ and its finite presentation $G_0$. It gives $u\in\Gamma(C,G)$ with $u_K=t$. The image of $u$ in $\Gamma(C,F)$ therefore restricts to $s$. No arbitrary sheaf $F$ or infinite family of its sections is placed inside $L$. [F3, step 1.1, given, construct]

3.1 For injectivity take $s\in\Gamma(C,F)$ whose pullback to $K$ is zero. Apply the base-section clause of [F2] to the one equality $s_K=0$. It gives a finite presentation $G\to F$ and a base lift $u\in\Gamma(C,G)$ mapping to $s$, with $u_K=0$ already in $\Gamma(C_K,G_K)$. Descend that finite presentation and $C$ by [F1] as in step 1.1. The injectivity in [F3] then gives $u=0$, hence $s=0$. Thus the scalar-extension map is injective and, by step 2.1, bijective. [F1, F2, F3, step 1.1, step 2.1, given, construct, algebra] ∎
