---
id: thm-rank-one-heisenberg-jordan-fock-module
kind: theorem
title: "The Heisenberg Jordan Fock family is grading-restricted; it is logarithmic exactly when λ is nonzero"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 6
deps: [lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi, thm-rank-one-heisenberg-vertex-operator-algebra, def-admissible-vertex-algebra-module, def-grading-restricted-generalized-vertex-module, def-ordinary-vertex-module, def-logarithmic-vertex-module]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Tomoyuki Arakawa and Anne Moreau, Arc Spaces and Vertex Algebras"
      url: "https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf"
      locator: "Section 3.1, Propositions 3.1–3.2 and Example 3.1; Section 3.3, Example 3.4. The finite Jordan-zero-mode construction and all grading claims are proved locally."
    - title: "Yi-Zhi Huang, James Lepowsky and Lin Zhang, Logarithmic Tensor Category Theory for Generalized Modules for a Conformal Vertex Algebra, I"
      url: "https://arxiv.org/pdf/1012.4193"
      locator: "Section 2: generalized conformal modules and generalized weight spaces; conventions are fixed by the local definitions."
---

## Statement

Let $E=\mathbb C e_0\oplus\mathbb C e_1$, define $Ne_0=0$, $Ne_1=e_0$, and let $A_\lambda=\lambda I+N$ for $\lambda\in\mathbb C$. The oscillator module $F_\lambda=F(E,A_\lambda)$ constructed in [[lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi]] is a module over the conformal CFT-type rank-one Heisenberg VOA of central charge $1$. Its conformal modes are

$$L_F(n)=\frac12\sum_{k\in\mathbb Z}{:}a_k a_{n-k}{:},\qquad L_F(0)=D\otimes I_E+\tfrac12 I_P\otimes A_\lambda^2=D\otimes I_E+\tfrac{\lambda^2}{2}I+\lambda I_P\otimes N,$$

where $D|_{P_d}=dI$. The degree spaces $P_d\otimes E$ give an admissible grading and are exactly the generalized weight spaces of weights $d+\lambda^2/2$, of dimension $2\dim P_d$. Thus $F_\lambda$ is grading-restricted generalized. It is logarithmic exactly when $\lambda\ne0$; at $\lambda=0$ it is ordinary despite its nonsemisimple current zero mode. In particular $F_1$ has $a_0=I+N$ and $L_F(0)|_E=\tfrac12I+N$.

## Facts & Assumptions

**Given:** The rank-one polynomial VOA, the explicit two-dimensional $E,N,A_\lambda$ and its normal-ordered Fock action.

[F1] [[lem-heisenberg-normal-ordered-fields-satisfy-module-jacobi]] proves the full module Jacobi identity, lower truncation and the shift $v^F_{(k)}(P_d\otimes E)\subset P_{d+w-k-1}\otimes E$ for a state of weight $w$.

[F2] [[thm-rank-one-heisenberg-vertex-operator-algebra]] proves $\omega=x_1^2/2$, central charge $1$, the normal-square conformal field and finite polynomial weight spaces $P_d$.

[F3] [[def-admissible-vertex-algebra-module]] fixes the nonnegative integer grading and mode shift. [[def-grading-restricted-generalized-vertex-module]] requires finite generalized weight spaces and a lower bound on real parts.

[F4] [[def-logarithmic-vertex-module]] means grading-restricted generalized with nonsemisimple $L_F(0)$; [[def-ordinary-vertex-module]] means that $L_F(0)$ is semisimple instead.

## Proof

1.1 Apply [F1] with the displayed $E,A_\lambda$. This already gives a genuine module with all three-variable Jacobi coefficients verified, not merely a representation of the current-mode Lie algebra. Formula [F2] and the action definition give $Y_F(\omega,z)=\tfrac12{:}a^F(z)^2{:}$, so its modes are the displayed quadratic sums, finite on each polynomial vector by the same normal-order bounds as [F1]. At $n=0$ this gives $L_F(0)=\sum_{r\ge1}a_{-r}a_r+a_0^2/2=D\otimes I+A_\lambda^2/2$. Since $N^2=0$, $A_\lambda^2/2=(\lambda^2/2)I+\lambda N$. [given, F1, F2, algebra]

2.1 The conformal modes also satisfy the central-charge-one Virasoro relations directly. The oscillator commutator gives $[L_F(n),a_m]=-m a_{n+m}$. Thus $C_{m,n}=[L_F(m),L_F(n)]-(m-n)L_F(m+n)$ commutes with every multiplication and derivative mode and is determined by its action on the common positive-mode kernel $E$. Its degree is $-m-n$; an operator commuting with all positive modes must send $E$ into $E$, so $C_{m,n}|_E=0$ if $m+n\ne0$. For $m>0$, $L_F(m)E=0$ and $L_F(-m)e=x_m A_\lambda e+\tfrac12\sum_{r=1}^{m-1}x_r x_{m-r}e$. Applying $L_F(m)$ gives $m A_\lambda^2e+\tfrac12\sum_{r=1}^{m-1}r(m-r)e$. Subtracting $2mL_F(0)e=m A_\lambda^2e$ leaves $(m^3-m)e/12$. Antisymmetry and the $m=0$ case complete the Virasoro relation; commuting with negative multiplication modes extends it from $E$ to every polynomial vector. [given, F1, F2, step 1.1, algebra]

2.2 The degree shift in [F1] is precisely [F3]'s admissible shift, so $F_\lambda=\bigoplus_{d\ge0}P_d\otimes E$ is admissible. On its degree-$d$ subspace, step 1.1 gives $(L_F(0)-d-\lambda^2/2)^2=0$. Distinct degrees have distinct eigenvalues. If $h\ne d+\lambda^2/2$, then $(d+\lambda^2/2-h)I+\lambda N$ is invertible on that degree, with inverse $c^{-1}I-\lambda c^{-2}N$ where $c=d+\lambda^2/2-h$. Since vectors have only finitely many degree components, the generalized eigenspaces are exactly the stated degree spaces. They have finite dimension $2\dim P_d$ by [F2], and their real parts are bounded below by $\operatorname{Re}(\lambda^2/2)$. This verifies grading restriction in [F3]. [given, F1, F2, F3, step 1.1, algebra]

3.1 If $\lambda\ne0$, on the lowest space $E$ the vector $e_1$ satisfies $(L_F(0)-\lambda^2/2)e_1=\lambda e_0\ne0$ and its second iterate is zero. Thus $L_F(0)$ is not semisimple, and the module is logarithmic by [F4]. If $\lambda=0$, step 1.1 gives $L_F(0)=D$, diagonal on the displayed grading, so the module is ordinary by [F4] and not logarithmic. At $\lambda=1$ the explicit formulas become $a_0=I+N$ and $L_F(0)|_E=I/2+N$. No unproved module-twist, reconstruction-for-modules, classification, or rationality theorem is used. [given, F4, step 1.1, step 2.2, algebra] ∎
