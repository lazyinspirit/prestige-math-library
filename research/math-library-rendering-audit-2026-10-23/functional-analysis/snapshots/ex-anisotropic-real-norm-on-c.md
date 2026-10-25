---
id: ex-anisotropic-real-norm-on-c
kind: example
title: "A real norm on C that is not a complex norm"
status: published
origin: pipeline
pipeline_run: quantum-prerequisites-4-2026-10-15
provenance:
  statement: ai-generated
  proof: ai-generated
deps: [def-complex-norm-and-complex-normed-space, def-complex-numbers-and-arithmetic, thm-complex-numbers-form-a-field, def-complex-conjugate-real-imaginary-part-and-modulus, thm-of-square-roots, def-realification-of-a-complex-vector-space, def-norm-and-normed-space, def-abs-value, lem-of-abs-value, lem-of-triangle-inequality, def-ordered-field, lem-of-sign-rules, lem-of-add-order, cor-of-one-positive]
justified_by: []
dependency_level: 1
generation:
  role: example
proof_strategy: direct
verification:
  precheck: pass
---

## Example

Use the common underlying set of the original complex vector space $\mathbb C$ and its realification $\mathbb C_{\mathbb R}$. For $z=x+iy$ with $x,y\in\mathbb R$, set
$$
N(x+iy):=|x|_{\mathbb R}+2|y|_{\mathbb R}.
$$
On $\mathbb C_{\mathbb R}$ this is a real norm. Tested on the original complex scalar action on $\mathbb C$, the same function is not a complex norm: $N(1)=1$ and $N(i)=2$, while $|i|_{\mathbb C}N(1)=1$.

## Facts & Assumptions

**Given:** The complex field $\mathbb C$, its realification, and real numbers $x,y,u,v,r$.

[F1] Every complex number has unique coordinates $x+iy$; addition and multiplication are $(x+iy)+(u+iv)=(x+u)+i(y+v)$ and $(x+iy)(u+iv)=(xu-yv)+i(xv+yu)$ ([[thm-complex-numbers-form-a-field]]).

[F2] The canonical real embedding defines the real scalar action on $\mathbb C_{\mathbb R}$ by restricting complex scalar multiplication ([[def-complex-numbers-and-arithmetic]], [[def-realification-of-a-complex-vector-space]]).

[F3] The complex modulus is $|x+iy|_{\mathbb C}=\sqrt{x^2+y^2}$, and every nonnegative real has its unique nonnegative square root ([[def-complex-conjugate-real-imaginary-part-and-modulus]], [[thm-of-square-roots]]).

[F4] Real absolute value is nonnegative, vanishes exactly at zero, and is multiplicative ([[def-abs-value]], [[lem-of-abs-value]]).

[F5] Real absolute value satisfies $|a+b|\le|a|+|b|$ ([[lem-of-triangle-inequality]]).

[F6] A real norm is a real-valued function separating zero, absolutely homogeneous for every real scalar, and satisfying the triangle inequality ([[def-norm-and-normed-space]]).

[F7] A complex norm must satisfy $N(\lambda z)=|\lambda|_{\mathbb C}N(z)$ for every complex scalar $\lambda$ ([[def-complex-norm-and-complex-normed-space]]).

[F8] In an ordered field the field laws hold, its positive cone is closed under addition and multiplication, and its order is total ([[def-ordered-field]]).

[F9] The real multiplicative identity is positive: $1>0$ ([[cor-of-one-positive]]).

[F10] Multiplication by a positive real preserves strict inequalities, and a product of positives is positive ([[lem-of-sign-rules]]).

[F11] Adding a constant preserves strict inequalities, and adding two strict inequalities gives a strict inequality ([[lem-of-add-order]]).

## Verification

