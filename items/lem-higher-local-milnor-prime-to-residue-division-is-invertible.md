---
dependency_level: 23
id: lem-higher-local-milnor-prime-to-residue-division-is-invertible
kind: lemma
title: Prime-to-residue multiplication on higher local Milnor groups is invertible
deps:
- lem-all-local-roots-of-unity-annihilate-higher-milnor-classes
- def-axiom-of-choice
- def-dependent-choice
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-milnor-k-group-of-a-field
- lem-milnor-symbol-anticommutativity-and-repeated-entry-identities
- lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-bass-tate-kato-norm-transfer-for-milnor-k-groups
- lem-complete-discrete-valuation-extension-degree-and-tame-norm
- lem-prime-to-residue-characteristic-milnor-k-quotients
- thm-multiplicative-group-of-a-finite-field-is-cyclic
- prop-splitting-field-of-x-n-minus-a
- thm-finite-galois-extension-characterizations
- def-tensor-product-of-modules-by-generators-and-relations
- thm-universal-property-of-module-tensor-products
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
proof_strategy: direct
axiom_use: Literal AC and DC for accepted canonical Milnor transfer, finite local
  extensions and the distinguished canonical Hilbert pairing. No torsion classification
  or wild injectivity is assumed.
sources:
  references:
  - title: Fesenko–Vostokov, Local Fields and Their Extensions, second edition, Chapter
      IX; local reconstruction
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Printed pp.307–308, full IX4.4 Carroll argument, and pp.313–315. The
      alternating-ideal proof supplies all higher relations; only modulo-root membership
      is used in the norm calculation. No omitted IX4.5 theorem is imported.
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a nonarchimedean local field with finite residue field of characteristic $p$. For every integer $n\ge3$ and every integer $r\ge1$ prime to $p$, multiplication by $r$ is a bijection
$$r:K_n^M(F)\xrightarrow{\sim}K_n^M(F).$$
No root-of-unity hypothesis is imposed on $F$. Both characteristics and the prime $2$ whenever $p\ne2$ are included. This does not assert mixed-characteristic residue-$p$ injectivity.

## Statement references

[[lem-all-local-roots-of-unity-annihilate-higher-milnor-classes]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-milnor-k-group-of-a-field]]

[[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]]

[[lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates]]

[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]]

