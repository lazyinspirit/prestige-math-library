---
id: thm-inflation-restriction-exact-sequence-in-degree-one
kind: theorem
title: "Inflation-restriction exact sequence in degree one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one, def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Chaoli Li, Class field theory: proofs"
      url: "https://www.math.columbia.edu/~chaoli/docs/ClassFieldTheory2.html"
---

## Statement

Let $N\trianglelefteq G$ and let $A$ be an abelian $G$-group. Then the sequence

$$0\to H^1(G/N,A^N)\xrightarrow{\operatorname{Inf}}H^1(G,A)\xrightarrow{\operatorname{Res}}H^1(N,A)$$

is exact.

## Facts & Assumptions

**Given:** A normal subgroup $N\trianglelefteq G$ and an abelian $G$-group $A$.

[L1] Restriction and inflation in degree one are given by the explicit cocycle
formulas of
[[def-restriction-inflation-and-the-quotient-conjugation-action-on-first-cohomology]].

[L2] The crossed-homomorphism model agrees with the inhomogeneous degree-one
model ([[thm-the-inhomogeneous-one-cocycle-model-agrees-with-crossed-homomorphisms-in-degree-one]]).

## Proof

**Proof technique:** direct.

1.1 Inflation is injective. Suppose $\bar z:G/N\to A^N$ inflates to a principal crossed homomorphism $g\mapsto g\cdot a-a$ on $G$. For $n\in N$, inflation gives $0=\bar z(N)=n\cdot a-a$, so $a\in A^N$. Therefore the same formula already defines a principal cocycle on $G/N$, and the class of $\bar z$ is zero. [given, L1, algebra]

1.2 Conversely, let $z:G\to A$ be a crossed homomorphism whose restriction to $N$ is trivial in $H^1(N,A)$. Then there exists $a\in A$ such that $z(n)=n\cdot a-a$ for all $n\in N$. Replace $z$ by the cohomologous cocycle $z'(g)=z(g)-(g\cdot a-a)$. Now $z'|_N=0$. [L1, L2, choose, algebra]

2.1 If $\bar z:G/N\to A^N$ is a cocycle, then its inflation vanishes on $N$ because $nN=N$. Hence $\operatorname{Res}\circ\operatorname{Inf}=0$. [L1, step 1.1, algebra]

2.2 If $n\in N$ and $g\in G$, then $z'(ng)=z'(n)+n\cdot z'(g)=n\cdot z'(g)$, while also $z'(ng)=z'(g(g^{-1}ng))=z'(g)+g\cdot z'(g^{-1}ng)=z'(g)$ because $g^{-1}ng\in N$ and $z'|_N=0$. Therefore $n\cdot z'(g)=z'(g)$ for all $n\in N$, so $z'(g)\in A^N$. Also $z'(gn)=z'(g)+g\cdot z'(n)=z'(g)$, so $z'$ is constant on cosets of $N$. [step 1.2, algebra]

3.1 Define $\bar z:G/N\to A^N$ by $\bar z(gN)=z'(g)$. Step 2.2 shows this is well defined, and the crossed-homomorphism identity for $z'$ implies that $\bar z$ is a cocycle on $G/N$. By construction, inflating $\bar z$ gives $z'$, so the original class of $z$ lies in the image of inflation. Hence $\ker\operatorname{Res}=\operatorname{im}\operatorname{Inf}$. [L1, step 2.2, step 2.1]

4.1 Steps 1.1, 2.1, and 3.1 prove exactness of the displayed sequence. [step 1.1, step 2.1, step 3.1] ∎
