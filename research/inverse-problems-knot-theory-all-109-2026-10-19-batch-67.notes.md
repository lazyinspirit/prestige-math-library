# Batch 67 — Levine–Tristram signatures and the Arf invariant

## Assignment and controlling design

- Run: `inverse-problems-knot-theory-all-109-2026-10-19`; role `beta`; batch `67`; assigned pair `levine-tristram-signatures-and-arf-invariant` and its examples page.
- The assigned batch dependency level is 4; the 20 item levels range from 0 through 18 and are computed from the current in-run dependency edges.
- Dispatch scheduling input: `41dd33146255b664e55b75603e7c764ee3bde257d4079845e209411309d97f62`. The dependency-level input file was read before carrier authoring; item dependencies and levels are recorded in the batch manifest.
- The controlling design is KT-12 in `research/plan-knot-theory-track.md`, lines 419–421. It names this pair’s signature and Arf route, fixes the averaged signature convention at Alexander roots, and identifies the intended examples and warning. That local design is more specific than the generic `research/plan-spec.json` row. The plan-spec row agrees on page ID, title, category, order, and prerequisites and contains no conflicting claim or proof route. No plan conflict was found.
- The A-page inventory has 18 items and the B-page inventory has 2. Three A-page local prerequisites were added before their consumers: `lem-total-linking-equals-intersection-with-link-seifert-surface`, `lem-link-seifert-pairing-well-defined`, and `lem-link-seifert-matrix-enlargement-under-arc-surgery`. No planned claim was removed or weakened. The A and B page files contain YAML frontmatter only and have empty Markdown bodies.

## Cross-batch interfaces

Batch 67 declares prerequisite batches 58, 59, 61, and 62. Final manifest comparison finds 37 direct item edges (10 from batch 62, 20 from 61, 5 from 58, and 2 from 59), plus the two A-page prerequisite edges to batches 61 and 62. The cross-batch evidence file records all 39 edges as `verified`. Supplier item bodies and proofs, and the two prerequisite page inventories, were inspected against the uses in this batch. This is authoring-interface evidence only; it is not independent approval or publication.

## Sources and coverage

`research/inverse-problems-knot-theory-all-109-2026-10-19-batch-67.coverage.json` retains the existing `owner_note` verbatim: “Partial native75 source-coverage relocation for one S-equivalence item; original67authorattemptfailed and remaining authoredcoverage remains owed. This is not a source-reading or proof-completion claim.” The batch source inventory itself has 6 A-page source rows and 3 B-page source rows. `source-fetch-check --stamp` reports 9/9 fetch-verified, with no new stamps needed and 0 documented drops. Source names, URLs, exact locators, every harvested result, and its `included`/`inline` disposition are recorded in that coverage file and repeated in the item ledger below.

The coverage checklist reports 32 harvested results, 0 errors, and one advisory: only 1 of the A page’s 29 source results is classified as `included`. The remaining 28 A results and all 3 B results are explicitly `inline` and name target item carriers; none is marked deferred or out of scope. The warning’s “confirm the declines” wording therefore does not describe the recorded dispositions. The two invalid source-kind labels were normalized to the checklist’s accepted values `survey` and `paper`; no source contents or dispositions changed.

The active sources are full-text treatments: Rolfsen and Lickorish for Seifert forms, surface changes, and Conway normalization; Conway’s survey for the Hermitian form and root-average convention; Robertello and Saveliev for the Arf invariant and determinant expansion; Hirsch for isotopy extension; and Cattabriga–Francaviglia for the trefoil example. Their exact evidence is enumerated below. No active source is marked dropped. Prior candidate-search outcomes available in the authoring record were a Kawauchi timeout, a Palmer thesis retrieval-size failure, and an Androma 403; those candidates are not used as proof suppliers. The current coverage file has no attempt URLs or timestamps for those leads, so no `source_resolution` record or invented retry metadata was added. All selected source rows were retrieved and stamp-verified.

## Item-by-item claims, dependencies, arguments, and decisions

The claim text below is copied from each uninterrupted Statement, Definition, Example, or Counterexample section. Direct dependencies are the exact IDs in `batch-67.pages.json`. Proof-bearing arguments and their exact supplier excerpts, numbered derivations, boundary cases, and finite checks are recorded in `batch-67.proof-contracts.json`.

### Page: levine-tristram-signatures-and-arf-invariant

#### def-seifert-surface-arc-surgery

**Kind / dependency level:** definition / 0.

**Claim (verbatim):**

Let $F$ be a compact oriented embedded surface in the oriented $3$-sphere. An **embedded arc surgery** on $F$ is the following operation. Choose an embedded solid cylinder $C=[0,1]\times D^2$ whose intersection with $F$ is exactly its two end disks $\{0,1\}\times D^2$, with the cylinder lying on the same local side of $F$ at the two disks. Replace those disks by the lateral annulus $[0,1]\times\partial D^2$. The orientation on the annulus is the one that agrees along both attaching circles with the orientation on the remaining part of $F$. The result is denoted $F_C$. The core $[0,1]\times\{0\}$ is the surgery arc. The operation preserves $\partial F$ and its boundary orientation; its reverse is called an arc-surgery reduction.

```tikz
\begin{tikzpicture}[scale=0.95,>=stealth]
  \draw[thick] (-3,0) .. controls (-2.4,0.65) and (-1.8,0.65) .. (-1.2,0);
  \draw[thick] (-3,0.18) .. controls (-2.4,0.83) and (-1.8,0.83) .. (-1.2,0.18);
  \draw[dashed] (-2.7,0.1) -- (-1.5,0.1);
  \node at (-2.1,-0.45) {two end disks on $F$};
  \draw[->] (-0.85,0.15) -- (-0.15,0.15);
  \draw[thick] (0.35,0) .. controls (0.8,0.65) and (1.5,0.65) .. (2.15,0);
  \draw[thick] (0.35,0.18) .. controls (0.8,0.83) and (1.5,0.83) .. (2.15,0.18);
  \draw[thick,blue] (0.35,0.09) .. controls (0.8,0.4) and (1.5,0.4) .. (2.15,0.09);
  \node at (1.25,-0.45) {tube replaces disks};
\end{tikzpicture}
```

The drawing is a side-view schematic: the two short boundary circles are the attaching circles, the blue arc depicts one boundary of the lateral annulus, and the cylinder interior is not part of the surface. The move is defined by the embedded product cylinder above, not by the sketch.

**Direct dependencies:** `def-oriented-link-in-s-three-and-ambient-isotopy`.

**Step 1 decision:** `ready`; stored item/dependency hash matches current content; Ready: the complete local item is placed on the assigned page, its actual prerequisite bodies and proof arguments were inspected, and scoped proof-layout/dependency checks pass. This is authoring readiness only, not independent approval or publication.

**Proof contract:** not applicable to this definition carrier.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A, Seifert surface and embedded surgery convention; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Definition 8.1, printed p. 79; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### lem-total-linking-equals-intersection-with-link-seifert-surface

**Kind / dependency level:** lemma / 0.

**Claim (verbatim):**

Assume full AC. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be a nonempty smooth oriented link, let $F$ be a compact smooth oriented embedded surface with oriented boundary $L$, and put $X=S^3\setminus L$. For each component $K_i$, let $\mu_i$ be the positive meridian, oriented as the boundary of a small normal disk so that a positive tangent to $K_i$ followed by the disk's positive basis gives the ambient orientation. Alexander duality identifies $H_1(X;\mathbb Z)$ with the free abelian group on $[\mu_1],\ldots,[\mu_r]$. Define the total-linking homomorphism $\varphi:H_1(X;\mathbb Z)\to\mathbb Z$ by $\varphi(\sum_i m_i[\mu_i])=\sum_i m_i$. If a smooth oriented loop $J\subset X$ is transverse to the interior of $F$, define its signed intersection number $J\cdot F$ by counting $+1$ when $J$ crosses from the negative to the positive side of the oriented normal of $F$ and $-1$ for the reverse crossing. Then $J\cdot F=\varphi([J])$.

