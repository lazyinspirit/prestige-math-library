---
id: lem-author-3cde9692a7e9-local-free-test
kind: lemma
title: The stable free-class comparison is locally integrally acyclic
status: published
domain: mathematics
deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-3cde9692a7e9-plus-model-input
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - def-scheme-sites-and-sheafification
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - math:def-tensor-product-total-complex-of-chain-complexes
  - math:thm-kunneth-theorem-for-free-complexes-over-a-pid
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:lem-subgroups-of-z-are-cyclic
  - math:lem-int-cancellation
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-scheme
  - lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity
dependency_roles:
  thm-author-d026a7b99ace-universal-chern-space: mathematical-premise
  thm-author-3cde9692a7e9-plus-model-input: mathematical-premise
  def-nonconnective-k-spectrum-interface: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  def-scheme-sites-and-sheafification: mathematical-premise
  math:def-simplicial-set-homotopy-and-trivial-kan-fibration: mathematical-premise
  math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion: mathematical-premise
  math:def-tensor-product-total-complex-of-chain-complexes: mathematical-premise
  math:thm-kunneth-theorem-for-free-complexes-over-a-pid: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-dimension-noetherian-topological-space: mathematical-premise
  math:lem-subgroups-of-z-are-cyclic: mathematical-premise
  math:lem-int-cancellation: mathematical-premise
  math:thm-noetherian-ring-has-noetherian-spectrum: mathematical-premise
  math:lem-noetherian-open-subsets-are-quasi-compact: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 22
sources:
  references:
    - title: J. F. Jardine, Lectures on Homotopy Theory, Lecture 09
      url: https://www.math.uwo.ca/faculty/jardine/courses/homth/homth-lecture009a.pdf
      locator: Section 26, Theorem 26.1 and its proof opening, printed pp. 23–24 (PDF
        pages 23–24); Moore-complex Alexander–Whitney map (7), printed p. 26
        (PDF page 26)
      statement: For simplicial sets S,T, their free integral Moore complexes admit
        natural chain homotopy inverse maps between C(S×T) and the direct-sum
        total tensor C(S)⊗C(T).
      hypotheses: Arbitrary simplicial sets, integral free abelian chains, ordinary
        Cartesian product and nonnegative Moore complexes; naturality in both
        maps. No connectedness or finite-type hypothesis.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Freshly read the author-hosted PDF web extraction on 2026-11-12: section
        26 opening, Theorem 26.1, its proof and remarks on printed pp. 22–26,
        including formula (7). Import the standard simplicial Eilenberg–Zilber
        comparison explicitly stated in the proof opening. Acyclic-model
        foundations and the subsequent cofibrant-resolution argument were not
        reconstructed. Moore chains are used below; normalization comes from the
        declared library lemma. No independent acceptance is claimed."
    - title: The Stacks Project, Sites and Sheaves, Points
      url: https://stacks.math.columbia.edu/tag/00Y3
      locator: Definitions 7.32.1–7.32.2 and stalk equation (7.32.1.1)
      statement: A topos point has an inverse-image stalk functor; the site
        description computes stalks by the colimit over opposite neighbourhoods
        and requires left exactness at an actual site point.
      hypotheses: A site within the fixed size bounds and an actual point of its
        topos/site, rather than an arbitrary functor to sets.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Freshly read the live primary HTML on 2026-11-12: Definitions
        7.32.1–7.32.2, the neighbourhood description, equation (7.32.1.1), and
        its three point conditions. Use these point/stalk conventions only.
        Existence and conservativity of the Nisnevich local-point family are
        inherited from the declared local K-space model; they are not newly
        proved here."
    - title: The Stacks Project, Modules on Sites, Stalks of modules
      url: https://stacks.math.columbia.edu/tag/04EM
      locator: Lemmas 18.36.1(1)–(3) and 18.36.2(1)–(3), with their displayed proofs
        and intervening abelian-group construction
      statement: At a site point, stalks preserve finite limits and arbitrary colimits
        of (pre)sheaves of sets, are unchanged by sheafification, and give exact
        functors on abelian (pre)sheaves.
      hypotheses: Any site with a specified site point. Apply degreewise to simplicial
        objects and to the integral abelian sheaves in the fixed local model.
      reading_limits: "Historical reading scope retained from the incoming record.
        This maintenance pass checks the current item and supplier interfaces;
        it claims no fresh primary-source reading or independent acceptance.
        Freshly read the live primary HTML on 2026-11-12: Lemmas 18.36.1 and
        18.36.2, their displayed proofs and the intervening abelian-group
        construction. General site foundations in those proofs remain imported.
        Apply only finite-limit and colimit preservation, sheafification
        compatibility and abelian exactness; no infinite-product preservation or
        ordinary/hypercomplete localization identification is asserted."
    - title: R. W. Thomason and Thomas Trobaugh, Higher Algebraic K-Theory of Schemes
        and of Derived Categories (1990)
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Thomason-Trobaugh.pdf
      locator: Appendix E, Lemma E.5(a)–(c) and proof, printed pp. 427–428 (PDF pages
        181–182).
      statement: The small Nisnevich topos of any scheme has conservative points
        indexed by finite separable residue-field extensions. Their
        neighborhoods form filtering systems, and their structure-sheaf stalks
        are the corresponding henselian local rings.
      hypotheses: An arbitrary scheme with its small Nisnevich site. Use affine
        neighborhood refinements within the stipulated size bounds; no dimension
        or Noetherian hypothesis is required for E.5.
      reading_limits: Historical source-reading record retained from the preceding
        maintenance pass; no fresh primary-source retrieval is claimed in this
        pass. Read the live Rochester-hosted primary PDF text extraction on
        2026-11-12 at Lemma E.5(a)–(c), its neighborhood diagram, cofinality
        clause and displayed proof. The cited SGA4 and EGA foundations remain
        imported. E.6 and global hypercohomology comparisons are not used. No
        scan inspection, cached-byte authentication or full-paper reading is
        claimed.
