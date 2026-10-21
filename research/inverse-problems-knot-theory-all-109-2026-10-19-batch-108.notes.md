# Batch 108 authoring notes — KT-53

Run: inverse-problems-knot-theory-all-109-2026-10-19
Pair: milnor-invariants-and-link-peripheral-nilpotent-quotients
Role: beta, batch-108
Scheduling input: 68252736dd60dac548ab9afca4cb887fa52a5673e9e4fa8529c113aa43f6a51b
Batch dependency level: 2; prerequisite batches: 56, 57, 58, 64.

## Authority, scope, and live run

- Read CLAUDE.md, README.md, SCHEMA.md, WORKFLOW.md, briefs/beta-scaffold.md, both assigned batch tasks, the owner authoring direction, research/plan-knot-theory-track.md at the assigned KT-53 locations, and research/plan-spec.json. The owner direction controls statement, proof, page, and status policy.
- KT-53 at research/plan-knot-theory-track.md lines 1595–1611 is the controlling design section. Both task pointers (1595 and 1597) resolve to this section. It specifies based string-link peripheral systems, finite lower-central quotients and Magnus coefficients, closed-link gcd residues, basing/self-crossing obligations, the bounded diagram algorithm, and the Borromean and pairwise-linking examples.
- plan-spec matches both page IDs, titles, companions, category, order, and the four A-page requirements. Its item arrays are empty, so it defines no competing item inventory. No plan/design claim conflict was found. The new group-homology bridge and link-level crossing/height suppliers fill prerequisites required to prove KT-53 claims locally; they do not replace or weaken the planned Milnor claims.
- Page inventories are 25 A items and 2 B items (27 total, under the 100-item cap). Both library page carriers remain YAML-frontmatter only; their Markdown bodies are empty and no summary was added.
- Recomputed live status with the autopilot driver: run running at 1-scaffold, 53/109 pairs covered, no worker in flight; 56 pairs remain and missing pair labels include 6, 20, 21, 23, 24, 27, 28, 29 +48. The existing owner repair/recertification blocker remains. No engine state, shared plan, verdict, published content, or owner receipt was edited.
- Targeted git log for the current batch-56 Wirtinger supplier carriers returned no committed entries; the supplier assessment therefore uses their current on-disk bodies, current batch-56 notes, and the recomputed live autopilot status rather than a historical handoff claim.

## Item claims, dependencies, and contract disposition

Dependency levels are computed from in-run item edges across parseable run manifests, not only batch 108. The excerpt below is copied from each current carrier statement; the complete statement and proof remain in that item file. Direct deps are the exact item-manifest edges. Contract disposition is authoring evidence, not independent review or final Step 1 readiness.

### thm-homological-lhs-spectral-sequence-for-group-extensions — level 0; complete-local-proof

Claim excerpt: Assume the Axiom of Choice. For every short exact sequence of discrete groups $$ 1\longrightarrow N\longrightarrow G\longrightarrow Q\longrightarrow 1, $$ the homological Serre spectral sequence of the induced map of classifying spaces has $$ E^2_{p,q}\cong H_p\!\left(Q;H_q(N;\mathbb Z)\right) \quad\Longrightarrow\q…

Direct dependencies: def-axiom-of-choice, def-dependent-choice, cor-classifying-space-of-a-discrete-group-is-a-k-g-one, thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-homological-serre-spectral-sequence, lem-diagonal-bar-coinvariants-compute-group-homology

### lem-h2-classifying-map-is-surjective — level 0; complete-local-proof

Claim excerpt: Assume AC. Let $X$ be a path-connected CW complex and let $G=\pi_1(X,x_0)$. For any based classifying map $c:X\to BG$ inducing the identity on fundamental groups, the induced homomorphism $$ c_*:H_2(X;\mathbb Z)\longrightarrow H_2(BG;\mathbb Z)=H_2(G;\mathbb Z) $$ is surjective.

Direct dependencies: def-axiom-of-choice, def-dependent-choice, cor-classifying-space-of-a-discrete-group-is-a-k-g-one, thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-homological-serre-spectral-sequence, thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, lem-diagonal-bar-coinvariants-compute-group-homology

### thm-five-term-homology-sequence-for-group-extensions — level 1; complete-local-proof

Claim excerpt: Assume AC. For every group extension $$ 1\longrightarrow N\longrightarrow G\longrightarrow Q\longrightarrow 1, $$ the maps induced by inclusion, quotient, and transgression form an exact sequence $$ H_2(G;\mathbb Z)\longrightarrow H_2(Q;\mathbb Z) \longrightarrow N/[G,N]\longrightarrow H_1(G;\mathbb Z) \longrightarr…

