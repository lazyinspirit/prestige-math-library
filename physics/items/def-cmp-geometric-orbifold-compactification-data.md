---
id: def-cmp-geometric-orbifold-compactification-data
kind: definition
title: Geometric finite-group orbifold compactification data
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 2
domain: physics
library: physics
physical_scope: "Conditional worldsheet data interface for compactifications with a geometric finite-group action; it does not assert that an arbitrary quotient defines a consistent string background."
deps:
  - def-cft-r5-finite-group-orbifold
dependency_roles:
  def-cft-r5-finite-group-orbifold: mathematical-premise
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures, arXiv:hep-th/9108028v1"
      url: https://arxiv.org/pdf/hep-th/9108028v1
      locator: "§§8.3–8.4, PDF pp. 60–64: finite-group quotients, twisted sectors, commuting torus holonomies, and limits of genus-one modular sums."
    - title: "Vladimir Belavin, The Complete Massless Singlet Spectrum in the Free-Field Construction of Heterotic Strings on Calabi–Yau Orbifolds, arXiv:2607.19289v2"
      url: https://arxiv.org/pdf/2607.19289v2
      locator: "Introduction, PDF p. 1, and §§4–7, PDF pp. 7–10: one specific free-field orbifold, twisted sectors, and its source-qualified spectrum."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Let $C$ be a specified **unitary bosonic full-local CFT data package** in the state-space/OPE presentation of the earlier full-local CFT definition. Its relevant data include a Hilbert space $\mathcal H$, a common dense invariant domain $\mathcal D$, left and right Virasoro actions, weak operator-valued local fields, radially convergent OPEs, vacuum data, locality, and genus-zero crossed-channel equality. Let $\mathcal F$ be its field-label space and $\sigma:\mathcal F\to\mathcal D$ its state-field bijection. Let $G$ be a finite group and $U:G\to U(\mathcal H)$ a unitary representation preserving $\mathcal D$, the vacuum, both Virasoro actions, field adjoints, and every OPE coefficient. Require $U_gY(a;z,\bar z)U_g^{-1}=Y(U_ga;z,\bar z)$, where $U_ga:=\sigma^{-1}(U_g\sigma(a))$; thus the induced field-label maps obey the group law and preserve the specified local operator products. Require a specified compact smooth internal target $X$ with a smooth Riemannian metric $g_X$ and a group action $a:G\times X\to X$, writing $a_g(x)=a(g,x)$, such that each $a_g$ is a smooth diffeomorphism, $a_e=\mathrm{id}_X$, $a_{gh}=a_g\circ a_h$, and $a_g^*g_X=g_X$. Supply a target realization of $C$ and a lift of this target action to its worldsheet fields inducing exactly $U_g$: on a target-coordinate configuration $f:\Sigma\to X$ the action is $f\mapsto a_g\circ f$, where $\Sigma$ is the worldsheet surface; the lift also specifies the action on any additional worldsheet fields. These realization and compatibility data are required, not inferred from the metric quotient.

