---
id: cex-cg-interval-partition-with-nonmonotone-endpoints-is-not-a-congruence
kind: counterexample
title: "A partition into intervals with non-monotone endpoints need not be a lattice congruence"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 3
deps: [thm-cg-finite-lattice-interval-congruence-criterion, def-cg-finite-lattice-congruence-and-interval-projections, def-lattice-distributive-lattice-and-order-ideal, def-poset-interval-and-finiteness-conditions, def-boolean-lattice-and-levels, lem-equivalence-classes-partition]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: counterexample
sources:
  references:
    - title: "Nathan Reading, Lattice congruences of the weak order: algebra, combinatorics, and geometry, Triangle Lectures in Combinatorics (2019), slides on the order-theoretic characterization of a lattice congruence"
      url: "https://nreadin.math.ncsu.edu/papers/TLC.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Statement refuted

**Statement refuted:** every partition of a finite lattice into intervals (each class of the form $[d(x),u(x)]$ with endpoints in the class) is a lattice congruence.

**Counterexample.** In the diamond $D=\{0<a,b<1\}$ take the partition into the intervals $\{0,a\}=[0,a]$, $\{b\}=[b,b]$ and $\{1\}=[1,1]$. It is a partition into intervals, but it is not a lattice congruence: $0\equiv a$ and $b\equiv b$, while $0\vee b=b$ and $a\vee b=1$, so $b\not\equiv 1$. In terms of the criterion ([[thm-cg-finite-lattice-interval-congruence-criterion]]) the upper endpoint map fails to be order-preserving: $0\le b$, but $u(0)=a\not\le b=u(b)$. Thus the monotonicity hypothesis cannot be dropped, and the four-congruence count of the companion example on a chain and a diamond is a genuine restriction.

## Facts & Assumptions

**Given:** The diamond $D=\{0<a,b<1\}$ in which $a$ and $b$ are incomparable, identified with the Boolean lattice $B(\{a,b\})=\{\varnothing,\{a\},\{b\},\{a,b\}\}$ through $0=\varnothing$, $a=\{a\}$, $b=\{b\}$, $1=\{a,b\}$, with meet and join intersection and union ([[def-boolean-lattice-and-levels]]); and the partition of $D$ into the blocks $\{0,a\}$, $\{b\}$, $\{1\}$, with $[d,u]=\{z:d\le z\le u\}$ ([[def-poset-interval-and-finiteness-conditions]]).

[F1] In $D$ the order is inclusion and meet and join are intersection and union ([[def-boolean-lattice-and-levels]]); hence $0\vee b=b$, $a\vee b=1$, $0\wedge a=0$ and $a\wedge b=0$.

[F2] A partition of a set $A$ is a family of nonempty pairwise disjoint blocks whose union is $A$, and the relation that holds between $a$ and $b$ when one block contains both is an equivalence relation whose classes are the blocks ([[lem-equivalence-classes-partition]]).

[F3] A lattice congruence on a finite lattice is an equivalence relation with $x\equiv x'$ and $y\equiv y'$ implying $x\wedge y\equiv x'\wedge y'$ and $x\vee y\equiv x'\vee y'$ ([[def-cg-finite-lattice-congruence-and-interval-projections]]).

[F4] Let $\theta$ be an equivalence relation on a finite lattice whose classes are intervals $[d(x),u(x)]$ with endpoints in the class. Then $\theta$ is a lattice congruence if and only if the endpoint maps $d$ and $u$ are order-preserving ([[thm-cg-finite-lattice-interval-congruence-criterion]]).

## Proof

**Proof technique:** direct.

1.1 The three blocks are intervals with their endpoints in the block: $\{0,a\}=\{z:0\le z\le a\}=[0,a]$, $\{b\}=[b,b]$ and $\{1\}=[1,1]$; they are nonempty, pairwise disjoint, and their union is $\{0,a,b,1\}=D$. By [F2] they form a set partition of $D$, and calling its blocks classes gives the equivalence relation $\theta$ with $0\equiv a$, $b\equiv b$, $1\equiv 1$ and $0\not\equiv b$, $0\not\equiv 1$, $a\not\equiv b$, $a\not\equiv 1$, $b\not\equiv 1$. [F1, F2]

2.1 The relation $\theta$ is not a lattice congruence: $0\equiv a$ and $b\equiv b$ hold, but by [F1] one has $0\vee b=b$ and $a\vee b=1$, and $b\not\equiv 1$ because $b$ and $1$ lie in the distinct blocks $\{b\}$ and $\{1\}$; so the congruentiality requirement of [F3] for joins fails, and $\theta$ is not a lattice congruence. [F1, F3, step 1.1]

2.2 The upper endpoint map of the partition is not order-preserving: $u(0)=a$ and $u(b)=b$ by step 1.1, and $0\le b$ in $D$ while $a\not\le b$ because $a$ and $b$ are incomparable; hence $u(0)\not\le u(b)$. [F1, step 1.1]

3.1 Conclusion. The partition of $D$ into $\{0,a\}$, $\{b\}$, $\{1\}$ is a partition into intervals with endpoints in the class (step 1.1) and its upper endpoint map is not order-preserving (step 2.2), so by the criterion [F4] it is not a lattice congruence, in agreement with the direct failure of step 2.1; this refutes the displayed statement and shows that the monotonicity hypothesis of the criterion cannot be dropped. [F4, step 1.1, step 2.1, step 2.2] ∎
