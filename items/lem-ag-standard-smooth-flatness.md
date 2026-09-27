---
id: "lem-ag-standard-smooth-flatness"
kind: "lemma"
title: "Standard smooth algebras are finitely presented and flat"
status: published
origin: "pipeline"
deps: ["def-ag-standard-smooth-algebra", "lem-ag-base-change-of-standard-smooth-presentations", "lem-ag-standard-smooth-fibre-regular-parameters", "lem-ag-local-flatness-regular-parameters", "def-finitely-presented-module-and-algebra", "def-polynomial-ring-on-a-family-of-indeterminates", "thm-universal-property-of-a-polynomial-ring-on-a-family", "thm-quotient-ring-universal-property", "thm-universal-property-of-localisation", "def-multiplicative-subset-and-localisation", "thm-flatness-is-local", "thm-flatness-criteria-by-injections-and-ideals", "thm-localisations-are-flat", "cor-free-modules-are-projective-and-flat", "thm-localisation-of-modules-is-tensor-product", "thm-right-exactness-of-tensor-products", "thm-symmetry-and-associativity-over-a-commutative-ring", "thm-support-and-annihilator-of-a-finite-module", "thm-proper-ideal-contained-in-maximal-ideal", "thm-finitely-generated-modules-over-noetherian-rings-are-noetherian", "thm-noetherian-ring-quotients-and-localisations", "cor-finite-variable-polynomial-ring-noetherian", "thm-noetherian-ring-ideal-characterisations", "lem-subgroups-of-z-are-cyclic", "cor-finite-type-algebra-over-noetherian-ring-is-noetherian", "thm-krull-intersection-theorem", "thm-long-exact-tor-sequence-in-the-left-module-variable", "cor-localisation-commutes-with-kernels-images-and-cokernels", "prop-extension-of-scalars-preserves-flat-modules", "prop-localisation-zero-equality-and-kernel-criteria", "thm-localisation-commutes-with-quotients", "def-local-ring", "def-dependent-choice", "def-axiom-of-choice"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.99.7, 10.106.3, 10.136.12 and 10.137.5–7"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §25.6.2–3 and §26.2, pp.678–679, 689–690"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R$ be a commutative
ring and let $S$ be a standard smooth $R$-algebra
([[def-ag-standard-smooth-algebra]]), so that
$S\cong\bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\bigr)_g$ for some $n\ge c\ge0$,
some $f_1,\dots,f_c,g\in R[x_1,\dots,x_n]$, and with the leading $c\times c$
Jacobian minor $h=\det(\partial f_j/\partial x_i)_{1\le i,j\le c}$ mapping to a
unit of $S$. Then:

1. $S$ is a finitely presented $R$-algebra
   ([[def-finitely-presented-module-and-algebra]]);
2. $S$ is flat over $R$.

No hypothesis is placed on $R$: it may be non-Noetherian, and it may have zero
divisors.

## Facts & Assumptions

**Given:** A commutative ring $R$, a standard smooth presentation $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ whose leading $c\times c$ minor $h$ maps to a unit of $S$, and the Axiom of Choice. Write $P:=R[x_1,\dots,x_n]$ and $I:=(f_1,\dots,f_c)$.

[F1] [[def-ag-standard-smooth-algebra]]: a standard smooth presentation consists of integers $n\ge c\ge0$, elements $f_1,\dots,f_c\in P$ and $g\in P$ with $S\cong(P/(f_1,\dots,f_c))_g$, such that the Jacobian matrix has a $c\times c$ minor whose image in $S$ is a unit; $n-c$ is the relative dimension, and the invertible minor may be assumed to lie in the first $c$ columns.

