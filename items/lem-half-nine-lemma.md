---
id: lem-half-nine-lemma
kind: lemma
title: "Half nine lemma"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chasing-rule-monicity-by-member-cancellation,
       thm-chasing-rule-exactness-detected-by-members,
       thm-degenerate-exactness-criteria]
justified_by: []
landmark: false
proof_strategy: direct
  audited: 2026-08-30
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Peter Freyd, Abelian Categories, Section 2.6"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "Saunders Mac Lane, Homology, Chapter XII, Section 3"
      url: "https://link.springer.com/book/10.1007/978-3-642-62029-4"
pipeline_run: frontier-24
---

## Statement

Consider a commutative $3 \times 3$ diagram in an abelian category whose three
columns are short exact:

```tikzcd
0 \arrow[r] & A_1 \arrow[r] \arrow[d] & A_2 \arrow[r] \arrow[d] & A_3 \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & B_1 \arrow[r] \arrow[d] & B_2 \arrow[r] \arrow[d] & B_3 \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & C_1 \arrow[r] & C_2 \arrow[r] & C_3 \arrow[r] & 0.
```

If the bottom two rows are short exact, then the top row is exact at $A_1$ and
at $A_2$.

## Facts & Assumptions

**Given:** The commutative $3 \times 3$ diagram in the statement.

[L1] In a short exact sequence, the left map is monic and the middle node is exact ([[thm-degenerate-exactness-criteria]]).

[L2] Monicity is equivalent to cancellation on members ([[thm-chasing-rule-monicity-by-member-cancellation]]).

[L3] Exactness at a node is equivalent to the member-lifting condition ([[thm-chasing-rule-exactness-detected-by-members]]).

## Proof

**Proof technique:** direct.

1.1 Let $x$ and $y$ be members of $A_1$ with the same image in $A_2$. Commutativity gives the same image of $i_1 x$ and $i_1 y$ in $B_2$. Because the second row is short exact, its left map is monic by [L1], so [L2] gives $i_1 x \equiv i_1 y$. The first column is also short exact, so its left map is monic; applying [L2] again yields $x \equiv y$. Hence the top-row map $A_1 \to A_2$ is monic, so the top row is exact at $A_1$. [L1, L2, given, algebra]

1.2 Let $t$ be a member of $A_2$ with image $0$ in $A_3$. Commutativity gives that $i_2 t$ maps to $0$ in $B_3$. Exactness of the second row at $B_2$ therefore yields a member $y$ of $B_1$ with $b_1 y \equiv i_2 t$ by [L3]. Applying the right map of the first column gives $$c_1 p_1 y = p_2 b_1 y \equiv p_2 i_2 t \equiv 0.$$ Because the bottom row is short exact, its left map $c_1$ is monic by [L1], so [L2] shows $p_1 y \equiv 0$. Exactness of the first column at $B_1$ now gives a member $z$ of $A_1$ with $i_1 z \equiv y$ by [L3]. Then $$i_2 a_1 z = b_1 i_1 z \equiv b_1 y \equiv i_2 t.$$ Since the second column is short exact, $i_2$ is monic, so [L2] gives $a_1 z \equiv t$. Thus every member of $A_2$ killed by $A_2 \to A_3$ lifts from $A_1$, and the top row is exact at $A_2$ by [L3]. [L1, L2, L3, given, construct, algebra]

2.1 Therefore the top row is left exact whenever the bottom two rows and all three columns are short exact. [step 1.1, step 1.2] ∎
