---
id: thm-cft-2d-stress-modes-satisfy-virasoro
kind: theorem
title: Stress-tensor modes satisfy the Virasoro relation
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
deps:
  - def-cft-2d-stress-tensor-data
  - def-virasoro-algebra
justified_by: []
domain: mathematics
library: mathematics
dependency_roles:
  def-cft-2d-stress-tensor-data: mathematical-premise
  def-virasoro-algebra: mathematical-premise
axiom_use: "No choice principle is used; all sums and residues in each fixed coefficient calculation are finite."
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-05
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Paul Ginsparg, Applied Conformal Field Theory, Les Houches lectures (1988)"
      url: https://arxiv.org/pdf/hep-th/9108028
      locator: "§3.3, printed pp. 30–31 (PDF pp. 16–17), Eqs. (3.6)–(3.8a), the two-contour residue derivation."
    - title: "David Tong, String Theory, University of Cambridge Part III lecture notes (2009)"
      url: https://www.damtp.cam.ac.uk/user/tong/string/string.pdf
      locator: "§4.5.2, printed pp. 97–98 (PDF pp. 105–106), the nested-contour computation from the TT OPE."
---

## Statement

Let $\mathscr D$ be a complex vector space on which the holomorphic modes of stress-tensor data act as endomorphisms and leave $\mathscr D$ invariant. Assume the TT principal part and the nested radial contour-product prescription in the stress-data definition. Define $L_m=\operatorname{Res}_z z^{m+1}T(z)$ for every $m\in\mathbb Z$. Then, on $\mathscr D$,

$$
[L_m,L_n]=(m-n)L_{m+n}+\frac{c}{12}(m^3-m)\delta_{m+n,0}I.
$$

With the Virasoro convention specified in the supplier definition, the operators $L_m$ and central action $C\mapsto cI$ satisfy its defining bracket. The conclusion is conditional on the declared OPE, common domain, and contour-product rule; it does not construct stress data or assert analytic convergence.

## Facts & Assumptions

**Given:** The stress-tensor modes on a common invariant domain, the TT principal part with central scalar $c$, and the nested residue rule.

[F1] [[def-cft-2d-stress-tensor-data]]: The mode realization is the formal coefficient array $\mathsf T(z)=\sum_{k\in\mathbb Z}t_kz^{-k-2}$ with $t_k\in\operatorname{End}_{\mathbb C}(\mathscr D)$, the specified injective map to the weak dual, and scalar Laurent/smearing compatibility. Thus $L_m=\operatorname{Res}_z z^{m+1}\mathsf T(z)=t_m$ is an endomorphism, not a residue of an arbitrary distribution. The TT principal part is $c/(2(z-w)^4)+2T(w)/(z-w)^2+\partial_wT(w)/(z-w)$, and the contour prescription is $[L_m,L_n]=\operatorname{Res}_w w^{n+1}\operatorname{Res}_{z=w}z^{m+1}T(z)T(w)$.

[F2] [[def-virasoro-algebra|Virasoro algebra in the $L_m$ convention]]: The defining bracket is $[L_m,L_n]=(m-n)L_{m+n}+(m^3-m)\delta_{m+n,0}C/12$, with $C$ central; central charge $c$ means $C$ acts as $cI$.

[A1] All displayed mode products and nested residues are defined on the same invariant domain $\mathscr D$; no boundary or contact term modifies the declared contour rule.

## Proof

**Given:** Integers $m,n$, [F1]–[F2], and the common-domain assumption [A1].

1.1 Use the compatible formal representative in [F1], so every coefficient and mode product lies in $\operatorname{End}_{\mathbb C}(\mathscr D)$. Substitute the three singular terms from [F1] into the nested residue. In the inner residue, expand $z^{m+1}=\sum_{k\ge0}\binom{m+1}{k}w^{m+1-k}(z-w)^k$; only $k=3,1,0$ contribute to the fourth-, second-, and first-order poles respectively. [given, F1, A1, algebra]

2.1 The second-order pole contributes $2(m+1)\operatorname{Res}_w w^{m+n+1}T(w)=2(m+1)L_{m+n}$. The simple pole contributes $\operatorname{Res}_w w^{m+n+2}\partial_wT(w)=-(m+n+2)\operatorname{Res}_w w^{m+n+1}T(w)=-(m+n+2)L_{m+n}$, because $\operatorname{Res}_w\partial_w(w^{m+n+2}T(w))=0$ coefficientwise. Their sum is $(m-n)L_{m+n}$. [step 1.1, algebra]

2.2 The fourth-order pole contributes $\frac c2\binom{m+1}{3}\operatorname{Res}_w w^{m+n-1}I$. Since $\operatorname{Res}_w w^q=1$ exactly for $q=-1$ and is $0$ otherwise, this is $\frac c2\binom{m+1}{3}\delta_{m+n,0}=\frac c{12}(m^3-m)\delta_{m+n,0}I$. The polynomial identity holds for every integer $m$ using $\binom{m+1}{3}=(m+1)m(m-1)/6$. [step 1.1, algebra]

3.1 Adding steps 2.1–2.2 gives the stated mode commutator. Comparing with [F2] identifies the central action as $C\mapsto cI$ and verifies precisely the Virasoro bracket in the fixed convention. [F2, step 2.1, step 2.2, algebra] ∎
