---
id: "lem-cw-quotient-induces-relative-singular-homology-isomorphisms"
kind: "lemma"
title: "A CW quotient induces relative singular homology isomorphisms"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes","lem-cw-quotients-and-collapse-of-a-contractible-subcomplex","cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient","thm-long-exact-sequence-of-a-pair-in-singular-homology","thm-singular-chain-homotopy-formula","thm-quotient-universal-property","lem-interval-exponential-law-and-quotient-homotopies"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition2.22 and Proposition0.17 pp15–16;
        mapping-cylinder collar reduction supplied locally
      url: https://pi.math.cornell.edu/~hatcher/AT/AT.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

For a CW pair $(X,A)$ with $A\ne\varnothing$, every abelian group $G$ and every $i\ge0$, the ordinary quotient map induces an isomorphism
$$q_*:H_i(X,A;G)\longrightarrow H_i(X/A,\{*\};G),\qquad *=q(A).$$
These isomorphisms are natural in continuous maps of such pairs. No choice principle is required. The proof does not assume an open neighborhood of $A$ in $X$ already supplied with a retraction.

## Facts & Assumptions

[F1] [[lem-cellular-mapping-cylinders-and-relative-cylinders-are-cw-complexes]] constructs the ordinary cylinder of a cellular map, its endpoint subcomplexes, and its explicit height retraction.

[F2] [[lem-cw-quotients-and-collapse-of-a-contractible-subcomplex]] constructs the ordinary CW quotient. For a contraction of the collapsed subcomplex fixing a point, its inverse and inverse homotopies are based at that point and the quotient vertex.

[F3] [[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]] proves the quotient-induced comparison when the closed subspace is a deformation retract of an open neighborhood. Its proof first gives the isomorphism to homology relative to the quotient point, before identifying reduced homology.

[F4] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] supplies exact pair sequences. Their maps commute with maps of pairs because singular postcomposition commutes with boundary and quotient chains.

[F5] [[thm-singular-chain-homotopy-formula]] supplies the prism identity for every coefficient group. For a homotopy of pairs it descends to relative chain quotients, since each subspace prism stays in the subspace.

[F6] [[thm-quotient-universal-property]] and [[lem-interval-exponential-law-and-quotient-homotopies]] give ordinary quotient descent, including for homotopies.

## Proof

**Given:** The CW pair and coefficient group. Form the ordinary mapping cylinder $M$ of the cellular inclusion $A\hookrightarrow X$, attaching $(a,0)$ to $a\in X$. Denote its free end by $A_f=A\times\{1\}$ and its target retraction by $r:M\to X$.

1.1 By [F1], $M$ is CW, both endpoints are embedded subcomplexes, and $r$ is a strong deformation retraction onto $X$. The restriction $A_f\to A$ is the identity under the displayed parameterization. The set $V=A\times(1/2,1]\subset M$ is open: its inverse image in the attachment coproduct is the indicated open cylinder slice and the empty subset of $X$, so the quotient criterion applies. That slice is saturated and has no attaching identifications, hence has its product topology. The formula $(a,s,t)\mapsto(a,s+t(1-s))$ deformation retracts $V$ onto $A_f$ while fixing $A_f$. The latter is closed as a CW subcomplex. Thus $(M,A_f)$ satisfies precisely the good-pair hypothesis in [F3]. [F1, F3, F6, given]

2.1 The map $r:(M,A_f)\to(X,A)$ induces isomorphisms on absolute homology of both subspaces: on $A_f$ it is a homeomorphism, and on $M$ its inverse inclusion and height homotopy give inverse induced maps by [F5]. Hence it also induces isomorphisms on relative homology by the pair sequences [F4]. Explicitly for $i\ge1$, use the five terms $H_i(A_f),H_i(M),H_i(M,A_f),H_{i-1}(A_f),H_{i-1}(M)$ and their target row. For surjectivity, lift the boundary of a target relative class through the fourth isomorphism. Its image in the fifth term is zero, hence it lifts to a source relative class. The discrepancy in the target row comes from the second term, and its preimage there corrects that lift. For injectivity, a source kernel class has zero boundary by the fourth isomorphism and hence comes from the second term. Its image in the target second term comes from the first term. Lift that element through the first isomorphism and subtract its image; injectivity of the second isomorphism now makes the corrected element zero. The original relative class is zero by exactness. In degree zero, relative homology is the cokernel of $H_0(A_f)\to H_0(M)$, and the two isomorphisms induce an isomorphism of these cokernels. [F4, F5, step 1.1]

2.2 Let $Y=M/A_f$ and call its quotient vertex $v$. By [F2] it is CW. As an ordinary quotient it is $X\cup_A CA$, where the cone is the image of $A\times I$, with its top collapsed to $v$. This follows by the identical attachment relations and their quotient map-out tests. The cylinder over the subcomplex $A\subseteq X$ is a subcomplex of $M$, consisting of the two copies of the $A$ cells and their prisms. Its quotient is therefore a CW subcomplex $CA\subset Y$ by the quotient cell description [F2]. Its contraction $[a,s]\mapsto[a,s+t(1-s)]$ fixes $v$ and is continuous by [F6]. Thus collapse $p:Y\to Y/CA$ is a based homotopy equivalence at $v$ by [F2]. The quotient $Y/CA$ is canonically homeomorphic to $X/A$: a map out is exactly a continuous map on $X$ constant on $A$, since the whole cone is collapsed. Under this identification the equality of maps $q r=p q_M$ holds on both $X$ and every cylinder point, where $q_M:M\to Y$ is collapse of $A_f$. [F1, F2, F6, step 1.1]

3.1 By the good-pair comparison [F3] and step 1.1, $(q_M)_*:H_i(M,A_f;G)\to H_i(Y,\{v\};G)$ is an isomorphism. By step 2.2, $p$ and its based homotopy inverse have inverse homotopies preserving the respective points. Each such homotopy sends every prism over a subspace simplex into that point subspace, so [F5] descends to the relative quotients and makes $p_*:H_i(Y,\{v\};G)\to H_i(X/A,\{*\};G)$ an isomorphism, also for $i=0$. The commuting equation in step 2.2 gives $$q_*r_*=p_*(q_M)_*.$$ Since $r_*$ is an isomorphism by step 2.1, this proves that the original quotient-induced $q_*$ is an isomorphism. [F3, F5, step 1.1, step 2.1, step 2.2]

4.1 A continuous map of pairs $(X,A)\to(X',A')$ descends to the quotients by [F6], and the quotient square commutes on every point. Thus the induced singular chain maps, their relative quotients and their homology maps commute. This proves naturality for the actual $q_*$ just identified, without choosing compatible mapping-cylinder inverses. Empty $A$ is excluded; equal pairs give zero relative groups on both sides. The coefficient group may be zero. Degree zero was handled by cokernels and the degree-zero prism identity; no nonexistent negative homology group was required. The collar endpoints, cone apex and fixed-point homotopies were specified by formulas. Only choice-free CW constructions, one explicit cone contraction, and a finite diagram chase enter the proof. This proves every assertion without AC. [F2, F4, F5, F6, step 1.1, step 2.1, step 2.2, step 3.1] ∎
