---
id: lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count
kind: lemma
title: "Cellular boundary coefficients are the signed trajectory counts"
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cellular-boundary-from-three-consecutive-skeleta, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-incidence-number-of-two-cw-cells, thm-cellular-boundary-is-the-incidence-degree-matrix, def-oriented-cellular-chain-group, def-signed-morse-differential-over-the-integers, def-mod-two-morse-differential, lem-unstable-orientations-induce-trajectory-moduli-orientations, def-orientation-line-of-a-morse-critical-point, def-induced-boundary-orientation, def-product-orientation, lem-evaluation-on-a-regular-level-identifies-unparametrized-trajectories, prop-a-transverse-oriented-normal-bundle-orients-an-embedded-submanifold, cor-index-one-trajectory-moduli-spaces-are-finite, def-morse-smale-pair, def-axiom-of-choice, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-metric-end-flow-matching-gives-local-broken-charts, lem-orientation-lines-orient-continuation-moduli-spaces, thm-long-exact-sequence-of-a-pair-in-singular-homology, cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient, thm-relative-homology-of-consecutive-cw-skeleta]
justified_by: []
dependency_level: 7
proof_strategy: direct
sources:
  references:
    - title: "Allen Hatcher, Algebraic Topology, Section 2.2"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Printed pp. 137–141: Lemma 2.34, connecting-map construction, Theorem 2.35 and the cellular boundary formula. The relative disk-filtration extension is proved below."
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9.c, first part: N(c,d) equals the number n(c,d) of trajectories, with the degree computation on the boundary of the cell, printed pp. 121-122, PDF pp. 131-132"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Proposition 2.5.1 (Thom--Smale), read at PDF p. 74"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes, complete author PDF, 115 pp.)"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 21, Sec. 7.4 comparison remarks: for a self-indexing Morse function MC_* to C^{cell}_*, p maps to W^u(p), and the cellular intersection product, PDF p. 99"
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(f,X)$ be as in
[[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]; write
$e_p$ for the critical-disk generator at $p$ (in the closed case, the cell
$W^u(p)$) and orient $e_p$ by the
orientation-line generator $or_p$ of $W^u(p)$ in the integral case
([[def-orientation-line-of-a-morse-critical-point]],
[[def-nondegenerate-critical-point-nullity-index-and-coindex]]); over
$\mathbb Z/2$ no orientation is used
([[def-morse-smale-pair]]). In the relative case use the exact disk-attachment
filtration $Z^{(k)}$ of that supplier, with $Z^{(-1)}=Z^{(-2)}=M_0$.
The coefficient $[e_p:e_q]$ is defined by the connecting map followed by
relativization,
$$H_k(Z^{(k)},Z^{(k-1)};\Lambda)\longrightarrow H_{k-1}(Z^{(k-1)};\Lambda)\longrightarrow H_{k-1}(Z^{(k-1)},Z^{(k-2)};\Lambda),$$
with $d_0=0$ ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]]).
It is also the relative cellular coefficient in the stagewise CW model
obtained by transporting and cellularly approximating those attaching maps,
with generators transported from the oriented disks. The exact evaluations
need not themselves extend a supplied CW structure on $M_0$.
Then for all $p,q$ with
$\operatorname{ind}(p)=\operatorname{ind}(q)+1$ the incidence coefficient
$[e_p:e_q]$ in these chosen oriented bases satisfies
$$[e_p:e_q]=\begin{cases}\#\mathcal M(p,q)\bmod 2,&\Lambda=\mathbb Z/2,\\[2pt] \varepsilon_{\operatorname{ind}(p)}\cdot n_X(p,q),&\Lambda=\mathbb Z,\end{cases}$$
where $n_X(p,q)=\sum_{\gamma\in\mathcal M(p,q)}\epsilon(\gamma)$ is the
integral Morse coefficient
([[def-signed-morse-differential-over-the-integers]]) and
$\varepsilon_{\operatorname{ind}(p)}\in\{\pm1\}$ is a sign depending only on
the cell dimension. Consequently the cellular boundary matrix of
[[def-oriented-cellular-chain-group]] equals the matrix $(n_X(p,q))$ of the
Morse differential after replacing the oriented basis element $e_p$ by
$\varepsilon'_p e_p$ for suitable signs
$\varepsilon'_p\in\{\pm1\}$ depending only on $\operatorname{ind}(p)$; over
$\mathbb Z/2$ the identity on generators is already a chain map
([[thm-cellular-boundary-is-the-incidence-degree-matrix]],
[[def-mod-two-morse-differential]]).