[F2] [[lem-ag-base-change-of-standard-smooth-presentations]]: for any ring map $R\to R'$ and a standard smooth presentation as above, there is a unique $R'$-algebra isomorphism $R'\otimes_RS\to(R'[x_1,\dots,x_n]/(f'_1,\dots,f'_c))_{g'}$ sending $a\otimes\overline F/g^N$ to $a\overline{F'}/(g')^N$, and the target is standard smooth over $R'$ with the same $n,c$ and relative dimension, its $c\times c$ minor $h'$ still a unit.

[F3] [[lem-ag-standard-smooth-fibre-regular-parameters]]: under the Axiom of Choice, if $k$ is a field, $\mathfrak q\subseteq k[x_1,\dots,x_n]$ is prime and $f_1,\dots,f_c\in\mathfrak q$ have leading $c\times c$ Jacobian minor $h\notin\mathfrak q$, then the classes of $f_1,\dots,f_c$ in $\mathfrak qk[x]_{\mathfrak q}/(\mathfrak qk[x]_{\mathfrak q})^2$ are linearly independent, $k[x]_{\mathfrak q}$ is regular local, $(f_1,\dots,f_c)$ is a regular sequence in it and the quotient is regular local of dimension $\dim k[x]_{\mathfrak q}-c$.

[F4] [[lem-ag-local-flatness-regular-parameters]]: under the Axiom of Choice, for a local homomorphism $(R,\mathfrak m)\to(S,\mathfrak n)$ of Noetherian local rings and a finite $S$-module $M$ with $\operatorname{Tor}_1^R(R/\mathfrak m,M)=0$, the module $M$ is flat over $R$; the module is not assumed finite over $R$.

[F5] [[def-finitely-presented-module-and-algebra]]: a commutative $R$-algebra $A$ is finitely presented when $A\cong R[x_1,\dots,x_m]/\mathfrak a$ for some $m\in\mathbb N$ and a finitely generated ideal $\mathfrak a$; the boundary values $m=0$ and $\mathfrak a=0$ are admitted.

[F6] [[thm-universal-property-of-a-polynomial-ring-on-a-family]]: for a ring homomorphism $\varphi\colon R\to T$ and a family $(t_i)$ in $T$ there is a unique ring homomorphism $R[x_i]\to T$ restricting to $\varphi$ with $x_i\mapsto t_i$.

[F7] [[thm-quotient-ring-universal-property]]: a ring homomorphism whose kernel contains an ideal $I$ factors uniquely through $R/I$.

[F8] [[thm-universal-property-of-localisation]]: a unital homomorphism $f\colon R\to A$ carrying a multiplicative set $T$ into the units of $A$ factors uniquely through $\lambda_T\colon R\to T^{-1}R$.

[F9] [[def-multiplicative-subset-and-localisation]]: the localisation $T^{-1}A$ of a commutative ring at a multiplicative set $T$ consists of the classes $a/t$, and $\lambda_T(a)=a/1$ with every $t\in T$ a unit.

[F10] [[thm-flatness-is-local]]: for an $R$-module $M$, $M$ is flat over $R$ if and only if $M_{\mathfrak p}$ is flat over $R_{\mathfrak p}$ for every prime $\mathfrak p\subseteq R$, equivalently for every maximal ideal.

[F11] [[thm-flatness-criteria-by-injections-and-ideals]]: $M$ is flat over $R$ if and only if $I\otimes_RM\to M$ is injective for every finitely generated ideal $I\subseteq R$.

[F12] [[thm-localisations-are-flat]]: $S^{-1}R$ is a flat $R$-algebra, and if $N$ is flat over $R$ then $S^{-1}N$ is flat over $S^{-1}R$.

[F13] [[cor-free-modules-are-projective-and-flat]]: for every commutative ring $R$ and free $R$-module $F$, $F$ is flat over $R$ regardless of choice.

[F14] [[thm-localisation-of-modules-is-tensor-product]]: for a commutative ring $A$, a multiplicative set $T$ and an $A$-module $M$ there is an isomorphism $T^{-1}M\cong(T^{-1}A)\otimes_AM$, $m/t\mapsto(1/t)\otimes m$.

[F15] [[thm-right-exactness-of-tensor-products]]: tensoring an exact sequence $A'\to B'\to C'\to0$ with a module preserves exactness; tensoring preserves cokernels and surjections.

[F16] [[thm-symmetry-and-associativity-over-a-commutative-ring]]: tensor products of modules over a commutative ring are commutative and associative, so $(M\otimes_AN)\otimes_AP\cong M\otimes_A(N\otimes_AP)$.

[F17] [[thm-support-and-annihilator-of-a-finite-module]]: for a finitely generated module $M$ over a commutative ring $R$, $\operatorname{Supp}_R(M)=\{\mathfrak p:\operatorname{Ann}_R(M)\subseteq\mathfrak p\}$; in particular a finitely generated module whose localisations at all maximal ideals vanish is zero, because a proper ideal lies in a maximal ideal.

[F18] [[thm-proper-ideal-contained-in-maximal-ideal]]: every proper ideal of a nonzero commutative ring is contained in a maximal ideal.

[F19] [[thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]]: submodules of finitely generated modules over a Noetherian ring are again finitely generated.

[F20] [[thm-noetherian-ring-quotients-and-localisations]]: quotients and localisations of a Noetherian commutative ring are Noetherian.

[F21] [[cor-finite-variable-polynomial-ring-noetherian]]: for a Noetherian commutative ring $R$ and $n\in\mathbb N$ the polynomial ring $R[x_1,\dots,x_n]$ is Noetherian.

[F22] [[thm-noetherian-ring-ideal-characterisations]]: a commutative ring is Noetherian if and only if every ideal is finitely generated.

[F23] [[lem-subgroups-of-z-are-cyclic]]: every subgroup of $(\mathbb Z,+)$ is generated by one element.

[F24] [[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]]: a commutative algebra of finite type over a Noetherian commutative ring is a Noetherian ring.


[F26] [[thm-long-exact-tor-sequence-in-the-left-module-variable]]: under the Axiom of Dependent Choice, a short exact sequence $0\to M'\to M\to M''\to0$ of modules and a module $N$ give a natural long exact sequence $\cdots\to\operatorname{Tor}_1^R(N,M')\to\operatorname{Tor}_1^R(N,M)\to\operatorname{Tor}_1^R(N,M'')\to N\otimes_RM'\to N\otimes_RM\to\cdots$.

