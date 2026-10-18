---
id: def-anyonic-fusion-path-space
kind: definition
title: "Fixed-boundary anyonic fusion-path space"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 0
deps: [ def-absolutely-simple-object, def-fusion-and-multifusion-category, def-fusion-rules ]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§§2.1, 4.1: monoidal and finite semisimple rigid tensor-category definitions."
    - title: "Shu-Heng Shao, What’s Done Cannot Be Undone: TASI Lectures on Non-Invertible Symmetries"
      url: "https://arxiv.org/pdf/2308.00747"
      locator: "§3.4.1, PDF pp. 34–35: periodic fusion-path basis and local F-moves."
---

## Definition

Let $\mathcal C$ be a fusion category over $\mathbb C$, so it is finite semisimple, rigid, monoidal, and has simple unit [[def-fusion-and-multifusion-category]]. Let $a,b,c$ be simple objects and let $n\ge0$. Fix one representative of each simple isomorphism class for the internal path labels; the external objects $a,b,c$ need not equal their representatives. Set $T_0=b$ and recursively fix the left-associated parenthesization $T_{j+1}:=T_j\otimes a$. The **fixed-boundary anyonic path space** is

$$H_{a,n;b,c}:=\operatorname{Hom}_{\mathcal C}(c,T_n).$$

For simple labels $x,y$, define the split multiplicity space $W_{x,a}^y:=\operatorname{Hom}_{\mathcal C}(y,x\otimes a)$. For $n\ge1$, a fusion path is a sequence of simple labels $x_0=b,x_1,\ldots,x_n=c$, with $x_1,\ldots,x_{n-1}$ drawn from the fixed representative set, together with, for every $1\le j\le n$, one basis index $\mu_j$ in a chosen basis $B_{x_{j-1},a}^{x_j}$ of $W_{x_{j-1},a}^{x_j}$. The basis index is retained even when distinct indices have the same adjacent labels. Fusion rules are the nonnegative integers $N_{x a}^{y}$ in $[x][a]=\sum_yN_{x a}^{y}[y]$ [[def-fusion-rules]].

For $n=0$, there is no path if $b\not\cong c$. If $b\cong c$, fix an isomorphism $u_{c,b}:c\to b$ and take it as the single empty-path vector (use $u_{b,b}=\operatorname{id}_b$ when the objects coincide). In the unitary setting choose this isomorphism unitary.

For $n\ge1$, if $i_j\in B_{x_{j-1},a}^{x_j}$ is the selected inclusion $x_j\to x_{j-1}\otimes a$, define the path composite by $\gamma_0:=\operatorname{id}_b$ and $\gamma_j:=(\gamma_{j-1}\otimes\operatorname{id}_a)\circ i_j:x_j\to T_j$. For $x_n=c$, $\gamma_n$ is a vector in $H_{a,n;b,c}$. The next lemma proves these composites form a basis and computes the dimension. No Hilbert-space or physical Hamiltonian structure is part of this definition.

## Split-tree convention

For three sites the diagram records the split direction $c\to b\otimes a\otimes a\otimes a$ and the recursively parenthesized tree. Each vertex also carries its basis index $\mu_j$; the picture omits no mathematical datum used in the definition.

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),level distance=9mm,sibling distance=16mm]
  \node {$c=x_3$}
    child { node {$x_2$}
      child { node {$x_1$}
        child { node {$b=x_0$} }
        child { node {$a$} edge from parent node[left] {$\mu_1$} }
      }
      child { node {$a$} edge from parent node[right] {$\mu_2$} }
    }
    child { node {$a$} edge from parent node[right] {$\mu_3$} };
\end{tikzpicture}
```

Each internal label $x_j$ is simple, and each $\mu_j$ ranges over a basis of the displayed split Hom space. A periodic closed chain is obtained by summing the fixed-boundary spaces over representative boundary labels $b=c$; its path labels satisfy the cyclic boundary condition.
