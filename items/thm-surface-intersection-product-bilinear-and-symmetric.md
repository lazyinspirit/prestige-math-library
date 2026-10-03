---
id: thm-surface-intersection-product-bilinear-and-symmetric
kind: theorem
title: "The surface intersection product is symmetric and bilinear"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - cor-degree-additive-proper-curve
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-minimal-prime-over-a-nonzerodivisor-has-height-one
  - cor-twist-exact-sequence-effective-divisor
  - def-ample-invertible-sheaf
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-dimension-noetherian-topological-space
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-integral-scheme
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-locally-noetherian-and-noetherian-scheme
  - def-projective-morphism-pre-proj
  - def-section-zero-scheme-invertible-sheaf
  - def-sheaf-tensor-product
  - def-very-ample-invertible-sheaf-relative
  - lem-cartier-divisor-addition-tensor
  - lem-closed-immersion-projection-formula-invertible
  - lem-effective-cartier-divisor-exact-sequence
  - lem-euler-characteristic-additive-short-exact
  - lem-eventual-global-generation-coherent-twists
  - lem-global-section-effective-divisor
  - lem-invertible-sheaf-dual-tensor-inverse
  - lem-very-ample-implies-ample
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-projective-morphism-proper
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k$ be a field, let
$X$ be an integral regular projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]) and let
$\mathcal L,\mathcal M,\mathcal N$ be invertible $\mathcal O_X$-modules
([[def-invertible-sheaf]]). Then
$$(\mathcal L\otimes\mathcal M)\cdot\mathcal N=\mathcal L\cdot\mathcal N+\mathcal M\cdot\mathcal N,\qquad \mathcal L\cdot(\mathcal M\otimes\mathcal N)=\mathcal L\cdot\mathcal M+\mathcal L\cdot\mathcal N;$$
consequently the intersection product is a symmetric $\mathbb Z$-bilinear
pairing $\operatorname{Pic}(X)\times\operatorname{Pic}(X)\to\mathbb Z$ and
$\mathcal L\cdot\mathcal O_X=0$. Equivalently, for Cartier divisors on $X$:
$$(C+C')\cdot D=C\cdot D+C'\cdot D,\qquad C\cdot(D+D')=C\cdot D+C\cdot D',\qquad C\cdot D=D\cdot C.$$

## Facts & Assumptions

**Given:** a field $k$, an integral regular projective surface $X$ over $k$, invertible $\mathcal O_X$-modules $\mathcal L,\mathcal M,\mathcal N$, and Cartier divisors $C,D$ on $X$.

[F1] The surface: $X$ is proper over $k$ ([[thm-projective-morphism-proper]]), integral, and of finite type over $k$, hence Noetherian and locally Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[def-locally-noetherian-and-noetherian-scheme]], [[def-integral-scheme]]); $\chi(X,-)$ is defined on coherent modules and the intersection product on invertible modules and Cartier divisors is defined, symmetric in its two arguments, vanishes against $\mathcal O_X$, and depends only on the isomorphism classes of the line bundles, equivalently only on the linear equivalence classes of the divisors ([[def-divisor-intersection-number-on-smooth-projective-surface]]).

[F2] Ample and very ample twists: fix a projective embedding of $X$ in the H-projective convention and let $\mathcal O_X(1)$ be the pullback of the twisting sheaf of projective space; then $\mathcal O_X(1)$ is H-very ample relative to $\operatorname{Spec}k$, hence ample ([[def-projective-morphism-pre-proj]], [[def-very-ample-invertible-sheaf-relative]], [[lem-very-ample-implies-ample]], [[def-ample-invertible-sheaf]]).

[F3] Effective Cartier divisors: an effective Cartier divisor $H$ has invertible ideal sheaf $\mathcal O_X(-H)$, closed immersion $i:H\hookrightarrow X$, and short exact sequence $0\to\mathcal O_X(-H)\to\mathcal O_X\to i_*\mathcal O_H\to0$; twisting by an invertible $\mathcal N$ gives $0\to\mathcal N(-H)\to\mathcal N\to i_*(\mathcal N|_H)\to0$ ([[def-effective-cartier-divisor]], [[def-invertible-sheaf-of-cartier-divisor]], [[lem-effective-cartier-divisor-exact-sequence]], [[cor-twist-exact-sequence-effective-divisor]]). Moreover $H$ is a proper $k$-scheme of dimension at most one ([[cor-minimal-prime-over-a-nonzerodivisor-has-height-one]], [[def-dimension-noetherian-topological-space]], [[thm-projective-morphism-proper]]), so the degree and the quadratic identity of [[cor-degree-additive-proper-curve]] apply on $H$.

[F4] Additivity of $\chi$ and the projection formula: for a short exact sequence of coherent modules on $X$ the Euler characteristic is additive ([[lem-euler-characteristic-additive-short-exact]]), and $\chi(X,i_*\mathcal F)=\chi(H,\mathcal F)$ for coherent $\mathcal F$ on $H$ ([[lem-closed-immersion-projection-formula-invertible]]).

