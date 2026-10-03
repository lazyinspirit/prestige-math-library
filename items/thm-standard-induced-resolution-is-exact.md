---
id: thm-standard-induced-resolution-is-exact
kind: theorem
title: The standard induced complex is a resolution of the trivial module
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [def-standard-induced-resolution-of-the-trivial-module, thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra, prop-associated-graded-of-the-pbw-filtration-is-commutative, def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra, thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero, lem-the-boundary-subobject-factors-through-the-cycle-subobject, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "J. van Ekeren, Topics in representation theory (IMPA 2024), Sec. 29, printed pp. 122-123 (split case, Chevalley-Eilenberg identification)"
      url: "https://w3.impa.br/~jethro/2024-0/georep.pdf"
    - title: "Fan Zhou, The classical and the functorial BGG resolutions (Columbia thesis 2021), Part I Theorem 9.1, p. 29"
      url: "https://www.math.columbia.edu/~fanzhou/files/Thesis041921.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). The complex of [[def-standard-induced-resolution-of-the-trivial-module]] is exact in positive degrees, so $0\to B_{|\Phi^+|}\to\cdots\to B_1\to B_0\to\mathbb C\to0$ is a resolution of the trivial $\mathfrak g$-module.

## Facts & Assumptions

**Given:** The Axiom of Choice, the standard induced complex $(B_\bullet,d_\bullet)$ of [[def-standard-induced-resolution-of-the-trivial-module]], with augmentation $d_0\colon B_0\to\mathbb C$.

[F1] By PBW, $U(\mathfrak g)\cong U(\mathfrak n^-)\otimes U(\mathfrak b)$ as vector spaces, the monomials with negative-root factors before Borel factors forming a $U(\mathfrak b)$-basis; consequently $B_k\cong U(\mathfrak n^-)\otimes\Lambda^k(\mathfrak n^-)$ ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-standard-induced-resolution-of-the-trivial-module]], [[def-pbw-filtration-by-tensor-degree-on-the-enveloping-algebra]]).

[F2] The associated graded of $U(\mathfrak n^-)$ under the PBW filtration is commutative, and the differential of $B_\bullet$ is $U(\mathfrak n^-)$-linear and lowers the exterior degree by one ([[prop-associated-graded-of-the-pbw-filtration-is-commutative]], [[def-standard-induced-resolution-of-the-trivial-module]]).

[F4] A chain complex in an abelian category is exact in degree $n$ exactly when its $n$-th homology object vanishes, and the boundary subobject always factors through the cycle subobject ([[thm-a-complex-is-exact-at-n-exactly-when-its-nth-homology-is-zero]], [[lem-the-boundary-subobject-factors-through-the-cycle-subobject]]).

## Proof

1.1 First verify the differential. If a representative $\xi_i$ is changed by $b\in\mathfrak b$, multilinearity reduces to a wedge with $b$ first. Its other action terms and brackets not involving $b$ vanish because their exterior factors still contain $\bar b=0$. The remaining terms are $ub\otimes\bar\xi_2\wedge\cdots\wedge\bar\xi_k-u\otimes\sum_{j=2}^k\bar\xi_2\wedge\cdots\wedge\overline{[b,\xi_j]}\wedge\cdots\wedge\bar\xi_k$, which vanish by the $U(\mathfrak b)$-balanced relation. To check balancing in the input, commute $b$ past each $\xi_i$ using $b\xi_i=\xi_i b+[b,\xi_i]$: these extra terms are exactly those obtained by applying the quotient adjoint action to the wedge. For the bracket terms equality is $[b,[\xi_i,\xi_j]]=[\,[b,\xi_i],\xi_j]+[\xi_i,[b,\xi_j]]$. Thus the formula descends and commutes with left multiplication by $U(\mathfrak g)$. [given, algebra]

1.2 Filter $B_k\cong U(\mathfrak n^-)\otimes\Lambda^k\mathfrak n^-$ by total degree, PBW degree plus $k$. The action terms preserve total degree and the bracket terms lower it by one. PBW [F1,F2] therefore identifies the associated graded differential with $\delta=\sum_i x_i\iota_i$ on $S(\mathfrak n^-)\otimes\Lambda^\bullet\mathfrak n^-$, where $x_i$ is a basis and $\iota_i$ contracts the $i$th exterior basis vector. Define $H=\sum_i\partial_{x_i}(x_i\wedge-)$, with $x_i$ in the wedge denoting that basis vector. The identities $\iota_i(x_j\wedge-)+(x_j\wedge-)\iota_i=\delta_{ij}$ and $\partial_{x_j}x_i=x_i\partial_{x_j}+\delta_{ij}$ give $\delta H+H\delta=(p+k)\operatorname{id}$ on polynomial degree $p$, exterior degree $k$: the polynomial Euler operator contributes $p$, and $\sum_i(x_i\wedge-)\iota_i$ contributes $k$. In each positive total degree, division by the positive integer $p+k$ gives a contraction. In degree zero only the constants remain, and the augmentation is their identity. [F1, F2, algebra, construct]

2.1 Compute $d^2$ with representatives in the subalgebra $\mathfrak n^-$ using [F1]. For each pair $i<j$, applying the two action terms in opposite orders leaves $(-1)^{i+j+1}u(\xi_i\xi_j-\xi_j\xi_i)$ times the wedge with $i,j$ omitted; the action on the bracket term contributes the negative of this, since $\xi_i\xi_j-\xi_j\xi_i=[\xi_i,\xi_j]$ in $U(\mathfrak n^-)$. An action on an index disjoint from a bracket cancels with performing that bracket after the action, by the opposite exterior signs. Two brackets on disjoint pairs cancel by their opposite signs. For each triple the remaining terms are a common signed wedge times $[\xi_i,[\xi_j,\xi_l]]+[\xi_j,[\xi_l,\xi_i]]+[\xi_l,[\xi_i,\xi_j]]=0$. These exhaust the terms, proving $d^2=0$. The augmentation kills every action term in degree one because $\varepsilon(\xi_i)=0$. [F1, step 1.1, algebra]

3.1 Let $z\in B_k$ be a cycle with $k>0$, or let $k=0$ and $z$ lie in the augmentation kernel. If $z\ne0$, its leading filtered symbol is a cycle of the associated graded complex; for $k=0$ a nonzero scalar leading symbol cannot be in the augmentation kernel. The contraction in step 1.2 writes this symbol as $\delta\bar y$ in the same positive total degree. Lift $\bar y$ to $y\in B_{k+1}$ by PBW. Then $z-dy$ is a cycle of strictly smaller total degree. Repeating terminates because total degree is a nonnegative integer. At exterior degree $k>0$ no nonzero term has total degree below $k$, and at degree zero the only possible residual constant is zero by its augmentation. Consequently $z$ is a boundary. The augmentation is surjective, since $1\otimes1$ maps to $1$, so the augmented complex is exact everywhere. [F1, step 2.1, step 1.2, algebra]

4.1 The exterior powers vanish above $\dim\mathfrak n^-=|\Phi^+|$, so the exact augmented complex is the finite resolution asserted in the Statement. This includes $\mathfrak n^-=0$, when $B_0=\mathbb C$ and the augmentation is the identity. [F1, F4, step 3.1] ∎
