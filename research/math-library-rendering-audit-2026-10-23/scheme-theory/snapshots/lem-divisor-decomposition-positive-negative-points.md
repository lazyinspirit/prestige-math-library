---
id: lem-divisor-decomposition-positive-negative-points
kind: lemma
title: "Every divisor is a finite signed sum of points"
status: published
origin: pipeline
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-dependent-choice
  - def-degree-divisor-proper-curve
  - def-dimension
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-invertible-sheaf-of-cartier-divisor
  - def-euler-characteristic-coherent-sheaf
  - def-sheaf-cohomology-derived-global-sections
  - lem-add-one-point-euler-characteristic
  - lem-cohomology-functoriality-sheaf-and-space
  - lem-degree-effective-divisor-nonnegative
  - lem-riemann-roch-space-finite-dimensional
  - prop-functors-preserve-isomorphisms
  - thm-cartier-weil-divisors-curves-agree
  - thm-choice-implies-dependent-implies-countable-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Assume the Axiom of Choice, inherited from the Euler-characteristic suppliers
below. Let $k$ be a field, let $C$ be a smooth proper geometrically integral
curve over $k$ ([[def-algebraic-curve-over-field]]) and let
$D=\sum_xn_x[x]$ be a divisor on $C$
([[def-divisor-smooth-proper-curve]]). Write $D^{+}$ and $D^{-}$ for the
positive and negative parts of $D$
([[def-divisor-support-positive-negative-parts]]).

1. (Decomposition.) $D$ is a finite $\mathbb Z$-linear combination of closed
   points, and $D=D^{+}-D^{-}$ with $D^{+}$ and $D^{-}$ effective divisors of
   disjoint support; consequently
   $\deg_k(D)=\deg_k(D^{+})-\deg_k(D^{-})$
   ([[def-degree-divisor-proper-curve]],
   [[lem-degree-effective-divisor-nonnegative]]).
2. (Chain.) Let $p_1,\ldots,p_m$ be a listing of the points of
   $\operatorname{Supp}(D^{+})$ in which each point $x$ occurs exactly $n_x$
   times, and let $q_1,\ldots,q_n$ be a listing of the points of
   $\operatorname{Supp}(D^{-})$ in which each point $y$ occurs exactly $-n_y$
   times. For every ordering of the $m+n$ signed symbols
   $+[p_1],\ldots,+[p_m],-[q_1],\ldots,-[q_n]$, the chain of divisors
   $M_0=0$, $M_k=M_{k-1}\pm[r_k]$, where the $k$-th symbol is $\pm[r_k]$, has
   successive differences $\pm[r_k]$ at closed points and ends at
   $M_{m+n}=\sum_i[p_i]-\sum_j[q_j]=D$.
3. (Order-independent iterated computation.) Computing $\chi$ along this
   chain by the one-point shift of
   [[lem-add-one-point-euler-characteristic]], every step changes the value by
   $+[\kappa(r_k):k]$ for an addition and by $-[\kappa(r_k):k]$ for a removal,
   so the telescoping total is
   $$\chi\bigl(C,\mathcal O_C(D)\bigr)=\chi\bigl(C,\mathcal O_C(0)\bigr)+\sum_i[\kappa(p_i):k]-\sum_j[\kappa(q_j):k]=\chi\bigl(C,\mathcal O_C(0)\bigr)+\deg_k(D^{+})-\deg_k(D^{-})=\chi\bigl(C,\mathcal O_C(0)\bigr)+\deg_k(D),$$
   a value that depends only on the multiset of listed points and not on the
   chosen ordering; identifying $\mathcal O_C(0)\cong\mathcal O_C$ with the
   structure sheaf, this reads
   $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C)+\deg_k(D)$. Here $\chi$ is
   the Euler characteristic of coherent sheaves on the proper $k$-scheme $C$
   ([[def-euler-characteristic-coherent-sheaf]]), and every sheaf appearing is
   coherent ([[lem-riemann-roch-space-finite-dimensional]]).

The attachment of the invertible sheaf $\mathcal O_C(D)$ to the divisor $D$
and the identification $\mathcal O_C(0)\cong\mathcal O_C$ use the current
interfaces of [[def-invertible-sheaf-of-cartier-divisor]] and
[[thm-cartier-weil-divisors-curves-agree]]. The latter has an explicit
Dependent Choice premise, supplied by the stated Axiom of Choice through
[[thm-choice-implies-dependent-implies-countable-choice]]; these premises are
recorded in [F6] and [F7]. (Scaffold repair: the scaffold's phrase
"enumeration of the support" is read as a listing with repetitions, each point
occurring exactly as often as its coefficient, which is what makes the chain
end at $D$; the statement above says this explicitly.)

## Facts & Assumptions

