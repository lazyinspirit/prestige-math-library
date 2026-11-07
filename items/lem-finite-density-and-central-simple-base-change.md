---
id: lem-finite-density-and-central-simple-base-change
kind: lemma
title: Finite density and elementary central simple algebra foundations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
- def-division-ring
- thm-schurs-lemma-for-modules
- thm-polynomial-quotient-is-a-field-iff-irreducible
justified_by: []
proof_strategy: direct
axiom_use: None. Only finite-dimensional linear algebra, finite Galois sums and finitely bounded algebraic constructions are used; no arbitrary basis, closure, compactness or infinite dependent choice is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Class Field Theory, version 4.03; locally adapted intermediate lemma
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Chapter IV §§1–2, especially Theorem 1.17, Corollary 2.9 and Propositions 2.15–2.17; finite-density and finite-recursion proofs adapted here, not source headings.
verification: {}
---

## Statement

A central simple $K$-algebra means a nonzero finite-dimensional associative unital $K$-algebra with center $K$ and no proper nonzero two-sided ideals. Such an algebra $A$ is a matrix algebra $M_r(D)$ for a central division algebra $D/K$. The map
$$A\otimes_K A^{\mathrm{op}}\longrightarrow\operatorname{End}_K(A),\qquad a\otimes b\longmapsto(x\mapsto axb)$$
is an isomorphism. For every field extension $F/K$, $A_F=A\otimes_KF$ is central simple. Some finite extension $F/K$ splits $A$, meaning $A_F$ is a matrix algebra over $F$; separability of this extension is not asserted. In particular $\dim_KA$ is a square.

## Statement references

[[def-division-ring]]

[[thm-schurs-lemma-for-modules]]

[[thm-polynomial-quotient-is-a-field-iff-irreducible]]

## Facts & Assumptions

**Given:** The objects in the Statement.

[F1] Endomorphisms of a simple module form a division ring. [[thm-schurs-lemma-for-modules]]

[F2] Adjoining a root of an irreducible polynomial gives a field extension. [[thm-polynomial-quotient-is-a-field-iff-irreducible]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 We first prove finite density. Let $V$ be a simple left module for a ring $R$, put $\Delta=\operatorname{End}_R(V)^{\mathrm{op}}$, and give $V$ its right $\Delta$-action by evaluation. For right-$\Delta$-independent $v_1,\ldots,v_s$, the map $R\to V^s$, $a\mapsto(av_i)_i$, is onto. For $s=1$ this is simplicity. Inductively its image $W$ projects onto $V^{s-1}$. The kernel in the last coordinate is an $R$-submodule of $V$, hence is either $V$ or zero. In the former case the map is onto. In the latter $W$ is the graph of an $R$-linear map $V^{s-1}\to V$. Each component of that map is in $\operatorname{End}_R(V)$; evaluating the graph identity at $a=1$ expresses $v_s$ as a right-$\Delta$-linear combination of the previous vectors, a contradiction. [F1, given, induction]

2.1 Choose a nonzero left ideal $S$ of $A$ of minimum $K$-dimension. It is simple. The action $A\to\operatorname{End}_K(S)$ is faithful, since its kernel is a two-sided ideal not containing $1$. The central $K$-scalars lie in the commuting division ring $\Delta$, so every right-$\Delta$-independent tuple in $S$ is $K$-independent and has length at most $\dim_KS$. A tuple of maximum possible length is therefore a finite right-$\Delta$-basis. Apply step 1.1 to it: the action identifies $A$ with $\operatorname{End}_\Delta(S)$, a matrix algebra over a division ring. The center of that division ring is $K$, since the center of a matrix algebra is the scalar matrices over the center of its entries. [F1, step 1.1, choose, algebra]

2.2 Apply step 1.1 instead to the action of $A\otimes A^{\mathrm{op}}$ on $A$. Its submodules are the two-sided ideals, so $A$ is simple as such a module. An endomorphism commuting with left multiplication is right multiplication by its value at $1$; commuting also with right multiplication forces that value into $Z(A)=K$. Finite density therefore makes the displayed map onto $\operatorname{End}_K(A)$. Both spaces have dimension $(\dim_KA)^2$, so it is an isomorphism. [step 1.1, given, algebra]

3.1 Tensoring this identity with any field $F$ gives $A_F\otimes_F A_F^{\mathrm{op}}\cong\operatorname{End}_F(A_F)$. A two-sided ideal of $A_F$ is therefore stable under every $F$-linear endomorphism, and is zero or all of $A_F$. An element central in $A_F$ acts by an endomorphism commuting with every endomorphism of $A_F$; checking on matrix units says it is a scalar in $F$. Thus $A_F$ is central simple. [step 2.2, algebra]

3.2 To obtain finite splitting, write $A=M_r(D)$ by step 2.1. If $D\ne K$, choose $x\in D\setminus K$. The commutative finite-dimensional domain $K[x]$ is a field, so its minimal polynomial $p$ is irreducible of degree $s>1$. Adjoin a root $\alpha$ by [F2], writing $p(T)=(T-\alpha)Q(T)$. In $D\otimes_KK(\alpha)$ both $x-\alpha$ and $Q(x)$ are nonzero: the original power basis $1,x,\ldots,x^{s-1}$ remains linearly independent after tensoring with a field. Their product is zero. This argument includes inseparable $p$. [F2, step 2.1, choose, algebra]

4.1 By steps 2.1 and 3.1, this nonsplit division algebra after base change is $M_t(D')$ with $t\ge2$. Its division-factor dimension has fallen from $\dim_KD$ to $\dim_KD/t^2$. Repeat over the new base field. The strictly decreasing positive integer dimensions allow at most $\dim_KA$ repetitions, so this is a finitely bounded sequence of existential choices and gives a finite tower splitting $A$; no infinite dependent choice is used. If its final matrix size is $d$, dimension preservation gives $\dim_KA=d^2$. The case $A=K$, or an initially split algebra, needs no extension. [step 3.2, step 3.1, induction] ∎
