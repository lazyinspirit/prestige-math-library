---
id: lem-ergodic-averages-converge-in-l-p-on-finite-measure-spaces
kind: lemma
title: Ergodic averages converge in Lp on finite-measure spaces
status: draft
origin: pipeline
deps: [prop-ergodic-averages-are-well-defined-and-l-p-contractive, thm-birkhoff-ergodic-theorem, thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces, thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces, thm-finite-measure-l-r-includes-into-l-p-for-p-less-r, thm-dominated-convergence, thm-fatou-lemma, thm-chebyshev-markov-inequality-for-the-integral, thm-monotone-convergence-for-the-integral]
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
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory (2023)"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Theorem 2.2, Step 4, printed pp. 39–40"
    - title: "Charles Walkden, Ergodic Theory lecture notes"
      url: "https://personalpages.manchester.ac.uk/staff/Charles.Walkden/ergodic-theory/ergodic_theory.pdf"
      locator: "§10.1 and §10.5, printed pp. 89 and 94–97; local finite-measure truncation extension to Lp"
proof_strategy: cases
---

## Statement

Let $\mu(X)<\infty$, let $T$ preserve $\mu$, let $1\leq p<\infty$, and let
$f\in L^p(\mu)$ be real or complex valued.  If $f^*$ is its Birkhoff limit,
then $f^*\in L^p(\mu)$ and

$$\lVert A_nf-f^*\rVert_p\longrightarrow0.$$

No $L^\infty$ convergence is asserted.

## Facts & Assumptions

**Given:** The finite measure space, $T$, $p$, $f$, and $f^*$ in the Statement.

[F1] Ergodic averages are $L^p$ contractions ([[prop-ergodic-averages-are-well-defined-and-l-p-contractive]]) and converge a.e. by Birkhoff ([[thm-birkhoff-ergodic-theorem]]).

[F2] On finite measure spaces, a.e. convergence implies convergence in measure, and convergence in measure plus uniform integrability gives $L^1$ convergence ([[thm-almost-everywhere-convergence-implies-convergence-in-measure-on-finite-measure-spaces]], [[thm-vitali-convergence-theorem-on-finite-and-sigma-finite-measure-spaces]]).

[F3] Markov's inequality, dominated convergence, and Fatou's lemma have their usual integral forms ([[thm-chebyshev-markov-inequality-for-the-integral]], [[thm-dominated-convergence]], [[thm-fatou-lemma]]).

[F4] A bounded function on a finite measure space belongs to every finite $L^p$ ([[thm-finite-measure-l-r-includes-into-l-p-for-p-less-r]]).

## Proof

**Proof technique:** cases $p=1$ and $1<p<\infty$.

1.1 Assume $p=1$.  Put $E_{n,M}=\{|A_nf|>M\}$.  Contractivity and Markov give $\mu(E_{n,M})\leq\lVert f\rVert_1/M$.  For $K>0$, split $f=f_K+r_K$ by radial clipping, so $|f_K|\leq K$ and $|r_K|=(|f|-K)_+$.  Pointwise, $$|A_nf|\leq A_n|f|\leq K+A_n|r_K|.$$ Consequently $$\int_{E_{n,M}}|A_nf|\,d\mu\leq\frac{K\lVert f\rVert_1}{M}+\lVert r_K\rVert_1,$$ where invariance gives $\int A_n|r_K|=\lVert r_K\rVert_1$. [assume-case pone, F1, F3]

1.2 Now assume $1<p<\infty$.  Let $f_m=f\mathbf1_{\{|f|\leq m\}}$.  Then $f_m$ is bounded and belongs to $L^p$ by [F4], while dominated convergence applied to $|f-f_m|^p$ gives $\lVert f-f_m\rVert_p\to0$. [assume-case pgreat, F3, F4]

2.1 As $K\to\infty$, $|r_K|\downarrow0$ and is dominated by $|f|$, so its integral tends to zero.  Choose $K$ and then $M$ in step 1.1; the bound is uniform in $n$ and proves uniform integrability of $(A_nf)$.  For complex $f$, it also proves uniform integrability of the real and imaginary parts because each component modulus is bounded by $|A_nf|$. [F3, step 1.1]

2.2 Let $f_m^*$ be the Birkhoff limit of $f_m$.  For fixed $m$, both $|A_nf_m|$ and $|f_m^*|$ are bounded by $m$.  Their pointwise difference tends to zero a.e.; dominated convergence on the finite measure space therefore gives $\lVert A_nf_m-f_m^*\rVert_p\to0$. [F1, F3, F4, step 1.2]

3.1 By [F1] the averages converge a.e., hence by [F2] in measure.  Vitali applied to the real and imaginary parts gives $L^1$ convergence to their corresponding components of $f^*$.  The complex triangle inequality combines the two component conclusions. [F1, F2, step 2.1, cases: p-one]

4.1 Since $A_n(f-f_m)\to f^*-f_m^*$ a.e., Fatou and contractivity imply $$\lVert f^*-f_m^*\rVert_p\leq\liminf_n\lVert A_n(f-f_m)\rVert_p\leq\lVert f-f_m\rVert_p.$$ Thus $f^*\in L^p$, and $$\limsup_n\lVert A_nf-f^*\rVert_p\leq2\lVert f-f_m\rVert_p.$$ Letting $m\to\infty$ proves the claim.  The two cases exhaust $1\leq p<\infty$; the proof never supplies uniform-norm convergence. [F1, F3, step 1.2, step 2.2, cases-exhaustive] ∎
