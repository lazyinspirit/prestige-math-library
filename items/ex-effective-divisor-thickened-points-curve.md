---
id: ex-effective-divisor-thickened-points-curve
kind: example
title: "Under AC, effective divisors on normal proper curves give finite subschemes of the same degree"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-closed-points-of-spectrum-are-maximal-ideals
  - cor-dimension-of-a-direct-sum
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-dependent-choice
  - def-effective-cartier-divisor
  - def-finite-morphism-schemes
  - def-order-codimension-one-rational-function
  - def-principal-weil-divisor-and-class-group
  - def-scheme
  - def-weil-divisor-normal-noetherian-scheme
  - lem-integral-finite-type-scheme-function-field
  - lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union
  - thm-affine-closed-immersions-quotient-rings
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-effective-cartier-divisor-closed-immersion
  - thm-height-one-localisation-of-normal-noetherian-domain-is-dvr
  - thm-proper-ideal-contained-in-maximal-ideal
  - thm-stalk-structure-sheaf-prime-localization
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Divisors, Definition 31.14.1, Lemma 31.14.2 and Definition 31.15.1"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAgoct2111public.pdf"
verification:
  audited: 2026-10-02
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]), hence also the Axiom of
Dependent Choice ([[thm-choice-implies-dependent-implies-countable-choice]],
[[def-dependent-choice]]). Let $k$ be a field and let $C$ be a normal proper
integral curve over $k$ ([[def-degree-divisor-proper-curve]]) with function
field $K=k(C)$. Let
$$D=\sum_{i=1}^{r}n_i[x_i],\qquad n_i\ge0,$$
be an effective divisor on $C$: the points $x_i$ are distinct closed points and
the coefficients are nonnegative integers
([[def-degree-divisor-proper-curve]]). Then $D$ determines an effective
Cartier divisor on $C$ ([[def-effective-cartier-divisor]]) whose associated
closed subscheme $Z_D\hookrightarrow C$
([[thm-effective-cartier-divisor-closed-immersion]]) is finite over $k$,
supported exactly on the points $x_i$ with $n_i>0$, and
$$\dim_k\Gamma(Z_D,\mathcal O_{Z_D})=\sum_{i=1}^{r}n_i\,[\kappa(x_i):k]=\deg_k D .$$
Here $\dim_k\Gamma(Z_D,\mathcal O_{Z_D})$ is the $k$-length of the finite
$k$-scheme $Z_D$. If all $n_i$ vanish, then $D=0$, $Z_D=\varnothing$ and
$\deg_kD=0$; the statement is also correct for $r=0$.

## Facts & Assumptions

**Given:** A field $k$, a normal proper integral curve $C$ over $k$ with generic point $\eta$ and function field $K=\mathcal O_{C,\eta}=k(C)$, the Axiom of Choice, and an effective divisor $D=\sum_{i=1}^{r}n_i[x_i]$ with distinct closed points $x_i$ and integers $n_i\ge0$; write $S=\{x_i:n_i>0\}$.

[F1] $C$ is an integral $k$-scheme of finite type whose underlying space has chain dimension one; a prime divisor of $C$ is the same thing as a closed point. For a closed point $x$ the local ring $\mathcal O_{C,x}$ is a discrete valuation ring with fraction field $K$ and residue field $\kappa(x)$, and $\operatorname{ord}_x$ is its normalised valuation; the residue field $\kappa(x)$ is a finite extension of $k$ with $[\kappa(x):k]=\dim_k\kappa(x)$, and the $k$-degree of a divisor is the coefficient-weighted sum $\deg_kD=\sum_xn_x[\kappa(x):k]$ ([[def-degree-divisor-proper-curve]], [[def-weil-divisor-normal-noetherian-scheme]], [[def-order-codimension-one-rational-function]], [[thm-height-one-localisation-of-normal-noetherian-domain-is-dvr]]).

[F2] For a nonempty affine open subset $U=\operatorname{Spec}A\subseteq C$ the coordinate ring $A$ is a domain with fraction field $K$, the closed points of $U$ are the maximal ideals of $A$, and for the maximal ideal $\mathfrak m_x\subseteq A$ of a point $x\in U$ the stalk is the localisation $\mathcal O_{C,x}=A_{\mathfrak m_x}$ ([[lem-integral-finite-type-scheme-function-field]], [[thm-stalk-structure-sheaf-prime-localization]], [[cor-closed-points-of-spectrum-are-maximal-ideals]]).

