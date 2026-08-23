---
id: thm-open-mapping-theorem-holomorphic-functions
kind: theorem
title: "Open mapping theorem for holomorphic functions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-identity-theorem-holomorphic-functions, thm-local-normal-form-holomorphic-map, cor-local-multiplicity-count-holomorphic-map, def-homeomorphism-and-open-maps, def-complex-domain]
justified_by: []
forward_refs: []
aliases: []
landmark: true
short: "Nonconstant holomorphic maps are open"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, Theorem 5.5.1"
      url: "https://www.jirka.org/ca/ca.pdf"
    - title: "B. V. Shabat, Introduction to Complex Analysis, Theorem 1.8"
      url: "https://math.stanford.edu/~ryzhik/shabat-all.pdf"
pipeline_run: null
---

## Statement

Every nonconstant holomorphic function on a complex domain is an open map.

Thus, if $f:\Omega\to\mathbb C$ is nonconstant and holomorphic on a complex domain $\Omega$, then $f[O]$ is open in $\mathbb C$ for every open subset $O\subseteq\Omega$ ([[def-homeomorphism-and-open-maps]]).

## Facts & Assumptions

**Given:** A nonconstant holomorphic function $f$ on a complex domain $\Omega$ ([[def-complex-domain]]) and an open subset $O\subseteq\Omega$.

[L1] If two holomorphic functions on a complex domain agree on a set with an accumulation point in the domain, then they agree everywhere on the domain ([[thm-identity-theorem-holomorphic-functions]]).

[L2] If $\Omega$ is a complex domain, $f:\Omega\to\mathbb C$ is nonconstant and holomorphic, $a\in\Omega$, and $m=\deg_a f$, then near $a$ there is a biholomorphic coordinate $\phi$ with $\phi(a)=0$ and $f(z)-f(a)=\phi(z)^m$ ([[thm-local-normal-form-holomorphic-map]]).

[L3] If $\Omega$ is a complex domain, $f:\Omega\to\mathbb C$ is nonconstant and holomorphic, $a\in\Omega$, and $m=\deg_a f$, then every neighbourhood $N$ of $a$ contains an open neighbourhood $V$ for which some $\rho>0$ gives exactly $m$ preimages in $V$ for $0<|w-f(a)|<\rho^m$, while $f(a)$ has only the preimage $a$, counted with multiplicity $m$ ([[cor-local-multiplicity-count-holomorphic-map]]).

## Proof

**Proof technique:** direct.

1.1 The function $f$ is not constant on any neighbourhood of any $a\in\Omega$: if it were constant on one, [L1] would make it constant on the connected domain $\Omega$. [L1, given]

2.1 Fix $a\in O$. Shrink the neighbourhood in [L2] so that it lies in $O$. The local multiplicity conclusion [L3], including its central value, gives a disc about $f(a)$ contained in the image of that neighbourhood and therefore in $f[O]$. [step 1.1, L2, L3]

3.1 Every point of $f[O]$ is therefore interior. Hence $f[O]$ is open; when $O=\varnothing$, its image is empty and the same conclusion holds. [step 2.1] ∎
