---
id: op-classical-kpi-artin-tits-normalisers
kind: open-problem
title: Classical K(pi,1) conjecture
status: draft
domain: mathematics
origin: pipeline
deps:
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-classical-complement-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - math:def-eilenberg-maclane-space
  - prop-tits-cone-basic-artin-tits-normalisers
  - prop-classical-cover-artin-tits-normalisers
  - lem-author-5a1e77100001-order-complex-model
  - lem-author-5a1e77100001-linear-action
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - prop-cover-asphericity-interface-artin-tits-prerequisites
  - math:def-homotopy-equivalence
  - math:def-universal-covering-space
  - math:def-higher-homotopy-group-by-based-cubes
dependency_roles:
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  def-classical-complement-artin-tits-normalisers: mathematical-premise
  def-artin-pure-lifts-artin-tits-normalisers: mathematical-premise
  math:def-eilenberg-maclane-space: mathematical-premise
  prop-tits-cone-basic-artin-tits-normalisers: mathematical-premise
  prop-classical-cover-artin-tits-normalisers: mathematical-premise
  lem-author-5a1e77100001-order-complex-model: mathematical-premise
  lem-author-5a1e77100001-linear-action: mathematical-premise
  thm-salvetti-topology-input-artin-tits-prerequisites: mathematical-premise
  prop-cover-asphericity-interface-artin-tits-prerequisites: mathematical-premise
  math:def-homotopy-equivalence: mathematical-premise
  math:def-universal-covering-space: mathematical-premise
  math:def-higher-homotopy-group-by-based-cubes: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: §1.1, PDF p.1; §2.2, PDF pp.4–5; Proposition 3.6 proof, PDF p.9
      statement: The article asks whether its classical quotient is a classifying
        space for its Artin–Tits group and reports the conjecture open in
        general; it describes the dual representation as a reflection
        representation in the sense of Vinberg.
      hypotheses: The article notation for the Coxeter system and classical
        complement, without a spherical-type restriction. A finite-rank
        geometric reading is explained explicitly in Source notes.
      reading_limits: Read the extracted introduction and cited background passages
        and visually inspected original PDF pp.4 and9. Attribution and
        source-time status only; no independent proof input from the article is
        claimed.
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      locator: §§1.1–1.3, printed pp.3–5 / PDF pp.27–29
      statement: The Coxeter graph is defined from an n by n Coxeter matrix with nodes
        {1,...,n}; the group may be infinite; its dual reflection space has the
        finite dual simple-root basis and the positive chamber is open.
      hypotheses: Finite vertex set, arbitrary Coxeter labels, without requiring the
        Coxeter group finite.
      reading_limits: Read extracted §§1.1–1.3 for these rank and representation
        conventions; no subsequent theorem or proof is imported.
    - title: Luis Paris, K(pi,1) conjecture for Artin groups
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: Introduction, printed pp.361–362; §1, pp.363–365; §3.1 Theorem 3.1,
        p.386; §3.2 Theorem 3.3 and Corollary 3.4, pp.393–394; §3.3 quotient
        cell construction, p.398, and Theorem 3.10, p.400; §4.1 Proposition 4.2,
        p.401 (PDF pp.2–6,27,34–35,39,41–42)
      statement: For finite S, the Coxeter Salvetti order complex is W-equivariantly
        homeomorphic to the arrangement Salvetti complex. Its W-quotient has one
        cell of dimension |T| for each T contained in S with W_T finite, using
        the projected characteristic maps described in §3.3. It is homotopy
        equivalent to the classical product-complement quotient. Its universal
        covering space is supplied by Proposition 4.2. The introduction uses
        Eilenberg–Mac Lane space also for manifolds of CW homotopy type.
      hypotheses: Finite S; finite-dimensional dual reflection representation forming
        a Vinberg system, with its nonempty open convex Tits-cone interior and
        locally finite Coxeter arrangement. W need not be finite; infinite
        Coxeter labels and disconnected graphs are allowed. The general
        arrangement comparison alone does not give a quotient comparison for
        arbitrary group actions.
      reading_limits: In this adjudication, read the web-extracted introduction, §1
        finite-S and arrangement conventions, Theorem 3.1 statement, §§3.2–3.3
        at the stated construction and comparison passages, and §4.1 through
        Proposition 4.2. The comparison and universal-cover theorems are
        imported under their stated hypotheses; their full proofs were not
        reconstructed. No asphericity or 2026 claimed-solution proof is
        imported. The quotient-cell paragraph was read in extracted text; its
        requested web screenshot was unavailable.
    - title: OpenAI, Harmonic heights and the Artin K(pi,1) conjecture
      url: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Harmonic-heights-and-the-Artin-K-pi-1-conjecture-September-23-2026/paper.pdf
      locator: September 23, 2026; Theorem 1.1, PDF p.2; §§2.1–2.4, PDF pp.6–9; §9.4,
        PDF p.58
      statement: The manuscript claims that the universal cover of the full standard
        Salvetti complex is contractible for every Coxeter matrix on a finite
        set of generators, allowing infinite labels and disconnected diagrams.
      hypotheses: Finite generating set; the associated Coxeter group need not be finite.
      reading_limits: The complete 62-page PDF was downloaded. Read abstract,
        introduction, Theorem 1.1, §§2.1–2.4 and §9.4. The categorical proof in
        §§3–8 and most of §9 was not independently validated. This records a
        claimed solution, not an established proof premise.
    - title: MathVet, openai-math challenge status and fidelity table
      url: https://github.com/mathvet/mathvet/blob/14c7f918cd336d0da03a02aae5a0eed4a429d4db/reviews/openai-math/challenge-status.csv
      locator: HarmonicArtin row; corresponding family 254 row in fidelity-table.csv
        at the same commit
      statement: The HarmonicArtin challenge has a reported comparator-sandboxed-pass
        on October 8, 2026. The family fidelity row describes the lifted
        spherical-cell nerve as a hand-built model whose intended Salvetti
        interpretation must be checked.
      hypotheses: The report concerns the exact finite-S Lean challenge and the cited
        release commit, not an arbitrary-rank geometric complement.
      reading_limits: Downloaded and read the actual HarmonicArtin challenge-status
        row and family254 fidelity-table row. No independent replay of the
        reported computation or entire proof closure was performed.
    - title: Carlos Toledo, cert-machine openai-math kernel audit
      url: https://github.com/carlostoledo1891/cert-machine/blob/9814e4c06281e34a113ce853d7d99ccce160b750/certs/openai-math-kernel.json
      locator: HarmonicArtin entry, run38019899278 at 2026-10-10T14:00:12Z; top-level
        what and decider
      statement: The audit reports comparator exit zero, zero definition holes and
        acceptance by Lean and nanoda kernels for the exact HarmonicArtin
        challenge. Its declared scope distinguishes the formal statement from
        the paper interpretation.
      hypotheses: Exact comparator statement and release commit; the report does not
        by itself certify the paper-to-model interpretation.
      reading_limits: Downloaded and read this entry and scope qualifications. The
        computation was not replayed here and the model-to-geometric-complement
        equivalence was not independently validated.
