---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-it-degradable-channel.json
  precheck: n/a
id: def-it-degradable-channel
kind: definition
title: Degradable and antidegradable channels
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps:
  - def-it-quantum-channel-complement-and-coherent-information
  - def-qc-quantum-channel
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, Exercise 8.3 and §8.2.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, §§13.5 and 24.8"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $\mathcal N:A\to B$ be a finite-dimensional channel and fix a complementary channel $\mathcal N^c:A\to E$ coming from one finite Stinespring isometry. Relative to this chosen dilation, $\mathcal N$ is **degradable** if there exists a quantum channel $\mathcal D:B\to E$ such that

$$\mathcal N^c=\mathcal D\circ\mathcal N.$$

It is **antidegradable** relative to this dilation if there exists a quantum channel $\mathcal A:E\to B$ such that

$$\mathcal N=\mathcal A\circ\mathcal N^c.$$

All hypotheses and conclusions below use the same fixed complementary dilation and the corresponding degrading or antidegrading channel.

## Remarks

For the fixed complementary dilation above, the left triangle illustrates degradability and the right triangle illustrates antidegradability. Each triangle commutes when its corresponding degrading or antidegrading channel exists; the two conditions are separate. Objects are operator spaces, so all arrows are quantum channels in the sense of the definition.

```tikz
\begin{tikzpicture}[>=stealth]
\node at (1.6,1) {Degradable};
\node (a) at (0,0) {$\mathcal L(A)$};
\node (b) at (3.2,0) {$\mathcal L(B)$};
\node (e) at (3.2,-2) {$\mathcal L(E)$};
\draw[->] (a) -- node[above] {$\mathcal N$} (b);
\draw[->] (b) -- node[right] {$\mathcal D$} (e);
\draw[->] (a) -- node[below left] {$\mathcal N^c$} (e);
\node at (7.2,1) {Antidegradable};
\node (aa) at (5.6,0) {$\mathcal L(A)$};
\node (ee) at (8.8,0) {$\mathcal L(E)$};
\node (bb) at (8.8,-2) {$\mathcal L(B)$};
\draw[->] (aa) -- node[above] {$\mathcal N^c$} (ee);
\draw[->] (ee) -- node[right] {$\mathcal A$} (bb);
\draw[->] (aa) -- node[below left] {$\mathcal N$} (bb);
\end{tikzpicture}
```

The left composite is $\mathcal D\circ\mathcal N=\mathcal N^c$ and the right composite is $\mathcal A\circ\mathcal N^c=\mathcal N$. These are precisely the defining equations, illustrated without any additional assumption.
