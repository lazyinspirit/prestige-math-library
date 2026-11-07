---
id: ex-manin-peyre-thin-set-caveat
kind: example
title: Thin exceptional-set correction to the Manin–Peyre prediction
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-thin-set-of-rational-points
  - def-smooth-fano-variety-over-number-field
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - def-relative-projective-space-standard-charts
  - def-very-ample-invertible-sheaf-relative
  - lem-very-ample-implies-ample
  - thm-jacobian-criterion-smooth-morphism
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: Emmanuel Peyre, Points de hauteur bornée, topologie adélique et mesures de Tamagawa, §1
      url: https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf
      locator: §1, thin subsets and the need to remove exceptional accumulating loci.
---

## Example

Define $f:\mathbb P^1_{\mathbb Q}\to\mathbb P^1_{\mathbb Q}$ by $f([X:Y])=[X^2:Y^2]$. Its rational image is
$$f(\mathbb P^1(\mathbb Q))=\{[q^2:1]:q\in\mathbb Q\}\cup\{[1:0]\}.$$
This is a type-II thin subset of $\mathbb P^1(\mathbb Q)$: $f$ is dominant and generically finite of degree $2$, and it has no rational section.

## Example references

[[def-thin-set-of-rational-points]]

[Emmanuel Peyre, §1](https://www.numdam.org/item/JTNB_2003__15_1_319_0.pdf)

## Facts & Assumptions

**Given:** The map $f([X:Y])=[X^2:Y^2]$ over $\mathbb Q$.

[A1] The thin-set supplier is stated for Fano varieties and its current prerequisite chain includes AC. ([[def-axiom-of-choice]], [[def-thin-set-of-rational-points]])

[F2] On $\mathbb P^1$, the canonical line bundle is $\mathcal O(-2)$. ([[def-smooth-projective-dualizing-line-bundle-and-trace]])

[F3] A line bundle pulled back from $\mathcal O(1)$ by a closed immersion into relative projective space is closed H-very ample; the relative ampleness theorem makes it ample over an affine base. ([[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]])

[F4] A smooth projective geometrically integral variety of positive dimension is Fano when its anticanonical line bundle is ample. ([[def-smooth-fano-variety-over-number-field]])

[F5] The standard projective line is projective of dimension one; its two affine-line charts are smooth, and after base change to $\overline{\mathbb Q}$ they are integral with nonempty intersection, so $\mathbb P^1_{\mathbb Q}$ is smooth and geometrically integral. ([[def-relative-projective-space-standard-charts]], [[thm-jacobian-criterion-smooth-morphism]])

[F1] A type-II thin set is the image of rational points under a dominant generically finite morphism of degree at least $2$ with no rational section. ([[def-thin-set-of-rational-points]])

## Verification

1.1 The homogeneous coordinates $X^2,Y^2$ do not vanish simultaneously at any projective point, so they define a morphism. On the affine coordinate $t=X/Y$, its function-field map is $u\mapsto t^2$. The polynomial $T^2-u$ is irreducible over $\mathbb Q(u)$: if $u$ were a square rational function, its valuation at $u=0$ would be even, whereas $v_0(u)=1$. Hence $[\mathbb Q(t):\mathbb Q(u)]=2$ and $f$ is dominant generically finite of degree $2$. [given, algebra]

1.2 If a rational section existed, it would be a rational function $g(t)\in\mathbb Q(t)$ with $g(t)^2=t$. The valuation at $t=0$ would then give $2v_0(g)=1$, which is impossible because $v_0(g)\in\mathbb Z$. Thus $f$ has no rational section. [given, algebra]

1.3 The degree-two Veronese map $[X:Y]\mapsto[X^2:XY:Y^2]$ has image the closed conic $Z_0Z_2=Z_1^2$. On $Z_0\ne0$ its inverse is $[1:Z_1/Z_0]$, and on $Z_2\ne0$ its inverse is $[Z_1/Z_2:1]$; these charts cover the conic, so this map is a closed immersion. Its coordinate sections identify $\mathcal O_{\mathbb P^1}(2)$ with the pullback of $\mathcal O_{\mathbb P^2}(1)$, so [F3] makes it ample. [F3, given, construct]

1.4 The standard affine charts in [F5] identify $\mathbb P^1_{\mathbb Q}$ with a projective variety of dimension one. Each chart is an affine line and hence smooth; after base change to $\overline{\mathbb Q}$ the two charts remain integral and have nonempty intersection, so their union is geometrically integral. Therefore $\mathbb P^1_{\mathbb Q}$ is smooth projective geometrically integral of dimension one. [F5]

2.1 By [F2], $-K_{\mathbb P^1}=\mathcal O_{\mathbb P^1}(2)$. This is ample by step 1.3, and step 1.4 supplies the remaining hypotheses of the Fano definition [F4]. Thus $\mathbb P^1_{\mathbb Q}$ is Fano. [F2, F4, step 1.3, step 1.4]

3.1 By [F1], together with steps 1.1, 1.2 and 2.1, the image $f(\mathbb P^1(\mathbb Q))$ is a type-II thin set. [F1, step 1.1, step 1.2, step 2.1] ∎
