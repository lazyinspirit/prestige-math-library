---
id: lem-cft-r5-local-disk-gmc-uniform-inverse-moments
kind: lemma
title: Local disk GMC and uniform anchored inverse moments
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
dependency_level: 5
proof_strategy: direct
deps:
  - def-cft-r5-spherical-gaussian-free-field
  - def-cft-r5-spherical-gaussian-multiplicative-chaos-data
  - lem-cft-r5-circle-gmc-positive-and-inverse-moments
dependency_roles:
  def-cft-r5-spherical-gaussian-free-field: mathematical-premise
  def-cft-r5-spherical-gaussian-multiplicative-chaos-data: mathematical-premise
  lem-cft-r5-circle-gmc-positive-and-inverse-moments: mathematical-premise
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Guillarmou, Kupiainen, Rhodes and Vargas, Conformal Bootstrap in Liouville Theory"
      url: https://arxiv.org/pdf/2005.11530v1
      locator: "Sections 1.2–1.6 and 3–6; explicit local construction below. Actual source-reading limits are recorded in the attached research proofs; no full-paper reading is asserted."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $0<\gamma<\sqrt2$ and let $X$ be the actual sphere GFF, or its Dirichlet component, on a compact interior planar chart with covariance $\log(1/|z-w|)+g(z,w)$, $g$ bounded continuous. For the fixed nonnegative compact convolution regularizations, and circle averages, their joint logarithmic covariance bounds give a positive Radon GMC $M_\gamma$ by $L^2$ convergence against bounded continuous tests, independent within this joint regularization class. For $0<q\le1$, small interior disks satisfy $\mathbb E M_\gamma(B_r)^q\le C_q r^{\xi_2(q)}$, where $\xi_2(q)=(2+\gamma^2/2)q-\gamma^2q^2/2$; the same holds uniformly before removing a regulator of scale $\varepsilon\le r$. Every fixed positive-radius anchor disk has all inverse moments, uniformly in sufficiently small regularizations, and positive mass almost surely.

## Statement references

[[def-cft-r5-spherical-gaussian-free-field]]

[[def-cft-r5-spherical-gaussian-multiplicative-chaos-data]]

[[lem-cft-r5-circle-gmc-positive-and-inverse-moments]]

## Facts & Assumptions

**Given:** Exactly the parameters, concrete Gaussian/vertex conventions and weighted-domain conditions in the Statement.

[F1] [[def-cft-r5-spherical-gaussian-free-field]]: the actual sphere covariance and its local logarithmic kernels.

[F2] [[def-cft-r5-spherical-gaussian-multiplicative-chaos-data]]: the Wick-normalized area-measure convention and Radon interpretation.

[F3] [[lem-cft-r5-circle-gmc-positive-and-inverse-moments]]: the explicit Gaussian interpolation identity and its comparison direction.

## Proof

1.1 **D1. Elementary covariance estimates and L² existence.** For the fixed compact convolution regularizations and circle averages, the joint regularized covariance satisfies $K_{\varepsilon,\eta}(z,w)\le\log(1/(|z-w|\vee\varepsilon\vee\eta))+C\le\log(1/|z-w|)+C$ and converges to $K(z,w)$ off the diagonal. To prove the bound, rescale by the larger smoothing radius when $|z-w|$ is at most a fixed multiple of it; the averaged logarithm on a bounded disk is uniformly bounded after subtracting the logarithm of that radius. At larger separation, the logarithm differs from $\log(1/|z-w|)$ by a bounded amount. The bounded covariance remainder only changes $C$, and the mean-value identity gives the same estimate for circle averages. [F1, F2, F3, construct, algebra]

2.1 For every bounded compactly supported test $f$, the Gaussian exponential identity gives $\mathbb E[M_\varepsilon(f)M_\eta(f)]=\int f(z)f(w)e^{\gamma^2K_{\varepsilon,\eta}(z,w)}\,dz\,dw$, with any fixed bounded positive background densities included in the integrand. [F1, F2, F3, step 1.1, construct, algebra]

3.1 Since $|z-w|^{-\gamma^2}$ is integrable on a bounded planar product exactly when $\gamma^2<2$, dominated convergence makes the second moments in step 2.1 Cauchy in $L^2$. Positivity and simultaneous convergence on a countable dense family then construct a finite positive Radon measure by the positive-functional representation supplied through the circle-GMC item [F3]. Cross-regularization $L^2$ convergence proves independence within the stated smoothing class, without assuming an external GMC limit theorem. The mean measure is the background area density. [F1, F2, F3, step 2.1, construct, algebra]

