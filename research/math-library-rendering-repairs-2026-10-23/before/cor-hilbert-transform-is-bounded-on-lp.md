---
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered cumulative historical verification: original independent Step5 whole-item claim/body/proof reading for cor-hilbert-transform-is-bounded-on-lp, completed Step5 repairs/dispositions, and later exact Step7 local correction reasoning. Later correction evidence is local author repair/self-review, not an independent fresh audit. Every substantive preguard-to-current delta is covered by the recorded repair reason; no new review or historical audit stamp is claimed. Supplier/source coverage is limited to actual recorded passages/interfaces, excluding recursive foundational closure/all bibliography.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader and Step7 repair dispatch","content_sha256":"2a9355205ae8ecc31acc79b7f539a753a31d99378836645af833ef8ec1fa8d9a","evidence":["research/frontier-38-owner-30-reader-5.md","research/frontier-38-owner-30-reader-findings-5.json","research/frontier-38-owner-30-dispatch/reader-reader-5.result.json","research/frontier-38-owner-30-alpha-batch-5-5a-decisions.json","research/frontier-38-owner-30-step5-closure.json","research/frontier-38-owner-30-step7-auditor-baseline.json","research/frontier-38-owner-30-step7-v2/step7-v2-impact-initial-r1-u2.json","research/frontier-38-owner-30-dispatch/alpha-repair-step7-v2-impact-initial-r1-u2.result.json"],"historical_binding":{"preguard_raw_sha256":"6cf1182a9b345eb728613a9e0ba0e1fcfbc88105ff6e63000bafab997efccd10","preguard_content_sha256":"669c04dd01c28d9b1c123f7acf4751043af930e41f19178112ef1333b019f010","captured_carrier":{"path":"research/frontier-38-owner-30-dispatch/alpha-repair-step7-v2-impact-initial-r1-u2.attempt-1.log","line":7651},"postguard_content_sha256":"e8d88d46487c7d9bf3686a01452114f0d45edfd46051edb61d6856c2d0f64a12","final_carrier":"git d90f26208:items/cor-hilbert-transform-is-bounded-on-lp.md","publication_transformation":"status draft to published; verification excluded; remaining mathematics/source bytes match exact postguard carrier","original_read_completed_at":"2026-10-03T08:48:14.106Z","local_repair_completed_at":"2026-10-03T16:47:21.999Z","local_repair_reason":"Repaired step 2.1: directly integrating the raw difference bound gives (2/pi)|y| times 2 integral_(2|y|)^infinity r^-2 dr = 2/pi before claiming base and standard kernel status. Added the actual polar supplier under the existing Countable Choice assumption. Statement and constants are unchanged; essential-support separation licenses the retained adjoint proof.","local_repair_qualification":"Local author repair/self-review; cumulative with original independent full item reading"}}
id: cor-hilbert-transform-is-bounded-on-lp
kind: corollary
title: "The Hilbert transform is bounded on Lp"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity, def-calderon-zygmund-kernel-and-principal-value-operator, def-countable-choice, def-hilbert-space-adjoint, def-standard-holder-calderon-zygmund-kernel, def-truncated-hilbert-transform-and-principal-value, lem-holder-cz-kernels-satisfy-hormander-cancellation, lem-hilbert-transform-has-signum-fourier-multiplier, lem-hilbert-transform-is-skew-adjoint-on-ltwo, thm-calderon-zygmund-singular-integrals-are-bounded-on-lp, thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces, thm-locally-integrable-functions-embed-in-distributions, thm-polar-coordinates-formula-for-lebesgue-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Loukas Grafakos, Classical Fourier Analysis, third edition"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "§5.1.1, the kernel $1/(\\pi x)$ and its multiplier, printed pp. 314–317; §5.3.2–5.3.3, Theorem 5.3.3, printed pp. 358–363"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Chapter 20, Propositions 20.2 and 20.3, printed pp. 113–117"
---

## Statement

