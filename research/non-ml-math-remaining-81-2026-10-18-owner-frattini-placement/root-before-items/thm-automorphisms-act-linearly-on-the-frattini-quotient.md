---
id: thm-automorphisms-act-linearly-on-the-frattini-quotient
kind: theorem
title: "Automorphisms act linearly on the Frattini quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-frattini-subgroup-is-characteristic, lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces, thm-frattini-quotient-is-the-largest-elementary-abelian-quotient, thm-automorphisms-form-a-group, thm-quotient-group-universal-property]
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
    - title: "D. A. Craven, The Theory of p-Groups, discussion before Theorem 2.30"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 4.10"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
pipeline_run: null
---

## Statement

Every automorphism of a finite $p$-group induces an $\mathbb F_p$-linear automorphism of $P/\Phi(P)$, and these form a homomorphism

$$\rho_P:\operatorname{Aut}(P)\longrightarrow\operatorname{Aut}_{\mathbb F_p}(P/\Phi(P)).$$

## Facts & Assumptions

**Given:** A finite $p$-group $P$, an automorphism $\alpha\in\operatorname{Aut}(P)$, and the quotient map $\pi:P\to P/\Phi(P)$.

[L1] For every finite group $G$, $\Phi(G)$ is characteristic and hence normal ([[lem-frattini-subgroup-is-characteristic]]).

[L2] The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure ([[lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces]], [[thm-frattini-quotient-is-the-largest-elementary-abelian-quotient]]).

[L3] The automorphisms of a group form a group under composition ([[thm-automorphisms-form-a-group]]).

[L4] A homomorphism that kills a normal subgroup factors uniquely through the quotient group ([[thm-quotient-group-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $\alpha(\Phi(P))=\Phi(P)$, so $\pi\circ\alpha$ kills $\Phi(P)$. The universal property [L4] gives a quotient automorphism $\bar\alpha$ with $\bar\alpha(x\Phi(P))=\alpha(x)\Phi(P)$; applying the same construction to $\alpha^{-1}$ supplies its inverse. [given, L1, L4]

2.1 For $\bar a\in\mathbb F_p$, $\bar\alpha(\bar a\cdot x\Phi(P))=\bar\alpha(x^a\Phi(P))=\alpha(x^a)\Phi(P)=\alpha(x)^a\Phi(P)=\bar a\cdot\bar\alpha(x\Phi(P))$, so $\bar\alpha$ is linear by [L2]. [step 1.1, L2, algebra]

3.1 The induced map of the identity is the identity, and uniqueness in [L4] gives $\overline{\alpha\beta}=\bar\alpha\,\bar\beta$. Thus $\alpha\mapsto\bar\alpha$ preserves the group law in [L3] and defines $\rho_P$. [step 1.1, step 2.1, L3, L4, algebra] ∎
