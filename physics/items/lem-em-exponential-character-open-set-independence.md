---
id: lem-em-exponential-character-open-set-independence
kind: lemma
title: "Distinct exponential characters are linearly independent on a nonempty open set, and the real-part grouping rule"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 0
deps: [def-directional-and-partial-derivatives, thm-algebra-of-derivatives, thm-chain-rule-for-total-derivatives, thm-complex-exponential-is-entire-with-derivative-itself, def-complex-exponential, def-euclidean-inner-product, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, lem-complex-conjugation-and-modulus-laws, thm-complex-exponential-addition-and-real-extension]
dependency_roles:
  thm-complex-exponential-addition-and-real-extension: mathematical-premise
  def-directional-and-partial-derivatives: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
  thm-complex-exponential-is-entire-with-derivative-itself: mathematical-premise
  def-complex-exponential: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-complex-numbers-and-arithmetic: mathematical-premise
  thm-complex-numbers-form-a-field: mathematical-premise
  def-complex-conjugate-real-imaginary-part-and-modulus: mathematical-premise
  lem-complex-conjugation-and-modulus-laws: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Physicspages, 'Linearly independent exponentials' (post of 26 December 2024, 2 pp.)"
      url: "http://physicspages.com/pdf/Mathematics/Linearly%20independent%20exponentials.pdf"
      locator: "Theorem 1 and its inductive proof (divide by one exponential and differentiate, one frequency at a time): distinct exponentials $e^{\\lambda_1 z},\\dots,e^{\\lambda_m z}$ are linearly independent on the plane. Read in full; the finite-frequency annihilating-operator computation of this item is the operator-product form of the same argument."
    - title: "J. S. Milne, Fields and Galois Theory (v5.10), Theorem 5.14 (Dedekind)"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
      locator: "Theorem 5.14 with proof, printed pp. 85-86: every finite set of distinct group homomorphisms $G\\to F^{\\times}$ is linearly independent. Read directly in the fetched PDF; for the group $(\\mathbb R^n,+)$ the maps $z\\mapsto e^{i\\lambda\\cdot z}$ are distinct characters, so the theorem is the everywhere-vanishing case of clause (a), while the item's induction supplies the localization from a nonempty open set and the real-part grouping of clause (b)."
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $U\subseteq\mathbb R^n$ be a nonempty open set, let $\lambda_1,\dots,\lambda_m\in\mathbb C^n$ ($m\ge1$) be pairwise distinct, and let $c_1,\dots,c_m\in\mathbb C^q$ for some $q\ge1$ (the scalar case $q=1$ included; all statements below are componentwise). Write $\lambda_j\cdot z$ for the componentwise bilinear extension of the Euclidean inner product of [[def-euclidean-inner-product]]; the variable $z$ remains real and $e^{iw}$ for the complex exponential of [[def-complex-exponential]] at $iw$, and consider the $\mathbb C^q$-valued map $F(z):=\sum_{j=1}^m c_j\,e^{i\lambda_j\cdot z}$ on $U$. Then:

**(a) [Complex independence]** if $F(z)=0$ for every $z\in U$, then $c_1=\dots=c_m=0$.

**(b) [Real-part grouping rule]** if $\operatorname{Re}F(z)=0$ for every $z\in U$, then for every $\nu\in\mathbb C^n$ the grouped coefficient
$$C_\nu:=\sum_{\lambda_j=\nu} c_j+\sum_{\lambda_j=-\overline\nu}\overline{c_j}$$
vanishes; in particular $c_j=0$ whenever $\lambda_j\ne-\overline{\lambda_j}$ and $\lambda_j\notin\{\lambda_k,-\overline{\lambda_k}:k\ne j\}$. At a self-paired frequency $\nu=-\overline\nu$ the coefficient is $2\operatorname{Re}\sum_{\lambda_j=\nu}c_j$; in particular at $\nu=0$ only the real part is constrained, and a purely imaginary coefficient is allowed.

**(c) [Scope]** no hypothesis beyond pairwise distinctness of the $\lambda_j$ and nonemptiness and openness of $U$ is used; $\lambda_j=0$ is allowed and the $\lambda_j$ need not be nonzero, ordered or normalized. The statement concerns the open set $U$ and asserts nothing on sets with empty interior, where distinct characters can agree.