**Given:** the Axiom of Choice inherited from the Euler-characteristic and Cartier-divisor suppliers; a field $k$, a smooth proper geometrically integral curve $C$ over $k$, a divisor $D=\sum_xn_x[x]$ on $C$, and listings $p_1,\ldots,p_m$, $q_1,\ldots,q_n$ as in part 2.

[F1] Divisors, parts and degree. The divisors on $C$ are the finite formal integral combinations of closed points and form the free abelian group $\operatorname{Div}(C)$; the support $\operatorname{Supp}(D)=\{x:n_x\ne0\}$ is finite, $D^{+}=\sum_x\max(n_x,0)[x]$, $D^{-}=\sum_x\max(-n_x,0)[x]$ are effective with disjoint supports, and $D=D^{+}-D^{-}$; the $k$-degree is $\deg_k(D)=\sum_xn_x[\kappa(x):k]$ and $\deg_k:\operatorname{Div}(C)\to\mathbb Z$ is a group homomorphism, while $\deg_k(E)\ge0$ for every effective $E\ge0$ ([[def-divisor-smooth-proper-curve]], [[def-divisor-support-positive-negative-parts]], [[def-degree-divisor-proper-curve]], [[lem-degree-effective-divisor-nonnegative]]).

[F2] The one-point shift. For every divisor $M$ on $C$ and every closed point $r\in C$, $\chi(C,\mathcal O_C(M+[r]))=\chi(C,\mathcal O_C(M))+[\kappa(r):k]$, and more generally $\chi(C,\mathcal O_C(M+E))=\chi(C,\mathcal O_C(M))+\deg_k(E)$ for every effective divisor $E\ge0$; both identities hold in $\mathbb Z$ ([[lem-add-one-point-euler-characteristic]]).

[F3] Coherence and finiteness. For every divisor $M$ on $C$ the invertible sheaf $\mathcal O_C(M)$ is a coherent $\mathcal O_C$-module, and $H^q(C,\mathcal O_C(M))$ is a finite-dimensional $k$-vector space for every $q\ge0$ that vanishes for $q\ge2$ ([[lem-riemann-roch-space-finite-dimensional]]).

[F4] The Euler characteristic of a coherent module $\mathcal F$ on the proper $k$-scheme $C$ is $\chi(C,\mathcal F)=\sum_{q\ge0}(-1)^q\dim_kH^q(C,\mathcal F)$, a finite alternating sum of finite dimensions and hence an element of $\mathbb Z$ ([[def-euler-characteristic-coherent-sheaf]], [[def-sheaf-cohomology-derived-global-sections]], [[def-dimension]]).

[F5] Functoriality in the sheaf. For each $q\ge0$ the assignment $\mathcal F\mapsto H^q(C,\mathcal F)$ is a covariant additive functor on abelian sheaves on $C$, so a morphism $\varphi:\mathcal F\to\mathcal G$ induces $H^q(C,\varphi):H^q(C,\mathcal F)\to H^q(C,\mathcal G)$ compatibly with identities and composites ([[lem-cohomology-functoriality-sheaf-and-space]]); a functor sends isomorphisms to isomorphisms ([[prop-functors-preserve-isomorphisms]]), so isomorphic sheaves have isomorphic cohomology groups in every degree and equal Euler characteristics.

[F6] The current Cartier-to-Weil interface identifies the Weil divisors of this smooth proper curve with Cartier divisors and preserves their principal divisors ([[thm-cartier-weil-divisors-curves-agree]]). The associated sheaf is constructed with $\mathcal O_C(D)\subseteq\mathcal K_C$ and $\mathcal O_C(0)\cong\mathcal O_C$ by [[def-invertible-sheaf-of-cartier-divisor]]. These are the interfaces for every sheaf $\mathcal O_C(M)$ in the chain.

[F7] The Axiom of Choice is used through the Euler-characteristic supplier [F2], the finiteness and coherence supplier [F3], the Euler-characteristic definition [F4] and the Cartier-to-Weil interface [F6]. In ZF, AC implies DC by [[thm-choice-implies-dependent-implies-countable-choice]], so the DC premise of [[thm-cartier-weil-divisors-curves-agree]] is available from the stated assumption; no further selection is made below ([[def-axiom-of-choice]], [[def-dependent-choice]]).

## Proof

**Proof technique:** direct; split the divisor into positive and negative parts, expand each coefficient into that many single-point operations, walk the resulting finite chain through the divisor group while telescoping the one-point shifts of $\chi$, and observe that the total is a signed sum of residue degrees over a multiset that does not depend on the ordering.

1.1 Decomposition. By [F1] the support of $D=\sum_xn_x[x]$ is a finite set of closed points, so $D$ is a finite $\mathbb Z$-linear combination of closed points. By [F1] the parts $D^{+}=\sum_x\max(n_x,0)[x]$ and $D^{-}=\sum_x\max(-n_x,0)[x]$ are effective divisors with disjoint supports and $D=D^{+}-D^{-}$. Since $\deg_k$ is a group homomorphism [F1], $\deg_k(D)=\deg_k(D^{+})-\deg_k(D^{-})$, and both terms are nonnegative integers because $D^{+}$ and $D^{-}$ are effective [F1]. [F1]

