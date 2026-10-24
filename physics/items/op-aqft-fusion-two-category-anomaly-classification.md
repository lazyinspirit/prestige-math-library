---
id: op-aqft-fusion-two-category-anomaly-classification
kind: open-problem
title: "Anomaly matching structures for fusion 2-categories"
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-anomaly-matching-and-frontier
dependency_level: 6
deps:
  - def-aqft-noninvertible-defect-fusion
  - def-aqft-thooft-anomaly
  - def-aqft-global-anomaly-holonomy
  - def-aqft-anomaly-inflow-relative-theory
dependency_roles:
  def-aqft-noninvertible-defect-fusion: mathematical-premise
  def-aqft-thooft-anomaly: formulation-prerequisite
  def-aqft-global-anomaly-holonomy: formulation-prerequisite
  def-aqft-anomaly-inflow-relative-theory: formulation-prerequisite
physical_scope: "Open classification question for a fixed all-boson finite semisimple fusion 2-category symmetry in an oriented 2+1-dimensional QFT; no solution or general physical realization is claimed."
provenance:
  statement: ai-generated
  proof: not-applicable
generation:
  role: open-problem
sources:
  references:
    - title: "Andrea Antinucci, Christian Copetti, Yuhan Gai, and Sakura Schäfer-Nameki, Categorical Anomaly Matching"
      url: "https://arxiv.org/pdf/2508.00982"
      locator: "§IV.A, §VII, and Appendix A.6: anomaly categories, higher-categorical extensions, and fusion 2-categories in (2+1)d."
    - title: "Lakshya Bhardwaj, Daniel Pajer, Sakura Schäfer-Nameki, Apoorv Tiwari, Alison Warman, and Jingxiang Wu, Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I"
      url: "https://arxiv.org/pdf/2408.05266"
      locator: "§2.1 and §3.3: bosonic-type fusion 2-category symmetries and the explicit classification of topological boundaries for the selected Z2 Dijkgraaf–Witten theory."
    - title: "Lakshya Bhardwaj, Sakura Schäfer-Nameki, Apoorv Tiwari, and Alison Warman, Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II"
      url: "https://arxiv.org/pdf/2502.20440"
      locator: "Abstract and §2.1: the all-boson fusion 2-category SymTFT framework and its gapped-boundary description."
    - title: "Kansei Inamura, Sheng-Jie Huang, Apoorv Tiwari, and Sakura Schäfer-Nameki, (2+1)d Lattice Models and Tensor Networks for Gapped Phases with Categorical Symmetry"
      url: "https://arxiv.org/pdf/2506.09177"
      locator: "Abstract, Introduction, and summary §2.1: all-boson fusion 2-category symmetries, generalized gauging, and lattice construction of non-chiral gapped phases."
    - title: "Daniel Robbins and Subham Roy, SymTFT Actions, Condensable Algebras and Categorical Anomaly Resolutions"
      url: "https://arxiv.org/pdf/2509.05408"
      locator: "§3.3, §4.3, and §5: the Rep(D4) and Rep(Q8) anomaly-resolution sequences and the Rep(H8) case identified for further work."
    - title: "Mahesh K. N. Balasubramanian, Matthew Buican, Clement Delcamp, and Rajath Radhakrishnan, Gauging Non-Invertible Symmetries in (2+1)d Topological Orders"
      url: "https://arxiv.org/pdf/2507.01142"
      locator: "Abstract, §4.2–§4.3, and §7: constraints on gaugeable non-invertible symmetries in bosonic (2+1)d TQFTs, with spin and non-topological extensions left open."
    - title: "Liang Kong, Yin Tian, and Shan Zhou, The Center of Monoidal 2-Categories in 3+1D Dijkgraaf-Witten Theory"
      url: "https://arxiv.org/pdf/1905.04644"
      locator: "§§1–3.2: the twisted G-graded finite semisimple 2-category 2Vec_G^omega and its braided monoidal 2-category center as bulk-defect data."
verification:
  precheck: n/a
---

## Open problem

