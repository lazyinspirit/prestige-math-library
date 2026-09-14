---
id: thm-rational-cohomology-of-eilenberg-maclane-spaces-in-one-generator
kind: theorem
title: Rational cohomology of Eilenberg–Mac Lane spaces in one generator
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-circle-and-path-loop-models-for-eilenberg-maclane-induction, thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces, thm-absolute-hurewicz-theorem, thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence, cor-homology-of-spheres, cor-contractible-nonempty-spaces-have-the-homology-of-a-point, thm-topological-universal-coefficient-short-exact-sequence-for-cohomology, thm-singular-chain-homotopy-formula, prop-cup-product-is-natural-unital-and-associative, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: Hatcher, Algebraic Topology, Proposition 5.21
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf
      locator: Proposition 5.21 and proof, printed p. 550
    - title: Rolf Schön, Fibrations Over a CWh-Base
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf
      locator: Proposition 3 and proof, printed pp. 165–166
---

## Statement

Assume the Axiom of Choice. For every $n\geq1$ and every chosen CW model
$K(\mathbb Z,n)$, there is a class $x_n\in H^n(K(\mathbb Z,n);\mathbb Q)$
dual to a chosen generator of $\pi_n(K(\mathbb Z,n))\cong\mathbb Z$, and

$$H^*(K(\mathbb Z,n);\mathbb Q)\cong\begin{cases}\mathbb Q[x_n],&n\text{ even},\\ \Lambda_{\mathbb Q}(x_n),&n\text{ odd}.\end{cases}$$

The isomorphism is natural for homotopy equivalences preserving the marked
generator. Replacing the generator by its negative replaces $x_n$ by $-x_n$.

## Facts & Assumptions

**Given:** AC, $n\geq1$, and marked connected CW models $K_j=K(\mathbb Z,j)$.

[A1] [[def-axiom-of-choice]] is assumed for the AC-bearing suppliers listed below.

[F0] [[lem-circle-and-path-loop-models-for-eilenberg-maclane-induction]] identifies the marked circle with $K(\mathbb Z,1)$ and the strict loop fiber of the based path fibration of $K_j$ with a marked $K(\mathbb Z,j-1)$ of CW homotopy type; its total path space is contractible.

[F1] [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]] gives marked CW models and marked homotopy equivalences between them.

[F3] [[thm-absolute-hurewicz-theorem]] and [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] give $$H^p(K_j;\mathbb Q)=0\quad(0<p<j),\qquad H^j(K_j;\mathbb Q)\cong\mathbb Q$$ for $j\geq2$.

[F5] [[thm-singular-chain-homotopy-formula]] dualizes to cochains, so a homotopy equivalence induces a cohomology isomorphism. [[prop-cup-product-is-natural-unital-and-associative]] makes it a graded-ring isomorphism.

[F6] [[thm-multiplicative-structure-on-the-cohomological-serre-spectral-sequence]] supplies the multiplicative rational Serre sequence, its total-degree Leibniz sign, and its algebra convergence.

[F7] [[cor-contractible-nonempty-spaces-have-the-homology-of-a-point]] together with [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] makes the cohomology of $PK_j$ equal to $\mathbb Q$ in degree zero and zero in positive degrees.

[F8] [[cor-homology-of-spheres]] and [[thm-topological-universal-coefficient-short-exact-sequence-for-cohomology]] compute $H^*(S^1;\mathbb Q)$ as $\mathbb Q$ in degrees zero and one and zero elsewhere.

## Proof

**Proof technique:** induction through the based path fibration and an explicit rational Koszul calculation.

1.1 The calculation cited in [F0] gives $\pi_1(S^1)\cong\mathbb Z$ and $\pi_i(S^1)=0$ for $i>1$, so marked uniqueness in [F1] identifies $K_1$ up to homotopy with $S^1$. By [F8], its rational cohomology is $\mathbb Q$ in degrees zero and one and zero elsewhere. If $x_1$ is dual to the marked generator, then $x_1^2=0$ for degree reasons, hence $H^*(K_1;\mathbb Q)=\Lambda_{\mathbb Q}(x_1)$. The equivalence preserves products by [F5]. [A1, F0, F1, F5, F8]

1.2 Let $j\geq2$ and suppose the theorem holds for $K_{j-1}$. The path fibration in [F0] has contractible total space and strict loop fiber marked-homotopy-equivalent to $K_{j-1}$. The induced cohomology map is a graded-ring isomorphism by [F5], so the induction hypothesis computes the actual fiber ring used by the Serre sequence. [A1, F0, F5]

