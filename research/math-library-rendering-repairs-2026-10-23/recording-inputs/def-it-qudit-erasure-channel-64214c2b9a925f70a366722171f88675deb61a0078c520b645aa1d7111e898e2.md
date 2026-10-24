---
id: def-it-qudit-erasure-channel
kind: definition
title: Finite-dimensional quantum erasure channel
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps:
  - def-qc-quantum-channel
  - def-qc-density-operator
  - def-qc-partial-trace
  - def-adjoint-of-a-linear-map-between-inner-product-spaces
  - def-qc-tensor-register-and-permutation
  - cor-dimension-of-a-direct-sum
justified_by:
  - thm-it-qudit-erasure-channel-is-cptp
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "John Watrous, The Theory of Quantum Information, §8.3.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, §24.7.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Definition

Let $A$ be a $d$-dimensional complex inner-product space with $d\ge1$. Form the orthogonal direct sum $B:=A\oplus\mathbb C e$, where $e$ is a unit erasure vector orthogonal to every vector in $A$; the inner product on pairs is $\langle(x,a),(y,b)\rangle_B=\langle x,y\rangle_A+a\overline b$. Thus $\dim B=d+1$ by [[cor-dimension-of-a-direct-sum]]. Let $J:A\to B$ be the isometric inclusion into the data summand.

For an erasure probability $\epsilon\in[0,1]$, the **$d$-dimensional quantum erasure channel** is the linear map

$$\mathcal E_{d,\epsilon}(X):=(1-\epsilon)JXJ^*+ \epsilon\operatorname{tr}(X)|e\rangle\langle e|,\qquad X\in\mathcal L(A).$$

For a density operator $\rho$, this outputs the data state with probability $1-\epsilon$ and the orthogonal erasure flag with probability $\epsilon$. The definition is on the full operator space, and its channel property is established in [[thm-it-qudit-erasure-channel-is-cptp]].

## Remarks

The two branches below are operator contributions in $\mathcal L(B)$ and are added to form $\mathcal E_{d,\epsilon}(X)$. Their supports lie in the orthogonal summands $J(A)$ and $\mathbb C e$ of $B$, respectively. For a density operator input, their traces are $1-\epsilon$ and $\epsilon$; for a general operator $X$, the labels denote linear contributions rather than branch probabilities.

```tikz
\begin{tikzpicture}[>=stealth, every node/.style={font=\small}]
\node (input) at (0,0) {$X\in\mathcal L(A)$};
\node[draw,rounded corners,minimum width=1.4cm,minimum height=0.8cm] (channel) at (2.6,0) {$\mathcal E_{d,\epsilon}$};
\node (data) at (6.2,1) {$(1-\epsilon)JXJ^*$};
\node (flag) at (6.2,-1) {$\epsilon\,\mathrm{tr}(X)|e\rangle\langle e|$};
\node at (6.2,1.6) {data summand $J(A)$};
\node at (6.2,-1.6) {erasure summand $\mathbb C e$};
\draw[->] (input) -- (channel);
\draw[->] (channel) -- (data);
\draw[->] (channel) -- (flag);
\node at (3.8,-2.4) {$B=J(A)\oplus\mathbb C e,\quad e\perp J(A),\quad\dim B=d+1$};
\end{tikzpicture}
```
