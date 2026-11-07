---
id: thm-higher-milnor-k-groups-of-finite-residue-local-fields-uniquely-divisible
kind: theorem
title: Higher Milnor K-groups of a finite-residue local field are uniquely divisible
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
- def-local-field-valuation-ring-uniformizer-and-residue-field
- def-milnor-k-group-of-a-field
- thm-bass-tate-kato-norm-transfer-for-milnor-k-groups
- thm-local-field-k2-moore-sequence-and-divisible-kernel
- thm-local-hilbert-symbol-nondegenerate-pairing
- thm-local-artin-reciprocity-and-norm-index
- def-axiom-of-choice
- def-dependent-choice
- lem-milnor-k-groups-of-finite-residue-local-fields-are-uncountable
- lem-prime-to-residue-characteristic-milnor-k-quotients
- lem-local-field-milnor-k2-quotient-by-the-residue-prime
- lem-finite-abelian-local-milnor-k-norms-are-surjective
- prop-splitting-field-of-x-n-minus-a
- thm-finite-galois-extension-characterizations
- lem-complete-discrete-valuation-extension-degree-and-tame-norm
- lem-higher-local-milnor-prime-to-residue-division-is-invertible
justified_by: []
proof_strategy: direct
axiom_use: Literal original AC and DC. AC supplies uncountability and canonical transfer/local
  extension choices; full divisibility uses the canonical AC/DC finite abelian norm
  lemma. The accepted tame inverse completes equal-characteristic unique divisibility;
  mixed-characteristic residue-p injectivity remains unproved.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd
      ed., Chapter IX, §§4.8–4.11
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Printed pp. 312–315, Theorem (4.11) and its cited K2 norm and symbol
      lemmas.
  - title: 'Charles Weibel, The K-book: An Introduction to Algebraic K-theory, Chapter
      VI, §7'
    url: https://paperzz.com/doc/6986209/the-higher-k-theory-of-fields-the-problem-of-computing-the
    locator: Proposition 7.1 and its proof via local cohomological dimension, motivic
      cohomology, and local Tate–Poitou duality.
verification: {}
---

## Statement

Assume AC and DC. Let $F$ be a nonarchimedean local field with finite residue field. For every
integer $n\ge3$, the Milnor group $K_n^M(F)$ is uncountable and uniquely
divisible: for each integer $r\ge1$, multiplication by $r$ is a bijection
from $K_n^M(F)$ to itself.

## Statement references

