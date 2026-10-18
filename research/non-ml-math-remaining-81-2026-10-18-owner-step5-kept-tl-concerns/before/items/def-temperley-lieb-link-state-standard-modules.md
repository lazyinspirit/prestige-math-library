---
id: def-temperley-lieb-link-state-standard-modules
kind: definition
title: "Temperley–Lieb link-state standard modules by defect number"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-temperley-lieb-diagram-category, thm-temperley-lieb-diagram-category-laws, def-free-module-on-a-set-and-standard-basis]
justified_by: [lem-temperley-lieb-link-state-module-action-is-well-defined]
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "David Ridout and Yvan Saint-Aubin, Standard Modules, Induction and the Structure of the Temperley-Lieb Algebra"
      url: "https://arxiv.org/pdf/1204.4505"
      locator: "§3, PDF pp. 11–15: link modules, standard-module quotients, the loop-gluing form, and its boundary conventions. Their coefficient field is C and their p counts arcs; here t=n−2p counts defects."
    - title: "John Enyang and Frederick M. Goodman, Cellular bases for algebras with a Jones basic construction"
      url: "https://arxiv.org/pdf/1106.5339"
      locator: "§6.4.2, printed pp. 33–35: Temperley–Lieb dangles, path indexing, and the diagram basis."
    - title: "Andrew Mathas, Hecke algebras and Schur algebras of the symmetric group, complete prepublication manuscript (1998; expanded published edition: AMS University Lecture Series 15, 1999)"
      url: "https://web.math.ucsb.edu/~bigelow/books/mathas.pdf"
      locator: "Chapter 2, §§1–2, printed pp. 9–18: cellular bases, cell modules, and their forms."
verification:
  precheck: n/a
---

## Definition

Let $R$ be a commutative ring with unit, let $\delta\in R$, and let $n\ge0$. Let $t$ be an integer with $0\le t\le n$ and $n-t$ even. The diagram module $M_R(n,t)$ has $n$ bottom boundary points and $t$ top boundary points, with stacking and loop removal as in [[def-temperley-lieb-diagram-category]]. A component of a basis diagram is **propagating** if it meets both the bottom and top boundaries. Write $\operatorname{prop}(D)$ for the number of propagating components of a diagram $D:n\to t$.

Let $M_R^{<t}(n,t)$ be the $R$-span of the basis diagrams $D:n\to t$ with $\operatorname{prop}(D)<t$. Define the **Temperley–Lieb link-state standard module**

$$W_{n,t}(R,\delta):=M_R(n,t)/M_R^{<t}(n,t).$$

Write $T_{n,t}$ for the set of diagrams in $\mathcal D(n,t)$ with exactly $t$ propagating components. The cosets of these diagrams form an $R$-basis of $W_{n,t}$. Identifying each diagram with its bottom arcs and defects gives a partial matching of the $n$ ordered bottom sites, with the additional condition that the $t$ unpaired sites are joined to the ordered top sites by noncrossing propagating strands. In particular, no defect lies inside an arc. The unpaired sites are called **defects**. Thus $t$ is the defect or through-line number; in sources using $p$ for the number of arcs, $p=(n-t)/2$.

The intended right action of $\mathrm{TL}_n(R,\delta)$ is $x\cdot a=[x\circ a]$, where $x\in M_R(n,t)$, $a\in M_R(n,n)$, and $x\circ a$ stacks $x$ above $a$. The submodule $M_R^{<t}(n,t)$ is stable under this action, so it descends to $W_{n,t}$; the complete well-definedness argument is [[lem-temperley-lieb-link-state-module-action-is-well-defined]].

## Remarks

The TikZ half-diagram below is the basis link state in $W_{4,2}$ with a bottom arc joining sites $2$ and $3$ and defects at sites $1$ and $4$. The top endpoints label the two propagating strands in their left-to-right order. A picture records this matching; the module and action are defined by the labeled matching and the stacking operation above.

```tikz
\begin{tikzpicture}[scale=0.9]
  \foreach \x in {0,1,2,3} { \fill (\x,0) circle (1.6pt); }
  \fill (0,1) circle (1.6pt);
  \fill (3,1) circle (1.6pt);
  \node[below] at (0,-0.04) {$b_1$};
  \node[below] at (1,-0.04) {$b_2$};
  \node[below] at (2,-0.04) {$b_3$};
  \node[below] at (3,-0.04) {$b_4$};
  \node[above] at (0,1.04) {$u_1$};
  \node[above] at (3,1.04) {$u_2$};
  \draw (0,0) -- (0,1);
  \draw (3,0) -- (3,1);
  \draw (1,0) .. controls (1,0.65) and (2,0.65) .. (2,0);
\end{tikzpicture}
```
