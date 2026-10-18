---
id: ex-nitsche-exact-affine-data-weak-imposition
kind: example
title: Exact affine data under weak imposition
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  [
    def-nitsche-boundary-penalty-forms,
    lem-nitsche-penalty-coercivity,
    lem-affine-simplex-gauss-green-formula,
    lem-nitsche-h-one-zero-functions-have-zero-facet-traces,
    def-countable-choice
  ]
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Chapter 37, Nitsche boundary
        penalty method
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap37.pdf
    - title: Mika Juntunen and Rolf Stenberg, Nitsche's method for general boundary
        conditions, Mathematics of Computation 78 (2009), 1353–1374
      url: https://aaltodoc.aalto.fi/bitstreams/f6ebc2d5-8166-479a-96c8-45d2538ce179/download
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

Assume Countable Choice. Let $\Omega=\{(x,y):x>0,\ y>0,\ x+y<1\}$ be the open reference triangle with its one-cell mesh, let $k\ge1$, and take $u(x,y)=x$, $f=0$, and $g=u|_{\partial\Omega}$. Then the weak Nitsche equations have $u_h^0=u_h^1=u$ whenever the penalty is above the corresponding coercivity threshold. The same $u$ is the exactly representable strongly imposed $P_1$ solution.

The faces are $F_1=\{y=0\}$, $F_2=\{x=0\}$, and $F_3=\{x+y=1\}$. The arrows are their outward unit normals; the exact boundary fluxes are $0$, $-1$, and $1/\sqrt2$, respectively.

```tikz
\begin{tikzpicture}[scale=2]
  \coordinate (A) at (0,0);
  \coordinate (B) at (1,0);
  \coordinate (C) at (0,1);
  \draw[thick] (A)--(B)--(C)--cycle;
  \node[below left] at (A) {$(0,0)$};
  \node[below right] at (B) {$(1,0)$};
  \node[above left] at (C) {$(0,1)$};
  \draw[->,blue] (0.35,0)--(0.35,-0.28) node[below] {$n_{F_1}=(0,-1)$};
  \draw[->,blue] (0,0.35)--(-0.28,0.35) node[left] {$n_{F_2}=(-1,0)$};
  \draw[->,blue] (0.62,0.38)--(0.86,0.62) node[right] {$n_{F_3}=(1,1)/\sqrt2$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Countable Choice; the reference triangle, $u=x$, $f=0$, $g=u|_{\partial\Omega}$, and a degree-$k$ conforming polynomial space; the form definitions [[def-nitsche-boundary-penalty-forms]]; and the affine simplex Gauss–Green formula [[lem-affine-simplex-gauss-green-formula]].

[F1] For $u=x$, $\nabla u=(1,0)$, $\Delta u=0$, and the boundary normal derivative is $\partial_nu=n_1$ on each straight facet.

[F2] If $K$ is a nondegenerate affine simplex and $G\in C^1(\overline K;\mathbb R^d)$, then $\int_K\operatorname{div}G\,dx=\sum_{F\subset\partial K}\int_FG\cdot n_{K,F}\,dS$ ([[lem-affine-simplex-gauss-green-formula]]).

[F3] Above the stated threshold, each form is coercive ([[lem-nitsche-penalty-coercivity]]).

[F4] A function that is polynomial on each cell and belongs to $H^1_0(\Omega)$ has zero classical boundary restriction on every boundary facet ([[lem-nitsche-h-one-zero-functions-have-zero-facet-traces]]).

## Verification

**Given:** The one-cell triangle and the data in [F1]–[F3].

1.1 The function $u=x$ is affine, hence belongs to $V_h$ for every $k\ge1$, and it has the prescribed trace $g$. Apply [F2] to $G=w_h\nabla u$: since $\Delta u=0$, its divergence is $\nabla w_h\cdot\nabla u$, and its boundary flux is $w_h\partial_nu$. Thus the volume term in $a_h^0(u,w_h)$ cancels its first boundary-flux term. The remaining term is $\gamma_0\sum_Fh_F^{-1}\int_Fg w_h$, exactly $\ell_h^0(w_h)$ because $f=0$. [F1, F2, given]

2.1 For $\theta=1$, the extra form term is $-\sum_F\int_Fu\,\partial_nw_h$, and the extra load term is $-\sum_F\int_Fg\,\partial_nw_h$; these agree since $u|_F=g$. Thus $u$ satisfies both weak equations. Coercivity [F3] implies uniqueness: the difference $d_h$ of two solutions obeys $a_h^\theta(d_h,w_h)=0$ for every $w_h$, so testing $w_h=d_h$ gives $\lambda_\theta\|d_h\|_{E,h}^2\le0$ and hence $d_h=0$. Therefore $u_h^0=u_h^1=u$. For strong imposition, $u\in V_h$ has the required boundary trace and satisfies the Poisson weak equation on each test in $Y_h$: the simplex Green identity [F2] and the zero boundary restriction [F4] make its boundary flux term vanish. Thus it is the strong Galerkin solution as well. [F1, F2, F3, F4, step 1.1, algebra] ∎
