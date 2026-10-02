---
id: cor-picard-projective-line-integers
kind: corollary
title: "The Picard group of the projective line"
status: published
origin: pipeline
deps:
  - cor-degree-descends-picard-curve
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-invertible-sheaf
  - def-invertible-sheaf-of-cartier-divisor
  - def-picard-group-scheme
  - def-sheaf-tensor-product
  - def-twisting-sheaf-proj
  - lem-cartier-divisor-addition-tensor
  - lem-projective-line-divisors-classified-by-degree
  - lem-uniqueness-of-twists-on-the-projective-line
  - thm-cartier-divisors-mod-principal-to-picard
  - thm-gluing-sheaves
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 8 and 6"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Michael Artin, MIT 18.721 Introduction to Algebraic Geometry (July 20, 2020 notes), Ch. 8"
      url: "https://math.mit.edu/classes/18.721/ag-jul20.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 18.5 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
pipeline_run: frontier-37-owner-30
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Assume the Axiom of Choice as inherited from the divisor, degree and
twisting-sheaf suppliers. For every field $k$ the degree homomorphism
induces an isomorphism $\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$.
Under it the class of the twisting sheaf $\mathcal O_{\mathbb P^1_k}(d)$
corresponds to $d$, so $[\mathcal O(1)]$ is a generator, and every invertible
sheaf on $\mathbb P^1_k$ is isomorphic to $\mathcal O_{\mathbb P^1_k}(d)$ for
a unique integer $d$.

## Facts & Assumptions

**Given:** a field $k$, the projective line $\mathbb P^1_k$ with structure
sheaf $\mathcal O=\mathcal O_{\mathbb P^1_k}$, and the twisting sheaves
$\mathcal O(d)$ for $d\in\mathbb Z$.

[F1] An invertible $\mathcal O_X$-module is one locally isomorphic to $\mathcal O_X$; the Picard group $\operatorname{Pic}(X)$ is the abelian group of isomorphism classes $[\mathcal L]$ of invertible modules under $[\mathcal L]\cdot[\mathcal M]=[\mathcal L\otimes_{\mathcal O_X}\mathcal M]$, with identity $[\mathcal O_X]$ and inverse $[\mathcal L^\vee]$ ([[def-picard-group-scheme]], [[def-invertible-sheaf]]).

[F2] $\mathbb P^1_k$ is a smooth proper geometrically integral curve over $k$; for every divisor $D$ on $\mathbb P^1_k$ the difference $D-\deg_k(D)[\infty]$ is a principal Cartier divisor, so the degree homomorphism $\deg_k\colon\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\to\mathbb Z$ is an isomorphism of groups; and $\mathcal O(1)\cong\mathcal O(\infty)=\mathcal O([\infty])$ with $\deg_k\mathcal O(1)=\deg_k[\infty]=[\kappa(\infty):k]=1$ ([[lem-projective-line-divisors-classified-by-degree]]).

[F3] Cartier divisors on a scheme $X$ form a group $\operatorname{CaDiv}(X)$, a Cartier divisor being represented by local meromorphic equations; the principal Cartier divisors form a subgroup $\operatorname{Prin}(X)$ which is the image of the global meromorphic units, so two Cartier divisors are linearly equivalent exactly when their difference is principal ([[def-cartier-divisor]]).

[F4] For a commutative nonnegatively graded ring $S$ and $X=\operatorname{Proj}S$, the twisting sheaf is $\mathcal O_X(n)=\widetilde{S(n)}$ with $\Gamma(D_+(f),\mathcal O_X(n))=S(n)_{(f)}$, multiplication of the graded ring gives morphisms $\mathcal O_X(m)\otimes\mathcal O_X(n)\to\mathcal O_X(m+n)$, and $\mathcal O_X(0)\otimes\mathcal O_X(n)\to\mathcal O_X(n)$ is the canonical identification; over a field $F$ and the standard charts $D_+(x_i)$ of $\mathbb P^1_F=\operatorname{Proj}F[x_0,x_1]$, the localised degree-zero part $S(0)_{(x_i)}$ is the polynomial ring $F[x_j/x_i]$ in the ratio variable and the degree-$n$ part $S(n)_{(x_i)}$ is its free module of rank one on the generator $x_i^n$, so the displayed multiplication morphisms are isomorphisms on each chart ([[def-twisting-sheaf-proj]], [[def-sheaf-tensor-product]]). Compatible local sheaves with their overlap identifications glue uniquely, and invertible sheaves glued from free rank-one sheaves with matching frames and transition units are isomorphic ([[thm-gluing-sheaves]]). On $\mathbb P^1_k$ the twists defined on the standard charts by the prescription $e_1=u^ne_0$ satisfy $\mathcal O(n)\cong\mathcal O(m)$ if and only if $n=m$ ([[lem-uniqueness-of-twists-on-the-projective-line]]).

[F5] The actual Cartier-to-Picard dictionary sends a Cartier divisor $D$ to $[\mathcal O_X(D)]$, is a group homomorphism with kernel the principal Cartier divisors, and is surjective when $X$ is integral ([[thm-cartier-divisors-mod-principal-to-picard]]). The associated sheaf has local frame $f_i^{-1}$ for local equation $f_i$, and $\mathcal O_X(0)\cong\mathcal O_X$ ([[def-invertible-sheaf-of-cartier-divisor]]). Addition of Cartier divisors corresponds to tensor product, and $\mathcal O_X(-D)\cong\mathcal O_X(D)^\vee$ ([[lem-cartier-divisor-addition-tensor]]). On a normal proper integral curve $C$ over $k$, $[\mathcal O_C(D)]\mapsto\deg_kD$ is a well-defined group homomorphism $\operatorname{Pic}(C)\to\mathbb Z$ ([[cor-degree-descends-picard-curve]]); [F2] verifies that $X=\mathbb P^1_k$ satisfies these hypotheses.

