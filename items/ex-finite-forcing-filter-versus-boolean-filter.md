---
id: ex-finite-forcing-filter-versus-boolean-filter
kind: example
title: Forcing filters versus Boolean filters
status: published
origin: pipeline
deps: [def-forcing-preorder-compatibility-and-filter, lem-generated-boolean-filter-and-ultrafilter-tests]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-10
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Tressl, Stone Duality for Boolean Algebras, 2.2.2 and 2.3.3; local finite-order calculation"
      url: https://personalpages.manchester.ac.uk/staff/Marcus.Tressl/papers/StoneDualityBooleanAlgebras.pdf
---

## Example

For a nonempty set $S$, put $P=\mathcal P(S)\setminus\{\varnothing\}$, ordered by inclusion. A family $G\subseteq P$ is a forcing filter exactly when the same family, viewed in $\mathcal P(S)$, is a proper Boolean filter. For $S=\{0,1\}$ this gives three forcing filters, of which two are maximal.

## Facts & Assumptions

[F1] [[def-forcing-preorder-compatibility-and-filter]] requires a forcing filter to be nonempty, upward closed and internally downward directed.

[F2] [[lem-generated-boolean-filter-and-ultrafilter-tests]] uses finite-meet closure and identifies maximal proper Boolean filters by complementary-pair decision.

## Verification

**Given:** $S\ne\varnothing$ and $P$ as displayed.

1.1 If $G$ is a forcing filter, nonemptiness and upward closure put $S\in G$. For $A,B\in G$, directedness supplies a nonempty $C\in G$ with $C\subseteq A\cap B$. Thus $A\cap B$ is a condition, and upward closure puts it in $G$. This proves Boolean filter closure, while $\varnothing\notin G$ holds because $G\subseteq P$. Conversely a proper Boolean filter contains $S$, hence is nonempty, and its meet $A\cap B\in G$ is a nonempty common stronger condition. The two notions therefore agree here. [F1, F2, algebra]

2.1 For $S=\{0,1\}$ the conditions are $a=\{0\}$, $b=\{1\}$ and $t=\{0,1\}$, with $a,b\subseteq t$. A filter must contain $t$. It cannot contain both $a,b$, since $a\cap b=\varnothing$ and there is no common stronger condition. The three possibilities are consequently $\{t\}$, $\{a,t\}$ and $\{b,t\}$, and each satisfies F1. The last two are maximal; adding either singleton to $\{t\}$ gives one of them. [F1, step 1.1, algebra]

3.1 The maximal families decide each of the four complementary pairs in the Boolean algebra, as F2 also predicts. The empty family fails F1, although its upward and pairwise-directed conditions alone would be vacuous. If $S$ is a singleton there is only the condition $t$ and the filter $\{t\}$. If $S=\varnothing$, $P$ is empty and is excluded by the definition of forcing preorder; there is also no proper Boolean filter on $\mathcal P(S)$. Thus the correspondence spends no choice and supplies no nonexistent meets on arbitrary preorders. QED. [F1, F2, step 2.1, algebra]
