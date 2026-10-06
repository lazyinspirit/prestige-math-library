---
id: "thm-stampacchia-variational-inequality"
kind: "theorem"
title: "Stampacchia's variational inequality"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-bounded-linear-operator"
  - "def-complete-metric-space"
  - "def-countable-choice"
  - "def-hilbert-space"
  - "def-lipschitz-holder-contraction"
  - "def-metric-space"
  - "def-real-and-complex-inner-product-space"
  - "lem-form-to-bounded-operator-by-hilbert-riesz"
  - "lem-hilbert-projection-characterisation-by-a-variational-inequality"
  - "lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive"
  - "thm-banach-fixed-point"
  - "thm-complete-subspace-iff-closed"
  - "thm-projection-onto-a-nonempty-closed-convex-set"
  - "thm-riesz-representation-for-hilbert-space"
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
    - title: "J. T. Oden and N. Kikuchi, Theory of variational inequalities with applications to problems of flow through porous media, International Journal of Engineering Science 18 (1980), 1173-1284"
      url: "https://jtoden.oden.utexas.edu/wp-content/uploads/2013/06/1980-001.TheoryofVariationalInequalitieswithApplicationstoProblemsofFlowThroughPorousMedia.pdf"
      locator: "Chapter 1 Sections 1.2-1.5, printed pp. 1180-1189 (the contraction T(w)=P_K(I-pA)w and its constant (3.15); Theorem 1-3.1)"
    - title: "Nguyen Dong Yen and Bui Trong Kim, Linear operators satisfying the assumptions of some generalized Lax-Milgram theorems, Acta Mathematica Vietnamica 26(3) (2001), 407-417"
      url: "https://math.ac.vn/uploads/files/0103407.pdf"
      locator: "Section 2, Theorems 2.2-2.3 and estimate (2.4), printed pp. 408-409 (Stampacchia variational inequality for bounded coercive bilinear forms)"
    - title: "Anna Nagurney, Variational Inequalities, University of Massachusetts Amherst lecture notes (2002)"
      url: "https://supernet.isenberg.umass.edu/austria_lectures/fvisli.pdf"
      locator: "printed pp. 5-33 (projection Theorem 2; nonexpansiveness Corollary 1; fixed-point equivalence Theorem 3; uniqueness and existence under strong monotonicity, Theorems 6 and 8)"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let $H$ be a real Hilbert space ([[def-hilbert-space]]), let $K\subseteq H$ be nonempty, closed and convex, let $a:H\times H\to\mathbb R$ be a bounded coercive bilinear form with constants $M,\alpha>0$ ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]; no symmetry is assumed), and let $F:H\to\mathbb R$ be a bounded linear functional. Then there is exactly one $u\in K$ with
$$a(u,\,v-u)\ge F(v-u)\qquad\text{for every }v\in K .$$

## Facts & Assumptions

**Given:** A real Hilbert space $H$ with inner product $\langle\cdot,\cdot\rangle$ linear in the first argument, a nonempty closed convex $K\subseteq H$, a bilinear form $a$ bounded by $M$ and coercive with constant $\alpha$, and a bounded linear functional $F$, with Countable Choice available.

[A1] [[def-countable-choice]]: Countable Choice, consumed through the Riesz representation theorem and the projection theorem.

[F1] [[thm-riesz-representation-for-hilbert-space]]: there is a unique $f\in H$ with $F(w)=\langle w,f\rangle$ for every $w\in H$.

[F2] [[lem-form-to-bounded-operator-by-hilbert-riesz]]: there is a unique bounded linear operator $A\in\mathcal B(H)$ with $a(u,v)=\langle Au,v\rangle$ for all $u,v\in H$ and $\|A\|\le M$; coercivity is equivalent to $\langle Au,u\rangle\ge\alpha\|u\|^2$ for every $u\in H$.

[F3] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]], [[def-real-and-complex-inner-product-space]]: $|a(u,v)|\le M\|u\|\|v\|$ and $a(u,u)\ge\alpha\|u\|^2$, and on a real inner product space $\|z-\rho Az\|^2=\|z\|^2-2\rho\langle Az,z\rangle+\rho^2\|Az\|^2$.

[F4] [[thm-projection-onto-a-nonempty-closed-convex-set]], [[lem-metric-projection-onto-a-nonempty-closed-convex-set-is-nonexpansive]]: the metric projection $P_K:H\to K$ is well defined and $1$-Lipschitz on $H$.

[F5] [[thm-complete-subspace-iff-closed]], [[def-complete-metric-space]], [[def-metric-space]]: a closed subset of a complete metric space is complete for the subspace metric; a Hilbert space is complete for its metric.

