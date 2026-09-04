---
id: lem-formal-power-series-evaluation-unique-continuous-map
kind: lemma
title: "Formal power-series substitution is the unique continuous k-algebra map"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-formal-power-series-evaluation-converges]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Allen B. Altman and Steven L. Kleiman, A Term of Commutative Algebra, 13th ed., Theorem 22.32"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
    - title: "Melvin Hochster, The structure theory of complete local rings"
      url: "https://sites.lsa.umich.edu/hochster/wp-content/uploads/sites/1337/2026/04/Structure.pdf"
pipeline_run: null
---

## Statement

Let $(A,\mathfrak m)$ be a complete local ring, let $k \to A$ be a ring map,
and let $x_1,\ldots,x_n \in \mathfrak m$. Then there is a unique continuous
$k$-algebra homomorphism
$$\phi:k\llbracket X_1,\ldots,X_n\rrbracket \to A$$
such that $\phi(X_i)=x_i$ for every $i$.

## Facts & Assumptions

**Given:** A complete local ring $(A,\mathfrak m)$, a ring map $k \to A$, and
elements $x_1,\ldots,x_n \in \mathfrak m$.

[L1] Degreewise substitution converges for every formal series
([[lem-formal-power-series-evaluation-converges]]).

## Proof

**Proof technique:** define the map by convergent substitution and use density of polynomials.

1.1 By [L1], every series $F=\sum_\alpha a_\alpha X^\alpha$ has a convergent substituted sum $$\phi(F):=\sum_\alpha a_\alpha x^\alpha \in A.$$ Finite truncations show that $\phi$ respects addition and multiplication, and by construction $\phi$ is a $k$-algebra map with $\phi(X_i)=x_i$. [L1, given, construct]

2.1 The map is continuous for the $(X_1,\ldots,X_n)$-adic topology on the source and the $\mathfrak m$-adic topology on the target, because every series all of whose monomials have total degree at least $N$ maps into $\mathfrak m^N$. [step 1.1, given, algebra]

3.1 If $\psi$ is another continuous $k$-algebra map with $\psi(X_i)=x_i$, then $\psi$ agrees with $\phi$ on the polynomial subring $k[X_1,\ldots,X_n]$. Every formal series is the limit of its polynomial truncations, and both maps are continuous, so they agree on all of $k\llbracket X_1,\ldots,X_n\rrbracket$. Therefore $\phi$ is unique. [step 1.1, step 2.1, given]

4.1 Thus formal substitution is the unique continuous $k$-algebra map sending each indeterminate to the chosen maximal-ideal element. [step 3.1] ∎
