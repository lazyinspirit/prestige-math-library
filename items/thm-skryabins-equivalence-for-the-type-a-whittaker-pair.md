---
id: thm-skryabins-equivalence-for-the-type-a-whittaker-pair
kind: theorem
title: "Skryabin's equivalence for the type-A Whittaker pair"
status: published
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

[F4] Finite-dimensional $\mathfrak g$-modules have finite $\mathfrak m$-flags with trivial successive sections. Indeed the column-grading diagonal element $H$ satisfies $[H,x]=rx$ on $\mathfrak g_r$; negative homogeneous generators shift its finitely many generalized eigenvalues by negative integers. Sufficiently long products from $\mathfrak m$ therefore vanish. Induction on the module dimension, choosing a vector in the common kernel and passing to the quotient, gives $0=X_0\subset\cdots\subset X_t=X$ with $\mathfrak m X_j\subseteq X_{j-1}$ ([[def-a-type-a-nilpotent-pyramid-good-grading-and-whittaker-character]], [[def-classical-complex-matrix-lie-algebras]]).



## Proof

**Proof technique:** direct.

**Given:** The bimodule $Q_\chi$, a $W(\lambda)$-module $M$, a finite-dimensional $\mathfrak g$-module $X$, and the maps $\mu_{M,X}$; assume AC as specified above.

1.1 **Unit, membership and counit.** The shifted $\mathfrak m$ action on $Q_\chi$ lowers the bounded-below Kazhdan filtration: $(x-\chi(x))u1_\chi=[x,u]1_\chi$, and for negative doubled degree $-2r$ the commutator lowers filtration by $2r>0$. This proves local nilpotence on $Q_\chi\otimes_W M$ too, so the adjunction lands in $\mathcal C(\lambda)$. By [F1], its unit $M\to\mathrm{Wh}(Q_\chi\otimes_W M)$ is an isomorphism. For $N\in\mathcal C(\lambda)$, the triangle identity makes $\mathrm{Wh}(c_N)$ an isomorphism. Left exactness gives $\mathrm{Wh}(\ker c_N)=0$, hence $\ker c_N=0$ by detection. Now the short exact sequence with this injective counit has $H^1$ of its domain zero by [F1]; its cohomology sequence gives $\mathrm{Wh}(\operatorname{coker}c_N)=0$. Detection makes that cokernel zero. Thus the unit and counit are isomorphisms, proving the equivalence without presuming exactness of $\mathrm{Wh}$. [F1, F2, F3, algebra]

1.2 Exactness and detection. Exactness of $\mathrm{Wh}$ follows because it is inverse to the exact functor $Q_\chi\otimes_{W(\lambda)}-$ (tensoring with the right-free module $Q_\chi$ proved in the local cohomology supplier [F1]), and the detection statement is the case $H^0=0$ of [F1]. [F1, F2, algebra]

1.3 The transported tensor functor. For $M\in W(\lambda)$-mod and finite-dimensional $X$, the functor $M\mapsto\mathrm{Wh}((Q_\chi\otimes_{W(\lambda)}M)\otimes X)$ is exact in $M$ because the composed functors are exact; it is the transport of $?\otimes X$ across the equivalence. [F1, F3, algebra]

2.1 **Invertibility of the displayed tensor map.** Let $M$ be a $\mathfrak p$-module and put $N=Q_\chi\otimes_W M$. PBW gives representatives $\eta(u)1_\chi$, and $\psi_M(\eta(u)1_\chi\otimes m)=um$ is balanced because right multiplication by $\eta(w)$ changes $u$ to $uw$. Hence $\mu_{M,X}=(\psi_M\otimes1)|_{\mathrm{Wh}}$ is a defined linear map. Use [F4]'s finite flag of $X$. Each quotient of $N\otimes X_j$ by $N\otimes X_{j-1}$ is a finite direct sum of $N$, with trivial $\mathfrak m$ action on its finite factor. By [F1] it has vanishing positive twisted cohomology and invariants $M\otimes(X_j/X_{j-1})$. Induction and the long exact sequence give the same vanishing on each $N\otimes X_j$, and give short exact sequences on their invariant spaces. The map $\mu$ preserves these filtrations. On each successive quotient, the invariants are represented by $1_\chi\otimes m\otimes\bar x$ and $\psi_M$ sends them to $m\otimes\bar x$. Thus its quotient maps are identities; induction through the finite short exact sequences makes $\mu$ bijective. This argument holds for arbitrary $M$ and needs no cofree realization or completion of $M$. [F1, F3, F4, step 1.1, construct, algebra]

2.2 Associativity. The associativity isomorphisms of the transported functor are obtained by inserting the canonical associativity isomorphisms of the tensor product of $\mathfrak g$-modules into the definition of $\circledast$ and applying the inverse equivalence; they are compatible by the naturality of the unit and counit of the adjunction and by the coherence of the tensor associativity in $\mathcal C(\lambda)$. [F3, step 1.1, step 1.3, algebra]

3.1 **Balancing and $W$-linearity.** PBW gives unique representatives $\eta(u)1_\chi$, $u\in U(\mathfrak p)$, in $Q_\chi$. Define $\psi_M(\eta(u)1_\chi\otimes m)=um$. Since the right action of $w\in W\subset U(\mathfrak p)$ sends this representative to $\eta(uw)1_\chi$, the formula is right-$W$-balanced: $(uw)m=u(wm)$. Moreover $\psi_M(\eta(v)q\otimes m)=v\psi_M(q\otimes m)$ for $v\in U(\mathfrak p)$. The shift $\eta$ adds a Lie character on $\mathfrak p$, so on its primitive generators, and hence multiplicatively on $U(\mathfrak p)$, $(\eta\otimes\mathrm{id})\Delta(v)=\Delta\eta(v)$. The $W$ action on the source Whittaker subspace is therefore $\Delta\eta(w)$, while the target restricted $\mathfrak p$-module $M\otimes X$ has action $\Delta(w)$. Applying $\psi_M\otimes\mathrm{id}$ to the displayed coproduct identity proves $\mu_{M,X}(wz)=w\mu_{M,X}(z)$. Together with step 2.1 this proves the actual stated $W$-module isomorphism. No equality with cofree evaluation or citation-only character-equation argument is used. [F2, F4, step 2.1, algebra]

4.1 Independence of the order. For $X=V^{\otimes d}$ the isomorphism $\mu_d$ is the composite of the single-step maps $\mu_{\bullet,V}$; two different parenthesizations differ by the associativity isomorphisms of step 2.2, and both are restrictions of the balanced evaluation maps of step 3.1, applied with the same iterated coproduct on $U(\mathfrak p)$; coassociativity and the displayed shift identity make these maps equal. Therefore the resulting isomorphism $\mathbb C_c\circledast V^{\circledast d}\to V_c^{\otimes d}$ is independent of the composed associativity isomorphisms. [step 2.1, step 3.1, step 2.2, algebra] ∎

## Remarks

- The displayed tensor map is the balanced $\mathfrak p$-module evaluation map. Its invertibility follows from the finite $\mathfrak m$-flag and cohomology sequence in step 2.1; no identification with constant evaluation in a cofree model is required.

- The equivalence is exact but its left adjoint in the Schur-functor constructions later on this page is not the naive tensor functor; those constructions use the projective generator $T$ of a single block, treated later.
