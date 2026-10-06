---
id: thm-hhh-is-isomorphic-to-reduced-khovanov-rozansky-homflypt-homology
kind: theorem
title: "HHH is isomorphic to reduced Khovanov-Rozansky homology"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [def-termwise-hochschild-homology-complex-of-a-rouquier-complex, lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings, def-reduced-khovanov-rozansky-homology, def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-axiom-of-choice, lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule, def-khovanovs-hhh-rouquier-generator-complexes, def-positive-and-negative-khovanov-rozansky-crossing-complexes]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); Theorem 1 and its proof, printed pp. 6-10"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (37 printed pages); end of section 1, printed pp. 11-12"
      url: "https://arxiv.org/pdf/math/0505056v2"
    - title: "Anna Beliakova, Krzysztof K. Putyra and Stephan M. Wehrli, Quantum link homology via trace functor I, arXiv:1605.03523v2; section 3.8.6, equation (3.44), printed p. 39"
      url: "https://arxiv.org/pdf/1605.03523"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice (inherited through the diagonal Koszul comparison
of
[[lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule]]).
Let $\sigma$ be a braid word on $m\ge1$ strands with closure $\widehat\sigma$, let $HHH(\sigma)$ be
the termwise Hochschild theory of
[[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]], and let
$\overline H(\widehat\sigma)$ be the reduced Khovanov-Rozansky homology of
[[def-reduced-khovanov-rozansky-homology]] evaluated on the corresponding
braid diagram. Then there is an isomorphism of trigraded $\mathbb Q$-vector
spaces
$$HHH^{c,h,p}(\sigma)\cong\overline H^{c,-h-1,p-h+1}(\widehat\sigma)$$
under the trigrading correspondence of
[[lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings]]:
writing $k_{\mathrm{corr}}=k+1$ and $l_{\mathrm{corr}}=l-1$ for the corrected
Khovanov-Rozansky grading, $k_{\mathrm{corr}}=-h$,
$l_{\mathrm{corr}}=p-h$, $j=c$; equivalently $a=-h$, $q=p-h$, $t=c$ in the
marked corrected variables $(a,q,t)=(k_{\mathrm{corr}},l_{\mathrm{corr}},j)$. The unreduced Khovanov-Rozansky theory is
recovered from the reduced one by adjoining the trivial polynomial factor, as
recorded in [[def-reduced-khovanov-rozansky-homology]].

Caveats: only the reduced theory is compared; the isomorphism is
trigrading-preserving only after the global correction, and no absolute
normalization beyond it is claimed; the compatibility has to hold over all
resolutions, including the corrected negative crossing and the signs of the
Koszul total differentials; the Axiom of Choice enters only through the
comparison of the bar and diagonal Koszul resolutions inside the cited
identification, not through the construction of $HHH$.

## Facts & Assumptions

**Given:** a braid word $\sigma$ with $N$ crossings and closure $\widehat\sigma$, the cube of resolutions of the braid diagram, the termwise Hochschild complex of [[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]] and the reduced Khovanov-Rozansky complex of [[def-reduced-khovanov-rozansky-homology]], and AC.

[F1] For the generator complex $F(\sigma)$ of [[def-khovanovs-hhh-rouquier-generator-complexes]] the groups $HHH^{c,h,p}(\sigma)=H^c(HH_h(R,F(\sigma)^\bullet))_p$ are the cohomology of a bounded complex whose terms are the Hochschild homologies of the resolution terms $F(\sigma)^\nu=\bigotimes_\nu\text{(local term)}$ over the crossings, with differentials induced by the maps $rb_s,br_s$ ([[def-termwise-hochschild-homology-complex-of-a-rouquier-complex]]).

