---
id: ex-the-one-point-extension-of-a-well-order
kind: example
title: "The one-point extension of a well-order, and $\\omega$ with a new top element"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-well-order, def-initial-segment, def-order-isomorphism,
       lem-well-order-comparability, thm-mostowski-collapse, lem-ordinal-basics,
       def-equinumerous, def-natural-numbers, thm-omega-is-peano-system,
       lem-nat-nonzero-is-successor, def-injection-surjection-bijection,
       lem-nat-order-is-membership, def-ordinal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 4, Definition 4.17 and Lemmas 4.18-4.19 (successor ordinals); Section 5, Example $1+\\omega=\\omega<\\omega+1$"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 3 (successor ordinals and $\\omega$); Section 5 (ordering $1+\\omega<\\omega+1$)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Let $(V,<)$ be a well-order ([[def-well-order]]) and let $\infty\notin V$; put
$W=V\cup\{\infty\}$ and define $x\prec y$ if and only if $x,y\in V$ and $x<y$,
or $x\in V$ and $y=\infty$. Then:

**(i)** $W$ is a well-order, $W_{<\infty}=V$
([[def-initial-segment]]), and the identity is an order isomorphism of $(V,<)$
onto the proper initial segment $W_{<\infty}$ ([[def-order-isomorphism]]), so
in [[lem-well-order-comparability]] applied to $(V,<)$ and $(W,\prec)$ it is
alternative (ii) that holds, with the unique witness $b=\infty$, and $V$ is not
order isomorphic to $W$;

**(ii)** for $V=\mathbb{N}=\omega$ the extension is equinumerous with $\omega$
([[def-equinumerous]]) but is not order isomorphic to $(\omega,<)$: the extension
has a greatest element and $\omega$ does not;

**(iii)** for $V=\omega$ the collapsing map of [[thm-mostowski-collapse]] carries
this extension of $\omega$ to an order isomorphism onto the ordinal
$\omega^{+}=\omega\cup\{\omega\}$ ([[def-ordinal]]), so its order type is
$\omega^{+}$.

No choice principle is used.

## Facts & Assumptions

**Given:** A well-order $(V,<)$, a point $\infty\notin V$, the set $W=V\cup\{\infty\}$ with the relation $\prec$ defined in the Example, and $V=\omega$ in parts (ii) and (iii), where $\omega=\mathbb{N}$ with $0=\varnothing$ and $\sigma(n)=n\cup\{n\}$.

[F1] A well-order on a set $X$ is a total order in which every nonempty $S\subseteq X$ has a least element; in the strict presentation it is irreflexive, transitive, trichotomous, and every nonempty subset has an element with nothing strictly below it in the subset ([[def-well-order]]).

[F2] For a well-order and $a$ in it, the initial segment is $X_{<a}=\{x\in X:x<a\}$ ([[def-initial-segment]]).

[F3] An order isomorphism between posets is a surjective order embedding, equivalently a bijection $f$ with $x\le y\iff f(x)\le f(y)$ ([[def-order-isomorphism]]).

[F4] For well-orders $V$ and $W$ exactly one of the following holds: $V\cong W$; $V\cong W_{<b}$ for a unique $b\in W$; or $V_{<a}\cong W$ for a unique $a\in V$ ([[lem-well-order-comparability]]).

[F5] Every well-order $(X,<)$ is order isomorphic to exactly one ordinal $\mathrm{ot}(X)$; the isomorphism is the collapsing map $F(a)=\{F(b):b<a\}$, it is unique, and its image is $\mathrm{ot}(X)$ ([[thm-mostowski-collapse]]).

[F6] Sets $A$ and $B$ are equinumerous when there is a bijection $A\to B$; a function is injective when $f(x)=f(y)$ implies $x=y$, surjective when every element of the codomain is a value, and bijective when both ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[F7] $\omega=\mathbb{N}$ with $0=\varnothing$, $\sigma(n)=n\cup\{n\}$, and $n=\{m\in\mathbb{N}:m<n\}$ is the set of its predecessors; $\mathbb{N}$ is an inductive set contained in every inductive set ([[def-natural-numbers]]).

[F8] In $(\mathbb{N},0,\sigma)$: $\sigma(n)\ne0$ for every $n$, and $\sigma$ is injective ([[thm-omega-is-peano-system]]).

[F9] Every natural number other than $0$ is $\sigma(m)$ for some natural $m$ ([[lem-nat-nonzero-is-successor]]).

[F10] For naturals: $n<\sigma(n)$ for every $n$, and $n=\{m\in\mathbb{N}:m<n\}$ ([[lem-nat-order-is-membership]]).

[F11] For every ordinal $\alpha$ the successor is $\alpha^{+}=\alpha\cup\{\alpha\}$ ([[def-ordinal]]).

## Verification

**Proof technique:** direct.

1.1 The relation $\prec$ is irreflexive: if $x\prec x$ with $x\in V$ then $x<x$, impossible in the total order $V$; if $x=\infty$ then the definition would need $\infty\in V$, which is excluded. [F1]

1.2 Trichotomy: for distinct $x,y\in W$ either both lie in $V$, and totality of $<$ decides between $x<y$ and $y<x$, or one of them is $\infty$, and then $x\prec\infty$ when $x\in V$ while $y\prec\infty$ when $y\in V$. [F1]

1.3 Transitivity: if $x\prec y$ and $y\prec z$, then either $z=\infty$, in which case $x\in V$ and $x\prec z$ by the second clause, or $z\in V$; in the second case $y\in V$ and the first clause gives $x<y<z$, so $x<z$ and $x\prec z$. [F1]

