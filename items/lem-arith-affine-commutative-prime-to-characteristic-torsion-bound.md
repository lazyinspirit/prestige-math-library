---
id: lem-arith-affine-commutative-prime-to-characteristic-torsion-bound
kind: lemma
title: "Prime-to-characteristic torsion bound for affine commutative groups"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-diagonalizable-group-and-character-module
  - lem-diagonalizable-character-antiequivalence
  - lem-nonaffine-affine-group-faithful-representation
  - lem-nonaffine-connected-group-geometrically-connected
  - cor-strong-nullstellensatz-two-inclusions
  - thm-affine-domain-dimension-transcendence-degree
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Bosch, Lutkebohmert, Raynaud, Neron Models (1990), 7.3/2-3 and 7.4/5; local proof route in owner-arithmetic-models/etale-source/closure-packet.md"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC ([[def-axiom-of-choice]], [[def-dependent-choice]]). Let $k$ be an algebraically closed field and let $N$ be a smooth, connected, commutative affine group scheme of finite type over $k$; put $a=\dim N$. For every prime $\ell\ne\operatorname{char}k$ and every integer $\nu\ge1$,
$$|N[\ell^\nu](k)|\le\ell^{\nu a},$$
where $N[\ell^\nu]=\ker(\ell^\nu\colon N\to N)$ is the $\ell^\nu$-torsion subgroup scheme and $N[\ell^\nu](k)$ is its group of $k$-points.

## Facts & Assumptions

**Given:** AC and DC, an algebraically closed field $k$, a smooth connected commutative affine finite-type $k$-group $N$ with $a=\dim N$, a prime $\ell\ne\operatorname{char}k$ and an integer $\nu\ge1$.

[F1] The right regular representation of an affine finite-type group scheme over an arbitrary field contains a finite-dimensional subrepresentation $V$ with $G\to\operatorname{GL}(V)$ a closed immersion, allowing nonreduced $G$ ([[lem-nonaffine-affine-group-faithful-representation]]).

[F2] A smooth connected finite-type $k$-group scheme is geometrically integral; over the algebraically closed field $k$ this says $k[N]$ is a domain ([[lem-nonaffine-connected-group-geometrically-connected]], which assumes AC).

[F3] Over an algebraically closed field, the strong Nullstellensatz says that the ideal of polynomials vanishing on the zero locus of an ideal in a polynomial ring is its radical ([[cor-strong-nullstellensatz-two-inclusions]], which assumes AC).

[F4] For an abelian group $M$ the group algebra $k[M]$ has $k$-basis the distinct group-like elements $e_m$, with $\Delta(e_m)=e_m\otimes e_m$, and $D_k(M)(R)=\operatorname{Hom}(M,R^\times)$ for every $k$-algebra $R$ ([[def-diagonalizable-group-and-character-module]], [[lem-diagonalizable-character-antiequivalence]]).

[F5] For a finite-type $k$-domain $A$ with fraction field $K$, $\dim A=\operatorname{trdeg}_kK$ ([[thm-affine-domain-dimension-transcendence-degree]]).

## Proof

**Proof technique:** direct. The proof triangulates the matrices of $k$-points, identifies the diagonal quotient as a diagonalizable group with torsion-free character group of rank at most $a$, and compares torsion on the two sides.

1.1 By [F1] fix a closed immersion $j:N\to\operatorname{GL}_m$ of $k$-group schemes, and for $g\in N(k)$ let $M(g)\in\operatorname{GL}_m(k)$ be its matrix. Since $j$ is a group homomorphism and $N$ is commutative, $M(g)M(h)=M(gh)=M(h)M(g)$, so the $k$-span $A\subseteq\operatorname{End}_k(k^m)$ of the set $\{M(g):g\in N(k)\}$ is a finite-dimensional commutative subalgebra. Let $W\subseteq k^m$ be a nonzero $A$-stable subspace of minimal dimension. If some $A$-element has an eigenspace $C$ inside $W$ with $0\ne C\ne W$, then $C$ is a smaller nonzero $A$-stable subspace, a contradiction; if every element of $A$ acts as a scalar on $W$, then every line in $W$ is $A$-stable; hence in either case $\dim_kW=1$ and $W$ is a common eigenvector. Applying this argument to $k^m$ and then to the successive quotients by the lines produced yields a filtration $0=V_m\subset V_{m-1}\subset\cdots\subset V_0=k^m$ with $M(g)V_i\subseteq V_i$ for all $i$ and all $g\in N(k)$; in a basis adapted to this filtration every $M(g)$ is upper triangular. [F1, given, construct]

2.1 Put $P=k[x_{ij}]$, let $J=\ker(P\to k[N])$ be the kernel of the map sending each matrix coordinate to its pullback under $j$, and write $\delta=\det(x_{ij})$. The map $P_\delta=k[x_{ij},\delta^{-1}]\to k[N]$ is surjective because $j$ is a closed immersion into $\operatorname{GL}_m$, and its kernel is $J_\delta$. For every $i>j$, $x_{ij}$ vanishes at every common zero of $J$ and $z\delta-1$ in the polynomial ring $P[z]$: such a zero is an invertible matrix satisfying the equations of the closed subscheme $N\subseteq\operatorname{GL}_m$, hence is a $k$-point of $N$ and is upper triangular by step 1.1. Applying [F3] in $P[z]$ gives $x_{ij}\in\sqrt{(J,z\delta-1)}$. After quotienting by $z\delta-1$ and identifying $P[z]/(z\delta-1)\cong P_\delta$, this says $x_{ij}\in\sqrt{J_\delta}$. Since $P_\delta/J_\delta\cong k[N]$ is a domain by [F2], $J_\delta$ is radical and therefore $x_{ij}\in J_\delta$. Thus the coordinate functions below the diagonal vanish scheme-theoretically on $N$, so $j$ factors through the closed subgroup scheme $B\subseteq\operatorname{GL}_m$ of upper triangular matrices. In particular the diagonal characters $\chi_i:=u_{ii}$ (the images in $k[N]$ of the diagonal coordinate functions) are units and satisfy $\Delta(\chi_i)=\chi_i\otimes\chi_i$ in the Hopf algebra $k[N]$. [F2, F3, step 1.1, algebra]