## Facts & Assumptions

**Given:** An integer $n\ge1$, a nonempty open $U\subseteq\mathbb R^n$, pairwise distinct $\lambda_1,\dots,\lambda_m\in\mathbb C^n$ with $m\ge1$, and coefficients $c_1,\dots,c_m\in\mathbb C^q$ with $q\ge1$; the map $F(z)=\sum_{j=1}^m c_j e^{i\lambda_j\cdot z}$ on $U$, with the inner product of [[def-euclidean-inner-product]].

[F1] The complex exponential is the everywhere convergent series $\exp w=\sum_{n\ge0}w^n/n!$, with $\exp 0=1$, and it is entire with $\exp'=\exp$ ([[def-complex-exponential]], [[thm-complex-exponential-is-entire-with-derivative-itself]]). Also $\exp(z+w)=\exp z\exp w$ ([[thm-complex-exponential-addition-and-real-extension]]), hence $\exp w\exp(-w)=1$ and $\exp w\ne0$ for every complex $w$.

[F2] Conjugation and modulus: $\overline{a+bi}=a-bi$ and $|a+bi|=\sqrt{a^2+b^2}$, so $w+\overline w=2\operatorname{Re}w$ by the coordinate formulas ([[def-complex-conjugate-real-imaginary-part-and-modulus]]); conjugation is an involutive real-field automorphism satisfying $\overline{z+w}=\overline z+\overline w$, $\overline{zw}=\overline z\,\overline w$, $\overline{\overline z}=z$, and $z\overline z=|z|^2$ ([[lem-complex-conjugation-and-modulus-laws]]).

[F3] $\mathbb C$ is a field containing the embedded copy of $\mathbb R$, every complex number has the unique form $a+bi$ with $a,b\in\mathbb R$ and $i^2=-1$, and a product in a field vanishes only if one of its factors vanishes ([[thm-complex-numbers-form-a-field]], [[def-complex-numbers-and-arithmetic]]).

[F4] In [[def-euclidean-inner-product]], vectors are functions on $\{0,\dots,n-1\}$ and $\langle x,y\rangle=\sum_{r=0}^{n-1}x(r)y(r)$. For the one-based coordinate notation used here, define $x_k:=x(k-1)$ for $1\le k\le n$, for real or complex vectors alike. Thus the componentwise bilinear extension is $\xi\cdot\zeta:=\sum_{r=0}^{n-1}\xi(r)\zeta(r)=\sum_{k=1}^n\xi_k\zeta_k$. For $n\ge2$ define the tail $x':\{0,\dots,n-2\}\to\mathbb C$ by $x'(r):=x(r+1)$ (with real values when $x$ is real); then $\lambda\cdot z=\lambda_1z_1+\lambda'\cdot z'$ under $z=(z_1,z')$, $\lambda=(\lambda_1,\lambda')$. In dimension one identify a vector $x$ with its sole value $x(0)=x_1$, so the product is ordinary scalar multiplication. These are reindexings of the same finite sum, with no coordinate outside its domain.

[F5] Real-variable calculus: partial derivatives of maps on open subsets of $\mathbb R^m$ are derivatives of line maps ([[def-directional-and-partial-derivatives]]); sums, real scalar multiples and products of differentiable functions are differentiable with the sum, scalar-multiple and product rules, and quotients are differentiable where the denominator is nonzero ([[thm-algebra-of-derivatives]]); the chain rule holds for total derivatives ([[thm-chain-rule-for-total-derivatives]]).

## Proof

**Proof technique:** direct; reduce to the scalar case, conjugate the exponential by its series, prove (a) by induction on the dimension using the one-dimensional annihilating operator $\prod_{j\ne j_0}(d/dt-i\lambda_j)$, then obtain (b) by applying (a) to $F+\overline F$ grouped by frequency.

