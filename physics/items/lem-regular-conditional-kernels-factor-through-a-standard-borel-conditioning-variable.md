---
id: "lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable"
kind: "lemma"
title: "Regular conditional kernels factor through a standard borel conditioning variable"
deps: ["def-conditional-law-given-a-random-element", "thm-existence-of-regular-conditional-distributions-for-standard-borel-targets", "thm-probability-law-and-distribution-function-correspondence", "thm-dynkin-pi-lambda", "thm-seven-generators-of-the-borel-sigma-algebra-on-r", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "thm-rationals-countable", "thm-product-of-countable", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
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
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $X$ and $Y$ take values in nonempty standard-Borel spaces $(E,\mathcal S)$ and $(T,\mathcal T)$ on a probability space $(\Omega,\mathcal F,P)$. Let $L$ be a specified regular conditional distribution of $X$ given $\sigma(Y)$, everywhere a probability kernel. There is a probability kernel $K:T\to E$ such that $L(\omega,\cdot)=K(Y(\omega),\cdot)$ simultaneously outside a single null set. In fact, with the stated everywhere-kernel convention, the construction below gives this equality for every $\omega$. Consequently K is a conditional law of X given Y.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] A kernel K is a conditional law when its composition with Y satisfies the regular conditional identities. [[def-conditional-law-given-a-random-element]].

[F2] The repaired in-batch standard-Borel construction codes E bimeasurably onto a Borel B in [0,1]. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]].

[F3] CDFs of Borel probabilities are right-continuous with tails zero and one, and under countable choice every such function has a Borel probability. Uniqueness is proved locally below. [[thm-probability-law-and-distribution-function-correspondence]].

[F4] Measurable evaluations extend from a generating pi-system by a lambda-system argument. [[thm-dynkin-pi-lambda]].

[F5] Rational closed-left cuts generate the real Borel sets by complementation of rational open-right rays. [[thm-seven-generators-of-the-borel-sigma-algebra-on-r]].

[F6] Limsup, infima and limit tests of measurable functions are measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]].

[F7] Rational indices can be enumerated. [[thm-rationals-countable]].

[F8] Finite products of countable index sets are countable by iteration. [[thm-product-of-countable]].

[F9] AC selects countably many measurable preimage lifts and supplies coding and countable-choice CDF existence. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 Fix $e_0\in E$ and the coding $c:E\to B\subseteq[0,1]$ supplied by [F2]. Write $A_q=c^{-1}[B\cap(-\infty,q]]$ and $u_q(\omega)=L(\omega,A_q)$. The family $\{Y^{-1}(D):D\in\mathcal T\}$ is already a sigma-algebra and equals $\sigma(Y)$. For each rational q, integer $n\ge1$ and $0\le k<2^n$, lift the event $\{k2^{-n}\le u_q<(k+1)2^{-n}\}$ to $D_{q,n,k}\in\mathcal T$, and lift $\{u_q=1\}$ to $D_{q,n,2^n}$. Choose this countable family using [F7]–[F9]. Set $$h_{q,n}(y)=\min\!\left(1,\sum_{k=0}^{2^n}k2^{-n}\mathbf1_{D_{q,n,k}}(y)\right),\qquad h_q(y)=\limsup_n h_{q,n}(y).$$ By [F6] these functions are measurable. On the image of Y the lifted bins are disjoint, so $h_{q,n}(Y(\omega))$ is the dyadic lower approximation to $u_q(\omega)$, exact at one. Hence $h_q\circ Y=u_q$ everywhere. [F2, F6, F7, F8, F9]

2.1 Let $T_0$ consist of y for which all rational comparisons $h_q\le h_r$ for $q<r$, tails $h_n\to1$, $h_{-n}\to0$, and right limits $h_{q+1/n}\to h_q$ hold. By [F6]–[F8], this is measurable. For every $\omega$, the pushforward $\eta_\omega(C)=L(\omega,c^{-1}[B\cap C])$ is a Borel probability whose rational CDF values are $u_q(\omega)$. The forward CDF clause of [F3] gives all the tests, so $Y(\omega)\in T_0$. Replace $h_q$ off $T_0$ by $\mathbf1_{\{q\ge0\}}$ and call the result $\widehat h_q$. [step 1.1, F3, F6, F7, F8]

3.1 For $y\in T$, define $F_y(x)=\inf_{q\in\mathbb Q,q>x}\widehat h_q(y)$. As in the real-kernel construction, it is nondecreasing, has tails zero and one, agrees with $\widehat h_r$ at every rational r, and is right-continuous. The existence clause of [F3], under [F9], gives a Borel probability $\nu_y$ with this CDF. It is unique locally: the equality class of two candidates is a lambda-system containing the closed-half-line pi-system, so [F4] and [F5] give equality on all Borel sets. Hence no family choice is needed. Fixed half-line evaluations are measurable by [F6]. The class of Borel C with measurable $y\mapsto\nu_y(C)$ contains those half-lines and the whole line, is closed under complements, and is closed under disjoint unions because sectionwise countable additivity expresses the evaluation as a measurable pointwise limit of partial sums. Thus [F4]–[F6] give all Borel C, producing an everywhere real probability kernel without a measure on T. [step 2.1, F3, F4, F5, F6, F9]

4.1 At $y=Y(\omega)$, the probabilities $\nu_y$ and $\eta_\omega$ agree at every rational closed cut. Their equality class is a lambda-system, and those cuts form a pi-system generating the Borel sets by F5, so F4 gives $\nu_{Y(\omega)}=\eta_\omega$ directly. Thus the measurable set $T_1=\{y:\nu_y(B)=1\}$ contains the full image of Y. Put $$K(y,A)=\begin{cases}\nu_y(c[A]),&y\in T_1,\\ \mathbf1_A(e_0),&y\notin T_1.\end{cases}$$ Bimeasurability makes each evaluation measurable; support on B and the Dirac filler make every section a probability. For every $\omega,A$, $K(Y(\omega),A)=L(\omega,A)$, so the exceptional set is empty and substitution in L's identities proves [F1]. [step 1.1, step 2.1, step 3.1, F1, F2, F4, F5] ∎
