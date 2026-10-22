---
id: lem-upsilon-nu-minus-four-ball-bound
kind: lemma
title: "The auxiliary nu-minus threshold is bounded by smooth slice genus"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-upsilon-function-from-filtered-complex
  - thm-grid-homology-independent-of-grid-and-equals-knot-floer
  - lem-heegaard-floer-holomorphic-disk-regularity-compactness-gluing
  - def-smooth-and-topological-slice-genus
  - lem-knot-floer-large-surgery-and-filtered-cobordism-input
  - def-knot-floer-cobordism-map
  - lem-knot-floer-holomorphic-triangle-transversality-compactness-gluing
  - lem-knot-floer-cobordism-naturality-and-movie-invariance
  - def-countable-choice
  - lem-knot-floer-duality-and-filtration-swap
dependency_level: 9
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "The finite filtered threshold argument and the least-integer definition use no choice. The planned analytic cobordism branch uses ACω as declared by its suppliers; full AC is not inferred or used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §2.3"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definitions 2.11–2.12, Theorem 2.14, and Proposition 2.13; large-surgery threshold and the smooth genus estimate"
    - title: "Jennifer Hom and Zhongtao Wu, Four-ball genus bounds and a refinement of the Ozsvath-Szabo tau-invariant"
      url: "https://arxiv.org/pdf/1401.1565"
      locator: "Propositions 2.1, 2.3–2.4; definition of nu-plus, nonnegativity, and the four-ball genus bound"
---

## Statement

Let $K\subset S^3$ be a smooth oriented knot and let $C(K)=\mathrm{CFK}^{\infty}(K)$ have a finite homogeneous basis $x_1,\ldots,x_m$ with Maslov grading $M(x_r)$ and Alexander filtration $A(x_r)$. Let $C^-(K)$ be the subcomplex spanned over $\mathbb F_2[U]$ by $U^n x_r$ for $n\ge0$, with $M(U^n x_r)=M(x_r)-2n$ and $A(U^n x_r)=A(x_r)-n$, and assume $H_*(C^-(K))\cong\mathbb F_2[U]$ with generator in Maslov degree zero. For each integer $s$, let $\mathcal A(K,s)$ be the subcomplex spanned over $\mathbb F_2$ by those terms $U^n x_r$ with $n\ge0$ and $A(x_r)-n\le s$. For any Maslov-graded $\mathbb F_2[U]$ complex $D$, let $\delta(D)$ be the maximal Maslov grading of a homogeneous non-torsion class in $H_*(D)$, with $\delta(D)=-\infty$ if no such class exists. Define $\nu^-(K)$ to be the least integer $s$ for which $\delta(\mathcal A(K,s))=0$. Then
$$ 0\le \nu^-(K)\le g_4^{\mathrm{sm}}(K), $$
where $g_4^{\mathrm{sm}}(K)$ is the minimum genus of a smooth compact connected oriented properly embedded surface in the four-ball bounded by $K$.

## Statement references

[[def-upsilon-function-from-filtered-complex|The finite bifiltered complex and filtration-coordinate convention]]

[[def-smooth-and-topological-slice-genus|The smooth four-ball genus branch]]

