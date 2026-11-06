---
id: def-gts-weak-phase-framing-moduli-datum
kind: definition
title: "Gts weak phase framing moduli datum"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: algebraic-geometry
page: gts-weak-stability-framed-cy4-moduli
dependency_level: 0
deps: []
dependency_roles: {}
justified_by: []
forward_refs: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Y. Bojko, Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications"
      url: https://arxiv.org/pdf/2507.05922v3
      locator: "Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2. Exact source hypotheses and limitations; no missing local proof is replaced by citation."
    - title: "Bojko, Kuhn, Liu, and Thimm, Wall-crossing for equivariant DT4 invariants"
      url: https://arxiv.org/html/2608.23515v1
      locator: "§2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; use only under its exact framing, HN, finite-type, fixed-properness, and resolution hypotheses."
    - title: "Bernhard Keller, Deformed Calabi–Yau completions"
      url: https://arxiv.org/pdf/0908.3499
      locator: "Sections 3.3–3.7, 4.1–4.2 and Theorem 4.8 proof: finite diagonal resolution, inverse dualizing tensor category and its trace; reconstructed in the actual master, not imported as an enhancement-identification theorem."
verification:
  precheck: pending
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
aliases: []
---

## Definition

A **weak stability and framed CY4 datum** consists of the original category $\mathcal A$ (the degree-zero abelian category of the stated CY4 dg-quiver, or the specified category of compact-support coherent sheaves on $X=\operatorname{Tot}(K_Y)$), its numerical class homomorphism $K_0(\mathcal A)\to\Gamma$, the monoid $C(\mathcal A)\subseteq\Gamma$ of classes of nonzero objects, and the actual admitted set $E(\mathcal A)\subseteq C(\mathcal A)$. If an application specifies only an exact subcategory of this ambient category, its conflations are the ambient short exact sequences with all three terms in that subcategory. No closure of $E(\mathcal A)$ under arbitrary sums or under $\alpha\mapsto2\alpha$ is part of the datum. The CY4 Euler pairing, when part of the source category, is an integral bilinear form $\chi:K_0(\mathcal A)\times K_0(\mathcal A)\to\mathbb Z$ descending to $\Gamma$ and symmetric. Its self-pairing parity $\epsilon(\alpha)=\chi(\alpha,\alpha)\bmod 2$ is additive on $\Gamma$. If an application requires even total classes, it must designate an actual total domain $E_{\mathrm{tot}}^{\mathrm{even}}\subseteq E(\mathcal A)\cap\ker\epsilon$. This does not assert that every admitted factor class is even; odd admitted factors may occur in an even total. Neither the total domain nor $E(\mathcal A)$ is inferred from the CY4 label or enlarged by closure under sums.

A source weak stability $\sigma$ consists of a totally ordered phase set $(S,\leq)$ and a map $\phi_\sigma:C(\mathcal A)\to S$. Its weak see-saw axiom is that, whenever $\alpha=\alpha_1+\alpha_2$ with $\alpha_1,\alpha_2\in C(\mathcal A)$, either $\phi_\sigma(\alpha_1)\leq\phi_\sigma(\alpha)\leq\phi_\sigma(\alpha_2)$ or $\phi_\sigma(\alpha_1)\geq\phi_\sigma(\alpha)\geq\phi_\sigma(\alpha_2)$. In the central-charge realization used by the source, a finite filtration $0=K_0\subset K_1\subset\cdots\subset K_l=\Gamma$ and homomorphisms $Z_i:K_i/K_{i-1}\to\mathbb C$ give the phase of a class first appearing in $K_i/K_{i-1}$ by $Z_i(\bar\alpha)=m(\alpha)e^{i\pi\phi_\sigma(\alpha)}$, where $m(\alpha)>0$ and $\phi_\sigma(\alpha)\in(0,1]$.

A nonzero object $E$ is $\sigma$-semistable if every ambient short exact sequence $0\to E_1\to E\to E_2\to0$ with both $E_1,E_2\ne0$ satisfies $\phi_\sigma([E_1])\leq\phi_\sigma([E_2])$; it is $\sigma$-stable if the inequality is strict for every such sequence. The HN property means that every nonzero object has a finite filtration by subobjects whose nonzero successive quotients are semistable and have strictly decreasing phases. This is an explicit hypothesis, not a consequence of weak see-saw alone. For a fixed $\phi_0\in S$, $\mathcal C_{\phi_0}$ is the full subcategory consisting of zero and the semistable objects of phase $\phi_0$. Its exact structure consists precisely of ambient short exact sequences with all three terms in $\mathcal C_{\phi_0}$. An admissible subobject or kernel means one occurring in such a sequence. An ordinary kernel is computed in the ambient abelian category when it exists and need not belong to $\mathcal C_{\phi_0}$; ordinary and admissible kernels are not identified.

