---
id: ex-a-finite-hausdorff-space-is-discrete
kind: example
title: "A finite Hausdorff space is discrete, and its diagonal is closed for the trivial reason that every subset of the square is"
status: draft
origin: session
deps: [thm-hausdorff-iff-the-diagonal-is-closed, def-the-diagonal-of-a-space,
       def-hausdorff-space, thm-t1-iff-singletons-are-closed, def-t0-and-t1-spaces,
       lem-urysohn-sits-between-hausdorff-and-regular-plus-t1, def-standard-topologies,
       def-countable, def-product-topology, def-topology-basis-subbasis,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "a finite Hausdorff space is discrete"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Discrete space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Discrete_space"
    - title: "Hausdorff space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Hausdorff_space"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Example

Let $(X, \mathcal{T})$ be a Hausdorff space ([[def-hausdorff-space]]) whose
underlying set is finite ([[def-countable]]). Then:

1. $\mathcal{T}$ is the **discrete** topology on $X$
   ([[def-standard-topologies]]): every subset of $X$ is open.
2. $X \times X$ with the product topology ([[def-product-topology]]) is discrete
   as well, so every subset of it — the diagonal $\Delta_X$ included — is both
   open and closed.

Clause 2 makes the diagonal criterion
([[thm-hausdorff-iff-the-diagonal-is-closed]]) true here for a reason that has
nothing to do with the diagonal: in a discrete square *every* subset is closed.
The example is worth recording precisely because it is the degenerate case, where
the criterion carries no information.

## Facts & Assumptions

**Given:** A Hausdorff space $(X,\mathcal{T})$ with $X$ finite, and $X \times X$ with the product topology.

[A1] $X$ is finite, so every subset of $X$ is finite ([[def-countable]], [[def-standard-topologies]], fact (i)).

[A2] The discrete topology on a set is the family of all its subsets; in it every subset is open, hence every subset is closed ([[def-standard-topologies]], [[def-topological-space]]).

[A3] The boxes $U \times W$ with $U, W \in \mathcal{T}$ form a basis for the product topology on $X \times X$, the index set being $2$ ([[def-product-topology]], [[def-topology-basis-subbasis]], [[def-the-diagonal-of-a-space]]).

[L1] Every Hausdorff space is $T_1$ ([[lem-urysohn-sits-between-hausdorff-and-regular-plus-t1]], claim 2, [[def-t0-and-t1-spaces]]).

[L2] A space is $T_1$ exactly when every finite subset of it is closed ([[thm-t1-iff-singletons-are-closed]], clause (c)).

## Verification

**Proof technique:** direct.

1.1 $X$ is $T_1$, being Hausdorff. [L1]

2.1 Every subset $A \subseteq X$ is finite by [A1], hence closed by step 1.1 and [L2]; so every subset of $X$ is closed. [step 1.1, A1, L2]

3.1 Every subset $A \subseteq X$ is open, its complement $X \setminus A$ being a subset of $X$ and therefore closed by step 2.1; so $\mathcal{T}$ is the discrete topology, which is claim 1. [step 2.1, A2]

4.1 Every singleton $\{(u,v)\} = \{u\} \times \{v\}$ of $X \times X$ is a basic open box by step 3.1 and [A3], so every subset of $X \times X$, being the union of the singletons of its elements, is open; hence $X \times X$ is discrete and every subset of it, $\Delta_X$ included, is closed. This is claim 2. [step 3.1, A2, A3] ∎

## Remarks

- **The finiteness is used only through "every subset is finite".** Nothing about cardinality beyond that enters, and the argument gives, for an arbitrary $T_1$ space, that every finite subset is closed — which is the content of clause (c) of [[thm-t1-iff-singletons-are-closed]] and is the real reason a finite $T_1$ space is discrete.

- **The Hausdorff hypothesis may be weakened to $T_1$.** Step 1.1 is the only place it is used, and it is used only to obtain $T_1$; so a finite $T_1$ space is already discrete, and a finite Hausdorff space is discrete because Hausdorff implies $T_1$. Neither hypothesis can be dropped altogether: the indiscrete topology on a two-point set is finite and not discrete ([[def-standard-topologies]]).

- **Why the diagonal is uninformative here.** In a discrete square every subset is closed, so the closedness of $\Delta_X$ is not evidence of anything about $X$; the criterion is a genuine test only where the square has proper nonempty non-closed subsets to be distinguished from.
