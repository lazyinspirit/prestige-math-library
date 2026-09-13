---
id: thm-birkhoff-ergodic-theorem
kind: theorem
title: Birkhoff pointwise ergodic theorem
status: draft
origin: pipeline
landmark: true
deps: [lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure, thm-maximal-ergodic-theorem, def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, thm-fatou-lemma, thm-integrals-are-invariant-under-measure-preserving-maps, thm-finite-and-countable-subadditivity-of-measures]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Alessio Del Vigna, The Birkhoff Ergodic Theorem"
      url: "https://poisson.phc.dm.unipi.it/~delvigna/maths/birkhoff.pdf"
      locator: "Theorem 5 and complete proof, pp. 4–6"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "Theorem 10.1.1, printed p. 89; complete proof in §10.5, printed pp. 94–97"
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Theorem 2.2 and complete proof, printed pp. 37–40"
proof_strategy: direct
---

## Statement

Let $\mu$ be sigma-finite, let $T$ preserve $\mu$, and let $f$ be a
finite-valued real- or complex-valued measurable representative in
$\mathcal L^1(\mu)$.  Then $A_nf$ converges $\mu$-almost everywhere to a
finite-valued integrable function $f^*$ satisfying

$$f^*\circ T=f^*\quad\mu\text{-almost everywhere},\qquad \lVert f^*\rVert_1\leq\lVert f\rVert_1.$$

The a.e. class of $f^*$ depends only on the a.e. class of $f$.  No ergodicity,
finite total measure, completeness, or invertibility is assumed.

## Facts & Assumptions

**Given:** The sigma-finite measure-preserving system and integrable representative in the Statement.

[F1] Every rational oscillation set is invariant and has finite measure ([[lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure]]).

[F2] The maximal ergodic theorem holds on arbitrary measure spaces ([[thm-maximal-ergodic-theorem]]).

[F3] Fatou's lemma bounds the integral of a lower limit of nonnegative measurable functions ([[thm-fatou-lemma]]).

[F4] Composition by $T$ preserves integrals, and countable unions of measurable null sets are null ([[thm-integrals-are-invariant-under-measure-preserving-maps]], [[thm-finite-and-countable-subadditivity-of-measures]]).

## Proof

**Proof technique:** direct rational-oscillation argument.

1.1 Suppose first that $f$ is real.  Write $u=\limsup_nA_nf$ and $\ell=\liminf_nA_nf$.  The exact identity $$A_nf(Tx)=\frac{n+1}{n}A_{n+1}f(x)-\frac1nf(x)$$ shows that $u\circ T=u$ and $\ell\circ T=\ell$, with extended values allowed.  The divergence set $\{\ell<u\}$ is the union of the sets $E_{\alpha,\beta}$ over rational $\beta<\alpha$. [given, algebra]

1.2 If $f=g$ a.e., let $N=\{f\ne g\}$.  Outside $\bigcup_{k\geq0}T^{-k}N$, a null set by preservation and [F4], every summand in $S_nf$ equals the corresponding summand in $S_ng$.  Thus the limits agree a.e.; the construction descends to the $L^1$ class. [F4]

2.1 Fix such $\beta<\alpha$ and put $E=E_{\alpha,\beta}$.  By [F1], $E$ is strictly invariant and $\mu(E)<\infty$.  For $g=(f-\alpha)\mathbf1_E$, strict invariance gives $$S_ng=\mathbf1_E(S_nf-n\alpha).$$ Every $x\in E$ has $S_nf(x)>n\alpha$ for some $n$, so $E=\{\sup_nS_ng>0\}$.  Applying [F2] gives $$\int_E f\,d\mu\geq\alpha\mu(E).$$ [F1, F2, step 1.1]

3.1 Apply the same argument to $-f$ and the thresholds $-\beta>-\alpha$.  Its oscillation set is again $E$, so $$\int_E f\,d\mu\leq\beta\mu(E).$$ Because $f$ is integrable and $E$ has finite measure, both inequalities are finite.  Thus $(\alpha-\beta)\mu(E)\leq0$, and $\mu(E)=0$. [F1, F2, step 2.1]

4.1 There are only countably many rational pairs.  Hence [F4] and steps 1.1–3.1 show that $A_nf$ has an extended-real limit off a null set.  On that set, $$|f^*|=\liminf_n|A_nf|,$$ and contractivity gives $\int|A_nf|\leq\int|f|$.  Fatou therefore yields $\int|f^*|\leq\int|f|<\infty$, which both makes $f^*$ finite a.e. and proves integrability. [F3, F4, step 1.1, step 3.1]

5.1 Define $f^*=0$ on the exceptional null set.  The identity in step 1.1 shows that the convergence set and the limit are invariant wherever the averages converge; after adding the null exceptional orbit set if necessary, $f^*\circ T=f^*$ a.e. [F4, step 1.1, step 4.1]

6.1 For complex $f$, apply the real result to $\operatorname{Re}f$ and $\operatorname{Im}f$ and combine their two conull convergence sets.  Their limits give the complex limit, its invariance, and its representative independence.  Fatou applied directly to $|A_nf|$ gives the stated complex $L^1$ bound.  Only these two determined components are used, so no choice principle enters. [F3, F4, step 4.1, step 5.1, step 1.2] ∎
