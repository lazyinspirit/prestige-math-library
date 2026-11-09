---
id: lem-author-89250b1d710c-cartier-face-length
kind: lemma
title: Length multiplicity for one proper Cartier face
status: draft
domain: mathematics
deps:
  - math:def-composition-series-and-length-of-a-module
  - math:def-tor-by-resolving-the-right-module
dependency_roles:
  math:def-composition-series-and-length-of-a-module: mathematical-premise
  math:def-tor-by-resolving-the-right-module: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 0
---

## Statement
Let $(A,\mathfrak m)$ be a noetherian commutative local ring, $t\in\mathfrak m$ a nonzerodivisor on $A$, and $I$ a prime ideal with $t\notin I$ and $\sqrt{I+(t)}=\mathfrak m$. Put $M=A/I$. For the free resolution $Q=(0\to A\xrightarrow{t}A\to0)$ of $A/(t)$, the homology of $Q\otimes_A M$ is $A/(I,t)$ in degree zero and zero in positive degrees. The nonzero module $A/(I,t)$ has finite length. Hence the alternating sum of these homology lengths is $\ell_A(A/(I,t))$. This length is unchanged by an isomorphism of local rings carrying the ideals to their counterparts, or by replacing $t$ by a unit multiple.

## Facts & Assumptions

**Given:** The ring, element and prime ideal in the Statement.

**Goal:** Compute the specified-resolution Tor groups and their length Euler characteristic.

[F1] Specified-resolution Tor is the homology of the chosen projective resolution tensored with the other module. [[math:def-tor-by-resolving-the-right-module]]

[F2] Length is the number of simple factors in a composition series, independent of the series. [[math:def-composition-series-and-length-of-a-module]]

## Proof

1.1 Since multiplication by $t$ is injective on $A$, $Q$ is a free resolution of $A/(t)$. Tensoring with $M$ gives $0\to M\xrightarrow{t}M\to0$. The quotient $M$ is a domain and the image of $t$ is nonzero, so the map is injective and its cokernel is $A/(I,t)$. This proves the homology computation. [given, F1, algebra]

1.2 Let $J=I+(t)$ and choose generators $x_1,\ldots,x_s$ of $\mathfrak m$. Since $\sqrt J=\mathfrak m$, choose positive $e_a$ with $x_a^{e_a}\in J$. Every monomial of total degree $N=1+\sum_a(e_a-1)$ contains some $x_a^{e_a}$, so $\mathfrak m^N\subset J$; if $s=0$, take $N=1$. [given, construct, algebra]

2.1 Filter $A/J$ by the images of the powers of $\mathfrak m$ through $\mathfrak m^N$. Each factor is finitely generated and killed by $\mathfrak m$, hence is a finite-dimensional vector space over $A/\mathfrak m$. Refining by basis flags gives a finite composition series. Also $J\subset\mathfrak m$, so $A/J\ne0$. The Euler characteristic is therefore the stated length. [F2, step 1.1, step 1.2, construct]

3.1 A local-ring isomorphism carries composition series to composition series, and a unit multiple of $t$ generates the same ideal. The length is consequently unchanged, completing the proof. [F2, step 2.1, algebra] ∎
