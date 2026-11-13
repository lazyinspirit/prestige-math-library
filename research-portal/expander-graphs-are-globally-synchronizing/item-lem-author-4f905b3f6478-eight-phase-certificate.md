---
title: An explicit eight-phase weighted stability certificate
status: published
research_item: lem-author-4f905b3f6478-eight-phase-certificate
dependency_level: 3
sources:
  references:
    - title: Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing
        Graph Theory, arXiv:2209.06362v3
      url: https://arxiv.org/pdf/2209.06362v3
      locator: Section II.B, equations (1)–(3), PDF pp. 5–7; Section V, Figure 2 and
        Lemma 1, PDF pp. 11–14
      statement: Canale derives the weighted eight-phase equilibrium relation
        (a-d)tan(alpha)=c and proves transverse Hessian positivity under
        c^2>2ad. The explicit edge sets and cyclic block proof in this item are
        a local reconstruction, not an exact quotation of the printed
        construction.
      hypotheses: Positive integer edge weights; this reconstruction additionally
        states a>d and alpha in (0,pi/2). The displayed local graph, phase
        assignment and c^2>2ad are checked in the local proof.
      reading_limits: Inspected the arXiv v3 PDF text at Section II.B equations
        (1)–(3) and Section V Figure 2, equilibrium calculation, Lemma 1 and
        scaled Hessian. The local proof verifies the explicitly chosen edges; no
        claim is made to have checked all other results or Appendix A.
---

## Prerequisites

- [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning)
- [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm)
- [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms)
- [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus)
- [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities)
- [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas)
- [` Eduardo A. Canale, From weighted to unweighted graphs in Synchronizing Graph Theory, arXiv:2209.06362v3 · Section II.B, equations (1)–(3), PDF pp. 5–7; Section V, Figure 2 and Lemma 1, PDF pp. 11–14 `](https://arxiv.org/pdf/2209.06362v3)


## Statement

Use vertices $0,\ldots,7$, with indices reduced modulo eight, and four disjoint edge sets $E_a=\{\{0,1\},\{2,3\},\{4,5\},\{6,7\}\}$, $E_c=\{\{1,2\},\{3,4\},\{5,6\},\{7,0\}\}$, $E_d=\{\{0,5\},\{1,4\},\{2,7\},\{3,6\}\}$, and $E_b=\{\{j,j+2\}:0\le j<8\}$. Give them weights $a,c,d,b$, respectively, where $a,b,c,d$ are positive integers, $a>d$ and $c^2>2ad$. Let $\alpha\in(0,\pi/2)$ satisfy $\tan\alpha=c/(a-d)$, and put $\theta_{2r}=r\pi/2$, $\theta_{2r+1}=r\pi/2+\alpha$ for $0\le r<4$. This is a nonsynchronous equilibrium. Its potential Hessian is positive on $\mathbf1^\perp=\{x:\sum_jx_j=0\}$, and its kernel is exactly the constant vectors.

## Facts & Assumptions

[F1] The weighted graph, potential and Hessian conventions are those of [def-author-4f905b3f6478-spinning](item-def-author-4f905b3f6478-spinning).

[F2] Real symmetric matrices have an orthonormal eigenbasis by [math:cor-real-spectral-theorem-for-self-adjoint-endomorphisms](https://alphabetamath.cc/item/cor-real-spectral-theorem-for-self-adjoint-endomorphisms). In that basis their quadratic forms are the eigenvalue-weighted sums of squared coordinates, by orthonormality, as also computed in [prop-expander-prereq-selfadjoint-order-and-norm](item-prop-expander-prereq-selfadjoint-order-and-norm) (Proof step 1.1).

[F3] The unit-phasor, phase-difference and conjugation identities in [def-expander-prereq-phasor-calculus](item-def-expander-prereq-phasor-calculus) give sine and cosine addition identities by taking real and imaginary parts. For every real $x$, the identities $\sin(x+\pi/2)=\cos x$, $\cos(x+\pi/2)=-\sin x$, $\sin(\pi/2)=1$ and $\cos(\pi/2)=0$ are supplied by [math:thm-quarter-turn-values-and-shift-formulas](https://alphabetamath.cc/item/thm-quarter-turn-values-and-shift-formulas). Cosine is strictly decreasing on $[0,\pi]$ by [prop-expander-prereq-ordered-angle-inequalities](item-prop-expander-prereq-ordered-angle-inequalities), so $\cos\alpha>\cos(\pi/2)=0$ for $0<\alpha<\pi/2$. In this interval $\tan\alpha=\sin\alpha/\cos\alpha$.

## Proof

**Given:** The graph, parameters and phases in the Statement.

**Goal:** Verify equilibrium and strict transverse positivity.

1.1 Every vertex has one incident edge of each of types $a,c,d$ and two of type $b$. At an even vertex the sine sum is $a\sin\alpha-c\cos\alpha-d\sin\alpha$; at an odd vertex it is its negative. The two $b$ edges have differences $\pi/2$ and $-\pi/2$ and cancel. Since $(a-d)\sin\alpha=c\cos\alpha$, these sums vanish. Vertices $0$ and $2$ differ by $\pi/2$, proving nonsynchrony. [given, F1, F3, algebra]

2.1 Put $A=a\cos\alpha$, $C=c\sin\alpha$, $D=d\cos\alpha$ and $h=A+C-D$. The Hessian edge coefficients are $A,C,-D,0$ on the four types $a,c,d,b$. Pair vertices as $(2r,2r+1)$ with $r\in\mathbb Z_4$. For each $z\in\{1,-1,i,-i\}$ the two-dimensional complex subspace with even coordinates $uz^r$ and odd coordinates $vz^r$ is invariant. Substitution into the Hessian gives the Hermitian block with diagonal entries $h$ and off-diagonal entries $-(A+Cz^{-1}-Dz^2)$ and its conjugate. These four subspaces span the whole complex vertex space: the four sequences $z^r$ are pairwise orthogonal since each nontrivial fourth root has geometric sum zero. Each block therefore has eigenvalues $h\pm|A+Cz^{-1}-Dz^2|$. [F1, F2, F3, step 1.1, algebra]

3.1 For $z=1$, the eigenvalues are $0,2h$; for $z=-1$, they are $2C,2(A-D)$; for $z=\pm i$, they are $h\pm\sqrt{(A+D)^2+C^2}$. Here $A-D=(a-d)\cos\alpha>0$, $C=c^2\cos\alpha/(a-d)>0$ and $h>0$. Moreover $h^2-((A+D)^2+C^2)=2C(A-D)-4AD=2\cos^2\alpha(c^2-2ad)>0$. Thus all eigenvalues except the single zero are strictly positive. The zero vector mode has equal coordinates in both components and corresponds to constants; [F2] now gives the claimed positivity on the real subspace $\mathbf1^\perp$. [given, F2, F3, step 2.1, algebra] ∎

## Source notes

The cyclic two-component calculation is a concise local version of Canale §V, Lemma 1, pp. 12–14 and its displayed scaled Hessian on p. 14. We specify all edges explicitly rather than repeat the overlapping printed edge sets on p. 11, and use $\tan\alpha=c/(a-d)$, the equation derived on p. 12, rather than its following printed arctangent denominator $a-c$. In this numbering the nonzero signed off-diagonal entries agree with the p. 14 matrix. The proof above verifies the chosen graph directly; its validity does not depend on assigning a unique intended meaning to those misprints.
