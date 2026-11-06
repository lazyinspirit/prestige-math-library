---

id: thm-gts-artin-relative-hodge-base-change
kind: theorem
title: "Relative Hodge base change over analytic Artin deformations"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + full AC, inherited from compact analytic cohomology."
deps:
  - thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms
  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition
  - lem-gts-finite-artin-analytic-dolbeault-comparison
  - lem-gts-finite-nilpotent-hodge-transfer-and-length-equality
  - thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology
  - def-axiom-of-choice
dependency_roles:
  thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms: mathematical-premise
  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise
  lem-gts-finite-artin-analytic-dolbeault-comparison: mathematical-premise
  lem-gts-finite-nilpotent-hodge-transfer-and-length-equality: mathematical-premise
  thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology: mathematical-premise
  def-axiom-of-choice: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Claire Voisin, Hodge Structures and the Topology of Algebraic Varieties, Harvard CMSA revision"
      url: "https://cmsa.fas.harvard.edu/media/Voisin_HSTAVharvardrevision.pdf"
      locator: "§1.1, Theorem 1.4, printed pp. 7–8: relative Frölicher E₁ degeneration, local freeness and base change over Artin bases."
---

## Statement

Let $A$ be a finite-dimensional local commutative complex Artin algebra with residue field $\mathbb C$ and nilpotent maximal ideal $\mathfrak m_A$. Let $X_A\to\operatorname{Specan}A$ be a marked flat analytic deformation of a compact Kähler manifold $X$: its underlying space is $X$, its structure sheaf is locally of the form $A\{z_1,\ldots,z_N\}/I$ with flat stalks over $A$, and the marking identifies its reduction with $\mathcal O_X$. Assume the Frölicher spectral sequence of $X$ degenerates at $E_1$. For every $p,q$, the relative Hodge cohomology module $H^q(X_A,\Omega^p_{X_A/A})$ is locally free over $A$ and its restriction to the central fibre is $H^q(X,\Omega_X^p)$; the relative Frölicher spectral sequence also degenerates at $E_1$.

## Statement references

[[lem-gts-finite-artin-analytic-dolbeault-comparison]]

## Facts & Assumptions

**Given:** Full AC and the actual marked proper flat analytic deformation $X_A$ over the local Artin algebra $A$ in the Statement, with compact Kähler central fibre $X$. Write $\ell=\dim_{\mathbb C}A$ and $h^{p,q}=\dim_{\mathbb C}H^q(X,\Omega_X^p)$. The words analytic deformation have the flat-thickening convention; arbitrary nonflat proper maps are not called deformations here.

[F1] [[thm-compact-kahler-hodge-decomposition-via-elliptic-harmonic-forms]] identifies the central Dolbeault cohomology with finite-dimensional harmonic forms and gives $\sum_{p+q=k}h^{p,q}=b_k=\dim_{\mathbb C}H^k(X;\mathbb C)$. The stated central $E_1$ hypothesis gives that equality directly as well.

[F2] The smooth central Dolbeault Laplacian is formally symmetric with scalar positive symbol. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]] supplies its smooth Green inverse and harmonic projection on the compact manifold, in real dimension at least two.

[F3] [[lem-gts-finite-artin-analytic-dolbeault-comparison]] gives relative local coordinate charts and fine Dolbeault complexes. Their underlying smooth modules identify with the central $(p,q)$-form modules tensored with $A$, with differential reducing to $\bar\partial$. The relative de Rham complex resolves the constant sheaf $A$ and has cohomology $H^k(X;\mathbb C)\otimes A$. These resolutions and restrictions commute with Artin base change up to their natural identifications.

[F4] [[lem-gts-finite-nilpotent-hodge-transfer-and-length-equality]] gives the explicit finite transfer of a nilpotent perturbation of a contracted smooth complex to its finite free harmonic complex, with the exact cohomology dimension bound and its equality criterion.

[F5] [[thm-bounded-filtered-complex-spectral-sequence-abuts-to-filtered-homology]] supplies the spectral sequence and finite abutment filtration of the relative fine double resolution, filtered by holomorphic degree. Its $E_1$ page is the relative Hodge cohomology, and each next page is a subquotient of the preceding page.

[A1] Full AC is [[def-axiom-of-choice]], supplying the hypotheses of the compact analytic suppliers.

## Proof

