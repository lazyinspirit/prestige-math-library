---
id: prop-holomorph-as-a-permutation-group
kind: proposition
title: ' The holomorph acts faithfully on $G$ by affine permutations $x\mapsto g\alpha(x)$'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-holomorph-of-a-group, def-group-action, thm-group-actions-correspond-to-homomorphisms, def-symmetric-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Peter J. Cameron, The Holomorph of a Group"
      url: "https://webspace.maths.qmul.ac.uk/p.j.cameron/MTHM024/gn7.pdf"
pipeline_run: null
---

## Statement

For every group $G$, the rule

$$\rho(g,\alpha)(x)=g\alpha(x)$$

defines a faithful action of $\operatorname{Hol}(G)$ on the underlying set of $G$. Equivalently, $\rho$ embeds $\operatorname{Hol}(G)$ in $\operatorname{Sym}(G)$.

## Facts & Assumptions

**Given:** A group $G$ and its holomorph.

[L1] The holomorph multiplication is $(g,\alpha)(h,\beta)=(g\alpha(h),\alpha\beta)$ ([[def-holomorph-of-a-group]]).

[L2] A group action is a rule satisfying the identity and compatibility laws, and it is faithful when only the identity acts trivially ([[def-group-action]]).

[L3] Group actions on a set correspond to homomorphisms into its symmetric group ([[thm-group-actions-correspond-to-homomorphisms]], [[def-symmetric-group]]).

## Proof

**Proof technique:** direct.

1.1 Each map $x\mapsto g\alpha(x)$ is a permutation, with inverse $x\mapsto\alpha^{-1}(g^{-1}x)$. [L1, algebra]

1.2 Composition gives $\rho(g,\alpha)(\rho(h,\beta)(x))=g\alpha(h)(\alpha\beta)(x)$, which equals $\rho((g,\alpha)(h,\beta))(x)$ by [L1]. Therefore $\rho$ is an action, equivalently a homomorphism to $\operatorname{Sym}(G)$, by [L2] and [L3]. [L1, L2, L3]

2.1 If $\rho(g,\alpha)$ is the identity permutation, evaluation at $1_G$ gives $g=1_G$. Then $\alpha(x)=x$ for every $x\in G$, so $\alpha=\operatorname{id}_G$. Thus the action is faithful by [L2], and the corresponding homomorphism is injective: equality of two images reduces, after multiplying by an inverse, to this identity case. [step 1.2, L2, L3, algebra] ∎
