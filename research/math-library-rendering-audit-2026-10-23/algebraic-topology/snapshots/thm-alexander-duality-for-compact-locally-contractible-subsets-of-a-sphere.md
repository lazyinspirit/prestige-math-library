---
id: "thm-alexander-duality-for-compact-locally-contractible-subsets-of-a-sphere"
kind: "theorem"
title: "Alexander duality for compact locally contractible subsets of a sphere"
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-poincare-duality-for-oriented-topological-manifolds", "def-compactly-supported-singular-cohomology-of-a-locally-compact-space", "thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts", "thm-long-exact-sequence-of-a-pair-in-singular-homology", "thm-excision-for-singular-cohomology", "thm-long-exact-sequence-of-a-pair-in-singular-cohomology", "thm-five-lemma-for-a-morphism-of-long-exact-sequences", "cor-homology-of-spheres", "def-axiom-of-choice", "def-zero-simplex-augmentation-and-reduced-singular-homology", "lem-coordinate-ball-classes-identify-local-homology-stalks", "def-orientation-local-system-and-orientation-cover", "cor-homotopic-maps-induce-the-same-map-on-singular-homology", "thm-heine-borel-rn"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher, Algebraic Topology, Theorem 3.44 and Corollary 3.45, pp.254–256
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
    - title: Miller, Lectures on Algebraic Topology, Theorem 38.4
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. Fix the usual orientation of $S^n$. If $K$ is a nonempty proper compact weakly locally contractible subspace of $S^n$ and $R$ is a commutative unital ring, there are isomorphisms
$$\widetilde H_i(S^n\setminus K;R)\cong\widetilde H^{n-i-1}(K;R)$$
for every integer $i$. They are natural for inclusions of such compact subsets, with the reverse inclusions of their complements, and with the fixed sphere orientation.

For the nonempty spaces here, reduced homology in degree zero is the augmentation kernel, reduced cohomology in degree zero is the quotient by constant classes, positive reduced groups are ordinary groups, and negative reduced groups are zero. AC is inherited from Poincaré duality and the neighborhood-retract theorem.

## Facts & Assumptions

[F1] [[thm-poincare-duality-for-oriented-topological-manifolds]] gives $D_X:H_c^q(X;R)\to H_{n-q}(X;R)$ for oriented boundaryless $n$-manifolds, including open-extension naturality, and the ordinary cap map for compact $X$.

[F2] [[def-compactly-supported-singular-cohomology-of-a-locally-compact-space]] defines the compact-support colimit and its common-larger-support equality criterion.

[F3] [[thm-compact-locally-contractible-euclidean-subsets-are-neighborhood-retracts]] gives neighborhood cohomology continuity for compact weakly locally contractible Euclidean subsets, for all coefficient groups.

[F4] [[thm-long-exact-sequence-of-a-pair-in-singular-homology]] gives the homology pair sequence, with naturality obtained by taking the boundary of the same relative cycle. [[cor-homotopic-maps-induce-the-same-map-on-singular-homology]] gives homology invariance under the contractions below.

[F5] [[thm-excision-for-singular-cohomology]] identifies relative cohomology after removing a closed set inside the open relative subspace.

[F6] [[thm-long-exact-sequence-of-a-pair-in-singular-cohomology]] gives the cohomology pair sequence and its positive connector. Its representative extension formula also gives naturality under inclusions of pairs.

[F7] [[thm-five-lemma-for-a-morphism-of-long-exact-sequences]] applies when the other four vertical maps of an exact five-term window are isomorphisms.

[F8] [[cor-homology-of-spheres]] computes sphere homology with arbitrary abelian coefficients.

[F9] [[def-zero-simplex-augmentation-and-reduced-singular-homology]] defines the augmentation and reduced homology. Its degree-zero quotient is $\ker(H_0(X;R)\to R)$ since every one-simplex boundary has coefficient sum zero.

[F10] [[lem-coordinate-ball-classes-identify-local-homology-stalks]] gives compatible ball-to-point restrictions; [[def-orientation-local-system-and-orientation-cover]] uses these sections to define the topology of the local orientation system.

[F11] [[def-axiom-of-choice]] is assumed for the exact atlas/UCT and controlled-extension uses in [F1] and [F3].

[F12] [[thm-heine-borel-rn]] makes the closed bounded unit sphere compact in its Euclidean ambient space.

## Proof

**Given:** $K,R,n$ and the fixed sphere orientation. When $n=0$, $S^0$ has two points; a nonempty proper subset and its complement are both singletons. Their reduced groups in every degree are zero by the stated conventions, so the assertion holds uniquely and naturally. Henceforth $n\ge1$, and put $N=S^n\setminus K$.

