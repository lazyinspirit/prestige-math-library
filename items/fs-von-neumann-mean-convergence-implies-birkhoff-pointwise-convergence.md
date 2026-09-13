---
id: fs-von-neumann-mean-convergence-implies-birkhoff-pointwise-convergence
kind: false-statement
title: Norm convergence alone does not imply pointwise convergence
status: draft
origin: pipeline
deps: [thm-von-neumann-mean-ergodic-theorem-in-l-two, thm-birkhoff-ergodic-theorem, thm-maximal-ergodic-theorem, thm-lebesgue-measure-of-a-box-of-every-kind, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Omri Sarig, Lecture Notes on Ergodic Theory"
      url: "https://www.weizmann.ac.il/math/sarigo/sites/math.sarigo/files/uploads/ergodicnotes.pdf"
      locator: "Chapter 2, Theorems 2.1–2.3 and proofs, printed pp. 35–41"
proof_strategy: constructive
---

## Statement

Assume the Axiom of Choice.  **False claim:** the $L^2$-norm convergence conclusion of von Neumann's theorem,
by itself, yields pointwise convergence of the same sequence.

## Facts & Assumptions

**Given:** Full choice, Lebesgue probability on $[0,1)$, and the half-open
dyadic intervals $I_{q,k}=[k2^{-q},(k+1)2^{-q})$ for $q\geq0$ and
$0\leq k<2^q$.

[F1] Von Neumann gives $L^2$ convergence of ergodic averages ([[thm-von-neumann-mean-ergodic-theorem-in-l-two]]).

[F2] Birkhoff's pointwise conclusion is proved using the maximal ergodic theorem, not norm convergence alone ([[thm-birkhoff-ergodic-theorem]], [[thm-maximal-ergodic-theorem]]).

[F3] Half-open intervals have Lebesgue measure equal to their length, and full choice is the standing assumption ([[thm-lebesgue-measure-of-a-box-of-every-kind]], [[def-axiom-of-choice]]).

## Refutation

**Proof technique:** constructive norm-convergent sequence.

1.1 Enumerate the functions $\mathbf1_{I_{q,k}}$ level by level, listing all $2^q$ intervals at level $q$ before proceeding to level $q+1$; call the resulting sequence $(g_n)$. [construct]

2.1 If $g_n$ belongs to level $q$, then [F3] gives $\lVert g_n\rVert_2=\lambda(I_{q,k})^{1/2}=2^{-q/2}$.  The level tends to infinity with $n$, so $g_n\to0$ in $L^2$. [F3, step 1.1, algebra]

2.2 Every $x\in[0,1)$ lies in exactly one half-open interval at each level. Thus $g_n(x)=1$ once per level and equals $0$ at all the other entries of every level $q\geq1$.  Both values occur infinitely often, so $(g_n(x))$ fails to converge for every $x$. [step 1.1, algebra]

3.1 Steps 2.1–2.2 show that $L^2$ convergence alone cannot imply full-sequence pointwise convergence.  This does not contradict Birkhoff and is not offered as a counterexample among actual ergodic-average sequences: [F2] supplies their pointwise convergence by additional maximal-inequality structure. [F1, F2, step 2.1, step 2.2, discharge-construct] ∎
