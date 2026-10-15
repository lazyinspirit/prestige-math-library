---
id: pthm-td-entropy-under-product-comparison
kind: physics-theorem
title: Entropy representation for finite separated products
status: published
origin: pipeline
domain: physics
library: physics
physical_scope: An order representation for a possibly infinite primitive family and its finite products and joins under the adopted contact assumptions; the entropy is dimensionless until an independent physical calibration fixes its unit.
deps: [def-axiom-of-choice, def-td-scaled-products-and-comparison, def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, post-td-accessibility-a1-a6, post-td-simple-system-geometric-axioms, post-td-thermal-join-axioms, thm-tdmath-conditional-contact-calibrator, thm-tdmath-arbitrary-family-calibration]
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-td-scaled-products-and-comparison: formulation-prerequisite
  post-td-accessibility-a1-a6: physical-assumption
  post-td-simple-system-geometric-axioms: physical-assumption
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  post-td-thermal-join-axioms: physical-assumption
  thm-tdmath-conditional-contact-calibrator: mathematical-premise
  thm-tdmath-arbitrary-family-calibration: mathematical-premise
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorems 2.2 and 4.8 and §IV.B
      url: https://arxiv.org/pdf/cond-mat/9708200v2
    - title: "André Thess, The Lieb–Yngvason Machine: A didactical tool for the definition of entropy in classical thermodynamics, §§2–4"
      url: https://www.dlr.de/de/tt/downloads/dokumente/institut/institutsleitung/Entropie.pdf/@@download/file
    - title: Goddard, The second law of thermodynamics as variation on a theme of Carathéodory, §§2–3
      url: https://escholarship.org/content/qt27k6m59q/qt27k6m59q.pdf
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
dependency_level: 14
---

## Statement

Let $I$ be a nonempty, possibly infinite set of primitive system labels. Assume the declared family includes every finite separated product and every finite thermal join of positive scaled copies. For every nonempty finite subset $F\subseteq I$, assume its closure under positive scaling and finite thermal joining satisfies the full hypotheses A1–A7, S1–S3, T1–T5 and C1 of [[thm-tdmath-conditional-contact-calibrator]], with the exact represented-state and preparation conventions of [[def-tdmath-forward-sector-hypotheses]] and [[def-tdmath-thermal-contact-hypotheses]]. The closure may be infinite; “finite” refers to the generators and to each individual product or join expression. These hypotheses concern one common declared physical endpoint relation, with its chart and join interpretations, not independently chosen orders on overlapping families. Also assume the explicit finite-factor representation and fully scalable preparation transport of [[def-td-scaled-products-and-comparison]] and the Axiom of Choice. Then there is a single dimensionless function $\widetilde S$ on all states of the declared finite-factor family that is additive under separation, extensive under every admitted positive scaling, and characterizes every equal-composition comparison:

$$ A\prec B\quad\Longleftrightarrow\quad \widetilde S(A)\le \widetilde S(B). $$

For each simple chart, A7 also makes $\widetilde S$ concave on every convex region where the stated recombination operation is admitted. The result does not set the entropy unit to $\mathrm{J\,K^{-1}}$, determine additive constants across different reaction compositions, or establish empirical validity of the contact assumptions.

## Facts & Assumptions

**Given:** The full contact branch on each finite set of generators and its join closure, A1–A6, A7, explicit finite-factor composition, and Choice.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets admits a choice function; the arbitrary-family calibration supplier uses it to select reference states and calibrators.

[A2] [[thm-tdmath-conditional-contact-calibrator]]: on a family of finite thermal joins satisfying the exact full contact hypotheses, every pair of simple types has a strict calibrator and comparison on every fixed finite composition of their scaled copies. No finiteness of the complete join-closed family is required.

[A3] [[thm-tdmath-arbitrary-family-calibration]]: for a nonempty finite-factor family containing a distinguished meter type with a fixed strict meter pair, a join-closed contact family satisfying the calibrator hypotheses, A1–A6 and Choice yield one calibrated additive extensive entropy representing every same-composition comparison on every finite compound.

[A4] [[post-td-simple-system-geometric-axioms]]: A7 admits the scaled recombination comparison $ (t x,(1-t)y)\prec t x+(1-t)y$ for $0<t<1$.

[A5] [[def-td-scaled-products-and-comparison]]: a separated compound has finitely many explicit tagged factors, and its scale coefficients and product identifications are declared.

[A6] [[post-td-thermal-join-axioms]]: T2 supplies a reversible separated split of every joined state. [[post-td-accessibility-a1-a6]] supplies spectator consistency, transitivity, positive scaling and reversible splitting of preparations.

