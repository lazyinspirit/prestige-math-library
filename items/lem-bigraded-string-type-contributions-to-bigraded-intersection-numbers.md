---
id: lem-bigraded-string-type-contributions-to-bigraded-intersection-numbers
kind: lemma
title: "Bigraded string types and their contributions to I^{bigr}"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-khovanov-seidel-bigrading-cover-and-local-intersection-indices
  - def-basic-arcs-admissible-curves-and-normal-form
  - lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading
  - lem-normal-form-string-types-and-their-geometric-intersection-contributions
  - lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action
proof_strategy: direct
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Khovanov and Paul Seidel, Quivers, Floer Cohomology, and Braid Group Actions, J. Amer. Math. Soc. 15 (2002) 203-271, Lemma 3.20"
      url: "https://arxiv.org/pdf/math/0006056"
      locator: "Lemma 3.20 with its proof, printed pp. 32-33"
verification:
  precheck: pass
---

## Statement

Assume AC ([[def-axiom-of-choice]]) for the supplied well-definedness and
isotopy invariance of ordinary and bigraded intersection numbers.

Fix bigradings $\widetilde b_k,\widetilde d_k$ of the basic arcs and vertical
curves normalized by
$$I^{\mathrm{bigr}}(\widetilde d_k,\widetilde b_k)=1+q_1^{-1}q_2, \qquad I^{\mathrm{bigr}}(\widetilde b_k,\widetilde b_{k+1})=1 \qquad(0\le k\le m\text{ in the first equation},\ 0\le k<m\text{ in the second}),$$
which determine the bigradings uniquely up to an overall shift
$\chi(r_1,r_2)$. For every admissible bigraded curve $\widetilde c$ in normal form the bigraded
intersection number $I^{\mathrm{bigr}}(\widetilde b_k,\widetilde c)$ is computed
by summing the contributions of the bigraded $k$-strings of $\widetilde c$
according to the following table: for $k>0$,
$$I_0(0,0)\mapsto q_1+q_2,\quad \mathrm{II}_0(0,0)\mapsto q_1+q_2,\quad \mathrm{II}'_0(0,0)\mapsto 1+q_1q_2^{-1},\quad \mathrm{III}_0(0,0)\mapsto q_2,\quad \mathrm{III}'_0(0,0)\mapsto1,$$
the exceptional types $\mathrm{IV},\mathrm{IV}',\mathrm V,\mathrm V'$ all
contribute $0$, and $\mathrm{VI}(0,0)$ contributes $1+q_2$; a general type
$\mathrm I_u(r_1,r_2)$ (and likewise for the other families) contributes the
value of its $u=0$ member multiplied by $q_1^{r_1}q_2^{r_2}(q_1^{-1}q_2)^u$;
for $k=0$ the zero-parameter types
$\mathrm{VII}(0,0),\mathrm{VIII}(0,0),\mathrm{IX}(0,0),\mathrm X(0,0),\mathrm{XI}(0,0)$
contribute $0$, $q_1q_2^{-1}+1$, $1$, $q_1q_2^{-1}+1$, $1$ respectively;
a type with parameters $(r_1,r_2)$ has this value multiplied by
$q_1^{r_1}q_2^{r_2}$. In particular, $\mathrm{VI}(r_1,r_2)$ means
$\chi(r_1,r_2)\widetilde b_k$ and $\mathrm{XI}(r_1,r_2)$ means
$\chi(r_1,r_2)\widetilde b_0$, as in the source’s printed p. 32.

## Facts & Assumptions
**Given:** AC, the fixed standard picture, the normalized bigradings $\widetilde b_k,\widetilde d_k$, a bigraded curve $\widetilde c$ in normal form, and the type tables of Figures 15-18 together with the local index decorations of Figures 12-14.

[A1] AC is inherited for the representative-independence and isotopy-invariance assertions used in [L2] and [L3] ([[def-axiom-of-choice]]); the normalization of the fixed arcs and the finite local-index computations require no additional choice.

[L1] In the standard picture $d_k$ crosses $b_k$ once in the interior and adjacent basic arcs share one marked endpoint ([[def-basic-arcs-admissible-curves-and-normal-form]]). Bigradings of these arcs exist and differ by unique deck elements ([[lem-bigradings-of-curves-exist-and-are-unique-up-to-the-deck-action]]).

[L2] Under AC, ordinary intersection weights add over the $k$-strings in their minimal models ([[lem-normal-form-string-types-and-their-geometric-intersection-contributions]]). In such a model, each unmarked intersection contributes $(1+q_1^{-1}q_2)q_1^{\mu_1}q_2^{\mu_2}$ and each marked endpoint contributes $q_1^{\mu_1}q_2^{\mu_2}$ ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]). The relative minimal-position construction fixing the other dividing arcs is the one in Khovanov–Seidel's proof of Lemma 3.18, printed pp. 29–31.

