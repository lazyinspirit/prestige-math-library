---
id: lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension
kind: lemma
title: Unitary intertwiners preserve direct-integral fiber dimension
status: published
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectral-multiplicity-function-in-the-separable-case, thm-borel-functional-calculus-for-bounded-normal-operators, thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality, thm-integration-against-a-density, def-axiom-of-choice, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-riesz-fischer-completeness-of-l-p, def-regular-complex-borel-measure-on-an-lch-space, def-total-variation-of-a-signed-or-complex-measure, thm-hilbert-adjoint-properties, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions, thm-monotone-convergence-for-the-integral, thm-cauchy-schwarz-in-an-inner-product-space]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "John B. Conway, A Course in Functional Analysis, 2nd ed., Propositions 10.17–10.19 and Theorem 10.21, printed pp.299–301"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2017_09_30%2112_00_39_PM.pdf"
    - title: "Andreas Kriegl, Funktionalanalysis, §8.62–8.66, printed pp.197–200"
      url: "https://www.mat.univie.ac.at/~kriegl/Skripten/2019SSe.pdf"
verification:
  audited: 2026-09-29
---

## Statement

Assume AC. Let $\Lambda\subseteq\mathbb C$ be nonempty and compact, let $\mu$
and $\nu$ be nonzero finite positive regular Borel measures on $\Lambda$, let
$m,m':\Lambda\to\{1,2,\dots\}\cup\{\infty\}$ be Borel functions, and consider
the standard measurable-field models $L^2(\mu,m)$, $L^2(\nu,m')$ of
[[def-spectral-multiplicity-function-in-the-separable-case]], recalled below.
If
$$U:L^2(\mu,m)\longrightarrow L^2(\nu,m')$$
is a unitary operator with $UM_z=M_zU$, where $M_z$ is multiplication by the
coordinate function on $\Lambda$, then:

1. $\mu$ and $\nu$ are mutually absolutely continuous;
2. $m=m'$ $\nu$-almost everywhere, equivalently $\mu$-almost everywhere, where
   the two functions are compared after their common domain $\Lambda$ and the
   equivalence classes are pushed forward along the class equality of
   clause 1.

## Facts & Assumptions

[A1] The standard model is the orthogonal sum of the ordinary $L^2$-spaces of the level sets: $L^2(\mu,m)=\bigoplus_{r\ge1}L^2(\mu|_{A_r})$ with $A_r=\{m\ge r\}$, and multiplication by a bounded Borel $h$ acts componentwise; likewise $L^2(\nu,m')=\bigoplus_{s\ge1}L^2(\nu|_{B_s})$, $B_s=\{m'\ge s\}$; and $m\ge1$ $\mu$-a.e., $m'\ge1$ $\nu$-a.e. ([[def-spectral-multiplicity-function-in-the-separable-case]]).

[A2] If a bounded linear functional on $C(\Lambda;\mathbb C)$ is represented by two finite regular complex measures, then the two measures coincide, and $|\int g\,d\sigma|\le\|g\|_\infty|\sigma|(\Lambda)$; the total variation of a measure with density $\sigma\in L^1(\mu)$ is $|\sigma|\,d\mu$. If finite positive measures $\nu\ll\mu$, the Radon--Nikodym theorem supplies an integrable density $h=d\nu/d\mu$; positivity forces $h\ge0$ almost everywhere, and if also $\mu\ll\nu$ then $h>0$ almost everywhere ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[A3] For a finite regular Borel measure $\mu$ on the compact metric space $\Lambda$ and $\sigma\in L^1(\mu)$, the measure $E\mapsto\int_E\sigma\,d\mu$ is regular: continuous densities are reducible to the regular case by domination, $C(\Lambda)$ is dense in $L^1(\mu)$, and regularity is preserved by total-variation limits; the identification $|\sigma\,d\mu|=|\sigma|\,d\mu$ holds ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-regular-complex-borel-measure-on-an-lch-space]], [[def-total-variation-of-a-signed-or-complex-measure]]).