1.1 First, if $X$ has complex dimension zero, compactness and [F3] make it a finite disjoint union of charts $\operatorname{Specan}A$. Its only relative forms and cohomology occur at $(p,q)=(0,0)$, where they are copies of $A$; freeness, every Artin base change and degeneration follow directly. For the remaining proof assume $\dim_{\mathbb C}X\ge1$, so the real dimension is at least two as required in [F2]. By [F3], relative holomorphic $p$-forms are resolved by a complex $(C_p\otimes A,D_p)$ with $C_p^q=A^{p,q}(X)$ and $D_p=\bar\partial+\delta_p$, where $\delta_p$ increases the nilpotent maximal-ideal filtration. Its cohomology is exactly $H^q(X_A,\Omega^p_{X_A/A})$. The same local chart construction proves that this deformation is locally smooth over $A$, rather than imposing relative smoothness as a new restriction. The total relative de Rham cohomology is the free $A$-module $H^k(X;\mathbb C)\otimes A$ by [F3]. [F2, F3, A1, given, construct]

2.1 On the smooth central Dolbeault complex put $d=\bar\partial$, take $i$ to be inclusion of harmonic forms, $p$ the harmonic projection, and $h=d^*G$. The identity $dh+hd=1-ip$ follows from the Green formula. The relations $h^2=hi=ph=0$ hold because $G$ commutes with $d,d^*$ and vanishes on harmonics. For precision, $\Delta$ commutes with $d,d^*$ by $d^2=(d^*)^2=0$; applying this to $G$ and using its unique orthogonal solution and the energy identity proves the stated commutations. Thus [F4] applies to $D_p$ and transfers it to a bounded finite free complex $K_p^q=\mathcal H^{p,q}\otimes A$ with differential $d_{H,p}$ in the maximal ideal. It follows that $\dim_{\mathbb C}H^q(X_A,\Omega^p_{X_A/A})\le\ell h^{p,q}$. This proves the upper bound using an explicit finite model, without an unproved proper coherent-cohomology semicontinuity theorem. [F1, F2, F4, step 1.1, algebra]

3.1 Filter the relative fine double resolution by holomorphic degree. By [F5] its relative Frölicher spectral sequence has these Hodge groups as $E_1^{p,q}$ and abuts to the free de Rham group in step1.1. For each total degree $k$, finite filtration and the subquotient property give
$$\ell b_k=\sum_{p+q=k}\dim_{\mathbb C}E_\infty^{p,q}\le\sum_{p+q=k}\dim_{\mathbb C}E_1^{p,q}\le\ell\sum_{p+q=k}h^{p,q}=\ell b_k.$$
The last equality is the central $E_1$-degeneration in [F1] and the hypothesis. All inequalities are therefore equalities. Every deficit in the second inequality is nonnegative, so each individual relative Hodge group has dimension exactly $\ell h^{p,q}$. All groups here are finite-dimensional over $\mathbb C$ by their finite models. Over a finite local complex Artin ring with residue $\mathbb C$, these dimensions also equal their module lengths: filter by powers of the maximal ideal and refine the resulting finite-dimensional residue-field quotients by vector-space flags. [F1, F3, F5, step 1.1, step 2.1, algebra]

4.1 The explicit equality formula in [F4] now forces every image of every differential $d_{H,p}$ to be zero, in every degree. Consequently $K_p$ has zero differential and its degree-$q$ cohomology is $\mathcal H^{p,q}\otimes A$, a free $A$-module of rank $h^{p,q}$. The transfer maps reduce to the original harmonic inclusion and projection, so the resulting natural restriction to the central fibre is exactly its Dolbeault cohomology, not merely a vector space with the correct dimension. The finite transfer formulas commute with any local Artin base change $A\to B$; since the transferred differential is zero, they give $K_p\otimes_A B$ with zero differential and identify the natural cohomology base-change map with the identity on $\mathcal H^{p,q}\otimes B$. This proves base change both to the central fibre in the Statement and to lower Artin orders required by its consumer. [F1, F3, F4, step 2.1, step 3.1, algebra]

5.1 Equality of the first inequality in step3.1 leaves no room for any later spectral-sequence differential: a nonzero incoming or outgoing image would strictly reduce the finite dimension of a page entry, hence that of its abutment entry and one of the nonnegative diagonal sums. Thus all differentials vanish and the relative sequence degenerates at $E_1$. If $X$ is zero-dimensional, compactness makes it a finite set of points and [F3]'s local charts are $\operatorname{Specan}A$; all cohomology is in degree zero and the same assertions are immediate. This proves the full approved freeness, restriction and relative-degeneration assertions without projectivity, simple connectivity or any Calabi metric hypothesis. [F3, F5, step 3.1, step 4.1, algebra] ∎

## Scope

This result concerns analytic Artin thickenings; it does not construct a Kuranishi family over a reduced analytic parameter germ.
