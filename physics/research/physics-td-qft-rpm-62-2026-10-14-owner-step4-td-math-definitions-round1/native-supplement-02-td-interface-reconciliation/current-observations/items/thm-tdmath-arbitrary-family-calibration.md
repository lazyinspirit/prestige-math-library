---
id: thm-tdmath-arbitrary-family-calibration
kind: theorem
title: Calibration of an arbitrary family of simple-system entropies
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 13
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-thermal-contact-hypotheses, def-axiom-of-choice, thm-tdmath-conditional-contact-calibrator, thm-tdmath-additive-entropy-representation, def-tdmath-forward-signed-comparison, lem-tdmath-forward-spectator-cancellation]
dependency_roles:
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-thermal-contact-hypotheses: mathematical-premise
  def-axiom-of-choice: mathematical-premise
  thm-tdmath-conditional-contact-calibrator: mathematical-premise
  thm-tdmath-additive-entropy-representation: mathematical-premise
  def-tdmath-forward-signed-comparison: mathematical-premise
  lem-tdmath-forward-spectator-cancellation: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 2.5 and §IV.B.2, pp. 27–29, 56–59"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, Chapters 2 and 4, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  precheck: n/a
---

## Statement

Let $I$ be a nonempty set of primitive simple-system labels containing a distinguished meter label $m$. Assume every finite separated product is explicitly represented by its finitely many tagged elementary factors; positive scaling and finite product are the only identifications. Suppose the join-closed family satisfies the hypotheses of [[thm-tdmath-conditional-contact-calibrator]], and fix a strict meter pair $z_0\prec\prec z_1$ in $\Gamma_m$. Assume the Axiom of Choice. Then one can choose, for every $i\in I$, an additive constant and positive scale for its same-type entropy so that

$$S\big((t_1i_1,x_1),\ldots,(t_ni_n,x_n)\big)=\sum_{\ell=1}^n t_\ell S_{i_\ell}(x_\ell)$$

is additive, extensive, and characterizes every same-composition comparison on every finite separated product. No conclusion is asserted for transitions that change composition.

## Facts & Assumptions

**Given:** The explicit finite-factor family, common contact branch, strict meter pair, and Axiom of Choice.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets admits a choice function; it selects the reference states, entropy representatives, and calibrator data used below.

[F1] [[thm-tdmath-conditional-contact-calibrator]]: for each pair of simple types in the join-closed family, strict calibrator endpoints exist and their reversible pair relation identifies the two reference increments in signed comparison.

[F2] [[thm-tdmath-additive-entropy-representation]]: once a type and its scaled products have CH, a finite real additive extensive entropy represents their equal-mass comparisons.

[F3] [[def-tdmath-forward-signed-comparison]] and [[lem-tdmath-forward-spectator-cancellation]]: signed comparison is translation-invariant and additive, agrees with ordinary comparison on nonnegative equal-mass maps, and permits common-spectator cancellation.

## Proof

**Given:** [A1], [F1]–[F3].

1.1 Use the positive type normalization in [[def-tdmath-forward-sector-hypotheses]] whenever invoking [F2]; state entropies evaluate represented maps $\mathsf{J}(x)$, and their unit-label entropy density is $S_i(x)/w_{\Gamma_i}$. Apply [F2] to the meter type and choose its entropy $S_m$ so $S_m(z_0)=0$ and $S_m(z_1)=1$. Set the meter reference to $r_m=z_0$, and use [A1] to choose a reference state $r_i$ and one same-type entropy representative for every $i\ne m$. For each $i\ne m$, use [F1] to choose calibrator states $a_i,b_i\in\Gamma_i$ and $c_i,d_i\in\Gamma_m$ such that $a_i\prec\prec b_i$, $c_i\prec\prec d_i$, and $(a_i,d_i)\sim(b_i,c_i)$; also choose $r_i\in\Gamma_i$. For the meter label set $a_m=c_m=z_0$ and $b_m=d_m=z_1$; the two pairs $(z_0,z_1)$ and $(z_1,z_0)$ are the same two-copy meter compound up to permutation. Write $S_i^0$ for the selected entropy representative, with $S_m^0=S_m$, and put $\Delta_i=S_i^0(b_i)-S_i^0(a_i)>0$ and $\mu_i=S_m(d_i)-S_m(c_i)>0$. Define $S_i(x):=\frac{\mu_i}{\Delta_i}\bigl(S_i^0(x)-S_i^0(r_i)\bigr)$. Then $S_i(r_i)=0$ and $S_i(b_i)-S_i(a_i)=\mu_i$, matching the meter entropy increment across the chosen calibrator endpoints. For $i=m$, $\Delta_m=\mu_m=1$, so this agrees with the fixed meter normalization. [A1, F1, F2, choose]

