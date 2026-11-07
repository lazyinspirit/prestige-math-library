---
id: lem-normal-transfer-nullity-plus-component-count-is-independent-of-spanning-surface
kind: lemma
title: "Normal-transfer nullity plus component count is independent of the spanning surface"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes
  - lem-normal-transfer-linking-defines-a-symmetric-surface-pairing
  - lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations
  - lem-spanning-surfaces-can-match-boundary-framings-and-separate-their-collars
  - lem-straight-collar-spanning-surfaces-are-related-by-interior-tube-moves
  - lem-interior-tube-addition-preserves-normal-pairing-signature
  - lem-small-crosscap-addition-preserves-corrected-normal-signature
  - lem-proper-arc-cuts-preserve-definite-normal-pairings
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Full AC is inherited from the full normal-transfer pairing and its local tube/crosscap interfaces. It supplies countable choice for surface presentations, boundary normalization and the finite tube movie. Nullity calculations use finite rational linear algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "C. McA. Gordon and R. A. Litherland, On the Signature of a Link, Inventiones Mathematicae 47 (1978), Proposition 10 and Theorem 11, printed pp.65–67; nullity calculation from the same local stabilization matrices"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN356556735_0047/PPN356556735_0047.pdf"
    - title: "Thomas Kindred, A geometric proof of the flyping theorem, Sublemma 6.3 and the separating-arc equivalence in Proposition 6.5"
      url: "https://arxiv.org/pdf/2008.06490v3"
---

## Statement

Assume full AC. If $F_0,F_1\subset S^3$ are compact smooth embedded spanning surfaces for the same nonempty link, with no closed components but allowing disconnectedness and nonorientability, then
$$\nu(B_{F_0})+c(F_0)-1=\nu(B_{F_1})+c(F_1)-1.$$
Here $B_F$ is the full rational normal-transfer pairing, including its cross-component entries, $\nu(B_F)$ is the dimension of its kernel, and $c(F)$ is its number of connected components. The quantity is invariant under orientation-preserving ambient isotopy of the boundary link.

Consequently any two such surfaces whose full normal-transfer pairings are nondegenerate have the same number of components. In particular this holds for two definite surfaces of either sign, including opposite signs. If $F_0,F_1$ are definite spanning surfaces for the same link, and proper arcs $\alpha_0\subset F_0$, $\alpha_1\subset F_1$ have the property that their cut surfaces span ambient isotopic links, then $\alpha_0$ separates its surface component if and only if $\alpha_1$ does. This last assertion concerns separation, without asserting an alternating diagram or identifying the number of split components of the link.

## Statement references

[[def-axiom-of-choice]]

[[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]]

[[lem-proper-arc-cuts-preserve-definite-normal-pairings]]

## Facts & Assumptions

**Given:** Full AC and compact smooth spanning surfaces without closed components for the same nonempty link; for the arc assertion, the stated definite pairings and proper arcs with isotopic cut boundary links.

[F1] Such surfaces have finite smooth disk-and-band presentations on their components and a full finite-rank normal-transfer pairing. A finite sequence of component-connecting tubes makes a surface connected, with each move changing its full matrix from $G$ to $G\oplus[0]$. ([[lem-compact-smooth-boundary-surfaces-have-finite-disk-band-presentations]], [[lem-normal-transfer-pairing-and-signature-under-component-connecting-tubes]])

[F2] A tube addition on a connected surface has pairing matrix $\left(\begin{smallmatrix}G&v&0\\v^T&k&\delta\\0&\delta&0\end{smallmatrix}\right)$ with $\delta=\pm1$. A separated small signed crosscap changes the pairing by $G\oplus[\epsilon]$, $\epsilon=\pm1$. These are statements about the full matrices, not just their signatures. ([[lem-interior-tube-addition-preserves-normal-pairing-signature]], [[lem-small-crosscap-addition-preserves-corrected-normal-signature]])

[F3] Connected surfaces can be boundary-normalized by finitely many signed small crosscaps and ambient isotopies to have equal component framings, separated collars and a finite transverse interior circle intersection. Its actual Proof 3.1 constructs angle-zero and constant angle-$\delta$ collar rays on smaller tubes, and Proof 5.1 fixes these smaller tubes during its final generic perturbation. ([[lem-spanning-surfaces-can-match-boundary-framings-and-separate-their-collars]])

