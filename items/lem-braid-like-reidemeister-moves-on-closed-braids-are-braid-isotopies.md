---
id: lem-braid-like-reidemeister-moves-on-closed-braids-are-braid-isotopies
kind: lemma
title: "Braid-like Reidemeister moves on closed braids are braid isotopies"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-oriented-reidemeister-moves, def-closure-of-a-geometric-braid,
       lem-braid-isotopic-closed-braids-are-conjugate, def-braid-isotopy-relative-top-and-bottom,
       def-braid-group-by-the-artin-presentation,
       prop-the-artin-presentation-surjects-onto-geometric-braids,
       lem-geometric-far-commutativity, lem-geometric-three-strand-braid-relation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
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
    content_sha256: "8c93a6ec94bbfd935d873d1fcc0b63023a54a21fdbc67ee05a69effbba25f6f6"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Lemma 2.3 and section 2.3, printed pp. 19-21"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; Lemma 5"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
---

## Statement

Let $D,D'$ be closed braid diagrams whose Seifert pictures are nested chains,
and suppose $D'$ is obtained from $D$ by a braid-like Reidemeister move of type
II or III, by a planar isotopy, or by a sequence of such moves. Then the
corresponding closed braids are braid-isotopic in the sense of the conjugacy
bridge of [[lem-braid-isotopic-closed-braids-are-conjugate]], and the braids
read from $D$ and $D'$ are conjugate in $B_n$. Consequently every braid isotopy
appearing in a Markov sequence may be replaced by a conjugation move.

## Facts & Assumptions

**Given:** The closed braid diagrams and finite sequence of moves in the Statement; no choice axiom is assumed.

[F1] The braid-like II and III pictures have all participating local strands oriented in the same braid direction ([[def-oriented-reidemeister-moves]]).

[F2] The Artin presentation has inverse cancellation, far commutation, and the adjacent relation $\sigma_i\sigma_{i+1}\sigma_i=\sigma_{i+1}\sigma_i\sigma_{i+1}$ ([[def-braid-group-by-the-artin-presentation]]).

[F3] There is a choice-free homomorphism from the Artin presentation to geometric braids sending the generators to the fixed geometric half twists; the far and adjacent relations are realized by endpoint-fixed geometric braid isotopies ([[prop-the-artin-presentation-surjects-onto-geometric-braids]], [[lem-geometric-far-commutativity]], [[lem-geometric-three-strand-braid-relation]]).

[F4] A braid isotopy is an endpoint-fixed homotopy of distinct disk points, and the finite-word models used here are smooth with endpoint collars and their literal closures use the fixed standard disk framing ([[def-braid-isotopy-relative-top-and-bottom]], [[def-closure-of-a-geometric-braid]]).

## Proof

**Proof technique:** direct.

1.1 **Read a local move at a fixed cut.** Choose a cut outside the small disk of the move, and straighten its local angular foliation to a braid rectangle. The untouched part gives two fixed word contexts. A braid-like II pair contributes $\sigma_i\sigma_i^{-1}$ or $\sigma_i^{-1}\sigma_i$, so removal is inverse cancellation. For III put $s=\sigma_i$, $t=\sigma_{i+1}$. The positive and negative cases are $sts=tst$ and its inverse. The four remaining possible over/under depth orders give $$sts^{-1}=t^{-1}st,\quad s^{-1}ts=tst^{-1},\quad st^{-1}s^{-1}=t^{-1}s^{-1}t,\quad s^{-1}t^{-1}s=ts^{-1}t^{-1}.$$ The first two follow by multiplying $sts=tst$ on the appropriate left and right by $t^{-1}$ or $s^{-1}$, and the last two are their inverses. These exhaust the six orders of three distinct strand depths; the two omitted sign triples would require a cyclic strict depth order. Thus the complete words agree by [F2]. By the homomorphism and actual geometric relations of [F3], each replacement is an endpoint-fixed geometric braid isotopy, also in either fixed word context. This does not require injectivity of that homomorphism. [F1, F2, F3, construct]

1.2 **Planar isotopy, reading order and cyclic cut.** Transport the nested circles, crossing strips and a cut with the planar isotopy. This transports their oriented cyclic orders; no crossing is created and no over/under sign changes. The read word depends only on these orders. More explicitly, cut the transported annular picture and lift its circles to parallel oriented intervals. Every crossing strip is an event involving two consecutive intervals. Events meeting a common interval have their order fixed by that interval's oriented order. Any two total readings extending these finite orders differ by successive exchanges of adjacent incomparable events: move the first event of one reading to its position in the other, noting that every event passed must be incomparable, and induct on the remaining finite list. Incomparable crossing strips use disjoint pairs of intervals, so their generator indices differ by at least two; exchanging them is precisely far commutation [F2], realized geometrically by [F3]. A cut passing one or more events changes a product $uv$ to $vu=u^{-1}(uv)u$, an explicit conjugation, and records the same closed braid with a different starting page. Consequently the end readings of a transported picture, and readings using any other admissible cut, differ only by far commutations and conjugations. The transported angular foliation supplies a family of closed braids; at the end its reading agrees with the usual nested-chain reading by the same finite-order argument. There is no assertion that a fixed page gives fixed based endpoints throughout an arbitrary planar isotopy. [F2, F3, F4, construct]

2.1 **Closed isotopy and conjugacy.** Apply step 1.1 to every local II or III replacement and step 1.2 to the planar pieces and changes of cut. Equal-word replacements yield based geometric isotopies by [F3], hence closed isotopies by [F4]. A cyclic cut change is realized by moving the starting page around the same closed braid, so also gives an isotopy through closed braids. The finite concatenation is therefore a braid isotopy of the closed braids. Algebraically the equal-word replacements leave the element unchanged and each cyclic change conjugates it; their finite composition is a conjugation in $B_n$. This proves both conclusions directly and makes the replacement by conjugation in a Markov sequence explicit. No choice-stated converse identification of geometric and Artin braids is used. [F2, F3, F4, step 1.1, step 1.2] ∎
