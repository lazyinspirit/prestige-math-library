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
---

## Statement

Let $M$ be a Hausdorff second-countable smooth manifold without boundary,
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

**Given:** The manifold, density, bundles, metrics and operator of the Statement; all integrals are density integrals of compactly supported smooth densities ([[def-integral-of-a-compactly-supported-smooth-density]]).

[F1] For $\eta\in\Omega_c^{n-1}(\mathbb R^n)$ with the standard orientation, $\int_{\mathbb R^n}d\eta=0$; in particular $\int_{\mathbb R^n}\partial_ih\,dx=0$ for compactly supported smooth $h$ [[lem-euclidean-stokes-for-a-compactly-supported-form]].

[F2] The product rule holds for derivatives of products of differentiable functions; iterating it over the coordinate derivatives expresses $D^\alpha(fg)$ as the sum of terms distributing the multi-index between $f$ and $g$, the term with all derivatives on $g$ being $f\,D^\alpha g$ ([[thm-algebra-of-derivatives]], [[thm-chain-rule-for-total-derivatives]]).

[F3] In a chart, $\mu=\gamma\,|dx^1\cdots dx^n|$ with $\gamma>0$ smooth, and the integral of a chart-supported smooth section product against $d\mu$ is the ordinary integral of its coefficient times $\gamma$; multiplication by smooth functions is linear and smooth ([[def-density-bundle-and-smooth-density]], [[def-integral-of-a-compactly-supported-smooth-density]]).

[F4] Every finite-dimensional real or complex inner product space has an orthonormal basis; over a chart an orthonormal, respectively unitary, local frame of $E$ with respect to a smooth bundle metric is obtained by applying Gram–Schmidt to any smooth local frame, all divisions being by norms of nowhere-vanishing smooth vectors ([[thm-gram-schmidt-orthonormalisation]], [[def-smooth-bundle-metric]]).

[F5] For a compact set inside an open set there is a smooth bump equal to $1$ on a neighbourhood of the compact set and supported in the open set ([[lem-manifold-bump-for-a-compact-set-inside-an-open-set]]).

[F6] The operator $P$ has, in every chart and every local frame, a smooth local expression of order at most two, and the class, the Hermitian first-variable-linear pairing and formal symmetry are as in [[def-second-order-laplace-type-operators-on-vector-bundles]].

## Proof

1.1 We first record the scalar one-derivative identity on an open set of $\mathbb R^n$. Let $a,b$ be compactly supported smooth functions and let $h$ be a smooth function, all on $\mathbb R^n$. Applying [F1] to the compactly supported $(n-1)$-form $\eta=(-1)^{i-1}abh\,dx^1\wedge\cdots\wedge\widehat{dx^i}\wedge\cdots\wedge dx^n$ gives $\int_{\mathbb R^n}\partial_i(abh)\,dx=0$; the product rule [F2] splits this into $\int(\partial_ia)\,bh\,dx+\int a\,\partial_i(bh)\,dx=0$. Taking $h=\gamma$ and rearranging, integration against the density $\gamma\,dx$ transposes $\partial_i$ to the operator $b\mapsto-\gamma^{-1}\partial_i(\gamma b)$, because $\partial_i(\overline b\gamma)=\gamma\,\overline{\gamma^{-1}\partial_i(\gamma b)}$:
$$\int_{\mathbb R^n}(\partial_ia)\,\overline{b}\,\gamma\,dx=\int_{\mathbb R^n}a\,\overline{\bigl(-\gamma^{-1}\partial_i(\gamma b)\bigr)}\,\gamma\,dx,$$
and in the real case the same identity without conjugations. The opposite signs in the two boundary-free terms are the only content. [F1, F2, F3, algebra]

2.1 Iterating step 1.1 and inserting the matrix coefficients gives the local formula of the Statement, so $P^\star$ exists locally. For a multi-index $\alpha$ and a matrix coefficient $a=a(x)$, the transpose of $aD^\alpha$ against the fibre pairing is the operator $v\mapsto(-1)^{|\alpha|}\gamma^{-1}D^\alpha(\gamma a^*v)$: each single derivative contributes the factor $-\gamma^{-1}\circ\partial_i\circ\gamma$, the matrix acts by the fibre adjoint $a^*$, and [F2] expands $D^\alpha(\gamma a^*v)$ with top term $\gamma\,a^*D^\alpha v$ and lower-order terms, exactly as in the displayed formula. Summing over $|\alpha|\le2$ gives a smooth operator of order at most two on the chart. [step 1.1, F2, F3, F6, algebra]

