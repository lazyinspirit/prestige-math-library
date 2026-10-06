---
id: lem-rank-one-hecke-parameter-for-equal-torus-characters
kind: lemma
title: "The rank-one Hecke parameter for equal torus characters"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-equal-coordinate-rank-one-principal-series-of-gl2-fq
  - lem-length-additive-products-of-standard-intertwiners
  - def-standard-intertwining-operators-for-finite-principal-series
  - def-diagonal-torus-characters-and-weyl-action
  - lem-rank-one-hecke-quadratic-relation
  - def-bruhat-double-coset-basis-of-the-finite-hecke-algebra
  - thm-group-ring-is-a-unital-algebra-with-basis-g
  - lem-principal-series-endomorphisms-as-the-chi-idempotent-corner
  - thm-determinant-multiplicative
  - thm-determinant-of-a-triangular-matrix
  - def-principal-series-module-for-finite-gl-n
  - def-compositions-partial-flags-and-standard-parabolics
  - thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Lemma 11.10, its proof, and the discussion of (P1)-(P3) preceding Theorem 11.11, printed pp. 49-50"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Proposition 2.8(2) and its proof (the equal-character rank-one decomposition), printed pp. 12-13"
      url: "https://masaooi.github.io/DL.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Exercise 5.11 ($q_s=q$ for the standard Frobenius and $GL_n$), printed p. 44"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

For Weyl-sorted $\eta$, each simple $s\in S_\eta$ exchanges two adjacent equal
coordinates $a,a$. The associated rank-one Levi has principal series
$(a\circ\det)\oplus(\operatorname{St}\otimes a\circ\det)$ on its
$\operatorname{GL}_2$ factor, tensored with one-dimensional characters on the
remaining torus factors, with constituent degrees $1,q$. The canonical raw
intertwiner has eigenvalues $a(-1)q$ and $-a(-1)$. The normalized
$T_s=a(-1)^{-1}B_s$ satisfies $T_s^2=(q-1)T_s+q\,\mathrm{id}$; thus the
parameter is exactly $q$, and the normalization of
[[lem-length-additive-products-of-standard-intertwiners]] gives
$\lambda_w=\prod_r a_r(-1)^{-\ell(w_r)}$. For arbitrary $\chi$ this assertion
holds for the transported generators after Weyl sorting. In particular the naive
generator fails the parameter-$q$ relation when $a(-1)=-1$: for $q=3$ and the
nontrivial character of $\mathbb F_3^\times$, its eigenvalue on $a\circ\det$ is
$-3$, which is neither $3$ nor $-1$. No choice principle is used.

## Facts & Assumptions

**Given:** A Weyl-sorted character $\eta=(a_1^{n_1},\dots,a_k^{n_k})$ of the diagonal torus $T$ of $G=\operatorname{GL}_n(\mathbb F_q)$ with distinct $a_r$, a simple reflection $s\in W_\eta$ in the block $r$ of size $n_r\ge2$, the characters $\psi_r=a_r\circ\det$ and $\rho=\prod_ra_r\circ\det_r$ of $L=\prod_r\operatorname{GL}_{n_r}(\mathbb F_q)$, the idempotents $e_r=|B_r|^{-1}\sum_{b\in B_r}\widetilde\eta_r(b)^{-1}b$ and $e_{B_r}$, and the operators $B_s=R_{\Theta_{s^{-1}}}$, $T_s=\rho(\dot s)^{-1}B_s$ of [[def-standard-intertwining-operators-for-finite-principal-series]] and [[lem-length-additive-products-of-standard-intertwiners]].

[F1] For the block $\operatorname{GL}_{n_r}$ the standard basis element $T_s^{(r)}=q\,e_{B_r}\dot se_{B_r}$ satisfies $T_s^{(r)2}=(q-1)T_s^{(r)}+q\,e_{B_r}$ ([[lem-rank-one-hecke-quadratic-relation]], [[def-bruhat-double-coset-basis-of-the-finite-hecke-algebra]]).

