---
id: "cor-obstacle-complementarity-in-distribution-form"
kind: "corollary"
title: "Obstacle complementarity in distribution form"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 10
deps:
  - "def-axiom-of-choice"
  - "def-bounded-c-k-domain-and-boundary-charts"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "def-countable-choice"
  - "def-distribution"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-hk-and-hk-zero-notation"
  - "def-locally-integrable-function-as-a-regular-distribution"
  - "def-test-function-space-d-of-an-open-set"
  - "def-uniformly-elliptic-divergence-form-operator"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-fundamental-lemma-of-the-calculus-of-variations"
  - "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions"
  - "thm-existence-and-uniqueness-for-the-obstacle-problem"
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
      locator: "Chapter 4 Section 4.2, Theorem 4.2 with (58), printed pp. 36-38 (complementarity in the W^{2,2}_loc class)"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (the constrained principle and its first-order information in distribution form)"
---

## Statement

Assume Countable Choice and the Axiom of Choice ([[def-countable-choice]], [[def-axiom-of-choice]]). Let $\Omega\subseteq\mathbb R^n$ be a bounded $C^1$ domain ([[def-bounded-c-k-domain-and-boundary-charts]]), let $L$ be a uniformly elliptic divergence-form operator with real $L^\infty$ coefficients, and let $a:H^1_0(\Omega;\mathbb R)\times H^1_0(\Omega;\mathbb R)\to\mathbb R$ be the symmetric, bounded and coercive real restriction of its associated form ([[def-uniformly-elliptic-divergence-form-operator]], [[def-bounded-c-k-domain-and-boundary-charts]]); let $f\in L^2(\Omega;\mathbb R)$ and let $F\in H^{-1}(\Omega;\mathbb R)$ be its canonical functional $F(v)=\int_\Omega fv$ on $H^1_0(\Omega;\mathbb R)$, so in particular $F(\varphi)=\int_\Omega f\varphi$ for test functions ([[def-h-minus-one-as-the-dual-of-h-one-zero]], [[def-locally-integrable-function-as-a-regular-distribution]]), let $\psi\in H^1(\Omega;\mathbb R)$ with $T\psi\le0$ ([[def-hk-and-hk-zero-notation]]), and let $u\in K$ be the obstacle solution of [[thm-existence-and-uniqueness-for-the-obstacle-problem]]. For real $\varphi\in C_c^\infty(\Omega;\mathbb R)$ put
$$\Lambda_u(\varphi):=a(u,\varphi)-\int_\Omega f\varphi .$$
Extend $\Lambda_u$ complex linearly as in [[def-closed-convex-obstacle-set-and-variational-inequality]]. Then:

1. $\Lambda_u$ is a nonnegative distribution: $\Lambda_u(\varphi)\ge0$ for every nonnegative test function $\varphi$ ([[def-distribution]], [[def-test-function-space-d-of-an-open-set]]).
2. If in addition $\Lambda_u$ is represented by a function $\zeta\in L^2(\Omega)$, that is $\Lambda_u(\varphi)=\int_\Omega\zeta\varphi$ for every test function, and if $u$ and $\psi$ have continuous representatives on $\Omega$, then $\zeta\ge0$ a.e., $\zeta=0$ a.e. on the open set $\{u>\psi\}$, and $(u-\psi)\zeta=0$ a.e. on $\Omega$.

## Facts & Assumptions

**Given:** The obstacle setting above, with the obstacle solution $u\in K$ of [[thm-existence-and-uniqueness-for-the-obstacle-problem]], the reaction $\Lambda_u(\varphi)=a(u,\varphi)-F(\varphi)$ on $C_c^\infty(\Omega)$, and, for the second assertion, a representation $\Lambda_u(\varphi)=\int_\Omega\zeta\varphi$ with $\zeta\in L^2(\Omega)$ together with continuous representatives of $u$ and $\psi$ on $\Omega$.

[F1] [[def-closed-convex-obstacle-set-and-variational-inequality]], [[thm-existence-and-uniqueness-for-the-obstacle-problem]]: $K=\{v\in H^1_0(\Omega):v\ge\psi\text{ a.e.}\}$ is nonempty, and $u\in K$ satisfies $a(u,v-u)\ge F(v-u)$ for every $v\in K$ ([[def-wkp-zero-as-a-sobolev-closure]]); the inequality and the membership are almost-everywhere statements about classes.

[F2] [[lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions]]: if $\zeta\in L^2(O)$ and $\int_O\zeta\varphi\ge0$ for every nonnegative $\varphi\in C_c^\infty(O)$, then $\zeta\ge0$ a.e. on $O$.

[F3] [[lem-fundamental-lemma-of-the-calculus-of-variations]]: if $g\in L^1_{\mathrm{loc}}(O)$ and $\int_Og\varphi=0$ for every $\varphi\in C_c^\infty(O)$, then $g=0$ a.e. on $O$; in particular $L^2(O)\subseteq L^1_{\mathrm{loc}}(O)$ by the finite measure of the bounded domain.

