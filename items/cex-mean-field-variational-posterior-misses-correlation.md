---
id: cex-mean-field-variational-posterior-misses-correlation
kind: counterexample
title: "An optimized mean-field law can lose posterior correlation"
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-exact-inferential-target-and-approximation-chain
  - def-probability-measure
  - def-variational-family-and-elbo
  - lem-gaussian-density-integrals-for-supplied-length-measures
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-against-a-density
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-measure-uniqueness-on-a-sigma-finite-pi-system
  - thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-logarithm-derivative-and-integral
  - thm-algebra-of-derivatives
  - cor-differentiable-implies-continuous
  - cor-mean-value-theorem
justified_by: []
proof_strategy: direct
axiom_use: "None beyond the reference length and area measures supplied in the example. Their Borel restrictions satisfy the box-volume contract; finite Darboux bounds, explicit cutoffs, and compact Gaussian integration prove all normalizers and moments without constructing Lebesgue measure or using AC-dependent normal laws."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.3, printed p. 862, and Figure 1, printed p. 863 (PDF pp. 5–6); independent factors, covariance removal, and marginal variance underrepresentation."
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§6.3.1, printed pp. 216–218, PDF pp. 33–35; mean-field factorization and Gaussian variance effect."
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II (2015)"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page note, §§2.3.2–3.2, PDF pp. 3–6; factorized Gaussian ELBO calculations."
---

## Statement refuted

Optimizing an independent Gaussian mean-field family by the evidence lower bound need not recover the marginal variances or dependence structure of the exact inferential target.

## Facts & Assumptions

**Given:** The reference area measure $\lambda_2$ is supplied, as in the example's Lebesgue integration setting. Its Borel restriction has the half-open rectangle volume formula. Define $\lambda_1(A)=\lambda_2(A\times(0,1])$ for Borel $A\subseteq\mathbb R$; this supplies the needed length measure without an existence or completion construction. On $\mathbb R^2$ with the supplied area measure, put $\beta=3/4$ and define the target density
$$\gamma(x,y)=\frac{1}{2\pi\sqrt\beta}\exp\!\left(-\frac{x^2-xy+y^2}{2\beta}\right).$$
This target is an exact inferential target by taking prior density $\gamma$, the sample space $\{\star\}$ with $P_\theta(\{\star\})=1$ for every $\theta$, and likelihood version $\ell_\star\equiv1$. The variational family consists of independent Gaussian factors
$$q(x,y)=g_{m_1,v_1}(x)g_{m_2,v_2}(y),\quad m_j\in\mathbb R,\ v_j>0,\qquad g_{m,v}(z)=(2\pi v)^{-1/2}e^{-(z-m)^2/(2v)}.$$

[F1] A fixed measurable likelihood and positive finite evidence define the exact target; the displayed target density is its prior density when the likelihood is identically one. [[def-exact-inferential-target-and-approximation-chain]]

[F2] ELBO admissibility requires support on the target support and finite log integrals, and $\operatorname{ELBO}(q)=\int q(\log\gamma-\log q)\,d\mu$. [[def-variational-family-and-elbo]]

[F3] Under the supplied length/area measures' box-volume contract, compact bounded Borel Riemann integrals equal the corresponding measure integrals, and the density $g_{m,v}$ has mass one, mean $m$, and variance $v$. The proof uses explicit cutoffs and finite integration by parts and assumes no choice axiom. [[lem-gaussian-density-integrals-for-supplied-length-measures]]

[F4] Tonelli applies to nonnegative product-measurable functions on sigma-finite product spaces. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] Absolutely integrable functions on sigma-finite product spaces may be integrated in either order. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] A nonnegative measurable density defines a measure, which is a probability when its total mass is one. Integrating against that density measure agrees with integrating the product against the base measure. [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[def-probability-measure]], [[thm-integration-against-a-density]]

[F7] Sigma-finite factors have a product measure with the rectangle formula. Measures agreeing on a generating pi-system and its increasing finite-mass exhaustion agree everywhere. Rational half-open boxes generate the Euclidean Borel sigma-algebra. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]], [[thm-measure-uniqueness-on-a-sigma-finite-pi-system]], [[thm-rational-box-generators-of-the-borel-sigma-algebra-on-rn]]

