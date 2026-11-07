---
id: thm-smith-2-primary-imaginary-quadratic-class-group-distribution
kind: theorem
title: "Smith distribution of 2-power ranks in imaginary quadratic class groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 34
deps: [def-successive-2-power-ranks-of-quadratic-class-groups, lem-successive-two-power-ranks-nonincreasing, def-axiom-of-choice, def-countable-choice, def-dependent-choice, def-twistable-galois-module-and-favored-twist-family, thm-smith-favored-twist-selmer-rank-distribution, thm-class-group-quotient-as-fixed-point-selmer-group, thm-smith-class-group-selmer-cokernel-density-zero, lem-kummer-cohomology-of-roots-of-unity, thm-dirichlet-primes-arithmetic-progressions]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, AC_omega, and DC are the explicit field/cohomology hypotheses inherited
  from the class-field and favored-twist Selmer-family applications.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families I, Theorem 1.9"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "Theorem 1.9, positive-radicand ordering"
    - title: "A. Smith, 2^k-Class Groups of Imaginary Quadratic Fields"
      url: "https://people.math.harvard.edu/~adsmith/Clas.pdf"
      locator: "Main theorem and class-rank convention"
    - title: "A. Smith, The Distribution of ℓ^∞-Selmer Groups in Degree ℓ Twist Families II, Theorem 2.14 and §3.3"
      url: "https://arxiv.org/pdf/2207.05143"
      locator: "Theorem 2.14; §3.3 class-group application"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. For every nonincreasing sequence of nonnegative integers $r_4\ge r_8\ge r_{16}\ge\cdots$, the positive-radicand averages satisfy
