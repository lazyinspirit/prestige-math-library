---
id: thm-rouche-theorem
kind: theorem
title: "Rouche's theorem in the classical strict-inequality form"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-argument-principle-as-image-winding-number,
       cor-argument-principle-counts-preimages,
       thm-contour-parameter-integrals-are-holomorphic,
       thm-winding-number-is-integer]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
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

**Given:** An open set $\Omega$, a closed complex contour $\gamma$ that is
null-homologous in $\Omega$, and holomorphic functions $f,g$ on $\Omega$
satisfying $|f-g|<|g|$ on $\gamma^\ast$.

[L1] For a closed contour on which a meromorphic function does not vanish, the
integral of $f'/f$ is the winding number of the image contour about $0$
([[thm-argument-principle-as-image-winding-number]]).

[L2] The argument principle at $w=0$ counts zeros of a holomorphic function with
multiplicity and no pole term ([[cor-argument-principle-counts-preimages]]).

[L3] If $\varphi(\zeta,t)$ is continuous in $(\zeta,t)$ and holomorphic in the
complex parameter $t$, then $\int_\gamma \varphi(\zeta,t)\,d\zeta$ is
holomorphic in $t$ ([[thm-contour-parameter-integrals-are-holomorphic]]).

[L4] A winding number is an integer ([[thm-winding-number-is-integer]]).

## Proof

**Proof technique:** direct.

1.1 Because $\gamma^\ast$ is compact and $|f-g|<|g|$ there, the ratio $|f-g|/|g|$ has a maximum $q<1$ on $\gamma^\ast$. Choose $\varepsilon>0$ with $(1+\varepsilon)q<1$. Then for every complex $t$ with $|t|<1+\varepsilon$ and every $z\in\gamma^\ast$, $$|g(z)+t(f(z)-g(z))-g(z)|\le |t|\,|f(z)-g(z)|<(1+\varepsilon)q\,|g(z)|<|g(z)|,$$ so $$h_t(z):=g(z)+t(f(z)-g(z))$$ never vanishes on $\gamma^\ast$. [given, choose, algebra]

2.1 For fixed $z$, the function $$\varphi_z(t):=\frac{h_t'(z)}{h_t(z)}=\frac{g'(z)+t(f'(z)-g'(z))}{g(z)+t(f(z)-g(z))}$$ is holomorphic on the disc $|t|<1+\varepsilon$ by step 1.1. Therefore $$J(t):=\frac{1}{2\pi i}\int_\gamma \frac{h_t'(z)}{h_t(z)}\,dz$$ is holomorphic there by [L3]. For real $t\in[0,1]$, step 1.1 and [L1] give $J(t)=n(h_t\circ\gamma,0)$, and [L4] makes that an integer. Hence $J$ is an integer-valued holomorphic function on a connected open disc, so it is constant. [step 1.1, L1, L3, L4]

3.1 Since $h_0=g$ and $h_1=f$, step 2.1 gives $$\frac{1}{2\pi i}\int_\gamma \frac{g'(z)}{g(z)}\,dz=\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\,dz.$$ Applying [L2] to both sides shows that $f$ and $g$ have the same weighted zero count with respect to $\gamma$. [step 2.1, L2] ∎
