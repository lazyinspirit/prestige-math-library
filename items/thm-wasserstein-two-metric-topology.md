---
id: "thm-wasserstein-two-metric-topology"
kind: theorem
title: "The topology of W2 is narrow convergence plus uniform second-moment tails"
status: published
dependency_level: 3
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
deps: ["def-wasserstein-two-space-and-couplings", "thm-wasserstein-two-is-a-metric", "prop-existence-and-lower-semicontinuity-of-optimal-couplings", "thm-portmanteau-theorem", "def-product-measure-on-sigma-finite-spaces", "thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique", "def-weak-convergence-of-borel-probability-measures", "def-axiom-of-choice"]
justified_by: []
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
proof_strategy: direct
axiom_use: "AC enters through existence of optimal couplings. The finite partition, matching, and residual product coupling argument makes no further selections beyond finite choices."
sources:
  references:
    - title: "Filippo Santambrogio, Optimal Transport for Applied Mathematicians, Chapter 5, §§5.1–5.3"
      url: "https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf"
    - title: "Lénaïc Chizat and Francis Bach, On the Global Convergence of Gradient Descent for Over-parameterized Models using Optimal Transport, Appendix A.1, PDF pp. 12–13"
      url: "https://arxiv.org/pdf/1805.09545"
---
## Statement

Assume the Axiom of Choice. For $d\ge1$, a sequence $(\mu_n)_{n\ge1}$ in $\mathcal P_2(\mathbb R^d)$ indexed by positive integers, and $\mu\in\mathcal P_2(\mathbb R^d)$, $W_2(\mu_n,\mu)\to0$ if and only if $\mu_n$ converges narrowly to $\mu$ and
$$\lim_{R\to\infty}\sup_{n\ge1}\int_{\{|x|>R\}}|x|^2d\mu_n(x)=0.$$
Tightness by itself is insufficient: for $e_1=(1,0,\ldots,0)$ and $\mu_n=(1-n^{-2})\delta_0+n^{-2}\delta_{ne_1}$, the sequence is tight and converges narrowly to $\delta_0$, but $W_2(\mu_n,\delta_0)=1$ for every $n$.

## Statement references

[[def-wasserstein-two-space-and-couplings]]

[[thm-wasserstein-two-is-a-metric]]

[[prop-existence-and-lower-semicontinuity-of-optimal-couplings]]

[[thm-portmanteau-theorem]]

[[def-product-measure-on-sigma-finite-spaces]]