**Direct dependencies:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `lem-the-complement-of-an-oriented-link-is-a-connected-smooth-three-manifold`, `def-one-variable-alexander-module-of-an-oriented-link`, `prop-the-first-hurewicz-map-in-degree-one-is-abelianization`, `thm-transversality-homotopy-theorem`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`, `def-axiom-of-choice`.

**Step 1 decision:** `ready`; stored item/dependency hash matches current content; Complete local proof; current scoped layout check passes.

**Proof contract:** `complete-local-proof`; 4 numbered derivations, 6 supplier excerpts, 8 boundary checks, 0 finite checks.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A, linking and Seifert-form conventions; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf).

#### lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries

**Kind / dependency level:** lemma / 1.

**Claim (verbatim):**

Assume the full Axiom of Choice. Let $L$ be a nonempty smooth oriented link in the oriented $3$-sphere, and let $F_0,F_1$ be connected compact smooth oriented embedded surfaces with the same oriented boundary $L$. There is a finite sequence of such spanning surfaces from $F_0$ to $F_1$ in which each consecutive pair differs either by an ambient isotopy fixed on $L$ or by one embedded arc surgery or its reverse.

**Direct dependencies:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-one-variable-alexander-module-of-an-oriented-link`, `def-covering-map-and-evenly-covered-neighbourhoods`, `thm-classification-of-connected-covering-spaces`, `def-deck-transformation-and-deck-group`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-axiom-of-choice`, `thm-transversality-homotopy-theorem`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`, `lem-isotopy-extension-for-a-compact-source-with-boundary`, `lem-total-linking-equals-intersection-with-link-seifert-surface`, `thm-transverse-preimage-theorem`, `thm-compact-smooth-manifolds-with-corners-admit-relative-finite-triangulations`, `def-seifert-surface-arc-surgery`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the available isotopy-extension statement does not cover a compact 2-dimensional surface in a 3-dimensional target fixed on the common boundary; the boundary-relative transverse arrangement and later projection/strict-decrease cut-and-paste steps remain incomplete. See this item, its contract, and batch-67 notes.

**Proof contract:** `owner-escalation`; 6 numbered derivations, 14 supplier excerpts, 8 boundary checks, 0 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-isotopy-extension-for-a-compact-source-with-boundary","status":"owner-escalation","required_hypotheses":"A dimension-correct isotopy-extension theorem for compact 2-dimensional surfaces embedded in S^3, relative to their common boundary, plus a boundary-relative general-position perturbation. The available supplier statement requires source and target dimensions to agree.","affected_claims":["Existence of the initial surface arrangement in A2.","The full finite surface-surgery sequence."],"evidence":"Facts [L1]/[A2] and step 1.1 explicitly record that the available supplier only treats n-dimensional source in n-dimensional target; this application has a surface (2) in S^3 (3)."}
- Supply a dimension-correct ambient isotopy extension relative to the common boundary and the required boundary-relative general-position argument.
- Fully justify maximal-deck-translate projection injectivity, the relative primal/dual neighbourhood construction including compatible boundary triangulation, and strict decrease of the intersection-curve count.

**Source support:** W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Theorem 8.2: surface-surgery relation for spanning surfaces; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf); Morris W. Hirsch, Differential Topology, Graduate Texts in Mathematics 33, Springer 1976 (Chapter 8, §1, Theorem 1.3: isotopy extension for compact submanifolds; inline; Chapter 8, §1, Theorem 1.3, printed p. 180: compact-submanifold isotopy extension; full PDF retrieved and the theorem proof inspected.; https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf).

#### lem-link-seifert-pairing-well-defined

**Kind / dependency level:** lemma / 5.

**Claim (verbatim):**

Assume full AC. Let $L$ be a nonempty smooth oriented link in the oriented $3$-sphere, and let $F$ be a connected compact smooth oriented embedded surface with oriented boundary $L$. For disjoint oriented embedded circles $C,D\subset S^3$, define $\operatorname{lk}(C,D)$ as the coefficient of the positive meridian of $D$ in $H_1(S^3\setminus D;\mathbb Z)$, and extend it bilinearly to finite integral sums of oriented circles. This linking number is symmetric on disjoint circle cycles. Every class of $H_1(F;\mathbb Z)$ has a representative that is a finite integral sum of pairwise disjoint smooth oriented embedded circles in $F$. The positive push-off $x^+$ of such a representative is a sufficiently small copy in the positive normal direction determined by the ambient and surface orientations. For representatives $x$ and $y$, the sum of the pairwise linking numbers between $x^+$ and $y$ depends only on $[x]$ and $[y]$, is independent of the sufficiently small positive push-off level, and is bilinear. Hence it defines the positive-push Seifert pairing on $H_1(F;\mathbb Z)$.