In the closed case, for $\operatorname{ind}(p)\ge2$ this coefficient is the
oriented incidence number of [[def-incidence-number-of-two-cw-cells]]. The
relative coefficient uses the same disk-boundary projection after killing
the incoming face. In degree one, write the
boundary of the oriented characteristic interval as terminal point minus
initial point, and express those points in the chosen vertex generators of
[[def-oriented-cellular-chain-group]]. Thus if a vertex generator is the
negative of its canonical point class, its coefficient changes sign;
endpoints in $M_0$ contribute zero to the relative coefficient. The
unsigned-vertex formula in the incidence definition uses canonical point
generators and must be adjusted for this orientation convention.

With the stated kernel-then-normal, flow-first and outward-normal-first orders,
the proof gives $\varepsilon_k=+1$ for every $k$; the displayed possible
dimension normalization is therefore trivial for these precise conventions.

## Facts & Assumptions

**Given:** The Axiom of Choice, the characteristic disks of the closed or adapted relative data, and the specified unstable critical rays in the integer case.

[F1] The abstract compactified unstable disks have continuous disk evaluation maps, with first-break faces projecting to the lower unstable disk and exits projecting to $M_0$. They give the exact disk-attachment filtration and its stagewise cellularly approximated CW model; in the closed case the exact disks are CW characteristic disks ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]).

[F2] Cellular coefficients are incidence degrees in positive target dimension and signed interval endpoint coefficients in degree one, in the chosen oriented cell bases ([[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[def-cellular-boundary-from-three-consecutive-skeleta]], [[def-oriented-cellular-chain-group]]).

[F3] The trajectory sign is the ordered transverse-normal sign with the positive flow ray first. The finite matching passage normal blocks are positive and its neck outward ray is a positive multiple of the long-time direction ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[lem-orientation-lines-orient-continuation-moduli-spaces]], [[lem-metric-end-flow-matching-gives-local-broken-charts]], [[def-induced-boundary-orientation]], [[def-product-orientation]]).

[F4] Pair connecting maps are natural. For a nonempty closed subspace retracting from an open neighbourhood, relative homology is reduced quotient homology. The relative groups of consecutive CW skeleta are free on the oriented cells in their dimension and zero otherwise ([[thm-long-exact-sequence-of-a-pair-in-singular-homology]], [[cor-homology-of-good-pairs-is-reduced-homology-of-the-quotient]], [[thm-relative-homology-of-consecutive-cw-skeleta]]).

## Proof

**Proof technique:** direct, by the ordered local projection degree.

1.1 In the relative case first justify the coefficient without assuming an exact CW structure. Each stage of [F1] attaches finitely many $k$-disks to $Z^{(k-1)}$. For $k\ge1$, the previous stage together with the open outer annuli of these disks is an open neighbourhood retracting radially onto that stage, fixing it. The finite attaching quotient makes this a continuous retraction. If a disk is present its nonempty sphere requires a nonempty previous stage. Collapsing that stage gives a finite wedge of $k$-spheres; [F4] computes its reduced homology from its consecutive skeleta. Thus $H_k(Z^{(k)},Z^{(k-1)};\Lambda)$ is free on the oriented new disks, with other relative degrees zero. Empty attachments give zero groups; at $k=0$ disjoint points give the same assertion directly. Naturality of the pair sequence identifies the connecting map on a disk generator with its oriented boundary followed by the attaching map and relativization. Consecutive connecting composites vanish by pair exactness. This defines the claimed disk-filtration complex with $d_0=0$. Fix consecutive indices $\operatorname{ind}(p)=k$, $\operatorname{ind}(q)=k-1$. The relative trajectories between these interior critical points lie in a compact slab with height between $f(q)$ and $f(p)$, disjoint from the boundary. Its actual metric height estimate, critical splitting and local exact matching are the interior arguments of [F1]; transversality gives zero orbit dimension and permits no broken index-drop-one limit. Thus the relevant orbit set is finite, in either the closed or relative case. The inverse image of the open cell $W^u(q)$ under the characteristic boundary map is precisely the disjoint union of the first-break sheets $\{\gamma\}\times W^u(q)$. All other boundary sheets map to other cells or to $M_0$, and the incidence collapse kills them; in the relative case the entire incoming face is killed. [F1, F2, F4, given, construct]