[F6] The Axiom of Choice is inherited from the divisor classification [F2], the twisting-sheaf construction [F4], and the degree-descent theorem in [F5]. The Cartier-to-Picard dictionary, associated Cartier-divisor sheaf and addition/tensor identifications in [F5] use no choice principle; no additional choice principle is needed below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; transport the divisor-class isomorphism of [F2] across the Cartier-to-Picard dictionary of [F5], then identify the integer attached to $\mathcal O(d)$ by the transition computation of [F4].

1.1 The degree isomorphism on divisor classes. By [F2] the homomorphism $\deg_k$ from the group $\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)$ of Cartier divisor classes to $\mathbb Z$ is an isomorphism: it is well defined by [F3], surjective because $m[\infty]$ has degree $m$, and injective because a degree-zero divisor is principal. [F2, F3]

1.2 The Cartier-to-Picard dictionary. Since $\mathbb P^1_k$ is integral, the actual dictionary [F5] induces an isomorphism $\operatorname{CaDiv}(\mathbb P^1_k)/\operatorname{Prin}(\mathbb P^1_k)\to\operatorname{Pic}(\mathbb P^1_k)$ with inverse $[\mathcal O(D)]\mapsto$ the class of $D$. Its compatibility with addition and duals is given by [F5] and the local tensor identifications. [F5]

2.1 The composite isomorphism. Composing the inverse of the isomorphism of step 1.2 with the degree isomorphism of step 1.1 gives a group isomorphism $\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$. By the degree-descent supplier [F5], it is given on classes by $[\mathcal O(D)]\mapsto\deg_kD$. [F5, step 1.1, step 1.2]

3.1 The twists and the degree. Let $d\in\mathbb Z$. By [F2], $\mathcal O(1)\cong\mathcal O([\infty])=\mathcal O(\infty)$, and by the addition and dual isomorphisms of [F5] applied to the multiple $d[\infty]$ one has $\mathcal O(d[\infty])\cong\mathcal O([\infty])^{\otimes d}\cong\mathcal O(1)^{\otimes d}$. To compare this with the twisting sheaf, let $U_i=D_+(x_i)$ be the standard charts of $\mathbb P^1_k=\operatorname{Proj}k[x_0,x_1]$; by [F4] the module $S(n)_{(x_i)}=x_i^nS(0)_{(x_i)}$ is free of rank one over $S(0)_{(x_i)}$ on the generator $x_i^n$, so $\mathcal O(1)^{\otimes d}$ is free of rank one on $U_i$ with frame $x_i^d$, and on the overlap the frames satisfy $x_1^d=(x_1/x_0)^dx_0^d$ with the unit $(x_1/x_0)^d$; this is exactly the transition unit of the twist of index $d$ in [F4], so the gluing uniqueness of [F4] gives $\mathcal O(1)^{\otimes d}\cong\mathcal O(d)$ for every $d$ (for $d<0$ duals invert the transition units, and the identification of [F5] provides the dual isomorphism $\mathcal O(-D)\cong\mathcal O(D)^\vee$). Hence $\mathcal O(d)\cong\mathcal O(d[\infty])$, and the isomorphism of step 2.1 sends $[\mathcal O(d)]$ to $\deg_k(d[\infty])=d\cdot[\kappa(\infty):k]=d$. [F2, F4, F5, step 1.2, step 2.1]

4.1 Generator and uniqueness. By step 3.1 the class $[\mathcal O(1)]$ maps to $1$, so it generates $\operatorname{Pic}(\mathbb P^1_k)$ under the isomorphism of step 2.1, and $d\mapsto[\mathcal O(d)]$ is a two-sided inverse $\mathbb Z\to\operatorname{Pic}(\mathbb P^1_k)$: it is a group homomorphism because $\mathcal O(d)\otimes\mathcal O(e)\cong\mathcal O(d+e)$ by the same comparison with the addition isomorphisms of [F5], and it is inverse to the isomorphism of step 2.1. Consequently every invertible sheaf $\mathcal L$ on $\mathbb P^1_k$ satisfies $\mathcal L\cong\mathcal O(d)$ for the integer $d$ determined by $[\mathcal L]$, and this $d$ is unique by [F4] (no two distinct twists are isomorphic). [F1, F4, F5, step 2.1, 3.1]

5.1 Conclusion and choice accounting. Steps 2.1, 3.1 and 4.1 prove the statement: the degree homomorphism induces an isomorphism $\operatorname{Pic}(\mathbb P^1_k)\to\mathbb Z$, $[\mathcal O(d)]\mapsto d$, so $[\mathcal O(1)]$ is a generator and every invertible sheaf is isomorphic to a unique twist. The Axiom of Choice is inherited through the divisor classification [F2], the twisting-sheaf construction [F4] and the degree-descent theorem [F5], as recorded in [F6]; the remaining arguments multiply finitely many transition units, use the single chart cover of $\mathbb P^1_k$, and select the integer $d$ determined by a class, so no further choice is made. [F2, F4, F6, step 2.1, 3.1, 4.1] ∎
