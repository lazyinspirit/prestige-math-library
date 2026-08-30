---
id: thm-weak-four-lemma-with-the-exactness-hypotheses-named
kind: theorem
title: "Weak four lemma with the exactness hypotheses named"
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
       def-abelian-category]
justified_by: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Exercise 1.3.3"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
    - title: "Saunders Mac Lane, Homology, Chapter XII, Section 3"
      url: "https://link.springer.com/book/10.1007/978-3-642-62029-4"
pipeline_run: frontier-24
---

## Statement

In the four-term commutative diagram of the four lemma, the two conclusions
already follow from exactness at the four middle nodes that are actually used:

1. exactness at $X$, $Y$, $X'$, and $Y'$, together with $\alpha,\gamma$ epic
   and $\delta$ monic, implies $\beta$ epic;
2. exactness at $X$, $Y$, $X'$, and $Y'$, together with $\beta,\delta$ monic
   and $\alpha$ epic, implies $\gamma$ monic.

## Facts & Assumptions

**Given:** The four-term commutative diagram underlying the four lemma.

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

1.1 Write the top row as $W\xrightarrow{i}X\xrightarrow{j}Y\xrightarrow{p}Z$ and the bottom row as $W'\xrightarrow{i'}X'\xrightarrow{j'}Y'\xrightarrow{p'}Z'$. Assume that exactness holds at $X$, $Y$, $X'$, and $Y'$, and that $\alpha$ and $\gamma$ are epic while $\delta$ is monic. Let $x'$ be a member of $X'$. By epicity of $\gamma$ and [L2], choose a member $y$ of $Y$ with $\gamma y \equiv j' x'$. Then $$ \delta p y = p' \gamma y \equiv p' j' x' \equiv 0, $$ so monicity of $\delta$ and [L1] give $p y \equiv 0$. Exactness at $Y$ gives a member $x_0$ of $X$ with $j x_0 \equiv y$ by [L3]. [L1, L2, L3, assume-hyp, construct]

1.2 Assume instead that exactness holds at $X$, $Y$, $X'$, and $Y'$, that $\beta$ and $\delta$ are monic, and that $\alpha$ is epic. Let $y$ and $y'$ be members of $Y$ with $\gamma y \equiv \gamma y'$. Then $$ \delta p y = p' \gamma y \equiv p' \gamma y' = \delta p y', $$ so [L1] gives $p y \equiv p y'$. By [L4], replace $y$ and $y'$ by representatives on one common epic refinement of the witnesses for both equalities and define $t:=y-y'$. Then $\gamma t=pt=0$ and $y=y'+t$ on that domain. Exactness at $Y$ gives a member $x$ of $X$ with $j x \equiv t$ by [L3]. [L1, L3, L4, assume-hyp, choose, construct, algebra]

2.1 Now $$ j' \beta x_0 = \gamma j x_0 \equiv \gamma y \equiv j' x'. $$ By [L4], replace $\beta x_0$ and $x'$ by representatives on a common epic domain and define $z':=x'-\beta x_0$. Then $j'z'=0$ and $x'=\beta x_0+z'$ on that domain. Exactness at $X'$ gives a member $w'$ of $W'$ with $i' w' \equiv z'$ by [L3], and epicity of $\alpha$ gives a member $w$ of $W$ with $\alpha w \equiv w'$ by [L2]. Therefore $$ \beta(x_0+i w)\equiv \beta x_0+i'\alpha w\equiv \beta x_0+i' w'\equiv \beta x_0+z'\equiv x'. $$ So [L2] makes $\beta$ epic. [L2, L3, L4, step 1.1, choose, construct, algebra]

2.2 From step 1.2 we get $$ j' \beta x = \gamma j x \equiv \gamma t \equiv 0. $$ Exactness at $X'$ gives a member $w'$ of $W'$ with $i' w' \equiv \beta x$ by [L3]. Since $\alpha$ is epic, choose $w$ in $W$ with $\alpha w \equiv w'$ by [L2]. Then $$ \beta(x-i w)\equiv \beta x-i'\alpha w\equiv \beta x-i' w'\equiv 0. $$ Because $\beta$ is monic, [L1] yields $x \equiv i w$, and therefore $$ t \equiv j x \equiv j i w \equiv 0. $$ So $y \equiv y'$, and [L1] makes $\gamma$ monic. [L1, L2, L3, step 1.2, algebra]

3.1 Hence the weak four lemma follows from the named middle-node exactness hypotheses alone. [step 1.2, step 2.2] ∎