**Direct dependencies:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-one-variable-alexander-module-of-an-oriented-link`, `thm-linking-number-equals-signed-intersection`, `thm-every-oriented-knot-bounds-a-seifert-surface`, `thm-transversality-homotopy-theorem`, `prop-relative-transversality-preserves-a-map-on-a-closed-good-region`, `def-regular-oriented-link-diagram`, `lem-every-oriented-link-admits-a-regular-projection`, `def-axiom-of-choice`.

**Step 1 decision:** `ready`; stored item/dependency hash matches current content; Ready: the complete local item is placed on the assigned page, its actual prerequisite bodies and proof arguments were inspected, and scoped proof-layout/dependency checks pass. This is authoring readiness only, not independent approval or publication.

**Proof contract:** `complete-local-proof`; 4 numbered derivations, 13 supplier excerpts, 8 boundary checks, 0 finite checks.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A: Seifert form and surface dependence; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf).

#### def-link-seifert-pairing-and-matrix

**Kind / dependency level:** definition / 6.

**Claim (verbatim):**

Assume full AC. Let $L=K_1\cup\cdots\cup K_r\subset S^3$ be a nonempty smooth oriented link, let $F$ be a connected compact smooth oriented embedded surface whose oriented boundary is $L$, and let $g$ be its genus. The compact-surface normal form gives $H_1(F;\mathbb Z)\cong\mathbb Z^{2g+r-1}$. Orient the normal line of $F$ by requiring $(n,u,v)$ to be a positive ambient frame whenever $(u,v)$ is a positive tangent frame of $F$. For an ordered integral basis $a_1,\dots,a_m$, with $m=2g+r-1$, choose circle-cycle representatives on $F$ and let $a_i^+$ be a sufficiently small copy in the positive normal direction. For disjoint oriented embedded circles $C,D\subset S^3$, define $\operatorname{lk}(C,D)$ by $[C]=\operatorname{lk}(C,D)[\mu_D]$ in $H_1(S^3\setminus D;\mathbb Z)$, where $\mu_D$ is the positive meridian whose oriented normal disk follows the positive tangent to $D$ in the ambient orientation; extend linking bilinearly to finite sums of such circles. Define the positive-push Seifert matrix by $V_{ij}=\operatorname{lk}(a_i^+,a_j)$. The link-surface pairing lemma proves this matrix is independent of the chosen cycle representatives and push-off level. The surface and basis remain part of the data; this definition asserts no link-only matrix invariance.

**Direct dependencies:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-one-variable-alexander-module-of-an-oriented-link`, `lem-link-seifert-pairing-well-defined`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-axiom-of-choice`.

**Step 1 decision:** `ready`; stored item/dependency hash matches current content; Ready: the complete local item is placed on the assigned page, its actual prerequisite bodies and proof arguments were inspected, and scoped proof-layout/dependency checks pass. This is authoring readiness only, not independent approval or publication.

**Proof contract:** not applicable to this definition carrier.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A: positive-push pairing and matrix convention; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, §8.A, printed pp. 79–83; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### lem-link-seifert-matrix-enlargement-under-arc-surgery

**Kind / dependency level:** lemma / 7.

**Claim (verbatim):**

Assume full AC. Let $L$ be a nonempty smooth oriented link with $r$ components, let $F$ be a connected compact smooth oriented spanning surface of genus $g$, and let $F'$ be obtained by choosing an embedded solid cylinder $[0,1]\times D^2$ that meets $F$ exactly in its two end disks and lies on the same local side at both disks, then replacing those disks by the cylinder's lateral annulus with the compatible orientation. This surgery preserves $L$. Put $m=2g+r-1$, choose an ordered integral basis of $H_1(F;\mathbb Z)$ represented away from the two end disks, and let $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ be its positive-push Seifert matrix. The surviving classes of that basis extend by two classes to an integral basis of $H_1(F';\mathbb Z)$, and for some column vectors $x,y\in\mathbb Z^m$ and integer $z$, the new Seifert matrix is one of
$$
\begin{pmatrix}V&x&0\\y^T&z&0\\0^T&1&0\end{pmatrix},\qquad
\begin{pmatrix}V&x&0\\y^T&z&1\\0^T&0&0\end{pmatrix}.
$$

**Direct dependencies:** `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-link-seifert-pairing-and-matrix`, `lem-link-seifert-pairing-well-defined`, `def-seifert-surface-arc-surgery`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `thm-mayer-vietoris-sequence-in-singular-homology`, `thm-linking-number-equals-signed-intersection`, `def-regular-oriented-link-diagram`, `lem-every-oriented-link-admits-a-regular-projection`, `def-axiom-of-choice`.

**Step 1 decision:** `ready`; stored item/dependency hash matches current content; Ready: the complete local item is placed on the assigned page, its actual prerequisite bodies and proof arguments were inspected, and scoped proof-layout/dependency checks pass. This is authoring readiness only, not independent approval or publication.

**Proof contract:** `complete-local-proof`; 2 numbered derivations, 10 supplier excerpts, 8 boundary checks, 1 finite checks.

**Source support:** W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Theorem 8.4: elementary Seifert matrix enlargements; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### def-knot-arf-invariant-from-seifert-form

**Kind / dependency level:** definition / 8.

**Claim (verbatim):**

Assume full AC. Let $K$ be a smooth oriented knot and $F$ a connected compact smooth oriented spanning surface of genus $g$. The Seifert matrix $V$ defines a function on $H_1(F;\mathbb F_2)$ by
$$q_F([x])=\operatorname{lk}(x^+,x)\pmod2=x^TVx\pmod2,$$
where an integral lift of the mod-two homology class is used in the last expression. Its polarization is the mod-two intersection form. A symplectic basis is an ordered basis $(a_1,b_1,\ldots,a_g,b_g)$ with $a_i\cdot b_j=\delta_{ij}$ and all other pairings zero. Define
$$\operatorname{Arf}(q_F)=\sum_{i=1}^g q_F(a_i)q_F(b_i)\pmod2.$$
The quadratic-enhancement lemma proves that this value is independent of symplectic basis; the S-equivalence and Conway bridge proves independence of $F$, so the resulting knot invariant is denoted $\operatorname{Arf}(K)$. For $g=0$ the empty sum is $0$.

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the definition’s knot-level surface independence depends on the Arf enhancement and Conway bridge, which inherit the unresolved arbitrary-surface S-equivalence and Conway determinant suppliers.

**Proof contract:** not applicable to this definition carrier.

**Source support:** R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555 (§§3–4: Seifert quadratic form and Arf basis formula; inline; §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf).

#### lem-seifert-matrices-of-a-knot-are-s-equivalent

**Kind / dependency level:** lemma / 8.

**Claim (verbatim):**

Assume full AC. Let $K$ be a smooth oriented knot in the oriented standard $3$-sphere, and let $F,F'$ be any connected compact smooth oriented spanning surfaces for $K$. For any ordered integral bases of $H_1(F;\mathbb Z)$ and $H_1(F';\mathbb Z)$, the matrices of the positive-push Seifert pairing are related by a finite sequence of integral unimodular congruences and the two rank-two elementary Seifert enlargements or their reverses.

**Direct dependencies:** `def-seifert-matrix-s-equivalence`, `def-knot-seifert-pairing-and-matrix`, `def-seifert-surface-arc-surgery`, `lem-seifert-pairing-well-defined`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-seifert-matrix-s-equivalence-under-isotopy`, `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`, `thm-linking-number-equals-signed-intersection`, `def-oriented-seifert-surface`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored hash differs from current item/dependencies; existing escalation preserved under the no-overwrite rule; The full statement is retained, but the proof depends on lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries, whose current proof does not establish projection injectivity or strict intersection decrease. The assigned A-page also participates in the recorded Levine–Tristram page cycle. Exact supplier IDs, proof gaps and outside consumers are recorded in batch-75 notes/cross-batch-dependencies.

**Proof contract:** `owner-escalation`; 3 numbered derivations, 10 supplier excerpts, 8 boundary checks, 0 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries","status":"owner-escalation","required_hypotheses":"Any two connected compact oriented spanning surfaces of one oriented knot are related by a finite sequence of ambient isotopies and embedded arc surgeries.","affected_claims":["The arbitrary-surface S-equivalence conclusion."],"evidence":"The current supplier has an unresolved ambient-isotopy arrangement and incomplete maximal-deck-translate/relative-neighbourhood intersection-decrease steps; see its Unresolved proof obligation."}
- The arbitrary-surface S-equivalence claim remains unproved until lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries has a complete proof.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A: Seifert-form conventions and surface dependence; included; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Theorem 8.2: surface-surgery relation for spanning surfaces; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### lem-arf-quadratic-enhancement-from-seifert-form

**Kind / dependency level:** lemma / 9.

**Claim (verbatim):**

Assume full AC. For a knot Seifert surface $F$ with Seifert matrix $V$, the function $q_F(x)=x^TVx\pmod2$ is well-defined on $H_1(F;\mathbb F_2)$ and satisfies
$$q_F(x+y)=q_F(x)+q_F(y)+x\cdot_F y.$$
Its polarization is nondegenerate. For any symplectic basis $(a_1,b_1,\ldots,a_g,b_g)$, the sum $\sum_iq_F(a_i)q_F(b_i)$ is independent of that basis. It is unchanged by either elementary Seifert enlargement, so it depends only on the knot.

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `def-knot-arf-invariant-from-seifert-form`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `lem-seifert-matrices-of-a-knot-are-s-equivalent`, `def-seifert-matrix-s-equivalence`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the refinement, Gauss sum, and enlargement calculations are supplied, but the final knot-only surface-independence clause depends on the escalated S-equivalence theorem.

**Proof contract:** `owner-escalation`; 3 numbered derivations, 5 supplier excerpts, 8 boundary checks, 1 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-seifert-matrices-of-a-knot-are-s-equivalent","status":"owner-escalation","required_hypotheses":"S-equivalence between Seifert matrices of all spanning surfaces of the same knot.","affected_claims":["The statement that the enlargement-stable Arf value depends only on the knot."],"evidence":"Steps 1.1–3.1 prove the refinement, Gauss sum and enlargement stability; the final surface-independence clause uses the escalated S-equivalence lemma."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555 (§§3–4: quadratic enhancement and Arf basis expression; inline; §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf).

#### lem-levine-tristram-hermitian-form-singular-set

**Kind / dependency level:** lemma / 12.

**Claim (verbatim):**