[[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[[lem-prime-to-residue-characteristic-milnor-k-quotients]]

[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[[prop-splitting-field-of-x-n-minus-a]]

[[thm-finite-galois-extension-characterizations]]

[[def-tensor-product-of-modules-by-generators-and-relations]]

[[thm-universal-property-of-module-tensor-products]]

## Facts & Assumptions

**Given:** Exactly the field, degree, integer and AC/DC in the Statement.

[F1] Milnor groups have the multilinear Steinberg presentation; symbols anticommute and $\{a,a\}=\{a,-1\}$. Every finite root of unity annihilates every Milnor group of degree at least two. [[def-milnor-k-group-of-a-field]] [[lem-milnor-symbol-anticommutativity-and-repeated-entry-identities]] [[lem-all-local-roots-of-unity-annihilate-higher-milnor-classes]]

[F2] With a uniformizer $\pi$, Teichmuller lifts give $F^\times=\pi^{\mathbb Z}\times\mu_{q-1}\times U_1$. Simple residue roots have deterministic Hensel lifts; in particular a principal unit has a unique principal $\ell$th root when $\ell\ne p$. [[def-local-field-valuation-ring-uniformizer-and-residue-field]] [[lem-finite-residue-teichmuller-lifts-and-equal-characteristic-laurent-coordinates]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F3] Canonical Milnor transfer satisfies projection, $N\operatorname{res}=[L:F]$, the determinant field norm in degree one, and $\operatorname{res}N=\sum\sigma$ for finite Galois extensions. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]]

[F4] Finite extensions of the given local field are again complete discretely valued with finite residue field. Roots of $X^\ell-a$ differ by $\mu_\ell$, and a splitting field of a separable polynomial is finite Galois. [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[prop-splitting-field-of-x-n-minus-a]] [[thm-finite-galois-extension-characterizations]]

[F5] Multiplication by an integer prime to $p$ is onto $K_n^M(F)$ for $n\ge3$; the quotient calculation alone does not prove injectivity. [[lem-prime-to-residue-characteristic-milnor-k-quotients]]

[F6] The multiplicative group of a finite residue field is cyclic, hence its Teichmuller lifts are cyclic. [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F7] Tensor products of arbitrary abelian groups have the generators-and-relations presentation with finite sums and its universal property. We will construct the required alternating quotient for arbitrary abelian groups explicitly, rather than apply a finite-dimensional exterior-power theorem. [[def-tensor-product-of-modules-by-generators-and-relations]] [[thm-universal-property-of-module-tensor-products]]

[A1] AC and DC remain literal for the accepted local-root, transfer and finite-extension branches. All auxiliary roots and finite bases below are chosen only within those hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Given:** The data above. It suffices first to consider a prime $\ell\ne p$.

1.1 Put $M=F^\times/\mu(F)$, written additively. Let $E_k=\Lambda^k_{\mathbb Z}M$ mean the explicit free abelian group on $k$-tuples, modulo additivity in each entry and the relations with repeated entries; put $E_0=\mathbb Z$ and multiply by concatenation. This construction is available for arbitrary abelian $M$ by [F7]. Let $J$ be the graded ideal generated by $\bar a\wedge\overline{1-a}$ for $a\ne0,1$. For $k\ge1$, put $C_k=\mu(F)\cdot K_{k-1}^M(F)$; then $$K_k^M(F)/C_k\simeq E_k/J_k.$$ Indeed killing the degree-one roots in the tensor presentation kills $\{a,-1\}$, so $\{a,a\}=0$ and expansion at a sum gives alternatingness. Conversely the alternating presentation with these degree-two Steinberg generators satisfies every nonadjacent Steinberg relation, by moving the specified slots adjacent with its sign. The two induced maps are inverse on generators. By [F1], $C_k=0$ for every $k\ge3$, so this presentation then is the actual $K_k^M(F)$. [A1, F1, F7, given, construct, algebra]

2.1 Fix $\pi$. From [F2], $$M=\mathbb Z\bar\pi\oplus B,\qquad B=U_1/(U_1\cap\mu(F)).$$ The $\ell$th-power map on $U_1$ is bijective by Hensel with the residue root $1$. A prime-to-$p$ torsion principal unit must be $1$, by uniqueness for its prime-to-$p$ power polynomial. Thus $U_1\cap\mu(F)$ is $p$-primary; $\ell$th power is an automorphism of this $p$-primary group, and it follows that $\ell$ is bijective on $B$. Write its additive inverse as $b\mapsto b/\ell$. For $k\ge2$, finite expansion of a wedge into its integer $\pi$ coefficients and its $B$ entries, discarding terms with two $\pi$ entries, gives $$E_k\simeq\Lambda^kB\oplus\bigl(\bar\pi\wedge\Lambda^{k-1}B\bigr).$$ An inverse decomposition map has first component $b_1\wedge\cdots\wedge b_k$ and second component $\sum_i(-1)^{i-1}v_i b_1\wedge\cdots\widehat b_i\cdots\wedge b_k$ for entries $v_i\bar\pi+b_i$. These finite alternating multilinear formulas respect the presentation, and expansion verifies both inverse identities. [F1, F2, F7, step 1.1, construct, algebra]

2.2 First assume $\mu_\ell\subset F$. Reduction injects on prime-to-$p$ roots by [F2], so $\ell\mid q-1$. We prove the auxiliary inclusion $$\{1-\theta\epsilon^\ell,\epsilon\}\in C_2(F)\quad\left(\theta\in\mu_{q-1},\ \epsilon\in U_1,\ 1-\theta\epsilon^\ell\ne0\right).$$ Choose $\theta_1^\ell=\theta$ and put $L=F(\theta_1)$. The element $\theta_1$ is a prime-to-$p$ root of unity, of order dividing $\ell(q-1)$. By [F4], $L/F$ is trivial or cyclic of degree $\ell$: all polynomial roots lie there, and $\sigma\mapsto\sigma(\theta_1)/\theta_1$ injects its nontrivial Galois group into $\mu_\ell$. If $L=F$, factor $1-\theta\epsilon^\ell=\prod_{i=0}^{\ell-1}(1-\zeta^i\theta_1\epsilon)$. All factors are nonzero. Steinberg on each factor gives $$\{1-\theta\epsilon^\ell,\epsilon\}=-\sum_i\{1-\zeta^i\theta_1\epsilon,\zeta^i\theta_1\}\in C_2(F).$$ Here $\zeta$ is any primitive $\ell$th root. [A1, F1, F2, F4, step 1.1, construct, algebra]

3.1 For $k\ge1$, division by $\ell$ on $\Lambda^kB$ is induced by dividing its first entry by $\ell$. This formula is multilinear. If repeated entries avoid the first slot it still vanishes; if the first and another entry equal $b$, its image contains $(b/\ell)\wedge b=\ell(b/\ell)\wedge(b/\ell)=0$. Thus it respects all alternating relations, and multiplication by $\ell$ on either side is the identity. Step 2.1 consequently makes multiplication by $\ell$ bijective on every $E_k$, $k\ge2$; denote its unique inverse by $D_k$. In degree two, for $a_i=\pi^{v_i}\theta_i\epsilon_i$, its image in $K_2^M(F)/C_2$ is $$f(a_1,a_2)=\left\{\pi,(\epsilon_2^{v_1}\epsilon_1^{-v_2})^{1/\ell}\right\}+\{\epsilon_1,\epsilon_2^{1/\ell}\}\pmod {C_2}.$$ These are the unique principal-unit roots. This expression is obtained by expanding the wedge; bilinearity and alternatingness were proved before quotienting, not guessed from the displayed formula. Changing a root-group representative has no effect modulo $C_2$. [F1, F2, F7, step 1.1, step 2.1, construct, algebra]

3.2 Suppose $L\ne F$. The prime-to-$p$ root $\theta_1$ has residue different from $1$, since a torsion principal unit of order prime to $p$ is $1$. Hence $u=1-\theta_1\epsilon$ is a unit of $L$. The degree-one Galois-sum identity in [F3] gives $Nu=1-\theta\epsilon^\ell$; projection and Steinberg give $$\{1-\theta\epsilon^\ell,\epsilon\}=N\{u,\epsilon\}=-N\{u,\theta_1\}.$$ Write $u=\eta\epsilon'$ with $\eta$ a Teichmuller root in $L$ and $\epsilon'\in U_{1,L}$. For $M_1=\operatorname{ord}(\theta_1)$ prime to $p$, Hensel gives $\epsilon'=w^{M_1}$, hence $\{\epsilon',\theta_1\}=0$. Both $\eta$ and $\theta_1$ are Teichmuller roots: reduction injects on prime-to-$p$ torsion, so the latter has order dividing $q_L-1$. Choose a generator $\lambda$ of those roots by [F6]. Thus $\{u,\theta_1\}=c\{\lambda,\lambda\}$ for an integer $c$. Put $h=q_L-1$ and $g=\{\lambda,\lambda\}=\{\lambda,-1\}$, so $2g=0$. If $h$ is odd, also $hg=0$ and $g=0$. If $4\mid h$, then $g=(h/2)g=0$. If $h=2m$ with $m$ odd, $-\lambda$ has odd order; its repeated symbol and its cross symbols with $-1$ vanish, so expansion gives $g=\{-1,-1\}$. This includes characteristic two, where $-1=1$. Therefore $N\{u,\theta_1\}$ is either zero or an integer multiple of $N\operatorname{res}\{-1,-1\}=[L:F]\{-1,-1\}$, which lies in $C_2(F)$. Together with step 2.2 this proves the auxiliary inclusion. We have not assumed that transfer preserves arbitrary root-symbol ideals. [A1, F1, F2, F3, F4, F6, step 2.1, step 2.2, choose, algebra]

