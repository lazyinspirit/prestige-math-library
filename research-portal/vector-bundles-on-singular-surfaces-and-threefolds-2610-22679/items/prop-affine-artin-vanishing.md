---
id: prop-affine-artin-vanishing
kind: proposition
title: Affine étale vanishing and the actual localized evaluation
status: published
domain: mathematics
deps:
  - math:def-axiom-of-choice
  - lem-author-dcdf962edbda-qcqs-site
  - lem-author-58e57d689702-coefficient-trivialization
  - lem-author-58e57d689702-independent-gamma
  - lem-author-58e57d689702-topweight-map
  - lem-author-58e57d689702-evaluation-equivalence
  - lem-author-58e57d689702-affine-vanishing
  - def-derived-sections-on-sites
  - def-etale-tate-coefficients
  - def-motivic-cohomology
  - math:def-affine-scheme
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:def-canonical-truncation-of-a-complex
  - math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology
dependency_roles:
  math:def-axiom-of-choice: mathematical-premise
  lem-author-dcdf962edbda-qcqs-site: mathematical-premise
  lem-author-58e57d689702-coefficient-trivialization: mathematical-premise
  lem-author-58e57d689702-independent-gamma: mathematical-premise
  lem-author-58e57d689702-topweight-map: mathematical-premise
  lem-author-58e57d689702-evaluation-equivalence: mathematical-premise
  lem-author-58e57d689702-affine-vanishing: mathematical-premise
  def-derived-sections-on-sites: mathematical-premise
  def-etale-tate-coefficients: mathematical-premise
  def-motivic-cohomology: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs: mathematical-premise
  math:def-canonical-truncation-of-a-complex: mathematical-premise
  math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: v1, p. 6, proof of Proposition 2.6
      statement: The characteristic-zero proof uses affine Artin vanishing in degrees
        at least four and compares the weight-three cdh quotient with localized
        truncated constant-coefficient étale sections, to obtain degree-five
        vanishing. This is article context, not an additional premise of the
        replacement proof.
      hypotheses: The article application has an affine threefold over an
        algebraically closed field of characteristic zero and a prime p.
      reading_limits: Freshly read the complete Proposition 2.6 proof in the frozen
        article text, including the displayed localization comparison. No new
        PDF-based author-defect verification is claimed. Milne 1980 and BEM25
        were not read.
    - title: Elden Elmanto, Zero cycles on singular varieties, Oberwolfach Report
        36/2025
      url: https://ems.press/content/serial-article-files/52244
      locator: Theorem 3(1) and footnote 1, printed p. 1994; Theorem 4 and its proof,
        printed p. 1995 (PDF pages 46-47)
      statement: Theorem 3(1) identifies the invertible-prime motivic quotient with
        localized truncated étale sections. Theorem 4 makes the canonical
        motivic-to-syntomic comparison an equivalence in weights at least the
        dimension; footnote 1 identifies the invertible-prime target with
        Tate-twisted étale cohomology.
      hypotheses: For Theorem 4, X is finite type over an algebraically closed field,
        the weight j is at least dim X, and p is prime. Only the
        invertible-prime case is applied, with j=3 and dim X at most three.
      reading_limits: Freshly read the primary PDF extraction of Theorem 3(1),
        footnote 1, Theorem 4 and its proof. Only the invertible-prime
        conclusions are used through the existing comparison suppliers. No
        underlying Artin, descent or rigidity proof was reconstructed; no visual
        PDF inspection is claimed.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes, arXiv:2309.08463v1
      url: https://arxiv.org/pdf/2309.08463v1
      locator: Section 2.1, p. 11; section 3.3, pp. 14-15, Theorem 3.5(3); Theorems
        4.10(4), p. 21, and 4.24(3), p. 28; Theorem 4.33(1) and its proof, p. 31
      statement: The finite-coefficient motivic-to-cdh equivalence and Theorem 3.5(3)
        give gamma. The proof of 4.33(1) factors the canonical étale map through
        this comparison and the truncation-induced localized map. Theorem
        4.33(1) itself asserts a cofiber supported above the weight, not the
        full top-weight equivalence.
      hypotheses: F is Q or a prime finite field, X is qcqs over F, j is nonnegative,
        and the positive coefficient integer is invertible in F. Theorem 4.10(4)
        treats characteristic zero; 4.24(3) inverts the positive characteristic
        before taking prime-to-characteristic coefficients.
      reading_limits: Freshly read the primary v1 PDF extraction at the listed
        sections and theorem clauses, including the complete proof of 4.33(1).
        Only these imported interfaces are used; their substantial construction
        and descent proofs are not reconstructed. No visual inspection is
        claimed.
    - title: J. S. Milne, Lectures on Etale Cohomology, version 2.21, 22 March 2013
      url: https://www.jmilne.org/math/CourseNotes/LEC.pdf
      locator: Section 15, Theorem 15.1 and preceding definition, p. 105; Schemes with
        nilpotents, p. 22
      statement: Theorem 15.1 bounds étale cohomological dimension by the dimension
        for affine varieties over an algebraically closed field. The p. 22
        passage gives equivalence of étale-scheme categories under a nilpotent
        closed thickening. The nonreduced affine application is supplied by the
        existing affine-vanishing chain, rather than by attributing that
        extension to Theorem 15.1 alone.
      hypotheses: The affine bound concerns varieties over an algebraically closed
        field. Here the coefficient is the constant sheaf Z/p with p invertible
        in the field. Nilpotent invariance requires a closed subscheme defined
        by a nilpotent ideal; reduction of a finite-type affine scheme over a
        field has this property.
      reading_limits: Freshly read the primary PDF extraction of the
        cohomological-dimension definition, Theorem 15.1, and the
        nilpotent-thickening passage. The full Artin proof, its SGA source, and
        Milne 1980 were not read or reconstructed. No fresh duality-source
        judgment is made.
