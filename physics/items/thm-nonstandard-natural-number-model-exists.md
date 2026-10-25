---
id: thm-nonstandard-natural-number-model-exists
kind: theorem
title: "A countable nonstandard model has an element above all numerals"
status: published
origin: pipeline
deps: [def-nonstandard-natural-number-structure, thm-countable-first-order-compactness, thm-countable-first-order-completeness]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Moschovakis, Theorem 1J.5 pp45–46; Weiss–D’Mello, Theorem 3 p15, greater-than-numerals variant."
      url: https://www.math.ucla.edu/~ynm/lectures/lnl.pdf
proof_strategy: direct
---

## Statement

In ZF there is an at most countable nonempty model $M$ of $\operatorname{Th}(\mathcal N)$ in the fixed language $(0,S,<)$ and an element $b\in M$ such that $M\models\overline n<b$ for every standard $n<\omega$. The reduct $M$ is not isomorphic to the standard structure $\mathcal N=(\omega,0,S,<)$.

## Facts & Assumptions

**Given:** The standard natural-number structure and its externally defined sentence theory.

[F1] The language, complete semantic theory and numerals $\overline0=0$, $\overline{n+1}=S(\overline n)$ are those of [[def-nonstandard-natural-number-structure]].

[F2] A finitely satisfiable explicitly countable theory has an at most countable model. ([[thm-countable-first-order-compactness]])

## Proof

1.1 Add one fresh constant $c$ and put $T^*=\operatorname{Th}(\mathcal N)\cup\{\overline n<c:n<\omega\}$. For a finite subset, let $m$ be the largest index in its inequalities if any occur, and interpret $c$ by $m+1$ in $\mathcal N$. Then each required inequality is $n<m+1$, true since $n\le m$; every included sentence of the complete theory is true by definition. If no inequality occurs, interpret $c$ by $0$. Thus every finite subset has a model in the countable expanded signature. [F1]

2.1 F2 gives an at most countable $N\models T^*$. Let $M$ be its original-language reduct and $b=c^N$. Reducts keep all interpretations of the old symbols, so $M\models\operatorname{Th}(\mathcal N)$ and $M\models\overline n<b$ for every $n$. [F2, step 1.1]

3.1 If $h:\mathcal N\to M$ were an isomorphism, preservation of $0$ gives $h(0)=0^M$, and preservation of $S$ inductively gives $h(n)=\overline n^M$. Surjectivity would give $b=h(k)=\overline k^M$ for some $k$. But step 2.1 would then say $b<b$, contradicting $M\models\forall x\neg(x<x)$, a sentence true in $\mathcal N$ and therefore in its theory. Hence no isomorphism exists. [F1, step 2.1] ∎
