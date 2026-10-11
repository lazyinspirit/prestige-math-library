---
id: lem-formal-adjoints-of-differential-operators-exist-and-are-unique
kind: lemma
title: "Formal adjoints of differential operators on metric vector bundles"
status: draft
origin: pipeline
dependency_level: 1
deps:
  - def-second-order-laplace-type-operators-on-vector-bundles
  - def-smooth-manifold
  - def-smooth-vector-bundle-rank-fibre-and-trivial-bundle
  - def-smooth-section-local-section-and-support
  - def-smooth-bundle-metric
  - def-density-bundle-and-smooth-density
  - def-integral-of-a-compactly-supported-smooth-density
  - lem-euclidean-stokes-for-a-compactly-supported-form
  - thm-chain-rule-for-total-derivatives
  - thm-algebra-of-derivatives
  - thm-gram-schmidt-orthonormalisation
  - lem-manifold-bump-for-a-compact-set-inside-an-open-set
  - def-countable-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry; Ch. VI §1, Definition (1.5), formula (1.6) and its proof, and (1.7), printed pp. 288–289: existence, uniqueness and local formula of the formal adjoint on euclidean or hermitian vector bundles"
      url: https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf
    - title: "John K. Hunter, Notes on Partial Differential Equations; §4.7, printed pp. 103–105: the Lax-Milgram route and adjoint identities used as background for the integration-by-parts convention"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement

Assume Countable Choice ([[def-countable-choice]]) for the density-integral
convention. Let $M$ be a Hausdorff second-countable smooth manifold without boundary,
$\mu$ a smooth positive density on $M$, and $E,F\to M$ finite-rank smooth vector
bundles over $\mathbb K=\mathbb R$ or $\mathbb C$ with smooth bundle metrics,
Hermitian (first-variable-linear) in the complex case, with the conventions of
[[def-second-order-laplace-type-operators-on-vector-bundles]]. Let
$P:\Gamma(E)\to\Gamma(F)$ be a linear differential operator of order at most two
(the target-$F$ version of the local description in
[[def-second-order-laplace-type-operators-on-vector-bundles]]).

Then there is a unique linear differential operator $P^\star:\Gamma(F)\to\Gamma(E)$
of order at most two such that
$$\int_M\langle Pu,v\rangle_F\,d\mu=\int_M\langle u,P^\star v\rangle_E\,d\mu$$
for all compactly supported smooth sections $u\in\Gamma_c(E)$ and
$v\in\Gamma_c(F)$; it is the **formal adjoint** of $P$. It is given locally as
follows: in a chart with coordinates $x$, with density coefficient $\gamma>0$
defined by $\mu=\gamma\,|dx^1\cdots dx^n|$
([[def-density-bundle-and-smooth-density]]), with frames of $E$ and $F$
orthonormal for the metrics (equivalently unitary in the complex case; such
frames exist locally by applying Gram–Schmidt to any local frame,
[[thm-gram-schmidt-orthonormalisation]]), and with local coefficients
$Pu=\sum_{|\alpha|\le2}a_\alpha D^\alpha u$,
$$P^\star v=\sum_{|\alpha|\le2}(-1)^{|\alpha|}\gamma^{-1}D^\alpha\bigl(\gamma\,a_\alpha^*v\bigr),$$
where $a_\alpha^*$ is the fibre adjoint. Consequently:
1. if the leading coefficients of $P$ of order $\delta\in\{0,1,2\}$ are the
   matrices $a_\alpha$, $|\alpha|=\delta$, then those of $P^\star$ are
   $(-1)^\delta a_\alpha^*$, computed in the same orthonormal frames; in
   particular the formal adjoint of a Laplace-type operator is again Laplace
   type and its principal symbol is unchanged,
   $\sigma_2(P^\star)=\sigma_2(P)$;
2. $(P^\star)^\star=P$;
3. if $E=F$, then $P$ is formally symmetric in the sense of
   [[def-second-order-laplace-type-operators-on-vector-bundles]] exactly when
   $P=P^\star$.

## Facts & Assumptions

**Given:** Countable Choice and the manifold, density, bundles, metrics and operator of the Statement; all integrals are density integrals of compactly supported smooth densities ([[def-integral-of-a-compactly-supported-smooth-density]]).

