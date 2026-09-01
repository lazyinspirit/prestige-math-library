---
id: lem-a-generic-linear-projection-preserves-injectivity-and-immersion
kind: lemma
title: "A generic linear projection preserves injectivity and immersion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-secant-and-tangent-direction-maps-of-an-euclidean-embedding,
       prop-the-image-of-a-lower-dimensional-c1-manifold-is-null,
       prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed., Lemma 6.13"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, Part 11"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes-11.pdf"
---

## Statement

Let $f:M^n\to\mathbb R^N$ be a smooth embedding with $N>2n+1$. Then the set of
unit vectors $u\in S^{N-1}$ for which the orthogonal projection
$$
P_u:\mathbb R^N\to u^\perp
$$
makes $P_u\circ f$ an injective immersion is dense in $S^{N-1}$.

## Facts & Assumptions

**Given:** A smooth embedding $f:M^n\to\mathbb R^N$ with $N>2n+1$.

[F1] The secant-direction map $\sigma_f$ is defined on
$(M\times M)\setminus\Delta_M$, and the tangent-direction map $\tau_f$ is
defined on $TM\setminus0_M$
([[def-secant-and-tangent-direction-maps-of-an-euclidean-embedding]]).

[L1] The image of a $C^1$ manifold of dimension strictly smaller than the
target-manifold dimension is a null set
([[prop-the-image-of-a-lower-dimensional-c1-manifold-is-null]]).

[L2] A null subset of a positive-dimensional manifold has dense complement
([[prop-a-null-set-has-dense-complement-in-a-positive-dimensional-manifold]]).

## Proof
**Proof technique:** direct.

1.1 The manifold $(M\times M)\setminus\Delta_M$ has dimension $2n$, and $TM\setminus0_M$ also has dimension $2n$. Since $S^{N-1}$ has dimension $N-1>2n$, [L1] shows that both images $\sigma_f\bigl((M\times M)\setminus\Delta_M\bigr)$ and $\tau_f(TM\setminus0_M)$ are null subsets of $S^{N-1}$. [F1, L1, given]

2.1 By [L2], the complement of the union of those two bad sets is dense in $S^{N-1}$. Fix $u$ in that complement. [L2, step 1.1, choose]

3.1 If $P_u(f(p))=P_u(f(q))$, then $f(q)-f(p)$ is parallel to $u$. Because $f$ is injective, either $p=q$ or $u=\pm\sigma_f(p,q)$. The second alternative is impossible by step 2.1, so $p=q$. Thus $P_u\circ f$ is injective. [F1, step 2.1, algebra]

3.2 If $d(P_u\circ f)_p(v)=0$ for some $v\ne0$, then $df_p(v)$ is parallel to $u$, so $u=\pm\tau_f(p,v)$. This again contradicts step 2.1. Hence $d(P_u\circ f)_p$ is injective for every $p$, and $P_u\circ f$ is an immersion. [F1, step 2.1, algebra]

4.1 Therefore every $u$ outside the secant and tangent images gives an injective immersion after projection, and such $u$ form a dense set. [step 2.1, step 3.1, step 3.2] ∎
