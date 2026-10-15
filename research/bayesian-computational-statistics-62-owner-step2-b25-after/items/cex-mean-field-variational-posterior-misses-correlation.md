---
id: cex-mean-field-variational-posterior-misses-correlation
kind: counterexample
title: "An optimized mean-field law can lose posterior correlation"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-ac-supplies-sequential-choices-for-probability-constructions
  - lem-normal-density-has-total-mass-one
  - lem-normal-location-scale-density
  - lem-normal-location-scale-mean-and-variance
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - thm-borel-products-of-euclidean-spaces-are-euclidean-borel
  - thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets
  - cor-continuous-functions-are-borel-measurable
  - def-exact-inferential-target-and-approximation-chain
  - def-lebesgue-measure-and-the-lebesgue-sigma-algebra
  - def-probability-measure
  - def-variational-family-and-elbo
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-integration-against-a-density
  - thm-tonelli-theorem-for-sigma-finite-product-spaces
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the proved normal-density, location-scale density and moment suppliers; it implies Countable Choice for Lebesgue sigma-finiteness and product-measure identifications. No additional choice is used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "David M. Blei, Alp Kucukelbir, and Jon D. McAuliffe, Variational Inference: A Review for Statisticians (2017)"
      url: "https://www.cs.columbia.edu/~blei/papers/BleiKucukelbirMcAuliffe2017.pdf"
      locator: "§2.3 and Figure 1, PDF pp. 2–3; reverse-KL mean-field correlation and variance underrepresentation."
    - title: "Michael I. Jordan, Zoubin Ghahramani, Tommi S. Jaakkola, and Lawrence K. Saul, An Introduction to Variational Methods for Graphical Models (1999)"
      url: "https://people.eecs.berkeley.edu/~jordan/papers/variational-intro.pdf"
      locator: "§6.3.1, printed pp. 216–218, PDF pp. 33–35; mean-field factorization and Gaussian variance effect."
    - title: "Ronghuo Zheng, Zhiting Hu, and Yuntian Deng, 10-708 Probabilistic Graphical Models, Lecture 13: Variational Inference II (2015)"
      url: "https://www.cs.cmu.edu/~epxing/Class/10708-15/notes/10708_scribe_lecture13.pdf"
      locator: "Complete 9-page note, §§2.3.2–3.2, PDF pp. 3–6; factorized Gaussian ELBO calculations."
---

## Statement refuted

Under AC, optimizing an independent Gaussian mean-field family by the evidence lower bound need not recover the marginal variances or dependence structure of the exact inferential target.

## Facts & Assumptions

**Given:** Assume AC. On $\mathbb R^2$ with Lebesgue measure, put $\beta=3/4$ and define the target density
$$\gamma(x,y)=\frac{1}{2\pi\sqrt\beta}\exp\!\left(-\frac{x^2-xy+y^2}{2\beta}\right).$$
This target is an exact inferential target by taking prior density $\gamma$, the sample space $\{\star\}$ with $P_\theta(\{\star\})=1$ for every $\theta$, and likelihood version $\ell_\star\equiv1$. The variational family consists of independent Gaussian factors
$$q(x,y)=g_{m_1,v_1}(x)g_{m_2,v_2}(y),\quad m_j\in\mathbb R,\ v_j>0,\qquad g_{m,v}(z)=(2\pi v)^{-1/2}e^{-(z-m)^2/(2v)}.$$

[F1] A fixed measurable likelihood and positive finite evidence define the exact target; the displayed target density is its prior density when the likelihood is identically one. [[def-exact-inferential-target-and-approximation-chain]]

[F2] ELBO admissibility requires support on the target support and finite log integrals, and $\operatorname{ELBO}(q)=\int q(\log\gamma-\log q)\,d\mu$. [[def-variational-family-and-elbo]]

[A1] AC is assumed and implies Countable Choice. [[def-axiom-of-choice]], [[def-countable-choice]], [[lem-ac-supplies-sequential-choices-for-probability-constructions]]

[F3] The standard normal density $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$ has Lebesgue mass one; $g_{m,v}(z)=v^{-1/2}\phi((z-m)/\sqrt v)$ is the density of $N(m,v)$, whose mean is $m$ and variance is $v$. These suppliers assume AC. [[lem-normal-density-has-total-mass-one]], [[lem-normal-location-scale-density]], [[lem-normal-location-scale-mean-and-variance]]

[F4] Tonelli applies to nonnegative product-measurable functions on sigma-finite product spaces. [[thm-tonelli-theorem-for-sigma-finite-product-spaces]]

[F5] Absolutely integrable functions on sigma-finite product spaces may be integrated in either order. [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]

