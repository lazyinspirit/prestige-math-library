---
id: lem-simplicial-chain-maps-carried-by-specified-cones-are-chain-homotopic
kind: lemma
title: "Simplicial chain maps carried by specified cones are chain homotopic"
status: published
origin: pipeline
deps: ["lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction", "def-chain-homotopy"]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "C. R. F. Maunder, Algebraic Topology"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/maunder.pdf"
---

## Statement

Assign to each nonempty simplex $\sigma$ of $K$ a cone subcomplex $\Phi(\sigma)\subseteq L$ with a specified augmented contraction $c_\sigma$. Suppose $\Phi(\tau)\subseteq\Phi(\sigma)$ whenever $\varnothing\ne\tau\subseteq\sigma$. If augmentation-preserving chain maps $f,g:C_*(K)\to C_*(L)$ are carried by $\Phi$ (their values on $\sigma$ are supported in $\Phi(\sigma)$), then a carried chain homotopy $h$ satisfies $f-g=\partial h+h\partial$, with $h_{-1}=0$.

## Source locators

4.3.9 proof, p.119, carried induction; specialized cone version.


## Facts & Assumptions

[F1] A specified cone contraction fills each augmented cycle. [[lem-an-augmented-simplicial-cone-has-an-explicit-chain-contraction]].

[F2] The equation is the definition of chain homotopy. [[def-chain-homotopy]].


## Proof

**Given:** Nested cone carriers with specified contractions, and augmentation-preserving carried chain maps $f,g$.

1.1 Set $h_{-1}=0$. For an oriented vertex $s$, $z=f(s)-g(s)$ has augmentation $1-1=0$. It lies in its carrier, so $h_0(s)=c_s z$ satisfies $\partial h_0(s)=z$, using $\partial c_s+c_s\partial=1$. Changing the sign of the generator changes $h_0$ by the same sign. [F1]

2.1 Suppose $h$ is defined through degree $n-1$ with $\partial h+h\partial=f-g$ there. For an oriented $n$-simplex $s$ put $z=f(s)-g(s)-h(\partial s)$. The nesting of the carriers puts all summands in $C_n(\Phi(s))$. Since $f,g$ commute with boundary, $\partial z=(f-g)(\partial s)-\partial h(\partial s)=h\partial^2s=0$. Here $\partial^2=0$ is part of the given chain complexes. [step 1.1, given]

3.1 Define $h_n(s)=c_s z$. The contraction identity gives $\partial h_n(s)=z-c_s\partial z=z$, so $\partial h_n(s)+h_{n-1}(\partial s)=f(s)-g(s)$. The formula is alternating in the original oriented representative: the boundary and $f,g$ are alternating, the already defined $h$ is linear, and $c_s$ depends only on the underlying face. It therefore defines a homomorphism without choosing orientations on all simplices. Induction defines all degrees, carried by $\Phi$, with the asserted identity; in degree $-1$ both maps are the identity on $\mathbb Z$, so their difference is zero. This is a chain homotopy by definition. [F1, F2, step 2.1] ∎
