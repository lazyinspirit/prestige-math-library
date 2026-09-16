---
id: lem-brunner-choice-and-urysohn-obstructions
kind: lemma
title: "Brunner's models satisfy the required choice and Urysohn obstructions"
status: draft
origin: pipeline
deps: [def-brunner-ordered-lauchli-permutation-models, def-normal-and-t4-spaces, def-hausdorff-space, def-continuous-map-top, thm-a-compact-hausdorff-space-is-regular-and-normal, def-countable-choice, def-compact-space, def-subspace-topology-top, def-order-topology-on-a-linearly-ordered-set, def-permutation-support-system-and-normal-filter, def-symmetric-and-hereditarily-symmetric-sets, def-interval, thm-fraenkel-mostowski-permutation-model]
justified_by: []
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
---

## Statement

The real-ordered countable-compact-support Läuchli model of
[[def-brunner-ordered-lauchli-permutation-models]] satisfies the Axiom of
Countable Choice ([[def-countable-choice]]), and both that model and the
rational-ordered finite-support model contain a nondegenerate compact linearly
ordered normal space $L$ ([[def-compact-space]], [[def-normal-and-t4-spaces]])
on which every continuous real-valued function is constant
([[def-continuous-map-top]]); hence Urysohn's lemma fails in both models.

## Facts & Assumptions

**Given:** The two Läuchli models of [[def-brunner-ordered-lauchli-permutation-models]], their continuum $L$, and a countable family $(F_n)_{n \in \mathbb{N}}$ of nonempty sets in the real-ordered model.

[F1] In a transitive ZFA model with an internal normal permutation system, the hereditarily symmetric interpretation is a ZFA model with the same atoms and kernel; a set is in it exactly when it has a support in the filter ([[thm-fraenkel-mostowski-permutation-model]], [[def-symmetric-and-hereditarily-symmetric-sets]], [[def-permutation-support-system-and-normal-filter]]).

[F2] The countable-compact-support instance has the support property: a countable family of sets in the model has a single support that is compact in the completion, and every bounded interval disjoint from that support can be compressed by a support-fixing order automorphism ([[def-brunner-ordered-lauchli-permutation-models]]).

[F3] $L$ is a compact Hausdorff ordered space with two distinct endpoint cuts; a compact Hausdorff space is regular and normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[def-hausdorff-space]], [[def-order-topology-on-a-linearly-ordered-set]], [[def-subspace-topology-top]]).

[L1] A continuous map $f : L \to \mathbb{R}$ is constant when it is invariant under a family of automorphisms that moves every point of $L$ through every interval: if $x,y \in L$ then some support-fixing automorphism sends $x$ to a point arbitrarily close to $y$, and continuity together with invariance gives $f(x) = f(y)$ ([[def-continuous-map-top]], [[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 Let $(F_n)$ be a countable family of nonempty sets in the real-ordered model; by [F2] and [F1] the family has a single support $e$ that is compact in the completion of the ordered atoms, and each $F_n$ is nonempty in the model. [given, F1, F2]

1.2 For the Urysohn obstruction: let $g : L \to \mathbb{R}$ be continuous in one of the two models and fix a support $e$ of $g$; any two points $x,y \in L$ lie in intervals that can be compressed into one another by automorphisms of $\operatorname{fix}(e)$ by [F2], so invariance of $g$ under $\operatorname{fix}(e)$ and continuity give $g(x) = g(y)$ as in [L1]; hence $g$ is constant. [given, F2, L1]

2.1 In the ground model, which satisfies AC, choose $x_n \in F_n$ and a support $e_n$ for $x_n$ for every $n$; the ground model contains the chosen points because each $F_n$ is a nonempty set of the ground universe, and a support exists for each by [F1]. [step 1.1, F1]

2.2 For every $n$, let $p_n \in \operatorname{fix}(e)$ be the order automorphism of the completion that fixes the support $e$ pointwise and compresses the moved support $e_n$ into the interval of diameter $1/(n+1)$ placed inside the $n$-th component interval of the complement of $e$, keeping the endpoints of that component fixed; such automorphisms exist by the strong connectedness clause of [F2]. [step 1.1, F2]

3.1 The set $f := e \cup \bigcup_n p_n(e_n)$ is closed and bounded in the completion, hence compact: the intervals of diameter $1/(n+1)$ accumulate only at points of $e$, and $e$ is compact by [F2]. [step 2.2, F2]

4.1 Since each $p_n$ fixes $e$ pointwise it fixes every set supported by $e$, in particular each $F_n$, so $y_n := p_n(x_n) \in F_n$; and $y_n$ is supported by $p_n(e_n)$, so the single compact set $f$ supports the whole sequence $(y_n)$. [step 2.2, step 3.1, F1]

5.1 The countable choice function $n \mapsto y_n$ therefore lies in the symmetric model, because it is supported by the single set $f$ of the support ideal; as the family $(F_n)$ was arbitrary, countable choice holds in the real-ordered model. [step 4.1, F1]

6.1 The two endpoint cuts of $L$ are disjoint closed subsets by [F3], and a continuous $f$ separating them in the sense of Urysohn's lemma would be nonconstant, since it takes the value $0$ at one endpoint and $1$ at the other; by step 1.2 no such continuous map exists, so Urysohn's lemma fails in both models. [step 1.2, F3] ∎

## Remarks

- **Where the compactness of the support is used.** The union $\bigcup_n p_n(e_n)$ of the moved supports is in general not compact; it is the compression into intervals accumulating only at the compact set $e$ that makes the union closed and bounded, hence compact. Step 3.1 is therefore the only place where the $\mathrm{ZFA}$ nature of the model enters the countable-choice argument, and no union of compact sets is claimed to be compact.

- **Why continuous functions are constant.** The invariance is under the whole stabiliser of a support, which acts transitively on the relevant intervals; continuity converts that into constancy. Both models share this argument, and it is the same obstruction that refutes Urysohn's lemma in the two transfer theorems below.
