---
id: def-causal-classification-of-lorentz-vectors
kind: definition
title: "Timelike, null, spacelike and causal vectors of a Lorentz vector space"
status: draft
origin: session
domain: mathematics
dependency_level: 1
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-lorentz-form-and-inertia]
dependency_roles:
  def-lorentz-form-and-inertia: mathematical-premise
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
([[def-lorentz-form-and-inertia]]), with associated quadratic form
$q(v)=\eta(v,v)$. A vector $v\in V$ is

- **timelike** when $q(v)<0$;
- **null**, or **lightlike**, when $v\neq 0$ and $q(v)=0$;
- **spacelike** when $q(v)>0$;
- **causal** when it is timelike or null.

The zero vector $0\in V$ satisfies $q(0)=0$ and is consequently **none** of
timelike, null or spacelike: the null case explicitly excludes it, and the
timelike and spacelike cases exclude it by $q(0)=0$ together with the strict
inequalities. The **causal character** of a nonzero vector $v$ is the sign of
the real number $q(v)$, and the three names are attached to the three signs as
above. When no confusion arises, the pairing $\eta$ itself is written
$\langle v,w\rangle:=\eta(v,w)$.

**Each nonzero vector has exactly one causal character.** For a nonzero
$v\in V$ the real number $q(v)$ satisfies exactly one of $q(v)<0$, $q(v)=0$,
$q(v)>0$ by trichotomy of the order on $\mathbb R$, so $v$ is timelike, null or
spacelike, and no two of the three alternatives can hold at once. The causal
vectors are therefore exactly the nonzero vectors that are timelike or null,
and the zero vector is causal in no sense introduced here.
