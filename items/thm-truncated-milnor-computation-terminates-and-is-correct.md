---
id: thm-truncated-milnor-computation-terminates-and-is-correct
kind: theorem
title: Truncated Milnor computation terminates and matches peripheral quotients
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 7
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
    - title: John Milnor, Link Groups
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnorlink.pdf
      locator: §§3–5, PDF pp. 7–16, finite lower-central and Magnus-coefficient
        computation
    - title: Ryan Stees, Milnor’s Invariants for Knots and Links in Closed Orientable
        3-Manifolds
      url: https://scholarworks.iu.edu/iuswrrest/api/core/bitstreams/54c7d68f-d982-4e1f-9550-e54140ada5ea/content
      locator: §2.5, printed pp. 16–18 (PDF pp. 24–26), coefficient definition and
        quotient dependence
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

[F2] In either closed-link or string-link mode, compatible crossing meridians satisfy the stated source-to-target conjugation relation. For closed links, the exterior group is presented by these relations on Wirtinger arcs between underpasses. No presentation theorem for string-link groups is used here. [[lem-link-wirtinger-local-meridian-conjugacy]], [[thm-link-wirtinger-presentation-correctness]]

[F3] For compatible accesses the literal diagram word is the blackboard parallel, with its self-writhe correction giving the closed preferred longitude. For arbitrary accesses the exact formulas are $h_0x_j^kW_jh_1^{-1}$ for a string link and $h_jx_j^{-\operatorname{wr}_j}W_jh_j^{-1}$ for the closed preferred longitude. The access-word inputs record those differences. [[lem-link-peripheral-longitude-word-from-diagram]]

[F4] Component meridians generate each finite closed-link nilpotent quotient, and both string-link end inclusions identify the corresponding finite nilpotent quotients. [[lem-link-nilpotent-quotient-generated-by-component-meridians]], [[thm-string-link-nilpotent-peripheral-identifications]]

[F5] The Magnus expansion through degree $d$ factors through the quotient by $\Gamma_{d+1}$ and its coefficients are representative-independent. [[lem-magnus-commutator-degree-and-truncation]]

[F6] The coefficient and based residue outputs are those specified in the preceding definition. [[def-milnor-integer-and-residue-invariants]]

[F7] The lower-central convention is $\Gamma_{s+1}G=[G,\Gamma_sG]$, and Magnus series are multiplicative. [[def-lower-central-series-and-magnus-expansion-for-links]]

## Proof

**Given:** The algorithm input and the facts above.

1.1 Under [A1], the validation stage scans a finite diagram. The degree loop runs from $2$ to $d$, each component traversal visits finitely many undercrossings, and each multiplication, inverse, and truncation in $R_d$ involves only finitely many monomials of degree at most $d$. The output stage scans finitely many index sequences and their finitely many proper subsequences and cyclic permutations. Thus every loop is finite and the procedure terminates. [A1, F1, given, construct]

1.2 Use the algorithm's maximal Wirtinger arcs: all consecutive diagram edges through an overpass have one reference meridian and one series. The preliminary symbol substitution therefore preserves every compatible certificate word. At degree one every meridian on component $j$ is conjugate to its root meridian, so its expansion in root symbols is $1+X_j$. This is the initialization $Y_a^{(1)}$. If step 1 inserts a curl, the original underpass-free component had one cyclic arc and the new underpass cuts it into one interval arc. The supported isotopy transports its root, accesses, and all supplied words to that arc; every other arc is transported with the same symbol. Thus the post-curl certificates encode the same based data. [F1, F2, F4, given, construct]

