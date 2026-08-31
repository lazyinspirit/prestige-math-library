---
id: thm-every-graph-on-at-most-five-vertices-has-the-erdos-hajnal-property
kind: theorem
title: "Every graph on at most five vertices has the Erdős-Hajnal property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property, cor-the-bull-graph-has-the-erdos-hajnal-property, cor-the-five-cycle-has-the-erdos-hajnal-property, cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property, lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement, thm-prime-graphs-are-the-graphs-that-are-not-substitutions, thm-substitution-preserves-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture — A Survey, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Shenwei Huang, Yiao Ju, and Yidong Zhou, Erdős-Hajnal beyond the five-vertex path, Section 1"
      url: "https://arxiv.org/pdf/2606.06258v2"
pipeline_run: null
---

## Statement

Every finite graph $H$ with $|V(H)|\le 5$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A finite graph $H$ with $|V(H)|\le 5$.

[L1] Every graph on at most four vertices has the Erdős-Hajnal property
([[thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property]]).

[L2] The bull, $C_5$, $P_5$, and $\overline{P_5}$ have the Erdős-Hajnal property
([[cor-the-bull-graph-has-the-erdos-hajnal-property]], [[cor-the-five-cycle-has-the-erdos-hajnal-property]], [[cor-the-five-vertex-path-and-its-complement-have-the-erdos-hajnal-property]]).

[L3] The prime five-vertex graphs are exactly the bull, $C_5$, $P_5$, and
$\overline{P_5}$
([[lem-the-prime-five-vertex-graphs-are-exactly-the-bull-five-cycle-five-vertex-path-and-its-complement]]).

[L4] A finite graph with at least two vertices is prime exactly when it is not a
nontrivial substitution
([[thm-prime-graphs-are-the-graphs-that-are-not-substitutions]]).

[L5] Substitution preserves the Erdős-Hajnal property
([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[F1] If $H\cong H_1[v\to H_2]$ and $|V(H)|=5$ with $|V(H_1)|,|V(H_2)|\ge 2$,
then $|V(H_1)|+|V(H_2)|-1=5$, so each factor has at most four vertices.

## Proof

**Proof technique:** cases.

1.1 [assume-case small] If $|V(H)|\le 4$, then [L1] gives the result. [L1]

1.2 [assume-case five] Assume $|V(H)|=5$. We distinguish whether $H$ is prime. [given, cases]

2.1 [assume-case prime] If $H$ is prime, then [L3] shows that $H$ is isomorphic to one of the four graphs listed in [L2]. Therefore $H$ has the Erdős-Hajnal property. [step 1.2, L2, L3]

2.2 [assume-case nonprime] If $H$ is not prime, then [L4] gives a substitution representation $H\cong H_1[v\to H_2]$ with $|V(H_1)|,|V(H_2)|\ge 2$. By [F1] both factors have at most four vertices, so [L1] gives the Erdős-Hajnal property for $H_1$ and $H_2$. Applying [L5], the graph $H$ also has the Erdős-Hajnal property. [step 1.2, L1, L4, L5, F1]

3.1 The cases in steps 1.1, 2.1, and 2.2 exhaust all graphs with at most five vertices. Hence every such graph has the Erdős-Hajnal property. [step 1.1, step 2.1, step 2.2, cases-exhaustive] ∎
