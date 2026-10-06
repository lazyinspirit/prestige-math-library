---
id: lem-centering-by-translation-and-modulation-preserves-the-variance-product
kind: lemma
title: Centring by translation and modulation preserves the variance product
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 1
deps:
  - cor-c-one-change-of-variables-for-l-one-functions
  - def-countable-choice
  - def-spatial-and-frequency-centres-and-variances
  - def-translation-of-a-function-on-rn
  - lem-complex-lp-completeness-density-and-inner-product
  - lem-schwartz-functions-and-all-derivatives-are-integrable
  - lem-schwartz-space-is-dense-in-l-two
  - thm-l-one-l-two-agreement-of-fourier-transform
  - thm-fourier-translation-modulation-dilation-and-reflection-laws
  - thm-plancherel
  - thm-the-lebesgue-integral-respects-almost-everywhere-equality
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§3, equations (3.3)–(3.7), pp. 5–7"
    - title: "Richard S. Laugesen, Harmonic Analysis Lecture Notes (arXiv:0903.3845)"
      url: "https://arxiv.org/pdf/0903.3845"
      locator: "Example 24.5, pp. 144–146"
---

## Statement

Assume countable choice. Let $f\in L^2(\mathbb R^n;\mathbb C)$ be nonzero with
finite second moments, spatial mean $a$, frequency mean $b$, and variances
$V_x(f),V_\xi(f)$ as in [[def-spatial-and-frequency-centres-and-variances]]
([[def-translation-of-a-function-on-rn]]). Define
$$g(x):=e^{-2\pi i\,b\cdot x}f(x+a).$$
Then $g\in L^2$ is nonzero with finite second moments, its spatial mean is $0$
and its frequency mean is $0$, and for every $j$
$$\|x_jg\|_2=\|(x_j-a_j)f\|_2,\qquad \|\xi_j\widehat g\|_2=\|(\xi_j-b_j)\widehat f\|_2 .$$
Consequently $V_x(g)=V_x(f)$, $V_\xi(g)=V_\xi(f)$, and
$V_x(g)V_\xi(g)=V_x(f)V_\xi(f)$.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), a nonzero
$f\in L^2(\mathbb R^n;\mathbb C)$ with finite second moments and means and
variances $a,b,V_x(f),V_\xi(f)$ as in
[[def-spatial-and-frequency-centres-and-variances]], and
$g(x)=e^{-2\pi ib\cdot x}f(x+a)$.

[F1] Countable choice is assumed; it is used by the change-of-variables
interface and to select the $L^2$-approximating sequence in step 2.2
([[def-countable-choice]]).

[F2] Complex $L^1$ change of variables: for a $C^1$ diffeomorphism $T$ with
absolute Jacobian determinant $|\det DT|$ and $h\in L^1$, $\int h(Tx)|\det DT(x)|dx=\int h(y)dy$;
the affine maps $x\mapsto x+a$ and $\xi\mapsto\xi+b$ have determinant $1$
([[cor-c-one-change-of-variables-for-l-one-functions]]). Complex $L^2$ carries
the norm $\|\cdot\|_2$ of [[lem-complex-lp-completeness-density-and-inner-product]].

[F3] Translation and modulation: with $\tau_af(x)=f(x-a)$ and
$M_bf(x)=e^{2\pi ib\cdot x}f(x)$, for $f\in\mathcal S$ one has
$\widehat{\tau_af}(\xi)=e^{-2\pi ia\cdot\xi}\widehat f(\xi)$ and
$\widehat{M_bf}(\xi)=\widehat f(\xi-b)$ at every frequency
([[thm-fourier-translation-modulation-dilation-and-reflection-laws]],
[[def-translation-of-a-function-on-rn]]).

[F4] Schwartz functions lie in $L^1\cap L^2$; Schwartz space is dense in
$L^2$, the integral Fourier transform of any $L^1\cap L^2$ function represents
its Plancherel transform almost everywhere, and Plancherel is an isometry
([[lem-schwartz-functions-and-all-derivatives-are-integrable]],
[[lem-schwartz-space-is-dense-in-l-two]],
[[thm-l-one-l-two-agreement-of-fourier-transform]], [[thm-plancherel]]).

