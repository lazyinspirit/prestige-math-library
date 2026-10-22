---
id: lem-colored-jones-generic-quotient-is-laurent
kind: lemma
title: "The normalized generic colored Jones quotient is an integral Laurent polynomial"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-normalized-colored-jones-sequence
  - lem-colored-jones-generic-ribbon-data
  - lem-quantum-pascal-recurrence-and-gaussian-integrality
  - thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor
  - lem-ribbon-trace-equals-the-framed-closure-evaluation
  - def-colored-framed-knot-evaluation-from-ribbon-category
  - def-absolutely-simple-object
  - def-axiom-of-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Noah Snyder and Peter Tingley, The half-twist for U_q(g) representations"
      url: "https://msp.org/ant/2009/3-7/ant-v3-n7-p04-p.pdf"
    - title: "Hitoshi Murakami, An Introduction to the Volume Conjecture"
      url: "https://arxiv.org/pdf/1002.0126"
---

## Statement

Assume the Axiom of Choice and Countable Choice. For every integer $N\ge1$ and every finite braid word $\beta$ on $b\ge1$ strands whose closure is a knot, the normalized generic quotient
$$\lambda_N^{-w(\beta)}\frac{\operatorname{Tr}(G_N^{\otimes b}\rho_N(\beta))}{d_N}$$
belongs to $\mathbb Z[A^4,A^{-4}]$. Consequently there is a unique $J_N(K;q)\in\mathbb Z[q,q^{-1}]$ whose substitution $q=A^4$ equals that quotient. It is independent of the braid representative, has $J_N(\bigcirc;q)=1$, and agrees with the normalized colored Jones convention of Murakami’s explicit matrix definition in the variable $q$. Its value at every nonzero complex $q$, in particular $q_N=e^{2\pi i/N}$, means evaluation of this Laurent polynomial; it never means division by the specialized quantum dimension.

## Statement references

[[def-normalized-colored-jones-sequence]]

[[lem-colored-jones-generic-ribbon-data]]

[[lem-quantum-pascal-recurrence-and-gaussian-integrality]]

## Facts & Assumptions

**Given:** Integers $N\ge1$, $b\ge1$, the knot-closing braid word $\beta$, and the two choice assumptions.

[F1] The generic matrices, nonzero $d_N$, scalar $\lambda_N$, absolute simplicity of $V_N$, representative independence under the choice hypotheses and unknot normalization are established in [[def-normalized-colored-jones-sequence]]. Their admissibility is proved, for every $N$, in [[lem-colored-jones-generic-ribbon-data]].

[F2] Symmetric Gaussian quotients $\begin{bmatrix}m\\r\end{bmatrix}_{q_K}$ are integral Laurent polynomials in $q_K$, and their Gauss product and alternating-sum identities hold ([[lem-quantum-pascal-recurrence-and-gaussian-integrality]]).

[F3] Under Countable Choice a colored framed tangle is evaluated by its ribbon matrices; compositions, tensor products and closures agree with their corresponding contractions ([[def-colored-framed-knot-evaluation-from-ribbon-category]], [[thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor]], [[lem-ribbon-trace-equals-the-framed-closure-evaluation]]). Absolute simplicity says that every color endomorphism is a scalar ([[def-absolutely-simple-object]]).

[A1] The Axiom of Choice and Countable Choice ([[def-axiom-of-choice]], [[def-countable-choice]]).



## Proof

**Proof technique:** direct.

**Given:** The hypotheses in the Statement. Put $a=N-1$, $z=q_K-q_K^{-1}$ and $R_0=\mathbb Z[A,A^{-1}]$.

