---
id: ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely
kind: example
title: "Generic affine hyperplanes meet an embedded submanifold transversely"
status: published
dependency_level: 7
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [ prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding, cor-generic-translations-of-a-map-to-euclidean-space-are-transverse, prop-transversality-to-a-point-is-the-regular-value-condition, def-transverse-embedded-submanifolds, def-countable-choice, prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold ]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-step2-root-published-recording/receipts/ex-generic-affine-hyperplanes-meet-an-embedded-submanifold-transversely.json
---

## Example

Assume the Axiom of Countable Choice. Let $S\subseteq\mathbb R^n$ be a smooth embedded submanifold and let
$\lambda:\mathbb R^n\to\mathbb R$ be a nonzero linear functional. For
$a\in\mathbb R$, define $H_a=\{x\in\mathbb R^n:\lambda(x)+a=0\}$. Then $S$
meets $H_a$ transversely for every $a$ outside a null subset of $\mathbb R$.
In particular, the good parameters are dense. For the unit circle
$S^1\subseteq\mathbb R^2$ and $\lambda(x,y)=-x$, the vertical line
$H_a=\{x=a\}$ meets $S^1$ transversely except at $a=\pm1$; outside
$[-1,1]$ the intersection is empty, and inside $(-1,1)$ it consists of two
transverse points.

## Facts & Assumptions

**Given:** Countable Choice ([[def-countable-choice]]), a smooth embedded submanifold $S\subseteq\mathbb R^n$, a nonzero linear functional $\lambda:\mathbb R^n\to\mathbb R$, and a real parameter $a$.

[A1] Countable Choice is the hypothesis for the generic-translation corollary ([[def-countable-choice]]).

[F1] For a smooth map to Euclidean space, outside a null set of translations the translated map is transverse to a given embedded submanifold ([[cor-generic-translations-of-a-map-to-euclidean-space-are-transverse]]).

[F2] Transversality to a point is equivalent to the regular-value condition ([[prop-transversality-to-a-point-is-the-regular-value-condition]]).

[F3] Embedded submanifolds are transverse when their tangent spaces span the ambient tangent space ([[def-transverse-embedded-submanifolds]]).

[F4] The inclusion of an embedded submanifold is a smooth embedding ([[prop-the-inclusion-of-an-embedded-submanifold-is-a-smooth-embedding]]).

[F5] The complement of a null set in the positive-dimensional manifold $\mathbb R$ is dense ([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

## Verification
**Proof technique:** direct.

1.1 The restriction $g:=\lambda|_S$ is smooth by [F4]. Choose linear coordinates on $\mathbb R^n$ with first coordinate $\lambda$; in them, $H_a$ is the affine slice $\{-a\}\times\mathbb R^{n-1}$, so it is an embedded hyperplane with tangent space $\ker\lambda$. Apply [F1] to $g$ and the point $\{0\}\subset\mathbb R$. Outside a null set of translation parameters $a$, $g+a$ is transverse to $\{0\}$; by [F2], $0$ is a regular value of $g+a$. Thus for every $p\in S$ with $\lambda(p)+a=0$, the derivative $d\lambda|_{T_pS}$ is surjective. For any $v\in\mathbb R^n$ choose $u\in T_pS$ with $\lambda(u)=\lambda(v)$; then $v-u\in\ker\lambda$, so $T_pS+T_pH_a=\mathbb R^n$. Thus [F3] gives $S\pitchfork H_a$. If $S\cap H_a$ is empty, transversality is vacuous and still holds. Since the excluded set of parameters is null, [F5] also makes the good parameters dense. [A1, F1, F2, F3, F4, F5, given, construct, algebra]

1.2 In the circle case with $\lambda(x,y)=-x$, when $|a|<1$ the intersection points are $(a,\pm\sqrt{1-a^2})$. A tangent vector at $(x,y)$ is $(-y,x)$, and $d\lambda(-y,x)=y\ne0$ at both. When $|a|>1$ the intersection is empty. At $a=\pm1$ it is a single tangent point with $y=0$, where $d\lambda$ vanishes on the circle tangent, so transversality fails. The exceptional set is exactly $\{-1,1\}$. [F3, given, algebra]

2.1 Thus generic translates of every fixed nonzero linear functional meet any smooth embedded submanifold transversely, with the circle computation as a concrete case. [step 1.1, step 1.2] ∎
