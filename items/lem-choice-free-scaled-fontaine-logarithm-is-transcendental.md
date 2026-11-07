---
id: lem-choice-free-scaled-fontaine-logarithm-is-transcendental
kind: lemma
title: Scaled Fontaine logarithms are crystalline transcendental without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - lem-choice-free-scaled-fontaine-logarithm-not-rational
  - lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion
  - lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring
  - lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel
justified_by: []
proof_strategy: direct
axiom_use: The given Fontaine section and finite coefficient bounds are used explicitly; no Choice or Galois invariant-field assertion is assumed.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean-Marc Fontaine, Le corps des périodes p-adiques
      url: https://www.numdam.org/item/AST_1994__223__59_0/
      locator: Section 4.3; the denominator proof below is local and avoids the source's invariant-field argument
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure with ordinary completion $C$ and a GIVEN compatible primitive cyclotomic system. Put $W=W(\mathcal O_C^\flat)$, $A=\mathcal O_C$, $R=B_{\mathrm{dR}}^+$, and let $\xi$ generate $\ker\theta$. For any GIVEN unit $c\in W^\times$, set $\beta=\xi/(pc)$ and $S=\{\sum_{n\ge0}a_n\beta^n:(a_n)\in W^{\mathbb N}\}\subset R$. Then $u=\log(1+\beta)$ is transcendental over $\operatorname{Frac}(S)$ and therefore over $\operatorname{Frac}(B_{\mathrm{cris}})$. No Choice or Galois fixed-field identity is assumed.

## Facts & Assumptions

**Given:** The valued closure, cyclotomic system, generator and unit in the Statement.

[F1] The displayed $S$ is a $p$-separated subring containing $A_{\mathrm{cris}}$; $\operatorname{Frac}(B_{\mathrm{cris}})=\operatorname{Frac}(A_{\mathrm{cris}})$. [[lem-choice-free-scaled-fontaine-logarithm-not-rational]]

[F2] The Fontaine map $\theta:W\to A$ has a specified set-theoretic section. [[lem-choice-free-fontaine-map-surjectivity-for-the-padic-completion]]

[F3] $R$ is a complete separated DVR with uniformizer $\xi$ and residue $C$; $p$ and $c$ are units in $R$. [[lem-choice-free-de-rham-period-completion-is-a-discrete-valuation-ring]]

[F4] $\xi$ is regular and generates $\ker\theta$. [[lem-cyclotomic-tilt-valuation-and-fontaine-principal-kernel]]

## Proof

1.1 Since $\beta$ is a unit multiple of $\xi$ in $R$, it is a uniformizer. If a displayed series $z=\sum b_n\beta^n\in S$ has zero residue, $\theta(b_0)=0$ gives $b_0=\xi h=pc\beta h$, and moving this coefficient to the next term proves $z\in\beta S$. Iterating finitely many times yields $S\cap\beta^mR=\beta^mS$. Also $\theta:S\to A$ is onto by [F2]. [F2, F3, F4, construct, algebra]

1.2 If $a=\sum b_n\beta^n\notin pS$, there is a least $i$ with $\theta(b_i)\notin pA$. Otherwise the specified section in [F2] defines $c_n=\sigma(\theta(b_n)/p)$ and unique $h_n=(b_n-pc_n)/\xi$ for every $n$, giving $a=p(\sum c_n\beta^n+\sum c h_n\beta^{n+1})\in pS$. For the finitely many indices $n<i$ the same identity moves $b_n$ into $pS$, so $a=pa'+\beta^iv$ with $a',v\in S$ and $\theta(v)=\theta(b_i)\notin pA$. No sequence of independent lifts is chosen. [F2, F4, given, construct, algebra]

2.1 Suppose $\sum_{k=0}^{d}a_ku^k=0$ with $a_k\in S$ and $a_d\ne0$. If $d=0$ this contradicts [F3], so $d\ge1$. By [F1] there is a largest $r\ge0$ with $a_d\in p^rS$; write $a_d=p^ra$ with $a\notin pS$. By step 1.2, $a=pa'+\beta^iv$ with $\theta(v)\notin pA$. Choose $j$ so large that $p^j>i+1$, $(p+p^{-1}-2)p^j>i+1$, and $j(d-k)-r-k\log_p(d+1)>1$ for all $0\le k<d$. Put $N=dp^j+i+1$. [F1, F3, step 1.2, given, construct, algebra]

3.1 Modulo $\beta^NR$, expand $u^k$ by finite convolution. For positive integers $n_1,\ldots,n_k$ of total below $N$, the arithmetic–geometric mean inequality gives $$\sum_l v_p(n_l)\le\log_p\!\prod_l n_l\le k\log_p(N/k)\le k(j+\log_p(d+1)).$$ Thus, for $k<d$, every truncated coefficient of $p^{jd-r}u^k$ is divisible by $p$; the case $k=0$ is immediate. Consequently $p^{jd-r}u^k\in pS+\beta^NR$. [step 2.1, algebra]

3.2 For $k=d$, suppose a tuple of total below $N$ has $\sum_l v_p(n_l)\ge jd$. Put $a_l=v_p(n_l)$; then $\sum n_l\ge\sum p^{a_l}$. If the $a_l$ are not all $j$, integer convexity and $\sum a_l\ge jd$ give $$\sum_l p^{a_l}\ge(d-2)p^j+p^{j+1}+p^{j-1}>dp^j+i,$$ a contradiction. The convexity bound follows by repeatedly replacing two exponents differing by at least two by their values one closer together; the least nonconstant integer tuple with sum at least $dj$ has one exponent $j+1$, one $j-1$, and all others $j$. For $d=1$, the condition $n_1<p^j+i+1<2p^j$ gives the same conclusion directly. Thus every $a_l=j$, and the total bound below $(d+1)p^j$ forces $n_1=\cdots=n_d=p^j$. This is the unique tuple contributing a coefficient not divisible by $p$ after multiplication by $p^{jd}$, and it has degree $dp^j$. Hence $$p^{jd}u^d\equiv\varepsilon\beta^{dp^j}\pmod{pS+\beta^NR},\qquad\varepsilon\in\{1,-1\}.$$ Every other truncated coefficient is $p$-integral and divisible by $p$. [step 2.1, algebra]

4.1 Multiply the assumed relation by $p^{jd-r}$. Step 3.1 puts its lower-degree terms in $pS+\beta^NR$; by step 3.2 the leading term is congruent to $\varepsilon a\beta^{dp^j}$. Inserting $a=pa'+\beta^iv$ gives $\beta^{N-1}v\in pS+\beta^NR$. Write this as $pq+\beta^Nz$ with $q\in S$, $z\in R$. Since $p$ is a unit in $R$, step 1.1 implies $q\in\beta^{N-1}S$. Comparing leading coefficients gives $\theta(v)\in pA$, contradicting step 1.2. Thus $u$ is transcendental over $\operatorname{Frac}(S)$; the last assertion follows from [F1]. All coefficient truncations and tuple counts are finite. [F1, F3, step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, algebra, contradiction] ∎

## Source notes

The direct denominator estimate strengthens the cited local nonrationality supplier. It uses neither its separate Galois argument nor an imported transcendence theorem.
