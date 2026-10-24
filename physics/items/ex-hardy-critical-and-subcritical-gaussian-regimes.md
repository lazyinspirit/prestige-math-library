---
id: ex-hardy-critical-and-subcritical-gaussian-regimes
kind: example
title: Critical, subcritical and supercritical Gaussian regimes for Hardy's theorem
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps:
  - def-countable-choice
  - def-real-power
  - lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization
  - lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp
  - thm-lebesgue-measure-of-a-box-of-every-kind
  - thm-hardy-gaussian-uncertainty-principle
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Aingeru Fernández-Bertolín and Eugenia Malinnikova, Dynamical Versions of Hardy's Uncertainty Principle: A Survey (arXiv:2210.03369)"
      url: "https://arxiv.org/pdf/2210.03369"
      locator: "§§1–2, pp. 1–8; Theorem 1 and the higher-dimensional remark p. 2"
    - title: "Calder Sheagren, Uncertainty Principles with Fourier Analysis (University of Chicago REU 2017, author PDF)"
      url: "https://math.uchicago.edu/~may/REU2017/REUPapers/Sheagren.pdf"
      locator: "§5, Theorem 5.2 and Corollary 5.3, pp. 11–12"
---

## Example

Assume countable choice ([[def-countable-choice]]), as
[[thm-hardy-gaussian-uncertainty-principle]] and the Gaussian-transform
interface do. Let $a,b>0$ and put $C_0:=\max\{1,a^{-n/2}\}$. At the critical
product $ab=1$ the Gaussian
$f(x)=e^{-\pi a|x|^2}$ satisfies the two Hardy bounds
$|f(x)|\le e^{-\pi a|x|^2}$ and
$|\widehat f(\xi)|\le a^{-n/2}e^{-\pi|\xi|^2/a}$ of
[[thm-hardy-gaussian-uncertainty-principle]] with the common constant $C_0$,
and the theorem returns a scalar multiple of the same Gaussian. In the
subcritical regime $ab<1$, every $c$ with $a<c<1/b$ gives the Gaussian
$e^{-\pi c|x|^2}$ satisfying the two bounds with the common constant
$C_c:=\max\{1,c^{-n/2}\}$, so no vanishing conclusion holds
([[lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp]]). In the
supercritical regime $ab>1$ the theorem forces $f=0$, and no Gaussian
satisfies both bounds for any positive constants $C,C'$:
$|e^{-\pi c|x|^2}|\le Ce^{-\pi a|x|^2}$ forces $c\ge a$, while
$|\widehat{f_c}|\le C'e^{-\pi b|\xi|^2}$ forces $c\le1/b$, and $a\le1/b$ is
exactly $ab\le1$.

## Facts & Assumptions

**Given:** Countable choice ([[def-countable-choice]]), an integer $n\ge1$, reals $a,b>0$, the common critical bound $C_0=\max\{1,a^{-n/2}\}$, and for $c>0$ the Gaussian $f_c(x):=e^{-\pi c|x|^2}$ ([[def-real-power]] for real powers).

[F1] Countable choice is assumed; it is the hypothesis carried by the Gaussian transform identity and by the two cited theorems ([[def-countable-choice]]).

[F2] Gaussian transform: for every $t>0$, $f_t=e^{-\pi t|x|^2}$ is absolutely integrable with $L^1$ transform $t^{-n/2}e^{-\pi|\xi|^2/t}$ ([[lem-euclidean-gaussian-fourier-transform-with-two-pi-normalization]]).

[F3] Subcritical sharpness: if $ab<1$, then $(a,1/b)$ is a nonempty open interval and every $c$ with $a<c<1/b$ satisfies $|f_c(x)|\le e^{-\pi a|x|^2}$ and $|\widehat{f_c}(\xi)|\le c^{-n/2}e^{-\pi b|\xi|^2}$ ([[lem-hardy-subcritical-gaussians-show-the-threshold-is-sharp]]).

