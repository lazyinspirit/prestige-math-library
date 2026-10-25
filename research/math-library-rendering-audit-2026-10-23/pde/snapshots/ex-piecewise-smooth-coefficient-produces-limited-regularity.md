---
id: ex-piecewise-smooth-coefficient-produces-limited-regularity
kind: example
title: "A piecewise-smooth coefficient gives an $H^2$ solution that is not twice classically differentiable"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 6
deps: [def-local-weak-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-weak-derivative-of-a-locally-integrable-function, thm-interior-h-two-regularity-for-divergence-form-equations, thm-ftc-second-part, thm-chain-rule, def-countable-choice]
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2025 archived author manuscript, complete 392 pages)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 10.3, Lemma 10.16 and its $W^{1,\\infty}$ coefficient hypothesis, printed p. 240 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Theorem 4.27 and its $C^1$ coefficient hypothesis, printed p. 112 (read in full)"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 5, Section 5.2, Theorem 5.6, printed p. 108 (read in full)"
---

## Example

Assume Countable Choice. On $\Omega=(-1,1)$ let
$$a(x)=\begin{cases}2+x,&x\le0,\\ 2+2x,&x>0,\end{cases}$$
a continuous, piecewise smooth coefficient with $1\le a\le4$ and
$a\in W^{1,\infty}(-1,1)$ whose derivative jumps from $1$ to $2$ at $0$, and
define $u(x)=\int_0^x\frac{dt}{a(t)}$, the absolutely continuous primitive
with $u(0)=0$. Then $u\in H^2(-1,1)$, the flux is $au'\equiv1$, and $u$ is a
local weak solution of $-(au')'=0$ in the sense of
[[def-local-weak-solution-for-a-divergence-form-operator]]. Explicitly
$$u''(x)=-\frac{a'(x)}{a(x)^2}=\begin{cases}-\dfrac1{(2+x)^2},&x<0,\\[2pt] -\dfrac{2}{(2+2x)^2},&x>0,\end{cases}$$
with one-sided limits $-1/4$ at $0^-$ and $-1/2$ at $0^+$; consequently the
one-sided difference quotients of $u'$ at $0$ have the distinct limits
$-1/4$ and $-1/2$, the second classical derivative of $u$ at $0$ does not
exist, and $u\notin C^2(-1,1)$. Thus the weak $H^2$ conclusion of
[[thm-interior-h-two-regularity-for-divergence-form-equations]] holds for
this Lipschitz coefficient while classical twice differentiability fails:
weak $H^2$ regularity is genuinely weaker than $C^2$.

## Facts & Assumptions

**Given:** The coefficient $a$ above and the primitive $u(x)=\int_0^x dt/a(t)$; the operator $Lu=-(au')'$ with $a^{11}=a$, $b=c=0$.

[F1] $u$ is locally absolutely continuous, $u(0)=0$, and its a.e. derivative is the integrand: $u'(x)=1/a(x)$ for a.e. $x\in(-1,1)$; more precisely $u(x)=\ln(2+x)-\ln2$ for $x\le0$ and $u(x)=\tfrac12\ln(1+x)$ for $x\ge0$, and these formulas are differentiable with the stated values of $1/a$ on each side, agreeing at $0$ with value $1/2$. ([[thm-ftc-second-part]], [[thm-chain-rule]])

[F2] A class $u\in H^1(\Omega)$ is a local weak solution of $Lu=f$ on $\Omega$ if $a(u,v)=\int_\Omega f\overline v$ for every $v\in C_c^\infty(\Omega)$; for $L=-(au')'$ and $f=0$ this is $\int_\Omega a\,u'\,\overline{v'}\,dx=0$ for every $v\in C_c^\infty(\Omega)$. ([[def-local-weak-solution-for-a-divergence-form-operator]], [[def-uniformly-elliptic-divergence-form-operator]])

[F3] The operator $-(au')'$ is uniformly elliptic with $a^{11}=a$: $1\le a\le4$ gives $\theta=1$ and $M_a=4$, and $b=c=0$; $a$ is continuous and piecewise $C^1$ with bounded derivative, hence $a\in W^{1,\infty}(-1,1)$. ([[def-uniformly-elliptic-divergence-form-operator]])

[F4] For a continuous function $w$ that is $C^1$ on each of $(-1,0)$ and $(0,1)$ with bounded one-sided derivatives, integrate $w\varphi'$ on the two half-intervals. The terms at $0$ cancel because its one-sided values agree; the outer terms vanish for $\varphi\in C_c^\infty(-1,1)$. Thus its piecewise derivative is its weak derivative. This argument applies to the coefficient $a$ and to $w=1/a$ here. Almost-everywhere differentiability and integrability of the classical derivative alone would not suffice for a general function. ([[def-weak-derivative-of-a-locally-integrable-function]])

## Verification

1.1 The explicit primitive. By [F1], for $x<0$ one has $u(x)=\int_0^x dt/(2+t)=\ln(2+x)-\ln2$, and for $x>0$ one has $u(x)=\int_0^x dt/(2+2t)=\tfrac12\ln(1+x)$; both formulas give $u(0)=0$ and both one-sided derivatives at $0$ equal $1/2$, so $u$ is differentiable at $0$ and $u'=1/a$ on $(-1,1)$. In particular $u'$ is continuous and $u\in H^1(-1,1)\cap L^\infty(-1,1)$. [F1, algebra, given]

1.2 The second derivative. On $(-1,0)$ and on $(0,1)$ the coefficient is smooth and $u''=-a'/a^2$, namely $-1/(2+x)^2$ and $-2/(2+2x)^2$ respectively; both expressions are bounded in absolute value by $1$, so $u''\in L^\infty(-1,1)$. Moreover $|1/a(x)-1/a(y)|\le|a(x)-a(y)|\le2|x-y|$ because $a\ge1$ and $a$ is Lipschitz with constant $2$; hence $u'=1/a$ is Lipschitz and continuous at $0$. Applying the piecewise test calculation of [F4] shows directly that the displayed bounded piecewise derivative is its weak derivative. Consequently $u\in W^{2,\infty}(-1,1)\subseteq H^2(-1,1)$, and the displayed formula for $u''$ is the weak second derivative. [F1, F4, algebra]

2.1 The weak equation. Since $au'\equiv1$ by step 1.1, for every $v\in C_c^\infty(-1,1)$ one has $\int_{-1}^1 a\,u'\,\overline{v'}\,dx=\int_{-1}^1\overline{v'}\,dx=0$, the last integral vanishing because $v$ is compactly supported in $(-1,1)$. Hence the identity of [F2] holds with $f=0$; its hypothesis $u\in H^1$ is met by step 1.1. Thus $u$ is the local weak solution of $-(au')'=0$, and by [F3] the operator has $\theta=1$, $M_a=4$. [F2, F3, step 1.1, algebra, given]

3.1 Failure of classical twice differentiability. By step 1.2 the one-sided limits of $u''$ at $0$ are $-1/4$ at $0^-$ and $-1/2$ at $0^+$; equivalently, the difference quotients of $u'$ have these one-sided limits, since for $h<0$ one has $(u'(h)-u'(0))/h=-1/(2(2+h))\to-1/4$ and for $h>0$ one has $(u'(h)-u'(0))/h=-1/(2+2h)\to-1/2$. Hence $u'$ is not differentiable at $0$ and $u\notin C^2(-1,1)$, while $u\in H^2(-1,1)$ by step 1.2. [F1, step 1.2, algebra] ∎

## Source notes

This is the Lipschitz-coefficient threshold case of the interior $H^2$ theorem of [[thm-interior-h-two-regularity-for-divergence-form-equations]]: Teschl's Lemma 10.16 (printed p. 240) assumes exactly $A\in W^{1,\infty}$, Hunter's Theorem 4.27 (printed p. 112) assumes $C^1$ coefficients, and both give $H^2_{\mathrm{loc}}$ while saying nothing about $C^2$. The computation above is deliberately self-contained: it verifies $u\in W^{2,\infty}\subseteq H^2$ directly from the explicit primitive, so the failure of $C^2$ at the derivative jump of $a$ is separated from the regularity theorem rather than resting on it.
