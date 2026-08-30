---
id: lem-chain-homotopy-is-compatible-with-addition-and-composition
kind: lemma
title: "Chain homotopy is compatible with addition and composition"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy, prop-identities-and-composites-of-chain-maps-are-chain-maps, thm-the-category-of-complexes-in-an-additive-category-is-additive]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-25
---

## Statement

Let $B_\bullet,C_\bullet,D_\bullet,E_\bullet$ be chain complexes in an
abelian category $\mathcal A$, and let $f,g:C_\bullet\to D_\bullet$ be chain
maps with $f\simeq g$.

1. If $f',g':C_\bullet\to D_\bullet$ are chain maps with $f'\simeq g'$, then
   $f+f'\simeq g+g'$.
2. If $v:B_\bullet\to C_\bullet$ and $u:D_\bullet\to E_\bullet$ are chain
   maps, then $ufv\simeq ugv$.

## Facts & Assumptions

**Given:** An abelian category $\mathcal A$, a chain homotopy $s:f\simeq g$, a chain homotopy $t:f'\simeq g'$, and composable chain maps $v:B_\bullet\to C_\bullet$, $u:D_\bullet\to E_\bullet$ between complexes in $\mathcal A$.

[L1] A chain homotopy is a degree-$1$ family satisfying $$f-g=ds+sd$$ ([[def-chain-homotopy]]).

[L2] Identities and composites of chain maps are chain maps ([[prop-identities-and-composites-of-chain-maps-are-chain-maps]]).

[L3] Because an abelian category is additive, its category of chain complexes is additive, so sums of parallel chain maps are defined degreewise ([[thm-the-category-of-complexes-in-an-additive-category-is-additive]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], we have $f-g=ds+sd$ and $f'-g'=dt+td$. Using [L3], add these equalities to obtain $$ (f+f')-(g+g')=d(s+t)+(s+t)d,$$ so $s+t$ is a homotopy from $f+f'$ to $g+g'$. [L1, L3, given, algebra]

2.1 Since $u$ and $v$ are chain maps by [L2], their differentials commute in the usual way. Therefore $$ufv-ugv=u(f-g)v=u(ds+sd)v=d(usv)+(usv)d,$$ so $usv$ is a chain homotopy from $ufv$ to $ugv$. [L1, L2, step 1.1, algebra] ∎
