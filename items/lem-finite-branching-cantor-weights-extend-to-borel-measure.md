---
dependency_level: 0
id: lem-finite-branching-cantor-weights-extend-to-borel-measure
kind: lemma
title: "Finite Cantor tree weights extend to a Borel probability measure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-altered
deps:
  - def-countable-choice
  - thm-caratheodory-extension-theorem
proof_strategy: direct
sources:
  references:
    - title: "Mass-transference and metric approximation source proof, with explicit local reconstruction"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v164-n3-p06.pdf"
      locator: "\u00a75.3; explicit finite-cylinder extension replaces the standard-extension sentence"
---

## Statement

Assume Countable Choice. Let a rooted tree have a nonempty finite set of children at each node. Associate to each node $v$ a nonempty compact subset $K_v$ of a fixed compact metric space, with children pairwise disjoint and contained in $K_v$, and with diameters tending uniformly to zero at increasing depths. Assign $w(\mathrm{root})=1$, $w(v)\ge0$, and $\sum_{u\text{ child of }v}w(u)=w(v)$. There is a Borel probability measure on $K=\bigcap_j\bigcup_{|v|=j}K_v$ with mass $w(v)$ on $K_v$.

## Facts & Assumptions

**Given:** The finite tree, nested compact sets and consistent weights.

[A1] Countable Choice is allowed for measure extension. [[def-countable-choice]]

[F1] A premeasure on an algebra extends to its generated sigma-algebra under Countable Choice. [[thm-caratheodory-extension-theorem]]

## Proof

1.1 Order the finite children at each node by their supplied finite enumeration. The space $T$ of infinite branches, with cylinder sets specifying a finite prefix, is compact: if an open-cylinder cover had no finite subcover, the root cylinder would be uncovered by every finite subfamily, and at each stage at least one child would have the same property. Repeatedly taking the least such child constructs a branch; its membership in a covering cylinder contradicts that property. Every branch determines one point in the nested compact sets, because the finite intersection property inside the compact root gives existence and the vanishing diameters give uniqueness. [given, construct, algebra]

2.1 Finite unions of cylinders form an algebra. Define their mass by summing the weights after refinement to one common depth. Consistency makes this independent of refinement and finitely additive. If a countable disjoint union of algebra sets is itself an algebra set, compactness gives a finite subcover by those open algebra sets; disjointness makes all other terms empty. Hence the mass is a premeasure. Apply [F1] to obtain a probability measure on the cylinder sigma-algebra. [step 1.1, A1, F1, algebra]

3.1 The branch-to-point map is continuous: all points in a depth-$j$ cylinder lie in the corresponding set of uniformly vanishing diameter. Push the measure forward to the metric space. Every point of $K$ has a unique branch, since level sets are disjoint, and every branch point lies in $K$. The preimage of $K_v\cap K$ is its cylinder, so the measure has the prescribed mass and is supported on $K$. [step 1.1, step 2.1, algebra] ∎
