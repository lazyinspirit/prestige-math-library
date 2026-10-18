---
id: "lem-afem-nvb-conforming-closure-and-cumulative-counting"
kind: "lemma"
title: "Termination and cumulative complexity of NVB conformity closure"
status: draft
origin: pipeline
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  - "def-afem-nvb-labelled-triangulation-family"
  - "alg-dorfler-marking-and-conforming-nvb-refinement"
  - "lem-afem-nvb-shape-regularity-and-three-generation-properties"
proof_strategy: direct
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Bonito, Canuto, Nochetto & Veeser, Adaptive Finite Element Methods
        (2024)"
      url: "https://people.tamu.edu/~bonito/Publications/Preprints/2024_afem_acta.pdf"
      locator: "§§3.5–3.6 on 2D newest-vertex bisection and §8.1.1–8.1.3 on chains and
        cumulative closure complexity."
    - title: "Cascón, Kreuzer, Nochetto & Siebert, Quasi-optimal convergence rate for
        an AFEM"
      url: "https://math.umd.edu/~rhn/papers/pdf/optimality.pdf"
      locator: "§§2.1–2.7, 3.2–3.3, Theorem 4.1, and §5."
verification:
  precheck: pass
---
## Statement

Fix a compatible labeled initial mesh. Recursive reference-edge closure of any finite marked set terminates, produces a matching conforming NVB descendant, and preserves the shape bound of [[lem-afem-nvb-shape-regularity-and-three-generation-properties]]. For any sequence of finite request sets $Q_k$, with three uniform generations requested on each cell of $Q_k$, there is a constant $C_{\rm gen}$ depending only on the initial mesh such that
$$\#\mathcal T_n-\#\mathcal T_0\le C_{\rm gen}\sum_{k=0}^{n-1}\#Q_k.$$
For the algorithm [[alg-dorfler-marking-and-conforming-nvb-refinement]], keep $M_k=M_{E,k}\cup M_{O,k}$ as the bulk-marked set and use its original edge-neighbor request set $Q_k$. Then $\#Q_k\le4\#M_k$, so with $C_{\rm cl}=4C_{\rm gen}$,
$$\#\mathcal T_n-\#\mathcal T_0\le C_{\rm cl}\sum_{k=0}^{n-1}\#M_k.$$
The constant is for the cumulative sequence; no uniform bound on the added cells in one single refinement call is asserted.

## Facts & Assumptions

**Given:** A compatible labeled initial triangulation, finite request sets $Q_k$, bulk sets $M_k$ when using patch expansion, and the recursive closure rule of [[alg-dorfler-marking-and-conforming-nvb-refinement]].

[F1] In every descendant, edge labels have the generation pattern $(g+1,g+1,g)$, the reference edge has label $g$, and bisection uses midpoint subdivision ([[def-afem-nvb-labelled-triangulation-family]]).

[F2] All descendants have a uniform shape-regularity bound; three requested generations split marked parent edges and the mesh remains geometrically similar within a finite family of shapes ([[lem-afem-nvb-shape-regularity-and-three-generation-properties]]).

## Proof

1.1 For a current cell $K$, follow its interior reference-edge neighbor. The common label is $g(K)$; by [F1] the neighbor either has the same generation, giving a compatibly divisible pair, or has generation $g(K)-1$. Continue in the latter case. Strict generation drops terminate at a boundary reference edge or compatible pair. Refine from that terminal end and re-inspect each earlier pending leaf, as the algorithm prescribes. A coarser neighbor may need two bisections: after its reference-edge split, the child containing the pending common edge has that inherited edge as reference and is bisected before returning to $K$. These are children or grandchildren of a chain cell $L$; for a coarser chain cell $g(L)\le g(K)-1$, so their generations are at most $g(K)+1$. The terminal partner and $K$ itself need one split. Each processed common edge is split on both sides, so the resulting mesh is conforming. The finite chain and this finite reinspection give termination for one request, and the finitely many requested descendant generations give termination of a complete call. [F1, given, algebra]

2.1 Let $g(K)$ denote generation. Each bisection halves area, and [F2] gives constants $c_0,C_0>0$ depending only on the finitely many initial shapes such that $c_0\,2^{-g(K)}\le |K|\le C_0\,2^{-g(K)}$ and $\operatorname{diam}K\le C_0\,2^{-g(K)/2}$. In the backward chain of step 1.1 there is at most one cell at each generation, plus at most one terminal compatible partner. Hence the sum of diameters from generation $g_{\min}$ upward is at most $D_0 2^{-g_{\min}/2}$ with $D_0=2C_0/(1-2^{-1/2})$. Every created cell is a child of $K$ or its terminal same-generation partner, or a child or grandchild of a strictly coarser chain cell. Step 1.1 therefore gives $g(T)\le g(K)+1$. For a created cell $T$ within an original chain cell $L$, the portion of the chain between $K$ and $L$ has its lowest generation $g(L)$; summing its diameters gives $\operatorname{dist}(K,T)\le D_1 2^{-g(T)/2}$ with $D_1=4D_0$. The chain is finite by the integer generation drop, and these estimates supply the geometric radius used below. [F1, F2, step 1.1, algebra]

