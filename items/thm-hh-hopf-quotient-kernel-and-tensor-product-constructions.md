---
id: thm-hh-hopf-quotient-kernel-and-tensor-product-constructions
kind: theorem
title: "Hopf quotients, kernels of Hopf maps, and tensor products"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-hopf-ideal-and-hopf-subalgebra
  - def-hh-hopf-algebra-and-antipode
  - def-hh-bialgebra-and-bialgebra-map
  - thm-quotient-ring-universal-property
  - lem-hh-convolution-algebra-associativity-and-unit
  - thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication
  - thm-tensor-product-of-algebras-over-a-commutative-ring
  - lem-hh-tensor-injections-quotients-and-kernels-over-a-field
  - def-hh-scalar-and-tensor-conventions
  - lem-hh-tensor-coherence-on-elementary-tensors
  - lem-hh-counit-uniqueness-and-finite-sweedler-calculus
  - def-axiom-of-choice
assumptions: [AC]
axiom_use: "AC is used only for tensoring arbitrary vector-space injections and the resulting kernel formula for tensor products of quotient maps, through lem-hh-tensor-injections-quotients-and-kernels-over-a-field. The quotient and tensor-product Hopf constructions are choice-free."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Andrew Baker, Hopf algebras over fields: an introduction, §§2.22–2.25"
      url: "https://www.maths.gla.ac.uk/~ajb/SMSTC/HopfAlgebrasNotes.pdf"
---
 
## Statement

Let $k$ be a field. Let $H$ be a Hopf $k$-algebra and $I\trianglelefteq H$ a Hopf ideal. The quotient $H/I$ has a unique Hopf structure making the quotient map $q:H\to H/I$ a Hopf map. Every Hopf map $f:H\to K$ that kills $I$ factors uniquely through $q$ as a Hopf map. For any Hopf map $f:H\to K$, its kernel is a Hopf ideal.

For Hopf $k$-algebras $H,K$, the tensor product $H\otimes K$ is a Hopf algebra with multiplication $m_{H\otimes K}=(m_H\otimes m_K)(\mathrm{id}_H\otimes\tau_{K,H}\otimes\mathrm{id}_K)$, coproduct $\Delta_{H\otimes K}=(\mathrm{id}_H\otimes\tau_{H,K}\otimes\mathrm{id}_K)(\Delta_H\otimes\Delta_K)$, unit $u_H\otimes u_K$, counit $\varepsilon_H\otimes\varepsilon_K$, and antipode $S_H\otimes S_K$, where $\tau$ flips the two middle tensor factors. The quotient and tensor-product constructions are choice-free. AC is assumed for the kernel assertion and is used only for tensor-kernel exactness over arbitrary vector spaces.

## Facts & Assumptions

**Given:** A field $k$; Hopf $k$-algebras $H,K$; a Hopf ideal $I\trianglelefteq H$; and Hopf maps $f:H\to K$.

Here a **Hopf map** means a bialgebra map between Hopf algebras; step 1.4 proves that every such map automatically commutes with antipodes. Sweedler notation $\Delta(h)=\sum h_1\otimes h_2$ denotes a finite tensor expression and is used only inside well-defined linear contractions ([[lem-hh-counit-uniqueness-and-finite-sweedler-calculus]]).

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. It is used only through the arbitrary-vector-space complement step in the tensor-kernel lemma below.

[F1] [[def-hh-hopf-ideal-and-hopf-subalgebra]]: a Hopf ideal is a two-sided ideal with $\varepsilon(I)=0$, $S(I)\subseteq I$, and $\Delta(I)$ in the sum of the images of $I\otimes H$ and $H\otimes I$; under AC this is the usual tensor-sum shorthand.

[F2] [[thm-quotient-ring-universal-property]]: an algebra map that kills a two-sided ideal factors uniquely through the quotient algebra.

[F3] [[thm-tensor-product-of-algebras-over-a-commutative-ring]]: multiplication on $A\otimes_RB$ is $(a\otimes b)(a'\otimes b')=aa'\otimes bb'$, with unit $1_A\otimes1_B$.

[F4] [[def-hh-bialgebra-and-bialgebra-map]]: bialgebra maps preserve multiplication, unit, comultiplication, and counit; $\Delta$ and $\varepsilon$ are unital algebra maps.

[F5] [[lem-hh-convolution-algebra-associativity-and-unit]]: convolution on linear maps is associative and has unit $u_A\varepsilon_C$.

[F6] [[thm-hh-antipode-uniqueness-anti-multiplication-and-anti-comultiplication]]: two-sided convolution inverses are unique; antipodes are anti-multiplicative and anti-comultiplicative.

[F7] [[lem-hh-tensor-injections-quotients-and-kernels-over-a-field]]: under AC, tensoring injections of vector spaces preserves injectivity, and for quotient maps $p:V\to V/U$, $q:W\to W/Z$, $\ker(p\otimes q)=U\otimes W+V\otimes Z$.

