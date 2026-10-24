---
id: "lem-finite-type-field-zero-differentials-finite-separable"
kind: "lemma"
title: "Finite-type field extensions with zero Ω"
status: published
origin: "pipeline"
deps: ["def-axiom-of-choice", "def-finitely-generated-field-extension", "def-field-extension-generated-subfields-and-simple-extension", "def-kahler-differentials-algebra", "def-extension-degree-and-finite-extension", "def-separable-elements-and-separable-extensions", "def-finite-type-and-module-finite-algebras", "def-noetherian-ring-and-module", "def-principal-localisation", "def-localisation-at-a-prime-ideal", "def-nilradical-and-reduced-ring", "def-algebraically-closed-field", "def-prime-and-maximal-ideals", "def-jacobson-radical-of-a-ring", "def-local-ring", "def-scheme-over-base", "thm-universal-property-of-a-polynomial-ring", "thm-kahler-differentials-existence-presentation", "cor-jacobian-presentation-differentials", "lem-field-is-noetherian", "cor-finite-variable-polynomial-ring-noetherian", "lem-differentials-localization", "lem-differentials-base-change", "cor-finite-module-locally-zero-near-a-prime", "thm-existence-of-algebraic-closures", "cor-fields-of-characteristic-zero-and-finite-fields-are-perfect", "thm-perfect-field-characterizations", "thm-frobenius-endomorphism-and-finite-field-automorphism", "thm-binomial-theorem-over-a-commutative-ring", "lem-prime-divides-intermediate-binomial-coefficients", "lem-tensor-ring-presentations-for-base-change", "prop-modules-over-a-field-are-projective-flat-and-injective", "cor-every-vector-space-has-a-basis", "thm-flatness-criteria-by-injections-and-ideals", "thm-unit-isomorphisms-for-module-tensor-products", "thm-tensor-products-commute-with-arbitrary-direct-sums", "lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite", "prop-algebraically-closed-splitting-and-finite-extension-criteria", "thm-cotangent-space-maximal-ideal-quotient", "lem-sheaf-differentials-affine-compatibility", "def-relative-cotangent-space", "thm-localisation-at-a-prime-is-local", "thm-localisation-of-modules-is-exact", "lem-zero-in-a-localised-module", "cor-residue-field-of-a-localisation-at-a-prime", "thm-nakayama-lemma", "thm-prime-spectrum-of-a-localisation-bijection", "thm-proper-ideal-contained-in-maximal-ideal", "thm-correspondence-theorem-ideals", "cor-nilradical-as-intersection-of-primes", "thm-noetherian-ring-has-finitely-many-minimal-primes", "cor-finite-type-algebra-over-noetherian-ring-is-noetherian", "thm-chinese-remainder-theorem-for-comaximal-ideals", "thm-rank-nullity", "thm-finite-field-extensions-are-algebraic", "thm-primitive-element-theorem-for-finite-separable-extensions", "thm-evaluation-kernel-and-minimal-polynomial", "thm-polynomial-quotient-is-a-field-iff-irreducible", "cor-irreducible-polynomial-is-separable-iff-derivative-nonzero", "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core", "prop-extension-of-scalars-preserves-flat-modules", "thm-associativity-of-balanced-tensor-products", "thm-tensor-product-of-algebras-over-a-commutative-ring", "cor-independent-set-is-no-larger-than-a-finite-spanning-set"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra, Lemma 10.158.1 (tag 090W) and Lemma 10.151.5 (tag 00UW)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $k\subseteq L$ be
fields with $L$ finitely generated over $k$
([[def-finitely-generated-field-extension]]), and let $\Omega_{L/k}$ be the
Kähler differential module of $k\to L$
([[def-kahler-differentials-algebra]]).

1. If $\Omega_{L/k}=0$, then $L/k$ is finite
   ([[def-extension-degree-and-finite-extension]]) and separable
   ([[def-separable-elements-and-separable-extensions]]).
2. Conversely, if $L/k$ is finite and separable, then $\Omega_{L/k}=0$.

The Axiom of Choice is used to obtain an algebraic closure of $k$
([[thm-existence-of-algebraic-closures]]), to select a $k$-basis of the
localisation $B_s$ and to produce maximal ideals, prime intersections and the
Nakayama input inside the finite-type $K$-algebra $C$ below; claim 2 is
choice-free. Claim 1 assumes nothing about $\operatorname{char}k$ and no
separability beyond the vanishing of $\Omega_{L/k}$; in particular no
algebraicity of $L/k$ is assumed in advance.

## Facts & Assumptions

**Given:** Fields $k\subseteq L$ with $L=k(y_1,\dots,y_m)$ for some $m\ge0$ and
$y_1,\dots,y_m\in L$, and the Kähler differential module $\Omega_{L/k}$ of
$k\to L$.

[F1] [[def-finitely-generated-field-extension]] and
[[def-field-extension-generated-subfields-and-simple-extension]]:
$k(y_1,\dots,y_m)$ is the smallest subfield of $L$ containing $k$ and the
$y_i$. The image $B=k[y_1,\dots,y_m]$ of the polynomial ring
$k[x_1,\dots,x_m]$ under the homomorphism sending $x_i$ to $y_i$
([[thm-universal-property-of-a-polynomial-ring]]) is a subring of $L$
containing $k$, it is a domain because $L$ is a field, and it is a finitely
generated $k$-algebra in the sense of
[[def-finite-type-and-module-finite-algebras]]; since $L$ is the smallest
subfield containing $k$ and the $y_i$, the fraction field of $B$ is $L$.

[F2] [[thm-kahler-differentials-existence-presentation]],
[[cor-jacobian-presentation-differentials]],
[[lem-field-is-noetherian]],
[[cor-finite-variable-polynomial-ring-noetherian]] and
[[def-noetherian-ring-and-module]]: a field is a Noetherian ring, so
$k[x_1,\dots,x_m]$ is Noetherian and every ideal of it is finitely generated.
Hence for $B=k[x_1,\dots,x_m]/I$ the ideal $I$ is generated by finitely many
elements and
$$\Omega_{B/k}\cong B^m\Big/\sum_{j=1}^{r}B\cdot\Bigl(\frac{\partial f_j}{\partial x_1},\dots,\frac{\partial f_j}{\partial x_m}\Bigr),$$
a quotient of the free module $B^m$, so $\Omega_{B/k}$ is a finitely generated
$B$-module.

[F3] [[lem-differentials-localization]]: for a ring map $A\to B$ and
multiplicative subsets $V\subseteq A$, $U\subseteq B$ with
$\varphi(V)\subseteq U$, the canonical map
$U^{-1}\Omega_{B/A}\to\Omega_{U^{-1}B/V^{-1}A}$ is an isomorphism. With
$V=\{1\}$ this gives $S^{-1}\Omega_{B/k}\cong\Omega_{S^{-1}B/k}$, and with
$U=\{1,s,s^2,\dots\}=S_s$ it gives $(\Omega_{B/k})_s\cong\Omega_{B_s/k}$.

[F4] [[cor-finite-module-locally-zero-near-a-prime]]: if $M$ is a finitely
generated module over a commutative ring and $\mathfrak p$ is a prime ideal with
$M_{\mathfrak p}=0$, then there is $s\notin\mathfrak p$ with $M_s=0$, where
$M_s$ is the localisation at $\{1,s,s^2,\dots\}$.

[F5] [[thm-existence-of-algebraic-closures]],
[[def-algebraically-closed-field]],
[[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]],
[[thm-perfect-field-characterizations]],
[[thm-frobenius-endomorphism-and-finite-field-automorphism]],
[[thm-binomial-theorem-over-a-commutative-ring]] and
[[lem-prime-divides-intermediate-binomial-coefficients]]: assuming Choice, $k$
has an algebraic closure $K$, which is algebraically closed; every
algebraically closed field and every field of characteristic zero is perfect,
and a field of characteristic $p>0$ is perfect exactly when its Frobenius map
$x\mapsto x^p$ is surjective, in which case its $p^e$-th power map is
surjective for every $e\ge0$. In any commutative ring of characteristic $p$ the
binomial theorem together with $p\mid\binom{p}{i}$ for $0<i<p$ gives
$(u+v)^{p}=u^{p}+v^{p}$, hence $(u+v)^{p^e}=u^{p^e}+v^{p^e}$ as well.

[F6] [[lem-differentials-base-change]]: for ring maps $A\to B$ and $A\to A'$
with $B'=B\otimes_AA'$ there is a canonical isomorphism
$\Omega_{B/A}\otimes_BB'\cong\Omega_{B'/A'}$.

[F7] [[def-principal-localisation]],
[[def-finite-type-and-module-finite-algebras]] and
[[lem-tensor-ring-presentations-for-base-change]]: the principal localisation
$B_s=S_s^{-1}B$ has elements $b/s^n$, and if $B$ is generated as a $k$-algebra
by $b_1,\dots,b_N$ then $B_s$ is generated as a $k$-algebra by
$b_1,\dots,b_N,s^{-1}$. For a finitely generated $k$-algebra presented as
$B=k[x_1,\dots,x_m]/I$ there is a ring isomorphism
$B\otimes_kK\cong K[x_1,\dots,x_m]/IK[x_1,\dots,x_m]$; consequently
$B_s\otimes_kK$ is generated as a $K$-algebra by the images of
$y_1,\dots,y_m$ and of $s^{-1}$, hence is of finite type over $K$, and
$k[x]/(f)\otimes_kK\cong K[x]/(f)$ for $f\in k[x]$.

[F8] [[prop-modules-over-a-field-are-projective-flat-and-injective]],
[[cor-every-vector-space-has-a-basis]],
[[thm-flatness-criteria-by-injections-and-ideals]],
[[thm-unit-isomorphisms-for-module-tensor-products]] and
[[thm-tensor-products-commute-with-arbitrary-direct-sums]]: assuming Choice,
every module over a field is free and flat, and every vector space has a basis.
A flat module $M$ over a commutative ring $R$ carries every injection
$V\hookrightarrow W$ of $R$-modules to an injection
$V\otimes_RM\hookrightarrow W\otimes_RM$. Moreover $R\otimes_RM\cong M$ and
$N\otimes_R\bigoplus_iM_i\cong\bigoplus_i(N\otimes_RM_i)$.

[F9] [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]] and
[[prop-algebraically-closed-splitting-and-finite-extension-criteria]]: in a
finite-type $K$-algebra every maximal ideal has residue field a finite
extension of $K$; a field is algebraically closed exactly when it has no
nontrivial finite extension.

