---
id: def-tdmath-cost-offset-difference-space
kind: definition
title: Cost-zero type offsets and their difference space
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 16
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-decorated-chain-costs, lem-tdmath-decorated-cost-algebra]
justified_by: [lem-tdmath-cost-offset-difference-space-well-defined]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-decorated-chain-costs: mathematical-premise
  lem-tdmath-decorated-cost-algebra: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §VI.B, pp. 76–79"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Definition

For the type set $\mathcal G$ and cost $F$ of [[def-tdmath-decorated-chain-costs]], define the relation $\Gamma\approx_0\Gamma'$ by $F(\Gamma,\Gamma')=F(\Gamma',\Gamma)=0$. Let $\mathcal P:=\mathcal G\times\mathcal G$ be the set of raw type pairs. Define a relation on raw pairs by

$$(A,B)\equiv(A',B')\quad\Longleftrightarrow\quad\exists C\text{ such that }A\times B'\times C\approx_0 A'\times B\times C.$$

The separate well-definedness lemma proves that $\approx_0$ is an equivalence compatible with composition and positive scaling, that $\equiv$ is an equivalence on $\mathcal P$, and that the following operations are well-defined on its classes. After that proof, write $V_F:=\mathcal P/\equiv$. Define addition by $[(A,B)]+[(D,E)]:=[(A\times D,B\times E)]$, negation by $-[(A,B)]:=[(B,A)]$, and positive scaling by $t[(A,B)]:=[(tA,tB)]$. Set zero to $[(1,1)]$, where $1$ is the empty unit type. Complete scalar multiplication by defining $0[(A,B)]:=[(1,1)]$ and, for $t<0$, $t[(A,B)]:=[((-t)B,(-t)A)]$; here $-t>0$, so the latter uses only the declared positive type scaling. The same lemma establishes that these operations make $V_F$ a real vector space; no vector-space law is assumed by this Definition.
