---
id: lem-filtered-l-infinity-taylor-map-extends-to-completed-coalgebra
kind: lemma
title: "Filtered Taylor maps extend to the completed coaugmented symmetric coalgebra"
status: draft
dependency_level: 7
origin: session
deps:
  - def-filtered-l-infinity-morphism
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification: {}
sources:
  references:
    - title: "Vasily Dolgushev and Christopher Rogers, A Version of the Goldman–Millson Theorem for Filtered L-infinity-Algebras, §§1–2"
      url: "https://arxiv.org/pdf/1407.6735"
    - title: "Ezra Getzler, Lie theory for nilpotent L-infinity-algebras, §4"
      url: "https://arxiv.org/pdf/math/0404003"
---

## Statement

Let $f:W\to Z$ be a filtered L∞-morphism as in [[def-filtered-l-infinity-morphism]], and put $P=F^1W$, $P'=F^1Z$. On $C(P)=\bigoplus_{n\ge0}S^nP$, including $S^0P=k\cdot1$, use the symmetric multiplication and the counital coproduct

$$\Delta(x_1\cdots x_n)=\sum_{I\sqcup J=\{1,\ldots,n\}}\epsilon(I,J;x)x_I\otimes x_J.$$

Empty subsets are allowed. Define $\mathcal F^NC(P)$ as the span of products $x_1\cdots x_n$ with $x_j\in F^{i_j}W$, all $i_j\ge1$, and $\sum_j i_j\ge N$; scalars have weight zero. Define the **completed coaugmented symmetric coalgebra**

$$\widehat C(P)=\varprojlim_N C(P)/\mathcal F^NC(P).$$

All completions and limits are degreewise. Complete tensor products for coproducts with the sum of the two weight filtrations. Then multiplication, coproduct, counit and coaugmentation extend continuously, as do $Q$ and the Taylor map $F$. Their continuous extensions satisfy $Q^2=0$, $\Delta F=(F\widehat\otimes F)\Delta$, and $FQ=RF$. The length-one projection extends continuously to $p_P:\widehat C(P)\to P$.

For $w\in P^0$ and homogeneous $v\in F^pW$, $p\ge1$, define the convergent expressions

$$e^w=\sum_{n\ge0}\frac{w^n}{n!},\qquad c_q(w)=\sum_{n\ge1}\frac{q_n(w^n)}{n!},\qquad u=f_*(w)=\sum_{n\ge1}\frac{f_n(w^n)}{n!}.$$

They satisfy

$$\Delta e^w=e^w\otimes e^w,\qquad e^we^{-w}=1,\qquad Q(e^w)=c_q(w)e^w,\qquad F(e^w)=e^u,$$

and the marked-input identity

$$F(ve^w)=\left(\sum_{n\ge0}\frac{f_{n+1}(w^n,v)}{n!}\right)e^u.$$

This is a total filtration weight completion on the positive ideal, not an unspecified product by symmetric arity on all of $W$.

## Facts & Assumptions

**Given:** Complete filtered shifted L∞-algebras over a characteristic-zero field and a filtered Taylor morphism between them.

[F1] [[def-filtered-l-infinity-morphism]] supplies the filtration bounds, the finite Taylor partition formula, $FQ=RF$, and the complete filtered algebra convention.

[F2] [[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]] proves that primitives of the algebraic graded symmetric coalgebra are exactly its length-one part.

## Proof

1.1 The ideal $P=F^1W$ is complete and separated in each fixed degree for its induced filtration: a compatible homogeneous family of one fixed degree in $P/F^NW$ defines a compatible family in $W/F^NW$, whose unique lift lies in the kernel of $W\to W/F^1W$, namely $P$. The same argument applies degreewise and to $P'$. Products and coproducts preserve total weight: for a product weights add, and a split of a monomial preserves the sum of the two output weights. They therefore extend to the inverse limits and their completed tensor targets, retaining the algebra and coalgebra identities since these hold on the dense uncompleted subspaces. Scalars, the counit and the coaugmentation extend as well. The length-one projection takes $\mathcal F^NC(P)$ into $F^NW$, so it extends to $P$. [F1, construct, algebra]

