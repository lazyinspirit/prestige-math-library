---
id: "thm-quantitative-hyperbolic-geometry-toolkit"
kind: "theorem"
title: "Quantitative hyperbolic geometry toolkit"
deps: ["lem-geodesic-triangles-in-trees-are-tripods", "lem-slim-triangles-imply-the-gromov-product-inequality", "lem-the-gromov-product-inequality-implies-the-four-point-condition", "lem-the-four-point-condition-implies-slim-triangles", "lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics", "thm-morse-stability-with-explicit-parameter-dependence", "lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse", "lem-hyperbolicity-is-transported-by-a-quasi-isometry", "lem-short-loop-relators-give-a-finite-dehn-presentation", "lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons", "lem-infinite-order-elements-have-positive-stable-translation-length", "lem-axis-fellow-travelling-controls-the-centralizer", "lem-asymptotic-gromov-sequences-form-an-equivalence-relation", "lem-boundary-products-are-independent-of-representative-and-basepoint", "lem-quasi-isometries-extend-to-boundary-homeomorphisms", "lem-independent-loxodromics-have-disjoint-pole-neighbourhoods", "lem-loxodromic-elements-have-north-south-boundary-dynamics", "lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison", "lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics", "def-axiom-of-choice"]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Druţu–Kapovich Chapter 9; Hamann §§5.1–5.3; Canary §§5,7"
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/kapovich_drutu.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

The following toolkit holds, with each clause under its own stated hypotheses. Write $M(\lambda,\varepsilon,\delta)=92\lambda^2(\varepsilon+3\delta)$. Assume AC for the Morse projection families, selection of a coarse inverse, linear-filling converse, general boundary extension and proper boundary compactness. The elementary metric clauses, finite-word and group-orbit clauses, sequence-product topology and loxodromic dynamics below are choice-free; inverse estimates for an already supplied selector are also choice-free.

1. A connected cycle-free unit-edge graph has unique geodesics and tripod triangles, hence is $0$-slim. In any geodesic space, $\delta$-slimness implies product constant $3\delta$. In any metric space, product constant $\kappa$ at every basepoint is equivalent to the four-point condition with largest two opposite-pair sums differing by at most $2\kappa$. In a geodesic space that condition implies $4\kappa$-slimness.

2. In a geodesic $\delta$-slim space, for $\delta>0$, a $k$-local arc-length geodesic with $k\ge6\delta$ is a $(3,4\delta)$-quasi-geodesic. When $\delta=0$, every positive-locality geodesic is globally geodesic. Under AC, every possibly discontinuous $(\lambda,\varepsilon)$-quasi-geodesic on a nonempty compact real interval in such a space has Hausdorff distance at most $M(\lambda,\varepsilon,\delta)$ from every specified endpoint geodesic. Properness is unnecessary.

3. For a $(\lambda,\varepsilon)$ embedding $f:X\to Y$ with attained coarse-density radius $R$, AC supplies an inverse selector $g$ with $d_Y(fg(y),y)\le R$, $d_X(gf(x),x)\le\lambda(R+\varepsilon)$ and embedding constants $(\lambda,\lambda(2R+\varepsilon))$; these estimates are choice-free if the selector is supplied, and do not require geodesicity. Under AC, if $X,Y$ are geodesic and $Y$ is $\delta$-slim, the embedding $f$ alone implies that $X$ is $\lambda(2M(\lambda,\varepsilon,\delta)+\delta+\varepsilon)$-slim. Consequently quasi-isometric geodesic spaces share hyperbolicity.

4. In the standing finitely generated hyperbolic-group convention, for any integer $\Delta\ge\max\{3,2\delta\}$ all formal null words of length at most $10\Delta$ form a finite presentation. Every nonempty freely reduced null word has a based contiguous subword $u$ with a strictly shorter replacement $v$ and relator spelling $uv^{-1}$ in this set, so $u$ is more than half the spelling. The cyclic version, allowing basepoint crossing and free cyclic reduction, holds as well. Relator spellings need not be freely reduced.

5. Conversely, under AC, a finite presentation with relator lengths at most $L\ge0$ and algebraic area $\operatorname{Area}(w)\le K|w|$ for every null word has uniformly slim triangles and thin bigons in the labelled unit-edge Cayley realization, with a constant depending only on $K,L$. If $\delta_0(K,L)$ denotes the common simple-realization bound from the filling supplier, $12\delta_0(K,L)+8$ is a labelled-realization bound. No numerical formula for $\delta_0$ is claimed.

