---
id: lem-sard-slicing-for-compact-null-sections
kind: lemma
title: "Compact null sections imply a compact set is null"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-null-and-content-zero-in-rn,
       thm-lebesgue-number-lemma]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-23'
    scope: Owner-authorized bounded mathematical repair review; evidence research/ap-319-sol-repair/agent-07-receipts.jsonl (lem-sard-slicing-for-compact-null-sections). No independent judge or whole-closure certification.
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Marco Gualtieri, Topology I: Smooth Manifolds, cumulative notes"
      url: "https://www.math.toronto.edu/mgualt/courses/17-1300/docs/17-1300-notes.pdf"
---

## Statement

Let $n\ge 1$, let $a\le b$, and let $K\subseteq [a,b]\times\mathbb R^n$ be compact. For each
$t\in[a,b]$, write

$$ K_t:=\{y\in\mathbb R^n:(t,y)\in K\}. $$

If every section $K_t$ is a null subset of $\mathbb R^n$, then $K$ is a null
subset of $\mathbb R^{n+1}$.

## Facts & Assumptions

**Given:** An integer $n\ge 1$, real numbers $a\le b$, and a compact set $K\subseteq [a,b]\times\mathbb R^n$ whose sections $K_t$ are null for every $t\in[a,b]$.

[F1] Euclidean nullity means that for every $\varepsilon>0$ the set can be covered by countably many closed cubes of total volume below $\varepsilon$ ([[def-null-and-content-zero-in-rn]]).

[L1] Every open cover of a compact metric space has a Lebesgue number ([[thm-lebesgue-number-lemma]]).

## Proof
**Proof technique:** direct.

1.1 If $a=b$, compactness bounds $K$ inside $\{a\}\times[-R,R]^n$ for some $R>0$. Divide the $n$-dimensional base into a finite grid of cubes of side at most $\delta$ and cover each corresponding point of $K$ by an $(n+1)$-cube of side $\delta$ centred in the first coordinate at $a$. The number of grid cubes is at most $(2R/\delta+2)^n$, so their total $(n+1)$-volume is at most $(2R+2\delta)^n\delta\to0$. By [F1], $K$ is null. Assume henceforth that $a<b$. [F1, given, cases]

1.2 Fix $\varepsilon>0$ and put $L:=b-a+1$. For each $t\in[a,b]$, [F1] supplies the following covers. [F1, given, choose]
There are finitely many closed $n$-cubes $Q_{t,1},\ldots,Q_{t,m_t}$ covering the compact section $K_t$ with total $n$-volume below $\varepsilon/(2^{n+3}L)$. Enlarge them slightly to open $n$-cubes $\widetilde Q_{t,\ell}\supseteq Q_{t,\ell}$ so that, with $$ O_t:=\bigcup_{\ell=1}^{m_t}\widetilde Q_{t,\ell}, $$ one still has $$ \sum_{\ell=1}^{m_t}\operatorname{vol}_n(\widetilde Q_{t,\ell}) <\frac{\varepsilon}{2^{n+2}L}. $$ Thus each section has an open finite cube cover with the stated uniform volume budget. [F1, given, choose]

2.1 Since $K_t\subseteq O_t$ and $O_t$ is open, compactness of $K$ gives the following interval. [step 1.2, given, contradiction]
There is an open interval $I_t$ about $t$ such that $$ K\cap(I_t\times\mathbb R^n)\subseteq I_t\times O_t. $$ Otherwise one could find $(t_j,y_j)\in K$ with $t_j\to t$ and $y_j\notin O_t$; passing to a convergent subsequence inside the compact set $K$ yields a limit point $(t,y)\in K$ with $y\in K_t\setminus O_t$, contradiction. [step 1.2, given, contradiction]

3.1 By [L1], the cover $\{I_t:t\in[a,b]\}$ has a Lebesgue number. Choose a finite partition of $[a,b]$ into closed intervals $J_1,\ldots,J_r$ of positive length smaller than that number, and for each $j$ choose $t_j$ with $J_j\subseteq I_{t_j}$. Then $\sum_j|J_j|=b-a<L$. For each prism $J_j\times\widetilde Q_{t_j,\ell}$, use the following subdivision. [L1, step 2.1, choose]
Let $\lambda_j:=|J_j|$ and let $s_{j,\ell}$ be the side length of $\widetilde Q_{t_j,\ell}$. If $\lambda_j\ge s_{j,\ell}$, partition the interval direction into at most $\lceil \lambda_j/s_{j,\ell}\rceil$ pieces of length at most $s_{j,\ell}$; if $\lambda_j\le s_{j,\ell}$, partition each of the $n$ base directions into at most $\lceil s_{j,\ell}/\lambda_j\rceil$ pieces of length at most $\lambda_j$. In either case the prism is covered by finitely many closed $(n+1)$-cubes of total volume at most $$ 2^n\lambda_j s_{j,\ell}^n =2^n|J_j|\,\operatorname{vol}_n(\widetilde Q_{t_j,\ell}). $$ These cubes cover $K$, and their total volume is at most $$ 2^n\sum_{j=1}^r |J_j| \sum_{\ell=1}^{m_{t_j}}\operatorname{vol}_n(\widetilde Q_{t_j,\ell}) <2^nL\cdot \frac{\varepsilon}{2^{n+2}L}<\varepsilon. $$ By [F1], $K$ is null. [F1, L1, step 2.1, algebra]

4.1 Therefore compact null sections imply the whole compact set is null. [step 1.1, step 3.1] ∎