4.1 **D2. Fractional local scaling.** Use the Gaussian interpolation and comparison proved in part C1 of the directly declared circle-GMC supplier [F3]. On a disk $B_r$, put $z=z_0+ru$ and compare $X_\varepsilon(z_0+ru)$, for $\varepsilon\le r$, with $Z_r+X'_{\varepsilon/r}(u)$, where $Z_r$ is an independent centered Gaussian of variance $\log(1/r)$ and $X'$ is an independent copy of a fixed local logarithmic field with bounded continuous covariance remainder. [F1, F2, F3, step 3.1, construct]

5.1 Scaling the logarithmic singularity shows that the covariance entries in this comparison differ by at most a fixed constant on the unit disk; the bounded continuous remainders only change that constant. Add a common Gaussian of sufficient variance to obtain the entrywise covariance order required by the comparison in [F3]. For $0<q<1$, concave comparison, extraction of the common Gaussian, and Jensen's inequality for the rescaled unit-disk mass give $\mathbb E[M_\varepsilon(B_r)^q]\le C r^{2q}\exp(\gamma^2(q^2-q)\log(1/r)/2)=C r^{\xi_2(q)}$. [F1, F2, F3, step 4.1, construct, algebra]

6.1 The background density contributes only fixed positive multiplicative bounds. For $q=1$ this is the mean measure estimate, $\xi _2(1)=2$. Passage to the L² limit gives the same bound for $M(B_r)$. [F1, F2, F3, step 5.1, construct, algebra]

7.1 **D3. Explicit independent-scale comparison field.** Let B be the Euclidean unit disk and define kappa(x)=area(B intersect (B+x))/pi. [F1, F2, F3, step 6.1, construct, algebra]

8.1 It is nonnegative, vanishes for $|x|\ge 2$, is positive definite (it is the autocorrelation of $1_B/\sqrt{\pi}$), satisfies $\kappa (0)=1$ and $|1−\kappa (x)|\le C|x|$. Introduce real Gaussian white noise W on R² times (0,1), with control measure du dt/t, and put $Y_\epsilon(z)=\pi^{-1/2}\int_\epsilon^1\int_{\mathbb R^2} t^{-1}1_{|u-z|<t}\,W(du,dt/t)$. [F1, F2, F3, step 7.1, construct, algebra]

9.1 For a finite collection of z this Gaussian integral is the L² limit of step functions; consistency defines the continuous regularized field, or its measurable modification obtained by the usual Gaussian moment continuity bound. Its covariance is $C_\epsilon(z,w)=\int_\epsilon^1\kappa((z-w)/t)\,dt/t$. [F1, F2, F3, step 8.1, construct, algebra]

10.1 The properties of kappa imply uniformly on bounded disks $C_{\epsilon}(z,w)=\operatorname{log}(1/(|z−w|\vee \epsilon ))+O(1)$. [F1, F2, F3, step 9.1, construct, algebra]

11.1 Let $\mathcal F_n=\sigma(W\text{ restricted to cone-noise scales }t\ge2^{-n})$. Increments on disjoint $t$-intervals are independent, so the normalized masses $M_n=Z_{2^{-n}}(D)$ form a nonnegative martingale with respect to $(\mathcal F_n)$. The planar $L^2$ estimate in part D1 bounds $\sup_n\mathbb E M_n^2$. For $m\ge n$, $\mathbb E|M_m-M_n|^2=\mathbb E M_m^2-\mathbb E M_n^2$, since $\mathbb E[M_m\mid\mathcal F_n]=M_n$. The bounded increasing second moments therefore make $(M_n)$ Cauchy in $L^2$, with a limit $Z(D)$ and $\mathbb E Z(D)=\operatorname{area}(D)$. For almost-sure convergence, fix $n<N$ and let $\tau$ be the first $k\in(n,N]$ with $|M_k-M_n|\ge\lambda$. On each event $\{\tau=k\}\in\mathcal F_k$, $\mathbb E[M_N-M_k\mid\mathcal F_k]=0$, so expansion of the square gives $\mathbb E[|M_N-M_n|^2\mathbf 1_{\{\tau=k\}}]\ge\mathbb E[|M_k-M_n|^2\mathbf 1_{\{\tau=k\}}]$. Summing yields $\lambda^2\mathbb P(\max_{n<k\le N}|M_k-M_n|\ge\lambda)\le\mathbb E|M_N-M_n|^2$. Since the second moments converge, choose $n_j$ so the right side is at most $2^{-4j}$ for every $N\ge n_j$ and put $\lambda=2^{-j}$. Letting $N\to\infty$ bounds the tail crossing probability by $2^{-2j}$; the union bound on these tails tends to zero, so $(M_n)$ is almost surely Cauchy. [F1, F2, F3, step 10.1, construct, algebra]

