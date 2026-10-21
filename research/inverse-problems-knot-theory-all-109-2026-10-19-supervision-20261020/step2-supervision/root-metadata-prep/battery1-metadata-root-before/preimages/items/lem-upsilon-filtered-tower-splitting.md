---
id: lem-upsilon-filtered-tower-splitting
kind: lemma
title: "Filtered tower splitting for the Upsilon minimax"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-upsilon-function-from-filtered-complex
  - lem-upsilon-real-series-valuation-domain
  - lem-upsilon-finite-series-complex-homogeneous-splitting
dependency_level: 4
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "Only finite-dimensional basis changes are made; no choice axiom is used."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Charles Livingston, Notes on the knot concordance invariant Upsilon, Appendix A and §15"
      url: "https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf"
      locator: "Theorem A.1, PDF pp.13–14, and §15, PDF pp.11–13; filtered tower splitting and coordinate change to the t-modified grading"
    - title: "Peter S. Ozsvath, Andras I. Stipsicz, and Zoltan Szabo, Concordance homomorphisms from knot Floer homology, §§3–4"
      url: "https://arxiv.org/pdf/1407.1795"
      locator: "Definitions 3.4/3.6 and Proposition 4.2; t-modification and non-torsion grading"
---

## Statement

Let $C=\mathrm{CFK}^{\infty}(K)$ be the finite-rank free $\Lambda=\mathbb F_2[U,U^{-1}]$ knot Floer complex of a smooth oriented knot, with its Maslov grading, algebraic filtration $i$, Alexander filtration $j$, and weighted filtration $F_t=(1-t/2)i+(t/2)j$ for a fixed $t\in[0,2]$. Assume its total homology is $\Lambda$ generated in Maslov grading zero. Then the filtered graded complex $(C,F_t)$ admits a filtered direct-sum decomposition $C=T\oplus A$, where $T=\Lambda\alpha$, $\partial\alpha=0$, $\alpha$ represents the normalized homology generator at filtration $\nu_t(C)$, and $A$ is acyclic as a graded complex. In the t-modified complex, the non-torsion tower from $T$ has maximal grading $-2\nu_t(C)$; hence this maximum equals the cycle-minimax definition of $\Upsilon_K(t)$.

## Statement references

[[def-upsilon-function-from-filtered-complex|The finite cycle-minimax and t-grading conventions]]

