---
id: lem-zero-free-entire-function-of-exponential-type-is-an-exponential
kind: lemma
title: Zero free entire function of exponential type is an exponential
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-path-independence-and-complex-primitive-criterion, thm-local-maximum-modulus-principle, cor-cauchy-theorem-convex-domain, thm-algebra-of-complex-derivatives, thm-chain-rule-for-complex-derivatives, cor-complex-power-series-sums-have-derivatives-of-all-orders, thm-zero-complex-derivative-on-a-domain-implies-constant, thm-liouville-bounded-entire-function, cor-complex-power-series-sums-are-analytic, thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Vahid Shirbisheh, Lectures on C-star Algebras, v2 — Lemma 3.1.10 (rescaled to a non-strict growth bound), printed pp. 58–59"
      url: "https://arxiv.org/pdf/1211.3404"
    - title: "Theo Bühler and Dietmar A. Salamon, Functional Analysis — §5.5.1, printed pp. 258–267"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Let $f : \mathbb C \to \mathbb C$ be entire and **zero-free**, and suppose there
are real constants $M > 0$ and $C \ge 0$ with

$$|f(z)| \;\le\; M\,e^{\,C|z|} \qquad (z \in \mathbb C).$$

Then $f(z) = f(0)\,e^{az}$ for all $z \in \mathbb C$, where
$a := f'(0)/f(0)$. In particular, if $f(0) = 1$ then $f(z) = e^{f'(0)z}$.

The statement is deliberately formulated with the constant $M$ present: in
applications the bound arises from a product $e^{C|z|}e^{B|w|}$ in which the
$w$-dependent factor cannot be absorbed into the exponent without losing
linearity in $|z|$, and the constant factor is exactly what survives.

## Facts & Assumptions

**Given:** An entire zero-free $f$ with constants $M>0$, $C\ge0$ such that $|f(z)| \le M e^{C|z|}$ for all $z$.

[L1] On a complex domain $U$ and for a continuous $g : U \to \mathbb C$ the following are equivalent: $g$ has a primitive on $U$; the contour integral of $g$ depends only on endpoints; the integral of $g$ around every closed rectifiable contour in $U$ is $0$ ([[thm-path-independence-and-complex-primitive-criterion]]).

[L2] If $U$ is a convex complex domain and $g$ is holomorphic on $U$, then the integral of $g$ around every closed rectifiable contour in $U$ is $0$ ([[cor-cauchy-theorem-convex-domain]]).

[L3] The sum, product and quotient rules hold for complex derivatives; the derivative of the exponential is the exponential ([[thm-algebra-of-complex-derivatives]], [[cor-complex-power-series-sums-have-derivatives-of-all-orders]]).

[L4] The chain rule holds for complex derivatives: $(g \circ h)'(z) = g'(h(z))h'(z)$ ([[thm-chain-rule-for-complex-derivatives]]).

[L5] A holomorphic function on a complex domain with zero complex derivative is
constant ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[L6] Quotients of holomorphic functions with nonvanishing denominators and power series sums are holomorphic ([[thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]], [[cor-complex-power-series-sums-are-analytic]]), so $f'/f$ is holomorphic on $\mathbb C$ and, if $H$ is entire with $H(0)=0$, then $H(z)/z$ extends to an entire function.

[L7] The Schwarz lemma on the unit disc: if $G$ is holomorphic on the unit disc with $G(0)=0$ and $|G(\zeta)| \le 1$, then $|G(\zeta)| \le |\zeta|$; the underlying engine is the maximum modulus principle ([[thm-local-maximum-modulus-principle]]).

