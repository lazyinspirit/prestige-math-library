---
id: lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound
kind: lemma
title: Compactly supported scaled Euclidean bumps
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter, §1.9.1 Theorem 1.29 and Example 1.30, printed p. 12. The strict support margin and exact gradient scaling are computed locally.
    - title: Sung-Jin Oh, Lecture Notes for Math 222A
      url: https://math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
      locator: Oh §3.9, Proposition 3.23 and its complete local graph and partition proof, printed/PDF pp. 47–48.
      original_url: https://web.math.berkeley.edu/~sjoh/pdfs/notes-math222a.pdf
status: draft
origin: pipeline
proof_strategy: direct
deps: ["def-the-standard-smooth-step-function", "thm-chain-rule-for-total-derivatives", "thm-algebra-of-derivatives", "thm-linear-change-of-variables-for-lebesgue-measure", "thm-lebesgue-outer-measure-and-measurability-are-translation-invariant", "thm-monotone-convergence-for-the-integral", "def-countable-choice"]
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge1$ there is a fixed smooth $b:\mathbb R^n\to[0,1]$, equal to one on $\overline B_1(0)$ and with support contained in $B_2(0)$. For $a\in\mathbb R^n,r>0$, $b_{a,r}(x)=b((x-a)/r)$ satisfies $\int|Db_{a,r}|=C_nr^{n-1}$, where $C_n=\int|Db|<\infty$. For every $0<r<R$ one can instead obtain a smooth bump equal to one on $\overline B_r(a)$ and supported strictly inside $B_R(a)$.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. The centre, positive radii with strict ordering, and Euclidean dimension are those of the statement. The bump and scaling constants must be constructed.

[F1] The smooth step is zero on the negative half-line and one from one onward. ([[def-the-standard-smooth-step-function]]).

[F2] The chain rule gives the derivative of a scaled bump. ([[thm-chain-rule-for-total-derivatives]]).

[F3] Invertible linear maps scale Lebesgue measure by their determinant modulus. ([[thm-linear-change-of-variables-for-lebesgue-measure]]).

[F4] Translations preserve Lebesgue measure. ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]]).

[F5] Increasing nonnegative approximations converge in integral. ([[thm-monotone-convergence-for-the-integral]]).

## Proof

1.1 For $0<r<R$ set $s=(r+R)/2$ and $b_*(x)=\sigma((s^2-|x-a|^2)/(s^2-r^2))$. F1 makes this smooth, between zero and one, equal to one for $|x-a|\le r$, and zero for $|x-a|\ge s$. Its support lies in the closed s-ball, a compact subset of the open R-ball. Taking a=0,r=1,s=3/2 defines the fixed b with support inside B_2. [given, F1, algebra]

2.1 F2 gives $Db_{a,r}(x)=r^{-1}Db((x-a)/r)$. F3 and F4 imply $\int f((x-a)/r)\,dx=r^n\int f$ for every nonnegative Borel f: this is first the set-measure identity for indicators, then a finite sum for nonnegative simple f, and finally F5 applied to $2^{-k}\lfloor2^k\min(f,k)\rfloor\uparrow f$. Apply it to the continuous compactly supported $f=|Db|$. Its integral is finite because Db is bounded and vanishes outside a bounded ball. Multiplication by $r^{-1}$ yields $C_nr^{n-1}$ as asserted. [step 1.1, F2, F3, F4, F5] ∎

## Source notes

Hunter, §1.9.1 Theorem 1.29 and Example 1.30, printed p. 12. The strict support margin and exact gradient scaling are computed locally.

