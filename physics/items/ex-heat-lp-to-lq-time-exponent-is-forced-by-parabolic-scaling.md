---
id: ex-heat-lp-to-lq-time-exponent-is-forced-by-parabolic-scaling
kind: example
title: "The heat smoothing time exponent is forced by scaling"
status: published
origin: pipeline
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
  - def-heat-evolution-of-initial-data
  - lem-euclidean-balls-have-positive-finite-lebesgue-measure
  - lem-heat-kernel-normalisation-scaling-and-derivatives
  - prop-indicator-function-is-measurable-iff-its-set-is-measurable
  - thm-lp-to-lq-heat-kernel-estimate
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-3.md"
      - "research/frontier-38-owner-30-alpha-batch-3-5a.md"
      - "research/frontier-38-owner-30-step5-hash-3-post.json"
    reviewed_raw_sha256: "ad6924c8badd440be9efab17bd0d0ed75849a4c40da515d5c3a6b4aa5cbda3e5"
    content_sha256: "b085aadf506c320090349baa5fe5d5b766b2ea7ae6b803828d08972f5ef2e099"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (revised 18 June 2014, UC Davis)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§5.1.1–5.1.2, printed pp. 129–131, (5.6)–(5.9), Theorem 5.5"
    - title: "Jared Speck, MIT 18.152 Introduction to Partial Differential Equations, Class Meeting #5: The Fundamental Solution for the Heat Equation (Fall 2011)"
      url: "https://ocw.mit.edu/courses/18-152-introduction-to-partial-differential-equations-fall-2011/9acdeff6449529106ac254f7ada967da_MIT18_152F11_lec_05.pdf"
      locator: "Lemma 2.0.2, pp. 7–8 (parabolic dilation invariance), and Definition 1.0.1, p. 1"
---

## Example

Assume Countable Choice. For $n\ge1$ and $1\le p\le q\le\infty$, an estimate
$$\|H_tf\|_q\le Ct^{-\beta}\|f\|_p$$
valid for every $t>0$ and every $f\in L^p(\mathbb R^n)$ with a finite constant
$C$ independent of $t,f$ requires $\beta=\frac n2\bigl(\frac1p-\frac1q\bigr)$.
This asserts the necessary power, not the optimal Young constant.

## Facts & Assumptions

**Given:** Countable Choice, $n\ge1$, $1\le p\le q\le\infty$, a real $\beta$, a finite constant $C$ with $\|H_tf\|_q\le Ct^{-\beta}\|f\|_p$ for all $t>0$ and all $f\in L^p(\mathbb R^n)$, and $\lambda>0$.

[A1] Countable Choice is the hypothesis carried by the evolution and integration suppliers below ([[def-countable-choice]]).

[F1] $H_tf$ is the $L^p$ (respectively $L^q$) class of $\Gamma_t*f$ whenever $f$ lies in the corresponding space ([[def-heat-evolution-of-initial-data]]).

[F2] For every $s>0$ the kernel satisfies $\Gamma(z,s)=(4\pi s)^{-n/2}e^{-|z|^2/(4s)}$ and the scaling identity $\Gamma(\lambda u,\lambda^2s)=\lambda^{-n}\Gamma(u,s)$; it is positive with unit mass ([[lem-heat-kernel-normalisation-scaling-and-derivatives]]).

[F3] For $1\le p\le q\le\infty$ the heat flow satisfies $\|H_1g\|_q\le C_{n,p,q}\|g\|_p$ with a finite constant, so $\|H_1g\|_q<\infty$ for every $g\in L^p$ ([[thm-lp-to-lq-heat-kernel-estimate]]).

