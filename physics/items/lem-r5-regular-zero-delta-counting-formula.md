---
id: lem-r5-regular-zero-delta-counting-formula
kind: lemma
title: "Dirac-delta counting formula for regular zeros"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
category: string-theory
dependency_level: 0
axiom_strength: "ZF + ACω"
deps:
  - thm-euclidean-inverse-function-theorem
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - def-countable-choice
dependency_roles:
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: null
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Theorem 8.5.1"
      url: "https://www.jirka.org/ra/html/sec_svinvfuncthm.html"
      locator: "Complete §8.5.1, Theorem 8.5.1 and its contraction-mapping proof; local C1 invertibility and derivative of the inverse."
    - title: "Gerald B. Folland, Real Analysis, 2nd ed., Theorem 2.47"
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Complete Theorem 2.47 and proof, printed pp. 74–76 (viewer text lines 4228–4339); C1-diffeomorphism change of variables for nonnegative measurable functions."
---
## Statement

Assume the Axiom of Countable Choice. Let $d\ge1$, let $U\subseteq\mathbb R^d$ be open, and let $f:U\to\mathbb R^d$ be $C^1$. Suppose every zero $p\in f^{-1}(0)$ is regular, meaning that the real derivative $Df(p)$ is invertible. For every real continuous compactly supported function $\psi:U\to\mathbb R$, put

$$\kappa_\epsilon(y)=\frac{\mathbf 1_{B(0,\epsilon)}(y)}{|B(0,\epsilon)|},\qquad y\in\mathbb R^d,\quad \epsilon>0,$$

where $B(0,\epsilon)$ is the open Euclidean ball and $|B(0,\epsilon)|$ is its Lebesgue volume. Then the limit exists and

$$\lim_{\epsilon\downarrow0}\int_U \psi(z)\kappa_\epsilon(f(z))\,|\det Df(z)|\,d^dz =\sum_{p\in f^{-1}(0)}\psi(p).$$

Only finitely many terms on the right are nonzero. This gives the precise distributional meaning, against compactly supported test functions, of $\delta_0(f(z))|\det Df(z)|$ as the counting measure on regular zeros.

## Facts & Assumptions

**Given:** Countable choice, $U,f,\psi$, and the regularity of every zero as in the Statement.

[F1] [[thm-euclidean-inverse-function-theorem]]: a $C^1$ map between open subsets of $\mathbb R^d$ with invertible derivative at a point is a $C^1$ diffeomorphism between suitable neighborhoods of that point and its image.

[F2] [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]: assuming countable choice, a $C^1$ diffeomorphism $T:V\to W$ between open subsets of $\mathbb R^d$ satisfies $\int_W q(y)\,dy=\int_V q(T(z))|\det DT(z)|\,dz$ for every nonnegative measurable $q$.

[F3] [[def-countable-choice]]: countable choice is the set-theoretic assumption used by [F2].

## Proof

**Proof technique:** direct.

1.1 Let $K=\operatorname{supp}\psi$, a compact subset of $U$. Every point of $f^{-1}(0)\cap K$ is isolated by [F1]. This zero set is finite: if it were infinite, compactness of $K$ would give a convergent subsequence of distinct zeros with limit $p\in K$; continuity gives $f(p)=0$, while the inverse-function neighborhood of $p$ from [F1] contains no other zero, a contradiction. [given, F1, algebra]

2.1 For each of these finitely many zeros $p$, choose a neighborhood $V_p\Subset U$ on which $f$ is a diffeomorphism onto an open neighborhood $W_p\ni0$. Shrink the neighborhoods to be pairwise disjoint. The compact set $K\setminus\bigcup_pV_p$ contains no zero, so continuity of $f$ gives a positive lower bound for $\|f(z)\|$ there. Choose $\epsilon$ small enough that $B(0,\epsilon)\subseteq W_p$ for every $p$ and that no point of $K\setminus\bigcup_pV_p$ maps into $B(0,\epsilon)$. If there are no such zeros, compactness gives the same positive lower bound on all of $K$, and the integral is zero for sufficiently small $\epsilon$. [given, F1, step 1.1, algebra]

3.1 It is enough first to take $\psi\geq0$; a real $\psi$ is the difference of its nonnegative continuous compactly supported positive and negative parts. For $\psi\geq0$ and $\epsilon$ as in step 2.1, the integrand vanishes on $K\setminus\bigcup_pV_p$. Apply [F2], under the countable-choice hypothesis [F3], to $f|_{V_p}:V_p\to W_p$ with the nonnegative measurable integrand $q(y)=\psi(f|_{V_p}^{-1}(y))\kappa_\epsilon(y)$. Change of variables makes the integral over $V_p$ equal to $\int_{W_p}\psi(f|_{V_p}^{-1}(y))\kappa_\epsilon(y)\,d^dy$. Summing these finitely many terms gives the original integral. [given, F2, F3, step 2.1, algebra]

4.1 The function $y\mapsto\psi(f|_{V_p}^{-1}(y))$ is continuous at $0$ and has value $\psi(p)$. Its integral against $\kappa_\epsilon$ is the average over $B(0,\epsilon)$; continuity implies that this average tends to $\psi(p)$. The sum is finite by step 1.1, so taking the limit in step 3.1 gives the claimed sum for nonnegative $\psi$, and subtraction gives it for every real $\psi$. [given, step 1.1, step 3.1, algebra]

5.1 The limiting distribution assigns each regular zero $p$ the unit mass $\psi(p)$; therefore its density notation is exactly $\delta_0(f(z))|\det Df(z)|$, with no additional multiplicity or orientation sign. [given, step 4.1, algebra] ∎
