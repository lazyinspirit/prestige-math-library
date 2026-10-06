---
id: "ex-one-dimensional-obstacle-problem-and-contact-set"
kind: "example"
title: "A one-dimensional obstacle problem and its contact set"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 10
deps:
  - "cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives"
  - "def-axiom-of-choice"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "def-countable-choice"
  - "def-dependent-choice"
  - "def-hk-and-hk-zero-notation"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-classical-derivatives-are-weak-derivatives"
  - "lem-coercivity-of-the-principal-dirichlet-form"
  - "lem-one-dimensional-trace-truncation-compatibility"
  - "thm-algebra-of-derivatives"
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "thm-existence-and-uniqueness-for-the-obstacle-problem"
  - "thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions"
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
      locator: "Chapter 3 Section 3.1, Theorem 3.1, printed pp. 26-28 (energy minimisation and the contact set for the obstacle problem)"
---

## Example

Assume the Axiom of Choice, which supplies Countable and Dependent Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]). Let $\Omega=(-1,1)$, $a(u,v)=\int_{-1}^1u_xv_x\,dx$, $F=0$, and $\psi(x)=\varepsilon-\tfrac12x^2$ with $0<\varepsilon<\tfrac12$. By [[lem-one-dimensional-trace-truncation-compatibility]], $T\psi=(\varepsilon-\tfrac12,\varepsilon-\tfrac12)\le(0,0)$. Then the obstacle solution of [[thm-existence-and-uniqueness-for-the-obstacle-problem]] on $K=\{v\in H^1_0(-1,1):v\ge\psi\}$ is
$$u(x)=\begin{cases}\varepsilon-\tfrac12x^2,&|x|\le t,\\t(1-|x|),&t\le|x|\le1,\end{cases}\qquad t=1-\sqrt{1-2\varepsilon}\in(0,1).$$
The contact set is $\{u=\psi\}=[-t,t]$, the noncontact set is $\{|x|>t\}$, and $u$ is the admissible competitor whose slopes match the obstacle at the free boundary points: $u'(\pm t)=\psi'(\pm t)=\mp t$.

## Facts & Assumptions

**Given:** The interval $(-1,1)$, the form $a(u,v)=\int_{-1}^1u'v'\,dx$, $F=0$, the energy $J(v)=\tfrac12\int_{-1}^1|v'|^2\,dx$, the obstacle $\psi(x)=\varepsilon-\tfrac12x^2$ with $0<\varepsilon<\tfrac12$, the admissible set $K$ of [[def-closed-convex-obstacle-set-and-variational-inequality]], and $t=1-\sqrt{1-2\varepsilon}$.

[F1] [[def-closed-convex-obstacle-set-and-variational-inequality]], [[thm-existence-and-uniqueness-for-the-obstacle-problem]]: $K=\{v\in H^1_0(-1,1):v\ge\psi\text{ a.e.}\}$ is nonempty and $J$ has exactly one minimiser on $K$, which is the unique solution of the obstacle variational inequality; the form $a$ is symmetric and $J(u+q)=J(u)+a(u,q)+\tfrac12a(q,q)$ for all $u\in K$, $q\in H^1_0(-1,1)$.

[F2] [[lem-one-dimensional-trace-truncation-compatibility]], [[cor-one-dimensional-w-one-p-functions-have-absolutely-continuous-representatives]]: the endpoint trace $T$ is the endpoint pair of the unique absolutely continuous representative, $\ker T=W_0^{1,2}(-1,1)=H^1_0(-1,1)$, and every class in $H^1_0(-1,1)$ has an absolutely continuous representative on $[-1,1]$ vanishing at $\pm1$ whose derivative equals the weak derivative almost everywhere. The continuous function $\psi$ is its own absolutely continuous representative, so $T\psi=(\psi(-1),\psi(1))=(\varepsilon-\tfrac12,\varepsilon-\tfrac12)$.

[F3] [[thm-choice-implies-dependent-implies-countable-choice]]: the Axiom of Choice implies Dependent Choice, which implies Countable Choice.

[F4] [[thm-integration-by-parts-for-absolutely-continuous-functions]]: for absolutely continuous $F,G$ on $[-1,1]$, $\int_{-1}^1FG'+\int_{-1}^1F'G=F(1)G(1)-F(-1)G(-1)$.

[F5] [[lem-classical-derivatives-are-weak-derivatives]], [[thm-algebra-of-derivatives]]: the classical derivatives of the $C^1$ pieces below are the corresponding weak derivatives, and $\psi'(x)=-x$; a continuous function on $[-1,1]$ that is $C^1$ on the pieces $|x|<t$ and $t<|x|<1$ with matching one-sided derivatives is $C^1$ on $[-1,1]$, hence absolutely continuous.

