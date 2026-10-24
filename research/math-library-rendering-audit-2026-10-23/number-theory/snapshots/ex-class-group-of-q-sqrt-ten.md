---
id: ex-class-group-of-q-sqrt-ten
kind: example
title: "Class group of Q(sqrt 10)"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - thm-minkowski-bound-for-ideal-classes
  - thm-ring-of-integers-of-a-quadratic-field
  - cor-discriminant-of-a-quadratic-field
  - def-archimedean-embeddings-and-number-field-signature
  - def-absolute-norm-of-an-ideal
  - lem-nonzero-number-field-ideal-has-finite-quotient
  - thm-ideal-norm-is-multiplicative
  - thm-principal-ideal-norm-is-absolute-field-norm
  - def-field-norm-and-trace
  - def-sum-and-product-of-ideals
  - def-generated-and-principal-ideals
  - def-ideal-class-group-of-a-domain
  - thm-lagrange
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: literature-derived
proof_strategy: direct
sources:
  references:
    - title: "William A. Stein, Algebraic Number Theory: A Computational Approach"
      url: "https://wstein.org/books/ant/ant.pdf"
      locator: "§7.1 Example 7.1.4, pp.78-79."
    - title: "Brian Conrad and Aaron Landesman, Math 154 Algebraic Number Theory"
      url: "https://people.math.harvard.edu/~landesman/assets/undergraduate-number-theory.pdf"
      locator: "§25 computing class groups, pp.128-134."
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Example

Assume the Axiom of Choice. For $K=\mathbb Q(\sqrt{10})$ the ideal class
group is $\operatorname{Cl}(\mathcal O_K)\cong\mathbb Z/2\mathbb Z$, generated
by the class of the prime ideal $\mathfrak p_2=(2,\sqrt{10})$. The concrete
content is: $\mathcal O_K=\mathbb Z[\sqrt{10}]$, $d_K=40$, the signature is
$(2,0)$ so that the Minkowski constant is $M_K=\sqrt{10}<4$, the ideals of
norm $2$ and $3$ are exactly
$\mathfrak p_2=(2,\sqrt{10})$, $\mathfrak p_3=(3,1+\sqrt{10})$ and
$\mathfrak p_3'=(3,1-\sqrt{10})$, the products
$\mathfrak p_2^2=(2)$, $\mathfrak p_3\mathfrak p_3'=(3)$ and
$\mathfrak p_2\mathfrak p_3=(4+\sqrt{10})$ are principal, and $\mathfrak p_2$
is not principal because $a^2-10b^2=\pm2$ has no integer solution.

## Facts & Assumptions

**Given:** The Axiom of Choice, $K=\mathbb Q(\sqrt{10})$ with $\mathcal O_K=\mathbb Z[\sqrt{10}]$ and discriminant $d_K=40$, and the element $\delta=\sqrt{10}$.

[F1] For the squarefree integer $d=10$, which is not $1\pmod4$, the quadratic-field formulas give $\mathcal O_K=\mathbb Z[\sqrt{10}]$ and $d_K=4\cdot10=40$ ([[thm-ring-of-integers-of-a-quadratic-field]], [[cor-discriminant-of-a-quadratic-field]]).

[F2] Signature: $r_1$ is the number of field embeddings $K\to\mathbb R$ fixing $\mathbb Q$ and $r_2$ is the number of complex-conjugate pairs among the nonreal field embeddings $K\to\mathbb C$ fixing $\mathbb Q$, with $r_1+2r_2=[K:\mathbb Q]$ ([[def-archimedean-embeddings-and-number-field-signature]]).

[F3] Minkowski bound: every class of $\operatorname{Cl}(\mathcal O_K)$ contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le M_K$ ([[thm-minkowski-bound-for-ideal-classes]], [[def-ideal-class-group-of-a-domain]]).

[F4] For a nonzero integral ideal $\mathfrak a$, the absolute norm $N\mathfrak a=|\mathcal O_K/\mathfrak a|$ is a finite positive integer; for nonzero integral ideals $N(\mathfrak a\mathfrak b)=N\mathfrak a\,N\mathfrak b$; and for $0\ne\beta\in\mathcal O_K$, $N((\beta))=|N_{K/\mathbb Q}(\beta)|$ ([[def-absolute-norm-of-an-ideal]], [[lem-nonzero-number-field-ideal-has-finite-quotient]], [[thm-ideal-norm-is-multiplicative]], [[thm-principal-ideal-norm-is-absolute-field-norm]]).

[F5] Field norm as a determinant: for $\beta\in K$ the norm $N_{K/\mathbb Q}(\beta)$ is the determinant of multiplication by $\beta$ on the two-dimensional $\mathbb Q$-vector space $K$ ([[def-field-norm-and-trace]]). In the basis $1,\sqrt{10}$ the matrix of multiplication by $a+b\sqrt{10}$ is $\begin{pmatrix}a&10b\\ b&a\end{pmatrix}$, so $N_{K/\mathbb Q}(a+b\sqrt{10})=a^2-10b^2$.