1.1 Reduction to the scalar case. Both assertions are componentwise in $\mathbb C^q$: $F(z)=0$ holds if and only if every component $F_k(z)=\sum_j(c_j)_k e^{i\lambda_j\cdot z}$ vanishes, and $\operatorname{Re}F(z)=0$ if and only if $\operatorname{Re}F_k(z)=0$ for every $k$, while the vector $C_\nu$ of clause (b) vanishes if and only if each of its components $\sum_{\lambda_j=\nu}(c_j)_k+\sum_{\lambda_j=-\overline\nu}\overline{(c_j)_k}$ vanishes. Applying the scalar assertions $q=1$ to each component function therefore yields the general assertions, so we may and do assume $c_1,\dots,c_m\in\mathbb C$ in the rest of the proof. [given, F3, algebra]

1.2 Conjugation of the exponential. For every $w\in\mathbb C$, $\overline{\exp w}=\exp\overline w$. By [F1] the complex numbers $\exp w$ and $\exp\overline w$ are the sums of the everywhere convergent series $\sum_nw^n/n!$ and $\sum_n\overline w^n/n!$, with partial sums $S_N(w)=\sum_{n\le N}w^n/n!$ and $S_N(\overline w)=\sum_{n\le N}\overline w^n/n!$; by [F2] conjugation fixes each real number $n!$ and satisfies $\overline{zw}=\overline z\,\overline w$ and $\overline{z+w}=\overline z+\overline w$, so $\overline{S_N(w)}=S_N(\overline w)$ for every $N$. Also by [F2], $\overline u-\overline v=\overline{u-v}$ and, by the coordinate formula, $|\overline u|=\sqrt{(\operatorname{Re}u)^2+(-\operatorname{Im}u)^2}=|u|$, whence $|\overline u-\overline v|=|u-v|$. Writing $d=\overline{\exp w}-\exp\overline w$, for every $N$ we have $d=(\overline{\exp w}-S_N(\overline w))+(S_N(\overline w)-\exp\overline w)=(\overline{\exp w}-\overline{S_N(w)})+(S_N(\overline w)-\exp\overline w)$, so $|d|\le|\exp w-S_N(w)|+|S_N(\overline w)-\exp\overline w|$; given $\varepsilon>0$, the definition of convergence of the two series supplies $N$ with both summands below $\varepsilon/2$, so $|d|<\varepsilon$, and since $\varepsilon>0$ was arbitrary $|d|=0$, which forces $d=0$ by the definiteness of the modulus in [F2]. [F1, F2, algebra]

1.3 Characters and the annihilating operator. For $\mu\in\mathbb C$ let $\varphi_\mu(t):=\exp(i\mu t)$ for $t\in\mathbb R$, the one-variable restriction of the complex exponential along the real-linear map $t\mapsto i\mu t$. By [F5], the chain rule applied to that map and the entire exponential of [F1] gives $\varphi_\mu'(t)=i\mu\exp(i\mu t)=i\mu\,\varphi_\mu(t)$, and the sum, scalar-multiple and product rules of [F5] give, for any finite combination $\sum_\mu a_\mu\varphi_\mu$ with complex coefficients, derivative $\sum_\mu a_\mu i\mu\,\varphi_\mu$, hence $(d/dt-i\mu)\varphi_\mu=0$ and $(d/dt-i\mu)\varphi_\nu=i(\nu-\mu)\varphi_\nu$ for all $\nu\in\mathbb C$. Consequently, for pairwise distinct $\mu_1,\dots,\mu_m$ and a fixed $j_0$, the composed operator $L_{j_0}:=\prod_{j\ne j_0}(d/dt-i\mu_j)$ is complex-linear on finite combinations and acts on $\varphi_{\mu_k}$ as multiplication by $0$ if $k\ne j_0$ and by the constant $\prod_{j\ne j_0}i(\mu_{j_0}-\mu_j)$ if $k=j_0$; that constant is nonzero because $i\ne0$ and $\mu_{j_0}-\mu_j\ne0$ for $j\ne j_0$ by pairwise distinctness, and a product of nonzero field elements is nonzero by [F3]. [F1, F3, F5, algebra]

