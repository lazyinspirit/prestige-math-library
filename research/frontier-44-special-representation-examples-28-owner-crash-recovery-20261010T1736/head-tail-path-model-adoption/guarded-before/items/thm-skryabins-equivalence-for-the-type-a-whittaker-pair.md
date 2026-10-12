---
id: thm-skryabins-equivalence-for-the-type-a-whittaker-pair
kind: theorem
title: "Skryabin's equivalence for the type-A Whittaker pair"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading,
       def-the-type-a-finite-w-algebra-and-whittaker-category,
       thm-long-exact-sequence-in-lie-algebra-cohomology,
       def-chevalley-eilenberg-cochains,
       def-classical-complex-matrix-lie-algebras,
       def-universal-enveloping-algebra,
       def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character, def-axiom-of-choice]
axiom_use: "Inherited AC from GG assertion (2) for arbitrary-module cohomology/equivalence and its transported tensor functor; its polynomial transverse product and detection assertions (1)/(3) remain choice-free."
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wee Liang Gan and Victor Ginzburg, Quantization of Slodowy slices, Int. Math. Res. Not. 2002, no. 5, 243-255 (complete 10-page arXiv article)"
      url: "https://arxiv.org/pdf/math/0105225"
      locator: "Section 6, Theorem 6.1 and its proof, and Section 6.2: Skryabin's equivalence, exactness of Wh, and the statement that Wh(E)=0 implies E=0; the tensor identification via the Taylor solution is in the same section."
    - title: "Jonathan Brundan and Alexander Kleshchev, Representations of shifted Yangians and finite W-algebras, Mem. Amer. Math. Soc. 196 (2008), no. 918 (complete 109-page arXiv memoir)"
      url: "https://arxiv.org/pdf/math/0508003"
      locator: "Chapter 8, Section 8.1, printed pp. 88-92: Q_chi as a free right W(lambda)-module, Skryabin's equivalence, the inverse functor Wh, and the natural maps (8.2)-(8.6) identifying the transported tensor functors; Section 8.1 also contains the explicit Taylor/path matrices for the tensor identification."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice [[def-axiom-of-choice]], inherited from assertion (2) of the good-grading cohomology supplier.

Let $(\mathfrak g,\mathfrak p,\mathfrak h,\mathfrak m,e,\chi)$, $W(\lambda)$,
$Q_\chi$ and $\mathcal C(\lambda)$ be as in
[[def-the-type-a-finite-w-algebra-and-whittaker-category]]. Then the functor
$$Q_\chi\otimes_{W(\lambda)}-\colon W(\lambda)\text{-mod}\to\mathcal C(\lambda)$$
is an equivalence of categories, with inverse the Whittaker-vector functor
$\mathrm{Wh}$; in particular $\mathrm{Wh}$ is exact and
$\mathrm{Wh}(M)=0$ implies $M=0$ for $M\in\mathcal C(\lambda)$.

For every finite-dimensional $\mathfrak g$-module $X$, the exact functor
$?\otimes X\colon\mathcal C(\lambda)\to\mathcal C(\lambda)$ transports to the
exact functor
$$M\circledast X=\mathrm{Wh}\bigl((Q_\chi\otimes_{W(\lambda)}M)\otimes X\bigr)$$
on $W(\lambda)$-mod, and whenever $M$ is a $\mathfrak p$-module viewed as a
$W(\lambda)$-module by restriction, the natural map
$$\mu_{M,X}\colon M\circledast X\to M\otimes X,\qquad (\eta(u)1_\chi\otimes m)\otimes x\mapsto um\otimes x,$$
is an isomorphism of $W(\lambda)$-modules. The associativity isomorphisms
$(M\circledast X)\circledast Y\cong M\circledast(X\otimes Y)$ are compatible,
and for the one-dimensional $\mathfrak p$-module $\mathbb C_c$ the resulting
isomorphism $\mu_d\colon\mathbb C_c\circledast V^{\circledast d}\to V_c^{\otimes d}$
is independent of the order of the composed associativity isomorphisms.

## Facts & Assumptions

**Given:** The pyramid data, the bimodule $Q_\chi$ and the Whittaker category of [[def-the-type-a-finite-w-algebra-and-whittaker-category]], and a finite-dimensional $\mathfrak g$-module $X$. Assume AC [[def-axiom-of-choice]] for the arbitrary-module equivalence and transported tensor assertions.

