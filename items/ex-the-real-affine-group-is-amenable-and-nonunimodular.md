---
id: ex-the-real-affine-group-is-amenable-and-nonunimodular
kind: example
title: The real affine group is amenable and nonunimodular
status: draft
origin: pipeline
dependency_level: 7
proof_strategy: direct
deps:
  - def-amenable-locally-compact-group
  - lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions
  - lem-a-group-with-the-fixed-point-property-is-amenable
  - def-modular-function-of-a-locally-compact-group
  - lem-right-translation-scales-left-haar-measure
  - def-unimodular-locally-compact-group
  - def-normal-subgroup
  - def-continuous-map-top
  - def-axiom-of-choice
  - def-group
  - def-topological-group
  - def-locally-compact-space
  - def-hausdorff-space
  - cor-rn-is-locally-compact-and-sigma-compact
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
  - def-subspace-topology-top
  - def-product-topology
  - thm-product-universal-property
  - lem-algebra-of-continuous-real-maps-on-a-space
  - cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed
  - thm-closed-subspace-of-a-compact-space-is-compact
  - def-left-haar-integral-and-left-haar-measure
  - def-countable-choice
  - thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure
  - ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds
  - def-density-bundle-and-smooth-density
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - thm-lebesgue-measure-of-a-box-of-every-kind
axiom_use: >-
  Assume AC. It is used through both applications of the Markov–Kakutani
  fixed-point theorem and through the fixed-point-property-to-amenability
  supplier. AC supplies AC_omega for the positive-density Radon and change-of-
  variables suppliers, and the left-Haar/modular-function suppliers also
  assume AC. No dependent-choice principle is used.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G.2, Proposition G.2.2(ii) and its complete fixed-point proof (printed pp. 451–452); Appendix G.2, Theorem G.2.1 and its complete averaging proof (printed pp. 450–451)"
    - title: "Amjad Saleh M. Alghamdi, Representation Theory for the Group SL2(R), PhD thesis, University of Leeds (2021)"
      url: "https://etheses.whiterose.ac.uk/id/eprint/30665/1/Alghamdi%20ASM%20Mathematics%20PhD%202021.pdf"
      locator: "Chapter 3, §3.1 and §3.3 (printed pp. 15–17/PDF pp. 23–25): affine group law, N⋊A decomposition, left Haar density a^(-2) da db, and the complete left-translation Jacobian calculation; the modular convention is independently recomputed here"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
      locator: "Theorem 2.47, change of variables for C^1 diffeomorphisms; Theorem 7.8, regularity of locally finite Borel measures on second-countable locally compact spaces"
---

## Statement

Assume AC. Let
$$G:=\{(a,b):a>0,\ b\in\mathbb R\}$$
with multiplication
$$(a,b)(a',b')=(aa',ab'+b)$$
and the topology inherited from $\mathbb R^2$. Then $G$ is a locally compact
Hausdorff topological group and is amenable. The measure
$$d\mu_L(a,b)=a^{-2}\,da\,db$$
is a left Haar measure for which the library's modular convention gives
$$\Delta_G(a,b)=a^{-1}.$$
In particular, $G$ is nonunimodular, so amenability does not imply
unimodularity.

## Facts & Assumptions

**Given:** AC; the affine group $G$ with the displayed multiplication and subspace topology; and, for the fixed-point argument, an arbitrary continuous affine action of $G$ on a nonempty compact convex subset $X$ of a Hausdorff locally convex topological vector space.

[A1] AC is the choice-function principle ([[def-axiom-of-choice]]).

[A2] A sequence $(A_n)_{n\in\mathbb N}$ of nonempty sets is a family to which AC applies; composing a choice function on $\{A_n:n\in\mathbb N\}$ with $n\mapsto A_n$ gives a choice sequence, exactly the $\mathrm{AC}_\omega$ principle ([[def-countable-choice]]).

[F1] The underlying set $G$ is open in $\mathbb R^2$. The group laws and inverse are the displayed coordinate formulas; sums, products, and quotients with nonzero denominator are continuous. Euclidean space is locally compact and Hausdorff, and an open subset inherits those properties; the topology on a subspace is the trace topology ([[def-group]], [[def-topological-group]], [[def-continuous-map-top]], [[lem-algebra-of-continuous-real-maps-on-a-space]], [[cor-rn-is-locally-compact-and-sigma-compact]], [[def-hausdorff-space]], [[def-locally-compact-space]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[def-subspace-topology-top]], [[def-product-topology]], [[thm-product-universal-property]]).

[F2] $N:=\{(1,b):b\in\mathbb R\}$ and $H:=\{(a,0):a>0\}$ are abelian subgroups whose inherited operations are continuous. Their coordinate parametrizations identify them as topological groups with $(\mathbb R,+)$ and $(\mathbb R_{>0},\cdot)$ ([[def-topological-group]]).

