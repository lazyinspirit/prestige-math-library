# Step 5a Reader Report — Batch 1

Run: `frontier-35-ten-categories`  
Role: `reader-1`  
Batch: `1`

## Opened inventory

The run status recomputed from `.autopilot/frontier-35-ten-categories` showed
the run still in `5a-read`, with batch 1 lacking a result. The assigned files
were all draft/in-flight carriers.

Pages opened:

- `library/combinatorics/finite-abelian-characters-for-combinatorics.md` (A)
- `library/combinatorics/finite-abelian-characters-for-combinatorics-examples.md` (B)
- `library/combinatorics/erdos-hajnal-for-the-e-graph-and-bird.md` (A)
- `library/combinatorics/erdos-hajnal-for-the-e-graph-and-bird-examples.md` (B)

Items opened:

- Finite abelian characters: `def-additive-character-of-a-finite-abelian-group`, `lem-additive-characters-are-one-dimensional-complex-representations`, `lem-additive-character-orthogonality-from-representation-orthogonality`, `ex-characters-of-z-mod-five-and-their-orthogonality`.
- E-graph and Bird: `lem-the-e-graph-and-the-bird-are-leaf-reducible`, `cor-the-e-graph-is-generalized-nice`, `thm-the-e-graph-has-the-erdos-hajnal-property`, `cor-the-singleton-family-containing-bird-has-property-star`, `cor-the-bird-graph-is-generalized-nice`, `thm-the-bird-graph-has-the-erdos-hajnal-property`, `ex-the-e-graph-theorem-properly-extends-the-p-five-case`, `ex-the-bird-theorem-properly-extends-the-bull-case`.

I opened the exact statement or definition clauses used from the items on
groups and homomorphisms, complex fields and units, representations and
characters, splitting fields, traces, finite orders, roots of unity, complex
exponentials, finite sums, modular arithmetic, graph definitions, induced
embeddings and free classes, leaf-reducibility, Erdős–Hajnal constants,
property `(*)`, generalized niceness, structural comb partitions, and the
published reduction theorems. I also opened the full published proofs of
`lem-h-five-and-co-e-free-family-has-the-erdos-hajnal-property` and
`cor-the-singleton-family-containing-e-has-property-star`, plus the exact
statement clauses of their other load-bearing dependencies.

## Mathematics and source checks

The character dictionary preserves the distinction between homomorphisms
`G → C×` and traces of arbitrary representations. The one-dimensional bridge,
finite-order modulus argument, and inequivalence claim follow from the opened
representation dependencies. Orthogonality applies the published
irreducible-character relation after the bridge lemma; its linear-first
convention matches the displayed formula. The `Z/5Z` example's representative,
homomorphism, exhaustiveness, table, and row calculations are correct.

For independent source checks, Etingof et al., *Introduction to Representation
Theory*, §3.3 Example 1 (PDF p. 35) states that finite abelian group
representations over `C` are one-dimensional and gives the cyclic characters
`m ↦ exp(2πim/n)`; Theorem 3.8 (PDF p. 37) gives irreducible-character
orthogonality. The source is
[the MIT lecture notes](https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/24d8b3fa2ce48e48ee6c2d8d5e3562f6_MIT18_712F10_replect.pdf).
The cited Webb PDF could not be retrieved by the browser, so I used the
accessible primary lecture notes and the library's exact dependency statements
instead.

The graph-chain applications retain their hypotheses and complement direction.
The `E` property-`(*)` application uses the co-`E` structural partition; the
Bird application uses the co-Bird-free partition. The latter source lemma is
explicitly co-Bird-free despite the preceding subsection text saying Bird-free.
The leaf deletions give `P5` and the bull, respectively. The generalized-nice
and generic Erdős–Hajnal reductions apply to the same singleton families used
in the statements, so both headlines yield unspecified positive exponents.
The two examples correctly prove strict containment of the forbidden-pattern
classes by five-vertex witnesses.

I checked the cited primary paper, Huang, Ju, and Zhou, *Erdős–Hajnal beyond
the five-vertex path*, version 2:

- §1.4, Theorems 1.10–1.11, HTML lines 133–142;
- §4, Lemma 4.5, lines 808–855;
- §5, Lemma 5.1, lines 859–915;
- §6.1, Lemma 6.4, lines 975–1048;
- §6.2, Lemma 6.5, lines 1049–1126.

The exact source is
[arXiv:2606.06258v2](https://arxiv.org/html/2606.06258v2). The cited statements
support the assigned special-vertex criteria, both structural partitions, and
the two headline conclusions.

## Edit

In `items/lem-additive-character-orthogonality-from-representation-orthogonality.md`,
I replaced the finite-sum dependency and the two finite-sum citations to
`def-sum-over-a-finite-index-set` with
`def-finite-sum-in-a-commutative-monoid`. The former definition only covers
real- or natural-valued summands, while these sums have complex summands. The
generic commutative-monoid definition covers the required finite complex sums.
No `verification.judge` record was present to remove. Reflow completed with
`unchanged`; precheck passed: `1 checked, 0 failing`.

## Uneditable findings

1. `items/def-standard-inner-product-on-complex-class-functions.md:35`
   explicitly identifies its sum of complex-valued class-function products
   with `def-sum-over-a-finite-index-set`, whose domain is limited to real or
   natural summands. The correct generic complex-sum definition is available,
   so this is a nonfatal citation/contract gap. The assigned consumer is
   `lem-additive-character-orthogonality-from-representation-orthogonality`.
2. `library/combinatorics/finite-abelian-characters-for-combinatorics-examples.md:13`
   calls `Z/5Z` the “smallest cyclic group of prime order.” `Z/2Z` is cyclic of
   prime order 2 and is smaller, so the page claim is false. This is nonfatal
   to the example's mathematics.

## Verdict by page

- `finite-abelian-characters-for-combinatorics`: Pass. The item citation repair
  is recorded above; the published inner-product citation gap is routed as a
  finding.
- `finite-abelian-characters-for-combinatorics-examples`: Nonfatal page-prose
  defect at line 13; the character table and calculations are sound.
- `erdos-hajnal-for-the-e-graph-and-bird`: Pass. The co-`E` and co-Bird
  quantifiers, singleton families, and exponent conclusions are preserved.
- `erdos-hajnal-for-the-e-graph-and-bird-examples`: Pass. Both strict class
  containments and witnesses are correct.

## Blocker and coverage note

No blocker prevented the assigned review or the authorized item repair. I read
all four assigned pages and all twelve assigned items, and checked the exact
dependency statements/definitions and source passages recorded above. I did
not re-audit every proof in the transitive published library closure; the
reported conclusions rely on the published dependency proofs where their exact
statements apply. The Webb PDF retrieval failure is the only source limitation;
the MIT primary notes resolve the representation-theory claims independently.