Direct dependencies: def-axiom-of-choice, def-dependent-choice, thm-homological-lhs-spectral-sequence-for-group-extensions, thm-five-term-exact-sequence-of-a-first-quadrant-homological-spectral-sequence, lem-diagonal-bar-coinvariants-compute-group-homology

### def-based-string-link-and-labeled-link-peripheral-system — level 2; complete-local-proof

Claim excerpt: 

Direct dependencies: def-oriented-link-in-s-three-and-ambient-isotopy, def-knot-exterior, def-knot-meridian-and-preferred-longitude

### thm-stallings-integral-lower-central-isomorphism — level 2; complete-local-proof

Claim excerpt: Assume AC. Let $\phi:A\to B$ be a group homomorphism inducing an isomorphism $H_1(A;\mathbb Z)\to H_1(B;\mathbb Z)$ and an epimorphism $H_2(A;\mathbb Z)\to H_2(B;\mathbb Z)$. For a group $X$, define $\Gamma_1X=X$ and $\Gamma_{n+1}X=[X,\Gamma_nX]$. Then for every finite $n\ge1$, the induced homomorphism $$ A/\Gamma_n…

Direct dependencies: def-axiom-of-choice, def-dependent-choice, thm-five-term-homology-sequence-for-group-extensions, lem-diagonal-bar-coinvariants-compute-group-homology

### def-lower-central-series-and-magnus-expansion-for-links — level 3; complete-local-proof

Claim excerpt: 

Direct dependencies: def-based-string-link-and-labeled-link-peripheral-system, def-free-group

### lem-string-link-exterior-homology-and-meridian-maps — level 3; complete-local-proof

Claim excerpt: Use integral homology. Let $L=K_1\cup\cdots\cup K_r$ be a nonempty labeled oriented smooth link in $S^3$ with chosen pairwise disjoint product tubes and exterior $E_L$. Then $H_1(E_L;\mathbb Z)\cong\mathbb Z^r$, with the positive meridians as its ordered basis. Each boundary torus $T_i$ has a product basis consistin…

Direct dependencies: def-based-string-link-and-labeled-link-peripheral-system, def-knot-exterior, def-knot-meridian-and-preferred-longitude, thm-excision-for-singular-homology, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-homology-of-spheres, cor-homotopic-maps-induce-the-same-map-on-singular-homology, def-singular-chain-complex-and-singular-homology, thm-cellular-homology-computes-singular-homology, thm-fundamental-group-of-finite-wedge-of-circles

### lem-regular-link-diagram-admits-normalized-height-realization — level 0; complete-local-proof

Claim excerpt: Assume countable choice. Let $D$ be a finite regular oriented diagram of a nonempty labeled smooth link $L ubset\mathbb R^3$, and assume every component has at least one underpassing point. Then $L$ is ambient isotopic through links with the same projection and crossing data to a smooth height realization $$ \wideha…

Direct dependencies: def-countable-choice, def-regular-oriented-link-diagram, lem-a-smooth-isotopy-of-compact-embedded-submanifolds-extends-to-an-ambient-isotopy

### lem-link-wirtinger-crossing-ball-cover — level 3; complete-local-proof

Claim excerpt: Let $D$ be a finite regular oriented diagram of a nonempty labeled link, with $n\geq1$ crossings and at least one underpassing point on each component. Fix a smooth height realization $L_D=\{(\gamma(s),\eta(s))\} ubset\mathbb R^2\times[-1,0]$ such that $\eta(s)=-1$ exactly at the $n$ underpassing points and $\eta(s)…

Direct dependencies: def-based-string-link-and-labeled-link-peripheral-system, def-regular-oriented-link-diagram, thm-seifert-van-kampen

### lem-simply-connected-hypersurface-complement-adds-free-generator — level 0; complete-local-proof

Claim excerpt: Let $M$ be a connected smooth $3$-manifold without boundary, and let $S ubset M$ be a nonempty closed connected smooth embedded surface with $\pi_1(S)=1$. Suppose there is an open neighborhood $N$ of $S$ such that $N$ is path-connected and simply connected, and $N etminus S$ has exactly two path-connected simply con…

Direct dependencies: thm-seifert-van-kampen

### lem-magnus-commutator-degree-and-truncation — level 4; complete-local-proof

Claim excerpt: Let $F_r$ be the free group and $E$ the Magnus expansion from the preceding definition, with augmentation ideal $\mathfrak m$. If $u\in\Gamma_pF_r$ and $v\in\Gamma_qF_r$ for $p,q\ge1$, then $$ E([u,v])\in 1+\mathfrak m^{p+q}. $$ Consequently $E(\Gamma_qF_r) ubseteq1+\mathfrak m^q$ for every $q\ge1$. In particular, r…

