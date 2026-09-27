---
id: thm-effective-dimension-is-liminf-prefix-complexity-rate
kind: theorem
title: "Effective dimension is the liminf prefix-complexity rate"
status: published
origin: session
deps: [def-effective-hausdorff-dimension, def-prefix-free-machine-and-prefix-complexity, thm-kraft-inequality, thm-invariance-for-prefix-complexity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  verified:
    model: "gpt-6-sol"
    verdict: "locally-reviewed"
    date: 2026-09-26
    scope: "Current item-local mathematical content and used-supplier-interface review, as documented in the bound evidence; no whole-closure claim; no new judge claim."
    delegated_by: "owner"
sources:
  references:
    - title: "Franklin and Porter, Theorem 4.34"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Statement
For every $X\in2^\omega$, $\dim(X)=\liminf_{n\to\infty}K(X\upharpoonright n)/n$.
## Proof
**Given:** $X\in2^\omega$.

1.1 Let an effective $s$-gale $d$ succeed on $X$, and fix a rational $t>s$. For $n\ge1$ enumerate $E_n=\{\sigma\in2^n:d(\sigma)>1\}$, possible because $d$ is lower semicomputable. Iterating the gale identity gives $\sum_{|\sigma|=n}d(\sigma)=2^{sn}d(\varnothing)$, so $|E_n|<2^{sn}d(\varnothing)$. Choose an integer $c$ such that $|E_n|<2^{\lceil tn\rceil+c}$ for every $n$. Such a fixed $c$ exists since $t>s$ and $d(\varnothing)$ is finite ([[def-effective-hausdorff-dimension]]). [given]

1.2 For the reverse inequality write $a=\liminf_n K(X\upharpoonright n)/n$, which is finite since a self-delimiting code for $n$ followed by $n$ bits gives $K(X\upharpoonright n)\le n+O(\log n)$. Independently choose rationals $q,t$ with $a<q<t$. Let $U$ be the fixed optimal prefix-free machine. For each halted program $p$ with output $\sigma$, put mass $2^{-|p|}$ uniformly on the cylinder $[\sigma]$: its value on a cylinder $[\tau]$ is $2^{-|p|}$ if $\tau\preceq\sigma$, $2^{-|p|-|\tau|+|\sigma|}$ if $\sigma\prec\tau$, and $0$ if $\tau$ and $\sigma$ are incompatible. Denote the sum of these values over all halted $p$ by $\mu([\tau])$. Kraft's inequality ([[thm-kraft-inequality]]) gives $\mu([\varnothing])\le1$; each summand is nonnegative and obeys $\mu_p([\tau])=\mu_p([\tau0])+\mu_p([\tau1])$, so the sum has the same identity. [given]

2.1 Give $n$ a computable self-delimiting code of length $O(\log n)$, followed by a fixed-length $\lceil tn\rceil+c$-bit index into the enumeration of $E_n$. These codes form a prefix-free machine: the first code identifies $n$, and all following indices then have the same length. Its output on an index is the corresponding enumerated string when that index appears. Thus, by optimality of $K$ ([[thm-invariance-for-prefix-complexity]]), each $\sigma\in E_n$ has $K(\sigma)\le tn+O(\log n)$. Success of $d$ makes $d(X\upharpoonright n)>1$ at infinitely many, hence unboundedly many, lengths $n$. It follows that $\liminf_n K(X\upharpoonright n)/n\le t$. Since rational $t>s$ was arbitrary, the liminf is at most $s$, and therefore at most $\dim(X)$. [step 1.1]

3.1 Set $d_t(\tau)=2^{t|\tau|}\mu([\tau])$. Because $t$ is rational and the halted computations can be enumerated, $d_t$ is lower semicomputable; the preceding identity makes it an effective $t$-gale ([[def-effective-hausdorff-dimension]]). At any $\sigma$ with a shortest program $p$, its contribution alone gives $d_t(\sigma)\ge2^{t|\sigma|-K(\sigma)}$ ([[def-prefix-free-machine-and-prefix-complexity]]). There are infinitely many lengths $n$ with $K(X\upharpoonright n)<qn$ by the definition of the liminf. On them $d_t(X\upharpoonright n)>2^{(t-q)n}$, which tends to infinity. Thus $d_t$ succeeds and $\dim(X)\le t$. Letting rational $t$ decrease to $a$ completes the equality. [step 1.2] ∎
