---
id: lem-unsuspended-a-infinity-identities-are-tensor-codifferentials
kind: lemma
title: "Unsuspended A∞ identities are tensor codifferentials with explicit suspension signs"
status: draft
dependency_level: 3
origin: session
deps:
  - def-a-infinity-algebra
  - def-a-infinity-morphism
  - def-koszul-sign-rule-for-graded-tensors
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-18}}
sources:
  references:
    - title: "Bernhard Keller, Introduction to A-infinity algebras and modules, §§3.1, 3.4 and 3.6"
      url: "https://arxiv.org/pdf/math/9910179v2"
---

## Statement

Let $A$ be a graded vector space over a field and let $m_n:A^{\otimes n}\to A$ have degree $2-n$, $n\ge1$. Use the Koszul tensor-map convention of [[def-koszul-sign-rule-for-graded-tensors]]. Write $X=A[1]$, $X^j=A^{j+1}$, and let $s_A:A\to X$ have degree $-1$ with inverse $u_A$ of degree $+1$. Put $c_n=n(n-1)/2$ and define

$$b_n=(-1)^{c_n}s_A m_n u_A^{\otimes n}:X^{\otimes n}\longrightarrow X.$$

Equivalently $b_n s_A^{\otimes n}=s_A m_n$ and $m_n=u_A b_n s_A^{\otimes n}$. Each $b_n$ has degree one. On homogeneous elements this formula reads

$$b_n(s_Aa_1,\ldots,s_Aa_n)=(-1)^{\sum_{j=1}^n(n-j)|a_j|}s_A m_n(a_1,\ldots,a_n).$$

Define the reduced tensor coalgebra $T^c(X)=\bigoplus_{n\ge1}X^{\otimes n}$ with reduced deconcatenation, and its coaugmented version $T^c_+(X)=k\cdot1\oplus T^c(X)$ with

$$\Delta(x_1\cdots x_N)=\sum_{i=0}^N(x_1\cdots x_i)\otimes(x_{i+1}\cdots x_N).$$

Empty words mean $1$. The $b_n$ extend uniquely to a degree-one coderivation $B:T^c_+(X)\to T^c_+(X)$ with $B(1)=0$, zero counit and corestrictions $b_n$. Explicitly

$$B|_{X^{\otimes N}}=\sum_{r+s+t=N\atop r,t\ge0,\ s\ge1}1^{\otimes r}\otimes b_s\otimes1^{\otimes t}.$$

Then $B^2=0$ if and only if the $m_n$ satisfy precisely the unsuspended A∞ identities of [[def-a-infinity-algebra]], with sign $(-1)^{r+st}$ in every arity. This gives a bijection between those uncurved structures and such square-zero coderivations. The same correspondence holds after removing the coaugmentation summand. No arity-zero operation or tensor completion is included.

Moreover, for structures on $A,D$ and homogeneous maps $f_n:A^{\otimes n}\to D$ of degree $1-n$, define degree-zero maps

$$F_n=(-1)^{c_n}s_D f_n u_A^{\otimes n}.$$

They extend uniquely to a coaugmentation- and counit-preserving coalgebra map $F:T^c_+(A[1])\to T^c_+(D[1])$, and $FB_A=B_DF$ if and only if $f$ satisfies exactly [[def-a-infinity-morphism]], including its right-hand sign

$$\eta(i_1,\ldots,i_q)=\sum_{j=1}^{q-1}(q-j)(i_j-1).$$

Composition of these coalgebra maps corresponds to the unsuspended Taylor composition $h_N=\sum_{q,\ i_1+\cdots+i_q=N}(-1)^\eta g_q(f_{i_1}\otimes\cdots\otimes f_{i_q})$. In particular the correspondence respects identities.

