---
id: prop-torsion-and-primary-components-are-submodules-over-a-domain
kind: proposition
title: "Torsion elements and $p$-primary elements form submodules over a domain"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-annihilator-and-torsion-of-a-module, def-primary-component-of-a-module-over-a-domain, def-submodule]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modules over a PID, Section 4"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/modulesoverPID.pdf"
pipeline_run: null
---

## Statement

Let $R$ be an integral domain and $M$ an $R$-module. The torsion subset $\operatorname{Tor}(M)$ is a submodule. For every irreducible $p\in R$, the $p$-primary component $M[p^\infty]$ is a submodule of $\operatorname{Tor}(M)$.

## Facts & Assumptions

**Given:** An integral domain $R$, an $R$-module $M$, the $p$-primary definition of [[def-primary-component-of-a-module-over-a-domain]], and the submodule test of [[def-submodule]].

[F1] If $R$ is an integral domain, an element $m\in M$ is a torsion element when $rm=0_M$ for some nonzero $r\in R$ ([[def-annihilator-and-torsion-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 The zero element is torsion. If $am=0$ and $bn=0$ with $a,b\ne0$, then $ab\ne0$ and $ab(m+n)=b(am)+a(bn)=0$; if $c\in R$, then $a(cm)=c(am)=0$. Closure under negatives is the scalar case $c=-1$, so $\operatorname{Tor}(M)$ is a submodule. [F1, algebra]

2.1 The zero element lies in $M[p^\infty]$. If $p^km=0$ and $p^\ell n=0$ with $k,\ell\ge1$, then $p^{\max(k,\ell)}(m+n)=0$, and $p^k(cm)=0$ for every $c\in R$. Thus $M[p^\infty]$ is a submodule contained in $\operatorname{Tor}(M)$. The proof includes $k=1$, the zero module, and replacing $p$ by an associate. [given, algebra] ∎