[A4] $L^2$ of a finite measure is complete and $L^\infty$ is dense in it; a bounded operator on it commuting with every multiplication $M_h$ is itself a multiplication: it is $M_g$ with $g:=T\mathbf 1_\Lambda$, because $T(h)=hT(1)$ for every $h\in L^\infty$, and $\|M_g\|=\|g\|_\infty$ ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[A5] Adjoints: $(UM_z)^*=M_z^*U^*$ and $M_z^*=M_{\overline z}$; a unitary satisfies $U^*U=I$ and $UU^*=I$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

[A7] For a nonnegative density $h$, integration against the positive measure $h\,d\mu$ agrees with integration of the product for every nonnegative measurable function, including nonnegative squared norms ([[thm-integration-against-a-density]]). Monotone convergence passes finite coordinate sums through these integrals ([[thm-monotone-convergence-for-the-integral]]), and Cauchy–Schwarz bounds products of two square-summable coordinate columns ([[thm-cauchy-schwarz-in-an-inner-product-space]]).

## Proof

**Proof technique:** direct.

**Given:** Nonempty compact $\Lambda\subseteq\mathbb C$, nonzero finite regular positive measures $\mu,\nu$, Borel multiplicities $m,m'$, and a unitary $U:L^2(\mu,m)\to L^2(\nu,m')$ with $UM_z=M_zU$; write $X:=\bigoplus_rL^2(\mu|_{A_r})$, $Y:=\bigoplus_sL^2(\nu|_{B_s})$.

1.1 $U$ preserves all multiplications: $UM_z=M_zU$ gives $UM_z^*=M_z^*U$ by taking adjoints, so $U$ commutes with every $\ast$-polynomial in $z,\overline z$; $\ast$-polynomials are uniformly dense in the continuous functions and both sides are bounded, so $UM_h=M_hU$ for continuous $h$; for fixed vectors $p,q\in X$ the measure $\rho_{p,q}(E):=\langle M_{\mathbf 1_E}p,q\rangle=\int_E\sigma_{p,q}\,d\mu$ with $\sigma_{p,q}=\sum_rp_r\overline{q_r}\in L^1(\mu)$ is a finite regular complex measure, and for continuous $h$ one has $\int h\,d\rho_{p,q}=\langle M_hp,q\rangle=\langle UM_hp,Uq\rangle=\langle M_hUp,Uq\rangle=\int h\,d\rho_{Up,Uq}$, so the two regular measures coincide and hence $\langle M_hp,q\rangle=\langle M_hUp,Uq\rangle$ for every bounded Borel $h$ and all $p,q$; therefore $UM_h=M_hU$ for every bounded Borel $h$. [A1, A2, A3, A5]

2.1 Absolute continuity: the field $e:=(\mathbf 1_{A_1},0,0,\dots)\in X$ has scalar measure $\langle M_he,e\rangle=\int h\mathbf 1_{A_1}\,d\mu=\int h\,d\mu$ because $A_1$ is $\mu$-conull, while the scalar measure of $Ue$ in $Y$ is $\int h\,w\,d\nu$ with $w:=\sum_s|(Ue)_s|^2\in L^1(\nu)$; the identity $\langle M_hUe,Ue\rangle=\langle UM_he,Ue\rangle=\langle M_he,e\rangle$ for all bounded Borel $h$ gives $\int_Ew\,d\nu=\mu(E)$ for every Borel $E$, hence $\mu\ll\nu$. [step 1.1, A1]

2.2 Localisation to constant multiplicity: let $B\subseteq\Lambda$ be Borel with $m\equiv k$ and $m'\equiv k'$ on $B$ for constants $k,k'\in\{1,2,\dots\}\cup\{\infty\}$ and $\mu(B)>0$; since $UM_{\mathbf 1_B}=M_{\mathbf 1_B}U$, the unitary restricts to a unitary $U_B$ between the localised spaces $X_B:=\{p\in X:p_r=0\ \mu\text{-a.e. off }B\}=\bigoplus_{r\le k}L^2(\mu|_B)$ and $Y_B=\bigoplus_{s\le k'}L^2(\nu|_B)$. [step 1.1, A1]

