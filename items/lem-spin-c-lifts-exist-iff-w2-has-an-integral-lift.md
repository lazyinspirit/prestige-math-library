---
id: lem-spin-c-lifts-exist-iff-w2-has-an-integral-lift
kind: lemma
title: "Spin-c lifts and integral lifts of the second Stiefel–Whitney class"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps: [lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology, def-given-spin-and-spinc-structures-and-associated-spinor-bundles, lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor, cor-euclidean-spin-is-universal-cover, thm-oriented-real-vector-bundles-are-classified-by-bso, thm-long-exact-sequence-of-homotopy-groups-of-a-fibration, thm-absolute-hurewicz-theorem, thm-universal-coefficient-theorem-for-cohomology-over-a-pid, thm-mod-two-reduction-of-chern-classes, lem-cohomology-ring-of-infinite-complex-projective-space, thm-whitney-sum-formula-for-stiefel-whitney-classes, thm-covering-space-lifting-criterion, def-axiom-of-choice]
justified_by: []
proof_strategy: direct
axiom_strength: "Assume AC, inherited from finite good covers, Spin obstruction identification, and characteristic-class suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Liviu I. Nicolaescu, Notes on the Atiyah–Singer index theorem, section 3.2.5, Proposition 3.2.40 and Exercise 3.3.13"
      url: "https://www3.nd.edu/~lnicolae/ind-thm.pdf"
    - title: "Peter Teichner and Elmar Vogt, All 4-Manifolds Have Spin-c Structures"
      url: "https://math.berkeley.edu/~teichner/Papers/spin.pdf"
---

## Statement

Assume AC. Let $M$ be a compact oriented smooth four-manifold, possibly with boundary, with a Riemannian metric. Its oriented tangent frame bundle admits a Spin$^c(4)$ lift if and only if $w_2(TM)$ is the reduction of some class in $H^2(M;\mathbb Z)$. The criterion includes torsion classes. It asserts existence, not a bijection between Spin$^c$ structures and integral lifts of $w_2$.

## Facts & Assumptions

**Given:** AC and the compact oriented Riemannian four-manifold $M$.