[F8] $\mathcal B(\mathbb R^2)=\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)$. [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

[F9] For $v>0$, $\log'(v)=1/v$, and derivatives obey the sum and scalar-multiple rules. [[thm-logarithm-derivative-and-integral]] [[thm-algebra-of-derivatives]]

[F10] A function differentiable on $(0,\infty)$ is continuous there, and the mean value theorem applies on each compact interval $[u,v]\subset(0,\infty)$ with $u<v$. [[cor-differentiable-implies-continuous]] [[cor-mean-value-theorem]]

## Counterexample

**Given:** The supplied reference measures and explicit target and variational densities above.

1.1 Let $\rho=1/2$, so $\beta=1-\rho^2=3/4$, and write $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$. Countable additivity of the supplied area measure makes $A\mapsto\lambda_2(A\times(0,1])$ a Borel measure, with $\lambda_1((a,b])=b-a$ by rectangle volume. The explicit intervals $(-n,n]$ exhaust $\mathbb R$ and have supplied measure $2n$, so the factor measure is sigma-finite. Its product exists by [F7]. It and the supplied $\lambda_2$ agree on half-open boxes by the volume formula and on the finite-mass exhaustion $(-n,n]^2$; [F7] and [F8] identify their Borel measures. All displayed densities and polynomial moment integrands are continuous and hence Borel: inverse images of open sets are open, and inverse-image preservation of sigma-algebra operations gives the Borel assertion. Thus [F8] makes them product-measurable. The compact comparison and Gaussian integral statements in [F3] now apply to these supplied measures. Direct algebra gives $\gamma(x,y)=\phi(x)g_{\rho x,\beta}(y)=\phi(y)g_{\rho y,\beta}(x)$. Each inner Gaussian density has mass one by [F3], so Tonelli [F4] proves that $\gamma$ has mass one and both marginals $\phi$. By [F3] and density integration [F6], the marginal means are zero and second moments are one. Since $|xy|\le(x^2+y^2)/2$, the cross moment is absolutely integrable. Fubini [F5], [F6] and the mean of $g_{\rho x,\beta}$ in [F3] give $E[XY]=\int x\phi(x)\rho x\,dx=\rho$. Thus the target has marginal variances $1$ and covariance $1/2$. With likelihood one the evidence is $1$, so [F1] identifies $\gamma$ as the exact target. [F1, F3, F4, F5, F6, F7, F8, algebra]

2.1 For $m_j\in\mathbb R$ and $v_j>0$, [F3] supplies the normalized Lebesgue densities $g_{m_j,v_j}$ and their means $m_j$ and variances $v_j$. Tonelli [F4] gives total mass one for $q$. The logarithms of $\gamma$ and $q$ are quadratic; the finite second moments and $|xy|\le(x^2+y^2)/2$ make their absolute values integrable under $q$. Both densities are everywhere positive, so $q$ is admissible by [F2]. Fubini [F5] and [F6] give $E_q[X^2]=m_1^2+v_1$, $E_q[Y^2]=m_2^2+v_2$, and $E_q[XY]=m_1m_2$. [F2, F3, F4, F5, F6, F7, F8, step 1.1, algebra]

3.1 One has $\log\gamma=-\log(2\pi\sqrt\beta)-(x^2-xy+y^2)/(2\beta)$ and $-E_{g_{m_j,v_j}}\log g_{m_j,v_j}=\tfrac12\log(2\pi v_j)+\tfrac12$, using the mean and variance in step 2.1. Substituting these expressions and the second moments from step 2.1 into [F2] yields $\operatorname{ELBO}(q)=C-\frac{m_1^2-m_1m_2+m_2^2+v_1+v_2}{2\beta}+\frac12\log v_1+\frac12\log v_2$, where $C$ is independent of $(m_1,m_2,v_1,v_2)$. The mean quadratic equals $(m_1-\rho m_2)^2+\beta m_2^2$, so its unique minimum and the ELBO-maximizing means are $m_1=m_2=0$. [F2, step 2.1, algebra]

4.1 For either variance the variable part is $r(v)=-v/(2\beta)+\tfrac12\log v$. The identity has derivative $1$ and constants have derivative $0$ by their difference quotients; [F9] then gives that $r$ is differentiable on $(0,\infty)$ with $r'(v)=(\beta-v)/(2\beta v)$. If $0<v<\beta$, the mean value theorem [F10] gives $c\in(v,\beta)$ with $r(\beta)-r(v)=r'(c)(\beta-v)>0$. If $v>\beta$, it gives $c\in(\beta,v)$ with $r(v)-r(\beta)=r'(c)(v-\beta)<0$. Thus $v=\beta=3/4$ is the unique global maximum. The target variance is $1$ and covariance is $1/2$ by step 1.1, whereas the optimizing independent factors have variance $3/4$ and covariance $0$ by step 2.1. Thus the unique ELBO optimizer differs from the exact target. [F9, F10, given, step 1.1, step 2.1, step 3.1, algebra] ∎