6. Every infinite-order element $g$ of a finitely generated hyperbolic group has a quasi-isometrically embedded power orbit and $\tau_S(g)>0$; in fact $|g^n|_S\ge|n|/C$ and $\tau_S(g)\ge1/C$ for one positive integer $C$ depending only on the specified Cayley graph and slimness. Its centralizer has $\langle g\rangle$ of finite index, as does the subgroup preserving its unordered pole pair. The full orbit-chord and coset bounds are retained: with orbit constants $\lambda,c$, $\kappa=3\delta$, and an integer $J\ge4$ satisfying $2^J/\lambda-c>\lambda+c+4\kappa J$, there is a power of two $N\le2^{J-1}$ for which $x_i=g^{iN}$, $L=d(e,x_1)$, $K=L-d(e,x_2)/2\ge0$, $L>2K+4\kappa$ and $L\le\lambda2^J+c$. Put $E=K+2\kappa+3\delta+1$. Every finite chain $x_a,\ldots,x_b$ and every specified endpoint chord have the two distance bounds $<E$ from chain to chord and $<L+3E$ from chord to chain. Every right or left coset of $\langle g\rangle$ in the pole-pair stabilizer, and hence in the centralizer, has a representative of length less than $L+4K+10\kappa+12\delta+5\le5(\lambda2^J+c)+10\kappa+12\delta+5$.

7. In a product-$\kappa$ metric space, joint mixed-product divergence is an equivalence relation on Gromov sequences, independent of basepoint. For representative product $P$ and supremal boundary product $B$, $B-2\kappa\le P\le B$ when finite, and infinite value is exactly equality of classes. A basepoint change by distance $D$ changes products by at most $D$; boundary products obey the minimum inequality with loss $3\kappa$. The criterion that every point of an open set contains some threshold neighbourhood $\{\eta:B(\xi,\eta)>R\}$ defines a Hausdorff topology, independent of basepoint and supplied representatives; threshold neighbourhoods need not themselves be open. Under AC, a quasi-isometry of geodesic hyperbolic spaces induces a homeomorphism of these sequence boundaries, bounded-distance maps induce the same map, and extensions respect composition. Properness is not imposed here.

8. Under AC, for a nonempty proper geodesic product-$\kappa$ space, every sequence-boundary class is represented by a geodesic ray from any fixed basepoint. The quotient of those rays by finite Hausdorff distance, with the topology induced by uniform convergence on bounded parameter intervals, is homeomorphic to the sequence boundary. The boundary is compact, including when empty.

9. A finitely generated hyperbolic group that is neither finite nor virtually cyclic has independent infinite-order elements. More precisely, intersecting pole sets of two infinite-order elements are equal; after orienting their positive poles to agree, some positive powers are equal. Independent loxodromics have four pairwise disjoint open pole neighbourhoods. Every loxodromic isometry of a product-hyperbolic metric space, and in particular every infinite-order element of the standing hyperbolic group, has uniform north–south dynamics: for neighbourhoods $U_+,U_-$ of its poles, some integer $n_0$ satisfies $g^n(\partial X\setminus U_-)\subseteq U_+$ and $g^{-n}(\partial X\setminus U_+)\subseteq U_-$ for all $n\ge n_0$.

## Facts & Assumptions

**Given:** Each clause is read with its own hypotheses as stated, and AC only on the specified clauses.

[F1] Trees, slim-to-product, product/four-point equivalence and four-point-to-slim bounds are proved in [[lem-geodesic-triangles-in-trees-are-tripods]], [[lem-slim-triangles-imply-the-gromov-product-inequality]], [[lem-the-gromov-product-inequality-implies-the-four-point-condition]] and [[lem-the-four-point-condition-implies-slim-triangles]].

[F2] The local-to-global constants and the exact Morse Hausdorff bound are proved in [[lem-local-geodesics-in-a-hyperbolic-space-are-uniform-quasi-geodesics]] and [[thm-morse-stability-with-explicit-parameter-dependence]].

[F3] Controlled inverse estimates and exact hyperbolicity transport are proved in [[lem-a-quasi-isometry-of-geodesic-spaces-has-a-controlled-coarse-inverse]] and [[lem-hyperbolicity-is-transported-by-a-quasi-isometry]].

[F4] The finite presentation and both shortening forms are proved in [[lem-short-loop-relators-give-a-finite-dehn-presentation]].

[F5] The linear-filling converse, realization comparison and common bigon bound are proved in [[lem-linear-isoperimetry-implies-uniformly-thin-geodesic-bigons]].

[F6] Stable length and orbit embeddings are proved in [[lem-infinite-order-elements-have-positive-stable-translation-length]]; the full chord and pole-stabilizer/centralizer bounds are proved in [[lem-axis-fellow-travelling-controls-the-centralizer]].

[F7] Sequence equivalence, the product topology and general quasi-isometry functoriality are proved in [[lem-asymptotic-gromov-sequences-form-an-equivalence-relation]], [[lem-boundary-products-are-independent-of-representative-and-basepoint]] and [[lem-quasi-isometries-extend-to-boundary-homeomorphisms]].

[F8] The proper ray comparison and compactness are proved in [[lem-hg-toolkit-proper-ray-compactness-and-sequence-comparison]].

[F9] Independent elements and shared-pole commensurability, open pole separation and uniform dynamics are proved in [[lem-hg-toolkit-non-elementary-groups-have-independent-loxodromics]], [[lem-independent-loxodromics-have-disjoint-pole-neighbourhoods]] and [[lem-loxodromic-elements-have-north-south-boundary-dynamics]].

