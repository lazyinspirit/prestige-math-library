---
id: thm-qa-finite-abelian-double-annihilator
kind: theorem
title: Double annihilator returns the subgroup
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
deps: [def-qa-finite-abelian-subgroup-annihilator, def-subgroup, lem-qa-finite-abelian-annihilators-are-subgroups, thm-qa-finite-abelian-character-dual-is-finite-abelian-group, thm-qa-finite-abelian-subgroup-annihilator-cardinality, thm-qa-finite-abelian-evaluation-map-isomorphism, thm-subset-of-a-finite-set]
dependency_level: 5
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes, version 6"
      url: "https://arxiv.org/pdf/1907.09415"
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "John Preskill, Quantum Information, Chapter 6: Quantum Algorithms"
      url: "https://www.preskill.caltech.edu/ph219/chap6_20_6A_2022.pdf"
---


## Statement

Let $G$ be a finite abelian group and $H\le G$. Under the canonical evaluation identification $G\cong\widehat{\widehat G}$,
$$(H^\perp)^\perp=H.$$

## Facts & Assumptions

**Given:** A finite abelian group $G$ and subgroup $H\le G$.

[F1] Evaluation identifies $G$ isomorphically with $\widehat{\widehat G}$ ([[thm-qa-finite-abelian-evaluation-map-isomorphism]]).

[F2] For $K\le\widehat G$, its annihilator in $G$ is $K^\perp=\{g\in G:\chi(g)=1\text{ for every }\chi\in K\}$ ([[def-qa-finite-abelian-subgroup-annihilator]]).

[F3] The dual $\widehat G$ is a finite abelian group of cardinality $|G|$ ([[thm-qa-finite-abelian-character-dual-is-finite-abelian-group]]), and annihilators of subgroups are subgroups ([[lem-qa-finite-abelian-annihilators-are-subgroups]]).

[F4] For a finite abelian group $K$ and subgroup $L\le K$, its character annihilator $L^{\perp_K}:=\{\Phi\in\widehat K:\Phi(\ell)=1\text{ for all }\ell\in L\}$ satisfies $|L^{\perp_K}|\,|L|=|K|$ ([[thm-qa-finite-abelian-subgroup-annihilator-cardinality]]).

[F5] A subset of a finite set with the same cardinality as the whole set equals the whole set ([[thm-subset-of-a-finite-set]]).

[F6] A subgroup contains the identity and is nonempty, so its cardinality is positive ([[def-subgroup]]).

## Proof

1.1 Put $A:=(H^\perp)^{\perp_{\widehat G}}=\{\Phi\in\widehat{\widehat G}:\Phi(\chi)=1\text{ for every }\chi\in H^\perp\}$, the character annihilator of the subgroup $H^\perp$ inside the group $\widehat G$. If $h\in H$, every $\chi\in H^\perp$ has $\chi(h)=1$ by [F2], so $\operatorname{ev}(h)(\chi)=1$ for every such $\chi$ and $\operatorname{ev}(h)\in A$. Thus $\operatorname{ev}(H)\subseteq A$. [F1, F2, given, construct]

2.1 By [F3], $H^\perp$ is a subgroup of the finite abelian group $\widehat G$; [F6] gives $|H^\perp|\ge1$. Applying [F4] to $G,H$ and then to $\widehat G,H^\perp$ gives $|H^\perp||H|=|G|$ and $|A||H^\perp|=|\widehat G|=|G|$, the last equality following from [F3]. Cancellation gives $|A|=|H|$. The injective evaluation isomorphism [F1] gives $|\operatorname{ev}(H)|=|H|$; with step 1.1, the finite-subset result [F5] yields $A=\operatorname{ev}(H)$. [F1, F3, F4, F5, F6, step 1.1, algebra]

3.1 By definition [F2], $g\in(H^\perp)^\perp$ exactly when $\chi(g)=1$ for every $\chi\in H^\perp$, which is exactly when $\operatorname{ev}(g)\in A$. Since step 2.1 proves $A=\operatorname{ev}(H)$ and [F1] makes evaluation injective, its preimage is $H$; hence $(H^\perp)^\perp=H$. [F1, F2, step 2.1] ∎
