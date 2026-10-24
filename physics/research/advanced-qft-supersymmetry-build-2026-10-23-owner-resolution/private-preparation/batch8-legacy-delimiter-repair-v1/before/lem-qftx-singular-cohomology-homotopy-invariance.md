---
id: lem-qftx-singular-cohomology-homotopy-invariance
kind: lemma
title: Homotopy invariance of singular cohomology with field coefficients
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - thm-singular-chain-homotopy-formula
dependency_roles:
  def-singular-cochain-complex-with-coefficients: mathematical-premise
  def-singular-cohomology-with-coefficients: mathematical-premise
  thm-singular-chain-homotopy-formula: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references: []
landmark: false
---

## Statement

Let \(k\) be a field, let \(X,Y\) be topological spaces, and let \(f,g:X\to Y\) be continuous maps joined by a continuous homotopy \(H:X\times[0,1]\to Y\). Then \(f^*=g^*:H^n(Y;k)\to H^n(X;k)\) for every integer \(n\). Consequently every homotopy equivalence induces an isomorphism on singular cohomology with coefficients in \(k\).

## Facts & Assumptions

**Given:** A field \(k\), spaces \(X,Y\), continuous maps \(f,g:X\to Y\), and the homotopy \(H\) from \(f\) to \(g\).

[F1] Singular cochains are homomorphisms on singular chains, their coboundary is positive precomposition with the chain boundary, and cohomology is cocycles modulo coboundaries. [[def-singular-cochain-complex-with-coefficients]] [[def-singular-cohomology-with-coefficients]]

[F2] The prism operator \(P_H:C_{n-1}(X;k)\to C_n(Y;k)\) satisfies \(g_\#-f_\#=\partial P_H+P_H\partial\), with \(P_H=0\) in degree \(-1\). [[thm-singular-chain-homotopy-formula]]

## Proof

**Given:** The data in the statement.

1.1 For \(n\geq1\), define \(K^n:C^n(Y;k)\to C^{n-1}(X;k)\) by \(K^n\varphi=\varphi\circ P_H\), and set \(K^0=0\). Evaluating the chain identity [F2] on an \(n\)-chain and using the positive coboundary convention in [F1] gives
\[
(g^*-f^*)\varphi=\delta(K^{n+1}\varphi)+K^n(\delta\varphi).
\]
For \(n=0\), the second summand is zero because \(C^{-1}=0\), and the degree-zero case of [F2] gives the same identity. [F1, F2, algebra]

1.2 If \(\varphi\) is a cocycle, then [F1] gives \(\delta\varphi=0\), so step 1.1 says \(g^*\varphi-f^*\varphi=\delta(K^{n+1}\varphi)\), a coboundary; hence the induced cohomology classes agree. Negative cohomology groups are zero by [F1]. If \(f\) has homotopy inverse \(h\), apply the equality to \(hf\simeq\mathrm{id}_X\) and \(fh\simeq\mathrm{id}_Y\); functoriality of pullback then makes \(h^*\) a two-sided inverse for \(f^*\). [F1, step 1.1, algebra] ∎
