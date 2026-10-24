---
id: "thm-carleson-hunt-maximal-inequality-on-the-torus"
kind: "theorem"
title: "Carleson hunt maximal inequality on the torus"
deps: ["lem-hunt-exceptional-set-and-distribution-estimates", "lem-carleson-restricted-weak-interpolation", "lem-wave-packet-model-dominates-the-linearised-carleson-operator", "lem-carleson-real-line-to-torus-transfer", "def-period-one-fourier-coefficients-partial-sums-and-convolution", "def-axiom-of-choice"]
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: 'Lacey, Carleson’s Theorem: Proof, Complements, Variations'
      url: https://arxiv.org/pdf/math/0307008
      locator: Lacey section 7; Fremlin section 286
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
status: published
origin: "pipeline"
---

## Statement

Assume AC. For every 1<p<infinity, ||sup_{N>=0}|S_N f|||_{Lp(T)}<=C_p||f||_{Lp(T)} for all complex f in Lp(T), with normalized measure.

## Facts & Assumptions

[F1] The finite models are uniformly restricted weak type (q,q) for every1<q<infinity [[lem-hunt-exceptional-set-and-distribution-estimates]].

[F2] Restricted weak bounds at1<r<p<s<infinity give uniform strong(p,p) finite-model bounds [[lem-carleson-restricted-weak-interpolation]].

[F3] Uniform finite-model strong(p,p) bounds imply the real-line Carleson maximal bound on Schwartz input [[lem-wave-packet-model-dominates-the-linearised-carleson-operator]].

[F4] Real-line bounds on Schwartz inputs imply the symmetric partial-sum maximal bound on normalized Lp(T), including all complex inputs and the infinite supremum [[lem-carleson-real-line-to-torus-transfer]].

[F5] The torus convention is period one, $\widehat f(k)=\int_0^1f(t)e^{-2\pi ikt}dt$ and $S_Nf=\sum_{|k|\le N}\widehat f(k)e^{2\pi ikx}$ [[def-period-one-fourier-coefficients-partial-sums-and-convolution]].

[F6] Assume AC [[def-axiom-of-choice]], supplying the countable-choice Fourier, maximal and Fejer interfaces used by these suppliers.

## Proof

**Given:** An arbitrary exponent1<p<infinity and a complex class f in $L^p(\mathbb T)$ with the normalized measure and coefficients of F5.

1.1 Choose $r=(p+1)/2$ and s=2p, so1<r<p<s<infinity. Apply F1 at r and s, then F2. The resulting finite-model strong(p,p) constant B_p depends only on p and the fixed packet, not on the finite family or measurable selector. [F1, F2, given]

2.1 F3 transfers this uniform bound to $\|C_{\mathbb R}u\|_p\le D_p\|u\|_p$ for every complex Schwartz u, with $D_p=\kappa^{-1}B_p<\infty$ and the positive reconstruction constant defined there. No passage from weak type at the same exponent is used. Since p was arbitrary, these real-line bounds hold separately for every exponent strictly between one and infinity. [F3, step 1.1]

3.1 Apply F4 at the chosen p. It gives a finite constant $C_p$, depending only on p and the real-line bound $D_p$, such that $\|\sup_{N\ge0}|S_Nf|\|_{L^p(\mathbb T)}\le C_p\|f\|_{L^p(\mathbb T)}$ with precisely the coefficients and normalized measure in F5. The countable supremum is measurable, and the estimate holds for the actual partial sums of every complex Lp representative class; changing the representative does not change any coefficient. The case f=0 and the cutoff N=0 are included by F4. The argument uses no p=1 or p=infinity assertion. AC is inherited exactly through F6 and its suppliers. [F4, F5, F6, step 2.1] ∎