[F1] For $\eta\in\Omega_c^{n-1}(\mathbb R^n)$ with the standard orientation, $\int_{\mathbb R^n}d\eta=0$; in particular $\int_{\mathbb R^n}\partial_ih\,dx=0$ for compactly supported smooth $h$ [[lem-euclidean-stokes-for-a-compactly-supported-form]].

[F2] The product rule holds for derivatives of products of differentiable functions; iterating it over the coordinate derivatives expresses $D^\alpha(fg)$ as the sum of terms distributing the multi-index between $f$ and $g$, the term with all derivatives on $g$ being $f\,D^\alpha g$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F3] In a chart, $\mu=\gamma\,|dx^1\cdots dx^n|$ with $\gamma>0$ smooth, and the integral of a chart-supported smooth section product against $d\mu$ is the ordinary integral of its coefficient times $\gamma$; multiplication by smooth functions is linear and smooth ([[def-density-bundle-and-smooth-density]], [[def-integral-of-a-compactly-supported-smooth-density]]).

[F4] Every finite-dimensional real or complex inner product space has an orthonormal basis; over a chart an orthonormal, respectively unitary, local frame of $E$ with respect to a smooth bundle metric is obtained by applying Gram–Schmidt to any smooth local frame, all divisions being by norms of nowhere-vanishing smooth vectors ([[thm-gram-schmidt-orthonormalisation]], [[def-smooth-bundle-metric]]).

[F5] For a compact set inside an open set there is a smooth bump equal to $1$ on a neighbourhood of the compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F6] The operator $P$ has, in every chart and every local frame, a smooth local expression of order at most two, and the class, the Hermitian first-variable-linear pairing and formal symmetry are as in [[def-second-order-laplace-type-operators-on-vector-bundles]].

## Proof

1.1 In dimension zero each chart is a point, the manifold is discrete, and a compact support is finite. A differential operator is fibrewise multiplication by its order-zero coefficient, so its fibre adjoint satisfies the required identity on each point and hence on every finite sum. Uniqueness and all three consequences are the fibre adjoint identities. For the remaining argument assume $n\ge1$. [given, F3, algebra]

1.2 On a coordinate open set $\Omega\subseteq\mathbb R^n$, let $a,b$ be compactly supported smooth scalar functions and let $\gamma>0$ be the smooth density coefficient. The product $a\overline b\gamma$, extended by zero, is smooth and compactly supported on $\mathbb R^n$. Apply [F1] to its derivative and [F2] to the product to obtain $\int_\Omega(\partial_i a)\overline b\gamma\,dx=-\int_\Omega a\partial_i(\overline b\gamma)\,dx$. Since $\gamma$ is real, this is $\int_\Omega(\partial_i a)\overline b\gamma\,dx=\int_\Omega a\overline{(-\gamma^{-1}\partial_i(\gamma b))}\gamma\,dx$. The real case omits conjugations. Thus integration against the density transposes $\partial_i$ to $-\gamma^{-1}\partial_i\circ\gamma$. [F1, F2, F3, algebra]

2.1 Iterating step 1.2 and inserting the matrix coefficients gives the local formula of the Statement, so $P^\star$ exists locally. For a multi-index $\alpha$ and a matrix coefficient $a=a(x)$, the transpose of $aD^\alpha$ against the fibre pairing is the operator $v\mapsto(-1)^{|\alpha|}\gamma^{-1}D^\alpha(\gamma a^*v)$: each single derivative contributes the factor $-\gamma^{-1}\circ\partial_i\circ\gamma$, the matrix acts by the fibre adjoint $a^*$, and [F2] expands $D^\alpha(\gamma a^*v)$ with top term $\gamma\,a^*D^\alpha v$ and lower-order terms, exactly as in the displayed formula. Summing over $|\alpha|\le2$ gives a smooth operator of order at most two on the chart. [step 1.2, F2, F3, F6, algebra]

3.1 Vanishing on a chart. Suppose $\int\langle u,Qv\rangle\,d\mu=0$ for all compactly supported smooth tests $u,v$ in a chart. Fix $v$. If a component $(Qv)_\lambda$ is nonzero at $p$, choose a relatively compact neighbourhood of $p$ inside the chart where that component is nonzero. By [F5] choose a nonnegative smooth cutoff $\chi$ supported there and equal to one near $p$, and set $u=\chi(Qv)_\lambda e_\lambda$ in an orthonormal frame. The first-variable-linear convention gives $\langle u,Qv\rangle=\chi|(Qv)_\lambda|^2$, whose density integral is positive, a contradiction. Thus $Qv=0$ for every compactly supported $v$. For an arbitrary smooth local $v$, a cutoff equal to one near any given point reduces to such a test; locality of a differential operator then gives $Qv=0$ at that point. Hence $Q=0$, and two local formal adjoints agree on overlaps. [step 2.1, F3, F4, F5]

