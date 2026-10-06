---
id: thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift
kind: theorem
title: "Khovanov-Rozansky braid homology is an oriented link invariant up to shift"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 9
deps: [thm-markings-do-not-change-the-khovanov-rozansky-complex, lem-khovanov-rozansky-braid-oriented-kink-shifts, thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a, thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three, lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation, thm-markovs-closed-braid-equivalence-theorem, def-closure-of-a-geometric-braid, def-markov-conjugation-and-stabilization-moves, def-oriented-link-in-s-three-and-ambient-isotopy, def-axiom-of-choice, def-bigraded-matrix-factorization-with-potential, def-positive-and-negative-khovanov-rozansky-crossing-complexes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (2006), section 1, Theorem 1 and the Markov move list, printed pp. 8-9; published as Geom. Topol. 12 (2008) 1387-1425"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, Geom. Topol. 12 (2008) 1387-1425 (published version of record), Theorem 1 and its proof, printed pp. 1397-1398"
      url: "https://msp.org/gt/2008/12-3/gt-v12-n3-p04-p.pdf"
    - title: "Tina Kanstrup (notes by Corina Keller and Wai-kit Yeung), Knot homologies and matrix factorizations, ICMS summer school lecture notes (2019), Lecture 3, Markov invariance"
      url: "https://webhomes.maths.ed.ac.uk/~djordan/notes/KnotHomologyMatrixFac.pdf"
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]]. Let $D_1$ and $D_2$ be
braid diagrams (clockwise-oriented, with admissible markings) whose closures
are ambient-isotopic oriented links in $S^3$
([[def-oriented-link-in-s-three-and-ambient-isotopy]]). Then there exists a
trigrading shift $(j_0,k_0,l_0)\in\mathbb Z\times\mathbb Z^2$, depending only on
the two diagrams and the sequence of Markov moves between them, such that
$H^j_{k,l}(D_1)\cong H^{j+j_0}_{k+k_0,l+l_0}(D_2)$ for all $j,k,l$. Thus "the
trigraded cohomology of a braid diagram" is an invariant of the oriented link
$L=\widehat{D_1}$, well defined up to an overall trigrading shift.

The shift is not absolute: the type IA stabilization contributes the shift
$\{1,1\}[1]$ and the type IB stabilization contributes none, so the total shift
is the product of the shifts attached to the stabilization/destabilization
moves in the chosen Markov sequence; no normalization of the grading is
asserted here.

