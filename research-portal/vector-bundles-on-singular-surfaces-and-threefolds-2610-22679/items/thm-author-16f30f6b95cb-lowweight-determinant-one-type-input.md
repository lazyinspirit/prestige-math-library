---
id: thm-author-16f30f6b95cb-lowweight-determinant-one-type-input
kind: theorem
title: External determinant and pointed one-type inputs
status: published
domain: mathematics
deps:
  - lem-affine-perfect-k-zero-bridge
  - lem-unit-section-of-k-one-determinant
  - lem-nisnevich-line-bundle-torsors
  - lem-adjudicate-f6007757a8ac-actual-determinant-stack-map
  - math:def-axiom-of-choice
dependency_roles:
  lem-affine-perfect-k-zero-bridge: mathematical-premise
  lem-unit-section-of-k-one-determinant: mathematical-premise
  lem-nisnevich-line-bundle-torsors: mathematical-premise
  lem-adjudicate-f6007757a8ac-actual-determinant-stack-map: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
provenance:
  statement: literature-derived
  proof: literature-derived
external_input: true
sources:
  references:
    - title: "Finn Knudsen and David Mumford, The projectivity of the moduli space of
        stable curves I: Preliminaries on det and Div"
      url: https://journals.msp.org/mscand/article/download/2000/1999
      locator: Chapter I pp.20–21,31; Definition2 p.37 and remark p.38; Definition4
        pp.40–42 including p.41 footnote; Theorem2 p.42; Corollary2 p.43 and
        warning p.44
      statement: The extended determinant has additivity for true triangles and
        compatible derived pullback. Its restriction to bounded finite locally
        free complexes is the alternating graded determinant. This is not
        unrestricted functorial additivity for all ordinary
        distinguished-triangle diagrams.
      hypotheses: Arbitrary schemes and perfect complexes in the paper’s sense, with
        quasi-isomorphisms inverted; derived pullback preserves perfection.
        Graded lines and their sign symmetry are retained before passing to rank
        zero. Triangle data are true triangles of VT, as in Definition2; the
        ordinary-triangle corollary on p.43 separately assumes perfect
        cohomology.
      reading_limits: "Prior author reading record: Read these exact scanned full-text
        pages visually, including all axioms of Definition 4 and Theorem 2’s
        stated existence/uniqueness. Also inspected pp.23,26,28,30–36 and38–43.
        Theorem 2’s printed proof is a short reduction using Proposition 4,
        whose proof is left to the reader; no reconstructed full
        determinant-functor proof or general higher-categorical enhancement is
        claimed. This assignment visually checked pp.20–21,31,37–38,40–44 in the
        cached primary scans. The actual K-space bridge is supplied separately
        by the new Waldhausen input and map lemma."
    - title: Charles Weibel, The K-book
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.IV.pdf
      locator: Example IV.4.4.2, p.39; together with Chapter II §2 (local K₀=Z) and
        Chapter III Lemma1.4 (commutative semilocal K₁=units)
      statement: The determinant FUNCTOR induces an actual map from affine K-spaces to
        the Picard K-space, giving the usual determinant on both π₀ and π₁.
        Local K₀ is Z and local K₁ is the unit group by determinant.
      hypotheses: Commutative rings for determinant; commutative local or semilocal
        rings for the K₁ calculation. The completed run suppliers identify the
        actual affine π₀/π₁ maps with these classical models.
      reading_limits: "Retained prior reading record: The prior author read IV.4.4.2
        in full, II §2’s explicit local-ring calculation, and III Lemma1.4 and
        its full displayed proof. An earlier assignment reread IV.4.4.2 in the
        cached primary Chapter IV PDF, using the other local calculations
        through existing suppliers. The source’s actual determinant map, not
        only the abstract Picard homotopy groups, is used. The present
        citation-scope adjudication did not reread Chapters II–IV."
    - title: Charles Weibel, The K-book, Chapter V, contextual descent statement
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.V.pdf
      locator: §10 introduction and Example10.3, p.72; Nisnevich discussion and
        Theorem10.10, p.76; Example10.10.1, p.77
      statement: Example10.10.1 states Nisnevich descent for KB and attributes it to
        Thomason–Trobaugh 10.8. Example10.3 calls KB the nonconnective K-theory
        spectrum of vector bundles. This is contextual background; the current
        determinant stack map is supplied separately.
      hypotheses: §10 introduces descent over a finite-dimensional noetherian scheme
        X; its Nisnevich discussion uses schemes of finite type over X. This
        citation is used within that context, without attributing an
        unrestricted perfect-complex descent formulation to this example.
      reading_limits: "Retained prior record: The author read V Example10.10.1 and
        context; the Thomason–Trobaugh proof was not reconstructed. Present
        adjudication: Read the primary PDF text of printed pp.72,76–77, checking
        the named passages and attribution, also against the online Rutgers
        Chapter V text. The cached PDF has creation date 2012-09-05 and SHA256
        52dcc8ee3a1764e5ea309c59f093ac8e2a1ea64f3b94bacc05e6a2b6125b1da8. No
        Thomason–Trobaugh proof or broader descent theorem was read in this
        adjudication."
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Proposition 7.2.2.12(2) and displayed proof; Remark7.2.2.13 and
        Definition7.2.2.14
      statement: In an infinity-topos, pointed connected 1-truncated objects are
        equivalent, via π₁, to sheaves of groups. In particular pointed maps
        BG→BH correspond to homomorphisms G→H; truncation has its universal
        property for maps to 1-truncated targets.
      hypotheses: An infinity-topos; here the Nisnevich sheaves of spaces on Sm_k.
        BG_m is the stack of line bundles via their frame torsors.
      reading_limits: "Prior author reading record: Read the complete proposition and
        proof, plus the cited remark/definition. General
        infinity-topos/Postnikov foundations remain imported. Only the n=1 case
        is used. This assignment reread the named proposition, proof, remark and
        definition in primary HTT text extraction; no general topos foundations
        were reconstructed."