[F5] Global generation: since $X$ is projective over the Noetherian field $k$ with $\mathcal O_X(1)$ ample, for every coherent $\mathcal F$ there is $m_0$ with $\mathcal F\otimes\mathcal O_X(1)^{\otimes m}$ globally generated for all $m\ge m_0$ ([[lem-eventual-global-generation-coherent-twists]]); on the integral nonempty $X$ a nonzero global section of an invertible sheaf is regular, and its zero scheme is an effective Cartier divisor $Z(s)$ with $\mathcal O_X(Z(s))\cong\mathcal L$ ([[lem-global-section-effective-divisor]], [[def-section-zero-scheme-invertible-sheaf]]).

[F6] Divisor dictionary on the integral surface: $D\mapsto[\mathcal O_X(D)]$ induces an isomorphism $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)\xrightarrow{\sim}\operatorname{Pic}(X)$, so $D$ is linearly equivalent to $D'$ exactly when $\mathcal O_X(D)\cong\mathcal O_X(D')$, and $\mathcal O_X(D+D')\cong\mathcal O_X(D)\otimes\mathcal O_X(D')$, $\mathcal O_X(-D)\cong\mathcal O_X(D)^{\vee}$ ([[thm-cartier-divisors-mod-principal-to-picard]], [[lem-cartier-divisor-addition-tensor]], [[lem-invertible-sheaf-dual-tensor-inverse]]).

[F7] The Axiom of Choice is inherited through the properness and ampleness suppliers [F1]–[F2], the curve identity of [F3] (via devissage), the Euler-characteristic and cohomology suppliers of [F4], and eventual global generation in [F5]. The divisor dictionary [F6] uses no choice principle; the tensor computations below make no selection.

## Proof

**Proof technique:** direct; prove the shift identity for an effective divisor by substituting two twisting sequences into the defining four-term expression, then reduce arbitrary divisors to differences of effective ones via global generation.

1.1 Set-up and the shift identity. For invertible modules $\mathcal L_1,\mathcal L_2$ write $\Phi(\mathcal L_1,\mathcal L_2)$ for the defining expression $\chi(X,\mathcal O_X)-\chi(X,\mathcal L_1^{\vee})-\chi(X,\mathcal L_2^{\vee})+\chi(X,\mathcal L_1^{\vee}\otimes\mathcal L_2^{\vee})$, so that $\mathcal L_1\cdot\mathcal L_2=\Phi(\mathcal L_1,\mathcal L_2)$; for an effective Cartier divisor $H$ write $\mathcal L_2(H)=\mathcal L_2\otimes\mathcal O_X(H)$ and set $e(\mathcal N):=\chi(X,\mathcal N)-\chi(X,\mathcal N(-H))$ for invertible $\mathcal N$, so that $e(\mathcal N)=\chi(H,\mathcal N|_H)$ by the twisting sequence, additivity of $\chi$ and the projection formula. Expanding the four terms and using $\mathcal L_2(H)^{\vee}=\mathcal L_2^{\vee}(-H)$ gives $$\Phi(\mathcal L_1,\mathcal L_2(H))-\Phi(\mathcal L_1,\mathcal L_2)-\Phi(\mathcal L_1,\mathcal O_X(H))=e(\mathcal L_1^{\vee})+e(\mathcal L_2^{\vee})-e(\mathcal O_X)-e(\mathcal L_1^{\vee}\otimes\mathcal L_2^{\vee}),$$ and substituting $e(\mathcal N)=\chi(H,\mathcal N|_H)$ the right-hand side becomes the negative of $\chi(H,\mathcal O_H)-\chi(H,\mathcal L_1^{\vee}|_H)-\chi(H,\mathcal L_2^{\vee}|_H)+\chi(H,\mathcal L_1^{\vee}|_H\otimes\mathcal L_2^{\vee}|_H)$, which vanishes by part 3 of [[cor-degree-additive-proper-curve]] applied to the proper curve $H$ and the invertible sheaves $\mathcal L_1^{\vee}|_H$, $\mathcal L_2^{\vee}|_H$. Hence $$\Phi(\mathcal L_1,\mathcal L_2(H))=\Phi(\mathcal L_1,\mathcal L_2)+\Phi(\mathcal L_1,\mathcal O_X(H))$$ for every effective Cartier divisor $H$. The defining expression is symmetric, $\Phi(\mathcal L,\mathcal O_X)=0$, and $\Phi$ depends only on isomorphism classes; writing $\Phi(C,D):=\Phi(\mathcal O_X(C),\mathcal O_X(D))$ for Cartier divisors, the divisor dictionary shows that $\Phi(C,D)$ depends only on the linear equivalence classes of $C$ and $D$. [F1, F3, F4, F6]

