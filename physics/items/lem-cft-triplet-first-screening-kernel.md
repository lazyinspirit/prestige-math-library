---
id: lem-cft-triplet-first-screening-kernel
kind: lemma
title: First screening kernel from a finite symmetric-polynomial calculation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
deps:
  - def-cft-triplet-lattice-screening-data
  - lem-cft-triplet-square-zero-lattice-jacobi
  - lem-cft-triplet-deformed-grading-and-jordan-top
dependency_roles:
  def-cft-triplet-lattice-screening-data: mathematical-premise
  lem-cft-triplet-square-zero-lattice-jacobi: mathematical-premise
  lem-cft-triplet-deformed-grading-and-jordan-top: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Dražen Adamović and Antun Milas, On the triplet vertex algebra W(p)
      url: https://arxiv.org/pdf/0707.1857v2
      locator: Theorem 1.1 at i=p−2 and the singular/cosingular structure used in
        0902.3417v2 Lemma 5.2. Only its first oscillator levels are asserted
        here, with a separate elementary proof below.
    - title: Dražen Adamović and Antun Milas, Logarithmic intertwining operators and
        W(2,2p−1)-algebras
      url: https://arxiv.org/pdf/math/0702081v2
      locator: Lemma 1.1 for the contragredient Fock charge convention; the proof
        below verifies the required pairing and finite rank directly, without
        invoking its Feigin–Fuchs structure propositions.
dependency_level: 3
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

In the explicit lattice-screening data let $p\ge2$, $N=p-1$, $\beta=(p-2)/(2p)$, $w=e^{\beta\alpha}$ and $b=e^{(\beta+1)\alpha}$. Give $P=\mathbb C[x_1,x_2,\ldots]$ oscillator degree $\deg x_k=k$, and denote its degree-$n$ part by $P_n$. Write $D_n\subset P_nw$ for the degree-$n$ span of all finite products of negative Virasoro modes applied to $w$. Then $D_n=P_nw$ for $0\le n<N$, and
$$D_N=\ker\bigl(Q:P_Nw\longrightarrow\mathbb Cb\bigr),\qquad Q(fw)=f(-2p,-2p,\ldots)b.$$
The displayed map has rank one. In particular, its kernel is contained in $W(p)w$, without assuming a global Feigin–Fuchs decomposition, endpoint irreducibility or the triplet extension theorem.

## Statement references

[[def-cft-triplet-lattice-screening-data]]

[[lem-cft-triplet-square-zero-lattice-jacobi]]

[[lem-cft-triplet-deformed-grading-and-jordan-top]]

## Facts & Assumptions

**Given:** The stated integer $p\ge2$, polynomial spaces, explicit conformal vector, oscillator fields and screening $Q$. A partition of $n$ is a finite nonincreasing list of positive integers summing to $n$. Write $\mathsf p(n)$ for the number of such partitions, so $\dim P_n=\mathsf p(n)$.

[F1] [[def-cft-triplet-lattice-screening-data]] defines the oscillator actions and exponential fields.

[F2] [[lem-cft-triplet-square-zero-lattice-jacobi]] proves their vertex/module Jacobi identities.

[F3] The conformal-field calculation in [[lem-cft-triplet-deformed-grading-and-jordan-top]] gives $L(0)$-weights and the Virasoro modes of the explicit conformal vector. In particular $e^\alpha$ is primary of weight one, so its zero mode $Q$ commutes with the Virasoro modes by taking residues.

## Proof

1.1 Put $q=(p-1)/(2p)$ and suppress charge labels on polynomials. The oscillator formula for $L(-k)$ on charge $\beta$ is
$$L(-k)=\sum_{j\ge1}j x_{k+j}\partial_{x_j}+\frac1{4p}\sum_{j=1}^{k-1}x_jx_{k-j}+(\beta+q(k-1))x_k.$$
On the charge $1/2$ Fock space, its positive mode is
$$L(k)=\sum_{j\ge1}(k+j)x_j\partial_{x_{k+j}}+p\sum_{j=1}^{k-1}j(k-j)\partial_{x_j}\partial_{x_{k-j}}+k(1-(p-1)k)\partial_{x_k}.$$
Define a nondegenerate bilinear pairing between each equal-degree pair of these two polynomial spaces by making distinct monomials orthogonal and setting $\langle\prod x_j^{m_j},\prod x_j^{m_j}\rangle=\prod m_j!(-2pj)^{m_j}$. Thus the adjoint of multiplication by $x_j$ is $-2pj\partial_{x_j}$. Applying this rule termwise to the negative-mode formula gives exactly the positive-mode formula: its linear coefficient is $-2pk(\beta+q(k-1))=k(1-(p-1)k)$. Consequently $\langle L(-k)f,g\rangle=\langle f,L(k)g\rangle$ whenever the degrees match. These are finite-dimensional algebraic pairings and require no analytic completion. [given, F1, F3, algebra]

2.1 On the charge-$1/2$ polynomial space form the degree-preserving finite-on-each-degree operator $H=\sum_{k\ge1}x_kL(k)$. Put $\mathcal E=\sum_{k\ge1}k x_k\partial_{x_k}$ and define
$$J_p=\sum_{a,b\ge1}(a+b)x_ax_b\partial_{x_{a+b}}+p\sum_{a,b\ge1}abx_{a+b}\partial_{x_a}\partial_{x_b}+(p-1)\sum_{k\ge1}k(k-1)x_k\partial_{x_k}.$$
Let $\sigma$ replace every $x_k$ by $-x_k$. The two cubic terms change sign under conjugation by $\sigma$, whereas $x_k\partial_{x_k}$ does not. The positive-mode formula of step 1.1 therefore gives the exact identity $\sigma H\sigma=-J_p+(2-p)\mathcal E$. [step 1.1, algebra]

