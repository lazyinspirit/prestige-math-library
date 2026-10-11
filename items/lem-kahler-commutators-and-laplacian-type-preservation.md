---
id: lem-kahler-commutators-and-laplacian-type-preservation
kind: lemma
title: "Kähler commutators and preservation of harmonic types"
status: draft
origin: pipeline
dependency_level: 8
deps:
  - def-compact-kahler-manifold-and-hodge-polarization-conventions
  - lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - lem-formal-adjoints-of-differential-operators-exist-and-are-unique
  - thm-d-dbar-decomposition-and-identities
  - thm-general-stokes-theorem
  - thm-holomorphic-inverse-function-theorem-several-variables
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Fall 2024), Class 14, Lemma 14.7 and its proof, pp. 3-4: holomorphic normal coordinates for a Kähler metric"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class14.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 17 'Proof of the Kähler identities' (October 29), 4 pp.; Lefschetz decomposition, Lemma 17.1, the Weyl element, Proposition 17.3 (Weil's identity with its two-plane proof), Kähler identities"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class17.pdf"
    - title: "Christian Schnell, Complex Manifolds, MAT 545 (Stony Brook, Fall 2024), Class 18 'The Hodge decomposition' (October 31), 6 pp.; Corollaries 18.1-18.4, Theorem 18.5 (18.6), Corollary 18.7, Proposition 18.12 (∂∂̄-lemma), cohomological Lefschetz decomposition"
      url: "https://www.math.stonybrook.edu/~cschnell/mat545/class18.pdf"
    - title: "Jean-Pierre Demailly, Complex Analytic and Differential Geometry, Chapter VI (Hodge Theory), §5.1-§5.3 and §6.1, printed pp. 300-306; (5.1)-(5.17) operators of Hermitian geometry, primitive elements and hard Lefschetz; (6.3)-(6.7) Kähler commutation identities"
      url: "https://www-fourier.univ-grenoble-alpes.fr/~demailly/manuscripts/agbook.pdf"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
---

## Statement

Assume the Axiom of Choice. Let $X$ be a compact Kähler manifold with the
conventions of [[def-compact-kahler-manifold-and-hodge-polarization-conventions]].
Then the formal adjoints satisfy

$$[\Lambda,\partial]=i\bar\partial^*,\qquad [\Lambda,\bar\partial]=-i\partial^*,\qquad [\bar\partial^*,L]=i\partial,\qquad [\partial^*,L]=-i\bar\partial .$$

One has $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$, the mixed anticommutators
$\partial\bar\partial^*+\bar\partial^*\partial$ and
$\bar\partial\partial^*+\partial^*\bar\partial$ vanish, and $\Delta_d$ commutes
with $L,\Lambda,\partial,\bar\partial,*$, and preserves each bidegree
$\Omega^{p,q}(X)$.

## Facts & Assumptions

**Given:** The compact Kähler manifold and its operators $L,\Lambda,\partial,\bar\partial,\partial^*,\bar\partial^*,d^*$ and Laplacians; by [[thm-choice-implies-dependent-implies-countable-choice]] the Axiom of Choice supplies the countable choice used by the general Stokes theorem and the smooth partition data behind the formal adjoints.

[F1] The operators and Laplacians are as in [[def-compact-kahler-manifold-and-hodge-polarization-conventions]]: $\Lambda,\partial^*,\bar\partial^*,d^*$ are the formal adjoints of $L,\partial,\bar\partial,d$ for the integral inner product $\langle\alpha,\beta\rangle=\int_X\alpha\wedge*\bar\beta$, and on the complexified exterior algebra the pointwise operators and star are those of [[lem-hermitian-exterior-lefschetz-decomposition-and-weil-star-identity]].

[F2] The formal adjoint of a differential operator of order at most two on a metric vector bundle has the local formula $P^\star v=\sum_{|\alpha|\le2}(-1)^{|\alpha|}\gamma^{-1}D^\alpha(\gamma\,a_\alpha^*v)$ in a chart with density coefficient $\gamma$ and orthonormal frames, and it is characterized by $\int\langle Pu,v\rangle\,d\mu=\int\langle u,P^\star v\rangle\,d\mu$ for compactly supported smooth sections ([[lem-formal-adjoints-of-differential-operators-exist-and-are-unique]]).

