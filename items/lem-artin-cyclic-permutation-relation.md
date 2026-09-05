---
id: lem-artin-cyclic-permutation-relation
kind: lemma
title: "A positive integer multiple of the trivial character is an integral combination of cyclic permutation characters"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-cyclic-generator-class-functions-by-moebius-inversion, thm-frobenius-formula-for-induced-characters, thm-transitivity-of-induction-for-finite-groups]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Proposition (4.5.1)"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Janos Kramar, Artin's and Brauer's Theorems on Induced Characters, the displayed identity in Section 2"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/artinbrauer.pdf"
    - title: "Kay Yang, Rational Valued Characters, Theorem 12 and Corollary 4"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/kayyang.pdf"
---

## Statement

Let $G$ be a finite group. Then there is an integral linear combination of
characters induced from trivial characters of cyclic subgroups whose value is
$|G|1_G$. Equivalently,

$$|G|1_G=\sum_i a_i\,\operatorname{Ind}_{C_i}^G1_{C_i}$$

for cyclic subgroups $C_i\le G$ and integers $a_i$.

## Facts & Assumptions

**Given:** A finite group $G$ and an element $g\in G$.

[F1] For every finite cyclic subgroup $C\le G$, the generator-indicator class
function $\eta_C$ on $C$ is an integral linear combination of characters
$\operatorname{Ind}_D^C1_D$ with $D\le C$ cyclic
([[lem-cyclic-generator-class-functions-by-moebius-inversion]]).

[F2] Frobenius' formula computes induced character values
([[thm-frobenius-formula-for-induced-characters]]).

[F3] Induction is transitive along subgroup chains
([[thm-transitivity-of-induction-for-finite-groups]]).

## Proof

**Proof technique:** direct.

1.1 For each cyclic subgroup $C\le G$, let $\eta_C$ be the class function from [F1], and define $f:=\sum_{\substack{C\le G\\C\text{ cyclic}}}\operatorname{Ind}_C^G\eta_C$. The sum is finite because a finite group has only finitely many subgroups. [F1, given, construct]

2.1 By [F2], for each cyclic $C\le G$ one has $\operatorname{Ind}_C^G\eta_C(g)=\frac1{|C|}\sum_{\substack{x\in G\\x^{-1}gx\in C}}\eta_C(x^{-1}gx)$. Fix $x\in G$. Among all cyclic subgroups $C\le G$, exactly one of them can make the summand indexed by $x$ nonzero, namely $C=\langle x^{-1}gx\rangle$; for that subgroup, the value of $\eta_C$ is $|C|$. Therefore the double sum defining $f(g)$ contributes exactly $1$ for each $x\in G$, so $f(g)=|G|$. [F2, step 1.1, given, algebra]

3.1 Step 2.1 holds for every $g\in G$, hence $f=|G|1_G$ as class functions. Expanding each $\eta_C$ by [F1] and then using [F3] to replace $\operatorname{Ind}_C^G(\operatorname{Ind}_D^C1_D)$ by $\operatorname{Ind}_D^G1_D$ expresses $f$ as an integral linear combination of characters $\operatorname{Ind}_D^G1_D$ with $D$ cyclic. Thus $|G|1_G$ has the required form. [F1, F3, step 1.1, step 2.1, algebra] ∎
