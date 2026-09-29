---
id: lem-acl-representatives-reconstruct-weak-gradients-by-fubini
kind: lemma
title: ACL representatives recover their weak gradients by Fubini
status: draft
origin: pipeline
deps: [def-absolute-continuity-on-almost-every-coordinate-line, def-weak-derivative-of-a-locally-integrable-function, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-integration-by-parts-for-absolutely-continuous-functions, thm-tonelli-and-fubini-for-completed-product-measures, thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures, lem-test-function-cutoffs-and-euclidean-localization, thm-complex-holder-minkowski-and-the-quotient-norm, prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets, lem-ac-supplies-countable-and-dependent-choice-for-banach-integration, def-axiom-of-choice]
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
  references:
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 2 §2.6
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
      locator: Theorem 2.36, converse proof, printed p. 59 (PDF pp. 60–61)
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), Chapter 3 §3.5
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Definition 3.23 and weak derivative convention, printed p. 59 (PDF p. 63)
---

## Sources

- Juha Kinnunen, *Sobolev Spaces*, Chapter 2 §2.6, Theorem 2.36, converse
  proof, printed p. 59 (PDF pp. 60–61). On almost every coordinate line the
  source applies one-dimensional integration by parts and then Fubini to get
  the weak derivative identity. Here the argument is written on coordinate
  boxes, with the completion and endpoint hypotheses made explicit.
- John K. Hunter, *Notes on Partial Differential Equations*, Chapter 3 §3.5,
  Definition 3.23, printed p. 59 (PDF p. 63), for the function and weak
  derivative conventions used by the Sobolev interface.

## Statement

Assume the Axiom of Choice. Let $\Omega\subseteq\mathbb R^n$ be open,
$n\ge1$, $1\le p\le\infty$, and $\mathbb K\in\{\mathbb R,\mathbb C\}$.
Let $u\in L^p_{\mathrm{loc}}(\Omega;\mathbb K)$ have one measurable ACL
representative $u^*$, and suppose measurable functions
$g_i\in L^p_{\mathrm{loc}}(\Omega;\mathbb K)$, $1\le i\le n$, satisfy the
following: on almost every line parallel to the $i$th coordinate axis, the
one-dimensional derivative of the ACL section of $u^*$ exists and equals the
section of $g_i$ almost everywhere. Then $g_i$ is the weak derivative
$D_i u$ for every $i$, that is,
$$\int_\Omega u\,\partial_i\varphi\,dx=-\int_\Omega g_i\varphi\,dx\qquad(\varphi\in C_c^\infty(\Omega)).$$
The integrals are bilinear, without conjugation. If $\Omega=\varnothing$,
the assertion is vacuous.

The Axiom of Choice is used only to invoke the cited Countable Choice and
Dependent Choice interfaces for completed-product Fubini and one-dimensional
absolute-continuity integration by parts; no representative is selected in
the proof.

## Facts & Assumptions

**Given:** AC, an open $\Omega\subseteq\mathbb R^n$, $n\ge1$, $1\le p\le\infty$,
the a.e. class $u$, one ACL representative $u^*$, and its measurable local
$L^p$ line derivatives $g_i$ as in the Statement.

[F1] An ACL representative is absolutely continuous on compact subintervals of almost every coordinate line in each rational coordinate box ([[def-absolute-continuity-on-almost-every-coordinate-line]]).

[F2] For absolutely continuous real functions $F,G$ on $[a,b]$,
$$\int_a^b FG'+\int_a^b F'G=F(b)G(b)-F(a)G(a).$$
The complex-valued version follows by applying this real identity to real and imaginary parts ([[thm-integration-by-parts-for-absolutely-continuous-functions]]).

[F3] If $f$ is integrable for the completed product of sigma-finite measures, its sections are integrable almost everywhere and the iterated integrals equal its product integral ([[thm-tonelli-and-fubini-for-completed-product-measures]]).

[F4] For positive integers $m,n$, Euclidean Lebesgue measure on $\mathbb R^{m+n}$ is the completion of the product of the factor Lebesgue measures ([[thm-euclidean-lebesgue-measure-is-the-completion-of-the-product-of-lebesgue-measures]]).

[F5] Every open cover of $\Omega$ has a locally finite smooth partition of unity with compact supports subordinate to its members ([[lem-test-function-cutoffs-and-euclidean-localization]]).

[F6] Complex Hölder gives $\int|fg|\le\|f\|_p\|g\|_{p'}$ for conjugate exponents including $(1,\infty)$ and $(\infty,1)$ ([[thm-complex-holder-minkowski-and-the-quotient-norm]]).

[F7] Every bounded Lebesgue-measurable subset of $\mathbb R^n$ has finite measure ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F8] AC supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]), and the cited consequence supplies Countable Choice and prescribed-start Dependent Choice ([[lem-ac-supplies-countable-and-dependent-choice-for-banach-integration]]).

[F9] The weak derivative identity is the signed test-function identity for every $\varphi\in C_c^\infty(\Omega)$ ([[def-weak-derivative-of-a-locally-integrable-function]]).

## Proof

**Proof technique:** Fubini applied to one-dimensional integration by parts.

1.1 If $\Omega=\varnothing$ or $\varphi=0$, the identity holds with both sides zero. [given]

Otherwise cover $\Omega$ by its rational coordinate boxes and use [F5] to write $\varphi$ as a locally finite sum of compactly supported smooth functions, each supported in one such box. Only finitely many summands meet the compact support of $\varphi$, so it is enough by linearity to prove the identity for a test function $\psi$ supported in a single coordinate box $Q$. [F5, given]

1.2 Fix such a $Q$ and a coordinate $i$. [F1, given]

When $u=0$ and $g_i=0$ as a.e. classes, both integrals vanish. Otherwise, the support of $\psi$ lies in a compact sub-box, so its restriction to every $i$-coordinate section vanishes near the two endpoints of the side interval of $Q$. Choose a compact interval $[a,b]$ strictly inside that side interval and containing the projection of $\operatorname{supp}\psi$ onto the $i$th coordinate. For almost every transverse point the section of $u^*$ is absolutely continuous on $[a,b]$; by hypothesis its derivative equals the section of $g_i$ almost everywhere. Apply [F2] on $[a,b]$. Since the section of $\psi$ vanishes at $a,b$, This gives $$\int_{I_{i,Q}}u^*(y,t)\,\partial_i\psi(y,t)\,dt=-\int_{I_{i,Q}}g_i(y,t)\,\psi(y,t)\,dt$$ for almost every transverse $y$. When $n=1$ this is directly the same one-dimensional identity, with no transverse integral. For $n\ge2$, both products are in $L^1(Q)$: the test and its derivative are bounded, $Q$ has finite measure by [F7], and local $L^p$ with [F6] gives local $L^1$. By [F4], Lebesgue measure on $Q$ is the completion of the corresponding product measure, so [F3] integrates the line identity over the transverse variables. Since $u^*=u$ almost everywhere, this gives $$\int_Qu\,\partial_i\psi\,dx=-\int_Qg_i\psi\,dx.$$ AC supplies the Countable Choice and Dependent Choice hypotheses required by [F2] and [F3], exactly as stated in [F8]. [F1, F2, F3, F4, F6, F7, F8, given]

2.1 Sum the finitely many partition identities. [F5, F6, F9, given, step 1.1, step 1.2]

Their sum is the original test function, so the same identity holds on $\Omega$. By [F9] this says precisely that $D_i u=g_i$ weakly. The argument applies to every coordinate; the endpoints $p=1$ and $p=\infty$ are included by [F6]. [F5, F6, F9, given, step 1.1, step 1.2] $\square$
