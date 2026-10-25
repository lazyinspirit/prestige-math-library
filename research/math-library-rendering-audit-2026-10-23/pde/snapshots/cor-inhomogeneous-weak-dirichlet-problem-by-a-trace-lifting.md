---
id: "cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting"
kind: "corollary"
title: "The inhomogeneous weak Dirichlet problem by a trace lifting"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 7
deps:
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-complex-lp-and-euclidean-test-function-conventions"
  - "def-countable-choice"
  - "def-fractional-sobolev-space-on-a-compact-c-one-boundary"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "thm-bounded-right-inverse-for-the-sobolev-trace"
  - "thm-holder-inequality-for-integrals"
  - "thm-kernel-of-the-trace-is-w-one-p-zero"
  - "thm-lax-milgram-solvability-for-coercive-divergence-form-equations"
  - "thm-lp-trace-operator-on-a-bounded-c-one-domain"
  - "thm-sharp-trace-theorem-for-w-one-p"
proof_strategy: "direct"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.3–4.5, the dual data space and homogeneous weak Dirichlet problem, printed pp. 95–101. The boundary lifting reduction is proved here."
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 9.5, the weak Dirichlet setup, printed pp. 291–294; the boundary lifting estimate is proved here with the cited trace right inverse."
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "Section 8.4, Example 1, printed pp. 222–223: inhomogeneous Dirichlet data and the affine space K. Examples 3–4 on pp. 225–226 concern homogeneous and inhomogeneous Neumann data, not Dirichlet lifting."
---

## Statement

Assume the Axiom of Choice (through the published Sobolev trace results) together with Countable Choice. Let $\Omega\subset\mathbb R^n$, $n\ge2$, be a bounded $C^1$ domain, let $g\in H^{1/2}(\partial\Omega)=W^{1/2,2}(\partial\Omega)$ and $F\in H^{-1}(\Omega)$, and let $a$ be the divergence form of [[def-uniformly-elliptic-divergence-form-operator]] satisfying the coercivity condition of [[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]] on $H^1_0(\Omega)$; write $\alpha:=\alpha_0/(1+C_P^2)>0$ for its coercivity constant, where $\alpha_0=\theta-\sqrt n\,C_PM_b-C_P^2M_c$. Fix a bounded right inverse $R:H^{1/2}(\partial\Omega)\to H^1(\Omega)$ of the trace, $T\circ R=\mathrm{id}$, as in [[thm-bounded-right-inverse-for-the-sobolev-trace]]. Then there is a unique $u\in H^1(\Omega)$ with $$Tu=g\qquad\text{and}\qquad a(u,v)=F(v)\quad\text{for every }v\in H^1_0(\Omega),$$ and with $C_a=nM_a+nM_b+M_c$ the bound of [[lem-elliptic-form-is-well-defined-and-bounded]] on all of $H^1$, $$\|u\|_{H^1}\le\|Rg\|_{H^1}+\frac{\|F\|_{H^{-1}}+C_a\|Rg\|_{H^1}}{\alpha}\le C(\Omega,a,R)\big(\|g\|_{W^{1/2,2}}+\|F\|_{H^{-1}}\big) .$$ The solution is independent of the choice of lifting; the displayed estimate depends on the fixed right inverse $R$. Boundary data outside the trace range $H^{1/2}(\partial\Omega)$ are not admissible: no $H^1$ function has such a trace, the trace range being exactly $H^{1/2}(\partial\Omega)$ ([[thm-sharp-trace-theorem-for-w-one-p]]).

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$; boundary data $g\in H^{1/2}(\partial\Omega)=W^{1/2,2}(\partial\Omega)$; $F\in H^{-1}(\Omega)$; a divergence form $a$ on $H^1(\Omega)$ whose restriction to $H^1_0(\Omega)$ satisfies the coercivity condition of [[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]] with $\alpha=\alpha_0/(1+C_P^2)>0$, $\alpha_0=\theta-\sqrt n\,C_PM_b-C_P^2M_c$, and bounded with constant $C_a$; and a bounded right inverse $R$ of the trace $T$ with $T\circ R=\mathrm{id}$.

[F1] The trace operator $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ is bounded and its kernel is exactly $H^1_0(\Omega)$ ([[thm-kernel-of-the-trace-is-w-one-p-zero]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[def-bounded-c-k-domain-and-boundary-charts]]).

