---
id: thm-poincare-ball-and-polydisc-not-biholomorphic
kind: theorem
title: "Poincaré's theorem: the ball and the polydisc are not biholomorphic for $m\\ge2$"
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
proof_strategy: direct
deps:
  - def-balls-and-polydiscs-in-complex-euclidean-space
  - def-biholomorphic-map-several-complex-variables
  - def-countable-choice
  - lem-bergman-determinant-over-kernel-invariant
  - lem-bergman-metric-determinants-of-ball-and-polydisc
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
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
        Theorem 1.4.4 (no proper holomorphic map $\mathbb D^2\to\mathbb B^2$),
        the Poincaré/Cartan attribution, and the inequivalence statement.
        The proof below uses the biholomorphically invariant quotient
        $\det g_\Omega/K_\Omega$, not the proper-map theorem.
---

## Statement

Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]). For every $m\ge2$ the unit ball $\mathbb B^m$ and the unit polydisc $\mathbb D^m$ in $\mathbb C^m$ are not biholomorphic. (For $m=1$ both are the unit disc.)

## Facts & Assumptions

[A1] The only choice assumption is $\mathrm{AC}_\omega$ ([[def-countable-choice]]), inherited through the Bergman metric, kernel and determinant suppliers; no full Axiom of Choice is used.

[F1] The unit ball and unit polydisc are $\mathbb B^m=\{z:\sum_{j<m}|z_j|^2<1\}$ and $\mathbb D^m=\{z:|z_j|<1\}$; for $m=1$ both equal the unit disc $\{|z|<1\}$ ([[def-balls-and-polydiscs-in-complex-euclidean-space]]).

[F2] A biholomorphism $F:\Omega\to\Omega'$ is a bijective holomorphic map whose inverse is holomorphic, and the determinant quotient satisfies $$\frac{\det g_\Omega(z)}{K_\Omega(z,z)}=\frac{\det g_{\Omega'}(F(z))}{K_{\Omega'}(F(z),F(z))}$$ for every $z\in\Omega$; if each quotient is constant on its domain, the two constants are equal ([[def-biholomorphic-map-several-complex-variables]], [[lem-bergman-determinant-over-kernel-invariant]]).

[F3] The model quotients are the constants $\dfrac{\det g_{\mathbb B^m}}{K_{\mathbb B^m}}=\dfrac{(m+1)^m\pi^m}{m!}$ and $\dfrac{\det g_{\mathbb D^m}}{K_{\mathbb D^m}}=2^m\pi^m$, and these constants are distinct for every $m\ge2$ ([[lem-bergman-metric-determinants-of-ball-and-polydisc]]).

## Proof

**Proof technique:** direct, comparing the biholomorphically invariant quotient of the two model domains.

**Given:** $\mathrm{AC}_\omega$ and an integer $m\ge2$.

1.1 Suppose, for contradiction, that $F:\mathbb B^m\to\mathbb D^m$ is a biholomorphism. Both domains are bounded, so [F2] applies and gives $\frac{\det g_{\mathbb B^m}(z)}{K_{\mathbb B^m}(z,z)}=\frac{\det g_{\mathbb D^m}(F(z))}{K_{\mathbb D^m}(F(z),F(z))}$ for every $z\in\mathbb B^m$. By [F3] the left-hand side is the constant $\frac{(m+1)^m\pi^m}{m!}$ and the right-hand side the constant $2^m\pi^m$; hence, by the constant-quotient clause of [F2], the two constants are equal. [A1, F2, F3, given]

2.1 However, [F3] states that $\frac{(m+1)^m\pi^m}{m!}\ne2^m\pi^m$ for every $m\ge2$. This contradicts step 1.1, so no biholomorphism $\mathbb B^m\to\mathbb D^m$ exists; the same argument applies to a biholomorphism in either direction, by symmetry of the biholomorphism relation. [F2, F3, step 1.1]

3.1 For $m=1$, [F1] gives $\mathbb B^1=\mathbb D^1=\{|z|<1\}$, so the two domains coincide; this is why the theorem is stated for $m\ge2$ only, and no inequivalence is asserted in dimension one. [F1, given] ∎