Assume full AC. Let $K$ be a smooth oriented knot, let $F$ be any connected compact smooth oriented spanning surface of genus $g$, let $V$ be its positive-push Seifert matrix, and let $\omega\in S^1\setminus\{1\}$. The Hermitian matrix
$$H_\omega=(1-\omega)V+(1-\bar\omega)V^T$$
is singular if and only if the normalized knot Alexander polynomial $\Delta_K$ vanishes at $\omega$.

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `lem-square-seifert-presentation-and-alexander-normalization`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-axiom-of-choice`.

**Step 1 decision:** `ready`; stored item/dependency hash matches current content; Ready: the complete local item is placed on the assigned page, its actual prerequisite bodies and proof arguments were inspected, and scoped proof-layout/dependency checks pass. This is authoring readiness only, not independent approval or publication.

**Proof contract:** `complete-local-proof`; 2 numbered derivations, 5 supplier excerpts, 8 boundary checks, 0 finite checks.

**Source support:** Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477) (§2.1: singular parameters of the Hermitian form; inline; §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.; https://arxiv.org/pdf/1903.04477).

#### def-levine-tristram-hermitian-form-and-signature

**Kind / dependency level:** definition / 13.

**Claim (verbatim):**

Assume full AC. Let $K$ be a smooth oriented knot in the oriented standard $3$-sphere, let $F$ be a connected compact smooth oriented surface with oriented boundary $K$, let $V$ be the matrix of the Seifert pairing $V_{ij}=\operatorname{lk}(a_i^+,a_j)$ in an ordered integral basis, and let $\omega\in S^1\setminus\{1\}$. Define the **Levine–Tristram Hermitian matrix** by
$$H_\omega(V)=(1-\omega)V+(1-\bar\omega)V^T.$$
It is Hermitian because $V$ is real and $\bar\omega=\omega^{-1}$. Its signature is the number of positive eigenvalues minus the number of negative eigenvalues, both counted with multiplicity and with zero eigenvalues omitted. When $\Delta_K(\omega)\ne0$, define $\sigma_\omega(K)$ to be this signature. At a root $\omega_0\ne1$ of $\Delta_K$, define $\sigma_{\omega_0}(K)$ to be the arithmetic mean of the two one-sided limits of $\sigma_{e^{i\theta}}(K)$ as $\theta$ approaches an argument of $\omega_0$ from below and above. The invariance and one-sided-existence lemmas justify treating these values as independent of the chosen surface and basis.

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `def-seifert-matrix-s-equivalence`, `lem-levine-tristram-hermitian-form-singular-set`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the matrix formula and root-average convention are defined, but the stated surface/basis independence and knot-level root values depend on the escalated stabilization and one-sided-signature suppliers.

**Proof contract:** not applicable to this definition carrier.

**Source support:** Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477) (§2.1 and §2.4: Hermitian convention, Alexander roots, and root-average signature; inline; §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.; https://arxiv.org/pdf/1903.04477).

#### def-seifert-s-equivalence-and-conway-normalization

**Kind / dependency level:** definition / 13.

**Claim (verbatim):**

Assume full AC. For an even-order integral matrix $V$ that is the Seifert matrix of a knot, **S-equivalence** means the equivalence relation generated by integral unimodular congruences $V\mapsto P^TVP$ with $\det P=\pm1$, where $x,y\in\mathbb Z^n$ and $z\in\mathbb Z$, and the two enlargements
$$E_0(V;x,y,z)=\begin{pmatrix}V&x&0\\y^T&z&0\\0^T&1&0\end{pmatrix},\qquad E_1(V;x,y,z)=\begin{pmatrix}V&x&0\\y^T&z&1\\0^T&0&0\end{pmatrix},$$
and their reverses. For an assignment $P$ of an integer polynomial in $z$ to each ambient-isotopy class of oriented links, call $P$ **Conway-normalized** when $P_U(z)=1$ for the unknot $U$ and
$$P_{L_+}(z)-P_{L_-}(z)=z\,P_{L_0}(z)$$
whenever the three oriented links agree outside one crossing ball and inside it are respectively the positive crossing, negative crossing, and orientation-compatible smoothing; positive means $\det_P(v_{\rm over},v_{\rm under})>0$, where $v_{\rm over},v_{\rm under}$ are the projected oriented tangent vectors and $P$ is oriented so the viewing normal followed by a positive basis of $P$ is ambient-positive. The smoothing reconnects the four oriented half-arcs in the unique noncrossing way compatible with their directions. No existence of such an assignment is presupposed: the Seifert-determinant lemma constructs a unique assignment and denotes it by $\nabla_L(z)$. For a knot, let $\Delta_K^\#(t)$ be the unique associate of its Alexander polynomial satisfying $\Delta_K^\#(1)=1$ and $\Delta_K^\#(t^{-1})=\Delta_K^\#(t)$; existence and uniqueness follow from the Alexander-normalization corollary. Set $z=t^{1/2}-t^{-1/2}$, with $t^{1/2}$ a formal Laurent variable, and use $\Delta_K^\#(t)=\nabla_K(z)$ as the normalization convention.

**Direct dependencies:** `def-seifert-matrix-s-equivalence`, `def-knot-seifert-pairing-and-matrix`, `def-link-seifert-pairing-and-matrix`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `cor-knot-alexander-normalization-symmetry-and-genus-bound`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the formal skein and matrix conventions are stated, but existence and uniqueness of the Conway assignment depend on the escalated surface-independence argument.

**Proof contract:** not applicable to this definition carrier.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A, Seifert form context; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Definition 8.3 and Theorem 8.4, printed pp. 80–82; Chapter 10, Theorem 10.7, printed p. 108; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### lem-conway-polynomial-from-seifert-determinant

**Kind / dependency level:** lemma / 14.

**Claim (verbatim):**

Assume full AC. Every nonempty smooth oriented link $L\subset S^3$ bounds a connected compact smooth oriented embedded surface. If $F$ is any such surface with Seifert matrix $V$, and $u$ is a formal Laurent variable, then
$$D_L(u)=\det(uV-u^{-1}V^T)$$
is independent of the surface and integral basis, belongs to $\mathbb Z[u-u^{-1}]$, equals $1$ for the unknot, and satisfies
$$D_{L_+}(u)-D_{L_-}(u)=(u-u^{-1})D_{L_0}(u)$$
for every oriented skein triple. Thus $D_L(u)=\nabla_L(u-u^{-1})$ for the unique Conway polynomial normalized by $\nabla_U=1$ and $\nabla_+-\nabla_-=z\nabla_0$.

**Direct dependencies:** `def-seifert-s-equivalence-and-conway-normalization`, `def-link-seifert-pairing-and-matrix`, `def-seifert-surface-arc-surgery`, `lem-link-seifert-pairing-well-defined`, `lem-link-seifert-matrix-enlargement-under-arc-surgery`, `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`, `def-oriented-link-in-s-three-and-ambient-isotopy`, `def-regular-oriented-link-diagram`, `lem-every-oriented-link-admits-a-regular-projection`, `def-seifert-smoothing-and-seifert-circles-of-an-oriented-link-diagram`, `lem-finite-chart-surface-normal-forms-supply-jordan-disks-and-torsion-free-groups`, `def-oriented-crossing-sign-writhe-and-blackboard-framing`, `thm-linking-number-equals-signed-intersection`, `def-countable-choice`, `thm-choice-implies-dependent-implies-countable-choice`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the link-level matrix calculation and skein computation are present, but determinant surface independence and the Conway invariant conclusion remain conditional on the unresolved spanning-surface relation.

**Proof contract:** `owner-escalation`; 4 numbered derivations, 17 supplier excerpts, 8 boundary checks, 2 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries","status":"owner-escalation","required_hypotheses":"Every pair of connected spanning surfaces for a given link are related by a finite sequence of ambient isotopies and arc surgeries.","affected_claims":["Surface/basis independence of D_L(u).","Existence and uniqueness of the Conway-normalized link invariant."],"evidence":"Facts [L1]/[A2], steps 2.1 and 4.1, and the Unresolved proof obligation make the dependency explicit."}
- The theorem’s surface-independence and normalized Conway-polynomial clauses remain conditional on the unresolved spanning-surface relation.

**Source support:** W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Theorems 8.5–8.6: determinant normalization and Conway skein relation; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### lem-levine-tristram-one-sided-averages-exist

**Kind / dependency level:** lemma / 14.

**Claim (verbatim):**

Assume the hypotheses and conventions of the Levine–Tristram form definition. At every root $\omega_0\in S^1\setminus\{1\}$ of $\Delta_K$, each one-sided limit of the nonroot signature as the parameter moves along the unit circle to $\omega_0$ exists and is an integer.

**Direct dependencies:** `def-levine-tristram-hermitian-form-and-signature`, `lem-levine-tristram-hermitian-form-singular-set`, `lem-square-seifert-presentation-and-alexander-normalization`, `lem-complex-hermitian-eigenvalues-lipschitz`, `thm-intermediate-value`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the finite-matrix one-sided sign argument is complete, but the statement is phrased for the knot invariant from the Levine–Tristram definition, whose surface independence is unresolved.

**Proof contract:** `owner-escalation`; 2 numbered derivations, 7 supplier excerpts, 8 boundary checks, 0 finite checks.

**Unresolved contract obligations:**
- {"supplier":"def-levine-tristram-hermitian-form-and-signature","status":"owner-escalation","required_hypotheses":"A well-defined knot signature independent of chosen surface/basis, as required for the function whose one-sided root limits are stated.","affected_claims":["The one-sided limit of the knot invariant sigma_{e^{i theta}}(K) at every Alexander root."],"evidence":"The definition’s matrix formula is locally usable, but its knot-invariance claim is justified by the stabilization lemma, which inherits the unresolved S-equivalence supplier."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477) (§2.4: one-sided average at an Alexander root; inline; §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.; https://arxiv.org/pdf/1903.04477).

#### lem-arf-seifert-determinant-congruence-near-minus-one

**Kind / dependency level:** lemma / 15.

**Claim (verbatim):**

Assume full AC. Let $K$ be a smooth oriented knot of genus $g$, let $V$ be a Seifert matrix in an integral symplectic basis, and let $\Delta_K^\#(t)$ be the unique symmetric Alexander normalization with $\Delta_K^\#(1)=1$. In the quotient ring $\mathbb F_2[t,t^{-1}]/(1+t)^4$,
$$\Delta_K^\#(t)=1+\operatorname{Arf}(K)\frac{(1+t)^2}{t}.$$

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `def-knot-arf-invariant-from-seifert-form`, `lem-arf-quadratic-enhancement-from-seifert-form`, `lem-seifert-matrix-skew-part-is-surface-intersection`, `def-seifert-s-equivalence-and-conway-normalization`, `lem-conway-polynomial-from-seifert-determinant`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `cor-knot-alexander-normalization-symmetry-and-genus-bound`, `def-alexander-polynomial-from-the-first-elementary-ideal`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the finite determinant expansion is complete, but its knot Arf and normalized Conway inputs depend on escalated surface-independence suppliers.

**Proof contract:** `owner-escalation`; 3 numbered derivations, 9 supplier excerpts, 8 boundary checks, 1 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-arf-quadratic-enhancement-from-seifert-form","status":"owner-escalation","required_hypotheses":"A well-defined knot Arf invariant, independent of symplectic basis and spanning surface.","affected_claims":["The Arf coefficient in the normalized Alexander-polynomial congruence."],"evidence":"The local determinant expansion is complete, but its named Arf supplier is escalated on surface independence."}
- {"supplier":"lem-conway-polynomial-from-seifert-determinant","status":"owner-escalation","required_hypotheses":"A well-defined normalized Conway polynomial/determinant independent of surface.","affected_claims":["Identification of the determinant coefficient with the normalized Alexander/Conway expression."],"evidence":"The Conway determinant supplier is escalated because its surface-independence step uses L1."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A, Seifert-form convention; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555 (§5: determinant expansion near t=-1; inline; §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf).

#### lem-seifert-stabilization-preserves-levine-tristram-signature

**Kind / dependency level:** lemma / 15.

**Claim (verbatim):**

Assume full AC. For every $\omega\in S^1\setminus\{1\}$, changing an ordered basis by an integral unimodular congruence or changing a knot Seifert matrix by either elementary enlargement or reduction preserves the signature of $H_\omega$. Consequently, the nonroot Levine–Tristram signature and its one-sided-average value at every Alexander root are independent of the spanning surface and basis.

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `def-seifert-matrix-s-equivalence`, `lem-seifert-matrices-of-a-knot-are-s-equivalent`, `def-levine-tristram-hermitian-form-and-signature`, `lem-levine-tristram-one-sided-averages-exist`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: congruence and enlargement invariance are proved, but surface-independence of knot matrices requires the unresolved S-equivalence supplier.

**Proof contract:** `owner-escalation`; 3 numbered derivations, 6 supplier excerpts, 8 boundary checks, 0 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-seifert-matrices-of-a-knot-are-s-equivalent","status":"owner-escalation","required_hypotheses":"Any two knot Seifert matrices from different spanning surfaces are connected by congruences and the two elementary enlargements.","affected_claims":["Surface independence of nonroot Levine–Tristram signatures.","Surface independence of the one-sided-average root values."],"evidence":"Steps 1.1–2.1 prove matrix-move invariance; step 3.1 invokes the escalated arbitrary-surface S-equivalence lemma."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A, Seifert form convention; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 8, Theorem 8.4, printed pp. 81–82; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).

#### thm-seifert-s-equivalence-and-conway-arf-bridge

**Kind / dependency level:** theorem / 16.

**Claim (verbatim):**

Assume full AC. The Seifert quadratic enhancement and its Arf value are independent of the spanning surface and integral symplectic basis of an oriented knot $K$. Under the convention $\Delta_K(t)=\nabla_K(t^{1/2}-t^{-1/2})$ with $\Delta_K(1)=1$, the coefficient $a_2(\nabla_K)$ of $z^2$ satisfies
$$\operatorname{Arf}(K)\equiv a_2(\nabla_K)\pmod2.$$

**Direct dependencies:** `def-knot-seifert-pairing-and-matrix`, `lem-seifert-matrices-of-a-knot-are-s-equivalent`, `thm-seifert-determinant-is-the-knot-alexander-polynomial`, `def-knot-arf-invariant-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `lem-arf-quadratic-enhancement-from-seifert-form`, `lem-conway-polynomial-from-seifert-determinant`, `lem-arf-seifert-determinant-congruence-near-minus-one`, `cor-knot-alexander-normalization-symmetry-and-genus-bound`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the local Conway/Arf comparison is supplied, but the full bridge depends on unresolved knot S-equivalence and Conway surface independence.