dependency_level: 17
---

## Statement
Assume the Axiom of Choice and the fixed universe and site-size bounds of the supplied derived-localization constructions. Let $k$ be algebraically closed, $X/k$ affine of finite type with $\dim X\leq3$, and $p$ an invertible prime. Then $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a\geq4$. Let $F$ be the prime subfield of $k$. Use the site of all qcqs $F$-schemes in the fixed universe, with topology generated by Nisnevich covers and abstract blowup families whose closed immersion and proper morphism are finitely presented. Write $L^F_{\mathrm{cdh}}=L^{o,F}_{\mathrm{cdh}}$ for ordinary $D(\mathbb Z)$-valued cdh sheafification. The natural map induced by truncation is an equivalence:
$$(L^F_{\mathrm{cdh}}\tau^{\leq3}R\Gamma_{\mathrm{et}}(-,\mathbb Z/p))(X)\xrightarrow{\sim}R\Gamma_{\mathrm{et}}(X,\mathbb Z/p).$$
For this affine $X$, its left side has $H^5=0$. The evaluation equivalence itself holds for every finite-type $X/k$ of dimension at most three, including nonaffine $X$. Thus the full characteristic-zero affine-threefold application in Proposition 2.6 is retained. Localization is on the entire qcqs prime-field site; the equivalence is asserted at these evaluation objects, without asserting a global equivalence on that site.

## Statement references
[[lem-author-dcdf962edbda-qcqs-site]]

[[lem-author-58e57d689702-evaluation-equivalence]]

[[lem-author-58e57d689702-affine-vanishing]]

## Facts & Assumptions
[A1] The Axiom of Choice and the fixed universe and site-size bounds are inherited by the finite-coefficient locality, slice localization and derived-evaluation constructions. [[math:def-axiom-of-choice]]

**Given:** The field, prime, scheme and size conventions of the statement; affineness is needed for the cohomological vanishing, while the evaluation comparison only needs finite type and dimension at most three.

**Goal:** Establish the actual evaluation equivalence and the affine $H^a$ and localized $H^5$ vanishings.

[F1] [[lem-author-dcdf962edbda-qcqs-site]] fixes the entire qcqs prime-field cdh site and its finitely presented abstract blowup generators.

[F2] [[lem-author-58e57d689702-coefficient-trivialization]] compares constant and weight-three Tate coefficients on the slice over $X$, commutes restriction with ordinary localization including its units, and identifies the actual induced maps at $X$.

[F3] [[lem-author-58e57d689702-independent-gamma]] supplies the full canonical equivalence $\gamma_X:\mathbb Z(3)_{\mathrm{mot}}(X)/p\simeq(L^F_{\mathrm{cdh}}\tau^{\leq3}B_3)(X)$, where $B_3=R\Gamma_{\mathrm{et}}(-,\mu_p^{\otimes3})$. Independently, [[lem-author-58e57d689702-topweight-map]] supplies the full canonical equivalence $\beta_X:\mathbb Z(3)_{\mathrm{mot}}(X)/p\simeq B_3(X)$ and the identity $\beta_X=\epsilon_X^{(3)}\gamma_X$ for the actual map $\epsilon_X^{(3)}$ induced by truncation. Both equivalences apply to finite-type $X/k$ with $\dim X\leq3$ without affineness, smoothness or reducedness.

[F4] [[lem-author-58e57d689702-evaluation-equivalence]] packages cancellation and the coefficient change as the exact constant-coefficient evaluation equivalence for ordinary source sheafification, with the same Choice and size hypotheses.

