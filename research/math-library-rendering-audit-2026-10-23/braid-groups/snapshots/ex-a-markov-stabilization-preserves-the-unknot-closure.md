---
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    delegated_by: "owner via frontier-38-owner-30 build dispatch"
    scope: "Historical completed Step 5 full authored item reading and mathematical acceptance; exact historical raw bytes differ from current only by publication status and verification metadata. Direct prerequisite interfaces checked; no recursive audit of supplier proofs."
    evidence:
      - "research/frontier-38-owner-30-reader-17.md"
      - "research/frontier-38-owner-30-alpha-batch-17-5a.md"
      - "research/frontier-38-owner-30-step5-hash-17-post-5a.json"
    content_sha256: "25a1800f49735e8665e63f487793d14eb4e42301f850dde9c6bfec6ea88d93a6"
id: ex-a-markov-stabilization-preserves-the-unknot-closure
kind: example
title: "A Markov stabilization preserves the unknot closure"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-markov-moves-preserve-oriented-closure-isotopy,
       def-markov-conjugation-and-stabilization-moves, def-closure-of-a-geometric-braid,
       def-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; section 2.3 and the stabilization figures, printed pp. 17-19"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; section 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Example

Assume $\mathrm{AC}_\omega$. The trivial braid $e\in B_1$ closes to the unknot, and both stabilizations
$e\sigma_1$ and $e\sigma_1^{-1}$ in $B_2$ also close to the unknot; the explicit
isotopies are the R1 unwinding of the added kink, one for each sign. Here the
**unknot** is the closure of the trivial one-strand braid.

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$, the trivial braid $e\in B_1$, its two stabilizations $e\sigma_1=e\sigma_1^{+}$, $e\sigma_1^{-1}\in B_2$ in the sense of [[def-markov-conjugation-and-stabilization-moves]], and the closure construction of [[def-closure-of-a-geometric-braid]].

[F1] Stabilization adjoins one new strand on the right carrying the half twist $\sigma_1^{\pm1}$, we use the particular ambient isotopy constructed in proof step 1.2 of [[lem-markov-moves-preserve-oriented-closure-isotopy]], which moves the added circle and an old-strand collar to a fixed-framing ball near the axis and exhibits the signed kink. The strand insertion and literal closure have the conventions of [[def-markov-conjugation-and-stabilization-moves]] and [[def-closure-of-a-geometric-braid]].

[F2] Assume $\mathrm{AC}_\omega$: a stabilization preserves the oriented closure up to equivalence, because the added strand differs from the trivial strand by a kink which is unwound by one Reidemeister I isotopy; both signs of the kink are covered by the two signs of the stabilization ([[lem-markov-moves-preserve-oriented-closure-isotopy]]).

[F3] The trivial one-strand braid closes to a single circle about the axis, the round unknot, and the closure of a braid with one cycle of its endpoint permutation has one component ([[def-closure-of-a-geometric-braid]]).

## Verification

1.1 **The closures of the stabilizations.** By the preliminary ambient positioning in [F1], the two fixed-framing closures have representatives which are the round unknot with respectively a positive and a negative kink. Both closures are one-component links by [F3], since the endpoint permutation of each stabilization of $e$ is the transposition of the two strands. [F1, F3, algebra]

2.1 **The R1 isotopies.** The explicit isotopy for the positive sign is the R1 move that pulls the kink straight inside a small ball neighbourhood of the kink, keeping the rest of the closed braid fixed; for the negative sign the mirror isotopy unrolls the opposite kink. In both cases the R1 move is realized by an ambient isotopy by [F2], so the closure of each stabilization is equivalent to the closure of the trivial braid, the unknot. [F2, step 1.1]

3.1 **Conclusion.** Both stabilizations $e\sigma_1$ and $e\sigma_1^{-1}$ in $B_2$ close to the unknot, with the explicit R1 isotopies of the two signs; the example illustrates that stabilization preserves the closure in the simplest possible case. [F2, F3, step 1.1, step 2.1] ∎
