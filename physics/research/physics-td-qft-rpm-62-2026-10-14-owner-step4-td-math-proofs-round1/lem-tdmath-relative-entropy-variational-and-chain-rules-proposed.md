---
id: lem-tdmath-relative-entropy-variational-and-chain-rules
kind: lemma
title: Relative Entropy Variational, Chain, and Conditioning Rules
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-axiom-of-choice, def-tdmath-finite-region-relative-entropy, def-standard-borel-space, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-conditional-density-formula, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-dominated-convergence, thm-monotone-convergence-for-the-integral, def-natural-logarithm, thm-natural-logarithm-laws]
justified_by: []
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  def-standard-borel-space: mathematical-premise
  thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality: mathematical-premise
  thm-conditional-density-formula: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-monotone-convergence-for-the-integral: mathematical-premise
  def-natural-logarithm: mathematical-premise
  thm-natural-logarithm-laws: mathematical-premise
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Section 2.3, printed p.184 / PDF p.7, relative entropy, variational identity, and specific entropy"
    - title: "H.-O. Georgii, Probabilistic aspects of entropy, in Entropy"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/Dresden.pdf"
      locator: "Section 3.3, printed pp.40–41 / PDF pp.6–7, relative entropy as information and its variational role"
---

## Statement

Assume AC. Let $P,Q$ be probability measures on one measurable space and use $D(P\Vert Q)$ as defined in [[def-tdmath-finite-region-relative-entropy]]. Then
$$D(P\Vert Q)=\sup_{\phi\in B_b}\left(P(\phi)-\log Q(e^\phi)\right),$$
where $B_b$ is the set of bounded real measurable functions. In particular $D\geq0$. If $T$ is measurable, then $D(P\circ T^{-1}\Vert Q\circ T^{-1})\leq D(P\Vert Q)$.

For standard-Borel spaces $X,Y$, probability reference measures $Q_X,Q_Y$, and a joint probability $P_{XY}\ll Q_X\otimes Q_Y$ with finite $D(P_{XY}\Vert Q_X\otimes Q_Y)$, let $P_{Y|X=x}$ be the conditional law supplied by [[thm-conditional-density-formula]]. Then
$$D(P_{XY}\Vert Q_X\otimes Q_Y)=D(P_X\Vert Q_X)+\int_X D(P_{Y|X=x}\Vert Q_Y)\,P_X(dx).$$
More generally, for random variables $R,S,Y$ taking values in standard-Borel spaces $\mathcal R,\mathcal S,\mathcal Y$, with $R=r(S)$ for a measurable $r:\mathcal S\to\mathcal R$, and a probability reference $Q_Y$ on $\mathcal Y$, the conditional increments
$$G(R):=E_P\!\left[D(P_{Y|R}\Vert Q_Y)\right],\qquad G(S):=E_P\!\left[D(P_{Y|S}\Vert Q_Y)\right]$$
satisfy $0\leq G(R)\leq G(S)$ whenever $D(P_{S,Y}\Vert P_S\otimes Q_Y)<\infty$.

## Facts & Assumptions

**Given:** AC, probability measures, standard-Borel observation spaces where conditioning is used, and the exact finite-region relative entropy definition.

