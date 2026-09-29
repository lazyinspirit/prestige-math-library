---
id: lem-weak-derivative-is-independent-of-lp-representatives
kind: lemma
title: Weak differentiation ignores null-set changes
status: draft
origin: pipeline
deps: [def-weak-derivative-of-a-locally-integrable-function, def-l-p-space-as-a-quotient-by-null-functions, thm-the-lebesgue-integral-respects-almost-everywhere-equality, thm-holder-inequality-for-integrals, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, def-countable-choice]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.1
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), §3.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$\alpha\in\mathbb N_0^n$, and let $u,\widetilde u,v,\widetilde v\in
L^1_{\mathrm{loc}}(\Omega)$ satisfy $u=\widetilde u$ and
$v=\widetilde v$ almost everywhere. Then
$$v=D^\alpha u\text{ weakly}\quad\Longleftrightarrow\quad \widetilde v=D^\alpha\widetilde u\text{ weakly}.$$
In particular this applies to representatives of $L^p(\Omega)$ classes for
every $1\le p\le\infty$: on each compact test support, the representatives
are locally integrable.

If $\Omega=\varnothing$, the only classes and tests are zero, so the identity
is vacuous and the equivalence still holds.

## Facts & Assumptions

**Given:** Countable Choice, a compactly supported smooth test $\varphi$, and the four locally integrable functions in the Statement.

[F1] The weak derivative identity is tested against every $\varphi\in C_c^\infty(\Omega)$ and has the signed form in the definition ([[def-weak-derivative-of-a-locally-integrable-function]]).

[F2] An element of $L^p$ is an almost-everywhere equivalence class of measurable representatives ([[def-l-p-space-as-a-quotient-by-null-functions]]).

[F3] Hölder's inequality includes $(p,p')=(1,\infty)$ and $(\infty,1)$, with $\int|fg|\le\|f\|_p\|g\|_{p'}$ ([[thm-holder-inequality-for-integrals]]).

[F4] Countable Choice makes every compact subset of $\mathbb R^n$ have finite Lebesgue measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F5] For integrable functions, equality almost everywhere is equivalent to equality of their integrals over every measurable set ([[thm-the-lebesgue-integral-respects-almost-everywhere-equality]]).

## Proof

**Proof technique:** direct.

1.1 Fix $\varphi\in C_c^\infty(\Omega)$ and put $K=\operatorname{supp}\varphi$. By [F4], $|K|<\infty$. For an $L^p$ representative $f$, [F3] applied to $|f|$ and $\mathbf 1_K$ gives $\int_K|f|<\infty$: for $p<\infty$ use $\|\mathbf 1_K\|_{p'}=|K|^{1/p'}$ (with $p'=\infty$ when $p=1$), and for $p=\infty$ use $\int_K|f|\le\|f\|_\infty|K|$. The derivatives $D^\alpha\varphi$ are bounded and supported in $K$, so all four test integrals in [F1] are finite. [F1, F3, F4, given]

2.1 Since $u=\widetilde u$ almost everywhere, $uD^\alpha\varphi$ and $\widetilde uD^\alpha\varphi$ are equal almost everywhere and integrable by step 1.1. By [F5] their integrals agree. The same argument applied to $v\varphi$ and $\widetilde v\varphi$ gives equal right sides, including the sign $(-1)^{|\alpha|}$. [F1, F5, step 1.1, given]

3.1 Therefore the weak identity for $(u,v)$ holds for this test exactly when the weak identity for $(\widetilde u,\widetilde v)$ does. The test was arbitrary, proving both directions. By [F2] this is precisely independence from the representatives of $L^p$ classes. [F1, F2, step 2.1] ∎