Direct dependencies: def-lower-central-series-and-magnus-expansion-for-links

### thm-link-wirtinger-presentation-correctness — level 5; complete-local-proof

Claim excerpt: Assume countable choice.

Let $D$ be a finite regular oriented diagram of a nonempty labeled link, after
inserting a small type-I curl on any component that has no underpassing point.
Let $x_1,\ldots,x_n$ be the positive meridians of the strands between
successive underpassing points. At a crossing $c$, write $o(c)$…

Direct dependencies: def-countable-choice, lem-regular-link-diagram-admits-normalized-height-realization, lem-link-wirtinger-crossing-ball-cover, lem-link-diagram-upper-region-free-meridians, lem-link-wirtinger-local-meridian-conjugacy, thm-seifert-van-kampen, thm-group-pushout-as-an-amalgamated-quotient, def-group-presentation, def-free-group

### lem-classifying-maps-are-natural-under-group-homomorphisms — level 0; complete-local-proof

Claim excerpt: Assume AC. Let $f:(X,x_0)\to(Y,y_0)$ be a based map of path-connected CW complexes, let $G=\pi_1(X,x_0)$ and $H=\pi_1(Y,y_0)$, and put $\phi=f_*:G\to H$. Let $c_X:X\to BG$ and $c_Y:Y\to BH$ be based classifying maps inducing the identity on the identified fundamental groups. There is a based map $B\phi:BG\to BH$ ind…

Direct dependencies: def-axiom-of-choice, cor-classifying-space-of-a-discrete-group-is-a-k-g-one, thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces, cor-homotopic-maps-induce-the-same-map-on-singular-homology

### thm-string-link-nilpotent-peripheral-identifications — level 4; complete-local-proof

Claim excerpt: Assume AC. Let $\tau$ be an $r$-component based string link with $r\geq1$, exterior $X_\tau$, and endpoint punctured disks $P_-,P_+$. Use the positive endpoint meridians to identify $\pi_1(P_-)$ and $\pi_1(P_+)$ with the free group $F_r=\langle x_1,\ldots,x_r\rangle$, and let $\iota_\pm:\pi_1(P_\pm)\to\pi_1(X_\tau)$…

Direct dependencies: def-axiom-of-choice, def-dependent-choice, thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations, def-based-string-link-and-labeled-link-peripheral-system, def-lower-central-series-and-magnus-expansion-for-links, lem-string-link-exterior-homology-and-meridian-maps, lem-h2-classifying-map-is-surjective, lem-classifying-maps-are-natural-under-group-homomorphisms, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, thm-stallings-integral-lower-central-isomorphism

### lem-magnus-conjugation-coefficients-use-shorter-subwords — level 4; complete-local-proof

Claim excerpt: Let $F_r$ be the free group with Magnus expansion $E$, let $u,\lambda\in F_r$, and let $w$ be a nonempty word of length $m$. The coefficient of $X_w$ in $E(u^{-1}\lambda u)-E(\lambda)$ is an integer linear combination of coefficients of $E(\lambda)$ on proper contiguous subwords of $w$. Thus, when $w$ is the prefix …

Direct dependencies: def-lower-central-series-and-magnus-expansion-for-links

### lem-milnor-basing-indeterminacy-and-self-crossing-scope — level 6; owner-escalation

Claim excerpt: Assume AC. Let $L$ be a nonempty labeled oriented link in $S^3$, let $I=(i_1,\ldots,i_k,j)$ have length at least two, and let $b,b'$ be any two based meridian-longitude word systems used in the preceding definition. Then the based residue candidates $\bar\mu_L^b(I)$ and $\bar\mu_L^{b'}(I)$ agree under the canonical …

Direct dependencies: def-axiom-of-choice, def-based-string-link-and-labeled-link-peripheral-system, def-lower-central-series-and-magnus-expansion-for-links, def-milnor-integer-and-residue-invariants, lem-magnus-commutator-degree-and-truncation, lem-magnus-conjugation-coefficients-use-shorter-subwords, lem-link-nilpotent-quotient-generated-by-component-meridians, lem-link-wirtinger-local-meridian-conjugacy, thm-link-wirtinger-presentation-correctness, thm-string-link-nilpotent-peripheral-identifications

### lem-link-nilpotent-quotient-generated-by-component-meridians — level 4; complete-local-proof