12.1 For each cutoff $\varepsilon$, let $\mathcal F_\varepsilon$ be the sigma-algebra generated by the cone white noise at scales $t\ge\varepsilon$. Independent increments below scale $\varepsilon$ give $Z_\varepsilon(D)=\mathbb E[Z(D)\mid\mathcal F_\varepsilon]$, first for dyadic cutoffs and then for arbitrary $\varepsilon$ by the same conditional-independence identity. The mixed covariance formula and integrable bound of part D1 show that all intermediate scales converge in $L^2$ to the same $Z(D)$. This conditional-expectation identity controls negative moments of the regularizations; no uniform negative-moment limit is assumed. [F1, F2, F3, step 11.1, construct, algebra]

13.1 **D4. Negative moments of the cone limit.** Fix one disk D and two separated subdisks of scale r inside it, with r sufficiently small. On their union the actual cone covariances are bounded above by those of two independent rescaled copies of the cone field on D plus a single independent common Gaussian of sufficiently large finite variance A. Within each subdisk this follows from $C(z,w)=\operatorname{log}(1/|z−w|)+O(1)$ and scaling; cross-covariances are bounded because the two disks are separated. The common variance may include log(1/r), and increasing its fixed value covers all bounded remainders. Convex comparison for exp(−t x), followed by the L² limit, gives $\phi_D(t)\le E[\phi_D(tB)^2]$, $\phi_D(t)=E\exp(-tZ(D))$, $B=r^2\exp(\gamma G-\gamma^2 A/2)$, G Gaussian of variance A. [F1, F2, F3, step 12.1, construct, algebra]

14.1 Here the model mass of each rescaled disk is B times an independent copy of Z(D); all scale factors have been kept. This is an inequality comparing Gaussian laws, not independence of the original subdisk masses. [F1, F2, F3, step 13.1, construct, algebra]

15.1 The identical Laplace-recursion argument of the circle supplier now applies: taking t to infinity gives $a\le a²$ for $a=P(Z(D)=0)$; the positive mean excludes $a=1$, so $a=0$. Splitting on $B<t^{−\epsilon }$ yields $\phi_D(\exp s)\le\phi_D(\exp((1-\epsilon)s))^2+C\exp(-cs^2)$. [F1, F2, F3, step 14.1, construct, algebra]

16.1 Choosing $1<\delta <2$ with $2(1−\epsilon )^\delta >1$ and inducting on geometric s-intervals proves $\phi_D(t)\le C\exp(-b(\log t)^\delta)$. The gamma-integral identity then gives $E[Z(D)^{−a}]<\infty $ for every $a>0$. [F1, F2, F3, step 15.1, construct, algebra]

17.1 Conditional Jensen and part D3 give at every cutoff $E[Z_{\epsilon}(D)^{−a}] \le  E[Z(D)^{−a}]$. [F1, F2, F3, step 16.1, construct, algebra]

18.1 Thus the cone regularizations already have the required uniform inverse moments. [F1, F2, F3, step 17.1, construct, algebra]

19.1 **D5. Transfer to the actual GFF and its actual regularizations.** On any fixed compact anchor disk, part D1 and the cone covariance in D3 give $\operatorname{Cov}(X_\varepsilon(z),X_\varepsilon(w))\le C_\varepsilon(z,w)+A_0$ for one $A_0$ independent of $\varepsilon$. [F1, F2, F3, step 18.1, construct, algebra]

20.1 Adding an independent common Gaussian of variance $A_0$ to $Y_\varepsilon$ makes its covariance dominate the actual regularized covariance entrywise. The convex comparison for $F(x)=(x+\delta)^{-a}$, followed by monotone convergence as $\delta\downarrow0$, gives $\mathbb E[M_\varepsilon(D)^{-a}]\le e^{\gamma^2A_0a(a+1)/2}\mathbb E[Z_\varepsilon(D)^{-a}]\le C_a$. [F1, F2, F3, step 19.1, construct, algebra]

21.1 A bounded positive background density is handled by its lower bound on D. Passing along an almost-sure subsequence of the L² mass convergence and using Fatou proves the corresponding inverse moments for M(D). This proves all of the interface, including uniformity before taking the regularization limit. [F1, F2, F3, step 20.1, construct, algebra] ∎