formulation_deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-3cde9692a7e9-plus-model-input
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - def-scheme-sites-and-sheafification
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:def-quasi-compact-and-quasi-separated-scheme
argument_deps:
  - thm-author-d026a7b99ace-universal-chern-space
  - thm-author-3cde9692a7e9-plus-model-input
  - def-nonconnective-k-spectrum-interface
  - math:def-axiom-of-choice
  - def-scheme-sites-and-sheafification
  - math:def-simplicial-set-homotopy-and-trivial-kan-fibration
  - math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - math:def-tensor-product-total-complex-of-chain-complexes
  - math:thm-kunneth-theorem-for-free-complexes-over-a-pid
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-dimension-noetherian-topological-space
  - math:lem-subgroups-of-z-are-cyclic
  - math:lem-int-cancellation
  - math:thm-noetherian-ring-has-noetherian-spectrum
  - math:lem-noetherian-open-subsets-are-quasi-compact
  - math:def-quasi-compact-and-quasi-separated-scheme
  - lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

Fix a noetherian finite-dimensional scheme $X$ over a field and its small Nisnevich site, with the completed local K-space model. Write $\mathcal K=\Omega^\infty K_{\rm Perf}$ and $\mathcal B=BGL=\operatorname{colim}_nBGL_n$. The actual stable free-class construction gives a natural map $j:\underline{\mathbb Z}\times\mathcal B\to\mathcal K$, taking $(m,g)$ to the rank-$m$ translate of the reduced free-bundle class of $g$. It is an integral homology equivalence locally on this site. The product $j\times j$ has the same property. This is a sheaf-local assertion: it is not an assertion that this map is a homology equivalence on every affine ring with nonfree projective classes.

## Facts & Assumptions

