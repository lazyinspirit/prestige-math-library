---
id: cex-weil-divisor-not-cartier-singular-cone
kind: counterexample
title: A Weil divisor that is not Cartier at the vertex of the quadric cone
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
- cor-finite-type-algebra-over-noetherian-ring-is-noetherian
- def-affine-scheme
- def-affine-scheme-spectrum
- def-axiom-of-choice
- def-cartier-divisor
- def-dependent-choice
- def-integral-closure-and-integrally-closed-domain
- def-integral-scheme
- def-localisation-at-a-prime-ideal
- def-localisation-of-a-module
- def-locally-noetherian-and-noetherian-scheme
- def-normal-noetherian-ring
- def-order-codimension-one-rational-function
- def-principal-weil-divisor-and-class-group
- def-serre-r-k-and-s-k-conditions
- def-sheaf-total-quotient-rings
- def-weil-divisor-normal-noetherian-scheme
- lem-noetherian-open-subsets-are-quasi-compact
- lem-normal-domain-implies-s-two
- lem-polynomial-algebras-over-fields-are-integrally-closed
- lem-r-one-s-two-intersection-of-height-one-localisations
- thm-cartier-to-weil-divisor-normal-scheme
- thm-choice-implies-dependent-implies-countable-choice
- thm-krull-principal-ideal-theorem
- thm-noetherian-ring-has-noetherian-spectrum
- thm-noetherian-ring-quotients-and-localisations
- thm-normality-is-local-for-domains
- thm-prime-spectrum-of-a-localisation-bijection
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3
      url: https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf
    - title: The Stacks Project, Divisors, §§31.14–31.30
      url: https://stacks.math.columbia.edu/download/divisors.pdf
---


## Statement refuted

The claim refuted is: *every prime divisor on a normal Noetherian integral
scheme is Cartier at every point*. A prime divisor $Z$ of a normal Noetherian
integral scheme $X$ is called **Cartier at a point** $x\in X$ if there are an
open neighbourhood $U$ of $x$ and a Cartier divisor $D$ on $U$ with
$\operatorname{cyc}_U(D)=[Z\cap U]$ in the Weil divisor group
$\operatorname{Div}(U)$. Let $k$ be a field of characteristic $\neq2$ and let
$$R=k[x,y,z]/(xy-z^{2}),\qquad X=\operatorname{Spec}R,$$
so that $X$ is the quadric cone with vertex $\mathfrak m=(x,y,z)$. Then
$P=(x,z)$ is a prime ideal of height one, so $Z=V(P)\subseteq X$ is a prime
divisor of $X$, and $Z$ is not Cartier at the vertex: there is no open
neighbourhood $U$ of $\mathfrak m$ and no Cartier divisor $D$ on $U$ with
$\operatorname{cyc}_U(D)=[Z\cap U]$.

## Facts & Assumptions

**Given:** A field $k$ with $\operatorname{char}k\neq2$, the $k$-algebra $R=k[x,y,z]/(xy-z^{2})$ with the classes of $x,y,z$ again written $x,y,z$, the ideals $\mathfrak m=(x,y,z)$ and $P=(x,z)$, the affine scheme $X=\operatorname{Spec}R$, the closed subscheme $Z=V(P)$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] $X=\operatorname{Spec}R$ is an affine scheme, the basic opens $D(g)=\operatorname{Spec}R[g^{-1}]$ over $g\in R$ form a basis of the topology, and the points of $X$ are the prime ideals of $R$ ([[def-affine-scheme]], [[def-affine-scheme-spectrum]]).

[F2] A scheme is integral exactly when it is nonempty, reduced and irreducible; equivalently, every nonempty affine open subscheme is the spectrum of a domain, so every nonempty open subscheme of an integral scheme is integral ([[def-integral-scheme]]).

[F3] A Noetherian scheme is normal exactly when every local ring $\mathcal O_{X,x}$ is an integrally closed domain ([[def-normal-noetherian-ring]]; on an affine chart the local rings are the prime localisations of the chart ring); so a scheme is normal if and only if all of its open subschemes are. An integral closed subscheme $Z\subseteq X$ with generic point $\xi$ is a prime divisor when $\dim\mathcal O_{X,\xi}=1$, and the locally finite formal sums of prime divisors form the group $\operatorname{Div}(X)$ ([[def-weil-divisor-normal-noetherian-scheme]], [[def-normal-noetherian-ring]], [[def-integral-closure-and-integrally-closed-domain]]).

