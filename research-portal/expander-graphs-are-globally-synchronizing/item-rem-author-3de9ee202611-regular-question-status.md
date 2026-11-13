---
title: Historical regular-graph synchronization question and subsequent
  negative-resolution claims
status: draft
research_item: rem-author-3de9ee202611-regular-question-status
dependency_level: 7
sources:
  references:
    - title: Expander graphs are globally synchronizing
      url: https://static1.squarespace.com/static/5436e695e4b07f1e91b30155/t/6991d638ab1b273169a7becd/1771165240824/expander-graphs-are-globally-synchronizing.pdf
      locator: PDF p. 39, Section 7, first paragraph
      reading_limits: The supplied original PDF page 39 was read as extracted text and
        a page image for this assignment. This supports historical attribution
        only, not proof of the expectation.
      statement: Section 7 expresses the expectation that random regular graphs
        synchronize for fixed degree at least three, relates this to
        connectivity, and says the starting lemmas give no useful bounds below
        degree 66.
      hypotheses: Historical expectation and limitation of the article’s amplification
        starting estimates for random fixed-degree regular graphs; this is not a
        proved degree-three conclusion.
    - title: Matthew J. Colbrook, Random cubic graphs admit nonsynchronized stable
        Kuramoto equilibria (11 September 2026)
      url: https://github.com/ajt60gaibb/OpenProblemsInNLA/blob/c8a2b995bf46d55991b938441be462403afef435/references/colbrook-discrepancy-2026-09-11/manuscripts/MD-06.pdf
      locator: Theorem 1, p. 2; Lemma 2 and Sections 3–4, pp. 2–6; packaging note p. 1
      reading_limits: The supplied eight-page manuscript text was read for the
        theorem, energy convention, construction and scope; page 2 was visually
        checked. Sections 2–4 and their cited interfaces were inspected for this
        status comparison, without a complete independent proof acceptance.
        Supplementary programs were not executed; no external peer review or
        formal certification is asserted.
      statement: Theorem 1 claims that for uniformly random labelled simple cubic
        graphs on even n at least four, the probability that every local minimum
        of the unit-coupling Kuramoto energy is synchronized tends to zero. More
        strongly, with probability tending to one there is a nonsynchronized
        critical point with uniformly positive edge cosines and Hessian positive
        definite on the mean-zero subspace.
      hypotheses: Uniform labelled simple 3-regular graph on {1,...,n}, even n at
        least four, n tending to infinity through even orders; phases in (R/(2
        pi Z))^n; energy summed once over unordered edges, with unit attractive
        couplings. The stronger conclusion concerns the Hessian transverse to
        common rotations.
    - title: MD-06 repository status and submission record
      url: https://github.com/ajt60gaibb/OpenProblemsInNLA/blob/main/matrix-discrepancy-and-optimization/MD-06/README.md
      locator: Resolution dated 11 September 2026; linked submission record
      reading_limits: The repository README and its linked submission record were read
        via the live pages for this assignment. Their agent-review claims are
        attributed reports only; no review verdict or program execution is
        inherited.
      statement: The repository labels MD-06 solved with a negative resolution dated
        11 September 2026, reports two independent agent reviews, and expressly
        distinguishes these from external human peer review and formal
        proof-assistant certification.
      hypotheses: A report of the repository’s status and review claims for the
        uniform labelled simple cubic graph problem, not an adoption of its
        proof or review verdicts.
    - title: Carvallo, Groisman and Mitsche, Random 3-regular graphs are not globally
        synchronizing, v1
      url: https://arxiv.org/pdf/2610.09135v1
      locator: Definition 1.1 and Theorem 1.2, pp. 1–2
      reading_limits: The supplied v1 PDF extracted pages 1–3 were read for the model,
        definition, theorem and overview; the page 2 theorem was visually
        checked. The rest of its proof was not checked.
      statement: Definition 1.1 uses convergence to synchrony from a uniform phase
        state with probability one. Theorem 1.2 claims that the probability that
        a uniformly random simple 3-regular graph on 2n labelled vertices is not
        globally synchronizing tends to one.
      hypotheses: Uniform simple cubic graph on an even number 2n of labelled
        vertices, n tending to infinity; homogeneous Kuramoto dynamics with unit
        couplings on the phase torus, in a rotating frame. This describes the
        retained v1 claim of a subsequently withdrawn paper.
    - title: arXiv:2610.09135v2 withdrawal record
      url: https://arxiv.org/abs/2610.09135v2
      locator: Submission history and Comments, 10 October 2026
      reading_limits: The live version-specific arXiv record was read for submission
        dates, withdrawn status, lack of a v2 PDF and stated reason. No
        correctness guarantee or identified mathematical error follows from this
        record.
      statement: The record lists v1 submitted on 6 October 2026 and v2 withdrawn on
        10 October 2026; the authors give an existing GitHub solution and lack
        of added value as their reason. Version 2 has no PDF.
      hypotheses: Version-specific arXiv status and author-provided withdrawal
        explanation, not a mathematical error finding or a correctness
        certificate.
    - title: Bordenave, A new proof of Friedman’s second eigenvalue theorem and its
        extension to random lifts
      url: https://arxiv.org/pdf/1502.04482v4
      locator: v4, p. 2, uniform simple graph model and Theorem 1
      reading_limits: The supplied v4 extracted pages 1–2 were read for the uniform
        simple model and Theorem 1, in comparison with Colbrook Section 4. The
        proof was not reconstructed; this is status bibliography only.
      statement: For fixed integer d at least three, a uniform simple d-regular graph
        has max(mu_2,abs(mu_n)) below 2 sqrt(d-1)+epsilon with probability
        tending to one for each epsilon>0, through orders with nd even (Theorem
        1).
      hypotheses: The distribution is uniform on simple d-regular graphs on {1,...,n};
        d is fixed, epsilon>0 is fixed, nd is even, and the graph space is
        nonempty. Only the interface cited by Colbrook is compared, not imported
        here as an accepted theorem premise.
    - title: Johnson, Exchangeable pairs, switchings, and random regular graphs
      url: https://arxiv.org/pdf/1112.0704v5
      locator: v5, p. 3, Section 2 and Proposition 1(a); p. 12, Theorem 11
      reading_limits: The supplied v5 extracted page 3 (Section 2, Proposition 1(a))
        and page 12 (Theorem 11) were read for model and precise hypotheses, in
        comparison with Colbrook Section 4. The proof was not reconstructed;
        this is status bibliography only.
      statement: Proposition 1(a) bounds the probability that a fixed subgraph H of
        K_n with minimum degree at least two and e edges is present by
        c_1(d-1)^e/n^e. Theorem 11 bounds total variation between cycle counts
        through r and independent Poisson variables of means (d-1)^k/(2k) by c_6
        sqrt(r)(d-1)^(3r/2-1)/n.
      hypotheses: Uniform simple d-regular graph; parity and feasibility as in Section
        2. Proposition 1(a) requires d<=n^(1/3) and e<=2 n^(1/10). Theorem 11
        states n>=1 and integers r,d>=3 whenever the model exists. Colbrook uses
        d=3 and fixed subgraph sizes and fixed cycle lengths before the graph
        order grows. Interface comparison only, not a theorem import.
    - title: "Colbrook MD-06 submission record: attribution, review boundaries and
        missing files"
      url: https://github.com/ajt60gaibb/OpenProblemsInNLA/blob/main/references/colbrook-discrepancy-2026-09-11/README.md
      locator: Results and boundaries; Original package and missing files
      statement: The record attributes the manuscript to Matthew J. Colbrook and
        reports agent checks separately from external human peer review or
        formal certification. It discloses absent supplementary programs and
        declines to adopt claims that those files were supplied or their tests
        ran; they are not premises of the asymptotic proof.
      hypotheses: A report of the submission package and its separately described
        review evidence; no reconstruction of missing files, novelty claim, or
        independent acceptance is implied.
      reading_limits: The supplied submission-record Markdown and the linked live
        record were read for attribution, review boundaries and missing-file
        disclosures. Review reports and programs were not independently executed
        or accepted.