1.4 $W_{<\infty}=V$, and the identity map is an order isomorphism of $(V,<)$ onto $(W_{<\infty},\prec)$: a member $x$ of $W$ satisfies $x\prec\infty$ exactly when $x\in V$, by the second clause of the definition; and for $x,y\in V$ one has $x<y$ if and only if $x\prec y$, so the identity is a bijection onto $W_{<\infty}$ preserving and reflecting the order. [F2, F3]

1.5 Every nonempty $S\subseteq W$ has a $\prec$-least element: if $S$ meets $V$, then $S\cap V$ is a nonempty subset of the well-order $V$ with least element $\ell$, and $\ell$ is $\prec$-least in $S$, since a member of $S\cap V$ is either $\ell$ itself or lies strictly above $\ell$ in $V$, hence in $\prec$, while $\infty$ satisfies $\ell\prec\infty$; if $S$ meets $V$ in nothing, then $S=\{\infty\}$ and $\infty$ is least. [F1]

1.6 For $V=\omega$ the extension is equinumerous with $\omega$: the map $g$ with $g(\infty)=0$ and $g(n)=\sigma(n)$ for $n\in\omega$ is a bijection $W\to\omega$. It is injective, since $\sigma$ is injective and $\sigma(n)\ne0$ for every $n$, so the values $\sigma(n)$ are nonzero and distinct and differ from $0=g(\infty)$; and it is surjective, since $0=g(\infty)$ while every $m\ne0$ in $\omega$ equals $\sigma(m')=g(m')$ for some $m'$ by [F9]. [F6, F7, F8, F9]

1.7 When $V=\omega$: $\infty$ is a greatest element of $W$, because $x\prec\infty$ for every $x\in V$; and $\omega$ has no greatest element, because $n<\sigma(n)\in\omega$ for every $n\in\omega$. [F7, F10]

1.8 For $V=\omega$ and $n\in\omega$ the predecessors of $n$ in $W$ are exactly the naturals below $n$: a member $y$ of $W$ satisfies $y\prec n$ if and only if $y\in\omega$ and $y<n$, because $y=\infty$ satisfies neither disjunct of the definition and a natural $y$ satisfies the first exactly when $y<n$; hence $W_{<n}=\{m\in\omega:m<n\}=n$. [F2, F7, F10]

2.1 The collapse computes the finite levels: for $V=\omega$ one has $F(n)=n$ for every $n\in\omega$, where $F(y)=\{F(z):z\prec y\}$ is the collapsing map of [F5]. Otherwise the set of $n$ with $F(n)\ne n$ is nonempty and has a least element $n_0$; then $F(m)=m$ for every $m<n_0$, and by step 1.8 and [F5] we get $F(n_0)=\{F(z):z\prec n_0\}=\{F(m):m<n_0\}=\{m:m<n_0\}=n_0$ by [F10], a contradiction. [step 1.8, F5, F10]

2.2 Claim (i), the comparability consequence: step 1.4 exhibits an order isomorphism $V\cong W_{<\infty}$, which is alternative (ii) of [F4] for the pair of well-orders $(V,<)$ and $(W,\prec)$ with witness $\infty$; by the mutual exclusivity in [F4] the alternative $V\cong W$ fails, and the witness is unique. [step 1.4, F4]

2.3 Claim (ii), the non-isomorphism: $W$ is not order isomorphic to $(\omega,<)$. If $f:W\to\omega$ were an order isomorphism, then every $m\in\omega$ is $f(x)$ for some $x\in W$, and every $x\in W$ satisfies $x=\infty$ or $x\prec\infty$ because $\infty$ is greatest by step 1.7, so $m=f(x)\le f(\infty)$; thus $f(\infty)$ would be a greatest element of $\omega$, contradicting step 1.7 since $f(\infty)<\sigma(f(\infty))$ in $\omega$. [step 1.7, F3, F10]

3.1 Claim (iii): for $V=\omega$ the predecessors of $\infty$ are exactly the members of $\omega$ by step 1.4, so $F(\infty)=\{F(z):z\prec\infty\}=\{F(n):n\in\omega\}=\{n:n\in\omega\}=\omega$ by step 2.1, the last equality because $\{n:n\in\omega\}$ and $\omega$ have the same members; and the image of $F$ is $\mathrm{ot}(W)$ by [F5], so $\mathrm{ot}(W)=\{F(y):y\in W\}=\{n:n\in\omega\}\cup\{\omega\}=\omega\cup\{\omega\}=\omega^{+}$ by [F11]: the collapse is an order isomorphism of $W$ onto the ordinal $\omega^{+}$. [step 1.4, step 2.1, F5, F7, F11]

4.1 Parts (i) to (iii) are established: $\prec$ is irreflexive, trichotomous and transitive by steps 1.1 to 1.3 and every nonempty subset of $W$ has a least element by step 1.5, so $W$ is a well-order with $W_{<\infty}=V$ by step 1.4; the comparability classification and its unique witness are step 2.2. For $V=\omega$ the extension is equinumerous with $\omega$ by step 1.6 and not order isomorphic to it by step 2.3, and the collapse has image $\omega^{+}$ by steps 2.1 and 3.1, so the order type of the extension is $\omega^{+}$. Nothing is ever selected: the least elements come from the given well-order of $V$, the bijection in step 1.6 is one explicit formula, and the collapse is unique by [F5], so no choice principle is used. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 2.1, step 2.2, step 2.3, step 3.1, F5] ∎
