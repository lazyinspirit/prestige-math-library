---
id: lem-tdmath-periodic-law-local-tame-transfer
kind: lemma
title: Periodic preparation and local-tame transfer from entropy bounds
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 5
deps:
  - def-axiom-of-choice
  - def-ultrafilter-extension-principle
  - def-dependent-choice
  - def-hahn-banach-extension-principle-relative
  - def-tdmath-periodized-empirical-field
  - lem-tdmath-periodized-empirical-field-stationary-density
  - lem-tdmath-relative-entropy-variational-and-chain-rules
  - thm-tdmath-poisson-reference-count-properties
  - thm-tdmath-local-tame-entropy-compactness
  - thm-tdmath-specific-entropy-density
  - thm-dominated-convergence
  - thm-monotone-convergence-for-the-integral
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-ultrafilter-extension-principle: mathematical-premise
  def-dependent-choice: mathematical-premise
  def-hahn-banach-extension-principle-relative: mathematical-premise
  def-tdmath-periodized-empirical-field: mathematical-premise
  lem-tdmath-periodized-empirical-field-stationary-density: mathematical-premise
  lem-tdmath-relative-entropy-variational-and-chain-rules: mathematical-premise
  thm-tdmath-poisson-reference-count-properties: mathematical-premise
  thm-tdmath-local-tame-entropy-compactness: mathematical-premise
  thm-tdmath-specific-entropy-density: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Propositions 7.3–7.4, printed pp.193–194: translation-modulo-box invariance and entropy-controlled local convergence; the exact torus continuation and count-tail argument are developed here."
---

## Statement

Assume AC, the ultrafilter extension principle, DC, and HB as in [[thm-tdmath-local-tame-entropy-compactness]]. Let $L\to\infty$ and let $C_L$ be probability laws on finite configurations in $\Lambda_L=[0,L)^d$, invariant under every translation modulo $L\mathbb Z^d$. Write $Q_L$ for unit-intensity Poisson measure and suppose
$$c_L=L^{-d}D(C_L\Vert Q_L),\qquad \sup_L c_L<\infty.$$
Let $\widetilde C_L$ be the law of the periodic continuation. Then $\widetilde C_L=E_{C_L}R_{L,\omega}$; these laws are stationary and are relatively sequentially compact in $\tau_L$ as $L\to\infty$. Their local counts are uniformly integrable. Along any convergent subsequence with limit $P$,
$$I(P)\leq\liminf_L c_L.$$
If the empirical fields $R_{L,\omega}$ converge in probability in $\tau_L$ to a fixed $P_*$, then $\widetilde C_L\to P_*$ in $\tau_L$, including expectations of every measurable local $f$ with $|f|\leq b(1+N_A)$ for bounded $A$. This concerns periodic continuation, not the zero extension of a configuration outside its fundamental cube.

## Facts & Assumptions

**Given:** The stated choice hypotheses, torus-invariant laws, and bounded entropy densities.

[A1] [[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], and [[def-hahn-banach-extension-principle-relative]]: the explicit hypotheses for the local compactness, marginal extension and sequential compactness supplied by [F4].

[F1] [[def-tdmath-periodized-empirical-field]] and [[lem-tdmath-periodized-empirical-field-stationary-density]]: the empirical field averages translations of the periodic continuation; its barycenter is stationary with intensity $E_{C_L}N/L^d$ when this expectation is finite.

[F2] [[lem-tdmath-relative-entropy-variational-and-chain-rules]]: relative entropy decreases under restriction, is superadditive over disjoint regions against a product reference, and satisfies the bounded-test variational inequality.

[F3] [[thm-tdmath-poisson-reference-count-properties]]: Poisson counts have all positive exponential moments.

[F4] [[thm-tdmath-local-tame-entropy-compactness]]: its local-density weak compactness, consistent marginal extension, and count-tail truncation argument apply under the named choice hypotheses to uniformly bounded entropy on every fixed cube.

[F5] [[thm-tdmath-specific-entropy-density]]: for a stationary law, $I(P)=\sup_{a\in\mathbb N}a^{-d}D(P_{[0,a)^d}\Vert Q_{[0,a)^d})$.

[F6] [[thm-monotone-convergence-for-the-integral]] and [[thm-dominated-convergence]]: bounded count truncations may increase to counts, and Poisson exponential domination justifies the tail limits below.

## Proof

**Given:** The hypotheses and suppliers in Facts & Assumptions.

1.1 For bounded local $f$, torus invariance gives $E_{C_L}f(T_x\omega^{(L)})=E_{C_L}f(\omega^{(L)})$ for every $x$. Integrating over $\Lambda_L$ proves $\widetilde C_L(f)=E_{C_L}R_{L,\omega}(f)$. In particular the continued law is stationary. The entropy inequality with bounded truncations of $aN_{\Lambda_L}$ and [F3] gives finite $E_{C_L}N$, so the intensity assertion of [F1] applies. [given, F1, F2, F3, F6, algebra]

2.1 Fix an integer $a\geq1$ and take $L>a$. The fundamental cube contains $m_L=\lfloor L/a\rfloor^d$ disjoint translates of $W=[0,a)^d$. Their Poisson restrictions are independent and their $C_L$ marginals are identical by torus invariance. Superadditivity gives
$$D((\widetilde C_L)_W\Vert Q_W)\leq D(C_L\Vert Q_L)/m_L=c_LL^d/m_L.$$
For fixed $a$, $L^d/m_L\to a^d$. Translation invariance gives the same bound for every translate of $W$, hence a uniform entropy bound on every bounded region. [F2, step 1.1, algebra]

3.1 On a bounded $A\subset W$, apply the entropy inequality to $t\min(N_A\mathbf1_{\{N_A>K\}},M)$ and let $M\to\infty$. If $C_W$ is the uniform bound from step 2.1, then
$$tE_{\widetilde C_L}[N_A\mathbf1_{\{N_A>K\}}]\leq C_W+\log E_{Q_W}e^{tN_A\mathbf1_{\{N_A>K\}}}.$$
For fixed $t>0$, the logarithm tends to zero as $K\to\infty$ by [F3] and [F6]. First take $t$ large and then $K$ large. This proves uniform count-tail integrability. The local weak-density compactness and consistent marginal extension in [F4] now give subsequential convergence for bounded local tests; the uniform tails upgrade it to $\tau_L$ convergence. Every limit is stationary. Lower semicontinuity of finite-region entropy and step 2.1 imply $a^{-d}D(P_W\Vert Q_W)\leq\liminf c_L$ for every integer $a$ along a subsequence realizing the liminf; [F5] proves the stated entropy bound. [A1, F2, F3, F4, F5, F6, step 2.1, algebra]

4.1 If the empirical fields converge in probability to $P_*$, then for bounded local $f$ the bounded random variables $R_{L,\omega}(f)$ converge in probability to $P_*(f)$, hence their expectations converge. By step 1.1 this is convergence of $\widetilde C_L(f)$. For tame $f$, truncate on $\{N_A\leq K\}$; step 3.1 makes the truncation error uniformly small, and the same is true for the limit law. Taking $L\to\infty$ and then $K\to\infty$ proves convergence for every stated tame observable. [F4, step 1.1, step 3.1, algebra] ∎