[F10] [[thm-cotangent-space-maximal-ideal-quotient]],
[[lem-sheaf-differentials-affine-compatibility]],
[[def-relative-cotangent-space]] and [[def-scheme-over-base]]: for a
finite-type $K$-algebra $C$, regarded as the $K$-scheme $\operatorname{Spec}C$,
and a maximal ideal $\mathfrak m$ with $C/\mathfrak m=K$, which is therefore a
$K$-rational point, the cotangent space is
$$\mathfrak m/\mathfrak m^2\cong\Omega_{(\operatorname{Spec}C)/K}\otimes_{\mathcal O_{\operatorname{Spec}C,\mathfrak m}}\kappa(\mathfrak m)\cong\Omega_{C/K}\otimes_C(C/\mathfrak m).$$

[F11] [[def-localisation-at-a-prime-ideal]],
[[thm-localisation-at-a-prime-is-local]],
[[thm-localisation-of-modules-is-exact]],
[[lem-zero-in-a-localised-module]] and
[[cor-residue-field-of-a-localisation-at-a-prime]]: for a prime
$\mathfrak p$ of $C$ the localisation $C_{\mathfrak p}$ is a nonzero local ring
with maximal ideal $\mathfrak pC_{\mathfrak p}$, its residue field is
$\operatorname{Frac}(C/\mathfrak p)$, an element $x$ satisfies $x/1=0$ in
$C_{\mathfrak p}$ exactly when $tx=0$ for some $t\notin\mathfrak p$, and
localisation preserves short exact sequences.

