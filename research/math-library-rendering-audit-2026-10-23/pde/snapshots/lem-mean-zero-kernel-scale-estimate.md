---
id: lem-mean-zero-kernel-scale-estimate
kind: lemma
title: "A scale integral estimate for mean-zero kernels"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-coordinate-direction-form-of-the-slobodeckij-seminorm, lem-complex-translation-and-approximate-identity-interfaces, thm-holder-inequality-for-integrals, thm-tonelli-and-fubini-for-completed-product-measures, def-fractional-slobodeckij-space-on-euclidean-space, def-countable-choice, thm-minkowski-integral-inequality]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  verified: {"model":"gpt-6.1-sol","verdict":"pass","date":"2026-10-03","scope":"Recovered historical Step5 independent whole-item claim/body/proof read for lem-mean-zero-kernel-scale-estimate and actual needed supplier interfaces/source passages from frontier-38-owner-30 reader-4; completed reader repair plus item-specific Alpha disposition. No fresh review or claim that a stamp was issued historically; external recursive proof closure/all bibliography excluded.","delegated_by":"owner via tools/autopilot frontier-38-owner-30 Step5 reader dispatch","content_sha256":"062fdf79843910bde66f5f49d7cb6991cc9068c86140be98882611d31b5eecf4","evidence":["research/frontier-38-owner-30-reader-4.md","research/frontier-38-owner-30-reader-findings-4.json","research/frontier-38-owner-30-dispatch/reader-reader-4.result.json","research/frontier-38-owner-30-step5-hash-4-post-5a.json","research/frontier-38-owner-30-alpha-batch-4-5a-decisions.json","research/frontier-38-owner-30-dispatch/alpha-5a-batch-4.result.json"],"historical_binding":{"commit":"d90f26208","file":"items/lem-mean-zero-kernel-scale-estimate.md","historical_raw_sha256":"dadf3e0ed43523bb57aedd845bbc3023cdf4fd0bd5335ae2fea86da445190ffd","transformations":["remove only judge stamp using stripJudgeStamp","publication changed status draft to published; verification metadata excluded from content hash"],"source_snapshot":"sources and source locators included in the exact bound mathematical carrier","read_completed_at":"2026-10-03T08:45:04.218Z"}}
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Petru Mironescu, Fine properties of functions: an introduction (Internet Archive capture of the HAL deposit cel-00747696)"
      url: "https://web.archive.org/web/20200319104529id_/https://hal.science/cel-00747696/document"
      locator: "Chapter 11, Section 11.2, estimates (11.32)-(11.37), printed pp. 78-79: mean-zero kernels of scale $t$ are bounded by $Ct^{-d}$ on $B(0,t)$ and Holder is applied over the ball."
    - title: "Maria Kampanou, Trace Theorems for Sobolev Spaces (master's thesis, National and Kapodistrian University of Athens, July 2018)"
      url: "https://pergamos.lib.uoa.gr/uoa/dl/object/2864871/file.pdf"
      locator: "Chapter 3, the estimates leading to (3.6)-(3.7), printed pp. 24-26: difference decomposition of a mean-zero scaled kernel, Tonelli, and the substitution in the normal variable."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "No. 2-3, the constructions of the direct and inverse trace estimates on printed pp. 290-300: scaled convolution kernels with vanishing moments."
    - title: "Armin Schikorra, Partial Differential Equations (University of Pittsburgh, version 4 December 2019)"
      url: "https://sites.pitt.edu/~armin/pde1_2019/pde_script.pdf"
      locator: "Chapter V, Section V.2, printed pp. 98-100: scaled kernels and their difference form on the half-space."
    - title: "Petru Mironescu, Fine properties of functions: an introduction (author-hosted 89-page edition)"
      url: "https://math.univ-lyon1.fr/~mironescu/resources/introduction_fine_properties_functions_2005.pdf"
      locator: "Chapter 12, Theorem 25(b), estimates (12.32)-(12.37), printed pp. 86-87."
---

## Statement

Assume Countable Choice. Let $d\ge1$, $1<p<\infty$, $\theta=1-1/p$, and let
$\psi\in C_c(\mathbb R^d)$ with $\int_{\mathbb R^d}\psi=0$. For $t>0$ put
$\psi_t(y):=t^{-d}\psi(y/t)$. Then for every $g\in L^p(\mathbb R^d)$ and
every $T>0$,
$$\int_0^Tt^{-p}\|g*\psi_t\|_{L^p(\mathbb R^d)}^p\,dt\le C(d,p,\psi)\sum_{i=1}^d\int_0^\infty h^{-p}\int_{\mathbb R^d}|g(x+he_i)-g(x)|^pdx\,dh\le C'(d,p,\psi)\,[g]_{\theta,p}^p,$$
with $C'$ independent of $T$ and of $g$.

## Facts & Assumptions

**Given:** Countable Choice; $d\ge1$, $1<p<\infty$, $\theta=1-1/p$; a kernel $\psi\in C_c(\mathbb R^d)$ with $\int\psi=0$ and support in a ball of radius $c_\psi>0$; the scaled kernels $\psi_t(y)=t^{-d}\psi(y/t)$ for $t>0$; a function $g\in L^p(\mathbb R^d)$; and $T>0$.

[F1] Assume Countable Choice. For complex $K\in L^1(\mathbb R^d)$ and $f\in L^p$, the convolution $K*f$ exists absolutely a.e., defines a measurable class independent of representatives, and satisfies $\|K*f\|_p\le\|K\|_1\|f\|_p$. ([[lem-complex-translation-and-approximate-identity-interfaces]])

