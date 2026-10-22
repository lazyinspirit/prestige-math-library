---
id: def-qftx-braided-line-model
kind: definition
title: "Braided line representation data"
status: published
origin: pipeline
pipeline_run: physics-non-fluid-129-2026-10-21-r2
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-tensor-and-multitensor-category
  - def-braiding
  - thm-braided-coherence-via-underlying-braids
  - def-braid-group-by-the-artin-presentation
  - thm-von-dyck
  - thm-hh-finite-double-hopf-structure-and-canonical-r
dependency_roles:
  def-tensor-and-multitensor-category: mathematical-premise
  def-braiding: mathematical-premise
  thm-braided-coherence-via-underlying-braids: mathematical-premise
  def-braid-group-by-the-artin-presentation: mathematical-premise
  thm-von-dyck: mathematical-premise
  thm-hh-finite-double-hopf-structure-and-canonical-r: mathematical-premise
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; only finite parenthesizations, associators, and their composites are used."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Pavel Etingof, Shlomo Gelaki, Dmitri Nikshych, and Victor Ostrik, Tensor Categories, Mathematical Surveys and Monographs 205"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
      locator: "Definition 4.1.1, §7.14, and §§8.1–8.3, especially the braided-category definition, the braid-group action, and Proposition 8.3.8."
    - title: "Kalle Kytölä, Introduction to Hopf algebras and representations, full lecture notes, Spring 2011"
      url: "https://math.aalto.fi/~kkytola/files_KK/lectures_files_KK/Hopf-lecture_notes.pdf"
      locator: "§4.1 Proposition 4.6 and §4.3 Theorem 4.18, including the convention and the proof boundary noted in Exercise 41."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Definition

Let $k$ be a field and let $\mathcal C$ be a locally finite $k$-linear abelian rigid monoidal category whose tensor product is $k$-bilinear. For each object $Y$ write $\operatorname{End}_{\mathcal C}(Y):=\operatorname{Hom}_{\mathcal C}(Y,Y)$. The tensor unit $\mathbf1$ is assumed to satisfy $\operatorname{End}_{\mathcal C}(\mathbf1)\cong k$ as $k$-algebras. Here rigid means every object has left and right duals with evaluation and coevaluation maps satisfying the two snake identities. Equip $\mathcal C$ with a braiding $c_{Y,Z}:Y\otimes Z\to Z\otimes Y$, natural in $Y,Z$, satisfying the two hexagon identities with the associator $\alpha$. Fix $X\in\mathcal C$, put $P_0(X)=\mathbf1$, $P_1(X)=X$, and recursively put $P_{m+1}(X)=P_m(X)\otimes X$.

For any object $Y$, let $\operatorname{Aut}_{\mathcal C}(Y)$ be the group under composition of those $g\in\operatorname{End}_{\mathcal C}(Y)$ for which some $h\in\operatorname{End}_{\mathcal C}(Y)$ satisfies $g\circ h=h\circ g=\operatorname{id}_Y$.

For each $n\ge2$ and $1\le i<n$, let $Q_{n,i}(X)$ be the parenthesized product $\bigl(P_{i-1}(X)\otimes(X\otimes X)\bigr)\otimes P_{n-i-1}(X)$, with the unit factors at either end removed by the fixed unitors when an exponent is zero. Choose a canonical rebracketing isomorphism $\rho_{n,i}:P_n(X)\to Q_{n,i}(X)$ made from associators, unitors, and their inverses, without permuting the ordered tensor factors. Define

$$B_i^X:=\rho_{n,i}^{-1}\circ\bigl(\operatorname{id}_{P_{i-1}(X)}\otimes c_{X,X}\otimes\operatorname{id}_{P_{n-i-1}(X)}\bigr)\circ\rho_{n,i}\in\operatorname{End}_{\mathcal C}(P_n(X)).$$

The family $B_i^X$ is independent of the chosen canonical rebracketing path and determines a homomorphism $\varrho_n:B_n\to\operatorname{Aut}_{\mathcal C}(P_n(X))$, where $B_n$ is the braid group with positive generator $\sigma_i$ sent to $B_i^X$. These are exact algebraic morphisms.

**Physical interpretation boundary.** A physical adiabatic-exchange interpretation needs additional model data; the categorical data below supply none of the analytic or physical data. Here $\mathcal H$ is a complete complex inner-product space, with inner product linear in its first variable. For each dimensionless $s\in[0,1]$, let $K(s):\mathcal D\subseteq\mathcal H\to\mathcal H$ be self-adjoint on a specified common dense domain $\mathcal D$. For a densely defined operator $K$, its adjoint $K^*$ is defined by $y\in\mathcal D(K^*)$ exactly when some $z\in\mathcal H$ satisfies $\langle Kx,y\rangle=\langle x,z\rangle$ for every $x\in\mathcal D(K)$, with $K^*y=z$; self-adjoint means $\mathcal D(K^*)=\mathcal D$ and $K^*x=Kx$ there. The spectrum $\sigma(K)$ is the set of $\lambda\in\mathbb C$ for which $K-\lambda I$ has no bounded, everywhere-defined inverse.

