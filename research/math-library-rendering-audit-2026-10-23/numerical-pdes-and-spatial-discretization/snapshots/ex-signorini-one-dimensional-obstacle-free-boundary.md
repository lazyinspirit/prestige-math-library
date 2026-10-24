---
id: ex-signorini-one-dimensional-obstacle-free-boundary
kind: example
title: "A one-dimensional obstacle with an explicit free boundary"
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 0
deps:
  [
    def-closed-convex-obstacle-set-and-variational-inequality,
    lem-one-dimensional-trace-truncation-compatibility,
    thm-poincare-inequality-for-w-one-p-zero,
    cor-cauchy-schwarz-inequality-for-l-two,
    def-bounded-coercive-and-symmetric-sesquilinear-forms,
    def-wkp-zero-as-a-sobolev-closure,
    def-axiom-of-choice,
    def-countable-choice
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, complete 52-page KTH lecture
        notes"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacl\
        e_Problem.pdf"
      locator: "Chapter 3 §3.1, Theorem 3.1, printed p. 27: existence and uniqueness
        for the scalar Dirichlet obstacle problem; printed pp. 27–28 derive its
        variational inequality by admissible variations. The reaction density in
        this example is computed locally."
    - title: "Richard S. Falk, Error Estimates for the Approximation of a Class of
        Variational Inequalities, complete 10-page paper"
      url: "https://ow3.math.rutgers.edu/~falk/papers/varineq.pdf"
      locator: "§2, Theorem 1, printed pp. 964–965: coercive obstacle variational
        inequalities."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

On $(0,1)$ take $a_0=1/2$, obstacle $\psi(x)=0$ for $0\le x\le a_0$ and $\psi(x)=-(x-a_0)$ for $a_0\le x\le1$, bilinear form $a(w,z)=\int_0^1w'z'\,dx$, and load $F(z)=\int_0^1f z\,dx$, where
$$u(x)=\begin{cases}0,&0\le x\le a_0,\\(x-a_0)^2(1-x),&a_0\le x\le1,\end{cases}\qquad f(x)=\begin{cases}-1,&0<x<a_0,\\-4+6x,&a_0<x<1.\end{cases}$$
Then $u$ is the unique solution of the scalar obstacle variational inequality. Using the displayed continuous representatives on $[0,1]$, their coincidence set on $\overline\Omega$ is $[0,a_0]$; the contact set within $\Omega=(0,1)$ is $(0,a_0]$. The reaction density is $1$ on $(0,a_0)$ and $0$ on $(a_0,1)$.

## Facts & Assumptions

**Given:** The interval $(0,1)$, the obstacle convention and variational inequality of [[def-closed-convex-obstacle-set-and-variational-inequality]], and the data above.

[A1] Countable Choice is assumed by the one-dimensional Poincare inequality. ([[def-countable-choice]])

[A2] The Axiom of Choice is assumed by the published obstacle and endpoint-trace interfaces. ([[def-axiom-of-choice]])

[F1] In dimension one the obstacle definition takes $\Omega=(0,1)$, requires $\psi\in H^1(0,1)$ and nonpositive endpoint traces, and sets $K=\{v\in H^1_0(0,1):v\ge\psi\text{ a.e.}\}$. ([[def-closed-convex-obstacle-set-and-variational-inequality]])

[F2] On an interval, the endpoint-pair trace is given by the continuous absolutely continuous representative, and its kernel is $H^1_0(0,1)$. ([[lem-one-dimensional-trace-truncation-compatibility]])

[F3] On $H^1_0(0,1)$, the derivative seminorm controls the full $H^1$ norm by the one-dimensional Poincare inequality. ([[thm-poincare-inequality-for-w-one-p-zero]])

[F4] The integral pairing of two $L^2(0,1)$ functions is bounded by the product of their $L^2$ norms. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F5] A bounded coercive symmetric bilinear form is bounded in the specified norm and satisfies a positive quadratic lower bound. ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]])

[F6] $H^1_0(0,1)$ is the $H^1$ closure of $C_c^\infty(0,1)$. ([[def-wkp-zero-as-a-sobolev-closure]])

## Proof

1.1 The function $\psi$ is continuous and piecewise affine, hence belongs to $H^1(0,1)$; its endpoint values are $0$ and $-1/2$, so [F1] applies. The displayed $u$ is continuous at $a_0$, has derivative $0$ from both sides there, and has endpoint values $u(0)=u(1)=0$. By [F2], its endpoint trace is zero and therefore $u\in H^1_0(0,1)$. On $[0,a_0]$, $u=\psi=0$; on $(a_0,1]$, $u\ge0>\psi$. Thus $u\in K$, and equality $u=\psi$ holds exactly on $[0,a_0]$. [A2, F1, F2, given, algebra]

1.2 On $(a_0,1)$, direct differentiation gives $u''(x)=4-6x$; on $(0,a_0)$, $u''=0$. The derivative $u'$ is continuous at $a_0$, so its distributional derivative is the piecewise function just computed, with no point mass at $a_0$. For $z=v-u\in H^1_0(0,1)$, [F6] supplies a sequence $z_m\in C_c^\infty(0,1)$ converging in $H^1$. Piecewise integration by parts for each $z_m$ has cancelling interface terms because $u'$ is continuous; passing to the limit in the $L^2$ pairings gives $\int_0^1u'z'=-\int_0^1u''z$. Since $f=-1$ on the first interval and $f=-u''$ on the second, this yields $a(u,v-u)-F(v-u)=\int_0^{a_0}(v-u)\,dx=\int_0^{a_0}v\,dx\ge0$, where the last inequality uses $v\ge\psi=0$ almost everywhere on $(0,a_0)$. Hence $u$ solves the variational inequality. The same integration by parts against compactly supported tests gives reaction density $-u''-f=1$ on $(0,a_0)$ and $0$ on $(a_0,1)$; no point mass occurs at $a_0$ because $u'$ is continuous. [F1, F6, given, algebra]

2.1 The function $f$ is bounded on both subintervals, hence belongs to $L^2(0,1)$. The form is symmetric and bounded since $|a(w,z)|\le\|w'\|_2\|z'\|_2\le\|w\|_{H^1}\|z\|_{H^1}$ by [F4]. By [F3], $a(w,w)=\|w'\|_2^2\ge c_P^{-2}\|w\|_{H^1}^2$ for some $c_P>0$. Thus the form is bounded, symmetric and coercive in the sense of [F5]. The load is bounded because $|F(z)|\le\|f\|_2\|z\|_2\le c_P\|f\|_2\|z\|_{H^1}$ by [F3]–[F4]. If $\widetilde u\in K$ is another solution, test its inequality with $u$ and the one for $u$ with $\widetilde u$, then add; symmetry gives $a(u-\widetilde u,u-\widetilde u)\le0$. Coercivity forces $u=\widetilde u$. [A1, A2, F3, F4, F5, step 1.2, algebra] ∎
