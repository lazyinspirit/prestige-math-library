---
title: The flop restriction complement is the finite ADE relative complement
status: published
research_item: lem-author-5f10a31d9e26-finite-ade-complement-identification
dependency_level: 10
---

## Prerequisites

- [prop-author-5f10a31d9e26-slice-restriction-contract](item-prop-author-5f10a31d9e26-slice-restriction-contract)
- [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)
- [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)
- [prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)
- [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)
- [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)
- [math:def-cartan-matrix-of-a-based-root-system](https://alphabetamath.cc/item/def-cartan-matrix-of-a-based-root-system)
- [math:def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention](https://alphabetamath.cc/item/def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention)
- [math:lem-finite-weyl-positive-roots-and-simple-reflections](https://alphabetamath.cc/item/lem-finite-weyl-positive-roots-and-simple-reflections)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)


## Statement

Work over $\mathbb C$ with the Axiom of Choice, retaining the complete-local smooth flopping setting and specified bundle choice of the slice-restriction contract. For its slice pair $(\Delta,J)$ and geometric arrangement $\mathcal H_\Lambda$, put $I=\Delta\setminus J$ and $n=|I|$, and index the coordinates of $\mathbb R^n$ by $I$. Use the finite ADE Coxeter system with the same labelled diagram $\Delta$, its canonical simple-root representation and the corresponding relative cone, arrangement and complement. The surviving-curve coordinates identify the arrangement $(\operatorname{Cone}(J)^\circ,\mathcal H^J)$ with $(\mathbb R^n,\mathcal H_\Lambda)$. They induce a homeomorphism
$$\mathcal X_J^{\mathbb C}\ \cong\ \mathbb C^n\setminus\bigcup_{K\in\mathcal H_\Lambda}K_{\mathbb C},$$
where $K_{\mathbb C}=\{x+iy:x,y\in K\}$.

Chambers are connected components of the real arrangement complement, and adjacency means sharing a wall in the chamber-and-wall definition. Here a chamber path is a finite nonempty sequence $(C_0,\ldots,C_m)$ of chambers with each consecutive pair adjacent, and its length is $m$. The coordinate identification gives bijections of chambers and chamber paths, preserves adjacency and path lengths, and therefore preserves minimum lengths for fixed endpoints.

## Statement references

[prop-author-5f10a31d9e26-slice-restriction-contract](item-prop-author-5f10a31d9e26-slice-restriction-contract)

[def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites)

[def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers)

[def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)

[def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers)

## Facts & Assumptions

[F1] The slice-restriction contract identifies the geometric parameter space with $L=\{\vartheta\in\mathbb R^\Delta:\vartheta_j=0\ (j\in J)\}$. Its walls are the distinct proper restrictions of the finite ADE root hyperplanes; in the geometric simple-root basis $(\beta_i)_{i\in\Delta}$, a root $\sum_i c_i\beta_i$ has hyperplane $\sum_i c_i\vartheta_i=0$. [prop-author-5f10a31d9e26-slice-restriction-contract](item-prop-author-5f10a31d9e26-slice-restriction-contract)

[F2] The canonical representation has simple-root basis $(\alpha_i)$, Coxeter form $B$, reflections $r_i(v)=v-2B(v,\alpha_i)\alpha_i$ and roots $\{w\alpha_i:w\in W,\ i\in\Delta\}$. [def-real-coxeter-interface-artin-tits-prerequisites](item-def-real-coxeter-interface-artin-tits-prerequisites) The subspace $\Theta_J$ and proper restricted hyperplanes define the relative arrangement. [def-relative-cone-artin-tits-normalisers](item-def-relative-cone-artin-tits-normalisers) Since this $W$ is finite, its Tits cone is all of $\Theta$. [prop-tits-cone-basic-artin-tits-normalisers](item-prop-tits-cone-basic-artin-tits-normalisers)

[F3] The relative complement deletes $H\times H$ from the product of the relative cone interior with itself; in finite type the map $(x,y)\mapsto x\otimes1+y\otimes i$ identifies it with the complement of the complexified hyperplanes. [def-relative-complement-artin-tits-normalisers](item-def-relative-complement-artin-tits-normalisers)

[F4] For geometric simple roots, the row-coroot Cartan convention is $a_{ik}=2(\beta_k,\beta_i)/(\beta_i,\beta_i)$ and $s_i(\beta_k)=\beta_k-a_{ik}\beta_i$. [math:def-cartan-matrix-of-a-based-root-system](https://alphabetamath.cc/item/def-cartan-matrix-of-a-based-root-system) The labelled simply laced ADE Dynkin diagram has $a_{ii}=2$, $a_{ik}=-1$ for adjacent distinct vertices, and $a_{ik}=0$ otherwise. [math:def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention](https://alphabetamath.cc/item/def-dynkin-diagram-with-edge-multiplicity-and-arrow-convention)

[F5] For a finite reduced crystallographic Euclidean root system with a chosen positive system and its simple roots, every root is the image of a simple root under the group generated by the simple reflections. This is an explicit assertion of [math:lem-finite-weyl-positive-roots-and-simple-reflections](https://alphabetamath.cc/item/lem-finite-weyl-positive-roots-and-simple-reflections). The geometric finite ADE root system in [F1], with its geometric simple roots $(\beta_i)$, has exactly these hypotheses and conventions.

[F6] Chambers, ambient closures, walls and adjacency are defined in [def-chambers-walls-artin-tits-normalisers](item-def-chambers-walls-artin-tits-normalisers): a wall is an intersection of a chamber closure with an arrangement hyperplane of affine dimension one less than that chamber, and distinct chambers are adjacent when they share a wall.

[F7] The Axiom of Choice is assumed as in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It is inherited from the complete-local smooth flopping setting of [prop-author-5f10a31d9e26-slice-restriction-contract](item-prop-author-5f10a31d9e26-slice-restriction-contract), whose geometric wall identification is used in [F1]. The coordinate comparison below adds no further choice use.

## Proof

**Given:** The slice data in the complete-local smooth flopping setting of the Statement, including its inherited Axiom of Choice, and the finite ADE Coxeter system on the same labelled diagram.

**Goal:** Identify the arrangements and complements, and preserve chambers, adjacency and path lengths.

**Proof technique:** direct; compare the labelled reflection matrices, then pass to dual coordinates.

1.1 Use the geometric slice input under the inherited assumption [F7]. Let $E$ be the geometric root space in [F1] and define the linear isomorphism $T:V\to E$ by $T(\alpha_i)=\beta_i$ for every label $i$. In the ADE Coxeter form, $2B(\alpha_k,\alpha_i)$ equals $2$ on the diagonal, $-1$ on an edge because $m_{ik}=3$, and $0$ off the edges because $m_{ik}=2$. These are exactly the entries $a_{ik}$ in [F4]. Thus $T r_i(\alpha_k)=\beta_k-a_{ik}\beta_i=s_iT(\alpha_k)$ for all $i,k$, so $T r_i=s_iT$ on the whole space. It follows by composition that $T$ sends the canonical simple-root orbits exactly to the geometric simple-root orbits, which exhaust the geometric root system by the simple-reflection generation assertion in [F5]. Hence $T(\Phi)$ is the full geometric root set. This basis calculation works separately on every component and requires no common scalar relating different component normalizations. [F1, F2, F4, F5, F7, construct, algebra]

2.1 On dual spaces the map $f\mapsto g=f\circ T^{-1}$ satisfies $g(\beta_i)=f(\alpha_i)$ for every $i$. It therefore preserves all labelled simple-root dual coordinates, sends $\Theta_J$ to $L$, and sends $H_\alpha$ to the hyperplane $g(T\alpha)=0$. By step 1.1 these are exactly the geometric root hyperplanes in [F1]. Containment of the respective coordinate subspace is preserved by this bijection, so the distinct proper restrictions are precisely the two relative hyperplane collections. Projecting $L$ to its coordinates indexed by $I$ is a linear isomorphism $L\to\mathbb R^n$, with inverse extension by zero on $J$; compose it with the dual map to obtain $q:\Theta_J\to\mathbb R^n$. Its coordinate formulas and inverse are continuous, so it is a homeomorphism identifying the hyperplanes with $\mathcal H_\Lambda$. [F1, F2, step 1.1, construct]

3.1 Since $W$ is finite, [F2] gives $\operatorname{Cone}=\Theta$. Thus $\operatorname{Cone}(J)=\Theta_J$ and its interior in $\Theta_J$ is all of $\Theta_J$. Together with step 2.1 this proves equality of the real domains as well as the arrangement identification. [F2, step 2.1]

4.1 The map $(x,y)\mapsto q(x)+i q(y)$ is a real-linear homeomorphism $\Theta_J\times\Theta_J\to\mathbb C^n$, with inverse obtained from real and imaginary parts and $q^{-1}$. For each relative hyperplane $H$, its image on $H\times H$ is $q(H)_{\mathbb C}$. It therefore sends the deleted union in [F3] exactly to the displayed union and restricts to the asserted homeomorphism of complements. Here $n=|I|$ because precisely those coordinates remain free in $L$. [F1, F3, step 2.1, step 3.1]

5.1 By step 2.1 the real complement homeomorphism gives a bijection of connected components, hence of chambers in [F6]. The linear isomorphism $q$ sends each ambient chamber closure to its image closure, sends its intersection with $H$ to the image closure intersected with $q(H)$, and preserves affine dimension. It thus sends walls bijectively to walls and preserves sharing a wall in both directions. Applying this chamber bijection term by term sends every chamber path in the Statement to one of the same length, with the inverse induced by $q^{-1}$. For each fixed pair of endpoints the sets of available path lengths are identical, so any minimum is the same. [F6, step 2.1, step 3.1] ∎