Use natural units $c=\hbar=1$. Fix an oriented bosonic $2+1$-dimensional theory. Throughout this problem use **weak monoidal 2-categories**, with the following explicit convention. The underlying $\mathbb C$-linear 2-category is strict as in the earlier defect-fusion definition: composition of 1-morphisms is strictly associative and unital and horizontal and vertical composition of 2-morphisms satisfy interchange. Weakness here concerns the tensor structure; it does not mean discarding any coherence maps.

The tensor is a $\mathbb C$-bilinear pseudofunctor $\otimes:\mathcal A\times\mathcal A\to\mathcal A$, with a unit object $I_{\mathcal A}$. A linear pseudofunctor assigns objects and linear functors on Hom categories, with invertible comparison 2-morphisms $F(g)\circ F(f)\Rightarrow F(g\circ f)$ and $1_{F(X)}\Rightarrow F(1_X)$. The two composites of comparison maps on a triple of composable 1-morphisms agree, the identity comparisons satisfy the two unit equations, and all comparisons are natural in 2-morphisms. These requirements apply to the tensor pseudofunctor too, so tensor interchange is retained.

The monoidal structure includes pseudonatural adjoint equivalences $a_{X,Y,Z}:(X\otimes Y)\otimes Z\to X\otimes(Y\otimes Z)$, $l_X:I_{\mathcal A}\otimes X\to X$, and $r_X:X\otimes I_{\mathcal A}\to X$. A pseudonatural transformation has a 1-morphism component at each object and an invertible naturality 2-morphism at each 1-morphism, natural in 2-morphisms and compatible with composition and identities. An adjoint equivalence includes a chosen inverse and invertible unit and counit modifications satisfying the triangle identities. A modification has 2-morphism components whose naturality squares commute. There is an invertible pentagonator modification
$$
\pi_{W,X,Y,Z}:(1_W\otimes a_{X,Y,Z})\circ a_{W,X\otimes Y,Z}\circ(a_{W,X,Y}\otimes1_Z)\Longrightarrow a_{W,X,Y\otimes Z}\circ a_{W\otimes X,Y,Z},
$$
and invertible unit modifications, here written in the equivalent orientations
$$
\lambda_{X,Y}:l_{X\otimes Y}\circ a_{I_{\mathcal A},X,Y}\Longrightarrow l_X\otimes1_Y,\qquad \rho_{X,Y}:r_{X\otimes Y}\Longrightarrow(1_X\otimes r_Y)\circ a_{X,Y,I_{\mathcal A}},
$$
$$
\mu_{X,Y}:(1_X\otimes l_Y)\circ a_{X,I_{\mathcal A},Y}\Longrightarrow r_X\otimes1_Y.
$$
Require the monoidal-bicategory coherence axioms: the two pastings of pentagonators around the five-object associahedron agree; the unit modifications satisfy the triangle and double-unit pasting equations and their compatibility with the pentagonator, with the tensor pseudofunctor comparisons and naturality cells inserted. Equivalently these data, with the underlying 2-category as the single Hom bicategory, form a one-object tricategory. This is the weak monoidal-bicategory convention used by Kong–Tian–Zhou in §2; no associator, unitor, tensor comparison or pentagonator is required to be an identity. In particular the pentagonator is a specified 2-isomorphism between the displayed parallel 1-morphisms, and neither equality of those composites nor an identity 2-morphism is required.

Each of $\mathcal N$, the fixed marked $\mathcal C$, and $\mathcal S$ has this weak tensor structure. Finite semisimplicity, adjoints and separable splittings have exactly the underlying-2-category meanings in the earlier defect-fusion definition: Hom categories are finite semisimple $\mathbb C$-linear categories, all 1-morphisms have both adjoints, finite object direct sums exist, separable monads split, and there are finitely many equivalence classes of simple objects. Each object also has left and right tensor duals, with evaluation, coevaluation and invertible cusp 2-morphisms comparing the two triangle composites to identities; the chosen $a,l,r$ are inserted in those composites. The tensor unit is simple. Thus only the earlier definition's Gray-monoid tensor convention is replaced here. No dagger, positivity, unitarity, or physical realization is implied. A supplied physical realization interprets objects, 1-morphisms and 2-morphisms as surface defects, line junctions and point junctions respectively.