[L8] Every bounded entire function is constant ([[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** direct.

1.1 **A maximum-modulus estimate.** If $H$ is entire with $H(0)=0$ and $\operatorname{Re}H(w) \le A + B|w|$ for all $w$ and constants $A,B \ge 0$, then $|H(w)| \le 2B|w|$ for all $w$: for fixed $w \ne 0$ and $0<t<1$ put $R := |w|/t$ and $G(\zeta) := H(R\zeta)/\bigl(2(A+BR) - H(R\zeta)\bigr)$, whose denominator has real part $\ge A+BR > 0$ so that $G$ is holomorphic on the unit disc with $G(0) = 0$, and $|\eta/(2(A+BR)-\eta)| \le 1$ exactly when $\operatorname{Re}\eta \le A+BR$, so $|G| \le 1$; by [L7] $|G(\zeta)| \le |\zeta|$, whence $|H(R\zeta)| \le |\zeta|\bigl(2(A+BR) + |H(R\zeta)|\bigr)$ and, with $\zeta = tw/|w|$, $|H(w)| \le (2tA + 2B|w|)/(1-t)$, whose infimum over $t \in (0,1)$ is $2B|w|$. [L7, algebra]

1.2 The function $g := f'/f$ is holomorphic on $\mathbb C$ by [L6]; the complex plane is a convex domain, so by [L2] every closed rectifiable contour integral of $g$ vanishes, and by [L1] there is a primitive $h$ of $g$ on $\mathbb C$ with $h' = f'/f$; normalise $h(0) := 0$ by adding a constant. [L1, L2, L6]

2.1 The function $z \mapsto f(z)e^{-h(z)}$ has zero derivative: by the product rule and the chain rule [L3], [L4] and [step 1.2], $(fe^{-h})' = f'e^{-h} - fh'e^{-h} = e^{-h}\bigl(f' - f\cdot (f'/f)\bigr) = 0$ since $f$ is zero-free. [step 1.2, L3, L4, algebra]

3.1 By [L5] the conclusion of [step 2.1] makes $fe^{-h}$ constant with value $f(0)e^{-h(0)} = f(0)$, so $f = f(0)e^{h}$. [step 2.1, L5]

4.1 Taking moduli in [step 3.1] gives $|f(z)| = |f(0)|e^{\operatorname{Re}h(z)} \le Me^{C|z|}$, hence $\operatorname{Re}h(z) \le A + C|z|$ with $A := \log\bigl(M/|f(0)|\bigr) \ge -\infty$ finite, since $M>0$ and $f(0) \ne 0$. [step 3.1, algebra]

5.1 Apply [step 1.1] to $H := h - h'(0)z$, an entire function with $H(0) = 0$ and $\operatorname{Re}H(z) \le A + (C + |h'(0)|)|z|$ by [step 4.1]: then $|H(z)| \le 2(C+|h'(0)|)|z|$ for all $z$. [step 1.1, step 4.1, algebra]

6.1 By [step 5.1] the entire extension $\zeta \mapsto H(\zeta)/\zeta$ supplied by [L6] is bounded by $2(C+|h'(0)|)$, hence constant by [L8]; its value at $0$ is $H'(0) = h'(0) - h'(0) = 0$, so $H \equiv 0$ and $h(z) = h'(0)z$ for all $z$. [step 5.1, L6, L8, algebra]

7.1 By [step 3.1] and [step 6.1], $f(z) = f(0)e^{h'(0)z}$ with $h'(0) = g(0) = f'(0)/f(0)$, and if $f(0) = 1$ this reads $f(z) = e^{f'(0)z}$; the lemma is proved. [step 3.1, step 6.1, algebra] ∎

## Remarks

- **Why the constant $M$ cannot be dropped from the statement.** The proof uses $M$ only to produce the affine upper bound $\operatorname{Re}h \le A + C|z|$ with a finite constant $A$; any extra multiplicative constant in the growth assumption enters exactly there and nowhere else.
- **No use of the argument principle.** The logarithm is obtained by integrating $f'/f$ along the convex plane, and the rigidity of $h$ comes from the maximum-modulus estimate of [step 1.1] plus Liouville; no winding number is needed.
