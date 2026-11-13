---
title: Order parameter control of total H mass — Lemma 2.3
status: draft
research_item: lem-expander-sync-lem-2-3
dependency_level: 9
sources:
  references:
    - title: Expander graphs are globally synchronizing — Abdalla, Bandeira, Kassabov,
        Souza, Strogatz, Townsend (2026)
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 6, Section 1.2 and Definition 1.3; p. 11, last paragraph of
        Section 2.1; pp. 13–14, Lemma 2.3 and proof
      statement: Lemma 2.3 states the displayed order-parameter bound for a stable
        state on an (n,d*,alpha)-expander with real nonnegative rho_1.
      hypotheses: Section 2.1 explicitly assumes the graph connected, the first order
        parameter real and nonnegative, and phases represented in (-pi,pi]. The
        reference degree is chosen as an expected average degree. The local
        statement below retains the connected case, and extends it to
        disconnected graphs when d* is nonzero.
      reading_limits: The original PDF page images 11 and 14 and extracted text at
        Section 1.2, Definition 1.3, Section 2.1, and Lemma 2.3 were inspected.
        This reference attributes the article statement and standing hypotheses;
        the local proof uses declared mathematical suppliers. No broader article
        or literature audit is claimed.
---

PDF p. 13: ` Lemma 2.3 and proof `; PDF p. 14: ` Lemma 2.3 and proof `

## Prerequisites

- [def-expander-sync-states](item-def-expander-sync-states)
- [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)
- [def-expander-sync-daido](item-def-expander-sync-daido)
- [def-expander-sync-h](item-def-expander-sync-h)
- [def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices)
- [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)
- [lem-expander-sync-centered-pointwise-phase](item-lem-expander-sync-centered-pointwise-phase)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)
- [math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)


## Statement

Assume countable choice. Let $G=(V,E)$ be a finite undirected graph with $n=|V|>0$, symmetric binary adjacency matrix $A$ and possible self-loops. Let $d^*,\alpha\in\mathbb R$, and suppose $G$ is an $(n,d^*,\alpha)$-expander: with $J$ the all-ones matrix and $\Delta_A=A-(d^*/n)J$, this means $\|\Delta_A\|\le\alpha d^*$ in the Euclidean operator norm. Assume either $d^*\ne0$ or that $G$ is connected, meaning that every two vertices can be joined by a finite path of edges. Let $\theta$ be a stable state, meaning a local minimum of $\mathcal E_G(\theta)=\frac12\sum_{x,y}A_{xy}(1-\cos(\theta_x-\theta_y))$ on the phase torus. Choose representatives $\theta_x\in(-\pi,\pi]$ and suppose the first Daido parameter $\rho_1(\theta)=n^{-1}\sum_xe^{i\theta_x}$ is real and nonnegative. Define $H(t)=\sin^2(|t|)$ for $|t|\le\pi/2$ and $H(t)=1$ for $\pi/2\le|t|\le\pi$. Then $n\alpha^2\ge\rho_1(\theta)^2\sum_{x\in V}H(\theta_x)$.

In particular, the original article's connected-graph statement holds, including $d^*=0$. For the usual positive reference degree, connectedness is unnecessary.

## Facts & Assumptions

[F1] For $d^*>0$, stability and the stated normalization imply that $S_y=\sum_x(\Delta_A)_{xy}e^{i(\theta_x-\theta_y)}$ satisfies $|S_y|^2\ge(d^*\rho_1)^2H(\theta_y)$ for every $y$ ([lem-expander-sync-centered-pointwise-phase](item-lem-expander-sync-centered-pointwise-phase)). This supplier assumes countable choice ([math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)).

[F2] The centered matrix is real symmetric. The Euclidean operator norm satisfies $\|\Delta_A f\|\le\|\Delta_A\|\|f\|$, and the expander hypothesis is $\|\Delta_A\|\le\alpha d^*$ ([def-expander-sync-centered-matrices](item-def-expander-sync-centered-matrices), [def-expander-sync-matrix-order](item-def-expander-sync-matrix-order), [def-expander-sync-adjacency-expander](item-def-expander-sync-adjacency-expander)).