For each $s$, supply a projection-valued measure $\mathsf{E}_s$ on the Borel subsets of $\mathbb R$: each $\mathsf{E}_s(A)$ is an orthogonal projection, $\mathsf{E}_s(\mathbb R)=I$, and for pairwise disjoint Borel sets $A_j$, $\mathsf{E}_s(\bigcup_j A_j)x=\sum_j\mathsf{E}_s(A_j)x$ with norm convergence for every $x\in\mathcal H$. Require $\mathsf{E}_s$ to represent $K(s)$ as its spectral integral: with $\mu_{s,x}(A):=\langle \mathsf{E}_s(A)x,x\rangle$, the domain is $\mathcal D=\{x\in\mathcal H:\int_{\mathbb R}\lambda^2\,d\mu_{s,x}(\lambda)<\infty\}$ and $K(s)x=\int_{\mathbb R}\lambda\,d\mathsf{E}_s(\lambda)x$ there. For a Borel set $\Omega\subseteq\mathbb R$, define its spectral projection by $P(s):=\mathsf{E}_s(\Omega)$. Require $\operatorname{ran}P(s)$ to be finite-dimensional and $\operatorname{dist}(\Omega,\sigma(K(s))\setminus\Omega)\ge\gamma>0$ uniformly in $s$, where $\operatorname{dist}(A,B):=\inf\{|a-b|:a\in A,\ b\in B\}$ and $\inf\varnothing:=+\infty$.

Require $s\mapsto P(s)$ to be continuously differentiable in operator norm. Its ranges then form a finite-rank Hermitian vector bundle $E\to[0,1]$, meaning the locally trivial bundle with fiber $E_s:=\operatorname{ran}P(s)$ and the inner product inherited from $\mathcal H$. A Hermitian connection on $E$ is a complex-linear covariant derivative $\nabla_s$ on continuously differentiable sections satisfying $\nabla_s(f\psi)=f'\psi+f\nabla_s\psi$ and $\partial_s\langle\psi,\phi\rangle=\langle\nabla_s\psi,\phi\rangle+\langle\psi,\nabla_s\phi\rangle$. Its parallel transport $W(s,0):E_0\to E_s$ is the map obtained by solving $\nabla_s\psi(s)=0$ along the interval.

Supply a family of unitary operators $U_\varepsilon(s,0):\mathcal H\to\mathcal H$, where unitary means surjective and inner-product-preserving, with $U_\varepsilon(0,0)=I$ and $U_\varepsilon(s,0)\mathcal D\subseteq\mathcal D$. Require for each $x\in\mathcal D$ that $s\mapsto U_\varepsilon(s,0)x$ is differentiable in Hilbert norm and satisfies $i\varepsilon\partial_sU_\varepsilon(s,0)x=K(s)U_\varepsilon(s,0)x$; all conditions ensuring this propagator exists are part of the model data. Here $\varepsilon>0$ is an energy scale and the slow-evolution regime means $\varepsilon\downarrow0$. A linear operator $A$ on $\mathcal H$ is bounded when $\sup_{\|x\|\le1}\|Ax\|<\infty$; this supremum is its operator norm $\|A\|_{\mathrm{op}}$. The added data must include a bound $r(\varepsilon)\to0$ such that

$$\sup_{s\in[0,1]}\|U_\varepsilon(s,0)P(0)-\iota_sW(s,0)P(0)\|_{\mathrm{op}}\le r(\varepsilon),$$

where $\iota_s:E_s\hookrightarrow\mathcal H$ is inclusion. In a physical realization, $K(s)$, $\gamma$, and $\varepsilon$ have the model's energy units; no numerical values are fixed here. The categorical data do not assert an experimental realization.

## Definition references

[[def-tensor-and-multitensor-category]]

[[def-braiding]]

[[thm-braided-coherence-via-underlying-braids]]

[[def-braid-group-by-the-artin-presentation]]

[[thm-von-dyck]]

[[thm-hh-finite-double-hopf-structure-and-canonical-r]]

## Diagrammatic convention

The first diagram is a composition diagram: arrows run from source to target, and the outer path is the definition $B_i^X=\rho_{n,i}^{-1}C_i\rho_{n,i}$, where $C_i$ is the local tensor of $c_{X,X}$ with spectator identities. The label $\rho_{n,i}(\alpha)$ means a finite composite of associators and unitors. In the second diagram time/order points upward; the positive crossing is, by definition, $c_{X,X}$, with the right input strand passing over the left. Both drawings omit spectator strands. They record conventions only; the proof uses morphism composition and coherence, not the diagrams.

```tikzcd
P_n(X) \arrow[r,"\rho_{n,i}(\alpha)"] \arrow[rrr,bend left=35,"B_i^X"] & Q_{n,i}(X) \arrow[r,"C_i"] & Q_{n,i}(X) \arrow[r,"\rho_{n,i}(\alpha)^{-1}"] & P_n(X)
```