[F1] For every $W(\lambda)$-module $M$, the twisted $\mathfrak m$-cohomology of $Q_\chi\otimes_{W(\lambda)}M$ vanishes in positive degrees and its degree-zero part is $M$; for $M\in\mathcal C(\lambda)$ the invariants detect vanishing ([[lem-gan-ginzburg-skryabin-inputs-hold-for-the-type-a-pyramid-good-grading]]).

[F2] $Q_\chi=U(\mathfrak g)/U(\mathfrak g)I_\chi$ is a $(U(\mathfrak g),W(\lambda))$-bimodule, and tensoring the canonical element $1_\chi$ with a $W(\lambda)$-module gives a left adjoint to $\mathrm{Wh}$; the unit and counit are the natural maps $M\to\mathrm{Wh}(Q_\chi\otimes_{W(\lambda)}M)$, $v\mapsto1_\chi\otimes v$ and $Q_\chi\otimes_{W(\lambda)}\mathrm{Wh}(M)\to M$, $u1_\chi\otimes v\mapsto uv$ ([[def-the-type-a-finite-w-algebra-and-whittaker-category]], [[def-universal-enveloping-algebra]]).

[F3] Chevalley-Eilenberg exactness: tensoring with a finite-dimensional $\mathfrak g$-module preserves the Whittaker category and is exact, and the long exact cohomology sequence computes the cohomology of extensions ([[def-chevalley-eilenberg-cochains]], [[thm-long-exact-sequence-in-lie-algebra-cohomology]]).

[F4] The loop-symbol computation: in PBW degree the leading system of the $\chi$-equations for the tensor identification is polynomial Taylor translation on $\mathbb C[M_{\mathrm{unip}}]$ with invertible constant term; the finite matrices $X,Y$ constructed from the prefix-$T$ formulas are inverse by degree recursion, and the coefficient index is the actual displacement $\mathrm{col}(a)-\mathrm{col}(b)$ with no $u^s$ reindexing ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]], [[def-classical-complex-matrix-lie-algebras]]).



## Proof

**Proof technique:** direct.

**Given:** The bimodule $Q_\chi$, a $W(\lambda)$-module $M$, a finite-dimensional $\mathfrak g$-module $X$, and the maps $\mu_{M,X}$; assume AC as specified above.

1.1 Unit and counit. The adjunction between $Q_\chi\otimes_{W(\lambda)}-$ and $\mathrm{Wh}$ has the unit $u_M\colon M\to\mathrm{Wh}(Q_\chi\otimes_{W(\lambda)}M)$ and counit $c_M\colon Q_\chi\otimes_{W(\lambda)}\mathrm{Wh}(M)\to M$ of [F2]. For every $M$, the kernel and cokernel of $u_M$ and $c_M$ lie in the kernel of the invariants functor: applying $H^0$ to the unit and using the vanishing of [F1] identifies the composite with the identity; a short exact sequence argument with the long exact sequence of [F3] then shows that if $H^0$ of a map in the category is an isomorphism then the map is an isomorphism, since the kernel and cokernel have vanishing invariants and a nonzero object of the category has nonzero invariants by [F1]. Hence $u_M,c_M$ are isomorphisms and the two functors are quasi-inverse. [F1, F2, F3, algebra]

1.2 Exactness and detection. Exactness of $\mathrm{Wh}$ follows because it is inverse to the exact functor $Q_\chi\otimes_{W(\lambda)}-$ (tensoring with the right flat module $Q_\chi$, whose flatness is part of the free right-module structure of the source), and the detection statement is the case $H^0=0$ of [F1]. [F1, F2, algebra]

1.3 The transported tensor functor. For $M\in W(\lambda)$-mod and finite-dimensional $X$, the functor $M\mapsto\mathrm{Wh}((Q_\chi\otimes_{W(\lambda)}M)\otimes X)$ is exact in $M$ because the composed functors are exact; it is the transport of $?\otimes X$ across the equivalence. [F1, F3, algebra]

