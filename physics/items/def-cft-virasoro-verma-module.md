---
id: def-cft-virasoro-verma-module
kind: definition
title: Virasoro Verma modules and contravariant forms
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-virasoro-algebra
  - def-universal-enveloping-algebra-as-a-tensor-quotient
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
dependency_roles:
  def-virasoro-algebra: mathematical-premise
  def-universal-enveloping-algebra-as-a-tensor-quotient: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Christophe Nozaradan, Introduction to Vertex Algebras
      url: https://arxiv.org/pdf/0809.1380v3
      locator: "§§2.7.1–2.7.4 and the Virasoro mode convention, printed pp. 31–35."
    - title: Antony Wassermann, Kac–Moody and Virasoro Algebras
      url: https://arxiv.org/pdf/1004.1287v2
      locator: "Chapter IV §4, printed pp. 70–72: Verma modules, PBW descendants and the invariant form."
    - title: Paul Ginsparg, Applied Conformal Field Theory
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§§3.1–3.3, printed pp. 26–35: highest-weight states, descendants and Virasoro conventions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Use the Virasoro convention $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$, with $C$ central. Let
$\mathfrak n_-:=\operatorname{span}\{L_{-n}:n\ge1\}$,
$\mathfrak h:=\operatorname{span}\{L_0,C\}$, and
$\mathfrak n_+:=\operatorname{span}\{L_n:n\ge1\}$. Put
$\mathfrak b=\mathfrak h\oplus\mathfrak n_+$ and let
$\mathbb C_{c,h}=\mathbb C v_h$ be the one-dimensional
$U(\mathfrak b)$-module on which $L_n v_h=0$ for $n>0$,
$L_0v_h=hv_h$, and $Cv_h=cv_h$. For $c,h\in\mathbb C$, the
algebraic induced module is
$$
M(c,h):=U(\mathrm{Vir})\otimes_{U(\mathfrak b)}\mathbb C_{c,h}, \qquad v_h:=1\otimes v_h.
$$
Let $\sigma$ be the complex-linear anti-involution of
$U(\mathrm{Vir})$ given by $\sigma(L_n)=L_{-n}$, $\sigma(C)=C$,
and $\sigma(xy)=\sigma(y)\sigma(x)$. The normalized contravariant form
is the bilinear form with $\langle v_h,v_h\rangle=1$ and
$\langle xu,w\rangle=\langle u,\sigma(x)w\rangle$.
All modules and tensor products here are algebraic; no Hilbert completion,
conjugation, or positivity is asserted. This normalized contravariant form is
unique, and its radical is the unique maximal proper submodule, as proved
below.

## Definition references

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

## Facts & Assumptions

**Given:** $c,h\in\mathbb C$, the algebraic enveloping quotient, and the fixed Virasoro convention above.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] gives $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$, with $C$ central.

[F2] [[def-universal-enveloping-algebra-as-a-tensor-quotient]] defines $U(\mathrm{Vir})$ by the relations $xy-yx=[x,y]$.

[F3] [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]] applies to a complex Lie algebra with a supplied countable ordered basis and gives a basis of its enveloping algebra by ordered monomials.

## Proof

1.1 The three subspaces $\mathfrak n_-$, $\mathfrak h$, and $\mathfrak n_+$ are Lie subalgebras by [F1], and their sum is direct by the Virasoro basis. Since $[L_0,L_n]=-nL_n$ and $C$ is central, $[\mathfrak h,\mathfrak n_+]\subseteq\mathfrak n_+$; also $[\mathfrak n_+,\mathfrak n_+]\subseteq\mathfrak n_+$ and $[\mathfrak h,\mathfrak h]=0$. Thus $\mathfrak b$ is a Lie subalgebra and the linear functional sending $L_0,C,L_n$ ($n>0$) to $h,c,0$ kills $[\mathfrak b,\mathfrak b]$. By the quotient relations [F2] it extends to a character of $U(\mathfrak b)$, defining $\mathbb C_{c,h}$; its restriction to the commuting $L_0,C$ defines $\chi_{c,h}$. The assignment $\sigma(L_n)=L_{-n}$, $\sigma(C)=C$ satisfies $\sigma([L_m,L_n])=-[L_{-m},L_{-n}]$: the noncentral terms agree, and when $m+n=0$ the central coefficient on the right is $(m^3-m)/12$. Reversing tensor words therefore preserves the ideal in [F2], descends to $U(\mathrm{Vir})$, and squares to the identity. Order a countable basis in these three consecutive blocks. PBW [F3] then makes multiplication a vector-space isomorphism $U(\mathfrak n_-)\otimes U(\mathfrak h)\otimes U(\mathfrak n_+)\to U(\mathrm{Vir})$. In particular, as a right $U(\mathfrak b)$-module, $U(\mathrm{Vir})$ is free with basis the ordered $\mathfrak n_-$-monomials. Tensoring over $U(\mathfrak b)$ with $\mathbb C_{c,h}$ therefore identifies $M(c,h)$ with $U(\mathfrak n_-)v_h$; the top vector is nonzero. [F1, F2, F3, given, algebra]

