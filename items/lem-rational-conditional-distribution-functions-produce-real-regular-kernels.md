---
id: "lem-rational-conditional-distribution-functions-produce-real-regular-kernels"
kind: "lemma"
title: "Rational conditional distribution functions produce real regular kernels"
deps: ["lem-simultaneous-rational-conditional-distribution-function-versions", "thm-probability-law-and-distribution-function-correspondence", "thm-dynkin-pi-lambda", "thm-seven-generators-of-the-borel-sigma-algebra-on-r", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "lem-rat-embeds-dense", "thm-rationals-countable", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $X$ be a real random variable on $(\Omega,\mathcal F,P)$, and $\mathcal G\subseteq\mathcal F$. Rational versions $G_q$ and $N\in\mathcal G$ as in [[lem-simultaneous-rational-conditional-distribution-function-versions]] determine a probability kernel $K:(\Omega,\mathcal G)\to(\mathbb R,\mathcal B(\mathbb R))$ with

$$K(\omega,(-\infty,x])=\inf_{q\in\mathbb Q,\ q>x}G_q(\omega)\quad(\omega\notin N),\qquad K(\omega,\cdot)=\delta_0\quad(\omega\in N).$$

For every Borel $A$ and $H\in\mathcal G$,

$$\int_H K(\omega,A)\,dP=P(H\cap\{X\in A\}).$$

Thus $K$ is a regular conditional distribution of $X$, everywhere a probability measure.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] There are rational conditional versions with simultaneous bounds, monotonicity, tails and rational right limits; the same lemma locally establishes monotone convergence and bounded decreasing convergence from the repaired simple-integral foundation. [[lem-simultaneous-rational-conditional-distribution-function-versions]].

[F2] Under countable choice, a nondecreasing right-continuous function with tails zero and one has a Borel probability with the prescribed closed-half-line values. Only this existence clause is used; uniqueness is proved locally below. [[thm-probability-law-and-distribution-function-correspondence]].

[F3] A lambda-system containing a pi-system contains its generated sigma-algebra. [[thm-dynkin-pi-lambda]].

[F4] Rational right rays, and therefore their closed-left-ray complements, generate the Borel sets. [[thm-seven-generators-of-the-borel-sigma-algebra-on-r]].

[F5] Countable infima and pointwise limits are measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]].

[F6] AC supplies the preceding version selection and countable choice for CDF existence; unique specification needs no further choice. [[def-axiom-of-choice]].

[F7] Between any two distinct reals lies a rational. [[lem-rat-embeds-dense]].

[F8] The rationals admit a fixed enumeration. [[thm-rationals-countable]].

## Proof

**Proof technique:** direct.

1.1 Use the everywhere good filled data of [F1], writing them again $G_q$. For fixed $\omega$, put $F_\omega(x)=\inf_{q\in\mathbb Q,q>x}G_q(\omega)$. The index set is nonempty by F7 and countable by F8. Its values lie in $[0,1]$, and shrinking it as $x$ increases shows monotonicity. For rational $r$, monotonicity of the data gives $G_r\le F_\omega(r)\le G_{r+1/n}$ for every positive integer $n$, so the rational right-limit condition gives $F_\omega(r)=G_r$. In particular $F_\omega(n)\to1$ and $F_\omega(-n)\to0$, and monotonicity gives both real tail limits. [F1, F7, F8]

2.1 If $x_j\downarrow x$, monotonicity gives a limit $L\ge F_\omega(x)$. For every rational $q>x$, eventually $x_j<q$, so $F_\omega(x_j)\le G_q(\omega)$ and $L\le G_q(\omega)$. Taking the infimum gives $L\le F_\omega(x)$. In particular the sequence $x+1/j$ proves right continuity. By the existence clause of [F2] there is a Borel probability with CDF $F_\omega$. If $\mu,\nu$ are two such probabilities, the equality class $\mathcal C=\{A:\mu(A)=\nu(A)\}$ contains $\mathbb R$ and every closed half-line, is closed under complements by subtraction from the common finite total one, and is closed under countable disjoint unions by countable additivity. It is a lambda-system containing the closed-half-line pi-system, whose generated sigma-algebra is Borel by [F4]; [F3] gives $\mu=\nu$. Thus the probability is locally proved unique and defines $K(\omega,\cdot)$ without a family choice. On $N$ its CDF is $\mathbf1_{\{x\ge0\}}$, so the same uniqueness identifies it with $\delta_0$. [step 1.1, F2, F3, F4, F6]

3.1 For fixed real $x$, [F5] makes $F_\omega(x)$ a $\mathcal G$-measurable countable infimum. Using F7 and the fixed enumeration in F8, choose recursively the first enumerated rational $q_1\in(x,x+1)$ and then the first $q_{j+1}\in(x,\min(q_j,x+1/(j+1)))$; thus $q_j\downarrow x$. Step 2.1 and rational agreement give $G_{q_j}\downarrow F_\omega(x)$. The bounded decreasing-convergence clause locally proved in [F1], applied on $H$, gives $$\int_H F_\omega(x)\,dP=\lim_j\int_H G_{q_j}\,dP=\lim_j P(H\cap\{X\le q_j\})=P(H\cap\{X\le x\}).$$ The last indicator limit includes the point $X=x$. [step 1.1, step 2.1, F1, F5, F7, F8]

4.1 Let $\mathcal D$ be the Borel sets $A$ for which $\omega\mapsto K(\omega,A)$ is $\mathcal G$-measurable and the stated identity holds for every $H\in\mathcal G$. It contains $\mathbb R$. Complements use $1-K(\omega,A)$ and subtraction from the finite total $P(H)$. For pairwise disjoint $A_j\in\mathcal D$, countable additivity of each section gives the union evaluation as the increasing limit of finite partial sums. This is measurable by [F5], and the locally proved monotone convergence in [F1] gives the event identity. Hence $\mathcal D$ is a lambda-system containing the closed-half-line pi-system from step 3.1. By [F3] and [F4] it contains every Borel set. The measurable evaluations and probability sections prove both kernel axioms and the full conditional identity. [step 2.1, step 3.1, F1, F3, F4, F5] ∎