[F3] The Axiom of Choice implies the Axiom of Dependent Choice; under Dependent Choice, for every $f\in K^{\times}$ the principal Weil divisor $\operatorname{div}_W(f)=\sum_y\operatorname{ord}_y(f)[y]$, summed over the closed points of $C$, is a well-defined divisor on $C$ whose support is finite, because $C$ is quasi-compact ([[thm-choice-implies-dependent-implies-countable-choice]], [[def-dependent-choice]], [[def-principal-weil-divisor-and-class-group]]).

[F4] An effective Cartier divisor on a scheme $X$ is represented by a local-equation datum $(U_i,f_i)$ with $f_i\in\mathcal O_X(U_i)$ a regular section, that is, multiplication by every germ $(f_i)_x$ is injective; two data represent the same Cartier divisor when their equation ratios are regular units on overlaps, and effectiveness may be checked on any local-equation representation. Such a divisor determines a closed subscheme $Z_D\hookrightarrow X$ with ideal sheaf $I_D=\ker(\mathcal O_X\to(i_D)_*\mathcal O_{Z_D})$, and $I_D|_{U_i}=f_i\mathcal O_{U_i}$ for every datum; the construction depends only on $D$. On a chart whose coordinate ring is a domain, every nonzero element is a regular section ([[def-effective-cartier-divisor]], [[thm-effective-cartier-divisor-closed-immersion]]).

[F5] By the Axiom of Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]], [[def-axiom-of-choice]]).

[F6] Schemes are locally affine: every point of a scheme has an affine open neighbourhood. A closed subscheme of an affine scheme $\operatorname{Spec}A$ cut out by an ideal $I$ is $\operatorname{Spec}(A/I)$. For every nonempty finite family of rings $A_1,\dots,A_s$ there are canonical isomorphisms $\operatorname{Spec}(A_1\times\cdots\times A_s)\cong \operatorname{Spec}A_1\sqcup\cdots\sqcup\operatorname{Spec}A_s$, and the structure sheaf has global sections $\prod_j A_j$; the empty-support case is handled separately in step 4.1. Also $\dim_k(V_1\oplus\cdots\oplus V_s)=\sum_j\dim_kV_j$ for finite-dimensional $k$-vector spaces $V_j$ ([[def-scheme]], [[thm-affine-closed-immersions-quotient-rings]], [[lem-spectrum-of-a-finite-product-ring-is-a-disjoint-union]], [[cor-dimension-of-a-direct-sum]]). If $B$ is a finite-dimensional $k$-algebra, then $\operatorname{Spec}B\to\operatorname{Spec}k$ is finite: its source is affine and $B$ is a finite $k$-module ([[def-finite-morphism-schemes]]).

## Verification

1.1 For every $x\in S$ there exist an affine open subset $U_x=\operatorname{Spec}A_x$ containing $x$ and an element $f_x\in A_x$ such that $U_x\cap S=\{x\}$ and the only zero of $f_x$ in $U_x$ is $x$, with $\operatorname{ord}_x(f_x)=1$.
Indeed, fix $x\in S$ and choose an affine open $U=\operatorname{Spec}A\ni x$ (of $C$, by [F6]). By [F1] and [F2] the local ring $\mathcal O_{C,x}=A_{\mathfrak m_x}$ is a discrete valuation ring with fraction field $K$; choose $\pi\in\mathcal O_{C,x}$ with $v_x(\pi)=1$ and write $\pi=b/s$ with $b\in A$ and $s\notin\mathfrak m_x$. Then $v_x(b)=v_x(\pi)+v_x(s)=1$. By [F3] the principal divisor $\operatorname{div}_W(b)$ has finite support, so $T=\bigl(\operatorname{supp}\operatorname{div}_W(b)\cup S\bigr)\setminus\{x\}$ is a finite set of closed points not containing $x$; being a finite union of singleton closed sets, $T$ is closed, so $W=U\setminus T$ is an open neighbourhood of $x$. Choose an affine open $U_x=\operatorname{Spec}A_x$ with $x\in U_x\subseteq W$ ([F6]) and put $f_x=b|_{U_x}$. Then $U_x\cap S=\{x\}$, and for every closed point $y\in U_x$ with $y\neq x$ we have $y\notin\operatorname{supp}\operatorname{div}_W(b)$, so $\operatorname{ord}_y(f_x)=0$ and $f_x$ does not vanish at $y$. At $x$ we have $\operatorname{ord}_x(f_x)=1$ by construction, so the only zero of $f_x$ in $U_x$ is $x$.
[F1, F2, F3, F5, F6]

