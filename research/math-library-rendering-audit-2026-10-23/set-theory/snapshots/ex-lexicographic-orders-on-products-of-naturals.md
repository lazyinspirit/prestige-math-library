---
id: ex-lexicographic-orders-on-products-of-naturals
kind: example
title: "Lexicographic orders: $\\{0,1\\}\\times\\mathbb{N}$ and $\\mathbb{N}\\times\\mathbb{N}$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-well-order, def-initial-segment, def-order-isomorphism,
       lem-well-order-comparability, thm-mostowski-collapse, lem-ordinal-basics,
       def-natural-numbers, def-nat-order, thm-nat-linear-order,
       thm-well-ordering-principle, def-cartesian-product, def-ordered-pair,
       thm-the-characterising-property-of-ordered-pairs,
       lem-nat-order-is-membership, def-axiom-schema-of-separation]
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
      locator: "Section 5, Exercise 5.9, p. 25 (second coordinate has priority; swap coordinates to obtain the convention used here)"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 5, opening (ordinal arithmetic background; the lexicographic well-orders are verified locally)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Example

Order pairs of natural numbers lexicographically: $(m,n)\prec(m',n')$ if and
only if $m<m'$, or $m=m'$ and $n<n'$, where $<$ is the order of $\mathbb{N}$
([[def-nat-order]]) on the product built in [[def-cartesian-product]] with the
pairs of [[def-ordered-pair]]. Then:

**(i)** $W=\{0,1\}\times\mathbb{N}$ is well ordered by $\prec$, its initial
segment below $(1,0)$ is exactly $\{0\}\times\mathbb{N}$, and $n\mapsto(0,n)$ is
an order isomorphism
$(\mathbb{N},<)\to(W_{<(1,0)},\prec)$ ([[def-initial-segment]],
[[def-order-isomorphism]]); consequently $\mathbb{N}$ is order isomorphic to a
proper initial segment of $W$ and not to $W$, by the mutual exclusivity in
[[lem-well-order-comparability]], with unique witness $(1,0)$;

**(ii)** $\mathbb{N}\times\mathbb{N}$ is well ordered by $\prec$;

**(iii)** if $F$ is the collapsing isomorphism of [[thm-mostowski-collapse]] for
$W$, then $F(0,n)=n$ for every $n\in\mathbb{N}$ and $F(1,0)=\omega$, so the
order type of $W$ is an ordinal to which $\omega$ belongs
([[def-natural-numbers]]).

No choice principle is used.

## Facts & Assumptions

**Given:** The natural numbers $\mathbb{N}=\omega$ with the order of [[def-nat-order]], the product $\mathbb{N}\times\mathbb{N}$ and its subset $W=\{0,1\}\times\mathbb{N}$, and the lexicographic relation $\prec$ defined in the Example.

[F1] $z\in A\times B$ holds if and only if $z=(a,b)$ for some $a\in A$ and $b\in B$, and $(a,b)=\{\{a\},\{a,b\}\}$; in particular $\{0,1\}\times\mathbb{N}$ consists of the pairs $(0,n)$ and $(1,n)$ with $n\in\mathbb{N}$ ([[def-cartesian-product]], [[def-ordered-pair]]).

[F2] $(a,b)=(c,d)$ if and only if $a=c$ and $b=d$ ([[thm-the-characterising-property-of-ordered-pairs]]).

[F3] The order on $\mathbb{N}$ is a linear order: for all naturals $m,m'$ exactly one of $m<m'$, $m=m'$, $m'<m$ holds, and $<$ is transitive ([[def-nat-order]], [[thm-nat-linear-order]]).

[F4] A natural number is the set of its predecessors: $n=\{j\in\mathbb{N}:j<n\}$, with $0=\varnothing$ and $\mathbb{N}=\omega$ ([[def-natural-numbers]]).