3.1 The same argument applied to the unitary $U^*$, which also intertwines the multiplications, shows $\nu\ll\mu$; hence $\mu$ and $\nu$ are mutually absolutely continuous. [step 1.1, step 2.1, A5]

3.2 Transferring $Y_B$ to the measure $\mu|_B$ by the Radon–Nikodym factor: because $\nu|_B\sim\mu|_B$, [A2] supplies a positive almost-everywhere density $h=d\nu/d\mu$. The measure identity $\nu|_B=h\,d(\mu|_B)$ and [A7], applied to each $|g_s|^2\ge0$ and then to the increasing coordinate sums, show that $(g_s)_s\mapsto(g_s\sqrt h)_s$ is an isometry $\bigoplus_{s\le k'}L^2(\nu|_B)\to\bigoplus_{s\le k'}L^2(\mu|_B)$. It is onto because $h>0$ almost everywhere and its inverse is multiplication by $h^{-1/2}$; the same nonnegative integral identity proves the inverse isometric. It commutes with all multiplications, so composing it with $U_B$ gives a unitary $V:\bigoplus_{r\le k}L^2(\mu|_B)\to\bigoplus_{s\le k'}L^2(\mu|_B)$ commuting with all multiplications. [step 2.2, A2, A5, A7]

4.1 Constant-fibre rigidity: write $P_r,Q_s$ for the coordinate projections and $V_{sr}:=Q_sVP_r$. Each $V_{sr}$ commutes with all multiplications, so [A4] gives $V_{sr}=M_{g_{sr}}$ for a bounded Borel representative $g_{sr}$; choose these representatives simultaneously, since the coordinate pairs form a countable set. Because $0<\mu(B)<\infty$, the constant coordinate vectors $e_r$ and $e'_s$ belong to the localized Hilbert spaces. For every Borel $D\subseteq B$, the identities $V^*V=I$ and $VV^*=I$, localized by $M_{\mathbf1_D}$, give $\int_D\sum_s g_{sr}\overline{g_{st}}\,d\mu=\delta_{rt}\mu(D)$ and $\int_D\sum_r g_{sr}\overline{g_{ur}}\,d\mu=\delta_{su}\mu(D)$. For equal indices, the sums are nonnegative. Monotone convergence and equality for every $D$ imply $\sum_s|g_{sr}|^2=1$ and $\sum_r|g_{sr}|^2=1$ almost everywhere, for each fixed column $r$ and row $s$. Cauchy–Schwarz then makes each off-diagonal sum absolutely convergent almost everywhere and bounded by $1$; passing finite partial sums through the integrals gives the off-diagonal identities pointwise almost everywhere. Intersect the countably many resulting conull sets. At every point of that common set the columns define an isometry $\varphi(z):\ell^2(k)\to\ell^2(k')$ first on finite-support vectors and then by completion. The row identities likewise make its adjoint an isometry, so $\varphi(z)$ is onto. Thus $\varphi(z)^*\varphi(z)=I_k$ and $\varphi(z)\varphi(z)^*=I_{k'}$ there, with convergent matrix products. [step 3.2, A4, A5, A7]

5.1 A fibrewise unitary $\varphi(z):\ell^2(k)\to\ell^2(k')$ forces $k=k'$. If both are finite, its injectivity gives $k\le k'$ and its surjectivity gives $k'\le k$. If $k<\infty$ and $k'=\infty$, its range has dimension at most $k$ and cannot be all of $\ell^2$; the reverse case is excluded by injectivity. The only remaining case has $k=k'=\infty$. Hence every positive-measure constant-multiplicity region has equal fibre dimensions. [step 4.1]

6.1 The Borel sets $\{m=k\}\cap\{m'=k'\}$ over $k,k'$ cover a conull set, and by the rigidity steps above every one of them with positive measure satisfies $k=k'$; therefore $m=m'$ $\mu$-almost everywhere, and by the class equality also $\nu$-almost everywhere. [step 3.1, step 5.1, A6] ∎