[F4] For a prime divisor $Z$ with generic point $\xi$ and a meromorphic unit $f$, the order of $f$ along $Z$ is $\operatorname{ord}_Z(f)=v_\xi(f)$, where $v_\xi$ is the normalized valuation of the discrete valuation ring $\mathcal O_{X,\xi}$; moreover $f\in\mathcal O_{X,\xi}$ if and only if $\operatorname{ord}_Z(f)\ge0$ ([[def-order-codimension-one-rational-function]]).

[F5] On a normal Noetherian integral scheme the sheaf $\mathcal K_X$ is the constant sheaf with value $K(X)$, and for $f\in K(X)^{\times}$ the principal Weil divisor is $\operatorname{div}_W(f)=\sum_Z\operatorname{ord}_Z(f)[Z]$ ([[def-principal-weil-divisor-and-class-group]], [[def-sheaf-total-quotient-rings]]).

[F6] Assume DC. For a Cartier divisor $D$ on a normal Noetherian scheme with local-equation datum $\{(U_i,f_i)\}$ the associated Weil divisor is $\operatorname{cyc}(D)=\sum_Zv_\xi(f_{i,\xi})[Z]$, the coefficient of a prime divisor $Z$ with generic point $\xi$ being computed from any index $i$ with $\xi\in U_i$; if the scheme is integral, then $\operatorname{cyc}(\operatorname{div}_C(f))=\operatorname{div}_W(f)$ for every $f\in K(X)^{\times}$ ([[thm-cartier-to-weil-divisor-normal-scheme]]). By [[thm-choice-implies-dependent-implies-countable-choice]] the standing Axiom of Choice supplies the DC needed here ([[def-dependent-choice]]).

[F7] A Cartier divisor on a scheme is a global section of $\mathcal K_X^{\times}/\mathcal O_X^{\times}$; it is presented by a local-equation datum $\{(U_i,f_i)\}$ with $f_i\in\mathcal K_X(U_i)^{\times}$ and $f_i/f_j\in\mathcal O_X^{\times}(U_i\cap U_j)$ ([[def-cartier-divisor]]).

[F8] Under AC every Noetherian integrally closed domain satisfies $(S_2)$, and every Noetherian domain satisfying $(S_2)$ equals $\bigcap_{\operatorname{ht}\mathfrak p=1}R_{\mathfrak p}$ inside its fraction field ([[lem-normal-domain-implies-s-two]], [[lem-r-one-s-two-intersection-of-height-one-localisations]], [[def-serre-r-k-and-s-k-conditions]]).

[F9] Under AC a prime ideal minimal over a principal ideal of a Noetherian commutative ring has height at most one ([[thm-krull-principal-ideal-theorem]]).

[F10] For every field $K$ and every finite $d\ge0$ the polynomial ring $K[x_1,\dots,x_d]$ is an integrally closed domain ([[lem-polynomial-algebras-over-fields-are-integrally-closed]]).

[F11] A finitely generated algebra over a Noetherian ring is Noetherian, and quotients and localisations of a Noetherian ring are Noetherian ([[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]], [[thm-noetherian-ring-quotients-and-localisations]]).

[F12] Under AC a domain $A$ is integrally closed if and only if its localisations $A_{\mathfrak p}$ at primes are integrally closed; the primes of $A_{\mathfrak p}$ correspond to the primes of $A$ contained in $\mathfrak p$, and $(A_{\mathfrak p})_{\mathfrak q}=A_{\mathfrak q}$ for $\mathfrak q\subseteq\mathfrak p$ ([[thm-normality-is-local-for-domains]], [[thm-prime-spectrum-of-a-localisation-bijection]], [[def-localisation-at-a-prime-ideal]]).

[F13] Localisation sends a generating set of a module to a generating set of the localised module; in particular $P_{\mathfrak m}=PR_{\mathfrak m}$ is generated over $R_{\mathfrak m}$ by the images of $x$ and $z$, and $\mathfrak mR_{\mathfrak m}$ is the maximal ideal of the local ring $R_{\mathfrak m}$ ([[def-localisation-of-a-module]], [[def-localisation-at-a-prime-ideal]]).

