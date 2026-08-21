---
id: def-completion-of-a-measure-space
kind: definition
title: "The completion domain and proposed completed set function of a measure space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-measure-space, def-measure-null-set-and-almost-everywhere, def-countable-choice]
justified_by: [lem-completion-domain-is-a-sigma-algebra, lem-completed-measure-is-well-defined, thm-completion-of-a-measure-space]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-21
  audited: 2026-08-21
sources:
  scraped: []
  references:
    - title: "G. Folland, Real Analysis, 2nd ed., Theorem 1.9"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
pipeline_run: null
---

## Definition

Let $(X,\mathcal A,\mu)$ be a measure space. Its **completion domain** is

$$\overline{\mathcal A}:=\{E\subseteq X: E=A\cup N\text{ for some }A,Z\in\mathcal A\text{ and }N\subseteq Z\text{ with }\mu(Z)=0\}.$$

For a displayed representation $E=A\cup N$, define the proposed **completed set function** by

$$\overline\mu(E):=\mu(A).$$

The value must not depend on the representation. That obligation is discharged by [[lem-completed-measure-is-well-defined]], and [[lem-completion-domain-is-a-sigma-algebra]] proves, under the Axiom of Countable Choice ([[def-countable-choice]]), that $\overline{\mathcal A}$ is a sigma-algebra. Thus the definite phrases **completion sigma-algebra** and **completed measure** are used only with those two results in force. Under the same choice hypothesis, [[thm-completion-of-a-measure-space]] proves that $\overline\mu$ is the unique complete extension on this domain.
