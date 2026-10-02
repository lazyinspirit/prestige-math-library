---
id: thm-cartier-divisors-mod-principal-to-picard
kind: theorem
title: "On an integral scheme, Cartier divisors modulo principal divisors compute the Picard group"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-cartier-divisor
  - def-principal-cartier-divisor
  - def-invertible-sheaf-of-cartier-divisor
  - lem-cartier-divisor-sheaf-invertible
  - lem-cartier-divisor-addition-tensor
  - def-picard-group-scheme
  - thm-line-bundle-rational-section-cartier-divisor
  - def-rational-section-line-bundle
  - def-integral-scheme
  - thm-first-isomorphism-theorem-groups
  - def-sheaf-total-quotient-rings
  - def-sheaf-on-topological-space
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §31.15 (Definition 15.1 and Lemma 15.2: effective Cartier divisors and invertible sheaves), §31.27 (Definitions 27.2, 27.7: Weil divisors and the class group) and §31.28 (Definition 28.4 and Lemma 28.6: the Weil divisor class of an invertible module)"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §15.4 (line bundles and Weil divisors; Important Observation 15.4.9 and the diagram (15.4.11.1) computing Pic modulo principal divisors)"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
---

## Statement

Let $X$ be a scheme, let $\operatorname{CaDiv}(X)$ be its group of Cartier
divisors and let $\operatorname{Prin}_C(X)\subseteq\operatorname{CaDiv}(X)$
be the subgroup of principal Cartier divisors ([[def-cartier-divisor]],
[[def-principal-cartier-divisor]]), and let $\operatorname{Pic}(X)$ be the
Picard group of isomorphism classes of invertible $\mathcal O_X$-modules under
tensor product ([[def-picard-group-scheme]]). Then:

1. (the homomorphism) the rule $D\mapsto[\mathcal O_X(D)]$, which assigns to a
   Cartier divisor the isomorphism class of its associated invertible sheaf
   $\mathcal O_X(D)$ ([[def-invertible-sheaf-of-cartier-divisor]],
   [[lem-cartier-divisor-sheaf-invertible]]), is a well-defined map
   $\varphi_X:\operatorname{CaDiv}(X)\to\operatorname{Pic}(X)$ and a
   homomorphism of abelian groups;
2. (the kernel) $\ker\varphi_X$ is exactly the subgroup
   $\operatorname{Prin}_C(X)$: a Cartier divisor has associated invertible
   sheaf isomorphic to $\mathcal O_X$ if and only if it is principal;
3. (integral case) if $X$ is integral ([[def-integral-scheme]]), then
   $\varphi_X$ is surjective, so it induces an isomorphism of abelian groups
   $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)
   \xrightarrow{\ \sim\ }\operatorname{Pic}(X)$.

The statement holds for every scheme, including the empty scheme, and no
choice principle is used.

## Facts & Assumptions

**Given:** a scheme $X$.

[F1] Cartier divisors on $X$ form an abelian group $\operatorname{CaDiv}(X)$: a Cartier divisor is represented on an open cover $\{U_i\}_{i\in I}$ by meromorphic units $f_i\in\mathcal K_X(U_i)^{\times}$ with $f_i/f_j\in\mathcal O_X(U_i\cap U_j)^{\times}$ for all $i,j$, the sum is represented by the products $f_ig_i$ of local equations on a common cover, the zero element is the class of the constant equation $1$, and passing to a refinement or replacing the equations by unit multiples gives the same divisor. The principal Cartier divisors are the images of the global meromorphic units $\Gamma(X,\mathcal K_X^{\times})\to\operatorname{CaDiv}(X)$ and form a subgroup, and a Cartier divisor is principal exactly when it admits a representation by a single global equation on $X$ ([[def-cartier-divisor]]).

[F2] For a global meromorphic unit $f\in\Gamma(X,\mathcal K_X^{\times})$ the principal Cartier divisor is $\operatorname{div}_C(f)=q_X(f)$, the image of $f$ under the global-section map induced by the quotient sheaf $\mathcal K_X^{\times}\to\mathcal K_X^{\times}/\mathcal O_X^{\times}$; equivalently $\operatorname{div}_C(f)$ is represented by the single local equation $f$ on the open set $X$. One has $\operatorname{div}_C(fg)=\operatorname{div}_C(f)+\operatorname{div}_C(g)$ and $\operatorname{div}_C(1)=0$, and the principal Cartier divisors form a subgroup of $\operatorname{CaDiv}(X)$ ([[def-principal-cartier-divisor]]).

