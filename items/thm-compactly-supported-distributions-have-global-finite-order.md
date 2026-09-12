---
id: "thm-compactly-supported-distributions-have-global-finite-order"
kind: "theorem"
title: "Compactly supported distributions have global finite order"
deps: ["thm-local-finite-order-characterization-of-distributions", "def-support-of-a-distribution", "lem-test-function-cutoffs-and-euclidean-localization"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

If $u\in\mathcal D'(\Omega)$ has compact support $S$, there are a compact neighborhood $L\subseteq\Omega$ of $S$, an integer $m\ge0$ and $C\ge0$ such that, for every $\varphi\in\mathcal D(\Omega)$,
$$|u(\varphi)|\le C\max_{|\alpha|\le m}\sup_{x\in L}|\partial^\alpha\varphi(x)|.$$
In particular one order exponent works on every fixed-support stage. The estimate is on a compact neighborhood, not necessarily on $S$ itself. The result holds in ZF.

## Facts & Assumptions

[F1] Every distribution has a finite-order bound on each fixed compact support ([[thm-local-finite-order-characterization-of-distributions]]).

[F2] Tests agreeing near the support of a distribution have equal pairings; empty support means zero distribution ([[def-support-of-a-distribution]]).

[F3] A compact subset of an open Euclidean set has a smooth compactly supported cutoff equal to one near it ([[lem-test-function-cutoffs-and-euclidean-localization]]).

## Proof

**Given:** $u$ with compact support $S\subseteq\Omega$.

1.1 If $S=\varnothing$, F2 gives $u=0$ and take $L=\varnothing$, $m=C=0$, with the empty supremum zero. Otherwise take $\chi$ from F3 equal to one near $S$ and put $L=\operatorname{supp}\chi$. It is compactly inside $\Omega$ and contains a neighborhood of $S$. For every test $\varphi$, the test $(1-\chi)\varphi$ vanishes near $S$, so $u(\varphi)=u(\chi\varphi)$ by F2. [given, F2, F3]

2.1 Apply F1 on the single compact $L$ to obtain $C_0,m$ with $|u(\psi)|\le C_0p_m(\psi)$ on $\mathcal D_L$. The finite product rule gives $\partial^\alpha(\chi\varphi)=\sum_{\beta\le\alpha}\binom\alpha\beta\partial^\beta\chi\,\partial^{\alpha-\beta}\varphi$; this follows by iterating the coordinate product rule, with coefficients combined by Pascal's identity. If $A=\max_{|\beta|\le m}\sup_L|\partial^\beta\chi|$, then $p_m(\chi\varphi)\le2^m A\max_{|\gamma|\le m}\sup_L|\partial^\gamma\varphi|$. The derivatives of $\chi$ are bounded on $L$, so $A$ is finite. Together with step 1.1 this gives the asserted estimate with $C=C_0 2^m A$. [step 1.1, F1, algebra]

3.1 If $\varphi\in\mathcal D_K$ for another compact $K$, all its derivatives vanish off $K$, so the maximum over $L$ is at most $p_{m,K}(\varphi)$. Thus the same exponent gives the global finite-order property (indeed the same $C$ works here). The proof selected only one cutoff and one finite-order witness pair and used no choice axiom. $\square$ [step 2.1]