[F14] Since $R$ is Noetherian, $\operatorname{Spec}R$ is a Noetherian topological space by [[thm-noetherian-ring-has-noetherian-spectrum]], and every open subset of a Noetherian space is quasi-compact by [[lem-noetherian-open-subsets-are-quasi-compact]]; so an open subscheme $U$ of $X$ is quasi-compact. Covering $U$ by basic opens $D(g)$ with $g\in R$ and $D(g)\subseteq U$, which exist because the basic opens form a basis of the topology of $X$ [F1] and are the spectra of the Noetherian rings $R[g^{-1}]$ [F11], exhibits $U$ as locally Noetherian; hence $U$ is Noetherian ([[thm-noetherian-ring-has-noetherian-spectrum]], [[lem-noetherian-open-subsets-are-quasi-compact]], [[def-locally-noetherian-and-noetherian-scheme]]).

[F15] The Axiom of Choice is assumed ([[def-axiom-of-choice]]) and enters only through the source facts [F6], [F8], [F9], [F12] and [F14], which assume it or the Dependent Choice that AC supplies; those facts are cited in the steps that use them, and the elementary ring computations of the proof are choice-free.

## Counterexample

1.1 The substitution $\varphi(x)=u^{2}$, $\varphi(y)=v^{2}$ and $\varphi(z)=uv$ kills $xy-z^{2}$, so it induces a $k$-algebra homomorphism $\bar\varphi:R\to k[u,v]$, given by $\bar\varphi([p])=\varphi(p)$. Since $z^{2}=xy$ in $R$, writing $c=2m+\epsilon$ with $\epsilon\in\{0,1\}$ shows that each monomial class $x^{a}y^{b}z^{c}$ equals $x^{a+m}y^{b+m}z^{\epsilon}$; hence every class in $R$ is represented by $A(x,y)+zB(x,y)$ for some $A,B\in k[x,y]$. Its image is $A(u^{2},v^{2})+uvB(u^{2},v^{2})$. The first summand is supported on monomials $u^{2i}v^{2j}$, while the second is supported on monomials $u^{2i+1}v^{2j+1}$. These supports are disjoint, and each exponent pair in either support uniquely determines $(i,j)$; since monomials form a $k$-basis of $k[u,v]$, a zero image forces every coefficient of $A$ and $B$ to vanish. Thus $\bar\varphi$ is injective. Its image is the subring generated by $u^{2},uv,v^{2}$, namely $C:=k[u^{2},uv,v^{2}]$, so $R\cong C$. [given, algebra]

1.2 The ring $R/(x)$ is isomorphic to $k[y,z]/(z^{2})$; there the ideal $(z)/(z^{2})$ is the nilradical, because $z^{2}=0$ makes it nilpotent and $f^{n}\in(z^{2})\subseteq(z)$ with $(z)$ prime forces $f\in(z)$, so $(z)$ is the unique minimal prime of $k[y,z]/(z^{2})$ and its preimage $P=(x,z)$ is the unique minimal prime of $R$ over the principal ideal $(x)$. [given, algebra]

1.3 Grade $R$ by $\deg x=\deg y=\deg z=1$, so that $xy-z^{2}$ is homogeneous of degree $2$ and $\mathfrak m=(x,y,z)$ is the set $R_{\ge1}$ of elements of positive degree. Then $\mathfrak mP=(x^{2},xy,xz,yz,z^{2})=(x^{2},xz,yz,z^{2})$ using $xy=z^{2}$, so $\mathfrak mP\subseteq R_{\ge2}$; every element of $P$ has the form $a_{0}x+b_{0}z+(a_{1}x+b_{1}z)$ with $a_{0},b_{0}\in k$ and $a_{1},b_{1}\in\mathfrak m$, so $P=kx+kz+\mathfrak mP$; since $x$ and $z$ have degree $1$ they do not lie in $\mathfrak mP$, so their images form a $k$-basis of $P/\mathfrak mP$ over $R/\mathfrak m=k$ and $\dim_{k}P/\mathfrak mP=2$. Moreover, if $cx+dz\in\mathfrak mP$ with $c,d\in R$, decomposing $c=c_{0}+c_{1}$ and $d=d_{0}+d_{1}$ with $c_{0},d_{0}\in k$ and $c_{1},d_{1}\in\mathfrak m$ gives $c_{0}x+d_{0}z\in\mathfrak mP\cap R_{1}=0$, hence $c_{0}=d_{0}=0$ and $c,d\in\mathfrak m$. [given, algebra]

