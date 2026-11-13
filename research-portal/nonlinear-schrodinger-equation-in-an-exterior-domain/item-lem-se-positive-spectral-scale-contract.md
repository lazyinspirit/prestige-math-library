---
title: "Positive spectral Hilbert scale: duality and interpolation"
status: draft
research_item: lem-se-positive-spectral-scale-contract
dependency_level: 5
---

## Prerequisites

- [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications)
- [lem-author-03489e9088b7-exact-scale-operator-interpolation](item-lem-author-03489e9088b7-exact-scale-operator-interpolation)
- [lem-author-03489e9088b7-bochner-lifted-spectral-measure](item-lem-author-03489e9088b7-bochner-lifted-spectral-measure)
- [math:thm-riesz-representation-for-hilbert-space](https://alphabetamath.cc/item/thm-riesz-representation-for-hilbert-space)
- [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus)
- [math:thm-spectral-theorem-for-unbounded-self-adjoint-operators](https://alphabetamath.cc/item/thm-spectral-theorem-for-unbounded-self-adjoint-operators)
- [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [physics:def-nrqm-coulomb-closed-semibounded-forms](https://alphabetamath.cc/physics/item/def-nrqm-coulomb-closed-semibounded-forms)
- [physics:thm-nrqmx-closed-form-representation](https://alphabetamath.cc/physics/item/thm-nrqmx-closed-form-representation)
- [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm)
- [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure)
- [math:lem-w-one-two-is-a-hilbert-space](https://alphabetamath.cc/item/lem-w-one-two-is-a-hilbert-space)
- [math:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set](https://alphabetamath.cc/item/lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set)



## Statement

Assume AC and let $A\ge I$ be self-adjoint on a nonzero complex Hilbert space $H$. Complete $D(A^\infty)=\bigcap_{n\ge1}D(A^n)$ in $\|A^{s/2}u\|_H$ to obtain $H_A^s$ for every real $s$. For $s\ge0$ this is $D(A^{s/2})$; the pivot pairing identifies $H_A^{-s}$ isometrically with the antidual of $H_A^s$, where the antidual consists of bounded conjugate-linear scalar functionals and the inner product is linear in the first variable. The map $A^{-r/2}:H_A^s\to H_A^{s+r}$ is isometric and onto for all real $r,s$. For $0<\theta<1$,
$$[H_A^a,H_A^b]_\theta=H_A^{(1-\theta)a+\theta b}$$
isometrically, using bounded continuous sum-valued strip functions holomorphic inside with endpoint-continuous boundary values vanishing at imaginary infinity, and the infimum of the maximum endpoint supremum norm.

Let $B\ge I$ be self-adjoint on another nonzero complex Hilbert space $K$. If a consistent complex-linear map is bounded $H_A^{a_j}\to K_B^{b_j}$, $j=0,1$, with bounds $M_j$, then it is bounded between the interpolated indices with norm at most $M_0^{1-\theta}M_1^\theta$. This also holds for target $L^2(0,\tau;K_B^b)$, $0<\tau<\infty$; in particular interpolation of these target spaces is isometric to $L^2(0,\tau;K_B^{(1-\theta)b_0+\theta b_1})$.

The unitary group $e^{it(I-A)}$ extends consistently to every scale level and commutes with all scale powers. For a real form realization on $H=L^2(\Omega;\mathbb C)$, complex conjugation $Ju=\overline u$ is an isometric real-linear involution at every level. Precisely, let $\Omega\subseteq\mathbb R^n$ be nonempty and open, $n\ge1$, and let $Q\subseteq H$ be a dense complex linear subspace invariant under $J$. Let $q:Q\times Q\to\mathbb C$ be sesquilinear, linear in its first variable, with $q(u,v)=\overline{q(v,u)}$, $q(u,u)\ge\|u\|_2^2$, and $Q$ complete for $(q(u,u)+\|u\|_2^2)^{1/2}$. Suppose $q(Ju,Jv)=\overline{q(u,v)}$. Here $A$ is the unique self-adjoint operator represented by $q$: its domain consists exactly of $u\in Q$ for which some $f\in H$ satisfies $q(u,v)=\langle f,v\rangle_2$ for every $v\in Q$, and then $Au=f$. In particular $A\ge I$.

The real-coefficient Dirichlet energy forms intended here are defined on $Q=H^1_0(\Omega;\mathbb C)$, the $H^1$ closure of $C_c^\infty(\Omega;\mathbb C)$, by
$$q(u,v)=\int_\Omega\left(\sum_{i,j=1}^n a^{ij}(x)D_ju\,\overline{D_iv}+c(x)u\overline v\right)\,dx.$$
The coefficients $a^{ij}$ are real measurable essentially bounded, $a^{ij}=a^{ji}$ almost everywhere, and for some $\kappa>0$ satisfy $\sum_{i,j}a^{ij}(x)\xi_j\xi_i\ge\kappa|\xi|^2$ for all $\xi\in\mathbb R^n$ almost everywhere; $c$ is real essentially bounded with $c\ge1$ almost everywhere. These forms satisfy the preceding hypotheses, including conjugation invariance, on every such open set. Taking $a^{ij}=\delta_{ij}$ and $c=1$ gives the shifted Dirichlet energy for $I-\Delta_D$, including the exterior-domain realization.

Here the Dirichlet Laplacian is defined by $\Delta_D=-L$ on $D(\Delta_D)=D(L)$, where $L\ge0$ is the unique self-adjoint operator represented by the unshifted form $q_0(u,v)=\sum_{j=1}^n\int_\Omega D_ju\,\overline{D_jv}\,dx$ on $Q=H^1_0(\Omega;\mathbb C)$. Explicitly, $D(L)$ consists of those $u\in Q$ for which some $f\in L^2(\Omega;\mathbb C)$ satisfies $q_0(u,v)=\langle f,v\rangle_2$ for every $v\in Q$, and then $Lu=f$. For $a^{ij}=\delta_{ij}$ and $c=1$, the represented shifted operator satisfies $D(A)=D(L)$ and $Au=u+Lu$, so $A=I-\Delta_D$.

## Facts & Assumptions

[F1] The cutoff-core lemma constructs the compatible completed scales, their onto unitary identifications and all scale powers [lem-author-03489e9088b7-spectral-cutoff-scale-identifications](item-lem-author-03489e9088b7-spectral-cutoff-scale-identifications).

[F2] Exact complex interpolation of scales and its endpoint operator bound are proved by analytic profiles and cutoff dual tests [lem-author-03489e9088b7-exact-scale-operator-interpolation](item-lem-author-03489e9088b7-exact-scale-operator-interpolation).

[F3] The pointwise lifted PVM gives the exact L2-in-time scale identity, without replacing equality of norms by equivalence [lem-author-03489e9088b7-bochner-lifted-spectral-measure](item-lem-author-03489e9088b7-bochner-lifted-spectral-measure).

[F4] Under countable choice, Hilbert-space Riesz representation is onto and isometric; use it for the pivot antidual after conjugating the functional [math:thm-riesz-representation-for-hilbert-space](https://alphabetamath.cc/item/thm-riesz-representation-for-hilbert-space).

[F5] This physics-namespace supplier has domain mathematics and mathematical premises: for a self-adjoint generator its spectral exponential is a strongly continuous unitary group and commutes with its bounded spectral calculus [physics:lem-nrqm-autonomous-dynamics-flow-calculus](https://alphabetamath.cc/physics/item/lem-nrqm-autonomous-dynamics-flow-calculus).

[F6] Uniqueness of the regular spectral PVM for a self-adjoint operator identifies conjugated spectral projections [math:thm-spectral-theorem-for-unbounded-self-adjoint-operators](https://alphabetamath.cc/item/thm-spectral-theorem-for-unbounded-self-adjoint-operators).

[F7] The Borel functional calculus supplies the exact domains and norm identities for real powers, products and bounded unitary multipliers [math:thm-unbounded-borel-functional-calculus](https://alphabetamath.cc/item/thm-unbounded-borel-functional-calculus).

[F8] Full AC is assumed exactly for the spectral suppliers and hence for their transitive choice requirements, including countable choice for Riesz and Bochner completeness [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice).

[F9] Closed semibounded symmetric forms use the first-variable-linear pairing and the positive associated-operator convention [physics:def-nrqm-coulomb-closed-semibounded-forms](https://alphabetamath.cc/physics/item/def-nrqm-coulomb-closed-semibounded-forms). Under AC, a densely defined symmetric form bounded below and complete in its shifted form norm has a unique self-adjoint representing operator, with exactly the domain characterization stated above [physics:thm-nrqmx-closed-form-representation](https://alphabetamath.cc/physics/item/thm-nrqmx-closed-form-representation). Both suppliers have domain mathematics.

[F10] Complex weak Sobolev derivatives use the bilinear test identity, and $H^1_0$ is the $H^1$ closure of the test functions [math:def-sobolev-space-wkp-and-its-norm](https://alphabetamath.cc/item/def-sobolev-space-wkp-and-its-norm) [math:def-wkp-zero-as-a-sobolev-closure](https://alphabetamath.cc/item/def-wkp-zero-as-a-sobolev-closure). Under countable choice $H^1$ and its closed subspace $H^1_0$ are Hilbert spaces with squared norm $\|u\|_2^2+\sum_j\|D_ju\|_2^2$ [math:lem-w-one-two-is-a-hilbert-space](https://alphabetamath.cc/item/lem-w-one-two-is-a-hilbert-space). On every open set the complex test functions, hence $H^1_0$, are dense in complex $L^2$ [math:lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set](https://alphabetamath.cc/item/lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set).

## Proof

**Given:** The data and AC in the statement.

**Goal:** All asserted identifications and bounds, with the stated exact norms.

1.1 The cutoff-core construction identifies $H_A^s$ with the completed spectral domain by the onto map $J_su=A^{s/2}u$, gives the claimed positive-index domain equality, and extends $A^{-r/2}$ as an onto isometry. For $s\ge0$ and core vectors $u,v$, the product rule gives $\langle u,v\rangle_H=\langle A^{-s/2}u,A^{s/2}v\rangle_H$. Thus define the pivot pairing for all $u\in H_A^{-s},v\in H_A^s$ by $\langle u,v\rangle_{-s,s}=\langle J_{-s}u,J_sv\rangle_H$. It extends the pivot pairing on the dense core, is linear in $u$ and conjugate-linear in $v$, and has norm bound $\|u\|_{-s}\|v\|_s$. Its functional norm equals $\|u\|_{-s}$ by taking $J_sv$ to be the normalized $J_{-s}u$ when nonzero. Conversely, for a bounded conjugate-linear functional $\ell$ on $H_A^s$, Riesz applied to $x\mapsto\overline{\ell(J_s^{-1}x)}$ gives $y\in H$ with $\ell(J_s^{-1}x)=\langle y,x\rangle$. Taking $u=J_{-s}^{-1}y$ proves onto antidual identification and the exact norm identity. This is the pivot antidual, with no identification with an unrestricted distribution space. [F1, F4, F7, F8]

1.2 The exact scale interpolation lemma applies to the compatible embeddings from the first fact for arbitrary real $a,b$, including reversed or equal endpoints. Its proof constructs admissible spectral profiles for the upper bound and tests arbitrary profiles against spectral-cutoff dual vectors for the lower bound, so the equality here is isometric in the stated strip convention. Apply its operator transport argument to the consistent endpoint map and the two scale couples to obtain $M_0^{1-\theta}M_1^\theta$, including zero endpoint bounds. For the time-dependent target use the lifted-PVM lemma on $L^2(0,\tau;K)$, which identifies all completed scale levels with the indicated Bochner spaces with exactly their integral norms. The same strip composition proof then gives the asserted time-target bound. [F1, F2, F3]

1.3 The Borel calculus makes $I-A$ self-adjoint. The mathematical flow supplier, with generator $I-A$, gives the strongly continuous unitary group $U(t)=e^{it(I-A)}$ on $H$. The pushforward of $E_A$ by $\lambda\mapsto1-\lambda$ represents $I-A$, as one checks first on real simple multipliers and then by truncation; spectral uniqueness therefore gives $U(t)=\int e^{it(1-\lambda)}\,dE_A(\lambda)$. Its multipliers have modulus one and commute with the spectral powers of $A$ on their domains: truncate $A$ to $E_NH$, use bounded multiplication there, and pass to the exact domain norm using spectral convergence. In particular $U(t)$ preserves the core and $\|U(t)u\|_s=\|u\|_s$. Extension and the inverse $U(-t)$ make it unitary at every level. On the dense core the group law, consistency of the embeddings, and commutation with each $A^{-r/2}$ hold; bounded extension between the indicated levels gives them everywhere. Also $J_sU(t)=U(t)J_s$ on the core and hence on the whole scale, so strong continuity follows from strong continuity on $H$. [F1, F5, F6, F7, F8]

1.4 First check the specified Dirichlet energies. The bounded coefficients and the inequality $2|zw|\le|z|^2+|w|^2$ show that every integrand is integrable for $u,v\in H^1_0$, so $q$ is well defined on Sobolev classes; it is sesquilinear, and symmetry follows by conjugating and exchanging $i,j$. Write $u=u_1+iu_2$ with real weak Sobolev components. The real symmetric matrix gives $\sum_{i,j}a^{ij}D_ju\,\overline{D_iu}=\sum_{i,j}a^{ij}(D_ju_1D_iu_1+D_ju_2D_iu_2)$ because its imaginary cross terms cancel. Ellipticity therefore gives $q[u]\ge\kappa\|\nabla u\|_2^2+\|u\|_2^2$, where $q[u]=q(u,u)$ and $\|\nabla u\|_2^2=\sum_j\|D_ju\|_2^2$. With $L=\max_{i,j}\|a^{ij}\|_\infty$, the reverse bound is $q[u]\le nL\|\nabla u\|_2^2+\|c\|_\infty\|u\|_2^2$. Consequently $q[u]+\|u\|_2^2$ is bounded below by $\min(\kappa,2)\|u\|_{H^1}^2$ and above by $\max(nL,\|c\|_\infty+1)\|u\|_{H^1}^2$. Completeness of $H^1_0$ and these two inequalities prove closedness in the required form norm. Its density in $L^2$ is [F10]. For a weak derivative, conjugate its bilinear test identity with test function $\overline\varphi$ to obtain $D_j(Ju)=J(D_ju)$; this also shows $\|Ju\|_{H^1}=\|u\|_{H^1}$. Conjugating test-function approximants proves $JQ=Q$. Conjugating the energy integrand, using the real coefficients, proves $q(Ju,Jv)=\overline{q(u,v)}$. Thus [F9] constructs the unique representing self-adjoint $A$, with the stated domain characterization; on $D(A)$, $\langle Au,u\rangle=q[u]\ge\|u\|_2^2$, hence $A\ge I$. This verifies every form hypothesis without requiring a bounded domain or a boundary trace theorem. [F8, F9, F10, given, algebra]

2.1 For the specialization $a^{ij}=\delta_{ij}$ and $c=1$, consider the unshifted form $q_0$ in the statement on the same $Q=H^1_0(\Omega;\mathbb C)$. It is well defined, symmetric and nonnegative, and $q_0[u]+\|u\|_2^2=\|u\|_{H^1}^2$. By [F10], $Q$ is dense in $L^2$ and complete in this form norm. Thus [F9], with lower bound zero and the assumed AC, gives its unique nonnegative self-adjoint representing operator $L$ and exactly the stated characterization of $D(L)$ and $Lu$. This defines $\Delta_D=-L$ on $D(L)$. The shifted form is $q(u,v)=q_0(u,v)+\langle u,v\rangle_2$. If $u\in D(L)$, then $q(u,v)=\langle Lu+u,v\rangle_2$ for all $v\in Q$, so the domain characterization for $A$ gives $u\in D(A)$ and $Au=Lu+u$. Conversely, if $u\in D(A)$, then $q_0(u,v)=\langle Au-u,v\rangle_2$ for every $v\in Q$, giving $u\in D(L)$ and $Lu=Au-u$. Therefore $D(A)=D(L)$ and $A=I+L=I-\Delta_D$, as operators with this common domain. The argument applies to every nonempty open $\Omega$, hence also to the exterior domains in the statement. [F8, F9, F10, step 1.4, given, algebra]

3.1 Now take any real form realization in the statement, including those just constructed. The map $J$ is a conjugate-linear isometric involution on $L^2(\Omega)$. By [F9], $u\in D(A)$ with $Au=f$ exactly when $u\in Q$ and $q(u,v)=\langle f,v\rangle$ for every $v\in Q$. For such $u$, the real-form identity and $JQ=Q$ give $q(Ju,v)=\overline{q(u,Jv)}=\langle JAu,v\rangle$, so $Ju\in D(A)$ and $AJu=JAu$; applying $J$ twice proves $JD(A)=D(A)$. The regular PVM $E'(C)=JE_A(C)J$ is complex-linear projection-valued: the two conjugate-linear factors cancel, orthogonality and countable additivity are preserved by the isometry, and its scalar measures obey $\langle E'(C)x,x\rangle=\langle E_A(C)Jx,Jx\rangle$, so regularity is preserved. For real simple spectral multipliers, conjugation transports their spectral integrals by $J$; truncation gives the same assertion for the identity multiplier with its exact square-integrability domain. Hence $E'$ represents $JAJ=A$. Spectral uniqueness gives $E'=E_A$. Applying the same real-multiplier and truncation argument to every real power shows that $J$ commutes with that power on its domain and preserves the core. Thus $\|Ju\|_s=\|A^{s/2}Ju\|_2=\|JA^{s/2}u\|_2=\|u\|_s$ on the core. The unique continuous extension to each completion is real-linear and isometric, and has square the identity by density. Together with the preceding steps this proves all the assertions. [F1, F6, F7, F8, F9, step 1.1, step 1.2, step 1.3, step 1.4, step 2.1] ∎

## Source notes

This is a locally authored proof composed from the three direct spectral-scale helpers and the declared library inputs. The interpolation and Bochner identities retain their exact norms. The form representation theorem is reused with its actual mathematical hypotheses; the stated real Dirichlet energies and their conjugation invariance are checked locally. The physics-namespace inputs have domain mathematics and contribute no physical premise. This proposal claims neither independent review nor an original-article defect.
