---
id: lem-unitary-intertwiners-preserve-direct-integral-fiber-dimension
kind: lemma
title: Unitary intertwiners preserve direct-integral fiber dimension
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-spectral-multiplicity-function-in-the-separable-case, thm-borel-functional-calculus-for-bounded-normal-operators, thm-integration-against-a-radon-nikodym-derivative, def-axiom-of-choice, thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value, thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation, thm-riesz-fischer-completeness-of-l-p, def-regular-complex-borel-measure-on-an-lch-space, def-total-variation-of-a-signed-or-complex-measure, thm-hilbert-adjoint-properties, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions]
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

[A2] If a bounded linear functional on $C(\Lambda;\mathbb C)$ is represented by two finite regular complex measures, then the two measures coincide, and $|\int g\,d\sigma|\le\|g\|_\infty|\sigma|(\Lambda)$; the total variation of a measure with density $\sigma\in L^1(\mu)$ is $|\sigma|\,d\mu$ ([[thm-bounded-c-zero-functionals-are-regular-complex-measure-integrals]], [[thm-integrals-against-signed-or-complex-measures-are-bounded-by-total-variation]], [[thm-total-variation-of-an-absolutely-continuous-signed-or-complex-measure-has-density-the-absolute-value]]).

[A3] For a finite regular Borel measure $\mu$ on the compact metric space $\Lambda$ and $\sigma\in L^1(\mu)$, the measure $E\mapsto\int_E\sigma\,d\mu$ is regular: continuous densities are reducible to the regular case by domination, $C(\Lambda)$ is dense in $L^1(\mu)$, and regularity is preserved by total-variation limits; the identification $|\sigma\,d\mu|=|\sigma|\,d\mu$ holds ([[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-regular-complex-borel-measure-on-an-lch-space]], [[def-total-variation-of-a-signed-or-complex-measure]]).

[A4] $L^2$ of a finite measure is complete and $L^\infty$ is dense in it; a bounded operator on it commuting with every multiplication $M_h$ is itself a multiplication: it is $M_g$ with $g:=T\mathbf 1_\Lambda$, because $T(h)=hT(1)$ for every $h\in L^\infty$, and $\|M_g\|=\|g\|_\infty$ ([[thm-riesz-fischer-completeness-of-l-p]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[A5] Adjoints: $(UM_z)^*=M_z^*U^*$ and $M_z^*=M_{\overline z}$; a unitary satisfies $U^*U=I$ and $UU^*=I$ ([[thm-hilbert-adjoint-properties]], [[def-hilbert-space]]).

[A6] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

**Given:** Nonempty compact $\Lambda\subseteq\mathbb C$, nonzero finite regular positive measures $\mu,\nu$, Borel multiplicities $m,m'$, and a unitary $U:L^2(\mu,m)\to L^2(\nu,m')$ with $UM_z=M_zU$; write $X:=\bigoplus_rL^2(\mu|_{A_r})$, $Y:=\bigoplus_sL^2(\nu|_{B_s})$.

1.1 $U$ preserves all multiplications: $UM_z=M_zU$ gives $UM_z^*=M_z^*U$ by taking adjoints, so $U$ commutes with every $\ast$-polynomial in $z,\overline z$; $\ast$-polynomials are uniformly dense in the continuous functions and both sides are bounded, so $UM_h=M_hU$ for continuous $h$; for fixed vectors $p,q\in X$ the measure $\rho_{p,q}(E):=\langle M_{\mathbf 1_E}p,q\rangle=\int_E\sigma_{p,q}\,d\mu$ with $\sigma_{p,q}=\sum_rp_r\overline{q_r}\in L^1(\mu)$ is a finite regular complex measure, and for continuous $h$ one has $\int h\,d\rho_{p,q}=\langle M_hp,q\rangle=\langle UM_hp,Uq\rangle=\langle M_hUp,Uq\rangle=\int h\,d\rho_{Up,Uq}$, so the two regular measures coincide and hence $\langle M_hp,q\rangle=\langle M_hUp,Uq\rangle$ for every bounded Borel $h$ and all $p,q$; therefore $UM_h=M_hU$ for every bounded Borel $h$. [A1, A2, A3, A5]

2.1 Absolute continuity: the field $e:=(\mathbf 1_{A_1},0,0,\dots)\in X$ has scalar measure $\langle M_he,e\rangle=\int h\mathbf 1_{A_1}\,d\mu=\int h\,d\mu$ because $A_1$ is $\mu$-conull, while the scalar measure of $Ue$ in $Y$ is $\int h\,w\,d\nu$ with $w:=\sum_s|(Ue)_s|^2\in L^1(\nu)$; the identity $\langle M_hUe,Ue\rangle=\langle UM_he,Ue\rangle=\langle M_he,e\rangle$ for all bounded Borel $h$ gives $\int_Ew\,d\nu=\mu(E)$ for every Borel $E$, hence $\mu\ll\nu$. [step 1.1, A1]

2.2 Localisation to constant multiplicity: let $B\subseteq\Lambda$ be Borel with $m\equiv k$ and $m'\equiv k'$ on $B$ for constants $k,k'\in\{1,2,\dots\}\cup\{\infty\}$ and $\mu(B)>0$; since $UM_{\mathbf 1_B}=M_{\mathbf 1_B}U$, the unitary restricts to a unitary $U_B$ between the localised spaces $X_B:=\{p\in X:p_r=0\ \mu\text{-a.e. off }B\}=\bigoplus_{r\le k}L^2(\mu|_B)$ and $Y_B=\bigoplus_{s\le k'}L^2(\nu|_B)$. [step 1.1, A1]

