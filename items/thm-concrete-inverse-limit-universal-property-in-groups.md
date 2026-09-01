---
id: thm-concrete-inverse-limit-universal-property-in-groups
kind: theorem
title: "The compatible-tuple construction satisfies the inverse-limit universal property in groups"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-compatible-tuple-inverse-limit-of-groups, def-coordinate-projections-from-an-inverse-limit, def-group-homomorphism]
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

The compatible-tuple construction satisfies the inverse-limit universal
property in the category of groups.

## Facts & Assumptions

**Given:** An inverse system $((G_i),\varphi_{ij})$ and a group $H$ with a cone
of homomorphisms $f_i:H\to G_i$ satisfying $\varphi_{ij}\circ f_j=f_i$ for all
$i\le j$.

[L1] The inverse limit consists exactly of the compatible tuples, and
$\pi_i((g_j))=g_i$ for the coordinate projections
([[def-compatible-tuple-inverse-limit-of-groups]],
[[def-coordinate-projections-from-an-inverse-limit]]).

[F1] Group homomorphisms preserve products and identities
([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $u:H\to\varprojlim G_i$ by $$u(h):=(f_i(h))_{i\in I}.$$ The cone identities make this tuple compatible, so [L1] shows that $u$ lands in the inverse limit. [L1, given, construct]

2.1 For $h,h'\in H$ one has $$u(hh')=(f_i(hh'))_i=(f_i(h)f_i(h'))_i=u(h)u(h'),$$ and similarly $u(e_H)=e$. Hence $u$ is a group homomorphism by [F1]. Also $\pi_i\circ u=f_i$ for every $i$. [F1, step 1.1, algebra]

3.1 If $v:H\to\varprojlim G_i$ is another homomorphism with $\pi_i\circ v=f_i$ for every $i$, then every coordinate of $v(h)$ agrees with the corresponding coordinate of $u(h)$. Tuples are equal exactly when all coordinates are equal, so $v=u$. [L1, step 2.1]

4.1 Steps 1.1 through 3.1 give existence and uniqueness of the mediating homomorphism. [step 1.1, step 2.1, step 3.1] ∎