A **linear monoidal 2-functor** in this problem is a linear pseudofunctor $F:\mathcal A\to\mathcal B$ of the underlying 2-categories, with a pseudonatural adjoint equivalence $\chi_{X,Y}:F(X)\otimes F(Y)\to F(X\otimes Y)$ and a unit adjoint equivalence $\iota:I_{\mathcal B}\to F(I_{\mathcal A})$. It includes invertible associativity and left- and right-unit modifications: the associativity modification compares the two composites from $(F(X)\otimes F(Y))\otimes F(Z)$ to $F(X\otimes(Y\otimes Z))$ using $a_{\mathcal B},\chi$ on one route and $\chi,F(a_{\mathcal A})$ on the other. The unit modifications compare $l_{F(X)}$ and $r_{F(X)}$ to the routes using $\iota,\chi,F(l_X),F(r_X)$. Require their four-object pentagonator-compatibility equation and unit-compatibility equations with $\lambda,\rho,\mu$, including every pseudofunctor comparison. These are equalities of 2-morphism pastings; in particular they preserve the possibly nonidentity $\pi$.

A monoidal pseudonatural transformation between these functors has pseudonatural 1-morphism components and invertible modifications comparing $\chi$ and $\iota$ on the two sides, satisfying the associativity and unit compatibility equations. It is an equivalence when its components are equivalence 1-morphisms, with inverse and unit/counit monoidal modifications supplied. Monoidal modifications preserve those tensor and unit comparisons. A monoidal 2-equivalence has an inverse up to these monoidal pseudonatural equivalences and modifications. Use this same weak convention for all center, boundary, interface, transport and endpoint data below; none are replaced by strict models.

Here **all-boson type** means obtainable by the following generalized-gauging construction from finite ordinary group data: choose a finite group $G$, a normalized group 4-cocycle $\omega:G^4\to U(1)$ representing $[\omega]\in H^4(BG;U(1))$, a finite subgroup $H\leq G$, and an oriented bosonic three-dimensional topological theory with specified $H$-symmetry data. The $H$-symmetry data are a homotopy-coherent action of $H$ on its topological defect data by invertible defect functors, including the associated degree-four $U(1)$ anomaly class. Stack the theories and gauge the diagonal $H$ only when the total $H$ anomaly cancels, so summing over diagonal $H$ backgrounds is defined. The complete stacked theory, the cancellation data, and the resulting boundary data are retained, including nonminimal choices and noninvertible phases. A finite group is viewed through its classifying space $BG$, so the stated cohomology is ordinary group cohomology with trivial $U(1)$ coefficients. Each of $\mathcal N,\mathcal C,\mathcal S$ is supplied with a chosen such finite-group presentation, denoted $(G_{\mathcal A},\omega_{\mathcal A})$ together with its full gauging and boundary data; this choice is part of the marking.

For this input, $2\mathrm{Vec}^{\omega}_G$ denotes the $\mathbb C$-linear monoidal 2-category of finite semisimple $G$-graded $\mathbb C$-linear categories, grade-preserving linear functors, and natural transformations. Its tensor product is the graded tensor product: the degree-$g$ summand of $\mathcal A\otimes\mathcal B$ is $\bigoplus_{xy=g}\mathcal A_x\boxtimes\mathcal B_y$, where $\boxtimes$ is the $\mathbb C$-linear Deligne product of finite semisimple categories; its tensor unit is finite-dimensional $\mathbb C$-vector spaces concentrated in the identity grade. Use the canonical tensor comparisons, rebracketing associator and unitors, with their normalized unit modifications. The monoidal pentagonator $\pi$ on four homogeneous grades $g_1,g_2,g_3,g_4$ is multiplied by $\omega(g_1,g_2,g_3,g_4)$; the five-object coherence is exactly
$$
\omega(h,k,l,m)\omega(g,hk,l,m)\omega(g,h,k,lm)=\omega(gh,k,l,m)\omega(g,h,kl,m)\omega(g,h,k,l).
$$
Normalization means $\omega(g,h,k,l)=1$ whenever one argument is the identity, and supplies the unit compatibilities. These are the nonsemistrict models themselves; a nonidentity scalar pentagonator is not removed. A normalized cocycle representative is part of the presentation, while cohomologous representatives are compared only through a specified monoidal 2-equivalence.

