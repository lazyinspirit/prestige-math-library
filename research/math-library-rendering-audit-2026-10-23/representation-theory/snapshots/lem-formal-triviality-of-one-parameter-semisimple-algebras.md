---
id: lem-formal-triviality-of-one-parameter-semisimple-algebras
kind: lemma
title: "Triviality of finite free deformations of semisimple algebras over the power series ring"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - lem-lifting-idempotents-in-complete-deformation-algebras
  - prop-units-in-an-adically-complete-ring
  - def-adic-completion-of-a-module
  - def-adic-topology-on-a-module
  - cor-square-matrix-invertible-iff-determinant-is-a-unit
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ivan Losev, Lecture 8: Representations of GL_n(F_q) - Section 2.3, Theorem 2.6, Step 5 (free direct summands and the residue-isomorphism criterion, expanded by a determinant proof), PDF p. 5"
      url: "https://ivanloseu.github.io/RT/RT8.pdf"
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.2 (flatness of Hecke algebras and Tits' deformation theorem), printed p. 47"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Let $R=\mathbb C[\![t]\!]$ be the ring of formal power series in one variable and
let $A$ be an associative unital $R$-algebra which is free of finite rank as an
$R$-module. If $A/tA\cong\prod_{i=1}^r\operatorname M_{d_i}(\mathbb C)$ as
$\mathbb C$-algebras, then
$$A\cong\prod_{i=1}^r\operatorname M_{d_i}(R)$$
as $R$-algebras. Moreover every $R$-linear endomorphism of a finite free
$R$-module whose reduction modulo $t$ is an isomorphism is itself an
isomorphism: the determinant of such a map has nonzero constant term, hence is
a unit of the local ring $R$. No choice principle is used.

## Facts & Assumptions

**Given:** $R=\mathbb C[\![t]\!]$ with its $t$-adic topology, a unital
$R$-algebra $A$ free of finite rank $N$ over $R$, and a $\mathbb C$-algebra
isomorphism $\bar A:=A/tA\cong\prod_{i=1}^r\operatorname M_{d_i}(\mathbb C)$.
Write $\bar e_i:=E^{(i)}_{11}$ for the matrix unit in the $i$-th factor of
$\bar A$; the $\bar e_i$ are pairwise orthogonal idempotents summing to the
diagonal matrix with entries $1$ in the $(1,1)$ positions.

[F1] $R$ is $t$-adically complete and separated: the compatible truncations of a
formal power series exhibit $R\xrightarrow{\sim}\varprojlim_nR/t^nR$, and
$\bigcap_nt^nR=0$ ([[def-adic-completion-of-a-module]],
[[def-adic-topology-on-a-module]]).

[L1] In the local ring $R$ the maximal ideal is $(t)$ and $R^\times=R\setminus(t)$;
if $u\in R$ satisfies $u\equiv1\pmod t$ then $u$ is a unit, because $u=1-tw$
and $1-tw\equiv1\pmod t$ in the $t$-adically complete ring $R$
([[prop-units-in-an-adically-complete-ring]]).

[L2] A square matrix over a commutative ring is invertible if and only if its
determinant is a unit ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]);
consequently an endomorphism of $R^N$ is an isomorphism if and only if the
determinant of its matrix in a basis is a unit of $R$.

[F2] Idempotents lift through the quotient $A\to A/tA$: for every finite family
of pairwise orthogonal idempotents of $A/tA$ there are pairwise orthogonal
idempotents of $A$ with those images, and $e\equiv x\pmod{tA}$ whenever $x$
satisfies $x^2-x\in tA$
([[lem-lifting-idempotents-in-complete-deformation-algebras]]).



## Proof

**Proof technique:** direct.

1.1 Determinant criterion: let $\varphi:R^N\to R^N$ be $R$-linear with reduction $\bar\varphi$ invertible, and let $D:=\det(\varphi)$. Reducing the identity $D=\det(\varphi)$ modulo $t$ gives $D\bmod t=\det(\bar\varphi)\ne0$, so $D=c(1+tw)$ with $c\in\mathbb C^\times$; here $c$ is a unit of $R$ and $1+tw\equiv1\pmod t$ is a unit by [L1], so $D$ is a unit and $\varphi$ is an isomorphism by [L2]. This is the determinant unit criterion of the Statement. [F1, L1, L2, algebra]

