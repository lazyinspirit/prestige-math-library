---
id: lem-choice-free-finite-padic-different-and-base-change-calculus
kind: lemma
title: Finite p-adic different and base-change calculus without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
deps:
  - lem-choice-free-finite-ax-sen-approximation
  - lem-trace-pairing-for-a-finite-separable-extension
  - thm-field-norm-and-trace-by-embeddings
  - thm-basic-laws-for-field-norm-and-trace
  - thm-cayley-hamilton
  - thm-determinant-multiplicative
  - thm-adjugate-identity-over-a-commutative-ring
  - thm-monic-polynomial-division
  - thm-p-adic-digit-expansion
  - cor-zp-is-the-valuation-ring-of-qp
  - def-field-norm-and-trace
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Pierre Colmez, Corps locaux, notes du cours de M2"
      url: "https://webusers.imj-prg.fr/~pierre.colmez/CL.pdf"
      locator: "Sections2.1–2.3 and3.3, especially Propositions3.17–3.18; finite trace-lattice and Gram-index reconstruction at p-adic inputs"
verification: {}
---

## Statement

Let $F/\mathbb Q_p$ be a GIVEN valued algebraic closure, with $v(p)=1$. Every finite intermediate field $E$ is complete for its inherited valuation and has a discrete valuation ring $\mathcal O_E$, finite residue field, and $\mathcal O_E$ is finite free over $\mathbb Z_p$. For finite intermediate fields $K\subseteq L$, $\mathcal O_L$ is finite free of rank $[L:K]$ over $\mathcal O_K$, and $[L:K]=e(L/K)f(L/K)$.

Define the codifferent and different by
$$\mathfrak D_{L/K}^{-1}=\{x\in L:\operatorname{Tr}_{L/K}(x\mathcal O_L)\subseteq\mathcal O_K\},\qquad \mathfrak D_{L/K}=(\mathfrak D_{L/K}^{-1})^{-1}.$$
They are nonzero principal fractional $\mathcal O_L$-ideals, and the different is integral. Write $D(L/K)=v(\mathfrak D_{L/K})\ge0$, using the global normalization $v(p)=1$. Then:

- For finite towers, $\mathfrak D_{L/K}=\mathfrak D_{L/M}\mathfrak D_{M/K}\mathcal O_L$.
- If $K\subseteq K'$ and $L'=LK'$ are finite intermediate fields with $[L':K']=[L:K]$, then $D(L'/K')\le D(L/K)$.
- If $L/K$ is totally ramified, every uniformizer $\pi_L$ generates $\mathcal O_L$ over $\mathcal O_K$ and its minimal polynomial is Eisenstein. More generally, if $\mathcal O_L=\mathcal O_K[\alpha]$ with monic minimal polynomial $g$, then $\mathfrak D_{L/K}=g'(\alpha)\mathcal O_L$.

All assertions require no Choice axiom. The bases and valuation-ring properties are constructed, not added as premises.

## Facts & Assumptions

**Given:** Only the valued algebraic closure and the indicated finite intermediate fields. All fields and valuations are the actual restrictions of this given valued field.

[F1] Finite intermediate fields are complete, and every finite $\mathbb Q_p$-embedding into $F$ is isometric. [[lem-choice-free-finite-ax-sen-approximation]]

[F2] Finite separable field trace pairings are nondegenerate. [[lem-trace-pairing-for-a-finite-separable-extension]]

[F3] Norm and trace are the determinant and trace of multiplication; in characteristic zero they equal the product and sum over the finite embeddings. [[def-field-norm-and-trace]] [[thm-field-norm-and-trace-by-embeddings]]

[F4] Trace and norm are transitive in finite towers, and trace is linear. [[thm-basic-laws-for-field-norm-and-trace]]

[F5] Cayley–Hamilton holds for a finite-dimensional endomorphism. [[thm-cayley-hamilton]]

[F6] Determinants are multiplicative. [[thm-determinant-multiplicative]]

[F7] Over a commutative ring the adjugate identity is valid. [[thm-adjugate-identity-over-a-commutative-ring]]

[F8] Monic polynomial division holds over a field. [[thm-monic-polynomial-division]]

[F9] The $p$-adic integers are the closed unit ball of $\mathbb Q_p$ and have unique finite-digit residue truncations; nonzero $p$-adic values are integral powers of $p$. [[thm-p-adic-digit-expansion]] [[cor-zp-is-the-valuation-ring-of-qp]]

## Proof

