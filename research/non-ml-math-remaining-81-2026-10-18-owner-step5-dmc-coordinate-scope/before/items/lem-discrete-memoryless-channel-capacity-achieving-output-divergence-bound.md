---
id: lem-discrete-memoryless-channel-capacity-achieving-output-divergence-bound
kind: lemma
title: "Capacity-achieving output laws bound every row divergence"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [def-discrete-memoryless-channel-information-capacity, lem-discrete-memoryless-channel-capacity-is-attained, def-discrete-memoryless-channel, def-finite-stochastic-kernel, def-finite-probability-vector, def-finite-kullback-leibler-divergence, def-it-finite-mutual-information, def-it-finite-conditional-entropy, def-qa-35-finite-probability-entropy-and-stochastic-matrices, def-natural-logarithm, thm-it-finite-entropy-chain-rule, thm-logarithm-derivative-and-integral, thm-algebra-of-derivatives, thm-natural-logarithm-laws]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the proof uses a one-dimensional path in a finite simplex."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Yury Polyanskiy and Yihong Wu, Information Theory: From Coding to Learning, Chapter 19 §19.1 and Chapter 22 §22.1"
      url: "https://people.lids.mit.edu/yp/homepage/data/itbook-export.pdf"
    - title: "MIT 6.441 Information Theory, Lecture 8, channel capacity and maximizing capacity"
      url: "https://web.mit.edu/6.441/spring05/lectures/6441Lecture8.pdf"
---

## Statement

Let $P_X^*$ attain $C(W)$ and let $Q^*:=P_X^*W$. If $W(y\mid x)>0$, then $Q^*(y)>0$, and for every $x\in\mathcal X$,
$$D(W(\cdot\mid x)\|Q^*)\le C(W).$$

## Facts & Assumptions

**Given:** A finite DMC $W$ and an input law $P_X^*$ attaining $C(W)$.

[F1] [[lem-discrete-memoryless-channel-capacity-is-attained]]: $I(P_X^*;W)=C(W)$ and $P_X^*$ maximizes $I(P_X;W)$ over the input simplex.

[F2] [[thm-it-finite-entropy-chain-rule]] and [[def-it-finite-conditional-entropy]]: $I(P_X;W)=H(Q_{P_X})-\sum_xP_X(x)H(W(\cdot\mid x))$.

[F3] [[def-discrete-memoryless-channel]] and [[def-finite-stochastic-kernel]] and [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: every channel row is a probability vector, and $H(q)=-\sum_{y:q_y>0}q_y\ln q_y$ with $0\ln0=0$.

[F4] [[def-finite-kullback-leibler-divergence]]: when $\operatorname{supp}P\subseteq\operatorname{supp}Q$, $D(P\|Q)=\sum_{y:P(y)>0}P(y)\ln(P(y)/Q(y))$ in the direction $P$ to $Q$.

[F5] [[thm-logarithm-derivative-and-integral]] and [[thm-algebra-of-derivatives]]: $g(t):=-t\ln t$ is differentiable for $t>0$ with $g'(t)=-\ln t-1$.

[F6] [[thm-natural-logarithm-laws]]: $\ln$ is strictly increasing and onto $\mathbb R$ on $(0,\infty)$, so $\ln t\to-\infty$ as $t\downarrow0$.

## Proof

1.1 Fix $x\in\mathcal X$. Suppose some output reachable from $x$ has zero $Q^*$ mass, and put $a:=\sum_{y:Q^*(y)=0}W(y\mid x)>0$. For $0<t<1$, let $P_t:=(1-t)P_X^*+t\delta_x$ and $Q_t:=P_tW=(1-t)Q^*+tW(\cdot\mid x)$. By [F2] and [F3], the conditional-entropy part of $I(P_t;W)-I(P_X^*;W)$ is linear in $t$. On coordinates with $Q^*(y)>0$, differentiability in [F5] bounds the total entropy change in absolute value by $K_1t$ for some finite $K_1$ and all small $t$. For zero coordinates with $W(y\mid x)>0$, the entropy contribution is exactly $-tW(y\mid x)\ln t-tW(y\mid x)\ln W(y\mid x)$. All terms other than $-ta\ln t$ have absolute value at most $K_2t$ for a finite $K_2$. Since $-\ln t\to+\infty$ by [F6], the information change is positive for sufficiently small $t$, contradicting maximality in [F1]. Every row therefore has support contained in $\operatorname{supp}Q^*$. [F1, F2, F3, F5, F6, given, algebra]

2.1 Now fix any $x$ and use the same segment $P_t=(1-t)P_X^*+t\delta_x$. By step 1.1, $Q^*$ is positive on the support of $W(\cdot\mid x)$, so the right derivative at $t=0$ is finite. Differentiating the entropy expression in [F2] with [F3] and [F5] gives $\left.\frac{d}{dt}I(P_t;W)\right|_{0+}=-\sum_{y:Q^*(y)>0}(W(y\mid x)-Q^*(y))\ln Q^*(y)-H(W(\cdot\mid x))+\sum_uP_X^*(u)H(W(\cdot\mid u))=D(W(\cdot\mid x)\|Q^*)-C(W)$, where the $+1$ derivative terms cancel because both rows sum to one, and the last equality is [F2] and [F4]. [F2, F3, F4, F5, step 1.1, algebra]

3.1 Since $P_X^*$ maximizes information and $P_t$ is feasible for $t\ge0$, the right derivative in step 2.1 is nonpositive. Hence $D(W(\cdot\mid x)\|Q^*)\le C(W)$. The input $x$ was arbitrary, proving the bound for all rows. [F1, step 2.1, algebra] ∎