formulation_deps:
  - def-coxeter-arrangement-artin-tits-normalisers
  - def-classical-complement-artin-tits-normalisers
  - def-artin-pure-lifts-artin-tits-normalisers
  - math:def-eilenberg-maclane-space
  - prop-tits-cone-basic-artin-tits-normalisers
  - prop-classical-cover-artin-tits-normalisers
  - lem-author-5a1e77100001-order-complex-model
  - lem-author-5a1e77100001-linear-action
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - prop-cover-asphericity-interface-artin-tits-prerequisites
  - math:def-homotopy-equivalence
  - math:def-universal-covering-space
  - math:def-higher-homotopy-group-by-based-cubes
argument_deps:
  - prop-tits-cone-basic-artin-tits-normalisers
  - prop-classical-cover-artin-tits-normalisers
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - prop-cover-asphericity-interface-artin-tits-prerequisites
  - math:def-homotopy-equivalence
  - math:def-eilenberg-maclane-space
dependency_level: 8
---

## Open problem

In the finite-rank geometric convention, let $(W,S)$ be a Coxeter system with $S$ finite; $W$ need not be finite. Let $\mathcal X^{\mathbb C}$ be its classical complexified complement, put $Y=\mathcal X^{\mathbb C}/W$, choose $Z\in\mathcal X^{\mathbb C}$, and let $\overline Z\in Y$ be its orbit. Use the Artin–Tits group $A=\pi_1(Y,\overline Z)$ with its supplied identification with the presented Artin group. Is $Y$ aspherical, meaning $\pi_n(Y,\overline Z)=0$ for every $n\geq2$?

Equivalently, does this specified quotient $Y$ have the homotopy type of a $K(A,1)$, with the fundamental-group identification transported to the CW model? This is the article's classifying-space question in the usual homotopy-type sense. The question concerns $Y$ itself; the existence of some unrelated $K(A,1)$ does not answer it.

## Open problem references

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[def-classical-complement-artin-tits-normalisers]]

[[def-artin-pure-lifts-artin-tits-normalisers]]

[[math:def-higher-homotopy-group-by-based-cubes]]

[[prop-cover-asphericity-interface-artin-tits-prerequisites]]

[[math:def-eilenberg-maclane-space]]

[[math:def-homotopy-equivalence]]

## Salvetti model

For this item, write $K_W=\operatorname{Sal}(\mathrm{Cone}^{\circ},\mathcal H)$ for the full simplicial CW complex of [[lem-author-5a1e77100001-order-complex-model]]: its vertices are the incident facet–chamber pairs, its simplices are their finite chains in the supplied Salvetti poset, and its realization has the weak topology. Use the $W$-action induced by $w(F,C)=(wF,wC)$ from [[lem-author-5a1e77100001-linear-action]]. Define the full standard Artin Salvetti complex in this subdivided convention to be $\operatorname{Sal}_A=K_W/W$, with the quotient topology. All dimensions of $K_W$ are included.

