---
id: cor-converse-of-lagrange-for-finite-abelian-groups
kind: corollary
title: "Converse of Lagrange for finite abelian groups: every divisor occurs as a subgroup order"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-divides-in-z, def-order-in-a-group, thm-strong-induction, lem-every-integer-above-one-has-a-prime-divisor, thm-cauchy-for-finite-abelian-groups, def-quotient-group, cor-quotient-of-an-abelian-group-is-abelian, cor-order-of-a-quotient-group, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Ch. 13, Exercise 6"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/13%3A_The_Structure_of_Groups/13.04%3A_Exercises"
pipeline_run: null
---
## Statement

Let $G$ be finite abelian and let $d$ be a positive divisor of $|G|$. Then $G$ has a subgroup of order $d$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $d, a \in \mathbb{Z}$ (def-integers). We say **$d$ divides $a$**, and write $d \mid a$, when $$a \;=\; d q \qquad \text{for some } q \in \mathbb{Z},$$ the product being that of def-int-operations. We write $d \nmid a$ when this fails. In this situation $d$ is called a **divisor**, or a **factor**, of $a$, and $a$ is called a **multiple** of $d$. **This is the relation the library already has, not a second one.** The published thm-division-algorithm-in-z introduces it in its own Statement, in these words: "We say $b$ **divides** $a$, written $b \mid a$, when $a = qb$ for some $q \in \mathbb{Z}$." Since multiplication on $\mathbb{Z}$ is commutative (thm-int-comm-ring), $a = qd$ and $a = dq$ are the same condition, so the definition above is that relation verbatim and the two usages agree everywhere. The theorem defined it for use on its own page and left the systematic theory to a later page; this is that page, and this item records the agreement rather than introducing a rival notion. **The remainder test.** For $b > 0$ the same Statement records that $b \mid a$ holds exactly when the remainder $r$ in $a = qb + r$, $0 \le r < b$, is $0$. **Boundary values.** Each is one line from the ring axioms, and each is used below, so all three are recorded here rather than assumed: - $d \mid 0$ for **every** integer $d$, including $d = 0$, since $0 = d \cdot 0$; - $0 \mid a$ only for $a = 0$, since $a = 0 \cdot q$ forces $a = 0$; - $1 \mid a$ and $a \mid a$ for every $a$, since $a = 1 \cdot a$ and $a = a \cdot 1$. ([[def-divides-in-z]]).

[L2] **The order of a finite group.** Let $G$ be a group (def-group) whose underlying set is finite (def-countable), so that $G \approx n$ for some $n \in \mathbb{N}$ (def-equinumerous). That natural number is unique: if $G \approx n$ and $G \approx n'$ then $n \approx n'$, since $\approx$ is symmetric and transitive, and then $n = n'$ by claim 3 of lem-pigeonhole. The **order of $G$** is that unique natural number, written $|G|$. A group is **infinite** when its underlying set is not finite, and $|G|$ is then not defined. **The order of an element.** Let $G$ be any group and $g \in G$, with natural powers as in def-group-power. Put $$S_g \;:=\; \{\, k \in \mathbb{N} \;:\; k \ge 1 \text{ and } g^{k} = e \,\} \;\subseteq\; \mathbb{N}.$$ - If $S_g \ne \varnothing$, the **order of $g$** is its least element, $$\operatorname{ord}(g) \;:=\; \min S_g \;\in\; \mathbb{N},$$ which exists by the well-ordering principle (thm-well-ordering-principle): every nonempty subset of $\mathbb{N}$ has a least element, and that element is unique, being $\le$ every element of $S_g$ and a member of it. We then say $g$ has **finite order**. - If $S_g = \varnothing$ we say $g$ has **infinite order** and write $\operatorname{ord}(g) = \infty$, where $\infty$ is a symbol reserved for this case and is not a natural number. No arithmetic is performed with it here. By construction $\operatorname{ord}(g) \ge 1$ whenever it is finite, and $\operatorname{ord}(g) = 1$ exactly when $g = e$, since $g^{1} = g$. **Every element of a finite group has finite order.** If $G$ is finite then $S_g \ne \varnothing$ for every $g \in G$, by lem-order-of-element-exists, so $\operatorname{ord}(g)$ is a natural number. ([[def-order-in-a-group]]).

[L3] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.) ([[thm-strong-induction]]).

[L4] Let $n \in \mathbb{Z}$ with $n > 1$, and put $$S \;:=\; \{\, d \in \mathbb{Z} \;:\; d \mid n \ \text{ and } \ d > 1 \,\}$$ (def-divides-in-z). Then $S$ is nonempty and has a least element $q$, and $q$ is prime (def-prime). In particular every integer greater than $1$ has a prime divisor. ([[lem-every-integer-above-one-has-a-prime-divisor]]).

[L5] Let $G$ be a finite abelian group and let $p$ be a prime dividing $|G|$. Then $G$ contains an element, and hence a subgroup, of order $p$. ([[thm-cauchy-for-finite-abelian-groups]]).

[L6] Let $G$ be a group and let $N\mathrel{\trianglelefteq}G$ be a normal subgroup (def-normal-subgroup). The **quotient group**, or **factor group**, $G/N$ has the left cosets $$G/N:=\{gN:g\in G\}$$ as its elements (def-coset, def-index), with product $$ (gN)(hN):=ghN.$$ Independence of the chosen representatives is proved in thm-coset-multiplication-well-defined-iff-normal, and the group axioms are proved in thm-quotient-group-laws. ([[def-quotient-group]]).

[L7] If $G$ is abelian and $N\mathrel{\trianglelefteq}G$, then $G/N$ is abelian. ([[cor-quotient-of-an-abelian-group-is-abelian]]).

[L8] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$ ([[cor-order-of-a-quotient-group]]).

[L9] Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved. For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve normality. ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 Use strong induction on $|G|$. If $d=1$, take the trivial subgroup; this also settles the trivial group. [given, L1, L2, L3, L4, L5, L6, L7, L8, L9]

2.1 For $d>1$, choose a prime $p\mid d$. Cauchy's theorem gives a subgroup $H\le G$ of order $p$, and $G/H$ is finite abelian of order $|G|/p$. [step 1.1]

3.1 The integer $d/p$ divides $|G/H|$, so induction gives a subgroup $K/H\le G/H$ of order $d/p$. [step 2.1]

4.1 By correspondence its full preimage $K\le G$ has $|K|=|H|\,|K/H|=d$. The case $d=|G|$ returns $K=G$. [step 3.1] ∎
