---
id: "def-closed-convex-obstacle-set-and-variational-inequality"
kind: "definition"
title: "The closed convex obstacle set and the obstacle variational inequality"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 7
deps:
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-distribution"
  - "def-test-function-topology"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-hk-and-hk-zero-notation"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-test-function-space-d-of-an-open-set"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-one-dimensional-trace-truncation-compatibility"
  - "lem-positive-part-of-a-zero-trace-function-has-zero-trace"
  - "thm-lp-trace-operator-on-a-bounded-c-one-domain"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 Section 3.1, Theorem 3.1, printed pp. 26-28 (the admissible set and the obstacle variational inequality)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (the constrained principle in variational form)"
---

## Definition

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, and let $\Omega\subseteq\mathbb R^n$ be a bounded open set of one of the following two kinds ([[def-bounded-c-k-domain-and-boundary-charts]]).

**Trace conventions.** If $n=1$, then $\Omega=(a,b)$ is a bounded interval and $T$ is the endpoint-pair trace of [[lem-one-dimensional-trace-truncation-compatibility]], ordered componentwise. If $n\ge2$, then $\Omega\subset\mathbb R^n$ is a bounded $C^1$ domain and $T$ is the trace operator of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]]. An **obstacle** is a real function $\psi$ with $\psi\in H^1(\Omega;\mathbb R)$ ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]]) such that $T\psi\le0$ — componentwise at the two endpoints when $n=1$, and almost everywhere on $\partial\Omega$ when $n\ge2$. By [[lem-one-dimensional-trace-truncation-compatibility]] for $n=1$ and [[lem-positive-part-of-a-zero-trace-function-has-zero-trace]] for $n\ge2$, this boundary order condition is equivalent to $\psi^+\in H^1_0(\Omega)$.

**The obstacle admissible set** is
$$K:=\{\,v\in H^1_0(\Omega;\mathbb R):v\ge\psi\text{ a.e. on }\Omega\,\},$$
where the inequality $v\ge\psi$ is imposed on almost-everywhere classes and is therefore independent of the chosen representatives ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-wkp-zero-as-a-sobolev-closure]]).

**Data.** Let $a:H^1_0(\Omega)\times H^1_0(\Omega)\to\mathbb R$ be a bounded coercive bilinear form with constants $M,\alpha>0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]) and let $F\in H^{-1}(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]).

**The obstacle variational inequality** is the problem: find $u\in K$ with
$$a(u,\,v-u)\ge F(v-u)\qquad\text{for every }v\in K .$$

**Energy and reaction.** In the symmetric case the associated **energy** is $J(v):=\tfrac12a(v,v)-F(v)$ for $v\in H^1_0(\Omega)$; the **reaction distribution** of a solution $u$ is the distribution on $\Omega$ defined by
$$\Lambda_u(\varphi):=a(u,\varphi)-F(\varphi)\qquad(\varphi\in C_c^\infty(\Omega)),$$
the right-hand side being well defined on real test functions because $C_c^\infty(\Omega;\mathbb R)\subseteq H^1_0(\Omega;\mathbb R)$ ([[def-test-function-space-d-of-an-open-set]]). It is linear and continuous: boundedness gives $|\Lambda_u(\varphi)|\le(M\|u\|_{H^1}+\|F\|_{H^{-1}})\|\varphi\|_{H^1}$, and for tests supported in a compact $S\subseteq\Omega$, $\|\varphi\|_{H^1}\le\sqrt{(n+1)|S|}\max_{|\alpha|\le1}\|D^\alpha\varphi\|_\infty$. Thus $|\Lambda_u|$ is a seminorm continuous on every fixed-support test space and hence continuous for [[def-test-function-topology]]. Its complex-linear extension is $\Lambda_u(\varphi_1+i\varphi_2)=\Lambda_u(\varphi_1)+i\Lambda_u(\varphi_2)$ for real tests $\varphi_1,\varphi_2$, giving a distribution in the convention of [[def-distribution]]; nonnegativity is tested on real nonnegative tests.