2.1 At a sheet near its lower critical centre use the actual metric free-endpoint passage of [F1, F3]. Write the incoming transverse sheet as $z=(h(u),u)$ and its exact matching parameterization as $z(b,T)=(h(F_T(b)),F_T(b))$, where the terminal unstable coordinate is $b$ and $\det D_bF_T>0$. Its terminal point is $x(b,T)=\phi_T z(b,T)$. Pulling its derivatives back by the flow gives $D\phi_{-T}\partial_Tx=X(z)+\partial_Tz$ and $D\phi_{-T}\partial_bx=\partial_bz$. The latter span the incoming transverse sheet; the extra term $\partial_Tz$ is tangent to that sheet and hence may be subtracted in the ordered determinant. The trajectory convention gives $or_p=\epsilon(\gamma)[X,or_q]$, and the positive $D_bF_T$ preserves the transverse normal ray. Thus the ordered terminal variables $(\partial_T,b)$ carry precisely $\epsilon(\gamma)[\partial_T,or_q]$. In the compactifying coordinate $\rho=1/T$, the outward ray $-\partial_\rho$ is a positive multiple of $\partial_T$. Outward-normal-first therefore makes the boundary projection to the lower unstable disk have local degree $\epsilon(\gamma)$. The characteristic disk agrees with the critical orientation on its fixed inner cap, so its topological disk parameterization preserves this orientation. Connectedness of the open lower disk keeps the projection sign constant throughout the sheet. No dimension-dependent permutation or normalized hyperbolic rate is used. [F1, F3, step 1.1, algebra]

3.1 For $k\ge2$, [F2] in the closed case and the disk-boundary connecting formula of step 1.1 in the relative case express the incidence degree as the sum of the finitely many local projection degrees of step 2.1. It is therefore $\sum_\gamma\epsilon(\gamma)=n_X(p,q)$ over the integers and the orbit cardinality modulo two. For $k=1$ the characteristic disk is an interval; the outward flow ray at each endpoint compares with its oriented tangent by terminal-minus-initial signs. Expressing the endpoint in the chosen vertex generator gives the same $\epsilon(\gamma)$ comparison of step 2.1. In particular reversing a zero-dimensional critical ray reverses both its chosen vertex generator and the Morse normal comparison; no canonical positive vertex basis is silently imposed. Relative endpoints in $M_0$ vanish under relativization. This proves $\varepsilon_k=1$ for every degree with the stated orders. [F2, F3, step 1.1, step 2.1, algebra]

4.1 The matrices therefore agree directly in the chosen oriented critical-cell bases. In the notation of the retained statement all normalization factors $\varepsilon'_p=\prod_{j\le\operatorname{ind}(p)}\varepsilon_j$ are one; more generally its displayed diagonal formula follows from $a_k\varepsilon_k=a_{k-1}$ for dimension signs. For the relative CW model of [F1], perform the attachment comparisons in index order, keeping the preceding stage and each new disk orientation. A mapping-cylinder comparison transports the attaching sphere through the preceding equivalence, and its subsequent attaching homotopy keeps the new disk generator with degree $+1$. It therefore gives isomorphisms on the consecutive relative groups sending each exact disk generator to its corresponding relative cell generator. Naturality in [F4] makes these isomorphisms commute with the connecting maps and relativization. These are the relative cellular boundaries of the model: its index stages contain all of $M_0$, whose cells vanish in relative chains. Thus the same coefficient matrix is obtained, although the exact evaluations need not be CW characteristic maps. Equality on the finite basis proves the claimed chain map and coefficient comparison in both coefficient cases. [F1, F2, F4, step 1.1, step 3.1, algebra] ∎
