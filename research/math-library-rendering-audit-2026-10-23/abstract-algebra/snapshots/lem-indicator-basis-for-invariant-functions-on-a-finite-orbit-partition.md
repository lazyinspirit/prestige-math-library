---
id: lem-indicator-basis-for-invariant-functions-on-a-finite-orbit-partition
kind: lemma
title: "Orbit indicators form a basis of invariant functions"
status: published
origin: pipeline
pipeline_run: phase-2-wave-1
deps: [def-group-action, thm-orbits-partition-the-set, def-vector-space, def-finite-sum-in-a-commutative-monoid, def-linear-basis, def-conjugacy-class-and-centralizer]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-09
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Etingof et al., Introduction to Representation Theory"
      url: "https://math.mit.edu/~etingof/reprbook.pdf"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications"
      url: "https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html"
---

## Statement

Let a group $G$ act on a set $X$ with finitely many distinct orbits $\mathcal O$, and let $k$ be any field. The invariant functions $f:X\to k$, meaning $f(g\cdot x)=f(x)$ for all $g,x$, form a vector space under pointwise operations. Its basis is $\{\mathbf1_O:O\in\mathcal O\}$ and its dimension is $|\mathcal O|$. Here $\mathbf1_O$ is $1_k$ on $O$ and $0_k$ elsewhere. For conjugation on a finite group, these are the class functions and conjugacy-class indicators. If $X=\varnothing$, the basis is empty.

## Facts & Assumptions

**Given:** A left action of $G$ on $X$, a finite orbit set $\mathcal O$, and a field $k$.

[F1] A left action satisfies $e\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ ([[def-group-action]]).

[F2] Distinct orbits partition $X$, and two points share an orbit exactly when one is $g\cdot x$ for some $g$ ([[thm-orbits-partition-the-set]]).

[F3] The vector-space axioms are the abelian addition laws, two distributive laws, scalar associativity and the scalar identity law ([[def-vector-space]]).

[F4] Finite sums in an additive commutative monoid are independent of enumeration and the empty sum is zero ([[def-finite-sum-in-a-commutative-monoid]]).

[F5] A basis is a linearly independent spanning subset; the empty basis belongs to the zero space ([[def-linear-basis]]).

[F6] The conjugacy class of $x$ is $\{gxg^{-1}:g\in G\}$ ([[def-conjugacy-class-and-centralizer]]).

## Proof

**Proof technique:** direct.

1.1 Write $W$ for the invariant functions. The zero function is invariant. If $f,h\in W$ and $a,b\in k$, then $(af+bh)(g\cdot x)=af(g\cdot x)+bh(g\cdot x)=af(x)+bh(x)=(af+bh)(x)$, so $af+bh\in W$. For each $x$, associativity and commutativity of function addition, the zero and negative identities, $a(f+h)=af+ah$, $(a+b)f=af+bf$, $(ab)f=a(bf)$ and $1_k f=f$ are the corresponding field equalities evaluated at $x$. Equality at every $x$ is equality of functions. This verifies all the axioms in F3. [F3, given, algebra]

1.2 By F2, $x$ and $g\cdot x$ belong to the same orbit. Consequently $\mathbf1_O(g\cdot x)=\mathbf1_O(x)$, so every orbit indicator lies in $W$. If $f\in W$, its values at any two points of one orbit coincide by F2 and invariance. Each orbit is nonempty, so there is a unique scalar $c_O$ such that $f(x)=c_O$ for all $x\in O$. This defines $c_O$ by its unique value and does not choose orbit representatives. [F2, given]

2.1 Define $h=\sum_{O\in\mathcal O}c_O\mathbf1_O$ using F4 in the additive vector space $W$. Evaluation of a finite sum is the sum of its values, by the recursive pointwise addition. At a point $x$, exactly one indicator is $1_k$, namely that of its orbit, and every other term vanishes. Thus $h(x)=c_{G\cdot x}=f(x)$, so $h=f$ and the indicators span $W$. [F4, F2, step 1.1, step 1.2]

3.1 Suppose $\sum_{O\in\mathcal O}a_O\mathbf1_O=0$. Fix any orbit $O$ and one $x\in O$, possible because $O$ is nonempty. Evaluation at $x$ gives $a_O=0$. This holds for each orbit separately, so no simultaneous choice is required. Also different orbits have different indicators by evaluation on either orbit and $1_k\ne0_k$. Hence these $|\mathcal O|$ vectors are independent and, by F5 and step 2.1, form a basis, giving the asserted dimension. [F2, F4, F5, step 2.1]

4.1 On $X=G$, set $g\cdot x=gxg^{-1}$. Then $exe^{-1}=x$ and $(gh)x(gh)^{-1}=g(hxh^{-1})g^{-1}$, so this is an action by F1. F6 identifies its orbits as the conjugacy classes. Invariance is precisely constancy on conjugacy classes, the definition of a class function here. If $G$ is finite there are finitely many classes, so steps 1.1–3.1 apply. [F1, F6, step 1.1, step 1.2, step 2.1, step 3.1, algebra]

5.1 If $X=\varnothing$, there is just the empty function, which is the zero function; there are no orbits and F4 gives the zero function as the empty sum. F5 gives the empty basis and dimension zero. With one orbit, step 2.1 reads $f=c_X\mathbf1_X$, and step 3.1 proves that this single nonzero indicator is a basis. [F4, F5, step 2.1, step 3.1] ∎

## Sources

[Etingof et al.](https://math.mit.edu/~etingof/reprbook.pdf), §4.2 opening, p. 63, supplies the class-function setting. [Judson, §14.2 opening](https://judsonbooks.org/aata-files/aata-html/actions-section-class-equation.html) identifies the conjugation orbits. The orbit-function basis argument is the local generalization and uses neither character orthogonality nor completeness.
