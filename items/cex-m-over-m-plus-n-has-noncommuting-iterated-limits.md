---
id: cex-m-over-m-plus-n-has-noncommuting-iterated-limits
kind: counterexample
title: "The double sequence $(m+1)/(m+n+2)$ has unequal iterated limits"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-limit, cor-archimedean-reciprocal, def-canonical-natural, lem-of-naturals-positive, lem-of-inverse-positive]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-terra-codex-subscription
    verdict: certify
    date: 2026-08-10
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Stephen Abbott, Understanding Analysis, 2nd ed., Exercise 2.3.13"
      url: "https://link.springer.com/chapter/10.1007/978-1-4939-2712-8_2"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** whenever both iterated limits of a double real sequence
exist, they are equal.

For $m,n\in\mathbb{N}$ define

$$s_{m,n}:=\frac{\iota(m+1)}{\iota(m+n+2)}=\frac{\iota(m+1)}{\iota(m+1)+\iota(n+1)}.$$

Then

$$\lim_m\lim_ns_{m,n}=0,\qquad \lim_n\lim_ms_{m,n}=1.$$

The shifts make the expression defined at the first index $(m,n)=(0,0)$.

## Facts & Assumptions

**Given:** The double sequence $s_{m,n}$ in the Statement.

[L1] The canonical-natural map satisfies $\iota(0)=0$ and $\iota(r+1)=\iota(r)+1$; positive canonical naturals increase, and their reciprocals decrease ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

[L2] For every real $\varepsilon>0$ there is $N\ge1$ with $1/\iota(N)<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[L3] A real sequence converges when its terms are eventually within every positive error of the proposed limit ([[def-real-limit]]).

## Counterexample

**Proof technique:** direct.

1.1 The denominator $\iota(m+1)+\iota(n+1)$ is positive for all $m,n$, so every $s_{m,n}$ is defined and lies between $0$ and $1$. [L1, algebra]

1.2 Fix $m$ and put $a:=\iota(m+1)>0$. Then $0\le s_{m,n}\le a/\iota(n+1)$; given $\varepsilon>0$, [L2] makes the latter smaller than $\varepsilon$ for all sufficiently large $n$. Hence $\lim_ns_{m,n}=0$. [L1, L2, L3, choose, algebra]

1.3 Fix $n$ and put $b:=\iota(n+1)>0$. Since $|1-s_{m,n}|=b/(\iota(m+1)+b)\le b/\iota(m+1)$, [L2] makes this smaller than any prescribed $\varepsilon>0$ for all sufficiently large $m$. Hence $\lim_ms_{m,n}=1$. [L1, L2, L3, choose, algebra]

2.1 By step 1.2 the first inner-limit sequence is constantly $0$, so its limit in $m$ is $0$; by step 1.3 the other inner-limit sequence is constantly $1$, so its limit in $n$ is $1$. [step 1.2, step 1.3, L3]

3.1 Thus both iterated limits exist and are unequal, refuting the claim. [step 2.1] ∎