[[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

[[def-weak-convergence-of-borel-probability-measures]]

[[def-axiom-of-choice]]

[Santambrogio, *Optimal Transport for Applied Mathematicians*, Chapter 5](https://math.univ-lyon1.fr/~santambrogio/OTAM-cvgmt.pdf)

[Chizat and Bach, Appendix A.1](https://arxiv.org/pdf/1805.09545)

## Facts & Assumptions

**Given:** AC, $d\ge1$, a sequence $(\mu_n)_{n\ge1}$ indexed by positive integers, and a probability $\mu$, all with finite second moments.

[F1] Under AC, each pair has an optimal coupling, and $W_2$ is the metric defined by the infimum of the quadratic coupling cost. [[def-wasserstein-two-space-and-couplings]] [[prop-existence-and-lower-semicontinuity-of-optimal-couplings]] [[def-axiom-of-choice]]

[F2] Narrow convergence means convergence of integrals of every bounded continuous function; the portmanteau theorem gives convergence on every Borel set whose boundary has limit measure zero. [[def-weak-convergence-of-borel-probability-measures]] [[thm-portmanteau-theorem]]

[F3] Finite Borel measures have product measures; for probability residuals, the product has those residuals as marginals. [[def-product-measure-on-sigma-finite-spaces]] [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]]

## Proof
1.1 Suppose $W_2(\mu_n,\mu)\to0$. For each $n$ choose an optimal coupling $\pi_n$ and regard its coordinates as $X_n,Y$ with laws $\mu_n,\mu$. The cost gives $\int|X_n-Y|^2d\pi_n\to0$. For bounded continuous $\varphi$, choose a ball $B(0,K)$ with $\mu(B(0,K)^c)$ small. On the event $|Y|\le K$ and $|X_n-Y|\le\delta<1$, both points lie in the compact ball $\overline B(0,K+1)$, where $\varphi$ is uniformly continuous. The complement has probability at most $\mu(B(0,K)^c)+\delta^{-2}\int|X_n-Y|^2d\pi_n$. First choose $K$, then $δ$, and then $n$; the boundedness of $\varphi$ shows $\int\varphi d\mu_n-\int\varphi d\mu\to0$. Thus $\mu_n\Rightarrow\mu$. [given, F1, F2]

1.2 Conversely suppose narrow convergence and the stated uniform tail condition. Fix $\varepsilon>0$. Choose $R$ so that the second-moment tails outside $Q=[-R,R]^d$ of all $\mu_n$ and of $\mu$ are less than $\varepsilon$; the tail of $\mu$ vanishes because $\mu\in\mathcal P_2$. Enlarge R slightly if necessary so its coordinate faces have zero $\mu$-mass. Partition each coordinate interval $[-R,R]$ by finitely many levels that are not atoms of the corresponding one-dimensional marginal of $\mu$, with mesh small enough that each resulting rectangular cell has diameter at most $\varepsilon$. Such levels exist because each probability has at most countably many atoms. Together with $Q^c$, these cells form a finite Borel partition $(C_i)_{i=0}^N$ whose boundaries have $\mu$-measure zero. By [F2], $a_{n,i}:=\mu_n(C_i)\to a_i:=\mu(C_i)$ for each $i$. [given, F2]

2.1 Write $Z_n=X_n-Y$ and $a_n=\int|Z_n|^2d\pi_n\to0$. For $R>K$, on $\{|X_n|>R\}$ either $|Y|>K$ or $|Z_n|>R-K$. Since $|X_n|^2\le2|Y|^2+2|Z_n|^2$, for every $n$, $\int_{|X_n|>R}|X_n|^2d\pi_n\le 2\int_{|Y|>K}|Y|^2d\pi_n+2K^2\frac{a_n}{(R-K)^2}+2a_n.$ Given a target $\eta>0$, first choose K so the first term is below $\eta/4$; then choose N so $a_n<\eta/8$ for $n\ge N$; then choose R>K so the middle term is below $\eta/8$ for all $n\ge N$. The last term is below $\eta/4$. Finally enlarge R so the finitely many tails for $n<N$ are below $\eta$. This proves the required uniform tail limit. [given, F1, step 1.1]

2.2 For each bounded cell $C_i\subset Q$, match mass $r_{n,i}=\min(a_{n,i},a_i)$. If $r_{n,i}>0$, take $r_{n,i}$ times the product of the probability measures $\mu_n|_{C_i}/a_{n,i}$ and $\mu|_{C_i}/a_i$; if $r_{n,i}=0$, use the zero measure. This gives a coupling piece supported on $C_i\times C_i$ with cost at most $\varepsilon^2r_{n,i}$. Subtract its two marginals from $\mu_n$ and $\mu$. The residual measures have equal mass. If that mass is positive, their normalized product, multiplied by that mass, couples them; if it is zero there is no residual piece. The sum is a coupling $\pi_n$ of $\mu_n,\mu$. Its matched cost is at most $\varepsilon^2$. For the residual coupling, $|x-y|^2\le2|x|^2+2|y|^2$. Its residual second moments are bounded by the two tails outside $Q$ plus $dR^2\sum_{i=1}^N|a_{n,i}-a_i|$ on each side: inside a bounded cell, unmatched mass is exactly the positive part of the difference of its two cell masses. Therefore $W_2(\mu_n,\mu)^2\le\int|x-y|^2d\pi_n\le\varepsilon^2+4\varepsilon+4dR^2\sum_{i=1}^N|a_{n,i}-a_i|.$ For this fixed finite partition the sum tends to zero, so $\limsup_nW_2(\mu_n,\mu)^2\le\varepsilon^2+4\varepsilon$. Letting $\varepsilon\downarrow0$ proves $W_2(\mu_n,\mu)\to0$. [F2, F3, step 1.2]

3.1 For the witness, the mass outside a ball of radius $R$ is at most $n^{-2}$ for indices $n>R$ and is zero for indices $n\le R$; hence the family is tight. For bounded continuous $\varphi$, $\int\varphi d\mu_n=(1-n^{-2})\varphi(0)+n^{-2}\varphi(ne_1)\to\varphi(0)$, proving narrow convergence. Every coupling with second marginal $\delta_0$ is concentrated on $\mathbb R^d\times\{0\}$, so its cost is forced to be $\int|x|^2d\mu_n=1$. The asserted failure of W2 convergence follows. [F1, F2, step 1.2] ∎