1.1 Choose one $\mathbb Q_p$-basis $b_i$ of $E$ and its trace-dual basis $b_i^\vee$, supplied by the inverse of the finite trace matrix in [F2]. For $x=\sum a_ib_i$, $a_i=\operatorname{Tr}_{E/\mathbb Q_p}(xb_i^\vee)$. By [F1] and [F3], every term in this trace has absolute value $|x|\,|b_i^\vee|$, so $|a_i|\le|x|\,|b_i^\vee|$. Conversely $|x|\le\max_i|a_i|\,|b_i|$. Choose one integer $N$ sufficiently large for the finitely many bounds. In these coordinates the valuation ring therefore satisfies $p^N\mathbb Z_p^d\subseteq\mathcal O_E\subseteq p^{-N}\mathbb Z_p^d$, where $d=[E:\mathbb Q_p]$. This constructs a lattice sandwich using traces, without invoking any compactness or local monogeneity theorem. [F1, F2, F3, F9, given, construct, algebra]

2.1 Every submodule of a finite free module over a discrete valuation ring is finite free, by the following finite elimination. Project the submodule to the first coordinate. If the image is nonzero, its nonzero coordinate valuations have a minimum, and one vector attaining that minimum generates the image ideal. Subtract its multiples to split off that vector, leaving a submodule in one fewer coordinates. If the image is zero, simply omit that coordinate. Induction on the finite ambient rank gives a finite basis. Apply this with $\mathbb Z_p$ to the sandwich in step 1.1: $\mathcal O_E$ is free of rank $d$. Moreover $v(E^\times)$ is discrete: for each nonzero $x\in E$, a polynomial relation of degree at most $d$ over $\mathbb Q_p$ has at least two terms of equal minimum valuation, so $v(x)$ has denominator at most $d$. Thus the entire value subgroup lies in $\operatorname{lcm}(1,\ldots,d)^{-1}\mathbb Z$ and contains $\mathbb Z$. It has a least positive value; choose one uniformizer attaining it. Every nonzero ideal is principal by the minimum of its nonnegative integer valuations. The residue field is finite, being a quotient of the finite ring $\mathcal O_E/p\mathcal O_E$. For $K\subseteq L$, the finite $\mathbb Z_p$-generators of $\mathcal O_L$ also generate it over $\mathcal O_K$; it is torsion-free. Choose one $K$-basis of $L$, bound the coordinates of these finitely many generators, and apply the same elimination over the now constructed DVR $\mathcal O_K$. Its rank is $[L:K]$ because it spans $L$. [F9, step 1.1, construct, algebra]

3.1 Put $d=[L:K]$, and choose uniformizers. If $e$ is the index of the value groups, $\pi_K\mathcal O_L=\pi_L^e\mathcal O_L$. The quotient by this ideal has $k_K$-dimension $d$ by the free basis in step 2.1. Its filtration by powers of $\pi_L$ has $e$ successive factors isomorphic to $k_L$, each of $k_K$-dimension $f$. Hence $d=ef$. Multiplication by an integral element has an integral matrix on the free integral basis; [F5] makes it integral over the lower valuation ring, and its trace and norm are integral by [F3]. Conversely, a monic equation over the lower valuation ring cannot have a root of negative valuation, because its leading term would strictly dominate the others. Finally [F1] and the product formula [F3] give $v(N_{L/K}x)=d\,v(x)$ for every nonzero $x$. This is the global valuation formula, retaining all residue-degree effects rather than replacing ideal lengths by valuations without a factor. [F1, F3, F5, step 2.1, algebra]

4.1 Let $b_i$ be an integral basis for $L/K$, and $b_i^\vee$ its trace-dual basis. Testing the trace condition on $b_i$ identifies the codifferent with $\sum_i\mathcal O_K b_i^\vee$. It is an $\mathcal O_L$-module, has valuations bounded below, and contains $\mathcal O_L$ by integral trace. Its nonzero valuations lie in a discrete subgroup; choose a nonzero element $\gamma$ of minimum valuation. Valuation divisibility and the ideal property show that the codifferent is exactly $\gamma\mathcal O_L$, so its inverse is integral and $D(L/K)=-v(\gamma)\ge0$. If $G=(\operatorname{Tr}(b_ib_j))$, the coordinate matrices of the two integral bases of the codifferent give $G^{-1}=m_\gamma U$ for $U\in\mathrm{GL}_d(\mathcal O_K)$. Thus [F3], [F6] and step 3.1 give $$v(\det G)=-v(N_{L/K}\gamma)=dD(L/K).$$ No scalar normalization or residue factor has been suppressed. [F2, F3, F6, step 3.1, construct, algebra]

5.1 In a tower $K\subseteq M\subseteq L$, choose integral bases $u_i$ for $L/M$ and $w_j$ for $M/K$. Their products are an integral basis for $L/K$. By [F4], $u_i^\vee w_j^\vee$ is its trace-dual basis. Therefore the codifferent for $L/K$ is the product of the two codifferents, extended to $\mathcal O_L$: this follows by expanding the displayed bases, using the ideal property to absorb coefficients in $\mathcal O_M$ and $\mathcal O_L$. Each ideal is principal and nonzero by step 4.1. Inverting their product proves different transitivity, and taking the global valuation gives $D(L/K)=D(L/M)+D(M/K)$. [F2, F4, step 2.1, step 4.1, algebra]