The source category is $\mathbb C$-linear, with $\operatorname{Ext}^i(U,V)=\operatorname{Hom}(U,V[i])$ in its specified triangulated enhancement. Its CY4 trace means specified maps $\operatorname{tr}_U:\operatorname{Ext}^4(U,U)\to\mathbb C$ for which composition gives perfect pairings $\operatorname{Ext}^i(U,V)\otimes\operatorname{Ext}^{4-i}(V,U)\to\mathbb C$ on the objects used, with finite-dimensional Ext spaces. For homogeneous $f:U\to V[i]$ and $g:V\to U[4-i]$, the graded cyclic convention is $\operatorname{tr}_U(g[i]\circ f)=(-1)^{i(4-i)}\operatorname{tr}_V(f[4-i]\circ g)$. A **spherical source** $S_k=(1,0)_k$ means that the identity induces $\mathbb C\cong\operatorname{Ext}^0(S_k,S_k)$, the trace induces $\operatorname{Ext}^4(S_k,S_k)\cong\mathbb C$, and $\operatorname{Ext}^i(S_k,S_k)=0$ for every integer $i\notin\{0,4\}$. This self-Ext condition is distinct from concentration of $\operatorname{Ext}^i(S_k,E)$ for old objects $E$; it does not assert existence of a spherical source for an additional framing functor.

For each actually available original index $k$, specify the full exact subcategory $\mathcal A_k\subseteq\mathcal A$, closed under direct summands, and its original concentration open $\mathcal U_k$. On $\mathcal U_k$, the framing complex lies in its stipulated single degree and is a vector bundle. A **bare** datum may specify a source CY4 category $\mathcal B_k$ and spherical source object $(1,0)_k$. Its identification of old objects and framing at the abelian level does not by definition identify their full dg Hom complexes, CY traces or derived moduli with those of a geometric sheaf model. Such a dg comparison is additional mathematical content to be constructed and proved, not implicit in the notation $E\in\mathcal B_k$. The source functor is $\mathrm{Fr}_k(E)=\operatorname{Ext}^1_{\mathcal B_k}((1,0)_k,E)$; the source concentration condition is $\operatorname{Ext}^i_{\mathcal B_k}((1,0)_k,E)=0$ for $i\ne1$, with the prescribed positive rank constant on each stipulated class/open. It is exact only on the declared exact category. In the source local-sheaf realization $X=\operatorname{Tot}(K_Y)$, state the smooth separated quasi-projective threefold $Y$, the lifted torus action, the actual divisors $D_k$ (including when they are pulled back from $Y$), the vanishing conditions defining $\mathcal A_k$, and the precise $H^0(E(D_k))\cong\mathrm{Fr}_k(E)$ identification. In the quiver realization, state the actual vertex-space framing functor. No cofinal framing index is inferred.


For the **constructed local-spectral branch**, retain the actual original $k$, $Y$, $X=\operatorname{Tot}(K_Y)$ and concentration open, and specify an actual line bundle $L_{Y,k}$ and an isomorphism $\mathcal O_X(-D_k)\cong\pi^*L_{Y,k}$ realizing the original framing. Thus the named framing complex is $R\operatorname{Hom}_X(\pi^*L_{Y,k},F)=R\operatorname{Hom}_Y(L_{Y,k},\pi_*F)$, with its given concentration identification. No change of index or new divisor is part of this prescription. A bare datum without this realization remains a bare datum; the following construction does not identify its arbitrary $\mathcal B_k$ with the constructed one.

Here is the prescribed dg model, as a definition of the construction to be verified. Let $\mathscr A_Y$ be a small dg model of perfect complexes on $Y$, with its actual derived Hom complexes. Use right dg modules, so the module represented by a sheaf $G$ is $h_G(P)=R\operatorname{Hom}_Y(P,G)$. Form the directed dg category $\mathscr D_{k,p}$ by adjoining a named primary vertex $p$ with $\operatorname{End}(p)=\mathbb C$, $\operatorname{Hom}(p,P)=0$ and $\operatorname{Hom}(P,p)=R\operatorname{Hom}_Y(P,L_{Y,k})$ for old objects $P$. Composition on this last module is actual composition on $Y$. A right module consists of an old module $h_G$, a source space $V_p$, and a module map $h_{L_{Y,k}}\otimes V_p\to h_G$; equivalently it gives the actual section $V_p\to R\operatorname{Hom}_Y(L_{Y,k},G)$. This fixes the variance and the evaluation map, not merely their ranks.

Choose a cofibrant bimodule resolution $P_{\mathscr D}\to\mathscr D$ of the diagonal, and its actual derived dual $\Theta_{\mathscr D}=R\operatorname{Hom}_{\mathscr D^e}(\mathscr D,\mathscr D^e)$, computed on that resolution. Define the **constructed four-dimensional source model** to be the dg tensor category

$$\mathscr B^{\mathrm{geom}}_{k,p}=T_{\mathscr D_{k,p}}(\Theta_{\mathscr D_{k,p}}[3]).$$

