---
id: lem-a-wedge-on-a-product-index-category-is-dinatural-in-each-variable-separately
kind: lemma
title: "A wedge on a product index category is exactly a family dinatural in each variable separately"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-wedge-and-cowedge, def-dinatural-transformation, def-product-category, def-opposite-category, def-functor-and-contravariant-functor]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "G. M. Kelly, Basic Concepts of Enriched Category Theory (TAC Reprints 10), (2.7)-(2.9)"
      url: "https://tac.mta.ca/tac/reprints/articles/10/tr10.pdf"
    - title: "F. Loregian, (Co)end Calculus (arXiv:1501.02503v7), Theorem 1.3.1"
      url: "https://arxiv.org/pdf/1501.02503"
pipeline_run: null
---

## Statement

Let $\mathcal C$, $\mathcal D$ and $\mathcal E$ be categories and let

$$T:(\mathcal C\times\mathcal D)^{\mathrm{op}}\times(\mathcal C\times\mathcal D)\longrightarrow\mathcal E$$

be a functor. Reindexing the source as
$\mathcal C^{\mathrm{op}}\times\mathcal D^{\mathrm{op}}\times\mathcal C\times\mathcal D$
([[def-product-category]], [[def-opposite-category]]), write
$T(c_1,d_1,c_2,d_2)$ for its values, contravariant in the first two slots and
covariant in the last two.

Let $X$ be an object of $\mathcal E$ and let $\omega_{(c,d)}:X\to T(c,d,c,d)$ be
a family indexed by the objects of $\mathcal C\times\mathcal D$. Then a wedge on
a product index category is exactly a family dinatural in each variable
separately: $\omega$ is a wedge from $X$ to $T$
([[def-wedge-and-cowedge]]) if and only if

- for every $f:c\to c'$ in $\mathcal C$ and every object $d$ of $\mathcal D$,
  $\;T(1_c,1_d,f,1_d)\circ\omega_{(c,d)}=T(f,1_d,1_{c'},1_d)\circ\omega_{(c',d)}$, and
- for every $g:d\to d'$ in $\mathcal D$ and every object $c$ of $\mathcal C$,
  $\;T(1_c,1_d,1_c,g)\circ\omega_{(c,d)}=T(1_c,g,1_c,1_{d'})\circ\omega_{(c,d')}$.

The equivalence is asserted for **wedges**, whose source is the constant functor
at $X$. It is not asserted for a dinatural transformation between two varying
functors ([[def-dinatural-transformation]]).

## Facts & Assumptions

**Given:** A functor $T$ as displayed, an object $X$ of $\mathcal E$, and a family $\omega_{(c,d)}:X\to T(c,d,c,d)$.

[F2] A wedge from $d$ to $T$ is a dinatural transformation from a constant functor to $T$: a family $\omega_c:d\to T(c,c)$ with $T(1_c,f)\circ\omega_c=T(f,1_{c'})\circ\omega_{c'}$ for every morphism $f:c\to c'$ of the index category ([[def-wedge-and-cowedge]]).

[F3] A dinatural transformation $\alpha:P\to Q$ satisfies $Q(1_c,f)\circ\alpha_c\circ P(f,1_c)=Q(f,1_{c'})\circ\alpha_{c'}\circ P(1_{c'},f)$ for every $f:c\to c'$, the equation displayed by the hexagon ([[def-dinatural-transformation]]).

[F4] The product category has objects the pairs, componentwise identities, and componentwise composition $(f',g')\circ(f,g)=(f'\circ f,g'\circ g)$ ([[def-product-category]]).

[F6] The opposite category has the same objects and reverses every morphism: $\mathcal C^{\mathrm{op}}(A,B)=\mathcal C(B,A)$ ([[def-opposite-category]]).

[F5] A functor satisfies $F(1_A)=1_{FA},\qquad F(g\circ f)=Fg\circ Ff$ ([[def-functor-and-contravariant-functor]]).

## Proof

**Proof technique:** direct.

1.1 A morphism $(c,d)\to(c',d')$ of $\mathcal C\times\mathcal D$ is a pair $(f,g)$ with $f:c\to c'$ and $g:d\to d'$, and under the reindexing the wedge equation of [F2] at that morphism reads $T(1_c,1_d,f,g)\circ\omega_{(c,d)}=T(f,g,1_{c'},1_{d'})\circ\omega_{(c',d')}$, an equation between morphisms $X\to T(c,d,c',d')$. The two displayed conditions of the Statement are this equation at $(f,1_d)$ and at $(1_c,g)$. [F2, F3, F4, F6]

2.1 For the forward direction, if $\omega$ is a wedge then the equation of step 1.1 holds at every morphism of $\mathcal C\times\mathcal D$, in particular at $(f,1_d)$ and at $(1_c,g)$, which are the two displayed conditions. [F2, F3, step 1.1]

3.1 For the converse direction, assume the two conditions and fix $(f,g)$. Since $T$ acts independently in its four slots, $T(1_c,1_d,f,g)=T(1_c,1_d,1_{c'},g)\circ T(1_c,1_d,f,1_d)$, so the first condition rewrites the left-hand side of step 1.1 as $T(1_c,1_d,1_{c'},g)\circ T(f,1_d,1_{c'},1_d)\circ\omega_{(c',d)}=T(f,1_d,1_{c'},g)\circ\omega_{(c',d)}$. Factoring again as $T(f,1_d,1_{c'},g)=T(f,1_d,1_{c'},1_{d'})\circ T(1_{c'},1_d,1_{c'},g)$ and applying the second condition at $c'$ gives $T(f,1_d,1_{c'},1_{d'})\circ T(1_{c'},g,1_{c'},1_{d'})\circ\omega_{(c',d')}=T(f,g,1_{c'},1_{d'})\circ\omega_{(c',d')}$, which is the right-hand side of step 1.1. Factoring $(f,g)$ in the other order gives the same result, because each factorisation is a composite in $\mathcal C^{\mathrm{op}}\times\mathcal D^{\mathrm{op}}\times\mathcal C\times\mathcal D$ of the same pair of morphisms in different slots. At $f=1_c$ the first condition is the identity equation $\omega_{(c,d)}=\omega_{(c,d)}$ and the chain reduces to the second condition alone; at $g=1_d$ it reduces to the first, so the reduction is not circular. [F2, F3, F4, F5, step 1.1, step 2.1]

4.1 The two directions together give the asserted equivalence. What the converse direction spends is that the source of $\omega$ is the constant functor at $X$: each rewriting in step 3.1 composed a one-variable equation on the target side only, with no source-side action to carry along, and for a dinatural transformation between two varying functors there is such an action in every slot, so the corresponding statement does not follow from this argument and is not asserted. [F2, step 3.1] ∎

## Remarks

That dinaturality is fragile under exactly this kind of extension is not a suspicion: [[thm-dinatural-transformations-do-not-compose-in-general]] exhibits two dinatural transformations on this same page whose composite is not dinatural, and the mechanism there is also a source-side action that the constant case does not have.

Both factorisations of $(f,g)$ are checked because they are the two ways the joint equation can be reduced, and an argument that used only one of them would leave open whether the two one-variable conditions had to be imposed in a fixed order. They do not: the four slots act independently.