[A1] AC supplies Radon–Nikodym densities on these finite measure spaces. The explicit probability-kernel and event identities of [[thm-conditional-density-formula]] require no AC; that supplier asks for AC only if its conditional-expectation class convention is used ([[def-axiom-of-choice]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[F1] For $P\ll Q$, $h=dP/dQ$ is nonnegative, $Q(h)=1$, unique almost everywhere, and $D(P\Vert Q)=Q(h\log h)$ ([[def-tdmath-finite-region-relative-entropy]]).

[F2] A joint density on a product of sigma-finite probability spaces produces an everywhere conditional probability kernel by dividing by its finite positive marginal density; zero and infinite marginal fibers are filled without division ([[thm-conditional-density-formula]]).

[F3] Nonnegative product-measurable functions have measurable section integrals and Tonelli iterated-integral equality ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] Dominated and monotone convergence justify the bounded truncation limits in the entropy integrals ([[thm-dominated-convergence]], [[thm-monotone-convergence-for-the-integral]]).

[F5] Natural logarithms turn products into sums and $\log 1=0$ ([[def-natural-logarithm]], [[thm-natural-logarithm-laws]]).

## Proof

**Given:** The hypotheses and exact definitions in Facts & Assumptions.

1.1 For $P\ll Q$ with density $h$, the negative part of $h\log h$ is integrable because $-u\log u\leq1/e$ for $0\leq u\leq1$; the density definition is therefore unambiguous. Also $u\log u\geq u-1$ for $u\geq0$, so $D(P\Vert Q)=\int h\log h\,dQ\geq\int(h-1)\,dQ=0$. If $P\not\ll Q$, the defined value is $+\infty\geq0$. [A1, F1, algebra]

2.1 For bounded $\phi$, let $Q_\phi$ have density $e^\phi/Q(e^\phi)$ relative to $Q$. When $P\ll Q$ and $D(P\Vert Q)<\infty$, the density logarithm identity gives $D(P\Vert Q_\phi)=D(P\Vert Q)-P(\phi)+\log Q(e^\phi)\geq0$ by step 1.1. Thus every variational test is at most $D(P\Vert Q)$; the same upper bound is immediate if $D=+\infty$. If $P\not\ll Q$, choose a measurable $Q$-null set $N$ with $P(N)>0$ and use $\phi=t\mathbf1_N$: then $Q(e^\phi)=1$ and $P(\phi)=tP(N)\to\infty$. [step 1.1, F1, F5, construct]

3.1 In the remaining case $P\ll Q$, let $h=dP/dQ$ and set $\phi_m=\max(-m,\min(m,\log h))$, taking $\phi_m=-m$ on $\{h=0\}$. Then $e^{\phi_m}\to h$ and $e^{\phi_m}\leq1+h$, so [F4] gives $Q(e^{\phi_m})\to1$. The negative part of $h\phi_m$ is bounded by $1/e$, and its positive part increases to $(h\log h)^+$; hence [F4] gives $P(\phi_m)=\int h\phi_m\,dQ\to D(P\Vert Q)$, including when the positive entropy part is infinite. Combining this with step 2.1 proves the variational identity. [step 1.1, step 2.1, F1, F4, F5]

4.1 If $T$ is measurable, every bounded test $\psi$ on the target pulls back to the bounded test $\psi\circ T$ on the source, and $Q(e^{\psi\circ T})=(Q\circ T^{-1})(e^\psi)$ while $P(\psi\circ T)=(P\circ T^{-1})(\psi)$. Taking suprema in step 3.1 proves the restriction inequality. [step 3.1, F5]

5.1 Finiteness of $D(P_{S,Y}\Vert P_S\otimes Q_Y)$ gives a joint density and its conditional kernel by [F2]. Pushing forward by $(s,y)\mapsto(r(s),y)$ and using step 4.1 gives finite $D(P_{R,Y}\Vert P_R\otimes Q_Y)$, so [F2] supplies the corresponding conditional kernel for $R$ as well. Thus all conditional densities and references in this clause are defined. For a conditioning observation $R$, applying the variational identity pointwise to the conditional density $k_R(r,y)$ shows $$G(R)=\sup_{\phi\in B_b}\left(E_P\phi(R,Y)-E_P\!\left[\log\int e^{\phi(R,y)}Q_Y(dy)\right]\right),$$ where the tests range over bounded measurable functions of $(R,Y)$. The upper bound follows from step 2.1 for each conditional law; the reverse bound follows by using the jointly measurable bounded truncations of $\log k_R$ from step 3.1 and then [F3]–[F4]. When $R$ is a measurable function of $S$, every test depending on $(R,Y)$ is an admissible test depending on $(S,Y)$ with the same objective value, since the $Q_Y$ normalizer still depends only on $R$. Thus $G(R)\leq G(S)$; nonnegativity is step 1.1 applied conditionally. [A1, F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, step 4.1]

5.2 Suppose $P_{XY}$ has density $h(x,y)$ relative to $Q_X\otimes Q_Y$. Put $h_X(x)=\int h(x,y)Q_Y(dy)$. By [F3], $h_X$ is a density for $P_X$. Where $0<h_X(x)<\infty$, [F2] supplies the conditional density $k(x,y)=h(x,y)/h_X(x)$ relative to $Q_Y$; elsewhere use its supplied filler. On the full $P_X$-measure set of finite positive $h_X$, $h=h_Xk$ and $\log h=\log h_X+\log k$ $P_{XY}$-almost everywhere. Integrating this identity, with nonnegative conditional entropies and finite total entropy, gives the displayed chain rule. If a restriction entropy is infinite, step 4.1 makes the joint entropy infinite as well, so no subtraction of two infinite terms is used. [A1, F1, F2, F3, step 4.1, F5]

6.1 Steps 1.1, 2.1 and 3.1 prove nonnegativity and the variational identity, step 4.1 proves restriction monotonicity, step 5.2 proves the product chain rule, and step 5.1 proves monotonicity under additional conditioning. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.2, step 5.1] ∎