[F3] For real $t$, $e^{it}=\cos t+i\sin t$, $|e^{it}|=1$, $\cos^2t+\sin^2t=1$, and $e^{i(u-v)}=e^{iu}e^{-iv}$ ([def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)). The first order parameter is the mean phasor and satisfies $|\rho_1|\le1$ ([def-expander-sync-daido](item-def-expander-sync-daido), [prop-expander-sync-daido-properties](item-prop-expander-sync-daido-properties)). The two branches defining $H$ therefore give $0\le H(t)\le1$ and $H(0)=0$ ([def-expander-sync-h](item-def-expander-sync-h)).

[F4] The graph adjacency entries are nonnegative and record exactly the edges; its vertex set is finite and nonempty ([def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)). A stable state is the local energy minimum specified in the statement ([def-expander-sync-states](item-def-expander-sync-states)).

[F5] Cauchy–Schwarz gives $|\langle u,v\rangle|\le\|u\|\|v\|$ in a complex inner-product space ([math:thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces](https://alphabetamath.cc/item/thm-cauchy-schwarz-for-real-and-complex-inner-product-spaces)). With the matrix convention $\langle u,v\rangle=\sum_x\overline{u_x}v_x$, this follows also by conjugating the linear-first convention ([def-expander-sync-matrix-order](item-def-expander-sync-matrix-order)).

## Proof

**Given:** The graph, expander bound, stable normalized state and reference parameter in the statement, with either $d^*\ne0$ or connected $G$, under countable choice.

**Goal:** Prove $n\alpha^2\ge\rho_1^2\sum_xH(\theta_x)$, including the original connected zero-reference case.

1.1 First let $d^*>0$ and set $f_x=e^{i\theta_x}$. By [F3], $\|f\|^2=n$. Symmetry and the phasor product identity give $S_y=e^{-i\theta_y}(\Delta_A f)_y$, so $|S_y|^2=|(\Delta_A f)_y|^2$. Summing the pointwise bound yields $(d^*\rho_1)^2\sum_yH(\theta_y)\le\|\Delta_A f\|^2$. [F1, F2, F3, algebra]

1.2 For completeness, let $d^*<0$ and let $u$ be the all-ones vector. Since $\|u\|^2=n$ and $\sum_{x,y}A_{xy}\ge0$, we have $\langle u,\Delta_Au\rangle=\sum_{x,y}A_{xy}-d^*n\ge-d^*n>0$. By Cauchy–Schwarz and the norm bound this quantity is at most $\|u\|\|\Delta_Au\|\le\|\Delta_A\|n\le\alpha d^*n$. Dividing by $d^*n<0$ gives $\alpha\le-1$, hence $\alpha^2\ge1$. Since $0\le\rho_1^2\le1$ and $0\le H\le1$, it follows that $\rho_1^2\sum_xH(\theta_x)\le n\le n\alpha^2$. [F2, F3, F4, F5, algebra]

2.1 By the norm bound, $\|\Delta_A f\|^2\le\|\Delta_A\|^2n\le(\alpha d^*)^2n$. Both quantities being squared are nonnegative by the norm inequality. Combine this with step 1.1 and divide by $(d^*)^2>0$ to obtain the conclusion when $d^*>0$, including $\rho_1=0$. [F2, step 1.1, algebra]

3.1 Finally let $d^*=0$. The norm hypothesis gives $\|A\|\le0$, so $A=0$: for every coordinate vector $e_y$, the norm inequality gives $Ae_y=0$. Thus there are no edges. The statement requires $G$ connected in this case, so its nonempty vertex set has one vertex; two distinct vertices could not be joined by an edge path. For this single vertex the normalized mean phasor $e^{i\theta_1}$ is real, nonnegative and of unit modulus, so equals $1$. Its representative in $(-\pi,\pi]$ is $\theta_1=0$, whence $H(\theta_1)=0$. Therefore the required inequality is $\alpha^2\ge0$. Together with the preceding cases this proves the result. [F2, F3, F4, step 2.1, step 1.2, algebra] ∎

## Source notes

The article's Section 2.1, PDF p. 11, explicitly says: “We assume now that G is a connected graph”. That standing assumption applies to Lemma 2.3. The two-vertex edgeless example in the retained author escalation violates it and does not refute the original article. The positive-reference proof follows the article's pointwise-to-norm argument using a fixed vector $f_x=e^{i\theta_x}$; zero reference degree is handled directly above. The negative-reference case is a harmless extension of the local real-parameter expander definition, although the article selects $d^*$ as an expected average degree.