[F3] For a Cartier divisor $D$ with local-equation datum $\{(U_i,f_i)\}$ the subsheaf $\mathcal O_X(D)\subseteq\mathcal K_X$ consists of the meromorphic functions $g\in\mathcal K_X(V)$ with $f_ig|_{V\cap U_i}\in\mathcal O_X(V\cap U_i)$ for every $i$, and $\mathcal O_X(D)|_{U_i}=f_i^{-1}\mathcal O_{U_i}$. The construction is well defined: replacing the equations by unit multiples or passing to a refinement gives the same subsheaf, and any two representations of the same Cartier divisor agree in this sense. For the zero divisor $\mathcal O_X(0)=\mathcal O_X$ ([[def-invertible-sheaf-of-cartier-divisor]]).

[F4] For every Cartier divisor $D$ with datum $\{(U_i,f_i)\}$ the sheaf $\mathcal O_X(D)$ is invertible, and on each $U_i$ the map $\mathcal O_{U_i}\to\mathcal O_X(D)|_{U_i}$, $a\mapsto af_i^{-1}$, is an isomorphism; that is, $\mathcal O_X(D)|_{U_i}$ is freely generated by $f_i^{-1}$. If $X$ is integral then $\mathcal K_X$ is the constant sheaf with value the function field $K(X)$ and $\mathcal O_X(D)$ is a fractional $\mathcal O_X$-subsheaf of $K(X)$ ([[lem-cartier-divisor-sheaf-invertible]]).

[F5] For Cartier divisors $D,E$ on $X$ there are canonical isomorphisms $\mathcal O_X(D+E)\cong\mathcal O_X(D)\otimes_{\mathcal O_X}\mathcal O_X(E)$ and $\mathcal O_X(-D)\cong\mathcal O_X(D)^{\vee}$ ([[lem-cartier-divisor-addition-tensor]]).

[F6] The Picard group $\operatorname{Pic}(X)$ is the set of isomorphism classes $[\mathcal L]$ of invertible $\mathcal O_X$-modules with product $[\mathcal L][\mathcal M]:=[\mathcal L\otimes_{\mathcal O_X}\mathcal M]$, identity $[\mathcal O_X]$ and inverse $[\mathcal L]^{-1}=[\mathcal L^{\vee}]$; it is an abelian group ([[def-picard-group-scheme]]).

[F7] Let $X$ be an integral scheme and $\mathcal L$ an invertible $\mathcal O_X$-module. Every rational section $s\in\Gamma(X,K_X(\mathcal L))$ has a well-defined Cartier divisor $\operatorname{div}_C(s)$ on $X$, there is a canonical isomorphism $\varphi:\mathcal O_X(\operatorname{div}_C(s))\to\mathcal L$ carrying the canonical section $1_D$ to $s$, and conversely for every Cartier divisor $D$ the canonical section $1_D$ is a rational section with $\operatorname{div}_C(1_D)=D$ ([[thm-line-bundle-rational-section-cartier-divisor]]).

[F8] On an integral scheme $X$ with generic point $\eta$ the sheaf $K_X(\mathcal L)=\mathcal L\otimes_{\mathcal O_X}\mathcal K_X$ of meromorphic sections of an invertible $\mathcal L$ is the constant sheaf with value the stalk $\mathcal L_\eta$, which is a one-dimensional $K(X)$-vector space; a rational section is by definition a nonzero element of this vector space ([[def-rational-section-line-bundle]], [[def-sheaf-total-quotient-rings]]).

[F9] An integral scheme is a nonempty reduced scheme whose underlying topological space is irreducible; equivalently, it is nonempty and every nonempty affine open subscheme is the spectrum of a domain ([[def-integral-scheme]]).

[F10] First isomorphism theorem for groups: for every group homomorphism $f:G\to H$ the rule $g\ker f\mapsto f(g)$ is an isomorphism $G/\ker f\to\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[F11] The sheaf of meromorphic functions $\mathcal K_X$ is the sheafification of $U\mapsto S_X(U)^{-1}\mathcal O_X(U)$, where $S_X(U)$ is the multiplicative set of regular sections of $\mathcal O_X$ over $U$; the canonical maps $\mathcal O_X(U)\to S_X(U)^{-1}\mathcal O_X(U)\to\mathcal K_X(U)$ are ring homomorphisms, so every element of $S_X(U)$ maps to a unit of $\mathcal K_X(U)$, and $\mathcal O_X\to\mathcal K_X$ is a morphism of sheaves of rings ([[def-sheaf-total-quotient-rings]]).