[F6] [[thm-banach-fixed-point]], [[def-lipschitz-holder-contraction]]: a contraction of a nonempty complete metric space has exactly one fixed point.

[F7] [[lem-hilbert-projection-characterisation-by-a-variational-inequality]]: for $u\in K$ one has $u=P_Kx$ if and only if $\langle u-x,v-u\rangle\ge0$ for every $v\in K$.

[F8] [[def-bounded-linear-operator]]: a bounded linear operator is continuous and $\|Aw\|\le\|A\|\|w\|$ for every $w$.

[F9] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: in the real convention, boundedness and coercivity are defined by their inequalities without requiring symmetry; symmetry is an additional property.

## Proof

**Proof technique:** direct.

**Given:** A real Hilbert space $H$, a nonempty closed convex $K\subseteq H$, a bounded coercive bilinear form $a$ with constants $M,\alpha>0$, a bounded linear functional $F$, and Countable Choice.

1.1 By [F1] fix $f\in H$ with $F(w)=\langle w,f\rangle$ for all $w$; by [F2] fix $A\in\mathcal B(H)$ with $a(u,v)=\langle Au,v\rangle$, $\|A\|\le M$ and $\langle Au,u\rangle\ge\alpha\|u\|^2$ for all $u$. The real bilinear form need not be symmetric by [F9]. [given, A1, F1, F2, F9]

2.1 If $H=\{0\}$, then $K=\{0\}$ and $u=0$ is the unique solution, since $a(0,0)=F(0)=0$. Otherwise choose $z_0\ne0$; boundedness and coercivity give $\alpha\|z_0\|^2\le a(z_0,z_0)\le M\|z_0\|^2$, so $0<\alpha\le M$. Choose $\rho:=\alpha/M^2$ and $q:=\sqrt{1-\alpha^2/M^2}$, which satisfies $0\le q<1$ and $q^2=1-2\rho\alpha+\rho^2M^2$. For $z\in H$ the expansion of [F3] together with $\langle Az,z\rangle\ge\alpha\|z\|^2$ and $\|Az\|\le M\|z\|$ [F2, F8] gives $\|(I-\rho A)z\|^2=\|z\|^2-2\rho\langle Az,z\rangle+\rho^2\|Az\|^2\le(1-2\rho\alpha+\rho^2M^2)\|z\|^2=q^2\|z\|^2$. Hence the map $T(w):=P_K(w-\rho(Aw-f))$ satisfies $\|T(w)-T(w')\|\le\|(I-\rho A)(w-w')\|\le q\|w-w'\|$ for all $w,w'\in K$ by the nonexpansiveness of $P_K$ [F4], that is, $T$ is a contraction of $K$ with constant $q<1$ [F6]. [step 1.1, F2, F3, F4, F6, F8, algebra]

3.1 The set $K$ is a nonempty closed subset of the complete metric space $H$, hence complete for the subspace metric [F5]; the contraction $T:K\to K$ of step 2.1 therefore has exactly one fixed point $u\in K$ by [F6], that is, $u=P_K(u-\rho(Au-f))$. [step 2.1, F5, F6]

4.1 For $u\in K$, the fixed point equation $u=P_K(u-\rho(Au-f))$ is equivalent, by [F7] applied with $x=u-\rho(Au-f)$, to $\langle u-(u-\rho(Au-f)),v-u\rangle\ge0$ for every $v\in K$, that is, to $\rho\langle Au-f,v-u\rangle\ge0$ for every $v\in K$; since $\rho>0$ this is equivalent to $\langle Au-f,v-u\rangle\ge0$, hence to $a(u,v-u)\ge F(v-u)$ for every $v\in K$ by step 1.1. [step 1.1, step 3.1, F7, algebra]

5.1 (Uniqueness and conclusion) Let $u,u'\in K$ both satisfy the variational inequality. Testing the inequality for $u$ at $v=u'$ and the inequality for $u'$ at $v=u$ and adding gives $a(u,u'-u)+a(u',u-u')\ge F(u'-u)+F(u-u')=0$; bilinearity turns the left-hand side into $-a(u-u',u-u')$, so $a(u-u',u-u')\le0$, and coercivity gives $\alpha\|u-u'\|^2\le a(u-u',u-u')\le0$, hence $u=u'$. The zero-dimensional case was settled in step 2.1; in the remaining case steps 3.1 and 4.1 exhibit the unique fixed point $u\in K$ which solves the inequality, and the uniqueness argument just given makes it the only solution. This proves the statement, Countable Choice having entered only through [F1] and [F4] [A1]. [step 4.1, A1, algebra] ∎