[F12] [[thm-nakayama-lemma]], [[def-jacobson-radical-of-a-ring]] and
[[def-local-ring]]: assuming Choice, if $I\subseteq J(R)$ is an ideal of a
commutative ring $R$ and $M$ is a finitely generated $R$-module with $IM=M$
then $M=0$; here $J(R)$ is the intersection of all maximal ideals, so in a
local ring $J(R)$ is the unique maximal ideal.

[F13] [[thm-prime-spectrum-of-a-localisation-bijection]]: for a commutative
ring $C$, a multiplicative subset $S$ and the localisation map
$\lambda\colon C\to S^{-1}C$, contraction along $\lambda$ is a bijection from
the prime ideals of $S^{-1}C$ onto the prime ideals of $C$ disjoint from $S$.

[F14] [[thm-proper-ideal-contained-in-maximal-ideal]],
[[def-prime-and-maximal-ideals]] and [[thm-correspondence-theorem-ideals]]:
assuming Choice, every proper ideal of a nonzero commutative ring is contained
in a maximal ideal, every maximal ideal is prime, and ideals of $C/\mathfrak p$
correspond to ideals of $C$ containing $\mathfrak p$, so every prime of a
nonzero ring $C$ is contained in a maximal ideal.

[F15] [[def-nilradical-and-reduced-ring]],
[[cor-nilradical-as-intersection-of-primes]],
[[thm-noetherian-ring-has-finitely-many-minimal-primes]] and
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: assuming
Choice, the nilradical of a commutative ring is the set of nilpotent elements
and equals the intersection of all its prime ideals, and the ring is reduced
exactly when that intersection is zero; a finite-type algebra over a Noetherian
ring is Noetherian, and a Noetherian ring has only finitely many minimal prime
ideals.

