---
id: thm-gts-intrinsic-mirror-potential-with-fano-quantum-periods
kind: theorem
title: Intrinsic-mirror potential with Fano quantum periods
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 6
domain: mathematics
library: physics
category: string-theory
proof_strategy: direct
deps:
  - def-gts-log-cy-pair-toric-degeneration-and-scattering-data
  - def-gts-johnston-log-cy-compactification
  - def-gts-quantum-cohomology-period-and-mirror-map-interface
  - def-gts-intrinsic-mirror-algebra-and-classical-period
  - def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone
  - thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities
  - thm-gts-genus-zero-quantum-product-associativity
dependency_roles:
  def-gts-log-cy-pair-toric-degeneration-and-scattering-data: mathematical-premise
  def-gts-johnston-log-cy-compactification: mathematical-premise
  def-gts-quantum-cohomology-period-and-mirror-map-interface: mathematical-premise
  def-gts-intrinsic-mirror-algebra-and-classical-period: mathematical-premise
  def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone: mathematical-premise
  thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities: mathematical-premise
  thm-gts-genus-zero-quantum-product-associativity: mathematical-premise
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Sam Johnston, Quantum periods, toric degenerations and intrinsic mirror symmetry
      url: https://arxiv.org/pdf/2501.01408v3
      locator: Theorem 1.1 and its proof in §5, including the auxiliary compactification, log-degeneration, and period comparison
    - title: Per Berglund, Tim Gräfnitz, and Michael Lathwood, Gromov-Witten Invariants and Mirror Symmetry for Non-Fano Varieties via Tropical Disks
      url: https://arxiv.org/pdf/2404.16782v3
      locator: §§3-4, independent treatment of descendant quantum periods and log-pair conventions; no Fano theorem is imported from it
    - title: William Fulton and Rahul Pandharipande, Notes on Stable Maps and Quantum Cohomology
      url: https://arxiv.org/pdf/alg-geom/9608011v2
      locator: §§5, 7-8, ordinary stable maps, virtual invariants, and quantum cohomology; not a logarithmic degeneration supplier
verification:
  precheck: pending
---

## Statement

Let $X$ be a smooth projective Fano variety over $\mathbb C$, meaning $-K_X$ is ample, and let $D\in|-K_X|$ be a reduced effective Cartier divisor. Put $U=X\setminus D$. Assume $U$ has the source's affine log-Calabi-Yau structure: there is an auxiliary projective SNC compactification $(X'',D'')$ satisfying the Gross-Siebert convention $K_{X''}+D''=\sum_i a_iD_i''$ with $a_i\ge0$ and $X''\setminus D''\cong U$. Let $(X',D')$ be any projective SNC compactification of $U$ dominating $(X,D)$.

For each irreducible component $D_i$ of $D$, let $\nu_{D_i}$ be its divisorial valuation point in the essential skeleton of $U$, and let $\vartheta_{\nu_{D_i}}$ be the corresponding theta-basis element in the source intrinsic mirror algebra $R(X',D')$. Set $W_D=\sum_i\vartheta_{\nu_{D_i}}$. Push effective-curve monomials forward along $X'\to X$. Under the source's intrinsic-mirror-algebra and log Gromov-Witten degeneration inputs stated below, the classical period in the resulting completion satisfies
$$\sum_{m\ge0}\operatorname{tr}_{R(X',D')}(W_D^m)=\widehat G_X.$$
The sum over powers is interpreted coefficientwise in the source completion, and its local finiteness after pushforward is an explicit hypothesis. This is a period identity for every allowed dominating SNC compactification; it does not identify the full mirror-family fibers for arbitrary $U$.

## Statement references

