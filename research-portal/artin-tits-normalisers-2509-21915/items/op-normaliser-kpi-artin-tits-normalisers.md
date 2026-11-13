---
id: op-normaliser-kpi-artin-tits-normalisers
kind: open-problem
title: K(pi,1) conjecture for arbitrary normaliser quotients
status: published
domain: mathematics
origin: pipeline
deps:
  - def-normaliser-quotients-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - lem-normaliser-exact-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - math:def-eilenberg-maclane-space
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-homotopy-equivalence
  - lem-author-5a1e77100001-order-complex-model
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - math:def-universal-covering-space
  - math:def-nullhomotopic-map-and-contractible-space
dependency_roles:
  def-normaliser-quotients-artin-tits-normalisers: mathematical-premise
  def-relative-complement-artin-tits-normalisers: mathematical-premise
  lem-normaliser-exact-artin-tits-normalisers: mathematical-premise
  prop-relative-cover-artin-tits-normalisers: mathematical-premise
  math:def-eilenberg-maclane-space: mathematical-premise
  def-coxeter-arrangement-artin-tits-normalisers: mathematical-premise
  math:def-homotopy-equivalence: mathematical-premise
  lem-author-5a1e77100001-order-complex-model: mathematical-premise
  thm-salvetti-topology-input-artin-tits-prerequisites: mathematical-premise
  math:def-universal-covering-space: mathematical-premise
  math:def-nullhomotopic-map-and-contractible-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Normalisers of parabolic subgroups of Artin–Tits groups and Tits cone
        intersections
      url: https://arxiv.org/abs/2509.21915v3
      locator: Theorem 1.8 and equations (1.5)–(1.7), PDF p.3; Conjecture 1.10 and
        §2.2, PDF p.4; Proposition 3.6 proof, PDF p.9
      statement: Conjecture 1.10 says that Theorem 1.8 holds for any Coxeter group W.
        The theorem identifies the algebraic and geometric normaliser exact
        sequences, gives the two corresponding fundamental-group identifications
        and asserts the two relative spaces are classifying spaces; the proved
        theorem assumes W finite.
      hypotheses: The Coxeter system, arbitrary vertex subset J and relative
        arrangement of the article; the conjecture removes the theorem's
        spherical-type assumption. An inferred finite-rank geometric reading and
        the unresolved infinite-rank extension are explicitly distinguished in
        Source notes.
      reading_limits: This adjudication read the frozen extracted Theorem 1.8,
        Conjecture 1.10, §2.2 and Proposition 3.6 passages and visually
        inspected original PDF pp.3–4. Attribution and historical question only;
        no proof of the conjecture is imported.
    - title: Osamu Iyama and Michael Wemyss, Tits Cone Intersections and Applications
      url: https://www.maths.gla.ac.uk/~mwemyss/MainFile_for_web.pdf
      locator: §§1.1–1.3, printed pp.3–5 / PDF pp.27–29
      statement: The Coxeter graph is defined from an n by n Coxeter matrix with nodes
        {1,...,n}; the group may be infinite; its dual reflection space has the
        finite dual simple-root basis and the positive chamber is open.
      hypotheses: Finite vertex set, arbitrary Coxeter labels, without requiring the
        Coxeter group finite.
      reading_limits: "Preserved historical reading record: extracted §§1.1–1.3 were
        read for these rank and representation conventions; no subsequent
        theorem or proof was imported. This adjudication read the current
        finite-rank supplier and checked the independent Paris convention, but
        did not reread Iyama–Wemyss."
    - title: Luis Paris, K(pi,1) conjecture for Artin groups
      url: https://www.numdam.org/item/AFST_2014_6_23_2_361_0.pdf
      locator: §1, printed pp.363–366 and 368; §2.2, Theorem 2.5, p.379; §3.1,
        construction pp.385–386 and Theorem 3.1, p.386; §3.2, Theorem 3.3 and
        Corollary 3.4, pp.393–394; §3.3, cellular quotient construction p.398;
        §4.1, Proposition 4.2, p.401
      statement: For finite S, the canonical dual representation is a faithful Vinberg
        realization with the nonnegative coordinate chamber (Theorem 2.5). For a
        locally finite linear hyperplane arrangement in a nonempty open convex
        cone in a finite-dimensional real space, Sal(A) is the weak realization
        of finite chains in the poset of incident facet/chamber pairs (F,C),
        ordered by F contained in closure(G) and C_F contained in D_G. Theorem
        3.1 gives Sal(A) homotopy equivalent to the product complement and, for
        a Vinberg Coxeter arrangement, an equivariant comparison inducing a
        homotopy equivalence on W-quotients. Theorem 3.3 identifies this
        arrangement realization equivariantly with the Coxeter-system Salvetti
        realization built from all (w,T) with W_T finite; Corollary 3.4 gives
        its complement and quotient comparisons. The cellular quotient on p.398
        has one cell of dimension |T| for each T subset S with W_T finite, with
        attaching maps induced from the Coxeter-system realization. Proposition
        4.2 supplies the universal cover of the standard quotient Salvetti
        complex for every Coxeter graph.
      hypotheses: Finite vertex set S; canonical dual reflection representation for
        the application here. The arrangement theorem assumes distinct linear
        hyperplanes meeting a nonempty open convex cone I in finite dimension
        and locally finite in I. Its equivariant and quotient assertions require
        I to be the open Tits cone of a Vinberg system and A its reflection
        arrangement. No corresponding equivariance for arbitrary
        relative-normaliser actions or infinite-rank geometry is imported.
      reading_limits: This adjudication read the independent PDF text at the
        finite-rank and Vinberg definitions (pp.363–366), complement (p.368),
        Theorem 2.5 (p.379), full arrangement-poset definition and Theorem 3.1
        (pp.385–386), Coxeter-system definition, Theorem 3.3 and Corollary 3.4
        (pp.393–394), cellular quotient construction (p.398), and the statement
        and setup of Proposition 4.2 (p.401). These exact statements and
        definitions are imported; their proofs were not reconstructed. The
        source supplies the classical comparison, not asphericity or a solution
        of the normaliser conjecture.
    - title: OpenAI, Harmonic heights and the Artin K(pi,1) conjecture
      url: https://github.com/openai/math/blob/fd4aeeb2ee4fc729c18d98444fed42fd0529eeeb/preprints/Harmonic-heights-and-the-Artin-K-pi-1-conjecture-September-23-2026/paper.pdf
      locator: September 23, 2026; Theorem 1.1, PDF p.2; §§2.1–2.4, PDF pp.6–9; §9.4,
        PDF p.58
      statement: The manuscript claims that the universal cover of the full standard
        Salvetti complex is contractible for every Coxeter matrix on a finite
        set of generators, allowing infinite labels and disconnected diagrams.
      hypotheses: Finite generating set; the associated Coxeter group need not be finite.
      reading_limits: "Preserved historical reading record: The complete 62-page PDF
        was downloaded. Read abstract, introduction, Theorem 1.1, §§2.1–2.4 and
        §9.4. The categorical proof in §§3–8 and most of §9 was not
        independently validated. This records a claimed solution, not an
        established proof premise. This adjudication did not repeat that source
        reading or replay any computation; this report remains qualified as in
        the existing item."
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
      reading_limits: "Preserved historical reading record: Downloaded and read the
        actual HarmonicArtin challenge-status row and family254 fidelity-table
        row. No independent replay of the reported computation or entire proof
        closure was performed. This adjudication did not repeat that source
        reading or replay any computation; this report remains qualified as in
        the existing item."
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
      reading_limits: "Preserved historical reading record: Downloaded and read this
        entry and scope qualifications. The computation was not replayed here
        and the model-to-geometric-complement equivalence was not independently
        validated. This adjudication did not repeat that source reading or
        replay any computation; this report remains qualified as in the existing
        item."
