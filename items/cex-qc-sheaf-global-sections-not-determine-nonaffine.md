---
id: cex-qc-sheaf-global-sections-not-determine-nonaffine
kind: counterexample
title: "Global sections do not determine a sheaf on P1"
status: draft
origin: pipeline
deps:
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-quasi-coherent-module-scheme
  - def-invertible-sheaf
  - cor-affine-qc-sheaf-determined-global-sections
  - def-axiom-of-choice
  - def-locally-free-sheaf-finite-rank
  - def-associated-sheaf-module-affine-scheme
  - thm-gluing-sheaves
  - def-gluing-datum-sheaves
  - def-module-on-ringed-space
  - def-principal-localisation
  - def-polynomial-ring-over-a-commutative-ring
  - lem-zero-in-a-localised-module
  - cor-polynomial-ring-over-a-domain-is-a-domain
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "Gao and Zhang, Lectures on Algebraic Geometry, projective-line gluing"
      url: "https://web.math.princeton.edu/~shouwu/publications/LAG2.pdf"
pipeline_run: frontier-36-complete
---

## Statement refuted

Assume the Axiom of Choice, inherited from the two-affine construction of the
projective line and from the affine equivalence
([[def-axiom-of-choice]]).

**False claim.** For every scheme $X$, a quasi-coherent $\mathcal O_X$-module
is determined up to isomorphism by its module of global sections: if
$\mathcal F,\mathcal G$ are quasi-coherent $\mathcal O_X$-modules with
$\Gamma(X,\mathcal F)\cong\Gamma(X,\mathcal G)$, then
$\mathcal F\cong\mathcal G$. In particular, on every scheme a quasi-coherent
sheaf with vanishing global sections would be the zero sheaf, and every
morphism of quasi-coherent sheaves inducing an isomorphism on global sections
would be an isomorphism
([[def-quasi-coherent-module-scheme]]).

For an affine scheme $X=\operatorname{Spec}A$ this determination is a
theorem: the comparison $\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an
isomorphism for every quasi-coherent $\mathcal F$
([[cor-affine-qc-sheaf-determined-global-sections]]). The claim displayed
above is its extension to arbitrary schemes, and that extension is false.

**Counterexample.** Let $k$ be a field and let
$X=\mathbb P^1_k$ be the two-affine projective line with charts
$U_0=\operatorname{Spec}k[t]$, $U_\infty=\operatorname{Spec}k[u]$ and
$u=t^{-1}$ on $W=U_0\cap U_\infty=\operatorname{Spec}k[t,t^{-1}]$, and let
$\mathcal O(-1)$ be the invertible sheaf with frames $e_0$ on $U_0$,
$e_\infty$ on $U_\infty$ and transition $e_\infty=t^{-1}e_0$
([[def-projective-line-two-affine-cover-and-twisting-sheaf]],
[[def-invertible-sheaf]]). Comparing the two chart descriptions of a global
section on $W$ shows that $\Gamma(X,\mathcal O(-1))=0$, while $\mathcal O(-1)$
is nonzero because it is free of rank one with frame $e_0$ on $U_0$
([[def-locally-free-sheaf-finite-rank]]). The zero $\mathcal O_X$-module $0$
also has $\Gamma(X,0)=0$, and it is quasi-coherent, so the two quasi-coherent
sheaves $\mathcal O(-1)$ and $0$ have equal (zero) modules of global sections
but are not isomorphic. Consequently the zero morphism
$0\to\mathcal O(-1)$ induces an isomorphism on global sections without being
an isomorphism itself. Since the affine determination above is a theorem,
this failure on $\mathbb P^1_k$ also shows that $\mathbb P^1_k$ is not an
affine scheme: the affine hypothesis cannot be dropped.

## Facts & Assumptions

**Given:** A field $k$; the two-affine projective line
$\mathbb P^1_k=U_0\cup U_\infty$ with $U_0=\operatorname{Spec}k[t]$,
$U_\infty=\operatorname{Spec}k[u]$ and $u=t^{-1}$ on the overlap
$W=U_0\cap U_\infty=\operatorname{Spec}k[t,t^{-1}]$; the twist
$\mathcal O(-1)$ with frames $e_0$ on $U_0$ and $e_\infty$ on $U_\infty$; the
zero $\mathcal O_X$-module $0$.