6.1 For the base-change assertion let $d=[L:K]=[L':K']$ and take an integral basis $b_i$ for $L/K$. The equality of degrees makes it a $K'$-basis of $L'$: its span is a finite-dimensional $K'$-algebra domain, hence a field containing both $L$ and $K'$, and $d$ spanning vectors in degree $d$ are independent. Its $\mathcal O_{K'}$-span is an order $B\subseteq\mathcal O_{L'}$. The multiplication matrices on this basis are the base changes of the original ones, so its trace Gram determinant is the original determinant viewed in $K'$. In an integral basis of $\mathcal O_{L'}$, the inclusion matrix $C$ of $B$ has integral entries and nonzero determinant, and the Gram identity is $G_B=C^{\mathsf t}G_{L'}C$. By step 4.1 and [F6], $$dD(L/K)=dD(L'/K')+2v(\det C)\ge dD(L'/K').$$ This proves the claimed monotonicity with the global $v(p)=1$ normalization. [F3, F6, step 2.1, step 4.1, step 5.1, algebra]

7.1 Suppose $L/K$ is totally ramified of degree $d$ and choose any uniformizer $\pi=\pi_L$. The terms of a relation $\sum_{i<d}a_i\pi^i$ over $K$ have distinct valuation residues modulo $v(K^\times)$, so are linearly independent; hence $L=K(\pi)$. Its monic minimal polynomial $g$ has integral coefficients by step 3.1 applied to its multiplication matrix, constant of valuation $dv(\pi)=v(\pi_K)$, and every other lower coefficient in the maximal ideal: each is a symmetric sum of products of conjugates, all of value $v(\pi)>0$ by [F1]. Thus $g$ is Eisenstein. Finite successive residue lifting shows $\mathcal O_L=\mathcal O_K[\pi]+\pi_K\mathcal O_L$: expand to $d$ digits in $\pi$, lifting each residue from $\mathcal O_K$ since the residue fields agree. Let $Q=\mathcal O_L/\mathcal O_K[\pi]$, a finite module by step 2.1 and monic division. Then $Q=\pi_KQ$. On finitely many generators this is a matrix equation $(I-\pi_K A)q=0$, whose determinant is a unit; the adjugate in [F7] gives $Q=0$. This proves integral monogeneity without infinite digit choices. [F1, F3, F5, F7, F8, step 2.1, step 3.1, step 6.1, construct, algebra]

8.1 More generally assume $\mathcal O_L=\mathcal O_K[\alpha]$ and let $g$ be its monic minimal polynomial of degree $d$. For a polynomial $h$ of degree at most $d-1$, Lagrange interpolation over the finitely many distinct roots of $g$, proved by subtracting and dividing out all their linear factors in [F8], gives $$\operatorname{Tr}_{L/K}(h(\alpha)/g'(\alpha))=[T^{d-1}]h(T).$$ For larger powers reduce modulo the integral monic $g$. Consequently $\operatorname{Tr}(\alpha^j/g'(\alpha))$ is integral for all $j\ge0$, is zero for $j<d-1$, and is one for $j=d-1$. The trace-pairing matrix between $1,\alpha,\ldots,\alpha^{d-1}$ and $g'(\alpha)^{-1},\alpha g'(\alpha)^{-1},\ldots,\alpha^{d-1}g'(\alpha)^{-1}$ is integral and anti-triangular with antidiagonal entries one, so its determinant is a unit. These are therefore dual integral lattices. The codifferent is $g'(\alpha)^{-1}\mathcal O_L$, giving the derivative formula for the different. [F2, F3, F7, F8, step 3.1, step 4.1, step 7.1, algebra]

9.1 Steps 1.1–3.1 construct all the asserted DVR and finite-free data; steps 4.1–8.1 prove the different, transitivity, base-change and derivative assertions. Each basis or uniformizer selection involved finitely many choices in specified finite extensions. No countable family of bases, compatible field embeddings, residue representatives or local presentations was selected. The completeness and embedding-isometry input was the actual unqualified finite Ax supplier, not the CC-qualified general monogeneity or different theorems. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, algebra] ∎

## Source notes

Colmez's full relevant arguments in §§2.1–2.3 and3.3 were read. The trace-lattice sandwich and finite elimination above supply the integral bases locally at the p-adic input. The proof does not infer unqualified basis existence from an older CC-qualified theorem. All normalized discriminant calculations use $v(\det G)=[L:K]D(L/K)$, derived explicitly from the norm, so residue-degree factors are not lost.

This supplies finite arithmetic for the specialized cyclotomic lifting argument. It does not import any APF, Herbrand, almost-purity, global reciprocity, or general period-comparison theorem, and does not change their original scopes.
