---
id: "cex-pointwise-convergent-functions-need-not-converge-as-distributions-without-local-control"
kind: "counterexample"
title: "Pointwise convergent functions need not converge as distributions without local control"
deps: ["def-regular-distribution-from-a-locally-integrable-function", "thm-locally-integrable-functions-embed-in-distributions", "def-dirac-delta-and-its-derivatives", "def-mollifier-family-generated-by-a-unit-mass-smooth-bump", "lem-test-function-cutoffs-and-euclidean-localization", "cor-change-of-variables-for-compactly-supported-functions", "lem-riemann-lebesgue-comparison-for-distribution-test-integrands", "def-countable-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement refuted

Pointwise convergence of smooth functions forces convergence of their regular distributions to the regular distribution of the pointwise limit. Assume Countable Choice for Lebesgue integration. Let $\rho\ge0$ be a smooth unit-mass bump supported in $(-1/2,1/2)$, set $f_0=0$, and set $f_j(x)=j\rho(jx-2)$ for integers $j\ge1$. Then $f_j(x)\to0$ for every $x\in\mathbb R$, but $u_{f_j}\to\delta_0$ weakly, so $u_{f_j}\not\to0$.

## Facts & Assumptions

[F1] Under Countable Choice, locally integrable functions, hence smooth functions, define regular distributions; Dirac acts by evaluation ([[def-regular-distribution-from-a-locally-integrable-function]], [[thm-locally-integrable-functions-embed-in-distributions]], [[def-dirac-delta-and-its-derivatives]]).

[F2] Compact nonnegative smooth bumps exist and may be rescaled and normalized to unit mass ([[lem-test-function-cutoffs-and-euclidean-localization]], [[def-mollifier-family-generated-by-a-unit-mass-smooth-bump]]).

[F3] Affine substitution holds for compact smooth integrands, and their componentwise Riemann and Lebesgue integrals agree under Countable Choice ([[cor-change-of-variables-for-compactly-supported-functions]], [[lem-riemann-lebesgue-comparison-for-distribution-test-integrands]], [[def-countable-choice]]).

## Proof

**Given:** the fixed bump and its stated rescalings.

1.1 F2 supplies the bump by taking a nonzero nonnegative test with the required support and dividing by its positive finite integral. For $j\ge1$, the support of $f_j$ lies in $(3/(2j),5/(2j))$. Thus $f_j(x)=0$ for every $j\in\mathbb N$ when $x\le0$, and for each fixed $x>0$ it is zero once $j>5/(2x)$. In particular the pointwise limit is zero even at the origin. Each $f_j$, including $f_0$, is smooth and compactly supported, so F1 applies. [given, F1, F2]

2.1 For every test $\varphi$ and every $j\ge1$, the substitution $t=jx-2$ from F3 gives $u_{f_j}(\varphi)=\int\rho(t)\varphi((t+2)/j)\,dt$. Since $|t+2|\le5/2$ on the bump support, [step 1.1, F1, F3]
$$|u_{f_j}(\varphi)-\varphi(0)|\le\sup_{|s|\le5/(2j)}|\varphi(s)-\varphi(0)|\longrightarrow0.$$
Here positivity and unit mass give the inequality, and continuity at zero gives the limit. Thus the weak limit is $\delta_0$. Choose a cutoff test equal to one near zero by F2; its pairings are eventually one, whereas the zero regular distribution pairs to zero. This is the failed conclusion for the explicit witness sequence. Its mass is one for every $j$, concentrated in a shrinking interval; pointwise convergence alone does not control these pairings. $\square$ [step 1.1, F1, F2, F3]
