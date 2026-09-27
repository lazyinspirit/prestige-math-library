---
id: ex-dihedral-groups-are-m-groups
kind: example
title: "All finite dihedral groups are M-groups"
status: draft
origin: pipeline
deps: ["def-monomial-representation-and-m-group", "thm-supersolvable-groups-are-m-groups", "thm-clifford-correspondence", "cor-dihedral-groups-as-semidirect-products", "thm-clifford-homogeneous-restriction-formula", "def-conjugate-representation-and-inertia-group", "thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional", "cor-cyclotomic-field-splits-a-finite-group", "prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient", "thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel", "cor-index-tower-finite", "def-induced-r-linear-g-module-by-h-covariant-functions", "cor-dimension-of-an-induced-finite-dimensional-representation", "thm-complex-nth-roots-and-roots-of-unity", "thm-linear-congruence-solvability-and-solution-count"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  references:
    - title: "Tammo tom Dieck, Representation Theory — (4.2.4)–(4.2.7), printed pp. 55–57; §4.3, printed pp. 57–59"
      url: "https://www.uni-math.gwdg.de/tammo/d01.pdf"
    - title: "Wen-Wei Li, Yanqi Lake Lectures on Algebra I — §12.5, printed pp. 146–148"
      url: "https://www.wwli.asia/downloads/YAlg1.pdf"
proof_strategy: direct
---

## Example

For $n\ge1$ let
$$ D_n:=\operatorname{Dih}(C_n)=C_n\rtimes C_2=A\rtimes\langle s\rangle, \qquad A=\langle r\rangle\cong C_n,\qquad srs^{-1}=r^{-1}, $$
the dihedral group of order $2n$ in the notation of
[[cor-dihedral-groups-as-semidirect-products]]. Then **every irreducible
complex character of $D_n$ is monomial**, so $D_n$ is an $M$-group, and the
monomial inductions can be written down. With $f:=\gcd(2,n)$:

- each irreducible character of $D_n$ either is a linear character of $D_n$
  whose restriction to $A$ is an $s$-fixed linear character of $A$ — these are
  exactly the $2f$ linear characters, each of them an extension of its
  restriction — or is $\operatorname{Ind}_A^{D_n}\lambda$ for a linear
  character $\lambda$ of the cyclic subgroup $A$ that is **not** fixed by $s$,
  and then it has degree $2$;
- the second kind are exactly the $\tfrac{n-f}{2}$ irreducible characters of
  degree $2$, one for each two-element orbit $\{\lambda,{}^s\lambda\}$;
- the list gives an inducing subgroup for every irreducible character: $D_n$
  itself for a linear character and $A$ for a degree-two character. Thus $D_n$
  is an $M$-group; the displayed inducing subgroups need not be unique. The
  group $D_n$ is also supersolvable: a prime-factor subgroup series of the
  cyclic group $A$ has every term normal in $D_n$, and adjoining $D_n$ gives a
  final factor of order two. This makes the result a special case of
  [[thm-supersolvable-groups-are-m-groups]], while the computation exhibits
  the characters and inductions explicitly.

## Facts & Assumptions

**Given:** An integer $n\ge1$, the group $G:=D_n=\operatorname{Dih}(C_n)=A\rtimes\langle s\rangle$ with $A=\langle r\rangle\cong C_n$ and inversion action $srs^{-1}=r^{-1}$, the number $\zeta=\exp(2\pi i/n)$, and an irreducible complex character $\chi\in\operatorname{Irr}(G)$.

[F1] $|G|=2n$, $r^n=s^2=1$, $srs^{-1}=r^{-1}$, $sr^js^{-1}=r^{-j}$ for all $j$, and every element of $G$ has a unique form $r^js^m$ with $0\le j<n$, $m\in\{0,1\}$; at the degenerate values $\operatorname{Dih}(C_1)\cong C_2$ and $\operatorname{Dih}(C_2)\cong C_2\times C_2$ are abelian. ([[cor-dihedral-groups-as-semidirect-products]]).

[F2] Every irreducible complex representation of a finite abelian group has degree $1$, and $\mathbb C$ is a splitting field for every finite group: it has characteristic $0$ and contains all roots of unity. ([[thm-irreducible-representations-of-a-finite-abelian-group-over-a-splitting-field-are-one-dimensional]], [[cor-cyclotomic-field-splits-a-finite-group]]).

[F3] Conjugation of characters is ${}^g\theta(h)=\theta(g^{-1}hg)$; for $N\trianglelefteq G$ the inertia group $I_G(\theta)=\{g\in G:{}^g\theta=\theta\}$ satisfies $N\le I_G(\theta)\le G$, and for $N\le H\le G$ one sets $\operatorname{Irr}(H\mid\theta)=\{\psi\in\operatorname{Irr}(H):\theta$ occurs in $\operatorname{Res}_N^H\psi\}$. ([[def-conjugate-representation-and-inertia-group]]).

[F4] Clifford correspondence: for $N\trianglelefteq G$, $\theta\in\operatorname{Irr}(N)$ and $I=I_G(\theta)$, induction is a bijection $\operatorname{Irr}(I\mid\theta)\to\operatorname{Irr}(G\mid\theta)$, and the sets $\operatorname{Irr}(G\mid\theta)$ indexed by distinct $G$-orbits in $\operatorname{Irr}(N)$ partition $\operatorname{Irr}(G)$. ([[thm-clifford-correspondence]]).

[F5] Clifford restriction formula: for $\chi\in\operatorname{Irr}(G\mid\theta)$ with $I=I_G(\theta)$ there is a positive integer $e$ with $\operatorname{Res}_N^G\chi=e\sum_{gI\in G/I}{}^g\theta$. In particular $I=G$ forces $\operatorname{Res}_N^G\chi=e\,\theta$. ([[thm-clifford-homogeneous-restriction-formula]]).

[F6] For $K\le H\le G$ with $G$ finite, $[G:K]=[G:H][H:K]$. ([[cor-index-tower-finite]]).

[F7] For a finite-dimensional $H$-representation $W$ one has $\dim\operatorname{Ind}_H^GW=[G:H]\dim W$ ([[cor-dimension-of-an-induced-finite-dimensional-representation]]), and for $H=G$ the covariance condition $f(gh)=h^{-1}f(g)$ determines $f$ by $f(1)$, so that evaluation at $1$ is a $G$-isomorphism $\operatorname{Ind}_G^GL\xrightarrow{\ \sim\ }L$, $f\mapsto f(1)$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F8] A character $\chi$ of $G$ is monomial if $\chi=\operatorname{Ind}_H^G\lambda$ for some $H\le G$ and linear character $\lambda$, and $G$ is an $M$-group if every irreducible complex character of $G$ is monomial. ([[def-monomial-representation-and-m-group]]).

