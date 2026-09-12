---
id: "lem-relative-hurewicz-comparison-through-a-choice-free-weak-model"
kind: "lemma"
title: "Relative Hurewicz comparison through a choice-free weak model"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-a-connected-cw-pair-has-a-model-without-low-relative-cells","lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy","lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice","lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity","def-hurewicz-homomorphism"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition4.21 pp356–357 and proof of
        Theorem4.32 pp366–374; local weak-model comparison makes choice
        accounting explicit
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Let $n\ge2$ and let $(X,A,a)$ be an $(n-1)$-connected CW pair, with $A$ nonempty and simply connected and with supplied characteristic maps. Without any choice principle,
$$H_i(X,A;\mathbb Z)=0\quad(0\le i<n),\qquad h:\pi_n(X,A,a)\xrightarrow{\cong}H_n(X,A;\mathbb Z).$$
Here $h$ is the actual relative Hurewicz homomorphism with the boundary-oriented disk convention. The weak model used in the proof need not have a chosen homotopy inverse.

## Facts & Assumptions

[F1] [[lem-a-connected-cw-pair-has-a-model-without-low-relative-cells]] supplies, without choice, a weak equivalence $Q:(Z,A)\to(X,A)$ equal to the identity on $A$, with no relative cells below $n$. Only its weak-model clause is used.

[F2] [[lem-weak-equivalences-of-pairs-induce-isomorphisms-on-relative-homotopy]] compares relative groups under weak maps of total spaces and subspaces, without choice. [[lem-weak-homotopy-equivalences-induce-integral-homology-isomorphisms-without-choice]] supplies the corresponding integral relative homology comparison.

[F3] [[lem-cell-attachment-below-the-first-nonzero-homotopy-degree-preserves-the-required-connectivity]] gives the choice-free calculations on a supplied no-low-cell model: lower homology vanishing, stability from its $(n+1)$-stage, and the identical incidence cokernel presentations commuting with Hurewicz when $A$ is simply connected. Precisely, steps 1.2–6.1 compute these on the already supplied $Z$; the AC-dependent replacement in its first row and its final transport are not used here. Its statement expressly confines AC to that replacement, not these cell calculations.

[F4] [[def-hurewicz-homomorphism]] gives the relative disk homomorphism, its naturality, and its boundary orientation convention.

## Proof

**Given:** The pair, basepoint, $n\ge2$, simple connectivity of $A$, and its CW data. No choice axiom is assumed.

1.1 Apply the first clause of [F1] to obtain $Q:(Z,A)\to(X,A)$ equal to the identity on $A$ and weak on total spaces, with only relative cells of dimensions at least $n$. This uses the actual all-extension-data construction, not a selection of representatives or its later homotopy-inverse clause. The restriction to $A$ is the identity, hence weak. Thus both hypotheses of each comparison in [F2] hold. They give isomorphisms $$Q_\pi:\pi_n(Z,A,a)\longrightarrow\pi_n(X,A,a),\qquad Q_H:H_i(Z,A)\longrightarrow H_i(X,A)$$ for every $i\ge0$ in homology. The relative basepoint remains literally $a$. [F1, F2, given]

2.1 Write $Z_k=A\cup\{\text{relative cells of dimension at most }k\}$. We now use only the calculations of [F3] on this supplied model. Its layer quotient is a wedge of $k$-spheres, so each layer's relative homology is zero except for the free group on its $k$-cells in degree $k$. The homology triple sequences and finite support of each test chain yield $H_i(Z,A)=0$ for $i<n$ and $H_n(Z_{n+1},A)\cong H_n(Z,A)$, exactly as in the homology computation of [F3]. Its high-cell connectivity and homotopy triple sequence give $\pi_n(Z_{n+1},A,a)\cong\pi_n(Z,A,a)$, as in its homotopy stability computation. None of these arguments asks for an equivalence of $Z$ with a second replacement space. [F3, step 1.1]

3.1 Let $F_n$ and $F_{n+1}$ be the free abelian groups on the relative cells in these two dimensions. Since $A$ is simply connected, the single-layer basis calculation in [F3] applies to $(Z_n,A)$, and $Z_n$ is simply connected, so it also applies to $(Z_{n+1},Z_n)$. The homotopy and homology triple boundary maps have the identical matrix $$D_{\alpha\beta}=\deg(p_\alpha q_n\varphi_\beta),$$ where $q_n:Z_n\to Z_n/A$, $p_\alpha$ is the sphere projection and $\varphi_\beta$ has its disk-boundary orientation. The two incidence computations in [F3] identifies these coefficients for each actual characteristic disk, including their sign; its final cokernel computation and the stability in step 2.1 identify both full degree-$n$ groups with $F_n/\operatorname{im}D$ and their actual Hurewicz map with the identity of that quotient. Consequently $h_Z$ is surjective because each finite cell vector represents a homotopy class with that homology image, and injective because a vector mapping to zero belongs to precisely the same relation subgroup on both sides. This includes $n=2$, where the surjection from the free abelian cell group proves abelianness of the full relative group. [F3, F4, step 2.1]

4.1 Naturality [F4] gives $h_XQ_\pi=Q_Hh_Z$. All three maps $Q_\pi,Q_H,h_Z$ on the right of $$h_X=Q_Hh_ZQ_\pi^{-1}$$ are isomorphisms by steps 1.1 and 3.1. This equality proves that the isomorphism on $(X,A)$ is its actual oriented-disk Hurewicz homomorphism. In particular a target homology class can be pulled back through $Q_H$, lifted through $h_Z$, and pushed through $Q_\pi$, proving surjectivity. If $h_Xu=0$, the displayed commuting square and injectivity of $Q_H$ and $h_Z$ show $Q_\pi^{-1}u=0$, proving injectivity. The homology comparisons in step 1.1 also transfer every lower vanishing in step 2.1. [F4, step 1.1, step 2.1, step 3.1]

5.1 No inverse map of spaces was chosen or asserted: $Q_\pi^{-1}$ and $Q_H^{-1}$ are inverses of bijections and hence unique functions. The model construction is choice-free by [F1]; its comparisons test only finite domains by [F2]; and [F3] explicitly makes its supplied-model computations choice-free. Thus this proof removes precisely the inverse-of-spaces use of AC. Empty relative cell sets give zero free groups, one cell gives the ordinary one-generator presentation, and zero vectors and zero incidence columns are retained. Equal pairs have zero relative groups; a point subspace is allowed. An empty $A$ has no specified $a$ and is excluded, while degrees zero and one occur only in the lower homology assertion, not as a relative Hurewicz isomorphism here. The first admissible degree and both isomorphism directions were checked in steps 3.1–4.1. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1] ∎
