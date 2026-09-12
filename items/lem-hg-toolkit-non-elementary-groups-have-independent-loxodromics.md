---
id: "lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics"
kind: "lemma"
title: "Hg toolkit non elementary groups have independent loxodromics"
deps: ["lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements", "def-hg-toolkit-loxodromics-and-independent-poles", "lem-axis-fellow-travelling-controls-the-centralizer", "lem-slim-triangles-imply-the-gromov-product-inequality", "lem-asymptotic-gromov-sequences-form-an-equivalence-relation", "prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite", "def-hg-toolkit-hyperbolic-group-and-stable-length"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Hamann Theorems 5.3.7–5.3.8 pp.91–94; complete torsion-allowed proof"
      url: "https://www.math.uni-hamburg.de/home/hamann/Lehre/GeoGrTh/GeoGrThEn.pdf"
status: published
origin: "pipeline"
proof_strategy: "direct"
---


## Statement

A finitely generated hyperbolic group that is neither finite nor virtually cyclic contains two infinite-order elements with disjoint pole sets. This assertion is choice-free.

More precisely, two infinite-order elements whose pole sets intersect have equal pole sets. After independently replacing them by their inverses if needed to make their positive poles agree, some positive powers of them are equal.

## Facts & Assumptions

**Given:** The standing finitely generated $\delta$-slim hyperbolic group, with identity $o=e$; for the first assertion assume it is neither finite nor virtually cyclic. Write $\kappa=3\delta$.

[F1] An infinite group under this hypothesis has an infinite-order element by [[lem-hg-toolkit-infinite-hyperbolic-groups-have-infinite-order-elements]].

[F2] Infinite-order elements are loxodromic; their signed power sequences define distinct poles independently of basepoint, and bijective isometries act on these classes, by [[def-hg-toolkit-loxodromics-and-independent-poles]]. For each such element $h$, the same item supplies $\tau_h>0$, $s_h\ge1$, $C_h\ge0$ with $|h^j|\ge j\tau_h$ and $(h^j|h^k)_o\ge|h^j|-C_h$ for $k\ge j\ge s_h$.

[F3] The finite orbit-chord bounds, the point-to-segment estimate and the finite-index conclusion for the unordered pole-pair stabilizer are proved in [[lem-axis-fellow-travelling-controls-the-centralizer]].

[F4] The product inequality with constant $\kappa$ holds by [[lem-slim-triangles-imply-the-gromov-product-inequality]]. Mixed joint divergence defines equality of sequence-boundary classes by [[lem-asymptotic-gromov-sequences-form-an-equivalence-relation]].

[F5] Every word-metric ball is finite by [[prop-word-metric-balls-are-finite-exactly-when-the-generating-set-is-finite]]. Group and virtually cyclic conventions are those of [[def-hg-toolkit-hyperbolic-group-and-stable-length]].

## Proof

1.1 We first prove the more precise assertion. Inversion interchanges the two signed power sequences in F2, so if the pole sets of $g,h$ intersect, orient each element to make $g^+=h^+$. Apply F3 to $g$ and fix its supplied $N,L,K,E$, writing $x_i=g^{iN}$. The positive sequence $(x_m)$ represents $g^+$: a subsequence of a Gromov sequence is equivalent to it whenever its indices tend to infinity, directly from the joint-divergence quantifiers. Use the constants $\tau_h,s_h,C_h$ of F2 for $h$, and put $y_j=h^j$, $a_j=|h^j|$. [F2, F3, F4, given]

1.2 Separately, for the existence assertion, by infinitude and F1 choose an infinite-order $g$. For $t\in G$, the conjugate $tgt^{-1}$ has infinite order: a vanishing positive power would give $tg^nt^{-1}=e$, hence $g^n=e$. Its pole pair is $t\{g^+,g^-\}$. Indeed $(tgt^{-1})^{\pm n}o=tg^{\pm n}t^{-1}o$, and F2's basepoint independence identifies this with the image under the isometry $t$ of the signed orbit at $o$. [F1, F2, F5, given, algebra]

2.1 Fix any $j\ge s_h$. Since $(y_k)$ and $(x_m)$ represent the same pole, choose integers $k\ge j$ and $m\ge1$ large enough that $(y_k|x_m)_o>a_j$. F2 gives $(y_j|y_k)_o\ge a_j-C_h$. Applying F4 with bridge $y_k$ gives $(y_j|x_m)_o\ge a_j-C_h-\kappa$. Expanding the product formula at the other basepoint gives the exact identity $(o|x_m)_{y_j}=a_j-(y_j|x_m)_o$, so this product is at most $C_h+\kappa$. [step 1.1, F2, F4, algebra]

3.1 Take any segment from $o=x_0$ to $x_m$. The point-to-segment estimate of F3 gives a point on it at distance less than $C_h+\kappa+3\delta+1$ from $y_j$. The reverse orbit-chord inclusion of F3 then gives an integer $0\le i\le m$ with $$d(h^j,g^{iN})<Q,\qquad Q=C_h+\kappa+3\delta+1+L+3E.$$ Thus, for each $j\ge s_h$, define $i(j)$ to be the least nonnegative integer satisfying this strict inequality. This makes a specified function without a choice axiom. Since $|g^{iN}|\le iL$ by subadditivity, we have $j\tau_h\le a_j<i(j)L+Q$. Since $L>0$, it follows that $i(j)\to\infty$ as $j\to\infty$. [step 2.1, F3, F2, F5, algebra]

4.1 By left invariance, every $b_j=g^{-i(j)N}h^j$ has word length less than $Q$. This is a finite set by F5. At least one value occurs for infinitely many $j$: otherwise each value would have finitely many occurrences and their finite union could not contain all integers $j\ge s_h$. Fix such a value and one occurrence $j_1$. Its infinite set of indices is unbounded, and step 3.1 gives a later occurrence $j_2>j_1$ with $i(j_2)>i(j_1)$. We have equality of group elements, not merely equal bounds on distances: $$g^{-i(j_1)N}h^{j_1}=g^{-i(j_2)N}h^{j_2}.$$ Multiplying on the left by $g^{i(j_2)N}$ and on the right by $h^{-j_1}$ yields $$g^{(i(j_2)-i(j_1))N}=h^{j_2-j_1}.$$ Both exponents are strictly positive. [step 3.1, F5, algebra]

5.1 For every positive integer $r$, the signed power sequences of $g^r$ are the corresponding subsequences of those of $g$. F2 and the direct subsequence observation of step 1.1 show that $g^r$ has exactly the same ordered pair of poles as $g$. The same is true for $h$. Their equal positive powers in step 4.1 therefore force both pole pairs to agree. Undoing either initial inversion leaves the unordered pairs unchanged. This proves the precise assertion in full. [step 4.1, step 1.1, F2, F4]

6.1 If every conjugate pole pair intersected $\{g^+,g^-\}$, step 5.1 would make every one of them equal to this pair. Then every $t\in G$ would preserve the unordered pair. F3 would make $\langle g\rangle$ have finite index in all of $G$, contrary to the given non-virtually-cyclic hypothesis. Therefore some $t$ has a disjoint conjugate pole pair, and $g,tgt^{-1}$ are the required independent infinite-order elements. The argument uses finite witnesses, least nonnegative integers and the finite pigeonhole argument; no simultaneous selection of representatives, ray compactness or AC occurs. Zero slimness is included, and the non-elementary hypothesis excludes the finite and virtually cyclic cases precisely where used. [step 5.1, step 1.2, F3, given] ∎