---

PDF p. 39: ` Section 7, first paragraph `

## Prerequisites

- [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation)
- [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony)
- [def-expander-sync-random-regular-model](item-def-expander-sync-random-regular-model)
- [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers)
- [def-expander-sync-energy](item-def-expander-sync-energy)
- [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow)
- [lem-author-4f905b3f6478-positive-transverse-basin](item-lem-author-4f905b3f6478-positive-transverse-basin)
- [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice)
- [` Matthew J. Colbrook, Random cubic graphs admit nonsynchronized stable Kuramoto equilibria (11 September 2026) · Theorem 1, p. 2; Lemma 2 and Sections 3–4, pp. 2–6; packaging note p. 1 `](https://github.com/ajt60gaibb/OpenProblemsInNLA/blob/c8a2b995bf46d55991b938441be462403afef435/references/colbrook-discrepancy-2026-09-11/manuscripts/MD-06.pdf)
- [` MD-06 repository status and submission record · Resolution dated 11 September 2026; linked submission record `](https://github.com/ajt60gaibb/OpenProblemsInNLA/blob/main/matrix-discrepancy-and-optimization/MD-06/README.md)
- [` Carvallo, Groisman and Mitsche, Random 3-regular graphs are not globally synchronizing, v1 · Definition 1.1 and Theorem 1.2, pp. 1–2 `](https://arxiv.org/pdf/2610.09135v1)
- [` arXiv:2610.09135v2 withdrawal record · Submission history and Comments, 10 October 2026 `](https://arxiv.org/abs/2610.09135v2)
- [` Bordenave, A new proof of Friedman’s second eigenvalue theorem and its extension to random lifts · v4, p. 2, uniform simple graph model and Theorem 1 `](https://arxiv.org/pdf/1502.04482v4)
- [` Johnson, Exchangeable pairs, switchings, and random regular graphs · v5, p. 3, Section 2 and Proposition 1(a); p. 12, Theorem 11 `](https://arxiv.org/pdf/1112.0704v5)
- [` Colbrook MD-06 submission record: attribution, review boundaries and missing files · Results and boundaries; Original package and missing files `](https://github.com/ajt60gaibb/OpenProblemsInNLA/blob/main/references/colbrook-discrepancy-2026-09-11/README.md)


## Historical question

For every fixed $d\ge3$, is a uniformly random $d$-regular graph globally synchronizing with high probability as the number of vertices grows?

Here graphs follow [def-expander-sync-graph-notation](item-def-expander-sync-graph-notation), the uniform labelled simple model follows [def-expander-sync-random-regular-model](item-def-expander-sync-random-regular-model), and high probability means probability tending to one through feasible orders as in [def-expander-prereq-asymptotic-quantifiers](item-def-expander-prereq-asymptotic-quantifiers). Global synchronization has exactly the almost-every-initial-state rotating-frame meaning in [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony).

## Source history

The question and positive expectation are preserved from the original article, Section 7, PDF p. 39, first paragraph. That passage associates $d\ge3$ with the regular-graph connectivity threshold and describes $d\ge66$ as a limitation of its starting estimates. These are historical source reports, not a current claim that the question is open.

Colbrook's manuscript dated 11 September 2026, Theorem 1 (p. 2), claims that, for uniformly random labelled simple cubic graphs on even $n$, the probability that every local minimum of the homogeneous Kuramoto energy is synchronized tends to zero. Its stronger assertion supplies, with probability tending to one, a nonsynchronized critical point with positive edge cosines and Hessian positive definite on the mean-zero subspace. The repository labels this a negative resolution and reports independent agent checks; its submission record explicitly distinguishes those checks from external human peer review and formal certification. Missing supplementary programs are disclosed there and are not claimed to have been run here.

Carvallo, Groisman and Mitsche's arXiv:2610.09135v1 (6 October 2026), Theorem 1.2 (p. 2), claims directly that random simple cubic graphs are not globally synchronizing with probability tending to one. The version-specific record inspected here is v2, withdrawn on 10 October 2026. Its stated reason is the prior GitHub solution and lack of added value. Withdrawal for that stated reason is neither a disproof nor an independent verification of either argument; the retained v1 must not be presented as an unwithdrawn latest paper.

## Applicability and verification limits

For the dynamical comparison assume countable choice, as in [math:def-countable-choice](https://alphabetamath.cc/item/def-countable-choice) and [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony). The cubic manuscript's graph law, even-order limit, phase torus and unit edge couplings agree with the cubic specialization of the historical question. Its unordered-edge energy equals $\mathcal E_G$ in [def-expander-sync-energy](item-def-expander-sync-energy): in a simple graph each edge appears twice in that definition's ordered-pair sum, cancelling the factor $1/2$. The energy is smooth, being a finite sum of smooth cosine differences, and invariant under common rotation because those differences are unchanged. By [prop-expander-sync-gradient-flow](item-prop-expander-sync-gradient-flow), its negative gradient is exactly the homogeneous rotating-frame dynamics.

The manuscript's stronger assertion gives a nonsynchronized critical point $q$ with Hessian positive on $\mathbf1^\perp$, rather than merely an arbitrary local minimum. Common rotation preserves every phase difference, so no rotation of $q$ is synchronized. Thus the smooth rotation-invariant energy and $q$ meet the hypotheses of [lem-author-4f905b3f6478-positive-transverse-basin](item-lem-author-4f905b3f6478-positive-transverse-basin): the nonsynchronous rotation orbit attracts a nonempty open set of positive phase volume. This obstructs the almost-every-initial-state convergence in [def-expander-sync-global-synchrony](item-def-expander-sync-global-synchrony). Consequently, if the asserted stronger existence conclusion is established, it addresses the intended dynamical question; the weaker bare local-minimum wording alone should not be silently substituted for it.

The manuscript's Sections 2–4 and the actual statements/model assumptions of its Bordenave and Johnson inputs were inspected. This status note does not certify a complete independent proof, reconstruct those external theorems, or establish the existence claim as a logical supplier. Independent scientific acceptance of the negative-resolution arguments remains unresolved here. The accurate present description is a historical question with explicit, applicable negative-resolution claims: neither continued worldwide openness nor independently established resolution is asserted by this note. A cubic negative resolution, if established, answers the universal $d\ge3$ expectation negatively; it gives no conclusion for each remaining degree.

## Source notes

The statement-bearing source records support attribution and status reporting; their negative-resolution claims are not adopted as theorem premises. The conditional dynamical implication uses the declared mathematical suppliers. The original question remains visible in full. This remark supplies no proof of the conjecture or its negation and is not an open-problem proof supplier. The original article is attribution only; no error in it is asserted from a later claimed resolution.
