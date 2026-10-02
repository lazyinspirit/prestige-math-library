---
id: def-commuting-symmetric-and-linear-actions-on-tensor-power
kind: definition
title: Commuting symmetric-group and linear actions on a tensor power
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-symmetric-group, cor-finite-iterated-tensor-products-represent-multilinear-maps, thm-tensor-product-basis-from-bases, def-finite-dimensional-representation-of-a-group-over-a-field, def-intertwiner-equivalent-and-faithful-representations]
justified_by: []
aliases: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Pavel Etingof et al., Introduction to Representation Theory, MIT 18.712 Chapter 4, Sections 4.18-4.21, PDF pp. 18-21"
      url: "https://ocw.mit.edu/courses/18-712-introduction-to-representation-theory-fall-2010/84358595a02a73bced2c4e363a5d66f0_MIT18_712F10_ch4.pdf"
    - title: "Hsueh-Yung Lin, Modern Algebra I, Section 27, printed pp. 71-74"
      url: "https://homepage.ntu.edu.tw/~hsuehyunglin/Modern_Algebra_I.pdf"
verification:
  precheck: n/a
---

## Definition

Let $V$ be a finite-dimensional complex vector space and let $n\ge0$. Write
$\operatorname{End}(V)$ for the $\mathbb C$-vector space of all linear maps
$V\to V$, and $\operatorname{GL}(V)\subseteq\operatorname{End}(V)$ for the
invertible ones
([[def-finite-dimensional-representation-of-a-group-over-a-field]]).
All tensor products below are over $\mathbb C$.

**The tensor power.** For $n\ge1$ fix the parenthesization
$$E_n\;:=\;V^{\otimes n}\;:=\;\underbrace{V\otimes_{\mathbb C}\cdots\otimes_{\mathbb C}V}_{n\text{ factors}},\qquad V^{\otimes0}\;:=\;\mathbb C,$$
and write $v_1\otimes\cdots\otimes v_n$ for the elementary tensor of
$(v_1,\dots,v_n)\in V^n$; for $n=0$ the unique elementary tensor is $1\in\mathbb C$.
By [[cor-finite-iterated-tensor-products-represent-multilinear-maps]] the
assignment $(v_1,\dots,v_n)\mapsto v_1\otimes\cdots\otimes v_n$ is
$\mathbb C$-multilinear and every element of $E_n$ is a finite
$\mathbb C$-linear combination of elementary tensors; for $n=0$ this means
$c=c\cdot1$ for $c\in\mathbb C$. If $e_1,\dots,e_d$ is a $\mathbb C$-basis of
$V$, then by iterating [[thm-tensor-product-basis-from-bases]] the $d^n$ tensors
$e_{i_1}\otimes\cdots\otimes e_{i_n}$ form a $\mathbb C$-basis of $E_n$, so
$E_n$ is finite-dimensional.

**Place permutations: the left $S_n$-action.** Let $S_n$ be the symmetric
group of the set $\{1,\dots,n\}$ ([[def-symmetric-group]]). For
$\sigma\in S_n$ define, on elementary tensors,
$$\sigma\cdot(v_1\otimes\cdots\otimes v_n)\;:=\;v_{\sigma^{-1}(1)}\otimes\cdots\otimes v_{\sigma^{-1}(n)}.$$
The right-hand side depends $\mathbb C$-multilinearly on
$(v_1,\dots,v_n)$, so by the universal property in
[[cor-finite-iterated-tensor-products-represent-multilinear-maps]] there is a
unique $\mathbb C$-linear map $E_n\to E_n$ with this value on every elementary
tensor. Uniqueness is what makes the rule well defined on all of $E_n$, since
the elementary tensors span. The identity permutation acts trivially, and for
$\sigma,\tau\in S_n$ and every elementary tensor,
$$(\sigma\tau)\cdot\bigl(v_1\otimes\cdots\otimes v_n\bigr)=v_{(\sigma\tau)^{-1}(1)}\otimes\cdots\otimes v_{(\sigma\tau)^{-1}(n)}=v_{\tau^{-1}(\sigma^{-1}(1))}\otimes\cdots\otimes v_{\tau^{-1}(\sigma^{-1}(n))},$$
while $\tau\cdot(v_1\otimes\cdots\otimes v_n)=v_{\tau^{-1}(1)}\otimes\cdots\otimes v_{\tau^{-1}(n)}$
and hence
$$\sigma\cdot\bigl(\tau\cdot(v_1\otimes\cdots\otimes v_n)\bigr)=v_{\tau^{-1}(\sigma^{-1}(1))}\otimes\cdots\otimes v_{\tau^{-1}(\sigma^{-1}(n))}.$$
The two agree, so the assignments constitute a left action of the group $S_n$
on $E_n$; equivalently $E_n$ is a left module over $S_n$
([[def-finite-dimensional-representation-of-a-group-over-a-field]]).
For $n=0$ the group $S_0$ is trivial and acts on $E_0=\mathbb C$ by the
identity.

