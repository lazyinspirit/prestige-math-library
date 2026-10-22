---
id: pthm-emx-helicity-projection
kind: physics-theorem
title: Exact helicity projectors in vacuum
status: published
origin: pipeline
domain: physics
library: physics
dependency_level: 1
deps:
  - def-emx-transverse-fourier-field
  - def-cross-product-in-r3
  - def-euclidean-inner-product
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - thm-complex-numbers-form-a-field
dependency_roles:
  def-emx-transverse-fourier-field: formulation-prerequisite
  def-cross-product-in-r3: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
proof_strategy: direct
physical_scope: >-
  Conditional classical source-free vacuum electromagnetism in the fixed SI
  inertial laboratory chart. Helicity is the plus or minus eigenvalue of the
  stated operator on each nonzero transverse Fourier mode. No global smooth
  polarization basis, photon Hilbert space, position operator, material medium,
  or empirical claim is assumed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "K. Y. Bliokh, F. J. Rodríguez-Fortuño, F. Nori and A. V. Zayats, Spin-orbit interactions of light, Nature Photonics 9 (2015), arXiv:1505.02864"
      url: "https://arxiv.org/pdf/1505.02864"
      locator: "Section 'Angular momenta and geometric phases', Boxes 1–2, PDF pp. 3–5: helicity labels, transverse polarization, and direction-dependent geometric phases. The projector identities here are proved directly."
    - title: "Niklas Beisert, Elektrodynamik, ETH Zürich 2024 FS lecture notes"
      url: "https://people.phys.ethz.ch/~nbeisert/lectures/ED-24FS-Skript.pdf"
      locator: "§11.1 'Anfangswertproblem', subsection 'Fourier-Raum', equations (11.5)–(11.10): transverse source-free Fourier modes with dispersion ω=c|k|. The helicity eigenspace calculation here is local."
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-10-22
    scope: Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/physics-non-fluid-129-2026-10-21-r2-publication.json.
    delegated_by: owner
---

## Statement

For $k\in\mathbb R^3\setminus\{0\}$, let $n:=k/|k|$ and let the complex
transverse fibre be
$T_k:=\{v\in\mathbb C^3:\sum_j k_jv_j=0\}$. On $\mathbb C^3$ define
$C(k)v:=i\,n\times v$ and
$P_T(k)v:=v-n\sum_j n_jv_j$. Define
$P_\sigma(k):=\tfrac12(P_T(k)+\sigma C(k))$ for $\sigma\in\{+1,-1\}$.
Use the Hermitian product
$\langle u,v\rangle_H:=\sum_j\overline{u_j}v_j$. Then $P_T(k)$ is the
orthogonal projection onto $T_k$; $C(k)$ is Hermitian, vanishes on the
longitudinal line, and satisfies $C(k)^2=P_T(k)$. The restrictions of
$P_{+1}(k)$ and $P_{-1}(k)$ to $T_k$ are orthogonal rank-one projections with
sum $P_T(k)$. Their ranges are the two helicity eigenspaces, with eigenvalues
$+1$ and $-1$ for $C(k)$.

For a smooth compactly supported transverse amplitude $a(k)$ whose support
avoids $0$, define the Fourier multipliers
$(M_\sigma a)(k):=P_\sigma(k)a(k)$ and vacuum evolution
$(U_ta)(k):=e^{-ic|k|t}a(k)$. Both preserve this amplitude class and
$M_\sigma U_t=U_tM_\sigma$. For each proper rotation $R\in SO(3)$, where
$SO(3):=\{R\in\mathbb R^{3\times3}:R^TR=I,\det R=1\}$, define
$(R_*a)(k):=R a(R^Tk)$. Then $M_\sigma R_*=R_*M_\sigma$. The formula for
$P_\sigma(k)$ is globally smooth on $\mathbb R^3\setminus\{0\}$; no globally
smooth nonvanishing polarization vector is asserted.

## Statement references

[[def-emx-transverse-fourier-field]]

[[def-cross-product-in-r3]]

[[def-euclidean-inner-product]]

[[def-complex-conjugate-real-imaginary-part-and-modulus]]

## Facts & Assumptions

**Given:** $k\ne0$, the Euclidean orientation and cross product on $\mathbb R^3$,
their complex componentwise extensions, and the transverse Fourier amplitudes of
the classical field item above.

[F1] The amplitude space consists of smooth compactly supported maps
$a:\mathbb R^3\setminus\{0\}\to\mathbb C^3$ with
$k\cdot a(k)=0$; the support avoids $0$.
([[def-emx-transverse-fourier-field]])

[F2] The cross product is the right-handed Euclidean cross product, is
bilinear, obeys $n\times(n\times v)=n(n\cdot v)-v$ for real $n$ and complex
$v$, and satisfies $(u\times v)\cdot w=\det[u,v,w]$, by its coordinate
formula. For real vectors its coordinate formula also gives
$|u\times v|^2=|u|^2|v|^2-(u\cdot v)^2$.
([[def-cross-product-in-r3]])

[F3] The real Euclidean dot product is $n\cdot v=\sum_jn_jv_j$; complex
conjugation and the Hermitian product are componentwise, with $i^2=-1$.
([[def-euclidean-inner-product]],
[[def-complex-conjugate-real-imaginary-part-and-modulus]],
[[thm-complex-numbers-form-a-field]])

