---
id: lem-it-hayashi-nagaoka-finite-operator-inequality
kind: lemma
title: Finite Hayashi–Nagaoka operator inequality
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 1
deps:
  - def-non-negative-and-positive-operator
  - lem-it-finite-positive-square-root-is-order-preserving
  - thm-complex-spectral-theorem-for-normal-endomorphisms
  - thm-non-negative-square-root-exists-and-is-unique
proof_strategy: direct
axiom_use: "No choice axiom is used; all selections and probability spaces are finite, and analytic existence uses the stated finite-dimensional or real-completeness hypotheses."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Lemma 16.4.1"
      url: "https://arxiv.org/pdf/1106.1445v8"
    - title: "John Watrous, The Theory of Quantum Information, §8.1.2"
      url: "https://cs.uwaterloo.ca/~watrous/TQI/TQI.pdf"
---

## Statement

Let $S,T$ be nonnegative endomorphisms of a finite-dimensional complex inner-product space $H$, with $S\preceq I_H$. Define $(S+T)^{-1/2}$ spectrally on $\operatorname{supp}(S+T)$ and set it to zero on $\ker(S+T)$. Then

$$I_H-(S+T)^{-1/2}S(S+T)^{-1/2}\preceq2(I_H-S)+4T.$$

## Facts & Assumptions

**Given:** Nonnegative $S,T$ on finite-dimensional $H$ with $S\preceq I_H$.

[F1] [[def-non-negative-and-positive-operator]]: $A\preceq B$ means $B-A$ is nonnegative.

[F2] [[lem-it-finite-positive-square-root-is-order-preserving]]: $0\preceq X\preceq Y$ implies $\sqrt X\preceq\sqrt Y$.

[F3] [[thm-complex-spectral-theorem-for-normal-endomorphisms]] and [[thm-non-negative-square-root-exists-and-is-unique]]: nonnegative endomorphisms have finite orthonormal eigenbases and their square roots are defined by taking nonnegative square roots of eigenvalues.

## Proof



1.1 If $H=\{0\}$, every endomorphism, including $I_H$, is zero, so the asserted inequality is $0\preceq0$. Henceforth assume $H\ne\{0\}$, as required by [F2]. Set $X=S+T$, $R=\sqrt X$, and $U=I-R$. For $c>0$ and endomorphisms $A,B$, expanding $(A-cB)^*(A-cB)\succeq0$ and dividing by $c$ gives $A^*B+B^*A\preceq c^{-1}A^*A+cB^*B$. Apply this with $A=\sqrt T R$ and $B=\sqrt T U$. Since $R+U=I$, expansion of $(R+U)T(R+U)$ and the preceding inequality give $$T\preceq(1+c^{-1})RTR+(1+c)UTU.$$ Now $T\preceq X=R^2$, so congruence by $U$ gives $UTU\preceq UR^2U=RU^2R$; the last equality follows because $U=I-R$ commutes with $R$. Since $U^2=I-2R+R^2=I+S+T-2R$, substitution and collection of the two $T$ terms yield $$T\preceq R\bigl((2+c+c^{-1})T+(1+c)(I+S-2R)\bigr)R.$$ By [F2], $R\succeq\sqrt S$; [F3] and $0\preceq S\preceq I$ give $\sqrt S\succeq S$ by diagonalizing $S$. Therefore $I+S-2R\preceq I-S$. Taking $c=1$ in the last display proves $$T\preceq R\bigl(4T+2(I-S)\bigr)R.$$ [F1, F2, F3, algebra]

2.1 Let $P$ be the orthogonal projection onto $\operatorname{supp}X$. If $v\in\ker X$, then $0=\langle v,Xv\rangle=\langle v,Sv\rangle+\langle v,Tv\rangle$; both terms are nonnegative, so each is zero. By [F3], these terms are $\|\sqrt S v\|^2$ and $\|\sqrt T v\|^2$, hence $Sv=Tv=0$. Since $S,T$ are self-adjoint, they preserve the orthogonal complement $PH$ of $\ker X$ as well. Thus both sides of the desired inequality are block diagonal for $H=PH\oplus\ker X$. On $PH$, congruence of step 1.1 by the inverse of the restriction of $R$ gives $X^{-1/2}TX^{-1/2}\preceq4T+2(I-S)$. On this block, $X^{-1/2}(S+T)X^{-1/2}=I_{PH}$, so its left side is $I_{PH}-X^{-1/2}SX^{-1/2}$. On $\ker X$, the desired inequality is $I\preceq2I$, since $S=T=X^{-1/2}=0$ there. Combining these two block inequalities proves the Statement, including when either block is zero-dimensional. [F1, F3, step 1.1, algebra, cases] ∎

