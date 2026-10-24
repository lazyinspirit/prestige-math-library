---
id: thm-ams-ergodic-information-aep
kind: theorem
title: "Shannon–McMillan limit for finite-alphabet AMS ergodic sources"
status: published
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
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
justified_by: []
proof_strategy: direct
axiom_use: "Assume AC only through the tail-domination lemma and its Lebesgue decompositions; finite-future martingales, diagonal bounds, and likelihood-ratio estimates are choice-free."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Paul H. Algoet and Thomas M. Cover, “A Sandwich Proof of the Shannon–McMillan–Breiman Theorem,” Annals of Probability 16 (1988), 899–909"
      url: "https://isl.stanford.edu/~cover/papers/paper83.pdf"
      locator: "Theorem 4, PDF pp.8–9: generalized AEP for an AMS source using likelihood-ratio bounds and Borel–Cantelli."
    - title: "Robert M. Gray, Entropy and Information Theory, corrected edition"
      url: "https://ee.stanford.edu/~gray/it.pdf"
      locator: "Chapter 8 §§8.2–8.4, printed pp.153–164: finite-past information, stationary componentwise SMB, nonergodic and AMS entropy-transfer proofs."
---
## Statement

Assume AC. For a finite-alphabet AMS source whose stationary mean is ergodic with bit entropy rate $h$, the normalized self-information $-n^{-1}\log_2 P(X_0^{n-1})$ converges $P$-almost surely to $h$.

## Facts & Assumptions

**Given:** AC; a finite nonempty alphabet $\mathcal A$ of size $q$; an AMS law $P$ on $\mathcal A^{\mathbb Z}$ with stationary mean $\bar P$; and suppose $\bar P$ is stationary ergodic with entropy rate $h$.

[A1] [[def-axiom-of-choice]]: AC is inherited only through the local tail-domination proof, which uses countably many Lebesgue decompositions.

[F1] [[def-ams-source-and-stationary-mean]]: $P$ is AMS with stationary mean $\bar P$.

[F3] [[lem-ams-stationary-mean-dominates-tail-events]]: a $\bar P$-null future-tail event is also $P$-null.

[F4] [[cor-ergodic-shannon-mcmillan-breiman]]: under $\bar P$, normalized cylinder self-information converges almost surely to $h$.

[F5] [[thm-first-borel-cantelli]]: events with summable probabilities occur only finitely often almost surely.

[F6] [[thm-monotone-class]]: equality tested on the generating algebra of finite future cylinders extends to its generated sigma-algebra.

[F7] [[thm-dominated-convergence]]: bounded almost-surely convergent functions on a probability space converge in integral.

[F8] [[thm-monotone-convergence-for-the-integral]]: integrals of increasing nonnegative functions converge to the integral of their pointwise limit.

## Proof

**Given:** AC and the AMS source with ergodic stationary mean in the statement.

1.1 If $q=1$, the source path is deterministic, every block has probability one, and $h=0$, so the claim holds. Assume henceforth $q\ge2$. Fix $k\ge1$. For each prefix $u\in\mathcal A^k$, the finite conditional probabilities $$r_{n,k}(u)=P(X_0^{k-1}=u\mid X_k^{n-1}),\qquad n>k,$$ form a bounded martingale as the conditioning sigma-algebras increase. For each rational $a<b$ in $[0,1]$, the buy-at-$a$, sell-at-$b$ strategy has expected gain zero; every completed upcrossing earns at least $b-a$ and the final unsold position loses at most one. Thus the expected upcrossing count through any horizon is at most $(b-a)^{-1}$. The counts increase with the horizon, so [F8] gives finite expected total count and hence finitely many upcrossings almost surely. Since a bounded real sequence that fails to converge has infinitely many upcrossings of some rational interval, countability of the rational pairs, prefixes and fixed $k$ implies $r_{n,k}(u)$ converges almost surely. [F8, given, algebra]

