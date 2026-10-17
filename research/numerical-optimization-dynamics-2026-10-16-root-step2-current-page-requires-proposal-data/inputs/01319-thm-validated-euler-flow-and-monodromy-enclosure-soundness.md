---
id: thm-validated-euler-flow-and-monodromy-enclosure-soundness
kind: theorem
title: "The validated Euler tube encloses the exact periodic flow and monodromy matrix"
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - alg-validated-euler-flow-and-monodromy-enclosure
  - def-verified-flow-variational-range-oracle
  - lem-c1-ode-flow-on-common-tube
  - thm-picard-lindelof-local-existence-and-uniqueness
  - thm-existence-and-uniqueness-of-a-maximal-ode-solution
  - thm-ftc-second-part
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
sources:
  references:
    - title: "S. M. Rump, Verification methods: Rigorous results using floating-point arithmetic, Acta Numerica 19 (2010)"
      url: "https://www.tuhh.de/ti3/rump/intlab/ActaNumerica2010.pdf"
      locator: "Full 163-page article retrieved; inspected §§10 and 13, including Theorems 13.1–13.3 and the strict-inclusion/Krawczyk proof in §13.3."
    - title: "R. B. Kearfott, Interval Computations: Introduction, Uses, and Resources, Euromath Bulletin 2(1) (1996)"
      url: "https://interval.louisiana.edu/preprints/survey.pdf"
      locator: "Full PDF retrieved and verified as 23 pages; inspected §§1–2 on interval sets, outward enclosure, Brouwer, and interval Newton/Krawczyk."
---

## Statement

Let $H$, $K$, the range provider, $L,M$, and the initial box $Y_0=X_0\times\{I_d\}\times\Theta$ satisfy [[def-verified-flow-variational-range-oracle]] and [[alg-validated-euler-flow-and-monodromy-enclosure]]. If that procedure returns success with boxes $Q_0,\ldots,Q_{N-1}$ and $Y_N$, then for every $(x_0,\theta)\in X_0\times\Theta$ the unique solution of $y'=H(y)$ from $(x_0,I_d,\theta)$ exists through time $1$, its trajectory on $[n/N,(n+1)/N]$ lies in $Q_n$, and its terminal state lies in $Y_N$. Consequently the endpoint state encloses $\phi_\theta(x_0)$ and the matrix block encloses $D_x\phi_\theta(x_0)$.

## Facts & Assumptions

**Given:** The exact augmented IVP, a sound range provider, bounds $L,M$ on the compact convex tube $K$, and a successful finite Euler enclosure run.

[F1] The provider encloses every exact value of $H$ on an admitted box and supplies valid Lipschitz and magnitude bounds $L,M$ on $K$ ([[def-verified-flow-variational-range-oracle]]).

[F2] The algorithm sets $Q_n=Y_n+[-Mh,Mh]^m$ and $Y_{n+1}=Y_n+hH^\#(Y_n)+[-LMh^2/2,LMh^2/2]^m$, and success requires $Q_n\subseteq K$ at each step ([[alg-validated-euler-flow-and-monodromy-enclosure]]).

[F3] A continuously differentiable vector field has a unique local IVP solution; its maximal solution is the unique extension of those local solutions ([[thm-picard-lindelof-local-existence-and-uniqueness]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]]).

[F4] On a common compact tube the flow is differentiable in its initial state and its derivative solves the variational equation ([[lem-c1-ode-flow-on-common-tube]]).

[F5] Integrating a continuously differentiable curve recovers its endpoint difference ([[thm-ftc-second-part]]).

## Proof
1.1 Fix any exact state $y_n\in Y_n$ at time $nh$. While its solution remains in $K$, [F1] gives $\|H(y(t))\|_\infty\le M$, hence $\|y(t)-y_n\|_\infty\le M(t-nh)\le Mh$. If it first left $K$ before $nh+h$, continuity would place the exit point in $Q_n\subseteq K$, a contradiction. Thus the solution exists throughout this cell and stays in $Q_n$. [F1, F2, F3, given]

2.1 By [F5], the exact Euler defect on this cell is $\int_{nh}^{nh+h}(H(y(t))-H(y_n))\,dt$. By [F1], the integrand norm is at most $LM(t-nh)$, so its integral is at most $LMh^2/2$. Also $H(y_n)\in H^\#(Y_n)$; hence the exact next value lies in $Y_n+hH^\#(Y_n)+[-LMh^2/2,LMh^2/2]^m=Y_{n+1}$. [F1, F2, F5, step 1.1, algebra]

3.1 Initially the exact state lies in $Y_0$. Apply steps 1.1–1.2 successively for $n=0,\ldots,N-1$. Induction places each exact cell in $Q_n$ and its endpoint in $Y_{n+1}$, in particular the final endpoint in $Y_N$. The no-exit argument and maximal-solution property [F3] establish existence and uniqueness through all cells. [F2, F3, step 1.1, step 2.1, induction]

4.1 For $H(x,Z,\theta)=(\theta f(x),\theta Df(x)Z,0)$, the state block solves $x'=\theta f(x)$ and the matrix block solves $Z'=\theta Df(x)Z$ with $Z(0)=I_d$. Rescaling physical time $t=\theta s$ makes the state block $\phi_{\theta s}(x_0)$; [F4] identifies $Z(s)$ with its derivative in $x_0$. The terminal block inclusions from step 3.1 are therefore the claimed flow and monodromy enclosures. [F2, F4, step 3.1, algebra] ∎
