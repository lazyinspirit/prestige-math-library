---
id: thm-warren-polynomial-sign-pattern-bound
kind: theorem
title: "An elementary polynomial sign-pattern bound"
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 0
deps: [def-monomials-multidegree-and-total-degree, thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-fermat-for-euclidean-local-extrema]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
sources:
  references:
    - title: "Matus Telgarsky, Deep learning theory lecture notes, Theorem 17.5 and Remark 17.8"
      url: "https://mjt.cs.illinois.edu/dlt/index.html#sec:gen:reluvc"
      locator: "The source states a sharper Warren bound and explicitly omits its proof. The coarser bound here is proved independently in full."
---

## Statement

Let $k,m,d\ge1$ be integers and let $p_1,\ldots,p_m$ be real polynomials in $k$ variables, each of total degree at most $d$ (including the zero polynomial). The number of strict sign vectors $(\operatorname{sgn}p_1(x),\ldots,\operatorname{sgn}p_m(x))\in\{-1,1\}^m$ attained at points where all polynomials are nonzero is at most $(2md+1)^k$. The number of binary vectors $(\mathbf1_{p_i(x)>0})_{i=1}^m$ is also at most $(2md+1)^k$, and the same bound holds with $\ge0$ in place of $>0$. The number of ternary sign vectors in $\{-1,0,1\}^m$ is at most $(4md+1)^k$. Each assertion remains valid when $x$ is restricted to any subset of $\mathbb R^k$.

## Statement references

[[def-monomials-multidegree-and-total-degree|Multivariate polynomials and total degree]]