3.1 Let $R\subseteq k[N]$ be the subalgebra generated by $\chi_1^{\pm1},\ldots,\chi_m^{\pm1}$. It is a Hopf subalgebra because the $\chi_i$ are group-like units. Its group-like elements are the monomials $\chi^{(n)}=\prod_i\chi_i^{n_i}$ for $n\in\mathbb Z^m$, and distinct group-like elements of a Hopf algebra over a field are linearly independent: a shortest nontrivial relation $\sum_{i\in S}c_ih_i=0$ with distinct $h_i$ and all $c_i\ne0$ becomes, after applying $\Delta$ and subtracting the tensor product of the relation with $h_{s}$, the relation $\sum_{i\in S\setminus\{s\}}c_ih_i\otimes(h_i-h_{s})=0$; the $h_i$ for $i\ne s$ are linearly independent by minimality of $S$, so $h_i=h_{s}$ for all $i$, a contradiction. Hence $R=k[M]$ where $M=\mathbb Z^m/L$ is the quotient of $\mathbb Z^m$ by the relations $L=\{n:\chi^{(n)}=1\}$, with $k$-basis the distinct $\chi^{(n)}$; by [F4] this is the coordinate Hopf algebra of the diagonalizable group $D_k(M)$, and $N\to D_k(M)$ is the morphism dual to the inclusion $R\subseteq k[N]$. [F4, step 2.1, algebra]

4.1 The ring $k[M]$ is a domain, being a subalgebra of the domain $k[N]$ by [F2]. If $M$ had a nonzero element $n$ of finite order $d>1$, then $(\chi^{(n)}-1)(\chi^{(n)^{d-1}}+\cdots+\chi^{(n)}+1)=\chi^{(n)^d}-1=\chi^{(dn)}-1=0$ in $k[M]$, and both factors are nonzero because distinct group-like elements are linearly independent by step 3.1 and the second factor is a sum of distinct group-likes with coefficient $1$. This contradicts that $k[N]$ is a domain, so $M$ is torsion-free; as a finitely generated torsion-free abelian group, $M\cong\mathbb Z^t$ for some $t\ge0$. Since $R=k[M]$ is a finite-type $k$-domain contained in $k[N]$, its fraction field embeds in $\operatorname{Frac}(k[N])=k(N)$, whence $t=\dim k[M]=\operatorname{trdeg}_k\operatorname{Frac}(k[M])\le\operatorname{trdeg}_kk(N)=\dim k[N]=a$ by [F5]. [F2, F4, F5, step 3.1, algebra]

5.1 Let $\varphi:N(k)\to D_k(M)(k)=\operatorname{Hom}(M,k^\times)$ be the homomorphism induced by $N\to D_k(M)$. A point $g\in N(k)$ lies in $\ker\varphi$ precisely when $\chi_i(g)=1$ for all $i$, that is, precisely when its matrix $M(g)$ is upper unitriangular; write $M(g)=I+U$ with $U$ strictly upper triangular, so $U^m=0$. If $\operatorname{char}k=0$ and $g$ has finite order $d$, then $(M(g)-I)^m=0$ and $M(g)^d=I$, so the minimal polynomial of $M(g)$ divides both $(X-1)^m$ and $X^d-1$; in characteristic zero $X^d-1$ is squarefree, so the gcd is $X-1$ and $M(g)=I$. If $\operatorname{char}k=p>0$ and $p^e\ge m$, then $M(g)^{p^e}=I+U^{p^e}=I$, so $M(g)$ has $p$-power order. Hence an element of $N(k)$ of order dividing $\ell^\nu$ with $\ell\ne p$ that lies in $\ker\varphi$ equals the identity: it has order dividing both $\ell^\nu$ and a $p$-power, hence order $1$. Consequently the restriction $N[\ell^\nu](k)\to D_k(M)(k)[\ell^\nu]$ is injective. [given, step 3.1, step 4.1, algebra]

6.1 Since $M\cong\mathbb Z^t$, evaluation gives $D_k(M)(k)=\operatorname{Hom}(\mathbb Z^t,k^\times)\cong(k^\times)^t$, whose $\ell^\nu$-torsion is $\operatorname{Hom}(\mathbb Z^t,\mu_{\ell^\nu}(k))\cong(\mathbb Z/\ell^\nu\mathbb Z)^t$ because $k$ is algebraically closed and $\ell\ne\operatorname{char}k$, of cardinal $\ell^{\nu t}$. By step 5.1, $|N[\ell^\nu](k)|\le|D_k(M)(k)[\ell^\nu]|=\ell^{\nu t}$, and $t\le a$ by step 4.1, so $|N[\ell^\nu](k)|\le\ell^{\nu a}$. AC is used through [F2] and [F3]; DC is inherited from the faithful-representation supplier chain [F1] as declared. [F4, step 4.1, step 5.1, algebra] ∎ 
