---
id: thm-a-splitting-of-an-idempotent-is-simultaneously-an-equalizer-and-a-coequalizer-and-is-unique-up-to-unique-isomorphism
kind: theorem
title: "A splitting of an idempotent is simultaneously an equalizer and a coequalizer and is unique up to unique isomorphism"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-idempotent-and-split-idempotent, def-equalizers-and-coequalizers, def-isomorphism-groupoid-and-connected-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.3, Lemmas 12.3.15, 12.3.17, and 12.3.18"
      url: "https://stacks.math.columbia.edu/tag/09SE"
pipeline_run: frontier-20
---

## Statement

Let $e:A\to A$ be an idempotent and let

$$A\xrightarrow{p}B\xrightarrow{i}A$$

be a splitting of $e$, so $ip=e$ and $pi=1_B$. Then $i$ is an equalizer of
$e$ and $1_A$, $p$ is a coequalizer of $e$ and $1_A$, and any two splittings of
$e$ are joined by a unique isomorphism commuting with both legs.

## Facts & Assumptions

**Given:** An idempotent $e:A\to A$ and a splitting $A\xrightarrow{p}B\xrightarrow{i}A$.

[L1] A split idempotent satisfies $ip=e$ and $pi=1_B$
([[def-idempotent-and-split-idempotent]]).

[L2] Equalizers and coequalizers have their universal properties
([[def-equalizers-and-coequalizers]]).

[L3] An isomorphism is a morphism with a two-sided inverse
([[def-isomorphism-groupoid-and-connected-category]]).

## Proof

**Proof technique:** direct.

1.1 Since $e^2=e$ and $ip=e$, one has $ei=ipi=i=1_Ai$. If $h:X\to A$ also satisfies $eh=h$, then $i(ph)=iph=eh=h$. If $iu=h$ too, then $u=piu=ph$. So $i$ is the equalizer of $e$ and $1_A$. [L1, L2]

1.2 Dually, $pe=pip=p$, so $p$ coequalizes $e$ and $1_A$. If $h:A\to X$ satisfies $he=h$, then $(hi)p=hip=he=h$, and uniqueness follows because any $u:B\to X$ with up=h must satisfy $u=upi=hi$. Thus $p$ is the coequalizer. [L1, L2]

2.1 Let $A\xrightarrow{p'}B'\xrightarrow{i'}A$ be another splitting of $e$. Put $u:=p'i:B\to B'$ and $v:=pi':B'\to B$. Then $i'u=i'p'i=ei=i$ and $vp=pi'p'=pe=p$, so these are the unique morphisms commuting with the legs. Moreover $vu=pi'p'i=pei=pi=1_B$ and $uv=p'i pi'=p'ei'=p'i'=1_{B'}$. Hence $u$ is the unique isomorphism between the two splittings by [L3]. [L1, L3, step 1.1, step 1.2] ∎
