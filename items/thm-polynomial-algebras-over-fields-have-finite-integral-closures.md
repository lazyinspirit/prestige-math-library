---
id: thm-polynomial-algebras-over-fields-have-finite-integral-closures
kind: theorem
title: "Polynomial algebras over fields have finite integral closures"
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [lem-integral-closure-unchanged-across-an-integral-intermediate-domain, lem-finite-purely-inseparable-rational-extension-envelope, lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite, lem-polynomial-algebras-over-fields-are-integrally-closed, lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct, lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct, lem-normal-extension-separable-over-maximal-purely-inseparable-subextension, def-field-of-fractions, def-subfield, def-field-extension-generated-subfields-and-simple-extension, def-finitely-generated-field-extension, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, def-zero-divisor-and-integral-domain, def-field, lem-field-is-a-commutative-ring, def-extension-degree-and-finite-extension, def-dimension, def-linear-basis, thm-finite-field-extensions-are-algebraic, thm-tower-law-for-finite-field-extensions, thm-evaluation-kernel-and-minimal-polynomial, thm-simple-algebraic-extension-quotient-power-basis-and-degree, def-polynomials-that-split-and-splitting-fields, cor-splitting-fields-exist-for-finite-families, prop-algebraic-splitting-extensions-are-normal, def-normal-algebraic-extension, thm-finitely-generated-algebraic-extensions-are-finite, def-relative-field-automorphism-group, def-fixed-field-of-an-automorphism-group, lem-artin-fixed-field-lower-degree-bound, lem-artin-fixed-field-upper-degree-bound, def-finite-galois-extension-and-galois-group, def-separable-elements-and-separable-extensions, def-noetherian-ring, lem-transitivity-of-module-finiteness, def-finite-type-and-module-finite-algebras, thm-transitivity-of-integrality, cor-integral-elements-form-a-subring, thm-integral-closure-is-integrally-closed, def-integral-element-and-algebraic-integer, def-integral-closure-and-integrally-closed-domain, def-integral-ring-extension, thm-primitive-element-theorem-for-finite-separable-extensions, def-matrices-over-a-commutative-ring, def-ring-matrix-product-identity-and-transpose, def-determinant-of-a-square-matrix, thm-cramers-rule-over-a-commutative-ring, thm-invertible-matrix-theorem, cor-square-matrix-invertible-iff-determinant-is-a-unit, def-invertible-matrix-and-general-linear-group, thm-root-bound-for-polynomials-over-a-domain]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.161.13 (polynomial N-2)"
      url: "https://stacks.math.columbia.edu/tag/032O"
      locator: "statement and proof of Lemma 10.161.13"
    - title: "Stacks Project, Lemmas 10.161.12–13 (Japanese rings)"
      url: "https://stacks.math.columbia.edu/tag/032N"
      locator: "Lemma 10.161.12 and Lemma 10.161.13"
    - title: "Stacks Project, Lemma 9.27.3 (normal extension decomposition)"
      url: "https://stacks.math.columbia.edu/tag/030M"
      locator: "statement of Lemma 9.27.3"
    - title: "J. S. Milne, A Primer of Commutative Algebra, §6, §17"
      url: "https://www.jmilne.org/math/xnotes/CA.pdf"
      locator: "§6 and §17 (integral closures and finite integral closures)"
verification:
  audited: 2026-09-27
---

## Statement

Let $K$ be a field, let $d\ge0$, and put $R=K[x_1,\ldots,x_d]$ and
$F=\operatorname{Frac}(R)=K(x_1,\ldots,x_d)$, the rational function field. If
$L/F$ is a finite field extension, then the integral closure of $R$ in $L$ is a
finite $R$-module. Every construction in the proof is finite and the argument
is choice-free.

## Facts & Assumptions

**Given:** a field $K$, an integer $d\ge0$, the polynomial ring $R=K[x_1,\ldots,x_d]$ with fraction field $F=\operatorname{Frac}(R)$, and a finite field extension $L/F$.