A **geometric finite-group orbifold compactification datum** consists of $C$, $G$, $(X,g_X,a)$ and its specified worldsheet lift, the action $U$, a $g$-twisted Hilbert space $\mathcal H_g$ and dense invariant domain $\mathcal D_g$ for every $g\in G$, sector-field maps with their radial domains and branches, and unitary centralizer transports on every $\mathcal H_g$. All sector data satisfy the finite-group completion conditions, including its finite coordinate transports and compatible projected fields. In particular, identify $\mathcal H_e=\mathcal H$, $\mathcal D_e=\mathcal D$, and the untwisted fields, vacuum, adjoints and Virasoro actions with the parent data. The centralizer is $C_G(g):=\{h\in G:hg=gh\}$. After the supplied phase lift, its trace-insertion maps $V_h^g$ form an honest unitary representation on $\mathcal H_g$, preserve $\mathcal D_g$, and obey $V_h^e=U_h$. A projective initial lift is permitted only with a specified rephasing that yields these honest maps. Optional discrete torsion is a normalized group $2$-cocycle $\alpha:G\times G\to U(1)$, meaning $\alpha(e,g)=\alpha(g,e)=1$ and $\alpha(g,h)\alpha(gh,k)=\alpha(h,k)\alpha(g,hk)$; with no torsion set $\alpha=1$. For commuting $g,h$ put $\epsilon_\alpha(g,h):=\alpha(g,h)/\alpha(h,g)$ and define the projection action and projector by
$$W_h^g:=\epsilon_\alpha(g,h)V_h^g,\qquad P_g^\alpha:=\frac1{|C_G(g)|}\sum_{h\in C_G(g)}W_h^g.$$
The projected sector is $\mathcal H_g^{C_G(g),\alpha}:=\{v\in\mathcal H_g:W_h^gv=v\text{ for all }h\in C_G(g)\}$, and the candidate projected state space is $\bigoplus_{[g]}\mathcal H_g^{C_G(g),\alpha}$, with projected dense domains and compatible torsion-dependent OPEs as supplied by the completion. Thus invariants refer to $W^g$, not to a projective initial lift or, when torsion is nontrivial, to the insertion representation $V^g$.

For a projected state of left/right conformal weights $(h,\bar h)$, level matching means $h-\bar h\in\mathbb Z$. The phase-lift requirement is that the centralizer and twisted-OPE phase lifts exist and, after rephasing, satisfy the group law, associativity, and crossed-channel equations. For this interface, call these identities together with the specified torus modular-covariance identities the **orbifold anomaly-consistency conditions**; the phrase is only a name for these explicit compatibility conditions, not a claim to classify all anomalies of a complete string background. For each commuting pair $g,h$, the torus trace $Z_{g,h}(\tau,\bar\tau)=\operatorname{Tr}_{\mathcal H_g}(V_h^g Q_g)$ uses the supplied torus evolution $Q_g=q^{L_0^g-c_L/24}\bar q^{\bar L_0^g-c_R/24}$, with $q^a=e^{2\pi i\tau a}$ and $\bar q^a=e^{-2\pi i\bar\tau a}$ defined by the supplied joint spectral data. It must be specified for $\operatorname{Im}\tau>0$, with its trace-class domain or regularization, and must obey the declared modular covariance under $(g,h)\mapsto(g^ah^c,g^bh^d)$ for $\begin{pmatrix}a&b\\c&d\end{pmatrix}\in SL(2,\mathbb Z)$. Require the torus amplitude to be $|G|^{-1}\sum_{gh=hg}\epsilon_\alpha(g,h)Z_{g,h}$ and to agree with the trace on the projected sectors, using the completion's finite-sum-linear, conjugation-invariant regularization if needed. The twisted-sector OPE data include nonempty radial domains, coefficient maps, and branches, with convergent matrix coefficients and equality of iterated OPE channels. This item specifies genus-zero local data and genus-one traces only; it does not supply higher-genus amplitudes. Here higher-genus sewing data mean amplitudes on compact marked Riemann surfaces of genus at least two, together with factorization identities when punctures with local coordinates $z,w$ vanishing at their centers are glued by $zw=q$ for a complex parameter $q$ with $0<|q|<1$; the identity requires agreement with the convergent sum over a complete orthonormal basis of intermediate states and consistency between inequivalent gluing decompositions. A claim of a complete string background requires these data and review. Fixed loci $X^g=\{x\in X:g\cdot x=x\}$ are geometric data; when a fixed locus contributes localized states, those states occur in the corresponding twisted-sector description. Twisted sectors are required even for a fixed-point-free action, so the coarse orbit space alone does not encode the orbifold state space. A modular-invariant genus-one sum is not by itself a proof of twisted OPE locality or the higher-genus factorization identities just defined. The quotient notation $X/G$ does not assert that the coarse quotient is smooth or that the worldsheet completion exists.