[Telgarsky, Theorem 17.5: the sharper classical Warren bound](https://mjt.cs.illinois.edu/dlt/index.html#sec:gen:reluvc)

## Facts & Assumptions

**Given:** Integers $k,m,d\ge1$ and real polynomials $p_i$ of total degree at most $d$.

[F1] Polynomials have finite monomial expansions and total degree as in [[def-monomials-multidegree-and-total-degree]].

[F2] A continuous function on a nonempty closed bounded subset of $\mathbb R^k$ attains its maximum ([[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]]).

[F3] The gradient of a differentiable function vanishes at an interior local maximum ([[thm-fermat-for-euclidean-local-extrema]]).

## Proof

1.1 First establish an elementary zero-counting fact. If $D\ge1$ and $r_i(x)=x_i^D+s_i(x)$ with $\deg s_i<D$ for $1\le i\le k$, then these $k$ polynomials have at most $D^k$ distinct common real zeros. In the quotient vector space $V=\mathbb R[x_1,\ldots,x_k]/(r_1,\ldots,r_k)$, every monomial is a linear combination of the $D^k$ monomials $x_1^{a_1}\cdots x_k^{a_k}$ with $0\le a_i<D$. Indeed, if some exponent is at least $D$, replace its factor $x_i^D$ by $-s_i$ modulo the ideal. Every resulting monomial has strictly smaller total degree, so induction on total degree terminates and proves the spanning assertion. Thus $\dim V\le D^k$. [F1, algebra]

1.2 If no strict sign vector occurs, its bound is immediate. Otherwise choose one representative $a_\sigma$ for each attained strict vector $\sigma$. Only finitely many choices are involved, since there are at most $2^m$ vectors. Set $P=\prod_{i=1}^m p_i$ and $D=2md+1$. Then $P(a_\sigma)\ne0$. Choose a single $\delta>0$ so small that $H(a_\sigma)>0$ for every representative, where $H(x)=P(x)^2-\delta\sum_{i=1}^k x_i^{D+1}$. Such a choice exists: there are finitely many positive numbers $P(a_\sigma)^2$, and the other term has a fixed finite value at each representative. Since $D+1$ is even and greater than $2\deg P$, $H(x)\to-\infty$ as $\|x\|\to\infty$. Explicitly, $|P(x)|^2\le C(1+\|x\|^{2md})$ and $\sum_i x_i^{D+1}\ge k^{-(D+1)/2}\|x\|^{D+1}$. [given, F1, choose, construct, algebra]

2.1 For any finite list of distinct common zeros $z_1,\ldots,z_t$, evaluation defines a surjective linear map $V\to\mathbb R^t$. To see surjectivity, for every ordered pair $j\ne h$ choose a coordinate $i(j,h)$ in which $z_j$ and $z_h$ differ, and set $h_j(x)=\prod_{h\ne j}(x_{i(j,h)}-(z_h)_{i(j,h)})/((z_j)_{i(j,h)}-(z_h)_{i(j,h)})$. Then $h_j(z_h)$ is $1$ for $h=j$ and $0$ otherwise. Evaluation vanishes on the ideal because all its generators vanish at these zeros, so it is well defined on $V$ and the classes of $h_j$ map onto the standard coordinate vectors. The classes of $h_1,\ldots,h_t$ are linearly independent: applying evaluation to any relation gives the same relation among the standard coordinate vectors, so every coefficient is zero. A vector space spanned by $D^k$ vectors contains at most $D^k$ independent vectors. Explicitly, insert the independent vectors successively into the given spanning list: express the next one in the current spanning list, replace a listed vector with a nonzero coefficient outside the previously inserted independent vectors, and solve that expression for the replaced vector. The list still spans and has the same length. If there were no such outside coefficient, the new vector would lie in the span of the previously inserted ones, contradicting independence. Thus at most $D^k$ independent vectors can be inserted. This proves $t\le\dim V\le D^k$ using only finite linear algebra. If there were more than $D^k$ zeros, choosing a finite list of $D^k+1$ of them would contradict this inequality. This proves the zero-counting fact without a genericity or multiplicity assumption. [step 1.1, construct, algebra]

2.2 For an attained strict vector $\sigma$, put $S_\sigma=\{x:\operatorname{sgn}p_i(x)=\sigma_i\text{ for all }i\}$. This is open. Its closure has a maximum of $H$: choose a closed ball containing $a_\sigma$ outside which $H<0$, and apply [F2] to its nonempty closed bounded intersection with $\overline{S_\sigma}$. The resulting maximum is positive, because $H(a_\sigma)>0$, and it is also the maximum over the full closure. Any point in $\overline{S_\sigma}\setminus S_\sigma$ has $p_i=0$ for some $i$ by continuity, so there $H=-\delta\sum_i x_i^{D+1}\le0$. Therefore the positive maximum is attained at a point $b_\sigma\in S_\sigma$, which is an interior local maximum of $H$. Distinct strict vectors give distinct such points. [F2, step 1.2, construct]

3.1 By [F3] every $b_\sigma$ is a common zero of the $k$ polynomials $\partial_i H=2P\partial_iP-\delta(D+1)x_i^D$. After division by the nonzero coefficient $-\delta(D+1)$, each has the form $x_i^D+s_i(x)$ with $\deg s_i\le2md-1<D$. The zero-counting fact therefore bounds their distinct common zeros, and hence the number of strict sign vectors, by $D^k=(2md+1)^k$. [F3, step 2.1, step 2.2, algebra]

4.1 For binary vectors with $>0$, choose one representative per attained vector. Choose $\varepsilon>0$ smaller than every nonzero $|p_i|$ occurring at these finitely many representatives; if there are no such values, choose any positive $\varepsilon$. The strict signs of $p_i-\varepsilon$ at the representatives now encode their original binary vectors: positive values remain positive, and nonpositive values become negative. Applying the strict bound to the $m$ shifted polynomials gives the binary bound. For $\ge0$, use $p_i+\varepsilon$: nonnegative values become positive, and negative values remain negative. For ternary vectors choose representatives and $\varepsilon$ in the same way, and use the $2m$ polynomials $p_i-\varepsilon,p_i+\varepsilon$. Their strict sign pairs are $(-,-)$, $(-,+)$, and $(+,+)$ for the original negative, zero, and positive values, respectively, so distinct ternary vectors give distinct strict vectors. The strict bound with $2m$ polynomials gives $(4md+1)^k$. Restriction of the domain only removes vectors. [step 3.1, choose, construct, algebra] ∎

## Remarks

The retained identifier connects to the missing polynomial sign-pattern supplier. The displayed estimate is an elementary coarse version, sufficient for the network bounds below; it does not assert Warren's sharp constant or the sharper division by $k$ in the base. The proof supplies the needed estimate locally and uses no unproved algebraic-geometric zero-counting theorem or choice axiom.
