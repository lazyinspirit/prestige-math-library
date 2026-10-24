---
id: lem-the-universal-coefficient-tor-obstruction-map-for-homology
title: "The homological universal-coefficient Tor obstruction map"
kind: lemma
status: published
origin: pipeline
deps: ["lem-cycle-boundary-short-exact-sequences-for-a-free-complex-over-a-pid", "lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free", "def-balanced-tor-bifunctor", "def-axiom-of-choice"]
proof_strategy: direct
sources:
  references:
    - title: "Weibel, An Introduction to Homological Algebra"
      url: https://math.mit.edu/~hrm/palestine/weibel/03-tor_and_ext.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
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

## Statement

Assume the Axiom of Choice. Let $C$ be a chain complex of free right $R$-modules over a PID and $G$ a left $R$-module. The cycle-boundary sequences induce a natural map $H_n(C\otimes_RG)\to\operatorname{Tor}_1^R(H_{n-1}C,G)$.

## Proof

**Given:** AC, $C$, $G$ and $n$ as above. Write $B_j=\operatorname{im}d_{j+1}$ and $Z_j=\ker d_j$.

1.1 AC is used in [[lem-boundaries-and-cycles-in-a-free-complex-over-a-pid-are-free]] to make $B_j$ and $Z_j$ free, hence flat, even for infinitely generated $C_j$. Thus $0\to B_{n-1}\to Z_{n-1}\to H_{n-1}C\to0$ is a supplied free resolution of length one. Tensoring it with $G$ identifies $\operatorname{Tor}_1^R(H_{n-1}C,G)$ with $T:=\ker(B_{n-1}\otimes_R G\to Z_{n-1}\otimes_R G)$. AC also implies the DC premise used for comparison of supplied resolutions in [[def-balanced-tor-bifunctor]], so this kernel represents the stated balanced Tor group naturally. [given]

2.1 Corestrict $d_n:C_n\twoheadrightarrow B_{n-1}$ before tensoring. Let $\bar d_n\otimes1:C_n\otimes G\to B_{n-1}\otimes G$ denote the resulting surjection. If $c\in C_n\otimes G$ is a cycle, then the composite of $\bar d_n\otimes1$ with $B_{n-1}\otimes G\to Z_{n-1}\otimes G\to C_{n-1}\otimes G$ is zero. The last arrow is injective: tensor $0\to Z_{n-1}\to C_{n-1}\to B_{n-2}\to0$ and use flatness of $B_{n-2}$. Hence $(\bar d_n\otimes1)c\in T$. If $c=(d_{n+1}\otimes1)b$, then $\bar d_nd_{n+1}=0$, so this element is zero. We obtain a homomorphism on homology. [step 1.1]

3.1 A chain map $f:C\to C'$ restricts to maps of the corresponding $B$ and $Z$ modules; together with a coefficient map $G\to G'$ (over the same ring), these maps commute with the corestricted differentials and the inclusions defining $T$. Thus the cycle formula commutes with them. Naturality of the free-resolution kernel identification with Tor follows from the comparison and coherence built into [[def-balanced-tor-bifunctor]]. The map is surjective as well: $C_n\otimes G\twoheadrightarrow B_{n-1}\otimes G$ is surjective by right exactness, and any lift of an element of $T$ is a cycle since $Z_{n-1}\otimes G\hookrightarrow C_{n-1}\otimes G$. Surjectivity is recorded to identify the obstruction map used by the universal-coefficient exact sequence, though no splitting is claimed here. [step 1.1, step 2.1] ∎