[F6] Integrating against a density measure agrees with integrating the product against the base measure. [[thm-integration-against-a-density]]

[F7] Under Countable Choice, one-dimensional Lebesgue measure is sigma-finite with exhaustion $(-k,k]$, and product Lebesgue measure agrees with plane Lebesgue measure on Borel sets. Thus it gives the same integrals for our nonnegative Borel densities and their integrable Borel moments. [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]], [[thm-lebesgue-product-measure-agrees-with-euclidean-lebesgue-on-borel-sets]], [[def-lebesgue-measure-and-the-lebesgue-sigma-algebra]], [[def-probability-measure]]

[F8] Under Countable Choice continuous Euclidean functions are Borel measurable, and $\mathcal B(\mathbb R^2)=\mathcal B(\mathbb R)\otimes\mathcal B(\mathbb R)$. [[cor-continuous-functions-are-borel-measurable]], [[thm-borel-products-of-euclidean-spaces-are-euclidean-borel]]

## Counterexample

**Given:** AC and the explicit target and variational densities above.

1.1 Let $\rho=1/2$, so $\beta=1-\rho^2=3/4$, and write $\phi(t)=(2\pi)^{-1/2}e^{-t^2/2}$. By [A1], the AC and Countable Choice premises of [F3], [F7] and [F8] hold. All displayed densities and their polynomial moment integrands are Borel and product-measurable by continuity and [F8]; [F7] supplies the sigma-finite factors for Tonelli and Fubini and identifies their Borel product integrals with the displayed plane Lebesgue integrals. Direct algebra gives $\gamma(x,y)=\phi(x)g_{\rho x,\beta}(y)=\phi(y)g_{\rho y,\beta}(x)$. Each inner Gaussian density has mass one by [F3], so Tonelli [F4] proves that $\gamma$ has mass one and both marginals $\phi$. By [F3] and density integration [F6], the marginal means are zero and second moments are one. Since $|xy|\le(x^2+y^2)/2$, the cross moment is absolutely integrable. Fubini [F5], [F6] and the mean of $g_{\rho x,\beta}$ in [F3] give $E[XY]=\int x\phi(x)\rho x\,dx=\rho$. Thus the target has marginal variances $1$ and covariance $1/2$. With likelihood one the evidence is $1$, so [F1] identifies $\gamma$ as the exact target. [A1, F1, F3, F4, F5, F6, F7, F8, algebra]

1.2 For $m_j\in\mathbb R$ and $v_j>0$, [F3] supplies the normalized Lebesgue densities $g_{m_j,v_j}$ and their means $m_j$ and variances $v_j$. Tonelli [F4] gives total mass one for $q$. The logarithms of $\gamma$ and $q$ are quadratic; the finite second moments and $|xy|\le(x^2+y^2)/2$ make their absolute values integrable under $q$. Both densities are everywhere positive, so $q$ is admissible by [F2]. Fubini [F5] and [F6] give $E_q[X^2]=m_1^2+v_1$, $E_q[Y^2]=m_2^2+v_2$, and $E_q[XY]=m_1m_2$. [A1, F2, F3, F4, F5, F6, F7, F8, step 1.1, algebra]

2.1 One has $\log\gamma=-\log(2\pi\sqrt\beta)-(x^2-xy+y^2)/(2\beta)$ and $-E_{g_{m_j,v_j}}\log g_{m_j,v_j}=\tfrac12\log(2\pi v_j)+\tfrac12$, using the mean and variance in step 1.2. Substituting these expressions and the second moments from step 1.2 into [F2] yields $\operatorname{ELBO}(q)=C-\frac{m_1^2-m_1m_2+m_2^2+v_1+v_2}{2\beta}+\frac12\log v_1+\frac12\log v_2$, where $C$ is independent of $(m_1,m_2,v_1,v_2)$. The mean quadratic equals $(m_1-\rho m_2)^2+\beta m_2^2$, so its unique minimum and the ELBO-maximizing means are $m_1=m_2=0$. [F2, step 1.2, algebra]

3.1 For either variance the variable part is $r(v)=-v/(2\beta)+\tfrac12\log v$, with derivative $r'(v)=(\beta-v)/(2\beta v)$. It is positive on $(0,\beta)$ and negative on $(\beta,\infty)$, so the unique maximum is $v=\beta=3/4$. The target variance is $1$ and covariance is $1/2$ by step 1.1, whereas the optimizing independent factors have variance $3/4$ and covariance $0$ by step 1.2. Thus the unique ELBO optimizer differs from the exact target. [given, step 1.1, step 1.2, step 2.1, algebra] ∎

