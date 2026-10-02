---
id: def-nonconstant-morphism-curves-degree
kind: definition
title: "Degree of a nonconstant morphism of curves"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - cor-birational-smooth-proper-curves-isomorphic
  - cor-dvr-is-a-pid
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-birational-morphism-schemes
  - def-composition-series-and-length-of-a-module
  - def-extension-degree-and-finite-extension
  - def-finitely-generated-field-extension
  - def-finite-morphism-schemes
  - def-local-ring
  - def-scheme-theoretic-fibre
  - lem-integral-finite-type-scheme-function-field
  - prop-extension-degree-one-iff-equal-fields
  - thm-dvr-element-normal-form
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - thm-local-ring-smooth-curve-dvr
  - thm-structure-theorem-for-artinian-rings
  - thm-tower-law-for-finite-field-extensions
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Definition

Assume the Axiom of Choice for the cited finiteness route
([[def-axiom-of-choice]]). Let $k$ be a field and let $f:C\to D$ be a
nonconstant morphism of smooth proper geometrically integral curves over $k$
([[def-algebraic-curve-over-field]]). By
[[thm-nonconstant-morphism-proper-curves-finite-surjective]] the morphism $f$
is surjective and finite, so $f$ is dominant, the comorphism
$k(D)\to k(C)$, $g\mapsto g\circ f$, is an injective homomorphism of $k$-algebras,
and the function-field extension $k(C)/k(D)$ is finite,
([[def-finitely-generated-field-extension]],
[[lem-integral-finite-type-scheme-function-field]]). The **degree of $f$** is
$$\deg(f):=[k(C):k(D)],$$
the degree of the finite extension of function fields
([[def-extension-degree-and-finite-extension]]). It is a positive integer.

The degree also has a precise fibre formula. For a closed point $q\in D$, take
an affine neighbourhood $V=\operatorname{Spec}R$ and put
$A=\mathcal O_{D,q}$ and $B=\Gamma(f^{-1}(V),\mathcal O_C)\otimes_R A$.
The ring $A$ is a discrete valuation ring with residue field $\kappa(q)$, and
$B$ is finite over $A$ because $f$ is finite
([[def-finite-morphism-schemes]], [[def-local-ring]],
[[thm-local-ring-smooth-curve-dvr]]). Since $f$ is dominant and $C$ is
integral, $B$ is torsion-free over $A$; hence it is free over the discrete
valuation ring $A$ ([[cor-dvr-is-a-pid]],
[[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]): dominance
makes $A\to B$ injective, and $B$ is a domain because $f^{-1}(V)$ is an open
subscheme of the integral curve $C$. Its rank is the dimension of its generic
fibre $B\otimes_A k(D)=k(C)$ over
$k(D)$, namely $\deg(f)$ ([[lem-integral-finite-type-scheme-function-field]],
[[def-extension-degree-and-finite-extension]]). Therefore
$\dim_{\kappa(q)}(B/\mathfrak m_qB)=\deg(f)$.

The finite-dimensional fibre algebra $B/\mathfrak m_qB$ is Artinian, and its
local factors are indexed by the points $p\in f^{-1}(q)$; the factor at $p$ is
$\mathcal O_{C,p}/(f^*t_q)$ for a uniformizer $t_q$ of $A$
([[def-scheme-theoretic-fibre]], [[thm-structure-theorem-for-artinian-rings]]).
The local ring $\mathcal O_{C,p}$ is a discrete valuation ring. Define
$e_p=\operatorname{ord}_p(f^*t_q)$, the ramification index at $p$; then the
local quotient has composition length $e_p$ as an $\mathcal O_{C,p}$-module:
its filtration by powers of a uniformizer has $e_p$ successive quotients,
each isomorphic to $\kappa(p)$
([[thm-local-ring-smooth-curve-dvr]], [[thm-dvr-element-normal-form]],
[[def-composition-series-and-length-of-a-module]]). Since $f$ is finite,
$\kappa(p)/\kappa(q)$ is a finite extension; each composition factor therefore
has $\kappa(q)$-dimension $[\kappa(p):\kappa(q)]$. Thus the local factor has
$\kappa(q)$-dimension $e_p[\kappa(p):\kappa(q)]$. Additivity of dimension
across the local factors gives the weighted fibre formula
$$\sum_{p\in f^{-1}(q)}e_p[\kappa(p):\kappa(q)]=\deg(f).$$

By [[prop-extension-degree-one-iff-equal-fields]], $\deg(f)=1$ exactly when
the function-field inclusion is an isomorphism, which is the definition of
birationality ([[def-birational-morphism-schemes]]). Since $C$ and $D$ are
smooth, proper and geometrically integral, a birational morphism between them
is an isomorphism ([[cor-birational-smooth-proper-curves-isomorphic]]);
conversely an isomorphism induces an isomorphism of function fields and has
degree one. Thus
$$\deg(f)=1\quad\Longleftrightarrow\quad f\text{ is birational}\quad\Longleftrightarrow\quad f\text{ is an isomorphism},$$
and $\deg(f)\ge2$ whenever $f$ is not an isomorphism. The degree is
multiplicative in composites: for nonconstant morphisms $C\to D\to E$ of
such curves, the function fields form the finite tower
$k(E)\subseteq k(D)\subseteq k(C)$, so multiplicativity follows from the
tower law for finite field extensions
([[thm-tower-law-for-finite-field-extensions]]).
