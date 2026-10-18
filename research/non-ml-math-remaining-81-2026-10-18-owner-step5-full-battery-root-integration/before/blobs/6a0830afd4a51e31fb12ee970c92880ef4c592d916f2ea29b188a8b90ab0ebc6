---
id: lem-it-classical-wiretap-auxiliary-cardinality
kind: lemma
title: "The finite wiretap auxiliary has cardinality at most |X|"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-it-wiretap-channel, def-it-finite-mutual-information, thm-it-finite-entropy-chain-rule, def-qa-35-finite-probability-entropy-and-stochastic-matrices, lem-natural-logarithm-bounded-by-argument, thm-heine-borel-rn, thm-extreme-value-metric]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the support reduction is finite-dimensional linear algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pending
sources:
  references:
    - title: "Abbas El Gamal and Young-Han Kim, Network Information Theory, arXiv:1001.3404v3"
      url: https://arxiv.org/pdf/1001.3404v3
      locator: "The Wiretap Channel, PDF p. 23-9: the auxiliary formula and |U|≤|X| statement."
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 12"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_12.pdf
      locator: "PDF pp. 2–4: auxiliary variable in the nondegraded wiretap converse."
---

## Statement

For every finite joint law $P_{UX}$ on a finite wiretap channel with input alphabet $\mathcal X$, where $U-X-(Y,Z)$ means $P_{UXYZ}(u,x,y,z)=P_{UX}(u,x)W(y,z\mid x)$, there is another finite auxiliary $\widetilde U$ with $|\widetilde{\mathcal U}|\le|\mathcal X|$ whose value of $I(\widetilde U;Y)-I(\widetilde U;Z)$ is at least $I(U;Y)-I(U;Z)$. Consequently

$$\sup_{P_{U,X}:\,U-X-(Y,Z)}[I(U;Y)-I(U;Z)]$$

is a maximum and may be restricted to $|\mathcal U|\le|\mathcal X|$. For each input law $q$, the single-letter objective $q\mapsto I_q(X;Y)-I_q(X;Z)$ is continuous on the finite probability simplex.

## Facts & Assumptions

**Given:** A finite wiretap channel, a finite auxiliary $U$, and a joint law $P_{UX}$ with the stated Markov factorization.

[F1] [[def-it-wiretap-channel]]: the input alphabet and both output alphabets are finite; conditional on $X$, the marginals $Y$ and $Z$ use the finite DMCs $W_Y$ and $W_Z$.

[F2] [[def-it-finite-mutual-information]]: mutual information is the finite joint-law KL sum in nats.

[F3] [[thm-it-finite-entropy-chain-rule]]: $I(A;B)=H(B)-H(B\mid A)$ for finite variables.

[F4] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: $H(p)=-\sum_{p_i>0}p_i\ln p_i$ with $0\ln0=0$.

[F5] [[lem-natural-logarithm-bounded-by-argument]]: for $t\ge1$, $0\le\ln t\le t-1$.

[F6] [[thm-heine-borel-rn]]: every closed bounded subset of finite-dimensional Euclidean space $\mathbb R^N$, $N\ge1$, is compact.

[F7] [[thm-extreme-value-metric]]: a continuous real-valued function on a nonempty compact metric space attains its maximum.

## Proof

1.1 If $m:=|\mathcal X|=1$, then $X$ is constant and both mutual informations in the objective are zero, so $|\widetilde{\mathcal U}|=1$ suffices. Assume $m\ge2$. For a probability vector $q$ on $\mathcal X$, let $F(q):=I_q(X;Y)-I_q(X;Z).$ By [F2]–[F4] and the finite entropy identity in [F3], $F(q)=H(qW_Y)-H(qW_Z)-\sum_xq(x)\bigl(H(W_Y(\cdot\mid x))-H(W_Z(\cdot\mid x))\bigr).$ The maps $q\mapsto qW_Y$ and $q\mapsto qW_Z$ are finite linear maps. On $0<t\le1$, set $s=t^{-1/2}\ge1$; [F5] gives $0\le-t\ln t=2t\ln s\le2\sqrt t$. Hence $-t\ln t$ extends continuously to $t=0$ with value $0$, so finite entropy and $F$ are continuous on the simplex $\Delta(\mathcal X)$. [F1, F2, F3, F4, F5, given, cases, algebra]

2.1 Write $\lambda_u=P_U(u)>0$, $q_u=P_{X\mid U=u}$, and $\bar q=P_X=\sum_u\lambda_uq_u$, omitting zero-mass $u$. The chain rule [F3] gives $I(U;Y)-I(U;Z)=F(\bar q)-\sum_u\lambda_uF(q_u).$ Indeed, expanding the right side by the entropy formula in step 1.1 leaves $H(Y)-\sum_u\lambda_uH(Y\mid U=u)-H(Z)+\sum_u\lambda_uH(Z\mid U=u)$; the linear conditional-on-$X$ terms cancel because $\bar q=\sum_u\lambda_uq_u$, and the remaining expression is the left side. [F1, F2, F3, step 1.1, algebra]

3.1 Suppose the current posterior mixture has $k>m$ positive weights. The $k$ vectors $(q_u(x_1),\ldots,q_u(x_{m-1}),1)$ lie in $\mathbb R^m$, so there are coefficients $c_u$, not all zero, with $\sum_uc_u=0$ and $\sum_uc_uq_u(x_j)=0$ for $j<m$. Since each $q_u$ sums to one, the same relation holds for the last coordinate $x_m$. The coefficients include both signs. Therefore the weights $\lambda_u+t c_u$ remain nonnegative on a bounded interval $[t_-,t_+]$ with $t_-<0<t_+$; at either endpoint at least one weight is zero, while the total weight and posterior average stay fixed. The average $G(t)=\sum_u(\lambda_u+t c_u)F(q_u)$ is affine in $t$, so at least one endpoint has $G(t)\le G(0)$: otherwise zero, a convex combination of $t_-$ and $t_+$, would have a smaller value than both endpoints. Choose that endpoint and delete its zero weights. This keeps $\bar q$ fixed and does not decrease the wiretap objective in step 2.1. [F1, step 2.1, choose, construct, algebra]

4.1 Repeating step 3.1 finitely many times reduces any finite auxiliary to at most $m$ positive weights, preserving $P_X$ and not decreasing $I(U;Y)-I(U;Z)$. Thus every finite auxiliary is dominated by one with $|\mathcal U|\le m$. [step 3.1, induction]

5.1 The parameter space $\Delta_m\times\Delta(\mathcal X)^m$ of $m$ weights and $m$ posterior laws is a nonempty closed bounded subset of $\mathbb R^{m+m^2}$, since it is described by finitely many coordinate inequalities $0\le t\le1$ and coordinate-sum equalities. It is compact by [F6]. By step 1.1 the objective $F(\bar q)-\sum_{j=1}^m\lambda_jF(q_j)$ is continuous there, including zero weights, so it attains a maximum by [F7]. Step 4.1 shows this maximum equals the supremum over all finite auxiliaries. [F6, F7, step 1.1, step 4.1, algebra] ∎