Claim excerpt: Let $L=K_1\cup\cdots\cup K_r$ be a nonempty labeled oriented link in $S^3$, let $G=\pi_1(E_L)$, and choose one based positive meridian $m_i\in G$ for each component. For every integer $q\geq1$, the homomorphism from the free group $F_r=\langle x_1,\ldots,x_r\rangle$ defined by $x_i\mapsto m_i$ induces a surjection $…

Direct dependencies: def-based-string-link-and-labeled-link-peripheral-system, def-free-group, def-lower-central-series-and-magnus-expansion-for-links, lem-string-link-exterior-homology-and-meridian-maps, prop-the-first-hurewicz-map-in-degree-one-is-abelianization, lem-hall-malcev-lower-central-commutators-add-weights

### def-milnor-integer-and-residue-invariants — level 5; complete-local-proof

Claim excerpt: 

Direct dependencies: def-axiom-of-choice, def-based-string-link-and-labeled-link-peripheral-system, def-lower-central-series-and-magnus-expansion-for-links, lem-magnus-commutator-degree-and-truncation, lem-string-link-exterior-homology-and-meridian-maps, lem-link-nilpotent-quotient-generated-by-component-meridians, thm-string-link-nilpotent-peripheral-identifications

### thm-milnor-invariants-isotopy-and-link-homotopy-scope — level 7; owner-escalation

Claim excerpt: Assume AC. Every integer Milnor coefficient of a based string link is invariant under smooth isotopy through string links fixing the endpoint collars. For closed labeled oriented links, the residue candidate $\bar\mu_L(I)$ is invariant under ambient isotopy. A link-homotopy is a finite sequence of ambient isotopies …

Direct dependencies: def-axiom-of-choice, def-oriented-link-in-s-three-and-ambient-isotopy, def-based-string-link-and-labeled-link-peripheral-system, def-milnor-integer-and-residue-invariants, lem-milnor-basing-indeterminacy-and-self-crossing-scope, thm-string-link-nilpotent-peripheral-identifications

### def-topological-linking-number-by-meridian-coordinate — level 4; complete-local-proof

Claim excerpt: 

Direct dependencies: def-oriented-link-in-s-three-and-ambient-isotopy, def-knot-exterior, lem-string-link-exterior-homology-and-meridian-maps

### lem-link-peripheral-longitude-word-from-diagram — level 7; complete-local-proof

Claim excerpt: Let the diagram be either a based regular string-link diagram in $D^2\times[0,1]$ or a finite regular oriented diagram of a nonempty labeled closed link. In string-link mode, choose the product-tube parallel to be the blackboard push-off determined by the projected tangent, carried through the fixed endpoint collars…

Direct dependencies: def-based-string-link-and-labeled-link-peripheral-system, def-regular-oriented-link-diagram, def-oriented-crossing-sign-writhe-and-blackboard-framing, def-framed-knot-self-linking-and-seifert-framing, def-topological-linking-number-by-meridian-coordinate, lem-link-wirtinger-local-meridian-conjugacy, lem-string-link-exterior-homology-and-meridian-maps, thm-blackboard-framing-self-linking-is-writhe

### alg-truncated-milnor-invariants-from-based-diagram — level 8; complete-local-proof

Claim excerpt: 

Direct dependencies: def-axiom-of-choice, def-dependent-choice, def-countable-choice, thm-choice-implies-dependent-implies-countable-choice, def-based-string-link-and-labeled-link-peripheral-system, def-lower-central-series-and-magnus-expansion-for-links, def-milnor-integer-and-residue-invariants, lem-magnus-commutator-degree-and-truncation, lem-link-nilpotent-quotient-generated-by-component-meridians, lem-link-peripheral-longitude-word-from-diagram, def-regular-oriented-link-diagram, def-oriented-crossing-sign-writhe-and-blackboard-framing, lem-link-wirtinger-local-meridian-conjugacy, thm-link-wirtinger-presentation-correctness, thm-string-link-nilpotent-peripheral-identifications

### thm-truncated-milnor-computation-terminates-and-is-correct — level 9; complete-local-proof

Claim excerpt: Assume AC and let the based diagram, peripheral data, and maximum index length $N\geq2$ satisfy the input conditions of the preceding algorithm. Put $d=N-1$. The algorithm terminates after finitely many diagram, degree, and monomial operations. In string-link mode, its output for each $I$ with $2\leq|I|\leq N$ equal…

