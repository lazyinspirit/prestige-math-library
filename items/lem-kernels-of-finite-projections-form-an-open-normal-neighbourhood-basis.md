---
id: lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis
kind: lemma
title: "The kernels of the finite coordinate projections form an open normal neighbourhood basis at the identity"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-coordinate-projections-from-an-inverse-limit, def-inverse-limit-topology-for-finite-discrete-groups, def-profinite-group-by-inverse-limit, def-normal-subgroup, def-quotient-group]
proof_strategy: "direct"
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Math 6112 notes on inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "H. W. Lenstra, Profinite groups and Galois groups"
      url: "https://websites.math.leidenuniv.nl/algebra/Lenstra-Profinite.pdf"
---

## Statement

For a profinite group presented as an inverse limit of finite discrete groups,
the kernels of the coordinate projections form an open normal neighbourhood
basis at the identity.

## Facts & Assumptions

**Given:** A profinite group written as $L=\varprojlim G_i$ with coordinate
maps $\pi_i:L\to G_i$.

[L1] Each $\pi_i$ is a coordinate projection from the inverse limit
([[def-coordinate-projections-from-an-inverse-limit]]).

[F1] Open sets in $L$ come from cylinders in the product topology, and a
profinite group is such an inverse limit
([[def-inverse-limit-topology-for-finite-discrete-groups]],
[[def-profinite-group-by-inverse-limit]], [[def-normal-subgroup]],
[[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 Each kernel $\ker \pi_i$ is a normal subgroup because $\pi_i$ is a homomorphism, and it is open because $\{e_i\}\subseteq G_i$ is open in the discrete factor and $\pi_i^{-1}(\{e_i\})=\ker\pi_i$. [L1, F1, given]

1.2 Let $U$ be any neighbourhood of the identity in $L$. By [F1], some basic cylinder fixing finitely many coordinates, say those in a finite set $F\subseteq I$, is contained in $U$. Choose $k\in I$ dominating every index in $F$ by directedness. If $x\in\ker\pi_k$, then compatibility gives $\pi_i(x)=\varphi_{ik}(e_k)=e_i$ for every $i\in F$, so $x$ lies in that cylinder. Hence $\ker\pi_k\subseteq U$. [F1, L1, given, choose]

2.1 Therefore the family $(\ker\pi_i)$ is a neighbourhood basis of open normal subgroups at the identity. [step 1.1, step 1.2] ∎
