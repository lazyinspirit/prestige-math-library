---
id: ex-ceiling-and-floor-are-adjoint-to-the-inclusion-of-the-integers
kind: example
title: 'Ceiling $\dashv$ inclusion $\dashv$ floor: an adjoint triple between $(\mathbb{R},\le)$ and $(\mathbb{Z},\le)$'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-galois-connection, def-adjoint-triple, def-preorder, prop-preorders-as-categories-and-monotone-maps-as-functors, lem-integer-part, lem-nat-embeds-int, lem-nat-discrete, thm-int-ordered-ring, lem-int-embeds-rat, lem-rat-embeds-dense, def-integers, lem-of-add-order, def-ordered-field]
justified_by: []
aliases: []
landmark: false
short: "$\\lceil-\\rceil\\dashv J\\dashv\\lfloor-\\rfloor$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Example 4.1.7'
      url: 'https://emilyriehl.github.io/files/context.pdf'
pipeline_run: null
---

## Example

Regard $(\mathbb{Z},\le)$ and $(\mathbb{R},\le)$ as preorders and let
$J:\mathbb{Z}\to\mathbb{R}$ be the inclusion of $\mathbb{Z}$ as its canonical
copy inside $\mathbb{R}$. Write $\lfloor x\rfloor$ for the integer part of a real
$x$ and put $\lceil x\rceil:=-\lfloor -x\rfloor$. Then

$$\lceil-\rceil\;\dashv\;J\;\dashv\;\lfloor-\rfloor,$$

an adjoint triple between $(\mathbb{R},\le)$ and $(\mathbb{Z},\le)$: for all
$m\in\mathbb{Z}$ and $x\in\mathbb{R}$,

$$J(m)\le x\iff m\le\lfloor x\rfloor,\qquad \lceil x\rceil\le m\iff x\le J(m).$$

Both composites through $J$ are identities, $\lfloor J(m)\rfloor=m=\lceil J(m)\rceil$
— the unit of $J\dashv\lfloor-\rfloor$ and the counit of $\lceil-\rceil\dashv J$
— while the counit $J(\lfloor x\rfloor)\le x$ and the unit
$x\le J(\lceil x\rceil)$ are in general strict.

## Facts & Assumptions

**Given:** Integers $m,d$ and reals $x,y$, with $\mathbb{N}$, $\mathbb{Z}$ and $\mathbb{Q}$ identified with their canonical copies in $\mathbb{R}$ along $\mathbb{N}\to\mathbb{Z}\to\mathbb{Q}\to\mathbb{R}$.

[F1] A preorder determines a category with at most one morphism between any two objects, and functors between such categories are exactly monotone maps ([[prop-preorders-as-categories-and-monotone-maps-as-functors]], [[def-preorder]]).

[F2] A Galois connection $F\dashv G$ between preorders $A$ and $B$ consists of monotone maps $F:A\to B$ and $G:B\to A$ such that $F(a)\le b$ exactly when $a\le G(b)$, for every $a\in A$ and $b\in B$; under the identification of preorders with thin categories this is exactly an adjunction, with unit $a\le GF(a)$ and counit $FG(b)\le b$ ([[def-galois-connection]]).

[F3] An adjoint triple $L\dashv M\dashv R$ consists of categories $\mathcal C,\mathcal D$, functors $L,R:\mathcal D\to\mathcal C$ and $M:\mathcal C\to\mathcal D$, and adjunctions $L\dashv M$ and $M\dashv R$ ([[def-adjoint-triple]]).

[F4] For every real $x$ there is exactly one integer $m$ with $m\le x<m+1$; it is written $\lfloor x\rfloor$ and called the integer part, or floor, of $x$ ([[lem-integer-part]]).

[F5] The embeddings $\mathbb{N}\to\mathbb{Z}\to\mathbb{Q}\to\mathbb{R}$ are injective and preserve $0$, $1$, addition, multiplication and order; $\mathbb{Z}$ is a totally ordered commutative ring; and every integer $\ge0$ is the image of a unique natural, that map being injective and order preserving ([[lem-nat-embeds-int]], [[lem-int-embeds-rat]], [[lem-rat-embeds-dense]], [[thm-int-ordered-ring]], [[def-integers]]).

[F6] For all $m,n\in\mathbb{N}$: $m<n$ exactly when $\sigma(m)\le n$; consequently there is no $k$ with $n<k<\sigma(n)$ ([[lem-nat-discrete]]).

[F7] In an ordered field the order is total and transitive ([[def-ordered-field]]), and translation invariance holds in the strict form: if $a<b$ then $a+c<b+c$ ([[lem-of-add-order]]).

## Verification

**Proof technique:** direct.

1.1 Three nonstrict consequences of [F7], each obtained by adjoining the equality case to a strict statement, are used below. (a) $t\le u$ exactly when $t+v\le u+v$: if $t<u$ then $t+v<u+v$ by [F7] and if $t=u$ then $t+v=u+v$, so $t+v\le u+v$; applying the same with $-v$ recovers $t\le u$. (b) $t\le u$ exactly when $-u\le-t$: translating by $v=-t-u$ carries the first to the second by (a), and translating by $t+u$ carries it back. (c) If $t\le u<w$ then $t<w$: for $t<u$ this is transitivity of the strict order and for $t=u$ it is immediate. [F7, algebra]

