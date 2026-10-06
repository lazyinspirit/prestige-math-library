---
id: "thm-existence-and-uniqueness-for-the-obstacle-problem"
kind: "theorem"
title: "Existence and uniqueness for the obstacle problem"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 9
deps:
  - "def-bounded-coercive-and-symmetric-sesquilinear-forms"
  - "def-closed-convex-obstacle-set-and-variational-inequality"
  - "def-countable-choice"
  - "def-axiom-of-choice"
  - "thm-hk-is-a-hilbert-space"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "def-h-minus-one-as-the-dual-of-h-one-zero"
  - "def-hk-and-hk-zero-notation"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed"
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
    - title: "John Andersson, The Obstacle Problem, KTH lecture notes, 16 December 2015 (complete 52-page notes)"
      url: "https://www.kth.se/social/files/5671638ef276544fe6bf8bb4/Lectures_Obstacle_Problem.pdf"
      locator: "Chapter 3 Section 3.1, Theorem 3.1, printed pp. 26-28 (existence and uniqueness of the obstacle minimiser; equivalence with the variational inequality)"
    - title: "J. T. Oden and N. Kikuchi, Theory of variational inequalities with applications to problems of flow through porous media, International Journal of Engineering Science 18 (1980), 1173-1284"
      url: "https://jtoden.oden.utexas.edu/wp-content/uploads/2013/06/1980-001.TheoryofVariationalInequalitieswithApplicationstoProblemsofFlowThroughPorousMedia.pdf"
      locator: "Chapter 1 Sections 1.2-1.3, printed pp. 1180-1187 (energy formulation and equivalence with the variational inequality for symmetric coercive forms)"
---

## Statement

Assume the Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]), inherited from the obstacle setting and Hilbert-space supplier. Let $\Omega$, $\psi$, $K$, $a$ and $F$ be as in [[def-closed-convex-obstacle-set-and-variational-inequality]], with $a$ symmetric as well as bounded and coercive ([[def-bounded-coercive-and-symmetric-sesquilinear-forms]]) and $F\in H^{-1}(\Omega)$ ([[def-h-minus-one-as-the-dual-of-h-one-zero]]), and let $J(v)=\tfrac12a(v,v)-F(v)$ be the energy. Then $J$ attains its infimum on $K$ at exactly one $u\in K$, and $u$ is the unique solution of the obstacle variational inequality
$$a(u,\,v-u)\ge F(v-u)\qquad(v\in K).$$
Equivalently: $u\in K$ minimises $J$ on $K$ if and only if $u$ solves the variational inequality.

## Facts & Assumptions

**Given:** The obstacle setting of [[def-closed-convex-obstacle-set-and-variational-inequality]]: the admissible set $K\subseteq H^1_0(\Omega)$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]]), a symmetric bounded coercive bilinear form $a$ with constants $M,\alpha>0$, a functional $F\in H^{-1}(\Omega)$, and the energy $J(v)=\tfrac12a(v,v)-F(v)$.

[A1] [[def-axiom-of-choice]], [[def-countable-choice]]: the Axiom of Choice and Countable Choice are available, as required by the obstacle setting and Hilbert-space supplier.

[F1] [[lem-the-obstacle-admissible-set-is-closed-convex-and-weakly-closed]]: $K$ is nonempty, convex and closed in the norm of $H^1_0(\Omega)$, hence weakly sequentially closed.

[F2] [[thm-stampacchia-variational-inequality]]: for a nonempty closed convex $K\subseteq H^1_0(\Omega)$ and a bounded coercive bilinear form $a$ (no symmetry needed) there is exactly one $u\in K$ with $a(u,v-u)\ge F(v-u)$ for every $v\in K$.