Direct dependencies: def-axiom-of-choice, alg-truncated-milnor-invariants-from-based-diagram, def-lower-central-series-and-magnus-expansion-for-links, def-milnor-integer-and-residue-invariants, lem-magnus-commutator-degree-and-truncation, lem-link-nilpotent-quotient-generated-by-component-meridians, lem-link-peripheral-longitude-word-from-diagram, lem-link-wirtinger-local-meridian-conjugacy, thm-link-wirtinger-presentation-correctness, thm-string-link-nilpotent-peripheral-identifications

### lem-link-diagram-upper-region-free-meridians — level 4; complete-local-proof

Claim excerpt: Assume countable choice.

Let $D$ be a finite regular oriented diagram of a nonempty labeled link with
$n\geq1$ crossings. Fix a smooth height realization
$L_D=\{(\gamma(s),\eta(s))\} ubset\mathbb R^2\times[-1,0]$ such that
$\eta(s)=-1$ exactly at the $n$ underpassing points and $\eta(s)>-1$
elsewhere, and assume ea…

Direct dependencies: def-countable-choice, lem-link-wirtinger-crossing-ball-cover, thm-tubular-neighbourhood-theorem-in-a-smooth-ambient-manifold, lem-simply-connected-hypersurface-complement-adds-free-generator, def-based-string-link-and-labeled-link-peripheral-system, thm-seifert-van-kampen

### lem-link-wirtinger-local-meridian-conjugacy — level 4; complete-local-proof

Claim excerpt: At an oriented crossing let $o$ be the over-strand. Orient the projection plane by the rule that $(v_1,v_2)$ is a positive basis exactly when the ordered triple $(n,v_1,v_2)$ is positive in the ambient three-space, where $n$ is the viewing normal. Let $n_o$ be the positive in-plane normal characterized by the condit…

Direct dependencies: lem-link-wirtinger-crossing-ball-cover, def-regular-oriented-link-diagram, def-oriented-link-in-s-three-and-ambient-isotopy, def-based-string-link-and-labeled-link-peripheral-system

### ex-borromean-link-milnor-triple-invariant — level 8; complete-local-proof

Claim excerpt: 

Direct dependencies: def-axiom-of-choice, def-based-string-link-and-labeled-link-peripheral-system, def-lower-central-series-and-magnus-expansion-for-links, def-milnor-integer-and-residue-invariants, lem-magnus-commutator-degree-and-truncation, lem-link-peripheral-longitude-word-from-diagram, lem-link-wirtinger-local-meridian-conjugacy, thm-string-link-nilpotent-peripheral-identifications, def-oriented-crossing-sign-writhe-and-blackboard-framing, alg-oriented-linking-number-from-diagram, thm-oriented-linking-number-scan-terminates-and-is-correct

### cex-pairwise-linking-does-not-classify-links — level 9; owner-escalation

Claim excerpt: 

Direct dependencies: def-axiom-of-choice, def-based-string-link-and-labeled-link-peripheral-system, ex-borromean-link-milnor-triple-invariant, thm-milnor-invariants-isotopy-and-link-homotopy-scope, alg-oriented-linking-number-from-diagram, thm-oriented-linking-number-scan-terminates-and-is-correct

## Local proof structure and axiom branches

- The A-page includes separate local suppliers for the homological LHS spectral sequence, H2 classifying-map epimorphism, five-term extension sequence, integral Stallings induction, string-link exterior homology, Magnus degree filtration, normalized diagram heights, the link-level crossing-ball cover, the simply connected sheet-cut step, upper-region meridian basis, local crossing conjugacy, and diagram longitude words. Each is an A-page item with declared deps and a complete local proof argument.
- Full AC is declared where the classifying-space/group-homology, nilpotent quotient, and Milnor branches require it. DC and ACω are recorded separately with their stated implications; the diagram-height/tubular-neighborhood branch uses ACω. Relative product-tube homology, finite Magnus algebra, and the explicit Borromean coefficient calculation add no unlisted choice axiom. Axiom facts and their uses are enumerated in the proof contracts.

## Cross-batch suppliers and decisions

- The cross-batch evidence file has 20 rows: 4 page prerequisites and 16 item edges. Direct item edges into batches 57 and 58 are covered; the two direct regular-diagram-definition edges have verified evidence.
- Actual batch-57 exterior, meridian/preferred-longitude, and homology carriers and proofs were read; their conventions are used componentwise. Actual batch-58 sign, framing, linking scan, and correctness carriers were read; determinant sign and half-sum conventions are retained. Batch 64 maximal-abelian-cover definition and notes were read; it is verified-context because local relative product-tube homology proves the needed facts directly.
- The page prerequisite wirtinger-presentations-and-knot-groups remains owner-escalated. Current batch-56 notes and actual knot-specific cover/local-relation/presentation carriers were checked: the knot-specific crossing-cover and dependent items still carry escalations for their own cover and basing proof. Batch 108 supplies an independent link-level cover and crossing relation on its A page; no batch-56 file was edited. The page-level requirement remains recorded as escalation pending owner reconciliation.
- Direct cross-pair work continued through the full assigned inventory. No cycles were found in the batch-108 graph. The malformed or duplicate run-wide inputs listed under checks below were left untouched because they are outside this assignment.