[F4] [[def-uniformly-elliptic-divergence-form-operator]]: the real Dirichlet form $a$ is used only on $H^1_0(\Omega;\mathbb R)\times H^1_0(\Omega;\mathbb R)$; under the stated hypotheses it is a bounded, coercive symmetric real bilinear form there, and the associated form on $H^1(\Omega)$ restricts to it. In particular, both the obstacle solution and each test function lie in the form domain.

[F5] [[def-h-minus-one-as-the-dual-of-h-one-zero]]: in the real convention, every $f\in L^2(\Omega)$ defines $F(v)=\int_\Omega fv$ in $H^{-1}(\Omega)$, with $|F(v)|\le\|f\|_2\|v\|_2\le\|f\|_2\|v\|_{H^1_0}$ and hence $\|F\|_{H^{-1}}\le\|f\|_2$.

## Proof

**Proof technique:** direct.

**Given:** The setting above, in particular the obstacle solution $u\in K$ and the reaction $\Lambda_u$.

1.1 (Nonnegativity) Let $\varphi\in C_c^\infty(\Omega)$ with $\varphi\ge0$, and put $v:=u+\varphi$. Then $v\in H^1_0(\Omega;\mathbb R)$ because $u\in H^1_0(\Omega;\mathbb R)$ and $\varphi\in C_c^\infty(\Omega;\mathbb R)\subseteq H^1_0(\Omega;\mathbb R)$, and $v\ge u\ge\psi$ a.e. on $\Omega$, so $v\in K$ [F1]. By [F5], $F$ is the continuous $H^{-1}$ functional used by the variational inequality; testing that inequality at $v$ gives $a(u,\varphi)\ge F(\varphi)$, that is $\Lambda_u(\varphi)\ge0$; hence $\Lambda_u$ is a nonnegative distribution. [given, F1, F4, F5]

1.2 (Vanishing on the noncontact set) Assume now that $\Lambda_u(\varphi)=\int_\Omega\zeta\varphi$ for all test functions and that $u,\psi$ have continuous representatives, and put $O:=\{u>\psi\}$, an open subset of $\Omega$ because the difference of the continuous representatives is continuous and positive exactly on $O$. Let $\varphi\in C_c^\infty(O)$ be arbitrary. If $\varphi=0$, then $\Lambda_u(\varphi)=0$. Otherwise its support $K_\varphi$ is a nonempty compact subset of $O$; as $u-\psi$ is continuous and positive there, there is $m>0$ with $u-\psi\ge m$ on $K_\varphi$. Choose $\varepsilon>0$ with $\varepsilon\|\varphi\|_\infty<m$. Then $u\pm\varepsilon\varphi\ge u-\varepsilon\|\varphi\|_\infty\ge\psi$ on $K_\varphi$, while on $\Omega\setminus K_\varphi$ one has $u\pm\varepsilon\varphi=u\ge\psi$ a.e.; also $u\pm\varepsilon\varphi\in H^1_0(\Omega;\mathbb R)$. Hence both competitors belong to $K$ [F1]. Testing the variational inequality at them gives $\varepsilon\Lambda_u(\varphi)\ge0$ and $-\varepsilon\Lambda_u(\varphi)\ge0$, so $\Lambda_u(\varphi)=0$; that is, $\int_\Omega\zeta\varphi=0$ for every $\varphi\in C_c^\infty(O)$. [given, F1, F4]

2.1 For the second assertion, the hypothesis of the representation gives $\int_\Omega\zeta\varphi=\Lambda_u(\varphi)\ge0$ for every nonnegative test function by step 1.1, so [F2] applied with $O=\Omega$ yields $\zeta\ge0$ a.e. on $\Omega$. [step 1.1, F2]

2.2 Step 1.2 gives $\int_\Omega\zeta\varphi=0$ for every $\varphi\in C_c^\infty(O)$ with $\zeta\in L^2(\Omega)\subseteq L^1_{\mathrm{loc}}(\Omega)$; consequently [F3] yields $\zeta=0$ a.e. on $O=\{u>\psi\}$. [step 1.2, F3]

3.1 Finally $(u-\psi)\zeta=0$ a.e. on $\Omega$: on $O$ this follows from $\zeta=0$ a.e. by step 2.2, and on $\Omega\setminus O$ the class $u-\psi$ vanishes a.e. — indeed $u\ge\psi$ a.e. by [F1] while on $\Omega\setminus\{u>\psi\}$ one has $u\le\psi$ pointwise for the continuous representatives, so the set where $u<\psi$ is contained in the complement of $O$ and is null. [step 2.2, F1]

4.1 Step 1.1 proves the nonnegativity of the reaction, step 2.1 the a.e. nonnegativity of its $L^2$ representative, step 2.2 its vanishing on the noncontact set and step 3.1 the complementarity product; all three conclusions of the second assertion use exactly the stated $L^2$-representation and continuity hypotheses, and no product of a distribution with a Sobolev class is formed. [step 1.1, step 2.1, step 2.2, step 3.1] ∎ 