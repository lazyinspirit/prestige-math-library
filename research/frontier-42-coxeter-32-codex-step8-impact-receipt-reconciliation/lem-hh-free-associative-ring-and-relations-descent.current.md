---
id: lem-hh-free-associative-ring-and-relations-descent
kind: lemma
title: "The free associative R-algebra on a set and descent of relations"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
dependency_level: 0
deps: [def-algebra-over-a-commutative-ring, def-commutative-ring, def-ring-homomorphism, def-free-module-on-a-set-and-standard-basis, thm-universal-property-of-free-modules, thm-universal-property-of-module-tensor-products, def-left-right-and-two-sided-ideal, def-generated-and-principal-ideals, def-quotient-ring, thm-quotient-ring-universal-property, def-tensor-algebra-of-a-vector-space, thm-universal-property-of-the-tensor-algebra, def-the-set-of-functions-from-one-set-to-another, def-natural-numbers, lem-finite-sum-reindexing-and-fubini, lem-nat-add-associative, lem-nat-add-commutative, lem-nat-add-identity, lem-nat-add-cancellative, lem-nat-order-is-membership, thm-nat-linear-order, lem-nat-order-add-compatible]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "George M. Bergman, An Invitation to General Algebra and Universal Constructions (Springer Universitext; author's revised PDF v3.4, April 30, 2020)"
      url: "https://math.berkeley.edu/~gbergman/245/3.4.pdf"
      locator: "§3.4 printed pp. 34–41 (classical word construction), §4.10 printed pp. 74–81 (monoids and free monoids), §4.12 printed pp. 83–91 (rings and free commutative rings), §9.1–9.3 printed pp. 360–379 (free algebras in a variety and left universal constructions)"
    - title: "Keith Conrad, Tensor products (University of Connecticut expository notes, 60 pp.)"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/tensorprod.pdf"
      locator: "Theorem 3.3, printed p. 10: spanning sets of tensor products (the elementary-tensor spanning used for the word-basis multiplication)"
verification:
  precheck: pass
---

## Statement

Let $R$ be a commutative ring and $S$ a set. There is a unital associative $R$-algebra $R\langle S\rangle$, the **free associative $R$-algebra on $S$**, whose underlying $R$-module is free on the set of finite words in $S$ (including the empty word), with product given on words by concatenation and extended $R$-bilinearly.

1. **Universal property.** For every $R$-algebra $A$ ([[def-algebra-over-a-commutative-ring]]) and every map $S\to A$ there is a unique unital $R$-algebra homomorphism $R\langle S\rangle\to A$ extending it. When $R=k$ is a field and $S$ indexes a basis of a vector space $V$, $R\langle S\rangle$ reproduces the published tensor algebra $T(V)$ ([[def-tensor-algebra-of-a-vector-space]], [[thm-universal-property-of-the-tensor-algebra]]).
2. **Two-sided ideal description.** For $E\subseteq R\langle S\rangle$ the two-sided ideal $(E)$ ([[def-generated-and-principal-ideals]]) is the set of finite sums $\sum_sa_se_sb_s$ with $a_s,b_s\in R\langle S\rangle$ and $e_s\in E$.
3. **Quotient universal property.** If $\varphi:R\langle S\rangle\to A$ is an $R$-algebra homomorphism killing $E$, then $\varphi$ factors uniquely through the quotient $R\langle S\rangle/(E)$ ([[thm-quotient-ring-universal-property]]); the quotient is the presented $R$-algebra with generators $S$ and relations $E$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a set $S$.

[F1] A natural number is a von Neumann natural $n=\{0,\dots,n-1\}$, so a function $n\to S$ is a finite list of elements of $S$; function sets, restrictions and functions extended by one value are available ([[def-natural-numbers]], [[def-the-set-of-functions-from-one-set-to-another]]).

[F2] Addition of natural numbers satisfies $m+0=m$ and $m+\sigma(n)=\sigma(m+n)$, is associative and commutative, is cancellative, has $0$ as two-sided identity, and is compatible with the order; $\mathbb N$ is trichotomously linearly ordered and $i<n$ means $i\in n$ ([[lem-nat-add-associative]], [[lem-nat-add-commutative]], [[lem-nat-add-identity]], [[lem-nat-add-cancellative]], [[lem-nat-order-is-membership]], [[thm-nat-linear-order]], [[lem-nat-order-add-compatible]]).

