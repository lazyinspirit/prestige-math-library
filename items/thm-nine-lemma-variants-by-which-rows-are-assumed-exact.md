---
id: thm-nine-lemma-variants-by-which-rows-are-assumed-exact
kind: theorem
title: "Nine lemma variants by which rows are assumed exact"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-nine-lemma-in-an-abelian-category,
       thm-degenerate-exactness-criteria,
       thm-chasing-rule-monicity-by-member-cancellation,
       thm-chasing-rule-epimorphy-detected-by-members,
       thm-chasing-rule-exactness-detected-by-members,
       def-equivalence-of-members,
       thm-member-equivalence-is-transitive,
       def-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.2"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.5"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: frontier-24
---

## Statement

In the $3 \times 3$ short-exact-column diagram of the nine lemma:

1. if the bottom two rows are short exact, then the top row is short exact;
2. if the top two rows are short exact, then the bottom row is short exact;
3. if the top and bottom rows are short exact and the middle row is a complex,
   then the middle row is short exact.

## Facts & Assumptions

**Given:** A commutative $3 \times 3$ diagram whose three columns are short exact.

[L1] The nine lemma exchanges short exactness of the top and bottom rows when the middle row is short exact ([[thm-nine-lemma-in-an-abelian-category]]).

[L2] In a short exact sequence, the left map is monic, the right map is epic, and the middle node is exact ([[thm-degenerate-exactness-criteria]]).

[L3] Monicity, epicity, and exactness can be checked by member cancellation and
member lifting. Equivalent members have representatives on a common epic
domain, where hom-set subtraction is defined
([[thm-chasing-rule-monicity-by-member-cancellation]],
[[thm-chasing-rule-epimorphy-detected-by-members]],
[[thm-chasing-rule-exactness-detected-by-members]],
[[def-equivalence-of-members]], [[thm-member-equivalence-is-transitive]],
[[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 If the bottom two rows are short exact, then the standing hypotheses of [L1] are met, so the top row is short exact. [L1, assume-hyp]

1.2 If the top two rows are short exact, the same theorem [L1] applied after swapping the top and bottom rows shows that the bottom row is short exact. [L1, assume-hyp]

1.3 Assume the top and bottom rows are short exact and that the middle row is a complex. To prove exactness at $B_1$, let $x$ be a member of $B_1$ with image $0$ in $B_2$. Applying the right map of the first column gives $$c_1 p_1 x = p_2 b_1 x \equiv 0.$$ Since the bottom row is short exact, its left map $c_1$ is monic by [L2], so [L3] gives $p_1 x \equiv 0$. Exactness of the first column at $B_1$ gives a member $u$ of $A_1$ with $i_1 u \equiv x$. Then $$i_2 a_1 u = b_1 i_1 u \equiv b_1 x \equiv 0.$$ Because the second column is short exact, its left map $i_2$ is monic, so [L3] gives $a_1 u \equiv 0$. The top row is short exact, hence its left map is monic by [L2]; another use of [L3] gives $u \equiv 0$, and therefore $x \equiv 0$. Thus the middle-row map $B_1 \to B_2$ is monic. [L2, L3, given, construct, algebra]

1.4 Still under the same hypotheses, let $t$ be a member of $B_2$ with image $0$ in $B_3$. Because the bottom row is exact at $C_2$, there is a member $z$ of $C_1$ with $c_1 z \equiv p_2 t$ by [L3]. Since the first column is short exact, its right map is epic by [L2], so [L3] yields a member $x$ of $B_1$ with $p_1 x \equiv z$. Then $$p_2 b_1 x = c_1 p_1 x \equiv c_1 z \equiv p_2 t.$$ By [L3], pass to one common epic refinement of these equalities and the hypothesis $b_2t\equiv0$, and define $w:=t-b_1x$. Then $p_2w=0$, $b_2w=0$, and $t=b_1x+w$ on that domain. Exactness of the second column at $B_2$ gives a member $u$ of $A_2$ with $i_2 u \equiv w$ by [L3]. The middle row is a complex, so $$i_3 a_2 u = b_2 i_2 u \equiv b_2 w = 0.$$ Because the third column is short exact, $i_3$ is monic; [L3] gives $a_2 u \equiv 0$. Exactness of the top row at $A_2$ therefore gives a member $v$ of $A_1$ with $a_1 v \equiv u$ by [L3]. Hence $$w \equiv i_2 u \equiv i_2 a_1 v = b_1 i_1 v,$$ so $$t \equiv b_1(x + i_1 v).$$ This proves exactness of the middle row at $B_2$ by [L3]. [L2, L3, given, choose, construct, algebra]

1.5 Let $s$ be a member of $B_3$. Since the bottom row is short exact, its right map is epic by [L2], so [L3] gives a member $z$ of $C_2$ with $c_2 z \equiv p_3 s$. Since the second column is short exact, its right map is epic as well, choose a member $y$ of $B_2$ with $p_2 y \equiv z$. Then $$p_3 b_2 y = c_2 p_2 y \equiv c_2 z \equiv p_3 s.$$ By [L3], pass to one common epic refinement of these equalities and define $w:=s-b_2y$. Then $p_3w=0$ and $s=b_2y+w$ on that domain. Exactness of the third column at $B_3$ gives a member $u$ of $A_3$ with $i_3 u \equiv w$ by [L3]. Because the top row is short exact, its right map is epic by [L2], so [L3] gives a member $v$ of $A_2$ with $a_2 v \equiv u$. Therefore $$w \equiv i_3 u \equiv i_3 a_2 v = b_2 i_2 v,$$ and hence $$s \equiv b_2(y + i_2 v).$$ By [L3], the map $B_2 \to B_3$ is epic. [L2, L3, given, choose, construct, algebra]

2.1 Steps 1.3, 1.4, and 1.5 prove that the middle row is short exact. [L2, step 1.3, step 1.4, step 1.5]

3.1 These are exactly the three standard variants of the nine lemma distinguished by which rows are assumed exact. [step 1.1, step 1.2, step 2.1] ∎
