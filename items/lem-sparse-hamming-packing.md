---
id: lem-sparse-hamming-packing
kind: lemma
title: "A sparse Hamming packing for every $1\\le k\\le d/2$"
status: published
origin: pipeline
pipeline_run: mathematical-statistics-foundations-37
dependency_level: 0
deps:
  - cor-integral-logarithm-agrees-with-natural-logarithm
  - cor-integral-logarithm-is-strictly-increasing
  - cor-integral-logarithm-reciprocals-and-integer-powers
  - def-binomial-coefficient
  - def-finite-cardinality
  - def-integral-logarithm
  - def-natural-logarithm
  - def-natural-numbers
  - def-nat-order
  - def-nat-power
  - lem-nat-finite-sum-laws-and-the-canonical-embedding
  - lem-nat-embeds-int
  - lem-nat-discrete
  - def-real-exponential-function-and-e
  - def-higher-derivatives-and-smoothness
  - thm-binomial-theorem
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - thm-cardinality-of-a-set-of-functions
  - cor-mean-value-theorem
  - thm-division-algorithm-in-z
  - thm-int-ordered-ring
  - thm-exponential-is-strictly-increasing
  - thm-integral-logarithm-derivative-and-normalisation
  - thm-integral-logarithm-product-law
  - thm-natural-logarithm-laws
  - thm-product-rule
  - thm-sum-rule
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Philippe Rigollet and Jan-Christian Hütter, High-Dimensional Statistics: Lecture Notes, Chapter 4, Lemma 4.14"
      url: "https://arxiv.org/pdf/2310.19244v1"
    - title: "John Duchi, Lecture Notes on Statistics and Information Theory, Chapter 8, Lemma 8.2.3"
      url: "https://stanford.edu/class/stats311/lecture-notes.pdf"
---

## Statement

Let $d,k$ be natural numbers with $1\le k\le d/2$. Let $m$ and $r$ be the
natural quotients determined by
$$mk\le d<(m+1)k,\qquad 4r\le k<4(r+1).$$
Thus $m\ge2$. Write $[m]=\{0,1,\ldots,m-1\}$ and give $[m]^k$ the Hamming
distance $d_H(\omega,\omega')=\#\{j<k:\omega_j\ne\omega'_j\}$. There is a
set $\mathcal C\subseteq[m]^k$ such that distinct $\omega,\omega'\in\mathcal C$
satisfy $d_H(\omega,\omega')>r$ and
$$\log|\mathcal C|\ge \frac{k}{1024}\log\!\left(\frac{ed}{k}\right).$$
For each $\omega\in\mathcal C$, place one $1$ in each of the first $k$ disjoint
coordinate blocks of size $m$, at position $\omega_j$ in block $j$, and put
$0$ in all remaining coordinates of $\mathbb R^d$. The resulting vectors
$u^\omega\in\{0,1\}^d$ have exactly $k$ nonzero coordinates and satisfy
$$\|u^\omega-u^{\omega'}\|_2^2>k/2\qquad(\omega\ne\omega').$$

## Facts & Assumptions

**Given:** Natural numbers $1\le k\le d/2$ and the conventions in the Statement.

[F1] [[lem-nat-embeds-int]] gives an order-preserving and order-reflecting arithmetic embedding $\iota_{\mathbb Z}:\mathbb N\to\mathbb Z$ whose image is exactly the nonnegative integers. By [[lem-nat-discrete]], a positive integer $x=\iota_{\mathbb Z}(n)$ has $n\ge1$, hence $x\ge1$. Identify $d,k$ with their integer images. [[thm-division-algorithm-in-z]] gives integers $q,s,p,t$ with $d=qk+s$, $0\le s<k$, and $k=4p+t$, $0\le t<4$. In the ordered ring of [[thm-int-ordered-ring]], $q<0$ would imply $q\le-1$, so $d=qk+s\le-k+s<0$, contrary to $d\ge0$; likewise $p<0$ would imply $k=4p+t\le-4+t<0$. Thus the quotients and remainders are nonnegative integers. The embedding lemma therefore supplies unique naturals $m,r,s_0,t_0$ with these integer images, and transfers the identities and inequalities to $d=mk+s_0$, $0\le s_0<k$, $k=4r+t_0$, and $0\le t_0<4$. The real-embedding bridge in [F2] transfers $k\le d/2$ to $2k\le d$ in $\mathbb N$. If $m=0$ or $m=1$, the first division identity gives $d<k$ or $d<2k$, contradicting $2k\le d$. Thus $m\ge2$.

[F2] [[def-natural-numbers]], [[def-finite-cardinality]], [[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]], and [[thm-binomial-theorem]]: $[m]^k$ is finite with natural cardinality $m^k$, and a finite set admits a bijection with its cardinality. Let $\iota_{\mathbb R}:\mathbb N\to\mathbb R$ be the canonical natural embedding used by the binomial theorem and natural-power bridge; Clauses 0, 6, and 7 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]] establish that it preserves addition and multiplication (including zero arguments), carries finite natural sums and products to the corresponding real sums and products, and is an order-embedding. Applying its finite-product bridge to the constant list of $k$ copies of $m$, with the natural-power definition, gives $\iota_{\mathbb R}(m^k)=\iota_{\mathbb R}(m)^k$. Throughout the Statement and proof, a natural number or finite cardinality in a real expression means its image under $\iota_{\mathbb R}$; in particular, the displayed logarithmic bound means $\log\iota_{\mathbb R}(|\mathcal C|)\ge(\iota_{\mathbb R}(k)/1024)\log(e\,\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k))$.