2.1 Let $G=\{\pm1\}$ act on $k[u,v]$ by $(u,v)\mapsto(-u,-v)$; since $\operatorname{char}k\neq2$, a polynomial $\sum c_{pq}u^{p}v^{q}$ is fixed by $G$ exactly when $c_{pq}=(-1)^{p+q}c_{pq}$ for all $(p,q)$, that is, when $c_{pq}=0$ whenever $p+q$ is odd, and the monomials with $p+q$ even are precisely the products of $u^{2}$, $uv$ and $v^{2}$. Hence $C=k[u,v]^{G}$; in particular $C$ is a subring of the domain $k[u,v]$, so $C$ and $R\cong C$ are domains. [F10, step 1.1, given, algebra]

2.2 The images of $x$ and $z$ generate $P_{\mathfrak m}$ over $R_{\mathfrak m}$ by [F13], and they are linearly independent modulo $\mathfrak mR_{\mathfrak m}P_{\mathfrak m}$: if $(a/s)x+(b/t)z\in\mathfrak mR_{\mathfrak m}P_{\mathfrak m}$ with $a,b\in R$ and $s,t\notin\mathfrak m$, then multiplying by $st\notin\mathfrak m$ and clearing denominators inside $\mathfrak mR_{\mathfrak m}P_{\mathfrak m}=(\mathfrak mP)R_{\mathfrak m}$ produces $u\notin\mathfrak m$ with $u(atx+bsz)\in\mathfrak mP$, so $uat,ubs\in\mathfrak m$ by step 1.3, whence $at,bs\in\mathfrak m$ and $a,b\in\mathfrak m$ because $s,t\notin\mathfrak m$ and $\mathfrak m$ is prime; thus $a/s,b/t\in\mathfrak mR_{\mathfrak m}$. Hence the classes of $x$ and $z$ are a $k$-basis of $P_{\mathfrak m}/\mathfrak mR_{\mathfrak m}P_{\mathfrak m}$ and this space is $2$-dimensional. [F13, step 1.3, algebra]

3.1 Let $\alpha\in\operatorname{Frac}(C)$ be integral over $C$. The same monic equation exhibits $\alpha$ as integral over $k[u,v]$, which is an integrally closed domain by [F10], so $\alpha\in k[u,v]$; and every element of $\operatorname{Frac}(C)$ is a quotient of $G$-invariant elements of $C$, hence is $G$-invariant, so $\operatorname{Frac}(C)\subseteq k(u,v)^{G}$. Therefore $\alpha\in k[u,v]\cap k(u,v)^{G}=k[u,v]^{G}=C$ by step 2.1, so $C$ is integrally closed, and by step 1.1 so is $R$. [F10, step 1.1, step 2.1, algebra]

3.2 If $P_{\mathfrak m}=(g)$ for some $g\in R_{\mathfrak m}$, then the quotient $P_{\mathfrak m}/\mathfrak mR_{\mathfrak m}P_{\mathfrak m}$ is generated as a $k$-vector space by the image of $g$ alone and has dimension at most $1$, contradicting step 2.2. Hence $P_{\mathfrak m}$ is not a principal ideal of $R_{\mathfrak m}$. [step 2.2, algebra]

4.1 The polynomial ring $k[x,y,z]$ is of finite type over the field $k$, hence Noetherian by [F11], and its quotient $R$ is Noetherian by [F11]. As $R$ is a domain by step 2.1, $X=\operatorname{Spec}R$ is an integral scheme by [F1] and [F2]. Its local rings at the points $\mathfrak p\in X$ are the prime localisations $R_{\mathfrak p}$ [F1], and these are integrally closed by step 3.1 and [F12]; so $X$ is normal by [F3]. [F1, F2, F3, F11, F12, F15, step 2.1, step 3.1]

