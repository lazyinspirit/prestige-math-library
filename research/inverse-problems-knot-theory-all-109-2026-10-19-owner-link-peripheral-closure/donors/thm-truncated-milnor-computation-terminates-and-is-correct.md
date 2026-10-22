---
id: thm-truncated-milnor-computation-terminates-and-is-correct
kind: theorem
title: "Truncated Milnor computation terminates and matches peripheral quotients"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-axiom-of-choice
  - alg-truncated-milnor-invariants-from-based-diagram
  - def-lower-central-series-and-magnus-expansion-for-links
  - def-milnor-integer-and-residue-invariants
  - lem-magnus-commutator-degree-and-truncation
  - lem-link-nilpotent-quotient-generated-by-component-meridians
  - lem-link-peripheral-longitude-word-from-diagram
  - lem-link-wirtinger-local-meridian-conjugacy
  - thm-link-wirtinger-presentation-correctness
  - thm-string-link-nilpotent-peripheral-identifications
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "John Milnor, Link Groups"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf"
      locator: "§§3–5, PDF pp. 7–16, finite lower-central and Magnus-coefficient computation"
    - title: "Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable 3-Manifolds"
      url: "https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content"
      locator: "§2.5, printed pp. 16–18 (PDF pp. 24–26), coefficient definition and quotient dependence"
---

## Statement

Assume AC and let the based diagram, peripheral data, and maximum index length
$N\geq2$ satisfy the input conditions of the preceding algorithm. Put
$d=N-1$. The algorithm terminates after finitely many diagram, degree, and
monomial operations. In string-link mode, its output for each $I$ with
$2\leq|I|\leq N$ equals the integer coefficient of the based longitude in the
bottom-end quotient $F_r/\Gamma_{|I|}F_r$. In closed-link mode, its output
equals the based coefficient, gcd indeterminacy, and residue candidate defined
from the chosen peripheral word lifts. It makes no polynomial-time claim.

## Statement references

[Milnor, *Link Groups*, §§3–5](https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf)

[Stees, §2.5](https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content)

## Facts & Assumptions

**Given:** Full AC and a valid based diagram input with finite maximum length $N$.

[A1] Full AC, written AC, supplies the choice branch in the string-link quotient theorem and implies the countable-choice hypothesis for crossing and framing data. [[def-axiom-of-choice]], [[thm-string-link-nilpotent-peripheral-identifications]]

[F1] The procedure uses finitely many strand, crossing, degree, monomial, and subsequence scans. [[alg-truncated-milnor-invariants-from-based-diagram]]

[F2] Crossing meridians satisfy the stated source-to-target conjugation relation, and the link group is presented by these relations. [[lem-link-wirtinger-local-meridian-conjugacy]], [[thm-link-wirtinger-presentation-correctness]]

[F3] For compatible accesses the literal diagram word is the blackboard parallel, with its self-writhe correction giving the closed preferred longitude. For arbitrary accesses the exact formulas are $h_0x_j^kW_jh_1^{-1}$ for a string link and $h_jx_j^{-\operatorname{wr}_j}W_jh_j^{-1}$ for the closed preferred longitude. The access-word inputs record those differences. [[lem-link-peripheral-longitude-word-from-diagram]]

[F4] Component meridians generate each finite closed-link nilpotent quotient, and both string-link end inclusions identify the corresponding finite nilpotent quotients. [[lem-link-nilpotent-quotient-generated-by-component-meridians]], [[thm-string-link-nilpotent-peripheral-identifications]]

[F5] The Magnus expansion through degree $d$ factors through the quotient by $\Gamma_{d+1}$ and its coefficients are representative-independent. [[lem-magnus-commutator-degree-and-truncation]]

[F6] The coefficient and based residue outputs are those specified in the preceding definition. [[def-milnor-integer-and-residue-invariants]]

## Proof

**Given:** The algorithm input and the facts above.

1.1 Under [A1], the validation stage scans a finite diagram. The degree loop runs from $2$ to $d$, each component traversal visits finitely many undercrossings, and each multiplication, inverse, and truncation in $R_d$ involves only finitely many monomials of degree at most $d$. The output stage scans finitely many index sequences and their finitely many proper subsequences and cyclic permutations. Thus every loop is finite and the procedure terminates. [A1, F1, given, construct]