[F9] $\ker\chi=\{g\in G:\chi(g)=\chi(1)\}$ equals $\ker\rho$ for every representation $\rho$ affording $\chi$. ([[thm-kernel-of-a-complex-character-agrees-with-the-representation-kernel]]).

[F10] If $N\trianglelefteq G$ and a representation $\rho$ of $G$ has $N\subseteq\ker\rho$, then $\rho$ factors through $G/N$, and $V$ is irreducible over $G$ if and only if it is irreducible over $G/N$. ([[prop-representations-with-kernel-containing-a-normal-subgroup-factor-through-the-quotient]]).

[F11] The $n$-th roots of unity in $\mathbb C$ are exactly $\zeta^k$ for $0\le k<n$, and these are $n$ distinct numbers. ([[thm-complex-nth-roots-and-roots-of-unity]]).

[F12] For $n\ge1$ and integers $a,b$ the congruence $ax\equiv b\pmod n$ is solvable exactly when $\gcd(a,n)\mid b$, and then it has exactly $\gcd(a,n)$ solution classes modulo $n$. ([[thm-linear-congruence-solvability-and-solution-count]]).

## Verification

**Proof technique:** direct.

1.1 By [F1] the group $G=A\rtimes\langle s\rangle$ has order $2n$, the subgroup $A=\langle r\rangle\cong C_n$ is cyclic of index $[G:A]=2$ and normal, $s^2=1$, and $sas^{-1}=a^{-1}$ for $a\in A$; in particular $s$ has order $2$ modulo $A$ and $G/A\cong C_2$. [F1, given]

