---
id: thm-complex-spinc-thom-orientation
kind: theorem
title: Complex Spin-c Thom orientation from the equivariant spinor symbol
status: published
origin: pipeline
deps:
- thm-homotopy-invariance-of-vector-bundle-pullback
- def-given-spin-and-spinc-structures-and-associated-spinor-bundles
- thm-complex-bott-periodicity
- thm-fundamental-product-theorem-for-complex-k-theory
- thm-reduced-k-theory-exact-sequence-of-a-cofibration
- def-external-product-in-complex-k-theory
- def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Atiyah–Bott–Shapiro, Clifford Modules, propositions 11.1–11.3 and theorem
      12.3
    url: https://www.math.ens.psl.eu/~benoist/refs/ABS.pdf
pipeline_run: non-ml-math-remaining-81-2026-10-18
page: real-clifford-modules-ko-and-abs-orientations
dependency_level: 9
---

## Statement

Assume AC. Let $V\to X$ have even rank $2l$ and a given Spin-c structure
over a finite CW pair $(X,A)$. Its complex spinor symbol defines
$\tau_V^c\in\widetilde K^0(\operatorname{Th}(V))$ and natural isomorphisms

$$K^j(X,A)\xrightarrow{\cong}\widetilde K^j(\operatorname{Th}(V)/\operatorname{Th}(V|_A)),\qquad a\longmapsto\pi^*a\,\tau_V^c$$

for every integer $j$. The map is multiplicative under the direct-sum
Spin-c structure. The complex theory and its Bott theorem are used only
in this complex assertion.

## Facts & Assumptions

**Given:** AC, the even-rank Euclidean bundle and its specified Spin-c lift.

[F1] The group is
$\operatorname{Spin}^c(2l)=(\operatorname{Spin}(2l)\times U(1))/
\langle(-1,-1)\rangle$
([[def-given-spin-and-spinc-structures-and-associated-spinor-bundles]]).

[F2] The actual complex Bott/product suppliers identify external product
with $\beta_c=[\gamma]-1\in\widetilde K^0(S^2)$, with $\gamma$ clutched
by $z$, as an isomorphism on finite pairs and all degrees
([[thm-complex-bott-periodicity]],
[[thm-fundamental-product-theorem-for-complex-k-theory]]).

[F3] Reduced complex cofibration exactness holds for finite CW pairs under
AC ([[thm-reduced-k-theory-exact-sequence-of-a-cofibration]]); applying
the periodic identifications [F2] gives its continuation in every degree.

[F4] Under AC, numerable real and complex vector bundles have isomorphic
endpoint pullbacks along a homotopy
([[thm-homotopy-invariance-of-vector-bundle-pullback]]). This applies to
the compact characteristic disks; composing a real trivialization with a
constant reflection when needed makes it preserve orientation.



**Proof technique:** explicit symbols and finite-dimensional bundle constructions.

## Proof

**Proof technique:** direct construction.

1.1 Start in dimension two with $S=\mathbb C\oplus\mathbb C$ of even/odd parity and $c(e_1)=\left(\begin{smallmatrix}0&-1\\1&0\end{smallmatrix}\right)$, $c(e_2)=\left(\begin{smallmatrix}0&i\\i&0\end{smallmatrix}\right)$. Their squares are $-1$ and they anticommute. For dimension $2l$ take the graded tensor of $l$ such modules, and put the $a$th plane's generators after the grading operators on preceding factors. Thus $c(v)^2=-\lVert v\rVert^2$ and the complex dimension is $2^l$. The two-dimensional matrices and their products span $M_2(\mathbb C)$; their graded tensors span $M_{2^l}(\mathbb C)$, so this is the complex spinor module, with even and odd parts of equal dimension for $l>0$. For $l=0$ take a single even complex line. [given, construct, algebra]


2.1 A spin element $s$ acts by its even Clifford representation $\rho(s)$. On the product group in [F1] define $\rho^c(s,z)=z\rho(s)$, with central weight **one**. The kernel element $(-1,-1)$ acts as $(-1)(-I)=I$, so this representation descends. It preserves grading because spin elements are even. For $g=[s,z]$ and any vector $v$, $\rho^c(g)c(v)\rho^c(g)^{-1}= \rho(s)c(v)\rho(s)^{-1}=c(\lambda(s)v)$: the central scalar cancels, and Clifford conjugation gives precisely the oriented vector action. This verifies equivariance including the $U(1)$ factor; using weight zero would not descend. [F1, step 1.1, algebra]


