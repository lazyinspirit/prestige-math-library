---
id: lem-rational-differential-divisor-well-defined-class
kind: lemma
title: "Divisors of rational differentials form one linear equivalence class"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-canonical-line-bundle-curve
  - def-cartier-divisor
  - def-dependent-choice
  - def-integral-scheme
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-order-codimension-one-rational-function
  - def-principal-cartier-divisor
  - def-principal-weil-divisor-and-class-group
  - def-rational-section-line-bundle
  - def-sheaf-relative-differentials
  - def-weil-divisor-normal-noetherian-scheme
  - thm-cartier-to-weil-divisor-normal-scheme
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-differentials-smooth-locally-free
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Jiahui Gao and Shouwu Zhang, Lectures on Algebraic Geometry (December 14, 2019), Ch. 7"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
---

## Statement

Assume the Axiom of Choice. Let $C$ be a smooth proper geometrically integral
curve over a field $k$ and let $\omega,\omega'$ be nonzero rational
differentials on $C$. Then there is a unique $f\in k(C)^\times$ with
$\omega'=f\omega$, and
$$\operatorname{div}(\omega')=\operatorname{div}(\omega)+\operatorname{div}_W(f).$$
Consequently their Weil divisors, and their corresponding Cartier divisors,
are linearly equivalent; the divisors of nonzero rational differentials form
one canonical class, and
$\omega_C\cong\mathcal O_C(K_C)$ for every canonical divisor $K_C$.

## Facts & Assumptions

**Given:** A field $k$, a smooth proper geometrically integral curve $C$, two
nonzero rational differentials $\omega,\omega'$, and AC. The theorem
[[thm-choice-implies-dependent-implies-countable-choice]] gives DC from AC.

[F1] Under AC, $\omega_C=\Omega^1_{C/k}$ is an invertible sheaf, and its
generic fibre is a one-dimensional $k(C)$-vector space. Thus each nonzero
rational differential is a nonzero vector in that space.
([[def-canonical-line-bundle-curve]], [[def-invertible-sheaf]],
[[thm-differentials-smooth-locally-free]],
[[def-rational-section-line-bundle]])

[F2] At a closed point $x$, write a rational differential in any local frame
as $\omega=g_x\eta_x$. Its order is the DVR order of $g_x$, independent of
the frame; orders are additive on products. This is valid also for an
inseparable residue extension and uses no differential of a uniformizer.
([[def-canonical-line-bundle-curve]],
[[def-order-codimension-one-rational-function]],
[[thm-local-ring-smooth-curve-dvr]])

[F3] For a nonzero rational section $s$ of an invertible sheaf on an integral
scheme, the rational-section theorem gives a Cartier divisor
$D_s=\operatorname{div}_C(s)$ whose local equations are its coefficients in
local frames, and an isomorphism
$\mathcal O_C(D_s)\cong\mathcal L$ carrying its canonical rational section to
$s$ ([[thm-line-bundle-rational-section-cartier-divisor]],
[[def-cartier-divisor]],
[[def-invertible-sheaf-of-cartier-divisor]]).

[F4] Under AC the smooth proper curve is normal Noetherian, AC supplies DC,
and the Cartier-to-Weil cycle map sends each Cartier divisor to the locally
finite sum of its codimension-one local-equation orders. It is an isomorphism
on a smooth proper curve and satisfies
$\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ for
$f\in k(C)^\times$ ([[thm-cartier-to-weil-divisor-normal-scheme]],
[[thm-cartier-weil-divisors-curves-agree]],
[[def-weil-divisor-normal-noetherian-scheme]],
[[thm-choice-implies-dependent-implies-countable-choice]],
[[def-axiom-of-choice]], [[def-dependent-choice]]). The curve is
quasi-compact, so locally finite support is finite, as also recorded by the
finite-sum curve divisor convention
[[def-divisor-smooth-proper-curve]].

[F5] For Weil divisors, $D\sim D'$ means $D-D'=\operatorname{div}_W(f)$ for
some $f\in k(C)^\times$; for Cartier divisors, $D\sim D'$ means
$D-D'=\operatorname{div}_C(f)$. The cycle isomorphism is compatible with
these principal divisors ([[def-principal-weil-divisor-and-class-group]],
[[def-linear-equivalence-cartier-divisors]],
[[def-principal-cartier-divisor]],
[[thm-cartier-to-weil-divisor-normal-scheme]],
[[thm-cartier-weil-divisors-curves-agree]]).

## Proof

1.1 By [F1], $\omega$ and $\omega'$ are nonzero vectors in the same one-dimensional vector space over $k(C)$, so there is a unique $f\in k(C)^\times$ with $\omega'=f\omega$. [F1]

1.2 Put $D_\omega=\operatorname{div}_C(\omega)$ and $D_{\omega'}=\operatorname{div}_C(\omega')$, the Cartier divisors of [F3]. Their Weil cycles are the finite divisors $\operatorname{cyc}(D_\omega)=\operatorname{div}(\omega)$ and $\operatorname{cyc}(D_{\omega'})=\operatorname{div}(\omega')$, because the cycle coefficient at $x$ is the order of the local equation $g_x$ and finite support follows from [F4]. [F2, F3, F4]

1.3 For each $\omega'$, the rational-section theorem [F3] gives $\mathcal O_C(D_{\omega'})\cong\omega_C$ carrying the canonical rational section to $\omega'$. The curve Cartier-to-Weil isomorphism identifies $D_{\omega'}$ with $K_C=\operatorname{div}(\omega')$, so $\mathcal O_C(K_C)\cong\omega_C$ for every canonical divisor. [F3, F4]

2.1 Fix a closed point $x$ and any local frame $\eta_x$ of $\omega_C$, and write $\omega=g_x\eta_x$ and $\omega'=g'_x\eta_x$. The equality $\omega'=f\omega$ from step 1.1 gives $g'_x=fg_x$, so additivity of the normalized DVR order gives $\operatorname{ord}_x(\omega')=\operatorname{ord}_x(f)+\operatorname{ord}_x(\omega)$. This frame calculation is valid also for inseparable residue extensions. [F2, step 1.1]

3.1 The pointwise identity of step 2.1 holds at every closed point, and each divisor has finite support by step 1.2, so coefficientwise equality gives $\operatorname{div}(\omega')=\operatorname{div}(\omega)+\operatorname{div}_W(f)$. By [F4], the Cartier cycles satisfy $\operatorname{cyc}(D_{\omega'})=\operatorname{cyc}(D_\omega)+\operatorname{cyc}(\operatorname{div}_C(f))$; since the cycle map is an isomorphism, $D_{\omega'}-D_\omega=\operatorname{div}_C(f)$. [F4, step 1.2, step 2.1]

4.1 The equality in step 3.1 says the Weil divisors differ by a principal Weil divisor, hence are linearly equivalent by [F5]; its Cartier form $D_{\omega'}-D_\omega=\operatorname{div}_C(f)$ makes the corresponding Cartier divisors linearly equivalent by [F5]. Thus every nonzero rational differential gives the same canonical divisor class. [F5, step 3.1]

5.1 The ratio is unique by step 1.1, the divisor formula is step 3.1, and steps 4.1 and 1.3 prove the asserted class and sheaf conclusions; the choice assumptions are AC and its consequence DC for the cited structural suppliers. [F4, step 1.1, step 3.1, step 4.1, step 1.3] ∎
