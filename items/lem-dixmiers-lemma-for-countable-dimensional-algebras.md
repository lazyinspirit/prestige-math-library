---
id: lem-dixmiers-lemma-for-countable-dimensional-algebras
kind: lemma
title: "Dixmier's lemma: endomorphisms of a simple module over a countable-dimensional algebra"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [thm-schurs-lemma-for-modules, def-division-ring, def-simple-module, def-endomorphism-ring-of-a-module, def-countable, def-dimension, def-algebraic-and-transcendental-elements, cor-rational-function-field-as-a-fraction-field, thm-simple-transcendental-extension-is-rational-expressions-in-the-generator, def-field-of-fractions, thm-r-uncountable, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, def-universal-enveloping-algebra-as-a-tensor-quotient, thm-the-complex-numbers-are-algebraically-closed, def-complex-numbers-and-arithmetic, thm-product-of-countable, cor-independent-set-is-no-larger-than-a-finite-spanning-set, thm-n-cross-n-countable, lem-subset-of-countable]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: contradiction
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "P. Etingof, Representations of Lie Groups (18.757, MIT OCW 2023 full notes)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Section 7.2, Lemma 7.2 with its proof, printed p.38"
---

## Statement

Let $A$ be a unital $\mathbb C$-algebra which admits a countable
$\mathbb C$-basis, and let $M$ be a simple left $A$-module. Then every
$A$-endomorphism of $M$ is multiplication by a scalar:
$\operatorname{End}_A(M)=\mathbb C\cdot\operatorname{id}_M$. Consequently the
center $Z(A)$ acts on $M$ by scalars and there is a unital $\mathbb C$-algebra
homomorphism $\chi\colon Z(A)\to\mathbb C$ with $zm=\chi(z)m$ for all
$z\in Z(A)$, $m\in M$. In particular this applies to $A=U(\mathfrak g)$ for a
finite-dimensional complex Lie algebra $\mathfrak g$.

## Facts & Assumptions

**Given:** A unital $\mathbb C$-algebra $A$ with a countable $\mathbb C$-basis, a simple left $A$-module $M$, and $D:=\operatorname{End}_A(M)$.

[F1] A nonzero homomorphism between simple modules is an isomorphism, and the endomorphism ring of a simple module is a division ring ([[thm-schurs-lemma-for-modules]], [[def-division-ring]]).

[F2] $D=\operatorname{End}_A(M)$ is a unital ring under pointwise addition and composition, and it is a $\mathbb C$-algebra whose scalars $\lambda\operatorname{id}_M$ are central: $\lambda\operatorname{id}_M$ is $A$-linear because the scalar action of $A$ is $\mathbb C$-linear ([[def-endomorphism-ring-of-a-module]], [[def-division-ring]]).

[F3] $M$ is simple and nonzero, so for every $0\ne v\in M$ the submodule $Av$ is nonzero, hence equal to $M$ ([[def-simple-module]]).

[F4] $\mathbb C$ is algebraically closed, so every nonconstant polynomial in $\mathbb C[t]$ is a product of linear factors; in a division ring a product of nonzero elements is nonzero, so a product of nonzero factors is zero only if one factor is zero ([[thm-the-complex-numbers-are-algebraically-closed]], [[def-division-ring]]).

[F5] The rational function field $\mathbb C(t)=\operatorname{Frac}(\mathbb C[t])$ consists of the fractions $f/g$ with $f,g\in\mathbb C[t]$, $g\ne0$ ([[cor-rational-function-field-as-a-fraction-field]], [[def-field-of-fractions]]).

[F6] If a vector space over a field is spanned by $n$ vectors, then every linearly independent subset is finite with at most $n$ elements ([[cor-independent-set-is-no-larger-than-a-finite-spanning-set]]); $\mathbb N\times\mathbb N\approx\mathbb N$ ([[thm-n-cross-n-countable]]); every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); $\mathbb R$ is uncountable ([[thm-r-uncountable]]) and embeds in $\mathbb C$ as the constant classes, whence $\mathbb C$ is uncountable ([[def-complex-numbers-and-arithmetic]], [[def-countable]]).

