---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-20.md"
      - "research/frontier-38-owner-30-alpha-batch-20-5a.md"
      - "research/frontier-38-owner-30-step5-hash-20-post-5a.json"
    content_sha256: "a1702ab13b54f7a87e1203c648d78801364af0c6865eebcbda5bfc27b20c065e"
id: lem-poisson-jensen-inequality-hardy-functions
kind: lemma
title: "Poisson-Jensen inequality for Hardy functions"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-nevanlinna-class-on-the-disc, def-countable-choice, def-analytic-hardy-space-disc, thm-nevanlinna-boundary-values-and-log-integrability, lem-hardy-log-integrability-of-boundary-values, def-unit-disc-upper-half-plane-and-blaschke-factor, thm-blaschke-factor-is-a-disc-automorphism, thm-jensen-formula-on-a-disc, thm-fatou-lemma, thm-dominated-convergence, def-poisson-kernel-on-the-disc, lem-poisson-kernel-properties-on-the-disc, def-inner-singular-inner-and-outer-functions, def-poisson-integral-of-finite-boundary-measure, lem-complex-conjugation-and-modulus-laws]
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
[[thm-nevanlinna-boundary-values-and-log-integrability]]; by
[[lem-hardy-log-integrability-of-boundary-values]] one has
$\log|f^*|\in L^1(\mathbb T,m)$. Then for every $z\in\mathbb D$
$$\log|f(z)|\le P[\log|f^*|](z):=\int_{\mathbb T}P(z,\zeta)\,\log|f^*(\zeta)|\,dm(\zeta),$$
with the convention $\log0=-\infty$. In particular $\log|f|$ is majorized on
$\mathbb D$ by the harmonic function $P[\log|f^*|]$, and equality holds for
every $z$ whenever $f$ is outer in the sense of
[[def-inner-singular-inner-and-outer-functions]].

## Facts & Assumptions

**Given:** Countable choice, $0<p\le\infty$, a nonzero $f\in H^p(\mathbb D)$, its boundary function $f^*$ with $\log|f^*|\in L^1(\mathbb T,m)$, a point $z\in\mathbb D$ with $f(z)\ne0$, and radii $R\in(|z|,1)$.

[L1] A nonzero Hardy function lies in N and has finite nonzero nontangential boundary values under countable choice, with $f^*\in L^p$ and $\log|f^*|\in L^1$. In particular radial limits exist almost everywhere. The elementary estimate $\log^+ t\le t^q/q$ holds for every $q>0$. No strong Lp convergence is assumed in this proof. ([[thm-nevanlinna-boundary-values-and-log-integrability]], [[lem-hardy-log-integrability-of-boundary-values]], [[def-analytic-hardy-space-disc]], [[def-nevanlinna-class-on-the-disc]], [[def-countable-choice]])

[L2] $f_R(w):=f(Rw)$ is holomorphic on a neighbourhood of the closed unit disc, and $F(w):=f_R(\varphi_z(w))$ likewise, where $\varphi_z(w)=\frac{z-w}{1-\overline zw}$ is the Blaschke factor; $F(0)=f(Rz)$ and $F$ has finitely many zeros in the open disc ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[thm-blaschke-factor-is-a-disc-automorphism]]).

[L3] Jensen's formula: for $F$ holomorphic on a neighbourhood of the closed unit disc with $F(0)\ne0$, $\log|F(0)|=\frac{1}{2\pi}\int_0^{2\pi}\log|F(e^{i\theta})|\,d\theta-\sum_j\log\frac1{|w_j|}$, the sum over the zeros $w_j$ of $F$ in the open unit disc with multiplicity; if $F$ meets a boundary zero the identity is recovered by limits ([[thm-jensen-formula-on-a-disc]]).

[L4] Change of variables on the circle: $\varphi_z$ maps $\mathbb T$ bijectively onto itself with $|\varphi_z'(\zeta)|=\frac{1-|z|^2}{|1-\overline z\zeta|^2}=P(z,\zeta)$, so $\frac{1}{2\pi}\int_0^{2\pi}G(\varphi_z(e^{i\theta}))\,d\theta=\int_{\mathbb T}G(\zeta)P(z,\zeta)\,dm(\zeta)$ for every integrable $G$ on $\mathbb T$ ([[thm-blaschke-factor-is-a-disc-automorphism]], [[def-poisson-kernel-on-the-disc]], [[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[lem-complex-conjugation-and-modulus-laws]]).

