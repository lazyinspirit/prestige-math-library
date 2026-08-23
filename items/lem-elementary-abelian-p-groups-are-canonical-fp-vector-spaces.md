---
id: lem-elementary-abelian-p-groups-are-canonical-fp-vector-spaces
kind: lemma
title: "An elementary abelian $p$-group has a canonical $\\mathbb F_p$-vector-space structure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-elementary-abelian-p-group, thm-z-mod-p-is-a-field, thm-integers-modulo-n-basic-algebra, def-group-power, lem-group-power-laws]
aliases: []
landmark: true
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
    - title: "K. Conrad, Generating Sets, §6"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
pipeline_run: null
---

## Statement

The rule $\bar a\cdot x=x^a$ gives every elementary abelian $p$-group its canonical $\mathbb F_p$-vector-space structure, with the group operation as vector addition and the identity as zero.

## Facts & Assumptions

**Given:** An elementary abelian $p$-group $E$, a residue class $\bar a\in\mathbb Z/p$, and $x,y\in E$, with integer powers as in [[def-group-power]].

[F1] An elementary abelian $p$-group is a finite abelian $p$-group in which every nonidentity element has order $p$; the trivial group is permitted ([[def-elementary-abelian-p-group]]).

[L1] For every prime $p$, addition and multiplication make $\mathbb Z/p$ a field ([[thm-z-mod-p-is-a-field]]).

[L2] The additive structure of $\mathbb Z/p$ is an abelian group and multiplication distributes over addition ([[thm-integers-modulo-n-basic-algebra]]).

[L3] For integers $a,b$, one has $x^{a+b}=x^ax^b$ and $(x^a)^b=x^{ab}$; if $xy=yx$, then $(xy)^a=x^ay^a$ ([[lem-group-power-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $a\equiv b\pmod p$, then $a-b=kp$ for an integer $k$. Since $x^p=e$ by [F1], the power laws in [L3] give $x^a=x^b(x^p)^k=x^b$. Thus $\bar a\cdot x:=x^a$ is independent of the representative. [given, F1, L2, L3, algebra]

2.1 The power laws in [L3] and commutativity give $(\bar a+\bar b)\cdot x=(\bar a\cdot x)(\bar b\cdot x)$, $(\bar a\bar b)\cdot x=\bar a\cdot(\bar b\cdot x)$, $\bar a\cdot(xy)=(\bar a\cdot x)(\bar a\cdot y)$, $\bar1\cdot x=x$, and $\bar0\cdot x=e$. Together with [L1] and [L2], these are the vector-space axioms. [step 1.1, F1, L1, L2, L3, algebra]

3.1 The scalar structure uses the existing abelian group law and does not change its elements. In particular its additive group remains finite, abelian, and of exponent $p$, including the zero-dimensional trivial case. [step 2.1, F1, L1, algebra] ∎