dependency_level: 15
---

## Statement
Assume the Axiom of Choice and the fixed compatible universe and site-size bounds of the supplied constructions.

The extended determinant functor on perfect complexes is canonically compatible with exact triangles and derived pullback; on bounded locally free representatives its graded line is the alternating tensor product of determinant lines, with alternating rank. It gives the usual natural determinant/Picard operation on rank-zero K-theory. This operation retains line-bundle descent morphisms; it is not obtained by comparing only affine Picard GROUPS. On affine K-spaces its actual determinant map has π₁ the ordinary matrix determinant, and on vector-bundle classes its π₀ map is the determinant line. In particular on Nisnevich local rings, $\pi_0K=\mathbb Z$ by rank and π₁K=$G_m$ by determinant. The completed affine K₀/K₁ suppliers specify the same maps in the run's enhanced nonconnective model.

Pointed connected 1-types in an infinity-topos are classified fully faithfully by their sheaves of fundamental groups. Thus for the Nisnevich sheaf S of rank-zero K-spaces, τ≤1S≃$BG_m$ is the determinant/Pic map: its π₁ identification is determinant, and its π₀ of global sections is the usual first Chern class c₁=class of the determinant line, including perfect-complex classes. Maps S→$BG_m$ are determined by this 1-type. On a vector bundle the actual map is the frame-torsor pushforward $GL_r$→$G_m$ by matrix determinant; on a perfect complex it is the extended determinant functor with its triangle/pullback coherence.

## Source contract

[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the stated universe and site-size bounds. These hypotheses are used through the actual determinant map in [F2], including its enhanced perfect-category small presentations, and through the unit-section and torsor suppliers. Stack maps use a compatible universe-bounded big Nisnevich site; line-frame identification and derived sections use the specified small sites in the torsor supplier.

**Given:** The specified K-model, Nisnevich sheaves of spaces, and perfect complexes on schemes; use the rank-zero fiber so that graded-line signs are handled before forgetting the rank. Assume Choice and the universe and site-size bounds in [A1].

**Goal:** Import the ordinary coherent determinant construction and the standard first-Postnikov description used below.

[F1] Knudsen–Mumford Definition4/Theorem2 supplies the extended determinant data for true triangles, with the alternating formula, graded sign symmetry and pullback composition isomorphisms. In the Statement, compatibility with exact triangles means this enhanced cofiber convention; it does not assert functoriality for arbitrary ordinary derived-triangle diagrams.

[F2] [[lem-adjudicate-f6007757a8ac-actual-determinant-stack-map]] supplies the actual natural determinant map on the present perfect K-space, including its descent data, object and automorphism maps. Its proof first uses the Waldhausen determinant universal one-type and the canonical enhanced K comparison, including degree zero under idempotent completeness. Weibel IV.4.4.2 gives the compatible elementary affine normalization; the existing local K₀/K₁ suppliers give rank and determinant. Thus a Postnikov calculation is used to identify an already constructed map, rather than to construct enhanced determinant coherence. The supplier’s descent step uses sheafification of its affine map into the graded-line stack. Weibel V.10.10.1 supplies only the contextual descent statement under the separately recorded source scope.

[F3] HTT Proposition7.2.2.12(2) supplies the pointed 1-type classification. It proves the Postnikov description after the local calculations in [F2]. The global determinant line is glued with its isomorphisms by [F1]; local triviality of a line bundle is not used to infer that its Picard class is zero globally.

## External input
Import [F1]–[F3] with their stated reading limits. The first-Postnikov description is the formal consequence of the connected rank-zero sheaf and π₁=$G_m$, with the identification fixed by the actual determinant construction. No new arbitrary coherent enhancement or equivalence is inferred from group-level affine comparisons.

## Precise source and enhancement scope
KM's true triangles are represented by actual short-exact complex diagrams in its derived diagram category. The forgetful functor to ordinary derived triangles loses morphism information (pp.37–38); the p.41 footnote requires genuine diagram commutativity. The p.43 ordinary-triangle corollary has a perfect-cohomology hypothesis, and p.44 warns against an unrestricted extension. These qualifications do not weaken the determinant/Picard operation needed here. The new actual-map supplier gives the required map before the first-Postnikov identification, with true/enhanced cofiber additivity. No published KM error is alleged.
