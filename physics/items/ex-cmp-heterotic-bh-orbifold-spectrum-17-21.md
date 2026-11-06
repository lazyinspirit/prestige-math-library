---
id: ex-cmp-heterotic-bh-orbifold-spectrum-17-21
kind: example
title: A solvable heterotic quintic orbifold spectrum at the Gepner point
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 3
domain: physics
library: physics
category: string-theory
deps:
  - def-cmp-geometric-orbifold-compactification-data
dependency_roles:
  def-cmp-geometric-orbifold-compactification-data: formulation-prerequisite
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Vladimir Belavin, The Complete Massless Singlet Spectrum in the Free-Field Construction of Heterotic Strings on Calabi–Yau Orbifolds, arXiv:2607.19289v2"
      url: "https://arxiv.org/pdf/2607.19289v2"
      locator: "§§3–5, PDF pp. 4–7: Shapovalov-rank multiplicities, twist/field-identification and mutual-locality rules, and the (17,21) orbifold spectrum."
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Source-specific exact heterotic free-field/Gepner-point state count for the stated solvable orbifold. It is not transported to a generic large-radius locus or generalized to other orbifolds."
---

## Example

In the free-field heterotic construction of the Berglund–Hübsch quintic orbifold with $G=\langle(1,1,1,1,1),(0,1,1,4,4)\rangle\subset(\mathbb Z_5)^5$ and Hodge numbers $h^{2,1}=17$, $h^{1,1}=21$, the source computes $17$ massless $E_6$ generations, $21$ antigenerations, and $234$ singlets. These are exact-model counts at the solvable orbifold/Gepner point, not generic large-radius geometric singlet counts. In the same source, the quintic Gepner point has $330$ singlets, whereas the geometric generic-locus count is $326$; the four-state difference is tied to enhanced $U(1)^4$ gauge symmetry at the solvable point.

## Example references

[[def-cmp-geometric-orbifold-compactification-data]]

## Facts & Assumptions

**Given:** The exact free-field model and orbifold group $G=\langle\beta_0,\beta_1\rangle\subset(\mathbb Z_5)^5$, with $\beta_0=(1,1,1,1,1)$ and $\beta_1=(0,1,1,4,4)$, and the source's $k=3$ minimal-model and state-counting conventions.

[F1] [[def-cmp-geometric-orbifold-compactification-data]] specifies a conditional geometric orbifold package, including a compact Riemannian target, an isometric finite-group action and inducing worldsheet lift, all twisted sectors and compatible projections. The source-specific free-field spectrum below is not asserted to supply that geometric package; this interface is formulation context only, not a premise producing the counts.

[F2] Belavin §§3–5 (PDF pp. 4–7) gives the exact representation labels, left field-identification formula, mutual-locality rule, Shapovalov ranks at grades $0,\tfrac12,1$, and the source-reported $17,21,234$ counts. The complete finite enumeration below reproduces those counts rather than treating the reported totals alone as proof.

[A1] The worldsheet state spaces and the specific free-field orbifold completion are adopted source-specific physical input. The count is not evidence for a generic geometric phase, and it does not prove universal modular invariance, higher-genus sewing, or an arbitrary quotient CFT.

## Verification

**Given:** [F1], the source-specific model data [F2], the group generators, and [A1].

1.1 The vectors $\beta_0$ and $\beta_1$ are linearly independent over $\mathbb Z_5$ because $\beta_1$ is not a scalar multiple of $\beta_0$. Hence $G$ has exactly $5^2=25$ elements, enumerated uniquely as $w=a\beta_0+b\beta_1$ for $a,b\in\{0,1,2,3,4\}$. Each of the five minimal-model factors has labels $(\ell,\bar t)$ with $0\le\ell\le3$ and $0\le\bar t\le\ell$, so there are $1+2+3+4=10$ labels per factor and $10^5\cdot25$ label/twist cases. [given, F2, algebra]

