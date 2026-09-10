---
id: "def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action"
kind: "definition"
title: "Finite semisimple Lie algebras and the symmetric adjoint action"
deps: ["def-polynomial-ring-over-a-commutative-ring"]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a715\u201317; finite-dimensional local trace proof"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
---

## Definition

A finite-dimensional complex **Lie algebra** is a finite-dimensional complex vector space $\mathfrak g$ with a complex bilinear bracket satisfying $[x,x]=0$ and $[x,[y,z]]+[y,[z,x]]+[z,[x,y]]=0$. A subspace $I$ is an ideal if $[\mathfrak g,I]\subseteq I$. Put $D^0\mathfrak g=\mathfrak g$ and $D^{j+1}\mathfrak g=[D^j\mathfrak g,D^j\mathfrak g]$, where a bracket of subspaces means the span of all indicated brackets. The algebra is **solvable** if some $D^j\mathfrak g=0$, and **semisimple** if it has no nonzero solvable ideal. The zero algebra is semisimple. The operator $\operatorname{ad}_x(y)=[x,y]$ satisfies $[\operatorname{ad}_x,\operatorname{ad}_y]=\operatorname{ad}_{[x,y]}$ by Jacobi. Its **Killing form** is $B(x,y)=\operatorname{tr}_{\mathfrak g}(\operatorname{ad}_x\operatorname{ad}_y)$; its nondegeneracy in the semisimple case is proved in the next lemma, not assumed here.

The symmetric algebra $S(\mathfrak g)$ is the commutative algebra generated linearly by $\mathfrak g$. Concretely, a finite vector-space basis $e_1,\ldots,e_n$ identifies it with the polynomial algebra $\mathbb C[e_1,\ldots,e_n]$ of [[def-polynomial-ring-over-a-commutative-ring]]. A change of basis induces an invertible linear substitution, so these descriptions identify canonically by their values on $\mathfrak g$. Its grading $S=\bigoplus_{d\ge0}S_d$ has $S_0=\mathbb C$. Each $\operatorname{ad}_x$ extends uniquely to a derivation of $S$ by the product rule, and the Lie identities continue to hold because derivations are determined by their values on generators. Define $S^{\mathfrak g}=\{p:\operatorname{ad}_x p=0\text{ for every }x\in\mathfrak g\}$ and $S^{\mathfrak g}_+=\bigoplus_{d>0}(S^{\mathfrak g}\cap S_d)$. The invariant ideal $I=S S^{\mathfrak g}_+$ consists of finite sums of products with positive-degree homogeneous invariants; it is graded and stable under all adjoint derivations. In dimension zero, $S=S^{\mathfrak g}=\mathbb C$ and $I=0$. Only finite basis choices occur in these conventions.
