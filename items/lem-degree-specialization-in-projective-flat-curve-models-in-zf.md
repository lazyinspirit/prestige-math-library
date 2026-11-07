---
id: lem-degree-specialization-in-projective-flat-curve-models-in-zf
kind: lemma
title: Degree specialization in projective flat curve models without Choice
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - lem-projective-curve-degrees-and-projection-formula-in-zf
  - cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
  - lem-gauss-lemma-over-a-ufd
  - cor-noether-normalisation-module-finiteness
  - thm-sections-basic-open-affine-scheme
justified_by: []
proof_strategy: direct
axiom_use: Work in ZF; the residue field is supplied infinite and all presentations, covers and linear-algebra operations are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: The Stacks Project, Degrees on curves
      url: https://stacks.math.columbia.edu/tag/0AYQ
      locator: Degree/Euler conventions; finite flat-model specialization argument constructed here, not imported.
---

## Statement

Work in ZF. Let $R$ be a DVR with infinite residue field $k$, uniformizer $t$ and fraction field $K$. Let $\mathcal Y$ be an integral projective flat $R$-scheme whose generic fiber $Y$ is a curve and whose special fiber $Z$ has dimension at most one. For an invertible sheaf $\mathcal L$ on $\mathcal Y$, both fiber Euler characteristics are finite and
$$\chi(Y,\mathcal L_K)=\chi(Z,\mathcal L_k),\qquad \deg_Y\mathcal L_K=\sum_V b_V\deg_V(\mathcal L|_V),$$
where $V$ runs over the reduced one-dimensional irreducible components of $Z$, and $b_V=\operatorname{length}_{O_{Z,\eta_V}}O_{Z,\eta_V}$. The degrees on the right may be computed on the normalizations of the curves, with residue-field weights. Embedded or zero-dimensional parts of the special fiber contribute zero to this degree formula. No reducedness, smoothness, normality or Cohen–Macaulay hypothesis on the total space or special fiber is required.

## Facts & Assumptions

**Given:** The DVR, projective flat model and invertible sheaf in the Statement.

[F1] Over any infinite field, projective integral curve degrees equal their finite Euler-characteristic differences; they satisfy tensor additivity, normalization and projection formulas. For a vector bundle $E$ of rank $r$, $\chi(E)-r\chi(O)=\deg\det E$. [[lem-projective-curve-degrees-and-projection-formula-in-zf]]

[F2] Finitely generated torsion-free modules over a PID are finite free. [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]]

[F3] Gauss's primitive-product and fraction-field irreducibility statements hold over a UFD. [[lem-gauss-lemma-over-a-ufd]]

[F4] Every nonzero finite-type algebra over a field is finite over a polynomial subalgebra. [[cor-noether-normalisation-module-finiteness]]

[F5] Regular functions on affine principal opens are given by localization. [[thm-sections-basic-open-affine-scheme]]

## Proof

1.1 Choose a projective embedding and its homogeneous coordinate algebra $S$. On $Z$, choose a linear form $h_0$ avoiding its finitely many irreducible components and a second $h_1$ avoiding the finite support cut out by $h_0$; zero-dimensional components may also be avoided. Finite avoidance works over the supplied infinite field, and the coefficients lift finitely to $R$. There is no common projective zero on $Z$. Consequently $S/(h_0,h_1,t)$ has zero graded pieces in all sufficiently large degrees. To see this algebraically without a prime-ideal choice principle, [F4] and the determinant trick give a finite-extension-valued point of any nonzero finite-type algebra over $k$: first quotient its polynomial subalgebra at its coordinate origin, then take a finite-dimensional quotient of least positive dimension. Localizing the graded quotient at any nonnilpotent coordinate would thus give a forbidden projective point. Each coordinate is therefore nilpotent in that quotient, which proves the assertion about high degrees. [F4, given, construct, algebra]

2.1 Each graded piece of $S/(h_0,h_1)$ is a finite $R$-module. Its reduction modulo $t$ vanishes in all sufficiently large degrees, so finite Nakayama, by the determinant trick, makes those pieces zero already over $R$. The finite low-degree monomials consequently generate $S$ over $R[h_0,h_1]$. As in the finite pencil calculation in [F1], the ratios of the two forms now give a finite morphism $\pi:\mathcal Y\to\mathbb P^1_R$: on either standard chart its algebra is generated as a module by those graded generators divided by powers of the nonvanishing form. This proves finiteness directly, rather than invoking proper quasi-finite finiteness. [F1, step 1.1, construct, algebra]

3.1 Put $F=\pi_*\mathcal L$. It is coherent and $R$-torsion-free, since $t$ acts injectively on the flat model and on its invertible sheaf. There is a surjection $E_0=O(-m)^N\to F$ for finite $m,N$. Here is the needed finite construction: take module generators on the two affine charts, extend them after multiplying by powers of the opposite chart coordinate, and clear the finitely many localization denominators. If two lifts differ after localization, a further power kills each of these finitely many differences; the local sections then glue. The same construction works for any coherent sheaf on this projective line, or on a finite projective scheme over it, and constructs its sufficiently twisted finite generating set. No general Serre-vanishing theorem is used. [F5, step 2.1, construct, algebra]

