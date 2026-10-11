---
id: def-internal-product-on-symmetric-functions
kind: definition
title: The internal (Kronecker) product on symmetric functions
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-kronecker-coefficient-and-internal-tensor-product,
       thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism,
       def-graded-ordinary-representation-ring-of-symmetric-groups,
       def-frobenius-characteristic-map,
       thm-characters-of-direct-sums-tensor-products-and-duals,
       thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "I. G. Macdonald, Symmetric Functions and Hall Polynomials, 2nd ed., Oxford University Press 1995"
      url: "https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf"
      locator: "Chapter I, §7, printed pp. 115-117: the definition $f*g=\\operatorname{ch}(uv)$ of the internal product, its bilinearity and commutativity, and the unit $h_n$ in degree $n$"
    - title: "Igor Pak and Greta Panova, On the complexity of computing Kronecker coefficients, arXiv:1404.0653v3 (2015)"
      url: "https://arxiv.org/pdf/1404.0653"
      locator: "§2.3, printed pp. 5-6, display (1) and the lines following it: the internal product $s_\\alpha*s_\\beta=\\sum_\\gamma g(\\alpha,\\beta,\\gamma)s_\\gamma$ and $s_\\alpha*s_{n-|\\alpha|}=s_\\alpha$"
---

## Definition

Let $\operatorname{ch}:R_S\to\Lambda$ be the Frobenius characteristic restricted
to the graded ordinary representation ring of the symmetric groups
([[def-frobenius-characteristic-map]],
[[def-graded-ordinary-representation-ring-of-symmetric-groups]]). By
[[thm-frobenius-characteristic-is-an-isometric-graded-ring-isomorphism]] it is a
degree-preserving $\mathbb Z$-module isomorphism onto the stable symmetric
function ring $\Lambda=\bigoplus_{m\ge0}\Lambda^m$, so its restriction
$\operatorname{ch}:R(S_m)\to\Lambda^m$ is an isomorphism for every $m\ge0$.

For $f\in\Lambda^m$ and $g\in\Lambda^n$ define
$$f*g:=\begin{cases}\operatorname{ch}\bigl(\operatorname{ch}^{-1}(f)\cdot\operatorname{ch}^{-1}(g)\bigr),&m=n,\\[2pt]0,&m\ne n,\end{cases}$$
where $\cdot$ is the pointwise (internal tensor) product of class functions on
$S_m$; extend $*$ bilinearly to all of $\Lambda$. Call $*$ the
**internal (Kronecker) product** of symmetric functions.

**Well-definedness.** For $m=n$ the class functions $\operatorname{ch}^{-1}(f)$
and $\operatorname{ch}^{-1}(g)$ lie in $R(S_m)$, the integral span of the
irreducible characters of $S_m$
([[def-graded-ordinary-representation-ring-of-symmetric-groups]]). The
pointwise product of two honest characters of $S_m$ is again an honest
character, namely the character of the tensor product of the underlying
representations ([[thm-characters-of-direct-sums-tensor-products-and-duals]]),
and products of $\mathbb Z$-combinations of characters are computed
bilinearly; hence the pointwise product of two elements of $R(S_m)$ lies in
$R(S_m)$, and applying the isomorphism $\operatorname{ch}$ lands in $\Lambda^m$.
The product is therefore well defined and takes $\Lambda^m\times\Lambda^m$ to
$\Lambda^m$.

**Basic properties.** The product is bilinear by construction and inherits
commutativity and associativity from the pointwise product of class functions.
It preserves degrees, in the sense that $\Lambda^m*\Lambda^n\subseteq\Lambda^m$
for $m=n$ and is $0$ for $m\ne n$. On $\Lambda^n$ the unit is
$h_n=s_{(n)}=\operatorname{ch}(\text{trivial character of }S_n)$, because the
trivial character is the unit for pointwise multiplication on $R(S_n)$
([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]]
identifies $\operatorname{ch}(\chi^{(n)})=s_{(n)}=h_n$). The graded direct sum
$\Lambda$ has **no global unit** for $*$: if $e\in\Lambda$ had finite degree
support and $n$ were a degree with $e_n=0$ while $\Lambda^n\ne0$, then
$(e*h_n)_n=e_n*h_n=0\ne h_n$, so $e*h_n\ne h_n$; a global unit would require
$e_n$ to be a unit of $(\Lambda^n,*)$ for every $n$. In particular the ordinary
product unit $1\in\Lambda^0$ is not a unit for $*$ on the positive degrees.

**Schur expansion.** For partitions $\lambda,\mu\vdash n$, the definition and
the Specht character dictionary $\operatorname{ch}(\chi^\lambda)=s_\lambda$
([[thm-frobenius-characteristic-sends-specht-characters-to-schur-functions]])
give
$$s_\lambda*s_\mu=\operatorname{ch}\bigl(\chi^\lambda\cdot\chi^\mu\bigr)=\operatorname{ch}\Bigl(\sum_{\nu\vdash n}g(\lambda,\mu,\nu)\chi^\nu\Bigr)=\sum_{\nu\vdash n}g(\lambda,\mu,\nu)\,s_\nu,$$
because $\chi^\lambda\chi^\mu$ is the character of
$S^\lambda\otimes_{\mathbb C}S^\mu$ and its decomposition has multiplicities
$g(\lambda,\mu,\nu)$
([[def-kronecker-coefficient-and-internal-tensor-product]]).

No form of the Axiom of Choice is used: the transport goes through the
choice-free Frobenius characteristic isomorphism and finite-dimensional
representation theory of finite groups.
