---
id: thm-riemann-stieltjes-change-of-variable
kind: theorem
title: "Change of variable for the Riemann–Stieltjes integral"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-riemann-stieltjes-sum-and-integral,
       lem-riemann-stieltjes-integral-unique, thm-continuous-inverse,
       thm-heine-cantor-r, def-partition-and-refinement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, Ch. 6, Theorem 6.19"
      url: "https://archive.org/details/principlesofmath00rudi"
pipeline_run: null
---

## Statement

Let $\phi:[c,d]\to[a,b]$ be a strictly increasing continuous bijection. For functions $f,\alpha:[a,b]\to\mathbb R$, one of the two Riemann–Stieltjes integrals below exists if and only if the other does, and in that case

$$\int_a^b f\,d\alpha=\int_c^d(f\circ\phi)\,d(\alpha\circ\phi).$$

## Facts & Assumptions

**Given:** A strictly increasing continuous bijection $\phi:[c,d]\to[a,b]$ and functions $f,\alpha$ on $[a,b]$.

[L1] The inverse $\phi^{-1}$ is continuous ([[thm-continuous-inverse]]).

[L2] Both $\phi$ and $\phi^{-1}$ are uniformly continuous on their compact domains ([[thm-heine-cantor-r]]).

[L3] The Stieltjes integral is the common mesh limit of its tagged sums ([[def-riemann-stieltjes-sum-and-integral]]).

[L4] A Stieltjes integral, when it exists, is unique ([[lem-riemann-stieltjes-integral-unique]]).

## Proof

**Proof technique:** direct.

1.1 If $Q=(s_j)$ is a partition of $[c,d]$ with tags $\eta_j$, then $P=(\phi(s_j))$ is a partition of $[a,b]$ with tags $\phi(\eta_j)$. Direct substitution gives [given]
$$S_{\alpha\circ\phi}(f\circ\phi;Q,\eta)=S_\alpha(f;P,\phi\circ\eta).$$

2.1 By uniform continuity of $\phi$ in [L2], arbitrarily fine $Q$ give arbitrarily fine image partitions $P$. Thus existence of the left-hand integral in the displayed formula forces the right-hand sums to converge to the same value. Applying the identical argument to $\phi^{-1}$, using [L1] and [L2], proves the converse. Uniqueness [L4] identifies the two limits. [step 1.1, L1, L2, L3, L4] ∎
