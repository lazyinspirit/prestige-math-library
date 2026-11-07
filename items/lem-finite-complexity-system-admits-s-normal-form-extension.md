---
id: lem-finite-complexity-system-admits-s-normal-form-extension
kind: lemma
title: "A finite-complexity system has a bounded s-normal-form extension"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-affine-linear-forms-system-and-size
  - def-finite-complexity-of-a-linear-forms-system
  - def-rationals
  - def-linear-combination-and-span
  - def-vector-space
  - def-linear-independence
  - def-linear-basis
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Ben Green and Terence Tao, Linear equations in primes"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf"
      locator: "Lemma 4.4 and complete proof, printed pp. 1773–1774."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "Section 1.7, printed pp. 109–123: finite-complexity patterns and the higher-order transference route."
---

## Statement

Let $d,t\ge1$, $s\ge0$, and $L>0$. If a system $\Psi:\mathbb Z^d\to\mathbb Z^t$ of nonconstant integer affine-linear forms has complexity at most $s$ and $\|\Psi\|_N\le L$, then there is an extension $\Psi':\mathbb Z^{d'}\to\mathbb Z^t$, with $d'=d+t(s+1)$, such that $\Psi'(x,0)=\Psi(x)$, $\Psi'(\mathbb Z^{d'})=\Psi(\mathbb Z^d)$, $\Psi'$ is in $s$-normal form, and $\|\Psi'\|_N=O_{s,t,d,L}(1)$.

## Statement references

[[def-affine-linear-forms-system-and-size]]

[[def-finite-complexity-of-a-linear-forms-system]]

[Green and Tao, Lemma 4.4](https://annals.math.princeton.edu/wp-content/uploads/annals-v171-n3-p08-p.pdf)

[Tao, Higher Order Fourier Analysis, Section 1.7](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

## Facts & Assumptions

**Given:** $d,t\ge1$, $s\ge0$, $L>0$, and a system $\Psi(x)=(\psi_1(x),\ldots,\psi_t(x))$ of nonconstant integer affine-linear forms, of complexity at most $s$, with $\|\Psi\|_N\le L$.

[F1] Each form is $\psi_i(x)=a_i\cdot x+b_i$ with coefficient vector $a_i\in\mathbb Z^d\subset\mathbb Q^d$; nonconstant means $a_i\ne0$. [[def-affine-linear-forms-system-and-size]]

[F2] For each $i$, the other forms are covered by at most $s+1$ classes $A_{i,1},\ldots,A_{i,s+1}$ such that $a_i\notin\operatorname{span}_{\mathbb Q}\{a_j:j\in A_{i,k}\}$ for every class. The $s$-normal-form coordinate condition is the one stated in the definition. [[def-finite-complexity-of-a-linear-forms-system]]

[F3] In $\mathbb Q^d$, a basis is a linearly independent spanning subset; a finite list is linearly independent when its only zero linear combination has all coefficients zero. [[def-vector-space]] [[def-rationals]] [[def-linear-independence]] [[def-linear-basis]] [[def-linear-combination-and-span]]

## Proof

**Proof technique:** direct.

1.1 For each target $i$, fix one of its cover families from [F2]; only finitely many classes are involved, so these choices are finite. For each class $A_{i,k}$, the coefficient vectors form a finite list. Scan it in its given order, retaining a vector exactly when it is not in the span of those already retained; the retained list is independent and spans the class vectors. Since $a_i$ is outside this span by [F2], adjoining $a_i$ preserves independence. Extend the resulting list to a basis of $\mathbb Q^d$ by scanning the standard coordinate vectors $e_1,\ldots,e_d$ and retaining each vector when it is outside the current span. Every standard vector lies in the final span, so the final independent list is a basis. Define a rational linear functional $\ell_{i,k}$ on this basis to equal $1$ at $a_i$ and $0$ at every other basis vector. It then satisfies $\ell_{i,k}(a_i)=1$ and $\ell_{i,k}(a_j)=0$ for every $j\in A_{i,k}$. This construction uses only finite basis operations. [F2, F3, construct]

2.1 In standard coordinates, $\ell_{i,k}(x)=q_{i,k}\cdot x$ for a rational vector $q_{i,k}\in\mathbb Q^d$. Clearing a positive common denominator gives $f_{i,k}\in\mathbb Z^d$ with $a_i\cdot f_{i,k}\ne0$ and $a_j\cdot f_{i,k}=0$ for every $j\in A_{i,k}$. For the uniform bound, argue inductively through the at most $t$ extension stages. At stage $r$, the dimension is $d_r=d+r(s+1)$; if all current slope entries have absolute value at most $M_r$, there are only finitely many possible integer coefficient arrays and finitely many covers of their $t$ forms. Run the ordered basis construction for each admissible array and cover and clear denominators by a fixed rule; the resulting integer vectors have a finite maximum $\ell^1$ norm $B_r$. Every new slope entry is a dot product of a current row with one of these vectors, so its absolute value is at most $d_rM_rB_r$. Set $M_{r+1}=\max(M_r,d_rM_rB_r)$. Starting from $M_0=\lceil L\rceil$ gives finite bounds through stage $t$, depending only on $s,t,d,L$. [step 1.1, F1, F2, algebra]

3.1 Suppose an extension has already been constructed and still has complexity at most $s$. For the current target $i$, choose its cover classes and separator vectors $f_{i,1},\ldots,f_{i,s+1}$ by the finite construction of steps 1.1–1.2, using the current homogeneous vectors. Append $s+1$ new variables $m_{i,1},\ldots,m_{i,s+1}$ and replace the current system $\Theta(x)$ by $\Theta(x+\sum_km_{i,k}f_{i,k})$. The coefficient of $m_{i,k}$ in form $j$ is $a_j\cdot f_{i,k}$: it is nonzero for the target $i$ and zero for every $j\in A_{i,k}$. Thus the $s+1$ new coordinate indices satisfy the normal-form product condition for target $i$. [step 1.1, step 2.1, F2, construct, algebra]

4.1 If an extended target vector were in the span of an extended cover class, projecting to the original coordinates would put the old target vector in the old cover-class span, contrary to [F2]. Thus each extension preserves complexity at most $s$. It also preserves each previously established normal-form witness, since adding new coordinates does not change the coefficients on its existing coordinate set. Applying step 3.1 successively to $i=1,\ldots,t$ therefore yields a final system in $s$-normal form. [step 3.1, F2, algebra]

5.1 Each extension is of the form $\Theta(x,m)=\Theta(x+\sum_km_kf_k)$. Setting $m=0$ recovers the preceding system, and every value of the extension is a value of the preceding system; conversely all preceding values occur with $m=0$. Hence the final extension restricts to $\Psi$ at zero dummy variables and has the same image. Exactly $t(s+1)$ variables were added. Old coefficients and constants are unchanged; all new slope entries have the uniform bound $M_t$ from step 2.1. Since the original sum of absolute constants divided by $N$ is at most $L$, the size definition [F1] gives $\|\Psi'\|_N\le t d_tM_t+L=O_{s,t,d,L}(1)$. [step 2.1, step 4.1, F1, algebra] ∎