2.1 Let $\pi:U(\mathrm{Vir})\to U(\mathfrak h)$ be the PBW projection which retains the term with no $\mathfrak n_-$ or $\mathfrak n_+$ factor, and let $\chi_{c,h}:U(\mathfrak h)\to\mathbb C$ be the algebra homomorphism $L_0\mapsto h$, $C\mapsto c$. For $x,y\in U(\mathfrak n_-)$, define $\langle xv_h,yv_h\rangle=\chi_{c,h}(\pi(\sigma(x)y))$. The free-basis identification in step 1.1 makes this a well-defined bilinear form on the induced module, and $\langle v_h,v_h\rangle=1$. This formula also determines every pairing from the top normalization by repeatedly moving negative modes to the second argument; hence the normalized contravariant form, if contravariant, is unique. [F1, F2, F3, step 1.1, given, algebra]

3.1 For an ordered PBW monomial $x_-a x_+$, with factors in the three blocks, its image under $\sigma$ is $\sigma(x_+)\sigma(a)\sigma(x_-)$, still in negative–Cartan–positive block order. Thus $\pi\sigma=\sigma_{\mathfrak h}\pi$, where $\sigma_{\mathfrak h}$ fixes $L_0,C$, and $\chi_{c,h}\sigma_{\mathfrak h}=\chi_{c,h}$. It follows that $\langle xv_h,yv_h\rangle=\langle yv_h,xv_h\rangle$. [F1, F3, step 2.1, algebra]

4.1 For a negative generator $L_{-n}$, the first argument $L_{-n}xv_h$ is already in $U(\mathfrak n_-)v_h$, and the form formula gives $\langle L_{-n}xv_h,yv_h\rangle= \chi_{c,h}(\pi(\sigma(x)L_ny))$. To evaluate $\langle xv_h,L_nyv_h\rangle$, put $L_ny$ in PBW order: terms with a positive right block vanish on $v_h$ and also have zero Harish–Chandra projection after multiplication by the left positive block $\sigma(x)$; terms with no positive right block have their Cartan factor evaluated by the same character $\chi_{c,h}$. Thus these two expressions agree. The projection $\pi$ is homogeneous for $\deg L_n=-n,\deg L_0=\deg C=0$, so step 2.1's formula pairs negative-mode monomials of grades $N,M$ to zero unless $N=M$. On an equal-grade pair, $L_0$ acts by $h+N$ in either argument and $C$ by $c$; this proves contravariance for $L_0,C$. Symmetry from step 3.1 then gives the identity for positive generators by interchanging the two arguments. The form is therefore contravariant for every generator and hence for all of $U(\mathrm{Vir})$. [F1, F2, F3, step 2.1, step 3.1, algebra]

5.1 The form pairs different $L_0$-grades to zero by the homogeneous projection argument in step 4.1. Its radical is consequently a graded submodule, since contravariance in step 4.1 moves each generator across the pairing. It is proper because the grade-zero vector has norm $1$. [F1, step 2.1, step 3.1, step 4.1, algebra]

6.1 This normalized contravariant form is unique. For any other such form $B'$, repeated contravariance moves a negative-mode monomial $x$ in the first argument to $\sigma(x)$ in the second: $B'(xv_h,yv_h)=B'(v_h,\sigma(x)y v_h)$. Put $\sigma(x)y$ in the PBW order of step 1.1. Positive right-block terms kill $v_h$; a Cartan factor acts by $\chi_{c,h}$; every nonempty negative block has positive grade and is orthogonal to $v_h$, since contravariance under $L_0$ gives the same grade-orthogonality calculation as in step 5.1. Thus only $\chi_{c,h}(\pi(\sigma(x)y))$ remains, which is the defining formula in step 2.1. So $B'$ agrees with the constructed form on a basis and hence everywhere. [F1, F2, F3, step 1.1, step 2.1, step 4.1, step 5.1, algebra]

7.1 Every submodule is graded: each of its vectors has finitely many homogeneous components, and polynomial interpolation in $L_0$ projects that vector onto any one of its finitely many distinct eigenvalues. A proper submodule therefore has no grade-zero vector, since the grade-zero space is $\mathbb C v_h$ and containing $v_h$ would generate all of $M(c,h)$. If $w$ lies in such a submodule and $y=L_{-\lambda_1}\cdots L_{-\lambda_k}v_h$ is a grade-matched PBW vector, repeated contravariance gives $\langle w,y\rangle= \langle L_{\lambda_k}\cdots L_{\lambda_1}w,v_h\rangle=0$: the first entry remains in the submodule and has grade zero, so it is zero. Other-grade pairings vanish by step 5.1. Thus every proper submodule lies in the radical. Since the radical itself is proper, it is the unique maximal proper submodule. [F1, step 1.1, step 4.1, step 5.1, step 6.1, algebra] ∎

## Consequences

The quotient by the radical is the unique simple highest-weight quotient. The bilinear form is a complex algebraic Shapovalov form, not a Hermitian form.