The finite-rank cone is convex and the arrangement is locally finite by [[prop-tits-cone-basic-artin-tits-normalisers]]; the proof of [[prop-classical-cover-artin-tits-normalisers]] identifies this dual reflection system as a Vinberg system. Thus the Coxeter quotient comparison of [[thm-salvetti-topology-input-artin-tits-prerequisites]] applies to these exact objects and gives a homotopy equivalence $\operatorname{Sal}_A\to Y$.

## External input

Paris, §3.2 Theorem 3.3 and §3.3, identifies the preceding quotient with the standard Artin Salvetti CW space. Its cell decomposition has one cell of dimension $|T|$ for every $T\subseteq S$ such that $W_T=\langle T\rangle$ is finite; the attaching maps are the projections of the characteristic maps of the Coxeter Salvetti cells described on printed p.398. This includes every spherical subset, rather than only the presentation 2-skeleton. The quotient is a CW complex, though generally not a regular CW complex. This construction is imported from that independent source.

A universal cover $p:\widetilde{\operatorname{Sal}}_A\to\operatorname{Sal}_A$ means a covering map with simply connected total space, as in [[math:def-universal-covering-space]]. Paris, §4.1 Proposition 4.2, supplies such a cover for this full complex. Contractible means that its identity map is homotopic to a constant map, equivalently that the space is homotopy equivalent to a point in the sense of [[math:def-homotopy-equivalence]]. Neither the existence of this cover nor the construction of the complex asserts that it is contractible.

## Formulation conventions

The established comparison above supplies CW homotopy type for $Y$. Asphericity and the equivalence between vanishing higher homotopy groups and having the homotopy type of a $K(A,1)$ use [[prop-cover-asphericity-interface-artin-tits-prerequisites]], [[math:def-higher-homotopy-group-by-based-cubes]], [[math:def-eilenberg-maclane-space]] and [[math:def-homotopy-equivalence]]. The chosen $\overline Z$ and the identification $A=\pi_1(Y,\overline Z)$ come from [[def-artin-pure-lifts-artin-tits-normalisers]]; the cited asphericity supplier explains how an unbased homotopy equivalence transports this identification by a basepoint path. No CW structure on the underlying quotient $Y$ is required by this formulation.

## Status

The frozen article, dated July 30, 2026, reports this conjecture open in general in §1.1. This is its historical status statement.

A subsequent manuscript, *Harmonic heights and the Artin K(pi,1) conjecture* (September 23, 2026), claims in Theorem 1.1 that $\widetilde{\operatorname{Sal}}_A$, the universal cover of the full standard Artin Salvetti complex specified above, is contractible for every finite set of standard generators, including infinite Coxeter groups, infinite edge labels and disconnected diagrams. The full complex, including its higher cells, is essential to that claim.

As checked on November 13, 2026, the MathVet HarmonicArtin row reports a successful comparator run, and the cert-machine HarmonicArtin entry reports acceptance by both Lean and nanoda kernels of the exact formal challenge. These are independent reported machine checks of a specified formal model. The fidelity and kernel reports distinguish that model from its intended interpretation as the geometric space in the conjecture.

The present status is therefore recorded as a claimed solution with independent machine-check reports, under mathematical evaluation here. This item supplies neither a proof of the claimed solution nor an unconditional assertion that the conjecture remains open or has been settled. It is retained as the article's question with an explicit status qualification and supplies no proof premise to established items.

## Source notes

The original §1.1 says that the quotient is conjecturally a classifying space, starting from a Coxeter system without an explicit rank phrase. The finite-rank convention above makes explicit the geometric setting used by the local complement and Artin-group definitions. The article's §2.2 follows Iyama–Wemyss for the dual reflection space and invokes Vinberg's reflection framework; its Proposition 3.6 proof uses finite dimension. Iyama–Wemyss §§1.1–1.3 explicitly use an $n\times n$ Coxeter matrix and nodes $\{1,\ldots,n\}$. Paris §1 likewise defines Coxeter graphs on finite sets and Vinberg systems in finite dimension. This supports a finite-rank reading of the geometric question while preserving every Coxeter type; it is not a claim that the article explicitly stated a global rank assumption.

The algebraic definition of a Coxeter system can also allow infinitely many generators. No infinite-rank geometric complement or equivalence to a Salvetti colimit is specified or asserted here. Extending the literal geometric formula to that setting would require additional topological conventions and a verified equivalence; the finite-rank machine-check reports do not provide that extension.

The source reading was limited to the passages and files specified in the citation metadata. In particular, the complete categorical proof and Lean dependency closure of the 2026 claim were not independently validated, and the reported kernel checks were not replayed. The established Salvetti comparison is used here to supply CW homotopy type and to fix the conventional complex named in the status report. It is not used to convert the 2026 claim into an accepted theorem. The historical source-reading limits in the unchanged status citations are retained; the present adjudication's additional Paris reading is recorded separately in that reference's metadata.
