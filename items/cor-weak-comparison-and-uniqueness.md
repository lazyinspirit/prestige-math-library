---
id: cor-weak-comparison-and-uniqueness
kind: corollary
title: "Weak comparison and uniqueness for the Dirichlet problem"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 8
deps: [def-weak-subsolution-and-supersolution-of-a-divergence-form-equation, lem-positive-part-is-an-admissible-weak-test-by-truncation, lem-positive-part-of-a-zero-trace-function-has-zero-trace, thm-weak-maximum-principle-for-coercive-divergence-form-equations, def-weak-dirichlet-solution-for-a-divergence-form-operator, def-uniformly-elliptic-divergence-form-operator, def-bounded-c-k-domain-and-boundary-charts, thm-kernel-of-the-trace-is-w-one-p-zero, def-countable-choice, def-axiom-of-choice]
justified_by: []
forward_refs: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (author manuscript, version 11 February 2025; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 10, Section 1 (Theorem 10.1 and Lemma 10.2, comparison) and Chapter 10, Section 2 (Dirichlet uniqueness), printed pp. 223-240 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete author scan, 118 sheets reproducing the 223 printed pages of the manuscript, two logical pages per sheet)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 13, Theorem 4 and its comparison corollaries, printed pp. 147-158 (read in full)"
verification:
  precheck: pass
---

## Statement

Assume Countable Choice and the Axiom of Choice. Let $n\ge2$, let $\Omega\subset\mathbb R^n$ be a bounded $C^1$ domain, and let $L,a$ be as in [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]] with real $L^\infty$ coefficients, ellipticity $\theta$ and bounds $M_a,M_b,M_c$, satisfying $c\ge0$ a.e. and the weak sign condition of [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]. Let $f\in L^1_{\mathrm{loc}}(\Omega)$ and let $u,v\in H^1(\Omega;\mathbb R)$ be a local weak subsolution resp. weak supersolution of $Lu=f$ with $u\le v$ on $\partial\Omega$, i.e. $(u-v)^+\in H^1_0(\Omega)$.
Then $u\le v$ a.e. on $\Omega$. Consequently:
1. if $b\equiv0$, $c\ge0$ a.e. and $f\in L^q(\Omega)$ with $q>n/2$, then every weak solution of $Lu=f$ with $u\le0$ on $\partial\Omega$ satisfies $\operatorname{ess\,sup}_\Omega u\le C\|f^+\|_{L^q(\Omega)}$ with the constant of [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]];
2. if $b\equiv0$, $c\ge0$ a.e. and $f=0$, then two weak solutions of $Lu=0$ with the same trace in $H^{1/2}(\partial\Omega)$ ([[def-weak-dirichlet-solution-for-a-divergence-form-operator]]) agree a.e. on $\Omega$; in particular the homogeneous Dirichlet problem has at most one weak solution for each admissible boundary datum.

## Facts & Assumptions

**Given:** Countable Choice and the Axiom of Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$; real coefficients satisfying $c\ge0$ and the weak-sign hypotheses of [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]; a datum $f\in L^1_{\mathrm{loc}}(\Omega)$; and a local weak subsolution $u$ and local weak supersolution $v$ of $Lu=f$ with $(u-v)^+\in H^1_0(\Omega)$.

[F1] Linearity of the form: for every real nonnegative $\varphi\in C_c^\infty(\Omega)$, $a(u-v,\varphi)=a(u,\varphi)-a(v,\varphi)$; the form is the one of [[def-uniformly-elliptic-divergence-form-operator]].

[F2] Weak maximum principle: under $c\ge0$ and the weak-sign condition, a real local weak subsolution $W\in H^1(\Omega)$ of $LW=0$ satisfies $\operatorname{ess\,sup}_\Omega W\le\sup_{\partial\Omega}W^+$; with $b=0,c\ge0$ and $g\in L^q(\Omega)$, $q>n/2$, a local subsolution with $W^+\in H^1_0$ satisfies $\operatorname{ess\,sup}_\Omega W\le C\|g^+\|_{L^q}$ ([[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]).

[F3] Boundary order and traces: $\sup_{\partial\Omega}W=\operatorname{ess\,sup}_{\partial\Omega}TW$, and $W^+\in H^1_0(\Omega)$ implies $\sup_{\partial\Omega}W^+=0$; moreover $(u-v)^+\in H^1_0(\Omega)$ is exactly the boundary inequality $u\le v$ on $\partial\Omega$ ([[lem-positive-part-of-a-zero-trace-function-has-zero-trace]], [[def-weak-subsolution-and-supersolution-of-a-divergence-form-equation]], [[thm-kernel-of-the-trace-is-w-one-p-zero]]).

## Proof

**Proof technique:** direct; apply the linearity of the form to the difference and invoke the weak maximum principle.

1.1 The difference is a local weak subsolution of the homogeneous equation. Let $W:=u-v\in H^1(\Omega;\mathbb R)$ and let $\varphi\in C_c^\infty(\Omega;\mathbb R)$ be nonnegative. The local subsolution and supersolution inequalities give $a(u,\varphi)\le\int_\Omega f\varphi$ and $a(v,\varphi)\ge\int_\Omega f\varphi$, hence by [F1] $a(W,\varphi)\le0$. Moreover $(u-v)^+=W^+\in H^1_0(\Omega)$ by hypothesis, so $\sup_{\partial\Omega}W^+=0$ by [F3]. [given, F1, F3]

2.1 Conclusion of the comparison. Step 1.1 exhibits $W$ as a weak subsolution of $LW=0$ whose positive part lies in $H^1_0(\Omega)$; [F2] gives $\operatorname{ess\,sup}_\Omega W\le\sup_{\partial\Omega}W^+=0$, that is, $u\le v$ a.e. on $\Omega$. [step 1.1, F2, F3]

3.1 Consequence 1. If $b\equiv0$, $c\ge0$ and $f\in L^q(\Omega)$ with $q>n/2$, and $u$ is a weak solution with $u\le0$ on $\partial\Omega$, then $u$ is a weak subsolution of $Lu=f$ and $u^+\in H^1_0(\Omega)$ by the boundary hypothesis; the forcing clause of [F2] gives $\operatorname{ess\,sup}_\Omega u\le C\|f^+\|_{L^q(\Omega)}$ with the constant recorded in [[thm-weak-maximum-principle-for-coercive-divergence-form-equations]]. [step 2.1, F2, F3]

4.1 Consequence 2 (uniqueness). Let $u,v$ be weak solutions of $Lu=0$ with the same trace in $H^{1/2}(\partial\Omega)$. Then $(u-v)^+\in H^1_0(\Omega)$ and $(v-u)^+\in H^1_0(\Omega)$ because the traces agree ([[thm-kernel-of-the-trace-is-w-one-p-zero]]), so step 2.1 applied to the pair $(u,v)$ and to $(v,u)$ gives $u\le v$ and $v\le u$ a.e., i.e. $u=v$ a.e. Hence the homogeneous Dirichlet problem has at most one weak solution for each admissible boundary datum, and the comparison statement and its two consequences use only the declared choice principles. [step 2.1, F3] ∎ 