2.1 For a finite separated compound $A$ with factors $(t_\ell i_\ell,x_\ell)$, define $S(A):=\sum_\ell t_\ell S_{i_\ell}(x_\ell)$. The sum is finite and invariant under reordering; concatenating compounds adds the sums, and scaling every amount by $t>0$ multiplies it by $t$. The explicit-factor convention in the Statement therefore makes $S$ well-defined, additive, and extensive. [A1, step 1.1, construct]

3.1 Fix a composition with amounts $M_i$ for finitely many labels and let $A,B$ be two states of that same composition. For a state $x$ of type $i$, put
$s_i(x):=\frac{S_i(x)-S_i(a_i)}{\mu_i}.$
The same-type entropy representation and the CH for type $i$ show
$\mathsf{J}(x)\sim_s(1-s_i(x))\mathsf{J}(a_i)+s_i(x)\mathsf{J}(b_i).$
Indeed, the signed difference has total coefficient zero and $S_i$-value zero, so its positive and negative parts have equal mass and entropy and therefore compare both ways by [F2]. The calibrator relation gives
$(\mathsf{J}(b_i)-\mathsf{J}(a_i))\sim_s(\mathsf{J}(d_i)-\mathsf{J}(c_i))$
by taking the signed difference of $(a_i,d_i)\sim(b_i,c_i)$ and canceling common terms with [F3]. Add and scale these identities over the finitely many factors of $A$. With
$q_i(A):=\sum_{\ell:\,i_\ell=i}t_\ell s_i(x_\ell),$
the resulting signed map is
$A\sim_s \sum_i M_i \mathsf{J}(a_i)+\sum_i q_i(A)(\mathsf{J}(d_i)-\mathsf{J}(c_i)),$
where the sums range over the finite support of the composition. The same holds for $B$. Since they have the same composition, the reference base cancels, and $B-A$ is signed-equivalent to the finite meter map
$D:=\sum_i\bigl(q_i(B)-q_i(A)\bigr)(\mathsf{J}(d_i)-\mathsf{J}(c_i)).$
Extend the meter entropy linearly to raw finite signed coefficient maps using density $S_m(z)/w_{\Gamma_m}$ at a meter raw tag $(\Gamma_m,z)$; in particular its value on $\mathsf{J}(z)$ is $S_m(z)$. Then
$S_m(D)=\sum_i\bigl(q_i(B)-q_i(A)\bigr)\mu_i=S(B)-S(A).$
The positive and negative parts of $D$ have equal mass. If $S(A)\le S(B)$, the same-type entropy representation [F2] for finite meter products gives $D^-\prec D^+$, hence $D$ compares in the forward signed direction. Translation, addition, and ordinary-order compatibility [F3] transfer this to $A\prec B$. Conversely, if $A\prec B$, the same signed equivalences and translation in [F3] give $D^-\prec D^+$. The meter representation in [F2] then forces $S_m(D)=S(B)-S(A)\ge0$. Reversing the entropy inequality gives the reverse comparison. Thus $S$ characterizes every same-composition comparison. Each particular comparison uses only finitely many labels; no infinite sum or uncountable product occurs. [A1, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 The meter normalization fixes the multiplicative unit. Changing the chosen reference state for type $i$ changes only its additive constant; on a finite compound these constants contribute amount-weighted conserved-type offsets. This proves the stated freedom and completes the construction. [A1, step 1.1, step 2.1, algebra] ∎
## Remarks

AC is used only for simultaneous reference-state, entropy-representative, and calibrator choices over the arbitrary label set $I$. Cross-composition monotonicity requires the additional cost and offset hypotheses developed later.
