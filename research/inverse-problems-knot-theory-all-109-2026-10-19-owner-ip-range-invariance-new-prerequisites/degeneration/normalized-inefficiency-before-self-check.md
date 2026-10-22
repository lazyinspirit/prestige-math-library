---
id: thm-normalized-parabolic-comparison-charts-force-uniform-quadratic-inefficiency
kind: theorem
title: Normalized parabolic comparison charts force uniform quadratic inefficiency
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations
  - lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps
  - thm-convergent-holomorphic-atlases-support-projective-quadratic-compactness
  - lem-parabolic-invariance-forces-local-quadratic-pairing-defect
  - thm-fixed-type-hyperbolic-quadratics-have-uniform-ball-mass-doubling
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Curtis T. McMullen, Iteration on Teichmuller space
      url: https://people.math.harvard.edu/~ctm/papers/home/text/papers/iter/iter.pdf
      locator: Full proofs of Theorem6.1 and Theorem7.3 and their mass-localization use read in actual Sections5–7; this proves the entire local analytic composition under precise supplied normalized comparison-chart data
---

## Statement

Assume AC, hence Countable Choice. Fix a finite-area hyperbolic topological type $(g,N)$, numbers $0<r<s<R$, and a compact set $K\Subset D_R$ containing $\overline D_r$. Fix a compact set $\mathcal P$ of NONIDENTITY parabolic Mobius maps, all fixing $0$, each holomorphic on a neighborhood of $\overline D_s$ and satisfying $\gamma(\overline D_s)\subset D_R$. Choose any metric $d$ inducing the usual coefficient topology on the Mobius group.