4.1 The kernel $E_1$ of that surjection is a vector bundle. On a standard chart write $A=R[z]$ and $0\to N\to A^N\to M\to0$. Since $M$ has no $t$-torsion, reduction modulo $t$ is exact on the left. Thus $N/tN$ is a submodule of $k[z]^N$ and is finite free by [F2]. At a prime containing $t$, lift a basis of its localized reduction; Nakayama gives a surjection from a finite free module to $N$. Its kernel has zero reduction, because $N$ also has no $t$-torsion, and is zero by Nakayama. At a prime not containing $t$, the same conclusion follows from the PID $K[z]$ and [F2]. This proves local freeness everywhere. The sequence $0\to E_1\to E_0\to F\to0$ remains exact on both fibers, again because $F$ has no $t$-torsion. [F2, step 3.1, algebra]

5.1 For any vector bundle $E$ on $\mathbb P^1_R$, the degree of $\det E$ is the same on both fibers. Indeed [F3] and the finite factorization over $K[z]$ make $R[z]$ and $R[z^{-1}]$ UFDs. An invertible fractional ideal on a UFD is principal: divide its finite generators by their gcd; then every element of its dual has no irreducible denominator, and the finite identity expressing evaluation as $1$ makes the resulting ideal the whole ring. Thus $\det E$ is trivial on both charts. Its transition is a unit of $R[z,z^{-1}]$, hence $u z^a$ with $u\in R^\times$; the same integer $a$ survives in both fields. By [F1], $\chi(\mathbb P^1_s,E_s)=\operatorname{rank}E+a$ for $s=k,K$. Hence these two Euler characteristics coincide. This uses exterior powers of vector bundles only, not a determinant functor on arbitrary perfect complexes. [F1, F3, step 4.1, algebra]

6.1 Apply step 5.1 to $E_0,E_1$ and use their exact sequence. The finite two-affine Cech complexes give $\chi(\mathbb P^1_K,F_K)=\chi(\mathbb P^1_k,F_k)$. Finiteness of the cohomology follows from the vector-bundle terms and the finite long exact sequence. Since $\pi$ is finite, its two affine preimages and intersection are affine, their section modules are exactly those of $F$, and reducing those finite module descriptions gives the actual fiber sheaves. Thus $\chi(Y,\mathcal L_K)=\chi(Z,\mathcal L_k)$. The same proof with $O_{\mathcal Y}$ proves equality for the two structure-sheaf Euler characteristics. [F1, step 2.1, step 4.1, step 5.1, algebra]

7.1 On a projective scheme $Z$ of dimension at most one, a coherent sheaf $G$ can be devissed into line bundles $O_V(-m)$ on its reduced one-dimensional components and a final finite-support sheaf. For completeness, at a generic component $\eta_V$, a nonzero finite-length module $G_{\eta_V}$ has a nonzero socle, hence a one-dimensional submodule over $\kappa(\eta_V)$. The coherent sheaf $\operatorname{Hom}(O_V,G)$ therefore has a nonzero generic section. Clearing finite local presentation denominators and twisting as in step 3.1 gives a global map $O_V(-m)\to G$ nonzero at $\eta_V$. It is injective, because a line bundle on the integral $V$ has no subsheaf with zero generic fiber. Its quotient reduces that generic length by one and changes no other component's generic length. Repeating this a finite number of times, bounded by the sum of the original generic lengths, leaves a zero-dimensional sheaf. The socle assertion is finite local algebra: take the last nonzero power of the nilpotent maximal ideal acting on the finite-length module. [step 3.1, construct, algebra]

8.1 The function $G\mapsto\chi(G\otimes\mathcal L_k)-\chi(G)$ is additive in these finite exact sequences. For $O_V(-m)$ its value is $\deg_V(\mathcal L|_V)$ by [F1] and tensor additivity. For a finite-support sheaf it is zero, since tensoring by a line bundle preserves each local length and residue-field dimension. Applying step 7.1 to $G=O_Z$ therefore gives
$$\chi(Z,\mathcal L_k)-\chi(Z,O_Z)=\sum_V b_V\deg_V(\mathcal L|_V).$$
All these Euler characteristics are finite: the component terms are finite by [F1], and finite-support terms are finite-dimensional; the exact sequences give the same for the intermediate sheaves. Finally, subtract the two equalities of step 6.1 and use [F1] on the integral generic curve over the infinite field $K$. This proves the degree formula, including all nonreduced multiplicities and with no contribution from embedded finite supports. [F1, step 6.1, step 7.1, algebra] ∎
