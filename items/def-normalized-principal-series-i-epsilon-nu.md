---
id: def-normalized-principal-series-i-epsilon-nu
kind: definition
title: The normalized principal series I(epsilon, nu)
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 1
deps:
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, Definition 2.1 and Remark 2.2, printed pp. 6–8"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, printed pp. 293–295 (the character χδ, the space Hχ and right-translation action)"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 lecture notes, Fall 2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§9.2, printed p. 50 (the right-covariant smooth models V±(s))"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and use the data of
[[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]. For
$\varepsilon\in\{0,1\}$ and $\nu\in\mathbb C$, extend
$\sigma_\varepsilon(m)=(\pm1)^\varepsilon$ on $m=\pm I$ and
$e^\nu(a_t)=e^{\nu t/2}$ to characters of $P=MAN$ that are trivial on the
other factors. The normalized inducing character is
$$\chi_{\varepsilon,\nu}(p)=\delta_P(p)^{1/2}\sigma_\varepsilon(m_p)e^\nu(p)=|\alpha(p)|^{1+\nu}\sigma_\varepsilon(m_p),\qquad p=m_pa_tn_x,$$
where $|\alpha(m_pa_tn_x)|=e^{t/2}$ and $\delta_P$ is the parabolic modular
character of the preceding definition.

The **normalized smooth principal series** $I_{\varepsilon,\nu}$ is the space
of smooth functions $\varphi:G\to\mathbb C$ satisfying
$$\varphi(pg)=\chi_{\varepsilon,\nu}(p)\varphi(g)\qquad(p\in P,\ g\in G),$$
with the right-translation action
$$(\Pi_\nu(g_0)\varphi)(g)=\varphi(gg_0).$$
It preserves covariance since $(\Pi_\nu(g_0)\varphi)(pg)=\varphi(pgg_0)=\chi_{\varepsilon,\nu}(p)\varphi(gg_0)$, and
$(\Pi_\nu(g_1)\Pi_\nu(g_2)\varphi)(g)=\varphi(gg_1g_2)=(\Pi_\nu(g_1g_2)\varphi)(g)$. The inducing character
$\sigma_\varepsilon e^\nu$ is unitary exactly when $\nu\in i\mathbb R$, since
$|\sigma_\varepsilon(m)e^\nu(a_t)|=e^{(\operatorname{Re}\nu)t/2}$ for all $t\in\mathbb R$;
$\delta_P^{1/2}$ is the separate half-modular normalization.

The **$K$-finite subspace** $I^K_{\varepsilon,\nu}$ consists of those
$\varphi$ for which the right $K$-translates span a finite-dimensional space.
It is the associated $(\mathfrak{sl}_2(\mathbb C),K)$-module, but need not be
stable under the full noncompact group $G$; the ambient smooth space above
carries that action. This is Kerr's distinction between the smooth
globalization and its Harish-Chandra module. Under inversion
$F(g)=\varphi(g^{-1})$, write $B=P$ and let $t(b)$ be the signed top-left
diagonal entry of $b\in B$. Then
$$F(gb)=\varphi(b^{-1}g^{-1})=\chi_{\varepsilon,\nu}(b^{-1})F(g)=|t(b)|^{-1-\nu}\operatorname{sgn}(t(b))^\varepsilon F(g).$$
The left action $(g_0\cdot F)(g)=F(g_0^{-1}g)$ corresponds under inversion to
$\Pi_\nu(g_0)$, so this is Etingof's $V^\varepsilon(s)$ model with $s=-\nu$.

The parity-$\varepsilon$ parameter lattice used below is
$$\mathcal W_\varepsilon=\{\nu\in\mathbb Z:\nu\equiv\varepsilon+1\pmod 2\},$$
so $\mathcal W_0$ is the odd integers and $\mathcal W_1$ is the even integers.
AC is inherited through the Iwasawa data and the AC$_\omega$ hypotheses of
its exponential suppliers; this definition makes no additional choice.