1.1 On the displayed color basis, $E^r/[r]!$ sends $v_i$ to $\begin{bmatrix}a-i+r\\r\end{bmatrix}_{q_K}v_{i-r}$, with zero outside the index range, while $F^rv_j=\prod_{s=1}^r[j+s]v_{j+r}$. By [F2] each coefficient in the finite $R$ series therefore belongs to $R_0$, including the weight factor $A^{hk}$. Its inverse is $\bigl(\sum_{r\ge0}(-1)^rq_K^{-r(r-1)/2}z^rE^r\otimes F^r/[r]!\bigr)D^{-1}$, again a finite integral matrix by the same argument. To check the inverse formula, the coefficient of $(E\otimes F)^m$ in the product of the two nilpotent series is, after multiplication by $[m]!/z^m$, $\sum_{r=0}^m(-1)^{m-r}q_K^{r(r-1)/2-(m-r)(m-r-1)/2}\begin{bmatrix}m\\r\end{bmatrix}_{q_K}$. Its exponent equals $(m-1)r-m(m-1)/2$, so for $m>0$ it vanishes by [F2]'s alternating Gauss sum; at $m=0$ it is $1$. Thus both $c$ and $c^{-1}$ are integral matrices. [F1, F2, given, algebra]

2.1 Ordinary dual evaluation and coevaluation have entries $0,1$. The pivotal matrices $G_N$ and $G_N^{-1}$ are diagonal Laurent monomials with signs. Accordingly both orientations of cup and cap are integral: one uses ordinary evaluation/coevaluation, the other their composites with the pivotal comparison or its inverse. Crossings involving a dual strand are obtained by bending one or both strands of $c$ or $c^{-1}$ with those maps, as follows from braiding naturality at evaluation and the snakes; concretely this is a partial transpose followed by the just-listed integral contractions. It introduces no matrix inverse other than $c^{-1}$ and $G_N^{-1}$. Every elementary matrix of a tangle colored by $V_N$ and its dual is thus over $R_0$. [F1, F3, step 1.1, algebra]

2.2 It remains to prove the stronger exponent assertion. Work temporarily over $\mathbb Q(i)(A)$, and let a prime denote substitution $A\mapsto iA$. On the basis $v_0,\ldots,v_a$ put $Qv_j=(-1)^{j(j-1)/2}v_j$ and $Dv_j=(-1)^jv_j$. The $r$th term of $R$ sends input $(u,v)$ to $(u-r,v+r)$, before the flip. Every nonzero Laurent monomial in its coefficient has degree, modulo $4$, $ (a-2u)(a-2v)+2r(a-u+v+r)\equiv a^2-2a(u+v)+2r(a-u+v+r)\pmod4.$ Indeed $[m]$ has all degrees congruent to $2(m-1)$, $z$ has degree $2$, $q_K^{r(r-1)/2}$ has degree $r(r-1)$, and the weight factor is evaluated at the output weights. The quotient of the output and input $Q\otimes Q$ signs is $(-1)^{r(v-u+r)}$. Comparing these two explicit expressions yields $c'=(Q\otimes Q)c(Q\otimes Q)^{-1}\quad(a\text{ even}),$ $c'=i(Q\otimes Q)(D\otimes1)c(D\otimes1)(Q\otimes Q)^{-1}\quad(a\text{ odd}).$ For the second formula, the remaining sign is $(-1)^{u+v+r}$, exactly the product of the left input and left output $D$ signs after the flip. No asymptotic or numerical specialization is used in these matrix equalities. [F1, step 1.1, algebra]

3.1 Cut a small oriented arc of the framed knot closure of $\beta$. The remaining framed $(1,1)$-tangle is a morphism $f:V_N\to V_N$ (choose its endpoint orientation accordingly). A generic planar projection decomposes it into finitely many elementary crossings, cups and caps, so step 2.1 makes every entry of $f$ an element of $R_0$. By [F1] and [F3], $f=sI$ for a scalar $s\in F$; its $v_0$ diagonal entry gives $s\in R_0$. Closing that cut arc is the pivotal trace of $f$, namely $d_Ns$, and is the same framed knot value as $\operatorname{Tr}(G_N^{\otimes b}\rho_N(\beta))$ by [F3]. Since $d_N\ne0$ generically, the quotient in the Statement is $\lambda_N^{-w(\beta)}s\in R_0$. This proves integral Laurentness in $A$ without dividing in an integral ring or after specialization. [A1, F1, F3, step 2.1, algebra, construct]