$$\lim_{H\to\infty}\frac{\#\{d\in\mathbb Z_{>0}:d<H,\ r_{2^k}(d)=r_{2^k}\text{ for every }k\ge2\}}{H}=P_{\mathrm{Mat}}(r_4\mid\infty)\prod_{k=3}^{\infty}P_{\mathrm{Mat}}(r_{2^k}\mid r_{2^{k-1}}).$$
Here $d$ ranges over all positive integers below $H$ with no squarefree restriction, and $r_{2^k}(d)=\dim_{\mathbb F_2}(2^{k-1}\operatorname{Cl}(\mathbb Q(\sqrt{-d}))[2^k])$. For $n\ge j\ge0$, $P_{\mathrm{Mat}}(j\mid n)$ is the probability that a uniformly random $n\times n$ matrix over $\mathbb F_2$ has kernel dimension $j$, and $P_{\mathrm{Mat}}(j\mid\infty)=\lim_{n\to\infty}P_{\mathrm{Mat}}(j\mid n)$.

## Statement references

[[def-successive-2-power-ranks-of-quadratic-class-groups]]

[[lem-successive-two-power-ranks-nonincreasing]]

[A. Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Theorem 1.9](https://arxiv.org/pdf/2207.05674)

[A. Smith, *2^k-Class Groups of Imaginary Quadratic Fields*](https://people.math.harvard.edu/~adsmith/Clas.pdf)

## Facts & Assumptions

**Given:** AC, Countable Choice, DC; the positive-radicand convention in the Statement; and the stated supplier interfaces.

[F1] Successive ranks of a finite quadratic class group are nonincreasing. [[def-successive-2-power-ranks-of-quadratic-class-groups]] [[lem-successive-two-power-ranks-nonincreasing]]

[F2] The favored-twist theorem supplies the joint Selmer-rank law, with its stated non-self-dual hypotheses and matrix parameter $u$. Its local proof is still an open authoring obligation and is not made ready by this reduction. [[thm-smith-favored-twist-selmer-rank-distribution]] [[def-twistable-galois-module-and-favored-twist-family]]

[F3] For an imaginary quadratic field, the class-group quotient injects into its twisted Selmer group, and the injection fails to be surjective on a density-zero family ordered by absolute fundamental discriminant. The quotient of the dual and primal class groups are noncanonically isomorphic. [[thm-class-group-quotient-as-fixed-point-selmer-group]] [[thm-smith-class-group-selmer-cokernel-density-zero]]

[F4] Kummer theory identifies local and global quadratic characters with square classes, and every reduced arithmetic progression contains infinitely many primes. [[lem-kummer-cohomology-of-roots-of-unity]] [[thm-dirichlet-primes-arithmetic-progressions]]

## Proof

1.1 Let $N=\mathbb Q_2/\mathbb Z_2$ have trivial $G_{\mathbb Q}$-action, take $\xi=-1$, and use the class-group local conditions with $V_0=\{2,\infty\}$. Fix the negative real character and a globally represented character at $2$. Every quadratic character is admissible. The two submodules of $N[2]$ are $0$ and $N[2]$, and multiplication by $2$ identifies $N/N[2]$ with $N$. Both Tamagawa ratios in the favored definition are therefore $1$: every twist is favored, $N$ is potentially favored and uncofavored, and its only $N[2]$-automorphism is scalar. The connecting map of the untwisted $N[4]$ is zero, while that of the dual $\mu_4$ is nonzero on complex conjugation; hence the required self-dual structure does not exist. [F2, given, algebra]

1.2 Let $L=\mathbb Q(\sqrt{-n})$ be a field for which the injection in [F3] is surjective, and put $C=\operatorname{Cl}(L)[2^\infty]$. Then the Selmer group is isomorphic to the dual class-group quotient and, noncanonically, to $C/C^G$. The nontrivial automorphism acts on $C$ by inversion because the ideal norm to $\mathbb Q$ is principal. Therefore $C/C^G=C/C[2]\cong2C$. For each $j\ge1$, the Kummer exact sequence maps the $2^j$-Selmer group onto $\operatorname{Sel}(N_\chi)[2^j]$, with kernel the connecting image of $N_\chi^{G_{\mathbb Q}}/2^jN_\chi^{G_{\mathbb Q}}\cong\mathbb F_2$. Multiplication by $2^{j-1}$ sends this kernel onto the rational-torsion connecting line at level $2$. Thus the rank convention in [F2] gives $$r_{2^j}(N_\chi)=\dim_{\mathbb F_2}(2^{j-1}\operatorname{Sel}(N_\chi)[2^j])=\dim_{\mathbb F_2}(2^j C[2^{j+1}])=r_{2^{j+1}}(n).$$ [F1, F2, F3, algebra]

2.1 Neither $N$ nor its Tate dual has a nonzero universal $2$-Selmer element for the fixed local twists. Indeed, by [F4] a nonzero global class in $H^1(\mathbb Q,\mathbb F_2)$ has nonzero restriction at some odd prime $p$: if a square-class representative has an odd prime factor of odd valuation take that prime, and otherwise it is $-1$, $2$, or $-2$, detected at $3$ or $5$. At an odd ramified $p$, the invariants of either twisted divisible module are exactly its order-two subgroup. Its automatic local condition is zero, and the inverse image in $H^1(\mathbb Q_p,\mathbb F_2)$ is the line generated by the module's action character on its $4$-torsion: $\chi_p$ for $N_\chi$ and the product of $\chi_p$ with the mod-$4$ cyclotomic character for the dual. The two ramified quadratic local characters give two distinct lines, so one avoids the prescribed nonzero local class. To realize it globally without changing the fixed local character at $2$ or the negative real sign, use a squarefree radicand $2^e p q$ and choose an auxiliary odd prime $q$ in a suitable reduced residue class modulo $8p$; [F4] supplies such $q$. The chosen global class therefore fails the local Selmer condition for that twist. [F2, F4, step 1.1, algebra, choose]

3.1 For the fixed imaginary real twist the matrix parameter in [F2] is $u=0$. At infinity the twisted divisible module has sign action, so $H^1(\mathbb R,N_\chi)=0$ and the inverse image of the zero local condition in $H^1(\mathbb R,N[2])$ has dimension one. At $2$, if $\chi_2$ is nontrivial, its invariant subgroup is $N[2]$ and the local condition is zero, including the unramified nontrivial case where $H^1_{\mathrm{ur}}=N/2N=0$; the connecting kernel has dimension one. If $\chi_2$ is trivial, the inverse image of the unramified local condition is the line of unramified quadratic characters. Since $H^0(G_v,N[2])$ has dimension one at both places, both terms in the defining sum for $u$ vanish. Steps 1.1 and 2.1 verify the remaining non-self-dual hypotheses of [F2]. [F2, F4, step 1.1, step 2.1, algebra]

4.1 Apply [F2] with $u=0$ separately to each of the finitely many represented local characters at $2$, always fixing the negative real twist. The probability law is the same square-matrix law in every such family by step 3.1. A quadratic twist corresponds to a squarefree positive radicand $n$; within each fixed $2$-adic character its twist height is the odd part of $n$, hence differs from $n$ by the fixed factor $1$ or $2$. Thus the same Selmer-rank law holds for squarefree $n<H$ after taking the finite union. By [F3], step 1.2 identifies those ranks with the displayed class ranks except on $o(H)$ such radicands: each has a distinct imaginary quadratic field with $|D_L|\le4H$. The squarefree count is at least a fixed positive multiple of $H$, since the integers divisible by some square $k^2$ are at most $H\sum_{k\ge2}k^{-2}<H$. Hence the exceptional fields do not change the limiting squarefree frequency. [F2, F3, step 3.1, step 1.2, algebra]

5.1 Every $d>0$ has a unique expression $d=nm^2$ with $n$ squarefree, and $\mathbb Q(\sqrt{-d})=\mathbb Q(\sqrt{-n})$. For each fixed $m$, step 4.1 applies at cutoff $H/m^2$. Sum over $m\le M$ and bound the contribution from $m>M$ by $H\sum_{m>M}m^{-2}+O(\sqrt H)$. Letting first $H\to\infty$ and then $M\to\infty$ transfers the same law to all positive $d<H$. The denominator is $H$ and the finite-class-group ranks are eventually zero; if the prescribed nonincreasing sequence is not eventually zero, both the event and its theoretical infinite-product probability are zero. This proves the original positive-radicand formula under the stated favored-twist supplier. [F1, F2, step 4.1, algebra] ∎