2.1 The chain. In the free abelian group $\operatorname{Div}(C)$ of [F1] one has $\sum_i[p_i]=\sum_{x\in\operatorname{Supp}(D^{+})}n_x[x]=D^{+}$ and $\sum_j[q_j]=\sum_{y\in\operatorname{Supp}(D^{-})}(-n_y)[y]=D^{-}$, because the listings repeat each point with its coefficient; hence $\sum_i[p_i]-\sum_j[q_j]=D^{+}-D^{-}=D$ by step 1.1. Define $M_0=0$ and, for $k=1,\ldots,m+n$, $M_k=M_{k-1}+[r_k]$ if the $k$-th symbol is $+[r_k]$ and $M_k=M_{k-1}-[r_k]$ if it is $-[r_k]$; each $M_k$ is an element of $\operatorname{Div}(C)$, each successive difference $M_k-M_{k-1}$ is $\pm[r_k]$ at the closed point $r_k$, and the final term is $M_{m+n}=\sum_i[p_i]-\sum_j[q_j]=D$ for every ordering, because addition in the abelian group $\operatorname{Div}(C)$ is commutative and associative. [F1, step 1.1]

3.1 The shift at each step. Let $M\in\operatorname{Div}(C)$ and let $r\in C$ be a closed point. Applying the one-point identity of [F2] to $M$ gives $\chi(C,\mathcal O_C(M+[r]))=\chi(C,\mathcal O_C(M))+[\kappa(r):k]$, and applying it to $M-[r]$ in place of $M$ gives $\chi(C,\mathcal O_C(M))=\chi(C,\mathcal O_C(M-[r]))+[\kappa(r):k]$, that is, $\chi(C,\mathcal O_C(M-[r]))=\chi(C,\mathcal O_C(M))-[\kappa(r):k]$. All these values are defined: for every divisor $M'$ the sheaf $\mathcal O_C(M')$ is coherent by [F3], so [F4] applies to the proper $k$-scheme $C$. Consequently each step of the chain of step 2.1 changes the Euler characteristic by $+[\kappa(r_k):k]$ for a symbol $+[r_k]$ and by $-[\kappa(r_k):k]$ for a symbol $-[r_k]$. [F2, F3, F4, step 2.1]

4.1 Telescoping. Induction on $k$ using step 3.1 gives $\chi(C,\mathcal O_C(M_k))=\chi(C,\mathcal O_C(0))+\sum_{j=1}^{k}\varepsilon_j[\kappa(r_j):k]$, where $\varepsilon_j=1$ if the $j$-th symbol is an addition and $\varepsilon_j=-1$ if it is a removal. At $k=m+n$ this is $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C(0))+\sum_i[\kappa(p_i):k]-\sum_j[\kappa(q_j):k]$ by step 2.1, and the two sums are $\sum_{x\in\operatorname{Supp}(D^{+})}n_x[\kappa(x):k]=\deg_k(D^{+})$ and $\sum_{y\in\operatorname{Supp}(D^{-})}(-n_y)[\kappa(y):k]=\deg_k(D^{-})$ by the definition of the listings, so $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C(0))+\deg_k(D^{+})-\deg_k(D^{-})=\chi(C,\mathcal O_C(0))+\deg_k(D)$ by step 1.1. The multiset of signed residue degrees $\{\varepsilon_j[\kappa(r_j):k]\}$ is determined by the listings alone, so this total, and hence the iterated value, is independent of the chosen ordering. [F1, step 1.1, step 2.1, step 3.1]

5.1 The base term and conclusion. The chain of step 2.1 starts at the zero divisor $0$, whose attached sheaf is $\mathcal O_C(0)$; the current dictionary [F6] identifies $\mathcal O_C(0)\cong\mathcal O_C$ with the structure sheaf, and by [F5] isomorphic sheaves have isomorphic cohomology in every degree, hence equal Euler characteristics, so $\chi(C,\mathcal O_C(0))=\chi(C,\mathcal O_C)$. With step 4.1 this gives the asserted identity $\chi(C,\mathcal O_C(D))=\chi(C,\mathcal O_C)+\deg_k(D)$. Steps 1.1, 2.1 and 4.1 prove the decomposition, chain and order-independence clauses, so all three parts of the Statement hold. The Axiom of Choice is used only through the suppliers recorded in [F7], namely the one-point shift [F2], the coherence and finiteness of [F3], the Euler-characteristic definition [F4] and the current dictionary [F6], with DC supplied by AC as recorded there; no further selection is made, the listings of part 2 being finite and fixed. [F2, F3, F4, F5, F6, F7, step 1.1, step 2.1, step 4.1] ∎
