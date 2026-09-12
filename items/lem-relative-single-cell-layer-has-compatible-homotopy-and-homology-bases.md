---
id: "lem-relative-single-cell-layer-has-compatible-homotopy-and-homology-bases"
kind: "lemma"
title: "A relative single cell layer has compatible homotopy and homology bases"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-high-relative-cells-do-not-change-lower-homotopy","lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range","lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis","lem-cw-quotients-and-collapse-of-a-contractible-subcomplex","lem-cw-quotient-induces-relative-singular-homology-isomorphisms","lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis","thm-long-exact-sequence-of-a-pair-in-singular-homology","cor-contractible-nonempty-spaces-have-the-homology-of-a-point","prop-relative-cw-inclusions-are-cofibrations","def-hurewicz-homomorphism"]
sources:
  references:
    - title: Hatcher, Algebraic Topology, Example4.26, Proposition4.28 and the proof
        of Theorem4.32; based characteristic details supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $A$ be a nonempty simply connected CW complex, $a\in A$, and $k\ge2$. Attach a set of oriented $k$-cells directly to $A$, with supplied characteristic maps $\chi_e:(D^k,S^{k-1})\to(Z,A)$. Then both
$$\pi_k(Z,A,a)\quad\hbox{and}\quad H_k(Z,A;\mathbb Z)$$
are free abelian on these cells. Their respective basis elements $c_e$ and $u_e$ satisfy
$$h(c_e)=u_e=(\chi_e)_*[D^k,S^{k-1}],$$
where $h$ is relative Hurewicz and the disk class has the prescribed boundary orientation. The class $c_e$ is represented by moving the marked boundary value of $\chi_e$ to $a$ through $A$ and extending that homotopy. Its class is independent of these choices. This result, including an arbitrary set of cells, is choice-free.

## Facts & Assumptions

[F1] [[lem-high-relative-cells-do-not-change-lower-homotopy]] gives $(k-1)$-connectivity for a CW pair with relative cells of dimensions at least $k$.

[F2] [[lem-relative-homotopy-compares-with-the-cw-quotient-in-the-connectivity-range]] gives the actual quotient-induced isomorphism through degree $r+s$ for an $r$-connected pair with $s$-connected subspace.

[F3] [[lem-first-homotopy-group-of-a-wedge-of-higher-spheres-has-its-cell-basis]] computes the degree-$k$ homotopy of the CW wedge, with its inclusion basis and finite-support coordinate inverse, for $k\ge2$.

[F4] [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]] constructs the ordinary CW quotient with the quotient characteristic disks. [[lem-cw-quotient-induces-relative-singular-homology-isomorphisms]] identifies relative homology by the actual quotient map. [[lem-integral-homology-of-a-wedge-of-higher-spheres-has-its-cell-basis]] identifies its sphere orientation basis.

[F5] [[prop-relative-cw-inclusions-are-cofibrations]] gives HEP for arbitrary targets, with the ordinary product topology and no choice assumption.

[F6] [[def-hurewicz-homomorphism]] defines $h$ by the relative disk orientation class and proves additivity, naturality and invariance under homotopies of pairs. [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] and [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] give the absolute-to-point-relative comparison used below.

## Proof

**Given:** The space $A$, the specified point, degree, cell data and orientations. The phrase simply connected includes path connectedness. Let $q:Z\to Z/A$ be the ordinary quotient.

1.1 The quotient cell construction [F4] identifies $Z/A$ with the CW wedge $W=\bigvee_e S^k_e$: every remaining boundary is sent to the quotient vertex and each open cell is unchanged. For every based space $V$ and positive $k$, the pair sequence in [F6] makes $H_k(V)\to H_k(V,*)$ an isomorphism: the adjacent positive homology groups of the point vanish, and in degree one the map $H_0(*)\to H_0(V)$ is injective because the map $V\to *$ supplies a left inverse. Orient $S^k_e=D^k/S^{k-1}$ by the image of $[D^k,S^{k-1}]$ under disk quotient followed by the inverse of this point-relative isomorphism. This image is a generator, because [F4] applies also to the standard finite CW pair $(D^k,S^{k-1})$ and gives a quotient-induced homology isomorphism. Thus the orientation convention is specified, not an unspecified possible sign. Denote the inclusion of this sphere into $W$ by $\iota_e$. [F4, F6, given]

