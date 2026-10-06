---
id: ex-upper-triangular-unipotent-groups
kind: example
title: Upper unitriangular groups are unipotent, and the additive group is U_2
dependency_level: 7
deps:
  - lem-upper-unitriangular-coordinate-ring-is-coconnected
  - lem-hopf-ideal-kernels-and-quotients
  - def-coconnected-hopf-algebra
  - def-unipotent-algebraic-group
  - def-upper-unitriangular-group-scheme
  - lem-upper-unitriangular-central-series
  - thm-unipotent-group-triangular-criterion
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
status: draft
origin: pipeline
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)
      url: https://www.jmilne.org/math/Books/iAG2022.pdf
      locator: Examples 14.13 and 14.19, printed pp. 283-284; Example 6.49, printed pp. 136-137
---
## Example

Let $k$ be a field. The group scheme $U_n$ of upper unitriangular matrices ([[def-upper-unitriangular-group-scheme]]) is a smooth connected unipotent algebraic group over $k$: it is a closed subgroup of $U_n$ trivially, its coordinate ring $k[X_{ij}\mid i<j]$ is coconnected by the weight filtration, and its central series has additive quotients ([[lem-upper-unitriangular-central-series]]).

The map
$$a\mapsto\begin{pmatrix}1&a\\0&1\end{pmatrix}$$
is an isomorphism $\mathbf G_a\to U_2$, so $\mathbf G_a$ is unipotent. In characteristic $p$, the subgroup schemes $\alpha_p=\operatorname{Spec}k[\varepsilon]/(\varepsilon^p)$ and $(\mathbb Z/p\mathbb Z)_k$ are unipotent closed subgroups of $\mathbf G_a$ that are not smooth, respectively not connected, showing that unipotent groups need be neither smooth nor connected.

## Facts & Assumptions
**Given:** A field $k$ and an integer $n\ge1$.

[F1] $U_n$ is the closed subgroup scheme of $\mathrm{GL}_n$ of upper unitriangular matrices, with $U_n(R)=\{(\alpha_{ij})\in\mathrm{GL}_n(R):\alpha_{ij}=0\ (i>j),\ \alpha_{ii}=1\}$ for every commutative unital $k$-algebra $R$, and $O(U_n)=k[X_{ij}:i<j]$ with the displayed comultiplication. ([[def-upper-unitriangular-group-scheme]])

[F2] The explicit polynomial Hopf algebra $O(U_n)$ is coconnected by its weight filtration, and any surjective Hopf-algebra quotient of a coconnected algebra is coconnected. These are the choice-free algebraic clauses of [[lem-upper-unitriangular-coordinate-ring-is-coconnected]]. A group with coconnected coordinate Hopf algebra is unipotent, the choice-free implication(c) implies(a) of [[thm-unipotent-group-triangular-criterion]]. The explicit matrix central series of $U_n$ has additive quotients ([[lem-upper-unitriangular-central-series]], [[def-unipotent-algebraic-group]]).

[F3] For every $R$, the map $a\mapsto\begin{pmatrix}1&a\\0&1\end{pmatrix}$ identifies addition on $R$ with multiplication in $U_2(R)$, and is natural in $R$; equivalently the coordinate Hopf algebras are both $k[x]$ with $\Delta(x)=x\otimes1+1\otimes x$. ([[def-upper-unitriangular-group-scheme]])

[F4] In characteristic $p$, $x^p$ and $x^p-x$ are primitive in the additive Hopf algebra, so the ideals they generate are Hopf ideals and give explicit Hopf quotients $k[x]/(x^p)$ and $k[x]/(x^p-x)$. Quotient Hopf algebras carry their canonical group scheme structures. The latter polynomial factors as $\prod_{i\in\mathbf F_p}(x-i)$ with distinct roots, and finite Chinese remainder gives $k[x]/(x^p-x)\cong\prod_{i\in\mathbf F_p}k$. ([[lem-hopf-ideal-kernels-and-quotients]], [[def-upper-unitriangular-group-scheme]])

## Proof

**Given:** A field $k$, $n\ge1$, and the additive group $\mathbf G_a=\operatorname{Spec}k[x]$.

1.1 The coordinate algebra of $U_n$ is coconnected by the explicit polynomial filtration in [F2], so the algebraic implication(c) implies(a) gives unipotence without a geometric closed-subgroup conversion. Its explicit central series has additive quotients by [F2]. As a scheme $U_n\cong\mathbf A_k^{n(n-1)/2}$ by its upper entries, so it is smooth. Its polynomial coordinate ring is a domain, hence its spectrum is irreducible and connected, including $n=1$, where it is the trivial group. [F1, F2, algebra]

2.1 Formula [F3] is a natural group-functor isomorphism $\mathbf G_a\cong U_2$. Thus $\mathbf G_a$ is smooth connected unipotent, with coordinate Hopf algebra $k[x]$. This uses the explicit coordinate construction, not a choice of faithful representation. [F3, step 1.1]

3.1 In characteristic $p$, the Frobenius homomorphism $x\mapsto x^p$ has kernel $\alpha_p=\operatorname{Spec}k[x]/(x^p)$. Its coordinate Hopf algebra is the explicit surjective quotient in [F4], hence coconnected and unipotent by [F2]. The class of $x$ is nonzero nilpotent, so this scheme is not reduced and therefore not smooth over $k$. [F2, F4, step 2.1, algebra]

3.2 The homomorphism $x\mapsto x^p-x$ has kernel $\operatorname{Spec}k[x]/(x^p-x)$, the constant additive group $\mathbf F_p$ by [F4]. It is again an explicit coconnected Hopf quotient, hence unipotent by [F2], and has $p>1$ disjoint rational points, so is not connected. This is not the image of the $p$-torsion of $\mathbf G_a$, which is all of $\mathbf G_a$ in this characteristic. [F2, F4, step 2.1, algebra]

4.1 Thus the complete Example is verified: the smooth connected $U_n$ have the stated filtration and central quotients, $\mathbf G_a=U_2$ is its first positive-dimensional case, and $\alpha_p$ and constant $\mathbf F_p$ exhibit nonsmooth and disconnected unipotent groups. Every unipotence assertion here follows from an explicitly presented Hopf algebra, so no AC-qualified geometric embedding or quotient conversion is used. [step 1.1, step 2.1, step 3.1, step 3.2] ∎