[L1] $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ is the field of fractions of a domain $D$, with elements the fractions $a/b$ for $a,b\in D$, $b\ne0$; a subfield of a field that contains $D$ contains $b^{-1}$ for every $b\ne0$, hence contains every $a/b$, so $\operatorname{Frac}(D)$ is the smallest subfield containing $D$ ([[def-field-of-fractions]], [[def-subfield]], [[def-field-extension-generated-subfields-and-simple-extension]], [[def-finitely-generated-field-extension]]).

[L2] A polynomial ring in finitely many indeterminates over an integral domain is an integral domain, including the case of zero indeterminates, and a field is an integral domain ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]], [[def-zero-divisor-and-integral-domain]], [[def-field]], [[lem-field-is-a-commutative-ring]]).

[L3] A finite field extension $L/F$ has finite degree $[L:F]=\dim_FL$, a finite-dimensional vector space over $F$ has a finite basis which spans it, a finite extension is algebraic, and in a tower $F\subseteq K\subseteq L$ of finite extensions the degrees multiply ([[def-extension-degree-and-finite-extension]], [[def-dimension]], [[def-linear-basis]], [[thm-finite-field-extensions-are-algebraic]], [[thm-tower-law-for-finite-field-extensions]]).

[L4] An element $a$ algebraic over a field $F$ has a unique monic minimal polynomial $m_a\in F[T]$, of degree $[F(a):F]$, and $g(a)=0$ exactly when $m_a\mid g$; every element of $F(a)$ has a unique expression $c_0+c_1a+\cdots+c_{n-1}a^{n-1}$ with $n=\deg m_a=[F(a):F]$ and $c_i\in F$ ([[thm-evaluation-kernel-and-minimal-polynomial]], [[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L5] A splitting field over $F$ of a nonzero $f\in F[T]$ is an extension in which $f$ splits and which is generated over $F$ by its roots; every finite family $f_1,\ldots,f_m$ of nonzero polynomials has a splitting field, namely a splitting field of the product $f_1\cdots f_m$; and an algebraic extension which is a splitting field of a nonzero polynomial over $F$ is normal over $F$ ([[def-polynomials-that-split-and-splitting-fields]], [[cor-splitting-fields-exist-for-finite-families]], [[prop-algebraic-splitting-extensions-are-normal]], [[def-normal-algebraic-extension]]).

[L6] If $a_1,\ldots,a_r$ are algebraic over a field $F$, then $F(a_1,\ldots,a_r)/F$ is finite ([[thm-finitely-generated-algebraic-extensions-are-finite]], [[def-finitely-generated-field-extension]]).

[L7] $\operatorname{Aut}(M/F)$ is the group of $F$-automorphisms of an extension $M/F$, and $M^G=\{x\in M:\sigma(x)=x\text{ for all }\sigma\in G\}$ is a subfield for every group $G$ of automorphisms of $M$, with $F\subseteq M^G$ when $G\le\operatorname{Aut}(M/F)$; if $G$ is finite then $[M:M^G]\ge|G|$ and $[M:M^G]\le|G|$ ([[def-relative-field-automorphism-group]], [[def-fixed-field-of-an-automorphism-group]], [[lem-artin-fixed-field-lower-degree-bound]], [[lem-artin-fixed-field-upper-degree-bound]]).

[L8] If $M/F$ is finite normal, $G=\operatorname{Aut}(M/F)$ and $E=M^G$, then $E/F$ is finite purely inseparable, $M/E$ is finite Galois and hence separable, and $E=F$ when $F$ has characteristic $0$ ([[lem-normal-extension-separable-over-maximal-purely-inseparable-subextension]], [[def-finite-galois-extension-and-galois-group]], [[def-separable-elements-and-separable-extensions]]).

[L9] If $K$ has characteristic $p>0$, $F=K(x_1,\ldots,x_d)$ with $x_1,\ldots,x_d$ algebraically independent over $K$, and $L/F$ is finite purely inseparable, then there are a finite purely inseparable $K'/K$ and an exponent $e$ with $q=p^{e}$ together with an $F$-embedding $L\to K'(x_1^{1/q},\ldots,x_d^{1/q})$ ([[lem-finite-purely-inseparable-rational-extension-envelope]]).

[L10] For $K'/K$ finite purely inseparable, $q=p^{e}$ and $x_1,\ldots,x_d$ algebraically independent over $K$, the integral closure of $R=K[x_1,\ldots,x_d]$ in $K'(x_1^{1/q},\ldots,x_d^{1/q})$ is $K'[x_1^{1/q},\ldots,x_d^{1/q}]$, and for every intermediate field $K(x_1,\ldots,x_d)\subseteq N\subseteq K'(x_1^{1/q},\ldots,x_d^{1/q})$ the integral closure of $R$ in $N$ is a finite $R$-module ([[lem-integral-closure-in-a-purely-inseparable-rational-envelope-is-finite]]).

[L11] For every field $F$ and every finite $n\ge0$ the polynomial ring $F[Y_1,\ldots,Y_n]$ is an integrally closed domain ([[lem-polynomial-algebras-over-fields-are-integrally-closed]]).

[L12] A commutative ring is Noetherian when each of its ideals has a finite generating list, and this holds for $R=K[x_1,\ldots,x_d]$; if $R$ is a commutative Noetherian ring and $N$ a submodule of a finitely generated $R$-module $M$, then $N$ is finitely generated; and module finiteness is transitive in towers: if $B$ is a finite $A$-module and $M$ is a finite $B$-module, then $M$ is a finite $A$-module ([[def-noetherian-ring]], [[lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]], [[lem-submodules-of-finite-modules-over-noetherian-rings-are-finite-direct]], [[lem-transitivity-of-module-finiteness]], [[def-finite-type-and-module-finite-algebras]]).

[L13] If $A\subseteq B\subseteq N$ are domains with $B$ integral over $A$, then an element of $N$ is integral over $A$ if and only if it is integral over $B$ ([[lem-integral-closure-unchanged-across-an-integral-intermediate-domain]], [[thm-transitivity-of-integrality]]).

[L14] Elements of a commutative ring $B$ integral over a nonzero subring $A$ form a subring of $B$; the integral closure $\overline A$ of a domain $A$ in a field extension $K$ of $\operatorname{Frac}(A)$ is an integrally closed domain; an element is integral over $A$ when it is a root of a monic polynomial with coefficients in $A$ ([[cor-integral-elements-form-a-subring]], [[thm-integral-closure-is-integrally-closed]], [[def-integral-element-and-algebraic-integer]], [[def-integral-closure-and-integrally-closed-domain]], [[def-integral-ring-extension]]).

[L15] Every finite separable field extension is simple: it is generated by one element ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L16] $M_n(S)$ denotes the square matrices over a commutative ring $S$, $AB$ the entrywise-sum matrix product, and $Vx$ the resulting matrix–vector product for $x\in S^n$; the determinant is the Leibniz sum $\det(V)=\sum_{\sigma}\operatorname{sgn}(\sigma)\prod_{i<n}v_{\sigma(i),i}$, a finite signed sum of products of entries, so a matrix with entries in a subring $D\subseteq S$ has determinant in $D$; every solution $x$ of $Vx=w$ satisfies $\det(V)x_j=\det(V_j(w))$, where $V_j(w)$ is $V$ with column $j$ replaced by $w$ (Cramer's rule over a commutative ring); over a field $S$, a matrix $V\in M_n(S)$ is invertible exactly when the map $x\mapsto Vx$ has trivial kernel, and then $\det V$ is a unit of $S$ ([[def-matrices-over-a-commutative-ring]], [[def-ring-matrix-product-identity-and-transpose]], [[def-determinant-of-a-square-matrix]], [[thm-cramers-rule-over-a-commutative-ring]], [[thm-invertible-matrix-theorem]], [[cor-square-matrix-invertible-iff-determinant-is-a-unit]], [[def-invertible-matrix-and-general-linear-group]]).

[L17] A nonzero polynomial of degree $n$ over an integral domain has at most $n$ roots in that domain ([[thm-root-bound-for-polynomials-over-a-domain]]).



## Proof

**Proof technique:** direct.

1.1 $R$ is a domain and $F=\operatorname{Frac}(R)$ is a field containing $R$: for $d=0$ the ring $R=K$ is a field, and for $d\ge1$ it is a polynomial ring over the domain $K$; so [L2] applies, and [L1] gives the fraction field. It is the rational function field $K(x_1,\ldots,x_d)$: a subfield of $F$ containing $K$ and the $x_i$ contains $R$, hence contains every $a/b$ with $a,b\in R$, $b\ne0$, that is, all of $F$ by [L1]. [L1, L2, given]

1.2 The extension $L/F$ is finite, so by [L3] it has a finite $F$-basis $\beta_1,\ldots,\beta_m$, which spans $L$, and $L$ is algebraic over $F$; by [L6] and [L4] we may write $L=F(\beta_1,\ldots,\beta_m)$, and for each $j$ the element $\beta_j$ has a monic minimal polynomial $f_j\in F[T]$ with $f_j(\beta_j)=0$, of degree $[F(\beta_j):F]$. [L3, L4, L6, given]

2.1 Let $h:=f_1\cdots f_m\in F[T]$, a nonzero polynomial because each $f_j$ is monic. By [L5] the family $f_1,\ldots,f_m$ has a splitting field over $L$; fix one and call it $M$. Then $h$ splits in $M$ and $M=L(\text{the roots of }h)$, and each $\beta_j$ is a root of $h$, so $L=F(\beta_1,\ldots,\beta_m)\subseteq F(\text{the roots of }h)\subseteq M$. Since the middle field contains both $L$ and every root of $h$ in $M$, it contains $L(\text{the roots of }h)=M$; hence $M=F(\text{the roots of }h)$, and $M$ is also a splitting field of $h$ over $F$. The roots of $h$ are algebraic over $L$, so $M/L$ is finite by [L6], and then $M/F$ is finite by the tower law [L3]. [L3, L4, L5, L6, step 1.2]

3.1 The finite extension $M/F$ is algebraic by [L3] and a splitting field of the nonzero polynomial $h$ over $F$, so it is normal by [L5]. Set $G:=\operatorname{Aut}(M/F)$ and $E:=M^{G}$, a subfield with $F\subseteq E\subseteq M$ by [L7]. The group $G$ is finite: by [L3] write $M=F(\gamma_1,\ldots,\gamma_r)$ for a basis, each $\gamma_i$ has minimal polynomial $m_{\gamma_i}$ over $F$ by [L3] and [L4], every $\sigma\in G$ is determined by the images $\sigma(\gamma_i)$, which are roots of $m_{\gamma_i}$, and by the root bound [L17] there are only finitely many such tuples. Since $G$ is a finite group of automorphisms of $M$, [L7] gives $[M:E]\ge|G|$ and $[M:E]\le|G|$, so $[M:E]=|G|$. Applying [L8] to the finite normal extension $M/F$: the extension $E/F$ is finite purely inseparable, $M/E$ is finite Galois, hence separable, and $E=F$ if $F$ has characteristic $0$. [L3, L4, L5, L7, L8, L17, step 2.1]

4.1 Let $C$ be the integral closure of $R$ in $E$, i.e. the set of elements of $E$ integral over $R$. By [L14] members of $E$ integral over the nonzero ring $R$ form a subring, so $C$ is a subring of $E$ with $R\subseteq C\subseteq E\subseteq M$, and every element of $C$ is integral over $R$ by definition; that is, $C$ is integral over $R$. [L14, step 3.1, given]

4.2 The extension $M/E$ is finite separable by [L8], so by [L15] it is simple: there is $\theta\in M$ with $M=E(\theta)$. [L8, L15, step 3.1]

5.1 The ring $C$ is a finite $R$-module. If $K$ has characteristic $0$, then $E=F$ by [L8] and $C$ is the integral closure of $R$ in $\operatorname{Frac}(R)$; since $R$ is integrally closed by [L11], $C=R$, generated as an $R$-module by $1$. If $K$ has characteristic $p>0$, then $E/F$ is finite purely inseparable by [L8], so [L9] provides a finite purely inseparable $K'/K$, an exponent $e$ with $q=p^{e}$, and an $F$-embedding $\eta:E\to E':=K'(x_1^{1/q},\ldots,x_d^{1/q})$, the $x_i$ being algebraically independent over $K$. The image field $\eta(E)$ satisfies $K(x_1,\ldots,x_d)=F\subseteq\eta(E)\subseteq E'$, so the second clause of [L10] shows that the integral closure of $R$ in $\eta(E)$ is a finite $R$-module. The map $\eta$ fixes $F$ and hence $R$, so a $z\in E$ satisfies a monic equation over $R$ exactly when $\eta(z)$ does; thus $\eta$ restricts to an $R$-linear bijection from $C$ onto the integral closure of $R$ in $\eta(E)$, and finite generation transfers, so $C$ is a finite $R$-module in this case too. [L8, L9, L10, L11, step 4.1, cases]

5.2 $\operatorname{Frac}(C)=E$. Let $e\in E$. The extension $E/F$ is finite by [L8], so $e$ is algebraic over $F$ and has a minimal polynomial $m_e=T^{r}+a_{r-1}T^{r-1}+\cdots+a_0\in F[T]$ of degree $r=[F(e):F]\ge1$ by [L3] and [L4]. Each coefficient $a_i$ lies in $F=\operatorname{Frac}(R)$ and so is a fraction $u_i/v_i$ with $u_i,v_i\in R$ and $v_i\ne0$ by [L1]; put $c_1:=v_0v_1\cdots v_{r-1}$, a nonzero element of $R$ because $R$ is a domain. Then $c_1a_i\in R$ for every $i$, and $e_1:=c_1e$ is a root of the monic polynomial $T^{r}+c_1a_{r-1}T^{r-1}+c_1^{2}a_{r-2}T^{r-2}+\cdots+c_1^{r}a_0\in R[T]$, so $e_1$ is integral over $R$, that is $e_1\in C$; and $e=e_1/c_1$ with $c_1\in C\setminus\{0\}$, so $e\in\operatorname{Frac}(C)$. Hence $E\subseteq\operatorname{Frac}(C)\subseteq E$ and $\operatorname{Frac}(C)=E$. [L1, L3, L4, L8, L14, step 4.1, algebra]

6.1 By [L3] and [L4] the element $\theta$ has a monic minimal polynomial $m_\theta=T^{n}+b_{n-1}T^{n-1}+\cdots+b_0\in E[T]$ of degree $n=[E(\theta):E]=[M:E]$, and the powers $\theta^{0},\ldots,\theta^{n-1}$ are an $E$-basis of $M$, so by [L4] every $z\in M$ has a unique expansion $z=\sum_{i<n}z_i\theta^{i}$ with $z_i\in E$. Since $E=\operatorname{Frac}(C)$ by step 5.2 and $C$ is a domain by [L14], [L1] writes each $b_i$ as a fraction of elements of $C$; choose one nonzero $c\in C$ clearing all denominators, so $cb_i\in C$ for every $i$, and put $\theta_0:=c\theta$. Then $\theta_0$ is a root of the monic polynomial $T^{n}+cb_{n-1}T^{n-1}+c^{2}b_{n-2}T^{n-2}+\cdots+c^{n}b_0\in C[T]$, hence is integral over $C$; since $0\ne c\in E$ we have $E(\theta_0)=E(\theta)=M$, so by [L4] applied to $\theta_0$ every $z\in M$ has a unique expansion $z=\sum_{i<n}z_i\theta_0^{i}$ with $z_i\in E$, and $[M:E]=[E(\theta_0):E]=n$. [L1, L3, L4, L14, step 5.2, step 4.2]

7.1 Let $D$ be the integral closure of $C$ in $M$, a subring of $M$ containing $C$ by [L14]; by step 6.1 the element $\theta_0$ lies in $D$. Every $\sigma\in G$ fixes $E=M^{G}$ pointwise by [L7] and hence fixes $C\subseteq E$, so applying $\sigma$ to a monic equation for an element of $D$ over $C$ exhibits $\sigma$ of that element as again integral over $C$; in particular the elements $\alpha_j:=\sigma_j(\theta_0)$ lie in $D$ once $G=\{\sigma_0,\ldots,\sigma_{n-1}\}$ is an enumeration of $G$ with $\sigma_0=\operatorname{id}$, which is possible because $|G|=n$ by step 3.1. The elements $\alpha_0,\ldots,\alpha_{n-1}$ are pairwise distinct: if $\alpha_i=\alpha_j$, then $\sigma_j^{-1}\sigma_i$ fixes $E$ pointwise and fixes $\theta_0$, hence fixes $M=E(\theta_0)$ elementwise, so $\sigma_i=\sigma_j$. [L7, L14, step 3.1, step 6.1]

8.1 Fix $z\in D$ and write $z=\sum_{i<n}c_i\theta_0^{i}$ with $c_i\in E$ by step 6.1. Each $\sigma_j$ fixes $E$ pointwise and sends $\theta_0$ to $\alpha_j$, so $\sigma_j(z)=\sum_{i<n}c_i\alpha_j^{i}$; this lies in $D$ because $z\in D$ and $\sigma_j$ preserves integrality over $C$ as in step 7.1. Let $V\in M_n(M)$ be the matrix with entries $V_{ji}:=\alpha_j^{i}$ (row $j$, column $i$), let $c:=(c_0,\ldots,c_{n-1})\in M^{n}$ and let $w:=(\sigma_0(z),\ldots,\sigma_{n-1}(z))\in M^{n}$. The displayed equations say exactly $Vc=w$, and every entry of $V$ and of $w$ lies in $D$ by step 7.1. [L14, step 6.1, step 7.1]

9.1 By [L16] (Cramer's rule over the commutative ring $M$) the solution $c$ of $Vc=w$ satisfies $\det(V)c_i=\det(V_i)$ for every $i<n$, where $V_i$ is $V$ with column $i$ replaced by $w$. Every entry of $V_i$ lies in the subring $D$ of $M$, and the determinant is a finite signed sum of products of entries by [L16], so $\det(V_i)\in D$; with $\delta:=\det(V)$ this gives $\delta c_i\in D$ for all $i<n$. [L16, step 8.1, algebra]

9.2 $\delta\ne0$. Suppose $x=(x_0,\ldots,x_{n-1})\in M^{n}$ satisfies $Vx=0$. Then the polynomial $P(T):=\sum_{i<n}x_iT^{i}\in M[T]$ has $P(\alpha_j)=\sum_{i<n}x_i\alpha_j^{i}=0$ for every $j<n$, that is, $P$ vanishes at the $n$ pairwise distinct elements $\alpha_0,\ldots,\alpha_{n-1}$ of the field $M$ (step 7.1). If $P$ were nonzero, then $\deg P<n$ would contradict the root bound [L17]; hence $P=0$ and therefore $x=0$. So the map $x\mapsto Vx$ has trivial kernel and [L16] makes $V$ invertible over the field $M$, so its determinant $\delta$ is a unit of $M$, in particular $\delta\ne0$. [L16, L17, step 7.1, step 8.1]

10.1 Put $c:=\prod_{j<n}\sigma_j(\delta)\in M$. Since $\delta\in D$ by step 9.1 and each $\sigma_j$ preserves integrality over $C$ as in step 7.1, every factor $\sigma_j(\delta)$ lies in $D$, so $c\in D$ because $D$ is a subring; and for $\tau\in G$ the assignment $\sigma\mapsto\tau\sigma$ is a bijection of $G$, so $\tau(c)=\prod_{j<n}(\tau\sigma_j)(\delta)=\prod_{j<n}\sigma_j(\delta)=c$, showing that $c$ is fixed by every element of $G$, that is $c\in E=M^{G}$ by [L7]. Since $\delta\ne0$ by step 9.2 and $M$ is a field, each factor $\sigma_j(\delta)$ is nonzero, so $c\ne0$. [L7, L14, step 9.1, step 9.2]

11.1 $D\subseteq N:=\sum_{i<n}C\cdot(\theta_0^{i}/c)$. Let $z\in D$ with expansion $z=\sum_{i<n}c_i\theta_0^{i}$ as in step 8.1. Since $\sigma_0=\operatorname{id}$, the element $c$ of step 10.1 factors as $c=\delta\cdot\prod_{j\ge1}\sigma_j(\delta)$, so $cc_i=\bigl(\prod_{j\ge1}\sigma_j(\delta)\bigr)(\delta c_i)\in D$ because both factors lie in $D$ by steps 10.1 and 9.1, and $cc_i\in E$ because $c\in E$ and $c_i\in E$; hence $cc_i\in D\cap E$. Now $D\cap E=C$: by [L13] applied to the domains $R\subseteq C\subseteq M$, whose middle term is integral over $R$ by step 4.1, an element of $M$ is integral over $R$ exactly when it is integral over $C$; so an $x\in E$ lies in $D$ (integral over $C$) exactly when $x\in C$ (integral over $R$). Therefore $cc_i\in C$ for every $i$, and since $0\ne c\in E=\operatorname{Frac}(C)$ by steps 10.1 and 5.2 each element $\theta_0^{i}/c$ lies in $M$ and $z=\sum_{i<n}(cc_i)\cdot(\theta_0^{i}/c)$ exhibits $z$ as an element of $N$. Hence $D\subseteq N$. [L13, step 4.1, step 5.2, step 9.1, step 10.1]

12.1 $N$ is a finite $R$-module: it is generated as a $C$-module by the $n$ elements $\theta_0^{0}/c,\ldots,\theta_0^{n-1}/c$, and $C$ is a finite $R$-module by step 5.1, so [L12] (transitivity of module finiteness) makes $N$ a finite $R$-module. [L12, step 5.1, step 11.1]

13.1 $D$ is a finite $R$-module and a finite $C$-module. The set $D$ is closed under addition, and under multiplication by $R\subseteq C\subseteq D$ because it is a subring containing $C\supseteq R$; so $D$ is an $R$-submodule of the finite $R$-module $N$ by step 11.1. Since $R$ is Noetherian by [L12], the submodule lemma of [L12] makes $D$ a finitely generated $R$-module; its finitely many $R$-generators generate it over $C$ as well, since $R\subseteq C\subseteq D$ and $D$ is closed under multiplication by $C$. [L12, step 4.1, step 5.1, step 11.1, step 12.1]

14.1 Let $x\in L$. By [L13] applied to $R\subseteq C\subseteq M$, whose middle term is integral over $R$ by step 4.1, the element $x$ is integral over $R$ exactly when it is integral over $C$, that is, exactly when $x\in D$; hence the integral closure of $R$ in $L$ equals $D\cap L$. That set is an $R$-submodule of the finitely generated $R$-module $D$ (step 13.1), so the submodule lemma of [L12] makes it a finite $R$-module: the integral closure of $R=K[x_1,\ldots,x_d]$ in the finite extension $L$ of $K(x_1,\ldots,x_d)$ is finite over $R$. Every selection in the proof was made from a finite list — the finite basis $\beta_1,\ldots,\beta_m$ of $L$, its minimal polynomials, the finitely many roots of their product, the finite group $G$ and its enumeration, one common denominator clearing the coefficients of $m_e$, one primitive element $\theta$, its finitely many coefficients and one further common denominator, and the finite sums inside the determinant computation — and all inductions run over finite data, so no choice principle is used. [L12, L13, step 2.1, step 4.1, step 13.1] ∎
