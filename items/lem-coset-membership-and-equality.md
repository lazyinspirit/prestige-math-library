---
id: lem-coset-membership-and-equality
kind: lemma
title: "$x\\in aH$ iff $a^{-1}x\\in H$, and $aH=bH$ iff $a^{-1}b\\in H$"
status: published
origin: session
deps: [def-coset, def-subgroup, def-group, lem-group-inverse-laws, lem-group-cancellation]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "UCL lecture notes, Cosets and Lagrange's theorem"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html"
pipeline_run: null
---

## Statement

Let $H\le G$ and let $a,b,x\in G$. Then

$$x\in aH\iff a^{-1}x\in H,$$

and

$$aH=bH\iff a^{-1}b\in H.$$

The corresponding right-coset criterion is $Ha=Hb$ if and only if
$ab^{-1}\in H$.

## Facts & Assumptions

**Given:** A group $G$, a subgroup $H\le G$, and elements $a,b,x\in G$.

[F1] The left coset $aH$ is $\{ah:h\in H\}$, and the right coset $Ha$ is $\{ha:h\in H\}$ ([[def-coset]]).

[F2] A subgroup contains the identity and is closed under products and inverses ([[def-subgroup]]).

[L1] In a group, $(uv)^{-1}=v^{-1}u^{-1}$ and $(u^{-1})^{-1}=u$ ([[lem-group-inverse-laws]]).

[L2] Left and right cancellation hold in every group ([[lem-group-cancellation]], [[def-group]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in aH$, write $x=ah$ with $h\in H$; then $a^{-1}x=a^{-1}ah=h\in H$. Conversely, if $a^{-1}x\in H$, then $x=a(a^{-1}x)\in aH$. [F1, F2, L2]

1.2 Suppose $a^{-1}b\in H$. If $x\in bH$, write $x=bh=a(a^{-1}b)h$; subgroup closure gives $(a^{-1}b)h\in H$, so $x\in aH$. Thus $bH\subseteq aH$. [given, F1, F2]

2.1 If $aH=bH$, then $b=be\in bH=aH$, so step 1.1 gives $a^{-1}b\in H$. [step 1.1, F1, F2]

2.2 Since $(a^{-1}b)^{-1}=b^{-1}a\in H$, the same argument with $a,b$ interchanged gives $aH\subseteq bH$. Hence $aH=bH$. [step 1.2, F2, L1]

3.1 Finally, $Ha=Hb$ is equivalent, after taking inverses elementwise, to $a^{-1}H=b^{-1}H$; by the left-coset criterion this holds exactly when $ab^{-1}\in H$. [step 2.1, step 1.2, step 2.2, F2, L1] ∎