[F3] Conjugation satisfies $(a,b)(1,t)(a,b)^{-1}=(1,at)$; since $a>0$ and $t\mapsto at$ is onto $\mathbb R$, this gives $N\trianglelefteq G$. Also $(a,b)=(1,b)(a,0)$, so $G=NH$. Normality has the definition in [[def-normal-subgroup]].

[F4] If $G$ acts continuously and affinely on $X$, then
$$X^N:=\{x\in X:nx=x\text{ for every }n\in N\}$$
is closed, compact, and convex. It is closed because it is the intersection
over $n\in N$ of agreement sets for the continuous maps $x\mapsto nx$ and
$\operatorname{id}_X$ into the Hausdorff space $X$; closed subsets of compact
spaces are compact
([[cor-the-agreement-set-of-two-maps-into-a-hausdorff-space-is-closed]],
[[thm-closed-subspace-of-a-compact-space-is-compact]]). Affinity gives
convexity.

[F5] Every abelian topological group acting continuously and affinely on a nonempty compact convex subset of a Hausdorff locally convex space has a fixed point, under AC ([[lem-markov-kakutani-fixed-point-theorem-for-abelian-affine-actions]]).

[F6] Under AC, the fixed-point property for continuous affine actions on nonempty compact convex subsets of Hausdorff locally convex spaces implies amenability ([[lem-a-group-with-the-fixed-point-property-is-amenable]]).

[F7] Amenability means existence of a left-invariant mean on complex $L^\infty(G)$ for the fixed left Haar measure ([[def-amenable-locally-compact-group]]).

[F8] A positive finite-valued smooth density on a second-countable Hausdorff smooth manifold defines a compact-finite Radon Borel measure under $\mathrm{AC}_\omega$ ([[thm-a-positive-smooth-density-defines-a-locally-finite-radon-measure]]). Euclidean open subsets, including $G\subseteq\mathbb R^2$, carry their standard smooth structure, and a smooth density has a smooth coordinate coefficient ([[ex-euclidean-spaces-and-open-subsets-as-smooth-manifolds]], [[def-density-bundle-and-smooth-density]]).

[F9] For a $C^1$ diffeomorphism $T:U\to V$ of open Euclidean sets and every
nonnegative Lebesgue measurable $f$,
$$\int_V f(y)\,d\lambda(y)=\int_U f(T(x))|\det DT(x)|\,d\lambda(x)$$
under $\mathrm{AC}_\omega$
([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]]).

[F10] A left Haar measure is a nonzero Borel measure, finite on compact sets, outer regular on Borel sets and inner regular on open sets, invariant under left translation ([[def-left-haar-integral-and-left-haar-measure]]).

[F11] For fixed left Haar measure, $\Delta_G(g)$ is the unique scalar satisfying
$$\int_G f(xg^{-1})\,d\mu(x)=\Delta_G(g)\int_G f(x)\,d\mu(x)\qquad(f\in C_c(G))$$
([[def-modular-function-of-a-locally-compact-group]],
[[lem-right-translation-scales-left-haar-measure]]).

[F12] A locally compact group is unimodular exactly when its modular function is identically $1$ ([[def-unimodular-locally-compact-group]]).

[F13] On $K=[1,2]\times[0,1]$, $a^{-2}\ge1/4$ and
$\lambda_2(K)=1$; monotonicity and positive homogeneity of the nonnegative
integral give
$$\int_K a^{-2}\,d\lambda_2\ge\tfrac14>0$$
([[prop-order-and-scalar-rules-for-the-nonnegative-integral]],
[[thm-lebesgue-measure-of-a-box-of-every-kind]]).

## Proof

**Proof technique:** direct.

**Given:** Assume AC. Let $G$ be the displayed group. For the amenability claim, let $G$ act continuously and affinely on an arbitrary nonempty compact convex subset $X$ of a Hausdorff locally convex topological vector space.

