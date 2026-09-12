---
id: "thm-distributions-supported-at-one-point"
kind: "theorem"
title: "Distributions supported at one point"
deps: ["def-dirac-delta-and-its-derivatives", "thm-compactly-supported-distributions-have-global-finite-order", "def-support-of-a-distribution", "lem-test-function-cutoffs-and-euclidean-localization", "cor-multivariable-taylor-formula-with-peano-remainder"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - url: "https://math.mit.edu/~dyatlov/18.155/155-notes.pdf"
      title: "Semyon Dyatlov, Lecture notes for 18.155 (2022)"
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

For $a\in\Omega$ and $u\in\mathcal D'(\Omega)$, $\operatorname{supp}u\subseteq\{a\}$ if and only if
$$u=\sum_{|\alpha|\le m}c_\alpha\partial^\alpha\delta_a$$
for some finite $m\ge0$ and complex coefficients. The coefficients, with absent higher terms interpreted as zero, are unique. A nonzero such combination has support exactly $\{a\}$; the zero combination has empty support. This holds in ZF.

## Facts & Assumptions

[F1] Dirac derivatives evaluate tests by $\partial^\alpha\delta_a(\varphi)=(-1)^{|\alpha|}\partial^\alpha\varphi(a)$ ([[def-dirac-delta-and-its-derivatives]]).

[F2] Compact support gives one finite-order estimate on a compact neighborhood for every test ([[thm-compactly-supported-distributions-have-global-finite-order]]). Two tests that agree on a neighborhood of the distributional support have equal pairings, and empty support is equivalent to the zero distribution ([[def-support-of-a-distribution]]).

[F3] Smooth compact cutoffs equal to one near a prescribed compact set exist in ZF ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F4] On an open convex neighborhood, the Taylor remainder for a $C^k$ function is $o(|h|^k)$ for $k\ge1$ ([[cor-multivariable-taylor-formula-with-peano-remainder]]). Apply separately to real and imaginary parts; for degree zero use continuity directly.

## Proof

**Given:** $a\in\Omega$ and a distribution $u$.

1.1 Suppose its support is contained in $\{a\}$. Obtain an order $m$ and constant from F2. Take a fixed smooth $\chi$ equal to one near zero with support in a ball $B(0,R)$, using F3 in Euclidean space. For all sufficiently small $\varepsilon>0$, $\chi_\varepsilon(x)=\chi((x-a)/\varepsilon)$ is supported inside $\Omega$ and equals one near $a$. Hence $u(\varphi)=u(\chi_\varepsilon\varphi)$ for every test. [given, F2, F3]

2.1 Suppose $\partial^\gamma\varphi(a)=0$ for every $|\gamma|\le m$. For fixed $\gamma$, Taylor's formula F4 on a ball about $a$ applied to $\partial^\gamma\varphi$ gives $\partial^\gamma\varphi(a+h)=o(|h|^{m-|\gamma|})$; when $|\gamma|=m$ this is continuity with value zero. The little-o bounds are uniform over $|h|\le R\varepsilon$ by their definition: their suprema are $o(\varepsilon^{m-|\gamma|})$. The product rule expands a derivative of order $\beta$, $|\beta|\le m$, of $\chi_\varepsilon\varphi$ into finitely many terms [step 1.1, F2, F4, algebra]
$$\binom\beta\gamma\varepsilon^{-|\beta-\gamma|}(\partial^{\beta-\gamma}\chi)((x-a)/\varepsilon)\partial^\gamma\varphi(x),\qquad\gamma\le\beta.$$
Each has supremum $o(\varepsilon^{m-|\beta|})$, hence tends to zero, even when $|\beta|=m$. All derivatives vanish outside the shrinking support. Thus F2 and step 1.1 give $|u(\varphi)|\le C\max_{|\beta|\le m}\sup|\partial^\beta(\chi_\varepsilon\varphi)|\to0$, so $u(\varphi)=0$. [step 1.1, F2, F4, algebra]

3.1 Take a fixed cutoff $\eta$ equal to one near $a$ and compactly supported in $\Omega$. For $|\alpha|\le m$ put $q_\alpha(x)=\eta(x)(x-a)^\alpha/\alpha!$. Direct monomial differentiation gives $\partial^\beta q_\alpha(a)=1$ for $\beta=\alpha$ and zero for every other $|\beta|\le m$. Therefore $\varphi-\sum_{|\alpha|\le m}\partial^\alpha\varphi(a)q_\alpha$ has zero jet through degree $m$. Step 2.1 makes its pairing zero, giving $u(\varphi)=\sum u(q_\alpha)\partial^\alpha\varphi(a)$. By F1 this is the claimed representation with $c_\alpha=(-1)^{|\alpha|}u(q_\alpha)$. [step 2.1, F1, F3]

4.1 Conversely, every test supported in $\Omega\setminus\{a\}$ has all derivatives zero at $a$, so F1 makes every displayed combination vanish there. Its support is therefore contained in $\{a\}$. Evaluate a zero combination on the tests $q_\alpha$ constructed with the largest order occurring to see each coefficient is zero. This proves uniqueness. Finally a nonzero distribution cannot have empty support by locality (as used in F2), so a nonzero combination has support exactly $\{a\}$. The zero combination is allowed with $m=0,c_0=0$. All jets and sums are finite and no choice is used. $\square$ [step 3.1, F1, F2]