1.1 We record the manifold and orientation interfaces for arbitrary $n$ and $R$. In coordinates $(u,t)\in\mathbb R^n\times\mathbb R$ on the unit sphere, projection away from the north pole is $u/(1-t)$, with inverse $$v\longmapsto\left(\frac{2v}{1+|v|^2},\frac{|v|^2-1}{1+|v|^2}\right).$$ Direct substitution gives both inverse identities and norm one; the denominators are nonzero on the indicated domains, so both maps are continuous. An orthogonal linear map carrying any supplied point to the north pole gives the same chart away from that point. Such a map exists explicitly: reflection in the hyperplane perpendicular to the difference between that point and the north pole sends one to the other, unless they already coincide, when use the identity. These charts make $S^n$ a Hausdorff second-countable manifold; it is compact as a closed bounded Euclidean subset. Its punctured space is contractible by linear contraction in this chart. Give $D^{n+1}$ its standard orientation and $S^n=\partial D^{n+1}$ its boundary orientation. Take an oriented $(n+1)$-simplex containing the origin and radially project its alternating boundary-facet cycle to $S^n$. Every ray meets the simplex boundary once, so radial projection is a homeomorphism; its outward facet orientations agree with the boundary orientation of the ball. The simplicial calculation and singular comparison in [F8] show that this cycle with coefficient $1_R$ is a generator $s\in H_n(S^n;R)$, including the zero ring. This class restricts isomorphically to every point's local group: the pair sequence [F4] and contractibility of the punctured sphere prove this in degrees $n>1$; for $n=1$, use that the punctured and full sphere have $H_0=R$ with the inclusion inducing the identity augmentation. Both are path connected by the displayed charts (two non-antipodal arcs suffice for any two sphere points). Thus all restrictions of $s$ are generators. On a coordinate ball they are restrictions of its one support-relative class, and [F10] makes this a continuous section. It defines the $R$-orientation of the sphere and, by restriction, of $N$. [F4, F8, F10, F12, given]

2.1 Choose one point outside $K$. Its stereographic chart from step 1.1 puts $K$ in $\mathbb R^n$ as a compact weakly locally contractible subset. Neighborhoods contained in the chart are cofinal among all open neighborhoods of $K$ in $S^n$: intersect any neighborhood with the chart, and do the same to any equality witness in the colimit. [F3] consequently gives canonical isomorphisms $$\varinjlim_{U\supset K}H^q(U;R)\xrightarrow{\sim}H^q(K;R).$$ Only existence of one chart was used; the resulting map is restriction to $K$, independent of that point. [F3, F11, step 1.1]

2.2 Closed duality [F1] and the sphere homology calculation [F8] show that $H^q(S^n;R)$ is $R$ for $q=0,n$ and zero otherwise. In degree zero its generator is the constant function one: a zero-cocycle is constant along every path because its coboundary on a path is the difference of endpoint values, and the sphere is path connected as in step 1.1. At the top degree the map $$E:H^n(S^n;R)\xrightarrow{D_{S^n}}H_0(S^n;R)\xrightarrow{\varepsilon}R$$ is an isomorphism. In fact $E([\varphi])=\varphi(s)$ by the front-evaluation/back-vertex cap formula and coefficient-sum augmentation. No universal-coefficient statement over the possibly non-PID ring $R$ is required here. [F1, F8, F9, F11, step 1.1]

3.1 We will use exactness of neighborhood colimits directly. Each such colimit of modules has representatives at neighborhoods, with equality if the representatives agree after restriction to a common smaller neighborhood, as constructed in [F3]'s proof. For a compatible system of exact rows, an element of a colimit kernel is represented by $a$ at some neighborhood. Its image becomes zero at a smaller neighborhood, by that equality criterion. Exactness there gives a preimage at that one stage, hence a preimage in the colimit. Conversely every colimit image maps to zero because it already does so at a stage. This proves equality of image and kernel at every position. It uses a witness for one element and a finite intersection of neighborhoods, with no simultaneous choice of preimages and no categorical AB5 theorem. [F3, step 2.1]

4.1 Apply step 3.1 to the pair cohomology sequence for $(S^n,U)$ as $U$ decreases to $K$. Its canonical map to the pair sequence for $(S^n,K)$ has identity maps on the constant sphere groups, and the isomorphisms of step 2.1 on the neighborhood groups. In the exact window $$H^{q-1}(S^n)\to H^{q-1}(U)\to H^q(S^n,U)\to H^q(S^n)\to H^q(U),$$ the four outer maps after colimit are therefore isomorphisms. The maps commute by [F6]'s cochain restriction and extension formula, so [F7] proves $$\varinjlim_{U\supset K}H^q(S^n,U;R)\xrightarrow{\sim}H^q(S^n,K;R).$$ Compact subsets $L\subset N$ correspond exactly to the open neighborhoods $U=S^n\setminus L$ of $K$, because the sphere is compact Hausdorff. Excision [F5], removing the closed $K$ inside open $U$, gives $$H^q(S^n,U;R)\xrightarrow{\sim}H^q(N,U\setminus K;R)=H^q(N,N\setminus L;R).$$ These maps commute with restrictions since they are induced by inclusion of pairs. Taking the support colimit [F2] thus yields a canonical isomorphism $J:H_c^q(N;R)\to H^q(S^n,K;R)$. [F2, F5, F6, F7, step 2.1, step 3.1]

