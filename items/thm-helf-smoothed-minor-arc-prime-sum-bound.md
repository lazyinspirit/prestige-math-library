---
id: thm-helf-smoothed-minor-arc-prime-sum-bound
kind: theorem
title: "Explicit Minor-Arc Bound for Helfgott's Smoothed von Mangoldt Sum"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
proof_strategy: direct
deps:
  - def-smoothed-prime-exponential-sum
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: "H. A. Helfgott, Minor arcs for Goldbach's problem"
      url: "https://arxiv.org/pdf/1205.5252v4"
      locator: "Main Theorem, printed pp. 2–3; exact smoothing and q-ranges."
---

## Statement

For $t>0$ let $\eta(t)=4\max(\log 2-|\log(2t)|,0)$, and set $\eta(0)=0$. Let $x\ge x_0=2.16\cdot10^{20}$, $Q=\frac34x^{2/3}$, and
$$S_\eta(\alpha,x)=\sum_{n\ge1}\Lambda(n)e(\alpha n)\eta(n/x).$$
Suppose $2\alpha=a/q+\delta/x$ with integers $a,q$, $q\ge1$, $\gcd(a,q)=1$, $q\le Q$, and $|\delta/x|\le1/(qQ)$. Put $\delta_0=\max(2,|\delta|/4)$ and
$$R_{x,t}=0.27125\log\left(1+\frac{\log(4t)}{2\log(9x^{1/3}/(2.004t))}\right)+0.41415,$$
$$L_{x,u,q}=\min\left(\frac{\log(u^{7/4}q^{13/4})+80/9}{\varphi(q)/q},\frac56\log x+\frac{50}{9}\right)+\frac{\log q}{(80/9)u^{16/9}+111/5}\quad(u\ge2).$$
If $q\le x^{1/3}/6$, then
$$|S_\eta(\alpha,x)|\le\frac{R_{x,\delta_0q}\log(\delta_0q)+0.5}{\sqrt{\delta_0\varphi(q)}}x+\frac{2.5x}{\sqrt{\delta_0q}}+\frac{2x}{\delta_0q}L_{x,\delta_0,q}+3.2x^{5/6}.$$
If $q>x^{1/3}/6$, then
$$|S_\eta(\alpha,x)|\le0.2727x^{5/6}(\log x)^{3/2}+1218x^{2/3}\log x.$$
Here $\varphi(q)$ is the number of residue classes modulo $q$ coprime to $q$.

## Statement references

[[def-smoothed-prime-exponential-sum|$S_\eta$ uses $e(t)=e^{2\pi it}$ and the von Mangoldt weights $\Lambda(n)$]]

[Helfgott, *Minor arcs for Goldbach's problem*, Main Theorem](https://arxiv.org/pdf/1205.5252v4)

## Partial proof: removal of even arguments

This supplies only the even-prime-power correction in the source's §2.5 setup. It does not establish either numerical bound in the Statement. For the exact weight above and $x\ge4$, put
$$S_{\eta,\mathrm{odd}}(\alpha,x)=\sum_{\substack{n\ge1\\n\ \mathrm{odd}}}\Lambda(n)e(\alpha n)\eta(n/x).$$
Then
$$S_\eta(\alpha,x)-S_{\eta,\mathrm{odd}}(\alpha,x)=(\log2)\sum_{k\ge1}e(\alpha2^k)\eta(2^k/x),\qquad |S_\eta-S_{\eta,\mathrm{odd}}|\le4(\log2)^2.$$
Moreover, $\sum_{k\ge1}\eta(2^k/x)=4\log2$. Thus a sum restricted to $n\le V<x/4$ with the same smoothing vanishes, while the even correction generally does not vanish. Every sum here is finite.

## Facts & Assumptions

**Given:** The Statement's exact weight, $x\ge4$, and $\alpha\in\mathbb R$.

[F1] [[def-smoothed-prime-exponential-sum]] defines $S_\eta$, $e(t)=\exp(2\pi it)$ and $\Lambda(p^k)=\log p$, with $\Lambda(n)=0$ otherwise.

## Proof

**Scope:** Only the partial identities and bounds under “Partial proof: removal of even arguments” are proved below. The theorem's numerical Statement remains unproved locally.

1.1 The definition of $\eta$ gives $\eta(t)>0$ exactly for $1/4<t<1$, with zero values at both endpoints. Thus only integers $x/4<n<x$ contribute. An even integer with nonzero von Mangoldt weight must be $2^k$ for $k\ge1$: if $p$ were odd, all powers of $p$ would be odd. Subtracting the odd terms therefore gives the displayed difference, with coefficient $\Lambda(2^k)=\log2$. [given, F1, algebra]

1.2 Put $a=\log x/\log2-1\ge1$, $j=\lfloor a\rfloor\ge1$ and $u=a-j\in[0,1)$. For every $k\ge1$, the weight is $\eta(2^k/x)=4\log2\max(1-|k-a|,0)$. Only $k=j,j+1$ can have positive weight; their weights are $4\log2(1-u)$ and $4\log2\,u$, respectively. This includes the integral case $u=0$, when the second weight and both adjacent endpoint weights vanish. Summing proves $\sum_{k\ge1}\eta(2^k/x)=4\log2$. [given, algebra]

2.1 Since $|e(\alpha2^k)|=1$ and the weights are nonnegative, the triangle inequality in step 1.1 and step 1.2 give $|S_\eta-S_{\eta,\mathrm{odd}}|\le4(\log2)^2$. If $n\le V<x/4$, then $n/x<1/4$, so its smoothing weight is zero. This proves all the asserted partial identities and bounds. [F1, step 1.1, step 1.2, algebra] ∎

## Remarks

The source's display following (2.23), printed p. 9, writes the correction with $n\mid v$. For its choice $v=2$, removing even arguments requires all prime powers $2^k$, as proved here; a divisor-only sum would omit these contributions. This local correction uses no external finite computation. The full minor-arc proof remains not supplied.

The full numerical Statement is retained and its proof remains not supplied. The actual source route is the Vaughan Type-I/Type-II decomposition, sharp prime-supported large-sieve and tail estimates, and explicit parameter/norm bounds. Polynomial Weyl estimates and the second-derivative test are not used in that source proof; the former planned edges are not substitutes for these missing local branches. No scope or constant is weakened by correcting those logical dependencies.
