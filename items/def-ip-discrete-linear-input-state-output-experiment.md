---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/def-ip-discrete-linear-input-state-output-experiment.json
  precheck: n/a
id: def-ip-discrete-linear-input-state-output-experiment
kind: definition
title: Discrete linear input-state-output experiments
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 0
deps:
  - def-matrix-space
  - def-matrix-product-and-identity-matrix
  - prop-standard-coordinate-inner-products
justified_by: []
aliases: []
axiom_use: No choice principle is used; the data are finite real vectors and matrices.
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Mohammed Dahleh, Munther A. Dahleh, and George Verghese, Lectures on Dynamic Systems and Control, Chapter 25: Minimal State-Space Realization"
      url: "https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf"
      locator: "§25.3, equations (25.10)–(25.12), PDF p. 5"
    - title: "Sanjay Lall, Engr207c: Operator Theory and Linear Systems, State-Space Realization lecture notes"
      url: "https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf"
      locator: "§9.2, discrete-time model and impulse-response conventions, PDF pp. 3–6"

---

## Definition

Let $d\ge0$, $m,p\ge1$, and $q\ge1$ be integers, and let $h>0$ be a fixed
sampling interval. A real **discrete linear input-state-output experiment** of
state dimension $d$, input dimension $m$, output dimension $p$, and horizon
$q$ consists of matrices $A\in M_{d\times d}(\mathbb R)$,
$B\in M_{d\times m}(\mathbb R)$, and $C\in M_{p\times d}(\mathbb R)$, an
initial state $x_0\in\mathbb R^d$, and known inputs
$(u_k)_{0\le k<q-1}$ in $\mathbb R^m$. The states are defined by
$$x_{k+1}=Ax_k+Bu_k\qquad(0\le k<q-1),$$
and the exact sampled outputs at times $kh$ are $y_k=Cx_k$ for
$0\le k<q$. When observations are perturbed, the observed outputs are
$\widetilde y_k=y_k+\eta_k$ for deterministic error vectors
$\eta_k\in\mathbb R^p$; the exact-data convention is $\eta_k=0$ for all $k$.
No probability law is assigned to the errors. A numerical or discretization
error that changes the forward map is distinct from this additive observation
error.

For the fixed matrices $A,B,C$, the **Markov parameters** are
$$M_k:=CA^kB\in M_{p\times m}(\mathbb R)\qquad(k\ge0),$$
interpreted using the infinite-horizon impulse experiment: extend the same
state and output equations to all $k\ge0$, with zero initial state,
$u_0=v\in\mathbb R^m$, and $u_k=0$ for $k\ge1$. Its output at sample $k+1$
is $y_{k+1}=M_kv$ for every $k\ge0$. The horizon-$q$ restriction records this
identity only for $0\le k<q-1$; when $q=1$, it records only $y_0=0$ and has
no input samples. Matrix powers
use $A^0=I_d$ and $A^{k+1}=A^kA$. If $d=0$, the state space consists of its
single zero vector and the matrices have the corresponding empty shapes.

## Definition references

[[def-matrix-space|Finite real matrix spaces]]

[[def-matrix-product-and-identity-matrix|Matrix products, powers, and identities]]

[[prop-standard-coordinate-inner-products|Standard Euclidean inner products]]

[Dahleh, Dahleh, and Verghese, *Lectures on Dynamic Systems and Control*, Chapter 25](https://ocw.mit.edu/courses/6-241j-dynamic-systems-and-control-spring-2011/760782bd5ceefacb37bf8719dc23dfcb_MIT6_241JS11_chap25.pdf)

[Lall, *State-Space Realization*, Engr207c lecture notes](https://lall.stanford.edu/engr207c/lectures/realization_2008_11_15_03.pdf)

## Remarks

For $0\le k<q-1$, the schematic separates the update to the next state
from the observation of the current state at time $kh$. The upper box
computes a vector in $\mathbb R^d$ from $x_k\in\mathbb R^d$ and
$u_k\in\mathbb R^m$; the lower branch and its additive error take values
in $\mathbb R^p$.

```tikz
\begin{tikzpicture}[>=stealth,scale=1.6,transform shape]
\node (x) at (0,0) {$x_k$};
\node[draw,rounded corners,minimum width=2.1cm,minimum height=0.8cm] (update) at (3,0) {$Ax_k+Bu_k$};
\node (next) at (6,0) {$x_{k+1}$};
\node (input) at (3,1.4) {$u_k$};
\node (y) at (0,-2) {$y_k=Cx_k$};
\node[draw,circle,minimum size=0.6cm] (sum) at (3,-2) {$+$};
\node (observed) at (6,-2) {$\widetilde y_k$};
\node (error) at (3,-3.3) {$\eta_k$};
\draw[->] (x) -- (update);
\draw[->] (input) -- (update);
\draw[->] (update) -- (next);
\draw[->] (x) -- node[left] {$C$} (y);
\draw[->] (y) -- (sum);
\draw[->] (error) -- (sum);
\draw[->] (sum) -- (observed);
\end{tikzpicture}
```

The lower branch also applies at $k=q-1$, when there is no further state
update or input sample. If $q=1$, only this observation branch remains.
The error enters after the exact output $Cx_k$ has been computed; it does
not modify $A$, $B$, or $C$. The defining equations above are independent
of this illustration.
