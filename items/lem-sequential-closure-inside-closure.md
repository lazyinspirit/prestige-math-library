---
id: lem-sequential-closure-inside-closure
kind: lemma
title: "The sequential closure is contained in the closure, continuity implies sequential continuity, and sequential limits need not be unique"
status: draft
origin: session
deps: [def-sequence-convergence-top, thm-closure-characterisation-top, def-continuous-map-top, def-standard-topologies, def-neighbourhood-top]
justified_by: []
forward_refs: [cex-sequential-closure-strictly-inside-closure, cex-sequentially-continuous-not-continuous]
aliases: []
landmark: true
short: "seqcl $\\subseteq$ closure; continuity $\\Rightarrow$ sequential continuity"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "J. Munkres, Topology, 2nd ed., §21"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $X$ and $Y$ be topological spaces, with convergence, sequential closure and
sequential continuity as in [[def-sequence-convergence-top]]. Then:

1. $A \subseteq \operatorname{seqcl}(A) \subseteq \overline{A}$ for every
   $A \subseteq X$.
2. If $f : X \to Y$ is continuous at $p \in X$ ([[def-continuous-map-top]]) then
   $f$ is sequentially continuous at $p$.
3. **Sequential limits need not be unique.** In the indiscrete topology on a set
   $X$ with at least two points ([[def-standard-topologies]]), every sequence in
   $X$ converges to every point of $X$.

Claim 3 is why this library never writes $\lim_k x_k$ for a sequence in a general
topological space: the symbol would not denote.

## Facts & Assumptions

**Given:** Topological spaces $X$ and $Y$, a subset $A \subseteq X$, a point $p \in X$, a function $f : X \to Y$, and a sequence $(x_k)$ in $X$.

[A1] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K \in \mathbb{N}$ with $x_k \in N$ for all $k \ge K$; $\operatorname{seqcl}(A)$ is the set of points to which some sequence with all terms in $A$ converges; $f$ is sequentially continuous at $p$ when $x_k \to p$ implies $f(x_k) \to f(p)$ ([[def-sequence-convergence-top]]).

[A2] $f$ is continuous at $p$ when $f^{-1}[V]$ is a neighbourhood of $p$ for every neighbourhood $V$ of $f(p)$ ([[def-continuous-map-top]]).

[L1] $p \in \overline{A}$ if and only if every neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]], clause (b)).

[L2] Every point lies in each of its neighbourhoods, since $x \in U \subseteq N$ ([[def-neighbourhood-top]]).

[L3] In the indiscrete topology on $X$ the only open sets are $\varnothing$ and $X$ ([[def-standard-topologies]]).

## Proof

**Proof technique:** direct.

1.1 $A \subseteq \operatorname{seqcl}(A)$: for $a \in A$ the constant sequence $x_k := a$ has all its terms in $A$, and it converges to $a$ because every neighbourhood of $a$ contains $a$, so the condition holds with $K = 0$. [A1, L2]

1.2 Let $p \in \operatorname{seqcl}(A)$ and fix a sequence $(x_k)$ with $x_k \in A$ for all $k$ and $x_k \to p$; let $N$ be any neighbourhood of $p$. Then $x_k \in N$ for all $k \ge K$ for some $K$, and in particular $x_K \in N \cap A$, so $N$ meets $A$. [A1, choose]

1.3 Assume $f$ is continuous at $p$ and let $(x_k)$ be a sequence with $x_k \to p$; let $V$ be a neighbourhood of $f(p)$. Then $f^{-1}[V]$ is a neighbourhood of $p$, so $x_k \in f^{-1}[V]$ for all $k \ge K$ for some $K$, that is $f(x_k) \in V$ for all $k \ge K$. [assume-hyp, A1, A2]

1.4 In the indiscrete topology, a neighbourhood $N$ of a point $p$ satisfies $p \in U \subseteq N$ for some open $U$; since $p \in U$ forces $U \ne \varnothing$ and hence $U = X$, the only neighbourhood of any point is $X$ itself. [L3, L2]

2.1 By step 1.2 every neighbourhood of $p$ meets $A$, so $p \in \overline{A}$; as $p$ was an arbitrary point of $\operatorname{seqcl}(A)$ this gives $\operatorname{seqcl}(A) \subseteq \overline{A}$, and with step 1.1 it gives claim 1. [step 1.1, step 1.2, L1]

2.2 By step 1.3 the sequence $(f(x_k))$ is eventually in every neighbourhood of $f(p)$, that is $f(x_k) \to f(p)$; as $(x_k)$ was an arbitrary sequence converging to $p$, $f$ is sequentially continuous at $p$, which is claim 2. [step 1.3, A1]

2.3 By step 1.4, for every $p \in X$ and every sequence $(x_k)$ in $X$ the only neighbourhood to be tested is $X$, and $x_k \in X$ for every $k$; so $x_k \to p$ for every $p \in X$. With at least two points in $X$ the limit is therefore not unique, which is claim 3. [step 1.4, A1]

3.1 Claims 1, 2 and 3 are established by step 2.1, step 2.2 and step 2.3 respectively. [step 2.1, step 2.2, step 2.3] ∎

## Remarks

- **Neither inclusion of claim 1 reverses, and the implication of claim 2 does not reverse either.** The witnesses are on the companion page and are both in the cocountable topology on $\mathbb{R}$: the sequential closure of $[0,1]$ is $[0,1]$ while its closure is all of $\mathbb{R}$ ([[cex-sequential-closure-strictly-inside-closure]]), and the identity from the cocountable topology to the usual topology is sequentially continuous and not continuous ([[cex-sequentially-continuous-not-continuous]]). This lemma therefore asserts the two inclusions and the one implication and nothing more.

- **A countability hypothesis repairs both.** In a first countable space the second inclusion of claim 1, $\operatorname{seqcl}(A) \subseteq \overline{A}$, is an equality, and the implication of claim 2 reverses; that is the theorem two items below, and it is where countable choice is spent.

- **Claim 3 is not an artefact of a strange space.** It is the generic situation: uniqueness of sequential limits is equivalent to a separation property of the space, and it holds in every metric space ([[lem-metric-limits-unique]]) because distinct points there are separated by disjoint balls.
