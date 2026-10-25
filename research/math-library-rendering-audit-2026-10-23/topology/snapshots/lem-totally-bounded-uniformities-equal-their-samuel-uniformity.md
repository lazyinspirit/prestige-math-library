---
id: lem-totally-bounded-uniformities-equal-their-samuel-uniformity
kind: lemma
title: "Assuming dependent choice, a totally bounded uniformity equals its Samuel uniformity"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-uniformity, lem-samuel-function-pseudometrics-and-coarsening, def-totally-bounded-uniform-space, lem-normal-sequences-of-entourages, lem-pseudometric-from-a-normal-entourage-sequence, def-dependent-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "M. Megrelishvili, Samuel and Smirnov compactifications"
      url: "https://u.cs.biu.ac.il/~megereli/SMIRNOV.pdf"
pipeline_run: null
---

## Statement

**Assume dependent choice.** If $(X,\mathcal U)$ is totally bounded, then $\mathcal U=\mathcal U_S$.

## Facts & Assumptions

**Given:** A totally bounded uniform space $(X,\mathcal U)$, dependent choice, and an entourage $U\in\mathcal U$.

[L1] The Samuel uniformity is coarser than $\mathcal U$ ([[lem-samuel-function-pseudometrics-and-coarsening]]).

[L2] Under dependent choice there is a normal symmetric sequence with $E_1\subseteq U$, and its controlled pseudometric $p$ satisfies $\{p\le1/4\}\subseteq E_1$; every set $\{p<\varepsilon\}$ is an original entourage, so $p$ is uniformly continuous ([[lem-normal-sequences-of-entourages]], [[lem-pseudometric-from-a-normal-entourage-sequence]], [[def-dependent-choice]]).

[L3] Total boundedness supplies a finite set $F\subseteq X$ whose $\{p<1/16\}$-balls cover $X$ ([[def-totally-bounded-uniform-space]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], it is enough to show that every original entourage contains a Samuel entourage. [L1]

1.2 Take $p$ as in [L2] and a finite $p$-net $F$ as in [L3]; for $z\in F$ put $f_z(y)=\min\{1,p(z,y)\}$. [L2, L3, construct]

2.1 Each $f_z$ is $[0,1]$-valued and uniformly continuous: the pseudometric triangle inequality gives $|p(z,x)-p(z,y)|\le p(x,y)$, and truncation at $1$ does not increase this difference. Thus every $f_z$ is a Samuel coordinate. [L2, step 1.2]

3.1 If $|f_z(x)-f_z(y)|<1/8$ for every $z\in F$, choose $z\in F$ with $p(z,x)<1/16$. Then $f_z(x)=p(z,x)<1/16$ and $f_z(y)<3/16<1$, so $p(z,y)=f_z(y)$; hence $p(x,y)\le p(x,z)+|f_z(x)-f_z(y)|+p(z,x)<1/16+1/8+1/16=1/4$. [L3, step 1.2, step 2.1]

4.1 The finite-coordinate Samuel entourage in step 3.1 lies in $\{p<1/4\}\subseteq U$, so step 1.1 proves $\mathcal U=\mathcal U_S$; the empty space is immediate. [L1, L2, step 3.1, discharge-construct] ∎
