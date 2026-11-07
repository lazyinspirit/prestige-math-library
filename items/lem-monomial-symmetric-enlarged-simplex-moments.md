---
dependency_level: 3
id: lem-monomial-symmetric-enlarged-simplex-moments
kind: lemma
title: Exact monomial-symmetric full and truncated simplex moments
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-maynard-simplex-monomial-integrals
- thm-riemann-fubini-on-product-rectangles
- thm-multidimensional-riemann-criterion
justified_by: []
proof_strategy: direct
axiom_use: Finite arithmetic and proper Riemann integrals; no choice hypothesis is added.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes
    url: https://arxiv.org/pdf/1407.4897v4
    locator: Sections7.1–7.2, printedpp55–60; Lemma7.2 beta moments and §7.2 changed-simplex binomial expansion
---

## Statement

A signature $\alpha$ is a finite multiset of positive integers; $|\alpha|$ is its sum and $\ell(\alpha)$ its length. Let $P_\alpha(t_1,\ldots,t_d)$ be the sum over DISTINCT exponent vectors with nonzero exponent multiset $\alpha$ (zero if $\ell(\alpha)>d$), and $P_\varnothing=1$. For $d\ge1$, $A>0$, $0<B\le A$, $p\ge0$ integer and signatures $\alpha,\beta$, put $q=d+|\alpha|+|\beta|$. Define $T_d(\alpha,\beta)$ by summing $\prod_i(u_i+v_i)!$ over the exponent vectors defining $P_\alpha,P_\beta$. Then
$$\int_{\sum t_i\le A}(A-\sum t_i)^pP_\alpha P_\beta=\frac{p!A^{q+p}T_d(\alpha,\beta)}{(q+p)!},\tag{1}$$
$$\int_{\sum t_i\le B}(A-\sum t_i)^pP_\alpha P_\beta=T_d(\alpha,\beta)\sum_{v=0}^p\binom pv(A-B)^{p-v}\frac{v!B^{q+v}}{(q+v)!}.\tag{2}$$
An alternative expression for (2) is
$$\frac{T_d(\alpha,\beta)}{(q-1)!}\sum_{j=0}^p\binom pj(-1)^j A^{p-j}\frac{B^{q+j}}{q+j}.\tag{3}$$
Here $t_i\ge0$ in each domain. Two finite formulas for $T_d$ are given in the proof. For $d\ge2$, $s=A-\sum_{i<d}t_i$ and $a\ge0$ integer, the coordinate marginal is
$$\int_0^s(s-u)^aP_\alpha(t_1,\ldots,t_{d-1},u)\,du=\sum_{h\in\{0\}\cup\operatorname{supp}\alpha}\frac{a!h!}{(a+h+1)!}s^{a+h+1}P_{\alpha\setminus h}(t_1,\ldots,t_{d-1}),\tag{4}$$
where deleting $0$ does nothing and each distinct positive value $h$ is used ONCE. All boundary zero extensions, sections and the displayed marginals are Riemann integrable; $0^0=1$ in the finite formulas.

## Facts & Assumptions

**Given:** The data in the Statement. All integrals are proper Riemann integrals of zero extensions to enclosing rectangles.

[F1] [[lem-maynard-simplex-monomial-integrals]] proves the exact monomial beta moment on the unit simplex, including its Riemann boundary argument and one-dimensional beta identity.

[F2] [[thm-riemann-fubini-on-product-rectangles]] permits iterated integrals when the function and its sections are Riemann integrable; [[thm-multidimensional-riemann-criterion]] gives the Darboux criterion.

## Proof

