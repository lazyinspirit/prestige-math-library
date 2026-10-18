---
id: lem-filtered-projectives-prove-canonical-basic-set-reciprocity
kind: lemma
title: "Filtered projectives prove canonical basic-set reciprocity"
deps: [def-axiom-of-choice, def-finite-weyl-lusztig-basic-set-data, lem-lusztig-asymptotic-algebra-and-specialization-map, lem-schur-leading-coefficients-and-good-asymptotic-specializations, lem-complete-local-hecke-modular-systems-and-idempotent-lifting, lem-asymptotic-induction-identifies-leading-modular-simples, thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]
status: draft
dependency_level: 9
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras"
      url: "https://arxiv.org/abs/math/0511548"
      locator: "Sections 5–6; local completion, splitting and reciprocity arguments supplied here."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice and the finite-Weyl data and Lusztig properties of [[def-finite-weyl-lusztig-basic-set-data]]. Let $\theta:A\to k$ have characteristic zero or $\theta(f_E)\ne0$ for every generic simple label $E$. Put $k_0=\operatorname{Frac}(\theta(A))\subseteq k$, let $R=\widehat{A_{\ker\theta}}$, and let $F=\operatorname{Frac}R$. Take the explicit global free model $L_{E,A}=A\otimes_{\mathbb Z}\Lambda_E$ of the Schur supplier, whose Hecke matrices are integral because the $J$-matrices and $\phi_A$ are integral. Let $L_E=R\otimes_A L_{E,A}$. This is the standard free module of the $E$-matrix block of $J_R$, restricted through $\phi_R$; its freeness is by this construction, not an inference from torsion-freeness over $R$. Its fraction fibre is the generic simple $E_F$; its residue is the restricted asymptotic simple $*V_E$. Define
$$
d_{E,M}=[k\otimes_{k_0}(L_E/\mathfrak m_RL_E):M]
$$
for simple $H_k$-modules $M$. These multiplicities agree with those of any other free stable $R$-models of the same generic simples. They are unchanged by extension from $k_0$ to $k$, using the simple-label bijection.

For a simple $H_k$-module $M$, choose an idempotent $e\in H_k$ such that $H_ke$ is its projective cover. Regarding the layers $B_i=I_i/I_{i+1}$ as left $J_k$-modules and right $H_k$-modules, one has
$$
\operatorname{mult}_{J_k}(V_E,B_ie)=\begin{cases}d_{E,M},&i=\alpha_E,\\0,&i\ne\alpha_E.\end{cases}
$$
Moreover $d_{E,M}=[*V_E:M]$. No identification of the right action on $B_i$ with right multiplication by $\phi_k$ is assumed.

## Facts & Assumptions

**Given:** The stated finite-Weyl data, exact Lusztig properties, good specialization, and the Axiom of Choice.

[F1] The layers $B_i$ are finite free before specialization, are $(J,H)$-bimodules with left $H$ action through $\phi$, and have $J$-support only in degree $i$. The generic $\phi$ is an isomorphism ([[lem-lusztig-asymptotic-algebra-and-specialization-map]]).

[F2] Inverting the integers $f_E$ gives integral full matrix blocks for $J$, whose standard modules correspond through generic $\phi$ to the generic Hecke simples and whose degrees are $\alpha_E$ ([[lem-schur-leading-coefficients-and-good-asymptotic-specializations]]).

[F3] $R$ is a complete local domain with residue $k_0$, fraction field containing $\mathbb Q(v)$, integral idempotent lifting, finite-projective freeness, and exact projected-layer base change. Multiplicities for an integral split matrix algebra are preserved between the fraction and residue fibres ([[lem-complete-local-hecke-modular-systems-and-idempotent-lifting]]).

[F4] Every good specialization of $H$ is split, and every simple $M$ has endomorphism algebra its ground field ([[lem-asymptotic-induction-identifies-leading-modular-simples]]).

[F5] Every finite-dimensional module over a finite-dimensional algebra has a projective cover, whose kernel is superfluous ([[thm-projective-covers-exist-and-are-unique-for-finite-dimensional-algebras]]).

## Proof

1.1 First work over $k_0$ and write $H_0=H_{k_0}$. By [F4] it is split. For a simple $M$, take a projective cover $\pi:P\to M$ with superfluous kernel $K$ by [F5]. A nonzero vector of $M$ gives a surjection $H_0\to M$. Projectivity of the free module $H_0$ lifts it to $s:H_0\to P$; the image of $s$ together with $K$ is $P$, so superfluity makes $s$ surjective. Projectivity of $P$ splits $s$, realizing $P$ as a direct summand of $H_0$. Its projection is right multiplication by an idempotent $e$, since a left-linear endomorphism of $H_0$ is determined by its value at1. Hence $P\cong H_0e$. Every maximal submodule of $P$ contains $K$: otherwise its sum with $K$ is $P$, contradicting superfluity. Since $K$ itself is maximal, it is the unique maximal submodule, and the head of $P$ is the single copy $M$. [F4, F5, choose, algebra]