1.1 Uniqueness of coordinates in [F1] makes the formula for $N$ well-defined. By [F4], $|0|_{\mathbb R}=0$, and since $2=1+1$, distributivity and the identity law give $N(0)=|0|_{\mathbb R}+2|0|_{\mathbb R}=0+(1+1)|0|_{\mathbb R}=0+0=0$. If $z\ne0$, then [F1] gives $x\ne0$ or $y\ne0$. By [F4] and totality of the order in [F8], $|x|_{\mathbb R}\ge0$ and $|x|_{\mathbb R}>0$ when $x\ne0$; likewise $|y|_{\mathbb R}\ge0$ and $|y|_{\mathbb R}>0$ when $y\ne0$. Since $2=1+1>0$ by [F8] and [F9], distributivity and the identity law give $2|y|_{\mathbb R}=(1+1)|y|_{\mathbb R}=|y|_{\mathbb R}+|y|_{\mathbb R}$. By [F4], this is $0$ when $y=0$; when $y\ne0$, [F4] and totality in [F8] give $|y|_{\mathbb R}>0$, so closure under addition in [F8] makes the sum positive. Thus $2|y|_{\mathbb R}\ge0$, with strict positivity when $y\ne0$. At least one of the two summands in $N(z)$ is therefore positive and the other is nonnegative. By trichotomy [F8], a nonnegative summand is either zero or positive; in the zero case adding it leaves the positive summand unchanged, and in the positive case [F8] makes their sum positive. Hence $N(z)>0$ for $z\ne0$, while $N(0)=0$, proving separation in [F6]. [F1, F4, F6, F8, F9, algebra]

1.2 For $r\in\mathbb R$ and $z=x+iy$, [F1] and [F2] give $r\cdot_{\mathbb C_{\mathbb R}}z=(rx)+i(ry)$. Hence $N(rz)=|rx|_{\mathbb R}+2|ry|_{\mathbb R}=|r|_{\mathbb R}|x|_{\mathbb R}+2|r|_{\mathbb R}|y|_{\mathbb R}=|r|_{\mathbb R}N(z)$ by [F4] and field algebra; this is absolute homogeneity in [F6]. [F1, F2, F4, F6]

2.1 For $z=x+iy$ and $w=u+iv$, [F1] and [F5] give $|x+u|_{\mathbb R}\le |x|_{\mathbb R}+|u|_{\mathbb R}$ and $|y+v|_{\mathbb R}\le |y|_{\mathbb R}+|v|_{\mathbb R}$. Since $2>0$ by [F8] and [F9], the second inequality gives $2|y+v|_{\mathbb R}\le2|y|_{\mathbb R}+2|v|_{\mathbb R}$: equality remains equality after scaling, while a strict inequality remains strict by [F10]. By totality in [F8], each of these two weak inequalities is either equality or strict; if both are strict [F11] gives a strict inequality after addition, if exactly one is strict translation invariance in [F11] gives a strict inequality after addition, and if both are equal their sums are equal. Therefore $N(z+w)=|x+u|_{\mathbb R}+2|y+v|_{\mathbb R}\le |x|_{\mathbb R}+|u|_{\mathbb R}+2|y|_{\mathbb R}+2|v|_{\mathbb R}=N(z)+N(w)$. Together separation in step 1.1, homogeneity in step 1.2, and this triangle inequality verify the real norm axioms [F6]. [F1, F5, F6, F8, F9, F10, F11, step 1.1, step 1.2, algebra]

3.1 The coordinates in [F1] and real absolute value in [F4] give $N(1)=|1|+2|0|=1$ and $N(i)=|0|+2|1|=2$. By [F3], $|i|_{\mathbb C}=\sqrt{1}=1$, since $1\ge0$ and $1^2=1$. On the original complex vector space $\mathbb C$, complex homogeneity [F7] with $\lambda=i$ and $z=1$ would give $N(i)=|i|_{\mathbb C}N(1)=1$, contradicting $N(i)=2$ (indeed $2>1$ by translating $0<1$ using [F11] and [F9]). Thus the same function on the original complex structure is not complex homogeneous. [F1, F3, F4, F7, F9, F11, algebra] ∎
