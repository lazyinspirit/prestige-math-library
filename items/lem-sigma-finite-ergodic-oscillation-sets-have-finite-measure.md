---
id: lem-sigma-finite-ergodic-oscillation-sets-have-finite-measure
kind: lemma
title: Sigma-finite ergodic oscillation sets have finite measure
status: published
origin: pipeline
deps: [thm-maximal-ergodic-theorem, def-ergodic-partial-sums-time-averages-and-invariant-l-two-subspace, lem-mod-null-invariant-sets-have-strictly-invariant-representatives, def-finite-sigma-finite-and-semifinite-measures, thm-integral-triangle-inequality]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Alessio Del Vigna, The Birkhoff Ergodic Theorem"
      url: "https://poisson.phc.dm.unipi.it/~delvigna/maths/birkhoff.pdf"
      locator: "Sigma-finite part of Theorem 5, complete argument on pp. 5–6"
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Theorem 2.2 and proof, printed pp. 37–39"
proof_strategy: cases
---

## Statement

Let $\mu$ be sigma-finite, let $T$ preserve $\mu$, and let
$f\in\mathcal L^1(\mu)$ be real valued.  For rationals $\beta<\alpha$, put

$$E_{\alpha,\beta}:=\{x:\liminf_nA_nf(x)<\beta<\alpha<\limsup_nA_nf(x)\}.$$

Then $E_{\alpha,\beta}$ is invariant (in particular, invariant modulo null
sets) and has finite measure.

## Facts & Assumptions

**Given:** The sigma-finite system, $f$, and rationals $\beta<\alpha$ in the Statement.

[F1] The maximal ergodic theorem applies to every real integrable representative on an arbitrary measure space ([[thm-maximal-ergodic-theorem]]).

[F2] Sigma-finiteness supplies a countable finite-measure cover ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F3] For integrable $h$, $|\int h|\leq\int|h|$ ([[thm-integral-triangle-inequality]]).

## Proof

**Proof technique:** cases on the sign of $\alpha$.

1.1 The exact identity $$A_nf(Tx)=\frac{n+1}{n}A_{n+1}f(x)-\frac1n f(x)$$ shows, by taking lower and upper limits, that both limiting envelopes have the same value at $Tx$ as at $x$; finite-valuedness of $f(x)$ makes the last term tend to zero.  Thus $T^{-1}E_{\alpha,\beta}=E_{\alpha,\beta}$. [given, algebra]

1.2 Assume first that $\alpha>0$, and let $C\subseteq E_{\alpha,\beta}$ be measurable with $\mu(C)<\infty$.  The function $g=f-\alpha\mathbf1_C$ is integrable.  For $x\in E_{\alpha,\beta}$, some $n$ satisfies $S_nf(x)>n\alpha$, while $S_n\mathbf1_C(x)\leq n$; hence $S_ng(x)>0$.  Therefore $C$ lies in $G:=\{\sup_nS_ng>0\}$. [assume-case alphapositive, given, algebra]

2.1 By [F1], $\int_Gg\geq0$.  Since $C\subseteq G$, $$\alpha\mu(C)\leq\int_G f\,d\mu\leq\left|\int_Gf\,d\mu\right|\leq\int_G|f|\,d\mu\leq\lVert f\rVert_1.$$ Here the middle absolute-value inequality follows because the left side is nonnegative. [F1, F3, step 1.2]

3.1 From a sigma-finite cover form the increasing finite-measure exhaustion $X_m$ by finite unions, and take $C_m=E_{\alpha,\beta}\cap X_m$.  Step 2.1 gives $\mu(C_m)\leq\lVert f\rVert_1/\alpha$, while $C_m\uparrow E_{\alpha,\beta}$.  Continuity from below, which follows from countable additivity of the measure, gives $\mu(E_{\alpha,\beta})\leq\lVert f\rVert_1/\alpha<\infty$. [F2, step 2.1]

4.1 If $\alpha\leq0$, then $-\beta>0$.  The same set is the oscillation set for $-f$ with upper threshold $-\beta$ and lower threshold $-\alpha$, because $\limsup(-A_nf)=-\liminf A_nf$ and $\liminf(-A_nf)=-\limsup A_nf$.  Applying steps 1.2–3.1 to $-f$ proves its measure finite. [assume-case alphanonpositive, step 3.1, cases-exhaustive] ∎
