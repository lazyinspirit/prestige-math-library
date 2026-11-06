---
id: def-cft-modular-functor-equivalence
kind: definition
title: Equivalence of chiral modular functors
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 9
domain: mathematics
library: mathematics
deps:
- def-cft-modular-functor-and-sewing
dependency_roles:
  def-cft-modular-functor-and-sewing: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
  - title: Brochier and Woike, A Classification of Modular Functors via Factorization
      Homology
    url: https://arxiv.org/pdf/2212.11259v5
    locator: 'Definitions 3.9–3.10 and Remark 3.11: the comparison bicategory and its
      nerve explicitly identify zigzags of extension maps carrying pullback-equivalent
      algebras.'
  - title: Chiara Damiolini and Lukas Woike, Modular Functors from Conformal Blocks
      of Rational Vertex Operator Algebras
    url: https://arxiv.org/pdf/2507.05845v2
    locator: Sections 3.2–3.4, especially Definition 3.4.2 and the modular-functor
      mapping-class and sewing structure.
  - title: Adrien Brochier and Lukas Woike, A Classification of Modular Functors via
      Factorization Homology
    url: https://arxiv.org/pdf/2212.11259v5
    locator: Theorem 6.6, Theorem 6.8, Sections 8.1–8.2; modular functors and their
      equivalences are organized in 2-groupoids.
  - title: Bojko Bakalov and Alexander Kirillov Jr., Lectures on Tensor Categories
      and Modular Functor, Chapter 5
    url: https://www.math.stonybrook.edu/~kirillov/tensor/chapter5.ps.gz
    locator: Section 5.1, Definition 5.1.12, printed pp. 97–98; Section 5.2, Theorem
      5.2.3, pp. 99–103; Section 5.7, pp. 127–130. Preliminary lecture-note version.
verification:
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Definition