[F4] Hardy's theorem: if $a,b,C>0$ and a measurable $g$ satisfies $|g(x)|\le Ce^{-\pi a|x|^2}$ almost everywhere and $|\widehat g(\xi)|\le Ce^{-\pi b|\xi|^2}$ everywhere, then $g=0$ almost everywhere when $ab>1$, and $g(x)=g^{\wedge}(0)a^{n/2}e^{-\pi a|x|^2}$ almost everywhere when $ab=1$ ([[thm-hardy-gaussian-uncertainty-principle]]).

[F5] Every unit cube has Lebesgue measure $1$ under Countable Choice ([[thm-lebesgue-measure-of-a-box-of-every-kind]]). Hence a full-measure subset of $\mathbb R^n$ is unbounded: if it were bounded, a unit cube outside a ball containing it would be contained in its null complement, a contradiction.

## Verification

**Proof technique:** direct.

1.1 Critical regime. For $g=f_a$ we have $|g(x)|=e^{-\pi a|x|^2}\le C_0e^{-\pi a|x|^2}$ and, by [F2] with $t=a$, $|\widehat g(\xi)|=a^{-n/2}e^{-\pi|\xi|^2/a}\le C_0e^{-\pi b|\xi|^2}$ since $b=1/a$. Thus $g$ meets both Hardy bounds with one common constant $C_0$. Since $ab=1$, [F4] returns $g(x)=\widehat g(0)a^{n/2}e^{-\pi a|x|^2}$ almost everywhere, with $\widehat g(0)=\int g=a^{-n/2}$; that is the same Gaussian, so the classification is attained, not merely bounded. [F2, F4, given]

1.2 Subcritical regime. Suppose $ab<1$, equivalently $a<1/b$. By [F3] the interval $(a,1/b)$ is nonempty and every $c\in(a,1/b)$ produces a nonzero Gaussian $f_c$ satisfying $|f_c|\le e^{-\pi a|x|^2}$ and $|\widehat{f_c}|\le c^{-n/2}e^{-\pi b|\xi|^2}$. With $C_c=\max\{1,c^{-n/2}\}$ both bounds hold with a single constant, so the Hardy hypotheses admit a nonzero function and no vanishing conclusion can be drawn. [F3, given]

1.3 Supercritical regime. Suppose $ab>1$, equivalently $a>1/b$. If $c>0$ and constants $C,C'>0$ satisfied $e^{-\pi c|x|^2}\le Ce^{-\pi a|x|^2}$ almost everywhere, then $e^{\pi(a-c)|x|^2}\le C$ would hold on a set of full measure, and a set of full measure is unbounded by [F5]; were $c<a$, the left side would tend to $+\infty$ along that unbounded set, which is impossible for a finite constant, so $c\ge a$. Similarly, by [F2], $|\widehat{f_c}(\xi)|=c^{-n/2}e^{-\pi|\xi|^2/c}\le C'e^{-\pi b|\xi|^2}$ for every $\xi$ would give $e^{\pi(b-1/c)|\xi|^2}\le C'c^{n/2}$ for every $\xi$; if $b>1/c$, the left side diverges as $|\xi|\to\infty$, contradicting the finite bound; thus $1/c\ge b$, that is $c\le1/b$. Both requirements together would give $a\le c\le1/b$, hence $ab\le1$, contrary to the hypothesis; so no Gaussian meets the two bounds, and by [F4] the only function satisfying them is $0$ almost everywhere. [F1, F2, F4, F5, given]

2.1 Tabulation. Steps 1.1–1.3 separate the three parameter regions: at $ab=1$ the Gaussian $e^{-\pi a|x|^2}$ is a nonzero solution classified as itself, for $ab<1$ nonzero Gaussian solutions exist with rate $c\in(a,1/b)$, and for $ab>1$ no Gaussian solution exists and every solution vanishes almost everywhere. [step 1.1, step 1.2, step 1.3] ∎