1.2 By [F1], $(Z,A)$ is $(k-1)$-connected. Since $A$ is simply connected it is $1$-connected. Apply [F2] with $r=k-1$, $s=1$: $$q_*:\pi_k(Z,A,a)\longrightarrow\pi_k(W,*)$$ is an isomorphism, including at the endpoint $k=r+s$. By [F3], the target is free abelian on the classes $[\iota_e]$. Define $c_e$ to be their unique inverse images under $q_*$. These inverses exist individually and are unique, hence define the whole family without AC. In particular the relative degree-two group here is abelian; it is not merely presumed abelian for an arbitrary pair. [F1, F2, F3, given]

2.1 Fix one cell and a marked point $v\in S^{k-1}$. There is a path $\gamma$ in $A$ from $\chi_e(v)$ to $a$. Use a finite CW structure on the boundary sphere with $v$ as vertex, for example its one-vertex and one-top-cell structure. HEP [F5] extends the homotopy $v\mapsto\gamma(t)$ from that vertex to a homotopy of $\chi_e|_{S^{k-1}}$ in $A$. Apply HEP again to $(D^k,S^{k-1})$ with target $Z$ to extend this boundary homotopy and the initial map $\chi_e$ over the disk. Its final map $\chi'_e$ has its whole boundary in $A$ and sends $v$ to $a$, so is a based relative disk representative. The homotopy remains a homotopy of pairs, although its marked value moves. After applying $q$, its entire boundary is constantly the quotient vertex at every time. It therefore descends to a based homotopy of quotient spheres: quotient-times-interval continuity follows from the explicit HEP proof [F5]. The initial quotient sphere map is $\iota_e$, so $q_*[\chi'_e]=[\iota_e]$. By the injectivity in step 1.2, $[\chi'_e]=c_e$, independently of the path and extensions. Only finitely many witnesses for this one cell were used; no family of paths or extensions was selected. [F5, F6, step 1.1, step 1.2]

2.2 By [F4] and the point-relative comparison proved in step 1.1, the composite $$H_k(Z,A)\xrightarrow{q_*}H_k(W,\{*\})\longrightarrow H_k(W)$$ is an isomorphism. On $u_e=(\chi_e)_*[D^k,S^{k-1}]$ it gives $(\iota_e)_*[S^k_e]$, since quotient and characteristic maps commute pointwise and the sphere orientation was defined exactly in step 1.1. By the wedge homology calculation in [F4], these images form a free abelian basis. Hence the $u_e$ form a free abelian basis of $H_k(Z,A)$. [F4, step 1.1]

3.1 The homotopy of pairs in step 2.1 gives $(\chi'_e)_*[D^k,S^{k-1}]=(\chi_e)_*[D^k,S^{k-1}]$ by [F6]; its moving marked value does not obstruct the prism identity on relative chains. The definition of $h$ and step 2.1 therefore give $h(c_e)=u_e$. Additivity in [F6] now identifies the two free abelian groups on all finite sums, not just on the displayed generators. If there are no cells, $Z=A$, the relative groups and the empty free abelian group are zero. One cell gives one copy of $\mathbb Z$; the base space may be a point and the specified $a$ need not be a CW vertex. Degree zero and degree one are excluded; the degree-two case was explicitly justified by the quotient isomorphism. Cell orientations are supplied, quotient inverses are unique and the only discretionary witnesses were finite ones for a single cell. Thus no choice principle is used. [F3, F4, F6, step 1.2, step 2.1, step 2.2] ∎