[F1] The two-affine definition
([[def-projective-line-two-affine-cover-and-twisting-sheaf]]): the two charts
cover $\mathbb P^1_k$ and have coordinate rings $k[t]$ and $k[u]$ with
$tu=1$ on $W$; for every $n\in\mathbb Z$ the sheaf $\mathcal O(n)$ is glued
from the structure sheaves of the two charts with frames $e_0$, $e_\infty$
related on $W$ by $e_\infty=t^ne_0$, equivalently $e_0=t^{-n}e_\infty$; each
$\mathcal O(n)$ is free of rank one on each chart with the displayed frame,
hence invertible, and $\mathcal O(0)=\mathcal O_{\mathbb P^1_k}$. On the
overlap a section of $\mathcal O(n)$ with $U_0$-coordinate $a(t)$ has
$U_\infty$-coordinate $u^na(u^{-1})$; for $n=-1$ this is
$b(u)=u^{-1}a(u^{-1})$, equivalently $ub(u)=a(u^{-1})$.

[F2] Invertible, locally free and quasi-coherent
([[def-invertible-sheaf]], [[def-locally-free-sheaf-finite-rank]],
[[def-quasi-coherent-module-scheme]], [[def-module-on-ringed-space]]):
invertible means locally free of rank one; a locally free sheaf of finite
rank is quasi-coherent; over a chart $U=\operatorname{Spec}A$ a free rank-one
module with generator $e$ has $e\neq0$ because $A$ is a nonzero ring, so a
free rank-one sheaf on a nonempty chart is not the zero sheaf; the zero
$\mathcal O_X$-module is locally free of rank $0$, hence quasi-coherent, and
has zero sections on every open set, so $\Gamma(X,0)=0$.

[F3] Glued sections ([[thm-gluing-sheaves]],
[[def-gluing-datum-sheaves]]): for a sheaf $\mathcal F$ glued from local
sheaves $\mathcal F_0$ on $U_0$ and $\mathcal F_\infty$ on $U_\infty$ along an
overlap identification $\varphi=\varphi_{0\infty}$, a section of $\mathcal F$
on an open $V$ is a compatible pair $(s_0,s_\infty)\in\mathcal F_0(V\cap
U_0)\times\mathcal F_\infty(V\cap U_\infty)$ with
$\varphi(s_0|_{V\cap W})=s_\infty|_{V\cap W}$; in particular a global section
of $\mathcal F$ is exactly a pair $(s_0,s_\infty)\in\mathcal F(U_0)\times
\mathcal F(U_\infty)$ whose two restrictions to $W$ agree under $\varphi$, and
$\mathcal F(U_0)\cong\mathcal F_0(U_0)=k[t]e_0$,
$\mathcal F(U_\infty)\cong\mathcal F_\infty(U_\infty)=k[u]e_\infty$ for the
twists of [F1].

[F4] Polynomials and principal localisation
([[def-polynomial-ring-over-a-commutative-ring]],
[[def-principal-localisation]], [[lem-zero-in-a-localised-module]],
[[cor-polynomial-ring-over-a-domain-is-a-domain]]): the polynomial ring
$k[u]$ is a set of finitely supported coefficient functions
$\mathbb N\to k$, so two polynomials are equal exactly when their coefficient
functions are equal; $k[u,u^{-1}]=k[u]_u$ is the principal localisation at
$u$, whose elements are fractions $p/u^m$; a fraction $p/u^m$ is zero exactly
when $u^Np=0$ for some $N\ge0$; and $k[u]$ is an integral domain with
$u\neq0$, so $u$ is a nonzerodivisor and the canonical map
$k[u]\to k[u,u^{-1}]$ is injective. Consequently two polynomials in $k[u]$
that become equal in $k[u,u^{-1}]$ are already equal in $k[u]$.

[F5] Affine determination of global sections
([[cor-affine-qc-sheaf-determined-global-sections]],
[[def-associated-sheaf-module-affine-scheme]],
[[def-quasi-coherent-module-scheme]]): for an affine scheme
$X=\operatorname{Spec}A$ and a quasi-coherent $\mathcal F$ the comparison
$\kappa_{\mathcal F}:\widetilde{\Gamma(X,\mathcal F)}\to\mathcal F$ is an
isomorphism, and the associated sheaf of the zero $A$-module is the zero
sheaf. Hence on an affine scheme a quasi-coherent sheaf with vanishing global
sections is the zero sheaf.

