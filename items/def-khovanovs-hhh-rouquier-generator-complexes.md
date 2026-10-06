---
id: def-khovanovs-hhh-rouquier-generator-complexes
kind: definition
title: "Khovanov's generator complexes for the HHH construction"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-reduced-type-a-polynomial-ring-for-hhh, def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, def-positive-and-negative-rouquier-generator-complexes, def-rouquier-complex-of-a-braid-word, thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence, def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3; 'Soergel bimodules and a braid group action', printed pp. 4-5"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Raphael Rouquier, Categorification of the braid group, arXiv:math/0409593; sections 3.2-3.3"
      url: "https://arxiv.org/pdf/math/0409593"
verification:
  precheck: pass
---

## Definition

In the reduced setting of [[def-reduced-type-a-polynomial-ring-for-hhh]] define,
for $1\le i\le m-1$, degree-zero maps of graded $(R,R)$-bimodules
$$br_i\colon B_i\to R,\qquad br_i(a\otimes b)=ab\quad(br_i(1\otimes1)=1),$$
$$rb_i\colon R\{2\}\to B_i,\qquad rb_i(1)=y_i\otimes1+1\otimes y_i,\qquad y_i=x_i-x_{i+1}.$$
Khovanov's **generator complexes** are the bounded complexes of graded
$(R,R)$-bimodules with degree-zero differentials
$$F(\sigma_i):=\bigl[\,R\{2\}\xrightarrow{\;rb_i\;}B_i\,\bigr],\qquad F(\sigma_i^{-1}):=\bigl[\,B_i\{-2\}\xrightarrow{\;br_i\;}R\{-2\}\,\bigr],$$
where in $F(\sigma_i)$ the term $R\{2\}$ sits in cohomological degree $-1$ and
the term $B_i$ in degree $0$, and in $F(\sigma_i^{-1})$ the term $B_i\{-2\}$
sits in cohomological degree $0$ and the term $R\{-2\}$ in degree $1$. For a
signed word $\sigma=\sigma_{i_1}^{\epsilon_1}\cdots\sigma_{i_r}^{\epsilon_r}$
put
$$F(\sigma):=F(\sigma_{i_1}^{\epsilon_1})\otimes_R\cdots\otimes_RF(\sigma_{i_r}^{\epsilon_r}),$$
the signed tensor totalization of
[[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]], with
the empty word giving the unit complex $R$; it is a bounded complex of graded
$(R,R)$-bimodules with degree-zero differentials, whose terms carry a
cohomological and an internal grading.

**Normalization comparison with the library's Rouquier complexes.** The
library's [[def-positive-and-negative-rouquier-generator-complexes]] is stated
for the ambient polynomial ring $\mathbb Q[x_1,\dots,x_m]$; its reduced
instance is obtained by replacing that ring by the reduced ring $R$ of
[[def-reduced-type-a-polynomial-ring-for-hhh]] and $R^{s_i}$ by the invariant
subring. In that instance the shifted bimodule is
$$B_i^{\mathrm{lib}}=R\otimes_{R^{s_i}}R(1)=B_i\{-1\},\qquad\text{so}\qquad F_i=\bigl[\,B_i\{-1\}\xrightarrow{\varepsilon_i} R\{-1\}\,\bigr],\qquad F_i^{-1}=\bigl[\,R\{1\}\xrightarrow{\eta_i} B_i\{-1\}\,\bigr],$$
with the $B$-term in cohomological degree $0$ in both complexes and
$\eta_i(1)=\alpha_i\otimes1+1\otimes\alpha_i$, where $\alpha_i$ is the balanced
root. Letter by letter,
$$F(\sigma_i)\cong F_i^{-1}\{1\},\qquad F(\sigma_i^{-1})\cong F_i\{-1\}$$
in the library's $\{r\}$ notation: the shift $\{1\}$ turns $R\{1\}$ into
$R\{2\}$ and $B_i\{-1\}$ into $B_i$, and the balanced root satisfies
$\alpha_i=\kappa_i\,y_i$ with $\kappa_i=\pm1$ a unit, so $rb_i$ and
$\eta_i$ differ by the unit $\kappa_i$; the same computation, with
multiplication in both differentials, matches $F(\sigma_i^{-1})$ with
$F_i\{-1\}$. Hence for a word $\sigma$ the complex $F(\sigma)$ is, up to the
overall internal shift $\{\epsilon_1+\cdots+\epsilon_r\}$ (the writhe), the
Rouquier complex [[def-rouquier-complex-of-a-braid-word]] of the
generator-inverted word
$\sigma_{i_1}^{-\epsilon_1}\cdots\sigma_{i_r}^{-\epsilon_r}$; by
[[thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence]]
it is determined by the underlying braid up to canonical homotopy equivalence
and that shift.

