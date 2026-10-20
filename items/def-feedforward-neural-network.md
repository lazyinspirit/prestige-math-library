---
id: def-feedforward-neural-network
kind: definition
title: "Finite feedforward computation graphs and layered MLPs"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Leshno, Lin, Pinkus, and Schocken, Multilayer Feedforward Networks With a Non-Polynomial Activation Function Can Approximate Any Function, §2"
      url: "https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf"
    - title: "Goodfellow, Bengio, and Courville, Deep Learning, §6.4.1"
      url: "https://www.deeplearningbook.org/contents/mlp.html"
---

## Definition

Fix integers $d,r\ge1$. A finite feedforward computation graph from $\mathbb R^d$ to $\mathbb R^r$ consists of a finite directed graph $(V,E)$ with no directed cycle; pairwise disjoint input, hidden, and output vertex sets $I,H,O$ whose union is $V$; exactly $d$ input vertices and $r$ output vertices; and a specified ordering of $V$ in which the tail of every directed edge precedes its head. The input vertices are labelled bijectively by the coordinates $1,\ldots,d$, and input vertex $i$ has value $x_i$ for $x\in\mathbb R^d$. Each non-input vertex $v$ has a real bias $b_v$, a real weight $w_{uv}$ for every edge $u\to v$, and a real activation function $\rho_v$. In the specified order, its value is

$$z_v=\rho_v\!\left(b_v+\sum_{u:\,u\to v}w_{uv}z_u\right).$$

The network output is the vector of values at $O$. A layered multilayer perceptron is the specialization with layers $V_0,\ldots,V_L$, where $V_0=I$, $V_L=O$, and every edge goes from $V_{\ell-1}$ to $V_\ell$ for some $\ell$; the hidden vertices use a shared activation and the output vertices use the identity activation. A fully connected layered perceptron includes every edge between consecutive layers. The fixed ordering makes the recursive evaluation unambiguous and is part of the graph data.

The diagram shows the edge direction and evaluation convention for a fully connected scalar-output perceptron with one hidden layer. Each circle is one scalar-valued node; the hidden nodes apply $\sigma$ and the output node is linear. The diagram illustrates the definition and is not used in any proof.

```tikz
\begin{tikzpicture}[>=stealth, node distance=1.5cm]
  \node[draw,circle] (x1) {$x_1$};
  \node[draw,circle,below of=x1] (x2) {$x_2$};
  \node[draw,circle,right of=x1,yshift=-0.35cm] (h1) {$\sigma$};
  \node[draw,circle,below of=h1] (h2) {$\sigma$};
  \node[draw,circle,right of=h1,yshift=-0.35cm] (y) {$y$};
  \draw[->] (x1) -- (h1);
  \draw[->] (x1) -- (h2);
  \draw[->] (x2) -- (h1);
  \draw[->] (x2) -- (h2);
  \draw[->] (h1) -- (y);
  \draw[->] (h2) -- (y);
\end{tikzpicture}
```

## Definition references

[Leshno et al., §2: one-hidden-layer feedforward network convention](https://archive.nyu.edu/bitstream/2451/14329/1/IS-92-13.pdf)

[Goodfellow et al., §6.4.1: feedforward network representation scope](https://www.deeplearningbook.org/contents/mlp.html)
