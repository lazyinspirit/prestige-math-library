---
id: lem-poisson-jensen-inequality-hardy-functions
kind: lemma
title: "Poisson-Jensen inequality for Hardy functions"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-analytic-hardy-space-disc, thm-fatou-boundary-theorem-analytic-hardy-spaces, lem-hardy-log-integrability-of-boundary-values, def-unit-disc-upper-half-plane-and-blaschke-factor, thm-blaschke-factor-is-a-disc-automorphism, thm-jensen-formula-on-a-disc, thm-fatou-lemma, thm-dominated-convergence, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, thm-poisson-representation-for-disc-harmonic-functions, def-inner-singular-inner-and-outer-functions, def-poisson-integral-of-finite-boundary-measure, lem-complex-conjugation-and-modulus-laws]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. B. Garnett, Bounded Analytic Functions, revised first edition, Chapter II §6, (6.1)"
      url: "https://dokumen.pub/bounded-analytic-functions-0387336214-9780387336213.html"
      locator: "printed p. 72: the Poisson-Jensen inequality $\\log|f(z)|\\le\\int P(z,\\zeta)\\log|f^*(\\zeta)|dm(\\zeta)$ for $H^p$ functions, with equality for outer functions."
    - title: "R. K. Srivastava, Lecture Notes on Hardy Spaces (MA650, IIT Guwahati), §5.6"
      url: "https://fac.iitg.ac.in/rksri/MA650%20Advanced%20Hardy%20Spaces%20Notes.pdf"
      locator: "Jensen's inequality and Jensen's formula, printed pp. 32-34: the Poisson-Jensen inequality for $H^p$ functions."
---

## Statement

Let $0<p\le\infty$ and $f\in H^p(\mathbb D)$ with $f\not\equiv0$, with boundary
function $f^*\in L^p$ as in
[[thm-fatou-boundary-theorem-analytic-hardy-spaces]]; by
[[lem-hardy-log-integrability-of-boundary-values]] one has
$\log|f^*|\in L^1(\mathbb T,m)$. Then for every $z\in\mathbb D$
$$\log|f(z)|\le P[\log|f^*|](z):=\int_{\mathbb T}P(z,\zeta)\,\log|f^*(\zeta)|\,dm(\zeta),$$
with the convention $\log0=-\infty$. In particular $\log|f|$ is majorized on
$\mathbb D$ by the harmonic function $P[\log|f^*|]$, and equality holds for
every $z$ whenever $f$ is outer in the sense of
[[def-inner-singular-inner-and-outer-functions]].

## Facts & Assumptions

**Given:** $0<p\le\infty$, a nonzero $f\in H^p(\mathbb D)$, its boundary function $f^*$ with $\log|f^*|\in L^1(\mathbb T,m)$, a point $z\in\mathbb D$ with $f(z)\ne0$, and radii $R\in(|z|,1)$.

[L1] Fatou's boundary theorem and log-integrability: $f_r\to f^*$ $m$-almost everywhere and (for $p<\infty$) in $L^p$; $\log|f^*|\in L^1$; and the family $\log^+|f_r|$ converges to $\log^+|f^*|$ in $L^1$ while Fatou's lemma applies to $\log^-|f_r|$ ([[thm-fatou-boundary-theorem-analytic-hardy-spaces]], [[lem-hardy-log-integrability-of-boundary-values]], [[thm-fatou-lemma]]).

[L2] $f_R(w):=f(Rw)$ is holomorphic on a neighbourhood of the closed unit disc, and $F(w):=f_R(\varphi_z(w))$ likewise, where $\varphi_z(w)=\frac{z-w}{1-\overline zw}$ is the Blaschke factor; $F(0)=f(Rz)$ and $F$ has finitely many zeros in the open disc ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-blaschke-factor-is-a-disc-automorphism]]).

[L3] Jensen's formula: for $F$ holomorphic on a neighbourhood of the closed unit disc with $F(0)\ne0$, $\log|F(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|F(e^{i\theta})|\,d\theta-\sum_j\log\frac1{|w_j|}$, the sum over the zeros $w_j$ of $F$ in the open unit disc with multiplicity; if $F$ meets a boundary zero the identity is recovered by limits ([[thm-jensen-formula-on-a-disc]]).

