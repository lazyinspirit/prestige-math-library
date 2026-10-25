---
id: ex-cocountable-topology-on-r
kind: example
title: "In the cocountable topology on $\\mathbb{R}$ the closed sets are the countable sets and $\\mathbb{R}$, and a sequence converges iff it is eventually constant"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-standard-topologies, def-sequence-convergence-top, thm-closure-characterisation-top, def-countable,
       thm-r-uncountable, lem-countable-iff-surjection-from-n, lem-subset-of-countable,
       def-interior-closure-boundary-top, def-neighbourhood-top, def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "cocountable topology on $\\mathbb{R}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Cocountable topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cocountable_topology"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
pipeline_run: null
---

## Example

Give $\mathbb{R}$ the cocountable topology $\mathcal{T}_{\mathrm{coc}}$, whose
open sets are $\varnothing$ together with the sets whose complement is at most
countable ([[def-standard-topologies]], [[def-countable]]). Then:

1. **The closed sets are exactly the at most countable subsets of $\mathbb{R}$
   together with $\mathbb{R}$ itself**, and these two families are disjoint,
   $\mathbb{R}$ being uncountable ([[thm-r-uncountable]]). In particular every
   singleton is closed.
2. **Closures.** For $A \subseteq \mathbb{R}$,
   $$\overline{A} = \begin{cases} A & A \text{ at most countable} \\ \mathbb{R} & A \text{ uncountable.} \end{cases}$$
3. **A sequence converges if and only if it is eventually constant**
   ([[def-sequence-convergence-top]]), and then it converges to its eventual
   value and to no other point.

Claim 3 is what makes this space the standard witness that sequences can be blind
to a topology: the convergent sequences are the same as in the discrete topology,
while the topology itself is very far from discrete by claim 2.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with the cocountable topology, a subset $A \subseteq \mathbb{R}$, a sequence $(x_k)$ in $\mathbb{R}$ and points $p, q \in \mathbb{R}$. Write $R := \{\, x_k : k \in \mathbb{N} \,\}$ for the range of $(x_k)$.

[A1] The open sets of $\mathcal{T}_{\mathrm{coc}}$ are $\varnothing$ together with the sets of at most countable complement; a set is closed exactly when its complement is open ([[def-standard-topologies]], [[def-topological-space]]).

[A2] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K$ with $x_k \in N$ for all $k \ge K$; a neighbourhood of $p$ is a set containing an open set containing $p$, and every point lies in each of its neighbourhoods ([[def-sequence-convergence-top]], [[def-neighbourhood-top]]).

[L1] $\mathbb{R}$ is uncountable, that is not at most countable ([[thm-r-uncountable]], [[def-countable]]).

[L2] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L3] A nonempty set admitting a surjection from $\mathbb{N}$ is at most countable ([[lem-countable-iff-surjection-from-n]]).

[L4] $\overline{A}$ is the smallest closed superset of $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]], claim 2).

## Verification

**Proof technique:** direct.

1.1 A set $F \subseteq \mathbb{R}$ is closed exactly when $\mathbb{R} \setminus F$ is open, that is exactly when $\mathbb{R} \setminus F = \varnothing$, giving $F = \mathbb{R}$, or $\mathbb{R} \setminus (\mathbb{R} \setminus F) = F$ is at most countable. So the closed sets are $\mathbb{R}$ together with the at most countable sets, and $\mathbb{R}$ is not among the latter by [L1]. [A1, L1]

1.2 A singleton is finite, hence at most countable, hence closed. [A1, L1]

1.3 Assume $x_k \to p$. The map $k \mapsto x_k$ is a surjection $\mathbb{N} \to R$ and $R \ne \varnothing$, so $R$ is at most countable by [L3]; hence $S := R \setminus \{p\}$ is at most countable by [L2], and $U := \mathbb{R} \setminus S$ is open by [A1] and contains $p$. [assume-hyp, A1, L2, L3]

1.4 Conversely, if $(x_k)$ is eventually constant with value $q$, say $x_k = q$ for all $k \ge K_0$, then for every neighbourhood $N$ of $q$ one has $q \in N$ and hence $x_k \in N$ for all $k \ge K_0$; so $x_k \to q$. [A2]

2.1 If $A$ is at most countable then $A$ is closed by step 1.1, so $\overline{A} = A$ by [L4]. [step 1.1, L4]

2.2 If $A$ is uncountable then no at most countable set contains $A$, since a subset of an at most countable set is at most countable by [L2]; so the only closed superset of $A$ is $\mathbb{R}$ and $\overline{A} = \mathbb{R}$. [step 1.1, L2, L4]

2.3 By [A2] applied to the neighbourhood $U$ of step 1.3 there is $K$ with $x_k \in U$ for all $k \ge K$; and $x_k \in R$ together with $x_k \notin S = R \setminus \{p\}$ forces $x_k = p$. So $(x_k)$ is eventually constant with value $p$. [step 1.3, A2]

2.4 Suppose $(x_k)$ is eventually constant with value $q$, say $x_k = q$ for all $k \ge K_0$, and let $p \ne q$. The set $N := \mathbb{R} \setminus \{q\}$ is open by [A1], its complement $\{q\}$ being finite, and $p \in N$, so $N$ is a neighbourhood of $p$; but $x_k = q \notin N$ for every $k \ge K_0$, so no tail of the sequence lies in $N$ and $x_k \not\to p$. Hence the eventual value is the only limit. [step 1.4, A1, A2]

3.1 Claim 1 is step 1.1 with step 1.2, claim 2 is steps 2.1 and 2.2, and claim 3 is steps 2.3, 1.4 and 2.4. [step 1.1, step 1.2, step 2.1, step 2.2, step 2.3, step 1.4, step 2.4] ∎

## Remarks

- **Assuming the Axiom of Countable Choice, this space is not first countable.** Under that hypothesis [[thm-first-countable-sequences-suffice]] would otherwise force $\operatorname{seqcl}(A)=\overline{A}$ for every $A$, whereas claim 3 makes the sequential closure of $[0,1]$ equal to $[0,1]$ and claim 2 makes its closure all of $\mathbb{R}$ ([[cex-sequential-closure-strictly-inside-closure]]). Under the same hypothesis it is therefore not metrizable either.

- **No two nonempty open sets are disjoint here either.** If $U$ and $V$ are nonempty and open then $\mathbb{R} \setminus (U \cap V)$ is a union of two at most countable sets and hence at most countable, so $U \cap V$ cannot be empty, $\mathbb{R}$ being uncountable ([[thm-r-uncountable]]). The argument is the one used for the cofinite topology ([[ex-cofinite-topology]]) with "at most countable" in place of "finite".

- **The topology is strictly coarser than the discrete topology and strictly finer than the cofinite topology on $\mathbb{R}$.** It is strictly coarser than discrete because $\{0\}$ is not open, its complement being uncountable ([[thm-r-uncountable]], [[lem-subset-of-countable]]). It is finer than cofinite because a finite set is at most countable, and strictly so because $\mathbb{R} \setminus \mathbb{N}$ has an at most countable complement that is not finite.