[F3] [[def-binomial-coefficient]], [[thm-product-rule]], and [[thm-sum-rule]]: $\binom{k}{j}$ counts $j$-element subsets of $[k]$; finite products multiply cardinalities and disjoint finite unions add them.

[F4] [[thm-binomial-theorem]]: for real $q\in[0,1]$, the binomial theorem is the real identity $\sum_{j=0}^k\iota_{\mathbb R}\!\binom{k}{j}\,q^j(1-q)^{k-j}=1$; each natural binomial coefficient is carried into $\mathbb R$ by $\iota_{\mathbb R}$.

[F5] [[def-integral-logarithm]], [[def-natural-logarithm]], [[def-higher-derivatives-and-smoothness]], [[thm-integral-logarithm-derivative-and-normalisation]], [[thm-integral-logarithm-product-law]], [[thm-natural-logarithm-laws]], [[thm-algebra-of-derivatives]], [[thm-chain-rule]], [[cor-mean-value-theorem]], [[cor-integral-logarithm-is-strictly-increasing]], [[cor-integral-logarithm-reciprocals-and-integer-powers]], and [[cor-integral-logarithm-agrees-with-natural-logarithm]]: $\log x=\int_1^x dt/t$, it is the inverse of $\exp$ with derivative $1/x$, is strictly increasing, its derivative obeys the chain and algebra rules, and it satisfies the product and integer-power identities.

[F6] [[def-real-exponential-function-and-e]] and [[thm-exponential-is-strictly-increasing]]: $e=\exp(1)>1$ because $\exp(0)=1$ and $\exp$ is strictly increasing; the inverse identity $\exp(\log x)=x$ is recorded in [F5].

## Proof

1.1 Put $\mathcal W=[m]^k$ and fix a bijection from the finite initial segment of size $m^k$ onto $\mathcal W$, whose existence is [F2]. Scan that finite segment in its natural order, retaining a word exactly when its Hamming distance from every previously retained word is greater than $r$. The scan terminates; its retained set $\mathcal C$ has pairwise distances greater than $r$, and every word not retained lies in a radius-$r$ ball about an earlier retained word. [F2, given, construct]

1.2 A Hamming ball of radius $r$ has cardinality $B=\sum_{j=0}^r\binom{k}{j}(m-1)^j$: choose the $j$ coordinates that differ and then one of the other $m-1$ symbols at each such coordinate; different values of $j$ give disjoint sets, so [F3] counts the union. [F3, given, algebra]

2.1 Regard natural quantities as their real images under $\iota_{\mathbb R}$ as fixed in [F2]. Since $m\ge2$ and $j\le r\le k/4$, $\log(\iota_{\mathbb R}(m)-1)\ge0$, and the natural-power bridge in [F2] and the integer-power identity in [F5] give $\iota_{\mathbb R}((m-1)^j)=\exp(\iota_{\mathbb R}(j)\log(\iota_{\mathbb R}(m)-1))\le\exp((\iota_{\mathbb R}(k)/4)\log(\iota_{\mathbb R}(m)-1))$. Put $q=1/4$ and $h=-q\log q-(1-q)\log(1-q)=\tfrac12\log2+\tfrac34\log(4/3)$. The binomial weight $q^j(1-q)^{k-j}$ equals $\exp(\iota_{\mathbb R}(j)\log q+(\iota_{\mathbb R}(k)-\iota_{\mathbb R}(j))\log(1-q))$; its exponent decreases with $j$ because $\log q-\log(1-q)=\log(1/3)<0$. Hence for every $j\le r\le k/4$ this weight is at least $\exp((\iota_{\mathbb R}(k)/4)\log q+(3\iota_{\mathbb R}(k)/4)\log(1-q))=\exp(-\iota_{\mathbb R}(k)h)$. Applying [F4] and retaining only $j\le r$ gives $\sum_{j=0}^r\iota_{\mathbb R}\!\binom{k}{j}\le\exp(\iota_{\mathbb R}(k)h)$. Since $\iota_{\mathbb R}$ preserves finite sums, products and natural powers, the ball count then satisfies $\iota_{\mathbb R}(B)\le\exp(\iota_{\mathbb R}(k)h+(\iota_{\mathbb R}(k)/4)\log(\iota_{\mathbb R}(m)-1))$. [F2, F4, F5, F6, step 1.2, algebra]