Caveats: the Axiom of Choice is used only through
[[thm-markovs-closed-braid-equivalence-theorem]] (Markov's theorem); the shift
is not canonical without fixing conventions, and the source itself only claims
invariance up to an overall shift.

## Facts & Assumptions

**Given:** two braid diagrams $D_1,D_2$ whose closures are ambient-isotopic oriented links, with the Markov moves of [[def-markov-conjugation-and-stabilization-moves]] available.

[F1] Markov's closed-braid equivalence theorem: two braid closures are ambient-isotopic oriented links if and only if the braids are related by a finite sequence of Markov moves (a) conjugation, (b) braid-group transformations, (c) stabilization/destabilization; the theorem assumes the Axiom of Choice ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F2] Conjugation of braid words leaves $C(D)$ unchanged up to isomorphism with no shift ([[lem-khovanov-rozansky-complex-is-invariant-under-braid-conjugation]]).

[F3] The braid-like Reidemeister IIa move (which covers inverse cancellations) and the braid-like III move with coherent orientations leave $C(D)$ unchanged up to isomorphism with no shift ([[thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-two-a]], [[thm-khovanov-rozansky-complex-is-invariant-under-braid-reidemeister-three]]).

[F4] The two oriented stabilizations/destabilizations give $C(D_1)\cong\Pi C(D_2)\{1,1\}[1]$ for type IA and $C(D_1)\cong C(D_2)$ for type IB ([[lem-khovanov-rozansky-braid-oriented-kink-shifts]]).

[F5] Changing the marks of a diagram changes $C(D)$ by a chain homotopy equivalence with no grading shift, compatibly with the crossing differentials ([[thm-markings-do-not-change-the-khovanov-rozansky-complex]]).

[F6] Each crossing complex is a two-term complex of local matrix factorizations; tensor products use the usual parity sign for the factorization differential and the cohomological sign for the crossing-complex differential. Local potentials add ([[def-bigraded-matrix-factorization-with-potential]], [[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]).

## Proof

**Proof technique:** reduction to the three Markov moves and composition of the explicit isomorphisms along a Markov sequence.

1.1 *Distant crossings commute.* When $|i-j|>1$, the two crossings involve disjoint pairs of strands. Give their incident edges separate variables and keep all other straight-edge factors fixed. Their local crossing complexes are therefore external tensor factors over their respective polynomial variable blocks, extended to the common commutative coefficient ring. For factors of outer cochain degrees $c,d$ and inner parities $\epsilon,\eta$, the map $x\otimes y\mapsto(-1)^{cd+\epsilon\eta}y\otimes x$ is the signed tensor flip. The two standard tensor sign rules of [F6] show separately that it commutes with the outer and inner differentials; it preserves all internal degrees and the sum of the potentials, and its square is the identity. Reattach the unchanged factors and rename each edge variable to the same geometric edge on the other side. This gives a no-shift isomorphism for distant crossing commutation, for either sign of each crossing. [F6, algebra]

2.1 *Each Markov move acts by an isomorphism with a computable shift.* Since the closures of $D_1$ and $D_2$ are ambient-isotopic, [F1] provides a finite sequence of Markov moves connecting them; it suffices to show that each move induces an isomorphism of complexes in $K(\mathrm{hmf}_w)$ with an explicit shift. Move (a), conjugation $\alpha\beta\leftrightarrow\beta\alpha$, has no shift by [F2]. For move (b), far commutations are the no-shift signed flips of step 1.1, inverse cancellations $\sigma_i\sigma_i^{-1}$ and $\sigma_i^{-1}\sigma_i$ are the braid-like IIa move and the braid relation $\sigma_i\sigma_{i+1}\sigma_i\leftrightarrow\sigma_{i+1}\sigma_i\sigma_{i+1}$ is the braid-like III move, both with no shift by [F3]; the marking changes required to realize the moves are no-shift chain homotopy equivalences by [F5]. For move (c), the type IA stabilization/destabilization contributes inner parity reversal $\Pi$ in addition to the shift $\{1,1\}[1]$, and the type IB one contributes neither by [F4]. [F1, F2, F3, F4, F5, step 1.1]

3.1 *Composing along the Markov sequence.* Choose a Markov sequence from $D_1$ to $D_2$, and for each move choose the isomorphism supplied by step 2.1; composing the chain maps gives an isomorphism $C(D_1)\simeq\Pi^\nu C(D_2)\{-k_0,-l_0\}[j_0]$ for the product of the shifts of the moves in the sequence, where $\nu$ counts the type IA moves modulo $2$, because composing bigrading and cohomological shifts adds their exponents and $\Pi^2=1$. The total shift $(j_0,k_0,l_0)$ depends only on the two diagrams and the chosen sequence, and the composed maps are a chain homotopy equivalence after this shift; the conventions $H^j(C[n])=H^{j+n}(C)$ and $(M\{u,v\})_{k,l}=M_{k-u,l-v}$ give the stated target index shifts $(j_0,k_0,l_0)$; taking termwise cohomology, summing its two inner parity components, and then taking outer cohomology forgets $\Pi^\nu$ and gives $H^j_{k,l}(D_1)\cong H^{j+j_0}_{k+k_0,l+l_0}(D_2)$ for all $j,k,l$. [F1, F4, step 2.1]

4.1 *Choice and conclusion.* The only step that uses the Axiom of Choice is the invocation of Markov's theorem [F1], which is the passage from an ambient isotopy of the closures to a finite sequence of Markov moves; steps 1.1 and 2.1 are explicit constructions and use no choice. The source's Proposition 2 supplies the underlying invariance of $C$ under the braid moves and the shift bookkeeping of the stabilizations, and Theorem 1 of the source is the resulting statement. Since the type IA and IB moves have different shifts, the total shift depends on the chosen Markov sequence and no absolute normalization is claimed. [F1, step 2.1, step 3.1] ∎

