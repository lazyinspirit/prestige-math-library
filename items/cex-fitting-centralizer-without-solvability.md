---
id: cex-fitting-centralizer-without-solvability
kind: counterexample
title: "The Fitting subgroup of $A_5$ does not contain its centralizer"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-fitting-subgroup-of-a-finite-group, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, thm-alternating-group-is-simple-for-n-at-least-five, thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable, cor-nilpotent-groups-and-finite-p-groups-are-solvable, def-centralizer-of-a-subgroup]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, §1.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: null
---

## Statement refuted

For every finite group $G$, one has $C_G(F(G))\le F(G)$. For $A_5$, one has $F(A_5)=1$ and $C_{A_5}(F(A_5))=A_5$, so solvability cannot be omitted.

## Facts & Assumptions

**Given:** The alternating group $A_5$ and its Fitting subgroup ([[def-fitting-subgroup-of-a-finite-group]]).

[L1] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup is contained in it ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L2] The group $A_5$ is simple ([[thm-alternating-group-is-simple-for-n-at-least-five]]).

[L3] The group $A_5$ is not solvable ([[thm-a-five-and-symmetric-groups-from-degree-five-are-not-solvable]]).

[L4] Every nilpotent group is solvable ([[cor-nilpotent-groups-and-finite-p-groups-are-solvable]]).

[F1] The centralizer $C_G(H)$ consists of the elements of $G$ that commute with every element of $H$ ([[def-centralizer-of-a-subgroup]]).

## Counterexample

**Proof technique:** direct.

1.1 By [L1], $F(A_5)$ is normal and nilpotent. Simplicity [L2] leaves $F(A_5)=1$ or $F(A_5)=A_5$; the second would make $A_5$ nilpotent and hence solvable by [L4], contradicting [L3]. Thus $F(A_5)=1$. [given, L1, L2, L3, L4, algebra]

2.1 For $A_5$, one has $F(A_5)=1$ and $C_{A_5}(F(A_5))=A_5$, since every element centralizes the trivial subgroup by [F1]. Therefore $C_{A_5}(F(A_5))\nleq F(A_5)$. [step 1.1, F1, given, algebra] ∎
