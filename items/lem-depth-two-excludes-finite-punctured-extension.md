---
id: "lem-depth-two-excludes-finite-punctured-extension"
kind: "lemma"
title: "depth two excludes finite punctured extension"
deps: ["def-total-ring-of-fractions", "thm-depth-lemma", "thm-depth-zero-associated-prime-criterion", "thm-support-and-annihilator-of-a-finite-module", "thm-nakayama-lemma"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "10.119.2 last proof paragraph, restricted finite-extension rigidity"
      url: "https://stacks.math.columbia.edu/tag/0BHZ"
provenance:
  statement: literature-derived
  proof: ai-altered
status: "draft"
origin: "pipeline"
proof_strategy: "Explicit algebraic derivation"
---

## Statement

Let $(R,\mathfrak m)$ be reduced Noetherian local with $\operatorname{depth}R\ge2$. If $R\subseteq B\subseteq Q(R)$ is a finite intermediate ring and $\operatorname{Supp}_R(B/R)\subseteq\{\mathfrak m\}$, then $B=R$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement. We work with the Axiom of Choice; cited dependent-choice and resolution-existence hypotheses are retained.

[F1] [[def-total-ring-of-fractions]]: For a nonzero commutative ring $R$, let $S$ be the set of its nonzerodivisors, meaning elements whose multiplication maps on $R$ are injective. Its **total ring of fractions** is $Q(R)=S^{-1}R$. The set $S$ is multiplicative since composites of injective multiplication maps are injective. The natural map $R\to Q(R)$ is injective: $a/1=0$ implies $sa=0$ for some $s\in S$, hence $a=0$. Set $Q(0)=0$. For a domain this recovers the fraction field; for a ring with zero divisors it need not be a field.

[F2] [[thm-depth-lemma]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and $0\to A\to B\to C\to0$ a short exact sequence of finite $R$-modules. With $a=\operatorname{depth}_R(A)$, $b=\operatorname{depth}_R(B)$, and $c=\operatorname{depth}_R(C)$, $$b\ge\min\{a,c\},\qquad a\ge\min\{b,c+1\},\qquad c\ge\min\{a-1,b\}.$$ The last inequality is vacuous when $a=0$.

[F3] [[thm-depth-zero-associated-prime-criterion]]: Let $(R,\mathfrak m)$ be a Noetherian local ring and let $M\ne0$ be a finite $R$-module. Then $$\operatorname{depth}(M)=0\quad\Longleftrightarrow\quad \mathfrak m\in\operatorname{Ass}_R(M).$$

[F4] [[thm-support-and-annihilator-of-a-finite-module]]: If $M$ is a finitely generated left $R$-module, then $$ \operatorname{Supp}_R(M)=\{\mathfrak p : \operatorname{Ann}_R(M)\subseteq\mathfrak p\}. $$

[F5] [[thm-nakayama-lemma]]: Assume the Axiom of Choice. Let $R$ be a commutative ring, let $I \trianglelefteq R$ satisfy $I \subseteq J(R)$, and let $M$ be a finitely generated left $R$-module. If $IM=M$, then $M=0$.

## Proof

1.1 Choose the first element $x\in\mathfrak m$ of an $R$-regular sequence of length two. It is a unit in $Q(R)$, so it acts injectively on $B$. Since $B$ is nonzero finite and $x\in\mathfrak m$, Nakayama gives $B/xB\ne0$, hence $\operatorname{depth}_RB\ge1$. Applied to $0\to R\to B\to C\to0$, the depth lemma gives $\operatorname{depth}C\ge\min(\operatorname{depth}R-1,\operatorname{depth}B)\ge1$ if $C\ne0$. [F1, F2, F5]

2.1 If $C\ne0$ and its support is contained in the closed point, the support-annihilator theorem gives $\sqrt{\operatorname{Ann}C}=\mathfrak m$. Finitely many generators of $\mathfrak m$ each have a power in the annihilator; expanding monomials gives $\mathfrak m^NC=0$ for some $N$. A last nonzero power $\mathfrak m^{j}C$ contains a nonzero element killed by $\mathfrak m$, making $\mathfrak m$ associated and $\operatorname{depth}C=0$. This contradicts the preceding bound. Thus $C=0$ and $B=R$, including the case of empty support. [F4, F3, step 1.1, algebra] ∎
