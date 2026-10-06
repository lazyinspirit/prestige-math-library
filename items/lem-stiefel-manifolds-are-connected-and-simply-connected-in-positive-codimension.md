---
id: lem-stiefel-manifolds-are-connected-and-simply-connected-in-positive-codimension
kind: lemma
title: "Stiefel manifolds are connected in positive codimension and simply connected in codimension at least two"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: [def-stiefel-space-grassmannian-and-tautological-bundle, thm-numerable-fiber-bundles-are-hurewicz-fibrations, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, def-locally-trivial-fiber-bundle, def-higher-homotopy-group-by-based-cubes, prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant, thm-lower-dimensional-sphere-maps-are-based-nullhomotopic, cor-euclidean-spheres-are-path-connected, def-n-connected-space-and-n-connected-map, ex-orthogonal-and-special-orthogonal-lie-groups]
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Milnor and James Stasheff, Characteristic Classes, §5 (Stiefel and Grassmann manifolds and their connectivity)"
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf
      locator: "printed pp. 55–66; $V_m(\\mathbb R^n)$ is path connected for $n>m$ and simply connected for $n\\ge m+2$, by induction along the first-vector bundle"
    - title: "Allen Hatcher, Algebraic Topology, §1.3 (covering isomorphisms on higher homotopy groups) and §4.2–4.3 (fibrations, long exact sequence, evaluation fibrations of mapping spaces)"
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
      locator: "printed pp. 75, 342, 375–440; long exact sequence of a fibration and the sphere-bundle induction"
dependency_level: 0
---

## Statement

For $1\le m\le n$: (a) $V_m(\mathbb R^n)$ is path connected when $n\ge m+1$;
(b) $\pi_1\bigl(V_m(\mathbb R^n),e_0\bigr)=0$ when $n\ge m+2$, where
$e_0=(e_1,\dots,e_m)$ is the standard frame. In particular $V_m(\mathbb R^n)$
is simply connected for $n\ge m+2$, and $V_m(\mathbb R^{m+1})$ is homeomorphic
to $\mathrm{SO}(m+1)$ and connected, with $V_1(\mathbb R^k)=S^{k-1}$. No
orientation of the frames is involved: $V_m(\mathbb R^n)$ is the space of
ordered orthonormal $m$-frames.

## Facts & Assumptions

**Given:** Integers $1\le m\le n$, the standard frame $e_0=(e_1,\dots,e_m)\in V_m(\mathbb R^n)$, and the two-letter alphabet $\{+,-\}$.

[F1] $V_m(\mathbb R^n)=\{(v_1,\dots,v_m):\langle v_i,v_j\rangle=\delta_{ij}\}\subseteq(\mathbb R^n)^m$ with the subspace topology; in particular $V_1(\mathbb R^k)$ is the unit sphere $S^{k-1}$. [[def-stiefel-space-grassmannian-and-tautological-bundle]]

[F2] A locally trivial fibre bundle has product charts $\theta_i:p^{-1}(U_i)\cong U_i\times F$; it is numerable when the data include a locally finite partition of unity whose closed supports lie in the chart domains. [[def-locally-trivial-fiber-bundle]]

[F3] Every numerable fibre bundle is a Hurewicz fibration, hence a Serre fibration. [[thm-numerable-fiber-bundles-are-hurewicz-fibrations]] The only use of AC in its proof is the well-order of the set of finite chart words; for a two-element chart family the finite words in two letters are enumerated explicitly by length and binary expansion, so the instance used below needs no choice principle.

[F4] For a based Serre fibration $p:(E,x_0)\to(B,b_0)$ with fibre $F$, the long exact sequence of homotopy groups is exact in every degree, with pointed sets in degree zero and groups from degree one on. [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]

[F5] $\pi_n(X,x_0)$ is the set of based cubes modulo boundary-fixed homotopies and $\pi_0(X,x_0)$ is the pointed set of path components of $X$. [[def-higher-homotopy-group-by-based-cubes]]

