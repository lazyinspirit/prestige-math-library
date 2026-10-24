---
id: def-killed-and-absorbed-transition-kernels
kind: definition
title: "Killed and absorbed transition kernels"
status: published
origin: pipeline
deps: [def-measure-kernel-and-probability-kernel]
proof_strategy: definition
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, Sections 5.1-5.2"
      url: "https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf"
      locator: "Markov-chain and hitting-time conventions, printed pp. 268-283"
---

## Definition

Let $K$ be a probability kernel on $(E,\mathcal E)$ and $D\in\mathcal E$.
The **kernel absorbed on $D$** is the kernel candidate on $E$ defined by
$$ K_D^{\mathrm{abs}}(x,A) =1_D(x)1_A(x)+1_{D^c}(x)K(x,A), \qquad A\in\mathcal E. $$ Thus every $x\in D$ has the Dirac transition $\delta_x$, while transitions from $D^c$ are unchanged. For killing, adjoin a point $\Delta\notin E$ and equip $E_\Delta=E\sqcup\{\Delta\}$ with $$ \mathcal E_\Delta =\{A:A\in\mathcal E\}\cup\{A\cup\{\Delta\}:A\in\mathcal E\}. $$ The **kernel killed upon exiting $D$** is $$ K_D^{\mathrm{kill}}(x,B)= \begin{cases} K(x,B\cap D)+K(x,D^c)1_B(\Delta),&x\in D,\\ 1_B(\Delta),&x\in D^c\cup\{\Delta\}, \end{cases} \qquad B\in\mathcal E_\Delta. $$
In particular, a start outside $D$ is killed immediately and the cemetery is
absorbing. If $D=E$, killing never occurs from $E$; if $D=\varnothing$, every
start is sent to $\Delta$. These formulas are choice-free.


## Remarks

The following schematics compare the two modifications. An arrow to a set denotes a transition law on that set, not a transition to a single state. For absorption, the loop at $x\in D$ has total mass one; from $y\in D^c$ the entire original law is retained.

```tikz
\begin{tikzpicture}
\node at (3,2.3) {Absorption on $D$};
\node (x) at (0,0.8) {$x\in D$};
\node (y) at (0,-1) {$y\in D^c$};
\node[draw,rounded corners,minimum width=2cm,minimum height=0.8cm] (e) at (6,-1) {$E$};
\draw[->] (x) edge[loop right] node[right] {$1\quad(\delta_x)$} (x);
\draw[->] (y) -- node[above] {$K(y,\cdot)$} (e);
\end{tikzpicture}
```

For killing, the upper arrow retains the measure $A\mapsto K(x,A\cap D)$ on $D$; the other arrow redirects all exit mass to $\Delta$. Every outside start goes to $\Delta$ with mass one, and $\Delta$ then stays fixed.

```tikz
\begin{tikzpicture}
\node at (3,3.2) {Killing upon exiting $D$};
\node (x) at (0,1.8) {$x\in D$};
\node[draw,rounded corners,minimum width=2cm,minimum height=0.8cm] (d) at (6,1.8) {$D$};
\node (y) at (0,-0.8) {$y\in D^c$};
\node (c) at (6,-0.8) {$\Delta$};
\draw[->] (x) -- node[above] {$K(x,\cdot\cap D)$} (d);
\draw[->] (x) -- node[below left] {$K(x,D^c)$} (c);
\draw[->] (y) -- node[below] {$1$} (c);
\draw[->] (c) edge[loop right] node[right] {$1$} (c);
\end{tikzpicture}
```

The diagrams illustrate the formulas in the Definition and do not impose a finite state space or any additional assumptions. In the boundary case $D=E$, there are no outside starts and $K(x,D^c)=0$ for $x\in E$; for $D=\varnothing$, the killing diagram has only the transitions to the cemetery. The definition is independent of these illustrations.
