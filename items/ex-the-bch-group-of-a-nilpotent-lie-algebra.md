---
id: ex-the-bch-group-of-a-nilpotent-lie-algebra
kind: example
title: The BCH group of a nilpotent Lie algebra
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lie-third-fundamental-theorem, thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism, thm-baker-campbell-hausdorff]
landmark: false
proof_strategy: direct
axiom_base: ZF + AC_omega
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Knapp, Lie Groups Beyond an Introduction, nilpotent Lie groups"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Chapter I, Theorem 1.127, printed pp. 112–113"
---

## Example

Let $\mathfrak n$ be a finite-dimensional nilpotent real Lie algebra. On its underlying vector space set $x*y=\operatorname{BCH}(x,y)$. The BCH series truncates to a polynomial group law with identity $0$ and inverse $-x$; the group is connected and simply connected and has Lie algebra $\mathfrak n$.

This item is stated under $\mathsf{ZF}+\mathsf{AC}_\omega$.

## Facts & Assumptions

**Given:** A finite-dimensional real nilpotent Lie algebra.

[L1] In exponential coordinates, the BCH series gives the local multiplication
wherever the local logarithm is defined ([[thm-baker-campbell-hausdorff]]).

[L2] Under countable choice, every finite-dimensional real Lie algebra has a connected simply connected integration ([[thm-lie-third-fundamental-theorem]]).

[L3] The exponential map of a connected simply connected group with nilpotent
Lie algebra is a global diffeomorphism; in these coordinates multiplication is
the BCH polynomial, which terminates after finitely many bracket lengths
([[thm-the-exponential-map-of-a-connected-simply-connected-nilpotent-lie-group-is-a-diffeomorphism]]).

## Verification

**Proof technique:** global BCH coordinates.

1.1 If $\mathfrak n$ has class $c$, every Lie monomial of bracket length greater than $c$ vanishes. Thus the BCH expression supplied globally by [L3] is a finite polynomial. Its universal identities give $\operatorname{BCH}(x,0)=x=\operatorname{BCH}(0,x)$ and $\operatorname{BCH}(x,-x)=0$. [L3, given, algebra]

2.1 Let $N$ be the connected simply connected integration supplied by [L2]. By [L3], $\exp:\mathfrak n\to N$ is a diffeomorphism and the transported global product $x*y=\log(\exp x\exp y)$ is the truncated BCH polynomial; this agrees with the local formula in [L1]. Associativity, identity $0$, and inverse $-x$ follow from the laws of $N$. [L1, L2, L3, step 1.1]

3.1 The underlying manifold is $\mathfrak n\cong\mathbb R^{\dim\mathfrak n}$, hence is connected and simply connected, including dimension zero. The antisymmetric part of the quadratic BCH term is $[x,y]$, so differentiating the commutator recovers the original bracket. [L1, step 2.1, algebra]

4.1 In the Heisenberg algebra, $$(ae+bf+cz)*(a'e+b'f+c'z)=(a+a')e+(b+b')f+\left(c+c'+\frac12(ab'-ba')\right)z,$$ because brackets of length three vanish. This is a concrete nonabelian instance. The declared $\mathsf{AC}_\omega$ is exactly that inherited through [L2]–[L3]; the finite calculation adds no choice. [L2, L3, step 3.1, algebra] ∎