[F3] The free $R$-module on a set $X$ is $R^{(X)}=\bigoplus_{x\in X}R$, with standard basis $e_x$ and unique finitely supported coefficient families; a set map from a basis extends uniquely to an $R$-linear map ([[def-free-module-on-a-set-and-standard-basis]], [[thm-universal-property-of-free-modules]]).

[F4] Balanced pairings induce unique group homomorphisms out of the tensor product with the prescribed values on elementary tensors ([[thm-universal-property-of-module-tensor-products]]).

[F5] An $R$-algebra is a unital ring with a central unital structure map, and algebra homomorphisms are unital ring homomorphisms over it ([[def-algebra-over-a-commutative-ring]], [[def-commutative-ring]], [[def-ring-homomorphism]]).

[F6] Two-sided ideals are additive subgroups closed under both one-sided multiplications; $(E)$ is the intersection of all two-sided ideals containing $E$ ([[def-left-right-and-two-sided-ideal]], [[def-generated-and-principal-ideals]]).

[F7] A ring homomorphism whose kernel contains a two-sided ideal $I$ factors uniquely through $R/I$ ([[thm-quotient-ring-universal-property]], [[def-quotient-ring]]).

[F8] The tensor algebra $T(V)=\bigoplus_{n\ge0}V^{\otimes n}$ of a $k$-vector space is a unital associative $k$-algebra, and every linear map $V\to A$ into a unital associative $k$-algebra extends uniquely to a unital $k$-algebra homomorphism $T(V)\to A$; the degree-one inclusion is $j:V\to T(V)$ ([[def-tensor-algebra-of-a-vector-space]], [[thm-universal-property-of-the-tensor-algebra]]).

