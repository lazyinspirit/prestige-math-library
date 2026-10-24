---
id: lem-root-of-unity-finite-highest-weight-truncations
kind: lemma
title: Finite highest weight truncations from integral lowest-highest tensors
status: published
dependency_level: 8
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps: [def-root-of-unity-weyl-and-dual-weyl-module-families, lem-root-of-unity-integral-weyl-specialization, lem-integral-based-modules-have-saturated-weyl-filtrations, lem-root-of-unity-weyl-flags-summands-and-orthogonality, thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules, thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module, lem-divided-power-and-toral-quantum-binomial-reordering-identities, thm-triangular-decomposition-of-a-quantized-enveloping-algebra, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: George Lusztig, Introduction to Quantum Groups
      url: https://math.mit.edu/~gyuri/papers/quant.gr.pdf
      locator: Section 23.3.1–23.3.10, printed pages 189–191, PDF pages 198–200, integral lowest-highest cyclic presentation; Section 27.1.7–27.1.8, saturated highest filtrations. The finite projective truncation argument is supplied here.
---

## Statement

Assume the inherited Axiom of Choice. For every finite saturated subset $\Gamma\subset P^+$ (meaning $\lambda\in\Gamma$, $\mu\in P^+$ and $\mu\le\lambda$ imply $\mu\in\Gamma$), the full root module subcategory $\mathcal C_\Gamma$ with composition labels in $\Gamma$ is equivalent to the category of finite dimensional modules over a finite dimensional complex algebra. It has projective covers $P_\lambda$ and injective envelopes $I_\lambda$ and exact sequences
$$
0\longrightarrow K_\lambda\longrightarrow P_\lambda\longrightarrow\Delta_\zeta(\lambda)\longrightarrow0,\qquad 0\longrightarrow\nabla_\zeta(\lambda)\longrightarrow I_\lambda\longrightarrow C_\lambda\longrightarrow0,
$$
where $K_\lambda$ is Weyl-filtered by strictly greater labels and $C_\lambda$ is dual-Weyl-filtered by strictly greater labels. Moreover $(P_\lambda:\Delta_\zeta(\mu))=[\nabla_\zeta(\mu):L_\zeta(\lambda)]$. The assertion is about the actual root category, not a generic semisimple fibre.

## Facts & Assumptions

**Given:** The full root category and its actual Weyl families.

[F1] Integral highest lattices have the exact divided-power half presentation with all right singular powers and an adapted global basis ([[thm-global-basis-projection-from-the-negative-half-to-a-highest-weight-module]]). Exchanging the two halves gives the corresponding lowest presentation. The mixed divided-power reordering relations are integral ([[lem-divided-power-and-toral-quantum-binomial-reordering-identities]]), and generic triangular decomposition gives independence of ordered half monomials ([[thm-triangular-decomposition-of-a-quantized-enveloping-algebra]]).

[F2] Finite highest and lowest modules, and their finite tensor products, have actual integral based structures and saturated Weyl filtrations with free quotients ([[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]], [[lem-integral-based-modules-have-saturated-weyl-filtrations]]).

[F3] The root category is abelian and label-preserving, its Weyl modules are universal finite highest modules and classify simple heads ([[lem-root-of-unity-integral-weyl-specialization]]). Weyl flags are summand-closed, standard-costandard Hom spaces are $\delta_{\lambda\mu}\mathbb C$, and standard-costandard extensions split ([[lem-root-of-unity-weyl-flags-summands-and-orthogonality]]).

## Proof

**Given:** These data and $\Gamma$.

1.1 We first prove the integral cyclic presentation used below. For dominant $a,b$ put $\xi=b-a$ and let $C_A(\xi)$ be the universal cyclic $U_A$-module on a vector with full toral character $\xi$, without a highest or lowest annihilation requirement. Mixed reordering makes its ordered positive-negative half products span. Their independence follows by applying them to the tensor of a lowest Verma vector of label $-a$ and a highest Verma vector of label $b$: in the two Verma half lattices the leading action of an ordered positive-negative product is the corresponding pure tensor, with a Laurent unit as coefficient, and all other terms have smaller half degree. Induction on the sum of the two nonnegative root heights in this unit triangular transformation gives an integral isomorphism of $C_A(\xi)$ with this tensor of the two free Verma lattices. Thus no torsionfreeness-to-freeness or generic direct-sum inference enters. [F1, algebra]

2.1 Quotient the two Verma half lattices by their actual integrable highest or lowest kernels from [F1]. Under the map in step 1.1 the kernel from the highest factor is exactly $\sum_i\sum_{r>b(h_i)}U_AF_i^{(r)}v_\xi$, and the kernel from the lowest factor is exactly $\sum_i\sum_{r>a(h_i)}U_AE_i^{(r)}v_\xi$. To check these equalities, use the positive-negative ordered products for the first assertion and the negative-positive ordered products for the second: the rightmost divided power acts on the relevant highest or lowest generator, while the other extreme generator is killed by that color's opposite action. The leading term is the corresponding singular half vector and the correction terms have smaller half degrees; degree induction gives both inclusions. The half kernels are the sums of the specified divided-power ideals by [F1], so summing gives the whole tensor kernel. Consequently $\omega V_A(a)\otimes_A V_A(b)$ is the cyclic module on $v_\xi$ with exactly these two families of annihilation relations. Here $\omega$ interchanges positive and negative generators and negates weight labels. Both tensor factors are finite free, so specialization preserves this exact presentation by right exactness. This is the integral lowest-highest presentation, not a claim about an arbitrary integral lattice. [F1, step 1.1, algebra]

3.1 Put $\Pi=\bigcup_{\gamma\in\Gamma}\operatorname{Wt}\Delta_\zeta(\gamma)$, with formal label weights rather than torus eigenvalues. It is finite. A finite module has composition labels in $\Gamma$ exactly when all its weights lie in $\Pi$: one direction follows from character additivity, and conversely each simple factor's dominant highest label $\mu$ belongs to $\Pi$, hence is at most some $\gamma\in\Gamma$, so saturation puts $\mu$ in $\Gamma$. For a fixed $\xi\in\Pi$, choose $a,b\in P^+$ with $b-a=\xi$ and with every $a(h_i),b(h_i)$ larger than the maximum possible length of any $i$-string starting at any label in $\Pi$. Such $a$ exists by taking an integral multiple of $\rho$ sufficiently large, then setting $b=a+\xi$. Every vector of label $\xi$ in every $M\in\mathcal C_\Gamma$ satisfies the two annihilation families in step 2.1. Therefore that specialized lowest-highest tensor $T_\xi$ represents the weight-$\xi$ functor on this subcategory: the generator-to-vector correspondence gives $\operatorname{Hom}(T_\xi,M)=M_\xi$. [F3, step 2.1, construct, algebra]

4.1 Apply [F2] to the actual integral tensor underlying $T_\xi$. Construct its saturated based Weyl filtration by successively removing maximal highest labels. Because the complement of the lower ideal $\Gamma$ is upper closed, all sections outside $\Gamma$ can be removed first. Their sum is a based integral submodule $S_A$, with a free quotient having only Weyl sections in $\Gamma$. Specialize to obtain $S\subset T_\xi$ and $Q_\xi=T_\xi/S\in\mathcal C_\Gamma$, which is Weyl-filtered. Every homomorphism $S\to M$ for $M\in\mathcal C_\Gamma$ is zero: each Weyl section of $S$ has highest label outside $\Gamma$, absent from $M$, so Hom from that section is zero by its cyclic generator, and induction on the section filtration gives Hom from $S$ zero. Thus every map $T_\xi\to M$ factors uniquely through $Q_\xi$, and step 3.1 yields $\operatorname{Hom}(Q_\xi,M)=M_\xi$. Exactness of weight spaces now proves that $Q_\xi$ is projective in this actual root subcategory. [F2, F3, step 3.1, algebra]

5.1 The finite sum $Q=\bigoplus_{\xi\in\Pi}Q_\xi$ is a projective generator. Indeed the evaluation map from the finite sum $\bigoplus_\xi Q_\xi\otimes_\mathbb C M_\xi$ onto $M$ contains every label vector in its image and hence is surjective. Every Hom space is finite dimensional, so $B=\operatorname{End}(Q)^{\mathrm{op}}$ is finite dimensional. The functor $\operatorname{Hom}(Q,-)$ gives the usual module equivalence directly: finite presentations by sums of $Q$ exist because the evaluation is surjective and its finite kernel has another such evaluation; taking cokernels constructs an inverse from finite presentations by free $B$-modules, and projectivity makes the two constructions inverse on presentations and morphisms. Therefore projective covers exist, and [F3] and summand closure give each $P_\lambda$ a Weyl filtration. [F3, step 4.1, algebra]

6.1 For Weyl-filtered $X$, [F3] and induction along a flag show $(X:\Delta_\zeta(\mu))=\dim\operatorname{Hom}(X,\nabla_\zeta(\mu))$. For a projective cover $P_\lambda$, exactness of Hom and its value $\delta_{\lambda\nu}\mathbb C$ on simple modules give $\dim\operatorname{Hom}(P_\lambda,N)=[N:L_\zeta(\lambda)]$. Thus its Weyl multiplicities are the claimed reciprocity numbers. Since a dual Weyl module at $\mu$ has composition labels at most $\mu$, and diagonal multiplicity one, $P_\lambda$ has exactly one Weyl section of label $\lambda$, and every other section label is strictly greater. Split adjacent reversed sections to move the $\lambda$ section to the top of a flag: the extension with a greater-label Weyl quotient and smaller-label Weyl kernel splits by the highest-vector splitting argument of [F3]. The resulting flag gives $0\to K_\lambda\to P_\lambda\to\Delta_\zeta(\lambda)\to0$ with the required kernel. Ordinary exact duality, applied in $\mathcal C_{\Gamma^*}$ and relabelled by $\lambda^*=-w_0\lambda$, gives the injective sequence and its greater-label dual Weyl flag. This proves the full finite highest weight structure without importing a generic decomposition or an unproved root Kempf theorem. [F3, step 5.1, algebra] ∎