[L5] For an L1 real datum its Poisson integral is harmonic; the Poisson kernel has unit mass and is a bounded positive continuous weight at each fixed interior z. Dominated convergence applies to bounded truncated logarithms, and Fatou's lemma to their nonnegative weighted negative parts. ([[def-poisson-integral-of-finite-boundary-measure]], [[lem-poisson-kernel-properties-on-the-disc]], [[thm-dominated-convergence]], [[thm-fatou-lemma]])

[L6] A holomorphic $f$ is outer exactly when $\log|f(z)|=P[\log|f^*|](z)$ for all $z$ ([[def-inner-singular-inner-and-outer-functions]]).



## Proof

**Proof technique:** direct.

1.1 The Jensen inequality. Assume first $f(z)\ne0$ and take $R<1$ sufficiently close to $1$ that $f(Rz)\ne0$, which follows from continuity and $f(z)\ne0$. By [L2] the function $F(w)=f_R(\varphi_z(w))$ is holomorphic on a neighbourhood of the closed unit disc with $F(0)=f(Rz)\ne0$; applying [L3] and dropping the nonnegative zero terms gives $\log|f(Rz)|\le\frac{1}{2\pi}\int_0^{2\pi}\log|f_R(\varphi_z(e^{i\theta}))|\,d\theta$ (if $F$ has boundary zeros, use the limiting form of [L3]). By the change of variables [L4], the right side equals $$\int_{\mathbb T}\log|f_R(\zeta)|P(z,\zeta)\,dm(\zeta)=\int_{\mathbb T}P(z,\zeta)\log|f(R\zeta)|\,dm(\zeta).$$ [given, L2, L3, L4, algebra]

1.2 The case $f(z)=0$. If $f(z)=0$, then $\log|f(z)|=-\infty\le P[\log|f^*|](z)$ by the convention on $\log0$; the inequality holds trivially. [given, algebra]

1.3 Positive logarithmic parts converge in L1. For finite p set $C=\|f\|_{H^p}^p$, so $\int|f_R|^pdm\le C$ and $\int|f^*|^pdm\le C$ by [L1]. Given $\varepsilon>0$, choose $L>0$ large enough that $\log t\le\varepsilon t^p$ for all $t>e^L$; indeed [L1] with $q=p/2$ gives $\log t/t^p\le(2/p)t^{-p/2}$ for $t\ge1$, and it suffices to take L with $(2/p)e^{-Lp/2}\le\varepsilon$. Writing $u_R=\log^+|f_R|$, $u^*=\log^+|f^*|$, the tails satisfy $$\int(u_R-L)_+dm\le\varepsilon C,\qquad\int(u^*-L)_+dm\le\varepsilon C.$$ The truncated functions $\min(u_R,L)$ converge almost everywhere to $\min(u^*,L)$ and are bounded by L, so [L5] gives L1 convergence by dominated convergence. Therefore $\limsup_{R\uparrow1}\|u_R-u^*\|_1\le2\varepsilon C$, and letting epsilon decrease to zero proves the claim. For p infinity, all positive logarithms are bounded by $\log^+\|f\|_\infty$, so dominated convergence applies directly. These limit statements hold along every sequence tending to one, hence for the stated radial limit. [L1, L5, given, algebra]

2.1 Pass to the Jensen inequality. For f(z) nonzero, let R increase to one in step 1.1. Its left side tends to $\log|f(z)|$. The weight $P(z,\cdot)$ is bounded by [L5], so step 1.3 gives convergence of the weighted positive logarithmic integrals. Fatou's lemma gives $$\int P(z,\zeta)\log^-|f^*(\zeta)|dm\le\liminf_{R\uparrow1}\int P(z,\zeta)\log^-|f(R\zeta)|dm.$$ Subtracting this inequality from the positive-part limit bounds the limsup of the Jensen right side by $P[\log|f^*|](z)$. This quantity is finite by [L1] and the bounded weight, so $\log|f(z)|\le P[\log|f^*|](z)$. Step 1.2 covers zeros of f. Only CC boundary existence and the logarithmic tail estimate were used; no AC Hardy representation is invoked. [step 1.1, step 1.2, step 1.3, L1, L5, algebra]

3.1 Equality for outer functions. If $f$ is outer, then by [L6] the identity $\log|f(z)|=P[\log|f^*|](z)$ holds for every $z$, so equality holds in the Poisson-Jensen inequality; thus the inequality is an identity for all nonzero outer functions. [step 1.1, step 2.1, L6, algebra] ∎
