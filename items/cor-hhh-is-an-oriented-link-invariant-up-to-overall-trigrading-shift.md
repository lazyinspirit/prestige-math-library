---
id: cor-hhh-is-an-oriented-link-invariant-up-to-overall-trigrading-shift
kind: corollary
title: "HHH is an oriented-link invariant up to an overall trigrading shift"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology, thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift, thm-markovs-closed-braid-equivalence-theorem, def-markov-conjugation-and-stabilization-moves, def-closure-of-a-geometric-braid, def-oriented-link-in-s-three-and-ambient-isotopy, def-axiom-of-choice, lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings, def-reduced-khovanov-rozansky-homology]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); Theorem 1"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (37 printed pages); Theorem 1 and Theorem 2"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Eugene Gorsky, Oscar Kivinen and Jose Simental, Algebra and geometry of link homology: Lecture notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591; section 3"
      url: "https://math.aalto.fi/~kivineo3/ihes_notes.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume the Axiom of Choice. Let $D_1,D_2$ be braid diagrams with nonempty closures that
are ambient-isotopic oriented links in $S^3$
([[def-oriented-link-in-s-three-and-ambient-isotopy]],
[[def-closure-of-a-geometric-braid]]). Then there is a trigrading shift
$(h_0,p_0,c_0)\in\mathbb Z^3$, depending only on the two diagrams and the
chosen sequence of Markov moves
([[def-markov-conjugation-and-stabilization-moves]]), such that, with
$HHH^{c,h,p}=0$ for $h<0$ when translating the grading,
$$HHH^{c,h,p}(D_1)\cong HHH^{c+c_0,h+h_0,p+p_0}(D_2)\qquad\text{for all }h,p,c;$$
that is, the trigraded HHH of a braid diagram is an invariant of the oriented
link $\widehat D$ up to an overall trigrading shift. If the Khovanov-Rozansky
shift of the chosen Markov sequence is $(j_0,k_0,l_0)$, the corresponding HHH
shift is
$$c_0=j_0,\qquad h_0=-k_0,\qquad p_0=l_0-k_0.$$
In particular the type IA stabilization, which contributes
$\{1,1\}[1]$ on the Khovanov-Rozansky side, contributes
$(h_0,p_0,c_0)=(1,0,1)$ to the HHH trigrading, while the type IB
stabilization contributes no shift.

Caveats: the Axiom of Choice enters through Markov's closed-braid
equivalence theorem and the diagonal Koszul comparison used by the HHH theorem, and the homogeneous basis choices in
the inherited reduced-invariance argument; the
shift is not canonical without fixed conventions, and the HHH shift is only
determined by the same Markov sequence as the Khovanov-Rozansky one, so no
absolute normalization is silently added; the statement is about the reduced
theory.

## Facts & Assumptions

**Given:** braid diagrams $D_1,D_2$ whose closures are ambient-isotopic oriented links, and AC.

[F1] Markov's theorem: two braid closures are ambient-isotopic oriented links if and only if the braids are related by a finite sequence of Markov moves (conjugation, braid-group transformations, stabilization/destabilization), under AC ([[thm-markovs-closed-braid-equivalence-theorem]]).

[F2] If the closures of $D_1$ and $D_2$ are ambient-isotopic, then there is a trigrading shift $(j_0,k_0,l_0)$ with $\overline H^j_{k,l}(D_1)\cong\overline H^{j+j_0}_{k+k_0,l+l_0}(D_2)$ for all $j,k,l$, by the reduced-invariance proof of [[def-reduced-khovanov-rozansky-homology]]; the shift is the product of the shifts of the Markov sequence, the type IA stabilization contributing $\{1,1\}[1]$ and the type IB stabilization none ([[thm-khovanov-rozansky-braid-homology-is-a-link-invariant-up-to-explicit-shift]]).

[F3] The comparison theorem gives a trigraded isomorphism between the termwise Hochschild theory of a braid word and the reduced Khovanov-Rozansky homology of its closure, with $k=-h$, $l=p-h$, $j=c$ after the global correction $(k,l)\mapsto(k+1,l-1)$ ([[thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology]], [[lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings]]).

[F4] $D_1,D_2$ are braid diagrams of oriented links with the same closure class, so their closures are ambient-isotopic oriented links ([[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-closure-of-a-geometric-braid]]).

[F5] AC is the choice-function principle ([[def-axiom-of-choice]]), used through [F1], [F2], and [F3].



## Proof

**Proof technique:** direct.

1.1 Markov sequence and the Khovanov-Rozansky shift. Since the closures of $D_1$ and $D_2$ are ambient-isotopic oriented links by [F4], [F1] provides a finite sequence of Markov moves connecting the two braid words; by [F2] and [[def-reduced-khovanov-rozansky-homology]] the reduced trigraded groups satisfy $\overline H^j_{k,l}(D_1)\cong\overline H^{j+j_0}_{k+k_0,l+l_0}(D_2)$ for the shift accumulated along that sequence. This is an isomorphism of the reduced graded vector spaces, which is the input needed for the comparison theorem. [F1, F2, F4, given, algebra]

2.1 Transport through the comparison. By [F3] each side is identified with $HHH$ under the dictionary after the correction: a Khovanov-Rozansky class of tridegree $(j,k,l)$ corresponds to the HHH class $(c,h,p)=(j,-k,l-k)$ when expressed in corrected gradings. Conjugating the isomorphism of step 1.1 by the identifications of [F3] therefore gives $HHH^{c,h,p}(D_1)\cong HHH^{c+c_0,h+h_0,p+p_0}(D_2)$ with $c_0=j_0$, $h_0=-k_0$ and $p_0=l_0-k_0$: indeed a shift by $(j_0,k_0,l_0)$ of $(j,k,l)$ changes $(c,h,p)=(j,-k,l-k)$ to $(j+j_0,\,-k-k_0,\,l-k+l_0-k_0)=(c+c_0,\,h+h_0,\,p+p_0)$ with the displayed values. [F3, step 1.1, algebra]

3.1 Stabilization shifts and conclusion. The type IA stabilization contributes $\{1,1\}[1]$ by [F2], from the straight diagram $D_1$ to the curl $D_2$ in the source's convention. Since $(M\{r\})_k=M_{k-r}$ and $H^j(C[1])=H^{j+1}(C)$, the object equality $C(D_1)=C(D_2)\{1,1\}[1]$ gives group indices $(j_0,k_0,l_0)=(1,-1,-1)$. Hence its HHH group shift in the displayed direction is $(c_0,h_0,p_0)=(1,1,0)$, and the type IB stabilization contributes $(0,0,0)$. The composition of the shifts along the Markov sequence is associative because each shift is the multiplication of the grading by a fixed translation, so the total HHH shift depends only on the two diagrams and the chosen sequence, exactly as the Khovanov-Rozansky shift does. The Axiom of Choice is inherited in step 1.1 through Markov's theorem [F1] and in step 2.1 through the diagonal comparison in [F3] and the homogeneous basis choices for reduced invariance in [F2]. The reverse stabilization reverses all three group-index shifts. [F1, F2, F5, step 2.1, algebra] ∎ 