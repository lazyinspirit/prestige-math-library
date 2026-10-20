---
id: def-restricted-boltzmann-machine
kind: definition
title: "Binary restricted Boltzmann machine, exact likelihood gradient, and finite contrastive divergence"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps:
  - def-random-element-and-real-random-variable
  - def-conditional-independence-given-a-sigma-algebra
  - def-expectation-of-a-nonnegative-or-integrable-random-variable
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "The Elements of Statistical Learning, second edition"
      url: "https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf"
      locator: "§17.4.1 equation (17.30) and §17.4.4, printed pp. 639–644"
    - title: "Geoffrey Hinton, A Practical Guide to Training Restricted Boltzmann Machines"
      url: "https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf"
      locator: "§§2–3, printed pp. 3–6"
---

## Definition

Assume AC. Let $m,n\ge1$, visible states $v\in\{0,1\}^m$, hidden states $h\in\{0,1\}^n$, biases $a\in\mathbb R^m$ and $b\in\mathbb R^n$, and weights $W\in\mathbb R^{m\times n}$; a finite bipartite graph is specified by requiring $W_{ij}=0$ at every absent visible-hidden edge. Define $E(v,h)=-a^Tv-b^Th-v^TWh$, $Z=\sum_{v,h}\exp(-E(v,h))$, and $p(v,h)=Z^{-1}\exp(-E(v,h))$; $Z$ is finite and positive. Set $p(v)=\sum_h p(v,h)$, and let $V,H$ be the coordinate variables under $p$. For a finite mass function $q$, write $\mathbb E_q[g]=\sum_xq(x)g(x)$. With $\sigma(t)=(1+\exp(-t))^{-1}$, and $\operatorname{Bernoulli}(u;r)$ the mass on $\{0,1\}$ with probability $r$ at $1$, the layer conditionals factorize as
$$p(h\mid v)=\prod_{j=1}^n\operatorname{Bernoulli}\!\left(h_j;\sigma\!\left(b_j+(W^Tv)_j\right)\right),\qquad p(v\mid h)=\prod_{i=1}^m\operatorname{Bernoulli}\!\left(v_i;\sigma\!\left(a_i+(Wh)_i\right)\right),$$
so each layer is conditionally independent given the other. For one observed $v$, the exact gradients are
$$\frac{\partial\log p(v)}{\partial W_{ij}}=v_i\mathbb E_{p(h\mid v)}[h_j]-\mathbb E_p[V_iH_j],\qquad \frac{\partial\log p(v)}{\partial a_i}=v_i-\mathbb E_p[V_i],\qquad \frac{\partial\log p(v)}{\partial b_j}=\mathbb E_{p(h\mid v)}[h_j]-\mathbb E_p[H_j].$$
These are ambient derivatives in all parameters, evaluated at the specified $W$; when a graph fixes absent-edge weights to zero, retain only allowed-edge derivatives as free parameters. Define $K(v,v')=\sum_h p(h\mid v)p(v'\mid h)$, a row-stochastic transition matrix. Starting from $q_0^v=\delta_v$, let $q_k^v=q_0^vK^k$ for a finite integer $k\ge1$. For one observed $v$, define the finite contrastive-divergence components by
$$\widehat g^{(k)}_{W_{ij}}(v)=v_i\mathbb E_{p(h\mid v)}[h_j]-\sum_{v'}q_k^v(v')v'_i\mathbb E_{p(h\mid v')}[h_j],\quad \widehat g^{(k)}_{a_i}(v)=v_i-\sum_{v'}q_k^v(v')v'_i,\quad \widehat g^{(k)}_{b_j}(v)=\mathbb E_{p(h\mid v)}[h_j]-\sum_{v'}q_k^v(v')\mathbb E_{p(h\mid v')}[h_j].$$
They replace the exact negative-phase expectations under $p(v')$ by expectations under the finite $k$-step law $q_k^v$ and conditional hidden law $p(h\mid v')$. This finite-chain statistic is an approximation; no equality to the exact likelihood gradient or chain-convergence claim is asserted.

## Definition references