[F6] The Axiom of Choice as inherited from the two-affine construction of
[F1] and from the affine equivalence underlying [F5]
([[def-axiom-of-choice]]).

**Proof technique:** direct; compute the global sections of $\mathcal O(-1)$
from its two chart descriptions, compare with the zero sheaf, and use the
affine determination to conclude that $\mathbb P^1_k$ is not affine.

## Proof

1.1 A global section of $\mathcal O(-1)$: by [F3] such a section is exactly a compatible pair $(a(t)e_0,b(u)e_\infty)$ with $a\in k[t]$, $b\in k[u]$, and by the transition computation of [F1] for $n=-1$ the two chart descriptions agree on $W$ precisely when $ub(u)=a(u^{-1})$ in $k[u,u^{-1}]$. [F1, F3]

2.1 The only global section is zero: if $a=0$ the identity $ub(u)=a(u^{-1})$ of step 1.1 gives $ub(u)=0$, whence $b=0$ because $u$ is a nonzerodivisor in the domain $k[u]$; assume therefore that $a\neq0$ and let $d\ge0$ be the largest index with $a_d\neq0$. Multiplying the identity of step 1.1 by $u^d$ gives $u^{d+1}b(u)=\sum_{i=0}^{d}a_iu^{d-i}$, an equality in $k[u,u^{-1}]$ between two polynomials in $k[u]$, hence an equality in $k[u]$ by [F4]. The left side is divisible by $u^{d+1}$, so its coefficient function is supported in degrees $\ge d+1$, while the right side is supported in degrees $\le d$; equal polynomials have equal coefficient functions by [F4], so the support is empty and $\sum_ia_iu^{d-i}=0$, which forces $a_d=0$, contradicting the choice of $d$. Hence $a=0$, and then $b=0$ as shown. Therefore the only global section of $\mathcal O(-1)$ is the zero section and $\Gamma(\mathbb P^1_k,\mathcal O(-1))=0$. [F4, step 1.1]

3.1 The two sheaves have equal global sections but are not isomorphic: the zero $\mathcal O_X$-module is quasi-coherent with $\Gamma(X,0)=0$ and $\mathcal O(-1)$ is quasi-coherent and nonzero, since over $U_0=\operatorname{Spec}k[t]$ it is free of rank one with frame $e_0$ and the section $e_0\in\mathcal O(-1)(U_0)$ is nonzero; by step 2.1 also $\Gamma(X,\mathcal O(-1))=0$. Thus the quasi-coherent sheaves $\mathcal O(-1)$ and $0$ have isomorphic (indeed equal zero) modules of global sections while not being isomorphic, so global sections do not determine a quasi-coherent sheaf on $\mathbb P^1_k$, and the false claim is refuted. [F1, F2, step 2.1]

4.1 The global-sections functor is not conservative here: the unique morphism $0\to\mathcal O(-1)$ from the zero sheaf induces the identity map of the zero module on global sections, which is an isomorphism, while the morphism itself is an isomorphism only if its target $\mathcal O(-1)$ is the zero sheaf, which step 3.1 rules out. So a morphism can be invisible to global sections and the affine determination of morphisms cannot be extended to $\mathbb P^1_k$ either. [step 3.1]

4.2 Therefore $\mathbb P^1_k$ is not affine: if $\mathbb P^1_k$ were affine, [F5] applied to the quasi-coherent $\mathcal O(-1)$ would make $\widetilde{\Gamma(\mathbb P^1_k,\mathcal O(-1))}\to\mathcal O(-1)$ an isomorphism, and since $\Gamma(\mathbb P^1_k,\mathcal O(-1))=0$ by step 2.1 that would force $\mathcal O(-1)=0$, contradicting step 3.1. Hence the affine hypothesis in the global-sections determination is essential, and the failure of determination recorded in step 3.1 occurs on the nonaffine scheme $\mathbb P^1_k$. [F5, step 2.1, step 3.1]

5.1 Choice accounting: the field $k$, the two charts, the frames $e_0,e_\infty$, the compatibility identity $ub(u)=a(u^{-1})$ and the finite expansions $a=\sum_ia_it^i$ and $b=\sum_jb_ju^j$ are fixed data, so no chart, frame or presentation is selected; the only Axiom of Choice is the inherited one recorded in [F6], used through the two-affine construction of [F1] and the affine equivalence underlying [F5]. [F1, F5, F6, step 1.1, step 4.2] ∎