[F27] [[cor-localisation-commutes-with-kernels-images-and-cokernels]]: localisation commutes with kernels, images and cokernels of module homomorphisms.

[F28] [[prop-extension-of-scalars-preserves-flat-modules]]: if $M$ is a flat $R$-module and $R\to R'$ is a ring homomorphism, then $R'\otimes_RM$ is a flat $R'$-module.

[F29] [[prop-localisation-zero-equality-and-kernel-criteria]]: in a localisation, $r/s=0$ if and only if $ur=0$ for some $u\in T$, and $r/s=r'/s'$ if and only if $u(rs'-r's)=0$ for some $u\in T$.

[F30] [[thm-localisation-commutes-with-quotients]]: $(T^{-1}A)/(T^{-1}I)\cong\bar T^{-1}(A/I)$ for an ideal $I$ of $A$ and multiplicative $T$, where $\bar T$ is the image of $T$ in $A/I$.

[F31] [[def-local-ring]]: a local ring is a commutative ring with exactly one maximal ideal; a local homomorphism $R\to S$ of local rings is one carrying the maximal ideal of $R$ into that of $S$.

[F32] [[def-dependent-choice]]: for every nonempty set $X$, every entire relation $R$ on $X$ and every $a\in X$ there is $x\colon\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin Rx_{n+1}$ for all $n$.

[F33] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[F34] [[def-polynomial-ring-on-a-family-of-indeterminates]]: $R[x_1,\dots,x_n]$ is the commutative $R$-algebra of polynomials in the indeterminates; a ring map $R\to R'$ induces a ring map $R[x_1,\dots,x_n]\to R'[x_1,\dots,x_n]$ sending each coefficient, and this map is injective when $R\to R'$ is injective.

[F35] [[thm-krull-intersection-theorem]]: if $T$ is a Noetherian commutative ring, $J\subseteq J(T)$ is an ideal and $M$ is a finite $T$-module, then $\bigcap_{r\ge0}J^rM=0$.



## Proof