[F2] The map $m_r(g)=\psi_r(g)^{-1}g$ is an algebra automorphism of $\mathbb C[\operatorname{GL}_{n_r}(\mathbb F_q)]$ with $m_r(e_{B_r})=e_r$; it sends $T_s^{(r)}=q\,e_{B_r}\dot se_{B_r}$ to $\psi_r(\dot s)^{-1}\Theta_s^{(r)}$ with $\Theta_s^{(r)}=q\,e_r\dot se_r$, because $\psi_r(b)=a_r(\det b)=\widetilde\eta_r(b)$ for upper triangular $b$ ([[thm-group-ring-is-a-unital-algebra-with-basis-g]], [[thm-determinant-multiplicative]], [[thm-determinant-of-a-triangular-matrix]], [[lem-length-additive-products-of-standard-intertwiners]], [[def-principal-series-module-for-finite-gl-n]]).

[F3] $\psi_r(\dot s)=a_r(\det P_s)=a_r(-1)\in\{1,-1\}$, and $\rho(\dot s)=a_r(-1)$ for $s$ in block $r$. The element $\Theta_s^{(r)}$ satisfies $\Theta_s^{(r)2}=(q-1)\psi_r(\dot s)\Theta_s^{(r)}+q\,e_r$, and $e_r$ acts as the identity on the module $e_r\mathbb C[\operatorname{GL}_{n_r}]e_r$. [F2, algebra]

[F4] For the rank-one Levi $M=\operatorname{GL}_2(\mathbb F_q)\times(\mathbb F_q^\times)^{n-2}$ attached to $s$, the principal series of the restriction of $\eta$ is $[(a\circ\det)\oplus(\operatorname{St}\otimes a\circ\det)]\boxtimes\xi$ with $\xi$ a one-dimensional character of $(\mathbb F_q^\times)^{n-2}$; in particular its constituents have degrees $1$ and $q$, and the constituent of degree $1$ is isomorphic to $\rho$ restricted to $M$ ([[lem-equal-coordinate-rank-one-principal-series-of-gl2-fq]], [[def-compositions-partial-flags-and-standard-parabolics]], [[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]]).

[F5] On the $M_2=\operatorname{GL}_2(\mathbb F_q)$ factor of the rank-one Levi, the idempotent models of $I(1)$ and $I(a,a)$ are $\mathbb C[M_2]e_{B_2}$ and $\mathbb C[M_2]e_\psi$, respectively ([[lem-principal-series-endomorphisms-as-the-chi-idempotent-corner]]). The spherical operator $R_{T_s}$ has eigenvalues $q$ on the trivial constituent and $-1$ on $\operatorname{St}$ ([[lem-equal-coordinate-rank-one-principal-series-of-gl2-fq]]).

## Proof

**Proof technique:** direct.

1.1 Fix $s$ in block $r$. Apply the algebra automorphism $m_r$ of [F2] to the block identity $T_s^{(r)2}=(q-1)T_s^{(r)}+q\,e_{B_r}$ of [F1]: since $m_r$ is multiplicative and $m_r(T_s^{(r)})=\psi_r(\dot s)^{-1}\Theta_s^{(r)}$, one gets $\psi_r(\dot s)^{-2}\Theta_s^{(r)2}=(q-1)\psi_r(\dot s)^{-1}\Theta_s^{(r)}+q\,e_r$, that is $\Theta_s^{(r)2}=(q-1)\psi_r(\dot s)\Theta_s^{(r)}+q\,e_r$ because $\psi_r(\dot s)^2=1$. [F1, F2, F3, algebra]

