---
id: thm-noetherian-induction
kind: theorem
title: "Noetherian induction: a property that passes to an ideal whenever it holds for every strictly larger ideal holds for every ideal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-noetherian-ring-ideal-characterisations]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "M. Hochster, Introduction to Commutative Algebra, Math 614, §2.2 Noetherian induction"
      url: "http://web.archive.org/web/20230308152844if_/https://dept.math.lsa.umich.edu/~hochster/615W22/614Lx.pdf"
    - title: "A. Altman and S. Kleiman, A Term of Commutative Algebra, 13th ed., §16"
      url: "https://web.mit.edu/18.705/www/13Ed.pdf"
pipeline_run: null
---

## Statement

Let $R$ be a Noetherian commutative ring and let $\mathcal P$ be a set of ideals
of $R$ with the following hereditary property: an ideal $I$ of $R$ belongs to
$\mathcal P$ whenever every ideal $J$ of $R$ with $I\subsetneq J$ belongs to
$\mathcal P$. Then $\mathcal P$ contains every ideal of $R$.

Read $\mathcal P$ as the ideals satisfying a property $P$: if $P(J)$ holds for
every ideal $J$ strictly containing $I$, and this for every $I$, then $P$ holds
for every ideal. The induction runs downward from the unit ideal, not upward
from $0$: the hypothesis applied to $I=R$ has empty content on the left, since
no ideal strictly contains $R$, so it asserts $R\in\mathcal P$ outright.

The proof uses the maximal condition of
[[thm-noetherian-ring-ideal-characterisations]] and therefore carries the same
dependent-choice cost as that condition.

## Facts & Assumptions

**Given:** A Noetherian commutative ring $R$ and a set $\mathcal P$ of ideals of $R$ with the hereditary property of the Statement. A member $I$ of a set $\Sigma$ of ideals is called maximal in $\Sigma$ when no member of $\Sigma$ strictly contains $I$.

[L1] For a Noetherian commutative ring, every nonempty set of ideals of $R$ has a maximal member with respect to inclusion ([[thm-noetherian-ring-ideal-characterisations]]).

[L2] The implication from the ascending chain condition to the maximal condition uses dependent choice; the remaining implications are choice-free ([[thm-noetherian-ring-ideal-characterisations]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose the conclusion fails, and let $\Sigma$ be the set of ideals of $R$ that do not belong to $\mathcal P$; the supposition says exactly that $\Sigma\neq\varnothing$. [assume-contra, given]

2.1 Since $R$ is Noetherian and $\Sigma$ is a nonempty set of ideals, it has a maximal member: fix an ideal $I\in\Sigma$ such that no member of $\Sigma$ strictly contains $I$. [L1, step 1.1]

3.1 Let $J$ be any ideal of $R$ with $I\subsetneq J$. Then $J\notin\Sigma$, for otherwise $J$ would be a member of $\Sigma$ strictly containing $I$, against the maximality fixed in the previous step. So $J\in\mathcal P$, and this holds for every ideal strictly containing $I$. [step 2.1]

4.1 The hereditary property, applied to the ideal $I$, therefore gives $I\in\mathcal P$. But $I\in\Sigma$ means $I\notin\mathcal P$. [step 3.1, given]

5.1 The supposition of step 1.1 is untenable, so $\Sigma=\varnothing$ and $\mathcal P$ contains every ideal of $R$. The only non-constructive input is the maximal element produced in step 2.1, whose dependent-choice cost is the one recorded by the cited characterisation; nothing else in the argument selects anything. [L2, step 2.1, step 4.1, discharge-contradiction] ∎

## Remarks

- **Where the induction starts.** There is no base case to verify separately. The hereditary hypothesis at $I=R$ quantifies over an empty collection of ideals, so it holds vacuously on the left and delivers $R\in\mathcal P$; the principle then works downward. An attempt to run the same scheme upward from the zero ideal would need a descending chain condition, which a Noetherian ring need not satisfy.

- **A property failing for every ideal is not a counterexample.** If $\mathcal P=\varnothing$ then $\Sigma$ is the set of all ideals, step 2.1 produces the maximal member $R$, and the hereditary hypothesis fails at $R$; so such a $\mathcal P$ never satisfies the hypothesis in the first place.

- **Maximal, not greatest, is what the argument needs.** Step 3.1 uses only that nothing in $\Sigma$ lies strictly above $I$. It never compares $I$ with an arbitrary member of $\Sigma$, which is what a greatest element would supply and what [[thm-noetherian-ring-ideal-characterisations]] does not provide.
