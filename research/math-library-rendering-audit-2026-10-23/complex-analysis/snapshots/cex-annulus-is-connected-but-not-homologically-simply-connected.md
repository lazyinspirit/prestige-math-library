---
id: cex-annulus-is-connected-but-not-homologically-simply-connected
kind: counterexample
title: "A connected plane domain that is not homologically simply connected"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-homologically-simply-connected-complex-domain, def-null-homologous-and-homologous-complex-cycles, thm-winding-number-circle-traversed-k-times, cor-normalized-circle-integral-about-its-centre-is-one, def-complex-domain, lem-plane-exterior-of-a-closed-disc-is-path-connected, def-integration-and-index-of-complex-chain, def-complex-chain-and-cycle, cor-euclidean-spheres-are-path-connected, lem-radial-normalisation-is-continuous, def-euclidean-spheres-and-closed-balls, def-path-connected, thm-path-connected-implies-connected, lem-continuity-is-local-and-pastes, lem-complex-conjugation-and-modulus-laws, def-metric-topology, def-metric-ball]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
verification:
  audited: 2026-08-26
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Complex Analysis, Ch. 4 §4.3"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement refuted

Every complex domain is homologically simply connected.

## Facts & Assumptions

**Given:** The annulus $A=\{z\in\mathbb C:\tfrac12<|z|<2\}$ and the contour $C(t)=\exp(it)$ on $[0,2\pi]$, taken as the chain with the single term $(1,C)$.

[L1] A complex domain is homologically simply connected when every cycle with trace in it is null-homologous in it ([[def-homologically-simply-connected-complex-domain]]).

[L2] A cycle $\Gamma$ with trace in an open $\Omega$ is null-homologous in $\Omega$ when $n(\Gamma,q)=0$ for every $q\in\mathbb C\setminus\Omega$ ([[def-null-homologous-and-homologous-complex-cycles]]).

[L3] For $a\in\mathbb C$, $r>0$ and $k\in\mathbb Z$, the contour $a+r\exp(ikt)$ on $[0,2\pi]$ is a closed complex contour with index $k$ for $|z-a|<r$ and $0$ for $|z-a|>r$, and with trace $\{|z-a|=r\}$ when $k\ne0$ ([[thm-winding-number-circle-traversed-k-times]]).

[L4] For a positively oriented circle $a+r\exp(it)$ with $r>0$, $(2\pi i)^{-1}\int_\gamma dz/(z-a)=1$ ([[cor-normalized-circle-integral-about-its-centre-is-one]]).

[L5] A complex domain is a nonempty, connected, open subset of $\mathbb C$ ([[def-complex-domain]]).

[L6] For $c\in\mathbb C$ and $R\ge0$ the set $\{z:|z-c|>R\}$ is path-connected ([[lem-plane-exterior-of-a-closed-disc-is-path-connected]]).

[L7] A single closed contour with coefficient $1$ is a cycle whose trace is that contour's trace ([[def-complex-chain-and-cycle]]), and its index is the winding number of that contour ([[def-integration-and-index-of-complex-chain]]).

[L8] For $n\ge2$ the unit sphere $S^{n-1}\subseteq\mathbb R^n$ is path-connected ([[cor-euclidean-spheres-are-path-connected]]); the map $x\mapsto x/\lVert x\rVert_2$ into $S^{n-1}$ is continuous ([[lem-radial-normalisation-is-continuous]]); and $S^{n-1}=\{x:\lVert x\rVert_2=1\}$ ([[def-euclidean-spheres-and-closed-balls]]).

[L9] A subset is path-connected when any two of its points are joined by a continuous map from $[0,1]$ with image inside it ([[def-path-connected]]), a path-connected subset is connected ([[thm-path-connected-implies-connected]]), and a function continuous on each member of a finite closed cover is continuous ([[lem-continuity-is-local-and-pastes]]).

[L10] $|zw|=|z||w|$ ([[lem-complex-conjugation-and-modulus-laws]]).

[L11] A set is open exactly when each of its points admits a ball inside it, and $B(x,r)=\{y:d(x,y)<r\}$ ([[def-metric-topology]], [[def-metric-ball]]).

## Counterexample

**Proof technique:** constructive.

1.1 Take $A=\{\tfrac12<|z|<2\}$ and $C(t)=\exp(it)$ on $[0,2\pi]$. [given, construct]

1.2 $A$ is open: for $z\in A$ the ball of radius $\min(|z|-\tfrac12,\,2-|z|)$ about $z$ lies in $A$ by [L10] and [L11]; and $A$ is nonempty, since $1\in A$. [given, L10, L11]

2.1 $A$ is path-connected, hence connected by [L9]: given $z,w\in A$, the ambient exterior $\{|u|>\tfrac12\}$ is path-connected by [L6], and more concretely the radial paths $s\mapsto\bigl((1-s)|z|+s\bigr)z/|z|$ and $s\mapsto\bigl((1-s)|w|+s\bigr)w/|w|$ are continuous by [L8] and [L9], keep the modulus between $1$ and the starting modulus, hence inside $(\tfrac12,2)$, and end on the unit circle; the unit circle is path-connected by [L8], and its points have modulus $1$; concatenating the three pieces on closed subintervals of $[0,1]$ gives a continuous path in $A$ from $z$ to $w$ by [L9]. [step 1.1, L6, L8, L9, L10]

2.2 By [L3] with $a=0$, $r=1$, $k=1$ the contour $C$ is closed with trace $\{|z|=1\}\subseteq A$ and $n(C,0)=1$, a value [L4] confirms directly; by [L7] the chain with the single term $(1,C)$ is a cycle with the same trace and the same index. [step 1.1, L3, L4, L7]

3.1 Steps 1.2 and 2.1 make $A$ a complex domain in the sense of [L5]. The point $0$ lies in $\mathbb C\setminus A$, and step 2.2 gives $n(C,0)=1\ne0$, so by [L2] the cycle $C$ is not null-homologous in $A$; by [L1] the domain $A$ is therefore not homologically simply connected, which refutes the claim. [step 1.2, step 2.1, step 2.2, L1, L2, L5, discharge-construct] ∎
