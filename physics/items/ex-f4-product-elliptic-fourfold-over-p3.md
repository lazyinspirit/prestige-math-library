---
id: ex-f4-product-elliptic-fourfold-over-p3
kind: example
title: "A product elliptic fourfold over projective three-space"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: mathematics
library: physics
category: string-theory
axiom_strength: "Full AC is inherited from the smooth- and proper-morphism suppliers."
deps:
  - def-f4-genus-one-fibration
  - def-f4-elliptic-fibration-with-section
  - def-axiom-of-choice
  - def-flat-morphism-schemes
  - def-proper-morphism
  - def-smooth-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - thm-smooth-morphisms-stable-base-change-composition
  - thm-projective-space-proper-over-base
  - lem-closed-immersion-proper
  - lem-proper-stable-base-change
  - lem-proper-stable-composition
  - prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure
  - thm-affine-fibre-product-tensor-ring
  - lem-proper-cohomology-field-extension
dependency_roles:
  def-f4-genus-one-fibration: mathematical-premise
  def-f4-elliptic-fibration-with-section: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-flat-morphism-schemes: mathematical-premise
  def-proper-morphism: mathematical-premise
  def-smooth-morphism-schemes: mathematical-premise
  def-relative-dimension-smooth-morphism: mathematical-premise
  thm-smooth-morphisms-stable-base-change-composition: mathematical-premise
  thm-projective-space-proper-over-base: mathematical-premise
  lem-closed-immersion-proper: mathematical-premise
  lem-proper-stable-base-change: mathematical-premise
  lem-proper-stable-composition: mathematical-premise
  prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure: mathematical-premise
  thm-affine-fibre-product-tensor-ring: mathematical-premise
  lem-proper-cohomology-field-extension: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Example

Assume the full Axiom of Choice. Let $E/\mathbb C$ be a smooth projective geometrically integral genus-one curve with a specified identity point $O$, and assume its elliptic-curve group structure is part of the data. Let $B=\mathbb P^3_{\mathbb C}$, $Y=E\times_{\mathbb C}B$, and $\pi=\operatorname{pr}_2:Y\to B$. Then $B$ is a connected nonsingular projective threefold, $Y$ is a smooth projective fourfold, and $\pi$ is a proper flat surjective genus-one fibration with regular section $s(b)=(O,b)$. All statements are algebraic geometry over $\mathbb C$; this example asserts no Calabi–Yau property, string compactification, physical spectrum, or empirical claim.

## Facts & Assumptions

**Given:** Full AC; a smooth projective geometrically integral genus-one curve $E/\mathbb C$ with identity $O$ and supplied elliptic-curve group structure; $B=\mathbb P^3_{\mathbb C}$; and $Y=E\times_{\mathbb C}B$.

[A1] Full AC is the choice-function axiom of [[def-axiom-of-choice]]; it is used through the smooth stability and projective-space properness suppliers below.

[F1] A flat genus-one fibration is proper, flat, surjective, and has a smooth geometrically integral genus-one geometric generic fiber; a regular section is a morphism right-inverse to the fibration ([[def-f4-genus-one-fibration]], [[def-f4-elliptic-fibration-with-section]]).

[F2] A smooth morphism is flat, smooth morphisms are stable under base change and composition, and their relative dimensions are locally constant and add under composition ([[def-smooth-morphism-schemes]], [[thm-smooth-morphisms-stable-base-change-composition]], [[def-relative-dimension-smooth-morphism]]).

[F3] Projective space is proper over its base, closed immersions are proper, and proper morphisms are stable under base change and composition ([[thm-projective-space-proper-over-base]], [[lem-closed-immersion-proper]], [[lem-proper-stable-base-change]], [[lem-proper-stable-composition]]).

[F4] Products of real smooth manifolds carry the canonical product smooth structure, with real dimension the sum of the factor dimensions ([[prop-products-of-smooth-manifolds-have-a-canonical-product-smooth-structure]]). The holomorphic product charts needed here are constructed in step 1.2.

[F5] A product of affine schemes is the spectrum of the tensor product of their coordinate rings ([[thm-affine-fibre-product-tensor-ring]]).

[F6] If $X$ is proper over a field $k$, $K/k$ is any field extension, and $\mathcal F$ is coherent, then $H^q(X,\mathcal F)\otimes_k K\cong H^q(X_K,\mathcal F_K)$ for all $q\ge0$, assuming full AC ([[lem-proper-cohomology-field-extension]]).

