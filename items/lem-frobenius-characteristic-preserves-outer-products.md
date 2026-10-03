---
id: lem-frobenius-characteristic-preserves-outer-products
kind: lemma
title: "The Frobenius characteristic preserves outer products"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-outer-induction-product-for-symmetric-group-characters
  - def-frobenius-characteristic-map
  - thm-frobenius-formula-for-induced-characters
  - prop-power-sums-form-a-rational-not-integral-stable-basis
  - thm-centralizer-cardinality-from-cycle-type
  - def-virtual-character-and-character-ring-of-a-finite-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Chapter I §7"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "(7.1), printed p. 112; (7.3) and its proof, printed pp. 113–114 (multiplicativity of ch via Frobenius reciprocity)"
    - title: "Peter Webb, A Course in Finite Group Representation Theory, §4.3"
      url: "https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf"
      locator: "§4.3, printed pp. 54–58 (Frobenius formula for induced characters)"
---

## Statement

For all $m,n\ge0$ and all $f\in R(S_m)$, $g\in R(S_n)$,

$$\operatorname{ch}(f\circ g)=\operatorname{ch}(f)\,\operatorname{ch}(g)\qquad\text{in }\Lambda_{\mathbb C}^{m+n},$$

where $\circ$ is the outer induction product of
[[def-outer-induction-product-for-symmetric-group-characters]] and the
right-hand side is the algebra product in $\Lambda_{\mathbb C}$. If $f$ and
$g$ are rational-valued, the identity holds in $\Lambda_{\mathbb Q}^{m+n}$.

## Facts & Assumptions

**Given:** Integers $m,n\ge0$, honest characters $\chi$ of $S_m$ and $\psi$ of $S_n$, an element $w\in S_{m+n}$ of cycle type $\rho\vdash m+n$, and the block-preserving subgroup $H:=S_m\times S_n\le S_{m+n}$ with blocks $\{1,\dots,m\}$ and $\{m+1,\dots,m+n\}$.

[F1] For $f=\sum_ia_i\chi_i\in R(S_m)$ and $g=\sum_jb_j\psi_j\in R(S_n)$, the outer product is $f\circ g=\sum_{i,j}a_ib_j\operatorname{Ind}_{S_m\times S_n}^{S_{m+n}}(\chi_i\boxtimes\psi_j)$, where $(\chi_i\boxtimes\psi_j)(\sigma,\tau)=\chi_i(\sigma)\psi_j(\tau)$; the assignment $(f,g)\mapsto f\circ g$ is $\mathbb Z$-bilinear ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F2] The characteristic map is $\operatorname{ch}(f)=\sum_{\rho}f(\rho)p_\rho/z_\rho$, is defined on every class function and is linear, and $R(S_m)$ is by definition the set of integral combinations of the honest (irreducible) characters of $S_m$ ([[def-frobenius-characteristic-map]], [[def-virtual-character-and-character-ring-of-a-finite-group]]).

[F3] Frobenius' formula: for a finite group $G$, a subgroup $H\le G$ and the character $\theta$ of a finite-dimensional complex representation of $H$, $\operatorname{Ind}_H^G\theta(g)=\frac1{|H|}\sum_{x\in G:\,x^{-1}gx\in H}\theta(x^{-1}gx)$ for every $g\in G$ ([[thm-frobenius-formula-for-induced-characters]]).

[F4] For every $d\ge0$, $\{p_\mu:\mu\vdash d\}$ is a $\mathbb Q$-basis of $\Lambda_{\mathbb Q}^d$, and $p_\mu=\prod_jp_{\mu_j}$, with $p_\varnothing=1$ ([[prop-power-sums-form-a-rational-not-integral-stable-basis]]). Since each $z_\mu$ is nonzero, $\{p_\mu/z_\mu:\mu\vdash d\}$ is also a rational basis; extending scalars to $\mathbb C$ makes it a $\mathbb C$-basis of $\Lambda_{\mathbb C}^d$.

[F5] Identify $S_m\times S_n$ with the subgroup of $S_{m+n}$ preserving the blocks $\{1,\dots,m\}$ and $\{m+1,\dots,m+n\}$. The two restrictions identify this subgroup with the direct product, including when a block is empty ([[def-outer-induction-product-for-symmetric-group-characters]]).

[F6] For a partition $\rho$, $z_\rho=\prod_ii^{m_i(\rho)}m_i(\rho)!$ is a positive integer ([[thm-centralizer-cardinality-from-cycle-type]]).

## Proof

**Proof technique:** direct.

1.1 Both sides of the asserted identity are $\mathbb Z$-bilinear in $(f,g)$: the outer product is bilinear by [F1], the characteristic map is linear by [F2], and multiplication in $\Lambda_{\mathbb C}$ is bilinear. Since every element of $R(S_m)$ is an integral combination of honest characters, and likewise for $R(S_n)$, it suffices to prove $\operatorname{ch}(\chi\circ\psi)=\operatorname{ch}(\chi)\operatorname{ch}(\psi)$ for honest characters $\chi$ of $S_m$ and $\psi$ of $S_n$. [F1, F2, algebra]

