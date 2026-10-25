---
id: def-invariant-subring-of-a-group-of-ring-automorphisms
kind: definition
title: "A group acting on a ring by automorphisms and its invariant subring"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebra-over-a-commutative-ring, def-group, def-group-action, def-ring-homomorphism, def-subring, def-symmetric-polynomial]
justified_by: []
aliases: []
landmark: false
verification:
  audited: 2026-08-26
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, Ch. 5 (before Theorem 5.8)"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., (16.22)"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]) and $C$ a commutative ring. An **action of
$G$ on $C$ by ring automorphisms** is a left action $G\times C\to C$
([[def-group-action]]), written $(g,c)\mapsto g\cdot c$, such that for every
$g\in G$ the map $c\mapsto g\cdot c$ is a ring homomorphism
([[def-ring-homomorphism]]). Each such map is then automatically bijective,
with inverse the map given by $g^{-1}$, since
$g^{-1}\cdot(g\cdot c)=(g^{-1}g)\cdot c=c$ and likewise in the other order; so
each $g$ acts as a ring automorphism, and in particular $g\cdot1_C=1_C$ and
$g\cdot0_C=0_C$.

The **invariant subring** is

$$C^{G}:=\{\,c\in C\;:\;g\cdot c=c\ \text{ for every }g\in G\,\}.$$

**It is a subring of $C$** ([[def-subring]]). It contains $1_C$, because every
$g$ acts as a unital ring homomorphism; and for $c,c'\in C^{G}$ and $g\in G$ one
has $g\cdot(c+c')=g\cdot c+g\cdot c'=c+c'$, $g\cdot(-c)=-(g\cdot c)=-c$ and
$g\cdot(cc')=(g\cdot c)(g\cdot c')=cc'$, so $C^{G}$ satisfies (T1) to (T4).

**Actions by algebra automorphisms.** When $C$ is a commutative $A$-algebra with
structure map $\eta_C\colon A\to C$ ([[def-algebra-over-a-commutative-ring]]),
an action **by $A$-algebra automorphisms** is one in which every $g$ fixes
$\eta_C(A)$ pointwise: $g\cdot\eta_C(a)=\eta_C(a)$ for all $g\in G$ and $a\in A$.
Then $\eta_C(A)\subseteq C^{G}$, so $C^{G}$ is an $A$-subalgebra of $C$ and
$A\subseteq C^{G}\subseteq C$ whenever $A$ is a subring of $C$.

**The trivial group.** If $G=\{e\}$ then $e\cdot c=c$ for every $c$, so
$C^{G}=C$.

## Remarks

- **This agrees with the notation already in use for symmetric polynomials, and
  does not compete with it.** [[def-symmetric-polynomial]] lets
  $\sigma\in\operatorname{Sym}_n$ act on $R[x_1,\ldots,x_n]$ by
  $\sigma\cdot f(x_1,\ldots,x_n)=f(x_{\sigma(1)},\ldots,x_{\sigma(n)})$ and
  writes $R[x_1,\ldots,x_n]^{\operatorname{Sym}_n}$ for the fixed subset. That
  is exactly $C^{G}$ for $C=R[x_1,\ldots,x_n]$ and $G=\operatorname{Sym}_n$:
  the same set, under the same notation, and the definition here is the general
  form of it.

- **Only invariance is asked for, not any finiteness.** $G$ may be infinite, and
  $C^{G}$ may then be small; the finiteness of $G$ is a hypothesis of the
  results about $C^{G}$, not part of this definition.
