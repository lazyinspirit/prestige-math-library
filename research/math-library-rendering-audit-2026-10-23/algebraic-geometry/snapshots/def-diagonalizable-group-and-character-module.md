---
id: def-diagonalizable-group-and-character-module
kind: definition
title: "Diagonalizable groups and their character modules"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-25.md"
      - "research/frontier-38-owner-30-alpha-batch-25-5a.md"
      - "research/frontier-38-owner-30-step5-hash-25-post-5a.json"
    content_sha256: "5a7b4297b78fdd0f191e60343e5ef351fd786f40412671b3a41591cb7c781660"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups, corrected 2022 edition"
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
    - title: "SGA 3, Expose VIII, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Exp8-8nov09.pdf
    - title: "SGA 3, Expose X, section 1, Polo\u2013Gille edition"
      url: https://webusers.imj-prg.fr/~patrick.polo/SGA3/Expo10-8nov09.pdf
deps: ["thm-gluing-affine-schemes", "lem-multiplicative-type-local-hopf-dictionary"]
---

## Definition

For an abelian group $M$, its group algebra $k[M]$ has $k$-basis $e_m$ for $m\in M$, product $e_m e_n=e_{m+n}$, unit $e_0$, and Hopf maps $\Delta(e_m)=e_m\otimes e_m$, $\epsilon(e_m)=1$, $S(e_m)=e_{-m}$. Write $D_k(M)=\operatorname{Spec}k[M]$. These formulas define an affine group by [[lem-multiplicative-type-local-hopf-dictionary]]. For a general base scheme $S$, write $D_S(M)$ for the group obtained by gluing $\operatorname{Spec}R[M]$ on affine opens $\operatorname{Spec}R\subset S$ with the same formulas; the group-algebra construction commutes with localization, so these affine charts agree on overlaps and glue by [[thm-gluing-affine-schemes]]. A diagonalizable group over $S$ is one isomorphic to $D_S(M)$ for an abelian group $M$. For a group scheme $G$ over $S$, its character group is $X(G)=\operatorname{Hom}_{S\text{-groups}}(G,\mathbf G_{m,S})$, with pointwise multiplication of characters as its addition; for $S=\operatorname{Spec}k$ this is $\operatorname{Hom}_{k\text{-groups}}(G,\mathbf G_m)$. For every $k$-algebra $R$ the group-algebra universal property gives $D_k(M)(R)=\operatorname{Hom}(M,R^\times)$: an algebra map $k[M]\to R$ is determined by the units it assigns to the basis elements $e_m$, and conversely any group homomorphism $M\to R^\times$ extends linearly.
