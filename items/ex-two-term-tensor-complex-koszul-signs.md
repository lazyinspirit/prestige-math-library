---
id: ex-two-term-tensor-complex-koszul-signs
kind: example
title: "The four entries and Koszul signs in a two-term tensor bicomplex"
status: published
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization
  - lem-bimodule-tensor-totalization-respects-differentials-and-homotopies
justified_by: []
landmark: false
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Khovanov and Seidel, Quivers, Floer Cohomology, and Braid Group Actions, §2c and Proposition 2.4"
      url: "https://arxiv.org/pdf/math/0006056"
provenance:
  statement: ai-generated
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
generation:
  role: example
---

## Example

Fix a commutative ring $k$ and unital graded $k$-algebras $B,A,C$. Let $F$ be a two-term cochain complex of graded $(B,A)$-bimodules
$F^0\xrightarrow{u}F^1$, and let $X$ be a two-term cochain complex of graded
$(A,C)$-bimodules $X^0\xrightarrow{v}X^1$. Assume $u$ is right $A$-linear and
$v$ is left $A$-linear, and both preserve internal degree. The four summands of
the signed total tensor complex $T=F\otimes_A X$ are
$$
T^0=F^0\otimes_A X^0,\qquad T^1=(F^1\otimes_A X^0)\oplus(F^0\otimes_A X^1),\qquad T^2=F^1\otimes_A X^1,
$$
with $T^n=0$ for $n\notin\{0,1,2\}$. In the indicated order of the middle
summands, its differentials are
$$
d_T^0=\begin{pmatrix}u\otimes_A1\\1\otimes_Av\end{pmatrix},\qquad d_T^1=\begin{pmatrix}-(1\otimes_Av)&u\otimes_A1\end{pmatrix}.
$$
The minus sign occurs on the $F^1\otimes_A X^0$ summand because its first
cochain degree is $1$. The two composites from $F^0\otimes_A X^0$ to
$F^1\otimes_A X^1$ cancel.

For a concrete instance, take $A=B=C=\mathbb Z$ concentrated in internal
degree zero, $F=(\mathbb Z\xrightarrow{\;2\;}\mathbb Z)$, and
$X=(\mathbb Z\xrightarrow{\;3\;}\mathbb Z)$. Then
$$
T^0=\mathbb Z,\qquad T^1=\mathbb Z^2,\qquad T^2=\mathbb Z,\qquad d_T^0=\begin{pmatrix}2\\3\end{pmatrix},\qquad d_T^1=\begin{pmatrix}-3&2\end{pmatrix},
$$
so $d_T^1d_T^0=-3\cdot2+2\cdot3=-6+6=0$.

## Facts & Assumptions

**Given:** Two-term cochain complexes of graded bimodules and degree-zero
bimodule-linear differentials $u$ and $v$.

[L1] The total degree is $p+q$ and the signed differential is
$d(f\otimes x)=d_F(f)\otimes x+(-1)^p f\otimes d_X(x)$ for $f\in F^p$
([[def-bounded-complex-of-graded-bimodules-and-signed-tensor-totalization]]).

[L2] The total differential descends to the balanced tensor, preserves internal
degree, commutes with outer actions, and tensoring bimodule chain maps gives
chain maps ([[lem-bimodule-tensor-totalization-respects-differentials-and-homotopies]]).

## Verification

**Proof technique:** expand the signed total differential on the four summands
and specialize the resulting matrices over $\mathbb Z$.

1.1 Since the only nonzero pairs $(p,q)$ have $p,q\in\{0,1\}$, their total degrees are $0,1,1,2$, giving exactly the four displayed summands. Formula [L1] sends $f^0\otimes x^0$ to $(u(f)\otimes x,\ f\otimes v(x))$, which is the displayed $d_T^0$. [L1, algebra]

1.2 On $F^1\otimes_A X^0$ the second-factor term in [L1] has sign $(-1)^1=-1$, while on $F^0\otimes_A X^1$ the first-factor term has sign $+1$; hence $d_T^1$ is the displayed row. The maps are well-defined on the balanced tensor and preserve the outer $B,C$-actions and internal grading by [L2]. [L1, L2, algebra]

1.3 For an elementary tensor $f\otimes x\in F^0\otimes_A X^0$, the two paths give $-(u(f)\otimes v(x))$ and $u(f)\otimes v(x)$, respectively, because $u\otimes_A1$ and $1\otimes_Av$ act on separate factors. Therefore $d_T^1d_T^0(f\otimes x)=0$, and additivity proves $d_T^1d_T^0=0$ on all of $T^0$. [L1, L2, algebra]

2.1 In the stated integer example the displayed maps have matrices $\begin{pmatrix}2\\3\end{pmatrix}$ and $\begin{pmatrix}-3&2\end{pmatrix}$, whose product is $-6+6=0$. If $f$ has internal degree $r$ and $x$ has internal degree $s$, every nonzero matrix entry preserves degree $r+s$; the sign is determined only by $p$. With $F$ concentrated in degree $0$ the surviving tensor differential is $1\otimes v$, and with $F$ concentrated in degree $1$ it is $-1\otimes v$, as [L1] prescribes. [L1, algebra] ∎