Assume Countable Choice. The Hilbert transform $H$ of
[[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity|the
$L^2$ multiplier definition]] extends uniquely to a bounded operator on
$L^p(\mathbb R;\mathbb C)$ for every $1<p<\infty$, with norm at most $C_p$, a
constant depending only on $p$: more explicitly the kernel $k(x)=1/(\pi x)$ is
a standard $1$-Hölder Calderón–Zygmund kernel with $A_2'=2/\pi$ and annular
constant $A_1=2\log2/\pi$, so that
$$\|Hf\|_p\le C_p\Bigl(1+\frac2\pi\Bigr)\max\bigl(p,(p-1)^{-1}\bigr)\|f\|_p \qquad(f\in L^p(\mathbb R;\mathbb C))$$
for a numerical constant $C_p$.

## Facts & Assumptions

**Given:** Countable Choice; the kernel $k(x)=1/(\pi x)$ on $\mathbb R\setminus\{0\}$; the operator $H$ of [[lem-hilbert-transform-has-signum-fourier-multiplier]] and [[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]]; a compactly supported $f\in L^2(\mathbb R;\mathbb C)$; a test function $\varphi\in C_c^\infty(\mathbb R)$ supported off $\operatorname{supp}f$.

[F1] On Schwartz functions $H$ is the principal-value operator with kernel $k$: for every Schwartz $g$ the limits $\lim_{\varepsilon\downarrow0}H_\varepsilon g(x)$ exist at every $x$ and equal $(W*g)(x)$ for the tempered distribution $W=\mathrm{pv}\,1/(\pi x)$, and $\mathcal F(Hg)=-i\operatorname{sgn}(\xi) \widehat g(\xi)$ ([[lem-hilbert-transform-has-signum-fourier-multiplier]], [[def-truncated-hilbert-transform-and-principal-value]]).

[F2] $H$ has a unique extension to an $L^2$-bounded operator with $\|Hg\|_2=\|g\|_2$ for all $g\in L^2$ and $H^2=-I$; it is skew-adjoint, $H^*=-H$ for the first-variable-linear pairing $\langle u,v\rangle=\int u\overline v$, so $\langle Hf,\varphi\rangle=\langle f,H^*\varphi\rangle =-\langle f,H\varphi\rangle$ ([[cor-hilbert-transform-is-an-ltwo-isometry-and-squares-to-minus-identity]], [[lem-hilbert-transform-is-skew-adjoint-on-ltwo]], [[def-hilbert-space-adjoint]]).

[F3] A measurable kernel with pointwise bound $|k|\le c|\cdot|^{-n}$ satisfies the annular condition of the base definition with $A_1=c|S^{n-1}|\log2$; a standard $\delta$-Hölder kernel is a Calderón–Zygmund kernel with Hörmander constant $A_2=|S^{n-1}|2^{-\delta}\delta^{-1}A_2'$; and a Calderón–Zygmund operator with constants $A_1,A_2$ and $L^2$ norm $B$ extends uniquely to a bounded operator on $L^p$ for $1<p<\infty$ with $\|Tg\|_p\le C_{n,p}(A_2+B)\max(p,(p-1)^{-1})\|g\|_p$ ([[def-calderon-zygmund-kernel-and-principal-value-operator]], [[def-standard-holder-calderon-zygmund-kernel]], [[lem-holder-cz-kernels-satisfy-hormander-cancellation]], [[thm-calderon-zygmund-singular-integrals-are-bounded-on-lp]]).



[F4] Fubini interchanges absolutely integrable complex double integrals, and locally integrable functions with equal distribution pairings agree almost everywhere. ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]], [[thm-locally-integrable-functions-embed-in-distributions]])

[F5] Under Countable Choice, polar coordinates integrate every nonnegative Borel function against $r^{n-1}dr\,d\sigma$; in dimension one $S^0=\{-1,1\}$ has counting measure. ([[thm-polar-coordinates-formula-for-lebesgue-measure]])

## Proof

**Proof technique:** direct.