[F2] The reduced Khovanov-Rozansky theory is built over the ring of differences with the coefficient $a$ retained; for a fixed resolution $D_\nu$ the reduced summand of the Koszul homology is $HH_\bullet(R,B(D_\nu))$ with $B(D_\nu)=\bigotimes_sB_s$ over the wide edges, and the unreduced theory differs by adjoining the trivial polynomial factor ([[def-reduced-khovanov-rozansky-homology]], [[lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule]]).

[F3] The $a=0$ specialization of the Khovanov-Rozansky complex is the folded Koszul complex of the resolution sequence, and the crossing complexes are the cones of $\chi_0$ and $\chi_1$ with the shifts $\{0,2\}$ and $\{0,-2\}$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], [[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]).

[F4] The local maps induced by $\chi_0$ and $\chi_1$ on the reduced summands are, up to nonzero rational units, the maps $rb_s$ and $br_s$, the identification is compatible with the tensor products over the layers, and the trigradings correspond by $k=-h$, $l=p-h$, $j=c$ after the correction $(k,l)\mapsto(k+1,l-1)$ ([[lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings]]).

[F5] AC is the choice-function principle ([[def-axiom-of-choice]]), used only through the diagonal Koszul identification inside [F2].



## Proof

**Proof technique:** direct.

1.1 Resolution-wise identification. Fix a resolution $D_\nu$ of the braid diagram, obtained by replacing each crossing by an arc (0-resolution) or a wide edge (1-resolution). By [F2] the reduced Koszul homology of $D_\nu$ is $HH_\bullet(R,B(D_\nu))$, and by [F1] the term of the termwise complex attached to the same choice of resolutions is $HH_\bullet$ of the corresponding tensor product of local terms, which is the same bimodule $B(D_\nu)$ when the reduced bimodules $B_s$ are assigned to the wide edges and $R$ to arcs; therefore the resolution-wise contributions coincide up to the fixed shifts, and the identification is natural for bimodule maps. [F1, F2, given, algebra]

2.1 Intertwining the differentials. Two adjacent resolutions differ at one crossing, and the differential of the cube complex at that edge is $\chi_0$ (positive crossing) or the corrected $\chi_1$ (negative crossing) on the Khovanov-Rozansky side, and $rb_s$ or $br_s$ on the termwise Hochschild side. By [F4] the resolution-wise identifications of step 1.1 carry one into the other up to nonzero rational units and the fixed shifts, and they are compatible with the tensor products over the layers and with the Koszul signs of the total differentials; hence they assemble over the $2^N$ resolutions into a chain isomorphism, up to the overall shift, between the complex computing $HHH(\sigma)$ and the corrected original reduced Khovanov-Rozansky resolution-homology complex. The complete $a=0$ specialization has a second copy from its universal zero row; [F4] removes that row and retains the original theory's fixed $\{-1,1\}$ shift. The consistent vertex rescalings of [F4], not independent arbitrary edge scalars, give the stated chain isomorphism. [F3, F4, step 1.1, algebra]

3.1 Cohomology and the trigrading. Taking cohomology of the chain isomorphism of step 2.1 gives a $\mathbb Q$-linear isomorphism $HHH^{c,h,p}(\sigma)\cong\overline H^{j,k,l}(\widehat\sigma)$; by [F4] the grading classes correspond by $k=-h$, $l=p-h$, $j=c$ after the global correction, and the correction is the one that moves the one-strand class $(-1,1,0)$ in the order $(k,l,j)$ of the Khovanov-Rozansky theory to $(0,0,0)$, matching the one-dimensional class of $HHH$ in $(0,0,0)$ for the trivial one-strand braid. [F4, step 2.1, algebra]

4.1 The unreduced theory. The unreduced construction carries the coefficient variable $a$ and the trivial polynomial factor; by [F2] and [[def-reduced-khovanov-rozansky-homology]] the unreduced groups are obtained from the reduced ones by adjoining that factor, so the isomorphism of step 3.1 is exactly the comparison stated in the source between $HHH$ and the reduced homology. The only use of AC is through [F2], in step 1.1. [F2, F5, step 1.1, step 3.1] ∎ 