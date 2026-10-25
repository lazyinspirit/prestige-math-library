---
id: def-finite-two-way-relay-channel-and-causal-code
kind: definition
title: Finite two-way relay channel and causal code
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps: [def-finite-discrete-memoryless-network-and-code]
aliases: []
axiom_use: No choice axiom is used; all channel alphabets and message sets are finite.
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pending
sources:
  references:
    - title: Abbas El Gamal and Young-Han Kim, Lecture Notes on Network Information Theory, arXiv:1001.3404v4
      url: https://arxiv.org/pdf/1001.3404v4
      locator: Chapter 17, §§17.4–17.6, relay channel with feedback, two-way channel, and directed information, printed pp. 444–453.
    - title: Sung Hoon Lim, Young-Han Kim, Abbas El Gamal, and Sae-Young Chung, Noisy Network Coding, IEEE Transactions on Information Theory 57(5), 2011
      url: https://isl.stanford.edu/~abbas/papers/Noisy%20Network%20Coding.pdf
      locator: §II, AWGN two-way relay model and general DMN causal code, PDF pp. 7–9.
---

## Definition

A **finite two-way relay channel** is the three-node DMN of [[def-finite-discrete-memoryless-network-and-code]] with terminal inputs $X_1,X_2$, relay input $X_r$, terminal outputs $Y_1,Y_2$, relay observation $Y_r$, and transition law $W(y_1,y_2,y_r\mid x_1,x_2,x_r)$. Terminals 1 and 2 have independent uniform messages $M_1$ and $M_2$ and wish to exchange them. A causal code uses $X_{1,i}=f_{1,i}(M_1,Y_1^{i-1})$, $X_{2,i}=f_{2,i}(M_2,Y_2^{i-1})$, and $X_{r,i}=f_{r,i}(Y_r^{i-1})$; terminal 1 estimates $M_2$ from $(M_1,Y_1^n)$ and terminal 2 estimates $M_1$ from $(M_2,Y_2^n)$. The probability of error is the probability either estimate is wrong. This is a full-duplex model: all three nodes choose an input at every use, and each input depends only on that node's message and past observations.


## Remarks

At use $i$, the three encoder outputs enter a single joint channel law. The diagram shows the available encoder information on the left and the current outputs on the right; the superscript $i-1$ is essential, since current outputs are unavailable when the inputs are chosen.

```tikz
\begin{tikzpicture}[>=stealth, scale=1.4, transform shape, every node/.style={font=\small}]
\node (a) at (-2.2,2) {$(M_1,Y_1^{i-1})$};
\node (b) at (-2.2,0) {$(M_2,Y_2^{i-1})$};
\node (r) at (-2.2,-2) {$Y_r^{i-1}$};
\node[draw,minimum width=1.2cm,minimum height=.8cm] (f1) at (0,2) {$f_{1,i}$};
\node[draw,minimum width=1.2cm,minimum height=.8cm] (f2) at (0,0) {$f_{2,i}$};
\node[draw,minimum width=1.2cm,minimum height=.8cm] (fr) at (0,-2) {$f_{r,i}$};
\node[draw,minimum width=3.2cm,minimum height=5.3cm,align=center] (w) at (4.4,0) {Joint channel\\$W(y_1,y_2,y_r\mid$\\$x_1,x_2,x_r)$};
\draw[->] (a) -- (f1);
\draw[->] (b) -- (f2);
\draw[->] (r) -- (fr);
\draw[->] (f1.east) -- node[above] {$X_{1,i}$} (2.8,2);
\draw[->] (f2.east) -- node[above] {$X_{2,i}$} (2.8,0);
\draw[->] (fr.east) -- node[above] {$X_{r,i}$} (2.8,-2);
\draw[->] (6,2) -- (8,2) node[right] {$Y_{1,i}$};
\draw[->] (6,0) -- (8,0) node[right] {$Y_{2,i}$};
\draw[->] (6,-2) -- (8,-2) node[right] {$Y_{r,i}$};
\end{tikzpicture}
```

All three nodes transmit and observe at every use. Only observations from earlier uses can feed their later encoders; the relay has no message argument. After use $n$, terminal 1 forms its estimate of $M_2$ from $(M_1,Y_1^n)$, and terminal 2 forms its estimate of $M_1$ from $(M_2,Y_2^n)$. The separate output arrows are components of the joint law, with no conditional independence asserted. This illustration adds no restriction to the definition.
