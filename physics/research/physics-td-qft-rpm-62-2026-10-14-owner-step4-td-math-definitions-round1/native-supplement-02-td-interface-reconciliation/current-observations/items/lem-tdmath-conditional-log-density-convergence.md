---
id: lem-tdmath-conditional-log-density-convergence
kind: lemma
title: Conditional Log-Density Convergence for the Poisson Reference
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-axiom-of-choice, def-tdmath-poisson-configuration-reference, thm-tdmath-poisson-reference-count-properties, def-tdmath-finite-region-relative-entropy, lem-tdmath-relative-entropy-variational-and-chain-rules, thm-tdmath-specific-entropy-density, thm-conditional-density-formula, thm-uniformly-integrable-martingale-convergence, thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence, thm-monotone-convergence-for-the-integral, thm-fatou-lemma, thm-dynkin-pi-lambda, def-tdmath-local-tame-topology]
justified_by: []
dependency_roles:
  def-tdmath-local-tame-topology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  def-tdmath-poisson-configuration-reference: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  thm-conditional-density-formula: mathematical-premise
  thm-uniformly-integrable-martingale-convergence: mathematical-premise
  thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  thm-dynkin-pi-lambda: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "X.X. Nguyen and H. Zessin, Ergodic theorems for spatial processes"
      url: "https://link.springer.com/content/pdf/10.1007/BF01886869.pdf"
      locator: "Section 6, Theorem 6.6 and proof, printed pp.149–150 / PDF pp.16–17, directed $L^1$ convergence of conditional log densities"
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3, printed p.184 / PDF p.7, specific Poisson-relative entropy and variational formula"
---

## Statement

Assume AC. Let $P\in\mathcal P^1_{\rm stat}(\Omega)$, as defined in [[def-tdmath-local-tame-topology]], have finite specific relative entropy $I(P)=\gamma<\infty$ relative to the unit-intensity reference $Q$ of [[def-tdmath-poisson-configuration-reference]]. Let $C=[0,1)^d$ be the reference cell and order the other unit cells lexicographically; $F_+$ is the set of cells preceding $C$. For each finite $A\subset F_+$ let $k_A$ be the conditional density of the configuration in $C$ given the configuration in $A$, relative to $Q_C$, as supplied by [[thm-conditional-density-formula]]. Then
$$g(A):=E_P[\log k_A]=D(P_{A\cup C}\Vert Q_{A\cup C})-D(P_A\Vert Q_A)$$
is finite, nonnegative, and increasing with finite $A$, with $\sup\{g(A):A\subset F_+\text{ finite}\}=\gamma$. For any increasing finite exhaustion $A_m\uparrow F_+$, the densities $k_{A_m}$ converge in $L^1(P_{F_+}\otimes Q_C)$ to a density $k_\infty$ of $P_{F_+\cup C}$ relative to $P_{F_+}\otimes Q_C$, and
$$\log k_{A_m}\longrightarrow\log k_\infty\quad\text{in }L^1(P).$$
The logarithmic convergence is directed: for every $\varepsilon>0$ some finite $A_m$ satisfies $\sup_{B\supseteq A_m,\ B\subset F_+\text{ finite}}E_P|\log k_B-\log k_\infty|<\varepsilon$.

## Facts & Assumptions

**Given:** AC, dimension $d\geq1$, a stationary law $P$ with $I(P)=\gamma<\infty$, the cell partition and its lexicographic order.

[A1] AC is inherited from the Poisson reference construction and used by the conditional density and uniformly integrable martingale suppliers ([[def-axiom-of-choice]], [[def-tdmath-poisson-configuration-reference]], [[thm-conditional-density-formula]], [[thm-uniformly-integrable-martingale-convergence]]).

[F1] For $P\in\mathcal P^1_{\rm stat}(\Omega)$, finite specific entropy implies every bounded-region restriction has finite relative entropy; its normalized cube entropies converge to $\gamma$ ([[def-tdmath-local-tame-topology]], [[thm-tdmath-specific-entropy-density]]).