[F8] [[def-hh-scalar-and-tensor-conventions]] and [[lem-hh-tensor-coherence-on-elementary-tensors]]: tensor products are over $k$, every tensor is a finite sum of elementary tensors, and the canonical reassociation and flip maps act on those tensors by reassociation and exchange.

[F9] [[def-hh-hopf-algebra-and-antipode]]: a Hopf algebra has an antipode $S$ satisfying $m(S\otimes\mathrm{id})\Delta=u\varepsilon=m(\mathrm{id}\otimes S)\Delta$; bijectivity of $S$ is not part of the definition.

[F10] [[lem-hh-counit-uniqueness-and-finite-sweedler-calculus]]: Sweedler notation denotes a finite tensor sum, and each contraction is a well-defined linear map on that tensor.

## Proof

**Proof technique:** direct.

1.1 The quotient multiplication $(h+I)(h'+I)=hh'+I$ and unit $1_H+I$ are well-defined because $I$ is a two-sided ideal; [F2] gives the unique algebra map $q_I:H\to H/I$. [given, F1, F2, algebra]

1.2 Define $\overline{\Delta}(h+I):=(q_I\otimes q_I)\Delta_H(h)$. If $h-h'\in I$, then $\Delta(h-h')$ lies in the sum of the two tensor images in [F1], and $q_I\otimes q_I$ kills both, so the formula is independent of the representative. Define $\overline{\varepsilon}(h+I):=\varepsilon_H(h)$, which is well-defined by [F1]. These formulas construct linear maps on the quotient directly. [given, F1, F8, construct]

1.3 Define $\overline S(h+I):=S_H(h)+I$. It is well-defined because $S_H(I)\subseteq I$ by [F1]. [given, F1, construct]

1.4 For any bialgebra map $f:H\to K$, the maps $S_Kf$ and $fS_H$ are both two-sided convolution inverses of $f$. Indeed, $(S_Kf)*f=m_K(S_K\otimes\mathrm{id})\Delta_Kf=u_K\varepsilon_H$ and $f*(S_Kf)=m_K(\mathrm{id}\otimes S_K)\Delta_Kf=u_K\varepsilon_H$, using that $f$ is a coalgebra map and both antipode identities in $K$; also $(fS_H)*f=fm_H(S_H\otimes\mathrm{id})\Delta_H=u_K\varepsilon_H$ and $f*(fS_H)=fm_H(\mathrm{id}\otimes S_H)\Delta_H=u_K\varepsilon_H$, using multiplicativity of $f$ and both antipode identities in $H$. By uniqueness of two-sided inverses in the associative convolution algebra [F5, F6], $S_Kf=fS_H$. [given, F4, F5, F6, F9, F10, algebra]

1.5 For a Hopf map $f:H\to K$, $J:=\ker f$ is a two-sided ideal and $\varepsilon_H(J)=0$, since $f$ preserves multiplication, unit, and counit by [F4]. [given, F4, algebra]

1.6 By [F2], $f=\widetilde f q_J$ for a linear map $\widetilde f:H/J\to K$, and $\widetilde f$ is injective because $\widetilde f(h+J)=f(h)=0$ implies $h\in J$. By [F7], $\widetilde f\otimes\widetilde f$ is injective and $\ker(q_J\otimes q_J)=J\otimes H+H\otimes J$; hence $\ker(f\otimes f)=J\otimes H+H\otimes J$. For $j\in J$, $(f\otimes f)\Delta_H(j)=\Delta_K(f(j))=0$ by [F4], so $\Delta_H(j)\in J\otimes H+H\otimes J$. [given, A1, F2, F4, F7, F10, algebra]

1.7 Give $H\otimes K$ the algebra structure from [F3]. Define $\Delta_T(h\otimes k)=\sum(h_1\otimes k_1)\otimes(h_2\otimes k_2)$, $\varepsilon_T(h\otimes k)=\varepsilon_H(h)\varepsilon_K(k)$, and $S_T(h\otimes k)=S_H(h)\otimes S_K(k)$; these are the displayed maps with the middle factors flipped. [given, F3, F8, F10, construct]

1.8 For pure tensors, multiplicativity of the coproduct follows from $\Delta_T((h\otimes k)(h'\otimes k'))=\sum(h_1h'_1\otimes k_1k'_1)\otimes(h_2h'_2\otimes k_2k'_2)=\Delta_T(h\otimes k)\Delta_T(h'\otimes k')$, using that $\Delta_H,\Delta_K$ are algebra maps and the tensor-product multiplication [F3, F4]. Unit preservation follows from $\Delta_H(1)=1\otimes1$ and $\Delta_K(1)=1\otimes1$. Also $\varepsilon_T((h\otimes k)(h'\otimes k'))=\varepsilon_H(hh')\varepsilon_K(kk')=\varepsilon_T(h\otimes k)\varepsilon_T(h'\otimes k')$, and $\varepsilon_T(1_H\otimes1_K)=1$, since both counits are unital algebra maps by [F4]. These equations extend linearly from pure tensors. [given, F3, F4, F8, F10, algebra]

