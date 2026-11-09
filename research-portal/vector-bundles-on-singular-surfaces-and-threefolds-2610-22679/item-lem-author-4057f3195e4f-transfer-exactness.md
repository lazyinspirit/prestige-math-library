---
title: Transporting an exact sequence through isomorphisms
status: draft
research_item: lem-author-4057f3195e4f-transfer-exactness
dependency_level: 0
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

None.

## Statement
Suppose $H\xrightarrow{a}A\xrightarrow{b}D\to0$ is exact, and $u:A\to A'$ and $v:D\to D'$ are isomorphisms of abelian groups. Then $H\xrightarrow{u a}A'\xrightarrow{v b u^{-1}}D'\to0$ is exact.

## Facts & Assumptions

**Given:** The homomorphisms and exactness in the statement. Exactness means $b$ is surjective and $\ker b=\operatorname{im}a$.

**Goal:** Prove exactness after transport.

## Proof

1.1 The transported map $vbu^{-1}$ is surjective because $u^{-1}$ and $v$ are surjective and $b$ is surjective. [given]

2.1 Since $v$ is injective, $a'\in\ker(vbu^{-1})$ exactly when $u^{-1}(a')\in\ker b=\operatorname{im}a$. This is equivalent to $a'\in\operatorname{im}(ua)$, as required. [given, step 1.1] ∎
