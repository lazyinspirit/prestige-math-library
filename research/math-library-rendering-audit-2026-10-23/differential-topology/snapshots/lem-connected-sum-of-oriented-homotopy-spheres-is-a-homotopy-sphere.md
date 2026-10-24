---
id: lem-connected-sum-of-oriented-homotopy-spheres-is-a-homotopy-sphere
kind: lemma
title: "Connected sum preserves oriented homotopy spheres"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-smooth-homotopy-sphere, thm-mayer-vietoris-sequence-in-singular-homology, thm-seifert-van-kampen, thm-whitehead-theorem, lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice, lem-relative-hurewicz-comparison-through-a-choice-free-weak-model, def-countable-choice, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, thm-cellular-approximation-for-maps-of-cw-pairs, lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes, thm-long-exact-sequence-of-relative-homotopy-groups]
justified_by: []
aliases: []
landmark: false
dependency_level: 5
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 505-506, the connected sum of homotopy spheres and its homotopy type"
    - title: "Allen Hatcher, Algebraic Topology, Cambridge University Press 2002 (complete book)"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 1.2, van Kampen; Section 2.2, Mayer-Vietoris; Theorem 4.5 in Section 4.1 and Corollary 4.33 in Section 4.2 (printed p. 367), homology recognition"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge3$, the oriented connected sum of two
oriented smooth homotopy $n$-spheres is again an oriented smooth homotopy
$n$-sphere.

## Facts & Assumptions

**Given:** Oriented smooth homotopy $n$-spheres $\Sigma_1,\Sigma_2$ with $n\ge3$, smoothly embedded oriented disks $D_i\subseteq\Sigma_i$, and the oriented connected sum $\Sigma_1\#\Sigma_2$.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] The punctured manifold $P_i=\Sigma_i\setminus\operatorname{int}D_i$ has boundary $S^{n-1}$. Excision and the pair sequence identify $H_k(\Sigma_i,P_i)$ with $H_k(D_i,\partial D_i)$; the oriented fundamental class maps to the relative disk generator. Van Kampen applies after enlarging the pieces by collars ([[def-smooth-homotopy-sphere]], [[thm-excision-for-singular-homology]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[thm-seifert-van-kampen]]).

[L2] Under $\mathrm{AC}_\omega$ compact smooth manifolds have finite CW homotopy models ([[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]]). For a homology equivalence $f:X\to Y$ between simply connected finite CW complexes, cellular approximation and its finite mapping cylinder give a simply connected finite pair $(M_f,X)$ with zero relative homology ([[thm-cellular-approximation-for-maps-of-cw-pairs]], [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]], [[thm-long-exact-sequence-of-a-pair-in-singular-homology]]). The pair is $1$-connected; if it is $(r-1)$-connected, the choice-free relative Hurewicz comparison makes $\pi_r(M_f,X)=H_r(M_f,X)=0$ ([[lem-relative-hurewicz-comparison-through-a-choice-free-weak-model]]). Induction and the relative homotopy sequence show that $f$ is weak, and finite Whitehead makes it a homotopy equivalence ([[thm-long-exact-sequence-of-relative-homotopy-groups]], [[thm-whitehead-theorem]]). This criterion uses no full choice.

[L3] Mayer-Vietoris computes the homology of a union of two subspaces from the homology of the pieces and their intersection ([[thm-mayer-vietoris-sequence-in-singular-homology]]), and van Kampen computes the fundamental group of a union with connected intersection ([[thm-seifert-van-kampen]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] the map $H_n(\Sigma_i)\to H_n(\Sigma_i,P_i)$ is an isomorphism, since it sends the fundamental generator to the local disk generator. Exactness gives $\widetilde H_*(P_i)=0$. Removing a disk leaves a path-connected manifold: paths entering the disk can be diverted along its connected boundary collar. Van Kampen for $P_i$ and the disk, thickened to an open cover, has simply connected overlap $S^{n-1}$ for $n\ge3$, and gives $\pi_1(P_i)=\pi_1(\Sigma_i)=0$. Thus [L2], applied on finite models to $P_i\to\{*\}$, makes $P_i$ contractible. [L1, L2, A1, given]

2.1 Use the fixed orientation-reversing linear reflection between the disk-coordinate boundary spheres to glue $P_1$ and $P_2$. This is the oriented connected sum; no arbitrary boundary diffeomorphism is substituted for that coordinate identification. Collar thickenings of the two pieces form an open cover whose overlap retracts to $S^{n-1}$. [step 1.1, given, construct]

3.1 Reduced Mayer–Vietoris for that cover gives $\widetilde H_k(\Sigma_1\#\Sigma_2)\cong\widetilde H_{k-1}(S^{n-1})$ for $k\ge1$, because both pieces are contractible. In degree zero the union is connected. Hence its integral homology is that of $S^n$. [step 1.1, step 2.1, L3]

3.2 Van Kampen for the same open cover, with simply connected pieces and overlap, gives $\pi_1(\Sigma_1\#\Sigma_2)=0$. [step 1.1, step 2.1, L3]

4.1 Choose an oriented coordinate disk $D$ in the connected sum $X$ and collapse $X\setminus\operatorname{int}D$ to a point. The target is $D/\partial D\cong S^n$; the map has degree one because it carries the local oriented disk generator to the sphere generator. By step 3.1 it is a homology equivalence. Transport it to the finite CW model of $X$ and use [L2] to obtain $X\simeq S^n$. [step 3.1, step 3.2, L1, L2, construct]

5.1 The oriented connected sum is therefore an oriented smooth homotopy $n$-sphere. [step 4.1] ∎