[F4] With the two positive coordinate-ray collar charts supplied, connected surfaces in that position are related by finitely many ambient isotopies fixing their common boundary and interior tube additions or removals, every intermediate surface connected and finitely presented. ([[lem-straight-collar-spanning-surfaces-are-related-by-interior-tube-moves]])

[F5] Ambient isotopies transport the normal pairing. A proper arc cut injects homology, restricts its pairing and preserves definiteness. Its component count increases by one exactly when the arc separates its original component, and otherwise is unchanged. ([[lem-normal-transfer-linking-defines-a-symmetric-surface-pairing]], [[lem-proper-arc-cuts-preserve-definite-normal-pairings]])

## Proof

1.1 Congruent finite rational matrices have isomorphic kernels, by the invertible congruence change of coordinates. The kernel of a direct sum is the direct sum of the kernels. Therefore $G\oplus[0]$ has nullity $\nu(G)+1$, while $G\oplus[\epsilon]$ for $\epsilon=\pm1$ has nullity $\nu(G)$. These statements include zero-dimensional or already singular old matrices. Ambient transport in [F5] also preserves nullity. [given, F5, algebra]

2.1 For the connected tube matrix in [F2], let $D=\left(\begin{smallmatrix}k&\delta\\\delta&0\end{smallmatrix}\right)$ and $C=(v,0)$. Its determinant is $-1$, and $D^{-1}=\left(\begin{smallmatrix}0&\delta\\\delta&-k\end{smallmatrix}\right)$ since $\delta^2=1$. The invertible triangular block coordinate change eliminating $C$ gives a congruence to $(G-CD^{-1}C^T)\oplus D$. Its correction term is zero because the top-left entry of $D^{-1}$ is zero. Hence the whole matrix is congruent to $G\oplus D$, and the invertibility of $D$ proves unchanged nullity. The same equality in reverse applies to a tube removal whenever its source and target are connected. Together with step 1.1, every connected tube move, signed small crosscap and ambient isotopy in [F2] preserves nullity. [step 1.1, F2, algebra]

3.1 First consider two connected spanning surfaces $H_0,H_1$ for the same link. Supply their finite smooth presentations using [F1], then apply the actual normalization in [F3] to $H_0$ with $H_1$ as comparison. Each of its operations preserves nullity by step 2.1, so the normalized $H_0^*$ has the same nullity as $H_0$. Retain the boundary tubes constructed by its collar construction: the comparison collar is the angle-zero ray and the changed collar is the ray of a fixed small angle $\delta\in(0,\pi)$. The later perturbation fixes a smaller tube. The same invertible linear coordinate change in each normal plane, sending these two independent ray vectors to the two positive axes, supplies the exact collar-chart hypothesis of [F4]. These are actual whole-collar charts from the construction, not an inference merely from boundary tangent directions. [step 2.1, F1, F3, construct, algebra]

4.1 The movie in [F4] now compares $H_0^*$ and $H_1$ through connected finitely presented surfaces. At every tube addition or removal step 2.1 preserves nullity, and ambient isotopies preserve it by [F5]. Telescoping the finite equalities gives $\nu(B_{H_0})=\nu(B_{H_0^*})=\nu(B_{H_1})$. Thus the nullity itself is independent of the connected spanning surface for the given link. [step 2.1, step 3.1, F4, F5, algebra]

5.1 For each original $F_i$ use [F1] to join its $c(F_i)$ components by exactly $c(F_i)-1$ component-connecting tubes. Step 1.1 and the exact zero-block matrix in [F1] give a connected surface $H_i$ with $\nu(B_{H_i})=\nu(B_{F_i})+c(F_i)-1$. Apply step 4.1 to these two connected surfaces to obtain the stated invariant. This argument keeps every old cross-component entry inside $G$ at each tube connection. Ambient isotopy carries components to components and transports the pairing by [F5], so the invariant also depends only on the stated link isotopy type. [step 1.1, step 4.1, F1, F5, algebra]

6.1 A nondegenerate pairing has nullity zero, so the equality in step 5.1 gives equal component counts for two nondegenerate spanning surfaces of the same link. A definite form is nondegenerate, including the zero-dimensional form, so this applies in particular to the two initial definite surfaces in the arc assertion. Their cut surfaces remain definite by [F5]. If their boundary links are isotopic, transport one cut surface along that isotopy and apply the same component-count equality to them. Thus the initial counts agree and the cut counts agree. The component increase is either zero or one, and is one exactly for a separating cut by [F5]; subtracting the equal initial counts from the equal final counts proves the asserted equivalence of separating arcs. [step 5.1, F5, algebra] ∎