[F2] Independent Poisson reference increments, the conditional entropy chain rule, its variational form, and monotonicity under added conditioning ([[thm-tdmath-poisson-reference-count-properties]], [[lem-tdmath-relative-entropy-variational-and-chain-rules]]).

[F3] A nonnegative uniformly integrable martingale converges almost surely and in $L^1$ ([[thm-uniformly-integrable-martingale-convergence]]).

[F4] On a probability space, uniform integrability plus convergence in probability implies $L^1$ convergence ([[thm-uniform-integrability-plus-probability-convergence-implies-l1-convergence]]).

[F5] Monotone convergence and Fatou apply to the nonnegative truncations and entropy densities used below ([[thm-monotone-convergence-for-the-integral]], [[thm-fatou-lemma]]).

[F6] Agreement of finite measures on a generating pi-system implies agreement on the generated sigma-algebra ([[thm-dynkin-pi-lambda]]).

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 Let $A\subset F_+$ be finite. By [F1], $D(P_{A\cup C}\Vert Q_{A\cup C})$ is finite, so the joint density $h_{A,C}$ relative to $Q_A\otimes Q_C$ exists. The marginal density $h_A$ is its $Q_C$ integral. On $0<h_A<\infty$, [F2] gives the conditional density $k_A=h_{A,C}/h_A$ relative to $Q_C$; the exceptional fibers have $P_A$-measure zero. The chain rule in [F2] gives $g(A)=E_P D(P_{C|A}\Vert Q_C)=D(P_{A\cup C}\Vert Q_{A\cup C})-D(P_A\Vert Q_A)$, so $g(A)$ is finite and nonnegative. [A1, F1, F2, construct]

2.1 If $A\subseteq B\subset F_+$ are finite, apply the conditional-increment monotonicity in [F2] to observation of the cell configuration on $A$ and then on $B$. It yields $g(A)\leq g(B)$. [F2, step 1.1]

3.1 To identify the supremum, let $\Lambda_N=[0,N)^d$, the union of $N^d$ unit cells, and order those cells lexicographically. Repeated use of the conditional chain rule decomposes $D(P_{\Lambda_N}\Vert Q_{\Lambda_N})$ as the sum of $g(B_i)$ over its cells $i$, where $B_i$ is the finite set of earlier cells in $\Lambda_N$. Each $B_i$ is a finite subset of $F_+$ after translating cell $i$ to $C$, so $g(B_i)\leq\sup_Ag(A)$ by stationarity and step 2.1. Hence $D(P_{\Lambda_N}\Vert Q_{\Lambda_N})/N^d\leq\sup_Ag(A)$. Conversely, fix finite $A\subset F_+$. For every cell $i$ in the inner cube whose distance from the boundary exceeds the largest coordinate magnitude in $A$, the translated set $i+A$ lies in $B_i$. By step 2.1 and stationarity, $g(B_i)\geq g(A)$. The proportion of these interior cells tends to one, and all other increments are nonnegative by step 1.1. Taking $N\to\infty$ and applying [F1] gives $\gamma\geq g(A)$. Taking the supremum over $A$ proves $\sup_Ag(A)=\gamma$. [A1, F1, F2, step 1.1, step 2.1, construct]

4.1 Choose an increasing sequence of finite pasts $A_m$ exhausting $F_+$ and set $R=P_{F_+}\otimes Q_C$. Lift each $k_{A_m}$ to the common space $(\Omega_{F_+}\times E_C,R)$. Consistency of the conditional densities shows $E_R[k_{A_{m+1}}\mid\mathcal G_m]=k_{A_m}$, where $\mathcal G_m$ is generated by $A_m$ and $C$; also $E_Rk_{A_m}=1$. By step 3.1, $E_R[k_{A_m}\log k_{A_m}]=g(A_m)\leq\gamma$. For $K>1$, splitting at $k_{A_m}=1$ and using $-u\log u\leq1/e$ gives $$\int_{\{k_{A_m}>K\}}k_{A_m}\,dR\leq\frac{\gamma+1/e}{\log K}.$$ Thus these martingale densities are uniformly integrable. By [F3] they converge almost surely and in $L^1(R)$ to $k_\infty\geq0$ with $E_Rk_\infty=1$. [A1, F3, F5, step 3.1, algebra]

