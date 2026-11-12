---
id: prop-tower-exact-couple-interface
kind: proposition
title: Spectral sequence of a tower
status: published
domain: mathematics
deps:
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - math:def-exact-couple
  - math:def-derived-exact-couple
  - math:def-cohomological-spectral-sequence
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-cochain-map
  - math:thm-abelian-groups-form-an-abelian-category
  - math:thm-an-exact-couple-generates-a-spectral-sequence
  - math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences
dependency_roles:
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-eilenberg-maclane-shift-index: mathematical-premise
  math:def-exact-couple: mathematical-premise
  math:def-derived-exact-couple: mathematical-premise
  math:def-cohomological-spectral-sequence: mathematical-premise
  def-stable-spectra-interface: mathematical-premise
  def-decreasing-filtered-spectrum: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-cochain-complex-in-an-abelian-category: mathematical-premise
  math:def-cohomology-object-of-a-cochain-complex: mathematical-premise
  math:def-cochain-map: mathematical-premise
  math:thm-abelian-groups-form-an-abelian-category: mathematical-premise
  math:thm-an-exact-couple-generates-a-spectral-sequence: mathematical-premise
  math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 6
formulation_deps:
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - math:def-exact-couple
  - math:def-derived-exact-couple
  - math:def-cohomological-spectral-sequence
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-cochain-map
  - math:thm-abelian-groups-form-an-abelian-category
  - math:thm-an-exact-couple-generates-a-spectral-sequence
  - math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences
argument_deps:
  - lem-filtered-stage-exact-sequence
  - lem-eilenberg-maclane-shift-index
  - math:def-exact-couple
  - math:def-derived-exact-couple
  - math:def-cohomological-spectral-sequence
  - def-stable-spectra-interface
  - def-decreasing-filtered-spectrum
  - math:def-axiom-of-choice
  - math:def-cochain-complex-in-an-abelian-category
  - math:def-cohomology-object-of-a-cochain-complex
  - math:def-cochain-map
  - math:thm-abelian-groups-form-an-abelian-category
  - math:thm-an-exact-couple-generates-a-spectral-sequence
  - math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences
---

## Statement
Work in ZFC with the fixed compatible size conventions of the stable spectra and Eilenberg–Mac Lane interfaces. Let $E$ be a spectrum equipped with a coherent decreasing filtration: spectra $F^jE$ and coherent compatible maps $F^{j+1}E\to F^jE\to E$, for all integers $j$. Put $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$ and $F^j\pi_nE=\operatorname{im}(\pi_nF^jE\to\pi_nE)$. The stage sequences form an exact couple and yield a cohomological spectral sequence, indexed from page 2, with

$$E_2^{a,b}=\pi_{-a-b}\operatorname{gr}^{-b}E,\qquad d_s:E_s^{a,b}\longrightarrow E_s^{a+s,b-s+1}\quad(s\ge2).$$

If specified equivalences $\operatorname{gr}^jE\simeq(HC_j)[2j]$ are given for unbounded cochain complexes $C_j$ of abelian groups, then naturally

$$E_2^{a,b}\cong H^{a-b}(C_{-b}).$$

Here $HC_j$ is the Eilenberg–Mac Lane realization of the chain complex with degree-$n$ group $C_j^{-n}$, $[2j]$ is spectral suspension, and $H^q(C_j)$ is cochain cohomology. Naturality in this formula means naturality for cochain maps and maps of filtered spectra compatible with the specified graded equivalences.

Suppose additionally that, for each integer $n$, there are integers $L_n\le U_n$ such that $\pi_nF^jE\to\pi_nE$ is an isomorphism for $j\le L_n$ and $\pi_nF^jE=0$ for $j\ge U_n$. Then every bidegree stabilizes after finitely many pages and there are natural isomorphisms

$$E_\infty^{a,b}\cong F^{-b}\pi_{-a-b}E/F^{-b+1}\pi_{-a-b}E.$$