[[lem-knot-floer-large-surgery-and-filtered-cobordism-input|The current tau cobordism supplier; its proof is incomplete and it does not state this nu-minus estimate]]

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §2.3](https://arxiv.org/pdf/1407.1795)

[Hom and Wu, *Four-ball genus bounds and a refinement of the Ozsvath-Szabo tau-invariant*, Proposition 2.4](https://arxiv.org/pdf/1401.1565)

## Facts & Assumptions

**Given:** The actual normalized knot complex and smooth four-ball genus in the unchanged Statement. Put $R=\mathbb F_2[U]$, $\Lambda=R[U^{-1}]$, and use coordinates $(i,j)=(-n,A(x_r)-n)$ on $U^n x_r$. Thus $B=C\{i\le0\}=C^-(K)$ and $A_s=C\{i\le0,j\le s\}=\mathcal A(K,s)$. The hypothesis $H(B)=R$ with generator in Maslov degree zero is retained explicitly; no inference from localized rank one alone is used.

[F1] The normalized finite free complex has the stated two filtrations, its differential does not increase them, $M(U)=-2$, and its localized homology has a normalized Maslov-zero generator. The current original Statement assumes $H(B)=R$ with generator in degree zero. [[def-upsilon-function-from-filtered-complex]]

[F2] The accepted normalized coordinate-swap interface is a Maslov-degree-zero $\Lambda$-linear filtered chain homotopy equivalence $\Phi:C(K)\to C(K)$ of the same oriented knot, satisfying $\Phi(C\{i\le a,j\le b\})\subset C\{i\le b,j\le a\}$. Its inverse has the same swap property, and the inverse identities have bifiltered homotopies. The normalized total tower generator is carried to itself. This exact accepted closure48 interface is reused without a new proof audit. [[lem-knot-floer-duality-and-filtration-swap]]

[L1] The remaining geometric operation is an actual genus-surface map: for a smooth genus-$g$ surface from the unknot to $K$ in $S^3\times I$, construct an $R$-linear homogeneous degree-zero chain map $F:R\to B$ whose image is contained in $A_g$ and for which $F_*(1)$ is the normalized nonzero tower generator of $H(B)$. In particular its tower action must be the unit $1$, not zero or a positive power of $U$. This map is not supplied by the argument below, by localized rank one, by a tau inequality, or merely by analytic identities for already defined triangle counts. The decorated map and movie/naturality owners retain this actual geometric operation. [[def-knot-floer-cobordism-map]] [[lem-knot-floer-cobordism-naturality-and-movie-invariance]]

[A1] Countable choice remains the declared assumption for the planned analytic cobordism branch; no full choice is used in the algebra below. [[def-countable-choice]]

## Proof

1.1 Write $M_r=M(x_r)$ and $A_r=A(x_r)$. The terms of $\mathcal A(K,s)$ on the $r$th $U$-tower are $U^n x_r$ with $n\ge\max(0,A_r-s)$, so their Maslov gradings are at most $M_r-2\max(0,A_r-s)$. By [F1], this bound tends to $-\infty$ as $s$ tends to $-\infty$; since the basis is finite, choose $s_0$ so that it is strictly negative for every $r$ when $s\le s_0$. Then $H_*(\mathcal A(K,s))$ has no class of degree zero and $\delta(\mathcal A(K,s))\ne0$. For all $s\ge\max_r A_r$, $\mathcal A(K,s)=C^-(K)$ and its normalized tower gives $\delta=0$. Thus the set defining $\nu^-$ is nonempty and bounded below, and its least element exists. This finite existence argument is unchanged; nonnegativity is now proved below. [given, F1, algebra]

2.1 For fixed $s$, the explicit $R$-basis of $A_s$ is $\{U^{\max(0,A_r-s)}x_r\}_r$, so it is a finite free graded complex. The inclusion $v_s:A_s\to B$ becomes the identity on $C$ after adjoining $U^{-1}$. Localization commutes with homology here directly: a localized cycle has the form $U^{-N}z$, and clearing the finitely many denominators in its cycle or boundary equation gives exactly the corresponding localized homology class. Consequently the homology kernel of $v_s$ consists precisely of $U$-torsion classes and its image is a nonzero ideal in $H(B)=R$. For a homogeneous class, polynomial torsion is equivalent to $U$-torsion: the terms in an annihilating polynomial act in distinct Maslov degrees, so any nonzero monomial term already annihilates that class. The ideal is homogeneous, so it is $U^{V_s}R$ for a unique integer $V_s\ge0$: each nonzero homogeneous polynomial over $\mathbb F_2$ is one monomial. Homogeneous lifting of its least-exponent generator gives a non-torsion class in degree $-2V_s$. Every other homogeneous non-torsion class maps nontrivially to a monomial of exponent at least $V_s$, since a class mapping to zero would be torsion. Thus $\delta(A_s)=-2V_s$, with no assumption that $H(A_s)$ is torsion-free. [F1, step 1.1, construct, algebra]

3.1 Define the second actual map $h_s:A_s\to B$ by $h_s=\Phi\circ U^s$ restricted to $A_s$. Negative $s$ is allowed here because the map is first formed in $C$, where $U$ is invertible; its target nevertheless lies in the polynomial subcomplex $B$. Indeed $U^s$ sends $(i,j)$ to $(i-s,j-s)$ and then $\Phi$ swaps the filtration bounds, so $i\le0,j\le s$ is sent to $i'\le0,j'\le-s$. The map has Maslov degree $-2s$ by [F2]. It localizes to an isomorphism, so its homology kernel again consists of torsion and its nonzero homogeneous image is $U^{H_s}R$ for an integer $H_s\ge0$. Since its degree is $-2s$ and the maximal non-torsion degree of the source is $-2V_s$, its maximal image degree is $-2V_s-2s$. Comparing with $-2H_s$ proves $H_s=V_s+s$. Both exponents are nonnegative because their images are actual ideals in the polynomial target, not merely Laurent submodules. [F1, F2, step 2.1, construct, algebra]

3.2 More precisely $T_s=\Phi U^s$ is a degree-$-2s$ chain homotopy equivalence from $A_s$ to $A_{-s}$. The inverse is $U^{-s}\Phi^{-1}$; its filtration bounds send $i'\le0,j'\le-s$ back to $i\le0,j\le s$. The bifiltered inverse homotopies from [F2], transported through the same shifts, restrict to these subcomplexes. Thus $h_s=v_{-s}\circ T_s$ has image equal to the image of $v_{-s}$ on homology, proving $H_s=V_{-s}$. This supplies the full normalized symmetry $V_{-s}=V_s+s$, rather than identifying two arbitrarily normalized free towers. [F2, step 2.1, step 3.1, construct, algebra]

4.1 The inclusions $U A_{s+1}\subset A_s\subset A_{s+1}$ give $U^{V_{s+1}+1}R\subset U^{V_s}R\subset U^{V_{s+1}}R$ in the same $H(B)$; hence $V_{s+1}\le V_s\le V_{s+1}+1$. For all sufficiently large $s$, step1.1 gives $A_s=B$ and $V_s=0$. Therefore the zero set of $V_s$ is an upper interval of integers, and the original least-$\delta=0$ definition is exactly the least integer with $V_s=0$. If $s<0$, step3.1 gives $V_s=H_s-s\ge-s>0$, so $\delta(A_s)<0$. Hence $\nu^-(K)\ge0$. This proves the entire previously missing nonnegative-threshold operation for the actual normalized knot complex. [step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 If the actual surface map in [L1] is supplied, its image $z=F(1)$ is a degree-zero cycle in $A_g$ whose inclusion class is the normalized generator of $H(B)$. Thus $1$ lies in the image ideal $U^{V_g}R$, forcing $V_g=0$. Step4.1 then gives $\nu^-(K)\le g$. A minimum-genus surface in the four-ball can be punctured at a standard interior disk to give the required surface from the unknot to $K$ with the same genus, so the actual map would imply $\nu^-(K)\le g_4^{\mathrm{sm}}(K)$. This row is an exact conditional implication, not a construction of $F$ or a claim of its nonvanishing. [given, L1, step 2.1, step 4.1, construct, algebra]

6.1 The original full Statement is retained. Steps2.1–4.1 prove $V_s,H_s\ge0$, $H_s=V_s+s=V_{-s}$, the threshold interpretation, and $\nu^-\ge0$ using the frozen normalized swap interface. Step5.1 identifies precisely how the genus-surface generator map proves the upper bound once that geometric operation exists. The actual colored band/quasi-stabilization composition, puncturing/naturality and normalized tower-unit calculation needed to construct that map remain unprovided; neither the current tau bound nor rank-one localized homology supplies them. The full genus inequality is therefore still held and no final QED is asserted. [F1, F2, L1, A1, step 2.1, step 3.1, step 3.2, step 4.1, step 5.1]

## Unresolved proof obligations

Only the actual geometric operation [L1] remains for the full original inequality. One concrete sufficient route is a decorated genus-$g$ surface with a disk $w$-region and complementary genus-$g$ $z$-region, whose elementary-count map has Maslov shift zero, Alexander upper shift $g$, and after forgetting the $z$ filtration acts by the unit $1$ on $HF^-(S^3)$. Those shifts and the normalized tower-unit action require the actual knot/basepoint construction; they are not assumptions discharged by this donor. The cobordism owner confirms that the necessary colored band, quasi-stabilization, movie/puncturing and graph-reduction nonvanishing operation is not yet supplied. Existing accepted analytic/grid/tensor/duality proofs are reused and are not reopened.