[F5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[F6] For all naturals $m,n$: $m<n$ if and only if $m\in n$, and $0\in n$ whenever $n\ne0$; in particular $0<1$ since $1\ne0$ ([[lem-nat-order-is-membership]]).

[F7] A well-order on a set $X$ is a total order in which every nonempty $S\subseteq X$ has a least element; in the strict presentation it is irreflexive, transitive, trichotomous, and every nonempty subset has an element with nothing strictly below it in the subset ([[def-well-order]]).

[F8] For a well-order $(X,<)$ and $a\in X$ the initial segment is $X_{<a}=\{x\in X:x<a\}$ ([[def-initial-segment]]).

[F9] An order isomorphism between posets is a surjective order embedding, equivalently a bijection $f$ with $x\le y\iff f(x)\le f(y)$ ([[def-order-isomorphism]]).

[F10] For well-orders $V$ and $W$ exactly one of the following holds: $V\cong W$; $V\cong W_{<b}$ for a unique $b\in W$; or $V_{<a}\cong W$ for a unique $a\in V$ ([[lem-well-order-comparability]]).

[F11] Every well-order $(W,<)$ is order isomorphic to exactly one ordinal, its order type $\mathrm{ot}(W)$; the isomorphism is the collapsing map $F(a)=\{F(b):b<a\}$, it is unique, and its image is $\mathrm{ot}(W)$ ([[thm-mostowski-collapse]]).

[F12] A definable subcollection of a set is a set; in particular the set of first coordinates of a nonempty subset of $\mathbb{N}\times\mathbb{N}$ is a subset of $\mathbb{N}$ ([[def-axiom-schema-of-separation]]).

## Verification

**Proof technique:** direct.

1.1 The relation $\prec$ is irreflexive on $\mathbb{N}\times\mathbb{N}$: $(m,n)\prec(m,n)$ would require $m<m$, or $m=m$ and $n<n$, and both fail by trichotomy of the order of $\mathbb{N}$. [F1, F3]

1.2 The relation $\prec$ is transitive on $\mathbb{N}\times\mathbb{N}$: if $(m,n)\prec(m',n')$ and $(m',n')\prec(m'',n'')$, then the definition gives $m\le m'$ and $m'\le m''$. If $m<m'$ then $m<m''$ by transitivity of the order of $\mathbb{N}$ when $m'<m''$, and $m<m''$ directly when $m'=m''$, so $(m,n)\prec(m'',n'')$. If instead $m=m'$ and $n<n'$, then either $m'<m''$, giving $m<m''$ and hence $(m,n)\prec(m'',n'')$, or $m'=m''$ with $n'<n''$, giving $m=m''$ together with $n<n'<n''$ and hence $(m,n)\prec(m'',n'')$. [F1, F2, F3]

1.3 The initial segment of $W$ below $(1,0)$ is exactly $\{0\}\times\mathbb{N}$, and $e(n)=(0,n)$ is an order isomorphism of $(\mathbb{N},<)$ onto that initial segment: for a pair $(m,k)\in W$ the first coordinate satisfies $m\in\{0,1\}$, and $(m,k)\prec(1,0)$ means $m<1$, or $m=1$ and $k<0$. The case $m=0$ satisfies the first disjunct by $0<1$ from [F6]; the case $m=1$ satisfies neither disjunct, since $1<1$ is false in the total order and $k<0$ is impossible because $0\le k$ for every natural $k$ by [F6]. Hence $(m,k)\prec(1,0)$ if and only if $m=0$, which proves $W_{<(1,0)}=\{0\}\times\mathbb{N}$ by [F8]. The map $e$ is a bijection onto $\{0\}\times\mathbb{N}$ by [F1] and [F2], and for naturals $n,m$ one has $n\le m$ if and only if $e(n)\le e(m)$: if $n<m$ then $(0,n)\prec(0,m)$; if $n=m$ then $e(n)=e(m)$ by [F2]; conversely $e(n)\prec e(m)$ forces $n<m$, because the first coordinates are equal and the second coordinate decides, and $e(n)=e(m)$ forces $n=m$ by [F2]. Hence $e$ is an order isomorphism by [F9]. [F1, F2, F3, F6, F8, F9]

1.4 For every $n\in\mathbb{N}$ the predecessors of $(0,n)$ in $W$ are exactly the pairs $(0,j)$ with $j<n$: a pair $(m,k)\in W$ satisfies $(m,k)\prec(0,n)$ if and only if $m=0$ and $k<n$, since $m<0$ is impossible for $m\in\{0,1\}$ because $0\le m$ by [F6] and the order is total, and the cases $m=0$ and $m=1$ reduce to $k<n$ and to the false condition $1<0$. [F1, F3, F6, F8]

1.5 Claim (i), least elements: let $S\subseteq W$ be nonempty. If $S$ meets $\{0\}\times\mathbb{N}$, the set $A=\{n\in\mathbb{N}:(0,n)\in S\}$ is a nonempty subset of $\mathbb{N}$, hence has a least element $n_0$ by [F5], and $(0,n_0)$ is $\prec$-least in $S$: a member $(0,n)$ of $S$ has $n\in A$, so $n_0\le n$, while a member $(1,n)$ of $S$ satisfies $(0,n_0)\prec(1,n)$ because $0<1$ by [F6]. If $S$ does not meet $\{0\}\times\mathbb{N}$ then $S\subseteq\{1\}\times\mathbb{N}$ by [F1], the set $B=\{n\in\mathbb{N}:(1,n)\in S\}$ is nonempty and has a least element $k$ by [F5], and $(1,k)$ is $\prec$-least in $S$, every member of $S$ being $(1,n)$ with $k\le n$. [F1, F5, F6]

1.6 Claim (ii), least elements: let $S\subseteq\mathbb{N}\times\mathbb{N}$ be nonempty. The set of first coordinates $A=\{m\in\mathbb{N}:\exists n\in\mathbb{N}\ (m,n)\in S\}$ is a definable subcollection of $\mathbb{N}$, hence a set by [F12], and it is nonempty, so it has a least element $m_0$ by [F5]. The set $B=\{n\in\mathbb{N}:(m_0,n)\in S\}$ is then nonempty and has a least element $k$ by [F5], and $(m_0,k)$ is $\prec$-least in $S$: a member $(m,n)$ of $S$ has $m\ge m_0$, so if $m>m_0$ then $(m_0,k)\prec(m,n)$, while if $m=m_0$ then $n\in B$ and $n\ge k$, giving $(m_0,k)=(m,n)$ or $(m_0,k)\prec(m,n)$. [F3, F5, F12]

2.1 Trichotomy: given distinct pairs $(m,n)$ and $(m',n')$, totality of the order of $\mathbb{N}$ decides between $m<m'$, $m=m'$ and $m'<m$; the first gives $(m,n)\prec(m',n')$ and the third gives $(m',n')\prec(m,n)$. If $m=m'$, totality decides between $n<n'$, $n=n'$ and $n'<n$: the first gives $(m,n)\prec(m',n')$, the third gives $(m',n')\prec(m,n)$, and $n=n'$ together with $m=m'$ gives $(m,n)=(m',n')$ by [F2], contrary to distinctness. At most one alternative holds: equality together with either inequality substitutes to $(m,n)\prec(m,n)$, excluded by step 1.1; and $(m,n)\prec(m',n')$ together with $(m',n')\prec(m,n)$ is impossible, because combining the two defining disjunctions leaves the four alternatives $m<m'$ with $m'<m$; $m<m'$ with $m'=m$ and $n'<n$; $m=m'$ and $n<n'$ with $m'<m$; and $m=m'$ and $n<n'$ with $m'=m$ and $n'<n$, each contradicting trichotomy of the order of $\mathbb{N}$. [step 1.1, F2, F3]

2.2 Claim (iii), first part: $F(0,n)=n$ for every $n\in\mathbb{N}$. Otherwise the set of naturals $n$ with $F(0,n)\ne n$ is nonempty and has a least element $n_0$ by [F5]; then $F(0,j)=j$ for every $j<n_0$, and the defining equation of the collapse [F11] together with step 1.4 gives $F(0,n_0)=\{F(y):y\prec(0,n_0)\}=\{F(0,j):j<n_0\}=\{j:j<n_0\}=n_0$ by [F4], a contradiction. [step 1.4, F4, F5, F11]

2.3 Claim (i), the comparability consequence: step 1.3 exhibits an order isomorphism $\mathbb{N}\cong W_{<(1,0)}$, which is alternative (ii) of [F10] for the pair of well-orders $(\mathbb{N},<)$ and $(W,\prec)$ with witness $(1,0)$; by the mutual exclusivity in [F10] the alternative $\mathbb{N}\cong W$ fails, and the witness $(1,0)$ is unique. [step 1.3, F10]

3.1 Claim (iii), second part: $F(1,0)=\{F(y):y\prec(1,0)\}$ by the defining equation of [F11], and the predecessors of $(1,0)$ in $W$ are exactly the pairs $(0,n)$ with $n\in\mathbb{N}$ by step 1.3, so $F(1,0)=\{F(0,n):n\in\mathbb{N}\}=\{n:n\in\mathbb{N}\}=\mathbb{N}=\omega$ by step 2.2 and [F4]; since the image of $F$ is the order type $\mathrm{ot}(W)$, an ordinal, we have $\omega\in\mathrm{ot}(W)$. [step 1.3, step 2.2, F4, F11]

4.1 The relation $\prec$ is irreflexive and transitive on $\mathbb{N}\times\mathbb{N}$ by steps 1.1 and 1.2 and trichotomous by step 2.1, so it is the strict presentation of a total order; $W$ inherits it and every nonempty subset of $W$ has a least element by step 1.5, while every nonempty subset of $\mathbb{N}\times\mathbb{N}$ has one by step 1.6, so both are well ordered in the sense of [F7]. Step 1.3 identifies $W_{<(1,0)}$ and the isomorphism $n\mapsto(0,n)$, and step 2.3 records that $\mathbb{N}$ is isomorphic to that proper initial segment and to no other initial segment and not to $W$ itself. Steps 2.2 and 3.1 compute the stated collapse values: $F(0,n)=n$ and $F(1,0)=\omega$, so the order type of $W$ is an ordinal containing $\omega$. No object is selected at any stage: the least elements come from the well-ordering of $\mathbb{N}$ and the collapse from uniqueness, so no choice principle is used. [step 1.1, step 1.2, step 1.5, step 1.6, step 1.3, step 2.1, step 2.2, step 2.3, step 3.1, F7] ∎
