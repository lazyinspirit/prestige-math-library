---
id: thm-ma-cardinal-exponentiation-below-continuum
kind: theorem
title: Cardinal exponentiation below the continuum under MA
status: draft
origin: pipeline
deps: [def-martins-axiom, lem-continuum-sized-almost-disjoint-family-on-omega, def-cardinal-arithmetic, thm-konig, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - {title: "Karagila, Forcing & Symmetric Extensions, Theorem 7.7", url: "https://karagila.org/files/Forcing-2023.pdf"}
---

## Statement

In ZFC+MA, for every infinite $\kappa<2^{\aleph_0}$, $2^\kappa=2^{\aleph_0}$. Consequently the continuum is regular.

## Facts & Assumptions

**Given:** AC, MA, and infinite $\kappa<\mathfrak c=2^{\aleph_0}$.

[F1] [[def-martins-axiom]] supplies a filter meeting $\kappa$ many dense sets in a ccc order.

[F2] [[lem-continuum-sized-almost-disjoint-family-on-omega]] supplies $\langle A_\alpha:\alpha<\mathfrak c\rangle$.

[F3] [[def-cardinal-arithmetic]] and [[thm-konig]] supply the cardinal conclusions.

## Proof

1.1 Fix $X\subseteq\kappa$. Let $P_X$ consist of pairs $(s,F)$ with $s$ a finite partial map $\omega\to2$ and $F\subseteq\kappa\setminus X$ finite. Put $(t,H)\le(s,F)$ iff $s\subseteq t$, $F\subseteq H$, and $$t^{-1}(1)\cap(\operatorname{dom}(t)\setminus\operatorname{dom}(s))\quad\text{is disjoint from}\quad \bigcup_{\alpha\in F}A_\alpha.$$ This is transitive: an extension never puts a new $1$ on any set already protected by the weaker condition. Conditions with the same stem $s$ are compatible, since $(s,F\cup H)$ extends both. There are only countably many finite stems, so $P_X$ is $\sigma$-centered and hence ccc. [F2]

2.1 For $\alpha\notin X$, let $$E_\alpha=\{(s,F):\alpha\in F\};$$ this is dense because adjoining $\alpha$ to $F$ changes no stem. For $\alpha\in X$ and $n<\omega$, let $$D_{\alpha,n}=\{(s,F):(\exists m>n)\,[m\in A_\alpha\cap\operatorname{dom}(s)\text{ and }s(m)=1]\}.$$ Given $(s,F)$, the set $A_\alpha\cap\bigcup_{\beta\in F}A_\beta$ is finite by almost disjointness. Since $A_\alpha$ is infinite, choose $m>n$ outside that finite set and $\operatorname{dom}(s)$; setting $s(m)=1$ gives an extension in $D_{\alpha,n}$. Thus all these sets are dense. Their number is at most $\kappa\cdot\aleph_0=\kappa$, so MA supplies a filter $G$ meeting them. Let $$r_X=\{m:(\exists(s,F)\in G)\ s(m)=1\}.$$ Directedness makes the stems in $G$ consistent. If $\alpha\in X$, meeting every $D_{\alpha,n}$ makes $r_X\cap A_\alpha$ infinite. If $\alpha\notin X$, choose $(s,F)\in G\cap E_\alpha$. For any $(t,H)\in G$, take $(u,K)\in G$ below both. Since $(u,K)\le(s,F)$ and $\alpha\in F$, no new $1$ of $u$ beyond $s$ lies in $A_\alpha$; hence $t^{-1}(1)\cap A_\alpha\subseteq s^{-1}(1)$. Consequently $r_X\cap A_\alpha\subseteq s^{-1}(1)$ is finite. Therefore $X=\{\alpha:|r_X\cap A_\alpha|=\aleph_0\}$. [F1, F2, step 1.1]

3.1 Choosing the least real in a fixed well-order among the codes for each $X$ gives an injection $\mathcal P(\kappa)\hookrightarrow\mathcal P(\omega)$; AC is used here. Monotonicity gives $\mathfrak c\le2^\kappa$, hence equality. If $\operatorname{cf}(\mathfrak c)=\lambda<\mathfrak c$, then $\mathfrak c\le\mathfrak c^\lambda=(2^\lambda)^\lambda=2^\lambda=\mathfrak c$, while König gives $\mathfrak c^\lambda>\mathfrak c$, contradiction. Therefore $\mathfrak c$ is regular. [F3, step 2.1] ∎
