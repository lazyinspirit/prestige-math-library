---
page: quantum-key-distribution-and-composable-secrecy
title: Quantum Key Distribution and Composable Secrecy
status: published
requires:
  - secrecy-and-information-privacy
  - quantum-relative-entropy-data-processing-and-strong-subadditivity
items:
  - def-qkd-finite-authenticated-protocol
  - lem-qkd-classical-key-copy-map-is-channel
  - lem-qkd-trace-norm-adds-over-classical-blocks
  - def-qkd-abort-aware-composable-security
  - lem-qkd-copy-replacement-distance-is-correctness-error
  - lem-qkd-abort-aware-ideal-output-is-state
  - thm-qkd-composable-secrecy-sum-bound
examples: []
---

This page defines the finite two-party protocol output model, with a public authenticated transcript visible to Eve and a common abort outcome. It gives an abort-aware ideal output that preserves the real abort branch and transcript-adversary marginal, defines unconditional correctness and acceptance-weighted trace-distance secrecy errors, and proves that their sum bounds the real-ideal trace distance. The finite-dimensional argument uses a classical key-copy map and explicit trace-norm block calculations. It assumes an ideal authenticated public channel and does not establish security of any particular QKD implementation or authentication scheme.

In one quantum round, the adversarial channel receives Alice's sent register and Eve's current memory, forwards a received register to Bob, and retains an updated memory. The dashed route below is public: each message reaches the other honest party unchanged and is also visible to Eve. The sketch is a one-round resource picture; proofs use the explicit finite classical-quantum output blocks in the item definitions.

```tikz
\begin{tikzpicture}[>=stealth]
\node[draw,rounded corners] (alice) at (0,0) {Alice};
\node[draw,rounded corners] (attack) at (4,0) {Eve's quantum channel $\mathcal E$};
\node[draw,rounded corners] (bob) at (8,0) {Bob};
\node[draw,rounded corners] (eve) at (4,-2) {Eve keeps $E$ and observes $T$};
\draw[->] (alice) -- node[above] {$Q_A$} (attack);
\draw[->] (attack) -- node[above] {$Q_B$} (bob);
\draw[->] (attack) -- node[right] {retained memory} (eve);
\draw[<->,dashed] (alice) to[bend right=20] node[below] {authenticated public transcript $T$} (bob);
\draw[->,dashed] (alice) to[bend right=12] node[left] {message copy} (eve);
\draw[->,dashed] (bob) to[bend left=12] node[right] {message copy} (eve);
\end{tikzpicture}
```