3.2 Leading coefficients. In a chart with orthonormal frames, write the local coefficients of $P$ as $a_\alpha$, $|\alpha|\le2$. By [F2] the coefficient of $D^\alpha v$ in $\gamma^{-1}D^\alpha(\gamma a_\alpha^*v)$ is $a_\alpha^*$, and all other terms contributed by $\gamma^{-1}D^\alpha(\gamma\,\cdot\,)$ have order at most $|\alpha|-1$; terms with $|\alpha|<2$ have order at most one. Hence the order-$\delta$ leading coefficients of $P^\star$ are $(-1)^\delta a_\alpha^*$. [step 2.1, F2]

4.1 Gluing. The local operators of step 2.1 on the members of a chart cover whose frames are orthonormal by [F4] agree on every overlap by step 3.1, so they patch to one global smooth linear operator $P^\star:\Gamma(F)\to\Gamma(E)$ of order at most two; on a chart, $P^\star$ is the local construction there. [step 2.1, step 3.1, F4]

5.1 Global adjoint identity. Put $K=\operatorname{supp}u$ for compactly supported smooth $u,v$. If $K$ is empty the identity is zero. Otherwise, coordinate balls with compact closures inside orthonormal-frame charts cover $K$; compactness gives finitely many such balls $V_i$ in charts $U_i$. By [F5] choose nonnegative bumps $\beta_i$ supported in $U_i$ and equal to one near $\overline V_i$. Their sum $s$ is positive near $K$. Define $u_i=(\beta_i/s)u$ on $\{s>0\}$ and zero elsewhere. This extension is smooth because $u$ vanishes near every point of $\{s=0\}$; its support lies in the compact set $K\cap\operatorname{supp}\beta_i\subset U_i$, and $u=\sum_i u_i$. Choose by [F5] a cutoff $\theta_i$ supported in $U_i$ and equal to one near $\operatorname{supp}u_i$, taking its support compact by working inside a relatively compact neighbourhood of that support in $U_i$. Locality gives $\langle Pu_i,v\rangle=\langle Pu_i,\theta_iv\rangle$ and $\langle u_i,P^\star(\theta_iv)\rangle=\langle u_i,P^\star v\rangle$, since the relevant jets agree near $\operatorname{supp}u_i$. The local identity of step 2.1 therefore yields $\int\langle Pu_i,v\rangle\,d\mu=\int\langle u_i,P^\star v\rangle\,d\mu$. Summing the finite family proves the global identity. Only finite selections are made here; Countable Choice is inherited by the cited density-integral convention. [step 2.1, step 4.1, F3, F5, given]

6.1 Uniqueness. If a smooth operator $Q$ also satisfied the global adjoint identity, then $\int\langle u,(P^\star-Q)v\rangle\,d\mu=0$ for all compactly supported smooth $u,v$, so step 3.1 applied to $P^\star-Q$ on any chart gives $P^\star-Q=0$. Thus $P^\star$ is the unique such operator. [step 3.1, step 5.1]

7.1 Consequences. For a Laplace-type $P$ the order-two coefficients are $a_{(i,j)}=-a^{ij}\delta_{\lambda\mu}$ with $(a^{ij})$ smooth symmetric positive definite, so those of $P^\star$ are $(-1)^2a_{(i,j)}^*=-a^{ij}\delta_{\lambda\mu}$, the same matrix; hence $P^\star$ is Laplace type and $\sigma_2(P^\star)=\sigma_2(P)$. Applying the defining identity twice and using step 6.1, $(P^\star)^\star=P$. Finally, with $E=F$, the difference of the defining identities for $P$ and $P^\star$ shows that $P$ is formally symmetric exactly when $\int\langle s,(P-P^\star)t\rangle\,d\mu=0$ for all compactly supported smooth $s,t$, which by step 3.1 holds exactly when $P=P^\star$. All three assertions follow. [step 5.1, step 6.1, step 3.2, F6, algebra] ∎
