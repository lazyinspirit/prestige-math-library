---
id: thm-existence-and-characteristicity-of-the-nilradical-in-characteristic-zero
kind: theorem
title: Existence and characteristicity of the nilradical in characteristic zero
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-nilradical-of-a-finite-dimensional-lie-algebra, prop-nilpotent-lie-algebras-are-solvable, prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras, cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations, thm-engels-theorem, def-restriction-and-extension-of-scalars]
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
    - title: "Knapp, Lie Groups Beyond an Introduction, Proposition 1.40 and Corollary 1.41"
      url: https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf
      locator: "Proposition 1.40 and Corollary 1.41, printed pp. 48–49"
---

## Statement

Every finite-dimensional characteristic-zero Lie algebra has a unique largest
nilpotent ideal, and this ideal is characteristic.

## Facts & Assumptions

**Given:** A finite-dimensional Lie algebra $\mathfrak g$ over a
characteristic-zero field $k$.

[L1] The nilradical, when it exists, is the largest nilpotent ideal
([[def-nilradical-of-a-finite-dimensional-lie-algebra]]).

[L2] Every nilpotent Lie algebra is solvable
([[prop-nilpotent-lie-algebras-are-solvable]]).

[L3] Quotients and extensions of solvable Lie algebras are solvable
([[prop-subalgebras-quotients-and-extensions-of-solvable-lie-algebras]]).

[L4] A finite-dimensional representation of a finite-dimensional solvable Lie
algebra over an algebraically closed characteristic-zero field is simultaneously
upper triangular
([[cor-simultaneous-upper-triangularization-of-solvable-lie-algebra-representations]]).

[L5] If every adjoint endomorphism of a finite-dimensional Lie algebra is
nilpotent, then the Lie algebra is nilpotent ([[thm-engels-theorem]]).

[L6] Extension of scalars from $F$ to a field extension $K$ is
$K\otimes_F-$ ([[def-restriction-and-extension-of-scalars]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathfrak i$ and $\mathfrak j$ be nilpotent ideals of $\mathfrak g$, and put $\mathfrak s=\mathfrak i+\mathfrak j$. This is an ideal. Both summands are solvable by [L2], and the map $\mathfrak j\to\mathfrak s/\mathfrak i$, $y\mapsto y+\mathfrak i$, is a surjective Lie homomorphism, so the quotient is solvable by the quotient assertion in [L3]. The extension assertion in [L3] then makes $\mathfrak s$ solvable. [given, L2, L3, algebra]

2.1 Choose a basis of $\mathfrak g$ adapted simultaneously to $\mathfrak i\cap\mathfrak j$, $\mathfrak i$, and $\mathfrak j$, and let $k_0\subseteq k$ be generated over $\mathbb Q$ by its finitely many structure constants. The same table and the corresponding coordinate subspaces define $\mathfrak g_0$, $\mathfrak i_0$, $\mathfrak j_0$, and $\mathfrak s_0=\mathfrak i_0+\mathfrak j_0$ over $k_0$, whose extensions to $k$ are the original objects. Direct expansion on pure tensors and induction give $\gamma_r(K\otimes_F\mathfrak a)=K\otimes_F\gamma_r(\mathfrak a)$ and $(K\otimes_F\mathfrak a)^{(r)}=K\otimes_F\mathfrak a^{(r)}$ for every field extension $K/F$. Since a finite basis stays a basis after field extension, extension is faithful here. Thus $\mathfrak i_0$ and $\mathfrak j_0$ are nilpotent and $\mathfrak s_0$ is solvable by step 1.1. [L6, step 1.1, algebra]

3.1 The finitely generated field $k_0/\mathbb Q$ is countable, enumerated by rational expressions in its generators. In ZF construct an algebraic closure $K$ by a fixed countable tower: dovetail the polynomials over all earlier stages, take the least-coded monic irreducible factor of the next nonconstant polynomial, adjoin one root, and take the union. Every polynomial over the union occurs at a finite stage and later acquires a root, so $K$ is algebraically closed. Put $\mathfrak G=K\otimes_{k_0}\mathfrak g_0$ and similarly $I=K\otimes_{k_0}\mathfrak i_0$, $J=K\otimes_{k_0}\mathfrak j_0$, and $S=I+J$. By step 2.1, $S$ is a finite-dimensional solvable ideal of $\mathfrak G$, while $I$ and $J$ are nilpotent ideals. The construction uses a fixed enumeration and least natural-number codes, not a choice function. [L6, step 2.1, algebra]

4.1 Apply [L4] to the adjoint representation of $S$ on $\mathfrak G$. For $x\in I$, ideality gives $(\operatorname{ad}x)^r(\mathfrak G)\subseteq\gamma_r(I)$ for $r\geq1$, so $\operatorname{ad}x$ is nilpotent; the same holds for every $y\in J$. In the common upper-triangular basis supplied by [L4], each such operator therefore has zero diagonal. Every $s=x+y\in S$ consequently has $\operatorname{ad}s=\operatorname{ad}x+\operatorname{ad}y$ strictly upper triangular, so its restriction to $S$ is nilpotent. Engel's theorem [L5] makes $S$ nilpotent. [L4, L5, step 3.1, algebra]

5.1 If $\gamma_{c+1}(S)=0$, step 2.1 gives $0=K\otimes_{k_0}\gamma_{c+1}(\mathfrak s_0)$, so faithfulness yields $\gamma_{c+1}(\mathfrak s_0)=0$ and then $\gamma_{c+1}(\mathfrak s)=k\otimes_{k_0}\gamma_{c+1}(\mathfrak s_0)=0$. Thus the sum of any two nilpotent ideals of $\mathfrak g$ is nilpotent. This includes zero summands. [L6, step 2.1, step 4.1]

6.1 Let $\mathfrak n$ be the algebraic sum of all nilpotent ideals of $\mathfrak g$, with the sum of the empty subfamily understood as $0$. It is an ideal. A finite basis of $\mathfrak n$ consists of finite sums of elements from finitely many nilpotent ideals, so $\mathfrak n$ is already the sum of finitely many of them. Repeated application of step 5.1 makes $\mathfrak n$ nilpotent. It contains every nilpotent ideal, hence is the unique largest one and is the object defined in [L1]. The reduction uses only finitely many witnesses attached to a finite basis, so it is valid in ZF. [L1, step 5.1, algebra]

7.1 If $f$ is an automorphism of $\mathfrak g$, bracket preservation carries every nilpotent ideal to a nilpotent ideal, so maximality gives $f(\mathfrak n)\subseteq\mathfrak n$. Applying the same argument to $f^{-1}$ gives the reverse inclusion. Therefore $f(\mathfrak n)=\mathfrak n$, and the nilradical is characteristic. For $\mathfrak g=0$, the construction gives $\mathfrak n=0$ and the same conclusion. Characteristic zero is used in steps 2.1–4.1 through $\mathbb Q\subseteq k$ and Lie triangularization; no form of AC is used. [L1, step 6.1, algebra] ∎
