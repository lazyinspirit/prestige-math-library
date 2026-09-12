---
id: "def-lefschetz-number-of-a-finite-cw-self-map"
kind: "definition"
title: "Lefschetz number of a finite CW self-map"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-trace-of-an-endomorphism","thm-cellular-homology-computes-singular-homology","cor-homotopic-maps-induce-the-same-map-on-singular-homology","thm-relative-homology-of-consecutive-cw-skeleta"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, §2.C, pp.179–180
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch2.pdf
provenance:
  statement: literature-derived
  proof: not-applicable
---

## Definition

Let $X$ be a finite CW complex and $f:X\to X$ a continuous map. Its **Lefschetz number** is
$$L(f)=\sum_{i\ge0}(-1)^i\operatorname{tr}\bigl(f_*:H_i(X;\mathbb Q)\to H_i(X;\mathbb Q)\bigr)\in\mathbb Q.$$
Trace means the basis-independent trace of [[def-trace-of-an-endomorphism]]. The induced maps are rational-linear because postcomposition on singular chains preserves the rational coefficients.

This sum is well-defined and finite. By [[thm-relative-homology-of-consecutive-cw-skeleta]], the cellular chain group in degree $i$ is one copy of $\mathbb Q$ for each $i$-cell. Since there are finitely many cells, these are finite-dimensional and zero above the largest cell dimension. Their cycle subspaces and boundary subspaces are finite-dimensional, and so are their quotients: in a vector space with a finite basis, successively choosing an independent vector in a subspace can take at most the ambient dimension steps, since elimination of coordinates bounds the length of any independent list by that number. A maximal such finite list spans the subspace. Extending a basis of the boundary subspace to one of the cycle subspace gives a finite spanning basis of their quotient. These are only finite choices. The comparison in [[thm-cellular-homology-computes-singular-homology]] therefore makes each $H_i(X;\mathbb Q)$ finite-dimensional and zero above that largest dimension, as required. This use is for the dimensions of the groups; $f$ need not be cellular.

Homotopic maps have the same induced homology endomorphisms by [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]], hence the same Lefschetz number. No extra choice principle is used in this definition or its well-definedness.

For empty $X$, all groups vanish and $L(f)=0$, the empty sum. For a point, only $H_0=\mathbb Q$ is nonzero and the only self-map has Lefschetz number $1$. For any finite discrete $X$, the matrix on the point basis of $H_0$ has diagonal entry $1$ exactly at a fixed point and $0$ otherwise, so $L(f)$ counts its fixed points. Zero-dimensional and zero vector-space traces therefore obey the same formula. Higher degenerate singular simplices are included in cellular comparison and do not create extra homology terms.