1.2 $A$ is cyclic, hence abelian, so by [F2] every irreducible complex character of $A$ is one-dimensional, i.e. a group homomorphism $A\to\mathbb C^\times$; moreover $\mathbb C$ is a splitting field for every finite group. [F2, given]

1.3 By [F7] a linear character of $G$ is monomial: taking $H=G$ and the one-dimensional module $L$ affording it, evaluation at $1$ is an isomorphism $\operatorname{Ind}_G^GL\to L$, so $\chi=\operatorname{Ind}_G^G\chi$ has the monomial form of [F8]; conversely, if $\chi=\operatorname{Ind}_H^G\lambda$ with $\lambda$ linear then $\chi(1)=[G:H]\lambda(1)=[G:H]$, so a monomial character of $G$ is linear exactly when it is induced from $G$ itself. [F7, F8]

2.1 The homomorphisms $\lambda_k:A\to\mathbb C^\times$, $k\in\mathbb Z$, defined by $\lambda_k(r^j):=\zeta^{jk}$, are well defined because $\zeta^n=1$, and $\lambda_k(r^{j+l})=\zeta^{(j+l)k}=\lambda_k(r^j)\lambda_k(r^l)$; for $0\le k<n$ they are pairwise distinct, since $\zeta^k=\lambda_k(r)\ne\lambda_{k'}(r)=\zeta^{k'}$ for $k\ne k'$ by [F11]. Conversely, if $\lambda:A\to\mathbb C^\times$ is any homomorphism then $\lambda(r)^n=\lambda(r^n)=1$, so by [F11] there is $k$ with $\lambda(r)=\zeta^k$, whence $\lambda(r^j)=\lambda(r)^j=\zeta^{jk}=\lambda_k(r^j)$ for all $j$ and $\lambda=\lambda_k$. Hence $$\operatorname{Irr}(A)=\{\lambda_k:0\le k<n\}$$ consists of exactly $n$ distinct linear characters by step 1.2, and $\lambda_k=\lambda_{k'}$ exactly when $k\equiv k'\pmod n$. [F11, step 1.1, step 1.2]

2.2 The claim that $D_n$ is supersolvable also uses a genuine normal series with prime-order factors. Write $n=p_1\cdots p_t$ with primes repeated according to multiplicity and let $A_i$ be the unique subgroup of the cyclic group $A$ of order $p_1\cdots p_i$, with $A_0=1$ and $A_t=A$. Each $A_i$ is characteristic in $A$ and therefore normal in $D_n$ because $A\trianglelefteq D_n$ by step 1.1; each $A_i/A_{i-1}$ has prime order $p_i$, and $D_n/A$ has order two. Hence $1=A_0\triangleleft\cdots\triangleleft A_t=A\triangleleft D_n$ is a normal prime-factor series, including $n=1$ when $t=0$, as required by [[thm-supersolvable-groups-are-m-groups]]. [F1, step 1.1]

3.1 For each $k$ the conjugate ${}^s\lambda_k$ is $\lambda_{-k}$: by [F3] and the inversion action of step 1.1, $({}^s\lambda_k)(r^j)=\lambda_k(s^{-1}r^js)=\lambda_k(r^{-j})=\zeta^{-jk}=\lambda_{-k}(r^j)$ for all $j$, so the two homomorphisms of $A$ agree on the generator $r$ of $A$. By step 2.1 the orbit of $\lambda_k$ under the action of $G$ on $\operatorname{Irr}(A)$ is therefore $\{\lambda_k,\lambda_{-k}\}$, of size $1$ exactly when $k\equiv-k\pmod n$. [F3, step 1.1, step 2.1]