Thus the spectral sequence converges to $\pi_{-a-b}E$ with its finite image filtration. Here $E_\infty$ denotes the eventual stable page in each bidegree; convergence includes the displayed associated-graded identification, not a canonical splitting of the filtration. The stated boundedness is a sufficient hypothesis; no convergence is asserted from the graded identifications alone.

## Facts & Assumptions

**Given:** ZFC and the fixed compatible size conventions; the coherent tower and compatible maps in the statement; for the indexed cohomology formula, the specified graded equivalences; for convergence, the stated degreewise bounds.

**Goal:** Construct the spectral sequence, calculate its indices, and prove its bounded convergence assertion.

[F1] For every $j,n$, [[lem-filtered-stage-exact-sequence]] gives the natural long exact sequence containing $\pi_nF^{j+1}E\to\pi_nF^jE\to\pi_n\operatorname{gr}^jE\to\pi_{n-1}F^{j+1}E$.

[F2] [[math:def-exact-couple]] specifies the initial homological exact-couple degrees, and [[math:def-derived-exact-couple]] defines the derived maps and homology quotients. [[math:thm-an-exact-couple-generates-a-spectral-sequence]] proves repeated derivation is possible, gives the differential degrees and page transitions, and identifies each page with its explicit cycle/boundary subquotient. [[math:def-cohomological-spectral-sequence]] specifies the cohomological differential degrees and page-to-page homology requirement.

[F3] For an unbounded cochain complex $C_j$ of abelian groups and under a specified equivalence $\operatorname{gr}^jE\simeq(HC_j)[2j]$, [[lem-eilenberg-maclane-shift-index]] gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)$.

[F4] [[def-stable-spectra-interface]] supplies spectra, coherent diagrams, cofibers, integer spectral shifts, equivalences and functorial abelian homotopy groups. [[def-decreasing-filtered-spectrum]] supplies the coherent decreasing augmented tower and its graded spectra and image filtration.

[F5] [[math:def-cochain-complex-in-an-abelian-category]], [[math:def-cohomology-object-of-a-cochain-complex]] and [[math:def-cochain-map]] specify complexes, their cohomology and their maps, here in abelian groups. [[math:thm-abelian-groups-form-an-abelian-category]] permits applying the categorical exact-couple and cochain interfaces to these groups.

[F6] [[math:prop-a-map-of-exact-couples-induces-a-map-of-spectral-sequences]] gives functorial maps of derived couples and pages from maps of initial exact couples.

[A1] Assume [[math:def-axiom-of-choice]] as part of ZFC, with the same fixed size conventions as [F3] and [F4]. These hypotheses are retained when invoking their spectral foundations and Eilenberg–Mac Lane realization; the finite group calculations below make no additional simultaneous choices of representatives.

## Proof

1.1 Set $D^1_{p,q}=\pi_{p+q}F^{-p}E$ and $E^1_{p,q}=\pi_{p+q}\operatorname{gr}^{-p}E$. Let $i$ be induced by $F^{-p}E\to F^{-p-1}E$, let $j$ be the stage projection, and let $k$ be the connecting homomorphism. Their respective degrees are $(1,-1)$, $(0,0)$ and $(-1,0)$. Under [A1], the operations in [F4] and the long exact sequences in [F1] give these maps. Exactness at all three vertices follows from [F1], so in the abelian category of [F5] they form an initial exact couple. [A1, F1, F2, F4, F5, construct]

2.1 Derive the couple repeatedly. At homological page $r\ge1$, its differential $d_r=jk$ has degree $(-r,r-1)$, squares to zero, and its homology is the next page. Define $E_s^{a,b}=E^{s-1}_{b,-a-2b}$ for $s\ge2$. A homological differential with $r=s-1$ changes $(b,-a-2b)$ to $(b-r,-a-2b+r-1)$, corresponding to $(a+s,b-s+1)$. Hence these reindexed pages satisfy the cohomological spectral-sequence convention. At $s=2$, their total homotopy degree is $b+(-a-2b)=-a-b$ and their filtration index is $-b$, proving the first displayed formula. Maps of coherent filtered spectra give maps of these exact couples by [F1] and [F4]; [F6] makes the reindexed pages and their differentials functorial. [F1, F2, F4, F6, step 1.1, algebra]

