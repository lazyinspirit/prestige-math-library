---
id: thm-an-absolutely-continuous-function-with-zero-derivative-almost-everywhere-is-constant
kind: theorem
title: "An absolutely continuous function with zero derivative almost everywhere is constant"
status: draft
origin: pipeline
landmark: true
deps: [def-dependent-choice, def-absolutely-continuous-function, thm-vitali-covering-theorem-for-fine-covers-on-the-line]
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "R. K. Srivastava, MA550 Measure Theory Lecture Notes, Lemma 4.43"
      url: "https://www.iitg.ac.in/rksri/MA550_Measure_Theory_Lecture_Notes_2024.pdf"
---

## Statement

Assume the Axiom of Dependent Choice. If $F:[a,b]\to\mathbb R$ is absolutely continuous and $F'(x)=0$ for almost
every $x\in(a,b)$, then $F$ is constant.

## Facts & Assumptions

**Given:** Dependent choice, $F\in AC[a,b]$, and $F'=0$ outside a null subset of $(a,b)$.

## Proof

**Proof technique:** direct.

1.1 Fix $s<t$ and $\varepsilon>0$. Absolute continuity gives $\delta>0$ such that every permitted finite interval family of total length below $\delta$ has total $F$-increment below $\varepsilon/2$. Put $D=\{x\in(s,t):F'(x)=0\}$ and $\eta=\varepsilon/(2(t-s+1))$. At every $x\in D$, differentiability supplies arbitrarily short closed intervals $I=[u,v]\subseteq[s,t]$ centred at $x$ such that $$|F(v)-F(u)|\le |F(v)-F(x)|+|F(x)-F(u)|<\eta(v-u).$$ These intervals form a fine cover of $D$. [given, choose, algebra]

2.1 Apply [[thm-vitali-covering-theorem-for-fine-covers-on-the-line]] with residual outer measure below $\delta$. It gives pairwise disjoint $I_1,\ldots,I_N$ from the fine cover such that $$\lambda^*\!\left(D\setminus\bigcup_{j=1}^NI_j\right)<\delta.$$ If $N_0=(s,t)\setminus D$, then $\lambda^*(N_0)=0$, so $$R=[s,t]\setminus\bigcup_{j=1}^NI_j$$ has outer measure below $\delta$ (the endpoints add no outer measure). [given, step 1.1]

3.1 Order the selected intervals from left to right. The finitely many closed gaps between them, including the end gaps from $s$ and to $t$, have pairwise disjoint open interiors and total length $\lambda(R)<\delta$. Absolute continuity therefore bounds the sum of the $F$-increments over the gaps by $\varepsilon/2$. The estimate in step 1.1 bounds the corresponding sum over the selected intervals by $$\eta\sum_{j=1}^N|I_j|\le\eta(t-s)<\varepsilon/2.$$ [step 1.1, step 2.1, algebra]

4.1 Telescoping across the alternating selected intervals and gaps gives $|F(t)-F(s)|<\varepsilon$. Since $\varepsilon$ is arbitrary, $F(t)=F(s)$. This includes $a=b$, and arbitrary $s,t$ prove constancy. [step 3.1, algebra] ∎
