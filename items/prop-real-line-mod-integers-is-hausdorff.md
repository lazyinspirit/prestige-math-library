---
id: prop-real-line-mod-integers-is-hausdorff
kind: proposition
title: "$\\mathbb R/\\mathbb Z$ is Hausdorff"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-circle-as-real-line-mod-integers, lem-open-quotient-arcs-in-real-line-mod-integers, lem-integer-part, def-hausdorff-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-sonnet-5"
    verdict: pass
    date: 2026-08-17
  audited: 2026-08-17
sources:
  scraped: []
  references:
    - title: "Jonathan Wise, Math 6210 Lecture Notes, Week 3, Sections 3.1 and 3.4"
      url: "https://math.colorado.edu/~jonathan.wise/teaching/math6210-fall-2012/notes.pdf"
pipeline_run: null
---

## Statement

$\mathbb R/\mathbb Z$ is Hausdorff.

## Facts & Assumptions

**Given:** Two distinct classes $\xi,\eta\in\mathbb R/\mathbb Z$.

[L1] The quotient map is open, and every interval shorter than one embeds in $\mathbb R/\mathbb Z$ ([[lem-open-quotient-arcs-in-real-line-mod-integers]]).

[L2] For every real $x$ there is exactly one integer $m$ with $m\le x<m+1$ ([[lem-integer-part]]).

[L3] A topological space is Hausdorff when any two distinct points are separated by disjoint open sets ([[def-hausdorff-space]]).

[L4] For the quotient projection, $p(x)=p(y)$ exactly when $x-y\in\mathbb Z$, and $p(x+n)=p(x)$ for every real $x$ and integer $n$ ([[def-circle-as-real-line-mod-integers]]).

## Proof

**Proof technique:** direct.

1.1 Choose representatives $x,y\in\mathbb R$ of $\xi,\eta$ and put $a=x-\lfloor x\rfloor$, $b=y-\lfloor y\rfloor$. By [L2], $a,b\in[0,1)$; by [L4], $[a]=\xi$ and $[b]=\eta$. Distinctness gives $a\ne b$, so $d:=|a-b|$ and $e:=1-d$ are both positive. [L2, L4, algebra]

2.1 Put $r=\tfrac13\min\{d,e\}>0$, and let $U=p[(a-r,a+r)]$ and $V=p[(b-r,b+r)]$. Both are open by [L1], and they contain $\xi$ and $\eta$, respectively. [step 1.1, L1, algebra]

3.1 Suppose $U\cap V\ne\varnothing$. Then some $u\in(a-r,a+r)$ and $v\in(b-r,b+r)$ have $p(u)=p(v)$, so $k:=u-v\in\mathbb Z$ by [L4] and $|k-(a-b)|<2r$. But $a-b\in(-1,1)\setminus\{0\}$, and its distance from every integer is at least $\min\{|a-b|,1-|a-b|\}=\min\{d,e\}>2r$: the candidates $0$ and the nearer of $1,-1$ give those two distances, while every other integer is farther away. This is a contradiction. Thus $U$ and $V$ are disjoint open neighbourhoods, and [L3] proves the Hausdorff condition. [step 1.1, step 2.1, L1, L3, L4, algebra] ∎
