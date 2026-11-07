---
id: lem-logarithmic-exponent-multiplicities-for-mv-products
kind: lemma
title: "Logarithmic multiplicities and annihilators for finite Eisenstein-type products"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Michel–Venkatesh, The Subconvexity Problem for GL2, §§4.1.6–4.1.7, 4.1.10 and 4.3.3–4.3.7; finite logarithmic calculation adapted from the exponent discussion"
      url: "https://arxiv.org/pdf/0903.3591v2"
---

## Statement

Let $H$ be an abelian group with a homomorphism $\ell:H\to\mathbb R$, and let $K$ be a set. All characters below take values in $\mathbb C^\times$. Supply finitely many functions
$$h_i(y,k)=\sum_{\alpha\in I_i}\alpha(y)\sum_{j=0}^{d_{i,\alpha}}\ell(y)^j v_{i,\alpha,j}(k),\qquad 1\le i\le n,$$
where each $I_i$ is a finite set of characters, $d_{i,\alpha}\ge0$, and the coefficients are complex-valued functions on $K$. Zero summands may be omitted. Define the branch capacity $c_i=\sum_{\alpha\in I_i}(d_{i,\alpha}+1)$. For $h=\prod_i h_i$, expand and group equal product characters. If $\eta$ occurs, let
$$D_\eta=\max_{\alpha_1\cdots\alpha_n=\eta}\sum_i d_{i,\alpha_i}.$$
Then $h=\sum_\eta h_\eta$ with $h_\eta(y,k)=\eta(y)p_\eta(\ell(y),k)$, $\deg p_\eta\le D_\eta$, and
$$\sum_\eta(D_\eta+1)\le\prod_i c_i.$$
Degrees are upper bounds; cancellation may lower them. Empty $I_i$ means $h_i=0$, hence $h=0$, and gives the empty annihilator $1$.

Write $S_a h(y,k)=h(ya,k)$ for $a\in H$. On a component of degree at most $D_\eta$,
$$(S_a-\eta(a))^{D_\eta+1}h_\eta=0.$$
If $\ell(a)\ne0$ and that component has actual degree $d$, with a coefficient nonzero somewhere on $K$, its least positive annihilating power is $d+1$. This is the generalized-eigenvalue length along this translation, not the dimension of all angular coefficient functions.

Supply $a$ with $b=\ell(a)\ne0$, and nonzero constants $A,B$. On the stated radial functions define
$$T=A S_a+B S_{a^{-1}},\qquad \lambda_\eta=A\eta(a)+B\eta(a)^{-1}.$$
Then $(T-\lambda_\eta)^{D_\eta+1}h_\eta=0$. More precisely set $s_\eta=1$ if $A\eta(a)-B\eta(a)^{-1}\ne0$, and $s_\eta=2$ otherwise. A valid power is $r_\eta=\lfloor D_\eta/s_\eta\rfloor+1$; for actual nonzero degree $d$ the least positive power is $\lfloor d/s_\eta\rfloor+1$. Thus
$$P(z)=\prod_{\eta}(z-\lambda_\eta)^{D_\eta+1}$$
annihilates $h$ under $T$. If different $\eta$ give the same $\lambda$, one may instead use one factor with exponent $\max_{\lambda_\eta=\lambda}r_\eta$. Replacing every repeated factor by a single factor without this check is invalid in general.

For completeness the singular branch can be obtained from supplied first-order data. Fix a character $\chi$ and $\rho\in\mathbb R$. Suppose, pointwise in $k$, that $u_s=u_0+s u_1+o(s)$, $w_s=-u_0+s w_1+o(s)$ and $c(s)=c_{-1}/s+O(1)$ as $s\to0$. For fixed $y,k$,
$$\lim_{s\to0}c(s)\chi(y)e^{\rho\ell(y)}\big(e^{s\ell(y)}u_s(k)+e^{-s\ell(y)}w_s(k)\big)=\chi(y)e^{\rho\ell(y)}\big(c_{-1}(u_1+w_1)(k)+2c_{-1}u_0(k)\ell(y)\big).$$
This has one character and logarithmic degree at most one, so capacity at most two. Two distinct ordinary branches, each of degree zero, also have capacity two. Consequently the product of two supplied factors of either type has total multiplicity bound $4$, and four factors have bound $16$. Complex conjugation preserves degrees and conjugates characters. If $|\alpha(y)|=e^{\rho_i\ell(y)}$ for every branch of factor $i$, every product exponent has real part $\sum_i\rho_i$. These conclusions apply to translated factors only if expansions of the displayed types for those translates are supplied.

## Facts & Assumptions

**Given:** The finite radial expansions, group and logarithm, coefficient functions and, for the operator assertion, the exact radial formula for $T$. The singular-limit assertion assumes the specified first-order expansions and cancellation $w_0=-u_0$. No automorphic constant-term formula, analytic continuation, decay theorem, Hecke formula, or integration statement is assumed proved by citation.

## Proof

**Given:** Exactly the data of the Statement.

1.1 Distribute the finite product. A tuple $(\alpha_1,\ldots,\alpha_n)$ contributes character $\eta=\prod_i\alpha_i$ times a polynomial of degree at most $\sum_i d_{i,\alpha_i}$. Grouping tuples with the same character gives $p_\eta$ and its stated degree bound. For each tuple, $1+\sum_i d_{i,\alpha_i}\le\prod_i(1+d_{i,\alpha_i})$, by expanding the right side into nonnegative terms. The maximum for each group is bounded by the sum over its tuples, so summing over groups gives $\sum_\eta(D_\eta+1)\le\sum_{(\alpha_i)}\prod_i(1+d_{i,\alpha_i})=\prod_i c_i$. If a factor is zero the empty expansion proves the separate zero case. [given, algebra]

