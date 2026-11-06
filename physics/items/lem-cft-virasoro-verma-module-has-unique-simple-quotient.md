---
id: lem-cft-virasoro-verma-module-has-unique-simple-quotient
kind: lemma
title: Virasoro Verma modules have a unique simple highest-weight quotient
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: mathematics
deps:
  - def-virasoro-algebra
  - def-witt-algebra
  - def-representation-of-a-lie-algebra
  - def-virasoro-highest-weight-module
  - def-universal-enveloping-algebra-as-a-tensor-quotient
  - lem-pbw-for-countably-presented-kac-moody-lie-algebras
dependency_roles:
  def-virasoro-algebra: mathematical-premise
  def-witt-algebra: mathematical-premise
  def-representation-of-a-lie-algebra: mathematical-premise
  def-virasoro-highest-weight-module: mathematical-premise
  def-universal-enveloping-algebra-as-a-tensor-quotient: mathematical-premise
  lem-pbw-for-countably-presented-kac-moody-lie-algebras: mathematical-premise
justified_by: []
aliases: []
physical_scope: null
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: Creutzig, Jiang, Orosz Hunziker, Ridout, and Yang, Tensor Categories Arising from the Virasoro Algebra
      url: https://researchers.ms.unimelb.edu.au/~dridout%40unimellb/papers/2002.03180.pdf
      locator: §2.2, printed p. 8, definitions (2.17)–(2.18) and the following paragraph on the unique maximal proper submodule and simple quotient.
---

## Statement

Let $\mathrm{Vir}$ be the Virasoro algebra with basis $\{L_n:n\in\mathbb Z\}\cup\{C\}$ and commutator convention of def-virasoro-algebra; the countable basis of the Witt modes is fixed by def-witt-algebra. Put
$$
\mathfrak b=\operatorname{span}\{L_n:n\ge0\}\oplus\mathbb C C.
$$
For $c,h\in\mathbb C$, let $\mathbb C_{c,h}$ be the one-dimensional $\mathfrak b$-representation on which $L_0$ acts by $h$, $C$ by $c$, and each $L_n$ for $n>0$ by zero. These scalars satisfy the restricted Virasoro brackets, as verified below. Define the induced Verma module
$$
M(c,h)=U(\mathrm{Vir})\otimes_{U(\mathfrak b)}\mathbb C_{c,h},\qquad v=1\otimes1,
$$
with $\mathrm{Vir}$ acting by left multiplication on the first factor. Then $M(c,h)$ has a unique simple highest-weight quotient
$$
L(c,h)=M(c,h)/J,
$$
where $J$ is the sum of all proper $\mathrm{Vir}$-submodules of $M(c,h)$. Choose a PBW order with all negative modes first, then $L_0,C$, then positive modes. The ordered negative-mode monomials on $v$ form a basis of $M(c,h)$; $L_0$ acts on a monomial $L_{-n_1}\cdots L_{-n_r}v$ by $h+\sum_i n_i$. In particular, the weight-$h$ space is $\mathbb Cv$, and all other weights lie in $h+\mathbb Z_{>0}$.

## Statement references

[[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]

[[def-witt-algebra]]

## Facts & Assumptions

**Given:** The Virasoro and Witt mode conventions and the scalar parameters $c,h\in\mathbb C$ in the Statement.

[F1] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]] fixes $[L_m,L_n]=(m-n)L_{m+n}+\frac{1}{12}(m^3-m)\delta_{m+n,0}C$, with $C$ central.

[F2] [[def-witt-algebra]] realizes the Witt modes as $d_n=-z^{n+1}\partial_z$ on the Laurent-polynomial algebra; their span is the Witt algebra $W$ in the Virasoro direct sum.

[F3] [[def-representation-of-a-lie-algebra]]: a representation is a linear action satisfying the Lie bracket relation.

[F4] [[def-virasoro-highest-weight-module]]: $v$ is highest weight of weight $h$ and charge $c$ when $L_nv=0$ for $n>0$, $L_0v=hv$, and $Cv=cv$; its generated module is spanned by finite words in the Virasoro modes.

