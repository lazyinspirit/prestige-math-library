---
id: thm-sobolev-poincare-on-bounded-connected-extension-domains
kind: theorem
title: "Sobolev-Poincare on bounded connected extension domains"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 3
deps: [def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-sobolev-conjugate-exponent, def-sobolev-space-wkp-and-its-norm, def-sobolev-extension-domain-and-extension-operator, def-l-p-space-as-a-quotient-by-null-functions, lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n, lem-weak-derivative-linearity-locality-and-commutation, thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n, thm-holder-inequality-for-integrals]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.47, printed pp. 90–91 (PDF pp. 93–94), read in full; real statement extended componentwise to complex scalar classes."
---

## Statement

Assume the Axiom of Choice (and hence Countable Choice and Dependent Choice). Let $n\ge2$, $1<p<n$, $p^{*}=\frac{np}{n-p}$, let $\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $\Omega\subset\mathbb R^n$ be a nonempty bounded connected $W^{1,p}$-extension domain. There is $C=C(n,p,\Omega,\mathbb K)$ such that every $u\in W^{1,p}(\Omega;\mathbb K)$ satisfies
$$\|u-u_\Omega\|_{L^{p^{*}}(\Omega)}\le C\|Du\|_{L^p(\Omega)},\qquad u_\Omega=|\Omega|^{-1}\int_\Omega u .$$
The domain constant is not uniform over arbitrary extension domains.

## Facts & Assumptions

**Given:** The Axiom of Choice, hence Countable Choice and Dependent Choice; $n\ge2$; $1<p<n$; a nonempty bounded connected $W^{1,p}$-extension domain $\Omega$ ([[def-sobolev-extension-domain-and-extension-operator]]); a field $\mathbb K$; and a class $u\in W^{1,p}(\Omega;\mathbb K)$.

[F1] The local mean-zero estimate on bounded connected extension domains: there is $C_P=C_P(n,p,\Omega,\mathbb K)$ with $\|w-w_\Omega\|_{L^p(\Omega)}\le C_P\|Dw\|_{L^p(\Omega)}$ for every $w\in W^{1,p}(\Omega;\mathbb K)$ ([[lem-mean-zero-poincare-estimate-on-bounded-connected-extension-domains-for-p-less-than-n]]).

[F2] Constants have zero weak derivative and weak derivatives are linear, so $D(w-c)=Dw$ ([[lem-weak-derivative-linearity-locality-and-commutation]]); $W^{1,p}$ consists of $L^p$ classes with weak gradient in $L^p$ ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] The extension-domain embedding: for $1\le p<n$ and $p\le q\le p^{*}$, $\|w\|_{L^q(\Omega)}\le C_E(n,p,q,\Omega)\|w\|_{W^{1,p}(\Omega)}$ ([[thm-sobolev-embedding-on-bounded-extension-domains-for-p-less-than-n]], [[def-sobolev-conjugate-exponent]]).

[F4] On the finite measure set $\Omega$, Holder's inequality gives $w\in L^1(\Omega)$ for every $w\in L^p(\Omega)$ with $\|w\|_1\le|\Omega|^{1-1/p}\|w\|_p$, so the mean $u_\Omega$ is defined ([[thm-holder-inequality-for-integrals]]).

## Proof

**Proof technique:** direct.

1.1 Centering and the local estimate. By [F4] the mean $u_\Omega$ is a well-defined scalar; put $v:=u-u_\Omega$. By [F2], $v\in W^{1,p}(\Omega;\mathbb K)$ with $Dv=Du$ and $v_\Omega=0$, and by [F1] applied to $v$, $\|v\|_{L^p(\Omega)}\le C_P\|Du\|_{L^p(\Omega)}$. [F1, F2, F4, given, algebra]

2.1 The critical exponent. Apply the extension-domain embedding [F3] to $v$ with $q=p^{*}$: $\|v\|_{L^{p^{*}}(\Omega)}\le C_E\|v\|_{W^{1,p}(\Omega)}$; since $\|v\|_{W^{1,p}(\Omega)}$ is, up to a dimension-only factor, $\|v\|_{L^p(\Omega)}+\|Dv\|_{L^p(\Omega)}\le(1+C_P)\|Du\|_{L^p(\Omega)}$ by step 1.1, renaming the product constant gives $\|u-u_\Omega\|_{L^{p^{*}}(\Omega)}\le C(n,p,\Omega,\mathbb K)\|Du\|_{L^p(\Omega)}$, which is the asserted inequality. [F3, step 1.1, given, algebra] ∎

## Source notes

Kinnunen's Theorem 3.47 is the mean-zero $L^{p^*}$ estimate, whose proof first establishes the mean-zero $L^p$ estimate on bounded connected extension domains, proved there by Rellich compactness; the local item cited as [F1] supplies it directly with the extension-cutoff-mollification and Arzela-Ascoli argument on this page. The step from the $L^p$ mean-zero estimate to the critical exponent is the extension-domain embedding, exactly as Kinnunen combines Theorem 3.47 with the Sobolev embedding. The constant depends on the extension operator through $C_E$; no uniformity over all extension domains is claimed, matching the statement.
