---
id: lem-lazy-walk-lengths-within-root-t-have-close-endpoint-laws
kind: lemma
title: "Nearby lazy-walk lengths have close endpoint and claim laws"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-constraint-graph-and-labeling-value, def-plurality-decoding-of-powered-local-views, def-constraint-graph-powering, cor-central-binomial-coefficient-asymptotic-from-wallis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Irit Dinur, The PCP theorem by gap amplification, §6.1 Lemma 6.4 and Appendix A (binomial weight ratios), printed pp. 22-23 and 41."
      url: "https://www.cs.umd.edu/users/gasarch/TOPICS/pcp/dinur.pdf"
    - title: "Arora and Barak, Computational Complexity: A Modern Approach, §18.5.1, printed p. 374 (endpoint distributions of t-step and (t+δ√t)-step walks are within statistical distance 10δ)."
      url: "https://theory.cs.princeton.edu/complexity/book.pdf"
---

## Statement

Let $G$ be a binary constraint graph over $\Sigma$ whose underlying graph is $d$-regular in the adjacency-slot convention of [[def-constraint-graph-and-labeling-value]], and use the lazy-walk convention of [[def-constraint-graph-powering]]: a lazy step at a vertex chooses uniformly among $2d$ options, the $d$ hold options and the $d$ slots at that vertex, and a lazy-walk pattern of length $\ell$ is drawn uniformly from $\mathcal P_\ell$. Put
$$C_0:=\frac{1}{\sqrt{2\pi}}<\frac12 .$$
For $\ell\ge1$ let $B_\ell$ be the number of non-hold options of a uniformly random lazy-walk pattern of length $\ell$ read from a vertex $v$; $B_\ell\sim\operatorname{Bin}(\ell,\tfrac12)$ for every $v$. Then:

1. **Binomial closeness.** For all integers $m,m'\ge1$ with $|m-m'|\le\sqrt{\min(m,m')}$,
$$\operatorname{TV}\bigl(\operatorname{Bin}(m,\tfrac12),\operatorname{Bin}(m',\tfrac12)\bigr)\le C_0\,\frac{|m-m'|}{\sqrt{\min(m,m')}}.$$
2. **Transfer to walk statistics.** A lazy-walk pattern determines its endpoint from its sequence of non-hold options. For any fixed labeling $\varphi$ of the powered graph $G_t$ with its fixed view radius $R=t+\lceil\sqrt t\rceil$ and lengths $1\le\ell,\ell'\le R$, the view at that endpoint claims for its start the value at the canonical coordinate specified in [[def-plurality-decoding-of-powered-local-views]]. Thus the claimed value, like the endpoint, is a function of the non-hold option sequence alone. Let $X_{v,\ell}$ denote the value claimed for $v$ by the view at the endpoint of a uniformly random lazy-walk pattern of length $\ell$ from $v$. Then for $m = \min(\ell,\ell')$ and $|\ell-\ell'|\le\sqrt m$,
$$\operatorname{TV}\bigl(X_{v,\ell},X_{v,\ell'}\bigr)\le C_0\,\frac{|\ell-\ell'|}{\sqrt m},$$
The same endpoint-law bound holds for arbitrary positive lengths satisfying the displayed window condition, without a radius restriction.
3. **The window used by the powering analysis.** If $t\ge4$ and $|\ell-t|\le \sqrt t/(8C_0|\Sigma|)$, then $\operatorname{TV}(X_{v,t},X_{v,\ell})\le 1/(4|\Sigma|)$, uniformly in the start vertex $v$ and in the labeling of $G_t$.

## Facts & Assumptions

**Given:** a $d$-regular binary constraint graph $G$ in the stated convention, its lazy-walk patterns, a vertex $v$, lengths $\ell,\ell'\ge1$, and the statistic $X_{v,\ell}$ of the claimed value defined above.

[F1] A lazy step at $v$ chooses uniformly among the $2d$ options consisting of $d$ hold options and the $d$ slots at $v$; the steps of a lazy-walk pattern are independent, the pattern set $\mathcal P_\ell=\{1,\dots,2d\}^\ell$ has $(2d)^\ell$ elements, the transition matrix is $(I+M)/2$, the uniform distribution is stationary, and reversal of a pattern interchanges its start and endpoint ([[def-constraint-graph-powering]]).

[F2] For any $1\le\ell\le R$ and pattern $\pi\in\mathcal P_\ell$ from $v$ ending at $w$, the view at $w$ claims the value $\varphi(w)(\kappa_{w,v})$ for $v$, where $\kappa_{w,v}$ is the fixed canonical pattern from $w$ to $v$; $X_{v,\ell}$ is this claimed value for a uniformly random $\pi$ ([[def-plurality-decoding-of-powered-local-views]]).

[L1] For $a_n=\binom{2n}{n}/4^n$ one has $\sqrt{\pi n}\,a_n\to1$ as $n\to\infty$ ([[cor-central-binomial-coefficient-asymptotic-from-wallis]]).

## Proof

**Proof technique:** direct.

1.1 A pattern records at each coordinate whether it is a hold or a move, together with the chosen option within that type. For each $k$, there are $\binom{\ell}{k}d^k d^{\ell-k}=\binom{\ell}{k}d^\ell$ patterns with exactly $k$ moves, so $B_\ell\sim\operatorname{Bin}(\ell,\tfrac12)$. Conditional on $B_\ell=k$, the sequence of the $k$ move slots is uniform among the $d^k$ slot sequences; hold-option identities and the set of hold positions do not affect it. In particular $B_\ell$ does not depend on $v$. [F1, given]

1.2 Write $P_m(k)=\binom mk2^{-m}$ and $b_m=\max_kP_m(k)$, and let $a_r=\binom{2r}{r}/4^r$. Then $b_{2r}=a_r$ and $b_{2r+1}=a_r(2r+1)/(2r+2)$, while $a_{r+1}/a_r=(2r+1)/(2r+2)<1$; hence $b_m$ is nonincreasing in $m$. Moreover $a_r\sqrt r$ is increasing because $\bigl(a_{r+1}\sqrt{r+1}\bigr)/\bigl(a_r\sqrt r\bigr)=\sqrt{(2r+1)^2/(4r(r+1))}>1$, so [L1] gives $a_r\le1/\sqrt{\pi r}$. For even $m=2r$ this yields $b_m\le\sqrt{2/(\pi m)}$. For odd $m=2r+1$ with $r\ge1$, it gives $b_m\le(2r+1)/((2r+2)\sqrt{\pi r})\le\sqrt{2/(\pi(2r+1))}$, since squaring the last inequality reduces to $4r^2+2r-1\ge0$; and $b_1=1/2\le\sqrt{2/\pi}$. Thus in every case $b_m\le\sqrt{2/(\pi m)}=2C_0/\sqrt m$. [L1, algebra]

2.1 The endpoint of a pattern is determined by its sequence of non-hold options, and the claimed value of [F2] is the value of the fixed canonical coordinate from that endpoint back to $v$. Hence both the endpoint and the claimed value are functions of the non-hold option sequence alone. [F1, F2, step 1.1]

2.2 Pascal's rule gives $P_{m+1}(k)=\tfrac12\bigl(P_m(k)+P_m(k-1)\bigr)$, so $\sum_k\lvert P_{m+1}(k)-P_m(k)\rvert=\tfrac12\sum_k\lvert P_m(k)-P_m(k-1)\rvert$. The sequence $k\mapsto P_m(k)$ rises to its maximum and then falls, so its total variation is at most $2b_m$ and hence $\operatorname{TV}(\operatorname{Bin}(m,\tfrac12),\operatorname{Bin}(m+1,\tfrac12))\le\tfrac12b_m$. [step 1.2, algebra]

3.1 For $m'\ge m$ the triangle inequality for total variation and step 2.2 give $\operatorname{TV}(\operatorname{Bin}(m,\tfrac12),\operatorname{Bin}(m',\tfrac12))\le\tfrac12\sum_{i=0}^{m'-m-1}b_{m+i}\le\tfrac{m'-m}{2}b_m\le C_0\frac{m'-m}{\sqrt m}$ by the monotonicity and the bound of step 1.2; the case $m'<m$ is the same with the roles exchanged, which proves claim 1 with $\min(m,m')$ in the denominator. [step 1.2, step 2.2, algebra]

4.1 Let $1\le\ell,\ell'\le R$ with $m=\min(\ell,\ell')$ and $|\ell-\ell'|\le\sqrt m$ be given, and couple $B_\ell$ and $B_{\ell'}$ maximally, so that they differ with probability $\operatorname{TV}(\operatorname{Bin}(\ell,\tfrac12),\operatorname{Bin}(\ell',\tfrac12))$. Conditionally on $B_\ell=B_{\ell'}=k$, use the same uniform slot sequence of length $k$ from $v$ in both experiments, which is legitimate by the conditional uniformity of step 1.1 and the fact that the endpoints and claimed values are functions of that sequence by step 2.1. This couples $X_{v,\ell}$ and $X_{v,\ell'}$ to agree except on an event of probability at most the binomial total variation, and endpoints are coupled in the same way; claim 2 follows from step 3.1. [step 1.1, step 2.1, step 3.1]

5.1 If $t\ge4$ and $|\ell-t|\le\sqrt t/(8C_0|\Sigma|)$, then the window constant $1/(8C_0|\Sigma|)<1$ gives $|\ell-t|\le\sqrt t$ and hence $m=\min(\ell,t)\ge t-\sqrt t\ge t/2$. Also $1/(8C_0|\Sigma|)<1/\sqrt2$ for $|\Sigma|\ge1$, so $|\ell-t|\le\sqrt{t/2}\le\sqrt m$ and $1\le\ell\le t+\sqrt t\le R$, so claim 2 applies. It gives $\operatorname{TV}(X_{v,\ell},X_{v,t})\le C_0|\ell-t|/\sqrt m\le\sqrt2/(8|\Sigma|)\le1/(4|\Sigma|)$. This proves claim 3 uniformly in $v$ and in the powered labeling. [step 4.1, algebra] ∎

## Remarks

- The lemma is stated for the binomial law of the number of moves rather than for the non-lazy walk of a fixed length, because the lazy convention of [[def-constraint-graph-powering]] makes the hold positions independent of the moves; this couples endpoints and the canonical-coordinate claims using the same move sequence. Dinur's Lemma 6.4 proves the analogous binomial weight-ratio estimate for the non-lazy distribution with $p=1-1/d$, and Arora-Barak's printed p. 374 uses the statistical-distance form with the constant $10\delta$ for a window of size $\delta\sqrt t$; the constant $C_0=1/\sqrt{2\pi}$ above is the exact constant supplied by the central binomial asymptotic.
- No hypothesis on the graph beyond $d$-regularity is used: the lemma compares laws of walks of different lengths on the same graph and involves neither the spectral gap nor the alphabet. The alphabet enters only through the final constant $1/(4|\Sigma|)$ of claim 3, which fixes the admissible window width.
- The transfer claim is stated for the claimed-value statistic because that is the consumer's need in [[lem-plurality-consistency-along-middle-walk-positions]]; the endpoint version is the special case in which the statistic forgets the endpoint's view coordinate.