[F6] If $\mathfrak a\subseteq\mathfrak b$ are nonzero integral ideals with $N\mathfrak a=N\mathfrak b$, then $\mathfrak a=\mathfrak b$: the canonical surjection $\mathcal O_K/\mathfrak a\to\mathcal O_K/\mathfrak b$ identifies the finite group $\mathcal O_K/\mathfrak b$ with a quotient of the finite group $\mathcal O_K/\mathfrak a$ of the same order, and Lagrange's theorem leaves only the trivial quotient ([[thm-lagrange]]).

[F7] Product of ideals: for two-sided ideals $I,J$, $IJ=\{\sum_{k=1}^m i_kj_k:m\ge0,\ i_k\in I,\ j_k\in J\}$, and for a subset $S\subseteq R$ the ideal $(S)$ is the intersection of all ideals containing $S$ ([[def-sum-and-product-of-ideals]], [[def-generated-and-principal-ideals]]).

## Proof

1.1 By [F1], $\mathcal O_K=\mathbb Z[\delta]$ with $d_K=40$. Every field embedding $K\to\mathbb C$ fixing $\mathbb Q$ sends $\delta$ to a root of $X^2-10$, that is, to $\pm\delta$, and both of these are real; so $(r_1,r_2)=(2,0)$ with $n=2$ by [F2]. [F1, F2, algebra]

1.2 The map $\varphi(a+b\delta)=a\bmod 2$ is a surjective ring homomorphism $\mathcal O_K\to\mathbb F_2$: it is additive, and $(a+b\delta)(a'+b'\delta)=(aa'+10bb')+(ab'+a'b)\delta$ maps to $aa'+10bb'\equiv aa'=\varphi(a+b\delta)\varphi(a'+b'\delta)\pmod2$. Its kernel is $\{a+b\delta:a\equiv0\pmod2\}$, which equals the ideal $\mathfrak p_2:=(2,\delta)$: the products $2x+\delta y$ have even coefficient of $1$, and conversely $a+b\delta=2\cdot\frac a2+b\delta$. Hence $\mathcal O_K/\mathfrak p_2\cong\mathbb F_2$ and $N\mathfrak p_2=2$ by [F4]. [F4, F7, construct]

1.3 Similarly $\psi(a+b\delta)=a-b\bmod3$ is a surjective ring homomorphism $\mathcal O_K\to\mathbb F_3$: since $10\equiv1\pmod3$, it sends $(a+b\delta)(a'+b'\delta)$ to $aa'+bb'-ab'-a'b=(a-b)(a'-b')$ modulo $3$. Its kernel is $\{a+b\delta:a\equiv b\pmod3\}$, which equals $\mathfrak p_3:=(3,1+\delta)$ because $a+b\delta=3x+b(1+\delta)$ when $a=b+3x$ and conversely $3x+y(1+\delta)=(3x+y)+y\delta$ has congruent coefficients. So $N\mathfrak p_3=3$. Likewise $\psi'(a+b\delta)=a+b\bmod3$ is a surjective ring homomorphism with kernel $\{a+b\delta:a\equiv-b\pmod3\}=\mathfrak p_3':=(3,1-\delta)$, so $N\mathfrak p_3'=3$. [F4, F7, construct]

1.4 $\mathfrak p_2^2=(2)$: by [F7] the square is generated by the products of the generators $2,\delta$, namely $4$, $2\delta$ and $\delta^2=10$, so $\mathfrak p_2^2=(4,2\delta,10)$. All three generators are multiples of $2$, giving $\mathfrak p_2^2\subseteq(2)$; conversely $2=10-2\cdot4\in\mathfrak p_2^2$, so $(2)\subseteq\mathfrak p_2^2$. Hence $\mathfrak p_2^2=(2)$. [F7, algebra]

1.5 $\mathfrak p_3\mathfrak p_3'=(3)$: by [F7] the product is generated by $9$, $3(1-\delta)$, $3(1+\delta)$ and $(1+\delta)(1-\delta)=1-10=-9$, so $\mathfrak p_3\mathfrak p_3'=3\cdot(3,1-\delta,1+\delta)$. That second ideal contains $(1-\delta)+(1+\delta)=2$ and $3$, hence contains $3-2=1$, so it is $\mathcal O_K$ and $\mathfrak p_3\mathfrak p_3'=(3)$. [F7, algebra]

2.1 Minkowski constant: by step 1.1 and [F1], $M_K=(4/\pi)^{0}\frac{2!}{2^2}\sqrt{40}=\frac12\cdot2\sqrt{10}=\sqrt{10}<4$, because $10<16$. [F1, step 1.1, algebra]

