---
id: ex-simple-root-string-in-an-integrable-kac-moody-module
kind: example
title: Simple root string in an integrable kac moody module
status: published
origin: pipeline
deps: [def-integrable-kac-moody-module, def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, def-simple-reflections-and-the-kac-moody-weyl-group, prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
proof_strategy: direct
---

## Example

Let $v\ne0$ have weight $\eta$ in an integrable module and satisfy $e_i v=0$ for a fixed simple index $i$. Then $m=\eta(h_i)\in\mathbb Z_{\geq0}$, and its cyclic simple-root module has basis $v,f_i v,\ldots,f_i^m v$, with weights $\eta-k\alpha_i$. Reflection sends the index $k$ to $m-k$. This describes that cyclic module, not the entire intersection of an arbitrary module's support with $\eta+\mathbb Z\alpha_i$.

## Facts & Assumptions

**Given:** The stated nonzero $i$-highest vector; no highest-vector condition for the other indices is imposed.

[F1] Both $e_i$ and $f_i$ are locally nilpotent ([[def-integrable-kac-moody-module]]).

[F2] The simple triple and Cartan commutator relations hold ([[def-contragredient-lie-algebra-before-the-maximal-ideal-quotient]]).

[F3] The reflection formula is $s_i\xi=\xi-\xi(h_i)\alpha_i$, with $\alpha_i(h_i)=2$ ([[def-simple-reflections-and-the-kac-moody-weyl-group]]).

[F4] Reflected weight spaces in the ambient module are isomorphic without AC ([[prop-integrable-weight-sets-and-multiplicities-are-weyl-invariant]]).

## Verification

1.1 Write $e=e_i,f=f_i,h=h_i$ and initially $a=\eta(h_i)$. F2 gives $hf^k v=(a-2k)f^k v$. From $ev=0$ and $ef^{k+1}v=fef^k v+hf^k v$, induction gives $ef^k v=k(a-k+1)f^{k-1}v$. Let $N\geq1$ be the least exponent with $f^Nv=0$, supplied by F1. Then $f^{N-1}v\ne0$ and $0=ef^Nv=N(a-N+1)f^{N-1}v$ forces $a=N-1=m\in\mathbb Z_{\geq0}$. Thus precisely the powers from $0$ through $m$ are nonzero. [F1, F2, given]

2.1 The span $S$ of these powers is invariant under $e,f,h$ by the formulas in 1.1, and contains $v$. Conversely every vector in the list is obtained by applying a power of $f$ to $v$. Hence $S$ is exactly the cyclic simple-root module. Full Cartan commutation in F2 gives weight $\eta-k\alpha_i$ to $f^kv$. These weights are distinct, since $\alpha_i(h_i)=2$, so the nonzero vectors are independent. Their raising coefficients are $k(m-k+1)$, nonzero for $1\leq k\leq m$ and zero at the highest endpoint. [F2, F3, step 1.1]

3.1 Directly using F3, $s_i(\eta-k\alpha_i)=\eta-k\alpha_i-(m-2k)\alpha_i=\eta-(m-k)\alpha_i$. Within $S$, the explicit map $f^kv\mapsto f^{m-k}v$ between each pair of one-dimensional weight spaces is a linear isomorphism. F4 additionally identifies the corresponding full ambient weight spaces, without a finite-multiplicity assumption. At $k=0$ and $k=m$ this exchanges the endpoints. If $m=0$, the sole vector is killed by both $e,f$ and the reflection fixes its weight. Zero $v$ is excluded; no assumption about other weight strings or the whole coset intersection was made. Only finite strings and F4's choice-free maps are used. [F3, F4, step 1.1, step 2.1] ∎
