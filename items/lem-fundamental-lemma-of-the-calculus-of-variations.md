---
id: lem-fundamental-lemma-of-the-calculus-of-variations
kind: lemma
title: "The fundamental lemma of the calculus of variations"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-locally-integrable-function-as-a-regular-distribution, def-test-function-space-d-of-an-open-set, def-borel-and-lebesgue-measurable-function-on-rn, def-lebesgue-point-and-lebesgue-set, thm-almost-every-point-is-a-lebesgue-point, lem-radial-majorized-kernels-recover-lebesgue-point-values, lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound, def-countable-choice, thm-lebesgue-measure-is-a-complete-measure]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 4 Section 4.1, Lemma 4.1 and its proof, printed pp. 47-48"
    - title: "Francesco Paolo Maiale (course by Giovanni Alberti), Lecture Notes Calculus of Variations A, University of Pisa (last update 21 August 2019; complete 149-page notes)"
      url: "https://poisson.phc.dm.unipi.it/~fpmaiale/notes/CdV-A.pdf"
      locator: "Chapter 1 Section 2.1, Lemmas 1.8 and 1.13, printed pp. 6-8 and 14"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume Countable Choice ([[def-countable-choice]]). Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, and let $g\in L^1_{\mathrm{loc}}(\Omega;\mathbb C)$ ([[def-locally-integrable-function-as-a-regular-distribution]]) satisfy
$$\int_\Omega g\,\varphi\,dx=0\qquad\text{for every }\varphi\in C_c^\infty(\Omega)$$
([[def-test-function-space-d-of-an-open-set]]). Then $g=0$ almost everywhere on $\Omega$. Moreover, if $g$ is real-valued and $\int_\Omega g\varphi\,dx\ge0$ for every nonnegative $\varphi\in C_c^\infty(\Omega)$, then $g\ge0$ almost everywhere.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$, $n\ge1$, and $g\in L^1_{\mathrm{loc}}(\Omega;\mathbb C)$. Part (a) assumes $\int_\Omega g\varphi\,dx=0$ for every $\varphi\in C_c^\infty(\Omega)$; part (b) assumes $g$ real-valued and $\int_\Omega g\varphi\,dx\ge0$ for every nonnegative $\varphi\in C_c^\infty(\Omega)$. The measure-theoretic suppliers used below are stated under the Axiom of Countable Choice ([[def-countable-choice]]), the ambient convention of the Lebesgue framework cited here.

[F1] Choose a nonnegative smooth bump $b$ equal to one on $\overline B_{1/4}(0)$ and supported inside $B_{1/2}(0)$ ([[lem-scaled-euclidean-bumps-with-compact-support-and-gradient-bound]]). Its integral $c$ is finite by boundedness and compact support, and positive because the inner ball contains a box of positive measure ([[thm-lebesgue-measure-is-a-complete-measure]]). Then $\rho:=b/c$ is nonnegative, smooth, compactly supported in $B_1(0)$ and has integral one. It is majorised by the bounded nonincreasing function $\Phi(t):=\|\rho\|_\infty\mathbf1_{[0,1]}(t)$, whose radial integral is finite. Radiality of $\rho$ itself is unnecessary.

[F2] For $f\in L^1(\mathbb R^n)$ and a Lebesgue point $x$ of $f$ with value $a=f(x)$, and for any measurable kernel $K$ with $\int K=1$ and $|K(y)|\le\Phi(|y|)$ as in [F1], one has $\int\varepsilon^{-n}K(y/\varepsilon)f(x-y)\,dy\to a$ as $\varepsilon\downarrow0$ ([[lem-radial-majorized-kernels-recover-lebesgue-point-values]]).

[F3] The Lebesgue set of a class in $L^1_{\mathrm{loc}}(\mathbb R^n)$ is defined by the averages $\lambda(B(x,r))^{-1}\int_{B(x,r)}|f(y)-f(x)|\,dy\to0$, and under the Axiom of Countable Choice it has full Lebesgue measure ([[def-lebesgue-point-and-lebesgue-set]], [[thm-almost-every-point-is-a-lebesgue-point]]).

[F4] A ball is contained in a half-open cube of side $2r$ centred at the same point, whose Lebesgue measure is $(2r)^n$; by monotonicity of the measure, $\lambda(B(x,r))\le 2^nr^n$ ([[thm-lebesgue-measure-is-a-complete-measure]]).

## Proof

**Proof technique:** direct; the sign statement is proved with a mollifier kernel at almost every point, and the vanishing statement follows by applying the sign statement to $g$ and $-g$.