1.4 Induction step: reduction to a product box. Let $n\ge2$ and assume assertion (a) established in dimension $n-1$ for every number of frequencies and every nonempty open subset of $\mathbb R^{n-1}$. Let $U\subseteq\mathbb R^n$ be nonempty and open, fix $z^*\in U$ and, by openness, $\varepsilon>0$ with the open product box $B:=\prod_{k=1}^n(z^*_k-\varepsilon,z^*_k+\varepsilon)\subseteq U$; put $B':=\prod_{k=2}^n(z^*_k-\varepsilon,z^*_k+\varepsilon)\subseteq\mathbb R^{n-1}$. Write $z=(z_1,z')$ with $z'\in\mathbb R^{n-1}$ and $\lambda_j=(\lambda_{j1},\lambda_j')$. For each value $\mu$ in the finite set $\{\lambda_{11},\dots,\lambda_{m1}\}$ put $I_\mu:=\{j:\lambda_{j1}=\mu\}$ and $P_\mu(z'):=\sum_{j\in I_\mu}c_je^{i\lambda_j'\cdot z'}$; then, by the splitting identity of [F4], the exponential addition law of [F1] and the distributivity of the finite sum, $F(z_1,z')=\sum_\mu e^{i\mu z_1}P_\mu(z')$ for every $(z_1,z')\in B$, the outer sum running over the pairwise distinct values $\mu$. [given, F1, F4, algebra]

2.1 Base case, dimension one. Let $U\subseteq\mathbb R$ be nonempty and open, so that it contains a nonempty open interval $J$; suppose $F=\sum_{j=1}^mc_j\varphi_{\lambda_j}\equiv0$ on $U$. Fix $j_0$; then $L_{j_0}F\equiv0$ on $J$, and by step 1.3 and the linearity of $L_{j_0}$ we have $L_{j_0}F=c_{j_0}\bigl(\prod_{j\ne j_0}i(\lambda_{j_0}-\lambda_j)\bigr)\varphi_{\lambda_{j_0}}$ on $J$. Choose $t_0\in J$. Evaluating there gives $c_{j_0}\bigl(\prod_{j\ne j_0}i(\lambda_{j_0}-\lambda_j)\bigr)\exp(i\lambda_{j_0}t_0)=0$; cancelling the nonzero exponential by [F1] gives $c_{j_0}\prod_{j\ne j_0}i(\lambda_{j_0}-\lambda_j)=0$; the second factor is a product of nonzero complex numbers, hence nonzero by [F3], so $c_{j_0}=0$ by the field property in [F3]. As $j_0$ was arbitrary, $c_1=\dots=c_m=0$; this proves (a) for $n=1$. [given, step 1.3, F1, F3]

2.2 The conjugate sum. Suppose now that $\operatorname{Re}F\equiv0$ on $U$, and define $\widetilde F(z):=\sum_{j=1}^m\overline{c_j}\,e^{-i\overline{\lambda_j}\cdot z}$ on $U$. For real $z$ and every $j$, step 1.2 applied to $w=i\lambda_j\cdot z$ gives $\overline{e^{i\lambda_j\cdot z}}=\exp\bigl(\overline{i\lambda_j\cdot z}\bigr)$, and by [F2] and the reality of $z$ we have $\overline{i\lambda_j\cdot z}=\overline i\,\overline{\lambda_j\cdot z}=(-i)\bigl(\overline{\lambda_j}\cdot z\bigr)=-i\overline{\lambda_j}\cdot z$; therefore $\overline{F(z)}=\sum_j\overline{c_j}\,e^{-i\overline{\lambda_j}\cdot z}=\widetilde F(z)$ on $U$ by [F2]. Since $w+\overline w=2\operatorname{Re}w$ by [F2], the hypothesis $2\operatorname{Re}F\equiv0$ reads $F+\widetilde F\equiv0$ on $U$. [given, step 1.2, F2]

3.1 One-dimensional slices. Suppose $F\equiv0$ on $U$, fix $z'\in B'$ and define $G(t):=\sum_\mu e^{i\mu t}P_\mu(z')$ for $t$ in the interval $J:=(z^*_1-\varepsilon,z^*_1+\varepsilon)$. By step 1.4, $G(t)=F(t,z')=0$ for every $t\in J$, and $G$ is a finite combination of the pairwise distinct characters $\varphi_\mu$ with complex coefficients $P_\mu(z')$; the base case of step 2.1 applied on the nonempty open interval $J$ therefore gives $P_\mu(z')=0$ for every $\mu$. As $z'\in B'$ was arbitrary, each $P_\mu$ vanishes identically on the nonempty open set $B'$. [step 2.1, step 1.4]

