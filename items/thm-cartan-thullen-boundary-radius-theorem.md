---
id: thm-cartan-thullen-boundary-radius-theorem
kind: theorem
title: "Cartan-Thullen boundary-radius theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-holomorphic-extension-and-domain-of-holomorphy,
       def-holomorphically-convex-hull-and-domain,
       def-polydisc-boundary-radius,
       lem-cauchy-estimates-propagate-to-holomorphic-hulls,
       thm-power-series-expansion-in-several-complex-variables,
       thm-power-series-define-holomorphic-functions-in-several-variables]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Jiří Lebl, Tasty Bits of Several Complex Variables, §2.5"
      url: "https://www.jirka.org/scv/scv.pdf"
    - title: "Harold P. Boas, Lecture Notes on Several Complex Variables, Theorem 5"
      url: "https://haroldpboas.gitlab.io/courses/650-2007c/notes.pdf"
pipeline_run: null
---

## Statement

Let $\Omega\subseteq\mathbb C^m$ be a domain of holomorphy and let
$K\Subset\Omega$ be compact. Then

$$\delta_\Omega(\widehat K_\Omega)=\delta_\Omega(K).$$

## Facts & Assumptions

**Given:** A compact set $K\Subset\Omega$, where $\Omega$ is a domain of
holomorphy.

[L1] A domain of holomorphy is one for which no fixed larger overlap admits
extensions of every holomorphic function
([[def-holomorphic-extension-and-domain-of-holomorphy]]).

[L2] For $0<r<\delta_\Omega(K)$, the derivatives of every holomorphic function
on $\Omega$ satisfy uniform Cauchy bounds on $\widehat K_\Omega$
([[lem-cauchy-estimates-propagate-to-holomorphic-hulls]]).

[L3] A holomorphic function has a power-series expansion on a polydisc, and a
convergent several-variable power series defines a holomorphic function on its
polydisc of convergence
([[thm-power-series-expansion-in-several-complex-variables]],
[[thm-power-series-define-holomorphic-functions-in-several-variables]]).

[L4] The hull contains the original compact set
([[def-holomorphically-convex-hull-and-domain]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], one has $K\subseteq\widehat K_\Omega$, so $\delta_\Omega(\widehat K_\Omega)\le\delta_\Omega(K)$. It remains to prove the reverse inequality. [L4, given]

1.2 Fix $w\in\widehat K_\Omega$ and a number $s$ with $0<s<\delta_\Omega(K)$. For every holomorphic $f$ on $\Omega$, [L2] gives uniform bounds on all derivatives of $f$ at $w$ of the form $$|\partial^\alpha f(w)|\le C_s\,\alpha!\,s^{-(\alpha_1+\cdots+\alpha_m)}$$ for a constant $C_s$ depending on $f$, $K$, and $s$ but not on $\alpha$. By [L3], the Taylor series of $f$ at $w$ therefore converges on the full polydisc $\Delta_s(w)$ and defines a holomorphic function there that agrees with $f$ on some smaller polydisc already contained in $\Omega$. [L2, L3, given]

2.1 If $\Delta_s(w)$ were not contained in $\Omega$, then the smaller overlap from step 1.2 and the larger domain $\Delta_s(w)$ would extend every holomorphic function on $\Omega$, contradicting [L1]. Hence $\Delta_s(w)\subseteq\Omega$, so $\delta_\Omega(w)\ge s$. Since this holds for every $w\in\widehat K_\Omega$ and every $s<\delta_\Omega(K)$, one gets $\delta_\Omega(\widehat K_\Omega)\ge\delta_\Omega(K)$. Together with step 1.1, this proves the equality. [L1, step 1.1, step 1.2] ∎