2.1 Induct on $\ell$, starting from step 1.2. Choose free words for the preceding arc approximations, representing the true compatible meridians modulo $\Gamma_\ell G$. Start each component at its root word $x_j$, and follow its maximal arcs. At a nonclosing underpass, conjugate the current incoming word by the preceding over-word, with the sign prescribed by [F2]. Replacing the true over-meridian by a word congruent modulo $\Gamma_\ell G$ changes its conjugation of a meridian only modulo $[G,\Gamma_\ell G]=\Gamma_{\ell+1}G$, by [F7]. Induction along the traversal therefore makes every new arc word a lift of its true meridian modulo $\Gamma_{\ell+1}G$. Its expansion through degree $\ell$ uses the over-word only through degree $\ell-1$: a discrepancy of degree $\ell$ commutes with the constant term of the conjugated series and first contributes in degree $\ell+1$. Thus its expansion is exactly the algorithm's update. The lower degrees agree with the preceding pass by the same argument one degree lower. This proves that the output arc series are expansions of explicit compatible lift words, correct in $G/\Gamma_{d+1}G$. In string-link mode [F4] identifies those lifts uniquely in $F_r/\Gamma_{d+1}F_r$; in closed-link mode only the selected lift words are asserted, without assigning a Magnus expansion to an arbitrary element of the closed-link group. No global string-link presentation is needed. [F2, F4, F5, F7, step 1.2, algebra, induction]

3.1 By [F3], the ordered over-meridian product is the based string-link longitude or the closed blackboard parallel. In closed-link mode, the initial-meridian power removes its self-writhe. Substituting the arc lift words of step 2.1 gives explicit longitude lift words in $G/\Gamma_{d+1}G$; multiplicativity makes $\Lambda_j$ exactly their expansions through degree $d$. In string-link mode these are the unique bottom-end quotient classes by [F4]. [F3, F4, step 2.1]

4.1 In the arbitrary-choice branch, evaluating the finite transport words gives their actual compatible-coordinate expansions by step 2.1 and [F5]; when step 1 inserted a curl, these words have already been transported through the explicit old-to-new strand-symbol identification of step 1.2. The formulas of [F3] therefore give the actual selected longitude expansion before changing root variables. The actual root meridian is $g_jx_jg_j^{-1}$, so its series is $1+X_j+R_j$ with $R_j$ of degree at least two. Substitution of two letter systems agreeing through degree $s$ into $R_j$ gives results agreeing through degree $s+1$, since each monomial has at least two letters. Hence the displayed iteration improves the inverse equation by one degree at each pass, starting correctly at degree one. At pass $d$ it solves $Z_j+R_j(Z)=V_j$ exactly in the truncated ring. The same degree argument proves uniqueness, and consequently also the other composition identity. Thus it is the inverse formal change from compatible to actual meridian coordinates. This also agrees with the group-theoretic change on the finite nilpotent quotient: substitution by the conjugates has identity degree-one map and induces an isomorphism on each finite free nilpotent quotient: apply the arbitrary-basing branch of [F4] to the trivial string link, whose compatible endpoint group is $F_r$, with these exact independently conjugated meridians. Its Magnus series satisfies the same unique inverse equations. The corrected-and-substituted series is therefore exactly the longitude expansion in the chosen actual symbols, including independently based endpoints and all supplied relative winding. No full-group free-basis assertion or unrecorded access cancellation is used. [F3, F4, F5, step 2.1, step 3.1, construct, induction, algebra]

5.1 Under the stated axiom branch [A1], for $I=(i_1,\ldots,i_k,j)$ with $k\leq d$, [F5] says the coefficient of $X_{i_1}\cdots X_{i_k}$ depends only on the longitude class in $F_r/\Gamma_{k+1}$ and is independent of the chosen representative. In string-link mode, [F4] identifies that class uniquely via the bottom-end isomorphism. In closed-link mode, [F4] supplies the required component-meridian lift; the procedure uses the based lift determined by its root arcs and traversal. Thus the coefficient read from $\Lambda_j$ is exactly the based coefficient in [F6]. [A1, F4, F5, F6, step 3.1, step 4.1]

6.1 In closed-link mode, each lower coefficient used for $\Delta_I^b$ is computed by the same procedure at its own finite degree; the finite gcd and quotient operation are exactly those in [F6]. Hence the returned indeterminacy and residue candidate are correct for the selected based word-lift data. The theorem asserts no independence of those choices; that is the separate basing theorem. [F1, F6, step 5.1] ∎