[F16] [[thm-chinese-remainder-theorem-for-comaximal-ideals]]: for pairwise
comaximal ideals $I_1,\dots,I_r$ of a commutative ring with $r\ge1$ the
canonical map $C\to\prod_{i=1}^rC/I_i$ is surjective with kernel
$\bigcap_{i=1}^rI_i=\prod_{i=1}^rI_i$.

[F17] [[thm-rank-nullity]]: for a linear map $T\colon V\to W$ with $V$
finite-dimensional, $\dim_kV=\operatorname{nullity}T+\operatorname{rank}T$;
in particular an injective $k$-linear endomorphism of a finite-dimensional
$k$-vector space is surjective.

[F18] [[def-separable-elements-and-separable-extensions]],
[[thm-finite-field-extensions-are-algebraic]],
[[thm-primitive-element-theorem-for-finite-separable-extensions]],
[[thm-evaluation-kernel-and-minimal-polynomial]],
[[thm-polynomial-quotient-is-a-field-iff-irreducible]] and
[[cor-irreducible-polynomial-is-separable-iff-derivative-nonzero]]: an element
is separable over the base when it is algebraic with separable minimal
polynomial, and an extension is separable when all its elements are; every
finite extension is algebraic; every finite separable extension is simple, so
$L=k(\alpha)$ for some $\alpha\in L$; the minimal polynomial $f$ of $\alpha$ is
monic and irreducible, $f'(\alpha)=0$ implies $f\mid f'$, and
$k[x]/(f)\cong k[\alpha]$ is a field; an irreducible polynomial is separable
exactly when its derivative is nonzero.