2.1 For each label tuple $(\ell_i,\bar t_i)_{i=1}^5$ and twist $w=a\beta_0+b\beta_1$, where $a,b\in\{0,1,2,3,4\}$, set $\bar q_i=\ell_i-2\bar t_i$, $\Delta_i=(\ell_i(\ell_i+2)-\bar q_i^2)/20$, and $t_i^L=(\bar t_i+w_i)\bmod5$. The left representation is $(\ell_i^L,q_i^L)=(\ell_i,\ell_i-2t_i^L)$ if $t_i^L\le\ell_i$, and $(\ell_i^L,q_i^L)=(3-\ell_i,3-\ell_i-2(t_i^L-\ell_i-1))$ otherwise. In both charged filters require the left factors to be chiral primaries, namely $q_i^L=\ell_i^L$ for every $i$ and $\sum_i\ell_i^L=5$, and require mutual locality $\sum_i(\beta_j)_i(\bar q_i-w_i)\equiv0\pmod5$ for each generator $\beta_j$. A $27$ generation additionally requires the right factors to be chiral primaries, $\bar t_i=0$ for every $i$, and right total conformal weight $\sum_i\Delta_i=1/2$. An antigeneration additionally requires right antichiral primaries, $\bar t_i=\ell_i$ for every $i$, and the same total weight $1/2$. The finite enumeration below finds $17$ and $21$ such sectors, respectively; each contributes one charged multiplet by the source rule in [F2]. [given, F1, F2, step 1.1, algebra]

3.1 For singlets, retain exactly those sectors satisfying the left chiral-primary filter and locality conditions of step 2.1. At each such sector choose one right state per factor from the Shapovalov table [F2]. For a primary $(\ell,\bar q)$ the allowed grade/charge-shift/multiplicity triples $(n,\delta;m)$ are $(0,0;1)$ always, $(\tfrac12,+1;m_+)$, $(\tfrac12,-1;m_-)$, and $(1,0;m_1)$, with rows $(0,0):(0,0,1)$, $(1,1),(2,2):(0,1,2)$, $(3,3):(0,1,1)$, $(1,-1),(2,-2):(1,0,2)$, $(3,-3):(1,0,1)$, $(2,0):(1,1,3)$, and $(3,\pm1):(1,1,2)$ for $(m_+,m_-,m_1)$. Retain products satisfying $\sum_i(\Delta_i+n_i)=1$ and $\sum_i(\bar q_i/5+\delta_i)=0$, weighting each product by the product of its five multiplicities. The source's unitary minimal-model rule excludes descendant grades above one, and the integer recurrence in Remarks evaluates this finite sum without floating-point comparisons. [F2, step 2.1, algebra]

4.1 The complete finite enumeration in Remarks gives $|G|=25$, $(N_{27},N_{\overline{27}})=(17,21)$, and singlet counts $53$ from one right chiral-factor $G^-_{-1/2}$ descendant, $65$ from one right antichiral-factor $G^+_{-1/2}$ descendant, and $116$ right primaries of total weight one and charge zero in nonidentity twisted sectors. It also verifies that the grade-one vacuum descendant contributes zero in this model. The sum is $53+65+116=234$, reproducing the source's exact-model count under the displayed filters. [F2, step 1.1, step 2.1, step 3.1, algebra]

5.1 The reported counts use the selected free-field worldsheet data in [A1] and [F2]. They do not instantiate the complete geometric orbifold package of [F1] or infer its target realization from a spectrum. The source's 234 count belongs to this exact solvable model. Its separate 330-versus-326 quintic comparison concerns the Gepner point versus the generic geometric locus and does not alter the 234 count or extend it to the full moduli space. [given, F1, F2, A1, step 4.1] ∎

## Remarks

The geometric orbifold interface is used only to identify the conditional worldsheet data that the source-specific enumeration assumes. The source's final section also says an intrinsic proof of modular invariance of the construction remains a separate direction; this example does not fill that gap or promote a finite state count into a universal CFT-consistency theorem.

The following finite program is the reproducible enumeration used in step 4.1. It uses integer twentieths of conformal weight and integer fifths of charge, loops over all $10^5$ primary tuples and $25$ twists, and asserts the stated counts.