1.2 The algebra $A$ is complete and separated for the $t$-adic topology: it is a finite free $R$-module, so the $t$-adic filtration on $A=t^0A\supseteq tA\supseteq t^2A\supseteq\cdots$ is obtained from that on $R$ by taking a finite direct sum, and $A\xrightarrow{\sim}\varprojlim_nA/t^nA$ follows from [F1] componentwise. The quotient $A/tA=\bar A$ is the product of matrix algebras given in the Statement, of $\mathbb C$-dimension $N=\sum_id_i^2$, so $\operatorname{rank}_RA=N$. [F1, algebra]

2.1 The idempotents $\bar e_1,\dots,\bar e_r$ of $A/tA$ are pairwise orthogonal, so by [F2] applied with the ideal $tA$ there are pairwise orthogonal idempotents $e_1,\dots,e_r\in A$ with $e_i\equiv\bar e_i\pmod{tA}$ for each $i$. [F2, step 1.2, construct]

3.1 Fix $i$ and put $V_i:=Ae_i$, $K_i:=A(1-e_i)$ and $\rho_i(a):=ae_i$. The map $\rho_i$ is an $R$-linear idempotent endomorphism of the free module $A$ with image $V_i$ and kernel $K_i$, so $A=V_i\oplus K_i$; it preserves both $tA$ and the filtration, hence induces an idempotent endomorphism of $\bar A$ with image $\bar A\bar e_i$, the $i$-th column module, of $\mathbb C$-dimension $d_i$, and kernel $\bar A(1-\bar e_i)$, of dimension $N-d_i$. Choose elements $x_1,\dots,x_{d_i}\in V_i$ and $y_1,\dots,y_{N-d_i}\in K_i$ whose images modulo $tA$ are bases of $V_i/tV_i$ and $K_i/tK_i$ respectively; the union $(x,y)$, read in an $R$-basis of $A$, has a coordinate matrix $\Gamma$ whose reduction modulo $t$ is invertible, because the images of the $x$'s and $y$'s together form a basis of $A/tA=V_i/tV_i\oplus K_i/tK_i$. By step 1.1 the matrix $\Gamma$ is invertible over $R$, so $x_1,\dots,x_{d_i},y_1,\dots,y_{N-d_i}$ is an $R$-basis of $A$ on which $\rho_i$ is diagonal with $d_i$ entries $1$ and $N-d_i$ entries $0$. In particular $V_i$ is free of rank $d_i$ over $R$, and $K_i$ is free of rank $N-d_i$. [step 1.1, step 2.1, construct]

4.1 By step 3.1 each $V_i$ is a free $R$-module of rank $d_i$, so $\operatorname{End}_R(V_i)\cong\operatorname M_{d_i}(R)$, and the left multiplication action of $A$ on the left $A$-modules $V_i=Ae_i$ gives an $R$-algebra homomorphism $$\varphi:A\longrightarrow\prod_{i=1}^r\operatorname{End}_R(V_i)\cong\prod_{i=1}^r\operatorname M_{d_i}(R),\qquad \varphi(a):=(v\mapsto av).$$ [step 3.1, algebra]

5.1 The reduction $\bar\varphi$ of $\varphi$ modulo $t$ is the action of $\bar A=\prod_i\operatorname M_{d_i}(\mathbb C)$ on $\bigoplus_iV_i/tV_i\cong\bigoplus_i\mathbb C^{d_i}$; the $i$-th factor acts on the $i$-th summand through the isomorphism $\operatorname M_{d_i}(\mathbb C)\xrightarrow{\sim}\operatorname{End}_{\mathbb C}(\mathbb C^{d_i})$, and all other factors act as $0$, so $\bar\varphi$ is an isomorphism $\prod_i\operatorname M_{d_i}(\mathbb C)\to\prod_i\operatorname M_{d_i}(\mathbb C)$. Both $A$ and $\prod_i\operatorname M_{d_i}(R)$ are free of rank $\sum_id_i^2=N$ over $R$, so $\varphi$ is a finite-rank $R$-linear map whose reduction is invertible; the determinant criterion of step 1.1 makes $\varphi$ an isomorphism. Hence the $R$-algebra $A$ is isomorphic to $\prod_{i=1}^r\operatorname M_{d_i}(R)$. Every object was produced by the explicit liftings of step 2.1 and the finite bases of step 3.1 and no selection of a family is required, so no choice principle is used. [step 1.1, step 3.1, step 4.1, algebra] ∎ 