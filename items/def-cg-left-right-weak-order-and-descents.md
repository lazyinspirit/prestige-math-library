---
id: def-cg-left-right-weak-order-and-descents
kind: definition
title: "The right and left weak orders, intervals, covers, and meets and joins of subsets"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 11
deps:
  - def-hh-coxeter-matrix-word-group-and-length
  - def-cg-parabolic-quotient-and-two-sided-minima
  - def-cg-canonical-reflection-homomorphism
  - def-cg-geometric-inversion-set
  - def-partial-order
  - thm-hh-parabolic-minimal-representatives-and-length-additivity
justified_by: [lem-cg-weak-order-is-a-graded-partial-order]
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Anders Bjorner and Francesco Brenti, Combinatorics of Coxeter Groups (Graduate Texts in Mathematics 231, Springer 2005; author-hosted complete PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Definition 3.1.1, printed p. 65 (right and left weak order); Chapter 1.4, equation (1.20) and Corollary 1.4.6, printed pp. 17-18 (left and right descent sets)"
    - title: "John R. Stembridge, On the fully commutative elements of Coxeter groups (author-hosted preprint)"
      url: "https://dept.math.lsa.umich.edu/~jrs/papers/FC.pdf"
      locator: "Section 1.3 'The weak order', printed p. 5 (PDF p. 6; right and left weak order via length-additive multiplication and inversion)"
---

## Definition

Let $(S,m)$ be a finite Coxeter matrix, let $W$ be the presented group
with length function $\ell$ and reduced expressions
([[def-hh-coxeter-matrix-word-group-and-length]]), and for $w\in W$ let

$$D_L(w):=\{s\in S:\ell(sw)<\ell(w)\},\qquad D_R(w):=\{s\in S:\ell(ws)<\ell(w)\}$$

be the left and right descent sets already fixed in
[[def-cg-parabolic-quotient-and-two-sided-minima]] (2). Let $T$,
$\Phi=\Phi_+\sqcup\Phi_-$ and the inversion sets
$N(w)=\{\alpha\in\Phi_+:\rho(w)\alpha\in\Phi_-\}$ be the reflection set, the
signed root system and the inversion sets of
[[def-cg-canonical-reflection-homomorphism]] and
[[def-cg-geometric-inversion-set]].

**(1) Right and left weak order.** Define two relations on $W$ by

$$u\le_R v\iff v=ux\text{ for some }x\in W\text{ with }\ell(v)=\ell(u)+\ell(x),$$

$$u\le_L v\iff v=xu\text{ for some }x\in W\text{ with }\ell(v)=\ell(u)+\ell(x).$$

These are the **right weak order** and the **left weak order** on $W$.
Inversion relates them definitionally: $u\le_R v\iff u^{-1}\le_L v^{-1}$,
because $v=ux$ with $\ell(v)=\ell(u)+\ell(x)$ is equivalent to
$v^{-1}=x^{-1}u^{-1}$ with
$\ell(v^{-1})=\ell(u^{-1})+\ell(x^{-1})$, using $\ell(y)=\ell(y^{-1})$
([[thm-hh-parabolic-minimal-representatives-and-length-additivity]] (3)).
Write $u<_R v$ for $u\le_R v$ with $u\ne v$.

**(2) Intervals, covers and bounded subsets.** For $u,v\in W$ define
$[u,v]_R:=\{w\in W:u\le_R w\text{ and }w\le_R v\}$ and
$[u,v]_L:=\{w\in W:u\le_L w\text{ and }w\le_L v\}$; these are the right and
left intervals. An element $v$ **covers** $u$ in $\le_R$, written
$u\lessdot_R v$, when $u<_R v$ and there is no $w\in W$ with
$u<_R w<_R v$; define $u\lessdot_L v$ in the same way using $\le_L$. A subset
$A\subseteq W$ is **bounded above** in $\le_R$ if there exists $y\in W$ with
$a\le_R y$ for every $a\in A$, and **bounded below** if there exists $y\in W$
with $y\le_R a$ for every $a\in A$. Define upper and lower bounds in $\le_L$
by replacing $\le_R$ with $\le_L$.

**(3) Meets and joins of subsets.** Let $A\subseteq W$ and $z\in W$. The
element $z$ is a **right upper bound** of $A$ if $a\le_R z$ for every $a\in A$;
it is a **right join** (least upper bound) if it is a right upper bound and
$z\le_R y$ for every right upper bound $y$ of $A$. Dually, $z$ is a **right
lower bound** if $z\le_R a$ for every $a\in A$, and a **right meet** (greatest
lower bound) if it is a right lower bound and $u\le_R z$ for every right lower
bound $u$ of $A$. Define left upper and lower bounds, meets, and joins by
replacing $\le_R$ with $\le_L$. Whenever the relevant meet or join is unique,
write it as $\bigwedge A$ or $\bigvee A$ in the order under discussion; for
$A=\{u,v\}$ write $u\wedge v$ or $u\vee v$. A meet or join, when it exists,
is unique in either order: any two meets (respectively joins) bound one another,
so antisymmetry gives equality. The partial-order property needed here is the
recorded well-definedness justifier. This definition asserts no existence of
meets or joins for any specified subset.

**(4) Abstentions.** This definition records $\le_R,\le_L$ and the interval
and bound vocabulary; it asserts no further property. In particular, it does
not assert that either relation is a partial order
([[def-partial-order]]), that covers have the form
$v=us$, that any meet or join exists, or that $w\mapsto N(w^{-1})$
computes $\le_R$ by inclusion of inversion sets. No Choice is used.
