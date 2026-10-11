---
id: cex-the-shift-is-a-nonidentity-order-automorphism
kind: counterexample
title: "The shift $x\\mapsto x+1$ is a nonidentity order automorphism of $(\\mathbb{Z},<)$"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 4
deps: [lem-well-order-rigid, def-order-isomorphism, def-well-order, def-integers,
       def-int-order, thm-int-ordered-ring, thm-int-comm-ring,
       def-injection-surjection-bijection, def-int-operations,
       lem-nat-embeds-int, thm-omega-is-peano-system]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "A. Marks, Set Theory (Berkeley lecture notes, 2026)"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
      locator: "Section 3, Lemmas 3.2-3.3 (rigidity of wellorderings) and the surrounding discussion"
    - title: "J. T. Moore, MATH 6870: Set Theory (Cornell lecture notes)"
      url: "https://pi.math.cornell.edu/~justin/Limited2Cornell/lecture_notes_historic.pdf"
      locator: "Section 3 (order automorphisms of well ordered sets); Section 5 ($1+\\omega<\\omega+1$)"
verification:
  precheck: pass
---

## Statement refuted

**Refuted claim:** claims (a) and (c) of [[lem-well-order-rigid]] hold for every
total order, that is, totality in place of well-ordering suffices for both: (a)
every strictly increasing $f:W\to W$ satisfies $a\le f(a)$ for all $a\in W$, and
(c) the identity is the only order isomorphism $W\to W$.

The witness is $\mathbb{Z}$ with its usual order ([[def-int-order]]), a total
order that is not a well-order. The shift $\sigma(x)=x+1$ is an order
isomorphism $\mathbb{Z}\to\mathbb{Z}$ ([[def-order-isomorphism]]) with
$\sigma(x)\ne x$ for every $x$, so the identity is not the only order
automorphism and claim (c) fails. The shift $\tau(x)=x-1$ in the other direction
is strictly increasing and satisfies $\tau(x)<x$ for every $x$, so claim (a)
fails as well. In the proof of claim (a) the least-element property is applied
once, to the set of points moved down; here that set is all of $\mathbb{Z}$,
which has no least element, and this is exactly where the well-ordering
hypothesis is spent. No choice principle is used.

## Facts & Assumptions

**Given:** The integers $\mathbb{Z}$ with their order and ring operations, and the maps $\sigma(x)=x+1$, $\tau(x)=x-1$ on $\mathbb{Z}$.

[F1] Rigidity of well-orders, claims (a) and (c): if $(W,<)$ is a well-order and $f:W\to W$ is strictly increasing then $a\le f(a)$ for every $a\in W$; and the identity is the only order isomorphism $W\to W$ ([[lem-well-order-rigid]]).

[F2] Let $(P,\le_P)$ and $(Q,\le_Q)$ be posets; $f:P\to Q$ is an order embedding when $x\le_P y\iff f(x)\le_Q f(y)$, an order embedding is injective, and an order isomorphism is a surjective order embedding, equivalently a bijection with $x\le_P y\iff f(x)\le_Q f(y)$ ([[def-order-isomorphism]]).

[F3] A well-order is a total order in which every nonempty subset has a least element, and its strict part is irreflexive, transitive and trichotomous ([[def-well-order]]).

[F4] On representatives, $x\le y$ means $a+d\le b+c$ in $\mathbb{N}$, $x<y$ means $x\le y$ and $x\ne y$, and $0<[(a,b)]$ holds exactly when $b<a$ ([[def-int-order]]).

[F5] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$, compatible with addition: $x\le y$ implies $x+z\le y+z$ for all integers $x,y,z$; its strict part is irreflexive and transitive ([[thm-int-ordered-ring]]).

[F6] $(\mathbb{Z},+,\cdot,0,1)$ with the operations of [[def-int-operations]] is a commutative ring with multiplicative identity, where $0=[(0,0)]$, $1=[(1,0)]$, and every element has the additive inverse $-[(a,b)]=[(b,a)]$; thus $x+0=x$, $x+(-x)=0$, and addition is associative and commutative ([[thm-int-comm-ring]], [[def-int-operations]]).