[F6] A based homeomorphism induces bijections on $\pi_0$ and isomorphisms on all $\pi_n$, $n\ge1$. [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]]

[F7] For $0\le k<r$ every continuous based map $(S^k,a)\to(S^r,b)$ is nullhomotopic through maps fixing $a$; consequently $\pi_k(S^r)=0$ for $k<r$. [[thm-lower-dimensional-sphere-maps-are-based-nullhomotopic]]

[F8] For $n\ge2$ the unit sphere $S^{n-1}$ is path connected. [[cor-euclidean-spheres-are-path-connected]]

[F9] $\mathrm{SO}(n)=\{A\in\mathbb R^{n\times n}:A^TA=I,\ \det A=1\}$ is the special orthogonal group. [[ex-orthogonal-and-special-orthogonal-lie-groups]] The $\mathrm{AC}_\omega$ in the cited example supplies the Lie group structure on $O(n)$ and $SO(n)$ and is not used here; only the displayed matrix set is needed.

[F10] A space is **simply connected** exactly when it is $1$-connected, i.e. nonempty, path connected, and has trivial fundamental group at every basepoint. [[def-n-connected-space-and-n-connected-map]]

## Proof

1.1 For $1\le m\le n$ the first-vector map $\pi:V_m(\mathbb R^n)\to V_1(\mathbb R^n)=S^{n-1}$, $\pi(v_1,\dots,v_m)=v_1$, is a locally trivial fibre bundle with fibre $V_{m-1}(\mathbb R^{n-1})$. The open sets $U_+=\{u\in S^{n-1}:\langle u,e_n\rangle>-\tfrac23\}$ and $U_-=\{u\in S^{n-1}:\langle u,e_n\rangle<\tfrac23\}$ cover $S^{n-1}$, and on $U_\pm$ the denominators $\|e_n\pm u\|^2=2(1\pm\langle u,e_n\rangle)$ are bounded below by $\tfrac23$, so the Householder reflections $H_u^\pm v=v-\frac{2\langle v,\,e_n\pm u\rangle}{\|e_n\pm u\|^2}(e_n\pm u)$ depend continuously on $u$ and are orthogonal; they satisfy $H_u^+(e_n)=-u$ and $H_u^-(e_n)=u$, hence map the hyperplane $e_n^\perp\cong\mathbb R^{n-1}$ isometrically onto $u^\perp$. Therefore $\Theta_\pm(u,f_2,\dots,f_m)=(u,H_u^\pm f_2,\dots,H_u^\pm f_m)$ are homeomorphisms $U_\pm\times V_{m-1}(\mathbb R^{n-1})\to\pi^{-1}(U_\pm)$ over $U_\pm$, with inverses $(v_1,\dots,v_m)\mapsto(v_1,(H_{v_1}^\pm)^{-1}v_2,\dots,(H_{v_1}^\pm)^{-1}v_m)$. [F1, F2]

1.2 Base case $m=1$: $V_1(\mathbb R^n)=S^{n-1}$ by [F1], which is nonempty and path connected for $n\ge2=m+1$ by [F8]; and for $n\ge3=m+2$ every based loop $S^1\to S^{n-1}$ is nullhomotopic by [F7] with $k=1<r=n-1$, so $\pi_1(V_1(\mathbb R^n),e_1)=0$. [F1, F5, F7, F8]