[F3] [[def-bounded-coercive-and-symmetric-sesquilinear-forms]]: $a$ is bilinear and symmetric with $a(w,w)\ge\alpha\|w\|^2\ge0$ and $|a(w_1,w_2)|\le M\|w_1\|\|w_2\|$ for all $w,w_1,w_2$; consequently $a(u+tw,u+tw)=a(u,u)+2t\,a(u,w)+t^2a(w,w)$ for all real $t$.

[F4] [[def-h-minus-one-as-the-dual-of-h-one-zero]]: $F$ is a bounded linear functional on $H^1_0(\Omega)$, so $F$ is linear and $J$ is a real-valued function on $H^1_0(\Omega)$.

[F5] [[thm-hk-is-a-hilbert-space]], [[def-wkp-zero-as-a-sobolev-closure]], [[lem-closed-subspace-of-a-banach-space-is-banach]]: under the Axiom of Choice, $H^1(\Omega;\mathbb R)$ is a real Hilbert space; its closed linear subspace $H^1_0(\Omega;\mathbb R)$ is complete with the restricted inner product and hence is a real Hilbert space.

## Proof

**Proof technique:** direct.

**Given:** The setting above, with $K$ nonempty closed convex by [F1] and $a$ symmetric bounded coercive.

1.1 By [F5] the space $H^1_0(\Omega;\mathbb R)$ is a real Hilbert space. By [F2] applied to the admissible set $K$ of [F1] there is exactly one $u^*\in K$ with $a(u^*,v-u^*)\ge F(v-u^*)$ for every $v\in K$; call it the variational solution. [given, A1, F1, F2, F5]

1.2 Every variational solution minimises $J$ on $K$: if $u\in K$ satisfies the inequality and $v\in K$ with $w:=v-u$, then $J(v)-J(u)=\tfrac12a(v,v)-\tfrac12a(u,u)-F(w)=\tfrac12a(w,w)+a(u,w)-F(w)$ by the symmetry and bilinearity of [F3], and this is at least $\tfrac{\alpha}{2}\|w\|^2\ge0$ because $a(w,w)\ge\alpha\|w\|^2$ and $a(u,w)-F(w)\ge0$ by the inequality and the linearity of $F$ [F4]. [given, F3, F4]

1.3 Every minimiser solves the variational inequality: let $u$ minimise $J$ on $K$, let $v\in K$, put $w:=v-u$, and for $0<t\le1$ let $v_t:=u+tw\in K$, which lies in $K$ by convexity [F1]. Then $0\le J(v_t)-J(u)=t\bigl(a(u,w)-F(w)\bigr)+\tfrac{t^2}{2}a(w,w)$ by [F3, F4]. If $c:=a(u,w)-F(w)$ were negative, then $a(w,w)\ge0$ would give $0\le c+\tfrac{t}{2}a(w,w)$ for all $t$; choosing $t\le1$ with $ta(w,w)\le|c|$ when $a(w,w)>0$, and any $t$ when $a(w,w)=0$, yields $c+\tfrac{t}{2}a(w,w)\le c+\tfrac{|c|}{2}=\tfrac{c}{2}<0$, a contradiction; hence $c\ge0$, that is $a(u,w)\ge F(w)$. [given, F1, F3, F4, algebra]

2.1 By step 1.1 there is exactly one variational solution $u^*$, and it minimises $J$ by step 1.2. Conversely, if $u\in K$ minimises $J$, then step 1.3 makes $u$ a variational solution, hence $u=u^*$ by the uniqueness in step 1.1. Therefore $J$ attains its infimum on $K$ at exactly one point, namely the variational solution $u^*$, and $u$ minimises $J$ if and only if $u$ solves the variational inequality; the quantitative form $J(v)-J(u^*)\ge\tfrac{\alpha}{2}\|v-u^*\|^2$ of step 1.2 makes the minimiser unique as well. Countable Choice is consumed by [F2]; the Axiom of Choice supplies the obstacle trace conventions of [F1] and the Hilbert-space prerequisite [F5]. [step 1.1, step 1.2, step 1.3, A1] ∎