[Livingston, *Notes on the knot concordance invariant Upsilon*, Appendix A and §15](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

[Ozsvath, Stipsicz, and Szabo, *Concordance homomorphisms from knot Floer homology*, §§3–4](https://arxiv.org/pdf/1407.1795)

## Facts & Assumptions

**Given:** A finite-rank free $\Lambda$ complex with a homogeneous bifiltered basis as in the Statement, differential of Maslov degree $-1$, and total homology $\Lambda$ generated in Maslov degree zero.

[F1] [[def-upsilon-function-from-filtered-complex]] defines $\nu_t$ using the maximum weighted filtration of a finite cycle representing the normalized Maslov-zero class. Its Maslov-zero chain group, hence its candidate set over $\mathbb F_2$, is finite.

[F2] [[lem-upsilon-real-series-valuation-domain]] proves the coefficient domain $\mathcal R$ and its field of fractions $\mathcal K$, including the least-exponent criterion and that a common monomial clears the lower exponents of finitely many elements of $\mathcal K$.

[F3] [[lem-upsilon-finite-series-complex-homogeneous-splitting]] proves finite homogeneous homology decomposition over $\mathcal R$, so non-torsion homology generators and their maximal grading are justified without a Noetherian assumption.

## Proof

1.1 Put $\nu=\nu_t(C)$ and choose a Maslov-zero representing cycle $\alpha$ with $F_t(\alpha)=\nu$, using [F1]. Let $C_0,C_1$ be the finite-dimensional chain groups in Maslov degrees zero and one. Set $B_0=\partial C_1$ and $L=\{z\in C_0:F_t(z)<\nu\}$, including zero. The maximum-filtration rule makes $L$ a subspace. One has $\alpha\notin B_0+L$: otherwise $\alpha=b+\ell$ would make $\ell$ a cycle representing the same nonzero class at a smaller filtration. Finite-dimensional linear algebra therefore gives a functional $\lambda:C_0\to\mathbb F_2$ with $\lambda(\alpha)=1$ and $\lambda(B_0+L)=0$. Translate each homogeneous Laurent basis vector by the unique power of $U$ putting its Maslov degree in $\{0,1\}$. Define a $\Lambda$-linear map $P:C\to\Lambda\alpha$ by $P(x)=\lambda(x)\alpha$ on these degree-zero basis vectors and $P(y)=0$ on the degree-one ones. Boundaries from degree one are annihilated by $\lambda$, and the differential of a degree-zero vector lies in $UC_1$, on which $P$ is zero. Thus $P$ is a chain map and $P(\alpha)=\alpha$. If $P(x)\ne0$, then $F_t(x)\ge\nu$ because $\lambda(L)=0$; the $U$-translation rule gives the same inequality for every translate. Hence $P$ preserves filtration. [F1, given, construct, algebra]

2.1 Write $\alpha$ in the degree-zero basis and choose a term of largest filtration, which has filtration $\nu$. Replacing that basis vector by $\alpha$ is invertible and preserves filtration in both directions, since all other terms in $\alpha$ have filtration at most $\nu$. For every remaining degree-zero basis vector $x$, replace it by $x+\lambda(x)\alpha$. When the extra term is present, $F_t(x)\ge\nu$, so this and its inverse preserve filtration. The degree-one basis is unchanged. The resulting basis consists of $\alpha$ and a basis of $\ker P$. Since $P$ is a chain map, this is a filtered graded direct-sum decomposition $C=T\oplus A$, with $T=\Lambda\alpha$ and $A=\ker P$. Its total homology on $T$ already maps isomorphically to $H(C)=\Lambda$, so $H(A)=0$. This proves the first assertion by an explicit filtered projection, without assuming that an arbitrary unfiltered acyclic complex is filtered contractible. [step 1.1, given, construct, algebra]

3.1 Return to the original basis $x_r$ at algebraic level zero, and put $m_r=M(x_r)$ and $a_r=A(x_r)$. Its differential has coefficients $c_{rs}U^{(m_s-m_r+1)/2}$ with $c_{rs}\in\mathbb F_2$. Extend scalars to $\mathcal K$ by $U=v^2$, and write $e_r=v^{m_r}x_r$. The differential is then $\partial e_r=v\sum_s c_{rs}e_s$. Let $W$ be the finite $\mathbb F_2$-space on these formal $e_r$, with differential $d_0e_r=\sum_sc_{rs}e_s$. It squares to zero, since the two-step coefficient in the original differential has the same $U$ exponent for every intermediate index. Separate $W$ by the parity of $m_r$. The even space identifies with $C_0$ by $e_r\mapsto U^{m_r/2}x_r$, and the odd space with $C_1$ by $e_r\mapsto U^{(m_r-1)/2}x_r$. The two matrices of $d_0$ are respectively those of $\partial:C_1\to C_0$ and $U^{-1}\partial:C_0\to C_1$. Consequently $H(W)_{\mathrm{even}}=\mathbb F_2$ and $H(W)_{\mathrm{odd}}=0$, by the given total graded homology. Finite vector-space splittings extend to $\mathcal K$; since $v$ is invertible, $\partial=v d_0$ has one-dimensional homology over $\mathcal K$, detected by the same even homology functional. [F2, step 2.1, given, construct, algebra]

4.1 Let $C_t$ be the exact $t$-modified polynomial-basis complex in the definition, and put $g_r=m_r-ta_r$. The $\mathcal K$-linear map $\Phi(x_r)=v^{ta_r}x_r$ from its scalar extension to the scalar extension of $C$ is a grading-preserving chain isomorphism. Indeed, a differential term on the source has coefficient $v^{m_s-m_r+1-t(a_s-a_r)}$, and multiplying its target by $v^{ta_s}$ gives exactly $v^{ta_r}v^{m_s-m_r+1}$, the differential of the image. The weighted filtration on the latter scalar extension is defined by $F_t(v^\beta x_r)=ta_r/2-\beta/2$, extended to a series by its least nonzero exponent and to a finite basis expansion by the maximum. Thus the image of $C_t$ is exactly the lattice $F_t\le0$: its $r$th coefficient has least exponent at least $ta_r$. This is the explicit coordinate change, and it uses $U=v^2$. [F1, F2, step 3.1, given, algebra]

5.1 A cycle in $C_t$ is non-torsion in homology exactly when its class remains nonzero over $\mathcal K$. One direction follows by inverting a nonzero annihilating coefficient. Conversely, if the cycle becomes a boundary over $\mathcal K$, the bounding chain has finitely many coefficients; a single monomial $v^c$ with $c\ge0$ shifts all their least exponents into $[0,\infty)$ by [F2]. Multiplying the bounding equation by $v^c$ gives an annihilator of the original class over $\mathcal R$. Now a homogeneous cycle of degree $g$ in $C_t$ has the form $z=\sum_r\epsilon_rv^{g_r-g}x_r$, with $\epsilon_r\in\mathbb F_2$, all occurring exponents nonnegative. Its image is $v^{-g}\sum_r\epsilon_re_r$, so the vector $\zeta=\sum_r\epsilon_re_r$ is a $d_0$-cycle. If $z$ is non-torsion, step 3.1 shows that the even part of $\zeta$ represents the nonzero even homology class. Hence $z_0=\sum_{m_r\text{ even}}\epsilon_rU^{m_r/2}x_r$ is an original Maslov-zero cycle representing the normalized generator. For every term in $z_0$, the nonnegative-exponent condition gives $g\le m_r-ta_r$, and therefore $F_t(z_0)\le-g/2$. It follows that every homogeneous non-torsion degree satisfies $g\le-2\nu$. [F1, F2, step 3.1, step 4.1, given, algebra]

6.1 Conversely write a minimizing original Maslov-zero cycle as $\alpha=\sum_{m_r\text{ even}}\epsilon_rU^{m_r/2}x_r$ and put $g=-2\nu$. Each exponent $m_r-ta_r-g$ in its support is nonnegative by the definition of $F_t(\alpha)=\nu$. Thus $z_t=\sum_r\epsilon_rv^{m_r-ta_r-g}x_r$ is a homogeneous cycle in $C_t$, since its image under step 4.1 is $v^{-g}\alpha$ and $\Phi$ is injective. Its scalar-extended homology class is nonzero by step 3.1, so it is non-torsion by step 5.1. Its degree is $g=-2\nu$, attaining the upper bound. Finally the filtered projection and direct sum in steps 1.1–2.1 extend over $\mathcal K$ and restrict to the lattice $F_t\le0$. On $T$ this lattice is $\mathcal R v^{2\nu}\alpha$, with zero differential and generator degree $-2\nu$; the complementary lattice has only torsion homology, since its scalar extension is acyclic. By step 4.1 this is precisely the non-torsion tower in the $t$-modified complex. This proves the complete tower/minimax identification, including irrational $t$ and both endpoints. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, given, algebra] ∎

## Sources

[Livingston, Appendix A and Section15](https://www.maths.gla.ac.uk/~mpowell/Upsilon-revised.pdf)

[Ozsvath, Stipsicz and Szabo, Definition4.1 and Lemma4.3](https://arxiv.org/pdf/1407.1795)

## Remarks

This is an algebraic theorem for a supplied normalized graded bifiltered complex. It proves no existence or invariance of analytic knot Floer complexes, no connected-sum identification, and no smooth cobordism genus estimate.