1.2 Differences of effective divisors. Every Cartier divisor on $X$ is linearly equivalent to a difference $E-F$ of effective Cartier divisors: since $X$ is projective over the Noetherian field $k$ and $\mathcal O_X(1)$ is ample, there is an integer $m$ for which both $\mathcal O_X(D)\otimes\mathcal O_X(1)^{\otimes m}$ and $\mathcal O_X(1)^{\otimes m}$ are globally generated; choosing nonzero global sections $s$ and $t$ and using that $X$ is integral, the zero schemes $E=Z(s)$ and $F=Z(t)$ are effective Cartier divisors with $\mathcal O_X(E)\cong\mathcal O_X(D)\otimes\mathcal O_X(1)^{\otimes m}$ and $\mathcal O_X(F)\cong\mathcal O_X(1)^{\otimes m}$, so $\mathcal O_X(E-F)\cong\mathcal O_X(D)$ and $D$ is linearly equivalent to $E-F$. [F2, F5, F6]

2.1 Effective additivity. Let $H$ be an effective Cartier divisor and let $C,D$ be Cartier divisors. By the shift identity of step 1.1 and the dictionary of [F6], $\Phi(C,D+H)=\Phi(C,D)+\Phi(C,H)$. In particular, for effective $C,D_1,D_2$ the identity $\Phi(C,D_1+D_2)=\Phi(C,D_1)+\Phi(C,D_2)$ holds by taking $D=D_1$ and $H=D_2$. [F6, step 1.1]

3.1 Additivity in the second variable. Let $D_1,D_2$ be arbitrary Cartier divisors and choose, by step 1.2, effective $E_1,E_2,F_1,F_2$ with $D_i$ linearly equivalent to $E_i-F_i$. Then $D_1+F_1$ is linearly equivalent to $E_1$, and $D_2+F_2$ to $E_2$; since the values of $\Phi$ depend only on linear equivalence classes, applying step 2.1 twice with the effective divisors $F_1,F_2$ gives $$\Phi(C,D_1+D_2)+\Phi(C,F_1)+\Phi(C,F_2)=\Phi(C,D_1+D_2+F_1+F_2)=\Phi(C,E_1+E_2)=\Phi(C,E_1)+\Phi(C,E_2),$$ while applying step 2.1 to each pair $(D_i,F_i)$ gives $\Phi(C,E_i)=\Phi(C,D_i)+\Phi(C,F_i)$. Substituting and cancelling $\Phi(C,F_1)+\Phi(C,F_2)$ yields $\Phi(C,D_1+D_2)=\Phi(C,D_1)+\Phi(C,D_2)$ for all Cartier divisors $C,D_1,D_2$. [step 1.2, step 2.1]

4.1 Additivity in the first variable and vanishing at zero. The defining expression is symmetric in its two arguments, so $\Phi(C_1+C_2,D)=\Phi(D,C_1+C_2)=\Phi(D,C_1)+\Phi(D,C_2)=\Phi(C_1,D)+\Phi(C_2,D)$ by step 3.1 applied with first argument $D$; hence $\Phi$ is additive in each variable, and $\Phi(C,0)=\Phi(0,D)=0$ because $\mathcal O_X(0)=\mathcal O_X$ and $\Phi(\mathcal L,\mathcal O_X)=0$. [F1, F6, step 3.1]

5.1 Translation to line bundles and conclusion. Since $X$ is integral, every invertible sheaf on $X$ is isomorphic to $\mathcal O_X(C)$ for a Cartier divisor $C$, well defined modulo linear equivalence; under this dictionary tensor products and duals of line bundles correspond to sums and negatives of divisors, and $\Phi$ depends only on the classes. Hence the divisor identities of steps 2.1, 3.1 and 4.1 translate into $$(\mathcal L\otimes\mathcal M)\cdot\mathcal N=\mathcal L\cdot\mathcal N+\mathcal M\cdot\mathcal N,\qquad \mathcal L\cdot(\mathcal M\otimes\mathcal N)=\mathcal L\cdot\mathcal M+\mathcal L\cdot\mathcal N,\qquad \mathcal L\cdot\mathcal M=\mathcal M\cdot\mathcal L,\qquad \mathcal L\cdot\mathcal O_X=0$$ for all invertible $\mathcal L,\mathcal M,\mathcal N$: the intersection product is a symmetric $\mathbb Z$-bilinear pairing $\operatorname{Pic}(X)\times\operatorname{Pic}(X)\to\mathbb Z$. The Axiom of Choice enters only through the suppliers of [F7], in particular the eventual global generation of [F5], the Euler-characteristic additivity and projection formula of [F4] and the curve identity of [F3] used in step 1.1; the two sections chosen in step 1.2 are single sections of specific sheaves, not a family, and no further selection is made. [F7, step 2.1, step 3.1, step 4.1] ∎
