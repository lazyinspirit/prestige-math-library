---
id: lem-coercivity-makes-every-finite-level-minimising-sequence-bounded
kind: lemma
title: "Coercivity bounds every finite-level sequence"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps: [def-proper-coercive-and-weakly-lower-semicontinuous-functional, def-infimum]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 13.2, proof of Theorem 13.1, printed pp. 296-297"
    - title: "Viktor Grigoryan, Math 246B Partial Differential Equations, UCSB 2011 (complete 31-page course notes)"
      url: "https://web.math.ucsb.edu/~grigoryan/246B/lecs/246B.pdf"
      locator: "Section 4.1, printed p. 27 (Remark 4.3)"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $I:A\to(-\infty,+\infty]$ be coercive on the nonempty set $A\subseteq X$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]). Then for every $\Lambda\in\mathbb R$ the sublevel set $\{u\in A:I(u)\le\Lambda\}$ is norm bounded; consequently every sequence $(u_j)\subseteq A$ with $\sup_j I(u_j)<+\infty$ is norm bounded. In particular every minimising sequence $(u_j)$ with $I(u_j)\to\inf_AI<+\infty$ is norm bounded.

## Facts & Assumptions

**Given:** A nonempty set $A$ in a real Banach space, an extended-real functional $I:A\to(-\infty,+\infty]$ that is coercive on $A$, and real numbers $\Lambda$.

[F1] Coercivity of $I$ on $A$ is equivalent to the boundedness of every sublevel set $\{u\in A:I(u)\le\Lambda\}$, $\Lambda\in\mathbb R$ ([[def-proper-coercive-and-weakly-lower-semicontinuous-functional]]).

[F2] The number $\inf_AI$ is the greatest lower bound of the values of $I$ on $A$ ([[def-infimum]]). If a sequence $(a_j)$ in $(-\infty,+\infty]$ converges to a finite real $L$, then its tail is bounded above by $L+1$; if $a_j\to-\infty$, its tail is bounded above by $0$. A finite initial segment need not be bounded above as a sequence of values when it contains $+\infty$.

## Proof

**Proof technique:** direct, by placing the values in a sublevel set and quoting the sublevel form of coercivity.

1.1 Bounded sublevels. Let $\Lambda\in\mathbb R$. By [F1] the sublevel set $\{u\in A:I(u)\le\Lambda\}$ is bounded in the norm of $X$; that is, there is $R\ge0$ with $\|u\|\le R$ for every $u\in A$ with $I(u)\le\Lambda$. [F1, given]

2.1 Sequences with finite sup of values are bounded. Let $(u_j)\subseteq A$ satisfy $\sup_jI(u_j)=:\Lambda_0<+\infty$. Then $\Lambda_0\in\mathbb R$ and $I(u_j)\le\Lambda_0$ for every $j$, so the whole sequence lies in the sublevel set $\{I\le\Lambda_0\}$, which is bounded by step 1.1; hence $(u_j)$ is norm bounded. [step 1.1]

3.1 Minimising sequences with finite infimum. Let $(u_j)\subseteq A$ be a minimising sequence, $I(u_j)\to\inf_AI$, with $\inf_AI<+\infty$. By [F2] there are $N$ and a real $M$ with $I(u_j)\le M$ for every $j\ge N$. Step 2.1 shows that the tail $(u_j)_{j\ge N}$ is norm bounded. The finite set of initial vectors $u_1,\ldots,u_{N-1}$ is also norm bounded, so the entire sequence is norm bounded, even if some initial functional values equal $+\infty$. [F2, step 2.1] ∎
