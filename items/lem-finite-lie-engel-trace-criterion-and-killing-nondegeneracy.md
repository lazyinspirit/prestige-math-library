---
id: "lem-finite-lie-engel-trace-criterion-and-killing-nondegeneracy"
kind: "lemma"
title: "Engel, the trace criterion, and Killing nondegeneracy"
deps: ["def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action", "thm-primary-decomposition-for-an-endomorphism", "thm-chinese-remainder-theorem-for-comaximal-ideals", "thm-fundamental-theorem-of-algebra-minimum-modulus-proof"]
provenance:
  statement: "ai-altered"
  proof: "ai-generated"
sources:
  references:
    - title: "Pavel Etingof, Lie Groups and Lie Algebras, \u00a7\u00a715\u201317; finite-dimensional local trace proof"
      url: "https://ocw.mit.edu/courses/18-755-lie-groups-and-lie-algebras-ii-spring-2024/mit18_755_s24_lec_full.pdf"
status: "draft"
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Let $V$ be a finite-dimensional complex vector space. If a Lie subalgebra $L\subseteq\operatorname{End}(V)$ consists entirely of nilpotent operators and $V\ne0$, it has a common nonzero annihilated vector; it admits a basis in which all its operators are strictly upper triangular. If instead $L$ satisfies $\operatorname{tr}_V(xy)=0$ for all $x\in[L,L]$, $y\in L$, then $L$ is solvable.

For every finite-dimensional complex semisimple Lie algebra, the Killing form $B$ is symmetric, invariant and nondegenerate. All these assertions are choice-free, including the zero Lie algebra.

## Facts & Assumptions

**Given:** The finite-dimensional complex Lie and trace conventions of [[def-finite-semisimple-lie-algebra-and-symmetric-adjoint-action]].

[F1] A finite-dimensional endomorphism decomposes into the kernels of the irreducible powers in its minimal polynomial by [[thm-primary-decomposition-for-an-endomorphism]].

[F2] Finitely many residues at pairwise comaximal polynomial ideals are interpolated by [[thm-chinese-remainder-theorem-for-comaximal-ideals]].

[F3] Every nonconstant complex polynomial has a complex root by [[thm-fundamental-theorem-of-algebra-minimum-modulus-proof]]; finite division then splits it into linear factors.

## Proof

1.1 If $a^q=0$ on $V$, the commuting operators of left and right multiplication by $a$ on $\operatorname{End}(V)$ give $$ (\operatorname{ad}_a)^m(T)=\sum_{j=0}^m(-1)^j\binom mj a^{m-j}Ta^j.$$ For $m\ge2q-1$ every summand is zero. Hence $\operatorname{ad}_a$ is nilpotent on any invariant subspace or quotient, in particular on a quotient of subalgebras stable under its action. [given, algebra]

1.2 For a finite-dimensional Lie algebra $\mathfrak g$, trace cyclicity proves symmetry of $B$. Jacobi and trace cyclicity also give $$B([x,y],z)=\operatorname{tr}([\operatorname{ad}_x,\operatorname{ad}_y]\operatorname{ad}_z)=\operatorname{tr}(\operatorname{ad}_x[\operatorname{ad}_y,\operatorname{ad}_z])=B(x,[y,z]).$$ Consequently its radical $J=\{x:B(x,\mathfrak g)=0\}$ is an ideal: $B([a,x],y)=-B(x,[a,y])=0$ for $x\in J$. [given, algebra]

2.1 We record a finite spectral construction. By F3 and F1, an operator $x$ on a nonzero $V$ has a direct-sum decomposition $V=\bigoplus_\lambda V_\lambda$ with $x|_{V_\lambda}=\lambda\operatorname{id}+n_\lambda$, each $n_\lambda$ nilpotent. Define $b$ to act on $V_\lambda$ by the scalar $\overline\lambda$. For a map in $\operatorname{Hom}(V_\mu,V_\lambda)$, $\operatorname{ad}_x$ equals $(\lambda-\mu)\operatorname{id}$ plus the difference of commuting nilpotent left and right actions. Its nilpotent part has exponent at most $N=2\dim V$, by the same binomial expansion as in step 1.1. For every distinct difference $a=\lambda-\mu$, F2 supplies a polynomial $R(z)$ with $R(z)\equiv\overline a\pmod{(z-a)^N}$. These ideals are pairwise comaximal: distinct linear factors generate the unit ideal, and expanding a sufficiently high power of such a unit expression proves the same for their $N$th powers. Therefore $R(\operatorname{ad}_x)$ acts on this Hom space by $\overline\lambda-\overline\mu$, exactly $\operatorname{ad}_b$. The difference zero is among the interpolation nodes, so $R(0)=0$. Thus $$\operatorname{ad}_b=R(\operatorname{ad}_x),\qquad R(0)=0.$$ Also $\operatorname{tr}(bx)=\sum_\lambda(\dim V_\lambda)|\lambda|^2$, since each nilpotent block has trace zero. [F1, F2, F3, given, step 1.1, algebra]