[F12] Sections of a sheaf on the members of an open cover that agree on the overlaps glue to a unique global section: if $s_i\in\mathcal F(U_i)$ satisfy $s_i|_{U_i\cap U_j}=s_j|_{U_i\cap U_j}$ for all $i,j$, there is a unique $s\in\mathcal F(U)$ with $s|_{U_i}=s_i$ for all $i$ ([[def-sheaf-on-topological-space]]).

## Proof

1.1 **Well-definedness of the map.** Let $D$ be a Cartier divisor with local-equation datum $\{(U_i,f_i)\}$; by [F3] the subsheaf $\mathcal O_X(D)\subseteq\mathcal K_X$ is well defined and independent of the chosen datum, and by [F4] it is invertible, so its isomorphism class $[\mathcal O_X(D)]$ lies in $\operatorname{Pic}(X)$ by [F6]. This assigns to every $D\in\operatorname{CaDiv}(X)$ a well-defined element $\varphi_X(D)$ of $\operatorname{Pic}(X)$. [F3, F4, F6]

1.2 **Homomorphism.** For Cartier divisors $D,E$ the canonical isomorphism $\mathcal O_X(D+E)\cong\mathcal O_X(D)\otimes_{\mathcal O_X}\mathcal O_X(E)$ of [F5] gives $\varphi_X(D+E)=[\mathcal O_X(D+E)]=[\mathcal O_X(D)][\mathcal O_X(E)]=\varphi_X(D)\varphi_X(E)$ by the product rule in [F6], and $\mathcal O_X(0)=\mathcal O_X$ by [F3] gives $\varphi_X(0)=[\mathcal O_X]$, the identity of $\operatorname{Pic}(X)$; hence $\varphi_X$ is a homomorphism of abelian groups [F1, F3, F5, F6].

1.3 **Principal divisors have trivial class.** Let $f\in\Gamma(X,\mathcal K_X^{\times})$ and put $D=\operatorname{div}_C(f)=q_X(f)$; by [F2] the divisor $D$ is represented by the single global equation $f$ on $X$, so [F3] gives $\mathcal O_X(D)=f^{-1}\mathcal O_X\subseteq\mathcal K_X$. Multiplication by $f^{-1}$ is an isomorphism $\mathcal O_X\to\mathcal O_X(D)$, $a\mapsto af^{-1}$, of $\mathcal O_X$-modules, with inverse given by multiplication by $f$, so $[\mathcal O_X(D)]=[\mathcal O_X]$ and $\varphi_X(D)=0$ by [F6]; thus $\operatorname{Prin}_C(X)\subseteq\ker\varphi_X$ by [F1] and [F2]. [F1, F2, F3, F6]

1.4 **An isomorphism of the divisor sheaf with $\mathcal O_X$.** Conversely let $D$ be a Cartier divisor with $\varphi_X(D)=[\mathcal O_X]$, choose an isomorphism $u:\mathcal O_X(D)\to\mathcal O_X$ of $\mathcal O_X$-modules, and fix a local-equation datum $\{(U_i,f_i)\}_{i\in I}$ for $D$, so that $f_i\in\mathcal K_X(U_i)^{\times}$ and $f_i/f_j\in\mathcal O_X(U_i\cap U_j)^{\times}$ for all $i,j$ by [F1]. By [F4] the sheaf $\mathcal O_X(D)|_{U_i}$ is freely generated by $f_i^{-1}$; the chosen isomorphism $u$ is a single selection from the nonempty set of isomorphisms, so no choice principle is used. [F1, F3, F4]

1.5 **A rational section exists.** Now assume that $X$ is integral, and let $\mathcal L$ be an invertible $\mathcal O_X$-module. By [F9] the scheme $X$ is nonempty, reduced and irreducible, hence has a generic point $\eta$; by [F8] the sheaf $K_X(\mathcal L)$ is the constant sheaf with value the stalk $\mathcal L_\eta$, a one-dimensional vector space over the field $K(X)$, which is nonzero, so the set of nonzero elements of $\mathcal L_\eta$ is nonempty. Choose such an element $s$; it is a global section of $K_X(\mathcal L)$, that is, a rational section of $\mathcal L$, and this is a single selection from a nonempty set, not a choice principle. [F8, F9]

