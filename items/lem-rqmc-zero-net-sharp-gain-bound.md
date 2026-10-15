---
id: lem-rqmc-zero-net-sharp-gain-bound
kind: lemma
title: "Sharp gain bound for scrambled $(0,m,d)$-nets"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 6
deps:
  - lem-rqmc-scrambled-net-gain-formula
  - def-lambda-t-net
  - def-countable-choice
  - lem-rqmc-scrambled-net-variance-identity
justified_by: []
proof_strategy: direct
axiom_use: "Countable Choice is inherited only through the L2 gain-formula supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Variance of Scrambled Net Quadrature, Theorem 3 and proof, pp. 1902–1904"
      url: "https://citeseerx.ist.psu.edu/document?doi=f6282581a7ecdce7e38020a74b3022ccf1cfe14e&repid=rep1&type=pdf"
    - title: "Art B. Owen, Monte Carlo Book: The Quasi-Monte Carlo Parts, Chapter 17 §17.5, Theorem 17.3"
      url: "https://artowen.su.domains/mc/qmcstuff.pdf"
---

## Statement

Assume Countable Choice. Let $a_1,\ldots,a_n$ be a $(0,m,d)$-net in base
$b\ge\max(d,2)$, with $n=b^m$. For every nonempty $u$ and every scale vector
$\kappa$, the nested-scramble gain of
[[lem-rqmc-scrambled-net-variance-identity]] satisfies
$$\Gamma_{u,\kappa}\le \left(\frac b{b-1}\right)^{\min(m,d-1)}.$$

## Facts & Assumptions
**Given:** Countable Choice, a $(0,m,d)$-net, and a nonempty coordinate subset $u$.

[F1] [[def-lambda-t-net]]: At total digit depth $m$, every elementary interval contains exactly one net point.

[F2] [[lem-rqmc-scrambled-net-gain-formula]]: The gain is determined by the ordered pair counts at depths $\kappa+\mathbf1_V$.

[A1] [[def-countable-choice]]: Countable Choice is inherited through the $L2$ gain formula.



## Proof

**Proof technique:** direct.

**Given:** The objects and assumptions in the Statement.

1.1 Put $r=|u|$ and $k=|\kappa|$. At total digit depth $\ell\le m$, every cell contains $b^{m-\ell}$ points by partitioning it into depth-$m$ cells, so its ordered-pair count is $n^2b^{-\ell}$. At depth $\ell\ge m$, each cell lies in a depth-$m$ cell containing one point, so the total ordered-pair count is $n$. [F1, given, algebra]

2.1 Substitute these counts into [F2]. If $k+r\le m$, every term uses the first count and the alternating sum is zero. If $k\ge m$, every term uses the second count and the binomial theorem gives $\Gamma_{u,\kappa}=1$. In the remaining case $m-r<k<m$, let $c=m-k$, so $1\le c<r$. Grouping subsets by cardinality and using the partial binomial identity gives $\Gamma_{u,\kappa}=g_{r,c}:= 1+\frac{(-1)^r}{(b-1)^{r-1}} \sum_{j=0}^{c-1}\binom{r-1}{j}(-b)^j.$ [A1, F2, step 1.1, algebra]

3.1 Suppose $r=c+2L$ for an integer $L\ge1$. For $T_j=\binom{r-1}{j}b^j$ and $1\le j\le c-1$, the ratio $T_j/T_{j-1}=b(r-j)/j\ge1$, since $b\ge r$ and $j\le r-2$. Pairing adjacent terms in the alternating sum shows its sign is $(-1)^{c-1}$ and its absolute value is at most $T_{c-1}$. Since $(-1)^r=(-1)^c$, the correction to $1$ in $g_{r,c}$ is nonpositive. Hence $g_{r,c}\le1$. [step 2.1, given, algebra]

3.2 Suppose $r=c+2L-1$ for an integer $L\ge1$. Define $S_{r,c-1}=\sum_{j=0}^{c-1}\binom{r-1}{j}(-b)^j$ and $T_j=\binom{r-1}{j}(-b)^j$, with $T_{-1}=0$. Pascal's identity, applied termwise, gives $(b-1)^2S_{r,c-1}-S_{r+2,c-1} =b(b-2)T_{c-1}+b^2T_{c-2}$. Using the formula in step 2.1 and the parity $r=c+2L-1$ therefore gives $g_{r,c}-g_{r+2,c} =\frac{b^c}{(b-1)^{r+1}} \left((b-2)\binom{r-1}{c-1}-\binom{r-1}{c-2}\right).$ If $c=1$, the second binomial is zero. If $c\ge2$ and $r+2\le d\le b$, then $\binom{r-1}{c-2}/\binom{r-1}{c-1}=(c-1)/(2L)$. The condition $r+2=c+2L+1\le b$ gives $(c-1)/(2L)\le(b-2L-2)/(2L)\le b-2$. Thus $g_{r,c}\ge g_{r+2,c}$ whenever the larger dimension $r+2$ is allowed. [step 2.1, given, algebra]

4.1 Repeatedly applying step 3.2 shows every allowed odd-offset gain is at most $g_{c+1,c}$. By the binomial theorem, $\sum_{j=0}^{c-1}\binom c j(-b)^j=(1-b)^c-(-b)^c$, so step 2.1 gives $g_{c+1,c}=(b/(b-1))^c$. The even-offset case is at most $1$ by step 3.1, and the other two cases are $0$ or $1$. Since $c=m-k\le m$ and $c<r\le d$, every gain is at most $(b/(b-1))^{\min(m,d-1)}$. [step 2.1, step 3.1, step 3.2, algebra] ∎