3.1 First consider one-generation requests in a finite sequence and let $\mathcal M$ be the union of all requested cells. For a final cell $T$ and marked cell $T^*$ define a nonnegative allocation $\lambda(T,T^*)=\begin{cases}a(g(T^*)-g(T)),& \operatorname{dist}(T,T^*)<D\,B\,2^{-g(T)/2}\ \text{and }g(T)\le g(T^*)+1,\\0,&\text{otherwise},\end{cases}$ where $a(\ell)=(\ell+2)^{-2}$ for $\ell\ge-1$, $b(\ell)=2^{\ell/3}$ for $\ell\ge0$, $A=\sum_{\ell\ge-1}a(\ell)<\infty$, $B=\sum_{\ell\ge0}2^{-\ell/2}b(\ell)<\infty$, and $D=2D_1+2C_0$, with $D_1$ from step 2.1. The series for $B$ is geometric with ratio $2^{-1/6}<1$, and $c_*=\inf_{\ell\ge1}a(\ell)b(\ell)>0$ because $2^{\ell/3}/(\ell+2)^2$ tends to infinity. [step 2.1, given, algebra]

3.2 Fix $T^*\in\mathcal M$ with generation $g^*$. At a fixed generation $g\le g^*+1$, cells with nonzero allocation lie in a ball of radius $D B2^{-g/2}$ about $T^*$. Each has area at least $c_0 2^{-g}$ by step 2.1, while that ball enlarged by one cell diameter has area at most $C_D2^{-g}$. Since cell interiors are disjoint, their number is at most a constant $N_D$ independent of $g,T^*$, and the final level. Summing weights over generations therefore gives $\sum_{T\in\mathcal T_n\setminus\mathcal T_0}\lambda(T,T^*)\le N_D\sum_{\ell\ge-1}a(\ell)=N_DA=:C_1.$ [step 2.1, given, algebra]

3.3 Fix a new cell $T_0$ in the final forest. Trace its unique parent backward through the finite refinement history. If the parent was created during closure, take the least-ID requested cell whose recursive chain created it; repeat this at each earlier creation time. This gives a finite sequence of requested cells $T_1,\ldots,T_J$ ending at an initial cell. Step 2.1 gives $g(T_{j+1})\ge g(T_j)-1$ and, for each consecutive pair in the sequence, $\operatorname{dist}(T_{j-1},T_j)\le D_1 2^{-g(T_{j-1})/2}$. Let $s$ be the first index with $g(T_s)=g(T_0)-1$. The prefix whose links join $T_0$ to $T_s$ is $T_0,\ldots,T_{s-1}$; each of its generations is $g(T_0)+\ell$ for some $\ell\ge0$. The triangle inequality for set distances includes the diameters of the intervening cells. Steps 2.1 and the diameter bound control the sum by $(D_1+C_0)$ times the corresponding generation sum; $D=2(D_1+C_0)$ leaves strict slack. Consequently, if this prefix has at most $b(\ell)$ cells at every generation $g(T_0)+\ell$, then $\operatorname{dist}(T_0,T_s)<D B\,2^{-g(T_0)/2}.$ Thus the terminal requested cell $T_s$ lies in the allocation radius and contributes $a(-1)>0$. Otherwise let $j_*$ be the first prefix with more than $b(\ell_*)$ cells at some generation $g(T_0)+\ell_*$. Every earlier link prefix satisfies the displayed distance bound. If $\ell_*=0$, since $T_0$ is new and $b(0)=1$, at least one other cell of that generation is a marked cell and contributes $a(0)$. If $\ell_*>0$, all cells of that generation in the prefix are marked; each lies within the allocation radius and contributes $a(\ell_*)$. In this case their total is greater than $a(\ell_*)b(\ell_*)\ge c_*$. Hence every new cell receives at least $C_2=\min\{a(-1),a(0),c_*\}>0$ allocation. [step 2.1, given, algebra]

4.1 Sum the lower bound from step 3.3 over new cells and interchange the two finite sums. The upper bound from step 3.2 gives $C_2(\#\mathcal T_n-\#\mathcal T_0)\le\sum_{T^*\in\mathcal M}\sum_{T\notin\mathcal T_0}\lambda(T,T^*)\le C_1\#\mathcal M.$ For three requested generations, view each parent in $Q_k$ as successive one-generation requests. There are at most $2^{j-1}\#Q_k$ virtual requests at stage $j=1,2,3$, even if closure performs some requested splits before their scheduled turn. The total is at most $7\#Q_k$, giving $C_{\rm gen}=7C_1/C_2$. For the algorithm, every original triangle has at most three edge neighbors, so $\#Q_k\le4\#M_k$; hence $C_{\rm cl}=28C_1/C_2$ proves the displayed estimate in terms of the unchanged bulk marks. Empty marks give no requests or splits, and all bisections, including those needed for patch expansion and conformity, are counted. [step 3.2, step 3.3, algebra] ∎