5.1 For any finite-past cylinder event and any event in $C$, integrate $k_\infty$ over their product. $L^1(R)$ convergence makes this equal the limit of the same integral against $k_{A_m}$, which is the corresponding joint probability under $P$. These rectangles form a generating pi-system, so [F6] identifies $k_\infty R$ with $P_{F_+\cup C}$. Therefore $k_A=E_R[k_\infty\mid\mathcal G_A]$ for every finite $A\subset F_+$. Fatou applied to $u\log u+1/e\geq0$ gives $D(P_{F_+\cup C}\Vert P_{F_+}\otimes Q_C)\leq\liminf_m g(A_m)=\gamma$. Conversely, its variational supremum contains all finite-past tests, so step 3.1 gives the reverse inequality. Hence $E_P\log k_\infty=\gamma$. [A1, F2, F5, F6, step 3.1, step 4.1]

6.1 The $L^1(R)$ convergence of $k_{A_m}$ implies convergence in $R$-probability. Since the full joint law has density $k_\infty$ relative to $R$, absolute continuity transfers this to convergence in $P$-probability. Also $k_\infty>0$ $P$-almost surely, so continuity of $\log$ on $(0,\infty)$ gives $\log k_{A_m}\to\log k_\infty$ in $P$-probability. For $t\geq1$, $$E_P\!\left[(-\log k_A)^+\mathbf1_{\{(-\log k_A)^+>t\}}\right]=\int_{\{0<k_A<e^{-t}\}}k_A(-\log k_A)\,dR\leq te^{-t}.$$ Thus the negative parts are uniformly integrable; [F4] gives their $L^1(P)$ convergence. [A1, F4, step 4.1, step 5.1, algebra]

7.1 Since $E_P\log k_{A_m}=g(A_m)\to\gamma=E_P\log k_\infty$ and the negative parts converge in $L^1$, the expectations of the positive parts converge as well. These positive parts converge in probability. For nonnegative variables $Y_m\to Y$ in probability with $E Y_m\to E Y<\infty$, bounded truncations satisfy $E(Y_m\wedge K)\to E(Y\wedge K)$: for any $\eta>0$ the difference is at most $\eta+K\,P(|Y_m-Y|>\eta)$. Consequently $E(Y_m-K)^+\to E(Y-K)^+$; choosing $K$ large and then bounding $Y_m\mathbf1_{Y_m>2K}\leq2(Y_m-K)^+$ proves uniform integrability, including the finite initial segment. Applying [F4] gives $L^1$ convergence of the positive parts. Together with the negative parts this proves $\log k_{A_m}\to\log k_\infty$ in $L^1(P)$. [A1, F4, F5, step 6.1, algebra]

8.1 For any finite $B\supseteq A_m$, the tower property gives $k_B=E_R[k_\infty\mid\mathcal G_B]$ and $k_{A_m}=E_R[k_\infty\mid\mathcal G_m]$. Conditional expectation is an $L^1$ contraction, so $$\sup_{B\supseteq A_m}\|k_B-k_\infty\|_{L^1(R)}\leq2\|k_{A_m}-k_\infty\|_{L^1(R)}\longrightarrow0.$$ Absolute continuity of $P=k_\infty R$ transfers this uniform probability convergence to $P$. The negative-part tail bound in step 6.1 is uniform over all finite $B$, while $g(A_m)\leq g(B)\leq\gamma$ by steps 2.1–3.1. The truncation argument in step 7.1 therefore applies to every sequence $B_m\supseteq A_m$ with $m\to\infty$; if the asserted directed $L^1$ convergence were not uniform, choosing a contradicting sequence $B_m$ would violate that argument. This proves the directed form. [A1, F2, F4, step 2.1, step 3.1, step 5.1, step 6.1, step 7.1] ∎