1.1 Temporarily label the $r=\ell(\alpha)$ and $s=\ell(\beta)$ occurrences. Put $\mu_\alpha=\prod_h m_\alpha(h)!$. For a labelled partial matching $M$ between these two lists let $h=|M|$. Exactly $r+s-h$ distinct coordinates are used. Thus, with $(d)_n=0$ for $n>d$, one has the explicit finite formula [given, algebra]
$$T_d(\alpha,\beta)=\frac1{\mu_\alpha\mu_\beta}\sum_M(d)_{r+s-|M|}\prod_{a\text{ unmatched}}a!\prod_{b\text{ unmatched}}b!\prod_{(a,b)\in M}(a+b)!.\tag{5}$$
Indeed each embedding pair determines its shared-coordinate matching, and its union labels admit $(d)_{r+s-h}$ injections. Each coordinate contributes the indicated factorial. Forgetting equal-occurrence labels counts each exponent-vector pair exactly $\mu_\alpha\mu_\beta$ times. This proves (5), including empty lists and overfull lengths. [given, algebra]

1.2 Independently let $C_l(\alpha,\beta)$ be the factorial-weighted embedding sum into $l$ labelled coordinates, none unused by both lists. Its finite recurrence is [given, algebra]
$$C_0(\varnothing,\varnothing)=1,\quad C_0(\alpha,\beta)=0\text{ otherwise},\qquad C_l(\alpha,\beta)=\sum_{\substack{u\in\{0\}\cup\operatorname{supp}\alpha,\ v\in\{0\}\cup\operatorname{supp}\beta\\(u,v)\ne(0,0)}}(u+v)!C_{l-1}(\alpha\setminus u,\beta\setminus v).\tag{6}$$
Choose the exponents at the first labelled coordinate to prove this recurrence: choosing one distinct value gives precisely one exponent assignment, regardless of its multiplicity in the remaining multiset. Choosing the $l$ used coordinates gives $T_d=\sum_{l=0}^{\ell(\alpha)+\ell(\beta)}\binom dl C_l$. No multiplicity factor belongs in (6). [given, algebra]

2.1 Scale each exponent-vector monomial to the unit simplex in [F1]. Its value is $p!A^{q+p}\prod_i(u_i+v_i)!/(q+p)!$. Finite summation proves (1). Expand $A-\sum t=(A-B)+(B-\sum t)$ by the finite binomial theorem and apply (1) at $B$ to prove (2). For (3), the cumulative monomial moment at radius $r$ is $T_dr^q/q!$. Differences at successive radii give the same integral for radial step functions. Uniform step approximation to the polynomial radial weight $(A-r)^p$ is permitted by the Darboux criterion [F2]. Its limiting radial integral is $T_d\int_0^B(A-r)^pr^{q-1}\,dr/(q-1)!$. Finite binomial expansion and power integration yield (3). Here $q\ge1$, so there is no singular radial endpoint. [F1, F2, step 1.1, algebra]

3.1 Split exponent vectors by their last coordinate: $P_\alpha(t,u)=P_\alpha(t)+\sum_{h\in\operatorname{supp}\alpha}u^hP_{\alpha\setminus h}(t)$. Every vector has exactly one such last exponent; repeated parts do not produce additional choices. The one-dimensional beta identity in [F1], scaled by $u=sv$, gives $\int_0^s(s-u)^au^hdu=a!h!s^{a+h+1}/(a+h+1)!$ for $s>0$. Both sides vanish for $s=0$, since $a+h+1\ge1$. This proves (4). [F1, step 2.1, algebra]

4.1 Each integrand is polynomial except at finitely many coordinate/oblique boundary faces. On a grid of mesh $\delta$ a face meets cells of total volume $O_{d,A}(\delta)$: fixing all but one coordinate leaves only $O_d(1)$ intervals meeting its threshold. Away from these cells polynomial uniform continuity gives arbitrarily small Darboux gaps. Thus all extensions are integrable by [F2]; the same argument applies to each section and the piecewise polynomial marginals in (4) and their squares. Fubini in [F2] therefore applies to all finite expansions used above. The formulas hold at empty signatures and $A=B$ with the stated $0^0$ convention, completing all assertions. [F1, F2, step 2.1, step 3.1, algebra] ∎

## Source notes


**Statement adaptation:** Generalizes the source symmetric polynomial moment calculation into explicit arbitrary-signature Riemann identities, with two finite combinatorial cross-moment recurrences locally proved rather than asserted in the paper. The actual source reading and local proof boundary are recorded in `source-reading-and-barriers.json`; this is not a claim of verbatim source wording or an external theorem input.
