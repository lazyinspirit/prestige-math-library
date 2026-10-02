---
id: cor-unramified-cover-curves-genus-complete
kind: corollary
title: "The genus relation for unramified covers of curves"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-different-divisor-curve-map
  - def-etale-morphism-schemes
  - def-finite-morphism-schemes
  - def-integral-scheme
  - def-ramification-and-branch-points
  - lem-curve-closed-subsets-finite
  - lem-curve-different-local-support-and-index-bound
  - lem-differentials-localization
  - lem-sheaf-differentials-affine-compatibility
  - lem-finite-type-field-zero-differentials-finite-separable
  - thm-differentials-smooth-locally-free
  - thm-finite-morphism-integral-closed
  - thm-riemann-hurwitz-complete
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Ch. 8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice as inherited from the ramification suppliers. Let
$f:C\to D$ be a finite etale morphism of smooth proper geometrically integral
curves over a field $k$ (equivalently a finite surjective morphism that is flat
and unramified at every point), with $n=\deg(f)$. Then
$$2g(C)-2=n\,(2g(D)-2),$$
that is, the different divisor vanishes and the Euler characteristic $2-2g$ is
multiplied by $n$.

## Facts & Assumptions

**Given:** AC; a field $k$; a finite etale morphism $f:C\to D$ of smooth proper geometrically integral curves over $k$ with $n=\deg(f)$; the different divisor $R_f$ of $f$.

[F1] A morphism is etale at a point when it is smooth of relative dimension
zero there; in particular an etale morphism is flat and unramified at each
point, and for a morphism of smooth curves unramifiedness at a closed point $p$
is equivalent to $\Omega_{C/D,p}=0$.
([[def-etale-morphism-schemes]], [[def-ramification-and-branch-points]])

[F2] Let $f:C\to D$ be a finite surjective morphism of smooth proper
geometrically integral curves with separable function-field extension. For
every closed point $p$ put
$l_p=\operatorname{length}_{\mathcal O_{C,p}}(\Omega_{C/D,p})$; then $l_p$ is a
nonnegative integer and the different divisor is the effective divisor
$R_f=\sum_pl_p[p]$, whose support is the differential ramification locus and
whose coefficients satisfy $l_p\ge e_p-1$, with $l_p=0$ if and only if $e_p=1$
and the residue extension $\kappa(p)/\kappa(f(p))$ is separable.
([[def-different-divisor-curve-map]],
[[lem-curve-different-local-support-and-index-bound]])

[F3] Riemann-Hurwitz: for a finite surjective morphism $f:C\to D$ of smooth
proper geometrically integral curves whose function-field extension is
separable, with $n=\deg(f)$, one has
$2g(C)-2=n(2g(D)-2)+\deg_k(R_f)$.
([[thm-riemann-hurwitz-complete]])

[F4] The Axiom of Choice: every family of nonempty sets has a choice function.
([[def-axiom-of-choice]])

[F5] A finite morphism has affine inverse images of affine opens, and the
coordinate algebra of each such inverse image is finite over the target ring.
([[def-finite-morphism-schemes]])

[F6] Assuming AC, a finite morphism is closed. In particular its image is a
closed subset of the target. ([[thm-finite-morphism-integral-closed]])

[F7] A curve over a field is nonempty and has chain dimension one; an integral
scheme is irreducible and hence connected. Thus the given curves $C,D$ are
nonempty connected integral curves of dimension one.
([[def-algebraic-curve-over-field]], [[def-integral-scheme]])

[F8] Assuming AC, every proper closed subset of an integral finite-type curve
of dimension one is a finite set of closed points.
([[lem-curve-closed-subsets-finite]])

[F9] If $L/K$ is a finitely generated field extension and
$\Omega_{L/K}=0$, then $L/K$ is finite and separable.
([[lem-finite-type-field-zero-differentials-finite-separable]])

[F10] For a smooth morphism of pure relative dimension $n$, the relative
differential sheaf is locally free of rank $n$. Since the étale morphism in
[F1] is smooth of relative dimension zero, its relative differentials vanish
at every point. ([[thm-differentials-smooth-locally-free]])

[F11] On affine charts, the sheaf of relative differentials is the sheaf
associated to the module of Kähler differentials; localizing that module at the
generic point identifies the generic stalk with
$\Omega_{k(C)/k(D)}$. ([[lem-sheaf-differentials-affine-compatibility]],
[[lem-differentials-localization]])

## Proof

**Proof technique:** direct; étaleness kills the module of relative
differentials, hence the different, and Riemann-Hurwitz gives the formula.

1.1 (Set-up.) The étale morphism $f$ is smooth of relative dimension zero by [F1], so [F10] gives $\Omega_{C/D,p}=0$ for every point $p$ of $C$. The finite map is closed by [F6] and AC [F4], so its image is a nonempty connected closed subset of $D$ by [F7]. It cannot be a single point $y$: choose an affine neighbourhood $U=\operatorname{Spec}A$ of $y$. If $f(C)=\{y\}$, then $f^{-1}(U)=C=\operatorname{Spec}B$, where $B$ is finite over $A$ by [F5]. Every element of the maximal ideal of $y$ maps into every prime of $B$, hence into its nilradical; since $C$ is integral, $B$ is a domain, so that ideal maps to zero. Thus $B$ is finite-dimensional over $\kappa(y)$, forcing $\dim C=\dim\operatorname{Spec}B=0$, contrary to [F7]. Therefore the image is not a point. If it were a proper closed subset, [F8] would make it a finite set of closed points, which is discrete; connectedness of the image would then force it to be a point. Hence $f$ is surjective. The induced function-field extension $k(C)/k(D)$ is finite of degree $n$. [F1, F4, F5, F6, F7, F8, F10, given]

2.1 (Separability.) By [F11] the generic stalk is $\Omega_{k(C)/k(D)}$, which is zero by step 1.1. The extension is finite by step 1.1 and hence finitely generated, so [F9] makes it separable; therefore Riemann-Hurwitz [F3] applies. [F1, F3, F9, F11, step 1.1]

2.2 (Vanishing of the different.) For every closed point $p$ of $C$ the length $l_p=\operatorname{length}_{\mathcal O_{C,p}}(\Omega_{C/D,p})$ is zero, because the module $\Omega_{C/D,p}$ is zero by step 1.1 and the length of the zero module is zero; hence all coefficients of the different divisor $R_f=\sum_pl_p[p]$ of [F2] vanish, that is $R_f=0$. [F2, step 1.1]

3.1 Consequently $\deg_k(R_f)=\deg_k(0)=0$, and applying Riemann-Hurwitz [F3] with the separability of step 2.1 gives $2g(C)-2=n(2g(D)-2)+\deg_k(R_f)=n(2g(D)-2)+0=n(2g(D)-2)$, which is the displayed identity. [F3, step 2.1, step 2.2]

4.1 Rewriting the identity as $2-2g(C)=n(2-2g(D))$ expresses that the Euler characteristic $2-2g$ is multiplied by the degree $n$ of the cover. AC [F4] is used in step 1.1 through the finite-closed-image and curve-closed-subset suppliers [F6, F8], and through the ramification suppliers cited above under their stated choice hypotheses; no further choice is used. [F4, F6, F8, step 1.1, step 3.1] ∎