1.2 An integer $d$ with $d<1$ satisfies $d\le0$. The order of $\mathbb{Z}$ is total by [F5], so either $d\le0$ or $0<d$. In the second case $d\ge0$ and $d\ne0$, so [F5] presents $d$ as the image of a unique natural $j$, with $j\ne0$ because the embedding is injective and sends $0$ to $0$; then $0<j$, so [F6] with $m=0$ gives $\sigma(0)=1\le j$, and the embedding preserves order and $1$, so $1\le d$. That contradicts $d<1$ by trichotomy, leaving $d\le0$. [F5, F6, F7, algebra]

1.3 $\lfloor J(m)\rfloor=m$ for every integer $m$. Indeed $m\le J(m)<m+1$ holds because $J(m)$ is $m$ read in $\mathbb{R}$ and $0<1$ there, so the uniqueness clause of [F4] identifies $\lfloor J(m)\rfloor$ with $m$. [F4, F5, F7]

2.1 For every integer $m$ and real $x$: $J(m)\le x$ exactly when $m\le\lfloor x\rfloor$. If $m\le\lfloor x\rfloor$ then, since $\lfloor x\rfloor\le x$ by [F4] and $J$ preserves order by [F5], transitivity gives $J(m)\le x$. Conversely suppose $J(m)\le x$. By [F4] also $x<\lfloor x\rfloor+1$, so $m<\lfloor x\rfloor+1$ by step 1.1(c), and translating by $-\lfloor x\rfloor$ with [F7] turns this into $m-\lfloor x\rfloor<1$. Now $m-\lfloor x\rfloor$ is an integer by [F5], so step 1.2 gives $m-\lfloor x\rfloor\le0$, that is $m\le\lfloor x\rfloor$. [step 1.1, step 1.2, F4, F5, F7, algebra]

2.2 $\lceil J(m)\rceil=m$ for every integer $m$: $-m$ is an integer with $J(-m)=-J(m)$ by [F5], and step 1.3 gives $\lfloor J(-m)\rfloor=-m$, whence $\lceil J(m)\rceil=-\lfloor -J(m)\rfloor=-\lfloor J(-m)\rfloor=m$. [step 1.3, F5, F7, algebra]

3.1 $J$ and $\lfloor-\rfloor$ are monotone, and $J\dashv\lfloor-\rfloor$. That $J$ is monotone is part of [F5]. If $x\le y$ then $J(\lfloor x\rfloor)\le x\le y$ by [F4], so step 2.1 applied to the integer $\lfloor x\rfloor$ and the real $y$ gives $\lfloor x\rfloor\le\lfloor y\rfloor$; thus $\lfloor-\rfloor$ is monotone. The equivalence of step 2.1 is then exactly the condition in [F2] for $J\dashv\lfloor-\rfloor$, whose unit is $m\le\lfloor J(m)\rfloor$ and whose counit is $J(\lfloor x\rfloor)\le x$. [step 2.1, F2, F4, F5, F7]

3.2 For every integer $m$ and real $x$: $\lceil x\rceil\le m$ exactly when $x\le J(m)$. By step 1.1(b), $x\le J(m)$ exactly when $-J(m)\le-x$, and $-J(m)=J(-m)$ because $J$ preserves addition and $0$ by [F5]. Step 2.1, applied to the integer $-m$ and the real $-x$, converts $J(-m)\le-x$ into $-m\le\lfloor -x\rfloor$, and step 1.1(b) converts that into $-\lfloor -x\rfloor\le m$, which is $\lceil x\rceil\le m$. [step 1.1, step 2.1, F5, F7, algebra]

4.1 $\lceil-\rceil$ is monotone and $\lceil-\rceil\dashv J$. If $x\le y$ then $-y\le-x$ by step 1.1(b), so $\lfloor -y\rfloor\le\lfloor -x\rfloor$ by step 3.1, and step 1.1(b) gives $-\lfloor -x\rfloor\le-\lfloor -y\rfloor$, that is $\lceil x\rceil\le\lceil y\rceil$. With $J$ monotone by [F5], the equivalence of step 3.2 is the condition in [F2] for $\lceil-\rceil\dashv J$, whose unit is $x\le J(\lceil x\rceil)$ and whose counit is $\lceil J(m)\rceil\le m$. [step 3.1, step 3.2, F2, F5, F7]

5.1 Taking $\mathcal C=(\mathbb{Z},\le)$ and $\mathcal D=(\mathbb{R},\le)$ as thin categories by [F1], with $M=J$ and $L=\lceil-\rceil$, $R=\lfloor-\rfloor$, steps 3.1 and 4.1 supply the two adjunctions $L\dashv M$ and $M\dashv R$ required by [F3]. Hence $\lceil-\rceil\dashv J\dashv\lfloor-\rfloor$ is an adjoint triple. [step 3.1, step 4.1, F1, F3]

6.1 The counit of $J\dashv\lfloor-\rfloor$ and the unit of $\lceil-\rceil\dashv J$ are in general strict, while steps 1.3 and 2.2 make the other unit and counit equalities. For $x=\tfrac12$: $[F4]$ applied to $0\le\tfrac12<1$ gives $\lfloor x\rfloor=0$, so $J(\lfloor x\rfloor)=0<\tfrac12$; and applied to $-1\le-\tfrac12<0$ it gives $\lfloor -x\rfloor=-1$, so $\lceil x\rceil=1$ and $\tfrac12<1=J(\lceil x\rceil)$. [step 1.3, step 2.2, step 3.1, step 4.1, F4] ∎
