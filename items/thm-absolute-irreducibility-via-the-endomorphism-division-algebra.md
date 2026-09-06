---
id: thm-absolute-irreducibility-via-the-endomorphism-division-algebra
kind: theorem
title: "Absolute irreducibility via the endomorphism division algebra"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-endomorphism-division-algebra-of-an-irreducible, lem-base-change-of-intertwiner-spaces, thm-scalar-extension-of-an-irreducible-finite-group-representation]
proof_strategy: direct
verification:
  audited: 2026-09-07
  precheck: pass
sources:
  references:
    - title: "Gabor Wiese, Galois Representations, Theorem 2.3.11"
      url: "https://r.jina.ai/https://math.uni.lu/wiese/notes/GalRep.pdf"
    - title: "Weizhe Zheng, Lectures on Algebra, Theorem 4.2.3"
      url: "https://server.mcm.ac.cn/~zheng/algebra.pdf"
---

## Statement

Let $F$ have characteristic $0$, $G$ be finite, and $V$ be an irreducible
finite-dimensional $F$-representation.  Then $V$ is absolutely irreducible if
and only if $D_V=F$ (via scalar endomorphisms).

## Facts & Assumptions

**Given:** $F$, $G$, and $V$ as in the statement.

[L1] Base change gives $E\otimes_FD_V\cong\operatorname{End}_G(E\otimes_FV)$ for every field extension $E/F$ ([[lem-base-change-of-intertwiner-spaces]]).

[L2] Over a finite splitting field, scalar extension of $V$ is a common multiple of one Galois orbit of absolutely irreducible constituents ([[thm-scalar-extension-of-an-irreducible-finite-group-representation]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite splitting field $E/F$.  If $V$ is absolutely irreducible, then $E\otimes_FV$ is irreducible, so its endomorphism algebra is $E$.  By [L1], $E\otimes_FD_V\cong E$, and comparing $F$-dimensions gives $D_V=F$. [L1, choose]

1.2 Conversely assume $D_V=F$.  Then [L1] makes $\operatorname{End}_G(E\otimes_FV)$ one-dimensional over $E$. [L1, given]

2.1 In the decomposition of [L2], either a multiplicity exceeds one or two inequivalent constituents occur whenever $E\otimes_FV$ is reducible; either case supplies a non-scalar projection endomorphism.  This contradicts step 1.2, so $E\otimes_FV$ is irreducible and $V$ is absolutely irreducible. [L2, step 1.2] ∎