Write $Z_2(\mathcal A)$ for the Drinfeld center of a monoidal 2-category $\mathcal A$: an object is an object $X\in\mathcal A$ equipped with a pseudonatural equivalence $X\otimes(-)\simeq(-)\otimes X$ and invertible unit and tensor-compatibility modifications satisfying the weak center pasting axiom (2.1) of Kong–Tian–Zhou, with the associators, tensor comparisons and pentagonators retained, and its unit specialization; 1-morphisms and 2-morphisms preserve that structure by the modification and 2-morphism equations (2.2) and (2.3) of that source. In particular this is its nonsemistrict center, whose coherence depends on $\pi$; it is not the center computed after suppressing $\pi$. It is a braided monoidal 2-category. Distinguish this defect category from the selected oriented $3+1$-dimensional SymTFT, denoted $\mathfrak Z_{\mathcal A}$. The latter is a fully extended oriented 4-dimensional topological field theory; here fully extended means a symmetric monoidal assignment to oriented bordisms with defect strata down to points, with a fixed target higher category and gluing equivalences. Its bulk surface, line, and point defects form the specified braided 2-category $Z_2(\mathcal A)$. For the chosen all-boson presentation, take $\mathfrak Z_{\mathcal A}$ to be the finite-group Dijkgraaf-Witten theory $\mathrm{DW}_4(G_{\mathcal A},\omega_{\mathcal A})$: its fields on a manifold are flat principal finite-$G_{\mathcal A}$ bundles, and a closed oriented 4-manifold with bundle classified by $f:Y\to BG_{\mathcal A}$ has cocycle weight $\langle f^*\omega_{\mathcal A},[Y]\rangle\in U(1)$, with the theory summing over bundles with its fixed gauge-volume normalization. The chosen identification between $Z_2(\mathcal A)$ and these bulk-defect data is part of the marking; no such identification is inferred from an abstract category alone.

A symmetry boundary $B_{\mathcal A}$ is a selected topological boundary condition of $\mathfrak Z_{\mathcal A}$ with its full finite semisimple 2-category of boundary surface, line, and point defects, the action of bulk defects on that 2-category, and all tensor, composition, and junction maps with their weak associativity, unit and pentagonator compatibilities. A topological interface $\mathcal I_{\mathcal A\to\mathcal B}$ is a selected codimension-one wall between $\mathfrak Z_{\mathcal A}$ and $\mathfrak Z_{\mathcal B}$, equivalently a boundary condition for the folded theory $\overline{\mathfrak Z_{\mathcal A}}\otimes\mathfrak Z_{\mathcal B}$, together with its complete finite semisimple defect 2-category, bulk-defect actions, and endpoint data. Here "gapped" means precisely that the selected boundary or wall is topological and has the stated finite semisimple defect data; it asserts no property of a microscopic theory.

For a simple bulk surface sector $x\in Z_2(\mathcal A)$, the bulk action on the boundary data specifies its restriction $x|_{B_{\mathcal A}}$ as a boundary line defect. Let $E_{B_{\mathcal A}}(x)$ be the $\mathbb C$-linear category whose objects are pairs $(\ell,\eta)$ consisting of a boundary line defect $\ell$ and an allowed pointwise junction $\eta:x|_{B_{\mathcal A}}\to\ell$; its morphisms are boundary point junctions intertwining the chosen $\eta$. It is **endable** on that boundary exactly when $E_{B_{\mathcal A}}(x)$ is nonzero, meaning it has a nonzero simple object. Define $E_{\mathcal I}(x)$ on a specified side of an interface in the same way using its wall-defect data. The action of bulk 1-morphisms and 2-morphisms on these endpoint categories, their compositions, and their tensor coherences are part of the data; defect-label lists alone do not define endability. A marked interface includes its defect-transport monoidal 2-functor $T_{\mathcal I}$ between the appropriate bulk defect 2-categories and its induced functors on endpoint categories. It also includes a specified equivalence of the transported source boundary defect data with the target boundary defect data, preserving the actions, endpoint categories, and all their coherence maps.