2.1 **The transported generators are units.** Fix $i$ and put $e_i:=u(f_i^{-1})\in\mathcal O_X(U_i)$; then the composite of the generator isomorphism $a\mapsto af_i^{-1}$ of [F4] with $u$ is the endomorphism $a\mapsto ae_i$ of $\mathcal O_{U_i}$, and it is an isomorphism of $\mathcal O_{U_i}$-modules. Its surjectivity gives an element $b\in\mathcal O_X(U_i)$ with $be_i=1$, so $e_i\in\mathcal O_X(U_i)^{\times}$ with inverse $b$; in particular $f_ie_i\in\mathcal K_X(U_i)^{\times}$, because $f_i$ is a unit of $\mathcal K_X(U_i)$ by [F1] and the unit $e_i$ maps to a unit of $\mathcal K_X(U_i)$ under the ring homomorphism $\mathcal O_X(U_i)\to\mathcal K_X(U_i)$ of [F11]. [F1, F4, F11, step 1.4]

2.2 **Surjectivity.** By [F7] the rational section $s$ has a well-defined Cartier divisor $D:=\operatorname{div}_C(s)$ on the integral scheme $X$, and there is a canonical isomorphism $\mathcal O_X(D)\to\mathcal L$, so $[\mathcal L]=[\mathcal O_X(D)]=\varphi_X(D)$ in $\operatorname{Pic}(X)$ by [F6] and step 1.1. As $\mathcal L$ was an arbitrary invertible $\mathcal O_X$-module, the map $\varphi_X$ is surjective. [F6, F7, step 1.1, step 1.5]

3.1 **Gluing the global equation.** For each $i$ put $g_i:=f_ie_i\in\mathcal K_X(U_i)^{\times}$, a unit by step 2.1. On $U_i\cap U_j$ one has $f_i^{-1}=(f_j/f_i)f_j^{-1}$ with $f_j/f_i\in\mathcal O_X(U_i\cap U_j)^{\times}$ by [F1], and the $\mathcal O_X$-linearity of $u$ gives $e_i=u(f_i^{-1})=(f_j/f_i)u(f_j^{-1})=(f_j/f_i)e_j$, so $g_i=f_ie_i=f_je_j=g_j$; by [F12] the $g_i$ glue to a unique global section $f\in\Gamma(X,\mathcal K_X)$ with $f|_{U_i}=g_i$. The local inverses $g_i^{-1}$ agree on the overlaps as well, because they are the inverses of the equal restrictions $g_i|_{U_i\cap U_j}=g_j|_{U_i\cap U_j}$, so they glue to an inverse of $f$ and $f\in\Gamma(X,\mathcal K_X^{\times})$. [F1, F11, F12, step 1.4, step 2.1]

4.1 **The divisor is principal.** On each $U_i$ one has $f_i=f|_{U_i}e_i^{-1}$ with $e_i^{-1}\in\mathcal O_X(U_i)^{\times}$ by step 2.1, so the local equations $f_i$ of $D$ differ from the restrictions of the global meromorphic unit $f$ by units of $\mathcal O_X$, and by the local-equation description of [F1] the divisor $D$ is represented by the single global equation $f$; thus $D=q_X(f)=\operatorname{div}_C(f)$ is principal by [F2]. Hence $\ker\varphi_X\subseteq\operatorname{Prin}_C(X)$. [F1, F2, step 3.1]

5.1 **The kernel.** By step 1.3 every principal Cartier divisor lies in the kernel of $\varphi_X$, and by step 4.1 every divisor in the kernel is principal; since $\operatorname{Prin}_C(X)$ is a subgroup of $\operatorname{CaDiv}(X)$ by [F1] and [F2], the kernel of $\varphi_X$ is exactly $\operatorname{Prin}_C(X)$. [F1, F2, step 1.3, step 4.1]

6.1 **The induced isomorphism.** By step 1.2 the map $\varphi_X$ is a group homomorphism, by step 5.1 its kernel is $\operatorname{Prin}_C(X)$, and by step 2.2 its image is all of $\operatorname{Pic}(X)$ when $X$ is integral; the first isomorphism theorem [F10] therefore identifies $\operatorname{CaDiv}(X)/\operatorname{Prin}_C(X)$ with $\operatorname{Pic}(X)$ through the map induced by $\varphi_X$. [F10, step 5.1, step 2.2] ∎

No choice principle is used: the only selections are those of a single isomorphism $u$ in step 1.4 and of a single nonzero rational section in the step numbered 1.5, each from a set that has just been shown nonempty. On the empty scheme $\operatorname{CaDiv}(\varnothing)=0$ by [F1], and the unique $\mathcal O_\varnothing$-module is invertible vacuously, so $\operatorname{Pic}(\varnothing)$ is trivial and both the kernel statement and the induced isomorphism hold; the surjectivity in part 3 is asserted only for integral $X$, which is nonempty by [F9]. Taking $D=0$ recovers the identity class, and for $D,E$ the isomorphism of [F5] exhibits the homomorphism property on the level of canonical isomorphisms, not merely on classes.