3.2 The restriction of $\chi$ to the normal subgroup $A$ is a nonzero finite-dimensional $A$-module, so it has an irreducible $A$-submodule, whose character is some $\lambda_k\in\operatorname{Irr}(A)$ by step 2.1; this $\lambda_k$ occurs in $\operatorname{Res}_A^G\chi$, that is, $\chi\in\operatorname{Irr}(G\mid\lambda_k)$ in the notation of [F3]. [F3, step 1.2, step 2.1, given]

4.1 Fix $k$. By [F3] the inertia group $I:=I_G(\lambda_k)$ contains $A$ and is contained in $G$; by [F6] applied to $A\le I\le G$ one has $2=[G:A]=[G:I][I:A]$, so $[I:A]\in\{1,2\}$ and $I=A$ or $I=G$. By steps 1.1 and 3.1 the equality $I=G$ holds exactly when $s\in I$, i.e. exactly when $\lambda_k=\lambda_{-k}$, which by step 2.1 is exactly the condition $n\mid2k$; equivalently $\lambda_k(r)^2=1$. Hence the number of $s$-fixed characters of $A$ is the number of solutions of $2k\equiv0\pmod n$, which by [F12] (with $a=2$, $b=0$) is $$f=\gcd(2,n).$$ [F3, F6, F12, step 1.1, step 2.1, step 3.1]

5.1 Case $I_G(\lambda_k)=A$. By [F4] applied to $N=A$ and $\theta=\lambda_k$, the irreducible characters of $G$ lying over $\lambda_k$ are exactly the $\operatorname{Ind}_A^G\psi$ with $\psi\in\operatorname{Irr}(A\mid\lambda_k)$. Every $\psi\in\operatorname{Irr}(A)$ is linear by step 1.2, so $\operatorname{Res}_A^A\psi=\psi$ occurs in itself, and $\psi$ lies over $\lambda_k$ exactly when $\psi=\lambda_k$, by the distinctness in step 2.1. Hence $\chi=\operatorname{Ind}_A^G\lambda_k$ with $\lambda_k$ linear: $\chi$ is monomial by [F8], and $\chi(1)=[G:A]\lambda_k(1)=2$ by [F7] and step 1.1. [F4, F7, F8, step 1.1, step 1.2, step 2.1, step 3.2, step 4.1]

5.2 Case $I_G(\lambda_k)=G$: then $\lambda_k$ is $s$-fixed. By [F5] with $I=G$, $\operatorname{Res}_A^G\chi=e\,\lambda_k$ for the positive integer $e=\chi(1)/[G:G]\lambda_k(1)=\chi(1)$, that is, $\chi(a)=\chi(1)\lambda_k(a)$ for all $a\in A$; and by step 4.1 the $s$-fixedness says $\lambda_k(r)^2=1$, hence $\lambda_k(r^2)=1$ and $\lambda_k(a)^2=1$ for every $a\in A$. [F3, F5, step 3.1, step 4.1]

6.1 Put $K:=\ker\lambda_k\le A$. Then $K$ is normal in $G$: for $a\in K$ and $g\in G$ one has $\lambda_k(g^{-1}ag)=\lambda_k(a)=1$, because $I_G(\lambda_k)=G$ fixes $\lambda_k$, so $g^{-1}ag\in K$. Moreover $K\le\ker\chi$: for $a\in K$ the formula of step 5.2 gives $\chi(a)=\chi(1)\lambda_k(a)=\chi(1)$, so $a\in\ker\chi$ by [F9]. [F3, F9, step 4.1, step 5.2]

