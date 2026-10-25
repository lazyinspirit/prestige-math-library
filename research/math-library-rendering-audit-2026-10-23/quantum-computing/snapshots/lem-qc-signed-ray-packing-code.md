---
id: lem-qc-signed-ray-packing-code
kind: lemma
title: QC24 Signed Ray Packing Code
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qc-projective-chord-distance
  - lem-qc-projective-chord-distance-formula
  - thm-logarithm-derivative-and-integral
  - cor-mean-value-theorem
  - thm-natural-logarithm-laws
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - cor-differentiable-implies-continuous
  - def-derivative
  - def-function-limit
  - thm-binomial-theorem
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: John Preskill, Quantum Computation, Chapter 5, Classical and Quantum Circuits
      url: https://www.preskill.caltech.edu/ph219/chap5_15.pdf
    - title: John Watrous, The Theory of Quantum Information
      url: https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf
---

## Statement

Let $D\ge2$ be an even integer and let $\delta\in\mathbb R$ satisfy $0<\delta<1/4$. There is a family of at least $\exp(c_\delta D)$ unit sign vectors in $\mathbb C^D$, with their first $D/2$ coordinates fixed at $1/\sqrt D$, such that the projective chord distance between distinct resulting rays is at least $2\sqrt\delta$. Here $c_\delta=(\ln2/2)(1-H_2(2\delta))>0$ and $H_2(t)=-t\log_2t-(1-t)\log_2(1-t)$.

## Facts & Assumptions

**Given:** Even $D\ge2$, $0<\delta<1/4$, and the distance formula below.

[F1] For unit representatives, $d_{\mathrm{ch}}([u],[v])=\sqrt{2-2|\langle u,v\rangle_{\mathrm{root}}|}$ ([[lem-qc-projective-chord-distance-formula]]).

[F2] For $y>0$, $(\ln y)'=1/y$ and $\ln y=\int_1^y dt/t$ ([[thm-logarithm-derivative-and-integral]]).

[F3] A real function continuous on a closed interval and differentiable on its interior satisfies the mean value theorem ([[cor-mean-value-theorem]]).

[F4] The natural logarithm is strictly increasing, has $\ln1=0$, and satisfies $\ln(1/y)=-\ln y$ and $\ln(a/b)=\ln a-\ln b$ for positive arguments ([[thm-natural-logarithm-laws]]); hence $\ln2>0$ and $\log_2t=\ln t/\ln2$ for $t>0$.

[F5] Product and chain rules hold for differentiable real functions, and differentiability implies continuity ([[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[cor-differentiable-implies-continuous]]). The identity has derivative $1$ and constants have derivative $0$, as their difference quotients are constant ([[def-derivative]], [[def-function-limit]]).

[F6] The real binomial expansion uses the coefficients $\iota\binom mj$, where $\iota$ embeds naturals into $\mathbb R$ ([[thm-binomial-theorem]]).

## Proof

**Given:** As in Facts & Assumptions.

1.1 Put $m=D/2$, $x=2\delta\in(0,1/2)$ and $R=\lceil xm\rceil-1$. Greedily scan the finite set $\{0,1\}^m$ in lexicographic order: select the least remaining word and delete all words at Hamming distance at most $R$, repeating until none remain. Distinct selected words have distance $h\ge R+1\ge xm=\delta D$, and each selection deletes at most $B=\sum_{j=0}^{R}\binom mj$ words, so the selected code has at least $2^m/B$ words. [given, construct, algebra]

2.1 For $j\le R<xm$, the ratio $x/(1-x)<1$ gives $x^j(1-x)^{m-j}\ge x^{xm}(1-x)^{(1-x)m}$. The binomial identity [F6], $1=\sum_{j=0}^m\iota\binom mjx^j(1-x)^{m-j}$ therefore yields $\iota B\le[x^{-x}(1-x)^{-(1-x)}]^m=2^{mH_2(x)}$. Put $h(t)=-[t\ln t+(1-t)\ln(1-t)]/\ln2$ for $0<t<1$, which is $H_2(t)$ by [F4]. The product and chain rules [F5] give $h'(t)=(\ln(1-t)-\ln t)/\ln2=\ln((1-t)/t)/\ln2$. For $0<t<1/2$, the ratio exceeds $1$, so [F4] gives $h'(t)>0$. The same rules show $h$ is differentiable on $(0,1)$, and [F5] makes it continuous there; in particular it is continuous on $[x,1/2]$. By [F4], $\log_2(1/2)=-1$, so $h(1/2)=1$. The mean value theorem [F3] now gives $1-h(x)=h'(\xi)(1/2-x)>0$ for some $\xi\in(x,1/2)$. Thus $H_2(x)<1$ and the code size is at least $2^{m(1-H_2(x))}=\exp(c_\delta D)$. [F2, F3, F4, F5, F6, step 1.1, algebra]

3.1 Map each selected bit word $b$ to the sign word $s_i=(-1)^{b_i}$; this is a bijection preserving Hamming distance. Form $u_s=D^{-1/2}(1,\ldots,1,s_1,\ldots,s_m)$. It is unit because it has $D$ entries of modulus $D^{-1/2}$. If two selected words differ in $h$ places, then $\langle u_s,u_t\rangle_{\mathrm{root}}=1-2h/D$. Since $h\le m=D/2$ and $h\ge\delta D$, this lies in $[0,1-2\delta]$, so [F1] gives $d_{\mathrm{ch}}([u_s],[u_t])=2\sqrt{h/D}\ge2\sqrt\delta$. The first half of each vector is fixed and nonzero, so scalar-proportional unit vectors must have scalar $1$ and identical last-half signs; distinct code words therefore give distinct rays. [F1, step 1.1, step 2.1, algebra] ∎