The fixed signs give $b_1=s_A m_1u_A$ and $b_2=-s_A m_2(u_A\otimes u_A)$. The latter is an equality of graded maps: evaluated on $s_Aa\otimes s_Ab$ it is $(-1)^{|a|}s_A m_2(a,b)$. Replacing every $b_n$ simultaneously by $-b_n$ preserves both the square-zero condition and the morphism equation when done on both algebras; changing just one arity is not part of this correspondence.

## Facts & Assumptions

**Given:** The graded spaces, positive-arity operation and morphism families, suspension maps and tensor convention in the statement.

[F1] [[def-a-infinity-algebra]] fixes $|m_n|=2-n$ and the identities $\sum_{r+s+t=N}(-1)^{r+st}m_{r+1+t}(1^{\otimes r}\otimes m_s\otimes1^{\otimes t})=0$.

[F2] [[def-a-infinity-morphism]] fixes $|f_n|=1-n$ and the morphism identities with signs $r+st$ on the left and $\eta$ on the right.

[F3] [[def-koszul-sign-rule-for-graded-tensors]] gives $(p\otimes q)(x\otimes y)=(-1)^{|q||x|}p(x)\otimes q(y)$ and its iterated form.

## Proof

1.1 Applying [F3] to the composite tensor maps gives $u_A^{\otimes n}s_A^{\otimes n}=(-1)^{c_n}\operatorname{id}$ and $s_A^{\otimes n}u_A^{\otimes n}=(-1)^{c_n}\operatorname{id}$. Thus the displayed formulas for $m_n$ and $b_n$ are mutually inverse. The degree of $b_n$ is $-1+(2-n)+n=1$. On inputs $s_Aa_j$ the tensor map $u_A^{\otimes n}$ contributes exponent $\sum_j(n-j)(|a_j|-1)$; adding $c_n=\sum_j(n-j)$ gives the stated evaluation formula. For $F_n$ exactly the same computation gives degree zero, inverse $f_n=u_D F_n s_A^{\otimes n}$, and evaluation $F_n(s_Aa_1,\ldots,s_Aa_n)=(-1)^{\sum_j(n-j)|a_j|}s_Df_n(a_1,\ldots,a_n)$. [F3, algebra]

1.2 More generally any degree-$d$ maps $v_n:X^{\otimes n}\to X$ extend by the consecutive insertion formula $V(1)=0$, $V(x_1\cdots x_N)=\sum_{r+s+t=N}(-1)^{d\sum_{j\le r}|x_j|}x_1\cdots x_r v_s(x_{r+1},\ldots,x_{r+s})x_{r+s+1}\cdots x_N$. It is finite on every word, has zero counit, and satisfies $\Delta V=(V\otimes1+1\otimes V)\Delta$. Indeed a cut of the output word is either before or after the single replaced block. These choices correspond respectively to acting on the suffix or prefix at the corresponding cut of the input word; the Koszul sign on $1\otimes V$ accounts for moving $V$ across the prefix. Coaugmentation terms satisfy the same equation because $V(1)=0$. [F3, construct, algebra]

2.1 These extensions are unique. For a coderivation with zero counit and zero corestrictions, assume inductively it vanishes on shorter nonempty words. Its coderivation identity on a word of length $N$ then says that its value has zero reduced coproduct, so is primitive. In a tensor coalgebra with zero scalar part, a primitive lies in $X$: for each component of length $j>1$, the reduced coproduct component $X\otimes X^{\otimes(j-1)}$ is the canonical injective splitting of that component, hence cannot vanish unless it does. The primitive value has zero length-one projection by the corestriction hypothesis, hence is zero. This proves the induction, starting at length one. In particular the insertion extension defines the asserted unique $B$ without any cofree assertion left unproved. [step 1.2, algebra]