[A7] [[def-tdmath-forward-sector-hypotheses]] and [[def-tdmath-thermal-contact-hypotheses]]: a type with finite primitive amount function $\nu_\Gamma$ has weight $w_\Gamma=\sum_i\nu_\Gamma(i)>0$, represented state $\mathsf J_\Gamma(x)=w_\Gamma e_{(\Gamma,x)}$, and interpretation of a raw coefficient $a$ as the amount $a/w_\Gamma$ of that typed preparation. Joined weights and compositions add; scaled weights multiply. Reversible transport preserves the chosen endpoint relation and tags remain distinct.

## Proof
**Given:** [A1]–[A7].

1.1 Construct the represented-state interpretation of [A7] directly: give each primitive label its unit amount function and each scaled or joined type its aggregate amount function; a raw coefficient $a$ at $(\Gamma,x)$ denotes the preparation $(a/w_\Gamma)x$. Finite sums denote separated preparations, and their mass and composition are the sums of these factor amounts. Pull back the common endpoint relation through this interpretation. The full-domain scaling and coherent transport in [A5], with A1–A6 and reversible splitting, supply the exact scaling and product conventions in [A7]; this construction is not an additional conclusion attributed to a pairwise comparison theorem. Every finite list of simple types has finitely many primitive generators, so the Statement's assumption supplies the complete contact branch on their join closure. Consequently [A2] applies to every pair, including a repeated primitive type, and [A3]'s whole-family hypotheses hold: each chart, pair, or finite comparison lies in one such closure with the same relation. [A2, A3, A5, A6, A7, given, construct]

2.1 Since $I$ is nonempty, choose a primitive meter label $m$. Apply [A2] on the closure generated by $\{m\}$ to obtain a strict meter pair $z_0\prec\prec z_1$. For each $j\ne m$, use the closure generated by $\{j,m\}$ to obtain $a_j\prec\prec b_j$ and $c_j\prec\prec d_j$ with $(a_j,d_j)\sim(b_j,c_j)$, the calibrator orientation required by [A3]. Choice [A1] supplies the simultaneous reference, entropy-representative and calibrator choices. Apply [A3] to the interpretation from step 1.1. It yields one entropy on separated primitive products, $\widetilde S(A)=\sum_\ell t_\ell S_{i_\ell}(x_\ell)$, representing both directions of every equal-composition comparison. Finite sums are invariant under permutation and reassociation, additive on concatenation and homogeneous under positive scaling. The empty unit has the empty sum zero; no infinite sum is introduced even when $I$ is infinite. [A1, A2, A3, A5, step 1.1, choose]

3.1 For a joined state, repeatedly choose the reversible split in [A6] until its finite join expression has only scaled primitive factors. Spectator consistency and transitivity make the original state equivalent to this separated primitive product, of the same aggregate composition. Define its entropy as that product's entropy from step 2.1. Two such splits are equivalent to each other, so the representation in step 2.1 makes their entropies equal; the definition is independent of all split choices. For any finite compound, concatenate these expansions. Scaling an expansion gives a reversible expansion of the scaled state by the accessibility scaling axiom in [A6] and the coherent transport in [A5], so this extension is extensive as well as additive. If $A,B$ have the same composition, their expansions $A',B'$ do also; reversibility and transitivity give $A\prec B$ exactly when $A'\prec B'$, hence exactly when $\widetilde S(A)\le\widetilde S(B)$. This extends the same representation to every finite joined or separated state without identifying distinct raw tags. [A3, A5, A6, step 2.1, construct]

4.1 Let $x,y$ lie in one simple chart and $0<t<1$. By [A4], the scaled pair $(t x,(1-t)y)$ compares to the recombined state $t x+(1-t)y$. Step 3.1's representation, additivity and extensivity give $$t\widetilde S(x)+(1-t)\widetilde S(y)\le\widetilde S(t x+(1-t)y).$$ This is concavity on the admitted convex chart; at $t=0,1$ the inequality is equality. [A4, step 3.1, algebra] ∎
## Remarks

The mathematical calibration carrier is a current authored draft with a supplied proof; independent review is still required. The transfer here is conditional on its stated mathematical hypotheses and on the adopted physical accessibility/contact axioms, and is not evidence that those axioms hold in Nature. The calibrated meter in the mathematical construction fixes a common dimensionless unit. Conversion to the physical entropy unit $\mathrm{J\,K^{-1}}$ requires an additional scale calibration. Additive type offsets for cross-composition transitions are handled separately in [[pthm-td-universal-mixing-entropy]].