1.1 The encoded presentation. Let $Q:=R[x_1,\dots,x_n,z]/(f_1,\dots,f_c,zg-1)$. The composite $P\to S$ sends $g$ to a unit of $S$, so by [F6] and [F7], and then [F8], there is a unique $R$-algebra homomorphism $Q\to S$ with $x_i\mapsto\overline{x_i}$ and $z\mapsto\overline g^{-1}$; here $z$ is the new variable and the relations $f_j\mapsto0$, $zg-1\mapsto\overline g^{-1}\overline g-1=0$ hold. Conversely, the substitution $x_i\mapsto x_i$, $z\mapsto z$ gives a ring homomorphism $P\to Q$ whose kernel contains $I$ because each $f_j$ maps to $0$, and which sends $g$ to a unit of $Q$ with inverse $z$; hence [F7] and [F8] produce a unique $R$-algebra homomorphism $S=(P/I)_g\to Q$ with $\overline F/g^N\mapsto Fz^N$. The two composites fix the generators $x_1,\dots,x_n,z$ of $Q$ over $R$ and the generators $\overline{x_1},\dots,\overline{x_n},\overline g^{-1}$ of $S$, so by the uniqueness clauses of [F6], [F7] and [F8] they are the respective identities; thus $S\cong Q$. [F6, F7, F8, F9]

1.2 Reduction of flatness to the Noetherian local case. Assume first that $R$ is Noetherian. By [F10] it suffices to prove that $S\otimes_RR_{\mathfrak p}$ is flat over $R_{\mathfrak p}$ for every prime $\mathfrak p\subseteq R$; by [F2] the algebra $S\otimes_RR_{\mathfrak p}$ is standard smooth over $R_{\mathfrak p}$ with the same $n,c$ and a minor that is still a unit. Hence it suffices to prove: if $(R,\mathfrak m)$ is a Noetherian local ring and $S$ is standard smooth over $R$, then $S$ is flat over $R$. [F2, F10, F1]

1.3 Dependent choice is available. Given the Axiom of Choice [F33], let $X$ be a nonempty set with an entire relation $R$ and let $a\in X$; choosing an element of each nonempty subset of $X$ and setting $f(x)$ to be the chosen element of $\{y:x\mathbin Ry\}$ gives a function $X\to X$, so recursion produces $x\colon\mathbb N\to X$ with $x_0=a$ and $x_n\mathbin Rx_{n+1}$. Thus the Dependent Choice supplier [F26] is available throughout this proof. [F15, F26, F32, F33]

1.4 The local criterion, prepared. Let now $R$ be Noetherian local with maximal ideal $\mathfrak m$ and residue field $\kappa=R/\mathfrak m$, and let $S=(P/I)_g$ be standard smooth over $R$. Then $S$ is Noetherian: $P$ is Noetherian by [F21], $P/I$ is Noetherian by [F20] and so is its localisation $S$ by [F20]. Fix a finitely generated ideal $J\subseteq R$ and put $K_J:=\ker(J\otimes_RS\to S)$; this is a finitely generated $S$-module by [F19], since $J\otimes_RS$ is a finitely generated $S$-module. For every maximal ideal $\mathfrak n\subseteq S$ the localisation $(K_J)_{\mathfrak n}$ equals the kernel of $J\otimes_RS_{\mathfrak n}\to S_{\mathfrak n}$, by [F27] and [F14] applied to the localisation $S\to S_{\mathfrak n}$. Hence if $S_{\mathfrak n}$ is flat over $R$, then $(K_J)_{\mathfrak n}=0$; and if that holds for every maximal $\mathfrak n$, then $K_J=0$ by [F17] and [F18]. Therefore, by [F11], it is enough to prove that $S_{\mathfrak n}$ is flat over $R$ for every maximal ideal $\mathfrak n\subseteq S$. [F11, F14, F17, F18, F19, F20, F21, F27]

