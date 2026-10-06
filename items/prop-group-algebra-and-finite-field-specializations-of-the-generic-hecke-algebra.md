---
id: prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra
kind: proposition
title: "Group algebra and finite-field specializations of the generic Hecke algebra"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-generic-type-a-hecke-algebra
  - thm-standard-basis-of-the-generic-type-a-hecke-algebra
  - thm-type-a-iwahori-hecke-presentation
  - thm-the-symmetric-group-has-the-coxeter-presentation
  - cor-dimension-of-a-finite-group-algebra
  - thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order
  - lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra
  - thm-right-exactness-of-tensor-products
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.2 ($H_{\\mathbb C,z}(n)$ and $H_{\\mathbb C,1}(n)\\cong\\mathbb C S_n$), PDF pp. 4-5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Proposition 5.16 (specializations at $u_s=1$ and $u_s=q_s$), printed p. 45"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Sections 11.1-11.2 (the specialization $q\\mapsto1$ is the group algebra), printed pp. 46-47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $H_v(n)$ be the generic type-A Hecke algebra over
$A=\mathbb Z[v^{\pm1}]$ and let $q$ be a prime power. (1) The specialization
$v\mapsto1$ is an isomorphism of $\mathbb C$-algebras
$$\mathbb C\otimes_{A,\,v\mapsto1}H_v(n)\;\cong\;\mathbb C[S_n],$$
carrying $T_w$ to $w$; (2) the specialization $v\mapsto q$ is an isomorphism of
$\mathbb C$-algebras
$$\mathbb C\otimes_{A,\,v\mapsto q}H_v(n)\;\cong\;H=e_B\mathbb C[G]e_B,\qquad G=\operatorname{GL}_n(\mathbb F_q),$$
carrying the generic generator $T_i$ to the standard basis element $T_{s_i}$;
(3) both specializations are semisimple $\mathbb C$-algebras, and the
isomorphisms are compatible with the standard bases ($\{T_w\}$ in each case).
No choice principle is used.

## Facts & Assumptions

**Given:** The generic type-A Hecke algebra $H_v(n)$ over
$A=\mathbb Z[v^{\pm1}]$ with generators $T_i$, the symmetric group $S_n$ with
simple transpositions $s_i$, the finite Hecke algebra
$H=e_B\mathbb C[G]e_B$ of $G=\operatorname{GL}_n(\mathbb F_q)$, and the
specializations $v\mapsto1$ and $v\mapsto q$.

[F1] $H_v(n)$ is the quotient of the free unital associative $A$-algebra on
$T_1,\dots,T_{n-1}$ by the relations $T_i^2=(v-1)T_i+v$, the braid relations and
the distant commutations; for every unit $v_0\in R^\times$ the specialization
$R\otimes_AH_v(n)$ is presented over $R$ by the same relations with $v$
replaced by $v_0$. It is free over $A$ with basis the products $T_w$ along
reduced words, so its rank is $n!$
([[def-generic-type-a-hecke-algebra]],
[[thm-standard-basis-of-the-generic-type-a-hecke-algebra]]).

[F2] The specialization of $H_v(n)$ at $v\mapsto q$ is isomorphic to $H$; the
isomorphism carries the generator $T_i$ to the standard basis element
$T_{s_i}=q\,e_B\dot s_ie_B$ and the generic basis element $T_w$ to the standard
basis element $T_w$ of $H$
([[thm-type-a-iwahori-hecke-presentation]]).

[F3] $S_n=\langle s_1,\dots,s_{n-1}\mid s_i^2=1,\ s_is_{i+1}s_i=s_{i+1}s_is_{i+1},\ s_is_j=s_js_i\ (|i-j|>1)\rangle$;
for $n=0,1$ the trivial group has the empty presentation
([[thm-the-symmetric-group-has-the-coxeter-presentation]]).

[F4] The group algebra of a finite group has dimension equal to the group order,
so $\dim_{\mathbb C}\mathbb C[S_n]=n!$
([[cor-dimension-of-a-finite-group-algebra]]).

[F5] $\mathbb C[S_n]$ is semisimple, because $\operatorname{char}\mathbb C=0$
does not divide $|S_n|=n!$
([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]]).

[F6] $H$ is a semisimple finite-dimensional $\mathbb C$-algebra of dimension
$n!$
([[lem-semisimplicity-and-trace-form-for-the-finite-spherical-hecke-algebra]]).

[F7] Tensoring over a commutative ring preserves cokernels and surjections, so
base change of a quotient presentation of a free algebra is the quotient of the
base-changed free algebra by the images of the relators
([[thm-right-exactness-of-tensor-products]]).



## Proof

**Proof technique:** direct.

1.1 At $v\mapsto1$ the relators of [F1] become $T_i^2=1$ together with the braid and commutation relators, so by [F7] the specialization $\mathbb C\otimes_{A,v\mapsto1}H_v(n)$ is the $\mathbb C$-algebra with generators $\tau_i$ and these relations, and it has $\mathbb C$-basis the images of $T_w$ by [F1], hence dimension $n!$. By the Coxeter presentation [F3] the assignment $\tau_i\mapsto s_i$ extends to a unital algebra homomorphism onto $\mathbb C[S_n]$, which is surjective because the $s_i$ generate $S_n$; both algebras have dimension $n!$ by [F4], so it is an isomorphism. A reduced word $w=s_{i_1}\cdots s_{i_\ell}$ gives $\tau_{i_1}\cdots\tau_{i_\ell}\mapsto s_{i_1}\cdots s_{i_\ell}=w$, so the basis element $T_w$ is carried to $w$: clause (1). [F1, F3, F4, F7, algebra]

1.2 By [F2] the specialization at $v\mapsto q$ is isomorphic to $H$ with $T_i\mapsto T_{s_i}$ and $T_w\mapsto T_w$: clause (2). [F2]

2.1 The specialization at $v\mapsto1$ is $\mathbb C[S_n]$, which is semisimple by [F5], and the specialization at $v\mapsto q$ is $H$, which is semisimple of dimension $n!$ by [F6]; in both cases the isomorphisms of steps 1.1 and 1.2 match the standard bases $T_w$, so the specializations are semisimple and basis-compatible: clause (3). [F2, F5, F6, step 1.1, step 1.2]

3.1 Step 1.1 proves clause (1) with the basis compatibility, step 1.2 proves clause (2), and step 2.1 proves the semisimplicity and basis compatibility of clause (3). Both specializations are base changes of a free finite-rank algebra along explicit ring homomorphisms, and all dimensions and index sets are finite, so no choice principle is used. [step 1.1, step 1.2, step 2.1] ∎ 