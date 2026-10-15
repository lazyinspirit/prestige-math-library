---
page: holm-step-down-familywise-error-control
title: Holm Step-Down Familywise Error Control
status: draft
items:
  - alg-holm-step-down-procedure
  - lem-holm-rejection-events-are-measurable
  - thm-holm-stepdown-strong-fwer
examples: []
---

This page defines Holm's step-down procedure for a finite hypothesis family fixed before observing the data, verifies that its rejection events are measurable, and proves strong familywise error control. The proof identifies the earliest-ranked true null: any false rejection forces that null's p-value below $\alpha/m_0$, where $m_0$ is the number of true nulls. Bonferroni control on the true-null subfamily then gives an error probability at most $\alpha$, with no independence assumption. The guarantee concerns false rejections; the procedure itself does not provide simultaneous confidence intervals. Choosing the family after seeing the p-values is outside the theorem unless validity remains established for that selection.
