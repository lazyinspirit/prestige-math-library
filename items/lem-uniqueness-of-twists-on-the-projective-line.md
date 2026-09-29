---
id: lem-uniqueness-of-twists-on-the-projective-line
kind: lemma
title: The twist index on the projective line is an isomorphism invariant
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-relative-projective-space-standard-charts
  - lem-line-bundles-on-projective-three-space-restrict-by-degree
  - def-module-on-ringed-space
  - def-sheaf-hom
  - def-sheaf-on-topological-space
  - thm-gluing-sheaves
  - cor-units-in-a-polynomial-ring-over-a-domain
  - prop-localisation-zero-equality-and-kernel-criteria
  - thm-polynomial-degree-of-a-product-over-a-domain
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "Stacks Project, Divisors, Lemma 31.29.4"
      url: https://stacks.math.columbia.edu/tag/0BDA
    - title: "Vakil, The Rising Sea §§17.4.8–12"
      url: https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf
---

## Statement

Let $k$ be a field and let $\mathbb P^1_k$ be the relative projective line over
$\operatorname{Spec}k$, with standard charts $U_0=\operatorname{Spec}k[u]$ and
$U_1=\operatorname{Spec}k[v]$, where $u=t_1/t_0$ and $v=t_0/t_1=1/u$ on the
overlap, in the notation of [[def-relative-projective-space-standard-charts]].
For $n\in\mathbb Z$ let $\mathcal O_{\mathbb P^1_k}(n)$ be the invertible
sheaf obtained by gluing the trivial invertible sheaves on $U_0$ and $U_1$
along the transition $e_1=u^ne_0$, the prescription used for the twists on
$\mathbb P^N_k$ in [[lem-line-bundles-on-projective-three-space-restrict-by-degree]].
Then
$$\mathcal O_{\mathbb P^1_k}(n)\cong\mathcal O_{\mathbb P^1_k}(m)\quad\text{if and only if}\quad n=m .$$
Consequently the twist index is an isomorphism invariant: if invertible
sheaves $\mathcal M,\mathcal M'$ on $\mathbb P^1_k$ satisfy
$\mathcal M\cong\mathcal O_{\mathbb P^1_k}(n)$, $\mathcal M'\cong\mathcal
O_{\mathbb P^1_k}(m)$ and $\mathcal M\cong\mathcal M'$, then $n=m$. In
particular no two distinct twists on $\mathbb P^1_k$ are isomorphic, and an
integer attached to an invertible sheaf by a restriction statement of
[[lem-line-bundles-on-projective-three-space-restrict-by-degree]] is
well defined.

## Facts & Assumptions

**Given:** A field $k$, the standard charts $U_0=\operatorname{Spec}k[u]$, $U_1=\operatorname{Spec}k[v]$ of $\mathbb P^1_k$ with $u=t_1/t_0$, $v=t_0/t_1$, integers $n,m\in\mathbb Z$, and the twists $\mathcal O_{\mathbb P^1_k}(n)$, $\mathcal O_{\mathbb P^1_k}(m)$ defined by the displayed gluing.

[F1] For an affine base $S=\operatorname{Spec}A$, the standard charts of $\mathbb P^1_S$ are $U_0=\operatorname{Spec}A[x^{(0)}_1]$, $U_1=\operatorname{Spec}A[x^{(1)}_0]$ with $x^{(0)}_1=t_1/t_0$, $x^{(1)}_0=t_0/t_1$, and the open subschemes $D^{(0)}_1\subseteq U_0$ and $D^{(1)}_0\subseteq U_1$ are identified by the ring isomorphism $(A[x^{(0)}_1])_{x^{(0)}_1}\to(A[x^{(1)}_0])_{x^{(1)}_0}$ sending $x^{(0)}_1$ to $1/x^{(1)}_0$; for $A=k$ the overlap is the localisation $k[u,u^{-1}]$ of $k[u]$ at the powers of $u$, in which $v=u^{-1}$. ([[def-relative-projective-space-standard-charts]])

[F2] On the standard charts of $\mathbb P^N_k$, the twists are defined by gluing free rank-one sheaves with frames $e_i$ and transitions $e_j=(x_j/x_i)^ne_i$; the same prescription applies to $\mathbb P^1_k$, where there is a single overlap with transition $e_1=u^ne_0$, and $\mathcal O(n)=\mathcal O(1)^{\otimes n}$ for all signs of $n$ using duals. ([[lem-line-bundles-on-projective-three-space-restrict-by-degree]])

[F3] An invertible sheaf is an $\mathcal O$-module locally isomorphic to $\mathcal O$, and a morphism of $\mathcal O_X$-modules is a morphism of the underlying sheaves of abelian groups whose components are $\mathcal O_X(U)$-linear. ([[def-module-on-ringed-space]])

[F4] The internal Hom sheaf assigns to an open $U$ the module $\operatorname{Hom}_{\mathcal O_X|_U}(\mathcal F|_U,\mathcal G|_U)$, with restriction given by restricting morphisms. Being a sheaf, it satisfies locality and gluing: a morphism of $\mathcal O_X$-modules is determined by its restrictions to the members of an open cover, and compatible local morphisms glue. ([[def-sheaf-hom]], [[def-sheaf-on-topological-space]])

[F5] Compatible local sheaves, together with their overlap identifications, glue uniquely, and the same holds for modules. ([[thm-gluing-sheaves]])

