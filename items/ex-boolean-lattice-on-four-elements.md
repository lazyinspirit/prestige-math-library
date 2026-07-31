---
id: ex-boolean-lattice-on-four-elements
kind: example
title: "The Boolean lattice on four elements: ranks, width, shadows, and a symmetric chain decomposition"
status: published
origin: session
deps: [def-boolean-lattice-and-levels, def-shadow-of-a-uniform-family, cor-sperner-theorem-with-equality-cases, thm-symmetric-chain-decomposition-of-the-boolean-lattice]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Keller and W. T. Trotter, Applied Combinatorics, §6.2"
      url: "https://appliedcombinatorics.org/book/s_posets_subset-lattice.html"
pipeline_run: null
---

## Example

Let $A=\{1,2,3,4\}$. The Boolean lattice $B(A)$ has rank sizes

$$1,\ 4,\ 6,\ 4,\ 1,$$

so its width is $6$. For
$\mathcal F=\{\{1,2\},\{1,3\}\}$, both its lower and upper shadows have three
members:

$$\partial\mathcal F=\{\{1\},\{2\},\{3\}\},\qquad \nabla\mathcal F=\{\{1,2,3\},\{1,2,4\},\{1,3,4\}\}.$$

## Facts & Assumptions

**Given:** The set $A=\{1,2,3,4\}$ and the family $\mathcal F$ in the Example.

[F1] The rank-$k$ level of $B(A)$ is the family of $k$-subsets ([[def-boolean-lattice-and-levels]]).

[F2] Lower and upper shadows consist of the immediate subsets and supersets one rank away ([[def-shadow-of-a-uniform-family]]).

[L1] Sperner's theorem says the width of $B(A)$ is its middle binomial coefficient ([[cor-sperner-theorem-with-equality-cases]]).

[L2] Every finite Boolean lattice has a symmetric chain decomposition ([[thm-symmetric-chain-decomposition-of-the-boolean-lattice]]).

## Verification

**Proof technique:** direct.

1.1 Listing subsets by cardinality gives rank sizes $1,4,6,4,1$, and [L1] gives width $6$. [given, F1, L1]

1.2 Deleting one element from a member of $\mathcal F$ gives exactly $\{1\},\{2\},\{3\}$, while adjoining one element gives exactly $123,124,134$. Thus the displayed shadows are correct. [given, F2]

1.3 The following symmetric chains partition all sixteen subsets: $\varnothing\subset1\subset12\subset123\subset1234$; $4\subset14\subset124$; $2\subset23\subset234$; $24$; $3\subset13\subset134$; and $34$. Their endpoint ranks sum to $4$, in agreement with [L2]. [F1, L2]

2.1 Steps 1.1, 1.2, and 1.3 verify the ranks, width, shadows, and an explicit symmetric chain decomposition. [step 1.1, step 1.2, step 1.3] ∎
