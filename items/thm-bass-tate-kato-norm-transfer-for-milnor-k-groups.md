---
id: thm-bass-tate-kato-norm-transfer-for-milnor-k-groups
kind: theorem
title: "Norm transfer on Milnor K-groups for finite field extensions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps:
  - def-milnor-k-group-of-a-field
  - def-milnor-boundary-map-for-a-discrete-valuation
  - thm-bass-tate-residue-sequence-for-rational-function-fields
  - def-field-norm-and-trace
  - def-axiom-of-choice
  - lem-presented-simple-extension-milnor-transfer
  - lem-normal-prime-degree-milnor-transfer-and-residue-exchange
  - lem-finite-field-extension-p-primary-reduction-and-tensor-branches
justified_by: []
proof_strategy: direct
axiom_use: >-
  Full AC is retained literally. The residue-exchange proof uses complete
  valued fields and their countable-choice completion/norm suppliers.
  The reduction uses finite Sylow subgroups and Artinian tensor lengths;
  it does not assume canonical transfer before proving independence.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, 2nd ed., Chapter IX, §§2–3, Theorem (3.8)"
      url: "https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf"
      locator: "Printed pp. 293–301; construction from the Bass–Tate exact sequence and proof of independence, transitivity, projection formula, and K1 specialization."
    - title: "J. Milnor, Introduction to Algebraic K-Theory, Chapter 15"
      url: "https://www.math.uchicago.edu/~may/REU2015/REUPapers/Milnor.pdf"
      locator: "Transfer construction and norm compatibility for Milnor K-groups."
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $L/F$ be a finite extension of fields and
let $n\ge0$. There is a
homomorphism, called the Milnor norm or transfer,
$N_{L/F}:K_n^M(L)\to K_n^M(F)$, natural under field isomorphisms and
characterized by the Bass–Tate construction from the residue sequence for
rational function fields. It is a $K_*^M(F)$-module map (the projection
formula). For every intermediate field $F\subseteq M\subseteq L$ it satisfies
$N_{L/F}=N_{M/F}\circ N_{L/M}$; on $K_0^M(L)=\mathbb Z$ it is multiplication
by $[L:F]$, on $K_1^M(L)=L^\times$ it is the field norm
$N_{L/F}(a)=\det_F(x\mapsto ax)$, and
$N_{L/F}\circ j_{F/L}=[L:F]$ on $K_n^M(F)$. If $L/F$ is finite Galois, then
$j_{F/L}\circ N_{L/F}=\sum_{\sigma\in\operatorname{Gal}(L/F)}\sigma_*$.

## Statement references

[[def-milnor-k-group-of-a-field]]

[[def-milnor-boundary-map-for-a-discrete-valuation]]

[[thm-bass-tate-residue-sequence-for-rational-function-fields]]

[[def-field-norm-and-trace]]

[[def-axiom-of-choice]]

[Fesenko–Vostokov, *Local Fields and Their Extensions*, 2nd ed., IX §§2–3](https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf)

