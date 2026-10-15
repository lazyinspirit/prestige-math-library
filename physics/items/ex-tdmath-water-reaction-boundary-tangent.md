---
id: ex-tdmath-water-reaction-boundary-tangent
kind: example
title: "Water formation at a boundary of the feasible extent interval"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
proof_strategy: direct
deps:
  - lem-tdmath-stoichiometric-tangent-cone
dependency_roles:
  lem-tdmath-stoichiometric-tangent-cone: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "David Bindel, Optimization Theory, §6.1.4, Numerical Methods for Data Science lecture notes"
      url: "https://www.cs.cornell.edu/~bindel/nmds/00-Background/05-Optimization.html"
verification:
  precheck: n/a
---

## Example

For the reaction $2\,\mathrm{H_2}+\mathrm{O_2}\to2\,\mathrm{H_2O}$, let extent $\xi$ and species amounts use moles. The dimensionless stoichiometric column is $\nu=(-2,-1,2)^{\mathsf T}$ in the species order $(\mathrm{H_2},\mathrm{O_2},\mathrm{H_2O})$, and take $n^0=(2,1,0)^{\mathsf T}$. Then the feasible extent interval is $[0,1]$, and at $\xi=0$ the tangent cone permits only forward directions $h\ge0$. The matrix of hydrogen and oxygen atom counts annihilates $\nu$. For the explicitly mathematical objective $\Phi(n)=n_{\mathrm{H_2O}}$, the induced extent function is $f(\xi)=2\xi$ and has a boundary minimum at zero. This is a stoichiometric calculation, not a claim about chemical equilibrium or a measured system.

## Facts & Assumptions

**Given:** The reaction vector, initial amounts, extent convention, and linear objective in the Example.

[L1] [[lem-tdmath-stoichiometric-tangent-cone]]: the feasible tangent cone is determined by nonnegative changes in species whose amounts are zero at the point; the extent derivative is $\nu^{\mathsf T}\mu$ for a differentiable potential.

## Verification

**Proof technique:** direct calculation.

1.1 The species-amount vector is $n(\xi)=n^0+\nu\xi=(2-2\xi,1-\xi,2\xi)^{\mathsf T}$. Nonnegativity of its third component requires $\xi\ge0$, and nonnegativity of its first two components requires $\xi\le1$; hence the feasible set is exactly $[0,1]$. [given, algebra]

1.2 The elemental count matrix is $D=\begin{pmatrix}2&0&2\\0&2&1\end{pmatrix}$, with first row counting hydrogen atoms and second row oxygen atoms per molecule. Direct multiplication gives $D\nu=(-4+4,-2+2)^{\mathsf T}=(0,0)^{\mathsf T}$, so every change $n(\xi)-n^0=\nu\xi$ preserves both atom totals. [given, algebra]

2.1 At $\xi_*=0$, only the water component is zero. Its directional change is $(\nu h)_3=2h$, so [L1] gives $T_{\mathcal F}(0)=\{h:2h\ge0\}=[0,\infty)$. A negative direction is infeasible because it would make the water amount $2\xi$ negative. [L1, step 1.1, algebra]

3.1 For $\Phi(n)=n_3$, the induced function is $f(\xi)=\Phi(n(\xi))=2\xi$. Its derivative at $0$ is $Df(0)h=2h\ge0$ for every feasible tangent $h\ge0$, and $f(\xi)\ge f(0)$ for every $\xi\in[0,1]$. This verifies the boundary first-order condition and minimum directly for this chosen mathematical objective. [L1, step 1.1, step 2.1, algebra] ∎