[F4] For a measurable $g\ge0$, $\int_{\mathbb R^n}g=0$ if and only if $g=0$ almost everywhere ([[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F5] The unit ball $B_1\subseteq\mathbb R^n$ is measurable with $0<|B_1|<\infty$ ([[lem-euclidean-balls-have-positive-finite-lebesgue-measure]]), so its indicator is measurable ([[prop-indicator-function-is-measurable-iff-its-set-is-measurable]]).

[F6] For a $C^1$ diffeomorphism $T$ of open sets and $g\in L^1(V)$, $\int_Vg(y)\,dy=\int_Ug(T(x))|\det DT(x)|\,dx$ ([[cor-c-one-change-of-variables-for-l-one-functions]]); the mutually inverse maps $x\mapsto\lambda x$ and $z\mapsto\lambda^{-1}z$ used below qualify with $|\det DT|=\lambda^{\pm n}$.



## Verification

**Proof technique:** direct.

1.1 The base datum: put $f:=\mathbf 1_{B_1}$. By [F5] the function $f$ is measurable, nonnegative and nonzero, and $\|f\|_p=|B_1|^{1/p}$ for $1\le p<\infty$ while $\|f\|_\infty=1$, so $f\in L^p(\mathbb R^n)$ with $0<\|f\|_p<\infty$ for every $1\le p\le\infty$ (with the usual $1/\infty=0$ reading of the exponent). [A1, F5, given]

2.1 Dilated data: for $\lambda>0$ put $f_\lambda(x):=f(\lambda x)$. Substituting $z=\lambda x$ in the $L^p$ integral through [F6] gives $\|f_\lambda\|_p=\lambda^{-n/p}\|f\|_p$ for $1\le p<\infty$, and $\|f_\lambda\|_\infty=\|f\|_\infty=1$ for $p=\infty$; in both cases $\|f_\lambda\|_p=\lambda^{-n/p}\|f\|_p$ with $1/\infty=0$. [step 1.1, F6, given, algebra]

2.2 Parabolic scaling of the flow: substituting $z=\lambda y$ in the defining convolution of [F1] and using the kernel scaling identity of [F2] with $\lambda$ replaced by $\lambda^{-1}$, $\Gamma(x-\lambda^{-1}z,\lambda^{-2})=\lambda^n\Gamma(\lambda x-z,1)$, gives $H_{\lambda^{-2}}f_\lambda(x)=\int\Gamma(x-\lambda^{-1}z,\lambda^{-2})f(z)\lambda^{-n}\,dz=\int\Gamma(\lambda x-z,1)f(z)\,dz=H_1f(\lambda x)$ for every $x$. [step 1.1, F1, F2, F6, given, algebra]

3.1 Norm of the scaled flow: substituting $w=\lambda x$ in the defining integral of $\|H_{\lambda^{-2}}f_\lambda\|_q^q$ through [F6] and using step 2.2 gives $\|H_{\lambda^{-2}}f_\lambda\|_q=\lambda^{-n/q}\|H_1f\|_q$ for $1\le q<\infty$, and step 2.2 directly gives $\|H_{\lambda^{-2}}f_\lambda\|_\infty=\|H_1f\|_\infty$; moreover $0<\|H_1f\|_q<\infty$, because the finiteness is [F3] with $g=f\in L^p$, and the strict positivity follows from $H_1f>0$ everywhere (the integrand $\Gamma(x-y,1)f(y)$ is positive on the positive-measure set $B_1$) together with [F4] applied to $H_1f\ge0$ when $q<\infty$ and with the fact that a zero essential supremum would force $H_1f=0$ almost everywhere, contradicting positivity everywhere when $q=\infty$. [step 1.1, step 2.2, F3, F4, given, algebra]

4.1 Forcing the exponent: apply the hypothesised estimate to $f_\lambda$ at time $t=\lambda^{-2}$: by steps 2.1 and 3.1, $\lambda^{-n/q}\|H_1f\|_q\le C\lambda^{2\beta}\lambda^{-n/p}\|f\|_p$, that is, $0<\frac{\|H_1f\|_q}{\|f\|_p}\le C\lambda^{2\beta-n(1/p-1/q)}$ for every $\lambda>0$. If $2\beta-n(\frac1p-\frac1q)$ were positive, letting $\lambda\downarrow0$ would give the contradiction $0<L\le0$; if it were negative, letting $\lambda\to\infty$ would give the same contradiction; hence $2\beta=n(\frac1p-\frac1q)$ and $\beta=\frac n2(\frac1p-\frac1q)$. [step 3.1, given, algebra]

5.1 Steps 1.1, 2.1, 2.2, 3.1 and 4.1 exhibit a single nonzero nonnegative datum whose parabolic dilates force the time exponent to equal $\frac n2(\frac1p-\frac1q)$ in any estimate of the stated form; this determines the necessary power and says nothing about the optimal constant, whose optimality is not asserted by [F3]. [step 1.1, step 2.1, step 2.2, step 3.1, step 4.1, F3, given] ∎