2.1 The explicit functions $\sigma_\pm(u)=\max\bigl(0,\pm\langle u,e_n\rangle+\tfrac13\bigr)$ satisfy $\sigma_++\sigma_-\ge\tfrac13$ on $S^{n-1}$ and have closed supports $\operatorname{supp}\sigma_\pm=\{\pm\langle u,e_n\rangle\ge-\tfrac13\}\subseteq U_\pm$, so $\rho_\pm=\sigma_\pm/(\sigma_++\sigma_-)$ is a partition of unity subordinate to the two-element cover of step 1.1. With these charts the bundle of step 1.1 is numerable, so by [F3] it is a Hurewicz fibration and in particular a Serre fibration; the only choice-like step of the cited proof is the well-order of finite words over the chart alphabet, and for the two-element alphabet the words are explicitly enumerated by their binary digits, so this application uses no choice. The identification of the fibre over $u$ with $V_{m-1}(\mathbb R^{n-1})$ is the homeomorphism $H_u^\pm$ restricted to $e_n^\perp$, so $\pi_0$ and $\pi_1$ of the fibre are those of $V_{m-1}(\mathbb R^{n-1})$ by [F6]. [F2, F3, F6, step 1.1]

3.1 Step (a) for $m\ge2$: assume $V_{m-1}(\mathbb R^{n-1})$ is path connected, which by the induction hypothesis holds because $n\ge m+1$ gives $n-1\ge(m-1)+1$. The bundle of steps 1.1 and 2.1 is a based Serre fibration with path-connected base $S^{n-1}$ and fibre $V_{m-1}(\mathbb R^{n-1})$ over $e_1$, and its exact sequence in degree zero reads $\pi_0(F)\to\pi_0(V_m(\mathbb R^n),e_0)\to\pi_0(S^{n-1},e_1)$, a sequence of pointed sets whose two outer terms are singletons; exactness makes the middle term a singleton as well, that is, $V_m(\mathbb R^n)$ is path connected. [F4, F5, F6, F8, step 2.1]

4.1 Step (b) for $m\ge2$: assume $\pi_1(V_{m-1}(\mathbb R^{n-1}),\cdot)=0$, which by the induction hypothesis holds because $n\ge m+2$ gives $n-1\ge(m-1)+2$. The exact sequence of the same based Serre fibration reads $\pi_1(F)\to\pi_1(V_m(\mathbb R^n),e_0)\to\pi_1(S^{n-1},e_1)$, and the target is trivial by [F7] with $k=1<r=n-1$ because $n\ge3$; exactness makes the first map surjective, so the triviality of $\pi_1(F)$ forces $\pi_1(V_m(\mathbb R^n),e_0)=0$. Since $V_m(\mathbb R^n)$ is path connected by step 3.1, triviality at one basepoint gives triviality at every basepoint. [F4, F5, F6, F7, step 2.1, step 3.1]

5.1 For the final identifications: the map $\Phi:V_m(\mathbb R^{m+1})\to\mathrm{SO}(m+1)$ that sends $(v_1,\dots,v_m)$ to the matrix whose first $m$ columns are $v_1,\dots,v_m$ and whose last column is the unique unit vector $w$ orthogonal to all $v_i$ with $\det(v_1,\dots,v_m,w)=+1$ is a bijection onto $\mathrm{SO}(m+1)$: the orthogonal complement of $\operatorname{span}\{v_1,\dots,v_m\}$ is a line containing exactly two unit vectors, and exactly one of them gives determinant $+1$; the coordinates of $w$ are the $m\times m$ minors of the matrix $(v_1\mid\cdots\mid v_m)$, namely the coefficients of the Hodge dual, which are polynomial in the entries of the $v_i$, and the inverse is the continuous projection to the first $m$ columns, so $\Phi$ is a homeomorphism. Hence by [F6] the homotopy invariants of $V_m(\mathbb R^{m+1})$ and $\mathrm{SO}(m+1)$ agree, and $V_m(\mathbb R^{m+1})$ is connected by step 3.1 applied with $n=m+1$. The case $m=1$ gives $V_1(\mathbb R^2)=S^1\cong\mathrm{SO}(2)$, consistent with $V_1(\mathbb R^k)=S^{k-1}$. Steps 1.2, 3.1 and 4.1 cover $m=1$ and all $m\ge2$ in the stated ranges, and together with the definition of simple connectivity [F10] they give that $V_m(\mathbb R^n)$ is simply connected whenever $n\ge m+2$. [F1, F5, F6, F9, F10, step 3.1] ∎
