---
id: "thm-lipschitz-stability-of-strongly-monotone-variational-inequalities"
kind: "theorem"
title: "Lipschitz stability of strongly monotone variational inequalities"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 3
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-countable-choice"
  - "def-dual-space-of-a-normed-space"
  - "def-hilbert-space"
  - "def-operator-norm"
  - "thm-stampacchia-variational-inequality"
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
    - title: "Nguyen Dong Yen and Bui Trong Kim, Linear operators satisfying the assumptions of some generalized Lax-Milgram theorems, Acta Mathematica Vietnamica 26(3) (2001), 407-417"
      url: "https://math.ac.vn/uploads/files/0103407.pdf"
      locator: "Section 2, Theorems 2.1-2.3 and estimate (2.4), printed pp. 408-409 (Lipschitz stability of the solution map of the variational inequality)"
    - title: "J. T. Oden and N. Kikuchi, Theory of variational inequalities with applications to problems of flow through porous media, International Journal of Engineering Science 18 (1980), 1173-1284"
      url: "https://jtoden.oden.utexas.edu/wp-content/uploads/2013/06/1980-001.TheoryofVariationalInequalitieswithApplicationstoProblemsofFlowThroughPorousMedia.pdf"
      locator: "Chapter 1 Sections 1.2-1.5, printed pp. 1180-1189 (continuous dependence of the variational solution on the data)"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a real Hilbert space ([[def-hilbert-space]]), let $K\subseteq H$ be nonempty, closed and convex, let $a$ be a bounded coercive bilinear form with constants $M,\alpha>0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]), and let $F_1,F_2\in H^*$ with the dual norm $\|\cdot\|_*$ ([[def-dual-space-of-a-normed-space]], [[def-operator-norm]]). Let $u_i\in K$ be the unique solution of the variational inequality with data $F_i$, that is, $a(u_i,v-u_i)\ge F_i(v-u_i)$ for every $v\in K$ ([[thm-stampacchia-variational-inequality]]). Then
$$\alpha\|u_1-u_2\|\le\|F_1-F_2\|_* .$$

## Facts & Assumptions

**Given:** A real Hilbert space $H$, a nonempty closed convex $K\subseteq H$, a bounded coercive bilinear form $a$ with constants $M,\alpha>0$, bounded linear functionals $F_1,F_2$ on $H$, and their unique variational solutions $u_1,u_2\in K$.

[A1] [[def-countable-choice]]: Countable Choice, consumed through the existence-and-uniqueness theorem for the variational inequality.

[F1] [[thm-stampacchia-variational-inequality]]: for each bounded linear functional $F$ on $H$ there is exactly one $u\in K$ with $a(u,v-u)\ge F(v-u)$ for every $v\in K$; in particular $u_1$ and $u_2$ are well defined and satisfy $a(u_1,v-u_1)\ge F_1(v-u_1)$ and $a(u_2,v-u_2)\ge F_2(v-u_2)$ for all $v\in K$.

[F2] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: $a$ is bilinear with $a(u,u)\ge\alpha\|u\|^2$ for every $u\in H$.

[F3] [[def-dual-space-of-a-normed-space]], [[def-operator-norm]]: $H^*$ is the normed space of bounded linear functionals with dual norm $\|G\|_*=\sup\{|G(w)|:\|w\|\le1\}$, so $|G(w)|\le\|G\|_*\|w\|$ for every $w\in H$; in particular $F_1-F_2\in H^*$.

## Proof

**Proof technique:** direct.

**Given:** The setting above, with the unique solutions $u_1,u_2\in K$ of the two variational inequalities.

1.1 Testing the inequality for $u_1$ at the admissible point $v=u_2$ and the inequality for $u_2$ at $v=u_1$ [F1] gives $a(u_1,u_2-u_1)\ge F_1(u_2-u_1)$ and $a(u_2,u_1-u_2)\ge F_2(u_1-u_2)$. [given, A1, F1]

2.1 Adding the two inequalities of step 1.1 and using bilinearity [F2] gives $a(u_1-u_2,u_2-u_1)\ge(F_1-F_2)(u_2-u_1)$, that is, $-a(u_1-u_2,u_1-u_2)\ge(F_1-F_2)(u_2-u_1)$; coercivity [F2] bounds the left-hand side by $-\alpha\|u_1-u_2\|^2$, so $\alpha\|u_1-u_2\|^2\le-(F_1-F_2)(u_2-u_1)=(F_1-F_2)(u_1-u_2)$. [step 1.1, F2, algebra]

3.1 If $u_1=u_2$ the asserted inequality is trivial. Otherwise the dual-norm estimate [F3] gives $(F_1-F_2)(u_1-u_2)\le\|F_1-F_2\|_*\|u_1-u_2\|$, so step 2.1 yields $\alpha\|u_1-u_2\|^2\le\|F_1-F_2\|_*\|u_1-u_2\|$; dividing by the positive number $\|u_1-u_2\|$ gives $\alpha\|u_1-u_2\|\le\|F_1-F_2\|_*$, which is the assertion; Countable Choice was used only through the existence and uniqueness theorem [A1]. [step 2.1, A1, F3, algebra] ∎ 