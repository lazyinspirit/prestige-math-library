---
id: thm-two-sum-error-free-transform
kind: theorem
title: "TwoSum returns the exact rounding error of a floating point sum"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-two-sum-error-free-transform
  - def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma
  - lem-binary-rounding-grid-and-ordered-two-sum
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-17
sources:
  references:
    - title: "Shewchuk, Adaptive Precision Floating-Point Arithmetic and Fast Robust Geometric Predicates, sections 2.2–2.3"
      url: https://people.eecs.berkeley.edu/~jrs/papers/robustr.pdf
    - title: "Fundamentals of Numerical Computation, floating-point arithmetic"
      url: https://fncbook.com/floating-point/
    - title: "Higham, The Accuracy of Floating Point Summation"
      url: https://nhigham.com/wp-content/uploads/2023/10/high93s.pdf
    - title: "Ogita, Rump, and Oishi, Accurate Sum and Dot Product"
      url: https://www.tuhh.de/ti3/paper/rump/OgRuOi05.pdf
---

## Statement

Use a binary floating-point format of precision $p\ge2$: its normal positive values are $m2^{j-p+1}$ for integers $2^{p-1}\le m<2^p$ and $e_{\min}\le j\le e_{\max}$, with their negatives and zero. Any additional representable values below the normal range must belong to the unbounded binary set $\mathbb B_p$ of [[lem-binary-rounding-grid-and-ordered-two-sum]] (as ordinary binary subnormals do). Round each operation to nearest, ties to even, with the no-underflow success rule of [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]].

For any representable real inputs $a,b$ for which [[alg-two-sum-error-free-transform]] succeeds, its output satisfies
$$s=\operatorname{fl}(a+b),\qquad e=(a+b)-s,\qquad s+e=a+b$$
exactly in real arithmetic. No ordering or sign condition on the inputs is required; zeros, exact cancellation, and all successful calls at either normal-range boundary are included.

## Facts & Assumptions

**Given:** the binary format, rounding rule, representable inputs, and successful call in the Statement.

[F1] [[alg-two-sum-error-free-transform]] evaluates six separately rounded operations: $s=\operatorname{fl}(a+b)$, $z=\operatorname{fl}(s-a)$, $v=\operatorname{fl}(s-z)$, $w=\operatorname{fl}(a-v)$, $t=\operatorname{fl}(b-z)$, and $e=\operatorname{fl}(w+t)$.

[F2] [[def-operationwise-real-complex-floating-point-model-with-sqrt-and-fma]]: success requires each exact intermediate to be zero or within the normal range, with finite rounded output.

[F3] [[lem-binary-rounding-grid-and-ordered-two-sum]] supplies monotonicity, oddness, the grid error bound, representable addition errors, exact small cancellation, Sterbenz subtraction, and the ordered transform on $\mathbb B_p$.

## Proof

1.1 Let $R$ denote unbounded binary nearest-even rounding from [F3]. On the closed normal range, bounded-format rounding equals $R$: the normal grid is identical, its endpoints are representable, and a point beyond either endpoint cannot beat that endpoint for an exact argument inside the range. Additional subnormal values cannot alter a nearest choice there. At a boundary power of two the normalized even significand gives the same tie choice; zero is exact. All inputs belong to $\mathbb B_p$. By [F2], induction over the six operations [F1] therefore identifies the actual successful computation with the same sequence using $R$. It suffices to prove its unbounded identity. [given, F1, F2, F3, algebra]

2.1 Put $\rho=s-(a+b)$. If $|a|\ge|b|$, the ordered transform [F3] gives $z=s-a$ and $R(b-z)=-\rho$ exactly. Consequently $v=R(s-z)=a$, $w=0$, $t=-\rho$, and $e=-\rho$. This includes $a=b=0$. [step 1.1, F3, algebra]

2.2 Suppose $|a|<|b|$. If $|s|<|a|$, the small-rounded-sum assertion [F3] makes $s=a+b$ exact. Then $z=b$, $v=a$, $w=t=e=0$ and $\rho=0$. For the remaining case $|s|\ge|a|$, apply the ordered transform to $(s,-a)$: it says $R(z-s)=z-s$ and $R(-a-(z-s))=(s-a)-z$. Oddness therefore gives $v=R(s-z)=s-z$ and $w=R(a-v)=z-(s-a)$ exactly. Writing $\sigma=z-(s-a)$, we have $w=\sigma$ and $z=b+\rho+\sigma$. [step 1.1, F3, algebra]

3.1 In this remaining case, oddness permits simultaneous sign reversal so that $b>0$. Since $|a|<b$, we have $0<a+b<2b$, and monotonicity gives $0<s\le2b$. Thus $q(s)\le q(2b)=2q(b)$ and the rounding bound yields $|\rho|\le q(b)\le b/2$, since $p\ge2$. Also $|\rho|\le|a|<b$ by the addition-error bound. Therefore $b/2\le s-a=b+\rho<2b$; monotonicity, fixing $b/2$ and $2b$, gives $b/2\le z\le2b$. Sterbenz [F3] makes $t=R(b-z)=b-z=-\rho-\sigma$ exact. Finally $w+t=-\rho$ is representable by the addition-error assertion [F3], so $e=R(w+t)=-\rho$ exactly. Oddness gives the same conclusion before sign reversal. [step 2.2, F3, algebra]

4.1 The branches in steps 2.1, 2.2, and 3.1 cover every magnitude order and sign, and each gives $e=-\rho=(a+b)-s$. Step 1.1 transfers this identity to every successful finite-range call, proving $s+e=a+b$. A nonzero subnormal exact intermediate or overflow returns failure under [F2] and is outside the success conclusion; no extra hidden range assumption is used in any successful boundary case. [step 1.1, step 2.1, step 2.2, step 3.1, F2, algebra] ∎

## Remarks

The binary digit hypothesis supplies exactness information absent from the relative-error model alone. Shewchuk's Theorem 7 states the binary result for $p\ge3$; step 3.1 uses the sharper bound on $s-a$ directly to include $p=2$ as well. The theorem retains unrestricted inputs and does not assume that the residual operations are exact: their exactness is proved above.
