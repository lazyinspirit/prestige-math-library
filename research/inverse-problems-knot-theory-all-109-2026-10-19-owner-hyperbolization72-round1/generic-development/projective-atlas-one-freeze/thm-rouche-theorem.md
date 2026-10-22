---
id: thm-rouche-theorem
kind: theorem
title: "Rouche's theorem in the classical strict-inequality form"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-argument-principle-as-image-winding-number,
       cor-argument-principle-counts-preimages,
       thm-contour-parameter-integrals-are-holomorphic,
       thm-winding-number-is-integer,
       cor-holomorphic-functions-are-real-analytic-and-smooth,
       thm-zero-complex-derivative-on-a-domain-implies-constant]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/numerical-optimization-dynamics-2026-10-16-owner-step2-preclaimed-published-receipts-ROOT-1035/thm-rouche-theorem.repair.json
sources:
  scraped: []
  references:
    - title: "R. W. Howell and J. H. Mathews, Complex Analysis, §8.7, Theorem 8.7.11"
      url: "https://complexanalysis.org/web/sec_argument-rouche.html"
    - title: "J. Lebl, Guide to Cultivating Complex Analysis, §5.4, Theorem 5.4.6"
      url: "https://www.jirka.org/ca/ca.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C$ be open, let $\gamma$ be a closed complex contour
that is null-homologous in $\Omega$, and let $f,g$ be holomorphic on
$\Omega$. If

$$|f(z)-g(z)|<|g(z)|\qquad(z\in\gamma^\ast),$$

then $f$ and $g$ have the same weighted number of zeros with respect to
$\gamma$.

In particular, if $\gamma$ is the positively oriented boundary of a Jordan
domain, then $f$ and $g$ have the same number of zeros inside $\gamma$, counted
with multiplicity.

## Facts & Assumptions

**Given:** An open set $\Omega$, a closed complex contour $\gamma$ that is null-homologous in $\Omega$, and holomorphic functions $f,g$ on $\Omega$ satisfying $|f-g|<|g|$ on $\gamma^\ast$.

[L1] For a closed contour on which a meromorphic function does not vanish, the integral of $f'/f$ is the winding number of the image contour about $0$ ([[thm-argument-principle-as-image-winding-number]]).

[L2] The argument principle at $w=0$ counts zeros of a holomorphic function with multiplicity and no pole term ([[cor-argument-principle-counts-preimages]]).

[L3] If $\varphi(\zeta,t)$ is continuous in $(\zeta,t)$ and holomorphic in the complex parameter $t$, then $\int_\gamma \varphi(\zeta,t)\,d\zeta$ is holomorphic in $t$ ([[thm-contour-parameter-integrals-are-holomorphic]]).

[L4] A winding number is an integer ([[thm-winding-number-is-integer]]).

[L5] A holomorphic function has smooth real coordinate functions, so it and the real partial derivatives giving its complex derivative are continuous ([[cor-holomorphic-functions-are-real-analytic-and-smooth]]).

[L6] A holomorphic function whose derivative is zero on a nonempty connected open set is constant there ([[thm-zero-complex-derivative-on-a-domain-implies-constant]]).

## Proof

**Proof technique:** direct.

1.1 Because $\gamma^\ast$ is compact and $|f-g|<|g|$ there, the ratio $|f-g|/|g|$ has a maximum $q<1$ on $\gamma^\ast$. Choose $\varepsilon>0$ with $(1+\varepsilon)q<1$. Then for every complex $t$ with $|t|<1+\varepsilon$ and every $z\in\gamma^\ast$, $$|g(z)+t(f(z)-g(z))-g(z)|=|t|\,|f(z)-g(z)|\le(1+\varepsilon)q\,|g(z)|<|g(z)|,$$ so $$h_t(z):=g(z)+t(f(z)-g(z))$$ never vanishes on $\gamma^\ast$. [given, choose, algebra]

2.1 For fixed $z$, the function $$\varphi_z(t):=\frac{h_t'(z)}{h_t(z)}=\frac{g'(z)+t(f'(z)-g'(z))}{g(z)+t(f(z)-g(z))}$$ is holomorphic on the disc $|t|<1+\varepsilon$ by step 1.1. The numerator and denominator are jointly continuous in $(z,t)$ on the contour trace times that disc: [L5] supplies continuity of $f,g,f',g'$, and step 1.1 makes the denominator nonzero. Therefore $$J(t):=\frac{1}{2\pi i}\int_\gamma \frac{h_t'(z)}{h_t(z)}\,dz$$ is holomorphic there by [L3]. For every complex $t$ in this disc, $h_t$ is holomorphic in $z$ and nonzero on the contour by step 1.1, so [L1] gives $J(t)=n(h_t\circ\gamma,0)$, and [L4] makes that an integer. By [L5], $J$ is continuous. At any $t_0$ in the disc, continuity supplies a neighbourhood where $|J(t)-J(t_0)|<1$; two distinct integers differ in modulus by at least $1$, so $J(t)=J(t_0)$ there. Thus $J$ is locally constant and $J\prime(t_0)=0$. The disc is a nonempty connected open set (indeed convex), so [L6] makes $J$ constant on the entire disc. [step 1.1, L1, L3, L4, L5, L6, algebra]

3.1 Since $h_0=g$ and $h_1=f$, step 2.1 gives $$\frac{1}{2\pi i}\int_\gamma \frac{g'(z)}{g(z)}\,dz=\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\,dz.$$ Applying [L2] to both sides shows that $f$ and $g$ have the same weighted zero count with respect to $\gamma$. [step 2.1, L2] ∎