6.2 For example, when $n=4$ the subgroup $H=\langle r^2,s\rangle\cong C_2\times C_2$ is normal of index two in $D_4$ and differs from $A=\langle r\rangle$. Define its linear character $\nu$ by $\nu(r^2)=-1$ and $\nu(s)=1$. Conjugation by $r$ sends $s$ to $r^2s$, so ${}^r\nu(s)=\nu(r^{-1}sr)=\nu(r^2s)=-1\ne\nu(s)$ and $I_{D_4}(\nu)=H$. Since $H$ is abelian, its only irreducible character lying over $\nu$ is $\nu$ itself; [F4] therefore makes $\operatorname{Ind}_H^{D_4}\nu$ an irreducible character of degree $[D_4:H]=2$ by [F7]. Thus the degree-two character of $D_4$ has an inducing subgroup other than $A$. [F4, F7, step 1.1, step 5.1]

7.1 In the quotient $\bar G:=G/K$ the images $\bar r,\bar s$ generate $\bar G$ (they are the images of the generators $r,s$ of $G$), and they commute: $\bar r^2=\overline{r^2}=\bar 1$ because $r^2\in K$ by step 5.2, likewise $\bar s^2=\bar 1$, and $\bar s\bar r\bar s^{-1}=\overline{srs^{-1}}=\overline{r^{-1}}=\bar r^{-1}=\bar r$, so $\bar s\bar r=\bar r\bar s$. A group generated by two commuting elements is abelian, so $\bar G$ is a finite abelian group. [step 1.1, step 5.2, step 6.1]

8.1 Let $\rho$ be a representation affording $\chi$, so $\ker\rho=\ker\chi$ by [F9] and $K\subseteq\ker\rho$ by step 6.1. By [F10] the representation $\rho$ factors through $\bar G=G/K$ and $V$ stays irreducible over $\bar G$; so $\chi(1)=\dim V=\psi(1)$ for some $\psi\in\operatorname{Irr}(\bar G)$. Since $\bar G$ is finite abelian by step 7.1 and $\mathbb C$ is a splitting field, [F2] gives $\psi(1)=1$, hence $\chi(1)=1$: in this case $\chi$ is a linear character of $G$. By step 1.3 $\chi$ is monomial, and since $\chi(1)=1$ and $\chi\in\operatorname{Irr}(G\mid\lambda_k)$ with $\lambda_k$ of degree $1$, its restriction is $\operatorname{Res}_A^G\chi=\lambda_k$ (a degree-$1$ character occurring in a degree-$1$ character), so $\chi$ **extends** $\lambda_k$. [F2, F9, F10, step 1.3, step 2.1, step 3.2, step 5.2, step 6.1, step 7.1]

9.1 The linear characters of $G$ are exactly the $2f$ extensions of the $f$ $s$-fixed characters of $A$ found in step 4.1. Indeed, if $\lambda_k$ is $s$-fixed, i.e. $\lambda_k(r)^2=1$ by step 4.1, then for $\varepsilon\in\{1,-1\}$ the formula $$\chi_{k,\varepsilon}(r^js^m):=\lambda_k(r)^j\varepsilon^m\qquad(0\le j<n,\ m\in\{0,1\})$$ is well defined by the uniqueness of the normal form [F1], and it is multiplicative: by [F1] the product of $r^js^m$ and $r^{j'}s^{m'}$ is $r^{j+(-1)^mj'}s^{m+m'}$, and $\chi_{k,\varepsilon}$ of that product is $\lambda_k(r)^{j}\bigl(\lambda_k(r)^{(-1)^m}\bigr)^{j'}\varepsilon^{m+m'}$, which equals $\lambda_k(r)^j\varepsilon^m\cdot\lambda_k(r)^{j'}\varepsilon^{m'}$ because $\lambda_k(r)^{-j'}=\lambda_k(r)^{j'}$ and $\varepsilon^2=1$; so $\chi_{k,\varepsilon}$ is a linear character with $\operatorname{Res}_A^G\chi_{k,\varepsilon}=\lambda_k$ and $\chi_{k,\varepsilon}(s)=\varepsilon$, and $\chi_{k,1}\ne\chi_{k,-1}$. Conversely a linear character $\chi$ of $G$ restricts to an $s$-fixed $\lambda_k$ by step 2.1, since $\lambda_k(r)=\chi(r)=\chi(srs^{-1})=\chi(r)^{-1}$, and $\chi$ is determined by $\lambda_k$ together with $\chi(s)\in\{1,-1\}$ (as $\chi(s)^2=\chi(s^2)=1$), hence equals $\chi_{k,\varepsilon}$ for one $\varepsilon$; by step 8.1 every linear character arises in this way from an $s$-fixed $\lambda_k$. Distinct pairs $(k,\varepsilon)$ give distinct characters, because their restrictions to $A$ differ or their values at $s$ differ, so there are exactly $2f$ linear characters in total. [F1, step 1.1, step 2.1, step 4.1, step 8.1]

