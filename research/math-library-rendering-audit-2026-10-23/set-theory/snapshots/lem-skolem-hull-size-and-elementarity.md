---
id: lem-skolem-hull-size-and-elementarity
kind: lemma
title: "Skolem hulls are small elementary substructures"
status: published
origin: pipeline
deps: [def-skolem-witness-hull, thm-tarski-vaught-set-structure-test, thm-hessenberg, cor-cardinal-absorption, thm-well-ordering-theorem, def-axiom-of-choice, def-set-coded-terms-and-formulas]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Weiss–D’Mello, Fundamentals of Model Theory, Theorem 5 proof, printed p.20; finite-word count and choices expanded."
      url: https://www.math.toronto.edu/weiss/model_theory.pdf
justified_by: []
forward_refs: []
proof_strategy: direct
---

## Statement

In ZFC let $\kappa$ be an infinite cardinal, let $L$ have at most $\kappa$ nonlogical symbols of finite arity, let $\mathcal M$ be a nonempty $L$-structure, and let $A\subseteq M$ have size at most $\kappa$. There exists a witness family whose hull $H$ of $A$ is an elementary substructure of $\mathcal M$ with $|H|\le\kappa$. In fact every supplied witness family has these elementarity and size properties. For countable $L$ and $A$, the hull is at most countable.

## Facts & Assumptions

**Given:** The stated objects, ZF and AC.

[F1] A supplied family chooses existential witnesses and defines increasing stages $H_n$, starting with $A\cup\{m_0\}$ and closing under constants, original functions and witness functions. ([[def-skolem-witness-hull]])

[F2] A nonempty substructure is elementary iff every true existential instance with parameters in it has a witness in it making the matrix true in the ambient structure. ([[thm-tarski-vaught-set-structure-test]])

[F3] For infinite $\kappa$, $|\kappa\times\kappa|=\kappa$. ([[thm-hessenberg]])

[F4] For infinite $\kappa$ and $\lambda\le\kappa$, $\kappa+\lambda=\kappa$ and $\kappa\cdot\lambda=\kappa$ when $\lambda>0$. ([[cor-cardinal-absorption]])

[F5] Assuming AC, every set can be well ordered. ([[thm-well-ordering-theorem]])

[A1] Every set family of nonempty sets has a choice function. ([[def-axiom-of-choice]])

[F6] Every term and formula is a finite word in the tagged alphabet; the primitive formula constructors are equality, relations, negation, conjunction and existential quantification. ([[def-set-coded-terms-and-formulas]])

## Proof

1.1 By F5 and A1 fix a well-order of $M$. Its least element is $m_0$; selecting the least satisfying element of each nonempty existential witness set, and $m_0$ otherwise, gives the family of F1. The same remaining argument applies to any already supplied family. This is the use of choice needed to produce witnesses for an arbitrary structure. [F1, F5, A1]

1.2 The alphabet consisting of the nonlogical symbols, countably many variables and finitely many punctuation/constructor tokens has size at most $\kappa$, by F4. Fix an injection of it into $\kappa$ and a pairing injection $\kappa^2\to\kappa$ from F3. Recursively pairing coordinates gives injections $\kappa^n\to\kappa$ for each positive finite $n$; the empty word is one additional element. Encoding the length as well gives an injection of all finite words into $\omega\times\kappa$, of size $\kappa$ by F4. Formulas are particular finite words, so there are at most $\kappa$ formulas and at most $\kappa$ pairs $(x,\psi)$. Thus there are at most $\kappa$ closure operations in F1, all of finite arity. [F1, F3, F4, F6]

2.1 If $|H_n|\le\kappa$, the same finite-tuple encoding gives at most $\kappa$ tuples of each arity and at most $\kappa$ operation/tuple pairs in total. Their image has size at most $\kappa$: well-order the pair codes and assign to each image element its least preimage code. Adding $H_n$ and the at most $\kappa$ constants preserves the bound by F4. Also $|H_0|=|A\cup\{m_0\}|\le\kappa$. Induction proves $|H_n|\le\kappa$ for all $n$. To bound the union, use A1 on the nonempty sets of injections $H_n\to\kappa$, obtaining injections $j_n$ simultaneously. Assign $a\in H$ the pair $(n,j_n(a))$ for its least membership stage $n$. This injects $H$ into $\omega\times\kappa$, giving $|H|\le\kappa$ by F4. This explicitly accounts for the countable choice in this union bound. [F1, F3, F4, A1, step 1.2]

3.1 The hull contains $m_0$ and every constant. A finite tuple in $H$ lies in a common $H_n$: take the maximum of its finitely many membership stages, using $n=0$ for the empty tuple. Applying an original function sends it into $H_{n+1}$. Hence the restricted structure on $H$ is a nonempty substructure. For a true existential instance with parameters in $H$, put its parameter tuple in $H_n$ in the same way. The corresponding witness value belongs to $H_{n+1}$ and satisfies the matrix in $\mathcal M$, by F1. F2 now gives $H\prec\mathcal M$. Taking $\kappa=\aleph_0$ gives the countable assertion, with the same choice uses; it is not a claim of a choice-free countable hull for arbitrary $M$. [F1, F2, step 1.1, step 2.1] ∎