```python
from collections import defaultdict
from itertools import product

beta0 = (1, 1, 1, 1, 1)
beta1 = (0, 1, 1, 4, 4)
labels = [(ell, t) for ell in range(4) for t in range(ell + 1)]
rank = {
    (0, 0): (0, 0, 1),
    (1, 1): (0, 1, 2), (2, 2): (0, 1, 2), (3, 3): (0, 1, 1),
    (1, -1): (1, 0, 2), (2, -2): (1, 0, 2), (3, -3): (1, 0, 1),
    (2, 0): (1, 1, 3), (3, 1): (1, 1, 2), (3, -1): (1, 1, 2),
}
twists = {
    tuple((a * beta0[i] + b * beta1[i]) % 5 for i in range(5))
    for a in range(5) for b in range(5)
}
assert len(twists) == 25

n27 = nanti = 0
singlets = minus = plus = primaries = grade_one = 0
physical_sectors = 0
for primary_tuple in product(labels, repeat=5):
    ell = [x[0] for x in primary_tuple]
    tbar = [x[1] for x in primary_tuple]
    qbar = [ell[i] - 2 * tbar[i] for i in range(5)]
    d20 = [ell[i] * (ell[i] + 2) - qbar[i] ** 2 for i in range(5)]

    for a in range(5):
        for b in range(5):
            w = [(a * beta0[i] + b * beta1[i]) % 5 for i in range(5)]
            tleft = [(tbar[i] + w[i]) % 5 for i in range(5)]
            left = []
            for i in range(5):
                if tleft[i] <= ell[i]:
                    left.append((ell[i], ell[i] - 2 * tleft[i]))
                else:
                    tprime = tleft[i] - ell[i] - 1
                    left.append((3 - ell[i], 3 - ell[i] - 2 * tprime))
            left_chiral = all(q == l for l, q in left) and sum(l for l, q in left) == 5
            local = all(
                sum(beta[i] * (qbar[i] - w[i]) for i in range(5)) % 5 == 0
                for beta in (beta0, beta1)
            )
            if not (left_chiral and local):
                continue
            physical_sectors += 1
            if all(tbar[i] == 0 for i in range(5)) and sum(d20) == 10:
                n27 += 1
            if all(tbar[i] == ell[i] for i in range(5)) and sum(d20) == 10:
                nanti += 1

            counts = {(0, 0): 1}
            for i in range(5):
                mplus, mminus, mone = rank[(ell[i], qbar[i])]
                choices = [(0, 0, 1)]
                if mplus:
                    choices.append((10, 1, mplus))
                if mminus:
                    choices.append((10, -1, mminus))
                if mone:
                    choices.append((20, 0, mone))
                updated = defaultdict(int)
                for (weight20, charge5), count in counts.items():
                    for grade20, delta, multiplicity in choices:
                        total_weight = weight20 + d20[i] + grade20
                        if total_weight <= 20:
                            updated[(total_weight, charge5 + qbar[i] + 5 * delta)] += count * multiplicity
                counts = updated
            singlets += counts.get((20, 0), 0)

            for delta, sign in ((-1, "minus"), (1, "plus")):
                for i in range(5):
                    mplus, mminus, _ = rank[(ell[i], qbar[i])]
                    multiplicity = mminus if delta == -1 else mplus
                    if multiplicity and sum(d20) + 10 == 20 and sum(qbar) + 5 * delta == 0:
                        if sign == "minus":
                            minus += multiplicity
                        else:
                            plus += multiplicity
            if sum(d20) == 20 and sum(qbar) == 0:
                if a != 0 or b != 0:
                    primaries += 1
            if sum(d20) == 0 and sum(qbar) == 0 and any(rank[(ell[i], qbar[i])][2] for i in range(5)):
                grade_one += sum(rank[(ell[i], qbar[i])][2] for i in range(5))

assert (n27, nanti) == (17, 21)
assert (singlets, minus, plus, primaries, grade_one) == (234, 53, 65, 116, 0)
assert physical_sectors == 505
```
