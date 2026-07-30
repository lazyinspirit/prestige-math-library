---
id: lem-every-net-has-a-universal-subnet
kind: lemma
title: "Assuming the ultrafilter lemma, every net has a universal subnet"
status: published
origin: session
deps: [def-tail-filter-of-a-net, thm-ultrafilter-lemma, def-subnet, def-universal-net, thm-ultrafilter-characterisation]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "WVU Math 581 Topology I"
      url: "https://math.wvu.edu/~jwojciec/teaching_files/2024_Spring-581/index.html"
pipeline_run: null
---

## Statement

**Assume the ultrafilter lemma.** Every net has a universal subnet.

## Facts & Assumptions

**Given:** A net $x:D\to X$ and its tail filter $\mathcal F_x$.

[A1] $\mathcal F_x$ contains every tail $T_d$, and its members contain a tail ([[def-tail-filter-of-a-net]]).

[L1] The ultrafilter lemma extends $\mathcal F_x$ to an ultrafilter $\mathcal U$ ([[thm-ultrafilter-lemma]]).

[L2] An ultrafilter contains every subset or its complement ([[thm-ultrafilter-characterisation]]).

[A2] A subnet uses an eventually cofinal index map ([[def-subnet]]).

[A3] A universal net is eventually in every set or its complement ([[def-universal-net]]).



## Proof

**Proof technique:** constructive.

1.1 Choose an ultrafilter $\mathcal U\supseteq\mathcal F_x$ by [L1]. Let $E=\{(d,A):d\in D,\ A\in\mathcal U,\ x_d\in A\}$, ordered by $(d,A)\preceq(e,B)$ when $d\le e$ and $B\subseteq A$, and put $y_{(d,A)}=x_d$. [L1, construct]

2.1 The set $E$ is directed. Given $(d,A),(e,B)$, choose $h\ge d,e$. Since $A\cap B$ and the tail $T_h$ belong to $\mathcal U$, their intersection is nonempty; choose an index $k\ge h$ with $x_k\in A\cap B$. Then $(k,A\cap B)$ is above both pairs. [step 1.1, A1, choose]

2.2 The map $\phi(d,A)=d$ is eventually cofinal: $(d_0,X)$ is an index for every $d_0$, and every later index has first coordinate at least $d_0$. Thus $y$ is a subnet of $x$. [step 1.1, A2]

2.3 For $S\subseteq X$, [L2] gives $S\in\mathcal U$ or $X\setminus S\in\mathcal U$. In the first case choose any $d_0\in D$. Since $S\cap T_{d_0}\in\mathcal U$, choose $j\ge d_0$ with $x_j\in S$. Then $(j,S)\in E$, and every later value lies in $S$. The complementary case is identical. Thus $y$ is universal. [step 1.1, A1, A3, L2, choose]

3.1 The constructed $y$ is a universal subnet of $x$. [step 2.2, step 2.3, discharge-construct] ∎
