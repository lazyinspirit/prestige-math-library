---
id: ex-a-labelled-blowup-and-its-good-copies
kind: example
title: "A labelled blowup and its good copies"
status: draft
origin: pipeline
deps: [def-labelled-blowup-and-good-induced-copy, lem-good-copy-extension-count, thm-product-rule]
provenance:
  statement: ai-generated
  proof: ai-generated
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Bucic, Nguyen, Scott and Seymour, Induced subgraph density I"
      url: "https://arxiv.org/html/2301.10147v3"
      locator: "4.2, explicit specialization"
generation:
  role: example
proof_strategy: direct
---

## Example

Label $P_3$ by $1,2,3$, with edges $12,23$. Let $A_i=\{(i,1),(i,2),(i,3)\}$. Make each $A_i$ independent, put all edges between $A_1,A_2$ and between $A_2,A_3$, and no edges between $A_1,A_3$. This blowup has 27 good copies, 9 good copies extending any prescribed middle vertex, and 126 total labelled induced embeddings of $P_3$.

## Facts & Assumptions

**Given:** The three explicit blocks and edges specified in the example, with $P_3$ labelled $1,2,3$.

[F1] From [[def-labelled-blowup-and-good-induced-copy]]: For $I\subseteq V(J)$, a good embedding of $J[I]$ is an induced embedding $\phi$ satisfying $\phi(i)\in A_i$ for every $i\in I$.

[F2] From [[lem-good-copy-extension-count]]: Every good embedding of $J[I]$, $I\subseteq V(J)$, has at least $(t/j)^{j-|I|}$ good extensions to $J$.

[F3] From [[thm-product-rule]]: $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$

## Verification

1.1 The prescribed pairs have zero wrong adjacencies in either direction, so the displayed sets form a $(3,0)$-blowup and also a $(3,1/3)$-blowup. By [F1], each choice of one vertex from its assigned block gives a good embedding; conversely such an embedding has exactly those three choices. Thus [F3] counts $3\cdot3\cdot3=27$. [F1, F3]

2.1 If the middle image is fixed, the endpoint choices are independently the three vertices of $A_1$ and of $A_3$, giving $3\cdot3=9$ by [F3]. The lower bound [F2] at $t=j=3$, $|I|=1$, is $(3/3)^2=1$, so this instance exceeds that bound. For the empty partial embedding it is $(3/3)^3=1$, also below the exact 27. [F2, F3, step 1.1]

3.1 The full host is $K_{3,6}$ with parts $A_2$ and $A_1\cup A_3$. An induced $P_3$ has its center in one part and two distinct ordered endpoints in the other. Centers in $A_2$ give $3\cdot6\cdot5=90$ embeddings; centers in the other part give $6\cdot3\cdot2=36$. Both counts follow by successive choices, and the two cases partition all embeddings. The total is $90+36=126$, including choices whose endpoints lie in the same original block. [step 1.1, step 2.1, algebra] ∎

## Source notes

Proof/convention locator: [Bucic, Nguyen, Scott and Seymour, Induced subgraph density I](https://arxiv.org/html/2301.10147v3), 4.2, explicit specialization.
