---
id: "ex-one-dimensional-obstacle-reaction-is-supported-on-the-contact-set"
kind: "example"
title: "The one-dimensional obstacle reaction is supported on the contact set"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 11
deps:
  - "cor-integral-over-a-null-set-vanishes"
  - "cor-obstacle-complementarity-in-distribution-form"
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-distribution"
  - "def-distributional-derivative"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-test-function-space-d-of-an-open-set"
  - "ex-one-dimensional-obstacle-problem-and-contact-set"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "prop-countable-subsets-of-rn-are-lebesgue-null"
  - "thm-integration-by-parts-for-absolutely-continuous-functions"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 4 Section 4.2, Theorem 4.2 with (58), printed pp. 36-38 (the reaction of the obstacle solution is a nonnegative measure carried by the contact set)"
---

## Example

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]), inherited from the obstacle example. In [[ex-one-dimensional-obstacle-problem-and-contact-set]], the solution $u$ lies in $H^2(-1,1)$ with $u''=\psi''=-1$ on $(-t,t)$ and $u''=0$ on the noncontact set $\{t<|x|<1\}$. The reaction distribution $\Lambda(\varphi)=\int_{-1}^1u'\varphi'\,dx=-\int_{-1}^1u''\varphi\,dx$ of [[cor-obstacle-complementarity-in-distribution-form]] equals $\int_{-1}^1\mathbf 1_{[-t,t]}\varphi\,dx$: it is represented by the nonnegative density $\mathbf 1_{\{u=\psi\}}$, has mass $2t$, and has no atom at the free boundary points $\pm t$ because $u'$ is continuous there.

## Facts & Assumptions

**Given:** The obstacle example [[ex-one-dimensional-obstacle-problem-and-contact-set]] with $\Omega=(-1,1)$, $0<\varepsilon<1/2$, $t=1-\sqrt{1-2\varepsilon}\in(0,1)$, the obstacle $\psi(x)=\varepsilon-x^2/2$, the solution $u(x)=\psi(x)$ for $|x|\le t$ and $u(x)=t(1-|x|)$ for $t\le|x|\le1$, and the reaction $\Lambda(\varphi)=a(u,\varphi)=\int_{-1}^1u'\varphi'\,dx$ on test functions ([[def-distribution]], [[def-test-function-space-d-of-an-open-set]], [[def-distributional-derivative]]).

[F1] [[ex-one-dimensional-obstacle-problem-and-contact-set]]: $u$ is the unique obstacle solution on $K=\{v\in H^1_0(-1,1):v\ge\psi\}$; it is $C^1$ on $[-1,1]$ with $u'(x)=t$ for $x\in(-1,-t)$, $u'(x)=-x$ for $x\in(-t,t)$, $u'(x)=-t$ for $x\in(t,1)$, and its slopes match the obstacle at $\pm t$; the contact set is $\{u=\psi\}=[-t,t]$.

[F2] [[lem-classical-derivatives-are-weak-derivatives]], [[def-sobolev-space-wkp-and-its-norm]]: the classical derivative of a $C^1$ function is its weak derivative, and $H^2(-1,1)$ consists of the classes in $L^2$ with first and second weak derivatives in $L^2$.

[F3] [[thm-integration-by-parts-for-absolutely-continuous-functions]]: for absolutely continuous $F,G$ on $[-1,1]$, $\int_{-1}^1FG'=-\int_{-1}^1F'G+F(1)G(1)-F(-1)G(-1)$.

[F4] [[cor-obstacle-complementarity-in-distribution-form]]: the reaction of the solution is the distribution $\Lambda(\varphi)=a(u,\varphi)-\int_\Omega f\varphi$ on $C_c^\infty(-1,1)$, here with $f=0$.

[F5] [[prop-countable-subsets-of-rn-are-lebesgue-null]], [[cor-integral-over-a-null-set-vanishes]]: countable subsets of $\mathbb R$ are Lebesgue-null and the integral of a nonnegative measurable function over a null set vanishes; for $\varphi\in C_c^\infty(-1,1)$ the pairing against the density $\mathbf 1_{[-t,t]}$ is $\int_{\{-t,t\}}\mathbf 1_{[-t,t]}\varphi\,dx=0$.

[F6] [[def-l-p-space-as-a-quotient-by-null-functions]]: $\mathbf 1_{[-t,t]}$ is an $L^\infty$, hence $L^2$, class determined up to null sets, and the pairing $\int\mathbf 1_{[-t,t]}\varphi\,dx$ depends only on this class.

## Verification

**Proof technique:** direct.

**Given:** The explicit solution $u$ and the reaction functional $\Lambda$ above.

1.1 By [F1] the derivative $u'$ equals $t$ on $(-1,-t)$, $-x$ on $(-t,t)$ and $-t$ on $(t,1)$; it is continuous and piecewise affine on $[-1,1]$ with matching one-sided values, hence Lipschitz and absolutely continuous, and its a.e. derivative is $u''=0$ on $(-1,-t)\cup(t,1)$ and $u''=-1$ on $(-t,t)$. For each compactly supported smooth test $\varphi$, [F3] gives $\int u'\varphi'=-\int u''\varphi$, proving that this a.e. derivative is the weak derivative of $u'$. Since $u''\in L^\infty(-1,1)\subseteq L^2(-1,1)$, [F2] gives $u\in H^2(-1,1)$ with weak second derivative $u''$; in particular $u''=\psi''=-1$ on the contact interval and $u''=0$ on the noncontact set. [given, F1, F2, F3]

2.1 For every $\varphi\in C_c^\infty(-1,1)$ integration by parts [F3] applied to the absolutely continuous $u'$ and the smooth compactly supported $\varphi$ gives $\Lambda(\varphi)=\int_{-1}^1u'\varphi'\,dx=-\int_{-1}^1u''\varphi\,dx$, the endpoint terms vanishing because $\varphi$ is compactly supported; by step 1.1 the right-hand side equals $\int_{-t}^t\varphi\,dx=\int_{-1}^1\mathbf 1_{[-t,t]}\varphi\,dx$. Hence the reaction is represented by the density $\mathbf 1_{[-t,t]}$ on all test functions. [step 1.1, F3, F4]

3.1 The density $\mathbf 1_{[-t,t]}$ is nonnegative and lies in $L^\infty(-1,1)\subseteq L^2(-1,1)$ [F6]; its total mass is $\int_{-1}^1\mathbf 1_{[-t,t]}\,dx=2t$. Since the free boundary points $\pm t$ form a Lebesgue-null set, the pairing against $\mathbf 1_{[-t,t]}$ assigns them value zero, so the reaction has no atom at $\pm t$; concretely $\int_{\{-t,t\}}\mathbf 1_{[-t,t]}\varphi\,dx=0$ for every test function by [F5]. [step 2.1, F5, F6]

4.1 Steps 1.1, 2.1 and 3.1 prove all the asserted properties: $u\in H^2(-1,1)$ with $u''=-1$ on $(-t,t)$ and $u''=0$ on the noncontact set, the reaction $\Lambda(\varphi)=\int u'\varphi'=-\int u''\varphi$ is represented by the nonnegative density $\mathbf 1_{\{u=\psi\}}=\mathbf 1_{[-t,t]}$, its mass is $2t$, and it gives the Lebesgue-null set $\{-t,t\}$ the value $0$, because the continuous derivative $u'$ produces no boundary contribution at the free boundary points in the integration by parts. [step 1.1, step 2.1, step 3.1] ∎