3.1 Each greedy selection deletes at most $B$ words and all $m^k$ words are eventually deleted. Thus the natural counts satisfy $|\mathcal C|B\ge m^k$. The code is nonempty and $B\ge1$, so after applying $\iota_{\mathbb R}$ all logarithms below have positive arguments; [F2] gives $\iota_{\mathbb R}(|\mathcal C|)\,\iota_{\mathbb R}(B)\ge\iota_{\mathbb R}(m)^k$. Combining this with step 2.1 and the logarithm product and integer-power identities in [F5] yields $\log\iota_{\mathbb R}(|\mathcal C|)\ge\iota_{\mathbb R}(k)f(\iota_{\mathbb R}(m))$, where $f(t)=\log t-\tfrac14\log(t-1)-h$ for real $t\ge2$. [step 1.1, step 2.1, F2, F3, F5, algebra]

4.1 If $m=2$, then $f(2)=\tfrac12\log2-\tfrac34\log(4/3)>1/24$: the lower right-endpoint sum on $[1,2]$ gives $\log2>\tfrac12(2/3+1/2)=7/12$, while $\log(4/3)=\int_1^{4/3}dt/t<1/3$. By [F1] and [F2], $\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k)<3$ and $\log(e\,\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k))=1+\log(\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k))<1+\log3<3$, since $\log3=\int_1^3dt/t<2$; also $1/24>3/1024$. Hence $f(\iota_{\mathbb R}(m))>\tfrac1{1024}\log(e\,\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k))$. [F1, F2, F5, F6, step 3.1, algebra]

5.1 For real $t\ge3$, monotonicity of $\log$ gives $f(3)=\log3-\tfrac34\log(8/3)>\tfrac14\log3>7/48$, since $3>8/3$ and step 4.1 gives $\log3>\log2>7/12$. The chain and algebra rules in [F5] give $f'(t)=1/t-1/(4(t-1))\ge1/(4t)$ and $\frac{d}{dt}\{(1/1024)(1+\log(4t/3))\}=1/(1024t)$, so the derivative of their difference is at least $255/(1024t)>0$. The mean value theorem in [F5] makes $f(t)-(1/1024)(1+\log(4t/3))$ increasing for $t\ge3$. At $t=3$, it exceeds $7/48-4/1024>0$, since $\log4=\int_1^4dt/t<3$. Since $m\ge3$, take $t=\iota_{\mathbb R}(m)$. The division identity gives $\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k)<\iota_{\mathbb R}(m)+1\le4\iota_{\mathbb R}(m)/3$, so $f(\iota_{\mathbb R}(m))\ge(1/1024)\log(e\,\iota_{\mathbb R}(d)/\iota_{\mathbb R}(k))$. [F2, F5, step 4.1, algebra]

6.1 Steps 3.1, 4.1, and 5.1 prove the claimed cardinality bound. Index the coordinates by $[d]=\{0,1,\ldots,d-1\}$ and map each word to the vector specified in the Statement; the first $km$ coordinates contain the $k$ blocks because $km\le d$ by [F1]. Each word gives one nonzero coordinate in each block, so $u^\omega$ has exactly $k$ ones. If two words differ in $s$ blocks, their vectors differ in exactly two coordinates per such block. Since $s>r$, discreteness of $\mathbb N$ gives $s\ge r+1$, and [F1] gives $k<4(r+1)$; after applying the order-preserving map in [F2], $\iota_{\mathbb R}(s)\ge\iota_{\mathbb R}(r)+1>\iota_{\mathbb R}(k)/4$. Therefore $\|u^\omega-u^{\omega'}\|_2^2=2\iota_{\mathbb R}(s)>\iota_{\mathbb R}(k)/2$. [step 1.1, step 3.1, step 4.1, step 5.1, F1, F2, algebra] ∎

## Remarks

The cited sparse Varshamov–Gilbert lemma in Rigollet–Hütter is stated for $k\le d/8$. The proof above supplies the wider $k\le d/2$ range used by the example through a block code; the source citation is context, not a substitute for this local proof.
