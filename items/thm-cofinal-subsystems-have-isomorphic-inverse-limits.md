---
id: thm-cofinal-subsystems-have-isomorphic-inverse-limits
kind: theorem
title: "A cofinal subsystem has the same inverse limit up to canonical isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-cofinal-subsystem, def-compatible-tuple-inverse-limit-of-groups, thm-concrete-inverse-limit-universal-property-in-groups]
proof_strategy: "direct"
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

A cofinal subsystem has the same inverse limit, up to canonical isomorphism.

## Facts & Assumptions

**Given:** An inverse system indexed by $I$ and a cofinal directed subset
$J\subseteq I$.

[L1] A cofinal subsystem meets every ambient index eventually
([[def-cofinal-subsystem]]).

[F1] The inverse limit is the compatible-tuples construction and satisfies its
universal property ([[def-compatible-tuple-inverse-limit-of-groups]],
[[thm-concrete-inverse-limit-universal-property-in-groups]]).

## Proof

**Proof technique:** direct.

1.1 Restricting a compatible tuple on $I$ to its $J$-coordinates gives a homomorphism $$\rho:\varprojlim_{i\in I} G_i\to\varprojlim_{j\in J} G_j.$$ Compatibility is preserved because every relation used in the $J$-limit is already one of the relations used in the $I$-limit. [F1, given, construct]

1.2 For a compatible tuple $(x_j)_{j\in J}$ and $i\in I$, let $$A_i:=\{\varphi_{ij}(x_j):j\in J,\ i\le j\}.$$ Cofinality makes $A_i$ nonempty. If $j,j'$ both dominate $i$, choose $k\in J$ dominating both; compatibility gives $$\varphi_{ij}(x_j)=\varphi_{ik}(x_k)=\varphi_{ij'}(x_{j'}).$$ Thus $A_i$ is a singleton. Define $\sigma((x_j))_i$ to be its unique member. This makes no simultaneous choice, and the transition identities show that the resulting tuple is compatible on $I$. [L1, F1, construct, algebra]

2.1 By construction, $\rho\circ\sigma$ and $\sigma\circ\rho$ fix every coordinate, hence are identity maps on the corresponding inverse limits. Therefore $\rho$ and $\sigma$ are inverse isomorphisms. [step 1.1, step 1.2] ∎
