---
id: def-gts-t-equivariant-stable-pair-moduli-on-quasi-projective-threefolds
kind: definition
title: Equivariant stable-pair moduli on quasi-projective threefolds
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: physics
deps:
  - def-gts-k-theoretic-virtual-structure-sheaf-and-obstruction-determinant
dependency_roles:
  def-gts-k-theoretic-virtual-structure-sheaf-and-obstruction-determinant: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "D. Holmes and Y. Schuler, Experiments with membranes, maps and sheaves"
      url: "https://arxiv.org/pdf/2609.03152v1"
      locator: "§1.4, setup (7), equations (8)–(9), and the fixed-locus assumptions for the K-theoretic stable-pair series."
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $X$ be a smooth quasi-projective threefold over $\mathbb C$, let $T'$ be an algebraic torus acting on $X$, and fix an effective compact curve class $\beta\in H_2(X(\mathbb C),\mathbb Z)$ and integer $n$. A stable pair on $X$ is a map $s:\mathcal O_X\to F$ with $F$ coherent and pure of dimension one, with support proper over $\mathbb C$, and with zero-dimensional cokernel. Here purity means that every nonzero coherent subsheaf of $F$ has one-dimensional support. Its curve class is the homology class of the proper fundamental cycle $[F]=\sum_C\ell_{\mathcal O_{X,\eta_C}}(F_{\eta_C})[C]$, summed over the irreducible one-dimensional support components with their generic points $\eta_C$; its Euler characteristic is $\chi(F)=\sum_i(-1)^i\dim_{\mathbb C}H^i(X,F)$, finite by proper support. A family over a $\mathbb C$-scheme $S$ consists of a finitely presented quasicoherent sheaf $\mathcal F$ on $X\times S$, flat over $S$ with support proper over $S$, together with an $\mathcal O_{X\times S}$-linear map $s_S:\mathcal O_{X\times S}\to\mathcal F$ whose geometric fibre pairs are stable with class $\beta$ and Euler characteristic $n$. For finite-type complex test bases, the class label refers to the proper fundamental cycle on each closed complex fibre; on general tests it refers locally to the same class-labelled components after finite-presentation descent to a finite-type complex base. Thus the label is transported with the family, rather than interpreted as singular homology of a non-complex field. Isomorphisms of families are sheaf isomorphisms $\varphi:\mathcal F\to\mathcal F'$ satisfying $\varphi s_S=s'_S$, and pullback sends both the sheaf and its section to their ordinary base pullbacks. Write $P=P_n(X,\beta)$ for this moduli space. For the following K-theoretic constructions assume that $P$ is a separated finite-type quasi-projective Deligne–Mumford stack over $\mathbb C$, with a $T'$-equivariant perfect obstruction theory $\phi:E^\bullet\to L_{P/\mathbb C}$ and a chosen global $T'$-equivariant two-term vector-bundle presentation $[E^{-1}\xrightarrow{d}E^0]\simeq E^\bullet$ in degrees $-1,0$. Here the displayed isomorphism is an equivariant quasi-isomorphism of complexes, and $\phi$ has the amplitude and cotangent-cohomology conditions in the preceding K-theory supplier. Assume also a proper generalized $T'$-fixed locus in that supplier's saturated isogeny-fixed convention. Representability and properness of that fixed functor are the fixed-locus hypothesis. The preceding supplier constructs concentration and the virtual denominator at this scope; neither is inserted here as an extra comparison axiom.

Suppose $X$ is the connected toric Calabi–Yau threefold fixed by a one-dimensional subtorus $\mathbb C_q^\times\subseteq T$ in an equivariantly Calabi–Yau fivefold
$
Z=\operatorname{Tot}_X(L_4\oplus L_5),\qquad T\cong\mathbb C_q^\times\times T',
$
where $L_4,L_5$ are $T'$-equivariant line bundles, $\mathbb C_q^\times$ acts with weights $q$ and $q^{-1}$, and the equivariant Calabi–Yau trivialization imposes $L_4\otimes L_5\cong K_X$. For the universal pair $(\mathcal F,s)$ on $P_n(X,\beta)\times X$, let $\pi$ and $\rho$ be the projections to the moduli and $X$. Assume the two equivariant pushforwards $R\pi_*(\mathcal F\otimes\rho^*L_j)$ for $j=4,5$ are perfect, as required by the determinant definition. Use the source-compatible virtual structure sheaf and virtual canonical line defined from this obstruction theory and its specified global equivariant presentation, together with a chosen square-root line, to define
$
\widetilde{\mathcal O}^{\rm vir}=\mathcal O^{\rm vir}\otimes\Bigl(K_{\rm vir}\otimes\det\bigl(R\pi_*(\mathcal F\otimes\rho^*(L_4-L_5))\bigr)\Bigr)^{1/2}.
$
Here $L_4-L_5$ is a virtual difference in equivariant $K$-theory, not a ratio; the determinant and square root have the definitions and existence condition in the earlier A-page supplier. The source invariant is $\chi_{T'}(P_n(X,\beta),\widetilde{\mathcal O}^{\rm vir})$, defined by inverse fixed-locus pushforward followed by proper Euler characteristic under the stated proper-generalized-fixed-locus hypothesis. The proved virtual-localization identity computes this particular virtual sheaf and perfect line twist by its moving virtual-normal denominator; an arbitrary K-class still uses inverse concentration pushforward. The total class descends to the original localized character ring even when individual weights are computed after an isogeny. This definition records the source interface; it does not prove that every quasi-projective stable-pair moduli space carries the required obstruction theory, global equivariant presentation or square root.

## Definition references

[[def-gts-k-theoretic-virtual-structure-sheaf-and-obstruction-determinant]]
