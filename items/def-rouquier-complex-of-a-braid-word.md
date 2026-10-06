---
id: def-rouquier-complex-of-a-braid-word
kind: definition
title: "The Rouquier complex of a braid word"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 1
deps: [def-positive-and-negative-rouquier-generator-complexes, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization, lem-type-a-soergel-generators-are-finite-free-on-both-sides, thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Raphaël Rouquier, Categorification of the braid groups, arXiv:math/0409593v1 (30 September 2004), §3 \"The 2-braid group\""
      url: "https://arxiv.org/pdf/math/0409593"
      locator: "§3.2 and §3.3.1 (the complex $F_{t_1}\\cdots F_{t_m}$ attached to a word), arXiv pp. 7-11"
    - title: "Eugene Gorsky, Oscar Kivinen, José Simental, Algebra and geometry of link homology: Lecture Notes from the IHES 2021 Summer School, Bull. London Math. Soc. 55 (2023) 537-591, §3.1"
      url: "https://arxiv.org/pdf/2108.10356"
      locator: "§3.1, the paragraph defining $T_\\beta$ after Lemma 3.11, printed p. 545"
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, Int. J. Math. 18 (2007) 869-885, §\"Soergel bimodules and a braid group action\""
      url: "https://arxiv.org/pdf/math/0510265"
      locator: "the complexes $F(\\sigma_i)$, $F(\\sigma_i^{-1})$ and the tensor product convention, arXiv pp. 4-6"
verification:
  precheck: n/a
---

## Definition

**The construction.** For a signed word
$$\sigma=\sigma_{i_1}^{\epsilon_1}\cdots\sigma_{i_r}^{\epsilon_r},\qquad \epsilon_k\in\{\pm1\},\ 1\le i_k\le n-1,$$
put
$$F(\sigma):=F_{i_1}^{\epsilon_1}\otimes_R\cdots\otimes_RF_{i_r}^{\epsilon_r},$$
the iterated signed tensor totalization of
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]] of
the Rouquier generator complexes of
[[def-positive-and-negative-rouquier-generator-complexes]], bracketed left to
right; the empty word ($r=0$) is sent to the unit complex $R$ concentrated in
cohomological degree $0$. This is the **Rouquier complex of the word**. When
$\epsilon_k=+1$ the letter contributes the positive complex $F_{i_k}$ and when
$\epsilon_k=-1$ it contributes $F_{i_k}^{-1}$.

**Structure.** $F(\sigma)$ is a bounded cochain complex of graded
$(R,R)$-bimodules with degree-zero differentials, concentrated in cohomological
degrees $-r_-,\ldots,r_+$, where $r_-$ and $r_+$ count the negative and
positive letters: the term $F(\sigma)^m$ is the direct sum of the
$\binom{r}{m+r_-}$ tensor products of one term of each factor, since the
minimal choice has degree $-r_-$ and each upper-term choice adds one. It carries a
cohomological degree and an internal grading, and the differential is the
Koszul totalization differential. A positive letter contributes its unit term
$R(1)$ in cohomological degree $1$ and the internal shift $(1)$ to that term; a
negative letter contributes its unit term $R(-1)$ in cohomological degree $-1$
and the internal shift $(-1)$. Every term is a finite direct sum of finite tensor products of copies
of $R(\pm1)$ and $B_i$, hence is finite free on both sides
([[lem-type-a-soergel-generators-are-finite-free-on-both-sides]]), so each term
is finite graded projective as a left module and as a right module and $F(\sigma)$ defines a
derived tensor functor by
[[thm-a-bounded-projective-bimodule-complex-defines-a-derived-tensor-functor]].

**Status of the notation.** The notation records the chosen word $(\sigma)$
together with the chosen bracket; it asserts nothing about independence of the
word, of the sign normalization or of the bracketing. That the homotopy class
of $F(\sigma)$ depends only on the braid represented by $\sigma$ is the content
of [[thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence]],
whose proof uses the braid relations of the generator complexes and could not be
stated before those relations were proved.

**Convention for comparison.** The library's positive generator $F_i$ is
Rouquier's $F_{s_i}=[A\otimes_{A^{s_i}}A\to A]$ with the library external shift
$(1)$ on both terms, after giving the polynomial variables degree $2$:
$$F_i=[(R\otimes_{R^{s_i}}R)(1)\longrightarrow R(1)].$$
Rouquier's negative complex of §3.2.4 becomes $F_i^{-1}$ after doubling
internal degrees and shifting the whole complex by $(-1)$, up to the unit
scalar coming from the root normalization. As recorded in
[[def-positive-and-negative-rouquier-generator-complexes]], the
complexes of Rouquier, Gorsky–Kivinen–Simental, Khovanov and Elias–Krasner
differ from $F_i$ and $F_i^{-1}$ by homological or internal shifts, so any
comparison with those sources is read through the dictionary recorded there.
The empty word corresponds to the trivial braid and to the identity functor.