4.1 We check every Steinberg generator under $D_2$. If $v(a)>0$, write $a=\pi^v\theta\epsilon$ and $1-a=\epsilon_2\in U_1$. Step 3.1 gives $f(a,1-a)=\{\pi^v\epsilon,\epsilon_2^{1/\ell}\}=\{a,\epsilon_2^{1/\ell}\}$ modulo $C_2$; with $z=\epsilon_2^{1/\ell}$ this is $\{1-z^\ell,z\}$, zero by steps 2.2 and 3.2. If $v(a)=v(1-a)=0$, write $a=\theta_1\epsilon_1$, $1-a=\theta_2\epsilon_2$ and $z=\epsilon_2^{1/\ell}$. Then $f(a,1-a)=\{\epsilon_1,z\}=\{a,z\}=\{1-\theta_2z^\ell,z\}=0$ modulo $C_2$. If $v(1-a)>0$, interchange the arguments and use alternatingness. If $v(a)<0$, bilinearity and $f(a^{-1},-a^{-1})=0$ give $$f(a,1-a)=-f(a^{-1},1-a)=-f(a^{-1},1-a^{-1}),$$ using $1-a^{-1}=-a^{-1}(1-a)$; the last pair has positive first valuation. These exhaust all $a\ne0,1$. The presentation in step 1.1 now gives $D_2(J_2)\subset J_2$. [F1, F2, F7, step 1.1, step 3.1, step 2.2, step 3.2, algebra]

