---
id: def-time-orientation-and-future-causal-sets
kind: definition
title: "Time orientation, future and past timelike/null/causal vectors, and the closed cones"
status: draft
origin: session
domain: mathematics
dependency_level: 2
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lorentz-form-and-inertia, def-causal-classification-of-lorentz-vectors]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
  def-causal-classification-of-lorentz-vectors: mathematical-premise
justified_by: [lem-timelike-cone-has-two-convex-components]
sources:
  references:
    - title: "H. S. Reall, Part III General Relativity (Cambridge, October 12, 2022 revision), sections 2.1-2.2 pp. 25-28 (PDF pp. 26-29); Internet Archive copy of the original https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
      url: "https://web.archive.org/web/20230323191108id_/https://www.damtp.cam.ac.uk/user/hsr1000/part3_gr_lectures.pdf"
    - title: "S. M. Carroll, Lecture Notes on General Relativity, arXiv:gr-qc/9712019v1 (1997), Ch. 1 pp. 2-7 (PDF pp. 9-14)"
      url: "https://arxiv.org/pdf/gr-qc/9712019"
    - title: "B. Crowell, Special Relativity, rev. 2020-12-10, sections 1.3-1.4 pp. 23-31 and Ch. 2 pp. 43-51 (signature (+---) converted to (-+++))"
      url: "https://archive.org/download/sr_20220102/sr.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-10
---

## Definition

Let $(V,\eta)$ be a Lorentz vector space of signature $(-,+,+,+)$
([[def-lorentz-form-and-inertia]]), with causal terminology as in
[[def-causal-classification-of-lorentz-vectors]], and let

$$T:=\{v\in V:\eta(v,v)<0\}$$

be its **timelike set**. Components and closures refer to the topology obtained
by using any ordered basis to identify $V$ with Euclidean $\mathbb R^4$;
[[lem-timelike-cone-has-two-convex-components]], step 5.1, proves that the
resulting open sets are independent of the basis. By that lemma the
set $T$ has exactly two connected components, and each of them is nonempty,
open, convex and path-connected. A **time orientation** of $(V,\eta)$ is a
choice of one of these two components. Fixing such a choice, write $C^+$ for the
chosen component and

$$C^-:=T\setminus C^+$$

for the other component; thus $T=C^+\sqcup C^-$ is a disjoint union and
$C^+$, $C^-$ are exactly the two components supplied by the lemma. Relative to
this choice a vector $v\in V$ is

- **future timelike** when $v\in C^+$;
- **past timelike** when $v\in C^-$;
- **future null** when $v\neq 0$, $\eta(v,v)=0$ and $v\in\operatorname{cl}(C^+)$;
- **past null** when $v\neq 0$, $\eta(v,v)=0$ and $v\in\operatorname{cl}(C^-)$;
- **future causal** when it is future timelike or future null;
- **past causal** when it is past timelike or past null.

The sets $\operatorname{cl}(C^+)$ and $\operatorname{cl}(C^-)$ are the
**future closed cone** and the **past closed cone** of the time-oriented space
$(V,\eta,C^+)$. By [[lem-timelike-cone-has-two-convex-components]] each of them
is a convex cone, their intersection is $\{0\}$, and a vector is causal exactly
when it is future causal or past causal, in which case exactly one of these two
alternatives holds: no nonzero vector is both future causal and past causal.
The timelike vectors are exactly the points of $T=C^+\cup C^-$, and
$0\notin T$ because $\eta(0,0)=0$; since a null vector is nonzero with
$\eta(v,v)=0$, no vector is both timelike and null, so the classes above are
mutually exclusive where the definitions say they are: no vector is both future
and past causal, and no timelike vector is null.
