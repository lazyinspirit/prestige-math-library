---
id: cex-a-nonzero-function-on-a-null-set-has-zero-l-p-seminorm
kind: counterexample
title: "A nonzero function on a null set has zero $L^p$ seminorm"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class, thm-rationals-countable, lem-countable-sets-are-null]
proof_strategy: "Use the indicator of a countable null subset of [0, 1]. It is not the zero function, but its p-seminorm and essential supremum both vanish."
verification:
  audited: 2026-08-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Measure, Integration & Real Analysis, Section 7B"
      url: "https://measure.axler.net/MIRA.pdf"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Section 2.5"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
---

## Statement refuted

Every nonzero measurable function has positive $L^p$ seminorm.

## Facts & Assumptions

**Given:** The rational indicator on $[0,1]$.

[L1] $\mathbb Q$ is countable and countable subsets of $\mathbb R$ are null
([[thm-rationals-countable]], [[lem-countable-sets-are-null]]).

[L2] Null functions are exactly the zero-seminorm class in every range treated
on this page
([[prop-null-functions-form-a-linear-subspace-and-are-exactly-the-zero-seminorm-class]]).

## Counterexample

**Proof technique:** Use the indicator of a countable null subset of $[0,1]$.
It is not the zero function, but its $p$-seminorm and essential supremum both
vanish.

1.1 Let $f:=\chi_{\mathbb Q\cap[0,1]}$. Then $f$ is not the zero function, [given]
because $f(q)=1$ for every rational $q\in[0,1]$.

1.2 By [L1], the support of $f$ is null, so $f=0$ almost everywhere. Therefore [L1, L2]
[L2] gives $\|f\|_p=0$ in every finite-$p$ range treated on the page, and also
$\|f\|_\infty=0$.

2.1 Thus a nonzero measurable function can have zero $L^p$ seminorm. [step 1.1, step 1.2]
∎