[F7] The canonical embedding $n\mapsto[(n,0)]$ of $\mathbb{N}$ in $\mathbb{Z}$ is injective and preserves order; its image is exactly the set of nonnegative integers, so the image of $1$ is nonnegative and differs from the image of $0$, which is $0$ ([[lem-nat-embeds-int]]).

[F8] $1=\sigma(0)\ne0$ in $\mathbb{N}$ ([[thm-omega-is-peano-system]]).

[F9] $f:A\to B$ is injective when $f(x)=f(y)$ implies $x=y$, surjective when every $b\in B$ is $f(x)$ for some $x\in A$, and bijective when both ([[def-injection-surjection-bijection]]).

## Counterexample

**Proof technique:** direct.

1.1 The shift $\sigma$ preserves and reflects the strict order: for integers $x,y$ one has $x<y$ if and only if $x+1<y+1$. Adding $-1$ to $x+1<y+1$ gives $x<y$, and adding $1$ to $x<y$ gives $x+1<y+1$. [F5, F6]

1.2 The shift $\sigma$ is bijective: it is injective, since $x+1=y+1$ gives $x=(x+1)+(-1)=(y+1)+(-1)=y$; and it is surjective, since an arbitrary integer $y$ is $\sigma(y+(-1))=y+(-1)+1=y$. [F5, F6, F9]

1.3 $1\ne0$ and $-1<0$ in $\mathbb{Z}$: the integer $1$ is $[(1,0)]$ and lies in the image of the canonical embedding $n\mapsto[(n,0)]$, which consists of the nonnegative integers, so $0\le1$; and $1\ne0$ because that embedding is injective while $1\ne0$ in $\mathbb{N}$; hence $0<1$, and adding $-1$ to both sides gives $-1<0$. [F4, F5, F6, F7, F8]

1.4 The backward shift $\tau(x)=x-1$ is strictly increasing: for integers $x,y$ one has $x<y$ if and only if $x+(-1)<y+(-1)$, that is $\tau(x)<\tau(y)$, by adding $1$ or $-1$ to an inequality. [F5, F6]

2.1 The shift $\sigma$ is an order isomorphism of $\mathbb{Z}$ onto itself: it is a bijection by step 1.2 and satisfies $x<y\iff\sigma(x)<\sigma(y)$ by step 1.1, so also $x\le y\iff\sigma(x)\le\sigma(y)$, since $x\le y$ means $x<y$ or $x=y$ and $\sigma$ is injective. Moreover $\sigma(x)=x+1\ne x$ for every $x$: equality would give $1=0$ by adding $-x$ to both sides, contradicting step 1.3. [step 1.1, step 1.2, step 1.3, F2, F4, F6]

2.2 The backward shift $\tau$ is strictly increasing by step 1.4 and moves every point down: $\tau(x)=x+(-1)<x+0=x$ for every integer $x$, by adding $x$ to $-1<0$ from step 1.3. [step 1.3, step 1.4, F5, F6]

3.1 Both claims fail at the total order $(\mathbb{Z},<)$. Claim (c) of [F1] asserts that the identity is the only order isomorphism $\mathbb{Z}\to\mathbb{Z}$, but $\sigma$ is a nonidentity order isomorphism by step 2.1. Claim (a) asserts that every strictly increasing $f:\mathbb{Z}\to\mathbb{Z}$ satisfies $x\le f(x)$ for all $x$, but $\tau$ is strictly increasing by step 2.2 with $\tau(x)<x$, so $x\le\tau(x)$ fails for every $x$. In the proof of claim (a) the least element of $\{x:\tau(x)<x\}$ is used once; here $\{x:\tau(x)<x\}=\mathbb{Z}$, a total order with no least element, which is precisely why the well-ordering hypothesis cannot be dropped. The refuted claim that totality suffices for claims (a) and (c) is therefore false. [step 1.3, step 2.1, step 2.2, F1, F3, F4, F5] ∎