1.2 At degree one, every arc meridian on component $j$ maps to $1+X_j$: conjugate meridians have the same abelianization, and the component meridians are the chosen basis in the free source. This is exactly the initialization $Y_a^{(1)}$. [F2, F4, given]

2.1 Assume the series $Y_a^{(\ell-1)}$ correctly represent every strand meridian through degree $\ell-1$, and that $Y_s^{(\ell)}$ represents the source meridian through degree $\ell$. At a source-to-target crossing the group relation is $m_t=m_o^{-1}m_sm_o$; at a target-to-source crossing it is $m_s=m_om_tm_o^{-1}$ by [F2]. In a conjugation $Y_o^{-1}Y_sY_o$, replacing the over-series by another series with the same terms through degree $\ell-1$ changes the product only in degree at least $\ell+1$: the degree-$\ell$ discrepancy in $Y_o$ commutes with the constant term $1$ and first meets a positive-degree term of $Y_s$ in degree $\ell+1$. The two update formulas therefore give the correct target meridian through degree $\ell$. Induction over the finite spanning paths and then over $\ell=2,\ldots,d$ proves every assigned strand series is correct through degree $d$. [F2, step 1.2, algebra, induction]

3.1 By [F3], multiplying the ordered over-meridian factors gives the based string-link longitude or the closed-link blackboard parallel with its self-writhe correction. The arc-series just established make $\Lambda_j$ its Magnus expansion through degree $d$. [F3, step 2.1]

4.1 In the arbitrary-choice branch, evaluating the finite transport words gives their actual compatible-coordinate expansions by step 2.1 and [F5]. The formulas of [F3] therefore give the actual selected longitude expansion before changing root variables. The actual root meridian is $g_jx_jg_j^{-1}$, so its series is $1+X_j+R_j$ with $R_j$ of degree at least two. Substitution of two letter systems agreeing through degree $s$ into $R_j$ gives results agreeing through degree $s+1$, since each monomial has at least two letters. Hence the displayed iteration improves the inverse equation by one degree at each pass, starting correctly at degree one. At pass $d$ it solves $Z_j+R_j(Z)=V_j$ exactly in the truncated ring. The same degree argument proves uniqueness, and consequently also the other composition identity. Thus it is the inverse formal change from compatible to actual meridian coordinates. This also agrees with the group-theoretic change on the finite nilpotent quotient: substitution by the conjugates has identity degree-one map and induces an isomorphism on each finite free nilpotent quotient: apply the arbitrary-basing branch of [F4] to the trivial string link, whose compatible endpoint group is $F_r$, with these exact independently conjugated meridians. Its Magnus series satisfies the same unique inverse equations. The corrected-and-substituted series is therefore exactly the longitude expansion in the chosen actual symbols, including independently based endpoints and all supplied relative winding. No full-group free-basis assertion or unrecorded access cancellation is used. [F3, F4, F5, step 2.1, step 3.1, construct, induction, algebra]

5.1 Under the stated axiom branch [A1], for $I=(i_1,\ldots,i_k,j)$ with $k\leq d$, [F5] says the coefficient of $X_{i_1}\cdots X_{i_k}$ depends only on the longitude class in $F_r/\Gamma_{k+1}$ and is independent of the chosen representative. In string-link mode, [F4] identifies that class uniquely via the bottom-end isomorphism. In closed-link mode, [F4] supplies the required component-meridian lift; the procedure uses the based lift determined by its root arcs and traversal. Thus the coefficient read from $\Lambda_j$ is exactly the based coefficient in [F6]. [A1, F4, F5, F6, step 3.1, step 4.1]

6.1 In closed-link mode, each lower coefficient used for $\Delta_I^b$ is computed by the same procedure at its own finite degree; the finite gcd and quotient operation are exactly those in [F6]. Hence the returned indeterminacy and residue candidate are correct for the selected based word-lift data. The theorem asserts no independence of those choices; that is the separate basing theorem. [F1, F6, step 5.1] ∎