dependency_level: 17
formulation_deps:
  - def-normaliser-quotients-artin-tits-normalisers
  - def-relative-complement-artin-tits-normalisers
  - lem-normaliser-exact-artin-tits-normalisers
  - prop-relative-cover-artin-tits-normalisers
  - math:def-eilenberg-maclane-space
  - def-coxeter-arrangement-artin-tits-normalisers
  - math:def-homotopy-equivalence
  - lem-author-5a1e77100001-order-complex-model
  - thm-salvetti-topology-input-artin-tits-prerequisites
  - math:def-universal-covering-space
  - math:def-nullhomotopic-map-and-contractible-space
argument_deps: []
---

## Open problem

The authors' Conjecture 1.10 is: “Theorem 1.8 holds for any Coxeter group $W$.” We retain that wording as the attributed question.

For its precise formulation in the finite-rank geometric convention of *Reflecting hyperplanes, fundamental chamber and Tits cone*, let $(W,S)$ be any Coxeter system with finite $S$, let $J\subseteq S$, and allow $W$ to be infinite. Use the groups $N(W,J)$, $N(A,J)$ and $N(P,J)$ of *Normalisers and their quotients*, and put $X=\mathcal X_J^{\mathbb C}$ for the relative complexified complement of *Relative complexified hyperplane complement*. Choose $x\in X$ and let $\bar x$ be its image in $X/N(W,J)$.