[A1] $R$ is a real matrix with $R^TR=I$ and $\det R=1$; these conditions
define the proper rotation group used here.

## Proof

1.1 Since $n\cdot n=1$, the formula $P_Tv=v-n(n\cdot v)$ gives $n\cdot P_Tv=0$ and $P_Tv=v$ whenever $v\in T_k$; hence $P_T$ is idempotent with range $T_k$. Also $n\times n=0$, so $Cn=0$. Write $N_n v:=n\times v$. Its real matrix is skew-symmetric, so $N_n^T=-N_n$; with the Hermitian product of [F3], $(iN_n)^*=(-i)N_n^T=iN_n$, hence $C(k)$ is Hermitian. The vector triple product in [F2] gives $C(k)^2v=-n\times(n\times v)=v-n(n\cdot v)=P_T(k)v$. Also $P_T(k)^*=P_T(k)$ because $n$ is real, $P_T(k)^2=P_T(k)$, its range is $T_k$, and $C(k)n=0$. [F2, F3, algebra]

2.1 The cross product with $n$ is perpendicular to $n$, so $P_TC=C$; also $C(n(n\cdot v))=0$, so $CP_T=C$. Thus $P_TC=CP_T=C$. Since $C^2=P_T$, direct multiplication gives $$P_\sigma^2=\tfrac14(P_T+2\sigma C+C^2)=\tfrac12(P_T+\sigma C)=P_\sigma,\quad P_{+1}P_{-1}=\tfrac14(P_T-C^2)=0,\quad P_{+1}+P_{-1}=P_T.$$ Both are Hermitian by step 1.1. To verify their ranks, let $e_1,e_2$ be the first two coordinate unit vectors. They are linearly independent, so at least one, say $e_j$, is not parallel to $n$. Set $u:=(e_j-(e_j\cdot n)n)/|e_j-(e_j\cdot n)n|$; its denominator is positive, and $u$ is a real unit vector perpendicular to $n$. Put $v:=n\times u$. The norm identity in [F2] gives $|v|=1$, and the determinant identity gives $u\cdot v=0$; the triple-product identity gives $n\times v=-u$. Thus $u,v$ span the real transverse plane. For $w_+:=(u+iv)/\sqrt2$ and $w_-:=(u-iv)/\sqrt2$, expansion gives $\langle w_+,w_+\rangle_H=\langle w_-,w_-\rangle_H =\tfrac12(|u|^2+|v|^2)=1$ and $\langle w_+,w_-\rangle_H=\tfrac12(|u|^2-|v|^2-2i(u\cdot v))=0$. The relations $n\times u=v$ and $n\times v=-u$ give $Cw_+=w_+$ and $Cw_-=-w_-$. Since some coordinate $n_j\ne0$, the equation $n\cdot z=0$ uniquely determines $z_j$ from the other two complex coordinates, so $T_k$ has complex dimension two. Hence $w_+,w_-$ span $T_k$, and the complementary orthogonal projectors $P_{+1},P_{-1}$ each have rank one there. The finite coordinate choice is only for this fixed $k$; no family of choices is made. [step 1.1, F2, F3, algebra]

3.1 The coefficients of $P_T(k)$ and $C(k)$ are smooth functions of $k\ne0$ because $n=k/|k|$ is smooth there. Step 2.1 shows that $P_\sigma(k)$ has range in $T_k$, so multiplication by it sends a smooth transverse amplitude supported in a compact set away from zero to another such amplitude. Since $U_t$ multiplies by the scalar $e^{-ic|k|t}$, $P_\sigma(k)e^{-ic|k|t}a(k)=e^{-ic|k|t}P_\sigma(k)a(k)$ pointwise, proving $M_\sigma U_t=U_tM_\sigma$. [F1, step 2.1, algebra]

4.1 For $R$ as in [A1], the map $R_*a$ is smooth and its support is the rotated compact set $R(K)$, which still avoids zero. Moreover $k\cdot R a(R^Tk)=(R^Tk)\cdot a(R^Tk)=0$ by $R^TR=I$, so $R_*a$ belongs to the amplitude class. Preservation of orientation gives $R(n\times z)=(Rn)\times(Rz)$: for every real $w$, $(Rn\times Rz)\cdot Rw=\det[Rn,Rz,Rw]=\det(R)\det[n,z,w] =(n\times z)\cdot w=(R(n\times z))\cdot Rw$, and nondegeneracy of the Euclidean inner product identifies the two vectors. Orthogonality gives $|Rk|=|k|$. Therefore $P_T(Rk)=RP_T(k)R^T$ and $C(Rk)=RC(k)R^T$, hence $P_\sigma(Rk)=RP_\sigma(k)R^T$. Substituting this identity into the definitions of $M_\sigma$ and $R_*$ gives $M_\sigma R_*a(k)=P_\sigma(k)Ra(R^Tk)=R P_\sigma(R^Tk)a(R^Tk) =R_*M_\sigma a(k)$. This proves the proper-rotation commutation claim; the determinant condition is what preserves, rather than reverses, the helicity label. [A1, F1, F2, step 2.1, algebra] ∎

