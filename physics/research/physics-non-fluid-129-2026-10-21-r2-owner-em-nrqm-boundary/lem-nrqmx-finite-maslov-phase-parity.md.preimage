---
id: lem-nrqmx-finite-maslov-phase-parity
kind: lemma
domain: mathematics
title: Maslov phase parity in a finite generating chart
status: draft
origin: pipeline
dependency_level: 2
deps: [def-nrqmx-finite-mode-symplectic-data]
dependency_roles:
  def-nrqmx-finite-mode-symplectic-data: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Joel Robbin and Dietmar Salamon, Feynman path integrals on phase space and the metaplectic representation, §§5, 6.4, 8.5"
      url: "https://ncatlab.org/nlab/files/RobbinSalamonMetaplectic.pdf"
    - title: "Joel Robbin and Dietmar Salamon, The Maslov index for paths, Theorem 4.7 and Corollary 4.12"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robbsala2.pdf"
---

## Statement

Let $r\ge1$, $\hbar>0$, and let $S$ be a real finite-mode symplectic matrix
in grouped order $(q,p)$ whose upper-right block $B$ is invertible. Consider
two unitary propagators $U_1,U_2$ obtained from time-dependent real
homogeneous quadratic Hamiltonians (no linear or constant term), both with
classical endpoint $S$. Use the normalization that each propagator starts at
the identity and solves the Schrödinger equation with Planck scale $\hbar$.
Then
$$U_2=U_1\quad\text{or}\quad U_2=-U_1.$$
The same conclusion holds after multiplying both propagators by a fixed
normalized quadratic propagator, provided the resulting endpoint lies in a
chart with invertible upper-right block.

## Facts & Assumptions

**Given:** $r\ge1$, $\hbar>0$, an endpoint symplectic matrix $S$ with
$\det B\ne0$, and two normalized homogeneous quadratic Schrödinger
propagators with this endpoint.

[A1] Both paths start at the identity, have real homogeneous quadratic
Hamiltonians with no linear or scalar term, and end at this same $S$ in the
chart $\det B\ne0$.

[F1] For a time-dependent real quadratic Hamiltonian whose endpoint has
invertible upper-right block $B$, the normalized propagator has kernel
$$U_Hf(x_1)=\frac{e^{i\pi\mu_H/2}}{(2\pi\hbar)^{r/2}|\det B|^{1/2}} \int_{\mathbb R^r} e^{iG_S(x_1,x_0)/\hbar}f(x_0)\,dx_0,$$
where $G_S$ is the endpoint generating function and $\mu_H$ is the Maslov
index of the Hamiltonian path. This is Theorem 8.5; its proof reduces the
time-sliced quadratic path integral to a finite-dimensional Gaussian whose
Hessian signature is $2\mu_H$ (Theorem 6.4), then takes the strong limit
([Robbin–Salamon, Theorem 8.5 and proof](https://ncatlab.org/nlab/files/RobbinSalamonMetaplectic.pdf),
§§6.4 and 8.2–8.5).

[F2] For a path from the identity to a matrix with invertible upper-right
block $B$, the Maslov index satisfies
$\mu_H+r/2\in\mathbb Z$ and
$$(-1)^{\mu_H+r/2}=\operatorname{sign}\det B.$$
This is Corollary 4.12, proved from the Maslov-index homotopy and endpoint
stratum classification properties
([Robbin–Salamon, Corollary 4.12](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robbsala2.pdf),
Theorems 4.1 and 4.7).

[F3] For fixed $S$ with $B$ invertible, the graph-generating function is
uniquely determined by the block matrices of $S$ up to an additive constant;
for a homogeneous Hamiltonian path the action fixes that constant to zero
([[def-nrqmx-finite-mode-symplectic-data]] and
[Robbin–Salamon, Remark 2.2 and Theorem 8.5](https://ncatlab.org/nlab/files/RobbinSalamonMetaplectic.pdf)).

## Proof

1.1 Let $\mu_1,\mu_2$ be the Maslov indices of the two paths. Their endpoint
matrix is the same $S$, so the upper-right block $B$, the determinant factor,
and the homogeneous generating function $G_S$ in [F1] are the same. Dividing
the two kernel formulas shows that the propagators differ by the scalar
$e^{i\pi(\mu_2-\mu_1)/2}$. [A1, F1, F3, algebra]

2.1 By [F2], both $\mu_j+r/2$ are integers and have the same parity because
they give the same $\operatorname{sign}\det B$. Thus $\mu_2-\mu_1$ is an even
integer. Consequently
$$e^{i\pi(\mu_2-\mu_1)/2}\in\{1,-1\},$$
which proves the claim in this generating chart. Multiplication by a fixed
unitary does not change the relative scalar, so the final conditional claim
follows as well. [F1, F2, step 1.1, algebra] ∎
