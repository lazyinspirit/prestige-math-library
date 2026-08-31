---
id: thm-every-graph-on-at-most-four-vertices-has-the-erdos-hajnal-property
kind: theorem
title: "Every graph on at most four vertices has the Erdős-Hajnal property"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property, cor-the-four-vertex-path-has-the-erdos-hajnal-property, thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four, thm-prime-graphs-are-the-graphs-that-are-not-substitutions, thm-substitution-preserves-the-erdos-hajnal-property]
justified_by: []
aliases: []
landmark: false
proof_strategy: cases
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Maria Chudnovsky, The Erdős-Hajnal Conjecture — A Survey, Section 2"
      url: "https://web.math.princeton.edu/~mchudnov/EHsurvey.pdf"
    - title: "Tung H. Nguyen, Notes on Recent Work on the Erdős-Hajnal Conjecture, Section 1"
      url: "https://web.math.princeton.edu/~tunghn/ehnotes.pdf"
pipeline_run: null
---

## Statement

Every finite graph $H$ with $|V(H)|\le 4$ has the Erdős-Hajnal property.

## Facts & Assumptions

**Given:** A finite graph $H$ with $|V(H)|\le 4$.

[L1] Every graph on at most three vertices has the Erdős-Hajnal property
([[cor-every-graph-on-at-most-three-vertices-has-the-erdos-hajnal-property]]).

[L2] The graph $P_4$ has the Erdős-Hajnal property
([[cor-the-four-vertex-path-has-the-erdos-hajnal-property]]).

[L3] Every prime graph on at least four vertices contains an induced $P_4$
([[thm-every-prime-graph-on-at-least-four-vertices-contains-an-induced-p-four]]).

[L4] A finite graph with at least two vertices is prime exactly when it is not a
nontrivial substitution
([[thm-prime-graphs-are-the-graphs-that-are-not-substitutions]]).

[L5] Substitution preserves the Erdős-Hajnal property
([[thm-substitution-preserves-the-erdos-hajnal-property]]).

[F1] If $|V(H)|=4$ and $H$ contains an induced $P_4$, then that induced copy
uses all four vertices, so $H\cong P_4$.

[F2] If $H\cong H_1[v\to H_2]$ and $|V(H)|=4$ with $|V(H_1)|,|V(H_2)|\ge 2$,
then $|V(H_1)|+|V(H_2)|-1=4$, so each factor has at most three vertices.

## Proof

**Proof technique:** cases.

1.1 [assume-case small] If $|V(H)|\le 3$, then [L1] already gives the Erdős-Hajnal property for $H$. [L1]

1.2 [assume-case four] Assume $|V(H)|=4$. We distinguish whether $H$ is prime. [given, cases]

2.1 [assume-case prime] Suppose that $H$ is prime. Then [L3] gives an induced $P_4$ in $H$, and [F1] forces $H\cong P_4$. Therefore $H$ has the Erdős-Hajnal property by [L2]. [step 1.2, L2, L3, F1]

2.2 [assume-case nonprime] Suppose that $H$ is not prime. Since $|V(H)|=4\ge 2$, [L4] yields a substitution representation $H\cong H_1[v\to H_2]$ with $|V(H_1)|,|V(H_2)|\ge 2$. By [F2], both factors have at most three vertices, so [L1] gives the Erdős-Hajnal property for $H_1$ and $H_2$. Applying [L5], the substitution $H$ also has the Erdős-Hajnal property. [step 1.2, L1, L4, L5, F2]

3.1 The cases in steps 1.1, 2.1, and 2.2 exhaust all graphs with at most four vertices. Hence every such graph has the Erdős-Hajnal property. [step 1.1, step 2.1, step 2.2, cases-exhaustive] ∎