[F9] Finite sums satisfy reindexing and Fubini ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 Words and concatenation. Call a **word** in $S$ a function $w:n\to S$ with $n\in\mathbb N$ its **length**, and write $W:=\bigcup_{n\in\mathbb N}S^n$ for the set of words; the **empty word** is the unique function $0\to S$ (there is exactly one, by [F1]). If $w:m\to S$ and $v:n\to S$, define the **concatenation** $wv:m+n\to S$ by recursion on $n$: $wv:=w$ when $n=0$; and when $n=\sigma(n')$, write $v'$ for the restriction of $v$ to $n'$, $a:=v(n')$ for the last letter, and define $wv$ as the function $m+\sigma(n')=\sigma(m+n')$ extending $wv'$ by the value $a$ at the new index $m+n'$ (the case split uses that every index $i<n$ satisfies $i<n-1$ or $i=n-1$ by trichotomy [F2], and uniqueness of the decomposition $i=m+j$ for $m\le i$ follows from commutativity and cancellation [F2]). Unwinding the two recursive clauses, an index of $wv$ lying in the first $m$ positions carries the corresponding letter of $w$ and an index $i=m+j$ with $j<n$ carries $v(j)$; associativity $(wv)u=w(vu)$ is then proved by induction on the length of $u$: for $u$ of length $0$ both sides are $wv$, and for $u$ with last letter $a$ and predecessor $u'$ one has $w(vu)=w((vu')a)=(w(vu'))a=((wv)u')a=(wv)u$ by the induction hypothesis and the defining clause, the domains being equal by associativity of addition [F2]; the empty word is neutral since $w\varnothing=w$ by definition and $\varnothing v=v$ by the same induction. [given, F1, F2, algebra, construct]

2.1 The algebra $R\langle S\rangle$. Let $F:=R^{(W)}$ be the free $R$-module on the set $W$ of words, with basis $(u_w)_{w\in W}$ ([F3]), and let $\mu:F\otimes_RF\to F$ be the group homomorphism obtained from the $R$-bilinear (hence balanced) pairing $(\sum_wa_wu_w,\sum_vb_vu_v)\mapsto\sum_{w,v}a_wb_vu_{wv}$ by [F4] and [F9]. Define $fg:=\mu(f\otimes g)$; the displayed formula makes this multiplication $R$-bilinear and gives $u_wu_v=u_{wv}$. Its associativity follows from associativity of concatenation of step 1.1 after expanding finite sums by bilinearity, and $u_{\varnothing}$ is a two-sided identity because $\varnothing$ is neutral for concatenation; hence $F$ with this multiplication is a unital associative ring, and the map $R\to F$, $r\mapsto ru_{\varnothing}$, is a central unital structure map because scalars commute with the basis, so $R\langle S\rangle:=F$ is a unital associative $R$-algebra [F5] with product given on words by concatenation. [step 1.1, F3, F4, F5, F9, algebra]

3.1 Ideal description. Let $R\langle S\rangle$ be the $R$-algebra of step 2.1 and let $E\subseteq R\langle S\rangle$; let $J$ be the set of finite sums $\sum_sa_se_sb_s$ with $a_s,b_s\in R\langle S\rangle$, $e_s\in E$. The empty sum shows $0\in J$; a sum of two such finite sums is again one, and $-aeb=(-a)eb$, so $J$ is an additive subgroup; for $c\in R\langle S\rangle$ one has $c(aeb)=(ca)eb$ and $(aeb)c=a e(bc)$, so $J$ is a two-sided ideal [F6]. It contains $E$, since $e=1e1$, and every two-sided ideal $I\supseteq E$ contains every $aeb$ with $e\in E$ by the left and right ideal properties, hence contains all finite sums in $J$; therefore $J$ is a two-sided ideal containing $E$ and contained in every such ideal, so $J=(E)$ by the description of $(E)$ as the intersection [F6]. [step 2.1, given, F5, F6, algebra]

3.2 Universal property. Let $A$ be an $R$-algebra and $\varphi_0:S\to A$ a map. Define $\widehat\varphi_0(u_w):=\varphi_0(w(0))\varphi_0(w(1))\cdots\varphi_0(w(n-1))\in A$ for a word $w:n\to S$ of length $n$, the empty product being $1_A$, and extend $R$-linearly to $\widehat\varphi_0:R\langle S\rangle\to A$ by [F3]. Then $\widehat\varphi_0(u_{wv})=\widehat\varphi_0(u_w)\widehat\varphi_0(u_v)$ by the defining concatenation rule and induction on the length, and $\widehat\varphi_0$ is unital and $R$-linear, so it is a unital $R$-algebra homomorphism [F5] extending $\varphi_0$ on the words of length one. If $\psi$ is any unital $R$-algebra homomorphism extending $\varphi_0$, then $\psi(u_w)=\varphi_0(w(0))\cdots\varphi_0(w(n-1))=\widehat\varphi_0(u_w)$ for every word, by multiplicativity and induction on the length, so $\psi=\widehat\varphi_0$ on a spanning set and hence everywhere: the extension is unique. [step 2.1, F3, F5, algebra]

4.1 Quotient universal property. Let $I:=(E)$ and let $\varphi:R\langle S\rangle\to A$ be an $R$-algebra homomorphism killing $E$, so $E\subseteq\ker\varphi$ and hence $I=(E)\subseteq\ker\varphi$ by step 3.1 since the kernel of a ring homomorphism is a two-sided ideal. By [F7] there is a unique ring homomorphism $\bar\varphi:R\langle S\rangle/I\to A$ with $\bar\varphi(x+I)=\varphi(x)$; it is unital and respects the structure maps, hence is an $R$-algebra homomorphism, so it is the unique $R$-algebra factorization, and $R\langle S\rangle/(E)$ is the presented $R$-algebra on generators $S$ and relations $E$. [step 2.1, step 3.1, F5, F7, algebra]

4.2 Tensor algebra. Now let $R=k$ be a field and let $S$ index a basis of a $k$-vector space $V$, so $e:S\to V$, $s\mapsto e_s$ is a bijection onto a basis. The map $S\to T(V)$, $s\mapsto j(e_s)$, extends by step 3.2 to a unital $k$-algebra homomorphism $\Theta:k\langle S\rangle\to T(V)$, and the linear map $V\to k\langle S\rangle$ with $e_s\mapsto u_s$ (existing by [F3]) extends by [F8] to a unital $k$-algebra homomorphism $\Xi:T(V)\to k\langle S\rangle$. The composite $\Xi\Theta$ fixes every one-letter word $u_s$, hence is the identity by the uniqueness in step 3.2; and $\Theta\Xi$ restricts to the identity on $V$, so by the uniqueness in [F8] it is the identity on $T(V)$. Thus $\Theta$ is an isomorphism of unital $k$-algebras and $k\langle S\rangle$ reproduces $T(V)$. [step 3.2, F3, F8, algebra]

5.1 Collecting: step 1.1 constructs the words and their associative concatenation, step 2.1 the $R$-algebra $R\langle S\rangle$ free on the words on which the product is concatenation, step 3.2 its universal property, step 4.2 the tensor-algebra identification for $R=k$ a field, step 3.1 the two-sided ideal description and step 4.1 the quotient universal property, so all three parts of the claim hold. [step 1.1, step 2.1, step 3.1, step 3.2, step 4.1, step 4.2] ∎