3.2 If $a$ is even, let $T=Q^{\otimes b}$. Step 2.2 gives $\rho'=T\rho T^{-1}$ for every braid word, including inverses. Direct substitution gives $G_N'=G_N$, $d_N'=d_N$ and $\lambda_N'=\lambda_N$, because $a$ and $a(a+2)$ are even and divisible by $4$, respectively. Since $T$ commutes with $G_N^{\otimes b}$, cyclicity of the ordinary trace shows that the normalized quotient is unchanged by $A\mapsto iA$. [F1, step 2.2, algebra]

3.3 If $a$ is odd, put $H=D^0\otimes D^1\otimes\cdots\otimes D^{b-1}$ and $T=Q^{\otimes b}H$. The operator $c$ preserves the sum of basis indices, so it commutes with $D\otimes D$. Consequently conjugating an adjacent $c$ by $H$ has the effect $(D\otimes1)c(D\otimes1)$, regardless of which adjacent position has odd exponent. Step 2.2 thus gives $\rho'=i^{w(\beta)}T\rho T^{-1}$. Here $G_N'=-G_N$, $d_N'=-d_N$, and $\lambda_N'=-i\lambda_N$, since $a(a+2)\equiv3\pmod4$. Taking the trace and normalizing therefore multiplies the quotient by $(-1)^{b-1+w(\beta)}$. The strand permutation of a knot-closing braid is a single $b$-cycle, so its sign is $(-1)^{b-1}$. Each positive or negative generator is a transposition, so that same sign is $(-1)^{w(\beta)}$. The multiplier is $1$. This proves invariance under $A\mapsto iA$ also for odd $a$. [F1, step 2.2, algebra]

4.1 Write the integral Laurent polynomial from step 3.1 as $\sum_k n_kA^k$, where $n_k\in\mathbb Z$ and only finitely many are nonzero. Steps 3.2 and 3.3 imply $\sum_kn_k(i^k-1)A^k=0$. Linear independence of Laurent monomials over $\mathbb Q(i)$ gives $n_k=0$ unless $4\mid k$. Replacing $A^{4m}$ by $q^m$ gives the required unique integral Laurent polynomial. Its representative independence and unknot value follow from [F1]. Evaluation of a finite Laurent sum at a nonzero complex number is defined without any denominator other than a power of that number, even when the generic quantum dimension specializes to zero. This proves every assertion, including the root-evaluation interpretation. [F1, step 3.1, step 3.2, step 3.3, algebra]

5.1 To check the conventional variable explicitly, write $a=N-1$ and $\{m\}=q^{m/2}-q^{-m/2}$, $\{m\}!=\prod_{s=1}^m\{s\}$. Murakami's defining positive matrix on basis $e_0,\ldots,e_a$ has coefficient, for input $(k,l)$ and output $(I,J)=(l-r,k+r)$, $\frac{\{l\}!\{a-k\}!}{\{l-r\}!\{r\}!\{a-k-r\}!}q^{(I-a/2)(J-a/2)-r(I-J)/2-r(r+1)/4},$ with $0\le r\le\min(l,a-k)$, and pivotal diagonal $\mu e_j=q^{(2j-a)/2}e_j$; these are the explicit defining formulas in §2.4, not an invoked invariance theorem. At $q=A^4$, change basis by $v_j=A^{j^2}([j]![a-j]!)^{-1}e_{a-j}$. For input $(u,v)$, reversal makes the output $(v+r,u-r)$. The factorial coefficient changes to $z^r[a-u+r]![v+r]!/([a-u]![v]![r]!)$, exactly the one in step 1.1. Before scaling, the exponent of $A$ differs from the declared $R$ coefficient by $2r(v-u+r)$; the change-of-basis factor $A^{u^2+v^2-(u-r)^2-(v+r)^2}$ is its inverse. Thus the two positive crossing matrices are conjugate, as are their inverses, and $\mu$ becomes $K=q_K^H$. Murakami's twist-normalizing scalar is $A^{a(a+2)}$. Replacing this unsigned pivotal and twist by the signed ones of our definition multiplies the normalized closed-braid quotient by $(-1)^{a(b-1-w(\beta))}=1$, by the knot-permutation parity proved in step 3.3. Consequently the Laurent polynomial just established is exactly that source's normalized colored Jones polynomial with $q=A^4$. [F1, step 1.1, step 3.3, step 4.1, algebra] ∎ 
