---
id: def-piecewise-linear-fv-time-interpolant
kind: definition
title: Piecewise-linear time interpolant of a finite-volume scheme
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 2
aliases: []
deps:
  [
    def-monotone-finite-volume-entropy-scheme,
    def-finite-volume-space-time-reconstruction
  ]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Jérôme Droniou, A beginner’s course in finite volume approximation of
        scalar conservation laws, complete lecture note"
      url: "https://math.univ-cotedazur.fr/u/massonr/MAM5/droniou-scalar-hyp.pdf"
      locator: "§2.3.1, pp. 19–21: discrete time-variation estimates for the
        finite-volume state."
    - title: "Siddhartha Mishra, Ulrik S. Fjordholm and Rémi Abgrall, Numerical
        Methods for Conservation Laws, ETH lecture notes"
      url: "https://metaphor.ethz.ch/x/2019/hs/401-4671-00L/literature/mishra_hyperbo\
        lic_pdes.pdf"
      locator: "Theorem 4.19, §4.6, PDF p. 56: the precise affine-in-time interpolant
        on each cell and time slab."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

Let $U_j^n$ be the states on a mesh from
[[def-monotone-finite-volume-entropy-scheme]], with cell-time slabs
$I_j\times[t_n,t_{n+1})$ and $t_n=n\tau$. The **piecewise-linear time
interpolant** $W_{h,\tau}$ is constant in $x$ on each cell and, for
$t\in[t_n,t_{n+1})$, is
$$W_{h,\tau}(x,t):=(1-\theta)U_j^n+\theta U_j^{n+1},\qquad \theta:=\frac{t-t_n}{\tau},\qquad x\in I_j.$$
The piecewise-constant state $\mathcal U_{h,\tau}$ and face flux
$\mathcal Q_{h,\tau}$ use the convention of
[[def-finite-volume-space-time-reconstruction]]. Values on mesh boundaries
are irrelevant to the corresponding Lebesgue classes.

The interpolant is affine in time on each slab and has the scheme values at
both time endpoints. Its purpose here is to obtain time-uniform local compactness
and the strong initial trace; the weak-limit supplier is applied to
$\mathcal U_{h,\tau}$ after proving that the two reconstructions have the same
strong local limit.
