---
id: thm-reidemeister-enumeration-is-only-a-semidecision
kind: theorem
title: "Reidemeister enumeration is only a semidecision"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
deps:
  - alg-breadth-first-reidemeister-search
  - alg-reidemeister-move-neighbors-from-code
  - alg-enumerate-diagrams-up-to-crossing-bound
  - thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties
  - thm-planar-code-validation-and-diagram-reconstruction-procedure-properties
  - thm-valid-code-reconstructs-the-declared-link-diagram
  - thm-oriented-reidemeister-equivalence-theorem
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Finite candidate lists, local code comparisons, and breadth layers are choice-free. ACω is used only for valid-code planar-isotopy semantics and the ambient-isotopy-to-finite-Reidemeister-sequence implication."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Danny Calegari, Introduction to Knot Theory, University of Chicago course notes (2025), §§1.2–1.3"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§1.2–1.3, printed pp. 5–8, finite Reidemeister sequences and knot invariants."
    - title: "Justin Roberts, Knots Knotes, Edinburgh course notes (1999), §2.3, pp. 10–13"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf"
      locator: "§2.3, Reidemeister theorem, finite move paths, and the unbounded crossing issue."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Countable Choice. Let $C_0,C_1$ be valid normalized oriented planar-diagram codes for connected one-component knot diagrams. The breadth-first Reidemeister search terminates with a finite move witness whenever the represented oriented knots are ambient-isotopic. If they are inequivalent, the search has no negative-output branch and does not halt with a negative answer; failure to find a path through any fixed finite depth $N$ says only that no path of length at most $N$ has yet been found. This is a semidecision result, not a decision or complexity-class result for knot equivalence.

## Statement references

[[alg-breadth-first-reidemeister-search]]

[[alg-reidemeister-move-neighbors-from-code]]

[[alg-enumerate-diagrams-up-to-crossing-bound]]

[[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]]

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]

[[thm-valid-code-reconstructs-the-declared-link-diagram]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-countable-choice]]

[Calegari, *Introduction to Knot Theory* (2025), §§1.2–1.3](https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf)

[Roberts, *Knots Knotes* (1999), §2.3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/knotes.pdf)

## Facts & Assumptions

**Given:** The Axiom of Countable Choice and two valid normalized oriented planar-diagram codes for connected one-component knot diagrams.

[A1] [[def-countable-choice]]: $\mathrm{AC}_\omega$ is the axiom of countable choice.

[F1] [[alg-reidemeister-move-neighbors-from-code]]: on a code with $c$ crossings, the neighbor procedure enumerates all valid code candidates through crossing bound $c+2$ and retains exactly those with a finite local R1, R2, R3, or planar-isotopy certificate.

[F2] [[alg-enumerate-diagrams-up-to-crossing-bound]]: for a nonnegative bound $N$, the procedure enumerates normalized connected one-component codes with at most $N$ crossings by finite sign-vector, dart-pairing, face-selector, and validation loops.

[F3] [[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]]: the bounded enumerator terminates and includes every normalized connected one-component code through the supplied crossing bound; it does not identify knot types.

[F4] [[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]: validation of each finite code terminates and reconstructs its oriented diagram exactly when the listed code and face conditions hold.

[F5] [[thm-valid-code-reconstructs-the-declared-link-diagram]]: under $\mathrm{AC}_\omega$, a valid connected one-component code reconstructs its declared diagram, and code relabelings describe the same planar-isotopy class.

[F6] [[alg-breadth-first-reidemeister-search]]: each layer is tested against the target, then expanded by the finite neighbor procedure; the algorithm stores predecessor certificates and has no negative-output branch.

[F7] [[thm-oriented-reidemeister-equivalence-theorem]]: under $\mathrm{AC}_\omega$, two ambient-isotopic oriented diagrams are related by a finite sequence of planar isotopies and oriented Reidemeister moves.

## Proof

1.1 Fix a code $C$ with $c$ crossings. The neighbor procedure uses bound $c+2$. By [F2] and [F3], this yields a finite candidate list containing every normalized connected one-component code with at most $c+2$ crossings. Each candidate has finitely many crossing labels, edge labels, and local edge intervals; the number of relabelings, subsets of at most three local crossings, boundary orders, and move variants is finite. Each candidate validation terminates by [F4]. Thus the neighbor list is finite and its local comparisons terminate. [F1, F2, F3, F4, given, construct]

2.1 If the neighbor procedure returns $(E,\mu)$, its certificate $\mu$ records either a code relabeling or a local code replacement matching one of the oriented Reidemeister variants, so [F4] and [F5] identify the represented diagrams up to planar isotopy and that one local move. Conversely, any single R1, R2, or R3 move changes the crossing count by at most two. Its result therefore appears among the candidates bounded by $c+2$ by [F3]. The move disk has two, four, or six boundary endpoints and at most three local crossing records; these are among the finite sites and variants checked by [F1]. Relabeling its finite code data is also among the finite bijections tested. Hence every one-move neighbor is returned. [F1, F3, F4, F5, step 1.1]

2.2 The initial breadth frontier is a singleton. If a frontier is finite, [F1] and step 1.1 give a finite neighbor list for each of its members; a finite union of finite lists is finite. By induction every layer is finite and is processed in finite time, including an empty layer, which the algorithm repeats without returning a negative answer. [F1, F6, step 1.1, induction]

3.1 If the search returns a path, every adjacent pair has a certificate from [F1]. By step 2.1 each such pair differs by planar isotopy or one oriented Reidemeister move; concatenating the finitely many certificates gives a finite move sequence between the input diagrams. The easy direction of [F7] therefore gives ambient isotopy. [F1, F5, F6, F7, step 2.1, construct]

3.2 If the represented oriented knots are ambient-isotopic, [A1] and [F7] give a finite sequence of planar isotopies and oriented Reidemeister moves. By [F5], each intermediate diagram has a valid normalized code class. By step 2.1, the code class after each move appears in the corresponding neighbor list. Induction on the finite path length therefore places the target code class in a finite breadth layer; by step 2.2 that layer finishes, and [F6] returns the path. [A1, F5, F6, F7, step 2.1, step 2.2, induction]

4.1 The algorithm has no negative-output branch by [F6]. If no finite move path exists, it never returns Found(path); any finite-depth run that has not found the target establishes only that no path of that bounded length was found. The finite enumeration proves no decision or complexity-class conclusion. Finite neighbor generation and breadth-layer processing are choice-free; $\mathrm{AC}_\omega$ is used only in [F5] and [F7] to interpret code and ambient-isotopy equivalence. [A1, F5, F6, F7, step 2.2] ∎

## Sources

[[alg-breadth-first-reidemeister-search]]

[[alg-reidemeister-move-neighbors-from-code]]

[[alg-enumerate-diagrams-up-to-crossing-bound]]

[[thm-enumerate-diagrams-up-to-crossing-bound-procedure-properties]]

[[thm-planar-code-validation-and-diagram-reconstruction-procedure-properties]]

[[thm-valid-code-reconstructs-the-declared-link-diagram]]

[[thm-oriented-reidemeister-equivalence-theorem]]

[[def-countable-choice]]