2.1 Put $A=H^*(K_j;\mathbb Q)$. Since $K_j$ is simply connected, the fiber coefficient system is constant. Each nonzero graded fiber group is one-dimensional by induction, so the constant-coefficient comparison is literal scalar multiplication and [F6] gives a bigraded algebra $$E_2\cong A\otimes_{\mathbb Q}H^*(K_{j-1};\mathbb Q).$$ By [F3], $A^0=\mathbb Q$, $A^p=0$ for $0<p<j$, and $A^j\cong\mathbb Q$. By [F6, F7], $E_\infty$ is $\mathbb Q$ at $(0,0)$ and zero in every positive total degree. [A1, F3, F6, F7, step 1.2]

3.1 Suppose $j$ is even. The induction hypothesis gives $H^*(K_{j-1};\mathbb Q)=\Lambda(y)$ with $|y|=j-1$, so only the rows $0$ and $j-1$ occur. The sole possible nonzero differential is $$d_j:E_j^{p,j-1}=A^p y\longrightarrow E_j^{p+j,0}=A^{p+j}.$$ It sends $y$ to a nonzero element $x_j\in A^j$: otherwise $y$ would survive in positive total degree. The upper row has no incoming differential, while the positive-degree bottom row has no outgoing differential and only this possible incoming one. Vanishing of the positive-degree abutment therefore says that $$A^p\longrightarrow A^{p+j},\qquad a\longmapsto(-1)^{|a|}a x_j,$$ is an isomorphism for every $p\geq0$. Starting with $A^0=\mathbb Q$ and the vanishing in degrees $1,\ldots,j-1$, induction over residue classes modulo $j$ gives $A=\mathbb Q[x_j]$. Since $j$ is even, all powers have the required graded-commutative sign. [F3, F6, step 2.1]

3.2 Suppose $j$ is odd. Now the induction hypothesis gives $H^*(K_{j-1};\mathbb Q)=\mathbb Q[y]$ with $|y|=j-1$ even. Before page $j$ no differential can join two occupied fiber rows. The class $y$ must die, and its only possible first differential is $$d_j(y)=x_j\in A^j,$$ which is nonzero and hence generates the one-dimensional group supplied by [F3]. The Leibniz rule gives $$d_j(y^k)=k y^{k-1}x_j\qquad(k\geq1).$$ Because $j$ is odd, graded commutativity and rational coefficients give $x_j^2=-x_j^2$ and hence $x_j^2=0$. [F3, F6, step 2.1]

4.1 Assume for contradiction that $A^p\neq0$ for some $p>j$, and choose the least such $p$. A nonzero bottom-row class $a\in A^p$ cannot be hit by $d_j$: every possible source has base degree $p-j<p$, hence is zero by minimality unless $p-j=j$, where it is a multiple of $x_jy$ and $d_j(x_jy)=-x_j^2=0$. For a later differential $d_r$ to hit $a$, its source fiber degree $r-1$ must equal $k(j-1)$. If its smaller base degree is neither $0$ nor $j$, minimality makes the source zero. In base degree $0$, every $y^k$ has already been killed by the injective map $d_j(y^k)=k y^{k-1}x_j$; in base degree $j$, every $x_jy^k$ is the boundary $d_j(y^{k+1})/(k+1)$. Thus no later differential hits $a$. No differential leaves the bottom row, so $a$ survives to $E_\infty$, contradicting step 2.1. Therefore $A^p=0$ for $p>j$, and $A=\Lambda_{\mathbb Q}(x_j)$. [F6, step 2.1, step 3.2]

5.1 The Hurewicz isomorphism followed by rational evaluation defines $x_j$ as the class dual to the marked generator. A marked homotopy equivalence commutes with Hurewicz and evaluation and preserves cup products, so [F1, F3, F5] give the stated naturality. The only alternative generator of $\mathbb Z$ is its negative, which changes the dual class by $-1$. For $j=1$, $j=2$, the zero class, the unit, the first powers $y^0$ and $y^1$, and either parity, the preceding computations remain literal. The spaces and path fibers are nonempty; zero groups occur in the displayed vanishing ranges. All incoming and outgoing differential possibilities, both rows in the even case, every occupied row in the odd case, and both algebra-identification directions were checked. AC is used through [F0], [F1], [F3], [F6], [F7], and [F8]; all Koszul calculations are finite and add no choice. There is no converse assertion. [A1, F0, F1, F3, F5, F6, F7, F8, step 1.1, step 1.2, step 2.1, step 3.1, step 3.2, step 4.1] ∎

## Source notes

[Hatcher, Proposition 5.21](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf), printed p. 550, gives the induction through the path fibration and the rational differential $d_j(y^k)=k y^{k-1}x_j$. The minimal-column argument in step 4.1 spells out why no later differential can conceal an extra base class.

[Schön, Proposition 3](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/schoen.pdf), printed pp. 165–166, supplies the CW-homotopy-type implication for the strict loop fiber used before applying Eilenberg–Mac Lane uniqueness.
