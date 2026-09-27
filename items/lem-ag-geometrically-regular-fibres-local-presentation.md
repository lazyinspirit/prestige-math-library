---
id: "lem-ag-geometrically-regular-fibres-local-presentation"
kind: "lemma"
title: "Flat maps with geometrically regular fibres have standard smooth local presentations"
status: published
origin: "pipeline"
deps: ["def-ag-geometrically-regular-algebra-and-fibre", "def-ag-standard-smooth-algebra", "lem-ag-polynomial-quotient-differentials", "thm-ag-perfect-field-jacobian-regularity", "lem-regular-local-regular-quotient-ideal-is-parameter-generated", "thm-nakayama-lemma", "thm-existence-of-algebraic-closures", "def-algebraic-closure", "cor-fields-of-characteristic-zero-and-finite-fields-are-perfect", "cor-height-plus-quotient-dimension-affine-domain", "cor-dimension-of-a-finite-polynomial-ring-over-a-field", "thm-flatness-criteria-by-injections-and-ideals", "thm-long-exact-tor-sequence-in-the-left-module-variable", "thm-localisation-of-modules-is-tensor-product", "thm-right-exactness-of-tensor-products", "prop-localisation-zero-equality-and-kernel-criteria", "thm-universal-property-of-localisation", "def-height-of-a-prime-ideal", "thm-localisation-at-a-prime-is-local", "def-axiom-of-choice", "def-dependent-choice", "thm-localisation-and-polynomial-extension-of-regular-rings"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.137.15–16 (tags 00TE, 00TF) and 10.136.15 (tag 00SY)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
    - title: "Vakil §26.2.4, pp.691–693"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
verification:
  audited: 2026-09-27
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $R\to S$ be a ring map
of finite presentation. Choose a presentation $S\cong P/I$ with
$P=R[x_1,\dots,x_n]$ and $I=(f_1,\dots,f_m)$, and let
$\mathfrak q'\subseteq P$ be the preimage of
$\mathfrak q\in\operatorname{Spec}S$; put $\mathfrak p=\mathfrak q\cap R$,
$\kappa=\kappa(\mathfrak p)$ and
$$F:=S\otimes_R\kappa,\qquad I_\kappa:=I\kappa[x_1,\dots,x_n].$$
Assume

1. the local ring homomorphism $R_{\mathfrak p}\to S_{\mathfrak q}$ is flat, and
2. the fibre $F$ is geometrically regular at $\mathfrak q$
   ([[def-ag-geometrically-regular-algebra-and-fibre]]): for **every** field
   extension $K/\kappa$ and every prime of $F\otimes_\kappa K$ lying over the
   prime of $F$ corresponding to $\mathfrak q$, the local ring there is regular.

Then there are an integer $0\le c\le n$, elements $f_1,\dots,f_c$ selected
from the chosen generating list for $I$, a polynomial $u\in P\smallsetminus
\mathfrak q'$, and a $c\times c$ Jacobian minor of these $f_j$ whose image is a
unit in $(P/(f_1,\dots,f_c))_u$, such that, writing $\bar u$ for the image of
$u$ in $S$, there is an $R$-algebra isomorphism
$$S_{\bar u}\cong\Bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\Bigr)_u.$$
Thus $S_{\bar u}$ is standard smooth over $R$ and witnesses that $R\to S$ is
standard smooth at $\mathfrak q$ ([[def-ag-standard-smooth-algebra]]). This is
the converse direction of the equivalence between local standard smoothness and
flatness with geometrically regular fibres.

## Facts & Assumptions

**Given:** A ring map $R\to S$ of finite presentation, a presentation $S\cong R[x_1,\dots,x_n]/I$ with $I=(f_1,\dots,f_m)$, a prime $\mathfrak q\subseteq S$ with $\mathfrak p=\mathfrak q\cap R$, the primes $\mathfrak q'\subseteq R[x_1,\dots,x_n]$ and $\bar{\mathfrak q}\subseteq F$ lying over $\mathfrak q$, the fibre $F=S\otimes_R\kappa(\mathfrak p)$, flatness of $R_{\mathfrak p}\to S_{\mathfrak q}$, geometric regularity of $F$ at $\mathfrak q$, and the Axiom of Choice.