3.1 Vanishing on a chart. Let $Q$ be a smooth operator on a chart domain with $\int\langle u,Qv\rangle\,d\mu=0$ for all compactly supported smooth $u,v$ there, and fix $v$. If $Qv$ did not vanish at a point $p$, then in an orthonormal frame of [F4] some component $(Qv)_\lambda$ would be nonzero at $p$; choose a nonnegative smooth cutoff $\chi$ supported in the open set where $(Qv)_\lambda\ne0$ and equal to $1$ at $p$, and set $u=\chi\,\overline{(Qv)_\lambda}\,e_\lambda$ in that frame, a compactly supported smooth section. Then $\langle u,Qv\rangle=\chi\lvert(Qv)_\lambda\rvert^2$ is nonnegative and positive near $p$, so its density integral is nonzero by [F3], contradicting the vanishing hypothesis. Hence $Qv=0$ for every $v$, so $Q=0$. In particular two local operators satisfying the local adjoint identity against $P$ on a common chart domain coincide, since their difference is annihilated against every pair of compactly supported tests there. [step 2.1, F3, F4]

3.2 Leading coefficients. In a chart with orthonormal frames, write the local coefficients of $P$ as $a_\alpha$, $|\alpha|\le2$. By [F2] the coefficient of $D^\alpha v$ in $\gamma^{-1}D^\alpha(\gamma a_\alpha^*v)$ is $a_\alpha^*$, and all other terms contributed by $\gamma^{-1}D^\alpha(\gamma\,\cdot\,)$ have order at most $|\alpha|-1$; terms with $|\alpha|<2$ have order at most one. Hence the order-$\delta$ leading coefficients of $P^\star$ are $(-1)^\delta a_\alpha^*$. [step 2.1, F2]

4.1 Gluing. The local operators of step 2.1 on the members of a chart cover whose frames are orthonormal by [F4] agree on every overlap by step 3.1, so they patch to one global smooth linear operator $P^\star:\Gamma(F)\to\Gamma(E)$ of order at most two; on a chart, $P^\star$ is the local construction there. [step 2.1, step 3.1, F4]

5.1 Global adjoint identity. Let $u,v\in\Gamma_c$ be compactly supported smooth sections. Cover the compact set $\operatorname{supp}u$ by finitely many chart domains $U_1,\ldots,U_N$ carrying orthonormal frames. For each $i$ choose by [F5] a nonnegative smooth $\rho_i$ equal to $1$ near a compact subset $K_i\subseteq U_i$, with the $K_i$ chosen inside the respective charts so that $\bigcup_iK_i\supseteq\operatorname{supp}u$, and with $\operatorname{supp}\rho_i\subseteq U_i$; replacing $\rho_i$ by $\rho_i(\rho_1+\cdots+\rho_N)^{-1}$ makes $\sum_i\rho_i=1$ on a neighbourhood of $\operatorname{supp}u$. Then $u=\sum_i\rho_iu$, so linearity of $P$ gives $\int\langle Pu,v\rangle\,d\mu=\sum_i\int\langle P(\rho_iu),v\rangle\,d\mu$. Fix $i$: the section $\rho_iu$ is compactly supported in $U_i$, so by [F5] again choose a bump $\theta_i$ supported in $U_i$ and equal to $1$ near $\operatorname{supp}(\rho_iu)\cap\operatorname{supp}v$. Since $P$ and $P^\star$ are differential operators with the local expressions of step 2.1 and step 4.1, the pointwise identities $\langle P(\rho_iu),v\rangle=\langle P(\rho_iu),\theta_iv\rangle$ and $\langle\rho_iu,P^\star(\theta_iv)\rangle=\langle\rho_iu,P^\star v\rangle$ hold: the two sides differ only by products of a section with a section whose jet vanishes wherever the other factor is nonzero. Therefore the local adjoint identity of step 2.1 on the chart $U_i$ yields $\int\langle P(\rho_iu),v\rangle\,d\mu=\int\langle\rho_iu,P^\star v\rangle\,d\mu$, and summing over $i$ gives the global identity $\int\langle Pu,v\rangle\,d\mu=\int\langle u,P^\star v\rangle\,d\mu$. [step 2.1, step 3.1, step 4.1, F2, F5]

6.1 Uniqueness. If a smooth operator $Q$ also satisfied the global adjoint identity, then $\int\langle u,(P^\star-Q)v\rangle\,d\mu=0$ for all compactly supported smooth $u,v$, so step 3.1 applied to $P^\star-Q$ on any chart gives $P^\star-Q=0$. Thus $P^\star$ is the unique such operator. [step 3.1, step 5.1]

7.1 Consequences. For a Laplace-type $P$ the order-two coefficients are $a_{(i,j)}=-a^{ij}\delta_{\lambda\mu}$ with $(a^{ij})$ smooth symmetric positive definite, so those of $P^\star$ are $(-1)^2a_{(i,j)}^*=-a^{ij}\delta_{\lambda\mu}$, the same matrix; hence $P^\star$ is Laplace type and $\sigma_2(P^\star)=\sigma_2(P)$. Applying the defining identity twice and using step 6.1, $(P^\star)^\star=P$. Finally, with $E=F$, the difference of the defining identities for $P$ and $P^\star$ shows that $P$ is formally symmetric exactly when $\int\langle s,(P-P^\star)t\rangle\,d\mu=0$ for all compactly supported smooth $s,t$, which by step 3.1 holds exactly when $P=P^\star$. All three assertions follow. [step 5.1, step 6.1, step 3.2, F6, algebra] ∎
