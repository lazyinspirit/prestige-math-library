---
id: thm-nine-lemma-in-an-abelian-category
kind: theorem
title: "Nine lemma in an abelian category"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-half-nine-lemma,
       thm-degenerate-exactness-criteria,
       thm-chasing-rule-monicity-by-member-cancellation,
       thm-chasing-rule-epimorphy-detected-by-members,
       thm-chasing-rule-exactness-detected-by-members,
       def-equivalence-of-members,
       thm-member-equivalence-is-transitive,
       def-abelian-category,
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
    - title: "Peter Freyd, Abelian Categories, Lemma 2.65"
      url: "https://www.tac.mta.ca/tac/reprints/articles/3/tr3.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.2"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Statement

In a commutative $3 \times 3$ diagram in an abelian category, assume all three
columns and the middle row are short exact:

```tikzcd
0 \arrow[r] & A_1 \arrow[r] \arrow[d] & A_2 \arrow[r] \arrow[d] & A_3 \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & B_1 \arrow[r] \arrow[d] & B_2 \arrow[r] \arrow[d] & B_3 \arrow[r] \arrow[d] & 0 \\
0 \arrow[r] & C_1 \arrow[r] & C_2 \arrow[r] & C_3 \arrow[r] & 0.
```

Then the top row is short exact if and only if the bottom row is short exact.

## Facts & Assumptions

**Given:** The $3 \times 3$ diagram in the statement.

[L1] If the bottom two rows are short exact, then the top row is exact at its
first two nodes ([[lem-half-nine-lemma]]).

[L2] The opposite of an abelian category is abelian
([[thm-the-opposite-of-an-abelian-category-is-abelian]]).

[L3] Short exactness, monicity, epicity, and exactness are detected by the
standard member rules
([[thm-degenerate-exactness-criteria]],
[[thm-chasing-rule-monicity-by-member-cancellation]],
[[thm-chasing-rule-epimorphy-detected-by-members]],
[[thm-chasing-rule-exactness-detected-by-members]]).

[L4] The common-refinement construction for member equivalence puts finitely
many witness equalities on one epic domain, where hom-set subtraction is
defined
([[def-equivalence-of-members]], [[thm-member-equivalence-is-transitive]],
[[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Assume the bottom row is short exact. Applying [L1] to the given diagram shows that the top row is exact at its first two nodes. [L1, assume-hyp]

2.1 Write the horizontal maps as $a_1,a_2$, $b_1,b_2$, and $c_1,c_2$, and the vertical maps as $i_1,i_2,i_3$ and then $p_1,p_2,p_3$. It remains after step 1.1 to prove that $a_2$ is epic. Let $s$ be a member of $A_3$. Lift $i_3s$ along the epic map $b_2$ to a member $t$ of $B_2$. Exactness of the bottom row gives a member $u$ of $C_1$ with $c_1u\equiv p_2t$, and epicity of $p_1$ gives a member $y$ of $B_1$ with $p_1y\equiv u$. Then $$p_2b_1y=c_1p_1y\equiv c_1u\equiv p_2t.$$ By [L4], pass to one common epic refinement of all the preceding equivalences and put $w:=t-b_1y$. Then $p_2w=0$, $t=b_1y+w$, and $b_2t=i_3s$ there. Exactness of the second column gives a member $x$ of $A_2$ with $i_2x\equiv w$. Consequently $$i_3a_2x=b_2i_2x\equiv b_2w=b_2t\equiv i_3s.$$ Since $i_3$ is monic, $a_2x\equiv s$. Thus $a_2$ is epic by [L3], and the top row is short exact. [L3, L4, step 1.1, choose, construct, algebra]

3.1 For the converse, pass to the opposite category. After drawing its vertical arrows downward, the original top row is the bottom row and the original bottom row is the top row. Thus the implication proved in steps 1.1 and 2.1, applied in the abelian category from [L2], carries short exactness of the original top row to short exactness of the original bottom row. [L2, step 1.1, step 2.1, assume-hyp]

4.1 Hence, under the standing short-exactness of the middle row and all three columns, the top row is short exact if and only if the bottom row is short exact. [step 2.1, step 3.1] ∎
