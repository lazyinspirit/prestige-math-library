---
id: thm-four-lemma-in-an-abelian-category
kind: theorem
title: "Four lemma in an abelian category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-chasing-rule-monicity-by-member-cancellation,
       thm-chasing-rule-epimorphy-detected-by-members,
       thm-chasing-rule-exactness-detected-by-members,
       def-equivalence-of-members,
       thm-member-equivalence-is-transitive,
       def-abelian-category]
justified_by: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.19"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-24
---

## Statement

Consider a commutative diagram in an abelian category with exact rows

```tikzcd
W \arrow[r] \arrow[d, "\alpha"'] & X \arrow[r] \arrow[d, "\beta"'] & Y \arrow[r] \arrow[d, "\gamma"'] & Z \arrow[d, "\delta"'] \\
W' \arrow[r] & X' \arrow[r] & Y' \arrow[r] & Z'.
```

Then:

1. if $\alpha$ and $\gamma$ are epic and $\delta$ is monic, then $\beta$ is
   epic;
2. if $\beta$ and $\delta$ are monic and $\alpha$ is epic, then $\gamma$ is
   monic.

## Facts & Assumptions

**Given:** The commutative exact-row diagram in the statement.

[L1] Monicity is equivalent to cancellation on members ([[thm-chasing-rule-monicity-by-member-cancellation]]).

[L2] Epicity is equivalent to the member-lifting property ([[thm-chasing-rule-epimorphy-detected-by-members]]).

[L3] Exactness at a node is equivalent to the member-lifting condition ([[thm-chasing-rule-exactness-detected-by-members]]).

[L4] The common-refinement construction for member equivalence puts finitely
many witness equalities on one epic domain, where hom-set subtraction is
defined
([[def-equivalence-of-members]], [[thm-member-equivalence-is-transitive]],
[[def-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Write the top row as $W\xrightarrow{i}X\xrightarrow{j}Y\xrightarrow{p}Z$ and the bottom row as $W'\xrightarrow{i'}X'\xrightarrow{j'}Y'\xrightarrow{p'}Z'$. Assume that $\alpha$ and $\gamma$ are epic and that $\delta$ is monic. To prove that $\beta$ is epic, let $x'$ be a member of $X'$. Since $\gamma$ is epic, [L2] gives a member $y$ of $Y$ with $\gamma y \equiv j' x'$. Then $$\delta p y = p' \gamma y \equiv p' j' x' \equiv 0.$$ Because $\delta$ is monic, [L1] gives $p y \equiv 0$. Exactness of the top row at $Y$ now gives a member $x_0$ of $X$ with $j x_0 \equiv y$ by [L3]. [L1, L2, L3, assume-hyp, construct]

1.2 Assume instead that $\beta$ and $\delta$ are monic and that $\alpha$ is epic. To prove that $\gamma$ is monic, let $y$ and $y'$ be members of $Y$ with $\gamma y \equiv \gamma y'$. Then $$ \delta p y = p' \gamma y \equiv p' \gamma y' = \delta p y', $$ so [L1] gives $p y \equiv p y'$. By [L4], replace $y$ and $y'$ by representatives on one common epic refinement of the witnesses for both equalities and define $t:=y-y'$. Then $\gamma t=pt=0$ and $y=y'+t$ on that domain. Exactness of the top row at $Y$ gives a member $x$ of $X$ with $j x \equiv t$ by [L3]. [L1, L3, L4, assume-hyp, choose, construct, algebra]

2.1 From step 1.1 we get $$j' \beta x_0 = \gamma j x_0 \equiv \gamma y \equiv j' x'.$$ By [L4], replace $\beta x_0$ and $x'$ by representatives on a common epic domain and define $z':=x'-\beta x_0$. Then $j'z'=0$ and $x'=\beta x_0+z'$ on that domain. Exactness of the bottom row at $X'$ gives a member $w'$ of $W'$ with $i' w' \equiv z'$ by [L3], and epicity of $\alpha$ gives a member $w$ of $W$ with $\alpha w \equiv w'$ by [L2]. Therefore $$ \beta(x_0+i w)\equiv \beta x_0+i'\alpha w\equiv \beta x_0+i' w'\equiv \beta x_0+z'\equiv x'. $$ So every member of $X'$ lifts along $\beta$, and [L2] makes $\beta$ epic. [L2, L3, L4, step 1.1, choose, construct, algebra]

2.2 From step 1.2 we get $$ j' \beta x = \gamma j x \equiv \gamma t \equiv 0. $$ Exactness of the bottom row at $X'$ therefore gives a member $w'$ of $W'$ with $i' w' \equiv \beta x$ by [L3]. Because $\alpha$ is epic, [L2] gives a member $w$ of $W$ with $\alpha w \equiv w'$. Then $$ \beta(x-i w)\equiv \beta x-i'\alpha w\equiv \beta x-i' w'\equiv 0. $$ Since $\beta$ is monic, [L1] yields $x \equiv i w$. Therefore $$ t \equiv j x \equiv j i w \equiv 0, $$ because the top row is a complex. So $y \equiv y'$, and [L1] makes $\gamma$ monic. [L1, L2, L3, step 1.2, algebra]

3.1 Therefore the four lemma holds in both the epic and the monic form stated above. [step 1.2, step 2.2] ∎