[F1] [[def-ag-geometrically-regular-algebra-and-fibre]]: for a finitely presented $R$-algebra $S$ and $\mathfrak q\in\operatorname{Spec}S$ over $\mathfrak p\in\operatorname{Spec}R$, the fibre $S\otimes_R\kappa(\mathfrak p)$ is geometrically regular at $\mathfrak q$ when for every field extension $K/\kappa(\mathfrak p)$ every local ring of $(S\otimes_R\kappa(\mathfrak p))\otimes_{\kappa(\mathfrak p)}K$ at a prime lying over the prime corresponding to $\mathfrak q$ is a regular local ring; the fibre is $S\otimes_R\kappa(\mathfrak p)$, and $\kappa(\mathfrak p)=R_{\mathfrak p}/\mathfrak pR_{\mathfrak p}$.

[F2] [[def-ag-standard-smooth-algebra]]: a standard smooth $R$-presentation is a presentation $S\cong(R[x_1,\dots,x_n]/(f_1,\dots,f_c))_g$ with $n\ge c\ge0$ in which some $c\times c$ minor of the Jacobian matrix $(\partial f_j/\partial x_i)$ has image a unit of $S$; the invertible minor may be taken to be the leading one, in the first $c$ columns, and $n-c$ is the relative dimension.

[F3] [[lem-ag-polynomial-quotient-differentials]]: for $P=A[x_1,\dots,x_n]$ the module $\Omega_{P/A}$ is free on $\mathrm dx_1,\dots,\mathrm dx_n$, the partial derivatives are computed on the monomial basis and extended $A$-linearly, $\mathrm df=\sum_i\partial_if\,\mathrm dx_i$, and the Jacobian matrix $(\partial_if_j)$ governs $\Omega_{P/I/A}$.

[F4] [[thm-ag-perfect-field-jacobian-regularity]]: under the Axiom of Choice, for a perfect field $k$, $P=k[x_1,\dots,x_n]$, $A=P/I$ and a maximal ideal $\mathfrak m\subseteq A$ whose residue field is a finite separable extension of $k$, the local ring $A_{\mathfrak m}$ is regular if and only if $\operatorname{rank}_\kappa J(\mathfrak m)=n-\dim A_{\mathfrak m}$, where $J(\mathfrak m)$ is the Jacobian matrix of a generating set of $I$ evaluated at $\mathfrak m$.

[F5] [[lem-regular-local-regular-quotient-ideal-is-parameter-generated]]: under the Axiom of Choice, for a regular local ring $(R,\mathfrak m,k)$ of dimension $d$ and an ideal $I\subseteq\mathfrak m$, the following are equivalent: $R/I$ is regular; $I$ is generated by an initial part of a regular system of parameters; and $\dim_k((I+\mathfrak m^2)/\mathfrak m^2)=d-\dim(R/I)$.

[F6] [[thm-nakayama-lemma]]: under the Axiom of Choice, if $R$ is a commutative ring, $I\subseteq J(R)$ and $M$ is a finitely generated $R$-module with $IM=M$, then $M=0$.