## Proof

**Proof technique:** verify the base, total space, and projection separately.

1.1 The standard affine charts of $\mathbb P^3_{\mathbb C}$ are copies of $\mathbb A^3_{\mathbb C}$, so $B$ is smooth of dimension three. Projective space is connected and projective. Thus $B$ is a connected nonsingular projective threefold. [given, algebra]

1.2 The projection $Y\to B$ is smooth of relative dimension one by base change in [F2]; composing with the smooth threefold $B\to\operatorname{Spec}\mathbb C$ gives $\dim Y=3+1=4$ by additivity in [F2]. Analytically, products of a holomorphic coordinate chart of $E$ in $\mathbb C$ and a standard chart of $B$ in $\mathbb C^3$ have images open in $\mathbb C^4$. Their transition maps act separately in the two coordinates, hence are holomorphic with holomorphic inverses. They give a complex four-manifold structure whose underlying real smooth structure is the product structure of [F4]. To prove projectivity, choose a projective embedding $E\hookrightarrow\mathbb P^N_{\mathbb C}$. The Segre map sends $([X_i],[T_j])$ to the matrix $[X_iT_j]$. Its image is the closed locus cut out by the $2\times2$ minors. On a chart where $Z_{i_0j_0}\ne0$, the inverse is $[X_i]=[Z_{ij_0}]$ and $[T_j]=[Z_{i_0j}]$; the minors imply every entry is proportional to $Z_{ij_0}Z_{i_0j}$, so these regular local inverses give a closed immersion. Base-changing the closed immersion of $E$ shows $E\times B$ is closed in $\mathbb P^N\times\mathbb P^3$, hence the Segre embedding makes $Y$ projective. To verify integrality, cover $E$ by nonempty affine opens $\operatorname{Spec}A$ and use standard affine charts $\mathbb A^3$ of $B$; by [F5] each product chart is $\operatorname{Spec}A[t_1,t_2,t_3]$, whose coordinate ring is a domain. These product opens cover $Y$ and pairwise meet because both factors are integral, so $Y$ is integral. The same argument after every field extension uses geometric integrality of $E$ and $\mathbb P^3$, so $Y$ is geometrically integral and connected. [F2, F4, F5, given]

2.1 The projection $\pi$ is the base change of $E\to\operatorname{Spec}\mathbb C$. By [F2], it is smooth and hence flat. The morphism $E\to\operatorname{Spec}\mathbb C$ is proper: its projective embedding is a closed immersion, projective space is proper, and proper morphisms compose by [F3]. Properness is preserved by base change by [F3], so $\pi$ is proper. [A1, F2, F3, step 1.2]

3.1 The map $s:B\to Y$, $s(b)=(O,b)$, is a morphism and satisfies $\pi\circ s=\operatorname{id}_B$ by the product projections. Thus $\pi$ is surjective and $s$ is a regular section. Each geometric fiber over a geometric point with field $K$ is $E_K$, smooth of pure dimension one by [F2] and geometrically integral by the hypothesis on $E$. The curve $E$ is proper by step 2.1 and $\mathcal O_E$ is coherent, so [F6] gives $H^1(E_K,\mathcal O_{E_K})\cong H^1(E,\mathcal O_E)\otimes_{\mathbb C}K$, of dimension one over $K$. Thus every geometric fiber is genus one, including the geometric generic fiber. [A1, F1, F2, F6, given, step 2.1]

4.1 Steps 1.1–3.1 verify that $B$ and $Y$ have the stated dimensions and projectivity, and that $\pi$ is proper, flat, and surjective with the required geometric generic fiber and regular section. Therefore this is an elliptic genus-one fourfold fibration over $\mathbb P^3_{\mathbb C}$ in the mathematical sense of [F1]. [F1, step 1.1, step 1.2, step 2.1, step 3.1] ∎

## Remarks

This is a product construction from a supplied elliptic curve. It makes no claim about a Weierstrass presentation, a Calabi–Yau condition, a resolved singular model, string-theory compactification, or a physical observable.

Every square below is the Cartesian square defining the fiber of the product projection; the top map is the fiber $E\times\{b\}$ and the bottom map is the chosen geometric point.

```tikzcd
E \times \{b\} \arrow[r] \arrow[d] & E \times B \arrow[d, "\pi"] \\
\{b\} \arrow[r] & B
```
