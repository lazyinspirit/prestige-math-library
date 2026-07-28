---
id: fs-compact-implies-sequentially-compact
kind: false-statement
title: "FALSE: every compact space is sequentially compact"
status: draft
origin: session
deps: [thm-tychonoff, def-compact-space, def-compactness-variants, def-product-topology, def-standard-topologies, def-sequence-convergence-top, def-sequence, lem-index-map-grows, def-topological-space, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "FALSE: compact implies sequentially compact"
proof_strategy: contradiction
verification:
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Tychonoff's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
pipeline_run: null
---

## Statement

**False claim:** every compact topological space ([[def-compact-space]]) is
sequentially compact ([[def-compactness-variants]]).

**Where the claim comes from, and what is actually true.** For a metric space the
two conditions are equivalent, and the claim above is that equivalence
transplanted to an arbitrary topological space. The refutation builds its own
witness out of Tychonoff's theorem ([[thm-tychonoff]]): the product

$$Y \;:=\; \prod_{x \in D} \{0,1\}, \qquad D := \{0,1\}^{\mathbb{N}},$$

of one copy of the two-point discrete space for every $0$-$1$ sequence, together
with the sequence $(F_n)$ in $Y$ whose $n$-th term reads off the $n$-th
coordinate, $F_n(x) := x_n$. The Axiom of Choice is assumed, since
[[thm-tychonoff]] carries it.

## Facts & Assumptions

**Given:** The two-point discrete space $\{0,1\}$ ([[def-standard-topologies]]), the set $D = \{0,1\}^{\mathbb{N}}$ of functions $\mathbb{N} \to \{0,1\}$ ([[def-natural-numbers]]), the product $Y = \prod_{x \in D} \{0,1\}$ with the product topology ([[def-product-topology]]), the projections $\pi_x : Y \to \{0,1\}$, and the elements $F_n \in Y$ defined by $F_n(x) := x_n$ for $n \in \mathbb{N}$ and $x \in D$.

[A1] The false claim: every compact topological space is sequentially compact.

[L1] Every finite space is compact, so $\{0,1\}$ with the discrete topology is compact; and a product of compact spaces is compact in the product topology, assuming the Axiom of Choice ([[def-compact-space]], [[def-standard-topologies]], [[thm-tychonoff]]).

[L2] The sets $\pi_x^{-1}[U]$ with $x \in D$ and $U \subseteq \{0,1\}$ are open in $Y$, being members of the subbasis of the product topology, every subset of the discrete $\{0,1\}$ being open ([[def-product-topology]], [[def-standard-topologies]], [[def-topological-space]]).

[L3] A sequence in a space is a function on $\mathbb{N}$; it converges to $p$ when every open set containing $p$ contains all but finitely many of its terms; a subsequence is given by a strictly increasing index map $j \mapsto n_j$, which satisfies $n_j \ge j$; and a space is sequentially compact when every sequence has a convergent subsequence ([[def-sequence-convergence-top]], [[def-sequence]], [[lem-index-map-grows]], [[def-compactness-variants]]).

## Refutation

**Proof technique:** contradiction.

1.1 Suppose the claim [A1] holds, so that every compact space is sequentially compact. [A1, assume-contra]

1.2 $Y$ is compact by [L1], being a product of copies of the compact two-point discrete space. [L1]

2.1 By [A1] and step 1.2 the sequence $(F_n)$ in $Y$ has a subsequence $(F_{n_j})$ converging to some $G \in Y$, the index map $j \mapsto n_j$ being strictly increasing. [A1, L3, step 1.2]

3.1 Define $x \in D$ by $x_k := 0$ when $k = n_j$ for an even $j$, $x_k := 1$ when $k = n_j$ for an odd $j$, and $x_k := 0$ for every $k$ not of the form $n_j$; this is well defined because $j \mapsto n_j$ is injective, being strictly increasing. Then $F_{n_j}(x) = x_{n_j}$ is $0$ for even $j$ and $1$ for odd $j$. [L3, step 2.1, construct]

4.1 The set $\pi_x^{-1}[\{G(x)\}]$ is open by [L2] and contains $G$, so by step 2.1 it contains $F_{n_j}$ for all large $j$; that is, $F_{n_j}(x) = G(x)$ for all large $j$. But step 3.1 makes $F_{n_j}(x)$ take the value $0$ at every even $j$ and $1$ at every odd $j$, so it is constant on no set of large indices. This contradiction refutes the claim [A1]. [A1, L2, step 2.1, step 3.1, discharge-contradiction] ∎

## Remarks

**What the witness exploits.** Compactness of a product is a statement about covers and survives an index set of any size; sequential compactness is a statement about countably many terms and does not. The index set $D$ here is the set of all $0$-$1$ sequences, and the point $x$ built at step 3.1 is chosen to disagree with the given subsequence at exactly the places that matter, which is possible precisely because every $0$-$1$ sequence is available as an index.

**No binary expansion of a real number is used**, and none is needed: the witness is built from $\{0,1\}$-valued functions directly, so nothing here rests on the representation of reals by digits.

**The Axiom of Choice is assumed only through [[thm-tychonoff]]**, which is where compactness of $Y$ comes from. Nothing else in the refutation selects anything; the point $x$ is defined by a rule.
