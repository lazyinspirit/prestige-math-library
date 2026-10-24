---
id: cex-sequential-closure-strictly-inside-closure
kind: counterexample
title: "In the cocountable topology on $\\mathbb{R}$ the sequential closure of $[0,1]$ is $[0,1]$ while its closure is all of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-cocountable-topology-on-r, lem-sequential-closure-inside-closure, def-sequence-convergence-top,
       thm-closure-characterisation-top, cor-interval-uncountable, def-interval,
       def-standard-topologies, def-countable, cor-of-one-positive]
justified_by: []
aliases: []
landmark: false
short: "sequential closure strictly smaller than closure"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: 3b2a737b0b959d32e7e712567f8e8d421f02f47ad1ffe8b199a28f4d40221a11
    item_sha256: 83ed55644852e868c62bf127b78ab31c5ef06b26f933b0a284ea1ff4b91f1022
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
pipeline_run: null
---

## Statement refuted

**Refuted:** that the sequential closure of a subset of a topological space
equals its closure. [[lem-sequential-closure-inside-closure]] asserts only the
inclusion $\operatorname{seqcl}(A) \subseteq \overline{A}$, and asserts it
without any hypothesis; the witness below shows that the inclusion can be as far
from an equality as it is possible to be, the two sides differing by all but a
bounded interval.

**Witness.** Give $\mathbb{R}$ the cocountable topology
([[def-standard-topologies]], [[ex-cocountable-topology-on-r]]) and take
$A := [0,1]$ ([[def-interval]]). Then
$$\operatorname{seqcl}(A) = [0,1] \subsetneq \mathbb{R} = \overline{A} .$$

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology, and the set $A = [0,1] = \{\, t \in \mathbb{R} : 0 \le t \le 1 \,\}$.

[A1] $\operatorname{seqcl}(A)$ is the set of points to which some sequence with all terms in $A$ converges ([[def-sequence-convergence-top]]).

[L1] In the cocountable topology on $\mathbb{R}$ a sequence converges if and only if it is eventually constant, and it then converges to its eventual value and to no other point ([[ex-cocountable-topology-on-r]], claim 3).

[L2] In the cocountable topology on $\mathbb{R}$ the closure of an uncountable set is $\mathbb{R}$ ([[ex-cocountable-topology-on-r]], claim 2).

[L3] For $a < b$ the interval $[a,b]$ is uncountable ([[cor-interval-uncountable]], [[def-countable]]); $0 < 1$ ([[cor-of-one-positive]]).

[L4] $\operatorname{seqcl}(A) \subseteq \overline{A}$ in every topological space ([[lem-sequential-closure-inside-closure]], claim 1), and $\overline{A}$ is the smallest closed superset of $A$ ([[thm-closure-characterisation-top]], claim 2).

## Counterexample

**Proof technique:** direct.

1.1 $0 < 1$ by [L3], so $[0,1]$ is a nondegenerate closed interval and is uncountable by [L3]. [L3]

1.2 Let $(x_k)$ be a sequence with $x_k \in [0,1]$ for every $k$ and suppose $x_k \to p$ in the cocountable topology. By [L1] the sequence is eventually constant with value $p$, so $p = x_K$ for some index $K$, and $x_K \in [0,1]$; hence $p \in [0,1]$. [A1, L1]

1.3 Conversely every $a \in [0,1]$ lies in $\operatorname{seqcl}([0,1])$, the constant sequence with value $a$ having all its terms in $[0,1]$ and converging to $a$ by [L1]. [A1, L1]

2.1 By steps 1.2 and 1.3, $\operatorname{seqcl}([0,1]) = [0,1]$. [step 1.2, step 1.3]

2.2 By step 1.1 the set $[0,1]$ is uncountable, so $\overline{[0,1]} = \mathbb{R}$ by [L2]. [step 1.1, L2]

3.1 The inclusion $[0,1] \subseteq \mathbb{R}$ is strict, since $2 \notin [0,1]$; so by steps 2.1 and 2.2 the sequential closure of $[0,1]$ is strictly smaller than its closure, and the inclusion of [L4] cannot in general be improved to an equality. [step 2.1, step 2.2, L4] ∎

## Remarks

- **The set $[0,1]$ plays no special role beyond being uncountable and not all of $\mathbb{R}$.** Any uncountable proper subset would do, and by claim 3 of [[ex-cocountable-topology-on-r]] the sequential closure of *any* subset of this space is the subset itself, so the sequential closure operator here is the identity while the closure operator is far from it.

- **What the witness rules out.** It shows that no theorem of the form "$\operatorname{seqcl} = \overline{\ \cdot\ }$ in every space" is available, so the countability hypothesis of [[thm-first-countable-sequences-suffice]] is doing real work. Assuming the Axiom of Countable Choice, as that theorem does, it also shows that the cocountable topology on $\mathbb{R}$ is not first countable.

- **Sequences are the wrong index set here, not the wrong idea.** Replacing sequences by nets or filters restores the equality in every space; neither is developed in this library at this point, and the failure above is exactly the reason they exist.
