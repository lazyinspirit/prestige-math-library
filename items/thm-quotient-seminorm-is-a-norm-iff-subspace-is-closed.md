---
id: thm-quotient-seminorm-is-a-norm-iff-subspace-is-closed
kind: theorem
title: "The quotient seminorm is a norm exactly when the subspace is closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-quotient-seminorm,
       lem-quotient-seminorm-is-representative-independent,
       lem-quotient-seminorm-triangle-inequality,
       def-linear-subspace, thm-metric-closure-characterisation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
    - title: "Andrew Lin and Casey Rodriguez, MIT 18.102 Introduction to Functional Analysis"
      url: "https://ocw-preview.odl.mit.edu/courses/18-102-introduction-to-functional-analysis-spring-2021/8fb8d5c170f1613151aca71de21027bc_MIT18_102s21_full_lec.pdf"
pipeline_run: frontier-28
---

## Statement

Let $X$ be a normed space and let $M \le X$. The quotient seminorm on $X/M$ is a
norm if and only if $M$ is closed in $X$.

## Facts & Assumptions

**Given:** A normed space $X$, a linear subspace $M \le X$, and a vector
$x \in X$.

[L1] The quotient seminorm is
$\|x+M\|_{X/M} = \operatorname{dist}(x,M)$
([[def-quotient-seminorm]]).

[L2] A linear subspace contains $0$, so $M$ is nonempty
([[def-linear-subspace]]).

[L3] For a nonempty subset $A$ of a metric space, the closure of $A$ is exactly
$\{u : \operatorname{dist}(u,A)=0\}$, and a set is closed exactly when it equals
its closure ([[thm-metric-closure-characterisation]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L3], $\operatorname{dist}(x,M)=0$ exactly when $x \in \overline M$. Therefore [L1] gives $\|x+M\|_{X/M}=0$ exactly when $x \in \overline M$. [L1, L2, L3]

2.1 If $M$ is closed and $\|x+M\|_{X/M}=0$, then step 1.1 gives $x \in \overline M = M$. Hence $x+M = M$, the zero coset. So the quotient seminorm is definite and therefore a norm. [step 1.1, L3]

2.2 Conversely, assume the quotient seminorm is a norm. If $M$ were not closed, then [L3] would give some $x \in \overline M \setminus M$. Step 1.1 would then give $\|x+M\|_{X/M}=0$, while $x+M \ne M$ because $x \notin M$, contradicting definiteness. Therefore $M$ is closed. [step 1.1, L3, assume-contra, discharge-contradiction]

3.1 Steps 2.1 and 2.2 prove the equivalence. [step 2.1, step 2.2] ∎