[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. They are inherited from [F1]–[F2] at step 1.1 and are also the Choice hypothesis of the Künneth theorem in [F5] at step 2.1. No stronger choice principle is introduced.

[F1] [[thm-author-3cde9692a7e9-plus-model-input]] identifies the canonical free-class map at a Nisnevich local ring $R$ with $\mathbb Z\times BGL(R)\to\mathbb Z\times BGL(R)^+\simeq\Omega^\infty K(R)$. Projectives over $R$ are free and $K_0(R)=\mathbb Z$.

[F2] [[thm-author-d026a7b99ace-universal-chern-space]] supplies the actual coherent Chern construction and the common local replacement of the perfect K-space, using [[def-nonconnective-k-spectrum-interface]]. Here the completed local model in the Statement means that chosen sheaf-local replacement with its actual free-bundle arrow. The formal Gillet completion formula is retained only in the supplier's native small Zariski setting and geometric hypotheses. This small Nisnevich argument uses the separate full affine comparison and its actual local-ring arrows supplied by [[thm-author-3cde9692a7e9-plus-model-input]]; it does not extend that formal completion formula to this site. Its local stalk convention and actual free-object map are those used in [F1]. Direct sum induces K-space addition and restricts coherently to block sum. Here $GL_n$ is the sheaf of invertible $n\times n$ matrices, $BGL_n$ its degreewise classifying nerve, with $q$-simplices $GL_n^q$, and stabilization is $g\mapsto\operatorname{diag}(g,1)$. The colimit defining $BGL$ is the sheaf colimit. The sheaf $\underline{\mathbb Z}$ is the sheafification of the constant integer presheaf, so it records locally constant ranks.

[F3] Use the simplicial-set and degreewise product convention of [[math:def-simplicial-set-homotopy-and-trivial-kan-fibration]]. For a simplicial set $S$, write $C(S)_n=\mathbb Z[S_n]$ with differential $\sum_i(-1)^id_i$ for $n>0$ and zero out of degree zero. Put $N(S)=N(\mathbb Z[S])$, with $N(M)_n=\bigcap_{i<n}\ker d_i$ and differential $(-1)^nd_n$. The natural inclusion $N(S)\to C(S)$ is a chain homotopy equivalence by [[math:lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]. Thus either complex computes integral homology; a quasi-isomorphism means a map inducing isomorphisms on all homology groups. For sheaves use the free abelian sheaf degreewise and the same normalization.

[F4] The site/sheaf conventions are those of [[def-scheme-sites-and-sheafification]]. Use the qcqs presentation of the small Nisnevich site: tests are qcqs étale $X$-schemes, and a covering family has, over each point of its target, a lift with the same residue field. Stalks are the point inverse images $p^*$ of the supplied local model, applied degreewise. The point convention and exact stalk properties are imported in the External input section. In particular $(P\times Q)_p=P_p\times Q_p$ for simplicial sheaves. The stalk of a free abelian sheaf on $P$ is the free abelian group on $P_p$: finite formal sums and their relations commute with this finite-limit- and colimit-preserving functor. Exactness then makes normalization and homology commute with these stalks. Locally integrally acyclic here means that $N(P_p)\to N(Q_p)$ is a quasi-isomorphism at the local points used in [F1]–[F2].

[F5] Over $\mathbb Z$ the PID hypothesis is explicit: an ideal is an additive subgroup, hence is $n\mathbb Z$ by [[math:lem-subgroups-of-z-are-cyclic]], and [[math:lem-int-cancellation]] supplies absence of zero divisors in the nonzero integer ring. Thus $\mathbb Z$ is a domain with every ideal principal. The total tensor of chain complexes is the direct-sum totalization with $d(a\otimes b)=da\otimes b+(-1)^r a\otimes db$ for $a$ of degree $r$, as in [[math:def-tensor-product-total-complex-of-chain-complexes]]. The natural Künneth short exact sequence of [[math:thm-kunneth-theorem-for-free-complexes-over-a-pid]] applies over $\mathbb Z$, under AC, to the nonnegative free complexes $C(S),C(T)$: every total-degree diagonal is finite. Its outer terms are the direct sums of the tensor products of homology groups and of their $\operatorname{Tor}^{\mathbb Z}_1$ groups. The natural simplicial Eilenberg–Zilber comparison imported below identifies the tensor-total homology with $H_*(C(S\times T))$.

[F6] Noetherian scheme has the meaning in [[math:def-locally-noetherian-and-noetherian-scheme]]: a quasi-compact scheme with an affine open cover by spectra of noetherian rings. Finite-dimensional uses the chain convention of [[math:def-dimension-noetherian-topological-space]]: lengths of strict chains of nonempty irreducible closed subsets of the underlying space have a finite upper bound; the empty space has dimension $-\infty$. A field-scheme has its specified structure map to $\operatorname{Spec}k$; the scheme-over-base conventions are included in [[def-scheme-sites-and-sheafification]]. These are formulation restrictions; neither regularity nor global freeness is assumed.

[F7] Under AC, the spectrum of a Noetherian ring is a Noetherian topological space by [[math:thm-noetherian-ring-has-noetherian-spectrum]], and every open subset of a Noetherian space is quasi-compact by [[math:lem-noetherian-open-subsets-are-quasi-compact]]. The qcqs condition means that the scheme is quasi-compact and intersections of affine opens are quasi-compact, as in [[math:def-quasi-compact-and-quasi-separated-scheme]]. These inputs check the domain required by [F1]–[F2]; they require no separatedness hypothesis.

[F8] Reference 3 supplies a conservative family of small Nisnevich points, their filtering étale neighborhoods and their henselian local structure-sheaf stalks. Restrict to affine neighborhoods containing the specified lift; these are cofinal, also after a common refinement or equalization of neighborhood arrows. In the direction of ring maps this gives a small filtered diagram $(A_i)$ with stalk ring $R=\operatorname{colim}_iA_i$. Here filtered means nonempty and every finite diagram admits a cocone. [[lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity]] identifies the filtered colimit of the entire affine perfect K-spaces with $\Omega^\infty K_{\rm Perf}(\operatorname{Spec}R)$, including the actual free-class square and stable nerve. Apply this comparison before the chosen local replacement of [F2]. That replacement has a weak-equivalence unit on these stalks in the stipulated stalkwise convention. Source sheafification leaves the same stalks by reference 2.

## External input
Only the following general premises are imported; the local free-class application is proved here.

Jardine, Lecture 09, §26, Theorem 26.1 and the opening of its proof (printed pp. 23–24), supplies natural chain homotopy inverse maps $C(S\times T)\rightleftarrows C(S)\otimes_{\mathbb Z}C(T)$ for arbitrary simplicial sets $S,T$, using Moore chains and direct-sum totalization. Formula (7) on p. 26 gives the Alexander–Whitney map. This is a simplicial statement, so no singular-chain realization bridge is assumed.

The Stacks Project, Definitions 7.32.1–7.32.2 and equation (7.32.1.1), fixes the point and stalk conventions. Lemmas 18.36.1–18.36.2 supply preservation of finite limits and arbitrary colimits, compatibility with sheafification, and exactness for abelian stalks at every site point. These results apply to the Nisnevich stalks of the supplied model, without extra geometric hypotheses. Exact locators, hypotheses and reading limits are in the three source records.

Reference 3 imports only the conservative Nisnevich-point, neighborhood and local-ring statements in [F8]. The filtered affine K-space comparison is used through [[lem-adjudicate-77833c5b656f-filtered-affine-k-space-continuity]], whose connective continuity and entire-space argument are separate supplied inputs. Their application to this small site is the local argument below.

## Proof
**Given:** The stated scheme/site/model, AC and the existing size bounds, with the conventions and inputs [F1]–[F8].

**Goal:** Identify the precise local acyclic comparison and its product.

1.1 By [F6], choose a finite affine open cover $X=\bigcup_{a=1}^n U_a$ with each $U_a=\operatorname{Spec}A_a$ and $A_a$ Noetherian. For any open $W\subseteq X$, the open $W\cap U_a$ is quasi-compact by [F7]. An open cover of $W$ restricts to one on each of these finitely many opens; combining their finite subcovers gives a finite subcover of $W$. Thus every open of $X$ is quasi-compact, in particular $X$ itself and every intersection of affine opens. For empty $X$, the same conclusion holds with the empty cover. Hence $X$ is qcqs in [F7], discharging the scheme-domain hypothesis of [F1]–[F2]. Construct $j$ using the actual core/free-module map into K, stabilization by a trivial line, and rank translation. Its addition square is the block-sum/direct-sum square of [F2]. Fix a point $p$ in reference 3's conservative family. By [F8], use its cofinal affine étale neighborhoods $V_i=\operatorname{Spec}A_i$, with coordinate rings indexed in the direction of refinement, and put $R=\operatorname{colim}_iA_i$. These are affine qcqs schemes with affine transition maps, and $R$ is the henselian local stalk ring. The continuity supplier in [F8], applied before local replacement, identifies the presheaf stalk K-space and its actual free-class arrow with $\mathbb Z\times BGL(R)\to\Omega^\infty K_{\rm Perf}(\operatorname{Spec}R)$. The sheafification and local-replacement units preserve this stalk arrow up to weak equivalence by [F8]. Now the local-ring assertion [F1] identifies it with the componentwise canonical plus comparison, giving an isomorphism on all integral homology groups. By [F3]–[F4] this is also a quasi-isomorphism on normalized integral chains at those stalks. The sheaf of ranks is the locally constant integer sheaf, not an arbitrary objectwise constant value on disconnected objects. Exactness of the stalk functors in [F4] identifies these homology groups with stalks of the homology sheaves. Conservativity from [F8] therefore gives the local integral homology equivalence on the site. [F1, F2, F3, F4, F6, F7, F8, construct, choose, A1]

2.1 Fix a local point $p$ and put $S=(\underline{\mathbb Z}\times\mathcal B)_p$, $T=\mathcal K_p$ and $f=j_p$. Step 1.1 and [F3] make $C(f)$ a homology isomorphism. Apply [F5]'s natural Künneth short exact sequences to $(C(S),C(S))$ and $(C(T),C(T))$. Their tensor and Tor outer maps are isomorphisms because both maps on homology are isomorphisms. The middle map is therefore an isomorphism: a target middle element can first be lifted at the right end and then corrected by a left-end element; a kernel element lies in the left image and vanishes by injectivity there. Naturality of the imported Eilenberg–Zilber comparison identifies this middle map with $H_*(C(f\times f))$. These are free nonnegative complexes, with at most $n+1$ summands in each total degree $n$, so every Künneth hypothesis, including AC, has been checked. No connectedness restriction is needed, and this includes all rank-component pairs. By [F4], $(j\times j)_p=f\times f$, and by [F3] the homology isomorphism is equivalently one for normalized chains. Hence $j\times j$ is locally integrally acyclic. Nothing asserts that affine global projective classes are all free. [A1, F3, F4, F5, step 1.1] ∎

## Maintenance scope
This maintenance pass read both assigned bodies and compared their uses with the current supplier statements, including the conditional native Gillet clause. The actual affine/free-class comparisons used here are retained by those suppliers. Reference 3 records primary-source reading from an earlier maintenance pass; no fresh external-source retrieval or reconstruction of the continuity helper is claimed here. The Statement and coverage remain unchanged. Derived-chain detection, actual total Cartan and actual-fiber comparison retain the same local comparison, product and addition interface, so no consumer edit is required by this argument repair. Independent rejudgment and central rendering remain controller tasks.