[F6] Over an integral domain $R$, a polynomial in $R[x]$ is a unit if and only if it is a constant whose value is a unit of $R$. For $R=k$ a field, the units of $k[u]$ and of $k[v]\cong k[u^{-1}]$ are therefore exactly the nonzero constants $k^\times$. ([[cor-units-in-a-polynomial-ring-over-a-domain]])

[F7] In a localisation, an element $r/1$ is zero if and only if $sr=0$ for some $s$ in the multiplicative set; in particular an equality in $k[u,u^{-1}]$ between elements of $k[u]$ holds already after multiplying by a power of $u$. ([[prop-localisation-zero-equality-and-kernel-criteria]])

[F8] For nonzero polynomials over a domain, $\deg(fg)=\deg f+\deg g$, so multiplying a nonzero constant by $u^j$ raises the degree by exactly $j$. ([[thm-polynomial-degree-of-a-product-over-a-domain]])



## Proof

**Proof technique:** direct: on the two standard charts a morphism of twists is given by its two components, which are units of $k[u]$ and $k[v]$, hence constants; their compatibility on the overlap forces $u^{m-n}$ to be a constant, which by degree reasons happens only for $n=m$.

1.1 By [F1] the two charts $U_0,U_1$ cover $\mathbb P^1_k$ and their overlap is $U_0\cap U_1=D^{(0)}_1$, with coordinate ring the localisation $k[u,u^{-1}]=k[u]_u$ in which $v=u^{-1}$. By [F2] and [F5] the prescription $e_1=u^ne_0$ glues the two trivial invertible sheaves $k[u]$ on $U_0$ and $k[v]$ on $U_1$ to an invertible sheaf $\mathcal O(n)$ on $\mathbb P^1_k$, trivialized on $U_i$ by the frame $e_i$, which is a global frame of $\mathcal O(n)|_{U_i}$; the same holds with $m$ in place of $n$, with frames $e_i^{(m)}$, and on the overlap $e_1^{(n)}=u^ne_0^{(n)}$, $e_1^{(m)}=u^me_0^{(m)}$. [F1, F2, F3, F5]

2.1 Let $\Phi:\mathcal O(n)\to\mathcal O(m)$ be a morphism of $\mathcal O$-modules. By [F4] it is determined by its restrictions $\Phi_i$ to the two charts, and on the chart $U_i$ the source and target are free of rank one with frames $e_i^{(n)}$ and $e_i^{(m)}$, so $\Phi_i$ is given by a section $a_i\in\Gamma(U_i,\mathcal O)$, namely $\Phi_i(e_i^{(n)})=a_ie_i^{(m)}$, with $a_0\in k[u]$ and $a_1\in k[v]$. Conversely, two such sections define a morphism exactly when the two local morphisms agree on the overlap, and since $e_1^{(n)}=u^ne_0^{(n)}$ and $e_1^{(m)}=u^me_0^{(m)}$ there, [F3] and [F4] turn this into the single compatibility relation $$a_1u^m=u^na_0\qquad\text{in }k[u,u^{-1}].$$ Moreover $\Phi$ is an isomorphism if and only if both $a_0$ and $a_1$ are units: if $\Phi$ is invertible, its inverse has components $b_i$ with $a_ib_i=1$, and if $a_0,a_1$ are units, the components $a_i^{-1}$ satisfy the same relation and give an inverse. [F3, F4, step 1.1]

3.1 Suppose now that $\Phi$ is an isomorphism. By step 2.1 there are units $a_0\in k[u]^\times$ and $a_1\in k[v]^\times$ with $a_1u^m=u^na_0$ in $k[u,u^{-1}]$; multiplying by $u^{-n}$ gives $a_0=a_1u^{m-n}$. By [F6], applied to the domain $k$, units of $k[u]$ and of $k[v]$ are nonzero constants, so $a_0=c_0$ and $a_1=c_1$ with $c_0,c_1\in k^\times$. Put $N=m-n$ and $c=c_0/c_1\in k^\times$; then $u^N=c$ in $k[u,u^{-1}]$. If $N>0$, the polynomial $u^N-c\in k[u]$ becomes zero in the localisation, so [F7] gives an $M\ge0$ with $u^{M+N}=cu^M$ in $k[u]$. This is an equality of polynomials of degrees $M+N$ and $M$ by [F8], impossible since $M+N>M$. If $N<0$, then $K=-N>0$ and $c^{-1}=u^K$, so the same argument applied to $cu^K-1$ gives $cu^{M+K}=u^M$ in $k[u]$ for some $M\ge0$, again an equality of polynomials of degrees $M+K$ and $M$, impossible. Hence $N=0$ and $n=m$. [F6, F7, F8, step 2.1]

4.1 Conversely, if $n=m$ then the two gluing prescriptions coincide and $\mathcal O(n)=\mathcal O(m)$. This proves the equivalence: distinct indices give nonisomorphic twists. Finally, if invertible sheaves $\mathcal M,\mathcal M'$ satisfy $\mathcal M\cong\mathcal O(n)$, $\mathcal M'\cong\mathcal O(m)$ and $\mathcal M\cong\mathcal M'$, composing isomorphisms gives $\mathcal O(n)\cong\mathcal O(m)$ and hence $n=m$ by step 3.1, so the twist index of an invertible sheaf on $\mathbb P^1_k$ isomorphic to a twist is well defined. No choice principle is used: the two frames, the two components $a_0,a_1$ and the integer $N$ are finite data. [F2, step 1.1, step 3.1] ∎
