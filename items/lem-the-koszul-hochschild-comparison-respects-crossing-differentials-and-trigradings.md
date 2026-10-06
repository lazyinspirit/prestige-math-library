---
id: lem-the-koszul-hochschild-comparison-respects-crossing-differentials-and-trigradings
kind: lemma
title: "The Koszul-Hochschild comparison respects crossing differentials and trigradings"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps: [lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule, def-chi-zero-and-chi-one-wide-edge-morphisms, def-positive-and-negative-khovanov-rozansky-crossing-complexes, def-khovanov-rozansky-complex-and-trigraded-braid-homology, def-khovanovs-hhh-rouquier-generator-complexes, def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor, lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence, lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex, def-positive-and-negative-rouquier-generator-complexes, def-reduced-khovanov-rozansky-homology, def-axiom-of-choice]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mikhail Khovanov, Triply-graded link homology and Hochschild homology of Soergel bimodules, arXiv:math/0510265v3 (19 printed pages); proof of Theorem 1 and the trigrading paragraph, printed pp. 8-10"
      url: "https://arxiv.org/pdf/math/0510265"
    - title: "Mikhail Khovanov and Lev Rozansky, Matrix factorizations and link homology II, arXiv:math/0505056v2 (37 printed pages); section 1, formulas (5)-(6), and section 2, formulas (8)-(9) and Lemma 2, printed pp. 5-6 and 16-17"
      url: "https://arxiv.org/pdf/math/0505056v2"
verification:
  precheck: pass
---

## Statement