Fix $\mathcal C$ and its particular boundary realization $B_{\mathcal C}$. Consider marked diagrams $\mathcal N\xrightarrow{I}\mathcal C\xrightarrow{P}\mathcal S$ of the above categories and linear monoidal 2-functors, with chosen boundaries $B_{\mathcal N},B_{\mathcal S}$ and chosen interfaces $\mathcal I_I,\mathcal I_P$ realizing $I,P$. The marking includes the wall-induced transport functors and boundary identifications just defined. Classify the equivalence classes of these diagrams satisfying all three conditions below.

1. For every simple surface sector $x\in Z_2(\mathcal C)$, if $E_{B_{\mathcal C}}(x)$ is nonzero then $E_{\mathcal I_I}(x)$ on the $\mathcal C$ side is nonzero.

2. If a simple sector $x\in Z_2(\mathcal C)$ is endable both on $B_{\mathcal C}$ and on the $\mathcal C$ side of $\mathcal I_P$, then $x$ is equivalent to the tensor unit. By finite semisimplicity, the only objects with endpoints on both are consequently finite direct sums of the vacuum sector.

3. The composite $T_{\mathcal I_P}T_{\mathcal I_I}$ identifies $Z_2(\mathcal N)$ with the full replete additive sub-2-category of $Z_2(\mathcal S)$ generated by the simple surface sectors endable on $B_{\mathcal S}$. This identification is a monoidal 2-equivalence on that subcategory and induces equivalences of the corresponding endpoint categories and their line- and point-junction maps.

The research problem is to prove the coherent categorical form of these conditions, show that it is invariant under the marked equivalence, and determine the intrinsic formulation in monoidal 2-functor language, including which notions of kernel, normality, embedding, dominance, and exactness it actually induces. Do not assume ordinary fusion-category definitions extend unchanged, or that a unique maximal anomaly-free full sub-2-category exists.

An equivalence between two marked diagrams consists of monoidal 2-equivalences of their $\mathcal N$ and $\mathcal S$ entries, the identity on the fixed marked $\mathcal C$ and $B_{\mathcal C}$, monoidal pseudonatural equivalences identifying the two copies of $I$ and $P$, and equivalences of the remaining selected SymTFTs, boundaries, interfaces, and endpoint data. These equivalences must intertwine every bulk-defect action and boundary identification; modifications must preserve all composition and tensor coherences. The classification is not equality merely of fusion rules, abstract defect labels, or endpoint existence predicates.

The source-backed finite-group benchmark, in this same weak convention, is a short exact sequence of finite groups $1\to N\to G\xrightarrow{p}Q=G/N\to1$, with $N$ normal, and a normalized cocycle $\omega:Q^4\to U(1)$. Pullback gives $p^*\omega\in Z^4(G;U(1))$ and the sequence is $2\mathrm{Vec}_N\to2\mathrm{Vec}^{p^*\omega}_G\to2\mathrm{Vec}^{\omega}_Q$ with its associated condensation interface; identify it in the marked-interface formulation above. Explicitly the inclusion extends an $N$-graded category by zero to $G$, while the quotient sends a $G$-graded category $\mathcal A$ to the $Q$-graded category with component $\bigoplus_{p(g)=q}\mathcal A_g$ at $q$. Both act componentwise on functors and natural transformations; their tensor equivalences are the canonical reindexing and distributivity equivalences of finite sums and Deligne products. For the inclusion, $(p^*\omega)(n_1,n_2,n_3,n_4)=\omega(e,e,e,e)=1$; for the quotient, $(p^*\omega)(g_1,g_2,g_3,g_4)=\omega(p(g_1),p(g_2),p(g_3),p(g_4))$. Hence the scalar pentagonators on each homogeneous summand agree under these functors. The remaining comparison pastings are the same canonical reindexings of elementary tensors, so agree on every summand, and normalization gives the unit compatibilities. This specifies their weak monoidal functor data without a strictification step and retains arbitrary normalized $\omega$, including nontrivial cohomology classes. A **finite 2-group** here is a monoidal groupoid with finitely many isomorphism classes of objects and finite automorphism groups, all objects tensor-invertible; equivalently its classifying space is a connected 2-type with finite $\pi_1$, finite abelian $\pi_2$, the $\pi_1$-action on $\pi_2$, and a Postnikov class in $H^3(\pi_1;\pi_2)$. A short exact sequence $1\to\mathbf H\to\mathbf G\xrightarrow{p}\mathbf K\to1$ means a homotopy-fiber sequence $B\mathbf H\to B\mathbf G\to B\mathbf K$, retaining these action and Postnikov data even when nonsplit. For $[\omega]\in H^4(B\mathbf K;U(1))$, determine whether and under what hypotheses the proposed analogue $2\mathrm{Vec}_{\mathbf H}\to2\mathrm{Vec}^{p^*\omega}_{\mathbf G}\to2\mathrm{Vec}^{\omega}_{\mathbf K}$ exists and is exact. The notation $2\mathrm{Vec}^{\omega}_{\mathbf G}$ for a finite 2-group denotes the candidate to be constructed: its objects should be finite semisimple categories graded by the 2-type $B\mathbf G$ with coherent 4-cocycle-twisted monoidal structure. Its precise construction and exactness are open, not prerequisites or assumed results.