2.1 For every $x\in S$ the principal ideal $(f_x)\subseteq A_x$ is the maximal ideal $\mathfrak m_x$ of $x$, so $A_x/(f_x)\cong\kappa(x)$.
First note that $A_x$ is a domain with fraction field $K$ by [F2], so the quotient field of fractions used below is legitimate. Let $g\in\mathfrak m_x$; we show $g\in(f_x)$. The element $h:=g/f_x\in K$ satisfies $h\in(A_x)_{\mathfrak m}$ for every maximal ideal $\mathfrak m\subseteq A_x$: if $\mathfrak m=\mathfrak m_x$ then $v_x(g)\ge1=v_x(f_x)$, while if $\mathfrak m\neq\mathfrak m_x$ then $g\in A_x$ gives $v_{\mathfrak m}(g)\ge0$ and $f_x\notin\mathfrak m$ gives $v_{\mathfrak m}(f_x)=0$, the latter because $\mathfrak m$ corresponds to a closed point $y\in U_x$ with $y\neq x$ and $f_x$ does not vanish at $y$ (step 1.1). We now use the standard fact that a domain equals the intersection of its localisations at maximal ideals: if $h\in(A_x)_{\mathfrak m}$ for every maximal ideal $\mathfrak m$, then $h\in A_x$. To prove it, write $h=a/b$ with $a,b\in A_x$, $b\neq0$, and put $I=\{c\in A_x:ch\in A_x\}$, an ideal containing $b$; if $I\neq A_x$, then by [F5] there is a maximal ideal $\mathfrak m\supseteq I$, but $h\in(A_x)_{\mathfrak m}$ means $h=a'/s$ with $s\notin\mathfrak m$, whence $sh=a'\in A_x$ and $s\in I\subseteq\mathfrak m$, a contradiction. Hence $I=A_x$ and $h\in A_x$. Therefore $g=f_xh\in(f_x)$, so $\mathfrak m_x\subseteq(f_x)$; the reverse inclusion holds because $v_x(f_x)=1>0$ gives $f_x\in\mathfrak m_x$. Thus $(f_x)=\mathfrak m_x$ and $A_x/(f_x)=A_x/\mathfrak m_x=\kappa(x)$.
[F2, F5, step 1.1]

2.2 The equations $f_x^{n_x}$ on $U_x$ for $x\in S$, together with the equation $1$ on the open complement $U_0=C\setminus S$, form an effective Cartier divisor on $C$; its associated closed subscheme $Z_D$ satisfies $Z_D\cap U_x=\operatorname{Spec}\bigl(A_x/(f_x^{n_x})\bigr)$ for $x\in S$ and $Z_D\cap U_0=\varnothing$, so its support is $S$. Moreover the local equation on $U_x$ has order $n_x$ at $x$ and order $0$ at every other point of $U_x$.
The sets $U_x$ ($x\in S$) together with $U_0$ cover $C$: a point of $S$ lies in its own $U_x$, and a point outside $S$ lies in $U_0$. Each equation is a regular section: $f_x^{n_x}\neq0$ in the domain $A_x$ when $n_x>0$, and $1$ is a unit. On an overlap $U_x\cap U_y$ with $x\neq y$ the quotient $f_x^{n_x}/f_y^{n_y}$ is a unit, because $U_x$ contains no point of $S$ other than $x$ and $f_x$ vanishes only at $x$ in $U_x$ (step 1.1), so $f_x$ is a unit on $U_x\cap U_y$, and likewise for $f_y$; on $U_x\cap U_0$ the same argument shows that $f_x^{n_x}$ is a unit. Hence the data glue to a Cartier divisor $D'$ by [F4], and $D'$ is effective because all equations are regular. By [F4] and [F6] its associated closed subscheme has $I_{D'}|_{U_x}=f_x^{n_x}\mathcal O_{U_x}$ and $I_{D'}|_{U_0}=\mathcal O_{U_0}$, so $Z_D\cap U_x=\operatorname{Spec}(A_x/(f_x^{n_x}))$ and $Z_D\cap U_0=\varnothing$. The order of the local equation $f_x^{n_x}$ at $x$ is $n_x\operatorname{ord}_x(f_x)=n_x$, and at every other point of $U_x$ it is $0$; on $U_0$ the equation $1$ has order $0$ everywhere.
[F4, F6, step 1.1]

