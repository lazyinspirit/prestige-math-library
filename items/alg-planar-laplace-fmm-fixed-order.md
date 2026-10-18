---
id: alg-planar-laplace-fmm-fixed-order
kind: algorithm
title: Fixed-order planar Laplace fast multipole procedure
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
deps: [def-finite-planar-quadtree-fmm-pair-lists]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Leslie Greengard and Vladimir Rokhlin, A Fast Algorithm for Particle Simulations, Journal of Computational Physics 73 (1987), 325–348"
      url: "https://web.stanford.edu/class/cme324/classics/greengard-rokhlin.pdf"
    - title: "James Demmel, Fast Hierarchical Methods for the N-body Problem, Part 2, CS267 Lecture 25 (1996)"
      url: "https://people.eecs.berkeley.edu/~demmel/cs267/lecture27/lecture27.html"
---

## Definition

Use the data, quadtree and interaction decomposition of [[def-finite-planar-quadtree-fmm-pair-lists]]. Fix an expansion order $p\ge1$. If two different labels have the same position, return status `collision` before evaluating any singular interaction: the requested potential is undefined. Otherwise take as input a finite quadtree from the definition, together with its point-to-cell membership arrays and leaf threshold $s$. For $N=0$ return empty outputs. For $N\ge1$, construct $\mathcal F$ and $\mathcal N$ by the recursive decomposition in the definition. The tree and point-to-cell membership are preprocessing inputs; their construction is not part of the arithmetic passes below.

Using the supplied membership data, make a root-first list of nonempty cells: at each nonempty internal cell inspect its four children and recurse only into children $E$ with $I_E\ne\varnothing$; never descend into an empty subtree. Use the reverse list order for the bottom-up pass and the root-first order for the top-down pass. Use exact complex arithmetic throughout. For each nonempty leaf $C$ form the particle-to-multipole (P2M) moments
$$M_n(C)=\sum_{j\in I_C}q_j(z_j-c_C)^n,\qquad 0\le n\le p.$$
For the upward multipole-to-multipole (M2M) pass, process nonempty internal cells bottom-up. For each such parent $C$ and each $0\le n\le p$, form its moments from its nonempty children by
$$M_n(C)=\sum_{\substack{E\text{ child of }C\\ I_E\ne\varnothing}}\sum_{r=0}^n\binom nr(c_E-c_C)^{n-r}M_r(E).$$
An empty child has zero moments and is skipped. Thus the upward pass visits only parent-child edges whose two cells are nonempty.

Initialize the local coefficient vector of every nonempty cell to zero before processing any far pair. For each far pair $(C,D)$ set $\delta=c_D-c_C$, $R=|\delta|$, choose the fixed logarithm $L_{CD}$, and add to the target cell $D$'s local coefficients the multipole-to-local (M2L) coefficients
$$L_0(D)\mathrel{+}=M_0(C)L_{CD}(\delta)-\sum_{n=1}^p\frac{M_n(C)}{n\delta^n},$$
$$L_k(D)\mathrel{+}=(-1)^{k+1}\left(\frac{M_0(C)}{k\delta^k}+\sum_{n=1}^p\binom{n+k-1}{k}\frac{M_n(C)}{n\delta^{n+k}}\right),\quad 1\le k\le p.$$
After all M2L additions, perform a top-down downward local-to-local (L2L) pass over parent-child edges whose two cells are nonempty. For each parent $D$ and each nonempty child $E$, add
$$L_j(E)\mathrel{+}=\sum_{k=j}^p\binom kj L_k(D)(c_E-c_D)^{k-j},\qquad 0\le j\le p.$$
For a target $i$ in leaf $D$, return the far potential $\sum_{k=0}^pL_k(D)(z_i-c_D)^k$ and far derivative $\sum_{k=1}^p kL_k(D)(z_i-c_D)^{k-1}$. Add the exact direct near contributions $q_jL_{ji}$ and $q_j/(z_i-z_j)$, respectively, for $(j,i)\in\mathcal N$. Denote the resulting potential and derivative approximations by $\widetilde u_i$ and $\widetilde g_i$, respectively. The derivative output differentiates the truncated local polynomial and adds the exact near derivatives; its value is independent of logarithm branches.
