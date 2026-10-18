---
id: thm-finite-weyl-canonical-basic-sets-from-lusztig-properties
kind: theorem
title: "Finite-Weyl canonical basic sets from Lusztig properties"
deps: [def-axiom-of-choice, def-finite-weyl-lusztig-basic-set-data, def-canonical-basic-set-for-hecke-specialization, def-essential-epimorphism-and-projective-cover, lem-lusztig-asymptotic-algebra-and-specialization-map, lem-schur-leading-coefficients-and-good-asymptotic-specializations, lem-complete-local-hecke-modular-systems-and-idempotent-lifting, lem-asymptotic-induction-identifies-leading-modular-simples, lem-filtered-projectives-prove-canonical-basic-set-reciprocity]
status: draft
dependency_level: 10
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
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume the Axiom of Choice. Let $W$ be a finite Weyl group with integral nonnegative weight function $L$, and impose exactly the generic splitting and Lusztig properties specified in [[def-finite-weyl-lusztig-basic-set-data]], namely P2–P8 and P15′. Let $H_A$ be its Hecke algebra over $A=\mathbb Z[v,v^{-1}]$. For every unital specialization $\theta:A\to k$ into a field, assume that $k$ has characteristic zero or that every leading Schur integer $f_E$ is nonzero in $k$. Write the generic Schur element as $c_E=f_Ev^{-2\alpha_E}$ plus terms of strictly higher $v$-degree.

Then $H_k$ is split and has a unique canonical basic set for the decomposition matrix $d_{E,M}$ furnished by the free asymptotic models in [[lem-filtered-projectives-prove-canonical-basic-set-reciprocity]]. Explicitly, there is an injection $M\mapsto E(M)$ from simple $H_k$-labels to generic labels, with
$$
d_{E(M),M}=1,\qquad \alpha_{E(M)}=\min\{\alpha_E:d_{E,M}>0\},
$$
and
$$
d_{E,M}>0\ \Longrightarrow\ E=E(M)\ \text{or}\ \alpha_E>\alpha_{E(M)}.
$$
Its image is the canonical basic set of [[def-canonical-basic-set-for-hecke-specialization]]. In normalized generators the parameters are $\theta(v)^{L(s)}$; in Geck's multiplicative generators they are $\theta(v^2)^{L(s)}$. No condition $\theta(c_E)\ne0$ is imposed: nonsemisimple specializations are included. The Lusztig properties here are hypotheses, not universal assertions for all unequal weights or all Coxeter groups.

## Facts & Assumptions

**Given:** The finite-Weyl data, the stated P2–P8 and P15′ hypotheses, the good specialization, and the Axiom of Choice.

[F1] The homomorphism is $\phi(D_x)=\sum_{\substack{z\in W,\ d\in\mathcal D\\a(d)=a(z)}}h_{x,d,z}n_dt_z$, with the sum over $z\in W$ and distinguished $d\in\mathcal D$. The layers $B_i$ are $(J,H)$-bimodules, and P4 gives $a(x)\le a(z)$ whenever $h_{x,d,z}\ne0$ ([[def-finite-weyl-lusztig-basic-set-data]], [[lem-lusztig-asymptotic-algebra-and-specialization-map]]).

[F2] The $J_k$-simple $V_E$ has support in degree $\alpha_E$, the lowest Schur exponent; $J_k$ is split under the nonvanishing of the leading integers $f_E$ ([[lem-schur-leading-coefficients-and-good-asymptotic-specializations]]).

[F3] The algebra $H_k$ is split. For each simple $M$, with $a_M=\max\{a(w):D_wM\ne0\}$, there is an injective assignment $M\mapsto E(M)$ with $\alpha_{E(M)}=a_M$ and $[*V_{E(M)}:M]=1$ ([[lem-asymptotic-induction-identifies-leading-modular-simples]]).

[F4] The completion/free-model construction is available for every $\theta$, including field extensions of its prime-generated residue field. It gives $d_{E,M}=[*V_E:M]$ and $\operatorname{mult}_{J_k}(V_E,B_ie)=\delta_{i,\alpha_E}d_{E,M}$ for a projective cover $H_ke$ of $M$ ([[lem-complete-local-hecke-modular-systems-and-idempotent-lifting]], [[lem-filtered-projectives-prove-canonical-basic-set-reciprocity]]).

[F5] The canonical basic-set axioms are multiplicity one, attainment of the least $\alpha$ in each column, and strict inequality for every other positive entry in that column ([[def-canonical-basic-set-for-hecke-specialization]]).

[F6] A projective cover is a projective surjection with superfluous kernel ([[def-essential-epimorphism-and-projective-cover]]).

## Proof

