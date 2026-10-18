---
id: lem-sugawara-commutator-on-all-restricted-modules
kind: lemma
title: Sugawara current commutators on every restricted module
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
deps:
  - def-sugawara-modes
  - def-positive-energy-affine-module
  - def-untwisted-affine-central-extension
  - def-dual-coxeter-number-for-normalized-form
  - def-residue-two-cocycle-on-a-loop-algebra
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: Peter Haine, The Segal–Sugawara construction, §§3.2–3.3
      url: https://math.mit.edu/juvitop/pastseminars/notes_2019_Fall/12-11-19.pdf
---

## Statement

Let $V$ be any restricted affine-current module of level $k\in\mathbb C$ as in [[def-positive-energy-affine-module]], for a finite-dimensional complex simple $\mathfrak g$ with normalized invariant form $B$. Put $q=k+h^\vee\ne0$ and use [[def-sugawara-modes]]. Then for every $x\in\mathfrak g$ and $m,n\in\mathbb Z$,
$$[L_m,J_x(n)]=-nJ_x(m+n).$$
No grading, inner product, irreducibility, or integrability of $V$ is required.

## Facts & Assumptions

**Given:** The restricted module $V$, the normalized form $B$, and the noncritical complex level $k$.

[F1] [[def-sugawara-modes]]: $L_m=T_m/q$, where $T_m=\frac12\sum_{a,r}:J_{e_a}(r)J_{e_a}(m-r):$ in a $B$-orthonormal basis; the split is $r<0$ versus $r\ge0$, and these sums are locally finite and basis independent.

[F2] [[def-untwisted-affine-central-extension]]: $[J_x(u),J_y(v)]=J_{[x,y]}(u+v)+ukB(x,y)\delta_{u+v,0}I$.

[F3] [[def-dual-coxeter-number-for-normalized-form]]: the adjoint Casimir for $B$ acts by $2h^\vee I$.

[F4] [[def-residue-two-cocycle-on-a-loop-algebra]]: $B$ is nondegenerate, symmetric, and invariant.

[F5] [[def-positive-energy-affine-module]]: every sufficiently large positive current mode kills each fixed vector.

## Proof

1.1 Choose a $B$-orthonormal complex basis $(e_a)$. Such a basis exists by finite-dimensional diagonalization: a nonzero symmetric nondegenerate form has a vector of nonzero square (otherwise polarization makes it zero), rescale that vector using a square root in $\mathbb C$, and induct on its nondegenerate orthogonal complement. Invariance gives $\sum_a([x,e_a]\otimes e_a+e_a\otimes[x,e_a])=0$: in this basis the matrix of $\operatorname{ad}(x)$ is skew-symmetric, since $B([x,u],v)=-B(u,[x,v])$. Also $\sum_a[e_a,[e_a,x]]=2h^\vee x$ by [F3]. This choice concerns only $\mathfrak g$, not an inner product on $V$. [F3, F4, algebra, choose]

2.1 Fix $v\in V$ and integers $m,n$. Expand $[J_x(n),T_m]$ by the product rule in the original normal order. All terms are finite on $v$: for $r\to+\infty$ the rightmost current or its commutator has index $r$ or $r+n$, and for $r\to-\infty$ it has index $m-r$ or $m-r+n$. These kill $v$ beyond a common bound, using [F5] for the finite family $e_a,[x,e_a]$. To identify the expansion with the commutator, the original truncated quadratic sum also stabilizes on both $v$ and $J_x(n)v$ by [F1]. Thus a sufficiently large cutoff gives the actual commutator, and all following identities are identities of eventually constant finite sums on $v$. Each factor contributes $nkJ_x(m+n)/2$ from the central term in [F2], by $\sum_aB(x,e_a)e_a=x$; their sum is $nkJ_x(m+n)$. This includes coincident indices: the two product-rule contributions are both retained. [F1, F2, F5, step 1.1, algebra]

3.1 Write $p=m+n$, $A_{\alpha,\beta}=\sum_aJ_{[x,e_a]}(\alpha)J_{e_a}(\beta)$ and $D_{\alpha,\beta}=\sum_aJ_{e_a}(\alpha)J_{[x,e_a]}(\beta)$ for $\alpha+\beta=p$. The noncentral expansion in step 2.1 is $\sum_{\alpha+\beta=p}(a_{\alpha,\beta}A_{\alpha,\beta}+b_{\alpha,\beta}D_{\alpha,\beta})$, with $$a_{\alpha,\beta}=\tfrac12(\mathbf1_{\alpha<n}+\mathbf1_{\beta\ge0}),\qquad b_{\alpha,\beta}=\tfrac12(\mathbf1_{\alpha<0}+\mathbf1_{\beta\ge n}).$$ Indeed the first normal-order half $r<0$ contributes $A$ at $\alpha=r+n<n$ and $D$ at $\alpha=r<0$; the reversed half $r\ge0$ contributes $A$ at $\beta=r\ge0$ and $D$ at $\beta=r+n\ge n$. The invariant tensor of step 1.1 gives $D_{\alpha,\beta}=-A_{\alpha,\beta}$. Set $f_n(j)=\mathbf1_{j<n}-\mathbf1_{j<0}$. Then $a-b=(f_n(\alpha)+f_n(\beta))/2$. Cancellation leaves a finite sum, since $f_n$ is supported on $0\le j<n$ for $n>0$, on $n\le j<0$ with value $-1$ for $n<0$, and is zero for $n=0$. The uncancelled tails before this cancellation are legitimate too: for $\alpha$ sufficiently negative the rightmost index $\beta$ is sufficiently positive, and for $\alpha$ sufficiently positive both coefficients are zero. [F1, F2, F4, F5, step 1.1, step 2.1, algebra]

4.1 Exchange $\alpha,\beta$ in the term with coefficient $f_n(\beta)$. By the same invariant tensor, $A_{\beta,\alpha}=-\sum_aJ_{e_a}(\beta)J_{[x,e_a]}(\alpha)$. Hence the noncentral part is $$\frac12\sum_{\alpha+\beta=p}f_n(\alpha)\sum_a[J_{[x,e_a]}(\alpha),J_{e_a}(\beta)].$$ Here $B([x,e_a],e_a)=B(x,[e_a,e_a])=0$, so there is no additional central term. Moreover $\sum_a\bigl[\,[x,e_a],e_a\bigr]=\sum_a[e_a,[e_a,x]]=2h^\vee x$. As $\sum_{\alpha\in\mathbb Z}f_n(\alpha)=n$, including $n=0$ and negative $n$, [F2] reduces the displayed finite sum to $nh^\vee J_x(p)$. Together with step 2.1, this gives $[J_x(n),T_m]=n(k+h^\vee)J_x(p)$. Divide by $q\ne0$ and reverse the commutator to obtain the claim. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1, algebra] ∎
