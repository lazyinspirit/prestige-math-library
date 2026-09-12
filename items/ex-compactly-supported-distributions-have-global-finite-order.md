---
id: "ex-compactly-supported-distributions-have-global-finite-order"
kind: "example"
title: "Compactly supported distributions have global finite order"
deps: ["thm-compactly-supported-distributions-have-global-finite-order", "def-dirac-delta-and-its-derivatives", "lem-test-function-cutoffs-and-euclidean-localization", "def-order-of-a-distribution-on-a-compact-set"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Example

For $a\in\Omega\subseteq\mathbb R^n$ open and a multi-index $\alpha$, the distribution $\partial^\alpha\delta_a$ has compact support $\{a\}$ and global order exactly $m=|\alpha|$. Its order on every compact $K\subseteq\Omega$ containing a neighborhood of $a$ is also exactly $m$. The claims hold in ZF.

## Facts & Assumptions

[F1] Dirac derivatives satisfy $(\partial^\alpha\delta_a)(\varphi)=(-1)^{|\alpha|}\partial^\alpha\varphi(a)$ ([[def-dirac-delta-and-its-derivatives]]).

[F2] Compactly supported distributions have a global finite-order cutoff estimate ([[thm-compactly-supported-distributions-have-global-finite-order]]); compactwise order means the least integer in a derivative-seminorm bound ([[def-order-of-a-distribution-on-a-compact-set]]).

[F3] A compact smooth cutoff equal to one near a point exists inside any prescribed neighborhood ([[lem-test-function-cutoffs-and-euclidean-localization]]).

## Proof

**Given:** $a,\alpha$ and $m=|\alpha|$.

1.1 F1 immediately gives $|(\partial^\alpha\delta_a)(\varphi)|\le\sup_{x\in\Omega,\,|\beta|\le m}|\partial^\beta\varphi(x)|$, an explicit global estimate of order $m$ and constant one. It vanishes on tests supported away from $a$. To see it is nonzero on every neighborhood of $a$, take by F3 a cutoff equal to one near $a$ and multiply it by $(x-a)^\alpha/\alpha!$; its $\alpha$ derivative at $a$ is one. Thus the support is exactly $\{a\}$, consistent with F2's compact-support theorem. [given, F1, F2, F3]

2.1 Suppose $m\ge1$ and fix compact $K$ containing a ball about $a$. Choose $h\in\mathcal D(\mathbb R^n)$ supported in the unit ball and equal to $x^\alpha/\alpha!$ near zero, by F3. For sufficiently small $\varepsilon>0$, let $\varphi_\varepsilon(x)=\varepsilon^m h((x-a)/\varepsilon)$, whose support is in $K$. Then $\partial^\alpha\varphi_\varepsilon(a)=1$, whereas for every integer $0\le q<m$, [step 1.1, F1, F3]
$$p_q(\varphi_\varepsilon)\le\max_{|\beta|\le q}\varepsilon^{m-|\beta|}\|\partial^\beta h\|_\infty\longrightarrow0.$$
An order-$q$ bound would force a pairing of modulus one to tend to zero, a contradiction. Thus no smaller order works on $K$, or globally. For $m=0$, the upper bound and nonvanishing in step 1.1 prove exact order zero, since allowable orders are nonnegative integers. Compacts avoiding $a$ give the zero restriction, and compacts without a neighborhood of $a$ are excluded from the sharp local assertion. $\square$ [step 1.1, F1, F2, F3]