1.2 On a component $\eta(y)p(\ell(y),k)$, the operator $S_a-\eta(a)$ acts by $\eta(y)\eta(a)(p(L+b,k)-p(L,k))$, where $L=\ell(y)$ and $b=\ell(a)$. For a monomial $L^j$, the difference is $\sum_{t=0}^{j-1}\binom jt L^t b^{j-t}$, by multiplying out $(L+b)^j$. It lowers degree by at least one. If $b\ne0$ and the degree $j>0$ coefficient is nonzero at some $k$, the coefficient of degree $j-1$ is multiplied by $jb\ne0$. Since $\ell(a^m)=mb$ for integers $m$, a polynomial with a nonzero coefficient at a fixed $k$ cannot vanish at every attained logarithm: a nonzero polynomial has at most its degree many roots, by successive division by $L-L_0$. Iterating proves the asserted vanishing and, for actual degree $d$, nonvanishing through power $d$ and vanishing at power $d+1$. Degree zero is killed in one step, while the nonzero original component is not killed by the identity. [given, algebra]

1.3 Put $u=\eta(a)$. On the same component, $T-\lambda_\eta$ acts on the polynomial by $Au(p(L+b)-p(L))+Bu^{-1}(p(L-b)-p(L))$. On $L^j$, the coefficient of $L^{j-t}$ is $\binom jt b^t(Au+(-1)^tBu^{-1})$ for $1\le t\le j$. If $Au-Bu^{-1}\ne0$, the first coefficient is nonzero and the degree drops exactly one for every positive degree. Otherwise $Au=Bu^{-1}\ne0$; the first coefficient vanishes and the second is $\binom j2 b^2(2Au)\ne0$ for $j\ge2$, while constants and linear polynomials are killed. Thus degree drops exactly $s_\eta$ when degree is at least $s_\eta$, and the remaining smaller-degree polynomial is killed in one more application. This proves the stated least powers and upper bounds, including the vanishing case of degree less than $s_\eta$. [given, algebra]

1.4 At fixed $y,k$, put $L=\ell(y)$. The scalar expansions $e^{sL}=1+sL+o(s)$ and $e^{-sL}=1-sL+o(s)$ follow from the convergent exponential series. Substitution into the two supplied first-order expansions gives $e^{sL}u_s+e^{-sL}w_s=s(u_1+w_1+2Lu_0)+o(s)$: the degree-zero terms cancel. Multiplying by $c_{-1}/s+O(1)$ and taking the limit proves exactly the displayed formula. It supplies no uniformity in $y,k$ and no decay of any remainder on a quotient. [given, algebra]

2.1 Each polynomial in $T$ commutes with every other: expanding their finite sums reduces this to $T^iT^j=T^{i+j}$. For each $h_\eta$, the product $P(T)$ contains a factor which kills that component by step 1.3; moving that factor to act first proves $P(T)h_\eta=0$. Sum over $\eta$. When eigenvalues coincide, their maximum required power kills every component in that group, so the reduced polynomial also annihilates $h$. This argument requires neither independent components nor a diagonalizable operator. [step 1.1, step 1.3, algebra]

3.1 The singular expression in step 1.4 has capacity at most two; two distinct degree-zero branches have capacity two as well. Applying step 1.1 to two or four such factors proves the bounds $4$ and $16$, including collisions, zero coefficients and logarithmic branches. For a real-valued $\ell$, conjugating the finite expansion replaces $\eta$ by $\overline\eta$ and conjugates its coefficient polynomial without changing its degree. Finally $|\prod_i\alpha_i(y)|=\prod_i e^{\rho_i\ell(y)}=e^{(\sum_i\rho_i)\ell(y)}$. This proves the real-part assertion and all remaining conclusions. [step 1.1, step 1.4, given, algebra] ∎

## Automorphic application obligations

For the intended application take $H=\mathbb A_F^\times/F^\times$ and $\ell(y)=\log|y|$. The displayed first-order cancellation models the normalized singular Eisenstein series in Michel–Venkatesh §4.1.10, equation (4.11). Ordinary unitary Eisenstein asymptotic terms have two characters of real part $1/2$, while the normalized coincident case has one with logarithmic degree one. These are source descriptions, not local analytic inputs supplied by this draft. Once these expansions and their stability under the required translations are locally established, the two factors of $f=\varphi_2E$ have total multiplicity at most $4$, and the four factors of a mixed density $(U(g)f)\overline{U(h)f}$ have total multiplicity at most $16$, with real parts $1$ and $2$ respectively. If $\varphi_2$ is cuspidal, a separate cusp-decay proof is needed to replace this by the empty-growth case.

The auxiliary-place radial Hecke formula must still be verified on these asymptotic terms, with its normalization and compatibility with the rapid remainder. The polynomial here then kills the supplied asymptotic expression. Deducing that its application to an actual automorphic mixed density is integrable requires additional asymptotic, remainder-stability and cusp-integration inputs. In particular this draft does not discharge the sufficient integrability condition of the registered common-regularizer lemma. No nonzero-mass or cusp-eigenvalue estimate follows from the multiplicity calculation alone.