[F19] [[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]:
let $\operatorname{char}F=p>0$ and let $f\in F[x]$ be nonconstant and
irreducible. There are unique $e\in\mathbb N$ and $g\in F[x]$ with
$f(x)=g(x^{p^e})$, $g$ irreducible and separable; the case $e=0$ occurs exactly
when $f$ is separable.

[F20] [[prop-extension-of-scalars-preserves-flat-modules]],
[[thm-associativity-of-balanced-tensor-products]] and
[[thm-tensor-product-of-algebras-over-a-commutative-ring]]: extension of
scalars carries flat modules to flat modules, and for fields
$k\subseteq B'\subseteq L$ and $k\subseteq K$ there is a canonical isomorphism
of rings $(B'\otimes_kK)\otimes_{B'}L\cong L\otimes_kK$ induced by
$(b\otimes c)\otimes l\mapsto bl\otimes c$, since tensor products of
commutative algebras associate and commute with the multiplications.

[F21] [[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]: if a
vector space has a spanning set with $n$ elements, then every linearly
independent subset of it is finite with at most $n$ elements.

## Proof

**Proof technique:** direct.

1.1 Converse, setup. Assume that $L/k$ is finite and separable. By [F18] there is $\alpha\in L$ with $L=k(\alpha)$ (if $L=k$ take any $\alpha\in k$). Let $f\in k[x]$ be the minimal polynomial of $\alpha$; it is monic, irreducible, of degree $n\ge1$, and separable because $\alpha$ is separable over $k$. If $n=1$ then $f'=1$ and $f'(\alpha)=1\ne0$. If $n\ge2$, then $f$ is irreducible and separable, so $f'\ne0$ by [F18]; as $\deg f'<n=\deg f$ and $f$ is irreducible, $f\nmid f'$, so $f'(\alpha)\ne0$, since $f'(\alpha)=0$ would give $f\mid f'$ by [F18]. In both cases $f'(\alpha)\ne0$. [given, F18]

1.2 Forward, the finite-type model. Put $B:=k[y_1,\dots,y_m]\subseteq L$. By [F1] the ring $B$ is a finitely generated $k$-algebra, a domain, and $\operatorname{Frac}(B)=L$. Writing $B=k[x_1,\dots,x_m]/I$ for the kernel $I$ of the evaluation $x_i\mapsto y_i$, [F2] shows that $I$ is finitely generated and that $\Omega_{B/k}$ is a quotient of the free module $B^m$; hence $\Omega_{B/k}$ is a finitely generated $B$-module. [given, F1, F2]

1.3 Choice and the algebraic closure. Assume the Axiom of Choice ([[def-axiom-of-choice]]). By [F5] there is an algebraic closure $K$ of $k$, so $K$ is algebraically closed with $\operatorname{char}K=\operatorname{char}k$; by [F8] every vector space over a field has a basis and every module over a field is flat; and by [F14] every proper ideal of a nonzero ring lies in a maximal ideal. [given, F5, F8, F14]

2.1 Converse, conclusion. The evaluation homomorphism $k[x]\to L$, $x\mapsto\alpha$, has kernel $(f)$ by [F18], so $k[x]/(f)\cong k[\alpha]=L$; the one-relation form of the Jacobian presentation [F2] gives $\Omega_{L/k}\cong L/(f'(\alpha))$. Since $f'(\alpha)\ne0$ in the field $L$, the ideal $(f'(\alpha))$ is all of $L$ and $\Omega_{L/k}=0$. This proves claim 2 for every finite separable extension. [step 1.1, F2, F18]

2.2 Forward, localising at the zero prime. The set $S:=B\smallsetminus\{0\}$ is a multiplicative subset of the domain $B$ with $S^{-1}B=\operatorname{Frac}(B)=L$ [step 1.2], so [F3] gives $S^{-1}\Omega_{B/k}\cong\Omega_{L/k}$; under the hypothesis of claim 1 this is $0$. [given, step 1.2, F3]

3.1 Clearing denominators. The $B$-module $\Omega_{B/k}$ is finitely generated [step 1.2] and vanishes at the prime ideal $(0)$ of the domain $B$ [step 2.2], so [F4] provides $s\in B\smallsetminus\{0\}$ with $(\Omega_{B/k})_s=0$. Fix such an $s$ and put $C:=B_s\otimes_kK$, the principal localisation $B_s$ being as in [F7]. [step 1.2, step 2.2, F4, F7]

4.1 The differentials of $C$ vanish. By [F3] applied to the multiplicative set $\{1,s,s^2,\dots\}$ we have $\Omega_{B_s/k}\cong(\Omega_{B/k})_s=0$, and [F6] gives $\Omega_{C/K}=\Omega_{B_s\otimes_kK/K}\cong\Omega_{B_s/k}\otimes_{B_s}C=0$. [step 3.1, F3, F6]

4.2 $C$ is nonzero. The localisation map $B\to B_s$ is injective, since $B$ is a domain with $s\ne0$. The canonical map $B_s\to C$, $b\mapsto b\otimes1$, is obtained by tensoring the injection $k\hookrightarrow K$ with the $k$-module $B_s$, which is flat by [F8]; hence it is injective by [F8], and $C\ne0$ because $B_s\ne0$. [step 1.3, step 3.1, F8]

4.3 $C$ is a finitely generated $K$-algebra. The $k$-algebra $B=k[y_1,\dots,y_m]$ is generated by $y_1,\dots,y_m$, so $B_s$ is generated by the images of $y_1,\dots,y_m$ and of $s^{-1}$ [F7]; hence $C=B_s\otimes_kK$ is generated as a $K$-algebra by the images of these same elements, using the presentation $B_s\cong k[x_1,\dots,x_m,z]/(I,z\sigma-1)$, where $\sigma$ represents $s$ in $k[x_1,\dots,x_m]$ and $z$ represents $s^{-1}$. Its base change is $K[x_1,\dots,x_m,z]/(I,z\sigma-1)K[x_1,\dots,x_m,z]$ [F7]. So $C$ is of finite type over $K$. [step 1.2, step 3.1, F7]

5.1 $C$ is Noetherian. The field $K$ is a Noetherian ring [F2], and $C$ is a finitely generated $K$-algebra [step 4.3], so $C$ is Noetherian by [F15]; in particular every ideal of $C$ is a finitely generated $C$-module. [step 4.3, F2, F15]

5.2 Maximal ideals are rational and have vanishing cotangent space. Let $\mathfrak m\subseteq C$ be a maximal ideal; one exists because $C\ne0$ [step 4.2] and every proper ideal lies in a maximal ideal [F14]. By [F9] the field $C/\mathfrak m$ is a finite extension of $K$, and since $K$ is algebraically closed [step 1.3] it has no nontrivial finite extension [F9], so $C/\mathfrak m=K$: thus $\mathfrak m$ is a $K$-rational point of $\operatorname{Spec}C$. By [F10], together with $\Omega_{C/K}=0$ [step 4.1], $$\mathfrak m/\mathfrak m^2\cong\Omega_{C/K}\otimes_C(C/\mathfrak m)=0.$$ [step 1.3, step 4.1, step 4.2, F9, F10, F14]

6.1 The local ring at each maximal ideal is a field. Let $\mathfrak m$ be a maximal ideal and $\mathfrak n:=\mathfrak mC_{\mathfrak m}$, the maximal ideal of the local ring $C_{\mathfrak m}$ [F11]. Localising the short exact sequence $0\to\mathfrak m^2\to\mathfrak m\to\mathfrak m/\mathfrak m^2\to0$ at $C\smallsetminus\mathfrak m$ is exact [F11] and gives $\mathfrak n/\mathfrak n^2\cong(\mathfrak m/\mathfrak m^2)_{\mathfrak m}=0$ [step 5.2], so $\mathfrak n=\mathfrak n^2$. The ideal $\mathfrak m$ is finitely generated [step 5.1], hence so is the $C_{\mathfrak m}$-module $\mathfrak n$; since $\mathfrak n=J(C_{\mathfrak m})$ is the Jacobson radical of the local ring $C_{\mathfrak m}$ [F12], Nakayama's lemma [F12] with $I=\mathfrak n$ and $M=\mathfrak n$ gives $\mathfrak n=0$. Therefore the maximal ideal of the nonzero ring $C_{\mathfrak m}$ is zero, so $C_{\mathfrak m}$ is a field, and its residue field is, by [F11], $C_{\mathfrak m}/\mathfrak n=C_{\mathfrak m}\cong\operatorname{Frac}(C/\mathfrak m)=C/\mathfrak m=K$ [step 5.2]; in particular $C_{\mathfrak m}\cong K$. [step 5.1, step 5.2, F11, F12]

7.1 Primes inside a maximal ideal. Let $\mathfrak p\subseteq\mathfrak m$ be a prime ideal of $C$ with $\mathfrak m$ maximal. Taking $S=C\smallsetminus\mathfrak m$ in [F13], the primes of $C_{\mathfrak m}$ correspond bijectively to the primes of $C$ contained in $\mathfrak m$; the field $C_{\mathfrak m}$ [step 6.1] has only the prime ideal $(0)$, so exactly one prime of $C$ is contained in $\mathfrak m$. Since $\mathfrak m$ itself is a prime ideal contained in $\mathfrak m$ and $\mathfrak p$ is another, $\mathfrak p=\mathfrak m$. [step 6.1, F13]

8.1 Every prime of $C$ is maximal, and the minimal primes are the maximal ideals. Let $\mathfrak p$ be a prime ideal of $C$. Since $C\ne0$ [step 4.2] and $\mathfrak p\ne C$, the quotient $C/\mathfrak p$ is a nonzero ring, so it has a maximal ideal; by [F14] its preimage $\mathfrak m$ in $C$ is a maximal ideal with $\mathfrak p\subseteq\mathfrak m$, and step 7.1 gives $\mathfrak p=\mathfrak m$. So every prime is maximal, and conversely every maximal ideal is prime [F14]. Hence the primes of $C$ are exactly the maximal ideals; no prime is strictly contained in another, so each prime is a minimal prime ideal. [step 4.2, step 7.1, F14]

9.1 $C$ is reduced. By [F15] the nilradical of $C$ is the intersection of the prime ideals, which by step 8.1 is the intersection of all maximal ideals. Let $x\in\operatorname{Nil}(C)$ and let $\mathfrak m$ be any maximal ideal. The image $x/1\in C_{\mathfrak m}$ is nilpotent and $C_{\mathfrak m}$ is a field [step 6.1], so $x/1=0$; by [F11] there is $t\notin\mathfrak m$ with $tx=0$, so the annihilator of $x$ is not contained in $\mathfrak m$. As this holds for every maximal ideal and every proper ideal lies in a maximal ideal [F14], the annihilator of $x$ is $C$ and $x=0$. Hence $\operatorname{Nil}(C)=0$ and $C$ is reduced [F15]. [step 6.1, step 8.1, F11, F14, F15]

10.1 $C$ is a finite product of copies of $K$. By [F15] the Noetherian ring $C$ [step 5.1] has only finitely many minimal primes, which by step 8.1 are exactly its maximal ideals $\mathfrak m_1,\dots,\mathfrak m_r$; here $r\ge1$ because $C\ne0$ has a maximal ideal [step 4.2, F14]. Distinct maximal ideals are comaximal, and the intersection $\bigcap_{i=1}^r\mathfrak m_i$ of all primes is the nilradical of $C$ [F15], which is zero [step 9.1]. The Chinese remainder theorem [F16] therefore gives $$C\cong C\Big/\bigcap_{i=1}^r\mathfrak m_i\cong\prod_{i=1}^rC/\mathfrak m_i=K^r,$$ using $C/\mathfrak m_i=K$ from step 5.2. [step 4.2, step 5.1, step 5.2, step 9.1, F14, F15, F16]

11.1 $B_s$ is finite-dimensional over $k$. Choose a $k$-basis $(v_i)_{i\in I}$ of $B_s$ [F8]. For any finitely many basis elements $v_{i_1},\dots,v_{i_N}$, put $V:=\bigoplus_{j=1}^Nkv_{i_j}$, so that $V\hookrightarrow B_s$ is injective; tensoring with the flat $k$-module $K$ [F8] gives an injection $V\otimes_kK\hookrightarrow B_s\otimes_kK=C$ [step 3.1], and [F8] gives $$V\otimes_kK\cong\bigoplus_{j=1}^NK\,(v_{i_j}\otimes1),$$ using $k\otimes_kK\cong K$. Hence the elements $v_{i_j}\otimes1$ are $K$-linearly independent in $C$. Therefore $\{v_i\otimes1:i\in I\}$ is a $K$-linearly independent subset of $C$, and since $C\cong K^r$ has a spanning set with $r$ elements [step 10.1], [F21] shows that it is finite with at most $r$ elements. The map $B_s\to C$ is injective [step 4.2], so the image of the basis also has $|I|$ elements and $|I|\le r$: the $k$-vector space $B_s$ is finite-dimensional. [step 1.3, step 4.2, step 10.1, F8, F21]

12.1 $L=B_s$ is finite over $k$. The ring $B_s$ is a domain, being a subring of the field $L$, and finite-dimensional over $k$ [step 11.1]. For $0\ne b\in B_s$ the multiplication map $b\cdot\colon B_s\to B_s$ is $k$-linear with kernel zero; by rank-nullity [F17] it is surjective, so some $b'$ satisfies $bb'=1$ and $b$ is a unit. Hence $B_s$ is a field. Since $B\subseteq B_s\subseteq L$ and $\operatorname{Frac}(B)=L$ [step 1.2], we get $L=\operatorname{Frac}(B)\subseteq\operatorname{Frac}(B_s)=B_s\subseteq L$, so $B_s=L$; in particular $L$ is finite-dimensional over $k$, that is, $L/k$ is finite. [step 1.2, step 11.1, F17]

13.1 An element with non-separable minimal polynomial. Suppose now that $L/k$ is not separable. Since it is finite [step 12.1], it is algebraic [F18], and by [F18] some $\alpha\in L$ fails to be separable over $k$, which for an algebraic element means that its minimal polynomial $f\in k[x]$ is not separable. If $\operatorname{char}k=0$ then $k$ would be perfect [F5], so every irreducible polynomial over $k$ would be separable, a contradiction; hence $\operatorname{char}k=p>0$. By [F19] there are a unique $e\ge0$ and an irreducible separable $g\in k[x]$ with $f(x)=g(x^{p^e})$, and since $f$ is not separable the case $e=0$ does not occur, so $e\ge1$. Then $g$ is nonconstant of some degree $d\ge1$, and $\deg f=p^ed$. [step 12.1, F5, F18, F19]

14.1 A nonzero nilpotent in $B'\otimes_kK$. The field $K$ has characteristic $p$ and is perfect, so by [F5] its $p^e$-th power map is surjective. Write $g=\sum_i a_ix^i$ and choose $b_i\in K$ with $b_i^{p^e}=a_i$, and set $g_1:=\sum_i b_ix^i\in K[x]$. Since $K[x]$, like $K$, has characteristic $p$, the binomial theorem gives $(u+v)^{p^e}=u^{p^e}+v^{p^e}$ in $K[x]$ [F5], whence $$g_1(x)^{p^e}=\sum_i(b_ix^i)^{p^e}=\sum_ib_i^{p^e}x^{ip^e}=\sum_ia_ix^{ip^e}=g(x^{p^e})=f(x)$$ in $K[x]$; also $1\le d=\deg g_1<\deg f=p^ed$. Let $B':=k[\alpha]\subseteq L$, which by [F18] satisfies $B'\cong k[x]/(f)$ and is a field; by [F7] the $K$-algebra $$M:=B'\otimes_kK\cong K[x]/(f)=K[x]/(g_1^{p^e})$$ contains the class $z$ of $g_1$, which is nonzero because $\deg g_1<\deg g_1^{p^e}=\deg f$, while $z^{p^e}=0$ because $g_1^{p^e}=f\equiv0$. [step 13.1, F5, F7, F18, F19]

15.1 The canonical map $M\to C$ is injective. The field $B'=k[\alpha]$ is a subfield of $L$, so $B'\hookrightarrow L$ is injective, and $M=B'\otimes_kK$ is flat over the field $B'$ because it is the extension of scalars of the flat $k$-module $K$ [F8, F20]. Hence $M\cong M\otimes_{B'}B'\hookrightarrow M\otimes_{B'}L$ is injective [F8], and by the canonical identification $(B'\otimes_kK)\otimes_{B'}L\cong L\otimes_kK=B_s\otimes_kK=C$ [F20, step 12.1] this map is the canonical map $M\to C$, $b\otimes c\mapsto b\otimes c$. [step 3.1, step 14.1, F8, F20]

16.1 Conclusion. The image of the nonzero nilpotent $z$ of step 14.1 under the injective map of step 15.1 is a nonzero element of $C$ whose $p^e$-th power is $0$; this contradicts step 10.1, since in the product of fields $C\cong K^r$ the only nilpotent element is $0$. Hence $L/k$ is separable, and together with step 12.1 it is finite and separable, so claim 1 holds; claim 2 is step 2.1. [step 2.1, step 10.1, step 12.1, step 14.1, step 15.1] ∎