2.2 Fix $r+s+t=N$, put $k=r+1+t$, and compare one projected term with $s_A m_k(1^{\otimes r}\otimes m_s\otimes1^{\otimes t})u_A^{\otimes N}$. Evaluating on $s_Aa_1,\ldots,s_Aa_N$ by [F3] cancels all input-dependent sign differences: the inner insertion on suspended inputs contributes $\sum_{j\le r}(|a_j|-1)$, the inner tensor of $u_A$ contributes $\sum_{j=1}^s(s-j)(|a_{r+j}|-1)$, and the outer tensor of $u_A$ uses the middle unsuspended output degree $\sum_{j=1}^s|a_{r+j}|+2-s$ with coefficient $t$. On the comparison map the corresponding input insertion sign is $(2-s)\sum_{j\le r}|a_j|$ after applying $u_A^{\otimes N}$. Subtracting these exponents leaves the input-independent difference $D=-r-c_s-c_k+t(2-s)+c_N$, in addition to the prefactor $c_s+c_k$ from the two $b$ maps. Hence the total difference is $c_N-r+t(2-s)$, congruent to $c_N+r+st$ modulo two. We have proved in every arity the exact map identity $b_k(1^{\otimes r}\otimes b_s\otimes1^{\otimes t})=(-1)^{c_N+r+st}s_A m_k(1^{\otimes r}\otimes m_s\otimes1^{\otimes t})u_A^{\otimes N}$. [F3, step 1.1, algebra]

2.3 On the right write $p_j=i_1+\cdots+i_{j-1}$, and evaluate a fixed block term on $s_Aa_1,\ldots,s_Aa_N$. The suspended coefficient has exponent $E=\sum_j\sum_{\ell=1}^{i_j}(i_j-\ell)|a_{p_j+\ell}|+\sum_j(q-j)(\sum_{\ell=1}^{i_j}|a_{p_j+\ell}|+1-i_j)$, by step 1.1 applied first to the $F$ blocks and then to $b_q^D$. The comparison map $s_Dm_q^D(f_{i_1}\otimes\cdots\otimes f_{i_q})u_A^{\otimes N}$ has exponent $E'=\sum_{h=1}^N(N-h)|a_h|-c_N+\sum_j(1-i_j)\sum_{h\le p_j}|a_h|$. For the input in position $p_j+\ell$, both exponents have coefficient $i_j-\ell+q-j$; this follows in $E'$ by replacing the remaining tail length with $\sum_{v>j}i_v$. Their difference is thus $E-E'=c_N+\sum_j(q-j)(1-i_j)$, congruent to $c_N+\eta(i_1,\ldots,i_q)$. This proves $b_q^D(F_{i_1}\otimes\cdots\otimes F_{i_q})=(-1)^{c_N+\eta}s_Dm_q^D(f_{i_1}\otimes\cdots\otimes f_{i_q})u_A^{\otimes N}$. [F3, step 1.1, algebra]

3.1 The square of a degree-one coderivation is again a coderivation: expand $(B\otimes1+1\otimes B)^2$ and use [F3]; the mixed terms are $B\otimes B$ and $-B\otimes B$ and cancel over any field. It has zero counit and vanishes on $1$. Its length-one projection on $X^{\otimes N}$ is therefore $\sum_{r+s+t=N}b_{r+1+t}(1^{\otimes r}\otimes b_s\otimes1^{\otimes t})$. By uniqueness from step 2.1, $B^2=0$ is equivalent to the vanishing of all these projections. [F3, step 1.2, step 2.1, algebra]

3.2 For degree-zero corestrictions $F_n$ define $F(1)=1$ and $F(x_1\cdots x_N)=\sum_{q=1}^N\sum_{i_1+\cdots+i_q=N,\ i_j\ge1}F_{i_1}(x_1,\ldots,x_{i_1})\otimes\cdots\otimes F_{i_q}(x_{N-i_q+1},\ldots,x_N)$. There is no factorial because blocks are consecutive and ordered. A deconcatenation cut of this output is between two output blocks, and corresponds to a cut of the input together with consecutive partitions of its two pieces. Therefore $\Delta F=(F\otimes F)\Delta$; no additional map-interchange sign occurs because the $F_n$ have degree zero. This defines a counit- and coaugmentation-preserving coalgebra map. Uniqueness follows by induction on input length: two maps agreeing on shorter words and on their corestrictions have primitive difference on the next word, and step 2.1 makes that difference zero. [F3, step 1.1, step 2.1, construct, algebra]

