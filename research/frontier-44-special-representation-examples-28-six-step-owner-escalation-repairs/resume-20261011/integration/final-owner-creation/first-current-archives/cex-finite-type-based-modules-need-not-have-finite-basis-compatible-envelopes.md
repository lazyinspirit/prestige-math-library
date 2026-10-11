---
id: cex-finite-type-based-modules-need-not-have-finite-basis-compatible-envelopes
kind: counterexample
title: "An integrable based module can have no finite based envelope of a raw basis vector"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28-six-step
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains, def-the-bar-lattice-and-integral-lattice-of-a-based-module, thm-quantized-sl-two-string-formulas]
justified_by: []
aliases: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "§§27.1.2–27.1.8, printed214–217/PDF223–226: based axioms and finite-dimensional based filtration; this counterexample concerns the integrable extension, not that finite-dimensional theorem."
    - title: "Huancheng Bao and Weiqiang Wang, Canonical bases in tensor products revisited"
      url: "https://arxiv.org/pdf/1403.0039v2"
      locator: "§2.1 replaces finite-dimensionality by integrability in the four based axioms; Remark2.10 retains the bounded O_int hypotheses for the filtration extension."
---

## Statement refuted

Every based integrable module for a quantum group of finite Cartan type contains, for each finite subset of its raw basis, a finite-dimensional $U$-submodule spanned by a subset of that same raw basis and containing the given subset.

The assertion fails already for $U_q(\mathfrak{sl}_2)$ and a singleton seed. Here “based” means the four axioms of [[def-the-bar-lattice-and-integral-lattice-of-a-based-module]], with integrability in place of finite-dimensionality.

## Facts & Assumptions

**Given:** $U=U_q(\mathfrak{sl}_2)$ over $\mathbb Q(q)$, $A=\mathbb Z[q,q^{-1}]$, and the explicit based chain of [[lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains]].

[F1] The chain supplier gives $M=\bigoplus_{j\ge0}V(n_j)$, $n_j=j(j+3)$, with divided string vectors $u_{j,k}=F^{(k)}u_{j,0}$, $0\le k\le n_j$. Put $\ell_j=j+3$, $r_j=j+2$, and $p_j=q^{-\varphi(2\ell_j)/2}\Phi_{2\ell_j}(q)\ne0$. The supplier's shear maps satisfy $T_ju_{j,0}=u_{j+1,r_j}$ and vanish on positions not divisible by $\ell_j$. With $S=\sum_{j\ge0}T_j/p_j$, one has $S^2=0$ and $C=1+S$, $C^{-1}=1-S$. The vectors $b_{j,k}=Cu_{j,k}$ form the raw basis $B$ of a genuine four-axiom based integrable module; all sums act with finite support ([[lem-distinct-cyclotomic-shears-give-integrable-based-sl-two-chains]]).

[F2] On the divided string of $V(N)$, $E^{(h)}u_k=\begin{bmatrix}N-k+h\\h\end{bmatrix}_q u_{k-h}$ for $0\le h\le k$, and the result is zero for $h>k$. In particular $E^{(h)}u_0=0$ for $h>0$. These formulas follow by iteration of [[thm-quantized-sl-two-string-formulas]]; each displayed Gaussian coefficient with $0\le h\le k\le N$ is nonzero in $\mathbb Q(q)$.

[F3] A based subobject is a $U$-submodule spanned by a subset of the raw basis ([[def-the-bar-lattice-and-integral-lattice-of-a-based-module]]). Consequently, if a vector belongs to a based subobject, every raw basis vector having nonzero coefficient in its basis expansion belongs to that subobject, by uniqueness of basis coordinates.

## Counterexample

1.1 Take the actual based chain of [F1] and the singleton seed $\{b_{0,0}\}$. Each vector of its field direct sum belongs to finitely many finite strings, so its $U$-orbit is finite dimensional. In particular $b_{0,0}=u_{0,0}+u_{1,2}/p_0$ belongs to $V(0)\oplus V(4)$. The seed therefore has a finite field orbit, while the question asks for a submodule spanned by raw basis vectors. [given, F1]

1.2 For every $j\ge0$, write $G_j=\begin{bmatrix}n_{j+1}\\r_j\end{bmatrix}_q\ne0$. Since $b_{j,0}=u_{j,0}+u_{j+1,r_j}/p_j$, [F2] gives $E^{(r_j)}b_{j,0}=(G_j/p_j)u_{j+1,0}$. Furthermore $u_{j+1,0}=b_{j+1,0}-u_{j+2,r_{j+1}}/p_{j+1}$. The index $r_{j+1}=j+3$ is strictly between $0$ and $\ell_{j+2}=j+5$, so $T_{j+2}u_{j+2,r_{j+1}}=0$ and $u_{j+2,r_{j+1}}=b_{j+2,r_{j+1}}$. Thus the exact raw expansion is $E^{(r_j)}b_{j,0}=(G_j/p_j)b_{j+1,0}-(G_j/(p_jp_{j+1}))b_{j+2,r_{j+1}}$. The two displayed raw vectors are distinct, and the first coefficient is nonzero. [F1, F2, algebra]

2.1 Let $W$ be any $U$-submodule spanned by a subset of $B$ and containing $b_{0,0}$. If $b_{j,0}\in W$, its image under $E^{(r_j)}$ belongs to $W$ by $U$-stability, and the nonzero $b_{j+1,0}$ coordinate in step 1.2 forces $b_{j+1,0}\in W$ by [F3]. Starting from $j=0$, induction therefore gives $b_{j,0}\in W$ for every $j\ge0$. These are infinitely many distinct members of the field basis $B$, so $W$ is infinite dimensional. [F3, step 1.2, algebra]

3.1 Hence no finite-dimensional based subobject of $M$ contains the singleton seed $b_{0,0}$. The module satisfies all four actual based axioms and is integrable in finite Cartan type by [F1], so it refutes the stated universal finite-envelope assertion. [step 1.1, step 2.1, F1] ∎

## Remarks

This counterexample concerns raw basis compatible submodules. It does not itself refute tensor globalization: a construction using finite correction supports could conceivably work without finite based submodules. The finite-dimensional based filtration in Lusztig §27.1 and the bounded extension in Bao–Wang Remark2.10 retain their own hypotheses.
