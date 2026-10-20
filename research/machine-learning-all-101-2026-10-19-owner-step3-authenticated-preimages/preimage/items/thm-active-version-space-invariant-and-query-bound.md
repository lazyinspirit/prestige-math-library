---
id: thm-active-version-space-invariant-and-query-bound
kind: theorem
title: "Finite-pool version-space invariant and query bound"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 5
deps:
  - alg-finite-pool-version-space-query
  - def-pool-based-realizable-active-learning
  - def-natural-logarithm
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "Steve Hanneke, Theory of Active Learning, version 1.1, §5.1"
      url: "https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf"
    - title: "Daniel Joseph Hsu, Algorithms for Active Learning, Chapter 2 §2.2.2"
      url: "https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf"
---

## Statement

Let $\mathcal H$ be a finite nonempty class of binary classifiers, let $U=(u_1,\ldots,u_m)$ be a finite ordered pool with $m\ge0$, let $h^*\in\mathcal H$, let the deterministic oracle return $h^*(u_i)$ at every query, and run the finite-pool version-space query procedure with any integer budget $b\ge0$. At every stage the current version space contains $h^*$ and is nonempty; each pool label recorded as a unanimous prediction equals $h^*$ at that point; and the procedure terminates after at most $m$ pool iterations. If it makes $q$ queries, then $q\le\min\{m,|\mathcal H|-1\}$. Moreover, on any execution for which each oracle-selected branch has size at most $\rho$ times its pre-query version space, for a fixed $0<\rho<1$, one has $q\le\log |\mathcal H|/\log(1/\rho)$, where $\log$ is the natural logarithm.

## Statement references

[[def-pool-based-realizable-active-learning]]: fixes the finite measurable binary class, pool, target, and pointwise exact oracle.

[[alg-finite-pool-version-space-query]]: scans each pool index once, queries only disagreements while budget permits, and restricts the version space to hypotheses matching each exact answer.

[[def-natural-logarithm]]: defines $\log x$ for $x>0$ as the inverse of the real exponential.

[[thm-natural-logarithm-laws]]: proves that $\log$ is strictly increasing, $\log(xy)=\log x+\log y$, and $\log 1=0$.

[Steve Hanneke, *Theory of Active Learning*, version 1.1, §5.1](https://web.ics.purdue.edu/~hanneke/docs/active-survey/active-survey.pdf)

[Daniel Joseph Hsu, *Algorithms for Active Learning*, Chapter 2 §2.2.2](https://www.cs.columbia.edu/~djhsu/papers/dissertation.pdf)

## Facts & Assumptions

**Given:** A finite nonempty class $\mathcal H$, ordered pool $U=(u_1,\ldots,u_m)$, target $h^*\in\mathcal H$, exact oracle $\mathcal O(u_i)=h^*(u_i)$, and query budget $b\ge0$.

[F1] [[def-pool-based-realizable-active-learning]]: the pool is finite and ordered, $h^*$ belongs to $\mathcal H$, and every queried label is the pointwise target label.

[F2] [[alg-finite-pool-version-space-query]]: the procedure starts at $V=\mathcal H$, queries only when current classifiers disagree and $q<b$, increments $q$ once per response, and on a query replaces $V$ by the classifiers matching that oracle answer; unanimous positions are recorded without querying, including when $q=b$.

[F3] [[def-natural-logarithm]]: for every $x>0$, $\log x$ is the unique real $y$ satisfying $\exp(y)=x$.

[F4] [[thm-natural-logarithm-laws]]: $\log$ is strictly increasing, $\log(xy)=\log x+\log y$ for positive $x,y$, and $\log 1=0$.

[A1] No choice axiom is assumed or used; the proof uses finite sets, finite filtering, and induction over the pool scan and query count.

## Proof

1.1 Initially $V=\mathcal H$, so [F1] gives $h^*\in V$. If a query is made at $u_i$, [F1] gives its answer $y=h^*(u_i)$, and [F2] replaces $V$ by $\{h\in V:h(u_i)=y\}$, which still contains $h^*$. If no query is made, $V$ is unchanged. Induction over the scan therefore keeps $h^*$ in every current $V$, so $V$ is never empty. The finite filters make no arbitrary selections, as recorded in [A1]. [F1, F2, A1, given, construct]

1.2 At each loop pass the algorithm either advances from index $i$ to $i+1$ or returns. Since $U$ has $m$ indices, after at most $m$ such advances it returns, including when $m=0$. It queries at most once per visited index, hence $q\le m$. [F2, given, algebra]

1.3 Initially $q=0\le b$. The only update that increases $q$ is made in the branch $q<b$, so it preserves $q\le b$; when $q=b$, the algorithm does not query and either records a unanimous label or returns at a disagreement. Induction over the scan gives $q\le b$, in particular no queries when $b=0$. [F2, given, induction]

2.1 When [F2] records a unanimous label at $u_i$, every $h\in V$ has that value there. Since $h^*\in V$ by step 1.1, the recorded value equals $h^*(u_i)$. [F2, step 1.1]

2.2 At every query, [F2] says the current classifiers disagree at the queried point. One of them is $h^*$ by step 1.1, so at least one current classifier has label different from the exact answer and is removed. Version spaces only shrink; consequently each query removes at least one distinct member of $\mathcal H\setminus\{h^*\}$. After $q$ queries at least $q$ such members have been removed, while $h^*$ remains, giving $q\le|\mathcal H|-1$. [F1, F2, step 1.1, algebra]

3.1 Combining the pool-index bound in step 1.2 with step 2.2 gives $q\le\min\{m,|\mathcal H|-1\}$. [step 1.2, step 2.2, algebra]

4.1 Under the additional branch-size hypothesis, after $r$ queries induction gives $|V_r|\le\rho^r|\mathcal H|$. Step 1.1 gives $|V_q|\ge1$, so $1\le\rho^q|\mathcal H|$. Since $\rho^q|\mathcal H|>0$, [F4] gives $0=\log1\le\log(\rho^q|\mathcal H|)=q\log\rho+\log|\mathcal H|$, where the product law is applied repeatedly to the integer power $\rho^q$. Also $1/\rho>1$, so [F4] gives $\log(1/\rho)>0$ and, by applying its product law to $\rho(1/\rho)=1$, $\log\rho=-\log(1/\rho)$. Rearranging yields $q\le\log|\mathcal H|/\log(1/\rho)$. For $q=0$ the same conclusion follows from $|\mathcal H|\ge1$. [F1, F3, F4, step 1.1, algebra] ∎