5.1 The ring $R_{\mathfrak m}$ is a localisation of the Noetherian domain $R$ of step 4.1, hence a Noetherian ring by [F11] and a domain with fraction field $K=K(X)$: a product of two fractions $a/s$, $b/t$ with $s,t\notin\mathfrak m$ is zero only if $ab=0$ in the domain $R$, and each fraction $a/s$ with $s\notin\mathfrak m$ and $a\neq0$ is inverted by $s/a\in K(X)$ [F13]; and $R_{\mathfrak m}$ is integrally closed by [F12] because $R$ is integrally closed by step 3.1 and $\mathfrak m$ is prime; so $R_{\mathfrak m}$ satisfies $(S_{2})$ by [F8]. The intersection theorem of [F8] therefore gives $R_{\mathfrak m}=\bigcap_{\operatorname{ht}\mathfrak q=1}R_{\mathfrak q}$ inside $K$, the intersection running over the height-one primes $\mathfrak q\subseteq\mathfrak m$ of $R$: primes of $R_{\mathfrak m}$ correspond to the primes $\mathfrak q\subseteq\mathfrak m$ of $R$, with $(R_{\mathfrak m})_{\mathfrak q}=R_{\mathfrak q}$ and $\dim R_{\mathfrak q}=\operatorname{ht}\mathfrak q$ by [F12]. [F8, F11, F12, F13, F15, step 3.1, step 4.1]

5.2 The ring $R$ is Noetherian by step 4.1 and $P$ is minimal over the principal ideal $(x)$ by step 1.2, so $\operatorname{ht}P\le1$ by [F9]; and $P\neq0$ because $0\neq x\in P$ while $R$ is a domain by step 2.1, so $\operatorname{ht}P=1$. [F9, F15, step 1.2, step 2.1, step 4.1]

6.1 The quotient $R/P\cong k[y]$ is a domain, so $Z=V(P)$ is an integral closed subscheme of $X$ with generic point $P$; its codimension is $\dim\mathcal O_{X,P}=\dim R_{P}=\operatorname{ht}P=1$ by step 5.2, so $Z$ is a prime divisor of $X$ and $[Z]\in\operatorname{Div}(X)$. [F3, step 5.2]

7.1 Suppose for contradiction that $Z$ is Cartier at the vertex: there are an open neighbourhood $U$ of $\mathfrak m$ and a Cartier divisor $D$ on $U$ with $\operatorname{cyc}_{U}(D)=[Z\cap U]$, the point $\mathfrak m$ lying in the nonempty open set $U$, and the prime divisor $Z$ being the one of step 6.1. Then $U$, being an open subscheme of the integral scheme $X$ of step 4.1, is integral by [F2], normal by [F3], and Noetherian by [F14], so the Cartier-to-Weil construction of [F6] applies to it; let $\{(U_{i},f_{i})\}$ be a local-equation datum of $D$ [F7] and choose an index $i_{0}$ with $\mathfrak m\in U_{i_{0}}$. Since $U$ is integral, $\mathcal K_{U}$ is the constant sheaf $K(X)$ by [F5], so $f:=f_{i_{0}}$ is an element of $K(X)^{\times}$. [F2, F3, F5, F6, F7, F14, F15, step 4.1, step 6.1]

8.1 Every height-one prime $\mathfrak q\subseteq\mathfrak m$ of $R$ lies in $U_{i_{0}}$: the closure of $\{\mathfrak q\}$ in $X$ is $V(\mathfrak q)$, which contains $\mathfrak m$ because $\mathfrak q\subseteq\mathfrak m$, and if $\mathfrak q$ were not in $U_{i_{0}}$ then the closed set $X\setminus U_{i_{0}}$ would contain $\mathfrak q$, hence its closure and the point $\mathfrak m$, contradicting $\mathfrak m\in U_{i_{0}}$. [F1, step 7.1]

