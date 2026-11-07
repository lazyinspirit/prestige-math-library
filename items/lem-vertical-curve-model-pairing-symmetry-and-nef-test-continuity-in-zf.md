---
id: lem-vertical-curve-model-pairing-symmetry-and-nef-test-continuity-in-zf
kind: lemma
title: Vertical curve-model pairing symmetry and nef test continuity without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - lem-curve-model-chern-measures-and-refinement-invariance-in-zf
  - lem-projective-curve-degrees-and-projection-formula-in-zf
  - lem-degree-specialization-in-projective-flat-curve-models-in-zf
  - lem-finite-type-normal-domain-codimension-one-test-in-zf
  - thm-sections-basic-open-affine-scheme
  - thm-reals-cauchy-complete
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; all schemes and complexes have finite projective presentations and finite affine covers, and each metric sequence is supplied.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Alexander Carney, The Arithmetic Hodge Index Theorem and Rigidity of Dynamical Systems over Function Fields
      url: https://arxiv.org/pdf/1810.06342v2
      locator: Sections 2.1–2.4 local metric-pairing conventions; finite curve-model proof supplied below, not imported.
---

## Statement

Work in ZF. Let $k$ be algebraically closed, $K=k(B)$ for a smooth projective integral $k$-curve, and $Y/K$ a normal integral projective curve. Fix a normal integral projective flat model $\mathcal Y/B$ and a closed point $v$. For vertical Cartier divisors $D=\sum_Va_VV$ and $E=\sum_Vc_VV$ supported at $v$, set
$$[D,E]_v=\sum_Va_V\deg_V O(E),\qquad \phi_D=-\log\|1_D\|_v.$$
Then $[D,E]_v=[E,D]_v$, and
$$\int\phi_D\,c_1(O(E))=[D,E]_v=\int\phi_E\,c_1(O(D)).$$
These quantities are invariant under normal projective refinements. The model functions $\phi_D$ are bounded, without requiring a compactness theorem for the analytic space.

