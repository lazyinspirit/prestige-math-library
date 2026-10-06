---
id: lem-smooth-multiplicative-type-groups-are-generated-by-their-finite-subgroups
kind: lemma
title: A smooth group of multiplicative type is the only closed subscheme containing all its finite subgroups
dependency_level: 1
deps:
  - cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules
  - cor-tori-correspond-to-torsion-free-character-lattices
  - def-axiom-of-choice
  - def-diagonalizable-group-and-character-module
  - def-reduction-of-scheme
  - def-smooth-morphism-schemes
  - lem-regular-local-domain-induction
  - lem-smooth-finite-type-schemes-have-schematically-dense-rational-points
  - thm-affine-fibre-product-tensor-ring
  - thm-multiplicative-type-groups-and-galois-character-modules
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Proposition 12.3, printed p. 231; Theorem 12.32, printed p. 242
    - title: J. S. Milne, Algebraic Groups (v2.00, 20 December 2015 author-hosted preliminary edition)
      url: https://www.jmilne.org/math/CourseNotes/iAG200.pdf
      locator: Proposition 14.33, printed p. 237
---
## Statement

Assume the Axiom of Choice. Let $k$ be an algebraically closed field and let $G$ be a smooth algebraic group of multiplicative type over $k$, say $G=D(M)$ with $M$ finitely generated. Put $\mathcal N_k=\{n\ge1:n\cdot1_k\ne0\}$: this is all positive integers in characteristic zero and the positive integers prime to $p$ in characteristic $p>0$. For every integer $n\ge1$ let $G_n=\ker(n\cdot:G\to G)$ be the kernel of multiplication by $n$; it is a finite closed subgroup scheme. If $Z\subseteq G$ is a closed subscheme with
$$Z(k)\supseteq\bigcup_{n\in\mathcal N_k}G_n(k),$$
then $Z=G$.

The Axiom of Choice is inherited from the classification of groups of multiplicative type and from the schematically-dense-points lemma.

## Facts & Assumptions
**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth finite-type group scheme $G$ of multiplicative type over $k$, and a closed subscheme $Z\subseteq G$ containing the $k$-points of all $G_n$ with $n\in\mathcal N_k$.

[F1] Assume AC. Over an algebraically closed field, $G\mapsto X^*(G)$ is a contravariant equivalence between finite-type groups of multiplicative type and finitely generated abelian groups, and the inverse sends $M$ to $D(M)$; for $k$ algebraically closed the Galois action is trivial, so $G\cong D_k(M)=\operatorname{Spec}k[M]$ with $M=X^*(G)$ finitely generated. ([[thm-multiplicative-type-groups-and-galois-character-modules]])

[F2] The group algebra $k[M]$ has $k$-basis the group-like elements $e_m$ ($m\in M$) with $e_me_n=e_{m+n}$, and for every $k$-algebra $R$ one has $D_k(M)(R)=\operatorname{Hom}(M,R^\times)$. ([[def-diagonalizable-group-and-character-module]])

[F3] Every finitely generated abelian group decomposes as $\mathbb Z^r\oplus\mathbb Z/(n_1)\oplus\cdots\oplus\mathbb Z/(n_t)$ with $1<n_1\mid\cdots\mid n_t$. ([[cor-fundamental-theorem-of-finitely-generated-abelian-groups-from-pid-modules]])

[F4] If $B_1,B_2$ are commutative $k$-algebras and $M=M_1\oplus M_2$, then $k[M]\cong k[M_1]\otimes_kk[M_2]$ by $e_{(m_1,m_2)}\leftrightarrow e_{m_1}\otimes e_{m_2}$; since $\operatorname{Spec}$ turns tensor products into fibre products, $D_k(M)\cong D_k(M_1)\times_kD_k(M_2)$. ([[def-diagonalizable-group-and-character-module]], [[thm-affine-fibre-product-tensor-ring]])

[F5] Smoothness of $X\to\operatorname{Spec}k$ at a point $x$ includes geometric regularity of the fibre; the fibre of $G\to\operatorname{Spec}k$ is $G$ itself, so for every $x\in G$ the local ring $\mathcal O_{G,x}$ is regular, hence a domain by [F6]; a scheme all of whose local rings are reduced is reduced. ([[def-smooth-morphism-schemes]], [[def-reduction-of-scheme]])

[F6] Assume AC. Every regular local ring is an integral domain. ([[lem-regular-local-domain-induction]])

[F7] Assume AC. If $X$ is reduced finite type over a field with no nontrivial finite separable extension and $S\subseteq X(k)$ is dense, then every closed subscheme $Z\subseteq X$ with $Z(k)\supseteq S$ equals $X$. ([[lem-smooth-finite-type-schemes-have-schematically-dense-rational-points]], [[cor-tori-correspond-to-torsion-free-character-lattices]])

## Proof

**Given:** The Axiom of Choice, an algebraically closed field $k$, a smooth finite-type group $G$ of multiplicative type over $k$, and a closed subscheme $Z\subseteq G$ with $Z(k)\supseteq G_n(k)$ for every $n\in\mathcal N_k$.