9.1 For every height-one prime $\mathfrak q\subseteq\mathfrak m$ the point $\mathfrak q$ lies in $U_{i_{0}}$ by step 8.1, so the closure of $\{\mathfrak q\}$ in $U$ is a prime divisor $W_{\mathfrak q}$ of $U$ with generic point $\mathfrak q$, and the coefficient of $[W_{\mathfrak q}]$ in $\operatorname{cyc}_{U}(D)=[Z\cap U]$ is, by the coefficient formula of [F6] applied with the index $i_{0}$, the value $v_{\mathfrak q}(f_{\mathfrak q})$ of the normalized valuation of $\mathcal O_{U,\mathfrak q}=\mathcal O_{X,\mathfrak q}=R_{\mathfrak q}$, which is $v_{\mathfrak q}(f)$ by [F4]. This coefficient is $1$ for $\mathfrak q=P$, because the closure of $\{P\}$ in $U$ is the restricted prime divisor $Z\cap U$ of step 6.1, and it is $0$ for every other height-one prime $\mathfrak q\subseteq\mathfrak m$. Hence $v_{P}(f)=1$ and $v_{\mathfrak q}(f)=0$ for every other height-one prime $\mathfrak q\subseteq\mathfrak m$. [F4, F6, F15, step 6.1, step 7.1, step 8.1]

10.1 For every height-one prime $\mathfrak q\subseteq\mathfrak m$ we have $v_{\mathfrak q}(f)\ge0$ by step 9.1, and $R_{\mathfrak q}$ is the valuation ring of $v_{\mathfrak q}$ by [F4], so $f\in R_{\mathfrak q}$; the intersection presentation of step 5.1 gives $f\in R_{\mathfrak m}$. [F4, step 5.1, step 9.1]

10.2 The case $g=0$ gives $g\in fR_{\mathfrak m}$ directly. Let $0\ne g\in P_{\mathfrak m}=PR_{\mathfrak m}$. Then $g\in R_{\mathfrak m}\subseteq R_{\mathfrak q}$ for every height-one prime $\mathfrak q\subseteq\mathfrak m$, so $v_{\mathfrak q}(g)\ge0$; and $v_{P}(g)\ge1$ because $g\in PR_{P}$, the maximal ideal of the discrete valuation ring $R_{P}$ by [F4]. With $v_{P}(f)=1$ and $v_{\mathfrak q}(f)=0$ for $\mathfrak q\neq P$ from step 9.1 this gives $v_{\mathfrak q}(g/f)\ge0$ for every height-one prime $\mathfrak q\subseteq\mathfrak m$, so $g/f\in R_{\mathfrak m}$ by the intersection presentation of step 5.1, that is, $g\in fR_{\mathfrak m}$. Hence $P_{\mathfrak m}\subseteq fR_{\mathfrak m}$. [F4, step 5.1, step 9.1]

11.1 Since $v_{P}(f)=1\ge1$, the element $f$ lies in the maximal ideal $PR_{P}$ of the discrete valuation ring $R_{P}$ by [F4], and $f\in R_{\mathfrak m}$ by step 10.1, so $f\in PR_{P}\cap R_{\mathfrak m}=PR_{\mathfrak m}=P_{\mathfrak m}$, this contraction being computed inside $R_{\mathfrak m}$ along the localisation $R_{\mathfrak m}\to(R_{\mathfrak m})_{P}=R_{P}$ of a prime ideal by [F12]. With step 10.2 this gives $P_{\mathfrak m}=fR_{\mathfrak m}$, a principal ideal of $R_{\mathfrak m}$. [F4, F12, F15, step 10.1, step 10.2]

12.1 The principal-ideal conclusion of step 11.1 contradicts the non-principality of step 3.2, so no open neighbourhood $U$ of $\mathfrak m$ carries a Cartier divisor $D$ with $\operatorname{cyc}_{U}(D)=[Z\cap U]$: the height-one prime divisor $Z=V(x,z)$ on the normal quadric cone is not Cartier at the vertex. [step 3.2, step 11.1] ∎

The failure is local and is not an artefact of the chosen equation: a Cartier divisor on a neighbourhood of the vertex would be given there by local equations, and the coefficient computation of step 9.1 applies to any such representative, forcing $P_{\mathfrak m}$ to be principal, which the non-principality of step 3.2 excludes. The two generators $x$ and $z$ of $P$ are linearly independent in $P/\mathfrak mP$, and that is exactly the obstruction recorded by the Zariski tangent space of the vertex.