5.1 Every $J_k$ is spanned by products $r z$ with $r\in J_2$, $z\in E_{k-2}$; reordering supplies the same finite signs for arbitrary slot positions. For $k\ge2$, both $D_k(rz)$ and $D_2(r)z$ multiply by $\ell$ to $rz$. Injectivity on $E_k$ from step 3.1 therefore gives $$D_k(rz)=D_2(r)z\in J_k.$$ Thus $D_k$ respects the ENTIRE higher Steinberg ideal, including every cross-slot relation, and descends to a two-sided inverse of $\ell$ on $E_k/J_k$. For $k\ge3$ this quotient is $K_k^M(F)$ by step 1.1. We have proved injectivity as well as surjectivity when $\mu_\ell\subset F$. [F1, F7, step 1.1, step 3.1, step 4.1, algebra]

6.1 If $\mu_\ell$ is absent, take $F'=F(\mu_\ell)$. Since $\ell\ne p$, it differs from $\operatorname{char}F$, and $X^\ell-1$ is separable. Its splitting field is finite Galois; a primitive root generates it, and its Galois action injects into $(\mathbb Z/\ell)^\times$. Hence $h=[F':F]$ divides $\ell-1$ and is prime to $\ell$. The field $F'$ is again finite-residue local of residue characteristic $p$ by [F4], and step 5.1 applies there. If $\ell x=0$ in $K_n^M(F)$, its restriction is zero, so $hx=N\operatorname{res}x=0$. Bezout for $h,\ell$ gives $x=0$. Onto multiplication over $F$ is already [F5]. This descent uses only restriction injectivity on $\ell$-torsion through a coprime-degree extension, not arbitrary restriction injectivity. [A1, F3, F4, F5, step 5.1, construct, algebra]

7.1 Each prime divisor of the given $r$ differs from $p$. Steps 5.1 and 6.1 make multiplication by each such prime bijective on every $K_n^M(F)$, $n\ge3$; a finite prime factorization and composition give the required inverse for $r$. For $r=1$ the map is the identity. The lowest degree $n=3$, empty exterior summands, identity root and both characteristics were included in the construction. No wild $p$-inverse, Tate torsion assertion, cyclic $K_2$ Hilbert90 or motivic comparison was used. [F1, F5, step 1.1, step 5.1, step 6.1, algebra] ∎