9.2 Every $\chi\in\operatorname{Irr}(G)$ is monomial: if $I_G(\lambda_k)=A$ it is $\operatorname{Ind}_A^G\lambda_k$ by step 5.1, and if $I_G(\lambda_k)=G$ it is linear by step 8.1, hence monomial by step 1.3. Therefore $D_n=\operatorname{Dih}(C_n)$ is an $M$-group by [F8]. [F8, step 1.3, step 5.1, step 8.1, given]

10.1 The degree-$2$ irreducible characters are exactly the characters of step 5.1, that is, the $\operatorname{Ind}_A^G\lambda_k$ for $\lambda_k$ that is not $s$-fixed. Each such $\lambda_k$ has orbit $\{\lambda_k,\lambda_{-k}\}$ of size two by step 3.1, distinct orbits give disjoint sets $\operatorname{Irr}(G\mid\lambda_k)$ by [F4], and by step 4.1 every orbit of size two arises from a character that is not $s$-fixed. Since by step 4.1 exactly $f$ of the $n$ characters of $A$ are $s$-fixed and the remaining $n-f$ split into two-element orbits, there are exactly $\tfrac{n-f}{2}$ irreducible characters of degree $2$, each induced from the cyclic index-two subgroup $A$; the remaining irreducible characters are the $2f$ linear ones of step 9.1. This constructs an inducing subgroup for every irreducible character without asserting that the subgroup is unique. [F4, step 3.1, step 4.1, step 5.1, step 9.1]



11.1 The degenerate cases are covered by the same statements. For $n=1$ the group is $G\cong C_2$ by [F1], $f=\gcd(2,1)=1$ and $\tfrac{n-f}{2}=0$, and step 9.1 returns the two linear characters of $C_2$ and no character of degree $2$; for $n=2$ one has $G\cong C_2\times C_2$ by [F1], $f=\gcd(2,2)=2$ and $\tfrac{n-f}{2}=0$, and step 9.1 returns all four linear characters of $C_2\times C_2$, again with no character of degree $2$. Both agree with steps 9.2 and 10.1, since in these cases every irreducible character is linear and hence monomial. [F1, step 1.1, step 4.1, step 9.1, step 9.2, step 10.1]

12.1 The example is verified: for every $n\ge1$ each irreducible complex character of $D_n=\operatorname{Dih}(C_n)$ is either a linear character extending an $s$-fixed linear character of the cyclic subgroup $A=\langle r\rangle$ (the $2f$ characters of step 9.1) or the monomial character $\operatorname{Ind}_A^{D_n}\lambda$ of a linear character $\lambda$ of $A$ that is not $s$-fixed, of degree $2$ (the $\tfrac{n-f}{2}$ characters of step 10.1); in either case it is monomial, so $D_n$ is an $M$-group, with $f=\gcd(2,n)$ and including the degenerate cases $n=1,2$. [step 8.1, step 9.1, step 9.2, step 10.1, step 11.1] ∎
