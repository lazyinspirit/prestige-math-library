---
id: cor-qmd-ac-component-lan-to-bvm
kind: corollary
title: The QMD route uses normalized absolutely continuous likelihoods and a separate uniform LAN premise
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 1
deps:
  - def-axiom-of-choice
  - def-likelihood-density
  - def-qmd-path
  - lem-qmd-normalized-product-likelihood-expansion
  - lem-qmd-singular-and-zero-overlap-masses
  - thm-lan-implies-total-variation-bvm
  - thm-qmd-implies-lan-for-iid
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed exactly as required by the QMD density-version, normalized-proxy, fixed-sequence LAN, and Gaussian-law suppliers. The proof does not assert a full Radon–Nikodym derivative for the whole local alternative."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter Bartlett, Theoretical Statistics, Lecture 23, QMD and local asymptotic normality"
      url: "https://www.stat.berkeley.edu/~bartlett/courses/2013spring-stat210b/notes/23notes.pdf"
    - title: "B. J. K. Kleijn and A. W. van der Vaart, The Bernstein-Von-Mises theorem under misspecification, §2.1"
      url: "https://pure.uva.nl/ws/files/1850322/114737_376240.pdf"
---

## Statement

Assume AC and a common-dominator iid model with supplied jointly measurable,
finite-valued density versions that is QMD at an interior $\theta^*$, with
$P_0=P_{\theta^*}$. Put
$p_0=p_{\theta^*}$, $S=\{p_0>0\}$, and
$\alpha(u)=P_{\theta^*+u}(S^c)$. For all sufficiently small $u$, QMD gives
$\alpha(u)<1$; on $S$ the normalized absolutely
continuous component has $P_0$-density
$$q_u(x)=\frac{p_{\theta^*+u}(x)}{(1-\alpha(u))p_0(x)}.$$
For $u=h/\sqrt n$, suppose that for every compact $H\subset\mathbb R^d$,
the proxy log likelihood satisfies
$$\sup_{h\in H}\left|\sum_{i=1}^n\log q_{h/\sqrt n}(X_i)-h^T\Delta_n+\tfrac12h^TVh\right|=o_{P_0}(1),$$
with $\Delta_n=O_{P_0}(1)$ and $V\succ0$. Let the prior be a proper
Lebesgue density $\pi$ continuous and strictly positive on a neighbourhood of
$\theta^*$, and let $\Pi_n$ be the posterior based on
$\prod_{i=1}^np_\theta(X_i)$ and $\pi$. Assume that its evidence is finite
and positive almost surely and that, for every deterministic
$M_n\to\infty$,
$$\Pi_n\!\left(\|\theta-\theta^*\|_2>n^{-1/2}M_n\mid X_1,\ldots,X_n\right)=o_{P_0}(1).$$
Then the total-variation BvM conclusion holds for the actual posterior. The
compact-uniform proxy-LAN condition is an additional hypothesis:
[[thm-qmd-implies-lan-for-iid]] asserts LAN only along each fixed convergent
local sequence. No full likelihood ratio for the whole local alternative is
asserted.

## Facts & Assumptions

**Given:** AC; a common-dominator QMD path with supplied jointly measurable, finite-valued density versions; the normalized absolutely continuous likelihood proxy; compact-uniform proxy LAN; and the proper prior, finite-positive evidence, and parameter-rate contraction hypotheses stated above.

[A1] [[def-axiom-of-choice]]: AC is assumed for the QMD density-version and likelihood-proxy interfaces.

[F1] [[def-qmd-path]]: The square-root density residual is $o(\|u\|_2)$ in $L^2(\mu)$ at $\theta^*$.

[F2] [[lem-qmd-singular-and-zero-overlap-masses]]: The singular mass $\alpha(u)=P_{\theta^*+u}(p_0=0)$ and zero-overlap mass $\beta(u)=P_0(p_{\theta^*+u}=0)$ are both $o(\|u\|_2^2)$.

[F3] [[lem-qmd-normalized-product-likelihood-expansion]]: For each convergent local sequence $h_n\to h$, the normalized absolutely continuous product proxy has the stated log-LAN expansion and its product law is total-variation close to the full local product law.

[F4] [[thm-qmd-implies-lan-for-iid]]: The QMD-to-LAN conclusion is for each fixed convergent local sequence and does not itself assert compact-uniform LAN.

[F5] [[thm-lan-implies-total-variation-bvm]]: A compact-uniform LAN expansion for the posterior likelihood ratios, together with the prior and contraction hypotheses, yields the stated total-variation BvM conclusion.

## Proof

**Proof technique:** Convert the compact-uniform proxy expansion to the actual posterior likelihood ratio using the singular-mass bound, then apply the general BvM theorem.

**Given:** The hypotheses in the Statement.

1.1 By [A1, F1, F2], $\alpha(u)=o(\|u\|_2^2)$ and $\beta(u)=o(\|u\|_2^2)$. For fixed compact $H$ with $\|h\|_2\le R$, this little-$o$ relation is uniform over $\|u\|_2\le R/\sqrt n$: $n\sup_{h\in H}\alpha(h/\sqrt n)\to0$ and $n\sup_{h\in H}\beta(h/\sqrt n)\to0$. [A1, F1, F2, given, algebra]

2.1 Under $P_0$, each observation lies in $S$ almost surely. On $S$, the actual density ratio is $p_{\theta^*+u}/p_0=(1-\alpha(u))q_u$. For $\alpha\le1/2$, $|\log(1-\alpha)|\le2\alpha$, so step 1.1 gives $\sup_{h\in H}\left|n\log(1-\alpha(h/\sqrt n))\right|\le2n\sup_{h\in H}\alpha(h/\sqrt n)\longrightarrow0.$ Thus the actual posterior likelihood ratios have the same compact-uniform LAN expansion as the normalized proxy. The zero-overlap bound in step 1.1 is recorded separately; compact-uniform positivity is supplied by the proxy-LAN hypothesis, not inferred from pointwise QMD. [F2, F3, F4, given, step 1.1, algebra]

2.2 For each local $u$, write $P_{\theta^*+u}=(1-\alpha(u))\bar P_u+\alpha(u)S_u$, where $\bar P_u=q_uP_0$ is supported on $S$ and $S_u$ is the normalized restriction to $S^c$ when $\alpha(u)>0$. In the product mixture, the all-$\bar P_u$ component has weight $(1-\alpha(u))^n$ and every other component is supported outside $S^n$. Hence $\|P_{\theta^*+u}^{\otimes n}-\bar P_u^{\otimes n}\|_{\rm TV}=1-(1-\alpha(u))^n\le n\alpha(u).$ Step 1.1 makes this $o(1)$ uniformly for $h\in H$. This comparison is between probability laws and does not identify a full Radon–Nikodym derivative for $P_{\theta^*+u}^{\otimes n}$. [F2, F3, given, step 1.1, algebra]

3.1 Step 2.1 supplies the compact-uniform LAN premise for the actual posterior likelihood ratios; the prior, evidence, and posterior-rate hypotheses are those of [F5]. For each $n$, the iid product experiment is dominated by the finite product of the common sigma-finite dominator, with product densities formed from the supplied jointly measurable versions; iterated integration on rectangles and uniqueness of product measures identify these as the densities of the iid laws. Thus the actual ratios in step 2.1 are the likelihood ratios required by [F5]. Applying [F5] with $\delta_n=n^{-1/2}$ proves the BvM limit. The fixed-sequence assertion [F4] alone would not justify the compact supremum used here. [F4, F5, step 2.1, given] ∎