For any two nef model metrics $\bar L,\bar L'$ on the same generic line bundle $L$, and any fixed vertical model function $\phi_E$ on any normal model of $Y$, write $\epsilon=\|\log(\|\cdot\|_{\bar L'}/\|\cdot\|_{\bar L})\|_\infty$. There is the actual test estimate
$$\left|\int\phi_E\bigl(c_1(\bar L)-c_1(\bar L')\bigr)\right|\le\epsilon\,\|c_1(O(E))\|_{\mathrm{TV}},$$
where the finite total variation on the right depends only on the fixed model metric of $O(E)$, not the two varying models. In particular, for a supplied uniformly Cauchy sequence of nef model metrics on $L$, integration against its positive Chern measures converges on the real span of the vertical model functions, independently of the chosen approximating sequence for a fixed uniform metric limit. The limit is a positive linear functional of norm at most $\deg_Y L$ on that span and extends uniquely to its uniform closure. This does not assert that this closure is all continuous functions or that a limiting Radon measure has been constructed.

## Facts & Assumptions

**Given:** The function-field curve, normal model and fixed place; the specified Cartier divisors or nef model metrics; and a metric sequence where a sequence assertion is made.

[F1] Curve-model Chern measures exist as finite signed atomic Radon measures, have generic-degree mass, are positive for vertical-nef models, are additive and independent of the model of a fixed metric, and pair with a vertical model function by its multiplicity-weighted curve degrees. Normal common refinements exist. [[lem-curve-model-chern-measures-and-refinement-invariance-in-zf]]

[F2] Projective integral curve degrees are tensor additive, equal their Euler-characteristic differences and satisfy the projection formula, including singular curves. Their coherent line-bundle cohomology is computed by finite affine Cech complexes. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F3] In an integral flat projective curve model over a DVR with infinite residue field, generic degree is the multiplicity-weighted sum of the special component degrees. [[lem-degree-specialization-in-projective-flat-curve-models-in-zf]]

[F4] On the normal finite-type charts and their localizations, a Cartier divisor is effective exactly when its height-one orders are nonnegative. [[lem-finite-type-normal-domain-codimension-one-test-in-zf]]

[F5] Sections on an affine principal open are the localization of its affine section ring. [[thm-sections-basic-open-affine-scheme]]

[F6] The real numbers are a complete totally ordered field, without any form of the Axiom of Choice. [[thm-reals-cauchy-complete]]

## Proof

1.1 We first give the finite Euler calculation needed below. If $Z$ is a projective $k$-scheme with support of dimension at most one and $G$ is coherent, it has finite Euler characteristic, and for every invertible $M$ on $Z$,
$$\chi(G\otimes M)-\chi(G)=\sum_V\operatorname{length}_{O_{Z,\eta_V}}G_{\eta_V}\,\deg_V(M|_V).$$
Indeed, at a component's generic point take a one-dimensional residue-field submodule of the socle of $G_{\eta_V}$. The socle exists by the last nonzero power of the nilpotent maximal ideal on that finite-length module. Finite presentation denominators extend this map to a section of $\operatorname{Hom}(O_V,G)$ on a neighbourhood. Clearing the finite chart denominators with [F5], and multiplying by homogeneous coordinates to a common twist, gives a global map $O_V(-m)\to G$ nonzero at that generic point. It is injective because a line bundle on integral $V$ has no nonzero generic-zero subsheaf. Its quotient reduces that component's generic length by one. Finite repetition leaves a finite-support sheaf. Each curve term has finite cohomology by [F2], and finite-support terms have finite-dimensional degree-zero cohomology and zero higher cohomology. These assertions, and the exact-sequence Euler identities, use a finite standard affine Cech cover: affine localization cocycles contract after clearing finitely many denominators and writing $1=\sum a_if_i^N$. Finite double-Cech complexes compare such covers. Thus no resolution or arbitrary covering choice is used. For a curve term the displayed difference equals $\deg_V M$ by [F2]; for a finite-support term it is zero, since twisting preserves local lengths. Additivity proves the formula. [F2, F5, given, construct, algebra]

2.1 Suppose first that $D,E$ are effective. Their closed Cartier subschemes are projective $k$-schemes supported on the fibre, hence have support of dimension at most one by [F1]. At $\eta_V$, the length of $O_D$ is $a_V$, by its DVR equation. Step 1.1 therefore gives
$$[D,E]_v=\chi(O_D)-\chi(O_D(-E)),\qquad [E,D]_v=\chi(O_E)-\chi(O_E(-D)).$$
These two integers are equal. To verify this without a determinant functor, tensor the two explicit complexes $[O(-D)\to O]$ and $[O(-E)\to O]$, placed in degrees $-1,0$. On any affine chart each is a length-one free resolution of its Cartier quotient. Because the terms of the other complex are free, the tensor double complex reduces, with exact kernel complexes, both to $[O_D(-E)\to O_D]$ and to $[O_E(-D)\to O_E]$. Interchanging the two factors changes only the sign on degree $-2$, so gives an isomorphism of the original total complexes. Take finite affine Cech complexes on the same standard projective cover. Localization is exact; the reductions remain quasi-isomorphisms by the finite row filtration. On either reduced complex its coherent terms have finite-dimensional cohomology by step 1.1. The finite filtration of this bounded double complex then says that the alternating dimension of its cohomology is the difference of these two Euler characteristics. Thus the two displayed integers are the Euler characteristic of the identical explicit complex and coincide. No cohomology-finiteness assertion for a surface line bundle, injective resolution or generic perfect-complex determinant is being used. [F1, step 1.1, construct, algebra]

3.1 Write $F_v$ for the whole scheme-theoretic fibre, a Cartier divisor pulled back from $v$. Its coefficient at $V$ is $b_V>0$. For any vertical Cartier $D$, choose a finite integer $N$ with $a_V+Nb_V\ge0$ at each of its finitely many components. By [F4], $D+NF_v$ is effective. Every restriction $O(F_v)|_V$ is trivial: it is pulled back from the one-dimensional fibre of $O_B(v)$ at the point $v$. Hence $[D,F_v]_v=0$. Conversely, [F3] for $O(D)$ gives $[F_v,D]_v=\deg_Y O(D)=0$, because $D$ is vertical. Bilinearity follows from the finite sums and the curve-degree tensor additivity used in step 1.1. We may therefore add a sufficiently large multiple of $F_v$ to each of $D,E$ without changing their pairing. Step 2.1 proves symmetry for these effective representatives and consequently for the original arbitrary divisors. The same argument applied to both $D+NF_v$ and $-D+NF_v$ proves $|\phi_D|\le N$: an effective model divisor has nonnegative potential at any analytic point, since its local equation is in the model valuation ring at that point's centre, while $\phi_{F_v}=1$ under $|t_v|=e^{-1}$. These centres and model norms are constructed by finite projective coordinates in [F1]. Thus boundedness needs no topological compactness principle. [F1, F3, F4, step 1.1, step 2.1, algebra]

4.1 The model-measure integration formula in [F1] gives $\int\phi_Dc_1(O(E))=[D,E]_v$. Step 3.1 gives its symmetric expression. Pullback preserves both the metric potentials and the atomic Chern measures by [F1], so these integrals and pairings are invariant under projective normal refinements. In particular a model divisor $E$ on a fixed model may be pulled to a common normal refinement with any finite family of other models without changing the measure $c_1(O(E))$ or its finite total variation on the analytic curve. [F1, step 3.1, algebra]

5.1 On a common normal refinement let $D$ be the Cartier divisor of the generic section $1$ of the quotient model bundle $\mathcal L\otimes(\mathcal L')^{-1}$. Its divisor is vertical and has finite support over $B$. Its part at $v$ is itself Cartier: use the original Cartier equation near this fibre and the trivial divisor away from its support, gluing on the complement of the finitely many other supporting fibres. Its model potential is the logarithmic ratio in the Statement, so $\|\phi_D\|_\infty=\epsilon$. Additivity in [F1] gives $c_1(\bar L)-c_1(\bar L')=c_1(O(D))$. Step 4.1 therefore gives
$$\left|\int\phi_E(c_1(\bar L)-c_1(\bar L'))\right|=\left|\int\phi_Dc_1(O(E))\right|\le\epsilon\sum_{\xi}|c_1(O(E))(\{\xi\})|.$$
The final sum is its actual finite total variation, combining any coincident atoms before taking absolute values. It is unchanged by refinement by step 4.1. The estimate uses no positivity hypothesis on $D$ or $E$; nefness of the varying metrics will give positivity of the limit functional. [F1, step 4.1, algebra]

6.1 For a supplied uniformly Cauchy sequence $\bar L_j$ and each fixed $\phi_E$, step 5.1 makes the real sequence $\int\phi_Ec_1(\bar L_j)$ Cauchy. Completeness [F6] gives a unique real limit. Finite real linear combinations give a linear functional $\Lambda$ on the real span $\mathcal M$ of these model functions; if a combination is the zero function, all its integrals vanish, so its limit is also zero and the definition is unambiguous. Each measure is positive by [F1] and has the fixed mass $d=\deg_Y L\ge0$. Therefore $|\Lambda(f)|\le d\|f\|_\infty$ and $\Lambda(f)\ge0$ whenever $f\ge0$ in $\mathcal M$. If two supplied sequences have the same uniform metric limit, their mutual supremum distance tends to zero; applying step 5.1 between their terms gives the same limit for every fixed model function and hence for every $f\in\mathcal M$. Constants belong to $\mathcal M$ because $\phi_{F_v}=1$. In particular $\Lambda(1)=d$, including $d=0$, where the functional is zero. [F1, F6, step 3.1, step 5.1, algebra]

7.1 Let $\overline{\mathcal M}$ be the uniform closure of $\mathcal M$ in the bounded real functions. For $f\in\overline{\mathcal M}$, the inequalities $|a-\Lambda(g)|\le d\|f-g\|_\infty$ for all $g\in\mathcal M$ specify a unique real $a$: approximate $f$ arbitrarily closely by such a $g$, and use the bound in step 6.1 to see that the resulting interval constraints have a common point and diameters tending to zero. Equivalently take the supremum of $\Lambda(g)-d\|f-g\|_\infty$ over $g\in\mathcal M$; these lower bounds are bounded above by every corresponding upper bound. Approximation makes their gap zero. This direct real-cut construction requires no sequence of arbitrarily chosen approximants. It gives the unique continuous extension with the same bound. Positivity follows by approximating a nonnegative $f$ within $\delta$ and adding the constant $\delta$ to the approximant, which is then nonnegative; step 6.1 and $\delta\to0$ give $\Lambda(f)\ge0$. This completes the test-functional assertion. Neither density in all continuous functions nor Radon representation of this functional has been used or proved. [F6, step 6.1, construct, algebra] ∎