```tikz
\begin{tikzpicture}[baseline=(current bounding box.center),>=stealth,thick]
  \draw (0,0) .. controls (0,1.1) and (1.4,1.9) .. (1.4,3);
  \draw[white,line width=5pt] (1.4,0) .. controls (1.4,1.1) and (0,1.9) .. (0,3);
  \draw (1.4,0) .. controls (1.4,1.1) and (0,1.9) .. (0,3);
  \node at (0, -0.35) {$X$}; \node at (1.4, -0.35) {$X$};
  \node at (0, 3.3) {$X$}; \node at (1.4, 3.3) {$X$};
  \node at (0.7,1.5) {$c_{X,X}$};
  \draw[->] (2.1,0.2) -- (2.1,2.8) node[midway,right] {$\text{time}$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The category data, associator, unitors, braiding, object $X$, integer $n\ge2$, and adjacent index $i$.

[F1] [[def-tensor-and-multitensor-category]]: a tensor category is a locally finite $k$-linear abelian rigid monoidal category, with bilinear tensor product and $\operatorname{End}(\mathbf1)\cong k$.

[F2] [[def-braiding]]: $c_{Y,Z}:Y\otimes Z\to Z\otimes Y$ is a natural isomorphism satisfying the two hexagon identities with the associator.

[F3] [[thm-braided-coherence-via-underlying-braids]]: two formal canonical composites on $X^{\otimes n}$ built from associators, unitors, braidings, and their inverses are equal when they have the same underlying braid.

[F4] [[def-braid-group-by-the-artin-presentation]]: $B_n$ has generators $\sigma_1,\ldots,\sigma_{n-1}$, adjacent braid relations, and far commutation relations.

[F5] [[thm-von-dyck]]: a generator assignment satisfying all relators of a presented group extends uniquely to a group homomorphism.

[F6] [[thm-hh-finite-double-hopf-structure-and-canonical-r]]: for finite-dimensional $H$ with bijective antipode, the fixed order is $D(H)=H^{*\mathrm{op}}\otimes H$; the canonical $R$ satisfies $R\Delta_D(d)=\Delta_D^{\mathrm{op}}(d)R$, and $\tau\circ R$ is the left-module Yetter–Drinfeld braiding in the stated convention.

## Proof

1.1 By the canonical rebracketing property in [F3], there is a canonical isomorphism $\rho_{n,i}:P_n(X)\to Q_{n,i}(X)$ built from the associators and unitors; every factor is invertible, so the composite is invertible. The map $\operatorname{id}\otimes c_{X,X}\otimes\operatorname{id}$ is an endomorphism of $Q_{n,i}(X)$, because $c_{X,X}$ is an isomorphism from $X\otimes X$ to the same ordered object $X\otimes X$. Conjugating gives the displayed endomorphism $B_i^X$ of $P_n(X)$. [F1, F2, F3, given, construct]

2.1 If $\rho_{n,i}$ and $\rho'_{n,i}$ are two such canonical rebracketings, then $\rho'_{n,i}\rho_{n,i}^{-1}$ has trivial underlying braid. Inserting the same local $c_{X,X}$ gives formal composites with underlying braid $\sigma_i$; [F3] makes the resulting endomorphisms equal. Thus $B_i^X$ is independent of the rebracketing path. [F3, step 1.1, algebra]

3.1 The two composites $B_i^XB_{i+1}^XB_i^X$ and $B_{i+1}^XB_i^XB_{i+1}^X$ have underlying braid words $\sigma_i\sigma_{i+1}\sigma_i$ and $\sigma_{i+1}\sigma_i\sigma_{i+1}$, equal in $B_n$; operators with $|i-j|>1$ have the equal underlying words $\sigma_i\sigma_j=\sigma_j\sigma_i$. By [F3] the corresponding morphisms are equal. [F3, F4, step 2.1, algebra]

4.1 Each $B_i^X$ is invertible by step 1.1 and [F2]. The relations in step 3.1 therefore satisfy the Artin presentation [F4], and [F5] gives the unique homomorphism $\varrho_n:B_n\to\operatorname{Aut}_{\mathcal C}(P_n(X))$ with $\varrho_n(\sigma_i)=B_i^X$. [F2, F4, F5, step 1.1, step 3.1, construct]

5.1 In the Hopf-module convention, the coproduct supplies the tensor-product module action, while [F6]'s intertwining identity $R\Delta_D(d)=\Delta_D^{\mathrm{op}}(d)R$ makes $\tau\circ R$ the exchange braiding; [F6] fixes the factor order $H^{*\mathrm{op}}\otimes H$. This supplies the category braiding only when the relevant module objects and category structure are supplied. No semisimplicity, unitarity, modularity, or physical realization follows from [F6] alone. [F6, given] ∎

## Remarks

The finite-double result is used only at its inspected interface. The definition does not assert that an arbitrary quasitriangular Hopf algebra is semisimple or unitary, that it defines a modular tensor category, or that its modules are realized by an experiment.