[F6] [[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]: an absolutely continuous function with vanishing derivative almost everywhere is constant.

[F7] [[lem-coercivity-of-the-principal-dirichlet-form]]: on the bounded interval, the model principal form $a(v,v)=\|v'\|_2^2$ is bounded and coercive with respect to the $H^1$ norm; thus the form hypotheses of [F1] hold.

## Verification

**Proof technique:** direct.

**Given:** The data above, in particular $\varepsilon\in(0,1/2)$ and $t=1-\sqrt{1-2\varepsilon}$.

1.1 By [F7] the principal form is bounded and coercive. Put $s:=\sqrt{1-2\varepsilon}$, so $0<s<1$ and $t=1-s\in(0,1)$; from $s^2=1-2\varepsilon$ one gets $\varepsilon=\tfrac12(1-s^2)=\tfrac12(1-s)(1+s)=\tfrac12t(2-t)=t-\tfrac12t^2$, hence $\psi(\pm t)=\varepsilon-\tfrac12t^2=t-t^2=t(1-t)$ and $\psi'(\pm t)=\mp t$. [given, F5, F7, algebra]

2.1 Define $u(x)=\varepsilon-\tfrac12x^2$ for $|x|\le t$ and $u(x)=t(1-|x|)$ for $t\le|x|\le1$. At $x=\pm t$ the two formulas agree by step 1.1, and the one-sided derivatives agree as well because the inner derivative is $\psi'(x)=-x$ with $\psi'(\pm t)=\mp t$ and the outer derivative is $\mp t$; hence $u$ is $C^1$ on $[-1,1]$ by [F5], with $|u'|\le\max\{t,1\}=1$ and $u(\pm1)=0$. Therefore $u\in H^1(-1,1)$ with weak derivative $u'$ and $Tu=(0,0)$, so $u\in\ker T=H^1_0(-1,1)$ by [F2]. Finally $u-\psi=0$ on $[-t,t]$, while for $t\le|x|\le1$ one has $u(x)-\psi(x)=t(1-|x|)-\varepsilon+\tfrac12x^2=\tfrac12(|x|-t)^2$ by step 1.1; hence $u\ge\psi$ on $(-1,1)$ with equality exactly on $[-t,t]$, so $u\in K$ and $\{u=\psi\}=[-t,t]$. [step 1.1, F2, F5]

3.1 The derivative $u'$ equals $t$ on $(-1,-t)$, $-x$ on $(-t,t)$ and $-t$ on $(t,1)$; it is continuous and piecewise affine, hence Lipschitz and absolutely continuous on $[-1,1]$, with $u''=0$ a.e. on $(-1,-t)\cup(t,1)$ and $u''=-1$ a.e. on $(-t,t)$. Let $v\in K$ and let $q:=v-u$ be represented by its absolutely continuous representative vanishing at $\pm1$, which exists by step 2.1 and [F2]. Applying integration by parts [F4] to $F=q$ and $G=u'$ gives $\int_{-1}^1q'u'+\int_{-1}^1qu''=q(1)u'(1)-q(-1)u'(-1)=0$, that is $\int_{-1}^1u'q'=\int_{-t}^tq\,dx$. [step 2.1, F2, F4]

4.1 Since $v\in K$ one has $v\ge\psi$ a.e. on $(-1,1)$ [F1], and $u=\psi$ on $[-t,t]$ by step 2.1, so the representative $q=v-u$ of step 3.1 satisfies $q\ge0$ a.e. on $(-t,t)$ and $\int_{-t}^tq\,dx=\int_{-t}^t(v-\psi)\,dx\ge0$. [step 2.1, F1]

5.1 For every $v\in K$, [F1] expands $J(v)-J(u)=a(u,q)+\tfrac12a(q,q)=\int_{-1}^1u'q'+\tfrac12\int_{-1}^1|q'|^2$ with $q=v-u$; by steps 3.1 and 4.1 this equals $\tfrac12\int_{-1}^1|q'|^2+\int_{-t}^t(v-\psi)\,dx\ge0$. Hence $u$ minimises $J$ on $K$. [step 3.1, step 4.1, F1, algebra]

6.1 If $v\in K$ satisfies $J(v)=J(u)$, then both nonnegative terms in step 5.1 vanish, so $\int_{-1}^1|q'|^2=0$ and $q'=0$ a.e.; the absolutely continuous representative of $q$ is then constant by [F6], and its endpoint values $Tq=(0,0)$ (it lies in $H^1_0(-1,1)$) force that constant to be $0$. Hence $q=0$ a.e. and $v=u$: the minimiser is unique. [step 3.1, step 5.1, F2, F6]

7.1 By [F1] the obstacle problem has exactly one minimiser on $K$ and it is the unique solution of the variational inequality; steps 4.1 and 5.1 identify this minimiser with the explicit $u$, so $u$ is the obstacle solution. Step 2.1 gives the contact set $\{u=\psi\}=[-t,t]$ and the noncontact set $\{t<|x|<1\}$, and step 1.1 gives the matching slopes $u'(\pm t)=\mp t=\psi'(\pm t)$ at the free boundary. The Axiom of Choice enters through the obstacle setting and the trace lemma [F1, F2], and it supplies the Countable and Dependent Choice consumed by the integration by parts [F3, F4]; no further choice principle is used. [step 1.1, step 2.1, step 5.1, step 6.1, F1, F2, F3, F4] ∎