3.1 For every $x\in S$ and every integer $n\ge0$ one has $\dim_kA_x/(f_x^n)=n\,[\kappa(x):k]$; in particular $A_x/(f_x^n)$ is a finite-dimensional $k$-vector space.
Since $A_x$ is a domain and $f_x\neq0$, multiplication by $f_x^j$ induces, for each $j\ge0$, an isomorphism of $A_x$-modules $A_x/(f_x)\to(f_x^j)/(f_x^{j+1})$, $a\mapsto af_x^j$: it is surjective, and $af_x^j\in(f_x^{j+1})$ implies $a\in(f_x)$ because $A_x$ is a domain. The chain $$A_x/(f_x^n)\supseteq(f_x)/(f_x^n)\supseteq(f_x^2)/(f_x^n)\supseteq\cdots\supseteq(f_x^n)/(f_x^n)=0$$ therefore has $n$ successive quotients isomorphic to $A_x/(f_x)$, each of $k$-dimension $[\kappa(x):k]$ by step 2.1 and [F1]. Since $k$-dimension is additive in such finite filtrations, $\dim_kA_x/(f_x^n)=n\,[\kappa(x):k]$.
[F1, step 2.1]

4.1 The scheme $Z_D$ is finite over $k$ and $\dim_k\Gamma(Z_D,\mathcal O_{Z_D})=\sum_{x\in S}n_x[\kappa(x):k]=\deg_kD$.
By step 2.2 the subschemes $Z_D\cap U_x$ for $x\in S$ form an open cover of $Z_D$ with pairwise empty intersections, so the sheaf axioms identify $$\Gamma(Z_D,\mathcal O_{Z_D})=\prod_{x\in S}A_x/(f_x^{n_x})$$ as $k$-algebras and as $k$-vector spaces; when $S$ is empty this is the zero ring and $Z_D=\varnothing$. Each factor is finite-dimensional over $k$ by step 3.1, so the product is a finite-dimensional $k$-algebra, of dimension $\sum_{x\in S}n_x[\kappa(x):k]$ by [F6]; this equals $\deg_kD$ by [F1], because the terms with $n_i=0$ contribute nothing. Being the spectrum of a finite-dimensional $k$-algebra, $Z_D$ is finite over $k$; more precisely the product decomposition of [F6] exhibits $Z_D$ as the disjoint union of the affine schemes $\operatorname{Spec}(A_x/(f_x^{n_x}))$.
[F6, step 3.1, step 2.2]

5.1 **Conclusion.** Every effective divisor $D=\sum_in_i[x_i]$ with $n_i\ge0$ on a normal proper integral curve $C$ over $k$ determines an effective Cartier divisor whose vanishing subscheme $Z_D$ is finite over $k$, supported on the $x_i$ with $n_i>0$, of $k$-length $\dim_k\Gamma(Z_D,\mathcal O_{Z_D})=\sum_in_i[\kappa(x_i):k]=\deg_kD$. The Axiom of Choice is used exactly as declared, through [F5] in the intersection step 2.1, and it also supplies the Dependent Choice used for the finiteness of $\operatorname{div}_W(b)$ in [F3]; the remaining steps are choice-free. [step 2.2, step 4.1] ∎


Two boundary cases deserve emphasis. If $S=\{x\}$ with $n_x=1$, then $Z_D=\operatorname{Spec}\kappa(x)$ is a single reduced point with $\dim_k\Gamma(Z_D,\mathcal O_{Z_D})=[\kappa(x):k]=\deg_k[x]$. If $k$ is not algebraically closed, then $[\kappa(x):k]>1$ for points with non-$k$-rational residue field, so the $k$-length of a single closed point is its residue degree even though the point is a singleton. The construction uses only the normality of $C$ to know that the local rings are discrete valuation rings; no smoothness, projectivity or separability hypothesis is needed, and the scheme $C$ may have non-$k$-rational closed points.
