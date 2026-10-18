---
id: cor-weighted-cell-quotients-and-finite-weyl-basic-set-labels
kind: corollary
title: "Weighted cell quotients and the leading finite-Weyl basic-set labels"
status: draft
dependency_level: 11
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
deps:
  - def-finite-weyl-lusztig-basic-set-data
  - def-unequal-parameter-cells-and-cell-quotients
  - thm-unequal-parameter-cell-quotients-are-modules
  - lem-lusztig-asymptotic-algebra-and-specialization-map
  - lem-complete-local-hecke-modular-systems-and-idempotent-lifting
  - lem-filtered-projectives-prove-canonical-basic-set-reciprocity
  - thm-finite-weyl-canonical-basic-sets-from-lusztig-properties
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Meinolf Geck, Modular Representations of Hecke Algebras, sections 4–6"
      url: "https://arxiv.org/pdf/math/0511548"
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised text, sections 18–21"
      url: "https://arxiv.org/pdf/math/0208154"
---

## Statement

Under the hypotheses of [[thm-finite-weyl-canonical-basic-sets-from-lusztig-properties]], the function $a$ is constant on every left, right and two-sided weighted cell. Each $a$-layer of the KL cell filtration has a finite filtration with cell quotients. For the dagger basis $D_w=C_w^\dagger$, these quotients are the dagger twists of the native cell modules of [[def-unequal-parameter-cells-and-cell-quotients]]: on the twist, $h$ acts as $h^\dagger$ on the original module.

Every generic simple $E$ occurs in a dagger-twisted left cell module with cell $a$-value $\alpha_E$, and every generic constituent of such a module has that same Schur exponent. For each specialized simple $M$, its canonical basic-set label $E(M)$ occurs in a dagger-twisted generic left cell module of $a$-value $a_M=\alpha_{E(M)}$, whose specialization contains $M$. In that specialization the contribution from $E(M)$ has multiplicity one per generic copy, and every other generic label contributing to $M$ has strictly larger Schur exponent; hence no other generic label of that same cell $a$-value contributes to $M$.

This is a general finite-Weyl cell/basic-set connection, including nonsemisimple fibers. It does not assert that every cell module is simple or that cells themselves are in bijection with special simples.

## Facts & Assumptions

**Given:** The specified finite-Weyl weight, exact Lusztig properties, generic splitting, good specialization, and Axiom of Choice of the cited theorem.

[F1] [[def-unequal-parameter-cells-and-cell-quotients]] and [[thm-unequal-parameter-cell-quotients-are-modules]] give the coefficient preorders, ideal closure and bases of the left/right/two-sided cell quotients.

[F2] [[def-finite-weyl-lusztig-basic-set-data]] and [[lem-lusztig-asymptotic-algebra-and-specialization-map]] give P4, $D=C^\dagger$, the same structure constants, the filtration $I_i$, and $B_i\cong J_A^i$ with left $H$ action via $\phi$ and split generic $\phi$.

[F3] [[lem-complete-local-hecke-modular-systems-and-idempotent-lifting]] and [[lem-filtered-projectives-prove-canonical-basic-set-reciprocity]] give the complete local ring, exact projected free layers, and $d_{E,M}=\dim_FqE_F$ for a lifted projective-cover idempotent $q$.

[F4] [[thm-finite-weyl-canonical-basic-sets-from-lusztig-properties]] gives the unique label $E(M)$, $d_{E(M),M}=1$ and strict Schur-exponent inequality for every other contributing label.

## Proof

1.1 If a coefficient transition leads from $y$ to $x$, P4 applied to its generator product gives $a(x)\ge a(y)$. This holds on both sides and along every finite preorder chain. Mutual comparison therefore makes $a$ constant on each cell of all three types. Dagger is an algebra involution and carries $C_xC_y=\sum_zh_{x,y,z}C_z$ to the identical formula in $D$; hence the coefficient preorders have the same labels. The map from the dagger quotient to the native quotient sending $[D_w]$ to $[C_w]$ intertwines the action of $h$ on the former with $h^\dagger$ on the latter. This proves the precise twist convention. [F1, F2, algebra]

2.1 Fix an integer $i$ and consider the finite set of left cells with value $i$. Their preorder descends to a partial order because mutual comparison is the cell equivalence. Repeatedly take a minimal remaining cell to obtain a total listing with every smaller cell earlier. This finite construction terminates as the number of remaining cells decreases by one. In $B_i$, the spans of initial unions in that listing are left submodules: an action term either has strictly larger $a$ and vanishes in the layer, or has the same $a$ and lies in a cell no later than the input cell. Their successive quotients have exactly one cell as basis and exactly its quotient multiplication law, by [F1]. The same argument on right or two-sided cells gives the corresponding filtrations with their sidedness. These modules and their successive layers are free in their displayed bases. [F1, F2, step 1.1, construct, algebra]

3.1 Over the fraction field $F$ of [F3], $H_F\cong J_F$ and the layer $B_{i,F}\cong J_F^i$ is its regular support ideal. Its generic simple constituents are exactly the $E_F$ of degree $\alpha_E=i$, each with positive multiplicity: in a matrix block $M_{d_E}(F)$ the left regular module consists of $d_E$ copies of its standard simple. Additivity along the finite cell filtration in step 2.1 shows that every such $E_F$ occurs in at least one dagger cell quotient and that every constituent of each of those quotients has degree $i$. The same statements hold over $\mathbb Q(v)$ because all the generic blocks are split and extension to $F$ preserves their multiplicities. [F2, F3, step 2.1, algebra]

4.1 For a fixed special simple $M$ work first over its prime-generated field $k_0$, as in [F3], and lift its projective-cover idempotent $e$ to $q$ over the complete local ring. If $X_R$ is any displayed free dagger cell module, then $qX_R$ is a direct summand of a finite free $R$-module, so it is finite projective and local-free. Its residue and generic ranks agree. Exactness of multiplication by $e$ along a composition series gives $[X_{k_0}:M]=\dim_{k_0}eX_{k_0}=\dim_FqX_F=\sum_E[X_F:E_F]d_{E,M}$, where the last equality follows from split generic decomposition and [F3]. The field-extension part of [F3] preserves this equality over $k$. No reduction-exactness assertion for arbitrary nonfree lattices is used. [F3, step 2.1, step 3.1, algebra]

5.1 Take $E=E(M)$ and $i=\alpha_E=a_M$. Step 3.1 supplies a dagger cell module $X$ of value $i$ with $[X_F:E_F]>0$. The sum of nonnegative integers in step 4.1 then has a positive contribution $[X_F:E_F]d_{E,M}=[X_F:E_F]$, so $M$ occurs in its specialization. By [F4], any other generic label contributing to $M$ must have exponent strictly larger than $i$. Step 3.1 says all constituents of this cell module have exponent $i$, so those other contributions vanish. Thus the selected label gives precisely the claimed leading contribution, without asserting that the cell module has only one generic constituent or one special factor. [F4, step 3.1, step 4.1, algebra] ∎