[The Elements of Statistical Learning, §17.4.1 and §17.4.4](https://course.ccs.neu.edu/ds4420sp20/readings/ESLII.pdf)

[Hinton, A Practical Guide to Training Restricted Boltzmann Machines, §§2–3](https://www.cs.toronto.edu/~hinton/absps/guideTR.pdf)

## Bipartite architecture diagram

In this instance the left vertices are visible units, the right vertices are hidden units, and each drawn line is an allowed visible-hidden interaction; its weight may be zero for a particular parameter choice. Omitted pairs have weight fixed to zero. The diagram only records the bipartite interaction pattern. The conditional laws and proofs below follow from the displayed finite-state energy formula.

```tikz
\begin{tikzpicture}[every node/.style={draw,circle,minimum size=8mm}]
  \node (v1) at (0,1) {$V_1$};
  \node (v2) at (0,0) {$V_2$};
  \node (h1) at (2,1) {$H_1$};
  \node (h2) at (2,0) {$H_2$};
  \draw (v1)--(h1);
  \draw (v1)--(h2);
  \draw (v2)--(h2);
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The finite binary state spaces, parameters and energy in the Definition, with AC for the library's conditional-independence convention.

[F1] A random element is a measurable map on a probability space, so the visible and hidden coordinate maps are random elements of finite spaces. [[def-random-element-and-real-random-variable]].

[F2] Conditional independence given a sigma-algebra means factorization of conditional expectations for every pair of bounded measurable real functions. [[def-conditional-independence-given-a-sigma-algebra]].

[F3] Expectation of an integrable random variable is its Lebesgue integral; on a finite probability space it is the finite weighted sum used in the Definition. [[def-expectation-of-a-nonnegative-or-integrable-random-variable]].

[A1] AC is the explicit hypothesis of the conditional-independence convention, and here means that every family of nonempty sets has a choice function. [[def-conditional-independence-given-a-sigma-algebra]] [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 The state space $\{0,1\}^m\times\{0,1\}^n$ has $2^{m+n}$ elements. Every term $\exp(-E(v,h))$ is finite and positive, so their finite sum $Z$ is finite and positive; therefore $p$ is a probability mass function. [given, construct, algebra]

2.1 For fixed $v$, put $c_j=b_j+(W^Tv)_j$. Then $\exp(-E(v,h))=\exp(a^Tv)\prod_j\exp(h_jc_j)$, and summing over binary $h$ gives $\exp(a^Tv)\prod_j(1+\exp(c_j))$. Thus $p(h\mid v)$ is the product of Bernoulli masses with success probabilities $\exp(c_j)/(1+\exp(c_j))=\sigma(c_j)$. [given, step 1.1, algebra]

2.2 For fixed $h$, put $d_i=a_i+(Wh)_i$. Then $\exp(-E(v,h))=\exp(b^Th)\prod_i\exp(v_id_i)$, and summing over binary $v$ gives $\exp(b^Th)\prod_i(1+\exp(d_i))$. Hence $p(v\mid h)$ is the product of Bernoulli masses with success probabilities $\exp(d_i)/(1+\exp(d_i))=\sigma(d_i)$. [given, step 1.1, algebra]

2.3 For fixed observed $v$, $p(v)=Z^{-1}\exp(a^Tv)\sum_h\exp(b^Th+v^TWh)$. Differentiating these finite sums gives $\partial_{W_{ij}}\log p(v)=v_i\mathbb E_{p(h\mid v)}[h_j]-\partial_{W_{ij}}\log Z$; the same calculation gives $\partial_{a_i}\log p(v)=v_i-\partial_{a_i}\log Z$ and $\partial_{b_j}\log p(v)=\mathbb E_{p(h\mid v)}[h_j]-\partial_{b_j}\log Z$. [F3, step 1.1, algebra]

3.1 The product conditional mass functions in steps 2.1–2.2 make the conditional expectations of any bounded measurable functions of disjoint coordinates factor into the product of their conditional expectations. By [F1]–[F2], each layer is therefore conditionally independent given the other in the stated sigma-algebra sense. This use of the conditional-expectation convention is the only proof point needing [A1]. [F1, F2, A1, step 2.1, step 2.2]

3.2 Differentiating the finite partition sum yields $\partial_{W_{ij}}\log Z=\sum_{v',h'}v_i'h_j'p(v',h')=\mathbb E_p[V_iH_j]$, $\partial_{a_i}\log Z=\mathbb E_p[V_i]$, and $\partial_{b_j}\log Z=\mathbb E_p[H_j]$. Substitution in step 2.3 gives the exact gradients in the Definition. [F3, step 2.3, algebra]

4.1 For each visible state $v$, $\sum_{v'}K(v,v')=\sum_h p(h\mid v)\sum_{v'}p(v'\mid h)=\sum_hp(h\mid v)=1$. Thus K is a stochastic matrix and each $q_k^v$ is a well-defined finite probability distribution. Replacing the exact negative-phase marginal $p(v')$ in the gradient formulas by $q_k^v(v')$ gives the finite contrastive-divergence statistic defined in the Statement. [step 2.1, step 2.2, step 3.2, algebra] ∎