[F5] [[lem-author-58e57d689702-affine-vanishing]] supplies the affine Artin bound $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a>\dim X$, including singular and nonreduced affine finite-type schemes.


[F6] [[def-derived-sections-on-sites]] defines $D(\mathbb Z)$, $R\Gamma_{\mathrm{et}}$ and its cohomology $H^a_{\mathrm{et}}$. Use the small étale site and the constant ring sheaf $\mathbb Z/p$, rather than the constant presheaf, as specified by [[def-etale-tate-coefficients]]; that definition also supplies $\mu_p^{\otimes3}$ and its chosen-root identification. [[def-motivic-cohomology]] defines the restricted Elmanto–Morrow complex and its finite coefficients: $C/p=C\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p$, equivalently the cofiber of multiplication by $p$.

[F7] [[math:def-canonical-truncation-of-a-complex]] defines the kernel truncation $\tau^{\leq3}$ and its natural map. [[math:lem-canonical-truncation-is-a-complex-and-has-the-claimed-cohomology]] makes it functorial and invariant under quasi-isomorphism, so it is defined objectwise on derived presheaves. The Statement of [F2]'s supplier defines the ordinary reflector, slice topology and restriction functor, and supplies the unit-compatible localization comparison; no identification with hypercompletion is used.

[F8] Use the algebraically closed field, invertible-prime and dimension conventions explicitly stated in [F3]'s top-weight supplier, including $\dim\varnothing=-\infty$. Affineness means being isomorphic as a locally ringed space to the spectrum of a commutative ring equipped with its structure sheaf, as in [[math:def-affine-scheme]]. [[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]] specifies finite type for the structure morphism $X\to\operatorname{Spec}k$ and proves that every such $X$ is qcqs, without separatedness or reducedness. The prime-field site and evaluation on representatives are those of [F1].

## Proof
1.1 Work first with any finite-type $X/k$ of dimension at most three. By [F8] it is qcqs, so [F1] gives its representative-based evaluation on the entire prime-field site. By [F3], $\beta_X=\epsilon_X^{(3)}\gamma_X$, and both $\beta_X$ and $\gamma_X$ are full equivalences. Cancellation gives $\epsilon_X^{(3)}=\beta_X\gamma_X^{-1}$ as an equivalence of the actual source maps. Choose a primitive $p$th root in $k$. By [F2], its slice coefficient equivalence conjugates this twisted map to the constant-coefficient map displayed in the statement, compatibly with the ordinary localization units and the truncation of [F7]. Equivalently this is the precise cancellation result [F4]. It holds for nonaffine as well as affine $X$ in this dimension range. The root is used only over $X$; no root in $F$ or change to a dimension-bounded localization site is required. [given, A1, F1, F2, F3, F4, F6, F7, F8, choose]

2.1 If $X$ is affine, [F5] gives $H^a_{\mathrm{et}}(X,\mathbb Z/p)=0$ for $a>\dim X$, hence for every $a\geq4$. Taking $H^5$ in the equivalence of step 1.1, with the cohomology convention of [F6], gives zero on its left side since $5>\dim X$. This includes the characteristic-zero affine threefold used in the original Proposition 2.6. [given, A1, F5, F6, step 1.1] ∎

## External input
The full canonical top-weight equivalence in [F3] is imported through its named supplier from [the report, Theorem 4](https://ems.press/content/serial-article-files/52244), in the invertible-prime case. [Elmanto–Morrow v1, proof of Theorem 4.33(1)](https://arxiv.org/pdf/2309.08463v1) records the comparison factorization used by those suppliers; its theorem alone gives a cohomological range and is not the source of the stronger full equivalence. The affine Artin and nilpotent-invariance inputs are documented in [Milne, Theorem 15.1 and p. 22](https://www.jmilne.org/math/CourseNotes/LEC.pdf), with the nonreduced extension supplied through [F5]. These established inputs are not reproved here. The two numbered steps locally compose the declared interfaces, so this proposition is not marked as a wholly imported result.

## Source and scope notes
The characteristic-zero affine-threefold application is the one in [the article, p. 6, proof of Proposition 2.6](https://arxiv.org/abs/2610.22679v1). The original article's passage from affine Artin vanishing to a global truncation equivalence on the entire qcqs site remains a historically recorded proof-step gap; it is not newly adjudicated here. The present proof instead establishes the needed evaluation comparison before using the affine vanishing bound. The report's characteristic-prime square and its Remark 5 duality display are not premises here. The substantial published comparisons and Artin theorem retain the reading limits recorded above; this draft supplies no new proof or acceptance of those theorems.