**Proof contract:** `owner-escalation`; 2 numbered derivations, 6 supplier excerpts, 8 boundary checks, 0 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-seifert-matrices-of-a-knot-are-s-equivalent","status":"owner-escalation","required_hypotheses":"The arbitrary-surface S-equivalence theorem for knot Seifert matrices.","affected_claims":["Arf surface/basis independence."],"evidence":"Fact F1 and step 1.1 invoke the escalated S-equivalence result."}
- {"supplier":"lem-conway-polynomial-from-seifert-determinant","status":"owner-escalation","required_hypotheses":"Surface-independent normalized Conway determinant and skein invariant.","affected_claims":["The normalized Conway coefficient a2 used in the conclusion."],"evidence":"Facts F3–F4 and step 2.1 use the escalated Conway determinant lemma."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** Dale Rolfsen, Knots and Links, complete 450-page book PDF (§8.A, Seifert-form convention; inline; §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf); W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 10, Definitions 10.3, Proposition 10.4, and Theorem 10.7, printed pp. 105–108; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf); R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555 (§§3–5: Arf and determinant conventions; inline; §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf); Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition (§9.2: Arf invariant and Alexander coefficient; inline; §9.2, printed pp. 112–114 (PDF pp. 124–126): quadratic refinement, Arf invariant, and Alexander-polynomial coefficient; complete 220-page book inspected.; https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf).