1.2 For honest $\chi,\psi$, the character $\chi\boxtimes\psi$ of $H$ is honest, so Frobenius' formula [F3] applied to $G=S_{m+n}$ and the subgroup $H$ of [F5] gives $(\chi\circ\psi)(w)=\frac1{m!n!}\sum_{x\in S_{m+n}:\,x^{-1}wx\in H}(\chi\boxtimes\psi)(x^{-1}wx)$. [F3, F5]

2.1 The condition $x^{-1}wx\in H$ says that $x^{-1}wx$ preserves $\{1,\dots,m\}$, equivalently that $w$ preserves $A:=x(\{1,\dots,m\})$. Hence the $x$ occurring in the sum are exactly those with $x(\{1,\dots,m\})=A$ for some $m$-element $w$-invariant subset $A\subseteq\{1,\dots,m+n\}$, and for each such $A$ there are exactly $m!\,n!$ permutations $x$ with $x(\{1,\dots,m\})=A$. For all $x$ with the same $A$, the permutation $x^{-1}wx\in H$ has its $S_m$-component conjugate through $x$ to $w|_A$ and its $S_n$-component conjugate to $w|_{A^c}$, so $(\chi\boxtimes\psi)(x^{-1}wx)=\chi(\mu_A)\psi(\nu_A)$, where $\mu_A$ is the cycle type of $w|_A$ and $\nu_A$ the cycle type of $w|_{A^c}$; this is independent of $x$. With the factor $m!n!/m!n!$ cancelling, $(\chi\circ\psi)(w)=\sum_A\chi(\mu_A)\psi(\nu_A)$, the sum over the $m$-element $w$-invariant subsets $A$. [F5, step 1.2, algebra]

3.1 An $m$-element set $A$ is $w$-invariant exactly when it is a union of cycles of $w$, and then $|\mu_A|=m$ and the multisets of parts of $\mu_A$ and $\nu_A$ merge to the multiset of parts of $\rho$. Conversely, every split $\rho=\mu\uplus\nu$ with $|\mu|=m$ arises this way. For a fixed split, the number of $m$-element $w$-invariant $A$ with $\mu_A=\mu$ is $\prod_{i\ge1}\binom{m_i(\rho)}{m_i(\mu)}$, because for each cycle length $i$ one independently chooses which $m_i(\mu)$ of the $m_i(\rho)$ cycles of $w$ of length $i$ are included in $A$. Therefore $(\chi\circ\psi)(\rho)=\sum_{\mu\uplus\nu=\rho,\,|\mu|=m}\Bigl(\prod_{i\ge1}\binom{m_i(\rho)}{m_i(\mu)}\Bigr)\chi(\mu)\psi(\nu)$, an expression depending only on the cycle type $\rho$ of $w$. [step 2.1, algebra]

4.1 On the other side $\operatorname{ch}(\chi)\operatorname{ch}(\psi)=\sum_{\mu\vdash m}\sum_{\nu\vdash n}\chi(\mu)\psi(\nu)\,p_\mu p_\nu/(z_\mu z_\nu)$, using $p_\mu p_\nu=p_{\mu\uplus\nu}$ from [F4], the coefficient of $p_\rho/z_\rho$ equals $\sum_{\mu\uplus\nu=\rho}\chi(\mu)\psi(\nu)z_\rho/(z_\mu z_\nu)$; for a split $\mu\uplus\nu=\rho$ one has $\frac{z_\rho}{z_\mu z_\nu}=\prod_{i\ge1}\frac{m_i(\rho)!}{m_i(\mu)!\,m_i(\nu)!}=\prod_{i\ge1}\binom{m_i(\rho)}{m_i(\mu)}$, since $m_i(\nu)=m_i(\rho)-m_i(\mu)$. This is exactly the coefficient in step 3.1; since $\{p_\rho/z_\rho:\rho\vdash m+n\}$ is a $\mathbb C$-basis of $\Lambda_{\mathbb C}^{m+n}$ by scalar extension [F4] and [F2] gives the same power-sum coefficients for the characteristic, $\operatorname{ch}(\chi\circ\psi)=\operatorname{ch}(\chi)\operatorname{ch}(\psi)$. [F1, F2, F4, F6, step 3.1, algebra]

5.1 By step 1.1 the identity holds for all virtual characters $f\in R(S_m)$ and $g\in R(S_n)$. The cycle-split formula in step 3.1 also extends to these $f,g$ by bilinearity: $(f\circ g)(\rho)=\sum_{\mu\uplus\nu=\rho,\,|\mu|=m}\bigl(\prod_i\binom{m_i(\rho)}{m_i(\mu)}\bigr)f(\mu)g(\nu)$. If $f,g$ are rational-valued, every term is rational, so $f\circ g$ is rational-valued. By [F2], $\operatorname{ch}(f)\in\Lambda_{\mathbb Q}^{m}$ and $\operatorname{ch}(g)\in\Lambda_{\mathbb Q}^{n}$, while their product and $\operatorname{ch}(f\circ g)$ lie in $\Lambda_{\mathbb Q}^{m+n}$. Thus the identity holds over $\mathbb Q$ as claimed. [F1, F2, step 1.1, step 3.1, step 4.1] ∎
