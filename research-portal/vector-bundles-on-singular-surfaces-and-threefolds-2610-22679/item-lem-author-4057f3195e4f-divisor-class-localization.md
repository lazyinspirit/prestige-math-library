---
title: Localization of a presented divisor class group
status: published
research_item: lem-author-4057f3195e4f-divisor-class-localization
dependency_level: 1
---

PDF p. 13: Divisibility of the normalization Picard group

## Prerequisites

- [lem-author-4057f3195e4f-free-boundary](item-lem-author-4057f3195e4f-free-boundary)
- [lem-author-4057f3195e4f-quotient-restriction](item-lem-author-4057f3195e4f-quotient-restriction)
- [math:def-group](https://alphabetamath.cc/item/def-group)
- [math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism)
- [math:def-subgroup](https://alphabetamath.cc/item/def-subgroup)
- [math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group)
- [math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism)
- [math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection)
- [math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal)


## Statement
Let $S$ be a set, $B\subseteq S$, $K$ an abelian group, and $d:K\to\mathbb Z^{(S)}$ a homomorphism. Let $r$ be restriction to $S\setminus B$ and put $d'=r\circ d$. Then the natural sequence $\mathbb Z^{(B)}\to\operatorname{coker}(d)\to\operatorname{coker}(d')\to0$ is exact. Here $\operatorname{coker}(d)$ denotes $\mathbb Z^{(S)}/d(K)$, and the first map extends by zero and passes to the quotient.

## Facts & Assumptions

[F1] For any set $T$, $\mathbb Z^{(T)}$ is the abelian group of finitely supported functions $T\to\mathbb Z$ with pointwise addition. Extension by zero $i:\mathbb Z^{(B)}\to\mathbb Z^{(S)}$ and restriction $r:\mathbb Z^{(S)}\to\mathbb Z^{(S\setminus B)}$ are homomorphisms, $r$ is surjective, and $\ker r=\operatorname{im}i$ ([lem-author-4057f3195e4f-free-boundary](item-lem-author-4057f3195e4f-free-boundary)).

[F2] A surjective homomorphism $r:A\to D$ of abelian groups induces a surjection $A/P\to D/r(P)$ with kernel $(\ker r+P)/P$ for every subgroup $P$ ([lem-author-4057f3195e4f-quotient-restriction](item-lem-author-4057f3195e4f-quotient-restriction)). Its construction supplies these quotient groups and the well-defined homomorphism $a+P\mapsto r(a)+r(P)$. Here $\ker r+P=\{h+p:h\in\ker r,\ p\in P\}$, and its quotient by $P$ is viewed as the subgroup of $A/P$ represented by these elements.

[F3] We use abelian groups in additive notation ([math:def-group](https://alphabetamath.cc/item/def-group), Definition, axioms G1--G3 and commutativity). A group homomorphism is an additive map; composites of group homomorphisms are homomorphisms ([math:def-group-homomorphism](https://alphabetamath.cc/item/def-group-homomorphism), Definition, group clause H1 and composition paragraph).

[F4] A subgroup contains the identity and is closed under addition and additive inverses ([math:def-subgroup](https://alphabetamath.cc/item/def-subgroup), Definition, S1--S3). The image of any group homomorphism is a subgroup of its target ([math:thm-image-subgroup-and-kernel-normal](https://alphabetamath.cc/item/thm-image-subgroup-and-kernel-normal), Statement, image assertion).

[F5] Quotients use cosets with induced addition: $(a+N)+(b+N)=(a+b)+N$ ([math:def-quotient-group](https://alphabetamath.cc/item/def-quotient-group), Definition, in additive notation). In the abelian-group situation of [F2], that result supplies the well-defined quotient groups and their operations.

[F6] For an additive homomorphism $u:G\to H$, $\ker u=\{g\in G:u(g)=0_H\}$ and $\operatorname{im}u=\{u(g):g\in G\}$ ([math:def-kernel-and-image-of-group-homomorphism](https://alphabetamath.cc/item/def-kernel-and-image-of-group-homomorphism), Definition). Surjectivity means that every target element has a preimage ([math:def-injection-surjection-bijection](https://alphabetamath.cc/item/def-injection-surjection-bijection), Definition).

**Given:** The data in the statement, with the finite-support groups and maps of [F1]. Write $A=\mathbb Z^{(S)}$, $D=\mathbb Z^{(S\setminus B)}$, $P=d(K)=\{d(k):k\in K\}$ and $P'=d'(K)$. Thus $\operatorname{coker}(d)=A/P$ and $\operatorname{coker}(d')=D/P'$.

For a subgroup $N$ of an additive group $G$, write $g+N=\{g+n:n\in N\}$. The quotient map $q:A\to A/P$ sends $a$ to $a+P$. The arrows in the stated sequence are $\alpha=q\circ i$, $\beta(a+P)=r(a)+P'$, and the unique map to $0$, where $0$ is the group with one element. Exactness here means $\operatorname{im}\alpha=\ker\beta$ and $\beta$ is surjective.

**Goal:** Establish that these quotient groups and arrows are well-defined and prove the stated exactness.

## Proof

1.1 By [F1] and [F3], $d'=r\circ d$ is a homomorphism, and [F4] gives $P\le A$. Also $r(P)=\{r(d(k)):k\in K\}=P'$. Apply [F2] with these $A,D,P$ and $r$: it supplies the quotient groups $A/P$ and $D/P'$, and the well-defined surjective homomorphism $\beta:A/P\to D/P'$ with kernel $(\ker r+P)/P$. This is precisely the claimed map of cokernels. The quotient operation in [F5] gives $q(a+b)=(a+b)+P=(a+P)+(b+P)$, so $q$ is a homomorphism. Hence $\alpha=q\circ i$ is a homomorphism by [F1] and [F3]; its formula is extension by zero followed by passage to the quotient. [F1, F2, F3, F4, F5, F6, given, algebra]

2.1 By [F1] and the kernel description in step 1.1, every element of $\ker\beta$ has a representative $h+p$ with $h=i(f)$ for some $f\in\mathbb Z^{(B)}$ and $p\in P$. Since $P$ is a subgroup, $p+P=P$; thus $(h+p)+P=h+P=\alpha(f)$. Conversely, $\alpha(f)$ is represented by $i(f)+0\in\ker r+P$, so it lies in $\ker\beta$. Consequently $\operatorname{im}\alpha=\ker\beta$. Together with the surjectivity from step 1.1 this proves exactness, including at $D/P'$ since the terminal map has kernel all of that group. This terminal map is a homomorphism because its target has only one element. [F1, F2, F4, F5, F6, given, step 1.1, algebra] ∎