The tensor category has the old objects and $p$; its morphisms are the sums of tensor powers of the displayed bimodule, with the differential induced from the diagonal resolution and its dual and the usual graded Leibniz rule. Work with its right dg modules whose old part has the stated compact spectral support and whose named source spaces are finite-dimensional; in a family use the corresponding relative perfect modules and proper old support. The vertex module with value $\mathbb C$ at $p$ and zero old part is the named source of this constructed model. Being spherical, having the required source Ext concentration, having a CY4 trace, independence of resolution, and comparison with the actual geometric old and primary obstruction theories are conclusions to be proved in the master-construction result. They are not assumptions or acceptance clauses in this definition.

The independent auxiliary construction uses the same original framing module and adjoins a DIFFERENT vertex $a$ with its own source space. In the directed right-module convention the maps are prescribed at representation level as $f_a:V_a\to\mathrm{Fr}_k(F)$ and $g_a:V_a\to V_p$. They have separate generators, with no relation $f_a=s_pg_a$. Flag and sink vertices, their gauge groups, the arrows $a,b,c$ and their actual dimensions are included as separately named parts of the diagram. For a relation $bc=0$, adjoin a cofibrant generator $r$ of degree $-1$ whose differential is the algebra product representing $bc$ in this right-module convention; hence its universal derivative is $(\delta b)c+b(\delta c)$. Apply the same inverse-diagonal tensor construction only AFTER this directed diagram and its relation generator have been formed. This defines the constructed auxiliary dg model. The prescribed ordinary forgetful maps on the original classical spectral-diagram spaces forget the named forward arrows, flags or covector data. This prescription does not define restriction of all dg modules along an inclusion of the old completed category: after a new source is attached, the old dual or moment differentials can acquire its endpoint products, so that inclusion need not be a dg functor. The source and auxiliary tensor categories themselves, their allowed modules, the original specified base $Z_X$ and its full cotangent complex are unchanged. The master must construct the actual comparison of the evaluated completed diagonal with the geometric trace-free obstruction complex on that original $Z_X$, including all dual endpoint terms, universal cotangent arrows, coherent descent and pullback along every derived coefficient map to $Z_X$. None of those comparisons or PVP properties is input data here. An equivalence with a naive forward-arrow derived stack, or a forgetful map on every independently chosen derived point of the full completed-module stack, is not asserted by this clause.

The relative quotient cotangent used by this prescription retains auxiliary gauges. On a coordinate presentation $R_{\mathrm{aux}}$ after eliminating the regular $bc$ coordinates, it is $[\Omega_{R_{\mathrm{aux}}/\mathrm{primary}}\to\mathfrak g_{\mathrm{aux}}^\vee]$ in degrees $0,1$, the map being dual to the infinitesimal gauge action. Its reduction to a vector bundle in degree zero is a property to prove on an actual free locus, not a consequence imposed by “injective flag” terminology. In particular the prescription retains the sink gauge when $a=b=0$.

The original geometric orientation is retained as input where it is supplied; for a constructed reduction use the ordered forward/dual determinant convention. The master proof must construct its determinant comparison and transport that orientation. This definition neither declares a geometric line spherical nor supplies a target dg equivalence as an axiom. If a fixed primary source line different from $L_{Y,k}$ is part of an application, its own specified pullback line and framing bimodule are used at vertex $p$; the auxiliary vertex continues to use the original $k$-module, and those two named inputs are not identified.

An original common-line framing of length $m$ is a one-dimensional line $L$ and one map $s:L\to\mathrm{Fr}_k(E)^{\oplus m}$ with its specified $T$-linearization. It is collectively critical when no proper admissible $\mathcal C_{\phi_0}$-subobject contains all component images. The original torus action, source and target maps in every master diagram, and chosen orientation with its determinant and direct-sum sign convention are part of the datum. A CY4 label alone is not an orientation.

This defines both bare input data and the explicit constructed local-spectral model prescription. Its construction properties are proved in the master result, not assumed here. It asserts no abelian phase category, proper moduli space, torus-fixed limit, or wall-crossing formula, and no equivalence with an arbitrary pre-specified source enhancement. Exact planned interface: “Specify original weak stability, exact phase category, actual ordinary-vs-admissible maps, original concentration opens and exact Fr_k, common-line framing, even emergent class domain, torus linearizations and orientations. No sum closure, cofinal-index availability, or abelian phase category is implicit.”

## Definition references

[Bojko, *Wall-crossing for Calabi–Yau fourfolds: framework, tools, and applications*](https://arxiv.org/pdf/2507.05922v3), Assumptions 5.1 and 5.10; Definition 5.3; §6.2; §6.3; Assumption 6.9; Remark 6.10; Example 6.11; Theorem 6.12; Lemma 6.13; Equation (6.14); §7.2.

[Bojko, Kuhn, Liu, and Thimm, *Wall-crossing for equivariant DT4 invariants*](https://arxiv.org/html/2608.23515v1), §2.2.8, §3.2, Assumption 4.2.4, and Theorem 1.2.1; used only under their stated hypotheses.

[Bernhard Keller, *Deformed Calabi–Yau completions*](https://arxiv.org/pdf/0908.3499), §§3.3–3.7, 4.1–4.2 and the proof of Theorem 4.8; the diagonal and tensor constructions are reconstructed in the master proof.