3.1 Form the associated bundles $S^\pm=P\times_{\rho^c}S^\pm$. Step 2.1 makes $c(v):\pi^*S^+\to\pi^*S^-$ globally well-defined. It is invertible off the zero section with inverse $-c(v)/\lVert v\rVert^2$, and hence defines the relative triple and class $\tau_V^c$. This uses neither a global complex structure on $V$ nor a choice of local half-angle functions on overlaps. Pullback of the given principal lift pulls back the whole symbol, proving naturality of the class. [step 2.1, construct]


4.1 On the fiber of a two-plane, the even-to-odd symbol is $x+iy$. On the equatorial unit circle this is exactly $z$, so clutching gives $[\gamma]-1=\beta_c$ with [F2]'s sign convention. On $\mathbb R^{2l}$ the tensor construction in step 1.1 gives the total symbol $c(v)\otimes1+\Gamma\otimes c(w)$ successively. Its square is the negative sum of squared lengths. The two-term tensor calculation identifies its relative class with the external product of the plane symbols: extend each two-term differential by zero, take $d=d_1\otimes1+\Gamma\otimes d_2$, and pass from the total complex to its even/odd symbol by $d-d^*$. This is exactly the displayed total Clifford symbol. In the even order $(S^+T^+,S^-T^-)$ and odd order $(S^-T^+,S^+T^-)$, its block is $\left(\begin{smallmatrix}a&b^*\\b&-a^*\end{smallmatrix}\right)$. The self-adjoint relative tensor block is $\left(\begin{smallmatrix}a&-b^*\\b&a^*\end{smallmatrix}\right)$; right multiplication by the global even-bundle automorphism $\operatorname{diag}(I,-I)$ identifies them. Thus using the skew-adjoint symbol changes no relative product class. Where either factor is invertible the tensor complex is contractible, and the total symbol has contracting inverse $-D/(\lVert v\rVert^2+\lVert w\rVert^2)$ on the boundary. Thus the fiber class is $\beta_c^{\boxtimes l}$ and product with it is an isomorphism in every degree by [F2]. [F2, step 1.1, step 3.1, algebra]


5.1 Filter the finite CW pair by its relative skeleta $A=X_{-1}\subset X_0\subset\cdots\subset X_N=X$. The Thom quotients inherit the corresponding cofibrations. Pullback of the underlying real vector bundle to a cell's characteristic disk is trivial by finite-bundle homotopy invariance [F4], with an orientation-preserving trivialization. In this trivialization the global class lies on $D^k_+\wedge S^{2l}$. Restriction to the center is an isomorphism by the disk contraction, so the class is the pullback of its fiber class from step 4.1. This argument requires no principal-bundle trivialization. Excision and collapse of the attaching sphere identify the cell source with $K^{j-k}(\mathrm{pt})$ and the Thom-cell target with $K^{j-k-2l}(\mathrm{pt})$. The map is external product by the fiber class of step 4.1, hence is an isomorphism. The finitely many cells give a direct sum of these isomorphisms. The disk frame need not agree with any frame on the preceding skeleton: its boundary is collapsed, and the global class already supplies the gluing compatibility. [F2, F3, F4, step 4.1, construct]


6.1 Cup product on the right by the fixed global class gives a morphism of the long exact sequences of $(X_k,X_{k-1},A)$ and their Thom quotients. It commutes with the boundary because in the cylinder construction the symbol is pulled back unchanged along the cylinder; tensoring then restricting to its boundary is the same as restricting then tensoring. The needed complex exact sequences are [F3] in every degree, not an assertion that unsuspended degree-zero exactness already desuspends. The five consecutive terms with central term $K^j(X_k,A)$ have outer isomorphisms by step 5.1 and the induction hypothesis for $X_{k-1}$ in degrees $j-1$ and $j$. Exactness proves the central map injective and surjective by lifting and correcting through the adjacent terms. Starting with $(A,A)$ proves the Thom isomorphism for all $j$. [F3, step 5.1, algebra]


7.1 For two even-rank bundles the direct-sum lift is induced by $([s,z],[t,w])\mapsto[st,zw]$. Changing either representative by $(-1,-1)$ does not change the image class, so this is well-defined. On spinors the product action is $(z\rho(s))\widehat\otimes(w\rho(t))=zw(\rho(s)\widehat\otimes\rho(t))$, exactly the weight-one representation of the direct-sum Spin-c group. Thus the tensor of the associated spinor bundles is the associated spinor bundle of the sum, and its total symbol is the one in step 4.1. The tensor-symbol product calculation proves $\tau_{V\oplus V'}^c=\tau_V^c\tau_{V'}^c$ under the usual Thom identification. Together with step 3.1 this proves both naturality and direct-sum compatibility of the isomorphisms. [F1, step 2.1, step 4.1, step 6.1, algebra, step 3.1] ∎
