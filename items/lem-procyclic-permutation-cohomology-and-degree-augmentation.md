---
dependency_level: 2
id: lem-procyclic-permutation-cohomology-and-degree-augmentation
kind: lemma
title: Procyclic permutation cohomology and the degree augmentation
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-dependent-choice
- lem-cyclic-group-cohomology-norm-and-inflation
- lem-continuous-profinite-cochains-commute-with-directed-colimits
- thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
justified_by: []
proof_strategy: direct
axiom_use: AC is assumed throughout; it covers the finite-dimensional and compactness
  choices. DC and supplied resolutions are used only where cohomology is invoked.
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: J. S. Milne, Arithmetic Duality Theorems, second edition, Appendix A.7;
      locally reconstructed intermediates
    url: https://www.jmilne.org/math/Books/ADTnot.pdf
    locator: Printed pp.131–132, full actual A.7 proof read. Finite-field Jacobian,
      augmentation and local comparison details are proved in the local bodies, not
      imported from its omitted end-zero or identification sentence.
  - title: J. S. Milne, Class Field Theory, version4.03, ChapterII §3
    url: https://www.jmilne.org/math/CourseNotes/CFT.pdf
    locator: Lemma3.3 and Proposition3.4, printed pp.80–81; direct cyclic-resolution/coordinate
      proofs are supplied locally.
verification: {}
---

## Statement

Assume AC and DC. Let $\Gamma=\widehat{\mathbb Z}$ with its specified topological generator $\phi$. For $d\ge1$, let $P_d=\bigoplus_{i=0}^{d-1}\mathbb Ze_i$ with $\phi e_i=e_{i+1}$ modulo $d$, and let $\epsilon_d:P_d\to\mathbb Z$ send every $e_i$ to $1$. Then
$$H^1_{\mathrm{cts}}(\Gamma,P_d)=H^3_{\mathrm{cts}}(\Gamma,P_d)=0,\qquad
H^2_{\mathrm{cts}}(\Gamma,P_d)\cong\mathbb Q/\mathbb Z.$$
For a finite quotient $C_n$ with $d\mid n$, the coordinate is
$$H^2(C_n,P_d)=\mathbb Z/(n/d)\mathbb Z,\qquad
a\longmapsto a/(n/d)\pmod{\mathbb Z}.$$
The map induced by $\epsilon_d$ on $H^2$ is the identity on these $\mathbb Q/\mathbb Z$ coordinates, where the coordinate on $H^2(\Gamma,\mathbb Z)$ is evaluation of inverse Bockstein at $\phi$.

For any set-indexed direct sum $P=\bigoplus_{v}P_{d_v}$, the corresponding $H^2$ is the direct sum of these coordinates, its $H^1,H^3$ vanish, and $\sum_v\epsilon_{d_v}$ induces the sum of coordinates, without degree weights.

## Statement references

[[def-axiom-of-choice]]

[[def-dependent-choice]]

[[lem-cyclic-group-cohomology-norm-and-inflation]]

[[lem-continuous-profinite-cochains-commute-with-directed-colimits]]

[[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

## Facts & Assumptions

**Given:** AC, DC, and the objects and cohomology conventions in the Statement.

[F1] The direct cyclic resolution gives positive even norm quotients and positive odd kernel quotients, including degrees one and three. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[F2] Continuous cohomology is the finite-quotient direct limit with actual coefficient maps under AC/DC. [[thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients]]

[F3] For compact profinite groups, continuous cochains and cohomology commute with directed colimits of discrete coefficient modules, including noninjective transitions. [[lem-continuous-profinite-cochains-commute-with-directed-colimits]]

[F4] Inflation from cyclic order $n$ to $an$ multiplies degree-two representatives by $a$. [[lem-cyclic-group-cohomology-norm-and-inflation]]

[A1] AC supplies compactness of $\widehat{\mathbb Z}$ and DC for the declared cohomology convention. [[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** direct finite-dimensional construction.

**Given:** The data above.

1.1 The action on $P_d$ factors through $C_d$, so in [F2] the quotients $C_n$ with $d\mid n$ are cofinal. Put $s=e_0+\cdots+e_{d-1}$. The fixed subgroup is $\mathbb Zs$, and $N_ne_i=(n/d)s$. Thus [F1] gives $H^2(C_n,P_d)=\mathbb Z/(n/d)\mathbb Z$, represented by $as$. Also $\ker N_n$ consists of coordinate vectors with sum zero, which is exactly $(\phi-1)P_d$; differences of consecutive basis vectors generate that kernel. Hence all positive odd finite-level groups vanish. [A1, F1, F2, given, algebra]

1.2 Inflation $C_n\to C_{an}$ sends the representative $b$ to $ab$ by [F4]. The fractions $b/(n/d)$ are therefore preserved under these injective transitions, and their union over multiples of $d$ is $\mathbb Q/\mathbb Z$. This proves the continuous coordinates and the odd vanishings by [F2]. [F2, F4, step 1.1, algebra]

2.1 At order $n$, augmentation sends $bs$ to $db$, so its degree-two map is $b\bmod(n/d)\mapsto db\bmod n$. After normalization,
$$\frac{db}{n}=\frac{b}{n/d}.$$
For the trivial module $\mathbb Z$, the cocycle that is $1$ on a cyclic carry and $0$ otherwise is the coboundary of the rational lift $i\mapsto i/n$. For $n>1$, the low-degree comparison from the periodic resolution to normalized bar chains sends the degree-one generator to $[\phi]$ and the degree-two generator to $\sum_{i=0}^{n-1}[\phi^i\mid\phi]$: its boundary is $N_n[\phi]$, and the carry cocycle evaluates to $1$ on that sum. Thus the periodic representative $1\bmod n$ has exactly the $1/n$ inverse-Bockstein/Frobenius coordinate, with positive sign. At $n=1$ both degree-two groups are zero. Thus augmentation induces the identity on the stated coordinates, rather than multiplication by $d$. [F1, F2, step 1.2, algebra]

3.1 Finite direct sums commute with the cochain differential and with cohomology. The full sum $P$ is the directed union of its finite partial sums, all discrete continuous modules. By [F3] its cohomology is the direct sum of the finite partial cohomologies. The augmentation is the sum of the individual augmentations, so step 2.1 proves the final assertion. Empty sums give zero; $d=1$ gives the trivial module with the same normalization. [A1, F3, step 1.2, step 2.1, algebra] ∎
