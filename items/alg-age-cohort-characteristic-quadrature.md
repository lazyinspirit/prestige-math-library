---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/alg-age-cohort-characteristic-quadrature.json
  precheck: n/a
id: alg-age-cohort-characteristic-quadrature
kind: algorithm
title: Age-cohort quadrature along exact characteristics
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 1
deps:
  - def-age-structured-renewal-transport-problem
  - alg-composite-midpoint-rule
  - def-one-step-ode-method-local-defect-order-and-stability
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Åke Brännström, Linus Carlsson, and Daniel Simpson, On the Convergence of the Escalator Boxcar Train"
      url: "https://arxiv.org/pdf/1210.1444"
      locator: "§2, PDF pp. 3–5: cohort measures with evolving states and masses; §3, PDF pp. 5–11: weak consistency and convergence framework."
    - title: "Benoît Perthame, Introduction to Structured Equations in Biology, full lecture notes"
      url: "https://www.math.cmu.edu/cna/LectureNotesFiles/Perthame.pdf"
      locator: "Chapter 1, §§1.1.2 and 1.4–1.5, PDF pp. 4–10: characteristic cohorts, renewal formula and size-structured population models."
    - title: "MATH 373 lecture notes, §8 Approximation of Integrals"
      url: "https://sites.math.rutgers.edu/~falk/math373/lecture12.pdf"
      locator: "Complete four-page Lecture 12 PDF; §8.2, printed pp. 37–38/PDF pp. 3–4: positive composite midpoint initial quadrature."
---

## Definition

Input a finite horizon $T>0$, a time step $\Delta t>0$, an age cutoff $A>0$, bounded nonnegative rates $\mu,\beta$ on $[0,A]$, and a finite positive initial quadrature $(a_i,m_i^0)_{i=1}^I$ supported in $[0,A)$ for the initial age measure on that interval. Set $N=\lfloor T/\Delta t\rfloor$; the procedure returns levels at $t_k=k\Delta t$ for $0\le k\le N$, with final time $N\Delta t\le T$. One option, when a nonnegative real-valued initial density $n_0$ is evaluable at every point of $[0,A]$, is to choose any finite partition $0=b_0<\cdots<b_I=A$ and apply [[alg-composite-midpoint-rule]] with $n=1$ separately on each cell $[b_{i-1},b_i]$: set $\Delta a_i=b_i-b_{i-1}$, $a_i=(b_{i-1}+b_i)/2$, and $m_i^0=Q_M(n_0;b_{i-1},b_i,1)=\Delta a_i\,n_0(a_i)$ for $1\le i\le I$. The cell widths need not be equal. A cohort at age $a_i^k$ and mass $m_i^k$ follows the exact age characteristic

$$a_i^{k+1}=a_i^k+\Delta t$$

and updates its survival mass by forward Euler,

$$m_i^{k+1}=(1-\Delta t\,\mu(a_i^k))m_i^k.$$

If $\Delta t\|\mu\|_\infty>1$, return status invalid-step with no updates. Otherwise initialize the birth and outflow records as empty and set $\nu_h^0=\sum_i m_i^0\delta_{a_i^0}$. For each $k=0,\ldots,N-1$, first calculate $B_h^k=\sum_i\beta(a_i^k)m_i^k$. Advance every existing cohort by $a_i^{k+1}=a_i^k+\Delta t$ and update its survival mass by $m_i^{k+1}=(1-\Delta t\mu(a_i^k))m_i^k$. If an updated age is at least $A$, record that updated mass as discrete outflow and discard the cohort; otherwise retain it. Then insert a newborn cohort of age $0$ and mass $\Delta t B_h^k$ at time $t_{k+1}$. Record $B_h^k$ and the step's outflow, and form $\nu_h^{k+1}$ from the retained cohorts and this newborn. A failed rate evaluation returns failure with no partial update. The procedure returns the finite sequence $(\nu_h^k)_{k=0}^N$ and its birth/outflow records. The bounded-Lipschitz quadrature defect of the initial measure and the Euler survival error are separate inputs to any consistency claim.


## Remarks

The schematic shows one valid time step, with time horizontal and age vertical. Both existing cohorts increase their age by $\Delta t$: cohort $i$ remains below $A$, whereas cohort $j$ reaches or exceeds $A$ at the updated level and is discarded after its updated mass is recorded as outflow. The newborn is inserted at $(t_{k+1},0)$; it does not travel an age characteristic during the step in which it is inserted. Axis scales and the chosen cohorts are illustrative.

```tikz
\begin{tikzpicture}[x=1.35cm,y=0.95cm,>=stealth]
\draw[->] (0,0) -- (6.6,0) node[right] {$t$};
\draw[->] (0,0) -- (0,5.1) node[above] {$a$};
\draw[dashed] (0,3.8) node[left] {$A$} -- (6.3,3.8);
\draw[dotted] (1,0) -- (1,4.8);
\draw[dotted] (5,0) -- (5,4.8);
\node[below] at (1,0) {$t_k$};
\node[below] at (5,0) {$t_{k+1}$};
\draw[->,thick] (1,1) -- (5,2.4);
\fill (1,1) circle (2pt) node[left] {$a_i^k$};
\fill (5,2.4) circle (2pt) node[right] {$a_i^k+\Delta t<A$};
\draw[->,thick] (1,3) -- (5,4.4);
\fill (1,3) circle (2pt) node[left] {$a_j^k$};
\fill (5,4.4) circle (2pt) node[right] {$a_j^k+\Delta t\ge A$};
\fill (5,0) circle (3pt);
\node[above right] at (5,0) {$\mathrm{newborn}$};
\end{tikzpicture}
```

Each existing cohort has updated survival mass $(1-\Delta t\mu(a_i^k))m_i^k$ (and likewise for $j$), whether it is retained or recorded as outflow. The newborn mass is $\Delta t B_h^k$, with $B_h^k$ calculated from the old level before any update. The algorithm and its formulas specify these operations independently of the illustration.
