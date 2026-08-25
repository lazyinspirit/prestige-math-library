---
id: thm-noether-finiteness-theorem-for-invariants
kind: theorem
title: "Noether's finiteness theorem: the invariants of a finite group acting on a finite-type algebra over a Noetherian ring form an algebra of finite type"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-artin-tate-integral-form, def-invariant-subring-of-a-group-of-ring-automorphisms, lem-orbit-polynomial-has-invariant-coefficients, def-finite-type-and-module-finite-algebras, def-subring]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Theorem 5.8"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.22)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $A$ be a Noetherian commutative ring, let $C$ be a commutative $A$-algebra
of finite type ([[def-finite-type-and-module-finite-algebras]]) with $A$ a
subring of $C$ ([[def-subring]]), and let $G$ be a **finite** group acting on
$C$ by $A$-algebra automorphisms
([[def-invariant-subring-of-a-group-of-ring-automorphisms]]). Then the invariant
subring $C^{G}$ is of finite type over $A$.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $A$, a commutative $A$-algebra $C$ of finite type with $A$ a subring of $C$, and a finite group $G$ acting on $C$ by $A$-algebra automorphisms.

[L1] For an action by ring automorphisms, $C^{G}=\{c\in C:g\cdot c=c$ for every $g\in G\}$ is a subring of $C$; when the action is by $A$-algebra automorphisms and $A$ is a subring of $C$, one has $A\subseteq C^{G}\subseteq C$ ([[def-invariant-subring-of-a-group-of-ring-automorphisms]]).

[L2] For a finite group acting by ring automorphisms on a nonzero commutative ring $C$, every element of $C$ is integral over $C^{G}$ ([[lem-orbit-polynomial-has-invariant-coefficients]]).

[L3] For commutative rings $A\subseteq B\subseteq C$, each a subring of the next, with $A$ Noetherian, $C$ of finite type over $A$ and every element of $C$ integral over $B$, the ring $B$ is of finite type over $A$ ([[cor-artin-tate-integral-form]]).

[L4] An algebra is **of finite type** over $R$ when it equals $R[a_1,\ldots,a_n]$ for some finite list, and $R[\,]$ is the image of $R$ ([[def-finite-type-and-module-finite-algebras]]).

[L5] A subring contains the identity of the ambient ring and shares its zero and identity ([[def-subring]]).

## Proof

**Proof technique:** direct.

1.1 Dispose of the zero ring. If $C=0$ then $1_C=0_C$, and since $A$ is a subring of $C$ it has the same zero and identity, so $A=0$; also $C^{G}=0$, which is the image of $A$ in $C^{G}$ and hence equals $A[\,]$, an algebra of finite type over $A$. For the rest of the argument assume $C\neq0$. [L1, L4, L5, given]

1.2 The invariant subring sits between the two: $C^{G}$ is a subring of $C$, and every $g\in G$ fixes $A$ pointwise because the action is by $A$-algebra automorphisms and $A$ is a subring of $C$, so $A\subseteq C^{G}\subseteq C$, each a subring of the next. [L1, L5, given]

2.1 Since $G$ is finite and $C$ is nonzero, every element of $C$ is integral over $C^{G}$. [L2, step 1.1]

3.1 The three rings $A\subseteq C^{G}\subseteq C$ satisfy the hypotheses of the integral form of the Artin–Tate lemma: $A$ is Noetherian, $C$ is of finite type over $A$, and every element of $C$ is integral over $C^{G}$. Therefore $C^{G}$ is of finite type over $A$. [L3, L4, step 1.2, step 2.1] ∎

## Remarks

- **The theorem says finite type, and no more.** It produces finitely many algebra generators of $C^{G}$ over $A$ and identifies none of them; for the symmetric group acting on a polynomial ring the companion examples page compares this with the classical description by elementary symmetric polynomials, which is strictly more information.

- **Finiteness of $G$ is used only through [[lem-orbit-polynomial-has-invariant-coefficients]]**, and there it is essential: it is what makes the orbit polynomial a polynomial.

- **No hypothesis on the characteristic, and no invertibility of $|G|$.** The route through integrality and the Artin–Tate lemma avoids averaging entirely, which is why nothing here breaks when the order of $G$ is not invertible in $C$.