[L4] Change of variables on the circle: $\varphi_z$ maps $\mathbb T$ bijectively onto itself with $|\varphi_z'(\zeta)|=\frac{1-|z|^2}{|1-\overline z\zeta|^2}=P(z,\zeta)$, so $\frac{1}{2\pi}\int_0^{2\pi}G(\varphi_z(e^{i\theta}))\,d\theta=\int_{\mathbb T}G(\zeta)P(z,\zeta)\,dm(\zeta)$ for every integrable $G$ on $\mathbb T$ ([[thm-blaschke-factor-is-a-disc-automorphism]], [[def-poisson-kernel-on-the-disc]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[lem-complex-conjugation-and-modulus-laws]]).

[L5] The Poisson integral $P[\log|f^*|]$ is harmonic, $\int_{\mathbb T}P(z,\zeta)dm(\zeta)=1$, and $P(z,\cdot)$ is bounded on $\mathbb T$ for fixed $z$; domination by the bounded weight upgrades the a.e. convergence of the logarithms to convergence of the weighted integrals ([[thm-poisson-representation-for-disc-harmonic-functions]], [[lem-poisson-kernel-properties-on-the-disc]], [[thm-dominated-convergence]], [[def-poisson-integral-of-finite-boundary-measure]]).

[L6] A holomorphic $f$ is outer exactly when $\log|f(z)|=P[\log|f^*|](z)$ for all $z$ ([[def-inner-singular-inner-and-outer-functions]]).



## Proof

**Proof technique:** direct.

1.1 The Jensen inequality. Assume first $f(z)\ne0$ and fix $R\in(|z|,1)$. By [L2] the function $F(w)=f_R(\varphi_z(w))$ is holomorphic on a neighbourhood of the closed unit disc with $F(0)=f(Rz)\ne0$; applying [L3] and dropping the nonnegative zero terms gives $\log|f(Rz)|\le\frac{1}{2\pi}\int_0^{2\pi}\log|f_R(\varphi_z(e^{i\theta}))|\,d\theta$ (if $F$ has boundary zeros, use the limiting form of [L3]). By the change of variables [L4], the right side equals $$\int_{\mathbb T}\log|f_R(\zeta)|P(z,\zeta)\,dm(\zeta)=\int_{\mathbb T}P(z,\zeta)\log|f(R\zeta)|\,dm(\zeta).$$ [given, L2, L3, L4, algebra]

1.2 The case $f(z)=0$. If $f(z)=0$, then $\log|f(z)|=-\infty\le P[\log|f^*|](z)$ by the convention on $\log0$; the inequality holds trivially. [given, algebra]

2.1 Passing to the limit. Let $R\uparrow1$ in the inequality of step 1.1. The left side tends to $\log|f(z)|$ by continuity of $f$ at $z$. For the right side, $\log|f(R\zeta)|\to\log|f^*(\zeta)|$ for $m$-almost every $\zeta$ by [L1], and the weighted integrals converge: writing $\log|f_R|=\log^+|f_R|-\log^-|f_R|$, the positive parts converge in $L^1$ to $\log^+|f^*|$ by [L1], while Fatou's lemma for the nonnegative weighted functions $P(z,\zeta)\log^-|f(R\zeta)|$ gives $\int P\log^-|f^*|dm\le\liminf_R\int P\log^-|f_R|dm$; hence the limit superior of the right side equals $\int P\log^+|f^*|dm-\liminf_R\int P\log^-|f_R|dm\le\int P\log^+|f^*|dm-\int P\log^-|f^*|dm=P[\log|f^*|](z)$, which is finite because $\log|f^*|\in L^1$ by [L1] and $P(z,\cdot)$ is bounded by [L5]. Therefore $\log|f(z)|\le P[\log|f^*|](z)$. [step 1.1, L1, L5, algebra]

3.1 Equality for outer functions. If $f$ is outer, then by [L6] the identity $\log|f(z)|=P[\log|f^*|](z)$ holds for every $z$, so equality holds in the Poisson-Jensen inequality; in particular the inequality is an identity for all nonzero outer functions, while for general $f\in H^p$ the zero terms dropped in step 1.1 measure the defect. [step 1.1, step 2.1, L6, algebra] ∎
