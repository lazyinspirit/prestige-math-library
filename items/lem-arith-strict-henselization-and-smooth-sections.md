---
id: lem-arith-strict-henselization-and-smooth-sections
kind: lemma
title: "Strict henselization of a DVR and smooth sections"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-henselian-pair-and-henselian-local-ring
  - cor-henselian-local-simple-root-criterion
  - thm-krull-principal-ideal-theorem
  - thm-etale-locally-standard-etale
  - thm-jacobian-criterion-smooth-morphism
  - thm-one-dimensional-regular-local-rings-are-dvrs
  - thm-over-a-pid-flat-is-equivalent-to-torsion-free
  - thm-faithfully-flat-ring-map-characterisations
  - lem-nonempty-smooth-scheme-finite-separable-point
  - cor-dvr-is-a-pid
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 2.2/13-14 and 2.3/5-10; local proof in owner-arithmetic-models/neron-source/closure-supplement.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC. Let $R$ be a discrete valuation ring with fraction field $K$, residue field $k$ and a fixed uniformizer $\pi$, and fix a separable closure $k^s$ of $k$.

There exists a strictly henselian discrete valuation ring $R^{\mathrm{sh}}$, the **strict henselization** of $R$, which is the filtered colimit of the pointed local etale $R$-algebras with residue embeddings into $k^s$. It is faithfully flat over $R$, has residue field $k^s$, has uniformizer $\pi$, and is a filtered colimit of local etale $R$-algebras.

Let $\Lambda$ be a strictly henselian local ring with separably closed residue field $\kappa$ (for instance $\Lambda=R^{\mathrm{sh}}$), and let $V$ be a smooth $\Lambda$-scheme. Every $\kappa$-point of the special fibre $V_\kappa$ lifts to a $\Lambda$-section of $V$; the set of specializations of sections of $V$ is dense in $V_\kappa$. For the final assertion, assume additionally that $\Lambda$ is a strictly henselian DVR with fraction field $F$ and uniformizer $\pi$. If $V$ is smooth, integral and of finite type over $\Lambda$ of pure relative dimension $d$ with nonempty special fibre $V_\kappa$, and $U\subseteq V_F$ is a dense open subscheme of its generic fibre, then some $\Lambda$-section of $V$ has generic point in $U$; for $\Lambda=R^{\mathrm{sh}}$ this is the specialization of BLR 5.3/7 used in the finite translate enlargement.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$, residue field $k$, uniformizer $\pi$, and separable closure $k^s$; $R^{\mathrm{sh}}$, $\Lambda$, $\kappa$, $V$ and $U$ as in the statement.

[F1] Henselian local rings are characterized by unique lifting of simple roots of monic polynomials ([[def-henselian-pair-and-henselian-local-ring]], [[cor-henselian-local-simple-root-criterion]]). Together with the standard-etale charts [F2], this lifts a residual rational point of an etale neighbourhood uniquely.

[F2] An etale morphism is locally standard etale: locally on source and target it is a localization of a monogenic presentation by a monic polynomial with invertible derivative ([[thm-etale-locally-standard-etale]], which assumes AC).

[F3] A locally finitely presented morphism is smooth at a point exactly where a standard smooth chart with a unit Jacobian minor exists; such charts are flat with geometrically regular fibres ([[thm-jacobian-criterion-smooth-morphism]], which assumes AC).

[F4] A nonzero Noetherian local ring of dimension one is regular if and only if it is a discrete valuation ring, and every DVR is a principal ideal domain ([[thm-one-dimensional-regular-local-rings-are-dvrs]], [[cor-dvr-is-a-pid]]).

[F5] Over a principal ideal domain flatness is equivalent to torsion-freeness ([[thm-over-a-pid-flat-is-equivalent-to-torsion-free]]); a flat local ring homomorphism whose closed fibre is nonzero is faithfully flat ([[thm-faithfully-flat-ring-map-characterisations]]).

[F6] Every nonempty smooth finite-type scheme over a field has a closed point with finite separable residue field; over a separably closed field this is a rational point ([[lem-nonempty-smooth-scheme-finite-separable-point]], which assumes AC).

## Proof

**Proof technique:** direct. The strict henselization is built as a filtered union of pointed etale neighbourhoods, and sections are produced from standard smooth charts by the henselian lifting property.