Is the complete marked endability and transport invariant above sufficient to classify the interface equivalence classes? If not, exhibit inequivalent finite semisimple marked interfaces with identical proposed invariant and identify the additional junction or coherence datum required. This is not a classification of gapped phases or abstract fusion 2-categories alone, and no finite enumeration of boundary choices is assumed.

As a further compatibility problem, define a categorical background on an oriented 3-manifold by a stratified surface/line/point defect network whose strata are labelled by objects, 1-morphisms, and 2-morphisms of $\mathcal C$ and whose junctions obey the stated composition and tensor coherences. Construct its relative bulk response as the functorial state and junction data of $\mathfrak Z_{\mathcal C}$, including gluing maps, and identify the full sub-2-category generated by tensor-invertible bulk sectors and invertible junctions; call this the invertible subsector. General SymTFTs can be noninvertible and require categorical state and junction spaces, so scalar local variations, line holonomies, and invertible inflow are not asserted to classify the full response. On ordinary backgrounds where the earlier suppliers' hypotheses apply, the invertible restriction should reproduce the background-only finite-jet $H^{1,4}(s\mid d_H)$ class modulo counterterms, the holonomy of the inverse determinant line of a smooth Fredholm chiral Dirac family with its unitary connection around a background loop including its endpoint gauge arrow, and the cancellation of boundary-line holonomy against the dual spin-bulk line respectively. Those earlier interfaces neither construct these oriented $2+1$-dimensional categorical backgrounds nor prove this extension. No classification, physical realization of an arbitrary abstract diagram, or anomaly-matching theorem is asserted here.

## Open problem references