2.1 For $h,h'\in H$, $\overline\Delta((h+I)(h'+I))=(q_I\otimes q_I)\Delta_H(hh')=(q_I\otimes q_I)(\Delta_H(h)\Delta_H(h'))=\overline\Delta(h+I)\overline\Delta(h'+I)$, using that $\Delta_H$ is an algebra map and [F3] gives the tensor-product algebra. Also $\overline\Delta(1+I)=(1+I)\otimes(1+I)$, $\overline\varepsilon((h+I)(h'+I))=\varepsilon_H(h)\varepsilon_H(h')$, and $\overline\varepsilon(1+I)=1$, by [F4]. Coassociativity follows since the two composites on $h+I$ are respectively $(q_I\otimes q_I\otimes q_I)(\Delta_H\otimes\mathrm{id})\Delta_H(h)$ and $(q_I\otimes q_I\otimes q_I)(\mathrm{id}\otimes\Delta_H)\Delta_H(h)$, equal by coassociativity in $H$; the associators and tensor maps are natural by [F8]. The left counit composite on $h+I$ is $\sum\overline\varepsilon(h_1+I)(h_2+I)=\sum\varepsilon_H(h_1)(h_2+I)=h+I$, and the right composite is $\sum(h_1+I)\varepsilon_H(h_2)=h+I$, by the two counit equations in $H$. For the left antipode equation, its value on $h+I$ is $\sum (S_H(h_1)+I)(h_2+I)=q_I(\sum S_H(h_1)h_2)=\varepsilon_H(h)(1+I)$; the right equation is $\sum(h_1+I)(S_H(h_2)+I)=q_I(\sum h_1S_H(h_2))=\varepsilon_H(h)(1+I)$. Thus these maps make $H/I$ a Hopf algebra. Since $q_I$ is surjective and $q_I\otimes q_I$ is surjective (each elementary tensor of cosets has representatives and such tensors span), the quotient algebra and coalgebra maps are forced by $q_I$; the antipode is unique as a two-sided convolution inverse by [F5, F6]. [step 1.1, step 1.2, step 1.3, given, F1, F3, F4, F5, F6, F8, F9, F10, algebra]

2.2 If a Hopf map $f:H\to K$ kills $I$, [F2] gives a unique algebra map $\bar f:H/I\to K$ with $\bar f q_I=f$. Precomposing the coalgebra-map equation with $q_I$ gives $(\bar f\otimes\bar f)\overline\Delta q_I=(f\otimes f)\Delta_H=\Delta_K f=\Delta_K\bar f q_I$; surjectivity of $q_I$ proves the equation on $H/I$. Counit preservation follows from $\bar f q_I=f$ and surjectivity of $q_I$. For antipodes, $\bar f\overline S q_I=\bar f q_I S_H=fS_H=S_Kf=S_K\bar f q_I$ by step 1.4; surjectivity of $q_I$ proves $\bar f\overline S=S_K\bar f$. Thus $\bar f$ is a Hopf map. [step 1.1, step 1.2, step 1.3, step 1.4, given, F2, F4, F8, F9]

2.3 By step 1.4, $S_Kf=fS_H$. Therefore for $j\in J$, $f(S_H(j))=S_K(f(j))=S_K(0)=0$, so $S_H(J)\subseteq J$. Together with steps 1.5 and 1.6, this says $J$ is a Hopf ideal. [step 1.4, step 1.5, step 1.6, F1, algebra]

2.4 On $h\otimes k$, the two iterated coproducts are $\sum(h_{11}\otimes k_{11})\otimes(h_{12}\otimes k_{12})\otimes(h_2\otimes k_2)$ and $\sum(h_1\otimes k_1)\otimes(h_{21}\otimes k_{21})\otimes(h_{22}\otimes k_{22})$; they agree by coassociativity in $H,K$. Applying the left counit leg gives $\sum\varepsilon_H(h_1)\varepsilon_K(k_1)(h_2\otimes k_2)=h\otimes k$; applying the right leg gives $\sum(h_1\otimes k_1)\varepsilon_H(h_2)\varepsilon_K(k_2)=h\otimes k$, by counitality in each factor. Thus $H\otimes K$ is a bialgebra. [given, step 1.7, F4, F8, F10, algebra]

3.1 The left antipode product is $\sum (S_H(h_1)\otimes S_K(k_1))(h_2\otimes k_2)=\varepsilon_H(h)\varepsilon_K(k)(1_H\otimes1_K)$, and the right product is $\sum (h_1\otimes k_1)(S_H(h_2)\otimes S_K(k_2))=\varepsilon_H(h)\varepsilon_K(k)(1_H\otimes1_K)$. Each equality is the tensor product of the corresponding antipode identity in $H$ and $K$, so $S_T$ is an antipode. The quotient and tensor-product constructions use no choice; AC is used only in the kernel tensor calculation through [F7]. [given, step 1.7, F7, F9, F10, algebra] ∎