## Definition references

[[def-cft-r5-finite-group-orbifold]]

## Facts & Assumptions

**Given:** The unitary bosonic full-local package and finite-group action in the Definition, the conditional sector data [F1], and the required geometric action, worldsheet lift and phase data [A1]–[A2].

[F1] [[def-cft-r5-finite-group-orbifold]]: for a unitary bosonic full-local CFT package and a finite unitary action preserving the common domain, vacuum, Virasoro actions, adjoints, and OPE coefficients, the conditional completion supplies a twisted sector for every group element, centralizer transports, phase lifts, convergent twisted OPEs, and commuting-pair torus traces with exact modular covariance. Its genus-zero and torus conditions are data, not a construction theorem for an arbitrary action, and it does not supply higher-genus sewing.

[A1] The compact smooth Riemannian target, its isometric $G$-action, and the target realization and worldsheet lift inducing the declared action on $C$ are required data. A target-space action alone does not furnish the worldsheet completion in [F1]; an abstract CFT orbifold without these geometric data is not a geometric compactification datum.

[A2] The discrete-torsion cocycle and all phase-lift, modular-covariance, level-matching, and twisted-OPE checks are model-specific data. They are not inferred from finiteness of $G$ or from smoothness of $X$. Higher-genus sewing is outside this item's defined interface and must be supplied separately for a complete string background.

## Proof

**Given:** [F1], [A1], and [A2].

1.1 The data required by [F1] are precisely worldsheet data: the full operator-algebra action, one twisted sector per group element, centralizer projection, compatible phases, and the stated local and torus consistency conditions. Therefore a target-space quotient without those data does not satisfy the definition, even if the orbit space $X/G$ is a well-defined topological space. [F1, A1, given]

2.1 The cocycle identity gives $\epsilon_\alpha(g,hk)=\epsilon_\alpha(g,h)\epsilon_\alpha(g,k)$ for $h,k\in C_G(g)$, as in F1. Hence $W_h^gW_k^g=W_{hk}^g$. Averaging this honest unitary representation gives $(P_g^\alpha)^2=P_g^\alpha=(P_g^\alpha)^*$ with image exactly its invariant subspace. Linearity of the specified traces gives $\operatorname{Tr}(P_g^\alpha Q_g)=|C_G(g)|^{-1}\sum_h\epsilon_\alpha(g,h)Z_{g,h}$; conjugation invariance and $|[g]|=|G|/|C_G(g)|$ give the stated weighted sum. With no torsion, $W^g=V^g$; since $\epsilon_\alpha(e,h)=1$ and $V_h^e=U_h$, the untwisted sector is the parent's invariant sector. For $G=\{e\}$ the sole projector is the identity on the supplied parent. [F1, A2, step 1.1, algebra]

3.1 If a nonidentity $g$ has a fixed locus, that locus is $X^g$; the coarse orbit space records neither its associated twisted-sector states nor the centralizer projection. If $g$ acts freely, [F1] still requires a $g$-twisted sector, so no case is encoded by $X/G$ alone. The level-matching, phase-lift, modular-covariance, and twisted-OPE conditions remain data for the selected CFT, not consequences of the quotient construction; higher-genus sewing remains separate. [F1, A1, A2, step 2.1] ∎

## Remarks

The current CFT supplier is ready for this conditional interface. It does not prove that an arbitrary finite symmetry admits the required compatible phase lifts, modular-covariant traces, and twisted sectors with OPE data. Ginsparg's §§8.3–8.4 give the genus-one commuting-holonomy and twisted-sector picture; Belavin supplies one source-specific heterotic example. Neither source is used to infer a universal construction theorem. The R1 proposal's older note that the generic CFT supplier is blocked is stale relative to the inspected current carrier and readiness record; the actual conditional scope above controls.
