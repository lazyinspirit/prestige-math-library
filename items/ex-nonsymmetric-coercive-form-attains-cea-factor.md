---
id: ex-nonsymmetric-coercive-form-attains-cea-factor
kind: example
title: A nonsymmetric coercive form attains the M over alpha factor
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-bounded-coercive-and-symmetric-sesquilinear-forms
  - def-countable-choice
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Example

On $V=\mathbb R^2$ with the Euclidean norm, let
$$A=\begin{pmatrix}1&-1\\1&1\end{pmatrix},\qquad a(x,y):=(Ax)\cdot y.$$
Take the trial and test subspace $V_h=\operatorname{span}\{e_1\}$, the exact
solution $u=e_2$, and the functional $F(v)=a(e_2,v)$. The form is coercive
with $\alpha=1$ and bounded with $M=\sqrt2$. The Galerkin solution is
$u_h=-e_1$, so
$$\frac{\|u-u_h\|_2}{\inf_{v_h\in V_h}\|u-v_h\|_2}=\sqrt2=\frac M\alpha.$$
Thus the Céa factor $M/\alpha$ is attained even though the form is not
symmetric.

## Facts & Assumptions

**Given:** Countable Choice; the matrix $A$, the Euclidean inner product, $V_h=\operatorname{span}\{e_1\}$,
$u=e_2$, and $F(v)=a(u,v)$.

[F1] Under Countable Choice, the Céa theorem asserts
$\|u-u_h\|_V\le(M/\alpha)\inf_{v_h\in V_h}\|u-v_h\|_V$
([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

## Verification

1.1 For $x=(x_1,x_2)$, $Ax=(x_1-x_2,x_1+x_2)$, so $\|Ax\|_2^2=2\|x\|_2^2$ and $|a(x,y)|\le\sqrt2\|x\|_2\|y\|_2$. Also $a(x,x)=x_1^2+x_2^2$, so the coercivity constant is $\alpha=1$. Finally, $a(e_1,e_2)=1$ and $a(e_2,e_1)=-1$, so the form is not symmetric. [given, algebra]

1.2 Since $u=e_2$ and $F(v)=a(e_2,v)$, the continuous variational equation holds for every $v\in\mathbb R^2$. Write $u_h=ce_1$. Testing the discrete equation with $e_1$ gives $c\,a(e_1,e_1)=a(e_2,e_1)$, hence $c=-1$ because $a(e_1,e_1)=1$ and $a(e_2,e_1)=-1$. Thus $u_h=-e_1$. [given, algebra]

2.1 For $v_h=te_1$, $\|u-v_h\|_2^2=\|e_2-te_1\|_2^2=1+t^2$, whose infimum is $1$ at $t=0$. Meanwhile $u-u_h=e_1+e_2$, so $\|u-u_h\|_2=\sqrt2$. Therefore the ratio is $\sqrt2=M/\alpha$, and the constant in [F1] cannot be decreased in general. [F1, step 1.1, step 1.2, algebra] ∎