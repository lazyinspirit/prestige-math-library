---
id: thm-pair-long-exact-sequences-with-local-coefficients
kind: theorem
title: Pair exact sequences with local coefficients
status: published
origin: pipeline
pipeline_run: phase-2-next-21
deps: [def-homology-and-cohomology-with-local-coefficients, prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-cohomology]
proof_strategy: direct
verification:
  audited: 2026-09-14
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Davis and Kirk, Lecture Notes in Algebraic Topology, Chapter 5 §4, pp.105–109
      url: https://www.maths.gla.ac.uk/~mpowell/Davis_Kirk_Lecture%20notes%20in%20algebraic%20topology.pdf
provenance:
  statement: literature-derived
  proof: literature-derived
---

## Statement

For $A\subseteq X$ and a local system $\mathcal L$ on $X$, restriction to $A$ gives natural exact sequences
$$\cdots\to H_n(A;\mathcal L|_A)\to H_n(X;\mathcal L)\to H_n(X,A;\mathcal L)\xrightarrow{\partial}H_{n-1}(A;\mathcal L|_A)\to\cdots$$
and
$$\cdots\to H^n(X,A;\mathcal L)\to H^n(X;\mathcal L)\to H^n(A;\mathcal L|_A)\xrightarrow{\delta}H^{n+1}(X,A;\mathcal L)\to\cdots.$$
The homology connector sends a relative cycle represented by $c$ to $[\partial c]$. The cohomology connector sends a cocycle $a$ on $A$ to $[\delta\widetilde a]$, where $\widetilde a$ is its extension by zero to simplices not contained in $A$. Naturality uses the variances of the preceding functoriality proposition.

## Facts & Assumptions

**Given:** A pair $(X,A)$ and a left $R$-module local system $\mathcal L$ on $X$.

[F1] [[def-homology-and-cohomology-with-local-coefficients]] defines relative chains as a quotient and relative cochains as the kernel of restriction.

[F2] [[prop-local-coefficient-homology-and-cohomology-are-functorial-for-a-map-with-a-coefficient-morphism]] supplies the chain/cochain maps and their variances.

[F3] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] and [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] record the same connecting-map chases for ordinary coefficients.

## Proof

**Proof technique:** direct.

1.1 The inclusion of local chains on $A$ is injective, and the quotient is the relative local chain group by [F1], so $0\to C_*(A;\mathcal L|_A)\to C_*(X;\mathcal L)\to C_*(X,A;\mathcal L)\to0$ is degreewise exact. The standard chase in [F3] uses only representatives and $\partial^2=0$, so it gives the first long exact sequence with connector $[c]\mapsto[\partial c]$. [F1, F3]

1.2 Restriction of local cochains from $X$ to $A$ is surjective: extend a simplex function by zero on every simplex not contained in $A$. Its kernel is the relative cochain group, so $0\to C^*(X,A;\mathcal L)\to C^*(X;\mathcal L)\to C^*(A;\mathcal L|_A)\to0$ is exact. The cochain chase of [F3] gives the second sequence; the explicit zero extension makes the stated connector well defined, and a different extension differs by a relative cochain and changes $\delta\widetilde a$ by a relative coboundary. [F1, F3]

2.1 The maps in [F2] commute with the inclusions, quotient maps, restrictions, and differentials in the two short exact sequences. Applying them to the representative formulas for the connectors proves commutativity of every naturality square, with $\mathcal L\to f^*\mathcal K$ in homology and $f^*\mathcal K\to\mathcal L$ in cohomology. [F2, step 1.1, step 1.2]

3.1 Exactness at degree zero includes the initial zero group because negative chain and cochain degrees vanish. If $A=\varnothing$, the relative complex is the absolute complex and the $A$ terms are zero; if $A=X$, the relative complex is zero. Empty $X$, zero coefficients, points, degenerate simplices, and disconnected spaces require no modification. The extension by zero is a displayed function, so no AC is used. [F1, step 1.1, step 1.2, step 2.1] ∎