The algebraic sequence of *Normaliser quotient exact sequence* and the geometric covering sequence of *Relative free action, normal cover and exact sequence* are

$$1\longrightarrow N(P,J)\longrightarrow N(A,J)\longrightarrow N(W,J)\longrightarrow1$$

and

$$1\longrightarrow\pi_1(X,x)\longrightarrow\pi_1(X/N(W,J),\bar x)\longrightarrow N(W,J)\longrightarrow1.$$

The question asks whether these sequences identify over $N(W,J)$, giving compatible isomorphisms $\pi_1(X/N(W,J),\bar x)\cong N(A,J)$ and $\pi_1(X,x)\cong N(P,J)$, and whether the spaces have the respective classifying-space homotopy types. Precisely, the latter asks for connected based CW complexes $(K_A,k_A)$ and $(K_P,k_P)$ and homotopy equivalences $f_A:X/N(W,J)\to K_A$ and $f_P:X\to K_P$, with $f_A(\bar x)=k_A$ and $f_P(x)=k_P$, such that $K_A$ and $K_P$ are respectively $K(N(A,J),1)$ and $K(N(P,J),1)$ in the sense of *Eilenberg–Mac Lane space*. The specified fundamental-group isomorphisms of these CW models, composed with $(f_A)_*$ and $(f_P)_*$, must give the compatible isomorphisms just requested. Homotopy equivalence has the meaning of *Homotopy equivalences, homotopy inverses and spaces of the same homotopy type*.

Thus the full question retains both the fundamental-group identifications and the asphericity conclusions, expressed through CW homotopy models rather than an undeclared CW structure on the given geometric spaces. It concerns every subset $J$ and every finite-rank Coxeter type, without requiring spherical type.

## Open problem references

[[def-normaliser-quotients-artin-tits-normalisers]]

[[def-relative-complement-artin-tits-normalisers]]

[[lem-normaliser-exact-artin-tits-normalisers]]

[[prop-relative-cover-artin-tits-normalisers]]

[[math:def-eilenberg-maclane-space]]

[[def-coxeter-arrangement-artin-tits-normalisers]]

[[math:def-homotopy-equivalence]]

## Classical comparison

To specify the classical object in the Status, take $J=\varnothing$, $I=\mathrm{Cone}^{\circ}$ and the reflecting-hyperplane arrangement $\mathcal H$ of [[def-coxeter-arrangement-artin-tits-normalisers]]. Let $Z=\operatorname{Sal}(I,\mathcal H)$ be the simplicial CW model of [[lem-author-5a1e77100001-order-complex-model]]: its vertices are the incident facet/chamber pairs in the supplied poset and its simplices are its finite chains, with the weak realization topology. Use the induced $W$-action and the orbit topology of [[thm-salvetti-topology-input-artin-tits-prerequisites]], and put $\Sigma(W,S)=Z/W$.

Here $\Sigma(W,S)$ is a realization of the full standard Salvetti complex: the identification with the Coxeter-system model is Paris's Theorem 3.3, printed p.394. Its standard cell structure has one cell of dimension $|T|$ for every $T\subseteq S$ for which $W_T$ is finite, with attaching maps induced from that realization, as specified in Paris §3.3, printed p.398. All such subsets are included. Write $\widetilde\Sigma(W,S)\to\Sigma(W,S)$ for its universal covering, meaning a covering map with simply connected total space as in [[math:def-universal-covering-space]]. Existence for this standard complex is supplied by Paris §4.1, Proposition 4.2, printed p.401. Contractible has the meaning of [[math:def-nullhomotopic-map-and-contractible-space]].