## Source reading and harvested-result dispositions

- John Milnor, Link Groups — https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf; locator: Complete 20-page paper, §§1–7, printed pp. 177–195 (PDF pp. 1–20). The local claims below are convention checks and scope comparisons; the batch supplies its own proofs.; supported items: def-based-string-link-and-labeled-link-peripheral-system, lem-milnor-basing-indeterminacy-and-self-crossing-scope, lem-link-nilpotent-quotient-generated-by-component-meridians, ex-borromean-link-milnor-triple-invariant, def-milnor-integer-and-residue-invariants.
  - §1 Summary: link homotopy and the link-group purpose: inline for def-based-string-link-and-labeled-link-peripheral-system — The local definition states the based string-link and labeled-link conventions; Milnor’s summary is used as context, not as a substitute for those definitions.
  - §2 Basic theorems: link group, homotopy invariance, meridian and parallel pairs: included for lem-milnor-basing-indeterminacy-and-self-crossing-scope — The source gives the classical scope and meridian/parallel terminology; the harder based-change and self-crossing coefficient steps remain explicitly escalated in the local item.
  - §2 Lemma 4: meridians normally generate the deleted-component kernel: inline for lem-link-nilpotent-quotient-generated-by-component-meridians — The component-meridian generation result is proved locally from exterior H1 and lower-central commutator weights; Milnor’s normal-generation lemma is a convention and context check.
  - §3 Theorem 4 and its parallel-link example: out-of-scope — This section treats a special triviality criterion for links built from parallel components; that separate criterion is outside the finite Milnor coefficient and peripheral quotient scope of this pair.
  - §4 Trivial links: group-ring word problem and decision procedure: out-of-scope — The word-problem procedure for trivial links is not required for the local finite Magnus expansion or the bounded based-diagram algorithm authored here.
  - §5 Almost trivial links: higher linking coefficients and the three-component example: included for ex-borromean-link-milnor-triple-invariant — The Borromean coefficient is recomputed from the declared braid diagram and finite Magnus multiplication; the source example is a comparison check only.
  - §6 Arbitrary links in Euclidean space: link-group presentation and residue indeterminacy: included for def-milnor-integer-and-residue-invariants — The local definition states its finite based lifts and gcd convention explicitly; the source’s residue discussion is used to compare conventions, not to prove lift independence.
  - §7 Arbitrary manifolds: link structures over nontrivial ambient fundamental groups: out-of-scope — The assigned pages concern classical labeled links in S3 and based string links in a cylinder; ambient-manifold generalizations are explicitly outside this scope.
- Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds — https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content; locator: §2.5, printed pp. 16–18 (PDF pp. 24–26), complete section including its Whitehead-link example.; supported items: lem-link-nilpotent-quotient-generated-by-component-meridians, def-milnor-integer-and-residue-invariants, lem-milnor-basing-indeterminacy-and-self-crossing-scope.
  - §2.5 link-group lower-central quotient presentation by component meridians and longitudes: inline for lem-link-nilpotent-quotient-generated-by-component-meridians — The local proof establishes finite quotient generation choice-free from the meridian H1 basis and lower-central commutator weights; Stees supplies an independent convention treatment.
  - §2.5 Magnus expansion and coefficient indexing for longitude words: included for def-milnor-integer-and-residue-invariants — The local definition fixes the final index as the longitude component and uses a finite truncation; Stees is used to cross-check indexing and coefficient conventions.
  - §2.5 cyclic and proper-subsequence gcd indeterminacy; Milnor’s quotient criterion: included for lem-milnor-basing-indeterminacy-and-self-crossing-scope — The source supports the classical statement and gcd convention, while the actual basing and self-crossing derivations remain owner-escalated locally.
  - Example 2.3: Whitehead-link length-four invariant and sliceness obstruction: out-of-scope — The example concerns a two-component length-four sliceness obstruction; the assigned B page instead checks the three-component Borromean triple coefficient.
