---
id: lem-frattini-subgroup-is-characteristic
kind: lemma
title: "The Frattini subgroup of a finite group is characteristic"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-finite-group, def-characteristic-subgroup]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "D. A. Craven, The Theory of p-Groups, §2.2"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, the subgroup $\Phi(G)$ is characteristic in $G$ and hence normal.

## Facts & Assumptions

**Given:** A finite group $G$ and an automorphism $\alpha$ of $G$.

[F1] For a finite group $G$, the Frattini subgroup is $\Phi(G)=\bigcap\{M\le G:M\text{ is maximal proper}\}$; if $G=1$, the empty intersection inside $G$ is $G$ ([[def-frattini-subgroup-of-a-finite-group]]).

[F2] A subgroup $H\le G$ is characteristic when $\alpha(H)=H$ for every automorphism $\alpha$ of $G$ ([[def-characteristic-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $M$ is maximal proper, then $\alpha(M)$ is proper and maximal: any subgroup strictly between $\alpha(M)$ and $G$ pulls back under $\alpha^{-1}$ to one strictly between $M$ and $G$. Thus $\alpha$ permutes the family of maximal proper subgroups. [given, F1, algebra]

2.1 An automorphism carries an intersection to the intersection of the images, so step 1.1 and [F1] give $\alpha(\Phi(G))=\Phi(G)$. This is characteristicity by [F2]. Every inner automorphism is an automorphism, so $\Phi(G)$ is normal. The same argument covers $G=1$. [step 1.1, F1, F2, algebra] ∎