[F5] Integrable functions that agree almost everywhere have equal integrals
([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

## Proof

**Proof technique:** direct.

1.1 The centred function is admissible on the spatial side. Translation preserves null equivalence and the $L^2$ norm by [F2], while modulation has unit modulus, so $g\in L^2$ and $\|g\|_2=\|f\|_2>0$. Substituting $y=x+a$ gives $$\int|x|^2|g(x)|^2dx=\int|y-a|^2|f(y)|^2dy\le2\int|y|^2|f(y)|^2dy+2|a|^2\|f\|_2^2<\infty.$$ Also $\int|x_j||g(x)|^2dx<\infty$ by Cauchy--Schwarz from $g,x_jg\in L^2$. Thus the spatial mean and variance of $g$ are defined; frequency-side finiteness is established in the frequency computation below. [F2, given]

2.1 Spatial side. Substituting $y=x+a$ and using $|g(x)|^2=|f(x+a)|^2$ [F2] gives, for each $j$, $$\int x_j|g(x)|^2dx=\int y_j|f(y)|^2dy-a_j\int|f(y)|^2dy=\|f\|_2^2a_j-\|f\|_2^2a_j=0,\qquad \int x_j^2|g(x)|^2dx=\int(y_j-a_j)^2|f(y)|^2dy .$$ Hence the spatial mean of $g$ is $0$, $\|x_jg\|_2=\|(x_j-a_j)f\|_2$, and $V_x(g)=\|g\|_2^{-2}\int|x|^2|g|^2=\|f\|_2^{-2}\int|y-a|^2|f(y)|^2dy=V_x(f)$. [F2, given, step 1.1]

2.2 Frequency side. Choose $f_k\in\mathcal S$ with $f_k\to f$ in $L^2$, using [F4] and countable choice [F1], and set $g_k=M_{-b}(\tau_{-a}f_k)$. By [F4], $f_k\in L^1\cap L^2$; [F2] shows translation and modulation preserve both spaces and their norms, so $g_k\in L^1\cap L^2$. Translation and modulation preserve $L^2$ distances, hence $g_k\to g$ in $L^2$; Plancherel gives $\mathcal F_2f_k\to\mathcal F_2f$ and $\mathcal F_2g_k\to\mathcal F_2g$. By [F3], for each $k$ the integral transforms satisfy $\widehat g_k(\xi)=e^{2\pi ia\cdot(\xi+b)}\widehat f_k(\xi+b)$, and [F4] identifies these transforms with their Plancherel classes. Translation and multiplication by this unit-modulus phase are isometries on $L^2$ by [F2], so passing to the norm limits proves the Plancherel-class identity $\widehat g(\xi)=e^{2\pi ia\cdot(\xi+b)}\widehat f(\xi+b)$ almost everywhere. First, the affine change of variables $\eta=\xi+b$ gives $$\int|\xi|^2|\widehat g(\xi)|^2d\xi=\int|\eta-b|^2|\widehat f(\eta)|^2d\eta<\infty,$$ so the first moments are absolutely integrable by Cauchy--Schwarz. Using [F5] for representatives, the same substitution now yields $$\int\xi_j|\widehat g(\xi)|^2d\xi=\int(\eta_j-b_j)|\widehat f(\eta)|^2d\eta=\|f\|_2^2b_j-\|f\|_2^2b_j=0,\qquad \int\xi_j^2|\widehat g(\xi)|^2d\xi=\int(\eta_j-b_j)^2|\widehat f(\eta)|^2d\eta .$$ Thus $g$ has finite frequency second moments and mean $0$, $\|\xi_j\widehat g\|_2=\|(\xi_j-b_j)\widehat f\|_2$, and $V_\xi(g)=\|\widehat g\|_2^{-2}\int|\xi|^2|\widehat g|^2=\|\widehat f\|_2^{-2}\int|\eta-b|^2|\widehat f(\eta)|^2d\eta=V_\xi(f)$; Plancherel and the unitary covariance give $\|\widehat g\|_2=\|g\|_2=\|f\|_2=\|\widehat f\|_2$. [F1, F2, F3, F4, F5, given, step 1.1]

3.1 Conclusion. Steps 2.1 and 2.2 give $V_x(g)=V_x(f)$, $V_\xi(g)=V_\xi(f)$ and hence $V_x(g)V_\xi(g)=V_x(f)V_\xi(f)$, and both centred means vanish. [step 2.1, step 2.2] ∎ 
