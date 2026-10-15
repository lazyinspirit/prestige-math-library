---
id: thm-complex-coordinate-map-preserves-real-total-differentiability
kind: theorem
title: Real total derivatives transport through the complex coordinate isometry
status: draft
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
dependency_level: 2
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
    - title: J. Lebl, Guide to Cultivating Complex Analysis, Sections 2.1.2 and 2.2.2
      url: https://www.jirka.org/ca/ca.pdf
---

## Statement

Let $U\subseteq\mathbb C$ be open in $d_{\mathbb C}$, let $z\in U$, and let
$f:U\to\mathbb C$. Define
$f_{\mathbb R}:=\Phi\circ f\circ\Phi^{-1}:\Phi[U]\to\mathbb R^2$. The set
$\Phi[U]$ is open by
[[thm-complex-coordinate-isometry-and-topology-transport]]. A map
$L:\mathbb C\to\mathbb C$ is **real-linear** when it preserves addition and
multiplication by embedded real scalars. Then $f_{\mathbb R}$ is totally
differentiable at $\Phi(z)$ exactly when there is a real-linear $L$ such that,
with $r(h):=f(z+h)-f(z)-L(h)$,

$$\frac{|r(h)|}{|h|}\longrightarrow 0$$

as $h\to0$, $h\ne0$, and $z+h\in U$. In that case

$$Df_{\mathbb R}(\Phi(z))=\Phi\circ L\circ\Phi^{-1}.$$

The map $L$ need not be complex-linear; this is a real total-derivative
statement.

## Facts & Assumptions

**Given:** The open set $U$, the point $z\in U$, the map $f$, and the coordinate
map $\Phi$.

[F1] [[thm-complex-coordinate-isometry-and-topology-transport]] and [[thm-complex-coordinate-map-preserves-real-scalar-multiplication]]: $\Phi$ is a bijective real-linear isometry, and $\Phi[U]$ is open.

[F2] [[def-euclidean-linear-map]]: A linear map between Euclidean coordinate spaces preserves real linear combinations.

[F3] [[def-total-derivative-in-euclidean-space]]: Total differentiability is a linear first-order approximation whose Euclidean remainder divided by the input norm tends to zero.

## Proof

1.1 The inverse $\Phi^{-1}$ is real-linear: for arbitrary $u,v\in\mathbb R^2$, choose $\zeta,\omega\in\mathbb C$ with $\Phi(\zeta)=u$ and $\Phi(\omega)=v$, possible by [F1]. Additivity of $\Phi$ gives $\Phi^{-1}(u+v)=\Phi^{-1}(\Phi(\zeta+\omega))=\zeta+\omega=\Phi^{-1}u+\Phi^{-1}v$; for every $\lambda\in\mathbb R$, its real homogeneity gives $\Phi^{-1}(\lambda u)=\Phi^{-1}(\Phi(\lambda\zeta))=\lambda\zeta=\lambda\Phi^{-1}u$. [given, F1, algebra, choose]

2.1 The correspondence $L\mapsto \Phi\circ L\circ\Phi^{-1}$ sends each real-linear $L$ to a real-linear map $A$ by [F1], [F2], and step 1.1. Conversely, for each real-linear $A$, the map $L=\Phi^{-1}\circ A\circ\Phi$ is real-linear by the same facts, and the two constructions are inverse because $\Phi^{-1}\circ\Phi$ and $\Phi\circ\Phi^{-1}$ are identity maps. Thus this is a bijection between the real-linear maps on the two coordinate spaces. [given, F1, F2, step 1.1, algebra]

3.1 For corresponding $L,A$ from step 2.1, put $k=\Phi(h)$. Additivity gives $\Phi(z+h)=\Phi(z)+k$. If $r(h)=f(z+h)-f(z)-L(h)$ and $\rho(k)=f_{\mathbb R}(\Phi(z)+k)-f_{\mathbb R}(\Phi(z))-A(k)$, then the definition of $f_{\mathbb R}$ and $A(k)=\Phi(L(h))$ give $\rho(k)=\Phi(r(h))$. The isometry [F1] therefore gives $\|\rho(k)\|_2/\|k\|_2=|r(h)|/|h|$ for $h\ne0$; the bijective isometry also sends $h\to0$ exactly to $k\to0$ and sends the condition $z+h\in U$ exactly to $\Phi(z)+k\in\Phi[U]$. Hence the two remainder limits are equivalent. [given, F1, step 2.1, algebra]

4.1 By [F3], total differentiability of $f_{\mathbb R}$ at $\Phi(z)$ means that some real-linear $A$ has Euclidean remainder ratio tending to zero. Steps 2.1 and 3.1 identify such maps $A$ bijectively with real-linear $L$ and identify their remainder ratios, so this condition is equivalent to existence of the stated $L$ with the complex remainder ratio tending to zero. For each corresponding pair, the Euclidean derivative is $A=\Phi\circ L\circ\Phi^{-1}$. [given, F3, step 2.1, step 3.1] ∎
