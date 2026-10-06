---
id: thm-harnack-inequality-for-nonnegative-weak-solutions
kind: theorem
title: "Harnack inequality for nonnegative weak solutions"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 12
deps: [thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term, thm-weak-harnack-inequality-for-nonnegative-supersolutions, lem-moser-iteration-for-positive-supersolutions, def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, def-uniformly-elliptic-divergence-form-operator, thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions, def-ball-average-operator-on-r-n, def-l-p-space-as-a-quotient-by-null-functions, def-essential-supremum-with-respect-to-a-measure, cor-sobolev-inequality-for-w-one-p-zero, thm-critical-sobolev-embedding-into-every-finite-lq, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Brian Krummel, DeGiorgi-Nash lecture notes (15 March 2016; complete 9-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/weakHarnack.pdf"
      locator: "Corollary 1 and its proof combining Theorems 1 and 2 with p in (1, n/(n-2)), printed pp. 1-3 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 18, Theorem 1 and its proof from Theorems 1-2 of Lecture 17, printed pp. 211-212 (read in full)"
    - title: "Brian Krummel, Consequences of De Giorgi-Nash-Moser (4 March 2016; complete 7-page notes)"
      url: "https://www2.math.upenn.edu/~qze/notes/ELLIPTIC%20PDE/ConseqDNM.pdf"
      locator: "Corollary 1 and inequality (3) with the ball chain, printed pp. 1-2 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be open, let $A$ and $L_0$ be as in [[thm-de-giorgi-local-boundedness-for-homogeneous-subsolutions]], and let $F\in L^q_{\mathrm{loc}}(\Omega)$ with $q>n/2$. Let $u\in H^1(\Omega;\mathbb R)$ satisfy $u\ge0$ a.e. and be a weak solution of $L_0u=-F$, i.e.
$$a_0(u,\varphi)=-\int_\Omega F\,\varphi\,dx\qquad\text{for every real }\varphi\in C_c^\infty(\Omega).$$
Then for every ball $B_R(x_0)$ with $B_{2R}(x_0)\Subset\Omega$,
$$\operatorname{ess\,sup}_{B_{R/2}(x_0)}u\le C\Bigl(\operatorname{ess\,inf}_{B_{R/2}(x_0)}u+R^{\,2-n/q}\|F\|_{L^q(B_{2R}(x_0))}\Bigr),\qquad C=C(n,q,\theta,M_a),$$
independent of $R$ and $x_0$; in the homogeneous case $F=0$ this is $\operatorname{ess\,sup}_{B_{R/2}}u\le C\operatorname{ess\,inf}_{B_{R/2}}u$, the Harnack inequality. For $n=2$ every finite $q>1$ is allowed. The two essential extrema are taken over the same ball, so no regularity of $u$ is needed for the statement; the additive forcing term is essential and the estimate is not claimed without it.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; an open set $\Omega\subseteq\mathbb R^n$, $n\ge2$; uniformly elliptic measurable symmetric coefficients $A$ with constants $\theta,M_a$; the principal operator $L_0u=-D_i(a^{ij}D_ju)$ with form $a_0$; a source $F\in L^q_{\mathrm{loc}}(\Omega)$, $q>n/2$; a nonnegative $u\in H^1(\Omega;\mathbb R)$ with $a_0(u,\varphi)=-\int_\Omega F\varphi\,dx$ for every real $\varphi\in C_c^\infty(\Omega)$; a ball $B_R(x_0)$ with $B_{2R}(x_0)\Subset\Omega$.

[F1] Both roles of a local solution: the identity $a_0(u,\varphi)=-\int_\Omega F\varphi$ against real compactly supported smooth tests gives both the subsolution inequality and the supersolution inequality for the equation $L_0u=-F$, with the appropriate inequality directions ([[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], [[def-uniformly-elliptic-divergence-form-operator]]).

[F2] Assume the Axiom of Choice. Local boundedness with a scale-correct source: for every ball $B_S(y)\Subset\Omega$, every $0<\rho<1$ and every $p>0$, $\operatorname{ess\,sup}_{B_{\rho S}(y)}w\le C_1[(\frac{1}{|B_S(y)|}\int_{B_S(y)}w^p)^{1/p}+S^{2-n/q}\|f^+\|_{L^q(B_S(y))}]$ for every nonnegative weak subsolution $w$ of $a_0(w,\cdot)\le\int f\,\cdot\,dx$ with $f\in L^q_{\mathrm{loc}}(\Omega)$, where $C_1=C_1(n,q,\theta,M_a,\rho,p)$ ([[thm-de-giorgi-local-boundedness-with-scale-correct-forcing-term]]).

[F3] Assume the Axiom of Choice. Weak Harnack inequality: for every ball $B_S(y)$ with $B_{2S}(y)\Subset\Omega$ and every $0<p<n/(n-2)$ when $n\ge3$, or every finite $p>0$ when $n=2$, $S^{-n/p}\|w\|_{L^p(B_S(y))}\le C_2(\operatorname{ess\,inf}_{B_{S/2}(y)}w+S^{2-n/q}\|G\|_{L^q(B_{2S}(y))})$ for every nonnegative weak supersolution $w$ of $L_0w=-G$ with $G\in L^q_{\mathrm{loc}}(\Omega)$, where $C_2=C_2(n,q,\theta,M_a,p)$; the range contains $s_0:=\min\{p_0,1/2\}$, where $p_0=p_0(n,\theta,M_a)>0$ is produced by the Moser iteration ([[thm-weak-harnack-inequality-for-nonnegative-supersolutions]], [[lem-moser-iteration-for-positive-supersolutions]]).

[F4] Assume the Axiom of Choice. Averaging and the elementary comparison of the negative part of the source: $\frac{1}{|B_S(y)|}\int_{B_S(y)}w^p dx=S^{-n}\|w\|_{L^p(B_S(y))}^p/|B_1|$, and $\|(-F)^+\|_{L^q}=\|F^-\|_{L^q}\le\|F\|_{L^q}$ ([[def-ball-average-operator-on-r-n]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-essential-supremum-with-respect-to-a-measure]]).

[F5] Assume the Axiom of Choice. The $n=2$ substitute: the critical embedding $W^{1,2}_0\hookrightarrow L^\kappa$ for every finite $\kappa$ replaces the $2^*$ embedding in both quoted theorems ([[cor-sobolev-inequality-for-w-one-p-zero]], [[thm-critical-sobolev-embedding-into-every-finite-lq]]).

## Proof

**Proof technique:** direct; combine the forcing local-boundedness estimate for the subsolution role of $u$ with the weak Harnack inequality for its supersolution role, both on the same ball $B_R$, and compare the two source terms.

1.1 The forcing source in the subsolution role. By [F1] the solution $u$ is a nonnegative weak subsolution with source $-F$, whose positive part is $(-F)^+=F^-$; by [F4], $\|F^-\|_{L^q(B_R(x_0))}\le\|F\|_{L^q(B_{2R}(x_0))}$. [given, F1, F4]

2.1 Chaining local boundedness with the weak Harnack inequality. Fix $s_0:=\min\{p_0,1/2\}$ from [F3], which is an admissible weak-Harnack exponent in both the $n\ge3$ and $n=2$ ranges, and apply local boundedness [F2] to $u$ on $B_R(x_0)$ with $\rho=1/2$. Its source term satisfies $R^{2-n/q}\|F^-\|_{L^q(B_R)}\le R^{2-n/q}\|F\|_{L^q(B_{2R})}$ by [F4]. Apply weak Harnack [F3] to the supersolution $u$ on the same ball with $p=s_0$ and $G=F$; after converting the normalized mean to the stated norm, $(\frac{1}{|B_R|}\int_{B_R}u^{s_0})^{1/s_0}\le C_2'(\operatorname{ess\,inf}_{B_{R/2}}u+R^{2-n/q}\|F\|_{L^q(B_{2R})})$, where $C_2'=C_2/|B_1|^{1/s_0}$. Substituting this bound into the local estimate gives coefficient $C_1C_2'$ on the infimum and $C_1(C_2'+1)$ on the source term; thus $C:=C_1(C_2'+1)$ works for both and depends only on $n,q,\theta,M_a$. [step 1.1, F2, F3, F4]

3.1 The homogeneous case and the $n=2$ clause. If $F=0$ the same two steps give $\operatorname{ess\,sup}_{B_{R/2}}u\le C_1C_2'(\operatorname{ess\,inf}_{B_{R/2}}u)$, the Harnack inequality; the extremal balls agree, so no regularity is used. For $n=2$ the same proof applies with [F5] in place of the $2^*$ embedding in both quoted theorems and with every finite $p$, so the range $0<p<n/(n-2)$ becomes unbounded. All arguments use Countable Choice and the Axiom of Choice only through the suppliers named above. [step 2.1, F5, algebra] ∎
