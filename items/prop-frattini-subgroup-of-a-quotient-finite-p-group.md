---
id: prop-frattini-subgroup-of-a-quotient-finite-p-group
kind: proposition
title: "$\\Phi(P/N)=\\Phi(P)N/N$ for a normal subgroup of a finite $p$-group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frattini-subgroup-formula-for-a-finite-p-group, lem-homomorphisms-respect-commutators-and-derived-series, thm-quotient-group-laws, thm-correspondence-theorem-groups]
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
    - title: "M. van Beek, Topics in Finite p-Groups, Lemma 3.6(ii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq P$ and $P$ is a finite $p$-group, then

$$\Phi(P/N)=\Phi(P)N/N.$$

## Facts & Assumptions

**Given:** A finite $p$-group $P$, a normal subgroup $N$, and the quotient map $\pi:P\to P/N$.

[L1] For every finite $p$-group $P$, $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

[L2] A surjective homomorphism sends the derived subgroup onto the derived subgroup of the target ([[lem-homomorphisms-respect-commutators-and-derived-series]]).

[L3] In $P/N$, coset multiplication satisfies $(xN)(yN)=xyN$, and subgroups of $P/N$ correspond to subgroups $H$ of $P$ containing $N$ by $H\mapsto H/N$ and inverse image ([[thm-quotient-group-laws]], [[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $\pi(P')=(P/N)'$. Also $\pi(g^p)=\pi(g)^p$, so $\pi(P^p)=(P/N)^p$. [given, L1, L2, algebra]

2.1 Apply [L1] in $P/N$ and use step 1.1: $\Phi(P/N)=\pi(P')\pi(P^p)=\pi(P'P^p)=\pi(\Phi(P))$. Directly, $\pi^{-1}(\pi(\Phi(P)))=\Phi(P)N$, so the correspondence in [L3] gives $\pi(\Phi(P))=\Phi(P)N/N$. [step 1.1, L1, L3, algebra] ∎