5.1 Combine $J$ with [F1] to obtain $$\Theta_i=J D_N^{-1}:H_i(N;R)\xrightarrow{\sim}H^{n-i}(S^n,K;R).$$ The map from this relative cohomology group to $H^{n-i}(S^n;R)$ corresponds under $D_{S^n}$ to the inclusion $H_i(N;R)\to H_i(S^n;R)$. To verify the assertion, represent a compact-support class at $L$, write $U=S^n\setminus L$, and use the inverse of the excision isomorphism in step 4.1. Forgetting the relative condition then gives its extension from $N$ to $S^n$, precisely the open-extension construction of [F1]. Its naturality says that capping this extension by $s$ is the image of the cap in $N$. Passing to the colimit proves the stated equality. In degree $i=0$, composition with the isomorphism $E$ of step 2.2 is therefore the augmentation $H_0(N;R)\to R$, since inclusion does not change the coefficients of a zero-chain. It is onto: $N$ is nonempty, so a point with coefficient $r$ maps to every $r\in R$. [F1, F2, F9, F11, step 2.2, step 4.1]

6.1 Write $q=n-i$. For $1<q<n$, the two neighboring sphere cohomology groups vanish by step 2.2, so the pair connector in [F6] is an isomorphism $H^{q-1}(K;R)\to H^q(S^n,K;R)$. Here $i=n-q>0$ and $q-1>0$, so neither side changes on reduction. Compose its inverse with $\Theta_i$ to obtain the claimed duality. For $q=1<n$, the same exact sequence identifies $H^1(S^n,K;R)$ with the cokernel of $H^0(S^n;R)\to H^0(K;R)$. The image is exactly the constant classes, by step 2.2, so this is $\widetilde H^0(K;R)$. Again $i=n-1>0$, giving the claimed ordinary positive homology group. [F6, step 2.2, step 5.1]

6.2 For $q=n$, consider $$H^{n-1}(S^n;R)\to H^{n-1}(K;R)\xrightarrow{\delta}H^n(S^n,K;R)\to H^n(S^n;R).$$ Under $\Theta_0$ the kernel of the last arrow is exactly the augmentation kernel $\widetilde H_0(N;R)$ by step 5.1. Exactness identifies this kernel with the quotient of $H^{n-1}(K;R)$ by the preceding sphere image. If $n>1$ that image is zero, giving $\widetilde H^{n-1}(K;R)=H^{n-1}(K;R)$. If $n=1$ the image consists of the constant zero-degree classes, giving $\widetilde H^0(K;R)$. Thus the same connector induces the required isomorphism on the reduced groups in this case as well; no arbitrary splitting or cancellation of a free summand is used. [F6, F9, step 2.2, step 5.1]

6.3 All remaining degrees give zero groups. The beginning of [F6]'s sequence identifies $H^0(S^n,K;R)$ with the kernel of $H^0(S^n;R)\to H^0(K;R)$, which is zero because $K$ is nonempty and a constant class is zero only when its value is zero. Hence $H_n(N;R)=0$ by step 5.1. For $i>n$, [F1] gives $H_i(N;R)=H_c^{n-i}(N;R)=0$ by the negative cochain convention; the right reduced degree is negative for all $i\ge n$. For $i<0$, we need $H^k(K;R)=0$ for $k\ge n$. First $H^{n+1}(S^n,K;R)=H_c^{n+1}(N;R)=H_{-1}(N;R)=0$ by step 5.1 and the zero negative homology convention. The map $H^n(S^n,K;R)\to H^n(S^n;R)$ is onto by step 5.1. The pair exact sequence therefore gives $H^n(K;R)=0$. For $k>n$, the sphere groups vanish and $H^{k+1}(S^n,K;R)=H_{n-k-1}(N;R)=0$, so the same exact sequence gives $H^k(K;R)=0$. This proves the assertion also for negative $i$. [F1, F2, F6, F9, step 2.2, step 5.1]

7.1 The maps are natural as stated. If $K'\subset K$, then $N\subset N'=S^n\setminus K'$. The common-support excision maps in step 4.1 commute with this inclusion, and open extension gives $D_{N'}e=i_*D_N$ by [F1]. The induced map on relative cohomology is the restriction $H^q(S^n,K)\to H^q(S^n,K')$. It commutes with the pair connector by [F6]. Constants and zero-chain coefficient sums are also preserved under restriction and inclusion. Thus the identifications in steps 6.1–6.2 commute with the maps on both reduced groups; in the other degrees the assertion concerns zero maps. All arguments include the zero ring, singleton $K$, and disconnected $K$ or complement. Degenerate singular simplices obey the same cochain restrictions and cap identities. The nonempty and proper hypotheses supply, respectively, injectivity of constants and surjectivity of complement augmentation; they are not dropped at either endpoint. AC is precisely inherited from [F1]'s exhaustion/UCT and [F3]'s nearest-point and controlled-extension choices. All colimit exactness and reduction arguments are elementwise and introduce no further AC. [F1, F6, F9, F11, step 4.1, step 5.1, step 6.1, step 6.2, step 6.3] ∎