[Antinucci, Copetti, Gai, and Schäfer-Nameki, *Categorical Anomaly Matching*, §IV.A, §VII, and Appendix A.6](https://arxiv.org/pdf/2508.00982)

[Bhardwaj, Pajer, Schäfer-Nameki, Tiwari, Warman, and Wu, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I*, §2.1 and §3.3](https://arxiv.org/pdf/2408.05266)

[Bhardwaj, Schäfer-Nameki, Tiwari, and Warman, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II*, Abstract and §2.1](https://arxiv.org/pdf/2502.20440)

[Inamura, Huang, Tiwari, and Schäfer-Nameki, *Lattice Models and Tensor Networks for Gapped Phases with Categorical Symmetry*, Abstract, Introduction, and §2.1](https://arxiv.org/pdf/2506.09177)

[Robbins and Roy, *SymTFT Actions, Condensable Algebras and Categorical Anomaly Resolutions*, §3.3, §4.3, and §5](https://arxiv.org/pdf/2509.05408)

[Balasubramanian, Buican, Delcamp, and Radhakrishnan, *Gauging Non-Invertible Symmetries in (2+1)d Topological Orders*, Abstract, §§4.2–4.3, and §7](https://arxiv.org/pdf/2507.01142)

[Kong, Tian, and Zhou, *The Center of Monoidal 2-Categories in 3+1D Dijkgraaf-Witten Theory*, §2, equations (2.1)–(2.3), Remark 2.1, and §3](https://arxiv.org/pdf/1905.04644)

[Gurski, *Loop Spaces, and Coherence for Monoidal and Braided Monoidal Bicategories*, §2.4 and §4.1](https://arxiv.org/pdf/1102.0981)

## Status

This is an owner-adopted frontier open problem, with adoption and independent bounded source reading recorded in `research/advanced-qft-supersymmetry-build-2026-10-23-owner-resolution/batch43-root-open-problem-adoption.json`. Adoption approves the precise research question; it does not assert a solution or independent proof acceptance. A bounded source/status review was performed on 2026-10-23. Antinucci et al., Appendix A.6, pp.46–47, explicitly distinguish already classified bosonic fusion 2-categories and SymTFT boundaries from the proposed higher anomaly-matching sequences: they formulate embedding/dominance/exactness through defect endability, give the finite-group example (A.64), propose the finite-2-group analogue (A.66), and identify classification of the higher anomalous symmetry structures as future work. The marked coherent formulation above sharpens that research direction; its full classification or completeness is not claimed to be a published conjecture verbatim.

The present review actually read that appendix through (A.66), Part II's abstract and introduction through §2.1 (PDF1–8), and the lattice paper's introduction and §2.1 (PDF6–11). Part II treats all-boson and emergent-fermion types separately. The lattice paper explicitly allows nonminimal stacked topological theories, multiple symmetry boundaries and infinitely many gapped phases; its construction of all-boson nonchiral gapped phases does not by itself settle the marked anomaly-matching-interface problem. A further bounded convention review on 2026-10-24 read Kong–Tian–Zhou §1, the defining data and center equations (2.1)–(2.3) in §2, Remark 2.1, and the normalized model at the start of §3 including equation (3.2), as well as Gurski’s introductory convention in §2.4 and the free-structure description in §4.1. The explicit weak convention above retains the pentagonator that Remark 2.1 says prevents the displayed twisted model itself being semistrict. It uses no strictification or transport theorem. The Kong–Tian–Zhou paper was also consulted for the definition of $2\mathrm{Vec}^{\omega}_G$ as a twisted $G$-graded finite semisimple 2-category and its center as 3+1d bulk-defect data; no broader source review is claimed. These limits prevent mislabeling ordinary gapped-phase classification as open or claiming invertible lines capture every categorical anomaly. The other listed papers retain the original author's source leads; their full texts were not newly reviewed in this repair.

A current bounded arXiv Atom search for fusion-2-category anomaly, categorical anomaly matching, ASCies, and higher exact-sequence/tensor-2-functor terms found the matching paper and neighboring work, including higher-dimensional and mixed-state results. This is evidence of the review performed, not an exhaustive literature theorem or a proof that no solution exists. Exact queries, retrieval hashes, titles and reading limits are recorded in the accompanying owner-resolution evidence. The root owner adopted this formulation after reading Appendix A.6 through (A.66), the Part II abstract and selected lattice introduction/classification passages. This item is never a logical prerequisite for an established result. Workflow readiness and declared dependency levels are recorded outside this mathematical question.

## Status references

[Córdova, Hsin, and Zhang, *Anomalies of Non-Invertible Symmetries in (3+1)d*, Abstract, Introduction, and §5](https://arxiv.org/pdf/2308.11706)

[Santaniello, Valandro, and Zorzenon, *Non-Invertible SPT Phases from Fusion Rings via Tannaka Duality*, Abstract and §7](https://arxiv.org/pdf/2610.07165)

[Bhardwaj, Pajer, Schäfer-Nameki, Tiwari, Warman, and Wu, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part I*, §§2.1–2.3 and 3.3](https://arxiv.org/pdf/2408.05266)

[Bhardwaj, Schäfer-Nameki, Tiwari, and Warman, *Gapped Phases in (2+1)d with Non-Invertible Symmetries: Part II*, §2 and the S3/D8 examples](https://arxiv.org/pdf/2502.20440)