1.1 The vanishing statement follows from the sign statement. Assume part (b) proved and first take $g$ real-valued. Applying it to $g$ gives $g\ge0$ almost everywhere; applying it to $-g$, whose pairing with every nonnegative $\varphi$ equals $-\int_\Omega g\varphi=0\ge0$, gives $-g\ge0$ almost everywhere. Hence $g=0$ almost everywhere. For complex $g$, the vanishing pairing with every real test implies vanishing pairings for $\operatorname{Re}g$ and $\operatorname{Im}g$; applying this real argument to each gives part (a). So it suffices to prove the sign statement, and from the next step on we assume $g$ real-valued and $\int_\Omega g\varphi\ge0$ for every nonnegative $\varphi\in C_c^\infty(\Omega)$. [given, algebra]

1.2 Exhaustion of $\Omega$ and localisation. For integers $k\ge1$ put  $\Omega_k:=\{x\in\Omega:|x|<k\text{ and }\operatorname{dist}(x,\mathbb R^n\setminus\Omega)>1/k\}$, with $\operatorname{dist}(x,\varnothing)=+\infty$. Each $\Omega_k$ is open (both conditions are open or strict), its closure is bounded and contained in $\Omega$, so $\overline{\Omega_k}$ is a compact subset of $\Omega$; moreover $\Omega_k\subseteq\Omega_{k+1}$ and $\bigcup_k\Omega_k=\Omega$, because for $x\in\Omega$ openness gives $\operatorname{dist}(x,\mathbb R^n\setminus\Omega)>0$ and one may take $k>\max\{|x|,1/\operatorname{dist}(x,\mathbb R^n\setminus\Omega)\}$. [algebra]

2.1 The localised functions are integrable on $\mathbb R^n$. Let $g_k:=g\,\mathbf 1_{\Omega_k}$, extended by zero outside $\Omega_k$. Since $\overline{\Omega_k}$ is a compact subset of $\Omega$ and $g\in L^1_{\mathrm{loc}}(\Omega)$, one has $\int_{\mathbb R^n}|g_k|=\int_{\Omega_k}|g|<\infty$, so $g_k\in L^1(\mathbb R^n)$. [step 1.2]

3.1 Almost every point is a Lebesgue point of every $g_k$. By [F3] applied to $g_k$ there is a Lebesgue null set $N_k\subseteq\mathbb R^n$ such that every $z\notin N_k$ is a Lebesgue point of $g_k$; the union $N:=\bigcup_kN_k$ is again null, being a countable union of null sets. [F3, step 2.1]

4.1 At points of $\Omega\setminus N$ the Lebesgue averages are small. Fix $z\in\Omega\setminus N$ and $k$ with $z\in\Omega_k$. Then $z\notin N_k$, so for $A_k(r):=\int_{B(z,r)}|g_k(y)-g_k(z)|\,dy$ the Lebesgue point property gives $A_k(r)/\lambda(B(z,r))\to0$; combined with [F4] this yields $A_k(r)/r^n\le 2^nA_k(r)/\lambda(B(z,r))\to0$, that is $A_k(r)=o(r^n)$. Moreover $g_k(z)=g(z)$, since $z\in\Omega_k$. [F3, F4, step 3.1]

5.1 Kernel convergence. By step 4.1 the point $z$ is a Lebesgue point of $g_k$ with $g_k(z)=g(z)$ and $A_k(r)=o(r^n)$, so applying [F2] with $f=g_k$, $x=z$, $a=g_k(z)$ and the kernel $K=\rho$ of [F1] gives, for $r\downarrow0$, the limit $$r^{-n}\int_{\mathbb R^n}\rho(y/r)\,g_k(z-y)\,dy\longrightarrow g(z),$$ since [F1] realises $\rho$ as a compactly supported kernel with the required bounded nonincreasing majorant. [F1, F2, step 4.1]

6.1 Admissible test functions. Fix $z\in\Omega\setminus N$ and $k$ with $z\in\Omega_k$ as in step 4.1. For $0<r<\operatorname{dist}(z,\mathbb R^n\setminus\Omega_k)$ the function $\varphi_r(w):=r^{-n}\rho((z-w)/r)$ lies in $C_c^\infty(\Omega)$: it is smooth in $w$, nonnegative, and has support in $B(z,r)\subseteq\Omega$. Changing variables $w=z-y$ gives $\int_\Omega g(w)\varphi_r(w)\,dw=\int r^{-n}\rho(y/r)g(z-y)\,dy$, and $g=g_k$ on the support of this test. Thus the integral equals the mollified $g_k$ in step 5.1, and the hypothesis of part (b) gives $\int_\Omega g\varphi_r\ge0$. [F1, given, step 4.1]

7.1 Conclusion of the sign statement. For $z\in\Omega\setminus N$ and $r\downarrow0$, step 6.1 keeps the quantities $\int_\Omega g\varphi_r$ nonnegative while step 5.1 identifies their limit as $g(z)$; hence $g(z)\ge0$. Since $N$ is null, $g\ge0$ almost everywhere on $\Omega$, and by step 1.1 this also gives $g=0$ almost everywhere under the hypotheses of part (a). [step 5.1, step 6.1, step 1.1] ∎ 