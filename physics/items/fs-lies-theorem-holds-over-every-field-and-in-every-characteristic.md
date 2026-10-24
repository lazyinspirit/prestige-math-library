---
id: fs-lies-theorem-holds-over-every-field-and-in-every-characteristic
kind: false-statement
title: Lie's theorem is field- and characteristic-free
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lies-theorem, def-derived-series-and-solvable-lie-algebra, def-representation-of-a-lie-algebra]
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Etingof, Introduction to Representation Theory / Lie notes, Remark 13.2"
      url: https://math.mit.edu/~etingof/lnlg.pdf
      locator: "Remark 13.2 and Lie's theorem hypotheses"
---

## Statement

Lie's theorem holds over every field and in every characteristic.

## Facts & Assumptions

**Given:** The proposed removal of the algebraic-closure and characteristic-zero hypotheses from Lie's theorem.

[L1] Lie's theorem supplies a common eigenvector only for finite-dimensional solvable Lie algebras over an algebraically closed field of characteristic zero ([[thm-lies-theorem]]).

[L2] Solvability is termination of the derived series ([[def-derived-series-and-solvable-lie-algebra]]).

[L3] A representation preserves brackets as operator commutators ([[def-representation-of-a-lie-algebra]]).

## Refutation

**Proof technique:** direct.

1.1 Over $\mathbb R$, let the one-dimensional abelian Lie algebra $\mathbb Rt$ act on $V=\mathbb R^2$ by $\rho(t)=R=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$. This is a representation by [L3] and the acting algebra is solvable by [L2]. But $R$ has characteristic polynomial $T^2+1$, so it has no real eigenvector and hence no common invariant eigenline. Indeed this two-dimensional real module is irreducible, because every nonzero proper subspace would be a line. Thus Lie's theorem fails without a splitting-field hypothesis even in characteristic zero. [L2, L3, algebra]

1.2 For the characteristic obstruction, let $k$ have characteristic $p>0$, let $\mathfrak a=kx\oplus ky$ with $[x,y]=y$, and let $V$ have basis $v_0,\ldots,v_{p-1}$. Define $Xv_i=i v_i$ and $Yv_i=v_{i+1}$ with indices modulo $p$. For $i<p-1$, $(XY-YX)v_i=(i+1-i)v_{i+1}=Yv_i$, while for $i=p-1$ it is $(0-(p-1))v_0=v_0=Yv_{p-1}$. Hence $[X,Y]=Y$, so $x\mapsto X$, $y\mapsto Y$ is a representation by [L3]. Also $\mathfrak a^{(1)}=ky$ and $\mathfrak a^{(2)}=0$, so the acting algebra is solvable by [L2]. [L2, L3, algebra]

2.1 The $p$ eigenvalues $0,1,\ldots,p-1$ of $X$ are distinct and its eigenspaces are exactly the lines $kv_i$, but $Y$ cyclically moves each such line to the next, so $X$ and $Y$ have no common eigenvector. More strongly, if $0\neq W\subseteq V$ is invariant and a vector of $W$ has nonzero $v_i$-coordinate, the Lagrange polynomial $P_i(T)=\prod_{j\neq i}(T-j)/(i-j)$ gives $P_i(X)W\subseteq W$ and extracts a nonzero multiple of $v_i$; repeated application of $Y$ then puts every $v_j$ in $W$. Thus the module is irreducible of dimension $p>1$. [step 1.2, algebra]

3.1 Step 1.1 violates the common-eigenvector conclusion over a non-algebraically-closed characteristic-zero field, and steps 1.2–2.1 violate it over a field of positive characteristic. These independent witnesses show that neither omitted hypothesis is cosmetic. Both constructions are finite and use no choice. [L1, step 1.1, step 1.2, step 2.1] ∎
