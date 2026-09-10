---
id: thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra
kind: theorem
title: "Invariant bilinear form for a symmetrizable kac moody algebra"
status: draft
origin: pipeline
deps: ["def-symmetrizable-generalized-cartan-matrix", "prop-kac-moody-root-spaces-are-finite-dimensional", "lem-kac-moody-opposite-simple-centralizer-vanishes"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Kleshchev, Lectures on Infinite Dimensional Lie Algebras — Lemma 2.2.1 and Theorem 2.2.3, pp.28–32; complete height induction and zero-height invariance"
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
proof_strategy: direct
---

## Statement

Let $A$ be symmetrizable with $D=\operatorname{diag}(d_i)>0$ and $DA$ symmetric. Fix a complement $\mathfrak h^{\prime\prime}$ to $H=\operatorname{span}(h_i)$ in the minimal Cartan. There is a unique symmetric invariant nondegenerate bilinear form on $\mathfrak g(A)$ whose Cartan restriction satisfies $(h_i,h)=\alpha_i(h)/d_i$ and $(\mathfrak h^{\prime\prime},\mathfrak h^{\prime\prime})=0$. It satisfies $(e_i,f_j)=\delta_{ij}/d_i$ and $(\mathfrak g_\alpha,\mathfrak g_\beta)=0$ if $\alpha+\beta\ne0$. Opposite root spaces pair perfectly. For $\nu(h)=(h,\cdot)$, one has $(\alpha_i,\alpha_j)=d_i a_{ij}$ on $\mathfrak h^*$ and $[x,y]=(x,y)\nu^{-1}(\alpha)$ for $x\in\mathfrak g_\alpha$, $y\in\mathfrak g_{-\alpha}$.

## Facts & Assumptions

**Given:** A finite symmetrizable GCM, positive d_i and a finite Cartan complement.

[F1] Symmetry means d_i a_ij=d_j a_ji. ([[def-symmetrizable-generalized-cartan-matrix]]).

[F2] The grading has finite root spaces and simple one-dimensional spaces. ([[prop-kac-moody-root-spaces-are-finite-dimensional]]).

[F3] A positive vector commuting with every f_i is zero; a negative vector commuting with every e_i is zero. ([[lem-kac-moody-opposite-simple-centralizer-vanishes]]).

## Proof

1.1 The prescribed Cartan form is symmetric on $H$: $\alpha_i(h_j)/d_i=a_{ji}/d_i=a_{ij}/d_j$. Thus it defines a symmetric form on $H\oplus\mathfrak h^{\prime\prime}$. Put $p(h)=(\alpha_i(h))_i$. Independence makes $p$ onto; $p|_H$ has rank $r$, so both $\ker p$ and $\ker(p|_H)$ have dimension $n-r$ and are equal. A vector annihilating the full Cartan form pairs to zero with all $h_i$, hence lies in $\ker p\subset H$. Write it $\sum c_i h_i$. Pairing with arbitrary $h$ gives $\sum(c_i/d_i)\alpha_i(h)=0$, whence all $c_i=0$. This proves Cartan nondegeneracy, even when $A$ is singular. [F1, given]

2.1 Use the principal height grading $\mathfrak g=\bigoplus_m\mathfrak g_m$. At heights $0,\pm1$, set $(e_i,f_j)=\delta_{ij}/d_i$ and all unequal-total-height pairs to zero. Invariance with a Cartan element reduces to $(h,[e_i,f_j])=\delta_{ij}\alpha_i(h)/d_i=([h,e_i],f_j)$; all other possible nonzero triples at this stage are permutations of this equality. Suppose pairings up to height $N-1$ are defined and invariant whenever all relevant degrees have absolute value at most $N-1$. For $x\in\mathfrak g_N$ and $y=\sum_a[u_a,v_a]\in\mathfrak g_{-N}$, with $u_a,v_a$ of strictly negative smaller heights, prescribe $(x,y)=\sum_a([x,u_a],v_a)$ and extend symmetrically. Both arguments on the right have smaller absolute heights. Such bracket expressions exist since each half is generated in height one. [F2, step 1.1]

3.1 To check independence, write $x=\sum_b[w_b,z_b]$ with positive smaller heights. For a single term on each side, the induction hypothesis, symmetry and Jacobi give $([ [w,z],u],v)=([w,u],[z,v])-([z,u],[w,v])=(w,[u,[z,v]]-[v,[z,u]])=(w,[z,[u,v]])$. All inner mixed brackets have smaller absolute heights; each use of invariance therefore belongs to the induction hypothesis. Summing shows the proposed value equals $\sum_b(w_b,[z_b,y])$, which depends only on $y$ for a fixed expression of $x$. It was defined using actual $x$, so it is independent of both expressions. This argument also shows the value is zero when either sum of bracket expressions is zero. [step 2.1]

4.1 Invariance for total height different from zero is automatic from orthogonality. If one of the three absolute heights is $N$ and the others are smaller, the equality follows from the definition when the extreme-height entry is first or last. For a middle entry $y=[u,v]$, expand $([x,[u,v]],z)=([v,x],[u,z])+([x,u],[v,z])=(x,[v,[z,u]]+[u,[v,z]])=(x,[ [u,v],z])$ using the smaller-height invariance and Jacobi. If two heights are $N$, the third is zero. For $h\in\mathfrak h$, $y=[u,v]$ of height $N$ and $z$ of height $-N$, the same calculation gives $([h,[u,v]],z)=([h,u],[v,z])-([h,v],[u,z])=(h,[u,[v,z]]-[v,[u,z]])=(h,[ [u,v],z])$. Symmetry and antisymmetry give all permutations, including a middle Cartan entry. Thus the induction extends full invariance at height $N$. [step 2.1, step 3.1]

5.1 For homogeneous root weights, invariance implies $0=([h,x],y)+(x,[h,y])=(\alpha+\beta)(h)(x,y)$; hence unequal opposite weights pair to zero. Let $R$ be the radical. Invariance makes it an ideal, and step 1.1 gives $R\cap\mathfrak h=0$. If $R$ were nonzero, finite weight interpolation would give a nonzero homogeneous vector in it; take one of minimal positive absolute height. For a positive weight use the positive clause of F3; for a negative weight use its negative clause. Every opposite simple bracket is in $R$ of lower height, or in its zero Cartan intersection, so is zero. F3 then kills that vector, a contradiction. Hence the form is nondegenerate. Together with weight orthogonality and finite dimensions from F2 this proves perfect opposite-root pairings. [F2, F3, step 1.1, step 4.1]

6.1 The Cartan map obeys $\nu(h_i)=\alpha_i/d_i$, so $\nu^{-1}(\alpha_i)=d_i h_i$ and $(\alpha_i,\alpha_j)=d_i a_{ij}$. For opposite vectors, $([x,y],h)=(x,[y,h])=\alpha(h)(x,y)$ for every $h$. The bracket lies in the Cartan by F2; step 1.1 identifies it as $(x,y)\nu^{-1}(\alpha)$. Any invariant extension of the prescribed Cartan form has the height-one values of step 2.1, weight orthogonality, and the recursion of that step. Induction therefore proves uniqueness. [F2, step 1.1, step 2.1, step 4.1, step 5.1] ∎

## Sources

Source comparison: [Kleshchev](https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf), Lemma 2.2.1 and Theorem 2.2.3, pp.28–32; complete height induction and zero-height invariance.
