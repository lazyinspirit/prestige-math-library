---
id: thm-a-split-coequalizer-is-a-coequalizer-and-is-absolute
kind: theorem
title: "Every split coequalizer is a coequalizer and an absolute colimit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-split-coequalizer, def-absolute-colimit, def-equalizers-and-coequalizers]
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
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Lemma 5.4.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Section VI.6"
      url: "https://pages.jh.edu/rrynasi1/NewFoundations4Math/Literature/Textbooks/Mac_Lane1998CategoriesForTheWorkingMathematician.2ndEdition.pdf"
pipeline_run: null
---

## Statement

Every split coequalizer diagram ([[def-split-coequalizer]]) is a coequalizer diagram ([[def-equalizers-and-coequalizers]]), and its coequalizer is an absolute colimit ([[def-absolute-colimit]]).

## Facts & Assumptions

**Given:** A split coequalizer diagram $x\rightrightarrows^{f,g}y\xrightarrow{h}z$ with splitting maps $t:y\to x$ and $s:z\to y$.

[L1] A split coequalizer diagram has maps $f,g:x\rightrightarrows y$, $h:y\to z$, $t:y\to x$, and $s:z\to y$ satisfying $hf=hg$, $hs=1_z$, $gt=1_y$, and $ft=sh$ ([[def-split-coequalizer]]).

[L2] A colimit is absolute when every functor preserves it ([[def-absolute-colimit]]).

## Proof

**Proof technique:** direct.

1.1 Let $k:y\to w$ satisfy $kf=kg$. Define $u:=ks:z\to w$. Then $uh=ksh=kft=kgt=k$, using $ft=sh$, the equality $kf=kg$, and $gt=1_y$. [L1, construct]

1.2 Let $H$ be any functor with the given category as domain. Functoriality sends the four equations in [L1] to $HhHf=HhHg$, $HhHs=1_{Hz}$, $HgHt=1_{Hy}$, and $HfHt=HsHh$, so the image diagram is again split. [L1, given]

2.1 If $v:z\to w$ also satisfies $vh=k$, then $v=vhs=ks=u$ because $hs=1_z$. Thus $h$ has the coequalizer universal property, including when $f=g$ or $h$ is an identity. [step 1.1, L1, algebra]

3.1 Repeating steps 1.1 and 2.1 in the target of $H$ shows that $Hh$ is a coequalizer of $Hf$ and $Hg$. Since $H$ was arbitrary, every functor preserves this coequalizer, so it is absolute by [L2]. [step 1.1, step 2.1, step 1.2, L2] ∎