[F2] Holder's inequality: for conjugate exponents $p,p'$ and measurable $\varphi,\psi$ with $\varphi\in\mathcal L^p$, $\psi\in\mathcal L^{p'}$, $\int|\varphi\psi|\le\|\varphi\|_p\|\psi\|_{p'}$. ([[thm-holder-inequality-for-integrals]])

[F3] Assume Countable Choice. For nonnegative measurable functions on a product of sigma-finite measure spaces the double integral equals the iterated integrals with measurable section integrals. ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[def-countable-choice]])

[F4] The Euclidean seminorm is the extended double integral $[g]_{\theta,p}=(\int\int|g(\xi)-g(\eta)|^p|\xi-\eta|^{-d-p\theta}d\xi\,d\eta)^{1/p}$, and it is comparable to the sum of coordinate-direction integrals: $[g]_{\theta,p}^p\le C_1(d,p,\theta)\sum_{i=1}^d\int_0^\infty h^{-1-p\theta}\int|g(\xi+he_i)-g(\xi)|^pd\xi\,dh$, and also $\sum_i\int_0^\infty h^{-1-p\theta}\int|g(\xi+he_i)-g(\xi)|^pd\xi\,dh\le C_2[g]_{\theta,p}^p$, with $1+p\theta=p$. ([[def-fractional-slobodeckij-space-on-euclidean-space]], [[lem-coordinate-direction-form-of-the-slobodeckij-seminorm]])

## Proof

**Proof technique:** direct.

1.1 The difference form and the pointwise ball estimate. For $t>0$ one has $\int\psi_t=0$ by the change of variables $y\mapsto ty$, so for a.e. $x$ the convolution equals $g*\psi_t(x)=\int_{\mathbb R^d}\bigl(g(x-y)-g(x)\bigr)\psi_t(y)\,dy$, the subtracted term $\int g(x)\psi_t(y)dy$ vanishing; this is well defined for a.e. $x$ by [F1] and the a.e. finiteness of $g$. Since $\|\psi_t\|_\infty=t^{-d}\|\psi\|_\infty$ and $\operatorname{supp}\psi_t\subseteq B(0,c_\psi t)$, the absolute value is at most $\|\psi\|_\infty t^{-d}\int_{B(0,c_\psi t)}|g(x-y)-g(x)|dy$, and Holder [F2] over that ball gives $|g*\psi_t(x)|^p\le\|\psi\|_\infty^pt^{-dp}(\omega_dc_\psi^dt^d)^{p-1}\int_{B(0,c_\psi t)}|g(x-y)-g(x)|^pdy=C(\psi)t^{-d}\int_{B(0,c_\psi t)}|g(x-y)-g(x)|^pdy$. [F1, F2, algebra, given]

2.1 Integrating in $x$ and $t$. Integrating the bound of step 1.1 over $x$ and using Tonelli [F3] to exchange the $x$- and $y$-integrals gives $\|g*\psi_t\|_p^p\le C(\psi)t^{-d}\int_{|y|\le c_\psi t}\int_{\mathbb R^d}|g(x-y)-g(x)|^pdx\,dy=C(\psi)t^{-d}\int_{|y|\le c_\psi t}D_g(|y|,\hat y)\,dy$, where $D_g(r,\omega):=\int_{\mathbb R^d}|g(x+r\omega)-g(x)|^pdx$ and $\hat y:=y/|y|$. Multiplying by $t^{-p}$ and integrating over $t\in(0,T)$, another application of Tonelli [F3] gives $\int_0^Tt^{-p}\|g*\psi_t\|_p^pdt\le C(\psi)\int_{\mathbb R^d}D_g(|y|,\hat y)\Bigl(\int_0^T\mathbf1_{\{|y|\le c_\psi t\}}t^{-p-d}dt\Bigr)dy$; the inner integral vanishes for $|y|>c_\psi T$ and is at most $\int_{|y|/c_\psi}^\infty t^{-p-d}dt=\frac{c_\psi^{p+d-1}}{p+d-1}|y|^{-(p+d-1)}$, so the left-hand side is at most $C'(d,p,\psi)\int_{\mathbb R^d}D_g(|y|,\hat y)|y|^{-(p+d-1)}dy$, a bound independent of $T$. [F3, step 1.1, algebra]

3.1 Identifying the weight and invoking the coordinate-direction form. The substitution $y=x+h$ together with translation invariance of Lebesgue measure and Tonelli [F3] gives $\int_{\mathbb R^d}D_g(|y|,\hat y)|y|^{-(p+d-1)}dy=\int_{\mathbb R^d}\|g(\cdot+h)-g(\cdot)\|_p^p|h|^{-d-p\theta}dh=[g]_{\theta,p}^p$, because $p+d-1=d+p\theta$ at $\theta=1-1/p$. By the comparability clause of [F4], $[g]_{\theta,p}^p\le C_1\sum_{i=1}^d\int_0^\infty h^{-p}\int_{\mathbb R^d}|g(\xi+he_i)-g(\xi)|^pd\xi\,dh$ (again $1+p\theta=p$). Step 2.1 first gives the bound by the seminorm. Combining with both directions of [F4] gives both displayed inequalities, with the second constant independent of $T$ and of $g$. [F3, F4, step 2.1, algebra, given] ∎

## Source notes

Mironescu's estimates (11.32)-(11.37) (printed pp. 78-79) bound a mean-zero kernel of scale $t$ by $Ct^{-d}$ on the ball and apply Holder over the ball; Kampanou's estimates leading to (3.6)-(3.7) (printed pp. 24-26) decompose the difference and apply Tonelli; Gagliardo's direct and inverse estimates (printed pp. 290-300) and Schikorra's Section V.2 (printed pp. 98-100) use scaled kernels with vanishing moments of exactly this form. The proof above keeps the $T$-upper limit through both integrations and drops it only into a convergent tail integral, which is why the final constant does not depend on $T$.