4.1 Induction hypothesis on each group. Fix a value $\mu$. The vectors $\lambda_j'$, $j\in I_\mu$, are pairwise distinct: if $\lambda_j'=\lambda_k'$ and $\lambda_{j1}=\lambda_{k1}=\mu$, then $\lambda_j=\lambda_k$, hence $j=k$ by pairwise distinctness of the $\lambda_j$. The function $P_\mu=\sum_{j\in I_\mu}c_je^{i\lambda_j'\cdot z'}$ vanishes identically on the nonempty open set $B'\subseteq\mathbb R^{n-1}$, so assertion (a) in dimension $n-1$ gives $c_j=0$ for every $j\in I_\mu$. Every index lies in $I_{\lambda_{j1}}$, so $c_1=\dots=c_m=0$; this completes the induction and proves (a) in every dimension $n\ge1$. [step 3.1, step 1.4, induction]

5.1 Frequency grouping and application of part (a). Let $\Phi\subseteq\mathbb C^n$ be the finite set of distinct values among $\lambda_1,\dots,\lambda_m,-\overline{\lambda_1},\dots,-\overline{\lambda_m}$, and for $\nu\in\Phi$ put $C_\nu:=\sum_{j:\lambda_j=\nu}c_j+\sum_{j:-\overline{\lambda_j}=\nu}\overline{c_j}=\sum_{\lambda_j=\nu}c_j+\sum_{\lambda_j=-\overline\nu}\overline{c_j}$. Regrouping the finite sum of step 2.2 over the distinct frequencies and using the bilinearity of the extended inner product in [F4] gives $F+\widetilde F=\sum_{\nu\in\Phi}C_\nu e^{i\nu\cdot z}$ on $U$; the frequencies $\nu\in\Phi$ are pairwise distinct by construction, so assertion (a) as proved in steps 2.1 and 4.1 applied to this finite combination gives $C_\nu=0$ for every $\nu\in\Phi$. For $\nu\notin\Phi$ both defining sums are empty, so $C_\nu=0$ trivially; hence $C_\nu=0$ for every $\nu\in\mathbb C^n$. [given, step 2.2, step 4.1, F4, algebra]

6.1 Consequences and scope. (i) If $\nu=-\overline\nu$ is self-paired, the condition $-\overline{\lambda_j}=\nu$ is equivalent to $\lambda_j=\nu$, so both sums of $C_\nu$ run over the same index set and $C_\nu=\sum_{\lambda_j=\nu}(c_j+\overline{c_j})=2\operatorname{Re}\sum_{\lambda_j=\nu}c_j$ by [F2]; at $\nu=0$ this constrains only the real part, and the constraint is genuinely not stronger: for $m=1$, $\lambda_1=0$, $q=1$ and $c_1=i$ one has $F\equiv i$, so $\operatorname{Re}F\equiv0$ and $C_0=c_1+\overline{c_1}=2\operatorname{Re}i=0$, a nonzero purely imaginary coefficient at frequency $0$. (ii) If $\lambda_j\ne-\overline{\lambda_j}$ and $\lambda_j\notin\{\lambda_k,-\overline{\lambda_k}:k\ne j\}$, then $\{k:\lambda_k=\lambda_j\}=\{j\}$ and $\{k:\lambda_k=-\overline{\lambda_j}\}=\emptyset$ (a member $k=j$ would give $\lambda_j=-\overline{\lambda_j}$, and $k\ne j$ is excluded by hypothesis), so $C_{\lambda_j}=c_j+0=c_j=0$ by step 5.1, which is the stated consequence. (iii) The scope (c) holds: steps 2.1, 1.4 and 4.1 used only pairwise distinctness of the $\lambda_j$ and the nonemptiness and openness of $U$, through the interval $J$ and the product box $B$; the frequencies were never assumed nonzero, ordered or normalized; the proof is a finite construction using complex arithmetic, the series for the exponential and its derivative, and no choice principle. No assertion is made for sets of empty interior: the openness of $U$ is used when a nonempty open interval and a product box are extracted from it, and the statement (c) records that distinct characters can agree on such smaller sets. [step 5.1, step 2.2, F1, F2, F3, algebra] ∎
