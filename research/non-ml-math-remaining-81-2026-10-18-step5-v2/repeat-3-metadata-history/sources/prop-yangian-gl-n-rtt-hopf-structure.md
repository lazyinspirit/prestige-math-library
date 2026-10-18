---
id: prop-yangian-gl-n-rtt-hopf-structure
kind: proposition
title: "The RTT Yangian has its standard Hopf structure"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
deps: [def-yangian-gl-n-rtt-presentation]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "A. I. Molev, M. L. Nazarov, and G. I. Olshanski, Yangians and classical Lie algebras"
      url: "https://arxiv.org/pdf/hep-th/9409025"
      locator: "§§1.11–1.13 and 1.28: RTT automorphisms, the inverse-matrix antipode, and the coproduct proof."
    - title: "F. Loebbert, Lectures on Yangian Symmetry"
      url: "https://arxiv.org/pdf/1606.02947"
      locator: "§3.2, PDF pp. 24–28: coproduct, counit, antipode, and Hopf identities for the Drinfeld Yangian; the local proof fixes the RTT convention directly."
---

## Statement

For the algebra of [[def-yangian-gl-n-rtt-presentation]], the coefficientwise assignments into the ordinary algebraic tensor product

$$\Delta(t_{ij}(u))=\sum_{k=1}^N t_{ik}(u)\otimes t_{kj}(u),\qquad \epsilon(t_{ij}(u))=\delta_{ij},\qquad S(T_0(u))=T_0(u)^{-1}$$

define a coassociative coproduct, counit, and antipode. Thus they make $Y_i(\mathfrak{gl}_N)$ a Hopf algebra. The inverse is the formal matrix inverse at $u=\infty$.

## Facts & Assumptions

**Given:** An integer $N\ge2$, the RTT Yangian presentation, and the proposed maps above.

[F1] [[def-yangian-gl-n-rtt-presentation]]: $T_0(u)=I+O(u^{-1})$ satisfies $R_{12}(u-v)T_1(u)T_2(v)=T_2(v)T_1(u)R_{12}(u-v)$, with proposed coproduct matrix product $\Delta(T_0(u))=T_0^{[1]}(u)T_0^{[2]}(u)$, counit $\epsilon(T_0(u))=I$, and antipode formula $S(T_0(u))=T_0(u)^{-1}$.

## Proof

1.1 Each coefficient of $T^{[1]}(u)T^{[2]}(u)$ is a finite sum: the coefficient of $u^{-n}$ uses only the finitely many pairs of exponents adding to $n$ and the finite index sum $1\le k\le N$. Thus the proposed coproduct lands in the ordinary algebraic tensor product. For two independent Yangian factors, write $T_s^{[r]}$ for the matrix acting on auxiliary leg $s\in\{1,2\}$ and coefficient factor $r\in\{1,2\}$. Then $T_1^{[2]}$ commutes with $T_2^{[1]}$, and $T_1^{[1]}$ commutes with $T_2^{[2]}$, because each pair acts on disjoint tensor factors. Reordering these pairs and applying the RTT relation first in coefficient factor $1$ and then in factor $2$ gives $R_{12}T_1^{[1]}T_1^{[2]}T_2^{[1]}T_2^{[2]}=T_2^{[1]}T_2^{[2]}T_1^{[1]}T_1^{[2]}R_{12}$. The middle matrix product is precisely the RTT relation for $\Delta(T)$, so $\Delta$ preserves the defining relation and extends to a unital algebra homomorphism. [given, F1, algebra]

2.1 Iterating the matrix product yields $(\Delta\otimes\mathrm{id})\Delta(T)=T^{[1]}T^{[2]}T^{[3]}=(\mathrm{id}\otimes\Delta)\Delta(T)$, so the coproduct is coassociative coefficientwise. Substitution $T\mapsto I$ sends the RTT relation to $R=R$, so it defines a unital counit homomorphism; it also gives $(\epsilon\otimes\mathrm{id})\Delta(T)=T=(\mathrm{id}\otimes\epsilon)\Delta(T)$ and $\epsilon(1)=1$. [given, F1, step 1.1, algebra]

2.2 Since $T(u)=I+O(u^{-1})$, recursively solving $T(u)T(u)^{-1}=I$ gives a unique right inverse; solving in the reverse order gives a left inverse, and associativity makes them equal. Each inverse coefficient is a finite polynomial in the coefficients of $T-I$, because only products of at most $n$ positive-degree terms contribute to $u^{-n}$. Write $A=T_1(u)$ and $B=T_2(v)$. In $RAB=BAR$, multiply on the left by $A^{-1}B^{-1}=(BA)^{-1}$ and on the right by $B^{-1}A^{-1}=(AB)^{-1}$ to obtain $A^{-1}B^{-1}R=RB^{-1}A^{-1}$. Define an anti-homomorphism on the free generator algebra by sending the coefficient matrix $T(u)$ entrywise to this inverse matrix. Applying it to the defining RTT relator reverses coefficient multiplication, so its image is $R B^{-1}A^{-1}=A^{-1}B^{-1}R$, exactly the same identity. Hence it preserves the RTT ideal and descends to the quotient, with $S(T(u))=T(u)^{-1}$. [given, F1, step 1.1, algebra]

3.1 The two matrix inverse identities give $\sum_k S(t_{ik}(u))t_{kj}(u)=\delta_{ij}=\sum_k t_{ik}(u)S(t_{kj}(u))$, the left and right antipode identities on generators. For the left identity on a product $xy$, use $\Delta(xy)=\sum x_{(1)}y_{(1)}\otimes x_{(2)}y_{(2)}$ and anti-multiplicativity of $S$ to obtain $\sum S(y_{(1)})S(x_{(1)})x_{(2)}y_{(2)}=\epsilon(x)\sum S(y_{(1)})y_{(2)}=\epsilon(x)\epsilon(y)1$; the right identity follows from $\sum x_{(1)}y_{(1)}S(y_{(2)})S(x_{(2)})$. Induction on word length and linearity extend both identities to the generated algebra, giving $m(S\otimes\mathrm{id})\Delta=\eta\epsilon=m(\mathrm{id}\otimes S)\Delta$. [given, F1, step 1.1, step 2.2, algebra] ∎