- John McCleary, Nontrivial fundamental groups — https://pages.vassar.edu/mccleary/files/2011/04/MC08bis.fin_.pdf; locator: §8bis.2, Theorem 8bis.12 and its construction, Theorem 8bis.14 and proof, Proposition 8bis.13, and Theorem 8bis.16 with its full induction; PDF pp. 11–15.; supported items: thm-homological-lhs-spectral-sequence-for-group-extensions, thm-five-term-homology-sequence-for-group-extensions, thm-stallings-integral-lower-central-isomorphism.
  - Theorem 8bis.12: homological Lyndon–Hochschild–Serre spectral sequence: included for thm-homological-lhs-spectral-sequence-for-group-extensions — The A-page supplier gives a separate classifying-space and Serre-fibration proof, with its full-AC and dependent-choice branch declared.
  - Theorem 8bis.14: five-term exact sequence of a group extension: included for thm-five-term-homology-sequence-for-group-extensions — The local proof identifies H0(Q;H1(N)) with N/[G,N] and tracks the transgression.
  - Proposition 8bis.13: finite normal Sylow subgroup application: out-of-scope — This finite-group application is unrelated to the integral lower-central quotient induction required by KT-53.
  - Theorem 8bis.16: H1-isomorphism and H2-epimorphism imply finite lower-central isomorphisms: included for thm-stallings-integral-lower-central-isomorphism — The local proof reproduces the extension five-term diagram, cokernel identification, and elementwise middle-group lift argument.
- Stefan Friedl, Knot Theory — https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf; locator: §5.1, Theorems 5.1–5.2 (printed pp. 64–65); §5.3, complete proof of Proposition 5.5 and Lemma 5.6 (printed pp. 69–73); §7.1, longitude definition, Sputnik Lemma 7.1, Lemma 7.2 and trefoil example (printed pp. 95–97).; supported items: lem-simply-connected-hypersurface-complement-adds-free-generator, lem-link-diagram-upper-region-free-meridians, lem-link-wirtinger-crossing-ball-cover, thm-link-wirtinger-presentation-correctness, def-topological-linking-number-by-meridian-coordinate, lem-link-peripheral-longitude-word-from-diagram.
  - Theorem 5.1: HNN gluing across a two-sided codimension-one submanifold: inline for lem-simply-connected-hypersurface-complement-adds-free-generator — Friedl states the general gluing theorem with a proof citation; the batch proves the simply connected case locally from an explicit connected-overlap Seifert–van Kampen cover.
  - Theorem 5.2: bicollar neighborhood for a proper codimension-one submanifold: inline for lem-link-diagram-upper-region-free-meridians — The upper-region proof instead supplies a tubular neighborhood for its proper sheets and checks the two side components and their retractions.
  - Lemma 5.6: punctured-sphere normal generators, including omission of one puncture circle: included for lem-link-wirtinger-crossing-ball-cover — The local proof attaches disks to the punctured sphere and applies van Kampen to the resulting sphere or once-punctured sphere.
  - Claim 0 in Proposition 5.5 proof: complement group as the upper/lower/intersection pushout: included for lem-link-wirtinger-crossing-ball-cover — The local cover item constructs the open collar cover and identifies its three deformation retractions.
  - Claim 2 in Proposition 5.5 proof: upper-region free meridian basis: included for lem-link-diagram-upper-region-free-meridians — The local upper-region proof defines the vertical sheets and proves freeness by successive cut-and-glue steps.
  - Claim 3 and final step in Proposition 5.5 proof: puncture circles give Wirtinger relators: included for thm-link-wirtinger-presentation-correctness — The local item uses only the normal closure, so conjugacy or inversion of a based puncture circle does not change the presentation.
  - Proposition 5.5: Wirtinger presentation and omission of any one relator: included for thm-link-wirtinger-presentation-correctness — The local proof retains the source/target convention and proves relator omission from the punctured-sphere normal-generation lemma.
  - Sputnik Lemma 7.1 and the longitude definition: zero self-linking correction: inline for def-topological-linking-number-by-meridian-coordinate — The local definition uses the component meridian coordinate and does not import the book’s proof in place of its own homology argument.
  - Lemma 7.2 and the trefoil longitude example: inline for lem-link-peripheral-longitude-word-from-diagram — The local longitude proof derives the diagram word from the crossing relation and the writhe correction; the trefoil calculation is not used as a proof step.
- Allen Hatcher, Algebraic Topology — https://pi.math.cornell.edu/~hatcher/AT/AT.pdf; locator: Complete book PDF, §1.3 on covering spaces and homotopy lifting, and §2.2, Theorem 2.35 on cellular homology and naturality; the chapter’s stated coverage does not include a Serre spectral-sequence proof.; supported items: lem-string-link-exterior-homology-and-meridian-maps.
  - §1.3: covering-space classification and homotopy lifting: out-of-scope — The local classifying-map arguments use explicit CW extension and mapping-path constructions; no covering-classification theorem is needed for the KT-53 group-homology branch.
  - §2.2, Theorem 2.35: cellular homology computes singular homology naturally: inline for lem-string-link-exterior-homology-and-meridian-maps — The local relative-tube proof cites the library cellular comparison and checks the required finite product-pair chain calculation directly.