1.2 Write the rank-one Levi as $M_2\times D$ with $M_2=\operatorname{GL}_2(\mathbb F_q)$ and $D=(\mathbb F_q^\times)^{n-2}$ carrying the character $\xi$ of [F4]. Covariant functions on this product satisfy $f(g,d)=\xi(d)^{-1}f(g,1)$, identifying its principal series with $I_{M_2}(a,a)\boxtimes\xi$. Put $\psi=a\circ\det$ on $M_2$. The map $m(g)=\psi(g)^{-1}g$ of [F2] sends $\mathbb C[M_2]e_{B_2}$ bijectively to $\mathbb C[M_2]e_\psi$ and satisfies $m(hv)=\psi(h)^{-1}h\,m(v)$. It therefore identifies $I_{M_2}(1)\otimes\psi$ with $I_{M_2}(a,a)$ and intertwines $R_{T_s}$ with $R_{m(T_s)}$, since $m(vT_s)=m(v)m(T_s)$. Here $m(T_s)=a(-1)^{-1}\Theta_s$, the normalized operator. By [F5] its eigenvalues are $q$ and $-1$ on the respective degree-$1$ and degree-$q$ constituents; tensoring with $\xi$ preserves these scalars. The raw intertwiner thus acts by $a(-1)q$ and $-a(-1)$ on those constituents. [F2, F4, F5, algebra]

2.1 On the module $e_r\mathbb C[\operatorname{GL}_{n_r}]e_r$ the idempotent $e_r$ acts as the identity, so the operator $R_{\Theta_s^{(r)}}$ on this module satisfies $R_{\Theta_s^{(r)}}^2=(q-1)\psi_r(\dot s)R_{\Theta_s^{(r)}}+q\,\mathrm{id}$; in the ambient corner $e_\eta^G\mathbb C[G]e_\eta^G$ the element $\Theta_s^{(r)}$ is corrected by the idempotent $e_{U_P}$, whose right multiplication acts as the identity on $\mathbb C[G]e_\eta^G$, so the raw operator $B_s$ on $I(\eta)$ satisfies $B_s^2=(q-1)a_r(-1)B_s+q\,\mathrm{id}$ with $a_r(-1)=\psi_r(\dot s)$ by [F3]. [F3, step 1.1, algebra]

3.1 Put $T_s=\rho(\dot s)^{-1}B_s=a_r(-1)^{-1}B_s$, which is the normalization of [[lem-length-additive-products-of-standard-intertwiners]]; since $a_r(-1)^2=1$, multiplying the relation of step 2.1 by $a_r(-1)^{-2}$ gives $T_s^2=(q-1)T_s+q\,\mathrm{id}$. Hence the polynomial $(X-q)(X+1)$ annihilates $T_s$, so every eigenvalue of $T_s$ on any finite-dimensional constituent of $I(\eta)$ lies in $\{q,-1\}$, and every eigenvalue of the raw operator $B_s=a_r(-1)T_s$ lies in $\{a_r(-1)q,\,-a_r(-1)\}$. [step 2.1, algebra]

4.1 For the normalization, $\rho(\dot w)=\prod_ra_r(\det P_{w_r})=\prod_ra_r(-1)^{\ell(w_r)}$ for $w\in W_\eta$, so the factor $\lambda_w=\rho(\dot w)^{-1}$ of [[lem-length-additive-products-of-standard-intertwiners]] is exactly $\prod_ra_r(-1)^{-\ell(w_r)}$; for an arbitrary $\chi$ the transported generators of that lemma inherit the relation $T_s^2=(q-1)T_s+q\,\mathrm{id}$ through the sorting isomorphism. For $q=3$ and the nontrivial character $a$ of $\mathbb F_3^\times$ one has $a(-1)=a(2)=-1$, so the raw eigenvalue on $a\circ\det$ is $a(-1)q=-3$, which is neither $3$ nor $-1$: the naive generator fails the parameter-$q$ relation. [F4, step 3.1, given, algebra]

5.1 Steps 1.1, 2.1 and 3.1 compute the rank-one quadratic relation with parameter exactly $q$ after normalization; step 1.2 identifies the two constituent degrees and eigenvalues, and step 4.1 records the normalizing cocharacter $\lambda_w$, the transport to arbitrary $\chi$ and the explicit $q=3$ failure of the naive normalization. All groups, idempotents and eigenvalues are explicit and finite, and no choice principle is used. [step 1.1, step 1.2, step 2.1, step 3.1, step 4.1] ∎ 