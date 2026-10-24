---
id: lem-zero-free-entire-function-of-exponential-type-is-an-exponential
kind: lemma
title: Zero free entire function of exponential type is an exponential
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: ["thm-path-independence-and-complex-primitive-criterion", "cor-cauchy-theorem-convex-domain", "thm-algebra-of-complex-derivatives", "thm-chain-rule-for-complex-derivatives", "cor-complex-power-series-sums-have-derivatives-of-all-orders", "thm-zero-complex-derivative-on-a-domain-implies-constant", "thm-liouville-bounded-entire-function", "thm-boundary-maximum-modulus-principle", "cor-complex-power-series-sums-are-analytic", "thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition", "thm-holomorphic-if-and-only-if-analytic", "thm-complex-exponential-is-entire-with-derivative-itself", "cor-complex-exponential-cartesian-form-modulus-and-eulers-identity", "thm-complex-exponential-addition-and-real-extension", "cor-exponential-is-a-bijection-onto-positive-reals", "thm-exponential-is-strictly-increasing"]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-22
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
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

**Given:** The zero-free entire function and constants $M>0$, $C\ge0$ of the statement.

[F1] On a convex complex domain every closed rectifiable contour integral of a holomorphic function vanishes; vanishing of these integrals for a continuous function is equivalent to existence of a primitive. ([[cor-cauchy-theorem-convex-domain]], [[thm-path-independence-and-complex-primitive-criterion]]).

[F2] Holomorphic functions are exactly the locally analytic functions. Power-series sums are analytic and admit derivatives of every order by termwise differentiation; analytic functions are closed under algebraic operations, nonvanishing quotients and composition. ([[thm-holomorphic-if-and-only-if-analytic]], [[cor-complex-power-series-sums-are-analytic]], [[cor-complex-power-series-sums-have-derivatives-of-all-orders]], [[thm-complex-analytic-functions-closed-under-algebra-quotients-and-composition]]).

[F3] Complex derivatives satisfy the linear, product, quotient and chain rules; a holomorphic function with derivative zero on a domain is constant. ([[thm-algebra-of-complex-derivatives]], [[thm-chain-rule-for-complex-derivatives]], [[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

[F4] The complex exponential is entire with derivative itself, satisfies $\exp(z+w)=\exp z\exp w$, agrees with the real exponential on the real axis and has modulus $|\exp z|=e^{\operatorname{Re}z}$. The real exponential is a strictly increasing bijection onto the positive reals. ([[thm-complex-exponential-is-entire-with-derivative-itself]], [[thm-complex-exponential-addition-and-real-extension]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]], [[cor-exponential-is-a-bijection-onto-positive-reals]], [[thm-exponential-is-strictly-increasing]]).

[F5] A function continuous on the closure of a bounded domain and holomorphic inside attains its maximum modulus on the boundary. Every bounded entire function is constant. ([[thm-boundary-maximum-modulus-principle]], [[thm-liouville-bounded-entire-function]]).

## Proof

**Proof technique:** direct.

1.1 A disk estimate including zero growth. Suppose $H$ is entire, $H(0)=0$, and $\operatorname{Re}H(w)\le A+B|w|$ with $A,B\ge0$. Fix $w\ne0$ and $0<t<1$, put $R=|w|/t$ and $K=A+BR+1>0$. For $|\zeta|<1$, the denominator $2K-H(R\zeta)$ has real part at least $K+1>0$. Thus $G(\zeta)=H(R\zeta)/(2K-H(R\zeta))$ is holomorphic by [F2] and satisfies $G(0)=0$. For $\eta=H(R\zeta)$, $|2K-\eta|^2-|\eta|^2=4K(K-\operatorname{Re}\eta)>0$, so $|G(\zeta)|<1$. The local power series at zero shows that $G(\zeta)/\zeta$ extends holomorphically through zero. For $0<r<1$, [F5] applied on $|\zeta|\le r$ gives $|G(\zeta)/\zeta|\le1/r$ there; fixing $\zeta$ and letting $r$ increase to one proves $|G(\zeta)|\le|\zeta|$. Hence $|H(R\zeta)|\le|\zeta|(2K+|H(R\zeta)|)$. At $\zeta=tw/|w|$ this becomes $|H(w)|\le[2t(A+1)+2B|w|]/(1-t)$. Let $t$ decrease to zero to conclude $|H(w)|\le2B|w|$; at $w=0$ the same holds. In particular $A=B=0$ never produces division by zero, and $B=0$ forces $H=0$. [F2, F5, algebra]

1.2 Construct the entire logarithm. By the local power series and derivative statements of [F2], $f'$ is holomorphic, and because $f$ is zero-free, $g=f'/f$ is holomorphic. On the convex plane [F1] gives a primitive $h$; subtract its value at zero so $h(0)=0$ and $h'=f'/f$. A primitive is holomorphic by definition, so [F2] also supplies its local power series. [F1, F2, F3]

2.1 By [F3] and [F4], $(fe^{-h})'=f'e^{-h}-fh'e^{-h}=0$. Hence $fe^{-h}$ is constant with value $f(0)$, and the exponential addition formula gives $f=f(0)e^h$. Here $f(0)\ne0$ by zero-freeness. [F3, F4, step 1.2, algebra]

3.1 The growth bound at zero gives $M/|f(0)|\ge1$. Let $A$ be the unique real number with $e^A=M/|f(0)|$, supplied by [F4]. Since the exponential is increasing and $e^0=1$, $A\ge0$. Taking moduli in step 2.1 and using [F4] gives $e^{\operatorname{Re}h(z)}\le e^{A+C|z|}$, so $\operatorname{Re}h(z)\le A+C|z|$. The disk estimate of step 1.1, applied directly to $h$, yields $|h(z)|\le2C|z|$ for all $z$. [F4, step 1.1, step 2.1, algebra]

4.1 Near zero write the convergent power series $h(z)=\sum_{k\ge1}b_k z^k$, with no constant term because $h(0)=0$. Then $h(z)/z=\sum_{k\ge1}b_k z^{k-1}$ extends analytically through zero, with value $b_1=h'(0)$; the shifted series converges on the same disk by comparison on any smaller radius. Away from zero the quotient is holomorphic by [F2]. This defines an entire function $q$, bounded by $2C$ off zero by step 3.1 and at zero by continuity. By [F5], $q$ is constant and equals $h'(0)=f'(0)/f(0)$ from step 1.2. Consequently $h(z)=az$ with the stated $a$, and step 2.1 gives $f(z)=f(0)e^{az}$. [F2, F5, step 1.2, step 2.1, step 3.1, algebra]

5.1 If $C=0$ the bound in step 3.1 forces $h=0$ and hence $a=0$ and $f=f(0)$, including $f=1,M=1$. If $f(0)=1$, step 4.1 gives the advertised normalized formula. The assumptions exclude $M=0$ and $f(0)=0$; the removable value at zero and the open parameter limit $t\downarrow0$ have both been checked. All constructions use uniquely determined analytic operations or one primitive, not any simultaneous choice of arbitrary witnesses. [F3, step 1.1, step 3.1, step 4.1] ∎
