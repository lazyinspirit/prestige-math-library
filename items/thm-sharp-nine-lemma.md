---
id: thm-sharp-nine-lemma
kind: theorem
title: "Sharp nine lemma"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-chasing-rule-monicity-by-member-cancellation,
       thm-chasing-rule-epimorphy-detected-by-members,
       thm-chasing-rule-exactness-detected-by-members,
       def-equivalence-of-members,
       thm-member-equivalence-is-transitive,
       def-abelian-category,
       thm-degenerate-exactness-criteria]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Homology, Chapter XII, Section 3"
      url: "https://link.springer.com/book/10.1007/978-3-642-62029-4"
pipeline_run: frontier-24
---

## Statement

In a commutative $3 \times 3$ diagram, assume the three columns and the last
two rows are exact at their first two nodes. Then the first row is exact at its
first two nodes.

If, in addition, the first column and the middle row are short exact, then the
first row is short exact.

## Facts & Assumptions

**Given:** The commutative $3 \times 3$ diagram in the statement.

[L1] In a short exact sequence, the left map is monic, the right map is epic, and the middle node is exact ([[thm-degenerate-exactness-criteria]]).

[L2] Monicity and epicity are equivalent to member cancellation and member lifting ([[thm-chasing-rule-monicity-by-member-cancellation]], [[thm-chasing-rule-epimorphy-detected-by-members]]).

[L3] Exactness at a node is equivalent to the member-lifting condition ([[thm-chasing-rule-exactness-detected-by-members]]).

[L4] The common-refinement construction for member equivalence puts finitely
many witness equalities on one epic domain, where hom-set subtraction is
defined
([[def-equivalence-of-members]], [[thm-member-equivalence-is-transitive]],
[[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Write the horizontal maps of the three rows as $a_1,a_2$, $b_1,b_2$, and $c_1,c_2$, and the vertical maps of the three columns as $i_1,i_2,i_3$ from top to middle and $p_1,p_2,p_3$ from middle to bottom. Assume the three columns and the last two rows are exact at their first two nodes. Let $x$ and $y$ be members of $A_1$ with the same image in $A_2$. Commutativity gives the same image of $i_1 x$ and $i_1 y$ in $B_2$. Because the middle row is exact at its first node, $b_1$ is monic by [L1], so [L2] gives $i_1 x \equiv i_1 y$. Because the first column is exact at its first node, $i_1$ is monic, and another use of [L2] yields $x \equiv y$. Thus the top row is exact at $A_1$. [L1, L2, given, algebra]

1.2 Let $t$ be a member of $A_2$ with image $0$ in $A_3$. Commutativity gives that $i_2 t$ maps to $0$ in $B_3$. Exactness of the middle row at $B_2$ therefore yields a member $y$ of $B_1$ with $b_1 y \equiv i_2 t$ by [L3]. Applying the right map of the first column gives $$c_1 p_1 y = p_2 b_1 y \equiv p_2 i_2 t \equiv 0.$$ Because the bottom row is exact at its first node, $c_1$ is monic by [L1], so [L2] shows $p_1 y \equiv 0$. Exactness of the first column at $B_1$ now gives a member $z$ of $A_1$ with $i_1 z \equiv y$ by [L3]. Then $$i_2 a_1 z = b_1 i_1 z \equiv b_1 y \equiv i_2 t.$$ Since the second column is exact at its first node, $i_2$ is monic, so [L2] gives $a_1 z \equiv t$. Thus the top row is exact at $A_2$. [L1, L2, L3, given, construct, algebra]

2.1 Assume in addition that the first column and the middle row are short exact. By steps 1.1 and 1.2, the top row is already exact at its first two nodes, so only epicity of $a_2:A_2\to A_3$ remains. Let $s$ be a member of $A_3$. Because the middle row is short exact, $b_2$ is epic by [L1], so [L2] gives a member $t$ of $B_2$ with $b_2 t \equiv i_3 s$. Then $$ c_2 p_2 t = p_3 b_2 t \equiv p_3 i_3 s \equiv 0, $$ so exactness of the bottom row at $C_2$ gives a member $u$ of $C_1$ with $c_1 u \equiv p_2 t$ by [L3]. Since the first column is short exact, $p_1$ is epic by [L1], so [L2] gives a member $y$ of $B_1$ with $p_1 y \equiv u$. Now $$ p_2 b_1 y = c_1 p_1 y \equiv c_1 u \equiv p_2 t. $$ By [L4], pass to one common epic refinement of all the preceding equivalences and define $w:=t-b_1y$. Then $p_2w=0$, $t=b_1y+w$, and $b_2t=i_3s$ on that domain. Exactness of the second column at $B_2$ gives a member $x$ of $A_2$ with $i_2 x \equiv w$ by [L3]. Therefore $$ i_3 a_2 x = b_2 i_2 x \equiv b_2 w = b_2 t \equiv i_3 s. $$ Because the third column is exact at its first node, $i_3$ is monic, so [L2] gives $a_2 x \equiv s$. Hence $a_2$ is epic, and the top row is short exact. [L1, L2, L3, L4, step 1.1, step 1.2, choose, construct, algebra]

3.1 Hence the sharp nine lemma is the left-exact half together with the precise extra hypotheses needed to upgrade it to a short exact row. [step 1.1, step 1.2, step 2.1] ∎