Paris's Theorem 2.5, printed p.379, makes the finite-rank canonical dual representation a Vinberg realization with the coordinate chamber used here. Thus $I$ is its nonempty open Tits cone and $\mathcal H$ is its locally finite reflection arrangement. The classical comparison of [[thm-salvetti-topology-input-artin-tits-prerequisites]] gives $Z\simeq\mathcal X_{\varnothing}^{\mathbb C}$ and $\Sigma(W,S)\simeq\mathcal X_{\varnothing}^{\mathbb C}/W$; Paris's Corollary 3.4, printed p.394, records the same comparisons for the Coxeter-system model. These are the precise homotopy comparisons underlying the classical relevance mentioned below. They import no asphericity assertion and no equivariant comparison for a general relative normaliser quotient.

## Status

The frozen article presents Conjecture 1.10 as a conjectural extension of its Theorem 1.8, whose hypothesis is that $W$ is finite. This is the article's source-time distinction between theorem and conjecture; this item gives no proof of the extension and supplies no proof premise to established items.

There is a relevant later claim about the classical case. The September 23, 2026 manuscript *Harmonic heights and the Artin K(pi,1) conjecture*, Theorem 1.1, claims contractibility of the full standard Salvetti universal cover $\widetilde\Sigma(W,S)$ just specified for every finite set of standard generators. The MathVet HarmonicArtin row and cert-machine HarmonicArtin entry report independent successful machine checks of the exact formal model, including acceptance by Lean and nanoda in the latter report. These are reported checks, not computations replayed here; the paper-to-model interpretation and full proof were not independently validated in this investigation.

The classical claim is relevant to $J=\varnothing$, where the normaliser quotients reduce to the original groups and the relative arrangement becomes the classical one. Its stated theorem does not assert the sequence identifications or asphericity of all the relative arrangements for arbitrary $J$. No derivation of Conjecture 1.10 from that claim has been established here. The prior status record reports that a focused source search on November 13, 2026 found no independently verified general resolution of this normaliser question; this describes the search limits, not a proof of worldwide unresolved status. The present item retains the authors' question with current status under evaluation.

## Source notes

The phrase “any Coxeter group” in Conjecture 1.10 does not explicitly state a rank convention. The finite-rank geometric reading above is inferred from the article's framework and its cited foundations: §2.2 follows Iyama–Wemyss for the dual reflection space and calls it a Vinberg reflection representation, while the Proposition 3.6 proof invokes finite dimension. Iyama–Wemyss §§1.1–1.3 define the Coxeter graph on $\{1,\ldots,n\}$ using an $n\times n$ matrix; Paris §1 likewise starts with finite $S$ and defines Vinberg systems in finite dimension. The local complement and sequence suppliers make that convention explicit. This preserves all finite-rank Coxeter types and the full conjectural conclusions; it does not claim that the article expressly imposed a global finite-rank hypothesis.

An interpretation allowing infinitely many simple generators would need a topology on the full algebraic dual, an appropriate relative Tits-cone interior and an applicable covering-sequence formulation. No such infinite-rank geometric extension is supplied by the cited finite-dimensional conventions or by the recent classical claim. The original unrestricted wording is retained as attribution, and this extension remains unresolved here rather than being treated as proved or silently identified with a Salvetti colimit.

The exact source passages, reported machine-check entries and reading limits are recorded in the citation metadata. The 2026 classical proof and its Lean dependency closure were not independently validated, and no machine check was replayed. The status discussion does not import that claimed theorem as an established prerequisite for this open-problem item.

This adjudication rechecked the original formulation on PDF pp.3–4, the applicable Paris definitions and comparison statements, and the current local suppliers. It preserved the preceding qualified 2026 status reports; it performed no new status search, independent proof validation or machine replay. The two repaired interface omissions belonged to this generated draft, not to an established defect in the original PDF.
