---
id: thm-ams-ergodic-information-aep
kind: theorem
title: "Shannon–McMillan limit for finite-alphabet AMS ergodic sources"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 7
deps:
  - def-ams-source-and-stationary-mean
  - cor-ergodic-shannon-mcmillan-breiman
  - def-finite-block-information-and-entropy
  - thm-ams-stationary-mean-asymptotic-dominance
  - lem-ams-stationary-mean-dominates-tail-events
  - def-axiom-of-choice
  - thm-first-borel-cantelli
  - thm-monotone-class
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC only through the tail-domination lemma and its Lebesgue decompositions; finite-future martingales, diagonal bounds, and likelihood-ratio estimates are choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
---
## Statement

Assume AC. For a finite-alphabet AMS source whose stationary mean is ergodic with bit entropy rate h, the normalized self-information -n^{-1}log_2 P(X_0^{n-1}) converges P-almost surely to h.

## Facts & Assumptions

**Given:** AC; a finite nonempty alphabet $\mathcal A$ of size $q$; an AMS law $P$ on $\mathcal A^{\mathbb Z}$ with stationary mean $\bar P$; and suppose $\bar P$ is stationary ergodic with entropy rate $h$.

[A1] [[def-axiom-of-choice]]: AC is inherited only through the local tail-domination proof, which uses countably many Lebesgue decompositions.

[F1] [[def-ams-source-and-stationary-mean]]: $P$ is AMS with stationary mean $\bar P$.

[F3] [[lem-ams-stationary-mean-dominates-tail-events]]: a $\bar P$-null future-tail event is also $P$-null.

[F4] [[cor-ergodic-shannon-mcmillan-breiman]]: under $\bar P$, normalized cylinder self-information converges almost surely to $h$.

[F5] [[thm-first-borel-cantelli]]: events with summable probabilities occur only finitely often almost surely.

[F6] [[thm-monotone-class]]: equality tested on the generating algebra of finite future cylinders extends to its generated sigma-algebra.

## Proof

**Given:** AC and the AMS source with ergodic stationary mean in the statement.

1.1 If $q=1$, the source path is deterministic, every block has probability one, and $h=0$, so the claim holds. Assume henceforth $q\ge2$. Fix $k\ge1$. For each prefix $u\in\mathcal A^k$, the finite conditional probabilities
$$r_{n,k}(u)=P(X_0^{k-1}=u\mid X_k^{n-1}),\qquad n>k,$$
form a bounded martingale as the conditioning sigma-algebras increase. For each rational $a<b$ in $[0,1]$, the buy-at-$a$, sell-at-$b$ strategy has expected gain zero; every completed upcrossing earns at least $b-a$ and the final unsold position loses at most one. Thus the expected upcrossing count is at most $(b-a)^{-1}$. Countability of the rational pairs implies $r_{n,k}(u)$ converges almost surely. [given, algebra]

1.2 The limit $r_{\infty,k}(u)$ is the conditional probability of the prefix event given the full future $\sigma(X_k,X_{k+1},\ldots)$: test the martingale limit first on each finite future cylinder and extend from their generating algebra by [F6]. Therefore
$$P(X_0^{k-1}=u,\ r_{\infty,k}(u)=0)=E[1_{\{r_{\infty,k}(u)=0\}}r_{\infty,k}(u)]=0.$$
Since there are finitely many prefixes, the realized-prefix conditional probability converges to a positive value almost surely. Consequently, for fixed $k$,
$$b^P_{n,k}:=n^{-1}\left|\log_2P(X_0^{k-1}\mid X_k^{n-1})\right|\to0\quad P\text{-a.s.},$$
and the same holds for $b^{\bar P}_{n,k}$ under $\bar P$. [F1, F6, step 1.1, algebra]

1.3 For each integer $m$, use the fixed-$k$ limits for $k\le m$ and both measures to choose a deterministic $N(m)$, increasing with $m$, such that
$$P\left(\sup_{n\ge N(m),\,k\le m}b^P_{n,k}>1/m\right)+\bar P\left(\sup_{n\ge N(m),\,k\le m}b^{\bar P}_{n,k}>1/m\right)<2^{-m}.$$
Let $k(n)=\max\{m:N(m)\le n,\ m\le\sqrt n\}$, taking $k(n)=1$ for the finitely many initial $n$ where the set is empty. Then $k(n)\to\infty$, $k(n)/n\to0$, and [F5] implies that the prefix-to-suffix log-probability boundary divided by $n$ tends to zero almost surely under both $P$ and $\bar P$. In particular, the $\bar P$ SMB limit [F4] transfers from the length-$n$ prefix to the length-$(n-k(n))$ suffix; its exceptional event is in the future-tail sigma-algebra: for every fixed $j$, all sufficiently large $n$ have $k(n)\ge j$, so the suffix terms depend only on coordinates from $j$ onward. Thus [F3] gives
$$-n^{-1}\log_2\bar P(X_{k(n)}^{n-1})\to h\quad P\text{-a.s.}$$
[F1, F3, F4, F5, step 1.2, algebra]

1.4 For each $n$ and $\epsilon>0$, summing over suffix words $w$ gives
$$\bar P\!\left(\frac{P(w)}{\bar P(w)}\ge2^{n\epsilon}\right)\le2^{-n\epsilon},\qquad
P\!\left(\frac{\bar P(w)}{P(w)}\ge2^{n\epsilon}\right)\le2^{-n\epsilon},$$
where the event is evaluated at the observed suffix $w=X_{k(n)}^{n-1}$. For example, on the first event $\bar P(w)\le2^{-n\epsilon}P(w)$, and summing over its words proves the first inequality; the second is symmetric. For any fixed $j$, all sufficiently large $n$ have $k(n)\ge j$, so the forward-ratio limsup event is measurable with respect to coordinates from $j$ onward. By [F5], the reverse-ratio violations occur only finitely often $P$-almost surely, while the forward-ratio violation limsup is a $\bar P$-null tail event and hence is $P$-null by [F3]. Applying this for every positive rational $\epsilon$ yields
$$n^{-1}\log_2\frac{P(X_{k(n)}^{n-1})}{\bar P(X_{k(n)}^{n-1})}\to0\quad P\text{-a.s.}$$
Zero denominators have zero probability under the corresponding measure. [F3, F5, step 1.3, algebra]

1.5 Step 1.3 makes the normalized log probability of the P-prefix differ from that of its suffix by a quantity tending to zero; step 1.4 makes the P- and $\bar P$-suffix log probabilities have the same normalized limit; and step 1.3 identifies the latter as $-h$. Therefore
$$-\frac1n\log_2P(X_0^{n-1})\longrightarrow h\quad P\text{-almost surely}.$$
The argument includes $h=0$ and makes no claim of an exponential convergence rate. AC is used only through [A1], [F3]. [A1, F1, F3, F4, step 1.3, step 1.4, algebra] ∎