3.1 With $j=-b$ and $n=-a-b$, [F3] gives $\pi_n\operatorname{gr}^jE\cong H^{2j-n}(C_j)=H^{a-b}(C_{-b})$. This proves the second displayed formula and its naturality for maps preserving the given graded equivalences. [A1, F3, F5, F6, step 2.1, algebra]

3.2 Fix $j,n$. Write $G_n^h=\pi_nF^hE$, $Q_n^j=\pi_n\operatorname{gr}^jE$, $P_j:G_n^j\to Q_n^j$ for the projection, $\delta_j:Q_n^j\to G_{n-1}^{j+1}$ for its connecting map, and $q_j:G_n^j\to\pi_nE$ for the augmentation. By the explicit subquotient formulas in [F2], the homological page-$r$ term of step 1.1 at $(p,q)=(-j,n+j)$ is $N_r/B_r$, where $N_r=\delta_j^{-1}(\operatorname{im}(G_{n-1}^{j+r}\to G_{n-1}^{j+1}))$ and $B_r=P_j(\ker(G_n^j\to G_n^{j-r+1}))$. These formulas express exactly the repeated lifting and boundary tests: surviving representatives have connecting images liftable to stage $j+r$, and the boundaries are projections of elements killed at stage $j-r+1$. At $r=1$ they give $N_1=Q_n^j$ and $B_1=0$. The canonical homology transitions are induced by the nested numerators and denominators in [F2]. [F1, F2, step 1.1, step 2.1]

4.1 Under the stated degreewise bounds, choose $r$ large enough that $j+r\geq U_{n-1}$ and $\ell=j-r+1\leq L_n$. The high-stage group $G_{n-1}^{j+r}$ is zero, so $N_r=\ker\delta_j=\operatorname{im}P_j$ by exactness. The map $q_\ell:G_n^\ell\to\pi_nE$ is an isomorphism and $q_j=q_\ell\circ(G_n^j\to G_n^\ell)$; hence $\ker(G_n^j\to G_n^\ell)=\ker q_j$. Thus $B_r=P_j(\ker q_j)$. These equalities hold for every larger $r$, so the canonical page transitions stabilize at $\operatorname{im}P_j/P_j(\ker q_j)$. They also make all subsequent outgoing and incoming differentials zero: in the subquotient description a differential has lift formula $[e]\mapsto[P_h x]$ when $\delta e$ is the requisite transition image of $x$; if $e\in\ker\delta$, choose $x=0$, while the incoming image is $B_{r+1}/B_r=0$. [given, F1, F2, step 3.2]

5.1 The map $G_n^j\to\operatorname{im}P_j/P_j(\ker q_j)$ is onto and has kernel $\ker P_j+\ker q_j$. Exactness gives $\ker P_j=\operatorname{im}(G_n^{j+1}\to G_n^j)$; its image under $q_j$ is precisely $F^{j+1}\pi_nE$. Consequently $q_j$ induces an isomorphism from $\operatorname{im}P_j/P_j(\ker q_j)$ to $F^j\pi_nE/F^{j+1}\pi_nE$. The maps are canonical and natural by the functorial stage exact sequences, images and quotients, and [F6]. Finally $F^j\pi_nE=\pi_nE$ for $j\leq L_n$ and $F^j\pi_nE=0$ for $j\geq U_n$, so this filtration is finite. Step 4.1 proves finite stabilization in each bidegree, and substitution of $j=-b$ and $n=-a-b$, with $s=r+1$ as in step 2.1, gives the asserted associated-graded formula and convergence without a splitting. [given, F1, F6, step 2.1, step 4.1] ∎
