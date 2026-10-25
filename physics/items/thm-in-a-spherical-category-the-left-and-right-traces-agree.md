---
id: thm-in-a-spherical-category-the-left-and-right-traces-agree
kind: theorem
title: "In a spherical category the left and right traces agree"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-spherical-structure, def-pivotal-structure, def-the-categorical-trace-of-a-morphism-into-the-double-dual, thm-basic-properties-of-the-categorical-trace, def-tensor-and-multitensor-category]
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  repair: research/non-ml-math-remaining-81-2026-10-18-owner-drift-repair/published-receipts/thm-in-a-spherical-category-the-left-and-right-traces-agree.json
sources:
  scraped: []
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories, Theorem 4.7.15"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

Let $\mathcal C$ be a spherical tensor category over an algebraically closed field $k$, with spherical structure $a$.
For every object $X$ and every endomorphism $x:X\to X$,

$$\operatorname{Tr}_L(a_Xx)=\operatorname{Tr}_R(xa_X^{-1}).$$

## Facts & Assumptions

**Given:** A spherical tensor category $(\mathcal C,a)$ over an algebraically closed field $k$, an object $X$, and an endomorphism $x:X\to X$.

[L1] Spherical means $\dim_a(U)=\dim_a(U^\vee)$ for every object $U$ ([[def-spherical-structure]]). The pivotal comparison is a monoidal natural isomorphism ([[def-pivotal-structure]]).

[L2] Traces are the composites of [[def-the-categorical-trace-of-a-morphism-into-the-double-dual]]. They are additive on direct sums and satisfy duality and cyclicity, including the different-object mate calculation in its proof ([[thm-basic-properties-of-the-categorical-trace]]).

[L3] A tensor category is locally finite, $k$-linear abelian with bilinear tensor product and $\operatorname{End}(\mathbf1)=k$; in particular objects have finite length and endomorphism spaces have finite dimension ([[def-tensor-and-multitensor-category]]).

## Proof

**Proof technique:** direct.

1.1 **Two cyclic linear functionals.** Put $t_U(z)=\operatorname{Tr}_L(a_Uz)$ and $r_U(z)=\operatorname{Tr}_R(za_U^{-1})$. Bilinearity of tensor product makes these $k$-linear. If $f:U\to V$ and $g:V\to U$, generalized cyclicity in [L2] and $a_Vf=f^{\vee\vee}a_U$ give $t_U(gf)=t_V(fg)$; the mirrored mate calculation gives $r_U(gf)=r_V(fg)$. Both functionals are additive under finite direct sums. Naturality of $a$ at evaluation, together with monoidality, says that $a_{U^\vee}$ is the inverse of $a_U^\vee$: after inserting either into evaluation the same pairing results, and uniqueness of mates identifies them. The dual-trace identity in [L2], applied on $U^\vee$, therefore gives $r_U(1_U)=\dim_a(U^\vee)=\dim_a(U)=t_U(1_U)$. [L1, L2, L3, given, algebra]

2.1 **Nilpotents have zero trace.** We prove simultaneously that $t_U(n)=r_U(n)=0$ for any nilpotent endomorphism $n$ by induction on the finite length of $U$. The zero object and $n=0$ give zero by linearity. Otherwise factor $n=i p$ through its image $W$, with $p:U\twoheadrightarrow W$ and $i:W\hookrightarrow U$. Since $n$ is nilpotent and $U\ne0$, its image $W$ is a proper subobject of $U$: otherwise $n$ would be epic and a power would be both zero and epic. Thus $W$ has smaller length than $U$. The endomorphism $p i$ of $W$ is nilpotent, because $(p i)^{m+1}=p n^m i=0$ for a sufficiently large $m$. Step 1.1 gives $t_U(n)=t_W(p i)=0$ and $r_U(n)=r_W(p i)=0$ by induction. [L3, step 1.1, induction]

3.1 **Primary summands.** Finite-dimensionality of $\operatorname{End}(X)$ gives a nonzero polynomial annihilating $x$. Since $k$ is algebraically closed, it factors into powers of the distinct linear factors $T-\lambda$. The Chinese remainder identity for these pairwise coprime factors supplies mutually orthogonal polynomial idempotents $e_\lambda(x)$ summing to $1_X$ and with $(x-\lambda)^{m_\lambda}e_\lambda(x)=0$. Idempotents split in an abelian category: $X=\bigoplus_\lambda\operatorname{im}e_\lambda(x)$, since the sum of their inclusion/projection pairs is the identity. On the summand $X_\lambda$, write $x=\lambda1+n_\lambda$ with $n_\lambda$ nilpotent. Additivity, linearity and step 2.1 give $t_X(x)=\sum_\lambda\lambda t_{X_\lambda}(1)$ and $r_X(x)=\sum_\lambda\lambda r_{X_\lambda}(1)$. Step 1.1 equates each pair of summands, proving the displayed identity. [L2, L3, step 1.1, step 2.1, algebra] ∎

## Remarks

The algebraically closed ground-field hypothesis is essential for the dimension-based definition of spherical structure used here. Over $\mathbb R$, take finite-dimensional real representations of the cyclic group of order three and let the pivotal comparison be the canonical double-dual map followed by the central generator $g$. Every real representation has the same character at $g$ and $g^{-1}$, so its two pivotal dimensions agree. On the two-dimensional rotation representation, however, $x=g$ has left pivotal trace $\operatorname{tr}(g^2)=-1$ and right pivotal trace $\operatorname{tr}(1)=2$. Definitions of spherical category that require equality of traces of all endomorphisms over arbitrary fields use a stronger defining condition.