[J. Milnor, *Introduction to Algebraic K-Theory*, Chapter 15](https://www.math.uchicago.edu/~may/REU2015/REUPapers/Milnor.pdf)

## Facts & Assumptions

**Given:** The finite extension $L/F$, degree $n\ge0$, and AC in the Statement.

[F1] Presented simple transfers have projection, degree, determinant $K_1$ norm, and the coefficient-extension formula with multiplicities. [[lem-presented-simple-extension-milnor-transfer]]

[F2] Normal prime-degree transfers are canonical and obey the genuine residue comparison and exchange square with every presented simple extension. [[lem-normal-prime-degree-milnor-transfer-and-residue-exchange]]

[F3] Coefficient extension of a chosen tower is the sum over local Artinian tensor factors, weighted by their lengths. Finite coprime $p$-reduction makes every branch residue field admit a normal degree-$p$ tower. Over a normal closure every chosen tower has the same embedding sum with inseparable multiplicity. [[lem-finite-field-extension-p-primary-reduction-and-tensor-branches]]

[F4] Milnor field maps and products act entrywise on symbols. [[def-milnor-k-group-of-a-field]]

[A1] Full AC is assumed, including the completion choices in [F2]; no DC-only or choice-free assertion for the complete proof is inferred. [[def-axiom-of-choice]]

## Proof

**Proof technique:** establish tower independence using normal-prime exchange, Artinian tensor multiplicities and finite coprime reduction, then deduce the original norm laws.

**Given:** The data above.

1.1 For a chosen finite generating list $\boldsymbol\alpha$ of $L/F$, compose the presented transfers in its simple tower, obtaining $T_{\boldsymbol\alpha}$. Such a list is supplied by any finite vector-space basis. For any finite extension $U/V$ and any one such chosen tower, [F1] gives $Tj=[U:V]$ on classes from $V$, by successively multiplying the simple degrees. It also gives projection for that chosen composite. These identities concern a specified tower only; they are not tower independence. [F1, F4, given, construct, algebra]

2.1 First let $E/D$ admit a fixed chain $D=K_0\subset K_1\subset\cdots\subset K_r=E$ of normal degree-$p$ extensions, and let $D=E_0\subset\cdots\subset E_s=E$ be any simple-generator tower with $E_i=E_{i-1}(\gamma_i)$. Form the finite grid $H_{ij}=E_iK_j$ inside $E$. Its horizontal maps are presented transfers for $\gamma_i$; each vertical extension $H_{i,j}/H_{i,j-1}$ is normal of degree one or $p$, because it is a base extension of $K_j/K_{j-1}$. Every cell commutes by [F2], with an identity square if that prime extension becomes trivial. Explicitly its two maps from $H_{ij}$ to $H_{i-1,j-1}$ are the lower horizontal transfer after the right vertical norm and the left vertical norm after the upper horizontal transfer. Swap these adjacent segments one cell at a time. The right boundary $H_{s,j}=E$ and top boundary $H_{i,r}=E$ have identity maps; therefore the bottom horizontal composite $T_{\boldsymbol\gamma}$ equals the left vertical composite of the fixed normal-prime norms. The empty-chain case is the identity field. Thus any two chosen generator towers agree for every $E/D$ admitting such a chain, without a canonical nonprime norm being used in a cell. [F1, F2, step 1.1, construct, algebra]

2.2 Now compare two arbitrary lists $\boldsymbol\alpha,\boldsymbol\beta$ for $L/F$ on a class $x$, and put $\delta=T_{\boldsymbol\alpha}x-T_{\boldsymbol\beta}x$. Choose a finite normal $M/F$ containing all conjugates of $L$, as in [F3]. The last assertion of [F3] gives identical restrictions of these two images to $M$, retaining the common inseparable multiplicity even when the tensor product is nonreduced. Apply the degree identity of step 1.1 for one chosen tower of $M/F$. It gives $[M:F]\delta=0$. This is only a finite torsion bound, not an assertion that restriction is integrally injective. [F1, F3, step 1.1, construct, algebra]

3.1 For each prime $p$ dividing $[M:F]$, choose the finite $D_p/F$ of degree $d_p$ prime to $p$ supplied by [F3] for $L/F$. In $L\otimes_F D_p=\prod_bB_b$, the factors, their residue fields $E_b$ and lengths $m_b$ are independent of the generator list. By [F3], restriction of each chosen tower map to $D_p$ is the sum of the branch composites times $m_b$ and the same entrywise restrictions to $E_b$. Each $E_b/D_p$ admits a normal degree-$p$ chain; hence the two branch composites agree by step 2.1. Thus $j_{F/D_p}\delta=0$, and a chosen degree map as in step 1.1 gives $d_p\delta=0$. The integers $[M:F]$ and all these finitely many $d_p$ have gcd one: any prime common divisor would divide $[M:F]$ but not its own $d_p$. Bezout therefore gives $\delta=0$. If $[M:F]=1$, step 2.2 already does. This proves integral tower independence in every degree, with no rationalization or chosen-tower shortcut. Define $N_{L/F}$ to be this common map. [F1, F2, F3, A1, step 1.1, step 2.1, step 2.2, construct, algebra]

4.1 Projection and $N_{L/F}j=[L:F]$ now follow from step 1.1. Concatenate any chosen generating tower of $M/F$ with one of $L/M$ for an intermediate field $M$; step 3.1 identifies its composite with $N_{L/F}$, proving transitivity. On $K_0$ each simple map multiplies by its degree, so the total is $[L:F]$. On $K_1$ the simple maps are determinant norms by [F1]; determinant norms compose in a finite tower. Explicitly for an invertible matrix over an intermediate field, the determinant of its underlying base-field matrix is the field norm of its intermediate determinant: finite Gaussian elimination reduces this to shears, diagonal matrices and permutations; shears contribute $1$, a diagonal entry contributes its multiplication determinant, and swapping two intermediate-coordinate blocks contributes $(-1)^{[M:F]}=N_{M/F}(-1)$. Apply this identity to the multiplication matrix of an element of $L$ in an intermediate-field basis. Repeating through the tower proves the displayed determinant formula for the full norm, without assuming a primitive element for $L/F$. [F1, F4, step 1.1, step 3.1, algebra]

5.1 A field isomorphism transports a chosen simple tower and its minimal polynomials. On each step, the residue symbol formula commutes with applying that isomorphism to coefficients and entries, at finite points and at infinity. The unique negative-infinity component defining the presented map consequently commutes with it. Composing and invoking step 3.1 proves naturality for $N_{L/F}$. If $L/F$ is Galois, take $M=L$ in the embedding-sum assertion of [F3]. Its inseparable degree is $1$, giving $j_{F/L}N_{L/F}=\sum_{\sigma\in\operatorname{Gal}(L/F)}\sigma_*$. Finally any family satisfying the simple Bass–Tate construction and transitivity must, on a chosen generator tower, be exactly its composite; step 3.1 proves that composite independent of the choice. This supplies the claimed characterization and every law of the unchanged Statement under its literal AC assumption. [F1, F3, F4, A1, step 3.1, step 4.1, algebra] ∎


## Remarks

This proof establishes canonical finite-field Milnor transfer. It does not establish the wild local $K_2$ quotient, the mixed-characteristic Tate $p$-torsion assertion, Moore's full divisible kernel, or unique divisibility of higher local Milnor groups. Those remain separate proof obligations. The complete normal-prime exchange supplier explicitly proves its arbitrary-residue complete-DVR lattice and norm prerequisites and its rational-function completion decomposition; neither a finite-residue degree theorem nor an imported reciprocity theorem replaces those arguments.