1.1 Consider the directed system of pairs $(R',\alpha)$, where $R'$ is a local $R$-algebra which is etale over $R$ and whose residue field embeds as an $R$-subalgebra $k\to R'/\mathfrak m_{R'}\hookrightarrow k^s$ over those already chosen, with transition maps the local $R$-algebra maps over $k^s$. Each such $R'$ is flat over $R$ because etale maps are flat; its residue field is a finite separable extension of $k$, so $\mathfrak m_{R'}=\pi R'$ and $\dim R'=1$; being regular of dimension one it is a DVR with uniformizer $\pi$ by [F4]. The transition maps are injective local maps preserving $\pi$. In the union $R^{\mathrm{sh}}=\operatorname{colim}R'$ over the directed system, every nonzero element lies in a finite stage as $\pi^n$ times a unit, and every nonzero ideal has a least such exponent, so it is principal; hence $R^{\mathrm{sh}}$ is a DVR with uniformizer $\pi$ and residue field $k^s$, realized as a filtered colimit of local etale $R$-algebras. [F2, F4, given, construct]

2.1 The ring $R^{\mathrm{sh}}$ embeds into a separable closure of $K$ and hence is $R$-torsion-free, so it is $R$-flat by [F5] and $R$-faithfully flat because it is local with nonzero closed fibre. Its strict henselianity follows from the colimit description: an etale neighbourhood of a point with residual coefficients involves finitely many elements of $R^{\mathrm{sh}}$, hence is defined at a finite stage, and adjoining that pointed neighbourhood to the directed system exhibits its residual lift in the limit; this proves the henselian neighbourhood-lifting criterion of [F1] without assuming the individual stages are henselian. [F1, F5, step 1.1, construct]

3.1 Let $V$ be smooth over $\Lambda$ and let $x\in V_\kappa(\kappa)$. By [F3] choose a standard smooth chart $U=\operatorname{Spec}C$ around $x$ with $C=(\Lambda[t_1,\dots,t_n]/(f_1,\dots,f_m))_g$ and a unit $m\times m$ Jacobian minor. Cutting the chart by the $n-m$ coordinate differences $t_i-\widetilde{t_i(x)}$ with chosen lifts of the residue coordinates to $\Lambda$ that are not involved in that minor produces an etale $\Lambda$-scheme through $x$: the original $m$ equations and the $n-m$ coordinate differences have a unit $n\times n$ Jacobian minor. Its special fibre has the same $\kappa$-point $x$. The henselian lifting property of [F1] gives a $\Lambda$-section of this etale neighbourhood, hence a section of $V$ through $x$. [F1, F3, step 2.1, construct]

4.1 Every nonempty open of the smooth special fibre contains a $\kappa$-rational point by [F6], since $\kappa$ is separably closed; step 3.1 lifts that point to a section of $V$. Thus the specializations of sections meet every nonempty open and are dense in $V_\kappa$. Empty special fibre makes the density assertion vacuous. [F3, F6, step 3.1, algebra]

5.1 Now suppose $\Lambda$ is a strictly henselian DVR with fraction field $F$, $V$ is smooth integral of finite type with nonempty special fibre, and $U\subset V_F$ is dense. Give $V_F\setminus U$ its reduced closed structure and let $Z$ be its schematic closure. Its ideal is saturated under multiplication by $\pi$, since it contracts an ideal after inverting $\pi$. At a generic point $\xi$ of a special-fibre component, the local ring $B=\mathcal O_{V,\xi}$ has maximal ideal $(\pi)$, because the smooth special fibre is reduced and its local ring there is a field. Since $V$ is integral and flat, $\pi$ is a nonzero nonunit; the principal ideal theorem ([[thm-krull-principal-ideal-theorem]]) gives $\dim B=1$, and $B$ is regular, hence a DVR by [F4]. The localized ideal of $Z$ is nonzero (the generic complement is proper in the integral $V$) and $\pi$-saturated, so it is all of $B$: every nonzero proper DVR ideal is $(\pi^n)$ and fails saturation. Thus $Z$ misses every special-fibre generic point. A rational point of the nonempty smooth open $V_\kappa\setminus Z$ exists by [F6] and lifts to a section by step 3.1. Its generic point cannot lie in the closed $Z$, since its specialization does not. This gives a section with generic point in $U$. [F3, F4, F6, step 3.1, algebra] ∎
