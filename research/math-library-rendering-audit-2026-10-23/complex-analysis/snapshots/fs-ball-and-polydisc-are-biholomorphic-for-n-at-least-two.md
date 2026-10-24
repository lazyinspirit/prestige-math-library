---
id: fs-ball-and-polydisc-are-biholomorphic-for-n-at-least-two
kind: false-statement
title: The claim that the ball and the polydisc are biholomorphic
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 11
proof_strategy: direct
deps:
  - cor-triangle-inequality-for-inner-product-norm
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-based-loops-and-fundamental-group
  - def-biholomorphic-map-several-complex-variables
  - def-countable-choice
  - def-homotopy-relative-and-path-homotopy
  - def-path-connected
  - def-simply-connected
  - lem-bergman-determinant-over-kernel-invariant
  - lem-bergman-metric-determinants-of-ball-and-polydisc
  - lem-complex-conjugation-and-modulus-laws
  - lem-vector-operations-are-continuous-in-a-normed-space
  - rem-complex-euclidean-space-dictionary
  - thm-fundamental-group-laws
  - thm-poincare-ball-and-polydisc-not-biholomorphic
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: Jiří Lebl, Tasty Bits of Several Complex Variables (book)
      url: https://www.jirka.org/scv/scv.pdf
      locator: >-
        §1.4 "Inequivalence of ball and polydisc", printed pp. 32–33:
        $\mathbb B^n$ and $\mathbb D^n$ are not biholomorphically equivalent,
        with the Poincaré/Cartan attribution. The claim refuted here is the
        naive several-variable Riemann-mapping statement; the refutation uses
        the invariant quotient and the elementary contractibility of convex
        domains.
---

## Statement

**False claim.** For every $m\ge2$ the unit ball $\mathbb B^m$ and the unit polydisc $\mathbb D^m$ in $\mathbb C^m$ are biholomorphic; more generally, any two bounded simply connected domains in $\mathbb C^m$, $m\ge2$, are biholomorphic.

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman-geometric suppliers and used for the topological conventions below; no full Axiom of Choice is asserted beyond the published statements.

[F1] $\mathbb B^m=\{z:\sum_{j<m}|z_j|^2<1\}$ and $\mathbb D^m=\{z:|z_j|<1\}$ are nonempty open subsets of $\mathbb C^m\cong\mathbb R^{2m}$; $\mathbb B^m$ is bounded and $\mathbb D^m\subseteq\mathbb B^m(0,\sqrt m)$ is bounded ([[def-balls-and-polydiscs-in-complex-euclidean-space]], [[rem-complex-euclidean-space-dictionary]]).

[F2] For $z,w\in\mathbb C^m$ the Euclidean norm satisfies $\|u+v\|\le\|u\|+\|v\|$ and $\|\lambda u\|=|\lambda|\|u\|$, and for $a,b\in\mathbb C$ the modulus satisfies $|a+b|\le|a|+|b|$ ([[cor-triangle-inequality-for-inner-product-norm]], [[lem-complex-conjugation-and-modulus-laws]], [[rem-complex-euclidean-space-dictionary]]).

[F3] A subset $C$ of a normed space is convex when $(1-t)x+ty\in C$ for all $x,y\in C$ and $t\in[0,1]$; the straight segment and the straight-line homotopy $F(s,t)=(1-t)\gamma(s)+tx_0$ are continuous whenever $\gamma$ is, by continuity of the vector operations ([[def-path-connected]], [[lem-vector-operations-are-continuous-in-a-normed-space]]).

[F4] A space is simply connected when it is nonempty, path-connected, and its fundamental group at every basepoint is trivial; loops are tested up to homotopy relative to the endpoints, and the identity element of $\pi_1(X,x_0)$ is the class of the constant loop ([[def-simply-connected]], [[def-based-loops-and-fundamental-group]], [[def-homotopy-relative-and-path-homotopy]], [[thm-fundamental-group-laws]]).

[F5] For every $m\ge2$ there is no biholomorphism $\mathbb B^m\to\mathbb D^m$, and a biholomorphism is a bijective holomorphic map with holomorphic inverse ([[thm-poincare-ball-and-polydisc-not-biholomorphic]], [[def-biholomorphic-map-several-complex-variables]]).

[F6] The invariant quotients $\det g_{\mathbb B^m}/K_{\mathbb B^m}=(m+1)^m\pi^m/m!$ and $\det g_{\mathbb D^m}/K_{\mathbb D^m}=2^m\pi^m$ agree under biholomorphisms and are distinct for $m\ge2$ ([[lem-bergman-determinant-over-kernel-invariant]], [[lem-bergman-metric-determinants-of-ball-and-polydisc]]).

## Refutation

**Proof technique:** direct; a counterexample pair of bounded simply connected domains that are not biholomorphic.

**Given:** $\mathrm{AC}_\omega$ and an integer $m\ge2$.

1.1 The ball $\mathbb B^m$ is convex: for $z,w\in\mathbb B^m$ and $t\in[0,1]$, [F2] gives $\|(1-t)z+tw\|\le(1-t)\|z\|+t\|w\|<1$. The polydisc $\mathbb D^m$ is convex coordinatewise: $|(1-t)z_j+tw_j|\le(1-t)|z_j|+t|w_j|<1$ for every $j$. Both are nonempty and bounded by [F1], so both are bounded convex nonempty subsets of $\mathbb R^{2m}$. [A1, F1, F2, given]

1.2 By [F5] there is no biholomorphism $\mathbb B^m\to\mathbb D^m$ for $m\ge2$. The first clause of the claim is therefore false. [F5, given]

2.1 A nonempty convex set $C$ is path-connected, since $t\mapsto(1-t)x+ty$ is a continuous path in $C$ between any two of its points by [F3]. It is simply connected: for $x_0\in C$ and a loop $\gamma$ at $x_0$, the straight-line homotopy $F(s,t):=(1-t)\gamma(s)+tx_0$ of [F3] lies in $C$, is continuous, satisfies $F(s,0)=\gamma(s)$, $F(s,1)=x_0$ and $F(0,t)=F(1,t)=x_0$, hence is a homotopy relative to the endpoints from $\gamma$ to the constant loop at $x_0$. By [F4] its class is the identity of $\pi_1(C,x_0)$, so that group is trivial; therefore $C$ is simply connected. Applying this to the convex sets of step 1.1, $\mathbb B^m$ and $\mathbb D^m$ are bounded simply connected domains in $\mathbb C^m$. [F3, F4, step 1.1]

3.1 The second clause is false as well: by step 2.1 the pair $(\mathbb B^m,\mathbb D^m)$ consists of bounded simply connected domains in $\mathbb C^m$, and by step 1.2 they are not biholomorphic. This is a counterexample witness with the failed conclusion "$\mathbb B^m$ and $\mathbb D^m$ are biholomorphic", so the universal assertion "any two bounded simply connected domains in $\mathbb C^m$, $m\ge2$, are biholomorphic" fails. [F5, step 2.1, step 1.2]

4.1 The obstruction is explicit: by [F6] the quotient $\det g_\Omega/K_\Omega$ is a biholomorphic invariant, and on the two model domains it takes the distinct constants $(m+1)^m\pi^m/m!$ and $2^m\pi^m$; in particular no biholomorphism can identify them. The claim is the naive several-variable analogue of the Riemann mapping theorem, and the ball-polydisc pair above shows that this analogue fails in $\mathbb C^m$ for $m\ge2$. [F6, step 3.1] ∎