[F2] The right inverse satisfies $T(Rg)=g$ and $\|Rg\|_{H^1}\le\|R\|\,\|g\|_{W^{1/2,2}}$ ([[thm-bounded-right-inverse-for-the-sobolev-trace]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]).

[F3] The divergence-form solvability theorem: for every datum in $H^{-1}(\Omega)$ there is a unique $w\in H^1_0(\Omega)$ with $a(w,v)=G(v)$ for all $v\in H^1_0(\Omega)$, satisfying $\|w\|_{H^1_0}\le\|G\|_{H^{-1}}/\alpha$ ([[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F4] Boundedness on all $H^1$ slots: with $C_a=nM_a+nM_b+M_c$, $|a(u,v)|\le C_a\|u\|_{H^1}\|v\|_{H^1}$ for every $u,v\in H^1(\Omega)$ ([[lem-elliptic-form-is-well-defined-and-bounded]], [[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[thm-holder-inequality-for-integrals]]).

[F5] Admissibility is exactly trace-range membership: the trace operator $T:H^1(\Omega)\to H^{1/2}(\partial\Omega)$ has range exactly $H^{1/2}(\partial\Omega)$ ([[thm-lp-trace-operator-on-a-bounded-c-one-domain]], [[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]]), so a datum outside $H^{1/2}(\partial\Omega)$ is the trace of no $H^1$ function and the inhomogeneous problem admits no solution for it.







## Proof

1.1 Lift and shift: put $u_0:=Rg$, so $Tu_0=g$ and $\|u_0\|_{H^1}\le\|R\|\,\|g\|$; define $\widetilde F(v):=F(v)-a(u_0,v)$ for $v\in H^1_0(\Omega)$. Then $\widetilde F$ is conjugate-linear, and by [F4] $$\|\widetilde F\|_{H^{-1}}\le\|F\|_{H^{-1}}+C_a\|u_0\|_{H^1}.$$ [F2, F4, algebra]

2.1 Zero-boundary correction: by [F3] applied to $\widetilde F$ there is a unique $w\in H^1_0(\Omega)$ with $a(w,v)=\widetilde F(v)$ for all $v\in H^1_0(\Omega)$, and $\|w\|_{H^1}\le\|\widetilde F\|_{H^{-1}}/\alpha$. [F3, step 1.1]

3.1 The sum solves the inhomogeneous problem: let $u:=u_0+w$. Since $w\in H^1_0(\Omega)=\ker T$ by [F1], $Tu=Tu_0+Tw=g$. For $v\in H^1_0(\Omega)$, additivity of $a$ in the first slot gives $a(u,v)=a(u_0,v)+a(w,v)=a(u_0,v)+\widetilde F(v)=F(v)$. [F1, step 2.1, algebra]

3.2 Estimate: $\|u\|_{H^1}\le\|u_0\|_{H^1}+\|w\|_{H^1}\le\|Rg\|_{H^1}+\bigl(\|F\|_{H^{-1}}+C_a\|Rg\|_{H^1}\bigr)/\alpha$, and the right-inverse bound $\|Rg\|_{H^1}\le\|R\|\,\|g\|_{W^{1/2,2}}$ makes the right-hand side at most $C(\Omega,a,R)(\|g\|_{W^{1/2,2}}+\|F\|_{H^{-1}})$ for an explicit constant depending only on $\Omega$, $a$ and $R$. [F2, step 1.1, step 2.1, algebra]

4.1 Uniqueness independent of the lifting: if $u_1,u_2$ are solutions, then $z:=u_1-u_2$ has $Tz=0$, so $z\in H^1_0(\Omega)$ by [F1], and $a(z,v)=0$ for every $v\in H^1_0(\Omega)$. Testing $v=z$ and using coercivity gives $\alpha\|z\|_{H^1}^2\le\operatorname{Re}a(z,z)=0$, so $z=0$. [F1, step 3.1]

5.1 Admissibility: the construction needs $g$ in the trace range; by [F5] a datum outside $H^{1/2}(\partial\Omega)$ is the trace of no $H^1$ function, so the inhomogeneous problem has no solution for it and the trace-range hypothesis cannot be dropped. [F5, given] ∎