Assume AC, inherited from the diagonal Koszul comparison in
[[lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule]].
Let $\sigma$ be a braid word, let $p$ be one of its crossings at strands
$s,s+1$, and let $\Gamma_0$ (two arcs) and $\Gamma_1$ (one wide edge) be the
two local resolutions of $p$. Write $\chi_0\colon C(\Gamma_0)\to C(\Gamma_1)$
and $\chi_1\colon C(\Gamma_1)\to C(\Gamma_0)$ for the wide-edge morphisms of
[[def-chi-zero-and-chi-one-wide-edge-morphisms]] and let
$$C_p^{+}=\bigl[C(\Gamma_0)\{0,2\}\xrightarrow{\ \chi_0\ }C(\Gamma_1)\bigr], \qquad C_p^{-}=\bigl[C(\Gamma_1)\{0,-2\}\xrightarrow{\ \chi_1\ }C(\Gamma_0)\{0,-2\}\bigr]$$
be the positive and the corrected negative crossing complexes of
[[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]. Then:

(a) under the identification of a closed resolution's Koszul complex with the
Hochschild homology of its Soergel bimodule and the splitting off of the
trivial factor
([[lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule]]),
the local quotient map for $\chi_0$ is
$$rb_s\colon R\{2\}\to B_s,\qquad rb_s(1)=y_s\otimes1+1\otimes y_s,$$
and the local quotient map for $\chi_1$ is
$$br_s\colon B_s\to R,\qquad br_s(a\otimes b)=ab,$$
of [[def-khovanovs-hhh-rouquier-generator-complexes]], up to multiplication by
nonzero rational units (the factor $2$ in the composite $br_srb_s=2y_s$ and the
sign of the balanced root). On the reduced resolution homology the induced
maps are $HH_h(R,rb_s)$ and $HH_h(R,br_s)$, tensored with the other layers.
Consequently the two-term complexes agree term by term with the generator complexes $F(\sigma_s)=[R\{2\}\to B_s]$ and
$F(\sigma_s^{-1})=[B_s\{-2\}\to R\{-2\}]$ of that item, with matching shifts.
The correspondence is uniform in the position $s$ and compatible with the
tensor products over the layers, so the resolution-wise identifications
intertwine the crossing differentials of the complex computing the termwise
Hochschild theory $HHH$ with those of the corrected reduced resolution homology of the
Khovanov-Rozansky complex. The full $a=0$ specialization retains an extra
zero Koszul row and has two copies; that row must be removed as specified
in the preceding comparison lemma.

(b) write $(j,k,l)$ for the trigrading of
[[def-khovanov-rozansky-complex-and-trigraded-braid-homology]] (cohomological
degree, first bigrading, second bigrading) and $(c,h,p)$ for the HHH
trigrading (Rouquier degree, Hochschild degree, internal degree). After undoing
the source's built-in shift by the global correction $(k,l)\mapsto(k+1,l-1)$
that moves the one-strand class $(-1,1,0)$ to $(0,0,0)$, the two trigradings
are related by
$$k=-h,\qquad l=p-h,\qquad j=c,$$
equivalently $a=-h$, $q=p-h$, $t=c$ in the marked variables $(a,q,t)=(k,l,j)$
of the Khovanov-Rozansky theory.

Caveats: the identification is a statement about the reduced theories; the
trivial polynomial factor and the source's coordinate $x_1$ are handled by
[[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]];
the constants of (b) are fixed by the bidegrees of the folded Koszul complex
and are anchored by the two worked normalizations, the one-strand class of
the trivial one-braid and the $(2,n)$ computation; AC enters only through the preceding diagonal Koszul comparison;
the local map and grading calculations use no additional choice.

## Facts & Assumptions

**Given:** a braid word $\sigma$, a crossing at strands $s,s+1$ with its two local resolutions $\Gamma_0,\Gamma_1$, the morphisms $\chi_0,\chi_1$ and the two crossing complexes, the reduced ring $R$, the bimodules $B_s$ and the maps $rb_s,br_s$.

[L1] $\chi_0\colon C(\Gamma_0)\to C(\Gamma_1)$ has bidegree $(0,2)$ and $\chi_1\colon C(\Gamma_1)\to C(\Gamma_0)$ has bidegree $(0,0)$; in the Koszul standard forms of the two factorizations they are the flip morphisms $\mathrm{Id}\otimes\psi'(x_4-x_2)$ and $\mathrm{Id}\otimes\psi(x_4-x_2)$, and their composites satisfy $\chi_1\chi_0=\chi_0\chi_1=\mathrm{Id}\otimes((x_4-x_2)\cdot\mathrm{id})$ ([[def-chi-zero-and-chi-one-wide-edge-morphisms]]).

[L2] The positive crossing complex is the cone of $\chi_0$ with source shift $\{0,2\}$ and the corrected negative crossing complex is the cone of $\chi_1$ with overall shift $\{0,-2\}$; both differentials have bidegree $(0,0)$ as maps of the shifted terms ([[def-positive-and-negative-khovanov-rozansky-crossing-complexes]]).

[L3] $rb_s\colon R\{2\}\to B_s$ and $br_s\colon B_s\to R$ are the well-defined degree-zero maps of graded $(R,R)$-bimodules with the displayed values, and $F(\sigma_s)=[R\{2\}\xrightarrow{rb_s}B_s]$, $F(\sigma_s^{-1})=[B_s\{-2\}\xrightarrow{br_s}R\{-2\}]$ are the generator complexes with the $B$-term in cohomological degree $0$ ([[def-khovanovs-hhh-rouquier-generator-complexes]], [[def-unreduced-type-a-soergel-bimodules-and-the-trivial-polynomial-factor]]).

[L4] For a closed resolution $D$ with Koszul complex $K(D)$ there is an isomorphism $HH_h(R',B'(D))\cong H_h(K(D))$ natural for coefficient maps, and after splitting off the trivial coordinate the reduced summand is $HH_\bullet(R,B(D))$ with $B(D)=\bigotimes_jB_{s_j}$ over the wide edges ([[lem-a-closed-moy-resolution-koszul-complex-computes-hochschild-homology-of-its-soergel-bimodule]]).

[L5] For a layer of a closed marked resolution the first relations form a regular sequence with quotient $B'(D)$, and the Koszul symbols of the folded complex carry the shifts $(-1,1)$ for a linear relation and $(-1,3)$ for the quadratic relation, so that every differential has bidegree $(1,1)$ in the bigrading $(\deg a,\deg x)=(2,0),(0,2)$ ([[lem-the-first-layer-relations-in-a-closed-moy-resolution-form-a-regular-sequence]], [[lem-setting-a-to-zero-in-a-closed-kr-factorization-gives-the-wide-edge-koszul-complex]]).

[L6] The trigraded Khovanov-Rozansky complex of a braid diagram has cohomology $H(D)=\bigoplus_{j,k,l}H^j_{k,l}(D)$ with the Euler characteristic $\sum(-1)^jt^kq^l\dim H^j_{k,l}(D)$, the shifts of the local terms being $C^0(\Gamma_0)=R\oplus R\{-2,2\}$, $C^1(\Gamma_0)=R\{-1,1\}\oplus R\{-1,1\}$, $C^0(\Gamma_1)=R\oplus R\{-2,4\}$, $C^1(\Gamma_1)=R\{-1,1\}\oplus R\{-1,3\}$ ([[def-khovanov-rozansky-complex-and-trigraded-braid-homology]], [[def-chi-zero-and-chi-one-wide-edge-morphisms]], [[def-reduced-khovanov-rozansky-homology]]).

[L7] The reduced instance of the library's Rouquier generator complexes has $B_s^{\mathrm{lib}}=B_s\{-1\}$ and differentials the ordinary multiplication map $\varepsilon_s(a\otimes b)=ab$ and $\eta_s$, with $\eta_s(1)=\alpha_s\otimes1+1\otimes\alpha_s$ and $\alpha_s=\kappa_sy_s$, $\kappa_s=(-1)^{s-1}$ a unit. Thus $\eta_s=\kappa_srb_s$ with the corresponding shifts; the root sign does not multiply the differential $\varepsilon_s$ ([[def-positive-and-negative-rouquier-generator-complexes]]).



## Proof

**Proof technique:** direct.

1.1 *The local quotient modules.* At $a=0$, the two-arc Koszul resolution has quotient the identity bimodule $R'$, while the wide-edge resolution has quotient
$$B'_s=\mathbb Q[x_1,x_2,x_3,x_4]/(x_1+x_2-x_3-x_4,\ x_1x_2-x_3x_4).$$
Choose the left strand coordinates $(x_4,x_3)$ and right strand coordinates $(x_1,x_2)$; this order agrees with the arcs $x_1=x_4$, $x_2=x_3$. Put $y_L=x_4-x_3$ and $y_R=x_1-x_2$. The sum relation implies $x_4-x_2=(y_L+y_R)/2$ in $B'_s$. The common invariant coordinate and the other strand coordinates pass through this local calculation unchanged. The regular-layer quotient and diagonal identification in [L4] carry these coefficient modules to the corresponding termwise Hochschild contributions; removing the universal zero row recovers the original $a$-theory with its fixed $\{-1,1\}$ correction. [L2, L3, L4, L5, given, algebra]

2.1 *Read the induced maps from the matrices.* The degree-zero Koszul homology is the quotient of the even coefficient summand. The even matrices of [L1] have first entries $x_4-x_2$ for $\chi_0$ and $1$ for $\chi_1$. Consequently $\chi_0$ induces $1\mapsto(y_L+y_R)/2$ from the identity module to $B'_s$, while $\chi_1$ induces the quotient map $B'_s\to R'$ setting $y_L=y_R$, namely multiplication. The first map is a bimodule map because $(y_L-y_R)(y_L+y_R)=0$ in the wide-edge quotient and the invariant generators already balance. After removing the common invariant polynomial factor, these are exactly $rb_s/2$ and $br_s$ on the reduced modules. In particular $rb_sbr_s$ is multiplication by $y_L+y_R$ on $B_s$, rather than multiplication by the single scalar $y_s$; $br_srb_s=2y_s$ on $R$. Rescaling the source of the positive two-term complex by a nonzero rational scalar turns $rb_s/2$ into $rb_s$, and the negative map already equals $br_s$. All shifts are those in [L2] and [L3]. [L1, L2, L3, L7, step 1.1, algebra]

3.1 *Assembly over the layers.* The local quotient maps of step 2.1 are tensored with the identity on every other layer. The regular-layer augmentations and the diagonal Koszul comparison are natural for these coefficient maps by [L4], so the resolution-wise identifications intertwine each crossing edge. Multiplying a resolution's coefficient module by the product of the source-rescaling constants for its positive arc terms makes all positive maps exactly $rb_s$ simultaneously: changing one resolution choice changes precisely the factor belonging to that crossing. The scalars commute, so the two routes around each cube face agree, and the ordinary cube signs are preserved. These isomorphisms therefore assemble into a chain isomorphism between the corrected reduced resolution-homology complex and the termwise Hochschild complex of $F(\sigma)$. For the universal-row reduction, the normal-form differential is $a(e_0\wedge-)+d_K$, and the crossing matrices and homogeneous row changes contain no $a$. Comparing the coefficient of $a$ in the chain-map equation forces each crossing map to commute with $e_0\wedge-$. It therefore preserves the image of this wedge operator, the copy retained by the original $(a,0)$ row after polynomial cancellation. Its induced coefficient map there is the one computed above. The extra zero-row copy of the full $a=0$ theory is not included. [L1, L2, L3, L4, step 1.1, step 2.1, algebra]

4.1 The first grading. On the Khovanov-Rozansky side the first bigrading of a class of the folded complex is the negative of the number of Koszul symbols of the closure block that produced it, because each relation of the closure block contributes the shift $(-1,1)$ by [L5], while the layer block contributes nothing on homology: it is a regular sequence whose Koszul complex is a resolution of $B'(D)$. Under the identification of step 1.1 the closure block is exactly the Hochschild block of the termwise complex, whose homology degree is $h$; hence $k=-h$ after the global correction, which does not involve the first bigrading of the moving classes beyond the fixed shift $(1,-1,0)$. [L4, L5, step 3.1, algebra]

4.2 The second and third gradings. By [L5] a relation of internal degree $d$ contributes the shift $(-1,d-1)$ to the folded complex, and the surviving class has internal degree $p$ equal to the sum of the degrees of the relations and of the coefficient bimodules of the resolution; therefore its second bigrading is $l=p-h$, because each of the $h$ closure factors contributes $d$ to the internal degree $p$ and $d-1$ to the second bigrading, a difference of exactly $h$ down from $p$. The cohomological degree $j$ of the assembled complex is the position in the cube of resolutions, which is the same index as the Rouquier degree $c$ of the termwise complex; hence $j=c$. The three displays combine to $k=-h$, $l=p-h$, $j=c$, that is $a=-h$, $q=p-h$, $t=c$ in the variables of the statement. [L2, L4, L5, L6, step 3.1, algebra]

5.1 The global correction and the constants. The source records that the Khovanov-Rozansky trigrading carries a built-in shift by $(-1,1,0)$ coming from the variable $a$, that both the one-strand classes lie in $(0,0,0)$ after undoing it, and that after the correction the third gradings match, the Hochschild grading equals the Koszul grading with the minus sign, and the second grading equals the $x$-degree grading minus the Hochschild grading; these are exactly the three displays of steps 4.1 and 4.2, with the correction $(k,l)\mapsto(k+1,l-1)$ applied to the first two. The one-strand class is $(-1,1,0)$ on the Khovanov-Rozansky side and $(0,0,0)$ on the Hochschild side, so the correction is fixed, and the $(2,n)$ computation with its alternating differentials of degrees $2$ confirms that no further constant is needed. [L6, step 4.1, step 4.2, algebra] ∎ 
