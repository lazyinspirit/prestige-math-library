---
id: thm-first-variation-vanishes-at-an-interior-minimiser
kind: theorem
title: "The first variation vanishes at an interior minimiser"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-gateaux-and-frechet-derivatives-of-a-functional, thm-fermat-interior-extremum, def-local-extremum]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, Theorem 13.1 and its final paragraph, printed pp. 296-297"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Section 4.1, printed p. 27"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $X$ be a real Banach space, $U\subseteq X$ open, $F:U\to\mathbb R$ Gateaux differentiable at $u\in U$ ([[def-gateaux-and-frechet-derivatives-of-a-functional]]) and suppose $u$ is a local minimiser of $F$: $F(u)\le F(w)$ for all $w\in U$ with $\|w-u\|$ small ([[def-local-extremum]]). Then
$$\delta F(u;v)=0\qquad\text{for every }v\in X.$$
More generally, if $V\subseteq X$ is a linear subspace and $F(u)\le F(w)$ for all $w\in(u+V)\cap U$ with $\|w-u\|$ small, then $\delta F(u;v)=0$ for every $v\in V$.

## Facts & Assumptions

**Given:** A real Banach space $X$, an open set $U\subseteq X$, a map $F:U\to\mathbb R$ that is Gateaux differentiable at $u\in U$, and the assumption that $u$ is a local minimiser: $F(u)\le F(w)$ for all $w\in U$ with $\|w-u\|$ small. For the general form, a linear subspace $V\subseteq X$ with $F(u)\le F(w)$ for all $w\in(u+V)\cap U$ with $\|w-u\|$ small.

[F1] Gateaux differentiability of $F$ at $u$ means that $\delta F(u;v)=\lim_{\varepsilon\to0,\varepsilon\ne0}\varepsilon^{-1}(F(u+\varepsilon v)-F(u))$ exists for every $v\in X$ and that $v\mapsto\delta F(u;v)$ is a bounded linear functional; for each fixed $v$ the function $\varphi(\varepsilon):=F(u+\varepsilon v)$ satisfies $\varphi'(0)=\delta F(u;v)$ ([[def-gateaux-and-frechet-derivatives-of-a-functional]]).

[F2] The point $0$ is an interior local minimum of $\varphi$ when $\varphi(0)\le\varphi(\varepsilon)$ for all $\varepsilon$ with $|\varepsilon|$ small, the one-variable notion of [[def-local-extremum]] ([[def-local-extremum]]).

[F3] If a function on a real interval is differentiable at an interior local extremum, then its derivative vanishes there ([[thm-fermat-interior-extremum]]).

## Proof

**Proof technique:** direct, reducing to the one-variable Fermat theorem along each admissible line.

1.1 Reduction to one variable. Fix $v\in X$. Since $U$ is open and $u\in U$, there is $\varepsilon_0>0$ with $u+\varepsilon v\in U$ for every $|\varepsilon|<\varepsilon_0$; define $\varphi(\varepsilon):=F(u+\varepsilon v)$ for those $\varepsilon$. By [F1] $\varphi'(0)$ exists and equals $\delta F(u;v)$. The local minimality of $u$ gives $\varepsilon_1\in(0,\varepsilon_0]$ with $F(u)\le F(u+\varepsilon v)$, that is $\varphi(0)\le\varphi(\varepsilon)$, whenever $|\varepsilon|<\varepsilon_1$; in the terminology of [F2], $0$ is an interior local minimum of $\varphi$. [F1, F2, given]

2.1 Fermat's theorem applied to $\varphi$. The function $\varphi$ is differentiable at its interior point $0$ and has a local minimum there, so by [F3] $\varphi'(0)=0$; by step 1.1 this reads $\delta F(u;v)=0$. [F3, step 1.1]

3.1 The general admissible-affine form. Let $V\subseteq X$ be a linear subspace and suppose $F(u)\le F(w)$ for all $w\in(u+V)\cap U$ with $\|w-u\|$ small. Fix $v\in V$. For $|\varepsilon|$ small the point $u+\varepsilon v$ belongs to $(u+V)\cap U$, because $V$ is a linear subspace and $U$ is open; the argument of steps 1.1 and 2.1 therefore applies verbatim to this $v$ and yields $\delta F(u;v)=0$. As $v\in V$ was arbitrary, the first variation vanishes on the whole subspace $V$. [F1, step 2.1] ∎ 