3.1 Fix $n\ge1$ and choose an integer $m\ge n$. Substitution $x_k=\sum_{i=1}^m y_i^k$ identifies $P_n$ with the degree-$n$ symmetric polynomials in $m$ variables. Indeed the first $m$ power sums generate the elementary symmetric polynomials by the recursion $r e_r=\sum_{j=1}^r(-1)^{j-1}e_{r-j}x_j$; conversely the same recursion expresses each power sum in them. The elementary symmetric polynomials are algebraically independent: in a lexicographic monomial order their products have distinct leading exponent lists, so a nonzero polynomial relation cannot cancel its leading monomial. They generate every symmetric polynomial as well: its lexicographically highest exponent list is nonincreasing, and a product of elementary symmetric polynomials has exactly that leading monomial; subtracting its scalar multiple and repeating strictly decreases the leading monomial within the finite degree. Their weighted degree-$n$ monomials, or equivalently the monomial symmetric functions indexed by partitions of $n$ with at most $m$ parts, thus give the required dimension-$\mathsf p(n)$ basis. The chain rule identifies $J_p$ with
$$\mathcal J=p\sum_i y_i^2\partial_{y_i}^2+2\sum_{i<j}\frac{y_i^2\partial_{y_i}-y_j^2\partial_{y_j}}{y_i-y_j}-2(m-1)\sum_i y_i\partial_{y_i}.$$
To check the first-order terms, its action on $x_k$ is $k\sum_{a=1}^{k-1}x_ax_{k-a}+(p-1)k(k-1)x_k$. This follows from $\sum_{i<j}(y_i^{k+1}-y_j^{k+1})/(y_i-y_j)=\frac12(\sum_{a=0}^k x_ax_{k-a}-(k+1)x_k)$ with $x_0=m$. The chain rule's second-order term is $p\sum_{a,b}abx_{a+b}\partial_{x_a}\partial_{x_b}$, as displayed. The divided differences are polynomials on symmetric inputs since their numerators are antisymmetric in $y_i,y_j$. [given, step 2.1, algebra]

4.1 In the monomial symmetric basis, $\mathcal J$ is triangular in partition dominance order, with diagonal entry
$$\theta_\lambda=p\sum_i\lambda_i(\lambda_i-1)-2\sum_i(i-1)\lambda_i.$$
For completeness, on two unequal exponents $a>b$ the pair operator $(y_i^2\partial_{y_i}-y_j^2\partial_{y_j})/(y_i-y_j)$ sends $y_i^ay_j^b+y_i^by_j^a$ to $a(y_i^ay_j^b+y_i^by_j^a)$ plus terms with the two exponents strictly between $a$ and $b$. This is obtained by expanding the differences of powers in its numerator; the remaining terms transfer positive exponent from the larger to the smaller. Such transfers produce dominated partitions: the sum of any fixed number of the largest entries cannot increase, as follows by maximizing the sum over subsets before and after the transfer. For equal exponents the diagonal coefficient is $a$ and there are no transfer terms. Hence the pair terms have diagonal $2\sum_{i<j}\max(\lambda_i,\lambda_j)=2\sum_i(m-i)\lambda_i$. Combining this with the first and last terms of $\mathcal J$ proves the formula. Further, $\sum_i(i-1)\lambda_i\le n(n-1)/2$, with equality only for $\lambda=(1^n)$: regarding the partition as ordered rows of boxes, the index $i-1$ counts preceding rows and is at most the number of boxes preceding a given box; summing gives the bound, strict if any row contains two boxes. Since $p>0$, it follows that $\theta_\lambda\ge-n(n-1)$, and equality holds only at $(1^n)$. Thus all diagonal entries of $-J_p+(2-p)n$ are strictly negative when $1\le n<N$, and at $n=N$ exactly one is zero, the column partition. By triangularity and conjugation, $H$ is invertible on those smaller degrees and its kernel has dimension at most one on degree $N$. [step 2.1, step 3.1, algebra]

5.1 Induct on $n\le N$ for the span $D_n$. The degree-zero span is the whole one-dimensional space. Suppose all smaller degrees are full. By definition $D_n=\sum_{k=1}^n L(-k)D_{n-k}$. Its annihilator under the nondegenerate pairing of step 1.1 is therefore precisely the simultaneous kernel of $L(1),\ldots,L(n)$ on the dual charge-$1/2$ degree-$n$ space: the lower spaces are full by induction. Every vector in this simultaneous kernel is killed by $H$. Step 4.1 gives zero annihilator when $n<N$, hence $D_n=P_nw$. When $n=N$ it gives $\operatorname{codim}D_N\le1$. On the other hand $Qw=0$, since $Y(e^\alpha,z)w$ starts with $z^{p-2}b$, and [F3] implies that $Q$ kills every Virasoro descendant of $w$. Its explicit action on $P_Nw$ is easy to calculate: the annihilation exponential replaces $x_k$ by $x_k-2pz^{-k}$, and the prefactor is $z^{p-2}$. The output charge $\beta+1$ has minimum degree $N$, so the zero-mode output here has oscillator degree zero. Only the constant output of that substitution contributes, giving $Q(fw)=f(-2p,-2p,\ldots)b$ for weighted-homogeneous $f\in P_N$. This functional is nonzero, since its value on $x_N$ is $-2p$. Thus $D_N$ has codimension at least one and is contained in this rank-one kernel. The equal codimensions prove the asserted equality. Finally all negative Virasoro modes are modes of $\omega\in W(p)$, so $D_N\subset W(p)w$. [F1, F2, F3, step 1.1, step 4.1, algebra] ∎
