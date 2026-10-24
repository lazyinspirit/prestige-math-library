---
id: thm-vc-agnostic-sample-complexity
kind: theorem
title: "Agnostic sample complexity for finite-VC ERM"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-vc-pac-learning-criterion
  - thm-vc-entropy-uniform-convergence
  - lem-vc-loss-rademacher-bound
  - def-population-and-empirical-risk
  - lem-population-and-empirical-risk-are-measurable
  - def-axiom-of-choice
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - def-real-exponential-function-and-e
  - thm-exponential-is-strictly-increasing
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification: {}
sources:
  references:
    - title: "Mehryar Mohri, Afshin Rostamizadeh, and Ameet Talwalkar, Foundations of Machine Learning, 2nd ed., Theorems 3.3, 3.5, 3.7, and Corollary 3.19"
      url: "https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1"
    - title: "Peter L. Bartlett and Shahar Mendelson, Rademacher and Gaussian Complexities: Risk Bounds and Structural Results, Theorem 5 and Appendix B"
      url: "https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf"
---

## Statement

Let $(\mathcal X,\Sigma)$ be a nonempty measurable space, let $H$ be a nonempty class of measurable binary classifiers with finite VC dimension $d$, and put $\mathcal Z:=\mathcal X\times\{0,1\}$ with sigma-algebra $\Sigma_{\mathcal Z}:=\Sigma\otimes\mathcal P(\{0,1\})$. Let $P$ be any law on $\mathcal Z$ and let $S=(Z_1,\ldots,Z_m)\sim P^m$ be an IID sample with $m\ge1$. For $h\in H$, put $g_h(x,y):=\mathbf1\{h(x)\ne y\}$, $\mathcal G_H:=\{g_h:h\in H\}$, and $\overline{\mathcal G}_H:=\{1-g:g\in\mathcal G_H\}$. Define $R_P(h):=P\{h(X)\ne Y\}$ and $\widehat R_S(h):=m^{-1}\sum_{i=1}^m g_h(Z_i)$. Let $A$ be a risk-measurable $\eta$-approximate ERM for finite $\eta\ge0$, in the sense that $\widehat R_S(A(S))\le\inf_{h\in H}\widehat R_S(h)+\eta$.

For measurable $g:\mathcal Z\to[0,1]$, write $Pg:=\int g\,dP$ and $P_mg(S):=m^{-1}\sum_{i=1}^m g(Z_i)$. Let $S'=(Z'_1,\ldots,Z'_m)$ be an independent sample with law $P^m$, and write $P'_mg:=P_mg(S')$. Assume the following maps are measurable:
1. $S\mapsto\sup_{g\in\mathcal G_H}(Pg-P_mg(S))$ and $S\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}(P\bar g-P_m\bar g(S))$ on $(\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m})$;
2. $(S,S')\mapsto\sup_{g\in\mathcal G_H}(P'_mg-P_mg(S))$ and $(S,S')\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}(P'_m\bar g-P_m\bar g(S))$ on $(\mathcal Z^m\times\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m}\otimes\Sigma_{\mathcal Z}^{\otimes m})$;
3. for every fixed $\sigma\in\{-1,+1\}^m$, the maps $(S,S')\mapsto\sup_{g\in\mathcal G_H}m^{-1}\sum_{i=1}^m\sigma_i(g(Z'_i)-g(Z_i))$ and $(S,S')\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}m^{-1}\sum_{i=1}^m\sigma_i(\bar g(Z'_i)-\bar g(Z_i))$ on $(\mathcal Z^m\times\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m}\otimes\Sigma_{\mathcal Z}^{\otimes m})$;
4. for every fixed $\sigma\in\{-1,+1\}^m$, the maps $S\mapsto\sup_{g\in\mathcal G_H}m^{-1}\sum_{i=1}^m\sigma_i g(Z_i)$ and $S\mapsto\sup_{\bar g\in\overline{\mathcal G}_H}m^{-1}\sum_{i=1}^m\sigma_i\bar g(Z_i)$ on $(\mathcal Z^m,\Sigma_{\mathcal Z}^{\otimes m})$.

The first pair of maps gives the two one-sided deviation suprema and makes the absolute-deviation supremum measurable. Put $K_0:=3e^2/(e-1)$, $K:=4K_0$, $A_0:=12eK+2$, and $C_{\rm VC}:=3\sqrt{8A_0}(\sqrt{\log A_0}+2\sqrt{\log2})$, where $e:=\exp(1)$ and $\log$ is natural. If these measurability conditions hold and the Axiom of Choice is assumed, then for every $0<\delta<1$, with probability at least $1-\delta$,

$$R_P(A(S))-\inf_{h\in H}R_P(h)\le4C_{\rm VC}\sqrt{\frac{d+1}{m}}+2\sqrt{\frac{\log(2/\delta)}{2m}}+\eta.$$