**Caveats.** The pairing of generator and complex (the $R$-term *below* the
$B$-term for $\sigma_i$) is the one matched by the positive-crossing cone of
[[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]; the
comparison with the library's complexes is an isomorphism in the homotopy
category, not an equality of complexes; the direction of the word comparison
(generator inversion) is forced by the opposite pairing used in
[[def-positive-and-negative-rouquier-generator-complexes]]; and the reduced
instance inherits the ambient homotopy comparisons by the polynomial-extension
and specialization argument in step 3.1.

## Facts & Assumptions

**Given:** the reduced ring $R$, its invariant subrings $R^{s_i}$, the bimodules $B_i=R\otimes_{R^{s_i}}R$ and the elements $y_i=x_i-x_{i+1}$ of [[def-reduced-type-a-polynomial-ring-for-hhh]], and the maps $br_i,rb_i$ of the definition.

[L1] The maps $br_i\colon B_i\to R$ and $rb_i\colon R\{2\}\to B_i$ are well-defined degree-zero maps of graded $(R,R)$-bimodules, with $rb_i(1)=y_i\otimes1+1\otimes y_i$ ([[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]]).

[L2] The reduced instance of the library's generator complexes has $B_i^{\mathrm{lib}}=B_i\{-1\}$ and differentials the multiplication map $\varepsilon_i(a\otimes b)=ab$ and $\eta_i$, with $\eta_i(1)=\alpha_i\otimes1+1\otimes\alpha_i$ and $\alpha_i=\kappa_i\,y_i$, $\kappa_i=\pm1$; the $B$-term sits in cohomological degree $0$ in both complexes ([[def-positive-and-negative-rouquier-generator-complexes]], [[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]]).

[L3] The signed tensor totalization of bounded complexes of graded bimodules has the Koszul total differential, terms $F^p\otimes_RG^q$ in degree $p+q$, and internal degrees adding; shifts satisfy $(M\{r_1\})_d=M_{d-r_1}$ and tensor products of shifts add ([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[L4] The Rouquier complex $F(\beta)$ of a braid element $\beta$ is well defined up to canonical homotopy equivalence: two signed words for the same braid give complexes isomorphic in the homotopy category by the canonical normalized maps ([[def-rouquier-complex-of-a-braid-word]], [[thm-rouquier-complex-is-well-defined-up-to-canonical-homotopy-equivalence]]).



## Proof

**Proof technique:** direct.

1.1 Both displayed two-term complexes are complexes of graded bimodules: the differentials are degree-zero bimodule maps by [L1], and a composite of two differentials has no source or no target, so it is zero. The tensor totalization of finitely many such complexes is a bounded complex by [L3], and the empty word gives $R$. [L1, L3, given, algebra]

2.1 Comparison at the positive generator. $F(\sigma_i)$ has terms $R\{2\}$ in cohomological degree $-1$, $B_i$ in degree $0$, differential $rb_i$. The complex $F_i^{-1}\{1\}$ has terms $R\{1\}\{1\}=R\{2\}$ in degree $-1$, $B_i\{-1\}\{1\}=B_i$ in degree $0$, differential $\eta_i$. By [L2], $\eta_i(1)=\kappa_i\,rb_i(1)$ with $\kappa_i$ a unit; multiplying the generator of the degree $-1$ term by the unit $\kappa_i^{-1}$ therefore intertwines $\eta_i$ with $rb_i$ and gives an isomorphism of complexes, hence a homotopy equivalence. [L1, L2, step 1.1, algebra]

2.2 Comparison at the negative generator. $F(\sigma_i^{-1})$ has terms $B_i\{-2\}$ in cohomological degree $0$, $R\{-2\}$ in degree $1$, differential $br_i$ (multiplication). The complex $F_i\{-1\}$ has terms $B_i\{-1\}\{-1\}=B_i\{-2\}$ in degree $0$, $R\{-1\}\{-1\}=R\{-2\}$ in degree $1$, and differential $\varepsilon_i=br_i$, the ordinary multiplication map. Thus these two shifted negative-letter complexes are equal, in particular isomorphic and homotopy equivalent. [L1, L2, step 1.1, algebra]

3.1 Transfer the ambient comparisons and keep track of the word. Put $R'=R[t]$, with $t=(x_1+\cdots+x_m)/m$. By [[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]], every ambient generator and differential is the reduced one extended by $\mathbb Q[t]$; balanced products have the same property. Ambient bimodule maps and homotopies are $t$-linear. Quotienting their identities by $t$ therefore gives homotopy-inverse maps between the reduced word complexes, with the transitivity and tensor compatibility of [L4]. This uses specialization of actual homotopy identities, so no flatness of $R'/(t)$ is required. These are the comparisons inherited from the fixed ambient normalized system. Tensoring steps 2.1 and 2.2 then identifies $F(\sigma)$ with the reduced Rouquier complex of the generator-inverted word, shifted internally by the writhe $\{\epsilon_1+\cdots+\epsilon_r\}$; no cohomological shift occurs. Generator inversion preserves the Artin relations, and writhe is invariant under those relations and inverse cancellation, so words for the same braid have the stated canonical homotopy comparison. For $m=1$ only the unit complex occurs. [L2, L3, L4, step 2.1, step 2.2, algebra] ∎ 