3.1 The same argument applied to the unitary $U^*$, which also intertwines the multiplications, shows $\nu\ll\mu$; hence $\mu$ and $\nu$ are mutually absolutely continuous. [step 1.1, step 2.1, A5]

3.2 Transferring $Y_B$ to the measure $\mu|_B$ by the Radon–Nikodym factor: because $\nu|_B\sim\mu|_B$, the map $(g_s)_s\mapsto(g_s\sqrt{d\nu/d\mu})_s$ is a unitary $\bigoplus_{s\le k'}L^2(\nu|_B)\to\bigoplus_{s\le k'}L^2(\mu|_B)$ commuting with all multiplications, so composing with $U_B$ gives a unitary $V:\bigoplus_{r\le k}L^2(\mu|_B)\to\bigoplus_{s\le k'}L^2(\mu|_B)$ commuting with all multiplications. [step 2.2, A2, A5]

4.1 Constant-fibre rigidity: writing $P_r,Q_s$ for the coordinate projections and $V_{sr}:=Q_sVP_r$, each $V_{sr}$ commutes with all multiplications, so $V_{sr}=M_{g_{sr}}$ for a bounded Borel function $g_{sr}$; hence $V$ is given fibrewise by the measurable matrix field $\varphi(z):=(g_{sr}(z))$, and $V^*V=I$, $VV^*=I$ force $\varphi(z)^*\varphi(z)=I_k$ and $\varphi(z)\varphi(z)^*=I_{k'}$ for $\mu$-almost every $z$. [step 3.2, A4]

5.1 A measurable field of linear maps satisfying both identities exists only if $k=k'$: if $k<\infty$ then $\varphi(z)^*\varphi(z)=I_k$ shows the range of $\varphi(z)^*$ spans a $k$-dimensional space, so $\varphi(z)\varphi(z)^*$, whose rank is at most $k$, cannot equal $I_{k'}$ when $k'=\infty$; symmetrically $k'<\infty<k$ is impossible; and $k=k'\in\{1,2,\dots\}\cup\{\infty\}$ is consistent. Hence $k=k'$. [step 4.1]

6.1 The Borel sets $\{m=k\}\cap\{m'=k'\}$ over $k,k'$ cover a conull set, and by the rigidity steps above every one of them with positive measure satisfies $k=k'$; therefore $m=m'$ $\mu$-almost everywhere, and by the class equality also $\nu$-almost everywhere. [step 3.1, step 5.1, A6] ∎
