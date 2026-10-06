---
id: def-superfluous-subobject-and-projective-cover-in-an-abelian-category
kind: definition
title: "Superfluous subobjects and projective covers in an abelian category"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 0
justified_by: []
aliases: []
deps: [def-abelian-category, def-essential-epimorphism-and-projective-cover, def-finite-k-linear-abelian-category, def-kernels-and-cokernels-as-equalizers-and-coequalizers, def-monomorphism-and-epimorphism, def-projective-object, def-subobject-and-quotient-object, def-the-join-of-subobjects-in-an-abelian-category, rem-category-theory-class-and-size-conventions]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, §1.8 (Definitions 1.8.1–1.8.6, Proposition 1.8.10, Corollary 1.8.11, Remark 1.8.7), printed pp.9–11"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
    - title: "Peter Webb, A Course in Finite Group Representation Theory (23 Feb 2016 draft), Chapter 7 (projective covers of finite-dimensional modules)"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
---

## Definition

Let $\mathcal C$ be an abelian category ([[def-abelian-category]]) and let
$n:N\to P$ be a monomorphism, regarded as the subobject $[n]$ of $P$
([[def-subobject-and-quotient-object]]). The subobject $[n]$ is
**superfluous** when for every subobject $[m]:M\to P$ whose join with $[n]$
satisfies

$$[n]\vee[m]=[1_P]$$

one already has $[m]=[1_P]$
([[def-the-join-of-subobjects-in-an-abelian-category]]). Here $[1_P]$ is the
subobject represented by the identity of $P$. An **essential epimorphism**
$\pi:Q\to X$ is an epimorphism whose kernel, taken as a morphism
$\ker\pi\to Q$
([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]],
[[def-monomorphism-and-epimorphism]]), represents a superfluous subobject of
$Q$. A **projective cover** of $X$ is an essential epimorphism
$\pi:Q\to X$ with $Q$ projective in the sense of [[def-projective-object]].

As elsewhere on this page, the bracket notation abbreviates statements about
representatives: $[m]=[1_P]$ says that $m$ and $1_P$ mutually factor
([[def-subobject-and-quotient-object]]), and such a factorisation of $1_P$
through the monomorphism $m$ exhibits $m$ as an isomorphism onto $P$. Thus in a
module category the condition "$[n]\vee[m]=[1_P]$ implies $[m]=[1_P]$" reads
"$N+M=P$ implies $M=P$", where the join of subobjects of a module is the sum of
the corresponding submodules, and this is precisely the superfluous-kernel
condition of the module notion of
[[def-essential-epimorphism-and-projective-cover]], with the same
projective-source requirement. The class-and-size conventions used by the
bracket notation are those of [[rem-category-theory-class-and-size-conventions]].

This is the general form of the projective-cover clause of
[[def-finite-k-linear-abelian-category]], whose phrasing "every simple object
has a projective cover" is the module-scoped language of
[[def-essential-epimorphism-and-projective-cover]] read in an abstract abelian
category. The definition asserts no existence of covers, selects no object, and
uses no choice; each later existence statement is an explicit hypothesis.
