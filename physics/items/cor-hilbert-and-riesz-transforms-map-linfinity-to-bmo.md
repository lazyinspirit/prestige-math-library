---
id: cor-hilbert-and-riesz-transforms-map-linfinity-to-bmo
kind: corollary
title: "The Hilbert and Riesz transforms map L-infinity to BMO"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [thm-calderon-zygmund-operators-map-linfinity-to-bmo, lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators, def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "Proposition 7.7 (SIO mapping property), printed p. 32"
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "Proposition 3.4, printed p. 12"
---

## Statement

Assume Countable Choice. The Hilbert transform $H$ on $\mathbb R$ and the Riesz
transforms $R_1,\dots,R_n$ on $\mathbb R^n$ extend to bounded maps
 $L^\infty(\mathbb R^d)\to\mathrm{BMO}(\mathbb R^d)/\mathbb C$,
where $d=1$ for $T=H$ and $d=n$ for $T=R_j$: for every
$b\in L^\infty(\mathbb R^d)$ the
class of $Tb$ is well defined modulo constants, agrees with the $L^2$ action of
$T$ when $b\in L^2$, and satisfies $\|Tb\|_{\mathrm{BMO}}\le C_d\|b\|_{L^\infty}$
with a dimensional constant.

## Facts & Assumptions

**Given:** Countable Choice, the Hilbert transform $H$ and the Riesz transforms $R_1,\dots,R_n$, and a bounded function $b\in L^\infty(\mathbb R^d)$, with $d=1$ for $H$ and $d=n$ for $R_j$.

[F1] The Hilbert transform and each Riesz transform are Calderon-Zygmund operators whose kernels are standard $1$-Holder, with $L^2$ operator norm at most $1$; the Hilbert transform is the case $n=1$ with kernel $1/(\pi x)$ and the Riesz transforms have kernels $c_nx_j/|x|^{n+1}$ ([[lem-hilbert-and-riesz-transforms-are-calderon-zygmund-operators]]).

[F2] Every Calderon-Zygmund operator with a standard $\delta$-Holder kernel and $L^2$ norm at most $1$ maps $L^\infty$ into $\mathrm{BMO}(\mathbb R^n)/\mathbb C$: the class of $Tb$ is well defined modulo constants, agrees with the $L^2$ action when $b\in L^2$, and has $\|Tb\|_{\mathrm{BMO}}\le C_{n,\delta}(A_2'+1)\|b\|_{L^\infty}$ ([[thm-calderon-zygmund-operators-map-linfinity-to-bmo]]).

## Proof

**Proof technique:** direct.

1.1 The hypotheses of [F2] are satisfied with $\delta=1$: [F1] supplies the Calderon-Zygmund operator, the standard $1$-Holder kernel with its constant, and the $L^2$ bound by $1$; for the Hilbert transform this is the case $n=1$ and for each Riesz transform the case of the corresponding kernel $c_nx_j/|x|^{n+1}$. [F1]

2.1 Applying [F2] to the Hilbert transform and to each Riesz transform gives, for every $b\in L^\infty(\mathbb R^d)$ in the corresponding dimension, a well-defined class $Tb$ modulo constants with $\|Tb\|_{\mathrm{BMO}}\le C_{d,1}(A_2'+1)\|b\|_{L^\infty}$, and when $b\in L^2$ that class is the class of the $L^2$ function $Tb$; the constants $A_2'$ and hence $C_{d,1}(A_2'+1)$ depend only on $d$. [step 1.1, F2]

3.1 The assertions of the statement are exactly those of step 2.1 for $T=H$ and $T=R_j$, with $C_d:=C_{d,1}(A_2'+1)$. Countable Choice is inherited from both [F1] and [F2], including the endpoint gluing and $L^2$ consistency argument. [step 2.1] ∎ 