2.1 On $C(P)$ the coderivation formula is $Q(1)=0$ and $Q(x_1\cdots x_m)=\sum_{\varnothing\ne I\subseteq\{1,\ldots,m\}}\epsilon(I,I^c;x)q_{|I|}(x_I)x_{I^c}$. Each term has at least the input's total weight by the bound on $q_{|I|}$. Thus $Q$ is continuous and extends. The coderivation identity can be checked by selecting the nonempty distinguished block acted on by $q$ and distributing all remaining factors to the two coproduct outputs; both sides make precisely these selections. The Koszul signs agree, including the sign from moving the degree-one $Q$ across the left output when it acts on the right output. The given $Q^2=0$ continues to hold by density and continuity. [F1, step 1.1, algebra]

3.1 The partition formula for $F$ is finite on each monomial and preserves its total weight. In $\Delta F$, split the output blocks between the two tensor factors. In $(F\otimes F)\Delta$, first split the inputs into the unions of those two groups and then partition each union. These choices are in bijection; the binomial number of ways of splitting ordered output blocks changes $1/s!$ to the product of the two output factorial coefficients. Both signs implement the same permutation of input factors. This proves the coalgebra identity directly and shows that the length-one corestrictions are exactly $f_n$. The finite coalgebra map is determined uniquely by these corestrictions: induct on input length, subtract two such maps and use the reduced coproduct; their difference on the next input has zero reduced coproduct and hence is primitive, so lies in the length-one summand, where its projection is zero. The primitive assertion is exactly [F2], whose proof composes the singleton coproduct component with multiplication to give $s$ times the identity on length $s>1$; characteristic zero makes that coefficient invertible. The weight bound extends $F$ continuously, and $FQ=RF$ extends from the dense subspace. Uniqueness of each continuous extension follows from separatedness of the target. [F1, F2, step 1.1, step 2.1, algebra]

4.1 The term $w^n/n!$ has total weight at least $n$, and each of $q_n(w^n)/n!$ and $f_n(w^n)/n!$ lies in filtration $n$. All three series therefore stabilize modulo every filtration quotient and converge uniquely. The series with marked input $v$ has its $n$th coefficient in filtration $p+n$. In characteristic zero the factorials are invertible. Every reordering of these sums is finite modulo total weight $N$, so it is legitimate in the inverse limit. The binomial coproduct expansion gives $\Delta e^w=e^w\otimes e^w$, and the binomial multiplication expansion gives $e^we^{-w}=1$. [F1, step 1.1, step 3.1, algebra]

5.1 In $Q(w^m)$ the choice of a distinguished block of size $i$ has multiplicity $m!/(i!(m-i)!)$. As $w$ has degree zero all such signs are positive. Divide by $m!$ and sum to obtain $Q(e^w)=(\sum_{i\ge1}q_i(w^i)/i!)e^w=c_q(w)e^w$. For $F(w^m)$, an ordered partition of block sizes $i_1,\ldots,i_s$ occurs $m!/(i_1!\cdots i_s!)$ times. Summing its partition formula after division by $m!$ gives $F(e^w)=\sum_{s\ge0}(1/s!)(\sum_{i\ge1}f_i(w^i)/i!)^s=e^u$. [step 2.1, step 3.1, step 4.1, algebra]

6.1 To evaluate $F(ve^w)$ distinguish the unique output block containing $v$. Choose its $n$ unmarked inputs and apply $f_{n+1}(w^n,v)$; the sum over partitions of all remaining inputs is $e^u$ by step 5.1. The factorials reduce to $1/n!$ on the marked block and the usual output factorial on the other blocks. Moving $v$ or the marked output past copies of the degree-zero $w$ or $u$ produces no signs. This gives the stated marked-input identity, with convergence from step 4.1, and completes all assertions. [step 3.1, step 4.1, step 5.1, algebra] ∎