1.1 The multiplication is associative because both bracketings of $(a,b),(a',b'),(a'',b'')$ give $(aa'a'',aa'b''+ab'+b)$; $(1,0)$ is the identity and $(a,b)^{-1}=(a^{-1},-b/a)$. Each coordinate of multiplication is a sum or product of continuous coordinate maps, and each inverse coordinate is a quotient with denominator $a>0$, so the group operations are continuous by [F1]. The set $G$ is open in $\mathbb R^2$. At every point of this open set, the compact-closure neighbourhood base in the locally compact Hausdorff Euclidean space supplies a compact neighbourhood still contained in $G$; Hausdorffness is inherited. Thus $G$ is a locally compact Hausdorff topological group. [F1, algebra]

1.2 The coordinate formulas give the subgroup laws and commutativity of $N$ and $H$. The conjugation formula in [F3] shows $gNg^{-1}=N$ for every $g=(a,b)$, so $N$ is normal, since $t\mapsto at$ is onto $\mathbb R$ for $a>0$. Also $(1,b)(a,0)=(a,b)$ for every $(a,b)\in G$, so every group element is a product from $NH$. [F2, F3, algebra]

1.3 For each $n\in N$, the maps $x\mapsto nx$ and $\operatorname{id}_X$ are continuous into the Hausdorff space $X$, so their agreement set is closed by [F4]. Their intersection is $X^N$, hence $X^N$ is closed; it is compact because $X$ is compact, and it is convex because each action map is affine. [F4, given]

1.4 By [A1] and [A2], the positive density $\omega=a^{-2}|da\,db|$ on the open smooth manifold $G$ defines a compact-finite Radon Borel measure $\mu(E):=\int_E a^{-2}\,d\lambda_2(a,b)$ for Borel $E\subseteq G$. This measure is nonzero: on $K=[1,2]\times[0,1]\subset G$ the density is at least $1/4$ and $\lambda_2(K)=1$, so [F13] gives $\mu(K)\ge1/4$. [A1, A2, F8, F13]

2.1 The action restricted to the abelian topological group $N$ is continuous and affine on the nonempty compact convex set $X$. By [F5], it has a fixed point, which belongs to $X^N$. Therefore $X^N$ is nonempty. [A1, F2, F5, given, step 1.3]

2.2 The set $X^N$ is invariant under $H$: if $x\in X^N$, $h\in H$, and $n\in N$, then $n(hx)=h((h^{-1}nh)x)=hx$, since $h^{-1}nh\in N$ by normality. The restricted $H$-action on $X^N$ is continuous and affine, because it is the restriction of the given continuous affine action. [F2, F3, F4, step 1.3]

2.3 Fix $g_0=(a_0,b_0)\in G$. Left translation $T_{g_0}(a,b)=(a_0a,a_0b+b_0)$ is a $C^1$ diffeomorphism of $G$ onto itself with Jacobian determinant $a_0^2$. For every Borel $E\subseteq G$, [F9] gives $\mu(g_0E)=\int_E (a_0a)^{-2}a_0^2\,d\lambda_2(a,b)=\mu(E)$. Thus $\mu$ is a left Haar measure by [F10]. [F9, F10, step 1.4, algebra]

3.1 The abelian topological group $H$ acts continuously and affinely on the nonempty compact convex set $X^N$ by step 2.2. By [F5], there is $x\in X^N$ fixed by every element of $H$. [A1, F2, F5, step 2.1, step 2.2]

3.2 For $g_0=(a_0,b_0)$, right multiplication by $g_0^{-1}$ is the $C^1$ diffeomorphism $T_{g_0^{-1}}(a,b)=(a/a_0,b-ab_0/a_0)$, whose inverse is $(A,B)\mapsto(Aa_0,B+Ab_0)$ and has Jacobian determinant $a_0$. Applying [F9] to the nonnegative positive and negative parts of the real and imaginary parts of $f\in C_c(G)$ gives $\int_G f(xg_0^{-1})\,d\mu(x)=\int_G f(A,B)(Aa_0)^{-2}a_0\,d\lambda_2(A,B)=a_0^{-1}\int_G f(A,B)A^{-2}\,d\lambda_2(A,B)$. By [F11] and the left Haar conclusion of step 2.3, $\Delta_G(g_0)=a_0^{-1}$. [A1, A2, F9, F10, F11, step 1.4, step 2.3, algebra]

4.1 This $x$ is fixed by both $N$ and $H$. Since $G=NH$ by step 1.2, it is fixed by every element of $G$. The action was arbitrary, so $G$ has the fixed point property; [F6] makes $G$ amenable in the sense of [F7]. [A1, F6, F7, step 1.2, step 2.1, step 3.1]

5.1 Taking $g_0=(2,0)$ in step 3.2 gives $\Delta_G(g_0)=1/2\ne1$; therefore $G$ is nonunimodular by [F12]. Step 4.1 proves it is amenable, completing both claims in the Statement. [F12, step 3.2, step 4.1] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G.2, Proposition G.2.2(ii), gives the normal-subgroup/quotient fixed-point route for amenability and its complete fixed-point proof (printed pp. 451–452); Theorem G.2.1 gives the complete Markov–Kakutani averaging proof (printed pp. 450–451). The item proves the affine-group fixed point property directly by applying the local Markov–Kakutani supplier first to $N$ and then to $H$. Alghamdi, *Representation Theory for the Group SL2(R)*, Chapter 3 §§3.1 and 3.3 (printed pp. 15–17), gives the same affine multiplication and subgroup decomposition and computes the left-Haar density by the left-translation Jacobian. The modular scalar is recomputed locally from the library's definition, since modular-function conventions differ between sources.
