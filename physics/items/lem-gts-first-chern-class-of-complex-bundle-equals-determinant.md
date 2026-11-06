---
id: lem-gts-first-chern-class-of-complex-bundle-equals-determinant
kind: lemma
title: "First Chern class of a complex bundle equals that of its determinant"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 0
domain: mathematics
library: physics
category: string-theory
axiom_strength: "ZF + AC; inherited from the projective-bundle and characteristic-class suppliers."
deps:
  - def-axiom-of-choice
  - thm-complex-splitting-principle-with-integral-injective-pullback
  - def-complex-flag-bundle-and-chern-roots
  - lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type
  - thm-homotopic-maps-induce-equal-maps-in-singular-cohomology
  - def-chern-classes-from-the-projective-bundle-relation
  - thm-naturality-normalization-and-whitney-sum-for-chern-classes
  - prop-first-chern-class-of-tensor-dual-and-conjugate-lines
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-complex-splitting-principle-with-integral-injective-pullback: mathematical-premise
  def-complex-flag-bundle-and-chern-roots: mathematical-premise
  lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type: mathematical-premise
  thm-homotopic-maps-induce-equal-maps-in-singular-cohomology: mathematical-premise
  def-chern-classes-from-the-projective-bundle-relation: mathematical-premise
  thm-naturality-normalization-and-whitney-sum-for-chern-classes: mathematical-premise
  prop-first-chern-class-of-tensor-dual-and-conjugate-lines: mathematical-premise
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Section 3.1, printed pp. 78–82, splitting-principle and Chern-class conventions."
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume AC. If $E\to B$ is a numerable complex vector bundle of positive finite rank over a path-connected paracompact Hausdorff CGWH space $B$ of CW homotopy type, then $c_1(E)=c_1(\det_{\mathbb C}E)$ in $H^2(B;\mathbb Z)$, where $\det_{\mathbb C}E=\Lambda^{\operatorname{rank}_{\mathbb C}E}E$.

## Statement references

[[thm-complex-splitting-principle-with-integral-injective-pullback]]

[[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]

## Facts & Assumptions

**Given:** AC and a numerable complex vector bundle $E\to B$ of rank $n\ge1$ on the stated base.

[A1] Full AC is the choice-function principle of [[def-axiom-of-choice]]; it is inherited by the projective-bundle and Chern-class suppliers below.

[F1] For a numerable complex bundle on a path-connected paracompact Hausdorff CW complex, the flag pullback splits $q^*E=L_1\oplus\cdots\oplus L_n$ and $q^*$ is injective on integral cohomology ([[thm-complex-splitting-principle-with-integral-injective-pullback]]).

[F2] Pulling a numerable bundle back along a continuous map preserves numerability. For a bundle over a CW model, its flag bundle is an iterated projective bundle with compact CW fibers $\mathbb{CP}^{r}$; the general compact-fiber statement makes every stage paracompact Hausdorff CGWH of CW type. A homotopy equivalence induces an isomorphism on singular cohomology ([[def-complex-flag-bundle-and-chern-roots]], [[lem-compact-fibre-numerable-bundle-totals-are-paracompact-hausdorff-of-cw-type]], [[thm-homotopic-maps-induce-equal-maps-in-singular-cohomology]]).

[F3] The projective-bundle definition gives a unique monic relation for each numerable complex bundle over a path-connected paracompact Hausdorff CGWH base of CW type. For a pullback, the projective charts identify $P(f^*V)$ with the base-change $B'\times_B P(V)$ and identify its tautological line with the pulled-back line. The Thom definition of its Euler class and naturality of Thom classes then pull back the tautological class and the defining relation; coefficient uniqueness gives Chern-class naturality on these bases. On a CW base the total Chern class is multiplicative under Whitney sums ([[def-chern-classes-from-the-projective-bundle-relation]], [[thm-naturality-normalization-and-whitney-sum-for-chern-classes]]).

[F4] On a line bundle, the first Chern class is its coefficient in the projective-bundle relation ([[def-chern-classes-from-the-projective-bundle-relation]]).

[F5] First Chern class is additive under line-bundle tensor product: $c_1(L\otimes M)=c_1(L)+c_1(M)$ ([[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

## Proof

**Proof technique:** splitting principle.

1.1 We record the pullback naturality used in this proof, including the case of a CW-type target. Let $b:B'\to B$ be continuous between path-connected paracompact Hausdorff CGWH bases of CW type, and let $V\to B$ be numerable of positive rank. In projective charts, $P(b^*V)$ is $B'\times_B P(V)$; the induced map $\widetilde b:P(b^*V)\to P(V)$ pulls the tautological line of $V$ back to that of $b^*V$. Its oriented Euler class $x$ is therefore natural under $\widetilde b$. Pull back the defining monic relation for $V$ along $\widetilde b$. The result is a monic relation for $x_{b^*V}$ with coefficients $b^*c_i(V)$; uniqueness in the projective-bundle theorem on $B'$ gives $c_i(b^*V)=b^*c_i(V)$. [F3, construct, algebra]

1.2 Choose a path-connected CW complex $K$ and a homotopy equivalence $f:K\to B$, and put $E_K=f^*E$. The pulled-back numeration makes $E_K$ a numerable complex bundle over the CW base $K$. Apply [F1] to its flag bundle $q:F=\operatorname{Fl}(E_K)\to K$. It gives a splitting $q^*E_K=\bigoplus_{j=1}^nL_j$ and injectivity of $q^*:H^2(K;\mathbb Z)\to H^2(F;\mathbb Z)$. [A1, F1, given]

2.1 Each projective stage in the flag tower has fiber $\mathbb{CP}^{r}$, a compact finite CW complex. The general compact-fiber conclusion in [F2] makes $F$ paracompact Hausdorff CGWH of CW type. The flag fiber $U(n)/T^n$ is connected and $K$ is path connected, so $F$ is path connected. Choose a path-connected CW model $h:W\to F$ that is a homotopy equivalence. [F2, step 1.2]

3.1 Let $V=q^*E_K$. By step 1.1, naturality on CW-type bases gives $h^*c_1(V)=c_1(h^*V)$ and $h^*c_1(\det_{\mathbb C}V)=c_1(h^*\det_{\mathbb C}V)$. On the CW base $W$, the splitting in step 1.2, Whitney multiplicativity, and line-bundle tensor additivity yield
$$c_1(h^*V)=\sum_{j=1}^n c_1(h^*L_j)=c_1\!\left(\bigotimes_{j=1}^n h^*L_j\right)=c_1(h^*\det_{\mathbb C}V).$$
Here $h^*\det_{\mathbb C}V\cong\det_{\mathbb C}(h^*V)\cong\bigotimes_j h^*L_j$. Since $h^*$ is an isomorphism by [F2], this proves $c_1(V)=c_1(\det_{\mathbb C}V)$ on $F$. The injectivity of $q^*$ from step 1.2 then gives $c_1(E_K)=c_1(\det_{\mathbb C}E_K)$ on $K$. [F2, F3, F5, step 1.2, step 2.1]

4.1 Apply step 1.1 to $f:K\to B$: $c_1(E_K)=f^*c_1(E)$, and exterior powers commute with pullback, so $c_1(\det_{\mathbb C}E_K)=f^*c_1(\det_{\mathbb C}E)$. The map $f^*$ is an isomorphism by homotopy invariance [F2]. The equality on $K$ from step 3.1 therefore implies $c_1(E)=c_1(\det_{\mathbb C}E)$ on $B$. [F2, F3, step 3.1] ∎
