---
id: cex-a-galois-stable-character-need-not-have-schur-index-one
kind: counterexample
title: A Galois-stable character need not descend with multiplicity one
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Weizhe Zheng, Lectures on Algebra (10 January 2025)
      url: https://server.mcm.ac.cn/~zheng/algebra.pdf
      locator: Example 3.7.4(3) and Proposition 4.3.2 (explicit rational matrix obstruction computed locally)
    - title: Gábor Wiese, Galois Representations
      url: https://math.uni.lu/wiese/notes/GalRep.pdf
      locator: Corollary 2.5.10, p.40; Exercise 14, p.70
status: draft
origin: pipeline
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
deps: ["thm-galois-orbits-classify-simple-modules-after-splitting-base-change", "ex-the-rational-simple-block-of-the-quaternion-group"]
---

## Statement refuted

If $E/F$ is finite Galois and splits a finite group's algebra in characteristic
zero, then every Galois-stable simple $E$-representation descends to an
$F$-representation with multiplicity one. In particular, the asserted
conclusion would make every such $F$-valued irreducible character realizable
over $F$.

## Facts & Assumptions

[F1] The orbit theorem allows a common positive multiplicity, not necessarily one: [[thm-galois-orbits-classify-simple-modules-after-splitting-base-change]].

[F2] For $F=\mathbb Q$, $E=\mathbb Q(i)$ and $Q_8$, the simple $E$-module $W$ has rational-valued character $\chi=(2,-2,0,0,0)$ on the five classes, is Galois-stable, and the rational module $D$ satisfies $E\otimes_{\mathbb Q}D\cong W\oplus W$. The extension is finite Galois and splits the whole group algebra: [[ex-the-rational-simple-block-of-the-quaternion-group]].

## Counterexample

**Given:** The module $W$ in F2, with matrices $U=\operatorname{diag}(i,-i)$ and $V=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$ for the generators $u,v$.

1.1 F2 verifies every hypothesis: characteristic zero, finite Galois extension, whole-algebra splitting, simplicity and Galois stability. It also supplies a rational realization of $2\chi$, namely the four-dimensional simple rational module $D$. F1 identifies its descent multiplicity with two, in agreement with the explicit column decomposition. It remains to rule out a rational representation of character $\chi$ itself. [F1, F2, given]

1.2 Any rational representation with character $\chi$ has dimension $\chi(1)=2$. Let $Z$ represent $z$, so $Z^2=I$ and $\operatorname{tr}(Z)=-2$. Every vector decomposes as $(x+Zx)/2+(x-Zx)/2$, in the $+1$ and $-1$ eigenspaces respectively, whose intersection is zero. If their dimensions are $r,s$, then $r+s=2$ and $r-s=-2$, giving $r=0$, $s=2$. Thus $Z=-I$. Its generator matrices $R,T\in M_2(\mathbb Q)$ would satisfy $R^2=T^2=-I$ and $RT=-TR$, by the relations in F2. [F2, algebra]

2.1 For any nonzero rational vector $x$, the vectors $x,Rx$ are independent. Otherwise $Rx=rx$ with $r\in\mathbb Q$, and $R^2x=r^2x=-x$ would force $r^2=-1$, impossible. In the basis $(x,Rx)$, $R$ is therefore $J=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. Write $T=\begin{pmatrix}a&b\\c&d\end{pmatrix}$ in this same rational basis. The equation $JT+TJ=0$ is $\begin{pmatrix}b-c&-d-a\\a+d&b-c\end{pmatrix}=0$, so $c=b$ and $d=-a$. [step 1.2, algebra]

3.1 Consequently $T^2=\begin{pmatrix}a&b\\b&-a\end{pmatrix}^2=(a^2+b^2)I$. It cannot equal $-I$, since $a^2+b^2\ge0$ in $\mathbb Q$. This excludes every rational degree-two representation of character $\chi$, and hence every rational model whose scalar extension is $W$ (scalar extension preserves its matrices' traces). Since step 1.1 realizes $2\chi$ and no positive integer lies strictly between $1$ and $2$, the least positive rational realization multiplicity is exactly two. The excluded conclusion is multiplicity one, not the common-positive-multiplicity conclusion of F1. [step 1.1, step 1.2, step 2.1, algebra] QED

## Remarks

Wiese, Corollary 2.5.10, p.40, discusses the general realizability obstruction;
the proof above establishes this witness directly and does not consume a later
Schur-index theorem. If “Schur index” is expressed as the minimum degree of
a realization field over the character field, the same example also has index
two: its character field is $\mathbb Q$, degree one is excluded above, and
$\mathbb Q(i)$ is an explicit degree-two realization field.