1.2 We justify extension to $k$ without assuming an unproved radical base-change rule. For any finite-dimensional split algebra $T$ over $k_0$, choose representatives $S_1,\ldots,S_r$ of its simple modules; there are finitely many because every simple is a quotient of the regular module and thus a factor of a composition series of $T$. The ideal $N=\bigcap_j\operatorname{Ann}_T(S_j)$ is nilpotent: it annihilates each factor of such a series, so its successive powers lower the series and $N^{\dim T}=0$. The action map $T\to\bigoplus_j\operatorname{End}_{k_0}(S_j)$ is surjective. Indeed choose bases in the $S_j$ and consider the image of $T$ in the direct sum of the corresponding tuples. If this image were proper, semisimplicity of the direct sum of simples would give a nonzero map to some $S_j$ killing the image. Maps between distinct simple modules are zero, and $\operatorname{End}_T(S_j)=k_0$, so this would yield a nontrivial scalar relation among the selected basis vectors of $S_j$ by evaluation at1. This is impossible. Thus $T/N$ is the displayed product of full matrix algebras. Under extension to $k$, the ideal $k\otimes N$ stays nilpotent, hence annihilates every simple: if it acted surjectively on a simple, nilpotence would contradict its nonzeroness. The quotient is still a product of full matrix algebras. It follows that all simples are exactly the extensions of the $S_j$, and extending a composition series preserves its simple factors and multiplicities. For completeness, a finite direct sum of simple modules is semisimple by induction: split a submodule's intersection with the previous summands, quotient that intersection, and project to the final simple summand. The projection is zero or onto; in the latter case its remaining submodule is the graph of a homomorphism from that simple into the complementary previous summands, and that graph has those previous summands as a complement. This justifies the semisimplicity used in the simultaneous action-map argument. [F4, algebra]

2.1 For a simple $M'$, every nonzero map $P\to M'$ has that unique maximal kernel $K$, so $\operatorname{Hom}_{H_0}(P,M')$ is $k_0$ when $M'=M$ and zero otherwise, using [F4]. The evaluation map $\operatorname{Hom}_{H_0}(H_0e,X)\to eX$, $f\mapsto f(e)$, is an isomorphism, with inverse $x\mapsto(he\mapsto hx)$. Thus $\dim eM'=1$ for $M'=M$ and zero otherwise. Multiplication by $e$ is exact, so applying it along any composition series of a finite-dimensional module $X$ yields $[X:M]=\dim_{k_0}eX$. [F4, step 1.1, algebra]

3.1 By [F3] lift $e$ to an idempotent $q\in H_R$. The model $L_E$ is free by the explicit integral construction in [F2]. If $L$ is any other explicitly $R$-free stable model of $E_F$, then $qL$ is a direct summand of $L$, hence free with equal generic and residue ranks. Therefore $[L/\mathfrak m_RL:M]=\dim e(L/\mathfrak m_RL)=\dim_F qE_F$. The last expression is independent of $L$. In particular it applies to the free $J_R$-standard model $L_E$ from [F2], proving $d_{E,M}=[*V_E:M]$ over $k_0$ and agreement with every other free model. If a chosen model was initially free over $A_{\ker\theta}$, extension to $R$ is a free model of this same generic representation and its residue is the original specialized module, so the same equality applies. The explicit global model in [F2] itself gives a free $A_{\ker\theta}$-model. No assertion about arbitrary nonfree torsion-free lattices, or exactness of their reduction, is made. [F2, F3, step 2.1, algebra]

4.1 Filter $H_Rq$ by $I_iq$. Exact projection gives its layer $B_{i,R}q$, which is finite free over $R$ and is a left $J_R$-module because right $H_R$ commutes with left $J_R$. By [F2] and [F3] its $E$-multiplicity is the same in the generic and residue fibres. In the generic fibre, [F1] identifies its $J_F$-simples with the Hecke simples $E_F$, and only layer $i=\alpha_E$ can contain $E_F$. Additivity of composition multiplicities along the finite filtration therefore says that its multiplicity in that layer is its multiplicity in $H_Fq$. On the matrix block $\operatorname{End}_F(E_F)$, right multiplication by $q$ has image consisting of matrices with $\operatorname{rank}(q|E_F)$ independent columns after a basis change; as a left module this is exactly that many copies of $E_F$. Consequently the multiplicity is $\dim_F qE_F=d_{E,M}$ by step 3.1. Reduction gives the asserted reciprocity over $k_0$, with zero multiplicity in all other degrees. [F1, F2, F3, step 3.1, algebra]

5.1 Apply step 1.2 to $T=H_0$ and to the split algebra $J_{k_0}$. Their simple labels, the reductions defining $d$, and the decompositions of the layers all extend with unchanged multiplicities. For $P=H_0e$, the quotient $P/NP$ is semisimple and has the same simple head $M$, so it equals $M$ and the cover kernel is $NP$. After extension, the kernel is $(k\otimes N)(k\otimes P)$ and the quotient is the extended simple $M$. If a submodule together with this kernel generates $k\otimes P$, iteration of the nilpotent ideal $k\otimes N$ makes that submodule the whole module. Thus the extended idempotent again gives a projective cover with simple head $M$. Thus reciprocity from step 4.1 holds over $k$ for these idempotents. Any other projective cover of $M$ is isomorphic to it by [F5]; an isomorphism $H_ke\cong H_ke'$ is represented by mutually inverse corner elements, so right multiplication by those elements identifies $B_ie$ and $B_ie'$ as $J_k$-modules. The formula therefore holds for every idempotent allowed in the statement, completing the proof. [F1, F5, step 4.1, step 1.2, algebra] ∎