#### thm-arf-equals-second-conway-coefficient-mod-two

**Kind / dependency level:** theorem / 17.

**Claim (verbatim):**

Assume full AC and let $K$ be a smooth oriented knot in the standard oriented $3$-sphere. With the normalized Conway polynomial $\nabla_K(z)=1+a_2(K)z^2+a_4(K)z^4+\cdots$ and the Seifert-form definition of $\operatorname{Arf}(K)$,
$$\operatorname{Arf}(K)=a_2(K)\pmod2.$$

**Direct dependencies:** `thm-seifert-s-equivalence-and-conway-arf-bridge`, `def-knot-arf-invariant-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the corollary applies the escalated Seifert–Conway–Arf bridge theorem.

**Proof contract:** `owner-escalation`; 2 numbered derivations, 4 supplier excerpts, 8 boundary checks, 0 finite checks.

**Unresolved contract obligations:**
- {"supplier":"thm-seifert-s-equivalence-and-conway-arf-bridge","status":"owner-escalation","required_hypotheses":"The full surface-independent Conway–Arf bridge theorem.","affected_claims":["The stated Arf(K)=a2(K) mod 2 equality."],"evidence":"Fact F2 and step 1.1 apply the escalated bridge theorem."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror (Chapter 10, Theorem 10.7, printed p. 108; inline; Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.; https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf).
### Page: levine-tristram-signatures-and-arf-invariant-examples

#### cex-knot-kt-12-boundary-case

**Kind / dependency level:** counterexample / 15.

**Claim (verbatim):**

Assume full AC. The false statement is: “For every $\omega\in S^1\setminus\{1\}$, the Levine–Tristram Hermitian matrix of every knot is nonsingular.” The positive trefoil matrix at a primitive sixth root is singular. At that root the nondegenerate signature calculation does not apply; the defined knot invariant is the one-sided-average value.

**Direct dependencies:** `def-levine-tristram-hermitian-form-and-signature`, `lem-levine-tristram-hermitian-form-singular-set`, `lem-levine-tristram-one-sided-averages-exist`, `ex-knot-kt-07-worked-cases`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: the singular trefoil matrix is computed directly, but the statement’s knot-invariant root-average clause depends on the unresolved Levine–Tristram surface-independence interface.

**Proof contract:** `owner-escalation`; 2 numbered derivations, 6 supplier excerpts, 8 boundary checks, 1 finite checks.

**Unresolved contract obligations:**
- {"supplier":"def-levine-tristram-hermitian-form-and-signature","status":"owner-escalation","required_hypotheses":"A well-defined surface-independent root-average Levine–Tristram knot invariant.","affected_claims":["The claim that the knot invariant at the singular parameter is the defined average."],"evidence":"Steps 1.1–2.1 prove singularity directly; root-average existence and surface independence depend on escalated signature suppliers."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477) (§2.1–2.4: Levine–Tristram convention; inline; §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.; https://arxiv.org/pdf/1903.04477); Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477) (§2.1 and §2.4: Hermitian form and root-average signature; inline; §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.; https://arxiv.org/pdf/1903.04477).

#### ex-knot-kt-12-worked-cases

**Kind / dependency level:** example / 18.

**Claim (verbatim):**

Assume full AC. Use the positive-push Seifert matrices
$$V_T=\begin{pmatrix}1&0\\-1&1\end{pmatrix},\qquad V_F=\begin{pmatrix}1&0\\-1&-1\end{pmatrix}$$
for the positive trefoil and the figure-eight knot, respectively. At $\omega=-1$, their Levine–Tristram signatures are $2$ and $0$. In the displayed symplectic bases both quadratic forms have $q(a)=q(b)=1$, so both Arf invariants are $1$. Their normalized Conway polynomials are $1+z^2$ and $1-z^2$, respectively.

**Direct dependencies:** `def-levine-tristram-hermitian-form-and-signature`, `lem-seifert-stabilization-preserves-levine-tristram-signature`, `def-knot-arf-invariant-from-seifert-form`, `thm-arf-equals-second-conway-coefficient-mod-two`, `lem-arf-quadratic-enhancement-from-seifert-form`, `def-seifert-s-equivalence-and-conway-normalization`, `lem-conway-polynomial-from-seifert-determinant`, `ex-knot-kt-07-worked-cases`, `def-axiom-of-choice`.

**Step 1 decision:** `escalated`; stored item/dependency hash matches current content; Escalated: all matrix arithmetic is checked directly, but the signature, Arf, and normalized Conway claims as knot invariants rely on surface-independence suppliers that remain escalated.

**Proof contract:** `owner-escalation`; 2 numbered derivations, 8 supplier excerpts, 8 boundary checks, 2 finite checks.

**Unresolved contract obligations:**
- {"supplier":"lem-seifert-stabilization-preserves-levine-tristram-signature","status":"owner-escalation","required_hypotheses":"Surface/basis independence of the signature at omega=-1.","affected_claims":["Calling the computed surface values Levine–Tristram knot signatures."],"evidence":"The finite eigenvalue computations in step 1.1 are direct; item-level signature invariance depends on the escalated stabilization lemma."}
- {"supplier":"thm-arf-equals-second-conway-coefficient-mod-two","status":"owner-escalation","required_hypotheses":"Surface-independent Arf/Conway coefficient relation.","affected_claims":["The knot Arf values and agreement with odd Conway coefficients."],"evidence":"Fact F3 and step 2.1 cite the escalated Arf coefficient theorem."}
- {"supplier":"lem-conway-polynomial-from-seifert-determinant","status":"owner-escalation","required_hypotheses":"Surface-independent determinant construction of the normalized Conway polynomial.","affected_claims":["The displayed normalized Conway polynomials as knot invariants."],"evidence":"Fact F4 and step 2.1 use the escalated Conway determinant lemma."}
- Resolve the listed supplier obligations before marking the full statement ready.

**Source support:** Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes (§6.2.3, Example 6.2.11 and Proposition 6.2.12: trefoil surface and matrix; inline; §6.2.3, Example 6.2.11 and Proposition 6.2.12, printed pp. 44–47: genus-one trefoil surface and Seifert matrix; complete 53-page PDF inspected.; https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf); R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555 (§§3–5: quadratic Seifert form and Arf value; inline; §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.; https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf).

## Source reference ledger

### levine-tristram-signatures-and-arf-invariant

- **Dale Rolfsen, Knots and Links, complete 450-page book PDF** (textbook). URL: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/rolfsen.pdf. Locator: §8.A, printed pp. 200–203: knot Seifert-form, positive-push, and basis-change conventions; the link generalization is proved in this batch.
  - §8.A: Seifert-form conventions and surface dependence → `lem-seifert-matrices-of-a-knot-are-s-equivalent` — included; The source does not prove the full arbitrary-surface S-equivalence argument used by this item..
  - §8.A: positive-push pairing and matrix convention → `def-link-seifert-pairing-and-matrix` — inline; The knot convention is used as source context; the assigned carrier explicitly proves the link-surface well-definedness locally..
  - §8.A: Seifert form and surface dependence → `lem-link-seifert-pairing-well-defined` — inline; Read the knot-level pairing convention; the assigned link-level homology descent proof is supplied locally..
  - §8.A, linking and Seifert-form conventions → `lem-total-linking-equals-intersection-with-link-seifert-surface` — inline; The one-knot convention is contextual; the multi-component total-linking/interface proof is supplied locally..
  - §8.A, Seifert surface and embedded surgery convention → `def-seifert-surface-arc-surgery` — inline; The local item gives the complete product-cylinder definition and its orientation condition..
  - §8.A, Seifert form convention → `lem-seifert-stabilization-preserves-levine-tristram-signature` — inline; The block-signature calculation is local; this source supports the positive-push pairing context..
  - §8.A, Seifert form context → `def-seifert-s-equivalence-and-conway-normalization` — inline; The item defines its own S-equivalence and skein normalization; this source is contextual..
  - §8.A, Seifert-form convention → `lem-arf-seifert-determinant-congruence-near-minus-one` — inline; The Arf determinant expansion is proved locally; this source supports the Seifert-form convention..
  - §8.A, Seifert-form convention → `thm-seifert-s-equivalence-and-conway-arf-bridge` — inline; The bridge is proved locally and cross-checked against separate Arf sources..
- **W. B. Raymond Lickorish, An Introduction to Knot Theory, complete book PDF mirror** (textbook). URL: https://ebooks.karbust.me/Mathematics/W.%20B.%20Raymond%20Lickorish%20-%20An%20Introduction%20to%20Knot%20Theory%20%281997%29%20%5B978-1-4612-0691-0%5D.pdf. Locator: Chapter 8, Definition 8.1 and Theorems 8.2, 8.4–8.6, printed pp. 79–83; Chapter 10, Theorem 10.7, printed p. 108.
  - Chapter 8, Theorem 8.2: surface-surgery relation for spanning surfaces → `lem-seifert-matrices-of-a-knot-are-s-equivalent` — inline; The local enlargement calculation is supplied in the item; the mirror source’s full surface-surgery proof was inspected, but the current library supplier still has unresolved projection and intersection-decrease steps..
  - Chapter 8, Theorem 8.2: surface-surgery relation for spanning surfaces → `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries` — inline; The full proof was read. The carrier records a conditional cut-and-paste argument and remains escalated for unresolved general-position and strict-decrease justifications..
  - Chapter 8, Theorem 8.4: elementary Seifert matrix enlargements → `lem-link-seifert-matrix-enlargement-under-arc-surgery` — inline; The source supports the local enlargement interface; the assigned carrier proves the link-rank version directly..
  - Chapter 8, Theorems 8.5–8.6: determinant normalization and Conway skein relation → `lem-conway-polynomial-from-seifert-determinant` — inline; The full argument was inspected. The source uses the opposite sign for the formal skein variable, so this carrier fixes and proves its own positive-crossing sign convention..
  - Chapter 8, Definition 8.1, printed p. 79 → `def-seifert-surface-arc-surgery` — inline; The item states the cylinder surgery and orientation convention directly..
  - Chapter 8, §8.A, printed pp. 79–83 → `def-link-seifert-pairing-and-matrix` — inline; Link-pairing representatives and well-definedness are proved locally, with the cited source supplying the standard matrix convention..
  - Chapter 8, Theorem 8.4, printed pp. 81–82 → `lem-seifert-stabilization-preserves-levine-tristram-signature` — inline; The source gives the two elementary enlargement types; the signature block calculation is local..
  - Chapter 8, Definition 8.3 and Theorem 8.4, printed pp. 80–82; Chapter 10, Theorem 10.7, printed p. 108 → `def-seifert-s-equivalence-and-conway-normalization` — inline; S-equivalence and Arf/Conway context; the item specifies its sign convention..
  - Chapter 10, Definitions 10.3, Proposition 10.4, and Theorem 10.7, printed pp. 105–108 → `thm-seifert-s-equivalence-and-conway-arf-bridge` — inline; Independent Arf/Conway treatment; the local bridge proof is also cross-checked against Robertello and Saveliev..
  - Chapter 10, Theorem 10.7, printed p. 108 → `thm-arf-equals-second-conway-coefficient-mod-two` — inline; Independent treatment of the Arf and second Conway coefficient relation..
- **Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477)** (survey). URL: https://arxiv.org/pdf/1903.04477. Locator: §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.
  - §2.1 and §2.4: Hermitian convention, Alexander roots, and root-average signature → `def-levine-tristram-hermitian-form-and-signature` — inline; The plan’s averaged-at-roots convention is taken from §2.4 and distinguished from the pointwise singular-matrix signature..
  - §2.1: singular parameters of the Hermitian form → `lem-levine-tristram-hermitian-form-singular-set` — inline; The source supplies the Hermitian/Alexander-root convention; the determinant equivalence is proved locally..
  - §2.4: one-sided average at an Alexander root → `lem-levine-tristram-one-sided-averages-exist` — inline; The survey states the averaged convention; the existence of each one-sided limit is proved locally..
  - §2.1–2.4: Levine–Tristram convention → `cex-knot-kt-12-boundary-case` — inline; The primitive-sixth-root example is checked directly from the trefoil matrix..
- **R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555** (paper). URL: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf. Locator: §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.
  - §§3–4: quadratic enhancement and Arf basis expression → `lem-arf-quadratic-enhancement-from-seifert-form` — inline; The local proof independently derives well-definedness, the Gauss-sum identity, and stability under enlargement..
  - §5: determinant expansion near t=-1 → `lem-arf-seifert-determinant-congruence-near-minus-one` — inline; The local permutation expansion is complete and identifies its Arf coefficient through the finite Gauss sum..
  - §§3–5: Arf and determinant conventions → `thm-seifert-s-equivalence-and-conway-arf-bridge` — inline; The locally proved bridge uses Robertello’s normalization as an independent comparison..
  - §§3–4: Seifert quadratic form and Arf basis formula → `def-knot-arf-invariant-from-seifert-form` — inline; The definition states the quadratic form and basis formula; the assigned helper supplies well-definedness and surface independence..
- **Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition** (textbook). URL: https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf. Locator: §9.2, printed pp. 112–114 (PDF pp. 124–126): quadratic refinement, Arf invariant, and Alexander-polynomial coefficient; complete 220-page book inspected.
  - §9.2: Arf invariant and Alexander coefficient → `thm-seifert-s-equivalence-and-conway-arf-bridge` — inline; Independent book treatment of the Arf/Alexander coefficient relation; the assigned proof retains its own S-equivalence and normalization hypotheses..
- **Morris W. Hirsch, Differential Topology, Graduate Texts in Mathematics 33, Springer 1976** (textbook). URL: https://web.archive.org/web/20230823153633/https://luis.impa.br/aulas/anvar/Hirsch_DifferentialTopology.pdf. Locator: Chapter 8, §1, Theorem 1.3, printed p. 180: compact-submanifold isotopy extension; full PDF retrieved and the theorem proof inspected.
  - Chapter 8, §1, Theorem 1.3: isotopy extension for compact submanifolds → `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries` — inline; The dimension-correct theorem was inspected as a possible local supplier, but no relative-boundary extension proof was authored; the surface-surgery claim remains escalated..

### levine-tristram-signatures-and-arf-invariant-examples

- **Alessia Cattabriga and Stefano Francaviglia, Knot Theory and Applications: Lecture Notes** (lecture-notes). URL: https://www.dm.unibo.it/~francavi/did/21-22/knot.pdf. Locator: §6.2.3, Example 6.2.11 and Proposition 6.2.12, printed pp. 44–47: genus-one trefoil surface and Seifert matrix; complete 53-page PDF inspected.
  - §6.2.3, Example 6.2.11 and Proposition 6.2.12: trefoil surface and matrix → `ex-knot-kt-12-worked-cases` — inline; The trefoil matrix is independently identified; all signatures, Arf values and determinants are recalculated in the assigned example..
- **R. Robertello, An Invariant of Knot Cobordism, Communications on Pure and Applied Mathematics 18 (1965), 543–555** (paper). URL: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/robertel.pdf. Locator: §§3–5, printed pp. 546–552: Seifert quadratic form, Arf basis formula, and determinant expansion modulo (2,(1+t)^4); all seven scanned pages visually inspected.
  - §§3–5: quadratic Seifert form and Arf value → `ex-knot-kt-12-worked-cases` — inline; The finite genus-one Arf calculations are checked directly in the assigned example..
- **Anthony Conway, The Levine–Tristram signature: a survey, Matrix Annals 2016 (arXiv:1903.04477)** (survey). URL: https://arxiv.org/pdf/1903.04477. Locator: §2.1, printed pp. 3–4: Hermitian form and Alexander-root determinant relation; §2.4, printed p. 7: averaged signature at roots; complete 18-page PDF inspected.
  - §2.1 and §2.4: Hermitian form and root-average signature → `cex-knot-kt-12-boundary-case` — inline; The counterexample directly verifies singularity at a primitive sixth root and uses the averaged-root convention..


## Readiness and mathematical blockers

- Native target-item check: 20 records present; 6 `ready`, 14 `escalated`; all 6 ready hashes match their current item/dependency content. Thirteen escalated hashes also match. The existing escalation for `lem-seifert-matrices-of-a-knot-are-s-equivalent` has a stale hash and was deliberately preserved: its stored dependency list contains `lem-seifert-matrix-s-enlargement-preserves-algebraic-concordance-class`, which is absent from the current manifest, and its reason still mentions the recorded Levine–Tristram page cycle. The current item and proof contract retain the actual S-equivalence blocker. No escalated record was overwritten and `--owner` was not used.
- The 15 proof contracts cover all proof-bearing items: 4 are `complete-local-proof`, 11 are `owner-escalation`. Their refresh reported no missing supplier excerpts, step tags, or unused citations. Definitions use `proof_strategy: not-applicable` and have no proof contract.
- The unresolved supplier is `lem-seifert-surfaces-of-same-link-are-related-by-arc-surgeries`. Its claim is retained. The current proof has a conditional cut-and-paste route but does not establish (i) a dimension-correct isotopy extension for a 2-dimensional spanning surface in a 3-dimensional ambient manifold fixed along the common link boundary; (ii) the boundary-relative transverse arrangement and collar separation; (iii) injectivity of the projection of the selected maximal-deck-translate region; or (iv) a boundary-compatible primal/dual neighborhood construction that removes incident intersection curves and proves a strict decrease in their finite count. The available `lem-isotopy-extension-for-a-compact-source-with-boundary` statement does not supply the required dimension and relative-boundary hypotheses. The later cut-and-paste steps are not claimed as proved.
- Proposed local A-page suppliers to place before that lemma and its consumers are: (a) `lem-boundary-relative-isotopy-and-transverse-arrangement-of-spanning-surfaces`, with the link fixed and collars controlled; (b) `lem-maximal-deck-slab-region-projects-embeddedly`, proving the selected region projects injectively under the stated covering hypotheses; and (c) `lem-relative-primal-dual-neighbourhoods-remove-intersection-curves`, with a complete boundary-compatible triangulation and finite allowed-move construction proving strict decrease. These are proposed interfaces only, not authored or accepted items. Their exact dependencies must be fixed from complete proofs.
- This gap blocks `lem-seifert-matrices-of-a-knot-are-s-equivalent`, knot-level surface independence in `def-knot-arf-invariant-from-seifert-form` and `lem-arf-quadratic-enhancement-from-seifert-form`, the surface-independent signature in `def-levine-tristram-hermitian-form-and-signature` and `lem-seifert-stabilization-preserves-levine-tristram-signature`, the Conway assignment/determinant conclusion in `def-seifert-s-equivalence-and-conway-normalization` and `lem-conway-polynomial-from-seifert-determinant`, `lem-arf-seifert-determinant-congruence-near-minus-one`, the Seifert–Conway–Arf bridge and its coefficient theorem, and the knot-invariant clauses in both B-page examples. Those claims remain intact and escalated.
- The convention at Alexander roots is the arithmetic mean of the two one-sided limits, as required by KT-12 and checked against Conway §2.4, printed p. 7. Pointwise signature of a singular Hermitian matrix is not substituted for the averaged knot invariant. Full AC remains explicit on the assigned claims that require it; the choice-free surface-surgery definition is unchanged.

## Validation and run state

- `node tools/proof-layout.mjs` on the 20 batch-67 items: **20 items, 44 steps, 0 defects**.
- Complete-statement link scan: **20 items, 0 statement-reference violations**; references remain in their following reference sections.
- Scoped dependency calculation across current run manifests: **1,104 run items; 20 batch-67 items; 0 target errors**. Levels are recorded in the batch manifest and exact item ledger. Cross-batch item edges are 37, plus 2 page edges; all 39 evidence rows match the final manifest and are marked `verified`.
- `source-fetch-check --stamp`: **9/9 fetch-verified**, 0 newly stamped; **0 documented drops**. Coverage checklist: **2 pages, 32 harvested results, 0 errors, 1 advisory** described above. Both page bodies are empty.
- The full `node tools/item-dependency-levels.mjs check --run inverse-problems-knot-theory-all-109-2026-10-19` remains red outside this batch: 18 empty scaffold inventories on later knot-theory pages (`open-frontiers-in-learned-inverse-problems`, `casson-gordon-invariants-and-sliceness-obstructions`, `freedman-theorem-and-topological-sliceness`, `satellite-operators-and-knot-concordance-filtrations`, `tau-invariant-and-the-four-ball-genus`, `epsilon-and-upsilon-concordance-invariants`, `character-varieties-and-the-a-polynomial`, `open-questions-in-knot-polynomials-and-surgery`, and `zero-traces-and-conway-nonsliceness`, each with its examples page), plus `cex-knot-kt-21-boundary-case` labelled level 15 when its current dependencies compute to 17. No other pair was edited.
- Recomputed autopilot status at 2026-10-19 05:06:56 UTC: run still `1-scaffold`, **88/109** page pairs covered, nothing in flight. It lists missing batches 32, 47, 51, 52, 67, 71, 72, 73, and 13 others; blockers remain the owner repair/recertification gate in `research/inverse-problems-knot-theory-all-109-2026-10-19-step1-blockers.json` and the unit prerequisite cycle `74 → 76 → 74`. Latest git HEAD is `50139bdcb6` (`Defer compact construction artifact scans until author drain`). This batch does not mark the run closed or its claims approved.

## External arithmetic defect retained for owner review

`ex-knot-kt-06-worked-cases` reports an incorrect congruence for
\(V=\begin{pmatrix}1&0\\-1&1\end{pmatrix}\) and
\(P=\begin{pmatrix}1&1\\2&3\end{pmatrix}\). Since \(\det P=1\), direct multiplication gives
\(P^TVP=\begin{pmatrix}3&5\\4&7\end{pmatrix}\), while the reported matrix is
\(\begin{pmatrix}-1&5\\-2&7\end{pmatrix}\). The latter has skew part \(7J\), although congruence by this determinant-one matrix preserves the skew part \(J\). Batch 67 therefore uses the verified `ex-knot-kt-07-worked-cases` supplier. The external item was not edited.

## Handoff action

Owner: supply and verify the three proposed boundary-relative surface/region results (or an equally complete alternate proof), then reconcile the S-equivalence item and its existing stale escalated readiness record without overwriting that record from this beta scope. Reconcile the preserved source-coverage owner note as well. Only after those prerequisites are complete can the dependent knot invariants and examples be considered ready. Separately resolve the later-batch inventory/level errors and autopilot blockers through their owners.