There exist $\delta>0$ and $0\le c<1$, depending only on these fixed data, with the following property. Let $X$ be any connected complete finite-area hyperbolic surface of the chosen type. Supply a univalent holomorphic embedding $\iota:D_R\to X$, a Mobius map $h$ with $d(h,\mathcal P)<\delta$, and a measurable coefficient $\mu$ on $D_R$ of modulus at most one, satisfying
$$\mu(hz)\frac{\overline{h'(z)}}{h'(z)}=\mu(z)\quad\text{almost everywhere on }D_s.$$
The constant $\delta$ is chosen so that all these nearby maps are defined near $\overline D_s$ and send it into $D_R$. For every nonzero integrable holomorphic quadratic $q$ on $X$, write $\iota^*q=f(z)dz^2$. For every measurable $E$ with $D_r\subset E\subset K$,
$$\operatorname{Re}\int_E\mu f\,dA\le c\int_E|f|\,dA.$$
The constants are uniform over ALL such embeddings, quadratics, coefficients and sets; no preassigned local convergence of $f$ is required.

Consequently, suppose on such an $X$ a measurable Beltrami tensor $\nu$ has norm at most one, $\|q\|_1=1$, and a measurable set $F\subset X$ is covered by open metric balls $B(x,t)$ with $0<t\le\operatorname{inj}(x)$. Assume every such ball has supplied comparison data as above with $\iota(E)=B(x,t)$, and $\mu=\iota^*\nu$. Then
$$\operatorname{Re}\int_X\nu q\le1-\frac{1-c}{C(g,N,5)}\int_F|q|,$$
where $C(g,N,5)$ is the uniform quadratic mass-doubling constant. The same holds for a fixed finite list of types by choosing common constants.

The actual existence of these embedded comparison charts, their ball containments and the compact nonidentity parabolic normalization are hypotheses. They are not supplied by this analytic theorem; in particular multiplier convergence to one alone does not establish them.

## Facts & Assumptions

**Given:** AC, the fixed radii, compact set and compact parabolic family, the arbitrary surface and actual chart, nearby map and invariant coefficient; ball-cover data only for the global consequence.

[A1] Full choice and Countable Choice are [[def-axiom-of-choice]] and [[def-countable-choice]].

[F1] Finite-area quotients have the actual finite cusp compactification. Integrable holomorphic quadratics have at most simple poles at its punctures. [[lem-finite-area-fuchsian-quotients-have-compact-standard-cusp-truncations]], [[lem-integrable-quadratic-mass-decays-uniformly-in-deep-hyperbolic-cusps]]

[F2] On a connected supplied convergent holomorphic atlas, fixed-type quadratics with those simple poles have a subsequence and complex scalars making them converge locally uniformly to a nonzero holomorphic quadratic throughout that atlas. [[thm-convergent-holomorphic-atlases-support-projective-quadratic-compactness]]

[F3] If local invariant coefficients of modulus at most one correspond to maps converging to a nonidentity parabolic fixing an interior point, they cannot have pairing defect tending to zero against a sequence of quadratics converging to a nonzero function holomorphic at that point. Its proof uses strong local phase convergence and the first nonzero Taylor coefficient, not weak-star compactness. [[lem-parabolic-invariance-forces-local-quadratic-pairing-defect]]

[F4] Fixed-type quadratics have a uniform mass-doubling constant, and a family of inefficient embedded balls covering a set $F$ gives a global defect at least its local inefficiency times $C(g,N,5)^{-1}\int_F|q|$. [[thm-fixed-type-hyperbolic-quadratics-have-uniform-ball-mass-doubling]] Conformal pullback preserves the mass and Beltrami–quadratic pairing integrals by real change of variables. [[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]

## Proof

1.1 First note an exact application of [F2] that needs no metric limit. For ANY sequence of the actual embeddings $\iota_n:D_R\to X_n$ and nonzero integrable quadratics $q_n$, take the supplied limit surface to be $D_R$ itself. Cover it by a countable family of relatively compact coordinate discs; send each one into $X_n$ by restriction of $\iota_n$. Transitions are identity, and images of disjoint closed subdiscs are disjoint because the entire $\iota_n$ is injective. Thus this is a connected convergent holomorphic atlas with asymptotic separation in the precise sense of [F2]. The quadratics have the required compact-genus/puncture divisor bounds by [F1]. Therefore, after a subsequence, there are $\lambda_n\in\mathbb C^*$ for which $$f_n:=\lambda_n\iota_n^*q_n/dz^2\longrightarrow f\not\equiv0$$ locally uniformly on the WHOLE $D_R$, with $f$ holomorphic even at $0$. This is actual projective compactness on the given univalent chart; it does not assume those charts are nearly isometric. [A1, F1, F2, given, construct, algebra]

2.1 If $\mathcal P$ is empty, its distance condition has no solutions, so the assertion is vacuous. Otherwise its compactness and the strict domain/image conditions first give a neighborhood on which all nearby maps are defined on $\overline D_s$ and send it inside $D_R$. This follows directly from their rational coefficient formulas and a finite subcover of $\mathcal P$. Suppose no uniform $\delta,c$ worked. Choose models with $d(h_n,\mathcal P)<1/n$ and local pairing efficiency greater than $1-1/n$, shrinking to that neighborhood first. Compactness gives a subsequence $h_n\to\gamma\in\mathcal P$ in coefficients; the rational formulas then give convergence with every derivative on a neighborhood of $\overline D_s$. Apply step 1.1 to their actual charts and chosen quadratics. Rotate the coefficients as well: put $$\widetilde\mu_n=\frac{|\lambda_n|}{\lambda_n}\mu_n.$$ This constant unit phase preserves the modulus bound and the exact invariance equation, while $\widetilde\mu_n f_n=|\lambda_n|\mu_n(\iota_n^*q_n/dz^2)$ preserves the original pairing efficiency. Local uniform convergence bounds $\int_K|f_n|$ by one finite $M$. Nonnegative defect and $D_r\subset E_n\subset K$ consequently give $$0\le\int_{D_r}(|f_n|-\operatorname{Re}(\widetilde\mu_nf_n))\le\int_{E_n}(|f_n|-\operatorname{Re}(\widetilde\mu_nf_n))\le M/n\longrightarrow0.$$ This contradicts [F3], since $f\not\equiv0$ is holomorphic at the fixed point and $\gamma\in\mathcal P$ is nonidentity parabolic. Hence some $\delta>0,c<1$ works uniformly. Increase $c$ to at least zero if necessary. This proves the local assertion with all scalar phases and quantifiers retained. [A1, F3, step 1.1, given, construct, algebra]

3.1 For the ball-cover consequence, conformal change of variables [F4] identifies the local pairing in step 2.1 with $\operatorname{Re}\int_{B(x,t)}\nu q$, and its mass with $\int_{B(x,t)}|q|$. Thus every supplied ball is inefficient by the common amount $1-c>0$. Apply the actual disjoint-ball/doubling result [F4] to obtain $$1-\operatorname{Re}\int_X\nu q\ge\frac{1-c}{C(g,N,5)}\int_F|q|.$$ This is the claimed global estimate and allows any finite or countable selected family and arbitrary original covers of $F$. For finitely many types, use the smallest of their positive $\delta$, the largest of their $c<1$ and the largest doubling constant. The resulting constants retain the same conclusion. Every step used supplied comparison charts and the actual compact parabolic family; it did not infer them from the ambient topology, geometric finiteness or small loxodromic multipliers. [F4, step 2.1, given, construct, algebra] ∎

## Actual reading and remaining application obligation

The full current connected projective-atlas theorem, local parabolic defect theorem, fixed-type mass-doubling/disjoint-ball theorem and cusp simple-pole proof were read, as were the full actual finite-area compactification and measurable real change-of-variables suppliers. Authentic Iteration Sections2.3–2.4 and5–7 were read in full. This records those local supplier bodies and exact source sections, not reading of whole external reference books.

Together these results supply the entire analytic limiting-pairing and mass-localization portion of the thin-geodesic argument once a genuine normalized comparison-ball model is present. Construction of that model, its short-loop/retraction/separation argument, and the general cylindrical three-manifold obstruction remain separate geometric/topological obligations. No old frozen source is edited or accepted by this NEW proof.
