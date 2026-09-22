---
id: cor-spectrum-of-a-compact-operator-is-countable-with-only-zero-as-possible-accumulation
kind: corollary
title: Spectrum of a compact operator is countable with only zero as possible accumulation
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-riesz-schauder-spectrum-of-a-compact-operator, def-spectrum-and-resolvent-of-a-bounded-operator, def-compact-linear-operator, thm-countable-union-of-countable, lem-subset-of-countable, cor-archimedean-reciprocal, def-countable, def-countable-choice, def-axiom-of-choice, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-metric-ball, def-metric-interior-closure-boundary, def-complex-metric-convergence-and-continuity, def-banach-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis — §5.2.3 p.225, Theorem 5.21 and the countability remark"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis, version November 17, 2017 — §6.6, spectrum of a compact operator"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a complex Banach
space, let $K:X\to X$ be a compact operator
([[def-compact-linear-operator]]) and let $\sigma(K)$ be its spectrum
([[def-spectrum-and-resolvent-of-a-bounded-operator]]). Then:

1. $\sigma(K)$ is at most countable ([[def-countable]]);
2. for every $\lambda\in\mathbb C$ with $\lambda\ne0$ there is a real $r>0$ with
   $B(\lambda,r)\cap\sigma(K)\subseteq\{\lambda\}$ ([[def-metric-ball]]).

In particular the only point of $\mathbb C$ that can be an accumulation point of
$\sigma(K)$ ([[def-metric-interior-closure-boundary]]) is $0$.

## Facts & Assumptions

[A1] Under AC, for every real $\varepsilon>0$ the set $S_\varepsilon:=\{\lambda\in\sigma(K):|\lambda|\ge\varepsilon\}$ is finite ([[thm-riesz-schauder-spectrum-of-a-compact-operator]]).

[A2] For every real $\varepsilon>0$ there is a natural $n\ge1$ with $1/n<\varepsilon$ ([[cor-archimedean-reciprocal]]).

[A3] Under $\mathrm{AC}_\omega$, an at most countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable-choice]], [[def-countable]]), and every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); $\mathrm{AC}$ implies $\mathrm{AC}_\omega$ ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]], [[def-axiom-of-choice]]).

[A4] In $\mathbb C$ the balls are those of the metric $d(z,w)=|z-w|$ ([[def-complex-metric-convergence-and-continuity]], [[def-metric-ball]]); a point $\lambda$ is an accumulation point of a set $A$ when every punctured ball $B(\lambda,r)\setminus\{\lambda\}$ meets $A$ ([[def-metric-interior-closure-boundary]]).

## Proof

**Proof technique:** direct.

**Given:** $\mathrm{AC}$, a complex Banach space $X$, a compact $K:X\to X$, and the sets $S_{1/n}=\{\lambda\in\sigma(K):|\lambda|\ge1/n\}$, $n\ge1$.

1.1 Every subspace of $\sigma(K)$ of the form $S_{1/n}$ is finite by [A1]; and every $\mu\in\sigma(K)$ with $\mu\ne0$ lies in some $S_{1/n}$, because $|\mu|>0$ and [A2] gives $n$ with $1/n<|\mu|$. [A1, A2]

1.2 The set $U:=\{0\}\cup\bigcup_{n\ge1}S_{1/n}$ is at most countable: it is a countable union of finite sets, and [A3] applies. [A1, A3]

2.1 $\sigma(K)\subseteq U$ by [step 1.1]. [step 1.1]

2.2 Claim 2: let $\lambda\ne0$ and choose $n$ with $1/n\le|\lambda|/2$ by [A2]. Every $z\in B(\lambda,|\lambda|/2)$ satisfies $|z|\ge|\lambda|-|z-\lambda|>|\lambda|/2\ge1/n$, so the set $F:=\sigma(K)\cap B(\lambda,|\lambda|/2)$ is contained in $S_{1/n}$ and is finite by [step 1.1]. Put $E:=F\setminus\{\lambda\}$. If $E$ is nonempty, the finite set of positive numbers $\{|z-\lambda|:z\in E\}$ has a minimum $\rho>0$; if $E$ is empty, put $\rho:=|\lambda|/2$. For $r:=\min(\rho,|\lambda|/2)>0$, any $z\in B(\lambda,r)\cap\sigma(K)$ lies in $F$, while $z\ne\lambda$ would put $z$ in $E$ and give the contradiction $|z-\lambda|\ge\rho\ge r>|z-\lambda|$. Hence $B(\lambda,r)\cap\sigma(K)\subseteq\{\lambda\}$. [step 1.1, A2, A4]

3.1 Claim 1: $\sigma(K)$ is at most countable, being a subset of the at most countable set $U$, by [A3]; moreover $U$ is at most countable by [step 1.2] and $\sigma(K)\subseteq U$ by [step 2.1]. [step 1.2, step 2.1, A3]

4.1 Finally, if $\lambda\ne0$ and every punctured ball around $\lambda$ met $\sigma(K)$, then by [step 2.2] the punctured ball $B(\lambda,r)\setminus\{\lambda\}$ meets $\sigma(K)$ yet contains none of its points, a contradiction; so the only possible accumulation point is $0$, and claims 1 and 2 are [step 3.1] and [step 2.2]. [step 3.1, step 2.2, A4] ∎