1.1 Size and smoothness of the kernel. $|k(x)|=1/(\pi|x|)$ for $x\ne0$, which is the pointwise size bound with constant $1/\pi$; and for $|x|\ge2|y|>0$ the difference is $|k(x-y)-k(x)|=\frac1\pi\bigl|\frac1{x-y}-\frac1x\bigr|=\frac{|y|}{\pi|x|\,|x-y|}\le\frac{2}{\pi}\frac{|y|}{|x|^2}$, because $|x-y|\ge|x|-|y|\ge|x|/2$. Hence $k$ satisfies the standard $1$-Hölder condition with constant $A_2'=2/\pi$. [given, algebra]

2.1 The smooth kernel is measurable and locally integrable away from zero. Its oddness gives $k(r)+k(-r)=0$, and [F5] gives $\int_{R\le|x|\le2R}|k(x)|\,dx=(2/\pi)\int_R^{2R}dr/r=2\log2/\pi$. For each $y\ne0$, directly integrating the estimate of step 1.1 gives $\int_{|x|\ge2|y|}|k(x-y)-k(x)|\,dx\le(2/\pi)|y|\,2\int_{2|y|}^{\infty}r^{-2}dr=2/\pi$. Thus the base kernel conditions hold with $A_1=2\log2/\pi$ and $A_2=2/\pi$; together with step 1.1 they establish standard $1$-Hölder status with $A_2'=2/\pi$. [F3, F5, step 1.1, algebra]

3.1 $H$ is a Calderón–Zygmund operator with kernel $k$ and $L^2$ norm $B=1$. It is $L^2$-bounded with norm one by [F2], so it remains to prove the off-support representation. Let $f\in L^2$ be compactly supported, let $\varphi\in C_c^\infty$ be supported off $\operatorname{supp}f$, and put $d:=\operatorname{dist}(\operatorname{supp}f,\operatorname{supp}\varphi)>0$. By [F2] and the reality of $k$, $$\langle Hf,\varphi\rangle=-\int f(y)\overline{H\varphi(y)}\,dy=-\frac1\pi\iint\frac{f(y)\overline{\varphi(x)}}{y-x}\,dx\,dy,$$ where the inner limit defining $\overline{H\varphi(y)}=\frac1\pi\mathrm{p.v.}\int\frac{\overline{\varphi(x)}}{y-x}\,dx$ is an absolutely convergent integral because $|x-y|\ge d>0$ on $\operatorname{supp}f\times\operatorname{supp}\varphi$; the double integral is absolutely convergent over the bounded supports, so Fubini's theorem may be applied and the sign of the denominator changed: $$\langle Hf,\varphi\rangle=\frac1\pi\iint\frac{f(y)\overline{\varphi(x)}}{x-y}\,dx\,dy=\int\Bigl(\int k(x-y)f(y)\,dy\Bigr)\overline{\varphi(x)}\,dx,$$ the last equality by the definition $k(x-y)=1/(\pi(x-y))$ and Fubini. Since the pairing against every test function supported off $\operatorname{supp}f$ determines the $L^2$ class off that support, the $L^2$ function $Hf$ agrees almost everywhere off $\operatorname{supp}f$ with the locally integrable function $x\mapsto\int k(x-y)f(y)\,dy$, which is the representation (3) required of a Calderón–Zygmund operator. [F1, F2, step 2.1, algebra, F4]

4.1 Applying the strict-range theorem [F3] to the Calderón–Zygmund operator $H$ with constants $A_1=2\log2/\pi$, $A_2=2/\pi$ and $B=1$ yields a unique bounded extension of $H$ to $L^p(\mathbb R;\mathbb C)$ for every $1<p<\infty$ with $\|Hg\|_p\le C_{1,p}(1+2/\pi)\max(p,(p-1)^{-1})\|g\|_p$; since the dimension is one, $C_{1,p}$ depends only on $p$. This is the assertion. [F3, step 2.1, step 3.1] ∎