[F3] In holomorphic charts $\Omega^k(X;\mathbb C)=\bigoplus_{p+q=k}\Omega^{p,q}(X)$ and $d=\partial+\bar\partial$ with $\partial,\bar\partial$ of bidegree $(1,0)$ and $(0,1)$ ([[def-compact-kahler-manifold-and-hodge-polarization-conventions]]), and the local identities $\partial^2=\bar\partial^2=\partial\bar\partial+\bar\partial\partial=0$ hold ([[thm-d-dbar-decomposition-and-identities]]); since the Kähler form has bidegree $(1,1)$ and $d\omega=0$, directness of the bidegree decomposition gives $\partial\omega=\bar\partial\omega=0$.

[F4] The general Stokes theorem holds on compact oriented manifolds ([[thm-general-stokes-theorem]]), and the holomorphic inverse function theorem in several variables gives local inverse branches of a holomorphic map with invertible Jacobian ([[thm-holomorphic-inverse-function-theorem-several-variables]]).

## Proof

1.1 For $n\ge1$, fix $x_0\in X$ and choose holomorphic coordinates with $h_{a\bar b}(0)=\tfrac12\delta_{ab}$, where $h_{a\bar b}=g_{\mathbb C}(\partial_{z_a},\partial_{\bar z_b})$ for the complex-bilinear extension of $g$. Then $\omega=i\sum_{a,b}h_{a\bar b}\,dz_a\wedge d\bar z_b$, and $d\omega=0$ implies $\partial_ch_{a\bar b}=\partial_ah_{c\bar b}$. Put $\Gamma^b_{ac}=2\partial_ah_{c\bar b}(0)$ and make the symmetric quadratic change $z_b=w_b-\tfrac12\sum_{a,c}\Gamma^b_{ac}w_aw_c$. Its derivative at zero is the identity, so [F4] makes it a holomorphic coordinate change near zero. In the transformed matrix $h'_{a\bar b}=\sum_{i,j}h_{i\bar j}(z(w))(\partial z_i/\partial w_a)\overline{(\partial z_j/\partial w_b)}$, one has $\partial_ch'_{a\bar b}(0)=\partial_ch_{a\bar b}(0)-\tfrac12\Gamma^b_{ac}=0$. The antiholomorphic derivatives vanish by the Hermitian symmetry. Thus $h'=\tfrac12 I+O(|w|^2)$, and the induced form metric, its inverse and the volume density have vanishing first derivatives at zero. Formula [F2] therefore gives the flat adjoint formulas at this point. When $n=0$ the claimed identities are immediate from [F1]; assume $n\ge1$ below. [F1, F2, F3, F4, given, algebra, construct]

2.1 Work at such a normal point with the constant-coefficient operators on the coframe $dz_j,d\bar z_j$: write $a_j=dz_j\wedge$, $b_j=d\bar z_j\wedge$ and let $c_j=a_j^*$, $d_j=b_j^*$ be the pointwise adjoints of [F1], so that $\{c_j,a_k\}=2\delta_{jk}$, $\{d_j,b_k\}=2\delta_{jk}$ and the mixed anticommutators $\{c_j,b_k\}$, $\{d_j,a_k\}$ vanish (the factor two is $h(dz_j,dz_j)$). Then $\partial=\sum_ja_j\partial_{z_j}$, $\bar\partial=\sum_jb_j\partial_{\bar z_j}$, $\partial^*=-\sum_jc_j\partial_{\bar z_j}$, $\bar\partial^*=-\sum_jd_j\partial_{z_j}$, $L=\frac i2\sum_ja_jb_j$ and $\Lambda=-\frac i2\sum_jd_jc_j$, and direct expansion using the anticommutation relations gives $\Lambda\partial-\partial\Lambda=-i\sum_jd_j\partial_{z_j}=i\bar\partial^*$ (the mixed pairs $[d_jc_j,a_k]=2\delta_{jk}d_j$), $\Lambda\bar\partial-\bar\partial\Lambda=i\sum_jc_j\partial_{\bar z_j}=-i\partial^*$, $\bar\partial^*L-L\bar\partial^*=i\sum_ja_j\partial_{z_j}=i\partial$ and $\partial^*L-L\partial^*=-i\sum_jb_j\partial_{\bar z_j}=-i\bar\partial$. Every one of these operators is a differential operator of order at most two whose coefficients involve at most first derivatives of the metric, so equality at every normal point proves the four identities globally; the normalization enters only through the factor $h(dz_j,dz_j)=2$, and both sides scale the same way if the metric is rescaled by a constant, so no normalization is mixed inside the computation. [F1, F2, step 1.1, given, algebra]