[F5] [[def-universal-enveloping-algebra-as-a-tensor-quotient]] constructs $U(\mathfrak g)$ by imposing $xy-yx=[x,y]$.

[F6] [[lem-pbw-for-countably-presented-kac-moody-lie-algebras]]: for a complex Lie algebra with a supplied countable ordered basis, the ordered monomials form a basis of its universal enveloping algebra, and the Lie algebra embeds in it.

## Proof

1.1 The subspace $\mathfrak b$ is a Lie subalgebra: for $m,n\ge0$, the bracket in [F1] is again in $\mathfrak b$; the central term can occur only when $m=n=0$, when its coefficient is zero. On $\mathbb C_{c,h}$, brackets of two positive modes and brackets of $L_0$ with a positive mode act by zero, as do all brackets with $C$. Thus the stated scalar action satisfies [F3] and defines a one-dimensional $\mathfrak b$-representation. [F1, F3, algebra]

2.1 The inclusion $\mathfrak b\hookrightarrow\mathrm{Vir}$ induces $U(\mathfrak b)\to U(\mathrm{Vir})$ by the quotient construction [F5]. Form $M(c,h)$ and $v$ as in the Statement. The balanced tensor relation gives $L_nv=0$ for $n>0$, $L_0v=hv$, and $Cv=cv$. [F5, step 1.1, algebra]

3.1 The modes $L_n$ are linearly independent: if a finite sum $\sum_n a_nL_n$ is zero, projection to $W$ gives $\sum_n a_nd_n=0$; applying this derivation to $z$ gives $-\sum_n a_nz^{n+1}=0$, so Laurent-monomial independence forces every $a_n=0$. The direct-sum definition of Vir also makes $C$ independent. Thus $\{L_n:n\in\mathbb Z\}\cup\{C\}$ is a supplied countable basis. Order it with all negative modes first, then $L_0,C$, then positive modes. This puts a basis of $\mathfrak b$ last. Applying [F6] to this ordered basis and to the basis of $\mathfrak b$ shows that $U(\mathfrak b)\to U(\mathrm{Vir})$ is injective and that the PBW basis of $U(\mathrm{Vir})$ factors uniquely as a negative-mode monomial followed by a $\mathfrak b$-monomial. Tensoring over $U(\mathfrak b)$ evaluates the latter monomial on $\mathbb C_{c,h}$, leaving exactly the ordered negative-mode monomials on $v$ as a basis of $M(c,h)$. The empty monomial $v$ is therefore nonzero, and the equalities in step 2.1 with [F4] show that it is a highest-weight vector. By [F1], $[L_0,L_{-n}]=nL_{-n}$; hence the monomial has weight $h+\sum_i n_i$. Only the empty monomial has weight $h$, so $M_h=\mathbb Cv$ and every other basis vector has weight $h+N$ for an integer $N>0$. [F1, F2, F4, F5, F6, step 2.1, algebra]

4.1 Every submodule $S\subseteq M(c,h)$ is stable under $L_0$. Each vector is a finite sum of distinct $L_0$-eigencomponents by the basis in step 3.1; polynomial interpolation in $L_0$ projects any such vector onto each component, so every submodule is graded. If a proper submodule contained a vector with nonzero weight-$h$ component, the same projection would put a nonzero multiple of $v$ in $S$. Since $v$ generates $M(c,h)$, this would force $S=M(c,h)$, a contradiction. Thus every proper submodule lies in the sum of the positive-level spaces. Their sum $J$ also lies there and is proper because it misses $v$. [F4, step 3.1, algebra]

5.1 The quotient $M(c,h)/J$ is nonzero because $v\notin J$. If a submodule of this quotient is nonzero and proper, its preimage is a proper submodule of $M(c,h)$ strictly containing $J$, contradicting the definition of $J$ as the sum of all proper submodules. Hence the quotient is simple and highest weight. The kernel of any simple quotient is a maximal proper submodule, so it is contained in $J$ and, because $J$ is proper, maximality forces that kernel to equal $J$. Therefore this is the unique simple highest-weight quotient. [F4, step 4.1, algebra] ∎