1.1 Suppose $d_{E,M}>0$. Choose $w$ with $a(w)=a_M$ and $D_wM\ne0$. Since $M$ is a composition factor of $*V_E$ by [F4], $D_w$ cannot act as zero on that whole module. Thus $\phi(D_w)$ acts nontrivially on $V_E$. In the formula of [F1], some surviving summand has $h_{w,d,z}\ne0$ and $t_zV_E\ne0$. The latter implies $a(z)=\alpha_E$ by [F2], while P4 gives $a_M=a(w)\le a(z)$. Hence every positive entry satisfies $a_M\le\alpha_E$. [F1, F2, F4, choose, algebra]

2.1 By [F3] and [F4], $d_{E(M),M}=1$ and $\alpha_{E(M)}=a_M$. Together with step 1.1 this proves that every column is nonzero and its least $\alpha$ is exactly $a_M$. The assignment $M\mapsto E(M)$ is already injective. It remains to prove uniqueness of a generic label at that minimum. [F3, F4, step 1.1, algebra]

2.2 Fix $M$ and a projective cover $P=H_ke$ as in [F4]. Put $b=\min\{i:B_ie\ne0\}$. The finite filtration starts with $I_0e=P$ and ends with zero, so this minimum exists, and the vanishing earlier layers implies $P=I_be$. The quotient $P^b=B_be=P/I_{b+1}e$ is nonzero. The kernel $K$ of the projective-cover map $P\to M$ is maximal, and superfluity makes it the unique maximal submodule: any proper submodule not contained in $K$ would sum with $K$ to $P$. Hence $I_{b+1}e\subseteq K$, so the cover map factors through a surjection $\bar\pi:P^b\to M$. Its kernel $\bar K=K/I_{b+1}e$ is superfluous in $P^b$, since any submodule whose sum with $\bar K$ is $P^b$ lifts to a submodule whose sum with $K$ is $P$. The kernel $\bar K$ is also maximal because the quotient is simple. Therefore it is the unique maximal submodule and $P^b$ has simple head $M$. This makes $P^b$ indecomposable: a direct sum of two nonzero finite-dimensional modules has at least two simple summands in its head, even if isomorphic. But $P^b$ is semisimple as a $J_k$-module and each $J_k$-summand is an $H_k$-submodule, since the action restricts through $\phi$. Consequently it is exactly one $V_{E_1}$, with multiplicity one. Reciprocity gives $\alpha_{E_1}=b$ and $d_{E_1,M}>0$. Step 1.1 yields $a_M\le b$. Conversely, [F3] and [F4] give $d_{E(M),M}=1$ and $\alpha_{E(M)}=a_M$, so reciprocity makes $B_{a_M}e$ nonzero and $b\le a_M$. Hence $b=a_M$. Reciprocity then puts $V_{E(M)}$ in the single $J_k$-simple summand of $B_be$, so $E_1=E(M)$ and $d_{E_1,M}=1$. [F1, F2, F3, F4, F6, step 1.1, choose, algebra]

3.1 If $d_{E,M}>0$ and $\alpha_E=a_M$, reciprocity puts $V_E$ in the nonzero layer $B_{\alpha_E}e$, so $\alpha_E\ge b$. Since $a_M\le b$ by step 2.2, equality holds throughout. The unique summand in $B_be$ is $V_{E_1}$, so $E=E_1$. This applies to $E(M)$ by step 2.1, giving $E_1=E(M)$. Thus a positive entry at the least $\alpha$ has precisely the label $E(M)$; every other positive entry has strictly larger $\alpha$. [F4, step 2.1, step 2.2, algebra]

4.1 The image of the injection in [F3] now satisfies all axioms in [F5], proving existence. Those axioms also make the generic label the unique minimum in each column, proving uniqueness of the set and bijection. The parameter identities follow from $S_s=v^{L(s)}T_s$, which changes $(T_s-v^{L(s)})(T_s+v^{-L(s)})=0$ into $(S_s-v^{2L(s)})(S_s+1)=0$; applying $\theta$ gives the claimed specializations. Only $f_E$ was inverted in [F2] and [F4], and step 1.1 used the explicitly assumed Lusztig properties. Hence the proof imposes neither full-Schur nonvanishing nor any unstated general Coxeter assertion. [F2, F3, F4, F5, step 1.1, step 3.1, algebra] ∎

## Source notes

This is Geck's Theorem 6.6 under its standing Section 5.2 hypotheses. Geck cites the asymptotic-algebra constructions, sketches the leading-Schur argument and splitting, and refers elsewhere for Proposition 6.7. The local supplier chain named above supplies these arguments; citations record provenance rather than replacing proof. In particular the reciprocity proof uses projected free modules over a complete local domain, so it does not assert that the right layer action is right multiplication by $\phi$.