3.1 Use the graded bracket, for which the bracket of two odd operators is their anticommutator and $[\Lambda,\partial]=i\bar\partial^*$ reads $\bar\partial^*=-i[\Lambda,\partial]$. By [F3] the operators $\partial,\bar\partial$ are odd and satisfy $\partial^2=\bar\partial^2=\partial\bar\partial+\bar\partial\partial=0$, while $\Lambda$ is even. Graded Jacobi applied to $\partial,\Lambda,\partial$ gives $[\partial,[\Lambda,\partial]]=0$ because the two middle terms cancel and $\partial^2=0$, hence $[\partial,\bar\partial^*]=-i[\partial,[\Lambda,\partial]]=0$, and its adjoint gives $[\bar\partial,\partial^*]=0$; these are exactly the two vanishing mixed anticommutators. Graded Jacobi applied to $\bar\partial,\Lambda,\partial$ gives $[\bar\partial,[\Lambda,\partial]]=[\partial,[\bar\partial,\Lambda]]$, hence $[\bar\partial,\bar\partial^*]=-i[\bar\partial,[\Lambda,\partial]]=-i[\partial,[\bar\partial,\Lambda]]=i[\partial,[\Lambda,\bar\partial]]=[\partial,\partial^*]$, using the second identity of step 2.1; that is $\Delta_{\bar\partial}=\Delta_\partial$. Expanding $d=\partial+\bar\partial$ and $d^*=\partial^*+\bar\partial^*$ with the two mixed anticommutators gives $\Delta_d=\Delta_\partial+\Delta_{\bar\partial}=2\Delta_\partial=2\Delta_{\bar\partial}$. [step 2.1, F3, given, algebra]

4.1 For the remaining commutation relations: $[\partial,L]=\partial\omega\wedge=0$ and $[\bar\partial,L]=0$ by [F3]; then $[\Delta_\partial,L]=\partial[\partial^*,L]+[\partial,L]\partial^*+[\partial^*,L]\partial+\partial^*[\partial,L]=-i(\partial\bar\partial+\bar\partial\partial)=0$, where the first equality uses $\Delta_\partial=\partial\partial^*+\partial^*\partial$ and $[\partial^*,L]=-i\bar\partial$, and adjunction gives $[\Delta_\partial,\Lambda]=0$; since $\Delta_d=2\Delta_\partial$, $\Delta_d$ commutes with $L$ and $\Lambda$. Commutation with $\partial$ and $\bar\partial$ follows from $\partial^2=\bar\partial^2=0$ and $\Delta_d=2\Delta_\partial=2\Delta_{\bar\partial}$. For the star: for $\alpha$ of degree $k-1$ and $\beta$ of degree $k$ the formal-adjoint identity of [F2] for $d$ and the characterizing property $\alpha'\wedge*\bar\beta=\langle\alpha',\beta\rangle\,dV$ of the star give $\int\alpha\wedge*\overline{d^*\beta}=(-1)^k\int\alpha\wedge d*\bar\beta$, hence, since this holds for all $\alpha$, the operator identity $*d^*=(-1)^kd*$ on degree $k$; substituting it and $*^2=(-1)^{k(m-k)}$ with $m=2n$ into $\Delta_d=dd^*+d^*d$ shows $*\Delta_d=\Delta_d*$ on every degree, because the adjacent-degree relations are $*d^*=(-1)^k d*$ and $*d=(-1)^{k+1}d^**$ on degree $k$, and hence $*dd^*=d^*d*$ and $*d^*d=dd^**$. Finally $\Delta_{\bar\partial}=\Delta_d/2$ has bidegree $(0,0)$ because $\bar\partial$ and $\bar\partial^*$ shift bidegree by $(0,\pm1)$, so $\Delta_d$ preserves each $\Omega^{p,q}(X)$. For $n=0$ every operator but the star is zero and all assertions are immediate. [step 2.1, step 3.1, F1, F2, F3, F4, given, algebra] ∎