[F7] [[thm-existence-of-algebraic-closures]], [[def-algebraic-closure]] and [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: under the Axiom of Choice every field has an algebraic closure; an algebraic closure of a field is an algebraically closed algebraic extension; and every algebraically closed field is perfect.

[F8] [[cor-height-plus-quotient-dimension-affine-domain]] and [[cor-dimension-of-a-finite-polynomial-ring-over-a-field]]: under the Axiom of Choice, for a field $k$, a finite-type $k$-domain $A$ and $\mathfrak p\in\operatorname{Spec}A$ one has $\operatorname{ht}(\mathfrak p)+\dim(A/\mathfrak p)=\dim A$, and $\dim k[x_1,\dots,x_n]=n$.

[F9] [[thm-flatness-criteria-by-injections-and-ideals]] and [[thm-long-exact-tor-sequence-in-the-left-module-variable]]: $M$ is flat over $R$ exactly when $I\otimes_RM\to M$ is injective for every ideal $I$; and under the Axiom of Dependent Choice, a short exact sequence $0\to M'\to M\to M''\to0$ of left $R$-modules and a right module $N$ give the long exact sequence $\cdots\to\operatorname{Tor}_1(N,M)\to\operatorname{Tor}_1(N,M'')\to N\otimes_RM'\to N\otimes_RM\to\cdots$; in particular $\operatorname{Tor}_1^R(R/I,M)=\ker(I\otimes_RM\to M)$ for flat $M$.

[F10] [[thm-localisation-of-modules-is-tensor-product]] and [[thm-right-exactness-of-tensor-products]]: localisation of modules is given by tensoring with the localised ring, so localising commutes with base change of scalars, and $-\otimes_RN$ is right exact, so a surjection stays surjective and $(M/L)\otimes_RN=(M\otimes_RN)/(L\otimes_RN)$.

[F11] [[prop-localisation-zero-equality-and-kernel-criteria]] and [[thm-universal-property-of-localisation]]: in $S^{-1}R$ a fraction $r/s$ is zero exactly when $ur=0$ for some $u\in S$. If a module $M$ is finitely generated, then $M_{\mathfrak q}=0$ exactly when some $g\notin\mathfrak q$ annihilates $M$: choose an annihilator outside $\mathfrak q$ for each of its finitely many generators and take their product. For a ring map carrying a multiplicative set into the units there is a unique extension to the localisation, so elements of the multiplicative set become units.

[F12] [[def-height-of-a-prime-ideal]] and [[thm-localisation-at-a-prime-is-local]]: $\operatorname{ht}(\mathfrak p)=\dim(R_{\mathfrak p})$, and for a prime $\mathfrak p$ the localisation $R_{\mathfrak p}$ is a local ring with maximal ideal $\mathfrak pR_{\mathfrak p}$.

[F13] [[def-dependent-choice]]: the Axiom of Dependent Choice, used only through the Tor long exact sequence of [F9]; it is a consequence of the Axiom of Choice assumed in the statement.

[F14] [[thm-localisation-and-polynomial-extension-of-regular-rings]]: under the Axiom of Choice, finite polynomial extensions and localizations of a commutative regular Noetherian ring are regular. In particular, a finite polynomial ring over a field and its localization at any prime are regular local at that prime.



## Proof

1.1 Set-up. Write $P:=R[x_1,\dots,x_n]$, $S=P/I$, $P_\kappa:=\kappa[x_1,\dots,x_n]$ and $I_\kappa=I P_\kappa$, so that $F=P_\kappa/I_\kappa$ and the primes $\mathfrak q'\subseteq P$, $\bar{\mathfrak q}\subseteq F$ correspond to one another and contract to $\mathfrak q$; in the fibre, $\bar{\mathfrak q}$ corresponds to the prime $\bar{\mathfrak q}':=\mathfrak q'P_\kappa+I_\kappa\subseteq P_\kappa$ and $F/\bar{\mathfrak q}=(S/\mathfrak q)\otimes_R\kappa$ has fraction field $\kappa(\mathfrak q)$ because $S/\mathfrak q$ is a domain. [F1, F10, given]

2.1 The fibre is regular at its own residue field, so the fibre ideal has $c$ generators. Taking for $K$ the identity extension $\kappa/\kappa$ in [F1], the local ring $A':=P_{\kappa,\bar{\mathfrak q}'}$ is regular local by [F14], since the field $\kappa$ is regular Noetherian, and has dimension $\operatorname{ht}(\bar{\mathfrak q}')$ by [F12], and its quotient $F_{\bar{\mathfrak q}}=A'/I_\kappa A'$ is a regular local ring by the hypothesis. Since $I_\kappa=(f_1,\dots,f_m)$ and every $f_j$ lies in $\bar{\mathfrak q}'$, [F5] applies and shows that $I_\kappa A'$ is generated by an initial part of a regular system of parameters of $A'$; put $$c:=\operatorname{ht}(\bar{\mathfrak q}')-\dim F_{\bar{\mathfrak q}},$$ so that $I_\kappa A'$ is generated by $c$ elements whose classes in $I_\kappa A'/\bar{\mathfrak q}'(I_\kappa A')$ are $\kappa(\mathfrak q)$-independent. The classes of the images of $f_1,\dots,f_m$ span that $\kappa(\mathfrak q)$-vector space of dimension $c$, so after renumbering, the images of $f_1,\dots,f_c$ form a basis and generate $I_\kappa A'$ by [F6] applied to the finitely generated $A'$-module $I_\kappa A'$. [F3, F5, F6, F12, F14, step 1.1, given]

2.2 The $K$-rational point of the fibre and the rank computation. By [F7] choose an algebraic closure $K/\kappa(\mathfrak q)\supseteq\kappa$; it is perfect by [F7]. The composite $F\otimes_\kappa K\to\kappa(\mathfrak q)\otimes_\kappa K\to K$, $a\otimes b\mapsto ab$, obtained from the algebraic closure $\kappa(\mathfrak q)\subseteq K$, is a surjective $K$-algebra homomorphism (it is $K$-linear and hits $K$), and restricting it to $F$ recovers the quotient map $F\to F/\bar{\mathfrak q}\hookrightarrow\kappa(\mathfrak q)$; hence its kernel $Q$ is a maximal ideal of $F_K:=F\otimes_\kappa K$ with $F_K/Q\cong K$, so $Q$ lies over $\bar{\mathfrak q}$ and its preimage $\bar{\mathfrak n}\subseteq K[x_1,\dots,x_n]$ is maximal with $K[x]/\bar{\mathfrak n}\cong K$. By [F1] applied to $K/\kappa$ the local ring $(F_K)_Q$ is regular local; put $d:=\dim(F_K)_Q$. [F1, F7, step 1.1, given]

3.1 The chosen equations also generate the ideal of the $K$-fibre. Put $K[x]:=K[x_1,\dots,x_n]$ and $I_K:=I\,K[x]=I_\kappa K[x]$, so $F_K=K[x]/I_K$. Since the images of $f_1,\dots,f_c$ generate $I_\kappa A'$ by step 2.1, the cokernel $I_\kappa A'/(f_1,\dots,f_c)A'$ is zero, so $$I_K K[x]_{\bar{\mathfrak n}}=(f_1,\dots,f_c)K[x]_{\bar{\mathfrak n}}$$ by [F10] (right exactness of base change of scalars, and localisation commuting with it). Hence $T_K:=K[x]/(f_1,\dots,f_c)$ satisfies $(T_K)_{\bar{\mathfrak n}}=K[x]_{\bar{\mathfrak n}}/I_KK[x]_{\bar{\mathfrak n}}=(F_K)_Q$, which is regular local of dimension $d$. Now $\bar{\mathfrak n}$ is a maximal ideal of the finite-type $K$-domain $K[x]$, so $\operatorname{ht}(\bar{\mathfrak n})+\dim(K[x]/\bar{\mathfrak n})=\dim K[x]=n$ by [F8], that is, $\operatorname{ht}(\bar{\mathfrak n})=n$. [F8, F10, step 2.1, step 2.2]

3.2 The remaining relations die after inverting. Put $T:=R[x_1,\dots,x_n]/(f_1,\dots,f_c)$ and $J:=\ker(T\to S)=I/(f_1,\dots,f_c)$; the ideal $J$ is finitely generated because $I$ is. Since $f_1,\dots,f_c$ generate $I_\kappa P_{\kappa,\bar{\mathfrak q}'}$ by step 2.1, the map $$T_{\mathfrak q'}\otimes_{R_{\mathfrak p}}\kappa\longrightarrow S_{\mathfrak q}\otimes_{R_{\mathfrak p}}\kappa,\qquad \kappa[x]_{\bar{\mathfrak q}'}/(\bar f_1,\dots,\bar f_c)\longrightarrow\kappa[x]_{\bar{\mathfrak q}'}/I_\kappa ,$$ is an isomorphism. The ring $S_{\mathfrak q}$ is flat over $R_{\mathfrak p}$ by hypothesis, so [F9] gives $\operatorname{Tor}_1^{R_{\mathfrak p}}(\kappa,S_{\mathfrak q})=0$; the Tor long exact sequence of [F9] applied to $0\to J_{\mathfrak q'}\to T_{\mathfrak q'}\to S_{\mathfrak q}\to0$ therefore makes $J_{\mathfrak q'}\otimes_{R_{\mathfrak p}}\kappa\to T_{\mathfrak q'}\otimes_{R_{\mathfrak p}}\kappa$ injective, while its composite with the isomorphism above is zero; hence $J_{\mathfrak q'}\otimes_{R_{\mathfrak p}}\kappa=0$, that is, $J_{\mathfrak q'}=\mathfrak pJ_{\mathfrak q'}$. The Axiom of Dependent Choice assumed through [F9] is a consequence of the Axiom of Choice assumed in the statement, and is used only here. [F9, F13, step 2.1, given]

4.1 The rank and the minor. Apply [F4] with $k:=K$ (perfect), $P:=K[x]$, $I:=(f_1,\dots,f_c)$ — a generating set of that ideal, with the $f_j$ now viewed in $K[x]$ — $A:=T_K$ and $\mathfrak m:=\bar{\mathfrak n}/(f_1,\dots,f_c)\subseteq A$: this maximal ideal has residue field $A/\mathfrak m=K$, a finite separable extension of $K$, and $A_{\mathfrak m}=(T_K)_{\bar{\mathfrak n}}=(F_K)_Q$ is regular local of dimension $d$ by step 3.1. The criterion gives $$\operatorname{rank}_K J(\mathfrak m)=n-\dim A_{\mathfrak m}=n-d=:\mu_K ,$$ where $J$ is the $c\times n$ Jacobian matrix of $f_1,\dots,f_c$. Moreover $$\mu_K=\dim_K\Bigl(I_K K[x]_{\bar{\mathfrak n}}\big/\bar{\mathfrak n}I_KK[x]_{\bar{\mathfrak n}}\Bigr)=\dim_K\Bigl(\bigl(I_\kappa A'/\bar{\mathfrak q}'I_\kappa A'\bigr)\otimes_{\kappa(\mathfrak q)}K\Bigr)\ge\dim_{\kappa(\mathfrak q)}\bigl(I_\kappa A'/\bar{\mathfrak q}'I_\kappa A'\bigr)=c,$$ where the middle identification is base change of scalars by [F10] applied to the quotient $I_\kappa A'/(f_1,\dots,f_c)A'=0$ of step 2.1 and the last inequality is that the dimension of a vector space cannot drop under a field extension. Therefore $\operatorname{rank}_KJ(\mathfrak m)=c$, so some $c\times c$ minor $h$ of the Jacobian matrix $(\partial f_j/\partial x_i)$ has nonzero image in $K[x]/\bar{\mathfrak n}=K$. [F4, F10, step 2.2, step 3.1, algebra]

5.1 The minor descends to $\mathfrak q$. By the monomial formula of [F3], partial differentiation is linear over the coefficient ring, so the image in $K[x]$ of the minor $h\in R[x_1,\dots,x_n]$ is the corresponding minor of the images of $f_1,\dots,f_c$; since its image in $K[x]/\bar{\mathfrak n}$ is nonzero we get $h\notin\bar{\mathfrak n}$, hence $h\notin\bar{\mathfrak n}\cap R[x]=\mathfrak q'$ because $\bar{\mathfrak n}$ lies over $\mathfrak q'$, and hence $h\notin\mathfrak q$. [F3, step 4.1, given]

6.1 Conclusion. The ring $T_{\mathfrak q'}$ is local with maximal ideal $\mathfrak q'T_{\mathfrak q'}$, which contains $\mathfrak pT_{\mathfrak q'}$ because $\mathfrak p\subseteq\mathfrak q'$, and $J_{\mathfrak q'}$ is a finitely generated $T_{\mathfrak q'}$-module; so $J_{\mathfrak q'}=\mathfrak pJ_{\mathfrak q'}$ forces $J_{\mathfrak q'}=0$ by [F6]. By [F11] there is $g\in P\smallsetminus\mathfrak q'$, with $J_g=0$, that is $T_g\cong S_{\bar g}$ as $R$-algebras, where $\bar g$ is the image of $g$ in $S$. Since $h\notin\mathfrak q'$ by step 5.1, put $u:=gh\in P\smallsetminus\mathfrak q'$ and write $\bar u$ for its image in $S$. The image of $h$ is a unit in $S_{\bar u}$ because $u=gh$ is inverted, and $J_u=0$ because $J_g=0$; hence $$S_{\bar u}\cong T_u=\Bigl(R[x_1,\dots,x_n]/(f_1,\dots,f_c)\Bigr)_u$$ with the $c\times c$ Jacobian minor $h$ a unit, a standard smooth presentation of relative dimension $n-c$ by [F2]. Since $u\notin\mathfrak q'$, its image $\bar u\notin\mathfrak q$, so this chart witnesses that $R\to S$ is standard smooth at $\mathfrak q$. [F2, F6, F11, step 5.1, step 3.2] ∎