1.5 Set-up at the contracted prime. Fix a maximal ideal $\mathfrak n\subseteq S$ and put $\mathfrak r=\mathfrak n\cap R$. Before the local computation, replace the base and presentation by $R_{\mathfrak r}$ and $S\otimes_RR_{\mathfrak r}$, using [F2]. The ideal $\mathfrak n$ induces a maximal ideal there with the same local ring $S_{\mathfrak n}$. In steps 1.6, 2.2, 3.1 and 4.1 only, write $R,\mathfrak m,\kappa,P$ for this localized base, its maximal ideal and residue field, and its polynomial ring. Let $\mathfrak q'\subseteq P$ be the prime over $\mathfrak n$, so $\mathfrak q'\cap R=\mathfrak m$, $I\subseteq\mathfrak q'$ and $g\notin\mathfrak q'$. Put $T=P_{\mathfrak q'}$ and $N_i=T/(f_1,\dots,f_i)T$; then $N_c=S_{\mathfrak n}$ by [F30]. The module $T$ is flat over this base: tensoring an injection with the free $R$-module $P$ preserves injectivity by [F13], and localizing the result preserves it by [F27], with the tensor identifications of [F14, F16]. Each $N_i$ is Noetherian local, and $\mathfrak mT\subseteq\mathfrak q'T$ makes $R\to N_i$ local. Once the computation proves $N_c$ flat over $R_{\mathfrak r}$, it is flat over the original base by clause 2 of [[thm-localisations-are-flat]]. [F2, F12, F13, F14, F16, F20, F21, F27, F30, F31]

1.6 The fibre at $\kappa$. The quotient map $P\to P/(f_1,\dots,f_i)$ tensored with $\kappa$ has cokernel $\kappa[x_1,\dots,x_n]/(\bar f_1,\dots,\bar f_i)$ by [F15]; localising this at the prime $\bar{\mathfrak q}'$ induced by $\mathfrak q'$ and applying [F14] twice together with [F16] gives $N_i\otimes_R\kappa\cong\kappa[x_1,\dots,x_n]_{\bar{\mathfrak q}'}/(\bar f_1,\dots,\bar f_i)$, where $\bar f_j$ denotes the image of $f_j$ in $\kappa[x_1,\dots,x_n]$. [F14, F15, F16]

1.7 $\mathbb Z$ is Noetherian. Every ideal of $\mathbb Z$ is an additive subgroup, hence generated by one element by [F23] and therefore finitely generated; so $\mathbb Z$ is Noetherian by [F22]. [F22, F23]

1.8 The unit witness for the minor. Since $h$ maps to a unit of $S=(P/I)_g$, there are $u\in P$ and $N\ge0$ with $\overline h\cdot\overline u/\overline g^N=1$ in $S$, that is, $\overline{hu-g^N}=0$ in $(P/I)_g$; by [F29] applied to the localisation $(P/I)\to S$ there is $M\ge0$ with $g^M(hu-g^N)\in I$. Putting $w:=g^Mu$ and $N':=M+N$ gives $hw-g^{N'}\in I$, so there are $m_1,\dots,m_c\in P$ with $hw-g^{N'}=\sum_{j=1}^cm_jf_j$ in $P$. [F29, algebra]

2.1 Finite presentation. By step 1.1 the $R$-algebra $S$ is isomorphic to the quotient of the polynomial ring $R[x_1,\dots,x_n,z]$ by the ideal generated by the finitely many elements $f_1,\dots,f_c,zg-1$; by [F5] this exhibits $S$ as a finitely presented $R$-algebra. [F5, step 1.1]

2.2 The minor survives in the fibre. The element $h$ maps to a unit of $S$, hence its image in the localisation $S_{\mathfrak n}=N_c$ is a unit, hence its image in $N_c\otimes_R\kappa$ is a unit. By step 1.6 with $i=c$ this ring is $\kappa[x_1,\dots,x_n]_{\bar{\mathfrak q}'}/(\bar f_1,\dots,\bar f_c)$, and the image of $h$ there is the image of $\bar h$; since a unit of a local ring does not lie in the maximal ideal, $\bar h\notin\bar{\mathfrak q}'$. So [F3] applies over the field $\kappa$: the images $\bar f_1,\dots,\bar f_c$ form a regular sequence in the regular local ring $\kappa[x_1,\dots,x_n]_{\bar{\mathfrak q}'}$, and consequently $\bar f_{i+1}$ is a nonzerodivisor on $\kappa[x_1,\dots,x_n]_{\bar{\mathfrak q}'}/(\bar f_1,\dots,\bar f_i)$ for every $i<c$. By step 1.6 this says that $f_{i+1}$ is a nonzerodivisor on $N_i\otimes_R\kappa$ for every $0\le i<c$. [F3, step 1.5, step 1.6, algebra]

2.3 Descent to a finitely generated subring. Let $R_0\subseteq R$ be the $\mathbb Z$-subalgebra generated by the finitely many coefficients occurring in the polynomials $f_1,\dots,f_c$, $g$, $h$, $w$, $m_1,\dots,m_c$. Then $R_0$ is a finitely generated $\mathbb Z$-algebra, hence Noetherian by steps 1.7 and [F24]. The polynomial identity of step 1.8 has all its coefficients in $R_0$, and $R_0[x_1,\dots,x_n]\to R[x_1,\dots,x_n]$ is injective by [F34], so $hw-g^{N'}=\sum_jm_jf_j$ holds already in $R_0[x_1,\dots,x_n]$; therefore $S_0:=(R_0[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ is a standard smooth $R_0$-algebra with the same $n,c,f_j,g$ and the minor $h$ a unit. [F24, F34, step 1.7, step 1.8]

3.1 Induction: a fibre nonzerodivisor lifts across a flat map. Suppose $N_i$ is flat over $R$ for some $i<c$, put $J:=\mathfrak mN_i$, and let $f:=f_{i+1}$. By step 2.2, multiplication by the image of $f$ on $N_i/J$ is injective. For every $r\ge0$, flatness of $N_i$ over $R$ applied to $0\to\mathfrak m^{r+1}\to\mathfrak m^r\to\mathfrak m^r/\mathfrak m^{r+1}\to0$ gives the natural isomorphism $$J^r/J^{r+1}\cong(\mathfrak m^r/\mathfrak m^{r+1})\otimes_{\kappa}(N_i/J),\qquad \kappa=R/\mathfrak m.$$ After choosing a $\kappa$-basis of $\mathfrak m^r/\mathfrak m^{r+1}$, this is a direct sum of copies of $N_i/J$, so multiplication by $f$ is injective on each graded piece $J^r/J^{r+1}$. If $fx=0$ in $N_i$, induction on $r$ now gives $x\in J^r$ for every $r$: injectivity modulo $J$ starts the induction, and injectivity on $J^r/J^{r+1}$ advances it. The ring $N_i$ is Noetherian local and $J$ lies in its maximal ideal by step 1.5, so [F35] gives $\bigcap_{r\ge0}J^r=0$ and therefore $x=0$. Thus $f_{i+1}$ is a nonzerodivisor on $N_i$, and $0\to N_i\xrightarrow{f_{i+1}}N_i\to N_{i+1}\to0$ is a short exact sequence. [F35, step 1.5, step 2.2, algebra]

4.1 Induction: the Tor vanishing and flatness pass to the next quotient. In the situation of step 3.1 the long exact Tor sequence of [F26] for $0\to N_i\xrightarrow{f_{i+1}}N_i\to N_{i+1}\to0$, together with $\operatorname{Tor}_1^R(\kappa,N_i)=0$ from the flatness of $N_i$, exhibits $\operatorname{Tor}_1^R(\kappa,N_{i+1})$ as the kernel of $N_i\otimes_R\kappa\xrightarrow{f_{i+1}}N_i\otimes_R\kappa$, which is zero by step 2.2. The ring $N_{i+1}$ is a Noetherian local ring, $R\to N_{i+1}$ is a local homomorphism by step 1.5 and $N_{i+1}$ is a finite $N_{i+1}$-module, so [F4] gives that $N_{i+1}$ is flat over $R$. [F4, F26, step 1.5, step 2.2, step 3.1]

5.1 Conclusion of the induction and of the local case. Steps 3.1 and 4.1, starting with $N_0$ of step 1.5, prove that every $N_i$ is flat over the localized base $R_{\mathfrak r}$. In particular the original local ring $S_{\mathfrak n}$ is flat over $R_{\mathfrak r}$, hence over the original $R$ by step 1.5. As $\mathfrak n$ was arbitrary, step 1.4 gives that $S$ is flat over the original base. This proves flatness over every Noetherian local base, and step 1.2 proves it over every Noetherian base. [F12, step 1.2, step 1.4, step 1.5, step 3.1, step 4.1]

6.1 Flatness of $S_0$ and base change back to $R$. By step 2.3 the algebra $S_0$ is standard smooth over the Noetherian ring $R_0$, so $S_0$ is flat over $R_0$ by step 5.1; and by [F2] applied to the ring map $R_0\to R$ there is an $R$-algebra isomorphism $R\otimes_{R_0}S_0\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g=S$. Hence $S\cong R\otimes_{R_0}S_0$ is flat over $R$ by [F28]. This proves the second assertion for arbitrary $R$, and step 2.1 proves the first. [F2, F28, step 2.1, step 5.1, step 2.3] ∎
