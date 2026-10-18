---
id: def-hybrid-mimetic-fv-scheme
kind: definition
title: Hybrid mimetic finite-volume diffusion on general meshes
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [def-fv-admissible-cell-face-mesh]
justified_by: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Jérôme Droniou, Finite volume schemes for diffusion equations: introduction to and review of modern methods, 2014"
      url: "https://arxiv.org/pdf/1407.1567"
      locator: "§4, equations (4.7)–(4.9), PDF pp. 19–20: hybrid/mimetic cell gradients, affine residuals, and stabilized formulation."
    - title: "Konstantin Lipnikov and Gianmarco Manzini, Discretization of mixed formulations of elliptic problems on polyhedral meshes, 2016"
      url: "https://arxiv.org/pdf/1610.05850"
      locator: "§3, PDF pp. 8–16: mixed-hybrid mimetic degrees of freedom, consistency, and stability."
verification:
  precheck: n/a
---

## Definition

Let $\mathcal T$ be a cell-face mesh as in [[def-fv-admissible-cell-face-mesh]], with $x_K$ the volume centroid of each cell and $x_F$ the face centroid. For the mimetic branch require the following explicit face-moment closure on each cell:
$$ \sum_{F\subset\partial K}|F|n_{K,F}=0,\qquad \sum_{F\subset\partial K}|F|x_F\otimes n_{K,F}=|K|I_d. $$
Here $I_d$ is the identity matrix on $\mathbb R^d$ and $(x\otimes n)_{ij}=x_i n_j$. These are finite geometric checks on the face data; they impose no center-to-face orthogonality. For every cell use one real cell-mean unknown $u_K$; for every face use one shared real face-mean unknown $u_F$. On a boundary face $F\subset\partial\Omega$, the value $u_F=g_F$ is prescribed. Write $n_{K,F}$ for the outward unit normal. Define the reconstructed cell gradient and its face residual by
$$ G_Ku=\frac1{|K|}\sum_{F\subset\partial K}|F|u_Fn_{K,F},\qquad \rho_{K,F}(u)=u_F-u_K-G_Ku\cdot(x_F-x_K). $$
Interpret $u_K$ and $u_F$ as cell and face averages. For a symmetric positive-definite tensor $A_K$ constant on $K$ (so $z\cdot A_Kz>0$ for every nonzero $z$), define
$$ \mathscr A_K(u,v)=|K|(A_KG_Ku)\cdot G_Kv+\lambda_{\min}(A_K)\sum_{F\subset\partial K}\frac{|F|}{d_{K,F}}\rho_{K,F}(u)\rho_{K,F}(v), $$
where $\lambda_{\min}(A_K)>0$ is the smallest eigenvalue of $A_K$. For $f\in L^1(\Omega)$, the **linear hybrid mimetic scheme** with homogeneous Dirichlet data is to find all cell and interior-face values $u$ such that
$$ \sum_{K\in\mathcal K}\mathscr A_K(u,v)=\sum_{K\in\mathcal K}v_K\int_K f(x)\,dx $$
for every test vector $v$ whose boundary face values are zero. For each local face $F\subset\partial K$, let $\phi_{K,F}$ have face value $1$ on $F$, zero on the other faces of $K$, and cell value zero. Define the outward numerical flux $Q_{K,F}(u)=-\mathscr A_K(u,\phi_{K,F})$.

There is also a monotone $p$-growth backward-Euler extension, specified as an algebraic scheme but with no existence or convergence claim in this definition. Let $1<p<\infty$, set $p'=p/(p-1)$, and let $a(x,\xi)$ be a **Carathéodory flux**, meaning that $x\mapsto a(x,\xi)$ is measurable for each fixed $\xi$ and $\xi\mapsto a(x,\xi)$ is continuous for almost every $x$. Assume there are constants $C,\alpha>0$, a nonnegative $g\in L^{p'}(\Omega)$, and a nonnegative $h\in L^1(\Omega)$ such that, outside one null set,
$$ |a(x,\xi)|\le C(g(x)+|\xi|^{p-1}),\qquad a(x,\xi)\cdot\xi\ge\alpha|\xi|^p-h(x),\qquad (a(x,\xi)-a(x,\eta))\cdot(\xi-\eta)\ge0. $$
For each cell set $b_K(\xi)=|K|^{-1}\int_Ka(x,\xi)\,dx$, and fix $\alpha_{0,K}>0$. Put $\psi_p(s)=|s|^{p-2}s$ for $s\ne0$ and $\psi_p(0)=0$. Its spatial operator, linear in the test vector $v$, is
$$ \mathcal A_{h,K}(u;v)=|K|b_K(G_Ku)\cdot G_Kv+\alpha_{0,K}\sum_{F\subset\partial K}\frac{|F|}{d_{K,F}^{p-1}}\psi_p(\rho_{K,F}(u))\rho_{K,F}(v). $$
For this extension define $Q_{K,F}^{\rm nl}(u)=-\mathcal A_{h,K}(u;\phi_{K,F})$.
On a time partition $0=t_0<\cdots<t_N=T$, given $u^{n-1}$ and $f\in L^{p'}((0,T)\times\Omega)$, put $f_K^n=((t_n-t_{n-1})|K|)^{-1}\int_{t_{n-1}}^{t_n}\int_K f$. The backward-Euler step seeks $u^n$ with zero boundary face values satisfying
$$ \sum_{K\in\mathcal K}|K|\frac{u_K^n-u_K^{n-1}}{t_n-t_{n-1}}v_K+\sum_{K\in\mathcal K}\mathcal A_{h,K}(u^n;v)=\sum_{K\in\mathcal K}|K|f_K^n v_K $$
for every test vector with zero boundary face values. The formula specifies a candidate discrete method; solvability and convergence require separate results.

For an affine function $\ell(x)=b\cdot x+c$, its cell and face averages satisfy $G_K\ell=b$ and $\rho_{K,F}(\ell)=0$ by the displayed face-moment closure. The drawing illustrates the cell and face degrees of freedom on a skew cell; no center-to-face orthogonality is assumed.

```tikz
\begin{tikzpicture}[scale=1]
  \draw[thick] (0,0) -- (2,0) -- (3,1) -- (1,1) -- cycle;
  \fill (1.5,0.5) circle (2pt) node[below] {$u_K$};
  \fill (1,0) circle (2pt) node[below] {$u_{F_1}$};
  \fill (2.5,0.5) circle (2pt) node[right] {$u_{F_2}$};
  \fill (2,1) circle (2pt) node[above] {$u_{F_3}$};
  \fill (0.5,0.5) circle (2pt) node[left] {$u_{F_4}$};
  \draw[->,blue] (1.5,0.5) -- (2.2,0.5) node[right] {$G_Ku$};
\end{tikzpicture}
```

When $p=2$, $b_K(\xi)=A_K\xi$, and $\alpha_{0,K}=\lambda_{\min}(A_K)$, the nonlinear formula agrees with the linear form above. Neither specification by itself proves solvability, a conforming $W_0^{1,p}$ reconstruction, or a mesh-uniform discrete Aubin–Lions estimate; those require separate results or hypotheses.
