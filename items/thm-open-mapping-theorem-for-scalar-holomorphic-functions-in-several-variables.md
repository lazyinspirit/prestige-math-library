---
id: thm-open-mapping-theorem-for-scalar-holomorphic-functions-in-several-variables
kind: theorem
title: "A nonconstant scalar holomorphic function on a domain in $\\mathbb{C}^m$ is an open map"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-in-several-complex-variables, thm-chain-rule-for-holomorphic-maps-in-several-variables, thm-open-mapping-theorem-holomorphic-functions, def-holomorphic-function-in-several-complex-variables, def-balls-and-polydiscs-in-complex-euclidean-space, def-convex-subset-of-euclidean-space, def-homeomorphism-and-open-maps]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Jabbari, Notes for Analysis and Geometry of Several Complex Variables, Thm. 22(9)"
      url: "https://www.cimat.mx/~mohammad.jabbari/course-SCV.pdf"
    - title: "J. Lebl, Tasty Bits of Several Complex Variables, v4.4, §1.2"
      url: "https://www.jirka.org/scv/scv.pdf"
pipeline_run: null
---

## Statement

Let $m \ge 1$, let $U \subseteq \mathbb{C}^m$ be a nonempty connected open set,
and let $f : U \to \mathbb{C}$ be holomorphic and nonconstant. Then $f$ is an
open map: for every open set $O \subseteq U$, the image $f(O)$ is open in
$\mathbb{C}$.

This theorem is about **scalar-valued** holomorphic functions. It asserts nothing
for holomorphic maps into $\mathbb{C}^n$ with $n \ge 2$.

## Facts & Assumptions

**Given:** A nonempty connected open set $U \subseteq \mathbb{C}^m$, a nonconstant holomorphic function $f : U \to \mathbb{C}$, and an open set $O \subseteq U$.

[L1] A holomorphic function vanishing on a nonempty open subset of a connected open set in $\mathbb{C}^m$ vanishes identically ([[thm-identity-theorem-in-several-complex-variables]]).

[L2] The composite of holomorphic maps is holomorphic and its complex Jacobian is the product ([[thm-chain-rule-for-holomorphic-maps-in-several-variables]]).

[L3] Every nonconstant holomorphic function on a one-variable complex domain is an open map ([[thm-open-mapping-theorem-holomorphic-functions]]).

[L4] Balls in $\mathbb{C}^m$ are the Euclidean balls of [[def-balls-and-polydiscs-in-complex-euclidean-space]], and convex subsets are those containing the segment between any two of their points ([[def-convex-subset-of-euclidean-space]]).

[L5] An open map sends open sets to open sets ([[def-homeomorphism-and-open-maps]]).

## Proof

**Proof technique:** direct.

1.1 Let $a\in O$. Choose an open ball $B\subseteq O$ centred at $a$. If $f$ were constant on $B$, then $f-f(a)$ would vanish on the nonempty open set $B$, and [L1] would force $f$ to be constant on all of $U$, contrary to the hypothesis. So there is $b\in B$ with $f(b)\ne f(a)$. [given, L1, L4]

2.1 Define $W:=\{\xi\in\mathbb C:a+\xi(b-a)\in B\}$. Because $B$ is convex, $W$ is a nonempty open disc about $0$ containing $1$. The affine map $\ell(\xi):=a+\xi(b-a)$ is holomorphic, so [L2] makes $g:=f\circ\ell$ holomorphic on $W$; and $g(0)=f(a)\ne f(b)=g(1)$, so $g$ is nonconstant. [step 1.1, L2, L4]

3.1 By [L3], the image $g(W)$ is open in $\mathbb C$ and contains $g(0)=f(a)$. Since $g(W)\subseteq f(B)\subseteq f(O)$, the point $f(a)$ is interior to $f(O)$. As $a\in O$ was arbitrary, every point of $f(O)$ is interior, so $f(O)$ is open by [L5]. Therefore $f$ is an open map. [step 2.1, L3, L5] ∎

## Remarks

- **Why the theorem is scalar-valued.** The proof restricts to a complex line and then invokes the one-variable open mapping theorem. That argument produces an open image only in $\mathbb{C}$, not for maps into higher-dimensional targets.
