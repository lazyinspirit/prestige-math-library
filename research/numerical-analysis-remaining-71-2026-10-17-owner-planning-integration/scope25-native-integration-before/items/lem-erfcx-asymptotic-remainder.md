---
id: lem-erfcx-asymptotic-remainder
kind: lemma
title: Signed finite remainder for the erfcx asymptotic expansion
status: draft
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-erfcx-moment-sequence, lem-erfcx-moment-recurrence, thm-substitution-for-improper-integrals, lem-taylor-lagrange-remainder-from-mean-value, def-euler-gamma-function, lem-gamma-integral-converges-locally-uniformly, cor-gamma-factorial-values]
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: DLMF, §7.12(i), equation 7.12.1
      url: https://dlmf.nist.gov/7.12
    - title: N. M. Temme, “Numerical aspects of special functions,” Acta Numerica 17 (2008), §§3 and 5
      url: https://ir.cwi.nl/pub/11612/11612C.pdf
dependency_level: 3
---

## Statement

For real $x>0$ and integer $N\ge1$, put

$$(1/2)_0=1,\qquad (1/2)_k=\prod_{j=0}^{k-1}(j+1/2).$$

$$S_N(x)=\frac1{x\sqrt\pi}\sum_{k=0}^{N-1} (-1)^k\frac{(1/2)_k}{x^{2k}}.$$

Then

$$\operatorname{erfcx}(x)-S_N(x)=(-1)^N R_N(x),\qquad 0\le R_N(x)\le \frac1{x\sqrt\pi}\frac{(2N)!}{4^N N!x^{2N}}.$$

This is a finite signed remainder bound, not a convergence assertion for the
asymptotic series.

## Facts & Assumptions

**Given:** $x>0$, integer $N\ge1$, and the definitions of erfcx and
$M_k(x)$ in [[def-erfcx-moment-sequence]].

[F1] [[lem-erfcx-moment-recurrence]]:
$\operatorname{erfcx}(x)=2M_0(x)/\sqrt\pi$.

[F2] [[thm-substitution-for-improper-integrals]]: a valid increasing $C^1$
substitution preserves convergence and value of an improper integral.

[F3] [[lem-taylor-lagrange-remainder-from-mean-value]]: the Taylor remainder
after degree $N-1$ of a $C^N$ function is $f^{(N)}(\xi)t^N/N!$ for some
$\xi$ between the expansion point and $t$.

[F4] [[cor-gamma-factorial-values]]: $\Gamma(N+1)=N!$ for integer $N\ge0$.

[F5] [[def-euler-gamma-function]] and
[[lem-gamma-integral-converges-locally-uniformly]]: for $a>0$,
$\Gamma(a)=\int_0^\infty s^{a-1}e^{-s}\,ds<\infty$.

## Proof
1.1 In the integral for $M_0$, set $s=t^2+2xt$. Its derivative $2(t+x)>0$ for $t\ge0$, so [F2] applies. Then $ds=2(t+x)dt$, $t+x=\sqrt{x^2+s}$, and $$\operatorname{erfcx}(x)=\frac1{\sqrt\pi}\int_0^\infty \frac{e^{-s}}{\sqrt{x^2+s}}\,ds =\frac1{x\sqrt\pi}\int_0^\infty e^{-s} \left(1+\frac{s}{x^2}\right)^{-1/2}ds.$$ [given, F1, F2, algebra]

1.2 Direct differentiation gives $f^{(N)}(u)=(-1)^N(1/2)_N(1+u)^{-N-1/2}$. Apply [F3] to $f(t)=(1+t)^{-1/2}$ at $0$ to obtain $$f(t)=\sum_{k=0}^{N-1}(-1)^k\frac{(1/2)_k}{k!}t^k+(-1)^N\rho_N(t), \qquad 0\le\rho_N(t)\le\frac{(1/2)_N}{N!}t^N \quad(t\ge0),$$ because $|f^{(N)}(u)|=(1/2)_N(1+u)^{-N-1/2}\le(1/2)_N$ for $u\ge0$. [F3, algebra]

2.1 Substitute $t=s/x^2$ in step 1.2 and integrate against $e^{-s}/(x\sqrt\pi)$. By the Gamma integral and [F4], $\int_0^\infty e^{-s}s^Nds=\Gamma(N+1)=N!$ by [F5] and [F4]. The signed remainder is nonnegative after removing $(-1)^N$ and is at most $(1/2)_N/(x^{2N+1}\sqrt\pi)$. The identity $(1/2)_N=(2N)!/(4^N N!)$ follows by separating even and odd factors in $(2N)!$. This gives the stated bound. [F4, F5, step 1.1, step 1.2, algebra] ∎