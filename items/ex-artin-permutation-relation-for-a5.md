---
id: ex-artin-permutation-relation-for-a5
kind: example
title: "The $A_5$ permutation relation already needs a denominator"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-artin-cyclic-permutation-relation, thm-frobenius-formula-for-induced-characters]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Tammo tom Dieck, Representation Theory, Problem 1 after Section 4.5"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Kay Yang, Rational Valued Characters, Theorem 12"
      url: "https://www.math.toronto.edu/murnaghan/courses/mat445/kayyang.pdf"
---

## Example

Let $G=A_5$, and let $C_1$, $C_2$, $C_3$, and $C_5$ be cyclic subgroups of
orders $1$, $2$, $3$, and $5$, respectively. Then

$$\operatorname{Ind}_{C_5}^{A_5}1_{C_5}+\operatorname{Ind}_{C_3}^{A_5}1_{C_3}+\operatorname{Ind}_{C_2}^{A_5}1_{C_2}-\operatorname{Ind}_{C_1}^{A_5}1_{C_1}=2\cdot1_{A_5}.$$

Dividing by $2$ shows that the trivial character of $A_5$ is not, in general,
an integral combination of cyclic permutation characters.

## Facts & Assumptions

**Given:** The alternating group $A_5$.

[F1] The Artin permutation relation expresses a positive multiple of $1_G$ as an integral combination of permutation characters induced from cyclic subgroups ([[lem-artin-cyclic-permutation-relation]]).

[F2] Frobenius' formula computes induced character values ([[thm-frobenius-formula-for-induced-characters]]).

[A1] The conjugacy classes of $A_5$ have representatives $1$, $\tau=(12)(34)$, $\sigma=(123)$, $\rho=(12345)$, and $\rho^2=(13524)$ of sizes $1$, $15$, $20$, $12$, and $12$.

## Verification

**Proof technique:** direct.

1.1 By [A1], the numbers of cyclic subgroups of orders $2$, $3$, and $5$ are $15$, $20/2=10$, and $(12+12)/4=6$, because each subgroup of order $2$, $3$, or $5$ has $1$, $2$, or $4$ generators. Hence their normalizers have orders $60/15=4$, $60/10=6$, and $60/6=10$. [A1, given, algebra]

2.1 Put $U_n:=\operatorname{Ind}_{C_n}^{A_5}1_{C_n}$. Frobenius' formula [F2] gives $U_1(1)=60$, $U_2(1)=30$, $U_3(1)=20$, and $U_5(1)=12$. If $g\in\{\tau,\sigma,\rho,\rho^2\}$, then $U_n(g)=0$ unless $g$ has order $n$. For an element whose order is $n$, the same formula counts $|N_{A_5}(C_n)|/|C_n|=2$ fixed cosets, so $U_2(\tau)=2$, $U_3(\sigma)=2$, and $U_5(\rho)=U_5(\rho^2)=2$, while all other nonidentity values among these four characters are $0$. [F2, step 1.1, algebra]

3.1 Therefore the character $U_5+U_3+U_2-U_1$ has value $12+20+30-60=2$ at the identity, and also value $2$ on each of the four nontrivial conjugacy classes from step 2.1. So it is the constant class function $2=2\cdot1_{A_5}$. This is the concrete $A_5$ instance promised by [F1]. [F1, step 2.1, algebra]

4.1 If $1_{A_5}$ were an integral linear combination of cyclic permutation characters, then evaluating that combination on $\tau$ would give $1$ as an integer combination of the values from step 2.1. But every cyclic permutation character of $A_5$ takes value either $0$ or $2$ on $\tau$, so any such integral combination would be even. This contradiction shows that the denominator $2$ is genuinely unavoidable. [step 2.1, step 3.1, algebra] ∎