2.2 Uniqueness: let $\mathfrak b$ be an integral ideal with $N\mathfrak b=p\in\{2,3\}$. Then $\mathcal O_K/\mathfrak b$ has $p$ elements, so its additive group is generated by $1$ and it is isomorphic to $\mathbb F_p$; the composite $\mathbb Z[X]\to\mathcal O_K\to\mathbb F_p$ sends $X$ to an element $u$ with $u^2=10$. For $p=2$ one has $u^2=0$, so $u=0$, hence $2$ and $X$ lie in the kernel and the image of $(2,X)$ is $(2,\delta)=\mathfrak p_2\subseteq\mathfrak b$; with $N\mathfrak p_2=2=N\mathfrak b$, step 1.2 and [F6] give $\mathfrak b=\mathfrak p_2$. For $p=3$ one has $u^2=1$, so $u=\pm1$: if $u=1$ then $(3,\delta-1)=(3,1-\delta)=\mathfrak p_3'\subseteq\mathfrak b$ and if $u=-1$ then $(3,\delta+1)=\mathfrak p_3\subseteq\mathfrak b$, so by step 1.3 and [F6] $\mathfrak b$ is $\mathfrak p_3'$ or $\mathfrak p_3$. [F4, F6, F7, step 1.2, step 1.3]

2.3 By [F7] the product $\mathfrak p_2\mathfrak p_3$ is generated by the products $6$, $2(1+\delta)$, $3\delta$ and $\delta(1+\delta)=10+\delta$; the identity $4+\delta=(10+\delta)-6$ exhibits $4+\delta$ in the product, so $(4+\delta)\subseteq\mathfrak p_2\mathfrak p_3$. [F7, step 1.2]

2.4 $\mathfrak p_2$ is not principal: if $\mathfrak p_2=(\beta)$ with $\beta=a+b\delta$, then by [F4] and [F5], $2=N\mathfrak p_2=N((\beta))=|N_{K/\mathbb Q}(\beta)|=|a^2-10b^2|$, so $a^2-10b^2=\pm2$. Reducing modulo $5$ gives $a^2\equiv\pm2\pmod5$, but the squares modulo $5$ are $0,1,4$ and neither $2$ nor $3$ occurs; this contradiction shows no such $\beta$ exists. [F4, F5, step 1.2, algebra]

3.1 Inclusion and equal norms force equality: by [F5] and [F4], $N((4+\delta))=|16-10|=6$, while $N(\mathfrak p_2\mathfrak p_3)=2\cdot3=6$ by steps 1.2 and 1.3; with $(4+\delta)\subseteq\mathfrak p_2\mathfrak p_3$ from step 2.3, [F6] gives $\mathfrak p_2\mathfrak p_3=(4+\delta)$. [F4, F5, F6, step 2.3, step 1.2, step 1.3, algebra]

4.1 Principal products are the identity class: step 1.4 gives $[\mathfrak p_2]^2=[\mathfrak p_2^2]=[(2)]=1$, and step 3.1 gives $[\mathfrak p_2][\mathfrak p_3]=[(4+\delta)]=1$, so $[\mathfrak p_3]=[\mathfrak p_2]^{-1}=[\mathfrak p_2]$; step 1.5 gives $[\mathfrak p_3][\mathfrak p_3']=[(3)]=1$, so $[\mathfrak p_3']=[\mathfrak p_3]^{-1}=[\mathfrak p_2]$. [F3, step 1.4, step 1.5, step 3.1]

5.1 Hence $[\mathfrak p_2]^2=1$ by step 4.1 while $[\mathfrak p_2]\ne1$ by step 2.4, so $[\mathfrak p_2]$ has order exactly $2$. [step 4.1, step 2.4]

5.2 By [F3] and step 2.1 every class of $\operatorname{Cl}(\mathcal O_K)$ contains an integral ideal $\mathfrak b$ with $N\mathfrak b\le\sqrt{10}<4$, and $N\mathfrak b$ is a positive integer by [F4], so $N\mathfrak b\in\{1,2,3\}$. If $N\mathfrak b=1$ then $\mathcal O_K/\mathfrak b$ is trivial, that is $\mathfrak b=\mathcal O_K$; if $N\mathfrak b=2$ then $\mathfrak b=\mathfrak p_2$; and if $N\mathfrak b=3$ then $\mathfrak b$ is $\mathfrak p_3$ or $\mathfrak p_3'$, by step 2.2. By step 4.1 all of these ideals represent either the identity class or $[\mathfrak p_2]$. [F3, F4, step 2.1, step 2.2, step 4.1]

6.1 Therefore every class of $\operatorname{Cl}(\mathcal O_K)$ is $1$ or $[\mathfrak p_2]$, so $\operatorname{Cl}(\mathcal O_K)=\{1,[\mathfrak p_2]\}\cong\mathbb Z/2\mathbb Z$ is generated by the class of $\mathfrak p_2=(2,\sqrt{10})$. [step 5.1, step 5.2] ∎

## Remarks

The example is the real-quadratic counterpart of the computation for $\mathbb Q(\sqrt{-5})$: the ramified prime $2$ gives $\mathfrak p_2^2=(2)$ with $\mathfrak p_2$ nonprincipal, the split prime $3$ gives two conjugate prime ideals whose product is $(3)$, and the element $4+\sqrt{10}$ of norm $6$ links the two, forcing $[\mathfrak p_3]=[\mathfrak p_2]$. Since $r_2=0$ the Minkowski constant carries no factor $4/\pi$ and equals $\sqrt{10}$; the bound $\sqrt{10}<4$ leaves only the norms $1,2,3$, and each of these norms has exactly the ideals listed.
