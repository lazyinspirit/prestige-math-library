---
id: thm-markovs-closed-braid-equivalence-theorem
kind: theorem
title: "Markov's theorem for braid closures"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [thm-oriented-reidemeister-equivalence-theorem,
       lem-markov-moves-preserve-oriented-closure-isotopy,
       lem-braid-isotopic-closed-braids-are-conjugate,
       lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves,
       def-markov-conjugation-and-stabilization-moves, def-closure-of-a-geometric-braid,
       def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Birman and Brendle, Braids: A Survey, Handbook of Knot Theory chapter, author manuscript; Theorem 4 and section 2.3, printed pp. 17-19"
      url: "https://www.math.columbia.edu/~jb/Handbook-21.pdf"
    - title: "Traczyk, A new proof of Markov's braid theorem, Banach Center Publications 42 (1998), 409-419; Theorem 1"
      url: "https://web.archive.org/web/20231206161844if_/http://matwbn.icm.edu.pl/ksiazki/bcp/bcp42/bcp42127.pdf"
    - title: "Ozsvath, Stipsicz and Szabo, Grid Homology for Knots and Links, AMS Surveys and Monographs 208 (2015); section 2.1, printed pp. 13-19; Appendix B.1, printed pp. 367-372"
      url: "https://web.math.princeton.edu/~petero/GridHomologyBook.pdf"
---

## Statement

Assume the Axiom of Choice. Let $\beta,\beta'$ be braids. Then
$\widehat\beta$ and $\widehat{\beta'}$ are equivalent oriented links if and
only if $\beta$ and $\beta'$ are Markov equivalent, that is, related by a finite
sequence of conjugations in a fixed braid group, stabilizations
$\beta\mapsto\beta\sigma_n^{\pm1}$ into the next braid group, and their
inverses.

## Facts & Assumptions

**Given:** AC, braids $\beta,\beta'$ and the Markov moves of [[def-markov-conjugation-and-stabilization-moves]].

[F1] Assume $\mathrm{AC}_\omega$: each single conjugation, stabilization or destabilization preserves the oriented closure up to ambient isotopy ([[lem-markov-moves-preserve-oriented-closure-isotopy]]); AC yields $\mathrm{AC}_\omega$ ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F2] If two closed braids are isotopic through closed braids about the axis, the braids read from them are conjugate ([[lem-braid-isotopic-closed-braids-are-conjugate]]).

[F3] Assume AC: two closed braid diagrams representing the same oriented link are related by braid isotopies of closed braid diagrams, stabilizations and destabilizations, and inverses, so the braids read from them are Markov equivalent ([[lem-reidemeister-moves-between-closed-braid-diagrams-factor-through-markov-moves]]).

[F4] Assume $\mathrm{AC}_\omega$: two regular diagrams represent equivalent oriented links if and only if they are related by finitely many planar isotopies and oriented Reidemeister moves ([[thm-oriented-reidemeister-equivalence-theorem]]).

[F5] The closure of a braid is an oriented link whose components and orientation are those of the closure construction ([[def-closure-of-a-geometric-braid]]).

## Proof

**Proof technique:** direct.

1.1 **Markov equivalence implies isotopy of closures.** Let $\beta$ and $\beta'$ be Markov equivalent, so there is a finite sequence of braids $\beta=\beta_0,\beta_1,\dots,\beta_k=\beta'$ in which each consecutive pair is related by a conjugation, a stabilization or a destabilization. By [F1] each single step preserves the oriented closure up to ambient isotopy; composing the finitely many ambient isotopies gives an equivalence of $\widehat\beta$ and $\widehat{\beta'}$. [F1, F5, given]

1.2 **Isotopy of closures implies Markov equivalence.** Conversely, assume $\widehat\beta$ and $\widehat{\beta'}$ are equivalent oriented links. If either is empty, both are empty and [F5] forces both braid strand counts to be zero; they are the unique element of $B_0$ and hence Markov equivalent. Otherwise both strand counts are positive. Use the closed braid diagrams obtained from the closure construction applied to $\beta$ and $\beta'$, and read each diagram at its original cutting ray. The braids read this way are $\beta$ and $\beta'$ themselves, up to braid isotopy. Apply [F3] to these two diagrams to obtain their Markov equivalence. If a different cutting ray is used, [F2] gives a conjugate braid, which lies in the same Markov class. Thus $\beta$ and $\beta'$ are Markov equivalent. [F2, F3, F5]

2.1 **Conclusion.** Steps 1.1 and 1.2 give the equivalence. AC discharges the countable-choice hypothesis of [F1] and supplies the AC hypotheses of the factorization result [F3] and the conjugacy bridge [F2]. The Reidemeister theorem [F4] is used inside [F3], rather than to identify a braid read at its original cutting ray. [F1, F2, F3, F4, step 1.1, step 1.2] ∎