3.3 On the left, the sign calculation of step 2.2 is unchanged when the outer $m_k$ is replaced by $f_k$: that calculation uses the degree $2-s$ of the inner operation, and its outer input degrees, not the degree of the outer operation. It gives $F_k(1^{\otimes r}\otimes b_s^A\otimes1^{\otimes t})=(-1)^{c_N+r+st}s_D f_k(1^{\otimes r}\otimes m_s^A\otimes1^{\otimes t})u_A^{\otimes N}$. [F3, step 1.1, step 2.2, algebra]

4.1 Summing the identity of step 2.2 factors out the invertible outer maps $s_A,u_A^{\otimes N}$ and the common sign $(-1)^{c_N}$. The resulting equation is exactly [F1]. Steps 1.1 and 3.1 thus prove both implications and the structure bijection, with no characteristic restriction or division. All the insertion and uniqueness arguments restrict to the reduced coalgebra, and extending a reduced coderivation by zero on $1$ recovers its unique counital coaugmented version. This proves the structure assertion, including the absence of nullary terms. [F1, step 1.1, step 2.1, step 3.1, step 2.2, algebra]

4.2 The map $D_F=FB_A-B_DF$ vanishes on $1$, has zero counit, and obeys $\Delta D_F=(D_F\otimes F+F\otimes D_F)\Delta$. This follows by expanding the coderivation and coalgebra-map identities, using degree zero for $F$. If all length-one corestrictions of $D_F$ vanish, induction on input length makes all its values primitive and then zero, exactly as in step 2.1. Consequently $FB_A=B_DF$ is equivalent to equality of their length-one projections in every arity. The left projection is $\sum_{r+s+t=N}F_k(1^{\otimes r}\otimes b_s^A\otimes1^{\otimes t})$ and the right is $\sum_{q,\ i_1+\cdots+i_q=N}b_q^D(F_{i_1}\otimes\cdots\otimes F_{i_q})$. [F3, step 1.2, step 2.1, step 3.2, algebra]

5.1 Equating the two projections from step 4.2 and substituting the two sign comparisons cancels their common invertible maps and sign $(-1)^{c_N}$. What remains is precisely [F2], including its actual right-hand exponent $\eta$. Conversely those identities give zero projections, hence the full coalgebra equation by step 4.2. The coefficient transformations in step 1.1 are invertible, and step 3.2 gives unique coalgebra extensions, so this is a bijection on the native morphisms as asserted. [F2, step 1.1, step 3.2, step 4.2, step 3.3, step 2.3, algebra]

6.1 For a second family $g$ the length-one projection of $GF$ is the sum of $G_q(F_{i_1}\otimes\cdots\otimes F_{i_q})$. The sign calculation of step 2.3 only uses the degrees $1-i_j$ of the inner $f$ maps and the input evaluation formula for the outer suspended map. Replacing the outer $m_q^D$ by $g_q$ therefore gives the same sign $c_N+\eta$. Desuspending by the inverse transformation from step 1.1 yields the stated composition coefficients. The identity coalgebra map has only $F_1=\operatorname{id}$, which desuspends to $f_1=\operatorname{id}$ and $f_n=0$ for $n>1$. Finally the explicit arity-one and arity-two formulas follow from $c_1=0,c_2=1$; the degree of $s_Aa$ makes the binary evaluation sign $(-1)^{|a|}$. Simultaneously negating all coderivation coefficients negates $B$, so leaves $B^2=0$ and $FB_A=B_DF$ unchanged when done on both sides. This establishes all sign and compatibility claims. [F3, step 1.1, step 3.2, step 2.3, algebra] ∎
