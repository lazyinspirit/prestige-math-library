---
id: cor-type-a-finite-hecke-algebra-is-noncanonically-isomorphic-to-csn
kind: corollary
title: "The finite Hecke algebra is non-canonically isomorphic to the group algebra of S_n"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - thm-tits-deformation-for-the-type-a-hecke-algebra
  - prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra
  - thm-type-a-iwahori-hecke-presentation
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jay Taylor, Finite Reductive Groups - Corollary 5.19 and Remark 5.23, printed pp. 45-46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Corollary 2.7 and the closing Remark on the natural bijection with $\\operatorname{Irr}(S_n)$, PDF p. 5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Remark 11.6 and Theorem 11.14 (compatibility, not canonicity), printed pp. 47 and 51"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice, used through Tits deformation. For every prime power
$q$ there is an isomorphism of $\mathbb C$-algebras
$H=e_B\mathbb C[G]e_B\cong\mathbb C[S_n]$,
$G=\operatorname{GL}_n(\mathbb F_q)$, and no isomorphism sending every standard
basis element $T_w$ to $w$ exists for $n\ge2$ and $q\ne1$, since their quadratic
relations differ: the deformation isomorphism is not canonical, does not
identify the natural bases, and need not identify the simple modules of $H$ with
those of $\mathbb C[S_n]$ in any prescribed way. Consequently $H$ and
$\mathbb C[S_n]$ have the same number of simple modules and the same multiset of
dimensions of simple modules, but no natural bijection of simple modules is
asserted.

## Facts & Assumptions

**Given:** A prime power $q$, the group $G=\operatorname{GL}_n(\mathbb F_q)$ with
Borel $B$, the finite Hecke algebra $H=e_B\mathbb C[G]e_B$ with standard basis
$T_w$, the group algebra $\mathbb C[S_n]$ with its basis $S_n$, and the Axiom of
Choice AC.

[F1] AC holds, and Tits deformation gives
$H_q(S_n)\cong e_B\mathbb C[\operatorname{GL}_n(\mathbb F_q)]e_B\cong\mathbb C[S_n]$,
preserving the number and dimensions of simple modules; the isomorphism is
produced by a formal-lifting and constructible-incidence argument
([[thm-tits-deformation-for-the-type-a-hecke-algebra]],
[[def-axiom-of-choice]]).

[F2] The algebra $H_q(S_n)$ in [F1] is the specialization at $v\mapsto q$ of the
generic Hecke algebra $H_v(n)$, and $\mathbb C[S_n]$ is its specialization at
$v\mapsto1$
([[prop-group-algebra-and-finite-field-specializations-of-the-generic-hecke-algebra]]).

[F3] For every simple transposition $s_i$ one has
$T_{s_i}^2=(q-1)T_{s_i}+q\,1_H$ in $H$, with $1_H=T_1=e_B$ the unit
([[thm-type-a-iwahori-hecke-presentation]],
[[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]).

[F4] The elements $T_w$, $w\in S_n$, form a $\mathbb C$-basis of $H$, and in
$\mathbb C[S_n]$ the elements $w$, $w\in S_n$, form a basis; in particular $1$
and a simple transposition $s_i$ are linearly independent in $\mathbb C[S_n]$.
[F3, given]



## Proof

**Proof technique:** direct.

1.1 By [F2] the algebra $H_q(S_n)$ of [F1] is $H$ and its specialization at $v\mapsto1$ is $\mathbb C[S_n]$; by [F1] there is an isomorphism $H\cong\mathbb C[S_n]$ of $\mathbb C$-algebras; any algebra isomorphism induces an equivalence between the categories of finite-dimensional modules, so it carries simple modules to simple modules and preserves their dimensions. Hence the number and the multiset of dimensions of simple modules agree. [F1, F2]

1.2 For $n\ge2$ there is no unital algebra isomorphism $\varphi:H\to\mathbb C[S_n]$ with $\varphi(T_w)=w$ for all $w$. Indeed, applying such a $\varphi$ to the relation $T_{s_i}^2=(q-1)T_{s_i}+q\,1_H$ of [F3] would give $s_i^2=(q-1)s_i+q\,1$ in $\mathbb C[S_n]$; since $s_i^2=1$ (a transposition is an involution) this reads $(q-1)s_i=(1-q)1$, so $s_i=-1$ because $q\ne1$. But $1$ and $s_i$ are linearly independent basis elements of $\mathbb C[S_n]$ by [F4], so $s_i\ne-1$: a contradiction. Hence the Tits isomorphism cannot preserve the natural bases. [F3, F4, algebra]

2.1 The isomorphism of step 1.1 is produced by the formal-lifting and constructible-incidence argument of Tits deformation, which selects no canonical basis and no prescribed bijection of simple modules; composing it with an algebra automorphism may change the induced bijection on simple modules, when equal-sized matrix factors are permuted; inner automorphisms leave simple isomorphism classes fixed, so no prescribed identification of the simple $H$-modules with those of $\mathbb C[S_n]$ is determined by the construction. What is invariant is exactly what step 1.1 records: the number and the dimensions of the simple modules. In particular the corollary asserts no natural bijection of simple modules. [F1, step 1.1, step 1.2]

3.1 Step 1.1 gives the isomorphism and the numerical consequences, step 1.2 shows that no basis-preserving isomorphism exists, and step 2.1 records the non-canonicity. AC is inherited from the Tits-deformation supplier as declared, and all remaining objects are finite-dimensional over $\mathbb C$. [step 1.1, step 1.2, step 2.1] ∎ 