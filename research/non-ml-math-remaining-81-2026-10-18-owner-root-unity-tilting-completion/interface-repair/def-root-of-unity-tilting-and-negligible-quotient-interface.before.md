---
id: def-root-of-unity-tilting-and-negligible-quotient-interface
kind: definition
title: "Tilting objects and negligible morphisms in a root-of-unity category"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps:
  - def-additive-category
  - def-braided-monoidal-category
  - def-k-linear-category-and-k-linear-functor
  - def-monoidal-category
  - def-pivotal-structure
  - def-rigid-object-and-rigid-monoidal-category
  - def-root-of-unity-quantum-group-forms
  - def-left-and-right-modules
  - def-symmetrizable-cartan-datum-for-a-quantum-group
  - def-the-categorical-trace-of-a-morphism-into-the-double-dual
dependency_level: 1
verification:
  precheck: n/a
sources:
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "§8.18.2, printed pp. 235–236: the tilting-subcategory quotient by negligible modules and the restricted Verlinde alcove."
    - title: "Henning Haahr Andersen and Catharina Stroppel, Fusion Rings for Quantum Groups"
      url: "https://pure.au.dk/ws/files/77171619/Fusion_Rings_for_Qunatum_Groups.pdf"
      locator: "§2.1–2.2, PDF pp. 4–7: Weyl and dual Weyl filtrations, the tilting subcategory, negligible modules, and the quotient; the tensor-ideal and semisimplicity assertions are attributed there to Andersen–Paradowski."
---

## Definition

Fix a finite-type symmetrizable Cartan datum
([[def-symmetrizable-cartan-datum-for-a-quantum-group]]), a root parameter
$\zeta$, and the Lusztig algebra
[[def-root-of-unity-quantum-group-forms]]. Put
$P^+=\{\lambda\in P:\langle\lambda,h_i\rangle\ge0\text{ for every }i\}$.
A finite-dimensional $U^L_\zeta(\mathfrak g)$-module $M$ is **type 1** here
if it is equipped with a $P$-grading $M=\bigoplus_{\mu\in P}M_\mu$ such that
$K_hm=\zeta^{\langle\mu,h\rangle}m$ for $m\in M_\mu$ and
$E_i^{(r)}M_\mu\subseteq M_{\mu+r\alpha_i}$,
$F_i^{(r)}M_\mu\subseteq M_{\mu-r\alpha_i}$. The grading is part of the
type-1 structure, so coincident eigenvalues at a root of unity do not
identify different labels.

The root-representation input for the following definitions is a full
$\mathbb C$-linear additive braided rigid monoidal subcategory
$\mathcal C_\zeta$ of the category of finite-dimensional left
$U^L_\zeta(\mathfrak g)$-modules ([[def-left-and-right-modules]]), together
with a pivotal structure $j:\operatorname{id}\to(-)^{\vee\vee}$ and the
braiding $c_{X,Y}$
([[def-k-linear-category-and-k-linear-functor]], [[def-additive-category]],
[[def-monoidal-category]], [[def-rigid-object-and-rigid-monoidal-category]],
[[def-braided-monoidal-category]], [[def-pivotal-structure]]), and two
specified finite-dimensional module
families $(\Delta_\zeta(\lambda))_{\lambda\in P^+}$ and
$(\nabla_\zeta(\lambda))_{\lambda\in P^+}$ whose members are objects of
$\mathcal C_\zeta$. In the intended quantum-group
application these are intended to be the Weyl and dual Weyl families. Their
construction, the tensor action on modules, and the compatible braiding and
rigidity with the required root-order hypotheses are separate proof
obligations; this definition treats them as supplied data.

A **$\Delta$-filtration** of $M$ is a finite chain of submodules in the
ambient module category,
$0=M_0\subseteq M_1\subseteq\cdots\subseteq M_r=M$, whose successive
quotients are isomorphic to specified modules $\Delta_\zeta(\lambda)$.
A **$\nabla$-filtration** is defined in the same way using the specified
$\nabla_\zeta(\lambda)$ family. A **tilting object** is an object with both
filtrations; write $\mathcal T_\zeta$ for the full subcategory of such objects.

For $M,N\in\mathcal T_\zeta$, a morphism $f:M\to N$ is **negligible** if
$$\operatorname{Tr}_L(j_M\circ g\circ f)=0\quad\text{for every }g:N\to M,$$
where $\operatorname{Tr}_L$ is the categorical trace
[[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]. This defines
a subspace $\mathcal N_\zeta(M,N)\subseteq\operatorname{Hom}(M,N)$. Linearity
of composition and of the categorical trace makes this an intersection of
kernels, hence a vector subspace. The vector spaces
$\operatorname{Hom}(M,N)/\mathcal N_\zeta(M,N)$ are candidate quotient
morphism spaces. This definition does not assert that the
$\mathcal N_\zeta(M,N)$ form a composition or tensor ideal, or that the
resulting quotient inherits the braiding, is semisimple, ribbon, or modular.
