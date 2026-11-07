---
id: lem-finite-module-cardinality-scales-under-number-field-extension
kind: lemma
title: "Finite-module cardinality scales by extension degree"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-extension-degree-and-finite-extension
  - def-ring-of-integers-of-a-number-field
  - thm-transitivity-of-integrality
  - thm-finite-integral-closure-in-a-finite-separable-extension
  - cor-ring-of-integers-is-a-dedekind-domain
  - thm-finite-torsionfree-modules-over-dedekind-domains
  - thm-projective-modules-are-flat
  - def-prime-above-and-residue-degree
  - def-ramification-index
  - def-absolute-norm-of-an-ideal
  - thm-ideal-norm-is-multiplicative
  - cor-norm-of-a-prime-ideal
  - thm-fundamental-identity-for-primes-in-number-fields
  - thm-number-field-integral-ideal-factorisation-in-zf
  - lem-nonzero-number-field-ideal-has-finite-quotient
justified_by: []
proof_strategy: direct
axiom_use: "AC is used only through the finite-torsion-free Dedekind-module supplier [F3], which makes the integral-closure module flat; the finite filtration and ideal-norm argument introduce no further choice."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, *Algebraic Number Theory*, Chapter 3, Theorem 3.34 and Chapter 4, Proposition 4.1(a)"
      url: "https://www.jmilne.org/math/CourseNotes/ANTc.pdf"
      locator: "Printed pp. 59–60 for the fundamental identity and pp. 68–69 for the norm of an extended ideal."
verification:
  precheck: pending
---

## Statement

Assume AC. Let $K'/K$ be a finite extension of number fields of degree $d$, put $R=\mathcal O_K$ and $R'=\mathcal O_{K'}$, and let $Q$ be an $R$-module whose underlying set is finite. Then $Q\otimes_R R'$ is finite and
$$\#(Q\otimes_R R')=(\#Q)^d.$$

## Statement references

[[def-axiom-of-choice]]

[[def-number-field]]

[[thm-finite-integral-closure-in-a-finite-separable-extension]]

[[thm-finite-torsionfree-modules-over-dedekind-domains]]

[[thm-fundamental-identity-for-primes-in-number-fields]]

[J. S. Milne, *Algebraic Number Theory*, Theorem 3.34 and Proposition 4.1(a)](https://www.jmilne.org/math/CourseNotes/ANTc.pdf)

## Facts & Assumptions

**Given:** AC; a finite extension $K'/K$ of number fields, $d=[K':K]$, and a finite $R=\mathcal O_K$-module $Q$.

[A1] [[def-axiom-of-choice]]: AC is an explicit hypothesis because the supplied finite torsion-free module theorem assumes it.

[F1] [[def-number-field]] and [[def-extension-degree-and-finite-extension]] make $K'/K$ finite separable. [[def-ring-of-integers-of-a-number-field]] and [[thm-transitivity-of-integrality]] identify $R'=\mathcal O_{K'}$ with the integral closure of $R=\mathcal O_K$ in $K'$. [[cor-ring-of-integers-is-a-dedekind-domain]] makes $R$ Dedekind under AC.

[F2] [[thm-finite-integral-closure-in-a-finite-separable-extension]]: $R'$ is a finite $R$-module.

[F3] [[thm-finite-torsionfree-modules-over-dedekind-domains]] and [[thm-projective-modules-are-flat]]: a finite torsion-free $R$-module is projective and therefore flat.

[F4] [[thm-number-field-integral-ideal-factorisation-in-zf]]: each nonzero prime ideal factors in the extension ring as $\mathfrak pR'=\prod_{\mathfrak P\mid\mathfrak p}\mathfrak P^{e(\mathfrak P/\mathfrak p)}$.

[F5] [[def-prime-above-and-residue-degree]] and [[def-ramification-index]]: $f(\mathfrak P/\mathfrak p)=[R'/\mathfrak P:R/\mathfrak p]$, and $e(\mathfrak P/\mathfrak p)$ is the exponent in [F4].

[F6] [[def-absolute-norm-of-an-ideal]], [[cor-norm-of-a-prime-ideal]], [[thm-ideal-norm-is-multiplicative]], and [[lem-nonzero-number-field-ideal-has-finite-quotient]]: $N_R(\mathfrak p)=\#(R/\mathfrak p)$, $N_{R'}(\mathfrak P)=N_R(\mathfrak p)^{f(\mathfrak P/\mathfrak p)}$, and ideal norms are finite and multiplicative.

[F7] [[thm-fundamental-identity-for-primes-in-number-fields]]: $\sum_{\mathfrak P\mid\mathfrak p}e(\mathfrak P/\mathfrak p)f(\mathfrak P/\mathfrak p)=d$ for each nonzero prime $\mathfrak p$ of $R$.

## Proof

**Proof technique:** tensor a finite composition series and compute each residue-ring quotient.

**Given:** [A1], [F1]–[F7], and the finite $R$-module $Q$.

1.1 The extension $K'/K$ is separable because it has characteristic zero. By [F2], $R'$ is finite over $R$; it is torsion-free as a subring of the field $K'$. Thus [F3] makes $R'$ projective, hence flat, over $R$. Tensoring an exact sequence of $R$-modules with $R'$ therefore preserves exactness. [A1, F1, F2, F3, given, algebra]

2.1 If $Q=0$, its cardinality and that of its tensor product are both $1$. Otherwise, since $Q$ is a finite set, it has finitely many submodules. A proper submodule of largest cardinality has simple quotient. Repeating inside the smaller submodule terminates by strict decrease of finite cardinalities and gives a finite composition series $0=Q_0\subsetneq Q_1\subsetneq\cdots\subsetneq Q_n=Q$. Each simple quotient is $R/\mathfrak p_i$ for a maximal ideal $\mathfrak p_i$: any nonzero element generates a simple module, whose annihilator is maximal. Each $\mathfrak p_i$ is nonzero because $R/\mathfrak p_i$ is finite whereas $R$ is infinite. [given, construct]

3.1 Fix a nonzero prime ideal $\mathfrak p$ of $R$. By [F4], $\mathfrak pR'=\prod_{\mathfrak P\mid\mathfrak p}\mathfrak P^{e(\mathfrak P/\mathfrak p)}$. Using [F6] and [F7],
$$\#(R'/\mathfrak pR')=N_{R'}(\mathfrak pR')=\prod_{\mathfrak P\mid\mathfrak p}N_{R'}(\mathfrak P)^{e(\mathfrak P/\mathfrak p)}=N_R(\mathfrak p)^d=\#(R/\mathfrak p)^d.$$
The cardinalities are finite by [F6]. [F4, F5, F6, F7, algebra]

4.1 By [F3], tensor the composition series of step 2.1 with the flat module $R'$. Each quotient becomes $R'/\mathfrak p_iR'$, whose cardinality is $(\#(R/\mathfrak p_i))^d$ by step 3.1. Cardinalities multiply in each short exact sequence of finite groups, so $\#(Q\otimes_RR')=\prod_i(\#(R/\mathfrak p_i))^d=(\#Q)^d$. The same equality holds for the empty composition series when $Q=0$, as noted in step 2.1. [F3, step 2.1, step 3.1, algebra] ∎
