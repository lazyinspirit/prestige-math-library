---
id: thm-injective-message-passing-matches-1wl
kind: theorem
title: "Injective message passing matches the one-dimensional Weisfeiler–Leman test"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps:
  - def-finite-labeled-graph
  - def-multiset
  - def-message-passing-gnn
  - def-one-dimensional-weisfeiler-lehman-test
  - lem-countable-bounded-multiset-sum-encoding
  - def-graph-isomorphism-network
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "Theorem 3 and complete proof in Appendix B; §4.1 Eq. (4.1), Lemma 5, and Corollary 6 with proofs in Appendices D–E."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§3, Theorem 2, suitable 1-GNN parameters and initial label encoding."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.3 Theorem 5.3 and §5.3.4, GIN sum update and injective multiset encoding."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $G,H$ be finite vertex-labeled simple undirected graphs with labels in a common set. Suppose one-dimensional Weisfeiler–Leman distinguishes them at round $K$. Use a shared initial embedding that is injective on the labels occurring in the pair. Assume each message-passing layer's aggregation function is injective on the neighbor multisets encountered and its update function is injective on the center-state/aggregate pairs encountered. Assume also that the graph readout is injective on the final node-state multisets of the pair. Then a depth-$K$ aggregation-based message-passing graph neural network distinguishes $G$ and $H$.

For the GIN sum construction, if the active feature universe is countable and every neighbor multiset has size at most a fixed $\Delta\in\mathbb N_0$, the bounded-multiset lemma gives an injective scalar code for the GIN preactivation $(1+\varepsilon)h_v+\sum_{u\in N(v)}h_u$ for any irrational $\varepsilon$, when current feature values use that code. If each graph has at most a fixed $N\in\mathbb N_0$ vertices, the same lemma gives an injective sum encoding for the graph-level readout multiset. This is an existence statement for injective maps on the relevant code sets; it does not assert that every fixed finite MLP realizes an arbitrary such map. The post-MLP update and graph readout must still satisfy the injectivity hypotheses above.

## Statement references

[[def-finite-labeled-graph|finite vertex-labeled graphs and neighborhoods]]

[[def-multiset|finite multisets and multiplicities]]

[[def-message-passing-gnn|aggregation-based updates and graph readout]]

[[def-one-dimensional-weisfeiler-lehman-test|finite-round WL colors and histograms]]

[[def-graph-isomorphism-network|GIN update formula and finite-MLP scope]]

[[lem-countable-bounded-multiset-sum-encoding|injective sum and irrational self-weight encodings]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, Theorem 3](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §3, Theorems 1–2](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §§5.3.3–5.3.4](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

## Facts & Assumptions

**Given:** The graphs, finite round $K$, one shared message-passing network, and the injectivity hypotheses stated above. Prove that its depth-$K$ graph outputs differ, and justify the countable GIN sum-code clause.

[A1] The initial embedding is injective on the common labels occurring in $G$ and $H$.

[A2] At each round, the aggregation function is injective on the encountered neighbor multisets and the update function is injective on the encountered pairs of center state and aggregate.

[A3] The graph readout is injective on the two final multisets of node states.

[F1] [[def-one-dimensional-weisfeiler-lehman-test]]: A round-$(k+1)$ color is the ordered pair of a round-$k$ center color and the multiset of round-$k$ neighbor colors; the round-$k$ graph histogram is the multiset of all vertex colors.

[F2] [[def-message-passing-gnn]]: A shared layer aggregates the multiset of neighbor states and updates the center state.

[F3] [[lem-countable-bounded-multiset-sum-encoding]]: On a countable feature universe with multiset-size bound $M$, a sum code is injective on multisets, and for irrational $\varepsilon$ the code $(c,S)\mapsto(1+\varepsilon)\phi(c)+\sum_{x\in S}\phi(x)$ is injective on center/multiset pairs.

[F4] [[def-graph-isomorphism-network]]: The GIN preactivation is $(1+\varepsilon_k)h_v^{k-1}+\sum_{u\in N_G(v)}h_u^{k-1}$ before its layer MLP.

[F5] [[def-message-passing-gnn]]: The graph output is the readout of the final node-state multiset.

## Proof

1.1 For each $k\le K$, we prove that there is an injective map $\psi_k$ from the WL colors occurring at round $k$ in either graph to their GNN states. For $k=0$, use the initial embedding and [A1]. If this holds at $k-1$, a round-$k$ WL color has the form $(c,S)$ by [F1]. The injective map $\psi_{k-1}$ sends different center colors to different center states and, occurrence by occurrence, different neighbor-color multisets to different neighbor-state multisets. By [A2], their aggregates and then their updated states remain different whenever $(c,S)$ differs. Equal WL colors give equal states because the layer maps are shared functions. Thus the resulting round-$k$ state map $\psi_k$ is well-defined and injective. [given, A1, A2, F1, F2, induction, algebra]

2.1 The WL histograms at round $K$ differ by hypothesis. Applying the injective map $\psi_K$ to each color occurrence preserves multiplicities and keeps these two multisets different. The final node-state multisets therefore differ, and [A3] makes their graph readouts different by [F5]. [given, A3, F1, F5, step 1.1, algebra]

3.1 If the active feature set is countable and neighbor multisets have size at most $\Delta$, apply [F3] with $M=\Delta$ to obtain the stated center/multiset preactivation code for any irrational $\varepsilon$. If each graph has at most $N$ vertices, apply the multiset part of [F3] with $M=N$ to obtain an injective sum code for final node-state multisets. Formula [F4] identifies the first code with the GIN preactivation when the current features use $\phi$; the injectivity of any post-MLP or readout realizing the full theorem remains the separate hypothesis [A2]–[A3]. [given, A2, A3, F3, F4, algebra] ∎
