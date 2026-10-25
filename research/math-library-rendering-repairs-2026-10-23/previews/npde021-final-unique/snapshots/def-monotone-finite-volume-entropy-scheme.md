---
id: def-monotone-finite-volume-entropy-scheme
kind: definition
title: Monotone finite-volume scheme and invariant-interval CFL
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 1
aliases: []
deps: [ def-bounded-bv-data-on-line, def-conservative-finite-volume-scheme ]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of
        scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§§2.2.2–2.2.3, pp. 15–18: monotone numerical fluxes, invariant-range
        CFL and standard Godunov/Lax–Friedrichs fluxes."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical
        Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbo\
        lic_pdes.pdf"
      locator: "§4.4.4, PDF pp. 49–50: local Lipschitz monotone fluxes and the CFL
        condition; §4.6, pp. 55–57: convergence hypotheses."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $f\in C^1(\mathbb R)$ and let $u_0\in\mathrm{BV}_b(\mathbb R)$ as in
[[def-bounded-bv-data-on-line]]. Put
$a_-:=\operatorname*{ess\,inf}_{\mathbb R}u_0$,
$a_+:=\operatorname*{ess\,sup}_{\mathbb R}u_0$ and $I:=[a_-,a_+]$. A
**monotone consistent two-point flux on $I$** is a locally Lipschitz map
$F\colon\mathbb R^2\to\mathbb R$ such that $F(s,s)=f(s)$ for every $s$,
$F(\cdot,b)$ is nondecreasing on $I$, and $F(a,\cdot)$ is nonincreasing on
$I$. Choose finite coordinate Lipschitz bounds $L_1,L_2\ge0$ on $I^2$:
$$|F(a,b)-F(a',b)|\le L_1|a-a'|,\qquad |F(a,b)-F(a,b')|\le L_2|b-b'|.$$
Local Lipschitz continuity on the compact square $I^2$ supplies such bounds.

For a mesh width $h>0$ and time step $\tau>0$, use the half-open cells
$I_j=[jh,(j+1)h)$, initial cell averages
$$U_j^0:=\frac1h\int_{I_j}u_0(x)\,dx,$$
and the shared-flux update
$$U_j^{n+1}=U_j^n-\lambda\bigl(F(U_j^n,U_{j+1}^n)-F(U_{j-1}^n,U_j^n)\bigr),\qquad \lambda:=\frac{\tau}{h},\quad j\in\mathbb Z,\ n\in\mathbb N_0.$$
The **full invariant-interval CFL bound** is
$$\lambda(L_1+L_2)\le1.$$
The flux-difference scheme is conservative in the shared-face sense of
[[def-conservative-finite-volume-scheme]]. The update stencil and positive
rightward flux orientation are shown here; the proofs use the displayed
recurrence, not the drawing.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1cm]
  \draw (0,0) rectangle (2,0.7);
  \draw (2,0) rectangle (4,0.7);
  \draw (4,0) rectangle (6,0.7);
  \node at (1,0.35) {$U_{j-1}^n$};
  \node at (3,0.35) {$U_j^n$};
  \node at (5,0.35) {$U_{j+1}^n$};
  \draw[->] (1.55,1.05) -- (2.45,1.05);
  \draw[->] (3.55,1.05) -- (4.45,1.05);
  \node at (2,1.32) {$F(U_{j-1}^n,U_j^n)$};
  \node at (4,1.32) {$F(U_j^n,U_{j+1}^n)$};
  \node[align=center] at (3,-0.7) {$U_j^{n+1}=U_j^n-\lambda(\mbox{right flux}-\mbox{left flux})$};
\end{tikzpicture}
```

## Remarks

The same face value leaves one cell and enters the next with opposite signs.
Monotonicity and the stated CFL bound make the three-argument update map
order-preserving on $I^3$ and preserve constant states, as proved in
[[lem-monotone-fv-update-preserves-range-and-tvd]].