Consequently, assume additionally that the same rule $A$ is risk-measurable under every law $P$ on $\mathcal Z$ and that conditions 1–4 hold for every such law. For $0<\epsilon<1$ and $0\le\eta\le\epsilon/2$, if

$$m\ge\frac{256C_{\rm VC}^2(d+1)+32\log(4/\delta)}{\epsilon^2},$$

then $A$ is agnostic $(\epsilon,\delta)$-PAC on $H$. If $d=0$, then $H$ contains one function and every $H$-valued rule has excess risk zero without a sample-size condition. These are conditional guarantees for risk-measurable selectors; no exact or approximate ERM existence is asserted.

## Statement references

[[def-vc-pac-learning-criterion]]: defines an $\eta$-approximate ERM and the agnostic PAC criterion for a possibly infinite class.

[[thm-vc-entropy-uniform-convergence]]: supplies the two-sided finite-VC deviation bound used in the comparison.

[Mohri et al., Theorems 3.3, 3.5, 3.7, and Corollary 3.19](https://www.dropbox.com/s/38p0j6ds5q9c8oe/10290.pdf?dl=1): Rademacher generalization and the exact logarithmic VC display.

[Bartlett and Mendelson, Theorem 5 and Appendix B](https://www.jmlr.org/papers/volume3/bartlett02a/bartlett02a.pdf): independent classification-risk comparison in their Rademacher normalization.

## Facts & Assumptions

**Given:** A finite-VC binary class, an IID sample with law $P$, a risk-measurable $\eta$-approximate ERM $A$, $m\ge1$, and $0<\delta<1$.

[F1] The agnostic PAC event is $\{R_P(A(S))-\inf_{h\in H}R_P(h)\le\epsilon\}$, and an $\eta$-approximate ERM obeys $\widehat R_S(A(S))\le\inf_{h\in H}\widehat R_S(h)+\eta$. [[def-vc-pac-learning-criterion]]

[A1] Assume the Axiom of Choice for the concentration result imported through [F2]; the finite entropy estimate itself is choice-free. [[def-axiom-of-choice]]

[F2] Under the Axiom of Choice and all measurability conditions stated in the entropy uniform-convergence theorem, the two-sided deviation is at most $2C_{\rm VC}\sqrt{(d+1)/m}+\sqrt{\log(2/\delta)/(2m)}$ with probability at least $1-\delta$. [[thm-vc-entropy-uniform-convergence]]

[F3] Population and empirical risk are the population error probability and empirical error fraction; all risks lie in $[0,1]$. [[def-population-and-empirical-risk]]

[F4] The natural logarithm is the inverse of the exponential, is strictly increasing, and has $\log1=0$; the exponential is strictly increasing and has $\exp(0)=1$. Thus $e=\exp(1)>1$, $K_0>0$, $K>0$, $A_0>1$, and $C_{\rm VC}>0$; also $0<\delta<1$ gives $\log(4/\delta)>0$. [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-exponential-function-and-e]], [[thm-exponential-is-strictly-increasing]]

## Proof

**Given:** The hypotheses in the Statement.

1.1 If $d=0$, then any two classifiers in $H$ agree at every point, so $H$ contains a single function. Its population risk is the infimum risk, hence every $H$-valued rule has excess risk zero. [F1, F3, given, algebra]

1.2 Suppose $d\ge1$ and write $a_m:=2C_{\rm VC}\sqrt{(d+1)/m}+\sqrt{\log(2/\delta)/(2m)}$. On the event in [F2], [F1] gives $R_P(A(S))\le\widehat R_S(A(S))+a_m\le\inf_{h\in H}\widehat R_S(h)+\eta+a_m$. For every $h\in H$, the same event gives $\widehat R_S(h)\le R_P(h)+a_m$, so $\inf_{h\in H}\widehat R_S(h)\le R_P(h)+a_m$ for every $h$ and therefore $\inf_{h\in H}\widehat R_S(h)\le\inf_{h\in H}R_P(h)+a_m$. Combining proves excess risk at most $2a_m+\eta$. [A1, F1, F2, F3, algebra]

2.1 The event in [F2] has probability at least $1-\delta$, so step 1.2 proves the first inequality. Under the sample-size premise, $2C_{\rm VC}\sqrt{(d+1)/m}\le\epsilon/8$ and $\sqrt{\log(2/\delta)/(2m)}\le\epsilon/8$: the first follows from $m\ge256C_{\rm VC}^2(d+1)/\epsilon^2$, and the second from $m\ge32\log(4/\delta)/\epsilon^2$. Hence $a_m\le\epsilon/4$, and $2a_m+\eta\le\epsilon$ when $\eta\le\epsilon/2$. Under the additional hypotheses for the PAC conclusion, this argument applies to every law $P$ with the same $A,m,\epsilon,\delta$ and $\eta$, so [F1] gives the agnostic PAC criterion. [F1, F2, F4, step 1.2, given, algebra] ∎
