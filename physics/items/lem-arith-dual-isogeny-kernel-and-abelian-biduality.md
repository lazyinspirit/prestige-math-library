---
id: lem-arith-dual-isogeny-kernel-and-abelian-biduality
kind: lemma
title: "Dual isogenies, Cartier-dual kernels and canonical biduality"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-abelian-variety-is-projective
  - def-abelian-variety-over-a-field
  - lem-arith-dual-and-poincare-bundle-finite-field-descent
  - lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity
  - lem-arith-finite-cartier-duality-and-exactness
  - lem-arith-rigidified-line-bundle-descent
  - lem-theorem-of-the-square-and-mumford-homomorphism
  - lem-nonaffine-theorem-of-the-cube-for-abelian-variety
  - thm-nonaffine-group-scheme-normal-subgroup-quotient
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - def-rigidified-relative-picard-functor-and-dual-abelian-variety
  - lem-nonaffine-group-monomorphism-closed-immersion
  - lem-abelian-scheme-universal-structure-sheaf-sections
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "B. Edixhoven, G. van der Geer, B. Moonen, Abelian Varieties (2012), 6.13-6.20 (dual abelian variety)"
      url: "https://www.van-der-geer.nl/~gerard/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 8.1 (rigidified line bundles and the dual abelian variety)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the supplied scheme and cohomology results. Let $A$ and $C$ be abelian varieties over a field $k$ and let $f:A\to C$ be an **isogeny**, that is, a surjective homomorphism whose scheme-theoretic kernel $H=\ker f$ is finite; write $\deg f=\operatorname{rank}H=\dim_k\mathcal O(H)$, so $f$ is finite flat of degree $\deg f$. Let $A^\vee,C^\vee$ be the dual abelian varieties with normalized Poincare bundles ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]], [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]). Then:

(a) [dual isogeny] the rule $N\mapsto f_T^*N$ on $T$-points defines a homomorphism $f^\vee:C^\vee\to A^\vee$ of abelian varieties, and $f\mapsto f^\vee$ is contravariantly functorial in $f$;

(b) [kernel] there is an isomorphism of $k$-group schemes $\ker f^\vee\cong H^D$ onto the Cartier dual of $H$ ([[lem-arith-finite-cartier-duality-and-exactness]]);

(c) [degree] $f^\vee$ is finite flat of degree $\deg f^\vee=\deg f$;

(d) [biduality and functoriality] the canonical morphism $\kappa_A:A\to A^{\vee\vee}$ given on $T$-points by the class of the switched normalized Poincare bundle is an isomorphism. For composable homomorphisms $f:A\to C$ and $g:C\to D$, duality satisfies $(\operatorname{id})^\vee=\operatorname{id}$, $(g\circ f)^\vee=f^\vee\circ g^\vee$, and $f^{\vee\vee}\circ\kappa_A=\kappa_C\circ f$. It is additive: for homomorphisms $f,g:A\to C$ with the same source and target, $(f+g)^\vee=f^\vee+g^\vee$. The kernel and degree assertions in (b) concern isogenies.

## Facts & Assumptions

**Given:** AC and DC, abelian varieties $A,C$ over a field $k$, an isogeny $f:A\to C$ with kernel $H$ and degree $d=\dim_k\mathcal O(H)$, and the dual abelian varieties $A^\vee$, $C^\vee$ with normalized Poincare bundles.

[F1] The dual abelian variety represents the degree-zero rigidified relative Picard functor on all $k$-schemes, with normalized Poincare bundle $\mathcal P$ on $A\times_kA^\vee$, and the formation is compatible with field extension; moreover the rigidified relative Picard functor is an fppf sheaf and rigidified line bundles have no nontrivial automorphisms ([[lem-arith-dual-and-poincare-bundle-finite-field-descent]], [[lem-arith-rigidified-line-bundle-descent]], [[def-rigidified-relative-picard-functor-and-dual-abelian-variety]]).

[F2] For every invertible sheaf $M$ on an abelian variety and every test scheme the Mumford homomorphism $\varphi_M$ vanishes exactly when the class of $M$ lies in $\operatorname{Pic}^0$; when $M$ is normalized along the identity and $\varphi_M=0$, one has $m^*M\cong p_1^*M\otimes p_2^*M$, and the Mumford map is compatible with pullback along homomorphisms: $\varphi_{f^*M}=f^*\circ\varphi_M\circ f$ ([[lem-arith-homogeneous-bundle-vanishing-and-mumford-surjectivity]], [[lem-theorem-of-the-square-and-mumford-homomorphism]]). Every abelian variety is projective and hence admits an ample invertible sheaf ([[thm-abelian-variety-is-projective]]).

[F3] Finite Cartier duality is an exact contravariant equivalence on finite commutative $k$-group schemes, $H^D$ of rank $d$ represents the all-test characters $T\mapsto\operatorname{Hom}_{T\text{-groups}}(H_T,\mathbf G_{m,T})$, and $H$ is killed by $d$ ([[lem-arith-finite-cartier-duality-and-exactness]]).