[[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[[def-milnor-k-group-of-a-field]]

[[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]]

[[thm-local-field-k2-moore-sequence-and-divisible-kernel]]

[[thm-local-hilbert-symbol-nondegenerate-pairing]]

[[thm-local-artin-reciprocity-and-norm-index]]

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., IX §§4.8–4.11](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[Charles Weibel, *The K-book*, Chapter VI §7](https://paperzz.com/doc/6986209/the-higher-k-theory-of-fields-the-problem-of-computing-the)

[[lem-finite-abelian-local-milnor-k-norms-are-surjective]]

[[prop-splitting-field-of-x-n-minus-a]]

[[thm-finite-galois-extension-characterizations]]

[[lem-complete-discrete-valuation-extension-degree-and-tame-norm]]

[[lem-higher-local-milnor-prime-to-residue-division-is-invertible]]

## Facts & Assumptions

**Given:** The field $F$, $n\ge3$, and AC/DC in the unchanged Statement. Put $p=\operatorname{char}(k_F)$.

[F1] Under AC, Milnor groups in every positive degree contain an uncountable family linearly independent after rationalization. [[lem-milnor-k-groups-of-finite-residue-local-fields-are-uncountable]]

[F2] For $n\ge3$ and $r$ prime to $p$, $K_n^M(F)/r=0$. [[lem-prime-to-residue-characteristic-milnor-k-quotients]]

[F3] Canonical Milnor transfer is transitive and satisfies the projection formula. The full Moore sequence has divisible kernel; neither theorem asserts that kernel is torsion-free. [[thm-bass-tate-kato-norm-transfer-for-milnor-k-groups]] [[thm-local-field-k2-moore-sequence-and-divisible-kernel]]

[F4] In equal characteristic $p$, an explicitly checked root-symbol transfer is a two-sided inverse of multiplication by $p$ in every degree at least two. [[lem-local-field-milnor-k2-quotient-by-the-residue-prime]]

[F5] Under literal AC/DC, every finite abelian extension $E/F$ has surjective canonical norm $K_j^M(E)\to K_j^M(F)$ for each $j\ge2$. [[lem-finite-abelian-local-milnor-k-norms-are-surjective]]

[F6] Roots of $X^\ell-a$ differ by $\ell$th roots of unity; a splitting field of a separable polynomial is finite Galois. [[prop-splitting-field-of-x-n-minus-a]] [[thm-finite-galois-extension-characterizations]]

[F7] Under AC, every finite extension of $F$ is again a complete discretely valued field with finite residue field. [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[def-local-field-valuation-ring-uniformizer-and-residue-field]]

[F8] Under literal AC/DC, for every $n\ge3$ and $s\ge1$ prime to the residue characteristic $p$, multiplication by $s$ on $K_n^M(F)$ is bijective, without any root-of-unity hypothesis. [[lem-higher-local-milnor-prime-to-residue-division-is-invertible]]

[A1] AC supplies the transcendence basis in [F1], finite algebraic root extensions and canonical Milnor transfer. DC is retained literally for the canonical local Artin/Hilbert branch underlying [F5]. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** retain uncountability and full divisibility, then combine the accepted tame inverse and equal-characteristic residue-$p$ inverse; isolate mixed-characteristic residue-$p$ injectivity.

**Given:** The data above.

1.1 By [F1], $K_n^M(F)\otimes\mathbb Q$ contains an uncountable linearly independent family represented by actual symbols. Their original classes are distinct, so $K_n^M(F)$ is uncountable. This supplier proves rational restriction injectivity through finite algebraic witnesses and does not assume an unproved tower-independent transfer. [A1, F1, given, algebra]

1.2 To prove divisibility it suffices to prove surjectivity of multiplication by each prime $\ell$: factor a positive integer into finitely many primes and successively take preimages. If $\ell=\operatorname{char}F$, [F4] proves even bijectivity. Assume henceforth $\ell\ne\operatorname{char}F$ and first suppose $\mu_\ell\subset F$. For a target generator $w=\{a_1,\ldots,a_n\}$, choose $\alpha$ in an algebraic closure with $\alpha^\ell=a_1$ and put $E=F(\alpha)$. If $E=F$, then directly $$w=\ell\{\alpha,a_2,\ldots,a_n\}.$$ This handles the trivial Kummer extension without using a prime-degree norm formula. [A1, F3, F4, given, construct, algebra]

2.1 If $E\ne F$, all roots of $X^\ell-a_1$ lie in $E$, since they are $\alpha\zeta$ with $\zeta\in\mu_\ell\subset F$. The polynomial is separable because its derivative is nonzero at its nonzero roots. Thus $E/F$ is finite Galois by [F6]. The map $\sigma\mapsto\sigma(\alpha)/\alpha$ embeds its Galois group into the group $\mu_\ell$ of order $\ell$, and is a homomorphism because all these roots of unity lie in $F$. The extension is nontrivial, so its group is cyclic of order $\ell$. By [F7] it is a local extension, and [F5] supplies $y\in K_2^M(E)$ with $Ny=\{a_2,a_3\}$. Put $$z=N_{E/F}\bigl(\{\alpha\}\cdot y\cdot\operatorname{res}\{a_4,\ldots,a_n\}\bigr).$$ When $n=3$ the last factor is the unit of $K_0^M(E)$. Multilinearity and projection give $$\ell z=N_{E/F}\bigl(\operatorname{res}\{a_1\}\cdot y\cdot\operatorname{res}\{a_4,\ldots,a_n\}\bigr)=w.$$ Thus multiplication by $\ell$ is onto when $\mu_\ell\subset F$. Only a preimage for each symbol is needed; no independence of chosen lifts or inverse homomorphism is claimed. [A1, F3, F5, F6, F7, step 1.2, construct, algebra]

3.1 If $\mu_\ell$ is not contained in $F$, let $F'=F(\mu_\ell)$ in an algebraic closure. This is the splitting field of the separable polynomial $X^\ell-1$, so it is finite Galois. There is a primitive $\ell$th root $\zeta$ there: any root other than $1$ has order $\ell$, and such roots exist because the polynomial has $\ell$ distinct roots. Since $F'=F(\zeta)$, the action $\sigma(\zeta)=\zeta^{u_\sigma}$ embeds the Galois group into $(\mathbb Z/\ell\mathbb Z)^\times$. Hence $F'/F$ is abelian. It is local by [F7]. Apply steps 1.2–2.1 over $F'$ to divide every element of $K_n^M(F')$ by $\ell$. Given $w\in K_n^M(F)$, choose $u\in K_n^M(F')$ with $Nu=w$ by [F5], then choose $v$ with $\ell v=u$. We have $\ell Nv=w$. This proves surjectivity over $F$ without any assertion about restriction injectivity. [A1, F3, F5, F6, F7, step 1.2, step 2.1, construct, algebra]

4.1 Finite sums of symbols and the prime factorizations in step 1.2 now prove that multiplication by every positive integer is surjective on $K_n^M(F)$. This extends the tame divisibility already supplied by [F2] to full divisibility. However, a zero multiplication quotient gives no conclusion about its kernel. Apart from the equal-characteristic $p$ inverse [F4], injectivity is not proved here. In particular [F3] supplies a divisible Moore kernel, not a torsion-free one. The original full unique-divisibility Statement and AC/DC hypotheses are unchanged, and the conjunction remains held. [A1, F2, F3, F4, step 1.2, step 2.1, step 3.1, algebra]

5.1 The injectivity limitation recorded in step 4.1 concerns the divisibility argument in steps 1.2–4.1 alone; [F8] now supplies an independent tame inverse. If $\operatorname{char}F=p$, write any $r\ge1$ as $r=p^a s$, where $a\ge0$ and $s\ge1$ is prime to $p$. Multiplication by $p^a$ is a bijection by composing the two-sided inverse in [F4] $a$ times, and multiplication by $s$ is a bijection by [F8]. Their composite is multiplication by $r$, so every such map is bijective. Together with step 1.1 this proves the full Statement for equal-characteristic fields. In mixed characteristic, [F8] proves bijectivity for every $r$ prime to $p$, while step 4.1 proves surjectivity for every $r\ge1$. The only remaining injectivity obligation is multiplication by $p$: if it were injective, its powers and their composites with all tame bijections would be injective, hence bijective by step 4.1. This includes $p=2$; neither a divisible Moore kernel nor a zero quotient supplies this missing injectivity. The full Statement over all fields remains held. [A1, F4, F8, step 1.1, step 4.1, algebra] ∎

## Unresolved

Uncountability and full divisibility remain locally proved. The accepted tame inverse [F8], combined with the accepted equal-characteristic residue-$p$ inverse [F4], now proves the full original conclusion in equal characteristic by step 5.1. In mixed characteristic, all prime-to-$p$ multiplications are bijective and all positive multiplications are surjective. The precise remaining obligation is injectivity of multiplication by the residue prime $p$ on $K_n^M(F)$ for $n\ge3$, including $p=2$. The cyclic $K_2$ norm-kernel proof in the Fesenko–Vostokov IX.4.8–4.11 route invokes, when $\mu_p\subset F$, the assertion that every $p$-torsion class is $\{\zeta_p,a\}$. IX.4.5 explicitly states this without proof. Neither $K_2/p$, all-root annihilation, nor divisibility of the Moore kernel classifies that torsion or proves higher $p$-injectivity. The new tame proof does not assert wild $p$-purity. No counterexample or open-problem classification is claimed; the full mixed-characteristic assertion remains held until a complete argument is supplied.

The alternate Weibel VI §7 route needs local motivic-comparison, cohomological-dimension and duality proofs. In the distinct torsion research packet the actual VI.7.1 proof and relevant III.6 passages of an existing full PDF were read; no whole-VI reading or theorem import is claimed. The book's general cyclic Hilbert90 is itself omitted. No primary complete Tate/Suslin/Merkurjev proof was recovered in that bounded search. The original six paperzz403 attempts and separate official-author404 history remain unchanged. Full higher unique divisibility remains held.
