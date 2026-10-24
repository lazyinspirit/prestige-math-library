---
id: lem-one-wl-isomorphism-invariance
kind: lemma
title: "One-dimensional Weisfeiler–Leman refinement is invariant under graph isomorphism"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-labeled-graph
  - def-graph-isomorphism
  - def-multiset
  - def-one-dimensional-weisfeiler-lehman-test
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§2, labeled graph isomorphism and the 1-WL refinement update."
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "§2, 1-WL isomorphism test and color refinement."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.3, one-dimensional Weisfeiler–Leman refinement."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $G$ and $H$ be finite vertex-labeled simple undirected graphs with labels in a common set, and let $\varphi:G\to H$ be a label-preserving graph isomorphism. At every finite round $t$, corresponding vertices have equal one-dimensional Weisfeiler–Leman colors: $c_t^G(v)=c_t^H(\varphi(v))$ for every $v\in V(G)$. Consequently their graph color multisets agree at every round, so the refinement does not distinguish isomorphic graphs.

## Statement references

[[def-finite-labeled-graph|finite vertex-labeled graphs and neighborhoods]]

[[def-graph-isomorphism|label-preserving graph isomorphisms]]

[[def-multiset|multiset equality and multiplicity]]

[[def-one-dimensional-weisfeiler-lehman-test|one-dimensional color refinement]]

[Morris et al., “Weisfeiler and Leman Go Neural,” §2](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, §2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.3](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

## Facts & Assumptions

**Given:** The finite labeled graphs $G,H$ and label-preserving isomorphism $\varphi:G\to H$ in the Statement. Prove the color and histogram claims.

[F1] [[def-graph-isomorphism]]: $\varphi$ is a bijection preserving labels and adjacency in both directions.

[F2] [[def-one-dimensional-weisfeiler-lehman-test]]: The round-$t+1$ color is the ordered pair of the vertex's round-$t$ color and the multiset of round-$t$ colors of its neighbors.

[F3] [[def-multiset]]: Equality of finite multisets is equality of multiplicities at every element.

## Proof

1.1 By induction on $t$, $c_t^G(v)=c_t^H(\varphi(v))$ for every $v\in V(G)$. At $t=0$ this is label preservation from [F1]. If it holds at $t$, bijectivity and adjacency preservation in [F1] give a bijection $N_G(v)\to N_H(\varphi(v))$, and corresponding neighbors have equal round-$t$ colors by the induction hypothesis. Thus the neighbor-color multisets agree; the center colors agree as well, so the ordered-pair update [F2] gives equality at round $t+1$. [given, F1, F2, induction, algebra]

2.1 The same vertex bijection therefore sends every occurrence of each round-$t$ color in $G$ to an occurrence of that color in $H$, and its inverse gives the reverse correspondence. Hence the two graph color multisets have equal multiplicities for each color by [F3]. Their round-$t$ histograms agree for every finite $t$, so no round distinguishes them. [given, F1, F3, step 1.1, algebra] ∎