[F4] The quotient $A/H$ exists as a separated finite-type $k$-group scheme, the projection $A\to A/H$ is faithfully flat of finite presentation with scheme-theoretic kernel $H$ and is an $H$-torsor; any homomorphism of finite-type $k$-group schemes with trivial kernel is a closed immersion ([[thm-nonaffine-group-scheme-normal-subgroup-quotient]], [[lem-nonaffine-group-monomorphism-closed-immersion]]).

[F5] Modules and commutative algebras with descent data along a faithfully flat map are effectively descended, the descent equivalence is monoidal, and finitely generated locally free modules are detected after faithfully flat base change ([[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]).

[F6] For every abelian variety (in particular $A$, $C$ and their duals) and every base change $A_T\to T$ the unit map is an isomorphism; in particular $p_{T,*}\mathcal O_{A_T}=\mathcal O_T$, so every unit on $A_T$ is a unit pulled back from $T$ ([[lem-abelian-scheme-universal-structure-sheaf-sections]]). The theorem of the cube holds for abelian varieties, and multiplication is finite faithfully flat of rank $|n|^{2g}$ with finite locally free kernel ([[lem-nonaffine-theorem-of-the-cube-for-abelian-variety]], [[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]]).

## Proof

**Proof technique:** direct: realize $f$ as the fppf quotient by $H$, describe the kernel of the pullback rule by equivariant descent and Cartier characters, then compare the two Mumford isogenies through the canonical biduality morphism.

1.1 The kernel $H$ is a finite $k$-group scheme, and since $A/H$ exists and the homomorphism $A\to A/H$ has kernel $H$, the induced morphism $A/H\to C$ is a closed immersion [F4] which is surjective because $f$ is surjective; since $C$ is reduced, a surjective closed immersion into $C$ has zero defining ideal and is therefore an isomorphism, so $f$ is the quotient map $A\to A/H$ and in particular a faithfully flat $H$-torsor of finite presentation of degree $d=\operatorname{rank}H$. [F4, given, algebra]

1.2 For a $k$-scheme $T$ and a rigidified line bundle $N$ on $C_T$ define $f^\vee_T(N)=f_T^*N$; this is a rigidified line bundle on $A_T$ (pullback of the rigidification), and it is degree zero: for $N\in C^\vee(T)$ one has $\varphi_N=0$, so by [F2] $\varphi_{f_T^*N}=f_T^*\circ\varphi_N\circ f_T=0$, hence $f_T^*N\in\operatorname{Pic}^0(A_T)=A^\vee(T)$. The rule is compatible with base change in $T$ and with tensor products, and pullback of bundles is contravariant, so $f\mapsto f^\vee$ is a contravariant additive functor; since source and target are represented by $C^\vee$ and $A^\vee$, Yoneda's lemma promotes $f^\vee$ to a homomorphism of $k$-group schemes. [F1, F2, given, construct]

1.3 The canonical morphism $\kappa_A:A\to A^{\vee\vee}$ is defined by the switched normalized Poincare bundle: for a test $T$, the pullback $Q=(\operatorname{swap})^*\mathcal P$ is a rigidified line bundle on $A^\vee\times_kA$ which is degree zero along $A^\vee$, hence it represents a morphism $\kappa_A:A\to A^{\vee\vee}= (A^\vee)^\vee$ by the universal property [F1], and $\kappa_A$ is a homomorphism of group schemes because the biextension identities of $\mathcal P$ are multiplicative in the second variable, which is the theorem of the cube [F6]. [F1, F6, given, construct]

2.1 We compute $\ker f^\vee$. Let $T$ be a $k$-scheme and let $N\in\ker f^\vee(T)$, so there is an isomorphism $\alpha:f_T^*N\to\mathcal O_{A_T}$ of rigidified line bundles. Since $f_T:A_T\to C_T$ is an $H_T$-torsor [step 1.1], the pair $(N,\alpha)$ is exactly a descent datum for the trivial line bundle $\mathcal O_{A_T}$ along $f_T$: an isomorphism $\theta:p_1^*\mathcal O\to p_2^*\mathcal O$ over $A_T\times_{C_T}A_T\cong A_T\times_TH_T$ satisfying the cocycle condition. Write $\theta(h)\in H^0(A_T,\mathcal O^*)=\mathcal O_T^*$ for the unit attached to $h\in H_T$; by [F6] every such unit is pulled back from $T$. The cocycle condition becomes $\theta(h_1h_2)=\theta(h_1)\theta(h_2)$ in $\mathcal O_T^*$, so $\theta$ is precisely an $H_T$-valued character, that is, an element of $\operatorname{Hom}_{T\text{-gr}}(H_T,\mathbf G_{m,T})=H^D(T)$ by [F3]. [F3, F4, F5, F6, step 1.1, construct]

3.1 The character in step 2.1 is independent of the chosen trivialization: changing it by a base unit conjugates the scalar action trivially. Conversely, a character $\chi\in H^D(T)$ gives an $H_T$-linearization of $\mathcal O_{A_T}$; monoidal effective descent [F5] gives a line bundle $N$ on $C_T$ with $f_T^*N\cong\mathcal O_{A_T}$ and an induced rigidification. It remains to place $N$ in $C^\vee(T)$ on the entire test scheme. Since $[d]_H=0$ by [F3], $\chi^d=1$, so its $d$-th tensor-power descent datum is trivial and $N^d$ is rigidified-trivial. Multiplicativity of the normalized square family gives $d\varphi_N=\varphi_{N^d}=0$ by [F2]. Thus the pointed morphism $\varphi_N:C_T\to C^\vee_T$ factors through the finite affine $T$-group $C^\vee[d]_T$ supplied by [F6]. The universal structure-sheaf equality for $C_T$ in [F6] identifies maps to this relative affine target with algebra maps to $\mathcal O_T$, so the morphism factors through $T$; evaluation at the identity makes that factor the zero section. Hence $\varphi_N=0$ on all tests, and [F2] gives $N\in\operatorname{Pic}^0(C_T)=C^\vee(T)$. The constructions are inverse and natural, and tensor products agree with products of characters. Therefore $\ker f^\vee\cong H^D$ as fppf group sheaves, and hence as group schemes by representability. [F1, F2, F3, F5, F6, step 2.1, algebra]

4.1 Consequently $f^\vee$ is finite (its kernel $H^D$ is finite) and $\dim C^\vee=\dim C=\dim A=\dim A^\vee$, so its image is a closed connected subgroup of dimension $\dim A^\vee$, hence all of $A^\vee$; thus $f^\vee$ is an isogeny. Applying the quotient-torsor argument of step 1.1 to it proves finite flatness, with $\deg f^\vee=\operatorname{rank}\ker f^\vee=\operatorname{rank}H^D=d=\deg f$, using that Cartier duality preserves ranks [F3]. [F3, step 1.2, step 3.1, algebra]

5.1 To prove that $\kappa_A$ is an isogeny, choose an ample line bundle $L$ on $A$ and put $B=A^\vee$, $f=\varphi_L:A\to B$, an isogeny by [F2]. Let $P_A$ and $P_B$ be the normalized Poincare bundles of $A$ and $B$. By the definition of $\kappa_A$, $(\operatorname{id}_B\times\kappa_A)^*P_B\cong\operatorname{swap}^*P_A$ on $B\times A$. The defining dual-pullback identity also gives $(f\times\operatorname{id}_{B^\vee})^*P_B\cong(\operatorname{id}_A\times f^\vee)^*P_A$. Pulling these identities to $A\times A$ identifies $(\operatorname{id}_A\times f^\vee\kappa_A)^*P_A$ with $\operatorname{swap}^*(\operatorname{id}_A\times f)^*P_A=\operatorname{swap}^*\Lambda(L)$. The normalized bundle $\Lambda(L)$ is symmetric, so the universal property of $P_A$ yields $f=f^\vee\circ\kappa_A$. Every pullback in this comparison has the displayed product domain; in particular $(\operatorname{id}_A\times\varphi_L)^*P_A$ lies on $A\times A$. Since $f$ has finite kernel, $\kappa_A$ does too, and equal dimensions make its proper image all of $A^{\vee\vee}$. The quotient-torsor argument makes it a finite flat isogeny. [F1, F2, F6, step 4.1, algebra]

6.1 Degrees multiply for compositions of isogenies, and by step 4.1 applied to $\varphi_{\mathcal L}$ we have $\deg\varphi_{\mathcal L}^\vee=\deg\varphi_{\mathcal L}$. Taking degrees in $\varphi_{\mathcal L}=\varphi_{\mathcal L}^\vee\circ\kappa_A$ gives $\deg\varphi_{\mathcal L}=\deg\varphi_{\mathcal L}\cdot\deg\kappa_A$, hence $\deg\kappa_A=1$; a finite flat morphism of degree one is an isomorphism, so $\kappa_A:A\to A^{\vee\vee}$ is an isomorphism. [step 4.1, step 5.1, algebra]

7.1 Finally, $(\operatorname{id})^\vee=\operatorname{id}$ and $(g\circ f)^\vee=f^\vee\circ g^\vee$ are immediate from $(g\circ f)_T^*=f_T^*g_T^*$. For homomorphisms $f,g:A\to C$ with common source and target, the cube identity gives $m_C^*N\cong p_1^*N\otimes p_2^*N$ for every degree-zero rigidified bundle $N$ on $C_T$ [F2]; hence $(f+g)_T^*N\cong f_T^*N\otimes g_T^*N$, which is $f^\vee+g^\vee$ under the tensor group law of $A^\vee$. The identity $f^{\vee\vee}\circ\kappa_A=\kappa_C\circ f$ follows from the definition of $\kappa$ by the switched normalized Poincare bundles and uniqueness of representing morphisms, since both sides are represented by the same pullback of the switched bundle. [F1, F2, F6, step 1.2, step 1.3, algebra] ∎
