---
id: thm-complex-coordinate-map-preserves-real-total-differentiability
kind: theorem
title: Real total derivatives transport through the complex coordinate isometry
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
- thm-complex-coordinate-isometry-and-topology-transport
- thm-complex-coordinate-map-preserves-real-scalar-multiplication
- def-total-derivative-in-euclidean-space
- def-euclidean-linear-map
justified_by: []
aliases: []
proof_strategy: direct
sources:
  references:
  - title: J. Lebl, Guide to Cultivating Complex Analysis
    url: https://www.jirka.org/ca/ca.pdf
---

## Statement

Let $U\subseteq\mathbb C$ be open in $d_{\mathbb C}$, $z\in U$, and $f:U\to\mathbb C$. Set $f_{\mathbb R}=\Phi\circ f\circ\Phi^{-1}:\Phi[U]\to\mathbb R^2$. A map $L:\mathbb C\to\mathbb C$ is called real linear here when it preserves addition and real scalar multiplication. Then $f_{\mathbb R}$ is totally differentiable at $\Phi(z)$ if and only if there is such an $L$ with

$$f(z+h)=f(z)+L(h)+r(h),\qquad \frac{|r(h)|}{|h|}\longrightarrow0$$

as $h\to0$, $h\ne0$, $z+h\in U$. In this case

$$Df_{\mathbb R}(\Phi(z))=\Phi\circ L\circ\Phi^{-1}.$$

We denote the transported map $L$ by $D_{\mathbb R}f(z)$ (or $Df(z)$ when real differentiation is explicit). It need not be complex linear.

## Facts & Assumptions

**Given:** $U,z,f$ and the indicated coordinate map.

[F1] $\Phi$ and its inverse are real linear isometries and $\Phi[U]$ is open ([[thm-complex-coordinate-isometry-and-topology-transport]], [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]).

[F2] Euclidean real linearity and total differentiation use the linear-remainder definitions ([[def-euclidean-linear-map]], [[def-total-derivative-in-euclidean-space]]).

## Proof

1.1 If $L$ is real linear, so is $A=\Phi L\Phi^{-1}$ by [F1]. With $k=\Phi(h)$, apply $\Phi$ to the displayed remainder identity: $f_{\mathbb R}(\Phi(z)+k)=f_{\mathbb R}(\Phi(z))+Ak+\Phi(r(h))$. Isometry gives $\|\Phi(r(h))\|_2/\|k\|_2=|r(h)|/|h|$. Thus the stated remainder limit is exactly the total derivative limit in [F2]. [given, F1, F2, algebra]

2.1 Conversely, if $A=Df_{\mathbb R}(\Phi(z))$, let $L=\Phi^{-1}A\Phi$. This is real linear. Apply $\Phi^{-1}$ to the Euclidean remainder identity. The same equality of norm quotients gives the required complex-valued remainder limit, proving the reverse implication and derivative formula. [F1, F2, step 1.1] ∎