Fix the surface modular operad and target bicategory specified by the preceding modular-functor definition. A modular functor is a pair $(Q,F)$ consisting of an extension over that operad, its genus-zero section and insertion-of-vacua structure, and a compatible modular algebra. The extension's insertion condition is the equivalence $\lambda_\phi:Q_{\Sigma_\phi}\to Q_\Sigma$ defined there: glue the selected genus-zero lift of each embedded disk to the complementary surface and require the induced map on homotopy fibers to be an equivalence. Separately, the algebra identifies values before and after capping an added boundary with its distinguished vacuum object. Write $(\mathcal C,\kappa,\mathrm{coev},\mathsf D,\eta,\chi,E)$ and $(\mathcal C',\kappa',\mathrm{coev}',\mathsf D',\eta',\chi',E')$ for the label and duality data of $F$ and $G$. A **comparison** $(Q,F)\to(Q',G)$ consists of a map $\phi:Q\to Q'$ of extensions over the surface operad preserving these structures, a complex-linear equivalence $H:\mathcal C\to\mathcal C'$ with a specified quasi-inverse and unit and counit isomorphisms, and natural isomorphisms
$$\kappa'\circ(H\boxtimes H)\cong\kappa,\qquad(H\boxtimes H)\circ\mathrm{coev}\cong\mathrm{coev}',\qquad H(E)\cong E',\qquad d:H\mathsf D\xRightarrow{\cong}\mathsf D'H^{\mathrm{op}}.$$
Require these identifications to commute with the pairing and copairing symmetries and both triangle isomorphisms. Biduality compatibility means
$$\bigl(\mathsf D'(d_X)\bigr)^{-1}\circ d_{\mathsf D X}\circ H(\eta_X)=\eta'_{H X}.$$
Compatibility with $\chi$ means that the pairing identification followed by $\chi_{X,Y}$ agrees with $\chi'_{HX,HY}$ followed by the dual of the isomorphism $\operatorname{Hom}_{\mathcal C}(X,\mathsf D Y)\to\operatorname{Hom}_{\mathcal C'}(HX,\mathsf D'HY)$ given by $f\mapsto d_Y\circ H(f)$. Equivalences of abelian categories are exact, so $H$ and its tensor powers are admissible right-exact functors. These identifications define a morphism of endomorphism operads
$$H^*:\operatorname{End}_{\mathcal C'}^{\kappa'}\longrightarrow\operatorname{End}_{\mathcal C}^{\kappa},\qquad P\longmapsto P\circ H^{\boxtimes n}$$
on a corolla with $n$ legs, with products on disjoint corollas. The coevaluation identification supplies compatibility with graph contraction and the pairing identification supplies compatibility with the operadic identity. Finally include a symmetric monoidal natural equivalence
$$\theta:F\xRightarrow{\simeq}H^*(G\circ\phi),\qquad\theta_{\widetilde\Sigma}:F_{\widetilde\Sigma}\xRightarrow{\simeq}G_{\phi(\widetilde\Sigma)}\circ H^{\boxtimes n}.$$
Thus both sides have target $\operatorname{End}_{\mathcal C}^{\kappa}$. The map of extensions need not be an equivalence of groupoids. The comparison data must preserve and commute with the category-level duality data: the evaluation functor $\kappa$, coevaluation functor $\mathrm{coev}$ and object $\Delta=\mathrm{coev}(\mathbb C)$, their symmetry isomorphisms and both triangle isomorphisms, and the boundary-reversal equivalence $\mathsf D$, biduality $\eta$, and natural pairing-duality compatibility $\chi_{X,Y}:\kappa(X,Y)\cong\operatorname{Hom}_{\mathcal C}(X,\mathsf D Y)^*$. It must also commute with mapping-class actions, disjoint union, vacuum insertion and every sewing operation, including their coherence isomorphisms. For comparisons of functors equipped with a fixed anomaly parameter $\alpha$, additionally give isomorphisms $\mathcal B^F_{g,n}(X_\bullet)\cong\mathcal B^G_{g,n}(H X_\bullet)$ intertwining the specified $\alpha A_\Lambda(-\widetilde\Delta)$ actions and inducing $\theta$ on fibers.

Use the bicategory of such comparisons: its 2-morphisms are compatible invertible natural transformations of the extension maps and label equivalences that intertwine $\theta$ and all the displayed structure maps. Invert its comparison maps coherently. An **equivalence of chiral modular functors** means an equivalence in that localization: it may be represented by a zigzag of the displayed comparisons, including a common extension to which both algebras pull back equivalently. Every extension map, label-category equivalence and algebra equivalence in the zigzag must be specified. An equivalence of underlying balanced braided categories alone supplies none of these data. An actual equivalence of extensions with a compatible algebra equivalence is a special case; when the extension and label data are fixed, an ordinary natural equivalence over their identities is another special case.

This is the source modular-functor convention, namely the homotopy type of the comparison bicategory. It identifies extensions whose extra kernel acts trivially and which carry the same modular algebra after pullback. For an abelian group $G$, let $BG$ denote the groupoid with one object and automorphism group $G$. In the expression $Q\times BG$, use one $BG$ factor per input corolla: at $T=\bigsqcup_v T_v$ take $Q(T)\times\prod_v BG$. A graph sends these group factors to one factor per output component by multiplying the input automorphisms at its vertices; commutativity of $G$ makes this independent of their order, and associativity gives graph-substitution compatibility. The empty product is the terminal groupoid. Lift the genus-zero section by assigning the identity element of $G$ to every arrow. Disk insertion on the new fiber factor is the identity functor of $BG$, so insertion of vacua is preserved. Then $(Q\times BG,F\circ\mathrm{pr}_Q)$ compares to $(Q,F)$ by projection. For nontrivial $G$ this projection is not an equivalence of groupoids, although its fibers are connected; requiring it to be an equivalence would incorrectly distinguish these presentations.

A claim of uniqueness up to contractible choice is relative to the specified **cyclic framed genus-zero data**, including the evaluation pairing, coevaluation functor and object, both triangle isomorphisms, boundary-reversal equivalence and biduality, their specified pairing-duality compatibility, symmetry, and rotation. It means that the homotopy type of extensions with those fixed data and the displayed comparisons is contractible; equivalently, in the localized space the coherent comparison choices have contractible homotopy fibers. A single comparison identifies $F_{\widetilde\Sigma}(X_\bullet)$ with $G_{\phi(\widetilde\Sigma)}(H X_\bullet)$ on each fixed surface lift, so a zigzag preserves the dimensions with labels transported by its specified equivalences. Hence corresponding finite-rank bundle values have equal ranks.

## Definition references

[[def-cft-modular-functor-and-sewing]]