2.1 **Triangularity of the displayed tensor map.** Keep the polynomial-coordinate/distribution pairing from the good-grading calculation: the right-free PBW coordinates identify $Q_\chi\otimes_W M$ with the locally nilpotent coinduced model, by finite weighted Taylor pairing and descending leading-term subtraction, followed by filtered unions. Cofree evaluation on Whittaker vectors of this model tensored with $X$ gives a vector-space isomorphism $\ell:M\otimes X\to\mathrm{Wh}((Q_\chi\otimes_W M)\otimes X)$. It is not the inverse of the displayed $\mu_{M,X}$ in general. Choose a common Engel flag $0=X_0\subset X_1\subset\cdots\subset X_t=X$ for the nilpotent $\mathfrak m$ action, so $\mathfrak m X_j\subset X_{j-1}$; a negative-graded Lie algebra acts nilpotently on a finite-dimensional $\mathfrak g$-module. The matrix-coefficient construction of $\ell$ preserves this flag and has diagonal $1_\chi\otimes m\otimes x_j$: on each flag quotient the $\mathfrak m$ action is trivial, and the inverse cofree evaluation is precisely the unit $m\mapsto1_\chi\otimes m$. Every correction term involves a strictly flag-lowering matrix coefficient. PBW represents these finitely supported lifts by elements of $U(\mathfrak p)$ acting on $M$; no completion of $M$ is used. The displayed map applies $\eta^{-1}$ of this representative to $M$ and leaves the $X$ component in its flag position. Thus $A=\mu_{M,X}\ell$ preserves $M\otimes X_j$ and is the identity on its successive quotients. Write $A=1+N$; then $N^t=0$, although its off-diagonal entries can be arbitrary operators on $M$. Hence $A^{-1}=\sum_{r=0}^{t-1}(-N)^r$, and $\mu_{M,X}$ is a vector-space isomorphism. This argument distinguishes cofree constant evaluation from the extension-dependent displayed map. [F1, F4, step 1.3, construct, algebra]

2.2 Associativity. The associativity isomorphisms of the transported functor are obtained by inserting the canonical associativity isomorphisms of the tensor product of $\mathfrak g$-modules into the definition of $\circledast$ and applying the inverse equivalence; they are compatible by the naturality of the unit and counit of the adjunction and by the coherence of the tensor associativity in $\mathcal C(\lambda)$. [F3, step 1.1, step 1.3, algebra]

3.1 **Balancing and $W$-linearity.** PBW gives unique representatives $\eta(u)1_\chi$, $u\in U(\mathfrak p)$, in $Q_\chi$. Define $\psi_M(\eta(u)1_\chi\otimes m)=um$. Since the right action of $w\in W\subset U(\mathfrak p)$ sends this representative to $\eta(uw)1_\chi$, the formula is right-$W$-balanced: $(uw)m=u(wm)$. Moreover $\psi_M(\eta(v)q\otimes m)=v\psi_M(q\otimes m)$ for $v\in U(\mathfrak p)$. The shift $\eta$ adds a Lie character on $\mathfrak p$, so on its primitive generators, and hence multiplicatively on $U(\mathfrak p)$, $(\eta\otimes\mathrm{id})\Delta(v)=\Delta\eta(v)$. The $W$ action on the source Whittaker subspace is therefore $\Delta\eta(w)$, while the target restricted $\mathfrak p$-module $M\otimes X$ has action $\Delta(w)$. Applying $\psi_M\otimes\mathrm{id}$ to the displayed coproduct identity proves $\mu_{M,X}(wz)=w\mu_{M,X}(z)$. Together with step 2.1 this proves the actual stated $W$-module isomorphism. No equality with cofree evaluation or citation-only character-equation argument is used. [F2, F4, step 2.1, algebra]

4.1 Independence of the order. For $X=V^{\otimes d}$ the isomorphism $\mu_d$ is the composite of the single-step maps $\mu_{\bullet,V}$; two different parenthesizations differ by the associativity isomorphisms of step 2.2, and both are restrictions of the balanced evaluation maps of step 3.1, applied with the same iterated coproduct on $U(\mathfrak p)$; coassociativity and the displayed shift identity make these maps equal. Therefore the resulting isomorphism $\mathbb C_c\circledast V^{\circledast d}\to V_c^{\otimes d}$ is independent of the composed associativity isomorphisms. [step 2.1, step 3.1, step 2.2, algebra] ∎

## Remarks

- The source's convention is that $T_{i,j}^{(r)}$ carries the actual displacement index $r=\mathrm{col}(a)-\mathrm{col}(b)$; coefficients at or below the prefix shift vanish and coefficient $0$ is $\delta_{i,j}$. This is the convention used by the explicit matrices in step 2.1.

- The equivalence is exact but its left adjoint in the Schur-functor constructions later on this page is not the naive tensor functor; those constructions use the projective generator $T$ of a single block, treated later.
