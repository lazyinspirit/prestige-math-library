---
id: lem-countable-uniform-base-normalisation
kind: lemma
title: "A countable entourage base can be replaced in ZF by a decreasing symmetric base whose next triple composite lies in the preceding member"
status: published
origin: session
deps: [def-countably-based-uniformity, lem-symmetric-entourages-form-a-base, thm-well-ordering-principle, thm-recursion]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

In ZF, every countably based uniformity has a decreasing symmetric base $(E_n)$ with $E_{n+1}^{\circ3}\subseteq E_n$.

## Facts & Assumptions

**Given:** A countable entourage base $\mathcal B$.

[L1] Symmetric entourages form a base and have square roots ([[lem-symmetric-entourages-form-a-base]]).

[L2] A nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L3] Recursion constructs a sequence from a specified starting value and successor map ([[thm-recursion]]).

## Proof

**Proof technique:** constructive.

1.1 Use the finite listing or bijection supplied by countability to write the given base as $(C_n)$, repeating its last member in the finite case. Put $$ B_n=\bigcap_{i\le n}(C_i\cap C_i^{-1}). $$ Then $(B_n)$ is a canonically defined decreasing symmetric cofinal base. [L1, construct]

1.2 Define indices recursively. Put $r_0=0$, and let $r_{n+1}$ be the least $k>r_n$ such that $B_k^{\circ3}\subseteq B_{r_n}$; then put $E_n=B_{r_n}$. [L1, L2, L3, construct]

2.1 Each required set of indices is nonempty: choose a symmetric entourage $D$ with $D^{\circ3}\subseteq B_{r_n}$, then use cofinality and decreasingness to find $k>r_n$ with $B_k\subseteq D$. Thus the recursion is defined. The inequalities $r_{n+1}>r_n$ give decreasingness and cofinality, while the defining clause gives triple control. [step 1.1, step 1.2, L1, L2]

3.1 Therefore $(E_n)$ is the asserted normal base in ZF. [step 2.1, discharge-construct] ∎