- Wolfram MathWorld, Borromean Rings — https://mathworld.wolfram.com/BorromeanRings.html; locator: Complete article entry on the standard three-braid closure and pairwise unlinking; used only as a notation and identification check.; supported items: ex-borromean-link-milnor-triple-invariant.
  - Standard Borromean braid closure and pairwise unlinking: inline for ex-borromean-link-milnor-triple-invariant — The braid convention is checked against the displayed local diagram; all six crossing labels, pairwise linking sums, and the Magnus coefficient are verified in the example itself.
- John Milnor, Isotopy of Links — https://www.degruyterbrill.com/document/doi/10.1515/9781400879915-022/html; locator: Design-named chapter, pp. 280–306. The full chapter was not retrieved, so no section range or proof passage is claimed as read.; supported items: none claimed.
  - Full chapter retrieval and the design-listed isotopy/indeterminacy arguments: deferred — The publisher and JSTOR routes exposed bibliographic metadata or a short search excerpt but no complete chapter text; this source remains an owner-escalation and no argument is attributed to unread pages.

Milnor, Isotopy of Links (1957), pp. 280–306, was not retrieved. The source-resolution record preserves six failed retrieval attempts (initial attempt plus five retries), seven searches, four fully read alternatives, exact outcomes, and local dispositions for every affected claim. No unread excerpt or proof is attributed to the chapter; its status remains owner-escalation, not dropped.

## Final scoped checks

- proof-layout on the 27 assigned item files: 27 items, 83 numbered steps, 0 defects.
- proof-contract strict validation: 27/27 items checked, 0 errors, 0 warnings. Contracts contain exact supplier statement excerpts, per-step derivations, boundary dispositions, axiom uses, finite Borromean checks, and explicit owner-escalation obligations.
- source-fetch-check --stamp: 6/7 sources fetch-verified and newly stamped; the unretrieved Milnor 1957 chapter remains the single failed source. A subsequent check reports the same 6/7 status.
- coverage-checklist: 29 harvested results; its two errors are the deliberate owner-escalation and uncertain retrieval-confidence fields for Milnor 1957.
- Scoped statement-first inspection of the 27 authored items: 0 defects. The required full-run statement-first command stops on the empty batch-100 page inventory khovanov-to-floer-spectral-sequence.
- Full-run proof-contract coverage stops on that same empty batch-100 page inventory. The strict batch-108 contract check above is clean.
- Full-run item-dependency-level check reports 85 scaffold errors elsewhere in the run. A scoped calculation over 218 parseable manifests finds 0 batch-108 errors, 0 batch-108 level mismatches, and 0 dependency cycles. The full-run batch-dependency-level check stops on the duplicate item cex-ip-continuous-time-frequency-aliasing, listed twice in batch-55.pages.json at lines 86 and 331.
- step1-decisions check and a properly scoped ready-record attempt stop before writing on that same duplicate batch-55 item. No batch-108 readiness JSON was written and no escalation was overwritten. Final Step 1 decisions remain to be recorded after the unrelated run-wide duplicate is reconciled.
- A/B frontmatter inventory audit: 25 A items, 2 B items, no Markdown page bodies.

## Owner escalations and next reconciliation

- lem-milnor-basing-indeterminacy-and-self-crossing-scope: complete the meridian-generator change, nilpotent word-lift ambiguity, cyclic re-basing, self-crossing longitude change, and gcd-ideal closure arguments.
- thm-milnor-invariants-isotopy-and-link-homotopy-scope: close closed-link invariance through that lemma; the based string-link isotope proof is already local.
- cex-pairwise-linking-does-not-classify-links: close its thm-milnor-invariants-isotopy-and-link-homotopy-scope dependency before asserting nonisotopy.
- Source recovery: Milnor, Isotopy of Links, remains unresolved after the allowed five retries. Alternative full sources and local proofs are recorded; owner review is required for the source obligation and unresolved mathematical claims.
- Run-wide workflow reconciliation: remove the duplicate batch-55 inventory occurrence for cex-ip-continuous-time-frequency-aliasing outside this pair, then rerun global dependency/coverage checks and record each batch-108 Step 1 decision with tools/step1-decisions.mjs.

Readiness records are not independent review, acceptance, or publication.
