---
id: ex-localisation-kills-exactly-s-torsion
kind: example
title: "Localising Z/12Z kills exactly the torsion seen by the denominator set"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
deps: [lem-zero-in-a-localised-module, def-localisation-of-a-module]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (12.2)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Example

Let $M=\mathbb Z/12\mathbb Z$. If $S_2=\{2^n:n\in\mathbb N\}$ and $S_3=\{3^n:n\in\mathbb N\}$, then
$$
\ker(M \to S_2^{-1}M)=\{[0],[3],[6],[9]\}, \qquad \ker(M \to S_3^{-1}M)=\{[0],[4],[8]\}.
$$
So localisation kills exactly the torsion detected by the chosen denominator set.

## Facts & Assumptions

**Given:** The module $M=\mathbb Z/12\mathbb Z$ and the multiplicative sets $S_2=\{2^n:n\in\mathbb N\}$ and $S_3=\{3^n:n\in\mathbb N\}$.

[L1] A fraction in a localised module is zero exactly when one denominator kills its numerator ([[lem-zero-in-a-localised-module]]).

[L2] Elements of $S^{-1}M$ are fractions $m/s$ with $s \in S$ ([[def-localisation-of-a-module]]).

## Verification

**Proof technique:** direct.

1.1 By [L1], $[a] \in \ker(M \to S_2^{-1}M)$ exactly when $2^r[a]=0$ in $\mathbb Z/12\mathbb Z$ for some $r \ge 0$. This happens for $[0],[3],[6],[9]$, and for no other class, because $12 \mid 2^r a$ is possible exactly when the odd part of $a$ is divisible by $3$. [L1, algebra]

1.2 Likewise, $[a] \in \ker(M \to S_3^{-1}M)$ exactly when $3^r[a]=0$ for some $r \ge 0$. This happens for $[0],[4],[8]$, and for no other class, because $12 \mid 3^r a$ is possible exactly when the $2$-primary part of $a$ is divisible by $4$. [L1, algebra]

2.1 Steps 1.1 and 1.2 give the two kernels, and [L2] interprets them as the elements killed by the respective localisation maps. [step 1.1, step 1.2, L2] ∎