2.2 Prove the common-zero-vector assertion by induction on $\dim L$, for all finite-dimensional nonzero representation spaces on which every operator is nilpotent. The zero algebra is immediate. Choose a proper subalgebra $H\subset L$ of maximal dimension. For $a\in H$, step 1.1 makes its adjoint action on $L/H$ nilpotent. Its image is a Lie algebra of dimension at most $\dim H<\dim L$, so the induction hypothesis gives a nonzero coset $x+H$ annihilated by every $a\in H$. Hence $[H,x]\subseteq H$, and $H+\mathbb Cx$ is a subalgebra strictly containing $H$. Maximality forces $L=H+\mathbb Cx$ and makes $H$ a codimension-one ideal. [step 1.1, given, algebra]

3.1 The induction hypothesis applied to $H$ on $V$ makes $K=\{v:Hv=0\}$ nonzero. It is $x$-invariant because for $a\in H$, $a(xv)=x(av)+[a,x]v=0$. The nilpotent restriction of $x$ to $K$ has a nonzero kernel: take the last nonzero vector in the finite power string of any nonzero vector of $K$. This vector is killed by both $x$ and $H$, hence by $L$, completing the induction. Apply the same common-vector result to successive quotients of $V$ to obtain a finite invariant flag with zero action on each one-dimensional quotient. Lifting a basis of that flag gives strict upper triangularity. A product of $\dim V$ strictly upper triangular operators is zero; expanding iterated brackets into products shows this algebra, and every subalgebra of it, is solvable (indeed nilpotent). [step 2.2, given, algebra]

3.2 Now suppose the trace-zero hypothesis holds and fix $x\in[L,L]$. Use the operator $b$ and polynomial $R$ from step 2.1. Write $x=\sum_j[y_j,z_j]$ with $y_j,z_j\in L$, a finite sum by the definition of the derived subspace. Cyclicity of finite matrix trace gives $$\operatorname{tr}(bx)=\sum_j\operatorname{tr}([b,y_j]z_j)=\sum_j\operatorname{tr}(R(\operatorname{ad}_x)(y_j)z_j)=0.$$ Indeed $[L,L]$ is an ideal by Jacobi, and $R(0)=0$ implies $R(\operatorname{ad}_x)(y_j)\in[L,L]$, so each last trace vanishes by the hypothesis. Step 2.1 now gives a sum of nonnegative real numbers $\sum_\lambda(\dim V_\lambda)|\lambda|^2=0$. Each $\lambda$ is zero, so $x$ is nilpotent on $V$. [step 2.1, given, algebra]

4.1 Thus every element of $[L,L]$ is a nilpotent operator. Step 3.1 makes this derived algebra solvable. If its derived series vanishes after $m$ steps, that of $L$ vanishes after $m+1$, proving the trace criterion. If $V=0$, then $L=0$ and the same conclusion is immediate without spectral decomposition. [step 3.1, step 3.2, given, algebra]

5.1 Suppose $\mathfrak g$ is semisimple. For $x,y\in J$, the adjoint actions preserve $J$ and act by zero on $\mathfrak g/J$. Computing trace in a basis extending one of $J$ gives $B_J(x,y)=B_{\mathfrak g}(x,y)=0$. Thus $L=\operatorname{ad}_J(J)\subseteq\operatorname{End}(J)$ satisfies step 4.1's trace hypothesis and is solvable. Its kernel in $J$ is the center, which is abelian; explicitly, if $D^mL=0$ then $D^mJ$ lies in that center and $D^{m+1}J=0$. Hence $J$ is a solvable ideal of $\mathfrak g$ and is zero by semisimplicity. This proves nondegeneracy. For $\mathfrak g=0$ the unique form has zero radical. Every induction, basis, polynomial interpolation and eigenvalue factorization above is finite; no algebraic closure or arbitrary-index selection is taken, so no AC is used. [step 4.1, step 1.2, F1, F2, F3, given, algebra] ∎
