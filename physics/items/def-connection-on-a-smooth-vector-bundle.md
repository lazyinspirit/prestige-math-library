---
id: def-connection-on-a-smooth-vector-bundle
kind: definition
title: Connection on a smooth vector bundle
status: published
origin: pipeline
deps: ["def-smooth-section-local-section-and-support", "def-differential-of-a-smooth-real-valued-function", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-product-topology", "thm-product-of-countable", "prop-second-countability-is-hereditary", "def-quotient-topology", "lem-matrix-inversion-preserves-ck-regularity", "lem-open-or-closed-surjection-is-quotient"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Ved Datar, Lectures on Riemannian Geometry, section 5.1
      url: https://math.iisc.ac.in/~vvdatar/Lecture_Notes/RG_Lectures_typesett_published.pdf
    - title: Brian Conrad, Linear algebra operations on vector bundles, section 3, pp.7–9; local Hom charts, with a choice-free second-countability proof supplied here
      url: https://math.stanford.edu/~conrad/diffgeomPage/handouts/bundleops.pdf
---

## Definition

Let $E\to M$ be a finite-rank smooth real vector bundle on a Hausdorff, second-countable smooth manifold; manifolds with boundary are allowed. Write $\Gamma(E)$ for its smooth sections, as in [[def-smooth-section-local-section-and-support]]. Define
$$\Omega^1(M;E)=\Gamma(\operatorname{Hom}(TM,E)).$$
The Hom bundle is the canonical smooth bundle constructed below from the supplied smooth tangent bundle and E. Thus an element $\eta$ assigns a linear map $\eta_p:T_pM\to E_p$ to each point, smoothly in bundle charts. This is also the meaning of an $E$-valued one-form, customarily written as a section of $T^*M\otimes E$. No tangent-only tensor construction is needed for this definition.

A **connection** on $E$ is an $\mathbb R$-linear map $\nabla:\Gamma(E)\to\Omega^1(M;E)$ such that, for every $f\in C^\infty(M)$ and $s\in\Gamma(E)$,
$$\nabla(fs)=df\otimes s+f\nabla s.$$
Here $(df\otimes s)_p(v)=df_p(v)s(p)$, using [[def-differential-of-a-smooth-real-valued-function]]. In local coordinates and a local frame of $E$, this map has entries $(\partial_i f)s^a$, so it is a smooth Hom-bundle section. The tensor notation in the rule therefore already has a defined meaning.

This definition specifies a given operator, not its existence. The local operator rules and the Hom construction from supplied smooth bundles use no choice axiom. If $M$ is empty or $E$ has rank zero, both spaces are zero spaces and there is exactly one such operator. If $M$ has dimension zero, $TM$ is the zero bundle and the same conclusion holds, even when $E$ has positive rank. Rank one uses the same definition without a preferred trivialization.


**Smooth Hom bundles from supplied smooth bundles.** The following construction supplies the Hom notation used here and in the subsequent dual and tensor constructions. Let $A,B\to M$ be supplied smooth real vector bundles of ranks $r,s$, in the sense of [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]], with Hausdorff second-countable total spaces. The same local product convention is used when $M$ has boundary. We construct the smooth structure on the fibrewise set $H=\coprod_{p\in M}\operatorname{Hom}(A_p,B_p)$, rather than infer global topology from transition matrices alone.

If $r,s>0$, let $D\subseteq A^r\times B^r$ consist of tuples $(a_1,\ldots,a_r,b_1,\ldots,b_r)$ over a common base point $p$ such that $(a_1,\ldots,a_r)$ is a basis of $A_p$. Give $D$ the subspace topology of the finite product [[def-product-topology]]. Fix one countable base of each of the two supplied total spaces; this is a finite choice of witnesses in ZF, not a countable family of choices. Finite product boxes give a countable base of $A^r\times B^r$, because their indices lie in a finite product of countable sets, countable by repeated application of [[thm-product-of-countable]]. Taking traces gives a countable base of $D$ by [[prop-second-countability-is-hereditary]]. No manifold structure on that ambient product or its fibre-product subspace is needed.

Define $q:D\to H$ by sending a tuple to the unique linear map $a_i\mapsto b_i$. The map is onto: each individual finite-dimensional fibre has a basis, and a specified map determines the corresponding $b_i$; this pointwise existence does not choose bases simultaneously. Give $H$ the quotient topology [[def-quotient-topology]]. For any one common local trivialization of $A,B$ over $U$, the open saturated subspace $D_U$ is homeomorphic to $U\times GL(r,\mathbb R)\times M_{s\times r}(\mathbb R)$. Write its coordinates $(p,C,V)$, with the frame vectors the columns of $C$ and the image vectors the columns of $V$. The proposed Hom chart sends a fibre map to its matrix $T$ in the fixed local frames, and its composite with $q$ is
$$ (p,C,V)\longmapsto(p,VC^{-1}). $$
This map is a continuous open surjection: $(p,C,V)\mapsto(p,C,VC^{-1})$ is a homeomorphism with inverse $(p,C,T)\mapsto(p,C,TC)$, and projection off $GL(r,\mathbb R)$ is open, as is seen on product boxes. Smooth matrix inversion, in particular continuity, is supplied by [[lem-matrix-inversion-preserves-ck-regularity]]. Thus the composite is quotient by [[lem-open-or-closed-surjection-is-quotient]]. Since $D_U$ is open and saturated, the quotient criterion also says that $H_U$ is open and the restricted quotient topology agrees with its subspace topology. Comparing the two quotient criteria proves that the proposed Hom chart $H_U\to U\times M_{s\times r}(\mathbb R)$ is a homeomorphism.

These local formulas also prove that $q$ is globally open: for open $O\subseteq D$, its image intersected with every $H_U$ is the open image of $O\cap D_U$ in this chart. The images of the countable base of $D$ therefore form a countable base of $H$. Indeed, if $h\in W$ with $W$ open in $H$, choose a single $d\in q^{-1}(h)$ and a basic $C_0$ with $d\in C_0\subseteq q^{-1}(W)$; then $h\in q(C_0)\subseteq W$. This is a proof for an arbitrary one point and neighbourhood, not a simultaneous choice of representatives. Distinct maps over distinct base points have disjoint neighbourhoods pulled back from $M$; distinct maps over the same base point have disjoint neighbourhoods inside one open Hom chart. Hence $H$ is Hausdorff as well as second countable.

If original bundle coordinates change by $g$ on $A$ and $h$ on $B$, the Hom matrix changes by $T\mapsto hTg^{-1}$. These maps and their inverses are smooth by finite matrix algebra and the smooth-inversion supplier. At a boundary point, extend the finitely many smooth matrix entries to an ambient coordinate neighbourhood and shrink it so the nonzero determinant stays nonzero; the same inverse formula restricts to the half-space. Thus these charts form a smooth bundle atlas, with total-space charts given by a base chart times a Euclidean matrix space; a boundary chart remains a half-space chart. The fibre operations are linear in these charts. Every original local trivialization participates, so the topology and maximal smooth atlas are canonical and independent of frames. If either rank is zero, $H$ is canonically the zero bundle $M$ and needs no matrix inversion; an empty base gives the empty total space. Finally $A^*=\operatorname{Hom}(A,M\times\mathbb R)$ uses the explicit trivial line, whose product base is countable by the same finite argument. Its transition is $g^{-T}$. This proves the required dual and Hom bundle existence and smooth matrix rules from supplied bundles without a choice axiom or a selected countable family of trivializations.