[[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]

[[def-gts-johnston-log-cy-compactification]]

[[def-gts-quantum-cohomology-period-and-mirror-map-interface]]

[[def-gts-intrinsic-mirror-algebra-and-classical-period]]

[[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]

[[thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities]]

[[thm-gts-genus-zero-quantum-product-associativity]]

## Facts & Assumptions

**Given:** The Fano pair $(X,D)$, the auxiliary and dominating compactifications, the effective-curve base change, and the exact interfaces [F1-F7].

[F1] [[def-gts-quantum-cohomology-period-and-mirror-map-interface]]: the regularized period coefficient at anticanonical degree $d$ is $d!$ times the sum of the one-point descendant invariants of classes $\beta$ with $-K_X\cdot\beta=d$.

[F2] [[def-gts-intrinsic-mirror-algebra-and-classical-period]]: defines the coefficient-of-unit trace and the formal series of trace coefficients of powers of an element, but supplies no mirror algebra by itself.

[F3] [[def-gts-log-cy-pair-toric-degeneration-and-scattering-data]]: the original smooth anticanonical pair satisfies $K_X(D)\cong\mathcal O_X$; this is distinct from the source convention for the auxiliary compactification.

[F4] [[def-gts-johnston-log-cy-compactification]]: the auxiliary compactification uses the source condition $K_{X''}+D''=\sum_i a_iD_i''$ with $a_i\ge0$.

[F5] [[def-gts-perfect-obstruction-theory-and-intrinsic-normal-cone]]: specifies the general algebraic virtual-class construction but does not supply a logarithmic obstruction theory.

[F6] [[thm-gts-r4-12b-algebraic-stable-map-descendants-and-deformation-splitting-identities]]: the ordinary stable-map descendant and splitting contract remains escalated at the current readiness record; it does not itself supply logarithmic stable maps.

[F7] [[thm-gts-genus-zero-quantum-product-associativity]]: formal associativity follows from the genus-zero splitting axiom, and its current readiness remains escalated through [F6].

[A1] Gross-Siebert's intrinsic mirror construction supplies the complete algebra $R(X',D')$, its theta basis, multiplication, and unit under the source log and completion hypotheses. The generic algebra interface [F2] does not prove existence or the required structure constants; the construction has no local supplier here.

[A2] Under the source's blowup degeneration and compatible logarithmic virtual gluing, the descendant invariant for $A$ with $d=-K_X\cdot A$ has the expansion over rigid tropical types $\tau$, $n_A=\sum_\tau m_\tau N_\tau/|\operatorname{Aut}(\tau)|$. The point constraint forces the marked vertex to the main SNC component; the $\psi^{d-2}$ insertion forces valency $d+1$; nefness of the pulled-back anticanonical divisor forces each boundary leg to have primitive degree one; every other vertex is a degree-one fibre curve in an attached projective bundle. The local virtual degree $N_\tau$ is the point-constrained structure coefficient of the corresponding product of boundary theta elements. Johnston §5 gives this route, but the log degeneration, gluing, and obstruction-theory comparisons have no local proof suppliers here.

[A3] For the chosen embedded resolution, the source identifies each point-constrained main-component structure coefficient $\langle\prod_i\vartheta_{D_i}^{q_i}\rangle[t^A]$ with the Keel-Yu naive curve count $\eta(p_1,\ldots,p_d,A)$; those counts are independent of the dominating SNC compactification. The complete Keel-Yu correspondence and its hypotheses are not reconstructed locally.

[A4] The source coefficient completion and pushforward are such that, for each fixed effective-curve monomial on $X$, only finitely many powers $W_D^m$ contribute to its trace coefficient. This is the convergence condition needed to specialize the formal period variable to $1$; it is not implied by the generic mirror-algebra definition.

## Proof

1.1 Under [A1], each original boundary component determines the theta element $\vartheta_{\nu_{D_i}}$, and their sum is the stated potential $W_D$. The strict pair convention [F3] and boundary-effective auxiliary convention [F4] are distinct source hypotheses. By [F2], the trace coefficient is the unit coefficient in each power; by [F1], the regularized period coefficient of anticanonical degree $d$ is $d!\sum_{-K_X\cdot\beta=d}n_\beta$. Associativity of the quantum product is only the conditional interface [F7]. [A1, F1, F2, F3, F4, F7, given]

1.2 For a class $A$ with $d=-K_X\cdot A$, write $q_i=D_i\cdot A$ for the irreducible boundary components, so $\sum_iq_i=d$. The degeneration input [A2] restricts contributing types to one main vertex of class $A$ and $q_i$ degree-one fibre legs over each $D_i$; its graph automorphism factor is $\prod_iq_i!$. By [A3], the main-component virtual degree is the coefficient $\langle\prod_i\vartheta_{D_i}^{q_i}\rangle[t^A]$ in the theta algebra. Thus $n_A=\langle\prod_i\vartheta_{D_i}^{q_i}\rangle[t^A]/\prod_iq_i!$. In the multinomial expansion of $W_D^d$, the coefficient of this ordered product is $d!/\prod_iq_i!$; the curve-class grading makes only the tuple $q_i=D_i\cdot A$ contribute to $[t^A]$. Therefore
$$\frac1{d!}[t^A]\operatorname{tr}(W_D^d)=\frac{\langle\prod_i\vartheta_{D_i}^{q_i}\rangle[t^A]}{\prod_iq_i!}=n_A,$$
where the trace extracts the unit coefficient. The degree-$d$ coefficient of the trace period is $d!n_A$, exactly the regularized coefficient. [A1, A2, A3, F1, F5, F6, given, algebra]

2.1 The pushforward $X'\to X$ maps each effective-curve monomial to its class on $X$. The stated local-finiteness hypothesis lets us sum the coefficientwise equalities of step 1.2 in the completion used for $\widehat G_X$. The degree-zero coefficient is $1$ on both sides. This proves the stated period identity conditional on [A1-A4]. Those source inputs are not locally supplied, so the item remains escalated. [A1, A2, A3, A4, F1, F2, step 1.2] ∎

## Remarks

Johnston's source states that the full mirror-family fiber is independent of compactification when $U$ contains a dense torus; outside that case such independence is expected but not established. The item asserts only the period identity. The planned abbreviated hypotheses do not name the auxiliary Gross-Siebert boundary-effective convention, so it is made explicit here; if a stricter $K_{X''}(D'')\cong\mathcal O_{X''}$ convention was intended, the source hypotheses need owner reconciliation.
