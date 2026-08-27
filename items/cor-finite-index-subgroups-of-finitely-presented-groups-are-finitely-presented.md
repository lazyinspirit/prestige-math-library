---
id: cor-finite-index-subgroups-of-finitely-presented-groups-are-finitely-presented
kind: corollary
title: "Finite-index subgroups of finitely presented groups are finitely presented"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-relators-relations-and-finite-presentations, thm-reidemeister-schreier-presentation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Roger C. Lyndon and Paul E. Schupp, Combinatorial Group Theory"
      url: "https://www.scribd.com/document/384118619/CombinatorialGroupTheory"
---

## Statement

Every finite-index subgroup of a finitely presented group is finitely
presented.

## Facts & Assumptions

**Given:** A finitely presented group $G$ and a finite-index subgroup $H\le G$.

[L1] A finite presentation has finite generating and relator sets
([[def-relators-relations-and-finite-presentations]]).

[L2] Reidemeister-Schreier presents a subgroup $H$ by finitely many rewritten
Schreier generators and relators $\tau(trt^{-1})$
([[thm-reidemeister-schreier-presentation]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite presentation $G=\langle X\mid R\rangle$ and a finite right transversal $\mathcal T$ for $H$. By [L1], the sets $X$ and $R$ are finite, so the sets of pairs $(t,x)$ with $t\in\mathcal T$, $x\in X\sqcup X^{-1}$ and $(t,r)$ with $t\in\mathcal T$, $r\in R$ are finite. [L1, given, choose]

2.1 By [L2], the subgroup $H$ has a presentation whose generators are among the Schreier generators $s(t,x)$ and whose relators are the rewritten words $\tau(trt^{-1})$. Step 1.1 shows that both families are finite. Therefore $H$ is finitely presented. [L2, step 1.1] ∎