[L3] For $k>0$, the preferred half-twist lift satisfies $\widetilde t_k(\widetilde b_k)=\chi(-1,1)\widetilde b_k$, only asserting a deck shift for its supporting arc ([[lem-the-preferred-lift-of-a-half-twist-shifts-the-bigrading]]). Under AC for the supplied bigraded intersection-number invariance, simultaneous transport preserves local indices, while shifting the second bigrading by $\chi(r_1,r_2)$, or the first by $\chi(-r_1,-r_2)$, multiplies each contribution by $q_1^{r_1}q_2^{r_2}$ ([[def-khovanov-seidel-bigrading-cover-and-local-intersection-indices]]).

[L4] The $k$-string $\mathrm I_{u+1}(r_1,r_2)$ is obtained from $\mathrm I_u(r_1,r_2)$ by applying the half twist about $b_k$; the same holds for the other families, and the exceptional types are fixed or shifted according to Figure 15 ([[def-basic-arcs-admissible-curves-and-normal-form]]).



## Proof

**Proof technique:** direct.

1.1 *Normalization.* Each $d_k,b_k$ pair has one interior crossing, so its bigraded value is a monomial times $1+q_1^{-1}q_2$; each defined adjacent pair $b_k,b_{k+1}$ has one common marked endpoint, so its value is a monomial. Choose the bigrading of $b_0$, then successively shift $b_{k+1}$ to make each adjacent monomial $1$, and finally shift each $d_k$ to make its crossing monomial $1$. Deck freeness makes these relative shifts unique. All simultaneous shifts of both families cancel in the relative indices and preserve these equations; hence the only ambiguity is a common overall shift. A shift of $\widetilde c$ alone multiplies its contributions by the stated monomial. At $q_1=q_2=1$ the normalizations are $2=2I(d_k,b_k)$ and $1=2I(b_k,b_{k+1})$, consistent with the ordinary half weights. [L1, L2, L3]

1.2 *The tables at the base parameters.* Put each string into the relative minimal model used in the ordinary contribution lemma. The clockwise local-index paths in the decorated Figures 12–18 give, for $k>0$, an interior index $(1,0)$ for $\mathrm I_0,\mathrm{II}_0$, an interior index $(1,-1)$ for $\mathrm{II}'_0$, and a marked-end index $(0,1)$ for $\mathrm{III}_0$ and $(0,0)$ for $\mathrm{III}'_0$. The types $\mathrm{IV},\mathrm{IV}',\mathrm V,\mathrm V'$ are disjoint from $b_k$. Multiplying interior monomials by $1+q_1^{-1}q_2$ gives $q_1+q_2,q_1+q_2,1+q_1q_2^{-1}$; the single marked-end monomials give $q_2,1$. For $\mathrm{VI}(0,0)=\widetilde b_k$, a minimal self push-off has marked-end indices $(0,0),(0,1)$, hence value $1+q_2$. For $k=0$, the positive boundary push gives no intersection for $\mathrm{VII}$, an interior index $(1,-1)$ for $\mathrm{VIII},\mathrm X$, and a marked-end index $(0,0)$ for $\mathrm{IX},\mathrm{XI}$, yielding $0,1+q_1q_2^{-1},1,1+q_1q_2^{-1},1$. These are the local-index readings in the source’s bigraded string table; the ordinary relative minimal-position construction assigns each intersection to its string and realizes all model counts simultaneously. [L2, L4]

2.1 *The family index and deck parameters.* Write $C(\widetilde b_k,\widetilde g)$ for the local contribution of a bigraded $k$-string. Transporting its local-index paths by the preferred half twist and using [L3] gives $C(\widetilde b_k,\widetilde t_k\widetilde g)=C(\widetilde t_k^{-1}\widetilde b_k,\widetilde g)=C(\chi(1,-1)\widetilde b_k,\widetilde g)=(q_1^{-1}q_2)C(\widetilde b_k,\widetilde g)$. Normalization after twisting preserves these local contributions. By [L4], an integer-indexed type with index $u$ is the $u$-th preferred half-twist iterate of its zero-index member; iteration gives $(q_1^{-1}q_2)^u$, also for negative $u$ by inverting the monomial. The deck parameters add $q_1^{r_1}q_2^{r_2}$ by [L3]. Thus every indexed family has the claimed factor, including the shorter list for $k=m$. Exceptional types and $k=0$ types have only the deck factor. This uses the shift of the fixed $b_k$, not a deck-shift assertion about $\widetilde g$. [step 1.2, L3, L4]

3.1 *Conclusion.* The bigraded intersection number $I^{\mathrm{bigr}}(\widetilde b_k,\widetilde c)$ is the sum over the bigraded $k$-strings of the contributions of the table, and the two normalizing equations determine the two families of bigradings up to an overall deck shift. AC is inherited for the supplied intersection-number invariance; the normalization and finite table calculations require no additional choice. [A1, step 1.1, step 1.2, step 2.1] ∎ 
