---
id: thm-dini-on-a-closed-interval
kind: theorem
title: "Dini's theorem on a closed interval: monotone pointwise convergence of continuous functions to a continuous limit is uniform"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-pointwise-uniform-and-uniformly-cauchy-convergence, def-continuity-real, thm-algebra-of-continuous-functions, thm-continuity-preimage-characterisation, thm-heine-borel-r, lem-finite-set-has-max, lem-finite-choice, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-07-31
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I, §6.1"
      url: "https://www.jirka.org/ra/html/sec_puconv.html"
    - title: "Dini's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dini%27s_theorem"
    - title: "W. Trench, Introduction to Real Analysis"
      url: "https://ramanujan.math.trinity.edu/wtrench/texts/trench_real_analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$ be reals. Suppose $f_k:[a,b]\to\mathbb{R}$ and
$f:[a,b]\to\mathbb{R}$ are continuous, $f_k\to f$ pointwise, and the sequence
is pointwise monotone in one fixed direction:

$$f_k(x)\le f_{k+1}(x)\quad\text{for all }k,x,$$

or

$$f_{k+1}(x)\le f_k(x)\quad\text{for all }k,x.$$

Then $f_k\to f$ uniformly on $[a,b]$.

## Facts & Assumptions

**Given:** Reals $a<b$, continuous functions $f_k,f:[a,b]\to\mathbb{R}$, pointwise convergence $f_k\to f$, and one of the two pointwise monotonicity conditions in the Statement.

[A1] Uniform convergence means that for every real $\varepsilon>0$ there is $N$ such that $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in[a,b]$ ([[def-pointwise-uniform-and-uniformly-cauchy-convergence]]).

[L1] Sums and scalar multiples of continuous real functions are continuous ([[thm-algebra-of-continuous-functions]], [[def-continuity-real]]).

[L2] If $h:A\to\mathbb{R}$ is continuous, the inverse image of an open subset of $\mathbb{R}$ is relatively open in $A$: it is $O\cap A$ for some open $O\subseteq\mathbb{R}$ ([[thm-continuity-preimage-characterisation]]).

[L3] Every open cover of the closed bounded interval $[a,b]$ has a finite subcover ([[thm-heine-borel-r]]).

[L4] Every finite list of natural numbers has a greatest member: apply the finite-real maximum theorem to their canonical images, which preserve the natural-number order; finite choices can be made without any choice axiom ([[lem-finite-set-has-max]], [[def-canonical-natural]], [[lem-of-naturals-positive]], [[thm-nat-linear-order]], [[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix a real $\varepsilon>0$. For each $n\in\mathbb{N}$ put $h_n:=f_n-f$ and $U_n:=\{x\in[a,b]:|h_n(x)|<\varepsilon\}$. The function $h_n$ is continuous by [L1], so [L2] makes $U_n$ relatively open in $[a,b]$. [L1, L2, construct]

1.2 In the nondecreasing case, pointwise convergence forces $f_n(x)\le f(x)$ for every $n,x$, and the errors $f(x)-f_n(x)$ decrease with $n$; in the nonincreasing case it forces $f(x)\le f_n(x)$ and the errors $f_n(x)-f(x)$ decrease. Thus $U_n\subseteq U_{n+1}$ in either case, and pointwise convergence gives $\bigcup_nU_n=[a,b]$. [given, algebra]

2.1 Let $\mathcal{O}$ be the family of all open sets $O\subseteq\mathbb{R}$ whose trace $O\cap[a,b]$ equals $U_n$ for some $n$. By step 1.1 each $U_n$ has such an open witness, and by step 1.2 the family $\mathcal{O}$ covers $[a,b]$. [step 1.1, step 1.2, L2, construct]

3.1 By [L3], choose finitely many $O_0,\dots,O_r\in\mathcal{O}$ covering $[a,b]$. By finite choice, choose $n_0,\dots,n_r$ with $O_i\cap[a,b]=U_{n_i}$, and let $N:=\max\{n_0,\dots,n_r\}$. [step 2.1, L3, L4, choose]

4.1 Since the $U_n$ are increasing, every $U_{n_i}$ is contained in $U_N$; the traces of the $O_i$ cover $[a,b]$, so $U_N=[a,b]$, and then $U_k=[a,b]$ for every $k\ge N$. [step 1.2, step 3.1]

5.1 Therefore $|f_k(x)-f(x)|<\varepsilon$ for every $k\ge N$ and every $x\in[a,b]$. Since $\varepsilon$ was arbitrary, the convergence is uniform. [step 4.1, A1] ∎
