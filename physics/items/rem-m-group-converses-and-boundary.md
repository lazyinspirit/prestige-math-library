---
id: rem-m-group-converses-and-boundary
kind: remark
title: Implications and limits for M-groups
status: published
origin: pipeline
deps: [def-monomial-representation-and-m-group, thm-supersolvable-groups-are-m-groups, cor-m-groups-are-solvable, thm-monomial-induction-for-virtual-characters, def-quaternion-group-of-order-eight, def-derived-series-solvable-group-and-derived-length, cor-dimension-of-an-induced-finite-dimensional-representation]
justified_by: []
forward_refs: [cex-solvable-group-need-not-be-an-m-group]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-27
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — §4.3, Problem 1 (binary tetrahedral group), printed pp. 58–59"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "SLMath, Character Theory of Finite Groups, Chapter 9 — slides 391–404 and 408 (Taketa; supersolvable is strictly stronger)"
      url: "https://www.slmath.org/ckeditor_assets/attachments/500/characters.pdf"
---

## Statement

For finite groups the implications

$$ \text{supersolvable}\;\Longrightarrow\; M\text{-group}\;\Longrightarrow\;\text{solvable} $$

hold ([[def-monomial-representation-and-m-group]],
[[thm-supersolvable-groups-are-m-groups]],
[[cor-m-groups-are-solvable]]).

## Remarks

- **Strictness of the second implication.** The companion counterexample
  [[cex-solvable-group-need-not-be-an-m-group]] constructs the binary
  tetrahedral group $T=Q_8\rtimes C_3$ of order $24$ and verifies that it is
  solvable, has a faithful irreducible complex representation of degree two,
  and has no subgroup of index two. The dimension formula
  [[cor-dimension-of-an-induced-finite-dimensional-representation]] then
  excludes induction of that representation from a linear character, so the
  later example proves that solvable does not imply $M$-group. These group
  facts are established there, not used to derive the implication chain above.

- Brauer's monomial induction theorem
  ([[thm-monomial-induction-for-virtual-characters]]) is a different assertion
  from "$G$ is an $M$-group": it states that every virtual character of
  $G$ is an integral combination of monomial characters induced from
  elementary subgroups, with coefficients that may be negative and with
  elementary subgroups that need not be the inertia groups of the
  irreducible constituents. It therefore does not produce a monomial
  irreducible character of $G$, and the companion counterexample shows that it cannot:
  for $T=Q_8\rtimes C_3$ the virtual-character statement holds by
  [[thm-monomial-induction-for-virtual-characters]] while one of the
  irreducible characters of $T$ is not monomial.

- This remark does not address whether the first implication reverses. The
  standard witness that not every $M$-group is supersolvable is not developed
  on this page.

- The implication chain above is the reason this page treats supersolvable
  groups as the principal source of $M$-groups: combining
  [[thm-supersolvable-groups-are-m-groups]] with
  [[cor-m-groups-are-solvable]] and
  [[def-derived-series-solvable-group-and-derived-length]] places every finite
  supersolvable group in the hierarchy
  supersolvable $\Rightarrow$ $M$-group $\Rightarrow$ solvable, in which the
  second inclusion is strict by the companion counterexample and the first is not
  settled here.