2.1 For each finite future cylinder $B\in\sigma(X_k,\ldots,X_{n-1})$, the conditional-probability identity gives $\int_Br_{n,k}(u)\,dP=P(B\cap\{X_0^{k-1}=u\})$. As $n$ increases these conditional probabilities converge almost surely and lie in $[0,1]$, so [F7] gives the same identity with $r_{\infty,k}(u)$. The finite future cylinders form an algebra generating $\sigma(X_k,X_{k+1},\ldots)$. The finite measures $B\mapsto\int_Br_{\infty,k}(u)\,dP$ and $B\mapsto P(B\cap\{X_0^{k-1}=u\})$ agree on that algebra; their agreement class is a monotone class by continuity of finite measures, so [F6] extends the identity to the full future sigma-algebra. Thus $r_{\infty,k}(u)$ is a version of the conditional probability of the prefix event given the full future. Therefore $$P(X_0^{k-1}=u,\ r_{\infty,k}(u)=0)=\int 1_{\{r_{\infty,k}(u)=0\}}r_{\infty,k}(u)\,dP=0.$$ Since there are finitely many prefixes, the realized-prefix conditional probability converges to a positive value almost surely. Consequently, for fixed $k$, $$b^P_{n,k}:=n^{-1}\left|\log_2P(X_0^{k-1}\mid X_k^{n-1})\right|\to0\quad P\text{-a.s.},$$ and the same holds for $b^{\bar P}_{n,k}$ under $\bar P$. [F1, F6, F7, step 1.1, algebra]

3.1 For each integer $m$, use the fixed-$k$ limits for $k\le m$ and both measures to choose a deterministic $N(m)$, increasing with $m$, such that $$P\left(\sup_{n\ge N(m),\,k\le m}b^P_{n,k}>1/m\right)+\bar P\left(\sup_{n\ge N(m),\,k\le m}b^{\bar P}_{n,k}>1/m\right)<2^{-m}.$$ Let $k(n)=\max\{m:N(m)\le n,\ m\le\sqrt n\}$, taking $k(n)=1$ for the finitely many initial $n$ where the set is empty. Then $k(n)\to\infty$, $k(n)/n\to0$, and [F5] implies that the prefix-to-suffix log-probability boundary divided by $n$ tends to zero almost surely under both $P$ and $\bar P$. Under $\bar P$, the finite conditional-probability identity gives $$-\frac1n\log_2\bar P(X_{k(n)}^{n-1})=-\frac1n\log_2\bar P(X_0^{n-1})-b^{\bar P}_{n,k(n)}$$ almost surely for all sufficiently large $n$. By [F4] and the boundary convergence just proved, the right side tends to $h$. Its failure event is in the future-tail sigma-algebra: for every fixed $j$, all sufficiently large $n$ have $k(n)\ge j$, so the suffix terms depend only on coordinates from $j$ onward. Thus [F3] gives $$-n^{-1}\log_2\bar P(X_{k(n)}^{n-1})\to h\quad P\text{-a.s.}$$ [F1, F3, F4, F5, step 2.1, algebra]

4.1 For each $n$ and $\epsilon>0$, summing over suffix words $w$ gives $$\bar P\!\left(\frac{P(w)}{\bar P(w)}\ge2^{n\epsilon}\right)\le2^{-n\epsilon},\qquad P\!\left(\frac{\bar P(w)}{P(w)}\ge2^{n\epsilon}\right)\le2^{-n\epsilon},$$ where the event is evaluated at the observed suffix $w=X_{k(n)}^{n-1}$. For example, on the first event $\bar P(w)\le2^{-n\epsilon}P(w)$, and summing over its words proves the first inequality; the second is symmetric. For any fixed $j$, all sufficiently large $n$ have $k(n)\ge j$, so the forward-ratio limsup event is measurable with respect to coordinates from $j$ onward. By [F5], the reverse-ratio violations occur only finitely often $P$-almost surely, while the forward-ratio violation limsup is a $\bar P$-null tail event and hence is $P$-null by [F3]. Applying this for every positive rational $\epsilon$ yields $$n^{-1}\log_2\frac{P(X_{k(n)}^{n-1})}{\bar P(X_{k(n)}^{n-1})}\to0\quad P\text{-a.s.}$$ Interpret a ratio with positive numerator and zero denominator as $+\infty$. The observed $P$-suffix has positive $P$-probability almost surely for every $n$; the forward-ratio limsup argument also excludes zero $\bar P$-suffix probabilities for all sufficiently large $n$, $P$-almost surely. [F3, F5, step 3.1, algebra]

5.1 Step 3.1 makes the normalized log probability of the P-prefix differ from that of its suffix by a quantity tending to zero; step 4.1 makes the P- and $\bar P$-suffix log probabilities have the same normalized limit; and step 3.1 identifies the latter as $-h$. Therefore $$-\frac1n\log_2P(X_0^{n-1})\longrightarrow h\quad P\text{-almost surely}.$$ The argument includes $h=0$ and makes no claim of an exponential convergence rate. AC is used only through [A1], [F3]. [A1, F1, F3, F4, step 3.1, step 4.1, algebra] ∎