[A1] AC is the family-selection axiom [[def-axiom-of-choice]].

## Proof

1.1 F1 gives every assertion in clause 1 with exactly its displayed constant. Its algebraic equivalence quantifies over all basepoints and does not use geodesicity; the two slimness implications do. The tree supplier includes zero legs, repeated vertices and infinite graphs, with only finite path choices. Thus this clause is choice-free, including zero constants and tied four-point sums. [F1, given]

1.2 F2 gives clause 2. Its local-geodesic supplier separates the positive-$\delta$ mesh from the positive-locality zero-$\delta$ argument, so no claim is made from vacuous zero locality. Its Morse supplier proves both Hausdorff inclusions for every endpoint geodesic with exactly $M$, including discontinuous maps, one-point intervals and zero parameters. A1 is spent there only on the explicit projection and radial-segment families. These hypotheses and this AC use are precisely those of clause 2. [F2, A1, given]

1.3 F3 gives clause 3. Attained density supplies nonempty inverse fibers; AC selects a member in each. The supplier derives both composite errors and the stated inverse embedding constants, with no geodesicity. With a supplied selector the same inequalities need no selection. Its transport supplier uses both Morse inclusions, target slimness and the lower embedding inequality, then lets approximate-witness errors tend to zero. It therefore gives the exact coefficient $\lambda(2M+\delta+\varepsilon)$, and uses the controlled inverse to prove qualitative invariance in the other direction. No density assumption enters the embedding-only transport assertion. [F3, A1, given]

1.4 F4 gives clause 4 in the labelled Cayley convention, for every stated $\Delta$. Its based shortening reduces a nonnegative integer word length strictly and yields membership in the normal closure; this proves the presentation, as well as the algorithmic shortening property. Its separate cyclic argument permits cyclic cancellation without replacing the stronger based conclusion. Empty alphabets and non-reduced relator spellings are included. No AC is used. [F4, given]

1.5 F5 gives clause 5 under A1, uniformly for the fixed $K,L$. Its simple-to-labelled comparison uses their identical vertex word metric, moves arbitrary points by at most one half, and transfers the four-point bound before converting to slimness. The resulting common bound is exactly $12\delta_0+8$. A repeated-vertex triangle gives the same bound for both sides of every geodesic bigon. AC is retained from the cone and uniformity selections in the filling proof, including the zero-data cases; no quantitative formula absent from that supplier has been added. [F5, A1, given]

1.6 F6 gives clause 6. Its stable-length constant is uniform in the infinite-order element for the specified graph. Its orbit-chord proof produces the stated $N,L,K,E$ and both strict chord inclusions for every finite integer subchain. The same supplier puts each pole-stabilizer coset in the displayed finite word ball and specializes to the centralizer; inversion gives both coset conventions. All these clauses are choice-free, including $\delta=0$ and $c=0$. The infinite-order hypothesis is retained wherever poles and positivity are asserted. [F6, given]

1.7 F7 gives clause 7. Joint divergence, rather than diagonal divergence alone, supplies equivalence and the representative estimates. Its topology proof establishes the neighbourhood refinement needed for the stated open-set criterion without claiming the threshold sets open. Its extension proof uses finite chords and Morse to send joint product thresholds to joint thresholds, takes suprema over representative pairs for continuity, and uses bounded-distance equality and a controlled inverse for the inverse homeomorphism. Thus the sequence/topology assertions are choice-free, and only the general extension invokes A1 through Morse and inverse selection. None requires properness. [F7, A1, given]

1.8 F8 gives clause 8 under exactly properness, geodesicity, the product condition and A1. The supplied proof constructs a compact metrized ray space, represents every Gromov class by a ray, identifies the fibers as finite-Hausdorff classes and proves the quotient map is a closed continuous surjection onto the Hausdorff sequence boundary. AC is used for its countable segment and subsequence/witness selections. Compactness of an empty ray space and boundary is included. No compactness conclusion is transferred to the nonproper clause 7. [F8, A1, given]

1.9 F9 gives clause 9. The first supplier allows torsion in the group, produces genuinely equal positive powers from a repeated finite-ball group element when poles intersect, and obtains a disjoint conjugate pole pair from the non-virtually-cyclic hypothesis. The second supplier makes six finite Hausdorff separations to obtain four disjoint open sets. The third gives both inclusions uniformly on the excluded complements with a single tail index, for the full stated class of loxodromic isometries. Its constants depend on the two neighbourhood thresholds rather than individual boundary points. These proofs are choice-free and include the two-pole boundary and empty-complement cases where applicable. [F9, given]

2.1 Steps 1.1–1.9 prove all nine clauses with their separate hypotheses, constants and choice qualifications. Their conjunction asserts no additional properness, density, torsion-freeness or simultaneous family selection. In particular the AC-dependent clauses do not change the choice-free status of the other component proofs, and every claimed supplier conclusion has been applied under its actual assumptions. This proves the full toolkit. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9, given] ∎
