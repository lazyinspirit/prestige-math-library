---
id: prop-the-target-is-a-strong-deformation-retract-of-the-mapping-cylinder
kind: proposition
title: "The target is a strong deformation retract of the mapping cylinder"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-the-mapping-cylinder-factors-a-chain-map, def-chain-homotopy]
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
pipeline_run: frontier-26
---

## Statement

For every chain map $f:C_\bullet\to D_\bullet$, the section
$$j:D_\bullet\to\operatorname{Cyl}(f)_\bullet$$
and retraction
$$p:\operatorname{Cyl}(f)_\bullet\to D_\bullet$$
make $D_\bullet$ a strong deformation retract of $\operatorname{Cyl}(f)$:
$pj=1_D$ and there is a chain homotopy from $1_{\operatorname{Cyl}(f)}$ to $jp$
that vanishes on $j(D)$.

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The mapping-cylinder factorization provides $p$, $j$, and a homotopy
$H$ with $dH+Hd=1-jp$ ([[thm-the-mapping-cylinder-factors-a-chain-map]]).

[L2] A chain homotopy is the datum witnessing such an identity
([[def-chain-homotopy]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $pj=1_D$ and $H_n(x,y,z)=(0,0,x)$ is a chain homotopy from $1_{\operatorname{Cyl}(f)}$ to $jp$. [L1, given, algebra]

2.1 For every $y\in D_n$, one has $j_n(y)=(0,y,0)$, hence $$H_nj_n(y)=H_n(0,y,0)=0.$$ Therefore the homotopy vanishes on the target summand, so [L2] gives the stated strong deformation retract. [L2, step 1.1, algebra] ∎