1.1 By [F1] write $G=D_k(M)$ with $M$ finitely generated, so $\mathcal O(G)=k[M]$. By [F3] fix the decomposition $M=\mathbb Z^r\oplus\mathbb Z/(n_1)\oplus\cdots\oplus\mathbb Z/(n_t)$ with $1<n_1\mid\cdots\mid n_t$; write $F=\mathbb Z/(n_1)\oplus\cdots\oplus\mathbb Z/(n_t)$ and $N=n_t$ when $t\ge1$, and $N=1$, $F=0$ when $t=0$. By [F4], applied repeatedly, $k[M]\cong k[\mathbb Z^r]\otimes_kk[F]$ and $G\cong\mathbf G_m^r\times_kD_k(F)$, while by [F2] the group algebra $k[\mathbb Z/(n)]\cong k[u]/(u^n-1)$ and $O(\mathbf G_m)=k[\mathbb Z]$. [F1, F2, F3, F4]

1.2 I claim that $G$ is reduced. By [F5] every local ring $\mathcal O_{G,x}$ is regular, hence a domain by [F6], and therefore reduced; a scheme whose local rings are all reduced is reduced. [F5, F6]

2.1 I claim that no $n_i$ is divisible by $p=\operatorname{char}k$; in characteristic zero this is vacuous, so suppose $p>0$ and suppose $p\mid n_i$ for some $i$; write $n_i=p^vm$ with $v\ge1$ and $p\nmid m$. Then in $k[u]$ one has $u^{n_i}-1=(u^m-1)^{p^v}$, and $u^m-1\ne0$ is a nonzero nilpotent in $k[u]/(u^{n_i}-1)$ because $(u^m-1)^{p^v}=u^{n_i}-1=0$; hence $k[\mathbb Z/(n_i)]$ is not reduced. By [step 1.1], $k[M]\cong k[\mathbb Z^r]\otimes_kk[F]$ and $k[F]$ has $k[\mathbb Z/(n_i)]$ as a tensor factor, so a nonzero nilpotent of $k[\mathbb Z/(n_i)]$ produces a nonzero nilpotent $1\otimes z$ of $k[M]$; this contradicts [step 1.2], since $\mathcal O(G)=k[M]$ reduced means $k[M]$ is reduced. Hence $p\nmid|F|$. [step 1.1, step 1.2, algebra]

3.1 I claim that for every integer $j$ with $N\mid j$ and $j\in\mathcal N_k$ one has $G_j(k)=\mu_j(k)^r\times D_k(F)(k)$, where $D_k(F)(k)=\prod_i\mu_{n_i}(k)$. Indeed $G(k)=\operatorname{Hom}(M,k^\times)\cong(k^\times)^r\times D_k(F)(k)$ by [F2], and $G_j(k)$ is the set of characters $\chi$ of $M$ with $\chi^j=1$, i.e. $\operatorname{Hom}(M/jM,\mu_j(k))$. Since $M/jM\cong(\mathbb Z/j)^r\oplus\bigoplus_i\mathbb Z/\gcd(j,n_i)\cong(\mathbb Z/j)^r\oplus F$, and $\mu_j(k)$ contains all $n_i$-th roots of unity because $n_i\mid j$ and $j\in\mathcal N_k$ with $k$ algebraically closed, this set is $\mu_j(k)^r\times\prod_i\mu_{n_i}(k)$. [F2, step 1.1, step 2.1, algebra]

4.1 I claim that $T:=\bigcup_{j\in\mathcal N_k}G_j(k)$ is dense in $|G|$. By [step 3.1], $T$ contains $\bigl(\bigcup_j\mu_j(k)\bigr)^r\times D_k(F)(k)$, where $j$ runs over the multiples of $N$ in $\mathcal N_k$. The inner union is the set of all roots of unity whose order lies in $\mathcal N_k$: it is infinite, and an infinite subset of $\mathbf G_m(k)=k^\times$ is dense in $\mathbf G_m$ because a nonzero polynomial has finitely many roots; its $r$-fold Cartesian power is dense in $\mathbf G_m^r$: a Laurent polynomial vanishing on that grid is zero, by induction on $r$ and comparison of coefficients after fixing the other variables in the infinite set. Thus $(\bigcup_j\mu_j(k))^r$ is dense in $\mathbf G_m^r$. By [step 2.1] the $n_i$ lie in $\mathcal N_k$, so $k[\mathbb Z/(n_i)]\cong k^{n_i}$ and every point of the finite group $D_k(F)\cong\prod_i\mu_{n_i}$ is a $k$-point, while $G\cong\mathbf G_m^r\times_kD_k(F)$ by [step 1.1]; a product of a dense subset with the full point set of the second factor is dense. Hence $T$ is dense in $|G|$. [step 1.1, step 2.1, step 3.1]

5.1 By [step 4.1] the set $T\subseteq Z(k)$ is dense in the reduced finite-type $k$-scheme $G$, and $k$ is algebraically closed, so [F7] applies with $S=T$ and gives $Z=G$. [F7, step 1.2, step 4.1] ∎ 