[F7] For a finite-dimensional complex Lie algebra $\mathfrak g$ with ordered basis $x_1,\dots,x_r$, the ordered monomials $x_1^{a_1}\cdots x_r^{a_r}$ form a basis of $U(\mathfrak g)$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-universal-enveloping-algebra-as-a-tensor-quotient]]); the set of exponent tuples is a finite product of copies of $\mathbb N$, hence at most countable ([[thm-product-of-countable]], [[def-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 By [F1], $D$ is a division ring. The map $\mathbb C\to D$, $\lambda\mapsto\lambda\operatorname{id}_M$, is an injective unital ring homomorphism onto a central copy of $\mathbb C$ by [F2], so $D$ is a $\mathbb C$-division algebra containing $\mathbb C$ in its center. [F1, F2, given]

1.2 Let $V$ be a $\mathbb C$-vector space spanned by a sequence $b_1,b_2,\dots$ and let $L\subseteq V$ be linearly independent. Then $L$ is at most countable. Indeed, put $V_k=\operatorname{span}(b_1,\dots,b_k)$; the recursive rule that retains $b_i$ exactly when $b_i\notin\operatorname{span}(\text{retained }b_j,\ j<i)$ is a definition by recursion on $i$ and is a canonical ordered basis $(c_1,\dots,c_{d_k})$ of $V_k$ with $d_k\le k$: retained elements are independent and each $b_i$ lies in the span of the retained elements up to $i$. Hence every $v\in V_k$ has a unique coordinate vector in $\mathbb C^{d_k}$. Order $\mathbb C$ by real part and then imaginary part, and $\mathbb C^{d_k}$ lexicographically. Since $V=\bigcup_kV_k$, for $v\in L$ the set of $k$ with $v\in V_k$ is nonempty and $n(v):=\min\{k:v\in V_k\}$ is well defined; let $L_k=\{v\in L:n(v)=k\}$. Each $L_k$ is linearly independent in $V_k$, hence finite of size at most $d_k\le k$ by [F6], so the set $\{w\in L_k:w<v\}$ is finite. Now $f(v):=(n(v),\#\{w\in L_{n(v)}:w<v\})$ lies in $\mathbb N\times\mathbb N$ and is injective: if $n(v)=n(w)$ and the two counts agree, then the coordinate vectors of $v$ and $w$ are not distinct, because if one preceded the other lexicographically the corresponding counts would differ; totality of the lexicographic order gives $v=w$. Thus $L$ injects into the at most countable set $\mathbb N\times\mathbb N$ and is at most countable. [F6, construct]

1.3 For $\mathfrak g$ finite-dimensional, $U(\mathfrak g)$ has a countable $\mathbb C$-basis by [F7]. [F7]

2.1 Since $M$ is a quotient of $A$ as a $\mathbb C$-vector space — the map $a\mapsto av$ is a surjective $\mathbb C$-linear map for any $0\ne v\in M$ by [F3] — it is spanned by the images of a countable basis of $A$. Applying step 1.2 with this spanning sequence, every linearly independent subset of $M$ is at most countable. [F3, step 1.2, given]

2.2 Suppose, for contradiction, that $D\ne\mathbb C$ and choose $x\in D\setminus\mathbb C$; then $x$ is transcendental over $\mathbb C$. For otherwise $p(x)=0$ for a nonzero $p\in\mathbb C[t]$; by [F4] write $p=c\prod_i(t-a_i)$ with $c\ne0$, so $c\prod_i(x-a_i)=0$ and one factor $x-a_i$ is zero, giving $x=a_i\in\mathbb C$, a contradiction. [F4, step 1.1, assume-contra, given]

3.1 Let $x$ be transcendental as in step 2.2. Evaluation $\mathbb C[t]\to D$, $p\mapsto p(x)$, is an injective unital homomorphism whose image is commutative because $x$ commutes with the central copy of $\mathbb C$. Every nonzero $p$ has $p(x)\ne0$ and $D$ is a division ring, so $p(x)$ is a unit; the formula $f/g\mapsto f(x)g(x)^{-1}$ is therefore well defined — two representations of the same fraction cross-multiply, and multiplying the resulting identity by the inverses gives equality — and defines an injective field homomorphism $\mathbb C(t)\to D$ by [F5]. In particular, for $a\in\mathbb C$ the elements $u_a:=(x-a)^{-1}$ exist in $D$. They are $\mathbb C$-linearly independent: if $\sum_i\lambda_iu_{a_i}=0$ with distinct $a_i$, multiplying by $\prod_i(x-a_i)$ gives $p(x)=0$ for $p(t)=\sum_i\lambda_i\prod_{j\ne i}(t-a_j)$; injectivity of $p\mapsto p(x)$ forces $p=0$, and evaluating at $t=a_j$ gives $\lambda_j\prod_{i\ne j}(a_j-a_i)=0$, so $\lambda_j=0$ because the factors $a_j-a_i$ are nonzero. [F5, step 2.2, algebra]

4.1 Fix $0\ne v\in M$. The evaluation map $\operatorname{ev}_v\colon D\to M$, $T\mapsto Tv$, is $\mathbb C$-linear and injective: if $Tv=0$ then $T(av)=a(Tv)=0$ for every $a\in A$ because $T$ is $A$-linear, and $Av=M$ by [F3], so $T=0$. Hence the vectors $(\operatorname{ev}_v(u_a))_{a\in\mathbb C}=((x-a)^{-1}v)_{a\in\mathbb C}$ form a $\mathbb C$-linearly independent subset $S\subseteq M$ by step 3.1. The assignment $a\mapsto(x-a)^{-1}v$ is a bijection $\mathbb C\to S$ — injective because its values are linearly independent — and $\mathbb C$ is uncountable by [F6], so $S$ is uncountable. [F3, F6, step 3.1, algebra]

5.1 Step 2.1 makes every linearly independent subset of $M$, in particular $S$, at most countable, while step 4.1 makes $S$ uncountable; this contradiction forces $D=\mathbb C$, so every $A$-endomorphism of $M$ is a scalar. Consequently, for $z\in Z(A)$ the map $\mu_z\colon M\to M$, $m\mapsto zm$, is $A$-linear because $\mu_z(am)=z(am)=(az)m=a(zm)$ for $a\in A$, so $\mu_z=\chi(z)\operatorname{id}_M$ for some $\chi(z)\in\mathbb C$; the assignment $\chi\colon Z(A)\to\mathbb C$ is a unital algebra homomorphism since $\mu_{zz'}=\mu_z\circ\mu_{z'}$ and $\mu_1=\operatorname{id}_M$ with $M\ne0$. By step 1.3 the hypotheses hold for $A=U(\mathfrak g)$ with $\mathfrak g$ finite-dimensional. [step 1.3, step 2.1, step 4.1, given, algebra, discharge-contradiction] ∎
