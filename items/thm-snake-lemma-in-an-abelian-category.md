---
id: thm-snake-lemma-in-an-abelian-category
kind: theorem
title: "Snake lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       thm-the-connecting-morphism-exists-and-is-unique,
       thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each,
       thm-exactness-of-kernel-and-cokernel-sequences-under-endpoint-hypotheses,
       thm-chasing-rule-the-subtraction-surrogate,
       thm-chasing-rule-exactness-detected-by-members,
       thm-the-opposite-of-an-abelian-category-is-abelian]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-30
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Lemma VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.17(2)"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

For snake data

```tikzcd
0 \arrow[r] & A \arrow[r, "i"] \arrow[d, "f"'] & B \arrow[r, "p"] \arrow[d, "g"'] & C \arrow[r] \arrow[d, "h"'] & 0 \\
0 \arrow[r] & A' \arrow[r, "i'"'] & B' \arrow[r, "p'"'] & C' \arrow[r] & 0
```

there is an exact sequence
$$0 \to \ker(f) \to \ker(g) \to \ker(h) \xrightarrow{\delta} \operatorname{coker}(f) \to \operatorname{coker}(g) \to \operatorname{coker}(h) \to 0,$$
where $\delta$ is the connecting morphism of
[[thm-the-connecting-morphism-exists-and-is-unique]].

## Facts & Assumptions

**Given:** The snake-data diagram in the statement.

[L1] The connecting morphism exists and is unique
([[thm-the-connecting-morphism-exists-and-is-unique]]).

[L2] The kernel row is exact at its first two nodes, and the cokernel row is
exact at its last two nodes
([[thm-the-kernel-row-and-cokernel-row-of-a-morphism-of-short-exact-sequences-are-exact-at-two-nodes-each]]).

[L3] The subtraction surrogate produces a member mapping to zero from two
members with the same image ([[thm-chasing-rule-the-subtraction-surrogate]]).

[L4] Exactness at a node is equivalent to the member-lifting condition
([[thm-chasing-rule-exactness-detected-by-members]]).

[L5] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the induced kernel row
$$0 \to \ker(f) \to \ker(g) \to \ker(h)$$
is exact at $\ker(f)$ and at $\ker(g)$, while the induced cokernel row
$$\operatorname{coker}(g) \to \operatorname{coker}(h) \to 0$$
is exact at $\operatorname{coker}(g)$ and at $\operatorname{coker}(h)$. Thus only exactness at $\ker(h)$ and at $\operatorname{coker}(f)$ remains. [L2, given]

2.1 Let $k_h:K \to C$ be a kernel of $h$, let $q_f:A' \to Q$ be a cokernel of $f$, and use [L1] to form the pullback object $P$, the map $\pi:P \to K$, the map $\pi':P \to B$, and the connecting morphism $\delta:K \to Q$ with $$\iota \delta \pi = \iota' g \pi'.$$ The proof of [L1] gives that $\pi$ is epic. [L1, step 1.1, construct]

3.1 First, $\delta$ kills the image of $\ker(g) \to \ker(h)$. Indeed, a member of $\ker(g)$ factors through the pullback $P$, and the defining identity of step 2.1 then gives $\iota \delta g' = 0$. Since $\iota$ is monic in the pushout square used to define $\delta$, this implies $\delta g' = 0$. [L1, step 2.1, construct, algebra]

3.2 Conversely, let $t$ be a member of $\ker(h)$ with $\delta t \equiv 0$. Because $\pi$ is epic, lift $t$ to a member $n$ of $P$ with $\pi n \equiv t$. Writing $a:P \to A'$ for the map from the proof of [L1], we have $$q_f a n = \delta \pi n \equiv \delta t \equiv 0.$$ Exactness of $$A \xrightarrow{f} A' \xrightarrow{q_f} Q$$ at $A'$ gives a member $x$ of $A$ with $f x \equiv a n$ by [L4]. The equality $i' a = g \pi'$ from the construction of $a$ therefore gives $$g \pi' n \equiv i' f x = g i x.$$ Applying the subtraction surrogate [L3] to $\pi' n$ and $i x$, we obtain a member $z$ of $B$ with $g z \equiv 0$ and $$p z \equiv p \pi' n - p i x = k_h \pi n \equiv k_h t.$$ Exactness of the top row at $B$ gives a member $y$ of $\ker(g)$ mapping to $z$, and then exactness at $\ker(h)$ follows because $k_h$ is monic. Hence every member in $\ker(\delta)$ lies in the image of $\ker(g) \to \ker(h)$. [L1, L3, L4, step 2.1, construct, algebra]

4.1 By [L5], the opposite of an abelian category is abelian. Applying step 3.2 there to the opposite snake diagram proves exactness at $\operatorname{coker}(f)$ in the original category. [L5, step 3.2]

5.1 Therefore the full six-term sequence displayed in the statement is exact. [step 1.1, step 3.1, step 3.2, step 4.1] ∎
