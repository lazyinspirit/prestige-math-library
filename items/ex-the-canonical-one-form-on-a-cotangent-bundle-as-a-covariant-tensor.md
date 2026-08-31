---
id: ex-the-canonical-one-form-on-a-cotangent-bundle-as-a-covariant-tensor
kind: example
title: "The canonical one-form on a cotangent bundle as a covariant tensor"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-smooth-differential-k-form,
       def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "John M. Lee, Introduction to Smooth Manifolds, 2nd ed."
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
---

## Example

On $T^*\mathbb R^2$ with coordinates $(x,y,\xi_1,\xi_2)$, the canonical
$1$-form is

$$
\lambda=\xi_1\,dx+\xi_2\,dy.
$$

At a point $(p,\xi)$ and a tangent vector $v$ to $T^*\mathbb R^2$, it satisfies

$$
\lambda_{(p,\xi)}(v)=\xi(d\pi(v)),
$$

where $\pi:T^*\mathbb R^2\to\mathbb R^2$ is the bundle projection.

## Facts & Assumptions

**Given:** The cotangent bundle projection $\pi:T^*\mathbb R^2\to\mathbb R^2$ and a point $(x,y,\xi_1,\xi_2)$.

[F1] A differential $1$-form is a smooth section of the cotangent bundle ([[def-smooth-differential-k-form]]).

[F2] The cotangent bundle fibre at $(x,y)$ consists of covectors on $T_{(x,y)}\mathbb R^2$ ([[def-cotangent-space-and-cotangent-bundle-as-a-disjoint-union]]).

## Verification
**Proof technique:** direct.

1.1 Write $v=a\,\partial_x+b\,\partial_y+c\,\partial_{\xi_1}+d\,\partial_{\xi_2}$ at $(x,y,\xi_1,\xi_2)$. Then $d\pi(v)=a\,\partial_x+b\,\partial_y$, so the covector $\xi=\xi_1\,dx+\xi_2\,dy$ gives $\xi(d\pi(v))=\xi_1a+\xi_2b$. [F2, given, algebra]
2.1 The form $\lambda=\xi_1\,dx+\xi_2\,dy$ takes the same value on $v$, namely $\lambda(v)=\xi_1a+\xi_2b$. Thus $\lambda_{(p,\xi)}(v)=\xi(d\pi(v))$. Its coefficients are smooth coordinate functions, so [F1] makes it a smooth $1$-form. [F1, step 1.1, algebra]
3.1 Therefore the canonical one-form is a concrete covariant tensor on the cotangent bundle. [step 2.1] ∎