**Diagonal linear action.** For $g\in\operatorname{GL}(V)$ define, on
elementary tensors,
$$g^{\otimes n}\cdot(v_1\otimes\cdots\otimes v_n)\;:=\;gv_1\otimes\cdots\otimes gv_n,$$
again first on elementary tensors by multilinearity and then uniquely on
$E_n$. Since $g$ and $h$ are linear, the two assignments compose in the
expected way: on elementary tensors,
$$(gh)^{\otimes n}\cdot(v_1\otimes\cdots\otimes v_n)=g(hv_1)\otimes\cdots\otimes g(hv_n)=g^{\otimes n}\cdot\bigl(h^{\otimes n}\cdot(v_1\otimes\cdots\otimes v_n)\bigr),$$
and $(\mathrm{id}_V)^{\otimes n}$ is the identity. In particular
$(g^{-1})^{\otimes n}$ is the inverse of $g^{\otimes n}$. For $n=0$ every
diagonal operator is the identity on $\mathbb C$.
Thus $g\mapsto g^{\otimes n}$ is a group homomorphism
$\operatorname{GL}(V)\to\operatorname{GL}(E_n)$, that is, a finite-dimensional
representation of the group $\operatorname{GL}(V)$ on $E_n$.

**The two actions commute.** For $\sigma\in S_n$, $g\in\operatorname{GL}(V)$
and an elementary tensor,
$$\sigma\cdot\bigl(g^{\otimes n}\cdot(v_1\otimes\cdots\otimes v_n)\bigr)=gv_{\sigma^{-1}(1)}\otimes\cdots\otimes gv_{\sigma^{-1}(n)}=g^{\otimes n}\cdot\bigl(\sigma\cdot(v_1\otimes\cdots\otimes v_n)\bigr),$$
so the two linear maps $\sigma\cdot(-)$ and $g^{\otimes n}\cdot(-)$ commute;
equivalently, every $g^{\otimes n}$ is an $S_n$-equivariant endomorphism of
$E_n$ ([[def-intertwiner-equivalent-and-faithful-representations]]).

**The diagonal infinitesimal operator.** For $T\in\operatorname{End}(V)$ put
$$\Delta(T)\;:=\;\sum_{i=1}^{n}\mathbf 1^{\otimes(i-1)}\otimes T\otimes\mathbf 1^{\otimes(n-i)}\ \in\ \operatorname{End}(E_n),$$
where $\mathbf 1=\mathrm{id}_V$ and the sum is $0$ for $n=0$. Each summand
lies in $\operatorname{End}(E_n)$, and $\Delta:\operatorname{End}(V)\to
\operatorname{End}(E_n)$ is $\mathbb C$-linear. It is the first coefficient of
the diagonal action along the line $t\mapsto\mathbf 1+tT$. In this polynomial
calculation, $(\mathbf 1+tT)^{\otimes n}$ is the tensor power of the
endomorphism $\mathbf 1+tT$; it agrees with the $\operatorname{GL}(V)$ action
whenever that endomorphism is invertible. For every $t\in\mathbb C$ one
computes, on elementary tensors,
$$(\mathbf 1+tT)^{\otimes n}\cdot(v_1\otimes\cdots\otimes v_n)=\sum_{k=0}^{n}t^k\sum_{1\le i_1<\cdots<i_k\le n}w_{i_1,\dots,i_k},\qquad (w_{i_1,\dots,i_k})_j=\begin{cases}Tv_j,&j\in\{i_1,\dots,i_k\},\\ v_j,&\text{otherwise}\end{cases}$$
the coefficient of $t$ being $\Delta(T)\cdot(v_1\otimes\cdots\otimes v_n)$
(zero when $n=0$); both sides
are polynomials in $t$ with values in the finite-dimensional space $E_n$
described on a spanning set. Finally let
$$A_n\;:=\;\text{the unital }\mathbb C\text{-subalgebra of }\operatorname{End}(E_n)\text{ generated by }\{\Delta(T):T\in\operatorname{End}(V)\};$$
this is the image of the diagonal action of the universal enveloping algebra
$U(\mathfrak{gl}(V))$ on $E_n$, defined here as that generated algebra, with
no Lie-theoretic input.

## Remarks

- **Why the inverse is in the place action.** Using
  $v_{\sigma(1)}\otimes\cdots\otimes v_{\sigma(n)}$ would give a right action,
  $(\sigma\tau)\cdot x=\tau\cdot(\sigma\cdot x)$, because then the permutation
  acts on the positions by $i\mapsto\sigma(i)$. The convention above is
  arranged so that $S_n$ acts on the left, which is the direction needed for
  the permutation-module and Specht-module conventions of this library.

- **Degenerate cases.** For $n=0$, $E_0=\mathbb C$ is the trivial
  representation of the trivial group $S_0$ and of $\operatorname{GL}(V)$,
  $\Delta(T)=0$ is the empty sum, and $A_0=\mathbb C\,\mathrm{id}_{\mathbb C}$
  is one-dimensional. For $n=1$, $E_1=V$, the group $S_1$ is trivial,
  $g^{\otimes1}=g$, and $\Delta(T)=T$; thus $A_1=\operatorname{End}(V)$. If
  $V=0$ then $E_n=0$ for $n\ge1$ and $E_0=\mathbb C$, and all statements
  below about these spaces remain true with the zero space.

- **$\Delta$ is not multiplicative.** In general
  $\Delta(TT')\ne\Delta(T)\Delta(T')$ for $\dim V>1$: the product expands to
  include cross terms $\mathbf 1^{\otimes(a-1)}\otimes T\otimes\mathbf 1^{\otimes(b-a-1)}\otimes T'\otimes\mathbf 1^{\otimes(n-b)}$
  with $a<b$, and the commutator relation is
  $[\Delta(T),\Delta(T')]=\Delta([T,T'])$, which is not used below. What is
  used is that $A_n$ contains $\Delta(T)$ for every $T$, hence every
  polynomial in these operators; the centralizer statement that uses this
  algebra is proved later on this page.

- **No choice.** All sums are finite sums over $n$ places and over the finite
  group $S_n$, and the multilinear universal property produces the maps
  directly; no selection principle is used.
