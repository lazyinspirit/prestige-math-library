---
id: ex-mayer-vietoris-computation-of-the-torus-first-homology
kind: example
title: "Mayer–Vietoris computation of first homology of the torus"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-mayer-vietoris-sequence-in-singular-homology, cor-homology-of-spheres, prop-singular-homology-is-invariant-under-deformation-retracts]
proof_strategy: direct
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, §2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf"
pipeline_run: frontier-31a
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-09-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
---

## Example

Cover $T^2=S^1\times S^1$ by two overlapping product cylinders $U,V$ whose
intersection is two cylinders. Then $H_1(T^2;G)\cong G\oplus G$.

## Facts & Assumptions

**Given:** The described cylinder cover, with $U,V\simeq S^1$ and $U\cap V\simeq S^1\sqcup S^1$.

## Verification

**Proof technique:** direct.

1.1 Choose two open arcs $A,B\subset S^1$ covering the first factor with $A\cap B=I_0\sqcup I_1$, two open arcs. Put $U=A\times S^1$ and $V=B\times S^1$. Each overlap component and each of $U,V$ retracts onto the second factor. After ordering $I_0,I_1$, the Mayer--Vietoris map $H_1(U\cap V;G)\to H_1(U;G)\oplus H_1(V;G)$ is $(a,b)\mapsto(a+b,-a-b)$, since inclusion preserves the second-factor circle and the sequence uses opposite signs for $U$ and $V$. The same formula holds in degree zero. Its kernel is $\{(g,-g):g\in G\}$ and its cokernel is $G$, with no freeness assumption on $G$. [given, construct]

2.1 Exactness gives $0\to G\to H_1(T^2;G)\xrightarrow{\delta}G\to0$, where the right $G$ is the displayed degree-zero kernel. Fix $y_0\in S^1$ and orient $S^1\times\{y_0\}$ so that its arc in $U$ has boundary $g([x_0]-[x_1])$, with $x_j\in I_j$. Splitting its singular cycle into the arcs in $U$ and $V$, the chain-level Mayer--Vietoris connecting map sends its class with coefficient $g$ to $(g,-g)$. Hence this first-factor circle supplies a homomorphic section of $\delta$ for every abelian $G$. The second-factor circle at $x_0$ maps to $(g,0)$ in $H_1(U)\oplus H_1(V)$ and represents the cokernel generator of step 1.1. These two circle maps identify $H_1(T^2;G)$ with $G\oplus G$. [step 1.1, algebra] ∎
