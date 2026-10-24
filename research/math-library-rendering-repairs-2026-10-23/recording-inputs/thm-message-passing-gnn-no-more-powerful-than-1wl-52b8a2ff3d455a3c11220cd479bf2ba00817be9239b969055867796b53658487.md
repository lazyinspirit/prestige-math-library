---
id: thm-message-passing-gnn-no-more-powerful-than-1wl
kind: theorem
title: "Message-passing GNNs cannot distinguish beyond one-dimensional Weisfeiler–Leman"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 2
deps:
  - def-finite-labeled-graph
  - def-multiset
  - def-message-passing-gnn
  - def-one-dimensional-weisfeiler-lehman-test
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Keyulu Xu, Weihua Hu, Jure Leskovec, and Stefanie Jegelka, How Powerful are Graph Neural Networks?"
      url: "https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf"
      locator: "Lemma 2 and complete proof in Appendix A; §2 message-passing and WL definitions."
    - title: "Christopher Morris et al., Weisfeiler and Leman Go Neural: Higher-Order Graph Neural Networks"
      url: "https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262"
      locator: "§3, Theorem 1 and its statement that every 1-GNN coloring is refined by 1-WL."
    - title: "Pan Li and Jure Leskovec, Graph Representation Learning"
      url: "https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf"
      locator: "Chapter 5 §5.3.3, Theorem 5.2 and its upper-bound interpretation."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Statement

Let $G,H$ be finite vertex-labeled simple undirected graphs with labels in a common set, and let a depth-$K$ aggregation-based message-passing graph neural network use the same initial embedding, layer maps, and graph readout on both graphs. If one-dimensional Weisfeiler–Leman color refinement has equal graph color multisets on $G$ and $H$ at every round $0,\ldots,K$, then the network gives the same graph output on $G$ and $H$. Equivalently, whenever this network distinguishes the pair, one-dimensional Weisfeiler–Leman distinguishes the pair at some round at most $K$.

## Statement references

[[def-finite-labeled-graph|finite vertex-labeled graphs and neighborhoods]]

[[def-multiset|finite multisets and multiplicities]]

[[def-message-passing-gnn|shared aggregation, update, and graph-readout maps]]

[[def-one-dimensional-weisfeiler-lehman-test|round colors and graph color multisets]]

[Xu, Hu, Leskovec, and Jegelka, “How Powerful are Graph Neural Networks?”, Lemma 2](https://cs.stanford.edu/people/jure/pubs/gin-iclr19.pdf)

[Morris et al., “Weisfeiler and Leman Go Neural,” §3, Theorem 1](https://ojs.aaai.org/index.php/AAAI/article/download/4384/4262)

[Li and Leskovec, *Graph Representation Learning*, Chapter 5 §5.3.3, Theorem 5.2](https://www-cs-faculty.stanford.edu/people/jure/pubs/gnnpower-springer22.pdf)

## Facts & Assumptions

**Given:** The two finite labeled graphs, their equal 1-WL color multisets through round $K$, and one shared depth-$K$ message-passing GNN as in the Statement. Prove its graph outputs agree.

[F1] [[def-message-passing-gnn]]: Each layer applies the same aggregation function to the multiset of neighbor states and then the same update function to the center state and aggregate.

[F2] [[def-one-dimensional-weisfeiler-lehman-test]]: Each next WL color is the ordered pair of the current color and the multiset of current neighbor colors; the graph color multiset records every vertex color with multiplicity.

[F3] [[def-multiset]]: A finite multiset is its multiplicity function, so applying a function to each occurrence preserves equality of multisets.

[F4] [[def-message-passing-gnn]]: The graph readout is a function of the multiset of final node states.

## Proof

1.1 By induction on $t=0,\ldots,K$, equal round-$t$ WL colors of vertices from either graph imply equal GNN states after $t$ layers. At $t=0$, the shared initial embedding gives this implication. If it holds at $t$ and two vertices have equal round-$(t+1)$ colors, [F2] says their center colors and neighbor-color multisets agree. By the induction hypothesis, equal neighbor colors have equal GNN states; applying this correspondence occurrence by occurrence gives equal neighbor-state multisets. The shared aggregation and update functions in [F1] therefore give equal next-layer states. Thus a well-defined map from each round-$t$ color occurring in either graph to its common GNN state exists. [given, F1, F2, induction, algebra]

2.1 At round $K$, the assumed equal WL color multisets become equal multisets of GNN states when each color is sent to its common state from step 1.1; multiplicities are preserved by [F3]. The shared graph readout in [F4] receives equal multisets, so the two graph outputs are equal. The contrapositive gives the stated distinguishing implication. [given, F2, F3, F4, step 1.1, algebra] ∎


## Remarks

The following square illustrates the induction in step 1.1 for $0\le t<K$. Let $D_t\subseteq C_t$ be the colors occurring in either graph, and let $\phi_t:D_t\to H_t$ send each color to its common node state. Let $P_t\subseteq D_t\times\mathsf M_{\mathrm{fin}}(D_t)$ consist of the center-color and neighbor-color-multiset pairs actually occurring in either graph. The canonical WL update is $q_t(c,M)=(c,M)\in D_{t+1}$. Define $p_t(c,M)=(\phi_t(c),\mathsf M_{\mathrm{fin}}(\phi_t)(M))$, where the multiset map applies $\phi_t$ to each occurrence, and define $F_{t+1}(h,S)=U_{t+1}(h,A_{t+1}(S))$ using the shared network maps.

```tikzcd
\begin{tikzcd}[row sep=large, column sep=large, scale=1.8, transform shape]
P_t \arrow[r, "q_t"] \arrow[d, "p_t"'] & D_{t+1} \arrow[d, "\phi_{t+1}"] \\
H_t\times\mathsf M_{\mathrm{fin}}(H_t) \arrow[r, "F_{t+1}"'] & H_{t+1}
\end{tikzcd}
```

Commutativity means $\phi_{t+1}(q_t(c,M))=F_{t+1}(p_t(c,M))$ for each occurring pair. Equal next-round colors therefore yield the same next-layer state, even for vertices in different graphs. At round $K$, applying $\phi_K$ occurrence by occurrence to equal graph color multisets gives equal final-state multisets and hence equal readouts, as in step 2.1. The square illustrates the argument; the proof above is independent of it and does not assert that $\phi_t$ is injective.
