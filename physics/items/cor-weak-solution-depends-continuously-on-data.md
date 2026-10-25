---
id: "cor-weak-solution-depends-continuously-on-data"
kind: "corollary"
title: "Weak solutions depend continuously on the data"
status: published
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 8
deps:
  - "def-weak-dirichlet-solution-for-a-divergence-form-operator"
  - "cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting"
  - "cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha"
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-fractional-sobolev-space-on-a-compact-c-one-boundary"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-operator-norm"
  - "def-sobolev-space-wkp-and-its-norm"
  - "lem-elliptic-form-is-well-defined-and-bounded"
  - "lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound"
  - "thm-bounded-right-inverse-for-the-sobolev-trace"
  - "thm-lax-milgram-solvability-for-coercive-divergence-form-equations"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Haim Brezis, Functional Analysis, Sobolev Spaces and Partial Differential Equations (Springer Universitext, 2011, complete 614-page text)"
      url: "https://www.math.toronto.edu/almut/Brezis.pdf"
      locator: "§9.5, continuous dependence of the solution on the data via the Lax--Milgram solution operator, printed pp. 291–298"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "§4.3 and §4.5, the norm control of $H^{-1}$ data and the a priori estimate for weak solutions, printed pp. 95–101"
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, 2020, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "§5.1, Theorem 5.1: the solution map is linear and continuous with $\\|u\\|_{H^1}\\le C\\|f\\|_{L^2}$, printed pp. 101–102"
---

## Statement

Assume the Axiom of Choice and Countable Choice, and take the hypotheses of [[cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting]] with one fixed right inverse $R$ and coercivity constant $\alpha=\alpha_0/(1+C_P^2)$ (the constant displayed there, where $\alpha_0=\theta-\sqrt n\,C_PM_b-C_P^2M_c$). If $u_i$ solve the weak Dirichlet problems with data $(F_i,g_i)\in H^{-1}(\Omega)\times H^{1/2}(\partial\Omega)$, $i=1,2$, then $$\|u_1-u_2\|_{H^1}\le\Big(1+\frac{C_a}{\alpha}\Big)\|R(g_1-g_2)\|_{H^1}+\frac{\|F_1-F_2\|_{H^{-1}}}{\alpha}\le C(\Omega,a)\big(\|F_1-F_2\|_{H^{-1}}+\|g_1-g_2\|_{W^{1/2,2}}\big),$$ where $C_a=nM_a+nM_b+M_c$ is the full $H^1$ bound of the form and $C(\Omega,a)$ depends only on the domain, the coefficients, the coercivity constant and the fixed right inverse. Thus the solution map is Lipschitz on the product of the data spaces, and $u_1=u_2$ when the data agree.

## Facts & Assumptions

**Given:** The Axiom of Choice and Countable Choice; a bounded $C^1$ domain $\Omega\subset\mathbb R^n$, $n\ge2$; a divergence form $a$ bounded on $H^1(\Omega)$ with constant $C_a$ and coercive on $H^1_0(\Omega)$ with constant $\alpha>0$; a fixed bounded right inverse $R$ of the trace with $T\circ R=\mathrm{id}$; and solutions $u_1,u_2\in H^1(\Omega)$ of the weak problems with data $(F_i,g_i)$.

[F1] Each $u_i$ satisfies $Tu_i=g_i$ and $a(u_i,v)=F_i(v)$ for every $v\in H^1_0(\Omega)$, and solve the problem via the lifting construction: $u_i=Rg_i+w_i$ with $w_i\in H^1_0(\Omega)$ ([[cor-inhomogeneous-weak-dirichlet-problem-by-a-trace-lifting]], [[def-weak-dirichlet-solution-for-a-divergence-form-operator]]).

[F2] Linearity and boundedness: the same $C_a$ from [[lem-elliptic-form-is-well-defined-and-bounded]] bounds $a$ on all of $H^1(\Omega)\times H^1(\Omega)$, and hence also on the restriction to $H^1_0(\Omega)$. Thus $v\mapsto(F_1-F_2)(v)-a(R(g_1-g_2),v)$ is a bounded conjugate-linear functional on $H^1_0(\Omega)$ of norm at most $\|F_1-F_2\|_{H^{-1}}+C_a\|R(g_1-g_2)\|_{H^1}$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-operator-norm]]).

[F3] A priori bound: any $w\in H^1_0(\Omega)$ with $a(w,v)=\widetilde F(v)$ for all $v\in H^1_0(\Omega)$ satisfies $\alpha\|w\|_{H^1}\le\|\widetilde F\|_{H^{-1}}$ ([[lem-testing-a-coercive-weak-solution-with-itself-gives-the-energy-bound]], [[thm-lax-milgram-solvability-for-coercive-divergence-form-equations]]).

[F4] Right-inverse bound: $\|R(g_1-g_2)\|_{H^1}\le\|R\|\,\|g_1-g_2\|_{W^{1/2,2}}$ ([[thm-bounded-right-inverse-for-the-sobolev-trace]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]], [[def-sobolev-space-wkp-and-its-norm]]).

[F5] The abstract estimate is the operator-norm bound for the Lax--Milgram solution operator ([[cor-lax-milgram-inverse-has-norm-at-most-one-over-alpha]], [[def-operator-norm]]).





## Proof

1.1 The difference solves a shifted problem: put $g:=g_1-g_2$, $F:=F_1-F_2$ and $w:=(u_1-u_2)-Rg$. Then $Tw=T(u_1-u_2)-TRg=g_1-g_2-g=0$, so $w\in H^1_0(\Omega)$, and for every $v\in H^1_0(\Omega)$ first-slot linearity gives $$a(w,v)=a(u_1,v)-a(u_2,v)-a(Rg,v)=F(v)-a(Rg,v)=:\widetilde F(v).$$ [F1, F2, algebra]

1.2 Bound on the shifted datum: by [F2] the functional $\widetilde F$ is bounded and conjugate-linear with $\|\widetilde F\|_{H^{-1}}\le\|F\|_{H^{-1}}+C_a\|Rg\|_{H^1}$. [F2]

2.1 Energy estimate and conclusion: the a priori bound [F3] applied to $w$ and $\widetilde F$ gives $\|w\|_{H^1}\le\|\widetilde F\|_{H^{-1}}/\alpha$, hence by the triangle inequality and [F4] $$\|u_1-u_2\|_{H^1}\le\|Rg\|_{H^1}+\frac{\|F\|_{H^{-1}}+C_a\|Rg\|_{H^1}}{\alpha}\le\Big(1+\frac{C_a}{\alpha}\Big)\|R\|\,\|g_1-g_2\|_{W^{1/2,2}}+\frac{\|F_1-F_2\|_{H^{-1}}}{\alpha},$$ which is the first display; the second follows by absorbing $1+C_a/\alpha$ and $\|R\|$ into the constant $C(\Omega,a)$. If the data agree then $g=0$, $F=0$, $\widetilde F=0$ and $w=0$, so $u_1=u_2$. [F3, F4, step 1.2, algebra]

3.1 Operator form: the same estimate is the statement that the solution map $(F,g)\mapsto u$ is Lipschitz on $H^{-1}(\Omega)\times H^{1/2}(\partial\Omega)$ with the displayed constant; the abstract mechanism is the norm bound $\|S\|\le1/\alpha$ for the Lax--Milgram solution operator on the zero-boundary part. [F5, step 2.1] ∎ 