[F1] Spin$^c(4)=(\operatorname{Spin}(4)\times U(1))/\langle(-1,-1)\rangle$, and a lift is a principal bundle with the specified equivariant map to the oriented frame bundle ([[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]). The Spin cover is central with kernel $\{\pm1\}$, is universal in rank four, and maps from simply connected overlaps lift through it ([[cor-euclidean-spin-is-universal-cover]], [[thm-covering-space-lifting-criterion]]).

[F2] The universal oriented rank-four frame bundle has contractible total space and classifying space $BSO(4)$. The fibration sequence, Hurewicz, and UCT compute $\pi_1BSO(4)=0$, $\pi_2BSO(4)=\mathbb Z/2$, and $H^2(BSO(4);\mathbb F_2)=\mathbb F_2$. The local sign obstruction and its cellular universal version are constructed explicitly in the proof of the published Spin criterion, steps 1.1–3.2 and 4.2; step 2.1 below recalls the identification needed here ([[thm-oriented-real-vector-bundles-are-classified-by-bso]], [[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]], [[thm-absolute-hurewicz-theorem]], [[thm-universal-coefficient-theorem-for-cohomology-over-a-pid]], [[lem-spin-structures-exist-iff-w2-vanishes-and-form-h1-torsor]]).

[F3] The realification of the Hopf complex line has nonzero $w_2$ on $S^2$, because $w_2=\rho_2c_1$ and its first Chern class generates integral degree-two cohomology. Adding a trivial oriented plane preserves $w_2$ ([[thm-mod-two-reduction-of-chern-classes]], [[lem-cohomology-ring-of-infinite-complex-projective-space]], [[thm-whitney-sum-formula-for-stiefel-whitney-classes]]).

[F4] A finite good cover refining the frame-trivializing cover, a smooth subordinate partition, and coefficient-compatible nerve comparisons for $\mathbb Z$ and $\mathbb F_2$ are supplied including boundary points by [[lem-finite-good-covers-of-compact-smooth-boundary-manifolds-compute-integral-cohomology]].

[A1] Full AC is the inherited premise of these suppliers ([[def-axiom-of-choice]]).

## Proof

**Given:** The data above.

1.1 Choose the finite cover $(U_i)$ from [F4] and ordered oriented frame trivializations. Their transitions $g_{ij}:U_i\cap U_j\to SO(4)$ satisfy $g_{ij}g_{jk}=g_{ik}$. On each nonempty double intersection choose a Spin lift $s_{ij}$ by [F1], with $s_{ji}=s_{ij}^{-1}$. Smoothness follows because the covering projection is a local diffeomorphism. Set $s_{ij}s_{jk}=(-1)^{e_{ijk}}s_{ik}$. Every triple intersection is connected, so $e_{ijk}$ is a constant in $\mathbb F_2$. Associativity and centrality give $e_{ijk}+e_{ikl}=e_{jkl}+e_{ijl}$; changing lifts by signs changes $e$ by a simplicial coboundary. Thus $[e]\in H^2(N;\mathbb F_2)$ is well defined. [F1, F4, construct, algebra]

2.1 Under the nerve comparison this class is $w_2(TM)$, as follows from the universal obstruction calculation in [F2]. For clarity, choose a frame section over the universal 1-skeleton. On a 2-cell compare it around the boundary with a frame on the characteristic disk; the comparison loop in $SO(4)$ lifts closed precisely when its value in $\pi_1SO(4)=\mathbb Z/2$ is zero. Changing edge sections changes these values by the coboundary of their edge lift signs. On a 3-cell the frame bundle is trivial over its characteristic disk and has a Spin lift, so the sum of its boundary obstruction values is zero. Hence this is a universal degree-two cocycle, natural under pullback. On a nerve triangle its boundary comparison is exactly $s_{ij}s_{jk}s_{ki}$ from step 1.1. The universal class is nonzero: the loop rotating an oriented two-plane once lifts to $\cos(\pi t)+e_1e_2\sin(\pi t)$, which starts at $1$ and ends at $-1$. The corresponding bundle on $S^2$ is the real Hopf line plus a trivial plane, whose $w_2$ is nonzero by [F3]. Since [F2] computes universal degree-two cohomology as one-dimensional, this obstruction is $w_2$. Pullback along the classifying map identifies it with step 1.1. This construction works on the nerve of a boundary manifold as well, because [F4] supplies its actual homotopy equivalence and the tangent frame bundle is still classified by [F2]. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Suppose an integral lift exists. By [F4] represent it by an integer simplicial cocycle $c$ on $N$. Its reduction and $e$ have the same class by step 2.1, so $c\bmod2-e=\delta a$ for a sign-valued 1-cochain $a$. Replace $s_{ij}$ by $(-1)^{a_{ij}}s_{ij}$; their new triple signs are exactly $(-1)^{c_{ijk}}$. Extend $c$ to alternating index tuples, with repetitions giving zero. Let $(\phi_k)$ be the finite subordinate partition. On $U_i\cap U_j$ put $r_{ij}(x)=\sum_k\phi_k(x)c_{kij}$, taking each summand to be zero off $U_k$. Its extension is smooth because $\operatorname{supp}\phi_k\subset U_k$. The cocycle equation gives $c_{kjl}-c_{kil}+c_{kij}=c_{ijl}$, so $r_{jl}-r_{il}+r_{ij}=c_{ijl}\sum_k\phi_k=c_{ijl}$. Also $r_{ji}=-r_{ij}$. [F4, step 1.1, step 2.1, construct, algebra]

3.2 Conversely suppose a Spin$^c$ lift is given. Refine its local trivializing cover to a finite good cover by [F4], and choose its local sections there. Project these sections to frame sections and use precisely those projected sections to trivialize the oriented frame bundle. Its transitions $h_{ij}$ then project to the resulting frame transitions $g_{ij}$. Choose Spin lifts $s_{ij}$ as before. There is a unique smooth $z_{ij}:U_{ij}\to U(1)$ with $h_{ij}=[s_{ij},z_{ij}]$, since the central inclusion $z\mapsto[1,z]$ identifies the entire projection kernel with $U(1)$. Choose $z_{ji}=z_{ij}^{-1}$. On each contractible double intersection choose a smooth logarithm $z_{ij}=\exp(\pi i r_{ij})$, with $r_{ji}=-r_{ij}$. The identity $h_{ij}h_{jk}h_{ki}=1$ says $\exp(\pi i(r_{ij}+r_{jk}-r_{ik}))=(-1)^{e_{ijk}}$. Consequently $c_{ijk}=r_{ij}+r_{jk}-r_{ik}$ is an integer-valued continuous function, hence constant on the connected triple intersection, and $c\bmod2=e$. Since $\delta^2r=0$, $\delta c=0$. Thus $[c]\in H^2(N;\mathbb Z)$ reduces to $[e]$, and [F4] and step 2.1 produce the integral lift of $w_2(TM)$. [F1, F4, step 1.1, step 2.1, algebra]

4.1 Set $z_{ij}=\exp(\pi i r_{ij})$ and $h_{ij}=[s_{ij},z_{ij}]$. Step 3.1 gives $z_{ij}z_{jk}z_{ki}=(-1)^{c_{ijk}}$, equal to the Spin triple sign. Therefore $h_{ij}h_{jk}h_{ki}=[(-1)^{c_{ijk}},(-1)^{c_{ijk}}]=1$ in Spin$^c(4)$. Glue the trivial bundles $U_i\times\operatorname{Spin}^c(4)$ by these transitions. The cocycle identity gives a principal bundle, and projection of $h_{ij}$ to $g_{ij}$ glues its map to the prescribed frame bundle. This constructs the required lift. [F1, step 3.1, construct]

5.1 The construction and converse prove precisely existence. Squaring the central coordinates gives the determinant line with transitions $z_{ij}^2$. Twisting a Spin$^c$ lift by a line with transitions $u_{ij}$ changes its determinant transitions by $u_{ij}^2$, so its determinant line changes by the square of that line. In particular the argument does not identify different Spin$^c$ structures with different determinant classes in the presence of two-torsion. Empty $M$ has its empty lift and zero obstruction. All nonempty cover choices are finite, and the stated AC premise is inherited through [A1]. [A1, F1, step 4.1, step 3.2, algebra] ∎
